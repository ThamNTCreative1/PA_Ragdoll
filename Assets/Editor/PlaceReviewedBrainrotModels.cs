using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEditor;
using UnityEditor.SceneManagement;

public static class PlaceReviewedBrainrotModels
{
    const string ScenePath = "Assets/01 RESOURCES/BrainrotVoxel/Scenes/BrainrotVoxel_Showroom.unity";
    const string Output = "ArtSource/ScenePlacement";
    static readonly string[] Names = { "TralaleroTralala", "BallerinaCappuccina", "BombardiroCrocodilo", "LiriliLarila", "TungTungSahur" };
    static readonly string[] Assets = {
        "Assets/01 RESOURCES/Tralalero/Tralalero_Original_Idle.prefab",
        "Assets/01 RESOURCES/BallerinaCappuccina/Ballerina_Voxel_Idle.prefab",
        "Assets/01 RESOURCES/BombardiroCrocodilo/Bombardiro_Idle.prefab",
        "Assets/01 RESOURCES/Lirili/Lirili_Idle.prefab",
        "Assets/01 RESOURCES/TungTungSahur/TungSahur_Minecraft_Idle.prefab"
    };
    [Serializable] class Placement { public string name, prefab; public Vector3 position; public float height, ground; public bool idle; }
    [Serializable] class Report { public string scene; public Placement[] placements; public int visibleModels; }
    [InitializeOnLoadMethod] static void Queue() { EditorApplication.delayCall += RunOnce; }
    static void RunOnce()
    {
        if (File.Exists(Output + "/placement_validation.json")) return;
        if (EditorApplication.isCompiling || EditorApplication.isUpdating)
        { EditorApplication.delayCall += RunOnce; return; }
        var scene = SceneManager.GetSceneByPath(ScenePath);
        if (!scene.IsValid() || !scene.isLoaded || EditorApplication.isPlayingOrWillChangePlaymode) return;
        try { Place(); } catch (Exception e) { Directory.CreateDirectory(Output); File.WriteAllText(Output + "/placement_error.txt", e.ToString()); Debug.LogException(e); }
    }
    [MenuItem("Tools/Brainrot/Place Reviewed Models In Showroom")]
    public static void Place()
    {
        var scene = SceneManager.GetSceneByPath(ScenePath);
        if (!scene.IsValid() || !scene.isLoaded) throw new Exception("Open the showroom scene first.");
        var roots = scene.GetRootGameObjects();
        var old = Names.Select(n => roots.SingleOrDefault(o => o.name == n)).ToArray();
        var prefabs = Assets.Select(p => AssetDatabase.LoadAssetAtPath<GameObject>(p)).ToArray();
        if (old.Any(o => o == null) || prefabs.Any(o => o == null)) throw new Exception("Missing an original slot or reviewed prefab; no scene changes made.");
        Directory.CreateDirectory(Output);
        if (!File.Exists(Output + "/Showroom_BeforePlacement.unity")) File.Copy(ScenePath, Output + "/Showroom_BeforePlacement.unity");
        Undo.IncrementCurrentGroup(); int undoGroup = Undo.GetCurrentGroup(); Undo.SetCurrentGroupName("Place reviewed Brainrot models");
        var archive = new GameObject("_PreviousModels"); SceneManager.MoveGameObjectToScene(archive, scene); Undo.RegisterCreatedObjectUndo(archive, "Archive previous models");
        var rows = new List<Placement>();
        for (int i = 0; i < Names.Length; i++)
        {
            var slot = new GameObject(Names[i] + "_Reviewed"); SceneManager.MoveGameObjectToScene(slot, scene); Undo.RegisterCreatedObjectUndo(slot, "Place model slot");
            slot.transform.SetPositionAndRotation(old[i].transform.position, old[i].transform.rotation);
            slot.transform.localScale = old[i].transform.localScale;
            var model = (GameObject)PrefabUtility.InstantiatePrefab(prefabs[i], scene); Undo.RegisterCreatedObjectUndo(model, "Place reviewed prefab");
            model.transform.SetParent(slot.transform, false);
            model.transform.localPosition = Vector3.zero;
            // Keep the prefab's import-axis rotation and unit scale.
            model.transform.localRotation = prefabs[i].transform.localRotation;
            model.transform.localScale = prefabs[i].transform.localScale;
            var animator = model.GetComponentInChildren<Animator>();
            if (animator != null && animator.runtimeAnimatorController != null)
            {
                animator.applyRootMotion = false;
                var clip = animator.runtimeAnimatorController.animationClips.FirstOrDefault();
                if (clip != null) clip.SampleAnimation(animator.gameObject, 0);
            }
            var renderers = model.GetComponentsInChildren<Renderer>().Where(r => r.enabled).ToArray();
            if (renderers.Length == 0) throw new Exception("No renderer in " + Assets[i]);
            Bounds bounds = renderers[0].bounds; foreach (var r in renderers.Skip(1)) bounds.Encapsulate(r.bounds);
            float targetGround = old[i].transform.position.y;
            model.transform.position += Vector3.up * (targetGround - bounds.min.y);
            rows.Add(new Placement { name = Names[i], prefab = Assets[i], position = slot.transform.position, height = bounds.size.y, ground = targetGround, idle = animator != null && animator.runtimeAnimatorController != null });
            Undo.SetTransformParent(old[i].transform, archive.transform, "Archive old model");
        }
        // Preserve previously placed test instances without leaving duplicates visible.
        foreach (var root in roots)
        {
            string path = PrefabUtility.GetPrefabAssetPathOfNearestInstanceRoot(root);
            if (!old.Contains(root) && Assets.Contains(path)) Undo.SetTransformParent(root.transform, archive.transform, "Archive previous preview");
        }
        Undo.RecordObject(archive, "Hide previous models"); archive.SetActive(false);
        EditorSceneManager.MarkSceneDirty(scene); EditorSceneManager.SaveScene(scene);
        Undo.CollapseUndoOperations(undoGroup);
        var report = new Report { scene = ScenePath, placements = rows.ToArray(), visibleModels = rows.Count };
        File.WriteAllText(Output + "/placement_validation.json", JsonUtility.ToJson(report, true));
        var camera = scene.GetRootGameObjects().SelectMany(o => o.GetComponentsInChildren<Camera>()).FirstOrDefault(c => c.name == "Main Camera");
        if (camera != null)
        {
            var previous = camera.targetTexture; var previousActive = RenderTexture.active;
            var rt = new RenderTexture(1600, 900, 24); var pixels = new Texture2D(1600, 900, TextureFormat.RGB24, false);
            try { camera.targetTexture = rt; camera.Render(); RenderTexture.active = rt; pixels.ReadPixels(new Rect(0, 0, 1600, 900), 0, 0); pixels.Apply(); File.WriteAllBytes(Output + "/Showroom_Reviewed.png", pixels.EncodeToPNG()); }
            finally { camera.targetTexture = previous; RenderTexture.active = previousActive; UnityEngine.Object.DestroyImmediate(rt); UnityEngine.Object.DestroyImmediate(pixels); }
        }
        Selection.objects = scene.GetRootGameObjects().Where(o => o.name.EndsWith("_Reviewed")).Cast<UnityEngine.Object>().ToArray();
        EditorSceneManager.SaveScene(scene);
        Debug.Log("Placed all five reviewed idle models in their matching showroom slots.");
    }
}

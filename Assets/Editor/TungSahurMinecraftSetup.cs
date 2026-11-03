using UnityEngine;
using UnityEditor;
using UnityEditor.Animations;
using System.IO;
using System.Linq;

public static class TungSahurMinecraftSetup
{
    const string Folder = "Assets/01 RESOURCES/TungTungSahur/";
    const string Stem = "TungSahur_Minecraft_Idle";
    [InitializeOnLoadMethod]
    static void Initialize() { EditorApplication.delayCall += SetupIfMissing; }
    static void SetupIfMissing()
    {
        if (File.Exists(Folder + Stem + ".prefab")) return;
        if (EditorApplication.isCompiling || EditorApplication.isUpdating)
        { EditorApplication.delayCall += SetupIfMissing; return; }
        if (AssetDatabase.LoadAssetAtPath<GameObject>(Folder + Stem + ".fbx") != null) Setup();
    }
    [MenuItem("Tools/Brainrot/Setup Minecraft Tung Sahur Idle")]
    public static void Setup()
    {
        string fbx = Folder + Stem + ".fbx";
        var importer = AssetImporter.GetAtPath(fbx) as ModelImporter;
        if (importer == null) return;
        importer.animationType = ModelImporterAnimationType.Generic;
        importer.importAnimation = true;
        importer.animationCompression = ModelImporterAnimationCompression.Off;
        var clips = importer.clipAnimations;
        if (clips.Length == 0) clips = importer.defaultClipAnimations;
        foreach (var clip in clips) { clip.name = Stem; clip.loopTime = true; clip.loopPose = true; }
        importer.clipAnimations = clips; importer.SaveAndReimport();
        var material = AssetDatabase.LoadAssetAtPath<Material>(Folder + "TungSahur_Minecraft_Palette.mat");
        if (material == null)
        {
            material = new Material(Shader.Find("OBP/VoxelPalette"));
            AssetDatabase.CreateAsset(material, Folder + "TungSahur_Minecraft_Palette.mat");
        }
        var clipAsset = AssetDatabase.LoadAllAssetsAtPath(fbx).OfType<AnimationClip>().FirstOrDefault(c => !c.name.StartsWith("__preview__"));
        var controller = AssetDatabase.LoadAssetAtPath<AnimatorController>(Folder + Stem + ".controller");
        if (controller == null) controller = AnimatorController.CreateAnimatorControllerAtPath(Folder + Stem + ".controller");
        var machine = controller.layers[0].stateMachine;
        var state = machine.states.Length == 0 ? machine.AddState("Idle") : machine.states[0].state;
        state.motion = clipAsset; machine.defaultState = state;
        var instance = Object.Instantiate(AssetDatabase.LoadAssetAtPath<GameObject>(fbx)); instance.name = Stem;
        foreach (var renderer in instance.GetComponentsInChildren<Renderer>()) renderer.sharedMaterial = material;
        var animator = instance.GetComponent<Animator>();
        if (animator == null) animator = instance.AddComponent<Animator>();
        animator.runtimeAnimatorController = controller; animator.applyRootMotion = false;
        PrefabUtility.SaveAsPrefabAsset(instance, Folder + Stem + ".prefab");
        int triangles = instance.GetComponentsInChildren<SkinnedMeshRenderer>().Sum(r => r.sharedMesh.triangles.Length / 3);
        File.WriteAllText("ArtSource/TungTungSahur/Minecraft/Idle/unity_validation.txt", "Triangles=" + triangles + "; duration=" + (clipAsset == null ? 0 : clipAsset.length) + "; looping=" + (clipAsset != null && clipAsset.isLooping) + "; palette=" + (material != null));
        Object.DestroyImmediate(instance); AssetDatabase.SaveAssets();
    }
}

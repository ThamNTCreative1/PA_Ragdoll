using UnityEngine;
using UnityEditor;
using UnityEditor.Animations;
using System.IO;
using System.Linq;

public static class TungSahurOriginalSetup
{
    const string Folder = "Assets/01 RESOURCES/TungTungSahur/";
    [InitializeOnLoadMethod]
    static void QueueSetup() { EditorApplication.delayCall += SetupIfNeeded; }

    static void SetupIfNeeded()
    {
        if (File.Exists(Folder + "TungSahur_Original_Idle.prefab")) return;
        if (EditorApplication.isCompiling || EditorApplication.isUpdating)
        { EditorApplication.delayCall += SetupIfNeeded; return; }
        if (AssetDatabase.LoadAssetAtPath<GameObject>(Folder + "TungSahur_Original_Idle.fbx") != null) Setup();
    }

    [MenuItem("Tools/Brainrot/Setup Original Tung Sahur")]
    public static void Setup()
    {
        string fbx = Folder + "TungSahur_Original_Idle.fbx";
        var importer = AssetImporter.GetAtPath(fbx) as ModelImporter;
        if (importer == null) return;
        importer.animationType = ModelImporterAnimationType.Generic;
        importer.importAnimation = true;
        importer.animationCompression = ModelImporterAnimationCompression.Off;
        var clips = importer.clipAnimations;
        if (clips.Length == 0) clips = importer.defaultClipAnimations;
        foreach (var clip in clips) { clip.name = "TungSahur_Original_Idle"; clip.loopTime = true; clip.loopPose = true; }
        importer.clipAnimations = clips;
        importer.SaveAndReimport();
        var texture = AssetDatabase.LoadAssetAtPath<Texture2D>(Folder + "Textures/Material_baseColor.png");
        var material = AssetDatabase.LoadAssetAtPath<Material>(Folder + "TungSahur_Original.mat");
        if (material == null) { material = new Material(Shader.Find("Standard")); AssetDatabase.CreateAsset(material, Folder + "TungSahur_Original.mat"); }
        material.mainTexture = texture; material.SetFloat("_Glossiness", .15f); EditorUtility.SetDirty(material);
        string controllerPath = Folder + "TungSahur_Original_Idle.controller";
        var controller = AssetDatabase.LoadAssetAtPath<AnimatorController>(controllerPath);
        if (controller == null) controller = AnimatorController.CreateAnimatorControllerAtPath(controllerPath);
        var animation = AssetDatabase.LoadAllAssetsAtPath(fbx).OfType<AnimationClip>().FirstOrDefault(c => !c.name.StartsWith("__preview__"));
        var stateMachine = controller.layers[0].stateMachine;
        var state = stateMachine.states.Length > 0 ? stateMachine.states[0].state : stateMachine.AddState("Idle");
        state.motion = animation; stateMachine.defaultState = state;
        var instance = Object.Instantiate(AssetDatabase.LoadAssetAtPath<GameObject>(fbx));
        instance.name = "TungSahur_Original_Idle";
        foreach (var renderer in instance.GetComponentsInChildren<Renderer>()) renderer.sharedMaterial = material;
        var animator = instance.GetComponent<Animator>();
        if (animator == null) animator = instance.AddComponent<Animator>();
        animator.runtimeAnimatorController = controller;
        PrefabUtility.SaveAsPrefabAsset(instance, Folder + "TungSahur_Original_Idle.prefab");
        var meshes = instance.GetComponentsInChildren<SkinnedMeshRenderer>();
        int triangles = meshes.Sum(r => r.sharedMesh.triangles.Length / 3);
        File.WriteAllText("ArtSource/TungTungSahur/OriginalEksArt/Idle/unity_validation.txt", "Original Eks.Art imported. Triangles=" + triangles + "; texture=" + (texture != null) + "; clip=" + (animation != null ? animation.name : "MISSING") + "; duration=" + (animation != null ? animation.length : 0) + "; looping=" + (animation != null && animation.isLooping));
        Object.DestroyImmediate(instance); AssetDatabase.SaveAssets();
    }
}

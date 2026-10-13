using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace MelonSandbox.Editor
{
    [InitializeOnLoad]
    public static class MelonProjectBuilder
    {
        const string Root = "Assets/Playable";
        const string ScenePath = Root + "/Scenes/MelonSandbox.unity";
        static MelonProjectBuilder() { EditorApplication.delayCall += AutoBuild; }
        static void AutoBuild()
        {
            if (!File.Exists("MelonBuild.request") || EditorApplication.isPlayingOrWillChangePlaymode) return;
            if (EditorApplication.isCompiling || EditorApplication.isUpdating) { EditorApplication.delayCall += AutoBuild; return; }
            if (SceneManager.GetActiveScene().isDirty) { Debug.Log("Melon project is ready to build: save your open scene, then use Melon Sandbox/Build native scene."); return; }
            Build();
        }
        [MenuItem("Melon Sandbox/Build native scene")]
        public static void Build()
        {
            if (EditorApplication.isPlaying) throw new InvalidOperationException("Exit Play mode before building the scene.");
            Directory.CreateDirectory(Root + "/Scenes"); Directory.CreateDirectory(Root + "/Prefabs/Characters");
            Directory.CreateDirectory(Root + "/Prefabs/Tools"); Directory.CreateDirectory(Root + "/Resources");
            AssetDatabase.Refresh();
            foreach (var file in Directory.GetFiles("Assets/Playable/Art/Sprites", "*.png"))
            {
                var path = file.Replace('\\', '/'); var importer = (TextureImporter)AssetImporter.GetAtPath(path);
                if (importer == null) continue;
                importer.textureType = TextureImporterType.Sprite; importer.spriteImportMode = SpriteImportMode.Single;
                importer.spritePixelsPerUnit = 100; importer.filterMode = FilterMode.Point;
                importer.mipmapEnabled = false; importer.alphaIsTransparency = true;
                importer.textureCompression = TextureImporterCompression.Uncompressed;
                importer.SaveAndReimport();
            }
            string materialPath = Root + "/Materials/DamageSprite.mat";
            var mat = AssetDatabase.LoadAssetAtPath<Material>(materialPath);
            var damageShader = AssetDatabase.LoadAssetAtPath<Shader>(Root + "/Shaders/MelonDamage.shader");
            if (!damageShader) throw new InvalidOperationException("Missing MelonDamage shader.");
            if (!mat) { mat = new Material(damageShader); AssetDatabase.CreateAsset(mat, materialPath); }
            else { mat.shader = damageShader; EditorUtility.SetDirty(mat); }
            string catalogPath = Root + "/Resources/MelonAssets.asset";
            var catalog = AssetDatabase.LoadAssetAtPath<MelonAssets>(catalogPath);
            if (!catalog) { catalog = ScriptableObject.CreateInstance<MelonAssets>(); AssetDatabase.CreateAsset(catalog, catalogPath); }
            catalog.sprites = Directory.GetFiles("Assets/Playable/Art/Sprites", "*.png").OrderBy(x => x).Select(x => AssetDatabase.LoadAssetAtPath<Sprite>(x.Replace('\\', '/'))).Where(x => x).ToArray();
            catalog.sounds = Directory.GetFiles(Root + "/Audio", "*.*", SearchOption.TopDirectoryOnly).Where(x => x.EndsWith(".mp3") || x.EndsWith(".ogg") || x.EndsWith(".wav")).Select(x => AssetDatabase.LoadAssetAtPath<AudioClip>(x.Replace('\\', '/'))).Where(x => x).ToArray();
            catalog.originalLayout = AssetDatabase.LoadAssetAtPath<TextAsset>(Root + "/Data/original-layout.json");
            catalog.damageMaterial = mat; EditorUtility.SetDirty(catalog); AssetDatabase.SaveAssets();
            var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);
            // Opening a single scene can unload assets referenced only by the old scene.
            catalog = AssetDatabase.LoadAssetAtPath<MelonAssets>(catalogPath);
            var camera = new GameObject("Main Camera"); camera.tag = "MainCamera";
            var cam = camera.AddComponent<Camera>(); camera.AddComponent<AudioListener>(); cam.orthographic = true;
            var light = new GameObject("Directional Light").AddComponent<Light>(); light.type = LightType.Directional; light.intensity = 1;
            var game = new GameObject("Melon Sandbox").AddComponent<MelonGame>(); game.assets = catalog; game.gameCamera = cam;
            game.Initialize(false);
            var characterPrefabs = new List<GameObject>();
            var toolPrefabs = new List<GameObject>();
            foreach (var skin in MelonRagdoll.Skins)
            {
                var c = game.Spawn(skin, Vector2.zero, false);
                c.game = null;
                string prefabPath = Root + "/Prefabs/Characters/" + skin.TrimEnd('_') + ".prefab";
                PrefabUtility.SaveAsPrefabAsset(c.gameObject, prefabPath);
                characterPrefabs.Add(AssetDatabase.LoadAssetAtPath<GameObject>(prefabPath));
                game.characters.Remove(c); UnityEngine.Object.DestroyImmediate(c.gameObject);
            }
            foreach (MelonToolKind kind in Enum.GetValues(typeof(MelonToolKind)))
            {
                var tool = game.CreateTool(kind, Vector2.zero);
                tool.game = null;
                string prefabPath = Root + "/Prefabs/Tools/" + kind + ".prefab";
                PrefabUtility.SaveAsPrefabAsset(tool.gameObject, prefabPath);
                toolPrefabs.Add(AssetDatabase.LoadAssetAtPath<GameObject>(prefabPath));
                game.tools.Remove(tool); UnityEngine.Object.DestroyImmediate(tool.gameObject);
            }
            Physics2D.gravity = new Vector2(0, -20);
            catalog.characterPrefabs = characterPrefabs.ToArray(); catalog.toolPrefabs = toolPrefabs.ToArray(); EditorUtility.SetDirty(catalog);
            PlayerSettings.defaultScreenWidth = 1280; PlayerSettings.defaultScreenHeight = 720;
            PlayerSettings.runInBackground = true;
            PlayerSettings.companyName = "Local Project"; PlayerSettings.productName = "Melon Sandbox Native";
            EditorSceneManager.SaveScene(scene, ScenePath);
            var scenes = EditorBuildSettings.scenes.Where(s => s.path != ScenePath).ToList(); scenes.Insert(0, new EditorBuildSettingsScene(ScenePath, true)); EditorBuildSettings.scenes = scenes.ToArray();
            AssetDatabase.SaveAssets();
            File.WriteAllText("MelonBuild.result.json", JsonUtility.ToJson(new BuildReport { success = true, sprites = catalog.sprites.Length, sounds = catalog.sounds.Length, scene = ScenePath }, true));
            if (File.Exists("MelonBuild.request")) File.Move("MelonBuild.request", "MelonBuild.completed." + DateTime.UtcNow.Ticks);
            Debug.Log("MELON_BUILD_OK: " + catalog.sprites.Length + " sprites, " + catalog.sounds.Length + " sounds; open " + ScenePath + " and press Play.");
        }
        [Serializable] class BuildReport { public bool success; public int sprites, sounds; public string scene; }
        [MenuItem("Melon Sandbox/Run gameplay smoke tests")]
        public static void RunSmokeTests()
        {
            if (!EditorApplication.isPlaying) { Debug.LogError("Enter Play mode, then run gameplay smoke tests."); return; }
            var game = MelonGame.Instance;
            if (game) game.gameObject.AddComponent<MelonSmokeTests>();
        }
        [MenuItem("Melon Sandbox/Open native scene")]
        public static void OpenScene() { EditorSceneManager.OpenScene(ScenePath); }
    }
}

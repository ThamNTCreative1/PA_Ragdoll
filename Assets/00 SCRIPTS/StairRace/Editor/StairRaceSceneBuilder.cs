using System.Collections.Generic;
using System.IO;
using TMPro;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.Rendering;
using UnityEngine.TextCore.LowLevel;
using UnityEngine.UI;

/// <summary>
/// Menu: Tools > Stair Race > Build Scene
/// Builds Assets/Scenes/StairRace.unity from the game's own assets (prefabs, BG, blocks, font)
/// and puts it first in Build Settings for the Luna build. Safe to run again: it rebuilds the scene.
/// </summary>
public static class StairRaceSceneBuilder
{
    const string ScenePath = "Assets/Scenes/StairRace.unity";
    const string ArtDir = "Assets/01 RESOURCES/StairRace/";
    const string ModelDir = "Assets/01 RESOURCES/KSDH/Model/";
    const string PrefabDir = "Assets/03 PREFABS/";

    // Layout (world units)
    const float BlockSize = 1.3f;
    const float PodiumTop = 9.1f;      // 7 blocks
    const float StartTop = 1.3f;       // side characters start one block above ground
    const float SideX = 2.7f;

    [MenuItem("Tools/Stair Race/Build Scene")]
    public static void Build()
    {
        if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo()) return;

        AssetDatabase.Refresh();
        SetupSprite(ArtDir + "rumi_cry.png", 1024, Vector4.zero);
        SetupSprite(ArtDir + "btn_tap.png", 256, Vector4.zero);
        SetupSprite(ArtDir + "icon_hand.png", 256, Vector4.zero);
        SetupSprite(ArtDir + "btn_retry.png", 256, new Vector4(32, 32, 32, 32));

        var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);

        // ---------- assets ----------
        Sprite bgSprite = LoadSprite("Assets/01 RESOURCES/Ref/bg.png");
        Sprite sand = LoadSprite(ModelDir + "sand.png");
        Sprite treeSprite = LoadSprite(ModelDir + "tree.png");
        Sprite blockPodium = LoadSprite(ModelDir + "bbox_orange.png");
        Sprite blockMira = LoadSprite(ModelDir + "bbox_pink.png");
        Sprite blockRumi = LoadSprite(ModelDir + "bbox_blue.png");
        Sprite miraWeaponSprite = LoadSprite(ModelDir + "weapon_long.png");
        Sprite rumiWeaponSprite = LoadSubSprite("Assets/01 RESOURCES/KSDH/shared-0-sheet1.png", "shared-0-sheet1_18");
        Sprite handSprite = LoadSprite(ArtDir + "icon_hand.png");
        Sprite cry = LoadSprite(ArtDir + "rumi_cry.png");
        Sprite btnTap = LoadSprite(ArtDir + "btn_tap.png");
        Sprite btnRetry = LoadSprite(ArtDir + "btn_retry.png");
        TMP_FontAsset font = GetTmpFont(AssetDatabase.LoadAssetAtPath<Font>("Assets/01 RESOURCES/Better VCR 6.1.ttf"));
        AudioClip remix = FindRemix();

        // ---------- camera + background ----------
        var camGO = new GameObject("Main Camera");
        camGO.tag = "MainCamera";
        camGO.transform.position = new Vector3(0f, 6f, -10f);
        var cam = camGO.AddComponent<Camera>();
        cam.orthographic = true;
        cam.orthographicSize = 9.5f;
        cam.clearFlags = CameraClearFlags.SolidColor;
        cam.backgroundColor = new Color(0.19f, 0.30f, 0.47f, 1f);
        cam.nearClipPlane = 0.1f;
        cam.farClipPlane = 100f;
        camGO.AddComponent<AudioListener>();

        var bg = NewSprite("BG", camGO.transform, bgSprite, -100);
        bg.transform.localPosition = new Vector3(0f, 0f, 30f);

        // ---------- world ----------
        var world = new GameObject("World").transform;

        var ground = NewSprite("Ground", world, sand, 30);
        ground.drawMode = SpriteDrawMode.Tiled;
        ground.transform.localScale = new Vector3(1.5f, 1.5f, 1f);
        ground.size = new Vector2(60f, 8f);
        ground.transform.position = new Vector3(0f, -6f, 0f); // top edge at y = 0
        var gcol = ground.gameObject.AddComponent<BoxCollider2D>();
        gcol.size = new Vector2(60f, 8f);

        if (treeSprite)
        {
            var t1 = NewSprite("Tree", world, treeSprite, -50);
            t1.transform.localScale = new Vector3(2f, 2f, 1f);
            t1.transform.position = new Vector3(-7.5f, treeSprite.bounds.extents.y * 2f - 0.1f, 0f);
            var t2 = NewSprite("Tree", world, treeSprite, -50);
            t2.flipX = true;
            t2.transform.localScale = new Vector3(2.4f, 2.4f, 1f);
            t2.transform.position = new Vector3(8f, treeSprite.bounds.extents.y * 2.4f - 0.1f, 0f);
        }

        BuildColumn("Podium", world, 0f, PodiumTop, blockPodium, Mathf.CeilToInt((PodiumTop + 4f) / BlockSize), 2);
        Transform miraCol = BuildColumn("MiraStairs", world, -SideX, StartTop, blockMira, 11, 1);
        Transform rumiCol = BuildColumn("RumiStairs", world, SideX, StartTop, blockRumi, 11, 1);

        // ---------- characters ----------
        RagdollPose zoey = SpawnCharacter("Zoey", world, new Vector3(0f, PodiumTop + 1.5f, 0f), 10);
        RagdollPose mira = SpawnCharacter("Mira", world, new Vector3(-SideX, StartTop + 1.5f, 0f), 11);
        RagdollPose rumi = SpawnCharacter("Rumi", world, new Vector3(SideX, StartTop + 1.5f, 0f), 12);

        // ---------- weapons (grip pivot = hand) ----------
        Transform miraWeapon = BuildWeapon("Weapon_Mira", world, miraWeaponSprite, 1.1f, false, true, 0.15f);
        Transform rumiWeapon = BuildWeapon("Weapon_Rumi", world, rumiWeaponSprite, 1.3f, true, false, 0.3f);

        // ---------- audio ----------
        var musicGO = new GameObject("Music");
        var music = musicGO.AddComponent<AudioSource>();
        music.clip = remix;
        music.loop = true;
        music.playOnAwake = false;
        music.volume = 0.9f;

        var sfx = new GameObject("Sfx").AddComponent<AudioSource>();
        sfx.playOnAwake = false;
        AudioClip loseClip = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/01 RESOURCES/Sound/PKLose.mp3");
        if (!loseClip) Debug.LogWarning("[StairRace] Lose sound not found: PKLose.mp3");
        AudioClip fallClip = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/01 RESOURCES/Sound/smert_1.mp3");
        AudioClip cryClip = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/01 RESOURCES/Sound/PKCry.mp3");

        // ---------- UI ----------
        new GameObject("EventSystem", typeof(EventSystem), typeof(StandaloneInputModule));

        var canvasGO = new GameObject("Canvas", typeof(RectTransform), typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
        canvasGO.layer = 5;
        var canvas = canvasGO.GetComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        canvas.sortingOrder = 10;
        var scaler = canvasGO.GetComponent<CanvasScaler>();
        scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        scaler.referenceResolution = new Vector2(1080f, 1920f);
        scaler.screenMatchMode = CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
        scaler.matchWidthOrHeight = 0f;
        Transform cv = canvasGO.transform;

        // Hint text (top, pushed down below the notch/safe area by ResponsiveLayout)
        var hint = MakeUI("Hint", cv, new Vector2(0.5f, 1f), new Vector2(0f, -140f), new Vector2(900f, 140f));
        TMP_Text hintText = Txt(hint, "TAP FAST!", 84, new Color(1f, 0.88f, 0.25f), font);

        // Tap button (bottom center)
        var tap = MakeUI("TapButton", cv, new Vector2(0.5f, 0.09f), Vector2.zero, new Vector2(290f, 290f));
        var tapImg = Img(tap, btnTap, Color.white, true, false);
        tapImg.raycastTarget = true;
        var tapLabel = MakeUI("Label", tap, new Vector2(0.5f, 0.5f), new Vector2(0f, 4f), new Vector2(280f, 120f));
        Txt(tapLabel, "TAP", 84, Color.white, font);
        var hand = MakeUI("TutorialHand", tap, new Vector2(0.5f, 0.5f), new Vector2(80f, -80f), new Vector2(170f, 170f));
        Img(hand, handSprite, Color.white, true, false);
        var tapBtn = tap.gameObject.AddComponent<TapButton>();
        tapBtn.visual = tap;

        // Lose panel
        var lose = MakeUI("LosePanel", cv, Vector2.zero, Vector2.zero, Vector2.zero);
        lose.anchorMin = Vector2.zero; lose.anchorMax = Vector2.one;
        lose.offsetMin = Vector2.zero; lose.offsetMax = Vector2.zero;
        var dim = lose.gameObject.AddComponent<Image>();
        dim.color = new Color(0f, 0f, 0f, 0.72f);
        dim.raycastTarget = true;
        var content = MakeUI("Content", lose, new Vector2(0.5f, 0.5f), Vector2.zero, new Vector2(900f, 1300f));
        var title = MakeUI("Title", content, new Vector2(0.5f, 0.5f), new Vector2(0f, 540f), new Vector2(900f, 160f));
        TMP_Text loseTitle = Txt(title, "YOU LOSE!", 120, new Color(1f, 0.32f, 0.38f), font);
        var cryRT = MakeUI("RumiCry", content, new Vector2(0.5f, 0.5f), new Vector2(0f, 40f), new Vector2(580f, 790f));
        Img(cryRT, cry, Color.white, true, false);
        var retry = MakeUI("RetryButton", content, new Vector2(0.5f, 0.5f), new Vector2(0f, -530f), new Vector2(540f, 180f));
        var retryImg = Img(retry, btnRetry, Color.white, false, true);
        retryImg.raycastTarget = true;
        var retryButton = retry.gameObject.AddComponent<Button>();
        retryButton.targetGraphic = retryImg;
        var retryLabel = MakeUI("Label", retry, new Vector2(0.5f, 0.5f), new Vector2(0f, 6f), new Vector2(520f, 160f));
        TMP_Text retryText = Txt(retryLabel, "RETRY", 90, Color.white, font);
        lose.gameObject.SetActive(false);

        // ---------- layout ----------
        var layout = camGO.AddComponent<ResponsiveLayout>();
        layout.cam = cam;
        layout.scaler = scaler;
        layout.background = bg;
        if (bgSprite) layout.backgroundTexture = bgSprite.texture;
        layout.tapButton = tap;
        layout.hintText = hint;

        // ---------- game ----------
        var game = new GameObject("StairRaceGame").AddComponent<StairRaceGame>();
        game.remixClip = remix;
        game.zoey = zoey; game.mira = mira; game.rumi = rumi;
        game.miraColumn = miraCol; game.rumiColumn = rumiCol;
        game.podiumTop = PodiumTop; game.startTop = StartTop; game.blockSize = BlockSize;
        game.miraWeapon = miraWeapon; game.rumiWeapon = rumiWeapon;
        game.layout = layout;
        game.music = music;
        game.sfx = sfx;
        game.loseClip = loseClip;
        game.fallClip = fallClip;
        game.cryClip = cryClip;
        game.tapButton = tapBtn;
        game.tutorialHand = hand;
        game.hintText = hintText;
        game.losePanel = lose.gameObject;
        game.loseContent = content;
        game.loseTitle = loseTitle;
        game.cryImage = cryRT;
        game.retryButton = retryButton;
        game.retryText = retryText;
        tapBtn.game = game;

        EditorSceneManager.MarkSceneDirty(scene);
        EditorSceneManager.SaveScene(scene, ScenePath);
        PutFirstInBuildSettings();
        AssetDatabase.SaveAssets();

        Debug.Log("[StairRace] Scene built: " + ScenePath + (remix ? "  | music: " + AssetDatabase.GetAssetPath(remix) : "  | NO MUSIC FOUND"));
    }

    // ================= helpers =================

    static void SetupSprite(string path, int maxSize, Vector4 border)
    {
        AssetDatabase.ImportAsset(path, ImportAssetOptions.ForceSynchronousImport);
        var ti = AssetImporter.GetAtPath(path) as TextureImporter;
        if (ti == null) { Debug.LogError("[StairRace] Missing texture " + path); return; }
        ti.textureType = TextureImporterType.Sprite;
        ti.spriteImportMode = SpriteImportMode.Single;
        ti.spritePixelsPerUnit = 100f;
        ti.mipmapEnabled = false;
        ti.filterMode = FilterMode.Point;
        ti.alphaIsTransparency = true;
        ti.maxTextureSize = maxSize;
        ti.textureCompression = TextureImporterCompression.Compressed;
        ti.spriteBorder = border;
        ti.SaveAndReimport();
    }

    static Sprite LoadSprite(string path)
    {
        var s = AssetDatabase.LoadAssetAtPath<Sprite>(path);
        if (!s) Debug.LogWarning("[StairRace] Sprite not found: " + path);
        return s;
    }

    static Sprite LoadSubSprite(string path, string name)
    {
        foreach (var o in AssetDatabase.LoadAllAssetsAtPath(path))
        {
            var s = o as Sprite;
            if (s && s.name == name) return s;
        }
        Debug.LogWarning("[StairRace] Sub sprite not found: " + name + " in " + path);
        return LoadSprite(ModelDir + "btn_weapon3_fix.png");
    }

    const string TapMusicPath = "Assets/01 RESOURCES/Sound/Golden_(kpop_demon_hunter)_out.ogg";

    static AudioClip FindRemix()
    {
        AudioClip tapMusic = AssetDatabase.LoadAssetAtPath<AudioClip>(TapMusicPath);
        if (tapMusic) return tapMusic;

        // Fallback: the real "up remix" file; "remix_temp" (KSHDGame background_music) is only the placeholder.
        string temp = null;
        foreach (var guid in AssetDatabase.FindAssets("t:AudioClip", new[] { "Assets" }))
        {
            string p = AssetDatabase.GUIDToAssetPath(guid);
            string n = Path.GetFileNameWithoutExtension(p).ToLowerInvariant();
            if (!n.Contains("remix")) continue;
            if (n.Contains("temp")) { temp = p; continue; }
            return AssetDatabase.LoadAssetAtPath<AudioClip>(p);
        }
        if (temp != null) return AssetDatabase.LoadAssetAtPath<AudioClip>(temp);
        Debug.LogWarning("[StairRace] No audio file with 'remix' in its name found -> using bgm.mp3. Drop your 'up remix' file in Assets and rebuild, or drag it into StairRaceGame > Remix Clip.");
        return AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/01 RESOURCES/Sound/bgm.mp3");
    }

    static SpriteRenderer NewSprite(string name, Transform parent, Sprite sprite, int order)
    {
        var go = new GameObject(name);
        go.transform.SetParent(parent, false);
        var sr = go.AddComponent<SpriteRenderer>();
        sr.sprite = sprite;
        sr.sortingOrder = order;
        return sr;
    }

    static Transform BuildColumn(string name, Transform parent, float x, float top, Sprite block, int count, int order)
    {
        var col = new GameObject(name).transform;
        col.SetParent(parent, false);
        col.position = new Vector3(x, top, 0f);
        float s = block ? BlockSize / block.bounds.size.x : 1f;
        for (int i = 0; i < count; i++)
        {
            var sr = NewSprite("Block" + i, col, block, order);
            sr.transform.localPosition = new Vector3(0f, -(i + 0.5f) * BlockSize, 0f);
            sr.transform.localScale = new Vector3(s, s, 1f);
        }
        return col;
    }

    static RagdollPose SpawnCharacter(string prefabName, Transform parent, Vector3 pos, int order)
    {
        var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(PrefabDir + prefabName + ".prefab");
        var go = (GameObject)PrefabUtility.InstantiatePrefab(prefab);
        go.transform.SetParent(parent, true);
        go.transform.position = pos;
        var sg = go.GetComponent<SortingGroup>();
        if (!sg) sg = go.AddComponent<SortingGroup>();
        sg.sortingOrder = order;
        var pose = go.GetComponent<RagdollPose>();
        if (!pose) pose = go.AddComponent<RagdollPose>();
        return pose;
    }

    /// <summary>Grip pivot at the hand; sprite child extends along +X (or -X when pointLeft).</summary>
    static Transform BuildWeapon(string name, Transform parent, Sprite sprite, float scale, bool spriteIsVertical, bool pointLeft, float gripInset)
    {
        var grip = new GameObject(name).transform;
        grip.SetParent(parent, false);
        var sr = NewSprite("Sprite", grip, sprite, 20);
        float len = sprite ? (spriteIsVertical ? sprite.bounds.size.y : sprite.bounds.size.x) * scale : 1f;
        sr.transform.localScale = new Vector3(scale, scale, 1f);
        sr.transform.localRotation = Quaternion.Euler(0f, 0f, spriteIsVertical ? -90f : 0f);
        sr.transform.localPosition = new Vector3(len * 0.5f - gripInset, 0f, 0f);
        grip.localScale = new Vector3(pointLeft ? -1f : 1f, 1f, 1f);
        return grip;
    }

    static RectTransform MakeUI(string name, Transform parent, Vector2 anchor, Vector2 pos, Vector2 size)
    {
        var go = new GameObject(name, typeof(RectTransform));
        go.layer = 5;
        var rt = (RectTransform)go.transform;
        rt.SetParent(parent, false);
        rt.anchorMin = anchor; rt.anchorMax = anchor;
        rt.pivot = new Vector2(0.5f, 0.5f);
        rt.anchoredPosition = pos;
        rt.sizeDelta = size;
        return rt;
    }

    static Image Img(RectTransform rt, Sprite sprite, Color color, bool preserveAspect, bool sliced)
    {
        var im = rt.gameObject.AddComponent<Image>();
        im.sprite = sprite;
        im.color = color;
        im.preserveAspect = preserveAspect;
        im.raycastTarget = false;
        if (sliced) im.type = Image.Type.Sliced;
        return im;
    }

    static TextMeshProUGUI Txt(RectTransform rt, string text, int size, Color color, TMP_FontAsset font)
    {
        var t = rt.gameObject.AddComponent<TextMeshProUGUI>();
        if (font) t.font = font;
        t.fontSize = size;
        t.color = color;
        t.text = text;
        t.alignment = TextAlignmentOptions.Center;
        t.textWrappingMode = TextWrappingModes.NoWrap;
        t.overflowMode = TextOverflowModes.Overflow;
        t.raycastTarget = false;
        return t;
    }

    const string TmpFontPath = ArtDir + "BetterVCR SDF.asset";
    const string TmpChars = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

    // Static atlas (Luna-safe) with the dark outline baked into the material.
    static TMP_FontAsset GetTmpFont(Font src)
    {
        var fa = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>(TmpFontPath);
        if (fa) return fa;
        if (!src) return TMP_Settings.defaultFontAsset;

        fa = TMP_FontAsset.CreateFontAsset(src, 90, 9, GlyphRenderMode.SDFAA, 1024, 1024, AtlasPopulationMode.Dynamic);
        fa.name = "BetterVCR SDF";
        fa.TryAddCharacters(TmpChars);
        fa.atlasPopulationMode = AtlasPopulationMode.Static;

        AssetDatabase.CreateAsset(fa, TmpFontPath);
        fa.atlasTextures[0].name = "BetterVCR SDF Atlas";
        AssetDatabase.AddObjectToAsset(fa.atlasTextures[0], fa);
        var mat = fa.material;
        mat.name = "BetterVCR SDF Material";
        var lunaShader = Shader.Find("TextMeshPro/Mobile/Distance Field (Luna)");
        if (lunaShader) mat.shader = lunaShader;
        mat.EnableKeyword("OUTLINE_ON");
        mat.SetColor("_OutlineColor", new Color(0.12f, 0.04f, 0.18f, 1f));
        mat.SetFloat("_OutlineWidth", 0.3f);
        mat.SetFloat("_FaceDilate", 0.3f);
        AssetDatabase.AddObjectToAsset(mat, fa);
        EditorUtility.SetDirty(fa);
        AssetDatabase.SaveAssets();
        return fa;
    }

    static void PutFirstInBuildSettings()
    {
        var list = new List<EditorBuildSettingsScene>();
        list.Add(new EditorBuildSettingsScene(ScenePath, true));
        foreach (var s in EditorBuildSettings.scenes)
        {
            if (s.path == ScenePath) continue;
            list.Add(new EditorBuildSettingsScene(s.path, false)); // keep old scenes, but disabled for the Luna build
        }
        EditorBuildSettings.scenes = list.ToArray();
    }
}

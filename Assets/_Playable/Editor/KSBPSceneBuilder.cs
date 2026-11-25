using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

// Dung lai scene playable KSBP_3Monster tu asset trong Assets/_Playable. Chay: Tools/KSBP/Build Scene
public static class KSBPSceneBuilder
{
    internal const string R = "Assets/_Playable/";
    internal const float FLOOR = -2.6f;
    internal static Font font;

    [MenuItem("Tools/KSBP/Build Scene")]
    public static void Build()
    {
        EnsureGeneratedSprites();
        FixImportSettings();
        font = AssetDatabase.LoadAssetAtPath<Font>(R + "Fonts/Pixellari.ttf");

        var scene = EditorSceneManager.OpenScene("Assets/Scenes/SampleScene.unity", OpenSceneMode.Single);
        // giu BGM / config Luna da gan khi build lai
        var oldLuna = Object.FindFirstObjectByType<LunaController>();
        string lunaJson = oldLuna != null ? EditorJsonUtility.ToJson(oldLuna) : null;
        foreach (var go in scene.GetRootGameObjects())
        {
            string n = go.name;
            if (n == "Main Camera" || n == "Directional Light" || n == "Global Light 2D" || n.StartsWith("KSBP_") || n == "EventSystem")
                Object.DestroyImmediate(go);
            else Debug.Log("[KSBP Builder] giu nguyen object: " + n);
        }

        // ---------- Camera ----------
        var camGo = new GameObject("Main Camera");
        camGo.tag = "MainCamera";
        var cam = camGo.AddComponent<Camera>();
        cam.orthographic = true;
        cam.orthographicSize = 5f;
        cam.clearFlags = CameraClearFlags.SolidColor;
        cam.backgroundColor = new Color(0.13f, 0.13f, 0.13f);
        camGo.transform.position = new Vector3(0, 0, -10);
        camGo.AddComponent<AudioListener>();

        var root = new GameObject("KSBP_Game");
        var world = new GameObject("World").transform;
        world.SetParent(root.transform, false);

        // ---------- BG ----------
        var bg = SR("Background", world, Sp("Art/BG/Backrooms.png"), Vector3.zero, -100);
        var fit = camGo.AddComponent<CameraFit>();
        fit.cam = cam; fit.background = bg; fit.floorY = FLOOR;

        // ---------- Rumi ----------
        var rumi = new GameObject("Rumi").transform;
        rumi.SetParent(world, false);
        rumi.localPosition = new Vector3(-3.4f, FLOOR, 0);
        rumi.localScale = Vector3.one * 0.6f;
        var rBody = new GameObject("Body").transform; rBody.SetParent(rumi, false);
        SR("LegL", rBody, Sp("Art/Rumi/chan_trai_rumi.png"), new Vector3(-0.14f, 0.9f), 10);
        SR("LegR", rBody, Sp("Art/Rumi/chan_phai_rumi.png"), new Vector3(0.14f, 0.9f), 11);
        SR("Torso", rBody, Sp("Art/Rumi/than_rumi2.png"), new Vector3(0f, 2.47f), 12);
        SR("Head", rBody, Sp("Art/Rumi/dau_rumi_2.png"), new Vector3(0.12f, 4.0f), 14);
        var armPivot = new GameObject("ArmPivot").transform; armPivot.SetParent(rBody, false);
        armPivot.localPosition = new Vector3(0.12f, 3.25f, 0);
        SR("Arm", armPivot, Sp("Art/Rumi/tay_rumi2.png"), new Vector3(0, -0.67f), 16);
        var holder = new GameObject("WeaponHolder").transform; holder.SetParent(armPivot, false);
        holder.localPosition = new Vector3(0, -1.25f, 0);
        holder.localRotation = Quaternion.Euler(0, 0, -90);
        var weapon = SR("Weapon", holder, Sp("Art/Weapons/AK.png"), new Vector3(0.45f, 0f), 15);
        weapon.transform.localScale = Vector3.one * 0.8f;
        var muzzle = new GameObject("Muzzle").transform; muzzle.SetParent(holder, false);
        muzzle.localPosition = new Vector3(1.9f, 0.1f, 0);

        // ---------- Monsters ----------
        var monsters = new MonsterView[3];
        monsters[0] = Monster(world, "Freddy", new[] {
            P("HandBack","Art/Monsters/Freddy/hand_Freddy.png",0.72f,2.35f,9,true),
            P("LegL","Art/Monsters/Freddy/legs_Freddy.png",-0.56f,0.92f,10,true),
            P("LegR","Art/Monsters/Freddy/legs_Freddy.png",0.56f,0.92f,10,false),
            P("Body","Art/Monsters/Freddy/body_Freddy.png",0f,2.38f,11,false),
            P("HandFront","Art/Monsters/Freddy/hand_Freddy.png",-0.72f,2.35f,12,false),
            P("Head","Art/Monsters/Freddy/head_Freddy.png",0f,3.59f,13,false) });
        monsters[1] = Monster(world, "ShinSonic", new[] {
            P("HandBack","Art/Monsters/Shin_sonic/hand_Shin_sonic.png",0.35f,2.42f,9,false),
            P("LegL","Art/Monsters/Shin_sonic/legs_shin_sonic.png",-0.18f,0.92f,10,false),
            P("LegR","Art/Monsters/Shin_sonic/legs_shin_sonic.png",0.2f,0.92f,10,false),
            P("Body","Art/Monsters/Shin_sonic/body_shin_sonic.png",0f,2.41f,11,false),
            P("HandFront","Art/Monsters/Shin_sonic/hand_Shin_sonic.png",-0.35f,2.42f,12,false),
            P("Head","Art/Monsters/Shin_sonic/head_shin_sonic.png",0.0f,3.52f,13,false) });
        monsters[2] = Monster(world, "Deer", new[] {
            P("ArmBack","Art/Monsters/Deer/arms_Deer.png",0.62f,2.8f,9,true),
            P("LegL","Art/Monsters/Deer/legs_deer.png",-0.25f,1.23f,10,true),
            P("LegR","Art/Monsters/Deer/legs_deer.png",0.25f,1.23f,10,false),
            P("Body","Art/Monsters/Deer/body_deer.png#1",0f,2.65f,11,false),
            P("ArmFront","Art/Monsters/Deer/arms_Deer.png",-0.62f,2.8f,12,false),
            P("Head","Art/Monsters/Deer/head_deer.png",0f,3.8f,13,false) });

        // ---------- Projectiles / FX ----------
        var fx = new GameObject("FX").transform; fx.SetParent(world, false);
        var cherry = SR("Cherry", fx, Sp("Art/Weapons/Cherry_bomb.png"), Vector3.zero, 50);
        cherry.transform.localScale = Vector3.one * 0.5f;
        var bullets = new SpriteRenderer[5];
        for (int i = 0; i < 5; i++) { bullets[i] = SR("Bullet" + i, fx, Sp("Art/Weapons/bullet_AK.png"), Vector3.zero, 50); bullets[i].transform.localScale = Vector3.one * 0.7f; }
        var stars = new SpriteRenderer[3];
        for (int i = 0; i < 3; i++) { stars[i] = SR("Star" + i, fx, Sp("Art/Weapons/bullet_star.png"), Vector3.zero, 50); stars[i].transform.localScale = Vector3.one * 2.2f; }
        var circle = Sp("Art/Generated/circle.png");
        var boom = SR("Explosion", fx, circle, Vector3.zero, 60);
        var flash = SR("MuzzleFlash", fx, circle, Vector3.zero, 55);
        flash.color = new Color(1f, 0.9f, 0.4f); flash.transform.localScale = Vector3.one * 0.45f;

        // ---------- Audio ----------
        var audioGo = new GameObject("Audio"); audioGo.transform.SetParent(root.transform, false);
        var sfx = audioGo.AddComponent<AudioSource>(); sfx.playOnAwake = false;

        // ---------- UI ----------
        var canvasGo = new GameObject("KSBP_Canvas");
        var canvas = canvasGo.AddComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        var scaler = canvasGo.AddComponent<CanvasScaler>();
        scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        scaler.referenceResolution = new Vector2(1080, 1920);
        scaler.matchWidthOrHeight = 0.5f;
        canvasGo.AddComponent<GraphicRaycaster>();
        var es = new GameObject("EventSystem");
        es.AddComponent<EventSystem>(); es.AddComponent<StandaloneInputModule>();
        var white = Sp("Art/Generated/white.png");

        // choice panel
        var panel = Rect("ChoicePanel", canvasGo.transform, new Vector2(0.5f, 0f), new Vector2(0, 50), new Vector2(980, 440));
        ((RectTransform)panel).pivot = new Vector2(0.5f, 0f);
        ((RectTransform)panel).anchoredPosition = new Vector2(0, 50);
        var titleBg = Img("TitleBg", panel, white, new Vector2(0, 175), new Vector2(980, 100), new Color(0, 0, 0, 0.55f));
        titleBg.raycastTarget = false;
        var title = Txt("Title", panel, "CHOOSE A MONSTER!", new Vector2(0, 175), new Vector2(980, 100), 64, Color.white);
        var slotBtns = new Button[3]; var slotIcons = new Image[3];
        for (int i = 0; i < 3; i++)
        {
            var slot = Img("Slot" + i, panel, Sp("Art/UI/Item_Slot.png"), new Vector2((i - 1) * 310, -40), new Vector2(270, 278), Color.white);
            slotBtns[i] = slot.gameObject.AddComponent<Button>();
            slotIcons[i] = Img("Icon", slot.transform, Sp("Art/Rumi/Icon.png"), new Vector2(0, -6), new Vector2(200, 200), Color.white);
            slotIcons[i].preserveAspect = true; slotIcons[i].raycastTarget = false;
            var nw = Img("New", slot.transform, Sp("Art/UI/Lab_New.png"), new Vector2(-72, 112), new Vector2(126, 60), Color.white);
            nw.raycastTarget = false;
        }
        var hand = Img("Hand", panel, Sp("Art/UI/tutorial_down_arrow.png"), new Vector2(0, 150), new Vector2(96, 120), Color.white);
        hand.raycastTarget = false;

        var bigText = Txt("BigText", canvasGo.transform, "YOU WIN!", new Vector2(0, 360), new Vector2(1100, 220), 150, Color.yellow);
        var effectText = Txt("EffectText", canvasGo.transform, "SUPER EFFECTIVE!", new Vector2(0, 220), new Vector2(1100, 120), 72, Color.yellow);
        var dmgTexts = new Text[6];
        for (int i = 0; i < dmgTexts.Length; i++) dmgTexts[i] = Txt("Dmg" + i, canvasGo.transform, "-20", Vector2.zero, new Vector2(300, 100), 80, new Color(1f, 0.25f, 0.2f));

        // end catcher + popup
        var catcher = Img("EndCatcher", canvasGo.transform, white, Vector2.zero, Vector2.zero, new Color(0, 0, 0, 0));
        Stretch(catcher.rectTransform);
        var catcherBtn = catcher.gameObject.AddComponent<Button>();
        var popup = Img("Popup", canvasGo.transform, white, Vector2.zero, Vector2.zero, new Color(0, 0, 0, 0.55f));
        Stretch(popup.rectTransform); popup.raycastTarget = false;
        var box = Img("Box", popup.transform, Sp("Art/UI/Item_Slot.png"), new Vector2(0, -80), new Vector2(840, 520), Color.white);
        box.raycastTarget = false;
        var popupTitle = Txt("Title", box.transform, "MONSTER DEFEATED!", new Vector2(0, 120), new Vector2(800, 120), 58, Color.white);
        var btnImg = Img("Button", box.transform, white, new Vector2(0, -100), new Vector2(560, 160), new Color(0.3f, 0.8f, 0.3f));
        var btn = btnImg.gameObject.AddComponent<Button>();
        var btnLabel = Txt("Label", btnImg.transform, "NEXT BATTLE", Vector2.zero, new Vector2(560, 160), 70, Color.white);
        bigText.transform.SetAsLastSibling();   // chu WIN/FAIL nam tren lop mo cua popup

        // ---------- GameFlow ----------
        var flow = root.AddComponent<GameFlow>();
        flow.cam = cam; flow.world = world; flow.background = bg;
        flow.rumiBody = rBody; flow.rumiArm = armPivot; flow.weaponInHand = weapon; flow.muzzle = muzzle;
        flow.weaponSprites = new[] { Sp("Art/Weapons/Cherry_bomb.png"), Sp("Art/Weapons/AK.png"), Sp("Art/Weapons/Lightstick_Blaster.png") };
        flow.monsters = monsters;
        flow.cherryProjectile = cherry; flow.bullets = bullets; flow.stars = stars; flow.explosion = boom; flow.muzzleFlash = flash;
        flow.choicePanel = panel.gameObject; flow.titleText = title; flow.slotIcons = slotIcons; flow.slotButtons = slotBtns;
        flow.monsterIcons = new[] { Sp("Art/Monsters/Freddy/head_Freddy.png"), Sp("Art/Monsters/Shin_sonic/head_shin_sonic.png"), Sp("Art/Monsters/Deer/head_deer.png") };
        flow.hand = hand.rectTransform; flow.bigText = bigText; flow.effectText = effectText; flow.damageTexts = dmgTexts;
        flow.popup = popup.gameObject; flow.popupTitle = popupTitle; flow.popupButton = btn; flow.popupButtonLabel = btnLabel;
        flow.endCatcher = catcherBtn;
        flow.sfx = sfx;
        flow.clickClip = Clip("Button Click"); flow.equipClip = Clip("GetGun0"); flow.akClip = Clip("Ak47Shoot");
        flow.boomClip = Clip("GrinadeBoom1"); flow.hitClip = Clip("EnemyGetDamage"); flow.starClip = Clip("Button Click");
        flow.winClip = Clip("FireWorks");
        flow.failClip = AssetDatabase.LoadAssetAtPath<AudioClip>(R + "Audio/GameOver.mp3");

        fit.Apply();
        EnsureExtras(flow);
        if (lunaJson != null)
        {
            EditorJsonUtility.FromJsonOverwrite(lunaJson, flow.luna);
            flow.luna.flow = flow;
            flow.luna.bgmSource = flow.luna.GetComponent<AudioSource>();
        }
        EditorSceneManager.MarkSceneDirty(scene);
        EditorSceneManager.SaveScene(scene);
        Debug.Log("[KSBP Builder] Done");
    }

    // Them LunaController, titleBar, phao hoa vao scene dang mo (idempotent, khong dung lai scene)
    [MenuItem("Tools/KSBP/Update Extras (giu scene)")]
    public static void UpdateExtrasMenu()
    {
        FixImportSettings();
        var flow = Object.FindFirstObjectByType<GameFlow>();
        if (flow == null) { Debug.LogError("[KSBP Builder] Khong thay GameFlow"); return; }
        EnsureExtras(flow);
        EditorSceneManager.MarkSceneDirty(flow.gameObject.scene);
        Debug.Log("[KSBP Builder] Extras done");
    }

    internal static void EnsureExtras(GameFlow flow)
    {
        // --- LunaController ---
        var luna = Object.FindFirstObjectByType<LunaController>();
        if (luna == null)
        {
            var go = new GameObject("LunaController");
            go.transform.SetParent(flow.transform, false);
            luna = go.AddComponent<LunaController>();
        }
        var src = luna.GetComponent<AudioSource>();
        if (src == null) src = luna.gameObject.AddComponent<AudioSource>();
        src.playOnAwake = false; src.loop = true;
        luna.bgmSource = src;
        luna.flow = flow;
        if (luna.bgmClip == null) luna.bgmClip = AssetDatabase.LoadAssetAtPath<AudioClip>(R + "Audio/bgm.mp3");
        if (luna.backgroundTexture == null && flow.background != null && flow.background.sprite != null)
            luna.backgroundTexture = flow.background.sprite.texture;
        flow.luna = luna;

        // --- tay/chan monster cho animation di bo ---
        foreach (var mv in flow.monsters)
        {
            if (mv == null) continue;
            var armList = new System.Collections.Generic.List<Transform>();
            var legList2 = new System.Collections.Generic.List<Transform>();
            foreach (var pr in mv.parts)
            {
                if (pr.name.StartsWith("Hand") || pr.name.StartsWith("Arm")) armList.Add(pr.transform);
                if (pr.name.StartsWith("Leg")) legList2.Add(pr.transform);
            }
            mv.arms = armList.ToArray();
            mv.legs = legList2.ToArray();
            EditorUtility.SetDirty(mv);
        }

        // --- tay tuto (thay mui ten) ---
        if (flow.hand != null)
        {
            var handImg = flow.hand.GetComponent<Image>();
            var handSprite = AssetDatabase.LoadAssetAtPath<Sprite>(R + "Art/UI/tuto_hand.png");
            if (handImg != null && handSprite != null)
            {
                handImg.sprite = handSprite;
                handImg.preserveAspect = true;
                handImg.raycastTarget = false;
                flow.hand.pivot = new Vector2(0.30f, 0.78f);   // dau ngon tay
                flow.hand.sizeDelta = new Vector2(170f, 170f);
                flow.hand.localRotation = Quaternion.identity;
                EditorUtility.SetDirty(handImg);
                EditorUtility.SetDirty(flow.hand);
            }
        }

        // --- title bar ---
        if (flow.titleBar == null && flow.titleText != null)
        {
            var bar = flow.titleText.transform.parent.Find("TitleBg");
            if (bar != null) flow.titleBar = bar.gameObject;
        }

        // --- phao hoa ---
        bool hasFw = flow.fireworks != null && flow.fireworks.Length > 0 && flow.fireworks[0] != null;
        if (!hasFw)
        {
            var mat = FireworkMaterial();
            var parent = flow.explosion.transform.parent;
            Vector3[] pos = { new Vector3(-2.6f, FLOOR + 4.6f, 0), new Vector3(0f, FLOOR + 5.6f, 0), new Vector3(2.6f, FLOOR + 4.8f, 0) };
            Color[] cols = { new Color(1f, 0.85f, 0.2f), new Color(1f, 0.35f, 0.6f), new Color(0.4f, 0.9f, 1f) };
            var list = new ParticleSystem[pos.Length];
            for (int i = 0; i < pos.Length; i++) list[i] = Firework("Firework" + i, parent, pos[i], cols[i], mat);
            flow.fireworks = list;
        }
        EditorUtility.SetDirty(flow);
        EditorUtility.SetDirty(luna);
    }

    internal static Material FireworkMaterial()
    {
        string path = R + "Materials/Firework.mat";
        var mat = AssetDatabase.LoadAssetAtPath<Material>(path);
        if (mat != null) return mat;
        System.IO.Directory.CreateDirectory(R + "Materials");
        var sh = Shader.Find("Legacy Shaders/Particles/Additive");
        if (sh == null) sh = Shader.Find("Sprites/Default");
        mat = new Material(sh);
        mat.mainTexture = AssetDatabase.LoadAssetAtPath<Texture2D>(R + "Art/Generated/circle.png");
        AssetDatabase.CreateAsset(mat, path);
        return mat;
    }

    internal static ParticleSystem Firework(string name, Transform parent, Vector3 pos, Color color, Material mat)
    {
        var go = new GameObject(name);
        go.transform.SetParent(parent, false);
        go.transform.localPosition = pos;
        var ps = go.AddComponent<ParticleSystem>();
        ps.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);

        var main = ps.main;
        main.playOnAwake = false;
        main.loop = false;
        main.duration = 1f;
        main.startLifetime = new ParticleSystem.MinMaxCurve(0.8f, 1.3f);
        main.startSpeed = new ParticleSystem.MinMaxCurve(3f, 6.5f);
        main.startSize = new ParticleSystem.MinMaxCurve(0.12f, 0.3f);
        main.startColor = new ParticleSystem.MinMaxGradient(color, Color.white);
        main.gravityModifier = 0.7f;
        main.simulationSpace = ParticleSystemSimulationSpace.World;
        main.maxParticles = 120;

        var em = ps.emission;
        em.rateOverTime = 0f;
        em.SetBursts(new[] { new ParticleSystem.Burst(0f, 70) });

        var shape = ps.shape;
        shape.shapeType = ParticleSystemShapeType.Sphere;
        shape.radius = 0.1f;

        var col = ps.colorOverLifetime;
        col.enabled = true;
        var g = new Gradient();
        g.SetKeys(new[] { new GradientColorKey(Color.white, 0f), new GradientColorKey(Color.white, 1f) },
                  new[] { new GradientAlphaKey(1f, 0f), new GradientAlphaKey(1f, 0.6f), new GradientAlphaKey(0f, 1f) });
        col.color = g;

        var size = ps.sizeOverLifetime;
        size.enabled = true;
        size.size = new ParticleSystem.MinMaxCurve(1f, AnimationCurve.Linear(0f, 1f, 1f, 0.3f));

        var limit = ps.limitVelocityOverLifetime;
        limit.enabled = true;
        limit.limit = 4f;
        limit.dampen = 0.15f;

        var r = go.GetComponent<ParticleSystemRenderer>();
        r.sharedMaterial = mat;
        r.sortingOrder = 80;
        return ps;
    }

    // ---------------- helpers ----------------
    internal struct PartDef { public string name, path; public float x, y; public int order; public bool flip; }
    internal static PartDef P(string n, string p, float x, float y, int o, bool f) { return new PartDef { name = n, path = p, x = x, y = y, order = o, flip = f }; }

    internal static MonsterView Monster(Transform world, string name, PartDef[] defs)
    {
        var root = new GameObject(name).transform;
        root.SetParent(world, false);
        root.localPosition = new Vector3(3.4f, FLOOR, 0);
        root.localScale = new Vector3(-0.62f, 0.62f, 1f);
        var body = new GameObject("Body").transform; body.SetParent(root, false);
        var parts = new SpriteRenderer[defs.Length];
        for (int i = 0; i < defs.Length; i++)
        {
            parts[i] = SR(defs[i].name, body, Sp(defs[i].path), new Vector3(defs[i].x, defs[i].y), defs[i].order);
            parts[i].flipX = defs[i].flip;
        }
        var white = Sp("Art/Generated/white.png");
        var hp = new GameObject("HP").transform; hp.SetParent(root, false);
        hp.localPosition = new Vector3(0, 5.1f, 0); hp.localScale = new Vector3(-1, 1, 1);
        var bgBar = SR("Bg", hp, white, Vector3.zero, 70); bgBar.color = new Color(0.1f, 0.1f, 0.1f, 0.9f);
        bgBar.transform.localScale = new Vector3(2.7f, 0.38f, 1);
        var fillPivot = new GameObject("FillPivot").transform; fillPivot.SetParent(hp, false);
        fillPivot.localPosition = new Vector3(-1.27f, 0, 0);
        var fill = SR("Fill", fillPivot, white, new Vector3(1.27f, 0, 0), 71); fill.color = new Color(0.95f, 0.2f, 0.2f);
        fill.transform.localScale = new Vector3(2.54f, 0.26f, 1);
        var anchor = new GameObject("HeadAnchor").transform; anchor.SetParent(root, false);
        anchor.localPosition = new Vector3(0, 3.6f, 0);
        var mv = root.gameObject.AddComponent<MonsterView>();
        var legList = new System.Collections.Generic.List<Transform>();
        foreach (var pr in parts) if (pr.name.StartsWith("Leg")) legList.Add(pr.transform);
        mv.legs = legList.ToArray();
        mv.body = body; mv.parts = parts; mv.hpRoot = hp.gameObject; mv.hpFill = fillPivot; mv.headAnchor = anchor;
        return mv;
    }

    internal static SpriteRenderer SR(string name, Transform parent, Sprite s, Vector3 pos, int order)
    {
        var go = new GameObject(name);
        go.transform.SetParent(parent, false);
        go.transform.localPosition = pos;
        var sr = go.AddComponent<SpriteRenderer>();
        sr.sprite = s; sr.sortingOrder = order;
        return sr;
    }

    internal static Sprite Sp(string rel)
    {
        int idx = 0;
        int h = rel.IndexOf('#');
        if (h >= 0) { idx = int.Parse(rel.Substring(h + 1)); rel = rel.Substring(0, h); }
        var all = AssetDatabase.LoadAllAssetRepresentationsAtPath(R + rel);
        var list = new System.Collections.Generic.List<Sprite>();
        foreach (var o in all) if (o is Sprite) list.Add((Sprite)o);
        list.Sort((a, b) => string.CompareOrdinal(a.name, b.name));
        if (list.Count == 0) { var single = AssetDatabase.LoadAssetAtPath<Sprite>(R + rel); if (single == null) Debug.LogError("[KSBP Builder] Missing sprite " + rel); return single; }
        return list[idx < list.Count ? idx : list.Count - 1];
    }

    internal static AudioClip Clip(string n)
    {
        var c = AssetDatabase.LoadAssetAtPath<AudioClip>(R + "Audio/" + n + ".ogg");
        if (c == null) Debug.LogError("[KSBP Builder] Missing clip " + n);
        return c;
    }

    internal static Transform Rect(string name, Transform parent, Vector2 anchor, Vector2 pos, Vector2 size)
    {
        var go = new GameObject(name, typeof(RectTransform));
        var rt = (RectTransform)go.transform;
        rt.SetParent(parent, false);
        rt.anchorMin = rt.anchorMax = anchor;
        rt.anchoredPosition = pos; rt.sizeDelta = size;
        return rt;
    }

    internal static Image Img(string name, Transform parent, Sprite s, Vector2 pos, Vector2 size, Color c)
    {
        var rt = Rect(name, parent, new Vector2(0.5f, 0.5f), pos, size);
        var img = rt.gameObject.AddComponent<Image>();
        img.sprite = s; img.color = c;
        return img;
    }

    internal static Text Txt(string name, Transform parent, string text, Vector2 pos, Vector2 size, int fontSize, Color color)
    {
        var rt = Rect(name, parent, new Vector2(0.5f, 0.5f), pos, size);
        var t = rt.gameObject.AddComponent<Text>();
        Setup(t, text, fontSize);
        t.raycastTarget = false;
        var faceRt = Rect("Face", rt, new Vector2(0.5f, 0.5f), new Vector2(0, 7), size);
        var face = faceRt.gameObject.AddComponent<Text>();
        Setup(face, text, fontSize);
        face.raycastTarget = false;
        face.color = color;
        var sh = rt.gameObject.AddComponent<TextShadowCopy>();
        sh.face = face;
        t.color = sh.shadowColor;
        return t;
    }

    internal static void Setup(Text t, string text, int size)
    {
        t.font = font; t.fontSize = size; t.text = text;
        t.alignment = TextAnchor.MiddleCenter;
        t.horizontalOverflow = HorizontalWrapMode.Overflow;
        t.verticalOverflow = VerticalWrapMode.Overflow;
    }

    internal static void Stretch(RectTransform rt)
    {
        rt.anchorMin = Vector2.zero; rt.anchorMax = Vector2.one;
        rt.offsetMin = rt.offsetMax = Vector2.zero;
    }

    internal static void EnsureGeneratedSprites()
    {
        string dir = R + "Art/Generated/";
        System.IO.Directory.CreateDirectory(dir);
        if (!System.IO.File.Exists(dir + "white.png"))
        {
            var t = new Texture2D(8, 8);
            var px = new Color[64]; for (int i = 0; i < 64; i++) px[i] = Color.white;
            t.SetPixels(px); t.Apply();
            System.IO.File.WriteAllBytes(dir + "white.png", t.EncodeToPNG());
        }
        if (!System.IO.File.Exists(dir + "circle.png"))
        {
            int n = 64; var t = new Texture2D(n, n);
            for (int y = 0; y < n; y++) for (int x = 0; x < n; x++)
            {
                float d = Vector2.Distance(new Vector2(x + 0.5f, y + 0.5f), new Vector2(n / 2f, n / 2f)) / (n / 2f);
                t.SetPixel(x, y, new Color(1, 1, 1, Mathf.Clamp01((1f - d) * 3f)));
            }
            t.Apply();
            System.IO.File.WriteAllBytes(dir + "circle.png", t.EncodeToPNG());
        }
        AssetDatabase.Refresh();
        SetSprite(dir + "white.png", 8, FilterMode.Point);
        SetSprite(dir + "circle.png", 64, FilterMode.Bilinear);
    }

    internal static void SetSprite(string path, float ppu, FilterMode f)
    {
        var ti = (TextureImporter)AssetImporter.GetAtPath(path);
        if (ti == null) return;
        ti.textureType = TextureImporterType.Sprite;
        ti.spriteImportMode = SpriteImportMode.Single;
        ti.spritePixelsPerUnit = ppu;
        ti.filterMode = f;
        ti.mipmapEnabled = false;
        ti.SaveAndReimport();
    }

    internal static void FixImportSettings()
    {
        foreach (var g in AssetDatabase.FindAssets("t:Texture2D", new[] { R + "Art" }))
        {
            var p = AssetDatabase.GUIDToAssetPath(g);
            var ti = (TextureImporter)AssetImporter.GetAtPath(p);
            bool dirty = false;
            if (ti.mipmapEnabled) { ti.mipmapEnabled = false; dirty = true; }
            if (ti.filterMode != FilterMode.Point && !p.Contains("Generated")) { ti.filterMode = FilterMode.Point; dirty = true; }
            if (dirty) ti.SaveAndReimport();
        }
        foreach (var g in AssetDatabase.FindAssets("t:AudioClip", new[] { R + "Audio" }))
        {
            var p = AssetDatabase.GUIDToAssetPath(g);
            var ai = (AudioImporter)AssetImporter.GetAtPath(p);
            var s = ai.defaultSampleSettings;
            bool dirty = !ai.forceToMono || !s.preloadAudioData || s.compressionFormat != AudioCompressionFormat.Vorbis || Mathf.Abs(s.quality - 0.7f) > 0.01f;
            if (!dirty) continue;
            ai.forceToMono = true;
            s.preloadAudioData = true;
            s.compressionFormat = AudioCompressionFormat.Vorbis;
            s.quality = 0.7f;
            s.loadType = AudioClipLoadType.DecompressOnLoad;
            ai.defaultSampleSettings = s;
            ai.SaveAndReimport();
        }
    }
}

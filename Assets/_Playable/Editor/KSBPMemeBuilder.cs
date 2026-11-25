using System.Collections.Generic;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using B = KSBPSceneBuilder;

// Dung scene KB Meme: Tools/KSBP/Build Meme Scene  -> Assets/Scenes/MemeScene.unity
public static class KSBPMemeBuilder
{
    const string M = "Assets/_Meme/Art/";
    const string SCENE = "Assets/Scenes/MemeScene.unity";
    const float FLOOR = -2.5f;
    const float BG_FLOOR_FRAC = 0.72f;   // mat san o 72% chieu cao anh (tu tren xuong)

    class CharDef
    {
        public string name;
        public string[] legs, arms;
        public string body, head, tail;
        public bool flip;          // sprite goc ve quay mat nguoc
        public float height;       // chieu cao world sau chuan hoa
    }

    static CharDef C(string n, string body, string head, string[] legs, string[] arms, string tail, float h)
    {
        return new CharDef { name = n, body = body, head = head, legs = legs, arms = arms, tail = tail, height = h };
    }

    [MenuItem("Tools/KSBP/Build Meme Scene")]
    public static void Build()
    {
        if (EditorApplication.isPlaying) { Debug.LogError("[Meme] Thoat Play mode truoc"); return; }
        B.EnsureGeneratedSprites();
        B.FixImportSettings();
        PrepareBackground();
        B.font = AssetDatabase.LoadAssetAtPath<Font>("Assets/_Playable/Fonts/Pixellari.ttf");

        var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);

        // ---------- Camera ----------
        var camGo = new GameObject("Main Camera");
        camGo.tag = "MainCamera";
        var cam = camGo.AddComponent<Camera>();
        cam.orthographic = true;
        cam.clearFlags = CameraClearFlags.SolidColor;
        cam.backgroundColor = new Color(0.37f, 0.34f, 0.30f);
        camGo.transform.position = new Vector3(0, 0, -10);
        camGo.AddComponent<AudioListener>();

        var root = new GameObject("KSBP_Meme");
        var world = new GameObject("World").transform;
        world.SetParent(root.transform, false);

        var bgSprite = AssetDatabase.LoadAssetAtPath<Sprite>(M + "BG/Desert.png");
        var bg = B.SR("Background", world, bgSprite, Vector3.zero, -100);
        var fit = camGo.AddComponent<CameraFit>();
        fit.cam = cam; fit.background = bg; fit.floorY = FLOOR;
        fit.bgFloorOffset = (BG_FLOOR_FRAC - 0.5f) * 11.52f;
        fit.bgHalfHeight = 5.76f;
        fit.bgHalfWidth = bgSprite.bounds.size.x * 0.5f;
        fit.halfWidthNeeded = 4.8f;

        // ---------- Heroes (mod) ----------
        var heroDefs = new[] {
            C("Gugu_Gaga", "body_Gugu_Gaga", "head_Gugu_Gaga", new[]{"legs_Gugu_Gaga"}, new[]{"hand_Gugu_Gaga"}, null, 2.6f),
            C("Black_Cat", "body_Black_Cat", "head_Black_Cat", new[]{"leg_far_Black_Cat","leg_near_Black_Cat"}, new[]{"arm_Black_Cat"}, "tail_Black_Cat", 2.3f),
            C("Banana_Cat", "body_head_Banana_Cat", null, new[]{"left_leg_Banana_Cat","right_leg_Banana_Cat"}, new[]{"arm_Banana_Cat"}, null, 2.6f),
        };
        var heroes = new HeroRig[heroDefs.Length];
        for (int i = 0; i < heroDefs.Length; i++) heroes[i] = BuildHero(world, heroDefs[i], new Vector3(-3.0f, FLOOR, 0));

        // ---------- Monsters ----------
        var monDefs = new[] {
            C("Deer", "body_deer", "head_deer", new[]{"legs_deer"}, new[]{"arms_Deer"}, null, 3.2f),
            C("Verity", "body_Verity", "head_Verity", new[]{"legs_Verity"}, new[]{"arms_Verity"}, null, 3.2f),
            C("Siren_Head", "body_Siren_Head", "head_Siren_Head", new[]{"leg_far_Siren_Head","leg_near_Siren_Head"}, new[]{"arm_Siren_Head"}, null, 4.2f),
        };
        var monsters = new MonsterView[monDefs.Length];
        for (int i = 0; i < monDefs.Length; i++) monsters[i] = BuildMonster(world, monDefs[i], new Vector3(3.0f, FLOOR, 0));

        // ---------- FX ----------
        var fx = new GameObject("FX").transform; fx.SetParent(world, false);
        var rocket = B.SR("Rocket", fx, Big(M + "Weapons/bullet_RPG.png"), Vector3.zero, 50);
        rocket.transform.localScale = Vector3.one * 0.45f;
        var fist = B.SR("GloveProjectile", fx, Big(M + "Weapons/bullet_glove.png"), Vector3.zero, 50);
        fist.transform.localScale = Vector3.one * 1.3f;
        var circle = AssetDatabase.LoadAssetAtPath<Sprite>("Assets/_Playable/Art/Generated/circle.png");
        var boom = B.SR("Explosion", fx, circle, Vector3.zero, 60);
        var flash = B.SR("MuzzleFlash", fx, circle, Vector3.zero, 55);
        flash.color = new Color(1f, 0.9f, 0.4f); flash.transform.localScale = Vector3.one * 0.45f;
        var fwMat = B.FireworkMaterial();
        var fws = new[] {
            B.Firework("Firework0", fx, new Vector3(-2.6f, FLOOR + 4.6f, 0), new Color(1f, 0.85f, 0.2f), fwMat),
            B.Firework("Firework1", fx, new Vector3(0f, FLOOR + 5.6f, 0), new Color(1f, 0.35f, 0.6f), fwMat),
            B.Firework("Firework2", fx, new Vector3(2.6f, FLOOR + 4.8f, 0), new Color(0.4f, 0.9f, 1f), fwMat) };

        // ---------- Audio + Luna ----------
        var audioGo = new GameObject("Audio"); audioGo.transform.SetParent(root.transform, false);
        var sfx = audioGo.AddComponent<AudioSource>(); sfx.playOnAwake = false;
        var lunaGo = new GameObject("LunaController"); lunaGo.transform.SetParent(root.transform, false);
        var luna = lunaGo.AddComponent<LunaController>();
        var bgmSrc = lunaGo.AddComponent<AudioSource>(); bgmSrc.playOnAwake = false; bgmSrc.loop = true;
        luna.bgmSource = bgmSrc;
        luna.bgmClip = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/_Playable/Audio/bgm.mp3");
        luna.backgroundTexture = bgSprite.texture;
        luna.failSfxGuguGaga = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/_Meme/Audio/gugugaga_fail.mp3");
        luna.failSfxBlackCat = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/_Meme/Audio/blackcat_fail.mp3");
        luna.failSfxBananaCat = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/_Meme/Audio/bananacat_fail.mp3");
        luna.winSfxGuguGaga = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/_Meme/Audio/gugugaga_win.mp3");
        luna.winSfxBlackCat = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/_Meme/Audio/blackcat_win.mp3");
        luna.winSfxBananaCat = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/_Meme/Audio/bananacat_win.mp3");

        // ---------- UI ----------
        var canvasGo = new GameObject("KSBP_Canvas");
        var canvas = canvasGo.AddComponent<Canvas>(); canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        var scaler = canvasGo.AddComponent<CanvasScaler>();
        scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        scaler.referenceResolution = new Vector2(1080, 1920); scaler.matchWidthOrHeight = 0.5f;
        canvasGo.AddComponent<GraphicRaycaster>();
        var es = new GameObject("EventSystem"); es.AddComponent<EventSystem>(); es.AddComponent<StandaloneInputModule>();
        var white = AssetDatabase.LoadAssetAtPath<Sprite>("Assets/_Playable/Art/Generated/white.png");

        var panel = (RectTransform)B.Rect("ChoicePanel", canvasGo.transform, new Vector2(0.5f, 0f), new Vector2(0, 50), new Vector2(980, 440));
        panel.pivot = new Vector2(0.5f, 0f); panel.anchoredPosition = new Vector2(0, 50);
        var titleBg = B.Img("TitleBg", panel, white, new Vector2(0, 175), new Vector2(980, 100), new Color(0, 0, 0, 0.55f));
        titleBg.raycastTarget = false;
        var title = B.Txt("Title", panel, "CHOOSE ONE MOD TO BATTLE", new Vector2(0, 175), new Vector2(980, 100), 54, Color.white);
        var slotBtns = new Button[3]; var slotIcons = new Image[3];
        for (int i = 0; i < 3; i++)
        {
            var slot = B.Img("Slot" + i, panel, B.Sp("Art/UI/Item_Slot.png"), new Vector2((i - 1) * 310, -40), new Vector2(270, 278), Color.white);
            slotBtns[i] = slot.gameObject.AddComponent<Button>();
            slotIcons[i] = B.Img("Icon", slot.transform, null, new Vector2(0, -6), new Vector2(200, 200), Color.white);
            slotIcons[i].preserveAspect = true; slotIcons[i].raycastTarget = false;
            var nw = B.Img("New", slot.transform, B.Sp("Art/UI/Lab_New.png"), new Vector2(-72, 112), new Vector2(126, 60), Color.white);
            nw.raycastTarget = false;
        }
        var hand = B.Img("Hand", panel, AssetDatabase.LoadAssetAtPath<Sprite>("Assets/_Playable/Art/UI/tuto_hand.png"), Vector2.zero, new Vector2(170, 170), Color.white);
        hand.raycastTarget = false; hand.preserveAspect = true; hand.rectTransform.pivot = new Vector2(0.30f, 0.78f);

        var dmgTexts = new Text[6];
        for (int i = 0; i < dmgTexts.Length; i++) dmgTexts[i] = B.Txt("Dmg" + i, canvasGo.transform, "-20", Vector2.zero, new Vector2(300, 100), 80, new Color(1f, 0.25f, 0.2f));
        var effectText = B.Txt("EffectText", canvasGo.transform, "SUPER EFFECTIVE!", new Vector2(0, 220), new Vector2(1100, 120), 72, Color.green);
        var catcher = B.Img("EndCatcher", canvasGo.transform, white, Vector2.zero, Vector2.zero, new Color(0, 0, 0, 0));
        B.Stretch(catcher.rectTransform);
        var catcherBtn = catcher.gameObject.AddComponent<Button>();
        var popup = B.Img("Popup", canvasGo.transform, white, Vector2.zero, Vector2.zero, new Color(0, 0, 0, 0.55f));
        B.Stretch(popup.rectTransform); popup.raycastTarget = false;
        var box = B.Img("Box", popup.transform, B.Sp("Art/UI/Item_Slot.png"), new Vector2(0, -80), new Vector2(840, 520), Color.white);
        box.raycastTarget = false;
        var popupTitle = B.Txt("Title", box.transform, "MONSTER DEFEATED!", new Vector2(0, 120), new Vector2(800, 120), 58, Color.white);
        var btnImg = B.Img("Button", box.transform, white, new Vector2(0, -100), new Vector2(560, 160), new Color(0.3f, 0.8f, 0.3f));
        var btn = btnImg.gameObject.AddComponent<Button>();
        var btnLabel = B.Txt("Label", btnImg.transform, "NEXT BATTLE", Vector2.zero, new Vector2(560, 160), 70, Color.white);
        var bigText = B.Txt("BigText", canvasGo.transform, "YOU WIN!", new Vector2(0, 360), new Vector2(1100, 220), 150, Color.green);

        // ---------- MemeFlow ----------
        var flow = root.AddComponent<MemeFlow>();
        flow.luna = luna; luna.memeFlow = flow;
        flow.backgroundSprite = bgSprite;
        flow.cam = cam; flow.world = world; flow.background = bg;
        flow.heroes = heroes; flow.monsters = monsters;
        flow.weaponSprites = new[] { Big(M + "Weapons/Boxing_Glove_Gun.png"), Big(M + "Weapons/RPG.png"), Big(M + "Weapons/Baseball_Bat.png") };
        flow.armorSprites = new[] { Big(M + "Armor/Helmet21.png"), Big(M + "Armor/Helmet19.png"), Big(M + "Armor/Helmet7.png") };
        flow.modIcons = new[] { Big(M + "Characters/Gugu_Gaga/head_Gugu_Gaga.png"), Big(M + "Characters/Black_Cat/head_Black_Cat.png"), Big(M + "Characters/Banana_Cat/body_head_Banana_Cat.png") };
        flow.monsterIcons = new[] { Big(M + "Characters/Deer/head_deer.png"), Big(M + "Characters/Verity/head_Verity.png"), Big(M + "Characters/Siren_Head/head_Siren_Head.png") };
        flow.rocket = rocket; flow.fistProjectile = fist; flow.explosion = boom; flow.muzzleFlash = flash; flow.fireworks = fws;
        flow.choicePanel = panel.gameObject; flow.titleText = title; flow.titleBar = titleBg.gameObject;
        flow.slotIcons = slotIcons; flow.slotButtons = slotBtns; flow.hand = hand.rectTransform;
        flow.bigText = bigText; flow.effectText = effectText; flow.damageTexts = dmgTexts;
        flow.popup = popup.gameObject; flow.popupTitle = popupTitle; flow.popupButton = btn; flow.popupButtonLabel = btnLabel;
        flow.endCatcher = catcherBtn;
        flow.sfx = sfx;
        flow.clickClip = B.Clip("Button Click"); flow.equipClip = B.Clip("GetGun0"); flow.rpgClip = B.Clip("Ak47Shoot");
        flow.boomClip = B.Clip("GrinadeBoom1"); flow.hitClip = B.Clip("EnemyGetDamage"); flow.swingClip = B.Clip("ZombieHit");
        flow.winClip = B.Clip("FireWorks");
        flow.failClip = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/_Playable/Audio/GameOver.mp3");

        fit.Apply();
        EditorSceneManager.SaveScene(scene, SCENE);
        EditorBuildSettings.scenes = new[] { new EditorBuildSettingsScene(SCENE, true) };
        Debug.Log("[Meme Builder] Done -> " + SCENE);
    }

    // ---------------- helpers ----------------
    static void PrepareBackground()
    {
        var ti = (TextureImporter)AssetImporter.GetAtPath(M + "BG/Desert.png");
        if (ti == null) return;
        var tex = AssetDatabase.LoadAssetAtPath<Texture2D>(M + "BG/Desert.png");
        float ppu = 2168f / 11.52f;   // chieu cao BG = 11.52 unit nhu Backrooms
        bool dirty = false;
        if (Mathf.Abs(ti.spritePixelsPerUnit - ppu) > 0.1f) { ti.spritePixelsPerUnit = ppu; dirty = true; }
        if (ti.maxTextureSize < 4096) { ti.maxTextureSize = 4096; dirty = true; }
        if (ti.filterMode != FilterMode.Point) { ti.filterMode = FilterMode.Point; dirty = true; }
        if (dirty) ti.SaveAndReimport();
    }

    // lay sprite lon nhat trong file (bo cac manh vun khi sprite mode Multiple)
    static Sprite Big(string path)
    {
        Sprite best = null; float area = -1f;
        foreach (var o in AssetDatabase.LoadAllAssetRepresentationsAtPath(path))
        {
            var sp = o as Sprite; if (sp == null) continue;
            float a = sp.rect.width * sp.rect.height;
            if (a > area) { area = a; best = sp; }
        }
        if (best == null) best = AssetDatabase.LoadAssetAtPath<Sprite>(path);
        if (best == null) Debug.LogError("[Meme Builder] Missing sprite " + path);
        return best;
    }

    static Sprite Part(CharDef d, string file) { return Big(M + "Characters/" + d.name + "/" + file + ".png"); }

    class Rig
    {
        public Transform root, body, frontArmPivot, frontHand;
        public List<SpriteRenderer> parts = new List<SpriteRenderer>();
        public List<Transform> legs = new List<Transform>(), arms = new List<Transform>();
        public float bodyTop, bodyBottom, headTop, headH, headW, scale;
    }

    // Ghep nhan vat tu dong theo bounds sprite: chan -> than -> dau -> tay; local units truoc scale
    static Rig AutoRig(Transform parent, CharDef d, Vector3 pos, bool faceLeft, int baseOrder)
    {
        var r = new Rig();
        r.root = new GameObject(d.name).transform;
        r.root.SetParent(parent, false);
        r.root.localPosition = pos;
        r.body = new GameObject("Body").transform; r.body.SetParent(r.root, false);

        Sprite bodySp = Part(d, d.body);
        Bounds bb = bodySp.bounds;
        float bodyW = bb.size.x;

        // --- chan ---
        var legSprites = new List<Sprite>();
        foreach (var l in d.legs) legSprites.Add(Part(d, l));
        float legTop = 0f, legH = 0f;
        // luon 2 chan (sprite "legs" thuc ra chi la 1 ban chan -> nhan doi)
        int legCount = 2;
        float sep = Mathf.Max(bodyW * 0.2f, legSprites[0].bounds.size.x * 0.45f);
        for (int i = 0; i < legCount; i++)
        {
            Sprite sp = legSprites[Mathf.Min(i, legSprites.Count - 1)];
            Bounds lb = sp.bounds;
            // sprite chan [0] (left/far) dat ben +x, [1] ben -x; ban sao nhan doi o -x thi lat
            float x = i == 0 ? sep : -sep;
            var sr = B.SR(i == 0 ? "LegL" : "LegR", r.body, sp, new Vector3(x - lb.center.x, -lb.min.y, 0f), baseOrder + 1);
            if (legSprites.Count == 1 && i == 1) sr.flipX = true;
            r.parts.Add(sr); r.legs.Add(sr.transform);
            legTop = Mathf.Max(legTop, lb.size.y); legH = Mathf.Max(legH, lb.size.y);
        }

        // --- than ---
        float bodyY = legTop - legH * 0.15f - bb.min.y;
        var bodySr = B.SR("Torso", r.body, bodySp, new Vector3(-bb.center.x, bodyY, 0f), baseOrder + 2);
        r.parts.Add(bodySr);
        r.bodyBottom = bodyY + bb.min.y;
        r.bodyTop = bodyY + bb.max.y;

        // --- dau ---
        if (!string.IsNullOrEmpty(d.head))
        {
            Sprite hs = Part(d, d.head);
            Bounds hb = hs.bounds;
            float headY = r.bodyTop - hb.size.y * 0.12f - hb.min.y;
            var headSr = B.SR("Head", r.body, hs, new Vector3(-hb.center.x, headY, 0f), baseOrder + 4);
            r.parts.Add(headSr);
            r.headTop = headY + hb.max.y; r.headH = hb.size.y; r.headW = hb.size.x;
        }
        else
        {
            r.headTop = r.bodyTop; r.headH = bb.size.y * 0.35f; r.headW = bodyW * 0.9f;
        }

        // --- duoi ---
        if (!string.IsNullOrEmpty(d.tail))
        {
            Sprite ts = Part(d, d.tail);
            var tsr = B.SR("Tail", r.body, ts, new Vector3(-bodyW * 0.5f - ts.bounds.center.x, r.bodyBottom + bb.size.y * 0.35f, 0f), baseOrder);
            r.parts.Add(tsr);
        }

        // --- tay: vai o gan dinh than ---
        Sprite armSp = Part(d, d.arms[0]);
        Bounds ab = armSp.bounds;
        // than+dau chung 1 sprite (Banana_Cat) -> vai o giua than, khong phai dinh
        float shoulderY = string.IsNullOrEmpty(d.head) ? r.bodyBottom + bb.size.y * 0.45f : r.bodyTop - bb.size.y * 0.12f;
        float armX = bodyW * 0.5f - ab.size.x * 0.35f;
        for (int i = 0; i < 2; i++)
        {
            bool front = i == 1;
            var pivot = new GameObject(front ? "ArmFrontPivot" : "ArmBackPivot").transform;
            pivot.SetParent(r.body, false);
            pivot.localPosition = new Vector3(front ? armX : -armX, shoulderY, 0f);
            var sr = B.SR(front ? "ArmFront" : "ArmBack", pivot, armSp, new Vector3(-ab.center.x, -ab.max.y, 0f), front ? baseOrder : baseOrder + 6);   // tay cam vu khi (front) = 10, tay kia = 16
            if (front) sr.flipX = true;   // tay truoc lat, tay sau giu nguyen (truoc day bi nguoc)
            r.parts.Add(sr); r.arms.Add(sr.transform);
            if (front)
            {
                r.frontArmPivot = pivot;
                r.frontHand = new GameObject("Hand").transform;
                r.frontHand.SetParent(pivot, false);
                r.frontHand.localPosition = new Vector3(0f, -ab.size.y * 0.9f, 0f);
                r.frontHand.localRotation = Quaternion.Euler(0, 0, -90f);
            }
        }

        // --- chuan hoa chieu cao + huong mat ---
        float total = r.headTop;
        r.scale = d.height / total;
        bool flip = faceLeft != d.flip;
        r.root.localScale = new Vector3(flip ? -r.scale : r.scale, r.scale, 1f);
        return r;
    }

    static HeroRig BuildHero(Transform world, CharDef d, Vector3 pos)
    {
        var r = AutoRig(world, d, pos, false, 10);
        var h = new HeroRig();
        h.root = r.root; h.body = r.body; h.armPivot = r.frontArmPivot; h.holder = r.frontHand;
        h.weapon = B.SR("Weapon", r.frontHand, null, Vector3.zero, 11);
        h.muzzle = new GameObject("Muzzle").transform; h.muzzle.SetParent(r.frontHand, false);
        h.helmetAnchor = new GameObject("HelmetAnchor").transform; h.helmetAnchor.SetParent(r.body, false);
        // mu trum xuong nua tren cua dau (khong dat lo lung tren dinh)
        h.helmetAnchor.localPosition = new Vector3(0f, r.headTop - r.headH * 0.6f, 0f);
        h.helmet = B.SR("Helmet", h.helmetAnchor, null, Vector3.zero, 17);
        h.headWidth = r.headW;
        h.parts = r.parts.ToArray();
        return h;
    }

    static MonsterView BuildMonster(Transform world, CharDef d, Vector3 pos)
    {
        var r = AutoRig(world, d, pos, true, 10);
        var white = AssetDatabase.LoadAssetAtPath<Sprite>("Assets/_Playable/Art/Generated/white.png");
        float s = r.scale;
        // HP bar: giu kich thuoc world co dinh, khong bi flip
        var hp = new GameObject("HP").transform; hp.SetParent(r.root, false);
        hp.localPosition = new Vector3(0f, r.headTop + 0.35f / s, 0f);
        hp.localScale = new Vector3(-1f / s, 1f / s, 1f);
        var bgBar = B.SR("Bg", hp, white, Vector3.zero, 70); bgBar.color = new Color(0.1f, 0.1f, 0.1f, 0.9f);
        bgBar.transform.localScale = new Vector3(1.7f, 0.24f, 1);
        var fillPivot = new GameObject("FillPivot").transform; fillPivot.SetParent(hp, false);
        fillPivot.localPosition = new Vector3(-0.8f, 0, 0);
        var fill = B.SR("Fill", fillPivot, white, new Vector3(0.8f, 0, 0), 71); fill.color = new Color(0.95f, 0.2f, 0.2f);
        fill.transform.localScale = new Vector3(1.6f, 0.16f, 1);
        var anchor = new GameObject("HeadAnchor").transform; anchor.SetParent(r.root, false);
        anchor.localPosition = new Vector3(0f, (r.bodyBottom + r.bodyTop) * 0.5f + 0.9f / s, 0f);
        var mv = r.root.gameObject.AddComponent<MonsterView>();
        mv.body = r.body; mv.parts = r.parts.ToArray(); mv.hpRoot = hp.gameObject; mv.hpFill = fillPivot; mv.headAnchor = anchor;
        mv.legs = r.legs.ToArray(); mv.arms = r.arms.ToArray();
        return mv;
    }
}

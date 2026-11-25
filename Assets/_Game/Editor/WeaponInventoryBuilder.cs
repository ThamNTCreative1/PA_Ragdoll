using System.Collections.Generic;
using UnityEditor;
using UnityEditor.SceneManagement;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.TextCore.LowLevel;
using UnityEngine.UI;

namespace MelonAd.EditorTools
{
    /// <summary>
    /// Builds Assets/_Game/Scenes/Main_WeaponInventory.unity: inventory grid of all game weapons/bombs + "Test Your Weapons!" + START.
    /// Menu: Game/Weapon Inventory/Build Scene. Safe to re-run (scene is recreated, art re-imported).
    /// </summary>
    public static class WeaponInventoryBuilder
    {
        const string Root = "Assets/_Game/";
        const string IconDir = Root + "Art/Weapons/Icons/";
        const string UIDir = Root + "Art/Weapons/UI/";
        const string FontPath = Root + "Art/Fonts/BetterVCR.ttf";
        const string TmpFontPath = Root + "Art/Fonts/BetterVCR SDF.asset";
        const string TmpOutlineDarkPath = Root + "Art/Fonts/BetterVCR SDF - Outline Dark.mat";
        const string TmpOutlineGreenPath = Root + "Art/Fonts/BetterVCR SDF - Outline Green.mat";
        const string MusicPath = Root + "Audio/music.mp3";
        const string SfxDir = Root + "Audio/Weapons/";
        const string HandPath = Root + "Art/Sprites/finger.png";
        const string AppIconSrc = Root + "SRP_V01_1_Icon_HoaiPP_AnhNTN.png";
        const string EndcardIconPath = UIDir + "endcard_icon.png"; // AppIconSrc with rounded corners (generated)
        const int SfxPool = 4;
        const string ScenePath = Root + "Scenes/Main_WeaponInventory.unity";

        // icon file name (Art/Weapons/Icons), display name
        static readonly string[,] Items =
        {
            // weapon.zip / melee
            { "Kunai", "KUNAI" },
            { "Dagger", "DAGGER" },
            { "Short_Sword", "SHORT SWORD" },
            { "Sword", "SWORD" },
            { "Katana", "KATANA" },
            { "Machete", "MACHETE" },
            { "Cleaver", "CLEAVER" },
            { "Sickle", "SICKLE" },
            { "Rapier", "RAPIER" },
            { "Hwando", "HWANDO" },
            { "Frost_Sabre", "FROST SABRE" },
            { "Blaze_Sword", "BLAZE SWORD" },
            { "Prism_Saber", "PRISM SABER" },
            { "Talisman_Sword", "TALISMAN SWORD" },
            { "Star_war_sword", "STAR SWORD" },
            { "Nodachi", "NODACHI" },
            { "Greatsword", "GREATSWORD" },
            { "Axe", "AXE" },
            { "Battle_Axe", "BATTLE AXE" },
            { "Baseball_Bat", "BASEBALL BAT" },
            { "Nail_Bat", "NAIL BAT" },
            { "Golf_Club", "GOLF CLUB" },
            { "Hockey_Stick", "HOCKEY STICK" },
            { "Tennis_Racket", "TENNIS RACKET" },
            { "Pan", "PAN" },
            { "Pipe_Wrench", "PIPE WRENCH" },
            { "Plunger", "PLUNGER" },
            { "Broom", "BROOM" },
            { "Shovel", "SHOVEL" },
            { "Sledgehammer", "SLEDGEHAMMER" },
            { "Rubber_Hammer", "RUBBER HAMMER" },
            { "Thunder_Hammer", "THUNDER HAMMER" },
            { "Spiked_Mace", "SPIKED MACE" },
            { "Flail", "FLAIL" },
            { "Kanabo", "KANABO" },
            { "Dokkaebi_Club", "DOKKAEBI CLUB" },
            { "Bo_Staff", "BO STAFF" },
            { "Halberd", "HALBERD" },
            { "Glaive", "GLAIVE" },
            { "Trident", "TRIDENT" },
            { "Demon_Scythe", "DEMON SCYTHE" },
            { "Chainsaw", "CHAINSAW" },
            { "Iron_Fan", "IRON FAN" },
            { "Lightstick", "LIGHTSTICK" },
            { "Mic_Stand", "MIC STAND" },
            { "Selfie_Stick", "SELFIE STICK" },
            { "Rock_Guitar", "ROCK GUITAR" },
            { "Giant_Lollipop", "GIANT LOLLIPOP" },
            { "Rubber_Chicken", "RUBBER CHICKEN" },
            { "Big_Tuna", "BIG TUNA" },
            // weapon.zip / ranged
            { "Pistol", "PISTOL" },
            { "Revolver", "REVOLVER" },
            { "Flintlock_Pistol", "FLINTLOCK PISTOL" },
            { "Machine_Pistol", "MACHINE PISTOL" },
            { "Laser_Pistol", "LASER PISTOL" },
            { "Flare_Gun", "FLARE GUN" },
            { "Submachine_Gun", "SUBMACHINE GUN" },
            { "Drum_SMG", "DRUM SMG" },
            { "AK", "AK" },
            { "Burst_Rifle", "BURST RIFLE" },
            { "Marksman_Rifle", "MARKSMAN RIFLE" },
            { "Sniper_Rifle", "SNIPER RIFLE" },
            { "Anti_Tank_Rifle", "ANTI TANK RIFLE" },
            { "Shotgun", "SHOTGUN" },
            { "Double_Barrel", "DOUBLE BARREL" },
            { "Auto_Shotgun", "AUTO SHOTGUN" },
            { "Blunderbuss", "BLUNDERBUSS" },
            { "Light_Machine_Gun", "LIGHT MACHINE GUN" },
            { "Heavy_Machine_Gun", "HEAVY MACHINE GUN" },
            { "Minigun", "MINIGUN" },
            { "Golden_Minigun", "GOLDEN MINIGUN" },
            { "Bow", "BOW" },
            { "Crossbow", "CROSSBOW" },
            { "Slingshot", "SLINGSHOT" },
            { "Harpoon_Gun", "HARPOON GUN" },
            { "Nail_Gun", "NAIL GUN" },
            { "Grenade_Launcher", "GRENADE LAUNCHER" },
            { "Hand_Mortar", "HAND MORTAR" },
            { "RPG", "RPG" },
            { "Homing_Launcher", "HOMING LAUNCHER" },
            { "Rocket_Pod", "ROCKET POD" },
            { "Airstrike_Beacon", "AIRSTRIKE BEACON" },
            { "Flamethrower", "FLAMETHROWER" },
            { "Freeze_Ray", "FREEZE RAY" },
            { "Fire_Extinguisher", "FIRE EXTINGUISHER" },
            { "Laser_Rifle", "LASER RIFLE" },
            { "Lightning_Gun", "LIGHTNING GUN" },
            { "Railgun", "RAILGUN" },
            { "Plasma_Gun", "PLASMA GUN" },
            { "Plasma_Shotgun", "PLASMA SHOTGUN" },
            { "Black_Hole_Cannon", "BLACK HOLE CANNON" },
            { "Saw_Launcher", "SAW LAUNCHER" },
            { "Water_Gun", "WATER GUN" },
            { "Bubble_Gun", "BUBBLE GUN" },
            { "Paintball_Gun", "PAINTBALL GUN" },
            { "Confetti_gun", "CONFETTI GUN" },
            { "Heart_Blaster", "HEART BLASTER" },
            { "Lightstick_Blaster", "LIGHTSTICK BLASTER" },
            { "Boxing_Glove_Gun", "BOXING GLOVE GUN" },
            { "Boombox_Cannon", "BOOMBOX CANNON" },
        };

        static readonly Color TextLight = new Color32(236, 238, 242, 255);
        static readonly Color TextDim = new Color32(170, 176, 188, 255);

        [MenuItem("Game/Weapon Inventory/Build Scene")]
        public static void Build()
        {
            ImportArt();

            TMP_FontAsset font = EnsureTmpFont();
            Material outlineDark = EnsureOutlineMaterial(font, TmpOutlineDarkPath, new Color32(10, 11, 14, 255), 0.3f);
            Material outlineGreen = EnsureOutlineMaterial(font, TmpOutlineGreenPath, new Color32(16, 60, 12, 255), 0.3f);
            Sprite panelSp = LoadSprite(UIDir + "ui_panel.png");
            Sprite headerSp = LoadSprite(UIDir + "ui_header.png");
            Sprite frameSp = LoadSprite(UIDir + "ui_slot_frame.png");
            Sprite btnSp = LoadSprite(UIDir + "ui_btn_green.png");
            Texture2D bgTex = AssetDatabase.LoadAssetAtPath<Texture2D>(UIDir + "bg_default.png");
            AudioClip music = AssetDatabase.LoadAssetAtPath<AudioClip>(MusicPath);

            var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);

            // camera (only clears the screen; everything is Screen Space Overlay UI)
            var camGo = new GameObject("Main Camera");
            camGo.tag = "MainCamera";
            var cam = camGo.AddComponent<Camera>();
            cam.orthographic = true;
            cam.clearFlags = CameraClearFlags.SolidColor;
            cam.backgroundColor = new Color32(24, 25, 32, 255);
            camGo.transform.position = new Vector3(0f, 0f, -10f);
            camGo.AddComponent<AudioListener>();

            var es = new GameObject("EventSystem");
            es.AddComponent<EventSystem>();
            es.AddComponent<StandaloneInputModule>();

            var canvasGo = new GameObject("Canvas", typeof(RectTransform));
            var canvas = canvasGo.AddComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            var scaler = canvasGo.AddComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.screenMatchMode = CanvasScaler.ScreenMatchMode.Expand;
            scaler.referenceResolution = new Vector2(1080f, 1920f);
            canvasGo.AddComponent<GraphicRaycaster>();

            // background
            var bg = NewUI("Background", canvasGo.transform).gameObject.AddComponent<RawImage>();
            Stretch(bg.rectTransform);
            bg.texture = bgTex;
            bg.raycastTarget = false;

            // inventory panel
            RectTransform panel = NewUI("InventoryPanel", canvasGo.transform);
            var panelImg = panel.gameObject.AddComponent<Image>();
            panelImg.sprite = panelSp;
            panelImg.type = Image.Type.Sliced;
            panelImg.pixelsPerUnitMultiplier = 0.25f;

            RectTransform header = NewUI("Header", panel);
            header.anchorMin = new Vector2(0f, 1f);
            header.anchorMax = new Vector2(1f, 1f);
            header.pivot = new Vector2(0.5f, 1f);
            header.offsetMin = new Vector2(16f, -116f);
            header.offsetMax = new Vector2(-16f, -16f);
            var headerImg = header.gameObject.AddComponent<Image>();
            headerImg.sprite = headerSp;
            headerImg.type = Image.Type.Sliced;
            headerImg.pixelsPerUnitMultiplier = 0.25f;

            TMP_Text headerTitle = NewText("Title", header, font, "INVENTORY", 58, TextLight, TextAlignmentOptions.Left);
            Stretch(headerTitle.rectTransform, new Vector2(32f, 0f), new Vector2(-32f, 0f));
            TMP_Text headerCount = NewText("Count", header, font, Items.GetLength(0) + "/" + Items.GetLength(0), 46, new Color32(120, 220, 90, 255), TextAlignmentOptions.Right);
            Stretch(headerCount.rectTransform, new Vector2(32f, 0f), new Vector2(-32f, 0f));

            // scroll view
            RectTransform viewport = NewUI("Viewport", panel);
            viewport.anchorMin = Vector2.zero;
            viewport.anchorMax = Vector2.one;
            viewport.offsetMin = new Vector2(16f, 16f);
            viewport.offsetMax = new Vector2(-16f, -124f);
            var vpImg = viewport.gameObject.AddComponent<Image>();
            vpImg.color = new Color(1f, 1f, 1f, 1f / 255f); // raycast target for dragging anywhere; Mask needs a graphic
            var mask = viewport.gameObject.AddComponent<Mask>();
            mask.showMaskGraphic = false;

            RectTransform content = NewUI("Content", viewport);
            content.anchorMin = new Vector2(0f, 1f);
            content.anchorMax = new Vector2(1f, 1f);
            content.pivot = new Vector2(0.5f, 1f);
            content.sizeDelta = new Vector2(0f, 2000f);

            var scroll = panel.gameObject.AddComponent<ScrollRect>();
            scroll.content = content;
            scroll.viewport = viewport;
            scroll.horizontal = false;
            scroll.vertical = true;
            scroll.movementType = ScrollRect.MovementType.Elastic;
            scroll.elasticity = 0.12f;
            scroll.inertia = true;
            scroll.decelerationRate = 0.135f;
            scroll.scrollSensitivity = 30f;

            var slots = new List<RectTransform>();
            for (int i = 0; i < Items.GetLength(0); i++)
            {
                string file = Items[i, 0], label = Items[i, 1];
                RectTransform slot = NewUI("Slot_" + file, content);
                slot.sizeDelta = new Vector2(280f, 328f);

                // square tap area (transparent) holding the weapon art tilted diagonally to the upper right
                var icon = NewUI("Icon", slot).gameObject.AddComponent<Image>();
                icon.color = new Color(1f, 1f, 1f, 0f);
                icon.raycastTarget = true; // tap target (drags still go to the ScrollRect)
                var art = NewUI("Art", icon.rectTransform).gameObject.AddComponent<Image>();
                art.sprite = LoadSprite(IconDir + file + ".png");
                art.raycastTarget = false;
                LayoutDiagonal(art);
                var slotBtn = slot.gameObject.AddComponent<Button>();
                slotBtn.targetGraphic = art;
                slotBtn.transition = Selectable.Transition.ColorTint;
                var sc = slotBtn.colors;
                sc.highlightedColor = Color.white;
                sc.selectedColor = Color.white;
                sc.pressedColor = new Color(0.75f, 0.75f, 0.75f, 1f);
                slotBtn.colors = sc;
                slotBtn.navigation = new Navigation { mode = Navigation.Mode.None };
                Stretch(icon.rectTransform, new Vector2(18f, 66f), new Vector2(-18f, -18f));

                var frame = NewUI("Frame", slot).gameObject.AddComponent<Image>();
                frame.sprite = frameSp;
                frame.type = Image.Type.Sliced;
                frame.fillCenter = false;
                frame.pixelsPerUnitMultiplier = 0.2f;
                frame.raycastTarget = false;
                Stretch(frame.rectTransform, new Vector2(0f, 48f), Vector2.zero);

                TMP_Text name = NewText("Name", slot, font, label, 30, TextDim, TextAlignmentOptions.Center);
                name.rectTransform.anchorMin = Vector2.zero;
                name.rectTransform.anchorMax = new Vector2(1f, 0f);
                name.rectTransform.pivot = new Vector2(0.5f, 0f);
                name.rectTransform.offsetMin = new Vector2(2f, 0f);
                name.rectTransform.offsetMax = new Vector2(-2f, 46f);
                name.enableAutoSizing = true; // long names (e.g. LIGHTSTICK BLASTER) shrink to fit the slot
                name.fontSizeMin = 14f;
                name.fontSizeMax = 30f;
                slots.Add(slot);
            }

            // hand tutorial (inside the viewport, above the slots; fingertip = pivot)
            RectTransform hand = NewUI("HandTutorial", viewport);
            hand.anchorMin = hand.anchorMax = new Vector2(0.5f, 0.5f);
            hand.pivot = new Vector2(0.33f, 0.97f);
            hand.sizeDelta = new Vector2(184f, 237f);
            var handImg = hand.gameObject.AddComponent<Image>();
            handImg.sprite = LoadSprite(HandPath);
            handImg.raycastTarget = false;
            hand.gameObject.SetActive(false);

            // CTA area
            RectTransform cta = NewUI("CtaArea", canvasGo.transform);
            TMP_Text title = NewText("Title", cta, font, "Test Your Weapons!", 72, Color.white, TextAlignmentOptions.Center);
            Stretch(title.rectTransform);
            title.fontSharedMaterial = outlineDark;

            RectTransform btn = NewUI("StartButton", cta);
            var btnImg = btn.gameObject.AddComponent<Image>();
            btnImg.sprite = btnSp;
            btnImg.type = Image.Type.Sliced;
            btnImg.pixelsPerUnitMultiplier = 0.15f;
            var button = btn.gameObject.AddComponent<Button>();
            button.targetGraphic = btnImg;
            button.navigation = new Navigation { mode = Navigation.Mode.None };
            var colors = button.colors;
            colors.pressedColor = new Color(0.8f, 0.8f, 0.8f, 1f);
            button.colors = colors;
            TMP_Text startLabel = NewText("Label", btn, font, "START", 80, Color.white, TextAlignmentOptions.Center);
            Stretch(startLabel.rectTransform, new Vector2(0f, 14f), new Vector2(0f, 0f));
            startLabel.fontSharedMaterial = outlineGreen;

            // endcard (shown after START): dim overlay over everything, app icon + pulsing PLAY; any tap opens the store
            RectTransform endcard = NewUI("Endcard", canvasGo.transform);
            Stretch(endcard);
            var endcardGroup = endcard.gameObject.AddComponent<CanvasGroup>();
            var dim = endcard.gameObject.AddComponent<Image>();
            dim.color = new Color(0f, 0f, 0f, 0.72f);
            dim.raycastTarget = true; // tap anywhere
            var endcardBtn = endcard.gameObject.AddComponent<Button>();
            endcardBtn.transition = Selectable.Transition.None;
            endcardBtn.navigation = new Navigation { mode = Navigation.Mode.None };

            RectTransform ecContent = NewUI("Content", endcard); // icon + PLAY, scaled down in landscape
            ecContent.anchorMin = ecContent.anchorMax = new Vector2(0.5f, 0.5f);
            ecContent.sizeDelta = new Vector2(700f, 1000f);

            RectTransform ecIcon = NewUI("AppIcon", ecContent);
            ecIcon.anchorMin = ecIcon.anchorMax = new Vector2(0.5f, 0.5f);
            ecIcon.sizeDelta = new Vector2(660f, 660f);
            ecIcon.anchoredPosition = new Vector2(0f, 160f);
            var ecIconImg = ecIcon.gameObject.AddComponent<Image>();
            ecIconImg.sprite = LoadSprite(EndcardIconPath);
            ecIconImg.preserveAspect = true;
            ecIconImg.raycastTarget = false;

            RectTransform ecPlay = NewUI("PlayButton", ecContent);
            ecPlay.anchorMin = ecPlay.anchorMax = new Vector2(0.5f, 0.5f);
            ecPlay.sizeDelta = new Vector2(640f, 180f);
            ecPlay.anchoredPosition = new Vector2(0f, -360f);
            var ecPlayImg = ecPlay.gameObject.AddComponent<Image>();
            ecPlayImg.sprite = btnSp;
            ecPlayImg.type = Image.Type.Sliced;
            ecPlayImg.pixelsPerUnitMultiplier = 0.15f;
            ecPlayImg.raycastTarget = false; // the full-screen overlay takes the tap
            TMP_Text playLabel = NewText("Label", ecPlay, font, "PLAY", 96, Color.white, TextAlignmentOptions.Center);
            Stretch(playLabel.rectTransform, new Vector2(0f, 14f), new Vector2(0f, 0f));
            playLabel.fontSharedMaterial = outlineGreen;
            endcard.gameObject.SetActive(false);

            // controller + BGM
            var ctrlGo = new GameObject("WeaponInventoryPLA");
            var bgm = ctrlGo.AddComponent<AudioSource>();
            bgm.playOnAwake = false;
            bgm.loop = true;
            bgm.clip = music;
            var ctrl = ctrlGo.AddComponent<WeaponInventoryPLA>();
            for (int i = 0; i < SfxPool; i++)
            {
                var src = ctrlGo.AddComponent<AudioSource>();
                src.playOnAwake = false;
                src.loop = false;
                ctrl.sfxSources.Add(src);
            }
            ctrl.clickSfx = AssetDatabase.LoadAssetAtPath<AudioClip>(SfxDir + "sfx_ButtonClick.mp3");
            ctrl.selectSfx = AssetDatabase.LoadAssetAtPath<AudioClip>(SfxDir + "sfx_Select.mp3");
            ctrl.BGTexture = bgTex;
            ctrl.BGM = music;
            ctrl.scaler = scaler;
            ctrl.background = bg;
            ctrl.inventoryPanel = panel;
            ctrl.header = header;
            ctrl.headerTitle = headerTitle;
            ctrl.headerCount = headerCount;
            ctrl.scroll = scroll;
            ctrl.viewport = viewport;
            ctrl.content = content;
            ctrl.slots = slots;
            ctrl.ctaArea = cta;
            ctrl.title = title;
            ctrl.startButton = btn;
            ctrl.startLabel = startLabel;
            ctrl.bgmSource = bgm;
            ctrl.hand = hand;
            ctrl.handImage = handImg;
            ctrl.endcard = endcard;
            ctrl.endcardGroup = endcardGroup;
            ctrl.endcardContent = ecContent;
            ctrl.endcardIcon = ecIcon;
            ctrl.endcardPlay = ecPlay;

            // safe frame (notch / home bar): inventory + CTA live inside, background stays full screen
            RectTransform safe = NewUI("SafeArea", canvasGo.transform);
            safe.SetSiblingIndex(panel.GetSiblingIndex());
            Stretch(safe, new Vector2(0f, 30f), new Vector2(0f, -140f));
            panel.SetParent(safe, false);
            cta.SetParent(safe, false);
            ctrl.safeRoot = safe;

            // portrait preview layout in edit mode
            SetRect(panel, new Vector2(0f, 0.25f), Vector2.one, new Vector2(30f, 0f), new Vector2(-30f, -40f));
            SetRect(cta, Vector2.zero, new Vector2(1f, 0.25f), new Vector2(30f, 30f), new Vector2(-30f, -20f));
            SetRect(title.rectTransform, new Vector2(0f, 0.58f), Vector2.one, Vector2.zero, Vector2.zero);
            btn.anchorMin = btn.anchorMax = new Vector2(0.5f, 0.3f);
            btn.sizeDelta = new Vector2(560f, 160f);
            for (int i = 0; i < slots.Count; i++)
            {
                slots[i].anchorMin = slots[i].anchorMax = new Vector2(0f, 1f);
                slots[i].pivot = new Vector2(0.5f, 0.5f);
                slots[i].anchoredPosition = new Vector2(24f + (i % 3) * 302f + 140f, -(24f + (i / 3) * 350f + 164f));
            }

            EditorSceneManager.SaveScene(scene, ScenePath);
            SetBuildScene();
            Debug.Log("[WeaponInventoryBuilder] Built " + ScenePath);
        }

        static void SetBuildScene()
        {
            var list = new List<EditorBuildSettingsScene> { new EditorBuildSettingsScene(ScenePath, true) };
            foreach (var s in EditorBuildSettings.scenes)
                if (s.path != ScenePath) list.Add(new EditorBuildSettingsScene(s.path, false));
            EditorBuildSettings.scenes = list.ToArray();
        }

        static void ImportArt()
        {
            AssetDatabase.Refresh();
            foreach (string guid in AssetDatabase.FindAssets("t:Texture2D", new[] { IconDir.TrimEnd('/') }))
                SetupSprite(AssetDatabase.GUIDToAssetPath(guid), Vector4.zero);
            SetupSprite(UIDir + "ui_panel.png", new Vector4(8, 8, 8, 8));
            SetupSprite(UIDir + "ui_header.png", new Vector4(4, 4, 4, 4));
            SetupSprite(UIDir + "ui_slot_frame.png", new Vector4(4, 4, 4, 4));
            SetupSprite(UIDir + "ui_btn_green.png", new Vector4(5, 7, 5, 6));

            MakeRoundedIcon(AppIconSrc, EndcardIconPath, 0.19f);
            SetupSprite(EndcardIconPath, Vector4.zero);
            var iconImp = (TextureImporter)AssetImporter.GetAtPath(EndcardIconPath);
            iconImp.filterMode = FilterMode.Bilinear; // 512px photo-like icon is scaled, not pixel-exact
            iconImp.SaveAndReimport();

            var bgImp = (TextureImporter)AssetImporter.GetAtPath(UIDir + "bg_default.png");
            bgImp.textureType = TextureImporterType.Default;
            bgImp.mipmapEnabled = false;
            bgImp.filterMode = FilterMode.Bilinear;
            bgImp.wrapMode = TextureWrapMode.Clamp;
            bgImp.SaveAndReimport();
        }

        /// <summary>Writes a copy of the app icon with anti-aliased rounded corners (radius = fraction of the side).</summary>
        static void MakeRoundedIcon(string srcPath, string dstPath, float radiusFrac)
        {
            string projectDir = System.IO.Path.GetDirectoryName(Application.dataPath);
            string src = System.IO.Path.Combine(projectDir, srcPath);
            if (!System.IO.File.Exists(src)) { Debug.LogWarning("[WeaponInventoryBuilder] Missing " + srcPath); return; }

            var tex = new Texture2D(2, 2, TextureFormat.RGBA32, false);
            tex.LoadImage(System.IO.File.ReadAllBytes(src));
            int w = tex.width, h = tex.height;
            float r = Mathf.Min(w, h) * radiusFrac;
            Color32[] px = tex.GetPixels32();
            for (int y = 0; y < h; y++)
                for (int x = 0; x < w; x++)
                {
                    // distance outside the rounded rect, measured from the pixel center
                    float cx = Mathf.Clamp(x + 0.5f, r, w - r), cy = Mathf.Clamp(y + 0.5f, r, h - r);
                    float d = Vector2.Distance(new Vector2(x + 0.5f, y + 0.5f), new Vector2(cx, cy)) - r;
                    float cover = Mathf.Clamp01(0.5f - d);
                    if (cover >= 1f) continue;
                    int i = y * w + x;
                    px[i].a = (byte)(px[i].a * cover);
                }
            tex.SetPixels32(px);
            tex.Apply();
            System.IO.File.WriteAllBytes(System.IO.Path.Combine(projectDir, dstPath), tex.EncodeToPNG());
            Object.DestroyImmediate(tex);
            AssetDatabase.ImportAsset(dstPath);
        }

        static void SetupSprite(string path, Vector4 border)
        {
            var imp = (TextureImporter)AssetImporter.GetAtPath(path);
            if (imp == null) return;
            imp.textureType = TextureImporterType.Sprite;
            imp.spriteImportMode = SpriteImportMode.Single;
            imp.mipmapEnabled = false;
            imp.filterMode = FilterMode.Point;
            imp.textureCompression = TextureImporterCompression.Uncompressed;
            imp.alphaIsTransparency = true;
            imp.spriteBorder = border;
            imp.SaveAndReimport();
        }

        /// <summary>
        /// Points elongated art at the upper right: tall art (melee, tip up) turns 45° clockwise, wide art
        /// (guns, muzzle right) 45° counter-clockwise. Near-square art is already drawn diagonally and stays
        /// upright. Size is set via anchors (fractions of the square parent) so the rotated bounding box
        /// fits the parent at any cell size.
        /// </summary>
        static void LayoutDiagonal(Image art)
        {
            RectTransform r = art.rectTransform;
            r.anchoredPosition = Vector2.zero;
            r.sizeDelta = Vector2.zero;
            if (art.sprite == null) { Stretch(r); return; }

            float w = art.sprite.rect.width, h = art.sprite.rect.height;
            float aspect = Mathf.Max(w, h) / Mathf.Min(w, h);
            float fw, fh, angle;
            if (aspect < 1.2f)
            {
                float k = Mathf.Max(w, h);
                fw = w / k; fh = h / k; angle = 0f;
            }
            else
            {
                float k = (w + h) / Mathf.Sqrt(2f); // side of the 45° rotated bounding box
                fw = w / k; fh = h / k;
                angle = h > w ? -45f : 45f;
            }
            r.anchorMin = new Vector2(0.5f - fw * 0.5f, 0.5f - fh * 0.5f);
            r.anchorMax = new Vector2(0.5f + fw * 0.5f, 0.5f + fh * 0.5f);
            r.pivot = new Vector2(0.5f, 0.5f);
            r.localEulerAngles = new Vector3(0f, 0f, angle);
        }

        static Sprite LoadSprite(string path)
        {
            return AssetDatabase.LoadAssetAtPath<Sprite>(path);
        }

        static RectTransform NewUI(string name, Transform parent)
        {
            var go = new GameObject(name, typeof(RectTransform));
            go.layer = 5;
            go.transform.SetParent(parent, false);
            return (RectTransform)go.transform;
        }

        static TMP_Text NewText(string name, Transform parent, TMP_FontAsset font, string text, float size, Color color, TextAlignmentOptions align)
        {
            var t = NewUI(name, parent).gameObject.AddComponent<TextMeshProUGUI>();
            t.font = font;
            t.text = text;
            t.fontSize = size;
            t.color = color;
            t.alignment = align;
            t.textWrappingMode = TextWrappingModes.NoWrap;
            t.overflowMode = TextOverflowModes.Overflow;
            t.raycastTarget = false;
            return t;
        }

        /// <summary>
        /// Static SDF font asset from Better VCR with printable ASCII baked in (no runtime glyph generation,
        /// which playables cannot do). Re-run safe: an existing asset is reused.
        /// </summary>
        static TMP_FontAsset EnsureTmpFont()
        {
            var existing = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>(TmpFontPath);
            if (existing != null) return existing;

            Font src = AssetDatabase.LoadAssetAtPath<Font>(FontPath);
            var fa = TMP_FontAsset.CreateFontAsset(src, 40, 5, GlyphRenderMode.SDFAA, 512, 512, AtlasPopulationMode.Dynamic, false);
            fa.name = "BetterVCR SDF";
            var chars = new System.Text.StringBuilder();
            for (int c = 32; c < 127; c++) chars.Append((char)c);
            string missing;
            fa.TryAddCharacters(chars.ToString(), out missing);
            if (!string.IsNullOrEmpty(missing)) Debug.LogWarning("[WeaponInventoryBuilder] Missing glyphs: " + missing);
            fa.atlasPopulationMode = AtlasPopulationMode.Static;

            AssetDatabase.CreateAsset(fa, TmpFontPath);
            foreach (var tex in fa.atlasTextures)
            {
                if (tex == null) continue;
                tex.name = "BetterVCR SDF Atlas";
                AssetDatabase.AddObjectToAsset(tex, fa);
            }
            fa.material.name = "BetterVCR SDF Material";
            AssetDatabase.AddObjectToAsset(fa.material, fa);
            EditorUtility.SetDirty(fa);
            AssetDatabase.SaveAssets();
            AssetDatabase.ImportAsset(TmpFontPath);
            return AssetDatabase.LoadAssetAtPath<TMP_FontAsset>(TmpFontPath);
        }

        /// <summary>Material preset sharing the font atlas, with an SDF outline (replaces the legacy Outline component).</summary>
        static Material EnsureOutlineMaterial(TMP_FontAsset font, string path, Color color, float width)
        {
            var mat = AssetDatabase.LoadAssetAtPath<Material>(path);
            if (mat == null)
            {
                mat = new Material(font.material);
                AssetDatabase.CreateAsset(mat, path);
            }
            mat.SetFloat(ShaderUtilities.ID_OutlineWidth, width);
            mat.SetColor(ShaderUtilities.ID_OutlineColor, color);
            mat.SetFloat(ShaderUtilities.ID_FaceDilate, width * 0.5f); // keep the letters as thick as without outline
            EditorUtility.SetDirty(mat);
            AssetDatabase.SaveAssets();
            return mat;
        }

        static void Stretch(RectTransform r)
        {
            Stretch(r, Vector2.zero, Vector2.zero);
        }

        static void Stretch(RectTransform r, Vector2 offMin, Vector2 offMax)
        {
            r.anchorMin = Vector2.zero;
            r.anchorMax = Vector2.one;
            r.offsetMin = offMin;
            r.offsetMax = offMax;
        }

        static void SetRect(RectTransform r, Vector2 aMin, Vector2 aMax, Vector2 offMin, Vector2 offMax)
        {
            r.anchorMin = aMin;
            r.anchorMax = aMax;
            r.offsetMin = offMin;
            r.offsetMax = offMax;
        }
    }
}

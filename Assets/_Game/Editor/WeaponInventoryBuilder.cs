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
        const int SfxPool = 4;
        const string ScenePath = Root + "Scenes/Main_WeaponInventory.unity";

        // in-game order (VuKhi_TongHop): icon file name, display name
        static readonly string[,] Items =
        {
            { "Kunai", "KUNAI" },
            { "SungTruongOngNgam", "SNIPER" },
            { "SungTruongDai", "RIFLE" },
            { "SungPhongLuu_SMG", "SMG" },
            { "RiuGo", "WOOD AXE" },
            { "SungLaser", "LASER GUN" },
            { "Revolver", "REVOLVER" },
            { "RiuDen", "BLACK AXE" },
            { "RiuDo", "RED AXE" },
            { "Giao", "SPEAR" },
            { "CanCau", "FISHING ROD" },
            { "ChuyGai", "MACE" },
            // from aaa.unitypackage
            { "Bat", "BAT" },
            { "Saw", "CHAINSAW" },
            { "Flamethrower", "FLAMETHROWER" },
            // from ExportedProject (weapons2-sheet0, ReferenceWeaponRules kinds)
            { "Crossbow", "CROSSBOW" },
            { "FlareGun", "FLARE GUN" },
            { "Minigun", "MINIGUN" },
            { "Katana", "KATANA" },
            { "Torch", "TORCH" },
            { "LaserSword", "LASER SWORD" },
            { "Sledgehammer", "SLEDGEHAMMER" },
            { "PhaoHoa", "FIREWORK" },
            { "TenLua", "ROCKET" },
            { "BomHatNhan", "NUKE" },
            { "LuuDan", "GRENADE" },
            { "LuuDanKhoi", "SMOKE BOMB" },
            { "Min", "LANDMINE" },
            { "TNT", "TNT" },
            // from ExportedProject (bombs2-sheet0, ReferenceBomb kinds 8-14)
            { "Molotov", "MOLOTOV" },
            { "FreezeBomb", "FREEZE BOMB" },
            { "BlackHole", "BLACK HOLE" },
            { "TeslaBomb", "TESLA BOMB" },
            { "ClusterBomb", "CLUSTER BOMB" },
            { "Decoy", "DECOY" },
            { "StickyBomb", "STICKY BOMB" },
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

                var icon = NewUI("Icon", slot).gameObject.AddComponent<Image>();
                icon.sprite = LoadSprite(IconDir + file + ".png");
                icon.raycastTarget = true; // tap target (drags still go to the ScrollRect)
                var slotBtn = slot.gameObject.AddComponent<Button>();
                slotBtn.targetGraphic = icon;
                slotBtn.transition = Selectable.Transition.ColorTint;
                var sc = slotBtn.colors;
                sc.highlightedColor = Color.white;
                sc.selectedColor = Color.white;
                sc.pressedColor = new Color(0.75f, 0.75f, 0.75f, 1f);
                slotBtn.colors = sc;
                slotBtn.navigation = new Navigation { mode = Navigation.Mode.None };
                Stretch(icon.rectTransform, new Vector2(0f, 48f), Vector2.zero);

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
                name.rectTransform.offsetMin = new Vector2(-10f, 0f);
                name.rectTransform.offsetMax = new Vector2(10f, 46f);
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

            var bgImp = (TextureImporter)AssetImporter.GetAtPath(UIDir + "bg_default.png");
            bgImp.textureType = TextureImporterType.Default;
            bgImp.mipmapEnabled = false;
            bgImp.filterMode = FilterMode.Bilinear;
            bgImp.wrapMode = TextureWrapMode.Clamp;
            bgImp.SaveAndReimport();
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

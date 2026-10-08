using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Text.RegularExpressions;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace MelonAd.EditorTools
{
    /// <summary>
    /// Rebuilds everything from Assets/_Game/Data/level_layout.json (extracted from the original HTML):
    /// Bullet / Flame / Level_0 prefabs + Main scene (systems, camera background, tutorial fingers, UI).
    /// Coordinates: original px (y down) -> Unity units = px / 100, y flipped. Rotations negated.
    /// Menu: Game/Build All. Safe to re-run after swapping art (same file names).
    /// </summary>
    public static class LevelBuilder
    {
        const string Root = "Assets/_Game/";
        const string SpriteDir = Root + "Art/Sprites/";
        const string GenDir = Root + "Art/Generated/";
        const string PrefabDir = Root + "Prefabs/";
        const string MatDir = Root + "Materials/";
        const string ScenePath = Root + "Scenes/Main.unity";
        const float PX = 0.01f;

        const int MAN = 6, WORLD = 7, FLAME = 8, BULLET = 9;

        struct R
        {
            public float x, y, w, h;
            public float cx { get { return x + w * 0.5f; } }
            public float cy { get { return y + h * 0.5f; } }
        }

        static Dictionary<string, R> msg;
        static List<KeyValuePair<string, R>> levelNodes;
        static PhysicsMaterial2D friction;
        static Material additiveMat, acidMat;
        static Sprite circle;

        static readonly string[] PartOrder =
        {
            "l_up_arm", "l_down_arm", "l_up_leg", "l_down_leg", "l_foot",
            "body", "body_down", "body_mid", "head",
            "r_up_leg", "r_down_leg", "r_foot", "r_up_arm", "r_down_arm"
        };

        /// <summary>Builds only what is missing. Existing prefabs (Level_0, Bullet, Flame) and the Canvas are kept as edited.</summary>
        [MenuItem("Game/Build All")]
        public static void BuildAll()
        {
            BuildInternal(false);
        }

        /// <summary>Regenerates Level_0 / Bullet / Flame from level_layout.json. Manual prefab edits are lost.</summary>
        [MenuItem("Game/Rebuild Level Prefabs (overwrites edits)")]
        public static void RebuildLevelPrefabs()
        {
            if (!EditorUtility.DisplayDialog("Rebuild level prefabs",
                "This regenerates Level_0, Bullet and Flame from level_layout.json.\nAll manual edits in these prefabs will be lost. Continue?",
                "Rebuild", "Cancel"))
                return;
            BuildInternal(true);
        }

        static void BuildInternal(bool force)
        {
            ParseLayout();
            CreateSharedAssets();

            GameObject bullet = AssetDatabase.LoadAssetAtPath<GameObject>(PrefabDir + "Bullet.prefab");
            if (force || bullet == null) bullet = BuildBulletPrefab();

            GameObject flame = AssetDatabase.LoadAssetAtPath<GameObject>(PrefabDir + "Flame.prefab");
            if (force || flame == null) flame = BuildFlamePrefab();

            GameObject level = AssetDatabase.LoadAssetAtPath<GameObject>(PrefabDir + "Level_0.prefab");
            bool keptLevel = !force && level != null;
            if (!keptLevel) level = BuildLevelPrefab(bullet, flame);

            SetupScene(level);
            Debug.Log("[LevelBuilder] Build done. Level_0 " + (keptLevel ? "kept (manual edits preserved)." : "generated from JSON."));
        }

        // ------------------------------------------------------------------ parsing

        static void ParseLayout()
        {
            string json = File.ReadAllText(Root + "Data/level_layout.json");
            Regex rx = new Regex("\\{\"n\":\"(?<n>[^\"]+)\",\"t\":\"[^\"]+\",\"x\":(?<x>-?[\\d.]+),\"y\":(?<y>-?[\\d.]+),\"w\":(?<w>[\\d.]+),\"h\":(?<h>[\\d.]+)");
            int levelIdx = json.IndexOf("\"n\":\"level_0\"");
            int childIdx = json.IndexOf("\"c\":[", levelIdx);
            msg = new Dictionary<string, R>();
            levelNodes = new List<KeyValuePair<string, R>>();
            foreach (Match m in rx.Matches(json))
            {
                R r = new R
                {
                    x = F(m.Groups["x"].Value), y = F(m.Groups["y"].Value),
                    w = F(m.Groups["w"].Value), h = F(m.Groups["h"].Value)
                };
                string n = m.Groups["n"].Value;
                if (m.Index > childIdx) levelNodes.Add(new KeyValuePair<string, R>(n, r));
                else if (m.Index < levelIdx && !msg.ContainsKey(n)) msg[n] = r;
            }
            Debug.Log("[LevelBuilder] msg nodes=" + msg.Count + " level nodes=" + levelNodes.Count);
        }

        static float F(string s) { return float.Parse(s, CultureInfo.InvariantCulture); }
        static Vector2 P(float px, float py) { return new Vector2(px * PX, -py * PX); }

        static Sprite S(string file)
        {
            Sprite sp = AssetDatabase.LoadAssetAtPath<Sprite>(SpriteDir + file + ".png");
            if (sp == null) Debug.LogError("[LevelBuilder] Missing sprite " + file);
            return sp;
        }

        // ------------------------------------------------------------------ shared assets

        static void EnsureFolder(string path)
        {
            path = path.TrimEnd('/');
            if (AssetDatabase.IsValidFolder(path)) return;
            string parent = Path.GetDirectoryName(path).Replace('\\', '/');
            EnsureFolder(parent);
            AssetDatabase.CreateFolder(parent, Path.GetFileName(path));
        }

        static void CreateSharedAssets()
        {
            EnsureFolder(GenDir);
            EnsureFolder(MatDir);
            EnsureFolder(PrefabDir);

            friction = AssetDatabase.LoadAssetAtPath<PhysicsMaterial2D>(MatDir + "Friction1.physicsMaterial2D");
            if (friction == null)
            {
                friction = new PhysicsMaterial2D("Friction1");
                AssetDatabase.CreateAsset(friction, MatDir + "Friction1.physicsMaterial2D");
            }
            friction.friction = 1f;
            friction.bounciness = 0f;

            additiveMat = GetMat("Mat_SpriteAdditive", "Game/SpriteAdditive");
            acidMat = GetMat("Mat_Acid", "Game/AcidWave");
            Texture2D disp = AssetDatabase.LoadAssetAtPath<Texture2D>(SpriteDir + "disp.png");
            acidMat.SetTexture("_NoiseTex", disp);
            EditorUtility.SetDirty(acidMat);

            string circlePath = GenDir + "circle.png";
            if (!File.Exists(circlePath))
            {
                const int N = 128;
                Texture2D tex = new Texture2D(N, N, TextureFormat.RGBA32, false);
                float rad = N * 0.5f;
                for (int y = 0; y < N; y++)
                    for (int x = 0; x < N; x++)
                    {
                        float dx = x + 0.5f - rad, dy = y + 0.5f - rad;
                        tex.SetPixel(x, y, dx * dx + dy * dy <= rad * rad ? Color.white : new Color(1, 1, 1, 0));
                    }
                File.WriteAllBytes(circlePath, tex.EncodeToPNG());
                Object.DestroyImmediate(tex);
                AssetDatabase.ImportAsset(circlePath);
                TextureImporter ti = (TextureImporter)AssetImporter.GetAtPath(circlePath);
                ti.textureType = TextureImporterType.Sprite;
                ti.spritePixelsPerUnit = 100;
                ti.mipmapEnabled = false;
                ti.alphaIsTransparency = true;
                ti.textureCompression = TextureImporterCompression.Uncompressed;
                ti.SaveAndReimport();
            }
            circle = AssetDatabase.LoadAssetAtPath<Sprite>(circlePath);
            AssetDatabase.SaveAssets();
        }

        static Material GetMat(string name, string shader)
        {
            string path = MatDir + name + ".mat";
            Material m = AssetDatabase.LoadAssetAtPath<Material>(path);
            if (m == null)
            {
                m = new Material(Shader.Find(shader));
                AssetDatabase.CreateAsset(m, path);
            }
            else m.shader = Shader.Find(shader);
            return m;
        }

        // ------------------------------------------------------------------ helpers

        static SpriteRenderer AddSprite(Transform parent, string name, string file, Vector2 localPos, int order, Material mat = null)
        {
            GameObject go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.localPosition = localPos;
            SpriteRenderer sr = go.AddComponent<SpriteRenderer>();
            sr.sprite = S(file);
            sr.sortingOrder = order;
            if (mat != null) sr.sharedMaterial = mat;
            return sr;
        }

        static BoxCollider2D Box(GameObject go, Vector2 size, bool trigger, float density)
        {
            BoxCollider2D bc = go.AddComponent<BoxCollider2D>();
            bc.size = size;
            bc.isTrigger = trigger;
            bc.density = density;
            bc.sharedMaterial = friction;
            return bc;
        }

        static Rigidbody2D Dyn(GameObject go)
        {
            Rigidbody2D rb = go.AddComponent<Rigidbody2D>();
            rb.bodyType = RigidbodyType2D.Dynamic;
            rb.useAutoMass = true;
            rb.linearDamping = 0f;
            rb.angularDamping = 0f;
            rb.sleepMode = RigidbodySleepMode2D.StartAwake;
            return rb;
        }

        static GameObject StaticSprite(Transform parent, string name, string file, Vector2 pos, float rotZ, int order, Vector2 colScale, bool trigger)
        {
            SpriteRenderer sr = AddSprite(parent, name, file, pos, order);
            GameObject go = sr.gameObject;
            go.layer = WORLD;
            go.transform.localRotation = Quaternion.Euler(0, 0, rotZ);
            Vector2 s = sr.sprite.bounds.size;
            Box(go, new Vector2(s.x * colScale.x, s.y * colScale.y), trigger, 1f);
            return go;
        }

        static GameObject SavePrefab(GameObject go, string name)
        {
            string path = PrefabDir + name + ".prefab";
            GameObject prefab = PrefabUtility.SaveAsPrefabAsset(go, path);
            Object.DestroyImmediate(go);
            return prefab;
        }

        // ------------------------------------------------------------------ prefabs

        static GameObject BuildBulletPrefab()
        {
            GameObject go = new GameObject("Bullet");
            go.layer = BULLET;
            SpriteRenderer sr = go.AddComponent<SpriteRenderer>();
            sr.sprite = S("bullet");
            sr.sortingOrder = 40;
            Rigidbody2D rb = Dyn(go);
            rb.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
            Box(go, sr.sprite.bounds.size, false, 10f);
            Bullet b = go.AddComponent<Bullet>();
            b.rb = rb;
            return SavePrefab(go, "Bullet");
        }

        static GameObject BuildFlamePrefab()
        {
            GameObject go = new GameObject("Flame");
            go.layer = FLAME;
            Rigidbody2D rb = Dyn(go);
            CircleCollider2D cc = go.AddComponent<CircleCollider2D>();
            Sprite fl = S("flame");
            cc.radius = 0.3f * fl.bounds.size.x;
            cc.density = 0.01f;
            cc.sharedMaterial = friction;
            SpriteRenderer sr = AddSprite(go.transform, "Visual", "flame", Vector2.zero, 200, additiveMat);
            FlameParticle fp = go.AddComponent<FlameParticle>();
            fp.rb = rb;
            fp.visual = sr.transform;
            fp.sr = sr;
            return SavePrefab(go, "Flame");
        }

        static GameObject BuildLevelPrefab(GameObject bulletPrefab, GameObject flamePrefab)
        {
            GameObject root = new GameObject("Level_0");
            LevelRefs refs = root.AddComponent<LevelRefs>();
            Transform walls = Child(root.transform, "Walls");
            Transform pins = Child(root.transform, "Pins");
            Transform props = Child(root.transform, "Props");
            Transform hazards = Child(root.transform, "Hazards");
            Transform manRoot = Child(root.transform, "ManRoot");
            Transform dynamic = Child(root.transform, "Dynamic");
            refs.dynamicRoot = dynamic;

            foreach (KeyValuePair<string, R> kv in levelNodes)
            {
                R r = kv.Value;
                Vector2 c = P(r.cx, r.cy);
                switch (kv.Key)
                {
                    case "exit":
                    {
                        GameObject go = StaticSprite(props, "Exit", "exit", c, 0, 5, Vector2.one, true);
                        go.AddComponent<ExitZone>();
                        break;
                    }
                    case "arline": MakePin(pins, "PinRightDiag", "aline", c, 30f, new Vector2(1f / 3f, 1f), PinEvent.Fire, new Vector2(0.5f, -0.866f) * 30f); break;
                    case "alline": MakePin(pins, "PinLeftDiag", "aline", c, -30f, new Vector2(1f / 3f, 1f), PinEvent.Flame, new Vector2(-0.5f, -0.866f) * 30f); break;
                    case "vline": refs.tutorPin = MakePin(pins, "PinCenter", "vline", c, 0f, new Vector2(1f / 3f, 1f), PinEvent.Tutor, new Vector2(0f, -30f)); break;
                    case "line": MakePin(pins, "PinRight", "line", c, 0f, new Vector2(1f, 1f / 3f), PinEvent.None, new Vector2(30f, 0f)); break;
                    case "iline": MakePin(pins, "PinLeft", "iline", c, 0f, new Vector2(1f, 1f / 3f), PinEvent.None, new Vector2(-30f, 0f)); break;
                    case "tmp": refs.man = BuildRagdoll(manRoot, r.x, r.y); break;
                    case "c": BuildChair(props, c); break;
                    case "sprng": BuildSpike(props, c); break;
                    case "v": StaticSprite(walls, "Wall_V", "vert", c, 0, 10, Vector2.one, false); break;
                    case "h": StaticSprite(walls, "Wall_H", "hor", c, 0, 10, Vector2.one, false); break;
                    case "b": StaticSprite(walls, "Wall_B", "big", c, 0, 10, Vector2.one, false); break;
                    case "kislota": BuildAcid(hazards, c); break;
                    case "rifle": refs.rifle = BuildRifle(hazards, c, bulletPrefab, dynamic); break;
                    case "fire": refs.flameThrower = BuildFlameThrower(hazards, c, flamePrefab, dynamic); break;
                    default: Debug.LogWarning("[LevelBuilder] Unhandled node " + kv.Key); break;
                }
            }
            return SavePrefab(root, "Level_0");
        }

        static Transform Child(Transform parent, string name)
        {
            GameObject go = new GameObject(name);
            go.transform.SetParent(parent, false);
            return go.transform;
        }

        static Pin MakePin(Transform parent, string name, string file, Vector2 pos, float rotZ, Vector2 colScale, PinEvent evt, Vector2 fly)
        {
            GameObject go = StaticSprite(parent, name, file, pos, rotZ, 20, colScale, false);
            Pin p = go.AddComponent<Pin>();
            p.evt = evt;
            p.flyOffset = fly;
            return p;
        }

        static void BuildChair(Transform parent, Vector2 pos)
        {
            SpriteRenderer sr = AddSprite(parent, "Chair", "chair", pos, 15);
            GameObject go = sr.gameObject;
            go.layer = WORLD;
            Rigidbody2D rb = Dyn(go);
            Vector2 s = sr.sprite.bounds.size;
            BoxCollider2D back = Box(go, new Vector2(0.2f * s.x, s.y), false, 0.1f);
            back.offset = new Vector2(-0.4f * s.x, 0f);
            BoxCollider2D seat = Box(go, new Vector2(s.x, 0.5f * s.y), false, 0.1f);
            seat.offset = new Vector2(0f, -0.25f * s.y);
            Grabbable g = go.AddComponent<Grabbable>();
            g.rb = rb;
        }

        static void BuildSpike(Transform parent, Vector2 pos)
        {
            SpriteRenderer sr = AddSprite(parent, "Spike", "sprng", pos, 16);
            GameObject go = sr.gameObject;
            go.layer = WORLD;
            Dyn(go);
            Box(go, sr.sprite.bounds.size, false, 0.1f);
            go.AddComponent<Spike>();
        }

        static void BuildAcid(Transform parent, Vector2 pos)
        {
            SpriteRenderer sr = AddSprite(parent, "Acid", "kislota", pos, -10, acidMat);
            GameObject go = sr.gameObject;
            go.layer = WORLD;
            Box(go, sr.sprite.bounds.size, true, 1f);
            go.AddComponent<Acid>();

            SpriteRenderer up = AddSprite(parent, "AcidOverlayUp", "kislota_up", pos + new Vector2(0f, 0.15f), 300, acidMat);
            up.transform.localScale = new Vector3(1.01f, 1.1f, 1f);
            up.color = new Color(1f, 1f, 1f, 0.5f);
            SpriteRenderer down = AddSprite(parent, "AcidOverlayDown", "kislota_down", pos, 301);
            down.color = new Color(1f, 1f, 1f, 0.5f);
        }

        static Rifle BuildRifle(Transform parent, Vector2 pos, GameObject bulletPrefab, Transform dynamic)
        {
            SpriteRenderer sr = AddSprite(parent, "Rifle", "rifle", pos, 30);
            sr.transform.localRotation = Quaternion.Euler(0, 0, 1f * Mathf.Rad2Deg);
            Rifle rf = sr.gameObject.AddComponent<Rifle>();
            rf.width = sr.sprite.bounds.size.x;
            rf.bulletPrefab = bulletPrefab.GetComponent<Bullet>();
            rf.bulletRoot = dynamic;
            SpriteRenderer mz = AddSprite(sr.transform, "Muzzle", "flame", new Vector2(-0.54f * rf.width, 0.1f), 31, additiveMat);
            mz.enabled = false;
            rf.muzzle = mz;
            return rf;
        }

        static FlameThrower BuildFlameThrower(Transform parent, Vector2 pos, GameObject flamePrefab, Transform dynamic)
        {
            SpriteRenderer sr = AddSprite(parent, "FlameThrower", "fire", pos, 30);
            sr.transform.localRotation = Quaternion.Euler(0, 0, -1f * Mathf.Rad2Deg);
            FlameThrower ft = sr.gameObject.AddComponent<FlameThrower>();
            ft.width = sr.sprite.bounds.size.x;
            ft.prefab = flamePrefab.GetComponent<FlameParticle>();
            ft.particleRoot = dynamic;
            return ft;
        }

        // ------------------------------------------------------------------ ragdoll

        static string Suffix(string key)
        {
            return key.StartsWith("l_") || key.StartsWith("r_") ? key.Substring(2) : key;
        }

        static Ragdoll BuildRagdoll(Transform parent, float dx, float dy)
        {
            GameObject root = new GameObject("Man");
            root.transform.SetParent(parent, false);
            Ragdoll rd = root.AddComponent<Ragdoll>();

            Dictionary<string, RagdollPart> map = new Dictionary<string, RagdollPart>();
            Dictionary<string, R> rects = new Dictionary<string, R>();
            RagdollPart[] parts = new RagdollPart[PartOrder.Length];

            for (int i = 0; i < PartOrder.Length; i++)
            {
                string key = PartOrder[i];
                string suf = Suffix(key);
                R up = msg["mdoc_" + suf];
                R sk = msg["msk_" + suf];
                R bu = msg["sfr_" + suf];

                GameObject go = new GameObject(key);
                go.transform.SetParent(root.transform, false);
                go.transform.localPosition = P(dx + up.cx, dy + up.cy);
                go.layer = MAN;
                Rigidbody2D rb = Dyn(go);
                rb.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
                Box(go, new Vector2(up.w * PX, up.h * PX), false, 4f);

                int baseOrder = 100 + i * 3;
                SpriteRenderer burnt = AddSprite(go.transform, "burnt", "sfr_" + suf, P(bu.cx - up.cx, bu.cy - up.cy), baseOrder);
                burnt.enabled = false;
                SpriteRenderer skel = AddSprite(go.transform, "skeleton", "msk_" + suf, P(sk.cx - up.cx, sk.cy - up.cy), baseOrder + 1);
                SpriteRenderer skin = AddSprite(go.transform, "skin", "mdoc_" + suf, Vector2.zero, baseOrder + 2);
                skin.maskInteraction = SpriteMaskInteraction.VisibleOutsideMask;

                RagdollPart rp = go.AddComponent<RagdollPart>();
                rp.owner = rd; rp.rb = rb; rp.skin = skin; rp.skeleton = skel; rp.burnt = burnt;
                Grabbable g = go.AddComponent<Grabbable>();
                g.rb = rb; g.owner = rd;

                parts[i] = rp;
                map[key] = rp;
                rects[key] = up;
            }

            // Joints: q(A, B, ratio, limit, lo, hi) from the original. Unity jointAngle == Box2D angle after y-flip.
            J(map, rects, "head", "body", 0.48f, true, -18f, 18f);
            J(map, rects, "body", "body_mid", 0.48f, true, -18f, 18f);
            J(map, rects, "body_mid", "body_down", 0.48f, true, -18f, 18f);
            foreach (string s in new[] { "l_", "r_" })
            {
                J(map, rects, "body", s + "up_arm", -0.48f, false, 0f, 0f);
                J(map, rects, s + "up_arm", s + "down_arm", 0.48f, true, 0f, 144f);
                J(map, rects, "body_down", s + "up_leg", 0.42f, true, -18f, 162f);
                J(map, rects, s + "up_leg", s + "down_leg", 0.48f, true, -162f, 0f);
                J(map, rects, s + "down_leg", s + "foot", 0.48f, true, -18f, 18f);
            }

            rd.parts = parts;
            rd.head = map["head"];
            rd.leftFoot = map["l_foot"];
            rd.rightFoot = map["r_foot"];

            GameObject hole = new GameObject("HoleMask");
            hole.transform.SetParent(root.transform, false);
            SpriteMask sm = hole.AddComponent<SpriteMask>();
            sm.sprite = circle;
            sm.isCustomRangeActive = true;
            sm.backSortingOrder = 99;
            sm.frontSortingOrder = 199;
            hole.SetActive(false);
            rd.hole = sm;
            rd.holeDiameter = circle.bounds.size.x;
            return rd;
        }

        static void J(Dictionary<string, RagdollPart> map, Dictionary<string, R> rects, string a, string b, float ratio, bool limit, float lo, float hi)
        {
            RagdollPart A = map[a], B = map[b];
            Vector2 anchor = (Vector2)A.transform.localPosition + new Vector2(0f, -rects[a].h * ratio * PX);
            HingeJoint2D h = B.gameObject.AddComponent<HingeJoint2D>();
            h.connectedBody = A.rb;
            h.autoConfigureConnectedAnchor = false;
            h.anchor = anchor - (Vector2)B.transform.localPosition;
            h.connectedAnchor = anchor - (Vector2)A.transform.localPosition;
            h.enableCollision = false;
            h.useLimits = limit;
            if (limit) h.limits = new JointAngleLimits2D { min = lo, max = hi };
        }

        // ------------------------------------------------------------------ scene
        //
        // Main (scene)
        //   Main Camera            <- CameraFit (Expand rule, reference 1080x1920)
        //   --- UI ---             <- UIController
        //     Canvas               <- Screen Space - Camera, CanvasScaler 1080x1920 Expand
        //       BG                 <- sub-canvas, sorting -2000, sky background (UICover)
        //       World              <- level container, 1 unit = RefH/DesignHeight px, win zoom target
        //         Level_0          <- PREFAB INSTANCE (edit freely, reset on retry, never cloned)
        //         TapFinger / DragFinger
        //       UI                 <- sub-canvas, sorting 2000: Hint, FailRoot
        //   EventSystem
        //   --- SYSTEMS ---        <- GameConfig, AudioManager, FxManager, GameManager

        const float DesignHeight = 29.895f;                              // world units mapped to 1920px
        const float RefW = 1080f, RefH = 1920f;
        const float LegacyUiFactor = 1920f / 1136f;                      // old overlay canvas was 640x1136
        static readonly Vector2 LevelOffset = new Vector2(-3.2f, 1.13f); // level origin vs screen centre (units)

        static T Load<T>(string path) where T : Object
        {
            T a = AssetDatabase.LoadAssetAtPath<T>(path);
            if (a == null) Debug.LogError("[LevelBuilder] Missing asset " + path);
            return a;
        }

        static void DestroyByName(string n)
        {
            GameObject old = GameObject.Find(n);
            if (old != null) Object.DestroyImmediate(old);
        }

        static void SetupScene(GameObject levelPrefab)
        {
            var scene = EditorSceneManager.OpenScene(ScenePath, OpenSceneMode.Single);

            string cfgJson = null;
            GameConfig oldCfg = Object.FindFirstObjectByType<GameConfig>();
            if (oldCfg != null) cfgJson = EditorJsonUtility.ToJson(oldCfg);
            DestroyByName("--- SYSTEMS ---");
            DestroyByName("--- WORLD ---"); // legacy layout

            // Camera
            Camera cam = Camera.main;
            cam.transform.position = new Vector3(0f, 0f, -10f);
            Transform legacyBg = cam.transform.Find("Background");
            if (legacyBg != null) Object.DestroyImmediate(legacyBg.gameObject);
            CameraFit fit = cam.GetComponent<CameraFit>();
            if (fit == null) fit = cam.gameObject.AddComponent<CameraFit>();
            fit.designHeight = DesignHeight;
            fit.referenceResolution = new Vector2(RefW, RefH);
            fit.Apply();

            // Canvas (kept if it exists: your CanvasScaler settings are preserved)
            GameObject uiRoot = GameObject.Find("--- UI ---");
            if (uiRoot == null) uiRoot = new GameObject("--- UI ---");
            Transform canvasT = uiRoot.transform.Find("Canvas");
            if (canvasT == null)
            {
                GameObject cgo = new GameObject("Canvas", typeof(RectTransform));
                cgo.transform.SetParent(uiRoot.transform, false);
                cgo.AddComponent<Canvas>();
                CanvasScaler cs = cgo.AddComponent<CanvasScaler>();
                cs.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
                cs.referenceResolution = new Vector2(RefW, RefH);
                cs.screenMatchMode = CanvasScaler.ScreenMatchMode.Expand;
                cgo.AddComponent<GraphicRaycaster>();
                canvasT = cgo.transform;
            }
            Canvas canvas = canvasT.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceCamera;
            canvas.worldCamera = cam;
            canvas.planeDistance = 10f;
            canvas.sortingOrder = 0;
            RectTransform c = (RectTransform)canvasT;

            // BG layer
            RectTransform bg = Layer(c, "BG", -2000, false);
            if (bg.Find("Background") == null)
            {
                RectTransform img = UIImage(bg, "Background", "main_back", Vector2.zero, new Vector2(RefW, RefH));
                img.gameObject.AddComponent<UICover>().target = img.GetComponent<Image>();
            }
            bg.SetSiblingIndex(0);

            // World layer + level instance
            RectTransform world = canvasT.Find("World") as RectTransform;
            if (world == null)
            {
                world = (RectTransform)new GameObject("World", typeof(RectTransform)).transform;
                world.SetParent(c, false);
                world.anchorMin = world.anchorMax = new Vector2(0.5f, 0.5f);
                world.sizeDelta = Vector2.zero;
                float k = RefH / DesignHeight;
                world.localScale = new Vector3(k, k, 1f);
                world.anchoredPosition = LevelOffset * k;
            }
            world.SetSiblingIndex(1);
            LevelRefs level = world.GetComponentInChildren<LevelRefs>(true);
            if (level == null)
            {
                GameObject inst = (GameObject)PrefabUtility.InstantiatePrefab(levelPrefab, scene);
                inst.transform.SetParent(world, false);
                inst.transform.localPosition = Vector3.zero;
                inst.transform.localRotation = Quaternion.identity;
                inst.transform.localScale = Vector3.one;
                level = inst.GetComponent<LevelRefs>();
            }
            Transform tap = world.Find("TapFinger");
            if (tap == null) tap = MakeFinger(world, "TapFinger");
            Transform drag = world.Find("DragFinger");
            if (drag == null) drag = MakeFinger(world, "DragFinger");

            // UI layer (hint + fail popup)
            RectTransform uiLayer = Layer(c, "UI", 2000, true);
            uiLayer.SetAsLastSibling();
            UIController ui = uiRoot.GetComponent<UIController>();
            if (ui != null && ui.hint != null && ui.failRoot != null)
            {
                bool legacy = ui.hint.transform.parent != uiLayer;
                MoveToLayer(ui.hint.transform, uiLayer, legacy);
                MoveToLayer(ui.failRoot.transform, uiLayer, legacy);
                if (legacy) ui.slideDistance *= LegacyUiFactor;
                EditorUtility.SetDirty(ui);
            }
            else
            {
                if (ui != null) Object.DestroyImmediate(ui);
                ui = BuildUI(uiRoot, uiLayer);
            }

            if (Object.FindFirstObjectByType<EventSystem>() == null)
            {
                GameObject es = new GameObject("EventSystem");
                es.AddComponent<EventSystem>();
                es.AddComponent<StandaloneInputModule>();
            }

            // Systems
            GameObject systems = new GameObject("--- SYSTEMS ---");
            GameConfig cfg = new GameObject("GameConfig").AddComponent<GameConfig>();
            cfg.transform.SetParent(systems.transform, false);
            if (cfgJson != null) EditorJsonUtility.FromJsonOverwrite(cfgJson, cfg);

            AudioManager am = new GameObject("AudioManager").AddComponent<AudioManager>();
            am.transform.SetParent(systems.transform, false);
            string a = Root + "Audio/";
            am.music = Load<AudioClip>(a + "music.mp3"); am.doc = Load<AudioClip>(a + "doc.mp3");
            am.door = Load<AudioClip>(a + "door.mp3"); am.fire = Load<AudioClip>(a + "fire.mp3");
            am.flame = Load<AudioClip>(a + "flame.mp3"); am.hurt = Load<AudioClip>(a + "hurt.mp3");
            am.jar = Load<AudioClip>(a + "jar.mp3"); am.kis = Load<AudioClip>(a + "kis.mp3");
            am.ohog = Load<AudioClip>(a + "ohog.mp3");
            am.complete = Load<AudioClip>(a + "CompleteLevel.wav");
            am.fail = Load<AudioClip>(a + "Fail.wav");

            FxManager fx = new GameObject("FxManager").AddComponent<FxManager>();
            fx.transform.SetParent(systems.transform, false);
            fx.smoke = S("dym"); fx.flame = S("flame"); fx.blood = S("blood");
            fx.spikeShard = S("osk"); fx.bulletShard = S("bp"); fx.bubble = S("puz");

            GameManager gm = new GameObject("GameManager").AddComponent<GameManager>();
            gm.transform.SetParent(systems.transform, false);
            gm.level = level;
            gm.zoomRoot = world;
            gm.cam = cam;
            gm.ui = ui;
            gm.tapFinger = tap;
            gm.dragFinger = drag;
            gm.dragFingerSprite = drag.GetComponentInChildren<SpriteRenderer>(true);
            gm.pickMask = (1 << MAN) | (1 << WORLD);

            EditorSceneManager.MarkSceneDirty(scene);
            EditorSceneManager.SaveScene(scene);
        }

        /// <summary>Full-screen child with its own sorting (sub-canvas) so it can sit behind / in front of sprites.</summary>
        static RectTransform Layer(RectTransform canvas, string name, int order, bool raycast)
        {
            RectTransform rt = canvas.Find(name) as RectTransform;
            if (rt == null)
            {
                rt = (RectTransform)new GameObject(name, typeof(RectTransform)).transform;
                rt.SetParent(canvas, false);
                Stretch(rt);
            }
            Canvas sub = rt.GetComponent<Canvas>();
            if (sub == null) sub = rt.gameObject.AddComponent<Canvas>();
            sub.overrideSorting = true;
            sub.sortingOrder = order;
            if (raycast && rt.GetComponent<GraphicRaycaster>() == null) rt.gameObject.AddComponent<GraphicRaycaster>();
            return rt;
        }

        static void MoveToLayer(Transform t, RectTransform layer, bool rescaleLegacy)
        {
            if (t.parent != layer) t.SetParent(layer, false);
            if (!rescaleLegacy) return;
            RectTransform[] all = t.GetComponentsInChildren<RectTransform>(true);
            for (int i = 0; i < all.Length; i++)
            {
                RectTransform r = all[i];
                r.anchoredPosition *= LegacyUiFactor;
                if (r.anchorMin == r.anchorMax) r.sizeDelta *= LegacyUiFactor;
            }
        }

        [MenuItem("Game/Rebuild UI (overwrites UI edits)")]
        public static void RebuildUI()
        {
            if (!EditorUtility.DisplayDialog("Rebuild UI", "This deletes Hint + FailRoot and all manual UI edits. Continue?", "Rebuild", "Cancel")) return;
            var scene = EditorSceneManager.OpenScene(ScenePath, OpenSceneMode.Single);
            GameObject uiRoot = GameObject.Find("--- UI ---");
            if (uiRoot == null) { Debug.LogError("Run Game/Build All first."); return; }
            RectTransform uiLayer = uiRoot.transform.Find("Canvas/UI") as RectTransform;
            UIController old = uiRoot.GetComponent<UIController>();
            if (old != null)
            {
                if (old.hint != null) Object.DestroyImmediate(old.hint);
                if (old.failRoot != null) Object.DestroyImmediate(old.failRoot);
                Object.DestroyImmediate(old);
            }
            UIController ui = BuildUI(uiRoot, uiLayer);
            GameManager gm = Object.FindFirstObjectByType<GameManager>();
            if (gm != null) { gm.ui = ui; EditorUtility.SetDirty(gm); }
            EditorSceneManager.MarkSceneDirty(scene);
            EditorSceneManager.SaveScene(scene);
        }

        static Transform MakeFinger(Transform parent, string name)
        {
            GameObject rootGo = new GameObject(name);
            rootGo.transform.SetParent(parent, false);
            Sprite sp = S("finger");
            Vector2 sz = sp.bounds.size;
            // original anchor (0.3, 0) = 30% from left, top edge
            AddSprite(rootGo.transform, "Sprite", "finger", new Vector2(0.2f * sz.x, -0.5f * sz.y), 500);
            rootGo.SetActive(false);
            return rootGo.transform;
        }

        static RectTransform UIImage(Transform parent, string name, string file, Vector2 pos, Vector2 size)
        {
            GameObject go = new GameObject(name, typeof(RectTransform));
            go.transform.SetParent(parent, false);
            RectTransform rt = (RectTransform)go.transform;
            rt.anchorMin = rt.anchorMax = new Vector2(0.5f, 0.5f);
            rt.anchoredPosition = pos;
            rt.sizeDelta = size;
            Image img = go.AddComponent<Image>();
            if (file != null) img.sprite = S(file);
            img.raycastTarget = false;
            return rt;
        }

        static void Stretch(RectTransform rt)
        {
            rt.anchorMin = Vector2.zero;
            rt.anchorMax = Vector2.one;
            rt.offsetMin = Vector2.zero;
            rt.offsetMax = Vector2.zero;
        }

        /// <summary>Hint + Fail popup laid out for the 1080x1920 reference.</summary>
        static UIController BuildUI(GameObject uiRoot, RectTransform layer)
        {
            float f = LegacyUiFactor;
            RectTransform hint = UIImage(layer, "Hint", "main_hint", new Vector2(3.5f, -392f) * f, new Vector2(519f, 156f) * f);
            RectTransform head = UIImage(hint, "Head", "main_hd", new Vector2(154f, 1f) * f, new Vector2(121f, 130f) * f);

            GameObject failRoot = new GameObject("FailRoot", typeof(RectTransform));
            failRoot.transform.SetParent(layer, false);
            Stretch((RectTransform)failRoot.transform);
            RectTransform overlay = UIImage(failRoot.transform, "Overlay", "bl", Vector2.zero, Vector2.zero);
            Stretch(overlay);
            overlay.GetComponent<Image>().raycastTarget = true;

            GameObject panelGo = new GameObject("Panel", typeof(RectTransform));
            panelGo.transform.SetParent(failRoot.transform, false);
            RectTransform panel = (RectTransform)panelGo.transform;
            panel.anchorMin = panel.anchorMax = new Vector2(0.5f, 0.5f);
            panel.sizeDelta = new Vector2(RefW, RefH);
            CanvasGroup group = panelGo.AddComponent<CanvasGroup>();

            UIImage(panel, "Title", "fail", new Vector2(-0.5f, 194.5f) * f, new Vector2(435f, 105f) * f);
            RectTransform btn = UIImage(panel, "TryAgain", "btn_next", new Vector2(0f, -298f) * f, new Vector2(364f, 150f) * f);
            btn.GetComponent<Image>().raycastTarget = true;
            Button button = btn.gameObject.AddComponent<Button>();
            button.transition = Selectable.Transition.None;
            RectTransform finger = UIImage(panel, "Finger", "finger", new Vector2(0f, -298f) * f, new Vector2(184f, 237f) * f);
            finger.pivot = new Vector2(0.3f, 1f);

            UIController ui = uiRoot.AddComponent<UIController>();
            ui.hint = hint.gameObject;
            ui.head = head;
            ui.failRoot = failRoot;
            ui.panel = panel;
            ui.panelGroup = group;
            ui.button = btn;
            ui.finger = finger;
            ui.retryButton = button;
            ui.slideDistance = 1000f * f;
            return ui;
        }
    }
}

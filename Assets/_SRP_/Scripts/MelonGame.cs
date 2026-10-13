using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
#if ENABLE_INPUT_SYSTEM
using UnityEngine.InputSystem;
#endif

namespace MelonSandbox
{
    public sealed class MelonGame : MonoBehaviour
    {
        public static MelonGame Instance { get; private set; }
        void Awake() { Instance = this; }
        void OnDestroy() { if (Instance == this) Instance = null; }
        public MelonAssets assets;
        [Range(0, 3)] public int startingStage;
        public Camera gameCamera;
        public int Stage { get; private set; }
        public int Defeated { get; private set; }
        public bool Paused { get; private set; }
        public readonly List<MelonRagdoll> characters = new List<MelonRagdoll>();
        public readonly List<MelonTool> tools = new List<MelonTool>();
        public Transform world;
        public MelonHud hud;
        public SpriteRenderer background;
        public MelonStage[] sceneStages = new MelonStage[4];
        AudioSource music, effects, loop;
        MelonTool selected;
        readonly bool[] usedSyringes = new bool[3];
        bool syringeBusy;
        float lastInput;
        int stageGeneration;
        public static Vector2 FromPixels(float x, float y) => new Vector2((x - 320) / 100f, (1112 - y) / 100f);
        public static void IgnoreActiveCollision(Collider2D a, Collider2D b)
        {
            if (!a || !b || a == b || !a.enabled || !b.enabled
                || !a.gameObject.activeInHierarchy || !b.gameObject.activeInHierarchy) return;
            var bodyA = a.attachedRigidbody;
            var bodyB = b.attachedRigidbody;
            if (!bodyA || !bodyB || !bodyA.simulated || !bodyB.simulated) return;
            Physics2D.IgnoreCollision(a, b);
        }
        void Start() { Initialize(true); }
        public void Initialize(bool runtime)
        {
            if (!assets) assets = Resources.Load<MelonAssets>("MelonAssets");
            if (!assets) return;
            assets.Prepare();
            if (!gameCamera) return;
            if (runtime)
            {
                Application.runInBackground = true;
                Time.timeScale = 1; Physics2D.gravity = new Vector2(0, -20);
                music = gameObject.AddComponent<AudioSource>(); music.loop = true; music.clip = assets.Sound("music"); music.volume = .25f;
                effects = gameObject.AddComponent<AudioSource>(); effects.volume = .7f;
                loop = gameObject.AddComponent<AudioSource>(); loop.loop = true; loop.volume = .4f;
            }
            var endGameManager = GetComponent<Playable.GameManager>();
            if (endGameManager) endGameManager.ReparentEndGameButton(transform);
            if (hud) Dispose(hud.gameObject);
            hud = new GameObject("Melon HUD").AddComponent<MelonHud>(); hud.transform.SetParent(transform, false); hud.Build(this);
            if (endGameManager) endGameManager.ReparentEndGameButton(hud.transform);
            LoadStage(startingStage);
        }
        public void LoadStage(int stage)
        {
            if (sceneStages == null || sceneStages.Length != 4 || !sceneStages[0])
            {
                if (Application.isPlaying) throw new System.InvalidOperationException("Prepare all four scene stages in the Editor before playing.");
                BuildStagePreview(stage);
                return;
            }
            StopAllCoroutines(); stageGeneration++; ReleasePointer(); Loop(null);
            Paused = false; Time.timeScale = 1;
            Stage = Mathf.Clamp(stage, 0, 3); Defeated = 0; syringeBusy = false;
            for (int i = 0; i < 3; i++) usedSyringes[i] = false;
            foreach (var entry in sceneStages)
            {
                entry.Capture();
                entry.gameObject.SetActive(false);
            }
            var current = sceneStages[Stage];
            world = current.transform; background = current.background;
            characters.Clear(); characters.AddRange(current.characters);
            tools.Clear(); tools.AddRange(current.tools);
            current.Restore(this);
            current.gameObject.SetActive(true);
            // Luna can create the serialized hinges before body rotations are restored.
            // Rebind after activation to establish the reference angle from the final pose.
#if UNITY_LUNA
            foreach (var hinge in current.GetComponentsInChildren<HingeJoint2D>())
            {
                if (!hinge.enabled || !hinge.connectedBody) continue;
                var connected = hinge.connectedBody;
                hinge.connectedBody = null;
                hinge.connectedBody = connected;
            }
#endif
            // IgnoreCollision must be applied after the preplaced colliders are active.
            for (int i = 0; i < characters.Count; i++)
            {
                var own = characters[i].GetComponentsInChildren<Collider2D>();
                for (int a = 0; a < own.Length; a++)
                    for (int b = a + 1; b < own.Length; b++) MelonGame.IgnoreActiveCollision(own[a], own[b]);
                for (int j = 0; j < i; j++)
                    foreach (var a in own)
                        foreach (var b in characters[j].GetComponentsInChildren<Collider2D>()) MelonGame.IgnoreActiveCollision(a, b);
                if (Stage == 3) characters[i].BeginParade();
            }
            // Show the syringe/saw/rifle tutorial immediately when entering these stages.
            lastInput = Time.unscaledTime - (Stage < 3 ? 5f : 0f);
            if (hud) hud.Refresh();
            FitCamera();
        }
        public void BuildStagePreview(int stage)
        {
            if (Application.isPlaying) { Paused = false; Time.timeScale = 1; }
            StopAllCoroutines(); stageGeneration++; ReleasePointer();
            Stage = Mathf.Clamp(stage, 0, 3); Defeated = 0; syringeBusy = false;
            for (int i = 0; i < 3; i++) usedSyringes[i] = false;
            characters.Clear(); tools.Clear();
            if (world) Dispose(world.gameObject);
            world = new GameObject("Stage " + (Stage + 1)).transform; world.SetParent(transform, false);
            background = assets.Visual("main_back", world, new Vector2(1, 7), new Vector2(60, 40), -100);
            background.name = "Original background";
            for (int i = -3; i <= 3; i++)
                assets.Visual("msg_flr", world, new Vector2(i * 10.14f, -5.07f), new Vector2(10.14f, 10.14f), -90);
            var ground = new GameObject("Ground"); ground.transform.SetParent(world); ground.transform.position = new Vector3(0, -.24f, 0);
            ground.AddComponent<BoxCollider2D>().size = new Vector2(200, .48f);
            if (Stage == 0)
            {
                for (int i = 0; i < 4; i++)
                    assets.Visual("msg_stolb", world, FromPixels(-50 + 250 * i, 679.5f), new Vector2(1.12f, 8.17f), -20);
                Spawn("Sprunky_21", new Vector2(-50, 0), true);
                Spawn("Sprunky_20", new Vector2(200, 0), true);
                Spawn("Sprunky_33", new Vector2(450, 0), true);
            }
            else if (Stage == 1)
            {
                string[] skins = { "Sprunky_22", "Sprunky_11", "Sprunky_32", "Sprunky_12" };
                for (int i = 0; i < skins.Length; i++) Spawn(skins[i], new Vector2(-200 + i * 200, 0), false);
                CreateTool(MelonToolKind.Saw, FromPixels(-400, 600));
                CreateTool(MelonToolKind.Shock, FromPixels(900, 800));
            }
            else if (Stage == 2)
            {
                string[] skins = { "Sprunky_22", "Sprunky_9", "Sprunky_31", "Sprunky_13", "Sprunky_19", "Sprunky_3", "Sprunky_21" };
                for (int i = 0; i < skins.Length; i++)
                {
                    var c = Spawn(skins[i], new Vector2(-200 + (i % 4) * 150, i >= 4 ? -1045 : 0), false);
                    c.targetGroup = i >= 4 ? 1 : 0;
                }
                var names = new Dictionary<string, string> { { "cd", "cnd" }, { "n1", "no1" }, { "n2", "no2" }, { "s", "stol" }, { "v", "vert" }, { "h", "hor" }, { "b", "big" }, { "m", "melon" }, { "cn", "can" }, { "c", "chair" }, { "a", "arm" } };
                foreach (var n in assets.Node("level_0").groups)
                    if (names.TryGetValue(n.name, out var key))
                        Prop(key, FromPixels(n.x + n.w / 2 - 20, n.y + n.h / 2), n.name == "v" || n.name == "h" || n.name == "b");
                CreateTool(MelonToolKind.Flame, FromPixels(-300, 800));
                CreateTool(MelonToolKind.Rifle, FromPixels(730, -100));
            }
            else
            {
                string[] parade = { "Sprunky_5", "Sprunky_9", "Sprunky_21", "Sprunky_22", "Sprunky_19", "Sprunky_3", "Sprunky_4" };
                for (int i = 0; i < parade.Length; i++) Spawn(parade[i], new Vector2(-500 * (parade.Length - 1 - i), 0), false).BeginParade();
            }
            lastInput = Time.unscaledTime;
            if (hud) hud.Refresh();
            FitCamera();
        }
        public MelonRagdoll Spawn(string skin, Vector2 offset, bool suspended)
        {
            MelonRagdoll c;
            bool sprunky = skin.StartsWith("Sprunky_");
            var prefab = sprunky ? Resources.Load<GameObject>("ragdollprefabs/" + skin) : Application.isPlaying ? assets.CharacterPrefab(skin) : null;
            if (sprunky)
            {
                if (!prefab) throw new System.InvalidOperationException("Missing ragdoll prefab: " + skin);
                var staging = new GameObject("Ragdoll setup");
                staging.SetActive(false); staging.transform.SetParent(world, false);
                var go = Instantiate(prefab, staging.transform);
                go.name = skin;
                c = go.AddComponent<MelonRagdoll>();
                c.BuildSprunky(this, offset, suspended);
                go.transform.SetParent(world, true);
                Dispose(staging);
            }
            else if (prefab)
            {
                var go = Instantiate(prefab, new Vector3(offset.x / 100, -offset.y / 100, 0), Quaternion.identity, world);
                go.name = skin.TrimEnd('_') + " ragdoll";
                c = go.GetComponent<MelonRagdoll>(); c.ConfigureInstance(this, offset, suspended, Stage == 0 ? "sk_" : "bsk_");
            }
            else
            {
                var go = new GameObject(skin.TrimEnd('_') + " ragdoll"); go.transform.SetParent(world, false);
                c = go.AddComponent<MelonRagdoll>(); c.Build(this, skin, offset, suspended, Stage == 0 ? "sk_" : "bsk_");
            }
            // Original characters do not collide with one another, only the tools and scenery.
            foreach (var old in characters)
                foreach (var a in old.GetComponentsInChildren<Collider2D>())
                    foreach (var b in c.GetComponentsInChildren<Collider2D>()) MelonGame.IgnoreActiveCollision(a, b);
            characters.Add(c); return c;
        }
        void Prop(string key, Vector2 position, bool isStatic)
        {
            var n = assets.Node(key);
            var sr = assets.Visual(n.pic, world, position, new Vector2(n.w, n.h) / 100, -5);
            var c = sr.gameObject.AddComponent<BoxCollider2D>();
            c.size = sr.sprite.bounds.size;
            if (!isStatic)
            {
                var rb = sr.gameObject.AddComponent<Rigidbody2D>(); rb.mass = .5f;
 #if !UNITY_LUNA
                rb.interpolation = RigidbodyInterpolation2D.Interpolate;
#endif
            }
        }
        public MelonTool CreateTool(MelonToolKind kind, Vector2 point)
        {
#if UNITY_LUNA
            // Avoid the recursive lazy prefab proxy in the exported asset catalog.
            GameObject prefab = null;
#else
            var prefab = Application.isPlaying ? assets.ToolPrefab(kind) : null;
#endif
            if (prefab)
            {
                var instance = Instantiate(prefab, point, Quaternion.identity, world);
                var configured = instance.GetComponent<MelonTool>(); configured.game = this;
                configured.ConfigurePlacement();
                tools.Add(configured); return configured;
            }
            var go = new GameObject(kind.ToString()); go.transform.SetParent(world, false); go.transform.position = point;
            var tool = go.AddComponent<MelonTool>(); tool.game = this; tool.kind = kind;
            tool.body = go.AddComponent<Rigidbody2D>(); tool.body.mass = 1; tool.body.linearDamping = .7f; tool.body.angularDamping = 2;
 #if !UNITY_LUNA
            tool.body.interpolation = RigidbodyInterpolation2D.Interpolate;
#endif
            tool.body.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
            if (kind == MelonToolKind.Saw)
            {
                assets.Visual("msg_ruk", go.transform, point, new Vector2(2.15f, 1.47f), 60);
                tool.blade = assets.Visual("msg_les_0", go.transform, point + new Vector2(1.85f, .25f), new Vector2(2.27f, .81f), 59);
                var box = go.AddComponent<BoxCollider2D>(); box.offset = new Vector2(1.85f, .25f); box.size = new Vector2(2.17f, .4f);
            }
            else
            {
                string key = kind <= MelonToolKind.SyringeCut ? "spring_" + (int)kind : kind == MelonToolKind.Shock ? "shok" : kind == MelonToolKind.Flame ? "fire" : "rifle";
                var n = assets.Node(key);
                assets.Visual(n.pic, go.transform, point, new Vector2(n.w, n.h) / 100, 60);
                go.AddComponent<BoxCollider2D>().size = new Vector2(n.w, n.h) / 100 * .85f;
            }
            if (tool.Syringe) tool.body.gravityScale = 0;
            tool.ConfigurePlacement();
            tools.Add(tool); return tool;
        }
        public bool CanSyringe(int i) => Stage == 0 && !syringeBusy && !usedSyringes[i];
        public bool UseSyringe(int i)
        {
            if (i < 0 || i > 2 || !CanSyringe(i)) return false;
            UserInput(); syringeBusy = true; usedSyringes[i] = true;
            var target = characters[i];
            Vector2 aim = target.Torso.body.position;
            Vector2 origin = aim + (i == 0 ? new Vector2(-6, 1) : i == 1 ? new Vector2(0, 5) : new Vector2(6, 2));
            var tool = CreateTool((MelonToolKind)i, origin); tool.intendedTarget = target;
            Vector2 direction = (aim - origin).normalized;
            // Syringe artwork points along local -X (needle on the left).
            tool.body.rotation = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg + 180f;
            tool.body.linearVelocity = direction * 15;
            foreach (var c in characters)
                foreach (var collider in c.GetComponentsInChildren<Collider2D>())
                    if (c != target || collider.gameObject != target.Torso.gameObject)
                        MelonGame.IgnoreActiveCollision(collider, tool.GetComponent<Collider2D>());
            Sound("bita"); hud.Refresh();
            StartCoroutine(SyringeRecovery(tool, i, stageGeneration));
            return true;
        }
        IEnumerator SyringeRecovery(MelonTool tool, int index, int generation)
        {
            yield return new WaitForSeconds(4);
            // A miss must leave a retryable interaction, rather than trapping progression.
            if (generation == stageGeneration && tool && !tool.used && !characters[index].dead)
            {
                tools.Remove(tool); Destroy(tool.gameObject); usedSyringes[index] = false; syringeBusy = false; hud.Refresh();
            }
        }
        public void TargetDefeated(MelonRagdoll target, float delay)
        {
            Defeated++; if (hud) hud.Refresh();
            StartCoroutine(AdvanceAfter(delay, stageGeneration));
        }
        IEnumerator AdvanceAfter(float delay, int generation)
        {
            yield return new WaitForSeconds(delay);
            if (generation != stageGeneration) yield break;
            syringeBusy = false;
            if (Defeated >= characters.Count && Stage < 3) LoadStage(Stage + 1);
            else hud.Refresh();
        }
        public MelonRagdoll NextTarget(int group)
        {
            foreach (var character in characters)
                if (character && !character.dead && (group < 0 || character.targetGroup == group)) return character;
            return null;
        }
        public MelonTool GetTool(MelonToolKind kind)
        {
            foreach (var tool in tools) if (tool && tool.kind == kind) return tool;
            return null;
        }
        public void Fire(MelonTool source, MelonRagdoll target)
        {
            var direction = new Vector2(Mathf.Cos(source.body.rotation * Mathf.Deg2Rad), Mathf.Sin(source.body.rotation * Mathf.Deg2Rad));
            Vector2 start = source.body.position + direction * (source.kind == MelonToolKind.Rifle ? 2.55f : 2.3f);
            var sr = assets.Visual(source.kind == MelonToolKind.Rifle ? "msg_bullet" : "msg_flame", world, start, source.kind == MelonToolKind.Rifle ? new Vector2(.22f, .22f) : new Vector2(.3f, .3f), 70);
            var p = sr.gameObject.AddComponent<MelonProjectile>(); p.game = this; p.kind = source.kind;
            p.velocity = direction * (source.kind == MelonToolKind.Rifle ? 40 : 12);
            if (source.kind == MelonToolKind.Rifle) { Sound("fire", .32f); Particles("msg_flame", start, 1, Color.white); }
        }
        public void Particles(string sprite, Vector2 position, int count, Color color)
        {
            if (!world || world.GetComponentsInChildren<MelonParticle>().Length > 180) return;
            for (int i = 0; i < count; i++)
            {
                bool blood = sprite == "msg_blood", electric = sprite.StartsWith("msg_el_");
                float size = blood ? Random.Range(.06f, .15f) : electric ? Random.Range(.2f, .6f) : Random.Range(.3f, .7f);
                var sr = assets.Visual(sprite, world, position + Random.insideUnitCircle * .25f, Vector2.one * size, 80);
                sr.color = color; sr.transform.rotation = Quaternion.Euler(0, 0, Random.Range(0, 360));
                var p = sr.gameObject.AddComponent<MelonParticle>(); p.velocity = Random.insideUnitCircle * (blood ? 4 : 1);
                p.gravity = blood ? 8 : -2; p.lifetime = electric ? .2f : Random.Range(.5f, 1.1f); p.grow = !blood;
            }
        }
        public void Sound(string name, float volume = 1)
        { if (effects && assets.Sound(name)) effects.PlayOneShot(assets.Sound(name), volume); }
        public void Loop(string name)
        {
            if (!loop) return;
            loop.Stop(); loop.clip = string.IsNullOrEmpty(name) ? null : assets.Sound(name); if (loop.clip) loop.Play();
        }
        public void TogglePause()
        { Paused = !Paused; Time.timeScale = Paused ? 0 : 1; if (hud) hud.Refresh(); }
        public void ToggleAudio()
        { AudioListener.volume = AudioListener.volume > 0 ? 0 : 1; if (hud) hud.Refresh(); }
        public void Restart()
        { Paused = false; Time.timeScale = 1; LoadStage(0); }
        void UserInput() { lastInput = Time.unscaledTime; if (music && !music.isPlaying) music.Play(); }
        void Update()
        {
            if (!assets || !world) return;
            FitCamera();
            Vector2 screen = Vector2.zero; bool down = false, held = false, up = false;
#if ENABLE_INPUT_SYSTEM
            if (Mouse.current != null) { screen = Mouse.current.position.ReadValue(); down = Mouse.current.leftButton.wasPressedThisFrame; held = Mouse.current.leftButton.isPressed; up = Mouse.current.leftButton.wasReleasedThisFrame; }
            if (Touchscreen.current != null && (Touchscreen.current.primaryTouch.press.isPressed || Touchscreen.current.primaryTouch.press.wasReleasedThisFrame))
            { var t = Touchscreen.current.primaryTouch; screen = t.position.ReadValue(); down = t.press.wasPressedThisFrame; held = t.press.isPressed; up = t.press.wasReleasedThisFrame; }
            if (Keyboard.current != null)
            {
                if (Keyboard.current.rKey.wasPressedThisFrame) Restart();
                if (Keyboard.current.escapeKey.wasPressedThisFrame) TogglePause();
                if (Keyboard.current.digit1Key.wasPressedThisFrame) UseSyringe(0);
                if (Keyboard.current.digit2Key.wasPressedThisFrame) UseSyringe(1);
                if (Keyboard.current.digit3Key.wasPressedThisFrame) UseSyringe(2);
            }
#else
            screen = Input.mousePosition; down = Input.GetMouseButtonDown(0); held = Input.GetMouseButton(0); up = Input.GetMouseButtonUp(0);
            if (Input.GetKeyDown(KeyCode.R)) Restart();
            if (Input.GetKeyDown(KeyCode.Escape)) TogglePause();
            if (Input.GetKeyDown(KeyCode.Alpha1)) UseSyringe(0);
            if (Input.GetKeyDown(KeyCode.Alpha2)) UseSyringe(1);
            if (Input.GetKeyDown(KeyCode.Alpha3)) UseSyringe(2);
#endif
            if (up) ReleasePointer();
            if (!Paused)
            {
                var point = (Vector2)gameCamera.ScreenToWorldPoint(screen);
                if (down && !OverUI(screen))
                {
                    UserInput();
                    float nearest = float.MaxValue;
                    foreach (var t in tools)
                        if (t && !t.Syringe && Vector2.Distance(t.body.position, point) < nearest)
                        { nearest = Vector2.Distance(t.body.position, point); selected = t; }
                    if (selected) selected.Grab(point);
                }
                if (held && selected) { selected.Drag(point); lastInput = Time.unscaledTime; }
            }
            if (hud) hud.SetHint(Time.unscaledTime - lastInput > 4, selected);
        }
        bool OverUI(Vector2 screen)
        {
            if (!EventSystem.current) return false;
            var hits = new List<RaycastResult>();
            EventSystem.current.RaycastAll(new PointerEventData(EventSystem.current) { position = screen }, hits);
            return hits.Count > 0;
        }
        void ReleasePointer() { if (selected) selected.Drop(); selected = null; }
        void FitCamera()
        {
            if (!gameCamera) return;
            gameCamera.orthographic = true;
            float height = Stage == 2 ? 12.4f : 6.7f;
            float width = Stage == 2 ? 15.3f : Stage == 3 ? 10 : 9;
            gameCamera.orthographicSize = Mathf.Max(height, width / Mathf.Max(.3f, gameCamera.aspect));
            gameCamera.transform.position = new Vector3(Stage == 2 ? 2.7f : 0, Stage == 2 ? 9.5f : 4.8f, -10);
            gameCamera.backgroundColor = new Color(.15f, .22f, .28f);
            if (background && background.sprite)
            {
                var size = background.sprite.bounds.size;
                float scale = Mathf.Max(gameCamera.orthographicSize * 2 / size.y, gameCamera.orthographicSize * 2 * gameCamera.aspect / size.x);
                background.transform.localScale = new Vector3(scale, scale, 1);
                background.transform.position = new Vector3(gameCamera.transform.position.x, gameCamera.transform.position.y, 0);
            }
        }
        void OnDisable() { Time.timeScale = 1; }
        public static void Dispose(GameObject go)
        {
            go.SetActive(false);
            if (Application.isPlaying) Destroy(go); else DestroyImmediate(go);
        }
    }
}

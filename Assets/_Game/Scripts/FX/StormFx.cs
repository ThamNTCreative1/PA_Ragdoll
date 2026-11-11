using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace MelonAd
{
    /// <summary>
    /// Ambient storm (ported from the storm VFX package: RainEffect + LightningStrike + ScreenFx + StormPower).
    /// Rain = pooled sprites, lightning = sprite segments (no ParticleSystem / LineRenderer, Luna-safe),
    /// flash = full-screen UI Image. Purely visual: lightning strikes the far background and never hurts the man.
    /// All sizes are authored for an orthographic size of 5 and scaled to the current camera.
    /// </summary>
    public class StormFx : MonoBehaviour
    {
        public Camera cam;
        [Tooltip("4x4 white sprite used for rain drops and bolt segments.")]
        public Sprite whiteSprite;
        [Tooltip("Full-screen white Image used for the lightning flash.")]
        public Image flash;
        public bool playOnStart = true;

        [Header("Rain")]
        public int maxDrops = 90;
        public Vector2 rainVelocity = new Vector2(-3f, -16f);
        public Vector2 dropSize = new Vector2(0.025f, 0.45f);
        public Color rainColor = new Color(0.75f, 0.85f, 1f, 0.45f);
        public float rainFadeIn = 0.8f;
        public int rainSortingOrder = 450;

        [Header("Lightning")]
        public Vector2 strikeInterval = new Vector2(2.5f, 5.5f);
        [Range(0f, 1f)] public float extraFlashChance = 0.35f;
        public Color coreColor = Color.white;
        public Color glowColor = new Color(0.6f, 0.8f, 1f, 0.35f);
        public float coreWidth = 0.035f;
        public float glowWidth = 0.1f;
        public int mainSegments = 18;
        public int branchSegments = 5;
        public int branches = 2;
        public float jitter = 0.22f;
        [Tooltip("Behind the level walls (10) but above the sky canvas (-2000).")]
        public int boltSortingOrder = -50;
        public float flashStrength = 0.35f;
        [Tooltip("Where bolts hit, as a fraction of the screen height from the bottom (min, max).")]
        public Vector2 groundRange = new Vector2(0.08f, 0.3f);

        const float AuthoredOrtho = 5f;

        SpriteRenderer[] drops;
        float intensity, target;
        readonly Queue<Bolt> pool = new Queue<Bolt>();
        float nextStrike;
        bool running;
        float audioCheck;
        Coroutine flashRoutine;

        class Bolt
        {
            public GameObject root;
            public readonly List<SpriteRenderer> cores = new List<SpriteRenderer>();
            public readonly List<SpriteRenderer> glows = new List<SpriteRenderer>();
            public int used;
        }

        void Awake()
        {
            if (cam == null) cam = Camera.main;
            SetFlash(0f);
        }

        void Start()
        {
            if (playOnStart) Begin();
        }

        float Scale { get { return cam != null ? cam.orthographicSize / AuthoredOrtho : 1f; } }

        Rect CamRect()
        {
            float h = cam.orthographicSize * 2f;
            float w = h * cam.aspect;
            Vector3 p = cam.transform.position;
            return new Rect(p.x - w * 0.5f, p.y - h * 0.5f, w, h);
        }

        public void Begin()
        {
            InitRain();
            target = 1f;
            running = true;
            nextStrike = Time.time + Random.Range(0.8f, 1.6f);
            if (AudioManager.I != null) AudioManager.I.PlayIfIdle(Sfx.Rain);
        }

        public void Stop()
        {
            target = 0f;
            running = false;
            if (AudioManager.I != null) AudioManager.I.Stop(Sfx.Rain);
        }

        void Update()
        {
            if (cam == null) return;
            UpdateRain();
            // keep the rain loop going (on web the first Play can be swallowed until the user taps)
            audioCheck -= Time.deltaTime;
            if (running && audioCheck <= 0f && AudioManager.I != null)
            {
                audioCheck = 0.5f;
                AudioManager.I.PlayIfIdle(Sfx.Rain);
            }
            if (running && Time.time >= nextStrike)
            {
                nextStrike = Time.time + Random.Range(strikeInterval.x, strikeInterval.y);
                Strike();
                if (Random.value < extraFlashChance) StartCoroutine(LateFlash(Random.Range(0.35f, 0.7f)));
            }
        }

        IEnumerator LateFlash(float delay)
        {
            yield return new WaitForSeconds(delay);
            Flash(0.2f);
        }

        // ---------------- rain ----------------

        void InitRain()
        {
            if (drops != null || whiteSprite == null) return;
            drops = new SpriteRenderer[maxDrops];
            for (int i = 0; i < maxDrops; i++)
            {
                SpriteRenderer sr = CreateSprite("Drop", transform, rainSortingOrder);
                sr.color = rainColor;
                sr.gameObject.SetActive(false);
                drops[i] = sr;
            }
        }

        void UpdateRain()
        {
            if (drops == null) return;
            float dt = Time.deltaTime;
            float speed = 1f / Mathf.Max(0.01f, rainFadeIn);
            intensity = Mathf.MoveTowards(intensity, target, speed * dt);
            int wanted = Mathf.RoundToInt(maxDrops * intensity);

            float k = Scale;
            Vector2 vel = rainVelocity * k;
            Vector2 size = whiteSprite.bounds.size;
            Vector3 dropScale = new Vector3(dropSize.x * k / size.x, dropSize.y * k / size.y, 1f);
            Quaternion rot = Quaternion.Euler(0f, 0f, Mathf.Atan2(vel.y, vel.x) * Mathf.Rad2Deg + 90f);
            Rect r = CamRect();

            for (int i = 0; i < drops.Length; i++)
            {
                Transform t = drops[i].transform;
                if (!drops[i].gameObject.activeSelf)
                {
                    if (i >= wanted) continue;
                    Respawn(t, r, vel, true);
                    drops[i].gameObject.SetActive(true);
                }
                t.localScale = dropScale;
                t.rotation = rot;
                t.position += (Vector3)(vel * dt);
                if (t.position.y < r.yMin)
                {
                    if (i < wanted) Respawn(t, r, vel, false);
                    else drops[i].gameObject.SetActive(false);
                }
            }
        }

        static void Respawn(Transform t, Rect r, Vector2 vel, bool spread)
        {
            // shifted right to compensate the wind blowing left
            float drift = -vel.x / -vel.y * r.height;
            float x = Random.Range(r.xMin, r.xMax + drift);
            float y = spread ? Random.Range(r.yMin, r.yMax + r.height * 0.2f) : r.yMax + Random.Range(0f, r.height * 0.1f);
            t.position = new Vector3(x, y, 0f);
        }

        // ---------------- lightning ----------------

        public void Strike()
        {
            if (whiteSprite == null) return;
            Rect r = CamRect();
            Vector2 ground = new Vector2(Random.Range(r.xMin + r.width * 0.1f, r.xMax - r.width * 0.1f),
                                         r.yMin + r.height * Random.Range(groundRange.x, groundRange.y));
            Bolt bolt = pool.Count > 0 ? pool.Dequeue() : CreateBolt();
            Build(bolt, ground);
            Flash(flashStrength);
            if (AudioManager.I != null) AudioManager.I.PlayOverlap(Sfx.Thunder);
            StartCoroutine(Play(bolt, ground));
        }

        Bolt CreateBolt()
        {
            Bolt b = new Bolt();
            b.root = new GameObject("Bolt");
            b.root.transform.SetParent(transform, false);
            int total = mainSegments + branchSegments * branches;
            for (int i = 0; i < total; i++)
            {
                b.glows.Add(CreateSprite("Glow", b.root.transform, boltSortingOrder));
                b.cores.Add(CreateSprite("Core", b.root.transform, boltSortingOrder + 1));
            }
            return b;
        }

        void Build(Bolt bolt, Vector2 ground)
        {
            float k = Scale;
            Rect r = CamRect();
            Vector2 start = new Vector2(ground.x + Random.Range(-0.4f, 0.4f) * k, r.yMax + 0.5f * k);
            List<Vector2> points = new List<Vector2>();
            for (int i = 0; i <= mainSegments; i++)
            {
                float t = (float)i / mainSegments;
                Vector2 p = Vector2.Lerp(start, ground, t);
                if (i > 0 && i < mainSegments) p.x += Random.Range(-jitter, jitter) * k;
                points.Add(p);
            }

            bolt.used = 0;
            for (int i = 0; i < mainSegments; i++) SetSegment(bolt, points[i], points[i + 1], k, 1f);

            float len = (start.y - ground.y) / mainSegments;
            for (int b = 0; b < branches; b++)
            {
                int from = Random.Range(2, mainSegments - 2);
                Vector2 p = points[from];
                float dir = Random.value < 0.5f ? -1f : 1f;
                for (int i = 0; i < branchSegments; i++)
                {
                    Vector2 next = p + new Vector2(dir * Random.Range(0.2f, 0.5f) * k, -len * Random.Range(0.6f, 1f));
                    next.y = Mathf.Max(next.y, ground.y);
                    SetSegment(bolt, p, next, k, 0.5f);
                    p = next;
                }
            }

            for (int i = bolt.used; i < bolt.cores.Count; i++)
            {
                bolt.cores[i].enabled = false;
                bolt.glows[i].enabled = false;
            }
            bolt.root.SetActive(true);
        }

        void SetSegment(Bolt bolt, Vector2 a, Vector2 b, float k, float widthMul)
        {
            int i = bolt.used++;
            Place(bolt.glows[i], a, b, glowWidth * k * widthMul, glowColor);
            Place(bolt.cores[i], a, b, coreWidth * k * widthMul, coreColor);
        }

        void Place(SpriteRenderer sr, Vector2 a, Vector2 b, float width, Color color)
        {
            Vector2 d = b - a;
            Vector2 size = whiteSprite.bounds.size;
            sr.enabled = true;
            sr.color = color;
            sr.transform.position = (a + b) * 0.5f;
            sr.transform.rotation = Quaternion.Euler(0f, 0f, Mathf.Atan2(d.y, d.x) * Mathf.Rad2Deg);
            sr.transform.localScale = new Vector3((d.magnitude + width * 0.5f) / size.x, width / size.y, 1f);
        }

        IEnumerator Play(Bolt bolt, Vector2 ground)
        {
            // flicker: on, off, re-strike with a new shape, then fade
            yield return new WaitForSeconds(0.06f);
            bolt.root.SetActive(false);
            yield return new WaitForSeconds(0.05f);
            Build(bolt, ground);
            yield return new WaitForSeconds(0.08f);

            float t = 0f;
            const float fade = 0.2f;
            while (t < fade)
            {
                t += Time.deltaTime;
                float a = 1f - t / fade;
                for (int i = 0; i < bolt.used; i++)
                {
                    Color c = coreColor; c.a *= a; bolt.cores[i].color = c;
                    Color g = glowColor; g.a *= a; bolt.glows[i].color = g;
                }
                yield return null;
            }
            bolt.root.SetActive(false);
            pool.Enqueue(bolt);
        }

        // ---------------- screen flash ----------------

        public void Flash(float strength)
        {
            if (flash == null) return;
            if (flashRoutine != null) StopCoroutine(flashRoutine);
            flashRoutine = StartCoroutine(FlashRoutine(strength));
        }

        IEnumerator FlashRoutine(float strength)
        {
            SetFlash(strength);
            yield return new WaitForSeconds(0.05f);
            SetFlash(0f);
            yield return new WaitForSeconds(0.05f);
            SetFlash(strength * 0.7f);
            float from = strength * 0.7f;
            float t = 0f;
            const float dur = 0.25f;
            while (t < dur)
            {
                t += Time.deltaTime;
                SetFlash(Mathf.Lerp(from, 0f, t / dur));
                yield return null;
            }
            SetFlash(0f);
            flashRoutine = null;
        }

        void SetFlash(float a)
        {
            if (flash == null) return;
            Color c = flash.color;
            c.a = a;
            flash.color = c;
            flash.enabled = a > 0.001f;
        }

        SpriteRenderer CreateSprite(string name, Transform parent, int order)
        {
            GameObject go = new GameObject(name);
            go.transform.SetParent(parent, false);
            SpriteRenderer sr = go.AddComponent<SpriteRenderer>();
            sr.sprite = whiteSprite;
            sr.sortingOrder = order;
            return sr;
        }
    }
}

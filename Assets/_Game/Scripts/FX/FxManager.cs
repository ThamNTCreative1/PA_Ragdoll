using System.Collections.Generic;
using UnityEngine;

namespace MelonAd
{
    public enum FxKind { Smoke, FlamePuff, Debris, Bubble }

    /// <summary>
    /// Pooled sprite effects (smoke, flame puffs, debris, blood, acid bubbles).
    /// One Update loop for everything, no Instantiate at runtime after prewarm.
    /// Motion formulas ported 1:1 from the original (converted px/ms -> units/s, y flipped).
    /// </summary>
    public class FxManager : MonoBehaviour
    {
        public static FxManager I;

        public Sprite smoke, flame, blood, spikeShard, bulletShard, bubble;
        public int prewarm = 160;
        public int sortingOrder = 250;

        class Fx
        {
            public GameObject go;
            public Transform t;
            public SpriteRenderer sr;
            public FxKind kind;
            public bool active;
            public float time, dur, delay;
            public float sx, y, vv, w, l, s, dx;
        }

        readonly List<Fx> pool = new List<Fx>();

        void Awake()
        {
            I = this;
            for (int i = 0; i < prewarm; i++) Create();
        }

        Fx Create()
        {
            Fx f = new Fx();
            f.go = new GameObject("fx");
            f.t = f.go.transform;
            f.t.SetParent(transform, false);
            f.sr = f.go.AddComponent<SpriteRenderer>();
            f.sr.sortingOrder = sortingOrder;
            f.go.SetActive(false);
            pool.Add(f);
            return f;
        }

        Fx Take(FxKind kind, Sprite sp, float dur, float delay)
        {
            Fx f = null;
            for (int i = 0; i < pool.Count; i++)
            {
                if (!pool[i].active) { f = pool[i]; break; }
            }
            if (f == null) f = Create();
            f.kind = kind;
            f.sr.sprite = sp;
            f.dur = dur;
            f.delay = delay;
            f.time = 0f;
            f.active = true;
            f.t.localScale = Vector3.one;
            f.t.localRotation = Quaternion.identity;
            SetAlpha(f, 0f);
            f.go.SetActive(true);
            return f;
        }

        static void SetAlpha(Fx f, float a)
        {
            Color c = f.sr.color;
            c.a = a;
            f.sr.color = c;
        }

        static Vector2 RandOffset(float radius)
        {
            float a = Random.value * Mathf.PI * 2f;
            float n = radius * Random.value;
            return new Vector2(Mathf.Cos(a) * n, Mathf.Sin(a) * n);
        }

        /// <summary>Smoke + delayed flame puff (function X in the original).</summary>
        public void BurnPuff(Vector2 p)
        {
            Fx f = Take(FxKind.Smoke, smoke, 2f, 0f);
            Vector2 o = RandOffset(0.4f);
            f.sx = p.x + o.x; f.y = p.y + o.y;
            f.vv = Random.value + 1f;
            f.w = Random.value * Mathf.PI;
            f.l = 0.7f * (Random.value + 1f);
            f.s = 1f + 2f * Random.value;
            f.t.position = new Vector3(f.sx, f.y, 0f);
            f.t.localScale = Vector3.zero;

            Fx g = Take(FxKind.FlamePuff, flame, 2f, 0.35f);
            o = RandOffset(0.4f);
            g.sx = p.x + o.x; g.y = p.y + o.y;
            g.vv = 0.1f * (Random.value + 1f);
            g.w = Random.value * Mathf.PI;
            g.l = 0.7f * (Random.value + 1f);
            g.s = (1f + 2f * Random.value) / 3f;
            g.t.position = new Vector3(g.sx, g.y, 0f);
            g.t.localScale = Vector3.zero;
        }

        public void Debris(Sprite sp, Vector2 p, int count)
        {
            for (int i = 0; i < count; i++)
            {
                Fx f = Take(FxKind.Debris, sp, 2f, 0f);
                Vector2 o = RandOffset(0.4f);
                f.t.position = new Vector3(p.x + o.x, p.y + o.y, 0f);
                f.dx = o.x;
                f.vv = -200f * (Random.value + 1f);
                SetAlpha(f, 1f);
            }
        }

        public void Blood(Vector2 p, int count)
        {
            Debris(blood, p, count);
        }

        public void Bubble(Vector2 p)
        {
            Fx f = Take(FxKind.Bubble, bubble, 0.3f + 0.5f * Random.value, 0f);
            f.t.position = new Vector3(p.x + (Random.value - 0.5f), p.y + (Random.value - 0.5f), 0f);
            SetAlpha(f, 1f);
        }

        public void ClearAll()
        {
            for (int i = 0; i < pool.Count; i++)
            {
                if (!pool[i].active) continue;
                pool[i].active = false;
                pool[i].go.SetActive(false);
            }
        }

        void Update()
        {
            float dt = Mathf.Min(Time.deltaTime, 0.05f);
            for (int i = 0; i < pool.Count; i++)
            {
                Fx f = pool[i];
                if (!f.active) continue;
                if (f.delay > 0f) { f.delay -= dt; continue; }

                f.time += dt;
                float t = f.time / f.dur;
                if (t >= 1f)
                {
                    f.active = false;
                    f.go.SetActive(false);
                    continue;
                }

                if (f.kind == FxKind.Smoke || f.kind == FxKind.FlamePuff)
                {
                    f.y += f.vv * dt;
                    f.vv += dt;
                    float x = f.sx + f.l * Mathf.Sin(f.w * t);
                    f.t.position = new Vector3(x, f.y, 0f);
                    float sc = f.kind == FxKind.Smoke ? f.s * t : f.s * Mathf.Sin(Mathf.PI * t);
                    f.t.localScale = new Vector3(sc, sc, 1f);
                    SetAlpha(f, Mathf.Sin(Mathf.PI * t) / 20f);
                }
                else if (f.kind == FxKind.Debris)
                {
                    Vector3 pos = f.t.position;
                    pos.x += f.dx * 10f * dt;
                    pos.y -= f.vv * dt * 0.05f;
                    f.vv += dt * 1000f;
                    f.t.position = pos;
                    SetAlpha(f, 1f - t);
                }
                else
                {
                    Vector3 pos = f.t.position;
                    pos.y += 2f * dt;
                    f.t.position = pos;
                    SetAlpha(f, 1f - t);
                }
            }
        }
    }
}

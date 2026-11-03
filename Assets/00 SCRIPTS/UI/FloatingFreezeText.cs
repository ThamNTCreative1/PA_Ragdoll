using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace OBP.FreezeBrainrot
{
    // While the beam is freezing a monster, pops "+N%/s" texts around the crosshair that float up and fade out.
    // Uses a fixed pool of Text objects authored in the scene (no UI is created at runtime).
    public sealed class FloatingFreezeText : MonoBehaviour
    {
        public FreezeGun gun;
        public TMP_Text[] pool = new TMP_Text[0];
        [Tooltip("Seconds between pops while freezing.")]
        public float interval = 0.35f;
        public float lifetime = 1f;
        [Tooltip("Spawn distance from the crosshair centre (UI units).")]
        public float spawnRadius = 95f;
        public float riseDistance = 90f;
        public Color color = new Color(0.6f, 0.95f, 1f, 1f);

        private float[] age;
        private Vector2[] origin;
        private int next;
        private float timer;

        private void Awake()
        {
            age = new float[pool.Length];
            origin = new Vector2[pool.Length];
            for (int i = 0; i < pool.Length; i++) { age[i] = -1f; if (pool[i] != null) pool[i].gameObject.SetActive(false); }
        }

        private void Update()
        {
            float dt = Time.deltaTime;
            FreezableMonster target = gun != null ? gun.CurrentTarget : null;
            if (target != null)
            {
                timer -= dt;
                if (timer <= 0f) { timer = interval; Spawn(Mathf.RoundToInt(gun.RateFor(target))); }
            }
            else timer = 0f;

            for (int i = 0; i < pool.Length; i++)
            {
                if (age[i] < 0f || pool[i] == null) continue;
                age[i] += dt;
                float t = age[i] / lifetime;
                if (t >= 1f) { age[i] = -1f; pool[i].gameObject.SetActive(false); continue; }
                RectTransform rt = pool[i].rectTransform;
                // Ease-out rise, quick pop-in, linear fade.
                float rise = 1f - (1f - t) * (1f - t);
                rt.anchoredPosition = origin[i] + Vector2.up * (riseDistance * rise);
                float s = t < 0.12f ? Mathf.Lerp(1.4f, 1f, t / 0.12f) : 1f;
                rt.localScale = new Vector3(s, s, 1f);
                Color c = color; c.a = 1f - t;
                pool[i].color = c;
            }
        }

        private void Spawn(int rate)
        {
            if (pool.Length == 0) return;
            TMP_Text txt = pool[next];
            next = (next + 1) % pool.Length;
            if (txt == null) return;
            int i = System.Array.IndexOf(pool, txt);
            float a = Random.Range(-0.35f, 1.35f) * Mathf.PI; // mostly around the upper half
            origin[i] = new Vector2(Mathf.Cos(a), Mathf.Sin(a) * 0.6f) * spawnRadius;
            age[i] = 0f;
            txt.text = "+" + rate + "%/s";
            txt.gameObject.SetActive(true);
        }
    }
}

using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace OBP.FreezeBrainrot
{
    // When a monster freezes solid, pops a yellow "+$420K" over it that bounces in, rises and fades.
    // Uses a fixed pool of Text objects authored in the scene (no UI is created at runtime).
    public sealed class MoneyPopup : MonoBehaviour
    {
        public FreezeGun gun;
        public RectTransform area;          // full-screen rect the popups live in
        public TMP_Text[] pool = new TMP_Text[0];
        public float lifetime = 1.3f;
        public float riseDistance = 140f;
        public float headOffset = 1.2f;     // metres above the monster's aim point
        public Color color = new Color(1f, 0.86f, 0.1f, 1f);

        private float[] age;
        private Vector2[] origin;
        private int next;

        private void Awake()
        {
            age = new float[pool.Length];
            origin = new Vector2[pool.Length];
            for (int i = 0; i < pool.Length; i++) { age[i] = -1f; if (pool[i] != null) pool[i].gameObject.SetActive(false); }
        }

        private void OnEnable()
        {
            if (gun != null) gun.MonsterFrozen += Show;
        }

        private void OnDisable()
        {
            if (gun != null) gun.MonsterFrozen -= Show;
        }

        private void Show(FreezableMonster monster)
        {
            if (pool.Length == 0 || monster == null) return;
            int i = next;
            next = (next + 1) % pool.Length;
            TMP_Text txt = pool[i];
            if (txt == null) return;

            // Start above the monster on screen (falls back to screen centre if it is behind the camera).
            Vector2 local = Vector2.zero;
            Camera cam = Camera.main;
            if (cam != null)
            {
                Vector3 sp = cam.WorldToScreenPoint(monster.AimPosition + Vector3.up * headOffset);
                if (sp.z > 0f) RectTransformUtility.ScreenPointToLocalPointInRectangle(area, sp, null, out local);
            }
            origin[i] = local;
            age[i] = 0f;
            txt.text = "+" + monster.PriceText;
            txt.gameObject.SetActive(true);
        }

        private void Update()
        {
            float dt = Time.deltaTime;
            for (int i = 0; i < pool.Length; i++)
            {
                if (age[i] < 0f || pool[i] == null) continue;
                age[i] += dt;
                float t = age[i] / lifetime;
                if (t >= 1f) { age[i] = -1f; pool[i].gameObject.SetActive(false); continue; }
                RectTransform rt = pool[i].rectTransform;
                float rise = 1f - (1f - t) * (1f - t);
                rt.anchoredPosition = origin[i] + Vector2.up * (riseDistance * rise);
                // Bounce in (overshoot) then settle.
                float s = t < 0.15f ? Mathf.Lerp(0.4f, 1.35f, t / 0.15f) : (t < 0.3f ? Mathf.Lerp(1.35f, 1f, (t - 0.15f) / 0.15f) : 1f);
                rt.localScale = new Vector3(s, s, 1f);
                Color c = color; c.a = t < 0.6f ? 1f : 1f - (t - 0.6f) / 0.4f;
                pool[i].color = c;
            }
        }
    }
}

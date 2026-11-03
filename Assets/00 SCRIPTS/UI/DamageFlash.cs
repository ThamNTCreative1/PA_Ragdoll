using UnityEngine;
using UnityEngine.UI;

namespace OBP.FreezeBrainrot
{
    // Full-screen red flash when the player is knocked down (wave hit / fell in a hole).
    // The overlay Image is authored in the scene; this only animates its alpha.
    public sealed class DamageFlash : MonoBehaviour
    {
        public GameManager game;
        public Image overlay;
        [Range(0f, 1f)] public float peakAlpha = 0.5f;
        public float duration = 0.6f;
        [Tooltip("Number of pulses within the duration.")]
        public int pulses = 2;

        private float timer = -1f;

        private void Awake()
        {
            SetAlpha(0f);
        }

        private void OnEnable()
        {
            if (game != null) game.PlayerDowned += Flash;
        }

        private void OnDisable()
        {
            if (game != null) game.PlayerDowned -= Flash;
            SetAlpha(0f);
        }

        public void Flash()
        {
            timer = 0f;
        }

        private void Update()
        {
            if (timer < 0f) return;
            timer += Time.deltaTime;
            float t = timer / duration;
            if (t >= 1f) { timer = -1f; SetAlpha(0f); return; }
            // Pulses that get weaker over time.
            float pulse = Mathf.Abs(Mathf.Sin(t * pulses * Mathf.PI));
            SetAlpha(peakAlpha * pulse * (1f - t * 0.6f));
        }

        private void SetAlpha(float a)
        {
            if (overlay == null) return;
            Color c = overlay.color; c.a = a; overlay.color = c;
            overlay.enabled = a > 0.001f;
        }
    }
}

using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Tutorial hand effect: presses down, slides by `travel` from where it was placed in the scene, lifts and repeats.
    [RequireComponent(typeof(RectTransform))]
    public sealed class HandHintAnim : MonoBehaviour
    {
        [Tooltip("Slide offset in UI units from the authored position.")]
        public Vector2 travel = new Vector2(0f, 120f);
        public float period = 1.4f;
        public float pressScale = 0.85f;
        [Tooltip("Slide back and forth instead of restarting from the start each cycle.")]
        public bool pingPong = true;

        private RectTransform rect;
        private Vector2 home;
        private Vector3 baseScale;
        private float time;

        private void Awake()
        {
            rect = (RectTransform)transform;
            home = rect.anchoredPosition;
            baseScale = rect.localScale;
        }

        private void OnEnable()
        {
            time = 0f;
        }

        private void OnDisable()
        {
            if (rect == null) return;
            rect.anchoredPosition = home;
            rect.localScale = baseScale;
        }

        private void Update()
        {
            time += Time.unscaledDeltaTime;
            float t = (time % period) / period;
            float move;
            if (pingPong) move = 0.5f - 0.5f * Mathf.Cos(t * Mathf.PI * 2f);
            else move = Mathf.SmoothStep(0f, 1f, Mathf.Clamp01((t - 0.15f) / 0.6f));
            rect.anchoredPosition = home + travel * move;
            // Pressed while sliding, released at the ends.
            float press = Mathf.Sin(t * Mathf.PI * (pingPong ? 2f : 1f));
            float s = Mathf.Lerp(1f, pressScale, Mathf.Clamp01(Mathf.Abs(press)));
            rect.localScale = baseScale * s;
        }
    }
}

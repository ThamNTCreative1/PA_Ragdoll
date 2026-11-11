using UnityEngine;

namespace Game.Gameplay
{
    // Linger, fade all child SpriteRenderers, then destroy the root. Attach via Begin().
    public class FadeOutAndDespawn : MonoBehaviour
    {
        private SpriteRenderer[] _renderers;
        private float _delay;
        private float _duration;
        private float _elapsed;

        public static void Begin(GameObject root, float delay, float duration)
        {
            var fade = root.AddComponent<FadeOutAndDespawn>();
            fade._delay = delay;
            fade._duration = Mathf.Max(0.01f, duration);
            fade._renderers = root.GetComponentsInChildren<SpriteRenderer>();
        }

        private void Update()
        {
            _elapsed += Time.deltaTime;
            float fadeTime = _elapsed - _delay;
            if (fadeTime < 0f) return;

            float alpha = Mathf.Clamp01(1f - fadeTime / _duration);
            for (int i = 0; i < _renderers.Length; i++)
            {
                var renderer = _renderers[i];
                if (renderer == null) continue;

                // The set is captured once at Begin, but things can leave this hierarchy during the delay (e.g. a dropped weapon) — skip those.
                if (!renderer.transform.IsChildOf(transform))
                {
                    _renderers[i] = null;
                    continue;
                }

                var color = renderer.color;
                color.a = alpha;
                renderer.color = color;
            }

            if (alpha <= 0f) Destroy(gameObject);
        }
    }
}

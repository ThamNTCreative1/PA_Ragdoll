using UnityEngine;

namespace Game.Gameplay
{
    // Flashes the art faster as the fuse runs out. Added at runtime by ExplosiveEntity.
    public class ExplosiveBlink : MonoBehaviour
    {
        // A flash is a blip, not half the cycle — the gap between them is what carries the pace.
        private const float LitSeconds = 0.07f;

        private static readonly int FlashAmountId = Shader.PropertyToID("_FlashAmount");
        private static readonly int FlashColorId = Shader.PropertyToID("_FlashColor");

        private SpriteRenderer _renderer;
        private MaterialPropertyBlock _block;
        private Color _base;
        private Color _flash;
        private float _startInterval;
        private float _endInterval;
        private float _startTime;
        private float _duration;
        private float _nextToggle;
        private bool _lit;

        // Without flashMaterial we fall back to tinting, which multiplies and reads dimmer than a real flash.
        public void Begin(SpriteRenderer target, Color flash, float startInterval, float endInterval,
                          float seconds, Material flashMaterial)
        {
            _renderer = target;
            _base = target.color;
            _flash = flash;
            _startInterval = Mathf.Max(0.01f, startInterval);
            _endInterval = Mathf.Max(0.01f, endInterval);
            _startTime = Time.time;
            _duration = Mathf.Max(0.01f, seconds);
            _nextToggle = Time.time;

            if (flashMaterial == null) return;
            target.sharedMaterial = flashMaterial;
            _block = new MaterialPropertyBlock();
            target.GetPropertyBlock(_block);
            _block.SetColor(FlashColorId, _flash);
            _block.SetFloat(FlashAmountId, 0f);
            target.SetPropertyBlock(_block);
        }

        private void Update()
        {
            if (_renderer == null || Time.time < _nextToggle) return;

            _lit = !_lit;
            if (_block != null)
            {
                _renderer.GetPropertyBlock(_block);
                _block.SetFloat(FlashAmountId, _lit ? 1f : 0f);
                _renderer.SetPropertyBlock(_block);
            }
            else
            {
                _renderer.color = _lit ? _flash : _base;
            }

            if (_lit)
            {
                _nextToggle = Time.time + LitSeconds;
                return;
            }

            float progress = Mathf.Clamp01((Time.time - _startTime) / _duration);
            _nextToggle = Time.time + Mathf.Lerp(_startInterval, _endInterval, progress);
        }
    }
}

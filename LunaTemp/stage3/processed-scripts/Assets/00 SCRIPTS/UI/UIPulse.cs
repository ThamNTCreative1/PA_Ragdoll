using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Gentle breathing scale for call-to-action elements ("TAP TO PLAY", buttons).
    public sealed class UIPulse : MonoBehaviour
    {
        public float amount = 0.08f;
        public float speed = 4f;

        private Vector3 baseScale = Vector3.one;

        private void Awake()
        {
            baseScale = transform.localScale;
        }

        private void Update()
        {
            transform.localScale = baseScale * (1f + Mathf.Sin(Time.unscaledTime * speed) * amount);
        }
    }
}

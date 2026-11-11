using DG.Tweening;
using UnityEngine;

namespace Game.UI
{
    // Keeps a button gently pulsing (scale yoyo) while it is shown, like the intro's Next / Start.
    public class ButtonPulse : MonoBehaviour
    {
        [Tooltip("Scale the button pulses up to")]
        [SerializeField] private float pulseScale = 1.08f;
        [Tooltip("Seconds for one grow (or shrink)")]
        [SerializeField] private float pulseTime = 0.5f;
        [Tooltip("Wait before the first pulse (lets the screen's pop-in finish)")]
        [SerializeField] private float startDelay = 0.4f;

        private Tween _pulse;

        private void OnEnable()
        {
            _pulse?.Kill();
            transform.localScale = Vector3.one;
            // Unscaled, so it keeps going if gameplay time is ever paused under the screen.
            _pulse = transform.DOScale(Vector3.one * pulseScale, pulseTime).SetEase(Ease.InOutSine)
                .SetDelay(startDelay).SetLoops(-1, LoopType.Yoyo).SetUpdate(true);
        }

        private void OnDisable()
        {
            _pulse?.Kill();
            _pulse = null;
            transform.localScale = Vector3.one;
        }
    }
}

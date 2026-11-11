using DG.Tweening;
using Game.Core;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace Game.UI
{
    // Right-side zoom/size slider: publishes normalized value changes, fades when idle.
    [RequireComponent(typeof(CanvasGroup))]
    public class SideSliderPanel : MonoBehaviour, IPointerDownHandler
    {
        [SerializeField] private Slider slider;
        [SerializeField] private float idleDelay = 2f;
        [SerializeField] private float fadeDuration = 0.3f;
        [SerializeField] private float fadedAlpha = 0.3f;

        [Header("Zoom feedback")]
        [Tooltip("What bounces when the zoom changes. Left empty, the slider's own handle is used.")]
        [SerializeField] private RectTransform handleIcon;
        [Tooltip("How far the handle swells at the peak of the bounce, as a fraction of its size.")]
        [SerializeField] private float bounceScale = 0.18f;
        [SerializeField] private float bounceDuration = 0.25f;

        private CanvasGroup _group;
        private IEventBus _events;
        private IdleTimer _idle;
        private Tween _fadeTween;
        private Tween _bounceTween;
        private Vector3 _handleRestScale = Vector3.one;

        private void Awake()
        {
            _group = GetComponent<CanvasGroup>();
            _events = ServiceLocator.Get<IEventBus>();
            _idle = new IdleTimer(idleDelay);
            slider.onValueChanged.AddListener(OnValueChanged);
            _events.Subscribe<CameraZoomChangedEvent>(OnCameraZoomChanged);

            if (handleIcon == null) handleIcon = slider.handleRect;
            if (handleIcon != null) _handleRestScale = handleIcon.localScale;
        }

        // Mirror external zoom (scroll/pinch) silently via SetValueWithoutNotify to avoid an echo loop.
        private void OnCameraZoomChanged([Bridge.Ref] CameraZoomChangedEvent e)
        {
            slider.SetValueWithoutNotify(Mathf.Lerp(slider.minValue, slider.maxValue, e.Normalized));
            WakeUp();
            Bounce();
        }

        private void Update()
        {
            _idle.Tick(Time.deltaTime);
            if (_idle.IsIdle && _group.alpha > fadedAlpha)
                FadeOut();
        }

        private void OnValueChanged(float _)
        {
            _events.Publish(new SliderValueChangedEvent(slider.normalizedValue));
            WakeUp();
            Bounce();
        }

        // Let a running punch finish rather than restart, or the handle would wobble and never resolve.
        private void Bounce()
        {
            if (handleIcon == null) return;
            if (_bounceTween != null && _bounceTween.IsActive() && _bounceTween.IsPlaying()) return;

            handleIcon.localScale = _handleRestScale;
            _bounceTween = handleIcon
                .DOPunchScale(_handleRestScale * bounceScale, bounceDuration, vibrato: 6, elasticity: 0.5f)
                .SetUpdate(true)
                // Punch leaves a little residual drift; snap back so repeated zooms can't accumulate it.
                .OnComplete(() => handleIcon.localScale = _handleRestScale);
        }

        public void OnPointerDown(PointerEventData eventData) => WakeUp();

        private void WakeUp()
        {
            _idle.Reset();
            SetAlphaImmediate(1f);
        }

        private void FadeOut()
        {
            if (_fadeTween != null && _fadeTween.IsActive()) return;
            _fadeTween = _group.DOFade(fadedAlpha, fadeDuration);
        }

        private void SetAlphaImmediate(float target)
        {
            _fadeTween?.Kill();
            _fadeTween = null;
            _group.alpha = target;
        }

        private void OnDestroy()
        {
            _fadeTween?.Kill();
            _bounceTween?.Kill();
            _events?.Unsubscribe<CameraZoomChangedEvent>(OnCameraZoomChanged);
        }
    }
}

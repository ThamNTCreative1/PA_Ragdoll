using DG.Tweening;
using Game.Core;
using Game.Data;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace Game.UI
{
    // Purely visual press feedback; scales the button's own transform, never a child icon (which
    // PaletteItemCard uses for facing) to avoid the two fighting over the same value.
    [RequireComponent(typeof(Button))]
    public class UIButtonBounce : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IPointerClickHandler
    {
        [Tooltip("How far the button squashes while held. 1 = no squash.")]
        [SerializeField] private float pressedScale = 0.9f;
        [SerializeField] private float pressDuration = 0.07f;
        [Tooltip("Spring back to rest — Ease.OutBack is what gives the bounce its overshoot.")]
        [SerializeField] private float releaseDuration = 0.22f;
        [Tooltip("How far past rest the spring overshoots. 0 = settle flat, no bounce.")]
        [SerializeField] private float overshoot = 2.5f;

        private Button _button;
        private RectTransform _rect;
        private Vector3 _restScale;
        private Tween _tween;

        private void Awake()
        {
            _button = GetComponent<Button>();
            _rect = (RectTransform)transform;
            _restScale = _rect.localScale;
        }

        // Reset scale on disable, or a pooled card disabled mid-press stays parked squashed.
        private void OnDisable()
        {
            _tween?.Kill();
            _tween = null;
            _rect.localScale = _restScale;
        }

        private void OnDestroy() => _tween?.Kill();

        // The squash starts on press, so holding still feels immediate.
        public void OnPointerDown(PointerEventData eventData)
        {
            _armed = _button.IsInteractable();
            if (!_armed) return;
            ScaleTo(_restScale * pressedScale, pressDuration, Ease.OutQuad);
        }

        // Fires on release anywhere so a cancelled click never leaves the button stuck pressed.
        //
        // Every button in the game plays its click sound here, on the release that makes the click.
        // Not on press: a scroll begins as a press on whichever card is under the finger, so the
        // sound fired on every flick of the palette; uGUI drops eligibleForClick the moment a drag is
        // taken. Not in OnPointerClick either: the Button's own click handler runs first, and a button
        // that disables or hides itself on click (Next, Start) was already non-interactable by then.
        public void OnPointerUp(PointerEventData eventData)
        {
            ScaleTo(_restScale, releaseDuration, Ease.OutBack);
            bool click = _armed && eventData.eligibleForClick && IsOver(eventData);
            _armed = false;
            if (click && ServiceLocator.TryGet<SfxLibrarySO>(out var sfx)) PlayClick(sfx.uiClick);
        }

        // Kept for the interface; the sound is played on release (see OnPointerUp).
        public void OnPointerClick(PointerEventData eventData) { }

        private bool _armed;

        // On AudioController's persistent source when there is one: a Restart / Try Again reloads the
        // scene on this very click, which took the game's AudioService (and the sound) down with it.
        private static void PlayClick(AudioClip clip)
        {
            if (AudioController.Ins != null) AudioController.Ins.PlayUI(clip);
            else Sfx.PlayUI(clip);
        }

        private bool IsOver(PointerEventData eventData)
        {
            var over = eventData.pointerCurrentRaycast.gameObject;
            return over != null && over.transform.IsChildOf(transform);
        }

        private void ScaleTo(Vector3 target, float duration, Ease ease)
        {
            _tween?.Kill();
            // SetUpdate(true): UI feedback should stay responsive even if gameplay time is stopped.
            _tween = _rect.DOScale(target, duration).SetEase(ease, overshoot).SetUpdate(true);
        }
    }
}

using DG.Tweening;
using UnityEngine;

namespace Game.UI
{
    // Tutorial hand that taps in place, looping while it is shown (e.g. under the "TAP TO DROP" hint).
    // The hand Image is built in the scene (pivot on the fingertip, raycast off); this only animates it.
    public class TapHintHand : MonoBehaviour
    {
        [Tooltip("Hand scale at the bottom of the tap")]
        [SerializeField] private float pressScale = 0.8f;
        [Tooltip("How far the hand dips towards the screen on the tap (UI units)")]
        [SerializeField] private float pressDip = 14f;
        [SerializeField] private float pressTime = 0.15f;
        [SerializeField] private float releaseTime = 0.2f;
        [Tooltip("Pause between taps")]
        [SerializeField] private float holdTime = 0.55f;

        private RectTransform _rect;
        private Vector3 _baseScale;
        private Vector2 _basePos;
        private Sequence _loop;

        private void Awake()
        {
            _rect = (RectTransform)transform;
            _baseScale = _rect.localScale;
            _basePos = _rect.anchoredPosition;
        }

        private void OnEnable()
        {
            _loop?.Kill();
            _rect.localScale = _baseScale;
            _rect.anchoredPosition = _basePos;
            _loop = DOTween.Sequence();
            _loop.Append(_rect.DOScale(_baseScale * pressScale, pressTime).SetEase(Ease.OutQuad));
            _loop.Join(_rect.DOAnchorPosY(_basePos.y - pressDip, pressTime).SetEase(Ease.OutQuad));
            _loop.Append(_rect.DOScale(_baseScale, releaseTime).SetEase(Ease.OutBack));
            _loop.Join(_rect.DOAnchorPosY(_basePos.y, releaseTime).SetEase(Ease.OutQuad));
            _loop.AppendInterval(holdTime);
            _loop.SetLoops(-1).SetUpdate(true);
        }

        private void OnDisable()
        {
            _loop?.Kill();
            _loop = null;
            if (_rect == null) return;
            _rect.localScale = _baseScale;
            _rect.anchoredPosition = _basePos;
        }
    }
}

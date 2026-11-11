using System;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // Countdown shown before an ad break. Owns its canvas so it covers the HUD and any UIService screen,
    // and is built at runtime like UIIrisMask so it needs no prefab.
    public class AdBreakScreen : MonoBehaviour
    {
        private const int SortingOrder = 100;
        private const float RefWidth = 1920f;
        private const float RefHeight = 1080f;
        private const float FadeDuration = 0.3f;
        private const float DimAlpha = 0.45f;
        private const float FontSize = 52f;
        private const float TickPunch = 0.04f;
        private const float TickPunchDuration = 0.16f;
        private const float TickPunchElasticity = 0.15f;
        // A menu click or scene load can hand the first frame a delta of a second or more,
        // which used to eat a whole tick before the screen was even visible.
        private const float MaxDelta = 0.1f;

        private CanvasGroup _group;
        private TextMeshProUGUI _label;
        private string _message;
        private float _remaining;
        private int _shownSecond = -1;
        private Action _onComplete;
        private bool _finished;
        private bool _counting;

        public bool IsCountingDown => !_finished;

        public static AdBreakScreen Show(float seconds, Action onComplete = null, string message = "Ad Break In")
        {
            var go = new GameObject("AdBreakScreen", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster), typeof(CanvasGroup));
            DontDestroyOnLoad(go);

            var canvas = go.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = SortingOrder;

            var scaler = go.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(RefWidth, RefHeight);
            scaler.matchWidthOrHeight = 0.5f;

            var screen = go.AddComponent<AdBreakScreen>();
            screen._group = go.GetComponent<CanvasGroup>();
            screen._message = message;
            screen._onComplete = onComplete;
            screen._remaining = Mathf.Max(0f, seconds);

            screen.BuildDimmer((RectTransform)go.transform);
            screen._label = screen.BuildLabel((RectTransform)go.transform);
            screen.Refresh();

            screen._group.alpha = 0f;
            // Counting only starts once the screen is fully up, so the first number is always readable.
            screen._group.DOFade(1f, FadeDuration).SetUpdate(true).OnComplete(() => screen._counting = true);
            return screen;
        }

        // Dismiss without granting the break, e.g. when the ad fails to load.
        public void Cancel()
        {
            if (_finished) return;
            _finished = true;
            _onComplete = null;
            Close();
        }

        private void BuildDimmer(RectTransform root)
        {
            var go = new GameObject("Dim", typeof(RectTransform), typeof(Image));
            var rect = (RectTransform)go.transform;
            rect.SetParent(root, false);
            rect.anchorMin = Vector2.zero;
            rect.anchorMax = Vector2.one;
            rect.offsetMin = Vector2.zero;
            rect.offsetMax = Vector2.zero;

            var image = go.GetComponent<Image>();
            image.color = new Color(0f, 0f, 0f, DimAlpha);
            // Left as a raycast target so taps cannot reach the world underneath.
            image.raycastTarget = true;
        }

        private TextMeshProUGUI BuildLabel(RectTransform root)
        {
            var go = new GameObject("Label", typeof(RectTransform), typeof(TextMeshProUGUI));
            var rect = (RectTransform)go.transform;
            rect.SetParent(root, false);
            rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);
            rect.pivot = new Vector2(0.5f, 0.5f);
            rect.sizeDelta = new Vector2(RefWidth, 200f);
            rect.anchoredPosition = Vector2.zero;

            var text = go.GetComponent<TextMeshProUGUI>();
            text.alignment = TextAlignmentOptions.Center;
            text.fontSize = FontSize;
            text.color = Color.white;
            text.raycastTarget = false;
            return text;
        }

        // Unscaled: the sandbox is normally paused behind this.
        private void Update()
        {
            if (_finished || !_counting) return;

            _remaining -= Mathf.Min(Time.unscaledDeltaTime, MaxDelta);
            if (_remaining > 0f)
            {
                Refresh();
                return;
            }

            _finished = true;
            var callback = _onComplete;
            _onComplete = null;
            callback?.Invoke();
            Close();
        }

        // Assigning the string rebuilds the whole text mesh, so only write it when the digit changes.
        private void Refresh()
        {
            int second = Mathf.Max(0, Mathf.CeilToInt(_remaining));
            if (second == _shownSecond) return;

            bool isTick = _shownSecond >= 0;
            _shownSecond = second;
            _label.text = $"{_message}.. {second}";
            if (isTick) Punch();
        }

        private void Punch()
        {
            var rect = _label.rectTransform;
            rect.DOKill();
            rect.localScale = Vector3.one;
            rect.DOPunchScale(Vector3.one * TickPunch, TickPunchDuration, 1, TickPunchElasticity).SetUpdate(true);
        }

        private void Close()
        {
            _group.DOKill();
            _group.DOFade(0f, FadeDuration).SetUpdate(true).OnComplete(() => Destroy(gameObject));
        }

        private void OnDestroy()
        {
            _group.DOKill();
            if (_label != null) _label.rectTransform.DOKill();
        }
    }
}

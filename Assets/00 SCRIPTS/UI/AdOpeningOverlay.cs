using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // Covers the gap between tapping "watch" and the ad actually appearing. The SDK renders its
    // fullscreen activity asynchronously, and AdPause has already frozen the world by then, so
    // without this the player taps and stares at a dead screen for a second or more.
    public class AdOpeningOverlay : MonoBehaviour
    {
        private const int SortingOrder = 99;
        private const float RefWidth = 1920f;
        private const float RefHeight = 1080f;
        private const float FadeDuration = 0.15f;
        private const float DimAlpha = 0.7f;
        private const float FontSize = 44f;
        private const float DotInterval = 0.35f;
        // The ad covers this once it opens, so the only job left is to not outlive a show that
        // never happened. Long enough that a slow device still reaches its own callback first.
        private const float SafetyTimeout = 12f;

        private static AdOpeningOverlay _instance;

        private CanvasGroup _group;
        private TextMeshProUGUI _label;
        private string _message;
        private float _elapsed;
        private int _dots = -1;
        private float _autoHideAfter = -1f;
        private bool _animateDots = true;

        // Same dim panel, but self-dismissing and with no animated dots: used to tell the player an
        // ad could not be shown, which otherwise looks like the button simply did nothing.
        public static void Flash(string message, float seconds = 1.6f)
        {
            Hide();
            Show(message);
            if (_instance != null)
            {
                _instance._autoHideAfter = seconds;
                _instance._animateDots = false;
            }
        }

        public static void Show(string message = "Opening ad")
        {
            if (_instance != null) return;

            var go = new GameObject("AdOpeningOverlay", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster), typeof(CanvasGroup));
            DontDestroyOnLoad(go);

            var canvas = go.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = SortingOrder;

            var scaler = go.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(RefWidth, RefHeight);
            scaler.matchWidthOrHeight = 0.5f;

            _instance = go.AddComponent<AdOpeningOverlay>();
            _instance._group = go.GetComponent<CanvasGroup>();
            _instance._message = message;
            _instance.Build((RectTransform)go.transform);

            _instance._group.alpha = 0f;
            _instance._group.DOFade(1f, FadeDuration).SetUpdate(true);
        }

        public static void Hide()
        {
            if (_instance == null) return;
            var instance = _instance;
            _instance = null;
            instance.Close();
        }

        private void Build(RectTransform root)
        {
            var dimGo = new GameObject("Dim", typeof(RectTransform), typeof(Image));
            var dimRect = (RectTransform)dimGo.transform;
            dimRect.SetParent(root, false);
            dimRect.anchorMin = Vector2.zero;
            dimRect.anchorMax = Vector2.one;
            dimRect.offsetMin = Vector2.zero;
            dimRect.offsetMax = Vector2.zero;

            var image = dimGo.GetComponent<Image>();
            image.color = new Color(0f, 0f, 0f, DimAlpha);
            image.raycastTarget = true;

            var textGo = new GameObject("Label", typeof(RectTransform), typeof(TextMeshProUGUI));
            var textRect = (RectTransform)textGo.transform;
            textRect.SetParent(root, false);
            textRect.anchorMin = textRect.anchorMax = new Vector2(0.5f, 0.5f);
            textRect.pivot = new Vector2(0.5f, 0.5f);
            textRect.sizeDelta = new Vector2(RefWidth, 160f);
            textRect.anchoredPosition = Vector2.zero;

            _label = textGo.GetComponent<TextMeshProUGUI>();
            _label.alignment = TextAlignmentOptions.Center;
            _label.fontSize = FontSize;
            _label.color = Color.white;
            _label.raycastTarget = false;
            Refresh();
        }

        private void Update()
        {
            _elapsed += Time.unscaledDeltaTime;

            if (_autoHideAfter > 0f && _elapsed >= _autoHideAfter)
            {
                Hide();
                return;
            }

            if (_autoHideAfter < 0f && _elapsed >= SafetyTimeout)
            {
                Debug.LogWarning("[Ads] Opening overlay timed out; the ad never reported back.");
                Hide();
                return;
            }

            Refresh();
        }

        private void Refresh()
        {
            if (!_animateDots)
            {
                if (_dots == 0) return;
                _dots = 0;
                _label.text = _message;
                return;
            }

            int dots = Mathf.FloorToInt(_elapsed / DotInterval) % 4;
            if (dots == _dots) return;
            _dots = dots;
            _label.text = _message + new string('.', dots);
        }

        private void Close()
        {
            _group.DOKill();
            _group.DOFade(0f, FadeDuration).SetUpdate(true).OnComplete(() => { if (this != null) Destroy(gameObject); });
        }

        private void OnDestroy()
        {
            if (_instance == this) _instance = null;
            _group.DOKill();
        }
    }
}

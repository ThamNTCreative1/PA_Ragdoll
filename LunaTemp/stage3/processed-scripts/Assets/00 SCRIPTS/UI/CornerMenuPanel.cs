using DG.Tweening;
using Game.Core;
using Game.Gameplay;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // Corner toggle reveals a pill of quick-action buttons; its own icon just swaps menu/close.
    public class CornerMenuPanel : MonoBehaviour
    {
        [SerializeField] private GameObject revealedRowRoot;
        [SerializeField] private Button toggleButton;
        [SerializeField] private Image toggleIcon;
        [SerializeField] private Sprite menuSprite;
        [SerializeField] private Sprite closeSprite;
        [SerializeField] private Button soundButton;
        [SerializeField] private Image soundIcon;
        [SerializeField] private Sprite soundOnSprite;
        [SerializeField] private Sprite soundOffSprite;
        [SerializeField] private Button waterButton;
        [SerializeField] private Image bloodIcon;
        [SerializeField] private Sprite bloodOnSprite;
        [SerializeField] private Sprite bloodOffSprite;
        [SerializeField] private Button locationButton;
        [SerializeField] private string mapSelectionScreenKey = "ui/map-selection";
        [SerializeField] private RectTransform mailButton;
        [Tooltip("Button component on the mail circle")]
        [SerializeField] private Button mailInteractButton;
        [SerializeField] private string mailScreenKey = "ui/mail";
        [SerializeField] private float mailSlideOffset = 0f;

        [Header("Reveal animation — icons slide out from the corner into place")]
        [SerializeField] private RectTransform[] revealSequence;
        [SerializeField] private float staggerDelay = 0.05f;
        [SerializeField] private float slideDuration = 0.2f;
        [Tooltip("Opening. Decelerating (Out*) reads as the icons settling into place.")]
        [SerializeField] private Ease revealEase = Ease.OutCubic;
        [Tooltip("Closing. Accelerating (In*) reads as them being pulled back under the button.")]
        [SerializeField] private Ease collapseEase = Ease.InCubic;

        private readonly SoundToggleModel _sound = new SoundToggleModel();
        private readonly BloodEffectModel _blood = new BloodEffectModel();
        private IEventBus _events;
        private IUIService _uiService;
        private Sequence _revealSeq;
        private Tween _mailTween;
        private float _mailExpandedX;
        private HorizontalLayoutGroup _rowLayout;
        private Image _pillImage;
        private bool _expanded;
        // Resting X of each reveal item, measured once from the layout group; null until measured.
        private float[] _slotX;

        private void Awake()
        {
            _events = ServiceLocator.Get<IEventBus>();
            _uiService = ServiceLocator.Get<IUIService>();

            if (mailButton != null) _mailExpandedX = mailButton.anchoredPosition.x;
            _rowLayout = revealedRowRoot.GetComponent<HorizontalLayoutGroup>();
            _pillImage = revealedRowRoot.GetComponent<Image>();
            if (_pillImage != null && !_pillImage.enabled) _pillImage = null;

            toggleButton.onClick.AddListener(Toggle);
            soundButton.onClick.AddListener(OnSoundClicked);
            waterButton.onClick.AddListener(OnBloodToggleClicked);
            locationButton.onClick.AddListener(OnLocationClicked);
            if (mailInteractButton != null) mailInteractButton.onClick.AddListener(OnMailClicked);

            CollapseImmediate();
            ApplySoundVisual();
            BloodEffectSpawner.Enabled = _blood.IsEnabled;
            ApplyBloodVisual();
        }

        private void OnDestroy()
        {
            _revealSeq?.Kill();
            _mailTween?.Kill();
        }

        // The map selection screen anchors its X button and iris wipe on this button.
        public Vector3 LocationButtonPosition
            => locationButton != null ? locationButton.transform.position : Vector3.zero;

        // Actual on-screen pixel size, not the authored sizeDelta — this button and the X live on
        // different canvases, so only their rendered pixel sizes are comparable.
        public float LocationButtonPixelSize
        {
            get
            {
                if (locationButton == null) return 0f;
                var rect = (RectTransform)locationButton.transform;
                var canvas = rect.GetComponentInParent<Canvas>();
                float scale = canvas != null ? canvas.scaleFactor : 1f;
                return rect.rect.width * scale;
            }
        }

        // The menu and map buttons publish nothing on the bus, so unlike the other buttons in the
        // spec they have to report here.
        private void LogButton(string buttonName)
        {
            if (ServiceLocator.TryGet<IAnalyticsService>(out var analytics))
                analytics.LogEvent("button_click", AnalyticsParam.Text("button_name", buttonName));
        }

        private void Toggle()
        {
            LogButton("menu");
            if (_expanded) Collapse();
            else Expand();
        }

        private void Expand()
        {
            _expanded = true;
            ApplyToggleIcon();

            bool wasHidden = !revealedRowRoot.activeSelf;
            revealedRowRoot.SetActive(true);
            EnsureSlots();

            // Only a fresh open snaps icons to the corner; mid-collapse re-opens glide from where they are.
            if (wasHidden)
            {
                float originX = OriginX((RectTransform)revealedRowRoot.transform);
                for (int i = 0; i < revealSequence.Length; i++)
                    if (revealSequence[i] != null) SetX(revealSequence[i], originX);
                if (_pillImage != null) _pillImage.fillAmount = 0f;
            }

            PlayReveal(expanding: true);
            SlideMail(_mailExpandedX - PillWidth() + mailSlideOffset, revealEase);
        }

        // Layout group is measured once then switched off; left on, every open force-rebuilt the row
        // and teleported icons still mid-tween.
        private void EnsureSlots()
        {
            if (_slotX != null) return;

            if (_rowLayout != null) _rowLayout.enabled = true;
            LayoutRebuilder.ForceRebuildLayoutImmediate((RectTransform)revealedRowRoot.transform);

            _slotX = new float[revealSequence.Length];
            for (int i = 0; i < revealSequence.Length; i++)
                _slotX[i] = revealSequence[i] != null ? revealSequence[i].anchoredPosition.x : 0f;

            if (_rowLayout != null) _rowLayout.enabled = false;
        }

        private void Collapse()
        {
            _expanded = false;
            ApplyToggleIcon();

            if (revealedRowRoot.activeSelf) PlayReveal(expanding: false);
            else CollapseImmediate();

            SlideMail(_mailExpandedX, collapseEase);
        }

        private void CollapseImmediate()
        {
            _expanded = false;
            ApplyToggleIcon();
            _revealSeq?.Kill();
            if (_pillImage != null) _pillImage.fillAmount = 0f;
            revealedRowRoot.SetActive(false);
        }

        // Positions are owned entirely by these tweens (layout group is off, see EnsureSlots), so
        // nothing else writes to them and there is no snap when the sequence ends.
        private void PlayReveal(bool expanding)
        {
            _revealSeq?.Kill();

            var row = (RectTransform)revealedRowRoot.transform;
            float originX = OriginX(row);
            int count = revealSequence.Length;
            var ease = expanding ? revealEase : collapseEase;

            _revealSeq = DOTween.Sequence();
            for (int i = 0; i < count; i++)
            {
                var item = revealSequence[i];
                if (item == null) continue;

                float targetX = expanding ? _slotX[i] : originX;
                // Expand staggers nearest-first; collapse mirrors it, farthest-first.
                int order = expanding ? i : count - 1 - i;

                _revealSeq.Insert(order * staggerDelay,
                    item.DOAnchorPosX(targetX, slideDuration).SetEase(ease));
            }

            // Pill fill runs over the whole staggered span so its edge tracks the furthest icon.
            if (_pillImage != null)
            {
                float total = slideDuration + staggerDelay * Mathf.Max(0, count - 1);
                _revealSeq.Insert(0f,
                    _pillImage.DOFillAmount(expanding ? 1f : 0f, total).SetEase(ease));
            }

            if (!expanding) _revealSeq.OnComplete(() => revealedRowRoot.SetActive(false));
        }

        // Row-local X of the corner toggle button, where icons emerge from and return to.
        private float OriginX(RectTransform row)
        {
            if (toggleButton == null) return row.rect.width;
            Vector3 local = row.InverseTransformPoint(toggleButton.transform.position);
            return local.x + row.rect.width * row.pivot.x;
        }

        private void ApplyToggleIcon()
        {
            if (toggleIcon == null) return;
            var sprite = _expanded ? closeSprite : menuSprite;
            if (sprite != null) toggleIcon.sprite = sprite;
        }

        private float PillWidth() => ((RectTransform)revealedRowRoot.transform).rect.width;

        private void SlideMail(float targetX, Ease ease)
        {
            if (mailButton == null) return;
            _mailTween?.Kill();
            _mailTween = mailButton.DOAnchorPosX(targetX, slideDuration).SetEase(ease);
        }

        private static void SetX(RectTransform rect, float x)
        {
            var pos = rect.anchoredPosition;
            pos.x = x;
            rect.anchoredPosition = pos;
        }

        private void OnSoundClicked()
        {
            bool enabled = _sound.Toggle();
            AudioListener.volume = enabled ? 1f : 0f;
            ApplySoundVisual();
            _events.Publish(new SoundToggledEvent(enabled));
        }

        private void ApplySoundVisual()
        {
            if (soundIcon == null) return;
            var sprite = _sound.IsEnabled ? soundOnSprite : soundOffSprite;
            if (sprite != null) soundIcon.sprite = sprite;
        }

        private void OnBloodToggleClicked()
        {
            bool enabled = _blood.Toggle();
            BloodEffectSpawner.Enabled = enabled;
            ApplyBloodVisual();
            _events.Publish(new BloodEffectToggledEvent(enabled));
        }

        private void ApplyBloodVisual()
        {
            if (bloodIcon == null) return;
            var sprite = _blood.IsEnabled ? bloodOnSprite : bloodOffSprite;
            if (sprite != null) bloodIcon.sprite = sprite;
        }

        private async void OnLocationClicked()
        {
            LogButton("map");
            await _uiService.ShowScreenAsync(mapSelectionScreenKey);
        }

        private async void OnMailClicked() => await _uiService.ShowScreenAsync(mailScreenKey);
    }
}

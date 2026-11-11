using System;
using Game.Data;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    [RequireComponent(typeof(Button))]
    public class PaletteItemCard : MonoBehaviour
    {
        [SerializeField] private Image icon;
        [SerializeField] private GameObject selectedFrame;
        [Tooltip("Inset of the thumbnail inside the card.")]
        [SerializeField] private float iconPadding = 24f;

        [Header("Locked state")]
        [Tooltip("9-sliced frame drawn over the whole card while locked — the ad-rect-overlay sprite.")]
        [SerializeField] private Sprite lockedOverlaySprite;
        [Tooltip("Corner badge for an item unlocked by watching a rewarded ad — the ad-icon sprite.")]
        [SerializeField] private Sprite adBadgeSprite;
        [Tooltip("Corner badge for an item unlocked by completing something. Falls back to no badge if unset.")]
        [SerializeField] private Sprite taskBadgeSprite;
        [SerializeField] private Vector2 badgeSize = new Vector2(38f, 34f);
        [Tooltip("Badge inset from the card's bottom-right corner.")]
        [SerializeField] private Vector2 badgeOffset = new Vector2(-4f, 4f);
        [Tooltip("Thumbnail tint while locked, so the art reads as unavailable behind the frame.")]
        [SerializeField] private Color lockedIconTint = new Color(0.55f, 0.55f, 0.55f, 1f);

        private Action<string> _onClicked;
        private float _iconRotation;
        private Image _lockOverlay;
        private Image _lockBadge;

        public string ItemId { get; private set; }

        // Locked cards still take the click — the grid turns it into an unlock request.
        public bool IsLocked { get; private set; }

        // Tiles and explosives never mirror — see ItemFacing.
        public bool SupportsFacing { get; private set; }

        // Clears the previous listener, or a pooled reuse fires once per prior category switch.
        public void Init(ItemSO data, bool locked, Action<string> onClicked)
        {
            ItemId = data.itemId;
            _onClicked = onClicked;
            SupportsFacing = ItemFacing.Supports(data.type);

            _iconRotation = data.iconRotation;
            if (icon != null) icon.sprite = data.icon;
            // Always re-applied (not just when non-zero) since pooled cards keep the previous angle.
            SetFacing(1);
            ApplyIconFit(data.category != null && data.category.fullBleedIcons);
            ApplyLocked(locked, data.unlock.mode);

            var button = GetComponent<Button>();
            button.onClick.RemoveAllListeners();
            button.onClick.AddListener(() => _onClicked?.Invoke(ItemId));

            SetSelected(false);
        }

        public void SetSelected(bool selected)
        {
            if (selectedFrame != null) selectedFrame.SetActive(selected);
        }

        // Both branches always run: a pooled card would otherwise keep the previous item's lock.
        private void ApplyLocked(bool locked, ItemUnlockMode mode)
        {
            IsLocked = locked;
            if (icon != null) icon.color = locked ? lockedIconTint : Color.white;

            if (!locked)
            {
                if (_lockOverlay != null) _lockOverlay.gameObject.SetActive(false);
                if (_lockBadge != null) _lockBadge.gameObject.SetActive(false);
                return;
            }

            EnsureLockVisuals();

            if (_lockOverlay != null) _lockOverlay.gameObject.SetActive(lockedOverlaySprite != null);

            // No task badge art yet, so a task-locked item shows the frame alone rather than an
            // ad badge it would be wrong to advertise.
            var badge = mode == ItemUnlockMode.RewardedAd ? adBadgeSprite : taskBadgeSprite;
            if (_lockBadge == null) return;
            _lockBadge.sprite = badge;
            _lockBadge.gameObject.SetActive(badge != null);
        }

        // Built on first lock rather than in Awake, so categories with nothing gated cost nothing.
        private void EnsureLockVisuals()
        {
            if (_lockOverlay != null) return;
            var root = (RectTransform)transform;

            _lockOverlay = CreateOverlayImage("LockOverlay", root);
            _lockOverlay.sprite = lockedOverlaySprite;
            _lockOverlay.type = Image.Type.Sliced;
            var overlayRect = _lockOverlay.rectTransform;
            overlayRect.anchorMin = Vector2.zero;
            overlayRect.anchorMax = Vector2.one;
            overlayRect.offsetMin = Vector2.zero;
            overlayRect.offsetMax = Vector2.zero;

            _lockBadge = CreateOverlayImage("LockBadge", root);
            var badgeRect = _lockBadge.rectTransform;
            badgeRect.anchorMin = badgeRect.anchorMax = badgeRect.pivot = new Vector2(1f, 0f);
            badgeRect.sizeDelta = badgeSize;
            badgeRect.anchoredPosition = badgeOffset;
        }

        // raycastTarget stays off so the card's own Button still receives the tap: a locked card
        // must remain clickable, since clicking it is how the player asks to unlock it.
        private static Image CreateOverlayImage(string name, RectTransform parent)
        {
            var go = new GameObject(name, typeof(RectTransform), typeof(Image));
            var image = go.GetComponent<Image>();
            image.raycastTarget = false;
            var rect = image.rectTransform;
            rect.SetParent(parent, false);
            rect.SetAsLastSibling();
            return image;
        }

        // Full-card creature art needs no padding; weapon/prop icons need the inset to breathe.
        // Both branches always run since pooled cards would otherwise keep the previous fit.
        private void ApplyIconFit(bool fullBleed)
        {
            if (icon == null) return;
            float pad = fullBleed ? 0f : iconPadding;
            var rect = icon.rectTransform;
            rect.offsetMin = new Vector2(pad, pad);
            rect.offsetMax = new Vector2(-pad, -pad);
        }

        // Mirrors the thumbnail only, re-applied every time since pooled cards keep the previous facing.
        // The rotation sign flips too: Unity applies scale before rotation, so a plain mirror points down.
        public void SetFacing(int facing)
        {
            if (icon == null) return;
            float sign = SupportsFacing && facing < 0 ? -1f : 1f;
            var rect = icon.rectTransform;
            rect.localRotation = Quaternion.Euler(0f, 0f, _iconRotation * sign);
            var scale = rect.localScale;
            rect.localScale = new Vector3(Mathf.Abs(scale.x) * sign, scale.y, scale.z);
        }
    }
}

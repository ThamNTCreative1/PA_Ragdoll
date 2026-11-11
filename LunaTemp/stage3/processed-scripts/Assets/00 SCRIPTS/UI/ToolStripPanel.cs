using DG.Tweening;
using Game.Core;
using Game.Data;
using Game.Gameplay;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

namespace Game.UI
{
    // Vertical utility strip beside the palette; momentary buttons (collapse/swap/reset) react via
    // icon only, modal ones (delete/link) via background state, and arming one disarms the other.
    public class ToolStripPanel : MonoBehaviour
    {
        [SerializeField] private Button collapseButton;
        [Tooltip("Icon glyph on the collapse button")]
        [SerializeField] private RectTransform collapseIcon;
        [SerializeField] private Button swapButton;
        [SerializeField] private Button deleteButton;
        [FormerlySerializedAs("undoButton")]
        [SerializeField] private Button linkButton;
        [SerializeField] private Button resetButton;

        [SerializeField] private RectTransform panelToCollapse;
        [SerializeField] private float collapseDuration = 0.25f;
        [Tooltip("Playable: open with the palette already collapsed so the map is in view; the button expands it")]
        [SerializeField] private bool startCollapsed = true;
        [Tooltip("Playable: the palette is a bottom bar, so collapsing slides it (and this strip) down by its height instead of left by its width")]
        [SerializeField] private bool slideDown = true;
        [Tooltip("Collapse arrow rotation (Z) while the palette is open / collapsed")]
        [SerializeField] private float iconExpandedZ = 90f;
        [SerializeField] private float iconCollapsedZ = -90f;

        [Header("Swap button icon — the button changes meaning per category, so its glyph does too")]
        [Tooltip("Icon Image on the swap button.")]
        [SerializeField] private Image swapIcon;
        [Tooltip("Categories where swap flips the spawn facing.")]
        [SerializeField] private Sprite swapFacingSprite;
        [Tooltip("Tile category showing SOLID tiles — pressing switches to the background sheet.")]
        [SerializeField] private Sprite swapToBackgroundSprite;
        [Tooltip("Tile category showing BACKGROUND tiles — pressing switches back to solid.")]
        [SerializeField] private Sprite swapToSolidSprite;

        [Header("Reset button")]
        [Tooltip("Icon glyph on the reset button — spins one full clockwise turn on click.")]
        [SerializeField] private RectTransform resetIcon;
        [SerializeField] private float resetSpinDuration = 0.45f;

        [Header("Button background art (btn-state-3)")]
        [FormerlySerializedAs("bgNormalSprite")]
        [Tooltip("Usable, nothing toggled on.")]
        [SerializeField] private Sprite bgReadySprite;
        [FormerlySerializedAs("bgArmedSprite")]
        [Tooltip("Toggled on — delete or link mode armed.")]
        [SerializeField] private Sprite bgActiveSprite;
        [FormerlySerializedAs("bgDisabledSprite")]
        [Tooltip("Nothing to act on; the button is non-interactable too.")]
        [SerializeField] private Sprite bgUnactiveSprite;

        private readonly ToolStripModel _model = new ToolStripModel();
        private SwapAction _swapAction = SwapAction.Facing;
        private IEventBus _events;
        private IItemDatabase _items;
        private RectTransform _selfRect;
        private Vector2 _panelExpandedPos;
        private Vector2 _selfExpandedPos;
        private Vector2 _slideOffset;
        private Sequence _collapseSeq;
        private Tween _collapseIconTween;
        private Tween _resetSpinTween;

        private void Awake()
        {
            _events = ServiceLocator.Get<IEventBus>();
            _items = ServiceLocator.Get<IItemDatabase>();
            _selfRect = (RectTransform)transform;

            collapseButton.onClick.AddListener(OnCollapseClicked);
            swapButton.onClick.AddListener(OnSwapClicked);
            deleteButton.onClick.AddListener(OnDeleteClicked);
            linkButton.onClick.AddListener(OnLinkClicked);
            resetButton.onClick.AddListener(OnResetClicked);

            _events.Subscribe<CategorySelectedEvent>(OnCategorySelected);
            _events.Subscribe<PaletteItemSelectedEvent>(OnPaletteItemSelected);
            SpawnRegistry.Changed += RefreshModeButtons;

            // Momentary buttons never change background, so this is the only time they are set.
            ApplyState(collapseButton, ToolButtonState.Ready);
            ApplyState(resetButton, ToolButtonState.Ready);

            RefreshSwapVisual();
            RefreshModeButtons();
        }

        private void Start()
        {
            // Measured in Start so layout has had a pass and panelToCollapse.rect is settled.
            _panelExpandedPos = panelToCollapse.anchoredPosition;
            _selfExpandedPos = _selfRect.anchoredPosition;
            _slideOffset = slideDown
                ? new Vector2(0f, -panelToCollapse.rect.height)
                : new Vector2(-panelToCollapse.rect.width, 0f);

            // Same end state the collapse button reaches, applied instantly instead of animated.
            if (startCollapsed && !_model.IsCollapsed)
            {
                _model.ToggleCollapse();
                panelToCollapse.anchoredPosition = _panelExpandedPos + _slideOffset;
                _selfRect.anchoredPosition = _selfExpandedPos + _slideOffset;
                if (collapseIcon != null) collapseIcon.localRotation = Quaternion.Euler(0f, 0f, iconCollapsedZ);
                _events.Publish(new PanelCollapsedEvent(true));
            }
        }

        private void OnDestroy()
        {
            _collapseSeq?.Kill();
            _collapseIconTween?.Kill();
            _resetSpinTween?.Kill();
            _events?.Unsubscribe<CategorySelectedEvent>(OnCategorySelected);
            _events?.Unsubscribe<PaletteItemSelectedEvent>(OnPaletteItemSelected);
            SpawnRegistry.Changed -= RefreshModeButtons;
        }

        private void OnCollapseClicked()
        {
            bool collapsed = _model.ToggleCollapse();
            _events.Publish(new PanelCollapsedEvent(collapsed));

            _collapseSeq?.Kill();

            Vector2 panelTarget = collapsed ? _panelExpandedPos + _slideOffset : _panelExpandedPos;
            Vector2 selfTarget = collapsed ? _selfExpandedPos + _slideOffset : _selfExpandedPos;
            _collapseSeq = DOTween.Sequence()
                .Append(panelToCollapse.DOAnchorPos(panelTarget, collapseDuration).SetEase(Ease.Linear))
                .Join(_selfRect.DOAnchorPos(selfTarget, collapseDuration).SetEase(Ease.Linear));

            // Arrow points away from the palette while collapsed (an "expand me" hint).
            if (collapseIcon != null)
            {
                _collapseIconTween?.Kill();
                float targetZ = collapsed ? iconCollapsedZ : iconExpandedZ;
                _collapseIconTween = collapseIcon.DORotate(new Vector3(0f, 0f, targetZ), collapseDuration);
            }
        }

        private void OnSwapClicked()
        {
            if (_swapAction == SwapAction.TileSheet)
            {
                _model.ToggleSwapVariant();
                _events.Publish(new SwapRequestedEvent());
            }
            else
            {
                _events.Publish(new SpawnFacingChangedEvent(_model.ToggleSpawnFacing()));
            }

            RefreshSwapVisual();
        }

        private void OnDeleteClicked()
        {
            bool enabled = _model.ToggleDeleteMode();
            if (enabled) DisarmLink();
            _events.Publish(new DeleteModeToggledEvent(enabled));
            RefreshModeButtons();
        }

        private void OnLinkClicked()
        {
            bool enabled = _model.ToggleLinkMode();
            if (enabled) DisarmDelete();
            _events.Publish(new LinkModeToggledEvent(enabled));
            RefreshModeButtons();
        }

        private void OnResetClicked()
        {
            _events.Publish(new ResetRequestedEvent());

            // Momentary: background stays Ready, glyph spins one full turn back to its start.
            if (resetIcon == null) return;
            _resetSpinTween?.Kill();
            resetIcon.localRotation = Quaternion.identity;
            _resetSpinTween = resetIcon
                .DORotate(new Vector3(0f, 0f, -360f), resetSpinDuration, RotateMode.FastBeyond360)
                .SetEase(Ease.OutCubic)
                .OnComplete(() => resetIcon.localRotation = Quaternion.identity);
        }

        // Picking something to place says the player is done deleting or linking.
        private void OnPaletteItemSelected([Bridge.Ref] PaletteItemSelectedEvent e)
        {
            if (string.IsNullOrEmpty(e.ItemId)) return; // toggled the card off; no new intent
            DisarmDelete();
            DisarmLink();
            RefreshModeButtons();
        }

        // Swap slot hides for categories with nothing to do (e.g. Explosives), else changes meaning.
        private void OnCategorySelected([Bridge.Ref] CategorySelectedEvent e)
        {
            _swapAction = ToolStripModel.SwapActionFor(_items.All, e.CategoryId);
            swapButton.gameObject.SetActive(_swapAction != SwapAction.None);
            RefreshSwapVisual();

            // Switching category is a change of intent — neither modal tool should stay armed.
            DisarmDelete();
            DisarmLink();
            RefreshModeButtons();
        }

        // Momentary: background stays Ready; the glyph shows what pressing WILL DO, not current state.
        private void RefreshSwapVisual()
        {
            ApplyState(swapButton, ToolButtonState.Ready);

            if (swapIcon == null) return;
            var sprite = _swapAction == SwapAction.TileSheet
                ? _model.IsShowingSwapVariant ? swapToSolidSprite : swapToBackgroundSprite
                : swapFacingSprite;
            if (sprite != null) swapIcon.sprite = sprite;
        }

        // Modal buttons auto-disarm when unavailable, rather than staying silently armed.
        private void RefreshModeButtons()
        {
            bool canDelete = SpawnRegistry.HasAny;
            bool canLink = SpawnRegistry.LinkableCount >= 2;

            if (!canDelete) DisarmDelete();
            if (!canLink) DisarmLink();

            ApplyState(deleteButton, ModeState(canDelete, _model.IsDeleteModeEnabled));
            ApplyState(linkButton, ModeState(canLink, _model.IsLinkModeEnabled));
        }

        private static ToolButtonState ModeState(bool available, bool armed)
            => !available ? ToolButtonState.Unactive
                : armed ? ToolButtonState.Active
                : ToolButtonState.Ready;

        private void DisarmDelete()
        {
            if (!_model.IsDeleteModeEnabled) return;
            _model.ToggleDeleteMode();
            _events.Publish(new DeleteModeToggledEvent(false));
        }

        private void DisarmLink()
        {
            if (!_model.IsLinkModeEnabled) return;
            _model.ToggleLinkMode();
            _events.Publish(new LinkModeToggledEvent(false));
        }

        // Drives the button's targetGraphic between the three btn-state-3 sprites.
        private void ApplyState(Button button, ToolButtonState state)
        {
            button.interactable = state != ToolButtonState.Unactive;
            Image bg = button.targetGraphic as Image;
            if (bg == null) return;
            bg.sprite = (state == ToolButtonState.Active ? bgActiveSprite
                : state == ToolButtonState.Unactive ? bgUnactiveSprite
                : bgReadySprite);
        }
    }
}

using DG.Tweening;
using Game.Core;
using Game.Data;
using Game.Gameplay;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // Playable weapon picker: a row of weapon cards built in the scene. Tapping one equips that weapon
    // on the player creature, then the panel slides up off the top of the screen. A world Reset
    // (player respawns unarmed) brings it back up.
    public class WeaponSelectPanel : MonoBehaviour
    {
        [System.Serializable]
        public class Option
        {
            public Button button;
            public ItemSO weapon;
            [Tooltip("Highlight frame shown on the picked card")]
            public GameObject selectedFrame;
        }

        // What tapping a card does with its item.
        public enum PickAction
        {
            EquipPlayer,   // weapon straight into the player's hand
            ArmSpawnTool,  // arm the tap-to-place spawner with it (bombs, potions), like the source palette
        }

        [SerializeField] private PickAction pickAction = PickAction.EquipPlayer;
        [SerializeField] private PlayableBootstrap bootstrap;
        [SerializeField] private Option[] options = new Option[0];
        [Tooltip("\"CHOOSE ONE WEAPON\" prompt: shown with the picker, hidden as soon as a weapon is picked")]
        [SerializeField] private GameObject prompt;
        [Tooltip("ArmSpawnTool: \"TAP TO DROP\" hint shown once an item is picked, hidden after the first drop")]
        [SerializeField] private GameObject dropHint;
        [Tooltip("Picker that slides in once this one has slid away (weapon picker → special item picker)")]
        [SerializeField] private WeaponSelectPanel nextPanel;
        [Tooltip("Pause between this picker finishing its exit and nextPanel rising")]
        [SerializeField] private float nextPanelDelay = 0.5f;
        [Tooltip("Off for a picker that only follows another one: a reset hides it instead of bringing it back")]
        [SerializeField] private bool showOnReset = true;

        [Header("Hide effect")]
        [Tooltip("Pause on the picked card before the panel slides away")]
        [SerializeField] private float hideDelay = 0.15f;
        [SerializeField] private float hideDuration = 0.35f;
        [SerializeField] private Ease hideEase = Ease.InBack;
        [SerializeField] private float showDuration = 0.35f;
        [SerializeField] private Ease showEase = Ease.OutBack;
        [Tooltip("Extra distance past the top screen edge the panel travels to")]
        [SerializeField] private float hideMargin = 40f;

        private RectTransform _rect;
        private Vector2 _shownPos;
        private IEventBus _events;
        private Tween _slide;
        private Tween _nextDelay;
        private bool _picked;

        // The item on the card the player picked (null until then).
        public ItemSO PickedItem { get; private set; }

        // Raised when a picker slides into view, with what it does (EquipPlayer = weapon list,
        // ArmSpawnTool = special item list). LunaController can put the end card up at that moment.
        public static event System.Action<PickAction> Shown;

        private void Awake()
        {
            _rect = (RectTransform)transform;
            _shownPos = _rect.anchoredPosition;
            for (int i = 0; i < options.Length; i++)
            {
                var option = options[i];
                if (option == null || option.button == null) continue;
                option.button.onClick.AddListener(() => OnPicked(option));
                if (option.selectedFrame != null) option.selectedFrame.SetActive(false);
            }
            if (ServiceLocator.TryGet(out _events)) _events.Subscribe<ResetRequestedEvent>(OnReset);
        }

        private void OnDestroy()
        {
            _slide?.Kill();
            _nextDelay?.Kill();
            _events?.Unsubscribe<ResetRequestedEvent>(OnReset);
            ItemSpawnTool.Dropped -= OnDropped;
        }

        private void OnPicked(Option option)
        {
            if (_picked || option.weapon == null) return;
            if (pickAction == PickAction.EquipPlayer)
            {
                if (bootstrap == null || !bootstrap.EquipPlayer(option.weapon)) return;
            }
            else
            {
                if (_events == null) return;
                _events.Publish(new PaletteItemSelectedEvent(option.weapon.itemId));
                AwaitDrop(); // the hint itself waits until this picker has gone
            }
            _picked = true;
            PickedItem = option.weapon;
            if (prompt != null) prompt.SetActive(false);

            for (int i = 0; i < options.Length; i++)
            {
                var o = options[i];
                if (o == null) continue;
                if (o.selectedFrame != null) o.selectedFrame.SetActive(o == option);
                if (o.button != null) o.button.interactable = false;
            }

            float hiddenY = HiddenY();
            _slide?.Kill();
            _slide = _rect.DOAnchorPosY(hiddenY, hideDuration).SetEase(hideEase).SetDelay(hideDelay)
                .OnComplete(() =>
                {
                    gameObject.SetActive(false);
                    // "TAP TO DROP" only once the special item picker is out of the way — and not at all
                    // if the player already dropped something while it was sliding off.
                    if (_awaitingDrop && dropHint != null) dropHint.SetActive(true);
                    if (nextPanel == null) return;
                    // Not tied to this object's tweens: it is inactive by now.
                    _nextDelay = DOVirtual.DelayedCall(nextPanelDelay, nextPanel.Show);
                });
        }

        private bool _awaitingDrop;

        // Watches for the first drop from the pick on; the hint is shown later (see OnPicked).
        private void AwaitDrop()
        {
            if (dropHint == null) return;
            _awaitingDrop = true;
            ItemSpawnTool.Dropped -= OnDropped;
            ItemSpawnTool.Dropped += OnDropped;
        }

        private void HideDropHint()
        {
            _awaitingDrop = false;
            ItemSpawnTool.Dropped -= OnDropped;
            if (dropHint != null) dropHint.SetActive(false);
        }

        private void OnDropped(ItemSO item) => HideDropHint();

        // Playable intro: the picker starts hidden and slides down from above the screen when called.
        public void Show()
        {
            gameObject.SetActive(true); // first activation runs Awake, which records the shown position
            if (prompt != null) prompt.SetActive(!_picked);
            _slide?.Kill();
            _rect.anchoredPosition = new Vector2(_shownPos.x, HiddenY());
            _slide = _rect.DOAnchorPos(_shownPos, showDuration).SetEase(showEase);
            if (Shown != null) Shown(pickAction);
        }

        // Above the top edge of the screen: far enough up that the panel's bottom edge clears the top of
        // the whole canvas (not just the SafeArea, so nothing shows under a notch), plus a margin.
        private float HiddenY()
        {
            var canvas = GetComponentInParent<Canvas>();
            var root = canvas != null ? canvas.rootCanvas.transform as RectTransform : null;
            if (root == null) return _shownPos.y + _rect.rect.height + hideMargin;

            // The panel's bottom edge at its shown position, in root canvas units.
            Vector2 offset = _rect.anchoredPosition - _shownPos;
            var corners = new Vector3[4];
            _rect.GetWorldCorners(corners);
            float bottomNow = root.InverseTransformPoint(corners[0]).y;
            float bottom = bottomNow - offset.y * ScaleToRoot(root);
            float rise = (root.rect.yMax - bottom) / ScaleToRoot(root);
            return _shownPos.y + rise + hideMargin;
        }

        // How many root canvas units one of the parent's units is (normally 1).
        private float ScaleToRoot(RectTransform root)
        {
            var parent = _rect.parent;
            if (parent == null) return 1f;
            float s = root.InverseTransformVector(parent.TransformVector(Vector3.up)).y;
            return Mathf.Approximately(s, 0f) ? 1f : s;
        }

        private void OnReset(ResetRequestedEvent e)
        {
            if (!showOnReset)
            {
                _slide?.Kill();
                // Disarm the spawner too: the world was just rebuilt, nothing is chosen any more.
                if (_picked && pickAction == PickAction.ArmSpawnTool) _events?.Publish(new PaletteItemSelectedEvent(string.Empty));
                HideDropHint();
                ResetCards();
                gameObject.SetActive(false);
                return;
            }
            if (!_picked) return;
            ResetCards();
            gameObject.SetActive(true);
            _slide?.Kill();
            _slide = _rect.DOAnchorPos(_shownPos, showDuration).SetEase(showEase);
        }

        private void ResetCards()
        {
            _picked = false;
            PickedItem = null;
            if (prompt != null) prompt.SetActive(true);
            for (int i = 0; i < options.Length; i++)
            {
                var o = options[i];
                if (o == null) continue;
                if (o.selectedFrame != null) o.selectedFrame.SetActive(false);
                if (o.button != null) o.button.interactable = true;
            }
        }
    }
}

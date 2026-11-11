using DG.Tweening;
using Game.Core;
using Game.Data;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // Inbox button. Shows a badge the moment anything is unlocked, and reveals the unread items one
    // at a time when pressed.
    //
    // This is why unlocks no longer announce themselves automatically: a badge the player opens when
    // ready never interrupts, and unlike a banner it cannot be missed by looking away.
    //
    // Two ways to show the unread state, both optional, so the art can be built either way:
    //   badge object  — a child shown/hidden (what MainUI's Mail-btn uses: "havenoti")
    //   sprite swap   — one image flipped between two sprites
    [RequireComponent(typeof(Button))]
    public class MailButton : MonoBehaviour
    {
        [Tooltip("Child shown only while something is unread, e.g. the red dot.")]
        [SerializeField] private GameObject unreadBadge;

        [Header("Sprite swap (optional alternative to the badge)")]
        [Tooltip("Image to swap. Leave empty when using a badge object.")]
        [SerializeField] private Image icon;
        [SerializeField] private Sprite idleSprite;
        [SerializeField] private Sprite unreadSprite;

        [Header("Reveal")]
        [Tooltip("The unlock tree, opened on click.")]
        [SerializeField] private UnlockCollectionScreen collectionPrefab;

        [Header("Bob — runs for as long as anything is unread")]
        [Tooltip("How far the button lifts, in canvas units.")]
        [SerializeField] private float bobHeight = 14f;
        [Tooltip("Seconds for one half of the bob (up, then down).")]
        [SerializeField] private float bobDuration = 0.45f;

        private IUnlockInbox _inbox;
        private Tween _bob;
        private bool _wasUnread;
        // Captured before the bob ever runs, so stopping it always restores the authored height.
        private float _restY;

        private void Awake()
        {
            // Optional: a scene opened without the bootstrapper just shows the idle state.
            if (ServiceLocator.TryGet(out _inbox)) _inbox.Changed += OnInboxChanged;

            GetComponent<Button>().onClick.AddListener(OnClicked);

            _restY = ((RectTransform)transform).anchoredPosition.y;
            Refresh();
            _wasUnread = HasUnread;
        }

        private void OnDestroy()
        {
            if (_inbox != null) _inbox.Changed -= OnInboxChanged;
            _bob?.Kill();
        }

        private bool HasUnread => _inbox != null && _inbox.HasUnread;

        private void OnInboxChanged()
        {
            bool unread = HasUnread;
            Refresh();
            // Only on the transition into "you have mail" — not on the read that clears it.
            if (unread && !_wasUnread && ServiceLocator.TryGet<SfxLibrarySO>(out var sfx))
                Sfx.PlayUI(sfx.mailArrived);
            _wasUnread = unread;
        }

        private void Refresh()
        {
            bool unread = HasUnread;

            if (unreadBadge != null) unreadBadge.SetActive(unread);

            // Both sprites required: swapping to a null one would blank the button.
            if (icon != null && idleSprite != null && unreadSprite != null)
                icon.sprite = unread ? unreadSprite : idleSprite;

            if (unread) StartBob();
            else StopBob();
        }

        // Bobs the button on Y only. The corner menu slides this same RectTransform on X when the
        // pill opens; DOAnchorPosX and DOAnchorPosY each write a single axis, so the two coexist
        // instead of fighting over anchoredPosition.
        private void StartBob()
        {
            if (_bob != null && _bob.IsActive()) return;

            var rect = (RectTransform)transform;
            _bob = rect.DOAnchorPosY(_restY + bobHeight, bobDuration)
                .SetEase(Ease.InOutSine)
                .SetLoops(-1, LoopType.Yoyo)
                .SetUpdate(true);
        }

        private void StopBob()
        {
            if (_bob == null) return;
            _bob.Kill();
            _bob = null;

            // Killing mid-flight leaves the button wherever it was, so put it back down by hand.
            var rect = (RectTransform)transform;
            var pos = rect.anchoredPosition;
            pos.y = _restY;
            rect.anchoredPosition = pos;
        }

        // Always opens the tree — the button is the way in to the goals, not only a notification,
        // so it has to work with nothing unread. The unlock itself was already announced by the
        // toast; marking read here means the badge tracks "seen the tree", not "seen the reward".
        private void OnClicked()
        {
            // Read before clearing: MarkAllRead empties the list this comes from. Unread is oldest
            // first, so the last entry is the most recent unlock — the one worth landing on.
            string newest = null;
            if (_inbox != null && _inbox.UnreadCount > 0)
                newest = _inbox.Unread[_inbox.UnreadCount - 1];

            _inbox?.MarkAllRead();
            UnlockCollectionScreen.Show(collectionPrefab, newest);
        }
    }
}

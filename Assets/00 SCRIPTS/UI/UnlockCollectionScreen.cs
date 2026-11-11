using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Game.Core;
using Game.Data;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // The unlock tree. Every gated item laid out along its prerequisite chain, so a card answers
    // both "what do I do" and "what does it lead to" — the second is what carries a player past the
    // first unlock, and a flat list cannot show it.
    //
    // Chains are derived from ItemUnlock.prerequisite at open time; nothing about the layout is
    // authored, so adding a prerequisite in the inspector reshapes this screen with no code change.
    public class UnlockCollectionScreen : MonoBehaviour
    {
        [SerializeField] private CanvasGroup group;
        [SerializeField] private RectTransform panel;
        [Tooltip("Needed to scroll a freshly unlocked item into view.")]
        [SerializeField] private ScrollRect scrollRect;
        [Tooltip("Content root of the ScrollRect — one row is added per chain.")]
        [SerializeField] private RectTransform content;
        [SerializeField] private UnlockCollectionCard cardPrefab;
        [SerializeField] private Button closeButton;
        [Tooltip("Optional full-screen dim; tapping it closes.")]
        [SerializeField] private Button dimButton;

        [Header("Row layout")]
        [SerializeField] private float rowSpacing = 12f;
        [SerializeField] private float rowHeight = 250f;

        [Tooltip("Drawn between chain steps so the order to do them in is visible, not inferred.")]
        [SerializeField] private Sprite arrowSprite;
        [SerializeField] private Vector2 arrowSize = new Vector2(56f, 56f);
        [Tooltip("Arrow colour once the step it points at is reachable.")]
        [SerializeField] private Color arrowActive = new Color(0.65f, 0.68f, 0.74f, 1f);
        [Tooltip("Arrow colour while the step it points at is still gated.")]
        [SerializeField] private Color arrowDim = new Color(0.26f, 0.27f, 0.31f, 1f);

        [Header("Animation")]
        [SerializeField] private float fadeDuration = 0.2f;
        [SerializeField] private float openFromScale = 0.94f;

        private bool _closing;
        private string _focusItemId;
        private RectTransform _focusCard;

        // focusItemId scrolls that item into view on open — what the player just earned, so they do
        // not have to hunt for it in a tree that may be several screens tall.
        public static UnlockCollectionScreen Show(UnlockCollectionScreen prefab, string focusItemId = null)
        {
            if (prefab == null)
            {
                Debug.LogError("[UI] No UnlockCollectionScreen prefab assigned on MailButton.");
                return null;
            }

            var screen = Instantiate(prefab);
            DontDestroyOnLoad(screen.gameObject);
            screen._focusItemId = focusItemId;
            screen.Build();
            screen.PlayOpen();
            if (screen._focusCard != null) screen.StartCoroutine(screen.ScrollToFocus());
            return screen;
        }

        // Deferred a frame: ContentSizeFitter and the nested layout groups need a full pass before
        // content height is real, and scrolling against a stale height lands nowhere near the card.
        private IEnumerator ScrollToFocus()
        {
            yield return null;

            if (scrollRect == null || content == null || _focusCard == null) yield break;

            Canvas.ForceUpdateCanvases();
            LayoutRebuilder.ForceRebuildLayoutImmediate(content);

            var viewport = scrollRect.viewport != null ? scrollRect.viewport : (RectTransform)scrollRect.transform;
            float scrollable = content.rect.height - viewport.rect.height;
            if (scrollable <= 1f) yield break; // everything already fits; nothing to move

            // Rows run downward from the content's top edge, so anchoredPosition.y is negative.
            var row = _focusCard.parent as RectTransform;
            float rowTop = row != null ? -row.anchoredPosition.y : -_focusCard.anchoredPosition.y;
            float rowHeight_ = row != null ? row.rect.height : _focusCard.rect.height;

            // Centre it rather than pinning to the top, so the neighbours it chains to stay visible.
            float target = rowTop - (viewport.rect.height - rowHeight_) * 0.5f;
            float normalized = 1f - Mathf.Clamp01(target / scrollable);

            scrollRect.velocity = Vector2.zero; // kill any inertia so it does not drift off again
            scrollRect.verticalNormalizedPosition = normalized;

            Pulse(_focusCard);
        }

        // A short beat on the card itself — scrolling puts it on screen, this says which one.
        private static void Pulse(RectTransform card)
        {
            card.DOKill();
            card.localScale = Vector3.one;
            card.DOPunchScale(Vector3.one * 0.08f, 0.5f, 1, 0.4f).SetUpdate(true);
        }

        private void Build()
        {
            if (content == null || cardPrefab == null) return;
            if (!ServiceLocator.TryGet<IItemDatabase>(out var items)) return;
            if (!ServiceLocator.TryGet<IUnlockService>(out var unlocks)) return;

            if (closeButton != null) closeButton.onClick.AddListener(Close);
            if (dimButton != null) dimButton.onClick.AddListener(Close);

            // Gated items only. The 100-plus free tiles are building material, not goals, and would
            // bury the handful of things the player can actually work toward.
            var gated = new List<ItemSO>();
            foreach (var item in items.All)
                if (item != null && item.unlock.IsLockable) gated.Add(item);

            // Roots are chain starts: no prerequisite, or one that is not itself a goal.
            var roots = new List<ItemSO>();
            foreach (var item in gated)
            {
                var prereq = item.unlock.prerequisite;
                if (prereq == null || !prereq.unlock.IsLockable) roots.Add(item);
            }

            // Sort so the closest-to-done chains sit at the top: that is the "one more thing" pull.
            roots.Sort((a, b) => Rank(a, unlocks).CompareTo(Rank(b, unlocks)));

            foreach (var root in roots)
                BuildRow(root, gated, unlocks);
        }

        // Unlocked chains sink, chains in progress float, untouched ones sit between.
        private static int Rank(ItemSO item, IUnlockService unlocks)
        {
            if (unlocks.IsUnlocked(item)) return 2;
            return unlocks.ProgressOf(item.itemId) > 0 ? 0 : 1;
        }

        private void BuildRow(ItemSO root, List<ItemSO> gated, IUnlockService unlocks)
        {
            var row = new GameObject("Chain_" + root.itemId, typeof(RectTransform),
                typeof(HorizontalLayoutGroup));
            var rowRect = (RectTransform)row.transform;
            rowRect.SetParent(content, false);

            var layout = row.GetComponent<HorizontalLayoutGroup>();
            layout.spacing = rowSpacing;
            // childControl* default to FALSE on AddComponent, which makes the group ignore every
            // LayoutElement and use each child's raw rect instead. A freshly created RectTransform
            // is 0x0, so without these the whole row collapses and its cards draw on top of
            // each other.
            layout.childControlWidth = true;
            layout.childControlHeight = true;
            layout.childForceExpandWidth = false;
            layout.childForceExpandHeight = false;
            layout.childAlignment = TextAnchor.MiddleLeft;

            var fitter = row.AddComponent<LayoutElement>();
            fitter.minHeight = rowHeight;
            fitter.preferredHeight = rowHeight;
            fitter.flexibleHeight = 0f;

            // Walk the chain forward. Guarded against a cycle, which authoring can create and which
            // would otherwise spin here forever.
            var node = root;
            for (int depth = 0; node != null && depth < 16; depth++)
            {
                // Between steps, not before the first — the arrow means "then this".
                if (depth > 0) AddArrow(rowRect, unlocks.IsUnlocked(node.unlock.prerequisite));
                AddCard(rowRect, node, unlocks);
                node = NextIn(node, gated);
            }
        }

        // Dim while the step ahead is still locked off, so the eye stops at the card to act on.
        private void AddArrow(RectTransform row, bool reached)
        {
            if (arrowSprite == null) return;

            var go = new GameObject("Arrow", typeof(RectTransform), typeof(Image), typeof(LayoutElement));
            var rect = (RectTransform)go.transform;
            rect.SetParent(row, false);

            var image = go.GetComponent<Image>();
            image.sprite = arrowSprite;
            image.preserveAspect = true;
            image.raycastTarget = false;
            image.color = reached ? arrowActive : arrowDim;

            var element = go.GetComponent<LayoutElement>();
            element.preferredWidth = arrowSize.x;
            element.preferredHeight = arrowSize.y;
            element.flexibleWidth = 0f;
        }

        private static ItemSO NextIn(ItemSO current, List<ItemSO> gated)
        {
            foreach (var candidate in gated)
                if (candidate.unlock.prerequisite == current) return candidate;
            return null;
        }

        private void AddCard(RectTransform row, ItemSO item, IUnlockService unlocks)
        {
            var card = Instantiate(cardPrefab, row, false);

            UnlockCardState state;
            if (unlocks.IsUnlocked(item)) state = UnlockCardState.Unlocked;
            else if (unlocks.IsAvailable(item)) state = UnlockCardState.Available;
            else state = UnlockCardState.Gated;

            string gateText = null;
            if (state == UnlockCardState.Gated)
            {
                var gate = item.unlock.prerequisite;
                while (gate != null && unlocks.IsUnlocked(gate)) gate = gate.unlock.prerequisite;
                if (gate != null)
                    gateText = "Unlock " +
                        (string.IsNullOrEmpty(gate.displayName) ? gate.itemId : gate.displayName) + " first";
            }

            // Display pair, not the raw counter: a Completion item reports other goals done.
            card.Bind(item, state, unlocks.DisplayProgress(item), unlocks.DisplayRequired(item), gateText);

            if (_focusItemId != null && item.itemId == _focusItemId)
                _focusCard = (RectTransform)card.transform;
        }

        private void PlayOpen()
        {
            if (group != null)
            {
                group.alpha = 0f;
                group.DOFade(1f, fadeDuration).SetUpdate(true);
            }
            if (panel == null) return;
            panel.localScale = Vector3.one * openFromScale;
            panel.DOScale(1f, fadeDuration).SetEase(Ease.OutBack).SetUpdate(true);
        }

        private void Close()
        {
            if (_closing) return;
            _closing = true;

            if (group == null) { Destroy(gameObject); return; }
            group.DOKill();
            if (panel != null) panel.DOKill();
            group.DOFade(0f, fadeDuration).SetUpdate(true).OnComplete(() => Destroy(gameObject));
        }

        private void OnDestroy()
        {
            if (group != null) group.DOKill();
            if (panel != null) panel.DOKill();
        }
    }
}

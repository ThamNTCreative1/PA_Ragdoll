using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.UI
{
    // The subscriber for ItemUnlockRequestedEvent: confirm -> ad -> grant. Created by the
    // bootstrapper rather than placed in a scene, so no prefab has to carry it.
    public class UnlockFlow : MonoBehaviour
    {
        private IEventBus _events;
        private IItemDatabase _items;
        private IUnlockService _unlocks;
        private ItemUnlockPopup _popupPrefab;
        private UnlockToast _toastPrefab;
        private ItemUnlockPopup _popup;

        public static UnlockFlow Create(ItemUnlockPopup popupPrefab, UnlockToast toastPrefab)
        {
            var go = new GameObject(nameof(UnlockFlow));
            DontDestroyOnLoad(go);
            var flow = go.AddComponent<UnlockFlow>();
            flow._popupPrefab = popupPrefab;
            flow._toastPrefab = toastPrefab;
            return flow;
        }

        private void Awake()
        {
            _events = ServiceLocator.Get<IEventBus>();
            _items = ServiceLocator.Get<IItemDatabase>();
            _unlocks = ServiceLocator.Get<IUnlockService>();
            _events.Subscribe<ItemUnlockRequestedEvent>(OnUnlockRequested);
            _unlocks.Unlocked += OnUnlocked;
        }

        private void OnDestroy()
        {
            _events?.Unsubscribe<ItemUnlockRequestedEvent>(OnUnlockRequested);
            if (_unlocks != null) _unlocks.Unlocked -= OnUnlocked;
        }

        // Announced the moment it happens, whichever route earned it. The mail badge is a separate,
        // longer-lived signal: the toast says "this just happened", the badge says "you have not
        // looked at the tree since", and only opening the tree clears that.
        private void OnUnlocked(string itemId)
        {
            if (_items.TryResolve(itemId, out var item))
                UnlockToast.Show(_toastPrefab, item);
        }

        private void OnUnlockRequested([Bridge.Ref] ItemUnlockRequestedEvent e)
        {
            // Guards a double tap: the second request would otherwise stack a second popup.
            if (_popup != null) return;
            if (!_items.TryResolve(e.ItemId, out var item) || _unlocks.IsUnlocked(item)) return;

            // Gated behind another item: no ad button, because watching one could not grant it.
            bool available = _unlocks.IsAvailable(item);
            bool byAd = available && item.unlock.mode == ItemUnlockMode.RewardedAd;

            var gate = available ? null : Gate(item);

            _popup = ItemUnlockPopup.Show(
                _popupPrefab,
                item,
                byAd ? (System.Action)(() => OnWatchConfirmed(item)) : null,
                () => _popup = null,
                gate != null ? GateText(gate) : null,
                // The blocking item's own art, so the clue shows what to go and unlock.
                gate != null ? gate.icon : null);
        }

        // The first still-locked link in the chain, which is the one the player can act on —
        // pointing at a gate three steps away would just be confusing.
        private ItemSO Gate(ItemSO item)
        {
            var gate = item.unlock.prerequisite;
            while (gate != null && _unlocks.IsUnlocked(gate)) gate = gate.unlock.prerequisite;
            return gate;
        }

        private static string GateText(ItemSO gate)
        {
            string name = string.IsNullOrEmpty(gate.displayName) ? gate.itemId : gate.displayName;
            return $"Unlock {name} first";
        }

        // Straight to the video — a rewarded ad is already user-initiated by the popup's Watch button,
        // so an AdBreak countdown in front of it would be friction with nothing to warn about. That
        // countdown belongs to interstitials, which arrive unasked.
        private void OnWatchConfirmed(ItemSO item)
        {
            _popup = null;
            string placement = RewardPlacements.For(item);

            // Reported on the tap, not on the reward: the spec measures intent to unlock, which a
            // player who abandons the video still expressed.
            if (ServiceLocator.TryGet<IAnalyticsService>(out var analytics))
            {
                analytics.LogEvent("item_unlock",
                    AnalyticsParam.Text("item_id", item.itemId),
                    AnalyticsParam.Text("item_group", item.categoryId ?? string.Empty),
                    AnalyticsParam.Text("unlock_type", "rewarded_ads"));
            }

            // Resolved per click, not cached: the ad bridge registers itself and may come up after
            // this object does.
            if (!ServiceLocator.TryGet<IAdService>(out var ads))
            {
                OnAdUnavailable(item, placement);
                return;
            }

            // The SDK opens its fullscreen activity asynchronously and AdPause has already frozen
            // the world, so without this the player taps and watches a dead screen until it lands.
            AdOpeningOverlay.Show();
            bool reported = false;

            bool shown = ads.TryShowRewarded(
                placement,
                () =>
                {
                    reported = true;
                    AdOpeningOverlay.Hide();
                    _unlocks.AddProgress(item.itemId);
                },
                () =>
                {
                    reported = true;
                    AdOpeningOverlay.Hide();
                    OnAdUnavailable(item, placement);
                });

            if (shown) return;

            // A refused show has already run onFailed; reporting again would double the message.
            AdOpeningOverlay.Hide();
            if (!reported) OnAdUnavailable(item, placement);
        }

        // Nothing stands in for a missing ad — no reward without a watched video, in any build.
        // In the editor the SDK serves its own stub creative, so reaching here means the ad stack
        // itself did not come up rather than that there was no fill.
        private void OnAdUnavailable(ItemSO item, string placement)
        {
            AdOpeningOverlay.Flash("No ad available right now");
            Debug.LogWarning($"[Unlocks] Rewarded ad unavailable for '{item.itemId}' (placement '{placement}'); " +
                             "nothing granted. Check that HAVIGAME initialized and a rewarded ad unit is configured.");
        }
    }
}

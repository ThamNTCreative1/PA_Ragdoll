using System;
using System.Collections.Generic;
using Game.Data;
using UnityEngine;

namespace Game.Services
{
    // PlayerPrefs-backed unlock state, one int per gated item holding progress so far. "Unlocked"
    // is derived from progress >= requirement rather than stored separately, so raising an item's
    // requirement in the editor re-locks it instead of leaving a stale flag behind.
    public class UnlockService : IUnlockService
    {
        private const string KeyPrefix = "unlock.";

        private readonly IItemDatabase _items;
        private readonly Dictionary<string, int> _progress = new Dictionary<string, int>();

        public event Action<string> Unlocked;

        // Progress is cached in memory on construction; PlayerPrefs is only touched on writes.
        public UnlockService(IItemDatabase items)
        {
            _items = items;
            if (items?.All == null) return;

            foreach (var item in items.All)
            {
                if (item == null || !item.unlock.IsLockable || string.IsNullOrEmpty(item.itemId)) continue;
                int saved = PlayerPrefs.GetInt(KeyPrefix + item.itemId, 0);
                if (saved > 0) _progress[item.itemId] = saved;
            }
        }

        // Unknown ids are treated as ungated: map layouts and spawn code resolve items that never
        // reach the palette, and those must not be blocked by a lock they were never given.
        public bool IsUnlocked(string itemId)
            => !TryResolveLockable(itemId, out var item) || IsUnlocked(item);

        public bool IsUnlocked(ItemSO item)
        {
            if (item == null || !item.unlock.IsLockable) return true;
            return ProgressOf(item.itemId) >= item.unlock.RequiredCount;
        }

        // Walks the chain rather than checking one link, so a three-deep ladder cannot be entered
        // halfway. Depth-capped: a prerequisite loop authored by mistake would otherwise hang here.
        public bool IsAvailable(ItemSO item)
        {
            const int MaxDepth = 16;
            var gate = item != null ? item.unlock.prerequisite : null;

            for (int depth = 0; gate != null; depth++)
            {
                if (depth >= MaxDepth)
                {
                    Debug.LogError($"[Unlocks] Prerequisite chain from '{item.itemId}' is too deep or loops.");
                    return false;
                }
                if (!IsUnlocked(gate)) return false;
                gate = gate.unlock.prerequisite;
            }
            return true;
        }

        public int ProgressOf(string itemId)
            => itemId != null && _progress.TryGetValue(itemId, out int value) ? value : 0;

        public int DisplayProgress(ItemSO item)
        {
            if (item == null) return 0;
            if (item.unlock.mode != ItemUnlockMode.Completion) return ProgressOf(item.itemId);

            int done = 0;
            foreach (var other in _items.All)
                if (CountsTowardCompletion(other, item) && IsUnlocked(other)) done++;
            return done;
        }

        public int DisplayRequired(ItemSO item)
        {
            if (item == null) return 1;
            if (item.unlock.mode != ItemUnlockMode.Completion) return item.unlock.RequiredCount;

            int total = 0;
            foreach (var other in _items.All)
                if (CountsTowardCompletion(other, item)) total++;
            return Mathf.Max(1, total);
        }

        // Other completion items are excluded, or two of them would each wait on the other forever.
        private static bool CountsTowardCompletion(ItemSO other, ItemSO self)
            => other != null && other != self
               && other.unlock.IsLockable
               && other.unlock.mode != ItemUnlockMode.Completion;

        // Re-evaluated after every unlock. Writing progress and raising Unlocked here is what makes
        // the completion reward announce itself through the toast and mail like any other.
        private bool _checkingCompletion;

        private void CheckCompletion()
        {
            if (_checkingCompletion || _items?.All == null) return;
            _checkingCompletion = true;
            try
            {
                foreach (var item in _items.All)
                {
                    if (item == null || item.unlock.mode != ItemUnlockMode.Completion) continue;
                    if (IsUnlocked(item)) continue;
                    if (DisplayProgress(item) < DisplayRequired(item)) continue;

                    Write(item.itemId, item.unlock.RequiredCount);
                    Unlocked?.Invoke(item.itemId);
                }
            }
            finally { _checkingCompletion = false; }
        }

        public bool AddProgress(string itemId, int amount = 1)
        {
            if (amount <= 0) return false;
            if (!TryResolveLockable(itemId, out var item) || IsUnlocked(item)) return false;
            // No banking progress toward something still gated behind another item.
            if (!IsAvailable(item)) return false;

            int required = item.unlock.RequiredCount;
            int next = Mathf.Min(ProgressOf(itemId) + amount, required);
            Write(itemId, next);

            if (next < required) return false;
            Unlocked?.Invoke(itemId);
            CheckCompletion();
            return true;
        }

        public void Grant(string itemId)
        {
            if (!TryResolveLockable(itemId, out var item) || IsUnlocked(item)) return;
            Write(itemId, item.unlock.RequiredCount);
            Unlocked?.Invoke(itemId);
            CheckCompletion();
        }

        public void ResetAll()
        {
            // Copied because Unlocked handlers are free to re-enter and read state while we clear.
            var cleared = new List<string>(_progress.Keys);
            _progress.Clear();
            foreach (var itemId in cleared) PlayerPrefs.DeleteKey(KeyPrefix + itemId);
            PlayerPrefs.Save();
        }

        private bool TryResolveLockable(string itemId, out ItemSO item)
        {
            item = null;
            if (_items == null || !_items.TryResolve(itemId, out item)) return false;
            return item.unlock.IsLockable;
        }

        // Unlocks are rare enough (a handful per session) that flushing on every write is cheaper
        // than risking the loss of an ad the player actually sat through.
        private void Write(string itemId, int value)
        {
            _progress[itemId] = value;
            PlayerPrefs.SetInt(KeyPrefix + itemId, value);
            PlayerPrefs.Save();
        }
    }
}

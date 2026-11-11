using System;
using System.Collections.Generic;
using UnityEngine;

namespace Game.Gameplay
{
    // Tracks everything spawned through ItemCreator so the tool strip's Undo/Reset buttons
    // have something to act on. Static like TileGrid — one world, no scenes to juggle.
    public static class SpawnRegistry
    {
        private static readonly List<GameObject> _spawned = new List<GameObject>();

        // Raised after Register/RemoveLast/ClearAll so UI (e.g. the tool strip's spawn-gated
        // buttons) can refresh without polling every frame.
        public static event Action Changed;

        // Bulk placement coalesces into one raise at the end: listeners walk the whole list to answer, so
        // raising per cell made loading quadratic in the number of tiles.
        private static int _bulkDepth;
        private static bool _changedDuringBulk;

        // True while a map is loading. Lets callers tell "the player placed this" from "the world
        // was built", which task progress cares about and the tool strip does not.
        public static bool IsBulk => _bulkDepth > 0;

        public static void BeginBulk() => _bulkDepth++;

        public static void EndBulk()
        {
            if (_bulkDepth > 0) _bulkDepth--;
            if (_bulkDepth != 0 || !_changedDuringBulk) return;
            _changedDuringBulk = false;
            Changed?.Invoke();
        }

        private static void RaiseChanged()
        {
            if (_bulkDepth > 0)
            {
                _changedDuringBulk = true;
                return;
            }
            Changed?.Invoke();
        }

        // An entry already destroyed some other way (e.g. an exploded block) doesn't count —
        // this is "is there really something left to act on", not just a non-empty list.
        public static bool HasAny
        {
            get
            {
                foreach (var instance in _spawned)
                    if (instance != null) return true;
                return false;
            }
        }

        // A link ties together anything in the world, tiles included, so this is just how many
        // things are left alive; the tool strip greys its link button out below two.
        public static int LinkableCount
        {
            get
            {
                int count = 0;
                for (int i = 0; i < _spawned.Count; i++)
                    if (_spawned[i] != null) count++;
                return count;
            }
        }

        public static void Register(GameObject instance)
        {
            _spawned.Add(instance);
            RaiseChanged();
        }

        // Removes the most recently spawned object still alive — an entry already destroyed
        // some other way (e.g. an exploded block) is skipped rather than treated as "nothing to undo".
        public static void RemoveLast()
        {
            for (int i = _spawned.Count - 1; i >= 0; i--)
            {
                var instance = _spawned[i];
                _spawned.RemoveAt(i);
                if (instance == null) continue;
                UnityEngine.Object.Destroy(instance);
                break;
            }
            RaiseChanged();
        }

        public static void ClearAll()
        {
            foreach (var instance in _spawned)
                if (instance != null) UnityEngine.Object.Destroy(instance);
            _spawned.Clear();
            RaiseChanged();
        }
    }
}

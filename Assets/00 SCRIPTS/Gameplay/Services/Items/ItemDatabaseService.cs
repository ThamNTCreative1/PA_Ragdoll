using System.Collections.Generic;
using Game.Data;
using UnityEngine;

namespace Game.Services
{
    // Id -> ItemSO lookup built from the category assets' ordered item lists.
    public class ItemDatabaseService : IItemDatabase
    {
        private readonly Dictionary<string, ItemSO> _byId = new Dictionary<string, ItemSO>();
        private readonly List<ItemSO> _all = new List<ItemSO>();
        private readonly List<UICategorySO> _categories = new List<UICategorySO>();

        // Palette-visible items only — indestructible blocks are excluded but still resolvable via TryResolve.
        public IReadOnlyList<ItemSO> All => _all;
        public IReadOnlyList<UICategorySO> Categories => _categories;

        // config is optional (tests can omit it); when present, hides indestructible items from the palette.
        public ItemDatabaseService(IReadOnlyList<UICategorySO> categories, GameConfigSO config = null)
        {
            if (categories == null) return;

            foreach (var category in categories)
                if (category != null && !string.IsNullOrEmpty(category.categoryId))
                    _categories.Add(category);
            _categories.Sort((a, b) => a.sortOrder.CompareTo(b.sortOrder));

            foreach (var category in _categories)
            {
                if (category.items == null) continue;
                foreach (var item in category.items)
                {
                    if (item == null || string.IsNullOrEmpty(item.itemId)) continue;
                    if (_byId.TryGetValue(item.itemId, out var existing))
                    {
                        Debug.LogError($"[Items] Duplicate itemId '{item.itemId}': keeping '{existing.name}', ignoring '{item.name}'");
                        continue;
                    }
                    // Always registered by id so map layouts can resolve it, even if excluded from the palette.
                    _byId[item.itemId] = item;
                    if (config == null || !config.IsIndestructible(item)) _all.Add(item);
                }
            }
        }

        public bool TryResolve(string itemId, out ItemSO item)
        {
            item = null;
            return itemId != null && _byId.TryGetValue(itemId, out item);
        }
    }
}

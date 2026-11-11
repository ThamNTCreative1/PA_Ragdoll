using System;
using UnityEngine;

namespace Game.Data
{
    public enum ItemFilterMode
    {
        Any = 0,
        ByType = 1,
        ByCategory = 2,
        ById = 3,
        // Normal vs Zombie. ItemType only says "Creature"; this is how a task says which kind.
        ByCreatureType = 4,
    }

    // The "noun" half of a task. Widening from one item to a whole type or category is what makes
    // tasks composable — "spawn 5 creatures" and "spawn 5 zombies" are the same condition at
    // different resolutions.
    [Serializable]
    public class ItemFilter
    {
        public ItemFilterMode mode = ItemFilterMode.Any;

        public ItemType itemType = ItemType.Creature;

        public UICategorySO category;

        // An asset reference rather than a typed id: it cannot go stale when an item is renamed,
        // and it gives Describe() a display name instead of printing "creature-thehorn" at players.
        public ItemSO specificItem;

        public CreatureType creatureType = CreatureType.Zombie;

        // Art for this noun, when the filter names something concrete enough to have any. ByType,
        // ByCreatureType and Any describe a set with no single asset behind it, so they stay text.
        public Sprite Icon => (mode == ItemFilterMode.ById ? (specificItem != null ? specificItem.icon : null)
            : mode == ItemFilterMode.ByCategory ? (category != null ? category.icon : null)
            : null);

        public bool Matches(ItemSO item)
        {
            if (item == null) return false;
            return (mode == ItemFilterMode.ByType ? (item.type == itemType)
                : mode == ItemFilterMode.ByCategory ? (category != null && item.category == category)
                : mode == ItemFilterMode.ById ? (specificItem != null && item.itemId == specificItem.itemId)
                : mode == ItemFilterMode.ByCreatureType ? (item.type == ItemType.Creature && item.creature != null && item.creature.type == creatureType)
                : true);
        }

        // Feeds the generated task description, so a designer sees the sentence they just built.
        public string Describe(int count) => (mode == ItemFilterMode.ByType ? (Pluralize(itemType.ToString(), count))
            : mode == ItemFilterMode.ByCategory ? (category != null ? Pluralize(category.displayName, count) : Pluralize("item", count))
            : mode == ItemFilterMode.ById ? (specificItem == null ? Pluralize("item", count) : Pluralize(string.IsNullOrEmpty(specificItem.displayName) ? specificItem.itemId : specificItem.displayName, count))
            : mode == ItemFilterMode.ByCreatureType ? (Pluralize(creatureType.ToString(), count))
            : (Pluralize("item", count)));

        private static string Pluralize(string word, int count)
        {
            if (count == 1 || string.IsNullOrEmpty(word)) return word;
            return word.EndsWith("s", StringComparison.OrdinalIgnoreCase) ? word : word + "s";
        }
    }
}

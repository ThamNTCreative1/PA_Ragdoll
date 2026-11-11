using System.Collections.Generic;
using Game.Data;

namespace Game.UI
{
    // Pure filtering/selection logic, no MonoBehaviour — testable without a scene.
    public class PaletteGridModel
    {
        private readonly IReadOnlyList<ItemSO> _allItems;

        public string CurrentCategoryId { get; private set; }
        public string SelectedItemId { get; private set; }

        // Which tile sheet the palette shows for tile items; non-tile items are unaffected.
        public bool ShowBackgroundTiles { get; private set; }

        public PaletteGridModel(IReadOnlyList<ItemSO> allItems) => _allItems = allItems;

        public bool ToggleTileMode()
        {
            ShowBackgroundTiles = !ShowBackgroundTiles;
            return ShowBackgroundTiles;
        }

        public IReadOnlyList<ItemSO> SetCategory(string categoryId)
        {
            CurrentCategoryId = categoryId;
            SelectedItemId = null;
            return GetItemsForCategory(categoryId);
        }

        // Order comes straight from the category's item list — no sort key.
        public IReadOnlyList<ItemSO> GetItemsForCategory(string categoryId)
        {
            var result = new List<ItemSO>();
            foreach (var item in _allItems)
            {
                if (item.categoryId != categoryId) continue;
                if (item.type == ItemType.Tile && item.tile.isBackgroundTile != ShowBackgroundTiles) continue;
                result.Add(item);
            }
            return result;
        }

        public bool SelectItem(string itemId)
        {
            // Re-clicking the selected card deselects it, handing drag/pan control back to the player.
            if (itemId != null && itemId == SelectedItemId)
            {
                SelectedItemId = null;
                return true;
            }
            if (CurrentCategoryId == null) return false;

            var exists = false;
            foreach (var item in _allItems)
            {
                if (item.itemId == itemId && item.categoryId == CurrentCategoryId)
                {
                    exists = true;
                    break;
                }
            }
            if (!exists) return false;

            SelectedItemId = itemId;
            return true;
        }
    }
}

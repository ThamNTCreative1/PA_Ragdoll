using System.Collections.Generic;
using Game.Data;

namespace Game.UI
{
    // Pure toggle state for the tool strip, no MonoBehaviour — testable without a scene.
    public class ToolStripModel
    {
        public bool IsCollapsed { get; private set; }
        public bool IsDeleteModeEnabled { get; private set; }
        public bool IsLinkModeEnabled { get; private set; }
        public bool IsShowingSwapVariant { get; private set; }

        // Global facing (ItemFacing.Right/Left), kept across category switches.
        public int SpawnFacing { get; private set; } = ItemFacing.Right;

        public bool ToggleCollapse()
        {
            IsCollapsed = !IsCollapsed;
            return IsCollapsed;
        }

        public bool ToggleDeleteMode()
        {
            IsDeleteModeEnabled = !IsDeleteModeEnabled;
            return IsDeleteModeEnabled;
        }

        public bool ToggleLinkMode()
        {
            IsLinkModeEnabled = !IsLinkModeEnabled;
            return IsLinkModeEnabled;
        }

        // Tracks swap button state for display only; PaletteGridModel owns the actual filtering.
        public bool ToggleSwapVariant()
        {
            IsShowingSwapVariant = !IsShowingSwapVariant;
            return IsShowingSwapVariant;
        }

        public int ToggleSpawnFacing()
        {
            SpawnFacing = -SpawnFacing;
            return SpawnFacing;
        }

        // Swap button is contextual: tiles swap sheets, facing-capable items turn round, else none.
        public static SwapAction SwapActionFor(IReadOnlyList<ItemSO> items, string categoryId)
        {
            var action = SwapAction.None;
            foreach (var item in items)
            {
                if (item.categoryId != categoryId) continue;
                if (item.type == ItemType.Tile) return SwapAction.TileSheet; // tiles win outright
                if (ItemFacing.Supports(item.type)) action = SwapAction.Facing;
            }
            return action;
        }
    }
}

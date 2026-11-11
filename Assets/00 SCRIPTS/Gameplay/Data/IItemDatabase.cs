using System.Collections.Generic;

namespace Game.Data
{
    // Resolves palette item ids to items and exposes the registered set.
    public interface IItemDatabase
    {
        bool TryResolve(string itemId, out ItemSO item);
        // All items in category order, then list order — the palette draw order.
        IReadOnlyList<ItemSO> All { get; }
        // Palette categories (top-bar tabs), sorted by sortOrder.
        IReadOnlyList<UICategorySO> Categories { get; }
    }
}

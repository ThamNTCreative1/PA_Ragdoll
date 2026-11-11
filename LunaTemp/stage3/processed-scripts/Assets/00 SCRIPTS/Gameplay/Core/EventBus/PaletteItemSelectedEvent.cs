namespace Game.Core
{
    public struct PaletteItemSelectedEvent
    {
        public readonly string ItemId;
        public PaletteItemSelectedEvent(string itemId) => ItemId = itemId;
    }
}

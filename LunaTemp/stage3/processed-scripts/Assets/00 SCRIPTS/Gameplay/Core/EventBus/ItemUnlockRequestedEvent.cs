namespace Game.Core
{
    // A locked palette card was tapped. Nothing is granted here — the unlock flow reads the item's
    // ItemUnlock block to decide whether to offer a rewarded ad or show the task requirement.
    public struct ItemUnlockRequestedEvent
    {
        public readonly string ItemId;
        public ItemUnlockRequestedEvent(string itemId) => ItemId = itemId;
    }
}

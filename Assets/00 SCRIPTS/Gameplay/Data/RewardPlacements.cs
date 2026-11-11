namespace Game.Data
{
    // The six rewarded placements the monetization spec reports on.
    //
    // Derived from the item's category, never from its id: a per-item placement would create a new
    // bucket for every ad-gated item added, splitting the funnel into slices too small to read and
    // breaking comparisons against earlier data every time the catalogue grows.
    public static class RewardPlacements
    {
        public const string Creature = "reward_unlock_creature";
        public const string Weapon = "reward_unlock_weapon";
        public const string Block = "reward_unlock_block";
        public const string Object = "reward_unlock_object";
        public const string Costume = "reward_unlock_costume";
        public const string Map = "reward_unlock_map";

        // An authored override still wins, for the odd item that has earned its own placement.
        public static string For(ItemSO item)
        {
            if (item == null) return Object;
            if (item.unlock != null && !string.IsNullOrEmpty(item.unlock.adPlacement))
                return item.unlock.adPlacement;
            return FromCategory(item.categoryId);
        }

        // Explosives have no bucket of their own in the spec and sit under the general one.
        public static string FromCategory(string categoryId)
        {
            switch (categoryId)
            {
                case "creatures": return Creature;
                case "weapon": return Weapon;
                case "tile": return Block;
                case "wearable": return Costume;
                case "explosive":
                case "other": return Object;
                default: return Object;
            }
        }
    }
}

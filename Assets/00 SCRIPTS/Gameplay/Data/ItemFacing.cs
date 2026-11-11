namespace Game.Data
{
    // Which way a spawned item's art is mirrored. Tiles and explosives don't support facing.
    public static class ItemFacing
    {
        public const int Right = 1;
        public const int Left = -1;

        public static bool Supports(ItemType type) => type != ItemType.Tile && type != ItemType.Explosive;

        // Callers pass raw toggle results, so normalise anything non-negative to Right.
        public static int Sign(int facing) => facing < 0 ? Left : Right;
    }
}

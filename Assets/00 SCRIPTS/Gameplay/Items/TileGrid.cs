using System.Collections.Generic;
using UnityEngine;

namespace Game.Gameplay
{
    // Occupancy registry for placed tiles: one solid block plus one background tile per cell.
    public static class TileGrid
    {
// Matches the tile sheets' native sprite size (48px at 96 PPU).
        public const float CellSize = 0.5f;

        private static readonly Dictionary<Vector2Int, TileEntity> _blocks = new Dictionary<Vector2Int, TileEntity>();
        private static readonly Dictionary<Vector2Int, TileEntity> _backgrounds = new Dictionary<Vector2Int, TileEntity>();

        public static Vector2Int WorldToCell(Vector2 world)
            => new Vector2Int(Mathf.FloorToInt(world.x / CellSize), Mathf.FloorToInt(world.y / CellSize));

        public static Vector2 CellCenter(Vector2Int cell)
            => new Vector2((cell.x + 0.5f) * CellSize, (cell.y + 0.5f) * CellSize);

        public static bool IsOccupied(Vector2Int cell, bool background) => Map(background).ContainsKey(cell);

        // One merged collider means block hits resolve by cell position.
        public static bool TryGetBlockAt(Vector2 world, out TileEntity tile)
            => _blocks.TryGetValue(WorldToCell(world), out tile);

        // One merged collider means block hits resolve by position, not by which collider was hit.
        public static bool TryGet(Vector2Int cell, bool background, out TileEntity tile)
            => Map(background).TryGetValue(cell, out tile);

        public static void Register(Vector2Int cell, TileEntity tile) => Map(tile.IsBackground)[cell] = tile;

        public static void Unregister(Vector2Int cell, TileEntity tile)
        {
            var map = Map(tile.IsBackground);
            if (map.TryGetValue(cell, out var current) && current == tile) map.Remove(cell);
        }

        private static Dictionary<Vector2Int, TileEntity> Map(bool background)
            => background ? _backgrounds : _blocks;
    }
}

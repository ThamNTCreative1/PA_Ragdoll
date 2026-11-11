using System.Collections.Generic;
using UnityEngine;

namespace Game.Gameplay
{
    // Heals damaged tiles back up. Only tiles actually hit are ticked — a map is thousands of tiles and
    // almost none are damaged, so an Update on every one would pay full price for a handful.
    public class TileRecoveryDriver : MonoBehaviour
    {
        private static TileRecoveryDriver _instance;

        private readonly List<TileEntity> _healing = new List<TileEntity>();

        // Damaging a tile is what brings the driver into being. The caller guards against adding
        // itself twice, so this never scans the list.
        public static void Track(TileEntity tile)
        {
            if (tile == null) return;
            if (_instance == null)
                _instance = new GameObject(nameof(TileRecoveryDriver)).AddComponent<TileRecoveryDriver>();
            _instance._healing.Add(tile);
        }

        private void Update()
        {
            float dt = Time.deltaTime;
            for (int i = _healing.Count - 1; i >= 0; i--)
            {
                var tile = _healing[i];
                if (tile == null || tile.TickRecovery(dt)) _healing.RemoveAt(i);
            }
        }

        private void OnDestroy()
        {
            _healing.Clear();
            if (_instance == this) _instance = null;
        }
    }
}

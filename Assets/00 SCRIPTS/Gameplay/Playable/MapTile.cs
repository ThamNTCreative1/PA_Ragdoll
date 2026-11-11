using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // One authored cell of the hand-built map. The SpriteRenderer on this object is only the editor
    // preview: at Start, PlayableBootstrap reads every MapTile (item + grid cell), hides the authoring
    // objects and spawns a real TileEntity per cell — health, cracks, fragments, recovery and the
    // merged collider exactly as the source game's map loader built them from JSON.
    public class MapTile : MonoBehaviour
    {
        [SerializeField] private ItemSO item;

        public ItemSO Item => item;
        public Vector2Int Cell => TileGrid.WorldToCell(transform.position);
    }
}

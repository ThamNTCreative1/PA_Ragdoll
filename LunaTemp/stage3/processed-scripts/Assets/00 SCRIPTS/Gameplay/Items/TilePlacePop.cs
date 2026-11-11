using UnityEngine;

namespace Game.Gameplay
{
    // Plays a placement pop animation so tiles settle visually instead of popping instantly.
    public class TilePlacePop : MonoBehaviour
    {
        private const float Duration = 0.26f;
        // Uniform on both axes — the punch comes from the spring's timing, not from deforming the block.
        private const float StartScale = 0.6f;

        private Vector3 _baseScale;
        private float _elapsed;
        private bool _merged;
        private TileEntity _tile;

        public static void Play(TileEntity tile)
        {
            var pop = tile.gameObject.AddComponent<TilePlacePop>();
            pop._baseScale = tile.transform.localScale;
            pop._merged = !tile.IsBackground;
            pop._tile = tile;
            // The chunk mesh has no per-tile scale, so the tile draws itself until the pop is done.
            tile.SetSelfRendered(true);
            pop.Apply(0f);
        }

        private void Update()
        {
            _elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(_elapsed / Duration);
            Apply(t);
            if (t < 1f) return;

            // Rebuild now the block is back at full size, or the composite keeps the shrunken mid-pop collider.
            if (_merged) TileColliderComposite.MarkDirty();
            if (_tile != null) _tile.SetSelfRendered(false);
            Destroy(this);
        }

        private void Apply(float t)
        {
            float scale = Mathf.LerpUnclamped(StartScale, 1f, Spring(t));
            transform.localScale = new Vector3(_baseScale.x * scale, _baseScale.y * scale, _baseScale.z);
        }

        // Approaches 1 from below and never overshoots to keep the tile inside its cell.
        private static float Spring(float t)
        {
            if (t <= 0f) return 0f;
            if (t >= 1f) return 1f;
            return 1f - Mathf.Exp(-6f * t) * Mathf.Abs(Mathf.Cos(t * Mathf.PI * 2.5f));
        }
    }
}

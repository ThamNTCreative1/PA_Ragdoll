using UnityEngine;

namespace Game.Gameplay
{
    // Holds every solid block under one static body. Each block keeps its own box: Luna's
    // CompositeCollider2D can't be set up from code, so the boxes are no longer merged.
    public class TileColliderComposite : MonoBehaviour
    {
        private static TileColliderComposite _instance;

        private bool _dirty;
        private bool _bulk;

        private static TileColliderComposite Instance
        {
            get
            {
                if (_instance == null)
                {
                    var host = new GameObject(nameof(TileColliderComposite));
                    var body = host.AddComponent<Rigidbody2D>();
                    body.bodyType = RigidbodyType2D.Static;
                    _instance = host.AddComponent<TileColliderComposite>();
                }
                return _instance;
            }
        }

        public static void Attach(TileEntity tile, BoxCollider2D box)
        {
            var host = Instance;
            tile.transform.SetParent(host.transform, worldPositionStays: true);
            host._dirty = true;
        }

        public static void MarkDirty()
        {
            if (_instance != null) _instance._dirty = true;
        }

        // Suspends per-step rebuilds during a map load's hundreds of attaches; EndBulk rebuilds once.
        public static void BeginBulk() => Instance._bulk = true;

        public static void EndBulk()
        {
            if (_instance == null) return;
            _instance._bulk = false;
            _instance._dirty = true;
        }

        // Rebuild immediately: the hole must exist before its shards spawn, or they get shoved apart by solid geometry.
        public static void RebuildNow()
        {
            if (_instance == null) return;
            _instance._dirty = false;
            _instance.Regenerate();
        }

        // Rebuilds next step, not mid-frame: Destroy is deferred, so a broken block is only really gone next frame.
        private void FixedUpdate()
        {
            if (_bulk || !_dirty) return;
            _dirty = false;
            Regenerate();
        }

        // Nothing to rebuild while the boxes stand on their own; kept so callers need not change.
        private void Regenerate() { }
    }
}

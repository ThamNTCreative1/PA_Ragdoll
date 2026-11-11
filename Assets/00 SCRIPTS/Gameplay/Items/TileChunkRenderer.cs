using System.Collections.Generic;
using UnityEngine;

namespace Game.Gameplay
{
    // Draws placed tiles as chunk meshes instead of a SpriteRenderer each: 3,400 renderers to cull and
    // sort becomes a few dozen. One atlas, so a chunk is a single mesh, material and draw call.
    public class TileChunkRenderer : MonoBehaviour
    {
        private const int ChunkSize = 16;

        private static TileChunkRenderer _instance;

        private readonly Dictionary<Vector2Int, Chunk> _chunks = new Dictionary<Vector2Int, Chunk>();
        private readonly HashSet<Vector2Int> _dirty = new HashSet<Vector2Int>();
        private readonly List<Vector2Int> _rebuilding = new List<Vector2Int>();

        // Reused across every rebuild so a chunk refresh allocates nothing.
        private readonly List<Vector3> _verts = new List<Vector3>();
        private readonly List<Vector2> _uvs = new List<Vector2>();
        private readonly List<int> _tris = new List<int>();
        // Sprites/Default multiplies by vertex colour; a mesh with no colour stream can come out black.
        private readonly List<Color32> _colors = new List<Color32>();

        private Material _material;

        private sealed class Chunk
        {
            public Layer Solid;
            public Layer Background;
        }

        private sealed class Layer
        {
            public MeshFilter Filter;
            public MeshRenderer Renderer;
            public Mesh Mesh;
        }

        private static TileChunkRenderer Instance
        {
            get
            {
                if (_instance == null)
                    _instance = new GameObject(nameof(TileChunkRenderer)).AddComponent<TileChunkRenderer>();
                return _instance;
            }
        }

        // Placing a tile is what brings the renderer into being.
        public static void Add(Vector2Int cell) => Instance._dirty.Add(ChunkOf(cell));

        // Never creates the renderer: tiles are destroyed during scene teardown too, and
        // resurrecting the manager there leaks a GameObject out of the closing scene.
        public static void MarkDirty(Vector2Int cell)
        {
            if (_instance != null) _instance._dirty.Add(ChunkOf(cell));
        }

        private static Vector2Int ChunkOf(Vector2Int cell)
            => new Vector2Int(Mathf.FloorToInt(cell.x / (float)ChunkSize), Mathf.FloorToInt(cell.y / (float)ChunkSize));

        // A blast can dirty a dozen chunks at once and rebuilding them together is a visible hitch, so a
        // few go per frame. A map load wants them all, and happens behind the loading screen.
        private const int MaxRebuildsPerFrame = 2;
        private const int BulkRebuildThreshold = 8;

        // Rebuilt in LateUpdate so every placement and break in the frame lands in one refresh.
        private void LateUpdate()
        {
            if (_dirty.Count == 0) return;

            int budget = _dirty.Count >= BulkRebuildThreshold ? _dirty.Count : MaxRebuildsPerFrame;

            _rebuilding.Clear();
            foreach (var chunk in _dirty)
            {
                _rebuilding.Add(chunk);
                if (_rebuilding.Count >= budget) break;
            }

            for (int i = 0; i < _rebuilding.Count; i++)
            {
                _dirty.Remove(_rebuilding[i]);
                Rebuild(_rebuilding[i]);
            }
        }

        private void Rebuild(Vector2Int chunkCoord)
        {
            if (!_chunks.TryGetValue(chunkCoord, out var chunk))
            {
                chunk = new Chunk();
                _chunks[chunkCoord] = chunk;
            }

            BuildLayer(chunkCoord, chunk, background: false);
            BuildLayer(chunkCoord, chunk, background: true);
        }

        private void BuildLayer(Vector2Int chunkCoord, Chunk chunk, bool background)
        {
            _verts.Clear();
            _uvs.Clear();
            _tris.Clear();
            _colors.Clear();

            int baseX = chunkCoord.x * ChunkSize;
            int baseY = chunkCoord.y * ChunkSize;
            Texture atlas = null;

            for (int y = 0; y < ChunkSize; y++)
            for (int x = 0; x < ChunkSize; x++)
            {
                var cell = new Vector2Int(baseX + x, baseY + y);
                if (!TileGrid.TryGet(cell, background, out var tile) || tile == null) continue;
                // A tile mid-pop draws itself so the scale animation still shows.
                if (tile.SelfRendered) continue;

                var sprite = tile.Sprite;
                if (sprite == null || sprite.texture == null) continue;
                if (atlas == null) atlas = sprite.texture;

                AddQuad(cell, sprite);
            }

            var layer = background ? chunk.Background : chunk.Solid;

            if (_verts.Count == 0)
            {
                if (layer != null) layer.Renderer.enabled = false;
                return;
            }

            if (layer == null)
            {
                layer = CreateLayer(chunkCoord, background);
                if (background) chunk.Background = layer;
                else chunk.Solid = layer;
            }

            layer.Renderer.enabled = true;
            if (layer.Renderer.sharedMaterial == null) layer.Renderer.sharedMaterial = MaterialFor(atlas);

            var mesh = layer.Mesh;
            mesh.Clear();
            mesh.SetVertices(_verts);
            mesh.SetUVs(0, _uvs);
            mesh.SetColors(_colors);
            mesh.SetTriangles(_tris, 0);
            mesh.RecalculateBounds(); // frustum culling per chunk depends on real bounds
        }

        private void AddQuad(Vector2Int cell, Sprite sprite)
        {
            Vector2 center = TileGrid.CellCenter(cell);
            float half = TileGrid.CellSize * 0.5f;
            int i0 = _verts.Count;

            _verts.Add(new Vector3(center.x - half, center.y - half, 0f));
            _verts.Add(new Vector3(center.x + half, center.y - half, 0f));
            _verts.Add(new Vector3(center.x + half, center.y + half, 0f));
            _verts.Add(new Vector3(center.x - half, center.y + half, 0f));

            // Sprites are packed unrotated, so the atlas rect maps straight onto the quad.
            var r = SpriteUv.Rect(sprite); // not textureRect: wrong in Luna
            float u0 = r.x, u1 = r.z;
            float v0 = r.y, v1 = r.w;

            _uvs.Add(new Vector2(u0, v0));
            _uvs.Add(new Vector2(u1, v0));
            _uvs.Add(new Vector2(u1, v1));
            _uvs.Add(new Vector2(u0, v1));

            var white = new Color32(255, 255, 255, 255);
            _colors.Add(white); _colors.Add(white); _colors.Add(white); _colors.Add(white);

            _tris.Add(i0); _tris.Add(i0 + 2); _tris.Add(i0 + 1);
            _tris.Add(i0); _tris.Add(i0 + 3); _tris.Add(i0 + 2);
        }

        private Layer CreateLayer(Vector2Int chunkCoord, bool background)
        {
            var go = new GameObject($"Chunk({chunkCoord.x},{chunkCoord.y}){(background ? "-bg" : "")}");
            go.transform.SetParent(transform, worldPositionStays: false);

            var mesh = new Mesh(); // unnamed: Mesh.name is read-only in Luna
            mesh.MarkDynamic(); // edited tiles rebuild the same mesh repeatedly

            var filter = go.AddComponent<MeshFilter>();
            filter.sharedMesh = mesh;

            var renderer = go.AddComponent<MeshRenderer>();
            renderer.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            renderer.receiveShadows = false;
            renderer.lightProbeUsage = UnityEngine.Rendering.LightProbeUsage.Off;
            // Same order the per-tile sprites used, so tiles interleave with everything else exactly as before.
            renderer.sortingOrder = background ? TileEntity.BackgroundSortingOrder : TileEntity.BlockSortingOrder;

            return new Layer { Filter = filter, Renderer = renderer, Mesh = mesh };
        }

        private Material MaterialFor(Texture atlas)
        {
            if (_material == null)
            {
                var shader = Shader.Find("Sprites/Default");
                _material = new Material(shader) { hideFlags = HideFlags.HideAndDontSave };
            }
            if (_material.mainTexture == null) _material.mainTexture = atlas;
            return _material;
        }

        private void OnDestroy()
        {
            foreach (var chunk in _chunks.Values)
            {
                if (chunk.Solid != null) Destroy(chunk.Solid.Mesh);
                if (chunk.Background != null) Destroy(chunk.Background.Mesh);
            }
            _chunks.Clear();
            if (_instance == this) _instance = null;
        }
    }
}

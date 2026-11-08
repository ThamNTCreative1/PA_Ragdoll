using UnityEngine;

namespace MelonSandbox
{
    // Sample the actual character artwork on a shared world-space grid.
    // No camera capture or readable source textures are required on Luna.
    public sealed class MelonPrivacyCover : MonoBehaviour
    {
        const float CellSize = .6f;
        MelonRagdoll target;
        SpriteRenderer[] originals;
        bool[] originalEnabled;
        SpriteRenderer[] sources;
        MeshRenderer[] tiles;
        Material[] materials;
        Mesh quad;
        bool hidden;

        public void Build(MelonRagdoll character)
        {
            target = character;
            var template = character.game && character.game.assets ? character.game.assets.mosaicMaterial : null;
            if (!template) { Debug.LogError("Assign mosaicMaterial on the MelonAssets catalog."); return; }
            originals = character.GetComponentsInChildren<SpriteRenderer>(true);
            originalEnabled = new bool[originals.Length];
            for (int i = 0; i < originals.Length; i++) originalEnabled[i] = originals[i].enabled;
            int count = character.limbs.Count + 1;
            sources = new SpriteRenderer[count];
            tiles = new MeshRenderer[count];
            materials = new Material[count];
            quad = new Mesh();
            quad.vertices = new[] { new Vector3(-.5f,-.5f,0), new Vector3(.5f,-.5f,0),
                new Vector3(.5f,.5f,0), new Vector3(-.5f,.5f,0) };
            quad.triangles = new[] { 0, 2, 1, 0, 3, 2 };
            quad.RecalculateBounds();
            for (int i = 0; i < count; i++)
            {
                bool backdrop = i == count - 1;
                var source = backdrop ? character.game.background : character.limbs[i].skin;
                sources[i] = source;
                if (!source || !source.sprite) continue;
                var go = new GameObject(backdrop ? "Mosaic full body region" : "Mosaic " + character.limbs[i].name);
                go.transform.SetParent(transform, false);
                go.AddComponent<MeshFilter>().sharedMesh = quad;
                var renderer = go.AddComponent<MeshRenderer>();
                tiles[i] = renderer;
                renderer.sortingLayerID = source.sortingLayerID;
                renderer.sortingOrder = backdrop ? 90 : 91 + source.sortingOrder;
                var material = new Material(template);
                materials[i] = material;
                // Explicit queues also order MeshRenderers on Luna, where sprite
                // sorting alone does not reliably place the rectangular backing.
                material.renderQueue = backdrop ? 3100 : 3101 + source.sortingOrder;
                material.SetFloat("_OpaqueRegion", backdrop ? 1 : 0);
                material.mainTexture = source.sprite.texture;
                material.SetColor("_Color", source.color);
                material.SetFloat("_CellSize", CellSize);
                ConfigureSpriteUV(material, source.sprite);
                renderer.sharedMaterial = material;
            }
            LateUpdate();
        }

        static void ConfigureSpriteUV(Material material, Sprite sprite)
        {
            // Luna textureRect is in pre-resize pixels. Mesh UVs already refer to
            // the exported texture and also handle trimmed or rotated atlas entries.
            var vertices = sprite.vertices;
            var uv = sprite.uv;
            var bounds = sprite.bounds;
            for (int i = 1; i + 1 < vertices.Length; i++)
            {
                Vector2 a = vertices[i] - vertices[0];
                Vector2 b = vertices[i + 1] - vertices[0];
                float determinant = a.x * b.y - a.y * b.x;
                if (Mathf.Abs(determinant) < .000001f) continue;
                Vector2 u = uv[i] - uv[0], v = uv[i + 1] - uv[0];
                Vector2 dx = (u * b.y - v * a.y) / determinant;
                Vector2 dy = (v * a.x - u * b.x) / determinant;
                Vector2 origin = uv[0] + dx * (bounds.min.x - vertices[0].x)
                    + dy * (bounds.min.y - vertices[0].y);
                material.SetVector("_SpriteUVX", new Vector4(dx.x * bounds.size.x, dy.x * bounds.size.y, origin.x, 0));
                material.SetVector("_SpriteUVY", new Vector4(dx.y * bounds.size.x, dy.y * bounds.size.y, origin.y, 0));
                return;
            }
        }

        static Bounds SpriteWorldBounds(SpriteRenderer source)
        {
            // Do not depend on disabled renderer bounds being refreshed by Luna.
            var local = source.sprite.bounds;
            Vector3 center = local.center;
            if (source.flipX) center.x = -center.x;
            if (source.flipY) center.y = -center.y;
            var result = new Bounds(source.transform.TransformPoint(center), Vector3.zero);
            for (int x = -1; x <= 1; x += 2)
                for (int y = -1; y <= 1; y += 2)
                    result.Encapsulate(source.transform.TransformPoint(center
                        + new Vector3(x * local.extents.x, y * local.extents.y, 0)));
            return result;
        }

        void SetHidden(bool value)
        {
            if (hidden == value || originals == null) return;
            hidden = value;
            for (int i = 0; i < originals.Length; i++)
                if (originals[i]) originals[i].enabled = value ? false : originalEnabled[i];
        }

        void LateUpdate()
        {
            if (!target || tiles == null) return;
            bool show = target.gameObject.activeInHierarchy && target.game.coverSprunkyOnHit;
            SetHidden(show);
            var fullBounds = new Bounds();
            bool hasBounds = false;
            for (int i = 0; i < sources.Length - 1; i++)
            {
                var source = sources[i];
                if (!source || !source.gameObject.activeInHierarchy) continue;
                if (!hasBounds) { fullBounds = SpriteWorldBounds(source); hasBounds = true; }
                else fullBounds.Encapsulate(SpriteWorldBounds(source));
            }
            float padding = Mathf.Max(0, target.game.mosaicPadding);
            // Snap outwards so the region always encloses complete mosaic cells.
            var min = fullBounds.min; var max = fullBounds.max;
            min.x = Mathf.Floor((min.x - padding) / CellSize) * CellSize;
            min.y = Mathf.Floor((min.y - padding) / CellSize) * CellSize;
            max.x = Mathf.Ceil((max.x + padding) / CellSize) * CellSize;
            max.y = Mathf.Ceil((max.y + padding) / CellSize) * CellSize;
            fullBounds.SetMinMax(min, max);
            for (int i = 0; i < tiles.Length; i++)
            {
                var source = sources[i];
                var tile = tiles[i];
                if (!tile) continue;
                tile.enabled = show && source && source.gameObject.activeInHierarchy;
                if (!tile.enabled) continue;
                bool backdrop = i == tiles.Length - 1;
                var bounds = backdrop ? fullBounds : SpriteWorldBounds(source);
                tile.transform.position = bounds.center;
                var scale = tile.transform.parent.lossyScale;
                tile.transform.localScale = new Vector3((bounds.size.x + (backdrop ? 0 : CellSize * 2)) / Mathf.Abs(scale.x),
                    (bounds.size.y + (backdrop ? 0 : CellSize * 2)) / Mathf.Abs(scale.y), 1);
                var spriteBounds = source.sprite.bounds;
                var matrix = source.transform.worldToLocalMatrix;
                var x = matrix.GetRow(0) / spriteBounds.size.x;
                var y = matrix.GetRow(1) / spriteBounds.size.y;
                x.w -= spriteBounds.min.x / spriteBounds.size.x;
                y.w -= spriteBounds.min.y / spriteBounds.size.y;
                if (source.flipX) x = new Vector4(-x.x, -x.y, -x.z, 1 - x.w);
                if (source.flipY) y = new Vector4(-y.x, -y.y, -y.z, 1 - y.w);
                materials[i].SetVector("_SpriteRowX", x);
                materials[i].SetVector("_SpriteRowY", y);
            }
        }

        void OnDisable() { SetHidden(false); }
        void OnDestroy()
        {
            SetHidden(false);
            if (materials != null)
                foreach (var material in materials) if (material) Destroy(material);
            if (quad) Destroy(quad);
        }
    }
}

using System.Collections.Generic;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Turns an authored FragmentProfile into flying shard objects when a breakable dies.
    // Shard sprites are cut from the item's sprite at runtime and cached per item+piece.
    public static class FragmentSpawner
    {
        // A killing blow that far outstrips the remaining health drove much more force into the break
        // than a bare finishing tap would — cap how far that can multiply shard speed.
        private const float OverkillCap = 4f;

        private static readonly Dictionary<(int item, int index, int rectHash), Sprite> SpriteCache = new Dictionary<(int item, int index, int rectHash), Sprite>();

        // Scales an impact by how hard the killing hit overshot the health left, so a one-shot blasts the
        // shards apart while a final chip barely nudges them. The ratio is always >= 1.
        public static FragmentImpact? AmplifyForOverkill(FragmentImpact? impact, float damage, float healthBefore)
        {
            if (impact == null) return null;
            var value = impact.Value;
            float overkill = healthBefore > 0.001f ? damage / healthBefore : 1f;
            float basePower = value.power > 0f ? value.power : 1f;
            value.power = basePower * Mathf.Clamp(overkill, 1f, OverkillCap);
            return value;
        }

        // Returns false when the item has no usable profile. impact = where the killing force came from,
        // null = authored arrows; inert = no launch at all, which is NOT the same as a null impact.
        public static bool Spawn(ItemSO item, Sprite source, [Bridge.Ref] Vector3 position, [Bridge.Ref] Vector3 scale, int sortingOrder,
            FragmentImpact? impact = null, bool inert = false)
        {
            var profile = item != null ? item.fragments : null;
            if (profile == null || !profile.HasPieces || source == null || source.texture == null) return false;

            var manager = FragmentManager.Instance;
            for (int i = 0; i < profile.pieces.Count; i++)
            {
                var piece = profile.pieces[i];
                var sprite = GetPieceSprite(item, source, piece, i);
                if (sprite == null) continue;

                Vector2 localCenter = (Vector2)source.bounds.min + piece.rect.center * (Vector2)source.bounds.size;
                var shardPos = position + new Vector3(localCenter.x * scale.x, localCenter.y * scale.y, 0f);

                var velocity = Vector2.zero;
                if (!inert)
                {
                    velocity = profile.ComputeLaunchVelocity(piece, shardPos, impact, Random.insideUnitCircle);
                    float jitter = Random.Range(-profile.angleVariance, profile.angleVariance) * Mathf.Deg2Rad;
                    float cos = Mathf.Cos(jitter), sin = Mathf.Sin(jitter);
                    velocity = new Vector2(velocity.x * cos - velocity.y * sin, velocity.x * sin + velocity.y * cos)
                               * Mathf.Max(0f, 1f + Random.Range(-profile.speedVariance, profile.speedVariance));
                }

                var request = new FragmentManager.ShardRequest
                {
                    sprite = sprite,
                    position = shardPos,
                    scale = new Vector3(scale.x, scale.y, 1f) * piece.scale,
                    sortingOrder = sortingOrder,
                    velocity = velocity,
                    torque = inert ? 0f
                        : piece.torque + Random.Range(-profile.spinJitter, profile.spinJitter) * velocity.magnitude,
                    mass = Mathf.Max(0.001f, profile.shardMass),
                    gravityScale = profile.gravityScale,
                    fadeDelay = profile.fadeDelay,
                    fadeDuration = profile.fadeDuration,
                    collider = FragmentManager.ColliderKind.None,
                };

                if (profile.collide)
                {
                    // Slightly inset so shards don't snag the world at spawn. Precise polygon
                    // colliders cost physics cooking per spawn, so they're opt-in.
                    if (piece.HasShape && profile.preciseColliders)
                    {
                        var boundsSize = (Vector2)source.bounds.size;
                        var centerN = piece.rect.center;
                        var points = new Vector2[piece.shape.Count];
                        for (int v = 0; v < points.Length; v++)
                            points[v] = Vector2.Scale(piece.shape[v] - centerN, boundsSize) * 0.95f;
                        request.collider = FragmentManager.ColliderKind.Polygon;
                        request.polygonPoints = points;
                    }
                    else
                    {
                        request.collider = FragmentManager.ColliderKind.Box;
                        request.boxSize = sprite.bounds.size * 0.9f;
                    }
                }

                manager.Enqueue(request);
            }

            return true;
        }

        // Builds the cut sprites ahead of time (call at placement/spawn) so the first break of an
        // item doesn't pay for Sprite.Create + geometry cooking mid-action.
        public static void Prewarm(ItemSO item, Sprite source)
        {
            var profile = item != null ? item.fragments : null;
            if (profile == null || !profile.HasPieces || source == null || source.texture == null) return;
            for (int i = 0; i < profile.pieces.Count; i++)
                GetPieceSprite(item, source, profile.pieces[i], i);
        }

        private static Sprite GetPieceSprite(ItemSO item, Sprite source, FragmentPiece piece, int index)
        {
            var key = (item.GetInstanceID(), index, GeometryHash(piece));
            if (SpriteCache.TryGetValue(key, out var cached) && cached != null) return cached;

            // The sprite's place on its texture, NOT rect: once atlased, source.texture is the atlas page.
            // (SpriteUv rather than textureRect, which Luna reports at 0,0.)
            var sourceRect = SpriteUv.PixelRect(source);
            float x = sourceRect.x + Mathf.Clamp01(piece.rect.x) * sourceRect.width;
            float y = sourceRect.y + Mathf.Clamp01(piece.rect.y) * sourceRect.height;
            float w = Mathf.Clamp(piece.rect.width * sourceRect.width, 1f, sourceRect.xMax - x);
            float h = Mathf.Clamp(piece.rect.height * sourceRect.height, 1f, sourceRect.yMax - y);
            if (w <= 0f || h <= 0f) return null;

            var sprite = Sprite.Create(source.texture, new Rect(x, y, w, h), new Vector2(0.5f, 0.5f), source.pixelsPerUnit);
            ApplyShapeGeometry(sprite, piece, sourceRect, x, y, w, h);
            SpriteCache[key] = sprite;
            return sprite;
        }

        // Clips the shard's quad down to its authored polygon: vertex positions double as UVs,
        // so only the pixels inside the outline render. Degenerate shapes keep the full rect.
        private static void ApplyShapeGeometry(Sprite sprite, FragmentPiece piece, [Bridge.Ref] Rect sourceRect,
            float x, float y, float w, float h)
        {
            if (!piece.HasShape) return;

            var tris = FragmentShapeUtil.Triangulate(piece.shape);
            if (tris.Length < 3) return;

            var verts = new Vector2[piece.shape.Count];
            for (int v = 0; v < verts.Length; v++)
                verts[v] = new Vector2(
                    Mathf.Clamp(sourceRect.x + piece.shape[v].x * sourceRect.width - x, 0f, w),
                    Mathf.Clamp(sourceRect.y + piece.shape[v].y * sourceRect.height - y, 0f, h));

            var tri16 = new ushort[tris.Length];
            for (int t = 0; t < tris.Length; t++) tri16[t] = (ushort)tris[t];
            sprite.OverrideGeometry(verts, tri16);
        }

        private static int GeometryHash(FragmentPiece piece)
        {
            unchecked
            {
                int h = piece.rect.GetHashCode();
                if (piece.shape != null)
                    for (int i = 0; i < piece.shape.Count; i++)
                        h = h * 31 ^ piece.shape[i].GetHashCode();
                return h;
            }
        }
    }
}

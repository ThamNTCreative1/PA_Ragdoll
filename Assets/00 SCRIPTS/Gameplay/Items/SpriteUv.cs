using System.Collections.Generic;
using UnityEngine;

namespace Game.Gameplay
{
    // Where a sprite's full rect (sprite.bounds) sits on its texture, as normalised UVs.
    // sprite.textureRect would say so in Unity, but Luna returns the sprite's own size at (0,0)
    // there, so it is derived from sprite.vertices / sprite.uv instead (both right in Luna and
    // Unity): their bounding boxes map linearly onto each other, and extending that mapping to
    // sprite.bounds gives the full rect — transparent margins included — exactly like textureRect.
    public static class SpriteUv
    {
        private static readonly Dictionary<Sprite, Vector4> Cache = new Dictionary<Sprite, Vector4>();

        // xMin, yMin, xMax, yMax of sprite.bounds on sprite.texture (0..1).
        public static Vector4 Rect(Sprite sprite)
        {
            Vector4 uv;
            if (Cache.TryGetValue(sprite, out uv)) return uv;

            Vector2[] verts = sprite.vertices;
            Vector2[] uvs = sprite.uv;
            Vector2 vMin = verts[0], vMax = verts[0], uMin = uvs[0], uMax = uvs[0];
            for (int i = 1; i < verts.Length; i++)
            {
                vMin = Vector2.Min(vMin, verts[i]);
                vMax = Vector2.Max(vMax, verts[i]);
                uMin = Vector2.Min(uMin, uvs[i]);
                uMax = Vector2.Max(uMax, uvs[i]);
            }

            Bounds b = sprite.bounds;
            float sx = vMax.x - vMin.x > 0.00001f ? (uMax.x - uMin.x) / (vMax.x - vMin.x) : 0f;
            float sy = vMax.y - vMin.y > 0.00001f ? (uMax.y - uMin.y) / (vMax.y - vMin.y) : 0f;
            uv = new Vector4(
                uMin.x + (b.min.x - vMin.x) * sx,
                uMin.y + (b.min.y - vMin.y) * sy,
                uMax.x + (b.max.x - vMax.x) * sx,
                uMax.y + (b.max.y - vMax.y) * sy);
            Cache[sprite] = uv;
            return uv;
        }

        // The same rect in texture pixels (what textureRect used to give).
        public static Rect PixelRect(Sprite sprite)
        {
            Vector4 uv = Rect(sprite);
            float w = sprite.texture.width, h = sprite.texture.height;
            return new Rect(uv.x * w, uv.y * h, (uv.z - uv.x) * w, (uv.w - uv.y) * h);
        }
    }
}

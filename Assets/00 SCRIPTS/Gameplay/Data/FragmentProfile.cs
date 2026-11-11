using System;
using System.Collections.Generic;
using UnityEngine;

namespace Game.Data
{
    // Where a breaking force came from; damage sources fill this in so fragments fly away from it.
    public struct FragmentImpact
    {
        public Vector2 point;     // world position of the force source
        public float strength;    // 0..1 — distance falloff of the source at this item's position
        public float power;       // magnitude multiplier from the hit's raw force (0 reads as 1)
        public Vector2 direction; // optional overall push (bullet travel); zero = pure radial burst
    }

    public enum FragmentLaunchMode
    {
        Authored, // each piece flies along its hand-placed arrow, whatever hit it (legacy value 0)
        Impact,   // pieces fly away from the damage source, speed fading with distance
        Blend,    // authored arrows bent toward the impact by impactInfluence
    }

    // One shard cut from the item's sprite: where it sits and how it flies when the item breaks.
    [Serializable]
    public class FragmentPiece
    {
        [Tooltip("Bounding box of the shard. When shape is set this is kept in sync automatically.")]
        public Rect rect = new Rect(0.25f, 0.25f, 0.5f, 0.5f);

        [Tooltip("Optional polygon outline (normalized sprite space, min 3 points).")]
        public List<Vector2> shape = new List<Vector2>();

        public bool HasShape => shape != null && shape.Count >= 3;

        [Tooltip("Launch direction: 0 = right, 90 = up. Used by Authored/Blend modes.")]
        public float launchAngle = 90f;

        [Tooltip("Launch velocity in world units per second. Used by Authored/Blend modes.")]
        public float launchSpeed = 1.5f;

        [Tooltip("Base spin impulse; sign sets direction.")]
        public float torque;

        [Tooltip("Visual scale multiplier on top of the source entity's scale.")]
        public float scale = 1f;
    }

    // How an item shatters when destroyed. Empty pieces list = legacy break behavior.
    [Serializable]
    public class FragmentProfile
    {
        [Tooltip("Off = item breaks with its legacy/no-fragment behavior.")]
        public bool enabled = true;

        [Tooltip("Impact = shards blast from the break point.")]
        public FragmentLaunchMode launchMode = FragmentLaunchMode.Impact;

        [Tooltip("Shard speed right at the impact point, at full strength.")]
        public float impactSpeed = 3f;

        [Tooltip("How quickly shard speed fades per world unit of distance from the impact point.")]
        public float impactFalloff = 1.5f;

        [Range(0f, 1f), Tooltip("0 = pure authored arrows, 1 = pure impact burst.")]
        public float impactInfluence = 0.7f;

        [Tooltip("Random spin impulse per unit of launch speed")]
        public float spinJitter = 0.05f;

        [Range(0f, 1f), Tooltip("Per-shard randomization: ± this fraction of launch speed.")]
        public float speedVariance = 0.2f;

        [Range(0f, 180f), Tooltip("Per-shard randomization: ± this many degrees on launch angle.")]
        public float angleVariance = 10f;

        public float gravityScale = 1f;
        public float shardMass = 0.05f;

        [Tooltip("Shards get a collider and bounce around instead of passing through the world.")]
        public bool collide = true;

        [Tooltip("Exact polygon colliders for shaped shards")]
        public bool preciseColliders;

        [Tooltip("Seconds shards linger before fading.")]
        public float fadeDelay = 0.8f;

        public float fadeDuration = 1.2f;

        public List<FragmentPiece> pieces = new List<FragmentPiece>();

        public bool HasPieces => enabled && pieces != null && pieces.Count > 0;

        // Deterministic launch math shared by runtime spawning and the editor preview.
        public Vector2 ComputeLaunchVelocity(FragmentPiece piece, Vector2 pieceWorld, FragmentImpact? impact, Vector2 fallbackDir)
        {
            float a = piece.launchAngle * Mathf.Deg2Rad;
            var authored = new Vector2(Mathf.Cos(a), Mathf.Sin(a)) * piece.launchSpeed;
            if (launchMode == FragmentLaunchMode.Authored || impact == null) return authored;

            var imp = impact.Value;
            var away = pieceWorld - imp.point;
            float dist = away.magnitude;
            var dir = dist > 1e-4f ? away / dist
                : fallbackDir.sqrMagnitude > 1e-4f ? fallbackDir.normalized : Vector2.up;
            if (imp.direction.sqrMagnitude > 1e-4f)
                dir = (dir + imp.direction.normalized * 1.5f).normalized; // bullets shove mostly along the shot

            float power = imp.power > 0f ? imp.power : 1f;
            float speed = impactSpeed * power * Mathf.Clamp01(imp.strength) / (1f + Mathf.Max(0f, impactFalloff) * dist);
            var burst = dir * speed;
            return launchMode == FragmentLaunchMode.Impact ? burst : Vector2.Lerp(authored, burst, impactInfluence);
        }
    }

    // Pure 2D polygon helpers shared by the runtime shard cutter and the editor canvas.
    public static class FragmentShapeUtil
    {
        // Even-odd rule; polygon in any winding.
        public static bool PointInPolygon(IReadOnlyList<Vector2> poly, Vector2 p)
        {
            bool inside = false;
            for (int i = 0, j = poly.Count - 1; i < poly.Count; j = i++)
            {
                var a = poly[i];
                var b = poly[j];
                if (a.y > p.y != b.y > p.y
                    && p.x < (b.x - a.x) * (p.y - a.y) / (b.y - a.y) + a.x)
                    inside = !inside;
            }
            return inside;
        }

        // Ear clipping for simple polygons, either winding. Empty result = degenerate input.
        public static int[] Triangulate(IReadOnlyList<Vector2> poly)
        {
            int n = poly.Count;
            if (n < 3) return new int[0];

            var indices = new List<int>(n);
            if (SignedArea(poly) >= 0f)
                for (int i = 0; i < n; i++) indices.Add(i);
            else
                for (int i = n - 1; i >= 0; i--) indices.Add(i);

            var result = new List<int>((n - 2) * 3);
            int guard = n * n + 16;
            while (indices.Count > 3 && guard-- > 0)
            {
                bool clipped = false;
                for (int i = 0; i < indices.Count; i++)
                {
                    int count = indices.Count;
                    int i0 = indices[(i - 1 + count) % count];
                    int i1 = indices[i];
                    int i2 = indices[(i + 1) % count];
                    Vector2 a = poly[i0], b = poly[i1], c = poly[i2];
                    if (Cross(b - a, c - b) <= 0f) continue; // reflex corner, not an ear

                    bool blocked = false;
                    for (int j = 0; j < count && !blocked; j++)
                    {
                        int idx = indices[j];
                        if (idx == i0 || idx == i1 || idx == i2) continue;
                        blocked = PointInTriangle(poly[idx], a, b, c);
                    }
                    if (blocked) continue;

                    result.Add(i0); result.Add(i1); result.Add(i2);
                    indices.RemoveAt(i);
                    clipped = true;
                    break;
                }
                if (!clipped) return new int[0]; // degenerate input
            }

            if (indices.Count == 3) { result.Add(indices[0]); result.Add(indices[1]); result.Add(indices[2]); }
            return result.ToArray();
        }

        public static float SignedArea(IReadOnlyList<Vector2> poly)
        {
            float area = 0f;
            for (int i = 0, j = poly.Count - 1; i < poly.Count; j = i++)
                area += poly[j].x * poly[i].y - poly[i].x * poly[j].y;
            return area * 0.5f;
        }

        private static float Cross(Vector2 a, Vector2 b) => a.x * b.y - a.y * b.x;

        private static bool PointInTriangle(Vector2 p, Vector2 a, Vector2 b, Vector2 c)
        {
            float d1 = Cross(b - a, p - a);
            float d2 = Cross(c - b, p - b);
            float d3 = Cross(a - c, p - c);
            bool hasNeg = d1 < 0f || d2 < 0f || d3 < 0f;
            bool hasPos = d1 > 0f || d2 > 0f || d3 > 0f;
            return !(hasNeg && hasPos);
        }
    }
}

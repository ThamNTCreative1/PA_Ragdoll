using System.Collections.Generic;
using UnityEngine;

namespace Game.Gameplay
{
    // Spatial hash for nearby target queries to avoid O(zombies x targets) work.
    public sealed class TargetGrid
    {
        // Comfortably above infectRadius/typical reach, so queries touch at most a 2x2 or 3x3 block.
        private const float CellSize = 3f;

        private readonly Dictionary<long, int> _heads = new Dictionary<long, int>(256);
        private int[] _next = new int[64];
        private float[] _x = new float[64];
        private float[] _y = new float[64];
        private int _count;

        public void Rebuild(List<CreatureSnapshot> targets)
        {
            _heads.Clear();
            _count = targets.Count;
            if (_next.Length < _count)
            {
                int size = Mathf.NextPowerOfTwo(_count);
                _next = new int[size];
                _x = new float[size];
                _y = new float[size];
            }

            for (int i = 0; i < _count; i++)
            {
                var t = targets[i];
                _x[i] = t.PositionX;
                _y[i] = t.PositionY;
                long key = Key(Cell(t.PositionX), Cell(t.PositionY));
                _next[i] = _heads.TryGetValue(key, out int head) ? head : -1;
                _heads[key] = i;
            }
        }

        // Nearest target within radius of pos: index into the snapshot lists (or -1); delta is target - pos.
        public int FindNearest([Bridge.Ref] Vector2 pos, float radius, out Vector2 delta)
        {
            delta = Vector2.zero;
            int best = -1;
            float bestSqr = radius * radius;

            int minX = Cell(pos.x - radius), maxX = Cell(pos.x + radius);
            int minY = Cell(pos.y - radius), maxY = Cell(pos.y + radius);
            for (int cy = minY; cy <= maxY; cy++)
                for (int cx = minX; cx <= maxX; cx++)
                {
                    if (!_heads.TryGetValue(Key(cx, cy), out int i)) continue;
                    for (; i >= 0; i = _next[i])
                    {
                        float dx = _x[i] - pos.x, dy = _y[i] - pos.y;
                        float sqr = dx * dx + dy * dy;
                        if (sqr < bestSqr && sqr > 0.0001f)
                        {
                            bestSqr = sqr;
                            best = i;
                            delta = new Vector2(dx, dy);
                        }
                    }
                }

            return best;
        }

        // All targets within radius of pos, written into results; returns the count, capped at results.Length.
        public int CollectWithin([Bridge.Ref] Vector2 pos, float radius, int[] results)
        {
            int count = 0;
            float radiusSqr = radius * radius;

            int minX = Cell(pos.x - radius), maxX = Cell(pos.x + radius);
            int minY = Cell(pos.y - radius), maxY = Cell(pos.y + radius);
            for (int cy = minY; cy <= maxY; cy++)
                for (int cx = minX; cx <= maxX; cx++)
                {
                    if (!_heads.TryGetValue(Key(cx, cy), out int i)) continue;
                    for (; i >= 0; i = _next[i])
                    {
                        float dx = _x[i] - pos.x, dy = _y[i] - pos.y;
                        if (dx * dx + dy * dy > radiusSqr) continue;
                        if (count >= results.Length) return count;
                        results[count++] = i;
                    }
                }

            return count;
        }

        private static int Cell(float v) => (int)Mathf.Floor(v / CellSize);

        private static long Key(int cx, int cy) => ((long)cx << 32) | (uint)cy;
    }
}

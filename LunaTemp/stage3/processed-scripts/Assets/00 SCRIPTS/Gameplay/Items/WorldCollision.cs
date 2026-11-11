using System.Collections.Generic;
using UnityEngine;

namespace Game.Gameplay
{
    public static class WorldCollision
    {
        // Treat null or static rigidbodies as immovable world.
        public static bool IsStatic(Collider2D collider)
        {
            var body = collider.attachedRigidbody;
            return body == null || body.bodyType == RigidbodyType2D.Static;
        }

        public static bool IsStatic(in RaycastHit2D hit)
            => hit.rigidbody == null || hit.rigidbody.bodyType == RigidbodyType2D.Static;

        // Rigidbody2D.worldCenterOfMass, built from members Luna also has.
        public static Vector2 CenterOfMass(Rigidbody2D body)
            => body.position + (Vector2)(Quaternion.Euler(0f, 0f, body.rotation) * (Vector3)body.centerOfMass);

        private static readonly List<RaycastHit2D> SightHits = new List<RaycastHit2D>();
        private static ContactFilter2D _sightFilter;
        private static int _sightMask = -1;

        // Cover between two points. Items share the Default layer with tiles, so only static
        // geometry counts, and every hit is checked rather than the first.
        public static bool BlocksSight([Bridge.Ref] Vector2 from, [Bridge.Ref] Vector2 to, int mask)
        {
            if (_sightMask != mask)
            {
                _sightFilter = new ContactFilter2D { useTriggers = false, useDepth = false };
                _sightFilter.SetLayerMask(mask);
                _sightMask = mask;
            }

            // Raycast over the segment rather than Linecast: Luna has no filtered Linecast.
            Vector2 delta = to - from;
            float length = delta.magnitude;
            SightHits.Clear();
            if (length > 0f) Physics2D.Raycast(from, delta / length, _sightFilter, SightHits, length);
            for (int i = 0; i < SightHits.Count; i++)
                if (IsStatic(SightHits[i])) return true;
            return false;
        }
    }
}

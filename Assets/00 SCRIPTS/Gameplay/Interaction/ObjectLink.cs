using UnityEngine;

namespace Game.Gameplay
{
    // Distance joint + visible line between two objects; own GameObject so neither end owns it.
    public class ObjectLink : MonoBehaviour
    {
        private const float FadeDuration = 0.2f;

        private Transform _a;
        private Transform _b;
        private Vector2 _anchorA;   // local to _a
        private Vector2 _anchorB;   // local to _b
        private DistanceJoint2D _joint;
        private LineRenderer _line;
        private SpriteRenderer _nodeA;
        private SpriteRenderer _nodeB;
        private Color _colour;
        private float _fadeRemaining = -1f;

        // A node marker: the cap drawn where a link meets an object, and what the first pick shows
        // while it waits for a partner. Parented to `follow` so it rides whatever it is pinned to.
        public static SpriteRenderer CreateNode(Sprite sprite, float size, Color colour,
                                                Transform follow, Vector3 worldPosition)
        {
            if (sprite == null) return null;
            var go = new GameObject("LinkNode");
            go.transform.SetParent(follow, worldPositionStays: false);
            go.transform.position = worldPosition;

            var renderer = go.AddComponent<SpriteRenderer>();
            renderer.sprite = sprite;
            renderer.color = colour;
            // One above the line's own order, so the cap sits over the end it covers.
            renderer.sortingLayerName = EffectSorting.TopLayer;
            renderer.sortingOrder = EffectSorting.TopOrder + 1;

            var bounds = sprite.bounds.size;
            float diameter = Mathf.Max(bounds.x, bounds.y);
            if (diameter > 0.0001f) go.transform.localScale = Vector3.one * (size / diameter);
            return renderer;
        }

        public static ObjectLink Create(
            Transform a, Vector2 worldA, Transform b, Vector2 worldB, Material lineMaterial,
            float width, Color colour, float textureTiling, Sprite nodeSprite, float nodeSize)
        {
            var go = new GameObject($"Link({a.name}->{b.name})");
            var link = go.AddComponent<ObjectLink>();
            link._a = a;
            link._b = b;
            link._anchorA = a.InverseTransformPoint(worldA);
            link._anchorB = b.InverseTransformPoint(worldB);
            link._colour = colour;
            link._joint = CreateJoint(a, worldA, b, worldB);

            var line = go.AddComponent<LineRenderer>();
            line.positionCount = 2;
            line.useWorldSpace = true;
            line.widthMultiplier = width;
            line.numCapVertices = 0; // rounded caps would smear the tiled pattern at the ends
            line.material = lineMaterial;
            line.startColor = colour;
            line.endColor = colour;
            // Tile, not Stretch: the texture repeats along the link instead of being pulled apart.
            line.textureMode = LineTextureMode.Tile;
            // Creature limbs live on their own sorting layers, all in front of Default — only the
            // shared top layer actually puts the link over everything.
            line.sortingLayerName = EffectSorting.TopLayer;
            line.sortingOrder = EffectSorting.TopOrder;
            link._line = line;

            // Parented to the link, not to the ends: Redraw already tracks both anchors, and a node
            // hanging off a creature would inherit its scale and mirroring.
            link._nodeA = CreateNode(nodeSprite, nodeSize, colour, go.transform, worldA);
            link._nodeB = CreateNode(nodeSprite, nodeSize, colour, go.transform, worldB);

            SpawnRegistry.Register(go);
            link.Redraw();
            return link;
        }

        // The joint must live on a body that can move, so when only one end is movable that end hosts it
        // and the other is pinned as a fixed world point. Two bits of scenery get just the line.
        private static DistanceJoint2D CreateJoint(Transform a, Vector2 worldA, Transform b, Vector2 worldB)
        {
            var bodyA = a.GetComponentInParent<Rigidbody2D>();
            var bodyB = b.GetComponentInParent<Rigidbody2D>();
            bool hostIsA = IsMovable(bodyA);
            if (!hostIsA && !IsMovable(bodyB)) return null;

            var host = hostIsA ? bodyA : bodyB;
            var other = hostIsA ? bodyB : bodyA;
            Vector2 hostWorld = hostIsA ? worldA : worldB;
            Vector2 otherWorld = hostIsA ? worldB : worldA;

            var joint = host.gameObject.AddComponent<DistanceJoint2D>();
            joint.autoConfigureConnectedAnchor = false;
            joint.autoConfigureDistance = false;
            joint.anchor = host.transform.InverseTransformPoint(hostWorld);
            joint.connectedBody = IsMovable(other) ? other : null;
            // A null connectedBody reads connectedAnchor as a world point, not a local one.
            joint.connectedAnchor = joint.connectedBody != null
                ? (Vector2)other.transform.InverseTransformPoint(otherWorld)
                : otherWorld;
            joint.distance = Vector2.Distance(worldA, worldB);
            joint.maxDistanceOnly = false;
            return joint;
        }

        private static bool IsMovable(Rigidbody2D body)
            => body != null && body.simulated && body.bodyType != RigidbodyType2D.Static;

        public bool Joins(Transform end) => _a == end || _b == end;

        // Drops the constraint at once and lets only the visual linger, so an unlinked pair is
        // free the instant it is cut.
        public void FadeOutAndDestroy()
        {
            if (_fadeRemaining >= 0f) return;
            if (_joint != null) Destroy(_joint);
            _joint = null;
            _fadeRemaining = FadeDuration;
        }

        private void LateUpdate()
        {
            bool endsAlive = _a != null && _b != null;

            if (_fadeRemaining < 0f)
            {
                // Either end dying cuts the link, but it fades out rather than blinking away.
                if (!endsAlive) { FadeOutAndDestroy(); return; }
                Redraw();
                return;
            }

            if (endsAlive) Redraw(); // keep tracking both ends while it dissolves

            _fadeRemaining -= Time.deltaTime;
            var faded = _colour;
            faded.a *= Mathf.Clamp01(_fadeRemaining / FadeDuration);
            _line.startColor = faded;
            _line.endColor = faded;
            if (_nodeA != null) _nodeA.color = faded;
            if (_nodeB != null) _nodeB.color = faded;

            if (_fadeRemaining <= 0f) Destroy(gameObject);
        }

        private void Redraw()
        {
            Vector3 endA = _a.TransformPoint(_anchorA);
            Vector3 endB = _b.TransformPoint(_anchorB);
            _line.SetPosition(0, endA);
            _line.SetPosition(1, endB);
            if (_nodeA != null) _nodeA.transform.position = endA;
            if (_nodeB != null) _nodeB.transform.position = endB;
        }

        // The joint lives on one of the ends, so it must be cleaned up explicitly.
        private void OnDestroy()
        {
            if (_joint != null) Destroy(_joint);
        }
    }
}

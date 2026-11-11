using System.Collections.Generic;
using Game.Core;
using UnityEngine;

namespace Game.Gameplay
{
    // Link tool: click one object then another to tie them with a line. Tiles are excluded as static
    // scenery, and clicking a linked pair removes that link rather than stacking a second.
    public class LinkTool : MonoBehaviour
    {
        [SerializeField] private Camera targetCamera;

        [Header("Line appearance")]
        // The texture, not a Sprite: an atlased sprite hands back the whole atlas page, which is
        // Clamp-wrapped and so can never tile.
        [Tooltip("Tiled along the link; needs Repeat wrap mode.")]
        [SerializeField] private Texture2D lineTexture;
        [SerializeField] private float lineWidth = 0.12f;
        [SerializeField] private Color lineColour = Color.white;

        private Material _lineMaterial;

        [Tooltip("Cap drawn where a link meets an object, and on the first pick while it waits.")]
        [SerializeField] private Sprite nodeSprite;
        [Tooltip("Node diameter as a multiple of the line width, so retuning the line carries it along.")]
        [Range(0.5f, 4f)]
        [SerializeField] private float nodeScale = 1.3f;

        private float NodeSize => lineWidth * nodeScale;

        private readonly List<ObjectLink> _links = new List<ObjectLink>();
        private IEventBus _events;
        private bool _armed;

        private Transform _pending;
        private Vector2 _pendingWorld;
        private SpriteRenderer _pendingNode;

        public bool IsArmed => _armed;

        // Static like SpawnRegistry/TileGrid — the spawn and drag tools need to yield to link
        // mode, and a static flag beats threading a serialized reference through both of them.
        public static bool IsLinkModeArmed { get; private set; }

        private void Start()
        {
            _events = ServiceLocator.Get<IEventBus>();
            _events.Subscribe<LinkModeToggledEvent>(OnLinkModeToggled);
            _events.Subscribe<ResetRequestedEvent>(OnResetRequested);
            if (targetCamera == null) targetCamera = Camera.main;

            // Sprites/Default is unlit and vertex-coloured, which is what a flat 2D line wants.
            _lineMaterial = new Material(Shader.Find("Sprites/Default"));
            if (lineTexture != null) _lineMaterial.mainTexture = lineTexture;
        }

        // Repeats per world unit that draw the texture at its own aspect, so the pattern never
        // stretches however far apart the two ends are.
        private float TextureTiling()
        {
            if (lineTexture == null || lineWidth <= 0f || lineTexture.height <= 0) return 1f;
            return 1f / (lineWidth * ((float)lineTexture.width / lineTexture.height));
        }

        private void OnDestroy()
        {
            _events?.Unsubscribe<LinkModeToggledEvent>(OnLinkModeToggled);
            _events?.Unsubscribe<ResetRequestedEvent>(OnResetRequested);
            IsLinkModeArmed = false; // static state must not survive the scene that set it
        }

        private void OnLinkModeToggled(LinkModeToggledEvent e)
        {
            _armed = e.IsEnabled;
            IsLinkModeArmed = _armed;
            if (!_armed) ClearPending();
        }

        // Links are registered with SpawnRegistry, so the map reload destroys them; this just
        // drops our own references so a stale half-pick can't survive the reset.
        private void OnResetRequested(ResetRequestedEvent e)
        {
            ClearPending();
            _links.Clear();
        }

        private void Update()
        {
            if (!_armed || targetCamera == null || !PlayInput.HasPointer) return;
            if (!PlayInput.PressedThisFrame) return;
            if (PointerProbe.IsOverUI()) return;

            Vector2 world = PointerProbe.CursorWorld(targetCamera);
            var body = FindLinkableAt(world);
            if (body == null) return;

            if (_pending == null)
            {
                BeginPending(body, world);
                return;
            }

            // Clicking the same object again cancels the pick rather than linking it to itself.
            if (body == _pending)
            {
                ClearPending();
                return;
            }

            if (TryRemoveExistingLink(_pending, body))
            {
                ClearPending();
                return;
            }

            var link = ObjectLink.Create(
                _pending, _pendingWorld, body, world,
                _lineMaterial, lineWidth, lineColour, TextureTiling(), nodeSprite, NodeSize);
            _links.Add(link);
            ClearPending();
        }

        // Anything under the cursor can be an end, tiles and scenery included; a movable body still
        // wins over static geometry sharing the same point, since that is what the player aimed at.
        private Transform FindLinkableAt(Vector2 world)
        {
            var hits = Physics2D.OverlapPointAll(world);
            Transform scenery = null;
            for (int i = 0; i < hits.Length; i++)
            {
                var body = hits[i].attachedRigidbody;
                if (body != null && body.simulated && body.bodyType != RigidbodyType2D.Static)
                    return body.transform;
                if (scenery == null) scenery = hits[i].transform;
            }
            return scenery;
        }

        private bool TryRemoveExistingLink(Transform a, Transform b)
        {
            for (int i = _links.Count - 1; i >= 0; i--)
            {
                var link = _links[i];
                if (link == null) { _links.RemoveAt(i); continue; }
                if (!link.Joins(a) || !link.Joins(b)) continue;
                _links.RemoveAt(i);
                link.FadeOutAndDestroy();
                return true;
            }
            return false;
        }

        // The pick shows the same node the finished link will cap that end with, planted exactly
        // where it was clicked — a whole-body tint said which object, never which point.
        private void BeginPending(Transform end, Vector2 world)
        {
            _pending = end;
            _pendingWorld = world;
            _pendingNode = ObjectLink.CreateNode(nodeSprite, NodeSize, lineColour, end, world);
        }

        private void ClearPending()
        {
            if (_pendingNode != null) Destroy(_pendingNode.gameObject);
            _pendingNode = null;
            _pending = null;
        }
    }
}

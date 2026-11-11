using System.Collections;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // A dropped mine: falls where thrown, locks once it stops rolling, then puts a pressure plate above
    // itself. The plate is a child trigger sharing the mine's body, so its own collider cannot trip it.
    public class MinePlate : MonoBehaviour
    {
        private ExplosiveEntity _owner;
        private ExplosiveStats _data;
        private SpriteRenderer _renderer;
        private Rigidbody2D _body;

        private float _armAt = float.PositiveInfinity;
        private bool _armed;
        private bool _firing;

        public bool Armed => _armed;

        public void Begin(ExplosiveEntity owner, ExplosiveStats data, SpriteRenderer renderer)
        {
            _owner = owner;
            _data = data;
            _renderer = renderer;
            _body = GetComponent<Rigidbody2D>();
        }

        private void FixedUpdate()
        {
            if (_firing || _data == null) return;
            if (_armed)
            {
                CheckStillSupported();
                return;
            }

            // The arm countdown only runs while it is still. Any nudge restarts it, so a mine that
            // lands on a slope and keeps creeping never arms mid-roll.
            if (_body != null && _body.linearVelocity.sqrMagnitude > _data.settleSpeed * _data.settleSpeed)
            {
                _armAt = float.PositiveInfinity;
                return;
            }

            if (float.IsPositiveInfinity(_armAt)) _armAt = Time.time + _data.armSeconds;
            if (Time.time < _armAt) return;
            Arm();
        }

        private void Arm()
        {
            _armed = true;

            // Locked rather than merely asleep: a blast or a shove must not be able to slide an
            // armed mine somewhere the player did not put it.
            if (_body != null)
            {
                _body.linearVelocity = Vector2.zero;
                _body.angularVelocity = 0f;
                _body.bodyType = RigidbodyType2D.Kinematic;
            }

            if (_data.armedSprite != null && _renderer != null) _renderer.sprite = _data.armedSprite;

            var plate = new GameObject("Plate") { layer = gameObject.layer };
            plate.transform.SetParent(transform, false);
            plate.transform.localPosition = _data.triggerOffset;
            var box = plate.AddComponent<BoxCollider2D>();
            box.isTrigger = true;
            box.size = _data.triggerSize;
            plate.AddComponent<MinePlateRelay>().Init(this);

            // OnTriggerEnter2D only fires on entry, so anything already standing on the mine would be missed.
            // A WORLD query does not skip our own colliders, so skipping ourselves stops it self-detonating.
            var standing = new Collider2D[8];
            // Layer-mask overload: Luna has no ContactFilter2D OverlapBox. -1 = every layer, like NoFilter.
            int found = Physics2D.OverlapBoxNonAlloc((Vector2)plate.transform.position,
                                                     _data.triggerSize * transform.lossyScale, 0f, standing, -1,
                                                     -Mathf.Infinity, Mathf.Infinity);
            for (int i = 0; i < found; i++)
            {
                if (standing[i] == null || standing[i].attachedRigidbody == _body) continue;
                if (standing[i].transform.IsChildOf(transform)) continue;
                Touched(standing[i]);
                return;
            }
        }

        // Locking the mine kinematic takes it out of gravity, so digging out the ground left it hanging.
        // It falls when its support goes and re-locks where it lands, armed the whole way down.
        private const float SupportProbe = 0.06f;
        private const float SupportCheckInterval = 0.2f;
        private float _nextSupportCheck;

        private void CheckStillSupported()
        {
            if (_body == null) return;

            if (_body.bodyType == RigidbodyType2D.Kinematic)
            {
                if (Time.time < _nextSupportCheck) return;
                _nextSupportCheck = Time.time + SupportCheckInterval;
                if (!HasSupport()) _body.bodyType = RigidbodyType2D.Dynamic;
                return;
            }

            // Falling. Re-lock only once it has actually come to rest ON something — velocity alone
            // is momentarily zero at the top of the drop, before it has started moving.
            if (_body.linearVelocity.sqrMagnitude > _data.settleSpeed * _data.settleSpeed) return;
            if (!HasSupport()) return;
            _body.linearVelocity = Vector2.zero;
            _body.angularVelocity = 0f;
            _body.bodyType = RigidbodyType2D.Kinematic;
        }

        // Rigidbody2D.Cast, so the mine's own colliders — the pressure plate among them — cannot
        // answer as the thing holding it up.
        private bool HasSupport()
        {
            // A short ray down from the bottom of the mine's solid colliders, skipping the mine itself
            // and any trigger (Rigidbody2D.Cast did this, but Luna doesn't have it).
            var own = GetComponentsInChildren<Collider2D>();
            bool any = false;
            Bounds b = default(Bounds);
            for (int i = 0; i < own.Length; i++)
            {
                if (own[i].isTrigger) continue;
                if (!any) { b = own[i].bounds; any = true; }
                else b.Encapsulate(own[i].bounds);
            }
            if (!any) return false;
            var hits = Physics2D.RaycastAll(new Vector2(b.center.x, b.min.y + 0.01f), Vector2.down, SupportProbe + 0.01f,
                                           Physics2D.DefaultRaycastLayers, -Mathf.Infinity, Mathf.Infinity);
            for (int i = 0; i < hits.Length; i++)
            {
                var c = hits[i].collider;
                if (c == null || c.isTrigger || c.attachedRigidbody == _body) continue;
                return true;
            }
            return false;
        }

        public void Touched(Collider2D other)
        {
            if (!_armed || _firing || other == null) return;
            _firing = true;
            StartCoroutine(Fire());
        }

        // Frames first, blast on the last one, so the pop reads before the screen fills with fire.
        private IEnumerator Fire()
        {
            var frames = _data.detonateFrames;
            if (frames != null && frames.Length > 0 && _renderer != null)
            {
                float step = 1f / Mathf.Max(1f, _data.detonateFrameRate);
                for (int i = 0; i < frames.Length; i++)
                {
                    if (frames[i] != null) _renderer.sprite = frames[i];
                    yield return new WaitForSeconds(step);
                }
            }
            if (_owner != null) _owner.DetonateNow();
        }
    }

    // Forwards the plate's trigger to the mine — the collider sits on a child, so the mine's own
    // component never receives the message.
    public class MinePlateRelay : MonoBehaviour
    {
        private MinePlate _plate;
        public void Init(MinePlate plate) => _plate = plate;
        private void OnTriggerEnter2D(Collider2D other) => _plate.Touched(other);
    }
}

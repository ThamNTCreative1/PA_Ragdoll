using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Pull on a live body to grab it with a spring joint (tap = spawn, pull = drag). Grabbing a
    // weapon wields it: aim follows drag direction, right button (or a second finger) fires.
    public class DragTool : MonoBehaviour
    {
        // Aim only follows movement above this speed, so a resting hand keeps its last direction.
        private const float AimSpeedThreshold = 0.5f;
        private const float AimTurnSharpness = 12f;
        // Grab stiffness (Hz). Higher is NOT tighter: at the 50 Hz solver rate overshoot grows with
        // frequency (20 Hz ~0.07 units, 45 Hz ~0.48). 15 settles a 3-unit snap in 4 steps.
        private const float GrabFrequency = 15f;

        [SerializeField] private Camera targetCamera;
        [SerializeField] private InteractionConfigSO config;
        [Tooltip("Grabbing yields to this tool's delete mode;")]
        [SerializeField] private ItemSpawnTool spawnTool;

        private TargetJoint2D _joint;
        private Rigidbody2D _grabbed;
        private RigidbodyConstraints2D _grabbedConstraints;
        private WeaponEntity _heldWeapon;
        private CreatureAgent _heldCreature;
        private Vector2 _aim = Vector2.right;
        private Vector2 _prevCursorWorld;
        // Pending = pressed on a body, waiting to see whether the press becomes a pull.
        private Rigidbody2D _pendingBody;
        private Vector2 _pendingScreenPos;
        private Vector2 _pendingAnchorLocal;

        public bool IsDragging => _joint != null;

        private void Start()
        {
            if (targetCamera == null) targetCamera = Camera.main;
        }

        private void Update()
        {
            // Pointer, not Mouse: on a touch-only device Mouse.current is null, so the primary
            // engage/drag gesture must go through the device-agnostic Pointer (Mouse/Touchscreen/Pen).
            if (targetCamera == null || config == null || !PlayInput.HasPointer)
            {
                // Losing the pointer device mid-drag (the Device Simulator swaps it on focus
                // changes) must count as a release — returning with the joint alive pins the
                // grabbed body at its last target forever.
                AbortGrab();
                return;
            }

            // The grabbed body can die mid-drag (explosion, despawn) — its joint dies with it.
            if (_joint == null && (_grabbed != null || _heldWeapon != null)) ClearGrab();

            if (_joint != null)
            {
                if (PlayInput.IsPressed) ContinueDrag();
                else ReleaseGrab();
                return;
            }

            if (PlayInput.PressedThisFrame) TryArmPendingGrab();
            else if (_pendingBody != null) UpdatePendingGrab();
        }

        // Press on a body: remember it and where, but don't grab yet — a motionless tap belongs
        // to the spawner.
        private void TryArmPendingGrab()
        {
            if (PointerProbe.IsOverUI()) return;
            if (spawnTool != null && spawnTool.IsDeleteMode) return;
            if (LinkTool.IsLinkModeArmed) return; // picking link ends must not turn into a grab

            Vector2 world = PointerProbe.CursorWorld(targetCamera);
            var body = PointerProbe.FindDraggableAt(world);
            if (body == null) return;

            _pendingBody = body;
            _pendingScreenPos = PlayInput.Position;
            // The grip point on the body is fixed at press time, even though the joint attaches
            // only once the pull starts.
            _pendingAnchorLocal = body.transform.InverseTransformPoint(world);
        }

        private void UpdatePendingGrab()
        {
            if (!PlayInput.IsPressed)
            {
                _pendingBody = null; // released without pulling: it was a tap, not ours
                return;
            }
            if (!PointerProbe.MovedPastDragThreshold(_pendingScreenPos)) return;
            BeginDrag();
        }

        // The joint IS the drag: anchor pins the point on the body that was touched, target
        // chases the pointer every frame. Everything else here is per-body follow-up.
        private void BeginDrag()
        {
            var body = _pendingBody;
            _pendingBody = null;

            body.WakeUp(); // sleeping rigs ignore joint forces until woken
            _grabbed = body;
            _joint = CreateGrabJoint(body, _pendingAnchorLocal);

            _heldWeapon = body.GetComponent<WeaponEntity>();
            _heldCreature = body.GetComponentInParent<CreatureAgent>();
            _grabbedConstraints = body.constraints;

            if (_heldWeapon != null) BeginWeaponGrab(body);
            // A grabbed creature goes full loose ragdoll — its assists would otherwise fight the
            // hand, holding a stiff plank pose while dangling from the grab point.
            _heldCreature?.SetCarried(true);
        }

        private TargetJoint2D CreateGrabJoint(Rigidbody2D body, [Bridge.Ref] Vector2 anchorLocal)
        {
            var joint = body.gameObject.AddComponent<TargetJoint2D>();
            joint.autoConfigureTarget = false;
            joint.anchor = anchorLocal;
            joint.target = PointerProbe.CursorWorld(targetCamera);
            // NOT frequency 0 — Box2D uses w = 2*pi*f, so zero stiffness applies no force. Higher is
            // not tighter either: past ~20 Hz a step response overshoots MORE, so 15 is the sweet spot.
            joint.frequency = GrabFrequency;
            joint.dampingRatio = 1f;
            // Per-unit-mass, so the cap limits acceleration and every grabbed part resists the same.
            joint.maxForce = config.dragMaxForce * body.mass;
            return joint;
        }

        // A held weapon has no joints to swing from, so the grab's off-centre torque is cancelled
        // and PlayerAim gets a stable frame. A grabbed limb gets none of this — see SetCarried.
        private void BeginWeaponGrab(Rigidbody2D body)
        {
            body.constraints = _grabbedConstraints | RigidbodyConstraints2D.FreezeRotation;
            _aim = Vector2.right;
            _prevCursorWorld = _joint.target;
            _heldWeapon.SetPlayerHeld(true);
        }

        private void ContinueDrag()
        {
            if (_grabbed == null) return;

            Vector2 cursorWorld = PointerProbe.CursorWorld(targetCamera);
            _joint.target = cursorWorld;
            // CreatureAgent re-sleeps calm rigs; a held one must stay live to feel the spring.
            _grabbed.WakeUp();

            if (_heldWeapon != null) UpdateWeaponAim(cursorWorld);
        }

        // Aim from the CURSOR's motion, not the weapon body's velocity: the body is on a spring
        // chasing that same cursor, so its velocity lags and rings — it read as the gun shaking.
        private void UpdateWeaponAim([Bridge.Ref] Vector2 cursorWorld)
        {
            Vector2 delta = cursorWorld - _prevCursorWorld;
            _prevCursorWorld = cursorWorld;
            float speed = delta.magnitude / Mathf.Max(Time.deltaTime, 0.0001f);
            if (speed > AimSpeedThreshold)
                _aim = Vector2.Lerp(_aim, delta.normalized, AimTurnSharpness * Time.deltaTime).normalized;
            _heldWeapon.PlayerAim(_aim);

            // Right mouse held fires continuously at the weapon's fire rate (no touch API: no
            // second-finger trigger).
            if (PlayInput.RightHeld)
                _heldWeapon.TryPlayerFire();
        }

        private void ReleaseGrab()
        {
            if (_joint != null) Destroy(_joint);
            ClearGrab();
        }

        // Focus loss can eat the pointer-up (backgrounded app, Device Simulator window losing
        // focus mid-drag): the touch then reads "still pressed" forever and the joint dangles the
        // body from a dead cursor position. Treat leaving the app as letting go.
        private void OnApplicationFocus(bool hasFocus)
        {
            if (!hasFocus) AbortGrab();
        }

        private void OnApplicationPause(bool paused)
        {
            if (paused) AbortGrab();
        }

        private void AbortGrab()
        {
            _pendingBody = null;
            if (_joint != null || _grabbed != null || _heldWeapon != null) ReleaseGrab();
        }

        private void ClearGrab()
        {
            // Null when the body died mid-drag — its constraints went with it.
            if (_grabbed != null) _grabbed.constraints = _grabbedConstraints;
            if (_heldWeapon != null) _heldWeapon.SetPlayerHeld(false);
            if (_heldCreature != null) _heldCreature.SetCarried(false);
            _heldWeapon = null;
            _heldCreature = null;
            _grabbed = null;
            _joint = null;
        }
    }
}

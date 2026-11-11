using System.Collections.Generic;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // RagdollBrain drives balance, stand, walk, and loose behaviors on the root ragdoll rig.
    [DisallowMultipleComponent]
    public class RagdollBrain : MonoBehaviour
    {
        [Header("Rig")]
        [SerializeField] private Rigidbody2D torso;
        [SerializeField] private Rigidbody2D head;
        [SerializeField] private Rigidbody2D legL;
        [SerializeField] private Rigidbody2D legR;
        [SerializeField] private HingeJoint2D neck;
        [SerializeField] private HingeJoint2D shoulderL;
        [SerializeField] private HingeJoint2D shoulderR;
        [SerializeField] private HingeJoint2D hipL;
        [SerializeField] private HingeJoint2D hipR;
        [Tooltip("Torso centre height above the feet when standing — sets the ground probe length.")]
        [SerializeField] private float standHeight = 1.40f;

        [Tooltip("How far above the torso centre the head spring pulls to. Geometry, measured off the " +
                 "limb layout by the Rig Editor — not part of the shared feel asset.")]
        [SerializeField] private float headRestHeight = 0.68f;

        [Header("Feel")]
        [Tooltip("Shared tuning asset. EVERY rig points at the same one, so the whole cast is tuned " +
                 "from a single place; values are read each step, so edits apply live in play mode.")]
        [SerializeField] private RagdollTuningSO tuning;

        // Per-creature, written by CreatureAgent from CreatureStats.moveSpeed each tick. Deliberately
        // not on the tuning asset: it is already a per-creature-type gameplay stat the AI reads too.
        [System.NonSerialized] public float walkSpeed = 1.5f;

        #region Drive inputs, written by CreatureAgent
        public float MoveInput { get; set; }
        public bool Limp { get; set; }

        // Player is holding a limb via DragTool. Distinct from Limp: joint projection must NOT run
        // here or it snaps the held limb back every step, but a stunned rig still needs projection.
        public bool Carried { get; set; }

        // Seconds left of a one-shot arm flail: the shoulders go limp so a kick to the arms actually
        // swings instead of being crushed by the reach motors. Set by CreatureAgent on infection.
        [System.NonSerialized] public float FlailTime;

        // Seconds left lying limp after a hard hit. Every motor is off, so the rig tumbles as a plain
        // ragdoll; when it expires the balancer's proportional ease performs the get-up.
        [System.NonSerialized] public float StunTime;
        public bool Stunned => StunTime > 0f;

        // Seconds left of a DELIBERATE leap. A hop is not a fall, so the rig holds itself together
        // through it instead of going limp the moment its feet leave the ground.
        [System.NonSerialized] public float BraceTime;

        // Torso speed change over the last step — how hard the body just hit whatever stopped it.
        [System.NonSerialized] public float LastImpactSpeed;

        // World-space offset to the prey to reach at, or zero. Non-zero means arms up, since only the
        // ARM colliders trigger infection — arms at the sides can never catch anything.
        [System.NonSerialized] public Vector2 ReachTarget;

        // Which arm the reach drives: 0 = both (a zombie grabbing), +1 = right only, -1 = left only
        // (a weapon is held in one hand, so the empty arm stays down).
        [System.NonSerialized] public int ReachArm;

        // Degrees the two arms splay either side of the aim when both are up. Negative = use the
        // tuning asset's own armReachSpread; a two-handed weapon overrides it with its support offset.
        [System.NonSerialized] public float ReachSpread = -1f;

        // A weapon is in hand. Two-handed weapons drive both arms like a grab does, so ReachArm alone
        // can no longer tell a held pose from a zombie's claw — and the two want very different cones.
        [System.NonSerialized] public bool Armed;

        // >0 while WeaponEntity animates ReachTarget through a swing curve: degrees/second for the
        // reach-drive to use instead of muscleMaxSpeed, which is far too slow to catch a real swing.
        [System.NonSerialized] public float SwingSpeed;

        // World-space offset to whatever this creature is locked onto, or zero. The neck inclines a
        // few degrees toward it so a lock reads in the face, not just the arms.
        [System.NonSerialized] public Vector2 LookTarget;

        // Raises the neck's travel past the glance-sized default for poses that need a real swing —
        // eating. Negative keeps HeadLookTiltMax; the authored limit is 25 degrees either way.
        [System.NonSerialized] public float LookTiltMax = -1f;

        // The agent's own down-probe, same origin and mask, so NearGround needn't cast again. Range
        // comes too: a miss only proves anything if the probe outreached us.
        [System.NonSerialized] public float GroundHintDistance = float.PositiveInfinity;
        [System.NonSerialized] public float GroundHintRange = -1f;

        public Rigidbody2D Torso => torso;

        // Rig scale, written by CreatureAgent. standHeight and headRestHeight are world-space
        // geometry, so a grown creature needs them stretched with it.
        [System.NonSerialized] public float RigScale = 1f;

        // Past this the body is airborne and softens.
        public float GroundProbeReach => (standHeight + 0.5f) * RigScale;

        // The shared feel asset, so knockback (which CreatureAgent applies, not this) is tuned from
        // the same place as everything else the rig feels like. Null until one is assigned.
        public RagdollTuningSO Tuning => tuning;

        // Both of these are geometry, not feel. The rig authoring tool measures them off the limb
        // layout and writes them in; they are exposed here so it can.
        public void SetRigMetrics(float standHeightUnits, float headRestHeightUnits)
        {
            standHeight = standHeightUnits;
            headRestHeight = headRestHeightUnits;
        }

        #endregion

        #region Ground mask and internal state
        // Ground probes must only see the world — creatures are never support surfaces. Mirrors
        // the prototype's "every layer except the rig's own", expressed in this project's layers.
        private const int NormalLayer = 8;
        private const int LimbLayer = 9;
        private const int ZombieLayer = 10;
        private const int ArmLayer = 11;
        private const int GroundMask =
            ~((1 << NormalLayer) | (1 << LimbLayer) | (1 << ZombieLayer) | (1 << ArmLayer));

        private Collider2D _colL, _colR;
        private float _phase;
        private float _reachTime;
        private Vector2 _prevVel;
        private bool _warnedNoTuning;

        #endregion

        #region Setup
        private void Awake()
        {
            _colL = LegCollider(legL);
            _colR = LegCollider(legR);
            // Seeded at stance friction; Tick swaps it per gait phase from here on.
            float seed = tuning != null ? tuning.stanceFriction : 1f;
            SetFriction(_colL, seed);
            SetFriction(_colR, seed);
        }

        private static Collider2D LegCollider(Rigidbody2D leg)
            => leg != null ? leg.GetComponent<Collider2D>() : null;

        #endregion

        #region Per-step drive
        // Driven once per physics step by CreatureAgent.ManagedTick — the prototype's FixedUpdate body.
        public void Tick()
        {
            if (torso == null) return;
            // A limp or stunned rig still owns its sockets; only death frees the limbs, by destroying
            // the joints. A CARRIED rig is the exception — the player is pulling a limb off on purpose.
            if (!Carried) ProjectJoints();
            if (tuning == null)
            {
                // Without the shared feel asset there are no numbers to drive anything with. Say so
                // once rather than throwing every physics step.
                if (!_warnedNoTuning)
                {
                    _warnedNoTuning = true;
                    Debug.LogError($"[Ragdoll] '{name}' has no RagdollTuningSO assigned — it will not " +
                                   "balance or walk. Assign the shared RagdollTuning asset on the rig root.", this);
                }
                return;
            }

            // Tracked before every early-out, so releasing a carried creature can't read as an impact.
            Vector2 vel = torso.linearVelocity;
            float deltaV = (vel - _prevVel).magnitude;
            _prevVel = vel;
            // Published for CreatureAgent: the same number that decides a knockdown also says how
            // hard the body just hit something. Read and cleared once per step by the agent.
            LastImpactSpeed = deltaV;

            if (Limp)
            {
                RelaxAll();
                return;
            }

            if (tuning.knockdownImpulse > 0f && deltaV > tuning.knockdownImpulse)
                StunTime = tuning.knockdownRecovery;

            if (StunTime > 0f)
            {
                StunTime -= Time.fixedDeltaTime;
                RelaxAll();
                return;
            }

            bool nearGround = NearGround();
            bool walking = Mathf.Abs(MoveInput) > 0.01f;
            float dir = walking ? Mathf.Sign(MoveInput) : 0f;

            // Off the ground the whole body softens, so a dropped creature tumbles instead of falling
            // rigid; landing restores full strength and the balancer performs the get-up.
            if (BraceTime > 0f) BraceTime -= Time.fixedDeltaTime;
            float stiff = nearGround || BraceTime > 0f ? 1f : Mathf.Clamp01(tuning.airborneStiffness);

            // MoveRotation is skipped entirely rather than scaled: it overrides angular velocity, so
            // even a no-op call would freeze the tumble.
            float balance = tuning.balanceForce * stiff;
            if (balance > 0f)
            {
                float target = walking ? -dir * tuning.walkLean : 0f;
                torso.MoveRotation(Mathf.LerpAngle(torso.rotation, target, balance * Time.fixedDeltaTime));
            }

            if (head != null && stiff > 0f)
            {
                Vector2 goal = torso.position + Vector2.up * (headRestHeight * RigScale);
                Vector2 f = ((goal - head.position) * tuning.headSpring - head.linearVelocity * tuning.headDamp) * head.mass * stiff;
                head.AddForce(f);
            }
            
            if (walking && nearGround)
            {
                _phase += tuning.cadence * Mathf.PI * 2f * Time.fixedDeltaTime;
                float sL = Mathf.Sin(_phase);
                float sR = Mathf.Sin(_phase + Mathf.PI);
                Drive(hipL, tuning.hipForwardSign * dir * tuning.hipSwing * sL, tuning.hipStrength);
                Drive(hipR, tuning.hipForwardSign * dir * tuning.hipSwing * sR, tuning.hipStrength);
                
                float vL = Mathf.Cos(_phase);
                float vR = Mathf.Cos(_phase + Mathf.PI);

                // Lift the leg that is recovering forward so it clears the ground and re-plants ahead
                // instead of scuffing; the other stays down and pushes. The two take turns.
                if (vL > 0f && legL != null) legL.AddForce(Vector2.up * (vL * tuning.stepLift * legL.mass));
                if (vR > 0f && legR != null) legR.AddForce(Vector2.up * (vR * tuning.stepLift * legR.mass));

                // Grip only while the leg drives BACKWARD — that is the push-off. The instant it
                // starts coming forward again it goes slippery, so it never brakes what it just gained.
                SetFriction(_colL, vL > 0f ? tuning.swingFriction : tuning.stanceFriction);
                SetFriction(_colR, vR > 0f ? tuning.swingFriction : tuning.stanceFriction);

                // Contact-gated propulsion, applied low so it pushes off the feet, not the chest.
                float push = (walkSpeed * MoveInput - torso.linearVelocity.x) * tuning.assistGain * torso.mass;
                torso.AddForceAtPosition(new Vector2(push, 0f), torso.position + Vector2.down * tuning.pushOffset);
            }
            else
            {
                _phase = 0f;
                Drive(hipL, 0f, tuning.hipStrength * stiff); // stand tall on both legs
                Drive(hipR, 0f, tuning.hipStrength * stiff);
                SetFriction(_colL, tuning.stanceFriction); // both grip to stand
                SetFriction(_colR, tuning.stanceFriction);
            }

            // Arms: reach at prey if there is any in range, otherwise hang idle. There is no
            // permanent arms-forward pose — no target means relaxed.
            if (FlailTime > 0f)
            {
                FlailTime -= Time.fixedDeltaTime;
                Relax(shoulderL); Relax(shoulderR);
            }
            else if (ReachTarget.sqrMagnitude > 0.0001f)
            {
                float world = -Mathf.Atan2(ReachTarget.x, -ReachTarget.y) * Mathf.Rad2Deg;
                float aim = Mathf.DeltaAngle(-torso.rotation, world);

                bool swinging = SwingSpeed > 0f;

                // The arm swings past and wobbles into a steady aim; _reachTime restarts on every
                // raise. A melee swing skips it — sway on the authored curve only blurs the strike.
                if (!swinging)
                {
                    _reachTime += Time.fixedDeltaTime;
                    if (tuning.reachSettle > 0.0001f && tuning.reachSway > 0f)
                        aim += Mathf.Sin(_reachTime * tuning.reachSwaySpeed * Mathf.PI * 2f)
                               * tuning.reachSway * Mathf.Exp(-_reachTime / tuning.reachSettle);
                }
                else _reachTime = 0f; // letting go re-sways fresh, not mid-decay from the swing

                // Each arm wanders on its own noise around the aim, so the two never lock in lockstep.
                float nL = swinging ? 0f : Wander(11.3f, Time.time * tuning.armSwingSpeed);
                float nR = swinging ? 0f : Wander(47.9f, Time.time * tuning.armSwingSpeed);
                // Spread only matters with both arms up — it stops them stacking into one silhouette.
                // A two-handed weapon overrides it so the support arm sits where it was authored.
                float spread = swinging || ReachArm != 0 ? 0f
                    : ReachSpread >= 0f ? ReachSpread
                    : tuning.armReachSpread;
                // A held weapon has to stay near the pose it was authored with, so it wanders inside a
                // much tighter cone than a clawing zombie — including when both hands are on it.
                float cone = swinging ? 0f : Armed || ReachArm != 0 ? tuning.armAimCone : tuning.armCone;
                // -1 = the joint's own default cap (tuning.muscleMaxSpeed); mid-swing, the weapon's
                // own authored speed instead, so the curve actually catches up to itself in time.
                float speedCap = swinging ? SwingSpeed : -1f;

                if (ReachArm >= 0)
                    Drive(shoulderR, aim + spread + nR * cone, tuning.armReachStrength, speedCap);
                else
                    IdleArm(shoulderR, tuning.armIdleTorque * stiff);

                if (ReachArm <= 0)
                    Drive(shoulderL, aim - spread + nL * cone, tuning.armReachStrength, speedCap);
                else
                    IdleArm(shoulderL, tuning.armIdleTorque * stiff);
            }
            else
            {
                _reachTime = 0f; // next raise sways again from scratch
                IdleArm(shoulderL, tuning.armIdleTorque * stiff);
                IdleArm(shoulderR, tuning.armIdleTorque * stiff);
            }

            // Neck holds the head level, or inclined a touch toward the lock. The clamp keeps it a
            // glance rather than an owl turn, and the sign flips with the target's side.
            float headTilt = 0f;
            if (LookTarget.sqrMagnitude > 0.0001f)
            {
                float limit = LookTiltMax > 0f ? LookTiltMax : HeadLookTiltMax;
                float vertical = Mathf.Atan2(LookTarget.y, Mathf.Abs(LookTarget.x)) * Mathf.Rad2Deg;
                headTilt = Mathf.Clamp(vertical, -limit, limit)
                           * (LookTarget.x < 0f ? -1f : 1f);
            }
            Drive(neck, headTilt, tuning.neckStrength * stiff);
        }

        #endregion

        #region Joint projection
        // Degrees of neck incline a locked target can pull; the authored neck limit is ±25.
        private const float HeadLookTiltMax = 15f;

        // 2D has no joint projection, so a hard contact leaves a hinge visibly stretched. After the
        // solver, any hinge past a small tolerance is teleported back — rb.position injects no impulse.
        private const float ProjectionTolerance = 0.03f; // world units at scale 1: above solver slop, below visible

        private void ProjectJoints()
        {
            ProjectJoint(neck);
            ProjectJoint(shoulderL);
            ProjectJoint(shoulderR);
            ProjectJoint(hipL);
            ProjectJoint(hipR);
        }

        private void ProjectJoint(HingeJoint2D joint)
        {
            if (joint == null || !joint.enabled || joint.connectedBody == null) return; // severed
            Vector2 socket = joint.connectedBody.transform.TransformPoint(joint.connectedAnchor);
            Vector2 error = socket - (Vector2)joint.transform.TransformPoint(joint.anchor);
            float tol = ProjectionTolerance * transform.lossyScale.x;
            if (error.sqrMagnitude <= tol * tol) return;
            joint.attachedRigidbody.position += error;
        }

        // Fully loose: every motor off. Used for dead rigs, where even the balance must stop.
        public void RelaxAll()
        {
            Relax(neck); Relax(shoulderL); Relax(shoulderR);
            Relax(hipL); Relax(hipR);
        }

        #endregion

        // Smooth noise in -1..1 centred on 0, for the arms' wander. Not Mathf.PerlinNoise: Luna maps
        // it to pc.noise.perlin2, which is already centred on 0 (Unity's is 0..1), so the usual
        // "(n - 0.5) * 2" held every armed arm a full cone off its aim in the build.
        private static float Wander(float seed, float t)
        {
            float i = Mathf.Floor(t);
            float f = t - i;
            f = f * f * (3f - 2f * f); // smoothstep between lattice points
            return Mathf.Lerp(Lattice(seed, i), Lattice(seed, i + 1f), f);
        }

        // Pseudo-random -1..1 per integer step; plain float math so Editor and Luna agree.
        private static float Lattice(float seed, float i)
        {
            float h = Mathf.Sin(i * 127.1f + seed * 311.7f) * 43758.5453f;
            return (h - Mathf.Floor(h)) * 2f - 1f;
        }

        #region Motor helpers
        // Near the floor? The agent already cast this ray, so use its answer when conclusive —
        // a hit inside our reach, or a miss by a longer probe. Only a short miss needs our own.
        private bool NearGround()
        {
            float reach = GroundProbeReach;
            if (GroundHintDistance <= reach) return true;
            if (GroundHintRange >= reach) return false;
            return Physics2D.Raycast(torso.position, Vector2.down, reach, GroundMask).collider != null;
        }

        // maxSpeedOverride: -1 (the default) uses the shared tuning.muscleMaxSpeed; a positive value
        // replaces it for this one call — the melee swing's escape hatch from the walk/aim pace.
        private void Drive(HingeJoint2D joint, float targetAngle, float strength, float maxSpeedOverride = -1f)
        {
            if (joint == null) return;
            float cap = maxSpeedOverride > 0f ? maxSpeedOverride : tuning.muscleMaxSpeed;
            float speed = Mathf.Clamp((targetAngle - joint.jointAngle) * tuning.muscleGain, -cap, cap);
            var m = joint.motor;
            m.motorSpeed = speed;
            m.maxMotorTorque = strength;
            joint.motor = m;
        }

        // A gentle tone toward hanging — too weak to hold the arm out, it only bleeds off swing.
        private void IdleArm(HingeJoint2D joint, float strength)
        {
            if (strength > 0f) Drive(joint, 0f, strength);
            else Relax(joint);
        }

        private static void Relax(HingeJoint2D joint)
        {
            if (joint == null) return;
            var m = joint.motor;
            m.motorSpeed = 0f;
            m.maxMotorTorque = 0f;
            joint.motor = m;
        }

        // Set a leg's friction by switching its material to the one made for that value. Never by
        // editing a material's friction and re-assigning the same object: Unity rebuilds contacts on
        // that, but Luna ignores re-assigning the material a collider already has, so the legs kept
        // their first friction, gripped with both feet and the rig walked on the spot.
        private static readonly Dictionary<float, PhysicsMaterial2D> FrictionMaterials =
            new Dictionary<float, PhysicsMaterial2D>();

        private static void SetFriction(Collider2D col, float friction)
        {
            if (col == null) return;
            PhysicsMaterial2D mat;
            if (!FrictionMaterials.TryGetValue(friction, out mat) || mat == null)
            {
                mat = new PhysicsMaterial2D { friction = friction, bounciness = 0f };
                FrictionMaterials[friction] = mat;
            }
            if (col.sharedMaterial != mat) col.sharedMaterial = mat;
        }
        #endregion
    }
}

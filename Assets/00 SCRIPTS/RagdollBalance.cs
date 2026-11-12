using System.Collections.Generic;
using UnityEngine;

// Keeps a multi-part Sprunky ragdoll on its feet and drives its walk / reach / aim.
// Approach taken from RSNM's RagdollBrain: the torso is turned upright (here with PD torques on
// every spine piece + flat feet), every other joint is a motor chasing a target angle, the head is pulled up by a
// spring, the walk is a hip swing + step lift + contact push, and stretched hinges are projected
// back after the solver. The Sprunky rig has a 3-piece spine, 3-piece legs and 3-piece arms, so
// each chain is driven joint by joint instead of the RSNM single torso/leg/arm pieces.
//
// Gameplay scripts only write the inputs: MoveInput, Facing, AimAt / ClearAim.
[DisallowMultipleComponent]
public class RagdollBalance : MonoBehaviour
{
    [System.Serializable]
    public struct Limb
    {
        public HingeJoint2D Upper; // shoulder / hip
        public HingeJoint2D Middle; // elbow / knee
        public HingeJoint2D Lower; // wrist / ankle
    }

    [Header("Rig")]
    [SerializeField] private Rigidbody2D torso;
    [SerializeField] private Rigidbody2D head;
    [SerializeField] private HingeJoint2D neck;
    [SerializeField] private HingeJoint2D[] spine;
    [SerializeField] private Limb legFront;
    [SerializeField] private Limb legBack;
    [SerializeField] private Limb armFront;
    [SerializeField] private Limb armBack;
    [SerializeField] private Collider2D footFront;
    [SerializeField] private Collider2D footBack;
    [Tooltip("Gun muzzle (its +X is the shot direction). Empty = the arm itself reaches.")]
    [SerializeField] private Transform aimPoint;
    [Tooltip("Gun sprite, flipped upside down when aiming to the left.")]
    [SerializeField] private SpriteRenderer gunSprite;
    [Tooltip("Torso centre height above the feet when standing.")]
    [SerializeField] private float standHeight = 1.0f;
    [Tooltip("Head rest point above the torso centre.")]
    [SerializeField] private float headRestHeight = 0.5f;

    [Header("Balance")]
    [Tooltip("Upright torque per degree of tilt on the chest / abdomen / hip.")]
    [SerializeField] private float uprightGain = 60f;
    [Tooltip("Damping of that torque against spin (per deg/s).")]
    [SerializeField] private float uprightDamp = 6f;
    [Tooltip("Torque keeping the feet flat on the ground, so the rig can't roll over its tiny feet.")]
    [SerializeField] private float footGain = 60f;
    [SerializeField] private float walkLean = 0f;
    [SerializeField] private float headSpring = 70f;
    [SerializeField] private float headDamp = 7f;
    [SerializeField] private float neckStrength = 20f;
    [SerializeField] private float spineStrength = 80f;

    [Header("Legs")]
    [SerializeField] private float hipStrength = 60f;
    [SerializeField] private float kneeStrength = 60f;
    [SerializeField] private float ankleStrength = 20f;
    [SerializeField] private float muscleGain = 9f;
    [SerializeField] private float muscleMaxSpeed = 320f;

    [Header("Walk")]
    public float walkSpeed = 1f;
    [SerializeField] private float cadence = 2f;
    [SerializeField] private float hipSwing = 18f;
    [Tooltip("Which joint direction swings a leg forward when walking right. Flip if the legs jam.")]
    [SerializeField] private float hipForwardSign = 1f;
    [SerializeField] private float stepLift = 12f;
    [Tooltip("Knee bend (deg) of the leg swinging forward.")]
    [SerializeField] private float kneeBend = 35f;
    [SerializeField] private float assistGain = 4f;
    [SerializeField] private float pushOffset = 0.3f;
    [SerializeField] private float stanceFriction = 1f;
    [SerializeField] private float swingFriction = 0.05f;

    [Header("Arms")]
    [SerializeField] private float armIdleStrength = 3f;
    // Kept low with a slow, soft muscle: a strong fast arm overshoots and its reaction rocks the
    // torso (tested: strength 40 / gain 9 swung 60-180 deg off the target).
    [Tooltip("Shoulder torque while reaching / aiming.")]
    [SerializeField] private float armReachStrength = 10f;
    [SerializeField] private float armGain = 6f;
    [SerializeField] private float armMaxSpeed = 300f;
    [SerializeField] private float elbowStrength = 40f;
    [SerializeField] private float aimReadyAngle = 35f;
    [Tooltip("Seconds a gunner takes to raise the gun onto a newly seen target before the first shot.")]
    [SerializeField] private float raiseTime = 0.2f;
    [Tooltip("Gun angle in the hand (deg) when aiming: in line with the arm (barrel along -Y).")]
    [SerializeField] private float gunAlongArm = -90f;
    [Tooltip("How far the gun tips forward at the wrist while the arm just hangs (not shooting).")]
    [SerializeField] private float idleGunTilt = 70f;
    [SerializeField] private float gunTurnSpeed = 720f;
    [Tooltip("Distance from the grip (hand) to the gun sprite centre, along the barrel.")]
    [SerializeField] private float gunGrip = 0.07f;

    // ---- inputs written by MonsterController / PlayerAttack ----
    [System.NonSerialized] public float MoveInput;

    private bool hasAim;
    private float raiseLeft;
    private float rigScale = 1f;
    private float torqueScale = 1f;
    private Vector2 aimTarget;
    private int facing = 1;
    private float phase;
    private float aimOffset;
    private float aimError = 180f;
    private HingeJoint2D[] joints;
    private Rigidbody2D[] bodies;
    private SpriteRenderer[] skins;
    private int groundMask;
    private float totalMass = 1f;

    // HingeJoint2D.jointAngle = (parent rotation - limb rotation) for a hinge on the limb whose
    // connected body is the parent (measured: arm at -91 deg on a level chest reads +91).
    private const float JointSign = -1f;

    public bool AimReady { get { return hasAim && raiseLeft <= 0f && Mathf.Abs(aimError) < aimReadyAngle; } }
    public int Facing { get { return facing; } }

    // Turning round mirrors the WHOLE rig about the chest's vertical axis, physics included: every
    // body's x position, rotation and velocity, every collider offset, joint anchor and one-way
    // limit, and every attached sprite (skin, clothes, gun). Only flipping the sprites left the
    // limbs, ears, feet and bending knees on the old side.
    public void SetFacing(int dir)
    {
        if (dir == 0 || dir == facing) return;
        facing = dir > 0 ? 1 : -1;
        MirrorRig();
    }

    private void MirrorRig()
    {
        float cx = torso.position.x;
        for (int i = 0; i < bodies.Length; i++)
        {
            Rigidbody2D rb = bodies[i];
            if (!rb) continue;
            Vector2 p = rb.position;
            Vector2 v = rb.linearVelocity;
            float rot = -rb.rotation;
            rb.position = new Vector2(2f * cx - p.x, p.y);
            rb.rotation = rot;
            rb.linearVelocity = new Vector2(-v.x, v.y);
            rb.angularVelocity = -rb.angularVelocity;
            Transform t = rb.transform;
            t.SetPositionAndRotation(new Vector3(2f * cx - t.position.x, t.position.y, t.position.z), Quaternion.Euler(0f, 0f, rot));

            foreach (Collider2D c in rb.GetComponents<Collider2D>())
                c.offset = new Vector2(-c.offset.x, c.offset.y);
            foreach (HingeJoint2D j in rb.GetComponents<HingeJoint2D>())
            {
                j.anchor = new Vector2(-j.anchor.x, j.anchor.y);
                j.connectedAnchor = new Vector2(-j.connectedAnchor.x, j.connectedAnchor.y);
                MirrorLimits(j);
            }
            for (int k = 0; k < t.childCount; k++) MirrorAttachment(t.GetChild(k));
        }
        for (int i = 0; i < skins.Length; i++) if (skins[i]) skins[i].flipX = facing < 0;
        if (gunSprite) gunSprite.flipY = facing < 0;
    }

    // Sprites / triggers riding on a body. A dropped gun has its own body and is left alone.
    private void MirrorAttachment(Transform child)
    {
        if (child.GetComponent<Rigidbody2D>()) return;
        Vector3 lp = child.localPosition;
        child.localPosition = new Vector3(-lp.x, lp.y, lp.z);
        if (gunSprite && child == gunSprite.transform)
        {
            // Pointing the other way: direction a becomes 180 - a (flipY keeps it upright).
            child.localRotation = Quaternion.Euler(0f, 0f, 180f - child.localEulerAngles.z);
            return;
        }
        for (int k = 0; k < child.childCount; k++) MirrorAttachment(child.GetChild(k));
    }

    private static void MirrorLimits(HingeJoint2D joint)
    {
        if (!joint || !joint.useLimits) return;
        JointAngleLimits2D l = joint.limits;
        float min = l.min;
        l.min = -l.max;
        l.max = -min;
        joint.limits = l;
    }

    public void AimAt(Vector2 worldPoint)
    {
        bool acquired = !hasAim;
        hasAim = true;
        aimTarget = worldPoint;
        // A gunner raises the gun onto a newly seen target in raiseTime seconds (a steady sweep
        // about the shoulder), fires as soon as it is up, then tracks with the softer arm muscle.
        if (acquired && aimPoint) raiseLeft = raiseTime;
    }

    // One physics step of the raise: the gun straightens in the hand and the arm chain turns about
    // the shoulder by the share of the remaining angle this step owns, so both end on the target.
    private void RaiseStep()
    {
        HingeJoint2D shoulder = armFront.Upper;
        if (!shoulder || !shoulder.connectedBody || !aimPoint) { raiseLeft = 0f; return; }
        float dt = Time.fixedDeltaTime;
        float f = raiseLeft > dt ? dt / raiseLeft : 1f;
        raiseLeft -= dt;

        Transform gun = gunSprite ? gunSprite.transform : null;
        if (gun)
        {
            float grip = facing > 0 ? gunAlongArm : 180f - gunAlongArm;
            float a = gun.localEulerAngles.z;
            SetGunGrip(gun, a + Mathf.DeltaAngle(a, grip) * f);
        }

        Vector2 pivot = shoulder.connectedBody.transform.TransformPoint(shoulder.connectedAnchor);
        Vector2 to = aimTarget - pivot;
        float want = Mathf.Atan2(to.y, to.x) * Mathf.Rad2Deg;
        float shot = Mathf.Atan2(aimPoint.right.y, aimPoint.right.x) * Mathf.Rad2Deg;
        float delta = Mathf.DeltaAngle(shot, want) * f;

        Quaternion q = Quaternion.Euler(0f, 0f, delta);
        HingeJoint2D[] chain = { armFront.Upper, armFront.Middle, armFront.Lower };
        for (int i = 0; i < chain.Length; i++)
        {
            Rigidbody2D rb = chain[i] ? chain[i].attachedRigidbody : null;
            if (!rb) continue;
            Vector2 p = (Vector2)(q * (Vector3)(rb.position - pivot)) + pivot;
            float rot = rb.rotation + delta;
            rb.position = p;
            rb.rotation = rot;
            rb.angularVelocity = 0f;
            rb.transform.SetPositionAndRotation(new Vector3(p.x, p.y, rb.transform.position.z), Quaternion.Euler(0f, 0f, rot));
        }
        float now = Mathf.Atan2(aimPoint.right.y, aimPoint.right.x) * Mathf.Rad2Deg;
        aimError = Mathf.DeltaAngle(now, want);
    }

    private void SetGunGrip(Transform gun, float angle)
    {
        float rad = angle * Mathf.Deg2Rad;
        gun.localRotation = Quaternion.Euler(0f, 0f, angle);
        gun.localPosition = new Vector3(Mathf.Cos(rad) * gunGrip, Mathf.Sin(rad) * gunGrip, gun.localPosition.z);
    }

    public void ClearAim()
    {
        hasAim = false;
        raiseLeft = 0f;
        aimError = 180f;
    }

    // The gun is gone (dropped when bitten): from now on the bare arm reaches, like a monster.
    public void DropWeapon()
    {
        aimPoint = null;
        gunSprite = null;
        aimOffset = -90f;
    }

    // Small upward kick of the gun arm per shot.
    public void Recoil(float degreesPerSecond)
    {
        Rigidbody2D arm = armFront.Upper ? armFront.Upper.attachedRigidbody : null;
        if (arm) arm.angularVelocity += degreesPerSecond * facing;
    }

    private void Awake()
    {
        joints = GetComponentsInChildren<HingeJoint2D>(true);
        List<SpriteRenderer> list = new List<SpriteRenderer>();
        foreach (SpriteRenderer sr in GetComponentsInChildren<SpriteRenderer>(true))
            if (sr != gunSprite) list.Add(sr);
        skins = list.ToArray();
        groundMask = LayerMask.GetMask("Ground");
        bodies = GetComponentsInChildren<Rigidbody2D>(true);
        totalMass = 0f;
        foreach (Rigidbody2D rb in bodies) totalMass += rb.mass;
        if (totalMass <= 0f) totalMass = 1f;

        // Angle between the arm body and the shot direction, fixed while the arm is straight.
        Rigidbody2D arm = armFront.Upper ? armFront.Upper.attachedRigidbody : null;
        if (aimPoint && arm)
        {
            float shot = Mathf.Atan2(aimPoint.right.y, aimPoint.right.x) * Mathf.Rad2Deg;
            aimOffset = Mathf.DeltaAngle(arm.rotation, shot);
        }
        else aimOffset = -90f; // a bare arm points along its local -Y

        SetFriction(footFront, stanceFriction);
        SetFriction(footBack, stanceFriction);
    }

    private void OnEnable()
    {
        // Characters placed in the scene under an INACTIVE side group are saved with
        // Rigidbody2D.simulated = false: Luna builds every body at load as "simulated" even when
        // its GameObject is inactive, so they would free-fall (no colliders yet) until the side is
        // picked. They start simulating here, at rest, when the character really appears.
        for (int i = 0; bodies != null && i < bodies.Length; i++)
        {
            Rigidbody2D rb = bodies[i];
            if (!rb) continue;
            if (!rb.simulated)
            {
                rb.linearVelocity = Vector2.zero;
                rb.angularVelocity = 0f;
                rb.simulated = true;
            }
        }
        for (int i = 0; joints != null && i < joints.Length; i++)
            if (joints[i]) joints[i].useMotor = true;
    }

    private void OnDisable()
    {
        RelaxAll();
    }

    private void FixedUpdate()
    {
        if (!torso) return;

        // LayoutController scales GAME/Main (x2 in landscape): lengths grow with the scale and every
        // torque with its square (inertia), or a big rig is too weak to stand.
        float s = Mathf.Abs(transform.lossyScale.y);
        if (s < 0.0001f) s = 1f;
        rigScale = s;
        torqueScale = s * s;
        ProjectJoints();

        bool grounded = Physics2D.Raycast(torso.position, Vector2.down, (standHeight + 0.5f) * rigScale, groundMask).collider != null;
        bool walking = grounded && Mathf.Abs(MoveInput) > 0.01f;
        float dir = walking ? Mathf.Sign(MoveInput) : 0f;
        float stiff = grounded ? 1f : 0.3f;

        // Torso upright (leaning a little into the walk). RSNM turns its single heavy torso with
        // MoveRotation, but here the chest is 1.5 of ~10 kg and the whole rig rolled over its feet,
        // so every spine piece gets a real upright torque and the feet are held flat.
        float lean = walking ? -dir * walkLean : 0f;
        Upright(torso, lean, uprightGain * stiff);
        if (spine != null)
            for (int i = 0; i < spine.Length; i++)
            {
                Drive(spine[i], 0f, spineStrength);
                if (spine[i]) Upright(spine[i].attachedRigidbody, lean, uprightGain * stiff);
            }
        // Planted feet stay flat (a stepping foot is left free, see Step).
        if (grounded && !walking)
        {
            Upright(footFront ? footFront.attachedRigidbody : null, 0f, footGain);
            Upright(footBack ? footBack.attachedRigidbody : null, 0f, footGain);
        }

        // Head pulled up above the torso, neck holding it level.
        if (head)
        {
            Vector2 goal = torso.position + (Vector2)(torso.transform.up * (headRestHeight * rigScale));
            Vector2 f = ((goal - head.position) * headSpring - head.linearVelocity * headDamp) * head.mass * stiff;
            head.AddForce(f);
        }
        Drive(neck, 0f, neckStrength * stiff);

        if (walking)
        {
            phase += cadence * Mathf.PI * 2f * Time.fixedDeltaTime;
            Step(legFront, footFront, phase, dir);
            Step(legBack, footBack, phase + Mathf.PI, dir);
            // Push the WHOLE body (the chest is only ~15% of it) toward the walk speed, which grows
            // with the rig like everything else.
            float push = (walkSpeed * rigScale * MoveInput - torso.linearVelocity.x) * assistGain * totalMass;
            torso.AddForceAtPosition(new Vector2(push, 0f), torso.position + Vector2.down * (pushOffset * rigScale));
        }
        else
        {
            phase = 0f;
            Stand(legFront, stiff);
            Stand(legBack, stiff);
            SetFriction(footFront, stanceFriction);
            SetFriction(footBack, stanceFriction);
        }

        UpdateArms(stiff);
    }

    // ---------------------------------------------------------------- legs

    private void Stand(Limb leg, float stiff)
    {
        Drive(leg.Upper, 0f, hipStrength * stiff);
        Drive(leg.Middle, 0f, kneeStrength * stiff);
        Drive(leg.Lower, 0f, ankleStrength * stiff);
    }

    private void Step(Limb leg, Collider2D foot, float p, float dir)
    {
        float s = Mathf.Sin(p);
        float v = Mathf.Cos(p);
        Drive(leg.Upper, hipForwardSign * dir * hipSwing * s, hipStrength);
        // The leg swinging forward bends its knee (whichever way the knee limit allows) so the foot
        // clears the floor; the planted leg is straight and keeps its foot flat.
        bool swing = v > 0f;
        float bendSign = leg.Middle && leg.Middle.useLimits ? Mathf.Sign(leg.Middle.limits.min + leg.Middle.limits.max) : 0f;
        Drive(leg.Middle, swing ? bendSign * kneeBend * v : 0f, kneeStrength);
        Drive(leg.Lower, 0f, ankleStrength);
        if (!swing) Upright(foot ? foot.attachedRigidbody : null, 0f, footGain);

        // The leg coming forward lifts and slides; the planted one grips and pushes.
        Rigidbody2D lift = foot ? foot.attachedRigidbody : null;
        if (v > 0f && lift) lift.AddForce(Vector2.up * (v * stepLift * lift.mass));
        SetFriction(foot, v > 0f ? swingFriction : stanceFriction);
    }

    // ---------------------------------------------------------------- arms

    private void UpdateArms(float stiff)
    {
        if (raiseLeft <= 0f) UpdateGunGrip(); // the raise straightens the gun itself
        if (!hasAim)
        {
            aimError = 180f;
            Drive(armFront.Upper, 0f, armIdleStrength * stiff);
            Drive(armBack.Upper, 0f, armIdleStrength * stiff);
            Drive(armFront.Middle, 0f, elbowStrength * stiff);
            Drive(armBack.Middle, 0f, elbowStrength * stiff);
            Drive(armFront.Lower, 0f, elbowStrength * stiff);
            Drive(armBack.Lower, 0f, elbowStrength * stiff);
            return;
        }

        if (raiseLeft > 0f)
        {
            RaiseStep();
            // Other arm keeps hanging; the shoulder muscle follows the sweep instead of fighting it.
            Drive(armBack.Upper, 0f, armIdleStrength);
            return;
        }
        DriveAim(aimTarget);
    }

    // The gun turns at the wrist: in line with the arm while shooting, tipped forward while the
    // arm just hangs (in line with a hanging arm the barrel would go through the floor).
    private void UpdateGunGrip()
    {
        if (!gunSprite) return;
        Transform gun = gunSprite.transform;
        float right = hasAim ? gunAlongArm : gunAlongArm + idleGunTilt; // as if facing right
        float want = facing > 0 ? right : 180f - right;                  // mirrored like MirrorRig
        float a = Mathf.MoveTowardsAngle(gun.localEulerAngles.z, want, gunTurnSpeed * Time.fixedDeltaTime);
        // The grip stays in the hand: the gun centre sits gunGrip along the barrel from it.
        SetGunGrip(gun, a);
    }

    // Raise the arm(s) so the muzzle (or the bare hand) points at a world point.
    private void DriveAim(Vector2 point)
    {
        Rigidbody2D arm = armFront.Upper ? armFront.Upper.attachedRigidbody : null;
        Vector2 from = arm ? arm.position : torso.position;
        Vector2 to = point - from;
        float want = Mathf.Atan2(to.y, to.x) * Mathf.Rad2Deg;

        // Arm rotation that puts the muzzle (or the hand) on the target, as a joint angle. The muzzle
        // offset is re-measured every step, so a sagging elbow / wrist is aimed out instead of missed.
        float offset = aimOffset;
        if (aimPoint && arm)
        {
            float shot = Mathf.Atan2(aimPoint.right.y, aimPoint.right.x) * Mathf.Rad2Deg;
            offset = Mathf.DeltaAngle(arm.rotation, shot);
            aimError = Mathf.DeltaAngle(shot, want);
        }
        float armRot = want - offset;
        float target = JointSign * Mathf.DeltaAngle(torso.rotation, armRot);
        DriveArm(armFront.Upper, target);
        Drive(armFront.Middle, 0f, elbowStrength);
        Drive(armFront.Lower, 0f, elbowStrength);
        if (!aimPoint && arm) aimError = Mathf.DeltaAngle(arm.rotation, armRot);

        // A monster reaches with both arms; a gunner raises only the gun arm, the other one hangs.
        if (aimPoint)
        {
            Drive(armBack.Upper, 0f, armIdleStrength);
            Drive(armBack.Middle, 0f, elbowStrength);
            Drive(armBack.Lower, 0f, elbowStrength);
            return;
        }
        DriveArm(armBack.Upper, target);
        Drive(armBack.Middle, 0f, elbowStrength);
        Drive(armBack.Lower, 0f, elbowStrength);
    }

    // ---------------------------------------------------------------- helpers

    private void Upright(Rigidbody2D rb, float targetRotation, float gain)
    {
        if (!rb || gain <= 0f) return;
        float err = Mathf.DeltaAngle(rb.rotation, targetRotation);
        rb.AddTorque((err * gain - rb.angularVelocity * uprightDamp) * rb.mass * 0.01f * torqueScale);
    }

    private void Drive(HingeJoint2D joint, float targetAngle, float strength)
    {
        Drive(joint, targetAngle, strength, muscleGain, muscleMaxSpeed);
    }

    private void DriveArm(HingeJoint2D joint, float targetAngle)
    {
        Drive(joint, targetAngle, armReachStrength, armGain, armMaxSpeed);
    }

    private void Drive(HingeJoint2D joint, float targetAngle, float strength, float gain, float maxSpeed)
    {
        if (!joint || !joint.enabled) return;
        float speed = Mathf.Clamp(Mathf.DeltaAngle(joint.jointAngle, targetAngle) * gain, -maxSpeed, maxSpeed);
        JointMotor2D m = joint.motor;
        m.motorSpeed = speed;
        m.maxMotorTorque = strength * torqueScale;
        joint.motor = m;
        joint.useMotor = true;
    }

    public void RelaxAll()
    {
        if (joints == null) return;
        for (int i = 0; i < joints.Length; i++)
        {
            HingeJoint2D j = joints[i];
            if (!j) continue;
            JointMotor2D m = j.motor;
            m.motorSpeed = 0f;
            m.maxMotorTorque = 0f;
            j.motor = m;
            j.useMotor = false;
        }
    }

    // 2D joints have no projection: a hard hit leaves a hinge visibly stretched, so any socket past
    // a small tolerance is moved back (rb.position injects no impulse).
    private void ProjectJoints()
    {
        float tol = 0.03f * transform.lossyScale.y;
        for (int i = 0; i < joints.Length; i++)
        {
            HingeJoint2D j = joints[i];
            if (!j || !j.enabled || !j.connectedBody) continue;
            Vector2 socket = j.connectedBody.transform.TransformPoint(j.connectedAnchor);
            Vector2 error = socket - (Vector2)j.transform.TransformPoint(j.anchor);
            if (error.sqrMagnitude > tol * tol) j.attachedRigidbody.position += error;
        }
    }

    // Friction is changed by swapping to a material made for that value: Luna ignores edits to a
    // material a collider already uses (RSNM fix).
    private static readonly Dictionary<float, PhysicsMaterial2D> FrictionMaterials = new Dictionary<float, PhysicsMaterial2D>();

    private static void SetFriction(Collider2D col, float friction)
    {
        if (!col) return;
        PhysicsMaterial2D mat;
        if (!FrictionMaterials.TryGetValue(friction, out mat) || mat == null)
        {
            mat = new PhysicsMaterial2D();
            mat.friction = friction;
            mat.bounciness = 0f;
            FrictionMaterials[friction] = mat;
        }
        if (col.sharedMaterial != mat) col.sharedMaterial = mat;
    }
}

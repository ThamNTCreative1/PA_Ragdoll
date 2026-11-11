using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonsterController : MonoBehaviour, IDamageable
{
    [SerializeField] private int maxHP;
    [SerializeField] private int currentHP;
    [SerializeField] private List<Piece> pieces;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 maxForce = new Vector2(1000, 1000);
    [SerializeField] private Vector2 minForce = new Vector2(200, 200);
    [SerializeField] private BalanceController balance;
    [SerializeField] private bool isDead;
    public bool IsDead => isDead;

    [Header("Move")]
    [SerializeField] private float speed;
    [SerializeField] private Rigidbody2D body;
    [SerializeField] private HingeJoint2D leftHand;
    [SerializeField] private HingeJoint2D rightHand;
    [SerializeField] private HingeJoint2D leftLeg;
    [SerializeField] private HingeJoint2D rightLeg;

    [Header("Walk Animation")]
    [SerializeField] private HingeJoint2D leftForearm;
    [SerializeField] private HingeJoint2D rightForearm;
    [SerializeField] private HingeJoint2D leftShin;
    [SerializeField] private HingeJoint2D rightShin;
    [SerializeField] private float bodySwayAngle = 7f;
    [SerializeField] private float bodySwaySpeed = 5f;
    [SerializeField] private float armForwardAngle = -65f;
    [SerializeField] private float armSwayAngle = 14f;
    [SerializeField] private float armSwaySpeed = 2.5f;
    [SerializeField] private float armMotorStrength = 8f;
    [SerializeField] private float armMaxSpeed = 160f;
    [SerializeField] private float armTorque = 1200f;
    [SerializeField] private float legStrideAngle = 24f;
    [SerializeField] private float kneeBaseAngle = 8f;
    [SerializeField] private float kneeBendAngle = 32f;
    [SerializeField] private float legMotorStrength = 7f;
    [SerializeField] private float legMaxSpeed = 140f;
    [SerializeField] private float legTorque = 1600f;

    private float walkTime;
    private float gaitPhase;
    private float gaitRate;
    private float strideVariation;
    private float swayVariation;
    private float swayPhase;
    private float motionSeed;
    private float armRate;
    private float currentCadence;
    private float currentStride;
    private float leftArmPhase;
    private float rightArmPhase;
    private float leftArmOffset;
    private float rightArmOffset;
    private float animationDirection;
    private Rigidbody2D pelvis;
    private Rigidbody2D abdomen;
    private float standingHeight;
    private float supportedMass;
    private readonly Dictionary<Rigidbody2D, RigidbodyConstraints2D> standingConstraints = new Dictionary<Rigidbody2D, RigidbodyConstraints2D>();
    private readonly Dictionary<HingeJoint2D, JointAngleLimits2D> originalLimits = new Dictionary<HingeJoint2D, JointAngleLimits2D>();

    private bool isGameStart;
    private void Start()
    {
        currentHP = maxHP;
        InitializeWalkAnimation();
        Transform hip = transform.Find("Parts/hip_mid");
        Transform waist = transform.Find("Parts/abdomen_mid");
        pelvis = hip ? hip.GetComponent<Rigidbody2D>() : body;
        abdomen = waist ? waist.GetComponent<Rigidbody2D>() : null;
        foreach (Rigidbody2D torso in new[] { body, abdomen, pelvis })
        {
            if (!torso || standingConstraints.ContainsKey(torso)) continue;
            standingConstraints.Add(torso, torso.constraints);
            torso.constraints |= RigidbodyConstraints2D.FreezeRotation;
        }
        if (balance) balance.enabled = false;
        standingHeight = pelvis.position.y;
        GameObject groundObject = GameObject.Find("GAME/Ground");
        Collider2D ground = groundObject ? groundObject.GetComponent<Collider2D>() : null;
        float lowestFoot = float.PositiveInfinity;
        foreach (string path in new[] { "Parts/foot_front", "Parts/foot_back" })
        {
            Transform foot = transform.Find(path);
            if (!foot) continue;
            foreach (Collider2D collider in foot.GetComponents<Collider2D>())
                if (collider.enabled && !collider.isTrigger)
                    lowestFoot = Mathf.Min(lowestFoot, collider.bounds.min.y);
        }
        if (ground && !float.IsPositiveInfinity(lowestFoot))
            standingHeight += ground.bounds.max.y - lowestFoot - 0.03f;
        foreach (Rigidbody2D part in GetComponentsInChildren<Rigidbody2D>())
            if (part.bodyType == RigidbodyType2D.Dynamic && part.simulated)
                supportedMass += part.mass * part.gravityScale;
        GameController.Ins.OnStart += StartGame;
    }
    private void StartGame()
    {
        isGameStart = true;
    }
    private void FixedUpdate()
    {
        AnimateWalk();
        Move();
        StabilizeStanding();
    }
    public void TakeDamage(int amount)
    {
        currentHP -= amount;
        if (currentHP <= 0) Dead();
    }
    private void Dead()
    {
        if (isDead) return;
        isDead = true;
        if (balance) balance.enabled = false;
        foreach (var entry in standingConstraints)
            if (entry.Key) entry.Key.constraints = entry.Value;
        AudioController.Ins.PlaySFX(deadSFX);
        foreach (Piece p in pieces)
        {
            Vector2 force = new Vector2(Random.Range(minForce.x, maxForce.x), Random.Range(minForce.y, maxForce.y));
            if (p.Joint) p.Joint.enabled = false;
            p.Rb.AddForce(force);
        }
        GameController.Ins.RemoveMonster();
        StartCoroutine(Destroy());
    }
    private IEnumerator Destroy()
    {
        yield return new WaitForSeconds(5);
        Destroy(gameObject);
    }
    private void Move()
    {
        if (!isGameStart || isDead) return;
        // Keep the configured speed as the reference for a 5 rad/s, 24-degree gait.
        // Use the same cadence and stride sampled by AnimateWalk this physics tick.
        float cadenceRatio = Mathf.Abs(bodySwaySpeed) * currentCadence / 5f;
        float strideRatio = Mathf.Sin(Mathf.Min(Mathf.Abs(legStrideAngle) * currentStride, 80f) * Mathf.Deg2Rad)
            / Mathf.Sin(24f * Mathf.Deg2Rad);
        float velocity = -speed * 0.5f * cadenceRatio * strideRatio;
        body.linearVelocity = new Vector2(velocity, body.linearVelocity.y);
        if (pelvis) pelvis.linearVelocity = new Vector2(velocity, pelvis.linearVelocity.y);
    }
    private void InitializeWalkAnimation()
    {
        leftHand = FindJoint(leftHand, "Parts/upperarm_front");
        rightHand = FindJoint(rightHand, "Parts/upperarm_back");
        leftForearm = FindJoint(leftForearm, "Parts/forearm_front");
        rightForearm = FindJoint(rightForearm, "Parts/forearm_back");
        leftLeg = FindJoint(leftLeg, "Parts/thigh_front");
        rightLeg = FindJoint(rightLeg, "Parts/thigh_back");
        leftShin = FindJoint(leftShin, "Parts/shin_front");
        rightShin = FindJoint(rightShin, "Parts/shin_back");

        // Imported shoulders are locked at zero; allow the reaching pose.
        foreach (HingeJoint2D shoulder in new[] { leftHand, rightHand })
        {
            if (!shoulder) continue;
            JointAngleLimits2D limits = shoulder.limits;
            limits.min = -120f;
            limits.max = 120f;
            shoulder.limits = limits;
        }
        foreach (HingeJoint2D joint in new[] { leftHand, rightHand, leftForearm, rightForearm, leftLeg, rightLeg, leftShin, rightShin })
            if (joint && !originalLimits.ContainsKey(joint)) originalLimits.Add(joint, joint.limits);
        UpdateAnimationDirection();

        leftArmPhase = Random.Range(0f, Mathf.PI * 2f);
        rightArmPhase = Random.Range(0f, Mathf.PI * 2f);
        leftArmOffset = Random.Range(-armSwayAngle, armSwayAngle);
        rightArmOffset = Random.Range(-armSwayAngle, armSwayAngle);
        gaitPhase = Random.Range(0f, Mathf.PI * 2f);
        gaitRate = Random.Range(0.75f, 1.25f);
        strideVariation = Random.Range(0.75f, 1.1f);
        swayVariation = Random.Range(0.45f, 1f);
        swayPhase = Random.Range(-0.8f, 0.8f);
        motionSeed = Random.Range(0f, 1000f);
        armRate = Random.Range(0.7f, 1.3f);
    }

    private HingeJoint2D FindJoint(HingeJoint2D current, string path)
    {
        if (current) return current;
        Transform part = transform.Find(path);
        return part ? part.GetComponent<HingeJoint2D>() : null;
    }

    private void AnimateWalk()
    {
        if (isDead) return;

        UpdateAnimationDirection();
        currentCadence = gaitRate * Mathf.Lerp(0.85f, 1.15f, Mathf.PerlinNoise(motionSeed, walkTime * 0.35f));
        currentStride = strideVariation * Mathf.Lerp(0.9f, 1.05f, Mathf.PerlinNoise(motionSeed + 23f, walkTime * 0.5f));
        if (isGameStart)
        {
            walkTime += Time.fixedDeltaTime;
            // Integrate the changing cadence so the pose never jumps between steps.
            gaitPhase += Time.fixedDeltaTime * bodySwaySpeed * currentCadence;
        }
        if (balance)
            balance.targetRotation = GetBodySway();

        float forward = -Mathf.Clamp(Mathf.Abs(armForwardAngle), 75f, 100f);
        float leftTarget = forward + leftArmOffset
            + Mathf.Sin(walkTime * armSwaySpeed * armRate + leftArmPhase) * armSwayAngle;
        float rightTarget = forward + rightArmOffset
            + Mathf.Sin(walkTime * armSwaySpeed * armRate * 0.83f + rightArmPhase) * armSwayAngle;

        DriveArm(leftHand, leftTarget);
        DriveArm(rightHand, rightTarget);
        DriveArm(leftForearm, -5f);
        DriveArm(rightForearm, -5f);

        float step = isGameStart ? Mathf.Sin(gaitPhase) : 0f;
        float stride = currentStride;
        DriveLeg(leftLeg, step * legStrideAngle * stride);
        DriveLeg(rightLeg, -step * legStrideAngle * stride);
        DriveLeg(leftShin, kneeBaseAngle + Mathf.Max(0f, -step) * kneeBendAngle * stride);
        DriveLeg(rightShin, kneeBaseAngle + Mathf.Max(0f, step) * kneeBendAngle * stride);
    }

    private float GetBodySway()
    {
        if (!isGameStart) return 0f;
        float drift = (Mathf.PerlinNoise(motionSeed + 47f, walkTime * 0.4f) - 0.5f) * 1.2f;
        return (Mathf.Sin(gaitPhase + swayPhase) * Mathf.Min(Mathf.Abs(bodySwayAngle), 3f) * swayVariation + drift) * animationDirection;
    }

    private void DriveArm(HingeJoint2D joint, float targetAngle)
    {
        if (!joint) return;
        JointMotor2D motor = joint.motor;
        float delta = Mathf.DeltaAngle(joint.jointAngle, targetAngle * animationDirection);
        motor.motorSpeed = Mathf.Clamp(delta * armMotorStrength, -armMaxSpeed, armMaxSpeed);
        motor.maxMotorTorque = armTorque;
        joint.motor = motor;
        joint.useMotor = true;
    }

    private void StabilizeStanding()
    {
        if (isDead || !pelvis) return;
        // A damped vertical support keeps the multi-joint spine from collapsing.
        // Horizontal motion remains free for collisions and walking.
        float acceleration = (standingHeight - pelvis.position.y) * 70f
            - pelvis.linearVelocity.y * 16f - Physics2D.gravity.y;
        pelvis.AddForce(Vector2.up * Mathf.Clamp(acceleration, -35f, 70f) * supportedMass);
        float sway = GetBodySway();
        // Motors may push limbs, but cannot overturn the living torso.
        sway = Mathf.Clamp(sway, -4f, 4f);
        if (body) body.rotation = sway;
        pelvis.rotation = sway * 0.25f;
        if (abdomen)
            abdomen.rotation = sway * 0.5f;
    }

    private void DriveLeg(HingeJoint2D joint, float targetAngle)
    {
        if (!joint) return;
        JointMotor2D motor = joint.motor;
        float delta = Mathf.DeltaAngle(joint.jointAngle, targetAngle * animationDirection);
        motor.motorSpeed = Mathf.Clamp(delta * legMotorStrength, -legMaxSpeed, legMaxSpeed);
        motor.maxMotorTorque = legTorque;
        joint.motor = motor;
        joint.useMotor = true;
    }

    private void UpdateAnimationDirection()
    {
        float direction = transform.lossyScale.x < 0f ? -1f : 1f;
        if (direction == animationDirection) return;
        animationDirection = direction;
        // Mirror the allowed interval too, otherwise knees cannot reach negative targets.
        foreach (var entry in originalLimits)
        {
            if (!entry.Key) continue;
            JointAngleLimits2D limits = entry.Value;
            if (direction < 0f)
            {
                limits.min = -entry.Value.max;
                limits.max = -entry.Value.min;
            }
            entry.Key.limits = limits;
        }
    }
}
[System.Serializable]
public struct Piece
{
    public Joint2D Joint;
    public Rigidbody2D Rb;
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class ShootController : FightController
{
    [SerializeField] private HingeJoint2D left;
    [SerializeField] private HingeJoint2D right;

    [SerializeField] private bool onCD;
    [SerializeField] private float CD;
    [SerializeField] private Transform startPos;
    public MonsterController currentMonster;

    [Header("Weapon Pose")]
    [SerializeField] private float holdAngle = -85f;
    [SerializeField, Min(0.02f)] private float equipRaiseDuration = 0.1f;
    private float equipTime;
    private float equipStartAngle;
    [Header("Attack Arm Motion")]
    [SerializeField] private float attackLiftAngle = 8f;
    [SerializeField] private float attackLiftDuration = 0.12f;
    [SerializeField] private float attackReturnDuration = 0.22f;
    private float attackTime = float.PositiveInfinity;
    private readonly List<JointPose> joints = new List<JointPose>();
    private Transform character;

    private class JointPose
    {
        public HingeJoint2D Joint;
        public JointAngleLimits2D Limits;
        public JointMotor2D Motor;
        public bool UseMotor;
        public bool UseLimits;
        public float Angle;

        public bool KeepRelativeAngle;
    }

    private void OnEnable()
    {
        PlayerController player = GetComponentInParent<PlayerController>();
        if (!player) return;
        character = player.transform;
        attackTime = float.PositiveInfinity;
        joints.Clear();
        equipTime = 0f;
        equipStartAngle = left ? left.jointAngle : 0f;
        // Raise only the weapon arm at the shoulder; keep the prefab elbow/wrist pose.
        AddPose(left, holdAngle);
        Transform forearm = character.Find("Parts/forearm_front");
        HingeJoint2D elbow = forearm ? forearm.GetComponent<HingeJoint2D>() : null;
        if (elbow) AddPose(elbow, elbow.jointAngle, true);
        onCD = false;
    }
    private void SetArmPose(float targetAngle)
    {
        if (!left || !left.connectedBody) return;
        Rigidbody2D upperArm = left.GetComponent<Rigidbody2D>();
        if (!upperArm) return;
        // Hinge angle is connected-body rotation minus attached-body rotation.
        float rotationDelta = -Mathf.DeltaAngle(left.jointAngle, targetAngle);
        Vector2 pivot = left.transform.TransformPoint(left.anchor);
        Vector2 connectedPivot = left.connectedBody.transform.TransformPoint(left.connectedAnchor);
        Quaternion turn = Quaternion.Euler(0f, 0f, rotationDelta);
        var armBodies = new List<Rigidbody2D> { upperArm };
        foreach (string path in new[] { "Parts/forearm_front", "Parts/hand_front" })
        {
            Transform part = character.Find(path);
            Rigidbody2D rb = part ? part.GetComponent<Rigidbody2D>() : null;
            if (rb && !armBodies.Contains(rb)) armBodies.Add(rb);
        }
        // Move the entire arm together so the elbow/wrist do not have to catch up.
        foreach (Rigidbody2D rb in armBodies)
        {
            rb.position = connectedPivot + (Vector2)(turn * (Vector3)(rb.position - pivot));
            rb.rotation += rotationDelta;
            // Inherit torso motion without GetPointVelocity (unsupported by the playable build).
            rb.linearVelocity = left.connectedBody.linearVelocity;
            rb.angularVelocity = left.connectedBody.angularVelocity;
        }
    }
    private void OnDisable()
    {
        StopAllCoroutines();
        onCD = false;
        attackTime = float.PositiveInfinity;
        foreach (JointPose pose in joints)
        {
            if (!pose.Joint) continue;
            pose.Joint.limits = pose.Limits;
            pose.Joint.motor = pose.Motor;
            pose.Joint.useMotor = pose.UseMotor;
            pose.Joint.useLimits = pose.UseLimits;
        }
        joints.Clear();
    }

    private IEnumerator WaitForCD()
    {
        onCD = true;
        yield return new WaitForSeconds(CD);
        onCD = false;
    }
    public override void Action([Bridge.Ref] Vector2 position, [Bridge.Ref] Quaternion rotation)
    {
        if (onCD) return;
        base.Action(position, rotation);
    }
    protected override void Spawn([Bridge.Ref] Vector2 position, [Bridge.Ref] Quaternion rotation)
    {
        base.Spawn(position, rotation);
        if (attackTime >= Mathf.Max(0.02f, attackLiftDuration) + Mathf.Max(0.02f, attackReturnDuration))
            attackTime = 0f;
        StartCoroutine(WaitForCD());
    }
    private void AddPose(HingeJoint2D joint, float angle, bool keepRelativeAngle = false)
    {
        if (!joint) return;
        joints.Add(new JointPose { Joint = joint, Limits = joint.limits, Motor = joint.motor,
            UseMotor = joint.useMotor, UseLimits = joint.useLimits, Angle = angle,
            KeepRelativeAngle = keepRelativeAngle });
        SetAngleLimit(joint, keepRelativeAngle ? angle : equipStartAngle);
    }
    private static void SetAngleLimit(HingeJoint2D joint, float angle)
    {
        JointAngleLimits2D limits = joint.limits;
        limits.min = angle;
        limits.max = angle;
        joint.limits = limits;
        joint.useMotor = false;
        joint.useLimits = true;
    }
    private void FixedUpdate()
    {
        if (!character) return;
        float direction = character.lossyScale.x < 0f ? -1f : 1f;
        float equipDuration = Mathf.Max(0.02f, equipRaiseDuration);
        bool raising = equipTime < equipDuration;
        equipTime = Mathf.Min(equipTime + Time.fixedDeltaTime, equipDuration);
        float liftDuration = Mathf.Max(0.02f, attackLiftDuration);
        float returnDuration = Mathf.Max(0.02f, attackReturnDuration);
        bool attacking = attackTime < liftDuration + returnDuration;
        float lift = 0f;
        if (attacking)
        {
            attackTime += Time.fixedDeltaTime;
            lift = attackTime < liftDuration
                ? Mathf.SmoothStep(0f, 1f, attackTime / liftDuration)
                : Mathf.SmoothStep(1f, 0f, (attackTime - liftDuration) / returnDuration);
        }
        foreach (JointPose pose in joints)
        {
            if (!pose.Joint || !pose.Joint.enabled) continue;
            if (pose.KeepRelativeAngle)
            {
                // The elbow follows the upper arm, rather than bending during the lift.
                SetAngleLimit(pose.Joint, pose.Angle);
                continue;
            }
            float target = (pose.Angle - attackLiftAngle * lift) * direction;
            if (raising)
            {
                target = Mathf.LerpAngle(equipStartAngle, target, Mathf.SmoothStep(0f, 1f, equipTime / equipDuration));
                SetArmPose(target);
            }
            SetAngleLimit(pose.Joint, target);
        }
    }
    private void Update()
    {
        CheckInput();
    }
    private void CheckInput()
    {
        if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId)) return;
            Action(startPos.position, startPos.rotation);
            return;
        }
        if (Input.GetMouseButtonDown(0))
        {
            if (EventSystem.current.IsPointerOverGameObject()) return;
            Action(startPos.position, startPos.rotation);
        }
    }
}


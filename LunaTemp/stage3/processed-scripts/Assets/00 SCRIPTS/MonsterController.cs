using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonsterController : MonoBehaviour
{
    [SerializeField] private int maxHP;
    [SerializeField] private int currentHP;
    [SerializeField] private List<Piece> pieces;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 maxForce = new Vector2(1000, 1000);
    [SerializeField] private Vector2 minForce = new Vector2(200, 200);
    [SerializeField] private BalanceController balance;
    [SerializeField] private bool isDead;
    [Header("Walk")]
    [SerializeField] private float moveSpeed = 0.8f;
    [SerializeField] private float stepRate = 5f;
    [SerializeField] private float strideAngle = 24f;
    [SerializeField] private float stopDistance = 0.6f;
    private Rigidbody2D chest, pelvis, abdomen;
    private Transform target;
    private float phase, cadence, standingHeight, supportedMass;
    private Collider2D ground;
    private bool hasLanded;
    private readonly List<Collider2D> feet = new List<Collider2D>();
    private readonly Dictionary<Rigidbody2D, RigidbodyConstraints2D> standingConstraints = new Dictionary<Rigidbody2D, RigidbodyConstraints2D>();
    private readonly List<HingeJoint2D> walkingJoints = new List<HingeJoint2D>();
    private readonly List<JointAngleLimits2D> walkingLimits = new List<JointAngleLimits2D>();

    private Rigidbody2D FindBody(string part)
    {
        Transform t = transform.Find("Parts/" + part);
        return t ? t.GetComponent<Rigidbody2D>() : null;
    }

    private void InitializeWalk()
    {
        chest = FindBody("chest_mid");
        pelvis = FindBody("hip_mid");
        abdomen = FindBody("abdomen_mid");
        if (!chest || !pelvis) return;
        if (GameController.Ins && GameController.Ins.P)
        {
            Transform player = GameController.Ins.P.transform;
            target = player.Find("Parts/hip_mid");
            if (!target) target = player;
        }
        if (balance) balance.enabled = false;
        foreach (Rigidbody2D rb in new[] { chest, pelvis, abdomen })
        {
            if (!rb) continue;
            standingConstraints[rb] = rb.constraints;
            rb.constraints |= RigidbodyConstraints2D.FreezeRotation;
        }
        standingHeight = pelvis.position.y;
        GameObject groundObject = GameObject.Find("GAME/Ground");
        ground = groundObject ? groundObject.GetComponent<Collider2D>() : null;
        float lowestFoot = float.PositiveInfinity;
        foreach (string foot in new[] { "foot_front", "foot_back" })
        {
            Rigidbody2D rb = FindBody(foot);
            if (!rb) continue;
            foreach (Collider2D c in rb.GetComponents<Collider2D>())
                if (c.enabled && !c.isTrigger)
                {
                    feet.Add(c);
                    lowestFoot = Mathf.Min(lowestFoot, c.bounds.min.y);
                }
        }
        if (ground && !float.IsPositiveInfinity(lowestFoot))
            standingHeight += ground.bounds.max.y - lowestFoot - 0.03f;
        foreach (Rigidbody2D rb in GetComponentsInChildren<Rigidbody2D>())
            if (rb.simulated && rb.bodyType == RigidbodyType2D.Dynamic)
                supportedMass += rb.mass * rb.gravityScale;
        foreach (string part in new[] { "upperarm_front", "upperarm_back", "forearm_front", "forearm_back", "thigh_front", "thigh_back", "shin_front", "shin_back" })
        {
            Rigidbody2D rb = FindBody(part);
            HingeJoint2D joint = rb ? rb.GetComponent<HingeJoint2D>() : null;
            walkingJoints.Add(joint);
            walkingLimits.Add(joint ? joint.limits : default(JointAngleLimits2D));
        }
        cadence = Random.Range(0.75f, 1.25f);
        phase = Random.Range(0f, Mathf.PI * 2f);
    }

    private void FixedUpdate()
    {
        if (isDead || !chest || !pelvis) return;
        // Start locomotion only after a real foot/ground contact. Until then,
        // gravity handles the fall without horizontal drive or vertical support.
        if (!hasLanded)
        {
            if (!ground) return;
            foreach (Collider2D foot in feet)
                if (foot && foot.IsTouching(ground)) { hasLanded = true; break; }
            if (!hasLanded) return;
        }
        float delta = target ? target.position.x - pelvis.position.x : 0f;
        bool walking = target && Mathf.Abs(delta) > stopDistance;
        float direction = delta < 0f ? -1f : 1f;
        if (walking) phase += Time.fixedDeltaTime * stepRate * cadence;
        float step = walking ? Mathf.Sin(phase) : 0f;
        float velocity = walking ? direction * moveSpeed * cadence : 0f;
        chest.linearVelocity = new Vector2(velocity, chest.linearVelocity.y);
        pelvis.linearVelocity = new Vector2(velocity, pelvis.linearVelocity.y);
        for (int i = 0; i < walkingJoints.Count; i++)
        {
            HingeJoint2D joint = walkingJoints[i];
            if (!joint || !joint.enabled) continue;
            float angle = i < 2 ? -85f + Mathf.Sin(phase * 0.5f + i) * 14f :
                i < 4 ? -5f : i == 4 ? step * strideAngle : i == 5 ? -step * strideAngle :
                8f + Mathf.Max(0f, i == 6 ? -step : step) * 32f;
            JointAngleLimits2D limits = walkingLimits[i];
            if (i < 2) { limits.min = -120f; limits.max = 120f; }
            if (direction < 0f) { float min = limits.min; limits.min = -limits.max; limits.max = -min; }
            joint.limits = limits;
            JointMotor2D motor = joint.motor;
            motor.motorSpeed = Mathf.Clamp(Mathf.DeltaAngle(joint.jointAngle, angle * direction) * 7f, -160f, 160f);
            motor.maxMotorTorque = i < 4 ? 1200f : 1600f;
            joint.motor = motor;
            joint.useMotor = true;
        }
        float acceleration = (standingHeight - pelvis.position.y) * 70f - pelvis.linearVelocity.y * 16f - Physics2D.gravity.y;
        pelvis.AddForce(Vector2.up * Mathf.Clamp(acceleration, -35f, 70f) * supportedMass);
        float sway = walking ? Mathf.Sin(phase) * 2f : 0f;
        chest.rotation = sway;
        pelvis.rotation = sway * 0.25f;
        if (abdomen) abdomen.rotation = sway * 0.5f;
    }

    private void Start()
    {
        if (pieces == null || pieces.Count == 0)
        {
            pieces = new List<Piece>();
            foreach (Rigidbody2D rb in GetComponentsInChildren<Rigidbody2D>())
            {
                if (rb.transform == transform) continue;
                pieces.Add(new Piece
                {
                    Joint = rb.GetComponent<Joint2D>(),
                    Rb = rb
                });
            }
        }

        if (!balance) balance = GetComponent<BalanceController>();
        currentHP = maxHP;
        InitializeWalk();
    }
    public void TakeDamage(int amount)
    {
        if (isDead || amount <= 0) return;
        currentHP -= amount;
        if (currentHP <= 0) Dead();
    }
    private void Dead()
    {
        if (isDead) return;
        isDead = true;
        foreach (var entry in standingConstraints)
            if (entry.Key) entry.Key.constraints = entry.Value;
        foreach (HingeJoint2D joint in walkingJoints)
            if (joint) joint.useMotor = false;
        if (balance) balance.enabled = false;
        if (AudioController.Ins) AudioController.Ins.PlaySFX(deadSFX);
        foreach (Piece p in pieces)
        {
            Vector2 force = new Vector2(Random.Range(minForce.x, maxForce.x), Random.Range(minForce.y, maxForce.y));
            if (p.Joint) p.Joint.enabled = false;
            if (p.Rb) p.Rb.AddForce(force);
        }
        GameController.Ins.RemoveMonster();
        StartCoroutine(Destroy());
    }
    private IEnumerator Destroy()
    {
        yield return new WaitForSeconds(5);
        Destroy(gameObject);
    }
}
[System.Serializable]
public struct Piece
{
    public Joint2D Joint;
    public Rigidbody2D Rb;
}

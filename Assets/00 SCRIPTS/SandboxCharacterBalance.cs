using UnityEngine;

// Applies bounded forces to the existing ragdoll; never snaps its transforms.
public class SandboxCharacterBalance : MonoBehaviour
{
    [SerializeField] private float uprightStrength = 55f;
    [SerializeField] private float angularDamping = 10f;
    [SerializeField] private float maximumTorque = 80f;
    [SerializeField] private float supportStrength = 35f;
    [SerializeField] private float supportDamping = 8f;
    [SerializeField, Range(0f, 5f)] private float swayAngle = 1.5f;
    [SerializeField, Min(.5f)] private float swayPeriod = 3f;
    private float swayPhase;
    private float swayWeight;
    private float stableTime;
    private MelonHitTarget health;
    private Rigidbody2D[] parts;
    private Rigidbody2D torso;
    private Collider2D[] feet;
    private float recovery;

    private void Awake()
    {
        health = GetComponent<MelonHitTarget>();
        swayPhase = Random.Range(0f, Mathf.PI * 2f);
        parts = GetComponentsInChildren<Rigidbody2D>();
        Transform body = transform.Find("Body");
        if (body) torso = body.GetComponent<Rigidbody2D>();
        var supports = new System.Collections.Generic.List<Collider2D>();
        foreach (Collider2D shape in GetComponentsInChildren<Collider2D>())
            if (shape.name.Contains("Leg") || shape.name.Contains("Foot")) supports.Add(shape);
        feet = supports.ToArray();
    }

    private void FixedUpdate()
    {
        if (!health || !torso) return;
        // Let the entire body hang naturally while any limb is being dragged.
        foreach (Rigidbody2D part in parts)
        {
            if (!part) continue;
            TargetJoint2D grip = part.GetComponent<TargetJoint2D>();
            if (grip && grip.enabled) { recovery = 0; swayWeight = 0; stableTime = 0; return; }
        }
        recovery = Mathf.MoveTowards(recovery, 1f, Time.fixedDeltaTime * 3f);
        // Keep the torso above feet that actually touch scenery, without pinning its X position.
        float supportX = 0;
        int grounded = 0;
        foreach (Collider2D foot in feet)
        {
            if (!foot) continue;
            Bounds bounds = foot.bounds;
            foreach (RaycastHit2D hit in Physics2D.RaycastAll(new Vector2(bounds.center.x, bounds.min.y + .03f), Vector2.down, .16f))
            {
                if (!hit.collider || hit.collider.isTrigger || hit.rigidbody || hit.normal.y < .5f) continue;
                supportX += bounds.center.x;
                grounded++;
                break;
            }
        }
        if (grounded > 0)
        {
            float force = (supportX / grounded - torso.position.x) * supportStrength - torso.linearVelocity.x * supportDamping;
            torso.AddForce(Vector2.right * Mathf.Clamp(force, -40f, 40f) * recovery);
        }
        bool stable = grounded > 0 && Mathf.Abs(Mathf.DeltaAngle(torso.rotation, 0f)) < 8f
            && torso.linearVelocity.sqrMagnitude < .25f && Mathf.Abs(torso.angularVelocity) < 20f;
        stableTime = stable ? stableTime + Time.fixedDeltaTime : 0f;
        swayWeight = Mathf.MoveTowards(swayWeight, stableTime > .5f ? 1f : 0f, Time.fixedDeltaTime * 2f);
        swayPhase += Time.fixedDeltaTime * Mathf.PI * 2f / Mathf.Max(.5f, swayPeriod);
        float sway = Mathf.Sin(swayPhase) * swayAngle * swayWeight;
        foreach (Rigidbody2D part in parts)
        {
            if (!part || part.gameObject == gameObject) continue;
            bool arm = part.name.Contains("Arm") || part.name.Contains("Hand");
            bool leg = part.name.Contains("Leg") || part.name.Contains("Foot");
            float weight = arm ? .08f : 1f;
            float targetAngle = leg ? 0f : sway * (arm ? 1.5f : 1f);
            float angle = Mathf.DeltaAngle(part.rotation, targetAngle) * Mathf.Deg2Rad;
            float torque = angle * uprightStrength - part.angularVelocity * Mathf.Deg2Rad * angularDamping;
            part.AddTorque(Mathf.Clamp(torque * weight, -maximumTorque, maximumTorque) * recovery);
        }
    }
}

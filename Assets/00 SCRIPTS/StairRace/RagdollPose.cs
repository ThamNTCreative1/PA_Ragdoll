using UnityEngine;

/// <summary>
/// Poses a 2D ragdoll prefab (Head/Body/LeftHand/RightHand/LeftLeg/RightLeg) without physics.
/// Physics stays OFF (simulated = false) until EnableRagdoll() is called -> zero physics cost while playing.
/// Angles are in degrees. Arm angle 0 = hanging down, +90 = pointing to +X (screen right), -90 = to -X, 180 = up.
/// </summary>
public class RagdollPose : MonoBehaviour
{
    [Header("Parts (auto found by name if empty)")]
    public Transform head;
    public Transform body;
    public Transform leftHand;
    public Transform rightHand;
    public Transform leftLeg;
    public Transform rightLeg;

    [Header("Joint pivots (root local space)")]
    public Vector2 shoulder = new Vector2(0f, 0.25f);
    public Vector2 neck = new Vector2(0f, 0.35f);
    public Vector2 hipLeft = new Vector2(-0.07f, -0.25f);
    public Vector2 hipRight = new Vector2(0.07f, -0.25f);
    public float handTipLocal = -0.32f;

    [Header("Current pose")]
    public float leftArm;
    public float rightArm;
    public float leftLegAngle;
    public float rightLegAngle;
    public float headAngle;
    public float bob;

    [HideInInspector] public float feetOffset;   // root.y - lowest point of the character
    [HideInInspector] public float height;       // lowest point -> highest point

    private Vector3 headRest, bodyRest, lhRest, rhRest, llRest, rlRest;
    private Rigidbody2D[] bodies;
    private Rigidbody2D rootBody;
    private bool inited;
    private bool ragdoll;
    private Vector3 handTip;

    public bool IsRagdoll { get { return ragdoll; } }

    public void Init()
    {
        if (inited) return;
        inited = true;
        if (!head) head = transform.Find("Head");
        if (!body) body = transform.Find("Body");
        if (!leftHand) leftHand = transform.Find("LeftHand");
        if (!rightHand) rightHand = transform.Find("RightHand");
        if (!leftLeg) leftLeg = transform.Find("LeftLeg");
        if (!rightLeg) rightLeg = transform.Find("RightLeg");

        headRest = head.localPosition;
        bodyRest = body.localPosition;
        lhRest = leftHand.localPosition;
        rhRest = rightHand.localPosition;
        llRest = leftLeg.localPosition;
        rlRest = rightLeg.localPosition;
        handTip = new Vector3(0f, handTipLocal, 0f);

        rootBody = GetComponent<Rigidbody2D>();
        bodies = GetComponentsInChildren<Rigidbody2D>(true);
        for (int i = 0; i < bodies.Length; i++) bodies[i].simulated = false;

        Apply();
        MeasureBounds();
    }

    private void MeasureBounds()
    {
        SpriteRenderer[] srs = GetComponentsInChildren<SpriteRenderer>(true);
        float minY = float.MaxValue, maxY = float.MinValue;
        for (int i = 0; i < srs.Length; i++)
        {
            Bounds b = srs[i].bounds;
            if (b.min.y < minY) minY = b.min.y;
            if (b.max.y > maxY) maxY = b.max.y;
        }
        feetOffset = transform.position.y - minY;
        height = maxY - minY;
    }

    private static Vector3 Rotate(Vector3 v, float deg)
    {
        float r = deg * Mathf.Deg2Rad;
        float c = Mathf.Cos(r), s = Mathf.Sin(r);
        return new Vector3(v.x * c - v.y * s, v.x * s + v.y * c, v.z);
    }

    private static void Limb(Transform t, Vector3 rest, Vector2 pivot, float angle, float yOffset)
    {
        Vector3 p = new Vector3(pivot.x, pivot.y, rest.z);
        Vector3 local = p + Rotate(rest - p, angle);
        local.y += yOffset;
        t.localPosition = local;
        t.localRotation = Quaternion.Euler(0f, 0f, angle);
    }

    /// <summary>Write the current pose to the transforms. Call once per frame (LateUpdate) while not ragdoll.</summary>
    public void Apply()
    {
        if (ragdoll) return;
        Vector3 b = bodyRest; b.y += bob;
        body.localPosition = b;
        body.localRotation = Quaternion.identity;
        Limb(head, headRest, neck, headAngle, bob);
        Limb(leftHand, lhRest, shoulder, leftArm, bob);
        Limb(rightHand, rhRest, shoulder, rightArm, bob);
        Limb(leftLeg, llRest, hipLeft, leftLegAngle, 0f);
        Limb(rightLeg, rlRest, hipRight, rightLegAngle, 0f);
    }

    public Vector3 LeftHandTip { get { return leftHand.TransformPoint(handTip); } }
    public Vector3 RightHandTip { get { return rightHand.TransformPoint(handTip); } }

    /// <summary>Turn on physics and throw the character.</summary>
    public void EnableRagdoll(Vector2 impulse, float torque)
    {
        if (ragdoll) return;
        ragdoll = true;
        for (int i = 0; i < bodies.Length; i++)
        {
            Rigidbody2D rb = bodies[i];
            if (rb == rootBody) continue; // root body stays off, parts are free
            rb.bodyType = RigidbodyType2D.Dynamic;
            rb.simulated = true;
        }
        Rigidbody2D main = body.GetComponent<Rigidbody2D>();
        if (main)
        {
            main.AddForce(impulse, ForceMode2D.Impulse);
            main.AddTorque(torque, ForceMode2D.Impulse);
        }
        Rigidbody2D h = head.GetComponent<Rigidbody2D>();
        if (h) h.AddForce(impulse * 0.5f, ForceMode2D.Impulse);
    }
}

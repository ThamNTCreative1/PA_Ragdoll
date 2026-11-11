using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Keeps a Sprunky-style 2D ragdoll upright while preserving a small idle sway.
/// Expected hierarchy: Parts/hip_mid, abdomen_mid, chest_mid and paired leg parts.
/// </summary>
public class PlayerRagdollBalance : MonoBehaviour
{
    [SerializeField] private float idleSwayAngle = 2f;
    [SerializeField] private float idleSwaySpeed = 1.8f;
    [SerializeField] private float correctionSpeed = 5f;

    private readonly Dictionary<Rigidbody2D, float> standingAngles = new Dictionary<Rigidbody2D, float>();
    private readonly Dictionary<Rigidbody2D, RigidbodyConstraints2D> originalConstraints = new Dictionary<Rigidbody2D, RigidbodyConstraints2D>();
    private float phase;

    private static readonly string[] SupportedParts =
    {
        "hip_mid", "abdomen_mid", "chest_mid",
        "thigh_front", "thigh_back", "shin_front", "shin_back",
        "foot_front", "foot_back"
    };

    private void Awake()
    {
        foreach (string partName in SupportedParts)
        {
            Transform part = transform.Find("Parts/" + partName);
            Rigidbody2D body = part ? part.GetComponent<Rigidbody2D>() : null;
            if (!body) continue;

            originalConstraints.Add(body, body.constraints);
            standingAngles.Add(body, body.rotation);
            body.constraints |= partName == "hip_mid"
                ? RigidbodyConstraints2D.FreezeAll
                : RigidbodyConstraints2D.FreezeRotation;

            if (!partName.StartsWith("thigh_") &&
                !partName.StartsWith("shin_") &&
                !partName.StartsWith("foot_")) continue;

            HingeJoint2D joint = part.GetComponent<HingeJoint2D>();
            if (!joint || !joint.connectedBody) continue;

            joint.autoConfigureConnectedAnchor = false;
            joint.connectedAnchor = joint.connectedBody.transform.InverseTransformPoint(
                part.TransformPoint(joint.anchor));

            JointAngleLimits2D limits = joint.limits;
            limits.min = Mathf.Min(limits.min, joint.jointAngle);
            limits.max = Mathf.Max(limits.max, joint.jointAngle);
            joint.limits = limits;
        }
    }

    private void FixedUpdate()
    {
        phase += Time.fixedDeltaTime * idleSwaySpeed;
        float sway = Mathf.Sin(phase) * idleSwayAngle;

        foreach (KeyValuePair<Rigidbody2D, float> entry in standingAngles)
        {
            Rigidbody2D body = entry.Key;
            if (!body) continue;

            float weight = body.name == "chest_mid" ? 1f :
                body.name == "abdomen_mid" ? 0.6f : 0f;
            float target = entry.Value + sway * weight;
            float blend = 1f - Mathf.Exp(-correctionSpeed * Time.fixedDeltaTime);
            body.MoveRotation(Mathf.LerpAngle(body.rotation, target, blend));
        }
    }

    public void ReleaseRagdoll()
    {
        foreach (KeyValuePair<Rigidbody2D, RigidbodyConstraints2D> entry in originalConstraints)
            if (entry.Key) entry.Key.constraints = entry.Value;

        enabled = false;
    }
}

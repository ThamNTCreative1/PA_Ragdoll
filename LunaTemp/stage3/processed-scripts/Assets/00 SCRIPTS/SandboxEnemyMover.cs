using UnityEngine;

// Procedural walking for the existing multipart zombie prefab.
public class SandboxEnemyMover : MonoBehaviour
{
    private float speed;
    private Rigidbody2D[] parts;
    private float landingY, fallSpeed, phase, landedTime;
    private bool landed;
    private Transform[] limbs;
    private Vector3[] positions, anchors;
    private Quaternion[] rotations;
    private MelonSandboxGameplay gameplay;
    private SpriteRenderer[] contactSprites;
    public bool HasLanded => landed;

    public void Initialize(float moveSpeed, float floorRootY, MelonSandboxGameplay owner)
    {
        speed = Mathf.Max(0f, moveSpeed);
        landingY = floorRootY;
        gameplay = owner;
        landed = transform.position.y <= landingY;
        phase = Random.Range(0f, Mathf.PI * 2f);
        SpriteRenderer[] sprites = GetComponentsInChildren<SpriteRenderer>();
        contactSprites = sprites;
        limbs = new Transform[sprites.Length];
        positions = new Vector3[sprites.Length];
        anchors = new Vector3[sprites.Length];
        rotations = new Quaternion[sprites.Length];
        for (int i = 0; i < sprites.Length; i++)
        {
            limbs[i] = sprites[i].transform;
            positions[i] = limbs[i].localPosition;
            rotations[i] = limbs[i].localRotation;
            HingeJoint2D hinge = limbs[i].GetComponent<HingeJoint2D>();
            anchors[i] = hinge ? Vector3.Scale((Vector3)hinge.anchor, limbs[i].localScale) : Vector3.zero;
        }
        foreach (Joint2D joint in GetComponentsInChildren<Joint2D>()) joint.enabled = false;
        parts = GetComponentsInChildren<Rigidbody2D>();
        foreach (Rigidbody2D part in parts)
        {
            part.bodyType = RigidbodyType2D.Kinematic;
            part.gravityScale = 0f;
            part.simulated = false;
        }
        foreach (Collider2D shape in GetComponentsInChildren<Collider2D>()) shape.enabled = false;
    }

    private void Update() => Advance(Time.deltaTime);

    private void Advance(float dt)
    {
        if (parts == null) return;
        if (!landed)
        {
            fallSpeed += 18f * dt;
            Vector3 position = transform.position;
            position.y = Mathf.Max(landingY, position.y - fallSpeed * dt);
            transform.position = position;
            if (position.y <= landingY) landed = true;
            return;
        }
        landedTime += dt;
        float weight = Mathf.Clamp01((landedTime - .15f) / .3f);
        phase += dt * Mathf.PI * 2f / 1.1f;
        float step = speed * weight * dt;
        transform.position += Vector3.left * step;
        for (int i = 0; i < limbs.Length; i++)
        {
            Transform limb = limbs[i];
            if (!limb) continue;
            bool leg = limb.name.Contains("Leg");
            bool arm = limb.name.Contains("Hand");
            float side = limb.name.Contains("Left") ? 1f : -1f;
            float angle = leg ? Mathf.Sin(phase) * 22f * side
                : arm ? 72f + 6f * Mathf.Sin(phase + side) : 3f + 2f * Mathf.Sin(phase);
            Quaternion rotation = rotations[i] * Quaternion.Euler(0, 0, angle * weight);
            float bob = leg ? 0f : .025f * (1f - Mathf.Cos(phase * 2f)) * weight;
            limb.localRotation = rotation;
            limb.localPosition = positions[i] + rotations[i] * anchors[i] - rotation * anchors[i] + Vector3.up * bob;
        }
    }

    private void LateUpdate()
    {
        if (!landed || !gameplay || contactSprites == null) return;
        int mask = 1 << LayerMask.NameToLayer("Player");
        foreach (SpriteRenderer sprite in contactSprites)
        {
            if (!sprite) continue;
            Bounds bounds = sprite.bounds;
            foreach (Collider2D hit in Physics2D.OverlapBoxAll(bounds.center, bounds.size, 0f, mask))
            {
                MelonHitTarget player = hit.GetComponentInParent<MelonHitTarget>();
                if (player) gameplay.TryInfect(player);
            }
        }
    }
}

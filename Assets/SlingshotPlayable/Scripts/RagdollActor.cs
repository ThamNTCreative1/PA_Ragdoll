using UnityEngine;

public class RagdollActor : MonoBehaviour
{
    public Rigidbody2D torso;
    public Rigidbody2D[] bodies;
    public SpriteRenderer[] renderers;
    public bool hasCollided;
    public bool reactiveTarget;
    public bool knockedDown;
    Vector3[] localPositions;
    Quaternion[] localRotations;
    int[] orders;
    bool initialized;
    Vector3[] flightVisualPositions;
    Quaternion[] flightVisualRotations;
    Vector2[] flightPivots;
    float[] flightAngles, flightAngularSpeeds;
    bool flightVisuals;
    float flightVisualTime;

    void BeginFlightVisuals()
    {
        int count = renderers.Length;
        if (flightAngles == null || flightAngles.Length != count)
        {
            flightVisualPositions = new Vector3[count];
            flightVisualRotations = new Quaternion[count];
            flightPivots = new Vector2[count];
            flightAngles = new float[count];
            flightAngularSpeeds = new float[count];
        }
        for (int i = 0; i < count; i++)
        {
            Transform visual = renderers[i].transform;
            flightVisualPositions[i] = visual.localPosition;
            flightVisualRotations[i] = visual.localRotation;
            HingeJoint2D joint = visual.parent.GetComponent<HingeJoint2D>();
            flightPivots[i] = joint != null ? joint.anchor : Vector2.zero;
            flightAngles[i] = 0;
            flightAngularSpeeds[i] = 0;
        }
        flightVisualTime = 0;
        flightVisuals = true;
    }

    void LateUpdate() { AdvanceFlightVisuals(Time.deltaTime); }

    // Spring motion on the artwork keeps the belly's ballistic physics unchanged.
    void AdvanceFlightVisuals(float dt)
    {
        if (!flightVisuals || torso == null) return;
        dt = Mathf.Min(dt, .033f);
        flightVisualTime += dt;
        Vector2 velocity = torso.linearVelocity;
        float strength = Mathf.Clamp01(velocity.magnitude / 16f);
        float direction = Mathf.Clamp(velocity.x / 8f, -1f, 1f);
        bool airborne = !hasCollided && torso.bodyType == RigidbodyType2D.Dynamic;
        for (int i = 1; i < renderers.Length; i++)
        {
            bool head = i == 1;
            bool arm = i == 2 || i == 4;
            float phase = i * 1.7f;
            float drag = direction * strength * (head ? 18f : arm ? -42f : -30f);
            float flutter = Mathf.Sin(flightVisualTime * (head ? 8f : 11f) + phase)
                * strength * (head ? 5f : arm ? 12f : 9f);
            float kick = Mathf.Sin(flightVisualTime * 17f + phase)
                * Mathf.Exp(-flightVisualTime * 4f) * (head ? 8f : 18f);
            float target = airborne ? drag + flutter + kick : 0;
            float spring = head ? 105f : 75f;
            flightAngularSpeeds[i] += ((target - flightAngles[i]) * spring
                - flightAngularSpeeds[i] * 13f) * dt;
            flightAngles[i] = Mathf.Clamp(flightAngles[i] + flightAngularSpeeds[i] * dt,
                head ? -26f : -62f, head ? 26f : 62f);
            Quaternion rotation = Quaternion.Euler(0, 0, flightAngles[i]);
            Vector3 pivot = flightPivots[i];
            Transform visual = renderers[i].transform;
            visual.localPosition = pivot + rotation * (flightVisualPositions[i] - pivot);
            visual.localRotation = rotation * flightVisualRotations[i];
        }
    }
    void Awake() { IgnoreSelfCollision(); }
    void IgnoreSelfCollision()
    {
        var colliders = GetComponentsInChildren<Collider2D>(true);
        for (int i = 0; i < colliders.Length; i++)
            for (int j = i + 1; j < colliders.Length; j++) Physics2D.IgnoreCollision(colliders[i], colliders[j]);
    }
    public void Initialize()
    {
        if (initialized) return;
        initialized = true;
        IgnoreSelfCollision();
        localPositions = new Vector3[bodies.Length];
        localRotations = new Quaternion[bodies.Length];
        orders = new int[renderers.Length];
        for (int i = 0; i < bodies.Length; i++)
        {
            localPositions[i] = bodies[i].transform.localPosition;
            localRotations[i] = bodies[i].transform.localRotation;
        }
        for (int i = 0; i < renderers.Length; i++) orders[i] = renderers[i].sortingOrder;
    }
    public void LoadAt(Vector2 position)
    {
        Initialize();
        // Đặt vị trí + tư thế TRƯỚC khi bật object để body vật lý được tạo đúng chỗ.
        flightVisuals = false;
        for (int i = 0; i < renderers.Length; i++) renderers[i].transform.localRotation = Quaternion.identity;
        transform.position = position;
        hasCollided = false; pendingFreeze = false;
        for (int i = 0; i < bodies.Length; i++)
        {
            bodies[i].simulated = false;
            bodies[i].bodyType = RigidbodyType2D.Dynamic;
            bodies[i].transform.localPosition = localPositions[i];
            bodies[i].transform.localRotation = localRotations[i];
        }
        gameObject.SetActive(true);
        SyncBodies();
    }
    // Ép vị trí body vật lý khớp với transform (khi kéo ná ta chỉ dời transform).
    void SyncBodies()
    {
        for (int i = 0; i < bodies.Length; i++)
        {
            Transform t = bodies[i].transform;
            bodies[i].position = t.position;
            bodies[i].rotation = t.eulerAngles.z;
            bodies[i].linearVelocity = Vector2.zero;
            bodies[i].angularVelocity = 0;
        }
    }
    Collider2D[] ownColliders;
    public void SetCollidersEnabled(bool on)
    {
        if (ownColliders == null) ownColliders = GetComponentsInChildren<Collider2D>(true);
        for (int i = 0; i < ownColliders.Length; i++) ownColliders[i].enabled = on;
        // Tắt/bật collider làm mất IgnoreCollision -> đặt lại để tay chân không va vào nhau rồi văng.
        if (on) IgnoreSelfCollision();
    }
    public void SetDragging(bool dragging)
    {
        if (!dragging) SetCollidersEnabled(true);
        if (orders == null) return;
        for (int i = 0; i < renderers.Length; i++) renderers[i].sortingOrder = dragging ? 100 + i : orders[i];
    }
    [System.NonSerialized] public float launchTime = -100;
    public void Launch(Vector2 velocity)
    {
        launchTime = Time.time;
        BeginFlightVisuals();
        SetDragging(false);
        SyncBodies();
        for (int i = 0; i < bodies.Length; i++) bodies[i].simulated = true;
        // Re-enabling simulation recreates contacts; restore self-collision filtering afterwards.
        IgnoreSelfCollision();
        for (int i = 0; i < bodies.Length; i++)
        {
            bodies[i].linearVelocity = velocity;
            // Match the belly trajectory until the first collision; impacts create the tumble.
            bodies[i].linearDamping = 0;
            bodies[i].gravityScale = torso.gravityScale;
            bodies[i].angularVelocity = 0;
        }
    }
    public bool IsSettled()
    {
        for (int i = 0; i < bodies.Length; i++)
            if (bodies[i].linearVelocity.sqrMagnitude > .16f || Mathf.Abs(bodies[i].angularVelocity) > 35) return false;
        return true;
    }
    bool pendingFreeze;
    float restTime;
    public void FreezeWhenSettled() { pendingFreeze = true; restTime = 0; }
    void FixedUpdate()
    {
        if (!pendingFreeze) return;
        restTime = IsSettled() ? restTime + Time.fixedDeltaTime : 0;
        if (restTime > .5f || (torso != null && torso.position.y < -6)) Freeze();
    }
    public void Freeze()
    {
        pendingFreeze = false;
        for (int i = 0; i < bodies.Length; i++) bodies[i].bodyType = RigidbodyType2D.Static;
    }
    public void ReactToHit(Vector2 velocity)
    {
        if (!reactiveTarget || knockedDown || velocity.sqrMagnitude < 4) return;
        knockedDown = true;
        for (int i = 0; i < bodies.Length; i++)
        {
            bodies[i].bodyType = RigidbodyType2D.Dynamic;
            bodies[i].linearVelocity = velocity * .35f;
            bodies[i].angularVelocity = (i % 2 == 0 ? 1 : -1) * 100;
        }
    }
}

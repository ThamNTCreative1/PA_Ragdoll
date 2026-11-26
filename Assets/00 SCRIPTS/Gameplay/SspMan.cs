using System;
using UnityEngine;

// One SSP ragdoll (Torso, Head, LeftArm, RightArm, LeftLeg, RightLeg; rig built by SSPRoomBuilder like SSP_V09).
// Standing = head pulled up + feet pulled down (SSP's avk_force). Monsters: a hard hit on a part breaks its joint;
// the head coming off or `jointsToDie` broken joints kills the monster (it goes limp). The player turns zombie (sprite swap).
public class SspMan : MonoBehaviour
{
    [Serializable]
    public class Part
    {
        public Rigidbody2D body;
        public HingeJoint2D joint;
        public Collider2D col;
        public SpriteRenderer sr;
        public Sprite normal;
        public Sprite zombie;
        [Tooltip("Local point (part space) where the standing force is applied (feet / top of the head).")]
        public Vector2 forcePoint;
        public int sortOffset;
        [NonSerialized] public bool broken;
    }

    public const int TORSO = 0, HEAD = 1, ARM_L = 2, ARM_R = 3, LEG_L = 4, LEG_R = 5;

    public Part[] parts = new Part[6];
    [Tooltip("Distance from the root down to the soles (set by SSPRoomBuilder): root y = surface y + footDepth.")]
    public float footDepth;

    [Header("Standing")]
    [Tooltip("Head pull = weight * this; each foot = weight * this / 2.")]
    [SerializeField] private float standForce = 1f;
    [SerializeField] private float xDamping = 0.99f;

    [Header("Breaking (monsters)")]
    [SerializeField] private bool breakable = true;
    [Tooltip("Impact speed (relative) that breaks the joint of the part that was hit.")]
    [SerializeField] private float breakSpeed = 9f;
    [Tooltip("Impact speed that splashes a little blood and plays the hit sound.")]
    [SerializeField] private float hitSpeed = 4f;
    [SerializeField] private int jointsToDie = 2;
    [SerializeField] private int sortBase = 100;

    private GameController game;
    private bool dead, standing = true;
    private int brokenCount;
    private bool held;          // dragged by the finger: no standing forces (SRP: the body just hangs)
    private int legContacts;   // collisions the legs are touching: the standing forces only work on the ground
    private float mass;

    public bool Dead { get { return dead; } }
    public Rigidbody2D HeadBody { get { return parts[HEAD].body; } }
    public Vector2 Center { get { return parts[TORSO].body ? parts[TORSO].body.position : (Vector2)transform.position; } }

    public void Init(GameController owner, int sort, bool canBreak)
    {
        game = owner;
        sortBase = sort;
        breakable = canBreak;
        mass = 0;
        for (int i = 0; i < parts.Length; i++)
        {
            Part p = parts[i];
            if (p.body) mass += p.body.mass;
            if (p.sr) p.sr.sortingOrder = sortBase + p.sortOffset;
        }
    }

    public void SetLayer(int layer)
    {
        gameObject.layer = layer;
        for (int i = 0; i < parts.Length; i++) if (parts[i].body) parts[i].body.gameObject.layer = layer;
    }

    public bool Owns(Collider2D c)
    {
        for (int i = 0; i < parts.Length; i++) if (parts[i].col == c) return true;
        return false;
    }

    public void Zombify()
    {
        for (int i = 0; i < parts.Length; i++)
        {
            Part p = parts[i];
            if (p.sr && p.zombie) p.sr.sprite = p.zombie;
        }
    }

    // Held by the finger: no standing forces, the body just hangs from the head (SRP).
    public void SetHeld(bool on) { held = on; }

    // SspPartHit: +1 on collision enter, -1 on exit.
    public void OnPartContact(int index, int delta)
    {
        if (index != LEG_L && index != LEG_R) return;
        legContacts = Mathf.Max(0, legContacts + delta);
    }

    private void FixedUpdate()
    {
        // Head up + feet down add up to zero, so in the air they would make the man hover: only when the feet touch something.
        if (!standing || dead || held || legContacts == 0) return;
        float w = mass * Mathf.Abs(Physics2D.gravity.y) * standForce;
        Part head = parts[HEAD];
        if (head.body && !head.broken) head.body.AddForceAtPosition(new Vector2(0, w), (Vector2)head.body.transform.TransformPoint(head.forcePoint));
        PullFoot(parts[LEG_L], w * 0.5f);
        PullFoot(parts[LEG_R], w * 0.5f);
        for (int i = 0; i < parts.Length; i++)
        {
            Rigidbody2D rb = parts[i].body;
            if (!rb || parts[i].broken) continue;
            Vector2 v = rb.linearVelocity; v.x *= xDamping; rb.linearVelocity = v;
        }
    }

    private static void PullFoot(Part leg, float f)
    {
        if (leg.body && !leg.broken) leg.body.AddForceAtPosition(new Vector2(0, -f), (Vector2)leg.body.transform.TransformPoint(leg.forcePoint));
    }

    // Called by SspPartHit on each part.
    public void OnPartHit(int index, Collision2D collision)
    {
        if (game == null) return;
        float speed = collision.relativeVelocity.magnitude;
        if (speed < hitSpeed) return;
        Part p = parts[index];
        Vector2 at = p.body ? p.body.position : (Vector2)transform.position;
        game.OnManHit(this, at, speed, collision.relativeVelocity);
        if (!breakable || dead || speed < breakSpeed) return;
        if (index == TORSO)
        {
            // The torso has no joint: a hard hit on it tears off a random limb that is still on.
            int start = UnityEngine.Random.Range(1, parts.Length);
            for (int k = 0; k < parts.Length - 1; k++)
            {
                int i = 1 + (start - 1 + k) % (parts.Length - 1);
                if (!parts[i].broken && parts[i].joint) { Break(i, collision.relativeVelocity); return; }
            }
            return;
        }
        if (!p.broken && p.joint) Break(index, collision.relativeVelocity);
    }

    private void Break(int index, Vector2 hitVel)
    {
        Part p = parts[index];
        p.broken = true;
        p.joint.enabled = false;
        brokenCount++;
        Vector2 at = p.body.transform.TransformPoint(p.joint.anchor);
        game.OnJointBroken(this, at, hitVel);
        if (index == HEAD || brokenCount >= jointsToDie) Die();
    }

    private void Die()
    {
        if (dead) return;
        dead = true;
        standing = false;
        game.OnManDied(this);
    }
}

using UnityEngine;

// The sword, driven like the reference ad's stick: press anywhere and a soft mouse joint (Box2D defaults 5 Hz,
// damping 0.7, max force) pulls the sword's centre to the finger, so it swings and spins freely; release and it falls.
// It spins slowly at the start. Any man it touches dies. It does not collide with the time-up tank.
public class AcidStick : MonoBehaviour
{
    public Rigidbody2D body;
    public Camera cam;
    [Tooltip("The sword's collider: its rotated extent keeps the chased point above the plank and inside the walls.")]
    [SerializeField] private BoxCollider2D col;
    [Tooltip("Gap kept between the sword and the plank / walls (world units).")]
    public float keepOut = 0.02f;
    [Tooltip("Offset from the finger to the sword centre (0 = centred on the finger).")]
    public Vector2 fingerOffset = Vector2.zero;
    [Tooltip("On: the sword sticks to the finger. Off: soft mouse joint like the reference (lags and swings).")]
    public bool follow = true;
    [Tooltip("Follow mode: top speed (world units/s).")]
    public float followMaxSpeed = 60f;
    [Tooltip("Follow mode: spin kept per physics step (1 = free spin, 0 = no spin).")]
    [Range(0, 1)] public float followSpinKeep = 0.9f;
    [Tooltip("Mouse joint frequency (Hz).")]
    public float frequency = 5f;
    [Tooltip("Mouse joint damping ratio.")]
    public float dampingRatio = 0.7f;
    [Tooltip("Mouse joint max force as an acceleration limit (world units/s^2).")]
    public float maxAccel = 150f;
    [Tooltip("Initial spin (deg/s); reference 0.2 rad/s.")]
    public float startSpin = 11.5f;

    private AcidGame game;
    private bool held;
    private Vector2 target;

    public bool Held { get { return held; } }

    public void Init(AcidGame owner)
    {
        game = owner;
        if (body) body.angularVelocity = startSpin;
    }

    private void Update()
    {
        if (game == null || !game.Running) { held = false; return; }
        if (Input.GetMouseButtonDown(0)) { held = true; game.OnFirstTouch(); }
        if (!Input.GetMouseButton(0)) held = false;
        if (held && cam)
        {
            Vector3 w = cam.ScreenToWorldPoint(Input.mousePosition);
            target = new Vector2(w.x, w.y) + fingerOffset;
        }
    }

    // The point the sword chases never puts it below the plank top or past the walls: the sword is pushed there by
    // velocity every step, and the Luna build's physics let it tunnel through the plank when the finger was below it.
    private Vector2 Reachable(Vector2 p)
    {
        if (game == null || !col) return p;
        Vector3 ls = transform.lossyScale;
        float hx = Mathf.Abs(col.size.x * ls.x) * 0.5f, hy = Mathf.Abs(col.size.y * ls.y) * 0.5f;
        float a = body.rotation * Mathf.Deg2Rad;
        float c = Mathf.Abs(Mathf.Cos(a)), s = Mathf.Abs(Mathf.Sin(a));
        float extentY = c * hy + s * hx;   // half height of the rotated box
        float extentX = s * hy + c * hx;   // half width
        float minY = game.PlankTop + extentY + keepOut;
        if (p.y < minY) p.y = minY;
        float halfX = game.poolHalfWidth - extentX - keepOut;
        if (halfX > 0) p.x = Mathf.Clamp(p.x, game.poolCenterX - halfX, game.poolCenterX + halfX);
        return p;
    }

    private void FixedUpdate()
    {
        if (!held || !body) return;
        Vector2 target = Reachable(this.target);
        if (follow)
        {
            // Sticks to the finger: velocity that reaches the target this step (capped), so it still hits men.
            Vector2 vel = (target - body.position) / Time.fixedDeltaTime;
            if (vel.magnitude > followMaxSpeed) vel = vel.normalized * followMaxSpeed;
            body.linearVelocity = vel;
            body.angularVelocity *= followSpinKeep;
            return;
        }
        float omega = 2f * Mathf.PI * frequency;
        Vector2 v = body.linearVelocity;
        Vector2 a = (target - body.position) * (omega * omega) - v * (2f * dampingRatio * omega);
        if (a.magnitude > maxAccel) a = a.normalized * maxAccel;
        body.linearVelocity = v + a * Time.fixedDeltaTime;
    }

    private void OnCollisionEnter2D(Collision2D c)
    {
        if (game == null || !game.Running) return;
        AcidMan man = game.ManOf(c.collider);
        if (man == null || man.Dead) return;
        game.OnStickHit(man, c.collider.transform.position);
    }
}

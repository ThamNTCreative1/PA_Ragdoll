using System.Collections.Generic;
using UnityEngine;

// Súng phun lửa (giống game gốc): mỗi lần chạm bắn một loạt cục lửa nhỏ từ đầu vòi (giữ tay không bắn tiếp), bay theo đường vòng nhẹ.
// Trúng quái thì quái bén lửa (Burning: lửa lan toàn thân + tàn lửa + khói) và cục lửa biến mất;
// rơi xuống đất thì để lại một ngọn lửa nhỏ cháy thoáng qua.
public class FlamethrowerWeapon : HandWeapon, IFireSource
{
    [Header("Flamethrower")]
    [SerializeField] private float holdAngle = 0f;
    [SerializeField] private Transform nozzle;
    [SerializeField] private Sprite[] frames;          // frame lửa (cho Burning và ngọn lửa trên đất)
    [SerializeField] private float frameRate = 14f;
    [SerializeField] private Sprite emberSprite;       // cục lửa / tàn lửa
    [SerializeField] private Sprite smokeSprite;
    [SerializeField] private float minFireTime = 0.35f;
    [SerializeField] private float aimTolerance = 12f;
    [Header("Fireball")]
    [SerializeField] private float fireInterval = 0.05f;
    [SerializeField] private int fireballsPerShot = 2;   // số cục lửa mỗi lượt bắn
    [SerializeField] private float soundInterval = 0.25f; // khoảng cách tối thiểu giữa 2 lần phát tiếng bắn
    [SerializeField] private float fireballSpeed = 7f;
    [SerializeField] private float fireballGravity = -5f;
    [SerializeField] private float spread = 4f;         // độ toả (độ)
    [SerializeField] private float fireballSize = 0.14f;
    [SerializeField] private float fireballLife = 1.2f;
    [SerializeField] private float hitRadius = 0.15f;
    [SerializeField] private float groundY = -4f;
    [SerializeField] private float groundFlameSize = 0.4f;
    [SerializeField] private float groundFlameLife = 0.6f;
    [SerializeField] private int sortingOrder = 6;
    [Header("Burn")]
    [SerializeField] private int burnDamage = 2;
    [SerializeField] private float burnInterval = 0.4f;
    [SerializeField] private float burnDuration = 3f;

    public Sprite[] Frames => frames;
    public float FrameRate => frameRate;
    public float WorldScale => Scale;
    public Sprite EmberSprite => emberSprite;
    public Sprite SmokeSprite => smokeSprite;

    private class Fireball
    {
        public SpriteRenderer Sr;
        public Vector2 Velocity;
        public float Age;
    }

    private readonly List<Fireball> active = new List<Fireball>();
    private readonly Queue<Fireball> pool = new Queue<Fireball>();
    private float fireUntil;
    private float nextFire;
    private float nextSound;

    protected override void OnEnable()
    {
        base.OnEnable();
        fireUntil = 0;
    }

    // Chạm để bắn một loạt ngắn (minFireTime); giữ tay không bắn tiếp.
    protected override bool OnPress()
    {
        fireUntil = Time.time + minFireTime;
        return true;
    }

    protected override void Tick()
    {
        bool firing = CanAttack && Time.time < fireUntil;
        SetArm(firing ? holdAngle : restAngle);
        // Chỉ bắn khi tay đã đưa thẳng ra trước.
        bool aimed = Mathf.Abs(Mathf.DeltaAngle(ArmAngle, holdAngle)) < aimTolerance;
        if (firing && aimed && Time.time >= nextFire)
        {
            nextFire = Time.time + fireInterval;
            for (int i = 0; i < fireballsPerShot; i++) Shoot();
            // Bắn rất dày nên giới hạn tần suất phát tiếng để không chồng tiếng.
            if (attackSound && Time.time >= nextSound)
            {
                nextSound = Time.time + soundInterval;
                AudioController.Ins.PlaySFX(attackSound);
            }
        }
        UpdateFireballs();
    }

    private void Shoot()
    {
        Fireball f = pool.Count > 0 ? pool.Dequeue() : new Fireball { Sr = PowerBase.CreateSprite("Fireball", emberSprite, poolParent, sortingOrder) };
        Vector2 dir = Quaternion.Euler(0, 0, Random.Range(-spread, spread)) * (Vector2)transform.right;
        f.Sr.transform.position = nozzle ? nozzle.position : transform.position;
        float parentScale = poolParent ? poolParent.lossyScale.x : 1f;
        f.Sr.transform.localScale = Vector3.one * fireballSize * Scale / emberSprite.bounds.size.y / parentScale;
        f.Velocity = dir * fireballSpeed * Scale;
        f.Age = 0;
        f.Sr.gameObject.SetActive(true);
        active.Add(f);
    }

    private void UpdateFireballs()
    {
        float dt = Time.deltaTime;
        for (int i = active.Count - 1; i >= 0; i--)
        {
            Fireball f = active[i];
            f.Age += dt;
            f.Velocity.y += fireballGravity * Scale * dt;
            Transform t = f.Sr.transform;
            t.position += (Vector3)(f.Velocity * dt);
            Vector2 p = t.position;

            bool done = f.Age >= fireballLife;
            if (!done && HitMonster(p)) done = true;
            if (!done && p.y <= groundY)
            {
                // Rơi xuống đất: một ngọn lửa nhỏ cháy thoáng qua, vẫn bén lửa quái đứng đó.
                Vector2 gp = new Vector2(p.x, groundY + groundFlameSize * Scale * 0.4f);
                FireFx.Ins.Spawn(null, frames, frameRate, gp, Vector2.zero, 0, groundFlameLife,
                                 groundFlameSize * Scale, groundFlameSize * Scale * 0.6f, Color.white, sortingOrder);
                HitMonster(gp);
                done = true;
            }
            if (done)
            {
                f.Sr.gameObject.SetActive(false);
                active.RemoveAt(i);
                pool.Enqueue(f);
            }
        }
    }

    // Bén lửa quái quanh điểm p; trả về true nếu trúng.
    private bool HitMonster(Vector2 p)
    {
        bool hit = false;
        foreach (Collider2D col in Physics2D.OverlapCircleAll(p, hitRadius * Scale))
        {
            if (col.isTrigger) continue;
            MonsterController m = col.GetComponentInParent<MonsterController>();
            if (!m || m.IsDead) continue;
            Burning.Ignite(m, this, col, p, burnDamage, burnInterval, burnDuration);
            hit = true;
        }
        return hit;
    }
}

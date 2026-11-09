using System.Collections.Generic;
using UnityEngine;

// Lốc xoáy: chạm vào quái để gọi lốc tại chỗ con quái đó (chạm trượt thì không có gì, không tính lượt). Lốc đi qua đi lại quanh con quái,
// hất tung quái lên rồi thả ra; khi quái rơi xuống lại (xong 1 lần hất) thì quái mất giáp (hết giáp thì mất máu)
// và lốc tan. Mỗi lượt lốc = 1 lần hất.
public class TornadoPower : PowerBase
{
    [SerializeField] private Sprite funnelSprite;
    [SerializeField] private float groundY = -4f;
    [SerializeField] private float height = 2.4f;
    [SerializeField] private float widthRatio = 0.6f;   // bóp ngang cho lốc thon hơn
    [SerializeField] private float patrolDistance = 0.25f; // đi qua lại mỗi bên (world, nhân Scale)
    [SerializeField] private float patrolSpeed = 3f;
    [Header("Toss")]
    [SerializeField] private float liftTime = 0.8f;     // thời gian cuốn quái lên
    [SerializeField] private float liftSpeed = 3f;      // vận tốc bay lên khi đang bị cuốn (nhân Scale)
    [SerializeField] private float liftAccel = 40f;
    [SerializeField] private float swirl = 1.5f;        // lắc ngang khi đang bị cuốn
    [SerializeField] private float spin = 900f;
    [SerializeField] private float landHeight = 0.3f;   // về gần độ cao ban đầu = đã rơi xuống
    [SerializeField] private float maxTossTime = 3f;    // quá thời gian này coi như đã rơi xong
    [SerializeField] private float fadeTime = 0.3f;
    [SerializeField] private float armorFallTime = 0.7f; // giáp tụt dần trong liftTime + thời gian này
    [SerializeField] private float armorTick = 0.25f;    // mỗi nhịp tụt giáp (các nhịp trừ đều nhau)
    [Header("Damage")]
    [SerializeField] private int damage = 1;            // damage mỗi lần hất xong (giáp theo lượt: trừ 1 giáp)
    public override void SetDamage(int value) { damage = value; }
    [SerializeField] private AudioClip liftSound;
    [SerializeField] private AudioClip hitSound;        // phát mỗi lần lốc trừ giáp / trừ máu
    [SerializeField] private int sortingOrder = 40;
    [SerializeField] private float touchRadius = 0.3f; // độ rộng vùng chạm tính là trúng quái (nhân Scale)

    private enum Phase { Lift, Fall, Fade }

    private class Tornado
    {
        public GameObject Root;
        public SpriteRenderer[] Layers;
        public float Time;
        public float Scale;
        public float CenterX;
        public int UseId;
        public MonsterController Target;
        public Transform Body;
        public float BaseY;
        public Phase Phase;
        public float PhaseTime;
        public Rigidbody2D[] Bodies;
        public float[] Gravity;
    }

    private static readonly float[] LayerAlpha = { 1f, 0.6f, 0.35f };
    private readonly List<Tornado> active = new List<Tornado>();
    private readonly Queue<Tornado> pool = new Queue<Tornado>();

    public override bool Busy => active.Count > 0;

    public override void PointerDown(Vector2 position)
    {
        MonsterController target = MonsterAt(position, touchRadius * Scale);
        if (!target || !TryUse()) return;
        Tornado t = pool.Count > 0 ? pool.Dequeue() : Create();
        t.Scale = Scale;
        t.Time = 0;
        t.UseId = UseId;
        t.Phase = Phase.Lift;
        t.PhaseTime = 0;
        t.Target = target;
        t.Body = null;
        t.Bodies = null;
        if (t.Target)
        {
            t.Body = t.Target.transform.Find("Body");
            if (!t.Body) t.Body = t.Target.transform;
            t.BaseY = t.Body.position.y;
            t.CenterX = t.Body.position.x;
            t.Bodies = t.Target.GetComponentsInChildren<Rigidbody2D>();
            t.Gravity = new float[t.Bodies.Length];
            for (int i = 0; i < t.Bodies.Length; i++)
            {
                Rigidbody2D rb = t.Bodies[i];
                t.Gravity[i] = rb.gravityScale;
                rb.gravityScale = Mathf.Max(rb.gravityScale, 1f); // để thả ra thì rơi xuống
                rb.angularVelocity = Random.Range(-spin, spin);
            }
            if (liftSound) AudioController.Ins.PlaySFX(liftSound);
            t.Target.DrainArmor(t.UseId, liftTime + armorFallTime, armorTick, MonsterController.ArmorBreakFx.None, hitSound); // lốc làm vỡ giáp: không có hiệu ứng; mỗi nhịp phát sound
        }
        else t.CenterX = position.x;
        float h = height * t.Scale;
        t.Root.transform.position = new Vector3(t.CenterX, groundY + h * 0.5f, 0);
        SetAlpha(t, 1f);
        t.Root.SetActive(true);
        active.Add(t);
    }

    private Tornado Create()
    {
        Tornado t = new Tornado();
        t.Root = new GameObject("Tornado");
        t.Root.transform.SetParent(container ? container : transform, false);
        t.Layers = new SpriteRenderer[LayerAlpha.Length];
        for (int i = 0; i < t.Layers.Length; i++)
            t.Layers[i] = CreateSprite("Layer" + i, funnelSprite, t.Root.transform, sortingOrder - i);
        return t;
    }

    private static void SetAlpha(Tornado t, float k)
    {
        for (int i = 0; i < t.Layers.Length; i++) t.Layers[i].color = new Color(1, 1, 1, LayerAlpha[i] * k);
    }

    private void Update()
    {
        for (int i = active.Count - 1; i >= 0; i--)
        {
            Tornado t = active[i];
            t.Time += Time.deltaTime;
            t.PhaseTime += Time.deltaTime;
            Transform tr = t.Root.transform;

            // Đi qua lại quanh con quái.
            float x = t.CenterX + Mathf.Sin(t.Time * patrolSpeed) * patrolDistance * t.Scale;
            tr.position = new Vector3(x, tr.position.y, 0);
            tr.rotation = Quaternion.Euler(0, 0, Mathf.Sin(t.Time * 3f) * 5f);
            Animate(t, tr);

            if (t.Phase == Phase.Lift && t.PhaseTime >= liftTime) Next(t, Phase.Fall);
            else if (t.Phase == Phase.Fall && Landed(t))
            {
                Restore(t);
                if (t.Target && !t.Target.IsDead)
                {
                    int hp = t.Target.HP;
                    t.Target.TakeDamage(damage, t.UseId);
                    if (t.Target.HP < hp && hitSound) AudioController.Ins.PlaySFX(hitSound); // trừ máu -> phát sound
                }
                Next(t, Phase.Fade);
            }
            else if (t.Phase == Phase.Fade)
            {
                SetAlpha(t, 1f - t.PhaseTime / fadeTime);
                if (t.PhaseTime >= fadeTime)
                {
                    t.Root.SetActive(false);
                    active.RemoveAt(i);
                    pool.Enqueue(t);
                }
            }
        }
    }

    private void Next(Tornado t, Phase p)
    {
        t.Phase = p;
        t.PhaseTime = 0;
    }

    // Quái đã rơi về gần độ cao ban đầu (hoặc quá thời gian / không có quái).
    private bool Landed(Tornado t)
    {
        if (!t.Target || t.Target.IsDead || !t.Body) return true;
        if (t.PhaseTime >= maxTossTime) return true;
        return t.PhaseTime > 0.2f && t.Body.position.y <= t.BaseY + landHeight * t.Scale;
    }

    private void Restore(Tornado t)
    {
        if (t.Bodies == null) return;
        for (int i = 0; i < t.Bodies.Length; i++)
            if (t.Bodies[i]) t.Bodies[i].gravityScale = t.Gravity[i];
        t.Bodies = null;
    }

    // Hiệu ứng xoay: co giãn bề ngang + lệch lớp theo sin. Kích thước tính theo world.
    private void Animate(Tornado t, Transform tr)
    {
        Vector3 ps = tr.parent ? tr.parent.lossyScale : Vector3.one;
        float baseScale = height * t.Scale / funnelSprite.bounds.size.y / Mathf.Max(0.0001f, Mathf.Abs(ps.y));
        for (int l = 0; l < t.Layers.Length; l++)
        {
            float phase = l * 2.1f;
            float sx = baseScale * (0.8f + 0.2f * Mathf.Sin(t.Time * 14f + phase));
            t.Layers[l].transform.localScale = new Vector3(sx * widthRatio * (1f + l * 0.12f), baseScale, 1);
            t.Layers[l].transform.localPosition = new Vector3(Mathf.Sin(t.Time * 6f + phase) * 0.12f * t.Scale, 0, 0);
        }
    }

    private void FixedUpdate()
    {
        foreach (Tornado t in active)
        {
            if (t.Phase != Phase.Lift || t.Bodies == null || !t.Target || t.Target.IsDead) continue;
            float wobble = Mathf.Sin(t.Time * 8f) * swirl;
            Vector2 v = new Vector2(wobble, liftSpeed) * t.Scale;
            foreach (Rigidbody2D rb in t.Bodies)
                if (rb) rb.linearVelocity = Vector2.MoveTowards(rb.linearVelocity, v, liftAccel * t.Scale * Time.fixedDeltaTime);
        }
    }

    private void OnDisable()
    {
        foreach (Tornado t in active) Restore(t);
    }
}

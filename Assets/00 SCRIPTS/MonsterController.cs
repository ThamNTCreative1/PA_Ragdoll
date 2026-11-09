using UnityEngine;

// Quái có giáp + máu (thanh trên đầu).
// Power (lửa/sét/bão/lốc) trừ giáp trước, hết giáp thì trừ máu. Đấm (BonkController) chỉ trừ máu khi đã hết giáp.
public class MonsterController : MonoBehaviour, IDamageable
{
    public enum ArmorBreakFx { None, Smoke, Electric }

    [SerializeField] private TargetJoint2D joint;   // dây treo, thả ra khi chết (có thể để trống)
    [SerializeField] private bool anchorAtStart;     // đặt điểm treo của joint tại vị trí hiện tại khi bắt đầu
    [SerializeField] private Rigidbody2D rb;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 force = new Vector2(1000, 1000);

    [Header("Health")]
    [SerializeField] private int maxHP = 5;
    [SerializeField] private int maxArmor = 10;
    [SerializeField] private int hp;
    [SerializeField] private int armor;

    [Header("Bars")]
    [SerializeField] private Transform bars;      // object thanh máu/giáp (nằm ngoài ragdoll)
    [SerializeField] private Transform head;      // thanh bám theo đầu
    [SerializeField] private Vector3 barOffset = new Vector3(0, 1.4f, 0);
    [SerializeField] private Transform hpFill;    // scale X = tỉ lệ máu (pivot ở mép trái)
    [Header("Dead")]
    [SerializeField] private Vector2 dismemberSpeed = new Vector2(1.5f, 3f);  // tốc độ văng các bộ phận khi chết (min, max)
    [SerializeField] private float dismemberSpin = 240f;                     // tốc độ xoay tối đa (độ/giây)
    [SerializeField] private float hpSmoothTime = 0.35f;    // thời gian thanh máu tụt mượt tới giá trị mới
    [SerializeField] private float armorSmoothTime = 0.2f;  // thời gian thanh giáp tụt mượt tới giá trị mới
    [SerializeField] private Transform armorFill; // scale X = tỉ lệ giáp
    [SerializeField] private GameObject armorBar; // ẩn khi quái không có giáp
    [SerializeField] private GameObject armorIcon; // icon giáp bên trái thanh máu, tắt khi hết giáp

    [Header("Armor Break")]
    [SerializeField] private Sprite fxSprite;     // smoke.png - khói khi giáp vỡ do lửa
    [SerializeField] private Sprite electricSprite; // white.png - tia điện khi giáp vỡ do sét (mọi stage)
    [SerializeField] private float fxScale = 2f;
    [SerializeField] private AudioClip armorBreakSFX;
    [SerializeField] private float lightningDrainTime = 0.5f;  // sét/bão: giáp tụt dần trong khoảng này
    [SerializeField] private float lightningDrainTick = 0.1f;
    [SerializeField] private float smokeInterval = 0.12f;

    private static readonly Color SmokeColor = new Color(0.18f, 0.18f, 0.18f, 0.85f);
    private bool isDead;
    private bool electricHit;          // đòn đang xử lý là sét
    private ArmorBreakFx activeFx;     // hiệu ứng sau khi vỡ giáp, theo power làm vỡ: sét = tia điện, lửa = khói, lốc = không
    private bool armorBroken;
    private float nextSmoke;
    private float shownHP;      // máu đang hiển thị trên thanh (tụt mượt về hp)
    private float hpSpeed;      // tốc độ tụt của lần trừ máu hiện tại (máu/giây)
    private float shownArmor;   // giáp đang hiển thị trên thanh (tụt mượt về armorF)
    private float armorSpeed;
    private Collider2D[] parts;
    private bool armorPerUse;                                   // giáp tính theo lượt power (mỗi lượt trúng trừ 1)
    private readonly System.Collections.Generic.HashSet<int> armorHits = new System.Collections.Generic.HashSet<int>();
    private float armorF;                                       // giáp thực (số thực, để trừ dần)
    private class Drain { public float Left; public float Step; public float Tick; public float Next; public ArmorBreakFx Fx; public AudioClip Sound; }
    private readonly System.Collections.Generic.List<Drain> drains = new System.Collections.Generic.List<Drain>();

    public bool IsDead => isDead;
    public int HP => hp;
    public int Armor => armor;
    public int MaxArmor => maxArmor;
    public bool ArmorBroken => armorBroken;
    public bool ArmorDamaged => armorHits.Count > 0 || armorF < maxArmor; // đã bị power đánh trúng

    private void Start()
    {
        hp = maxHP;
        shownHP = maxHP;
        armor = maxArmor;
        armorF = maxArmor;
        shownArmor = maxArmor;
        armorBroken = maxArmor <= 0;
        parts = GetComponentsInChildren<Collider2D>();
        if (armorBar) armorBar.SetActive(maxArmor > 0);
        if (armorIcon) armorIcon.SetActive(maxArmor > 0);
        if (joint && anchorAtStart)
        {
            joint.target = joint.transform.TransformPoint(joint.anchor);
            joint.enabled = true;
        }
        UpdateBars();
    }

    // Đặt máu tối đa (Luna / GameController), máu hiện tại đầy lại.
    public void SetMaxHP(int value)
    {
        if (value <= 0 || isDead) return;
        maxHP = value;
        hp = value;
        shownHP = value;
        UpdateBars();
    }

    // Giáp = số lượt power của stage: mỗi lượt power trúng quái trừ đúng 1 giáp,
    // nên dùng hết lượt (đều trúng) thì vừa hết giáp. uses <= 0: giáp trừ theo damage như thường.
    public void SetArmorUses(int uses)
    {
        if (uses <= 0) return;
        armorPerUse = true;
        maxArmor = uses;
        armor = uses;
        armorF = uses;
        shownArmor = uses; // đổi giáp tối đa: hiện ngay, không tụt
        armorBroken = false;
        armorHits.Clear();
        drains.Clear();
        if (armorBar) armorBar.SetActive(true);
        if (armorIcon) armorIcon.SetActive(true);
        UpdateBars();
    }

    // Lượt power useId trúng quái: trừ 1 giáp. time <= 0: trừ ngay; time > 0: tụt theo nhịp tick giây,
    // số nhịp = time / tick, mỗi nhịp trừ một đoạn bằng nhau (nhịp cuối trừ nốt phần còn lại để tròn 1 giáp).
    // Mỗi lượt chỉ trừ giáp 1 lần (gọi lại cùng useId bị bỏ qua). Lửa/Lốc gọi với time > 0 để giáp tụt dần.
    // sound: phát mỗi nhịp trừ giáp (vd. lốc xoáy).
    public void DrainArmor(int useId, float time, float tick = 0.25f, ArmorBreakFx fx = ArmorBreakFx.None, AudioClip sound = null)
    {
        if (isDead || !armorPerUse || armorF <= 0 || armorHits.Contains(useId)) return;
        armorHits.Add(useId);
        if (time <= 0 || tick <= 0)
        {
            if (sound) AudioController.Ins.PlaySFX(sound);
            SubArmor(1f, fx);
            return;
        }
        int steps = Mathf.Max(1, Mathf.FloorToInt(time / tick + 0.001f));
        drains.Add(new Drain { Left = 1f, Step = 1f / steps, Tick = tick, Next = Time.time + tick, Fx = fx, Sound = sound });
    }

    // Damage từ sét (Sét / tia cuối của Bão): giáp vỡ bởi đòn này thì có hiệu ứng tia điện.
    public void TakeLightning(int amount, int useId)
    {
        electricHit = true;
        TakeDamage(amount, useId);
        electricHit = false;
    }

    // Damage từ power: trừ giáp trước, hết giáp thì trừ máu.
    // Lượt power đã đánh vào giáp thì chỉ trừ giáp (trừ nốt phần giáp còn lại), không trừ máu
    // kể cả khi giáp vỡ giữa chừng; chỉ lượt dùng sau khi hết giáp mới trừ máu.
    public void TakeDamage(int amount, int useId)
    {
        if (isDead || amount <= 0) return;
        if (armorF > 0)
        {
            ArmorBreakFx fx = electricHit ? ArmorBreakFx.Electric : ArmorBreakFx.None;
            if (armorPerUse)
            {
                if (electricHit) DrainArmor(useId, lightningDrainTime, lightningDrainTick, fx); // sét: tụt dần
                else DrainArmor(useId, 0, 0, fx);
            }
            else
            {
                armorHits.Add(useId);
                SubArmor(amount, fx);
            }
            return;
        }
        if (armorHits.Contains(useId)) return; // lượt này đã đánh vào giáp -> không trừ máu
        Hurt(amount);
    }

    private void SubArmor(float value, ArmorBreakFx fx)
    {
        armorF = Mathf.Max(0, armorF - value);
        if (armorF < 0.001f) armorF = 0;
        armor = Mathf.CeilToInt(armorF - 0.001f);
        if (armorF == 0)
        {
            armor = 0;
            drains.Clear();
            BreakArmor(fx);
        }
        UpdateBars();
    }

    // Đấm: chỉ có tác dụng khi đã hết giáp. Trả về true nếu trúng. at = chỗ đấm trúng (máu bắn ra ở đó).
    public bool Punch(int amount, Vector2 at)
    {
        if (isDead || armorF > 0) return false;
        Hurt(amount, at);
        return true;
    }

    // Trừ máu (đấm hoặc power) -> máu bắn ra tại chỗ trúng (không có thì ở thân quái).
    private void Hurt(int amount, Vector2? at = null)
    {
        if (amount <= 0) return;
        hp = Mathf.Max(0, hp - amount);
        if (VFXController.Ins) VFXController.Ins.SpawnVFX(at ?? BodyPosition());
        UpdateBars();
        if (hp == 0) Dead();
    }

    private Vector2 BodyPosition()
    {
        Transform body = transform.Find("Body");
        return body ? body.position : transform.position;
    }

    // Chết: tháo các khớp, các bộ phận văng ra mọi hướng (mỗi bộ phận tóe máu).
    private void Dismember()
    {
        foreach (HingeJoint2D h in GetComponentsInChildren<HingeJoint2D>()) h.enabled = false;
        foreach (TargetJoint2D t in GetComponentsInChildren<TargetJoint2D>()) t.enabled = false;
        Vector2 center = BodyPosition();
        foreach (Rigidbody2D part in GetComponentsInChildren<Rigidbody2D>())
        {
            if (part == rb) continue;
            if (part.bodyType != RigidbodyType2D.Dynamic) part.bodyType = RigidbodyType2D.Dynamic;
            part.gravityScale = Mathf.Max(1f, part.gravityScale);
            Vector2 dir = part.position - center;
            if (dir.sqrMagnitude < 0.01f) dir = Vector2.up;
            dir = (dir.normalized + Vector2.up * 0.8f + Random.insideUnitCircle * 0.4f).normalized;
            part.linearVelocity = dir * Random.Range(dismemberSpeed.x, dismemberSpeed.y);
            part.angularVelocity = Random.Range(-dismemberSpin, dismemberSpin);
            if (VFXController.Ins) VFXController.Ins.SpawnVFX(part.position);
        }
    }

    private void BreakArmor(ArmorBreakFx fx)
    {
        if (armorBroken) return;
        armorBroken = true;
        if (armorIcon) armorIcon.SetActive(false);
        Burning.Stop(gameObject); // tắt lửa -> quái chuyển sang bốc khói
        if (armorBreakSFX) AudioController.Ins.PlaySFX(armorBreakSFX);
        // Hiệu ứng theo power làm vỡ giáp (mọi stage): sét = tia điện, lửa = khói, lốc = không có.
        activeFx = fx;
        if (activeFx == ArmorBreakFx.Electric && electricSprite) ElectricFx.Attach(gameObject, electricSprite, fxScale, 150);
        GameController.Ins.ArmorBroken(this);
    }

    private void Dead()
    {
        if (isDead) return;
        isDead = true;
        AudioController.Ins.PlaySFX(deadSFX);
        if (joint) joint.enabled = false;
        if (rb) rb.AddForce(force);
        Dismember();
        // Thanh máu tắt sau khi đã tụt mượt về 0 (xem LateUpdate).
        ElectricFx fx = GetComponent<ElectricFx>();
        if (fx) Destroy(fx);
        GameController.Ins.MonsterDied(this);
    }

    private void Update()
    {
        // Giáp tụt theo nhịp đều của các lượt lửa/lốc đang có hiệu lực.
        for (int i = drains.Count - 1; i >= 0 && !isDead && i < drains.Count; i--)
        {
            Drain d = drains[i];
            if (Time.time < d.Next) continue;
            d.Next += d.Tick;
            float step = d.Left - d.Step < 0.001f ? d.Left : d.Step; // nhịp cuối trừ nốt phần còn lại
            d.Left -= step;
            if (d.Left <= 0.0001f) drains.RemoveAt(i);
            if (d.Sound) AudioController.Ins.PlaySFX(d.Sound);
            SubArmor(step, d.Fx);
        }

        if (isDead || !armorBroken || activeFx != ArmorBreakFx.Smoke || !fxSprite || Time.time < nextSmoke) return;
        nextSmoke = Time.time + smokeInterval;
        Collider2D c = parts[Random.Range(0, parts.Length)];
        if (!c) return;
        Bounds b = c.bounds;
        Vector2 p = new Vector2(Random.Range(b.min.x, b.max.x), Random.Range(b.center.y, b.max.y));
        Vector2 v = new Vector2(Random.Range(-0.1f, 0.3f), Random.Range(0.5f, 0.9f)) * fxScale;
        FireFx.Ins.Spawn(fxSprite, null, 0, p, v, 0, Random.Range(1.0f, 1.5f), 0.25f * fxScale, 0.8f * fxScale, SmokeColor, 99);
    }

    private void LateUpdate()
    {
        // Thanh máu tụt mượt về hp (mỗi lần trừ máu tụt hết trong hpSmoothTime giây).
        if (shownHP > hp)
        {
            shownHP = Mathf.Max(hp, shownHP - hpSpeed * Time.deltaTime);
            if (hpFill) hpFill.localScale = new Vector3(maxHP > 0 ? shownHP / maxHP : 0, 1, 1);
        }
        if (shownArmor > armorF)
        {
            shownArmor = Mathf.Max(armorF, shownArmor - armorSpeed * Time.deltaTime);
            if (armorFill) armorFill.localScale = new Vector3(maxArmor > 0 ? shownArmor / maxArmor : 0, 1, 1);
        }
        if (isDead && bars && bars.gameObject.activeSelf && shownHP <= hp) bars.gameObject.SetActive(false);
        if (!bars || !head) return;
        bars.position = head.position + barOffset;
        bars.rotation = Quaternion.identity;
    }

    private void UpdateBars()
    {
        if (shownHP < hp) shownHP = hp; // hồi máu / khởi tạo: hiện ngay
        hpSpeed = hpSmoothTime > 0 ? (shownHP - hp) / hpSmoothTime : float.MaxValue;
        if (hpFill) hpFill.localScale = new Vector3(maxHP > 0 ? shownHP / maxHP : 0, 1, 1);
        if (shownArmor < armorF) shownArmor = armorF; // đặt giáp mới: hiện ngay
        armorSpeed = armorSmoothTime > 0 ? (shownArmor - armorF) / armorSmoothTime : float.MaxValue;
        if (armorFill) armorFill.localScale = new Vector3(maxArmor > 0 ? shownArmor / maxArmor : 0, 1, 1);
    }
}

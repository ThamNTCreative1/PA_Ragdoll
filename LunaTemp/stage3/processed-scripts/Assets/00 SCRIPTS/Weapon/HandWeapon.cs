using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

// Vũ khí cầm tay của player (cưa, súng phun lửa, gậy). Gắn lên object con của LeftHand.
// - Tư thế tay điều khiển bằng limits của HingeJoint2D ở LeftHand: 0 = đưa thẳng ra trước, -90 = giơ lên, +90 = buông xuống.
// - Input: chạm / giữ / thả (bỏ qua khi chạm lên UI).
// - Tầm đánh: hộp phía trước người player, chỉ tính quái (không tự đánh mình).
public abstract class HandWeapon : FightController
{
    [Header("Arm")]
    [SerializeField] protected float restAngle = 30f;
    // Motor khớp tay kéo tay về góc mục tiêu (chỉ dùng limits thì tay trôi về chậm, không kịp vung).
    [SerializeField] protected float armGain = 30f;        // tốc độ (độ/giây) trên mỗi độ lệch
    [SerializeField] protected float armMaxSpeed = 2000f;  // độ/giây
    [SerializeField] protected float armTorque = 10000f;
    [Header("Hit")]
    [SerializeField] protected float hitPadding = 0.05f; // nới nhẹ hộp va chạm quanh hình vũ khí
    [SerializeField] protected GameObject bloodVFX;
    protected SpriteRenderer weaponSprite;

    protected HingeJoint2D arm;
    protected PlayerController player;
    protected PlayerHealth health;
    protected Transform body;
    private JointAngleLimits2D savedLimits;
    private bool savedUseLimits;
    private JointMotor2D savedMotor;
    private bool savedUseMotor;
    private float targetAngle;
    private bool hasSaved;
    private bool pressing;

    protected float Scale => player ? player.transform.lossyScale.x : 1f;
    protected bool CanAttack => !(health && health.IsDead);

    protected virtual void OnEnable()
    {
        if (!player)
        {
            arm = GetComponentInParent<HingeJoint2D>();
            player = GetComponentInParent<PlayerController>();
            health = player ? player.GetComponent<PlayerHealth>() : null;
            body = player ? player.transform.Find("Body") : null;
            weaponSprite = GetComponent<SpriteRenderer>();
        }
        savedLimits = arm.limits;
        savedUseLimits = arm.useLimits;
        savedMotor = arm.motor;
        savedUseMotor = arm.useMotor;
        hasSaved = true;
        SetArm(restAngle);
    }

    protected virtual void OnDisable()
    {
        pressing = false;
        StopAllCoroutines(); // dừng nhát vung dở (coroutine không tự dừng khi chỉ tắt component)
        if (!hasSaved || !arm) return;
        arm.limits = savedLimits;
        arm.useLimits = savedUseLimits;
        arm.motor = savedMotor;
        arm.useMotor = savedUseMotor;
    }

    // Góc tham chiếu (referenceAngle) của khớp tay. Unity tính limits/jointAngle tương đối với góc này,
    // còn Luna bỏ qua nó -> trên Luna phải cộng bù vào limits. Tự cập nhật trong Editor (OnValidate).
    [SerializeField] protected float jointReferenceAngle;

#if UNITY_EDITOR
    protected virtual void OnValidate()
    {
        HingeJoint2D h = GetComponentInParent<HingeJoint2D>();
        if (h) jointReferenceAngle = h.referenceAngle;
    }
#endif

    // Góc tay hiện tại theo quy ước Unity (0 = ra trước, -90 = giơ lên), tính từ góc xoay thực của thân và tay
    // để không phụ thuộc cách mỗi nền tảng tính jointAngle.
    protected float ArmAngle
    {
        get
        {
            Transform b = arm.connectedBody ? arm.connectedBody.transform : body;
            return Mathf.DeltaAngle(0f, b.eulerAngles.z - arm.transform.eulerAngles.z - jointReferenceAngle);
        }
    }

    // Đổi góc quy ước Unity sang góc dùng cho limits của nền tảng đang chạy.
    private float LimitAngle(float angle)
    {
#if UNITY_LUNA
        return angle + jointReferenceAngle;
#else
        return angle;
#endif
    }

    // Đặt góc tay mục tiêu: limits giữ tay quanh góc đó, motor (FixedUpdate) kéo tay tới nhanh.
    protected void SetArm(float angle)
    {
        targetAngle = angle;
        float a = LimitAngle(angle);
        JointAngleLimits2D l = arm.limits;
        l.min = a - 1f;
        l.max = a + 1f;
        arm.limits = l;
        arm.useLimits = true;
    }

    protected virtual void FixedUpdate()
    {
        if (!arm) return;
        JointMotor2D m = arm.motor;
        m.motorSpeed = Mathf.Clamp(Mathf.DeltaAngle(ArmAngle, targetAngle) * armGain, -armMaxSpeed, armMaxSpeed);
        m.maxMotorTorque = armTorque;
        arm.motor = m;
        arm.useMotor = true;
    }

    protected virtual void Update()
    {
        ReadInput();
        Tick();
    }

    private void ReadInput()
    {
        if (Input.touchCount > 0)
        {
            Touch t = Input.GetTouch(0);
            if (t.phase == TouchPhase.Began)
            {
                if (EventSystem.current.IsPointerOverGameObject(t.fingerId)) return;
                Press();
            }
            else if (pressing && (t.phase == TouchPhase.Ended || t.phase == TouchPhase.Canceled)) Release();
            else if (pressing) OnHold();
            return;
        }
        if (Input.GetMouseButtonDown(0))
        {
            if (EventSystem.current.IsPointerOverGameObject()) return;
            Press();
        }
        else if (pressing && Input.GetMouseButtonUp(0)) Release();
        else if (pressing && Input.GetMouseButton(0)) OnHold();
    }

    private void Press()
    {
        if (!CanAttack) return;
        pressing = true;
        if (OnPress()) GameController.Ins.Click(); // chỉ tính click khi thực sự tấn công
    }

    private void Release()
    {
        pressing = false;
        OnRelease();
    }

    // Trả về true nếu lần chạm này thực sự tấn công (false khi đang bận, vd. đang vung dở).
    protected abstract bool OnPress();
    protected virtual void OnHold() { }
    protected virtual void OnRelease() { }
    protected virtual void Tick() { }

    // Không dùng cơ chế bắn/pool của FightController.
    public override void Action([Bridge.Ref] Vector2 position, [Bridge.Ref] Quaternion rotation) { }

    private readonly List<MonsterController> found = new List<MonsterController>();
    // Quái còn sống đang chạm vào thân vũ khí: hộp xoay theo đúng hình sprite vũ khí ở tư thế hiện tại.
    protected List<MonsterController> MonstersTouchingWeapon()
    {
        found.Clear();
        SpriteRenderer sr = weaponSprite;
        if (!sr || !sr.sprite) return found;
        Bounds b = sr.sprite.bounds;
        Vector3 ls = transform.lossyScale;
        Vector2 size = new Vector2(Mathf.Abs(b.size.x * ls.x), Mathf.Abs(b.size.y * ls.y)) + Vector2.one * hitPadding * Scale;
        Vector2 center = transform.TransformPoint(b.center);
        foreach (Collider2D col in Physics2D.OverlapBoxAll(center, size, transform.eulerAngles.z))
        {
            if (col.isTrigger) continue;
            MonsterController m = col.GetComponentInParent<MonsterController>();
            if (m && !m.IsDead && !found.Contains(m)) found.Add(m);
        }
        return found;
    }

    protected static Vector2 MonsterPoint(MonsterController m)
    {
        Transform b = m.transform.Find("Body");
        return b ? (Vector2)b.position : (Vector2)m.transform.position;
    }

    protected void Blood([Bridge.Ref] Vector2 position)
    {
        if (bloodVFX) VFXController.Ins.SpawnVFX(position, bloodVFX);
    }
}

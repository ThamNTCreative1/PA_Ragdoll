using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Vũ khí bổ (gậy, cưa): chạm để giơ vũ khí qua vai rồi bổ mạnh xuống phía trước, sau đó về tư thế nghỉ.
// Trong lúc bổ, mỗi frame kiểm tra quái nào thân vũ khí quét qua; mỗi con chỉ trúng một lần mỗi nhát.
public class ChopWeapon : HandWeapon
{
    [Header("Chop")]
    [SerializeField] protected float raiseAngle = -120f;  // giơ qua vai
    [SerializeField] protected float hitAngle = 35f;      // bổ xuống tới đây
    [SerializeField] protected float raiseTime = 0f;      // thời gian giơ lên (0 nếu tư thế nghỉ đã là giơ sẵn)
    [SerializeField] protected float swingTime = 0.1f;
    [SerializeField] protected float followThroughTime = 0.12f; // vẫn tính va chạm thêm chút sau cú bổ (tay còn đang quét tới)
    [SerializeField] protected float recoverTime = 0.25f;
    [SerializeField] protected int damage = 6;
    [Header("Knockback")]
    [SerializeField] protected bool knockback = true;
    [SerializeField] protected Vector2 knockX = new Vector2(4f, 6f);
    [SerializeField] protected Vector2 knockY = new Vector2(3f, 5f);
    [SerializeField] protected float knockSpin = 400f;
    [Header("FX")]
    [SerializeField] protected AudioClip hitSound;
    [SerializeField] protected int maxBlood = 3;

    protected bool swinging;
    private readonly HashSet<MonsterController> hitThisSwing = new HashSet<MonsterController>();
    private int bloodThisSwing;

    protected override void OnEnable()
    {
        base.OnEnable();
        swinging = false;
    }

    protected override bool OnPress()
    {
        if (swinging) return false; // đang vung dở -> không tính
        StartCoroutine(Swing());
        return true;
    }

    private IEnumerator Swing()
    {
        swinging = true;
        hitThisSwing.Clear();
        bloodThisSwing = 0;
        if (raiseTime > 0) yield return LerpArm(restAngle, raiseAngle, raiseTime, false);
        if (attackSound) AudioController.Ins.PlaySFX(attackSound);
        yield return LerpArm(raiseAngle, hitAngle, swingTime, true);
        float follow = Time.time + followThroughTime;
        while (Time.time < follow) { HitTouching(); yield return null; }
        yield return LerpArm(hitAngle, restAngle, recoverTime, false);
        swinging = false;
    }

    private IEnumerator LerpArm(float from, float to, float time, bool hitting)
    {
        float t = 0;
        while (t < time)
        {
            t += Time.deltaTime;
            SetArm(Mathf.Lerp(from, to, t / time));
            if (hitting) HitTouching();
            yield return null;
        }
        SetArm(to);
    }

    private void HitTouching()
    {
        bool any = false;
        foreach (MonsterController m in MonstersTouchingWeapon())
        {
            if (hitThisSwing.Contains(m)) continue;
            hitThisSwing.Add(m);
            any = true;
            if (bloodThisSwing++ < maxBlood) Blood(MonsterPoint(m)); // giới hạn số cụm máu khi trúng cả đám
            m.TakeDamage(damage);
            if (knockback && !m.IsDead)
            {
                Vector2 v = new Vector2(Random.Range(knockX.x, knockX.y), Random.Range(knockY.x, knockY.y)) * Scale;
                m.Launch(v, knockSpin);
            }
        }
        if (any && hitSound) AudioController.Ins.PlaySFX(hitSound);
    }
}

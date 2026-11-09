using System.Collections.Generic;
using UnityEngine;

public abstract class PowerBase : MonoBehaviour
{
    [SerializeField] protected AudioClip useSound;
    [SerializeField] protected float cooldown;
    // Parent cho các object hiệu ứng (để trống = không theo scale nào).
    [SerializeField] protected Transform container;
    // Hệ số kích thước hiệu ứng so với bản gốc PSF_V02 (quái V01 được scale 2).
    [SerializeField] protected float baseScale = 1f;
    private float nextUseTime;

    protected float Scale => (container ? container.lossyScale.x : 1f) * baseScale;
    // Mã lượt chạm hiện tại (mỗi lần chạm màn hình khi đang chọn power là 1 mã mới).
    protected static int UseId => PowerController.UseId;

    public virtual void PointerDown([Bridge.Ref] Vector2 position) { }
    public virtual void PointerHold([Bridge.Ref] Vector2 position) { }
    public virtual void PointerUp([Bridge.Ref] Vector2 position) { }
    public virtual void Cancel() { }
    // Đặt damage (máu) của 1 lần dùng power - mọi power dùng chung (PowerController.SetDamage).
    public virtual void SetDamage(int value) { }
    // Power còn đang chạy hiệu ứng (chưa xong) -> chưa cho dùng power tiếp theo.
    public virtual bool Busy => false;

    // Kích hoạt power nếu hết cooldown. Mỗi lần kích hoạt thành công tính 1 lượt dùng:
    // TryUse đánh dấu, PowerController đọc bằng ConsumeUsed sau PointerDown.
    private bool usedThisPress;
    protected bool TryUse()
    {
        if (Time.time < nextUseTime) return false;
        nextUseTime = Time.time + cooldown;
        if (useSound) AudioController.Ins.PlaySFX(useSound);
        usedThisPress = true;
        return true;
    }
    public bool ConsumeUsed()
    {
        bool used = usedThisPress;
        usedThisPress = false;
        return used;
    }

    // ---- Helpers dùng chung cho các power ----

    private static readonly HashSet<IDamageable> hitBuffer = new HashSet<IDamageable>();

    // Quái còn sống tại điểm chạm (bán kính r, world) - null nếu chạm trượt.
    // Lửa/Sét/Lốc phải chạm vào quái mới kích hoạt (và mới tính lượt).
    public static MonsterController MonsterAt([Bridge.Ref] Vector2 position, float r)
    {
        foreach (Collider2D col in Physics2D.OverlapCircleAll(position, r))
        {
            IDamageable t = GetTarget(col);
            if (t != null) return (MonsterController)t;
        }
        return null;
    }

    // Power chỉ tác dụng lên quái (bỏ qua collider trigger).
    public static IDamageable GetTarget(Collider2D col)
    {
        if (!col || col.isTrigger) return null;
        MonsterController monster = col.GetComponentInParent<MonsterController>();
        if (monster && !monster.IsDead) return monster;
        return null;
    }

    public static void DamageCircle([Bridge.Ref] Vector2 center, float radius, int damage, int useId)
    {
        hitBuffer.Clear();
        Collider2D[] cols = Physics2D.OverlapCircleAll(center, radius);
        foreach (Collider2D col in cols)
        {
            IDamageable target = GetTarget(col);
            if (target == null || hitBuffer.Contains(target)) continue;
            hitBuffer.Add(target);
            target.TakeDamage(damage, useId);
        }
    }

    public static Rect CameraRect()
    {
        Camera cam = Camera.main;
        float h = cam.orthographicSize;
        float w = h * cam.aspect;
        Vector3 p = cam.transform.position;
        return new Rect(p.x - w, p.y - h, w * 2, h * 2);
    }

    public static SpriteRenderer CreateSprite(string name, Sprite sprite, Transform parent, int order)
    {
        GameObject go = new GameObject(name);
        go.transform.SetParent(parent, false);
        SpriteRenderer sr = go.AddComponent<SpriteRenderer>();
        sr.sprite = sprite;
        sr.sortingOrder = order;
        return sr;
    }
}

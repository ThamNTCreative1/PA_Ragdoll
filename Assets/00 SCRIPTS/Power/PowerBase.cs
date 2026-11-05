using System.Collections.Generic;
using UnityEngine;

public abstract class PowerBase : MonoBehaviour
{
    [SerializeField] protected AudioClip useSound;
    [SerializeField] protected float cooldown;
    // Parent cho các object hiệu ứng; theo scale của Main (LayoutController phóng to khi màn ngang).
    [SerializeField] protected Transform container;
    private float nextUseTime;

    protected float Scale => container ? container.lossyScale.x : 1f;

    public virtual void PointerDown(Vector2 position) { }
    public virtual void PointerHold(Vector2 position) { }
    public virtual void PointerUp(Vector2 position) { }
    public virtual void Cancel() { }

    // Kích hoạt power nếu hết cooldown. Chỉ lần kích hoạt thành công mới tính 1 click:
    // TryUse đánh dấu, PowerController gọi GameController.Click sau khi power đã tung đòn.
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

    // Lấy đối tượng nhận damage từ collider (quái/player/block). Bỏ qua collider trigger
    // (vd. vùng phát hiện quanh player) để chỉ tính các bộ phận thật.
    public static IDamageable GetTarget(Collider2D col)
    {
        if (!col || col.isTrigger) return null;
        MonsterController monster = col.GetComponentInParent<MonsterController>();
        if (monster) return monster.IsDead ? null : monster;
        PlayerHealth player = col.GetComponentInParent<PlayerHealth>();
        if (player) return player.IsDead ? null : player;
        BlockController block = col.GetComponentInParent<BlockController>();
        if (block) return block;
        return null;
    }

    public static void DamageCircle(Vector2 center, float radius, int damage)
    {
        hitBuffer.Clear();
        Collider2D[] cols = Physics2D.OverlapCircleAll(center, radius);
        foreach (Collider2D col in cols)
        {
            IDamageable target = GetTarget(col);
            if (target == null || hitBuffer.Contains(target)) continue;
            hitBuffer.Add(target);
            target.TakeDamage(damage);
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

using UnityEngine;

// Sét: chạm vào quái thì sét đánh xuống chỗ đó (chạm trượt thì không có gì, không tính lượt).
public class LightningPower : PowerBase
{
    [SerializeField] private LightningStrike strike;
    [SerializeField] private float radius = 0.8f;
    [SerializeField] private int damage = 5;
    public override void SetDamage(int value) { damage = value; }
    [SerializeField] private float touchRadius = 0.3f; // độ rộng vùng chạm tính là trúng quái (nhân Scale)

    public override bool Busy => strike.Playing;

    public override void PointerDown(Vector2 position)
    {
        if (!MonsterAt(position, touchRadius * Scale)) return;
        if (!TryUse()) return;
        strike.Strike(position, radius, damage, Scale, UseId);
    }
}

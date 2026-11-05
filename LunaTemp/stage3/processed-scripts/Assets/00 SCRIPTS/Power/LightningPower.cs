using UnityEngine;

// Sét: chạm vào đâu, sét đánh xuống đó.
public class LightningPower : PowerBase
{
    [SerializeField] private LightningStrike strike;
    [SerializeField] private float radius = 0.8f;
    [SerializeField] private int damage = 5;

    public override void PointerDown([Bridge.Ref] Vector2 position)
    {
        if (!TryUse()) return;
        strike.Strike(position, radius, damage, Scale);
    }
}

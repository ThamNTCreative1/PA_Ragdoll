using UnityEngine;

// Lửa: chạm (tap) vào quái để đốt, giống các power khác.
// Quái bị bén lửa sẽ cháy lan khắp người và mất giáp (hết giáp thì mất máu) theo thời gian.
public class FirePower : PowerBase, IFireSource
{
    [SerializeField] private Sprite[] frames;
    [SerializeField] private float frameRate = 12f;
    [SerializeField] private float igniteRadius = 0.35f;
    [Header("Burn")]
    [SerializeField] private int burnDamage = 2;        // tổng damage (máu) của 1 lần đốt, chia đều theo các nhịp cháy
    public override void SetDamage(int value) { burnDamage = value; }
    [SerializeField] private float burnInterval = 0.4f;
    [SerializeField] private float burnDuration = 3f;

    public Sprite[] Frames => frames;
    public float FrameRate => frameRate;
    public float WorldScale => Scale;
    [SerializeField] private Sprite emberSprite;
    [SerializeField] private Sprite smokeSprite;
    public Sprite EmberSprite => emberSprite;
    public Sprite SmokeSprite => smokeSprite;

    public override void PointerDown(Vector2 position)
    {
        if (!MonsterAt(position, igniteRadius * Scale)) return; // phải chạm vào quái
        if (!TryUse()) return;
        Ignite(position);
    }

    // Còn quái đang cháy.
    public override bool Busy => Burning.ActiveCount > 0;

    private void Ignite(Vector2 position)
    {
        Collider2D[] cols = Physics2D.OverlapCircleAll(position, igniteRadius * Scale);
        foreach (Collider2D col in cols)
        {
            IDamageable target = GetTarget(col);
            if (target == null) continue;
            Burning.Ignite(target, this, col, position, burnDamage, burnInterval, burnDuration, UseId);
        }
    }
}

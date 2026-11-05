using UnityEngine;

// Lửa: kéo ngón tay trên màn hình. Lửa chỉ bám vào thứ nhận damage mà ngón tay quét qua (không để lại vệt lửa trên nền),
// thứ bị bén lửa sẽ cháy và mất máu theo thời gian.
public class FirePower : PowerBase, IFireSource
{
    [SerializeField] private Sprite[] frames;
    [SerializeField] private float frameRate = 12f;
    [SerializeField] private float spacing = 0.2f;
    [SerializeField] private float igniteRadius = 0.35f;
    [Header("Burn")]
    [SerializeField] private int burnDamage = 2;
    [SerializeField] private float burnInterval = 0.4f;
    [SerializeField] private float burnDuration = 3f;

    private Vector2 lastPos;
    private bool drawing;

    public Sprite[] Frames => frames;
    public float FrameRate => frameRate;
    public float WorldScale => Scale;
    [SerializeField] private Sprite emberSprite;
    [SerializeField] private Sprite smokeSprite;
    public Sprite EmberSprite => emberSprite;
    public Sprite SmokeSprite => smokeSprite;

    // Giữ tay: mỗi giây giữ tính thêm 1 click (lần chạm đầu đã được PowerController tính).
    [SerializeField] private float secondsPerClick = 1f;
    private float holdTime;

    public override void PointerDown([Bridge.Ref] Vector2 position)
    {
        holdTime = 0;
        if (!TryUse()) return;
        drawing = true;
        lastPos = position;
        Ignite(position);
    }

    public override void PointerHold([Bridge.Ref] Vector2 position)
    {
        if (!drawing) return;
        holdTime += Time.deltaTime;
        // Dò dọc đường kéo để không bỏ sót khi kéo nhanh.
        float step = spacing * Scale;
        Vector2 d = position - lastPos;
        int count = Mathf.Max(1, Mathf.CeilToInt(d.magnitude / step));
        for (int i = 1; i <= count; i++) Ignite(lastPos + d * i / count);
        lastPos = position;
        // Mỗi giây giữ tay tính thêm 1 click (sau khi đã đốt).
        while (holdTime >= secondsPerClick)
        {
            holdTime -= secondsPerClick;
            GameController.Ins.Click();
        }
    }

    public override void PointerUp([Bridge.Ref] Vector2 position) { drawing = false; holdTime = 0; }
    public override void Cancel() { drawing = false; holdTime = 0; }

    private void Ignite([Bridge.Ref] Vector2 position)
    {
        Collider2D[] cols = Physics2D.OverlapCircleAll(position, igniteRadius * Scale);
        foreach (Collider2D col in cols)
        {
            IDamageable target = GetTarget(col);
            if (target == null) continue;
            Burning.Ignite(target, this, col, position, burnDamage, burnInterval, burnDuration);
        }
    }
}

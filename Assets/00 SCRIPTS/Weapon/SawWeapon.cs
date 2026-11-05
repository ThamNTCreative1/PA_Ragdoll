using UnityEngine;

// Cưa máy: nghỉ thì cầm ngang hông chĩa ra trước; chạm để giơ cưa qua vai rồi bổ xuống như gậy.
// Cưa rung khi đang bổ; quái trúng bị trừ máu (không bị hất văng).
public class SawWeapon : ChopWeapon
{
    [Header("Saw")]
    [SerializeField] private float shake = 0.03f; // rung hình cưa trong lúc bổ

    private Vector3 spriteBasePos;

    protected override void OnEnable()
    {
        base.OnEnable();
        spriteBasePos = transform.localPosition;
    }

    protected override void OnDisable()
    {
        transform.localPosition = spriteBasePos;
        base.OnDisable();
    }

    protected override void Tick()
    {
        transform.localPosition = swinging
            ? spriteBasePos + (Vector3)(Random.insideUnitCircle * shake)
            : spriteBasePos;
    }
}

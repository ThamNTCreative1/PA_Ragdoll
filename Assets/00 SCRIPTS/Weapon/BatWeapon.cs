using UnityEngine;

// Gậy: vác trên vai (tư thế nghỉ = giơ sẵn), chạm để bổ xuống phía trước rồi vác lại.
// Quái trúng bị trừ máu và bị đánh bật ra sau.
public class BatWeapon : ChopWeapon
{
    protected override void OnEnable()
    {
        restAngle = raiseAngle; // nghỉ ở tư thế vác vai
        base.OnEnable();
    }
}

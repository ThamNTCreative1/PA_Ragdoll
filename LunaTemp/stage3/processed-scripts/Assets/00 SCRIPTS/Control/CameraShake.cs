using UnityEngine;

// Rung camera: gắn vào Main Camera. Gọi CameraShake.Ins.Shake(thời gian, biên độ).
// Lệch vị trí ngẫu nhiên quanh vị trí gốc, biên độ giảm dần về 0; nhiều lần rung chồng nhau thì lấy mạnh nhất.
public class CameraShake : MonoBehaviour
{
    public static CameraShake Ins;

    private Vector3 basePos;
    private float duration;
    private float timeLeft;
    private float strength;

    private void Awake()
    {
        Ins = this;
        basePos = transform.localPosition;
    }

    public void Shake(float time, float magnitude)
    {
        // Lần rung mới mạnh hơn phần còn lại của lần cũ thì thay thế.
        float remaining = duration > 0 ? strength * (timeLeft / duration) : 0f;
        if (magnitude < remaining) return;
        duration = time;
        timeLeft = time;
        strength = magnitude;
    }

    private void LateUpdate()
    {
        if (timeLeft <= 0) return;
        timeLeft -= Time.deltaTime;
        if (timeLeft <= 0)
        {
            transform.localPosition = basePos;
            return;
        }
        float k = strength * (timeLeft / duration);
        Vector2 offset = Random.insideUnitCircle * k;
        transform.localPosition = basePos + new Vector3(offset.x, offset.y, 0);
    }
}

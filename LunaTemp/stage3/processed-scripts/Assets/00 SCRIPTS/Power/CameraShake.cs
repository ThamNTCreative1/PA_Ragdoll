using UnityEngine;

// Rung camera: gắn vào Main Camera. Gọi CameraShake.Ins.Shake(thời gian, biên độ).
// Chỉ cộng/trừ phần lệch nên không đè lên việc GameController di chuyển camera giữa các stage.
public class CameraShake : MonoBehaviour
{
    public static CameraShake Ins;

    private Vector3 offset;
    private float duration;
    private float timeLeft;
    private float strength;

    private void Awake()
    {
        Ins = this;
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
        transform.position -= offset;
        offset = Vector3.zero;
        if (timeLeft <= 0) return;
        timeLeft -= Time.deltaTime;
        if (timeLeft <= 0) return;
        float k = strength * (timeLeft / duration);
        Vector2 o = Random.insideUnitCircle * k;
        offset = new Vector3(o.x, o.y, 0);
        transform.position += offset;
    }
}

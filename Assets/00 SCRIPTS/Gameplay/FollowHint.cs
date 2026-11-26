using UnityEngine;

// Arrow hint over a target (potion / player head / monster head), bobbing like the SRP_V07 hints
// (DOTween LocalMove down by `amplitude`, Yoyo, InOutSine, `duration` per half cycle, endless).
public class FollowHint : MonoBehaviour
{
    [SerializeField] private Transform target;
    [SerializeField] private Vector3 offset = new Vector3(0, 1.35f, 0);
    [SerializeField] private float amplitude = 0.17f;
    [SerializeField] private float duration = 0.5f;

    private float t;

    public void SetTarget(Transform tr) { target = tr; }

    private void LateUpdate()
    {
        if (!target) return;
        t += Time.deltaTime;
        float p = Mathf.PingPong(t / duration, 1f);
        float eased = 0.5f - 0.5f * Mathf.Cos(Mathf.PI * p); // InOutSine
        Vector3 pos = target.position + offset;
        pos.y -= amplitude * eased;
        pos.z = transform.position.z;
        transform.position = pos;
        transform.rotation = Quaternion.identity;
    }
}

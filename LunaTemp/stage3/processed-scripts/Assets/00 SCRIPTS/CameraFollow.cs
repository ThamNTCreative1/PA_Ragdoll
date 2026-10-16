using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    [Header("Đối tượng cần theo dõi")]
    [SerializeField] private Transform target;

    [Header("Vị trí camera")]
    [SerializeField] private Vector3 offset = new Vector3(0f, 5f, -10f);
    [SerializeField, Min(0f)] private float smoothSpeed = 5f;

    private void LateUpdate()
    {
        if (target == null)
            return;

        Vector3 targetPosition = target.position + offset;
        transform.position = Vector3.Lerp(
            transform.position,
            targetPosition,
            smoothSpeed * Time.deltaTime);
    }
}

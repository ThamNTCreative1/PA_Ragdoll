using UnityEngine;

public class CheckGround : MonoBehaviour
{
    [SerializeField] private bool onGround;
    [SerializeField] private LayerMask layerMask;
    [SerializeField] private float distance;
    public bool OnGround => onGround;
    private void Update()
    {
        Check();
    }
    private void Check()
    {
        RaycastHit2D hit = Physics2D.Raycast(transform.position, Vector2.down, distance, layerMask);
        onGround = hit.collider;
    }
    private void OnDrawGizmos()
    {
        Gizmos.color = Color.red;
        Gizmos.DrawLine(transform.position, transform.position + Vector3.down * distance);
    }
}
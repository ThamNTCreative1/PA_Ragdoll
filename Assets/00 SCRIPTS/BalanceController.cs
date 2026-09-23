using UnityEngine;

public class BalanceController : MonoBehaviour
{
    public float targetRotation;
    Rigidbody2D rb;
    public float force;
    public bool useBalance = true;
    void Start()
    {
        rb = gameObject.GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        if (!useBalance) return;
        rb.MoveRotation(Mathf.LerpAngle(rb.rotation, targetRotation, force * Time.deltaTime));
    }
}

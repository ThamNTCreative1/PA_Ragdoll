using System.Collections;
using UnityEngine;

public class JumpController : MonoBehaviour
{
    [SerializeField] private Rigidbody2D body;
    [SerializeField] private Vector2 jumpForce;
    [SerializeField, Min(1f)] private float timeCD;
    [SerializeField] private bool onCD;
    private IEnumerator CD()
    {
        onCD = true;
        yield return new WaitForSeconds(timeCD);
        onCD = false;
    }
    private void Jump()
    {
        if (onCD) return;
        StartCoroutine(CD());
        body.AddForce(jumpForce, ForceMode2D.Force);
    }
    private void OnTriggerStay2D(Collider2D collision)
    {
        if (collision.CompareTag("Jump")) Jump();
    }
}
using UnityEngine;

public class CheckGround : MonoBehaviour
{
    [SerializeField] private RagdollController controller;
    [SerializeField] private GameObject platform;
    private void OnCollisionExit2D(Collision2D collision)
    {
        if (collision.gameObject == platform) controller.StopBalance();
    }
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject == platform) controller.StartBalance();
        else controller.StopBalance();
    }
}

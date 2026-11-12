using UnityEngine;

public class GroundCheck : MonoBehaviour
{
    public bool OnGround ;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        OnGround = true;
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        OnGround = false;
    }
}
using UnityEngine;

// On every ragdoll part: forwards its collisions to the owner SspMan (wired by SSPRoomBuilder).
public class SspPartHit : MonoBehaviour
{
    [SerializeField] private SspMan man;
    [SerializeField] private int index;

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (!man) return;
        man.OnPartContact(index, 1);
        man.OnPartHit(index, collision);
    }

    private void OnCollisionExit2D(Collision2D collision)
    {
        if (man) man.OnPartContact(index, -1);
    }
}

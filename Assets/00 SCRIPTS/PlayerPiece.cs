using UnityEngine;

public class BodyPiece : MonoBehaviour
{
    [SerializeField] private PlayerController player;
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (player.IsZombie) return;
        if (!collision.gameObject.CompareTag("Monster")) return;
        MonsterController monster = collision.transform.GetComponentInParent<MonsterController>();
        if (!monster || monster.IsDead) return;
        player.Zombie();
    }
}
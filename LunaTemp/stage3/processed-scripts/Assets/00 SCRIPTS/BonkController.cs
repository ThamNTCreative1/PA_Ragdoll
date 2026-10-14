using UnityEngine;

public class BonkController : MonoBehaviour
{
    [SerializeField] private int damage;
    [SerializeField] private AudioClip hitSound;
    private void OnTriggerEnter2D(Collider2D collision)
    {
        IDamageable target = collision.GetComponent<IDamageable>();
        if (target == null) return;
        target.TakeDamage(transform.position, damage);
        AudioController.Ins.PlaySFX(hitSound);
    }
}

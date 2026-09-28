using System.Collections;
using UnityEngine;

public class LandmineController : MonoBehaviour
{
    [SerializeField] private int damage;
    [SerializeField] private LayerMask layer;
    [SerializeField] private AudioClip actionSound;
    [SerializeField] private GameObject boomVFX;
    [SerializeField] private float radius;

    private void OnCollisionEnter2D(Collision2D collision)
    {
        GameObject g = collision.gameObject;
        if (g.CompareTag("Player") || g.CompareTag("Monster")) Boom();
    }

    private void Boom()
    {
        boomVFX.SetActive(true);
        AudioController.Ins.PlaySFX(actionSound);
        Damage();
        StartCoroutine(DestroyBomb());
    }
    private IEnumerator DestroyBomb()
    {
        yield return new WaitForSeconds(0.5f);
        Destroy(gameObject);
    }

    private void Damage()
    {
        Collider2D[] cols = Physics2D.OverlapCircleAll(transform.position, radius * transform.localScale.x, layer);
        foreach (Collider2D col in cols)
        {
            col.gameObject.TryGetComponent<IDamageable>(out IDamageable target);
            if (target == null)
            {
                col.gameObject.transform.parent.TryGetComponent<IDamageable>(out target);
            }
            target?.TakeDamage(damage);
        }
    }
}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BombController : MonoBehaviour
{
    [SerializeField] private int damage;
    [SerializeField] private LayerMask layer;
    [SerializeField] private AudioClip startSound;
    [SerializeField] private AudioClip actionSound;
    [SerializeField] private float delay;

    [SerializeField] private float radius;

    private void OnEnable()
    {
        AudioController.Ins.PlaySFX(startSound);
        StartCoroutine(CountDown());
    }
    private IEnumerator CountDown()
    {
        yield return new WaitForSeconds(delay);
        Boom();
    }
    private void Boom()
    {
        AudioController.Ins.PlaySFX(actionSound);
        Damage();
        StartCoroutine(DestroyBomb());
    }
    private IEnumerator DestroyBomb()
    {
        yield return new WaitForSeconds(1f);
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
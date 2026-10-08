using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class BombBase : MonoBehaviour
{
    [Header("Base")]
    [SerializeField] protected LayerMask layer;
    [SerializeField] protected GameObject avatar;

    [Header("Effect")]
    [SerializeField] protected AudioClip startSound;
    [SerializeField] protected AudioClip actionSound;
    [SerializeField] protected GameObject boomVFX;
    [SerializeField] protected float shakeDuration;
    [SerializeField] protected float shakeStrength;

    [Header("Damage")]
    [SerializeField] protected float timeDestroy;
    [SerializeField] protected int damage;
    [SerializeField] protected float radius;

    [SerializeField] private List<UnityEvent<float, float>> actionEvents;
    protected bool isBoom;

    protected void OnEnable()
    {
        BombStart();
    }
    protected virtual void BombStart()
    {
        avatar.SetActive(true);
        AudioController.Ins.PlaySFX(startSound);
    }
    protected void Boom()
    {
        if (isBoom) return;
        isBoom = true;

        avatar.SetActive(false);
        boomVFX.SetActive(true);
        AudioController.Ins.PlaySFX(actionSound);

        Damage();
        actionEvents.ForEach(e => e?.Invoke(shakeDuration, shakeStrength));

        StartCoroutine(DestroyBomb());
    }
    protected IEnumerator DestroyBomb()
    {
        yield return new WaitForSeconds(timeDestroy);
        Destroy(gameObject);
    }
    protected void Damage()
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
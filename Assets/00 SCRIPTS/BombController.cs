using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BombController : MonoBehaviour
{
    [SerializeField] private int damage;
    [SerializeField] private LayerMask layer;
    private static readonly int STARTHash = Animator.StringToHash("START");
    private static readonly int BOOMHash = Animator.StringToHash("BOOM");
    [SerializeField] private AudioClip startSound;
    [SerializeField] private AudioClip actionSound;
    [SerializeField] private float delay;
    [SerializeField] private Animator anim;
    [SerializeField] private Transform vfx1;
    [SerializeField] private Transform vfx2;

    [SerializeField] private float scale;
    [SerializeField] private float radius;

    private void OnEnable()
    {
        scale = transform.lossyScale.x / transform.localScale.x;
        vfx1.localScale = Vector3.one * scale;
        vfx2.localScale = Vector3.one * scale;
        AudioController.Ins.PlaySFX(startSound);
        anim.SetTrigger(STARTHash);
        StartCoroutine(CountDown());
    }
    private IEnumerator CountDown()
    {
        yield return new WaitForSeconds(delay);
        Boom();
    }
    private void Boom()
    {
        anim.SetTrigger(BOOMHash);
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
        Collider2D[] cols = Physics2D.OverlapCircleAll(transform.position, radius * scale, layer);
        foreach (Collider2D col in cols)
        {
            col.gameObject.TryGetComponent<Rigidbody2D>(out Rigidbody2D target);
            if (target == null) return;
            target.AddForce(Vector2.one * damage, ForceMode2D.Impulse);
        }
    }
}
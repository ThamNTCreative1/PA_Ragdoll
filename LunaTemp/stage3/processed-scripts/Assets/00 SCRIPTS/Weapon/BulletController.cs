using System.Collections;
using UnityEngine;

public class BulletController : MonoBehaviour
{
    [Header("Bullet")]
    [SerializeField] private float speed;
    [SerializeField] private int damage;
    [SerializeField] private float lifeTime;

    [Header("SFX")]
    [SerializeField] private AudioClip hitMonsterSound;
    [SerializeField] private AudioClip hitSound;

    [SerializeField] private bool isHit;

    private void OnEnable()
    {
        isHit = false;
        StartCoroutine(LifeTime());
    }

    private void Update()
    {
        Move();
    }
    private void Move()
    {
        if (isHit) return;
        transform.position += speed * Time.deltaTime * transform.right;
    }
    private void OnCollisionEnter2D(Collision2D collision)
    {
        isHit = true;

        if (collision.gameObject.CompareTag("Monster"))
        {
            AudioController.Ins.PlaySFX(hitMonsterSound);

            IDamageable target = collision.gameObject.GetComponent<IDamageable>();
            target.TakeDamage(transform.position, damage);
        }
        else
        {
            AudioController.Ins.PlaySFX(hitSound);
        }
        gameObject.SetActive(false);
    }
    private IEnumerator LifeTime()
    {
        yield return new WaitForSeconds(lifeTime);
        gameObject.SetActive(false);
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BulletController : MonoBehaviour
{
    [LunaPlaygroundField("Bullet Speed")] public float speed;
    [LunaPlaygroundField("Bullet Damage")] public int damage;
    [SerializeField] private AudioClip hitMonsterSound;
    [SerializeField] private AudioClip hitSound;
    [SerializeField] private float lifeTime;
    [SerializeField] private bool hit;
    private PoolController pool;

    private void Start()
    {
        pool = PoolController.Ins;
    }
    private void OnEnable()
    {
        StartCoroutine(LifeTime());
    }

    private void Update()
    {
        if (hit) return;
        transform.position += speed * Time.deltaTime * transform.right;
    }
    private void OnCollisionEnter2D(Collision2D collision)
    {
        hit = true;

        if (collision.gameObject.CompareTag("Monster"))
        {
            AudioController.Ins.PlaySFX(hitMonsterSound);

            MonsterController monster = collision.transform.GetComponentInParent<MonsterController>();
            if (monster) monster.TakeDamage(damage);
        }
        else
        {
            AudioController.Ins.PlaySFX(hitSound);
        }
        ReturnToPool();
    }
    private IEnumerator LifeTime()
    {
        yield return new WaitForSeconds(lifeTime);
        ReturnToPool();
    }
    private void ReturnToPool()
    {
        StopAllCoroutines();
        pool.ReturnToPool(gameObject);
        gameObject.SetActive(false);
        hit = false;
    }
}

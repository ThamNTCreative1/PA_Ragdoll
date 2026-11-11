using System.Collections;
using System.Collections.Generic;
using Luna.Unity.FacebookInstantGames;
using UnityEngine;

public class BulletController : MonoBehaviour
{
    [LunaPlaygroundField("Bullet Speed")] public float speed;
    [LunaPlaygroundField("Bullet Damage")] public int damage;
    [SerializeField] private AudioClip hitMonsterSound;
    [SerializeField] private AudioClip hitSound;
    [SerializeField] private float lifeTime;
    [SerializeField] private bool hit;
    private Queue<GameObject> pool;
    private PlayerController player;

    private void Start()
    {
        player = GameController.Ins.P;
        pool = player.Pool;
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
        if (hit) return;
        hit = true;

        MonsterController monster = collision.gameObject.GetComponentInParent<MonsterController>();
        if (monster)
        {
            AudioController.Ins.PlaySFX(hitMonsterSound);
            player.currentMonster = monster;
            monster.TakeDamage(damage);
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
        pool.Enqueue(gameObject);
        gameObject.SetActive(false);
        hit = false;
    }
}

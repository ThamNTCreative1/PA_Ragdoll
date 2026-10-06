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
        hit = true;

        if (collision.gameObject.CompareTag("Monster"))
        {
            AudioController.Ins.PlaySFX(hitMonsterSound);
            if (!player.currentMonster || collision.transform.parent.gameObject != player.currentMonster.gameObject)
            {
                player.currentMonster = collision.transform.parent.gameObject.GetComponent<MonsterController>();
            }
            player.currentMonster.TakeDamage(damage);
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
        pool.Enqueue(gameObject);
        gameObject.SetActive(false);
        hit = false;
    }
}

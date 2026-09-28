using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BulletController : MonoBehaviour
{
    [SerializeField] private float speed;
    [SerializeField] private int damage;
    [SerializeField] private AudioClip hitMonsterSound;
    [SerializeField] private AudioClip hitSound;
    [SerializeField] private float lifeTime;
    [SerializeField] private bool hit;
    private Queue<GameObject> pool;
    private ShootController controller;

    private void Start()
    {
        controller = GameController.Ins.P.Fight.Controller as ShootController;
        pool = controller.Pool;
    }
    private void OnEnable()
    {
        StartCoroutine(LifeTime());
    }

    private void Update()
    {
        if (hit) return;
        Move();
    }
    private void Move()
    {
        transform.position += speed * Time.deltaTime * transform.right;
    }
    private void OnCollisionEnter2D(Collision2D collision)
    {
        hit = true;

        if (collision.gameObject.CompareTag("Monster"))
        {
            AudioController.Ins.PlaySFX(hitMonsterSound);
            if (!controller.currentMonster || collision.transform.parent.gameObject != controller.currentMonster.gameObject)
            {
                controller.currentMonster = collision.transform.parent.gameObject.GetComponent<MonsterController>();
            }
            controller.currentMonster.TakeDamage(damage);
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

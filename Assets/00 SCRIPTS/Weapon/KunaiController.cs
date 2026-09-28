using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class KunaiController : MonoBehaviour
{
    [SerializeField] private int damage;
    [SerializeField] private AudioClip hitMonsterSound;
    [SerializeField] private AudioClip hitSound;
    [SerializeField] private float lifeTime;
    [SerializeField] private float rotateSpeed;
    [SerializeField] private float moveSpeed;
    [SerializeField] private bool hit;

    private ShootController controller;
    private Queue<GameObject> pool;
    void Update()
    {
        if (hit) return;
        Rotate();
        Move();
    }
    private void Rotate()
    {
        Quaternion q = transform.rotation;
        q.eulerAngles += new Vector3(0, 0, -rotateSpeed * Time.deltaTime);
        transform.rotation = q;
    }
    private void Move()
    {
        transform.position += moveSpeed * Time.deltaTime * Vector3.right;
    }

    private void Start()
    {
        controller = GameController.Ins.P.Fight.Controller as ShootController;
        pool = controller.Pool;
    }
    private void OnEnable()
    {
        StartCoroutine(LifeTime());
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

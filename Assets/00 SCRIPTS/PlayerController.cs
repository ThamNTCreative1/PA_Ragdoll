using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] private HingeJoint2D left;
    [SerializeField] private HingeJoint2D right;
    [SerializeField] private Transform gun;
    [SerializeField] private GameObject bulletPrefab;
    private Queue<GameObject> bulletPool;
    public Queue<GameObject> Pool => bulletPool;
    [SerializeField] private bool canShoot;
    [SerializeField] private bool onCD;
    [SerializeField] private Transform poolParent;
    [SerializeField] private AudioClip shootSound;
    [LunaPlaygroundField("Shoot CD"), Min(0.1f)] public float ShootCD;
    private Coroutine animationCoroutine;
    [SerializeField] private float timeMotor;
    public MonsterController currentMonster;
    private void Start()
    {
        bulletPool = new Queue<GameObject>();
    }
    private void Update()
    {
        Shoot();
    }

    private void Shoot()
    {
        if (!canShoot || onCD) return;
        animationCoroutine ??= StartCoroutine(Animation());
        SpawnBullet();
    }
    private IEnumerator Animation()
    {
        while (true)
        {
            left.useMotor = true;
            right.useMotor = true;
            yield return new WaitForSeconds(timeMotor);
            left.useMotor = false;
            right.useMotor = false;
            yield return new WaitForSeconds(timeMotor);
        }
    }
    private IEnumerator WaitForCD()
    {
        onCD = true;
        yield return new WaitForSeconds(ShootCD);
        onCD = false;
    }
    private void SpawnBullet()
    {
        GameObject b = GetFreeBullet();
        b.transform.SetPositionAndRotation(gun.position, gun.rotation);
        b.SetActive(true);
        AudioController.Ins.PlaySFX(shootSound);
        StartCoroutine(WaitForCD());
    }
    private GameObject GetFreeBullet()
    {
        if (bulletPool.Count > 0) return bulletPool.Dequeue();
        return CreateNewBullet();

    }
    private GameObject CreateNewBullet()
    {
        return Instantiate(bulletPrefab, poolParent);
    }
    public void StopShoot()
    {
        canShoot = false;
        if (animationCoroutine != null) StopCoroutine(animationCoroutine);
        animationCoroutine = null;
    }

    public void StartShoot()
    {
        canShoot = true;
    }
}

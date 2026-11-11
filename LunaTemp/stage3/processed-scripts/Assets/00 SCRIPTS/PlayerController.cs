using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] private HingeJoint2D left;
    [SerializeField] private Transform gun;
    [SerializeField] private GameObject bulletPrefab;
    private Queue<GameObject> bulletPool;
    public Queue<GameObject> Pool => bulletPool;
    [SerializeField] private bool canShoot;
    [SerializeField] private bool onCD;
    [SerializeField] private Transform poolParent;
    [SerializeField] private AudioClip shootSound;
    [LunaPlaygroundField("Shoot CD"), Min(0.1f)] public float ShootCD;

    [Header("Weapon Pose")]
    [SerializeField] private float holdAngle = -85f;
    [SerializeField, Min(0.02f)] private float equipRaiseDuration = 0.1f;
    [SerializeField] private float recoilAngle = 8f;
    [SerializeField, Min(0.02f)] private float recoilDuration = 0.12f;
    [SerializeField, Min(0.02f)] private float recoilReturnDuration = 0.22f;

    private JointAngleLimits2D originalLeftLimits;
    private JointMotor2D originalLeftMotor;
    private bool originalLeftUseLimits;
    private bool originalLeftUseMotor;
    private float equipStartAngle;
    private float equipTime;
    private float recoilTime = float.PositiveInfinity;

    public MonsterController currentMonster;
    private void Start()
    {
        bulletPool = new Queue<GameObject>();
        if (left)
        {
            originalLeftLimits = left.limits;
            originalLeftMotor = left.motor;
            originalLeftUseLimits = left.useLimits;
            originalLeftUseMotor = left.useMotor;
            equipStartAngle = left.jointAngle;
            SetWeaponArmAngle(equipStartAngle);
        }

    }
    private void Update()
    {
        Shoot();
    }

    private void Shoot()
    {
        if (!canShoot || onCD) return;
        SpawnBullet();
    }

    private void FixedUpdate()
    {
        if (!left || !left.enabled) return;

        float direction = transform.lossyScale.x < 0f ? -1f : 1f;
        float raiseDuration = Mathf.Max(0.02f, equipRaiseDuration);
        equipTime = Mathf.Min(equipTime + Time.fixedDeltaTime, raiseDuration);

        float kickDuration = Mathf.Max(0.02f, recoilDuration);
        float returnDuration = Mathf.Max(0.02f, recoilReturnDuration);
        float recoil = 0f;
        if (recoilTime < kickDuration + returnDuration)
        {
            recoilTime += Time.fixedDeltaTime;
            recoil = recoilTime < kickDuration
                ? Mathf.SmoothStep(0f, 1f, recoilTime / kickDuration)
                : Mathf.SmoothStep(1f, 0f, (recoilTime - kickDuration) / returnDuration);
        }

        float target = (holdAngle - recoilAngle * recoil) * direction;
        if (equipTime < raiseDuration)
        {
            target = Mathf.LerpAngle(
                equipStartAngle,
                target,
                Mathf.SmoothStep(0f, 1f, equipTime / raiseDuration));
            MoveWeaponArmImmediately(target);
        }

        SetWeaponArmAngle(target);
    }

    private void SetWeaponArmAngle(float angle)
    {
        JointAngleLimits2D limits = left.limits;
        limits.min = angle;
        limits.max = angle;
        left.limits = limits;
        left.useMotor = false;
        left.useLimits = true;
    }

    private void MoveWeaponArmImmediately(float targetAngle)
    {
        if (!left.connectedBody) return;
        Rigidbody2D upperArm = left.GetComponent<Rigidbody2D>();
        if (!upperArm) return;

        float delta = -Mathf.DeltaAngle(left.jointAngle, targetAngle);
        Vector2 pivot = left.transform.TransformPoint(left.anchor);
        Vector2 connectedPivot = left.connectedBody.transform.TransformPoint(left.connectedAnchor);
        Quaternion rotation = Quaternion.Euler(0f, 0f, delta);

        foreach (string path in new[] { "Parts/upperarm_front", "Parts/forearm_front", "Parts/hand_front" })
        {
            Transform part = transform.Find(path);
            Rigidbody2D body = part ? part.GetComponent<Rigidbody2D>() : null;
            if (!body) continue;

            body.position = connectedPivot + (Vector2)(rotation * (Vector3)(body.position - pivot));
            body.rotation += delta;
            body.linearVelocity = left.connectedBody.linearVelocity;
            body.angularVelocity = left.connectedBody.angularVelocity;
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
        recoilTime = 0f;
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
    }

    public void StartShoot()
    {
        canShoot = true;
    }

    private void OnDestroy()
    {
        if (!left) return;
        left.limits = originalLeftLimits;
        left.motor = originalLeftMotor;
        left.useLimits = originalLeftUseLimits;
        left.useMotor = originalLeftUseMotor;
    }
}

using System.Collections;
using UnityEngine;

public class PlayerAttack : MonoBehaviour
{
    [SerializeField] private RagdollBalance balance;
    [SerializeField] private Transform gun;
    [SerializeField] private GameObject bulletPrefab;
    [SerializeField] private bool onCD;
    [SerializeField] private AudioClip shootSound;
    [LunaPlaygroundField("Shoot CD"), Min(0.1f)] public float ShootCD;
    [SerializeField] private float recoil = 120f;
    [Tooltip("Muzzle fire + glow of the original game's AK-47, played on every shot.")]
    [SerializeField] private ParticleSystem muzzleFlash;
    [SerializeField] private PlayerTrigger playerTrigger;
    [Tooltip("Seconds the gun dropped by a bitten human keeps falling before it is removed.")]
    [SerializeField] private float droppedGunLifetime = 3f;

    [SerializeField] private PlayerController player;
    private bool dropGun;
    private void Start()
    {
        player.OnDead += DropGun;
    }
    private void Update()
    {
        Shoot();
    }

    private void Shoot()
    {
        if (dropGun) return;
        MonsterController monster = playerTrigger.Monster;
        if (!monster)
        {
            StopShoot();
            return;
        }
        Vector2 target = monster.BodyPosition;
        // Face first: turning mirrors the rig, which would undo an arm already snapped onto the target.
        balance.SetFacing(target.x < player.Body.position.x ? -1 : 1);
        balance.AimAt(target);
        if (onCD || !balance.AimReady) return;
        SpawnBullet(target);
    }
    private void DropGun()
    {
        dropGun = true;
        GameObject gunBody = gun.transform.parent.gameObject;
        // Leave the hand: a body parented to a moving ragdoll part gets its transform dragged by the
        // part every frame and fights its own physics (the falling gun jittered). The character root
        // never moves, and worldPositionStays keeps the gun's place, angle and size.
        gunBody.transform.SetParent(player.transform, true);
        // No collider: the gun just falls (through everything) and is removed after a few seconds.
        gunBody.AddComponent<Rigidbody2D>();
        Destroy(gunBody, droppedGunLifetime);
        StopShoot();
        balance.DropWeapon();
    }
    private IEnumerator WaitForCD()
    {
        onCD = true;
        yield return new WaitForSeconds(ShootCD);
        onCD = false;
    }
    private void SpawnBullet(Vector2 target)
    {
        // Straight from the muzzle at the target: the ragdoll arm only has to be roughly on it.
        Vector2 dir = target - (Vector2)gun.position;
        Quaternion rot = Quaternion.Euler(0f, 0f, Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg);
        PoolController.Ins.SpawnObj(bulletPrefab, gun.position, rot);
        AudioController.Ins.PlaySFX(shootSound);
        if (muzzleFlash) muzzleFlash.Play();
        balance.Recoil(recoil);
        StartCoroutine(WaitForCD());
    }

    public void StopShoot()
    {
        balance.ClearAim();
    }
}

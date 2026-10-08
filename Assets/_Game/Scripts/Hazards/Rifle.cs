using System.Collections;
using UnityEngine;

namespace MelonAd
{
    /// <summary>
    /// Minigun (top right). Sweeps and fires every 50ms while the game runs; bullets are blocked by the right
    /// diagonal pin. When that pin is removed it keeps firing for 1.6s, then falls away.
    /// </summary>
    public class Rifle : MonoBehaviour
    {
        public Bullet bulletPrefab;
        public Transform bulletRoot;
        public SpriteRenderer muzzle;
        public int poolSize = 24;
        public float width = 2.35f;
        public float bulletSpeed = 40f;

        Bullet[] pool;
        float fireTimer = 0.08f;
        float burst = -1f;
        float tk;
        float flashT = -1f;
        float flashR;
        bool canFire = true;
        bool falling;

        void Start()
        {
            pool = new Bullet[poolSize];
            for (int i = 0; i < poolSize; i++)
            {
                pool[i] = Instantiate(bulletPrefab, bulletRoot);
                pool[i].gameObject.SetActive(false);
            }
            if (muzzle != null) muzzle.enabled = false;
        }

        public void OnPinRemoved()
        {
            if (!canFire) return;
            if (AudioManager.I != null) AudioManager.I.Play(Sfx.Fire);
            burst = GameConfig.I != null ? GameConfig.I.rifleBurstAfterPin : 1.6f;
            tk = 0f;
        }

        void Update()
        {
            float dt = Mathf.Min(Time.deltaTime, 0.05f);
            tk += dt;
            UpdateFlash(dt);
            if (!canFire || falling) return;

            transform.localRotation = Quaternion.Euler(0f, 0f, (1.1f + Mathf.Abs(0.7f * Mathf.Sin(tk))) * Mathf.Rad2Deg);

            if (burst > 0f)
            {
                burst -= dt;
                if (burst <= 0f)
                {
                    if (AudioManager.I != null) AudioManager.I.Stop(Sfx.Fire);
                    canFire = false;
                    StartCoroutine(Fall());
                    return;
                }
            }

            if (GameManager.I != null && GameManager.I.State == GameState.Run) fireTimer -= dt;
            if (fireTimer <= 0f)
            {
                fireTimer = GameConfig.I != null ? GameConfig.I.rifleInterval : 0.05f;
                Shoot();
            }
        }

        void Shoot()
        {
            float a = transform.eulerAngles.z * Mathf.Deg2Rad;
            Vector2 dir = new Vector2(Mathf.Cos(a), Mathf.Sin(a));
            Vector2 pos = (Vector2)transform.position - dir * (0.6f * width);
            for (int i = 0; i < pool.Length; i++)
            {
                if (pool[i].gameObject.activeSelf) continue;
                pool[i].Launch(pos, -dir * bulletSpeed);
                break;
            }
            flashT = 0f;
            flashR = 0.5f * Random.value;
            if (muzzle != null) muzzle.enabled = true;
        }

        void UpdateFlash(float dt)
        {
            if (flashT < 0f || muzzle == null) return;
            flashT += dt / 0.1f;
            if (flashT >= 1f)
            {
                flashT = -1f;
                muzzle.enabled = false;
                return;
            }
            float s = 0.3f + Mathf.Sin(Mathf.PI * flashT) * flashR;
            muzzle.transform.localScale = new Vector3(s, s, 1f);
            Color c = muzzle.color;
            c.a = 1f - flashT;
            muzzle.color = c;
        }

        IEnumerator Fall()
        {
            falling = true;
            Vector3 p0 = transform.position;
            float rot0 = transform.eulerAngles.z;
            float t = 0f;
            while (t < 1.75f)
            {
                t += Mathf.Min(Time.deltaTime, 0.05f);
                transform.position = p0 + new Vector3(t, -12.5f * t * t, 0f);
                transform.rotation = Quaternion.Euler(0f, 0f, rot0 + 2f * Mathf.Rad2Deg * t);
                yield return null;
            }
            gameObject.SetActive(false);
        }

        public void ResetState()
        {
            StopAllCoroutines();
            fireTimer = 0.08f;
            burst = -1f;
            tk = 0f;
            flashT = -1f;
            canFire = true;
            falling = false;
            if (muzzle != null) muzzle.enabled = false;
            if (pool != null) for (int i = 0; i < pool.Length; i++) pool[i].gameObject.SetActive(false);
        }
    }
}

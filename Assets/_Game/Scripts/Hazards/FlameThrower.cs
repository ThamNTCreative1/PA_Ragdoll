using UnityEngine;

namespace MelonAd
{
    /// <summary>Flamethrower (top left). Oscillates and emits flame blobs continuously; blocked by the left diagonal pin.</summary>
    public class FlameThrower : MonoBehaviour
    {
        public FlameParticle prefab;
        public Transform particleRoot;
        public int poolSize = 60;
        public float width = 2.59f;
        public float speed = 10f;

        FlameParticle[] pool;
        float tk;
        float acc;
        int next;

        void Start()
        {
            pool = new FlameParticle[poolSize];
            for (int i = 0; i < poolSize; i++)
            {
                pool[i] = Instantiate(prefab, particleRoot);
                pool[i].gameObject.SetActive(false);
            }
        }

        void Update()
        {
            float dt = Mathf.Min(Time.deltaTime, 0.05f);
            tk += dt;
            float a = -(1f + Mathf.Sin(tk) * 0.5f);
            transform.localRotation = Quaternion.Euler(0f, 0f, a * Mathf.Rad2Deg);

            float rate = GameConfig.I != null ? GameConfig.I.flameRate : 60f;
            acc += dt * rate;
            if (acc > 5f) acc = 5f;
            while (acc >= 1f)
            {
                acc -= 1f;
                Emit(a);
            }
        }

        void Emit(float a)
        {
            Vector2 dir = new Vector2(Mathf.Cos(a), Mathf.Sin(a));
            Vector2 pos = (Vector2)transform.position + dir * (width * 0.5f);
            for (int k = 0; k < pool.Length; k++)
            {
                int i = (next + k) % pool.Length;
                if (pool[i].gameObject.activeSelf) continue;
                next = i + 1;
                pool[i].Launch(pos, dir * speed, (Random.value - 0.5f) * 4f * Mathf.Rad2Deg);
                return;
            }
        }

        public void ResetState()
        {
            tk = 0f;
            acc = 0f;
            if (pool != null) for (int i = 0; i < pool.Length; i++) pool[i].gameObject.SetActive(false);
        }
    }
}

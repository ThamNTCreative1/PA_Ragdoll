using UnityEngine;

namespace MelonAd
{
    /// <summary>Pooled rifle bullet. Lives 0.75s, dies on first hit (deferred so the other side still gets its callback).</summary>
    public class Bullet : MonoBehaviour
    {
        public Rigidbody2D rb;
        public float life = 0.75f;

        float timer;
        bool hit;

        public void Launch(Vector2 pos, Vector2 vel)
        {
            transform.position = pos;
            transform.rotation = Quaternion.identity;
            gameObject.SetActive(true);
            rb.position = pos;
            rb.rotation = 0f;
            rb.linearVelocity = vel;
            rb.angularVelocity = 0f;
            timer = life;
            hit = false;
        }

        void Update()
        {
            timer -= Time.deltaTime;
            if (hit || timer <= 0f) gameObject.SetActive(false);
        }

        void OnCollisionEnter2D(Collision2D c)
        {
            if (hit) return;
            hit = true;
            if (FxManager.I != null) FxManager.I.Debris(FxManager.I.bulletShard, transform.position, 2);
            Spike s = c.collider.GetComponent<Spike>();
            if (s != null) s.Break(3);
        }
    }
}

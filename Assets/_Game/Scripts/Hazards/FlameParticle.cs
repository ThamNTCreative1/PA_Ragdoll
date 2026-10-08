using UnityEngine;

namespace MelonAd
{
    /// <summary>Pooled flame blob: real physics circle (blocked by pins/walls), visual scales and fades over 0.75s.</summary>
    public class FlameParticle : MonoBehaviour
    {
        public Rigidbody2D rb;
        public Transform visual;
        public SpriteRenderer sr;
        public float life = 0.75f;

        float t;
        float s;

        public void Launch(Vector2 pos, Vector2 vel, float angVelDeg)
        {
            transform.position = pos;
            transform.rotation = Quaternion.identity;
            gameObject.SetActive(true);
            rb.position = pos;
            rb.rotation = 0f;
            rb.linearVelocity = vel;
            rb.angularVelocity = angVelDeg;
            t = 0f;
            s = Random.value + 0.5f;
            Apply();
        }

        void Update()
        {
            t += Mathf.Min(Time.deltaTime, 0.05f) / life;
            if (t >= 1f)
            {
                gameObject.SetActive(false);
                return;
            }
            Apply();
        }

        void Apply()
        {
            float sc = Mathf.Sin(Mathf.PI * t) * s * 0.5f + 0.1f + t * 0.5f;
            visual.localScale = new Vector3(sc, sc, 1f);
            Color c = sr.color;
            c.a = 1f - t;
            sr.color = c;
        }
    }
}

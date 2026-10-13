using UnityEngine;
namespace MelonSandbox
{
    public sealed class MelonParticle : MonoBehaviour
    {
        public Vector2 velocity;
        public float lifetime = .65f, gravity;
        public bool grow;
        float elapsed;
        SpriteRenderer sr;
        Vector3 startScale;
        float initialAlpha;
        void Start() { sr = GetComponent<SpriteRenderer>(); startScale = transform.localScale; initialAlpha = sr.color.a; }
        void Update()
        {
            elapsed += Time.deltaTime;
            velocity.y -= gravity * Time.deltaTime;
            transform.position += (Vector3)(velocity * Time.deltaTime);
            if (sr) sr.color = new Color(sr.color.r, sr.color.g, sr.color.b, initialAlpha * (1 - elapsed / lifetime));
            if (grow) transform.localScale = startScale * (1 + elapsed * 2);
            if (elapsed >= lifetime) Destroy(gameObject);
        }
    }
}

using System.Collections;
using UnityEngine;

namespace MelonAd
{
    public enum PinEvent { None = 0, Tutor = 1, Flame = 2, Fire = 3 }

    /// <summary>Tap-to-remove pin. Flies out along flyOffset with t^2 easing in 0.35s (original tween).</summary>
    public class Pin : MonoBehaviour
    {
        public PinEvent evt;
        public Vector2 flyOffset;

        public bool Removed { get; private set; }

        public void Remove()
        {
            if (Removed) return;
            Removed = true;
            Collider2D c = GetComponent<Collider2D>();
            if (c != null) c.enabled = false;
            StartCoroutine(Fly());
        }

        IEnumerator Fly()
        {
            Vector3 p0 = transform.position;
            float t = 0f;
            while (t < 1f)
            {
                t += Time.deltaTime / 0.35f;
                if (t > 1f) t = 1f;
                transform.position = p0 + new Vector3(flyOffset.x * t * t, flyOffset.y * t * t, 0f);
                yield return null;
            }
            gameObject.SetActive(false);
        }

        public void ResetState()
        {
            StopAllCoroutines();
            Removed = false;
        }
    }
}

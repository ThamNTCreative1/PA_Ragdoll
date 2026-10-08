using UnityEngine;

namespace MelonAd
{
    /// <summary>Keeps the sky background covering the whole screen at any aspect / zoom (original: scale = max(w/pw, h/ph)).</summary>
    public class ScreenBackground : MonoBehaviour
    {
        public Camera cam;
        SpriteRenderer sr;

        void Awake()
        {
            sr = GetComponent<SpriteRenderer>();
        }

        void LateUpdate()
        {
            if (sr == null || sr.sprite == null || cam == null) return;
            Vector2 size = sr.sprite.bounds.size;
            float h = cam.orthographicSize * 2f;
            float w = h * cam.aspect;
            float k = Mathf.Max(w / size.x, h / size.y);
            transform.localScale = new Vector3(k, k, 1f);
        }
    }
}

using UnityEngine;

namespace MelonAd
{
    /// <summary>
    /// Sizes the orthographic camera with the same rule as CanvasScaler "Expand" (reference 1080x1920):
    /// the whole reference area is always visible. Result: a Screen Space - Camera canvas keeps a CONSTANT
    /// world scale on every device, so the level (physics) under Canvas/World behaves identically everywhere.
    /// </summary>
#if UNITY_EDITOR
    [ExecuteAlways]
#endif
    [RequireComponent(typeof(Camera))]
    public class CameraFit : MonoBehaviour
    {
        [Tooltip("World units shown for the reference height (1920px).")]
        public float designHeight = 29.895f;
        public Vector2 referenceResolution = new Vector2(1080f, 1920f);

        Camera cam;

        void OnEnable()
        {
            Apply();
        }

        void LateUpdate()
        {
            Apply();
        }

        public void Apply()
        {
            if (cam == null) cam = GetComponent<Camera>();
            if (cam == null) return;
            float designWidth = designHeight * referenceResolution.x / referenceResolution.y;
            float size = designHeight * 0.5f;
            float byWidth = designWidth * 0.5f / Mathf.Max(0.01f, cam.aspect);
            if (byWidth > size) size = byWidth;
            if (!Mathf.Approximately(cam.orthographicSize, size)) cam.orthographicSize = size;
        }
    }
}

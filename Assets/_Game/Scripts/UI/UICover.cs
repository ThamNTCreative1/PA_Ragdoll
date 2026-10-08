using UnityEngine;
using UnityEngine.UI;

namespace MelonAd
{
    /// <summary>Makes an Image / RawImage cover its parent rect while keeping the picture aspect.</summary>
#if UNITY_EDITOR
    [ExecuteAlways]
#endif
    public class UICover : MonoBehaviour
    {
        public Graphic target;

        float Aspect()
        {
            Image img = target as Image;
            if (img != null && img.sprite != null) return img.sprite.rect.width / img.sprite.rect.height;
            RawImage raw = target as RawImage;
            if (raw != null && raw.texture != null) return (float)raw.texture.width / raw.texture.height;
            return 0f;
        }

        void LateUpdate()
        {
            if (target == null) return;
            float aspect = Aspect();
            if (aspect <= 0f) return;
            RectTransform rt = (RectTransform)transform;
            RectTransform parent = rt.parent as RectTransform;
            if (parent == null) return;
            Rect pr = parent.rect;
            float w = pr.width;
            float h = pr.height;
            if (w / Mathf.Max(1f, h) > aspect) h = w / aspect;
            else w = h * aspect;
            Vector2 size = new Vector2(w, h);
            if (rt.sizeDelta != size) rt.sizeDelta = size;
        }
    }
}

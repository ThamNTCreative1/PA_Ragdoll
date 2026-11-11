using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // Circular stencil for iris wipes; content is counter-anchored to stay glued as it shrinks.
    public class UIIrisMask : MonoBehaviour
    {
        private RectTransform _rect;
        private RectTransform _root;
        private Tween _tween;

        public RectTransform Content { get; private set; }

        public static UIIrisMask Create(RectTransform root)
        {
            var go = new GameObject("IrisMask", typeof(RectTransform), typeof(Image), typeof(Mask));
            var rect = (RectTransform)go.transform;
            rect.SetParent(root, false);
            rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);

            var image = go.GetComponent<Image>();
            image.sprite = CircleSprite();
            image.raycastTarget = false;
            go.GetComponent<Mask>().showMaskGraphic = false;

            var contentGo = new GameObject("Content", typeof(RectTransform));
            var content = (RectTransform)contentGo.transform;
            content.SetParent(rect, false);
            content.anchorMin = content.anchorMax = new Vector2(0.5f, 0.5f);

            var iris = go.AddComponent<UIIrisMask>();
            iris._rect = rect;
            iris._root = root;
            iris.Content = content;
            return iris;
        }

        public bool IsAnimating => _tween != null && _tween.IsActive() && _tween.IsPlaying();

        public Tween Open(Vector2 center, float duration)
        {
            _tween?.Kill();
            SetCenter(center);
            _rect.sizeDelta = Vector2.zero;
            _tween = _rect.DOSizeDelta(Vector2.one * CoverDiameter(center), duration)
                .SetEase(Ease.OutCubic)
                .SetUpdate(true);
            return _tween;
        }

        public Tween Close(Vector2 center, float duration)
        {
            _tween?.Kill();
            SetCenter(center);
            _rect.sizeDelta = Vector2.one * CoverDiameter(center);
            _tween = _rect.DOSizeDelta(Vector2.zero, duration)
                .SetEase(Ease.OutCubic)
                .SetUpdate(true);
            return _tween;
        }

        private void SetCenter(Vector2 center)
        {
            _rect.anchoredPosition = center;
            Content.sizeDelta = RootSize();
            Content.anchoredPosition = -center;
        }

        private float CoverDiameter(Vector2 center)
        {
            var half = RootSize() * 0.5f;
            float dx = half.x + Mathf.Abs(center.x);
            float dy = half.y + Mathf.Abs(center.y);
            return 2.1f * Mathf.Sqrt(dx * dx + dy * dy);
        }

        // Falls back to scaled screen size on the first frame, before layout has sized the root.
        private Vector2 RootSize()
        {
            var size = _root.rect.size;
            if (size.x >= 1f && size.y >= 1f) return size;
            var canvas = _root.GetComponentInParent<Canvas>();
            float scale = canvas != null ? Mathf.Max(0.01f, canvas.scaleFactor) : 1f;
            return new Vector2(Screen.width, Screen.height) / scale;
        }

        private void OnDestroy() => _tween?.Kill();

        private static Sprite _circle;

        private static Sprite CircleSprite()
        {
            if (_circle != null) return _circle;

            const int size = 128;
            var center = new Vector2(size * 0.5f, size * 0.5f);
            float radius = size * 0.5f - 1f;
            var pixels = new Color32[size * size];
            for (int y = 0; y < size; y++)
            for (int x = 0; x < size; x++)
            {
                float d = Vector2.Distance(new Vector2(x + 0.5f, y + 0.5f), center);
                byte a = (byte)(255f * Mathf.Clamp01(radius - d));
                pixels[y * size + x] = new Color32(255, 255, 255, a);
            }

            var tex = new Texture2D(size, size, TextureFormat.RGBA32, false);
            tex.SetPixels32(pixels);
            tex.Apply(false, true);
            _circle = Sprite.Create(tex, new Rect(0, 0, size, size), new Vector2(0.5f, 0.5f));
            return _circle;
        }
    }
}

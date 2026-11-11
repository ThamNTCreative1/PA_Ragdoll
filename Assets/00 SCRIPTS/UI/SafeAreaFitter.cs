using Game.Core;
using UnityEngine;

namespace Game.UI
{
    // Shrinks a stretched RectTransform to the device safe area (notches, punch-holes), and
    // optionally reserves the top strip the banner stack occupies so the HUD is never covered.
    [RequireComponent(typeof(RectTransform))]
    public class SafeAreaFitter : MonoBehaviour
    {
        [Tooltip("Inset the top edge by the height of the banner stack.")]
        [SerializeField] private bool reserveBannerSpace;

        private Rect _applied;
        private float _appliedBanner = -1f;

        private void OnEnable()
        {
            BannerSpace.Changed += Apply;
            Apply();
        }

        private void OnDisable() => BannerSpace.Changed -= Apply;

        private void Update()
        {
            if (Screen.safeArea != _applied) Apply();
        }

        private void Apply()
        {
            var rt = (RectTransform)transform;
            var safe = Screen.safeArea;
            var (min, max) = ToAnchors(safe, Screen.width, Screen.height);
            rt.anchorMin = min;
            rt.anchorMax = max;
            rt.offsetMin = Vector2.zero;

            float banner = BannerHeight();
            rt.offsetMax = new Vector2(0f, -ToLocal(banner));

            _applied = safe;
            _appliedBanner = banner;
        }

        private float BannerHeight() => reserveBannerSpace ? BannerSpace.HeightPixels : 0f;

        // offsetMax is in canvas units; the scaler makes those differ from screen pixels.
        private float ToLocal(float pixels)
        {
            if (pixels <= 0f) return 0f;
            var canvas = GetComponentInParent<Canvas>();
            float scale = canvas != null ? canvas.scaleFactor : 1f;
            return scale > 0f ? pixels / scale : pixels;
        }

        public static (Vector2 min, Vector2 max) ToAnchors(Rect safeArea, float screenWidth, float screenHeight)
        {
            if (screenWidth <= 0f || screenHeight <= 0f)
                return (Vector2.zero, Vector2.one);

            var min = new Vector2(safeArea.xMin / screenWidth, safeArea.yMin / screenHeight);
            var max = new Vector2(safeArea.xMax / screenWidth, safeArea.yMax / screenHeight);
            return (min, max);
        }
    }
}

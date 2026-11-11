using UnityEngine;

namespace Game.UI
{
    // Pushes a full-anchored RectTransform back out to the whole display, past whatever safe-area
    // inset its parent sits inside. Screens hang under UIService's SafeArea rect so their CONTENT
    // clears notches — but a modal's backdrop has to reach the glass, or the game shows through the
    // inset as a bright band down the edge.
    [RequireComponent(typeof(RectTransform))]
    public class FullBleedRect : MonoBehaviour
    {
        private RectTransform _rect;
        private Canvas _canvas;
        private Rect _applied;
        private float _appliedScale;

        private void OnEnable()
        {
            _rect = (RectTransform)transform;
            _canvas = GetComponentInParent<Canvas>();
            Apply();
        }

        // Same poll SafeAreaFitter uses: the area changes on rotation, and scaleFactor on resize.
        private void Update()
        {
            if (Screen.safeArea != _applied || !Mathf.Approximately(Scale, _appliedScale)) Apply();
        }

        private float Scale => _canvas != null ? _canvas.scaleFactor : 0f;

        private void Apply()
        {
            float scale = Scale;
            if (scale <= 0f) return;

            var safe = Screen.safeArea;
            _applied = safe;
            _appliedScale = scale;

            // The parent is inset by exactly the safe area, so growing by the same margin lands on
            // the display edge. Pixels to canvas units, since offsets are in the canvas's own space.
            _rect.offsetMin = new Vector2(-safe.xMin / scale, -safe.yMin / scale);
            _rect.offsetMax = new Vector2((Screen.width - safe.xMax) / scale,
                                          (Screen.height - safe.yMax) / scale);
        }
    }
}

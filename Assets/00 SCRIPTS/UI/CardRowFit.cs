using UnityEngine;

namespace Game.UI
{
    // Fits a hand-placed row of cards to the screen width: the cards keep the positions and sizes set
    // in the scene, and the whole row (Content) is scaled — up on wide screens (capped by maxScale),
    // down if the screen is narrower than the row. The panel's height follows the scale.
    // Re-applies whenever the canvas width changes (rotation, resize).
    public class CardRowFit : MonoBehaviour
    {
        [Tooltip("Holds the hand-placed cards (centre-anchored)")]
        [SerializeField] private RectTransform content;
        [Tooltip("Free space kept left and right of the row, in UI units at scale 1")]
        [SerializeField] private float sideMargin = 35f;
        [Tooltip("Largest scale on wide screens (1.25 turns 160 cards into 200)")]
        [SerializeField] private float maxScale = 1.25f;
        [Tooltip("Panel height at scale 1")]
        [SerializeField] private float baseHeight = 210f;

        private RectTransform _panel;
        private RectTransform _canvasRect;
        private float _appliedWidth = -1f;

        private void Awake()
        {
            _panel = (RectTransform)transform;
            Apply();
        }

        private void OnEnable() => Apply();

        private void Update()
        {
            if (!Mathf.Approximately(CanvasWidth(), _appliedWidth)) Apply();
        }

        // The root canvas width: the space the UI is laid out in (Screen can lag a rotation).
        private float CanvasWidth()
        {
            if (_canvasRect == null)
            {
                var canvas = GetComponentInParent<Canvas>();
                if (canvas != null) _canvasRect = canvas.rootCanvas.transform as RectTransform;
            }
            return _canvasRect != null ? _canvasRect.rect.width : 1080f;
        }

        // Width of the row as placed in the scene: from the leftmost to the rightmost card edge.
        private float RowWidth()
        {
            float half = 0f;
            foreach (RectTransform card in content)
            {
                if (!card.gameObject.activeSelf) continue;
                half = Mathf.Max(half, Mathf.Abs(card.anchoredPosition.x) + card.rect.width * 0.5f);
            }
            return half * 2f + sideMargin * 2f;
        }

        private void Apply()
        {
            if (content == null || _panel == null) return;
            float available = CanvasWidth();
            _appliedWidth = available;
            float row = RowWidth();
            if (row <= 0f) return;

            float scale = Mathf.Min(maxScale, available / row);
            content.localScale = new Vector3(scale, scale, 1f);
            _panel.sizeDelta = new Vector2(Mathf.Min(available, Mathf.Max(row * scale, 1080f)), baseHeight * scale);
        }
    }
}

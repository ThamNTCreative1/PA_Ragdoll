using UnityEngine;
using UnityEngine.UI;

// Small replacement for the SRP_V07 DOTweenAnimation components on its UI (no DOTween in this project):
// Scale = yoyo from the start scale to `endScale` (uniform); LocalMove = restart loop from the start position to `endPosition`;
// Color = yoyo of the Graphic colour to `endColor`. Ease InOutSine, endless, `duration` per half cycle (or per loop for move).
public class UiTween : MonoBehaviour
{
    public enum Mode { Scale, LocalMove, Color }

    [SerializeField] private Mode mode = Mode.Scale;
    [SerializeField] private float duration = 0.5f;
    [SerializeField] private float endScale = 1.05f;
    [SerializeField] private Vector2 endPosition;
    [SerializeField] private Color endColor = Color.white;
    [SerializeField] private RectTransform rect;
    [SerializeField] private Graphic graphic;

    private Vector3 startScale;
    private Vector2 startPosition;
    private Color startColor;
    private float t;

    private void Awake()
    {
        if (rect) { startScale = rect.localScale; startPosition = rect.anchoredPosition; }
        if (graphic) startColor = graphic.color;
    }

    private void OnEnable() { t = 0; }

    private void Update()
    {
        t += Time.unscaledDeltaTime;
        float p = mode == Mode.LocalMove ? Mathf.Repeat(t / duration, 1f) : Mathf.PingPong(t / duration, 1f);
        float e = 0.5f - 0.5f * Mathf.Cos(Mathf.PI * p); // InOutSine
        switch (mode)
        {
            case Mode.Scale:
                if (rect) rect.localScale = Vector3.LerpUnclamped(startScale, Vector3.one * endScale, e);
                break;
            case Mode.LocalMove:
                if (rect) rect.anchoredPosition = Vector2.LerpUnclamped(startPosition, endPosition, e);
                break;
            case Mode.Color:
                if (graphic) graphic.color = Color.LerpUnclamped(startColor, endColor, e);
                break;
        }
    }
}

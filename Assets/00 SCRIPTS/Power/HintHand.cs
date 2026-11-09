using UnityEngine;

// Bàn tay nhấp nhấp chỉ vào nút power (nhún scale + nhích về hướng nút).
public class HintHand : MonoBehaviour
{
    [SerializeField] private Vector2 tapOffset = new Vector2(-20f, 20f); // canvas units, hướng về phía nút
    [SerializeField] private float speed = 5f;
    [SerializeField] private float pulse = 0.15f;

    private RectTransform rect;
    private Vector2 basePos;
    private Vector3 baseScale;

    private void Awake()
    {
        rect = (RectTransform)transform;
        basePos = rect.anchoredPosition;
        baseScale = rect.localScale;
    }

    private void Update()
    {
        float k = 0.5f * (1f + Mathf.Sin(Time.unscaledTime * speed));
        rect.anchoredPosition = basePos + tapOffset * k;
        rect.localScale = baseScale * (1f - pulse * k);
    }
}

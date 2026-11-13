using UnityEngine;
using UnityEngine.UI;

// Fail screen like the reference ad (AVK_FAIL): the 50% black shadow fades in over 0.2 s, the "FAIL" title and the
// "TRY AGAIN" box show at once, and the finger on the box pulses (scale 1 + 0.1 sin, 1.5 s loop). The whole panel is a
// CTA button (LunaController.CTA), as tapping anywhere in the reference opens the store.
public class AcidFailPanel : MonoBehaviour
{
    [SerializeField] private Image shadow;
    [SerializeField] private RectTransform finger;
    [Tooltip("Holds the title, box and finger laid out on a designHeight-tall frame; scaled to the panel height like the " +
             "reference (scale = screen height / design height), so it fits portrait and landscape.")]
    [SerializeField] private RectTransform content;
    [SerializeField] private RectTransform panelRect;
    public float designHeight = 1920f;
    public float shadowAlpha = 0.5f;
    public float fadeTime = 0.2f;
    public float pulsePeriod = 1.5f;
    public float pulseScale = 0.1f;

    private float t;

    private void OnEnable()
    {
        t = 0;
        Apply();
    }

    private void Update()
    {
        t += Time.unscaledDeltaTime;
        Apply();
    }

    private void Apply()
    {
        if (content && panelRect && designHeight > 0)
        {
            float k = panelRect.rect.height / designHeight;
            content.localScale = new Vector3(k, k, 1f);
        }
        if (shadow)
        {
            Color c = shadow.color;
            c.a = shadowAlpha * (fadeTime > 0 ? Mathf.Clamp01(t / fadeTime) : 1f);
            shadow.color = c;
        }
        if (finger)
        {
            float s = 1f + pulseScale * Mathf.Sin(2f * Mathf.PI * t / pulsePeriod);
            finger.localScale = new Vector3(s, s, 1f);
        }
    }
}

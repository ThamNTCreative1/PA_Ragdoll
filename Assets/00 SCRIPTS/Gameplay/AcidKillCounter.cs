using UnityEngine;
using UnityEngine.UI;

// "KILLED: N" counter (UI set up in the scene): a label image and digit images (pre-rendered sprites, no font), laid
// out centred on this object. Every new kill punches the counter up.
public class AcidKillCounter : MonoBehaviour
{
    [SerializeField] private RectTransform root;
    [SerializeField] private RectTransform label;
    [Tooltip("Digit slots, left to right (enough for the largest count).")]
    [SerializeField] private Image[] digits;
    [Tooltip("Sprites for 0..9.")]
    [SerializeField] private Sprite[] digitSprites;
    public float labelGap = 14f;
    public float digitSpacing = 2f;
    public float punchScale = 0.3f;
    public float punchTime = 0.3f;

    private float punchT = -1f;

    private void Start()
    {
        SetCount(0, false);
    }

    public void SetCount(int n, bool punch)
    {
        if (n < 0) n = 0;
        string s = n.ToString();
        int len = Mathf.Min(s.Length, digits.Length);
        float labelW = label ? label.rect.width : 0f;
        float total = labelW + labelGap;
        for (int i = 0; i < len; i++)
        {
            Sprite sp = digitSprites[s[s.Length - len + i] - '0'];
            digits[i].sprite = sp;
            digits[i].rectTransform.sizeDelta = sp.rect.size;
            total += sp.rect.width + (i > 0 ? digitSpacing : 0f);
        }
        float x = -total / 2f;
        if (label)
        {
            label.anchoredPosition = new Vector2(x + labelW / 2f, label.anchoredPosition.y);
            x += labelW + labelGap;
        }
        for (int i = 0; i < digits.Length; i++)
        {
            bool on = i < len;
            digits[i].enabled = on;
            if (!on) continue;
            float w = digits[i].rectTransform.sizeDelta.x;
            RectTransform rt = digits[i].rectTransform;
            rt.anchoredPosition = new Vector2(x + w / 2f, rt.anchoredPosition.y);
            x += w + digitSpacing;
        }
        if (punch) punchT = 0f;
    }

    private void Update()
    {
        if (punchT < 0 || !root) return;
        punchT += Time.deltaTime;
        float g = Mathf.Clamp01(punchT / punchTime);
        float s = 1f + punchScale * Mathf.Sin(g * Mathf.PI);
        root.localScale = new Vector3(s, s, 1f);
        if (g >= 1f) { punchT = -1f; root.localScale = Vector3.one; }
    }
}

using UnityEngine;
using UnityEngine.UI;

// Viền chữ không dùng UI.Outline/Shadow (Luna không render các mesh effect này khi build).
// Các bản sao Text màu tối được tạo sẵn trong Editor (Rebuild) và lưu trong scene,
// lúc chạy chỉ đồng bộ text / ẩn hiện / alpha khi chữ chính thay đổi.
[RequireComponent(typeof(Text))]
public class TextOutline : MonoBehaviour
{
    public Color outlineColor = new Color(.08f, .04f, .06f, 1);
    public float thickness = 4;
    public Color shadowColor = new Color(0, 0, 0, .85f);
    public Vector2 shadowOffset = new Vector2(6, -7);
    public Text[] copies;
    public float[] baseAlpha;

    Text source;
    string lastText;
    bool lastEnabled;
    float lastAlpha = -1;

    void Awake()
    {
        source = GetComponent<Text>();
        Sync(true);
    }

    void LateUpdate() { Sync(false); }

    void Sync(bool force)
    {
        if (copies == null || source == null) return;
        bool en = source.enabled && source.gameObject.activeInHierarchy;
        float a = source.color.a;
        if (!force && source.text == lastText && en == lastEnabled && Mathf.Abs(a - lastAlpha) < .01f) return;
        lastText = source.text; lastEnabled = en; lastAlpha = a;
        for (int i = 0; i < copies.Length; i++)
        {
            if (copies[i] == null) continue;
            copies[i].text = lastText;
            copies[i].enabled = en;
            Color c = copies[i].color; c.a = baseAlpha[i] * a; copies[i].color = c;
        }
    }

#if UNITY_EDITOR
    [ContextMenu("Rebuild Outline")]
    public void Rebuild()
    {
        var src = GetComponent<Text>();
        if (copies != null)
            for (int i = 0; i < copies.Length; i++)
                if (copies[i] != null) DestroyImmediate(copies[i].gameObject);
        float d = thickness, k = thickness * .7071f;
        Vector2[] offsets = {
            shadowOffset,
            new Vector2(d, 0), new Vector2(-d, 0), new Vector2(0, d), new Vector2(0, -d),
            new Vector2(k, k), new Vector2(k, -k), new Vector2(-k, k), new Vector2(-k, -k)
        };
        copies = new Text[offsets.Length];
        baseAlpha = new float[offsets.Length];
        var srt = (RectTransform)transform;
        for (int i = 0; i < offsets.Length; i++)
        {
            var go = new GameObject(name + (i == 0 ? " shadow" : " outline"), typeof(RectTransform));
            go.layer = gameObject.layer;
            go.transform.SetParent(transform.parent, false);
            go.transform.SetSiblingIndex(transform.GetSiblingIndex());
            var rt = (RectTransform)go.transform;
            rt.anchorMin = srt.anchorMin; rt.anchorMax = srt.anchorMax; rt.pivot = srt.pivot;
            rt.sizeDelta = srt.sizeDelta; rt.anchoredPosition = srt.anchoredPosition + offsets[i];
            rt.localScale = srt.localScale;
            var t = go.AddComponent<Text>();
            t.font = src.font; t.fontSize = src.fontSize; t.fontStyle = src.fontStyle;
            t.alignment = src.alignment;
            t.horizontalOverflow = src.horizontalOverflow; t.verticalOverflow = src.verticalOverflow;
            t.supportRichText = false; t.raycastTarget = false; t.text = src.text; t.enabled = src.enabled;
            Color c = i == 0 ? shadowColor : outlineColor;
            baseAlpha[i] = c.a; t.color = c;
            copies[i] = t;
        }
        UnityEditor.EditorUtility.SetDirty(this);
    }
#endif
}

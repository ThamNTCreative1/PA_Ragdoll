using UnityEngine;
using UnityEngine.UI;

// Thay the UI.Outline/Shadow (ISS-011): Text cha ve bong, Text con (face) ve chu chinh.
// Game chi can set text/color tren Text cha nhu binh thuong.
public class TextShadowCopy : MonoBehaviour
{
    public Text face;
    public Color shadowColor = new Color(0.08f, 0.06f, 0.1f, 1f);
    Text src;

    void Awake() { src = GetComponent<Text>(); }

    void LateUpdate()
    {
        if (src == null || face == null) return;
        if (face.text != src.text) face.text = src.text;
        Color c = src.color;
        if (c.r != shadowColor.r || c.g != shadowColor.g || c.b != shadowColor.b)
        {
            face.color = c;
        }
        else
        {
            Color f = face.color; f.a = c.a; face.color = f;
        }
        Color s = shadowColor; s.a = c.a;
        src.color = s;
    }
}

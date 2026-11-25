using UnityEngine;

// Fit camera ortho cho ca portrait/landscape; BG phu kin phia tren, phia duoi dung mau nen.
[ExecuteAlways]
public class CameraFit : MonoBehaviour
{
    public Camera cam;
    public SpriteRenderer background;
    public float floorY = -2.6f;          // y the gioi cua mat san
    public float bgFloorOffset = 2.6f;    // khoang cach tam BG -> mat san (BG scale 1)
    public float bgHalfHeight = 5.76f;
    public float bgHalfWidth = 10.24f;
    public float halfWidthNeeded = 4.9f;  // nua be ngang can thay (Rumi + monster)
    public float minOrtho = 4.6f;
    public float floorFracPortrait = 0.40f;
    public float floorFracLandscape = 0.47f;

    // Luna: Camera.pixelWidth/pixelHeight la float -> khong gan vao int
    float lastW, lastH;

    void OnEnable() { lastW = 0f; Apply(); }

    void Update()
    {
        if (cam != null && (cam.pixelWidth != lastW || cam.pixelHeight != lastH)) Apply();
    }

    // Editor capture render vao RenderTexture, khong qua Update
    void OnPreCull()
    {
        if (cam != null && (cam.pixelWidth != lastW || cam.pixelHeight != lastH)) Apply();
    }

    public void Apply()
    {
        if (cam == null) return;
        float w = cam.pixelWidth;
        float h = cam.pixelHeight;
        if (w <= 0f || h <= 0f) return;
        lastW = w; lastH = h;
        float aspect = w / h;
        if (float.IsNaN(aspect) || float.IsInfinity(aspect) || aspect <= 0f) return;

        float o = Mathf.Max(minOrtho, halfWidthNeeded / aspect);
        float frac = aspect < 1f ? floorFracPortrait : floorFracLandscape;
        float cy = floorY + o * (1f - 2f * frac);
        cam.orthographic = true;
        cam.orthographicSize = o;
        cam.transform.position = new Vector3(0f, cy, -10f);

        if (background != null)
        {
            float top = cy + o;
            float halfW = o * aspect;
            float s = Mathf.Max(1f, (top - floorY) / (bgHalfHeight + bgFloorOffset));
            s = Mathf.Max(s, halfW / bgHalfWidth);
            if (float.IsNaN(s) || float.IsInfinity(s)) return;
            background.transform.localScale = new Vector3(s, s, 1f);
            background.transform.position = new Vector3(0f, floorY + bgFloorOffset * s, 0f);
        }
    }
}

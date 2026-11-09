using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Keeps the whole play area visible in both portrait and landscape:
/// - Orthographic camera fits the world rect [-halfWidth..halfWidth] x [worldBottom..worldTop]
///   while reserving a top band for the race bar.
/// - CanvasScaler matches width in portrait and height in landscape.
/// - Background sprite always covers the screen.
/// Recalculates only when the screen size changes (no per-frame cost).
/// </summary>
public class ResponsiveLayout : MonoBehaviour
{
    public Camera cam;
    public CanvasScaler scaler;
    public SpriteRenderer background;
    [LunaPlaygroundAsset("Background image")] public Texture2D backgroundTexture;

    public float halfWidth = 4.6f;
    public float worldBottom = -3.2f;
    public float worldTop = 13.5f;
    [Range(0f, 0.4f)] public float topReserve = 0.11f;

    [Header("Optional landscape / portrait tweaks")]
    public RectTransform tapButton;
    public Vector2 tapButtonPortrait = new Vector2(0f, 0.09f);
    public Vector2 tapButtonLandscape = new Vector2(0f, 0.10f);

    [Header("Top hint text (pushed below notch / camera cutout)")]
    public RectTransform hintText;
    [Tooltip("Distance from the top of the screen (UI units, 1920 tall). Bigger = lower.")]
    [LunaPlaygroundField("Hint text Y (from top, bigger = lower)")]
    public float hintTopMargin = 820f;

    private int lastW, lastH;
    private float lastTop, lastHintMargin;

    private void Start()
    {
        if (background && backgroundTexture && (!background.sprite || background.sprite.texture != backgroundTexture))
        {
            var rect = new Rect(0f, 0f, backgroundTexture.width, backgroundTexture.height);
            background.sprite = Sprite.Create(backgroundTexture, rect, new Vector2(0.5f, 0.5f), 100f);
        }
        Refresh();
    }

    private void Update()
    {
        if (Screen.width != lastW || Screen.height != lastH || !Mathf.Approximately(lastTop, worldTop)
            || !Mathf.Approximately(lastHintMargin, hintTopMargin)) Refresh();
    }

    public void Refresh()
    {
        lastW = Screen.width;
        lastH = Screen.height;
        lastTop = worldTop;
        lastHintMargin = hintTopMargin;
        if (lastW <= 0 || lastH <= 0) return;

        float aspect = (float)lastW / lastH;
        bool landscape = aspect > 1f;

        float needH = (worldTop - worldBottom) / (1f - topReserve);
        float size = Mathf.Max(needH * 0.5f, halfWidth / aspect);
        float extra = size * 2f - needH;           // spare vertical space when width-limited
        float bottomEdge = worldBottom - extra * 0.5f;

        if (cam)
        {
            cam.orthographicSize = size;
            Vector3 p = cam.transform.position;
            cam.transform.position = new Vector3(0f, bottomEdge + size, p.z);
        }

        if (scaler) scaler.matchWidthOrHeight = landscape ? 1f : 0f;

        if (background && background.sprite)
        {
            Vector2 sz = background.sprite.bounds.size;
            float viewH = size * 2f, viewW = viewH * aspect;
            float s = Mathf.Max(viewW / sz.x, viewH / sz.y) * 1.02f;
            background.transform.localScale = new Vector3(s, s, 1f);
        }

        if (tapButton)
        {
            Vector2 a = landscape ? tapButtonLandscape : tapButtonPortrait;
            tapButton.anchorMin = new Vector2(0.5f, a.y);
            tapButton.anchorMax = new Vector2(0.5f, a.y);
            tapButton.anchoredPosition = new Vector2(a.x, 0f);
        }

        if (hintText)
        {
            float cutoutPixels = Screen.height - Screen.safeArea.yMax;
            float scale = scaler ? scaler.GetComponent<Canvas>().scaleFactor : 1f;
            float cutoutUnits = scale > 0f ? cutoutPixels / scale : 0f;
            hintText.anchoredPosition = new Vector2(0f, -(cutoutUnits + hintTopMargin));
        }
    }
}

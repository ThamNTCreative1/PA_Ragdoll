using UnityEngine;
using UnityEngine.UI;

// Custom background from the Luna playground (LunaController "Use Custom BG" + "BG Image"): a RawImage on a world-space
// canvas behind the game, drawn over the default backdrop (which is never touched). It always covers the camera view
// (portrait or landscape) and crops the image instead of stretching it.
public class AcidCustomBG : MonoBehaviour
{
    [SerializeField] private Camera cam;
    [SerializeField] private RawImage image;
    [SerializeField] private RectTransform rect;

    private int lastW, lastH;
    private float lastSize;

    public void Show(Texture2D tex)
    {
        if (!image) return;
        image.texture = tex;
        image.enabled = tex != null;
        lastW = -1;
        Fit();
    }

    private void LateUpdate()
    {
        if (!cam || !image || !image.enabled) return;
        if (Screen.width != lastW || Screen.height != lastH || cam.orthographicSize != lastSize) Fit();
    }

    private void Fit()
    {
        if (!cam || !image || !rect || image.texture == null) return;
        lastW = Screen.width; lastH = Screen.height; lastSize = cam.orthographicSize;
        float aspect = lastH > 0 ? (float)lastW / lastH : 1f;
        float viewH = cam.orthographicSize * 2f, viewW = viewH * aspect;
        Vector3 c = cam.transform.position;
        rect.position = new Vector3(c.x, c.y, rect.position.z);
        rect.sizeDelta = new Vector2(viewW, viewH);
        // Cover: show the centre of the image with the view's aspect.
        float texAspect = image.texture.height > 0 ? (float)image.texture.width / image.texture.height : 1f;
        Rect uv = new Rect(0f, 0f, 1f, 1f);
        if (texAspect > aspect) { uv.width = aspect / texAspect; uv.x = (1f - uv.width) * 0.5f; }
        else { uv.height = texAspect / aspect; uv.y = (1f - uv.height) * 0.5f; }
        image.uvRect = uv;
    }
}

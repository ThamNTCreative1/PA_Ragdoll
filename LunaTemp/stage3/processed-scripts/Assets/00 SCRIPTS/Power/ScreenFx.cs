using System.Collections;
using UnityEngine;
using UnityEngine.UI;

// Điều khiển 2 Image phủ màn hình có sẵn trong scene: Dark (tối trời) và Flash (chớp sáng).
public class ScreenFx : MonoBehaviour
{
    [SerializeField] private Image dark;
    [SerializeField] private Image flash;
    public static ScreenFx Ins;

    private Coroutine darkRoutine;
    private Coroutine flashRoutine;

    private void Awake()
    {
        Ins = this;
        SetAlpha(dark, 0);
        SetAlpha(flash, 0);
    }

    public void SetDark(float alpha, float duration)
    {
        if (darkRoutine != null) StopCoroutine(darkRoutine);
        darkRoutine = StartCoroutine(Fade(dark, alpha, duration));
    }

    public void Flash(float strength)
    {
        if (flashRoutine != null) StopCoroutine(flashRoutine);
        flashRoutine = StartCoroutine(FlashRoutine(strength));
    }

    private IEnumerator FlashRoutine(float strength)
    {
        SetAlpha(flash, strength);
        yield return new WaitForSeconds(0.05f);
        SetAlpha(flash, 0);
        yield return new WaitForSeconds(0.05f);
        SetAlpha(flash, strength * 0.7f);
        yield return Fade(flash, 0, 0.25f);
    }

    private IEnumerator Fade(Image img, float to, float duration)
    {
        if (!img) yield break;
        float from = img.color.a;
        float t = 0;
        while (t < duration)
        {
            t += Time.deltaTime;
            SetAlpha(img, Mathf.Lerp(from, to, t / duration));
            yield return null;
        }
        SetAlpha(img, to);
    }

    private static void SetAlpha(Image img, float a)
    {
        if (!img) return;
        Color c = img.color;
        c.a = a;
        img.color = c;
        img.enabled = a > 0.001f;
    }
}

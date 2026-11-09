using UnityEngine;
using UnityEngine.EventSystems;

/// <summary>Fires on pointer DOWN (no wait for release) so fast tapping feels responsive.</summary>
public class TapButton : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IPointerExitHandler
{
    public StairRaceGame game;
    public RectTransform visual;
    public float pressScale = 0.88f;

    private bool held;
    private float punch;

    public bool Held { get { return held; } }

    public void OnPointerDown(PointerEventData e)
    {
        held = true;
        punch = 1f;
        if (game) game.OnTap();
    }

    public void OnPointerUp(PointerEventData e) { held = false; }
    public void OnPointerExit(PointerEventData e) { held = false; }

    private void Update()
    {
        if (!visual) return;
        punch = Mathf.MoveTowards(punch, 0f, Time.deltaTime * 6f);
        float idle = 1f + Mathf.Sin(Time.time * 6f) * 0.03f;
        float s = held ? pressScale : Mathf.Lerp(idle, pressScale, punch);
        visual.localScale = new Vector3(s, s, 1f);
    }

    public void ForceRelease() { held = false; }
}

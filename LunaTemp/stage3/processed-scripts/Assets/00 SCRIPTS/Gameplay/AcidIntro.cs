using UnityEngine;
using UnityEngine.UI;

// Intro screen (UI set up in the scene): "KILL THEM ALL! STOP THE PLATFORM" shaking over a light black shade, and a
// pulsing START button. START hides the intro, shows the in-game HUD and starts the game (first wave + tutorial hand).
public class AcidIntro : MonoBehaviour
{
    [SerializeField] private AcidGame game;
    [SerializeField] private AcidAudio sfx;
    [SerializeField] private Button startButton;
    [SerializeField] private RectTransform title;
    [SerializeField] private RectTransform button;
    [Tooltip("Shown once the game starts (kill counter); hidden during the intro.")]
    [SerializeField] private GameObject[] showOnStart;

    [Header("Title shake")]
    [Tooltip("Shake: max sideways offset (px).")]
    public float shakeX = 2f;
    [Tooltip("Shake: max up/down offset (px).")]
    public float shakeY = 1f;
    [Tooltip("Shake: max tilt (degrees); 0 = no tilt.")]
    public float shakeAngle = 0f;
    [Tooltip("New shake position this many times per second.")]
    public float shakeRate = 20f;

    [Header("Button pulse")]
    public float pulseScale = 0.08f;
    public float pulsePeriod = 0.9f;

    private Vector2 titlePos;
    private float t, nextShake;

    private void Awake()
    {
        if (title) titlePos = title.anchoredPosition;
        for (int i = 0; i < showOnStart.Length; i++) if (showOnStart[i]) showOnStart[i].SetActive(false);
        if (startButton) startButton.onClick.AddListener(OnStart);
    }

    private void Update()
    {
        t += Time.unscaledDeltaTime;
        if (title && t >= nextShake)
        {
            nextShake = t + 1f / shakeRate;
            title.anchoredPosition = titlePos + new Vector2(Random.Range(-shakeX, shakeX), Random.Range(-shakeY, shakeY));
            title.localRotation = Quaternion.Euler(0f, 0f, Random.Range(-shakeAngle, shakeAngle));
        }
        if (button)
        {
            float s = 1f + pulseScale * Mathf.Sin(2f * Mathf.PI * t / pulsePeriod);
            button.localScale = new Vector3(s, s, 1f);
        }
    }

    private void OnStart()
    {
        if (sfx) sfx.PlayClick();
        for (int i = 0; i < showOnStart.Length; i++) if (showOnStart[i]) showOnStart[i].SetActive(true);
        gameObject.SetActive(false);
        if (game) game.StartGame();
    }
}

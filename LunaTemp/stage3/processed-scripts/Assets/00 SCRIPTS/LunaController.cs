using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// Luna Playworks integration only: playground fields, lifecycle, CTA, end card. Gameplay lives in 00 SCRIPTS/Gameplay.
public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Time Play")] public float TimePlay = 60;
    [LunaPlaygroundAsset("BGM")] public AudioClip BGM;
    // Custom BG: shown over the game's own backdrop, covering the camera view (cropped, never stretched).
    [LunaPlaygroundField("Use Custom BG")] public bool UseCustomBG;
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;

    [SerializeField] private AcidGame game;
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private AcidAudio sfx;
    [SerializeField] private AcidCustomBG customBG;
    [SerializeField, Range(0, 1)] private float musicVolume = 0.6f;
    [SerializeField] private List<Button> CTA = new List<Button>();
    [Tooltip("End card (transparent, full-screen CTA), shown as soon as Time Play runs out.")]
    [SerializeField] private GameObject endUI;

    private bool gameEndedSent;

    private void Awake()
    {
        if (customBG) customBG.Show(UseCustomBG ? BGTexture : null);
    }

    private void Start()
    {
        if (BGM && musicSource) { musicSource.clip = BGM; musicSource.loop = true; musicSource.volume = musicVolume; musicSource.Play(); }
        foreach (Button b in CTA) if (b) b.onClick.AddListener(ClickCTA);
        if (endUI) endUI.SetActive(false);
        // Time Play counts from the intro's START button (the game has an intro screen first).
        if (game) game.OnStarted += BeginTimer;
        else BeginTimer();
    }

    private void BeginTimer() { StartCoroutine(EndAfterTime()); }

    public void ShowEndUI()
    {
        if (endUI) endUI.SetActive(true);
    }

    public void ClickCTA()
    {
        if (sfx) sfx.PlayClick();
        Luna.Unity.Playable.InstallFullGame();
    }

    // Luna's GameEnded is sent only when TimePlay runs out.
    private IEnumerator EndAfterTime()
    {
        yield return new WaitForSeconds(TimePlay);
        if (!gameEndedSent) { gameEndedSent = true; Luna.Unity.LifeCycle.GameEnded(); }
        // Time is up (this project: always): the transparent end card shows at once (tap anywhere = store) while the
        // gameplay plays its finale (tank melting in the acid) behind it.
        ShowEndUI();
        if (game) game.TimeUp(null);
    }
}

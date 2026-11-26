using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// Character skins (order = GameController.skinPrefabs). Player and the 3 monsters pick from the same list.
public enum CharacterSkin { Hat, Beanie, Bush, Helmet, SkullRed, SkullBlack, Alien, Deer, Goat, Snow, Pink }

// Luna Playworks integration only: playground fields, lifecycle, CTA, end card. Gameplay lives in 00 SCRIPTS/Gameplay.
public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Player")] public CharacterSkin Player = CharacterSkin.Hat;
    [LunaPlaygroundField("Monster 1")] public CharacterSkin Monster1 = CharacterSkin.Deer;
    [LunaPlaygroundField("Monster 2")] public CharacterSkin Monster2 = CharacterSkin.Goat;
    [LunaPlaygroundField("Monster 3")] public CharacterSkin Monster3 = CharacterSkin.Pink;
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundField("Time Play")] public float TimePlay = 30;
    [LunaPlaygroundField("Limit Click")] public bool LimitClick;
    [LunaPlaygroundField("Max Click")] public int MaxClick = 1;
    [LunaPlaygroundAsset("BGM")] public AudioClip BGM;
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Winter Map")] public bool CustomWinter;
    // Footer like RSNM_V06 (02 PREFABS/Footer): app logo (rounded-stroke shader) + app name.
    [LunaPlaygroundAsset("App Logo")] public Texture2D LogoTexture;
    [LunaPlaygroundField("App Name")] public string AppName = "Survival Sandbox: Playground";

    [SerializeField] private GameController game;
    [SerializeField] private GameAudio sfx;
    [SerializeField] private AudioSource musicSource;
    [SerializeField, Range(0, 1)] private float musicVolume = 0.6f;
    [Tooltip("Screen background (SRP_V07 BG: RawImage on a camera canvas behind the world); always shows BG Image.")]
    [SerializeField] private RawImage BGImage;
    [SerializeField] private MapTheme mapTheme;
    [SerializeField] private RawImage logo;
    [SerializeField] private Text nameText;
    [SerializeField] private List<Button> CTA = new List<Button>();
    [Tooltip("Full-screen end card (CTA), shown by Limit Time Play / Limit Click.")]
    [SerializeField] private GameObject endCard;

    private int clicks;
    private bool gameEndedSent;

    private void Awake()
    {
        if (game)
        {
            game.SetPlayerSkin((int)Player);
            game.SetMonsterSkins(new int[] { (int)Monster1, (int)Monster2, (int)Monster3 });
        }
        if (BGImage && BGTexture) BGImage.texture = BGTexture;
        if (mapTheme) mapTheme.SetWinter(CustomWinter);
        if (logo && LogoTexture) logo.texture = LogoTexture;
        if (nameText && !string.IsNullOrEmpty(AppName)) nameText.text = AppName;
    }

    private void Start()
    {
        if (BGM && musicSource) { musicSource.clip = BGM; musicSource.loop = true; musicSource.volume = musicVolume; musicSource.Play(); }
        foreach (Button b in CTA) if (b) b.onClick.AddListener(ClickCTA);
        if (endCard) endCard.SetActive(false);
        if (game && LimitClick) game.OnTap += CountClick;
        StartCoroutine(EndAfterTime());
    }

    private void CountClick()
    {
        clicks++;
        if (clicks >= MaxClick) ShowEndCard();
    }

    public void ShowEndCard()
    {
        if (endCard) endCard.SetActive(true);
    }

    private void ClickCTA()
    {
        if (sfx) sfx.PlayClick();
        Luna.Unity.Playable.InstallFullGame();
    }

    // Luna's GameEnded is sent only when TimePlay runs out.
    private IEnumerator EndAfterTime()
    {
        yield return new WaitForSeconds(TimePlay);
        if (!gameEndedSent) { gameEndedSent = true; Luna.Unity.LifeCycle.GameEnded(); }
        if (LimitTimePlay) ShowEndCard();
    }
}

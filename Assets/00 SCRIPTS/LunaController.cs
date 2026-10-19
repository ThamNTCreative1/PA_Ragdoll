using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Limit Count Play?")] public bool LimitCountPlay;
    [LunaPlaygroundField("Count Play")] public int CountPlay;
    [LunaPlaygroundAsset("BGM")] public AudioClip BGM;
    [LunaPlaygroundField("Footer Color")] public Color FooterColor;

    [SerializeField] private AudioSource musicSource;
    [SerializeField] private Image footer;


    [Header("Stage 1")]
    [LunaPlaygroundAsset("Stage 1 BG 1920x1080")] public Texture2D BG1Texture;
    [LunaPlaygroundField("Stage 1 Title Text")] public string Title1Text;
    [LunaPlaygroundField("Stage 1 Color Title Text")] public Color Title1TextColor;
    [SerializeField] private RawImage BG1;
    [SerializeField] private TextMeshProUGUI title1;

    [Header("Stage 2")]
    [LunaPlaygroundAsset("Stage 2 BG 1920x1080")] public Texture2D BG2Texture;
    [LunaPlaygroundField("Stage 2 Title Text")] public string Title2Text;
    [LunaPlaygroundField("Stage 2 Color Title Text")] public Color Title2TextColor;
    [SerializeField] private RawImage BG2;
    [SerializeField] private TextMeshProUGUI title2;

    [SerializeField] private GameObject endCard;
    [SerializeField] private List<Button> CTA;

    [SerializeField] private int count;

    private void Awake()
    {
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        endCard.SetActive(false);
        SetupGame();
    }
    private void SetupGame()
    {
        musicSource.clip = BGM;
        footer.color = FooterColor;

        BG1.texture = BG1Texture;
        title1.text = Title1Text;
        title1.color = Title1TextColor;

        BG2.texture = BG2Texture;
        title2.text = Title2Text;
        title2.color = Title2TextColor;
    }
    private void Start()
    {
        musicSource.Play();
        StartCoroutine(EndGame());
    }
    public void UpdateCount()
    {
        if (!LimitCountPlay) return;
        count++;
        if (count >= CountPlay) ShowEndCard();
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        if (LimitTimePlay) ShowEndCard();
        Luna.Unity.LifeCycle.GameEnded();
    }
    public void ShowEndCard()
    {
        endCard.SetActive(true);
    }
    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}

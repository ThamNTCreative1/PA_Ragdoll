using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("1 Click?")] public bool oneClick;
    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Header Text 1")] public string HeaderText1;
    [LunaPlaygroundField("Color Header Text 1")] public Color ColorHeaderText1;
    [LunaPlaygroundField("Header Text 2")] public string HeaderText2;
    [LunaPlaygroundField("Color Header Text 2")] public Color ColorHeaderText2;
    [LunaPlaygroundField("Game Over Text")] public string GameOverText;
    [LunaPlaygroundField("Color Game Over Text")] public Color ColorGameOverText;

    [SerializeField] private Text header1;
    [SerializeField] private Text header2;
    [SerializeField] private Text lossText;


    [SerializeField] private RawImage BGImage;
    [SerializeField] private List<Button> CTA;
    [SerializeField] private List<Button> oneClickCTA;

    private void Awake()
    {
        InitText();
        BGImage.texture = BGTexture;
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        if (oneClick) oneClickCTA.ForEach(b => b.onClick.AddListener(ClickCTA));
    }
    private void InitText()
    {
        header1.text = HeaderText1;
        header1.color = ColorHeaderText1;

        header2.text = HeaderText2;
        header2.color = ColorHeaderText2;

        lossText.text = GameOverText;
        lossText.color = ColorGameOverText;
    }
    private void Start()
    {
        StartCoroutine(EndGame());
    }
    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (UseTime) ClickCTA();
    }
}

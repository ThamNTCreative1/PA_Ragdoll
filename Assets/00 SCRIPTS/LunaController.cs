using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Start Scene Color")] public Color StartSceneColor;
    [LunaPlaygroundField("Win Scene Color")] public Color WinSceneColor;
    [LunaPlaygroundField("Fail Scene Color")] public Color FailSceneColor;

    [SerializeField] private Image startScene;
    [SerializeField] private Image winScene;
    [SerializeField] private Image failScene;

    [SerializeField] private RawImage BGImage;
    [SerializeField] private List<Button> CTA;
    [SerializeField] private GameObject endCard;
    void Start()
    {
        BGImage.texture = BGTexture;

        startScene.color = StartSceneColor;
        winScene.color = WinSceneColor;
        failScene.color = FailSceneColor;
        
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        StartCoroutine(EndGame());
    }
    private void ShowEndCard()
    {
        endCard.SetActive(true);
    }
    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (UseTime) ShowEndCard();
    }
}

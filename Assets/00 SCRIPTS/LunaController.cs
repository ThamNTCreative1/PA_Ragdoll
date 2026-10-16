using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [Header("Custom PLB")]
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Title Stage 3")] public string TitleText;
    [LunaPlaygroundField("Color Title Stage 3")] public Color ColorTitleText;


    [SerializeField] private RawImage BGImage;
    [SerializeField] private Text title;
    [SerializeField] private List<Button> CTA;
    [SerializeField] private GameObject endCard;

    [Header("Custom Character")]
    [LunaPlaygroundField("Stage 1 Left Character 0 -> 7")] public int Stage1Left;
    [LunaPlaygroundField("Stage 1 Right Character 0 -> 7")] public int Stage1Right;
    [LunaPlaygroundField("Stage 2 Left Character 0 -> 7")] public int Stage2Left;
    [LunaPlaygroundField("Stage 2 Right Character 0 -> 7")] public int Stage2Right;
    [LunaPlaygroundField("Stage 3 Left Character 0 -> 7")] public int Stage3Left;
    [LunaPlaygroundField("Stage 3 Mid Character 0 -> 7")] public int Stage3Mid;
    [LunaPlaygroundField("Stage 3 Right Character 0 -> 7")] public int Stage3Right;

    [Header("Custom Map")]
    [LunaPlaygroundField("Use Map Stage 2")] public bool UseMap2;
    [LunaPlaygroundField("Use Map Stage 3")] public bool UseMap3;

    [SerializeField] private GameObject map2;
    [SerializeField] private GameObject map3;

    private void Start()
    {
        BGImage.texture = BGTexture;
        title.text = TitleText;
        title.color = ColorTitleText;
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        SetupCharacter();
        SetupMap();
        StartCoroutine(EndGame());
    }

    private void SetupCharacter()
    {
        // Stage 1
        GameController.Ins.SetCharacter(0, 0, RoundNumber(Stage1Left));
        GameController.Ins.SetCharacter(0, 1, RoundNumber(Stage1Right));
        GameController.Ins.SetPlayer(0, Stage1Right);
        GameController.Ins.SetMonster(0, Stage1Left);

        // Stage2
        GameController.Ins.SetCharacter(1, 0, RoundNumber(Stage2Left));
        GameController.Ins.SetCharacter(1, 1, RoundNumber(Stage2Right));
        GameController.Ins.SetPlayer(1, Stage2Right);
        GameController.Ins.SetMonster(1, Stage2Left);

        // Stage 3
        GameController.Ins.SetCharacter(2, 0, RoundNumber(Stage3Left));
        GameController.Ins.SetCharacter(2, 1, RoundNumber(Stage3Mid));
        GameController.Ins.SetCharacter(2, 2, RoundNumber(Stage3Right));
    }
    private void SetupMap()
    {
        if (UseMap2) map2.SetActive(true);
        if (UseMap3) map3.SetActive(true);
    }
    private int RoundNumber(int number)
    {
        return Mathf.Clamp(number, 0, 7);
    }

    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (UseTime) endCard.SetActive(true);
    }
}

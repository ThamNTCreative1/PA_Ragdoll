using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundField("Time Play")] public float TimePlay;

    [LunaPlaygroundField("Limit Stage Play?")] public bool LimitStagePlay;
    [LunaPlaygroundField("Stage Play")] public int StagePlay;

    [LunaPlaygroundField("Use Custom BG?")] public bool UseCustomBG;
    [LunaPlaygroundAsset("BG (1300x1080)")] public Texture2D BGTexture;
    [LunaPlaygroundAsset("BMG")] public AudioClip BGM;
    [LunaPlaygroundField("Phase 1 Text Color")] public Color Phase1TextColor;
    [LunaPlaygroundField("Phase 2 Text Color")] public Color Phase2TextColor;
    [LunaPlaygroundField("Phase 3 Text Color")] public Color Phase3TextColor;
    [SerializeField] private Text phase1Text;
    [SerializeField] private Text phase2Text;
    [SerializeField] private Text phase3Text1;
    [SerializeField] private Text phase3Text2;

    [SerializeField] private RawImage BGImage;
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private List<Button> CTA;
    [SerializeField]private GameObject endCard;

    [SerializeField] private int currentStage;

    private void Awake()
    {
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));

        if (UseCustomBG)
        {
            BGImage.texture = BGTexture;
            BGImage.gameObject.SetActive(true);
        }

        if (BGM) musicSource.clip = BGM;
        musicSource.Play();

        phase1Text.color = Phase1TextColor;
        phase2Text.color = Phase2TextColor;
        phase3Text1.color = Phase3TextColor;
        phase3Text2.color = Phase3TextColor;
    }
    private void CountStage()
    {
        currentStage++;
        if (currentStage >= StagePlay) ClickCTA();
    }
    private void Start()
    {
        if (LimitStagePlay) GameController.Ins.OnNextPhase += CountStage;

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
        if (LimitTimePlay) endCard.SetActive(true);
    }
}


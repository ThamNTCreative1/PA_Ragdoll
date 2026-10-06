using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Limit Count Play?")] public bool UseCountPlay;
    [LunaPlaygroundField("Count Play")] public int MaxCountPlay;
    [LunaPlaygroundField("Score Text Color")] public Color ScoreTextColor;
    [LunaPlaygroundField("Min Time Spawn")] public float MinTimeSpawn;
    [LunaPlaygroundField("Max Time Spawn")] public float MaxTimeSpawn;

    [SerializeField] private RawImage BGImage;
    [SerializeField] private Text scoreText;
    [SerializeField] private List<Button> CTA;
    [SerializeField] private int count;
    [SerializeField] private SpawnMonster spawn;
    private void Start()
    {
        BGImage.texture = BGTexture;
        scoreText.color = ScoreTextColor;
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        StartCoroutine(EndGame());
        if (UseCountPlay) GameController.Ins.OnClick += UpdateCount;
        spawn.SetMinMax(MinTimeSpawn, MaxTimeSpawn);
    }
    private void UpdateCount()
    {
        if (!UseCountPlay) return;
        count++;
        if (count > MaxCountPlay)
        {
            ClickCTA();
        }
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

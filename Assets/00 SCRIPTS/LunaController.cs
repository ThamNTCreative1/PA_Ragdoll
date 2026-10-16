using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Limit Click")] public bool LimitClick;
    [LunaPlaygroundField("Max Click")] public int MaxClick;
    [SerializeField] private RawImage BGImage;
    [SerializeField] private List<Button> CTA;
    [SerializeField] private GameObject endCard;
    [SerializeField] private TargetController target;
    [SerializeField] private int currentClick;
    private void Start()
    {
        BGImage.texture = BGTexture;
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        if (LimitClick) target.OnClick += CountClick;
        StartCoroutine(EndGame());
    }
    public void CountClick()
    {
        currentClick++;
        if (currentClick >= MaxClick) endCard.SetActive(true);
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

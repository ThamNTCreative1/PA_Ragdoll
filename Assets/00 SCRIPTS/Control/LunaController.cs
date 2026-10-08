using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Limit Count Play?")] public bool LimitCountPlay;
    [LunaPlaygroundField("Count Play")] public int MaxCountPlay;
    [LunaPlaygroundField("Name Plant Color")] public Color NamePlantColor;
    [LunaPlaygroundField("Name Zombie Color")] public Color NameZombieColor;

    [SerializeField] private RawImage BGImage;
    [SerializeField] private List<Button> CTA;
    [SerializeField] private int count;

    [SerializeField] private Text plant1Name;
    [SerializeField] private Text plant2Name;
    [SerializeField] private Text zombie1Name;
    [SerializeField] private Text zombie2Name;

    private void Start()
    {
        BGImage.texture = BGTexture;

        plant1Name.color = NamePlantColor;
        plant2Name.color = NamePlantColor;

        zombie1Name.color = NameZombieColor;
        zombie2Name.color = NameZombieColor;

        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        StartCoroutine(EndGame());
        if (LimitCountPlay) GameController.Ins.OnSpawn += UpdateCount;
    }
    private void UpdateCount()
    {
        if (!LimitCountPlay) return;
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
        if (LimitTimePlay) ClickCTA();
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("1 Click?")] public bool OneClick;
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Header Text")] public string Header;
    [LunaPlaygroundField("Color Header Text")] public Color HeaderColor;
    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Count Play")] public int MaxCountPlay;
    [LunaPlaygroundField("Player")] public SprunkySkinId Player = SprunkySkinId.Reddy;
    [LunaPlaygroundField("Zombie")] public ZombieSkinId Zombie = ZombieSkinId.YellowOrange;
    [SerializeField] private RawImage BGImage;
    [SerializeField] private Text headerText;
    [SerializeField] private List<Button> CTA;
    [SerializeField] private GameObject endCard;

    private void Awake()
    {
        // Before any character wakes up (the ones in the scene are inactive until a side is picked).
        SprunkySkin.Selected = Player;
        MonsterSkin.Selected = Zombie;
    }

    private void Start()
    {
        headerText.text = Header;
        headerText.color = HeaderColor;
        BGImage.texture = BGTexture;
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        StartCoroutine(EndGame());
        GameController.Ins.maxSpawn = MaxCountPlay;
        if (OneClick) ShowEndCard();
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

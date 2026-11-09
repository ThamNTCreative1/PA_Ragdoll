using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Type Power Stage 1")] public int PowerStage1 = 4; // Type Power stage 1: số loại power được dùng (1-4)
    [LunaPlaygroundField("Type Power Stage 2")] public int PowerStage2 = 4; // Type Power stage 2: số loại power được dùng (1-4)
    [LunaPlaygroundField("Power Uses Stage 1")] public int PowerUsesStage1 = 4; // số lần dùng power ở stage 1
    [LunaPlaygroundField("Power Uses Stage 2")] public int PowerUsesStage2 = 4; // số lần dùng power ở stage 2
    [LunaPlaygroundField("Power Damage")] public int PowerDamage = 2;        // damage (máu) mỗi lần dùng power, mọi power dùng chung
    [LunaPlaygroundField("Monster HP Stage 1")] public int MonsterHPStage1 = 5;
    [LunaPlaygroundField("Monster HP Stage 2")] public int MonsterHPStage2 = 7;
    [SerializeField] private RawImage BGImage;
    [SerializeField] private List<Button> CTA;
    [SerializeField] private GameObject endCard;
    void Start()
    {
        BGImage.texture = BGTexture;
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        StartCoroutine(EndGame());
        GameController.Ins.OnComplete += ShowEndCard;
        GameController.Ins.SetPowerCount(0, PowerStage1);
        GameController.Ins.SetPowerCount(1, PowerStage2);
        GameController.Ins.SetPowerUses(0, PowerUsesStage1);
        GameController.Ins.SetPowerUses(1, PowerUsesStage2);
        GameController.Ins.SetMonsterHP(0, MonsterHPStage1);
        GameController.Ins.SetMonsterHP(1, MonsterHPStage2);
        if (PowerController.Ins) PowerController.Ins.SetDamage(PowerDamage);
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

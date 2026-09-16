using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundAsset("BG Image (1920 x 1080)")] public Texture2D BGTexture;
    [LunaPlaygroundAsset("BGM")] public AudioClip BGM;

    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    
    [SerializeField] private RawImage BGImage;
    [SerializeField] private List<Button> CTA;
    void Start()
    {
        BGImage.texture = BGTexture;
        AudioController.Ins.PlayMusic(BGM);
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        StartCoroutine(EndGame());
    }

    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        GameController.Ins.End();
        Luna.Unity.LifeCycle.GameEnded();
        if (UseTime) ClickCTA();
    }
}

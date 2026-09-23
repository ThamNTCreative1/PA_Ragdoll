using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Type Character 0 -> 3")] public int TypeCharacter;
    [SerializeField] private List<GameObject> characters;
    [SerializeField] private RawImage BGImage;
    [SerializeField] private List<Button> CTA;
    private void Start()
    {
        BGImage.texture = BGTexture;
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        SetCharacter();
        StartCoroutine(EndGame());
    }
    private void SetCharacter()
    {
        if (characters.Count <= 0) return;
        if (TypeCharacter < 0)
        {
            characters[0].SetActive(true);
        }
        else if (TypeCharacter >= characters.Count)
        {
            characters[characters.Count - 1].SetActive(true);
        }
        else
        {
            characters[TypeCharacter].SetActive(true);
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

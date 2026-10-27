using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// Owns Luna configuration, play-time lifecycle and CTA calls.
public class LunaController : MonoBehaviour
{
    [LunaPlaygroundAsset("BG Image")]
    public Texture2D BGTexture;
    [SerializeField] private RawImage BG;
    [LunaPlaygroundAsset("BGM")]
    [SerializeField] private AudioClip bgm;
    [LunaPlaygroundField("Max Characters", 0)]
    [SerializeField, Range(1, 10)] private int maxCharacters = 3;
    [LunaPlaygroundField("LimitTimePlay", 1)]
    [SerializeField] private bool limitTimePlay;
    [LunaPlaygroundField("TimePlay", 2)]
    [SerializeField, Min(.1f)] private float timePlay = 30f;
    [SerializeField] private GameObject endCard;
    public bool EndCardVisible { get; private set; }
    public bool HasOpenedCTA { get; private set; }
    [SerializeField] private List<Button> CTA;
    [SerializeField] private GameObject fightButton;
    public GameObject FightButton => fightButton;
    private Vector3 fightBaseScale;
    private float fightPulseTime;

    private void Awake()
    {
        BG.texture = BGTexture;
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        endCard.SetActive(false);
        fightBaseScale = fightButton.transform.localScale;
        fightButton.SetActive(false);
    }
    private void Start()
    {
        StartCoroutine(EndGame());
    }

    public void SetFightReady(bool ready)
    {
        fightButton.gameObject.SetActive(ready);
    }

    private void Update()
    {
        if (!EndCardVisible)
        {
            if (fightButton.gameObject.activeInHierarchy)
            {
                fightPulseTime += Time.unscaledDeltaTime;
                float pulse = (1f - Mathf.Cos(fightPulseTime * Mathf.PI * 2f)) * .5f;
                fightButton.transform.localScale = fightBaseScale * Mathf.Lerp(1f, 1.05f, pulse);
            }
            else
            {
                fightPulseTime = 0f;
                fightButton.transform.localScale = fightBaseScale;
            }
        }
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (LimitTimePlay) ShowEndCard();
    }

    public void ShowEndCard()
    {
        if (EndCardVisible) return;
        EndCardVisible = true;
        endCard.transform.SetAsLastSibling();
        endCard.SetActive(true);
    }

    public void ClickCTA()
    {
        HasOpenedCTA = true;
        Luna.Unity.Playable.InstallFullGame();
    }
    public int MaxCharacters => Mathf.Clamp(maxCharacters, 1, 10);
    public bool LimitTimePlay => limitTimePlay;
    public float TimePlay => Mathf.Max(.1f, timePlay);
    public AudioClip BGM => bgm;
}

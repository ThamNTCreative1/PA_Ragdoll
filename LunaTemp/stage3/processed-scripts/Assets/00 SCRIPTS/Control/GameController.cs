using System;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [Header("Start Scene")]
    [SerializeField] private GameObject startScene;
    [SerializeField] private Button buttonFight;
    [SerializeField] private Button buttonDefense;
    [SerializeField] private AudioClip clickSound;

    [Header("Fight")]
    [SerializeField] private GameObject fightOptions;

    [Header("Tut")]
    [SerializeField] protected GameObject tut;

    [Header("Defense")]
    [SerializeField] private GameObject defenseOptions;
    [SerializeField] private GameObject defense;

    [Header("End Scene")]
    [SerializeField] private GameObject endScene;
    [SerializeField] private GameObject completeScene;
    [SerializeField] private GameObject gameOverScene;
    private bool isEnd;

    [SerializeField] private PlayerController player;
    public PlayerController P => player;
    [SerializeField] private int numMonster;
    [SerializeField] private Transform world;

    public static GameController Ins;
    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }
    private void Awake()
    {
        CreateIns();
        buttonDefense.onClick.AddListener(() =>
        {
            StartGame();
            AudioController.Ins.PlaySFX(clickSound);
            startScene.SetActive(false);
            defenseOptions.SetActive(true);
            defense.SetActive(true);
            player.enabled = false;
        });
        buttonFight.onClick.AddListener(() =>
        {
            StartGame();
            AudioController.Ins.PlaySFX(clickSound);
            startScene.SetActive(false);
            fightOptions.SetActive(true);
        });
    }
    private void StartGame()
    {
        OnStart?.Invoke();
    }
    public void GameOver()
    {
        if (isEnd) return;
        isEnd = true;
        endScene.SetActive(true);
        Destroy(completeScene);
        if (gameOverScene) gameOverScene.SetActive(true);
        OnGameOver?.Invoke();
    }
    public void Complete()
    {
        if (isEnd) return;
        isEnd = true;
        endScene.SetActive(true);
        if (completeScene) completeScene.SetActive(true);
        OnGameComplete?.Invoke();
    }
    public void Click()
    {
        if (tut) Destroy(tut);
        OnClick?.Invoke();
    }
    public Action OnStart;
    public Action OnClick;
    public Action OnGameOver;
    public Action OnGameComplete;

    public void RemoveMonster()
    {
        numMonster = Mathf.Max(0, numMonster - 1);
        if (numMonster > 0) return;
        Complete();
    }

}



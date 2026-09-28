using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [LunaPlaygroundField("Delay Show Game Over")] public float Delay;
    [Header("Start Scene")]
    [SerializeField] private GameObject startScene;
    [SerializeField] private GameObject header;
    [SerializeField] private AudioClip clickSound;

    [Header("Option")]
    [SerializeField] private GameObject options;
    [SerializeField] private Button smokeButton;
    [SerializeField] private GameObject smoke;
    [SerializeField] private Button landmindButton;
    [SerializeField] private GameObject landmind;
    [SerializeField] private Button gunButton;

    [Header("Tut")]
    [SerializeField] protected GameObject tut;

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
        smokeButton.onClick.AddListener(ClickOption);
        smokeButton.onClick.AddListener(SpawnSmoke);
        landmindButton.onClick.AddListener(ClickOption);
        landmindButton.onClick.AddListener(SpawnLandmine);
        gunButton.onClick.AddListener(ClickOption);
    }
    public void PauseGame()
    {
        OnPause?.Invoke();
        header.SetActive(false);
        options.SetActive(true);
    }
    public void GameOver()
    {
        if (isEnd) return;
        isEnd = true;
        StartCoroutine(WaitForGameOver());
    }
    public void Complete()
    {
        if (isEnd) return;
        isEnd = true;
        endScene.SetActive(true);
        if (completeScene) completeScene.SetActive(true);
        OnGameComplete?.Invoke();
    }
    private IEnumerator WaitForGameOver()
    {
        yield return new WaitForSeconds(Delay);
        endScene.SetActive(true);
        Destroy(completeScene);
        if (gameOverScene) gameOverScene.SetActive(true);
        OnGameOver?.Invoke();
    }

    public Action OnPause;
    public Action OnResume;
    public Action OnGameOver;
    public Action OnGameComplete;

    public void SpawnLandmine()
    {
        landmind.SetActive(true);
    }
    public void SpawnSmoke()
    {
        smoke.SetActive(true);
    }
    public void ClickOption()
    {
        startScene.SetActive(false);
        OnResume?.Invoke();
    }
    public void RemoveMonster()
    {
        numMonster = Mathf.Max(0, numMonster - 1);
        if (numMonster > 0) return;
        Complete();
    }
}



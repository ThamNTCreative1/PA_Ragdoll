using System;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [Header("Start Scene")]
    [SerializeField] private GameObject startScene;
    [SerializeField] private AudioClip clickSound;
    [SerializeField] private Button startButton;


    [Header("Tut")]
    [SerializeField] protected GameObject tut;


    [Header("End Scene")]
    [SerializeField] private GameObject endScene;
    private bool isEnd;

    [SerializeField] private PlayerController player;
    public PlayerController P => player;

    [Header("Score")]
    [SerializeField] private Text scoreText;
    [SerializeField] private int score;

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
        startButton.onClick.AddListener(StartGame);
    }
    private void StartGame()
    {
        startScene.SetActive(false);
        tut.SetActive(true);
        AudioController.Ins.PlaySFX(clickSound);
        OnStart?.Invoke();
    }
    public void GameOver()
    {
        if (isEnd) return;
        isEnd = true;
        startScene.SetActive(false);
        if(tut)tut.SetActive(false);
        scoreText.gameObject.SetActive(false);
        endScene.SetActive(true);
        OnGameOver?.Invoke();
    }

    public void Click()
    {
        if (tut)
        {
            Destroy(tut);
            scoreText.gameObject.SetActive(true);
        }
        OnClick?.Invoke();
    }
    public Action OnStart;
    public Action OnClick;
    public Action OnGameOver;

    public void KillMonster()
    {
        score++;
        scoreText.text = score.ToString();
    }

}



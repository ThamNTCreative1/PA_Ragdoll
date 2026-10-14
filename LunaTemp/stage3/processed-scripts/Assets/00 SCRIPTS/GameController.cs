using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [SerializeField] private List<Option> options;
    [SerializeField] private List<GameObject> levels;
    [SerializeField] private List<GameObject> level2;
    [SerializeField] private List<GameObject> level3;

    [SerializeField] private List<GameObject> buttons;
    [SerializeField] private List<GameObject> tuts;

    [SerializeField] private Button startButton;
    [SerializeField] private AudioClip clickSound;
    [SerializeField] private int numMonster;
    [SerializeField] private int currentLevel;
    [SerializeField] private GameObject winScene;
    [SerializeField] private GameObject failScene;

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
        options.ForEach(op => op.Button.onClick.AddListener(() =>
        {
            AudioController.Ins.PlaySFX(clickSound);
            op.Item.SetActive(true);
            OnPlay?.Invoke();
            OnClear?.Invoke();
            OnNotClear?.Invoke();
            buttons[currentLevel].SetActive(false);
            tuts[currentLevel].SetActive(false);
        }));
        startButton.onClick.AddListener(() =>
        {
            AudioController.Ins.PlaySFX(clickSound);
            startButton.gameObject.SetActive(false);
            buttons[currentLevel].SetActive(true);
            tuts[currentLevel].SetActive(true);
        });
        OnPause += () =>
        {
            if (currentLevel < levels.Count && currentLevel > 0)
            {
                buttons[currentLevel].SetActive(true);
            }
        };
    }

    private void NextLevel()
    {
        if (currentLevel >= levels.Count - 1) return;

        if (winScene.activeSelf) winScene.SetActive(false);
        if (failScene.activeSelf) failScene.SetActive(false);

        levels[currentLevel].SetActive(false);
        currentLevel++;

        if (currentLevel == 1) level2.ForEach(g => g.SetActive(true));
        if (currentLevel == 2) level3.ForEach(g => g.SetActive(true));

        levels[currentLevel].SetActive(true);
        tuts[currentLevel].SetActive(true);
    }

    public void KillMonster()
    {
        numMonster = Mathf.Max(0, numMonster - 1);
        if (numMonster <= 0)
        {
            winScene.SetActive(true);
            OnClear?.Invoke();
            Invoke(nameof(NextLevel), 2);
        }
    }
    public void AddMonster()
    {
        numMonster++;
        OnNotClear?.Invoke();
    }
    public void AddPlayer()
    {
        if (numMonster > 0) OnNotClear?.Invoke();
    }
    public void LevelFail()
    {
        failScene.SetActive(true);
        Invoke(nameof(NextLevel), 2);
    }
    public Action OnNotClear;
    public Action OnClear;
    public Action OnPause;
    public Action OnPlay;
}
[System.Serializable]
public struct Option
{
    public Button Button;
    public GameObject Item;
}

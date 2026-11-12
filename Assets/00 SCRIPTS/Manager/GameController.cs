using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [Header("Scene")]
    [SerializeField] private RectTransform startScene;
    [SerializeField] private RectTransform endScene;
    [Header("Option")]
    [SerializeField] private Option human;
    [SerializeField] private Option monster;

    [SerializeField] private AudioClip clickSound;
    [SerializeField] private OptionController optionController;

    public static GameController Ins;
    public int maxSpawn;
    private bool isEnd;
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

        human.Button.onClick.AddListener(() => ChooseOption(human.Controller));
        monster.Button.onClick.AddListener(() => ChooseOption(monster.Controller));
    }
    private void ChooseOption(OptionController option)
    {
        AudioController.Ins.PlaySFX(clickSound);
        optionController = option;
        optionController.InitMaxSpawn(maxSpawn);
        optionController.OnSpawn += Spawn;
        optionController.OnEmpty += Empty;
        optionController.OnEnd += () => StartCoroutine(WaitForEnd());
        optionController.gameObject.SetActive(true);
        startScene.gameObject.SetActive(false);
    }
    private void End()
    {
        if (isEnd) return;
        isEnd = true;
        endScene.gameObject.SetActive(true);
    }
    private void Spawn()
    {
        OnSpawn?.Invoke();
    }
    private void Empty()
    {
        OnEmpty?.Invoke();
    }
    public void RemoveCharacter(bool isMonster)
    {
        if (isMonster)
        {
            if (optionController is MonsterOptionController) optionController.RemoveCharacter();
        }
        else if (optionController is HumanOptionController) optionController.RemoveCharacter();
    }

    private IEnumerator WaitForEnd()
    {
        yield return new WaitForSeconds(1);
        End();
    }
    public Action OnSpawn;
    public Action OnEmpty;
}
[System.Serializable]
public struct Option
{
    public Button Button;
    public OptionController Controller;
}

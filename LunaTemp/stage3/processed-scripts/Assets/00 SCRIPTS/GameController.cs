using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private List<MonsterController> monsters;
    [SerializeField] private List<GameObject> levels;
    [SerializeField] private TargetController target;
    [SerializeField] private int index;
    [SerializeField] private bool end;
    [SerializeField] GameObject endUI;
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
    }

    public void KillMonster()
    {
        if (end) return;
        monsters[index].Dead();
        StartCoroutine(ChangeLevel());
    }
    private IEnumerator ChangeLevel()
    {
        yield return new WaitUntil(() => target.IsEmpty());
        yield return new WaitForSeconds(1);
        index++;
        target.NextTarget();
        levels[index - 1].SetActive(false);
        levels[index].SetActive(true);
        OnNextLevel?.Invoke();
        if (index >= levels.Count - 1)
        {
            end = true;
            endUI.SetActive(true);
        }
    }
    public Action OnNextLevel;
}

using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [SerializeField] private Button area;
    [SerializeField] private GameObject areaTut;
    [SerializeField] private Button startTut;
    [SerializeField] private GameObject optionTut;

    [SerializeField] private int numMonster;
    [SerializeField] private List<Spawn> spawns;
    [SerializeField] private Spawn currentSpawn;
    [SerializeField] private Transform world;
    [SerializeField] private AudioClip clickSound;
    [SerializeField] private AudioClip dropSound;

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
        startTut.onClick.AddListener(() =>
        {
            startTut.gameObject.SetActive(false);
            areaTut.SetActive(true);
        });
        area.onClick.AddListener(ClickAdd);
        InitMonster();
    }
    private void InitMonster()
    {
        for (int i = 0; i < spawns.Count; i++)
        {
            int index = i;
            spawns[index].Button.onClick.AddListener(() => ChangeSpawn(spawns[index]));
        }
        currentSpawn = spawns[0];
        currentSpawn.Selected.enabled = true;
    }
    private void ChangeSpawn(Spawn s)
    {
        if (optionTut && optionTut.activeSelf)
        {
            if (areaTut) areaTut.SetActive(true);
            Destroy(optionTut);
        }
        currentSpawn.Selected.enabled = false;
        AudioController.Ins.PlaySFX(clickSound);
        currentSpawn = s;
        currentSpawn.Selected.enabled = true;
    }
    private void ClickAdd()
    {
        if (areaTut)
        {
            if (optionTut)
            {
                areaTut.SetActive(false);
                optionTut.SetActive(true);
            }
            else
            {
                Destroy(areaTut);
            }
        }
        Spawn(Camera.main.ScreenToWorldPoint(Input.mousePosition));
    }
    private void Spawn(Vector2 position)
    {
        if (currentSpawn.IsEmpty()) return;

        GameObject m = Instantiate(currentSpawn.Prefab, world);
        m.transform.position = position;
        m.SetActive(true);

        AudioController.Ins.PlaySFX(dropSound);

        OnSpawn?.Invoke();
    }
    public void KillMonster()
    {
        numMonster = Mathf.Max(0, numMonster - 1);
        if (numMonster <= 0) OnClear?.Invoke();
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
    public Action OnSpawn;
    public Action OnNotClear;
    public Action OnClear;
}
[System.Serializable]
public struct Spawn
{
    public Button Button;
    public Image Selected;
    public GameObject Prefab;

    public readonly bool IsEmpty()
    {
        return !Prefab;
    }
}

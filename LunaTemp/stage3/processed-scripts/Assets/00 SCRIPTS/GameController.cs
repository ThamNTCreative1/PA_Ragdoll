using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [SerializeField] private Button area;
    [SerializeField] private PlayerController player;
    public PlayerController P => player;
    [SerializeField] private GameObject areaTut;
    [SerializeField] private Button tut;
    [SerializeField] private int numMonster;
    [SerializeField] private List<Monster> monsters;
    [SerializeField] private Monster currentMonster;
    [SerializeField] private Transform world;
    [SerializeField] private AudioClip clickSound;
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
        tut.onClick.AddListener(() =>
        {
            tut.gameObject.SetActive(false);
            areaTut.SetActive(true);
        });
        area.onClick.AddListener(ClickAdd);
        InitMonster();
    }
    private void InitMonster()
    {
        for (int i = 0; i < monsters.Count; i++)
        {
            int index = i;
            monsters[index].Button.onClick.AddListener(() => ChangeMonster(monsters[index]));
        }
        currentMonster = monsters[0];
        currentMonster.Selected.enabled = true;
    }
    private void ChangeMonster([Bridge.Ref] Monster m)
    {
        currentMonster.Selected.enabled = false;
        AudioController.Ins.PlaySFX(clickSound);
        currentMonster = m;
        currentMonster.Selected.enabled = true;
    }
    private void ClickAdd()
    {
        if (areaTut) Destroy(areaTut);
        AddMonster(Camera.main.ScreenToWorldPoint(Input.mousePosition));
    }
    private void AddMonster([Bridge.Ref] Vector2 position)
    {
        if (currentMonster.IsEmpty()) return;
        OnAddMonster?.Invoke();
        GameObject m = Instantiate(currentMonster.Prefab, world);
        m.transform.position = position;
        m.SetActive(true);
        numMonster++;
        player.StartShoot();
    }
    public Action OnAddMonster;
    public void RemoveMonster()
    {
        player.currentMonster = null;
        numMonster = Mathf.Max(0, numMonster - 1);
        if (numMonster <= 0) player.StopShoot();
    }

}
[System.Serializable]
public struct Monster
{
    public Button Button;
    public Image Selected;
    public GameObject Prefab;

    public bool IsEmpty()
    {
        return !Prefab;
    }
}

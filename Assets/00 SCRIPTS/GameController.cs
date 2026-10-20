using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [Header("Custom")]
    [SerializeField] private List<GameObject> stage1LeftCharacter;
    [SerializeField] private List<GameObject> stage1RightCharacter;

    [SerializeField] private List<GameObject> stage2LeftCharacter;
    [SerializeField] private List<GameObject> stage2RightCharacter;

    [SerializeField] private List<GameObject> stage3LeftCharacter;
    [SerializeField] private List<GameObject> stage3MidCharacter;
    [SerializeField] private List<GameObject> stage3RightCharacter;

    [SerializeField] private List<TargetJoint2D> players1;
    [SerializeField] private List<TargetJoint2D> players2;

    [SerializeField] private List<MonsterController> monsters;
    [SerializeField] private List<MonsterController> monsters1;
    [SerializeField] private List<MonsterController> monsters2;

    [Header("Control")]
    [SerializeField] private Transform mainCamera;
    [SerializeField] private List<Vector3> cameraPos;
    [SerializeField] private float speedMove;

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
    public void SetPlayer(int stage, int index)
    {
        if (stage == 0) target.AddTarget(players1[index]);
        if (stage == 1) target.AddTarget(players2[index]);
    }
    public void SetMonster(int stage, int index)
    {
        if (stage == 0) monsters.Add(monsters1[index]);
        if (stage == 1) monsters.Add(monsters2[index]);
    }
    public void SetCharacter(int stage, int pos, int index)
    {
        if (stage == 0)
        {
            if (pos == 0) stage1LeftCharacter[index].SetActive(true);
            if (pos == 1) stage1RightCharacter[index].SetActive(true);
        }
        if (stage == 1)
        {
            if (pos == 0) stage2LeftCharacter[index].SetActive(true);
            if (pos == 1) stage2RightCharacter[index].SetActive(true);
        }
        if (stage == 2)
        {
            if (pos == 0) stage3LeftCharacter[index].SetActive(true);
            if (pos == 1) stage3MidCharacter[index].SetActive(true);
            if (pos == 2) stage3RightCharacter[index].SetActive(true);
        }
    }
    public void KillMonster()
    {
        if (end) return;
        monsters[index].Dead();
        index++;
        StartCoroutine(ChangeLevel());
    }
    private IEnumerator ChangeLevel()
    {
        yield return new WaitUntil(() => target.IsEmpty());
        bool isMove = true;
        while (isMove && !end)
        {
            mainCamera.transform.position = Vector3.MoveTowards(mainCamera.position, cameraPos[index], speedMove * Time.deltaTime);
            if (mainCamera.transform.position == cameraPos[index]) isMove = false;
            yield return null;
        }
        target.NextTarget();
        if (index >= monsters.Count)
        {
            end = true;
            endUI.SetActive(true);
        }
    }
}

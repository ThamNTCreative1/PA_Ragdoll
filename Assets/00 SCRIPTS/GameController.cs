using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private List<MonsterController> monsters;
    [SerializeField] private List<Vector3> cameraPos;
    [SerializeField] private float speedMove;
    [SerializeField] private TargetController target;
    [SerializeField] private int index;
    [SerializeField] private bool end;
    [SerializeField] private Transform mainCamera;
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

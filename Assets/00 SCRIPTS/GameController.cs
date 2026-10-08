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
    [Tooltip("Root cua tung level theo thu tu (LV1, LV2, LV3). Level cu se bi tat khi camera da sang level moi")]
    [SerializeField] private List<GameObject> levels = new List<GameObject>();
    public static GameController Ins;

    // Dang chuyen level -> khong nhan them KillMonster (tranh nhay coc level)
    private bool changingLevel;

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

    /// <summary>True neu object thuoc monster cua level hien tai (con song).</summary>
    public bool IsCurrentMonster(Transform t)
    {
        if (end || changingLevel || t == null) return false;
        if (index < 0 || index >= monsters.Count || monsters[index] == null) return false;
        return t.IsChildOf(monsters[index].transform);
    }

    public void KillMonster()
    {
        if (end || changingLevel) return;
        if (index < 0 || index >= monsters.Count) return;
        changingLevel = true;
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
        // Tat level vua qua: xac nhan vat, gach... bi hat bay se khong lan sang level moi
        int prev = index - 1;
        if (levels != null && prev >= 0 && prev < levels.Count && levels[prev] != null) levels[prev].SetActive(false);

        target.NextTarget();
        if (index >= monsters.Count)
        {
            end = true;
            endUI.SetActive(true);
        }
        changingLevel = false;
    }
}

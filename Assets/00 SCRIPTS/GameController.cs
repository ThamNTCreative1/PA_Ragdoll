using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [System.Serializable]
    public class Stage
    {
        public Vector3 cameraPos;
        public List<MonsterController> monsters;
        public GameObject ui;              // nút power của stage, chỉ bật khi đang ở stage này
        public GameObject armorBrokenTut;  // hiện khi quái vỡ giáp (vd. tut đấm)
        public int powerCount = 4;         // Type Power: số loại power được dùng ở stage này, <= 0 = tất cả
        public int powerUses = 4;          // số lần dùng power ở stage này, 0 = không giới hạn
        public bool tutorial;              // stage có tutorial (chọn power, dùng power, tut đấm); không có thì hiện keepText
    }

    [SerializeField] private List<Stage> stages;
    [SerializeField] private float speedMove;
    [SerializeField] private TargetController target;
    [SerializeField] private int index;
    [SerializeField] private bool end;
    [SerializeField] private Transform mainCamera;
    [SerializeField] private int armorUses = 1;     // số lần power trúng để vỡ hết giáp quái (1 = 1 power là vỡ giáp)
    [SerializeField] private float deadDelay = 1.5f;  // quái chết hết: đợi bấy nhiêu giây (hoặc tới khi chạm màn hình) rồi chuyển stage
    [SerializeField] private GameObject keepText;   // chữ "Keep Defeating Monster!" ở stage không có tutorial
    public static GameController Ins;
    public System.Action OnComplete;
    private bool changing;
    private bool punchTutPending; // đợi người chơi tắt power rồi mới hiện tut đấm

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
    private void Start()
    {
        for (int i = 0; i < stages.Count; i++)
        {
            ApplyArmor(i);
            if (stages[i].ui) stages[i].ui.SetActive(i == index);
            if (stages[i].armorBrokenTut) stages[i].armorBrokenTut.SetActive(false);
        }
        ApplyStagePowers();
        StartStageTut();
    }

    // Stage có tutorial: hướng dẫn chọn/dùng power. Không có: hiện chữ "Keep Defeating Monster!" (tắt khi chạm).
    private void StartStageTut()
    {
        bool tut = stages[index].tutorial;
        if (PowerController.Ins) PowerController.Ins.StartTutorial(tut);
        if (keepText) keepText.SetActive(!tut);
    }

    private void Update()
    {
        if (keepText && keepText.activeSelf && Input.GetMouseButtonDown(0)) keepText.SetActive(false);
        // Đã tắt power theo hướng dẫn -> hiện tut đấm.
        if (punchTutPending && !(PowerController.Ins && PowerController.Ins.HasPower))
        {
            punchTutPending = false;
            ShowPunchTut();
        }
    }

    // Giáp của quái: armorUses lần power trúng là vỡ hết giáp (các lần sau đó trừ máu).
    private void ApplyArmor(int stage)
    {
        foreach (MonsterController m in stages[stage].monsters)
            if (m) m.SetArmorUses(armorUses);
    }

    // Số lần dùng power cố định + số power được bật của stage hiện tại.
    private void ApplyStagePowers()
    {
        if (!PowerController.Ins) return;
        PowerController.Ins.SetLimit(stages[index].powerUses);
        PowerController.Ins.SetActivePowers(stages[index].powerCount);
    }

    // Đặt máu của các quái trong 1 stage (LunaController gọi với giá trị từ Luna Playground).
    public void SetMonsterHP(int stage, int hp)
    {
        if (stage < 0 || stage >= stages.Count) return;
        foreach (MonsterController m in stages[stage].monsters) if (m) m.SetMaxHP(hp);
    }

    // Đặt số lần dùng power của 1 stage (LunaController gọi với giá trị từ Luna Playground).
    public void SetPowerUses(int stage, int uses)
    {
        if (stage < 0 || stage >= stages.Count) return;
        stages[stage].powerUses = uses;
        if (stage == index && !changing && PowerController.Ins) PowerController.Ins.SetLimit(uses);
    }

    // Đặt số power được bật của 1 stage (LunaController gọi với giá trị từ Luna Playground).
    public void SetPowerCount(int stage, int count)
    {
        if (stage < 0 || stage >= stages.Count) return;
        stages[stage].powerCount = count;
        if (stage == index && !changing && PowerController.Ins) PowerController.Ins.SetActivePowers(count);
    }

    // Quái còn sống đầu tiên của stage hiện tại (null nếu không có).
    public MonsterController CurrentMonster()
    {
        if (end || changing) return null;
        foreach (MonsterController m in stages[index].monsters)
            if (m && !m.IsDead) return m;
        return null;
    }

    // Danh sách quái của stage hiện tại (rỗng khi đang chuyển stage / đã hết game).
    public List<MonsterController> StageMonsters()
    {
        if (end || changing) return new List<MonsterController>();
        return new List<MonsterController>(stages[index].monsters);
    }

    // Quái vừa vỡ giáp: hiện tut đấm.
    public void ArmorBroken(MonsterController monster)
    {
        if (end || changing || !stages[index].monsters.Contains(monster)) return;
        if (!stages[index].monsters.TrueForAll(m => m.ArmorBroken || m.IsDead)) return;
        ShowPunchTut();
    }

    private void ShowPunchTut()
    {
        if (end || changing || !stages[index].tutorial) return;
        // Đang chọn power: hướng dẫn tắt power trước, tắt xong mới hiện tut đấm.
        if (PowerController.Ins && PowerController.Ins.HasPower)
        {
            punchTutPending = true;
            PowerController.Ins.ShowOffTut(true);
            return;
        }
        if (stages[index].armorBrokenTut) stages[index].armorBrokenTut.SetActive(true);
    }

    public void MonsterDied(MonsterController monster)
    {
        if (end || changing) return;
        if (!stages[index].monsters.TrueForAll(m => m.IsDead)) return;
        StartCoroutine(DelayChangeLevel());
    }

    // Xem quái văng xác 1 lúc rồi mới chuyển stage; người chơi chạm màn hình thì chuyển luôn.
    private IEnumerator DelayChangeLevel()
    {
        changing = true;
        punchTutPending = false;
        if (PowerController.Ins) PowerController.Ins.SetVisible(false); // không dùng power lúc đang đợi
        if (stages[index].armorBrokenTut) stages[index].armorBrokenTut.SetActive(false);
        if (keepText) keepText.SetActive(false);
        float t = 0;
        yield return null; // bỏ qua cú chạm của chính frame làm quái chết
        while (t < deadDelay && !Input.GetMouseButtonDown(0))
        {
            t += Time.deltaTime;
            yield return null;
        }
        yield return ChangeLevel();
    }

    private IEnumerator ChangeLevel()
    {
        changing = true;
        if (PowerController.Ins) PowerController.Ins.SetVisible(false); // tắt nút power + chữ khi chuyển stage
        if (stages[index].ui) stages[index].ui.SetActive(false);
        if (stages[index].armorBrokenTut) stages[index].armorBrokenTut.SetActive(false);
        if (keepText) keepText.SetActive(false);
        if (index + 1 >= stages.Count)
        {
            end = true;
            OnComplete?.Invoke();
            yield break;
        }
        yield return new WaitUntil(() => target.IsEmpty());
        index++;
        while (mainCamera.position != stages[index].cameraPos)
        {
            mainCamera.position = Vector3.MoveTowards(mainCamera.position, stages[index].cameraPos, speedMove * Time.deltaTime);
            yield return null;
        }
        target.NextTarget();
        if (stages[index].ui) stages[index].ui.SetActive(true);
        ApplyStagePowers();
        if (PowerController.Ins) PowerController.Ins.SetVisible(true); // tới stage mới thì bật lại
        StartStageTut();
        changing = false;
        // Stage không có quái = stage giả cuối game (chỉ hiện nút ra store).
        if (stages[index].monsters.Count == 0)
        {
            end = true;
            OnComplete?.Invoke();
        }
        // Quái của stage mới đã chết sẵn (vd. bị văng trúng) thì đi tiếp luôn.
        else if (stages[index].monsters.TrueForAll(m => m.IsDead)) StartCoroutine(ChangeLevel());
    }
}

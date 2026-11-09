using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

// Chọn power bằng nút, rồi chạm/kéo trên màn hình để dùng.
// Bấm lại nút đang chọn để bỏ chọn -> quay về kéo nhân vật (TargetController).
// Tutorial mỗi stage: bàn tay lần lượt chỉ qua cả 4 nút power + chữ "Choose A Power!" cho tới khi người chơi chọn power
// (chọn power nào cũng được). Chọn power chưa dùng ở stage thì hiện hướng dẫn dùng power đó (tay trên quái), dùng xong thì tắt.
public class PowerController : MonoBehaviour
{
    [SerializeField] private List<PowerOption> powers;
    [SerializeField] private AudioClip clickSound;
    [Header("Tut")]
    [SerializeField] private GameObject choiceTut;        // tay đi qua 4 nút + chữ "Choose A Power!" (hiện tới khi chọn power)
    [SerializeField] private GameObject offTut;           // tay chỉ vào nút power đang chọn + chữ hướng dẫn bấm tắt power
    [SerializeField] private CycleHand offHand;

    [SerializeField] private GameObject bar;              // thanh nút power + chữ (ẩn khi đang chuyển stage)
    [Header("Limit")]
    [SerializeField] private TMP_Text powerCountText;     // "Type Power: số loại power còn được dùng thêm ở stage"
    [SerializeField] private TMP_Text counterText;        // "Used: đã dùng/được dùng" (ẩn khi không giới hạn)
    [SerializeField] private int limit;                   // số lượt được dùng ở stage hiện tại, 0 = không giới hạn
    [SerializeField] private int used;


    private bool Exhausted => limit > 0 && used >= limit;
    private int typeLimit;    // số loại power được dùng ở stage (Type Power)
    private int TypesLeft     // số loại power chưa dùng còn được dùng thêm
    {
        get
        {
            int n = typeLimit;
            if (powerUsed != null) foreach (bool u in powerUsed) if (u) n--;
            return Mathf.Max(0, n);
        }
    }
    private bool IsUsed(int i) => powerUsed != null && i >= 0 && i < powerUsed.Length && powerUsed[i];
    // Power còn chọn được: đã dùng ở stage này, hoặc vẫn còn lượt loại power mới.
    private bool CanPick(int i) => IsUsed(i) || TypesLeft > 0;
    private bool busy; // còn power đang chạy -> chưa cho dùng power tiếp theo

    // Tutorial theo stage
    private bool tutActive;   // đang hiện hướng dẫn chọn power (tới khi người chơi chọn)
    private bool useTut;      // stage có hướng dẫn dùng power (chỉ stage tutorial)
    private bool reminder;    // stage không tutorial nhưng vừa nhắc chọn power (đấm quái còn giáp): chọn power thì hiện bàn tay (không chữ)
    private bool[] powerUsed; // power nào đã dùng ở stage này (để hiện hướng dẫn dùng power lần đầu)

    public static PowerController Ins;
    public static int UseId; // tăng mỗi lần chạm màn hình để dùng power (damage của lần chạm đó mang mã này)

    private PowerOption current;
    private bool hasCurrent;
    private bool pressing;

    public bool HasPower => hasCurrent;

    private int IndexOf(PowerBase power)
    {
        for (int i = 0; i < powers.Count; i++) if (powers[i].Power == power) return i;
        return -1;
    }

    private bool AnyBusy()
    {
        foreach (PowerOption p in powers)
            if (p.Power && p.Power.Busy) return true;
        return false;
    }

    private void Awake()
    {
        Ins = this;
        powers.ForEach(p => p.Button.onClick.AddListener(() => Select(p)));
        powers.ForEach(p =>
        {
            if (p.Selected) p.Selected.enabled = false;
            if (p.Tutorial) p.Tutorial.SetActive(false);
        });
        if (choiceTut) choiceTut.SetActive(false);
        if (offTut) offTut.SetActive(false);
        RefreshLimit();
    }

    // Ẩn/hiện thanh nút power + chữ (GameController gọi khi chuyển stage).
    public void SetVisible(bool visible)
    {
        if (!visible) Deselect();
        if (bar) bar.SetActive(visible);
    }

    // Đặt số lượt power được dùng (gọi khi bắt đầu stage). 0 = không giới hạn.
    public void SetLimit(int value)
    {
        limit = Mathf.Max(0, value);
        used = 0;
        RefreshLimit();
    }

    // Damage (máu) của 1 lần dùng power, mọi power dùng chung.
    public void SetDamage(int value)
    {
        foreach (PowerOption p in powers) if (p.Power) p.Power.SetDamage(Mathf.Max(0, value));
    }

    // Số loại power được dùng ở stage (<= 0 = tất cả). Dùng 1 loại chưa dùng thì Type Power - 1;
    // về 0 thì chỉ còn chọn được các loại đã dùng.
    public void SetActivePowers(int count)
    {
        if (count <= 0 || count > powers.Count) count = powers.Count;
        typeLimit = count;
        RefreshLimit();
    }

    // Bắt đầu (on = true) / bỏ qua tutorial chọn power cho stage hiện tại.
    public void StartTutorial(bool on)
    {
        tutActive = on && powers.Count > 0;
        useTut = on;
        reminder = false;
        powerUsed = new bool[powers.Count];
        RefreshLimit();
        RefreshTut();
    }

    // Hướng dẫn bấm lại nút power đang chọn để tắt power (GameController gọi khi quái vỡ giáp ở stage tutorial).
    public void ShowOffTut(bool on)
    {
        on = on && hasCurrent;
        if (on && offHand && current.Button) offHand.SetTargets((RectTransform)current.Button.transform);
        if (offTut) offTut.SetActive(on);
    }

    // Hiện lại hướng dẫn chọn power (vd. người chơi đấm quái còn giáp). Chọn power thì tắt.
    public void ShowChoiceTut()
    {
        if (hasCurrent || Exhausted || (bar && !bar.activeInHierarchy)) return;
        tutActive = true;
        if (!useTut) reminder = true;
        RefreshTut();
    }

    // Bật/tắt hướng dẫn dùng power; handOnly = chỉ bàn tay, ẩn chữ + nền chữ.
    private static void ShowUseTut([Bridge.Ref] PowerOption p, bool on, bool handOnly)
    {
        if (!p.Tutorial) return;
        p.Tutorial.SetActive(on);
        if (!on) return;
        foreach (string n in new[] { "Text", "TextBG" })
        {
            Transform t = p.Tutorial.transform.Find(n);
            if (t) t.gameObject.SetActive(!handOnly);
        }
    }

    private void RefreshTut()
    {
        if (choiceTut) choiceTut.SetActive(tutActive && !hasCurrent && !Exhausted);
    }

    private void RefreshLimit()
    {
        if (counterText)
        {
            counterText.gameObject.SetActive(limit > 0);
            counterText.text = "Used: " + used + "/" + limit;
        }
        if (powerCountText) powerCountText.text = "Type Power: " + TypesLeft;
        bool canUse = !Exhausted && !busy;
        for (int i = 0; i < powers.Count; i++)
            if (powers[i].Button) powers[i].Button.interactable = canUse && CanPick(i);
    }

    // Vừa dùng 1 lượt (sau PointerDown).
    private void CountUse()
    {
        if (!current.Power.ConsumeUsed()) return;
        used++;
        int idx = IndexOf(current.Power);
        if (powerUsed != null && idx >= 0) powerUsed[idx] = true;
        if (current.Tutorial) current.Tutorial.SetActive(false); // đã dùng -> tắt hướng dẫn dùng power
        reminder = false;
        RefreshLimit();
    }

    // Hết lượt: nhấc tay xong thì tắt power đang chọn (các nút đã bị khoá nên không bấm lại để tắt được).
    private void CheckExhausted()
    {
        if (!Exhausted || pressing || !hasCurrent) return;
        Deselect();
    }

    private void OnDisable()
    {
        if (hasCurrent && pressing) current.Power.Cancel();
        pressing = false;
    }

    private void Select([Bridge.Ref] PowerOption option)
    {
        if (Exhausted || busy) return;
        bool same = hasCurrent && current.Power == option.Power;
        if (!same && !CanPick(IndexOf(option.Power))) return; // hết Type Power: không đổi sang loại chưa dùng
        AudioController.Ins.PlaySFX(clickSound);

        Deselect();
        if (same)
        {
            RefreshTut();
            return;
        }

        current = option;
        hasCurrent = true;
        tutActive = false; // đã chọn power -> xong hướng dẫn chọn power của stage này
        if (current.Selected) current.Selected.enabled = true;
        // Hướng dẫn dùng power (tay trên quái + chữ) với power chưa dùng ở stage này.
        int idx = IndexOf(current.Power);
        bool firstUse = useTut && powerUsed != null && idx >= 0 && !powerUsed[idx];
        ShowUseTut(current, firstUse || reminder, !firstUse); // stage không tutorial (nhắc lại): chỉ bàn tay
        RefreshTut();
    }

    // Chạm có rơi vào nút power đang hiện không (không dùng EventSystem.IsPointerOverGameObject
    // vì ảnh nền BG trong Canvas camera cũng chặn raycast -> luôn trả về true).
    public bool IsOverButton([Bridge.Ref] Vector2 screen)
    {
        foreach (PowerOption p in powers)
        {
            if (!p.Button || !p.Button.gameObject.activeInHierarchy) continue;
            if (RectTransformUtility.RectangleContainsScreenPoint((RectTransform)p.Button.transform, screen, null)) return true;
        }
        return false;
    }

    // Chạm vào tay player thì là kéo tay (TargetController), không dùng power.
    private static bool OnPlayerHand([Bridge.Ref] Vector2 screen)
    {
        return TargetController.Ins && TargetController.Ins.IsGrabPoint(screen);
    }

    public void Deselect()
    {
        if (!hasCurrent) return;
        if (current.Selected) current.Selected.enabled = false;
        current.Power.Cancel();
        if (current.Tutorial) current.Tutorial.SetActive(false);
        if (offTut) offTut.SetActive(false);
        hasCurrent = false;
        pressing = false;
        RefreshTut();
    }

    private void Update()
    {
        // Power trước chưa xong thì khoá nút + bỏ qua lần chạm mới (đang kéo lửa dở thì vẫn kéo tiếp được).
        bool b = AnyBusy();
        if (b != busy)
        {
            busy = b;
            RefreshLimit();
        }
        if (!hasCurrent) return;

        if (Input.touchCount > 0)
        {
            Touch t = Input.GetTouch(0);
            if (t.phase == TouchPhase.Began)
            {
                if (busy || IsOverButton(t.position) || OnPlayerHand(t.position)) return;
                pressing = true;
                UseId++;
                current.Power.PointerDown(ToWorld(t.position));
                CountUse();
            }
            else if (pressing && (t.phase == TouchPhase.Moved || t.phase == TouchPhase.Stationary))
            {
                current.Power.PointerHold(ToWorld(t.position));
            }
            else if (pressing && (t.phase == TouchPhase.Ended || t.phase == TouchPhase.Canceled))
            {
                pressing = false;
                current.Power.PointerUp(ToWorld(t.position));
            }
            CheckExhausted();
            return;
        }

        if (Input.GetMouseButtonDown(0))
        {
            if (busy || IsOverButton(Input.mousePosition) || OnPlayerHand(Input.mousePosition)) return;
            pressing = true;
            UseId++;
            current.Power.PointerDown(ToWorld(Input.mousePosition));
            CountUse();
        }
        else if (pressing && Input.GetMouseButton(0))
        {
            current.Power.PointerHold(ToWorld(Input.mousePosition));
        }
        else if (pressing && Input.GetMouseButtonUp(0))
        {
            pressing = false;
            current.Power.PointerUp(ToWorld(Input.mousePosition));
        }
        CheckExhausted();
    }

    private static Vector2 ToWorld([Bridge.Ref] Vector2 screen)
    {
        return Camera.main.ScreenToWorldPoint(screen);
    }
}

[System.Serializable]
public struct PowerOption
{
    public Button Button;
    public Image Selected;
    public PowerBase Power;
    public GameObject Tutorial; // hướng dẫn dùng power này (tay trên quái + chữ), hiện khi chọn trong tutorial
}

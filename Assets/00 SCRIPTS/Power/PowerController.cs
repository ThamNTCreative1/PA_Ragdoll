using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

// Thay cho DefenseController: chọn power ở cột bên, rồi chạm/kéo trên màn hình để dùng.
public class PowerController : MonoBehaviour
{
    [SerializeField] private List<PowerOption> powers;
    [SerializeField] private AudioClip clickSound;
    [Header("Tut")]
    [SerializeField] private GameObject optionTut;
    [SerializeField] private GameObject actionTut;

    private PowerOption current;
    private bool hasCurrent;
    private bool pressing;

    private void Awake()
    {
        powers.ForEach(p => p.Button.onClick.AddListener(() => Select(p)));
        powers.ForEach(p => { if (p.Selected) p.Selected.enabled = false; });
    }

    // Bị tắt (vd. player chết): huỷ thao tác đang dở của power hiện tại.
    private void OnDisable()
    {
        if (hasCurrent && pressing) current.Power.Cancel();
        pressing = false;
    }

    private void Select(PowerOption option)
    {
        if (optionTut) Destroy(optionTut);
        if (hasCurrent)
        {
            current.Selected.enabled = false;
            current.Power.Cancel();
            if (current.Tutorial) current.Tutorial.SetActive(false);
        }
        AudioController.Ins.PlaySFX(clickSound);
        current = option;
        hasCurrent = true;
        current.Selected.enabled = true;

        // Power có tutorial riêng (vd. Lửa) thì hiện tutorial đó thay cho tutorial chung "Tap To Use Power!".
        // Tutorial riêng tự huỷ khi người chơi đã làm đúng; tutorial chung bị huỷ ở lần click đầu (GameController.Click).
        bool ownTut = current.Tutorial;
        if (ownTut) current.Tutorial.SetActive(true);
        if (actionTut) actionTut.SetActive(!ownTut);
    }

    private void Update()
    {
        if (!hasCurrent) return;

        if (Input.touchCount > 0)
        {
            Touch t = Input.GetTouch(0);
            if (t.phase == TouchPhase.Began)
            {
                if (EventSystem.current.IsPointerOverGameObject(t.fingerId)) return;
                pressing = true;
                current.Power.PointerDown(ToWorld(t.position));
                if (current.Power.ConsumeUsed()) GameController.Ins.Click(); // chỉ tính khi power kích hoạt thành công
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
            return;
        }

        if (Input.GetMouseButtonDown(0))
        {
            if (EventSystem.current.IsPointerOverGameObject()) return;
            pressing = true;
            current.Power.PointerDown(ToWorld(Input.mousePosition));
            if (current.Power.ConsumeUsed()) GameController.Ins.Click(); // chỉ tính khi power kích hoạt thành công
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
    }

    private static Vector2 ToWorld(Vector2 screen)
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
    public GameObject Tutorial; // tutorial riêng khi chọn power này (để trống = dùng tutorial chung)
}

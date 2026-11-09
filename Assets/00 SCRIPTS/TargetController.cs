using System.Collections.Generic;
using UnityEngine;

public class TargetController : MonoBehaviour
{
    [SerializeField] private List<TargetJoint2D> listTarget;
    [SerializeField] private TargetJoint2D currentTarget;
    [SerializeField] private int index;
    [SerializeField] private GameObject tut;
    [SerializeField] private float grabRadius = 0.2f; // chạm cách tay bấy nhiêu (world) vẫn tính là chạm vào tay
    private bool pressing;
    public static TargetController Ins;
    private void Awake() { Ins = this; }
    public Transform CurrentHand => currentTarget ? currentTarget.transform : null; // tay player đang điều khiển
    private bool tutSeen; // tut đã hiện từ frame trước (chạm cùng frame làm hiện tut - vd. sét phá giáp - không tính là chạm tắt)
    void Start()
    {
        currentTarget = listTarget[0];
    }

    void Update()
    {
        CheckInput();
    }
    private void CheckInput()
    {
        // Tut đấm đang hiện (che màn hình) thì chạm bất kỳ đâu cũng tắt tut.
        bool tutShown = tut && tut.activeInHierarchy && tutSeen;
        if (tutShown && Input.GetMouseButtonDown(0)) tut.SetActive(false); // ẩn (không xoá) để stage sau hiện lại
        tutSeen = tut && tut.activeInHierarchy;

        // Chỉ kéo khi chạm vào tay player (kể cả khi đang chọn power); chạm vào nút power thì không kéo.
        if (Input.GetMouseButtonDown(0))
            pressing = !PointerOverUI() && TouchingHand(Camera.main.ScreenToWorldPoint(Input.mousePosition));
        if (pressing && Input.GetMouseButton(0))
        {
            Vector2 point = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            SetTargetPoint(point);
        }
        if (Input.GetMouseButtonUp(0))
        {
            pressing = false;
            RemoveTargetPoint();
        }
    }
    // Chạm (toạ độ màn hình) vào tay player -> kéo tay, không dùng power (PowerController gọi).
    public bool IsGrabPoint(Vector2 screen)
    {
        return TouchingHand(Camera.main.ScreenToWorldPoint(screen));
    }

    // Điểm chạm có nằm trên (hoặc sát) tay đang điều khiển không (tính cả đồ cầm trên tay).
    private bool TouchingHand(Vector2 point)
    {
        if (!currentTarget) return false;
        Transform hand = currentTarget.transform;
        foreach (Collider2D c in Physics2D.OverlapCircleAll(point, grabRadius))
            if (c.transform.IsChildOf(hand) || c.attachedRigidbody == currentTarget.attachedRigidbody) return true;
        return false;
    }

    private static bool PointerOverUI()
    {
        return PowerController.Ins && PowerController.Ins.IsOverButton(Input.mousePosition);
    }
    private void SetTargetPoint(Vector2 point)
    {
        if (!currentTarget) return;
        currentTarget.target = point;
        currentTarget.enabled = true;
    }
    private void RemoveTargetPoint()
    {
        if (!currentTarget) return;
        currentTarget.enabled = false;
    }
    public void RemoveTarget()
    {
        if (currentTarget) RemoveTargetPoint();
        currentTarget = null;
    }
    public void NextTarget()
    {
        if (index >= listTarget.Count) return;
        if (currentTarget) currentTarget.gameObject.SetActive(false);
        index++;
        currentTarget = index < listTarget.Count ? listTarget[index] : null;
    }
    public bool IsEmpty()
    {
        return !currentTarget || !currentTarget.enabled;
    }
}

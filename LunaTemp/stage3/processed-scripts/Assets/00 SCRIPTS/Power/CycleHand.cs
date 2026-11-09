using System.Collections.Generic;
using UnityEngine;

// Bàn tay hướng dẫn lần lượt chỉ vào từng nút power (lặp lại): trượt tới nút, nhấp nhấp, rồi sang nút kế tiếp.
// Đặt cùng parent với các nút (vd. PowerBar) để vị trí tính theo anchoredPosition của nút.
public class CycleHand : MonoBehaviour
{
    [SerializeField] private List<RectTransform> targets;               // các nút theo thứ tự
    [SerializeField] private Vector2 fingerOffset = new Vector2(70f, -70f); // từ tâm nút tới tâm hình bàn tay
    [SerializeField] private float moveTime = 0.35f;                   // thời gian trượt sang nút kế
    [SerializeField] private float stayTime = 0.9f;                    // thời gian nhấp trên mỗi nút
    [SerializeField] private float tapSpeed = 9f;
    [SerializeField] private float pulse = 0.15f;

    private RectTransform rect;
    private Vector3 baseScale;
    private int index;
    private float time;

    private void Awake()
    {
        rect = (RectTransform)transform;
        baseScale = rect.localScale;
    }

    private void OnEnable()
    {
        index = 0;
        time = 0;
    }

    private readonly List<RectTransform> active = new List<RectTransform>();

    private void Update()
    {
        // Chỉ đi qua các nút đang bật (stage có thể bật bớt power).
        active.Clear();
        if (targets != null) foreach (RectTransform t in targets) if (t && t.gameObject.activeInHierarchy) active.Add(t);
        if (active.Count == 0) return;
        time += Time.unscaledDeltaTime;
        if (time >= moveTime + stayTime)
        {
            time -= moveTime + stayTime;
            index++;
        }
        index %= active.Count;
        Vector2 from = Pos((index - 1 + active.Count) % active.Count);
        Vector2 to = Pos(index);
        if (time < moveTime)
        {
            rect.anchoredPosition = Vector2.Lerp(from, to, Mathf.SmoothStep(0, 1, time / moveTime));
            rect.localScale = baseScale;
        }
        else
        {
            rect.anchoredPosition = to;
            float k = 0.5f * (1f + Mathf.Sin((time - moveTime) * tapSpeed));
            rect.localScale = baseScale * (1f - pulse * k);
        }
    }

    // Đổi các nút bàn tay chỉ vào (vd. chỉ 1 nút power đang chọn để hướng dẫn bấm tắt).
    public void SetTargets(params RectTransform[] list)
    {
        targets = new List<RectTransform>(list);
        index = 0;
        time = 0;
    }

    private Vector2 Pos(int i)
    {
        return active[i].anchoredPosition + fingerOffset;
    }
}

using UnityEngine;

// Hướng dẫn dùng power: bàn tay chỉ vào quái của stage hiện tại, quẹt qua lại (lửa) hoặc nhấp (sét/lốc).
// PowerController bật khi chọn power chưa dùng ở stage (tutorial) và tắt khi đã dùng.
// Gắn lên object tutorial (con của Canvas overlay, RectTransform phủ toàn màn hình).
public class PowerTutorial : MonoBehaviour
{
    [SerializeField] private RectTransform hand;
    [SerializeField] private bool swipe = true;               // true = quẹt qua lại, false = nhấp tại chỗ
    [SerializeField] private Vector2 fingerOffset = new Vector2(30f, -45f); // từ đầu ngón tay tới tâm hình bàn tay (canvas units)
    [SerializeField] private float swipeDistance = 160f;      // canvas units
    [SerializeField] private float speed = 4f;
    [SerializeField] private float pulse = 0.15f;

    private RectTransform rect;
    private Vector3 handBaseScale;

    private void Awake()
    {
        rect = (RectTransform)transform;
        if (hand) handBaseScale = hand.localScale;
    }

    private void Update()
    {
        MonsterController monster = GameController.Ins ? GameController.Ins.CurrentMonster() : null;
        if (!hand) return;
        hand.gameObject.SetActive(monster);
        if (!monster) return;

        Transform body = monster.transform.Find("Body");
        if (!body) body = monster.transform;
        Vector2 screen = Camera.main.WorldToScreenPoint(body.position);
        Vector2 local;
        if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(rect, screen, null, out local)) return;
        float t = Time.unscaledTime * speed;
        Vector2 move = swipe ? new Vector2(Mathf.Sin(t) * swipeDistance * 0.5f, 0) : Vector2.zero;
        hand.anchoredPosition = local + fingerOffset + move;
        hand.localScale = handBaseScale * (1f - pulse * 0.5f * (1f + Mathf.Cos(t * 2f)));
    }
}

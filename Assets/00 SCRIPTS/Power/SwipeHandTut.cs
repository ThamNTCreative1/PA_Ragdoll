using UnityEngine;

// Hướng dẫn "Swipe The Hand!": bàn tay chạm vào tay player rồi kéo về phía quái của stage hiện tại (lặp lại).
// Gắn lên object tut (con của Canvas overlay, RectTransform phủ toàn màn hình).
public class SwipeHandTut : MonoBehaviour
{
    [SerializeField] private RectTransform hand;
    [SerializeField] private TargetController target;
    [SerializeField] private Vector2 fingerOffset = new Vector2(20f, -110f); // từ đầu ngón tay tới tâm hình bàn tay (canvas units)
    [SerializeField] private float pressTime = 0.35f;  // nhấn xuống trên tay player
    [SerializeField] private float moveTime = 0.8f;    // kéo sang quái
    [SerializeField] private float stayTime = 0.35f;   // dừng ở quái rồi lặp lại
    [SerializeField] private float pressScale = 0.85f;
    [SerializeField] private float fallbackDistance = 2f; // không có quái: kéo ngang bấy nhiêu (world)

    private RectTransform rect;
    private Vector3 baseScale;
    private float time;

    private void Awake()
    {
        rect = (RectTransform)transform;
        if (hand) baseScale = hand.localScale;
    }

    private void OnEnable()
    {
        time = 0;
    }

    private void Update()
    {
        if (!hand || !target) return;
        Transform from = target.CurrentHand;
        hand.gameObject.SetActive(from);
        if (!from) return;

        Vector2 start = from.position;
        MonsterController monster = GameController.Ins ? GameController.Ins.CurrentMonster() : null;
        Vector2 end = start + Vector2.right * fallbackDistance;
        if (monster)
        {
            Transform body = monster.transform.Find("Body");
            end = (body ? body : monster.transform).position;
        }

        time = (time + Time.unscaledDeltaTime) % (pressTime + moveTime + stayTime);
        Vector2 world;
        float press;
        if (time < pressTime)
        {
            world = start;
            press = time / pressTime;
        }
        else if (time < pressTime + moveTime)
        {
            world = Vector2.Lerp(start, end, Mathf.SmoothStep(0, 1, (time - pressTime) / moveTime));
            press = 1;
        }
        else
        {
            world = end;
            press = 1 - (time - pressTime - moveTime) / stayTime;
        }

        Vector2 local;
        Vector2 screen = Camera.main.WorldToScreenPoint(world);
        if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(rect, screen, null, out local)) return;
        hand.anchoredPosition = local + fingerOffset;
        hand.localScale = baseScale * Mathf.Lerp(1f, pressScale, press);
    }
}

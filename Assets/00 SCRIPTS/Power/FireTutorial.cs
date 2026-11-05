using UnityEngine;

// Tutorial riêng của power Lửa: bàn tay chỉ vào zombie còn sống gần player nhất, quẹt qua lại trên người zombie.
// Khi đã có zombie bị bén lửa thì tutorial xong và tự huỷ (không hiện lại nữa).
// Gắn lên object tutorial (con của Canvas overlay, RectTransform phủ toàn màn hình).
public class FireTutorial : MonoBehaviour
{
    [SerializeField] private RectTransform hand;
    [SerializeField] private Transform monsterRoot;           // GAME/Main
    [SerializeField] private Transform player;                // để chọn zombie gần player nhất
    [SerializeField] private Vector2 fingerOffset = new Vector2(64f, -50f); // từ đầu ngón tay tới tâm hình bàn tay (canvas units)
    [SerializeField] private float swipeDistance = 60f;       // quẹt qua lại (canvas units)
    [SerializeField] private float swipeSpeed = 4f;
    [SerializeField] private float pulse = 0.12f;

    private RectTransform rect;
    private Vector3 handBaseScale;

    private void Awake()
    {
        rect = (RectTransform)transform;
        if (hand) handBaseScale = hand.localScale;
    }

    private void Update()
    {
        if (AnyBurning())
        {
            Destroy(gameObject); // đã biết cách dùng -> xong tutorial
            return;
        }
        Transform target = NearestMonster();
        if (!hand) return;
        hand.gameObject.SetActive(target);
        if (!target) return;

        Vector2 screen = Camera.main.WorldToScreenPoint(target.position);
        Vector2 local;
        if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(rect, screen, null, out local)) return;
        float s = Mathf.Sin(Time.unscaledTime * swipeSpeed);
        hand.anchoredPosition = local + fingerOffset + new Vector2(s * swipeDistance * 0.5f, 0);
        hand.localScale = handBaseScale * (1f - pulse * 0.5f * (1f + Mathf.Cos(Time.unscaledTime * swipeSpeed * 2f)));
    }

    private bool AnyBurning()
    {
        foreach (Transform t in monsterRoot)
            if (t.GetComponent<Burning>()) return true;
        return false;
    }

    private Transform NearestMonster()
    {
        Rect cam = PowerBase.CameraRect();
        Vector2 from = player ? (Vector2)player.position : cam.center;
        Transform best = null;
        float bestDist = float.MaxValue;
        foreach (Transform t in monsterRoot)
        {
            MonsterController m = t.GetComponent<MonsterController>();
            if (!m || m.IsDead) continue;
            Transform body = t.Find("Body");
            Transform p = body ? body : t;
            if (!cam.Contains(p.position)) continue;
            float d = ((Vector2)p.position - from).sqrMagnitude;
            if (d < bestDist) { bestDist = d; best = p; }
        }
        return best;
    }
}

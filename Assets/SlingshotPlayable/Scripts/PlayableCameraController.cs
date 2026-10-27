using UnityEngine;
#if UNITY_EDITOR
[ExecuteAlways]
#endif
public class PlayableCameraController : MonoBehaviour
{
    public Camera view;
    public Transform followTarget;
    public Vector3 slingPosition = new Vector3(-4.2f, 3.6f, -10);
    public Vector3 mapPosition = new Vector3(12.6f, 4.9f, -10);
    // Vùng world (rộng x cao) luôn phải nằm trọn trong màn hình ở từng điểm dừng camera.
    public Vector2 slingFrame = new Vector2(11.5f, 8.2f);
    public Vector2 mapFrame = new Vector2(17.2f, 11.2f);
    // Phần chiều cao màn hình bị UI (title + prompt) chiếm, để khung không bị che.
    [Range(0, .5f)] public float uiVerticalReserve = .28f;
    public float panDuration = 1.2f;

    [Header("Aim (khi kéo dây ná)")]
    // Khung nhìn = hộp bao phòng địch + nhân vật đang bị kéo (luôn thấy cả hai).
    public Vector2 aimRoomMin = new Vector2(4.4f, -0.6f);
    public Vector2 aimRoomMax = new Vector2(20.9f, 10.6f);
    public Vector2 aimFocusMargin = new Vector2(1.3f, 1.9f);   // nửa bề ngang / chiều cao nhân vật + lề
    [HideInInspector] public Vector2 aimFocus = new Vector2(-7, 3.1f);  // flow cập nhật = vị trí nhân vật khi kéo
    // (giữ lại để không mất dữ liệu đã serialize, không còn dùng)
    public Vector3 aimPosition = new Vector3(6.3f, 5f, -10);
    public Vector2 aimFrame = new Vector2(30f, 12f);
    public float aimZoomOutTime = .45f;   // thời gian zoom ra khi bắt đầu kéo
    public float aimZoomInTime = .6f;     // thời gian zoom lại sau khi thả
    bool aiming;
    float aimBlend;

    Vector3 start, destination;
    float elapsed;
    bool panning;
    public bool IsPanning { get { return panning; } }
    public bool IsAiming { get { return aiming; } }

    public void SetAim(bool on) { aiming = on; if (on) panning = false; }
    Vector2 AimMin() { return Vector2.Min(aimRoomMin, aimFocus - aimFocusMargin); }
    Vector2 AimMax() { return Vector2.Max(aimRoomMax, aimFocus + aimFocusMargin); }
    Vector2 AimCenter() { return (AimMin() + AimMax()) * .5f; }
    Vector2 AimFrame() { return AimMax() - AimMin(); }

    void FitView()
    {
        if (view == null) return;
        float aspect = view.targetTexture != null ? (float)view.targetTexture.width / view.targetTexture.height : view.aspect;
        aspect = Mathf.Max(.3f, aspect);
        float t = Mathf.Clamp01(Mathf.InverseLerp(slingPosition.x, mapPosition.x, transform.position.x));
        Vector2 frame = Vector2.Lerp(slingFrame, mapFrame, t);
        float a = aimBlend * aimBlend * (3 - 2 * aimBlend);
        frame = Vector2.Lerp(frame, AimFrame(), a);
        float byHeight = frame.y * .5f / (1 - uiVerticalReserve);
        float byWidth = frame.x * .5f / aspect;
        view.orthographicSize = Mathf.Max(byHeight, byWidth);
    }
    void OnPreCull()
    {
        FitView();
#if UNITY_EDITOR
        if (view != null && view.targetTexture != null) Canvas.ForceUpdateCanvases();
#endif
    }
    public void PanTo(Vector3 target)
    {
        followTarget = null; start = transform.position; destination = target; elapsed = 0; panning = true;
    }
    void LateUpdate()
    {
        if (!Application.isPlaying) { FitView(); return; }
        float dt = Time.deltaTime;
        aimBlend = Mathf.MoveTowards(aimBlend, aiming ? 1 : 0, dt / Mathf.Max(.01f, aiming ? aimZoomOutTime : aimZoomInTime));
        if (aiming)
        {
            Vector2 c = AimCenter();
            transform.position = Vector3.Lerp(transform.position, new Vector3(c.x, c.y, -10), 1 - Mathf.Exp(-7 * dt));
        }
        else if (panning)
        {
            elapsed += dt;
            float t = Mathf.Clamp01(elapsed / panDuration);
            transform.position = Vector3.Lerp(start, destination, t * t * (3 - 2 * t));
            if (t >= 1) panning = false;
        }
        else if (followTarget != null)
        {
            Vector3 p = followTarget.position;
            p.x = Mathf.Clamp(p.x + 2, slingPosition.x, mapPosition.x + 3);
            p.y = Mathf.Clamp(p.y + 1.2f, slingPosition.y, mapPosition.y + 2);
            p.z = -10;
            transform.position = Vector3.Lerp(transform.position, p, 1 - Mathf.Exp(-6 * dt));
        }
        FitView();
        if (onAfterMove != null) onAfterMove();
    }
    // Gọi sau khi camera đã di chuyển/zoom xong trong frame (UI bám theo world dùng cái này).
    [System.NonSerialized] public System.Action onAfterMove;
}

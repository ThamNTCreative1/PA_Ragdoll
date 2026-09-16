using UnityEngine;
using UnityEngine.EventSystems;

public class DropController : MonoBehaviour
{
    [SerializeField] private GameObject tut3;
    [SerializeField] private GameObject tut4;

    [Header("References")]
    [SerializeField] private Camera worldCamera;
    [SerializeField] private GameObject bombPrefab;

    [Header("Drop Settings")]
    [SerializeField] private Transform bombParent;

    private void Awake()
    {
        if (worldCamera == null)
            worldCamera = Camera.main;
    }

    private void Start()
    {
        if (tut3) Destroy(tut3);
        tut4.SetActive(true);
    }

    private void Update()
    {
        if (Input.touchCount > 0)
        {
            HandleTouchInput();
        }
        else
        {
            HandleMouseInput();
        }
    }

    // =========================
    // MOUSE
    // =========================

    private void HandleMouseInput()
    {
        if (!Input.GetMouseButtonDown(0))
            return;

        // Click vào UI -> bỏ qua
        if (IsPointerOverUI())
            return;

        DropBomb(Input.mousePosition);
    }

    // =========================
    // TOUCH
    // =========================

    private void HandleTouchInput()
    {
        Touch touch = Input.GetTouch(0);

        if (touch.phase != TouchPhase.Began)
            return;

        // Touch vào UI -> bỏ qua
        if (IsPointerOverUI(touch.fingerId))
            return;

        DropBomb(touch.position);
    }

    // =========================
    // DROP
    // =========================

    private void DropBomb(Vector2 screenPosition)
    {
        if (tut4) Destroy(tut4);
        Vector3 worldPosition = ScreenToWorldPosition(screenPosition);

        Instantiate(
            bombPrefab,
            worldPosition,
            Quaternion.identity,
            bombParent
        );
    }

    // =========================
    // SCREEN -> WORLD
    // =========================

    private Vector3 ScreenToWorldPosition(Vector2 screenPosition)
    {
        Vector3 screenPos = new Vector3(
            screenPosition.x,
            screenPosition.y,
            Mathf.Abs(worldCamera.transform.position.z)
        );

        Vector3 worldPosition =
            worldCamera.ScreenToWorldPoint(screenPos);

        // Game 2D
        worldPosition.z = 0f;

        return worldPosition;
    }

    // =========================
    // UI CHECK
    // =========================

    private bool IsPointerOverUI()
    {
        if (EventSystem.current == null)
            return false;

        return EventSystem.current.IsPointerOverGameObject();
    }

    private bool IsPointerOverUI(int fingerId)
    {
        if (EventSystem.current == null)
            return false;

        return EventSystem.current.IsPointerOverGameObject(fingerId);
    }

}
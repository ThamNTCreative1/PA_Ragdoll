using UnityEngine;

public class DragController : MonoBehaviour
{
    [SerializeField] private GameObject tut1;
    [SerializeField] private GameObject tut2;

    private void Start()
    {
        if (tut1) Destroy(tut1);
        if (tut2) tut2.SetActive(true);
    }
    [Header("Icon")]
    [SerializeField] private RectTransform canvas;
    [SerializeField] private RectTransform icon;

    [Header("Platform Detection")]
    [SerializeField] private LayerMask platformLayer;
    [SerializeField] private float detectRadius = 0.25f;

    [Header("Force")]
    [SerializeField] private float forceMultiplier = 30f;
    [SerializeField] private float maxForce = 100f;

    private Vector2 currentMouseWorld;
    private Vector2 lastMouseWorld;
    private Vector2 mouseVelocity;

    private Rigidbody2D currentPlatform;

    private void Update()
    {
        currentMouseWorld = GetMouseWorldPosition();

        if (Input.GetMouseButtonDown(0))
        {
            StartDrag();
        }

        if (Input.GetMouseButton(0))
        {
            UpdateDrag();
        }

        if (Input.GetMouseButtonUp(0))
        {
            EndDrag();
        }
    }

    private void FixedUpdate()
    {
        if (!Input.GetMouseButton(0))
            return;

        ApplyForceToPlatform();
    }

    private void StartDrag()
    {
        if (tut2) Destroy(tut2);
        lastMouseWorld = currentMouseWorld;

        if (icon != null)
        {
            icon.gameObject.SetActive(true);
            RectTransformUtility.ScreenPointToLocalPointInRectangle(
                canvas,
                Camera.main.WorldToScreenPoint(currentMouseWorld),
                Camera.main,
                out Vector2 localPoint
            );
            icon.localPosition = localPoint;
        }
    }

    private void UpdateDrag()
    {
        if (icon != null)
        {
            RectTransformUtility.ScreenPointToLocalPointInRectangle(
                canvas,
                Camera.main.WorldToScreenPoint(currentMouseWorld),
                null,
                out Vector2 localPoint
            );
            icon.localPosition = localPoint;
        }

        float dt = Mathf.Max(Time.deltaTime, 0.0001f);

        mouseVelocity =
            (currentMouseWorld - lastMouseWorld) / dt;

        lastMouseWorld = currentMouseWorld;

        DetectPlatform();
    }

    private void DetectPlatform()
    {
        Collider2D col = Physics2D.OverlapCircle(
            currentMouseWorld,
            detectRadius,
            platformLayer
        );

        Rigidbody2D newPlatform = null;

        if (col != null)
            newPlatform = col.attachedRigidbody;

        // Đã rời khỏi platform cũ
        if (currentPlatform != null &&
            currentPlatform != newPlatform)
        {
            BalanceController spring =
                currentPlatform.GetComponent<BalanceController>();

            if (spring != null)
                spring.useBalance = true;
        }

        currentPlatform = newPlatform;

        if (currentPlatform != null)
        {
            BalanceController spring =
                currentPlatform.GetComponent<BalanceController>();

            if (spring != null)
                spring.useBalance = false;
        }
    }
    private float lastSide;
    private void ApplyForceToPlatform()
    {
        if (currentPlatform == null)
            return;

        Vector2 localMouse =
            currentPlatform.transform.InverseTransformPoint(currentMouseWorld);

        float side = Mathf.Sign(localMouse.x);

        // Khi icon vừa đổi từ bên trái <-> bên phải
        if (lastSide != 0f && side != lastSide)
        {
            // Giảm quán tính của hướng xoay cũ
            currentPlatform.angularVelocity *= 0.2f;
        }

        lastSide = side;

        float verticalSpeed = mouseVelocity.y;

        float torque =
            side * verticalSpeed * forceMultiplier;

        torque = Mathf.Clamp(
            torque,
            -maxForce,
            maxForce
        );

        currentPlatform.AddTorque(
            torque,
            ForceMode2D.Force
        );
    }

    private void EndDrag()
    {
        if (icon != null)
            icon.gameObject.SetActive(false);

        if (currentPlatform != null)
        {
            BalanceController spring =
                currentPlatform.GetComponent<BalanceController>();

            if (spring != null)
                spring.useBalance = true;
        }

        currentPlatform = null;
        mouseVelocity = Vector2.zero;
        lastSide = 0f;
    }

    private Vector2 GetMouseWorldPosition()
    {
        Vector3 mouseScreen = Input.mousePosition;

        Vector3 world =
            Camera.main.ScreenToWorldPoint(mouseScreen);

        return new Vector2(world.x, world.y);
    }
    private void OnDisable()
    {
        icon.gameObject.SetActive(false);
    }

}
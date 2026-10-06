using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    [Header("Camera")]
    [SerializeField] private Camera cam;
    [SerializeField] private List<Vector3> camSetupPosition;
    [SerializeField] private int index;

    [Header("Pan")]
    [Tooltip("So don vi world camera di chuyen khi vuot het chieu cao man hinh.")]
    [SerializeField] private float panSpeed = 10f;
    [SerializeField] private Vector2 minPosition = new Vector2(-10f, -5f);
    [SerializeField] private Vector2 maxPosition = new Vector2(10f, 10f);
    [SerializeField] private bool ignoreDragableObjects = true;

    [Header("Zoom")]
    [SerializeField] private float minFieldOfView = 25f;
    [SerializeField] private float maxFieldOfView = 70f;
    [SerializeField] private float pinchZoomSpeed = 0.08f;
    [SerializeField] private float mouseWheelZoomSpeed = 5f;

    private bool isPanning;
    private Vector2 previousPointerPosition;
    private float previousPinchDistance;

    private void NextPhase()
    {
        if (index >= camSetupPosition.Count - 1) return;
        index++;
        cam.transform.position = camSetupPosition[index];
    }
    private void Start()
    {
        cam.transform.position = camSetupPosition[0];
        GameController.Ins.OnNextPhase += NextPhase;
    }

    private void Update()
    {
        if (!cam) return;

        HandleInput();
    }

    private void HandleInput()
    {
        if (Input.touchCount >= 2)
        {
            isPanning = false;
            HandlePinchZoom();
            return;
        }

        previousPinchDistance = 0f;

        if (Input.touchCount == 1) HandleTouchPan(Input.GetTouch(0));
        else HandleMouseInput();
    }

    private void HandleTouchPan(Touch touch)
    {
        if (touch.phase == TouchPhase.Began)
        {
            BeginPan(touch.position);
        }
        else if (touch.phase == TouchPhase.Moved && isPanning)
        {
            Pan(touch.position - previousPointerPosition);
            previousPointerPosition = touch.position;
        }
        else if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
        {
            isPanning = false;
        }
    }

    private void HandleMouseInput()
    {
        if (Input.GetMouseButtonDown(0)) BeginPan(Input.mousePosition);

        if (Input.GetMouseButton(0) && isPanning)
        {
            Vector2 currentPosition = Input.mousePosition;
            Pan(currentPosition - previousPointerPosition);
            previousPointerPosition = currentPosition;
        }

        if (Input.GetMouseButtonUp(0)) isPanning = false;

        float scroll = Input.mouseScrollDelta.y;
        if (!Mathf.Approximately(scroll, 0f))
        {
            Zoom(-scroll * mouseWheelZoomSpeed);
        }
    }

    private void BeginPan(Vector2 screenPosition)
    {
        isPanning = !ignoreDragableObjects || !IsPointerOverDragable(screenPosition);
        previousPointerPosition = screenPosition;
    }

    private bool IsPointerOverDragable(Vector2 screenPosition)
    {
        RaycastHit[] hits = Physics.RaycastAll(cam.ScreenPointToRay(screenPosition));
        for (int i = 0; i < hits.Length; i++)
        {
            if (hits[i].collider.CompareTag("Dragable")) return true;
        }

        return false;
    }

    private void Pan(Vector2 screenDelta)
    {
        float screenHeight = Mathf.Max(Screen.height, 1);
        float zoomScale = cam.fieldOfView / Mathf.Max(maxFieldOfView, 0.01f);
        Vector2 movement = -screenDelta / screenHeight * panSpeed * zoomScale;

        Vector3 position = cam.transform.position;
        position.x = Mathf.Clamp(position.x + movement.x, minPosition.x, maxPosition.x);
        position.y = Mathf.Clamp(position.y + movement.y, minPosition.y, maxPosition.y);
        cam.transform.position = position;
    }

    private void HandlePinchZoom()
    {
        float currentDistance = Vector2.Distance(
            Input.GetTouch(0).position,
            Input.GetTouch(1).position);

        if (previousPinchDistance > 0f)
        {
            Zoom((previousPinchDistance - currentDistance) * pinchZoomSpeed);
        }

        previousPinchDistance = currentDistance;
    }

    private void Zoom(float amount)
    {
        cam.fieldOfView = Mathf.Clamp(
            cam.fieldOfView + amount,
            minFieldOfView,
            maxFieldOfView);
    }

    private void OnValidate()
    {
        minFieldOfView = Mathf.Max(1f, minFieldOfView);
        maxFieldOfView = Mathf.Max(minFieldOfView, maxFieldOfView);

        if (minPosition.x > maxPosition.x)
        {
            float value = minPosition.x;
            minPosition.x = maxPosition.x;
            maxPosition.x = value;
        }

        if (minPosition.y > maxPosition.y)
        {
            float value = minPosition.y;
            minPosition.y = maxPosition.y;
            maxPosition.y = value;
        }
    }
}

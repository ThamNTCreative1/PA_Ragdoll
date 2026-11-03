using UnityEngine;
using UnityEngine.EventSystems;

namespace OBP.FreezeBrainrot
{
    // Full-screen invisible area behind the HUD controls: dragging on empty screen rotates the camera.
    // Uses EventSystem pointer events only (no Input.touch), so mouse and touch behave the same.
    // Joystick and buttons sit above it in the hierarchy, so they take their own pointers first.
    // Sensitivity and limits live on CameraController.
    public sealed class CameraDragArea : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IBeginDragHandler, IDragHandler
    {
        public CameraController cameraController;

        private const int None = int.MinValue;
        private int pointerId = None;   // only the first pointer on the area steers the camera
        private Vector2 last;

        public void OnPointerDown(PointerEventData eventData)
        {
            if (pointerId != None) return;
            pointerId = eventData.pointerId;
            last = eventData.position;
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            if (eventData.pointerId == pointerId) pointerId = None;
        }

        // Start rotating immediately instead of waiting for the EventSystem drag threshold.
        public void OnBeginDrag(PointerEventData eventData)
        {
            eventData.useDragThreshold = false;
        }

        public void OnDrag(PointerEventData eventData)
        {
            if (eventData.pointerId != pointerId || cameraController == null) return;
            Vector2 delta = eventData.position - last;
            last = eventData.position;
            cameraController.Rotate(delta);
        }

        private void OnDisable()
        {
            pointerId = None;
        }
    }
}

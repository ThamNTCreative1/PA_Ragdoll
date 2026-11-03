using UnityEngine;
using UnityEngine.EventSystems;

namespace OBP.FreezeBrainrot
{
    // On-screen joystick: drag inside the touch area, the knob follows (clamped to the base radius)
    // and the normalised direction is sent to the player.
    public sealed class VirtualJoystick : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler
    {
        public PlayerController player;
        public RectTransform baseRect;
        public RectTransform knob;
        [Range(0f, 0.5f)] public float deadZone = 0.12f;

        private int pointerId = -100;

        public void OnPointerDown(PointerEventData eventData)
        {
            if (pointerId != -100) return;
            pointerId = eventData.pointerId;
            OnDrag(eventData);
        }

        public void OnDrag(PointerEventData eventData)
        {
            if (eventData.pointerId != pointerId) return;
            Vector2 local;
            if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(baseRect, eventData.position, eventData.pressEventCamera, out local)) return;
            float radius = baseRect.rect.width * 0.5f;
            Vector2 offset = Vector2.ClampMagnitude(local, radius);
            knob.anchoredPosition = offset;
            Vector2 dir = offset / radius;
            if (dir.magnitude < deadZone) dir = Vector2.zero;
            if (player != null) player.SetMoveInput(dir);
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            if (eventData.pointerId != pointerId) return;
            pointerId = -100;
            knob.anchoredPosition = Vector2.zero;
            if (player != null) player.SetMoveInput(Vector2.zero);
        }

        private void OnDisable()
        {
            pointerId = -100;
            if (knob != null) knob.anchoredPosition = Vector2.zero;
            if (player != null) player.SetMoveInput(Vector2.zero);
        }
    }
}

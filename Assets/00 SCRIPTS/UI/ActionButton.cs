using UnityEngine;
using UnityEngine.EventSystems;

namespace OBP.FreezeBrainrot
{
    // Jump fires on press; Freeze is held (beam runs while the finger stays down). Small squash as feedback.
    public sealed class ActionButton : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
    {
        public enum Action { Jump, Freeze }

        public Action action;
        public PlayerController player;
        public FreezeGun gun;
        public float pressedScale = 0.88f;

        private Vector3 baseScale = Vector3.one;

        private void Awake()
        {
            baseScale = transform.localScale;
        }

        public void OnPointerDown(PointerEventData eventData)
        {
            transform.localScale = baseScale * pressedScale;
            if (action == Action.Jump) { if (player != null) player.Jump(); }
            else if (gun != null) gun.SetTrigger(true);
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            transform.localScale = baseScale;
            if (action == Action.Freeze && gun != null) gun.SetTrigger(false);
        }

        private void OnDisable()
        {
            transform.localScale = baseScale;
            if (action == Action.Freeze && gun != null) gun.SetTrigger(false);
        }
    }
}

using Game.Core;
using UnityEngine;

namespace Game.UI
{
    [RequireComponent(typeof(CanvasGroup))]
    public abstract class UIScreen : MonoBehaviour
    {
        private CanvasGroup _group;

        public bool IsVisible { get; private set; }
        protected IEventBus Events { get; private set; }

        public void Init(IEventBus events)
        {
            _group = GetComponent<CanvasGroup>();
            Events = events;
            SetVisible(false);
            OnInit();
        }

        public void Show()
        {
            SetVisible(true);
            OnShow();
        }

        public void Hide()
        {
            SetVisible(false);
            OnHide();
        }

        private void SetVisible(bool visible)
        {
            _group.alpha = visible ? 1f : 0f;
            _group.interactable = visible;
            _group.blocksRaycasts = visible;
            IsVisible = visible;
        }

        protected virtual void OnInit() { }
        protected virtual void OnShow() { }
        protected virtual void OnHide() { }
    }
}

using System;
using Game.Data;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    [RequireComponent(typeof(Button))]
    public class CategoryTabButton : MonoBehaviour
    {
        [SerializeField] private Image icon;
        [SerializeField] private GameObject selectedFrame;

        private Action<string> _onClicked;

        public string CategoryId { get; private set; }

        public void Init(UICategorySO data, Action<string> onClicked)
        {
            CategoryId = data.categoryId;
            _onClicked = onClicked;

            if (icon != null) icon.sprite = data.icon;
            GetComponent<Button>().onClick.AddListener(() => _onClicked?.Invoke(CategoryId));
            SetSelected(false);
        }

        public void SetSelected(bool selected)
        {
            if (selectedFrame != null) selectedFrame.SetActive(selected);
        }
    }
}

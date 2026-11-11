using System.Collections.Generic;
using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.UI
{
    // Palette top bar: one tab per item category, driven by IItemDatabase.
    public class CategoryTabBar : MonoBehaviour
    {
        [SerializeField] private GameObject tabButtonPrefab;
        [SerializeField] private Transform container;

        private readonly Dictionary<string, CategoryTabButton> _buttons = new Dictionary<string, CategoryTabButton>();
        private CategoryTabSelectionModel _model;
        private IEventBus _events;

        private void Awake()
        {
            _events = ServiceLocator.Get<IEventBus>();
            var categories = ServiceLocator.Get<IItemDatabase>().Categories;

            var ids = new List<string>(categories.Count);
            foreach (var category in categories)
            {
                var instance = Instantiate(tabButtonPrefab, container);
                var button = instance.GetComponent<CategoryTabButton>();
                if (button == null)
                {
                    Debug.LogError($"[UI] {tabButtonPrefab.name} has no CategoryTabButton component");
                    continue;
                }

                button.Init(category, OnTabClicked);
                _buttons[category.categoryId] = button;
                ids.Add(category.categoryId);
            }

            _model = new CategoryTabSelectionModel(ids);
            ApplySelection();
        }

        private void Start()
        {
            // Published in Start, not Awake, so siblings like PaletteGrid have already subscribed in their own Awake.
            if (_model.SelectedId != null)
                _events.Publish(new CategorySelectedEvent(_model.SelectedId));
        }

        private void OnTabClicked(string categoryId)
        {
            if (!_model.Select(categoryId)) return;
            ApplySelection();
            _events.Publish(new CategorySelectedEvent(categoryId));
        }

        private void ApplySelection()
        {
            foreach (var kv in _buttons)
                kv.Value.SetSelected(kv.Key == _model.SelectedId);
        }
    }
}

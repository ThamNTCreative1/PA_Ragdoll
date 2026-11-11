using System.Collections.Generic;
using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.UI
{
    // Palette grid for the selected category; cards are pooled, items come from IItemDatabase.
    public class PaletteGrid : MonoBehaviour
    {
        [SerializeField] private GameObject cardPrefab;
        [SerializeField] private Transform container;

        private readonly List<PaletteItemCard> _activeCards = new List<PaletteItemCard>();
        private PaletteGridModel _model;
        private IEventBus _events;
        private IObjectPoolService _pool;
        private IUnlockService _unlocks;
        private int _facing = ItemFacing.Right;

        private void Awake()
        {
            _events = ServiceLocator.Get<IEventBus>();
            _pool = ServiceLocator.Get<IObjectPoolService>();
            _model = new PaletteGridModel(ServiceLocator.Get<IItemDatabase>().All);
            _events.Subscribe<CategorySelectedEvent>(OnCategorySelected);
            _events.Subscribe<SwapRequestedEvent>(OnSwapRequested);
            _events.Subscribe<SpawnFacingChangedEvent>(OnSpawnFacingChanged);

            // Optional: scenes opened without the bootstrapper (and tests) just show everything.
            if (ServiceLocator.TryGet(out _unlocks)) _unlocks.Unlocked += OnItemUnlocked;
        }

        private void OnDestroy()
        {
            _events?.Unsubscribe<CategorySelectedEvent>(OnCategorySelected);
            _events?.Unsubscribe<SwapRequestedEvent>(OnSwapRequested);
            _events?.Unsubscribe<SpawnFacingChangedEvent>(OnSpawnFacingChanged);
            if (_unlocks != null) _unlocks.Unlocked -= OnItemUnlocked;
        }

        // Unlocks are rare, so a full re-populate is cheaper to reason about than patching one card.
        private void OnItemUnlocked(string itemId)
        {
            if (_model.CurrentCategoryId != null) Populate(_model.CurrentCategoryId);
        }

        private void OnCategorySelected(CategorySelectedEvent e) => Populate(e.CategoryId);

        // Toggles solid/background tile sheet; non-tile categories are unaffected.
        private void OnSwapRequested(SwapRequestedEvent e)
        {
            _model.ToggleTileMode();
            if (_model.CurrentCategoryId != null) Populate(_model.CurrentCategoryId);
        }

        // Mirrors thumbnails in place to preview drop facing; item set is unchanged so no re-populate.
        private void OnSpawnFacingChanged(SpawnFacingChangedEvent e)
        {
            _facing = ItemFacing.Sign(e.Facing);
            foreach (var card in _activeCards)
                card.SetFacing(_facing);
        }

        private void Populate(string categoryId)
        {
            foreach (var card in _activeCards)
                _pool.Release(cardPrefab, card.gameObject);
            _activeCards.Clear();

            var items = _model.SetCategory(categoryId);
            foreach (var item in items)
            {
                var instance = _pool.Get(cardPrefab, Vector3.zero, Quaternion.identity);
                instance.transform.SetParent(container, false);

                var card = instance.GetComponent<PaletteItemCard>();
                if (card == null)
                {
                    Debug.LogError($"[UI] {cardPrefab.name} has no PaletteItemCard component");
                    continue;
                }

                card.Init(item, _unlocks != null && !_unlocks.IsUnlocked(item), OnItemClicked);
                card.SetFacing(_facing);
                _activeCards.Add(card);
            }
        }

        private void OnItemClicked(string itemId)
        {
            // A locked card asks to be unlocked instead of selecting; selection state is untouched
            // so the player does not lose whatever they already had armed.
            if (_unlocks != null && !_unlocks.IsUnlocked(itemId))
            {
                _events.Publish(new ItemUnlockRequestedEvent(itemId));
                return;
            }

            if (!_model.SelectItem(itemId)) return;

            // Null SelectedItemId (toggle-deselect) disarms ItemSpawnTool since it resolves to nothing.
            foreach (var card in _activeCards)
                card.SetSelected(card.ItemId == _model.SelectedItemId);

            _events.Publish(new PaletteItemSelectedEvent(_model.SelectedItemId));
        }
    }
}

using System.Collections.Generic;
using System.Threading.Tasks;
using Game.Core;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace Game.UI
{
    public class UIService : IUIService
    {
        private const float RefWidth = 1920f;
        private const float RefHeight = 1080f;

        private readonly Dictionary<string, UIScreen> _screens = new Dictionary<string, UIScreen>();
        private IAssetService _assets;
        private IEventBus _events;
        private GameObject _canvasRoot;
        private Transform _screenParent;

        public Task InitializeAsync()
        {
            _assets = ServiceLocator.Get<IAssetService>();
            _events = ServiceLocator.Get<IEventBus>();
            CreateRootCanvas();
            EnsureEventSystem();
            return Task.FromResult(true);
        }

        public async Task ShowScreenAsync(string key)
        {
            if (!_screens.TryGetValue(key, out var screen))
            {
                var prefab = await _assets.LoadAsync<GameObject>(key);
                if (prefab == null) return;

                var instance = Object.Instantiate(prefab, _screenParent);
                screen = instance.GetComponent<UIScreen>();
                if (screen == null)
                {
                    Debug.LogError($"[UI] Prefab '{key}' has no UIScreen component");
                    Object.Destroy(instance);
                    return;
                }
                screen.Init(_events);
                _screens[key] = screen;
            }
            screen.Show();
        }

        public void HideScreen(string key)
        {
            if (_screens.TryGetValue(key, out var screen)) screen.Hide();
        }

        public bool IsScreenVisible(string key)
            => _screens.TryGetValue(key, out var screen) && screen.IsVisible;

        private void CreateRootCanvas()
        {
            _canvasRoot = new GameObject("[UI]", typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
            Object.DontDestroyOnLoad(_canvasRoot);

            var canvas = _canvasRoot.GetComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 20; // screens cover the scene HUD canvas (order 0)

            var scaler = _canvasRoot.GetComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = new Vector2(RefWidth, RefHeight);
            scaler.matchWidthOrHeight = 0.5f;

            var safeArea = new GameObject("SafeArea", typeof(RectTransform), typeof(SafeAreaFitter));
            var rt = (RectTransform)safeArea.transform;
            rt.SetParent(_canvasRoot.transform, false);
            rt.anchorMin = Vector2.zero;
            rt.anchorMax = Vector2.one;
            rt.offsetMin = Vector2.zero;
            rt.offsetMax = Vector2.zero;
            _screenParent = rt;
        }

        private static void EnsureEventSystem()
        {
            if (Object.FindObjectOfType<EventSystem>() != null) return;
            var go = new GameObject("EventSystem", typeof(EventSystem), typeof(StandaloneInputModule));
            Object.DontDestroyOnLoad(go);
        }

        public void Tick(float deltaTime) { }

        public void Shutdown()
        {
            if (_canvasRoot != null) Object.Destroy(_canvasRoot);
            _screens.Clear();
        }
    }
}

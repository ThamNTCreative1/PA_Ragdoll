using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Game.Core
{
    public static class ServiceLocator
    {
        private static readonly Dictionary<Type, object> _services = new Dictionary<Type, object>();
        private static readonly List<IGameService> _tickOrder = new List<IGameService>();

        public static void Register<T>(T instance)
        {
            if (_services.ContainsKey(typeof(T)))
                throw new InvalidOperationException($"{typeof(T)} already registered.");

            _services[typeof(T)] = instance;
            if (instance is IGameService svc && !_tickOrder.Contains(svc))
                _tickOrder.Add(svc);
        }

        public static T Get<T>()
        {
            if (_services.TryGetValue(typeof(T), out var s)) return (T)s;
            // Not there yet: the bootstrap registers on demand (Awake order isn't guaranteed in Luna).
            Game.Gameplay.PlayableBootstrap.EnsureServices();
            if (_services.TryGetValue(typeof(T), out s)) return (T)s;
            throw new InvalidOperationException($"{typeof(T)} not registered. Check bootstrap order.");
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        public static bool TryGet<T>(out T service)
        {
            if (_services.TryGetValue(typeof(T), out var s)) { service = (T)s; return true; }
            Game.Gameplay.PlayableBootstrap.EnsureServices();
            if (_services.TryGetValue(typeof(T), out s)) { service = (T)s; return true; }
            service = default(T);
            return false;
        }

        public static async Task InitializeAllAsync()
        {
            foreach (var svc in _tickOrder)
                await svc.InitializeAsync();
        }

        public static void TickAll(float dt)
        {
            for (int i = 0; i < _tickOrder.Count; i++)
                _tickOrder[i].Tick(dt);
        }

        public static void Reset()
        {
            for (int i = _tickOrder.Count - 1; i >= 0; i--)
                _tickOrder[i].Shutdown();
            _services.Clear();
            _tickOrder.Clear();
        }
    }
}

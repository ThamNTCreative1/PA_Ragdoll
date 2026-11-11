using System;
using System.Collections.Generic;

namespace Game.Core
{
    public class EventBus : IEventBus
    {
        private readonly Dictionary<Type, Delegate> _handlers = new Dictionary<Type, Delegate>();

        public void Subscribe<T>(Action<T> handler)
        {
            _handlers.TryGetValue(typeof(T), out var existing);
            _handlers[typeof(T)] = Delegate.Combine(existing, handler);
        }

        public void Unsubscribe<T>(Action<T> handler)
        {
            if (!_handlers.TryGetValue(typeof(T), out var existing)) return;
            var remaining = Delegate.Remove(existing, handler);
            if (remaining == null) _handlers.Remove(typeof(T));
            else _handlers[typeof(T)] = remaining;
        }

        public void Publish<T>(T evt)
        {
            if (_handlers.TryGetValue(typeof(T), out var d))
                ((Action<T>)d).Invoke(evt);
        }
    }
}

using System.Collections.Generic;

namespace Game.Core
{
    // Per-clip rate limit so many identical sounds firing in one step don't stack into a distorted lump.
    public class SfxThrottleModel
    {
        private readonly float _minInterval;
        private readonly Dictionary<int, float> _lastPlay = new Dictionary<int, float>();

        public SfxThrottleModel(float minInterval = 0.06f) => _minInterval = minInterval;

        // key is any stable id for the sound (the clip's instance id at runtime).
        public bool TryPlay(int key, float now)
        {
            if (_lastPlay.TryGetValue(key, out float last) && now - last < _minInterval) return false;
            _lastPlay[key] = now;
            return true;
        }
    }
}

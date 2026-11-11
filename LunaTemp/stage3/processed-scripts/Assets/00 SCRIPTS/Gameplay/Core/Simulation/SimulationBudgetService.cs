using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Game.Core
{
    // Per-frame simulation ledger: work runs only if granted budget.
    public class SimulationBudgetService : ISimulationBudget, IGameService
    {
        private const int MaxDeferredPerCategory = 64;
        private const int DrainPerFrame = 4;

        private readonly SimBudgetCaps _config;
        private readonly Dictionary<SimCategory, int> _scaledCaps = new Dictionary<SimCategory, int>();
        private readonly Dictionary<SimCategory, int> _usedThisFrame = new Dictionary<SimCategory, int>();
        private readonly Dictionary<SimCategory, Queue<Action>> _deferred = new Dictionary<SimCategory, Queue<Action>>();
        private readonly System.Diagnostics.Stopwatch _frameClock = new System.Diagnostics.Stopwatch();

        public DeviceTier CurrentTier { get; private set; } = DeviceTier.Mid;

        public SimulationBudgetService(SimBudgetCaps config)
        {
            _config = config;
            RebuildScaledCaps();
            _frameClock.Start();
        }

        public bool TryConsume(SimCategory category, int cost = 1)
        {
            // Frame time is king: hard stop regardless of category.
            if (_frameClock.Elapsed.TotalMilliseconds > _config.SimMsPerFrame)
                return false;

            _scaledCaps.TryGetValue(category, out var cap);
            _usedThisFrame.TryGetValue(category, out var used);
            if (used + cost > cap) return false;

            _usedThisFrame[category] = used + cost;
            return true;
        }

        public void Defer(SimCategory category, Action work)
        {
            if (!_deferred.TryGetValue(category, out var q))
                _deferred[category] = q = new Queue<Action>(MaxDeferredPerCategory);
            if (q.Count >= MaxDeferredPerCategory) return;
            q.Enqueue(work);
        }

        public void ResetFrame()
        {
            _usedThisFrame.Clear();
            _frameClock.Restart();
            DrainDeferred();
        }

        public void SetDeviceTier(DeviceTier tier)
        {
            CurrentTier = tier;
            RebuildScaledCaps();
        }

        private void RebuildScaledCaps()
        {
            float scale = (CurrentTier == DeviceTier.Low ? _config.TierScaleLow
                : CurrentTier == DeviceTier.High ? _config.TierScaleHigh
                : _config.TierScaleMid);
            _scaledCaps.Clear();
            foreach (var kv in _config.CapsPerFrame)
                _scaledCaps[kv.Key] = Math.Max(1, (int)(kv.Value * scale));
        }

        private void DrainDeferred()
        {
            foreach (var kv in _deferred)
            {
                int drained = 0;
                while (kv.Value.Count > 0 && drained < DrainPerFrame && TryConsume(kv.Key))
                {
                    kv.Value.Dequeue().Invoke();
                    drained++;
                }
            }
        }

        public Task InitializeAsync() => Task.FromResult(true);
        public void Tick(float dt) => ResetFrame();
        public void Shutdown() => _deferred.Clear();
    }
}

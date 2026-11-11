using System;

namespace Game.Core
{
    public interface ISimulationBudget
    {
        bool TryConsume(SimCategory category, int cost = 1);
        void Defer(SimCategory category, Action work);
        void ResetFrame();
        void SetDeviceTier(DeviceTier tier);
        DeviceTier CurrentTier { get; }
    }
}

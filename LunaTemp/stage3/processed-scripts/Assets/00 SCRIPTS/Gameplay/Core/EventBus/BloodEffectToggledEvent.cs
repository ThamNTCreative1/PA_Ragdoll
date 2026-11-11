namespace Game.Core
{
    public struct BloodEffectToggledEvent
    {
        public readonly bool IsEnabled;
        public BloodEffectToggledEvent(bool isEnabled) => IsEnabled = isEnabled;
    }
}

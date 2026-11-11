namespace Game.Core
{
    public struct SoundToggledEvent
    {
        public readonly bool IsEnabled;
        public SoundToggledEvent(bool isEnabled) => IsEnabled = isEnabled;
    }
}

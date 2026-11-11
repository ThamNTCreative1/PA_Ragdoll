namespace Game.Core
{
    public struct DeleteModeToggledEvent
    {
        public readonly bool IsEnabled;
        public DeleteModeToggledEvent(bool isEnabled) => IsEnabled = isEnabled;
    }
}

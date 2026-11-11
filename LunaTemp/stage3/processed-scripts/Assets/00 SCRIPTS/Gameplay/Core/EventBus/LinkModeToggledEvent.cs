namespace Game.Core
{
    // Arms the link tool; mutually exclusive with delete mode.
    public struct LinkModeToggledEvent
    {
        public readonly bool IsEnabled;
        public LinkModeToggledEvent(bool isEnabled) => IsEnabled = isEnabled;
    }
}

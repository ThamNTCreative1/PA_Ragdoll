namespace Game.Core
{
    public struct PanelCollapsedEvent
    {
        public readonly bool IsCollapsed;
        public PanelCollapsedEvent(bool isCollapsed) => IsCollapsed = isCollapsed;
    }
}

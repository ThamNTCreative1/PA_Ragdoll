namespace Game.Core
{
    // Published when zoom changes from a non-slider source, so the UI slider can stay in sync.
    public struct CameraZoomChangedEvent
    {
        public readonly float Normalized; // 0 = farthest out, 1 = closest in
        public CameraZoomChangedEvent(float normalized) => Normalized = normalized;
    }
}

namespace Game.Core
{
    // Requests a one-shot camera shake; the camera keeps whichever active shake is strongest rather than stacking them.
    public struct CameraShakeEvent
    {
        public readonly float Amplitude;
        public readonly float Duration;

        public CameraShakeEvent(float amplitude, float duration)
        {
            Amplitude = amplitude;
            Duration = duration;
        }
    }
}

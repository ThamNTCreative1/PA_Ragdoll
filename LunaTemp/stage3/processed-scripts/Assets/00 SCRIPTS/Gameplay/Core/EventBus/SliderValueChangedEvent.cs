namespace Game.Core
{
    public struct SliderValueChangedEvent
    {
        public readonly float NormalizedValue;
        public SliderValueChangedEvent(float normalizedValue) => NormalizedValue = normalizedValue;
    }
}

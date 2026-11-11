namespace Game.Gameplay
{
    // Pure zoom state, clamped by scroll steps or an absolute normalized value. No Unity deps, EditMode-testable.
    public class CameraZoomModel
    {
        public float Min { get; }
        public float Max { get; }
        public float Size { get; private set; }

        public CameraZoomModel(float min, float max, float initial)
        {
            Min = min < max ? min : max;
            Max = max > min ? max : min;
            Size = Clamp(initial);
        }

        // Multiplicative steps feel uniform across the range; positive steps zoom in (smaller size).
        public float ApplyScrollSteps(int steps, float stepFactor)
        {
            if (stepFactor > 0f)
                for (int i = 0; i < (steps < 0 ? -steps : steps); i++)
                    Size = steps > 0 ? Size / stepFactor : Size * stepFactor;
            Size = Clamp(Size);
            return Size;
        }

        // Continuous version of ApplyScrollSteps: ratio < 1 zooms in, ratio > 1 zooms out.
        public float ApplyMultiplier(float ratio)
        {
            Size = Clamp(Size * ratio);
            return Size;
        }

        // Slider top (1) = closest zoom, bottom (0) = farthest.
        public float ApplyNormalized(float normalized)
        {
            if (normalized < 0f) normalized = 0f;
            if (normalized > 1f) normalized = 1f;
            Size = Max + (Min - Max) * normalized;
            return Size;
        }

        // Where the current size sits on the slider's axis: 0 = farthest (Max), 1 = closest (Min).
        public float Normalized => Max > Min ? (Max - Size) / (Max - Min) : 1f;

        // Snaps back to a known size (world reset) without going through scroll/slider math.
        public float ResetTo(float value)
        {
            Size = Clamp(value);
            return Size;
        }

        private float Clamp(float value) => value < Min ? Min : value > Max ? Max : value;
    }
}

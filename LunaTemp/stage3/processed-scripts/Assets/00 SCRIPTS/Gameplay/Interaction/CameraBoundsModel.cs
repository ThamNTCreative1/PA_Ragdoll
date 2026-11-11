namespace Game.Gameplay
{
    // Pure map-bounds state for the camera; no Unity deps, EditMode-testable.
    public class CameraBoundsModel
    {
        public bool HasBounds { get; private set; }
        public float MinX { get; private set; }
        public float MinY { get; private set; }
        public float MaxX { get; private set; }
        public float MaxY { get; private set; }

        public float CenterX => (MinX + MaxX) * 0.5f;
        public float CenterY => (MinY + MaxY) * 0.5f;

        public void Set(float minX, float minY, float maxX, float maxY)
        {
            MinX = minX < maxX ? minX : maxX;
            MaxX = maxX > minX ? maxX : minX;
            MinY = minY < maxY ? minY : maxY;
            MaxY = maxY > minY ? maxY : minY;
            HasBounds = true;
        }

        public void Clear() => HasBounds = false;

        // Largest ortho size whose viewport still fits entirely inside the map (limiting axis wins).
        public float CoverOrthoSize(float aspect)
        {
            if (aspect <= 0f) aspect = 1f;
            float byHeight = (MaxY - MinY) * 0.5f;
            float byWidth = (MaxX - MinX) * 0.5f / aspect;
            return byHeight < byWidth ? byHeight : byWidth;
        }

        // Zoom-out stops once the viewport fills the map, but never below minSize.
        public float ClampOrthoSize(float size, float aspect, float minSize)
        {
            if (!HasBounds) return size;
            float cap = CoverOrthoSize(aspect);
            if (cap < minSize) cap = minSize;
            return size > cap ? cap : size;
        }

        // Keeps the viewport rect inside the map; an axis the viewport outgrows centers instead.
        public (float x, float y) ClampCenter(float x, float y, float orthoSize, float aspect)
        {
            if (!HasBounds) return (x, y);
            return (ClampAxis(x, MinX, MaxX, orthoSize * aspect),
                    ClampAxis(y, MinY, MaxY, orthoSize));
        }

        // Progressive resistance past the hard edge, approaching `slack` asymptotically.
        public static float RubberBand(float overshoot, float slack)
        {
            if (slack <= 0f || overshoot <= 0f) return 0f;
            return slack * (1f - slack / (overshoot + slack));
        }

        // Clamp with give: view may be dragged past the edge up to `slack`, springs back via ClampCenter.
        public (float x, float y) ClampCenterElastic(
            float x, float y, float orthoSize, float aspect, float slackX, float slackY)
        {
            if (!HasBounds) return (x, y);
            var (hardX, hardY) = ClampCenter(x, y, orthoSize, aspect);
            return (ApplyGive(x, hardX, slackX), ApplyGive(y, hardY, slackY));
        }

        private static float ApplyGive(float raw, float clamped, float slack)
        {
            float delta = raw - clamped;
            if (delta > 0f) return clamped + RubberBand(delta, slack);
            if (delta < 0f) return clamped - RubberBand(-delta, slack);
            return clamped;
        }

        private static float ClampAxis(float value, float min, float max, float halfView)
        {
            if (max - min <= halfView * 2f) return (min + max) * 0.5f;
            float lo = min + halfView;
            float hi = max - halfView;
            return value < lo ? lo : value > hi ? hi : value;
        }
    }
}

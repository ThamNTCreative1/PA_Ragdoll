namespace Game.Core
{
    // Carries the spawned map's world-space play area so the camera can bound and center itself,
    // plus the opening view the map authored — HasStartView false means "frame the middle".
    public struct MapSpawnedEvent
    {
        public readonly float MinX;
        public readonly float MinY;
        public readonly float MaxX;
        public readonly float MaxY;

        public readonly bool HasStartView;
        public readonly float StartX;
        public readonly float StartY;
        // Fully-out (0) to closest-in (1), the same axis the zoom slider runs on.
        public readonly float StartZoom;

        public MapSpawnedEvent(float minX, float minY, float maxX, float maxY,
                               bool hasStartView = false, float startX = 0f, float startY = 0f,
                               float startZoom = 0f)
        {
            MinX = minX;
            MinY = minY;
            MaxX = maxX;
            MaxY = maxY;
            HasStartView = hasStartView;
            StartX = startX;
            StartY = startY;
            StartZoom = startZoom;
        }
    }
}

namespace Game.Core
{
    // Which way newly spawned items face: +1 right, -1 left.
    public struct SpawnFacingChangedEvent
    {
        public readonly int Facing;
        public SpawnFacingChangedEvent(int facing) => Facing = facing;
    }
}

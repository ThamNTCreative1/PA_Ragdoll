namespace Game.Gameplay
{
    // Plain positional data handed to behaviors — no live component reference, keeps Tick() pure/testable.
    public struct CreatureSnapshot
    {
        public readonly float PositionX;
        public readonly float PositionY;
        public readonly bool IsInfectable;

        public CreatureSnapshot(float positionX, float positionY, bool isInfectable)
        {
            PositionX = positionX;
            PositionY = positionY;
            IsInfectable = isInfectable;
        }
    }
}

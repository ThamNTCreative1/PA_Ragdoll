namespace Game.Core
{
    public struct CreatureInfectedEvent
    {
        public readonly int InstanceId;
        public CreatureInfectedEvent(int instanceId) => InstanceId = instanceId;
    }
}

using Game.Data;

namespace Game.Gameplay
{
    // The single place that maps data (CreatureBehaviorKind) to a strategy — everything else stays polymorphic.
    public static class CreatureBehaviorFactory
    {
        private static readonly ICreatureBehavior Chase = new ChaseBehavior();
        private static readonly ICreatureBehavior Stay = new StayBehavior();

        public static ICreatureBehavior Get(CreatureBehaviorKind kind) => (kind == CreatureBehaviorKind.Chase ? Chase
            : Stay);
    }
}

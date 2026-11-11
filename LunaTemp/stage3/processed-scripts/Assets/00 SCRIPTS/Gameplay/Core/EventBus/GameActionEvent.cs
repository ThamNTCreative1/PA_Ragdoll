namespace Game.Core
{
    // The verbs a task can be built from. A task reads as noun + verb + noun: a subject item, the
    // verb, and — for transitive verbs — a target item.
    public enum TaskVerb
    {
        // Intransitive: subject only.
        Spawn = 0,
        Destroy = 1,
        // Subject is the creature it happened TO — "cure 20 zombies" names the zombie, not the potion,
        // and CreatureAgent.ApplyEffect has no idea which item sent the effect anyway.
        Cure = 6,
        Infect = 7,
        // Subject is the victim. Nothing in the damage pipeline carries who dealt the blow —
        // IDamageable.TakeDamage takes an amount and FragmentImpact is pure geometry — so a killer
        // noun cannot be filled in honestly without threading attribution through every source.
        Kill = 9,
        // Both come from CreatureEffectKind.Grow — its magnitude is a scale multiplier, so >1 grows
        // and <1 shrinks. Split here because "grow a creature" must not be satisfied by shrinking it.
        Grow = 10,
        Shrink = 11,

        // Nounless: no item on either side. Reported once per minute of play, so a condition's
        // requiredCount reads directly as minutes.
        PlayTime = 12,

        // Transitive: subject acts on a target.
        Equip = 2,    // weapon  -> creature
        Wear = 3,     // wearable -> creature
        Link = 4,     // anything -> anything
        Interact = 5, // anything -> anything, everything else
        Feed = 8,     // food prop -> creature that ate it
    }

    // Something happened in the world that a task might care about. Carries item ids rather than
    // ItemSO assets so Game.Core does not have to reference Game.Data — the task service resolves
    // them back through IItemDatabase.
    public struct GameActionEvent
    {
        public readonly TaskVerb Verb;
        public readonly string SubjectId;
        // Null for intransitive verbs.
        public readonly string TargetId;

        public GameActionEvent(TaskVerb verb, string subjectId, string targetId = null)
        {
            Verb = verb;
            SubjectId = subjectId;
            TargetId = targetId;
        }
    }
}

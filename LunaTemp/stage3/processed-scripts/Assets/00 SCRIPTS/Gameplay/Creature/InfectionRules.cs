using Game.Data;

namespace Game.Gameplay
{
    // Pure infection rules: zombies infect normals that are infectable and have an infectedForm.
    public static class InfectionRules
    {
        public static bool CanBeInfected(ItemSO victim)
            => victim != null
               && victim.type == ItemType.Creature
               && victim.creature.type == CreatureType.Normal
               && victim.creature.infectable
               && victim.creature.infectedForm != null;

        public static bool ShouldInfect(ItemSO attacker, ItemSO victim)
            => attacker != null
               && attacker.type == ItemType.Creature
               && attacker.creature.type == CreatureType.Zombie
               && CanBeInfected(victim);
    }
}

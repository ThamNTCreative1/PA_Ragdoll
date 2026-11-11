using System;
using UnityEngine;

namespace Game.Data
{
    // What an effect does to a creature; potions, flasks and prop bursts all resolve to a list of these.
    public enum CreatureEffectKind
    {
        Heal,    // magnitude = hit points restored, capped at maxHealth
        Damage,  // magnitude = hit points removed, can kill
        Grow,    // magnitude = scale multiplier; 1.5 is half again as big, 0.5 is half size
        Speed,   // magnitude = walk speed multiplier
        Cure,    // a zombie reverts to its curedForm; magnitude unused
        Infect,  // a normal turns into its infectedForm; magnitude unused
        Stun,    // goes limp for the duration; magnitude unused
    }

    [Serializable]
    public class CreatureEffect
    {
        public CreatureEffectKind kind = CreatureEffectKind.Heal;

        [Tooltip("Meaning depends on kind — hit points for Heal/Damage, a multiplier for Grow/Speed, unused otherwise.")]
        public float magnitude = 10f;

        [Tooltip("Seconds the effect lasts; 0 applies once and sticks.")]
        public float duration;

        public bool IsTimed => duration > 0f;
    }
}

using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // The splash a creature throws off when hit, aimed at the hit direction and tinted per-creature.
    public static class BloodEffectSpawner
    {
        // How long an effect with no ParticleSystem to measure is given before it is cleaned up.
        private const float DefaultLifetime = 2f;

        // Single source of truth for the corner menu's blood toggle.
        public static bool Enabled { get; set; } = true;

        public static void Play(Vector2 position, Vector2 direction, Color color)
        {
            if (!Enabled) return;
            if (!ServiceLocator.TryGet<GameConfigSO>(out var config) || config.bloodEffect == null) return;

            Vector3 aim = direction.sqrMagnitude > 0.0001f ? (Vector3)direction.normalized : Vector3.right;
            var rotation = Quaternion.FromToRotation(Vector3.forward, aim);

            // Pooled: blood fires on every hit and was the single most frequent allocation in a firefight.
            EffectPool.Play(config.bloodEffect, position, rotation, 1f, null, Gradient(color));
        }

        // A light tint of the blood color, not pure white — reads as wet rather than a bright flash.
        private const float HighlightWhiteness = 0.35f;

        private static ParticleSystem.MinMaxGradient Gradient(Color color)
            => new ParticleSystem.MinMaxGradient(Color.Lerp(color, Color.white, HighlightWhiteness), color)
            {
                mode = ParticleSystemGradientMode.TwoColors,
            };
    }
}

using System;
using System.Collections.Generic;
using Game.Data;

namespace Game.Gameplay
{
    // Normal creature default: pick a new random direction every couple of seconds.
    public class WanderBehavior : ICreatureBehavior
    {
        private const float MinInterval = 1.5f;
        private const float MaxInterval = 3.5f;

        public float Tick(float selfX, float selfY, CreatureStats self, IReadOnlyList<CreatureSnapshot> neighbors, ref CreatureAiState state, float deltaTime, Random rng)
        {
            state.WanderTimer -= deltaTime;
            if (state.WanderTimer <= 0f)
            {
                state.CurrentDirection = rng.Next(-1, 2); // -1, 0, or 1
                state.WanderTimer = (float)(MinInterval + rng.NextDouble() * (MaxInterval - MinInterval));
            }
            return state.CurrentDirection;
        }
    }
}

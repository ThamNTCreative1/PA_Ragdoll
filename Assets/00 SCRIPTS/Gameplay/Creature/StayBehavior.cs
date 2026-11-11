using System;
using System.Collections.Generic;
using Game.Data;

namespace Game.Gameplay
{
    // Holds ground completely — used by creatures that don't move on their own (e.g. Normal).
    public class StayBehavior : ICreatureBehavior
    {
        public float Tick(float selfX, float selfY, CreatureStats self, IReadOnlyList<CreatureSnapshot> neighbors, ref CreatureAiState state, float deltaTime, Random rng)
        {
            state.CurrentDirection = 0f;
            return 0f;
        }
    }
}

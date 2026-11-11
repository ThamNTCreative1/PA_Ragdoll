using System;
using System.Collections.Generic;
using Game.Data;

namespace Game.Gameplay
{
    // Pure decision strategy: no MonoBehaviour/GameObject refs, so it's testable with plain data.
    public interface ICreatureBehavior
    {
        // Desired horizontal direction (-1, 0, or 1); selfY lets behaviors treat elevated targets differently.
        float Tick(float selfX, float selfY, CreatureStats self, IReadOnlyList<CreatureSnapshot> neighbors, ref CreatureAiState state, float deltaTime, Random rng);
    }
}

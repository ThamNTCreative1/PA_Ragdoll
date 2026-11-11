using System;
using System.Collections.Generic;
using Game.Data;

namespace Game.Gameplay
{
    // Chase the nearest infectable neighbor; hold at a standoff below elevated prey.
    public class ChaseBehavior : ICreatureBehavior
    {
        // Torso-to-torso height above which prey counts as elevated.
        private const float ElevatedPreyHeight = 1.5f;
        // How close, horizontally, the zombie gets to elevated prey before holding its ground.
        private const float StandoffDistance = 1.2f;

        public float Tick(float selfX, float selfY, CreatureStats self, IReadOnlyList<CreatureSnapshot> neighbors, ref CreatureAiState state, float deltaTime, Random rng)
        {
            // Sight is a plain circle; occlusion is checked separately by the agent against solid tiles.
            float rangeSqr = self.detectionRadius * self.detectionRadius;

            float bestSqr = float.MaxValue;
            float? targetX = null;
            float targetY = 0f;

            for (int i = 0; i < neighbors.Count; i++)
            {
                var neighbor = neighbors[i];
                if (!neighbor.IsInfectable) continue;

                float dx = neighbor.PositionX - selfX;
                float dy = neighbor.PositionY - selfY;
                float sqr = dx * dx + dy * dy;
                if (sqr > rangeSqr || sqr >= bestSqr) continue;

                bestSqr = sqr;
                targetX = neighbor.PositionX;
                targetY = neighbor.PositionY;
            }

            if (!targetX.HasValue)
            {
                state.HasTarget = false;
                state.CurrentDirection = 0f;
                return 0f;
            }

            state.HasTarget = true;
            state.TargetX = targetX.Value;
            state.TargetY = targetY;

            float horizontalDist = Math.Abs(targetX.Value - selfX);
            bool holdAtStandoff = targetY - selfY > ElevatedPreyHeight && horizontalDist <= StandoffDistance;
            state.CurrentDirection = holdAtStandoff ? 0f : Math.Sign(targetX.Value - selfX);
            return state.CurrentDirection;
        }
    }
}

using System;
using System.Collections.Generic;
using Game.Core;

namespace Game.Data
{
    [Serializable]
    public class FrameBudgetConfig
    {
        [Serializable]
        public struct CategoryCap
        {
            public SimCategory category;
            public int capPerFrame;
        }

        public float simMsPerFrame = 8f;
        public float tierScaleLow = 0.5f;
        public float tierScaleMid = 1f;
        public float tierScaleHigh = 1.5f;

        public CategoryCap[] categoryCaps =
        {
            new CategoryCap { category = SimCategory.RagdollPhysics, capPerFrame = 12 },
            new CategoryCap { category = SimCategory.TileDestruction, capPerFrame = 24 },
            new CategoryCap { category = SimCategory.ParticleSpawn, capPerFrame = 16 },
            new CategoryCap { category = SimCategory.AIThink, capPerFrame = 8 },
            new CategoryCap { category = SimCategory.MeshRebuild, capPerFrame = 2 }
        };

        public SimBudgetCaps ToCaps()
        {
            var caps = new SimBudgetCaps
            {
                SimMsPerFrame = simMsPerFrame,
                TierScaleLow = tierScaleLow,
                TierScaleMid = tierScaleMid,
                TierScaleHigh = tierScaleHigh,
                CapsPerFrame = new Dictionary<SimCategory, int>()
            };
            foreach (var c in categoryCaps)
                caps.CapsPerFrame[c.category] = c.capPerFrame;
            return caps;
        }
    }
}

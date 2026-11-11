using System.Collections.Generic;

namespace Game.Core
{
    // Plain caps container so Core stays independent of the Data assembly.
    public class SimBudgetCaps
    {
        public float SimMsPerFrame = 8f;
        public Dictionary<SimCategory, int> CapsPerFrame = new Dictionary<SimCategory, int>();
        public float TierScaleLow = 0.5f;
        public float TierScaleMid = 1f;
        public float TierScaleHigh = 1.5f;
    }
}

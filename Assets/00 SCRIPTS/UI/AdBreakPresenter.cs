using System;
using Game.Core;

namespace Game.UI
{
    public class AdBreakPresenter : IAdBreakPresenter
    {
        public void Present(float seconds, Action onComplete) => AdBreakScreen.Show(seconds, onComplete);
    }
}

using System;

namespace Game.Core
{
    // Shows the pre-roll countdown. Implemented in Game.UI and registered by the bootstrapper, so
    // the services layer can ask for a countdown without referencing the UI assembly.
    public interface IAdBreakPresenter
    {
        void Present(float seconds, Action onComplete);
    }
}

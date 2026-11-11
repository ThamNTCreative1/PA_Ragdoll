using UnityEngine;

namespace Game.Core
{
    // Raised once the world is up and the loading screen is gone. The ad SDKs watch this so their
    // initialization does not compete with the load for the main thread — they are already async,
    // but async is not free when everything shares one thread.
    public static class GameBootSignal
    {
        public static bool IsReady { get; private set; }

        public static void MarkReady() => IsReady = true;

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        public static void Reset() => IsReady = false;
    }
}

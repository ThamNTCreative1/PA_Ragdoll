using UnityEngine;

namespace MelonAd
{
    /// <summary>Single entry point for all Luna Playworks SDK calls.</summary>
    public static class LunaBridge
    {
        static bool ended;

        /// <summary>Equivalent of api.playableFinished() in the original. Called once.</summary>
        public static void GameEnded()
        {
            if (ended) return;
            ended = true;
            Debug.Log("[Luna] GameEnded");
            Luna.Unity.LifeCycle.GameEnded();
        }

        /// <summary>CTA / store redirect.</summary>
        public static void InstallFullGame()
        {
            Debug.Log("[Luna] InstallFullGame");
            GameConfig c = GameConfig.I;
            if (c != null && (!string.IsNullOrEmpty(c.iosLink) || !string.IsNullOrEmpty(c.androidLink)))
                Luna.Unity.Playable.InstallFullGame(c.iosLink, c.androidLink);
            else
                Luna.Unity.Playable.InstallFullGame();
        }

        public static void Event(string name, int value)
        {
            Luna.Unity.Analytics.LogEvent(name, value);
        }
    }
}

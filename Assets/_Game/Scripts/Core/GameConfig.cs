using UnityEngine;

namespace MelonAd
{
    /// <summary>
    /// Gameplay tunables (Inspector only). Only the Tutorial toggle is exposed to Luna Playground.
    /// Defaults mirror the original HTML playable.
    /// </summary>
    public class GameConfig : MonoBehaviour
    {
        public static GameConfig I;

        public int retries = 1;

        public float failPopupDelay = 1.5f;

        public float rifleInterval = 0.05f;

        public float rifleBurstAfterPin = 1.6f;

        public float flameRate = 60f;

        public float pinTapRadius = 0.35f;

        [LunaPlaygroundField("Show tutorial fingers", 6, "Tutorial")]
        public bool showTutorial = true;

        public string iosLink = "";

        public string androidLink = "";

        void Awake()
        {
            I = this;
        }
    }
}

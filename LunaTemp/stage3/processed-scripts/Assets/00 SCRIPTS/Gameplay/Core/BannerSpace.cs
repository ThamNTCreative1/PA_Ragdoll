using System;
using UnityEngine;

namespace Game.Core
{
    // The screen strip the banner occupies, published once so the UI can keep clear of it. The world
    // deliberately still renders underneath: handing the camera that strip letterboxes the game and
    // looks far worse than a banner floating over open sky. Sampled by BannerAdDirector rather than
    // polled here, because measuring a banner crosses into the SDK.
    public static class BannerSpace
    {
        // A banner that claimed more than this would be a bad measurement, not a real ad.
        private const float MaxScreenFraction = 0.25f;

        private static float _heightPixels;

        public static event Action Changed;

        private static bool _warnedOversized;

        // What the SDK reported, unfiltered. Diagnostics only.
        public static float MeasuredHeightPixels => _heightPixels;

        public static float HeightFraction
        {
            get
            {
                if (Screen.height <= 0) return 0f;
                return Mathf.Clamp(_heightPixels / Screen.height, 0f, MaxScreenFraction);
            }
        }

        // What layout must use. A creative that reports an absurd height would otherwise push the
        // HUD off the screen entirely, so no caller ever gets the raw number.
        public static float HeightPixels => HeightFraction * Screen.height;

        public static void Set(float pixels)
        {
            float measured = Mathf.Max(0f, pixels);
            if (Mathf.Approximately(measured, _heightPixels)) return;
            _heightPixels = measured;

            if (Screen.height > 0 && measured > Screen.height * MaxScreenFraction)
            {
                if (!_warnedOversized)
                {
                    _warnedOversized = true;
                    Debug.LogWarning($"[Ads] Banner reported {measured}px on a {Screen.height}px screen " +
                                     $"({measured / Screen.height:P0}); clamped to {MaxScreenFraction:P0} for layout.");
                }
            }
            else
            {
                _warnedOversized = false;
            }

            Changed?.Invoke();
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        public static void Reset()
        {
            _heightPixels = 0f;
            _warnedOversized = false;
            Changed = null;
        }
    }
}

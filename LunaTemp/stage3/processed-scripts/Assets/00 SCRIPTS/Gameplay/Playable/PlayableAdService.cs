using System;
using Game.Core;

namespace Game.Gameplay
{
    // Stands in for the source game's HAVIGAME ad bridge. A playable has no ads: a rewarded unlock is
    // granted on the spot so the unlock popup flow plays out as in the full game, and interstitials,
    // banners and app-open never show.
    public class PlayableAdService : IAdService
    {
        public bool IsRewardedReady => true;
        public bool IsInterstitialReady => false;
        public bool CanShowInterstitial => false;
        public float InterstitialSessionBreakSeconds => 0f;
        public float InterstitialCountdownSeconds => 0f;

        public bool TryShowRewarded(string placement, Action onRewarded, Action onFailed = null)
        {
            onRewarded?.Invoke();
            return true;
        }

        public bool TryShowInterstitial(string placement, Action onClosed = null) => false;

        public bool CanShowBanner => false;
        public float BannerHeightPixels => 0f;
        public float BannerRefreshSeconds => 0f;
        public bool ShowTopBanners(bool recreate = false) => false;
        public void HideBanners() { }

        public bool IsFullScreenAdBusy => false;
        public bool TryShowAppOpen(string placement, Action onClosed = null) => false;
    }
}

using System;

namespace Game.Core
{
    // Game-side view of the ad stack. The implementation lives in Assembly-CSharp because HAVIGAME
    // ships without an asmdef and so cannot be referenced from any Game.* assembly; this interface
    // is the seam that lets the dependency point that way instead.
    public interface IAdService
    {
        bool IsRewardedReady { get; }

        bool IsInterstitialReady { get; }

        // False when the pacing rules currently forbid an interstitial, whatever the fill.
        bool CanShowInterstitial { get; }

        // Remote-config seconds of play without a map change, reset or rewarded ad before the
        // session-break interstitial is offered. Zero or less disables it.
        float InterstitialSessionBreakSeconds { get; }

        // Seconds of countdown shown before an interstitial. Zero or less shows it with no warning.
        float InterstitialCountdownSeconds { get; }

        // onRewarded runs ONLY when the reward is actually earned. Never grant from anywhere else.
        bool TryShowRewarded(string placement, Action onRewarded, Action onFailed = null);

        // Returns false when nothing was shown, in which case onClosed never fires.
        bool TryShowInterstitial(string placement, Action onClosed = null);

        // False when the entitlement, remote config or organic rules forbid banners entirely.
        bool CanShowBanner { get; }

        // Combined height in screen pixels of whatever banners are currently up; zero when none are.
        float BannerHeightPixels { get; }

        // Remote-config seconds between manual banner refreshes. Zero or less leaves it to the SDK.
        float BannerRefreshSeconds { get; }

        // Shows the top banner stack. Returns false when nothing at all could be shown. Pass
        // recreate to rebuild the banners, which is the only way to actually fetch new ones.
        bool ShowTopBanners(bool recreate = false);

        void HideBanners();

        // True when a fullscreen ad is on screen. Resume fires when returning from one, so an
        // app-open must never be shown on the way back from a rewarded or interstitial.
        bool IsFullScreenAdBusy { get; }

        // Returns false when nothing was shown, in which case onClosed never fires.
        bool TryShowAppOpen(string placement, Action onClosed = null);
    }
}

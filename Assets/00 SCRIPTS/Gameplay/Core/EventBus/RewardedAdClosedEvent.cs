namespace Game.Core
{
    // Raised when a rewarded ad actually closes (earned or skipped), from the one place every
    // rewarded show goes through. Anchored at close, not open: the spec's "no interstitial within
    // 90s of a rewarded ad" and the 120s session-break reset both need to count from when the player
    // is actually back in gameplay, not from when the video started.
    public struct RewardedAdClosedEvent
    {
        public string Placement { get; }

        public RewardedAdClosedEvent(string placement) => Placement = placement;
    }
}

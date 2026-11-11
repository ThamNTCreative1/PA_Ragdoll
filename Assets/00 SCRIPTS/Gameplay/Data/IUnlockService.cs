using System;

namespace Game.Data
{
    // Owns which items the player has earned. Items with ItemUnlockMode.Free are always unlocked
    // and never stored, so the save only ever grows by the number of items actually gated.
    public interface IUnlockService
    {
        bool IsUnlocked(ItemSO item);
        bool IsUnlocked(string itemId);

        // Whether the item can be worked toward yet — its prerequisite chain is satisfied. An
        // unavailable item accrues no task progress and cannot be bought with an ad.
        bool IsAvailable(ItemSO item);

        // Progress toward the item's requirement — ads watched, or task completions.
        int ProgressOf(string itemId);

        // What the player is shown. Identical to ProgressOf/RequiredCount for ordinary items, but a
        // Completion item reports how many OTHER goals are done — "37 / 40" rather than a private
        // 0-or-1 counter that would tell them nothing.
        int DisplayProgress(ItemSO item);
        int DisplayRequired(ItemSO item);

        // Adds progress, unlocking when the requirement is met. True only on the step that unlocks.
        bool AddProgress(string itemId, int amount = 1);

        // Unlocks outright regardless of progress; for IAP entitlements and debug tools.
        void Grant(string itemId);

        // Wipes all progress back to a fresh install. Debug/QA only.
        void ResetAll();

        // Raised with the itemId the moment it becomes unlocked.
        event Action<string> Unlocked;
    }
}

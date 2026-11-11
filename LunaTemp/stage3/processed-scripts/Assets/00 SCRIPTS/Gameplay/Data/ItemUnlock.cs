using System;
using UnityEngine;

namespace Game.Data
{
    public enum ItemUnlockMode
    {
        // Available from the first launch; the item never draws a lock and costs nothing to check.
        Free = 0,
        // Earned by doing something in-game — the objective system reports progress against taskId.
        Task = 1,
        // Earned by watching rewarded video.
        RewardedAd = 2,
        // The completionist reward: granted once every other goal is unlocked. Derived rather than
        // authored, so adding an item automatically raises the bar instead of leaving a stale count.
        Completion = 3,
    }

    // How an item is earned. Task and RewardedAd both end at IUnlockService.Grant and share the
    // same progress counter; they differ only in who is allowed to add to it.
    [Serializable]
    public class ItemUnlock
    {
        public ItemUnlockMode mode = ItemUnlockMode.Free;

        [Tooltip("Must be unlocked before this one can be earned at all. Leave empty for no gate.")]
        public ItemSO prerequisite;

        [Tooltip("Line shown on the unlock prompt. Leave empty for a Task and it writes itself from the condition below.")]
        public string requirementText;

        public TaskCondition task = new TaskCondition();

        [Min(1)]
        [Tooltip("How many rewarded videos unlock this item.")]
        public int adsRequired = 1;

        [Tooltip("Rewarded placement id reported to analytics, e.g. reward_unlock_creature.")]
        public string adPlacement;

        public bool IsLockable => mode != ItemUnlockMode.Free;

        // One counter serves both modes, so the service never has to branch on mode to read state.
        public int RequiredCount => Mathf.Max(1, (mode == ItemUnlockMode.RewardedAd ? adsRequired
            : mode == ItemUnlockMode.Task ? (task?.requiredCount ?? 1)
            : 1));

        // Falls back to the generated sentence so a task's prompt cannot drift from what it checks.
        public string Prompt
        {
            get
            {
                if (!string.IsNullOrEmpty(requirementText)) return requirementText;
                if (mode == ItemUnlockMode.Completion) return "Unlock everything else first";
                return mode == ItemUnlockMode.Task && task != null ? task.Describe() : string.Empty;
            }
        }
    }
}

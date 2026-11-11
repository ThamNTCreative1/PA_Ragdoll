using System;
using Game.Core;
using UnityEngine;

namespace Game.Data
{
    // One authored task: noun + verb + noun, plus how many times.
    //
    //   subject          verb    target          count
    //   [Creature]       Spawn   —               x5      "Spawn 5 Creatures"
    //   [Wearable]       Wear    [Creature]      x3      "Wear 3 Wearables on Creatures"
    //   [id: barrel]     Link    [Any]           x2      "Link 2 barrel to items"
    //
    // The target half only exists for transitive verbs, and the inspector hides it otherwise.
    [Serializable]
    public class TaskCondition
    {
        public TaskVerb verb = TaskVerb.Spawn;

        public ItemFilter subject = new ItemFilter();

        public ItemFilter target = new ItemFilter();

        [Min(1)]
        [Tooltip("For PlayTime this is minutes; for everything else, how many times it must happen.")]
        public int requiredCount = 1;

        public bool UsesTarget => IsTransitive(verb);
        public bool UsesNouns => !IsNounless(verb);

        public static bool IsTransitive(TaskVerb verb)
            => verb == TaskVerb.Equip || verb == TaskVerb.Wear || verb == TaskVerb.Link || verb == TaskVerb.Interact || verb == TaskVerb.Feed;

        // Verbs about the session itself rather than about any item.
        public static bool IsNounless(TaskVerb verb) => verb is TaskVerb.PlayTime;

        // A reported action counts when the verb matches and both nouns match. An intransitive verb
        // ignores whatever target was reported rather than failing on it.
        public bool Matches(TaskVerb reportedVerb, ItemSO subjectItem, ItemSO targetItem)
        {
            if (reportedVerb != verb) return false;
            // Nothing to compare — the verb alone is the whole condition.
            if (IsNounless(verb)) return true;
            if (!subject.Matches(subjectItem)) return false;
            return !UsesTarget || target.Matches(targetItem);
        }

        // The art behind each noun, for prompts that want to show what to act on rather than name
        // it. Null whenever the filter describes a set instead of one thing — see ItemFilter.Icon.
        public Sprite SubjectIcon => UsesNouns ? subject.Icon : null;

        public Sprite TargetIcon => UsesTarget ? target.Icon : null;

        // Generated so the unlock prompt cannot drift from what the condition actually checks.
        public string Describe()
        {
            if (verb == TaskVerb.PlayTime)
                return $"Play for {requiredCount} {(requiredCount == 1 ? "minute" : "minutes")}";

            string head = $"{Word(verb)} {requiredCount} {subject.Describe(requiredCount)}";
            return UsesTarget ? $"{head} {Preposition(verb)} {target.Describe(2)}" : head;
        }

        private static string Word(TaskVerb verb) => (verb == TaskVerb.Spawn ? "Spawn"
            : verb == TaskVerb.Destroy ? "Destroy"
            : verb == TaskVerb.Equip ? "Equip"
            : verb == TaskVerb.Wear ? "Put"
            : verb == TaskVerb.Link ? "Link"
            : verb == TaskVerb.Cure ? "Cure"
            : verb == TaskVerb.Infect ? "Infect"
            : verb == TaskVerb.Feed ? "Feed"
            : verb == TaskVerb.Kill ? "Kill"
            : verb == TaskVerb.Grow ? "Grow"
            : verb == TaskVerb.Shrink ? "Shrink"
            : "Use");

        private static string Preposition(TaskVerb verb) => (verb == TaskVerb.Equip ? "on"
            : verb == TaskVerb.Wear ? "on"
            : verb == TaskVerb.Link ? "to"
            : verb == TaskVerb.Feed ? "to"
            : "with");
    }
}

using Game.Core;

namespace Game.Data
{
    // What gameplay calls when something task-worthy happens. One line at each real chokepoint —
    // ItemCreator.Create, WearableEntity.Wear, and so on — instead of gameplay knowing what a task
    // is or which items are locked.
    //
    // Silent when no event bus is up (tests, scenes opened without the bootstrapper).
    public static class TaskReporter
    {
        public static void Report(TaskVerb verb, ItemSO subject, ItemSO target = null)
        {
            if (subject == null) return;
            if (!ServiceLocator.TryGet<IEventBus>(out var events)) return;
            events.Publish(new GameActionEvent(verb, subject.itemId, target != null ? target.itemId : null));
        }

        // For verbs about the session rather than an item, e.g. PlayTime. Carries no ids at all,
        // which is what lets TaskCondition skip its filters instead of failing to resolve a noun.
        public static void Report(TaskVerb verb)
        {
            if (!ServiceLocator.TryGet<IEventBus>(out var events)) return;
            events.Publish(new GameActionEvent(verb, null));
        }
    }
}

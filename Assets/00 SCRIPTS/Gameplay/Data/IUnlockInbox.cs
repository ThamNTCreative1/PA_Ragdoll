using System;
using System.Collections.Generic;

namespace Game.Data
{
    // Unlocks the player has not looked at yet. Separate from IUnlockService on purpose: whether an
    // item is owned and whether its news has been read are different questions, and only the second
    // one is allowed to be cleared.
    //
    // Persisted, so quitting before opening the mail does not lose the notification.
    public interface IUnlockInbox
    {
        bool HasUnread { get; }
        int UnreadCount { get; }

        // Oldest first — the order they were earned in.
        IReadOnlyList<string> Unread { get; }

        void MarkRead(string itemId);
        void MarkAllRead();

        // Raised whenever the unread set changes, so the mail button can restyle itself.
        event Action Changed;
    }
}

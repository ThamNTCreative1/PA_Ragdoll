using System;
using System.Collections.Generic;
using Game.Data;
using UnityEngine;

namespace Game.Services
{
    // Holds unlocks the player has not seen yet. Persisted as one PlayerPrefs string so a player who
    // earns something and quits still finds the notification waiting.
    //
    // Reads are cleared independently of ownership: marking mail read must never touch whether the
    // item is actually unlocked.
    public class UnlockInbox : IUnlockInbox, IDisposable
    {
        private const string Key = "unlock.inbox";
        private const char Separator = '|';

        private readonly IUnlockService _unlocks;
        private readonly List<string> _unread = new List<string>();

        public event Action Changed;

        public bool HasUnread => _unread.Count > 0;
        public int UnreadCount => _unread.Count;
        public IReadOnlyList<string> Unread => _unread;

        public UnlockInbox(IUnlockService unlocks)
        {
            _unlocks = unlocks;

            string saved = PlayerPrefs.GetString(Key, string.Empty);
            if (!string.IsNullOrEmpty(saved))
                _unread.AddRange(saved.Split(new char[] { Separator }, StringSplitOptions.RemoveEmptyEntries));

            if (_unlocks != null) _unlocks.Unlocked += OnUnlocked;
        }

        public void Dispose()
        {
            if (_unlocks != null) _unlocks.Unlocked -= OnUnlocked;
        }

        private void OnUnlocked(string itemId)
        {
            if (string.IsNullOrEmpty(itemId) || _unread.Contains(itemId)) return;
            _unread.Add(itemId);
            Save();
        }

        public void MarkRead(string itemId)
        {
            if (!_unread.Remove(itemId)) return;
            Save();
        }

        public void MarkAllRead()
        {
            if (_unread.Count == 0) return;
            _unread.Clear();
            Save();
        }

        private void Save()
        {
            PlayerPrefs.SetString(Key, string.Join(Separator.ToString(), _unread.ToArray()));
            PlayerPrefs.Save();
            Changed?.Invoke();
        }
    }
}

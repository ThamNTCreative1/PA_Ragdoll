using UnityEngine;

namespace Game.Core
{
    // Native banners are an OS view sitting above Unity's surface, so no sorting order can put a
    // popup in front of one — the banner has to come down while a modal is up. Counted rather than
    // a flag so overlapping owners cannot uncover the banner while another still wants it hidden.
    public static class BannerSuppression
    {
        private static int _count;

        public static bool Active => _count > 0;

        public static void Acquire() => _count++;

        public static void Release()
        {
            if (_count > 0) _count--;
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        public static void Reset() => _count = 0;
    }
}

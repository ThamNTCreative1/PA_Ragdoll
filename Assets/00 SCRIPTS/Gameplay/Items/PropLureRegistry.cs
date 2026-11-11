using System.Collections.Generic;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Every prop currently calling creatures over. A plain list on purpose: lures are a handful, and
    // creatures only consult it when they have nothing better to do.
    public static class PropLureRegistry
    {
        private static readonly List<PropEntity> Lures = new List<PropEntity>();

        public static int Count => Lures.Count;

        public static void Register(PropEntity prop)
        {
            if (prop != null && !Lures.Contains(prop)) Lures.Add(prop);
        }

        public static void Unregister(PropEntity prop) => Lures.Remove(prop);

        // Domain reload keeps statics alive between play sessions in the editor, so a stale entry
        // would otherwise haunt the next run.
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        private static void Reset() => Lures.Clear();

        // Nearest lure that wants this kind of creature and is close enough to notice.
        public static PropEntity FindNearest(Vector2 from, bool isZombie)
        {
            PropEntity best = null;
            float bestSq = float.PositiveInfinity;

            for (int i = Lures.Count - 1; i >= 0; i--)
            {
                var prop = Lures[i];
                if (prop == null) { Lures.RemoveAt(i); continue; }
                if (!prop.LuresCreature(isZombie)) continue;

                float sq = ((Vector2)prop.transform.position - from).sqrMagnitude;
                float reach = prop.LureRadius;
                if (sq > reach * reach || sq >= bestSq) continue;
                bestSq = sq;
                best = prop;
            }
            return best;
        }
    }
}

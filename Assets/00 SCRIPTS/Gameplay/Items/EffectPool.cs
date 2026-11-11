using System.Collections.Generic;
using UnityEngine;

namespace Game.Gameplay
{
    // Reuses effect instances instead of Instantiate/Destroy per hit, which was the GC/hierarchy-walk cost dominating firefights.
    public static class EffectPool
    {
        // Beyond this, the oldest live effect is recycled early rather than growing without bound.
        private const int MaxLive = 96;

        private class Instance
        {
            public GameObject go;
            public Transform transform;
            public ParticleSystem[] systems;   // roots only; Play/Clear walk children themselves
            public ParticleSystem[] allSystems; // every system, for tinting — nested ones need it too
            public Vector3 prefabScale;
            public int prefabId;
            public float expiry;
        }

        private static readonly Dictionary<int, Stack<Instance>> Idle = new Dictionary<int, Stack<Instance>>();
        private static readonly List<Instance> Live = new List<Instance>();
        private static Transform _root;
        private static Runner _runner;

        // `startColor` is applied BEFORE Play(), since a burst emits instantly and recoloring after would leave the first spray wrong.
        public static void Play(GameObject prefab, Vector3 position, Quaternion rotation,
                                float scale, Transform parent = null)
            => Play(prefab, position, rotation, scale, parent, false, default(ParticleSystem.MinMaxGradient));

        public static void Play(GameObject prefab, Vector3 position, Quaternion rotation,
                                float scale, Transform parent, ParticleSystem.MinMaxGradient startColor)
            => Play(prefab, position, rotation, scale, parent, true, startColor);

        // Two overloads rather than a nullable colour: MinMaxGradient is a class in Luna, where `?` won't compile.
        private static void Play(GameObject prefab, Vector3 position, Quaternion rotation,
                                 float scale, Transform parent, bool recolor,
                                 ParticleSystem.MinMaxGradient startColor)
        {
            if (prefab == null) return;
            EnsureRunner();

            int id = prefab.GetInstanceID();
            var inst = Rent(prefab, id);
            if (inst == null) return;

            var t = inst.transform;
            t.SetParent(parent, worldPositionStays: false);
            t.SetPositionAndRotation(position, rotation);
            // Parented effects inherit their host's scale, so divide it back out.
            t.localScale = inst.prefabScale * Mathf.Max(0.01f, scale);
            if (parent != null) DivideOutParentScale(t, parent);

            inst.go.SetActive(true);

            if (recolor)
                for (int i = 0; i < inst.allSystems.Length; i++)
                {
                    if (inst.allSystems[i] == null) continue;
                    var m = inst.allSystems[i].main;
                    m.startColor = startColor;
                }

            float longest = 0f;
            for (int i = 0; i < inst.systems.Length; i++)
            {
                var ps = inst.systems[i];
                if (ps == null) continue;
                ps.Clear();
                ps.Play(true);
                var main = ps.main;
                longest = Mathf.Max(longest, main.duration + main.startLifetime.constantMax);
            }
            inst.expiry = Time.time + (longest > 0f ? longest + 0.1f : 2f);

            if (Live.Count >= MaxLive) RecycleAt(0);
            Live.Add(inst);
        }

        private static void DivideOutParentScale(Transform t, Transform parent)
        {
            var host = parent.lossyScale;
            var s = t.localScale;
            t.localScale = new Vector3(
                host.x != 0f ? s.x / host.x : s.x,
                host.y != 0f ? s.y / host.y : s.y,
                host.z != 0f ? s.z / host.z : s.z);
        }

        private static Instance Rent(GameObject prefab, int id)
        {
            if (Idle.TryGetValue(id, out var stack) && stack.Count > 0) return stack.Pop();

            var go = Object.Instantiate(prefab, _root);
            var all = go.GetComponentsInChildren<ParticleSystem>(true);
            var inst = new Instance
            {
                go = go,
                transform = go.transform,
                allSystems = all,
                systems = RootSystems(all),
                prefabScale = prefab.transform.localScale,
                prefabId = id,
            };
            // Sorting never changes for a given instance, so it's paid once here, not on every play.
            EffectSorting.LiftAboveSprites(go);
            return inst;
        }

        // Only root systems: Play/Clear already walk children, so including a child would start it twice.
        private static ParticleSystem[] RootSystems(ParticleSystem[] all)
        {
            var roots = new List<ParticleSystem>(all.Length);
            foreach (var ps in all)
            {
                var parent = ps.transform.parent;
                if (parent == null || parent.GetComponentInParent<ParticleSystem>() == null) roots.Add(ps);
            }
            return roots.ToArray();
        }

        private static void Tick()
        {
            float now = Time.time;
            for (int i = Live.Count - 1; i >= 0; i--)
                if (now >= Live[i].expiry) RecycleAt(i);
        }

        private static void RecycleAt(int index)
        {
            var inst = Live[index];
            Live.RemoveAt(index);
            if (inst.go == null) return; // destroyed with a scene change

            for (int i = 0; i < inst.systems.Length; i++)
                if (inst.systems[i] != null) inst.systems[i].Clear();

            inst.transform.SetParent(_root, worldPositionStays: false);
            inst.go.SetActive(false);

            if (!Idle.TryGetValue(inst.prefabId, out var stack))
                Idle[inst.prefabId] = stack = new Stack<Instance>();
            stack.Push(inst);
        }

        private static void EnsureRunner()
        {
            if (_runner != null) return;

            // Entries still booked here mean the previous host (and its instances) were torn down; start over.
            Idle.Clear();
            Live.Clear();

            var host = new GameObject("EffectPool");
            Object.DontDestroyOnLoad(host);
            _root = host.transform;
            _runner = host.AddComponent<Runner>();
        }

        private class Runner : MonoBehaviour
        {
            private void Update() => Tick();
        }
    }
}

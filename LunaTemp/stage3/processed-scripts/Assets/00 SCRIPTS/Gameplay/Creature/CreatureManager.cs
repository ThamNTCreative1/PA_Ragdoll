using System.Collections.Generic;
using UnityEngine;

namespace Game.Gameplay
{
    // Central creature driver using one shared fixed update and target snapshot.
    public class CreatureManager : MonoBehaviour
    {
        #region Registry
        private static CreatureManager _instance;

        private readonly List<CreatureAgent> _creatures = new List<CreatureAgent>();
        private readonly List<CreatureSnapshot> _targetSnapshot = new List<CreatureSnapshot>();
        private readonly List<CreatureAgent> _targetAgents = new List<CreatureAgent>();
        private readonly TargetGrid _targetGrid = new TargetGrid();

        private static CreatureManager Instance
        {
            get
            {
                if (_instance == null)
                    _instance = new GameObject(nameof(CreatureManager)).AddComponent<CreatureManager>();
                return _instance;
            }
        }

        public static void Register(CreatureAgent agent) => Instance._creatures.Add(agent);

        public static void Unregister(CreatureAgent agent)
        {
            if (_instance != null) _instance._creatures.Remove(agent);
        }

        // A normal just spawned: every registered zombie in detection range does a one-shot startle toward it.
        public static void NotifyNormalSpawned(CreatureAgent normal)
        {
            if (_instance == null || normal == null) return;
            Vector2 spawnPos = normal.TorsoPosition;
            var list = _instance._creatures;
            for (int i = 0; i < list.Count; i++)
            {
                var creature = list[i];
                if (creature == normal) continue;
                creature.ReactToNormalSpawn(spawnPos);
            }
        }

        #endregion

        #region Off-camera dormancy
        // Dormancy uses hysteresis and a wake cap to avoid camera-edge hitching.
        private const float WakeMargin = 3f;
        private const float SleepMargin = 6f;
        private const int MaxWakesPerStep = 8;

        // Above this many simulating creatures the off-screen margin collapses. Creatures INSIDE the view
        // are never forced under: a dormant rig holds its pose and would read as a T-pose sliding past.
        private const int ActiveBudget = 48;
        private const float CrowdedSleepMargin = 0f;

        private Camera _camera;
        private int _activeCount;

        // A turn costs a form swap, a rig wake and a shove. Left uncapped, one zombie dropped into
        // fifty normals converted the whole pile within a couple of steps and dropped the frame.
        private const int MaxInfectionsPerStep = 4;
        private static int _infectionsThisStep;

        public static bool TryTakeInfectionSlot()
        {
            if (_infectionsThisStep >= MaxInfectionsPerStep) return false;
            _infectionsThisStep++;
            return true;
        }

        private void FixedUpdate()
        {
            _infectionsThisStep = 0;
            // Shared snapshot holds only infectable targets; the two lists stay index-aligned.
            _targetSnapshot.Clear();
            _targetAgents.Clear();
            for (int i = 0; i < _creatures.Count; i++)
            {
                var creature = _creatures[i];
                if (!creature.IsInfectableTarget) continue;
                _targetSnapshot.Add(new CreatureSnapshot(creature.TorsoPosition.x, creature.TorsoPosition.y, true));
                _targetAgents.Add(creature);
            }

            _targetGrid.Rebuild(_targetSnapshot);

            if (_camera == null) _camera = Camera.main;
            bool hasView = _camera != null;
            Vector2 viewCenter = default(Vector2);
            Vector2 viewHalf = default(Vector2);
            if (hasView)
            {
                viewCenter = _camera.transform.position;
                viewHalf = new Vector2(_camera.orthographicSize * _camera.aspect, _camera.orthographicSize);
            }

            // Measured last step, so the budget reacts without a second pass over the list.
            float sleepMargin = _activeCount > ActiveBudget ? CrowdedSleepMargin : SleepMargin;
            int active = 0;

            int wakes = 0;
            for (int i = 0; i < _creatures.Count; i++)
            {
                var creature = _creatures[i];
                if (!creature.Dormant) creature.GuardTunnelling();
                if (!hasView)
                {
                    // No camera means no notion of "seen" — everyone simulates.
                    if (creature.Dormant) creature.SetDormant(false);
                    creature.ManagedTick(_targetSnapshot, _targetAgents, _targetGrid);
                    active++;
                    continue;
                }

                Vector2 fromView = creature.TorsoPosition - viewCenter;
                float dx = Mathf.Abs(fromView.x) - viewHalf.x;
                float dy = Mathf.Abs(fromView.y) - viewHalf.y;
                float outside = Mathf.Max(dx, dy); // how far beyond the view rect, <=0 inside

                if (creature.Dormant)
                {
                    // Over budget, only creatures actually back in frame are worth waking.
                    float wakeMargin = _activeCount > ActiveBudget ? 0f : WakeMargin;
                    if (outside < wakeMargin && wakes < MaxWakesPerStep)
                    {
                        creature.SetDormant(false);
                        wakes++;
                        active++;
                        creature.ManagedTick(_targetSnapshot, _targetAgents, _targetGrid);
                    }
                    else creature.DormantTick(_targetSnapshot, _targetAgents, _targetGrid);
                }
                else if (outside > sleepMargin && creature.CanGoDormant)
                {
                    creature.SetDormant(true);
                    creature.DormantTick(_targetSnapshot, _targetAgents, _targetGrid);
                }
                else
                {
                    creature.ManagedTick(_targetSnapshot, _targetAgents, _targetGrid);
                    active++;
                }
            }

            // Posed creatures still simulate their torso and legs, so they stay counted as active —
            // the budget decides how many get their limbs held, not how many stop simulating.
            _activeCount = active;
            PoseCrowded(active);
        }

        #endregion

        #region Crowd posing
        // A creature buried in a pile is drawn over by those in front, so holding its head and arms still
        // costs nothing visible — and it keeps walking on real physics, which a frozen one does not.
        private const int CrowdCell = 1;      // world units; a creature is about this wide
        private const int CrowdThreshold = 3; // bodies sharing a cell before the back ones pose

        // A pile does not re-form 50 times a second, and the re-sort is the only per-step cost here.
        private const float CrowdScanInterval = 0.25f;

        private readonly Dictionary<Vector2Int, int> _crowd = new Dictionary<Vector2Int, int>();
        private readonly List<CreatureAgent> _posable = new List<CreatureAgent>();
        private float _nextCrowdScan;

        // Front-most bodies per pile that keep their limbs. Posing used to be driven by the GLOBAL
        // overflow (active - ActiveBudget), so fifty creatures in one heap posed three of them and
        // the other forty-seven ran full-fat — the LOD barely engaged in the case it exists for.
        private const int LiveFrontPerCell = 2;

        private void PoseCrowded(int active)
        {
            if (Time.time < _nextCrowdScan) return;
            _nextCrowdScan = Time.time + CrowdScanInterval;

            _crowd.Clear();
            for (int i = 0; i < _creatures.Count; i++)
            {
                var creature = _creatures[i];
                if (creature.Dormant) continue;
                var cell = CrowdCellOf(creature.TorsoPosition);
                _crowd.TryGetValue(cell, out int n);
                _crowd[cell] = n + 1;
            }

            _posable.Clear();
            for (int i = 0; i < _creatures.Count; i++)
            {
                var creature = _creatures[i];
                if (creature.Dormant) continue;
                // A hunting zombie keeps its arms: the claw IS the arm colliders, so posing one
                // stops it infecting anything and the horde quietly stalls.
                bool crowded = !creature.IsHunting
                               && _crowd.TryGetValue(CrowdCellOf(creature.TorsoPosition), out int n)
                               && n >= CrowdThreshold;
                if (crowded) _posable.Add(creature);
                else if (creature.Posed) creature.SetPosed(false); // walked clear, or went hunting
            }

            // Lowest sorting slab first: that is literally the one drawn furthest back.
            _posable.Sort((a, b) => a.SortingSlab.CompareTo(b.SortingSlab));

            // Per PILE, not per world: everything but the front few of each heap gives up its limbs.
            _cellLive.Clear();
            for (int i = _posable.Count - 1; i >= 0; i--)
            {
                var creature = _posable[i];
                var cell = CrowdCellOf(creature.TorsoPosition);
                _cellLive.TryGetValue(cell, out int live);
                bool keepLive = live < LiveFrontPerCell;
                if (keepLive) _cellLive[cell] = live + 1;
                creature.SetPosed(!keepLive);
            }
        }

        private readonly Dictionary<Vector2Int, int> _cellLive = new Dictionary<Vector2Int, int>();

        private static Vector2Int CrowdCellOf(Vector2 position)
            => new Vector2Int(Mathf.FloorToInt(position.x / CrowdCell), Mathf.FloorToInt(position.y / CrowdCell));

        #endregion

        #region Batched rendering
        // Visual layer follows physics each rendered frame; kept out of FixedUpdate so the mirror never lags.
        private void LateUpdate()
        {
            // Dormant creatures sync too — they still have to be drawn; they simply hold the pose
            // they froze in while the root slides them along.
            for (int i = 0; i < _creatures.Count; i++)
            {
                var creature = _creatures[i];
                if (!creature.Dormant) creature.ApplyPose(); // carry the un-simulated limbs first
                creature.SyncVisual();
            }
        }
        #endregion
    }
}

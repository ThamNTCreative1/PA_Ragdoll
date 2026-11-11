using System.Threading.Tasks;
using Game.Core;
using Game.Data;
using Game.Services;
using Game.UI;
using UnityEngine;

namespace Game.Gameplay
{
    // Playable replacement for the source game's GameBootstrapper: same service set minus Addressables,
    // ads SDK, analytics and the map loader. Registers the services the gameplay/UI scripts look up,
    // spawns the items placed in the scene (ItemSpawnPoint) on the hand-built map, hands the camera the
    // map bounds, and answers the tool strip's Reset the way MapLoaderService did (clear + rebuild).
    [DefaultExecutionOrder(-1000)]
    public class PlayableBootstrap : MonoBehaviour
    {
        [SerializeField] private GameConfigSO gameConfig;
        [Tooltip("Detect from device memory/cores like the source game, or force the tier below")]
        [SerializeField] private bool detectDeviceTier = true;
        [SerializeField] private DeviceTier deviceTier = DeviceTier.Mid;

        [Header("Unlock flow (locked palette items)")]
        [SerializeField] private ItemUnlockPopup unlockPopupPrefab;
        [SerializeField] private UnlockToast unlockToastPrefab;

        [Header("Map")]
        [Tooltip("World-space play area the camera is clamped to")]
        [SerializeField] private Rect mapBounds = new Rect(-8f, -3f, 16f, 10f);
        // The opening view is wherever Main Camera sits in the scene (captured before anything moves it).
        private Vector2 _cameraStart;

        [Tooltip("Root of the authored MapTile cells; hidden at runtime and replaced by real TileEntities")]
        [SerializeField] private Transform tilesRoot;

        [Header("Placed items")]
        [SerializeField] private ItemSpawnPoint[] spawnPoints = new ItemSpawnPoint[0];

        [Header("Random zombies")]
        [Tooltip("Creature dropped in at random positions")]
        [SerializeField] private ItemSO zombieItem;
        [Tooltip("How many zombies drop in (on Luna, LunaController's Zombie Count overrides this)")]
        [SerializeField] private int zombieCount = 3;
        [Tooltip("Zombies drop at a random x between these two values (red line in the Scene view)")]
        [SerializeField] private Vector2 zombieSpawnX = new Vector2(1f, 5.5f);
        [Tooltip("Height they drop from")]
        [SerializeField] private float zombieSpawnY = 6f;
        [Tooltip("Smallest x gap between two zombies, so they don't land in a heap (relaxed when they can't all fit)")]
        [SerializeField] private float zombieMinGap = 0.8f;

        public int ZombieCount
        {
            get { return zombieCount; }
            set { zombieCount = Mathf.Max(0, value); }
        }

        private IEventBus _events;
        private UnlockInbox _inbox;

        // Read once from the authored cells, replayed on every build and reset.
        private readonly System.Collections.Generic.List<ItemSO> _tileItems = new System.Collections.Generic.List<ItemSO>();
        private readonly System.Collections.Generic.List<Vector2Int> _tileCells = new System.Collections.Generic.List<Vector2Int>();

        private void Awake()
        {
            var cam = Camera.main;
            if (cam != null) _cameraStart = cam.transform.position;
            if (gameConfig == null)
            {
                Debug.LogError("[Playable] PlayableBootstrap has no GameConfig.", this);
                return;
            }
            RegisterServices();
        }

        // Services are registered on first demand, not by Awake order: Luna does not honour
        // [DefaultExecutionOrder], so another script's Awake can ask before ours has run.
        // ServiceLocator calls this whenever a lookup misses.
        private bool _servicesReady;
        private bool _destroyed;
        private static bool _registering;

        public static void EnsureServices()
        {
            if (_registering) return;
            var boot = FindObjectOfType<PlayableBootstrap>();
            if (boot == null || boot._destroyed || boot._servicesReady || boot.gameConfig == null) return;
            boot.RegisterServices();
        }

        private void RegisterServices()
        {
            if (_servicesReady || _destroyed) return;
            _servicesReady = true;
            _registering = true;
            try { RegisterServicesNow(); }
            finally { _registering = false; }
        }

        private void RegisterServicesNow()
        {
            ServiceLocator.Reset();
            Application.targetFrameRate = gameConfig.targetFrameRate;

            _events = new EventBus();
            ServiceLocator.Register<IEventBus>(_events);
            ServiceLocator.Register<IObjectPoolService>(new ObjectPoolService());
            ServiceLocator.Register(gameConfig);
            ServiceLocator.Register<IAudioService>(new AudioService());
            if (gameConfig.sfx != null) ServiceLocator.Register(gameConfig.sfx);

            var budget = new SimulationBudgetService(gameConfig.frameBudget.ToCaps());
            budget.SetDeviceTier(detectDeviceTier ? DetectTier() : deviceTier);
            ServiceLocator.Register<ISimulationBudget>(budget);

            var items = new ItemDatabaseService(gameConfig.categories, gameConfig);
            ServiceLocator.Register<IItemDatabase>(items);
            var unlocks = new UnlockService(items);
            ServiceLocator.Register<IUnlockService>(unlocks);
            _inbox = new UnlockInbox(unlocks);
            ServiceLocator.Register<IUnlockInbox>(_inbox);
            ServiceLocator.Register<IAdService>(new PlayableAdService());
            ServiceLocator.Register<IUIService>(new PlayableUIService());

            // Every service here initialises synchronously; the task is already complete.
            Task init = ServiceLocator.InitializeAllAsync();
            if (init.IsFaulted) Debug.LogException(init.Exception);

            UnlockFlow.Create(unlockPopupPrefab, unlockToastPrefab);
            _events.Subscribe<ResetRequestedEvent>(OnResetRequested);
        }

        private void Start()
        {
            if (gameConfig == null) return;
            ReadTileLayout();
            BuildWorld();
        }

        private void ReadTileLayout()
        {
            if (tilesRoot == null) return;
            var cells = tilesRoot.GetComponentsInChildren<MapTile>(true);
            for (int i = 0; i < cells.Length; i++)
            {
                if (cells[i].Item == null) continue;
                _tileItems.Add(cells[i].Item);
                _tileCells.Add(cells[i].Cell);
            }
            tilesRoot.gameObject.SetActive(false);
        }

        private void BuildWorld()
        {
            TileColliderComposite.BeginBulk();
            SpawnRegistry.BeginBulk();
            try
            {
                for (int i = 0; i < _tileItems.Count; i++) PlaceTile(_tileItems[i], _tileCells[i]);

                Player = null;
                for (int i = 0; i < spawnPoints.Length; i++)
                {
                    var point = spawnPoints[i];
                    if (point == null || point.Item == null) continue;
                    var instance = ItemCreator.Create(point.Item, point.transform.position, point.Facing);
                    if (point.IsPlayer && instance != null) Player = instance.GetComponentInChildren<CreatureAgent>();
                    if (point.Dormant && instance != null && instance.TryGetComponent<ExplosiveEntity>(out var charge))
                        charge.MakeDormant();
                }
                SpawnRandomZombies();
            }
            finally
            {
                SpawnRegistry.EndBulk();
                TileColliderComposite.EndBulk();
            }

            _events.Publish(new MapSpawnedEvent(
                mapBounds.xMin, mapBounds.yMin, mapBounds.xMax, mapBounds.yMax,
                true, _cameraStart.x, _cameraStart.y, 0f));
        }

        // Drops zombieCount zombies at random x in zombieSpawnX, each facing the player.
        private void SpawnRandomZombies()
        {
            if (zombieItem == null || zombieCount <= 0) return;
            float minX = Mathf.Min(zombieSpawnX.x, zombieSpawnX.y);
            float maxX = Mathf.Max(zombieSpawnX.x, zombieSpawnX.y);
            // Only ask for the gap the range can actually hold.
            float gap = zombieCount > 1 ? Mathf.Min(zombieMinGap, (maxX - minX) / (zombieCount - 1)) : 0f;
            float playerX = Player != null ? Player.TorsoPosition.x : minX - 1f;

            var placed = new System.Collections.Generic.List<float>();
            for (int i = 0; i < zombieCount; i++)
            {
                float x = Random.Range(minX, maxX);
                for (int tries = 0; tries < 20 && TooClose(x, placed, gap); tries++)
                    x = Random.Range(minX, maxX);
                placed.Add(x);
                int facing = x >= playerX ? ItemFacing.Left : ItemFacing.Right;
                ItemCreator.Create(zombieItem, new Vector2(x, zombieSpawnY), facing);
            }
        }

        private static bool TooClose(float x, System.Collections.Generic.List<float> placed, float gap)
        {
            for (int i = 0; i < placed.Count; i++)
                if (Mathf.Abs(placed[i] - x) < gap) return true;
            return false;
        }

        private void DrawZombieRange()
        {
            Gizmos.color = Color.red;
            var a = new Vector3(zombieSpawnX.x, zombieSpawnY, 0f);
            var b = new Vector3(zombieSpawnX.y, zombieSpawnY, 0f);
            Gizmos.DrawLine(a, b);
            Gizmos.DrawWireSphere(a, 0.15f);
            Gizmos.DrawWireSphere(b, 0.15f);
        }

        // The creature spawned from the spawn point marked IsPlayer (rebuilt on every reset).
        public CreatureAgent Player { get; private set; }

        // Spawns the weapon right in the player's hand; WeaponEntity's own pickup scan then attaches it,
        // exactly as when a weapon is dropped onto a creature in the source game.
        public bool EquipPlayer(ItemSO weapon)
        {
            if (weapon == null || weapon.type != ItemType.Weapon) return false;
            if (Player == null || Player.IsDead || !Player.CanHoldWeapon) return false;
            var grip = Player.GripTransform;
            Vector2 at = grip != null ? (Vector2)grip.position : Player.TorsoPosition;
            int facing = Player.Facing < 0f ? ItemFacing.Left : ItemFacing.Right;
            return ItemCreator.Create(weapon, at, facing) != null;
        }

        // Same as MapLoaderService.PlaceCell, except the tile keeps drawing itself (its own
        // SpriteRenderer) instead of being baked into TileChunkRenderer's chunk mesh.
        private static void PlaceTile(ItemSO item, Vector2Int cell)
        {
            var instance = ItemCreator.Create(item, TileGrid.CellCenter(cell));
            if (instance == null) return;
            var tile = instance.GetComponent<TileEntity>();
            if (tile == null)
            {
                Debug.LogError($"[Playable] '{item.itemId}' prefab has no TileEntity.");
                Destroy(instance);
                return;
            }
            tile.Place(cell);
            tile.SetSelfRendered(true);
        }

        // Source behaviour (MapLoaderService.ReloadCurrentMapAsync): wipe everything spawned, player
        // items included, and rebuild the map's own content.
        private void OnResetRequested(ResetRequestedEvent e)
        {
            SpawnRegistry.ClearAll();
            BuildWorld();
        }

        private DeviceTier DetectTier()
        {
            int mem = SystemInfo.systemMemorySize;
            int cores = SystemInfo.processorCount;
            if (mem <= gameConfig.lowTierMaxMemoryMB) return DeviceTier.Low;
            if (mem >= gameConfig.highTierMinMemoryMB && cores >= gameConfig.highTierMinCores) return DeviceTier.High;
            return DeviceTier.Mid;
        }

        private void Update() => ServiceLocator.TickAll(Time.deltaTime);

        private void OnDestroy()
        {
            _destroyed = true;
            _events?.Unsubscribe<ResetRequestedEvent>(OnResetRequested);
            _inbox?.Dispose();
            ServiceLocator.Reset();
        }

        private void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.yellow;
            Gizmos.DrawWireCube(mapBounds.center, mapBounds.size);
            DrawZombieRange();
        }
    }
}

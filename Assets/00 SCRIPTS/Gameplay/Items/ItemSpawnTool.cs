using Game.Core;
using Game.Data;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Game.Gameplay
{
    // Palette item spawn tool: regular items drop in free space, tile items snap to the
    // TileGrid as solid or background per their own TileSO, delete mode removes tiles.
    public class ItemSpawnTool : MonoBehaviour
    {
        [SerializeField] private Camera targetCamera;
        [Tooltip("Minimum seconds between drops, so click spam can't rain overlapping bodies.")]
        [SerializeField] private float spawnCooldown = 0.3f;

        #region State
        private IEventBus _events;
        private IItemDatabase _items;
        private ItemSO _pending;
        private float _lastSpawnTime = float.NegativeInfinity;
        private bool _deleteMode;
        private int _facing = ItemFacing.Right;

        // Playable: raised after the player drops an item by tapping (the "TAP TO DROP" hint hides on it).
        public static event System.Action<ItemSO> Dropped;

        // DragTool never turns a trash-mode press into a grab.
        public bool IsDeleteMode => _deleteMode;

        // Every press resolves on release: a tap acts, a drag belongs to the camera (or DragTool).
        private bool _tapPending;
        private Vector2 _tapScreenPos;
        private Vector3 _tapWorld;

        #endregion

        #region Event wiring
        // Services in Start, not Awake: this can load in the same frame as GameBootstrapper
        // and Awake order across GameObjects isn't guaranteed.
        private void Start()
        {
            _events = ServiceLocator.Get<IEventBus>();
            _items = ServiceLocator.Get<IItemDatabase>();
            _events.Subscribe<PaletteItemSelectedEvent>(OnPaletteItemSelected);
            _events.Subscribe<DeleteModeToggledEvent>(OnDeleteModeToggled);
            _events.Subscribe<SpawnFacingChangedEvent>(OnSpawnFacingChanged);
            _events.Subscribe<UndoRequestedEvent>(OnUndoRequested);
            if (targetCamera == null) targetCamera = Camera.main;
        }

        private void OnDestroy()
        {
            _events?.Unsubscribe<PaletteItemSelectedEvent>(OnPaletteItemSelected);
            _events?.Unsubscribe<DeleteModeToggledEvent>(OnDeleteModeToggled);
            _events?.Unsubscribe<SpawnFacingChangedEvent>(OnSpawnFacingChanged);
            _events?.Unsubscribe<UndoRequestedEvent>(OnUndoRequested);
        }

        // The palette publishes selections from every category; only ids the item database
        // resolves belong to this tool — anything else (maps, tools) deselects it.
        private void OnPaletteItemSelected(PaletteItemSelectedEvent e)
            => _pending = _items.TryResolve(e.ItemId, out var item) ? item : null;

        private void OnDeleteModeToggled(DeleteModeToggledEvent e) => _deleteMode = e.IsEnabled;

        // The tool strip's swap button, in any category whose items have a left and a right.
        private void OnSpawnFacingChanged(SpawnFacingChangedEvent e) => _facing = ItemFacing.Sign(e.Facing);

        private void OnUndoRequested(UndoRequestedEvent e) => SpawnRegistry.RemoveLast();

        // Reset is owned by the map service now: clearing alone would leave an empty world,
        // because the map's own tiles are spawned through ItemCreator and go with everything else.

        #endregion

        #region Input, tap versus drag
        private void Update()
        {
            // Pointer, not Mouse: on a touch-only device Mouse.current is null, so tap/spawn must
            // go through the device-agnostic Pointer (Mouse/Touchscreen/Pen).
            if (targetCamera == null || !PlayInput.HasPointer) return;

            if (PlayInput.PressedThisFrame) OnPress();
            else if (_tapPending) UpdatePendingTap();
        }

        private void OnPress()
        {
            _tapPending = false;
            if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject()) return;
            if (LinkTool.IsLinkModeArmed) return; // link mode owns the click while it is armed
            if (!_deleteMode && (_pending == null || _pending.prefab == null)) return;

            float distance = -targetCamera.transform.position.z;
            Vector2 screenPos = PlayInput.Position;
            Vector3 world = targetCamera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, distance));
            world.z = 0f;

            _tapPending = true;
            _tapScreenPos = screenPos;
            _tapWorld = world;
        }

        private void UpdatePendingTap()
        {
            // Past the threshold the gesture is a drag, which belongs to the camera (or to DragTool
            // on a body) — acting here too would spawn a stray item at the start of every pan.
            if (PointerProbe.MovedPastDragThreshold(_tapScreenPos))
            {
                _tapPending = false;
                return;
            }
            if (PlayInput.IsPressed) return;

            _tapPending = false;
            if (_deleteMode) TryDeleteAt(_tapWorld);
            else SpawnAt(_tapWorld);
        }

        #endregion

        #region Placing
        private void SpawnAt(Vector3 world)
        {
            if (Time.time - _lastSpawnTime < spawnCooldown) return;

            if (_pending.type == ItemType.Tile)
                TryPlaceTile(world);
            else
                TrySpawnRegularItem(world);
        }

        // Tiles snap to the grid and skip the ground/creature checks — static blocks push
        // creatures out safely and underground building is legitimate.
        private void TryPlaceTile(Vector3 world)
        {
            bool asBackground = _pending.tile.isBackgroundTile;
            var cell = TileGrid.WorldToCell(world);

            // One tile per layer per cell. Landing on an occupied cell REPLACES rather than refuses:
            // a loaded map fills every background cell, so refusing made backdrops unplaceable.
            if (TileGrid.TryGet(cell, asBackground, out var existing))
            {
                if (existing.Item == _pending) return; // that exact tile is already here

                // Replacement is a removal with extra steps, so bedrock has to refuse it here too —
                // otherwise you could delete an indestructible block by building over it.
                if (existing.IsIndestructible)
                {
                    BanFeedback.ShowAt(TileGrid.CellCenter(cell));
                    return;
                }

                Destroy(existing.gameObject);
                // Destroy is deferred, so the old tile's OnDestroy runs AFTER the new one registers.
                // Unregister only clears the cell if the entry is still that tile, so the newcomer survives.
            }

            var instance = ItemCreator.Create(_pending, TileGrid.CellCenter(cell));
            if (instance == null) return;

            var tile = instance.GetComponent<TileEntity>();
            if (tile == null)
            {
                Debug.LogError($"[Items] '{_pending.itemId}' has TileSO data but its prefab has no TileEntity.");
                Destroy(instance);
                return;
            }

            tile.Place(cell);
            TilePlacePop.Play(tile);
            // Sound here, NOT in TileEntity.Place — a map load runs Place for every cell and would
            // pop the whole level at once (the same reasoning that keeps TilePlacePop here).
            var placeClip = _pending.tile.placeClip;
            if (placeClip == null && ServiceLocator.TryGet<SfxLibrarySO>(out var sfx)) placeClip = sfx.tilePlace;
            Sfx.Play(placeClip, TileGrid.CellCenter(cell), 1f, 0.05f);
            _lastSpawnTime = Time.time;
        }

        private void TrySpawnRegularItem(Vector3 world)
        {
            // Blocked only by whatever the tap point actually overlaps — static geometry, a
            // creature, or a loose item — not a buffer radius around it.
            var overlaps = Physics2D.OverlapPointAll(world);
            for (int i = 0; i < overlaps.Length; i++)
            {
                var hit = overlaps[i];
                if (WorldCollision.IsStatic(hit) && !hit.isTrigger) return;
                if (hit.isTrigger) continue;
                // Covers creatures, props, weapons, wearables, explosives — every spawned entity type.
                if (hit.GetComponentInParent<IItemDataReceiver>() != null) return;
            }

            // Inside a placed solid block is not free space either; background decor stays spawnable.
            if (TileGrid.IsOccupied(TileGrid.WorldToCell(world), background: false)) return;

            // The click point being free isn't enough — the body has volume. Lift until the collider
            // footprint clears solid geometry, so a click at a block's edge stands ON the surface.
            if (!TryFindClearSpawn(world, out var spawnPos)) return;

            ItemCreator.Create(_pending, spawnPos, _facing);
            // Player-initiated spawns only — ItemCreator itself also serves the map loader and the
            // grenade launcher, where an "item added" chime would be wrong.
            if (ServiceLocator.TryGet<SfxLibrarySO>(out var sfx)) Sfx.Play(sfx.itemSpawn, spawnPos);
            _lastSpawnTime = Time.time;
            Dropped?.Invoke(_pending);
        }

        private bool TryFindClearSpawn(Vector2 click, out Vector2 spawnPos)
        {
            spawnPos = click;
            if (!TryGetPrefabFootprint(_pending.prefab, out var center, out var half)) return true;

            // Slightly shrunk so a snug fit still spawns; physics depenetration handles grazes.
            half *= 0.9f;
            float maxLift = half.y * 2f + 1f;
            for (float lift = 0f; lift <= maxLift; lift += 0.25f)
            {
                var probe = click + center + Vector2.up * lift;
                if (!SolidBlockedAt(probe, half))
                {
                    spawnPos = click + Vector2.up * lift;
                    return true;
                }
            }
            return false; // buried too deep — no sensible surface within reach
        }

        private static bool SolidBlockedAt(Vector2 center, Vector2 half)
        {
            var found = Physics2D.OverlapBoxAll(center, half * 2f, 0f);
            for (int i = 0; i < found.Length; i++)
                if (WorldCollision.IsStatic(found[i]) && !found[i].isTrigger) return true;
            return false;
        }

        // Approximate spawn-pose AABB of the prefab's solid colliders, in root-relative units.
        // Prefab asset transforms are valid, so scaled variants report their true size.
        private static bool TryGetPrefabFootprint(GameObject prefab, out Vector2 center, out Vector2 half)
        {
            center = Vector2.zero;
            half = Vector2.zero;
            var root = prefab.transform;
            float minX = float.MaxValue, minY = float.MaxValue, maxX = float.MinValue, maxY = float.MinValue;
            bool any = false;

            foreach (var col in prefab.GetComponentsInChildren<Collider2D>(true))
            {
                if (col.isTrigger) continue;
                Vector2 extents;
                if (col is BoxCollider2D box) extents = box.size * 0.5f;
                else if (col is CapsuleCollider2D capsule) extents = capsule.size * 0.5f;
                else if (col is CircleCollider2D circle) extents = new Vector2(circle.radius, circle.radius);
                else extents = new Vector2(0.25f, 0.25f);

                var scale = col.transform.lossyScale;
                extents = new Vector2(Mathf.Abs(extents.x * scale.x), Mathf.Abs(extents.y * scale.y));
                Vector2 c = col.transform.TransformPoint(col.offset) - root.position;

                minX = Mathf.Min(minX, c.x - extents.x);
                maxX = Mathf.Max(maxX, c.x + extents.x);
                minY = Mathf.Min(minY, c.y - extents.y);
                maxY = Mathf.Max(maxY, c.y + extents.y);
                any = true;
            }

            if (!any) return false;
            center = new Vector2((minX + maxX) * 0.5f, (minY + maxY) * 0.5f);
            half = new Vector2((maxX - minX) * 0.5f, (maxY - minY) * 0.5f);
            return true;
        }

        #endregion

        #region Deleting
        // Deletes in the order the player sees things stacked: loose objects, then the solid block,
        // then the backdrop behind it. Tiles come from the registry — a backdrop has no collider.
        private void TryDeleteAt(Vector3 world)
        {
            var loose = FindDeletableAt(world);
            if (loose != null)
            {
                if (ServiceLocator.TryGet<SfxLibrarySO>(out var sfx)) Sfx.Play(sfx.itemDelete, world);
                Destroy(loose);
                return;
            }

            var cell = TileGrid.WorldToCell(world);
            if (TileGrid.TryGet(cell, false, out var block)) TryRemoveTile(block, cell);
            else if (TileGrid.TryGet(cell, true, out var backdrop)) TryRemoveTile(backdrop, cell);
        }

        // The spawned THING under the cursor, not the collider hit: a creature is a rig of jointed
        // limbs. The nearest IItemDataReceiver resolves that, and a held weapon to the weapon.
        private static GameObject FindDeletableAt(Vector2 world)
        {
            var hits = Physics2D.OverlapPointAll(world);
            for (int i = 0; i < hits.Length; i++)
            {
                for (var t = hits[i].transform; t != null; t = t.parent)
                {
                    var receiver = t.GetComponent<IItemDataReceiver>();
                    if (receiver == null) continue;
                    // Tiles are handled by the cell path above, which also enforces bedrock.
                    if (receiver is TileEntity) break;
                    return t.gameObject;
                }
            }
            return null;
        }

        // Bedrock answers a delete with the ban overlay instead of disappearing. Deliberately silent
        // about it otherwise — no log spam from a player tapping a block that will never go.
        private void TryRemoveTile(TileEntity tile, Vector2Int cell)
        {
            if (tile.IsIndestructible)
            {
                BanFeedback.ShowAt(TileGrid.CellCenter(cell));
                return;
            }
            tile.Crumble();
        }
        #endregion
    }
}

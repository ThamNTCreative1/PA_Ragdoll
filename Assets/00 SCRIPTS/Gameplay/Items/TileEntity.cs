using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // One placed tile: solid block (collides, damageable) or background decor
    // (collider disabled, indestructible) — decided by the item's TileStats.
    public class TileEntity : MonoBehaviour, IItemDataReceiver, IDamageable
    {
        #region Sorting orders and state
        public const int BackgroundSortingOrder = -10;
        public const int BlockSortingOrder = -1;

        [SerializeField] private SpriteRenderer spriteRenderer;
        [SerializeField] private BoxCollider2D box;
        [Tooltip("Crack overlays in ascending severity, shown as a solid block takes damage")]
        [SerializeField] private Sprite[] crackStages = new Sprite[0];

        private ItemSO _item;
        private float _health;
        private Vector2Int _cell;
        private SpriteRenderer _crackRenderer;
        private FragmentImpact? _lastImpact;

        public bool IsBackground => _item != null && _item.tile.isBackgroundTile;

        // What this tile was built from — lets the spawn tool tell "replace with a different
        // tile" from "the same tile is already here".
        public ItemSO Item => _item;

        // Bedrock: listed in GameConfig, immune to the delete tool, to replacement, and to damage.
        // Resolved once when the data arrives rather than per hit.
        public bool IsIndestructible { get; private set; }

        // Where the chunk mesh reads this tile from.
        public Vector2Int Cell => _cell;
        public Sprite Sprite => spriteRenderer.sprite;

        // While true this tile draws itself and the chunk mesh leaves it out — used for the
        // placement pop, whose scale animation only shows through its own renderer.
        public bool SelfRendered { get; private set; }

        public void SetSelfRendered(bool selfRendered)
        {
            if (SelfRendered == selfRendered) return;
            SelfRendered = selfRendered;
            spriteRenderer.enabled = selfRendered;
            TileChunkRenderer.MarkDirty(_cell);
        }

        #endregion

        #region Data binding and placement
        public void ReceiveData(ItemSO item)
        {
            if (item.type != ItemType.Tile)
            {
                Debug.LogError($"[Tile] {name} received '{item.itemId}' of type {item.type} — expected Tile.", this);
                return;
            }

            _item = item;
            _health = item.tile.maxHealth;
            IsIndestructible = ServiceLocator.TryGet<GameConfigSO>(out var config)
                               && config.IsIndestructible(item);

            if (item.icon != null) spriteRenderer.sprite = item.icon; // else keep the prefab's own sprite
            var sprite = spriteRenderer.sprite;
            if (sprite != null)
            {
                var spriteSize = sprite.bounds.size;
                transform.localScale = new Vector3(TileGrid.CellSize / spriteSize.x, TileGrid.CellSize / spriteSize.y, 1f);
                box.size = spriteSize;
            }
            FragmentSpawner.Prewarm(item, sprite); // pay the sprite-cut cost now, not mid-explosion

            UpdateCrackOverlay();
        }

        public void Place(Vector2Int cell)
        {
            _cell = cell;
            box.enabled = !IsBackground;
            spriteRenderer.sortingOrder = IsBackground ? BackgroundSortingOrder : BlockSortingOrder;
            TileGrid.Register(cell, this);
            if (!IsBackground) TileColliderComposite.Attach(this, box);

            // The chunk mesh draws it from here on; its own renderer only comes back for the pop.
            spriteRenderer.enabled = false;
            TileChunkRenderer.Add(cell);
        }

        private void OnDestroy()
        {
            RemoveFromWorld();
            if (!IsBackground) TileColliderComposite.MarkDirty();
        }

        // Destroy only runs at end of frame, after the chunk meshes have rebuilt — so a broken tile
        // leaves the grid the moment it breaks, or it lingers in the mesh for a frame.
        private void RemoveFromWorld()
        {
            TileGrid.Unregister(_cell, this);
            TileChunkRenderer.MarkDirty(_cell);
        }

        #endregion

        #region Removal and damage
        // The delete tool's removal: the block comes apart where it stands and the shards just fall, with
        // no launch force. Bedrock never reaches here — the tool answers with the ban overlay.
        public void Crumble()
        {
            // Open the hole before the shards exist: they spawn inside this block's own footprint, and leaving
            // it in the merged outline would push them apart — the very force we are trying not to apply.
            if (!IsBackground)
            {
                box.enabled = false;
                TileColliderComposite.RebuildNow();
            }
            RemoveFromWorld();
            FragmentSpawner.Spawn(_item, spriteRenderer.sprite, transform.position, transform.lossyScale,
                spriteRenderer.sortingOrder, impact: null, inert: true);
            PlayBreakSfx();
            Destroy(gameObject);
        }

        public void TakeDamage(float amount, in FragmentImpact impact)
        {
            if (IsBackground) return;
            _lastImpact = impact;
            ApplyDamage(amount);
        }

        // Shots, melee and claws break solid blocks only. Background decor sits behind the play
        // space and would otherwise end up pocked with holes nobody aimed at.
        public void TakeDamage(float amount)
        {
            if (IsBackground) return;
            ApplyDamage(amount);
        }

        // A blast is the one thing decor DOES answer to — it takes a bite out of the wall behind
        // whatever it went off against, which reads as the explosion having gone deep.
        public void TakeBlastDamage(float amount, in FragmentImpact impact)
        {
            _lastImpact = impact;
            ApplyDamage(amount);
        }

        // Bedrock is untouchable whatever the source.
        private void ApplyDamage(float amount)
        {
            if (IsIndestructible) return;
            float healthBefore = _health;
            _health -= amount;
            if (_health <= 0f)
            {
                // Destroyed by force only. Crumble() — the delete tool — deliberately does not
                // report: it is a UI eraser, and letting it count would turn "destroy 20 blocks"
                // into click-spam rather than something the player has to actually blow up.
                TaskReporter.Report(TaskVerb.Destroy, _item);
                RemoveFromWorld();
                var impact = FragmentSpawner.AmplifyForOverkill(_lastImpact, amount, healthBefore);
                FragmentSpawner.Spawn(_item, spriteRenderer.sprite, transform.position, transform.lossyScale,
                    spriteRenderer.sortingOrder, impact);
                PlayBreakSfx();
                Destroy(gameObject);
                return;
            }
            _lastImpact = null; // impact info only pairs with the hit that carried it
            _lastDamageTime = Time.time;
            UpdateCrackOverlay();

            // Handed to the driver once and stays there until it is whole again, so a tile under
            // sustained fire is not re-added on every hit.
            if (_recovering || _item.tile.crackRecoverSeconds <= 0f) return;
            _recovering = true;
            TileRecoveryDriver.Track(this);
        }

        private float _lastDamageTime = float.NegativeInfinity;
        private bool _recovering;

        // Driven by TileRecoveryDriver. Returns true once the tile is whole and can be dropped.
        public bool TickRecovery(float deltaTime)
        #endregion

        #region Crack overlay
        {
            var stats = _item != null ? _item.tile : null;
            if (stats == null || stats.crackRecoverSeconds <= 0f || stats.maxHealth <= 0f)
            {
                _recovering = false;
                return true;
            }

            // Anything still being hit is not recovering — the delay restarts on every hit.
            if (Time.time < _lastDamageTime + stats.crackRecoverDelay) return false;

            _health += stats.maxHealth / stats.crackRecoverSeconds * deltaTime;
            bool whole = _health >= stats.maxHealth;
            if (whole) _health = stats.maxHealth;
            UpdateCrackOverlay();
            if (whole) _recovering = false;
            return whole;
        }

        // Per-tile clip, else the library default. A blast crumbles many blocks at once and the throttle
        // collapses them into one clip, so the pitch jitter keeps back-to-back breaks from sounding stamped.
        private void PlayBreakSfx()
        {
            var clip = _item != null ? _item.tile.breakClip : null;
            if (clip == null && ServiceLocator.TryGet<SfxLibrarySO>(out var sfx)) clip = sfx.tileBreak;
            Sfx.Play(clip, transform.position, 1f, 0.08f);
        }

        // The health band the tile is in: 0 is whole, one stage per crack sprite above that. Cached
        // so a tile healing back up only touches the renderer on frames where the stage changes.
        private int _crackStage;

        // Swaps in an increasingly severe crack as health drops, and back down again as it heals.
        private void UpdateCrackOverlay()
        {
            if (crackStages.Length == 0 || _item == null || _item.tile.maxHealth <= 0f) return;

            float damage = 1f - Mathf.Clamp01(_health / _item.tile.maxHealth);
            // Ceil, so ANY damage shows the lightest crack and only a tile inside its last band
            // shows the heaviest. Floor left the heaviest stage a single point of health to live in.
            int stage = Mathf.Clamp(Mathf.CeilToInt(damage * crackStages.Length), 0, crackStages.Length);
            if (stage == _crackStage) return;
            _crackStage = stage;

            if (stage == 0)
            {
                if (_crackRenderer != null) _crackRenderer.enabled = false;
                return;
            }

            var sprite = crackStages[stage - 1];
            if (sprite == null) return;
            if (_crackRenderer == null) BuildCrackOverlay();
            _crackRenderer.sprite = sprite;
            FitCrackToCell(sprite);
            _crackRenderer.enabled = true;
        }

        private void BuildCrackOverlay()
        {
            var overlay = new GameObject("CrackOverlay");
            overlay.transform.SetParent(transform, false);
            _crackRenderer = overlay.AddComponent<SpriteRenderer>();
            // One in front of whatever layer this tile draws in, so a cracked backdrop tile does
            // not jump in front of the blocks standing on it.
            _crackRenderer.sortingOrder = (IsBackground ? BackgroundSortingOrder : BlockSortingOrder) + 1;
        }

        // The tile root is scaled so ITS OWN sprite fills a cell, so a crack of a different size or PPU
        // would inherit that correction. Measured against the cell directly instead.
        private void FitCrackToCell(Sprite sprite)
        {
            Vector2 size = sprite.bounds.size;
            Vector3 parent = transform.lossyScale;
            if (size.x <= 0f || size.y <= 0f || parent.x == 0f || parent.y == 0f) return;
            _crackRenderer.transform.localScale = new Vector3(
                TileGrid.CellSize / (size.x * parent.x),
                TileGrid.CellSize / (size.y * parent.y), 1f);
        }
        #endregion
    }
}

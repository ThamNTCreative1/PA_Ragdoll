using UnityEngine;

namespace Game.Data
{
    [CreateAssetMenu(menuName = "Data/Game Config", fileName = "GameConfig")]
    public class GameConfigSO : ScriptableObject
    {
        [Header("Frame")]
        public int targetFrameRate = 60;
        public FrameBudgetConfig frameBudget = new FrameBudgetConfig();

        [Header("Device tier thresholds")]
        public int lowTierMaxMemoryMB = 3072;
        public int highTierMinMemoryMB = 6144;
        public int highTierMinCores = 8;

        [Header("UI / Items")]
        [Tooltip("Palette categories; each carries its own ordered item list.")]
        public UICategorySO[] categories = new UICategorySO[0];

        [Header("Indestructible blocks (bedrock)")]
        [Tooltip("Tiles that can never be deleted, replaced or destroyed.")]
        public ItemSO[] indestructibleItems = new ItemSO[0];

        [Tooltip("Overlay shown on a block that refused to be deleted.")]
        public Sprite banIcon;
        [Tooltip("Seconds the ban overlay holds at full opacity before fading.")]
        public float banHoldSeconds = 0.35f;
        [Tooltip("Seconds the ban overlay takes to fade out.")]
        public float banFadeSeconds = 0.3f;

        [Header("Map backdrop")]
        [Tooltip("Tile drawn behind the whole map as decoration and as a grid to place against. " +
                 "It is never placed, collided with or destroyed — only drawn. Empty = no backdrop.")]
        public ItemSO backdropTile;

        [Header("Audio")]
        [Tooltip("Shared fallback sounds; per-item clips win over these. Empty = silent.")]
        public SfxLibrarySO sfx;

        [Header("Spawn Effect")]
        [Tooltip("Particle prefab played at the spawn point of every non-tile item. Empty = no effect.")]
        public GameObject spawnEffect;

        [Header("Blood Effect")]
        [Tooltip("Particle prefab played wherever a creature is hit. Empty = no effect.")]
        public GameObject bloodEffect;

        [Header("Sprite Flash")]
        [Tooltip("Material that blends a sprite toward a solid colour — the TNT's ticking tell. Empty falls back to renderer tint.")]
        public Material spriteFlashMaterial;

        // Linear scan is fine: a handful of entries, checked only on tile spawn/delete, never per frame.
        public bool IsIndestructible(ItemSO item)
        {
            if (item == null) return false;
            for (int i = 0; i < indestructibleItems.Length; i++)
                if (indestructibleItems[i] == item) return true;
            return false;
        }
    }
}

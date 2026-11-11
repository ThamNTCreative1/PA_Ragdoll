using UnityEngine;

namespace Game.Data
{
    // The single item asset: fixed identity fields plus one per-type stats block matching `type`.
    [CreateAssetMenu(menuName = "Data/Item", fileName = "Item")]
    public class ItemSO : ScriptableObject
    {
        public string itemId;

        public string displayName;

        [Tooltip("Palette thumbnail and the default in-world sprite.")]
        public Sprite icon;

        [Tooltip("Rotates the thumbnail only (palette card and Project preview); does not affect the item in-world.")]
        [Range(-180f, 180f)]
        public float iconRotation;

        public GameObject prefab;

        public ItemType type = ItemType.Prop;

        public CreatureStats creature = new CreatureStats();
        public WeaponStats weapon = new WeaponStats();
        public TileStats tile = new TileStats();
        public ExplosiveStats explosive = new ExplosiveStats();
        public PropStats prop = new PropStats();
        public WearableStats wearable = new WearableStats();

        [Tooltip("How this item shatters when destroyed.")]
        public FragmentProfile fragments = new FragmentProfile();

#if UNITY_EDITOR
        // Paths and keys come from EditorToolMenus, which the windows' own [MenuItem] attributes
        // also use — ExecuteMenuItem fails silently, so a drifted path is a button that does nothing.
        private void OpenTool(string menuPath, string pendingKey)
        {
            UnityEditor.SessionState.SetString(pendingKey, UnityEditor.AssetDatabase.GetAssetPath(this));
            UnityEditor.EditorApplication.ExecuteMenuItem(menuPath);
        }

        private void OpenFragmentEditor()
            => OpenTool(EditorToolMenus.FragmentEditor, EditorToolMenus.FragmentPending);

        private void OpenWeaponPoseEditor()
            => OpenTool(EditorToolMenus.WeaponPoseEditor, EditorToolMenus.WeaponPosePending);

        private void OpenExplosiveEditor()
            => OpenTool(EditorToolMenus.ExplosiveEditor, EditorToolMenus.ExplosivePending);

        private void OpenWearablePoseEditor()
            => OpenTool(EditorToolMenus.WearablePoseEditor, EditorToolMenus.WearablePosePending);

        private void OpenRagdollRigEditor()
            => OpenTool(EditorToolMenus.RagdollRigEditor, EditorToolMenus.RagdollRigPending);
#endif

        public UICategorySO category;

        public string categoryId => category != null ? category.categoryId : null;

        [Tooltip("Leave on Free for items available from the start.")]
        public ItemUnlock unlock = new ItemUnlock();

#if UNITY_EDITOR
        private void RegisterToCategory()
        {
            if (category.items.Contains(this))
            {
                Debug.Log($"[Items] '{name}' is already in '{category.name}'.");
                return;
            }
            category.items.Add(this);
            UnityEditor.EditorUtility.SetDirty(category);
            UnityEditor.AssetDatabase.SaveAssets();
            Debug.Log($"[Items] Registered '{name}' to '{category.name}' at position {category.items.Count - 1}.");
        }

        private bool CanRegister => category != null;
#endif
    }
}

namespace Game.Data
{
    // Menu paths for the content-authoring windows, in ONE place. The window declares its [MenuItem]
    // from here and the ItemSO button opens it by the same constant, so the two cannot drift apart.
    //
    // They already had: the menus moved under "Content Editors" while the buttons kept calling the
    // old paths, and ExecuteMenuItem fails silently — every button on every item asset was dead.
    public static class EditorToolMenus
    {
        public const string FragmentEditor = "Tools/Content Editors/Fragment Editor";
        public const string WeaponPoseEditor = "Tools/Content Editors/Weapon Pose Editor";
        public const string WearablePoseEditor = "Tools/Content Editors/Wearable Pose Editor";
        public const string ExplosiveEditor = "Tools/Content Editors/Explosive Editor";
        public const string RagdollRigEditor = "Tools/Content Editors/Ragdoll Rig Editor";
        public const string TileBatchCreator = "Tools/World Building/Tile Batch Creator";

        // SessionState keys the buttons park an asset path in for the window to pick up on open.
        public const string FragmentPending = "FragmentEditor.PendingItemPath";
        public const string WeaponPosePending = "WeaponPoseEditor.PendingItemPath";
        public const string WearablePosePending = "WearablePoseEditor.PendingItemPath";
        public const string ExplosivePending = "ExplosiveEditor.PendingItemPath";
        public const string RagdollRigPending = "RagdollRigEditor.PendingItemPath";
    }
}

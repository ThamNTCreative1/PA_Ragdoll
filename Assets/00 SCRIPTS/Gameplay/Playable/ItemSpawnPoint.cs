using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Marks where an item (creature, mine, prop…) starts on the hand-built map. PlayableBootstrap
    // spawns it through ItemCreator at Start, so it gets its data exactly like a palette spawn.
    public class ItemSpawnPoint : MonoBehaviour
    {
        [SerializeField] private ItemSO item;
        [Tooltip("1 = facing right, -1 = facing left")]
        [SerializeField] private int facing = ItemFacing.Right;

        [Tooltip("This creature is the player: the weapon picked in the weapon select UI is equipped on it")]
        [SerializeField] private bool isPlayer;

        public ItemSO Item => item;
        public int Facing => facing;
        [Tooltip("Explosives: placed unlit as a trap — no fuse until a creature touches it or a blast reaches it")]
        [SerializeField] private bool dormant = true;

        public bool IsPlayer => isPlayer;
        public bool Dormant => dormant;

#if UNITY_EDITOR
        // Editor preview of what will spawn here.
        private void OnDrawGizmos()
        {
            Gizmos.color = new Color(1f, 0.6f, 0f, 0.8f);
            Gizmos.DrawWireSphere(transform.position, 0.12f);
            if (item != null)
                UnityEditor.Handles.Label(transform.position + Vector3.up * 0.25f, item.displayName);
        }
#endif
    }
}

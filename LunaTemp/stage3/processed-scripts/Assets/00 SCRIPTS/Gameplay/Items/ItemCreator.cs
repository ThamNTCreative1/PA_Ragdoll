using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Single entry point for spawning any item: instantiate its prefab, hand the definition to
    // the root's IItemDataReceiver.
    public static class ItemCreator
    {
        // Reused by every spawn: a map load runs Create a few thousand times in a row.
        private static readonly System.Collections.Generic.List<IItemSpawnBehaviour> SpawnBehaviourBuffer = new System.Collections.Generic.List<IItemSpawnBehaviour>();

        public static GameObject Create(ItemSO item, [Bridge.Ref] Vector2 position, int facing = ItemFacing.Right)
        {
            if (item == null) return null;
            if (item.prefab == null)
            {
                Debug.LogError($"[Items] '{item.itemId}' has no prefab to spawn.");
                return null;
            }

            var instance = Object.Instantiate(item.prefab, position, Quaternion.identity);
            SpawnRegistry.Register(instance);
            if (instance.TryGetComponent<IItemDataReceiver>(out var receiver))
                receiver.ReceiveData(item);

            // After the data, so the art it just installed is what gets mirrored. Item types with
            // no left/right (tiles, explosives) don't implement the interface and stay as authored.
            if (instance.TryGetComponent<IItemFacingReceiver>(out var facingReceiver))
                facingReceiver.SetFacing(ItemFacing.Sign(facing));

            // Spawn-time behaviours run after data is in, so they can read the item. Filled into a reused list:
            // a map load runs this a few thousand times, allocating an array each call.
            instance.GetComponents(SpawnBehaviourBuffer);
            for (int i = 0; i < SpawnBehaviourBuffer.Count; i++)
                SpawnBehaviourBuffer[i].OnSpawned(item);

            // Every non-tile spawn gets the configured puff. Tiles are excluded: they flood in by the hundreds
            // on map load, and TilePlacePop already sells their placement.
            if (item.type != ItemType.Tile)
                SpawnEffectSpawner.Play(position);

            // Bulk means a map is being built, not the player placing something — crediting a task
            // for the thousand tiles of a map load would complete it before the player touched it.
            if (!SpawnRegistry.IsBulk)
                TaskReporter.Report(TaskVerb.Spawn, item);

            return instance;
        }
    }
}

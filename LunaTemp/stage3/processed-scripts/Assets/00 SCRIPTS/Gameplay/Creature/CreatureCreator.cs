using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Single entry point for spawning a creature: the item's own prefab, or the shared rig fallback.
    public static class CreatureCreator
    {
        public static CreatureAgent Create(GameObject defaultRigPrefab, ItemSO data, [Bridge.Ref] Vector2 position)
        {
            var rig = data != null && data.prefab != null ? data.prefab : defaultRigPrefab;
            var agent = Object.Instantiate(rig, position, Quaternion.identity).GetComponent<CreatureAgent>();
            agent.Initialize(data);
            return agent;
        }
    }
}

using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // The just-appeared puff, one prefab for every non-tile item, configured on GameConfigSO. Tiles
    // skip it — TilePlacePop already sells their placement.
    public static class SpawnEffectSpawner
    {
        public static void Play([Bridge.Ref] Vector2 position)
        {
            if (!ServiceLocator.TryGet<GameConfigSO>(out var config) || config.spawnEffect == null) return;

            // Pooled: this fires for every item placed, and dragging a spawn across the world sets
            // off a stream of them.
            EffectPool.Play(config.spawnEffect, position, Quaternion.identity, 1f);
        }
    }
}

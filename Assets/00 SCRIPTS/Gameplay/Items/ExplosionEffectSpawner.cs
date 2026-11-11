using UnityEngine;

namespace Game.Gameplay
{
    // Detonation visuals: the one-shot burst every explosive plays, and the smoke bomb's cloud.
    public static class ExplosionEffectSpawner
    {
        // How long an effect with no ParticleSystem to measure is given before it is cleaned up.
        private const float DefaultLifetime = 2f;

        public static void Play(GameObject prefab, Vector2 position, float scale)
        {
            var fx = Spawn(prefab, position, scale);
            if (fx != null) Object.Destroy(fx, Lifetime(fx));
        }

        // The cloud carries its own shutdown, and with it whatever `owner` it was told to take down.
        public static GameObject PlayCloud(GameObject prefab, Vector2 position, float scale,
                                           float seconds, Transform parent = null, GameObject owner = null)
        {
            var fx = Spawn(prefab, position, scale, parent);
            if (fx != null) fx.AddComponent<SmokeCloud>().Begin(seconds, owner);
            return fx;
        }

        // Scaled off the prefab's authored scale, not to it, so one blast prefab serves both a grenade and a nuke.
        private static GameObject Spawn(GameObject prefab, Vector2 position, float scale, Transform parent = null)
        {
            if (prefab == null) return null;
            var fx = Object.Instantiate(prefab, position, Quaternion.identity, parent);

            var size = prefab.transform.localScale * Mathf.Max(0.01f, scale);
            // Divided back out of the parent's scale, so `scale` reads the same loose or riding a scaled canister.
            if (parent != null)
            {
                var host = parent.lossyScale;
                size = new Vector3(
                    host.x != 0f ? size.x / host.x : size.x,
                    host.y != 0f ? size.y / host.y : size.y,
                    host.z != 0f ? size.z / host.z : size.z);
            }
            fx.transform.localScale = size;
            EffectSorting.LiftAboveSprites(fx);
            return fx;
        }

        // Worst case across all nested systems, so cleanup never cuts one off mid-flight.
        private static float Lifetime(GameObject fx)
        {
            float longest = 0f;
            foreach (var ps in fx.GetComponentsInChildren<ParticleSystem>())
            {
                var main = ps.main;
                longest = Mathf.Max(longest, main.duration + main.startLifetime.constantMax);
            }
            return longest > 0f ? longest + 0.1f : DefaultLifetime;
        }
    }
}

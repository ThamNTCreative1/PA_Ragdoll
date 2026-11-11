using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Plays a weapon's authored on-hit effects at the point of impact. Shared, because a melee overlap
    // and a bullet's swept raycast both land hits and must look the same however delivered.
    public static class HitEffectSpawner
    {


        // point = world contact; direction = the way the blow travelled, which the effect aims down;
        // victim = the struck body, so an attached effect can ride it. Null is fine.
        public static void Play(WeaponHitEffect[] effects, [Bridge.Ref] Vector2 point, [Bridge.Ref] Vector2 direction,
                                float weaponScale, Transform victim)
        {
            if (effects == null) return;

            float aim = direction.sqrMagnitude > 0.0001f
                ? Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg
                : 0f;

            for (int i = 0; i < effects.Length; i++)
            {
                var e = effects[i];
                if (e == null || e.prefab == null) continue;

                // The offset is authored in the BLOW's frame (x along it), so it turns with the hit
                // rather than sitting at a fixed compass direction from the target.
                Vector2 spawn = point + Rotate(e.offset, aim);
                var rotation = Quaternion.Euler(0f, 0f, aim + e.rotation);

                // Parenting to the victim only if asked: a gore burst should ride the body as it is
                // knocked away, but sparks off a wall must not follow anything.
                var parent = e.attached ? victim : null;

                // An attached effect already inherits its parent's scale; a loose one is given the
                // weapon's, so a big weapon's impact reads bigger than a small one's.
                float size = Mathf.Max(0.01f, e.scale) * (e.attached ? 1f : Mathf.Max(0.01f, weaponScale));
                EffectPool.Play(e.prefab, spawn, rotation, size, parent);
            }
        }

        private static Vector2 Rotate([Bridge.Ref] Vector2 v, float degrees)
        {
            float r = degrees * Mathf.Deg2Rad;
            float c = Mathf.Cos(r), s = Mathf.Sin(r);
            return new Vector2(v.x * c - v.y * s, v.x * s + v.y * c);
        }
    }
}

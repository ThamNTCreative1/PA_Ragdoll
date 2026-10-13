using UnityEngine;

namespace MelonSandbox
{
    public sealed class MelonProjectile : MonoBehaviour
    {
        public MelonGame game;
        public MelonToolKind kind;
        public Vector2 velocity;
        public float duration = .75f;
        float age;
        SpriteRenderer visual;
        void Start() { visual = GetComponent<SpriteRenderer>(); }
        void Update()
        {
            var current = (Vector2)transform.position;
            Vector2 step = velocity * Time.deltaTime;
            MelonLimb hit;
            Vector2 hitPoint;
            if (Trace(game, current, current + step + step.normalized * .12f, out hit, out hitPoint))
            {
                hit.owner.Apply(kind, hit, hitPoint); Destroy(gameObject); return;
            }
            transform.position += (Vector3)step;
            age += Time.deltaTime;
            if (kind == MelonToolKind.Flame)
            {
                transform.localScale = Vector3.one * (.12f + age * .8f);
                if (visual) visual.color = new Color(1, 1, 1, 1 - age / duration);
            }
            if (age >= duration) Destroy(gameObject);
        }
        public static bool Trace(MelonGame game, Vector2 start, Vector2 end, out MelonLimb hit, out Vector2 point)
        {
            hit = null; point = end;
            if (!game) return false;
            Vector2 step = end - start;
            float nearest = float.PositiveInfinity;
            foreach (var character in game.characters)
            {
                if (!character || character.dead || !character.gameObject.activeInHierarchy) continue;
                foreach (var limb in character.limbs)
                {
                    if (!limb || !limb.skin || !limb.gameObject.activeInHierarchy) continue;
                    var bounds = limb.skin.bounds;
                    float entry = 0, exit = 1;
                    if (!ClipAxis(start.x, step.x, bounds.min.x, bounds.max.x, ref entry, ref exit)
                        || !ClipAxis(start.y, step.y, bounds.min.y, bounds.max.y, ref entry, ref exit)
                        || entry >= nearest) continue;
                    nearest = entry; hit = limb;
                }
            }
            if (!hit) return false;
            point = start + step * nearest;
            return true;
        }
        static bool ClipAxis(float start, float step, float min, float max, ref float entry, ref float exit)
        {
            if (Mathf.Abs(step) < .000001f) return start >= min && start <= max;
            float first = (min - start) / step, last = (max - start) / step;
            if (first > last) { float swap = first; first = last; last = swap; }
            entry = Mathf.Max(entry, first); exit = Mathf.Min(exit, last);
            return entry <= exit;
        }
    }
}

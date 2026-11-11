using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // A bullet in flight: travels in a straight line, damages the first thing it touches, dies.
    // Fired by WeaponEntity; everything it needs is passed in through Launch.
    [RequireComponent(typeof(Rigidbody2D))]
    public class ProjectileEntity : MonoBehaviour
    {
        // Knockback is divided by this so a default weapon breaks things at shard power ~1.
        private const float ReferenceKnockback = 4f;
        // How far past the impact point to look for the block that was hit; a hit lands exactly on
        // the surface, which is the boundary between two cells.
        private const float SurfaceNudge = 0.05f;

        [SerializeField] private Rigidbody2D body;
        [SerializeField] private SpriteRenderer spriteRenderer;
        [Tooltip("Seconds before an unobstructed shot gives up and despawns.")]
        [SerializeField] private float lifetime = 3f;

        private float _damage;
        private float _knockback;
        private int _mask;
        private Vector2 _direction;
        private float _dieTime;
        private float _artRotation;
        private WeaponHitEffect[] _hitEffects;
        private float _weaponScale = 1f;

        // Which pool this shot came from. A burst of auto-fire spawned and destroyed a GameObject
        // per bullet — per PELLET on a shotgun — which was the biggest allocator in the game.
        private GameObject _poolPrefab;
        private IObjectPoolService _pool;

        public void SetPool(IObjectPoolService pool, GameObject prefab)
        {
            _pool = pool;
            _poolPrefab = prefab;
        }

        private void Despawn()
        {
            if (_pool != null && _poolPrefab != null)
            {
                body.linearVelocity = Vector2.zero;
                body.angularVelocity = 0f;
                _pool.Release(_poolPrefab, gameObject);
                return;
            }
            Destroy(gameObject); // un-pooled (a scene-placed shot); behave as before
        }

        // What the firing weapon plays where this lands. Carried by the shot rather than fired by the
        // weapon, because only the bullet knows where — and whether — it eventually hits.
        public void SetHitEffects(WeaponHitEffect[] effects, float weaponScale)
        {
            _hitEffects = effects;
            _weaponScale = weaponScale;
        }

        // The weapon's own look for its shots. Scale is visual only: a shot is a swept raycast, not a body.
        // rotation corrects art not drawn pointing +X; nothing reads this transform's rotation.
        public void SetVisual(Sprite sprite, float scale, float rotation)
        {
            transform.localScale = Vector3.one * Mathf.Max(0.01f, scale);
            _artRotation = rotation;
            if (spriteRenderer == null) return;
            // Always assigned: a pooled shot still wears the last weapon's bullet art otherwise.
            spriteRenderer.sprite = sprite != null ? sprite : _defaultSprite;
        }

        // The prefab's own art, which is what a weapon that sets no projectileSprite asks for.
        private Sprite _defaultSprite;

        private void Awake()
        {
            // Looked up rather than required: bullet prefabs authored before this still work.
            if (spriteRenderer == null) spriteRenderer = GetComponentInChildren<SpriteRenderer>();
            if (spriteRenderer != null) _defaultSprite = spriteRenderer.sprite;
        }

        public void Launch(Vector2 origin, Vector2 direction, float speed, float damage,
                           float knockback, int hitMask)
        {
            transform.position = origin;
            _direction = direction.normalized;
            _damage = damage;
            _knockback = knockback;
            _mask = hitMask;
            _dieTime = Time.time + lifetime;

            transform.rotation = Quaternion.Euler(
                0f, 0f, Mathf.Atan2(_direction.y, _direction.x) * Mathf.Rad2Deg + _artRotation);
            body.linearVelocity = Vector2.zero; // moved by Update below, not by the solver
            _speed = speed;
            _justLaunched = true;
        }

        private float _speed;
        private bool _justLaunched;

        // Moved here every rendered frame rather than by the physics step: a physics-moved shot is
        // first drawn one step out (~1 unit at 30 Hz), and only Rigidbody2D interpolation (Editor;
        // Luna has none) hid that. The first frame draws it on the muzzle, then it flies.
        // Swept, not a trigger overlap: a fast bullet moves further than its own length per frame and
        // would tunnel straight through a thin target. The cast covers the whole move.
        private void Update()
        {
            if (Time.time >= _dieTime)
            {
                Despawn();
                return;
            }
            if (_justLaunched)
            {
                _justLaunched = false;
                return;
            }

            float travel = _speed * Time.deltaTime;
            if (travel <= 0f) return;

            Vector2 from = transform.position;
            var hit = Physics2D.Raycast(from, _direction, travel, _mask);
            if (hit.collider != null)
            {
                Resolve(hit);
                Despawn();
                return;
            }
            transform.position = from + _direction * travel;
        }

        private void Resolve(RaycastHit2D hit)
        {
            var impact = new FragmentImpact
            {
                point = hit.point,
                strength = 1f,
                direction = _direction,
                power = _knockback / ReferenceKnockback,
            };

            // The registry, not GetComponentInParent: a miss there builds an error string, and every
            // shot that lands on scenery is a miss. Most shots hit scenery.
            var agent = CreatureAgent.OwnerOf(hit.collider);
            if (agent != null && hit.rigidbody != null) agent.TakeHitAt(hit.rigidbody, _damage, impact);
            else FindDamageable(hit)?.TakeDamage(_damage, impact);

            if (hit.rigidbody != null && hit.rigidbody.bodyType == RigidbodyType2D.Dynamic)
            {
                hit.rigidbody.AddForce(_direction * _knockback, ForceMode2D.Impulse);
                TunnelGuard.Apply(hit.rigidbody);
            }

            // At the contact point, aimed down the shot — sparks off a wall as readily as off a rig,
            // so the impact reads wherever it lands.
            HitEffectSpawner.Play(_hitEffects, hit.point, _direction, _weaponScale,
                                  hit.rigidbody != null ? hit.rigidbody.transform : null);
        }

        // Blocks answer as one merged collider, so a hit on the world names no particular tile —
        // step just past the surface to land inside the cell that was actually struck.
        private IDamageable FindDamageable(RaycastHit2D hit)
        {
            // World geometry is one merged static collider owning no component, so the walk can only fail — and
            // a failed walk allocates an error string. Blocks are found by cell instead.
            if (hit.rigidbody == null || hit.rigidbody.bodyType == RigidbodyType2D.Static)
                return TileGrid.TryGetBlockAt(hit.point + _direction * SurfaceNudge, out var block) ? block : null;

            // TryGetComponent, so the common miss costs nothing; the walk is the rare fallback.
            if (hit.rigidbody.TryGetComponent<IDamageable>(out var onBody)) return onBody;
            return hit.collider.GetComponentInParent<IDamageable>();
        }

        private void Reset()
        {
            body = GetComponent<Rigidbody2D>();
            spriteRenderer = GetComponentInChildren<SpriteRenderer>();
        }
    }
}

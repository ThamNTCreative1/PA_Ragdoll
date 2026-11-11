using System.Collections.Generic;
using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // A decoration prop with its own little life: a plain physics object that can be pushed
    // around and damaged, and shatters into short-lived shards when its health runs out.
    public class PropEntity : MonoBehaviour, IItemDataReceiver, IItemFacingReceiver, IDamageable
    {
        private const float ShardFadeDelay = 0.8f;
        private const float ShardFadeDuration = 1.2f;
        private const float ShardScale = 0.35f;
        private const float ShardImpulse = 1.5f;

        [SerializeField] private SpriteRenderer spriteRenderer;
        [SerializeField] private BoxCollider2D box;

        private ItemSO _item;
        private float _health;
        private bool _broken;
        private bool _beingEaten;
        private int _kickCount;
        private FragmentImpact? _lastImpact;

        // Reused across every burst in the scene — a shelf of flasks going off in a chain should
        // not allocate a fresh array each time.
        private static readonly List<Collider2D> BurstHits = new List<Collider2D>();
        private static readonly HashSet<CreatureAgent> BurstVictims = new HashSet<CreatureAgent>();
        private static ContactFilter2D _burstFilter;
        private static bool _burstFilterReady;

        // Everything caught in the radius takes the authored effects, once each. A creature is
        // several colliders, so without the dedupe a potion would hit it once per limb.
        private void Burst()
        {
            var stats = _item.prop;
            if (stats.burstRadius <= 0f) return;

            if (stats.burstEffect != null)
                ExplosionEffectSpawner.Play(stats.burstEffect, transform.position, stats.burstEffectScale);

            if (stats.burstEffects == null || stats.burstEffects.Length == 0) return;

            if (!_burstFilterReady)
            {
                _burstFilter = new ContactFilter2D();
                _burstFilter.NoFilter();
                _burstFilterReady = true;
            }

            Physics2D.OverlapCircle(transform.position, stats.burstRadius, _burstFilter, BurstHits);
            BurstVictims.Clear();
            for (int i = 0; i < BurstHits.Count; i++)
            {
                var agent = CreatureAgent.OwnerOf(BurstHits[i]);
                if (agent == null || agent.IsDead) continue;
                BurstVictims.Add(agent);
            }

            foreach (var victim in BurstVictims)
                for (int e = 0; e < stats.burstEffects.Length; e++)
                    victim.ApplyEffect(stats.burstEffects[e]);
        }

        public void ReceiveData(ItemSO item)
        {
            if (item.type != ItemType.Prop)
            {
                Debug.LogError($"[Prop] {name} received '{item.itemId}' of type {item.type} — expected Prop.", this);
                return;
            }

            _item = item;
            _health = item.prop.maxHealth;
            if (item.icon != null) spriteRenderer.sprite = item.icon; // else keep the prefab's own sprite
            var sprite = spriteRenderer.sprite;
            if (sprite != null) box.size = sprite.bounds.size; // collider hugs whatever art the prop uses
            FragmentSpawner.Prewarm(item, sprite); // pay the sprite-cut cost now, not mid-explosion
            TryRegisterLure(); // _item is only known now, so this is the spawn-path registration
        }

        // Mirror the art only: the collider is fitted to the sprite's bounds, which mirroring
        // leaves the same size, and a negative transform scale would invert the physics.
        public void SetFacing(int facing) => spriteRenderer.flipX = facing < 0;

        public float LureRadius => _item != null ? _item.prop.lureRadius : 0f;
        public float KickRange => _item != null ? _item.prop.kickRange : 0f;
        public float KickCooldown => _item != null ? _item.prop.kickCooldown : 0f;
        public PropLureVerb LureVerb => _item != null ? _item.prop.lureVerb : PropLureVerb.Kick;
        public bool LureOverridesTarget => _item != null && _item.prop.lureOverridesTarget;
        // Exposed so a creature that eats this can name what it ate when reporting a Feed task.
        public ItemSO Item => _item;
        public float EatSeconds => _item != null ? _item.prop.eatSeconds : 0f;
        public float EatBitesPerSecond => _item != null ? _item.prop.eatBitesPerSecond : 3f;
        public AudioClip EatClip => _item != null ? _item.prop.eatClip : null;
        public CreatureEffect[] EatEffects => _item != null ? _item.prop.eatEffects : null;

        // Taken off the ground and carried: physics off so it rides the hand instead of fighting
        // it, and out of the registry so a second creature does not come for the same meal.
        public void BeginCarried(Transform hand, int sortingOrder)
        {
            if (_item == null || _broken || _beingEaten) return;
            PropLureRegistry.Unregister(this);
            // NOT _broken: it still has to be able to shatter at the end of the meal. This only
            // takes it out of circulation so nothing else lures to it or smashes it mid-bite.
            _beingEaten = true;

            if (TryGetComponent<Rigidbody2D>(out var body)) body.simulated = false;
            if (box != null) box.enabled = false;
            transform.SetParent(hand, worldPositionStays: false);
            transform.localPosition = Vector3.zero;
            transform.localRotation = Quaternion.identity;

            // The rig's ghosts sit on the arm's own sorting layer; matching it is what lets the
            // order below actually put the meal in front of the hand holding it.
            if (spriteRenderer != null)
            {
                var arm = hand.GetComponentInParent<SpriteRenderer>();
                if (arm != null) spriteRenderer.sortingLayerID = arm.sortingLayerID;
                spriteRenderer.sortingOrder = sortingOrder; // the carrier's slab, among its limbs
            }
        }

        // Finished: comes apart into scraps rather than blinking out.
        public void Consume()
        {
            if (_item == null || _broken) return;

            // Back into the world first, or the shards spawn at the hand's scale and rotation and
            // then get orphaned when the prop is destroyed.
            transform.SetParent(null, worldPositionStays: true);
            _beingEaten = false;

            _lastImpact = new FragmentImpact
            {
                point = transform.position,
                strength = 0.6f,   // a nibbled-apart scatter, not a blast
                direction = Vector2.up,
            };
            Break(_item.prop.maxHealth, _item.prop.maxHealth);
        }

        public bool LuresCreature(bool isZombie)
        {
            if (_item == null || _broken || _beingEaten || _item.prop.lureRadius <= 0f) return false;
            var want = isZombie ? PropLureTarget.Zombie : PropLureTarget.Normal;
            return (_item.prop.lureCreatures & want) != 0;
        }

        // Registration happens from BOTH: OnEnable fires before ReceiveData on a fresh spawn, when _item is
        // null and the radius reads zero. OnEnable covers re-enable, ReceiveData the spawn.
        private void OnEnable() => TryRegisterLure();

        private void TryRegisterLure()
        {
            if (LureRadius > 0f) PropLureRegistry.Register(this);
        }

        private void OnDisable() => PropLureRegistry.Unregister(this);

        // Booted away from whoever kicked it, with some lift so a ball arcs instead of skidding.
        public void Kick([Bridge.Ref] Vector2 from)
        {
            if (_item == null || _broken || _beingEaten) return;
            var stats = _item.prop;
            if (stats.kickForce <= 0f) return;

            var body = GetComponent<Rigidbody2D>();
            if (body == null) return;

            Vector2 away = (Vector2)transform.position - from;
            away = away.sqrMagnitude < 0.0001f ? Vector2.right : away.normalized;
            var dir = new Vector2(away.x, 0f).normalized;
            var impulse = (dir * (1f - stats.kickLift) + Vector2.up * stats.kickLift) * stats.kickForce;

            body.AddForce(impulse, ForceMode2D.Impulse);
            body.AddTorque(-dir.x * stats.kickForce * 0.1f, ForceMode2D.Impulse);
            Sfx.Play(stats.kickClip, transform.position, 1f, 0.06f);

            if (stats.kicksToBreak <= 0) return;
            if (++_kickCount < stats.kicksToBreak) return;

            // Bursts along the kick, so the shards carry on the way the ball was going rather than
            // puffing straight out from where it happened to be standing.
            _lastImpact = new FragmentImpact
            {
                point = transform.position,
                strength = 1f,
                direction = impulse.normalized,
            };
            Break(stats.maxHealth, stats.maxHealth);
        }

        // A fragile prop goes on being touched, not on losing health — so a flask nudged by a
        // wandering creature shatters exactly like one thrown at a wall.
        private void OnCollisionEnter2D(Collision2D collision)
        {
            if (_item == null || _broken || _beingEaten || !_item.prop.breakOnContact) return;
            if (collision.relativeVelocity.magnitude < _item.prop.breakImpulse) return;
            if ((Classify(collision.collider) & _item.prop.breakableBy) == 0) return;
            Break(_item.prop.maxHealth, _item.prop.maxHealth);
        }

        // Which of the authored contact categories this collider belongs to. Anything unrecognised
        // (ground, debris, shards) reports None and can never break a prop.
        private static PropContact Classify(Collider2D other)
        {
            if (other == null) return PropContact.None;
            if (CreatureAgent.OwnerOf(other) != null) return PropContact.Creature;
            if (other.GetComponentInParent<PropEntity>() != null) return PropContact.Prop;
            if (other.GetComponentInParent<WeaponEntity>() != null) return PropContact.Weapon;
            if (other.GetComponentInParent<TileEntity>() != null) return PropContact.Tile;
            return PropContact.None;
        }

        public void TakeDamage(float amount, [Bridge.Ref] in FragmentImpact impact)
        {
            _lastImpact = impact;
            TakeDamage(amount);
        }

        public void TakeDamage(float amount)
        {
            float healthBefore = _health;
            _health -= amount;
            if (_health <= 0f) Break(amount, healthBefore);
            else _lastImpact = null; // impact info only pairs with the hit that carried it
        }

        private void Break(float damage, float healthBefore)
        {
            if (_broken) return; // contact and damage can both land in one frame; break once
            _broken = true;
            // Behind the once-only guard, so a prop hit twice in a frame counts once.
            TaskReporter.Report(TaskVerb.Destroy, _item);

            Burst();

            var clip = _item.prop.breakClip;
            if (clip == null && ServiceLocator.TryGet<SfxLibrarySO>(out var sfx)) clip = sfx.propBreak;
            Sfx.Play(clip, transform.position, 1f, 0.05f);

            var impact = FragmentSpawner.AmplifyForOverkill(_lastImpact, damage, healthBefore);
            if (FragmentSpawner.Spawn(_item, spriteRenderer.sprite, transform.position, transform.lossyScale,
                    spriteRenderer.sortingOrder, impact))
            {
                Destroy(gameObject);
                return;
            }

            LegacyBreak();
        }

        // Pre-FragmentProfile behavior, kept for items with no authored pieces: N copies of the
        // full icon flung in random directions.
        private void LegacyBreak()
        {
            for (int i = 0; i < _item.prop.shardCount; i++)
            {
                var shard = new GameObject("PropShard");
                shard.transform.position = transform.position + (Vector3)(Random.insideUnitCircle * 0.2f);
                shard.transform.localScale = Vector3.one * ShardScale;

                var renderer = shard.AddComponent<SpriteRenderer>();
                renderer.sprite = spriteRenderer.sprite;
                renderer.sortingOrder = spriteRenderer.sortingOrder;

                var collider = shard.AddComponent<CircleCollider2D>();
                collider.radius = 0.05f;

                var body = shard.AddComponent<Rigidbody2D>();
                body.mass = 0.05f;
                body.AddForce(Random.insideUnitCircle.normalized * ShardImpulse, ForceMode2D.Impulse);
                body.AddTorque(Random.Range(-0.2f, 0.2f), ForceMode2D.Impulse);

                FadeOutAndDespawn.Begin(shard, ShardFadeDelay, ShardFadeDuration);
            }

            Destroy(gameObject);
        }
    }
}

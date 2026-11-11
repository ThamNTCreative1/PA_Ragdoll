using System.Collections.Generic;
using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Every explosive: trigger picks the moment, kind picks the effect (blast/smoke/firework); flying kinds drive there first.
    public class ExplosiveEntity : MonoBehaviour, IItemDataReceiver
    {
        #region Tuning constants and state
        // Shard power scales with blast force (grenade force ~7.8 -> power ~4.7); this is the peak, at-center multiplier.
        private const float ShardPowerPerForce = 0.6f;

        // Ignores collisions this long after spawn so overlapping the thrower doesn't pop it on frame one.
        private const float ContactArmDelay = 0.08f;

        // How far off the nose a contact may sit and still count as a nose hit — cos(60°).
        private const float NoseHitDot = 0.5f;

        [SerializeField] private SpriteRenderer spriteRenderer;

        private ExplosiveStats _data;
        private float _detonateTime;
        private float _armTime;
        private bool _detonated;

        #endregion

        #region Data binding and launch
        public void ReceiveData(ItemSO item)
        {
            if (item.type != ItemType.Explosive)
            {
                Debug.LogError($"[Explosive] {name} received '{item.itemId}' of type {item.type} — expected Explosive.", this);
                return;
            }

            _data = item.explosive;
            if (spriteRenderer == null) spriteRenderer = GetComponentInChildren<SpriteRenderer>();
            if (spriteRenderer != null && item.icon != null) spriteRenderer.sprite = item.icon;
            FitCollider();
            // Art AND collider, so a nuke is physically the size it looks.
            if (!Mathf.Approximately(_data.scale, 1f)) transform.localScale *= _data.scale;

            _armTime = Time.time + ContactArmDelay;
            LightFuse();

            // A mine has no fuse at all — the plate is the only thing that can set it off.
            if (_data.kind == ExplosiveKind.Mine)
            {
                _detonateTime = float.PositiveInfinity;
                gameObject.AddComponent<MinePlate>().Begin(this, _data, spriteRenderer);
                return;
            }

            if (TryGetFlightDirection(_data.kind, out var direction)) Launch(direction);
        }

        // Pin pulled / fuse lit: the timer starts and a timed charge begins to blink.
        private void LightFuse()
        {
            _detonateTime = Time.time + _data.fuseSeconds;
            Sfx.Play(_data.armClip, transform.position);

            if (_data.kind == ExplosiveKind.Timed && spriteRenderer != null)
            {
                ServiceLocator.TryGet<GameConfigSO>(out var config);
                gameObject.AddComponent<ExplosiveBlink>().Begin(
                    spriteRenderer, _data.blinkColor, _data.blinkStartInterval,
                    _data.blinkEndInterval, _data.fuseSeconds,
                    config != null ? config.spriteFlashMaterial : null);
            }
        }

        // Playable: a charge placed on the map as a trap. It lies there unlit (no fuse, no contact
        // trigger) until a creature touches it or another blast reaches it — see Wake. Mines already
        // wait for their plate, so they are left as they are.
        private bool _dormant;
        public bool IsDormant => _dormant;

        public void MakeDormant()
        {
            if (_data == null || _detonated || _data.kind == ExplosiveKind.Mine) return;
            _dormant = true;
            _detonateTime = float.PositiveInfinity;
            if (TryGetComponent<ExplosiveBlink>(out var blink))
            {
                blink.enabled = false;
                Destroy(blink);
            }
        }

        // Contact charges go off on the spot; fused ones light their fuse now.
        public void Wake()
        {
            if (!_dormant || _detonated) return;
            _dormant = false;
            if (_data.trigger == ExplosiveTrigger.Contact || _data.trigger == ExplosiveTrigger.NoseContact) Detonate();
            else LightFuse();
        }

        // Every kind shares one prefab but brings its own art, so the collider is refit to whatever sprite arrives.
        private void FitCollider()
        {
            if (spriteRenderer == null || spriteRenderer.sprite == null) return;

            var visual = spriteRenderer.transform;
            // The Visual child carries its own scale; the collider sits on the root, so fold it in.
            Vector2 art = visual == transform ? Vector2.one : (Vector2)visual.localScale;
            var bounds = spriteRenderer.sprite.bounds;
            var size = new Vector2(Mathf.Abs(bounds.size.x * art.x), Mathf.Abs(bounds.size.y * art.y));
            var offset = (Vector2)visual.localPosition + (Vector2)bounds.center * art;

            TryGetComponent<CapsuleCollider2D>(out var capsule);

            if (_data.bodyShape == ExplosiveBody.Box)
            {
                if (capsule != null) capsule.enabled = false;
                if (!TryGetComponent<BoxCollider2D>(out var box)) box = gameObject.AddComponent<BoxCollider2D>();
                box.enabled = true;
                box.size = size;
                box.offset = offset;
                return;
            }

            if (capsule == null) return;
            capsule.enabled = true;
            capsule.size = size;
            capsule.direction = size.y >= size.x
                ? CapsuleDirection2D.Vertical
                : CapsuleDirection2D.Horizontal;
            capsule.offset = offset;
        }

        // A firework climbs, a rocket dives; every other kind just falls where it was dropped.
        private static bool TryGetFlightDirection(ExplosiveKind kind, out Vector2 direction)
        {
            direction = kind == ExplosiveKind.Firework ? Vector2.up : Vector2.down;
            return kind == ExplosiveKind.Firework || kind == ExplosiveKind.Rocket;
        }

        private void Launch(Vector2 direction)
        {
            var body = GetComponent<Rigidbody2D>();
            if (body == null)
            {
                Debug.LogError($"[Explosive] {name} is a {_data.kind} but its prefab has no Rigidbody2D to fly.", this);
                return;
            }

            var flight = gameObject.AddComponent<ExplosiveFlight>();
            flight.Begin(body, direction, _data.thrust, _data.maxSpeed, _data.noseAngle);
            flight.AttachTrail(_data.trailEffect, _data.trailOffset, _data.trailScale);
            Sfx.Play(_data.flightClip, transform.position);
        }

        #endregion

        #region Triggers
        private void FixedUpdate()
        {
            // A smoke canister outlives its own detonation, so the fuse has to stop being checked.
            if (_data == null || _detonated || Time.time < _detonateTime) return;
            Detonate();
        }

        private void OnCollisionEnter2D(Collision2D collision)
        {
            if (_data == null || Time.time < _armTime) return;
            if (_dormant)
            {
                // Only a creature (zombie, player) disturbs a placed charge; the ground it rests on doesn't.
                if (collision.collider.GetComponentInParent<CreatureAgent>() != null) Wake();
                return;
            }
            // A mine answers to its plate only — landing must never set it off.
            if (_data.kind == ExplosiveKind.Mine) return;
            switch (_data.trigger)
            {
                case ExplosiveTrigger.Contact:
                    Detonate();
                    break;
                case ExplosiveTrigger.NoseContact when IsNoseHit(collision):
                    Detonate();
                    break;
            }
        }

        // The contact must land on the nose end, so a bomb resting on its side won't blow.
        private bool IsNoseHit(Collision2D collision)
        {
            if (collision.contactCount == 0) return false;
            float rad = (transform.eulerAngles.z + _data.noseAngle) * Mathf.Deg2Rad;
            var nose = new Vector2(Mathf.Cos(rad), Mathf.Sin(rad));
            Vector2 toContact = collision.GetContact(0).point - (Vector2)transform.position;
            return Vector2.Dot(toContact.normalized, nose) >= NoseHitDot;
        }

        // For triggers that live outside this component — the mine's pressure plate.
        public void DetonateNow() => Detonate();

        #endregion

        #region Detonation
        private void Detonate()
        {
            if (_detonated) return; // fuse and contact fuse can both fire in one frame; blow once
            _detonated = true;

            Vector2 center = transform.position;

            if (_data.screenShakeStrength > 0f && ServiceLocator.TryGet<IEventBus>(out var events))
                events.Publish(new CameraShakeEvent(_data.screenShakeStrength, _data.screenShakeDuration));

            Sfx.Play(_data.explodeClips, center, _data.explodeVolume, 0.05f);
            ExplosionEffectSpawner.Play(_data.detonateEffect, center, _data.detonateEffectScale);

            if (_data.kind == ExplosiveKind.Smoke)
            {
                // A canister isn't consumed by going off — it lies there pouring smoke until the last puff clears.
                var cloud = ExplosionEffectSpawner.PlayCloud(
                    _data.smokeEffect, center, _data.smokeScale, _data.smokeSeconds, transform, gameObject);
                if (cloud != null) return;
            }
            else
            {
                Blast(center);
            }

            Destroy(gameObject);
        }

        #endregion

        #region Blast collection and falloff
        // Gather buffers, reused so a blast doesn't allocate per collider; copied out before damage keeps chain detonations safe.
        private static readonly List<Collider2D> BlastHits = new List<Collider2D>();
        private static readonly HashSet<IDamageable> BlastVictims = new HashSet<IDamageable>();
        private static readonly HashSet<TileEntity> BlastDecor = new HashSet<TileEntity>();
        private static readonly HashSet<Rigidbody2D> BlastBodies = new HashSet<Rigidbody2D>();
        private static readonly HashSet<Transform> BlastRoots = new HashSet<Transform>();
        private static ContactFilter2D _blastFilter;
        private static bool _blastFilterReady;

        private void Blast(Vector2 center)
        {
            if (!_blastFilterReady)
            {
                _blastFilter = new ContactFilter2D();
                _blastFilter.NoFilter();
                _blastFilterReady = true;
            }

            // Into a reused list: a nuke's radius can catch thousands of colliders.
            Physics2D.OverlapCircle(center, _data.radius, _blastFilter, BlastHits);
            List<ExplosiveEntity> toWake = null;

            // Dedupe per entity: a ragdoll is six colliders but takes ONE hit and one impulse per body.
            BlastVictims.Clear();
            BlastBodies.Clear();
            BlastRoots.Clear();
            for (int i = 0; i < BlastHits.Count; i++)
            {
                var hit = BlastHits[i];
                if (hit == null || !InArc(center, hit.bounds.center)) continue;

                var body = hit.attachedRigidbody;
                if (body != null && body.bodyType == RigidbodyType2D.Dynamic) BlastBodies.Add(body);

                // One damage lookup per ENTITY, not per collider — a failed GetComponent's error string was the frame's largest allocation.
                var root = hit.transform.root;
                if (!BlastRoots.Add(root)) continue;
                // TryGetComponent on the root, not a parent walk: the walk allocated an error string on every miss
                // and world geometry misses on every blast. CollectBlocks is what finds blocks.
                if (root.TryGetComponent<IDamageable>(out var damageable) && !ReferenceEquals(damageable, this))
                    BlastVictims.Add(damageable);
                // A placed (dormant) charge caught in the blast is set off too — chain reaction.
                if (root.TryGetComponent<ExplosiveEntity>(out var other) && other != this && other._dormant)
                {
                    if (toWake == null) toWake = new List<ExplosiveEntity>();
                    toWake.Add(other);
                }
            }

            CollectBlocks(center, BlastVictims);
            CollectDecor(center, BlastDecor);

            // Copied out before damage: a blast can detonate another explosive, re-entering this method mid-iteration.
            var victims = new IDamageable[BlastVictims.Count];
            BlastVictims.CopyTo(victims);
            var decor = new TileEntity[BlastDecor.Count];
            BlastDecor.CopyTo(decor);
            var bodies = new Rigidbody2D[BlastBodies.Count];
            BlastBodies.CopyTo(bodies);

            foreach (var victim in victims)
            {
                float strength = 1f;
                if (victim is Component c) strength = Falloff(center, c.transform.position);
                victim.TakeDamage(_data.damage, ImpactAt(center, strength));
            }

            // Decor takes the blast through its own door: it deliberately ignores IDamageable, so a
            // stray shot cannot touch it.
            foreach (var tile in decor)
                if (tile != null)
                    tile.TakeBlastDamage(_data.damage, ImpactAt(center, Falloff(center, tile.transform.position)));

            foreach (var body in bodies)
            {
                Vector2 delta = WorldCollision.CenterOfMass(body) - center;
                float falloff = 1f - Mathf.Clamp01(delta.magnitude / _data.radius);
                if (falloff <= 0f) continue;
                body.AddForce(delta.normalized * (_data.force * falloff), ForceMode2D.Impulse);
                TunnelGuard.Apply(body);
            }

            if (toWake != null)
                foreach (var charge in toWake)
                    if (charge != null) charge.Wake();
        }

        // A shaped charge only bites the way it faces; 0 (legacy default) and >=360 both mean all-round.
        private bool InArc(Vector2 center, Vector2 point)
        {
            if (_data.blastArc <= 0f || _data.blastArc >= 360f) return true;
            var delta = point - center;
            if (delta.sqrMagnitude < 0.0001f) return true;

            float facing = transform.eulerAngles.z + _data.blastFacing;
            float to = Mathf.Atan2(delta.y, delta.x) * Mathf.Rad2Deg;
            // Slack on the edge, so a boundary target doesn't come down to float noise.
            return Mathf.Abs(Mathf.DeltaAngle(facing, to)) <= _data.blastArc * 0.5f + 0.01f;
        }

        // Blocks share one merged collider, so walk the cells the blast covers instead of relying on the overlap.
        private void CollectBlocks(Vector2 center, HashSet<IDamageable> victims)
        {
            var min = TileGrid.WorldToCell(center - Vector2.one * _data.radius);
            var max = TileGrid.WorldToCell(center + Vector2.one * _data.radius);
            for (int y = min.y; y <= max.y; y++)
            for (int x = min.x; x <= max.x; x++)
            {
                var cell = new Vector2Int(x, y);
                if (!TileGrid.TryGet(cell, false, out var block)) continue;
                if (!InArc(center, TileGrid.CellCenter(cell))) continue;
                if (CellDistance(cell, center) <= _data.radius) victims.Add(block);
            }
        }

        // Same sweep over the background layer. Kept separate from the block pass because decor is
        // damaged through TileEntity directly rather than as an IDamageable.
        private void CollectDecor(Vector2 center, HashSet<TileEntity> victims)
        {
            victims.Clear();
            var min = TileGrid.WorldToCell(center - Vector2.one * _data.radius);
            var max = TileGrid.WorldToCell(center + Vector2.one * _data.radius);
            for (int y = min.y; y <= max.y; y++)
            for (int x = min.x; x <= max.x; x++)
            {
                var cell = new Vector2Int(x, y);
                if (!TileGrid.TryGet(cell, true, out var tile)) continue;
                if (!InArc(center, TileGrid.CellCenter(cell))) continue;
                if (CellDistance(cell, center) <= _data.radius) victims.Add(tile);
            }
        }

        // Strength mirrors the knockback falloff, floored so edge victims still shatter visibly.
        private float Falloff(Vector2 center, Vector2 at)
            => 1f - Mathf.Clamp01((at - center).magnitude / _data.radius);

        private FragmentImpact ImpactAt(Vector2 center, float strength) => new FragmentImpact
        {
            point = center,
            strength = Mathf.Max(0.25f, strength),
            power = _data.force * ShardPowerPerForce,
        };

        // Circle-to-cell distance against the cell's box, not treating the cell as a point.
        private static float CellDistance(Vector2Int cell, Vector2 point)
        {
            Vector2 half = Vector2.one * (TileGrid.CellSize * 0.5f);
            Vector2 delta = point - TileGrid.CellCenter(cell);
            var outside = new Vector2(
                Mathf.Max(0f, Mathf.Abs(delta.x) - half.x),
                Mathf.Max(0f, Mathf.Abs(delta.y) - half.y));
            return outside.magnitude;
        }
        #endregion
    }
}

using System.Collections.Generic;
using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Weapon: a normal creature in pickup range wields it and auto-fires hitscan shots at the
    // nearest zombie; the player can wield it via DragTool instead (wider shot mask, fire on demand).
    public class WeaponEntity : MonoBehaviour, IItemDataReceiver, IItemFacingReceiver
    {
        #region Masks and tuning constants
        private const float ScanInterval = 0.25f;
        private const int ZombieMask = 1 << 10;              // CreatureZombie torsos/heads
        private const int NormalMask = 1 << 8;               // CreatureNormal torsos/heads
        private const int ShotMask = (1 << 10) | (1 << 0);   // zombies + the world (tiles block shots)
        private const int ZombieShotMask = (1 << 8) | (1 << 0);
        private const int PlayerShotMask = (1 << 10) | (1 << 9) | (1 << 8) | (1 << 0); // every faction + world
        private const int CreatureMask = (1 << 8) | (1 << 9) | (1 << 10) | (1 << 11);
        // Cap on the ghosting, so a weapon left wedged inside a rig still turns solid eventually.
        private const float PassThroughTimeout = 3f;
        // The drop-fling: fast enough to clear the holder's rig within a few physics steps.
        private const float FlingSpeed = 6f;
        private const float FlingSpin = 540f;         // deg/s tumble, sells the throw
        private const float FlingArmImpulse = 1.6f;   // harder than any melee swing

        [SerializeField] private SpriteRenderer spriteRenderer;
        [SerializeField] private BoxCollider2D box;
        [SerializeField] private Rigidbody2D body;
        [Tooltip("How closely the barrel must already point at the target before it fires (degrees). " +
                 "Stops it emptying into the floor while the arm is still swinging up.")]
        [SerializeField] private float fireAlignDegrees = 25f;
        [Tooltip("Bullet spawned by Bullet and Shotgun weapons. Unused by melee and the launcher.")]
        [SerializeField] private ProjectileEntity projectilePrefab;

        #endregion

        #region State
        private WeaponStats _data;
        private ItemSO _item;
        private CreatureAgent _owner;
        private float _nextScanTime;
        private float _nextShotTime;
        // Melee only: mid wind-up/sweep, so the arm follows the swing curve instead of the target —
        // the aim-hold motor would fight a plain impulse and the swing would barely show.
        private bool _swinging;
        private float _swingStart;
        private Vector2 _swingAim = Vector2.right; // fixed at wind-up, so the arm can't chase a moving mark
        private float _swingFacing = 1f;           // ditto the mirror: a turn mid-swing must not reverse it
        private bool _swingConnected; // the hit lands once, at the moment the blade passes the target
        private bool _playerHeld;
        private Vector2 _playerAim = Vector2.right;
        private static readonly List<Collider2D> OverlapResults = new List<Collider2D>();
        private static readonly Collider2D[] OverlapBuffer = new Collider2D[16];
        // Separate from OverlapResults, which BeginPassThrough owns — the two must never be
        // mid-iteration on the same list.
        private static readonly List<Collider2D> PickupResults = new List<Collider2D>();
        private static readonly List<Collider2D> SwingResults = new List<Collider2D>();
        // One entry per creature caught by a swing, so a rig's many colliders count as a single hit.
        private static readonly List<CreatureAgent> SwingVictims = new List<CreatureAgent>();
        private readonly List<Collider2D> _passThrough = new List<Collider2D>();
        private float _passThroughUntil;

        #endregion

        #region Data binding and fit
        public void ReceiveData(ItemSO item)
        {
            if (item.type != ItemType.Weapon)
            {
                Debug.LogError($"[Weapon] {name} received '{item.itemId}' of type {item.type} — expected Weapon.", this);
                return;
            }

            // Kept whole, not just its stats: task reporting needs the definition to name the noun.
            _item = item;
            _data = item.weapon;
            spriteRenderer.sprite = item.icon;
            FitColliderToArt();
            // Scale is the whole object's, so the collider comes with it — a gun scaled to fit a
            // creature's hand is the same size lying on the ground.
            transform.localScale = Vector3.one * Mathf.Max(0.01f, _data.scale);
            ApplySorting(0);
            BeginPassThrough(); // spawning onto a creature is the same problem as being dropped into one
        }

        // Which way the barrel points when dropped. The direction is the ROOT's rotation, so turning
        // round is a 180 spin with flipX righting the art. Starting pose only.
        public void SetFacing(int facing)
        {
            float z = facing < 0 ? 180f : 0f;
            transform.rotation = Quaternion.Euler(0f, 0f, z);
            if (body != null) body.SetRotation(z);
            SetArtFlip(facing < 0);
        }

        // Fit the collider to the SPRITE as drawn. The art child is turned 90 degrees, so raw sprite
        // bounds gave every dropped weapon a collider lying across its barrel; this rotates them.
        private void FitColliderToArt()
        {
            var sprite = spriteRenderer.sprite;
            if (sprite == null || box == null) return;

            var art = spriteRenderer.transform;
            float artZ = ArtZ;
            float rad = artZ * Mathf.Deg2Rad;
            float cos = Mathf.Abs(Mathf.Cos(rad)), sin = Mathf.Abs(Mathf.Sin(rad));

            Vector2 size = sprite.bounds.size;
            size = new Vector2(size.x * Mathf.Abs(art.localScale.x), size.y * Mathf.Abs(art.localScale.y));

            box.size = new Vector2(size.x * cos + size.y * sin, size.x * sin + size.y * cos);
            // A sprite whose pivot is off-centre draws away from its transform, so the box follows it.
            box.offset = (Vector2)art.localPosition + Rotate(
                new Vector2(sprite.bounds.center.x * art.localScale.x,
                            sprite.bounds.center.y * art.localScale.y), artZ);
        }

        private int _appliedSlab = int.MinValue;

        // Depth is RELATIVE to the holder, since each creature sits in its own sorting slab — an
        // absolute order would put the weapon in front of one creature and behind the next.
        private void ApplySorting(int slab)
        {
            if (_data == null) return;
            _appliedSlab = slab;
            if (!string.IsNullOrEmpty(_data.sortingLayer))
                spriteRenderer.sortingLayerName = _data.sortingLayer;
            spriteRenderer.sortingOrder = slab + _data.sortingOrder;
        }

        #endregion

        #region Player wield
        private void FixedUpdate()
        {
            if (_artHidden && Time.time >= _artHiddenUntil) ShowArt();
            if (_data == null || _playerHeld) return;
            if (_owner == null)
            {
                if (_passThrough.Count > 0) UpdatePassThrough();
                TryPickup();
            }
            else HoldAndFight();
        }

        // --- Player wield (driven by DragTool) ---

        // Rotation is frozen while wielded so the aim sticks instead of fighting the solver.
        public void SetPlayerHeld(bool held)
        {
            _playerHeld = held;
            body.freezeRotation = held;
            if (!held) SetArtFlip(false);
        }

        public void PlayerAim([Bridge.Ref] Vector2 dir)
        {
            if (!_playerHeld || dir.sqrMagnitude < 0.0001f) return;
            _playerAim = dir.normalized;
            body.SetRotation(Mathf.Atan2(_playerAim.y, _playerAim.x) * Mathf.Rad2Deg);
            SetArtFlip(_playerAim.x < 0f); // keep the sprite upright when aiming left
        }

        // Same attack as a creature's, but on demand and against everything damageable.
        public void TryPlayerFire()
        {
            if (_data == null || !_playerHeld) return;
            if (Time.time < _nextShotTime) return;
            _nextShotTime = Time.time + 1f / _data.fireRate;

            Attack(Muzzle(), _playerAim, PlayerShotMask);
        }

        // Where shots leave the weapon, authored on the item so it sits on the art's own muzzle.
        // TransformPoint, so it rides the weapon's rotation and scale.
        private Vector2 Muzzle() => transform.TransformPoint(Mirrored(_data.muzzleOffset));

        // Turning mirrors the ART with flipX but leaves the TRANSFORM alone, so anything authored in
        // weapon space must be mirrored too. The art child is turned 90 degrees, so flipX negates y.
        private float ArtMirror => spriteRenderer.flipX ? -1f : 1f;

        // The art child's authored angle. A weapon whose look is canted away from its aim (the root's
        // x axis) keeps the cant on the child; mirroring across the root's x axis then turns the child
        // to 180 - angle. The usual 90 is its own mirror, so plain weapons are unaffected.
        private float _artZ = float.NaN;

        private float ArtZ
        {
            get
            {
                if (float.IsNaN(_artZ)) _artZ = spriteRenderer.transform.localEulerAngles.z;
                return _artZ;
            }
        }

        private void SetArtFlip(bool flip)
        {
            float z = ArtZ; // read before flipping, while the child still holds its authored angle
            spriteRenderer.flipX = flip;
            spriteRenderer.transform.localRotation = Quaternion.Euler(0f, 0f, flip ? 180f - z : z);
        }

        private Vector2 Mirrored(Vector2 weaponSpace) => new Vector2(weaponSpace.x, weaponSpace.y * ArtMirror);

        // Thrown weapons: the hand is empty between throws (the sprite is taken away, then put back).
        private bool _artHidden;
        private float _artHiddenUntil;

        private void HideArtUntil(float time)
        {
            _artHidden = true;
            _artHiddenUntil = time;
            spriteRenderer.sprite = null;
        }

        private void ShowArt()
        {
            _artHidden = false;
            if (_item != null) spriteRenderer.sprite = _item.icon;
        }

        #endregion

        #region Creature pickup and combat
        private void TryPickup()
        {
            if (Time.time < _nextScanTime) return;
            _nextScanTime = Time.time + ScanInterval;

            // NoFilter + the global trigger setting matches what OverlapCircleAll applied.
            var filter = new ContactFilter2D();
            filter.NoFilter();
            filter.useTriggers = true; // Physics2D.queriesHitTriggers default (not in Luna)
            Physics2D.OverlapCircle(transform.position, _data.pickupRadius, filter, PickupResults);

            for (int i = 0; i < PickupResults.Count; i++)
            {
                var agent = CreatureAgent.OwnerOf(PickupResults[i]);
                if (agent == null || agent.IsDead || !agent.CanHoldWeapon) continue;
                if (!agent.TryHoldWeapon(this, _data)) continue;

                EndPassThrough();
                _owner = agent;
                body.simulated = false;
                box.enabled = false;
                ApplySorting(agent.SortingSlab); // into the holder's own depth slab, among its limbs
                // The forward hand, not the chest — GripPos is authored per rig in the Rig Editor.
                AttachTo(agent.GripTransform);
                if (_data.pickupClips != null && _data.pickupClips.Length > 0)
                    Sfx.Play(_data.pickupClips, transform.position);
                else if (ServiceLocator.TryGet<SfxLibrarySO>(out var sfx))
                    Sfx.Play(sfx.weaponPickup, transform.position);

                // Noun + verb + noun: this weapon, equipped, on that creature.
                TaskReporter.Report(TaskVerb.Equip, _item, agent.Current);
                return;
            }
        }

        private void HoldAndFight()
        {
            if (_owner.IsDead || !_owner.CanHoldWeapon)
            {
                Drop();
                return;
            }

            // Flip FIRST: AttachTo mirrors the hold with it, and reading a stale flip would leave the
            // gun a frame behind on every turn.
            SetArtFlip(_owner.Facing < 0f);
            if (_owner.SortingSlab != _appliedSlab) ApplySorting(_owner.SortingSlab);
            // The holding hand swaps when the creature turns round, so follow it to the front arm.
            AttachTo(_owner.GripTransform);
            // Mid-swing the curve owns WeaponAim, so nothing below can snap the arm back onto a
            // plain aim mid-strike. A started swing always plays all the way through.
            if (_swinging)
            {
                UpdateSwing();
                return;
            }

            var target = FindNearestZombie();
            if (target == null)
            {
                _owner.WeaponAim = Vector2.zero; // arms drop, and the gun lowers with them
                return;
            }

            // The ARM does the aiming. The gun is bolted to the hand and simply goes where the hand
            // goes — it never rotates itself onto the target.
            Vector2 toTarget = target.TorsoPosition - _owner.TorsoPosition;
            Vector2 muzzle = Muzzle();
            bool melee = _data.kind == WeaponKind.Melee;

            Vector2 aim = melee ? toTarget : target.TorsoPosition - muzzle;
            if (aim.sqrMagnitude < 0.0001f) aim = toTarget;
            _owner.WeaponAim = aim;

            if (Time.time < _nextShotTime) return;

            // Melee just swings — the swing is what brings the blade round, and it hits whatever is
            // in range. Gating on alignment left creatures waiting for a shot they would never line up.
            if (melee)
            {
                _nextShotTime = Time.time + 1f / _data.fireRate;
                _swinging = true;
                _swingStart = Time.time;
                _swingAim = toTarget.normalized; // fixed for the swing, so the arm can't jitter after it
                _swingFacing = _owner.Facing < 0f ? -1f : 1f;
                _swingConnected = false;         // the strike itself lands mid-swing, from UpdateSwing
                return;
            }

            Vector2 dir = transform.right; // wherever the arm currently has the barrel
            if (Vector2.Dot(dir, aim.normalized) < Mathf.Cos(fireAlignDegrees * Mathf.Deg2Rad)) return;

            _nextShotTime = Time.time + 1f / _data.fireRate;
            Attack(muzzle, dir, HolderShotMask);
        }

        // The weapon's own authored curve, shared with the Weapon Pose Editor. Driven into the real
        // aim-hold motor rather than against it; the hit lands once, as the blade passes the target.
        private void UpdateSwing()
        {
            float cycle = Mathf.Max(0.05f, 1f / _data.fireRate);
            float t = Mathf.Clamp01((Time.time - _swingStart) / cycle);
            float delta = SwingOffset(t, _data.windupAngle, _data.followAngle);

            // Mirrored by the facing CAPTURED AT WIND-UP, not the live one: reading it live let a
            // turn mid-swing reverse the arc it was already halfway through.
            _owner.WeaponAim = Rotate(_swingAim, -delta * _swingFacing);
            // The reach-drive's normal speed cap is tuned for a steady aim-hold; this is the weapon's
            // own escape hatch, so the curve above actually catches up instead of crawling toward it.
            _owner.SwingSpeed = _data.armSpeed;

            if (!_swingConnected && t >= SwingContactAt)
            {
                _swingConnected = true;
                Attack(Muzzle(), transform.right, HolderShotMask);
            }

            if (t >= 1f)
            {
                _swinging = false;
                _owner.SwingSpeed = 0f;
            }
        }

        #endregion

        #region Attacks
        // One attack, dispatched by kind. Each path decides its own recoil, so a shotgun kicks like
        // its whole spread and a sword does not kick at all.
        private void Attack([Bridge.Ref] Vector2 muzzle, [Bridge.Ref] Vector2 dir, int mask)
        {
            if (_data.hideOnShot) HideArtUntil(_nextShotTime - _data.reappearLead);
            SpawnFireEffects(); // once per attack, not once per pellet
            PlayAttackSound(muzzle);

            switch (_data.kind)
            {
                case WeaponKind.Shotgun:
                    for (int i = 0; i < Mathf.Max(1, _data.pelletCount); i++)
                    {
                        // Fan evenly across the cone, then jitter, so the pattern is spread rather
                        // than a random clump that can leave a hole down the middle.
                        float t = _data.pelletCount <= 1 ? 0.5f : i / (float)(_data.pelletCount - 1);
                        float angle = Mathf.Lerp(-0.5f, 0.5f, t) * _data.spreadDegrees
                                      + Random.Range(-1f, 1f) * (_data.spreadDegrees / _data.pelletCount * 0.5f);
                        SpawnProjectile(muzzle, Rotate(dir, angle), mask);
                    }
                    Kick(dir);
                    break;

                case WeaponKind.GrenadeLauncher:
                    LaunchGrenade(muzzle, dir);
                    Kick(dir);
                    break;

                case WeaponKind.Melee:
                    Swing(muzzle, dir, mask);
                    break;

                default:
                    SpawnProjectile(muzzle, dir, mask);
                    Kick(dir);
                    break;
            }
        }

        // With fitFireRate the clip speeds up just enough to finish inside the firing interval, so
        // auto-fire reads as shots rather than a clip restarting mid-boom. Capped short of chipmunk.
        private const float MaxFitPitch = 3f;

        private void PlayAttackSound([Bridge.Ref] Vector2 muzzle)
        {
            var clip = Sfx.Pick(_data.attackClips);
            if (clip == null) return;

            float pitch = _data.attackPitch;
            if (_data.fitFireRate && _data.fireRate > 0.01f)
            {
                float interval = 1f / _data.fireRate;
                float playTime = clip.length / pitch;
                if (playTime > interval) pitch = Mathf.Min(clip.length / interval, MaxFitPitch);
            }
            Sfx.Play(clip, muzzle, _data.attackVolume, _data.attackPitchJitter, pitch);
        }

        private void SpawnProjectile([Bridge.Ref] Vector2 muzzle, [Bridge.Ref] Vector2 dir, int mask)
        {
            if (projectilePrefab == null)
            {
                Debug.LogError($"[Weapon] '{name}' has no projectile prefab — it cannot fire.", this);
                return;
            }
            var shot = GetPooledShot(muzzle);
            if (shot == null) return;
            // Launch ASSIGNS the rotation, so a bullet prefab turned to correct vertical art would
            // lose that turn on every shot. Its authored rotation is folded back in here.
            shot.SetVisual(_data.projectileSprite, _data.projectileScale,
                           projectilePrefab.transform.eulerAngles.z + _data.projectileRotation);
            shot.SetHitEffects(_data.hitEffects, _data.scale);
            shot.Launch(muzzle, dir, _data.projectileSpeed, _data.damage, _data.knockback, mask);
        }

        // Pooled: a GameObject per bullet — per PELLET on a shotgun — was the game's largest source
        // of garbage. Resolved per shot, since a static would outlive the locator across sessions.
        private ProjectileEntity GetPooledShot([Bridge.Ref] Vector2 muzzle)
        {
            if (!ServiceLocator.TryGet<IObjectPoolService>(out var pool))
                return Instantiate(projectilePrefab, muzzle, Quaternion.identity); // no locator (tests)

            var go = pool.Get(projectilePrefab.gameObject, muzzle, Quaternion.identity);
            if (!go.TryGetComponent<ProjectileEntity>(out var shot)) return null;
            shot.SetPool(pool, projectilePrefab.gameObject);
            return shot;
        }

        // The launcher only throws it — the explosive's own fuse and blast do the rest.
        private void LaunchGrenade([Bridge.Ref] Vector2 muzzle, [Bridge.Ref] Vector2 dir)
        {
            if (_data.launchedItem == null)
            {
                Debug.LogError($"[Weapon] '{name}' is a GrenadeLauncher with no launchedItem set.", this);
                return;
            }
            var instance = ItemCreator.Create(_data.launchedItem, muzzle);
            if (instance == null) return;
            var rb = instance.GetComponent<Rigidbody2D>();
            if (rb == null) return;

            // Scales the grenade's OWN gravity rather than replacing it, so a heavy explosive still
            // falls heavier than a light one through the same launcher.
            rb.gravityScale *= _data.launchGravity;
            // Tilted up from the aim — and "up" is the other way round when the barrel points left.
            float lob = _data.launchAngle * (dir.x < 0f ? -1f : 1f);
            rb.linearVelocity = Rotate(dir, lob) * _data.projectileSpeed;
        }

        // Each effect sits where it was authored ON THE WEAPON, so a flash lands on the barrel
        // whichever way the arm points. Fire and forget: nothing here tracks them.
        private void SpawnFireEffects()
        {
            var effects = _data.fireEffects;
            if (effects == null) return;

            for (int i = 0; i < effects.Length; i++)
            {
                var e = effects[i];
                if (e == null || e.prefab == null) continue;

                // An attached effect already inherits the weapon's scale through its parent; a loose
                // one has to be given it, or a small gun would leave full-size smoke behind.
                float size = Mathf.Max(0.01f, e.scale) * (e.attached ? 1f : Mathf.Max(0.01f, _data.scale));

                // Mirrored with the art, rotation included — reflecting across the barrel turns a
                // clockwise offset into an anticlockwise one.
                EffectPool.Play(e.prefab,
                    transform.TransformPoint(Mirrored(e.offset)),
                    transform.rotation * Quaternion.Euler(0f, 0f, e.rotation * ArtMirror),
                    size,
                    e.attached ? transform : null);
            }
        }


        // A creature holds it, so recoil goes into the holder; a player-wielded gun has no body to
        // shove and the joint already resists, so it is skipped.
        private void Kick([Bridge.Ref] Vector2 dir)
        {
            if (_owner != null) _owner.ApplyRecoil(-dir * _data.recoil);
        }

        #endregion

        #region Melee swing
        // One circle round the swinger — the same circle that decided to swing, so anything worth
        // attacking is close enough to hit. The arm is already throwing the blade through all of it.
        private void Swing([Bridge.Ref] Vector2 muzzle, [Bridge.Ref] Vector2 dir, int mask)
        {
            if (_owner != null) _owner.SwingArm(_data.impactKick * (dir.x < 0f ? -1f : 1f));

            float reach = Mathf.Max(0.05f, _data.range);
            // Centred on the swinger, or on the blade when the player is wielding it by hand.
            Vector2 hitCentre = _owner != null ? _owner.TorsoPosition : muzzle;

            bool connected = false;
            SwingVictims.Clear();
            var filter = new ContactFilter2D();
            filter.NoFilter();
            filter.useTriggers = true; // Physics2D.queriesHitTriggers default (not in Luna)
            filter.SetLayerMask(mask);
            Physics2D.OverlapCircle(hitCentre, reach, filter, SwingResults);

            for (int i = 0; i < SwingResults.Count; i++)
            {
                var hit = SwingResults[i];
                var agent = CreatureAgent.OwnerOf(hit);
                if (agent == null || agent.IsDead || agent == _owner) continue;
                if (_owner != null && !IsPrey(agent)) continue;
                // A rig is half a dozen colliders and the overlap returns every one, so without this
                // the same creature took the blow once PER LIMB and folded up instead of launching.
                if (SwingVictims.Contains(agent)) continue;
                SwingVictims.Add(agent);

                // The struck limb's own centre, so the effect lands ON the target rather than at the
                // swinger or at the middle of the reach circle.
                Vector2 contact = hit.bounds.center;
                var part = hit.attachedRigidbody;
                if (part != null)
                {
                    agent.TakeHitAt(part, _data.damage, new FragmentImpact
                    {
                        point = contact,
                        strength = 1f,
                        direction = dir,
                    });
                }
                else agent.TakeDamage(_data.damage);

                // Aimed away from the swinger, matching the way the victim is about to be launched.
                Vector2 blowDir = ((Vector2)agent.TorsoPosition - hitCentre).normalized;
                if (blowDir.sqrMagnitude < 0.0001f) blowDir = dir;
                HitEffectSpawner.Play(_data.hitEffects, contact, blowDir, _data.scale,
                                      part != null ? part.transform : null);

                // Straight AWAY from the swinger, never along the blade: mid-swing the blade points
                // wherever the arc has it, which drove victims into the floor as often as away.
                Vector2 away = agent.TorsoPosition - hitCentre;
                float side = away.x < 0f ? -1f : 1f;
                agent.ApplyKnockback(new Vector2(side, 0f), _data.knockback);
                connected = true;
            }

            // Once per swing however many creatures it caught — the swing is one blow.
            if (connected) Sfx.Play(_data.hitClips, hitCentre, _data.attackVolume, _data.attackPitchJitter, _data.attackPitch);
        }

        // The swing curve, shared with the Weapon Pose Editor so preview and game cannot drift.
        // The arm spends over half the cycle DRAWING BACK and an eighth coming down; that is the strike.
        private const float WindupEnd = 0.50f;  // drawing back, decelerating into the top
        private const float HoldEnd = 0.58f;    // the beat AT the top; anticipation lives here
        private const float StrikeEnd = 0.72f;  // the blow itself — short, so it is fast
        // Where in the cycle the blade actually reaches the target, partway down the strike.
        public const float SwingContactAt = 0.62f;

        // Degrees the arm sits off its aim at normalised time `t` through one swing. Positive is
        // wound back, negative is followed through.
        public static float SwingOffset(float t, float windupAngle, float followAngle)
        {
            if (t < WindupEnd)
            {
                // Ease OUT into the apex: the draw slows as it reaches full extension, so the arm
                // settles into the top of the wind rather than slamming into it.
                float k = t / WindupEnd;
                return windupAngle * (1f - (1f - k) * (1f - k));
            }

            if (t < HoldEnd) return windupAngle; // held at the top — the beat before it comes down

            if (t < StrikeEnd)
            {
                // Ease OUT means FASTEST AT THE START: the arm explodes off the apex. Ease-IN crept
                // out of the wind and only whipped at the very end — exactly backwards.
                float k = (t - HoldEnd) / (StrikeEnd - HoldEnd);
                float inv = 1f - k;
                return Mathf.Lerp(windupAngle, -followAngle, 1f - inv * inv * inv);
            }

            // Rung out: the arm oscillates off the follow-through and settles.
            float j = t - StrikeEnd;
            return -followAngle * Mathf.Exp(-j * 9f) * Mathf.Cos(j * 18f);
        }

        private static Vector2 Rotate([Bridge.Ref] Vector2 v, float degrees)
        {
            float r = degrees * Mathf.Deg2Rad;
            float c = Mathf.Cos(r), s = Mathf.Sin(r);
            return new Vector2(v.x * c - v.y * s, v.x * s + v.y * c);
        }

        #endregion

        #region Grip attachment
        private float _appliedMirror = float.NaN;

        // Bolt the gun into the hand at the authored grip pose; rotation then follows the arm.
        private void AttachTo(Transform grip)
        {
            float mirror = ArtMirror;
            if (transform.parent == grip && Mathf.Approximately(_appliedMirror, mirror)) return;
            _appliedMirror = mirror;
            transform.SetParent(grip, worldPositionStays: false);
            transform.localScale = Vector3.one * Mathf.Max(0.01f, _data.scale);

            // gripRotation of exactly -90 lies along the limb and is its own mirror, which is why a
            // gun never showed this. 180 - gripRotation reflects a canted grip about that same axis.
            float rot = mirror < 0f ? 180f - _data.gripRotation : _data.gripRotation;
            transform.localRotation = Quaternion.Euler(0f, 0f, rot);

            // Placed by its GRIP POINT, not an offset from the hand: back the root off by where the
            // grip sits, so that pixel lands on GripPos. Same mirroring rule as the muzzle and effects.
            Vector2 gp = Mirrored(_data.gripPoint) * Mathf.Max(0.01f, _data.scale);
            transform.localPosition = -Rotate(gp, rot);
        }

        #endregion

        #region Target selection and sight
        // The sweep is by far the most expensive thing an armed creature does, and prey does not
        // move far in a tenth of a second.
        private const float TargetScanInterval = 0.1f;
        // Solid world only — the same layer the creatures' own sight check reads.
        private const int SightBlockMask = 1 << 0;
        // Linecasts per scan while looking past blocked targets. Bounded: this runs per armed
        // creature, and a horde puts plenty of zombies inside one weapon's range.
        private const int MaxSightChecks = 4;
        private static readonly List<Collider2D> ZombieScanResults = new List<Collider2D>();
        private static ContactFilter2D _zombieFilter;
        private static bool _zombieFilterReady;
        private static int _filterMask;
        private CreatureAgent _cachedTarget;
        private float _nextTargetScan;

        private bool HolderIsZombie => _owner != null && _owner.IsZombie;

        private int HolderShotMask => HolderIsZombie ? ZombieShotMask : ShotMask;

        private bool IsPrey(CreatureAgent agent)
            => agent != null && !agent.IsDead && agent != _owner && agent.IsZombie != HolderIsZombie;

        private CreatureAgent FindNearestZombie()
        {
            // A dead or switched-sides target is dropped at once; only the SEARCH is rate-limited.
            if (_cachedTarget != null && !IsPrey(_cachedTarget)) _cachedTarget = null;
            // "Nothing in range" is an answer worth caching too. Requiring a cached target here meant
            // every unarmed-of-prey weapon re-swept the world on EVERY physics step.
            if (Time.time < _nextTargetScan) return _cachedTarget;
            _nextTargetScan = Time.time + TargetScanInterval;

            int preyMask = HolderIsZombie ? NormalMask : ZombieMask;
            if (!_zombieFilterReady || _filterMask != preyMask)
            {
                _zombieFilter = new ContactFilter2D { useTriggers = false, useDepth = false };
                _zombieFilter.SetLayerMask(preyMask);
                _filterMask = preyMask;
                _zombieFilterReady = true;
            }

            // Overlap into a reused list rather than OverlapCircleAll, which allocated a fresh array
            // for every armed creature on every physics step.
            Physics2D.OverlapCircle(transform.position, _data.range, _zombieFilter, ZombieScanResults);

            // Head to head, not torso plus a fixed lift: the lift shoved the far end up through a
            // thin ceiling, so a shooter on a roof saw the zombie in the room below.
            Vector2 eye = _owner != null ? (Vector2)_owner.HeadTransform.position : (Vector2)transform.position;

            // Nearest VISIBLE, not nearest-then-vetoed: one under the shooter's own platform used to
            // win the pick, fail the sight test, and hide another standing in the open further out.
            CreatureAgent chosen = null;
            float rejectedSqr = -1f;
            for (int attempt = 0; attempt < MaxSightChecks && chosen == null; attempt++)
            {
                CreatureAgent nearest = null;
                float nearestSqr = float.MaxValue;
                for (int i = 0; i < ZombieScanResults.Count; i++)
                {
                    var agent = CreatureAgent.OwnerOf(ZombieScanResults[i]);
                    if (!IsPrey(agent)) continue;
                    float sqr = ((Vector2)transform.position - agent.TorsoPosition).sqrMagnitude;
                    if (sqr <= rejectedSqr || sqr >= nearestSqr) continue;
                    nearestSqr = sqr;
                    nearest = agent;
                }
                if (nearest == null) break; // nothing left to try

                if (WorldCollision.BlocksSight(eye, nearest.HeadTransform.position, SightBlockMask))
                    rejectedSqr = nearestSqr;
                else chosen = nearest;
            }

            // Cached AFTER the sight test. Cached before it, a blocked target came straight back out
            // of the rate-limited path above for the rest of the interval and the gun fired anyway.
            _cachedTarget = chosen;
            return chosen;
        }

        #endregion

        #region Drop and pass-through
        private void Drop()
        {
            if (ServiceLocator.TryGet<SfxLibrarySO>(out var sfx)) Sfx.Play(sfx.itemDrop, transform.position);
            var holder = _owner;
            _swinging = false; // a stale wind-up must not carry into the next hand this lands in
            if (holder != null) holder.SwingSpeed = 0f;
            transform.SetParent(null, worldPositionStays: true);
            transform.localScale = Vector3.one * Mathf.Max(0.01f, _data.scale);
            transform.rotation = Quaternion.identity;
            SetArtFlip(false);
            if (_artHidden) ShowArt(); // nothing lands on the ground invisible
            // The holder may have been part-way through its death fade, which dims everything under
            // it. Back to solid, or the weapon lies on the ground half-transparent.
            var color = spriteRenderer.color;
            color.a = 1f;
            spriteRenderer.color = color;
            body.simulated = true;
            box.enabled = true;
            ApplySorting(0); // out of the holder's slab, back to its own depth
            if (holder != null) holder.ReleaseWeapon(this);
            _owner = null;
            Fling(holder);
            BeginPassThrough();
        }

        // Hurled clear rather than dropped inside the rig: thrown, it exits in a couple of steps,
        // so the born-overlap ghosting ends almost before it starts.
        private void Fling(CreatureAgent holder)
        {
            if (holder == null) return;
            float side = holder.Facing < 0f ? -1f : 1f;
            body.linearVelocity = new Vector2(side, 1.6f).normalized * FlingSpeed;
            body.angularVelocity = -side * FlingSpin;
            holder.SwingArm(FlingArmImpulse * side); // the arm whips with the throw (no-op on a corpse)
        }

        // A weapon can APPEAR inside a rig, and going solid there depenetrates hard enough to tear
        // the ragdoll apart. It ghosts through what it starts inside, turning solid as each part clears.
        private void BeginPassThrough()
        {
            EndPassThrough();
            if (box == null || !box.enabled) return;

            // A world box query over our own box (Collider2D.Overlap is missing in Luna, and Unity's
            // API updater turns OverlapCollider back into it). Triggers are skipped by hand.
            OverlapResults.Clear();
            Vector3 lossy = transform.lossyScale;
            Vector2 size = new Vector2(box.size.x * Mathf.Abs(lossy.x), box.size.y * Mathf.Abs(lossy.y));
            int count = Physics2D.OverlapBoxNonAlloc(transform.TransformPoint(box.offset), size,
                                                     transform.eulerAngles.z, OverlapBuffer, CreatureMask,
                                                     -Mathf.Infinity, Mathf.Infinity);
            for (int i = 0; i < count; i++)
                if (OverlapBuffer[i] != box && !OverlapBuffer[i].isTrigger) OverlapResults.Add(OverlapBuffer[i]);

            for (int i = 0; i < OverlapResults.Count; i++)
            {
                var other = OverlapResults[i];
                if (other == null) continue;
                Physics2D.IgnoreCollision(box, other, true);
                _passThrough.Add(other);
            }
            if (_passThrough.Count > 0) _passThroughUntil = Time.time + PassThroughTimeout;
        }

        private void UpdatePassThrough()
        {
            bool expired = Time.time >= _passThroughUntil;
            for (int i = _passThrough.Count - 1; i >= 0; i--)
            {
                var other = _passThrough[i];
                // Distance, not IsTouching: an ignored pair never reports as touching.
                if (other != null && !expired && other.enabled && StillOverlaps(other)) continue;
                if (other != null) Physics2D.IgnoreCollision(box, other, false);
                _passThrough.RemoveAt(i);
            }
        }

        // Bounds, not Collider2D.Distance (missing in Luna): a little generous, so a part may stay
        // ghosted a touch longer than it strictly overlaps.
        private bool StillOverlaps(Collider2D other) => box.bounds.Intersects(other.bounds);

        private void EndPassThrough()
        {
            for (int i = 0; i < _passThrough.Count; i++)
                if (_passThrough[i] != null) Physics2D.IgnoreCollision(box, _passThrough[i], false);
            _passThrough.Clear();
        }
        #endregion
    }
}

using System.Collections.Generic;
using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Wires creature item data + AI to the physics rig. Driven by CreatureManager.ManagedTick.
    public class CreatureAgent : MonoBehaviour, IItemDataReceiver, IItemFacingReceiver, IDamageable
    {
        [Tooltip("Starting item (Creature type); infection swaps to its infectedForm at runtime.")]
        [SerializeField] private ItemSO creature;
        [SerializeField] private Rigidbody2D torsoBody;
        [Header("Rig part renderers")]
        [SerializeField] private SpriteRenderer torsoRenderer;
        [SerializeField] private SpriteRenderer headRenderer;
        [SerializeField] private SpriteRenderer leftArmRenderer;
        [SerializeField] private SpriteRenderer rightArmRenderer;
        [SerializeField] private SpriteRenderer leftLegRenderer;
        [SerializeField] private SpriteRenderer rightLegRenderer;
        [SerializeField] private Collider2D[] bodyColliders;
        [Tooltip("Torso-to-torso distance at which a zombie converts a normal. Must clear the head " +
                 "circle (r 0.45), not the torso — heads touch first and hold the torsos ~0.9 apart.")]
        [SerializeField] private float infectRadius = 1f;
        [Tooltip("How close a target must be before the arms reach for it. Kept near arm's length " +
                 "on purpose: reaching blocks the sleep LOD, so a wide value keeps the horde awake.")]
        [SerializeField] private float reachRadius = 3f;
        // The claw's feel (force, cadence, arm throw) is shared across the whole cast, so it lives on
        // the ragdoll tuning asset with the rest of it rather than on nine separate rig prefabs.
        [Tooltip("Seconds of SUSTAINED zombie contact a normal resists before actually turning; " +
                 "exposure fades if contact breaks before this is reached.")]
        [SerializeField] private float infectionTolerance = 1.5f;
        [Tooltip("Upward hop velocity the creature gives itself the instant it turns into a zom...")]
        [SerializeField] private float infectJumpVelocity = 6f;
        [Tooltip("Angular impulse thrown into each arm as it turns, so they fling apart and set...")]
        [SerializeField] private float infectArmFlail = 0.25f;
        [Header("Startle (a zombie's reaction to a normal spawning in detection range)")]
        [Tooltip("Upward hop velocity a zombie gives its torso when a normal spawns nearby.")]
        [SerializeField] private float startleHopVelocity = 3f;
        [Tooltip("Horizontal lunge velocity toward the new normal, layered on the hop.")]
        [SerializeField] private float startleLungeVelocity = 1f;

        #region Layers, masks and tuning constants
        private const int NormalLayer = 8;
        private const int LimbLayer = 9;   // legs, and a normal's arms — ignore all creature bodies
        private const int ZombieLayer = 10;
        private const int ArmLayer = 11;   // a zombie's arms — collide with normals so a reach touch registers

        // Ground probes must only see the world — creatures are never support surfaces.
        private const int WorldMask = ~((1 << NormalLayer) | (1 << LimbLayer) | (1 << ZombieLayer) | (1 << ArmLayer));
        // Sight is stopped by the solid world only (tiles, props on the default layer) — not by
        // debris, weapons or other creatures, which would flicker the chase on and off.
        private const int SightBlockMask = 1 << 0;
        private const float GroundProbeRange = 2.5f;

        // Step-up assist: a low obstacle with clear space above is climbed rather than walked into.
        private const float StepProbeAhead = 0.6f;
        private const float StepLowProbeHeight = 0.25f;
        private const float StepClearProbeHeight = 1.3f;
        private const float StepClimbCarryForce = 4f;

        // Apex sits above the landing surface so the rig comes DOWN onto it — joint slack and drag
        // both eat some of the climb, and an arc solved flat catches the edge.
        private const float HopApexClearance = 0.12f;
        // Blocks an ordinary creature clears in one leap, before any grow potion adds to it.
        private const int HopBlocks = 1;
        // Added to the solved flight time: long enough to land and get its feet under it again.
        private const float HopLandingBeat = 0.35f;
        // Past the block face, into the cell that was actually hit: the world is one merged collider
        // and a hit lands exactly on the boundary between two cells.
        private const float HopSurfaceNudge = 0.05f;
        // Moving vertically at all means mid-arc, not standing on something to leap from.
        private const float HopRiseTolerance = 0.5f;
        private float _nextHopTime;

        // Calm time before the rig sleeps (physics LOD).
        private const float SettleDelay = 0.75f;

        // How long the shoulders stay limp after turning, so the arm flail reads before reach resumes.
        private const float FlailDuration = 0.5f;

        #endregion

        #region Rig references and state
        private IEventBus _events;
        private ISimulationBudget _budget;
        private ICreatureBehavior _behavior;
        private RagdollBrain _brain;
        private SpriteRenderer[] _renderers;
        private Rigidbody2D[] _bodies;
        private Collider2D[] _partColliders;

        // Physics bodies own pose and sprite; SyncVisual copies them onto each part's "Art" child
        // renderer. The rig is never mirrored — a body ignores parent scale. _ghostFit stretches art
        // onto the collider.
        private Vector2[] _ghostFit;
        private SpriteRenderer[] _art;
        // Visual flip: +1 right, -1 left, switched instantly. Mirrors the ART in place, nothing else.
        private float _flip = 1f;
        private float _flipTarget = 1f;
        private const int LeftArmIndex = 2;
        private const int RightArmIndex = 3;
        private const int LeftLegIndex = 4;
        private const int RightLegIndex = 5;

        private CreatureAiState _aiState;
        private readonly System.Random _rng = new System.Random();
        private float _lastThinkTime = float.NegativeInfinity;
        private float _settledTime;
        // One slab per creature, fixed at spawn: newer stacks in front and two never trade places.
        // Height-based bands swapped constantly in a crowd, and shared slabs interleaved limbs.
        private const int SortingBandStride = 10; // headroom for one rig's authored part orders
        // Wrapped because a worn or held item carries this slab on a real SpriteRenderer, and Unity
        // clamps sortingOrder to 16 bits.
        private const int SortingSlabCount = 3000;
        private static int _spawnSequence;
        private int[] _baseSortingOrder;

        // +1 facing right, -1 facing left. Read by a held weapon so it rests along the body's facing.
        public float Facing => _flip;

        // This creature's own depth slab, fixed at spawn, so overlapping creatures resolve
        // front-to-back and stay that way. A held weapon adds its own authored order to this.
        public int SortingSlab { get; private set; }

        public ItemSO Current { get; private set; }
        public bool IsZombie => Current != null && Current.creature.type == CreatureType.Zombie;
        public bool IsDead { get; private set; }
        // Drives the CreatureSnapshot zombies pick prey from, so a creature wearing an "ignored"
        // item simply stops existing as far as the horde's targeting is concerned.
        public bool IsInfectableTarget =>
            !IsDead && !WornIgnoredByZombies && InfectionRules.CanBeInfected(Current);

        #region Worn wearable effects
        // Folded values from everything currently on this creature's head. Recomputed on add/remove
        // rather than per frame — wearables change hands rarely and these are read every tick.
        // A list even though TryHoldWearable allows only one at a time: folding is the same cost and
        // nothing here breaks if a second slot is ever added.
        private readonly List<WearableEffects> _wornEffects = new List<WearableEffects>();

        public float WornSpeedMultiplier { get; private set; } = 1f;
        public int WornExtraJump { get; private set; }
        public bool WornImmuneToInfection { get; private set; }
        public bool WornIgnoredByZombies { get; private set; }
        public bool WornAllowsWeapons { get; private set; }

        // A zombie normally cannot hold a weapon; a hat can override that.
        public bool CanHoldWeapon => !IsZombie || WornAllowsWeapons;

        public void AddWornEffects(WearableEffects effects)
        {
            if (effects == null || !effects.HasAny) return;
            _wornEffects.Add(effects);
            // Scale is a transform mutation, not a folded value, so it is applied once here and
            // inverted on removal — the same trick the timed Grow effect uses when it expires.
            if (!Mathf.Approximately(effects.scaleMultiplier, 1f)) ApplyScale(effects.scaleMultiplier);
            RecomputeWornEffects();
        }

        public void RemoveWornEffects(WearableEffects effects)
        {
            if (effects == null || !_wornEffects.Remove(effects)) return;
            if (!Mathf.Approximately(effects.scaleMultiplier, 1f))
                ApplyScale(1f / Mathf.Max(0.01f, effects.scaleMultiplier));
            RecomputeWornEffects();
        }

        private void RecomputeWornEffects()
        {
            float speed = 1f;
            int jump = 0;
            bool immune = false, ignored = false, weapons = false;

            for (int i = 0; i < _wornEffects.Count; i++)
            {
                speed *= Mathf.Max(0.05f, _wornEffects[i].speedMultiplier);
                jump += Mathf.Max(0, _wornEffects[i].extraJumpBlocks);
                immune |= _wornEffects[i].immuneToInfection;
                ignored |= _wornEffects[i].ignoredByZombies;
                weapons |= _wornEffects[i].allowsWeapons;
            }

            WornSpeedMultiplier = speed;
            WornExtraJump = jump;
            WornImmuneToInfection = immune;
            WornIgnoredByZombies = ignored;
            WornAllowsWeapons = weapons;
        }
        #endregion
        // A dormant rig's bodies are out of the simulation, so the moving transform is the truth.
        public Vector2 TorsoPosition => Dormant ? (Vector2)torsoBody.transform.position : torsoBody.position;
        public Transform TorsoTransform => torsoBody.transform;
        public Transform HeadTransform => headRenderer.transform;

        private float _health;
        private float _infectionExposure;
        private bool _touchedThisTick;

        // Timed effects only. Instant ones (a heal, a cure) are applied and forgotten; these are the
        // ones that have to be undone later, so each remembers what it did rather than recomputing.
        private struct ActiveEffect
        {
            public CreatureEffectKind kind;
            public float magnitude;
            public float expiresAt;
        }

        private readonly List<ActiveEffect> _activeEffects = new List<ActiveEffect>();

        // Every live Speed effect multiplied together, so two potions stack rather than the second
        // replacing the first.
        public float SpeedMultiplier { get; private set; } = 1f;

        // Both multiply, so a third runs away: too big to fit the world, or faster than the step.
        private const int MaxGrowStacks = 2;
        private const int MaxSpeedStacks = 2;

        // Grow potions currently held. Read by the block hop — a bigger creature clears more.
        public int GrowStacks { get; private set; }
        private int _speedStacks;

        // World-space reach of the torso ground probe and infection range are proportional to
        // the rig; scaled variants (bigger creatures) stretch them with the transform.
        private float _rigScale = 1f;

        #endregion

        #region Setup and teardown
        private void Awake()
        {
            _rigScale = transform.lossyScale.y;
            infectRadius *= _rigScale;

            // Unjointed limb pairs overlap geometrically and would shake the rig apart.
            for (int i = 0; i < bodyColliders.Length; i++)
                for (int j = i + 1; j < bodyColliders.Length; j++)
                    Physics2D.IgnoreCollision(bodyColliders[i], bodyColliders[j]);

            // One brain on the rig root, not per limb: the root is the creature, the limbs are parts.
            _brain = GetComponent<RagdollBrain>();
            _renderers = new[] { torsoRenderer, headRenderer, leftArmRenderer, rightArmRenderer, leftLegRenderer, rightLegRenderer };
            _bodies = new Rigidbody2D[_renderers.Length];
            // Cached once. FitGhostsToColliders runs on every infection swap, and probing three
            // collider types per part meant two FAILED GetComponents on every head — each of which
            // builds an error string. A cascade through a crowd made that the frame's top allocator.
            _partColliders = new Collider2D[_renderers.Length];
            for (int i = 0; i < _renderers.Length; i++)
            {
                _bodies[i] = _renderers[i].GetComponent<Rigidbody2D>();
                _renderers[i].TryGetComponent<Collider2D>(out _partColliders[i]);
            }
            _partDamage = new float[_bodies.Length];
            _hitFlash = new float[_bodies.Length];

            // Limits are passive anatomy and never toggled — going limp only zeroes the motors.

            // The authored per-part order is kept as the base and combined with the depth band at
            // draw time, so the physics renderers are never rewritten.
            _baseSortingOrder = new int[_renderers.Length];
            for (int i = 0; i < _renderers.Length; i++)
                _baseSortingOrder[i] = _renderers[i].sortingOrder;
            _spawnSequence = (_spawnSequence + 1) % SortingSlabCount;
            SortingSlab = _spawnSequence * SortingBandStride;

            BuildVisualGhosts();
            RegisterColliders();

            if (creature != null) SetData(creature);
        }

        // Which rig a collider belongs to. A hierarchy walk FAILS on the tiles and debris arms rest
        // on, and a failed GetComponent builds an error string — the biggest allocation in a frame.
        private static readonly Dictionary<Collider2D, CreatureAgent> ColliderOwners = new Dictionary<Collider2D, CreatureAgent>();

        public static CreatureAgent OwnerOf(Collider2D collider)
            => collider != null && ColliderOwners.TryGetValue(collider, out var agent) ? agent : null;

        private void RegisterColliders()
        {
            if (bodyColliders == null) return;
            for (int i = 0; i < bodyColliders.Length; i++)
                if (bodyColliders[i] != null) ColliderOwners[bodyColliders[i]] = this;
        }

        private void OnDestroy()
        {
            if (bodyColliders == null) return;
            for (int i = 0; i < bodyColliders.Length; i++)
                if (bodyColliders[i] != null) ColliderOwners.Remove(bodyColliders[i]);
        }

        // Each body's own SpriteRenderer is only a data holder for sprite, colour and sorting (other
        // code writes those). An "Art" child renderer per part draws it: facing left, a paired limb
        // shows its partner's sprite and depth, which the data renderer itself must not take on.
        private void BuildVisualGhosts()
        {
            if (_art == null) _art = new SpriteRenderer[_renderers.Length];
            for (int i = 0; i < _renderers.Length; i++)
            {
                var src = _renderers[i];
                if (src == null) continue;
                src.enabled = false;
                if (_art[i] != null) continue;
                var go = new GameObject("Art");
                go.layer = src.gameObject.layer;
                go.transform.SetParent(src.transform, false);
                var art = go.AddComponent<SpriteRenderer>();
                art.sharedMaterial = src.sharedMaterial;
                art.sortingLayerID = src.sortingLayerID;
                _art[i] = art;
            }

            FitGhostsToColliders();
            SyncVisual(); // art in place before the first render frame
        }

        #endregion

        #region Posed LOD
        // Posed LOD: head and arms leave the solver while the torso balances and the legs walk, so
        // the rig still moves on real physics. They hold their pose, riding the torso.
        private static readonly int[] PosedParts = { HeadIndex, LeftArmIndex, RightArmIndex };

        private const int HeadIndex = 1;

        private bool _posed;
        private Vector2[] _poseLocalPos;
        private float[] _poseLocalAngle;

        public bool Posed => _posed;

        // Chasing prey it can actually see. The crowd LOD leaves these alone — a posed zombie's arms
        // stop simulating, and the arms are what carry the claw.
        public bool IsHunting => IsZombie && !IsDead && _aiState.HasTarget;

        // Ground-probe throttle, posed creatures only. See the probe in ManagedTick.
        private const int PosedProbeInterval = 4;
        private int _probeTick;
        private bool _hasCachedGround;
        private float _cachedGroundY;

        public void SetPosed(bool posed)
        {
            if (_posed == posed || _bodies == null || IsDead) return;
            _posed = posed;

            if (_poseLocalPos == null) _poseLocalPos = new Vector2[PosedParts.Length];
            if (_poseLocalAngle == null) _poseLocalAngle = new float[PosedParts.Length];

            var torso = torsoBody.transform;
            for (int i = 0; i < PosedParts.Length; i++)
            {
                var body = _bodies[PosedParts[i]];
                if (body == null) continue;

                if (posed)
                {
                    // Frozen where it actually is, so nothing jumps on the way into the LOD.
                    _poseLocalPos[i] = torso.InverseTransformPoint(body.transform.position);
                    _poseLocalAngle[i] = body.transform.eulerAngles.z - torso.eulerAngles.z;
                    body.simulated = false;
                }
                else
                {
                    body.simulated = true;
                    body.linearVelocity = Vector2.zero;
                    body.angularVelocity = 0f;
                    body.WakeUp();
                }
            }
        }

        // Limbs out of the solver no longer move themselves, so the torso carries them. Called from
        // the visual pass, right before the ghosts read these transforms.
        public void ApplyPose()
        {
            if (!_posed || _bodies == null) return;
            var torso = torsoBody.transform;
            float torsoAngle = torso.eulerAngles.z;

            for (int i = 0; i < PosedParts.Length; i++)
            {
                var body = _bodies[PosedParts[i]];
                if (body == null) continue;
                var t = body.transform;
                t.position = torso.TransformPoint(_poseLocalPos[i]);
                t.rotation = Quaternion.Euler(0f, 0f, torsoAngle + _poseLocalAngle[i]);
            }
        }

        // Size each ghost to its collider without distorting the art. Recomputed whenever the
        // sprites change (SetData), since an infection swap can bring differently-shaped art.
        private void FitGhostsToColliders()
        {
            if (_renderers == null) return;
            if (_ghostFit == null) _ghostFit = new Vector2[_renderers.Length];

            for (int i = 0; i < _renderers.Length; i++)
            {
                _ghostFit[i] = Vector2.one;
                var src = _renderers[i];
                if (src == null || src.sprite == null) continue;

                // bounds, not rect / pixelsPerUnit: Luna downscales the atlas and changes pixelsPerUnit
                // but not rect, which made every part a quarter of its size.
                Vector2 native = src.sprite.bounds.size;
                if (native.x <= 0.0001f || native.y <= 0.0001f) continue;

                float scale;
                switch (_partColliders[i])
                {
                    case BoxCollider2D box: scale = box.size.y / native.y; break;
                    // A traced shape is authored in the sprite's own space, so the art is already 1:1.
                    case PolygonCollider2D _: scale = 1f; break;
                    // Inverts the bake, which inscribes the circle in the art's shorter side.
                    case CircleCollider2D circle: scale = circle.radius * 2f / Mathf.Min(native.x, native.y); break;
                    default: continue;
                }

                // Uniform, so art keeps its own proportions: a per-axis fit squashed every sprite
                // whose aspect differed from its collider, worst on heads (a circle reads square).
                _ghostFit[i] = new Vector2(scale, scale);
            }
        }

        #endregion

        #region Rendering
        // Copies the six limbs onto their Art renderers, once per rendered frame from CreatureManager.
        // Facing is an ART mirror only: reflecting positions makes the legs moonwalk.
        public void SyncVisual()
        {
            if (_renderers == null) return;

            // Facing snaps. There is no easing through zero: a turn reads better instantly than as a
            // card-flip, and the in-between widths were only ever hiding the angle negation.
            _flip = _flipTarget;

            bool mirrored = _flip < 0f;

            for (int i = 0; i < _renderers.Length; i++)
            {
                var src = _renderers[i];
                var art = _art != null ? _art[i] : null;
                if (src == null || art == null) continue;

                // Facing left, a paired limb shows its partner's sprite instead of flipping its own.
                int content = MirroredIndex(i);
                art.sprite = _renderers[content].sprite;

                // The art keeps its own proportions; _ghostFit stretches it onto the part's collider.
                // Mirroring is flipX on the art — negating local x — never a negative transform.
                Vector2 fit = _ghostFit != null ? _ghostFit[content] : Vector2.one;
                art.transform.localScale = new Vector3(fit.x, fit.y, 1f);
                art.flipX = mirrored;

                art.sortingLayerID = src.sortingLayerID;
                art.sortingOrder = _baseSortingOrder[content] + SortingSlab;
                art.color = FlashedColor(i, src.color);
            }
        }

        // How long a shot part stays lit, and how red it goes at the moment of the hit.
        private const float HitFlashDuration = 0.25f;
        private static readonly Color HitFlashColor = new Color(1f, 0.25f, 0.2f, 1f);
        private float[] _hitFlash;

        // Tint a freshly shot part red, fading out. Applied to the GHOST only — the physics renderer
        // keeps its own colour, so the death fade's alpha stays the source of truth.
        private Color FlashedColor(int i, Color baseColor)
        {
            if (_hitFlash == null || _hitFlash[i] <= 0f) return baseColor;
            _hitFlash[i] = Mathf.Max(0f, _hitFlash[i] - Time.deltaTime / HitFlashDuration);
            var flash = HitFlashColor;
            flash.a = baseColor.a;
            return Color.Lerp(baseColor, flash, _hitFlash[i]);
        }

        // Whose depth this part borrows. Facing left it is the limb's PAIR, since turning round swaps
        // which arm and leg is nearest the camera. Torso and head are unpaired.
        private int MirroredIndex(int i)
        {
            if (_flip >= 0f) return i;
            return (i == LeftArmIndex ? RightArmIndex
                : i == RightArmIndex ? LeftArmIndex
                : i == LeftLegIndex ? RightLegIndex
                : i == RightLegIndex ? LeftLegIndex
                : i);
        }

        #endregion

        #region Unity lifecycle
        private void Start()
        {
            // Start, not Awake: services register in the bootstrapper's Awake.
            _events = ServiceLocator.Get<IEventBus>();
            _budget = ServiceLocator.Get<ISimulationBudget>();
        }

        private void OnEnable() => CreatureManager.Register(this);
        private void OnDisable() => CreatureManager.Unregister(this);

        #endregion

        #region Lures and eating
        private bool _carried;

        // DragTool: a carried creature goes full loose ragdoll.
        private float _nextKickTime;
        // Just inside the neck's authored ±25 limit, so the head swings hard without grinding
        // against the joint stop.
        private const float EatHeadTilt = 23f;

        private PropEntity _meal;
        private float _mealDoneAt;
        private Vector2 _eatReach;
        private Vector2 _eatLook;
        // Fixed at pickup: FreeArm follows _flip, so turning mid-meal would raise the empty hand.
        private int _mealArm;

        public bool IsEating => _meal != null;

        // Inside the slab's stride of headroom, above every authored part order and the hat's 6.
        private const int MealSortingOffset = 7;

        // Top of its own head (eyes sit 0.6 up, head circle r 0.45). Generous downward, because a
        // hunched zombie carries its torso below the ground it stands on.
        private const float LureVerticalReach = 1f;

        // A lure only wins when nothing else is going on, or a football defuses every fight. Food
        // sets lureOverridesTarget and cuts in anyway.
        private void TrySeekLure()
        {
            if (_meal != null) { TickEating(); return; }
            if (_carried || Time.time < _nextKickTime) return;

            var lure = PropLureRegistry.FindNearest(torsoBody.position, IsZombie);
            if (lure == null) return;
            if (_aiState.HasTarget && !lure.LureOverridesTarget) return;

            Vector2 delta = (Vector2)lure.transform.position - torsoBody.position;
            if (Mathf.Abs(delta.x) > lure.KickRange)
            {
                // Walk at it. Left as an intent rather than a target so the behaviour keeps
                // ownership of HasTarget, which the combat logic reads.
                _aiState.CurrentDirection = delta.x < 0f ? -1f : 1f;
                _flipTarget = delta.x < 0f ? -1f : 1f;
                return;
            }

            // Standing under it is not the same as reaching it: kickRange gates the x axis only, so
            // a lure held over the creature's head was eaten from any height at all.
            if (Mathf.Abs(delta.y) > LureVerticalReach * _rigScale)
            {
                _aiState.CurrentDirection = 0f; // waits under it rather than walking off
                return;
            }

            if (lure.LureVerb == PropLureVerb.Eat) BeginEating(lure);
            else
            {
                lure.Kick(torsoBody.position);
                _nextKickTime = Time.time + Mathf.Max(0.1f, lure.KickCooldown);
                _aiState.CurrentDirection = 0f;
            }
        }

        private void BeginEating(PropEntity meal)
        {
            _meal = meal;
            _mealDoneAt = Time.time + Mathf.Max(0.1f, meal.EatSeconds);
            _mealArm = FreeArm; // fixed for the whole meal, whichever way it turns
            // Free hand, and inside the rig's own slab but above its parts, so the meal clears the
            // limb holding it without also clearing the creature standing in front.
            meal.BeginCarried(GripOnArm(_mealArm), SortingSlab + MealSortingOffset);
            Sfx.Play(meal.EatClip, TorsoPosition, 1f, 0.05f);
            _aiState.CurrentDirection = 0f;
        }

        // Held at the mouth and worked at: the hand oscillates between the head and a little below
        // it, which reads as chewing without needing an authored animation.
        private void TickEating()
        {
            _aiState.CurrentDirection = 0f;

            if (_meal == null || Time.time >= _mealDoneAt)
            {
                FinishEating();
                return;
            }

            // Pose only — the brain is written later in the tick, or the aim/grab reach clobbers it.
            // The HEAD rocks rather than the arm: a hinge chasing a target reads as flailing.
            float chew = Mathf.Sin(Time.time * Mathf.PI * 2f * Mathf.Max(0.1f, _meal.EatBitesPerSecond));
            Vector2 mouth = (Vector2)headRenderer.transform.position - TorsoPosition;

            _eatReach = new Vector2(_flip * 0.28f * _rigScale, mouth.y);
            // The x term is small on purpose: tilt is atan2(y, |x|), so a narrow x lets the same
            // vertical swing reach a much steeper angle before the clamp takes over.
            _eatLook = new Vector2(_flip * 0.12f * _rigScale, mouth.y + chew * 0.40f * _rigScale);
        }

        private void FinishEating()
        {
            var meal = _meal;
            _meal = null;
            if (meal == null) return;

            // Reported before the effects run: a meal that cures reverts this creature to its normal
            // form, and "feed 20 meat to zombies" must count the zombie that was fed, not what it
            // turned into.
            TaskReporter.Report(TaskVerb.Feed, meal.Item, Current);

            var effects = meal.EatEffects;
            if (effects != null)
                for (int i = 0; i < effects.Length; i++) ApplyEffect(effects[i]);

            meal.Consume();
            _nextKickTime = Time.time + 0.5f; // a beat before it goes looking for the next one
        }

        #endregion

        #region Effects, scaling and form
        // The one door every effect comes through — a drunk potion, a shattered flask, a prop burst.
        public void ApplyEffect(CreatureEffect effect)
        {
            if (effect == null || IsDead || Current == null) return;

            switch (effect.kind)
            {
                case CreatureEffectKind.Heal:
                    _health = Mathf.Min(_health + effect.magnitude, Current.creature.maxHealth);
                    break;
                case CreatureEffectKind.Damage:
                    TakeDamage(effect.magnitude);
                    return; // may have died; nothing left to track
                case CreatureEffectKind.Stun:
                    if (_brain != null) _brain.StunTime = Mathf.Max(_brain.StunTime, effect.duration);
                    return; // the brain owns its own countdown
                // Reported before the swap, or the subject would be the form it became: curing a
                // zombie would report a Normal and never satisfy "cure 20 zombies".
                case CreatureEffectKind.Cure:
                    if (Current.creature.type == CreatureType.Zombie)
                        TaskReporter.Report(TaskVerb.Cure, Current);
                    TrySwapForm(Current.creature.curedForm, CreatureType.Zombie);
                    return; // the swap rebuilds state; tracking an undo would be meaningless
                case CreatureEffectKind.Infect:
                    if (Current.creature.type == CreatureType.Normal)
                        TaskReporter.Report(TaskVerb.Infect, Current);
                    TrySwapForm(Current.creature.infectedForm, CreatureType.Normal);
                    return;
                // Returning rather than breaking on a refused potion matters: falling through would
                // book an expiry that later undoes a scale this creature never took on.
                case CreatureEffectKind.Grow:
                    if (IsZombie && !ZombiesCanGrow) return;
                    if (GrowStacks >= MaxGrowStacks) return;
                    GrowStacks++;
                    QueueScale(effect.magnitude);
                    // Reported past the stack guard, so a potion refused for being already at max
                    // size does not count. Magnitude is a multiplier: below 1 this shrinks.
                    if (!Mathf.Approximately(effect.magnitude, 1f))
                        TaskReporter.Report(effect.magnitude > 1f ? TaskVerb.Grow : TaskVerb.Shrink, Current);
                    break;
                case CreatureEffectKind.Speed:
                    if (_speedStacks >= MaxSpeedStacks) return;
                    _speedStacks++;
                    SpeedMultiplier *= Mathf.Max(0.01f, effect.magnitude);
                    break;
            }

            if (!effect.IsTimed) return;
            _activeEffects.Add(new ActiveEffect
            {
                kind = effect.kind,
                magnitude = effect.magnitude,
                expiresAt = Time.time + effect.duration,
            });
        }

        // Undoes exactly what was applied, so a stack of overlapping potions unwinds in any order.
        private void TickEffects()
        {
            for (int i = _activeEffects.Count - 1; i >= 0; i--)
            {
                if (Time.time < _activeEffects[i].expiresAt) continue;
                var done = _activeEffects[i];
                _activeEffects.RemoveAt(i);

                switch (done.kind)
                {
                    case CreatureEffectKind.Grow:
                        GrowStacks = Mathf.Max(0, GrowStacks - 1);
                        QueueScale(1f / Mathf.Max(0.01f, done.magnitude));
                        break;
                    case CreatureEffectKind.Speed:
                        _speedStacks = Mathf.Max(0, _speedStacks - 1);
                        SpeedMultiplier /= Mathf.Max(0.01f, done.magnitude);
                        break;
                }
            }
        }

        // A potion's resize is spread over several physics steps. Growing x1.4 in one step buried the
        // body deep in whatever stood next to it, and the solver shoved those creatures down through
        // the ground tiles; a few percent per step lets them be pushed aside instead.
        private const float ScaleStepPerTick = 1.04f;

        // Off = a grow potion skips zombies (only normals grow). Set by LunaController each load.
        public static bool ZombiesCanGrow = true;
        private float _pendingScale = 1f; // multiplier still to apply

        private void QueueScale(float multiplier)
        {
            if (multiplier <= 0f) return;
            _pendingScale *= multiplier;
            WakeRig();
        }

        private void TickScale()
        {
            if (Mathf.Approximately(_pendingScale, 1f))
            {
                _pendingScale = 1f;
                return;
            }
            float step = _pendingScale > 1f
                ? Mathf.Min(_pendingScale, ScaleStepPerTick)
                : Mathf.Max(_pendingScale, 1f / ScaleStepPerTick);
            ApplyScale(step);
            _pendingScale /= step;
        }

        // Rescales the whole rig. The ground probe and infection reach are derived from the rig's
        // size, so both are re-derived here rather than left pointing at the old body.
        private void ApplyScale(float multiplier)
        {
            if (multiplier <= 0f || Mathf.Approximately(multiplier, 1f)) return;
            float previous = _rigScale;

            // The root never follows the bodies, so scaling alone teleports the rig through tiles.
            bool pinned = TryGetFooting(out Vector2 footingBefore);
            // Queries must see the rescaled colliders straight away: auto-sync for the duration
            // (Physics2D.SyncTransforms itself is missing in Luna).
            bool autoSync = Physics2D.autoSyncTransforms;
            Physics2D.autoSyncTransforms = true;
            transform.localScale *= multiplier;
            if (pinned && TryGetFooting(out Vector2 footingAfter))
                transform.position += (Vector3)(footingBefore - footingAfter);
            Physics2D.autoSyncTransforms = autoSync;

            _rigScale = transform.lossyScale.y;
            if (previous > 0f) infectRadius *= _rigScale / previous;
            FitGhostsToColliders();
        }

        // Bottom-centre of the rig's solid parts.
        private bool TryGetFooting(out Vector2 footing)
        {
            footing = default(Vector2);
            if (bodyColliders == null) return false;

            float minX = float.MaxValue, maxX = float.MinValue, minY = float.MaxValue;
            for (int i = 0; i < bodyColliders.Length; i++)
            {
                var col = bodyColliders[i];
                if (col == null || col.isTrigger) continue;
                var b = col.bounds;
                minX = Mathf.Min(minX, b.min.x);
                maxX = Mathf.Max(maxX, b.max.x);
                minY = Mathf.Min(minY, b.min.y);
            }

            if (minY == float.MaxValue) return false;
            footing = new Vector2((minX + maxX) * 0.5f, minY);
            return true;
        }

        // Only swaps when the creature is actually the form being swapped FROM, so curing a normal
        // or infecting a zombie is a no-op rather than a corrupt rig.
        private void TrySwapForm(ItemSO into, CreatureType from)
        {
            if (into == null || Current.creature.type != from) return;
            if (into.type != ItemType.Creature) return;
            SetData(into);
        }

        public void SetCarried(bool carried)
        {
            _carried = carried;
            // Grabbing and releasing both snap the rig's velocity, which is not a wall.
            _impactGraceUntil = Time.time + ImpactGrace;
            if (!carried) return;
            SetPosed(false); // a rig in the player's hand must dangle, not hold a pose
            WakeRig();
        }

        #endregion

        #region Spawn data
        public void Initialize(ItemSO data)
        {
            SetData(data);
        }

        public void ReceiveData(ItemSO item)
        {
            if (item.type == ItemType.Creature)
            {
                Initialize(item);
                // Only a freshly spawned normal startles the horde; infection and scene-authored
                // creatures never reach this path (SetData/Awake, not ReceiveData).
                if (!IsZombie) CreatureManager.NotifyNormalSpawned(this);
            }
            else Debug.LogError($"[Creature] {name} received '{item.itemId}' of type {item.type} — expected Creature.", this);
        }

        // Art mirror only; the physics rig is symmetric. Applied at once so the very first frame
        // draws it turned, and it holds until the AI has a direction of its own.
        public void SetFacing(int facing)
        {
            _flipTarget = facing < 0 ? -1f : 1f;
            SyncVisual();
        }

        // A normal spawning within detection range makes a zombie startle: a little hop plus a
        // lunge toward it. Dispatched by CreatureManager.NotifyNormalSpawned.
        public void ReactToNormalSpawn([Bridge.Ref] Vector2 spawnPos)
        {
            if (IsDead || !IsZombie || Current == null) return;
            Vector2 delta = spawnPos - torsoBody.position;
            float range = Current.creature.detectionRadius;
            float distSqr = delta.sqrMagnitude;
            if (distSqr > range * range || distSqr < 0.0001f) return;

            WakeRig();
            Vector2 dir = delta / Mathf.Sqrt(distSqr);
            var hop = new Vector2(dir.x * startleLungeVelocity, startleHopVelocity) * _rigScale;
            torsoBody.AddForce(hop * torsoBody.mass, ForceMode2D.Impulse);
        }

        #endregion

        #region Dormancy and the per-step tick
        // Off-camera dormancy: bodies leave the simulation and the manager slides the root at walk
        // speed. Infection still spreads through the grid, so the horde lives on for an array walk.
        public bool Dormant { get; private set; }

        // Freezing mid-air or mid-drag would read as a glitch when the camera finds it later.
        public bool CanGoDormant => !IsDead && !_carried && _groundedLastTick;
        private bool _groundedLastTick;

        public void SetDormant(bool dormant)
        {
            if (Dormant == dormant) return;
            if (dormant && !CanGoDormant) return;

            // Dormancy owns every body, so the posed LOD hands them back first — otherwise waking
            // would re-simulate limbs this still believes it is holding.
            SetPosed(false);
            Dormant = dormant;

            for (int i = 0; i < _bodies.Length; i++)
            {
                var body = _bodies[i];
                if (body == null) continue;
                if (dormant) body.simulated = false;
                else
                {
                    // Re-added to the world at wherever the transforms drifted to. Stale momentum
                    // from before the freeze would kick the rig on arrival, so it wakes at rest.
                    body.simulated = true;
                    body.linearVelocity = Vector2.zero;
                    body.angularVelocity = 0f;
                    body.WakeUp();
                }
            }
        }

        // Playable intro: while set, every zombie still thinks but stands where it is (no walking).
        public static bool ZombiesHeld;

        // The dormant creature's whole tick: think at the stale-AI rate, slide, keep infecting.
        public void DormantTick(IReadOnlyList<CreatureSnapshot> targets, IReadOnlyList<CreatureAgent> targetAgents, TargetGrid grid)
        {
            if (Current == null || IsDead) return;
            TickScale();

            Vector2 pos = TorsoPosition;
            if (Time.time - _lastThinkTime > 1f)
            {
                _behavior.Tick(pos.x, pos.y, Current.creature, targets, ref _aiState, Time.fixedDeltaTime, _rng);
                VetoTargetBehindWalls(pos);
                _lastThinkTime = Time.time;
            }
            if (ZombiesHeld && IsZombie) _aiState.CurrentDirection = 0f;

            float dir = _aiState.CurrentDirection;
            if (Mathf.Abs(dir) > 0.01f)
            {
                transform.position += new Vector3(dir * Current.creature.moveSpeed * Time.fixedDeltaTime, 0f, 0f);
                _flipTarget = dir < 0f ? -1f : 1f; // the frozen pose at least faces its heading
            }

            // Same exposure bookkeeping as the live tick, so being grabbed keeps counting and
            // letting go keeps decaying whichever side of the camera edge the victim is on.
            if (_touchedThisTick) _touchedThisTick = false;
            else if (_infectionExposure > 0f) _infectionExposure = DecayedExposure();

            if (IsZombie)
            {
                int count = grid.CollectWithin(pos, infectRadius, GridQueryBuffer);
                for (int i = 0; i < count; i++)
                    targetAgents[GridQueryBuffer[i]].AdvanceInfection(Time.fixedDeltaTime);
            }
        }

        // Once per physics step; the two lists are index-aligned and the grid indexes into them.
        public void ManagedTick(IReadOnlyList<CreatureSnapshot> targets, IReadOnlyList<CreatureAgent> targetAgents, TargetGrid grid)
        {
            if (Current == null) return;
            if (IsDead) return;
            // OnEnable registers before Start resolves the services, and a FixedUpdate in that gap
            // threw — building a stack trace per creature as a horde spawned.
            if (_budget == null) return;

            // Before the sleep gate below: a calm zombie's rig sleeps (physics LOD) and the tick
            // early-returns, but a sleeping horde should still groan — the check is two compares.
            TryIdleVoice();
            TickScale(); // before the sleep gate: a queued grow must finish even on a calm rig

            // AI think runs even while sleeping so a sleeping zombie still notices new prey.
            bool granted = _budget.TryConsume(SimCategory.AIThink);
            if (granted || Time.time - _lastThinkTime > 1f)
            {
                _behavior.Tick(torsoBody.position.x, torsoBody.position.y, Current.creature, targets, ref _aiState, Time.fixedDeltaTime, _rng);
                VetoTargetBehindWalls(torsoBody.position);
                _lastThinkTime = Time.time;
            }

            TrySeekLure();
            if (ZombiesHeld && IsZombie) _aiState.CurrentDirection = 0f;

            bool intent = Mathf.Abs(_aiState.CurrentDirection) > 0.01f;

            // A zombie with prey in range must not be allowed to sleep, even while standing still.
    
            Vector2 reachOffset = IsZombie ? FindReachOffset(grid) : WeaponAim;
            // Only a real target aims the creature. The idle stances below are built FROM the facing,
            // so letting them decide it too latches whichever way it happened to be pointing.
            bool aimed = reachOffset != Vector2.zero;
            if (!aimed) reachOffset = ReadyStance();
            // Eating outranks grabbing and aiming: this is the single place reachOffset is decided,
            // and writing the brain earlier just got clobbered by the block below.
            if (_meal != null) reachOffset = _eatReach;
            bool reaching = reachOffset != Vector2.zero;

            // Physics LOD: sleeping rig + nothing to do = free.
            if (RigAsleep())
            {
                if (!intent && !reaching) return;
                WakeRig();
            }

            // One ground probe per creature per step, shared by the step-up assist, the sleep
            // check and the brain's gait gate. The brain used to cast an identical ray of its own.
            Vector2 torsoPos = torsoBody.position;
            float probeRange = GroundProbeRange * _rigScale;

            // Three rays a step for a gait nobody can see is the crowd's biggest cost. The floor
            // does not move, so cache it and re-derive the distance.
            bool ground;
            float groundY;
            if (_posed && _hasCachedGround && ++_probeTick % PosedProbeInterval != 0)
            {
                groundY = _cachedGroundY;
                ground = torsoPos.y - groundY <= probeRange;
            }
            else
            {
                var hit = Physics2D.Raycast(torsoPos, Vector2.down, probeRange, WorldMask);
                ground = hit;
                groundY = hit ? torsoPos.y - hit.distance : float.NegativeInfinity;
                _hasCachedGround = hit;
                _cachedGroundY = groundY;
            }

            float torsoGroundDistance = ground ? torsoPos.y - groundY : float.PositiveInfinity;
            _groundedLastTick = ground;

            if (_activeEffects.Count > 0) TickEffects();

            if (_touchedThisTick) _touchedThisTick = false;
            else if (_infectionExposure > 0f) _infectionExposure = DecayedExposure();

            if (IsZombie) TryInfect(targetAgents, grid);

        
            // Two more rays, and only to get past a step — skipped for the posed, who are pinned in
            // a crowd rather than navigating terrain.
            if (intent && ground && !_carried && !_posed)
                TryClearObstacleAhead(torsoPos, groundY, torsoGroundDistance);

           
            if (_brain != null)
            {
                // Set right before Tick so it can never be read stale.
                _brain.GroundHintDistance = torsoGroundDistance;
                _brain.GroundHintRange = probeRange;
                _brain.RigScale = _rigScale; // a grown rig's probe and head rest stretch with it
                _brain.walkSpeed = Current.creature.moveSpeed * SpeedMultiplier * WornSpeedMultiplier;
                _brain.MoveInput = _carried ? 0f : _aiState.CurrentDirection;
                // A carried creature is a plain ragdoll, so it stops reaching as well as walking.
                _brain.ReachTarget = _carried ? Vector2.zero : reachOffset;
                // A zombie grabs with both; a shooter raises the hand the gun is in, or both if the
                // weapon is authored two-handed.
                bool bothHands = HeldWeapon != null && HeldWeapon.grip == WeaponGrip.BothHands;
                // Eating uses the hand the meal is actually in — even a zombie, which otherwise
                // reaches with both.
                _brain.ReachArm = _meal != null ? _mealArm
                    : IsZombie || bothHands ? 0 : GripArm;
                // A two-handed weapon sets how far the support arm sits off the weapon arm; a grab
                // keeps the tuning asset's own spread.
                _brain.ReachSpread = bothHands ? HeldWeapon.supportArmOffset : -1f;
                _brain.Armed = HeldWeapon != null;
                // A carried creature drops the swing along with everything else it was mid-doing.
                _brain.SwingSpeed = _carried ? 0f : SwingSpeed;
                _brain.Limp = _carried;
                _brain.Carried = _carried;
                // The aim if there is one, else the chase target. Eating drives the head separately —
                // following reachOffset here would freeze the chew.
                _brain.LookTarget = _meal != null ? _eatLook
                    : reaching ? reachOffset
                    : _aiState.HasTarget ? new Vector2(_aiState.TargetX, _aiState.TargetY) - torsoPos
                    : Vector2.zero;
                // A glance is 15 degrees; chewing needs most of the neck's ±25 travel. Reset every
                // tick, or a creature would keep the wide neck after it finished the meal.
                _brain.LookTiltMax = _meal != null ? EatHeadTilt : -1f;
                _brain.Tick();
                TakeImpactDamage();
            }

         
            // A swing must NOT turn the creature: the aim sweeps up to 150 degrees off target, and
            // because the swing mirrors by facing, a flip reverses it and it judders on the spot.
            if (SwingSpeed > 0f) { }
            else if (aimed) _flipTarget = reachOffset.x < 0f ? -1f : 1f;
            else if (intent) _flipTarget = _aiState.CurrentDirection < 0f ? -1f : 1f;

            TrySettle(intent || reaching, torsoGroundDistance);
        }

        private float _nextVoiceTime;

        // Live tick only, so dormant creatures stay quiet. The first is scheduled by SetData with
        // the same random interval, so a fresh horde does not groan in unison.
        private void TryIdleVoice()
        {
            var clips = Current.creature.idleVoiceClips;
            if (clips == null || clips.Length == 0 || Time.time < _nextVoiceTime) return;
            var interval = Current.creature.idleVoiceInterval;
            _nextVoiceTime = Time.time + Random.Range(interval.x, interval.y);
            Sfx.Play(clips, TorsoPosition, 1f, 0.1f);
        }

        // World-space offset to what a held weapon is aiming at; zero when unarmed or no target.
        // Written by WeaponEntity, consumed as the arm reach.
        [System.NonSerialized] public Vector2 WeaponAim;

        // Melee only: >0 while WeaponEntity drives a swing, giving the reach-drive a faster cap than
        // the walk/aim one. Forwarded to the brain each tick alongside WeaponAim.
        [System.NonSerialized] public float SwingSpeed;

        #endregion

        #region Held weapons and wearables
        public WeaponStats HeldWeapon { get; private set; }

        private WeaponEntity _weaponHolder;
        private WearableEntity _worn;

        // One weapon and one wearable per creature; a second item in range is turned away.
        public bool TryHoldWeapon(WeaponEntity weapon, WeaponStats stats)
        {
            if (IsDead || _weaponHolder != null) return false;
            _weaponHolder = weapon;
            HeldWeapon = stats;
            return true;
        }

        public void ReleaseWeapon(WeaponEntity weapon)
        {
            if (_weaponHolder != weapon) return;
            _weaponHolder = null;
            HeldWeapon = null;
            WeaponAim = Vector2.zero;
            // Losing the weapon mid-swing would otherwise leave this set, and a non-zero SwingSpeed
            // holds the facing — the creature would never turn again.
            SwingSpeed = 0f;
        }

        public bool TryWear(WearableEntity wearable)
        {
            if (IsDead || _worn != null) return false;
            _worn = wearable;
            return true;
        }

        private const string GripMarker = "GripPos";
        private Transform _gripL, _gripR;

     
        public Transform GripTransform =>
            GripArm < 0 ? GripOn(LeftArmIndex, ref _gripL) : GripOn(RightArmIndex, ref _gripR);

        // The hand NOT holding a weapon: food goes here so a creature can eat without dropping
        // whatever it was carrying, and so the raised arm is the one with the meal in it.
        private int FreeArm => -GripArm;

        public Transform FreeGripTransform => GripOnArm(FreeArm);

        private Transform GripOnArm(int arm) =>
            arm < 0 ? GripOn(LeftArmIndex, ref _gripL) : GripOn(RightArmIndex, ref _gripR);

        // This arm's authored GripPos. Rigs usually carry only one marker, so the other arm gets a
        // copy at the same local spot — the two arms are near mirror images of each other.
        private Transform GripOn(int armIndex, ref Transform cached)
        {
            if (cached != null) return cached;
            var arm = _renderers[armIndex].transform;
            cached = arm.Find(GripMarker);
            if (cached != null) return cached;

            var authored = transform.Find("RightArm/" + GripMarker);
            if (authored == null) authored = transform.Find("LeftArm/" + GripMarker);
            if (authored == null) return cached = TorsoTransform;

            var copy = new GameObject(GripMarker).transform;
            copy.SetParent(arm, false);
            copy.localPosition = authored.localPosition;
            return cached = copy;
        }

        // Which arm the weapon is in: +1 right, -1 left. A weapon that names a hand always uses that
        // arm; otherwise it goes in the hand nearest the camera, which turning round swaps.
        private int GripArm => (HeldWeapon?.grip == WeaponGrip.LeftHand ? -1
            : HeldWeapon?.grip == WeaponGrip.RightHand ? 1
            : (_flip < 0f ? 1 : -1));

      
        private Vector2 ReadyStance()
        {
            if (IsDead || _carried || HeldWeapon == null || !HeldWeapon.useReadyStance) return Vector2.zero;
            float rad = HeldWeapon.readyArmAngle * Mathf.Deg2Rad;
            return new Vector2(Mathf.Cos(rad) * _flip, Mathf.Sin(rad));
        }

     
        #endregion

        #region Forces, knockback and the block hop
        public void ApplyRecoil([Bridge.Ref] Vector2 impulse)
        {
            if (IsDead || impulse.sqrMagnitude < 0.0001f) return;
            WakeRig();
            var arm = _bodies[GripArm < 0 ? LeftArmIndex : RightArmIndex];
            if (arm != null) arm.AddForce(impulse * arm.mass, ForceMode2D.Impulse);
            torsoBody.AddForce(impulse * (torsoBody.mass * recoilBodyShare), ForceMode2D.Impulse);
        }

        // A melee strike: throw the holding arm so the blow reads as a swing.
        public void SwingArm(float angularImpulse)
        {
            if (IsDead) return;
            WakeRig();
            var arm = _bodies[GripArm < 0 ? LeftArmIndex : RightArmIndex];
            if (arm != null) arm.AddTorque(angularImpulse * arm.mass, ForceMode2D.Impulse);
        }

        // The WHOLE rig launched as one, as a velocity not a force: an impulse divides by mass, so
        // the same blow flicked a hand across the room and barely nudged a torso.
        public void ApplyKnockback([Bridge.Ref] Vector2 direction, float speed)
        {
            if (IsDead || _bodies == null) return;
            SetPosed(false); // a blast has to throw the whole rig, held limbs included
            WakeRig();

            var tuning = _brain != null ? _brain.Tuning : null;
            float scale = tuning != null ? tuning.knockbackScale : DefaultKnockbackScale;
            float liftRatio = tuning != null ? tuning.knockbackLift : DefaultKnockbackLift;
            float maxLift = tuning != null ? tuning.knockbackMaxLift : DefaultKnockbackMaxLift;
            float retain = tuning != null ? tuning.knockbackRetain : DefaultKnockbackRetain;

            // Scaled BEFORE the lift is worked out, so turning the master knob down softens the whole
            // arc rather than flattening it into a floor-level shove.
            speed *= scale;
            Vector2 blow = direction.normalized * speed
                           + Vector2.up * Mathf.Min(speed * liftRatio, maxLift);
            for (int i = 0; i < _bodies.Length; i++)
            {
                var body = _bodies[i];
                if (body == null) continue;
                body.linearVelocity = body.linearVelocity * retain + blow;
            }
            _impactGraceUntil = Time.time + ImpactGrace; // our own launch is not a slam
            GuardTunnelling(); // a hard launch covers tiles in one step; don't let it phase through them
        }

        // Walking into something low. A placed block is hopped onto; anything else — a prop, debris,
        // a bit of scenery — keeps the old forward shove, which is all it ever needed.
        private void TryClearObstacleAhead([Bridge.Ref] Vector2 torsoPos, float groundY, float torsoGroundDistance)
        {
            var ahead = new Vector2(Mathf.Sign(_aiState.CurrentDirection), 0f);
            var lowHit = Physics2D.Raycast(
                new Vector2(torsoPos.x, groundY + StepLowProbeHeight), ahead, StepProbeAhead, WorldMask);
            if (!lowHit || !WorldCollision.IsStatic(lowHit)) return;

            // A block is measured exactly, by counting the cells it stacks up. Anything else falls
            // back to the old ray-and-shove, which is all a prop or a bit of debris ever needed.
            if (TryHopOnto(lowHit, ahead, torsoPos, groundY, torsoGroundDistance)) return;

            var highHit = Physics2D.Raycast(
                new Vector2(torsoPos.x, groundY + StepClearProbeHeight), ahead, StepProbeAhead + 0.2f, WorldMask);
            if (highHit && WorldCollision.IsStatic(highHit)) return; // taller than a step; nothing to climb onto
            torsoBody.AddForce(ahead * StepClimbCarryForce);
        }

        // A ballistic arc onto the block's top middle; the climb owed is the block's own height at
        // any creature size. Returns false ONLY when it is not a block — the caller's cue to shove.
        private bool TryHopOnto([Bridge.Ref] RaycastHit2D hit, [Bridge.Ref] Vector2 ahead, [Bridge.Ref] Vector2 torsoPos,
                                float groundY, float torsoGroundDistance)
        {
            var cell = TileGrid.WorldToCell(hit.point + ahead * HopSurfaceNudge);
            if (!TileGrid.IsOccupied(cell, background: false)) return false;

            // Everything past here is "a block, but not now" — never fall through to the shove, or a
            // creature mid-hop gets pushed into the wall it is already clearing.
            if (Time.time < _nextHopTime) return true;
            // The ground probe reaches well past the feet, so `ground` alone is still true for most
            // of a jump. Standing, and not already rising, is what actually gates a new one.
            if (_brain == null || torsoGroundDistance > _brain.GroundProbeReach) return true;
            // Neither rising nor still dropping: a creature mid-arc is not standing on anything.
            if (Mathf.Abs(torsoBody.linearVelocity.y) > HopRiseTolerance) return true;

            // One block, plus one per grow potion. Walk the column so the leap lands on TOP of the
            // stack rather than into the face of the block above.
            int maxClimb = HopBlocks + GrowStacks + WornExtraJump;
            var landing = cell;
            for (int climbed = 1; TileGrid.IsOccupied(landing + Vector2Int.up, background: false); climbed++)
            {
                if (climbed >= maxClimb) return true; // taller than this creature can take
                landing += Vector2Int.up;
            }

            float gravity = -Physics2D.gravity.y * torsoBody.gravityScale;
            if (gravity <= 0.01f) return true;

            Vector2 top = TileGrid.CellCenter(landing) + Vector2.up * (TileGrid.CellSize * 0.5f);
            float rise = top.y - groundY + HopApexClearance;
            if (rise <= 0f) return true;

            // Up to the apex, then down through the clearance onto the surface — that whole time is
            // what the horizontal speed has to cover the gap in.
            float vy = Mathf.Sqrt(2f * gravity * rise);
            float flight = vy / gravity + Mathf.Sqrt(2f * HopApexClearance / gravity);
            // Braced for the flight plus a beat to land on, and barred from hopping again until
            // after that — the whole leap is one move, not a thing to interrupt.
            Launch(new Vector2((top.x - torsoPos.x) / flight, vy), flight + HopLandingBeat);
            _nextHopTime = Time.time + flight + HopLandingBeat;
            return true;
        }

        // The whole rig leaves together, the way a knockback does. A torso-only impulse tears the
        // body off its own legs, and the arc that lands on the block stops being the one solved for.
        private void Launch([Bridge.Ref] Vector2 velocity, float braceSeconds)
        {
            WakeRig();
            for (int i = 0; i < _bodies.Length; i++)
                if (_bodies[i] != null) _bodies[i].linearVelocity = velocity;
            _impactGraceUntil = Time.time + ImpactGrace; // a hop is not a slam
            // Held together through the arc, or the rig goes limp the instant its feet leave the
            // ground and lands in a heap instead of on its legs.
            if (_brain != null) _brain.BraceTime = braceSeconds;
            GuardTunnelling();
        }

        #endregion

        #region Ragdoll tuning fallbacks
        // Only used by a rig with no tuning asset assigned, which RagdollBrain already errors about.
        private const float DefaultClawKnockback = 2.5f;
        private const float DefaultClawInterval = 0.6f;
        private const float DefaultClawArmThrow = 0.5f;
        private const float DefaultClawInfection = 0.7f;
        private const float DefaultInfectionDecay = 0.35f;
        private const float DefaultKnockbackScale = 1f;
        private const float DefaultKnockbackLift = 0.55f;
        private const float DefaultKnockbackMaxLift = 6f;
        private const float DefaultKnockbackRetain = 0.5f;

        #endregion

        #region Targeting and line of sight
        // The chase target wins: arms go out on ACQUIRING prey, not once it is grabbable, and that
        // target is already sight-checked. The grid scan catches prey the behavior never picked.
        private Vector2 FindReachOffset(TargetGrid grid)
        {
            if (_aiState.HasTarget)
                return new Vector2(_aiState.TargetX, _aiState.TargetY) - torsoBody.position;

            float reach = Mathf.Min(Current.creature.detectionRadius, reachRadius * _rigScale);
            grid.FindNearest(torsoBody.position, reach, out Vector2 dir);
            return dir;
        }

        // Eye height, not torso: a hunched rig's torso sits at floor level (measured 0.3 BELOW the
        // tile top), so a torso-to-torso line reads flat ground as a wall.
        private const float SightEyeLift = 0.6f;

        // One linecast at think time, on the single chosen target. Runs in both the live and
        // dormant paths, so cover works identically off-screen.
        private void VetoTargetBehindWalls([Bridge.Ref] Vector2 eye)
        {
            if (!_aiState.HasTarget) return;
            Vector2 lift = Vector2.up * (SightEyeLift * _rigScale);
            var target = new Vector2(_aiState.TargetX, _aiState.TargetY);
            if (!WorldCollision.BlocksSight(eye + lift, target + lift, SightBlockMask)) return;
            _aiState.HasTarget = false;
            _aiState.CurrentDirection = 0f;
        }

        #endregion

        #region Sleep and wake
        // Sleep the rig once calm for SettleDelay.
        private void TrySettle(bool intent, float torsoGroundDistance)
        {
            // Tilt and stun are in the test because a knocked-down rig lying still is otherwise
            // "calm" — it would sleep on its side and never run the get-up.
            bool calm = !intent
                && torsoGroundDistance < GroundProbeRange
                && torsoBody.linearVelocity.sqrMagnitude < 0.02f
                && Mathf.Abs(torsoBody.angularVelocity) < 5f
                && Mathf.Abs(Mathf.DeltaAngle(torsoBody.rotation, 0f)) < 10f
                && (_brain == null || !_brain.Stunned);
            if (!calm)
            {
                _settledTime = 0f;
                return;
            }

            _settledTime += Time.fixedDeltaTime;
            if (_settledTime < SettleDelay) return;

            // Our own sleep: Rigidbody2D.Sleep / IsSleeping don't exist in Luna. The rig is stilled and
            // flagged; anything that moves it again (a hit, a shove) counts as waking it.
            for (int i = 0; i < _bodies.Length; i++)
            {
                _bodies[i].linearVelocity = Vector2.zero;
                _bodies[i].angularVelocity = 0f;
            }
            _rigAsleep = true;
        }

        private bool _rigAsleep;

        private bool RigAsleep()
        {
            if (!_rigAsleep) return false;
            if (torsoBody.linearVelocity.sqrMagnitude > 0.02f || Mathf.Abs(torsoBody.angularVelocity) > 5f)
                _rigAsleep = false;
            return _rigAsleep;
        }

        private void WakeRig()
        {
            _settledTime = 0f;
            _rigAsleep = false;
            for (int i = 0; i < _bodies.Length; i++)
                _bodies[i].WakeUp();
        }

        // Limbs are light enough that a blast can fling one several tiles per physics step.
        public void GuardTunnelling()
        {
            for (int i = 0; i < _bodies.Length; i++)
                TunnelGuard.Apply(_bodies[i]);
        }

        #endregion

        #region Infection
        // The single gate every infection path runs through — bite exposure and the direct Infect
        // effect both check it, so worn immunity covers all of them from one place.
        private bool CanBeInfected => !WornImmuneToInfection && InfectionRules.CanBeInfected(Current);

        // Shared scratch for grid queries — single-threaded manager tick, so one buffer serves
        // every creature. 32 targets inside one infect radius is already a physical impossibility.
        private static readonly int[] GridQueryBuffer = new int[32];

        private void TryInfect(IReadOnlyList<CreatureAgent> targetAgents, TargetGrid grid)
        {
            int count = grid.CollectWithin(torsoBody.position, infectRadius, GridQueryBuffer);
            for (int i = 0; i < count; i++)
                targetAgents[GridQueryBuffer[i]].AdvanceInfection(Time.fixedDeltaTime);
        }

        
        // Shared feel, so a claw blow's infection and this fade are tuned against each other — the
        // wrong way round and blows decay faster than they land.
        private float DecayedExposure()
        {
            var tuning = _brain != null ? _brain.Tuning : null;
            float rate = tuning != null ? tuning.infectionDecay : DefaultInfectionDecay;
            return Mathf.Max(0f, _infectionExposure - rate * Time.fixedDeltaTime);
        }

        public void AdvanceInfection(float deltaTime)
        {
            if (IsDead || !CanBeInfected) return;
            _touchedThisTick = true;
            _infectionExposure += deltaTime;
            // Turning is capped per step by the manager. Exposure keeps accumulating, so anyone held
            // back simply turns a step or two later — invisible at 50 Hz, and it smears the cost of
            // a cascade through a crowd instead of converting the whole pile in one frame.
            if (_infectionExposure >= infectionTolerance && CreatureManager.TryTakeInfectionSlot()) Infect();
        }

  
        // When the claw lands the next blow is armed. Contacts fire every physics step for as long as
        // the arm rests on the victim, so without this the "hit" is a continuous mush.
        private float _nextSwipeTime;

        public void HandleCollision(Collision2D collision, Collider2D myCollider)
        {
            if (!IsZombie || IsDead) return;
            if (myCollider != bodyColliders[2] && myCollider != bodyColliders[3]) return; // arms only

            // Registry, not a hierarchy walk: the walk fails on tiles and debris an arm rests on,
            // and Unity builds an error string for it.
            var other = OwnerOf(collision.collider);
            if (other == null || other.IsDead || other.IsZombie) return;

            var tuning = _brain != null ? _brain.Tuning : null;
            float interval = tuning != null ? tuning.clawInterval : DefaultClawInterval;
            if (Time.time < _nextSwipeTime) return;
            _nextSwipeTime = Time.time + interval;

            // The BLOW carries infection, not contact: the same blow knocks the victim clear, so
            // contact-based exposure decayed before the next swipe landed.
            other.AdvanceInfection(tuning != null ? tuning.clawInfection : DefaultClawInfection);

            Vector2 away = other.TorsoPosition - TorsoPosition;
            Vector2 dir = away.sqrMagnitude > 0.0001f ? away.normalized : Vector2.up;

            // The claws fly UP into the swipe, so the blow reads as thrown rather than as the victim
            // pinging off a limb that never moved. Opposite signs, so the two arms rake apart.
            ThrowArms(tuning != null ? tuning.clawArmThrow : DefaultClawArmThrow);

            // Same launch a melee weapon gives: horizontally away plus the shared lift, applied to
            // the WHOLE rig so the victim sails back in one piece rather than folding around its torso.
            float side = away.x < 0f ? -1f : 1f;
            other.ApplyKnockback(new Vector2(side, 0f),
                                 tuning != null ? tuning.clawKnockback : DefaultClawKnockback);
            // Sprays from where the arm actually landed, carrying on the way the claw swept.
            other.SplashBlood(collision.contactCount > 0 ? collision.GetContact(0).point : other.TorsoPosition, dir);
        }

        // Both arms flung at once — the zombie's whole-body version of a weapon's SwingArm.
        // Slamming a body into the world hurts it — the point of dragging a creature into a wall.
        //
        // Read off the torso's own speed change rather than a collision callback: only the arms carry
        // a relay, so a torso hitting a tile reports nothing. This sees every part of the world.
        private void TakeImpactDamage()
        {
            var tuning = _brain.Tuning;
            if (tuning == null || tuning.impactHurtSpeed <= 0f) return;

            float speed = _brain.LastImpactSpeed;
            _brain.LastImpactSpeed = 0f; // consumed, so one slam cannot be billed twice
            if (speed <= tuning.impactHurtSpeed) return;
            // A knockback we applied ourselves IS a speed change. Without this a weapon hit would
            // charge its own launch back to the victim as a second wound.
            if (Time.time < _impactGraceUntil || Time.time < _nextImpactHurtTime) return;
            _nextImpactHurtTime = Time.time + Mathf.Max(0.05f, tuning.impactHurtInterval);

            // In the player's hand it is a flat scratch however hard it is swung: a drag is play, and
            // the spring chasing the cursor throws the torso about hard enough to kill on speed alone.
            float damage = _carried
                ? tuning.impactDamageCarried
                : Mathf.Min((speed - tuning.impactHurtSpeed) * tuning.impactDamagePerSpeed,
                            tuning.impactDamageMax);
            if (damage <= 0f) return;

            // Voiced on the step the body actually lands, every time.
            _forceHurtVoice = true;
            // Through TakeHitAt, so it flashes the torso red and bleeds from it like any other wound.
            TakeHitAt(torsoBody, damage, new FragmentImpact
            {
                point = TorsoPosition,
                strength = Mathf.Clamp01(damage / Mathf.Max(1f, tuning.impactDamageMax)),
                direction = -torsoBody.linearVelocity.normalized,
            });
        }

        // Set by anything that writes the rig's velocity itself, so its own shove is not read as a slam.
        private const float ImpactGrace = 0.2f;
        // Long enough to cover the drop from a spawn point down to the ground.
        private const float SpawnImpactGrace = 2f;
        private float _impactGraceUntil;
        private float _nextImpactHurtTime;
        // Consumed by the next TakeDamage, so a slam always cries where a bullet only might.
        private bool _forceHurtVoice;

        private void ThrowArms(float angularImpulse)
        {
            if (_bodies == null) return;
            WakeRig();
            var l = _bodies[LeftArmIndex];
            var r = _bodies[RightArmIndex];
            if (l != null) l.AddTorque(angularImpulse * l.mass, ForceMode2D.Impulse);
            if (r != null) r.AddTorque(-angularImpulse * r.mass, ForceMode2D.Impulse);
        }


        #endregion

        #region Damage, blood and dismemberment
        private FragmentImpact? _lastImpact;

        // Damage that knows where it came from, so the parts burst away from it instead of at random.
        public void TakeDamage(float amount, [Bridge.Ref] in FragmentImpact impact)
        {
            _lastImpact = impact;
            TakeDamage(amount);
        }

        public void TakeDamage(float amount)
        {
            if (IsDead || Current == null) return;
            SetPosed(false); // being hit is exactly when the limbs have to react again
            WakeRig();
            // Probabilistic under fire, where a cry on EVERY hit is wall-of-noise. A slam is the
            // exception: one visible impact with no sound, then a later one that does cry, reads as
            // the audio lagging the hit rather than as a roll that came up short.
            bool voice = _forceHurtVoice || Random.value < Current.creature.hurtVoiceChance;
            _forceHurtVoice = false;
            if (voice) Sfx.Play(Current.creature.hurtClips, TorsoPosition, 1f, 0.08f);
            SpawnBlood();
            _health -= amount;
            if (_health <= 0f) Die(overkill: -_health);
            else _lastImpact = null; // impact info only pairs with the hit that carried it
        }

        // Splashes along the hit's travel direction, or away from the source if it has none (a blast).
        private void SpawnBlood()
        {
            Vector2 point, direction;
            if (_lastImpact.HasValue)
            {
                FragmentImpact hit = _lastImpact.Value;
                if (hit.direction.sqrMagnitude > 0.0001f)
                {
                    point = hit.point;
                    direction = hit.direction.normalized;
                }
                else
                {
                    point = TorsoPosition;
                    Vector2 away = TorsoPosition - hit.point;
                    direction = away.sqrMagnitude > 0.0001f ? away.normalized : Random.insideUnitCircle.normalized;
                }
            }
            else
            {
                point = TorsoPosition;
                direction = Random.insideUnitCircle.normalized;
            }
            BloodEffectSpawner.Play(point, direction, Current.creature.bloodColor);
        }

        // Contacts break and remake many times a second while two rigs grapple, so a clawing
        // zombie would otherwise bury the screen in splashes.
        private const float ClawBloodInterval = 0.35f;
        private float _nextClawBloodTime;

        // Blood drawn by a zombie's grab rather than by damage — the victim's own colour.
        public void SplashBlood([Bridge.Ref] Vector2 point, [Bridge.Ref] Vector2 direction)
        {
            if (IsDead || Current == null || Time.time < _nextClawBloodTime) return;
            _nextClawBloodTime = Time.time + ClawBloodInterval;
            BloodEffectSpawner.Play(point, direction, Current.creature.bloodColor);
        }

        [Tooltip("Share of a shot's recoil that shoves the shooter's torso back, on top of the kick " +
                 "into its arm. Keep the result under RagdollTuning.knockdownImpulse or every shot " +
                 "knocks the shooter flat.")]
        [SerializeField] private float recoilBodyShare = 0.6f;
        [Tooltip("Damage a limb absorbs before it tears off. Torso and head never sever.")]
        [SerializeField] private float limbSeverDamage = 40f;
        [Tooltip("Fraction of a LIMB hit that reaches overall health — low, so a creature can be shot " +
                 "apart limb by limb without dying. Torso and head hits always count in full.")]
        [Range(0f, 1f)] [SerializeField] private float limbHealthTransfer = 0.25f;
        private float[] _partDamage;

        // Part-aware hit: only the shot limb can tear off; the shot's knockback then moves it.
        // Overload kept for callers with no impact info to report (blood then bursts randomly).
        public void TakeHitAt(Rigidbody2D part, float amount)
        {
            if (IsDead || Current == null) return;
            _lastImpact = null;
            HitPart(part, amount);
        }

        public void TakeHitAt(Rigidbody2D part, float amount, [Bridge.Ref] in FragmentImpact impact)
        {
            if (IsDead || Current == null) return;
            _lastImpact = impact;
            HitPart(part, amount);
        }

        private void HitPart(Rigidbody2D part, float amount)
        {
            int index = IndexOf(part);
            if (index >= 0) _hitFlash[index] = 1f;

            // Limbs are rig indexes 2+ (arms, legs). A shot limb takes the hit on its OWN budget and
            // tears off once spent, but only bleeds a fraction into overall health.
            if (index >= LeftArmIndex)
            {
                _partDamage[index] += amount;
                if (_partDamage[index] >= limbSeverDamage) SeverPart(part);
                TakeDamage(amount * limbHealthTransfer);
                return;
            }

            TakeDamage(amount);
        }

        private int IndexOf(Rigidbody2D part)
        {
            for (int i = 0; i < _bodies.Length; i++)
                if (_bodies[i] == part) return i;
            return -1;
        }

        private static void SeverPart(Rigidbody2D part)
        {
            var hinge = part.GetComponent<HingeJoint2D>();
            if (hinge == null) return;
            hinge.enabled = false; // frees the limb this step, so it keeps the hit's momentum
            Destroy(hinge);
            part.WakeUp();
        }

        // Parts fly away from the hit that killed them; random only when the source is unknown.
        private Vector2 BurstDirection(Rigidbody2D body)
        {
            if (!_lastImpact.HasValue) return Random.insideUnitCircle.normalized;
            FragmentImpact hit = _lastImpact.Value;
            Vector2 away = WorldCollision.CenterOfMass(body) - hit.point;
            return away.sqrMagnitude > 0.0001f ? away.normalized : Random.insideUnitCircle.normalized;
        }

        #endregion

        #region Death
        private const float DeathFadeDelay = 2f;
        private const float DeathFadeDuration = 1.5f;
        // Death scatter scales with overkill: gunshots drop parts in place, blasts burst them. These
        // are SPEEDS (m/s), multiplied by each part's mass at use, not raw impulses.
        private const float DeathScatterSpeedMin = 1.5f;
        private const float DeathScatterSpeedMax = 9f;
        private const float DeathSpinRange = 0.4f;
        private const float OverkillForFullScatter = 60f;

        private void Die(float overkill)
        {
            // Before IsDead, or the held limbs stay out of the simulation and never scatter.
            SetPosed(false);
            IsDead = true;
            // Reported here rather than at the damage site: this is the one place a creature is
            // actually confirmed dead, whatever killed it.
            TaskReporter.Report(TaskVerb.Kill, Current);
            Sfx.Play(Current.creature.deathClip, TorsoPosition);
            _brain?.RelaxAll();

            float scatter = Mathf.Lerp(DeathScatterSpeedMin, DeathScatterSpeedMax,
                Mathf.Clamp01(overkill / OverkillForFullScatter));
            foreach (var joint in GetComponentsInChildren<HingeJoint2D>())
            {
                joint.enabled = false;
                Destroy(joint);
            }
            StartCoroutine(BurstOnceJointsAreGone(scatter));

            FadeOutAndDespawn.Begin(gameObject, DeathFadeDelay, DeathFadeDuration);
        }

        private System.Collections.IEnumerator BurstOnceJointsAreGone(float speed)
        {
            yield return new WaitForFixedUpdate();
            for (int i = 0; i < _bodies.Length; i++)
            {
                var body = _bodies[i];
                if (body == null) continue;
                body.WakeUp();
                // Per unit mass, so the 0.4 kg arms and the 4 kg torso leave at the same speed
                // instead of the light parts rocketing off.
                body.AddForce(BurstDirection(body) * (speed * body.mass), ForceMode2D.Impulse);
                body.AddTorque(Random.Range(-DeathSpinRange, DeathSpinRange) * body.mass, ForceMode2D.Impulse);
            }
        }

        #endregion

        #region Infection swap and data binding
        public void Infect()
        {
            if (IsDead || !CanBeInfected) return;
            SetData(Current.creature.infectedForm);
            _infectionExposure = 0f;
            _touchedThisTick = false;
            WakeRig();

            // Transformation reaction: a hop, plus the arms thrown apart while the shoulders go limp.
            torsoBody.AddForce(Vector2.up * (infectJumpVelocity * _rigScale * torsoBody.mass), ForceMode2D.Impulse);
            if (_brain != null) _brain.FlailTime = FlailDuration;
            _bodies[LeftArmIndex].AddTorque(infectArmFlail, ForceMode2D.Impulse);
            _bodies[RightArmIndex].AddTorque(-infectArmFlail, ForceMode2D.Impulse);

            // After SetData: the sound of BECOMING the zombie is authored on the zombie form.
            Sfx.Play(Current.creature.infectedClip, TorsoPosition);

            _events.Publish(new CreatureInfectedEvent(gameObject.GetInstanceID()));
        }

        private void SetData(ItemSO data)
        {
            // A creature spawns in the air and drops to the ground; that landing is not something
            // the player did to it. The same grace covers the infection hop, which lands just as hard.
            _impactGraceUntil = Time.time + SpawnImpactGrace;
            Current = data;
            var stats = data.creature;
            _health = stats.maxHealth;
            _nextVoiceTime = Time.time + Random.Range(stats.idleVoiceInterval.x, stats.idleVoiceInterval.y);
            _behavior = CreatureBehaviorFactory.Get(stats.behaviorKind);
            torsoRenderer.sprite = stats.torso;
            headRenderer.sprite = stats.head;
            leftArmRenderer.sprite = stats.leftArm;
            rightArmRenderer.sprite = stats.rightArm;
            leftLegRenderer.sprite = stats.leftLeg;
            rightLegRenderer.sprite = stats.rightLeg;

           
            FitGhostsToColliders();

            int factionLayer = IsZombie ? ZombieLayer : NormalLayer;
            torsoRenderer.gameObject.layer = factionLayer;
            headRenderer.gameObject.layer = factionLayer;

            int armLayer = IsZombie ? ArmLayer : LimbLayer;
            leftArmRenderer.gameObject.layer = armLayer;
            rightArmRenderer.gameObject.layer = armLayer;
            leftLegRenderer.gameObject.layer = LimbLayer;
            rightLegRenderer.gameObject.layer = LimbLayer;

            // The head sprite above just changed shape (infection swap) — a worn hat fit for the old
            // one needs re-fitting to whichever pose this new form has authored.
            _worn?.ApplyPose();
        }
        #endregion
    }
}

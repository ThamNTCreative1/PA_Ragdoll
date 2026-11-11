using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

namespace Game.Data
{
    // Per-type property blocks embedded in ItemSO; only the block matching ItemSO.type is shown.

    [Serializable]
    public class CreatureStats
    {
        public CreatureType type;
        public float maxHealth = 100f;
        [Tooltip("Off = this creature can never be turned.")]
        public bool infectable = true;
        [Tooltip("The item this creature turns into when infected (a Creature-type ItemSO).")]
        public ItemSO infectedForm;
        [Tooltip("The item this zombie reverts to when cured. Empty = can never be cured.")]
        public ItemSO curedForm;

        public Sprite torso;
        public Sprite head;
        public Sprite leftArm;
        public Sprite rightArm;
        public Sprite leftLeg;
        public Sprite rightLeg;

        [Tooltip("Whole-body sprite, kept for UI and far-LOD uses.")]
        public Sprite lodSprite;

        [Tooltip("Tint of this creature's hit-splash FX.")]
        public Color bloodColor = new Color(0.55f, 0.05f, 0.05f, 1f);

        public CreatureBehaviorKind behaviorKind = CreatureBehaviorKind.Wander;
        public float moveSpeed = 2f;
        [Tooltip("How far this creature notices a target, in world units.")]
        [Range(1f, 30f)] public float detectionRadius = 5f;

        [Tooltip("One picked at random each time this creature takes damage. Empty = silent.")]
        public AudioClip[] hurtClips;
        [Tooltip("Chance a hit actually voices a hurt clip, so sustained fire isn't a wall of noise.")]
        [Range(0f, 1f)] public float hurtVoiceChance = 0.35f;
        [Tooltip("Played once when this creature dies.")]
        public AudioClip deathClip;
        [Tooltip("Played when a creature TURNS INTO this form — author it on the zombie variant.")]
        public AudioClip infectedClip;
        [Tooltip("Ambient voice, one at random every idleVoiceInterval while alive and on-screen. Empty = silent.")]
        public AudioClip[] idleVoiceClips;
        [Tooltip("Seconds between ambient voices, picked anew in [x..y] after each one.")]
        public Vector2 idleVoiceInterval = new Vector2(6f, 16f);
    }

    // What a weapon does when it attacks. Each kind runs its own path in WeaponEntity.
    public enum WeaponKind
    {
        Bullet,           // one projectile straight down the barrel
        Shotgun,          // a fan of projectiles
        GrenadeLauncher,  // lobs a spawned explosive item
        Melee,            // no projectile: a swing that hits what is in reach
    }

    // Which hand(s) a weapon occupies. Drives RagdollBrain.ReachArm through CreatureAgent.
    public enum WeaponGrip
    {
        LeftHand,   // that arm raises whichever way the creature faces; the other hangs
        RightHand,
        BothHands,  // both arms come up, the support arm offset from the weapon arm
    }

    // Particle prefab a weapon throws out on a landed hit, placed on the victim (not the weapon art).
    [Serializable]
    public class WeaponHitEffect
    {
        public GameObject prefab;
        [Tooltip("Shifts the spawn off the exact contact point. X runs along the blow, Y across it.")]
        public Vector2 offset;
        [Tooltip("Turn relative to the direction of the blow, in degrees. 0 faces the way the hit travelled.")]
        public float rotation;
        [Range(0.05f, 10f)]
        [Tooltip("Multiplies the prefab's own scale.")]
        public float scale = 1f;
        [Tooltip("On = parented to the struck limb so it rides along. Off = left behind in the world.")]
        public bool attached;
    }

    // One particle prefab a weapon throws out when it attacks, placed on the weapon's own art.
    [Serializable]
    public class WeaponEffect
    {
        public GameObject prefab;
        [Tooltip("Where it spawns, in the weapon's OWN space (+X is the barrel).")]
        public Vector2 offset = new Vector2(0.35f, 0f);
        [Tooltip("Turn relative to the barrel, in degrees. 0 fires straight down the muzzle.")]
        public float rotation;
        [Range(0.05f, 10f)]
        [Tooltip("Multiplies the prefab's own scale.")]
        public float scale = 1f;
        [Tooltip("On = rides the weapon (a flash on the barrel). Off = left behind (smoke, shells).")]
        public bool attached = true;
    }

    [Serializable]
    public class WeaponStats
    {
        public WeaponKind kind = WeaponKind.Bullet;
        [Tooltip("How close a Normal creature must come to pick the weapon up.")]
        public float pickupRadius = 0.8f;
        [Tooltip("How far it looks for a target; melee also uses this as its swing hit radius.")]
        public float range = 7f;
        [Tooltip("Attacks per second.")]
        public float fireRate = 1.5f;
        public float damage = 25f;
        [Tooltip("How hard a hit shoves the victim. Guns apply an impulse; melee sets a launch speed.")]
        public float knockback = 4f;
        [Tooltip("Kick back into the shooter, opposite the muzzle. 0 = none.")]
        public float recoil = 1.5f;

        [Tooltip("How fast the projectile leaves the barrel, in units/second.")]
        public float projectileSpeed = 18f;

        [Tooltip("Where a shot (or melee swing) leaves the weapon, in its own space (+X is the barrel).")]
        public Vector2 muzzleOffset = new Vector2(0.35f, 0f);

        [Tooltip("Effects thrown out on every attack — flash, smoke, shells — each with its own spot on the weapon.")]
        public WeaponEffect[] fireEffects;

        [Tooltip("Effects played at the target when a hit lands — sparks, impact puff, gore burst.")]
        public WeaponHitEffect[] hitEffects;

        [Tooltip("Sprite the projectile is drawn with (+X is the travel direction). Empty = the prefab's own.")]
        public Sprite projectileSprite;
        [Tooltip("Size multiplier for the projectile.")]
        [Range(0.05f, 10f)]
        public float projectileScale = 1f;
        [Tooltip("Turn applied to the bullet art so its tip runs down the shot.")]
        public float projectileRotation;
        [Tooltip("Thrown weapon (kunai): the one in the hand is what flies, so the hand shows empty after " +
                 "each throw until shortly before the next one.")]
        public bool hideOnShot;
        [Tooltip("hideOnShot: seconds before the next throw that the weapon shows in the hand again.")]
        public float reappearLead = 0.2f;

        [Tooltip("Projectiles per pull. Damage below is PER pellet.")]
        public int pelletCount = 6;
        [Tooltip("Total cone the pellets fan across, in degrees.")]
        public float spreadDegrees = 22f;

        [Tooltip("The Explosive item this lobs. Its own fuse and blast do the damage.")]
        public ItemSO launchedItem;
        [Tooltip("Degrees the lob is tilted up from aim, so it arcs over cover instead of firing flat.")]
        [Range(0f, 80f)] public float launchAngle = 25f;
        [Tooltip("Multiplies the grenade's own gravity in flight; below 1 floats further, above 1 drops short.")]
        [Range(0.1f, 3f)] public float launchGravity = 1f;

        // Melee is deliberately simple: `range` above is both the target-worthy distance and the hit radius.
        [Tooltip("How far the arm winds up against the strike before swinging through, in degrees off aim.")]
        [Range(0f, 150f)] public float windupAngle = 35f;
        [Tooltip("How far the arm follows through past aim; the strike connects partway through this.")]
        [Range(0f, 150f)] public float followAngle = 55f;
        [Tooltip("How fast the arm is driven through windupAngle/followAngle, in degrees/second.")]
        public float armSpeed = 720f;
        [FormerlySerializedAs("swingImpulse")]
        [Tooltip("Extra angular impulse into the arm the instant the strike connects.")]
        public float impactKick = 0.6f;

        [Tooltip("Which hand holds it. BothHands brings the support arm up alongside the weapon arm.")]
        public WeaponGrip grip = WeaponGrip.LeftHand;
        [Tooltip("The ready stance angle while armed with no target, in degrees from straight ahead.")]
        [Range(-120f, 120f)] public float readyArmAngle = -60f;
        [Tooltip("Off = the arm just hangs when there is no target, as an unarmed creature's does.")]
        public bool useReadyStance = true;
        [Tooltip("Degrees the support arm sits from the weapon arm when held in both hands.")]
        [Range(-90f, 90f)] public float supportArmOffset = 16f;

        [Tooltip("Where on the gun the hand grips it, in the weapon's own space (+X is the barrel).")]
        public Vector2 gripPoint;
        [Tooltip("Z rotation in the hand; -90 lines the barrel along a hanging arm.")]
        public float gripRotation = -90f;
        [Tooltip("Size multiplier for the whole weapon — art and collider, held or on the ground.")]
        [Range(0.05f, 8f)]
        public float scale = 1f;

        [Tooltip("Sorting layer it draws in. Empty = whatever its prefab already uses.")]
        public string sortingLayer;
        [Tooltip("Depth within the holder's own sorting slab, relative to the holder (never absolute).")]
        public int sortingOrder = 3;

        [Tooltip("One picked at random per attack — a shot's bang, a launcher's thump. Fires once " +
                 "per attack even for a shotgun's many pellets. Empty = silent.")]
        public AudioClip[] attackClips;
        [Range(0f, 1f)] public float attackVolume = 1f;
        [Tooltip("Playback speed of the attack sound. 1 = as recorded; above 1 is faster/snappier " +
                 "(suits a high fireRate), below 1 is slower/heavier.")]
        [Range(0.5f, 2f)] public float attackPitch = 1f;
        [Tooltip("On = if the clip lasts longer than the gap between shots (1/fireRate), it is " +
                 "sped up just enough to finish before the next one — the sound keeps pace with " +
                 "the gun automatically. attackPitch still applies as the base speed.")]
        public bool fitFireRate = true;
        [Tooltip("± random pitch per attack, so an auto-fire stream doesn't machine-stamp one s...")]
        [Range(0f, 0.5f)] public float attackPitchJitter = 0.05f;
        [Tooltip("Melee only: one picked at random when a swing actually connects. Empty = silent.")]
        public AudioClip[] hitClips;
        [Tooltip("Played when a creature picks this weapon up. Empty = the library default.")]
        public AudioClip[] pickupClips;

        // Layer names come from the project's own sorting layers, so a typo can't silently do nothing.
        private static IEnumerable<string> SortingLayerNames()
        {
            yield return string.Empty;
            foreach (var layer in SortingLayer.layers) yield return layer.name;
        }
    }

    [Serializable]
    public class TileStats
    {
        [Tooltip("Background decor (indestructible, no collider) instead of a solid block.")]
        public bool isBackgroundTile;
        [Tooltip("Hit points when placed as a solid block.")]
        public float maxHealth = 30f;

        [Tooltip("Seconds without a hit before a cracked tile starts knitting back together.")]
        public float crackRecoverDelay = 2f;
        [Tooltip("Seconds to climb from nearly broken back to whole, once recovery has started. " +
                 "0 = damage is permanent and the crack never heals.")]
        public float crackRecoverSeconds = 4f;

        [Tooltip("Placement sound for this tile. Empty = the library default. Per-material overrides " +
                 "go here (glass, metal, stone).")]
        public AudioClip placeClip;
        [Tooltip("Destruction sound for this tile. Empty = the library default.")]
        public AudioClip breakClip;
    }

    // What an explosive does when it goes off. Each kind runs its own path in ExplosiveEntity.
    public enum ExplosiveKind
    {
        Blast,     // damages and flings everything in radius — grenade, launcher shell
        Timed,     // blinks ever faster, then blasts (TNT)
        Smoke,     // no blast at all: pours a cloud where it lands
        Firework,  // climbs under thrust, then bursts into sparks
        Rocket,    // drives itself at the ground, blasts where it lands
        Mine,      // settles where it is dropped, arms, then waits to be stepped on
    }

    // The body an explosive falls on. A capsule suits anything rounded that should roll; a box
    // suits anything flat that should stay put — a mine on a rounded end rocks instead of settling.
    public enum ExplosiveBody
    {
        Capsule,
        Box,
    }

    // What sets an explosive off.
    public enum ExplosiveTrigger
    {
        Fuse,         // its own timer, started at spawn
        Contact,      // the first thing it touches, with the fuse as a backstop
        NoseContact,  // only a hit on the nose end counts, so it has to land tip-first
        Pressure,     // an authored plate above the body, not the body itself
    }

    [Serializable]
    public class ExplosiveStats
    {
        public ExplosiveKind kind = ExplosiveKind.Blast;

        // A mine is always its plate — there is no other way to set one off, so the choice is hidden
        // rather than offered and ignored.
        public ExplosiveTrigger trigger = ExplosiveTrigger.Fuse;

        [Tooltip("Seconds before the fuse burns through.")]
        public float fuseSeconds = 0.6f;
        [Tooltip("Size multiplier for the whole explosive — art AND collider.")]
        [Range(0.1f, 8f)] public float scale = 1f;

        [Tooltip("Shape of the body it falls on. Capsule rolls, which suits a grenade; Box sits flat, " +
                 "which suits a mine or a crate — a mine on a rounded end rocks instead of settling.")]
        public ExplosiveBody bodyShape = ExplosiveBody.Capsule;

        [Tooltip("Where the art's nose points in its own space, in degrees: 90 = up, -90 = down.")]
        public float noseAngle = 90f;

        public float radius = 2.5f;
        public float damage = 40f;
        [Tooltip("Knockback impulse at the blast center, falling off to the radius edge.")]
        public float force = 25f;

        [Tooltip("How wide the blast bites, in degrees. 360 = all round; narrower makes a shaped " +
                 "charge that only reaches the way it faces. Author it in the Explosive Editor.")]
        [Range(10f, 360f)] public float blastArc = 360f;
        [Tooltip("Which way the arc points in the explosive's own space, in degrees: 90 = up.")]
        public float blastFacing = 90f;

        [Tooltip("Particle prefab played where it goes off. Empty = no effect.")]
        public GameObject detonateEffect;
        [Tooltip("Multiplies the effect prefab's own scale, so one blast prefab covers a grenad...")]
        [Range(0.1f, 12f)] public float detonateEffectScale = 1f;
        [Tooltip("Peak camera-shake amplitude on detonation, in world units. 0 = no shake.")]
        public float screenShakeStrength = 0.1f;
        [Tooltip("How long the detonation camera shake eases out over, in seconds.")]
        public float screenShakeDuration = 0.3f;

        [Tooltip("Acceleration along the nose once it launches, in units/second².")]
        public float thrust = 14f;
        [Tooltip("Speed the thrust builds up to, in units/second.")]
        public float maxSpeed = 12f;
        [Tooltip("Particle prefab that rides the tail while it flies. Empty = no trail.")]
        public GameObject trailEffect;
        [Tooltip("How far behind the center the trail sits, in local units.")]
        public float trailOffset = 0.3f;
        [Range(0.1f, 12f)] public float trailScale = 1f;

        [ColorUsage(true, true)]
        [Tooltip("The colour the art is blended TO on each flash, through GameConfig's sprite flash " +
                 "material. With no such material it can only tint, which hardly shows on coloured art.")]
        public Color blinkColor = Color.white;
        [Tooltip("Seconds per flash when the fuse is lit;")]
        public float blinkStartInterval = 0.45f;
        public float blinkEndInterval = 0.06f;

        [Tooltip("Looping particle prefab the canister pours out. Empty = no cloud.")]
        public GameObject smokeEffect;
        [Tooltip("How long it keeps emitting before the cloud thins out and clears.")]
        public float smokeSeconds = 6f;
        [Range(0.1f, 12f)] public float smokeScale = 1f;

        [Tooltip("Seconds after it comes to rest before the plate goes live. Long enough that the " +
                 "hand that dropped it, and its own bounce, don't set it off.")]
        public float armSeconds = 0.8f;
        [Tooltip("Speed below which it counts as settled and locks in place.")]
        public float settleSpeed = 0.15f;
        [Tooltip("Swapped in when the plate goes live, so an armed mine reads differently.")]
        public Sprite armedSprite;
        [Tooltip("Centre of the pressure plate in local units, relative to the body.")]
        public Vector2 triggerOffset = new Vector2(0f, 0.12f);
        [Tooltip("Size of the pressure plate in local units.")]
        public Vector2 triggerSize = new Vector2(0.5f, 0.1f);
        [Tooltip("Frames played on the plate being pressed, before the blast.")]
        public Sprite[] detonateFrames;
        [Tooltip("Frames per second for the detonate animation. The blast lands on the last frame.")]
        public float detonateFrameRate = 24f;

        [Tooltip("Arming sound the instant it spawns — pin pulled, fuse lit. Empty = silent.")]
        public AudioClip armClip;
        [Tooltip("Played once as it launches — a rocket's roar, a firework's whistle.")]
        public AudioClip flightClip;
        [Tooltip("One picked at random on detonation. Empty = silent.")]
        public AudioClip[] explodeClips;
        [Range(0f, 1f)] public float explodeVolume = 1f;
    }

    // What a fragile prop will break against. Tiles are excluded by default so a flask can be set
    // down on the ground, and weapons so a swing shatters things by damage rather than by touch.
    [Flags]
    public enum PropContact
    {
        None     = 0,
        Creature = 1 << 0,
        Prop     = 1 << 1,
        Tile     = 1 << 2,
        Weapon   = 1 << 3,
    }

    // Which creatures a prop calls over. Kept separate from PropContact because being drawn to a
    // thing and being able to break it are unrelated questions.
    [Flags]
    public enum PropLureTarget
    {
        None   = 0,
        Normal = 1 << 0,
        Zombie = 1 << 1,
    }

    // What a creature does once it reaches a lure.
    public enum PropLureVerb
    {
        Kick,  // boots it away and walks off
        Eat,   // picks it up, chews, and consumes it
    }

    [Serializable]
    public class PropStats
    {
        public float maxHealth = 20f;
        [Tooltip("How many shards it shatters into when broken.")]
        public int shardCount = 4;

        [Tooltip("Break on being touched rather than only on losing all health — a glass flask " +
                 "goes on the first thing that hits it.")]
        public bool breakOnContact;
        [Tooltip("What counts as a breaking touch. Ground and thrown weapons are usually left out, " +
                 "so a flask can be put down and shoved into instead of shattering where it lands.")]
        public PropContact breakableBy = PropContact.Creature | PropContact.Prop;
        [Tooltip("Minimum impact force to break it. 0 = the lightest brush is enough.")]
        public float breakImpulse;

        [Tooltip("How far the effects reach when it breaks. 0 = no burst at all.")]
        public float burstRadius;
        [Tooltip("Applied to every creature caught in the radius.")]
        public CreatureEffect[] burstEffects;
        [Tooltip("Particle prefab played where it broke. Empty = no visual.")]
        public GameObject burstEffect;
        [Range(0.1f, 12f)] public float burstEffectScale = 1f;

        [Tooltip("How far this prop calls creatures over, in world units. 0 = it is ignored.")]
        public float lureRadius;
        [Tooltip("Who comes running. A ball draws normals; carrion might draw zombies.")]
        public PropLureTarget lureCreatures = PropLureTarget.Normal;
        [Tooltip("What it does on arrival.")]
        public PropLureVerb lureVerb = PropLureVerb.Kick;
        [Tooltip("On = a creature abandons whatever it was chasing to come for this. Food does; a " +
                 "ball should not, or it defuses every fight.")]
        public bool lureOverridesTarget;
        [Tooltip("How close it has to get before it acts.")]
        public float kickRange = 0.7f;
        [Tooltip("Impulse put into the prop on a kick. 0 = it walks over and does nothing.")]
        public float kickForce = 6f;
        [Tooltip("How much of the kick goes upward, so a ball arcs instead of skidding.")]
        [Range(0f, 1f)] public float kickLift = 0.45f;
        [Tooltip("Seconds before the same creature will chase it again — without this they mob it.")]
        public float kickCooldown = 1.2f;
        [Tooltip("Kicks it survives before it comes apart. 0 = it never breaks from being kicked.")]
        public int kicksToBreak;
        [Tooltip("Played on the kick. Empty = silent.")]
        public AudioClip kickClip;

        [Tooltip("How long the creature holds and chews it before it is gone.")]
        public float eatSeconds = 1.6f;
        [Tooltip("Chews per second — how fast the head and arm work while eating.")]
        public float eatBitesPerSecond = 3f;
        [Tooltip("Looped while it eats. Empty = silent.")]
        public AudioClip eatClip;
        [Tooltip("Applied to the eater once it finishes — food that heals, cures, or speeds up.")]
        public CreatureEffect[] eatEffects;

        [Tooltip("Shatter sound — glass for a TV, metal for a barrel. Empty = the library default.")]
        public AudioClip breakClip;
    }

    // One creature's own fit for a wearable — a bat's ears sit nothing like a man's crown. Authored in
    // the Wearable Pose Editor; creature is a specific species AND infection variant.
    [Serializable]
    public class WearablePose
    {
        public ItemSO creature;
        public Vector2 offset = new Vector2(0f, 0.3f);
        [Range(0.1f, 4f)] public float scale = 1f;
        public float rotation;
    }

    // What a wearable does to its wearer for as long as it is worn. Unlike CreatureEffect these are
    // not applied-and-forgotten: they are folded into the creature's live values while the item is
    // on its head and undone the moment it comes off, so nothing has to expire on a timer.
    [Serializable]
    public class WearableEffects
    {
        [Tooltip("Walk speed multiplier while worn. 1 leaves it unchanged.")]
        [Min(0.05f)] public float speedMultiplier = 1f;

        [Tooltip("Body scale multiplier, applied on wear and undone on removal. 1 leaves it unchanged.")]
        [Min(0.05f)] public float scaleMultiplier = 1f;

        [Tooltip("Extra blocks the wearer can climb or hop over.")]
        [Min(0)] public int extraJumpBlocks;

        [Tooltip("A zombie's bite can never turn this creature — it is still chased, just immune.")]
        public bool immuneToInfection;

        [Tooltip("Zombies do not pick this creature as prey at all.")]
        public bool ignoredByZombies;

        [Tooltip("Lets a zombie pick up and fire weapons — normally only living creatures can. " +
                 "An armed zombie hunts normals, the mirror of an armed normal hunting zombies.")]
        public bool allowsWeapons;

        public bool HasAny =>
            !Mathf.Approximately(speedMultiplier, 1f) ||
            !Mathf.Approximately(scaleMultiplier, 1f) ||
            extraJumpBlocks > 0 || immuneToInfection || ignoredByZombies || allowsWeapons;
    }

    [Serializable]
    public class WearableStats
    {
        [Tooltip("How close a creature must come for the wearable to snap on.")]
        public float wearRadius = 0.6f;

        public WearableEffects effects = new WearableEffects();

        [Tooltip("Position on the head, in world units from its pivot. Used for any creature with " +
                 "no entry of its own below.")]
        public Vector2 wornOffset = new Vector2(0f, 0.3f);
        [Range(0.1f, 4f)] public float wornScale = 1f;
        public float wornRotation = 0f;

        [Tooltip("Per-creature fits authored in the Wearable Pose Editor. A creature not listed here " +
                 "falls back to the default offset/scale/rotation above.")]
        public WearablePose[] poses = new WearablePose[0];

        // The fit to use for a specific creature: its own entry if one is authored, else the default.
        public (Vector2 offset, float scale, float rotation) PoseFor(ItemSO creature)
        {
            if (poses != null)
                foreach (var pose in poses)
                    if (pose.creature == creature) return (pose.offset, pose.scale, pose.rotation);
            return (wornOffset, wornScale, wornRotation);
        }
    }
}

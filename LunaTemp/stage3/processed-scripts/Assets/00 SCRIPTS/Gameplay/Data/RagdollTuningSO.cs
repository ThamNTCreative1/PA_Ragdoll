using UnityEngine;

namespace Game.Data
{
    // Ragdoll FEEL in one shared asset, read each physics step so edits apply live in play mode. Values
    // come from the clean-room prototype and hold together only against its rig constants.
    [CreateAssetMenu(menuName = "Data/Creature/Ragdoll Tuning", fileName = "RagdollTuning")]
    public class RagdollTuningSO : ScriptableObject
    {
        [Header("Balance (balloon self-righting via MoveRotation)")]
        [Tooltip("Softness knob. Fraction of the remaining tilt corrected per second — LOW = a soft, " +
                 "slow, deliberate get-up; HIGH = snaps upright. Proportional, so it ALWAYS completes " +
                 "(no hard speed cap that disturbances could out-run).")]
        public float balanceForce = 5f;
        [Tooltip("Degrees the torso leans into travel while walking.")]
        public float walkLean = 6f;
        [Tooltip("Fraction of balance/neck/leg torque kept while off the ground. 0 = a dropped " +
                 "creature falls as a loose ragdoll and picks itself up on landing; 1 = rigid.")]
        [Range(0f, 1f)] public float airborneStiffness;

        [Header("Knockdown (a hard hit drops it into a plain ragdoll)")]
        [Tooltip("Torso speed change in ONE physics step (m/s) that knocks it down. Must sit above " +
                 "gravity (0.36/step) and the walk push (~0.12/step). 0 = never knocked down.")]
        public float knockdownImpulse = 3.5f;
        [Tooltip("Seconds it lies limp before the balancer starts the get-up.")]
        public float knockdownRecovery = 1.2f;

        [Header("Impact damage (slamming a body into the world hurts it)")]
        [Tooltip("Torso speed change in ONE step (m/s) before a slam draws blood. Project gravity is " +
                 "-18, so a plain fall lands at sqrt(36*height): 2m is 8.5, 5m is 13.4. Set this " +
                 "above the tallest drop that should be survivable. 0 = impacts never hurt.")]
        public float impactHurtSpeed = 15f;
        [Tooltip("Hit points per m/s of speed change ABOVE impactHurtSpeed.")]
        public float impactDamagePerSpeed = 4f;
        [Tooltip("Ceiling on one slam, so a freak spike cannot one-shot a creature outright.")]
        public float impactDamageMax = 35f;
        [Tooltip("Flat damage while the PLAYER is holding it. Dragging a ragdoll about is play, not " +
                 "an execution — it should wince, not die.")]
        public float impactDamageCarried = 1f;
        [Tooltip("Seconds before another slam can wound. One hit bounces over several steps, and " +
                 "without this each bounce bills separately.")]
        public float impactHurtInterval = 0.35f;

        [Header("Knockback (how a struck creature is launched — Minecraft-style)")]
        [Tooltip("MASTER strength of every knockback in the game. Each weapon carries its own relative " +
                 "force (a sledgehammer hits harder than a dagger); this scales the whole set at once, " +
                 "so overall punchiness is one slider rather than an edit per weapon. 1 = the raw " +
                 "authored numbers.")]
        [Range(0f, 2f)] public float knockbackScale = 0.5f;
        [Tooltip("How much of a blow's push goes UPWARD, as a fraction of its horizontal speed. The " +
                 "pop off the ground is what makes a hit arc away instead of scraping along the " +
                 "floor. 0 = pure horizontal shove.")]
        [Range(0f, 2f)] public float knockbackLift = 0.55f;
        [Tooltip("Ceiling on that upward part (units/s), so the heaviest weapons launch hard without " +
                 "firing anyone into orbit.")]
        public float knockbackMaxLift = 6f;
        [Tooltip("Fraction of the victim's EXISTING motion kept when a blow lands. Minecraft halves " +
                 "it (0.5), which is what makes every hit read the same — at 1 a zombie already " +
                 "sprinting at you eats a full swing and barely changes course.")]
        [Range(0f, 1f)] public float knockbackRetain = 0.5f;

        [Header("Zombie claw (a bare-handed swipe at a normal)")]
        [Tooltip("Launch speed (units/s) a claw sends its victim at, before knockbackScale above. " +
                 "Keep it modest: a swipe should STAGGER, not punt. Too high and the zombie knocks " +
                 "the victim out of its own infect radius, so the contact it needs to turn them " +
                 "never accumulates. For scale, a creature is about 2 units tall.")]
        public float clawKnockback = 2.5f;
        [Tooltip("Seconds between claw blows on the same victim. Contacts fire every physics step " +
                 "while an arm rests on someone, so without a gap the hit is a continuous mush " +
                 "instead of distinct blows.")]
        public float clawInterval = 0.6f;
        [Tooltip("Angular impulse thrown into both arms as the claw swipes, so they visibly fly UP " +
                 "into the blow rather than the victim pinging off a limb that never moved.")]
        public float clawArmThrow = 0.5f;
        [Tooltip("Infection exposure (seconds' worth) a single claw BLOW lands. The blow carries the " +
                 "infection because the blow also knocks the victim clear — waiting for sustained " +
                 "contact would never turn anyone. Against CreatureAgent's infectionTolerance of 1.5 " +
                 "and the decay below, 0.7 turns a normal in three swipes.")]
        public float clawInfection = 0.7f;
        [Tooltip("Infection exposure lost per second once a victim is no longer being touched. Must " +
                 "stay below clawInfection per swipe interval, or blows decay faster than they land " +
                 "and nobody ever turns.")]
        public float infectionDecay = 0.35f;

        [Header("Head pull (the 'invisible hand' — dynamic look)")]
        [Tooltip("Spring force per metre of displacement from the rest spot above the torso.")]
        public float headSpring = 70f;
        [Tooltip("Damping against the head's own velocity, so it settles instead of overshooting.")]
        public float headDamp = 7f;
        [Tooltip("Neck torque holding the head level. Must beat its own weight on the neck lever " +
                 "(~2.4 N.m at the 25 deg limit) or it stays lolling. 0 = free-hanging head.")]
        public float neckStrength = 6f;

        [Header("Legs (strong struts — lift the body, stop it sitting)")]
        [Tooltip("Hip torque. Strong enough to drive the legs vertical and lever the body up to full " +
                 "standing height. Safe to be strong: MoveRotation owns the torso, so this can't tip it.")]
        public float hipStrength = 60f;
        [Tooltip("How hard the hip chases its target angle (1/s).")]
        public float muscleGain = 9f;
        [Tooltip("Cap on hip motor speed (deg/s).")]
        public float muscleMaxSpeed = 320f;

        [Header("Walk (small steps + real force)")]
        [Tooltip("Steps per second.")]
        public float cadence = 2f;
        [Tooltip("Hip swing amplitude around vertical (deg). Small — the genre takes tiny steps but " +
                 "still gains momentum (propulsion comes from the push below, not the swing size).")]
        public float hipSwing = 11f;
        [Tooltip("Which way the hinge rotates a leg forward. Flip (-1 <-> 1) if the leading leg swings " +
                 "inward/back under the body and jams instead of reaching forward to plant.")]
        public float hipForwardSign = -1f;
        [Tooltip("Upward lift (accel) on whichever leg is swinging forward, so it picks up into a " +
                 "small step instead of dragging.")]
        public float stepLift = 12f;
        [Tooltip("Contact-gated push toward the creature's move speed.")]
        public float assistGain = 6f;
        [Tooltip("How far below the torso centre the walk push is applied, so it pushes off the feet " +
                 "rather than the chest.")]
        public float pushOffset = 0.4f;

        [Header("Foot friction (stance grips, swing slips)")]
        [Tooltip("Friction of the planted leg — high so it grips the ground to push off / stand.")]
        public float stanceFriction = 1f;
        [Tooltip("Friction of the leg swinging forward")]
        public float swingFriction = 0.1f;

        [Header("Reach (a zombie aiming its arms at prey)")]
        [Tooltip("Degrees the two arms are splayed either side of the aim, so they do not stack into " +
                 "one silhouette. 0 = both arms exactly on the aim.")]
        public float armReachSpread = 8f;
        [Tooltip("Motor torque holding the arms out at the prey. Must beat the arm's own weight on " +
                 "its lever (mass * gravity * halfLength) or the reach sags short of the target.")]
        public float armReachStrength = 8f;
        [Tooltip("Degrees the arm overshoots and wobbles as it first comes up, before settling on " +
                 "target — the aim is not instant. 0 = snaps straight to the target.")]
        public float reachSway = 16f;
        [Tooltip("Wobbles per second while the aim is settling.")]
        public float reachSwaySpeed = 3f;
        [Tooltip("Seconds for that wobble to die away to a steady aim.")]
        public float reachSettle = 0.7f;
        [Tooltip("Degrees a WEAPON arm wanders either side of the aim. Far tighter than armCone: a " +
                 "zombie clawing at prey can flail, but a creature holding a gun has to hold it " +
                 "roughly where the Weapon Pose Editor shows it, or the shot never lines up.")]
        public float armAimCone = 5f;
        [Tooltip("Degrees each arm wanders either side of the aim, so the reach stays alive instead " +
                 "of frozen. 0 = rigid.")]
        public float armCone = 12f;
        [Tooltip("How fast the arms drift around the cone (higher = twitchier).")]
        public float armSwingSpeed = 1.3f;

        [Header("Idle arms")]
        [Tooltip("Gentle tone holding an undriven arm toward hanging, so it follows the body instead " +
                 "of flailing on momentum. Deliberately far too weak to HOLD the arm out — it only " +
                 "bleeds off swing — so the arms still sag and lag. 0 = fully limp (they will windmill, " +
                 "because the balancer rewrites the torso's rotation every step and whips the shoulder).")]
        public float armIdleTorque = 0.8f;
    }
}

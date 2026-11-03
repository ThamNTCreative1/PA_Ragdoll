using TMPro;
using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Tutorial after the player taps to play:
    //  1) Move: joystick hint;
    //     a jump hint shows once the player has moved and is never shown again after the first jump;
    //     after that first jump a "swipe to view" hint shows until the player swipes the camera,
    //     and only then the go-to hint + ground arrow to the monster area (past hole 2).
    //     The step ends when the bubble pickup appears (the player reached the monster area).
    //  2) Pickup: "grab the bubble" hint + ground arrow to the pickup, until the player has the shield.
    //  3) Aim: swipe hint until a monster (any distance) sits in the crosshair.
    //  4) If that monster is in freeze range -> Freeze hint until the first monster is frozen solid.
    //     If it is too far -> Closer: the joystick hint comes back with "GET CLOSER!" and the ground arrow points at it;
    //     once in range the tutorial goes back to Aim / Freeze.
    //  5) Reaim: if the player has never swiped to bring a monster into the crosshair (e.g. it was already in view),
    //     the aim hint keeps coming back whenever nothing is in the sights and the gun is idle,
    //     until they swipe onto a monster while it shows.
    // Hint objects are authored in the scene; this only turns them on/off and swaps the joystick hint's text.
    public sealed class TutorialController : MonoBehaviour
    {
        enum Step { Waiting, Move, Pickup, Aim, Closer, Freeze, Reaim, Done }

        public GameManager game;
        public PlayerController player;
        public FreezeGun gun;
        public ShieldManager shield;
        public GameObject moveHint;
        [Tooltip("Text inside the joystick hint; swapped to `closerText` during the Closer step.")]
        public TMP_Text moveHintText;
        public string closerText = "GET CLOSER!";
        public GameObject aimHint;
        public GameObject jumpHint;
        [Tooltip("Shown after the first jump until the player swipes the camera.")]
        public GameObject viewHint;
        [Tooltip("Swipe distance (in screen heights) that completes the view hint.")]
        public float viewSwipeAmount = 0.1f;
        [Tooltip("Shown once the jump and view hints are done.")]
        public GameObject goToHint;
        [Tooltip("Shown while the bubble pickup is waiting to be collected.")]
        public GameObject pickupHint;
        [Tooltip("Distance the player must move before the joystick hint is swapped for the go-to hint.")]
        public float movedThreshold = 0.5f;
        public GameObject freezeHint;
        [Tooltip("Entrance of the monster area (past hole 2). Only used without a ShieldManager: the move step ends once the player is past its Z.")]
        public Transform moveTarget;
        [Tooltip("Ground arrow at the player's feet and the marker at the destination.")]
        public GameObject groundArrow;
        public GameObject targetMarker;
        [Tooltip("Seconds a monster must stay in the crosshair to complete the aim step.")]
        public float aimHoldTime = 0.25f;
        [Tooltip("Freeze step: seconds off target before the aim hint comes back (while nothing has been frozen yet).")]
        public float lostAimGrace = 0.3f;
        [Tooltip("Swipe distance (in screen heights) while the aim hint shows that counts as swiping onto a monster.")]
        public float aimSwipeAmount = 0.03f;

        private Step step = Step.Waiting;
        private bool aimLearned;      // swiped a monster into the crosshair while the aim hint showed
        private float aimSwipeBase;   // camera swipe total when the aim hint last appeared
        private float lostTimer;
        private float aimTimer;
        private bool hasJumped;   // the jump hint goes away after the first jump
        private bool hasMoved;    // the joystick hint goes away once the player moves
        private Vector3 startPosition;
        private FreezableMonster focus;   // monster the player aimed at but is too far from
        private GroundArrow arrow;
        private string moveText;

        private void Awake()
        {
            if (groundArrow != null) arrow = groundArrow.GetComponent<GroundArrow>();
            if (moveHintText != null) moveText = moveHintText.text;
            Go(Step.Waiting);   // everything hidden until the player taps to play
        }

        private void OnEnable()
        {
            if (player != null) player.Jumped += OnJumped;
        }

        private void OnDisable()
        {
            if (player != null) player.Jumped -= OnJumped;
        }

        private void OnJumped()
        {
            hasJumped = true;
            if (jumpHint != null) jumpHint.SetActive(false);
            if (step == Step.Move) Go(Step.Move);
        }

        private float Swiped
        {
            get { return game != null && game.cameraController != null ? game.cameraController.SwipedAmount : 0f; }
        }

        private bool HasSwiped
        {
            get { return Swiped >= viewSwipeAmount; }
        }

        private bool SwipedSinceAimHint
        {
            get { return Swiped - aimSwipeBase >= aimSwipeAmount; }
        }

        private void Update()
        {
            if (game == null || player == null) return;
            if (game.CurrentState == GameManager.State.Won || game.CurrentState == GameManager.State.Lost) { Go(Step.Done); return; }
            if (game.CurrentState != GameManager.State.Playing) return;

            // First monster frozen (from any aiming step): done, or keep re-teaching aim if they never swiped to aim.
            if ((step == Step.Aim || step == Step.Closer || step == Step.Freeze) && game.FrozenCount > 0)
            {
                Go(aimLearned ? Step.Done : Step.Reaim);
                return;
            }

            switch (step)
            {
                case Step.Waiting:
                    startPosition = player.transform.position;
                    Go(Step.Move);
                    break;
                case Step.Move:
                    if (!hasMoved)
                    {
                        Vector3 m = player.transform.position - startPosition; m.y = 0f;
                        if (m.magnitude >= movedThreshold) { hasMoved = true; Go(Step.Move); }
                    }
                    if (viewHint != null && viewHint.activeSelf && HasSwiped) Go(Step.Move);
                    if (shield != null)
                    {
                        if (shield.PickupVisible || shield.Active) Go(Step.Pickup);
                    }
                    else if (moveTarget == null || player.transform.position.z >= moveTarget.position.z) Go(Step.Aim);
                    break;
                case Step.Pickup:
                    if (shield == null || shield.Active || !shield.PickupVisible) Go(Step.Aim);
                    break;
                case Step.Aim:
                    FreezableMonster aimed = gun != null ? gun.FindInSightsAnyRange() : null;
                    aimTimer = aimed != null ? aimTimer + Time.deltaTime : 0f;
                    if (aimTimer < aimHoldTime) break;
                    if (SwipedSinceAimHint) aimLearned = true;
                    if (gun.IsInRange(aimed)) Go(Step.Freeze);
                    else { focus = aimed; Go(Step.Closer); }
                    break;
                case Step.Closer:
                    if (focus == null || focus.IsFrozen) { Go(Step.Aim); break; }
                    if (gun.IsInRange(focus)) Go(gun.FindTarget() != null ? Step.Freeze : Step.Aim);
                    break;
                case Step.Freeze:
                    // Nothing frozen yet and the crosshair has left the monster: back to the aim hint.
                    bool onTarget = gun != null && (gun.CurrentTarget != null || gun.FindTarget() != null);
                    lostTimer = onTarget ? 0f : lostTimer + Time.deltaTime;
                    if (lostTimer >= lostAimGrace) Go(Step.Aim);
                    break;
                case Step.Reaim:
                    if (aimHint == null || gun == null) { Go(Step.Done); break; }
                    bool inSights = gun.CurrentTarget != null || gun.FindInSightsAnyRange() != null;
                    if (inSights && aimHint.activeSelf && SwipedSinceAimHint) { aimLearned = true; Go(Step.Done); break; }
                    // Hint while idle with nothing to shoot at; hidden while on a monster or firing.
                    bool show = !inSights && !gun.IsFiring;
                    if (show && !aimHint.activeSelf) { aimHint.SetActive(true); aimSwipeBase = Swiped; }
                    else if (!show && aimHint.activeSelf) aimHint.SetActive(false);
                    break;
            }
        }

        private void Go(Step next)
        {
            if (next != Step.Aim) aimTimer = 0f;
            if (next == Step.Aim && step != Step.Aim) aimSwipeBase = Swiped;
            lostTimer = 0f;
            step = next;
            bool moving = step == Step.Move, closer = step == Step.Closer, pickup = step == Step.Pickup;

            if (moveHint != null) moveHint.SetActive((moving && !hasMoved) || closer);
            if (moveHintText != null && moveText != null) moveHintText.text = closer ? closerText : moveText;
            bool viewDone = hasJumped && (viewHint == null || HasSwiped);
            if (goToHint != null) goToHint.SetActive(moving && hasMoved && viewDone);
            // Jump hint comes after the player has started moving, and never again once they have jumped.
            if (jumpHint != null) jumpHint.SetActive(moving && hasMoved && !hasJumped);
            if (viewHint != null) viewHint.SetActive(moving && hasMoved && hasJumped && !viewDone);
            if (pickupHint != null) pickupHint.SetActive(pickup);
            if (aimHint != null) aimHint.SetActive(step == Step.Aim);
            if (freezeHint != null) freezeHint.SetActive(step == Step.Freeze);

            // While heading to the monster area the arrow points straight ahead;
            // otherwise it points at the bubble pickup or the too-far monster.
            if (arrow != null)
            {
                Transform arrowTarget = pickup && shield != null ? shield.helmet : closer && focus != null ? focus.transform : null;
                arrow.pointStraight = arrowTarget == null;
                if (arrowTarget != null) arrow.target = arrowTarget;
            }
            if (groundArrow != null) groundArrow.SetActive((moving && hasMoved && viewDone) || closer || pickup);
            if (targetMarker != null) targetMarker.SetActive(moving);
        }
    }
}

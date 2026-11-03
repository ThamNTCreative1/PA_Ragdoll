using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Third-person runner on a CharacterController. Input comes from the on-screen joystick/buttons
    // (or KeyboardInput in the editor); movement is world-relative because the camera always looks +Z.
    [RequireComponent(typeof(CharacterController))]
    public sealed class PlayerController : MonoBehaviour
    {
        public Animator animator;
        [Tooltip("Movement is relative to this camera's facing (joystick up = away from the camera).")]
        public Transform cameraTransform;
        public float moveSpeed = 8.5f;
        public float turnSpeed = 900f;
        public float jumpVelocity = 8.5f;
        public float gravity = 24f;
        public float jumpBuffer = 0.15f;

        private CharacterController controller;
        private Vector2 moveInput;
        private float verticalVelocity;
        private float jumpRequest = -1f;
        private bool controllable;
        private float faceTimer;
        private Vector3 faceDirection;

        public bool Controllable { get { return controllable; } }
        public event System.Action Jumped;
        public bool IsGrounded { get { return controller != null && controller.isGrounded; } }

        private void Awake()
        {
            controller = GetComponent<CharacterController>();
            if (cameraTransform == null && Camera.main != null) cameraTransform = Camera.main.transform;
        }

        public void SetMoveInput([Bridge.Ref] Vector2 input)
        {
            moveInput = Vector2.ClampMagnitude(input, 1f);
        }

        public void Jump()
        {
            if (controllable) jumpRequest = jumpBuffer;
        }

        public void SetControllable(bool value)
        {
            controllable = value;
            if (!value) moveInput = Vector2.zero;
        }

        // Briefly overrides facing so the player turns toward what it shoots.
        public void FaceTowards(Vector3 point, float duration)
        {
            Vector3 d = point - transform.position;
            d.y = 0f;
            if (d.sqrMagnitude < 0.0001f) return;
            faceDirection = d.normalized;
            faceTimer = duration;
        }

        // Turn to face the point immediately (used when shooting) and hold that facing for `hold` seconds.
        public void SnapFacing(Vector3 point, float hold)
        {
            Vector3 d = point - transform.position;
            d.y = 0f;
            if (d.sqrMagnitude < 0.0001f) return;
            faceDirection = d.normalized;
            transform.rotation = Quaternion.LookRotation(faceDirection, Vector3.up);
            faceTimer = hold;
        }

        // knockedDown: play the Die animation (wave hit). Falling into a pit just keeps the Fall pose.
        public void Kill(bool knockedDown)
        {
            SetControllable(false);
            jumpRequest = -1f;
            if (animator != null)
            {
                // A Respawn trigger left over from a previous respawn would yank the player straight out of Die.
                animator.ResetTrigger("Respawn");
                animator.ResetTrigger("Jump");
                if (knockedDown) animator.SetTrigger("Die");
            }
        }

        // True once the Die state has actually been entered and played to its last frame.
        // (Right after Kill the Animator is still in the previous state, so "not in Die" must not count as finished.)
        public bool DownAnimationFinished
        {
            get
            {
                if (animator == null) return true;
                if (animator.IsInTransition(0)) return false;
                AnimatorStateInfo st = animator.GetCurrentAnimatorStateInfo(0);
                return st.IsName("Die") && st.normalizedTime >= 1f;
            }
        }

        public void Respawn([Bridge.Ref] Vector3 position, [Bridge.Ref] Quaternion rotation)
        {
            controller.enabled = false;
            transform.position = position;
            transform.rotation = rotation;
            controller.enabled = true;
            verticalVelocity = 0f;
            faceTimer = 0f;
            if (animator != null)
            {
                animator.ResetTrigger("Die");
                animator.ResetTrigger("Jump");
                animator.SetTrigger("Respawn");
            }
            SetControllable(true);
        }

        private void Update()
        {
            float dt = Time.deltaTime;
            Vector3 move = Vector3.zero;
            if (controllable)
            {
                Vector3 fwd = Vector3.forward, right = Vector3.right;
                if (cameraTransform != null)
                {
                    fwd = cameraTransform.forward; fwd.y = 0f;
                    if (fwd.sqrMagnitude < 0.001f) fwd = Vector3.forward;
                    fwd.Normalize();
                    right = new Vector3(fwd.z, 0f, -fwd.x);
                }
                move = fwd * moveInput.y + right * moveInput.x;
            }

            bool grounded = controller.isGrounded;
            if (grounded && verticalVelocity < 0f) verticalVelocity = -2f;
            if (jumpRequest > 0f)
            {
                if (grounded && controllable)
                {
                    verticalVelocity = jumpVelocity;
                    if (Jumped != null) Jumped();
                    jumpRequest = -1f;
                    if (animator != null) animator.SetTrigger("Jump");
                }
                else jumpRequest -= dt;
            }
            verticalVelocity -= gravity * dt;

            Vector3 velocity = move * moveSpeed;
            velocity.y = verticalVelocity;
            controller.Move(velocity * dt);

            Vector3 look = Vector3.zero;
            if (faceTimer > 0f) { faceTimer -= dt; look = faceDirection; }
            else if (move.sqrMagnitude > 0.01f) look = move.normalized;
            if (look != Vector3.zero)
            {
                Quaternion target = Quaternion.LookRotation(look, Vector3.up);
                transform.rotation = Quaternion.RotateTowards(transform.rotation, target, turnSpeed * dt);
            }

            if (animator != null)
            {
                animator.SetFloat("Speed", move.magnitude * moveSpeed);
                animator.SetBool("Grounded", controller.isGrounded);
            }
        }
    }
}

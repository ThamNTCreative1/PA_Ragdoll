using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Rig: CameraManager (this, follows `followTarget`) -> Yaw -> Pitch -> Camera (at `offset` in Pitch space).
    // Swipe input orbits Yaw/Pitch within limits; the camera pulls in when a wall/monster blocks the view.
    // Portrait and landscape use their own offset and FOV.
    public sealed class CameraController : MonoBehaviour
    {
        [Header("Rig")]
        public Transform followTarget;   // "CameraFollow" child of the Player
        public Transform yawPivot;
        public Transform pitchPivot;
        public Camera cam;

        [Header("Follow")]
        public float followSharpness = 10f;
        public float snapDistance = 12f;

        [Header("Offset (camera position inside Pitch)")]
        public Vector3 landscapeOffset = new Vector3(1f, 1.1f, -8f);   // x > 0: over the right shoulder so the player does not cover the crosshair
        public Vector3 portraitOffset = new Vector3(0.8f, 1.8f, -11f);
        public float landscapeFov = 55f;
        public float portraitFov = 68f;

        [Header("Rotation")]
        [Tooltip("Degrees of yaw for a swipe across the full screen height.")]
        public float yawSensitivity = 220f;
        [Tooltip("Degrees of pitch for a swipe across the full screen height.")]
        public float pitchSensitivity = 90f;
        public float rotationSharpness = 18f;
        public float defaultYaw = 0f;
        public float defaultPitch = 8f;

        [Header("Limits (a yaw range of 360 or more means free rotation)")]
        public float minYaw = -180f;
        public float maxYaw = 180f;
        public float minPitch = -10f;
        public float maxPitch = 50f;

        [Header("Collision")]
        [Tooltip("What blocks the camera. The player sits on Ignore Raycast so it never blocks itself.")]
        public LayerMask collisionMask = Physics.DefaultRaycastLayers;
        public float collisionPadding = 0.3f;
        public float minDistance = 0.8f;

        [Header("Shake")]
        public float shakeDecay = 6f;

        private float yaw, pitch;             // requested by input
        private float smoothYaw, smoothPitch; // applied to the rig
        private Vector2 shake;

        public Transform YawPivot { get { return yawPivot; } }
        // Total swipe distance so far, in screen heights.
        public float SwipedAmount { get; private set; }

        private void Awake()
        {
            ResetView();
        }

        // Swipe input in screen pixels; converted to degrees by the sensitivities.
        public void Rotate(Vector2 screenDelta)
        {
            float h = Mathf.Max(Screen.height, 1);
            yaw += screenDelta.x / h * yawSensitivity;
            pitch -= screenDelta.y / h * pitchSensitivity;
            SwipedAmount += screenDelta.magnitude / h;
            ClampAngles();
        }

        // Back to the default behind-the-player view (used on respawn).
        public void ResetView()
        {
            yaw = smoothYaw = defaultYaw;
            pitch = smoothPitch = defaultPitch;
            ClampAngles();
            smoothYaw = yaw; smoothPitch = pitch;
        }

        // Request a camera rumble (metres, X = left/right, Y = up/down); the strongest request per axis wins and fades out.
        public void Shake(Vector2 amount)
        {
            shake = Vector2.Max(shake, amount);
        }

        private void ClampAngles()
        {
            if (maxYaw - minYaw < 360f) yaw = Mathf.Clamp(yaw, minYaw, maxYaw);
            pitch = Mathf.Clamp(pitch, minPitch, maxPitch);
        }

        private void LateUpdate()
        {
            if (followTarget == null || yawPivot == null || pitchPivot == null || cam == null) return;
            float dt = Time.deltaTime;

            // Follow
            Vector3 target = followTarget.position;
            if ((transform.position - target).sqrMagnitude > snapDistance * snapDistance) transform.position = target;
            else transform.position = Vector3.Lerp(transform.position, target, 1f - Mathf.Exp(-followSharpness * dt));

            // Orbit
            float k = 1f - Mathf.Exp(-rotationSharpness * dt);
            smoothYaw = Mathf.LerpAngle(smoothYaw, yaw, k);
            smoothPitch = Mathf.Lerp(smoothPitch, pitch, k);
            yawPivot.localRotation = Quaternion.Euler(0f, smoothYaw, 0f);
            pitchPivot.localRotation = Quaternion.Euler(smoothPitch, 0f, 0f);

            // Offset + FOV per orientation
            bool portrait = Screen.height > Screen.width;
            Vector3 offset = portrait ? portraitOffset : landscapeOffset;
            cam.fieldOfView = portrait ? portraitFov : landscapeFov;

            // Pull in along the offset when something is between the pivot and the camera.
            Vector3 pivot = pitchPivot.position;
            Vector3 desired = pitchPivot.TransformPoint(offset);
            Vector3 toCam = desired - pivot;
            float dist = toCam.magnitude;
            float scale = 1f;
            RaycastHit hit;
            if (dist > 0.01f && Physics.Raycast(pivot, toCam / dist, out hit, dist, collisionMask, QueryTriggerInteraction.Ignore))
                scale = Mathf.Max(hit.distance - collisionPadding, minDistance) / dist;
            Vector3 local = offset * scale;

            // Shake in camera space (X = screen left/right, Y = screen up/down).
            if (shake.x > 0.001f || shake.y > 0.001f)
            {
                float t = Time.time * 22f;
                local += new Vector3(Mathf.Sin(t * 1.3f) * shake.x, Mathf.Sin(t * 1.7f + 1f) * shake.y, 0f);
                shake = Vector2.MoveTowards(shake, Vector2.zero, shakeDecay * dt);
            }
            cam.transform.localPosition = local;
            cam.transform.localRotation = Quaternion.identity;
        }
    }
}

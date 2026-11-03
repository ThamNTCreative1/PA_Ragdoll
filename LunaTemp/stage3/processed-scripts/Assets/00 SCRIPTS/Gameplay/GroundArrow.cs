using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Tutorial effect: an arrow on the ground at the player's feet pointing toward `target`, with a gentle bob/pulse.
    public sealed class GroundArrow : MonoBehaviour
    {
        public Transform player;
        public Transform target;
        [Tooltip("Point along a fixed world direction instead of at the target (e.g. straight toward the monster area).")]
        public bool pointStraight;
        public Vector3 straightDirection = Vector3.forward;
        [Tooltip("How far in front of the player's feet the arrow sits.")]
        public float offset = 1.1f;
        public float height = 0.05f;
        public float pulseSpeed = 4f;
        public float pulseAmount = 0.35f;

        private void LateUpdate()
        {
            if (player == null || (target == null && !pointStraight)) return;
            Vector3 dir = pointStraight ? straightDirection : target.position - player.position; dir.y = 0f;
            if (dir.sqrMagnitude < 0.0001f) return;
            dir.Normalize();
            float push = (Mathf.Sin(Time.time * pulseSpeed) * 0.5f + 0.5f) * pulseAmount;
            transform.position = new Vector3(player.position.x, player.position.y + height, player.position.z) + dir * (offset + push);
            transform.rotation = Quaternion.LookRotation(dir, Vector3.up);
        }
    }
}

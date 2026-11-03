using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Hold-to-fire freeze beam. While firing, the beam runs from the muzzle along the barrel to the crosshair
    // (screen centre). The unfrozen monster closest to the crosshair (within `aimAssistAngle` and `range`)
    // freezes gradually; the further away it is, the slower it freezes (nearRate..farRate percent per second).
    public sealed class FreezeGun : MonoBehaviour
    {
        public PlayerController player;
        public Animator animator;
        public Transform muzzle;
        public Transform beam;
        public GameManager game;
        [Tooltip("Camera whose screen centre is the crosshair. Defaults to Camera.main.")]
        public Camera aimCamera;
        [Tooltip("How far (degrees) from the crosshair a monster can be and still count as aimed at.")]
        public float aimAssistAngle = 6f;
        [Tooltip("Keep the current target while it stays within this multiple of the assist angle.")]
        public float stickiness = 1.6f;
        public float range = 26f;
        [Header("Freeze speed by distance (percent per second)")]
        [Tooltip("Freeze speed at or closer than `nearDistance`.")]
        public float nearRate = 120f;
        [Tooltip("Freeze speed at `range` (the furthest a monster can be hit).")]
        public float farRate = 25f;
        public float nearDistance = 5f;
        public float beamWidth = 0.3f;

        [Header("Aim pose (applied after animation while shooting)")]
        [Tooltip("The gun model under the hand bone; its +Z is the barrel.")]
        public Transform gunModel;
        [Tooltip("Chest/spine bone turned part of the way toward the target so the pose reads naturally.")]
        public Transform spine;
        [Range(0f, 1f)] public float spineWeight = 0.5f;
        public float aimInSpeed = 12f;
        public float aimOutSpeed = 6f;

        private FreezableMonster[] targets = new FreezableMonster[0];
        private bool trigger;          // button held
        private bool firing;           // trigger && player can act
        private FreezableMonster current;
        private Vector3 aimPoint;
        private float aimWeight;
        private Quaternion gunRestLocal = Quaternion.identity;

        public event System.Action Fired;   // once when a burst starts
        public event System.Action<FreezableMonster> MonsterFrozen;   // when a monster freezes solid
        public bool IsFiring { get { return firing; } }
        public FreezableMonster CurrentTarget { get { return firing ? current : null; } }

        // Freeze speed (percent per second) against a monster: drops linearly from nearRate to farRate with distance.
        public float RateFor(FreezableMonster m)
        {
            if (m == null || player == null) return 0f;
            Vector3 d = m.AimPosition - player.transform.position; d.y = 0f;
            float t = Mathf.InverseLerp(nearDistance, range, d.magnitude);
            return Mathf.Lerp(nearRate, farRate, t);
        }

        public void SetTargets(FreezableMonster[] monsters)
        {
            targets = monsters;
        }

        private void Awake()
        {
            if (aimCamera == null) aimCamera = Camera.main;
            if (gunModel != null) gunRestLocal = gunModel.localRotation;
            if (beam != null) beam.gameObject.SetActive(false);
        }

        // Hold / release from the FREEZE button (or keyboard in the editor).
        public void SetTrigger(bool held)
        {
            trigger = held;
        }

        private void Update()
        {
            bool canFire = trigger && player != null && player.Controllable;
            if (canFire && !firing && Fired != null) Fired();
            firing = canFire;
            if (animator != null) animator.SetBool("Firing", firing);
            if (!firing) { current = null; return; }

            current = FindTarget(current);
            aimPoint = current != null ? current.AimPosition : CrosshairPoint();
            player.SnapFacing(aimPoint, 0.25f);
            if (current != null && current.AddFreeze(RateFor(current) * 0.01f * Time.deltaTime))
            {
                if (MonsterFrozen != null) MonsterFrozen(current);
                if (game != null) game.OnMonsterFrozen();
                current = null;
            }
        }

        // The monster the crosshair is on (null if none). `keep` stays selected while still roughly in the sights.
        public FreezableMonster FindTarget(FreezableMonster keep = null)
        {
            if (aimCamera == null) return FindNearest();
            Transform cam = aimCamera.transform;
            Vector3 p = player.transform.position;
            if (keep != null && !keep.IsFrozen && InRange(keep, p) && Vector3.Angle(cam.forward, keep.AimPosition - cam.position) < aimAssistAngle * stickiness)
                return keep;
            FreezableMonster best = null;
            float bestAngle = aimAssistAngle;
            for (int i = 0; i < targets.Length; i++)
            {
                FreezableMonster m = targets[i];
                if (m == null || m.IsFrozen || !InRange(m, p)) continue;
                float angle = Vector3.Angle(cam.forward, m.AimPosition - cam.position);
                if (angle < bestAngle) { bestAngle = angle; best = m; }
            }
            return best;
        }

        // An already-frozen monster under the crosshair (same assist angle and range as targeting), or null.
        public FreezableMonster FindFrozenInSights()
        {
            if (aimCamera == null || player == null) return null;
            Transform cam = aimCamera.transform;
            Vector3 p = player.transform.position;
            FreezableMonster best = null;
            float bestAngle = aimAssistAngle;
            for (int i = 0; i < targets.Length; i++)
            {
                FreezableMonster m = targets[i];
                if (m == null || !m.IsFrozen || !InRange(m, p)) continue;
                float angle = Vector3.Angle(cam.forward, m.AimPosition - cam.position);
                if (angle < bestAngle) { bestAngle = angle; best = m; }
            }
            return best;
        }

        // The unfrozen monster under the crosshair regardless of distance (used by the tutorial to tell "too far").
        public FreezableMonster FindInSightsAnyRange()
        {
            if (aimCamera == null) return null;
            Transform cam = aimCamera.transform;
            FreezableMonster best = null;
            float bestAngle = aimAssistAngle;
            for (int i = 0; i < targets.Length; i++)
            {
                FreezableMonster m = targets[i];
                if (m == null || m.IsFrozen) continue;
                float angle = Vector3.Angle(cam.forward, m.AimPosition - cam.position);
                if (angle < bestAngle) { bestAngle = angle; best = m; }
            }
            return best;
        }

        public bool IsInRange(FreezableMonster m)
        {
            return m != null && player != null && InRange(m, player.transform.position);
        }

        private bool InRange(FreezableMonster m, Vector3 p)
        {
            Vector3 flat = m.AimPosition - p; flat.y = 0f;
            return flat.sqrMagnitude <= range * range;
        }

        // Where the crosshair ray lands within range (first solid hit, else the far end).
        private Vector3 CrosshairPoint()
        {
            if (aimCamera == null) return muzzle.position + player.transform.forward * (range * 0.4f);
            Ray ray = new Ray(aimCamera.transform.position, aimCamera.transform.forward);
            float maxDist = range + Vector3.Distance(aimCamera.transform.position, player.transform.position);
            RaycastHit hit;
            if (Physics.Raycast(ray, out hit, maxDist, Physics.DefaultRaycastLayers, QueryTriggerInteraction.Ignore)) return hit.point;
            return ray.GetPoint(maxDist);
        }

        private FreezableMonster FindNearest()
        {
            FreezableMonster best = null;
            float bestDist = range * range;
            Vector3 p = player.transform.position;
            for (int i = 0; i < targets.Length; i++)
            {
                FreezableMonster m = targets[i];
                if (m == null || m.IsFrozen) continue;
                Vector3 d = m.AimPosition - p;
                d.y = 0f;
                float dist = d.sqrMagnitude;
                if (dist < bestDist) { bestDist = dist; best = m; }
            }
            return best;
        }

        private void LateUpdate()
        {
            float dt = Time.deltaTime;
            aimWeight = Mathf.MoveTowards(aimWeight, firing ? 1f : 0f, dt * (firing ? aimInSpeed : aimOutSpeed));
            ApplyAimPose();
            UpdateBeam();
        }

        // Runs after the Animator has posed the skeleton: turn the chest part-way, then point the barrel at the aim point.
        private void ApplyAimPose()
        {
            if (gunModel == null) return;
            gunModel.localRotation = gunRestLocal;
            if (aimWeight <= 0.001f) return;
            if (spine != null)
            {
                Quaternion turn = Quaternion.FromToRotation(gunModel.forward, aimPoint - gunModel.position);
                spine.rotation = Quaternion.Slerp(Quaternion.identity, turn, spineWeight * aimWeight) * spine.rotation;
            }
            Vector3 want = aimPoint - gunModel.position;
            if (want.sqrMagnitude < 0.0001f) return;
            gunModel.rotation = Quaternion.Slerp(gunModel.rotation, Quaternion.LookRotation(want, Vector3.up), aimWeight);
        }

        // The beam leaves the muzzle along the barrel and runs out to the aim point.
        private void UpdateBeam()
        {
            if (beam == null) return;
            bool show = firing && aimWeight > 0.5f;
            if (beam.gameObject.activeSelf != show) beam.gameObject.SetActive(show);
            if (!show) return;
            Vector3 start = muzzle.position;
            Vector3 dir = gunModel != null ? gunModel.forward : (aimPoint - start).normalized;
            float length = Vector3.Dot(aimPoint - start, dir);
            if (length < 0.01f) { beam.gameObject.SetActive(false); return; }
            beam.position = start;
            beam.rotation = Quaternion.LookRotation(dir, Vector3.up);
            float w = beamWidth * (0.85f + 0.15f * Mathf.Sin(Time.time * 47f)) * (current != null ? 1.15f : 1f);
            beam.localScale = new Vector3(w, w, length);
        }
    }
}

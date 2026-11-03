using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Tsunami cycle ported from TEGame's Tsunami: hidden below the floor -> wait -> rise -> hold (warning)
    // -> sweep along Z to the first hole -> drop back below and wait for the next one.
    // Hits are checked by distance (not physics triggers) so a moving wall works against a CharacterController.
    public sealed class WaveHazard : MonoBehaviour
    {
        enum Phase { Idle, DelayBefore, Rising, DelayAfter, Sweeping, Pause }

        public Transform startPoint;
        public Transform endPoint;
        public float hiddenDepth = 16f;
        public float delayBefore = 1f;
        public float riseDuration = 1f;
        public float delayAfter = 2.5f;
        public float speed = 10f;
        public float pauseBetween = 1.5f;
        [Header("Hit volume (relative to this transform)")]
        public float hitMinZ = -1f;
        public float hitMaxZ = 1f;
        public float hitHeight = 12f;
        public float playerRadius = 0.35f;
        [Header("Feel")]
        public ParticleSystem[] effects = new ParticleSystem[0];
        public float shakeRange = 30f;
        [Tooltip("Max camera shake in metres: X = left/right, Y = up/down.")]
        public Vector2 shakeStrength = new Vector2(0.1f, 0.1f);

        [Header("Warning")]
        [Tooltip("RiseWarning fires this many seconds before the wave starts rising (or as early as the cycle allows).")]
        public float riseWarningLead = 3f;

        // Fired once per wave, `riseWarningLead` seconds before it rises. The argument is the wave number (0 = first).
        public event System.Action<int> RiseWarning;
        // Fired when a wave finishes its sweep and sinks.
        public event System.Action WaveEnded;

        private PlayerController player;
        private GameManager game;
        private CameraController cameraController;
        private Phase phase = Phase.Idle;
        private float timer;
        private Vector3 risenPosition;
        private int waveIndex;
        private bool warned;
        private bool held;   // risen wave waits here until Release()

        private void Awake()
        {
            Hide();
        }

        // holdFirstWave: the first wave rises straight away (RiseWarning(0) fires now) and stays up, not sweeping,
        // until Release() is called. After that the normal cycle runs.
        public void Begin(GameManager owner, PlayerController target, bool holdFirstWave = false)
        {
            game = owner;
            player = target;
            waveIndex = 0;
            warned = false;
            held = holdFirstWave;
            Camera cam = Camera.main;
            cameraController = cam != null ? cam.GetComponentInParent<CameraController>() : null;
            if (held)
            {
                Hide();
                StartRise();
                if (RiseWarning != null) RiseWarning(waveIndex);
            }
            else StartCycle();
        }

        // Lets a held wave start its sweep.
        public void Release()
        {
            held = false;
        }

        public void Stop()
        {
            phase = Phase.Idle;
            SetEffects(false);
        }

        private void Hide()
        {
            if (startPoint != null) transform.position = startPoint.position - Vector3.up * hiddenDepth;
            SetEffects(false);
        }

        private void SetEffects(bool on)
        {
            for (int i = 0; i < effects.Length; i++)
            {
                if (effects[i] == null) continue;
                if (on) effects[i].Play();
                else effects[i].Stop(true, ParticleSystemStopBehavior.StopEmitting);
            }
        }

        private void StartCycle()
        {
            Hide();
            phase = Phase.DelayBefore;
            timer = delayBefore;
        }

        private void StartRise()
        {
            phase = Phase.Rising;
            timer = 0f;
            SetEffects(true);
            warned = false;
        }

        private void Update()
        {
            if (phase == Phase.Idle || startPoint == null || endPoint == null) return;
            float dt = Time.deltaTime;

            // Warn ahead of the next rise (time left = rest of the pause + the pre-rise delay).
            if (!warned && (phase == Phase.DelayBefore || phase == Phase.Pause))
            {
                float untilRise = phase == Phase.DelayBefore ? timer : timer + delayBefore;
                if (untilRise <= riseWarningLead) { warned = true; if (RiseWarning != null) RiseWarning(waveIndex); }
            }

            switch (phase)
            {
                case Phase.DelayBefore:
                    timer -= dt;
                    if (timer <= 0f) StartRise();
                    break;
                case Phase.Rising:
                    timer += dt;
                    float t = Mathf.Clamp01(timer / riseDuration);
                    transform.position = startPoint.position - Vector3.up * (hiddenDepth * (1f - t));
                    if (t >= 1f) { phase = Phase.DelayAfter; timer = delayAfter; risenPosition = transform.position; }
                    break;
                case Phase.DelayAfter:
                    timer -= dt;
                    if (timer <= 0f && !held) phase = Phase.Sweeping;
                    break;
                case Phase.Sweeping:
                    float z = Mathf.MoveTowards(transform.position.z, endPoint.position.z, speed * dt);
                    transform.position = new Vector3(risenPosition.x, risenPosition.y, z);
                    if (Mathf.Approximately(z, endPoint.position.z))
                    {
                        Hide(); phase = Phase.Pause; timer = pauseBetween; waveIndex++;
                        if (WaveEnded != null) WaveEnded();
                    }
                    break;
                case Phase.Pause:
                    timer -= dt;
                    if (timer <= 0f) StartCycle();
                    break;
            }

            if ((phase == Phase.DelayAfter || phase == Phase.Sweeping) && player != null && player.Controllable) CheckHit();
            if (phase == Phase.Rising || phase == Phase.Sweeping) Shake();
        }

        // Rumble the camera as the wave gets close (and while it rises).
        private void Shake()
        {
            if (cameraController == null || player == null) return;
            float dist = Mathf.Abs(player.transform.position.z - transform.position.z);
            float k = Mathf.Clamp01(1f - dist / shakeRange);
            if (phase == Phase.Rising) k = Mathf.Max(k, 0.25f);
            if (k > 0f) cameraController.Shake(shakeStrength * k);
        }

        private void CheckHit()
        {
            Vector3 p = player.transform.position;
            float dz = p.z - transform.position.z;
            float feet = p.y - transform.position.y;
            if (dz > hitMinZ - playerRadius && dz < hitMaxZ + playerRadius && feet < hitHeight && feet > -2f) game.PlayerHit();
        }
    }
}

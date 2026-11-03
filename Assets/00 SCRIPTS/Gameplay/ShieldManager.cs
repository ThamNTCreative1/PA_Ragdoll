using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Swim-ring power-up (fields still named "helmet"): `riseWarningLead` seconds before each wave rises,
    // the pickup spawns in front of the player.
    // Picking it up gives a shield (bubble around the player) that ignores wave hits; the shield pops when that wave ends.
    // The first wave (held by WaveHazard) only starts sweeping once the pickup has been collected.
    public sealed class ShieldManager : MonoBehaviour
    {
        public WaveHazard wave;
        public PlayerController player;

        [Header("Swim ring pickup (scene object, moved and toggled here)")]
        public Transform helmet;
        public Transform helmetVisual;
        [Tooltip("How far in front of the player the helmet spawns.")]
        [SerializeField] private float spawnDistance = 6f;
        [SerializeField] private float collectRadius = 1.4f;
        public float bobHeight = 0.25f;
        public float spinSpeed = 120f;

        [Header("Bubble (scene object that follows the player)")]
        public Transform bubble;
        public Renderer bubbleRenderer;
        public ParticleSystem popEffect;
        public Vector3 bubbleOffset = new Vector3(0f, 0.9f, 0f);
        public float popTime = 0.25f;
        public float appearTime = 0.2f;

        public bool Active { get; private set; }
        public bool PickupVisible { get { return helmet != null && helmet.gameObject.activeSelf; } }

        private Vector3 bubbleScale = Vector3.one;
        private float anim = -1f;   // >=0 while appearing (Active) or popping (!Active)
        private Material bubbleMat;
        private float baseAlpha = 1f;

        private void Awake()
        {
            if (bubble != null) bubbleScale = bubble.localScale;
            if (bubbleRenderer != null)
            {
                bubbleMat = bubbleRenderer.material;
                if (bubbleMat.HasProperty("_Alpha")) baseAlpha = bubbleMat.GetFloat("_Alpha");
            }
            if (helmet != null) helmet.gameObject.SetActive(false);
            if (bubble != null) bubble.gameObject.SetActive(false);
        }

        private void OnEnable()
        {
            if (wave != null) { wave.RiseWarning += OnRiseWarning; wave.WaveEnded += OnWaveEnded; }
        }

        private void OnDisable()
        {
            if (wave != null) { wave.RiseWarning -= OnRiseWarning; wave.WaveEnded -= OnWaveEnded; }
        }

        private void OnRiseWarning(int waveNumber)
        {
            if (!Active) SpawnHelmet();
        }

        private void OnWaveEnded()
        {
            if (helmet != null) helmet.gameObject.SetActive(false);
            if (Active) PopShield();
        }

        private void SpawnHelmet()
        {
            if (helmet == null || player == null) return;
            helmet.position = FindSpawnPoint();
            helmet.gameObject.SetActive(true);
        }

        // In front of the player on solid ground, pulled closer if a wall or a pit is in the way.
        private Vector3 FindSpawnPoint()
        {
            Vector3 origin = player.transform.position;
            Vector3 dir = player.transform.forward; dir.y = 0f;
            if (dir.sqrMagnitude < 0.001f) dir = Vector3.forward;
            dir.Normalize();

            float reach = spawnDistance;
            RaycastHit hit;
            if (Physics.Raycast(origin + Vector3.up, dir, out hit, spawnDistance, Physics.DefaultRaycastLayers, QueryTriggerInteraction.Ignore))
                reach = Mathf.Max(0f, hit.distance - 1f);

            for (int i = 0; i < 4; i++)
            {
                Vector3 p = origin + dir * (reach * (1f - i * 0.25f));
                if (Physics.Raycast(p + Vector3.up * 5f, Vector3.down, out hit, 8f, Physics.DefaultRaycastLayers, QueryTriggerInteraction.Ignore) && hit.point.y > -0.5f)
                    return new Vector3(p.x, hit.point.y, p.z);
            }
            return new Vector3(origin.x, Mathf.Max(origin.y, 0f), origin.z);
        }

        private void GiveShield()
        {
            Active = true;
            anim = 0f;
            if (helmet != null) helmet.gameObject.SetActive(false);
            if (bubble != null) bubble.gameObject.SetActive(true);
            SetBubble(0f, 1f);
            if (wave != null) wave.Release();
        }

        private void PopShield()
        {
            Active = false;
            anim = 0f;
            if (popEffect != null && bubble != null) { popEffect.transform.position = bubble.position; popEffect.Play(); }
        }

        private void Update()
        {
            float dt = Time.deltaTime;

            if (helmet != null && helmet.gameObject.activeSelf)
            {
                if (helmetVisual != null)
                {
                    helmetVisual.localPosition = Vector3.up * (0.6f + Mathf.Sin(Time.time * 3f) * bobHeight);
                    helmetVisual.Rotate(0f, spinSpeed * dt, 0f, Space.World);
                }
                if (player != null)
                {
                    Vector3 d = player.transform.position - helmet.position; d.y = 0f;
                    if (d.magnitude <= collectRadius) GiveShield();
                }
            }

            if (bubble == null || !bubble.gameObject.activeSelf) return;
            if (player != null) bubble.position = player.transform.position + bubbleOffset;

            if (anim < 0f) { SetBubble(1f + Mathf.Sin(Time.time * 4f) * 0.03f, 1f); return; }
            anim += dt;
            if (Active)
            {
                // Pop in with a little overshoot.
                float t = Mathf.Clamp01(anim / appearTime);
                SetBubble(t < 1f ? Mathf.Lerp(0.3f, 1.08f, t) : 1f, t);
                if (t >= 1f) anim = -1f;
            }
            else
            {
                // Burst: swell and fade out.
                float t = Mathf.Clamp01(anim / popTime);
                SetBubble(Mathf.Lerp(1f, 1.45f, t), 1f - t);
                if (t >= 1f) { anim = -1f; bubble.gameObject.SetActive(false); }
            }
        }

        private void SetBubble(float scale, float alpha01)
        {
            if (bubble != null) bubble.localScale = bubbleScale * scale;
            if (bubbleMat != null && bubbleMat.HasProperty("_Alpha")) bubbleMat.SetFloat("_Alpha", baseAlpha * alpha01);
        }
    }
}

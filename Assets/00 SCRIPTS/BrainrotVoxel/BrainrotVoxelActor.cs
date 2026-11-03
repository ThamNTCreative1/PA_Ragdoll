using UnityEngine;

namespace OBP.BrainrotVoxel
{
    // A lightweight idle pose for stationary targets. No Animator or skeleton required.
    public sealed class BrainrotVoxelActor : MonoBehaviour
    {
        public Transform visual;
        public MeshRenderer bodyRenderer;
        public GameObject frost;
        public Material normalMaterial;
        public Material frozenMaterial;
        public bool idle = true;
        [Range(0f, 4f)] public float swayDegrees = 1.4f;
        [Range(0f, 0.1f)] public float breatheAmount = 0.012f;
        public float idleSpeed = 1.6f;
        [SerializeField] private bool frozen;
        private Quaternion restRotation;
        private Vector3 restScale;
        private float phase;
        private bool initialized;
        public bool IsFrozen { get { return frozen; } }

        private void Awake() { Initialize(); ApplyState(); }

        private void Initialize()
        {
            if (initialized || visual == null) return;
            restRotation = visual.localRotation;
            restScale = visual.localScale;
            phase = (Mathf.Abs(transform.position.x * 1.73f + transform.position.z * 2.31f)) % 6.28f;
            initialized = true;
        }

        private void Update()
        {
            if (!initialized || frozen || !idle) return;
            float t = Time.time * idleSpeed + phase;
            visual.localRotation = restRotation * Quaternion.Euler(0, 0, Mathf.Sin(t) * swayDegrees);
            visual.localScale = Vector3.Scale(restScale, new Vector3(1, 1 + Mathf.Sin(t * 1.3f) * breatheAmount, 1));
        }

        public void SetFrozen(bool value)
        {
            Initialize();
            frozen = value;
            if (initialized) { visual.localRotation = restRotation; visual.localScale = restScale; }
            ApplyState();
        }

        private void ApplyState()
        {
            if (bodyRenderer != null) bodyRenderer.sharedMaterial = frozen ? frozenMaterial : normalMaterial;
            if (frost != null) frost.SetActive(frozen);
        }

        [ContextMenu("Freeze")] private void Freeze() { SetFrozen(true); }
        [ContextMenu("Thaw")] private void Thaw() { SetFrozen(false); }
        private void OnDisable()
        {
            if (!initialized || visual == null) return;
            visual.localRotation = restRotation;
            visual.localScale = restScale;
        }
    }
}

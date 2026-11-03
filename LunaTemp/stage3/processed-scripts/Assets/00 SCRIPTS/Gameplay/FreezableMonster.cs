using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // A stationary brainrot target that freezes gradually while the freeze beam is held on it:
    // the ice block grows from the feet up and the idle animation slows. At 100% it is frozen solid
    // (icy materials, animation stopped). Partial ice stays where it is when the beam leaves (no melting by default).
    public sealed class FreezableMonster : MonoBehaviour
    {
        public Animator animator;
        public Renderer[] renderers;
        public Material[] normalMaterials;
        public Material[] frozenMaterials;
        [Tooltip("Ice block renderer using OBP/IceBlock; its _Fill drives the bottom-up growth.")]
        public Renderer iceRenderer;
        public Transform aimPoint;
        [Tooltip("Reward in thousands of dollars shown when frozen (420 = $420K).")]
        public int priceK = 100;
        [Tooltip("How fast partial ice melts once the beam leaves (fraction per second). 0 = ice never melts.")]
        public float meltPerSecond = 0f;
        public float meltDelay = 0.15f;
        public float popTime = 0.25f;

        private float progress;
        private bool frozen;
        private float lastHitTime = -10f;
        private float popTimer = -1f;
        private Material iceMaterial;

        public bool IsFrozen { get { return frozen; } }
        public float Progress { get { return progress; } }
        public Vector3 AimPosition { get { return aimPoint != null ? aimPoint.position : transform.position; } }
        public string PriceText { get { return "$" + priceK + "K"; } }

        private void Awake()
        {
            if (iceRenderer != null) iceMaterial = iceRenderer.material; // per-monster instance for _Fill
            Apply();
        }

        // Called every frame the beam is on this monster. Returns true on the frame it becomes fully frozen.
        public bool AddFreeze(float amount)
        {
            if (frozen) return false;
            lastHitTime = Time.time;
            progress = Mathf.Clamp01(progress + amount);
            if (progress >= 1f) { SetFrozen(true); return true; }
            Apply();
            return false;
        }

        public void SetFrozen(bool value)
        {
            frozen = value;
            progress = value ? 1f : 0f;
            popTimer = value ? 0f : -1f;
            Apply();
        }

        private void Update()
        {
            if (meltPerSecond > 0f && !frozen && progress > 0f && Time.time - lastHitTime > meltDelay)
            {
                progress = Mathf.Max(0f, progress - meltPerSecond * Time.deltaTime);
                Apply();
            }
            if (popTimer >= 0f && iceRenderer != null)
            {
                // Small crunch as the block locks solid.
                popTimer += Time.deltaTime;
                float t = Mathf.Clamp01(popTimer / popTime);
                float s = 1f + Mathf.Sin(t * Mathf.PI) * 0.06f;
                iceRenderer.transform.localScale = new Vector3(s, 1f, s);
                if (t >= 1f) { popTimer = -1f; iceRenderer.transform.localScale = Vector3.one; }
            }
        }

        private void Apply()
        {
            if (animator != null) animator.speed = frozen ? 0f : 1f - progress * 0.85f;
            for (int i = 0; i < renderers.Length; i++)
            {
                if (renderers[i] != null) renderers[i].sharedMaterial = frozen ? frozenMaterials[i] : normalMaterials[i];
            }
            if (iceRenderer != null)
            {
                iceRenderer.gameObject.SetActive(progress > 0f);
                if (iceMaterial != null) iceMaterial.SetFloat("_Fill", frozen ? 1.05f : progress);
            }
        }
    }
}

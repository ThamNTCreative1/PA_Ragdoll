using TMPro;
using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Shows "THIS BRAINROT IS ALREADY COLLECTED!" while the crosshair rests on a monster that is already frozen
    // (and no unfrozen one is targeted). The text is authored in the scene; this only fades its alpha.
    public sealed class CollectedHint : MonoBehaviour
    {
        public FreezeGun gun;
        public TMP_Text text;
        public float fadeSpeed = 6f;

        public bool Showing { get; private set; }

        private float alpha;

        private void Awake()
        {
            Apply();
        }

        private void Update()
        {
            Showing = gun != null && gun.FindTarget() == null && gun.FindFrozenInSights() != null;
            alpha = Mathf.MoveTowards(alpha, Showing ? 1f : 0f, fadeSpeed * Time.deltaTime);
            Apply();
        }

        private void Apply()
        {
            if (text == null) return;
            text.alpha = alpha;
            text.enabled = alpha > 0.001f;
        }
    }
}

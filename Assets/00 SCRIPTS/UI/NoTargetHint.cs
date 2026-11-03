using TMPro;
using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Shows "TRY MOVING YOUR CROSSHAIR OR GET CLOSER!" while the player fires with no monster in the sights,
    // then fades it out. The text is authored in the scene; this only drives its alpha.
    public sealed class NoTargetHint : MonoBehaviour
    {
        public FreezeGun gun;
        public TMP_Text text;
        [Tooltip("Seconds the message stays after the last miss.")]
        public float showTime = 1.6f;
        public float fadeTime = 0.35f;
        [Tooltip("When this hint is showing (crosshair on a frozen monster), the miss message stays hidden.")]
        public CollectedHint collectedHint;

        private float timer;

        private void Awake()
        {
            Apply(0f);
        }

        private void Update()
        {
            if (collectedHint != null && collectedHint.Showing) timer = 0f;
            else if (gun != null && gun.IsFiring && gun.CurrentTarget == null) timer = showTime;
            else if (timer > 0f) timer -= Time.deltaTime;
            Apply(timer <= 0f ? 0f : Mathf.Clamp01(timer / fadeTime));
        }

        private void Apply(float a)
        {
            if (text == null) return;
            text.alpha = a;
            text.enabled = a > 0.001f;
        }
    }
}

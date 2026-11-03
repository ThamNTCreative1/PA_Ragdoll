using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace OBP.FreezeBrainrot
{
    // Centre-screen crosshair: ice-blue and larger when a freezable monster is in the sights, kicks when firing starts,
    // and a radial ring shows how frozen the current target is.
    public sealed class Crosshair : MonoBehaviour
    {
        public FreezeGun gun;
        public Graphic[] tinted = new Graphic[0];
        [Tooltip("Radial-filled image showing the current target's freeze progress.")]
        public Image progressRing;
        [Tooltip("Shows freeze progress of the current target, e.g. \"45%\".")]
        public TMP_Text rateText;
        public Color idleColor = new Color(1f, 1f, 1f, 0.85f);
        public Color lockedColor = new Color(0.35f, 0.9f, 1f, 1f);
        public float lockedScale = 1.25f;
        public float kickScale = 1.5f;
        public float sharpness = 14f;

        private float scale = 1f;

        private void OnEnable()
        {
            if (gun != null) gun.Fired += OnFired;
        }

        private void OnDisable()
        {
            if (gun != null) gun.Fired -= OnFired;
        }

        private void OnFired()
        {
            scale = kickScale;
        }

        private void Update()
        {
            FreezableMonster target = gun == null ? null : (gun.IsFiring ? gun.CurrentTarget : gun.FindTarget());
            bool locked = target != null;
            Color c = locked ? lockedColor : idleColor;
            for (int i = 0; i < tinted.Length; i++) if (tinted[i] != null) tinted[i].color = c;

            float goal = locked ? lockedScale : 1f;
            if (gun != null && gun.IsFiring) goal *= 1f + 0.05f * Mathf.Sin(Time.time * 30f);
            scale = Mathf.Lerp(scale, goal, 1f - Mathf.Exp(-sharpness * Time.deltaTime));
            transform.localScale = new Vector3(scale, scale, 1f);

            if (progressRing != null)
            {
                float p = target != null ? target.Progress : 0f;
                progressRing.fillAmount = p;
                progressRing.enabled = p > 0.001f;
            }
            if (rateText != null)
            {
                // Progress of the monster being frozen; the per-second speed pops as floating text (FloatingFreezeText).
                bool show = gun != null && gun.IsFiring && target != null;
                rateText.enabled = show;
                if (show) rateText.text = Mathf.FloorToInt(target.Progress * 100f) + "%";
            }
        }
    }
}

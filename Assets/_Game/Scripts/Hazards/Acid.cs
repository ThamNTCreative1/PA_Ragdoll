using System.Collections.Generic;
using UnityEngine;

namespace MelonAd
{
    /// <summary>Acid pool sensor: hiss sound on enter, bubbles for bodies inside.</summary>
    public class Acid : MonoBehaviour
    {
        readonly List<Rigidbody2D> inside = new List<Rigidbody2D>();

        void OnTriggerEnter2D(Collider2D c)
        {
            Rigidbody2D rb = c.attachedRigidbody;
            if (rb == null) return;
            bool bullet = c.GetComponent<Bullet>() != null;
            bool spike = c.GetComponent<Spike>() != null;
            bool flame = c.GetComponent<FlameParticle>() != null;
            if (!bullet && !spike && AudioManager.I != null) AudioManager.I.PlayIfIdle(Sfx.Kis);
            if (!bullet && !flame && !inside.Contains(rb)) inside.Add(rb);
        }

        void OnTriggerExit2D(Collider2D c)
        {
            Rigidbody2D rb = c.attachedRigidbody;
            if (rb != null) inside.Remove(rb);
        }

        void Update()
        {
            for (int i = inside.Count - 1; i >= 0; i--)
            {
                Rigidbody2D rb = inside[i];
                if (rb == null || !rb.gameObject.activeInHierarchy)
                {
                    inside.RemoveAt(i);
                    continue;
                }
                if (Random.value < 0.1f && FxManager.I != null) FxManager.I.Bubble(rb.position);
            }
        }

        public void ResetState()
        {
            inside.Clear();
        }
    }
}

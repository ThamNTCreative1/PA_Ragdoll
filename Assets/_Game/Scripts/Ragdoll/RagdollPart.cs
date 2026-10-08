using UnityEngine;

namespace MelonAd
{
    /// <summary>One body segment. Forwards contacts to the owning Ragdoll.</summary>
    public class RagdollPart : MonoBehaviour
    {
        public Ragdoll owner;
        public Rigidbody2D rb;
        public SpriteRenderer skin;      // normal look (masked by the death hole)
        public SpriteRenderer skeleton;  // revealed by acid / spikes
        public SpriteRenderer burnt;     // revealed by fire
        public SpriteRenderer[] skinExtras;   // extra skin pieces on this body (e.g. hand)
        public SpriteRenderer[] burntExtras;  // matching burnt pieces

        public void ShowBurnt(bool on)
        {
            if (burnt != null) burnt.enabled = on;
            if (burntExtras != null)
                for (int i = 0; i < burntExtras.Length; i++)
                    if (burntExtras[i] != null) burntExtras[i].enabled = on;
        }

        public void ShowSkeleton(bool on)
        {
            if (skeleton != null) skeleton.enabled = on;
        }

        void OnCollisionEnter2D(Collision2D c)
        {
            owner.OnPartCollision(this, c);
        }

        void OnTriggerEnter2D(Collider2D c)
        {
            owner.OnPartTrigger(this, c);
        }
    }
}

using UnityEngine;

namespace MelonAd
{
    /// <summary>Syringe spike. Kills the ragdoll on touch; shattered by bullets or by hitting another spike.</summary>
    public class Spike : MonoBehaviour
    {
        public bool IsBroken { get; private set; }

        public void Break(int shards)
        {
            if (IsBroken) return;
            IsBroken = true;
            if (FxManager.I != null) FxManager.I.Debris(FxManager.I.spikeShard, transform.position, shards);
            gameObject.SetActive(false);
        }

        void OnCollisionEnter2D(Collision2D c)
        {
            if (IsBroken) return;
            Spike other = c.collider.GetComponent<Spike>();
            if (other != null && !other.IsBroken)
            {
                Break(5);
                other.Break(5);
            }
        }

        public void ResetState()
        {
            IsBroken = false;
        }
    }
}

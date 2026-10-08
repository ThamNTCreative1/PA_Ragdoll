using UnityEngine;

namespace MelonAd
{
    /// <summary>Marks a dynamic body the player can drag (ragdoll parts, chair).</summary>
    public class Grabbable : MonoBehaviour
    {
        public Rigidbody2D rb;
        public Ragdoll owner;

        public bool CanGrab()
        {
            return owner == null || !owner.Dead;
        }
    }
}

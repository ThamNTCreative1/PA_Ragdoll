using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Spawn juice: a small random toss plus spin so items tumble and settle instead of landing dead-straight.
    public class ItemSpawnMotion : MonoBehaviour, IItemSpawnBehaviour
    {
        [Tooltip("Body to nudge. Empty = grabs the Rigidbody2D on this object at spawn.")]
        [SerializeField] private Rigidbody2D body;

        [Header("Toss (added to any velocity it already has)")]
        [Tooltip("Random sideways launch speed range, units/second.")]
        [SerializeField] private Vector2 sidewaysSpeed = new Vector2(-0.6f, 0.6f);
        [Tooltip("Random upward launch speed range.")]
        [SerializeField] private Vector2 upwardSpeed = new Vector2(0f, 0.6f);

        [Header("Spin")]
        [Tooltip("Random initial spin applied at spawn, ± this many degrees/second.")]
        [SerializeField] private float maxSpin = 220f;

        private void Reset() => body = GetComponent<Rigidbody2D>();

        public void OnSpawned(ItemSO item)
        {
            if (body == null) body = GetComponent<Rigidbody2D>();
            if (body == null || body.bodyType != RigidbodyType2D.Dynamic) return;

            body.linearVelocity += new Vector2(
                Random.Range(sidewaysSpeed.x, sidewaysSpeed.y),
                Random.Range(upwardSpeed.x, upwardSpeed.y));
            body.angularVelocity += Random.Range(-maxSpin, maxSpin);
        }
    }
}

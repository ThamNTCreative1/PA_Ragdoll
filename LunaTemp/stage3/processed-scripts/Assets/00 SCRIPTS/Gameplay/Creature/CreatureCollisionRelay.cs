using UnityEngine;

namespace Game.Gameplay
{
    // Forwards collision events from a non-root rig part (e.g. Head) up to the CreatureAgent on the root.
    public class CreatureCollisionRelay : MonoBehaviour
    {
        private CreatureAgent _agent;
        private Collider2D _collider;

        private void Awake()
        {
            _agent = GetComponentInParent<CreatureAgent>();
            _collider = GetComponent<Collider2D>();
        }

        private void OnCollisionEnter2D(Collision2D collision) => _agent.HandleCollision(collision, _collider);
    }
}

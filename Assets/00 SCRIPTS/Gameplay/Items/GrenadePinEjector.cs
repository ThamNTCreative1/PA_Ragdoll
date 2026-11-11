using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Cosmetic: detaches the safety pin on spawn and flings it off as a short-lived physics scrap.
    public class GrenadePinEjector : MonoBehaviour, IItemSpawnBehaviour
    {
        [Tooltip("Pin child to detach and fling on spawn. Empty = nothing ejects.")]
        [SerializeField] private GameObject pinGameObject;
        [Tooltip("Base launch speed of the pin (x = sideways, y = up).")]
        [SerializeField] private Vector2 ejectSpeed = new Vector2(2.5f, 1.5f);
        [Tooltip("Random spin on the flicked pin, ± this many degrees/second.")]
        [SerializeField] private float maxSpin = 720f;
        [SerializeField] private float fadeDelay = 0.6f;
        [SerializeField] private float fadeDuration = 0.5f;

        public void OnSpawned(ItemSO item)
        {
            if (pinGameObject == null) return;

            // Detach so the pin outlives the grenade, keeping its current world pose.
            pinGameObject.transform.SetParent(null, worldPositionStays: true);

            var body = pinGameObject.GetComponent<Rigidbody2D>();
            if (body == null) body = pinGameObject.AddComponent<Rigidbody2D>();
            body.bodyType = RigidbodyType2D.Dynamic;
            body.mass = 0.02f;

            var pinCollider = pinGameObject.GetComponent<Collider2D>();
            if (pinCollider == null)
            {
                var circle = pinGameObject.AddComponent<CircleCollider2D>();
                circle.radius = 0.05f;
                pinCollider = circle;
            }

            // Don't let the pin shove against the grenade it's leaving.
            var grenadeCollider = GetComponent<Collider2D>();
            if (grenadeCollider != null) Physics2D.IgnoreCollision(pinCollider, grenadeCollider);

            float sideSign = Random.value < 0.5f ? -1f : 1f;
            body.linearVelocity = new Vector2(
                ejectSpeed.x * sideSign * Random.Range(0.7f, 1.2f),
                ejectSpeed.y * Random.Range(0.8f, 1.2f));
            body.angularVelocity = Random.Range(-maxSpin, maxSpin);

            FadeOutAndDespawn.Begin(pinGameObject, fadeDelay, fadeDuration);
        }
    }
}

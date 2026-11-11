using UnityEngine;

namespace Game.Gameplay
{
    // Powered flight for a firework/rocket: thrust along the nose. Added at runtime by ExplosiveEntity.
    public class ExplosiveFlight : MonoBehaviour
    {
        private Rigidbody2D _body;
        private Vector2 _direction;
        private float _thrust;
        private float _maxSpeed;
        private float _noseAngle;
        private float _speed;

        public void Begin(Rigidbody2D body, Vector2 direction, float thrust, float maxSpeed, float noseAngle)
        {
            _body = body;
            _direction = direction.sqrMagnitude > 0.0001f ? direction.normalized : Vector2.down;
            _thrust = Mathf.Max(0f, thrust);
            _maxSpeed = Mathf.Max(0f, maxSpeed);
            _noseAngle = noseAngle;

            // A thruster holds its own line: gravity and the spawn tumble would both bend it.
            _body.gravityScale = 0f;
            _body.linearVelocity = Vector2.zero;
            _body.angularVelocity = 0f;
            _body.rotation = Heading();
        }

        // Parented, so the trail rides the nose through the whole flight and dies with it.
        public void AttachTrail(GameObject prefab, float offset, float scale)
        {
            if (prefab == null) return;
            var fx = Instantiate(prefab, transform.position, Quaternion.identity, transform);
            float rad = _noseAngle * Mathf.Deg2Rad;
            fx.transform.localPosition = -new Vector3(Mathf.Cos(rad), Mathf.Sin(rad), 0f) * offset;
            fx.transform.localScale = prefab.transform.localScale * Mathf.Max(0.01f, scale);
            EffectSorting.LiftAboveSprites(fx);
        }

        private void FixedUpdate()
        {
            if (_body == null) return;
            _speed = Mathf.Min(_speed + _thrust * Time.fixedDeltaTime, _maxSpeed);
            _body.linearVelocity = _direction * _speed;
            _body.angularVelocity = 0f;
            _body.MoveRotation(Heading());
        }

        // Turn the body so the nose — wherever the art draws it — points down the travel line.
        private float Heading()
            => Mathf.Atan2(_direction.y, _direction.x) * Mathf.Rad2Deg - _noseAngle;
    }
}

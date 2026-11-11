using UnityEngine;

namespace Game.Gameplay
{
    // Caps speed to a sweepable distance and arms CCD only while fast, so resting limbs stay cheap Discrete.
    public static class TunnelGuard
    {
        private const float MaxTravelPerStep = TileGrid.CellSize * 2f;
        private const float CcdTravelPerStep = TileGrid.CellSize * 0.5f;

        // Call after any impulse, and once per step while a body is live.
        public static void Apply(Rigidbody2D body)
        {
            if (body == null || body.bodyType != RigidbodyType2D.Dynamic) return;

            float step = Time.fixedDeltaTime;
            if (step <= 0f) return;

            float max = MaxTravelPerStep / step;
            var velocity = body.linearVelocity;
            float speedSqr = velocity.sqrMagnitude;
            if (speedSqr > max * max)
            {
                body.linearVelocity = velocity * (max / Mathf.Sqrt(speedSqr));
                speedSqr = max * max;
            }

            float ccd = CcdTravelPerStep / step;
            var mode = speedSqr > ccd * ccd
                ? CollisionDetectionMode2D.Continuous
                : CollisionDetectionMode2D.Discrete;
            // Guarded: rewriting the mode every step churns the body's broadphase proxy.
            if (body.collisionDetectionMode != mode) body.collisionDetectionMode = mode;
        }
    }
}

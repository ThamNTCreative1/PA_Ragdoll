namespace Game.UI
{
    // Pure idle-timeout tracking, no MonoBehaviour — testable without a scene.
    public class IdleTimer
    {
        private readonly float _idleDelay;
        private float _elapsed;

        public IdleTimer(float idleDelay) => _idleDelay = idleDelay;

        public bool IsIdle => _elapsed >= _idleDelay;

        public void Reset() => _elapsed = 0f;

        public void Tick(float deltaTime) => _elapsed += deltaTime;
    }
}

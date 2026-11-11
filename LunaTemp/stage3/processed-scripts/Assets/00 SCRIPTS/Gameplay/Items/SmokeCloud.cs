using UnityEngine;

namespace Game.Gameplay
{
    // Runs a smoke effect for a while, then stops emitting and clears once the last puff fades.
    public class SmokeCloud : MonoBehaviour
    {
        private ParticleSystem[] _systems;
        private GameObject _owner;
        private float _stopTime;
        private bool _stopped;

        // `owner` goes with the cloud so the canister stays alive as long as it's smoking.
        public void Begin(float seconds, GameObject owner = null, bool collide = true)
        {
            _systems = GetComponentsInChildren<ParticleSystem>();
            _owner = owner;
            _stopTime = Time.time + Mathf.Max(0f, seconds);

            foreach (var ps in _systems)
            {
                // World space, or the puffs get dragged around by the canister they're parented to.
                var main = ps.main;
                main.simulationSpace = ParticleSystemSimulationSpace.World;

                // No particle collision: Luna's ParticleSystem has no collision module, so the
                // smoke drifts through tiles (`collide` is kept for callers but has no effect).
            }
        }

        // The canister rolls and tumbles; its plume must not follow the spin.
        private void LateUpdate() => transform.rotation = Quaternion.identity;

        private void Update()
        {
            if (_systems == null) return;

            if (!_stopped)
            {
                if (Time.time < _stopTime) return;
                _stopped = true;
                foreach (var ps in _systems)
                    ps.Stop(true, ParticleSystemStopBehavior.StopEmitting);
                return;
            }

            // Emission is off but the last puffs are still drifting; let them finish.
            foreach (var ps in _systems)
                if (ps.IsAlive(true)) return;
            Destroy(_owner != null ? _owner : gameObject);
        }
    }
}

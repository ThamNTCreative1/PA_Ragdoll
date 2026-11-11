using System;
using UnityEngine;

namespace Game.Gameplay
{
    // Inspector-tunable PID gains, separate from controller state so joints can share a gain set.
    [Serializable]
    public struct PidGains
    {
        [Tooltip("Proportional gain — the immediate push toward the target.")]
        public float kp;
        [Tooltip("Integral gain — trims persistent error the P term can't close (gravity sag, f...")]
        public float ki;
        [Tooltip("Derivative gain — brakes the approach, damping overshoot.")]
        public float kd;
        [Tooltip("Absolute cap on the accumulated integral (in error units × seconds)")]
        public float integralLimit;
    }

    // Classic PID loop, pure C# — EditMode-testable, no Unity lifecycle. Callers with angular
    // errors must feed a wrap-aware error (e.g. Mathf.DeltaAngle) — the controller doesn't wrap.
    public class PidController
    {
        private float _integral;
        private float _lastError;
        private bool _hasLastError;

        public float Step(in PidGains gains, float error, float deltaTime)
        {
            if (deltaTime <= 0f) return gains.kp * error;

            _integral = Mathf.Clamp(_integral + error * deltaTime, -gains.integralLimit, gains.integralLimit);
            // No derivative on the first step after a reset — there is no history to differentiate,
            // and inventing one would kick the output.
            float derivative = _hasLastError ? (error - _lastError) / deltaTime : 0f;
            _lastError = error;
            _hasLastError = true;

            return gains.kp * error + gains.ki * _integral + gains.kd * derivative;
        }

        // Call when the loop disengages (motor off, idle): stale integral/derivative history from
        // the previous engagement would kick the next one.
        public void Reset()
        {
            _integral = 0f;
            _lastError = 0f;
            _hasLastError = false;
        }
    }
}

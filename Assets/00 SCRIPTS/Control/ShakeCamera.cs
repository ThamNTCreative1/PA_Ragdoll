using System.Collections;
using UnityEngine;

public class ShakeCamera : MonoBehaviour
{
    [Header("Explosion Shake")]
    [SerializeField, Min(0f)] private float defaultDuration = 0.35f;
    [SerializeField, Min(0f)] private float defaultStrength = 0.25f;
    [SerializeField, Min(0f)] private float frequency = 30f;

    private Coroutine shakeCoroutine;
    private Vector3 shakeOffset;

    /// <summary>
    /// Rung camera theo thông số mặc định trong Inspector.
    /// </summary>
    public void ShakeExplosion()
    {
        ShakeExplosion(defaultDuration, defaultStrength);
    }

    /// <summary>
    /// Rung camera kiểu vụ nổ, mạnh lúc đầu và nhẹ dần về cuối.
    /// </summary>
    public void ShakeExplosion(float duration, float strength)
    {
        if (shakeCoroutine != null)
        {
            StopCoroutine(shakeCoroutine);
            transform.localPosition -= shakeOffset;
            shakeOffset = Vector3.zero;
        }

        if (duration <= 0f || strength <= 0f)
            return;

        shakeCoroutine = StartCoroutine(ShakeRoutine(duration, strength));
    }

    private IEnumerator ShakeRoutine(float duration, float strength)
    {
        float elapsed = 0f;

        while (elapsed < duration)
        {
            transform.localPosition -= shakeOffset;

            float fade = 1f - elapsed / duration;
            Vector2 direction = Random.insideUnitCircle * strength * fade;
            shakeOffset = new Vector3(direction.x, direction.y, 0f);
            transform.localPosition += shakeOffset;

            float interval = frequency > 0f ? 1f / frequency : 0f;
            if (interval > 0f)
                yield return new WaitForSecondsRealtime(interval);
            else
                yield return null;

            elapsed += interval > 0f ? interval : Time.unscaledDeltaTime;
        }

        transform.localPosition -= shakeOffset;
        shakeOffset = Vector3.zero;
        shakeCoroutine = null;
    }

    private void OnDisable()
    {
        if (shakeCoroutine != null)
            StopCoroutine(shakeCoroutine);

        transform.localPosition -= shakeOffset;
        shakeOffset = Vector3.zero;
        shakeCoroutine = null;
    }
}

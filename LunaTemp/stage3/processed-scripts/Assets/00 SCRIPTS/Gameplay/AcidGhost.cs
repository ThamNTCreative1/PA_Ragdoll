using UnityEngine;

// The soul of a dead man: his head, pale and see-through, drifting up and fading (source "chost").
public class AcidGhost : MonoBehaviour
{
    public SpriteRenderer sr;
    public float life = 3f;
    public float maxAlpha = 0.6f;

    private float t, dx, dy;

    public void Play(Sprite sprite)
    {
        if (sr) sr.sprite = sprite;
        dx = Random.Range(-0.5f, 0.5f);
        dy = 0.3f;
        Apply();
    }

    private void Update()
    {
        t += Time.deltaTime / life;
        dy += Time.deltaTime * 1.5f;
        transform.position += new Vector3(dx, dy, 0) * Time.deltaTime;
        Apply();
        if (t >= 1) Destroy(gameObject);
    }

    private void Apply()
    {
        if (!sr) return;
        Color c = sr.color; c.a = Mathf.Sin(Mathf.PI * Mathf.Clamp01(t)) * maxAlpha; sr.color = c;
    }
}

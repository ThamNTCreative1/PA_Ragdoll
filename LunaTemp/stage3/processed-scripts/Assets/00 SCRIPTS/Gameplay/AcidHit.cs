using UnityEngine;

// Hit flash where the stick kills a man (reference ad): a dark blot growing + a bright glow pulsing, 0.55 s.
public class AcidHit : MonoBehaviour
{
    public SpriteRenderer dark;
    public SpriteRenderer glow;
    public float life = 0.55f;

    private float t, s;

    private void Start()
    {
        s = Random.Range(4f, 8f) * 0.25f;
        Apply();
    }

    private void Update()
    {
        t += Time.deltaTime / life;
        Apply();
        if (t >= 1) Destroy(gameObject);
    }

    private void Apply()
    {
        float k = Mathf.Clamp01(t), sin = Mathf.Sin(Mathf.PI * k);
        if (dark)
        {
            dark.transform.localScale = Vector3.one * (s * k);
            Color c = dark.color; c.a = sin * 0.5f; dark.color = c;
        }
        if (glow)
        {
            glow.transform.localScale = Vector3.one * ((s - 0.25f) * sin);
            Color c = glow.color; c.a = k; glow.color = c;
        }
    }
}

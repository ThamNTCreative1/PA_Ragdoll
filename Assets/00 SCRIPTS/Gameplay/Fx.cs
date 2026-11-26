using System.Collections.Generic;
using UnityEngine;

// Simple sprite particles: blood drops when a joint breaks / on hard hits, green splash + smoke when the player turns zombie.
public class Fx : MonoBehaviour
{
    [SerializeField] private FxSprite bloodPrefab;
    [SerializeField] private FxSprite splashPrefab;
    [SerializeField] private FxSprite smokePrefab;
    [SerializeField] private Transform pool;

    [Header("Blood")]
    [SerializeField] private int bloodBreak = 40;
    [SerializeField] private int bloodHit = 8;
    [SerializeField] private Vector2 bloodSize = new Vector2(0.06f, 0.16f);
    [SerializeField] private Vector2 bloodSpeed = new Vector2(2f, 8f);
    [SerializeField] private float bloodInherit = 0.25f;
    [SerializeField] private float bloodLife = 1.1f;
    [SerializeField] private float gravity = 14f;
    [SerializeField] private Color bloodDark = new Color(0.45f, 0.02f, 0.02f, 1f);
    [SerializeField] private Color bloodLight = new Color(0.85f, 0.08f, 0.05f, 1f);

    [Header("Zombie puff")]
    [SerializeField] private int splashCount = 14;
    [SerializeField] private int smokeCount = 8;

    private class P
    {
        public FxSprite fx;
        public Vector2 vel;
        public float life, max, spin, grav, grow, size;
        public Color color;
        public bool fade;
        public int kind;
    }

    // Pools by kind index (no Unity objects as dictionary keys: in Luna that lookup failed, "key not present").
    private const int BLOOD = 0, SPLASH = 1, SMOKE = 2;
    private readonly List<P> live = new List<P>();
    private readonly List<FxSprite>[] free = { new List<FxSprite>(), new List<FxSprite>(), new List<FxSprite>() };

    private FxSprite Prefab(int kind) { return kind == BLOOD ? bloodPrefab : kind == SPLASH ? splashPrefab : smokePrefab; }

    private FxSprite Get(int kind)
    {
        List<FxSprite> list = free[kind];
        FxSprite f;
        if (list.Count > 0) { f = list[list.Count - 1]; list.RemoveAt(list.Count - 1); f.gameObject.SetActive(true); }
        else f = Instantiate(Prefab(kind), pool);
        return f;
    }

    private void Spawn(int kind, Vector2 at, Vector2 vel, float size, Color c, float life, float grav, float grow, bool fade)
    {
        if (!Prefab(kind)) return;
        FxSprite f = Get(kind);
        f.transform.position = new Vector3(at.x, at.y, 0);
        f.transform.rotation = Quaternion.Euler(0, 0, Random.Range(0f, 360f));
        f.transform.localScale = Vector3.one * size;
        f.Sr.color = c;
        P p = new P();
        p.fx = f; p.vel = vel; p.life = 0; p.max = life; p.spin = Random.Range(-360f, 360f); p.grav = grav; p.grow = grow; p.size = size; p.color = c; p.fade = fade; p.kind = kind;
        live.Add(p);
    }

    public void Blood(Vector2 at, Vector2 hitVel, bool big)
    {
        int n = big ? bloodBreak : bloodHit;
        Vector2 inherit = Vector2.ClampMagnitude(hitVel * bloodInherit, 5f);
        for (int i = 0; i < n; i++)
        {
            float a = Random.Range(0f, Mathf.PI * 2f);
            Vector2 dir = new Vector2(Mathf.Cos(a), Mathf.Sin(a) * 0.7f + 0.5f);
            Vector2 v = dir.normalized * Random.Range(bloodSpeed.x, bloodSpeed.y) + inherit;
            Color c = Color.Lerp(bloodDark, bloodLight, Random.value);
            Spawn(BLOOD, at, v, Random.Range(bloodSize.x, bloodSize.y), c, bloodLife * Random.Range(0.7f, 1.1f), gravity, 0, false);
        }
    }

    public void ZombiePuff(Vector2 at)
    {
        for (int i = 0; i < splashCount; i++)
        {
            float a = Random.Range(0f, Mathf.PI * 2f);
            Vector2 v = new Vector2(Mathf.Cos(a), Mathf.Sin(a)) * Random.Range(1.5f, 5f) + Vector2.up * 1.5f;
            Spawn(SPLASH, at + Random.insideUnitCircle * 0.3f, v, Random.Range(0.6f, 1.1f), Color.white, Random.Range(0.6f, 1f), gravity * 0.6f, 0, true);
        }
        for (int i = 0; i < smokeCount; i++)
        {
            Vector2 v = Random.insideUnitCircle * 1.2f + Vector2.up * 0.8f;
            Spawn(SMOKE, at + Random.insideUnitCircle * 0.6f, v, Random.Range(0.8f, 1.3f), new Color(0.6f, 1f, 0.55f, 0.8f), Random.Range(0.8f, 1.2f), 0, 1.2f, true);
        }
    }

    private void Update()
    {
        float dt = Time.deltaTime;
        for (int i = live.Count - 1; i >= 0; i--)
        {
            P p = live[i];
            p.life += dt;
            if (p.life >= p.max || !p.fx)
            {
                if (p.fx) Release(p.fx, p.kind);
                live.RemoveAt(i);
                continue;
            }
            p.vel.y -= p.grav * dt;
            Transform t = p.fx.transform;
            t.position += new Vector3(p.vel.x, p.vel.y, 0) * dt;
            t.Rotate(0, 0, p.spin * dt);
            float k = p.life / p.max;
            if (p.grow > 0) t.localScale = Vector3.one * p.size * (1f + p.grow * k);
            Color c = p.color;
            c.a = p.fade ? p.color.a * (1f - k) : (k > 0.7f ? p.color.a * (1f - (k - 0.7f) / 0.3f) : p.color.a);
            p.fx.Sr.color = c;
        }
    }

    private void Release(FxSprite f, int kind)
    {
        f.gameObject.SetActive(false);
        free[kind].Add(f);
    }
}

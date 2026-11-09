using System.Collections.Generic;
using UnityEngine;

// Tia điện chập chờn trên người quái (gắn lúc runtime khi quái bị sét đánh vỡ giáp).
// Vẽ bằng các đoạn sprite như LightningStrike (không dùng LineRenderer để chắc chắn chạy trên Luna).
public class ElectricFx : MonoBehaviour
{
    private const int Segments = 4;
    private const int Arcs = 2;
    private const float Interval = 0.09f;
    private const float Life = 0.06f;
    private static readonly Color CoreColor = new Color(0.9f, 0.97f, 1f, 1f);
    private static readonly Color GlowColor = new Color(0.45f, 0.75f, 1f, 0.45f);

    private Sprite sprite;
    private float scale;
    private int order;
    private Transform root;
    private readonly List<Transform> parts = new List<Transform>();
    private readonly List<SpriteRenderer> cores = new List<SpriteRenderer>();
    private readonly List<SpriteRenderer> glows = new List<SpriteRenderer>();
    private float nextArc;
    private float hideTime;

    public static ElectricFx Attach(GameObject target, Sprite sprite, float scale, int order)
    {
        ElectricFx fx = target.GetComponent<ElectricFx>();
        if (!fx) fx = target.AddComponent<ElectricFx>();
        fx.sprite = sprite;
        fx.scale = scale;
        fx.order = order;
        return fx;
    }

    private void Start()
    {
        foreach (Collider2D c in GetComponentsInChildren<Collider2D>())
            if (!c.isTrigger && !parts.Contains(c.transform)) parts.Add(c.transform);
        // Root riêng ngoài quái để không bị SortingGroup của quái che.
        root = new GameObject("ElectricFx").transform;
        for (int i = 0; i < Segments * Arcs; i++)
        {
            glows.Add(PowerBase.CreateSprite("Glow", sprite, root, order));
            cores.Add(PowerBase.CreateSprite("Core", sprite, root, order + 1));
        }
        Hide();
    }

    private void Update()
    {
        if (!sprite || parts.Count == 0) return;
        if (Time.time >= hideTime) Hide();
        if (Time.time < nextArc) return;
        nextArc = Time.time + Interval * Random.Range(0.7f, 1.4f);
        hideTime = Time.time + Life;
        int used = 0;
        for (int a = 0; a < Arcs; a++)
        {
            Transform part = parts[Random.Range(0, parts.Count)];
            if (!part) continue;
            Collider2D col = part.GetComponent<Collider2D>();
            Vector2 c = col ? (Vector2)col.bounds.center : (Vector2)part.position;
            Vector2 ext = col ? (Vector2)col.bounds.extents : Vector2.one * 0.3f;
            Vector2 p = c + new Vector2(Random.Range(-ext.x, ext.x), Random.Range(-ext.y, ext.y));
            Vector2 dir = Random.insideUnitCircle.normalized;
            float len = Random.Range(0.12f, 0.22f) * scale;
            for (int s = 0; s < Segments; s++)
            {
                Vector2 n = new Vector2(-dir.y, dir.x);
                Vector2 next = p + dir * len + n * Random.Range(-0.6f, 0.6f) * len;
                Place(glows[used], p, next, 0.07f * scale, GlowColor);
                Place(cores[used], p, next, 0.025f * scale, CoreColor);
                used++;
                p = next;
            }
        }
    }

    private void Place(SpriteRenderer sr, Vector2 a, Vector2 b, float width, Color color)
    {
        Vector2 d = b - a;
        Vector2 size = sprite.bounds.size;
        sr.enabled = true;
        sr.color = color;
        sr.transform.position = (a + b) * 0.5f;
        sr.transform.rotation = Quaternion.Euler(0, 0, Mathf.Atan2(d.y, d.x) * Mathf.Rad2Deg);
        sr.transform.localScale = new Vector3((d.magnitude + width * 0.5f) / size.x, width / size.y, 1);
    }

    private void Hide()
    {
        for (int i = 0; i < cores.Count; i++)
        {
            cores[i].enabled = false;
            glows[i].enabled = false;
        }
    }

    private void OnDestroy()
    {
        if (root) Destroy(root.gameObject);
    }
}

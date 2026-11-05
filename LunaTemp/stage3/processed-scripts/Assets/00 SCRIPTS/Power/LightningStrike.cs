using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Vẽ tia sét bằng các đoạn sprite (không dùng LineRenderer để chắc chắn chạy trên Luna).
// Dùng chung cho LightningPower và StormPower.
public class LightningStrike : MonoBehaviour
{
    [SerializeField] private Sprite segmentSprite;
    [SerializeField] private Color coreColor = Color.white;
    [SerializeField] private Color glowColor = new Color(0.6f, 0.8f, 1f, 0.35f);
    [SerializeField] private float coreWidth = 0.035f;
    [SerializeField] private float glowWidth = 0.1f;
    [SerializeField] private int mainSegments = 18;
    [SerializeField] private int branchSegments = 5;
    [SerializeField] private int branches = 2;
    [SerializeField] private float jitter = 0.22f;
    [SerializeField] private int sortingOrder = 60;
    [SerializeField] private float flashStrength = 0.35f;
    [SerializeField] private float groundY = -4f; // mặt đất (đỉnh của Ground)
    [SerializeField] private AudioClip strikeSound; // phát mỗi lần sét đánh (cả sét thường và sét trong bão)
    [SerializeField] private float shakeDuration = 0.2f;
    [SerializeField] private float shakeStrength = 0.08f;

    private readonly Queue<Bolt> pool = new Queue<Bolt>();

    private class Bolt
    {
        public GameObject Root;
        public List<SpriteRenderer> Cores = new List<SpriteRenderer>();
        public List<SpriteRenderer> Glows = new List<SpriteRenderer>();
        public int Used;
    }

    // Đánh sét tại cột x của target: tia luôn đi từ trên trời xuống tới mặt đất,
    // gây damage cho mọi thứ nằm trong cột sét (rộng 2*radius).
    public void Strike([Bridge.Ref] Vector2 target, float radius, int damage, float scale)
    {
        Vector2 ground = new Vector2(target.x, groundY);
        Bolt bolt = pool.Count > 0 ? pool.Dequeue() : CreateBolt();
        Build(bolt, ground, scale);
        DamageColumn(target.x, radius * scale, damage);
        if (ScreenFx.Ins) ScreenFx.Ins.Flash(flashStrength);
        if (CameraShake.Ins) CameraShake.Ins.Shake(shakeDuration, shakeStrength);
        if (strikeSound) AudioController.Ins.PlaySFX(strikeSound);
        StartCoroutine(Play(bolt, ground, scale));
    }

    private static readonly HashSet<IDamageable> hitBuffer = new HashSet<IDamageable>();
    private void DamageColumn(float x, float halfWidth, int damage)
    {
        Rect cam = PowerBase.CameraRect();
        float top = cam.yMax + 0.5f;
        Vector2 center = new Vector2(x, (top + groundY) * 0.5f);
        Vector2 size = new Vector2(halfWidth * 2f, top - groundY);
        hitBuffer.Clear();
        foreach (Collider2D col in Physics2D.OverlapBoxAll(center, size, 0))
        {
            IDamageable t = PowerBase.GetTarget(col);
            if (t == null || hitBuffer.Contains(t)) continue;
            hitBuffer.Add(t);
            t.TakeDamage(damage);
        }
    }

    private Bolt CreateBolt()
    {
        Bolt b = new Bolt();
        b.Root = new GameObject("Bolt");
        b.Root.transform.SetParent(transform, false);
        int total = mainSegments + branchSegments * branches;
        for (int i = 0; i < total; i++)
        {
            SpriteRenderer g = PowerBase.CreateSprite("Glow", segmentSprite, b.Root.transform, sortingOrder);
            SpriteRenderer c = PowerBase.CreateSprite("Core", segmentSprite, b.Root.transform, sortingOrder + 1);
            b.Glows.Add(g);
            b.Cores.Add(c);
        }
        return b;
    }

    private void Build(Bolt bolt, Vector2 target, float scale)
    {
        Rect cam = PowerBase.CameraRect();
        Vector2 start = new Vector2(target.x + Random.Range(-0.4f, 0.4f), cam.yMax + 0.5f);
        List<Vector2> points = new List<Vector2>();
        for (int i = 0; i <= mainSegments; i++)
        {
            float t = (float)i / mainSegments;
            Vector2 p = Vector2.Lerp(start, target, t);
            if (i > 0 && i < mainSegments) p.x += Random.Range(-jitter, jitter) * scale;
            points.Add(p);
        }

        bolt.Used = 0;
        for (int i = 0; i < mainSegments; i++) SetSegment(bolt, points[i], points[i + 1], scale, 1f);

        for (int b = 0; b < branches; b++)
        {
            int from = Random.Range(2, mainSegments - 2);
            Vector2 p = points[from];
            float dir = Random.value < 0.5f ? -1f : 1f;
            float len = (start.y - target.y) / mainSegments;
            for (int i = 0; i < branchSegments; i++)
            {
                Vector2 next = p + new Vector2(dir * Random.Range(0.2f, 0.5f) * scale, -len * Random.Range(0.6f, 1f));
                next.y = Mathf.Max(next.y, groundY);
                SetSegment(bolt, p, next, scale, 0.5f);
                p = next;
            }
        }

        for (int i = bolt.Used; i < bolt.Cores.Count; i++)
        {
            bolt.Cores[i].enabled = false;
            bolt.Glows[i].enabled = false;
        }
        bolt.Root.SetActive(true);
    }

    private void SetSegment(Bolt bolt, [Bridge.Ref] Vector2 a, [Bridge.Ref] Vector2 b, float scale, float widthMul)
    {
        int i = bolt.Used++;
        Place(bolt.Glows[i], a, b, glowWidth * scale * widthMul, glowColor);
        Place(bolt.Cores[i], a, b, coreWidth * scale * widthMul, coreColor);
    }

    private void Place(SpriteRenderer sr, [Bridge.Ref] Vector2 a, [Bridge.Ref] Vector2 b, float width, [Bridge.Ref] Color color)
    {
        Vector2 d = b - a;
        Vector2 size = segmentSprite.bounds.size;
        sr.enabled = true;
        sr.color = color;
        sr.transform.position = (a + b) * 0.5f;
        sr.transform.rotation = Quaternion.Euler(0, 0, Mathf.Atan2(d.y, d.x) * Mathf.Rad2Deg);
        sr.transform.localScale = new Vector3((d.magnitude + width * 0.5f) / size.x, width / size.y, 1);
    }

    private IEnumerator Play(Bolt bolt, [Bridge.Ref] Vector2 target, float scale)
    {
        yield return new WaitForSeconds(0.06f);
        bolt.Root.SetActive(false);
        yield return new WaitForSeconds(0.05f);
        Build(bolt, target, scale);
        yield return new WaitForSeconds(0.08f);

        float t = 0;
        const float fade = 0.2f;
        while (t < fade)
        {
            t += Time.deltaTime;
            float a = 1 - t / fade;
            for (int i = 0; i < bolt.Used; i++)
            {
                Color c = coreColor; c.a *= a; bolt.Cores[i].color = c;
                Color g = glowColor; g.a *= a; bolt.Glows[i].color = g;
            }
            yield return null;
        }
        bolt.Root.SetActive(false);
        pool.Enqueue(bolt);
    }
}

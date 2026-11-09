using System.Collections.Generic;
using UnityEngine;

// Gắn lúc runtime lên quái/block bị bén lửa.
// Lửa bắt đầu bằng 1 ngọn ở đúng chỗ chạm, sau đó lan dần sang các bộ phận gần nhất cho tới khi cháy toàn thân.
// Trong lúc cháy trừ giáp/máu theo thời gian (MonsterController.TakeDamage).
public class Burning : MonoBehaviour
{
    public static int ActiveCount; // số quái đang cháy (FirePower.Busy)
    private void OnEnable() { ActiveCount++; }
    private void OnDisable() { ActiveCount--; }
    private const float SpreadInterval = 0.12f; // thời gian lửa lan sang bộ phận kế tiếp
    private const float CoverStagger = 0.07f;   // các ngọn phủ kín 1 bộ phận bùng lên lần lượt
    private const float GrowTime = 0.3f;        // ngọn lửa mới bùng to dần
    private const float StartSize = 0.4f;       // kích thước ngọn đầu tiên so với kích thước đầy đủ
    private const float EmberInterval = 0.07f;  // tàn lửa bay lên
    private const float SmokeInterval = 0.18f;  // cụm khói bốc lên
    private static readonly Color EmberColor = new Color(1f, 0.85f, 0.5f, 1f);
    private static readonly Color SmokeColor = new Color(0.18f, 0.18f, 0.18f, 0.9f); // xám đậm (gần than) để nổi trên nền xám
    private float nextEmber;
    private float nextSmoke;

    private IDamageable target;
    private MonsterController monster;
    private IFireSource source;
    private float damagePerTick; // tổng damage chia đều cho các nhịp cháy
    private float damageAcc;
    private int useId; // lượt power gần nhất làm quái bén lửa
    private float interval;
    private float endTime;
    private float nextTick;
    private float nextSpread;
    private float animTime;

    private class Flame
    {
        public SpriteRenderer Sr;
        public Transform Part;
        public float Size;   // chiều cao đầy đủ (world)
        public float Born;
        public float StartK;
    }

    private readonly List<Flame> flames = new List<Flame>();
    private readonly List<Transform> parts = new List<Transform>();
    private readonly HashSet<Transform> burningParts = new HashSet<Transform>();

    public static void Ignite(IDamageable target, IFireSource source, Collider2D hit, [Bridge.Ref] Vector2 point,
                              int damage, float interval, float duration, int useId)
    {
        MonoBehaviour mb = target as MonoBehaviour;
        if (!mb) return;
        Burning b = mb.GetComponent<Burning>();
        if (!b)
        {
            b = mb.gameObject.AddComponent<Burning>();
            b.Setup(target, source);
            b.nextTick = Time.time + interval;
            b.nextSpread = Time.time + SpreadInterval;
        }
        b.damagePerTick = damage / Mathf.Max(1f, Mathf.Floor(duration / interval + 0.001f));
        b.damageAcc = 0;
        b.useId = useId;
        if (b.monster) b.monster.DrainArmor(useId, duration, interval, MonsterController.ArmorBreakFx.Smoke); // giáp tụt theo nhịp cháy, vỡ thì bốc khói
        b.interval = interval;
        b.endTime = Time.time + duration;
        // Chạm trúng bộ phận chưa cháy thì bốc cháy ngay tại chỗ chạm.
        if (hit) b.IgnitePart(hit.transform, point, true);
    }

    private void Setup(IDamageable t, IFireSource s)
    {
        target = t;
        source = s;
        monster = GetComponent<MonsterController>();
        foreach (Collider2D c in GetComponentsInChildren<Collider2D>())
            if (!c.isTrigger && !parts.Contains(c.transform)) parts.Add(c.transform);
    }

    private void IgnitePart(Transform part, Vector2 point, bool atContact)
    {
        if (!part || burningParts.Contains(part)) return;
        burningParts.Add(part);

        Collider2D col = part.GetComponent<Collider2D>();
        float ws = source.WorldScale;

        // Khung bộ phận trong không gian local (để các ngọn lửa bám theo khi ragdoll xoay).
        Vector2 center = Vector2.zero, size = Vector2.one * 0.5f;
        BoxCollider2D box = col as BoxCollider2D;
        if (box) { center = box.offset; size = box.size; }
        else if (col) { center = part.InverseTransformPoint(col.bounds.center); size = col.bounds.size; }
        Vector3 ls = part.lossyScale;
        Vector2 worldSize = new Vector2(Mathf.Abs(size.x * ls.x), Mathf.Abs(size.y * ls.y));
        float shortSide = Mathf.Min(worldSize.x, worldSize.y), longSide = Mathf.Max(worldSize.x, worldSize.y);

        // Lửa phủ kín bộ phận: ngọn cao hơn bề ngang bộ phận, rải đều dọc theo cạnh dài.
        float flameSize = Mathf.Clamp(shortSide * 1.6f, 0.4f * ws, 0.9f * ws);
        int count = Mathf.Clamp(Mathf.CeilToInt(longSide / (flameSize * 0.5f)), 1, 5);
        bool alongX = worldSize.x >= worldSize.y;
        float t0 = Time.time;

        // Ngọn đầu tiên ở đúng chỗ chạm.
        if (atContact && col)
        {
            Flame first = AddFlame(part, flameSize, t0, StartSize);
            first.Sr.transform.position = ClampToBounds(col.bounds, point);
            t0 += CoverStagger;
        }
        for (int i = 0; i < count; i++)
        {
            float k = count == 1 ? 0.5f : (float)i / (count - 1);
            Vector2 local = center;
            if (alongX) local.x += (k - 0.5f) * size.x * 0.85f;
            else local.y += (k - 0.5f) * size.y * 0.85f;
            Flame f = AddFlame(part, flameSize, t0 + i * CoverStagger, 0f);
            f.Sr.transform.localPosition = local;
        }
    }

    private Flame AddFlame(Transform part, float size, float born, float startK)
    {
        Flame f = new Flame { Part = part, Size = size, Born = born, StartK = startK };
        f.Sr = PowerBase.CreateSprite("Burn", source.Frames[0], part, 100);
        flames.Add(f);
        SetFlameScale(f, startK);
        return f;
    }

    // Điểm gần nhất trên khung bao collider (thay Collider2D.ClosestPoint vì Luna không hỗ trợ).
    private static Vector2 ClampToBounds([Bridge.Ref] Bounds b, [Bridge.Ref] Vector2 p)
    {
        return new Vector2(Mathf.Clamp(p.x, b.min.x, b.max.x), Mathf.Clamp(p.y, b.min.y, b.max.y));
    }

    private void SetFlameScale(Flame f, float k)
    {
        // Quy đổi chiều cao world sang local của bộ phận (bộ phận có thể bị scale).
        float s = f.Size * k / source.Frames[0].bounds.size.y;
        Vector3 ls = f.Part.lossyScale;
        f.Sr.transform.localScale = new Vector3(s / Mathf.Max(0.0001f, Mathf.Abs(ls.x)), s / Mathf.Max(0.0001f, Mathf.Abs(ls.y)), 1);
    }

    private void Update()
    {
        animTime += Time.deltaTime;
        int frame = (int)(animTime * source.FrameRate);
        for (int i = 0; i < flames.Count; i++)
        {
            Flame f = flames[i];
            if (!f.Sr) continue;
            f.Sr.sprite = source.Frames[(frame + i) % source.Frames.Length];
            f.Sr.transform.rotation = Quaternion.identity; // lửa luôn hướng lên dù ragdoll lộn nhào
            float k = Mathf.Lerp(f.StartK, 1f, (Time.time - f.Born) / GrowTime);
            SetFlameScale(f, k);
        }

        if (Time.time >= nextSpread && burningParts.Count < parts.Count)
        {
            nextSpread = Time.time + SpreadInterval;
            Spread();
        }
        EmitFx();

        bool dead = monster && monster.IsDead;
        if (!dead && Time.time >= nextTick)
        {
            nextTick = Time.time + interval;
            damageAcc += damagePerTick;
            int d = Mathf.FloorToInt(damageAcc + 0.001f);
            damageAcc -= d;
            if (d > 0) target.TakeDamage(d, useId);
        }
        if (Time.time >= endTime) Extinguish();
    }

    // Tàn lửa bay lên + khói xám bốc lên từ các ngọn lửa đang cháy (giống game gốc).
    private void EmitFx()
    {
        if (flames.Count == 0) return;
        float ws = source.WorldScale;
        if (source.EmberSprite && Time.time >= nextEmber)
        {
            nextEmber = Time.time + EmberInterval;
            Flame f = flames[Random.Range(0, flames.Count)];
            if (f.Sr)
            {
                Vector2 p = (Vector2)f.Sr.transform.position + new Vector2(Random.Range(-0.15f, 0.15f), Random.Range(0f, 0.25f)) * ws;
                Vector2 v = new Vector2(Random.Range(-0.3f, 0.6f), Random.Range(0.6f, 1.4f)) * ws;
                float size = Random.Range(0.07f, 0.12f) * ws;
                FireFx.Ins.Spawn(source.EmberSprite, null, 0, p, v, 0, Random.Range(0.5f, 0.9f), size, size * 0.5f, EmberColor, 102);
            }
        }
        if (source.SmokeSprite && Time.time >= nextSmoke)
        {
            nextSmoke = Time.time + SmokeInterval;
            Flame f = flames[Random.Range(0, flames.Count)];
            if (f.Sr)
            {
                Vector2 p = (Vector2)f.Sr.transform.position + new Vector2(0, f.Size * 0.4f);
                Vector2 v = new Vector2(Random.Range(0.1f, 0.4f), Random.Range(0.4f, 0.7f)) * ws;
                FireFx.Ins.Spawn(source.SmokeSprite, null, 0, p, v, 0, Random.Range(1.2f, 1.6f), 0.35f * ws, 1.0f * ws, SmokeColor, 99);
            }
        }
    }

    // Lan sang bộ phận chưa cháy gần nhất với một bộ phận đang cháy.
    private void Spread()
    {
        Transform best = null;
        float bestDist = float.MaxValue;
        foreach (Transform p in parts)
        {
            if (!p || burningParts.Contains(p)) continue;
            foreach (Transform b in burningParts)
            {
                if (!b) continue;
                float d = (p.position - b.position).sqrMagnitude;
                if (d < bestDist) { bestDist = d; best = p; }
            }
        }
        if (best) IgnitePart(best, best.position, false);
    }

    // Dập lửa ngay (vd. quái vừa vỡ giáp).
    public static void Stop(GameObject go)
    {
        Burning b = go.GetComponent<Burning>();
        if (b) b.Extinguish();
    }

    private void Extinguish()
    {
        foreach (Flame f in flames) if (f.Sr) Destroy(f.Sr.gameObject);
        flames.Clear();
        Destroy(this);
    }
}

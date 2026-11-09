using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Mây giông: chạm để gọi bão - màn hình tối lại, mưa rơi, chớp sáng. Các tia sét đầu đánh ngẫu nhiên xuống chỗ trống
// (không trúng nhân vật, không trúng quái); chỉ tia cuối đánh trúng quái của stage lúc gọi bão (trừ 1 giáp), rồi tạnh.
public class StormPower : PowerBase
{
    [SerializeField] private LightningStrike strike;
    [SerializeField] private RainEffect rain;
    [SerializeField] private int strikes = 8;   // số tia sét mỗi cơn bão, chỉ tia cuối trúng quái
    [SerializeField] private float missMargin = 0.6f; // khoảng cách mong muốn (world) từ tia trượt tới nhân vật/quái
    [SerializeField] private float groundY = -4f;
    [SerializeField] private Vector2 strikeInterval = new Vector2(0.5f, 1.2f);
    [SerializeField] private float radius = 0.8f;
    [SerializeField] private int damage = 5;
    public override void SetDamage(int value) { damage = value; }
    [SerializeField] private float darkAlpha = 0.55f;

    private bool running;
    private readonly List<Transform> targets = new List<Transform>();
    private List<MonsterController> stageMonsters = new List<MonsterController>();

    public override bool Busy => running;

    public override void PointerDown(Vector2 position)
    {
        if (running || !TryUse()) return;
        StartCoroutine(Run());
    }

    private IEnumerator Run()
    {
        running = true;
        int useId = UseId; // cả cơn bão tính là 1 lượt
        stageMonsters = GameController.Ins.StageMonsters(); // chốt quái của stage lúc gọi bão
        if (ScreenFx.Ins) ScreenFx.Ins.SetDark(darkAlpha, 0.6f);
        rain.Begin();
        yield return new WaitForSeconds(0.8f);

        for (int i = 0; i < strikes; i++)
        {
            yield return new WaitForSeconds(Random.Range(strikeInterval.x, strikeInterval.y));
            Transform target = PickTarget();
            if (!target) break; // quái stage này đã chết hết -> tạnh sớm
            bool last = i == strikes - 1;
            // Tia cuối đánh trúng quái; các tia trước đánh xuống chỗ trống (không gây damage).
            Vector2 pos = last ? (Vector2)target.position : MissPoint(target.position);
            strike.Strike(pos, radius, last ? damage : 0, Scale, useId);
            // Thỉnh thoảng chớp thêm cho không khí bão.
            if (Random.value < 0.35f && ScreenFx.Ins) ScreenFx.Ins.Flash(0.2f);
        }

        rain.Stop();
        if (ScreenFx.Ins) ScreenFx.Ins.SetDark(0, 1.2f);
        yield return new WaitForSeconds(1.2f);
        running = false;
    }

    // Điểm ngẫu nhiên trong khung hình mà cột sét không chạm nhân vật/quái/đồ vật động nào.
    // Màn hình hẹp không đủ chỗ thì nới dần khoảng cách; vẫn không có thì đánh ngẫu nhiên sát 2 mép.
    private Vector2 MissPoint(Vector2 fallback)
    {
        Rect cam = CameraRect();
        float[] margins = { missMargin, missMargin * 0.5f, 0.15f };
        foreach (float half in margins)
        {
            for (int tries = 0; tries < 20; tries++)
            {
                float x = Random.Range(cam.xMin + 0.2f, cam.xMax - 0.2f);
                if (ColumnClear(x, half, cam)) return new Vector2(x, groundY);
            }
        }
        float edge = Random.value < 0.5f ? cam.xMin + Random.Range(0.1f, 0.4f) : cam.xMax - Random.Range(0.1f, 0.4f);
        return new Vector2(edge, groundY);
    }

    private bool ColumnClear(float x, float half, Rect cam)
    {
        float top = cam.yMax + 0.5f;
        Vector2 center = new Vector2(x, (top + groundY) * 0.5f);
        Vector2 size = new Vector2(half * 2f, top - groundY);
        foreach (Collider2D col in Physics2D.OverlapBoxAll(center, size, 0))
        {
            Rigidbody2D rb = col.attachedRigidbody;
            if (rb && rb.bodyType == RigidbodyType2D.Dynamic) return false; // nhân vật, quái, đồ vật rơi được
        }
        return true;
    }

    // Quái còn sống ngẫu nhiên của stage lúc gọi bão (null nếu không còn).
    private Transform PickTarget()
    {
        targets.Clear();
        foreach (MonsterController m in stageMonsters)
        {
            if (!m || m.IsDead) continue;
            Transform body = m.transform.Find("Body");
            targets.Add(body ? body : m.transform);
        }
        return targets.Count > 0 ? targets[Random.Range(0, targets.Count)] : null;
    }
}

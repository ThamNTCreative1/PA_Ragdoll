using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Mây giông: chạm để gọi bão - màn hình tối lại, mưa rơi, chớp sáng, sét đánh ngẫu nhiên theo thời gian, sau đó tạnh.
public class StormPower : PowerBase
{
    [SerializeField] private LightningStrike strike;
    [SerializeField] private RainEffect rain;
    [SerializeField] private Transform monsterRoot; // GAME/Main - chứa các quái
    [SerializeField] private float duration = 8f;
    [SerializeField] private Vector2 strikeInterval = new Vector2(0.5f, 1.2f);
    [SerializeField] private float radius = 0.8f;
    [SerializeField] private int damage = 5;
    [SerializeField] private float darkAlpha = 0.55f;
    [SerializeField] private float groundY = -4f;
    [Range(0, 1)] [SerializeField] private float targetMonsterChance = 0.7f;

    private bool running;
    private readonly List<Transform> targets = new List<Transform>();

    public override void PointerDown([Bridge.Ref] Vector2 position)
    {
        if (running || !TryUse()) return;
        StartCoroutine(Run());
    }

    private IEnumerator Run()
    {
        running = true;
        if (ScreenFx.Ins) ScreenFx.Ins.SetDark(darkAlpha, 0.6f);
        rain.Begin();
        yield return new WaitForSeconds(0.8f);

        float end = Time.time + duration;
        while (Time.time < end)
        {
            yield return new WaitForSeconds(Random.Range(strikeInterval.x, strikeInterval.y));
            strike.Strike(PickTarget(), radius, damage, Scale);
            // Thỉnh thoảng chớp không kèm sét cho không khí bão.
            if (Random.value < 0.35f && ScreenFx.Ins) ScreenFx.Ins.Flash(0.2f);
        }

        rain.Stop();
        if (ScreenFx.Ins) ScreenFx.Ins.SetDark(0, 1.2f);
        yield return new WaitForSeconds(1.2f);
        running = false;
    }

    private Vector2 PickTarget()
    {
        Rect cam = CameraRect();
        if (Random.value < targetMonsterChance)
        {
            targets.Clear();
            foreach (MonsterController m in monsterRoot.GetComponentsInChildren<MonsterController>())
            {
                if (m.IsDead) continue;
                Transform body = m.transform.Find("Body");
                Transform t = body ? body : m.transform;
                if (cam.Contains(t.position)) targets.Add(t);
            }
            if (targets.Count > 0) return targets[Random.Range(0, targets.Count)].position;
        }
        return new Vector2(Random.Range(cam.xMin + 0.5f, cam.xMax - 0.5f), groundY + 0.3f);
    }
}

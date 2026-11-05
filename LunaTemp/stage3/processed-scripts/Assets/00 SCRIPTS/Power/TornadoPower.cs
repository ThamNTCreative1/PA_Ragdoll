using System.Collections.Generic;
using UnityEngine;

// Lốc xoáy: chạm để spawn lốc tại vị trí chạm (đặt trên mặt đất), lốc trôi dần ngẫu nhiên sang trái hoặc phải.
// Vật thể còn nằm trong lốc thì liên tục bị cuốn lên; ra khỏi lốc thì rơi xuống (chạm đất mới đứng dậy đi tiếp).
public class TornadoPower : PowerBase
{
    [SerializeField] private Sprite funnelSprite;
    [SerializeField] private float groundY = -4f;
    [SerializeField] private float height = 2.4f;
    [SerializeField] private float widthRatio = 0.6f; // bóp ngang cho lốc thon hơn
    [SerializeField] private float speed = 1.2f;
    [SerializeField] private float liftSpeed = 7f;      // vận tốc bay lên khi đang trong lốc
    [SerializeField] private float liftAccel = 40f;     // độ nhanh đạt tới vận tốc bay lên
    [SerializeField] private float carryRatio = 0.5f;   // vận tốc ngang = tỉ lệ so với tốc độ lốc (<1 để vật tụt dần ra sau lốc)
    [SerializeField] private float swirl = 1.5f;        // lắc ngang qua lại khi đang bị cuốn
    [SerializeField] private float spin = 900f;
    [SerializeField] private AudioClip liftSound;              // phát khi một vật thể bắt đầu bị cuốn
    [SerializeField] private float liftSoundInterval = 0.08f;  // khoảng cách tối thiểu giữa 2 lần phát
    private float nextLiftSound;
    [SerializeField] private int sortingOrder = 40;

    private readonly List<Tornado> active = new List<Tornado>();
    private readonly Queue<Tornado> pool = new Queue<Tornado>();

    private class Tornado
    {
        public GameObject Root;
        public SpriteRenderer[] Layers;
        public float Time;
        public float Scale;
        public float Dir; // +1 sang phải, -1 sang trái
    }

    public override void PointerDown([Bridge.Ref] Vector2 position)
    {
        if (!TryUse()) return;
        Tornado t = pool.Count > 0 ? pool.Dequeue() : Create();
        t.Scale = Scale;
        t.Time = 0;
        t.Dir = Random.value < 0.5f ? -1f : 1f;
        float h = height * t.Scale;
        t.Root.transform.position = new Vector3(position.x, groundY + h * 0.5f, 0);
        t.Root.SetActive(true);
        active.Add(t);
    }

    private Tornado Create()
    {
        Tornado t = new Tornado();
        t.Root = new GameObject("Tornado");
        t.Root.transform.SetParent(container ? container : transform, false);
        t.Layers = new SpriteRenderer[3];
        float[] alpha = { 1f, 0.6f, 0.35f };
        for (int i = 0; i < t.Layers.Length; i++)
        {
            t.Layers[i] = CreateSprite("Layer" + i, funnelSprite, t.Root.transform, sortingOrder - i);
            t.Layers[i].color = new Color(1, 1, 1, alpha[i]);
        }
        return t;
    }

    private void Update()
    {
        Rect cam = CameraRect();
        float baseScale = height / funnelSprite.bounds.size.y;
        for (int i = active.Count - 1; i >= 0; i--)
        {
            Tornado t = active[i];
            t.Time += Time.deltaTime;
            Transform tr = t.Root.transform;
            tr.position += Vector3.right * t.Dir * speed * t.Scale * Time.deltaTime;
            tr.rotation = Quaternion.Euler(0, 0, Mathf.Sin(t.Time * 3f) * 5f);

            // Hiệu ứng xoay: co giãn bề ngang + lệch lớp theo sin.
            // Root nằm dưới container nên scale local đã tự nhân theo scale của Main.
            for (int l = 0; l < t.Layers.Length; l++)
            {
                float phase = l * 2.1f;
                float sx = baseScale * (0.8f + 0.2f * Mathf.Sin(t.Time * 14f + phase));
                t.Layers[l].transform.localScale = new Vector3(sx * widthRatio * (1f + l * 0.12f), baseScale, 1);
                t.Layers[l].transform.localPosition = new Vector3(Mathf.Sin(t.Time * 6f + phase) * 0.12f, 0, 0);
            }

            // Ra khỏi mép màn hình theo hướng đi thì biến mất.
            float halfW = height * widthRatio * 0.5f * t.Scale;
            if ((t.Dir > 0 && tr.position.x - halfW > cam.xMax) || (t.Dir < 0 && tr.position.x + halfW < cam.xMin))
            {
                t.Root.SetActive(false);
                active.RemoveAt(i);
                pool.Enqueue(t);
            }
        }
    }

    // Tiếng khi một vật thể bắt đầu bị lốc cuốn lên; giới hạn tần suất khi cuốn nhiều con cùng lúc.
    private void PlayLiftSound()
    {
        if (!liftSound || Time.time < nextLiftSound) return;
        nextLiftSound = Time.time + liftSoundInterval;
        AudioController.Ins.PlaySFX(liftSound);
    }

    private readonly HashSet<Component> liftedThisStep = new HashSet<Component>();
    private readonly Dictionary<Component, Rigidbody2D[]> bodies = new Dictionary<Component, Rigidbody2D[]>();

    private void FixedUpdate()
    {
        Rect cam = CameraRect();
        liftedThisStep.Clear();
        foreach (Tornado t in active)
        {
            float h = height * t.Scale;
            Vector2 center = t.Root.transform.position;
            Vector2 size = new Vector2(h * widthRatio * 0.6f, h);
            Collider2D[] cols = Physics2D.OverlapBoxAll(center, size, 0);
            foreach (Collider2D col in cols)
            {
                // Chỉ tác động lên vật trong khung hình; chỉ cuốn (quái và cả player), không gây damage.
                float cx = col.transform.position.x;
                if (col.isTrigger || cx > cam.xMax || cx < cam.xMin) continue;
                Component target = null;
                MonsterController monster = col.GetComponentInParent<MonsterController>();
                if (monster) { if (!monster.IsDead) target = monster; }
                else target = col.GetComponentInParent<PlayerLaunch>();
                if (!target || liftedThisStep.Contains(target)) continue;
                liftedThisStep.Add(target);

                Vector2 v = LiftVelocity(t, target);
                // Chưa ở trạng thái bay (mới chạm lốc / đã đáp đất mà bị cuốn lại): chuyển sang bay (tắt đi bộ/thăng bằng) + xoay + sound.
                bool launched = monster ? monster.IsLaunched : ((PlayerLaunch)target).IsLaunched;
                if (!launched)
                {
                    if (monster) monster.Launch(v, spin);
                    else ((PlayerLaunch)target).Launch(v, spin);
                    PlayLiftSound();
                }
                // Còn trong lốc thì tiếp tục cuốn lên.
                foreach (Rigidbody2D rb in Bodies(target))
                    if (rb) rb.linearVelocity = Vector2.MoveTowards(rb.linearVelocity, v, liftAccel * t.Scale * Time.fixedDeltaTime);
            }
        }
    }

    private Vector2 LiftVelocity(Tornado t, Component target)
    {
        float wobble = Mathf.Sin(t.Time * 8f + target.GetInstanceID()) * swirl;
        return new Vector2(t.Dir * speed * carryRatio + wobble, liftSpeed) * t.Scale;
    }

    private Rigidbody2D[] Bodies(Component target)
    {
        Rigidbody2D[] rbs;
        if (!bodies.TryGetValue(target, out rbs))
        {
            rbs = target.GetComponentsInChildren<Rigidbody2D>();
            bodies[target] = rbs;
        }
        return rbs;
    }
}

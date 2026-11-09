using System.Collections.Generic;
using UnityEngine;

// Pool hạt hiệu ứng lửa dùng chung (tàn lửa bay lên, khói, ngọn lửa nhỏ trên đất).
// Tự tạo object khi dùng lần đầu; mỗi hạt là một SpriteRenderer bay theo vận tốc, đổi kích thước và mờ dần.
public class FireFx : MonoBehaviour
{
    private static FireFx ins;
    public static FireFx Ins
    {
        get
        {
            if (!ins) ins = new GameObject("FireFx").AddComponent<FireFx>();
            return ins;
        }
    }

    private class Particle
    {
        public SpriteRenderer Sr;
        public Vector2 Velocity;
        public float Gravity;
        public float Age, Life;
        public float Size0, Size1;
        public float Alpha0;
        public Sprite[] Frames;
        public float FrameRate;
        public int FrameOffset;
    }

    private readonly List<Particle> active = new List<Particle>();
    private readonly Queue<Particle> pool = new Queue<Particle>();

    // size0/size1: chiều cao world lúc sinh ra / lúc tắt. frames != null thì chạy hoạt ảnh.
    public void Spawn(Sprite sprite, Sprite[] frames, float frameRate, Vector2 position, Vector2 velocity, float gravity,
                      float life, float size0, float size1, Color color, int sortingOrder)
    {
        Sprite first = frames != null && frames.Length > 0 ? frames[0] : sprite;
        if (!first) return;
        Particle p = pool.Count > 0 ? pool.Dequeue() : new Particle { Sr = PowerBase.CreateSprite("Fx", first, transform, sortingOrder) };
        p.Sr.sprite = first;
        p.Sr.sortingOrder = sortingOrder;
        p.Sr.color = color;
        p.Sr.transform.position = position;
        p.Velocity = velocity;
        p.Gravity = gravity;
        p.Age = 0;
        p.Life = Mathf.Max(0.01f, life);
        p.Size0 = size0;
        p.Size1 = size1;
        p.Alpha0 = color.a;
        p.Frames = frames;
        p.FrameRate = frameRate;
        p.FrameOffset = frames != null ? Random.Range(0, frames.Length) : 0;
        Apply(p, 0);
        p.Sr.gameObject.SetActive(true);
        active.Add(p);
    }

    private void Update()
    {
        float dt = Time.deltaTime;
        for (int i = active.Count - 1; i >= 0; i--)
        {
            Particle p = active[i];
            p.Age += dt;
            float k = p.Age / p.Life;
            if (k >= 1)
            {
                p.Sr.gameObject.SetActive(false);
                active.RemoveAt(i);
                pool.Enqueue(p);
                continue;
            }
            p.Velocity.y += p.Gravity * dt;
            p.Sr.transform.position += (Vector3)(p.Velocity * dt);
            Apply(p, k);
        }
    }

    private static void Apply(Particle p, float k)
    {
        if (p.Frames != null && p.Frames.Length > 0)
            p.Sr.sprite = p.Frames[(p.FrameOffset + (int)(p.Age * p.FrameRate)) % p.Frames.Length];
        float h = Mathf.Lerp(p.Size0, p.Size1, k);
        p.Sr.transform.localScale = Vector3.one * h / p.Sr.sprite.bounds.size.y;
        Color c = p.Sr.color;
        c.a = p.Alpha0 * (1f - k * k); // mờ dần, nhanh hơn về cuối
        p.Sr.color = c;
    }
}

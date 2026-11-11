using System.Collections.Generic;
using UnityEngine;

namespace Game.Gameplay
{
    // Central shard lifecycle: pooled, budgeted spawns, single fade loop, live cap. Auto-created on first use.
    public class FragmentManager : MonoBehaviour
    {
        private const int MaxSpawnsPerFrame = 24;
        private const int MaxLiveShards = 150;
        private const float EarlyFadeSeconds = 0.2f;
        private const int DebrisLayer = 12; // "Debris" — collides with the world, nothing else
        // Creature rigs: CreatureNormal, CreatureLimb, CreatureZombie, CreatureArm.
        private static readonly int[] CreatureLayers = { 8, 9, 10, 11 };

        public enum ColliderKind { None, Box, Polygon }

        public struct ShardRequest
        {
            public Sprite sprite;
            public Vector3 position;
            public Vector3 scale;
            public int sortingOrder;
            public Vector2 velocity;
            public float torque;
            public float mass;
            public float gravityScale;
            public ColliderKind collider;
            public Vector2 boxSize;
            public Vector2[] polygonPoints;
            public float fadeDelay;
            public float fadeDuration;
        }

        private class Shard
        {
            public GameObject go;
            public Transform transform;
            public SpriteRenderer renderer;
            public Rigidbody2D body;
            public BoxCollider2D box;
            public PolygonCollider2D polygon;
            public float age;
            public float fadeDelay;
            public float fadeDuration;
        }

        private static FragmentManager _instance;

        public static FragmentManager Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new GameObject("FragmentManager").AddComponent<FragmentManager>();
                    Physics2D.IgnoreLayerCollision(DebrisLayer, DebrisLayer, true);

                    // Shards are cosmetic; colliding them against creature rigs (thousands of contact pairs) ate 52ms of an 83ms frame.
                    for (int i = 0; i < CreatureLayers.Length; i++)
                        Physics2D.IgnoreLayerCollision(DebrisLayer, CreatureLayers[i], true);
                }
                return _instance;
            }
        }

        private readonly Queue<ShardRequest> _pending = new Queue<ShardRequest>();
        private readonly List<Shard> _live = new List<Shard>();
        private readonly Stack<Shard> _pool = new Stack<Shard>();
        private int _spawnedThisFrame;

        public void Enqueue(in ShardRequest request)
        {
            if (_spawnedThisFrame < MaxSpawnsPerFrame) SpawnNow(request);
            else _pending.Enqueue(request);
        }

        private void Update()
        {
            _spawnedThisFrame = 0;
            while (_pending.Count > 0 && _spawnedThisFrame < MaxSpawnsPerFrame)
                SpawnNow(_pending.Dequeue());

            float dt = Time.deltaTime;
            for (int i = _live.Count - 1; i >= 0; i--)
            {
                var shard = _live[i];
                shard.age += dt;
                TunnelGuard.Apply(shard.body);
                float fadeTime = shard.age - shard.fadeDelay;
                if (fadeTime < 0f) continue;

                float alpha = 1f - fadeTime / Mathf.Max(0.01f, shard.fadeDuration);
                if (alpha <= 0f)
                {
                    Recycle(i);
                    continue;
                }

                var color = shard.renderer.color;
                color.a = alpha;
                shard.renderer.color = color;
            }
        }

        private void SpawnNow(in ShardRequest req)
        {
            _spawnedThisFrame++;

            // Bounded physics load: past the cap, start fading the oldest shard right now.
            if (_live.Count >= MaxLiveShards)
            {
                var oldest = _live[0];
                if (oldest.age < oldest.fadeDelay)
                {
                    oldest.fadeDelay = oldest.age;
                    oldest.fadeDuration = EarlyFadeSeconds;
                }
            }

            var shard = _pool.Count > 0 ? _pool.Pop() : CreateShard();
            shard.transform.SetPositionAndRotation(req.position, Quaternion.identity);
            shard.transform.localScale = req.scale;
            shard.renderer.sprite = req.sprite;
            shard.renderer.sortingOrder = req.sortingOrder;
            shard.renderer.color = Color.white;

            shard.box.enabled = req.collider == ColliderKind.Box;
            if (shard.box.enabled) shard.box.size = req.boxSize;
            shard.polygon.enabled = req.collider == ColliderKind.Polygon;
            if (shard.polygon.enabled) shard.polygon.points = req.polygonPoints;

            shard.go.SetActive(true);
            // Re-seat the BODY, not just the transform — an interpolating body would streak from where it last died.
            shard.body.position = req.position;
            shard.body.rotation = 0f;
            shard.body.mass = req.mass;
            shard.body.gravityScale = req.gravityScale;
            shard.body.linearVelocity = req.velocity;
            shard.body.angularVelocity = 0f;
            shard.body.AddTorque(req.torque, ForceMode2D.Impulse);
            TunnelGuard.Apply(shard.body);

            shard.age = 0f;
            shard.fadeDelay = req.fadeDelay;
            shard.fadeDuration = req.fadeDuration;
            _live.Add(shard);
        }

        private Shard CreateShard()
        {
            var go = new GameObject("Shard") { layer = DebrisLayer };
            go.transform.SetParent(transform, false);
            var shard = new Shard
            {
                go = go,
                transform = go.transform,
                renderer = go.AddComponent<SpriteRenderer>(),
                body = go.AddComponent<Rigidbody2D>(),
                box = go.AddComponent<BoxCollider2D>(),
                polygon = go.AddComponent<PolygonCollider2D>(),
            };

            shard.box.enabled = false;
            shard.polygon.enabled = false;
            go.SetActive(false);
            return shard;
        }

        private void Recycle(int index)
        {
            var shard = _live[index];
            _live.RemoveAt(index);
            shard.go.SetActive(false);
            _pool.Push(shard);
        }
    }
}

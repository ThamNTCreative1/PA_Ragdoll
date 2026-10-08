using System.Collections.Generic;
using UnityEngine;

namespace MelonAd
{
    /// <summary>
    /// Root of the Level_0 prefab instance placed in the scene (Canvas/World).
    /// Captures the initial state in Awake and restores it on retry, so the level is never cloned at runtime.
    /// </summary>
    public class LevelRefs : MonoBehaviour
    {
        public Ragdoll man;
        public Rifle rifle;
        public FlameThrower flameThrower;
        public Pin tutorPin;
        public Transform dynamicRoot;

        class TState
        {
            public Transform t, parent;
            public Vector3 pos, scale;
            public Quaternion rot;
            public bool active;
        }

        readonly List<TState> transforms = new List<TState>();
        readonly List<SpriteRenderer> renderers = new List<SpriteRenderer>();
        readonly List<bool> rendererEnabled = new List<bool>();
        readonly List<Color> rendererColor = new List<Color>();
        readonly List<Collider2D> colliders = new List<Collider2D>();
        readonly List<bool> colliderEnabled = new List<bool>();
        Rigidbody2D[] bodies;

        bool initialized;

        /// <summary>Called by GameManager.Start: applies the selected character, then snapshots the level.</summary>
        public void Init()
        {
            if (initialized) return;
            initialized = true;
            CharacterSelector selector = GetComponentInChildren<CharacterSelector>(true);
            if (selector != null)
            {
                Ragdoll chosen = selector.Apply();
                if (chosen != null) man = chosen;
            }
            Capture();
        }

        void Capture()
        {
            Transform[] all = GetComponentsInChildren<Transform>(true);
            for (int i = 0; i < all.Length; i++)
            {
                if (all[i] == transform) continue;
                TState s = new TState();
                s.t = all[i];
                s.parent = all[i].parent;
                s.pos = all[i].localPosition;
                s.rot = all[i].localRotation;
                s.scale = all[i].localScale;
                s.active = all[i].gameObject.activeSelf;
                transforms.Add(s);
            }
            SpriteRenderer[] srs = GetComponentsInChildren<SpriteRenderer>(true);
            for (int i = 0; i < srs.Length; i++)
            {
                renderers.Add(srs[i]);
                rendererEnabled.Add(srs[i].enabled);
                rendererColor.Add(srs[i].color);
            }
            Collider2D[] cols = GetComponentsInChildren<Collider2D>(true);
            for (int i = 0; i < cols.Length; i++)
            {
                colliders.Add(cols[i]);
                colliderEnabled.Add(cols[i].enabled);
            }
            bodies = GetComponentsInChildren<Rigidbody2D>(true);
        }

        /// <summary>Back to the exact edit-time state (pins, spikes, ragdoll, guns, pools).</summary>
        public void ResetLevel()
        {
            if (!initialized) { Init(); return; }
            Pin[] pins = GetComponentsInChildren<Pin>(true);
            for (int i = 0; i < pins.Length; i++) pins[i].ResetState();
            Spike[] spikes = GetComponentsInChildren<Spike>(true);
            for (int i = 0; i < spikes.Length; i++) spikes[i].ResetState();
            Acid[] acids = GetComponentsInChildren<Acid>(true);
            for (int i = 0; i < acids.Length; i++) acids[i].ResetState();
            if (rifle != null) rifle.ResetState();
            if (flameThrower != null) flameThrower.ResetState();
            if (man != null) man.ResetState();

            for (int i = 0; i < transforms.Count; i++)
            {
                TState s = transforms[i];
                if (s.t == null) continue;
                if (s.t.parent != s.parent) s.t.SetParent(s.parent, false);
                s.t.localPosition = s.pos;
                s.t.localRotation = s.rot;
                s.t.localScale = s.scale;
            }
            for (int i = 0; i < transforms.Count; i++)
            {
                TState s = transforms[i];
                if (s.t != null && s.t.gameObject.activeSelf != s.active) s.t.gameObject.SetActive(s.active);
            }
            for (int i = 0; i < renderers.Count; i++)
            {
                if (renderers[i] == null) continue;
                renderers[i].enabled = rendererEnabled[i];
                renderers[i].color = rendererColor[i];
            }
            for (int i = 0; i < colliders.Count; i++)
            {
                if (colliders[i] != null) colliders[i].enabled = colliderEnabled[i];
            }
            for (int i = 0; i < bodies.Length; i++)
            {
                Rigidbody2D rb = bodies[i];
                if (rb == null) continue;
                rb.position = rb.transform.position;
                rb.rotation = rb.transform.eulerAngles.z;
                rb.linearVelocity = Vector2.zero;
                rb.angularVelocity = 0f;
                rb.WakeUp();
            }
        }
    }
}

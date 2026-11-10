using System.Collections;
using UnityEngine;

namespace MelonAd
{
    /// <summary>
    /// Monster pit (replaces the acid pool in Main_SSP): a horde of zombies stands on the pit floor with
    /// their arms raised, reaching for the man. When he falls in, the closest one stretches up, grabs him
    /// and chews the body part by part. The trigger collider on this object is the "fall in" zone.
    /// Each monster root sits at its feet and has children: "Base" (legs+body+head), "ArmL", "ArmR".
    /// </summary>
    public class MonsterPit : MonoBehaviour
    {
        [Tooltip("Monster roots (pivot at the feet). The first 'eaters' entries are the front row.")]
        public Transform[] monsters;
        [Tooltip("How many entries of 'monsters' are front-row eaters.")]
        public int eaters = 4;

        [Header("Idle (feet stay planted)")]
        public float idleSpeed = 2.2f;
        public float idleSway = 3f;
        public float armWave = 14f;
        public float breathe = 0.025f;

        [Header("Eat")]
        public float reachTime = 0.22f;
        [Tooltip("Vertical stretch while grabbing (1 = none).")]
        public float reachStretch = 1.18f;
        public float chewTime = 1.3f;
        public float settleTime = 0.5f;
        [Tooltip("Pull speed of the victim's parts towards the monster mouth.")]
        public float pullSpeed = 9f;

        class Mon
        {
            public Transform root, armL, armR;
            public SpriteRenderer body;
            public Vector3 scale0;
            public Quaternion rot0, armL0, armR0;
            public float phase;
        }

        Mon[] mons;
        float time;
        int eater = -1;
        bool eating;
        Coroutine routine;

        void Awake()
        {
            int n = monsters != null ? monsters.Length : 0;
            mons = new Mon[n];
            for (int i = 0; i < n; i++)
            {
                Transform t = monsters[i];
                if (t == null) continue;
                Mon m = new Mon();
                m.root = t;
                m.armL = t.Find("ArmL");
                m.armR = t.Find("ArmR");
                Transform b = t.Find("Base");
                m.body = b != null ? b.GetComponent<SpriteRenderer>() : t.GetComponentInChildren<SpriteRenderer>();
                m.scale0 = t.localScale;
                m.rot0 = t.localRotation;
                if (m.armL != null) m.armL0 = m.armL.localRotation;
                if (m.armR != null) m.armR0 = m.armR.localRotation;
                m.phase = i * 1.37f;
                mons[i] = m;
            }
        }

        void Update()
        {
            float dt = Mathf.Min(Time.deltaTime, 0.05f);
            time += dt;
            float excite = eating ? 2.2f : 1f; // the horde gets excited while one is eating
            for (int i = 0; i < mons.Length; i++)
            {
                Mon m = mons[i];
                if (m == null || i == eater) continue;
                float w = time * idleSpeed * excite + m.phase;
                m.root.localRotation = m.rot0 * Quaternion.Euler(0f, 0f, idleSway * Mathf.Sin(w * 0.7f));
                m.root.localScale = new Vector3(m.scale0.x, m.scale0.y * (1f + breathe * Mathf.Sin(w)), m.scale0.z);
                WaveArms(m, w, armWave * (eating ? 1.6f : 1f));
            }
        }

        static void WaveArms(Mon m, float w, float amp)
        {
            if (m.armL != null) m.armL.localRotation = m.armL0 * Quaternion.Euler(0f, 0f, amp * Mathf.Sin(w * 1.6f));
            if (m.armR != null) m.armR.localRotation = m.armR0 * Quaternion.Euler(0f, 0f, -amp * Mathf.Sin(w * 1.6f + 1.3f));
        }

        /// <summary>Called by the Ragdoll when one of its parts enters the pit.</summary>
        public void Eat(Ragdoll victim, RagdollPart part)
        {
            if (eating || victim == null || mons.Length == 0) return;
            eating = true;
            eater = Closest(part.transform.position.x);
            routine = StartCoroutine(EatRoutine(victim, part));
        }

        int Closest(float x)
        {
            int best = 0;
            float bestD = float.MaxValue;
            int n = Mathf.Min(Mathf.Max(1, eaters), mons.Length);
            for (int i = 0; i < n; i++)
            {
                if (mons[i] == null) continue;
                float d = Mathf.Abs(mons[i].root.position.x - x);
                if (d < bestD) { bestD = d; best = i; }
            }
            return best;
        }

        /// <summary>Approximate mouth position of the eating monster (lower half of the head).</summary>
        Vector2 Mouth()
        {
            Mon m = mons[eater];
            if (m.body != null)
            {
                Bounds b = m.body.bounds;
                return new Vector2(b.center.x, b.max.y - b.size.y * 0.3f);
            }
            return m.root.position;
        }

        IEnumerator EatRoutine(Ragdoll victim, RagdollPart first)
        {
            Mon m = mons[eater];
            Transform tr = m.root;
            Vector3 s0 = m.scale0;
            float lean = Mathf.Clamp((first.transform.position.x - tr.position.x) * -6f, -12f, 12f);
            Quaternion r1 = m.rot0 * Quaternion.Euler(0f, 0f, lean);
            if (AudioManager.I != null) AudioManager.I.PlayOverlap(Sfx.Hurt);

            // 1. stretch up (feet planted), arms reach in
            float t = 0f;
            while (t < 1f)
            {
                t += Time.deltaTime / Mathf.Max(0.01f, reachTime);
                if (t > 1f) t = 1f;
                float k = 1f - (1f - t) * (1f - t);
                tr.localScale = new Vector3(s0.x, s0.y * Mathf.Lerp(1f, reachStretch, k), s0.z);
                tr.localRotation = Quaternion.Slerp(m.rot0, r1, k);
                Grab(m, k);
                Pull(victim, 0.6f);
                yield return null;
            }
            if (FxManager.I != null) FxManager.I.Blood(first.transform.position, 20);

            // 2. chew: parts disappear one by one with blood
            RagdollPart[] parts = victim.parts;
            int eaten = 0;
            t = 0f;
            float nextBite = 0f;
            while (t < 1f)
            {
                t += Time.deltaTime / Mathf.Max(0.01f, chewTime);
                if (t > 1f) t = 1f;
                float chomp = Mathf.Abs(Mathf.Sin(t * Mathf.PI * 7f));
                tr.localScale = new Vector3(s0.x * (1f + 0.08f * chomp), s0.y * (reachStretch - 0.1f * chomp), s0.z);
                tr.localRotation = r1 * Quaternion.Euler(0f, 0f, 4f * Mathf.Sin(t * Mathf.PI * 9f));
                Grab(m, 1f - 0.3f * chomp);
                Pull(victim, 1f);
                if (t >= nextBite && parts != null && eaten < parts.Length)
                {
                    nextBite += 1f / (parts.Length + 1);
                    RagdollPart p = parts[eaten++];
                    if (p != null)
                    {
                        Hide(p);
                        if (FxManager.I != null) FxManager.I.Blood(p.transform.position, 6);
                        if (AudioManager.I != null && eaten % 3 == 1) AudioManager.I.PlayOverlap(Sfx.Doc);
                    }
                }
                yield return null;
            }
            if (parts != null) for (int i = eaten; i < parts.Length; i++) if (parts[i] != null) Hide(parts[i]);
            SpriteRenderer[] rest = victim.GetComponentsInChildren<SpriteRenderer>();
            for (int i = 0; i < rest.Length; i++) rest[i].enabled = false;

            // 3. settle back to the idle pose
            Vector3 sUp = tr.localScale;
            Quaternion rUp = tr.localRotation;
            t = 0f;
            while (t < 1f)
            {
                t += Time.deltaTime / Mathf.Max(0.01f, settleTime);
                if (t > 1f) t = 1f;
                tr.localScale = Vector3.Lerp(sUp, s0, t);
                tr.localRotation = Quaternion.Slerp(rUp, m.rot0, t);
                Grab(m, 1f - t);
                yield return null;
            }
            eater = -1;
            eating = false;
            routine = null;
        }

        /// <summary>k = 0: arms in the raised idle pose, k = 1: arms closed in over the head (grabbing).</summary>
        static void Grab(Mon m, float k)
        {
            if (m.armL != null) m.armL.localRotation = m.armL0 * Quaternion.Euler(0f, 0f, -40f * k);
            if (m.armR != null) m.armR.localRotation = m.armR0 * Quaternion.Euler(0f, 0f, 40f * k);
        }

        void Pull(Ragdoll victim, float strength)
        {
            if (victim == null || victim.parts == null) return;
            Vector2 mouth = Mouth();
            for (int i = 0; i < victim.parts.Length; i++)
            {
                RagdollPart p = victim.parts[i];
                if (p == null || p.rb == null) continue;
                Vector2 d = mouth - p.rb.position;
                p.rb.linearVelocity = Vector2.Lerp(p.rb.linearVelocity, d * pullSpeed * 0.3f, 0.25f * strength);
            }
        }

        static void Hide(RagdollPart p)
        {
            SpriteRenderer[] srs = p.GetComponentsInChildren<SpriteRenderer>();
            for (int i = 0; i < srs.Length; i++) srs[i].enabled = false;
            if (p.skinExtras != null)
                for (int i = 0; i < p.skinExtras.Length; i++) if (p.skinExtras[i] != null) p.skinExtras[i].enabled = false;
            if (p.burntExtras != null)
                for (int i = 0; i < p.burntExtras.Length; i++) if (p.burntExtras[i] != null) p.burntExtras[i].enabled = false;
        }

        public void ResetState()
        {
            if (routine != null) { StopCoroutine(routine); routine = null; }
            eating = false;
            eater = -1;
            if (mons == null) return;
            for (int i = 0; i < mons.Length; i++)
            {
                Mon m = mons[i];
                if (m == null) continue;
                m.root.localScale = m.scale0;
                m.root.localRotation = m.rot0;
                if (m.armL != null) m.armL.localRotation = m.armL0;
                if (m.armR != null) m.armR.localRotation = m.armR0;
            }
        }
    }
}

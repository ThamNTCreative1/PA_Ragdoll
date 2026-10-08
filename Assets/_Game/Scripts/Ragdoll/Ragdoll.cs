using UnityEngine;

namespace MelonAd
{
    /// <summary>
    /// 14-part ragdoll (PROJECT.PRT.MAN in the original).
    /// Alive: per-step impulses keep it upright (head up 25, feet down 18).
    /// Deaths: acid/spike = skin dissolves to skeleton, fire = skin burns to charred, bullet = blood.
    /// The dissolve is ONE SpriteMask circle growing from the hit part (skin sprites are VisibleOutsideMask).
    /// </summary>
    public class Ragdoll : MonoBehaviour
    {
        public RagdollPart[] parts;
        public RagdollPart head, leftFoot, rightFoot;
        public SpriteMask hole;
        public float holeDiameter = 1.28f;
        public float headLift = 25f;
        public float footPull = 18f;

        public bool Dead { get; private set; }

        bool kisDead;
        float smokeTimer;
        float holeT = -1f;

        void FixedUpdate()
        {
            if (Dead) return;
            head.rb.AddForce(new Vector2(0f, headLift), ForceMode2D.Impulse);
            leftFoot.rb.AddForce(new Vector2(0f, -footPull), ForceMode2D.Impulse);
            rightFoot.rb.AddForce(new Vector2(0f, -footPull), ForceMode2D.Impulse);
        }

        void Update()
        {
            float dt = Mathf.Min(Time.deltaTime, 0.05f);
            smokeTimer -= dt;
            if (holeT >= 0f && holeT < 1f)
            {
                holeT += dt / 1.5f;
                if (holeT > 1f) holeT = 1f;
                float s = 13.8f * holeT / holeDiameter; // radius 690px at t=1
                hole.transform.localScale = new Vector3(s, s, 1f);
            }
        }

        [Tooltip("Static colliders on these layers (pins, walls) block flame / bullet hits.")]
        public LayerMask blockMask = 1 << 7;

        public void OnPartCollision(RagdollPart p, Collision2D c)
        {
            Collider2D other = c.collider;
            if (other.GetComponent<FlameParticle>() != null)
            {
                if (!Blocked(other, c, p)) Burn(p);
            }
            else if (other.GetComponent<Spike>() != null)
            {
                Melt(p);
            }
            else if (other.GetComponent<Bullet>() != null)
            {
                if (!Blocked(other, c, p)) Shot(p);
            }
        }

        /// <summary>
        /// True if a static pin / wall lies between the hazard centre and the contact point.
        /// That only happens when a dragged body part was pushed into (or through) a pin, so the hit is ignored.
        /// </summary>
        bool Blocked(Collider2D hazard, Collision2D c, RagdollPart p)
        {
            Vector2 from = hazard.attachedRigidbody != null ? hazard.attachedRigidbody.position : (Vector2)hazard.transform.position;
            Vector2 to = c.contactCount > 0 ? c.GetContact(0).point : p.rb.position;
            RaycastHit2D[] hits = Physics2D.LinecastAll(from, to, blockMask);
            for (int i = 0; i < hits.Length; i++)
            {
                Collider2D h = hits[i].collider;
                if (h == null || h == hazard || h.isTrigger) continue;
                Rigidbody2D rb = h.attachedRigidbody;
                if (rb != null && rb.bodyType == RigidbodyType2D.Dynamic) continue; // chair / spikes do not shield
                return true;
            }
            return false;
        }

        public void OnPartTrigger(RagdollPart p, Collider2D other)
        {
            if (other.GetComponent<Acid>() != null) Melt(p);
            else if (other.GetComponent<ExitZone>() != null && GameManager.I != null) GameManager.I.OnExitReached();
        }

        void Burn(RagdollPart p)
        {
            AudioManager.I.PlayIfIdle(Sfx.Jar);
            if (smokeTimer < 0f)
            {
                smokeTimer = 0.5f;
                FxManager.I.BurnPuff(p.transform.position);
                for (int i = 0; i < parts.Length; i++) FxManager.I.BurnPuff(parts[i].transform.position);
            }
            if (kisDead) return;
            kisDead = true;
            if (!AudioManager.I.IsPlaying(Sfx.Ohog) && !Dead) AudioManager.I.Play(Sfx.Ohog);
            Die();
            for (int i = 0; i < parts.Length; i++)
            {
                parts[i].ShowBurnt(true);
                parts[i].ShowSkeleton(false);
            }
            StartHole(p);
        }

        void Melt(RagdollPart p)
        {
            if (kisDead) return;
            kisDead = true;
            AudioManager.I.PlayIfIdle(Sfx.Doc);
            Die();
            for (int i = 0; i < parts.Length; i++)
            {
                parts[i].ShowBurnt(false);
                parts[i].ShowSkeleton(true);
            }
            StartHole(p);
        }

        void Shot(RagdollPart p)
        {
            if (!kisDead) FxManager.I.Blood(p.transform.position, 15);
            if (!Dead)
            {
                AudioManager.I.PlayIfIdle(Sfx.Hurt);
                Die();
            }
        }

        void StartHole(RagdollPart p)
        {
            hole.transform.SetParent(p.transform, false);
            hole.transform.localPosition = Vector3.zero;
            hole.transform.localScale = Vector3.zero;
            hole.gameObject.SetActive(true);
            holeT = 0f;
        }

        void Die()
        {
            if (Dead) return;
            Dead = true;
            if (GameManager.I != null) GameManager.I.OnManDied();
        }

        public void ResetState()
        {
            Dead = false;
            kisDead = false;
            smokeTimer = 0f;
            holeT = -1f;
        }
    }
}

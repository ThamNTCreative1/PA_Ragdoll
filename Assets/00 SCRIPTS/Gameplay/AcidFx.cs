using System.Collections.Generic;
using UnityEngine;

// Light effects without particle systems: flying tiles of a shattered man, the soul rising, the hit ring, and the blood
// that bursts out when the sword kills a man (pixel drops: burst from the hit point, fall, fade, vanish in the acid).
public class AcidFx : MonoBehaviour
{
    public AcidGhost ghostPrefab;
    public AcidHit hitPrefab;
    public Transform root;
    public float flingTime = 0.7f;

    [Header("Blood (sword kill)")]
    [Tooltip("One blood drop: a SpriteRenderer prefab with a white square sprite (tinted at runtime).")]
    public SpriteRenderer bloodPrefab;
    public int bloodCount = 60;
    [Tooltip("Lifetime of a drop (s).")]
    public float bloodTime = 1.2f;
    [Tooltip("Drop size range (world units, square).")]
    public Vector2 bloodSize = new Vector2(0.05f, 0.14f);
    [Tooltip("Burst speed range (world units/s).")]
    public Vector2 bloodSpeed = new Vector2(3f, 9f);
    [Tooltip("How much of the sword's velocity the blood takes.")]
    public float bloodInherit = 0.35f;
    public Color bloodDark = new Color(0.45f, 0.02f, 0.02f, 1f);
    public Color bloodLight = new Color(0.9f, 0.08f, 0.06f, 1f);
    public int bloodOrder = 470;

    [Header("+1 (sword kill)")]
    [Tooltip("The \"+1\" popup: a SpriteRenderer prefab (its scale is the final size).")]
    public SpriteRenderer plusOnePrefab;
    public float plusOneTime = 0.9f;
    [Tooltip("How far it rises (world units).")]
    public float plusOneRise = 1.2f;

    private class Piece
    {
        public Transform tr;
        public SpriteRenderer sr;
        public Vector2 vel;
        public float spin, t;
        public Vector3 start;   // +1: spawn point
        public float scale;     // +1: final scale
    }

    private readonly List<Piece> pieces = new List<Piece>();
    private readonly List<Piece> drops = new List<Piece>();
    private readonly List<Piece> pops = new List<Piece>();
    [SerializeField] private AcidGame game;

    // Blood burst at the hit point; push = sword velocity (the blood is flung along the swing).
    public void Blood(Vector3 pos, Vector2 push)
    {
        if (!bloodPrefab) return;
        Transform parent = root ? root : transform;
        Vector2 inherit = push * bloodInherit;
        if (inherit.magnitude > 5f) inherit = inherit.normalized * 5f;
        for (int i = 0; i < bloodCount; i++)
        {
            SpriteRenderer sr = Instantiate(bloodPrefab, pos, Quaternion.identity, parent);
            float size = Random.Range(bloodSize.x, bloodSize.y);
            Vector2 spriteSize = sr.sprite ? (Vector2)sr.sprite.bounds.size : Vector2.one;
            sr.transform.localScale = new Vector3(size / Mathf.Max(0.001f, spriteSize.x), size / Mathf.Max(0.001f, spriteSize.y), 1f);
            sr.color = Color.Lerp(bloodDark, bloodLight, Random.value);
            sr.sortingOrder = bloodOrder;
            float a = Random.Range(0f, Mathf.PI * 2f);
            Vector2 dir = new Vector2(Mathf.Cos(a), Mathf.Sin(a) * 0.7f + 0.5f).normalized;
            Piece p = new Piece();
            p.tr = sr.transform; p.sr = sr;
            p.vel = dir * Random.Range(bloodSpeed.x, bloodSpeed.y) + inherit;
            p.t = Random.Range(0f, 0.3f);
            drops.Add(p);
        }
    }

    public void Fling(SpriteRenderer sr)
    {
        Piece p = new Piece();
        p.tr = sr.transform;
        p.sr = sr;
        p.tr.SetParent(root ? root : transform, true);
        p.vel = new Vector2(Random.Range(-3f, 3f), Random.Range(3f, 6f));
        p.spin = Random.Range(-720f, 720f);
        pieces.Add(p);
    }

    // "+1" bursting out where a man was killed: pops up big, settles, rises and fades.
    public void PlusOne(Vector3 pos)
    {
        if (!plusOnePrefab) return;
        SpriteRenderer sr = Instantiate(plusOnePrefab, pos, Quaternion.identity, root ? root : transform);
        Piece p = new Piece();
        p.tr = sr.transform; p.sr = sr;
        p.start = pos;
        p.scale = sr.transform.localScale.x;
        sr.transform.localScale = Vector3.zero;
        pops.Add(p);
    }

    public void Ghost(Sprite sprite, Vector3 pos)
    {
        if (!ghostPrefab || !sprite) return;
        AcidGhost g = Instantiate(ghostPrefab, pos, Quaternion.identity, root ? root : transform);
        g.Play(sprite);
    }

    public void Hit(Vector3 pos)
    {
        if (!hitPrefab) return;
        Instantiate(hitPrefab.gameObject, pos, Quaternion.identity, root ? root : transform);
    }

    private void Update()
    {
        float dt = Time.deltaTime;
        for (int i = pieces.Count - 1; i >= 0; i--)
        {
            Piece p = pieces[i];
            if (!p.tr) { pieces.RemoveAt(i); continue; }
            p.t += dt / flingTime;
            p.vel.y -= 14f * dt;
            p.tr.position += (Vector3)(p.vel * dt);
            p.tr.Rotate(0, 0, p.spin * dt);
            Color c = p.sr.color; c.a = 1 - p.t; p.sr.color = c;
            if (p.t >= 1) { Destroy(p.tr.gameObject); pieces.RemoveAt(i); }
        }
        for (int i = pops.Count - 1; i >= 0; i--)
        {
            Piece p = pops[i];
            if (!p.tr) { pops.RemoveAt(i); continue; }
            p.t += dt / plusOneTime;
            float t = p.t;
            // pop: 0 -> 1.4 in the first 15%, back to 1 by 30%
            float pop = t < 0.15f ? Mathf.Lerp(0f, 1.4f, t / 0.15f) : t < 0.3f ? Mathf.Lerp(1.4f, 1f, (t - 0.15f) / 0.15f) : 1f;
            p.tr.localScale = new Vector3(p.scale * pop, p.scale * pop, 1f);
            float rise = plusOneRise * (1f - (1f - t) * (1f - t));
            p.tr.position = new Vector3(p.start.x, p.start.y + rise, p.start.z);
            Color c = p.sr.color; c.a = t < 0.6f ? 1f : Mathf.Clamp01((1f - t) / 0.4f); p.sr.color = c;
            if (p.t >= 1) { Destroy(p.tr.gameObject); pops.RemoveAt(i); }
        }
        for (int i = drops.Count - 1; i >= 0; i--)
        {
            Piece p = drops[i];
            if (!p.tr) { drops.RemoveAt(i); continue; }
            p.t += dt / bloodTime;
            p.vel.y -= 14f * dt;
            p.vel.x *= 1f - 1.5f * dt;
            p.tr.position += (Vector3)(p.vel * dt);
            Color c = p.sr.color; c.a = Mathf.Clamp01((1 - p.t) * 2f); p.sr.color = c;
            bool inAcid = game != null && game.InAcid(p.tr.position);
            if (p.t >= 1 || inAcid) { Destroy(p.tr.gameObject); drops.RemoveAt(i); }
        }
    }
}

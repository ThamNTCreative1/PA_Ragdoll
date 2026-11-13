using System;
using System.Collections.Generic;
using UnityEngine;

// One SSP ragdoll (torso, head, 2 arms, 2 legs; RSNM rig layout). Each part is drawn as 16 px tiles so the acid can eat it piece by piece
// (like the "Stop Platform" playable). Standing = head pulled up + feet pulled down (the source's avk_force).
public class AcidMan : MonoBehaviour
{
    [Serializable]
    public class Part
    {
        public Rigidbody2D body;
        public HingeJoint2D joint;
        public Collider2D col;
        public SpriteRenderer[] tiles;
        [Tooltip("Local point (part space) where the standing force is applied (feet / top of the head).")]
        public Vector2 forcePoint;
        public int sortOffset;
        [NonSerialized] public int left;
    }

    // Same parts and order as the RSNM rigs: Torso, Head, LeftArm, RightArm, LeftLeg, RightLeg.
    public const int TORSO = 0, HEAD = 1, ARM_L = 2, ARM_R = 3, LEG_L = 4, LEG_R = 5;

    public Part[] parts = new Part[6];
    public Sprite ghostSprite;
    [Tooltip("Head pull = weight * this; each foot = weight * this / 2.")]
    public float standForce = 1f;
    [Tooltip("Tiles eaten by the acid before the man stops standing.")]
    public int fallAfterTiles = 20;

    private AcidGame game;
    private bool dead, killedByAcid, fallen, removed, landed;
    private int totalTiles, tilesLeft;
    private float mass;
    private readonly List<SpriteRenderer> eating = new List<SpriteRenderer>();
    private readonly List<float> eatTime = new List<float>();
    private readonly HashSet<SpriteRenderer> gone = new HashSet<SpriteRenderer>();

    public bool Dead { get { return dead; } }
    public bool Landed { get { return landed; } }
    public bool KilledByAcid { get { return killedByAcid; } }
    public Vector2 Center { get { return parts[TORSO].body ? parts[TORSO].body.position : (Vector2)transform.position; } }

    // Reference finale men: they drop without the standing forces and fall like rag dolls.
    public void GoLimp() { fallen = true; }

    public void Init(AcidGame owner, int sortBase)
    {
        game = owner;
        totalTiles = 0; mass = 0;
        for (int i = 0; i < parts.Length; i++)
        {
            Part p = parts[i];
            if (p.body) mass += p.body.mass;
            p.left = 0;
            for (int t = 0; t < p.tiles.Length; t++)
            {
                if (!p.tiles[t]) continue;
                p.tiles[t].sortingOrder = sortBase + p.sortOffset;
                totalTiles++;
                p.left++;
            }
            if (p.body) p.body.angularVelocity = UnityEngine.Random.Range(-150f, 150f);
            game.RegisterPart(p.col, this);
        }
        tilesLeft = totalTiles;
    }

    private void FixedUpdate()
    {
        if (dead || fallen || removed || game == null) return;
        float w = mass * Mathf.Abs(Physics2D.gravity.y) * standForce;
        Part head = parts[HEAD];
        if (head.body) head.body.AddForceAtPosition(new Vector2(0, w), (Vector2)head.body.transform.TransformPoint(head.forcePoint));
        PullFoot(parts[LEG_L], w * 0.5f);
        PullFoot(parts[LEG_R], w * 0.5f);
        for (int i = 0; i < parts.Length; i++)
        {
            Rigidbody2D rb = parts[i].body;
            if (!rb) continue;
            Vector2 v = rb.linearVelocity; v.x *= 0.99f; rb.linearVelocity = v;
        }
    }

    private static void PullFoot(Part leg, float f)
    {
        if (leg.body) leg.body.AddForceAtPosition(new Vector2(0, -f), (Vector2)leg.body.transform.TransformPoint(leg.forcePoint));
    }

    private void Update()
    {
        if (removed || game == null) return;
        if (!landed && !dead) CheckLanded();
        // Acid: tiles below the surface fade out. A man killed by the stick shatters instead (handled in Kill).
        for (int i = 0; i < parts.Length; i++)
        {
            SpriteRenderer[] tiles = parts[i].tiles;
            for (int t = 0; t < tiles.Length; t++)
            {
                SpriteRenderer sr = tiles[t];
                if (!sr || gone.Contains(sr)) continue;
                if (!game.InAcid(sr.transform.position)) continue;
                gone.Add(sr);
                eating.Add(sr); eatTime.Add(0);
                OnTileEaten(parts[i]);
                if (removed) return;
            }
        }
        for (int k = eating.Count - 1; k >= 0; k--)
        {
            SpriteRenderer sr = eating[k];
            float tt = eatTime[k] + Time.deltaTime / 0.25f;
            eatTime[k] = tt;
            if (!sr) { eating.RemoveAt(k); eatTime.RemoveAt(k); continue; }
            Color c = sr.color; c.a = 1 - tt; sr.color = c;
            if (tt >= 1) { sr.enabled = false; eating.RemoveAt(k); eatTime.RemoveAt(k); }
        }
        if (tilesLeft <= 0 && eating.Count == 0) Remove();
    }

    // First touch of the plank: "pop", and from now on the man weighs on the plank.
    private void CheckLanded()
    {
        Part leg = parts[LEG_R];
        if (!leg.body) return;
        Vector3 foot = leg.body.transform.TransformPoint(leg.forcePoint);
        if (foot.y > game.PlankTop + 0.06f) return;
        landed = true;
        game.OnManLanded(this);
        if (game.Sfx) game.Sfx.PlayPop();
    }

    private void OnTileEaten(Part part)
    {
        tilesLeft--;
        // A part eaten away no longer holds the man up, so he sinks deeper into the acid.
        part.left--;
        if (part.left <= 0 && part.body)
        {
            if (part.col) part.col.enabled = false;
        }
        if (totalTiles - tilesLeft > fallAfterTiles) fallen = true;
        if (!dead && tilesLeft < totalTiles / 2)
        {
            killedByAcid = true;
            dead = true;
            game.OnManDied(this, true);
        }
    }

    // Stick hit: the soul flies up and the body bursts into its tiles.
    public bool Kill()
    {
        if (dead) return false;
        dead = true;
        game.OnManDied(this, false);
        Shatter();
        return true;
    }

    public Vector3 HeadPosition
    {
        get
        {
            Part h = parts[HEAD];
            return h.body ? (Vector3)h.body.position : transform.position;
        }
    }

    private void Shatter()
    {
        for (int i = 0; i < parts.Length; i++)
        {
            Part p = parts[i];
            for (int t = 0; t < p.tiles.Length; t++)
            {
                SpriteRenderer sr = p.tiles[t];
                if (!sr || gone.Contains(sr)) continue;
                game.Fx.Fling(sr);
            }
            p.tiles = new SpriteRenderer[0];
            if (p.body) p.body.simulated = false;
        }
        Remove();
    }

    private void Remove()
    {
        if (removed) return;
        removed = true;
        for (int i = 0; i < parts.Length; i++) game.UnregisterPart(parts[i].col);
        game.OnManRemoved(this);
        Destroy(gameObject);
    }
}

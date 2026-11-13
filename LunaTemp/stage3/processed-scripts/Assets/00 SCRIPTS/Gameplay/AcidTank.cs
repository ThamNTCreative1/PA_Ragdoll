using UnityEngine;

// Time-up finale, as in the reference ad ("btr"): a dynamic tank drops onto the plank and rides it down into the acid.
// The part under the surface is hidden by the SSP/ClipBelow shader. 598 rust spots (reference "rga_place") sit on the
// hull: each appears when the acid line reaches it, stays 2-4 s, then drifts down and fades over 4 s. They draw ON TOP
// of the acid (order 502 > LiquidTop 501), like the reference's rga container.
public class AcidTank : MonoBehaviour
{
    public Rigidbody2D body;
    [Tooltip("Rust spots (children, disabled until the acid reaches them).")]
    public SpriteRenderer[] rust;
    [Tooltip("Local Y of the bottom of the tank sprite.")]
    public float spriteBottom = -0.975f;
    [Tooltip("Base local scale of a rust spot (x 1..1.5 at random).")]
    public float rustScale = 0.217f;
    public float rustGrow = 1f;
    public float rustFall = 4f;
    [Tooltip("Rust drift speed at the end of the fall (local units/s).")]
    public float rustFallSpeed = 0.43f;
    [Tooltip("Spots reached by the acid wait in a queue and pop up at random, this many per second.")]
    public float rustPerSecond = 12f;
    [Tooltip("Most rust spots visible at the same time.")]
    public int rustMaxVisible = 40;

    private AcidGame game;
    private int[] phase;
    private float[] timer, hold, size, dx;
    private float settled;
    private readonly System.Collections.Generic.List<int> pending = new System.Collections.Generic.List<int>();
    private float budget;
    private int visible;

    public bool Settled { get { return settled > 0.5f; } }
    public bool InAcid { get { return game != null && Depth > 0.02f; } }

    private float Depth
    {
        get { return game.acidTop - transform.TransformPoint(new Vector3(0, spriteBottom, 0)).y; }
    }

    public void Init(AcidGame owner)
    {
        game = owner;
        int n = rust != null ? rust.Length : 0;
        phase = new int[n]; timer = new float[n]; hold = new float[n]; size = new float[n]; dx = new float[n];
        for (int i = 0; i < n; i++) if (rust[i]) rust[i].enabled = false;
    }

    private void Update()
    {
        if (game == null) return;
        float dt = Time.deltaTime;

        if (body && body.linearVelocity.magnitude < 0.05f && game.PlankAtBottom) settled += dt;
        else settled = 0;

        float depth = Depth;
        for (int i = 0; i < rust.Length; i++)
        {
            SpriteRenderer r = rust[i];
            if (!r) continue;
            Transform t = r.transform;
            if (phase[i] == 0)
            {
                // Reached by the acid (height above the hull bottom in world units, like the reference's dist_y <= R):
                // queue it (phase 4); it pops up later at random.
                if ((t.localPosition.y - spriteBottom) * transform.lossyScale.y > depth + 0.02f) continue;
                phase[i] = 4;
                pending.Add(i);
            }
            else if (phase[i] == 1)
            {
                timer[i] += dt;
                float g = Mathf.Clamp01(timer[i] / rustGrow);
                t.localScale = Vector3.one * (g * size[i]);
                SetAlpha(r, g);
                hold[i] -= dt;
                if (hold[i] <= 0) { phase[i] = 2; timer[i] = 0; dx[i] = Random.Range(-0.11f, 0.11f); }
            }
            else if (phase[i] == 2)
            {
                timer[i] += dt / rustFall;
                float g = Mathf.Clamp01(timer[i]);
                t.localPosition += new Vector3(dx[i], -rustFallSpeed * g, 0) * dt;
                SetAlpha(r, 1 - g);
                if (g >= 1) { phase[i] = 3; r.enabled = false; visible--; }
            }
        }

        budget = Mathf.Min(budget + dt * rustPerSecond, 3f);
        while (budget >= 1f && visible < rustMaxVisible && pending.Count > 0)
        {
            budget -= 1f;
            int k = Random.Range(0, pending.Count);
            int i = pending[k];
            pending[k] = pending[pending.Count - 1];
            pending.RemoveAt(pending.Count - 1);
            Show(i);
        }
    }

    private void Show(int i)
    {
        SpriteRenderer r = rust[i];
        if (!r) return;
        phase[i] = 1; timer[i] = 0;
        hold[i] = Random.Range(2f, 4f);
        size[i] = rustScale * Random.Range(1f, 1.5f);
        r.enabled = true;
        SetAlpha(r, 0);
        r.transform.localScale = Vector3.zero;
        visible++;
    }

    private static void SetAlpha(SpriteRenderer r, float a)
    {
        Color c = r.color; c.a = a; r.color = c;
    }
}

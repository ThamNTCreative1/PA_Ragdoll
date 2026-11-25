using System.Collections;
using UnityEngine;

public class MonsterView : MonoBehaviour
{
    public Transform body;            // visual root (idle / knockback)
    public SpriteRenderer[] parts;
    public GameObject hpRoot;
    public Transform hpFill;
    public Transform headAnchor;      // vi tri hien so damage

    int maxHp = 100;
    int hp = 100;
    bool dead;
    bool busy;
    float idleT;
    Vector3 bodyBase;
    Vector3[] vel;
    float[] spin;
    Color[] baseColors;

    void Awake()
    {
        bodyBase = body.localPosition;
        vel = new Vector3[parts.Length];
        spin = new float[parts.Length];
        baseColors = new Color[parts.Length];
        for (int i = 0; i < parts.Length; i++) baseColors[i] = parts[i].color;
        CacheLimbs(legs, out legBase, out legTop);
        CacheLimbs(arms, out armBase, out armTop);
    }

    // ---------- Limb pose (xoay quanh hong / vai = mep tren sprite) ----------
    public Transform[] arms;          // tay (vung nguoc pha voi chan khi di)
    Vector3[] legBase, armBase;
    float[] legTop, armTop;

    void CacheLimbs(Transform[] limbs, out Vector3[] basePos, out float[] top)
    {
        int n = limbs != null ? limbs.Length : 0;
        basePos = new Vector3[n];
        top = new float[n];
        for (int i = 0; i < n; i++)
        {
            basePos[i] = limbs[i].localPosition;
            SpriteRenderer sr = limbs[i].GetComponent<SpriteRenderer>();
            top[i] = sr != null && sr.sprite != null ? sr.sprite.bounds.max.y - 0.1f : 0f;
        }
    }

    void PoseLimb(Transform t, Vector3 basePos, float top, float angle)
    {
        Vector3 pivot = basePos + new Vector3(0f, top, 0f);
        Quaternion q = Quaternion.Euler(0f, 0f, angle);
        t.localPosition = pivot + q * (basePos - pivot);
        t.localRotation = q;
    }

    void ResetLimbs()
    {
        for (int i = 0; i < legBase.Length; i++) PoseLimb(legs[i], legBase[i], legTop[i], 0f);
        for (int i = 0; i < armBase.Length; i++) PoseLimb(arms[i], armBase[i], armTop[i], 0f);
    }

    public void Init(int maxHealth)
    {
        maxHp = maxHealth < 1 ? 1 : maxHealth;   // Luna: tranh Mathf.Max(int) (bi doi sang float)
        hp = maxHp;
        dead = false;
        SetHpVisual();
    }

    public int Hp { get { return hp; } }
    public bool IsDead { get { return dead; } }

    void Update()
    {
        if (dead || busy) return;
        idleT += Time.deltaTime;
        body.localScale = new Vector3(1f, 1f + Mathf.Sin(idleT * 3f) * 0.015f, 1f);
    }

    void SetHpVisual()
    {
        float f = Mathf.Clamp01((float)hp / maxHp);
        hpFill.localScale = new Vector3(f, 1f, 1f);
    }

    public IEnumerator Spawn()
    {
        gameObject.SetActive(true);
        hpRoot.SetActive(false);
        busy = true;
        float t = 0f;
        Vector3 top = bodyBase + new Vector3(0f, 8f, 0f);
        while (t < 0.35f)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.35f);
            body.localPosition = Vector3.Lerp(top, bodyBase, k * k);
            yield return null;
        }
        body.localPosition = bodyBase;
        t = 0f;
        while (t < 0.25f)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.25f);
            float sq = Mathf.Sin(k * Mathf.PI) * 0.18f;
            body.localScale = new Vector3(1f + sq, 1f - sq, 1f);
            yield return null;
        }
        body.localScale = Vector3.one;
        hpRoot.SetActive(true);
        busy = false;
    }

    // tra ve true neu chet
    public bool TakeDamage(int dmg)
    {
        if (dead) return true;
        hp = hp - dmg;
        if (hp < 0) hp = 0;
        SetHpVisual();
        StartCoroutine(HitFx());
        return hp <= 0;
    }

    IEnumerator HitFx()
    {
        busy = true;
        float t = 0f;
        while (t < 0.18f)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.18f);
            Color c = Color.Lerp(new Color(1f, 0.35f, 0.35f, 1f), Color.white, k);
            for (int i = 0; i < parts.Length; i++) parts[i].color = c * baseColors[i];
            // monster bi flip x = -1, nen +x local = lui ve ben phai
            body.localPosition = bodyBase + new Vector3(-Mathf.Sin(k * Mathf.PI) * 0.35f, 0f, 0f);
            yield return null;
        }
        for (int i = 0; i < parts.Length; i++) parts[i].color = baseColors[i];
        body.localPosition = bodyBase;
        busy = false;
    }

    public Transform[] legs;          // LegL, LegR (vung khi di)
    bool walking;
    public bool IsWalking { get { return walking; } }

    // di toi worldX trong dur giay; dung lai neu bi giet
    public IEnumerator WalkTo(float worldX, float dur)
    {
        walking = true;
        Vector3 start = transform.position;
        Vector3 p = start;
        float t = 0f;
        // Monster ve nhin thang (front view) -> di kieu dam chan luan phien + lac lu,
        // khong vung chan toi/lui (se bat cheo thanh hinh chu X)
        const float STEP_SPEED = 7f;     // nhip buoc (rad/s) ~ 2.2 buoc/giay
        const float LEG_LIFT = 0.22f;    // do nhac chan (local)
        const float LEG_TILT = 5f;       // chan nghieng nhe khi nhac
        const float ARM_SWING = 8f;      // do vung tay quanh vai
        const float SWAY = 3f;           // lac lu than
        while (t < dur && hp > 0)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / dur);
            float ramp = Mathf.Clamp01(t / 0.25f);           // vao nhip tu tu, khong giat
            float phase = t * STEP_SPEED;
            float s = Mathf.Sin(phase);

            p.x = Mathf.Lerp(start.x, worldX, k);
            // nhun: ha xuong luc chan cham dat (s = 0), nho len khi 1 chan dang nhac
            p.y = start.y + Mathf.Abs(s) * 0.04f * ramp;
            transform.position = p;

            for (int i = 0; i < legBase.Length; i++)
            {
                float side = i % 2 == 0 ? 1f : -1f;
                float lift = Mathf.Max(0f, s * side) * ramp;          // chan nay nhac khi chan kia chong
                PoseLimb(legs[i], legBase[i] + new Vector3(0f, lift * LEG_LIFT, 0f), legTop[i], side * lift * LEG_TILT);
            }
            for (int i = 0; i < armBase.Length; i++)
                PoseLimb(arms[i], armBase[i], armTop[i], (i % 2 == 0 ? -s : s) * ARM_SWING * ramp);
            if (!busy) body.localRotation = Quaternion.Euler(0f, 0f, (-3f + s * SWAY) * ramp);   // nghieng toi + lac lu
            yield return null;
        }
        if (hp > 0)
        {
            p.y = start.y;
            transform.position = p;
            ResetLimbs();
            if (!busy) body.localRotation = Quaternion.identity;
        }
        walking = false;
    }

    // vung nguoi ve phia Rumi (local +x = huong ve ben trai man hinh vi root flip)
    public IEnumerator AttackLunge()
    {
        busy = true;
        float t = 0f;
        while (t < 0.18f)   // lay da
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.18f);
            body.localPosition = bodyBase + new Vector3(-0.4f * k, 0f, 0f);
            body.localRotation = Quaternion.Euler(0f, 0f, 10f * k);
            yield return null;
        }
        t = 0f;
        while (t < 0.12f)   // dam toi
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.12f);
            body.localPosition = bodyBase + new Vector3(Mathf.Lerp(-0.4f, 1.2f, k), 0f, 0f);
            body.localRotation = Quaternion.Euler(0f, 0f, Mathf.Lerp(10f, -15f, k));
            yield return null;
        }
        t = 0f;
        while (t < 0.25f)   // ve vi tri
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.25f);
            body.localPosition = bodyBase + new Vector3(Mathf.Lerp(1.2f, 0f, k), 0f, 0f);
            body.localRotation = Quaternion.Euler(0f, 0f, Mathf.Lerp(-15f, 0f, k));
            yield return null;
        }
        body.localPosition = bodyBase;
        body.localRotation = Quaternion.identity;
        busy = false;
    }

    public IEnumerator Resist()
    {
        busy = true;
        float t = 0f;
        while (t < 0.6f)
        {
            t += Time.deltaTime;
            body.localRotation = Quaternion.Euler(0f, 0f, Mathf.Sin(t * 30f) * 4f * (1f - t / 0.6f));
            yield return null;
        }
        body.localRotation = Quaternion.identity;
        busy = false;
    }

    public IEnumerator Die()
    {
        dead = true;
        hpRoot.SetActive(false);
        for (int i = 0; i < parts.Length; i++)
        {
            // +x local = ve phia phai man hinh (root flip)
            vel[i] = new Vector3(-Random.Range(2f, 6f), Random.Range(5f, 10f), 0f);
            spin[i] = Random.Range(-720f, 720f);
        }
        float t = 0f;
        while (t < 1.4f)
        {
            float dt = Time.deltaTime;
            t += dt;
            float a = 1f - Mathf.Clamp01((t - 0.9f) / 0.5f);
            for (int i = 0; i < parts.Length; i++)
            {
                vel[i].y -= 20f * dt;
                Transform p = parts[i].transform;
                p.localPosition += vel[i] * dt;
                p.Rotate(0f, 0f, spin[i] * dt);
                Color c = baseColors[i]; c.a = a; parts[i].color = c;
            }
            yield return null;
        }
        gameObject.SetActive(false);
    }
}

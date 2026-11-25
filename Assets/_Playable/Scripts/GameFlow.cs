using System.Collections;
using UnityEngine;
using UnityEngine.UI;

// Luong: chon monster -> chon vu khi -> Rumi ban/nem 3 loat, monster tien lai
// -> du damage: monster chet giua duong (Win -> Next Battle -> store)
// -> khong du: monster toi sat, danh Rumi (Fail -> Replay -> chon vu khi -> store)
public class GameFlow : MonoBehaviour
{
    // ---------- Gameplay (chi chinh trong Inspector, KHONG dua len Luna Playground) ----------
    // Tong damage cua ca 3 loat ban; >= Monster HP thi monster chet
    public int monsterHP = 100;
    public float monsterWalkTime = 3.2f;

    public int dmgFreddyCherry = 100;
    public int dmgFreddyAK = 30;
    public int dmgFreddyStick = 45;
    public int dmgSonicCherry = 40;
    public int dmgSonicAK = 100;
    public int dmgSonicStick = 25;
    public int dmgDeerCherry = 35;
    public int dmgDeerAK = 45;
    public int dmgDeerStick = 100;

    public Sprite backgroundSprite;       // BG custom tren Playground nam o LunaController

    public LunaController luna;           // BGM, auto CTA, CTA khi Retry

    // ---------- Scene ----------
    [Header("World")]
    public Camera cam;
    public Transform world;               // rung man hinh
    public SpriteRenderer background;
    public Transform rumiBody;
    public Transform rumiArm;             // pivot vai
    public SpriteRenderer weaponInHand;
    public Transform muzzle;
    public Sprite[] weaponSprites;        // 0 cherry, 1 AK, 2 lightstick
    public MonsterView[] monsters;        // 0 Freddy, 1 Shin Sonic, 2 Deer
    public float monsterStopDistance = 1.7f;
    public SpriteRenderer cherryProjectile;
    public SpriteRenderer[] bullets;      // AK
    public SpriteRenderer[] stars;        // lightstick
    public SpriteRenderer explosion;
    public SpriteRenderer muzzleFlash;
    public ParticleSystem[] fireworks;

    [Header("UI")]
    public GameObject choicePanel;
    public Text titleText;
    public GameObject titleBar;           // nen cua titleText
    public Image[] slotIcons;
    public Button[] slotButtons;
    public Sprite[] monsterIcons;
    public RectTransform hand;
    public Text bigText;
    public Text effectText;
    public Text[] damageTexts;
    public GameObject popup;
    public Text popupTitle;
    public Button popupButton;
    public Text popupButtonLabel;
    public Button endCatcher;

    [Header("Audio")]
    public AudioSource sfx;
    public AudioClip clickClip, equipClip, akClip, boomClip, hitClip, starClip, winClip, failClip;

    const int VOLLEYS = 3;

    enum State { PickMonster, PickWeapon, Attacking, Result, PickAfterReplay, Ended }
    State state;
    int monsterIdx = -1;
    bool started;
    bool ended;
    bool isWin;
    bool killStarted;
    int dmgTextIdx;
    float handT;
    Vector3 worldBase;
    Vector3 rumiBase;
    SpriteRenderer[] rumiParts;
    Color[] rumiColors;
    int shotIndex, shotTotal, dmgTotal;

    WaitForSeconds w005, w011, w015, w02, w03, w04, w08;

    void Awake()
    {
        w005 = new WaitForSeconds(0.05f);
        w011 = new WaitForSeconds(0.11f);
        w015 = new WaitForSeconds(0.15f);
        w02 = new WaitForSeconds(0.2f);
        w03 = new WaitForSeconds(0.3f);
        w04 = new WaitForSeconds(0.4f);
        w08 = new WaitForSeconds(0.8f);
        worldBase = world.localPosition;
        rumiBase = rumiBody.localPosition;
        rumiParts = rumiBody.GetComponentsInChildren<SpriteRenderer>(true);
        rumiColors = new Color[rumiParts.Length];
        for (int i = 0; i < rumiParts.Length; i++) rumiColors[i] = rumiParts[i].color;

        ApplyBackground();

        for (int i = 0; i < slotButtons.Length; i++)
        {
            int idx = i;
            slotButtons[i].onClick.AddListener(delegate { OnSlot(idx); });
        }
        popupButton.onClick.AddListener(OnPopupButton);
        endCatcher.onClick.AddListener(Cta);
    }

    // BG custom tu Playground (Texture2D). Tao Sprite 1 lan, giu chieu cao 11.52 unit nhu BG goc
    // de CameraFit van tinh dung muc san.
    void ApplyBackground()
    {
        Texture2D tex = luna != null ? luna.backgroundTexture : null;
        if (tex == null)
        {
            if (backgroundSprite != null) background.sprite = backgroundSprite;
            return;
        }
        if (background.sprite != null && background.sprite.texture == tex) return;   // dung BG mac dinh
        float h = tex.height;
        float w = tex.width;
        if (h <= 0f || w <= 0f) return;
        float ppu = h / 11.52f;
        background.sprite = Sprite.Create(tex, new Rect(0f, 0f, w, h), new Vector2(0.5f, 0.5f), ppu);
        CameraFit fit = cam != null ? cam.GetComponent<CameraFit>() : null;
        if (fit != null)
        {
            fit.bgHalfWidth = w / ppu * 0.5f;
            fit.Apply();
        }
    }

    void Start()
    {
        for (int i = 0; i < monsters.Length; i++) monsters[i].gameObject.SetActive(false);
        weaponInHand.gameObject.SetActive(false);
        cherryProjectile.gameObject.SetActive(false);
        for (int i = 0; i < bullets.Length; i++) bullets[i].gameObject.SetActive(false);
        for (int i = 0; i < stars.Length; i++) stars[i].gameObject.SetActive(false);
        explosion.gameObject.SetActive(false);
        muzzleFlash.gameObject.SetActive(false);
        bigText.gameObject.SetActive(false);
        effectText.gameObject.SetActive(false);
        for (int i = 0; i < damageTexts.Length; i++) damageTexts[i].gameObject.SetActive(false);
        popup.SetActive(false);
        endCatcher.gameObject.SetActive(false);
        ShowChoices(State.PickMonster);
    }

    void Update()
    {
        float t = Time.time;
        rumiBody.localPosition = rumiBase + new Vector3(0f, Mathf.Abs(Mathf.Sin(t * 2.2f)) * 0.04f, 0f);
        if (hand.gameObject.activeSelf)
        {
            handT += Time.deltaTime;
            AnimateHand();
        }
    }

    // Tay tuto: di lan luot qua cac o, moi o bam 1 lan roi sang o ke tiep
    const float HAND_MOVE = 0.35f, HAND_PRESS = 0.3f, HAND_WAIT = 0.35f;

    Vector2 SlotPoint(int i)
    {
        Vector2 p = ((RectTransform)slotButtons[i].transform).anchoredPosition;
        return p + new Vector2(10f, -25f);   // dau ngon tay vao giua icon
    }

    void AnimateHand()
    {
        float cycle = HAND_MOVE + HAND_PRESS + HAND_WAIT;
        int n = slotButtons.Length;
        int step = (int)(handT / cycle);
        int cur = step % n;
        int prev = (cur + n - 1) % n;
        float local = handT - step * cycle;

        for (int i = 0; i < n; i++) slotButtons[i].transform.localScale = Vector3.one;

        float handScale = 1f;
        Vector2 pos;
        if (step == 0 && local < HAND_MOVE)
        {
            // lan dau: tay bay vao tu goc duoi phai
            float k = local / HAND_MOVE;
            k = k * k * (3f - 2f * k);
            pos = Vector2.Lerp(SlotPoint(cur) + new Vector2(260f, -220f), SlotPoint(cur), k);
        }
        else if (local < HAND_MOVE)
        {
            float k = local / HAND_MOVE;
            k = k * k * (3f - 2f * k);
            pos = Vector2.Lerp(SlotPoint(prev), SlotPoint(cur), k);
        }
        else if (local < HAND_MOVE + HAND_PRESS)
        {
            float press = Mathf.Sin((local - HAND_MOVE) / HAND_PRESS * Mathf.PI);
            pos = SlotPoint(cur) + new Vector2(0f, -12f * press);
            handScale = 1f - 0.15f * press;
            float s = 1f - 0.08f * press;
            slotButtons[cur].transform.localScale = new Vector3(s, s, 1f);
        }
        else
        {
            pos = SlotPoint(cur);
        }
        hand.anchoredPosition = pos;
        hand.localScale = new Vector3(handScale, handScale, 1f);
    }

    void HideHand()
    {
        hand.gameObject.SetActive(false);
        for (int i = 0; i < slotButtons.Length; i++) slotButtons[i].transform.localScale = Vector3.one;
    }

    // ---------------- UI ----------------
    void ShowChoices(State s)
    {
        state = s;
        bool monstersMode = s == State.PickMonster;
        titleText.text = monstersMode ? "CHOOSE A MONSTER!" : (s == State.PickAfterReplay ? "TRY ANOTHER WEAPON!" : "CHOOSE A WEAPON!");
        for (int i = 0; i < slotIcons.Length; i++)
        {
            slotIcons[i].sprite = monstersMode ? monsterIcons[i] : weaponSprites[i];
            slotButtons[i].interactable = true;
        }
        SetTitleVisible(true);
        choicePanel.SetActive(true);
        StartCoroutine(PopIn(choicePanel.transform));
        hand.gameObject.SetActive(true);
        hand.SetAsLastSibling();
        handT = 0f;
        AnimateHand();
    }

    void OnSlot(int i)
    {
        if (ended) { Cta(); return; }
        FirstInput();
        Play(clickClip);
        if (state == State.PickMonster)
        {
            monsterIdx = i;
            HideChoices();
            StartCoroutine(SpawnMonster());
        }
        else if (state == State.PickWeapon)
        {
            // giu tab chon sung, chi an chi dan; state Attacking chan bam lai
            HideHand();
            SetTitleVisible(false);              // tat tam text "CHOOSE A WEAPON!"
            state = State.Attacking;
            StartCoroutine(Attack(i));
        }
        else if (state == State.PickAfterReplay)
        {
            EndGame();
            Cta();
        }
    }

    void HideChoices()
    {
        choicePanel.SetActive(false);
        HideHand();
        state = State.Attacking;
    }

    void OnPopupButton()
    {
        Play(clickClip);
        if (isWin)
        {
            Cta();
        }
        else if (luna != null && luna.ctaOnRetry)
        {
            Cta();
        }
        else
        {
            popup.SetActive(false);
            bigText.gameObject.SetActive(false);
            ShowChoices(State.PickAfterReplay);
        }
    }

    void SetTitleVisible(bool v)
    {
        titleText.gameObject.SetActive(v);
        if (titleBar != null) titleBar.SetActive(v);
    }

    void FirstInput()
    {
        if (started) return;
        started = true;
        Luna.Unity.LifeCycle.GameStarted();
        if (luna != null) luna.OnFirstInput();
    }

    void EndGame()
    {
        if (ended) return;
        ended = true;
        state = State.Ended;
        Luna.Unity.LifeCycle.GameEnded();
        Debug.Log("[KSBP] GameEnded");
    }

    public void Cta()
    {
        EndGame();
        Debug.Log("[KSBP] InstallFullGame");
        Luna.Unity.Playable.InstallFullGame();
    }

    void Play(AudioClip c)
    {
        if (c != null && sfx != null) sfx.PlayOneShot(c);
    }

    // ---------------- Gameplay ----------------
    IEnumerator SpawnMonster()
    {
        MonsterView m = monsters[monsterIdx];
        m.Init(monsterHP);
        yield return StartCoroutine(m.Spawn());
        Play(hitClip);
        StartCoroutine(Shake(0.2f, 0.15f));
        yield return w04;
        ShowChoices(State.PickWeapon);
    }

    int GetDamage(int m, int w)
    {
        if (m == 0) return w == 0 ? dmgFreddyCherry : (w == 1 ? dmgFreddyAK : dmgFreddyStick);
        if (m == 1) return w == 0 ? dmgSonicCherry : (w == 1 ? dmgSonicAK : dmgSonicStick);
        return w == 0 ? dmgDeerCherry : (w == 1 ? dmgDeerAK : dmgDeerStick);
    }

    // damage cua phat ban thu k (chia deu tong damage cho moi phat)
    int NextShotDamage()
    {
        // Luna: chi dung so hoc int (tranh Mathf.RoundToInt tra ve float khi qua Bridge)
        int a = (dmgTotal * shotIndex * 2 + shotTotal) / (shotTotal * 2);
        shotIndex++;
        int b = (dmgTotal * shotIndex * 2 + shotTotal) / (shotTotal * 2);
        return b - a;
    }

    IEnumerator Attack(int w)
    {
        MonsterView m = monsters[monsterIdx];
        dmgTotal = GetDamage(monsterIdx, w);
        shotTotal = VOLLEYS * (w == 0 ? 1 : (w == 1 ? bullets.Length : stars.Length));
        shotIndex = 0;
        killStarted = false;

        weaponInHand.sprite = weaponSprites[w];
        yield return StartCoroutine(DropWeapon());
        yield return StartCoroutine(RaiseArm(w == 0 ? 150f : 90f));

        // monster bat dau tien lai phia Rumi
        float stopX = rumiBody.parent.position.x + monsterStopDistance;
        StartCoroutine(m.WalkTo(stopX, monsterWalkTime));

        for (int v = 0; v < VOLLEYS && m.Hp > 0; v++)
        {
            if (w == 0)
            {
                weaponInHand.gameObject.SetActive(true);
                yield return w015;
                yield return StartCoroutine(ThrowCherry(m, NextShotDamage()));
                yield return w015;
            }
            else if (w == 1)
            {
                for (int i = 0; i < bullets.Length && m.Hp > 0; i++)
                {
                    StartCoroutine(Fly(bullets[i], new Vector3(0f, Random.Range(-0.5f, 0.3f), 0f), 0.12f, 0f, m, NextShotDamage()));
                    Play(akClip);
                    StartCoroutine(Flash());
                    StartCoroutine(Recoil(90f));
                    yield return w011;
                }
                yield return w03;
            }
            else
            {
                for (int i = 0; i < stars.Length && m.Hp > 0; i++)
                {
                    StartCoroutine(Fly(stars[i], new Vector3(0f, (i - 1) * 0.35f - 0.2f, 0f), 0.25f, 900f, m, NextShotDamage()));
                    Play(starClip);
                    StartCoroutine(Recoil(90f));
                    yield return w02;
                }
                yield return w02;
            }
        }
        yield return w03;   // cho dan cuoi cham

        if (m.Hp <= 0)
        {
            ShowEffect("SUPER EFFECTIVE!", new Color(0.35f, 1f, 0.35f));   // xanh green
            yield return StartCoroutine(RaiseArm(0f));
            weaponInHand.gameObject.SetActive(false);
            while (m.gameObject.activeSelf) yield return null;
            isWin = true;
            yield return StartCoroutine(ShowResult(true));
        }
        else
        {
            ShowEffect("RESIST!", new Color(0.6f, 0.8f, 1f));
            while (m.IsWalking) yield return null;
            StartCoroutine(m.AttackLunge());
            yield return w03;                       // dung luc cu dam cham Rumi
            yield return StartCoroutine(RumiHurt());
            yield return StartCoroutine(RaiseArm(0f));
            weaponInHand.gameObject.SetActive(false);
            isWin = false;
            yield return StartCoroutine(ShowResult(false));
        }
    }

    void Hit(MonsterView m, int dmg, Vector3 pos, bool big)
    {
        if (m.Hp <= 0) return;
        bool dead = m.TakeDamage(dmg);
        Play(hitClip);
        ShowDamage(dmg, pos);
        StartCoroutine(Shake(big ? 0.3f : 0.1f, big ? 0.25f : 0.08f));
        if (dead && !killStarted)
        {
            killStarted = true;
            Play(boomClip);
            StartCoroutine(Shake(0.4f, 0.35f));
            StartCoroutine(m.Die());
        }
    }

    Vector3 TargetOf(MonsterView m, Vector3 offset)
    {
        return m.headAnchor.position + new Vector3(0f, -0.9f, 0f) + offset;
    }

    // vu khi roi tu tren xuong tay Rumi roi moi trang bi
    IEnumerator DropWeapon()
    {
        Transform wt = weaponInHand.transform;
        Vector3 localBase = wt.localPosition;
        weaponInHand.gameObject.SetActive(true);
        float t = 0f, dur = 0.45f;
        while (t < dur)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / dur);
            wt.localPosition = localBase;
            Vector3 end = wt.position;
            wt.position = end + new Vector3(0f, (1f - k * k) * 7f, 0f);   // roi nhanh dan
            wt.localRotation = Quaternion.Euler(0f, 0f, (1f - k) * 360f);
            yield return null;
        }
        wt.localPosition = localBase;
        wt.localRotation = Quaternion.identity;
        Play(equipClip);
        // Rumi nhun nhe khi bat vu khi
        Transform root = rumiBody.parent;
        Vector3 s0 = root.localScale;
        t = 0f;
        while (t < 0.2f)
        {
            t += Time.deltaTime;
            float q = Mathf.Sin(Mathf.Clamp01(t / 0.2f) * Mathf.PI) * 0.08f;
            root.localScale = new Vector3(s0.x * (1f + q), s0.y * (1f - q), s0.z);
            yield return null;
        }
        root.localScale = s0;
    }

    IEnumerator RaiseArm(float angle)
    {
        float from = rumiArm.localEulerAngles.z;
        if (from > 180f) from -= 360f;
        float t = 0f;
        while (t < 0.15f)
        {
            t += Time.deltaTime;
            rumiArm.localRotation = Quaternion.Euler(0f, 0f, Mathf.Lerp(from, angle, Mathf.Clamp01(t / 0.15f)));
            yield return null;
        }
        rumiArm.localRotation = Quaternion.Euler(0f, 0f, angle);
    }

    IEnumerator ThrowCherry(MonsterView m, int dmg)
    {
        // vung tay nem
        rumiArm.localRotation = Quaternion.Euler(0f, 0f, 170f);
        yield return w005;
        rumiArm.localRotation = Quaternion.Euler(0f, 0f, 70f);
        Vector3 start = muzzle.position;
        weaponInHand.gameObject.SetActive(false);
        SpriteRenderer p = cherryProjectile;
        p.gameObject.SetActive(true);
        float t = 0f, dur = 0.5f;
        Vector3 target = TargetOf(m, Vector3.zero);
        while (t < dur)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / dur);
            if (m.Hp > 0) target = TargetOf(m, Vector3.zero);
            Vector3 pos = Vector3.Lerp(start, target, k);
            pos.y += Mathf.Sin(k * Mathf.PI) * 2.2f;
            p.transform.position = pos;
            p.transform.Rotate(0f, 0f, -720f * Time.deltaTime);
            yield return null;
        }
        p.gameObject.SetActive(false);
        Play(boomClip);
        StartCoroutine(Explode(target));
        Hit(m, dmg, target, true);
        rumiArm.localRotation = Quaternion.Euler(0f, 0f, 150f);
    }

    IEnumerator Explode(Vector3 pos)
    {
        SpriteRenderer e = explosion;
        e.transform.position = pos;
        e.gameObject.SetActive(true);
        float t = 0f;
        while (t < 0.35f)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.35f);
            e.transform.localScale = Vector3.one * Mathf.Lerp(0.5f, 3.5f, k);
            e.color = new Color(1f, Mathf.Lerp(0.9f, 0.4f, k), 0.1f, 1f - k);
            yield return null;
        }
        e.gameObject.SetActive(false);
    }

    // dan bay duoi theo monster dang di chuyen
    IEnumerator Fly(SpriteRenderer p, Vector3 offset, float dur, float spinSpeed, MonsterView m, int dmg)
    {
        Vector3 from = muzzle.position;
        p.gameObject.SetActive(true);
        p.transform.position = from;
        p.transform.rotation = Quaternion.identity;
        Vector3 to = TargetOf(m, offset);
        float t = 0f;
        while (t < dur)
        {
            t += Time.deltaTime;
            if (m.Hp > 0) to = TargetOf(m, offset);
            p.transform.position = Vector3.Lerp(from, to, Mathf.Clamp01(t / dur));
            if (spinSpeed != 0f) p.transform.Rotate(0f, 0f, spinSpeed * Time.deltaTime);
            yield return null;
        }
        p.gameObject.SetActive(false);
        Hit(m, dmg, to, false);
    }

    IEnumerator Flash()
    {
        muzzleFlash.gameObject.SetActive(true);
        muzzleFlash.transform.position = muzzle.position;
        yield return w005;
        muzzleFlash.gameObject.SetActive(false);
    }

    IEnumerator Recoil(float baseAngle)
    {
        rumiArm.localRotation = Quaternion.Euler(0f, 0f, baseAngle + 8f);
        yield return w005;
        rumiArm.localRotation = Quaternion.Euler(0f, 0f, baseAngle);
    }

    IEnumerator RumiHurt()
    {
        Play(hitClip);
        StartCoroutine(Shake(0.35f, 0.3f));
        Transform root = rumiBody.parent;
        Vector3 basePos = root.localPosition;
        float t = 0f;
        while (t < 0.5f)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.5f);
            float s = Mathf.Sin(k * Mathf.PI);
            Color c = Color.Lerp(new Color(1f, 0.3f, 0.3f, 1f), Color.white, k);
            for (int i = 0; i < rumiParts.Length; i++) rumiParts[i].color = c * rumiColors[i];
            root.localRotation = Quaternion.Euler(0f, 0f, s * 14f);     // nga ve sau
            root.localPosition = basePos + new Vector3(-s * 0.5f, 0f, 0f);
            yield return null;
        }
        for (int i = 0; i < rumiParts.Length; i++) rumiParts[i].color = rumiColors[i];
        root.localRotation = Quaternion.identity;
        root.localPosition = basePos;
    }

    IEnumerator Shake(float dur, float amp)
    {
        float t = 0f;
        while (t < dur)
        {
            t += Time.deltaTime;
            float a = amp * (1f - t / dur);
            world.localPosition = worldBase + new Vector3(Random.Range(-a, a), Random.Range(-a, a), 0f);
            yield return null;
        }
        world.localPosition = worldBase;
    }

    // ---------------- FX text ----------------
    void ShowDamage(int dmg, Vector3 worldPos)
    {
        Text tx = damageTexts[dmgTextIdx];
        dmgTextIdx = (dmgTextIdx + 1) % damageTexts.Length;
        tx.text = "-" + dmg;
        StartCoroutine(FloatText(tx, cam.WorldToScreenPoint(worldPos + new Vector3(Random.Range(-0.3f, 0.3f), 0.5f, 0f))));
    }

    IEnumerator FloatText(Text tx, Vector3 screenPos)
    {
        tx.gameObject.SetActive(true);
        RectTransform rt = tx.rectTransform;
        float t = 0f;
        while (t < 0.7f)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.7f);
            rt.position = screenPos + new Vector3(0f, k * Screen.height * 0.08f, 0f);
            rt.localScale = Vector3.one * (k < 0.15f ? Mathf.Lerp(0.5f, 1.3f, k / 0.15f) : 1f);
            Color c = tx.color; c.a = 1f - Mathf.Clamp01((k - 0.6f) / 0.4f); tx.color = c;
            yield return null;
        }
        tx.gameObject.SetActive(false);
    }

    void ShowEffect(string s, Color c)
    {
        effectText.text = s;
        effectText.color = c;
        effectText.gameObject.SetActive(true);
        StartCoroutine(EffectRoutine());
    }

    IEnumerator EffectRoutine()
    {
        yield return StartCoroutine(PopIn(effectText.transform));
        yield return w08;
        effectText.gameObject.SetActive(false);
    }

    IEnumerator ShowResult(bool win)
    {
        bigText.text = win ? "YOU WIN!" : "FAIL!";
        bigText.color = win ? new Color(0.35f, 1f, 0.35f) : new Color(1f, 0.3f, 0.3f);   // win: xanh green
        bigText.gameObject.SetActive(true);
        Play(win ? winClip : failClip);
        if (win) StartCoroutine(FireworksRoutine());
        yield return StartCoroutine(PopIn(bigText.transform));
        yield return w04;
        if (win) { yield return w08; yield return w04; }   // de phao hoa no truoc khi popup phu mo
        popupTitle.text = win ? "MONSTER DEFEATED!" : "THE MONSTER SURVIVED!";
        popupButtonLabel.text = win ? "NEXT BATTLE" : "REPLAY";
        popupButton.image.color = win ? new Color(0.3f, 0.8f, 0.3f) : new Color(1f, 0.6f, 0.15f);
        popup.SetActive(true);
        if (win)
        {
            EndGame();
            endCatcher.gameObject.SetActive(true);
        }
        state = State.Result;
        yield return StartCoroutine(PopIn(popup.transform));
        StartCoroutine(Pulse(popupButton.transform));
    }

    // ban phao hoa lan luot, lap 3 vong
    IEnumerator FireworksRoutine()
    {
        if (fireworks == null || fireworks.Length == 0) yield break;
        for (int round = 0; round < 3; round++)
        {
            for (int i = 0; i < fireworks.Length; i++)
            {
                if (fireworks[i] == null) continue;
                fireworks[i].Play();
                yield return w02;
            }
            yield return w04;
        }
    }

    IEnumerator PopIn(Transform tr)
    {
        float t = 0f;
        while (t < 0.25f)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.25f);
            float s = k < 0.7f ? Mathf.Lerp(0.3f, 1.15f, k / 0.7f) : Mathf.Lerp(1.15f, 1f, (k - 0.7f) / 0.3f);
            tr.localScale = new Vector3(s, s, 1f);
            yield return null;
        }
        tr.localScale = Vector3.one;
    }

    IEnumerator Pulse(Transform tr)
    {
        while (tr.gameObject.activeInHierarchy)
        {
            float s = 1f + Mathf.Sin(Time.time * 6f) * 0.06f;
            tr.localScale = new Vector3(s, s, 1f);
            yield return null;
        }
    }
}

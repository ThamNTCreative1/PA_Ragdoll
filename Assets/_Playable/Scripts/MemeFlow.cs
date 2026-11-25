using System.Collections;
using UnityEngine;
using UnityEngine.UI;

[System.Serializable]
public class HeroRig
{
    public Transform root;          // dat o mat san, scale da chuan hoa
    public Transform body;
    public Transform armPivot;      // vai tay truoc
    public Transform holder;        // ban tay (cam vu khi)
    public SpriteRenderer weapon;
    public Transform muzzle;
    public Transform helmetAnchor;  // dinh dau
    public SpriteRenderer helmet;
    public float headWidth = 1f;    // de scale mu
    public SpriteRenderer[] weaponPoses;   // pose setup tay trong Editor (theo index vu khi)
    public SpriteRenderer[] helmetPoses;   // pose setup tay trong Editor (theo index mu)
    public SpriteRenderer[] chestPoses;    // Buddy: pose ao giap (theo index ao)
    public SpriteRenderer[] parts;
}

// KB Meme: chon mod -> monster -> weapon -> armor -> tu dong battle -> Win/Fail -> store
public class MemeFlow : MonoBehaviour
{
    // ----- Luat: dung vu khi khac che thi thang; mu dung loai cong them chut damage -----
    public int monsterHP = 100;
    public float monsterWalkTime = 3.2f;
    public int counterWeaponDamage = 90;
    public int normalWeaponDamage = 40;
    public int counterArmorBonus = 15;
    public int normalArmorBonus = 10;
    public int[] counterWeapon = { 2, 1, 0 };   // Deer<-Bat, Verity<-RPG, Siren<-RocketFist
    public int[] counterArmor = { 2, 0, 1 };    // Deer<-Military, Verity<-Chef, Siren<-Witch
    public float[] weaponWorldSize = { 1.4f, 2.4f, 1.9f };   // do dai vu khi tren man hinh
    // diem cam: lech pivot sprite ra truoc ban tay (ty le chieu dai vu khi). Gun gang dam pivot = bang cam -> 0
    public float[] weaponGrip = { 0f, 0.05f, 0.38f };
    public float heroMeleeAdvance = 1.6f;    // gay bong chay: nhan vat tien len bao nhieu
    public float rangedAimAngle = 90f;       // goc z TUYET DOI cua sprite tay (ArmFront) khi cam sung
    public float recoilAngle = 12f;          // do giat nong sung moi phat
    public float helmetWidthMul = 1.15f;
    public int fullHelmetIndex = 2;          // mu linh (Helmet7) trum ca dau
    public float fullHelmetWidthMul = 1.2f;  // rong hon dau 1 chut
    public float fullHelmetLift = 0.05f;     // nhich len (theo chieu cao dau)

    [Header("Buddy KB (tuy chon, mac dinh = hanh vi Meme)")]
    public int fixedMonsterIdx = -1;      // >=0: quai dung san trong map, bo buoc chon monster
    public bool chestStage;               // them buoc chon ao giap sau mu
    public Sprite[] chestSprites;         // icon ao giap
    public string[] stageTitles;          // Mod, Monster, Weapon, Armor, Chest (rong = chu mac dinh)
    public int winWeaponIdx = -1;         // >=0: chi vu khi nay thang (bo qua bang khac che)
    public int rocketWeaponIndex = 1;     // Meme: RPG
    public int meleeWeaponIndex = 2;      // Meme: gay bong chay
    public Sprite[] projectileSprites;    // dan theo index vu khi (null = giu sprite dan cu)
    public float[] projectileWorldSize;   // chieu dai dan tren man hinh
    public int[] weaponShots;             // so phat theo index vu khi (rong = 3)
    public float[] weaponShotGap;         // nghi giua cac phat (rong = 0.2)
    public float[] projectileFlightTime;  // thoi gian bay (rong = 0.25)

    public LunaController luna;
    public Sprite backgroundSprite;

    [Header("World")]
    public Camera cam;
    public Transform world;
    public SpriteRenderer background;
    public HeroRig[] heroes;              // 0 Gugu, 1 Black cat, 2 Banana cat
    public MonsterView[] monsters;        // 0 Deer, 1 Verity, 2 Siren head
    public float monsterStopDistance = 2.0f;
    public Sprite[] weaponSprites;        // 0 RocketFist, 1 RPG, 2 Bat
    public float[] weaponRotation = { 0f, 0f, -90f };    // 0 BoxingGloveGun, 1 RPG, 2 Bat
    public Sprite[] armorSprites;         // 0 Chef, 1 Witch, 2 Military
    public SpriteRenderer rocket;         // dan RPG
    public bool rocketExplodes = true;    // PSF: dan luoi cua -> khong no
    public float rocketSpin = 0f;         // PSF: luoi cua xoay (do/giay)
    public int flameWeaponIndex = -1;     // PSF: index sung phun lua (-1 = khong dung)
    public ParticleSystem flameFx;        // lua phun (tao san trong scene)
    public float flameTime = 0.5f;
    public int extraMeleeWeaponIndex = -1; // PSF: cua may danh can chien nhu gay
    public SpriteRenderer[] burnFlames;    // PSF: lua chay tren nguoi quai (tao san trong scene)
    public Sprite[] burnFrames;            // flame_1..4
    public string[] burnPartNames = { "Torso", "Head", "LegL", "LegR" };
    public float burnWorldHeight = 0.9f;
    public float burnTime = 1.5f;          // chay them sau phat phun cuoi
    public float burnFps = 12f;
    public SpriteRenderer fistProjectile;
    public SpriteRenderer explosion;
    public SpriteRenderer muzzleFlash;
    public ParticleSystem[] fireworks;

    [Header("UI")]
    public GameObject choicePanel;
    public Text titleText;
    public GameObject titleBar;
    public Image[] slotIcons;
    public Button[] slotButtons;
    public Sprite[] modIcons;
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
    public AudioClip clickClip, equipClip, rpgClip, boomClip, hitClip, swingClip, winClip, failClip;

    enum Stage { Mod, Monster, Weapon, Armor, Busy, Result, Ended, Chest }
    Stage stage;
    int heroIdx = -1, monsterIdx = -1, weaponIdx = -1, armorIdx = -1, chestIdx = -1;
    bool started, ended, killStarted;
    int dmgTextIdx, shotIndex, shotTotal, dmgTotal;
    float handT;
    float armRestAngle;
    bool lastWin;
    bool retried;          // da bam REPLAY -> lan chon tiep theo ket thuc bang CTA
    Vector3 heroStartPos, monsterStartPos;
    Vector3 worldBase;
    HeroRig hero;
    Color[] heroColors;

    WaitForSeconds w005, w015, w02, w03, w04, w08;

    void Awake()
    {
        w005 = new WaitForSeconds(0.05f); w015 = new WaitForSeconds(0.15f); w02 = new WaitForSeconds(0.2f);
        w03 = new WaitForSeconds(0.3f); w04 = new WaitForSeconds(0.4f); w08 = new WaitForSeconds(0.8f);
        worldBase = world.localPosition;
        ApplyBackground();
        for (int i = 0; i < slotButtons.Length; i++)
        {
            int idx = i;
            slotButtons[i].onClick.AddListener(delegate { OnSlot(idx); });
        }
        popupButton.onClick.AddListener(OnPopupButton);
        endCatcher.onClick.AddListener(Cta);
    }

    void ApplyBackground()
    {
        Texture2D tex = luna != null ? luna.backgroundTexture : null;
        if (tex == null) { if (backgroundSprite != null) background.sprite = backgroundSprite; return; }
        if (background.sprite != null && background.sprite.texture == tex) return;
        float w = tex.width, h = tex.height;
        if (w <= 0f || h <= 0f) return;
        float ppu = h / 11.52f;
        background.sprite = Sprite.Create(tex, new Rect(0f, 0f, w, h), new Vector2(0.5f, 0.5f), ppu);
        CameraFit fit = cam != null ? cam.GetComponent<CameraFit>() : null;
        if (fit != null) { fit.bgHalfWidth = w / ppu * 0.5f; fit.Apply(); }
    }

    void Start()
    {
        for (int i = 0; i < heroes.Length; i++)
        {
            // pose vu khi / mu dang bat san trong Editor de chinh tay -> an khi chay
            HidePoses(heroes[i].weaponPoses);
            HidePoses(heroes[i].helmetPoses);
            HidePoses(heroes[i].chestPoses);
            heroes[i].root.gameObject.SetActive(false);
        }
        for (int i = 0; i < monsters.Length; i++) monsters[i].gameObject.SetActive(i == fixedMonsterIdx);
        if (fixedMonsterIdx >= 0)
        {
            // Buddy: quai dung san trong map tu dau
            monsterIdx = fixedMonsterIdx;
            MonsterView fm = monsters[monsterIdx];
            fm.Init(monsterHP);
            monsterStartPos = fm.transform.position;
        }
        rocket.gameObject.SetActive(false);
        fistProjectile.gameObject.SetActive(false);
        explosion.gameObject.SetActive(false);
        muzzleFlash.gameObject.SetActive(false);
        bigText.gameObject.SetActive(false);
        effectText.gameObject.SetActive(false);
        for (int i = 0; i < damageTexts.Length; i++) damageTexts[i].gameObject.SetActive(false);
        popup.SetActive(false);
        endCatcher.gameObject.SetActive(false);
        ShowChoices(Stage.Mod);
    }

    void Update()
    {
        if (hand.gameObject.activeSelf) { handT += Time.deltaTime; AnimateHand(); }
    }

    // ---------------- UI ----------------
    void ShowChoices(Stage s)
    {
        stage = s;
        Sprite[] icons = s == Stage.Mod ? modIcons : (s == Stage.Monster ? monsterIcons : (s == Stage.Weapon ? weaponSprites : (s == Stage.Chest ? chestSprites : armorSprites)));
        int ti = s == Stage.Mod ? 0 : (s == Stage.Monster ? 1 : (s == Stage.Weapon ? 2 : (s == Stage.Chest ? 4 : 3)));
        if (stageTitles != null && ti < stageTitles.Length && !string.IsNullOrEmpty(stageTitles[ti])) titleText.text = stageTitles[ti];
        else titleText.text = s == Stage.Mod ? "CHOOSE ONE MOD TO BATTLE" : (s == Stage.Monster ? "CHOOSE ONE MONSTER" : (s == Stage.Weapon ? "CHOOSE ONE WEAPON" : (s == Stage.Chest ? "CHOOSE ONE CHESTPLATE" : "CHOOSE ONE ARMOR")));
        for (int i = 0; i < slotIcons.Length; i++) slotIcons[i].sprite = icons[i];
        titleText.gameObject.SetActive(true);
        if (titleBar != null) titleBar.SetActive(true);
        choicePanel.SetActive(true);
        StartCoroutine(PopIn(choicePanel.transform));
        hand.gameObject.SetActive(true);
        hand.SetAsLastSibling();
        handT = 0f;
        AnimateHand();
    }

    void BusyChoices()
    {
        stage = Stage.Busy;
        HideHand();
        titleText.gameObject.SetActive(false);
        if (titleBar != null) titleBar.SetActive(false);
    }

    const float HAND_MOVE = 0.35f, HAND_PRESS = 0.3f, HAND_WAIT = 0.35f;

    Vector2 SlotPoint(int i)
    {
        return ((RectTransform)slotButtons[i].transform).anchoredPosition + new Vector2(10f, -25f);
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
        float hs = 1f;
        Vector2 pos;
        if (local < HAND_MOVE)
        {
            float k = local / HAND_MOVE; k = k * k * (3f - 2f * k);
            Vector2 from = step == 0 ? SlotPoint(cur) + new Vector2(260f, -220f) : SlotPoint(prev);
            pos = Vector2.Lerp(from, SlotPoint(cur), k);
        }
        else if (local < HAND_MOVE + HAND_PRESS)
        {
            float press = Mathf.Sin((local - HAND_MOVE) / HAND_PRESS * Mathf.PI);
            pos = SlotPoint(cur) + new Vector2(0f, -12f * press);
            hs = 1f - 0.15f * press;
            float s = 1f - 0.08f * press;
            slotButtons[cur].transform.localScale = new Vector3(s, s, 1f);
        }
        else pos = SlotPoint(cur);
        hand.anchoredPosition = pos;
        hand.localScale = new Vector3(hs, hs, 1f);
    }

    void HideHand()
    {
        hand.gameObject.SetActive(false);
        for (int i = 0; i < slotButtons.Length; i++) slotButtons[i].transform.localScale = Vector3.one;
    }

    void OnSlot(int i)
    {
        if (ended) { Cta(); return; }
        if (stage == Stage.Busy || stage == Stage.Result) return;
        FirstInput();
        Play(clickClip);
        Stage s = stage;
        BusyChoices();
        if (s == Stage.Mod) { heroIdx = i; StartCoroutine(SpawnHero()); }
        else if (s == Stage.Monster) { monsterIdx = i; StartCoroutine(SpawnMonster()); }
        else if (s == Stage.Weapon) { weaponIdx = i; StartCoroutine(EquipWeapon()); }
        else if (s == Stage.Armor)
        {
            armorIdx = i;
            // Sau REPLAY: chon xong mon cuoi (mu) -> CTA + end luon, khong danh lai
            if (retried && !chestStage) { Cta(); return; }
            StartCoroutine(EquipArmorThenBattle());
        }
        else if (s == Stage.Chest)
        {
            chestIdx = i;
            if (retried) { Cta(); return; }
            StartCoroutine(EquipChestThenBattle());
        }
    }

    // Nut popup: thang -> store; thua -> CTA neu bat "CTA when press Retry", khong thi choi lai
    void OnPopupButton()
    {
        Play(clickClip);
        if (lastWin || ended || (luna != null && luna.ctaOnRetry)) { Cta(); return; }
        StartCoroutine(RetryRound());
    }

    // Choi lai cung mod + monster: hoi phuc vi tri, thao vu khi/mu, chon lai vu khi -> mu
    IEnumerator RetryRound()
    {
        retried = true;
        stage = Stage.Busy;
        popup.SetActive(false);
        bigText.gameObject.SetActive(false);
        effectText.gameObject.SetActive(false);
        // mod ve cho cu
        hero.root.position = heroStartPos;
        hero.armPivot.localRotation = Quaternion.Euler(0f, 0f, armRestAngle);
        if (hero.weapon != null) hero.weapon.gameObject.SetActive(false);
        if (hero.helmet != null) hero.helmet.gameObject.SetActive(false);
        HidePoses(hero.chestPoses);
        // monster hoi day mau, roi lai o vi tri xuat phat
        MonsterView m = monsters[monsterIdx];
        m.transform.position = monsterStartPos;
        m.Init(monsterHP);
        yield return StartCoroutine(m.Spawn());
        yield return w02;
        ShowChoices(Stage.Weapon);
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
        stage = Stage.Ended;
        Luna.Unity.LifeCycle.GameEnded();
        Debug.Log("[KSBP Meme] GameEnded");
    }

    public void Cta()
    {
        EndGame();
        Debug.Log("[KSBP Meme] InstallFullGame");
        Luna.Unity.Playable.InstallFullGame();
    }

    void Play(AudioClip c) { if (c != null && sfx != null) sfx.PlayOneShot(c); }

    // ---------------- Setup steps ----------------
    IEnumerator DropIn(Transform t, Vector3 endLocal, float height, float dur)
    {
        float tt = 0f;
        while (tt < dur)
        {
            tt += Time.deltaTime;
            float k = Mathf.Clamp01(tt / dur);
            t.localPosition = endLocal + new Vector3(0f, (1f - k * k) * height, 0f);
            yield return null;
        }
        t.localPosition = endLocal;
    }

    IEnumerator Squash(Transform t)
    {
        Vector3 s0 = t.localScale;
        float tt = 0f;
        while (tt < 0.2f)
        {
            tt += Time.deltaTime;
            float q = Mathf.Sin(Mathf.Clamp01(tt / 0.2f) * Mathf.PI) * 0.12f;
            t.localScale = new Vector3(s0.x * (1f + q), s0.y * (1f - q), s0.z);
            yield return null;
        }
        t.localScale = s0;
    }

    IEnumerator SpawnHero()
    {
        hero = heroes[heroIdx];
        heroStartPos = hero.root.position;
        heroColors = new Color[hero.parts.Length];
        for (int i = 0; i < hero.parts.Length; i++) heroColors[i] = hero.parts[i].color;
        hero.weapon.gameObject.SetActive(false);
        hero.helmet.gameObject.SetActive(false);
        hero.root.gameObject.SetActive(true);
        yield return StartCoroutine(DropIn(hero.body, hero.body.localPosition, 8f / Mathf.Abs(hero.root.localScale.y), 0.35f));
        Play(hitClip);
        StartCoroutine(Shake(0.15f, 0.12f));
        yield return StartCoroutine(Squash(hero.body));
        yield return w02;
        ShowChoices(fixedMonsterIdx >= 0 ? Stage.Weapon : Stage.Monster);
    }

    IEnumerator SpawnMonster()
    {
        MonsterView m = monsters[monsterIdx];
        m.Init(monsterHP);
        monsterStartPos = m.transform.position;
        yield return StartCoroutine(m.Spawn());
        Play(hitClip);
        StartCoroutine(Shake(0.2f, 0.15f));
        yield return w04;
        ShowChoices(Stage.Weapon);
    }

    void SetupWeaponSprite(int w)
    {
        SpriteRenderer sr = hero.weapon;
        sr.sprite = weaponSprites[w];
        Vector3 size = sr.sprite.bounds.size;
        float len = Mathf.Max(size.x, size.y);
        float lossy = Mathf.Abs(hero.root.localScale.x);
        float s = weaponWorldSize[w] / len / lossy;
        sr.transform.localScale = new Vector3(s, s, 1f);
        sr.transform.localRotation = Quaternion.Euler(0f, 0f, weaponRotation[w]);
        // dat bang cam / chuoi vu khi vao ban tay
        sr.transform.localPosition = new Vector3(weaponWorldSize[w] / lossy * weaponGrip[w], 0f, 0f);
        hero.muzzle.localPosition = new Vector3(weaponWorldSize[w] / lossy * 0.8f, 0f, 0f);
    }

    IEnumerator EquipWeapon()
    {
        // Uu tien pose da setup tay trong Editor (WeaponPose_i duoi ban tay)
        if (hero.weaponPoses != null && weaponIdx < hero.weaponPoses.Length && hero.weaponPoses[weaponIdx] != null)
        {
            hero.weapon.gameObject.SetActive(false);
            hero.weapon = hero.weaponPoses[weaponIdx];
            Transform mz = hero.weapon.transform.Find("Muzzle");
            hero.muzzle = mz != null ? mz : hero.weapon.transform;
        }
        else SetupWeaponSprite(weaponIdx);
        Transform wt = hero.weapon.transform;
        Vector3 basePos = wt.localPosition;
        Quaternion baseRot = wt.localRotation;
        hero.weapon.gameObject.SetActive(true);
        float t = 0f;
        while (t < 0.45f)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.45f);
            wt.localPosition = basePos;
            wt.position = wt.position + new Vector3(0f, (1f - k * k) * 7f, 0f);
            wt.localRotation = baseRot * Quaternion.Euler(0f, 0f, (1f - k) * 360f);
            yield return null;
        }
        wt.localPosition = basePos;
        wt.localRotation = baseRot;
        Play(equipClip);
        yield return StartCoroutine(Squash(hero.body));
        yield return w02;
        ShowChoices(Stage.Armor);
    }

    IEnumerator EquipArmorThenBattle()
    {
        SpriteRenderer hm = hero.helmet;
        Vector3 end;
        bool usePose = hero.helmetPoses != null && armorIdx < hero.helmetPoses.Length && hero.helmetPoses[armorIdx] != null;
        if (usePose)
        {
            // Pose da setup tay trong Editor (HelmetPose_i): roi xuong dung vi tri/scale/xoay do
            hm.gameObject.SetActive(false);
            hm = hero.helmetPoses[armorIdx];
            hero.helmet = hm;
            end = hm.transform.localPosition;
        }
        else
        {
        hm.sprite = armorSprites[armorIdx];
        float w = hm.sprite.bounds.size.x;
        if (armorIdx == fullHelmetIndex)
        {
            // Mu linh co kinh che mat: trum kin ca dau (tam mu = tam dau)
            Bounds head = HeadWorldBounds();
            float worldScale = head.size.x * fullHelmetWidthMul / w;
            float ls = worldScale / Mathf.Abs(hero.helmetAnchor.lossyScale.x);
            hm.transform.localScale = new Vector3(ls, ls, 1f);
            Vector3 pivotWorld = head.center - hm.sprite.bounds.center * worldScale + new Vector3(0f, head.size.y * fullHelmetLift, 0f);
            end = hero.helmetAnchor.InverseTransformPoint(pivotWorld);
            end.z = 0f;
        }
        else
        {
            float s = hero.headWidth * helmetWidthMul / w;
            hm.transform.localScale = new Vector3(s, s, 1f);
            // day mu (bounds.min.y) dat tai helmetAnchor
            end = new Vector3(-hm.sprite.bounds.center.x * s, -hm.sprite.bounds.min.y * s, 0f);
        }
        }
        hm.gameObject.SetActive(true);
        yield return StartCoroutine(DropIn(hm.transform, end, 7f / Mathf.Abs(hero.root.localScale.y), 0.45f));
        Play(equipClip);
        yield return StartCoroutine(Squash(hero.body));
        yield return w03;
        if (chestStage) { ShowChoices(Stage.Chest); yield break; }
        // giu tab cuoi (armor) tren man hinh nhu scene cu; title + tay da an, bam bi chan (stage Busy)
        yield return StartCoroutine(Battle());
    }

    // Buddy: ao giap roi tu tren xuong dung pose ChestPose_i (setup trong Editor) roi battle
    IEnumerator EquipChestThenBattle()
    {
        if (hero.chestPoses != null && chestIdx < hero.chestPoses.Length && hero.chestPoses[chestIdx] != null)
        {
            SpriteRenderer cp = hero.chestPoses[chestIdx];
            Vector3 end = cp.transform.localPosition;
            cp.gameObject.SetActive(true);
            float lossy = Mathf.Abs(cp.transform.parent.lossyScale.y);
            yield return StartCoroutine(DropIn(cp.transform, end, 7f / (lossy > 0.0001f ? lossy : 1f), 0.45f));
            Play(equipClip);
            yield return StartCoroutine(Squash(hero.body));
        }
        yield return w03;
        yield return StartCoroutine(Battle());
    }

    static void HidePoses(SpriteRenderer[] poses)
    {
        if (poses == null) return;
        for (int i = 0; i < poses.Length; i++) if (poses[i] != null) poses[i].gameObject.SetActive(false);
    }

    // Bounds world cua dau (sprite "Head"); nhan vat than+dau chung 1 sprite thi lay phan tren cua than
    Bounds HeadWorldBounds()
    {
        Transform head = hero.body.Find("Head");
        if (head != null)
        {
            SpriteRenderer sr = head.GetComponent<SpriteRenderer>();
            if (sr != null && sr.sprite != null) return sr.bounds;
        }
        Transform torso = hero.body.Find("Torso");
        SpriteRenderer tsr = torso != null ? torso.GetComponent<SpriteRenderer>() : null;
        if (tsr == null) return new Bounds(hero.helmetAnchor.position, Vector3.one);
        // Banana_Cat: mat meo nam o khoang 40% tu tren xuong, cao ~30% than
        Bounds b = tsr.bounds;
        float h = b.size.y * 0.3f;
        return new Bounds(new Vector3(b.center.x, b.max.y - b.size.y * 0.4f, b.center.z), new Vector3(b.size.x, h, 0.1f));
    }

    // ---------------- Battle ----------------
    int NextShotDamage()
    {
        int a = (dmgTotal * shotIndex * 2 + shotTotal) / (shotTotal * 2);
        shotIndex++;
        int b = (dmgTotal * shotIndex * 2 + shotTotal) / (shotTotal * 2);
        return b - a;
    }

    float PerWeapon(float[] arr, float def) { return arr != null && weaponIdx >= 0 && weaponIdx < arr.Length && arr[weaponIdx] > 0f ? arr[weaponIdx] : def; }
    int PerWeaponInt(int[] arr, int def) { return arr != null && weaponIdx >= 0 && weaponIdx < arr.Length && arr[weaponIdx] > 0 ? arr[weaponIdx] : def; }

    Vector3 TargetOf(MonsterView m, Vector3 offset) { return m.headAnchor.position + new Vector3(0f, -0.9f, 0f) + offset; }

    IEnumerator Battle()
    {
        MonsterView m = monsters[monsterIdx];
        bool counterW = winWeaponIdx >= 0 ? weaponIdx == winWeaponIdx : weaponIdx == counterWeapon[monsterIdx];
        bool counterA = armorIdx == counterArmor[monsterIdx];
        dmgTotal = (counterW ? counterWeaponDamage : normalWeaponDamage) + (counterA ? counterArmorBonus : normalArmorBonus);
        shotTotal = 3;
        shotIndex = 0;
        killStarted = false;
        // goc nghi cua tay (user setup trong Editor) de tra ve sau tran
        armRestAngle = hero.armPivot.localEulerAngles.z;
        if (armRestAngle > 180f) armRestAngle -= 360f;

        if (weaponIdx == meleeWeaponIndex || weaponIdx == extraMeleeWeaponIndex)
        {
            // Gay bong chay (can chien): nhan vat cung tien ve phia quai, gap nhau o giua roi vut 3 cai
            float meetHeroX = hero.root.position.x + heroMeleeAdvance;
            StartCoroutine(m.WalkTo(meetHeroX + monsterStopDistance, monsterWalkTime * 0.7f));
            yield return StartCoroutine(RaiseArm(150f));
            yield return StartCoroutine(HeroWalkTo(meetHeroX, monsterWalkTime * 0.6f));
            while (m.IsWalking && m.Hp > 0) yield return null;
            for (int i = 0; i < 3 && m.Hp > 0; i++) yield return StartCoroutine(Swing(m));
        }
        else
        {
            StartCoroutine(m.WalkTo(hero.root.position.x + monsterStopDistance, monsterWalkTime));
            // sung: nang tay 90 do quanh tam xoay vai (goc tren-trai sprite tay) de nong chia ngang ve quai
            yield return StartCoroutine(RaiseArm(rangedAimAngle));
            shotTotal = PerWeaponInt(weaponShots, 3);
            float gap = PerWeapon(weaponShotGap, 0.2f);
            for (int i = 0; i < shotTotal && m.Hp > 0; i++)
            {
                if (weaponIdx == flameWeaponIndex && flameFx != null) yield return StartCoroutine(FireFlame(m));
                else if (weaponIdx == rocketWeaponIndex) yield return StartCoroutine(FireRocket(m));
                else yield return StartCoroutine(FireGlove(m));
                if (gap == 0.2f) yield return w02;
                else { float g = 0f; while (g < gap) { g += Time.deltaTime; yield return null; } }
            }
        }
        yield return w03;

        if (m.Hp <= 0)
        {
            ShowEffect("SUPER EFFECTIVE!", new Color(0.35f, 1f, 0.35f));
            yield return StartCoroutine(RaiseArm(armRestAngle));
            while (m.gameObject.activeSelf) yield return null;
            yield return StartCoroutine(ShowResult(true));
        }
        else
        {
            ShowEffect("RESIST!", new Color(0.6f, 0.8f, 1f));
            while (m.IsWalking) yield return null;
            StartCoroutine(m.AttackLunge());
            yield return w03;
            yield return StartCoroutine(HeroHurt());
            yield return StartCoroutine(RaiseArm(armRestAngle));
            yield return StartCoroutine(ShowResult(false));
        }
    }

    IEnumerator RaiseArm(float angle)
    {
        float from = hero.armPivot.localEulerAngles.z;
        if (from > 180f) from -= 360f;
        float t = 0f;
        while (t < 0.15f)
        {
            t += Time.deltaTime;
            hero.armPivot.localRotation = Quaternion.Euler(0f, 0f, Mathf.Lerp(from, angle, Mathf.Clamp01(t / 0.15f)));
            yield return null;
        }
        hero.armPivot.localRotation = Quaternion.Euler(0f, 0f, angle);
    }

    IEnumerator Swing(MonsterView m)
    {
        Play(swingClip);
        float t = 0f;
        while (t < 0.12f)
        {
            t += Time.deltaTime;
            hero.armPivot.localRotation = Quaternion.Euler(0f, 0f, Mathf.Lerp(150f, 30f, Mathf.Clamp01(t / 0.12f)));
            yield return null;
        }
        Hit(m, NextShotDamage(), TargetOf(m, Vector3.zero), true);
        yield return w015;
        yield return StartCoroutine(RaiseArm(150f));
        yield return w015;
    }

    IEnumerator FireRocket(MonsterView m)
    {
        Play(rpgClip);
        StartCoroutine(Flash());
        StartCoroutine(Recoil());
        SpriteRenderer p = rocket;
        Vector3 from = hero.muzzle.position;
        p.gameObject.SetActive(true);
        p.transform.position = from;
        Vector3 to = TargetOf(m, Vector3.zero);
        float t = 0f;
        while (t < 0.3f)
        {
            t += Time.deltaTime;
            if (m.Hp > 0) to = TargetOf(m, Vector3.zero);
            p.transform.position = Vector3.Lerp(from, to, Mathf.Clamp01(t / 0.3f));
            if (rocketSpin != 0f) p.transform.Rotate(0f, 0f, -rocketSpin * Time.deltaTime);
            yield return null;
        }
        p.gameObject.SetActive(false);
        if (rocketExplodes)
        {
            Play(boomClip);
            StartCoroutine(Explode(to));
        }
        Hit(m, NextShotDamage(), to, true);
    }

    // Sung phun lua: phun 1 luong lua (ParticleSystem tao san) toi quai roi tinh damage
    IEnumerator FireFlame(MonsterView m)
    {
        Play(rpgClip);
        Transform ft = flameFx.transform;
        flameFx.Play();
        float t = 0f;
        while (t < flameTime)
        {
            t += Time.deltaTime;
            Vector3 from = hero.muzzle.position;
            Vector3 dir = TargetOf(m, Vector3.zero) - from;
            dir.z = 0f;
            ft.position = from;
            if (dir.sqrMagnitude > 0.0001f) ft.rotation = Quaternion.LookRotation(dir.normalized, Vector3.back);
            yield return null;
        }
        flameFx.Stop();
        StartBurn(m);
        Hit(m, NextShotDamage(), TargetOf(m, Vector3.zero), true);
    }

    // ---------------- Chay nguoi (PSF) ----------------
    float burnUntil;
    bool burning;

    void StartBurn(MonsterView m)
    {
        if (burnFlames == null || burnFlames.Length == 0 || burnFrames == null || burnFrames.Length == 0) return;
        burnUntil = Time.time + burnTime;
        if (burning) return;
        burning = true;
        for (int i = 0; i < burnFlames.Length; i++)
        {
            SpriteRenderer f = burnFlames[i];
            Transform part = m.body.Find(burnPartNames[i % burnPartNames.Length]);
            if (part == null) part = m.body;
            f.transform.SetParent(part, false);
            f.transform.localPosition = Vector3.zero;
            f.transform.localRotation = Quaternion.identity;
            float lossy = Mathf.Abs(part.lossyScale.y);
            float s = burnWorldHeight / burnFrames[0].bounds.size.y / (lossy > 0.0001f ? lossy : 1f);
            f.transform.localScale = new Vector3(s, s, 1f);
            f.sprite = burnFrames[i % burnFrames.Length];
            f.color = new Color(1f, 1f, 1f, 0f);
            f.gameObject.SetActive(true);
        }
        StartCoroutine(BurnLoop());
    }

    IEnumerator BurnLoop()
    {
        float t = 0f;
        while (Time.time < burnUntil)
        {
            t += Time.deltaTime;
            int frame = (int)(t * burnFps);
            float a = Mathf.Clamp01(t / 0.15f) * Mathf.Clamp01((burnUntil - Time.time) / 0.4f);
            for (int i = 0; i < burnFlames.Length; i++)
            {
                SpriteRenderer f = burnFlames[i];
                f.sprite = burnFrames[(frame + i) % burnFrames.Length];
                Color c = f.color; c.a = a; f.color = c;
            }
            yield return null;
        }
        for (int i = 0; i < burnFlames.Length; i++) burnFlames[i].gameObject.SetActive(false);
        burning = false;
    }

    // Sung gang dam: ban 1 qua gang (bullet_glove) bay thang toi quai
    IEnumerator FireGlove(MonsterView m)
    {
        Play(rpgClip);
        StartCoroutine(Recoil());
        SpriteRenderer p = fistProjectile;
        Sprite ps = projectileSprites != null && weaponIdx < projectileSprites.Length ? projectileSprites[weaponIdx] : null;
        if (ps != null)
        {
            // Buddy: dan rieng tung vu khi, scale theo chieu dai mong muon
            p.sprite = ps;
            float size = PerWeapon(projectileWorldSize, 0.5f);
            float len = ps.bounds.size.x > 0.0001f ? ps.bounds.size.x : 1f;
            Transform par = p.transform.parent;
            float pl = par != null ? Mathf.Abs(par.lossyScale.x) : 1f;
            float sc = size / len / (pl > 0.0001f ? pl : 1f);
            p.transform.localScale = new Vector3(sc, sc, 1f);
        }
        Vector3 from = hero.muzzle.position;
        p.gameObject.SetActive(true);
        p.transform.position = from;
        p.transform.rotation = Quaternion.identity;
        Vector3 to = TargetOf(m, Vector3.zero);
        float flight = PerWeapon(projectileFlightTime, 0.25f);
        float t = 0f;
        while (t < flight)
        {
            t += Time.deltaTime;
            if (m.Hp > 0) to = TargetOf(m, Vector3.zero);
            p.transform.position = Vector3.Lerp(from, to, Mathf.Clamp01(t / flight));
            yield return null;
        }
        p.gameObject.SetActive(false);
        Hit(m, NextShotDamage(), to, true);
    }

    // Nhan vat buoc toi (gay bong chay can chien): nhun nguoi khi di
    IEnumerator HeroWalkTo(float worldX, float dur)
    {
        Vector3 start = hero.root.position;
        Vector3 p = start;
        float t = 0f;
        while (t < dur)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / dur);
            p.x = Mathf.Lerp(start.x, worldX, k * k * (3f - 2f * k));
            p.y = start.y + Mathf.Abs(Mathf.Sin(t * 12f)) * 0.08f;
            hero.root.position = p;
            yield return null;
        }
        p.x = worldX; p.y = start.y;
        hero.root.position = p;
    }

    void Hit(MonsterView m, int dmg, Vector3 pos, bool big)
    {
        if (m.Hp <= 0) return;
        bool dead = m.TakeDamage(dmg);
        Play(hitClip);
        ShowDamage(dmg, pos);
        StartCoroutine(Shake(big ? 0.25f : 0.1f, big ? 0.2f : 0.08f));
        if (dead && !killStarted)
        {
            killStarted = true;
            Play(boomClip);
            StartCoroutine(Shake(0.4f, 0.35f));
            StartCoroutine(m.Die());
        }
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

    IEnumerator Flash()
    {
        muzzleFlash.gameObject.SetActive(true);
        muzzleFlash.transform.position = hero.muzzle.position;
        yield return w005;
        muzzleFlash.gameObject.SetActive(false);
    }

    // Giat sung: xoay quanh pivot cua chinh khau sung (bang cam), nong hech len roi ve
    IEnumerator Recoil()
    {
        Transform wt = hero.weapon.transform;
        Quaternion r0 = wt.localRotation;
        wt.localRotation = r0 * Quaternion.Euler(0f, 0f, recoilAngle);
        yield return w005;
        yield return w005;
        wt.localRotation = r0;
    }

    IEnumerator HeroHurt()
    {
        Play(hitClip);
        StartCoroutine(Shake(0.35f, 0.3f));
        Transform b = hero.body;
        Vector3 basePos = b.localPosition;
        float t = 0f;
        while (t < 0.5f)
        {
            t += Time.deltaTime;
            float k = Mathf.Clamp01(t / 0.5f);
            float s = Mathf.Sin(k * Mathf.PI);
            Color c = Color.Lerp(new Color(1f, 0.3f, 0.3f, 1f), Color.white, k);
            for (int i = 0; i < hero.parts.Length; i++) hero.parts[i].color = c * heroColors[i];
            b.localRotation = Quaternion.Euler(0f, 0f, s * 14f);
            b.localPosition = basePos + new Vector3(-s * 0.5f / Mathf.Abs(hero.root.localScale.x), 0f, 0f);
            yield return null;
        }
        for (int i = 0; i < hero.parts.Length; i++) hero.parts[i].color = heroColors[i];
        b.localRotation = Quaternion.identity;
        b.localPosition = basePos;
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

    // ---------------- FX text / result ----------------
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
        stage = Stage.Busy;
        AudioClip heroClip = null;
        if (luna != null)
            heroClip = win ? luna.GetWinSfx(heroIdx) : luna.GetFailSfx(heroIdx);
        Play(heroClip);

        // Fixed 1s pause after the hit; don't wait for the character SFX to finish.
        float resultDelay = 1f;
        float elapsed = 0f;
        while (elapsed < resultDelay)
        {
            elapsed += Time.deltaTime;
            yield return null;
        }

        stage = Stage.Result;
        bigText.text = win ? "YOU WIN!" : "FAIL!";
        bigText.color = win ? new Color(0.35f, 1f, 0.35f) : new Color(1f, 0.3f, 0.3f);
        bigText.gameObject.SetActive(true);
        if (win) StartCoroutine(FireworksRoutine());
        StartCoroutine(PopIn(bigText.transform));
        popupTitle.text = win ? "MONSTER DEFEATED!" : "THE MONSTER SURVIVED!";
        popupButtonLabel.text = win ? "NEXT BATTLE" : "REPLAY";
        popupButton.image.color = win ? new Color(0.3f, 0.8f, 0.3f) : new Color(1f, 0.6f, 0.15f);
        popup.SetActive(true);
        Play(win ? winClip : failClip);
        lastWin = win;
        bool ctaRetry = luna != null && luna.ctaOnRetry;
        if (win || ctaRetry)
        {
            // ket thuc that: bam nut / cham man hinh -> store
            EndGame();
            endCatcher.gameObject.SetActive(true);
        }
        yield return StartCoroutine(PopIn(popup.transform));
        StartCoroutine(Pulse(popupButton.transform));
    }

    IEnumerator FireworksRoutine()
    {
        if (fireworks == null) yield break;
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

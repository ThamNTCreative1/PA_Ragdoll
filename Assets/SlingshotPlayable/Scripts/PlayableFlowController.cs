using UnityEngine;
using UnityEngine.UI;

public class PlayableFlowController : MonoBehaviour
{
    // Chọn version qua LunaController. Ver 1: 4 lượt bắn, Ver 2: 2 lượt bắn -> chọn nhân vật -> end card -> CTA.
    [Range(1,2)] public int playableVersion = 1;
    public int tapCount;
    public enum Phase { IntroMap, PanToSling, Ready, Dragging, Flying, ResultDelay, ReturnToSling, AwaitSpawnTap, Store, SelectHero, EndCard }
    public Phase phase;
    public RagdollActor[] actors;            // 4 ragdoll trống, mỗi lượt 1 cái
    public PlayableCameraController cameraRig;
    public LineRenderer leftBand, rightBand;
    public Transform[] trajectoryDots;
    public RectTransform handGuide;
    public CanvasGroup handAlpha;
    public Text prompt, actorLabel, versionLabel;
    public AudioSource audioSource;
    public AudioClip launchSound, impactSound;
    // BGM + SFX bổ sung (Kenney CC0 / OpenGameArt CC0)
    public AudioSource musicSource;
    public AudioClip bgm, grabSound, spawnSound, knockSound, ctaSound;
    public AudioClip[] impactSounds;
    public AudioClip flySound;
    [Range(0, 1)] public float flyVolume = .8f;
    [Range(0, 1)] public float spawnVolume = 1f;
    [Range(0, 1)] public float musicVolume = .45f;
    float lastImpactSound;
    public Vector2 anchor = new Vector2(-7, 2.6f);
    // Hai đầu chạc ná (nơi buộc dây thun), theo sprite Slingshot.
    public Vector3 leftBandTip = new Vector3(-7.8f, 3.44f, 0);
    public Vector3 rightBandTip = new Vector3(-6.21f, 3.44f, 0);
    public float grabRadius = 1.8f;
    public float maxPull = 2.2f;
    public float launchScale = 8.2f;
    public float introHold = 1.25f;
    public float resultHold = 1.25f;
    public float maxFlightTime = 15;   // không còn dùng (không giới hạn thời gian bay)
    public bool storeOpened;
    public int installCallCount;

    [Header("Heroes")]
    public HeroSkins heroSkins;
    public int[] heroOrder = { 0, 1, 2, 3 };   // id skin cho lượt 1..4 (LunaController ghi đè)
    public int shotIndex;
    public string introText = "REACH THE GUARDS!";   // chữ lúc mở đầu (mỗi scene đặt riêng)

    [Header("Hero select + End card")]
    public GameObject selectRoot;
    public RectTransform[] selectButtons;
    public Image[] selectFrames, selectPortraits;
    public Text[] selectNames;
    public Sprite frameNormal, frameHighlight;
    public int handTargetButton = 1;
    public GameObject endCardRoot;
    public Image endCardPortrait;
    public Text endCardTitle;
    public RectTransform ctaButton;

    RagdollActor current;
    Camera view, uiCamera;
    float timer, flightTime, settledTime, handTimer, hitTime;
    public float hitReturnTime = 2.5f;   // thời gian tối đa chờ sau lần va chạm đầu
    public float minHitTime = 2f;        // nằm yên sớm thì vẫn chờ ít nhất chừng này sau va chạm
    bool started, gameEnded;
    int pointerId = -1;
    Vector2 pull;
    int[] selectIds = new int[3];

    int ShotCount { get { return playableVersion == 2 ? 2 : 4; } }

    void Start()
    {
        Application.runInBackground = true;
        view = cameraRig.view;
        uiCamera = handGuide.GetComponentInParent<Canvas>().worldCamera;
        dotBaseScale = new Vector3[trajectoryDots.Length];
        for (int i = 0; i < trajectoryDots.Length; i++) dotBaseScale[i] = trajectoryDots[i].localScale;
        cameraRig.onAfterMove = UpdateHandReady;
        playableVersion = Mathf.Clamp(playableVersion, 1, 2);
        tapCount = 0; shotIndex = 0; storeOpened = false; installCallCount = 0;
        for (int i = 0; i < actors.Length; i++) { actors[i].gameObject.SetActive(false); actors[i].Initialize(); }
        if (selectRoot != null) selectRoot.SetActive(false);
        if (endCardRoot != null) endCardRoot.SetActive(false);
        LoadActor(0);
        cameraRig.transform.position = cameraRig.mapPosition;
        phase = Phase.IntroMap; timer = 0;
        if (versionLabel != null) versionLabel.text = playableVersion == 1 ? "VER 1" : "VER 2";
        prompt.text = introText;
        SetDots(false);
        StartMusic(); // BGM chạy ngay khi vào playable
    }
    void StartMusic()
    {
        if (musicSource == null || bgm == null || musicSource.isPlaying) return;
        musicSource.clip = bgm; musicSource.loop = true; musicSource.volume = musicVolume; musicSource.Play();
    }
    void BeginInput()
    {
        if (started) return;
        started = true;
        StartMusic();
#if LUNA || UNITY_LUNA
        Luna.Unity.LifeCycle.GameStarted();
#endif
    }
    int HeroId(int shot) { return heroOrder != null && shot < heroOrder.Length ? heroOrder[shot] : shot; }
    string HeroName(int id) { return heroSkins != null && id >= 0 && id < heroSkins.skins.Length ? heroSkins.skins[id].label : ""; }
    void LoadActor(int index)
    {
        current = actors[Mathf.Min(index, actors.Length - 1)];
        int id = HeroId(index);
        if (heroSkins != null) heroSkins.Apply(current, id);
        current.LoadAt(anchor); pull = anchor;
        actorLabel.text = HeroName(id); UpdateBands(anchor);
        handTimer = 0;
    }
    // Giữ lại cho tương thích (không còn cần tap để spawn).
    public void SpawnTap() { NextShot(); }
    void NextShot()
    {
        shotIndex++; tapCount = shotIndex;
        if (shotIndex >= ShotCount) { ShowHeroSelect(); return; }
        LoadActor(shotIndex); phase = Phase.Ready; timer = 0;
        PlaySfx(spawnSound, spawnVolume);
    }
    // Cho phép bắt nhân vật cả khi camera còn đang lướt về ná (intro / pan).
    bool CanGrab { get { return phase == Phase.Ready || phase == Phase.PanToSling || phase == Phase.IntroMap; } }
    public bool BeginDrag(Vector2 world)
    {
        if (!CanGrab || (world - anchor).sqrMagnitude > grabRadius * grabRadius) return false;
        return StartDragging(world);
    }
    bool StartDragging(Vector2 world)
    {
        BeginInput(); phase = Phase.Dragging; current.SetDragging(true);
        current.SetCollidersEnabled(false);   // để tia dò điểm rơi không đụng chính nhân vật
        grabOffset = world - anchor; grabScreen = Vector2.zero; grabUnitsPerPixel = 0;
        Drag(world); PlaySfx(grabSound, .6f);
        cameraRig.SetAim(true);   // zoom ra để thấy phòng địch + điểm rơi
        return true;
    }
    // Kéo theo toạ độ màn hình, quy đổi bằng tỉ lệ camera lúc bắt đầu kéo,
    // để khi camera zoom ra thì nhân vật không bị "trượt" theo.
    void BeginDragScreen(Vector2 screen)
    {
        if (!CanGrab) return;
        Vector2 world = World(screen);
        // Vùng chạm: trong bán kính world HOẶC trong ~16% cạnh ngắn màn hình quanh nhân vật
        // (khi camera zoom xa nhân vật rất nhỏ, chạm theo world dễ trượt).
        Vector3 heroScreen = view.WorldToScreenPoint(new Vector3(anchor.x, anchor.y, 0));
        float screenRadius = Mathf.Min(view.pixelWidth, view.pixelHeight) * .16f;
        bool near = (world - anchor).sqrMagnitude <= grabRadius * grabRadius
                 || (screen - new Vector2(heroScreen.x, heroScreen.y)).sqrMagnitude <= screenRadius * screenRadius;
        if (!near || !StartDragging(world)) return;
        grabScreen = screen;
        grabUnitsPerPixel = view.orthographicSize * 2f / Mathf.Max(1, view.pixelHeight);
    }
    void DragScreen(Vector2 screen)
    {
        if (phase != Phase.Dragging) return;
        if (grabUnitsPerPixel <= 0) { Drag(World(screen)); return; }
        Drag(anchor + grabOffset + (screen - grabScreen) * grabUnitsPerPixel);
    }
    Vector3[] dotBaseScale;
    Vector2 grabScreen, grabOffset;
    float grabUnitsPerPixel;
    public void Drag(Vector2 world)
    {
        if (phase != Phase.Dragging) return;
        Vector2 delta = Vector2.ClampMagnitude(world - anchor, maxPull);
        delta.x = Mathf.Min(.1f, delta.x);
        pull = anchor + delta; current.transform.position = pull; UpdateBands(pull);
        cameraRig.aimFocus = pull;
        UpdateTrajectory((anchor - pull) * launchScale);
    }
    // Rải chấm đều theo thời gian bay tới điểm rơi (chạm sàn / tường / lính), to ở đầu nhỏ dần về cuối.
    void UpdateTrajectory(Vector2 velocity)
    {
        Vector2 origin = current.torso.transform.position; // Belly is the aiming and flight center.
        Vector2 g = Physics2D.gravity * current.torso.gravityScale;
        float step = Time.fixedDeltaTime;
        float a = .5f * g.y, b = velocity.y + .5f * g.y * step, c = origin.y;
        float disc = b * b - 4 * a * c;
        float total = a < 0 && disc > 0 ? (-b - Mathf.Sqrt(disc)) / (2 * a) : 3f;
        total = Mathf.Clamp(total, .4f, trajectoryTime);
        float dotScale = Mathf.Clamp(view.orthographicSize / 9f, 1f, 2f);   // chấm to hơn chút khi camera zoom ra (có giới hạn)
        int n = trajectoryDots.Length;
        Vector2 prev = origin;
        bool landed = false;
        int shown = 0;
        for (int i = 0; i < n; i++)
        {
            Transform dot = trajectoryDots[i];
            if (landed) { dot.gameObject.SetActive(false); continue; }
            shown++;
            float t = total * (i + 1) / n;
            // Box2D integrates velocity before position on each fixed step.
            int ticks = Mathf.FloorToInt(t / step);
            float remainder = t - ticks * step;
            float elapsed = ticks * step;
            Vector2 p = origin + velocity * t + g * (.5f * elapsed * (elapsed + step) + (elapsed + step) * remainder);
            // 3 tia song song (giữa / trên / dưới) ~ bề dày thân nhân vật, để không lọt qua khe giữa các khớp.
            // Không dùng hit.fraction (Luna có thể không hỗ trợ) -> tự tính từ hit.point.
            // Bỏ qua va chạm sát ná (nhân vật đang kéo / chính cái ná) để đường chấm không bị cắt cụt.
            float best = 2f;
            float segLen = Vector2.Distance(prev, p);
            if (segLen > .0001f && (p - pull).sqrMagnitude > ignoreNearPull * ignoreNearPull)
            {
                for (int k = -1; k <= 1; k++)
                {
                    Vector2 off = new Vector2(0, k * .3f);
                    RaycastHit2D hit = Physics2D.Linecast(prev + off, p + off);
                    if (hit.collider == null || hit.collider.transform.IsChildOf(current.transform)) continue;
                    float frac = Vector2.Distance(prev + off, hit.point) / segLen;
                    if (frac < best) best = frac;
                }
            }
            if (best <= 1f) { p = Vector2.Lerp(prev, p, best); landed = true; }
            dot.gameObject.SetActive(true);
            dot.position = p;
            prev = p;
        }
        // Chấm to ở gần ná, nhỏ dần đều tới chấm cuối (điểm rơi).
        for (int i = 0; i < shown; i++)
        {
            float k = shown > 1 ? (float)i / (shown - 1) : 0;
            float size = Mathf.Lerp(dotSizeStart, dotSizeEnd, k) * dotScale;
            // dotBaseScale[0] là scale ứng với chấm .13 đơn vị world (đặt trong editor)
            trajectoryDots[i].localScale = dotBaseScale[0] * (size / .13f);
        }
    }
    public float dotSizeStart = .13f, dotSizeEnd = .05f;   // kích thước chấm (world) đầu -> cuối
    public float trajectoryTime = 3.2f;   // thời gian bay tối đa mà chấm vẽ tới
    public float ignoreNearPull = 2.5f;   // không xét va chạm trong bán kính này quanh nhân vật đang kéo
    public void ReleaseShot()
    {
        if (phase != Phase.Dragging) return;
        SetDots(false);
        cameraRig.SetAim(false);
        if ((pull - anchor).sqrMagnitude < .035f)
        {
            current.transform.position = anchor; current.SetDragging(false); UpdateBands(anchor); phase = Phase.Ready;
            cameraRig.PanTo(cameraRig.slingPosition); return;
        }
        current.Launch((anchor - pull) * launchScale);
        cameraRig.followTarget = current.torso.transform;
        UpdateBands(anchor); phase = Phase.Flying; flightTime = 0; settledTime = 0; hitTime = 0;
        if (launchSound != null) audioSource.PlayOneShot(launchSound, .55f);
        PlaySfx(flySound, flyVolume);
    }
    void Update()
    {
        timer += Time.deltaTime;
        handTimer += Time.deltaTime;
        if (phase == Phase.IntroMap && timer >= introHold)
        { cameraRig.PanTo(cameraRig.slingPosition); phase = Phase.PanToSling; }
        else if (phase == Phase.PanToSling && !cameraRig.IsPanning) { phase = Phase.Ready; timer = 0; handTimer = 0; }
        else if (phase == Phase.Flying)
        {
            flightTime += Time.deltaTime;
            settledTime = current.hasCollided && current.IsSettled() ? settledTime + Time.deltaTime : 0;
            if (current.hasCollided) hitTime += Time.deltaTime;
            Vector2 p = current.torso.position;
            // Chạm vào thứ gì đó ~1.3s (hoặc nằm yên sớm hơn) là quay về ná.
            // Chỉ quay về ná SAU khi đã va chạm: đủ hitReturnTime (2.5s), hoặc đã nằm yên và va chạm >= 2s.
            // Không giới hạn thời gian bay. Chỉ về ná khi đã va chạm, hoặc nhân vật bay ra khỏi bản đồ.
            bool afterHit = current.hasCollided && (hitTime >= hitReturnTime || (settledTime > .3f && hitTime >= minHitTime));
            if (afterHit || p.y < -6 || p.x > 40 || p.x < -30)
            { phase = Phase.ResultDelay; timer = 0; }
        }
        else if (phase == Phase.ResultDelay && timer >= resultHold)
        {
            // Không đóng băng ngay (nhân vật có thể còn đang bay/nảy -> bị treo lơ lửng).
            // Để vật lý chạy tiếp, nhân vật tự đóng băng khi đã nằm yên trên sàn.
            current.FreezeWhenSettled();
            cameraRig.PanTo(cameraRig.slingPosition); phase = Phase.ReturnToSling;
        }
        else if (phase == Phase.ReturnToSling && !cameraRig.IsPanning) { timer = 0; NextShot(); }
        UpdateUI(); ReadInput();
    }
    void ReadInput()
    {
        if (Input.touchCount > 0)
        {
            Touch t = Input.GetTouch(0);
            if (t.phase == TouchPhase.Began) { pointerId = t.fingerId; PointerDown(t.position); }
            else if (t.fingerId == pointerId)
            {
                if (t.phase == TouchPhase.Ended) { ReleaseShot(); pointerId = -1; }
                else if (t.phase == TouchPhase.Canceled) { CancelDrag(); pointerId = -1; }
                else DragScreen(t.position);
            }
            return;
        }
        if (Input.GetMouseButtonDown(0)) PointerDown(Input.mousePosition);
        else if (Input.GetMouseButtonUp(0)) ReleaseShot();
        else if (Input.GetMouseButton(0)) DragScreen(Input.mousePosition);
    }
    Vector2 World(Vector2 p) { return view.ScreenToWorldPoint(new Vector3(p.x, p.y, 10)); }
    void PointerDown(Vector2 p)
    {
        // Màn chọn nhân vật: chạm bất kỳ đâu -> end game + CTA luôn (không qua end card).
        if (phase == Phase.SelectHero) { BeginInput(); PlaySfx(ctaSound, .8f); OpenStore(); return; }
        if (phase == Phase.EndCard || phase == Phase.Store) { OpenStore(); return; }
        BeginDragScreen(p);
    }
    void CancelDrag()
    {
        if (phase != Phase.Dragging) return;
        current.transform.position = anchor; current.SetDragging(false); UpdateBands(anchor); SetDots(false); phase = Phase.Ready;
        cameraRig.SetAim(false); cameraRig.PanTo(cameraRig.slingPosition);
    }
    void OnApplicationFocus(bool focus) { if (!focus) CancelDrag(); }
    void UpdateBands(Vector2 point)
    {
        leftBand.SetPosition(0, leftBandTip); leftBand.SetPosition(1, point);
        rightBand.SetPosition(0, rightBandTip); rightBand.SetPosition(1, point);
    }
    void SetDots(bool on) { for (int i = 0; i < trajectoryDots.Length; i++) trajectoryDots[i].gameObject.SetActive(on); }

    // ---------- Hero select ----------
    void ShowHeroSelect()
    {
        phase = Phase.SelectHero; handTimer = 0;
        int n = heroSkins != null ? heroSkins.skins.Length : 0, count = 0;
        // Ưu tiên nhân vật chưa bắn, thiếu thì lấy nhân vật đã bắn (từ lượt đầu).
        for (int id = 0; id < n && count < 3; id++) if (!WasShot(id)) selectIds[count++] = id;
        for (int s = 0; s < ShotCount && count < 3; s++) if (!InSelect(HeroId(s), count)) selectIds[count++] = HeroId(s);
        for (int i = 0; i < selectButtons.Length; i++)
        {
            bool on = i < count;
            selectButtons[i].gameObject.SetActive(on);
            if (!on) continue;
            HeroSkin skin = heroSkins.skins[selectIds[i]];
            selectPortraits[i].sprite = skin.portrait;
            selectNames[i].text = skin.label;
            selectFrames[i].sprite = i == handTargetButton ? frameHighlight : frameNormal;
        }
        if (selectRoot != null) selectRoot.SetActive(true);
        PlaySfx(spawnSound, spawnVolume);
    }
    bool WasShot(int id) { for (int s = 0; s < ShotCount; s++) if (HeroId(s) == id) return true; return false; }
    bool InSelect(int id, int count) { for (int i = 0; i < count; i++) if (selectIds[i] == id) return true; return false; }
    void TrySelect(Vector2 screen)
    {
        for (int i = 0; i < selectButtons.Length; i++)
            if (selectButtons[i].gameObject.activeSelf && RectTransformUtility.RectangleContainsScreenPoint(selectButtons[i], screen, uiCamera))
            { BeginInput(); ShowEndCard(selectIds[i]); return; }
    }
    void ShowEndCard(int id)
    {
        if (selectRoot != null) selectRoot.SetActive(false);
        phase = Phase.EndCard; handTimer = 0;
        HeroSkin skin = heroSkins.skins[id];
        if (endCardPortrait != null) endCardPortrait.sprite = skin.portrait;
        if (endCardTitle != null) endCardTitle.text = "PLAY AS " + skin.label + "!";
        if (endCardRoot != null) endCardRoot.SetActive(true);
        PlaySfx(ctaSound, .8f);
        if (!gameEnded)
        {
            gameEnded = true;
#if LUNA || UNITY_LUNA
            Luna.Unity.LifeCycle.GameEnded();
#endif
        }
    }

    // ---------- UI ----------
    void PlaceHandAtScreen(Vector2 screen)
    {
        Vector2 local;
        RectTransformUtility.ScreenPointToLocalPointInRectangle((RectTransform)handGuide.parent, screen, uiCamera, out local);
        handGuide.anchoredPosition = local;
    }
    // Tay hướng dẫn kéo ná: gọi từ camera sau khi camera đã cập nhật vị trí/zoom trong frame,
    // nên tay luôn bám đúng nhân vật, không bị giật trễ 1 frame.
    // Chu kỳ 2s: hiện dần ở nhân vật -> nhấn -> kéo ra sau (mượt) -> giữ -> mờ dần -> lặp.
    void UpdateHandReady()
    {
        if (phase != Phase.Ready) return;
        float cycle = 2f;
        float t = (handTimer % cycle) / cycle;
        float move = Mathf.Clamp01((t - .15f) / .5f);
        move = move * move * (3 - 2 * move);
        float alpha = t < .12f ? t / .12f : (t > .82f ? Mathf.Clamp01((1 - t) / .18f) : 1f);
        float press = t < .15f ? Mathf.Lerp(1.12f, 1f, Mathf.Clamp01((t - .05f) / .1f)) : 1f;
        Vector2 p = anchor + new Vector2(-1.5f, -1.6f) * move;
        Vector3 sp = view.WorldToScreenPoint(new Vector3(p.x, p.y, 0));
        PlaceHandAtScreen(new Vector2(sp.x + 6, sp.y - 6));
        handGuide.localScale = Vector3.one * press;
        handAlpha.alpha = alpha;
    }
    void UpdateUI()
    {
        bool ready = phase == Phase.Ready;
        bool select = phase == Phase.SelectHero;
        bool endCard = phase == Phase.EndCard && ctaButton != null;
        if (!ready) handAlpha.alpha = select || endCard ? 1 : 0;
        // (tay hướng dẫn lúc Ready được đặt trong UpdateHandReady, chạy SAU khi camera di chuyển)
        if ((select && handTargetButton < selectButtons.Length) || endCard)
        {
            // Tính thẳng trong toạ độ canvas để không phụ thuộc độ phân giải màn hình.
            RectTransform b = select ? selectButtons[handTargetButton] : ctaButton;
            RectTransform parent = (RectTransform)handGuide.parent;
            Vector3 local = parent.InverseTransformPoint(b.position);
            float bob = Mathf.Abs(Mathf.Sin(handTimer * 4f));
            float ox = select ? 10 : 90;
            handGuide.anchoredPosition = new Vector2(local.x + ox + bob * 22, local.y - 20 - bob * 30);
            handGuide.localScale = Vector3.one * (1 - (1 - bob) * .12f);
            if (select)
                for (int i = 0; i < selectButtons.Length; i++)
                    selectButtons[i].localScale = Vector3.one * (i == handTargetButton ? 1.06f + .04f * Mathf.Sin(handTimer * 6f) : 1f);
        }
        if (phase == Phase.EndCard && ctaButton != null)
            ctaButton.localScale = Vector3.one * (1 + .07f * Mathf.Sin(handTimer * 6f));

        prompt.color = Color.white;
        if (ready || phase == Phase.Dragging) prompt.text = "DRAG BACK & RELEASE";
        else if (phase == Phase.Flying) prompt.text = "";
        else if (phase == Phase.ResultDelay || phase == Phase.ReturnToSling) prompt.text = "TRY ANOTHER HERO!";
        else if (select) prompt.text = "CHOOSE YOUR HERO!";
        else if (phase == Phase.EndCard || phase == Phase.Store) prompt.text = "";
        actorLabel.enabled = ready || phase == Phase.Dragging;
    }
    public void PlayImpact()
    {
        if (!started || Time.time < lastImpactSound + .07f) return;
        lastImpactSound = Time.time;
        AudioClip clip = impactSounds != null && impactSounds.Length > 0 ? impactSounds[Random.Range(0, impactSounds.Length)] : impactSound;
        PlaySfx(clip, .5f);
    }
    public void PlayKnock() { if (started) PlaySfx(knockSound, .8f); }
    void PlaySfx(AudioClip clip, float volume) { if (clip != null && audioSource != null) audioSource.PlayOneShot(clip, volume); }
    // Chạm vào end card -> mở store (gọi lại được nhiều lần).
    public void OpenStore()
    {
        storeOpened = true; installCallCount++;
        if (phase != Phase.EndCard && phase != Phase.SelectHero) phase = Phase.Store;
        if (!gameEnded)
        {
            gameEnded = true;
#if LUNA || UNITY_LUNA
            Luna.Unity.LifeCycle.GameEnded();
#endif
        }
#if LUNA || UNITY_LUNA
        Luna.Unity.Playable.InstallFullGame();
#else
        Debug.Log("[Playable] CTA InstallFullGame; version=" + playableVersion + "; shots=" + shotIndex + "; calls=" + installCallCount);
#endif
    }
}

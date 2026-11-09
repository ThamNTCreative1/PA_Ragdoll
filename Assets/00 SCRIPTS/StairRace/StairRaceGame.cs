using System.Collections;
using UnityEngine;
using TMPro;
using UnityEngine.UI;

/// <summary>
/// "Stair race" playable:
///  - Zoey stands on the tallest podium, arms open, holding Mira's weapon (left) and Rumi's weapon (right).
///  - Player = Rumi (right). Every tap on the center button pushes her stair column up.
///    Speed randomly switches fast/slow and is rubber-banded so the player can never win.
///  - NPC = Mira (left) climbs on her own and reaches the weapon at `npcWinTime` seconds.
///  - Lose -> Mira grabs her weapon, Rumi falls (ragdoll) -> crying Rumi + RETRY (goes to store).
///  - Remix music plays only while the player is tapping.
/// </summary>
public class StairRaceGame : MonoBehaviour
{
    // ---------------- Luna Playground ----------------
    [LunaPlaygroundField("NPC win time (seconds)")] public float npcWinTime = 20f;
    [LunaPlaygroundField("Tap power")] public float tapPower = 0.016f;
    [LunaPlaygroundField("Auto start NPC if no tap (seconds)")] public float autoStartDelay = 3f;
    [LunaPlaygroundField("Music keeps playing after last tap (seconds)")] public float musicGrace = 0.45f;
    [LunaPlaygroundField("Hint text")] public string hintMessage = "TAP FAST!";
    [LunaPlaygroundField("Lose title")] public string loseMessage = "YOU LOSE!";
    [LunaPlaygroundField("Retry text")] public string retryMessage = "RETRY";
    [LunaPlaygroundAsset("Remix music")] public AudioClip remixClip;
    [LunaPlaygroundAsset("Lose sound")] public AudioClip loseClip;
    [LunaPlaygroundAsset("Fall sound")] public AudioClip fallClip;
    [LunaPlaygroundAsset("Cry sound")] public AudioClip cryClip;

    // ---------------- Scene refs ----------------
    [Header("Characters")]
    public RagdollPose zoey;
    public RagdollPose mira;
    public RagdollPose rumi;

    [Header("World")]
    public Transform miraColumn;
    public Transform rumiColumn;
    public float podiumTop = 9.1f;
    public float startTop = 1.3f;
    public float blockSize = 1.3f;
    public Transform miraWeapon;   // grip pivot, sprite child points to +X
    public Transform rumiWeapon;
    public ResponsiveLayout layout;

    [Header("Audio")]
    public AudioSource music;
    public AudioSource sfx;

    [Header("UI")]
    public TapButton tapButton;
    public RectTransform tutorialHand;
    public TMP_Text hintText;
    public GameObject losePanel;
    public RectTransform loseContent;
    public TMP_Text loseTitle;
    public RectTransform cryImage;
    public Button retryButton;
    public TMP_Text retryText;

    // ---------------- State ----------------
    private enum State { Ready, Running, Lose }
    private State state = State.Ready;

    private float goalTop;
    private float npcTime;
    private float npcP;
    private float playerTarget;
    private float playerP;
    private float idleTimer;
    private float lastTapTime = -10f;
    private float tapKick;          // 1 on tap, decays
    private float speedFactor = 1f;
    private float phaseTimer;
    private int miraStep, rumiStep;
    private float miraPunch, rumiPunch;
    private bool musicStarted;
    private bool musicPaused;
    private bool miraHasWeapon;
    private float grabT;
    private Vector3 grabFrom;

    private static readonly float[] SpeedPhases = { 0.25f, 0.45f, 1.0f, 1.0f, 1.6f, 2.1f };

    private void Start()
    {
        zoey.Init(); mira.Init(); rumi.Init();

        // Zoey: T-pose on the podium
        zoey.leftArm = 90f;   // LeftHand -> +X (Rumi side)
        zoey.rightArm = -90f; // RightHand -> -X (Mira side)
        PlaceOn(zoey, zoey.transform.position.x, podiumTop);
        zoey.Apply();

        float gripY = zoey.LeftHandTip.y;
        float tallest = Mathf.Max(mira.height, rumi.height);
        goalTop = gripY - 0.15f - tallest;
        if (goalTop < startTop + 2f) goalTop = startTop + 2f;

        if (layout) layout.worldTop = zoey.transform.position.y - zoey.feetOffset + zoey.height + 0.4f;

        if (music)
        {
            if (remixClip) music.clip = remixClip;
            music.loop = true;
            music.playOnAwake = false;
        }

        if (hintText) hintText.text = hintMessage;
        if (loseTitle) loseTitle.text = loseMessage;
        if (retryText) retryText.text = retryMessage;
        if (retryButton) retryButton.onClick.AddListener(ClickCTA);
        if (losePanel) losePanel.SetActive(false);
        if (tapButton) tapButton.game = this;

        NextPhase();
        UpdateWorld();
    }

    // ---------------- Input ----------------
    public void OnTap()
    {
        if (state == State.Lose) return;
        if (state == State.Ready) StartRace();

        lastTapTime = Time.time;
        tapKick = 1f;
        playerTarget += tapPower * speedFactor;
        PlayMusic();

        if (tutorialHand && tutorialHand.gameObject.activeSelf) tutorialHand.gameObject.SetActive(false);
    }

    private void StartRace()
    {
        state = State.Running;
    }

    // ---------------- Loop ----------------
    private void Update()
    {
        float dt = Time.deltaTime;

#if UNITY_EDITOR
        if (Input.GetKeyDown(KeyCode.Space)) OnTap();
#endif

        if (state == State.Ready)
        {
            idleTimer += dt;
            if (idleTimer >= autoStartDelay) StartRace();
        }

        if (state == State.Running)
        {
            // NPC: reaches exactly 1 at npcWinTime, with a small wobble so it doesn't look robotic
            npcTime += dt;
            float lin = npcTime / npcWinTime;
            float wobble = 0.025f * Mathf.Sin(npcTime * 1.7f) * (1f - Mathf.Clamp01(lin));
            npcP = Mathf.Clamp01(lin + wobble);

            // Player speed phases: sometimes fast, sometimes slow
            phaseTimer -= dt;
            if (phaseTimer <= 0f) NextPhase();

            // Rubber band: player may lead a little early, NPC always overtakes near the end
            float k = Mathf.Clamp01((npcP - 0.55f) / 0.4f);
            k = k * k * (3f - 2f * k);
            float allowance = Mathf.Lerp(0.12f, -0.08f, k);
            float cap = Mathf.Min(npcP + allowance, 0.94f);
            if (playerTarget > cap) playerTarget = cap;
            if (playerTarget < 0f) playerTarget = 0f;

            float climbSpeed = 0.35f + 0.5f * speedFactor;
            playerP = Mathf.MoveTowards(playerP, playerTarget, dt * climbSpeed);

            if (npcP >= 1f) Lose();
        }

        tapKick = Mathf.MoveTowards(tapKick, 0f, dt * 5f);
        miraPunch = Mathf.MoveTowards(miraPunch, 0f, dt * 4f);
        rumiPunch = Mathf.MoveTowards(rumiPunch, 0f, dt * 4f);

        UpdateMusic();
        UpdateUI();
    }

    private void LateUpdate()
    {
        UpdateWorld();
    }

    private void NextPhase()
    {
        speedFactor = SpeedPhases[Random.Range(0, SpeedPhases.Length)];
        phaseTimer = Random.Range(0.6f, 1.5f);
    }

    // ---------------- World ----------------
    private float TopFor(float p) { return Mathf.Lerp(startTop, goalTop, p); }

    private void PlaceOn(RagdollPose c, float x, float top)
    {
        c.transform.position = new Vector3(x, top + c.feetOffset, c.transform.position.z);
    }

    private void UpdateWorld()
    {
        float t = Time.time;
        float miraTop = TopFor(npcP);
        float rumiTop = TopFor(playerP);

        // step "pop" when a new block passes the ground
        int ms = Mathf.FloorToInt((miraTop - startTop) / blockSize);
        if (ms != miraStep) { miraStep = ms; miraPunch = 1f; }
        int rs = Mathf.FloorToInt((rumiTop - startTop) / blockSize);
        if (rs != rumiStep) { rumiStep = rs; rumiPunch = 1f; }

        if (miraColumn) miraColumn.position = new Vector3(miraColumn.position.x, miraTop, miraColumn.position.z);
        if (rumiColumn) rumiColumn.position = new Vector3(rumiColumn.position.x, rumiTop, rumiColumn.position.z);

        // ---- Zoey ----
        zoey.bob = Mathf.Sin(t * 2.2f) * 0.02f;
        zoey.headAngle = Mathf.Sin(t * 1.3f) * 6f;
        if (state != State.Lose)
        {
            zoey.leftArm = 90f + Mathf.Sin(t * 2.2f) * 3f;
            zoey.rightArm = -90f - Mathf.Sin(t * 2.2f + 1f) * 3f;
        }
        zoey.Apply();

        // ---- Mira (NPC) ----
        bool running = state == State.Running;
        if (state != State.Lose)
        {
            float pump = running ? Mathf.Sin(t * 9f) : Mathf.Sin(t * 2f) * 0.3f;
            mira.leftArm = 25f + pump * 25f;
            mira.rightArm = -25f + pump * 25f;
            mira.bob = Mathf.Abs(pump) * 0.04f - miraPunch * 0.06f;
            mira.headAngle = pump * 5f;
            mira.leftLegAngle = 0f; mira.rightLegAngle = 0f;
        }
        PlaceOn(mira, mira.transform.position.x, miraTop);
        mira.Apply();

        // ---- Rumi (player) ----
        if (!rumi.IsRagdoll)
        {
            bool tapping = Time.time - lastTapTime < 0.35f;
            if (tapping)
            {
                float f = Mathf.Sin(t * 22f);
                rumi.leftArm = 40f + f * 35f;
                rumi.rightArm = -40f + f * 35f;
                rumi.headAngle = f * 6f;
                rumi.leftLegAngle = f * 10f;
                rumi.rightLegAngle = -f * 10f;
            }
            else
            {
                float s = Mathf.Sin(t * 2.4f);
                rumi.leftArm = 8f + s * 4f;
                rumi.rightArm = -8f + s * 4f;
                rumi.headAngle = s * 3f;
                rumi.leftLegAngle = 0f; rumi.rightLegAngle = 0f;
            }
            rumi.bob = tapKick * 0.06f - rumiPunch * 0.06f;
            PlaceOn(rumi, rumi.transform.position.x, rumiTop);
            rumi.Apply();
        }

        // ---- Weapons ----
        if (rumiWeapon) rumiWeapon.position = zoey.LeftHandTip;
        if (miraWeapon)
        {
            if (!miraHasWeapon)
            {
                miraWeapon.position = zoey.RightHandTip;
            }
            else
            {
                Vector3 target = mira.LeftHandTip;
                grabT = Mathf.MoveTowards(grabT, 1f, Time.deltaTime * 2.5f);
                float e = 1f - (1f - grabT) * (1f - grabT);
                miraWeapon.position = Vector3.Lerp(grabFrom, target, e);
                // grip has scale.x = -1 (points to -X); -90 deg turns it to point straight up
                miraWeapon.rotation = Quaternion.Euler(0f, 0f, Mathf.Lerp(0f, -90f, e));
            }
        }
    }

    // ---------------- Music ----------------
    private void PlayMusic()
    {
        if (!music || !music.clip) return;
        if (!musicStarted)
        {
            musicStarted = true;
            musicPaused = false;
            music.Play();
        }
        else if (musicPaused)
        {
            musicPaused = false;
            music.UnPause();
        }
    }

    private void UpdateMusic()
    {
        if (!music || !musicStarted || musicPaused) return;
        bool holding = tapButton && tapButton.Held;
        if (state == State.Lose || (!holding && Time.time - lastTapTime > musicGrace))
        {
            music.Pause();
            musicPaused = true;
        }
    }

    // ---------------- UI ----------------
    private void UpdateUI()
    {
        if (tutorialHand && tutorialHand.gameObject.activeSelf)
        {
            float s = 1f + Mathf.Abs(Mathf.Sin(Time.time * 5f)) * 0.18f;
            tutorialHand.localScale = new Vector3(s, s, 1f);
        }

        if (hintText && state != State.Lose)
        {
            float s = 1f + Mathf.Sin(Time.time * 8f) * 0.06f;
            hintText.rectTransform.localScale = new Vector3(s, s, 1f);
        }

        if (state == State.Lose && retryButton && losePanel && losePanel.activeSelf)
        {
            float s = 1f + Mathf.Sin(Time.time * 6f) * 0.06f;
            retryButton.transform.localScale = new Vector3(s, s, 1f);
            if (cryImage)
            {
                float r = Mathf.Sin(Time.time * 14f) * 2.5f;
                cryImage.localRotation = Quaternion.Euler(0f, 0f, r);
            }
        }
    }

    // ---------------- End ----------------
    private void Lose()
    {
        if (state == State.Lose) return;
        state = State.Lose;
        npcP = 1f;
        if (tapButton) { tapButton.ForceRelease(); tapButton.gameObject.SetActive(false); }
        if (tutorialHand) tutorialHand.gameObject.SetActive(false);
        if (hintText) hintText.gameObject.SetActive(false);
        Luna.Unity.LifeCycle.GameEnded();
        StartCoroutine(LoseSequence());
    }

    private IEnumerator LoseSequence()
    {
        // Mira raises her arms and grabs her weapon from Zoey
        mira.leftArm = 170f;
        mira.rightArm = -150f;
        mira.bob = 0f;
        mira.headAngle = 0f;
        grabFrom = miraWeapon ? miraWeapon.position : Vector3.zero;
        grabT = 0f;
        miraHasWeapon = true;
        zoey.rightArm = -20f;

        yield return new WaitForSeconds(0.45f);

        // Rumi loses balance and falls off her stairs
        rumi.EnableRagdoll(new Vector2(4f, 3f), -2f);
        if (sfx && fallClip) sfx.PlayOneShot(fallClip);

        yield return new WaitForSeconds(1.4f);
        ShowLosePanel();

        if (sfx && cryClip)
        {
            if (loseClip) yield return new WaitForSeconds(loseClip.length);
            sfx.PlayOneShot(cryClip);
        }
    }

    private void ShowLosePanel()
    {
        if (sfx && loseClip) sfx.PlayOneShot(loseClip);
        if (!losePanel) return;
        losePanel.SetActive(true);
        if (loseContent) StartCoroutine(PopIn(loseContent));
    }

    private IEnumerator PopIn(RectTransform rt)
    {
        float t = 0f;
        while (t < 1f)
        {
            t += Time.deltaTime / 0.35f;
            float x = Mathf.Clamp01(t);
            // back-out ease
            float c1 = 1.70158f, c3 = c1 + 1f;
            float e = 1f + c3 * Mathf.Pow(x - 1f, 3f) + c1 * Mathf.Pow(x - 1f, 2f);
            float s = Mathf.LerpUnclamped(0.5f, 1f, e);
            rt.localScale = new Vector3(s, s, 1f);
            yield return null;
        }
        rt.localScale = Vector3.one;
    }

    public void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}

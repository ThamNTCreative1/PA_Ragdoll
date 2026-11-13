using System.Collections.Generic;
using UnityEngine;

// "Stop Platform" mechanic with SSP characters: men drop in waves onto a plank floating over an acid pool. Every man on
// it pushes the plank down; deep enough and the acid eats them. Drag the stick to kill men before that happens.
// Fail: the plank is fully under the acid. Win: all waves spawned and nobody
// left alive.
public class AcidGame : MonoBehaviour
{
    [Header("Scene")]
    public AcidMan[] manPrefabs;
    public Transform menRoot;
    public AcidStick stick;
    public AcidFx fx;
    public Rigidbody2D plank;
    [SerializeField] private AcidAudio sfx;
    [SerializeField] private AcidKillCounter killCounter;
    [Tooltip("Gameplay acid line (world Y): parts below it are eaten. Below the drawn top (3.6) because the wavy " +
             "surface dips under it (user 2026-11-12: drawn top - 0.2).")]
    public float acidTop = 3.4f;
    public float acidBottom = 0f;
    [Tooltip("Half width of the pool (inside the walls), centred on x = poolCenterX.")]
    public float poolHalfWidth = 2.6f;
    public float poolCenterX = 0f;

    [Header("Plank")]
    [Tooltip("Plank centre Y with nobody on it.")]
    public float plankStartY = 3.8f;
    [Tooltip("How far the plank sinks per man (source: plank height / 5).")]
    public float plankStep = 0.12f;
    public float plankMinY = 1.8f;
    public float plankSpeed = 0.15f;
    public float plankSpeedFinished = 0.3f;

    [Header("Waves (source: 7x1, 10x2, 10x3)")]
    public int[] waveCount = new int[] { 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 };
    public float[] wavePause = new float[] { 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 };
    public float spawnY = 9f;
    public float spawnHalfWidth = 2.1f;

    [Header("Rules")]
    [Tooltip("Fail as soon as the plank is fully under the acid (its top below acidTop).")]
    public bool failWhenPlankSunk = true;

    [Header("Tutorial hand (world sprite)")]
    public Transform hand;
    public SpriteRenderer handRenderer;

    [Header("Result panels (full-screen UI)")]
    public GameObject winPanel;
    public GameObject failPanel;
    public float resultDelay = 1f;

    [Header("Time up (reference \"btr\" finale)")]
    public AcidTank tankPrefab;
    public float tankDropDelay = 0f;
    [Tooltip("Plank centre Y at the end (reference: plank resting on the pool floor).")]
    public float plankFinishY = 2.2f;
    [Tooltip("Seconds after the tank has settled before the end UI.")]
    public float tankEndDelay = 3f;
    [Tooltip("Safety: end UI at the latest this long after time up.")]
    public float tankTimeout = 15f;
    [Tooltip("Reference: a limp man drops every 5 s after the tank, 10 at most.")]
    public float finaleManInterval = 5f;
    public int finaleManMax = 10;

    public enum State { Run, Win, Fail, TimeUp }
    private State state = State.Run;
    // Playing: started from the intro (START button) and not finished.
    public bool Running { get { return started && state == State.Run; } }
    public bool Started { get { return started; } }
    public event System.Action OnStarted;
    public State CurrentState { get { return state; } }

    public AcidFx Fx { get { return fx; } }

    private readonly List<AcidMan> men = new List<AcidMan>();
    private int onPlank;     // men weighing on the plank: +1 when a man lands, -1 when the stick kills a landed man (melted men keep weighing, like the source)
    private int waveId;
    private float wavePauseLeft;
    private bool tutorialDone;
    private AcidMan hint;
    private int spawnSerial;
    private bool levelFinished;
    private float handT;
    private float resultTimer = -1;
    private bool sinking;
    private bool timeUp;
    private AcidTank tank;
    private float timeUpT = -1;
    private bool tankDropped;
    private float finaleManT;
    private int finaleMen;
    private System.Action onTimeUpDone;
    private int kills;
    private bool started;
    public int Kills { get { return kills; } }

    private void Awake()
    {
        if (winPanel) winPanel.SetActive(false);
        if (failPanel) failPanel.SetActive(false);
    }

    public AcidAudio Sfx { get { return sfx; } }

    // Colliders of the living men's parts -> their man (registered by AcidMan.Init), so a sword hit finds the man
    // without searching the hierarchy.
    private readonly Dictionary<Collider2D, AcidMan> manOf = new Dictionary<Collider2D, AcidMan>();

    public void RegisterPart(Collider2D col, AcidMan man) { if (col) manOf[col] = man; }
    public void UnregisterPart(Collider2D col) { if (col) manOf.Remove(col); }

    public AcidMan ManOf(Collider2D col)
    {
        AcidMan man;
        return col != null && manOf.TryGetValue(col, out man) ? man : null;
    }

    private void Start()
    {
        if (stick) stick.Init(this);
        if (plank) plank.position = new Vector2(plank.position.x, plankStartY);
    }

    // Called by the intro's START button: the first wave drops and the tutorial hand starts.
    public void StartGame()
    {
        if (started) return;
        started = true;
        NextWave();
        if (OnStarted != null) OnStarted();
    }

    public bool InAcid([Bridge.Ref] Vector3 p)
    {
        return p.y < acidTop && p.y > acidBottom - 1f && Mathf.Abs(p.x - poolCenterX) < poolHalfWidth + 0.1f;
    }


    public void OnFirstTouch() { }

    public void OnStickHit(AcidMan man, [Bridge.Ref] Vector3 at)
    {
        if (!Running || man.Dead) return;
        Vector3 head = man.HeadPosition;
        if (man.Kill())
        {
            if (man.Landed) onPlank--;
            kills++;
            if (killCounter) killCounter.SetCount(kills, true);
            tutorialDone = true;
            hint = null;
            if (fx)
            {
                fx.Hit(at);
                fx.Blood(at, stick && stick.body ? stick.body.linearVelocity : Vector2.zero);
                fx.Ghost(man.ghostSprite, head);
                fx.PlusOne(head + new Vector3(0f, 0.4f, 0f));
            }
            if (sfx) { sfx.PlayHit(); sfx.PlayGhost(); }
        }
    }

    // Called by the man when he dies (stick or acid).
    public void OnManDied(AcidMan man, bool byAcid)
    {
        if (!byAcid) return;
        if (fx) fx.Ghost(man.ghostSprite, man.HeadPosition);
        if (sfx && Running) sfx.PlayGhost();
    }

    // The plank only sinks once a man is standing on it (not while he is still falling).
    public void OnManLanded(AcidMan man)
    {
        if (state == State.Run) onPlank++;
    }

    public void OnManRemoved(AcidMan man)
    {
        men.Remove(man);
        if (hint == man) hint = null;
    }

    private void Update()
    {
        if (resultTimer >= 0)
        {
            resultTimer -= Time.deltaTime;
            if (resultTimer < 0) ShowResult();
        }
        if (started && state == State.Run)
        {
            if (failWhenPlankSunk && plank && PlankTop < acidTop) { Finish(State.Fail); }
            else
            {
                if (tutorialDone) wavePauseLeft -= Time.deltaTime;
                if (wavePauseLeft <= 0) NextWave();
            }
        }
        UpdateTimeUp();
        UpdateHand();
        if (sfx) sfx.SetAcid((state == State.Run && onPlank >= 5) || (tank != null && tank.InAcid));
    }

    // Plank top (world Y) for the landing check of the men.
    public float PlankTop { get { return plank ? plank.position.y + plankHalfHeight : acidTop; } }
    public float plankHalfHeight = 0.078195f; // half the reference bar (balka) thickness

    private void FixedUpdate()
    {
        if (!plank) return;
        float target = levelFinished ? plankStartY : Mathf.Max(plankMinY, plankStartY - onPlank * plankStep);
        float speed = levelFinished ? plankSpeedFinished : plankSpeed;
        if (sinking) { target = finishY; speed = plankSpeedFinished; }
        Vector2 p = plank.position;
        p.y = Mathf.MoveTowards(p.y, target, speed * Time.fixedDeltaTime);
        plank.MovePosition(p);
    }

    // Called by LunaController when Time Play runs out, in every build and every state (playing, won or lost):
    // no more waves, the plank sinks to the pool floor, the tank drops onto it (passing through the sword, like the
    // reference) and rides it into the acid; limp men keep dropping. onDone (may be null) once the tank has settled.
    public void TimeUp(System.Action onDone)
    {
        if (timeUp) return;
        if (!tankPrefab)
        {
            if (onDone != null) onDone();
            return;
        }
        timeUp = true;
        if (state == State.Run) state = State.TimeUp;
        sinking = true;
        finishY = plank ? Mathf.Min(plank.position.y, plankFinishY) : plankFinishY;
        onTimeUpDone = onDone;
        timeUpT = 0;
        tankDropped = false;
    }

    public bool PlankAtBottom { get { return plank && Mathf.Abs(plank.position.y - finishY) < 0.01f; } }

    // Time-up plank level: plankFinishY, or where it already is if it sank deeper (it never rises for the tank).
    private float finishY;

    private void UpdateTimeUp()
    {
        if (!timeUp) return;
        if (timeUpT >= 0) timeUpT += Time.deltaTime;
        if (!tankDropped && timeUpT >= tankDropDelay)
        {
            tankDropped = true;
            Vector3 pos = new Vector3(poolCenterX, spawnY + 2f, 0);
            tank = Instantiate(tankPrefab, pos, Quaternion.identity, menRoot);
            tank.Init(this);
            finaleManT = finaleManInterval;
        }
        if (tankDropped && finaleMen < finaleManMax)
        {
            finaleManT -= Time.deltaTime;
            if (finaleManT <= 0)
            {
                finaleManT = finaleManInterval;
                finaleMen++;
                SpawnLimp();
            }
        }
        if (timeUpT < 0) return;
        bool done = tank != null && tank.Settled;
        if (done && timeUpT < tankTimeout - tankEndDelay) timeUpT = tankTimeout - tankEndDelay;
        if (timeUpT >= tankTimeout)
        {
            timeUpT = -1;
            System.Action cb = onTimeUpDone;
            onTimeUpDone = null;
            if (cb != null) cb();
        }
    }

    // Source l(): check the result, then drop the next wave.
    private void NextWave()
    {
        if (state != State.Run) return;
        int alive = 0;
        for (int i = 0; i < men.Count; i++) if (men[i] && !men[i].Dead) alive++;
        if (waveId >= waveCount.Length)
        {
            if (alive == 0) Finish(State.Win);
            return;
        }
        wavePauseLeft = waveId < wavePause.Length ? wavePause[waveId] : 1f;
        int n = waveCount[waveId];
        for (int i = 0; i < n; i++) Spawn();
        waveId++;
    }

    // Finale decoration: does not count for the plank, the result or the tutorial.
    private void SpawnLimp()
    {
        if (manPrefabs == null || manPrefabs.Length == 0) return;
        AcidMan prefab = manPrefabs[Random.Range(0, manPrefabs.Length)];
        if (!prefab) return;
        Vector3 pos = new Vector3(poolCenterX + Random.Range(-spawnHalfWidth, spawnHalfWidth), spawnY + Random.Range(0f, 1.5f), 0);
        AcidMan man = Instantiate(prefab, pos, Quaternion.identity, menRoot);
        man.Init(this, 10 + (spawnSerial % 40) * 10);
        man.GoLimp();
        spawnSerial++;
        men.Add(man);
    }

    private void Spawn()
    {
        if (manPrefabs == null || manPrefabs.Length == 0) return;
        AcidMan prefab = manPrefabs[Random.Range(0, manPrefabs.Length)];
        if (!prefab) return;
        float x = poolCenterX + Random.Range(-spawnHalfWidth, spawnHalfWidth);
        if (spawnSerial == 0) x = FirstManX(x);
        Vector3 pos = new Vector3(x, spawnY + Random.Range(0f, 1.5f), 0);
        AcidMan man = Instantiate(prefab, pos, Quaternion.identity, menRoot);
        man.Init(this, 10 + (spawnSerial % 40) * 10);
        spawnSerial++;
        men.Add(man);
        if (!tutorialDone && hint == null) hint = man;
    }

    [Tooltip("The first man lands at least this far (world X) from the sword, so he is not killed by it on landing.")]
    public float firstManSwordGap = 1.2f;

    // First man (the tutorial target): random X, but away from the sword.
    private float FirstManX(float x)
    {
        if (!stick) return x;
        float sx = stick.transform.position.x;
        for (int i = 0; i < 20 && Mathf.Abs(x - sx) < firstManSwordGap; i++)
            x = poolCenterX + Random.Range(-spawnHalfWidth, spawnHalfWidth);
        if (Mathf.Abs(x - sx) < firstManSwordGap)
            x = sx > poolCenterX ? Mathf.Max(poolCenterX - spawnHalfWidth, sx - firstManSwordGap)
                                 : Mathf.Min(poolCenterX + spawnHalfWidth, sx + firstManSwordGap);
        return x;
    }

    private void Finish(State result)
    {
        if (state != State.Run) return;
        state = result;
        levelFinished = result == State.Win;
        if (result == State.Fail && stick) stick.gameObject.SetActive(false);
        resultTimer = resultDelay;
    }

    private void ShowResult()
    {
        if (state == State.Win && winPanel) winPanel.SetActive(true);
        if (state == State.Fail && failPanel) failPanel.SetActive(true);
    }

    // Source tutorial: the finger pulses on the stick, then slides to the first man, until he is killed.
    private void UpdateHand()
    {
        if (!hand) return;
        bool show = state == State.Run && !tutorialDone && hint != null && stick != null && !stick.Held;
        if (handRenderer) handRenderer.enabled = show;
        if (!show) { handT = 0; return; }
        handT += Time.deltaTime;
        float cycle = handT % 1.6f;
        Vector3 from = stick.transform.position;
        Vector3 to = hint.Center;
        if (cycle < 0.5f)
        {
            hand.position = from;
            hand.localScale = Vector3.one * Mathf.Lerp(1.5f, 1f, cycle / 0.5f);
        }
        else if (cycle < 1.2f)
        {
            float k = (cycle - 0.5f) / 0.7f;
            k = k * k * (3 - 2 * k);
            hand.position = Vector3.Lerp(from, to, k);
            hand.localScale = Vector3.one;
        }
        else
        {
            hand.position = to;
            if (handRenderer) handRenderer.enabled = false;
        }
    }
}

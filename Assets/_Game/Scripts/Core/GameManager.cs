using System.Collections;
using UnityEngine;

namespace MelonAd
{
    public enum GameState { Run, Fail, Win }

    /// <summary>
    /// Flow + input. The level is the Level_0 prefab INSTANCE placed in the scene under Canvas/World
    /// (no runtime Instantiate); retry restores it with LevelRefs.ResetLevel().
    /// Win zoom scales/moves Canvas/World (the camera is bound to the Screen Space - Camera canvas).
    /// </summary>
    public class GameManager : MonoBehaviour
    {
        public static GameManager I;

        [Header("Scene refs")]
        public LevelRefs level;
        public RectTransform zoomRoot;
        public Camera cam;
        public UIController ui;
        public Transform tapFinger;
        public Transform dragFinger;
        public SpriteRenderer dragFingerSprite;
        public LayerMask pickMask;

        [Header("Win zoom (original: scale 0.38 -> 0.58 centred on the exit)")]
        public float winZoom = 1.526f;
        public Vector2 winFocus = new Vector2(8.717f, -1.805f);
        public float winZoomDuration = 1f;

        [Header("Drag spring (Box2D mouse joint defaults)")]
        public float dragFrequency = 5f;
        public float dragDamping = 0.7f;
        public float dragMaxForce = 3000f;

        [Header("Tutorial")]
        public Vector2 tapFingerOffset = new Vector2(0f, -5.2f);

        public GameState State { get; private set; }

        int retriesUsed;
        bool musicStarted;
        bool firstRound = true;

        Grabbable dragGrab;
        Vector2 dragTarget;

        float tapT;
        float dragT;
        Vector3 dragStart;
        bool dragHintActive;

        Vector2 zoomPos0;
        Vector3 zoomScale0;
        Coroutine zoomRoutine;

        void Awake()
        {
            I = this;
            if (zoomRoot != null)
            {
                zoomPos0 = zoomRoot.anchoredPosition;
                zoomScale0 = zoomRoot.localScale;
            }
        }

        void Start()
        {
            if (level != null) level.Init();
            BeginRound();
        }

        bool TutorialOn()
        {
            return GameConfig.I == null || GameConfig.I.showTutorial;
        }

        void BeginRound()
        {
            if (level == null)
            {
                Debug.LogError("[GameManager] Assign the Level_0 instance (LevelRefs) placed under Canvas/World.");
                return;
            }
            if (!firstRound) level.ResetLevel();
            firstRound = false;
            if (FxManager.I != null) FxManager.I.ClearAll();

            State = GameState.Run;
            dragGrab = null;

            if (zoomRoutine != null) { StopCoroutine(zoomRoutine); zoomRoutine = null; }
            if (zoomRoot != null)
            {
                zoomRoot.anchoredPosition = zoomPos0;
                zoomRoot.localScale = zoomScale0;
            }

            ui.HideFail();
            ui.ShowHint(true);

            bool tut = TutorialOn() && level.tutorPin != null;
            tapFinger.gameObject.SetActive(tut);
            if (tut) tapFinger.position = level.tutorPin.transform.position + (Vector3)(tapFingerOffset * WorldScale());
            tapT = 0f;

            dragFinger.gameObject.SetActive(false);
            dragHintActive = false;
            SetDragFingerAlpha(1f);
        }

        /// <summary>World scale of the level container (1 at rest, grows during win zoom).</summary>
        float WorldScale()
        {
            return level != null ? level.transform.lossyScale.x : 1f;
        }

        void Update()
        {
            float dt = Mathf.Min(Time.deltaTime, 0.05f);

            if (Input.GetMouseButtonDown(0)) OnPointerDown(ScreenToWorld(Input.mousePosition));

            if (dragGrab != null)
            {
                if (Input.GetMouseButton(0) && dragGrab.CanGrab()) dragTarget = ScreenToWorld(Input.mousePosition);
                else dragGrab = null;
            }

            UpdateTutorial(dt);
        }

        void FixedUpdate()
        {
            if (dragGrab == null) return;
            Rigidbody2D rb = dragGrab.rb;
            float m = rb.mass;
            float w = 2f * Mathf.PI * dragFrequency;
            float k = m * w * w;
            float c = 2f * m * dragDamping * w;
            Vector2 f = k * (dragTarget - rb.position) - c * rb.linearVelocity;
            if (f.sqrMagnitude > dragMaxForce * dragMaxForce) f = f.normalized * dragMaxForce;
            rb.AddForce(f);
        }

        Vector2 ScreenToWorld(Vector3 sp)
        {
            Vector3 w = cam.ScreenToWorldPoint(sp);
            return new Vector2(w.x, w.y);
        }

        void OnPointerDown(Vector2 p)
        {
            if (State == GameState.Win)
            {
                LunaBridge.InstallFullGame();
                return;
            }

            ui.ShowHint(false);
            if (!musicStarted)
            {
                musicStarted = true;
                AudioManager.I.Play(Sfx.Music);
            }
            if (State != GameState.Run) return;

            Collider2D[] hits = Physics2D.OverlapPointAll(p, pickMask);
            for (int i = 0; i < hits.Length; i++)
            {
                Pin pin = hits[i].GetComponent<Pin>();
                if (pin != null && !pin.Removed) { RemovePin(pin); return; }
            }
            for (int i = 0; i < hits.Length; i++)
            {
                Grabbable g = hits[i].GetComponent<Grabbable>();
                if (g != null && g.CanGrab()) { StartDrag(g, p); return; }
            }

            float r = GameConfig.I != null ? GameConfig.I.pinTapRadius : 0.35f;
            hits = Physics2D.OverlapCircleAll(p, r * WorldScale(), pickMask);
            for (int i = 0; i < hits.Length; i++)
            {
                Pin pin = hits[i].GetComponent<Pin>();
                if (pin != null && !pin.Removed) { RemovePin(pin); return; }
            }
        }

        void StartDrag(Grabbable g, Vector2 p)
        {
            dragGrab = g;
            dragTarget = p;
            if (g.owner != null) SetDragFingerAlpha(0f);
        }

        void RemovePin(Pin pin)
        {
            pin.Remove();
            AudioManager.I.PlayOverlap(Sfx.Door);
            if (pin.evt == PinEvent.Tutor)
            {
                tapFinger.gameObject.SetActive(false);
                if (TutorialOn() && level.man != null)
                {
                    dragFinger.gameObject.SetActive(true);
                    dragHintActive = true;
                    dragT = 0f;
                    dragStart = level.man.head.transform.position;
                }
            }
            else if (pin.evt == PinEvent.Flame)
            {
                AudioManager.I.Play(Sfx.Flame);
            }
            else if (pin.evt == PinEvent.Fire)
            {
                if (level.rifle != null) level.rifle.OnPinRemoved();
            }
            LunaBridge.Event("pin_removed", (int)pin.evt);
        }

        void UpdateTutorial(float dt)
        {
            if (tapFinger.gameObject.activeSelf)
            {
                tapT += dt / 0.75f;
                if (tapT >= 1f) tapT -= 1f;
                float s = 1f - Mathf.Sin(Mathf.PI * tapT) / 8f;
                tapFinger.localScale = new Vector3(s, s, 1f);
            }

            if (dragHintActive)
            {
                dragT += dt / 1.75f;
                if (dragT >= 1f)
                {
                    dragT -= 1f;
                    if (level.man != null) dragStart = level.man.head.transform.position;
                }
                float ws = WorldScale();
                if (dragT < 0.25f)
                {
                    float s = 1f - Mathf.Sin(Mathf.PI * dragT * 2f) / 6f;
                    dragFinger.localScale = new Vector3(s, s, 1f);
                    dragFinger.position = dragStart;
                }
                else
                {
                    float u = dragT - 0.25f;
                    float s = 5f / 6f;
                    dragFinger.localScale = new Vector3(s, s, 1f);
                    dragFinger.position = dragStart + new Vector3(-u * u * 4f, 2f * u, 0f) * ws;
                }
            }
        }

        void SetDragFingerAlpha(float a)
        {
            if (dragFingerSprite == null) return;
            Color c = dragFingerSprite.color;
            c.a = a;
            dragFingerSprite.color = c;
        }

        void HideFingers()
        {
            tapFinger.gameObject.SetActive(false);
            dragFinger.gameObject.SetActive(false);
            dragHintActive = false;
        }

        // ---------------- flow ----------------

        public void OnManDied()
        {
            dragGrab = null;
            if (State != GameState.Run) return;
            State = GameState.Fail;
            AudioManager.I.Stop(Sfx.Flame);
            AudioManager.I.Stop(Sfx.Fire);
            HideFingers();
            LunaBridge.Event("fail", retriesUsed);
            StartCoroutine(ShowFailLater());
        }

        IEnumerator ShowFailLater()
        {
            float delay = GameConfig.I != null ? GameConfig.I.failPopupDelay : 1.5f;
            yield return new WaitForSeconds(delay);
            if (State == GameState.Fail)
            {
                AudioManager.I.Play(Sfx.Fail);
                ui.ShowFail();
            }
        }

        public void OnFailButton()
        {
            if (State != GameState.Fail) return;
            int allowed = GameConfig.I != null ? GameConfig.I.retries : 1;
            if (retriesUsed >= allowed)
            {
                LunaBridge.GameEnded();
                LunaBridge.InstallFullGame();
                return;
            }
            retriesUsed++;
            LunaBridge.Event("retry", retriesUsed);
            BeginRound();
        }

        public void OnExitReached()
        {
            if (State != GameState.Run) return;
            State = GameState.Win;
            dragGrab = null;
            HideFingers();
            AudioManager.I.Play(Sfx.Complete);
            LunaBridge.Event("win", retriesUsed);
            LunaBridge.GameEnded();
            LunaBridge.InstallFullGame();
            if (zoomRoot != null) zoomRoutine = StartCoroutine(ZoomToExit());
        }

        IEnumerator ZoomToExit()
        {
            Vector2 p0 = zoomRoot.anchoredPosition;
            Vector3 s0 = zoomRoot.localScale;
            Vector3 s1 = zoomScale0 * winZoom;
            Vector2 focus = (Vector2)level.transform.localPosition + winFocus;
            Vector2 p1 = -focus * s1.x;
            float t = 0f;
            while (t < 1f)
            {
                t += Time.deltaTime / Mathf.Max(0.01f, winZoomDuration);
                if (t > 1f) t = 1f;
                zoomRoot.anchoredPosition = Vector2.Lerp(p0, p1, t);
                zoomRoot.localScale = Vector3.Lerp(s0, s1, t);
                yield return null;
            }
            zoomRoutine = null;
        }
    }
}

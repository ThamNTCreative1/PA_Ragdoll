using UnityEngine;
using UnityEngine.UI;

namespace MelonAd
{
    /// <summary>
    /// Drives the hint (bobbing head), the FAIL popup and the WIN popup.
    /// All layout lives on the Canvas in the scene and is freely editable:
    /// animations are applied RELATIVE to the position / scale / rotation you set in the editor.
    /// FailRoot / WinRoot can be left active while editing; they are hidden automatically at start.
    /// </summary>
    public class UIController : MonoBehaviour
    {
        [Header("Hint")]
        public GameObject hint;
        public RectTransform head;

        [Header("Fail popup")]
        public GameObject failRoot;
        public RectTransform panel;
        public CanvasGroup panelGroup;
        public RectTransform button;
        public RectTransform finger;
        public Button retryButton;

        [Header("Win popup")]
        public GameObject winRoot;
        public RectTransform winPanel;
        public CanvasGroup winPanelGroup;
        public RectTransform winButton;
        public RectTransform winFinger;
        public Button nextButton;

        [Header("Intro (\"Survive 99 nights\")")]
        public GameObject introRoot;
        public RectTransform introCard;
        public CanvasGroup introGroup;
        [Tooltip("Seconds before the intro hides itself (a tap hides it earlier).")]
        public float introDuration = 2.5f;
        public float introFade = 0.3f;

        [Header("Animation")]
        public float slideDistance = 1000f;
        public float slideDuration = 0.25f;
        public float pulseDuration = 3f;
        public float wiggleDuration = 1.2f;

        /// <summary>Slide-in panel + pulsing / wiggling button with a tapping finger.</summary>
        class Popup
        {
            public GameObject root;
            public RectTransform panel, button, finger;
            public CanvasGroup group;
            Vector2 panelPos0;
            Vector3 buttonScale0, fingerScale0;
            Quaternion buttonRot0;
            public float t = -1f;
            float btnT;
            int btnPhase;

            public bool Valid { get { return root != null && panel != null; } }

            public void Init()
            {
                if (!Valid) return;
                panelPos0 = panel.anchoredPosition;
                if (button != null) { buttonScale0 = button.localScale; buttonRot0 = button.localRotation; }
                if (finger != null) fingerScale0 = finger.localScale;
                root.SetActive(false);
            }

            public void Show(UIController ui)
            {
                if (!Valid) return;
                root.SetActive(true);
                t = 0f;
                btnT = 0f;
                btnPhase = 0;
                if (finger != null) finger.gameObject.SetActive(false);
                if (button != null) { button.localScale = buttonScale0; button.localRotation = buttonRot0; }
                Apply(ui, 0f);
            }

            public void Hide()
            {
                if (!Valid) return;
                root.SetActive(false);
                t = -1f;
                panel.anchoredPosition = panelPos0;
            }

            public void Tick(UIController ui, float dt)
            {
                if (t < 0f) return;
                if (t < 1f)
                {
                    t += dt / ui.slideDuration;
                    if (t > 1f) t = 1f;
                    Apply(ui, t);
                }
                else AnimateButton(ui, dt);
            }

            void Apply(UIController ui, float k0)
            {
                float k = k0 + 0.4f * Mathf.Sin(Mathf.PI * k0);
                panel.anchoredPosition = panelPos0 + new Vector2(0f, ui.slideDistance * (1f - k));
                if (group != null) group.alpha = Mathf.Min(1f, 10f * k0);
            }

            void AnimateButton(UIController ui, float dt)
            {
                if (button == null) return;
                float dur = btnPhase == 0 ? ui.pulseDuration : ui.wiggleDuration;
                btnT += dt / dur;
                if (btnT >= 1f)
                {
                    btnT = 0f;
                    btnPhase = 1 - btnPhase;
                    button.localScale = buttonScale0;
                    button.localRotation = buttonRot0;
                    if (finger != null) finger.gameObject.SetActive(btnPhase == 1);
                }
                if (btnPhase == 0)
                {
                    button.localScale = buttonScale0 * (1f + Mathf.Sin(3f * Mathf.PI * btnT) / 20f);
                }
                else
                {
                    if (finger != null) finger.localScale = fingerScale0 * (1f - Mathf.Sin(Mathf.PI * btnT) / 8f);
                    button.localRotation = buttonRot0 * Quaternion.Euler(0f, 0f, Wiggle(btnT));
                }
            }
        }

        Popup fail, win;
        Vector3 introScale0;
        float introT = -1f;
        float introOutT = -1f;

        /// <summary>True while the intro panel is on screen (gameplay input is ignored).</summary>
        public bool IntroActive { get { return introRoot != null && introRoot.activeSelf && introOutT < 0f; } }

        Vector3 headScale0;
        Quaternion headRot0;
        float headT;
        int headPhase;

        void Awake()
        {
            if (head != null)
            {
                headScale0 = head.localScale;
                headRot0 = head.localRotation;
            }
            fail = new Popup { root = failRoot, panel = panel, group = panelGroup, button = button, finger = finger };
            win = new Popup { root = winRoot, panel = winPanel, group = winPanelGroup, button = winButton, finger = winFinger };
            fail.Init();
            win.Init();
            if (retryButton != null) retryButton.onClick.AddListener(OnRetryClicked);
            if (nextButton != null) nextButton.onClick.AddListener(OnNextClicked);
            if (introRoot != null)
            {
                if (introCard != null) introScale0 = introCard.localScale;
                introRoot.SetActive(true);
                introT = 0f;
                introOutT = -1f;
                ApplyIntro();
            }
        }

        /// <summary>Starts the intro fade-out (called on the first tap).</summary>
        public void DismissIntro()
        {
            if (introRoot == null || !introRoot.activeSelf || introOutT >= 0f) return;
            introOutT = 0f;
        }

        void TickIntro(float dt)
        {
            if (introRoot == null || !introRoot.activeSelf) return;
            introT += dt;
            if (introOutT < 0f && introT >= introDuration) introOutT = 0f;
            if (introOutT >= 0f)
            {
                introOutT += dt / Mathf.Max(0.01f, introFade);
                if (introOutT >= 1f)
                {
                    introRoot.SetActive(false);
                    return;
                }
            }
            ApplyIntro();
        }

        void ApplyIntro()
        {
            // pop in (overshoot) + gentle breathing, then fade/shrink out
            float k = Mathf.Clamp01(introT / 0.35f);
            float pop = k < 1f ? k + 0.5f * Mathf.Sin(Mathf.PI * k) : 1f + 0.03f * Mathf.Sin((introT - 0.35f) * 4f);
            float a = 1f;
            if (introOutT >= 0f)
            {
                a = 1f - introOutT;
                pop *= 1f - 0.2f * introOutT;
            }
            if (introCard != null) introCard.localScale = introScale0 * pop;
            if (introGroup != null) introGroup.alpha = a;
        }

        void OnRetryClicked()
        {
            if (fail.t < 1f) return;
            if (GameManager.I != null) GameManager.I.OnFailButton();
        }

        void OnNextClicked()
        {
            LunaBridge.GameEnded();
            LunaBridge.InstallFullGame();
        }

        public void ShowHint(bool visible)
        {
            if (hint == null || hint.activeSelf == visible) return;
            hint.SetActive(visible);
            headT = 0f;
            headPhase = 0;
            if (head == null) return;
            head.localScale = headScale0;
            head.localRotation = headRot0;
        }

        public void ShowFail() { fail.Show(this); }
        public void HideFail() { fail.Hide(); }
        public void ShowWin() { win.Show(this); }
        public void HideWin() { win.Hide(); }

        void Update()
        {
            float dt = Mathf.Min(Time.deltaTime, 0.05f);
            TickIntro(dt);
            if (hint != null && hint.activeSelf && head != null) AnimateHead(dt);
            fail.Tick(this, dt);
            win.Tick(this, dt);
        }

        static float Wiggle(float t)
        {
            return -Mathf.Sin(6f * t * Mathf.PI) * Mathf.Sin(t * Mathf.PI) / 7f * Mathf.Rad2Deg;
        }

        void AnimateHead(float dt)
        {
            float dur = headPhase == 0 ? pulseDuration : wiggleDuration;
            headT += dt / dur;
            if (headT >= 1f)
            {
                headT = 0f;
                headPhase = 1 - headPhase;
                head.localScale = headScale0;
                head.localRotation = headRot0;
            }
            if (headPhase == 0)
                head.localScale = headScale0 * (1f + Mathf.Sin(3f * Mathf.PI * headT) / 20f);
            else
                head.localRotation = headRot0 * Quaternion.Euler(0f, 0f, Wiggle(headT));
        }
    }
}

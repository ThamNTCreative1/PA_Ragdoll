using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;

namespace MelonAd
{
    /// <summary>
    /// Weapon inventory playable: scrollable inventory grid (~3/4 of the screen) + "Test Your Weapons!" + green START CTA.
    /// Portrait: inventory on top, text + CTA in the bottom quarter.
    /// Landscape: inventory on the left 3/4, text + CTA in the right column.
    /// Luna Playground: Background texture + BGM clip.
    /// Hierarchy is built by Game/Weapon Inventory/Build Scene (WeaponInventoryBuilder).
    /// </summary>
    public class WeaponInventoryPLA : MonoBehaviour
    {
        [LunaPlaygroundAsset("Background", 0, "Weapon Inventory")] public Texture2D BGTexture;
        [LunaPlaygroundAsset("BGM", 1, "Weapon Inventory")] public AudioClip BGM;
        [Tooltip("Seconds from game start until the store opens automatically. 0 = off.")]
        [LunaPlaygroundField("End Time (s, 0 = off)", 2, "Weapon Inventory")] public float EndTime = 30f;

        [Header("Refs")]
        public CanvasScaler scaler;
        public RawImage background;
        public RectTransform inventoryPanel;
        public RectTransform header;
        public TMP_Text headerTitle;
        public TMP_Text headerCount;
        public ScrollRect scroll;
        public RectTransform viewport;
        public RectTransform content;
        public List<RectTransform> slots = new List<RectTransform>();
        public RectTransform ctaArea;
        public TMP_Text title;
        public RectTransform startButton;
        public TMP_Text startLabel;
        public AudioSource bgmSource;

        [Header("Safe area (notch / home bar), canvas units")]
        [Tooltip("Parent of InventoryPanel + CtaArea. Created at runtime if empty.")]
        public RectTransform safeRoot;
        public float minTopPortrait = 140f;
        public float minBottomPortrait = 30f;
        public float minSideLandscape = 90f;
        public float minBottomLandscape = 20f;

        [Header("Grid")]
        public float targetCell = 280f;
        [Tooltip("Smaller cells in landscape so 4-5 columns fit (the panel is short there).")]
        public float targetCellLandscape = 230f;
        public float gap = 22f;
        public float pad = 24f;
        public float nameHeight = 48f;
        public int minColumns = 3;
        public int maxColumns = 6;

        [Header("Hand tutorial (swipe hint)")]
        public RectTransform hand;
        public Image handImage;
        [Tooltip("true: finger swipes up (list scrolls to the items below). Auto-flips at the end of the list.")]
        public bool handSwipeUp = true;
        [Tooltip("Seconds before the first hint.")]
        public float hintDelay = 1f;
        [Tooltip("Seconds without touch before the hint shows again.")]
        public float idleRepeat = 4f;
        [Tooltip("Pause between two hint loops while the player stays idle.")]
        public float loopPause = 0.6f;
        public float hintDistance = 320f;

        [Header("Sound")]
        [Tooltip("Pool of sources so overlapping SFX keep their own pitch.")]
        public List<AudioSource> sfxSources = new List<AudioSource>();
        [Tooltip("START button.")]
        public AudioClip clickSfx;
        [Tooltip("One select sound shared by every weapon slot.")]
        public AudioClip selectSfx;
        [Range(0f, 1f)] public float bgmVolume = 0.5f;
        [Range(0f, 1f)] public float sfxVolume = 1f;

        bool landscape;
        Vector2 lastScreen;
        Vector2 lastViewport;
        float lastTouchTime;
        bool hintAborted;
        int nextSfx;
        Coroutine[] pops;

        void Awake()
        {
            if (startButton != null)
            {
                Button b = startButton.GetComponent<Button>();
                if (b != null) b.onClick.AddListener(OnStart);
            }
            pops = new Coroutine[slots.Count];
            for (int i = 0; i < slots.Count; i++)
            {
                if (slots[i] == null) continue;
                Button b = slots[i].GetComponent<Button>();
                int idx = i;
                if (b != null) b.onClick.AddListener(() => OnSlot(idx));
            }
        }

        void OnSlot(int i)
        {
            PlaySfx(selectSfx != null ? selectSfx : clickSfx, 1f);
            slots[i].SetAsLastSibling(); // draw the bouncing slot above its neighbours
            if (pops[i] != null) StopCoroutine(pops[i]);
            pops[i] = StartCoroutine(Pop(slots[i]));
        }

        public void PlaySfx(AudioClip clip, float pitch)
        {
            if (clip == null || sfxSources.Count == 0) return;
            AudioSource s = sfxSources[nextSfx];
            nextSfx = (nextSfx + 1) % sfxSources.Count;
            s.Stop();
            s.clip = clip;
            s.pitch = pitch;
            s.volume = sfxVolume;
            s.Play();
        }

        /// <summary>Slot bounce: quick grow then elastic settle.</summary>
        IEnumerator Pop(RectTransform r)
        {
            const float dur = 0.32f;
            float t = 0f;
            while (t < dur)
            {
                t += Time.deltaTime;
                float k = Mathf.Clamp01(t / dur);
                float s = 1f + 0.18f * Mathf.Sin(k * Mathf.PI) * (1f - k * 0.5f);
                r.localScale = new Vector3(s, s, 1f);
                yield return null;
            }
            r.localScale = Vector3.one;
        }

        void Start()
        {
            if (background != null)
            {
                if (BGTexture != null) background.texture = BGTexture;
                FitBackground();
            }
            if (bgmSource != null)
            {
                if (BGM != null) bgmSource.clip = BGM;
                bgmSource.loop = true;
                bgmSource.volume = bgmVolume;
                if (bgmSource.clip != null) bgmSource.Play();
            }
            ApplyLayout(true);
            StartCoroutine(ScrollHint());
            if (EndTime > 0f) StartCoroutine(EndTimer());
        }

        /// <summary>Silent countdown (no UI): when it runs out the game ends and the store opens.</summary>
        IEnumerator EndTimer()
        {
            yield return new WaitForSeconds(EndTime);
            LunaBridge.GameEnded();
            LunaBridge.InstallFullGame();
        }

        void Update()
        {
            if (Input.GetMouseButtonDown(0) || Input.GetMouseButton(0))
            {
                // any touch hides the hand at once; it comes back after idleRepeat seconds without touch
                lastTouchTime = Time.time;
                if (!hintAborted)
                {
                    hintAborted = true;
                    if (hand != null) hand.gameObject.SetActive(false);
                }
            }

            Vector2 s = new Vector2(Screen.width, Screen.height);
            if (s != lastScreen) ApplyLayout(false);

            if (startButton != null)
            {
                float p = 1f + 0.06f * Mathf.Sin(Time.time * 6f);
                startButton.localScale = new Vector3(p, p, 1f);
            }
        }

        void LateUpdate()
        {
            // safety net: the grid follows the viewport size once the canvas settled (CanvasScaler runs in Update)
            if (viewport != null && viewport.rect.size != lastViewport) LayoutGrid();
        }

        /// <summary>
        /// Puts the inventory + CTA inside a safe frame (background stays full screen).
        /// Inset per edge = max(device safe area, minimum reserve). The minimum covers notches / home bars that
        /// web views and the Luna preview do not report through Screen.safeArea.
        /// </summary>
        void ApplySafeArea()
        {
            if (safeRoot == null) CreateSafeRoot();
            if (safeRoot == null) return;

            Canvas canvas = safeRoot.GetComponentInParent<Canvas>();
            float scale = canvas != null && canvas.scaleFactor > 0f ? canvas.scaleFactor : 1f;
            Rect sa = Screen.safeArea;
            float left = sa.xMin / scale;
            float right = (Screen.width - sa.xMax) / scale;
            float bottom = sa.yMin / scale;
            float top = (Screen.height - sa.yMax) / scale;

            if (landscape)
            {
                // the notch can be on either side depending on rotation
                left = Mathf.Max(left, minSideLandscape);
                right = Mathf.Max(right, minSideLandscape);
                bottom = Mathf.Max(bottom, minBottomLandscape);
            }
            else
            {
                top = Mathf.Max(top, minTopPortrait);
                bottom = Mathf.Max(bottom, minBottomPortrait);
            }

            safeRoot.anchorMin = Vector2.zero;
            safeRoot.anchorMax = Vector2.one;
            safeRoot.offsetMin = new Vector2(left, bottom);
            safeRoot.offsetMax = new Vector2(-right, -top);
        }

        void CreateSafeRoot()
        {
            if (inventoryPanel == null || ctaArea == null) return;
            var go = new GameObject("SafeArea", typeof(RectTransform));
            go.layer = inventoryPanel.gameObject.layer;
            safeRoot = (RectTransform)go.transform;
            safeRoot.SetParent(inventoryPanel.parent, false);
            safeRoot.SetSiblingIndex(inventoryPanel.GetSiblingIndex());
            inventoryPanel.SetParent(safeRoot, false);
            ctaArea.SetParent(safeRoot, false);
        }

        void ApplyLayout(bool force)
        {
            lastScreen = new Vector2(Screen.width, Screen.height);
            bool land = Screen.width > Screen.height;
            bool changed = force || land != landscape;
            landscape = land;
            if (!changed) { FitBackground(); RefreshGridNow(); return; }

            if (scaler != null)
            {
                scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
                scaler.screenMatchMode = CanvasScaler.ScreenMatchMode.Expand;
                scaler.referenceResolution = landscape ? new Vector2(1920f, 1080f) : new Vector2(1080f, 1920f);
            }

            if (landscape)
            {
                SetRect(inventoryPanel, new Vector2(0f, 0f), new Vector2(0.75f, 1f), new Vector2(36f, 36f), new Vector2(-12f, -36f));
                SetRect(ctaArea, new Vector2(0.75f, 0f), new Vector2(1f, 1f), new Vector2(12f, 36f), new Vector2(-36f, -36f));

                // title + CTA grouped around the vertical center (~55px gap between them)
                SetRect(title.rectTransform, new Vector2(0f, 0.5f), new Vector2(1f, 0.7f), Vector2.zero, Vector2.zero);
                title.text = "Test Your\nWeapons!";
                title.fontSize = 58;
                title.alignment = TextAlignmentOptions.Center;

                Place(startButton, new Vector2(0.5f, 0.42f), new Vector2(360f, 130f));
                startLabel.fontSize = 64;
            }
            else
            {
                SetRect(inventoryPanel, new Vector2(0f, 0.25f), new Vector2(1f, 1f), new Vector2(30f, 0f), new Vector2(-30f, -40f));
                SetRect(ctaArea, new Vector2(0f, 0f), new Vector2(1f, 0.25f), new Vector2(30f, 30f), new Vector2(-30f, -20f));

                SetRect(title.rectTransform, new Vector2(0f, 0.58f), new Vector2(1f, 1f), Vector2.zero, Vector2.zero);
                title.text = "Test Your Weapons!";
                title.fontSize = 72;
                title.alignment = TextAlignmentOptions.Center;

                Place(startButton, new Vector2(0.5f, 0.3f), new Vector2(560f, 160f));
                startLabel.fontSize = 80;
            }

            FitBackground();
            RefreshGridNow();
        }

        /// <summary>
        /// Rebuilds the grid in the same frame as a screen resize/rotation (no one-frame overflow):
        /// re-enabling the scaler applies the new scale factor immediately (CanvasScaler.OnEnable -> Handle).
        /// </summary>
        void RefreshGridNow()
        {
            if (scaler != null) { scaler.enabled = false; scaler.enabled = true; }
            ApplySafeArea();
            Canvas.ForceUpdateCanvases();
            lastViewport = Vector2.zero;
            LayoutGrid();
        }

        void LayoutGrid()
        {
            if (viewport == null || content == null) return;
            Vector2 vp = viewport.rect.size;
            if (vp.x <= 1f || vp.y <= 1f) return;
            lastViewport = vp;

            float usable = vp.x - pad * 2f;
            float target = landscape ? targetCellLandscape : targetCell;
            int cols = Mathf.Clamp(Mathf.FloorToInt((usable + gap) / (target + gap)), minColumns, maxColumns);
            float cell = (usable - gap * (cols - 1)) / cols;
            float slotH = cell + nameHeight;
            int rows = (slots.Count + cols - 1) / cols;

            float h = pad * 2f + rows * slotH + Mathf.Max(0, rows - 1) * gap;
            content.anchorMin = new Vector2(0f, 1f);
            content.anchorMax = new Vector2(1f, 1f);
            content.pivot = new Vector2(0.5f, 1f);
            content.sizeDelta = new Vector2(0f, h);

            for (int i = 0; i < slots.Count; i++)
            {
                RectTransform r = slots[i];
                if (r == null) continue;
                int c = i % cols, row = i / cols;
                r.anchorMin = r.anchorMax = new Vector2(0f, 1f);
                r.pivot = new Vector2(0.5f, 0.5f); // centered so the tap bounce scales in place
                r.sizeDelta = new Vector2(cell, slotH);
                r.anchoredPosition = new Vector2(pad + c * (cell + gap) + cell * 0.5f, -(pad + row * (slotH + gap) + slotH * 0.5f));
            }
        }

        /// <summary>Background covers the whole screen without stretching (aspect "envelope").</summary>
        void FitBackground()
        {
            if (background == null || background.texture == null) return;
            RectTransform r = background.rectTransform;
            r.anchorMin = Vector2.zero;
            r.anchorMax = Vector2.one;
            r.sizeDelta = Vector2.zero;
            r.anchoredPosition = Vector2.zero;
            float screenAspect = (float)Screen.width / Mathf.Max(1, Screen.height);
            float texAspect = (float)background.texture.width / Mathf.Max(1, background.texture.height);
            if (screenAspect > texAspect)
            {
                float h = texAspect / screenAspect;
                background.uvRect = new Rect(0f, (1f - h) * 0.5f, 1f, h);
            }
            else
            {
                float w = screenAspect / texAspect;
                background.uvRect = new Rect((1f - w) * 0.5f, 0f, w, 1f);
            }
        }

        /// <summary>
        /// Hand tutorial: the hand presses on the list and swipes, the list follows the finger, then the hand
        /// lifts and the list eases back. Runs after hintDelay, stops on touch, comes back after idleRepeat seconds.
        /// Swipes up (reveals the items below); at the bottom of the list it swipes down instead.
        /// </summary>
        IEnumerator ScrollHint()
        {
            SetHandAlpha(0f);
            float wait = hintDelay;
            while (true)
            {
                while (Time.time - lastTouchTime < wait) yield return null;
                wait = idleRepeat;

                if (hand == null || content == null || viewport == null) yield break;
                float maxY = Mathf.Max(0f, content.rect.height - viewport.rect.height);
                if (maxY < 1f) { lastTouchTime = Time.time; continue; }

                float startY = Mathf.Clamp(content.anchoredPosition.y, 0f, maxY);
                // content y grows = list moves up = finger swipes up
                float dir = handSwipeUp ? 1f : -1f;
                if (startY + dir * 10f > maxY || startY + dir * 10f < 0f) dir = -dir; // no room: swipe the other way
                float dist = Mathf.Min(hintDistance, dir > 0f ? maxY - startY : startY) * dir;

                float vh = viewport.rect.height;
                float travel = Mathf.Clamp(Mathf.Abs(dist), 0f, vh * 0.45f) * Mathf.Sign(dist);
                Vector2 from = new Vector2(viewport.rect.width * 0.12f, -travel * 0.5f);
                Vector2 to = from + new Vector2(0f, travel);

                hintAborted = false;
                if (scroll != null) scroll.StopMovement();
                hand.gameObject.SetActive(true);
                hand.anchoredPosition = from;
                hand.localScale = Vector3.one * 1.1f;

                // appear
                yield return Anim(0.25f, k => SetHandAlpha(k));
                // press
                if (!hintAborted) yield return Anim(0.15f, k => SetHandScale(Mathf.Lerp(1.1f, 0.92f, k)));
                // swipe: hand + list move together
                if (!hintAborted) yield return Anim(0.7f, k =>
                {
                    float e = Mathf.SmoothStep(0f, 1f, k);
                    hand.anchoredPosition = Vector2.Lerp(from, to, e);
                    SetContentY(startY + dist * e);
                });
                // release + fade out
                if (!hintAborted) yield return Anim(0.25f, k =>
                {
                    SetHandScale(Mathf.Lerp(0.92f, 1.1f, k));
                    SetHandAlpha(1f - k);
                });
                // list eases back to where the player left it
                if (!hintAborted) yield return Anim(0.45f, k => SetContentY(startY + dist * (1f - Mathf.SmoothStep(0f, 1f, k))));

                SetHandAlpha(0f);
                hand.gameObject.SetActive(false);
                // still idle: short pause, then loop again
                if (!hintAborted) lastTouchTime = Time.time - idleRepeat + loopPause;
            }
        }

        /// <summary>Runs step(k) for k 0..1 over dur; stops immediately when the player touches.</summary>
        IEnumerator Anim(float dur, System.Action<float> step)
        {
            float t = 0f;
            while (t < dur)
            {
                if (hintAborted) yield break;
                t += Time.deltaTime;
                step(Mathf.Clamp01(t / dur));
                yield return null;
            }
        }

        void SetHandScale(float s)
        {
            hand.localScale = new Vector3(s, s, 1f);
        }

        void SetContentY(float y)
        {
            Vector2 p = content.anchoredPosition;
            p.y = y;
            content.anchoredPosition = p;
        }

        void SetHandAlpha(float a)
        {
            if (handImage == null) return;
            Color c = handImage.color;
            c.a = a;
            handImage.color = c;
        }

        void OnStart()
        {
            PlaySfx(clickSfx, 1f);
            LunaBridge.GameEnded();
            LunaBridge.InstallFullGame();
        }

        static void SetRect(RectTransform r, Vector2 aMin, Vector2 aMax, Vector2 offMin, Vector2 offMax)
        {
            if (r == null) return;
            r.anchorMin = aMin;
            r.anchorMax = aMax;
            r.offsetMin = offMin;
            r.offsetMax = offMax;
        }

        static void Place(RectTransform r, Vector2 anchor, Vector2 size)
        {
            if (r == null) return;
            r.anchorMin = r.anchorMax = anchor;
            r.pivot = new Vector2(0.5f, 0.5f);
            r.sizeDelta = size;
            r.anchoredPosition = Vector2.zero;
        }
    }
}

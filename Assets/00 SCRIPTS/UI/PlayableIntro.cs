using DG.Tweening;
using Game.Gameplay;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // Playable opening, run once after the map spawns:
    //   1. zombies stand still; a hand shows the player to drag the view;
    //   2. once they have dragged, Next appears;
    //   3. Next: the camera flies to the zombies (zombie caption), then to the player (title);
    //   4. Start: the camera returns to the gameplay view, the weapon picker rises and the zombies walk.
    // Every UI piece is built in the scene (inactive); this only switches and animates them.
    public class PlayableIntro : MonoBehaviour
    {
        [SerializeField] private PlayableBootstrap bootstrap;
        [SerializeField] private CameraController cameraController;
        [SerializeField] private WeaponSelectPanel weaponPanel;

        [Header("Step 1: drag the camera")]
        [SerializeField] private GameObject panHint;
        [Tooltip("Hand inside panHint that swipes left and right")]
        [SerializeField] private RectTransform panHand;
        [SerializeField] private float swipeDistance = 160f;
        [SerializeField] private float swipeTime = 0.8f;
        [Tooltip("World units the player has to drag before Next shows")]
        [SerializeField] private float panDistance = 1f;
        [Tooltip("If the whole map already fits on screen (nothing to pan), Next shows after this long")]
        [SerializeField] private float noPanFallback = 3f;
        [SerializeField] private Button nextButton;

        [Header("Step 2: the zombies")]
        [SerializeField] private GameObject zombieCaption;
        [Tooltip("Caption text; {0} = how many zombies there are")]
        [SerializeField] private string zombieCaptionFormat = "There are {0} zombies here...";
        [SerializeField] private string zombieCaptionSingle = "There is 1 zombie here...";
        [Tooltip("When on, the caption shows customWarning instead of counting the zombies (Luna sets this)")]
        [SerializeField] private bool useCustomWarning;
        [SerializeField] private string customWarning = "There are too many zombies here...";

        // Set by LunaController from its playground fields, before the intro runs.
        public void SetCustomWarning(bool use, string warning)
        {
            useCustomWarning = use;
            customWarning = warning;
        }
        [SerializeField] private float zombieShotTime = 1f;
        [Tooltip("Smallest orthographic size of the zombie shot; grows to fit all of them")]
        [SerializeField] private float zombieShotSize = 2f;
        [SerializeField] private Vector2 zombieShotMargin = new Vector2(1.5f, 2f);
        [SerializeField] private float zombieHold = 1.5f;

        [Header("Step 3: the player")]
        [SerializeField] private GameObject title;
        [Tooltip("\"99% lose\" under the title: slammed down onto the screen after the title pops")]
        [SerializeField] private RectTransform loseText;
        [SerializeField] private float slamDelay = 0.35f;
        [SerializeField] private float slamTime = 0.22f;
        [Tooltip("Scale it falls from")]
        [SerializeField] private float slamFromScale = 3f;
        [Tooltip("How hard the title shakes on impact (UI units)")]
        [SerializeField] private float slamShake = 22f;
        [SerializeField] private float playerShotTime = 1f;
        [SerializeField] private float playerShotSize = 1.8f;
        [Tooltip("Shot centre relative to the player's torso (room for the title above)")]
        [SerializeField] private Vector2 playerShotOffset = new Vector2(0f, 0.6f);
        [SerializeField] private Button startButton;

        [Header("Next / Start buttons")]
        [Tooltip("Scale the buttons pulse up to while waiting to be pressed")]
        [SerializeField] private float pulseScale = 1.08f;
        [Tooltip("Seconds for one grow (or shrink) of the pulse")]
        [SerializeField] private float pulseTime = 0.5f;

        [Header("Start")]
        [SerializeField] private float releaseTime = 0.6f;
        [Tooltip("Camera X the gameplay view returns to on Start (Y stays where the shot left it)")]
        [SerializeField] private float startCameraX = 0f;

        private enum Step { Pan, Next, Cinematic, Start, Done }

        private Step _step;

        // Start has been pressed: the zombies walk and the round is on.
        public bool Started => _step == Step.Done;
        private float _panStartTravel;
        private float _stepTime;
        private Tween _swipe;
        private Sequence _flow;

        // Set by a replay (Try Again / Restart / Next Level): the next load skips the tutorial and
        // the camera tour, and goes straight to the weapon picker with the zombies walking.
        public static bool SkipNextIntro;
        private bool _skip;

        private void Awake()
        {
            _skip = SkipNextIntro;
            SkipNextIntro = false;
            CreatureAgent.ZombiesHeld = !_skip;
            SetActive(panHint, false);
            SetActive(zombieCaption, false);
            SetActive(title, false);
            if (nextButton != null)
            {
                nextButton.transform.DOKill(); // stop the pulse
            nextButton.gameObject.SetActive(false);
                nextButton.onClick.AddListener(OnNext);
            }
            if (startButton != null)
            {
                startButton.gameObject.SetActive(false);
                startButton.onClick.AddListener(OnStart);
            }
            if (weaponPanel != null) weaponPanel.gameObject.SetActive(false);
        }

        private void Start()
        {
            if (_skip)
            {
                _step = Step.Done;
                if (weaponPanel != null) weaponPanel.Show();
                return;
            }
            _step = Step.Pan;
            _stepTime = 0f;
            _panStartTravel = cameraController != null ? cameraController.PanTravel : 0f;
            SetActive(panHint, true);
            if (panHand != null)
            {
                var from = panHand.anchoredPosition;
                panHand.anchoredPosition = from + Vector2.left * swipeDistance * 0.5f;
                _swipe = panHand.DOAnchorPosX(from.x + swipeDistance * 0.5f, swipeTime)
                    .SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
            }
        }

        private void OnDestroy()
        {
            _swipe?.Kill();
            _flow?.Kill();
            CreatureAgent.ZombiesHeld = false;
        }

        private void Update()
        {
            if (_step != Step.Pan || cameraController == null) return;
            _stepTime += Time.unscaledDeltaTime;
            bool dragged = cameraController.PanTravel - _panStartTravel >= panDistance && !cameraController.IsPanning;
            if (dragged || _stepTime >= noPanFallback && !cameraController.CanPanView) ShowNext();
        }


        private void ShowNext()
        {
            _step = Step.Next;
            _swipe?.Kill();
            SetActive(panHint, false);
            PopPulse(nextButton);
        }

        private void OnNext()
        {
            if (_step != Step.Next) return;
            _step = Step.Cinematic;
            nextButton.interactable = false;
            nextButton.transform.DOKill(); // stop the pulse
            nextButton.gameObject.SetActive(false);

            int zombies = FrameZombies(out var zombieCenter, out var zombieSize);
            SetZombieCaption(zombies);
            // Shots are started from callbacks (not nested) because each one replaces the last.
            _flow = DOTween.Sequence()
                .AppendCallback(() => cameraController.PlayShot(zombieCenter, zombieSize, zombieShotTime))
                .AppendInterval(zombieShotTime)
                .AppendCallback(() => Pop(zombieCaption))
                .AppendInterval(zombieHold)
                .AppendCallback(() =>
                {
                    SetActive(zombieCaption, false);
                    var player = bootstrap != null ? bootstrap.Player : null;
                    Vector2 at = player != null ? player.TorsoPosition : (Vector2)cameraController.Camera.transform.position;
                    cameraController.PlayShot(at + playerShotOffset, playerShotSize, playerShotTime);
                })
                .AppendInterval(playerShotTime)
                .AppendCallback(() =>
                {
                    Pop(title);
                    // Start only once "99% lose" has landed, so the warning is read first.
                    SlamLoseText(() =>
                    {
                        PopPulse(startButton);
                        _step = Step.Start;
                    });
                });
        }

        private void OnStart()
        {
            if (_step != Step.Start) return;
            _step = Step.Done;
            startButton.interactable = false;
            startButton.transform.DOKill(); // stop the pulse
            startButton.gameObject.SetActive(false);
            SetActive(title, false);
            var camPos = cameraController.Camera.transform.position;
            cameraController.ReleaseShot(releaseTime, new Vector2(startCameraX, camPos.y));
            CreatureAgent.ZombiesHeld = false;
            if (weaponPanel != null) weaponPanel.Show();
        }

        // The caption counts the zombies actually in the level (their number is set on Luna).
        private void SetZombieCaption(int count)
        {
            if (zombieCaption == null) return;
            var text = zombieCaption.GetComponentInChildren<TMPro.TMP_Text>(true);
            if (text == null) return;
            if (useCustomWarning && !string.IsNullOrEmpty(customWarning)) text.text = customWarning;
            else if (count == 1) text.text = zombieCaptionSingle;
            else text.text = string.Format(zombieCaptionFormat, count);
        }

        // Centre and size of a shot that holds every living zombie, with a margin around them.
        // Returns how many there are.
        private int FrameZombies(out Vector2 center, out float size)
        {
            var cam = cameraController.Camera;
            center = cam.transform.position;
            size = zombieShotSize;

            int count = 0;
            Vector2 min = Vector2.zero, max = Vector2.zero;
            var creatures = FindObjectsOfType<CreatureAgent>();
            for (int i = 0; i < creatures.Length; i++)
            {
                var c = creatures[i];
                if (!c.IsZombie || c.IsDead) continue;
                Vector2 p = c.TorsoPosition;
                if (count == 0) { min = max = p; }
                else { min = Vector2.Min(min, p); max = Vector2.Max(max, p); }
                count++;
            }
            if (count == 0) return 0;

            center = (min + max) * 0.5f;
            Vector2 span = max - min + zombieShotMargin * 2f;
            float fit = Mathf.Max(span.y * 0.5f, span.x * 0.5f / Mathf.Max(0.01f, cam.aspect));
            size = Mathf.Max(zombieShotSize, fit);
            return count;
        }

        // "99% lose" crashes down: huge and clear, it drops to size in a blink, then the title block
        // shakes as if hit. Hidden until the slam starts.
        private void SlamLoseText(System.Action onLanded)
        {
            if (loseText == null)
            {
                if (onLanded != null) onLanded();
                return;
            }
            var group = loseText.GetComponent<CanvasGroup>();
            loseText.DOKill();
            loseText.localScale = Vector3.one * slamFromScale;
            if (group != null) { group.DOKill(); group.alpha = 0f; }

            var seq = DOTween.Sequence().SetTarget(loseText);
            seq.AppendInterval(slamDelay);
            seq.Append(loseText.DOScale(1f, slamTime).SetEase(Ease.InQuad));
            if (group != null) seq.Join(group.DOFade(1f, slamTime * 0.6f));
            seq.AppendCallback(() =>
            {
                if (title == null) return;
                var t = (RectTransform)title.transform;
                t.DOShakeAnchorPos(0.35f, slamShake, 30, 90f, false, true);
            });
            seq.Append(loseText.DOPunchScale(Vector3.one * 0.12f, 0.3f, 8, 0.6f));
            if (onLanded != null) seq.OnComplete(() => onLanded());
        }

        // Shows a UI piece with a quick scale pop.
        private static void Pop(Component c)
        {
            if (c != null) Pop(c.gameObject);
        }

        // Pops a button in, then keeps it gently pulsing until it is pressed (killed on hide).
        private void PopPulse(Component c)
        {
            if (c == null) return;
            Pop(c.gameObject);
            // Delayed past the pop; the delay only applies before the first loop.
            c.transform.DOScale(Vector3.one * pulseScale, pulseTime).SetEase(Ease.InOutSine)
                .SetDelay(0.3f).SetLoops(-1, LoopType.Yoyo);
        }

        private static void Pop(GameObject go)
        {
            if (go == null) return;
            go.SetActive(true);
            var t = go.transform;
            var to = Vector3.one;
            t.DOKill();
            t.localScale = to * 0.6f;
            t.DOScale(to, 0.3f).SetEase(Ease.OutBack);
        }

        private static void SetActive(GameObject go, bool on)
        {
            if (go != null) go.SetActive(on);
        }
    }
}

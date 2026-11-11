using DG.Tweening;
using Game.Data;
using Game.Gameplay;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace Game.UI
{
    // Playable end screens, judged once the intro's Start has been pressed:
    //   Fail - the player is dead (blown up, mauled...), or has been turned into a zombie while the
    //          Cure potion was not the special item picked (nothing left that could save them).
    //   Win  - the player is alive and human, and no living zombie is left (all killed, or cured).
    // The result screen follows after a short delay. Both screens are built in the scene (inactive).
    public class GameResult : MonoBehaviour
    {
        [SerializeField] private PlayableBootstrap bootstrap;
        [SerializeField] private PlayableIntro intro;
        [Tooltip("Special item picker; the Cure potion picked there can still save a bitten player")]
        [SerializeField] private WeaponSelectPanel specialPanel;
        [SerializeField] private ItemSO curePotion;

        [SerializeField] private GameObject winScreen;
        [SerializeField] private GameObject failScreen;

        [Header("Buttons that replay this level (Next Level is a store CTA, wired in LunaController)")]
        [SerializeField] private Button tryAgainButton;
        [SerializeField] private Button restartLevelButton;
        [Tooltip("Replays skip the opening tutorial and go straight to the weapon picker")]
        [SerializeField] private bool skipIntroOnReplay = true;

        // Raised when a result screen appears (true = win). One result = one play; LunaController
        // counts them for the end card.
        public static event System.Action<bool> ResultShown;
        [Tooltip("Seconds between the deciding moment and the screen")]
        [SerializeField] private float showDelay = 0.5f;
        [Tooltip("How often the world is checked")]
        [SerializeField] private float checkInterval = 0.2f;

        private bool _decided;
        private float _nextCheck;
        private Tween _show;

        private void Awake()
        {
            if (winScreen != null) winScreen.SetActive(false);
            if (failScreen != null) failScreen.SetActive(false);
            if (tryAgainButton != null) tryAgainButton.onClick.AddListener(ReplayLevel);
            if (restartLevelButton != null) restartLevelButton.onClick.AddListener(ReplayLevel);
        }

        // Reloads the scene: the world, creatures and UI all come back fresh.
        private void ReplayLevel()
        {
            _show?.Kill();
            PlayableIntro.SkipNextIntro = skipIntroOnReplay;
            DOTween.KillAll();
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }

        private void OnDestroy() => _show?.Kill();

        private void Update()
        {
            if (_decided || intro == null || !intro.Started) return;
            if (Time.unscaledTime < _nextCheck) return;
            _nextCheck = Time.unscaledTime + checkInterval;

            var player = bootstrap != null ? bootstrap.Player : null;
            // A dead creature fades out and is destroyed, so a missing player is a dead one.
            if (player == null || player.IsDead)
            {
                Decide(failScreen);
                return;
            }
            if (player.IsZombie)
            {
                if (!CurePicked()) Decide(failScreen);
                return; // bitten but curable: wait for the potion
            }
            if (!AnyZombieLeft(player)) Decide(winScreen);
        }

        private bool CurePicked()
            => specialPanel != null && curePotion != null && specialPanel.PickedItem == curePotion;

        private static bool AnyZombieLeft(CreatureAgent player)
        {
            var creatures = FindObjectsOfType<CreatureAgent>();
            for (int i = 0; i < creatures.Length; i++)
            {
                var c = creatures[i];
                if (c != player && c.IsZombie && !c.IsDead) return true;
            }
            return false;
        }

        private void Decide(GameObject screen)
        {
            _decided = true;
            bool won = screen == winScreen;
            _show = DOVirtual.DelayedCall(showDelay, () =>
            {
                Show(screen);
                ResultShown?.Invoke(won);
            }, true);
        }

        private static void Show(GameObject screen)
        {
            if (screen == null) return;
            screen.transform.SetAsLastSibling(); // above every other piece of UI
            screen.SetActive(true);
            // Pop the card in; the dim behind it just appears.
            var card = screen.transform.childCount > 1 ? screen.transform.GetChild(1) : null;
            if (card == null) return;
            card.localScale = Vector3.one * 0.5f;
            card.DOScale(1f, 0.4f).SetEase(Ease.OutBack);
        }
    }
}

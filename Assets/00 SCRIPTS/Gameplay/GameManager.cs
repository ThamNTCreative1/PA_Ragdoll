using TMPro;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

namespace OBP.FreezeBrainrot
{
    // Game flow: tap to start -> 60s run -> freeze all monsters (Win) or time runs out (Fail).
    // Getting hit by the wave or falling into a hole knocks the player back to the safe zone and thaws every monster;
    // the timer keeps running.
    public sealed class GameManager : MonoBehaviour
    {
        public enum State { Ready, Playing, Won, Lost }

        [Header("Scene")]
        public PlayerController player;
        public FreezeGun gun;
        public WaveHazard wave;
        public Transform monstersRoot;
        public Transform spawnPoint;
        public CameraController cameraController;
        [Tooltip("While its shield is up, wave hits are ignored.")]
        public ShieldManager shield;
        [Tooltip("The first wave (and the goggles pickup) starts when the player stands past this point's Z. Empty = start with the game.")]
        public Transform waveStartLine;

        [Header("Rules")]
        [Tooltip("Round length. Overridden by LunaController.TimePlay when a LunaController is assigned.")]
        public float duration = 60f;
        [Tooltip("Source of the round length (TimePlay, editable in Luna Playground).")]
        public LunaController luna;
        [Tooltip("Seconds to lie on the ground after the Die animation has fully played, before respawning.")]
        public float lieDownTime = 0.45f;
        [Tooltip("Hole falls: the knock-down starts when the player lands on the pit floor; this caps the wait if it never lands.")]
        public float maxPitFallTime = 3f;
        [Tooltip("Safety cap: respawn after this long even if the Die animation never reports finished.")]
        public float maxDownTime = 4f;
        public float fallY = -1.5f;

        [Header("UI (assigned in scene)")]
        public GameObject startPanel;
        public GameObject hud;
        public GameObject winPanel;
        public GameObject failPanel;
        [Tooltip("Timer box; hidden until the player taps to start (the countdown itself runs from launch).")]
        public GameObject timerPanel;
        public TMP_Text timerText;
        public TMP_Text counterText;

        [Header("Events")]
        public UnityEvent onGameStart;
        public UnityEvent onWin;
        public UnityEvent onFail;

        private FreezableMonster[] monsters = new FreezableMonster[0];
        private State state = State.Ready;
        private float timeLeft;
        private int frozenCount;
        private float respawnTimer = -1f;   // time since going down (-1 = not down)
        private float lieTimer;
        private float pitTimer = -1f;       // time since dropping below the rim (-1 = not falling in a pit)
        private bool waveStarted;

        public State CurrentState { get { return state; } }
        public event System.Action PlayerDowned;
        public event System.Action Won;
        public event System.Action Lost;
        public int FrozenCount { get { return frozenCount; } }
        public int MonsterCount { get { return monsters.Length; } }
        public float TimeLeft { get { return timeLeft; } }

        private void Awake()
        {
            if (monstersRoot != null) monsters = monstersRoot.GetComponentsInChildren<FreezableMonster>(true);
            if (gun != null) { gun.game = this; gun.SetTargets(monsters); }
            // Same clock as LunaController, which ends the playable TimePlay seconds after launch.
            if (luna != null && luna.TimePlay > 0f) duration = luna.TimePlay;
            timeLeft = duration;
        }

        private void Start()
        {
            if (player != null) player.SetControllable(false);
            SetActive(startPanel, true);
            SetActive(hud, true);
            SetActive(winPanel, false);
            SetActive(failPanel, false);
            SetActive(timerPanel, false);
            RefreshHud();
        }

        private void Update()
        {
            if (state != State.Ready && state != State.Playing) return;

            // The countdown runs from launch (in step with LunaController), including the tap-to-play screen.
            timeLeft -= Time.deltaTime;
            if (timeLeft <= 0f) { timeLeft = 0f; RefreshHud(); Lose(); return; }
            RefreshHud();

            if (state == State.Ready)
            {
                // Pointer input only (a tap arrives as mouse button 0 on device / in Luna).
                if (Input.GetMouseButtonDown(0)) StartGame();
                return;
            }

            if (respawnTimer >= 0f)
            {
                // Stand back up only after the fall animation has played out, plus a beat on the ground.
                respawnTimer += Time.deltaTime;
                if (player.DownAnimationFinished) lieTimer += Time.deltaTime;
                if (lieTimer >= lieDownTime || respawnTimer >= maxDownTime) Respawn();
            }
            else if (pitTimer >= 0f)
            {
                // Falling in a pit: the knock-down happens when the player hits the bottom.
                pitTimer += Time.deltaTime;
                if (player.IsGrounded || pitTimer >= maxPitFallTime) { pitTimer = -1f; PlayerDown(); }
            }
            else if (player.transform.position.y < fallY)
            {
                player.Kill(false);   // lose control and keep falling (Fall pose)
                pitTimer = 0f;
            }
            else if (!waveStarted && waveStartLine != null && player.IsGrounded && player.transform.position.z >= waveStartLine.position.z)
            {
                // Reached the monster area: the first wave rises and waits until the goggles are collected.
                StartWave(true);
            }
        }

        private void StartWave(bool holdFirst)
        {
            waveStarted = true;
            if (wave != null) wave.Begin(this, player, holdFirst);
        }

        public void StartGame()
        {
            if (state != State.Ready) return;
            state = State.Playing;
            SetActive(startPanel, false);
            SetActive(timerPanel, true);
            player.SetControllable(true);
            if (waveStartLine == null) StartWave(false);
            onGameStart.Invoke();
        }

        public void PlayerHit()
        {
            if (state != State.Playing || respawnTimer >= 0f || pitTimer >= 0f) return;
            if (shield != null && shield.Active) return;
            PlayerDown();
        }

        // Knocked down (wave hit, or landing on a pit floor): Die animation, sound/flash via PlayerDowned, then respawn.
        private void PlayerDown()
        {
            player.Kill(true);
            if (PlayerDowned != null) PlayerDowned();
            respawnTimer = 0f;
            lieTimer = 0f;
        }

        private void Respawn()
        {
            respawnTimer = -1f;
            pitTimer = -1f;
            player.Respawn(spawnPoint.position, spawnPoint.rotation);
            if (cameraController != null) cameraController.ResetView();
            for (int i = 0; i < monsters.Length; i++) monsters[i].SetFrozen(false);
            frozenCount = 0;
            RefreshHud();
        }

        public void OnMonsterFrozen()
        {
            int count = 0;
            for (int i = 0; i < monsters.Length; i++) if (monsters[i].IsFrozen) count++;
            frozenCount = count;
            RefreshHud();
            if (state == State.Playing && frozenCount >= monsters.Length) Win();
        }

        private void Win()
        {
            state = State.Won;
            EndRun();
            SetActive(winPanel, true);
            onWin.Invoke();
            if (Won != null) Won();
        }

        private void Lose()
        {
            state = State.Lost;
            EndRun();
            SetActive(failPanel, true);
            onFail.Invoke();
            if (Lost != null) Lost();
        }

        private void EndRun()
        {
            player.SetControllable(false);
            if (wave != null) wave.Stop();
            SetActive(hud, false);
            SetActive(startPanel, false);   // time can run out before the player ever taps
        }

        private void RefreshHud()
        {
            if (timerText != null)
            {
                int s = Mathf.CeilToInt(timeLeft);
                timerText.text = (s / 60) + ":" + (s % 60).ToString("00");
            }
            if (counterText != null) counterText.text = frozenCount + "/" + monsters.Length;
        }

        private static void SetActive(GameObject go, bool value)
        {
            if (go != null) go.SetActive(value);
        }
    }
}

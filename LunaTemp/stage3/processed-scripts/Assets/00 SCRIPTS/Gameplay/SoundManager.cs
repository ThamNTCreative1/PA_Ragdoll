using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Plays gameplay SFX by listening to gameplay events (no gameplay script references this class).
    // jump: player jumps | cash: a monster freezes solid | freeze: loops while the beam is held
    // ugh: hit by the wave / fell in a hole | wow: win | cry: lose
    public sealed class SoundManager : MonoBehaviour
    {
        public GameManager game;
        public PlayerController player;
        public FreezeGun gun;

        [Header("Clips")]
        public AudioClip jump;
        public AudioClip cash;
        public AudioClip freeze;
        public AudioClip ugh;
        public AudioClip wow;
        public AudioClip cry;

        [Header("Sources")]
        public AudioSource sfx;        // one-shots
        public AudioSource freezeLoop; // looping beam sound
        [Range(0f, 1f)] public float freezeVolume = 0.8f;
        public float freezeFadeOut = 8f;

        private void OnEnable()
        {
            if (player != null) player.Jumped += OnJump;
            if (gun != null) gun.MonsterFrozen += OnMonsterFrozen;
            if (game != null) { game.PlayerDowned += OnDown; game.Won += OnWin; game.Lost += OnLose; }
        }

        private void OnDisable()
        {
            if (player != null) player.Jumped -= OnJump;
            if (gun != null) gun.MonsterFrozen -= OnMonsterFrozen;
            if (game != null) { game.PlayerDowned -= OnDown; game.Won -= OnWin; game.Lost -= OnLose; }
        }

        private void OnJump() { Play(jump); }
        private void OnMonsterFrozen(FreezableMonster m) { Play(cash); }
        private void OnDown() { Play(ugh); }
        private void OnWin() { StopFreeze(); Play(wow); }
        private void OnLose() { StopFreeze(); Play(cry); }

        private void Play(AudioClip clip)
        {
            if (clip != null && sfx != null) sfx.PlayOneShot(clip);
        }

        private void Update()
        {
            if (freezeLoop == null || freeze == null || gun == null) return;
            if (gun.IsFiring)
            {
                if (!freezeLoop.isPlaying) { freezeLoop.clip = freeze; freezeLoop.loop = true; freezeLoop.Play(); }
                freezeLoop.volume = freezeVolume;
            }
            else if (freezeLoop.isPlaying)
            {
                // Quick fade instead of a hard cut when the button is released.
                freezeLoop.volume = Mathf.MoveTowards(freezeLoop.volume, 0f, freezeFadeOut * Time.deltaTime);
                if (freezeLoop.volume <= 0.001f) freezeLoop.Stop();
            }
        }

        private void StopFreeze()
        {
            if (freezeLoop != null) freezeLoop.Stop();
        }
    }
}

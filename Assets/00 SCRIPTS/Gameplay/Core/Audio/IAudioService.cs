using UnityEngine;

namespace Game.Core
{
    // One-shot SFX playback; world sounds carry a position for future stereo pan/falloff support.
    public interface IAudioService
    {
        // pitch is playback speed (1 = as recorded); pitchJitter randomizes ± around it per shot.
        void Play(AudioClip clip, Vector2 position, float volume = 1f, float pitchJitter = 0f, float pitch = 1f);

        // UI feedback: no position, no pitch jitter, never throttled against world sounds.
        void PlayUI(AudioClip clip, float volume = 1f);
    }
}

using UnityEngine;

namespace Game.Core
{
    // Static facade over IAudioService: a missing service or null clip is silence, not an error.
    public static class Sfx
    {
        public static void Play(AudioClip clip, Vector2 position, float volume = 1f, float pitchJitter = 0f, float pitch = 1f)
        {
            if (clip == null || !ServiceLocator.TryGet<IAudioService>(out var audio)) return;
            audio.Play(clip, position, volume, pitchJitter, pitch);
        }

        // Picks a random clip per call so repeated shots/hits don't sound machine-stamped.
        public static void Play(AudioClip[] variants, Vector2 position, float volume = 1f, float pitchJitter = 0f, float pitch = 1f)
        {
            Play(Pick(variants), position, volume, pitchJitter, pitch);
        }

        // For call sites that need the clip BEFORE playing it (e.g. to fit its length to a rate).
        public static AudioClip Pick(AudioClip[] variants)
        {
            if (variants == null || variants.Length == 0) return null;
            return variants[Random.Range(0, variants.Length)];
        }

        public static void PlayUI(AudioClip clip, float volume = 1f)
        {
            if (clip == null || !ServiceLocator.TryGet<IAudioService>(out var audio)) return;
            audio.PlayUI(clip, volume);
        }

        public static void PlayUI(AudioClip[] variants, float volume = 1f)
        {
            if (variants == null || variants.Length == 0) return;
            PlayUI(variants[Random.Range(0, variants.Length)], volume);
        }
    }
}

using UnityEngine;

namespace MelonAd
{
    public enum Sfx { Music = 0, Doc = 1, Door = 2, Fire = 3, Flame = 4, Hurt = 5, Jar = 6, Kis = 7, Ohog = 8, Complete = 9, Fail = 10 }

    /// <summary>One AudioSource per clip, mirrors Howler usage in the original (playing() checks, loops).</summary>
    public class AudioManager : MonoBehaviour
    {
        public static AudioManager I;

        public AudioClip music, doc, door, fire, flame, hurt, jar, kis, ohog;

        [Header("Result")]
        public AudioClip complete;
        public AudioClip fail;

        AudioSource[] sources;

        void Awake()
        {
            I = this;
            AudioClip[] clips = { music, doc, door, fire, flame, hurt, jar, kis, ohog, complete, fail };
            sources = new AudioSource[clips.Length];
            for (int i = 0; i < clips.Length; i++)
            {
                AudioSource s = gameObject.AddComponent<AudioSource>();
                s.clip = clips[i];
                s.playOnAwake = false;
                s.loop = i == (int)Sfx.Music || i == (int)Sfx.Fire || i == (int)Sfx.Flame;
                sources[i] = s;
            }
        }

        public void Play(Sfx s)
        {
            AudioSource a = sources[(int)s];
            if (a.clip != null) a.Play();
        }

        /// <summary>Overlapping instance (Howler play() on an already playing sound).</summary>
        public void PlayOverlap(Sfx s)
        {
            AudioSource a = sources[(int)s];
            if (a.clip != null) a.PlayOneShot(a.clip);
        }

        public void PlayIfIdle(Sfx s)
        {
            if (!sources[(int)s].isPlaying) Play(s);
        }

        public bool IsPlaying(Sfx s)
        {
            return sources[(int)s].isPlaying;
        }

        public void Stop(Sfx s)
        {
            sources[(int)s].Stop();
        }
    }
}

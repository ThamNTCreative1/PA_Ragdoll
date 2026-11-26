using UnityEngine;

// SFX on a small pool of scene AudioSources (clip + Play, works in Luna). Music is started by LunaController.
public class GameAudio : MonoBehaviour
{
    [SerializeField] private AudioSource[] voices;
    [SerializeField] private AudioSource ui;
    [SerializeField] private AudioClip hit, breakBone, death, potion, click;
    [SerializeField] private float hitCooldown = 0.08f;

    private int nextVoice;
    private float lastHit = -1f;

    public void Play(AudioClip clip)
    {
        if (!clip || voices == null || voices.Length == 0) return;
        AudioSource v = null;
        for (int i = 0; i < voices.Length; i++)
        {
            AudioSource c = voices[(nextVoice + i) % voices.Length];
            if (!c.isPlaying) { v = c; break; }
        }
        if (v == null) v = voices[nextVoice];
        nextVoice = (nextVoice + 1) % voices.Length;
        v.clip = clip;
        v.Play();
    }

    public void PlayHit()
    {
        if (Time.time - lastHit < hitCooldown) return;
        lastHit = Time.time;
        Play(hit);
    }

    public void PlayBreak() { Play(breakBone); }
    public void PlayDeath() { Play(death); }
    public void PlayPotion() { Play(potion); }
    public void PlayClick() { if (click && ui) ui.PlayOneShot(click); }
}

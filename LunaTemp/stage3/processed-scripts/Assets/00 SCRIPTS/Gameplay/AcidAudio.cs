using System.Collections;
using UnityEngine;

// Sound effects from the reference ad: stick hit, soul, landing pop, CTA click, and the acid bubbling loop that is
// heard once 5 or more men weigh on the plank.
public class AcidAudio : MonoBehaviour
{
    public AudioSource sfx;
    public AudioSource acidLoop;
    public AudioClip hit, ghost, pop, click;
    public float ghostDelay = 0.5f;
    public float acidFade = 2f;

    [Tooltip("Gameplay SFX play on this small pool of voices (clip + Play), like RSNM's AudioService that works in Luna. " +
             "AudioSources set up in the scene (no play on awake, no loop).")]
    [SerializeField] private AudioSource[] voices;

    private float acidTarget;
    private int nextVoice;

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
        v.volume = 1f;
        v.Play(); // restarts the voice if it was stolen mid-clip
    }

    public void PlayHit() { Play(hit); }
    public void PlayPop() { Play(pop); }
    // UI click: PlayOneShot so it survives the voice pool (same as RSNM's UI voice).
    public void PlayClick() { if (click && sfx) sfx.PlayOneShot(click); }

    public void PlayGhost()
    {
        if (ghost) StartCoroutine(Delayed(ghost, ghostDelay));
    }

    private IEnumerator Delayed(AudioClip clip, float delay)
    {
        yield return new WaitForSeconds(delay);
        Play(clip);
    }

    public void SetAcid(bool on) { acidTarget = on ? 1f : 0f; }

    private void Start()
    {
        if (acidLoop) { acidLoop.volume = 0; acidLoop.loop = true; acidLoop.Play(); }
    }

    private void Update()
    {
        if (acidLoop) acidLoop.volume = Mathf.MoveTowards(acidLoop.volume, acidTarget, Time.deltaTime * acidFade);
    }
}

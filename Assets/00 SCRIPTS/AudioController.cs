using System.Collections.Generic;
using UnityEngine;

public class AudioController : MonoBehaviour
{
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private Transform pool;
    private Queue<AudioSource> SFXPool;
    public static AudioController Ins;

    // Public function
    public void PlayMusic(AudioClip clip)
    {
        if (!clip) return;
        musicSource.clip = clip;
        musicSource.Play();
    }
    public void PlaySFX(AudioClip clip)
    {
        if (!clip) return;
        GetFreeSource().PlayOneShot(clip);
    }

    // Init
    private void Awake()
    {
        CreateIns();
        BootstrapPool();
    }
    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }

    private void BootstrapPool()
    {
        SFXPool = new Queue<AudioSource>();
        SFXPool.Enqueue(CreateNewSource());
        SFXPool.Enqueue(CreateNewSource());
        SFXPool.Enqueue(CreateNewSource());
        SFXPool.Enqueue(CreateNewSource());
        SFXPool.Enqueue(CreateNewSource());
    }

    // Get Free SFX Source
    private AudioSource GetFreeSource()
    {
        if (SFXPool.Count > 0) return SFXPool.Dequeue();
        return CreateNewSource();
    }
    private AudioSource CreateNewSource()
    {
        AudioSource s = new GameObject().AddComponent<AudioSource>();
        s.transform.SetParent(pool);
        return s;
    }
}

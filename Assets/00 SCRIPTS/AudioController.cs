using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioController : MonoBehaviour
{
    [LunaPlaygroundAsset("BGM")] public AudioClip BGM;
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private Transform pool;
    private Queue<AudioSource> SFXPool;
    public static AudioController Ins;
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
    private void Awake()
    {
        CreateIns();
        BootstrapPool();
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
    void Start()
    {
        musicSource.clip = BGM;
        musicSource.Play();
    }
    public void PlaySFX(AudioClip clip)
    {
        if (!clip) return;
        AudioSource s = GetFreeSource();
        s.PlayOneShot(clip);
        StartCoroutine(ReturnToPool(s));
    }
    private AudioSource GetFreeSource()
    {
        if (SFXPool.Count > 0) return SFXPool.Dequeue();
        return CreateNewSource();
    }
    private AudioSource CreateNewSource()
    {
        AudioSource s = new GameObject("SFX").AddComponent<AudioSource>();
        s.transform.SetParent(pool);
        return s;
    }
    private IEnumerator ReturnToPool(AudioSource s)
    {
        yield return new WaitUntil(() => !s.isPlaying);
        SFXPool.Enqueue(s);
    }
}

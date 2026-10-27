using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioController : MonoBehaviour
{
    [SerializeField] private LunaController lunaController;
    public AudioClip BGM => lunaController.BGM;
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
        AudioSource source = GetFreeSource();
        source.PlayOneShot(clip);
        StartCoroutine(ReturnSource(source, clip.length));
    }
    private AudioSource GetFreeSource()
    {
        if (SFXPool.Count > 0) return SFXPool.Dequeue();
        return CreateNewSource();
    }
    private AudioSource CreateNewSource()
    {
        AudioSource s = new GameObject("SFX Source").AddComponent<AudioSource>();
        s.transform.SetParent(pool);
        s.playOnAwake = false;
        return s;
    }

    private IEnumerator ReturnSource(AudioSource source, float delay)
    {
        yield return new WaitForSeconds(delay);
        source.Stop();
        SFXPool.Enqueue(source);
    }
}

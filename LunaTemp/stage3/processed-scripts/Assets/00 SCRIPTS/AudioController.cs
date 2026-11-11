using UnityEngine;

// Background music, as in SPS_V08's AudioController: the BGM clip is a Luna Playground asset.
// Survives the replay's scene reload (one instance, DontDestroyOnLoad) so the music never restarts.
// Also plays UI clicks, which must outlive the scene a Restart / Try Again tears down; other sound
// effects stay with the game's own AudioService.
public class AudioController : MonoBehaviour
{
    [LunaPlaygroundAsset("BGM")] public AudioClip BGM;
    [SerializeField] private AudioSource musicSource;
    private AudioSource _uiSource;

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
        if (Ins != this) return;
        _uiSource = gameObject.AddComponent<AudioSource>();
        _uiSource.playOnAwake = false;
    }

    // One-shot UI sound on the persistent source (layers instead of cutting the previous click off).
    public void PlayUI(AudioClip clip, float volume = 1f)
    {
        if (clip == null || _uiSource == null) return;
        _uiSource.PlayOneShot(clip, Mathf.Clamp01(volume));
    }

    private void Start()
    {
        if (Ins != this || musicSource == null || BGM == null) return;
        musicSource.clip = BGM;
        musicSource.loop = true;
        musicSource.Play();
    }
}

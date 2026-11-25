using UnityEngine;

// Cau hinh Luna Playground: BGM, tu dong CTA theo thoi gian / so click, CTA khi bam Retry.
public class LunaController : MonoBehaviour
{
    // Khong truyen section -> tat ca nam trong muc Default cua Luna Playground
    [LunaPlaygroundAsset("Background image", 0)] public Texture2D backgroundTexture;
    [LunaPlaygroundAsset("Background Music", 1)] public AudioClip bgmClip;
    [LunaPlaygroundField("BGM volume (0-1)", 2)] public float bgmVolume = 0.6f;
    [LunaPlaygroundField("Auto CTA after seconds (0 = off)", 3)] public float timeToCta = 0f;
    [LunaPlaygroundField("Auto CTA after clicks (0 = off)", 4)] public int clicksToCta = 0;
    [LunaPlaygroundField("CTA when press Retry", 5)] public bool ctaOnRetry = false;

    // Muc rieng "SFX" tren Playground: am thanh thua theo tung mod (scene Meme)
    [LunaPlaygroundAsset("Fail SFX - Gugu Gaga", 0, "SFX")] public AudioClip failSfxGuguGaga;
    [LunaPlaygroundAsset("Fail SFX - Black Cat", 1, "SFX")] public AudioClip failSfxBlackCat;
    [LunaPlaygroundAsset("Fail SFX - Banana Cat", 2, "SFX")] public AudioClip failSfxBananaCat;

    [LunaPlaygroundAsset("Win SFX - Gugu Gaga", 3, "SFX")] public AudioClip winSfxGuguGaga;
    [LunaPlaygroundAsset("Win SFX - Black Cat", 4, "SFX")] public AudioClip winSfxBlackCat;
    [LunaPlaygroundAsset("Win SFX - Banana Cat", 5, "SFX")] public AudioClip winSfxBananaCat;

    public AudioClip GetWinSfx(int heroIndex)
    {
        if (heroIndex == 0) return winSfxGuguGaga;
        if (heroIndex == 1) return winSfxBlackCat;
        if (heroIndex == 2) return winSfxBananaCat;
        return null;
    }

    // index mod: 0 Gugu Gaga, 1 Black Cat, 2 Banana Cat
    public AudioClip GetFailSfx(int heroIndex)
    {
        if (heroIndex == 0) return failSfxGuguGaga;
        if (heroIndex == 1) return failSfxBlackCat;
        if (heroIndex == 2) return failSfxBananaCat;
        return null;
    }

    public GameFlow flow;                 // scene 3Monster
    public MemeFlow memeFlow;             // scene Meme
    public AudioSource bgmSource;

    bool started;
    bool fired;
    float elapsed;
    int clicks;

    void Awake()
    {
        if (bgmSource != null)
        {
            bgmSource.playOnAwake = false;
            bgmSource.loop = true;
            bgmSource.clip = bgmClip;
            bgmSource.volume = Mathf.Clamp01(bgmVolume);
        }
    }

    // goi tu GameFlow o lan cham dau tien (KIT-004: khong phat am thanh truoc input)
    public void OnFirstInput()
    {
        if (started) return;
        started = true;
        if (bgmSource != null && bgmSource.clip != null) bgmSource.Play();
    }

    public int Clicks { get { return clicks; } }

    void Update()
    {
        if (!started || fired) return;
        elapsed += Time.deltaTime;
        if (Input.GetMouseButtonDown(0)) clicks++;

        if ((timeToCta > 0f && elapsed >= timeToCta) || (clicksToCta > 0 && clicks >= clicksToCta))
        {
            fired = true;
            Debug.Log("[KSBP] Auto CTA (time=" + elapsed + ", clicks=" + clicks + ")");
            if (flow != null) flow.Cta();
            else if (memeFlow != null) memeFlow.Cta();
        }
    }
}

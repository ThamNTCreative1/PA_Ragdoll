using UnityEngine;

// Luna Playground cho scene FPS (con tàu). Giống LunaController nhưng danh sách nhân vật là 5 animatronic.
// Tất cả trường nằm ở section mặc định. Áp vào PlayableFlowController trong Awake.
public class LunaControllerFNAF : MonoBehaviour
{
    public enum PlayableVersion
    {
        Ver1_3Taps = 1,        // Ver 1: lượt đầu + 3 lượt nữa = 4 lượt bắn
        Ver2_StoreAtTap2 = 2   // Ver 2: 2 lượt bắn
    }

    // Thứ tự trùng với HeroSkins.skins trong scene FPS
    public enum Hero { Freddy = 0, Bonnie = 1, Foxy = 2, Mangle = 3, Chica = 4 }

    [LunaPlaygroundField("Playable Version", 0)]
    public PlayableVersion version = PlayableVersion.Ver1_3Taps;

    [LunaPlaygroundAsset("Background Music", 1)]
    public AudioClip backgroundMusic;

    [LunaPlaygroundField("Music Enabled", 2)]
    public bool musicEnabled = true;

    [LunaPlaygroundField("Music Volume", 3)]
    [Range(0, 1)] public float musicVolume = .45f;

    [LunaPlaygroundField("Hero Shot 1", 4)]
    public Hero heroShot1 = Hero.Freddy;
    [LunaPlaygroundField("Hero Shot 2", 5)]
    public Hero heroShot2 = Hero.Bonnie;
    [LunaPlaygroundField("Hero Shot 3", 6)]
    public Hero heroShot3 = Hero.Foxy;
    [LunaPlaygroundField("Hero Shot 4", 7)]
    public Hero heroShot4 = Hero.Chica;

    public PlayableFlowController flow;

    void Awake()
    {
        if (flow == null) flow = FindObjectOfType<PlayableFlowController>();
        if (flow == null) return;
        flow.playableVersion = (int)version;
        if (backgroundMusic != null) flow.bgm = backgroundMusic;
        if (!musicEnabled) flow.bgm = null;
        flow.musicVolume = musicVolume;
        flow.heroOrder = new int[] { (int)heroShot1, (int)heroShot2, (int)heroShot3, (int)heroShot4 };
    }
}

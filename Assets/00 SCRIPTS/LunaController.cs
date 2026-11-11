using System.Collections;
using System.Collections.Generic;
using Game.Gameplay;
using Game.UI;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

// Luna Playworks integration only (same layout as the SPS_V08 template): playground fields, CTA,
// end card, lifecycle. Gameplay lives in 00 SCRIPTS/Gameplay.
public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay = 60f;

    // Custom BG: a separate RawImage drawn over the game's own backdrop (which is never touched).
    // On = shows BG Image stretched over it; off = hidden.
    [LunaPlaygroundField("Use Custom BG")] public bool UseCustomBG;
    [LunaPlaygroundAsset("BG Image (1400x1100)")] public Texture2D BGTexture;

    // The zombie caption: on = this text; off = counted ("There are 3 zombies here...").
    [LunaPlaygroundField("Use Custom Warning")] public bool UseCustomWarning;
    [LunaPlaygroundField("Warning Text")] public string WarningText;

    // How many zombies drop in at random spots (the x range is set on PlayableBootstrap in the editor).
    [LunaPlaygroundField("Zombie Count")] public int ZombieCount = 3;
    // Restarts (Try Again / Restart / Next Level) allowed before a round's end counts as the end:
    // at a win/fail screen the end card shows once the player has restarted at least this many times.
    [LunaPlaygroundField("Max Restart")] public int MaxRestart = 1;

    // When the end card shows, highest priority first — the first one switched on wins. Whatever
    // is chosen, the end card also shows at the end (see Max Restart).
    //   End Play     - play to the end; none of the early end cards below.
    //   Weapon CTA   - end card as soon as the weapon list shows.
    //   Special CTA  - end card as soon as the special item list shows.
    //   Limit Drop   - end card once Count Drop special items have been dropped.
    [LunaPlaygroundField("End Play")] public bool EndPlay = true;
    [LunaPlaygroundField("Weapon CTA")] public bool WeaponCTA;
    [LunaPlaygroundField("Special CTA")] public bool SpecialCTA;
    [LunaPlaygroundField("Limit Drop")] public bool LimitDrop;
    [LunaPlaygroundField("Count Drop")] public int CountDrop = 3;

    [SerializeField] private PlayableBootstrap bootstrap;

    // Grow potion: on = it grows every creature in its splash (source game); off = zombies are skipped.
    [LunaPlaygroundField("Grow Zombie")] public bool GrowZombie = true;

    [SerializeField] private PlayableIntro intro;

    [SerializeField] private RawImage customBG;
    [SerializeField] private List<Button> CTA = new List<Button>();
    [SerializeField] private GameObject endCard;

    // Static, unlike the template: a replay reloads the scene, so the drop count and the play clock
    // must outlive this object.
    private static int drops;
    private static int restarts; // rounds finished before this one = times the player restarted
    private static bool ended;

    // Subscribed in Awake: a replay shows the weapon list from PlayableIntro.Start, which may run
    // before this Start.
    private void Awake()
    {
        // Before the bootstrap's Start builds the world.
        if (bootstrap != null) bootstrap.ZombieCount = ZombieCount;
        CreatureAgent.ZombiesCanGrow = GrowZombie;
        if (intro != null) intro.SetCustomWarning(UseCustomWarning, WarningText);
        if (endCard != null) endCard.SetActive(false);
        if (customBG != null)
        {
            bool show = UseCustomBG && BGTexture != null;
            if (show)
            {
                customBG.texture = BGTexture;
                customBG.uvRect = new Rect(0f, 0f, 1f, 1f);
            }
            customBG.gameObject.SetActive(show);
        }
        GameResult.ResultShown += OnResultShown;
        WeaponSelectPanel.Shown += OnListShown;
        ItemSpawnTool.Dropped += OnDropped;
    }

    private void Start()
    {
        for (int i = 0; i < CTA.Count; i++)
            if (CTA[i] != null) CTA[i].onClick.AddListener(ClickCTA);

        StartCoroutine(EndGame());
    }

    private void OnDestroy()
    {
        GameResult.ResultShown -= OnResultShown;
        WeaponSelectPanel.Shown -= OnListShown;
        ItemSpawnTool.Dropped -= OnDropped;
    }

    // A round is over. It is the end once the player has used up Max Restart restarts; until then
    // the win/fail screen keeps its replay buttons, and the next round is one more restart.
    private void OnResultShown(bool won)
    {
        if (restarts >= MaxRestart) ShowEndCard();
        restarts++;
    }

    // Which early end card is in force: the highest-priority field switched on.
    private enum EarlyEnd { None, Weapon, Special, Drop }

    private EarlyEnd Early
    {
        get
        {
            if (EndPlay) return EarlyEnd.None;
            if (WeaponCTA) return EarlyEnd.Weapon;
            if (SpecialCTA) return EarlyEnd.Special;
            if (LimitDrop) return EarlyEnd.Drop;
            return EarlyEnd.None;
        }
    }

    private void OnListShown(WeaponSelectPanel.PickAction list)
    {
        bool weapons = list == WeaponSelectPanel.PickAction.EquipPlayer;
        if (Early == (weapons ? EarlyEnd.Weapon : EarlyEnd.Special)) ShowEndCard();
    }

    // Static, so drops add up across replays.
    private void OnDropped(Game.Data.ItemSO item)
    {
        if (Early != EarlyEnd.Drop) return;
        drops++;
        if (drops >= CountDrop) ShowEndCard();
    }

    private void ShowEndCard()
    {
        if (endCard == null) return;
        endCard.transform.SetAsLastSibling(); // over the win/fail screen, so any tap goes to the store
        endCard.SetActive(true);
    }

    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    // Time.time keeps running across the replay's scene reloads, so the limit counts from launch.
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        if (!ended)
        {
            ended = true;
            Luna.Unity.LifeCycle.GameEnded();
        }
        if (UseTime) ShowEndCard();
    }
}

using System;
using UnityEngine;

// SRP_V07 flow with SSP art:
//  1) drag the potion onto the player -> the player turns zombie, the workbench comes loose;
//  2) drag the zombie by the head and smash the monsters (joints break, head off / 2 joints = dead);
//  3) all monsters dead -> end UI (CTA) after endDelay.
public class GameController : MonoBehaviour
{
    public enum Phase { Potion, Zombie, End }

    [Header("Scene")]
    [SerializeField] private Camera cam;
    [SerializeField] private Transform world;
    [Tooltip("Player stands here (spawn y = the surface under the feet).")]
    [SerializeField] private Transform playerSpawn;
    [Tooltip("Where the monsters stand (y = the surface under the feet), one per LunaController Monster 1/2/3.")]
    [SerializeField] private Transform[] monsterSpawns;
    [Tooltip("One prefab per CharacterSkin (LunaController enum order).")]
    [SerializeField] private SspMan[] skinPrefabs;
    [Tooltip("Default monster skins (CharacterSkin index) when LunaController does not set them.")]
    [SerializeField] private int[] monsterSkins = { 7, 8, 10 };
    [SerializeField] private Rigidbody2D potionBody;
    [Tooltip("Static bodies that come loose when the player turns zombie (SRP table).")]
    [SerializeField] private Rigidbody2D[] looseOnZombie;
    [SerializeField] private Fx fx;
    [SerializeField] private GameAudio sfx;

    [Header("Hints / UI")]
    [SerializeField] private GameObject tut;
    [SerializeField] private FollowHint potionHint;
    [SerializeField] private FollowHint[] monsterHints;
    [SerializeField] private GameObject tut2;
    [SerializeField] private GameObject endUI;

    [Header("Tuning")]
    [SerializeField] private int playerLayer = 9;
    [SerializeField] private float followMaxSpeed = 80f;
    [Tooltip("The dragged point stays inside this world rect (the room).")]
    [SerializeField] private Rect dragBounds = new Rect(-10.6f, 0.2f, 21.2f, 10.4f);
    [SerializeField] private float endDelay = 2f;

    public Action OnTap;

    private Phase phase = Phase.Potion;
    private SspMan player;
    private SspMan[] monsters = new SspMan[0];
    private int skin;
    private int monstersLeft;
    private bool dragging;
    private Vector2 pointer;

    public Phase CurrentPhase { get { return phase; } }

    // SRP_V07: CameraFollow (target = the player's head) is switched on when the player turns zombie.
    public Transform CameraTarget
    {
        get { return phase != Phase.Potion && player ? player.HeadBody.transform : null; }
    }

    // LunaController (Awake) passes the playground's Player skin before Start spawns the player.
    public void SetPlayerSkin(int index) { skin = index; }

    // LunaController (Awake): Monster 1/2/3 skins.
    public void SetMonsterSkins(int[] skins) { monsterSkins = skins; }

    private SspMan Spawn(int skinIndex, Transform at)
    {
        SspMan prefab = skinPrefabs[Mathf.Clamp(skinIndex, 0, skinPrefabs.Length - 1)];
        Vector3 p = at.position;
        p.y += prefab.footDepth + 0.02f;
        return Instantiate(prefab, p, Quaternion.identity, world);
    }

    private void Start()
    {
        player = Spawn(skin, playerSpawn);
        player.name = "Player";
        player.SetLayer(playerLayer);
        player.Init(this, 300, false);
        if (potionHint) { potionHint.SetTarget(player.HeadBody.transform); potionHint.gameObject.SetActive(false); }
        monstersLeft = 0;
        monsters = new SspMan[monsterSpawns.Length];
        for (int m = 0; m < monsterSpawns.Length; m++)
        {
            if (!monsterSpawns[m]) continue;
            int s = m < monsterSkins.Length ? monsterSkins[m] : 0;
            monsters[m] = Spawn(s, monsterSpawns[m]);
            monsters[m].name = "Monster_" + (m + 1);
            monsters[m].Init(this, 100 + m * 20, true);
            monstersLeft++;
            if (m < monsterHints.Length && monsterHints[m]) monsterHints[m].SetTarget(monsters[m].HeadBody.transform);
        }
        for (int h = 0; h < monsterHints.Length; h++) if (monsterHints[h]) monsterHints[h].gameObject.SetActive(false);
        if (tut) tut.SetActive(true);
        if (tut2) tut2.SetActive(false);
        if (endUI) endUI.SetActive(false);
    }

    // ---------- input (DragZone) ----------
    public void PointerDown(Vector2 screen)
    {
        if (OnTap != null) OnTap();
        if (phase == Phase.End) return;
        pointer = screen;
        dragging = true;
        if (tut) tut.SetActive(false); // SRP: the tutorial (dark overlay, hand, text) goes on the first touch
        if (phase == Phase.Potion && potionHint) potionHint.gameObject.SetActive(true);
    }

    public void PointerMove(Vector2 screen) { pointer = screen; }

    public void PointerUp()
    {
        dragging = false;
        if (player) player.SetHeld(false);
        if (phase == Phase.Potion && potionHint) potionHint.gameObject.SetActive(false);
    }

    private void FixedUpdate()
    {
        if (!dragging || phase == Phase.End) return;
        Rigidbody2D rb = phase == Phase.Potion ? potionBody : (player ? player.HeadBody : null);
        if (!rb) return;
        Vector3 w = cam.ScreenToWorldPoint(new Vector3(pointer.x, pointer.y, 0));
        Vector2 target = new Vector2(Mathf.Clamp(w.x, dragBounds.xMin, dragBounds.xMax), Mathf.Clamp(w.y, dragBounds.yMin, dragBounds.yMax));
        // Like SRP TargetController.MovePosition, but as a velocity: the body reaches the finger in one step and the physics
        // still resolves every collision (Luna's MovePosition let the zombie pass through walls). While the zombie is held
        // its standing forces are off (SspMan.SetHeld; SRP has none), so the body just hangs from the head.
        if (phase == Phase.Zombie && player) player.SetHeld(true);
        rb.linearVelocity = Vector2.ClampMagnitude((target - rb.position) / Time.fixedDeltaTime, followMaxSpeed);
        if (phase == Phase.Potion)
        {
            rb.angularVelocity = 0;
            rb.MoveRotation(Mathf.LerpAngle(rb.rotation, 0, 0.3f));
        }
    }

    // ---------- potion ----------
    public void OnPotionTouched(Collider2D other)
    {
        if (phase != Phase.Potion || !player || !player.Owns(other)) return;
        phase = Phase.Zombie;
        dragging = false;
        if (sfx) sfx.PlayPotion();
        if (fx) fx.ZombiePuff(player.Center);
        player.Zombify();
        for (int i = 0; i < looseOnZombie.Length; i++) if (looseOnZombie[i]) looseOnZombie[i].bodyType = RigidbodyType2D.Dynamic;
        if (potionHint) potionHint.gameObject.SetActive(false);
        if (tut) tut.SetActive(false);
        if (tut2) tut2.SetActive(true);
        for (int h = 0; h < monsterHints.Length; h++) if (monsterHints[h]) monsterHints[h].gameObject.SetActive(true);
        if (potionBody) Destroy(potionBody.gameObject);
    }

    // ---------- ragdoll events ----------
    public void OnManHit(SspMan man, Vector2 at, float speed, Vector2 vel)
    {
        if (sfx) sfx.PlayHit();
        if (fx && man != player && phase == Phase.Zombie) fx.Blood(at, vel, false);
    }

    public void OnJointBroken(SspMan man, Vector2 at, Vector2 vel)
    {
        if (sfx) sfx.PlayBreak();
        if (fx) fx.Blood(at, vel, true);
    }

    public void OnManDied(SspMan man)
    {
        if (sfx) sfx.PlayDeath();
        for (int m = 0; m < monsters.Length; m++)
            if (monsters[m] == man && m < monsterHints.Length && monsterHints[m]) monsterHints[m].gameObject.SetActive(false);
        monstersLeft--;
        if (monstersLeft <= 0 && phase == Phase.Zombie) Invoke("End", endDelay);
    }

    private void End()
    {
        phase = Phase.End;
        dragging = false;
        if (player) player.SetHeld(false);
        if (tut2) tut2.SetActive(false);
        if (endUI) endUI.SetActive(true);
    }
}

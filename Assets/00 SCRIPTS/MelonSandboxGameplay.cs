using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class MelonSandboxGameplay : MonoBehaviour
{
    [SerializeField] private LunaController lunaController;
    [SerializeField] private SpawnTutorial spawnTutorial;
    public int MaxCharacters => lunaController.MaxCharacters;
    [SerializeField] private GameObject[] characterPrefabs;
    [SerializeField] private GameObject[] enemyPrefabs;
    [SerializeField, Min(1)] private int enemyCount = 4;
    [SerializeField, Min(.1f)] private float enemySpawnInterval = .6f;
    [SerializeField, Min(.1f)] private float enemyMoveSpeed = 1.5f;
    [SerializeField, Min(1f)] private float enemyDropHeight = 8f;
    [SerializeField] private AudioClip deathSound;
    [SerializeField] private AudioClip biteSound;
    private readonly HashSet<MelonHitTarget> bittenPlayers = new HashSet<MelonHitTarget>();
    [SerializeField] private GameObject failObject;
    private bool failed;
    private SandboxEnemyMover lastWaveEnemy;
    private readonly Dictionary<MelonHitTarget, GameObject> zombieVersions = new Dictionary<MelonHitTarget, GameObject>();
    private readonly List<SandboxEnemyMover> enemies = new List<SandboxEnemyMover>();
    private bool swordSelectionReady;
    [SerializeField, Tooltip("Minimum enemy spawn X in world coordinates.")]
    private float enemySpawnXMin = 8f;
    [SerializeField, Tooltip("Maximum enemy spawn X in world coordinates.")]
    private float enemySpawnXMax = 14f;
    private bool enemyWaveStarted;
    private int enemiesSpawned;
    private float enemySpawnTimer;
    private Vector3 enemySpawnPosition;
    [SerializeField] private Sprite[] worldToolSprites;
    [SerializeField] private Sprite[] variantIcons;
    private readonly List<MelonHitTarget> melons = new List<MelonHitTarget>();
    [SerializeField] private Button[] tabs;
    [SerializeField] private Button[] variants;
    [SerializeField] private Button[] weaponButtons;
    private Camera cam;
    [SerializeField, Min(.1f)] private float cameraTransitionDuration = 1f;
    private bool cameraHolding;
    private bool cameraReturning;
    private bool cameraTransitionPending;
    private bool cameraTransitionActive;
    private float cameraTransitionTime;
    private float cameraStartSize;
    private float cameraTargetSize;
    private float cameraTargetX;
    private float cameraTargetY;
    private float cameraOriginalSize;
    private bool cameraResponsive;
    private bool cameraNarrowScreen;
    private Vector3 cameraStartPosition;
    private int unlocked;
    private int category;
    private int progress;
    private bool characterSelectionLocked;
    [SerializeField] private GameObject botUI;
    private readonly HashSet<int> selectedWeapons = new HashSet<int>();
    private bool FightReady => selectedWeapons.Count >= 1;
    [SerializeField] private AudioClip clickSound;
    public void PlayButtonClick()
    {
        if (AudioController.Ins && clickSound) AudioController.Ins.PlaySFX(clickSound);
    }
    private int selectedSword = -1;
    private Rigidbody2D held;
    private TargetJoint2D joint;
    private int pointerId = int.MinValue;
    private Vector2 pointerPosition;

    public void BeginVariant(int index, int id, Vector2 screenPosition)
    {
        if (failed) return;
        if (category == 1)
        {
            EquipSword(index);
            return;
        }
        if (held) return;
        pointerPosition = screenPosition;
        UseVariant(index);
        if (held) pointerId = id;
    }

    public void MovePointer(int id, Vector2 screenPosition)
    {
        if (id == pointerId) pointerPosition = screenPosition;
    }

    public void EndPointer(int id)
    {
        if (id == pointerId) Release(true);
    }
    private int ActiveMelons
    {
        get
        {
            int count = 0;
            foreach (MelonHitTarget melon in melons) if (melon) count++;
            return count;
        }
    }

    private void Start()
    {
        if (failObject) failObject.SetActive(false);
        cam = Camera.main;
        cam.orthographic = true;
        cam.orthographicSize = 8;
        cam.transform.position = new Vector3(-3f, 0, -10);
        cam.backgroundColor = new Color(.09f, .13f, .17f);
        BindUI();
        RefreshUI();
    }

    private void BindUI()
    {
        for (int i = 0; i < tabs.Length; i++)
        {
            int index = i;
            tabs[i].onClick.AddListener(() => { PlayButtonClick(); SelectCategory(index); });
        }
        for (int i = 0; i < variants.Length; i++)
            if (variants[i]) variants[i].GetComponent<SandboxVariantButton>().Initialize(this, i);
        for (int i = 0; i < weaponButtons.Length; i++)
        {
            int index = i;
            weaponButtons[i].onClick.AddListener(() => { PlayButtonClick(); EquipSword(index); });
        }
    }


    private void EquipSword(int index)
    {
        if (failed || !swordSelectionReady || !characterSelectionLocked || index < 0 || index >= weaponButtons.Length || !weaponButtons[index] || index >= worldToolSprites.Length || !worldToolSprites[index]) return;
        bool equipped = false;
        foreach (MelonHitTarget character in melons)
        {
            if (!character) continue;
            Transform hand = character.transform.Find("LeftHand");
            if (!hand) continue;
            Transform sword = hand.Find("Equipped Sword");
            if (!sword)
            {
                sword = new GameObject("Equipped Sword", typeof(SpriteRenderer)).transform;
                sword.SetParent(hand, false);
            }
            SpriteRenderer renderer = sword.GetComponent<SpriteRenderer>();
            renderer.sprite = worldToolSprites[index];
            SpriteRenderer handRenderer = hand.GetComponent<SpriteRenderer>();
            renderer.sortingOrder = 4;
            // Anchor the handle inside the fist, then rotate around that grip.
            sword.localRotation = Quaternion.Euler(0, 0, 10);
            float size = 1.6f / Mathf.Max(.01f, renderer.sprite.bounds.size.x * Mathf.Abs(hand.lossyScale.x));
            sword.localScale = Vector3.one * size;
            Vector3 grip = handRenderer && handRenderer.sprite
                ? new Vector3(handRenderer.sprite.bounds.center.x,
                    handRenderer.sprite.bounds.min.y + handRenderer.sprite.bounds.size.y * .08f, 0)
                : new Vector3(0, -.25f, 0);
            Vector3 handle = new Vector3(renderer.sprite.bounds.min.x + renderer.sprite.bounds.size.x * .15f, renderer.sprite.bounds.center.y, 0);
            sword.localPosition = grip - sword.localRotation * (handle * size);
            equipped = true;
        }
        if (!equipped) return;
        selectedSword = index;
        selectedWeapons.Add(index);
        if (spawnTutorial) spawnTutorial.NotifyWeaponClicked(index);
        RefreshUI();
    }

    private void SelectCategory(int index)
    {
        if (index < 0 || index > 1 || index > unlocked || (index == 0 && characterSelectionLocked)) return;
        category = index;
        RefreshUI();
    }

    public void UseVariant(int index)
    {
        if (failed) return;
        if (category == 0)
        {
            if (characterSelectionLocked || ActiveMelons >= MaxCharacters || characterPrefabs == null || index < 0 || index >= characterPrefabs.Length || !characterPrefabs[index]) return;
            Vector3 spawn = cam.ScreenToWorldPoint(pointerPosition);
            spawn.z = 0;
            GameObject melon = Instantiate(characterPrefabs[index], spawn, Quaternion.identity);
            melon.name = characterPrefabs[index].name;
            Rigidbody2D containerBody = melon.GetComponent<Rigidbody2D>();
            if (containerBody) Destroy(containerBody);
            Transform head = melon.transform.Find("Head");
            melon.transform.position += spawn - head.position;
            MelonHitTarget target = melon.AddComponent<MelonHitTarget>();
            target.Initialize();
            melons.Add(target);
            foreach (GameObject prefab in enemyPrefabs)
                if (prefab && prefab.name == "Z" + characterPrefabs[index].name)
                {
                    zombieVersions[target] = prefab;
                    break;
                }
            if (spawnTutorial) spawnTutorial.NotifySpawned(index);
            Hold(melon.transform.Find("Head").GetComponent<Rigidbody2D>());
            RecordSpawn();
        }
        else if (category == 1) EquipSword(index);
        RefreshUI();
    }

    private void Update()
    {
        if (failed) return;
        // The final spawn button is hidden while still held; release is tracked
        // here too because an inactive UI object may not receive PointerUp.
        if (pointerId >= 0)
        {
            for (int i = 0; i < Input.touchCount; i++)
            {
                Touch touch = Input.GetTouch(i);
                if (touch.fingerId != pointerId) continue;
                MovePointer(pointerId, touch.position);
                if (touch.phase == TouchPhase.Ended) EndPointer(touch.fingerId);
                else if (touch.phase == TouchPhase.Canceled) Release();
                break;
            }
        }
        UpdateEnemyWave();
        UpdateCameraTransition();
        if (pointerId < 0 && Input.GetMouseButtonUp(0)) Release(true);
        if (Input.GetMouseButtonDown(0) && !held && !(EventSystem.current && EventSystem.current.IsPointerOverGameObject()))
        {
            RaycastHit2D hit = Physics2D.Raycast(cam.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
            if (hit && hit.rigidbody)
            {
                MelonHitTarget melon = hit.rigidbody.GetComponentInParent<MelonHitTarget>();
                if (melon)
                {
                    pointerPosition = Input.mousePosition;
                    Hold(hit.rigidbody);
                    pointerId = -1;
                }
            }
        }
        if (!held || !joint) return;
        if (pointerId < 0) pointerPosition = Input.mousePosition;
        joint.target = cam.ScreenToWorldPoint(pointerPosition);
    }

    private void Hold(Rigidbody2D body)
    {
        Release();
        held = body;
        joint = body.gameObject.AddComponent<TargetJoint2D>();
        joint.autoConfigureTarget = false;
        joint.maxForce = 3000;
        joint.frequency = 5;
        joint.dampingRatio = .8f;
        joint.target = cam.ScreenToWorldPoint(pointerPosition);
    }

    private void Release(bool pointerReleased = false)
    {
        if (pointerReleased && held && characterSelectionLocked && !cameraResponsive)
            cameraTransitionPending = true;
        if (joint) joint.enabled = false;
        if (joint) Destroy(joint);
        joint = null;
        held = null;
        pointerId = int.MinValue;
        RefreshSpawnTutorial();
        if (characterSelectionLocked) RefreshUI();
    }

    private void OnApplicationFocus(bool focused) { if (!focused) Release(); }
    private void OnDisable()
    {
        if (joint) Destroy(joint);
        joint = null;
        held = null;
    }

    private void UpdateCameraTransition()
    {
        bool narrowScreen = cam.aspect < 1.5f;
        // Retarget from the current pose when resizing, including mid-transition.
        if (cameraResponsive && narrowScreen != cameraNarrowScreen)
            cameraTransitionPending = true;
        // Finish placing the last character before moving its screen-to-world reference.
        if (cameraTransitionPending && !held)
        {
            if (!cameraResponsive) cameraOriginalSize = cam.orthographicSize;
            cameraResponsive = true;
            cameraNarrowScreen = narrowScreen;
            cameraTransitionPending = false;
            cameraTransitionActive = true;
            cameraHolding = false;
            cameraTransitionTime = 0;
            cameraStartSize = cam.orthographicSize;
            cameraStartPosition = cam.transform.position;
            cameraTargetSize = narrowScreen ? 15f : cameraOriginalSize;
            cameraTargetX = cameraReturning ? (narrowScreen ? -1f : 0f) : (narrowScreen ? 5f : 8f);
            cameraTargetY = narrowScreen ? 3f : 0f;
        }
        if (cameraHolding)
        {
            if (enemiesSpawned < enemyCount || (lastWaveEnemy && !lastWaveEnemy.HasLanded)) return;
            cameraHolding = false;
            cameraReturning = true;
            cameraTransitionActive = true;
            cameraTransitionTime = 0f;
            cameraStartPosition = cam.transform.position;
            cameraStartSize = cam.orthographicSize;
            cameraTargetX = narrowScreen ? -1f : 0f;
            cameraTargetY = narrowScreen ? 3f : 0f;
        }
        if (!cameraTransitionActive) return;
        cameraTransitionTime += Time.deltaTime;
        float t = Mathf.Clamp01(cameraTransitionTime / Mathf.Max(.1f, cameraTransitionDuration));
        float eased = t * t * (3f - 2f * t);
        cam.orthographicSize = Mathf.Lerp(cameraStartSize, cameraTargetSize, eased);
        cam.transform.position = Vector3.Lerp(cameraStartPosition,
            new Vector3(cameraTargetX, cameraTargetY, cameraStartPosition.z), eased);
        if (t >= 1f)
        {
            cameraTransitionActive = false;
            if (!cameraReturning)
            {
                BeginEnemyWave();
                cameraHolding = true;
            }
            else
            {
                swordSelectionReady = true;
                RefreshUI();
            }
        }
    }

    private void BeginEnemyWave()
    {
        if (enemyWaveStarted || enemyPrefabs == null || enemyPrefabs.Length == 0) return;
        enemyWaveStarted = true;
        float floorY = -4.8f;
        GameObject ground = GameObject.Find("Ground");
        if (ground && ground.TryGetComponent<Collider2D>(out var floor)) floorY = floor.bounds.max.y;
        enemySpawnPosition = new Vector3(0f, floorY, 0f);
        enemySpawnTimer = 0f;
    }

    private void UpdateEnemyWave()
    {
        if (!enemyWaveStarted || enemiesSpawned >= enemyCount) return;
        enemySpawnTimer -= Time.deltaTime;
        if (enemySpawnTimer > 0f) return;
        enemySpawnTimer = Mathf.Max(.1f, enemySpawnInterval);
        int batchSize = Mathf.Min(2, enemyCount - enemiesSpawned);
        for (int i = 0; i < batchSize; i++) SpawnEnemy();
    }

    private void SpawnEnemy()
    {
        GameObject prefab = enemyPrefabs[enemiesSpawned % enemyPrefabs.Length];
        enemiesSpawned++;
        if (!prefab) return;
        Vector3 spawnPosition = enemySpawnPosition;
        spawnPosition.x = Random.Range(Mathf.Min(enemySpawnXMin, enemySpawnXMax),
            Mathf.Max(enemySpawnXMin, enemySpawnXMax));
        lastWaveEnemy = CreateEnemy(prefab, spawnPosition.x, enemyDropHeight);
    }

    private SandboxEnemyMover CreateEnemy(GameObject prefab, float x, float dropHeight)
    {
        Vector3 spawnPosition = new Vector3(x, enemySpawnPosition.y, 0f);
        GameObject enemy = Instantiate(prefab, spawnPosition, Quaternion.identity);
        enemy.name = "Enemy " + prefab.name;
        Vector3 scale = enemy.transform.localScale;
        scale.x = -Mathf.Abs(scale.x);
        enemy.transform.localScale = scale;
        SpriteRenderer[] renderers = enemy.GetComponentsInChildren<SpriteRenderer>();
        if (renderers.Length > 0)
        {
            Bounds bounds = renderers[0].bounds;
            foreach (SpriteRenderer renderer in renderers) bounds.Encapsulate(renderer.bounds);
            enemy.transform.position += Vector3.up * (enemySpawnPosition.y - bounds.min.y);
        }
        float landingY = enemy.transform.position.y;
        enemy.transform.position += Vector3.up * dropHeight;
        SandboxEnemyMover mover = enemy.AddComponent<SandboxEnemyMover>();
        mover.Initialize(enemyMoveSpeed, landingY, this);
        enemies.Add(mover);
        return mover;
    }

    public void TryInfect(MelonHitTarget player)
    {
        if (failed || !player || !melons.Contains(player) || bittenPlayers.Contains(player)) return;
        GameObject prefab;
        if (!zombieVersions.TryGetValue(player, out prefab) || !prefab) return;
        bittenPlayers.Add(player);
        StartCoroutine(ConvertAfterBite(player, prefab));
    }

    private IEnumerator ConvertAfterBite(MelonHitTarget player, GameObject prefab)
    {
        // Contact -> bite after 0.5s -> conversion after another 0.5s.
        yield return new WaitForSeconds(.5f);
        if (failed || !player || !melons.Contains(player))
        {
            bittenPlayers.Remove(player);
            yield break;
        }
        if (AudioController.Ins && biteSound) AudioController.Ins.PlaySFX(biteSound);
        yield return new WaitForSeconds(.5f);
        bittenPlayers.Remove(player);
        if (failed || !player || !melons.Contains(player)) yield break;
        Transform body = player.transform.Find("Body");
        float x = body ? body.position.x : player.transform.position.x;
        float bottom = float.PositiveInfinity;
        foreach (Collider2D part in player.GetComponentsInChildren<Collider2D>())
            bottom = Mathf.Min(bottom, part.bounds.min.y);
        if (held && held.GetComponentInParent<MelonHitTarget>() == player) Release();
        melons.Remove(player);
        zombieVersions.Remove(player);
        player.gameObject.SetActive(false);
        Destroy(player.gameObject);
        CreateEnemy(prefab, x, float.IsInfinity(bottom) ? 0f : Mathf.Max(0f, bottom - enemySpawnPosition.y));
        if (AudioController.Ins && deathSound) AudioController.Ins.PlaySFX(deathSound);
        if (ActiveMelons > 0) yield break;
        failed = true;
        Release();
        if (failObject) failObject.SetActive(true);
        RefreshUI();
    }

    private void RecordSpawn()
    {
        if (characterSelectionLocked) return;
        if (++progress >= MaxCharacters)
        {
            unlocked = 1;
            characterSelectionLocked = true;
            category = 1;
        }
        RefreshUI();
    }

    private void RefreshUI()
    {
        lunaController.SetFightReady(!failed && FightReady);
        if (botUI) botUI.SetActive(!failed && !FightReady);
        for (int i = 0; i < tabs.Length; i++)
        {
            tabs[i].interactable = !failed && i <= unlocked && !(i == 0 && characterSelectionLocked) && (i != 1 || swordSelectionReady);
            tabs[i].GetComponent<Image>().color = i == category ? Color.white : new Color(.62f, .62f, .62f);
        }
        for (int i = 0; i < variants.Length; i++)
        {
            if (!variants[i]) continue;
            variants[i].gameObject.SetActive(!failed && category == 0);
            variants[i].interactable = !characterSelectionLocked && ActiveMelons < MaxCharacters;
        }
        for (int i = 0; i < variants.Length; i++)
        {
            if (!variants[i]) continue;
            Image icon = variants[i].transform.Find("Icon").GetComponent<Image>();
            icon.sprite = characterPrefabs != null && i < characterPrefabs.Length && characterPrefabs[i]
                    ? characterPrefabs[i].transform.Find("Head").GetComponent<SpriteRenderer>().sprite : null;
            icon.enabled = icon.sprite != null;
        }
        for (int i = 0; i < weaponButtons.Length; i++)
        {
            Button button = weaponButtons[i];
            button.gameObject.SetActive(!failed && category == 1 && swordSelectionReady);
            button.interactable = !failed && swordSelectionReady;
            button.image.color = i == selectedSword ? new Color(1f, .85f, .35f) : Color.white;
            Image icon = button.transform.Find("Icon").GetComponent<Image>();
            icon.sprite = i < variantIcons.Length ? variantIcons[i] : null;
            icon.enabled = icon.sprite != null;
        }
        RefreshSpawnTutorial();
    }

    private void RefreshSpawnTutorial()
    {
        if (spawnTutorial)
            spawnTutorial.SetState(
                !failed && category == 0 && !characterSelectionLocked && !held,
                !failed && category == 1 && swordSelectionReady,
                lunaController.FightButton);
    }
}

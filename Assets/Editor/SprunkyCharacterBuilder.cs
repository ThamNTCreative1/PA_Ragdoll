using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;

// Builds the playable's Human / Monster prefabs from the original game's Sprunky ragdoll rigs
// (03 PREFABS/Sprunky/Sprunky_N.prefab): all 16 body parts and the source joint limits are kept,
// RagdollBalance keeps them standing, and the V10 gameplay scripts are wired on top.
public static class SprunkyCharacterBuilder
{
    private const string SprunkyFolder = "Assets/03 PREFABS/Sprunky/";
    private const string ModelFolder = "Assets/01 RESOURCES/SRP/Model/";
    private const string OutFolder = "Assets/03 PREFABS/Characters/";
    private const float Scale = 2.3f;

    private const int LayerMonster = 3;
    private const int LayerPlayer = 6;
    private const int LayerMonsterTrigger = 7;
    private const int LayerGroundCheck = 9;
    private const int LayerPlayerTrigger = 10;

    private static readonly string[] Parts =
    {
        "head_mid", "chest_mid", "abdomen_mid", "hip_mid",
        "upperarm_front", "forearm_front", "hand_front",
        "upperarm_back", "forearm_back", "hand_back",
        "thigh_front", "shin_front", "foot_front",
        "thigh_back", "shin_back", "foot_back"
    };

    private static readonly Dictionary<string, int> Order = new Dictionary<string, int>
    {
        // Steps of 10 leave room for the clothes between the body layers.
        { "upperarm_back", 0 }, { "forearm_back", 0 }, { "hand_back", 0 },
        { "thigh_back", 10 }, { "shin_back", 10 }, { "foot_back", 10 },
        { "thigh_front", 20 }, { "shin_front", 20 }, { "foot_front", 20 },
        { "hip_mid", 30 }, { "abdomen_mid", 40 }, { "chest_mid", 50 }, { "head_mid", 60 },
        { "upperarm_front", 80 }, { "forearm_front", 80 }, { "hand_front", 90 }
    };

    private const float GunAlongArm = -90f;
    private const float GunGripY = -0.07f;

    private static readonly Dictionary<string, Transform> s_parts = new Dictionary<string, Transform>();

    [MenuItem("Tools/Project/Build Sprunky Characters")]
    public static void BuildAll()
    {
        if (!AssetDatabase.IsValidFolder("Assets/03 PREFABS/Characters"))
            AssetDatabase.CreateFolder("Assets/03 PREFABS", "Characters");

        // One human prefab; its look (and bitten look) comes from the skin picked in Luna.
        SprunkySkinLibrary library = BuildSkinLibrary();
        BuildHuman("H_Player", 9, library);

        // Monsters: HP / speed / death force copied from the V10 zombie they replace.
        // One prefab per V10 zombie type; the look comes from the zombie version picked in Luna.
        ZombieSkinLibrary zombies = BuildZombieLibrary();
        BuildMonster("Z_01", 2, "MZ01", zombies);
        BuildMonster("Z_02", 2, "MZ02", zombies);
        BuildMonster("Z_03", 2, "MZ03", zombies);

        AssetDatabase.SaveAssets();
        Debug.Log("Sprunky characters built in " + OutFolder);
    }

    // ---------------------------------------------------------------- rig

    private static GameObject CreateRig(int index, string name, int layer, string tag)
    {
        GameObject src = AssetDatabase.LoadAssetAtPath<GameObject>(SprunkyFolder + "Sprunky_" + index + ".prefab");
        GameObject root = (GameObject)PrefabUtility.InstantiatePrefab(src);
        PrefabUtility.UnpackPrefabInstance(root, PrefabUnpackMode.Completely, InteractionMode.AutomatedAction);
        root.name = name;
        root.transform.position = Vector3.zero;

        Object.DestroyImmediate(root.GetComponent<Animator>());
        Transform hip = root.transform.Find("Hip"); // source pose driver, its controller is missing
        if (hip) Object.DestroyImmediate(hip.gameObject);

        Transform parts = root.transform.Find("Parts");
        s_parts.Clear();
        foreach (string p in Parts) s_parts[p] = parts.Find(p);

        // Flatten Parts into the root, drop the source x5 root scale (bake Scale into each part),
        // and put the origin on the abdomen like the V10 rigs.
        Dictionary<Transform, Vector2> rest = new Dictionary<Transform, Vector2>();
        Vector3 center = root.transform.InverseTransformPoint(s_parts["abdomen_mid"].position);
        foreach (string p in Parts)
        {
            Vector3 local = root.transform.InverseTransformPoint(s_parts[p].position);
            rest[s_parts[p]] = new Vector2(local.x - center.x, local.y - center.y);
        }
        foreach (KeyValuePair<Transform, Vector2> kv in rest) kv.Key.SetParent(root.transform, false);
        Object.DestroyImmediate(parts.gameObject);

        root.transform.localScale = Vector3.one;
        foreach (KeyValuePair<Transform, Vector2> kv in rest)
        {
            Transform t = kv.Key;
            t.localPosition = new Vector3(kv.Value.x * Scale, kv.Value.y * Scale, 0);
            t.localRotation = Quaternion.identity;
            t.localScale = Vector3.one * Scale;
            CleanPart(t);
        }

        SetLayer(root, layer, tag);

        // No body on the root (the V10 rigs had one, fixed to the chest): every time it moved, Unity
        // dragged all child part transforms with it and the ragdoll kept getting teleported over.
        Rigidbody2D rootRb = root.GetComponent<Rigidbody2D>();
        if (rootRb) Object.DestroyImmediate(rootRb);
        root.AddComponent<SortingGroup>();

        // The chest is the chain root: drop its disabled self-joint.
        HingeJoint2D chestJoint = s_parts["chest_mid"].GetComponent<HingeJoint2D>();
        if (chestJoint) Object.DestroyImmediate(chestJoint);
        return root;
    }

    private static void CleanPart(Transform part)
    {
        // Keep only the Skin sprite: Skeleton/Meat/blood particles belong to the source's
        // Destructible2D damage system.
        for (int i = part.childCount - 1; i >= 0; i--)
        {
            Transform c = part.GetChild(i);
            if (c.name == "Skin") continue;
            Object.DestroyImmediate(c.gameObject);
        }
        foreach (BoxCollider2D box in part.GetComponents<BoxCollider2D>())
            if (box.isTrigger) Object.DestroyImmediate(box);

        Transform skin = part.Find("Skin");
        SpriteRenderer sr = skin.GetComponent<SpriteRenderer>();
        sr.sharedMaterial = AssetDatabase.GetBuiltinExtraResource<Material>("Sprites-Default.mat");
        sr.sortingLayerID = 0;
        sr.sortingOrder = Order[part.name];
        skin.localScale = new Vector3(1, skin.localScale.y, 1);
    }

    private static RagdollBalance AddBalance(GameObject root, Transform aim, SpriteRenderer gun)
    {
        RagdollBalance b = root.AddComponent<RagdollBalance>();
        SerializedObject so = new SerializedObject(b);
        Transform chest = s_parts["chest_mid"];
        so.FindProperty("torso").objectReferenceValue = chest.GetComponent<Rigidbody2D>();
        so.FindProperty("head").objectReferenceValue = s_parts["head_mid"].GetComponent<Rigidbody2D>();
        so.FindProperty("neck").objectReferenceValue = Joint("head_mid");
        SerializedProperty spine = so.FindProperty("spine");
        spine.arraySize = 2;
        spine.GetArrayElementAtIndex(0).objectReferenceValue = Joint("abdomen_mid");
        spine.GetArrayElementAtIndex(1).objectReferenceValue = Joint("hip_mid");
        SetLimb(so.FindProperty("legFront"), "thigh_front", "shin_front", "foot_front");
        SetLimb(so.FindProperty("legBack"), "thigh_back", "shin_back", "foot_back");
        SetLimb(so.FindProperty("armFront"), "upperarm_front", "forearm_front", "hand_front");
        SetLimb(so.FindProperty("armBack"), "upperarm_back", "forearm_back", "hand_back");
        so.FindProperty("footFront").objectReferenceValue = s_parts["foot_front"].GetComponent<Collider2D>();
        so.FindProperty("footBack").objectReferenceValue = s_parts["foot_back"].GetComponent<Collider2D>();
        so.FindProperty("aimPoint").objectReferenceValue = aim;
        so.FindProperty("gunSprite").objectReferenceValue = gun;
        so.FindProperty("standHeight").floatValue = chest.position.y - FootBottom();
        so.FindProperty("headRestHeight").floatValue = s_parts["head_mid"].position.y - chest.position.y;
        so.ApplyModifiedPropertiesWithoutUndo();
        return b;
    }

    private static void SetLimb(SerializedProperty limb, string upper, string middle, string lower)
    {
        limb.FindPropertyRelative("Upper").objectReferenceValue = Joint(upper);
        limb.FindPropertyRelative("Middle").objectReferenceValue = Joint(middle);
        limb.FindPropertyRelative("Lower").objectReferenceValue = Joint(lower);
    }

    private static HingeJoint2D Joint(string part)
    {
        return s_parts[part].GetComponent<HingeJoint2D>();
    }

    private static float FootBottom()
    {
        float y = float.MaxValue;
        foreach (string f in new[] { "foot_front", "foot_back" })
            y = Mathf.Min(y, s_parts[f].Find("Skin").GetComponent<SpriteRenderer>().bounds.min.y);
        return y;
    }

    // ---------------------------------------------------------------- human

    // Normal sheet / horror sheet per player skin (Luna "Player" field).
    private static readonly string[,] SkinSheets =
    {
        { "Reddy", "reddy", "reddy 2" },
        { "Sky", "скай", "скай 2" },
        { "Vineria", "vineria", "vineria 2" },
        { "Brud", "брут", "брут 2" },
        { "Jevin", "джевин", "джевин 2" },
        { "Owakcx", "овакс", "овакс 2" },
        { "Pinki", "пинки", "пинки 2" },
        { "Derpl", "дёрпл", "дерпл 2" },
    };

    private const string LibraryPath = "Assets/01 RESOURCES/SRP/SprunkySkinLibrary.asset";

    private static SprunkySkinLibrary BuildSkinLibrary()
    {
        SprunkySkinLibrary lib = AssetDatabase.LoadAssetAtPath<SprunkySkinLibrary>(LibraryPath);
        if (!lib)
        {
            lib = ScriptableObject.CreateInstance<SprunkySkinLibrary>();
            AssetDatabase.CreateAsset(lib, LibraryPath);
        }
        int n = SkinSheets.GetLength(0);
        lib.Skins = new SprunkySkinLibrary.Skin[n];
        for (int i = 0; i < n; i++)
        {
            SprunkySkinLibrary.Skin skin = new SprunkySkinLibrary.Skin();
            skin.Id = (SprunkySkinId)System.Enum.Parse(typeof(SprunkySkinId), SkinSheets[i, 0]);
            skin.Body = SheetSlices(SkinSheets[i, 1]);
            skin.Zombie = SheetSlices(SkinSheets[i, 2]);
            lib.Skins[i] = skin;
        }
        EditorUtility.SetDirty(lib);
        return lib;
    }

    // The 10 slices of a sheet, by the "_N" suffix of their names.
    private static Sprite[] SheetSlices(string sheet)
    {
        Sprite[] slices = new Sprite[10];
        foreach (KeyValuePair<string, Sprite> kv in LoadSprites(ModelFolder + sheet + ".png"))
            slices[SliceIndex(kv.Value)] = kv.Value;
        for (int i = 0; i < 10; i++)
            if (!slices[i]) Debug.LogWarning("Sheet " + sheet + " has no slice " + i);
        return slices;
    }

    private static int SliceIndex(Sprite sprite)
    {
        return int.Parse(sprite.name.Substring(sprite.name.LastIndexOf('_') + 1));
    }

    private static void BuildHuman(string name, int index, SprunkySkinLibrary library)
    {
        SprunkySkinLibrary.Skin look = library.Get(SprunkySkinId.Reddy);
        GameObject old = AssetDatabase.LoadAssetAtPath<GameObject>("Assets/03 PREFABS/M05.prefab");
        GameObject root = CreateRig(index, name, LayerPlayer, "Untagged");

        PlayerController controller = root.AddComponent<PlayerController>();
        EditorUtility.CopySerialized(old.GetComponent<PlayerController>(), controller);

        // Body renderers + their sheet slice; shown as the default skin, re-skinned at runtime.
        SerializedObject so = new SerializedObject(controller);
        SerializedProperty list = so.FindProperty("bodyRenderers");
        list.ClearArray();
        SpriteRenderer[] renderers = new SpriteRenderer[Parts.Length];
        int[] slices = new int[Parts.Length];
        for (int i = 0; i < Parts.Length; i++)
        {
            SpriteRenderer sr = s_parts[Parts[i]].Find("Skin").GetComponent<SpriteRenderer>();
            renderers[i] = sr;
            slices[i] = SliceIndex(sr.sprite);
            sr.sprite = look.Body[slices[i]];
            list.InsertArrayElementAtIndex(list.arraySize);
            SerializedProperty e = list.GetArrayElementAtIndex(list.arraySize - 1);
            e.FindPropertyRelative("Renderer").objectReferenceValue = sr;
            e.FindPropertyRelative("ZSprite").objectReferenceValue = look.Zombie[slices[i]];
        }
        so.FindProperty("body").objectReferenceValue = s_parts["chest_mid"];
        so.ApplyModifiedPropertiesWithoutUndo();

        SprunkySkin skin = root.AddComponent<SprunkySkin>();
        SerializedObject sk = new SerializedObject(skin);
        sk.FindProperty("library").objectReferenceValue = library;
        sk.FindProperty("player").objectReferenceValue = controller;
        SerializedProperty rp = sk.FindProperty("renderers");
        SerializedProperty sp = sk.FindProperty("slices");
        rp.arraySize = renderers.Length;
        sp.arraySize = renderers.Length;
        for (int i = 0; i < renderers.Length; i++)
        {
            rp.GetArrayElementAtIndex(i).objectReferenceValue = renderers[i];
            sp.GetArrayElementAtIndex(i).intValue = slices[i];
        }
        sk.ApplyModifiedPropertiesWithoutUndo();

        foreach (string p in Parts)
        {
            BodyPiece piece = s_parts[p].gameObject.AddComponent<BodyPiece>();
            SetRef(piece, "player", controller);
        }

        // Trigger that finds monsters (same as M05/Trigger).
        GameObject trig = new GameObject("Trigger");
        trig.layer = LayerPlayerTrigger;
        trig.transform.SetParent(root.transform, false);
        BoxCollider2D tb = trig.AddComponent<BoxCollider2D>();
        tb.isTrigger = true;
        tb.size = new Vector2(20, 20);
        PlayerTrigger playerTrigger = trig.AddComponent<PlayerTrigger>();

        // Gun held in the front hand IN LINE with the arm (barrel along the hand's -Y), so aiming
        // raises the whole arm at the target. Grip ~35% from the stock sits in the hand.
        Transform hand = s_parts["hand_front"];
        GameObject gun = new GameObject("Gun");
        gun.layer = LayerPlayer;
        gun.transform.SetParent(hand, false);
        gun.transform.localRotation = Quaternion.Euler(0f, 0f, GunAlongArm);
        gun.transform.localPosition = new Vector3(0f, GunGripY, 0);
        SpriteRenderer gsr = gun.AddComponent<SpriteRenderer>();
        gsr.sprite = LoadSprites(ModelFolder + "AR 7N Aberidus.png")["AR 7N Aberidus_0"];
        gsr.sortingOrder = 75;
        GameObject aim = new GameObject("Aim");
        aim.layer = LayerPlayer;
        aim.transform.SetParent(gun.transform, false);
        aim.transform.localPosition = new Vector3(0.22f, 0.03f, 0);
        ParticleSystem flash = AddMuzzleFlash(gun.transform);

        RagdollBalance balance = AddBalance(root, aim.transform, gsr);

        PlayerAttack attack = root.AddComponent<PlayerAttack>();
        EditorUtility.CopySerialized(old.GetComponent<PlayerAttack>(), attack);
        SetRef(attack, "balance", balance);
        SetRef(attack, "gun", aim.transform);
        SetRef(attack, "playerTrigger", playerTrigger);
        SetRef(attack, "player", controller);
        SetRef(attack, "muzzleFlash", flash);

        // Clothes from the original game (always worn; hat only sometimes, picked at runtime).
        OutfitLibrary outfits = BuildOutfitLibrary();
        OutfitLibrary.Outfit first = outfits.Outfits[0];
        SpriteRenderer hat = Wear(s_parts["head_mid"], "Hat", first.Hat, Order["head_mid"] + 5, first.HatOffset);
        SpriteRenderer shirt = Wear(s_parts["chest_mid"], "Shirt", first.Chest, Order["chest_mid"] + 5, Vector2.zero);
        SpriteRenderer pants = Wear(s_parts["abdomen_mid"], "Pants", first.Lower, Order["abdomen_mid"] + 5, Vector2.zero);
        SprunkyOutfit outfit = root.AddComponent<SprunkyOutfit>();
        SerializedObject os = new SerializedObject(outfit);
        os.FindProperty("library").objectReferenceValue = outfits;
        os.FindProperty("hat").objectReferenceValue = hat;
        os.FindProperty("chest").objectReferenceValue = shirt;
        os.FindProperty("lower").objectReferenceValue = pants;
        os.ApplyModifiedPropertiesWithoutUndo();

        // Dormant zombie brain (RSNM-style infection: the bitten human becomes a real zombie).
        MonsterController zombie = AddMonsterBrain(root, "MZ01", balance);
        SerializedObject zs = new SerializedObject(zombie);
        zs.FindProperty("reportDeath").boolValue = false; // not one of the player's spawned monsters
        zs.ApplyModifiedPropertiesWithoutUndo();
        zombie.enabled = false;
        Transform chestT = s_parts["chest_mid"];
        chestT.Find("Trigger").gameObject.SetActive(false);
        chestT.Find("GroundCheck").gameObject.SetActive(false);
        SerializedObject ps = new SerializedObject(controller);
        ps.FindProperty("zombieBrain").objectReferenceValue = zombie;
        ps.FindProperty("zombieTrigger").objectReferenceValue = chestT.Find("Trigger").gameObject;
        ps.FindProperty("zombieGround").objectReferenceValue = chestT.Find("GroundCheck").gameObject;
        ps.FindProperty("attack").objectReferenceValue = attack;
        ps.FindProperty("humanTrigger").objectReferenceValue = trig;
        ps.ApplyModifiedPropertiesWithoutUndo();

        Save(root);
    }

    // Fire + glow of the original game's AK-47 (Resources/firearms/AK-47 "Fireball Simple"), at the
    // same place on the same gun sprite; drawn over the gun.
    private static ParticleSystem AddMuzzleFlash(Transform gun)
    {
        GameObject prefab = AssetDatabase.LoadAssetAtPath<GameObject>("Assets/03 PREFABS/MuzzleFlash.prefab");
        GameObject flash = (GameObject)PrefabUtility.InstantiatePrefab(prefab, gun);
        flash.transform.localPosition = new Vector3(0.192f, 0.003f, 0f);
        flash.transform.localRotation = Quaternion.identity;
        int order = 76;
        foreach (ParticleSystemRenderer r in flash.GetComponentsInChildren<ParticleSystemRenderer>(true))
            r.sortingOrder = order++;
        return flash.GetComponent<ParticleSystem>();
    }

    // ---------------------------------------------------------------- outfits

    private const string OutfitLibraryPath = "Assets/01 RESOURCES/SRP/OutfitLibrary.asset";
    private const string ClothesSheet = "одежда";
    // Lift of every hat above the head piece centre, in source units.
    private const float HatLift = 0.03f;

    // Source prefabs Cap*/Jacket* (Resources/steelweapons); cop and tsar have no sprites in the dump.
    // name, hat slice, hat offset y (Cap*/Sprite), chest slice, lower slice
    private static readonly object[][] OutfitDefs =
    {
        new object[] { "Astronaut", 0, 0.0515f, 4, 8 },  // const
        new object[] { "Gangster", 1, 0f, 5, 9 },        // med
        new object[] { "Soldier", 2, 0f, 6, 10 },        // war
        new object[] { "Viking", 3, 0f, 7, 11 },         // viking
    };

    private static OutfitLibrary BuildOutfitLibrary()
    {
        OutfitLibrary lib = AssetDatabase.LoadAssetAtPath<OutfitLibrary>(OutfitLibraryPath);
        if (!lib)
        {
            lib = ScriptableObject.CreateInstance<OutfitLibrary>();
            AssetDatabase.CreateAsset(lib, OutfitLibraryPath);
        }
        Dictionary<string, Sprite> sheet = LoadSprites(ModelFolder + ClothesSheet + ".png");
        lib.Outfits = new OutfitLibrary.Outfit[OutfitDefs.Length];
        for (int i = 0; i < OutfitDefs.Length; i++)
        {
            object[] d = OutfitDefs[i];
            OutfitLibrary.Outfit o = new OutfitLibrary.Outfit();
            o.Name = (string)d[0];
            o.Hat = sheet[ClothesSheet + "_" + (int)d[1]];
            o.HatOffset = new Vector2(0f, (float)d[2] + HatLift);
            o.Chest = sheet[ClothesSheet + "_" + (int)d[3]];
            o.Lower = sheet[ClothesSheet + "_" + (int)d[4]];
            lib.Outfits[i] = o;
        }
        EditorUtility.SetDirty(lib);
        return lib;
    }

    private static SpriteRenderer Wear(Transform part, string name, Sprite sprite, int order, Vector2 offset)
    {
        GameObject go = new GameObject(name);
        go.layer = part.gameObject.layer;
        go.transform.SetParent(part, false);
        go.transform.localPosition = new Vector3(offset.x, offset.y, 0f);
        SpriteRenderer sr = go.AddComponent<SpriteRenderer>();
        sr.sprite = sprite;
        sr.sortingOrder = order;
        sr.sharedMaterial = AssetDatabase.GetBuiltinExtraResource<Material>("Sprites-Default.mat");
        return sr;
    }

    // ---------------------------------------------------------------- monster

    // Zombie version (Luna "Zombie" field): two horror sheets each, mixed in the crowd.
    private static readonly string[,] ZombieSheets =
    {
        { "YellowOrange", "simon 2", "орэн 2" },
        { "RedGray", "reddy 2", "fun bot 2" },
    };

    private const string ZombieLibraryPath = "Assets/01 RESOURCES/SRP/ZombieSkinLibrary.asset";

    private static ZombieSkinLibrary BuildZombieLibrary()
    {
        ZombieSkinLibrary lib = AssetDatabase.LoadAssetAtPath<ZombieSkinLibrary>(ZombieLibraryPath);
        if (!lib)
        {
            lib = ScriptableObject.CreateInstance<ZombieSkinLibrary>();
            AssetDatabase.CreateAsset(lib, ZombieLibraryPath);
        }
        int n = ZombieSheets.GetLength(0);
        lib.Skins = new ZombieSkinLibrary.Skin[n];
        for (int i = 0; i < n; i++)
        {
            ZombieSkinLibrary.Skin skin = new ZombieSkinLibrary.Skin();
            skin.Id = (ZombieSkinId)System.Enum.Parse(typeof(ZombieSkinId), ZombieSheets[i, 0]);
            skin.A = SheetSlices(ZombieSheets[i, 1]);
            skin.B = SheetSlices(ZombieSheets[i, 2]);
            lib.Skins[i] = skin;
        }
        EditorUtility.SetDirty(lib);
        return lib;
    }

    private static void BuildMonster(string name, int index, string template, ZombieSkinLibrary zombies)
    {
        GameObject root = CreateRig(index, name, LayerMonster, "Monster");
        RagdollBalance balance = AddBalance(root, null, null);
        AddMonsterBrain(root, template, balance);
        // Look: shown as the default version's sheet A, re-skinned at runtime.
        Sprite[] look = zombies.Get(ZombieSkinId.YellowOrange).A;
        MonsterSkin skin = root.AddComponent<MonsterSkin>();
        SerializedObject sk = new SerializedObject(skin);
        sk.FindProperty("library").objectReferenceValue = zombies;
        SerializedProperty rp = sk.FindProperty("renderers");
        SerializedProperty sp = sk.FindProperty("slices");
        rp.arraySize = Parts.Length;
        sp.arraySize = Parts.Length;
        for (int i = 0; i < Parts.Length; i++)
        {
            SpriteRenderer sr = s_parts[Parts[i]].Find("Skin").GetComponent<SpriteRenderer>();
            int slice = SliceIndex(sr.sprite);
            sr.sprite = look[slice];
            rp.GetArrayElementAtIndex(i).objectReferenceValue = sr;
            sp.GetArrayElementAtIndex(i).intValue = slice;
        }
        sk.ApplyModifiedPropertiesWithoutUndo();

        Save(root);
    }

    // MonsterController + its MonsterTrigger / GroundCheck on the chest (like MZ01/Body).
    // A human gets one too, switched off, and PlayerController turns it on when bitten.
    private static MonsterController AddMonsterBrain(GameObject root, string template, RagdollBalance balance)
    {
        GameObject old = AssetDatabase.LoadAssetAtPath<GameObject>("Assets/03 PREFABS/" + template + ".prefab");
        Transform chest = s_parts["chest_mid"];

        GameObject trig = new GameObject("Trigger");
        trig.layer = LayerMonsterTrigger;
        trig.transform.SetParent(chest, false);
        trig.transform.localScale = Vector3.one / Scale;
        BoxCollider2D tb = trig.AddComponent<BoxCollider2D>();
        tb.isTrigger = true;
        tb.size = new Vector2(20, 20);
        MonsterTrigger monsterTrigger = trig.AddComponent<MonsterTrigger>();

        GameObject ground = new GameObject("GroundCheck");
        ground.layer = LayerGroundCheck;
        ground.transform.SetParent(chest, false);
        ground.transform.localScale = Vector3.one / Scale;
        ground.transform.position = new Vector3(chest.position.x, FootBottom(), 0);
        BoxCollider2D gb = ground.AddComponent<BoxCollider2D>();
        gb.isTrigger = true;
        gb.size = new Vector2(0.3f, 0.15f);
        GroundCheck groundCheck = ground.AddComponent<GroundCheck>();

        MonsterController controller = root.AddComponent<MonsterController>();
        EditorUtility.CopySerialized(old.GetComponent<MonsterController>(), controller);
        SerializedObject so = new SerializedObject(controller);
        SerializedProperty pieces = so.FindProperty("pieces");
        pieces.ClearArray();
        foreach (string p in Parts)
        {
            pieces.InsertArrayElementAtIndex(pieces.arraySize);
            SerializedProperty e = pieces.GetArrayElementAtIndex(pieces.arraySize - 1);
            e.FindPropertyRelative("Joint").objectReferenceValue = s_parts[p].GetComponent<HingeJoint2D>();
            e.FindPropertyRelative("Rb").objectReferenceValue = s_parts[p].GetComponent<Rigidbody2D>();
        }
        so.FindProperty("balance").objectReferenceValue = balance;
        so.FindProperty("trigger").objectReferenceValue = monsterTrigger;
        so.FindProperty("groundCheck").objectReferenceValue = groundCheck;
        so.FindProperty("body").objectReferenceValue = chest.GetComponent<Rigidbody2D>();
        so.ApplyModifiedPropertiesWithoutUndo();
        return controller;
    }

    // ---------------------------------------------------------------- helpers

    private static Dictionary<string, Sprite> LoadSprites(string path)
    {
        Dictionary<string, Sprite> d = new Dictionary<string, Sprite>();
        foreach (Object o in AssetDatabase.LoadAllAssetsAtPath(path))
        {
            Sprite s = o as Sprite;
            if (s) d[s.name] = s;
        }
        return d;
    }

    private static void SetRef(Object target, string field, Object value)
    {
        SerializedObject so = new SerializedObject(target);
        so.FindProperty(field).objectReferenceValue = value;
        so.ApplyModifiedPropertiesWithoutUndo();
    }

    private static void SetLayer(GameObject root, int layer, string tag)
    {
        foreach (Transform t in root.GetComponentsInChildren<Transform>(true))
        {
            t.gameObject.layer = layer;
            t.gameObject.tag = tag;
        }
    }

    private static void Save(GameObject root)
    {
        PrefabUtility.SaveAsPrefabAsset(root, OutFolder + root.name + ".prefab");
        Object.DestroyImmediate(root);
    }
}

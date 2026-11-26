using System;
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

// SSP_V10 = SRP_V07 gameplay (potion -> zombie -> smash the monsters) with SSP art.
// Tools/SSP/Import + Build Prefabs : sprite import settings, layers, Man_* ragdoll prefabs (normal + zombie sprites), FX prefabs.
// Tools/SSP/Build World (new scene) : creates Scenes/Game.unity with camera, managers and the room (no UI: UI is made in the scene).
public static class SSPRoomBuilder
{
    const string Root = "Assets/01 RESOURCES/SSP";
    const string PartsDir = Root + "/Parts";
    const string ZombieDir = Root + "/Parts/Zombie";
    const string PropsDir = Root + "/Props";
    const string JsonPath = Root + "/ssp_parts.json";
    const string PrefabDir = "Assets/02 PREFABS";
    const string ScenePath = "Assets/Scenes/Game.unity";
    const float PPU = 64f; // SSP pixel art: 1 block = 64 px = 1 unit

    public const int LayerMan = 8, LayerPlayer = 9, LayerItem = 10, LayerItemTrigger = 11;

    // Player skins in LunaController.PlayerSkin order.
    // Skins in LunaController.CharacterSkin order (player + monsters).
    static readonly string[] PlayerOrder = { "hat", "beanie", "bush", "helmet", "skullred", "skullblack", "alien", "deer", "goat", "snow", "pink" };

    [Serializable] class PartData { public string name; public int w, h; public float pivotX, pivotY; public int coreW; }
    [Serializable] class OutfitData { public string name, head, body, arm, leg, armR; public int headUp; }
    [Serializable] class Db { public float ppu; public PartData[] parts; public OutfitData[] outfits; }

    static Db LoadDb() { return JsonUtility.FromJson<Db>(File.ReadAllText(JsonPath)); }
    static PartData Find(Db db, string n) { foreach (PartData p in db.parts) if (p.name == n) return p; throw new Exception("part " + n); }
    static float CoreW(PartData d) { return (d.coreW > 0 ? d.coreW : d.w) / PPU; }

    // ---------- setup ----------
    static void SetupProject()
    {
        PlayerSettings.colorSpace = ColorSpace.Gamma; // Luna renders in Gamma
        SerializedObject tm = new SerializedObject(AssetDatabase.LoadAllAssetsAtPath("ProjectSettings/TagManager.asset")[0]);
        SerializedProperty layers = tm.FindProperty("layers");
        layers.GetArrayElementAtIndex(LayerMan).stringValue = "Man";
        layers.GetArrayElementAtIndex(LayerPlayer).stringValue = "Player";
        layers.GetArrayElementAtIndex(LayerItem).stringValue = "Item";
        layers.GetArrayElementAtIndex(LayerItemTrigger).stringValue = "ItemTrigger";
        tm.ApplyModifiedProperties();
        // Parts of one ragdoll never collide with each other (monsters share Man, the player is alone on Player).
        Physics2D.IgnoreLayerCollision(LayerMan, LayerMan, true);
        Physics2D.IgnoreLayerCollision(LayerPlayer, LayerPlayer, true);
        Physics2D.IgnoreLayerCollision(LayerMan, LayerPlayer, false);
        // Potion body: only the world. Potion trigger: only the player.
        for (int l = 0; l < 32; l++)
        {
            Physics2D.IgnoreLayerCollision(LayerItem, l, l != 0);
            Physics2D.IgnoreLayerCollision(LayerItemTrigger, l, l != LayerPlayer);
        }
    }

    static void Import(string path, float ppu, bool point, Vector2 pivot)
    {
        TextureImporter ti = AssetImporter.GetAtPath(path) as TextureImporter;
        if (ti == null) return;
        ti.textureType = TextureImporterType.Sprite;
        ti.spriteImportMode = SpriteImportMode.Single;
        ti.spritePixelsPerUnit = ppu;
        ti.filterMode = point ? FilterMode.Point : FilterMode.Bilinear;
        ti.mipmapEnabled = false;
        ti.textureCompression = TextureImporterCompression.Uncompressed;
        ti.alphaIsTransparency = true;
        ti.wrapMode = TextureWrapMode.Clamp;
        TextureImporterSettings s = new TextureImporterSettings();
        ti.ReadTextureSettings(s);
        s.spriteAlignment = (int)SpriteAlignment.Custom;
        s.spritePivot = pivot;
        s.spriteMeshType = SpriteMeshType.FullRect;
        ti.SetTextureSettings(s);
        ti.SaveAndReimport();
    }

    static void ImportDir(string dir, float ppu, bool point)
    {
        foreach (string f in Directory.GetFiles(dir, "*.png"))
            Import(f.Replace('\\', '/'), ppu, point, new Vector2(0.5f, 0.5f));
    }

    static void ImportAll()
    {
        ImportDir(PartsDir, PPU, true);
        ImportDir(ZombieDir, PPU, true);
        ImportDir(PropsDir, PPU, true);
        ImportDir(Root + "/Env", PPU, true);
        Import(Root + "/Env/white.png", 16, true, new Vector2(0.5f, 0.5f)); // 1 unit square for blood drops
        ImportDir(Root + "/Fx", PPU, true);
        Import(Root + "/Fx/effect.png", 100, false, new Vector2(0.5f, 0.5f));
        Import(Root + "/Fx/black.png", 100, false, new Vector2(0.5f, 0.5f));
        ImportDir(Root + "/Ui", PPU, true);
        Import(Root + "/Ui/finger.png", 150, false, new Vector2(0.36f, 0.98f));
        Import(Root + "/Ui/Square.png", 100, true, new Vector2(0.5f, 0.5f));
        Import("Assets/01 RESOURCES/SRP/potion.png", PPU, true, new Vector2(0.5f, 0.5f));
        // SRP_V07 screen background (RawImage texture, LunaController "BG Image").
        TextureImporter bgTi = AssetImporter.GetAtPath("Assets/01 RESOURCES/SRP/bg.png") as TextureImporter;
        if (bgTi != null)
        {
            bgTi.textureType = TextureImporterType.Default; bgTi.mipmapEnabled = false; bgTi.wrapMode = TextureWrapMode.Clamp;
            bgTi.filterMode = FilterMode.Bilinear; bgTi.textureCompression = TextureImporterCompression.Uncompressed; bgTi.npotScale = TextureImporterNPOTScale.None;
            bgTi.SaveAndReimport();
        }
        // Luna exports compressed-in-memory clips silent: decompress on load.
        List<string> audioFiles = new List<string>(Directory.GetFiles(Root + "/Audio"));
        if (Directory.Exists("Assets/01 RESOURCES/SRP/Audio")) audioFiles.AddRange(Directory.GetFiles("Assets/01 RESOURCES/SRP/Audio"));
        foreach (string f in audioFiles)
        {
            if (f.EndsWith(".meta")) continue;
            AudioImporter ai = AssetImporter.GetAtPath(f.Replace('\\', '/')) as AudioImporter;
            if (ai == null) continue;
            AudioImporterSampleSettings ss = ai.defaultSampleSettings;
            ss.loadType = AudioClipLoadType.DecompressOnLoad;
            ai.defaultSampleSettings = ss;
            ai.SaveAndReimport();
        }
    }

    static Sprite Spr(string path)
    {
        Sprite s = AssetDatabase.LoadAssetAtPath<Sprite>(path);
        if (!s) throw new Exception("sprite " + path);
        return s;
    }
    static Sprite Part(string n) { return Spr(PartsDir + "/" + n + ".png"); }
    static Sprite ZPart(string n) { return Spr(ZombieDir + "/z_" + n + ".png"); }
    static Sprite Prop(string n) { return Spr(PropsDir + "/" + n + ".png"); }

    [MenuItem("Tools/SSP/Import + Build Prefabs")]
    public static void BuildPrefabs()
    {
        SetupProject();
        AssetDatabase.Refresh();
        ImportAll();
        BuildFxPrefabs();
        BuildMen(LoadDb());
        AssetDatabase.SaveAssets();
        Debug.Log("[SSPRoomBuilder] prefabs done");
    }

    // ---------- FX ----------
    static void BuildFxPrefab(string name, Sprite s, int order)
    {
        Directory.CreateDirectory(PrefabDir + "/Fx");
        GameObject g = new GameObject(name);
        SpriteRenderer sr = g.AddComponent<SpriteRenderer>(); sr.sprite = s; sr.sortingOrder = order;
        FxSprite fx = g.AddComponent<FxSprite>();
        SetRef(fx, "sr", sr);
        PrefabUtility.SaveAsPrefabAsset(g, PrefabDir + "/Fx/" + name + ".prefab");
        UnityEngine.Object.DestroyImmediate(g);
    }

    static void BuildFxPrefabs()
    {
        BuildFxPrefab("Blood", Spr(Root + "/Env/white.png"), 600);
        BuildFxPrefab("Splash", Spr(Root + "/Fx/splash.png"), 610);
        BuildFxPrefab("Smoke", Spr(Root + "/Fx/smoke.png"), 605);
    }

    // ---------- men ----------
    // Rig = SSP_V09 / RSNM layout: Torso, Head, LeftArm, RightArm, LeftLeg, RightLeg, each a body whose transform sits at
    // its sprite centre; hinges at the top of the limbs / bottom of the head. Draw order (front to back):
    // LeftArm 5 > Head 4 > Torso 3 > LeftLeg 2 > RightLeg 1 > RightArm 0.
    // User 2026-11-26: every part weighs the same.
    const float PartMass = 1f;

    static void BuildMen(Db db)
    {
        Directory.CreateDirectory(PrefabDir + "/Men");
        foreach (OutfitData o in db.outfits)
        {
            PartData head = Find(db, o.head), body = Find(db, o.body), arm = Find(db, o.arm), leg = Find(db, o.leg);
            PartData armR = string.IsNullOrEmpty(o.armR) ? arm : Find(db, o.armR);
            float bw = CoreW(body), bh = body.h / PPU, lw = leg.w / PPU;
            float px = 1f / PPU;

            GameObject root = new GameObject("Man_" + o.name);
            SspMan man = root.AddComponent<SspMan>();
            float ax = bw / 2 - 2 * px, ay = bh / 2 - 5 * px;
            float lx = Mathf.Max(4 * px, bw / 2 - lw / 2 - 3 * px), ly = -bh / 2 + 6 * px;
            SspMan.Part pTorso = MakePart(root, man, 0, "Torso", body, Vector2.zero, 0, PartMass, 3, null, 0);
            Rigidbody2D t = pTorso.body;
            SspMan.Part pHead = MakePart(root, man, 1, "Head", head, new Vector2(0, bh / 2 - 4 * px + o.headUp * px), 4 * px, PartMass, 4, t, 25);
            SspMan.Part pArmL = MakePart(root, man, 2, "LeftArm", arm, new Vector2(-ax, ay), 3 * px, PartMass, 5, t, 110);
            SspMan.Part pArmR = MakePart(root, man, 3, "RightArm", armR, new Vector2(ax, ay), 3 * px, PartMass, 0, t, 110);
            SspMan.Part pLegL = MakePart(root, man, 4, "LeftLeg", leg, new Vector2(-lx, ly), 3 * px, PartMass, 2, t, 60);
            SspMan.Part pLegR = MakePart(root, man, 5, "RightLeg", leg, new Vector2(lx, ly), 3 * px, PartMass, 1, t, 60);
            float hh = head.h / PPU, lh = leg.h / PPU;
            pHead.forcePoint = new Vector2(0, Mathf.Min(hh - 4 * px, 50 * px) - (hh / 2 - 4 * px));
            pLegL.forcePoint = new Vector2(0, -lh / 2);
            pLegR.forcePoint = new Vector2(0, -lh / 2);
            man.parts = new SspMan.Part[] { pTorso, pHead, pArmL, pArmR, pLegL, pLegR };
            man.footDepth = FootDepth(man);
            SetLayer(root, LayerMan);
            PrefabUtility.SaveAsPrefabAsset(root, PrefabDir + "/Men/Man_" + o.name + ".prefab");
            UnityEngine.Object.DestroyImmediate(root);
        }
    }

    // joint: point (torso space) the part hangs from; inset: anchor distance from the part's top edge (limbs) or bottom edge (head).
    static SspMan.Part MakePart(GameObject root, SspMan man, int index, string name, PartData d, Vector2 joint, float inset,
        float mass, int sortOffset, Rigidbody2D connectTo, float limit)
    {
        float w = d.w / PPU, h = d.h / PPU;
        bool isHead = name == "Head";
        Vector2 anchor = connectTo == null ? Vector2.zero : isHead ? new Vector2(0, -h / 2 + inset) : new Vector2(0, h / 2 - inset);
        GameObject go = new GameObject(name);
        go.transform.SetParent(root.transform, false);
        go.transform.localPosition = joint - anchor;
        SpriteRenderer sr = go.AddComponent<SpriteRenderer>();
        sr.sprite = Part(d.name);
        Rigidbody2D rb = go.AddComponent<Rigidbody2D>();
        rb.mass = mass; rb.linearDamping = 0.2f; rb.angularDamping = 2f; rb.gravityScale = 1f;
        rb.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
        BoxCollider2D col = go.AddComponent<BoxCollider2D>();
        if (isHead)
        {
            // Face only (antlers / ears / horns do not collide).
            float cw = Mathf.Min(w, 60f / PPU), ch = Mathf.Min(h, 62f / PPU);
            col.size = new Vector2(cw, ch);
            col.offset = new Vector2(0, -h / 2 + ch / 2);
        }
        else col.size = new Vector2(CoreW(d), h);
        SspPartHit hit = go.AddComponent<SspPartHit>();
        SetRef(hit, "man", man);
        SerializedObject so = new SerializedObject(hit);
        so.FindProperty("index").intValue = index;
        so.ApplyModifiedPropertiesWithoutUndo();

        SspMan.Part part = new SspMan.Part();
        part.body = rb; part.col = col; part.sr = sr; part.normal = sr.sprite; part.zombie = ZPart(d.name); part.sortOffset = sortOffset;
        if (connectTo)
        {
            HingeJoint2D j = go.AddComponent<HingeJoint2D>();
            j.connectedBody = connectTo;
            j.autoConfigureConnectedAnchor = false;
            j.anchor = anchor;
            j.connectedAnchor = joint;
            j.useLimits = true;
            JointAngleLimits2D l = new JointAngleLimits2D(); l.min = -limit; l.max = limit; j.limits = l;
            part.joint = j;
        }
        return part;
    }

    static void SetRef(UnityEngine.Object target, string field, UnityEngine.Object value)
    {
        SerializedObject so = new SerializedObject(target);
        so.FindProperty(field).objectReferenceValue = value;
        so.ApplyModifiedPropertiesWithoutUndo();
    }

    static void SetArray(UnityEngine.Object target, string field, UnityEngine.Object[] values)
    {
        SerializedObject so = new SerializedObject(target);
        SerializedProperty p = so.FindProperty(field);
        p.arraySize = values.Length;
        for (int i = 0; i < values.Length; i++) p.GetArrayElementAtIndex(i).objectReferenceValue = values[i];
        so.ApplyModifiedPropertiesWithoutUndo();
    }

    static void SetLayer(GameObject go, int layer)
    {
        go.layer = layer;
        foreach (Transform c in go.transform) SetLayer(c.gameObject, layer);
    }

    // ---------- world ----------
    static GameObject Sprite(string name, Transform parent, Sprite s, Vector2 pos, float scale, int order)
    {
        GameObject go = new GameObject(name);
        go.transform.SetParent(parent, false);
        go.transform.localPosition = pos;
        go.transform.localScale = new Vector3(scale, scale, 1);
        SpriteRenderer sr = go.AddComponent<SpriteRenderer>();
        sr.sprite = s; sr.sortingOrder = order;
        return go;
    }

    // World / prop colliders are 0.01 smaller than their art on each axis (user: sprites sit slightly into each other).
    const float ColliderShrink = 0.01f;

    static BoxCollider2D Box(GameObject go, Vector2 size, Vector2 offset)
    {
        BoxCollider2D b = go.AddComponent<BoxCollider2D>();
        Vector3 ls = go.transform.lossyScale;
        size = new Vector2(Mathf.Max(0.02f, size.x - ColliderShrink / Mathf.Abs(ls.x)), Mathf.Max(0.02f, size.y - ColliderShrink / Mathf.Abs(ls.y)));
        b.size = size; b.offset = offset;
        return b;
    }

    static Rigidbody2D Body(GameObject go, float mass, bool isStatic)
    {
        Rigidbody2D rb = go.AddComponent<Rigidbody2D>();
        rb.mass = mass;
        rb.bodyType = isStatic ? RigidbodyType2D.Static : RigidbodyType2D.Dynamic;
        return rb;
    }

    static readonly Color HintColor = new Color(0.45f, 1f, 0.3f, 1f); // potion + player hints: green (user)

    static SspMan Man(string outfit) { return AssetDatabase.LoadAssetAtPath<SspMan>(PrefabDir + "/Men/Man_" + outfit + ".prefab"); }

    // Lowest point of the legs below the root (prefab space), to stand a man on a surface.
    static float FootDepth(SspMan prefab)
    {
        float min = 0;
        for (int i = SspMan.LEG_L; i <= SspMan.LEG_R; i++)
        {
            SspMan.Part p = prefab.parts[i];
            float y = p.body.transform.localPosition.y - p.sr.sprite.bounds.size.y / 2;
            if (y < min) min = y;
        }
        return -min;
    }

    static SspMan PlaceMan(string outfit, Transform parent, float x, float surfaceY, string name)
    {
        SspMan prefab = Man(outfit);
        SspMan m = (SspMan)PrefabUtility.InstantiatePrefab(prefab, parent);
        m.name = name;
        m.transform.localPosition = new Vector3(x, surfaceY + FootDepth(prefab) + 0.02f, 0);
        return m;
    }

    [MenuItem("Tools/SSP/Build World (new scene)")]
    public static void BuildWorld()
    {
        if (File.Exists(ScenePath) && !EditorUtility.DisplayDialog("SSP", ScenePath + " exists. Rebuild it (scene edits are lost)?", "Rebuild", "Cancel")) return;
        BuildWorldNoPrompt();
    }

    public static void BuildWorldNoPrompt()
    {
        EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);

        // Camera (LayoutController fits it to the room).
        GameObject camGo = new GameObject("Main Camera");
        camGo.tag = "MainCamera";
        Camera cam = camGo.AddComponent<Camera>();
        cam.orthographic = true; cam.orthographicSize = 9f;
        cam.clearFlags = CameraClearFlags.SolidColor;
        cam.backgroundColor = new Color32(0x3a, 0x12, 0x4a, 255);
        camGo.transform.position = new Vector3(0, 7, -10);
        camGo.AddComponent<AudioListener>();

        GameObject layout = new GameObject("LayoutManager");
        LayoutController lc = layout.AddComponent<LayoutController>();
        SetRef(lc, "cam", cam);

        // ---------- room ----------
        // Layout = SRP_V07 LV1 scaled to the SSP characters (SRP: 4-unit Sprunkies in a 33 x 16 room; here 2.7-unit men,
        // x0.675): inner room x -11..11, floor 0, ceiling 11; long shelf on the right at y 6.
        const int half = 11, roomH = 11;
        Transform game = new GameObject("GAME").transform;
        Transform room = new GameObject("Room").transform; room.SetParent(game, false);
        // Outside the room: the SRP screen background (camera canvas "BGCanvas", made in the scene with the UI).
        Transform back = new GameObject("BackWall").transform; back.SetParent(room, false);
        for (int y = 0; y < roomH; y++)
            for (int x = -half; x < half; x++)
                Sprite("bg_brick", back, Prop("bg_brick"), new Vector2(x + 0.5f, 0.5f + y), 1, -50);
        // No windows (user 2026-11-26).
        foreach (Vector2 b in new Vector2[] { new Vector2(-4.5f, 0.5f), new Vector2(-4.5f, 1.5f), new Vector2(7.5f, 0.5f), new Vector2(7.5f, 1.5f) })
            Sprite("Bookshelf", back, Prop("bookshelf"), b, 1, -45);
        foreach (float lx in new float[] { -6f, 0f, 6f }) Sprite("Lamp", back, Prop("lamp"), new Vector2(lx + 0.5f, roomH - 0.5f), 1, -45);

        Transform floor = new GameObject("Floor").transform; floor.SetParent(room, false);
        for (int x = -22; x <= 22; x++)
        {
            Sprite("grass", floor, Prop("grass"), new Vector2(x, -0.5f), 1, -10);
            for (int y = 1; y <= 9; y++) Sprite("dirt", floor, Prop("dirt"), new Vector2(x, -0.5f - y), 1, -10);
        }
        Box(floor.gameObject, new Vector2(45f, 10f), new Vector2(0, -5f));

        Transform walls = new GameObject("Walls").transform; walls.SetParent(room, false);
        GameObject wl = new GameObject("WallLeft"); wl.transform.SetParent(walls, false);
        GameObject wr = new GameObject("WallRight"); wr.transform.SetParent(walls, false);
        GameObject ceil = new GameObject("Ceiling"); ceil.transform.SetParent(walls, false);
        for (int y = 0; y < roomH; y++)
        {
            // One brick thick like the SRP walls (the following camera may show the outside, as in SRP).
            Sprite("brick", wl.transform, Prop("brick"), new Vector2(-half - 0.5f, 0.5f + y), 1, -5);
            Sprite("brick", wr.transform, Prop("brick"), new Vector2(half + 0.5f, 0.5f + y), 1, -5);
        }
        for (int x = -half - 1; x <= half; x++) Sprite("brick", ceil.transform, Prop("brick"), new Vector2(x + 0.5f, roomH + 0.5f), 1, -5);
        // Thick colliders (art stays 1 block): a limb pressed into a wall is always pushed back into the room.
        Box(wl, new Vector2(10f, 40f), new Vector2(-half - 5f, 14f));
        Box(wr, new Vector2(10f, 40f), new Vector2(half + 5f, 14f));
        Box(ceil, new Vector2(2 * half + 20, 10f), new Vector2(0, roomH + 5f));

        // Shelf on the right wall (SRP brick ledge x 3.3..16.5 at 9 above the floor -> x 3..11, top 6), half a block thick.
        const float shelfTop = 6f;
        GameObject shelf = new GameObject("Shelf"); shelf.transform.SetParent(room, false);
        shelf.transform.localPosition = new Vector3(7f, shelfTop - 0.5f, 0); // one full block thick (user)
        for (int x = 0; x < 8; x++)
        {
            Sprite("planks", shelf.transform, Prop("stonebrick"), new Vector2(-3.5f + x, 0), 1, 5); // user: stone brick shelf
        }
        Box(shelf, new Vector2(8f, 1f), Vector2.zero);

        // ---------- props ----------
        Transform props = new GameObject("Props").transform; props.SetParent(game, false);
        // Workbench (SRP table at x -1): static until the player turns zombie. Top bar 49 px from the top, legs at 14 / 140 px.
        Sprite wbS = Prop("workbench");
        float wbW = wbS.bounds.size.x, wbH = wbS.bounds.size.y;
        GameObject wb = Sprite("Workbench", props, wbS, new Vector2(-0.9f, wbH / 2), 1, 20);
        float barY = wbH / 2 - 49f / PPU;
        Box(wb, new Vector2(wbW, 10f / PPU), new Vector2(0, barY));
        float legH = barY + wbH / 2;
        Box(wb, new Vector2(10f / PPU, legH), new Vector2((14f - wbW * PPU / 2) / PPU, -wbH / 2 + legH / 2));
        Box(wb, new Vector2(10f / PPU, legH), new Vector2((140f - wbW * PPU / 2) / PPU, -wbH / 2 + legH / 2));
        Rigidbody2D wbRb = Body(wb, 6f, true);
        float benchTop = wbH / 2 + barY + 5f / PPU;

        Sprite chairS = Prop("chair");
        foreach (float cx in new float[] { -4.4f, 3.1f })
        {
            GameObject ch = Sprite("Chair", props, chairS, new Vector2(cx, chairS.bounds.size.y / 2 + 0.01f), 1, 21);
            Box(ch, new Vector2(chairS.bounds.size.x * 0.8f, chairS.bounds.size.y), Vector2.zero); Body(ch, 1.5f, false);
        }

        // Right corner: crate pyramid (SRP Boxwood stack).
        Sprite crateS = Prop("log"); // user: log crates
        const float crate = 0.9f;
        int crateN = 0;
        for (int row = 0; row < 3; row++)
            for (int c = 0; c < 3 - row; c++)
            {
                GameObject cr = Sprite("Crate" + (crateN++), props, crateS, new Vector2(8.2f + c * (crate + 0.02f) + row * crate * 0.5f, crate / 2 + row * (crate + 0.01f) + 0.01f), crate, 22);
                Box(cr, new Vector2(1f, 1f), Vector2.zero); Body(cr, 1.2f, false);
            }

        // Left corner: pumpkins (SRP balls) and the cabinet (SRP radio) with a plant on it.
        Sprite pumpS = Prop("pumpkin");
        // Pumpkins at scale 1 (user): pyramid in the left corner, one at the shelf's left end, pyramid at its right end.
        foreach (Vector2 pp in new Vector2[] {
            new Vector2(-10.48f, 0.51f), new Vector2(-9.46f, 0.51f), new Vector2(-9.97f, 1.52f),
            new Vector2(3.55f, shelfTop + 0.51f),
            new Vector2(9.0f, shelfTop + 0.51f), new Vector2(10.02f, shelfTop + 0.51f), new Vector2(9.51f, shelfTop + 1.52f) })
        {
            GameObject pu = Sprite("Pumpkin", props, pumpS, pp, 1f, 21);
            Box(pu, new Vector2(1f, 1f), Vector2.zero); Body(pu, 1.2f, false);
        }
        Sprite cabS = Prop("cabinet");
        GameObject cab = Sprite("Cabinet", props, cabS, new Vector2(-8.25f, cabS.bounds.size.y / 2 + 0.01f), 1, 21);
        Box(cab, cabS.bounds.size, Vector2.zero); Body(cab, 2f, false);
        Sprite plantS = Prop("plant");
        GameObject plant = Sprite("Plant", props, plantS, new Vector2(-8.25f, cabS.bounds.size.y + plantS.bounds.size.y / 2 + 0.02f), 1, 22);
        Box(plant, new Vector2(plantS.bounds.size.x * 0.6f, plantS.bounds.size.y), Vector2.zero); Body(plant, 1f, false);
        Sprite bedS = Prop("bed");
        GameObject bed = Sprite("Bed", props, bedS, new Vector2(5.6f, bedS.bounds.size.y / 2), 1, 20);
        float bedColH = bedS.bounds.size.y * 0.62f;
        Box(bed, new Vector2(bedS.bounds.size.x, bedColH), new Vector2(0, -bedS.bounds.size.y / 2 + bedColH / 2)); Body(bed, 4f, false);

        // ---------- potion (on the workbench, like the SRP potion on the table) ----------
        Sprite potS = Spr("Assets/01 RESOURCES/SRP/potion.png");
        GameObject potion = Sprite("Potion", props, potS, new Vector2(-0.9f, benchTop + potS.bounds.size.y / 2 + 0.01f), 1, 400);
        Box(potion, potS.bounds.size * 0.95f, Vector2.zero);
        Rigidbody2D potRb = Body(potion, 0.5f, false);
        potRb.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
        potion.layer = LayerItem;
        GameObject trig = new GameObject("Trigger"); trig.transform.SetParent(potion.transform, false);
        trig.layer = LayerItemTrigger;
        Box(trig, potS.bounds.size * 1.1f, Vector2.zero).isTrigger = true;
        Potion potLogic = trig.AddComponent<Potion>();

        // ---------- characters (SRP: monsters at x -9.5 / -3.2 and on the shelf at 9, player at 1.1) ----------
        Transform chars = new GameObject("Characters").transform; chars.SetParent(game, false);
        GameObject spawn = new GameObject("PlayerSpawn"); spawn.transform.SetParent(chars, false);
        // Spawn points sit on the surface; GameController adds the skin's footDepth (skins from LunaController).
        spawn.transform.localPosition = new Vector3(1.3f, 0f, 0);
        Vector2[] monsterAt = { new Vector2(-6.4f, 0f), new Vector2(-2.9f, 0f), new Vector2(6.1f, shelfTop) };
        Transform[] monsterSpawns = new Transform[monsterAt.Length];
        for (int i = 0; i < monsterAt.Length; i++)
        {
            GameObject ms = new GameObject("MonsterSpawn_" + (i + 1)); ms.transform.SetParent(chars, false);
            ms.transform.localPosition = monsterAt[i];
            monsterSpawns[i] = ms.transform;
        }

        // ---------- hints ----------
        Transform hints = new GameObject("Hints").transform; hints.SetParent(game, false);
        Sprite arrow = Spr(Root + "/Ui/arrow.png");
        List<FollowHint> mh = new List<FollowHint>();
        for (int i = 0; i < monsterSpawns.Length; i++)
        {
            GameObject h = Sprite("Hint_Monster_" + (i + 1), hints, arrow, monsterSpawns[i].position + Vector3.up * 3.6f, 1.1f, 700);
            SpriteRenderer hs = h.GetComponent<SpriteRenderer>(); hs.flipY = true; hs.color = new Color(1f, 0.25f, 0.2f, 1f); // monsters: red (user)
            FollowHint fh = h.AddComponent<FollowHint>(); // target = the spawned monster's head (GameController)
            mh.Add(fh);
        }
        GameObject ph = Sprite("Hint_Player", hints, arrow, spawn.transform.position + Vector3.up * 3.6f, 1.1f, 700);
        SpriteRenderer phs = ph.GetComponent<SpriteRenderer>(); phs.flipY = true; phs.color = HintColor;
        FollowHint pfh = ph.AddComponent<FollowHint>();
        // SRP Potion/Hint: arrow over the potion, visible from the start, destroyed with the potion.
        GameObject poh = Sprite("Hint", potion.transform, arrow, new Vector2(0, 1.08f), 0.9f, 700);
        SpriteRenderer pohs = poh.GetComponent<SpriteRenderer>(); pohs.flipY = true; pohs.color = HintColor;
        FollowHint pofh = poh.AddComponent<FollowHint>();
        SetRef(pofh, "target", potion.transform);
        SerializedObject poso = new SerializedObject(pofh);
        poso.FindProperty("offset").vector3Value = new Vector3(0, 1.08f, 0); poso.FindProperty("amplitude").floatValue = 0.135f;
        poso.ApplyModifiedPropertiesWithoutUndo();

        // Tutorial hand = UI (Canvas/Tut/Hand, like SRP), made in the scene with the rest of the UI.

        // ---------- managers ----------
        GameObject fxGo = new GameObject("FxManager");
        Fx fx = fxGo.AddComponent<Fx>();
        GameObject pool = new GameObject("Pool"); pool.transform.SetParent(fxGo.transform, false);
        SetRef(fx, "bloodPrefab", AssetDatabase.LoadAssetAtPath<FxSprite>(PrefabDir + "/Fx/Blood.prefab"));
        SetRef(fx, "splashPrefab", AssetDatabase.LoadAssetAtPath<FxSprite>(PrefabDir + "/Fx/Splash.prefab"));
        SetRef(fx, "smokePrefab", AssetDatabase.LoadAssetAtPath<FxSprite>(PrefabDir + "/Fx/Smoke.prefab"));
        SetRef(fx, "pool", pool.transform);

        GameObject audioGo = new GameObject("AudioManager");
        GameAudio ga = audioGo.AddComponent<GameAudio>();
        AudioSource music = new GameObject("Music").AddComponent<AudioSource>(); music.transform.SetParent(audioGo.transform, false);
        music.playOnAwake = false; music.loop = true;
        AudioSource ui = new GameObject("UI").AddComponent<AudioSource>(); ui.transform.SetParent(audioGo.transform, false); ui.playOnAwake = false;
        List<UnityEngine.Object> voices = new List<UnityEngine.Object>();
        for (int i = 0; i < 6; i++)
        {
            AudioSource v = new GameObject("Voice" + i).AddComponent<AudioSource>(); v.transform.SetParent(audioGo.transform, false); v.playOnAwake = false;
            voices.Add(v);
        }
        SetArray(ga, "voices", voices.ToArray());
        SetRef(ga, "ui", ui);
        // Sounds = SRP_V07: only the potion (ugh) and the monster death (smert_2); no hit / break / click sounds.
        SetRef(ga, "death", AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/01 RESOURCES/SRP/Audio/smert_2.mp3"));
        SetRef(ga, "potion", AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/01 RESOURCES/SRP/Audio/ugh.ogg"));

        GameObject gm = new GameObject("GameManager");
        GameController gc = gm.AddComponent<GameController>();
        SetRef(gc, "cam", cam);
        SetRef(gc, "world", chars);
        SetRef(gc, "playerSpawn", spawn.transform);
        List<UnityEngine.Object> pl = new List<UnityEngine.Object>();
        foreach (string n in PlayerOrder) pl.Add(Man(n));
        SetArray(gc, "skinPrefabs", pl.ToArray());
        SetArray(gc, "monsterSpawns", monsterSpawns);
        SetRef(gc, "potionBody", potRb);
        SetArray(gc, "looseOnZombie", new UnityEngine.Object[] { wbRb });
        SetRef(gc, "fx", fx);
        SetRef(gc, "sfx", ga);
        SetRef(gc, "potionHint", pfh);
        SetArray(gc, "monsterHints", mh.ToArray());
        SetRef(potLogic, "game", gc);

        SetRef(lc, "game", gc);

        GameObject luna = new GameObject("LunaManager");
        LunaController lun = luna.AddComponent<LunaController>();
        lun.BGM = AssetDatabase.LoadAssetAtPath<AudioClip>("Assets/01 RESOURCES/SRP/Audio/bgm.mp3"); // SRP bgm, volume 1
        SetRef(lun, "game", gc);
        SetRef(lun, "sfx", ga);
        SetRef(lun, "musicSource", music);
        SerializedObject lso = new SerializedObject(lun); lso.FindProperty("musicVolume").floatValue = 1f; lso.ApplyModifiedPropertiesWithoutUndo();

        Directory.CreateDirectory("Assets/Scenes");
        EditorSceneManager.SaveScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene(), ScenePath);
        SSPWinterBuilder.Apply(); // winter look (LunaController "Custom Winter")
        EditorSceneManager.SaveScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene(), ScenePath);
        List<EditorBuildSettingsScene> list = new List<EditorBuildSettingsScene>();
        list.Add(new EditorBuildSettingsScene(ScenePath, true));
        EditorBuildSettings.scenes = list.ToArray();
        Debug.Log("[SSPRoomBuilder] world built: " + ScenePath);
    }
}

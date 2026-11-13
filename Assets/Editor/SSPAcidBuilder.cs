using System;
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

// Tools/SSP/Build Acid Playable: imports the SSP part PNGs (one texture per part, sliced into 16 px tiles + a "full"
// sprite), builds one ragdoll prefab per outfit, the FX prefabs and the AcidGame scene.
public static class SSPAcidBuilder
{
    const string Root = "Assets/01 RESOURCES/SSP";
    const string PartsDir = Root + "/Parts";
    const string EnvDir = Root + "/Env";
    const string RefDir = Root + "/Ref"; // assets taken from the reference ad (SSP has none of these)
    const string JsonPath = Root + "/ssp_parts.json";
    const string PrefabDir = "Assets/02 PREFABS";
    const string ScenePath = "Assets/Scenes/AcidGame.unity";
    const float PPU = 100f;

    public const int LayerMan = 8, LayerStick = 9, LayerWorld = 10, LayerTank = 11;

    [Serializable] class TileData { public string s; public int rx, ry, rw, rh; public float x, y; }
    [Serializable] class PartData { public string name; public int w, h; public float pivotX, pivotY; public TileData[] tiles; public int coreW; }
    // coreW (bodies, px): width of the torso when the sprite is wider (snow owl wings); 0 = whole sprite.
    static float CoreW(PartData d) { return (d.coreW > 0 ? d.coreW : d.w) / PPU; }
    [Serializable] class OutfitData { public string name, head, body, arm, leg, armR; public int headUp; }
    // headUp (px): raises the head on the neck for skins whose chin sat too low vs the SSP skin icons (buttonitem-sheet0).
    [Serializable] class Db { public float ppu; public PartData[] parts; public OutfitData[] outfits; }

    static Db LoadDb() { return JsonUtility.FromJson<Db>(File.ReadAllText(JsonPath)); }
    static PartData Find(Db db, string n) { foreach (PartData p in db.parts) if (p.name == n) return p; throw new Exception("part " + n); }

    [MenuItem("Tools/SSP/Build Acid Playable")]
    public static void BuildAll()
    {
        Db db = LoadDb();
        PlayerSettings.colorSpace = ColorSpace.Gamma; // Luna renders in Gamma
        SetupLayers();
        ImportSprites(db);
        ImportRef();
        AcidGhost ghost; AcidHit hit;
        BuildFxPrefabs(out ghost, out hit);
        BuildTankPrefabs();
        List<AcidMan> men = BuildMen(db);
        BuildScene(men, ghost, hit);
        Debug.Log("[SSPAcidBuilder] done: " + men.Count + " men");
    }

    // ---------- layers ----------
    static void SetupLayers()
    {
        SerializedObject tm = new SerializedObject(AssetDatabase.LoadAllAssetsAtPath("ProjectSettings/TagManager.asset")[0]);
        SerializedProperty layers = tm.FindProperty("layers");
        layers.GetArrayElementAtIndex(LayerMan).stringValue = "Man";
        layers.GetArrayElementAtIndex(LayerStick).stringValue = "Stick";
        layers.GetArrayElementAtIndex(LayerWorld).stringValue = "World";
        layers.GetArrayElementAtIndex(LayerTank).stringValue = "Tank";
        tm.ApplyModifiedProperties();
        // Reference: the tank (category 1, mask 2) never touches the stick.
        Physics2D.IgnoreLayerCollision(LayerStick, LayerTank, true);
        Physics2D.IgnoreLayerCollision(LayerMan, LayerMan, true);
        Physics2D.IgnoreLayerCollision(LayerStick, LayerWorld, false);
    }

    // ---------- sprites ----------
    static void BaseImport(TextureImporter ti)
    {
        ti.textureType = TextureImporterType.Sprite;
        ti.spritePixelsPerUnit = PPU;
        ti.filterMode = FilterMode.Point;
        ti.mipmapEnabled = false;
        ti.textureCompression = TextureImporterCompression.Uncompressed;
        ti.alphaIsTransparency = true;
        ti.wrapMode = TextureWrapMode.Clamp;
    }

#pragma warning disable 618
    static void ImportSprites(Db db)
    {
        foreach (PartData p in db.parts)
        {
            string path = PartsDir + "/" + p.name + ".png";
            TextureImporter ti = (TextureImporter)AssetImporter.GetAtPath(path);
            BaseImport(ti);
            ti.spriteImportMode = SpriteImportMode.Multiple;
            List<SpriteMetaData> list = new List<SpriteMetaData>();
            foreach (TileData t in p.tiles)
            {
                SpriteMetaData m = new SpriteMetaData();
                m.name = t.s; m.rect = new Rect(t.rx, t.ry, t.rw, t.rh);
                m.alignment = (int)SpriteAlignment.Center; m.pivot = new Vector2(0.5f, 0.5f);
                list.Add(m);
            }
            SpriteMetaData full = new SpriteMetaData();
            full.name = p.name + "_full"; full.rect = new Rect(0, 0, p.w, p.h);
            full.alignment = (int)SpriteAlignment.Custom; full.pivot = new Vector2(p.pivotX / p.w, 1f - p.pivotY / p.h);
            list.Add(full);
            ti.spritesheet = list.ToArray();
            ti.SaveAndReimport();
        }
        foreach (string f in Directory.GetFiles(EnvDir, "*.png"))
        {
            string path = f.Replace('\\', '/');
            TextureImporter ti = (TextureImporter)AssetImporter.GetAtPath(path);
            BaseImport(ti);
            ti.spriteImportMode = SpriteImportMode.Single;
            TextureImporterSettings s = new TextureImporterSettings();
            ti.ReadTextureSettings(s);
            s.spriteAlignment = (int)SpriteAlignment.Center;
            ti.SetTextureSettings(s);
            ti.SaveAndReimport();
        }
    }

    static void ImportRef()
    {
        foreach (string f in Directory.GetFiles(RefDir + "/Sprites", "*.png"))
        {
            string path = f.Replace('\\', '/');
            string n =Path.GetFileNameWithoutExtension(path);
            TextureImporter ti = (TextureImporter)AssetImporter.GetAtPath(path);
            BaseImport(ti);
            ti.spriteImportMode = SpriteImportMode.Single;
            if (n == "effect" || n == "black" || n == "acid" || n == "hint" || n == "title_noline" || n == "fail_title" || n == "again" || n == "start" || n == "balka" || n == "tank") ti.filterMode = FilterMode.Bilinear;
            TextureImporterSettings s = new TextureImporterSettings();
            ti.ReadTextureSettings(s);
            if (n == "finger") { s.spriteAlignment = (int)SpriteAlignment.Custom; s.spritePivot = new Vector2(0.36f, 0.98f); }
            else s.spriteAlignment = (int)SpriteAlignment.Center;
            ti.SetTextureSettings(s);
            ti.SaveAndReimport();
        }
        // Luna exports compressed-in-memory clips silent: decompress on load.
        foreach (string f in Directory.GetFiles(RefDir + "/Audio", "*.*", SearchOption.AllDirectories))
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

    static Sprite Ref(string n) { return AssetDatabase.LoadAssetAtPath<Sprite>(RefDir + "/Sprites/" + n + ".png"); }
    // Quiet reference clips have a louder copy in Audio/Boost (chost +7.5 dB, click +9 dB, acid +7 dB, soft-limited WAV;
    // Luna re-encodes audio at build time, so WAV sources do not grow the playable). Use it when present.
    static AudioClip Clip(string n)
    {
        AudioClip boost = AssetDatabase.LoadAssetAtPath<AudioClip>(RefDir + "/Audio/Boost/" + n + ".wav");
        return boost ? boost : AssetDatabase.LoadAssetAtPath<AudioClip>(RefDir + "/Audio/" + n + ".mp3");
    }
#pragma warning restore 618

    static Sprite PartSprite(string part, string sprite)
    {
        foreach (UnityEngine.Object o in AssetDatabase.LoadAllAssetsAtPath(PartsDir + "/" + part + ".png"))
        {
            Sprite s = o as Sprite;
            if (s && s.name == sprite) return s;
        }
        throw new Exception("sprite " + sprite);
    }

    static Sprite Env(string n) { return AssetDatabase.LoadAssetAtPath<Sprite>(EnvDir + "/" + n + ".png"); }

    // ---------- FX ----------
    const string UiDir = "Assets/01 RESOURCES/SSP/Ui";
    static Sprite Ui(string n) { return AssetDatabase.LoadAssetAtPath<Sprite>(UiDir + "/" + n + ".png"); }

    // "+1" popup for a sword kill (Ui/plus1.png, pre-rendered FFFFORWA text; scale 0.6 = final size).
    static SpriteRenderer BuildPlusOnePrefab()
    {
        GameObject g = new GameObject("PlusOne");
        SpriteRenderer sr = g.AddComponent<SpriteRenderer>(); sr.sprite = Ui("plus1"); sr.sortingOrder = 710;
        g.transform.localScale = new Vector3(0.6f, 0.6f, 1f);
        SpriteRenderer saved = PrefabUtility.SaveAsPrefabAsset(g, PrefabDir + "/Fx/PlusOne.prefab").GetComponent<SpriteRenderer>();
        UnityEngine.Object.DestroyImmediate(g);
        return saved;
    }

    // "KILLED: N" counter under the hint banner: label + 4 digit slots, laid out by AcidKillCounter.
    static AcidKillCounter BuildKillCounter(Transform canvas)
    {
        GameObject go = new GameObject("KillCounter", typeof(RectTransform));
        RectTransform root = (RectTransform)go.transform; root.SetParent(canvas, false);
        root.anchorMin = root.anchorMax = new Vector2(0.5f, 1f); root.anchoredPosition = new Vector2(0, -310); root.sizeDelta = new Vector2(600, 80);
        RectTransform label = UiImage(root, "Label", Ui("killed"), Ui("killed").rect.size, Vector2.zero, new Vector2(0.5f, 0.5f));
        AcidKillCounter kc = go.AddComponent<AcidKillCounter>();
        SerializedObject so = new SerializedObject(kc);
        so.FindProperty("root").objectReferenceValue = root;
        so.FindProperty("label").objectReferenceValue = label;
        SerializedProperty dp = so.FindProperty("digits"); dp.arraySize = 4;
        for (int i = 0; i < 4; i++)
            dp.GetArrayElementAtIndex(i).objectReferenceValue = UiImage(root, "Digit" + i, Ui("d0"), Ui("d0").rect.size, Vector2.zero, new Vector2(0.5f, 0.5f)).GetComponent<Image>();
        SerializedProperty ds = so.FindProperty("digitSprites"); ds.arraySize = 10;
        for (int i = 0; i < 10; i++) ds.GetArrayElementAtIndex(i).objectReferenceValue = Ui("d" + i);
        so.ApplyModifiedPropertiesWithoutUndo();
        return kc;
    }

    // One blood drop for the sword-kill burst: white square sprite, tinted by AcidFx.
    static SpriteRenderer BuildBloodPrefab()
    {
        GameObject b = new GameObject("Blood");
        SpriteRenderer sr = b.AddComponent<SpriteRenderer>(); sr.sprite = Env("white"); sr.sortingOrder = 470;
        sr.color = new Color(0.7f, 0.05f, 0.04f, 1f);
        SpriteRenderer saved = PrefabUtility.SaveAsPrefabAsset(b, PrefabDir + "/Fx/Blood.prefab").GetComponent<SpriteRenderer>();
        UnityEngine.Object.DestroyImmediate(b);
        return saved;
    }

    static void BuildFxPrefabs(out AcidGhost ghost, out AcidHit hit)
    {
        Directory.CreateDirectory(PrefabDir + "/Fx");
        GameObject g = new GameObject("Ghost");
        SpriteRenderer gsr = g.AddComponent<SpriteRenderer>();
        gsr.color = new Color(0.85f, 0.95f, 1f, 0f); gsr.sortingOrder = 700;
        AcidGhost ag = g.AddComponent<AcidGhost>(); ag.sr = gsr;
        ghost = PrefabUtility.SaveAsPrefabAsset(g, PrefabDir + "/Fx/Ghost.prefab").GetComponent<AcidGhost>();
        UnityEngine.Object.DestroyImmediate(g);

        AssetDatabase.DeleteAsset(PrefabDir + "/Fx/Ring.prefab");
        GameObject r = new GameObject("Hit");
        GameObject dark = new GameObject("Dark"); dark.transform.SetParent(r.transform, false);
        SpriteRenderer dsr = dark.AddComponent<SpriteRenderer>(); dsr.sprite = Ref("black"); dsr.sortingOrder = 650; dsr.color = new Color(1, 1, 1, 0);
        GameObject glow = new GameObject("Glow"); glow.transform.SetParent(r.transform, false);
        SpriteRenderer gsr2 = glow.AddComponent<SpriteRenderer>(); gsr2.sprite = Ref("effect"); gsr2.sortingOrder = 651; gsr2.color = new Color(1, 1, 1, 0);
        AcidHit ah = r.AddComponent<AcidHit>(); ah.dark = dsr; ah.glow = gsr2;
        hit = PrefabUtility.SaveAsPrefabAsset(r, PrefabDir + "/Fx/Hit.prefab").GetComponent<AcidHit>();
        UnityEngine.Object.DestroyImmediate(r);
    }

    // ---------- time-up tank (reference "btr" + 598 "rga_place" rust spots) ----------
    static AcidTank lastTank;
    // User 2026-11-12: tank at 0.8 of the reference size (5.05 x 1.95 -> 4.04 x 1.56).
    const float TankScale = 0.8f;

    // Re-imports the part sprites and rebuilds only the Man_* prefabs (scene untouched; update AcidGame's list by hand).
    [MenuItem("Tools/SSP/Build Men Prefabs")]
    public static void BuildMenPrefabs()
    {
        SetupLayers();
        Db db = LoadDb();
        AssetDatabase.Refresh();
        ImportSprites(db);
        BuildMen(db);
        AssetDatabase.SaveAssets();
    }

    [MenuItem("Tools/SSP/Build Tank Prefab")]
    public static void BuildTankPrefabs()
    {
        SetupLayers();
        ImportRef();
        Directory.CreateDirectory(RefDir + "/Materials");
        string matPath = RefDir + "/Materials/TankClip.mat";
        Material mat = AssetDatabase.LoadAssetAtPath<Material>(matPath);
        if (!mat) { mat = new Material(Shader.Find("SSP/ClipBelow")); AssetDatabase.CreateAsset(mat, matPath); }
        mat.SetFloat("_ClipY", 3.6f); // = drawn acid top
        EditorUtility.SetDirty(mat);
        AssetDatabase.DeleteAsset(PrefabDir + "/Fx/Rust.prefab");

        // Reference sizes: tank 2326x898 px over a 2394 px pool -> 5.05 x 1.95 here; collider leaves out the top
        // 200 px (turret) like the reference's anchor offset.
        Sprite tankSprite = Ref("tank");
        float w = tankSprite.bounds.size.x, h = tankSprite.bounds.size.y;
        float cut = h * 200f / 898f;
        GameObject t = new GameObject("Tank");
        SpriteRenderer tsr = t.AddComponent<SpriteRenderer>(); tsr.sprite = tankSprite; tsr.sortingOrder = 480; tsr.sharedMaterial = mat;
        Rigidbody2D rb = t.AddComponent<Rigidbody2D>(); rb.mass = 30f; rb.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
        BoxCollider2D bc = t.AddComponent<BoxCollider2D>(); bc.size = new Vector2(w, h - cut); bc.offset = new Vector2(0, -cut / 2);
        AcidTank at = t.AddComponent<AcidTank>(); at.body = rb; at.spriteBottom = -h / 2;

        string json = File.ReadAllText(RefDir + "/tank_rust.json");
        List<Vector2> pts = ParseRust(json);
        Sprite rustSprite = Ref("rust");
        at.rustScale = (74f * 5.05f / 2326f) / rustSprite.bounds.size.x;
        GameObject rustRoot = new GameObject("Rust"); rustRoot.transform.SetParent(t.transform, false);
        System.Random rnd = new System.Random(7);
        SpriteRenderer[] rust = new SpriteRenderer[pts.Count];
        for (int i = 0; i < pts.Count; i++)
        {
            GameObject r = new GameObject("rga" + i);
            r.transform.SetParent(rustRoot.transform, false);
            r.transform.localPosition = pts[i];
            r.transform.localRotation = Quaternion.Euler(0, 0, (float)(rnd.NextDouble() * 360.0));
            r.transform.localScale = Vector3.zero;
            SpriteRenderer sr = r.AddComponent<SpriteRenderer>(); sr.sprite = rustSprite; sr.sortingOrder = 502; sr.enabled = false; // above the acid front (501)
            rust[i] = sr;
        }
        at.rust = rust;
        SetLayer(t, LayerTank);
        t.transform.localScale = new Vector3(TankScale, TankScale, 1f);
        lastTank = PrefabUtility.SaveAsPrefabAsset(t, PrefabDir + "/Tank.prefab").GetComponent<AcidTank>();
        UnityEngine.Object.DestroyImmediate(t);
        AssetDatabase.SaveAssets();
    }

    // tank_rust.json: {"scale":k,"points":[[x,y],...]} (JsonUtility cannot read nested arrays).
    static List<Vector2> ParseRust(string json)
    {
        List<Vector2> list = new List<Vector2>();
        int a = json.IndexOf("\"points\"");
        string body = json.Substring(json.IndexOf('[', a) + 1);
        foreach (string part in body.Split(new string[] { "]" }, StringSplitOptions.RemoveEmptyEntries))
        {
            string p = part.Trim().TrimStart(',').Trim().TrimStart('[');
            if (p.Length == 0) continue;
            string[] xy = p.Split(',');
            if (xy.Length < 2) continue;
            list.Add(new Vector2(float.Parse(xy[0], System.Globalization.CultureInfo.InvariantCulture), float.Parse(xy[1], System.Globalization.CultureInfo.InvariantCulture)));
        }
        return list;
    }

    // ---------- men ----------
    static List<AcidMan> BuildMen(Db db)
    {
        Directory.CreateDirectory(PrefabDir + "/Men");
        List<AcidMan> result = new List<AcidMan>();
        foreach (OutfitData o in db.outfits)
        {
            PartData head = Find(db, o.head), body = Find(db, o.body), arm = Find(db, o.arm), leg = Find(db, o.leg);
            float bw = CoreW(body), bh = body.h / PPU, aw = arm.w / PPU, lw = leg.w / PPU;

            GameObject root = new GameObject("Man_" + o.name);
            AcidMan man = root.AddComponent<AcidMan>();
            man.ghostSprite = PartSprite(head.name, head.name + "_full");

            // Rig laid out like the RSNM rigs (Item-TheMan-Rig): Torso, Head, LeftArm, RightArm, LeftLeg, RightLeg, each a
            // body whose transform sits at its sprite centre; hinges at the top of the limbs / bottom of the head; masses
            // 4 / 0.7 / 0.4 / 1.2, damping 0.2 / 2, limits head 25, arms 110, legs 60. Draw order (user, front to back):
            // LeftArm 5 > Head 4 > Torso 3 > LeftLeg 2 > RightLeg 1 > RightArm 0. LeftArm
            // is on screen left. Parts stay split into 16 px tiles for the acid.
            PartData armR = string.IsNullOrEmpty(o.armR) ? arm : Find(db, o.armR);
            // Shoulders (RSNM / SSP store art): arm centre just inside the torso edge, so the arm overlaps the torso side.
            float ax = bw / 2 - 0.02f, ay = bh / 2 - 0.05f;
            float lx = Mathf.Max(0.04f, bw / 2 - lw / 2 - 0.03f), ly = -bh / 2 + 0.06f; // hips
            AcidMan.Part pTorso = MakePart(root, "Torso", body, Vector2.zero, Vector2.zero, 4f, 3, null, 0);
            Rigidbody2D torsoRb = pTorso.body;
            AcidMan.Part pHead = MakePart(root, "Head", head, new Vector2(0, bh / 2 - 0.04f + o.headUp / PPU), new Vector2(0, -0.04f), 0.7f, 4, torsoRb, 25);
            AcidMan.Part pArmL = MakePart(root, "LeftArm", arm, new Vector2(-ax, ay), new Vector2(0, 0.03f), 0.4f, 5, torsoRb, 110);
            AcidMan.Part pArmR = MakePart(root, "RightArm", armR, new Vector2(ax, ay), new Vector2(0, 0.03f), 0.4f, 0, torsoRb, 110);
            AcidMan.Part pLegL = MakePart(root, "LeftLeg", leg, new Vector2(-lx, ly), new Vector2(0, 0.03f), 1.2f, 2, torsoRb, 60);
            AcidMan.Part pLegR = MakePart(root, "RightLeg", leg, new Vector2(lx, ly), new Vector2(0, 0.03f), 1.2f, 1, torsoRb, 60);
            float hh = head.h / PPU, lh = leg.h / PPU;
            pHead.forcePoint = new Vector2(0, Mathf.Min(hh - 0.04f, 0.5f) - (hh / 2 - 0.04f));
            pLegL.forcePoint = new Vector2(0, -lh / 2);
            pLegR.forcePoint = new Vector2(0, -lh / 2);

            man.parts = new AcidMan.Part[] { pTorso, pHead, pArmL, pArmR, pLegL, pLegR };
            SetLayer(root, LayerMan);
            AcidMan saved = PrefabUtility.SaveAsPrefabAsset(root, PrefabDir + "/Men/Man_" + o.name + ".prefab").GetComponent<AcidMan>();
            UnityEngine.Object.DestroyImmediate(root);
            result.Add(saved);
        }
        return result;
    }

    // joint: the point (torso space) the part hangs from; edge: that point as an inset from the part's top edge (limbs,
    // y = inset) or bottom edge (head, y = -inset). The part's transform sits at its sprite centre, like the RSNM rigs.
    static AcidMan.Part MakePart(GameObject root, string name, PartData d, Vector2 joint, Vector2 edge, float mass, int sortOffset,
        Rigidbody2D connectTo, float limit)
    {
        float w = d.w / PPU, h = d.h / PPU, px = d.pivotX / PPU, py = d.pivotY / PPU;
        bool isHead = name == "Head";
        // Anchor in part space (centre origin): top edge - inset for limbs, bottom edge + inset for the head.
        Vector2 anchor = connectTo == null ? Vector2.zero
            : isHead ? new Vector2(0, -h / 2 - edge.y) : new Vector2(0, h / 2 - edge.y);
        GameObject go = new GameObject(name);
        go.transform.SetParent(root.transform, false);
        go.transform.localPosition = joint - anchor;
        Rigidbody2D rb = go.AddComponent<Rigidbody2D>();
        rb.mass = mass; rb.linearDamping = 0.2f; rb.angularDamping = 2f; rb.gravityScale = 1f;
        BoxCollider2D col = go.AddComponent<BoxCollider2D>();
        if (isHead)
        {
            // Face only (antlers / ears / horns do not collide).
            float cw = Mathf.Min(w, 0.6f), ch = Mathf.Min(h, 0.62f);
            col.size = new Vector2(cw, ch);
            col.offset = new Vector2(0, -h / 2 + ch / 2);
        }
        else
        {
            col.size = new Vector2(CoreW(d), h);
            col.offset = Vector2.zero;
        }
        // Tile offsets in the JSON are from the sprite pivot; move them to the sprite centre.
        Vector2 c = new Vector2(w / 2 - px, py - h / 2);
        List<SpriteRenderer> tiles = new List<SpriteRenderer>();
        foreach (TileData t in d.tiles)
        {
            GameObject tg = new GameObject(t.s);
            tg.transform.SetParent(go.transform, false);
            tg.transform.localPosition = new Vector2(t.x, t.y) - c;
            SpriteRenderer sr = tg.AddComponent<SpriteRenderer>();
            sr.sprite = PartSprite(d.name, t.s);
            tiles.Add(sr);
        }
        AcidMan.Part part = new AcidMan.Part();
        part.body = rb; part.col = col; part.tiles = tiles.ToArray(); part.sortOffset = sortOffset;
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

    // Private [SerializeField] references (the game never looks objects up at runtime).
    static void SetRef(UnityEngine.Object target, string field, UnityEngine.Object value)
    {
        SerializedObject so = new SerializedObject(target);
        so.FindProperty(field).objectReferenceValue = value;
        so.ApplyModifiedPropertiesWithoutUndo();
    }

    static void SetLayer(GameObject go, int layer)
    {
        go.layer = layer;
        foreach (Transform c in go.transform) SetLayer(c.gameObject, layer);
    }

    // ---------- scene ----------
    static GameObject Sprite(string name, Transform parent, Sprite s, Vector2 pos, Vector2 size, Color c, int order)
    {
        GameObject go = new GameObject(name);
        go.transform.SetParent(parent, false);
        go.transform.localPosition = pos;
        SpriteRenderer sr = go.AddComponent<SpriteRenderer>();
        sr.sprite = s; sr.color = c; sr.sortingOrder = order;
        Vector2 ss = s.bounds.size;
        go.transform.localScale = new Vector3(size.x / ss.x, size.y / ss.y, 1);
        return go;
    }

    static void BuildScene(List<AcidMan> men, AcidGhost ghost, AcidHit hit)
    {
        Scene scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);

        const float poolHalf = 2.6f, acidTop = 3.6f, wallBlock = 0.64f; // acid drawn top (user 2026-11-12: 1.6 -> 2.4 -> 3.6)
        const int wallRows = 50; // walls run far above the view (user 2026-11-12, was 8)
        float wallTop = wallRows * wallBlock;
        Color grey = new Color(0.5f, 0.5f, 0.5f, 1f);

        // Camera
        GameObject camGo = new GameObject("Main Camera");
        camGo.tag = "MainCamera";
        Camera cam = camGo.AddComponent<Camera>();
        cam.orthographic = true; cam.clearFlags = CameraClearFlags.SolidColor; cam.backgroundColor = grey;
        camGo.transform.position = new Vector3(0, 4.5f, -10);
        camGo.AddComponent<AudioListener>();
        CameraFit fit = camGo.AddComponent<CameraFit>();
        // Two fixed views (user 2026-11-12): land when width > 1.5 * height, por otherwise.
        fit.por = new CameraFit.View(); fit.por.position = new Vector3(0f, 6.1f, -10f); fit.por.size = 7.1f;
        fit.land = new CameraFit.View(); fit.land.position = new Vector3(0f, 4.5f, -10f); fit.land.size = 5.5f;
        fit.landAspect = 1.5f;
        SetRef(fit, "cam", cam);

        // World
        Transform world = new GameObject("World").transform;
        Transform bg = new GameObject("Background").transform; bg.SetParent(world, false);
        for (int x = -6; x < 6; x++)
            for (int y = 0; y < 6; y++)
                Sprite("bg", bg, Env("bg"), new Vector2(x * 2.5f + 1.25f, y * 2.5f + 1.25f), new Vector2(2.5f, 2.5f), Color.white, -100);
        Transform ground = new GameObject("Ground").transform; ground.SetParent(world, false);
        Sprite("Fill", ground, Env("white"), new Vector2(0, -6f), new Vector2(40f, 12f), new Color(0.2f, 0.2f, 0.2f, 1f), -60);
        for (int x = -22; x < 22; x++)
            Sprite("floor", ground, Env("floor"), new Vector2(x * 0.64f + 0.32f, -0.32f), new Vector2(0.64f, 0.64f), Color.white, -50);

        Transform walls = new GameObject("Walls").transform; walls.SetParent(world, false);
        for (int side = -1; side <= 1; side += 2)
        {
            GameObject w = new GameObject(side < 0 ? "WallLeft" : "WallRight");
            w.transform.SetParent(walls, false);
            float wx = side * (poolHalf + wallBlock / 2);
            w.transform.localPosition = new Vector2(wx, 0);
            for (int i = 0; i < wallRows; i++)
                Sprite("block", w.transform, Env("wall"), new Vector2(0, i * wallBlock + wallBlock / 2), new Vector2(wallBlock, wallBlock), Color.white, 520);
            BoxCollider2D bc = w.AddComponent<BoxCollider2D>();
            bc.size = new Vector2(wallBlock, wallTop + 2f); bc.offset = new Vector2(0, (wallTop - 2f) / 2);
            w.layer = LayerWorld;
        }
        GameObject poolFloor = new GameObject("PoolFloor");
        poolFloor.transform.SetParent(walls, false);
        BoxCollider2D pf = poolFloor.AddComponent<BoxCollider2D>();
        pf.size = new Vector2(poolHalf * 2 + 2f, 1f); pf.offset = new Vector2(0, -0.5f);
        poolFloor.layer = LayerWorld;

        Transform acid = new GameObject("Acid").transform; acid.SetParent(world, false);
        // Two layers like the reference (kislota 0.85 + kislota_up 0.5 with a displacement filter): SSP/AcidWave shader.
        GameObject liquid = Sprite("Liquid", acid, Ref("acid"), new Vector2(0, acidTop / 2), new Vector2(poolHalf * 2, acidTop), new Color(1f, 1f, 1f, 0.85f), 499);
        liquid.GetComponent<SpriteRenderer>().sharedMaterial = AssetDatabase.LoadAssetAtPath<Material>(RefDir + "/Materials/AcidWaveBack.mat");
        SetRef(liquid.AddComponent<AcidWave>(), "rend", liquid.GetComponent<SpriteRenderer>());
        GameObject liquidTop = Sprite("LiquidTop", acid, Ref("acid"), new Vector2(0, acidTop / 2), new Vector2(poolHalf * 2, acidTop), new Color(1f, 1f, 1f, 0.5f), 501);
        liquidTop.GetComponent<SpriteRenderer>().sharedMaterial = AssetDatabase.LoadAssetAtPath<Material>(RefDir + "/Materials/AcidWaveFront.mat");
        SetRef(liquidTop.AddComponent<AcidWave>(), "rend", liquidTop.GetComponent<SpriteRenderer>());

        // Plank
        GameObject plank = new GameObject("Plank");
        plank.transform.SetParent(world, false);
        plank.transform.localPosition = new Vector2(0, acidTop + 0.2f);
        Rigidbody2D prb = plank.AddComponent<Rigidbody2D>(); prb.bodyType = RigidbodyType2D.Kinematic;
        // Reference bar (msg_balka 2394x72 over a 2394 px pool): one sprite across the pool, thickness to scale.
        float barH = poolHalf * 2 * 72f / 2394f;
        BoxCollider2D pbc = plank.AddComponent<BoxCollider2D>(); pbc.size = new Vector2(poolHalf * 2 - 0.04f, barH);
        Sprite("Bar", plank.transform, Ref("balka"), Vector2.zero, new Vector2(poolHalf * 2, barH), Color.white, 450);
        plank.layer = LayerWorld;

        // Stick
        // Sword (SSP shared-0-sheet3), drawn 1.5x so it is as long as the reference stick.
        GameObject stickGo = Sprite("Sword", null, Env("sword"), new Vector2(1.9f, acidTop + 1.2f), new Vector2(0.51f, 1.41f), Color.white, 600);
        Rigidbody2D srb = stickGo.AddComponent<Rigidbody2D>();
        srb.mass = 1f; srb.angularDamping = 0.05f; srb.collisionDetectionMode = CollisionDetectionMode2D.Continuous; srb.interpolation = RigidbodyInterpolation2D.Interpolate;
        BoxCollider2D sbc = stickGo.AddComponent<BoxCollider2D>(); sbc.size = new Vector2(0.12f, 0.92f);
        stickGo.layer = LayerStick;
        AcidStick stick = stickGo.AddComponent<AcidStick>(); stick.body = srb; stick.cam = cam; SetRef(stick, "col", sbc);

        // Hand (tutorial)
        GameObject handGo = Sprite("TutorialHand", null, Ref("finger"), Vector2.zero, new Vector2(0.72f, 0.88f), Color.white, 800);
        GameObject handRoot = new GameObject("Tutorial");
        handGo.transform.SetParent(handRoot.transform, false);

        // Men / FX roots
        GameObject menRoot = new GameObject("Men");
        GameObject fxGo = new GameObject("Fx");
        AcidFx fx = fxGo.AddComponent<AcidFx>(); fx.ghostPrefab = ghost; fx.hitPrefab = hit; fx.root = fxGo.transform;
        fx.bloodPrefab = BuildBloodPrefab();
        fx.plusOnePrefab = BuildPlusOnePrefab();

        // UI
        GameObject canvasGo = new GameObject("Canvas");
        Canvas canvas = canvasGo.AddComponent<Canvas>(); canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        CanvasScaler cs = canvasGo.AddComponent<CanvasScaler>();
        cs.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize; cs.referenceResolution = new Vector2(1080, 1920); cs.matchWidthOrHeight = 0.5f;
        canvasGo.AddComponent<GraphicRaycaster>();
        Button win = Panel(canvasGo.transform, "WinPanel", new Color(0, 0, 0, 0.55f));
        Button fail = Panel(canvasGo.transform, "FailPanel", new Color(0, 0, 0, 0.5f));
        BuildFailScreen(fail);
        Button end = Panel(canvasGo.transform, "EndUI", new Color(0, 0, 0, 0f)); // transparent full-screen CTA (user)
        AcidKillCounter killCounter = BuildKillCounter(canvasGo.transform);
        killCounter.transform.SetSiblingIndex(0);
        GameObject es = new GameObject("EventSystem");
        es.AddComponent<EventSystem>(); es.AddComponent<StandaloneInputModule>();

        // Game
        GameObject gameGo = new GameObject("AcidGame");
        AcidGame game = gameGo.AddComponent<AcidGame>();
        game.manPrefabs = men.ToArray();
        game.menRoot = menRoot.transform;
        game.stick = stick; game.fx = fx; game.plank = prb;
        // Gameplay acid line under the wavy drawn top (user 2026-11-12: 0.2 under the drawn top).
        game.acidTop = acidTop - 0.2f; game.acidBottom = 0; game.poolHalfWidth = poolHalf;
        game.plankStartY = acidTop + 0.2f; game.plankStep = 0.12f; game.plankMinY = acidTop - 1.8f; /* sinks 0.6 deeper (user 2026-11-12) */ game.plankFinishY = acidTop - 1.4f;
        game.plankHalfHeight = poolHalf * 72f / 2394f; // half the reference bar thickness
        game.spawnY = 9f; game.spawnHalfWidth = 2.1f;
        game.hand = handGo.transform; game.handRenderer = handGo.GetComponent<SpriteRenderer>();
        game.winPanel = win.gameObject; game.failPanel = fail.gameObject;
        game.tankPrefab = lastTank;
        SetRef(game, "killCounter", killCounter);

        // Audio
        GameObject audioGo = new GameObject("Audio");
        AcidAudio aa = audioGo.AddComponent<AcidAudio>();
        aa.sfx = audioGo.AddComponent<AudioSource>(); aa.sfx.playOnAwake = false;
        GameObject acidLoopGo = new GameObject("AcidLoop"); acidLoopGo.transform.SetParent(audioGo.transform, false);
        aa.acidLoop = acidLoopGo.AddComponent<AudioSource>(); aa.acidLoop.playOnAwake = false; aa.acidLoop.loop = true; aa.acidLoop.clip = Clip("acid");
        aa.hit = Clip("atack"); aa.ghost = Clip("chost"); aa.pop = Clip("pop"); aa.click = Clip("click");
        // SFX voice pool: 6 AudioSources on a child, wired into AcidAudio.voices.
        GameObject voicesGo = new GameObject("Voices"); voicesGo.transform.SetParent(audioGo.transform, false);
        SerializedObject aso = new SerializedObject(aa);
        SerializedProperty vp = aso.FindProperty("voices");
        vp.arraySize = 6;
        for (int i = 0; i < 6; i++)
        {
            AudioSource v = voicesGo.AddComponent<AudioSource>(); v.playOnAwake = false; v.loop = false;
            vp.GetArrayElementAtIndex(i).objectReferenceValue = v;
        }
        aso.ApplyModifiedPropertiesWithoutUndo();
        SetRef(game, "sfx", aa);
        SetRef(fx, "game", game);
        BuildIntro(canvasGo.transform, game, aa, killCounter.gameObject); // no in-game hint banner (user 2026-11-12)

        // Luna
        GameObject lunaGo = new GameObject("LunaController");
        LunaController luna = lunaGo.AddComponent<LunaController>();
        GameObject music = new GameObject("Music"); music.transform.SetParent(lunaGo.transform, false);
        AudioSource src = music.AddComponent<AudioSource>(); src.playOnAwake = false; src.loop = true;
        SerializedObject so = new SerializedObject(luna);
        so.FindProperty("game").objectReferenceValue = game;
        so.FindProperty("musicSource").objectReferenceValue = src;
        so.FindProperty("sfx").objectReferenceValue = aa;
        so.FindProperty("customBG").objectReferenceValue = BuildCustomBG(cam);
        so.FindProperty("BGM").objectReferenceValue = Clip("music");
        so.FindProperty("endUI").objectReferenceValue = end.gameObject;
        SerializedProperty cta = so.FindProperty("CTA");
        cta.arraySize = 3;
        cta.GetArrayElementAtIndex(0).objectReferenceValue = win;
        cta.GetArrayElementAtIndex(1).objectReferenceValue = fail;
        cta.GetArrayElementAtIndex(2).objectReferenceValue = end;
        so.ApplyModifiedPropertiesWithoutUndo();

        EditorSceneManager.SaveScene(scene, ScenePath);
        List<EditorBuildSettingsScene> list = new List<EditorBuildSettingsScene>();
        list.Add(new EditorBuildSettingsScene(ScenePath, true));
        EditorBuildSettings.scenes = list.ToArray();
    }

    // Fail screen like the reference AVK_FAIL (640x1136 design, centre 320,568): FAIL title, TRY AGAIN box, pulsing
    // finger on the box, under a Content frame (1080x1920) that AcidFailPanel scales to the screen height.
    static void BuildFailScreen(Button fail)
    {
        const float k = 1920f / 1136f;
        RectTransform panel = (RectTransform)fail.transform;
        GameObject cgo = new GameObject("Content", typeof(RectTransform));
        RectTransform content = (RectTransform)cgo.transform; content.SetParent(panel, false);
        content.anchorMin = content.anchorMax = new Vector2(0.5f, 0.5f); content.sizeDelta = new Vector2(1080, 1920);
        UiImage(content, "Title", Ref("fail_title"), new Vector2(311, 85) * k, new Vector2(0f, 568f - 331.5f) * k, new Vector2(0.5f, 0.5f));
        // TRY AGAIN = one-line button like START (522x176), shown 627 wide; the finger points at its lower right
        // corner, clear of the text (user 2026-11-13).
        Vector2 againSize = new Vector2(627f, 627f * 176f / 522f);
        Vector2 againPos = new Vector2(0f, 568f - 884f) * k;
        UiImage(content, "Again", Ref("again"), againSize, againPos, new Vector2(0.5f, 0.5f));
        Vector2 fp = new Vector2(0.36f, 0.98f);
        RectTransform finger = UiImage(content, "Finger", Ref("finger"), new Vector2(72, 88) * k,
            againPos + new Vector2(275f, -60f), fp);
        AcidFailPanel afp = fail.gameObject.AddComponent<AcidFailPanel>();
        SetRef(afp, "shadow", fail.GetComponent<Image>());
        SetRef(afp, "finger", finger);
        SetRef(afp, "content", content);
        SetRef(afp, "panelRect", panel);
    }

    // Intro: light black shade, shaking "KILL THEM ALL! STOP THE PLATFORM" and a pulsing START button (Ref/Sprites/start.png,
    // built from the reference's own glyphs). START → AcidGame.StartGame (first wave, tutorial hand, Time Play).
    static void BuildIntro(Transform canvas, AcidGame game, AcidAudio sfx, GameObject counter)
    {
        GameObject go = new GameObject("Intro", typeof(RectTransform));
        RectTransform rt = (RectTransform)go.transform; rt.SetParent(canvas, false);
        rt.anchorMin = Vector2.zero; rt.anchorMax = Vector2.one; rt.offsetMin = rt.offsetMax = Vector2.zero;
        rt.SetSiblingIndex(counter.transform.GetSiblingIndex() + 1);
        Image shade = go.AddComponent<Image>(); shade.color = new Color(0, 0, 0, 0.45f);
        RectTransform title = UiImage(rt, "Title", Ref("title_noline"), new Vector2(980, 162), new Vector2(0, 250), new Vector2(0.5f, 0.5f));
        RectTransform btnRt = UiImage(rt, "StartButton", Ref("start"), new Vector2(594, 282), new Vector2(0, -320), new Vector2(0.5f, 0.5f));
        Image bimg = btnRt.GetComponent<Image>(); bimg.raycastTarget = true;
        Button btn = btnRt.gameObject.AddComponent<Button>(); btn.targetGraphic = bimg; btn.transition = Selectable.Transition.None;
        AcidIntro intro = go.AddComponent<AcidIntro>();
        SerializedObject so = new SerializedObject(intro);
        so.FindProperty("game").objectReferenceValue = game;
        so.FindProperty("sfx").objectReferenceValue = sfx;
        so.FindProperty("startButton").objectReferenceValue = btn;
        so.FindProperty("title").objectReferenceValue = title;
        so.FindProperty("button").objectReferenceValue = btnRt;
        SerializedProperty arr = so.FindProperty("showOnStart"); arr.arraySize = 1;
        arr.GetArrayElementAtIndex(0).objectReferenceValue = counter;
        so.ApplyModifiedPropertiesWithoutUndo();
    }

    // Custom BG (Luna playground "Use Custom BG" + "BG Image"): world-space canvas at order -90 (over the default
    // backdrop -100, under the ground/walls/game), RawImage off until LunaController.Awake gives it a texture.
    static AcidCustomBG BuildCustomBG(Camera cam)
    {
        GameObject go = new GameObject("CustomBG", typeof(RectTransform));
        Canvas cv = go.AddComponent<Canvas>(); cv.renderMode = RenderMode.WorldSpace; cv.worldCamera = cam; cv.sortingOrder = -90;
        RectTransform root = (RectTransform)go.transform; root.position = new Vector3(0, 5, 0); root.sizeDelta = new Vector2(20, 12);
        GameObject ig = new GameObject("Image", typeof(RectTransform));
        RectTransform irt = (RectTransform)ig.transform; irt.SetParent(root, false); irt.sizeDelta = new Vector2(20, 12);
        RawImage ri = ig.AddComponent<RawImage>(); ri.raycastTarget = false; ri.enabled = false;
        AcidCustomBG bg = go.AddComponent<AcidCustomBG>();
        SetRef(bg, "cam", cam); SetRef(bg, "image", ri); SetRef(bg, "rect", irt);
        return bg;
    }

    static RectTransform UiImage(Transform parent, string name, Sprite s, Vector2 size, Vector2 pos, Vector2 pivot)
    {
        GameObject go = new GameObject(name, typeof(RectTransform));
        RectTransform rt = (RectTransform)go.transform; rt.SetParent(parent, false);
        rt.anchorMin = rt.anchorMax = new Vector2(0.5f, 0.5f); rt.pivot = pivot; rt.sizeDelta = size; rt.anchoredPosition = pos;
        Image img = go.AddComponent<Image>(); img.sprite = s; img.raycastTarget = false; img.preserveAspect = true;
        return rt;
    }

    static Button Panel(Transform parent, string name, Color c)
    {
        GameObject go = new GameObject(name);
        go.transform.SetParent(parent, false);
        RectTransform rt = go.AddComponent<RectTransform>();
        rt.anchorMin = Vector2.zero; rt.anchorMax = Vector2.one; rt.offsetMin = Vector2.zero; rt.offsetMax = Vector2.zero;
        Image img = go.AddComponent<Image>(); img.color = c;
        Button b = go.AddComponent<Button>(); b.targetGraphic = img; b.transition = Selectable.Transition.None;
        go.SetActive(false);
        return b;
    }
}

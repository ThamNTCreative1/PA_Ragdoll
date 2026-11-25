using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

// Tao san pose vu khi (duoi ban tay) va mu (duoi HelmetAnchor) cho tung mod trong MemeScene.
// Pose duoc BAT trong Editor de chinh tay; khi chay MemeFlow an het, mon duoc chon roi xuong dung pose.
public static class KSBPMemePoses
{
    [MenuItem("Tools/KSBP/Meme Poses/Create (giu pose da co)")]
    public static void CreateMissing() { Run(false); }

    [MenuItem("Tools/KSBP/Meme Poses/Reset all (tao lai tu dau)")]
    public static void ResetAll()
    {
        if (!EditorUtility.DisplayDialog("Reset poses", "Tao lai toan bo pose vu khi/mu? Chinh sua tay se mat.", "Reset", "Huy")) return;
        Run(true);
    }

    [MenuItem("Tools/KSBP/Meme Poses/Show all")]
    public static void ShowAll() { SetAll(true); }

    [MenuItem("Tools/KSBP/Meme Poses/Hide all")]
    public static void HideAll() { SetAll(false); }

    static void SetAll(bool on)
    {
        var f = Object.FindFirstObjectByType<MemeFlow>();
        if (f == null) return;
        foreach (var h in f.heroes)
        {
            if (h.weaponPoses != null) foreach (var p in h.weaponPoses) if (p != null) { Undo.RecordObject(p.gameObject, "poses"); p.gameObject.SetActive(on); }
            if (h.helmetPoses != null) foreach (var p in h.helmetPoses) if (p != null) { Undo.RecordObject(p.gameObject, "poses"); p.gameObject.SetActive(on); }
        }
        EditorSceneManager.MarkSceneDirty(f.gameObject.scene);
    }

    public static void Run(bool reset)
    {
        if (EditorApplication.isPlaying) { Debug.LogError("[Meme Poses] Thoat Play mode truoc"); return; }
        var f = Object.FindFirstObjectByType<MemeFlow>();
        if (f == null) { Debug.LogError("[Meme Poses] Khong thay MemeFlow (mo MemeScene)"); return; }
        Undo.RecordObject(f, "meme poses");
        for (int hi = 0; hi < f.heroes.Length; hi++)
        {
            var h = f.heroes[hi];
            if (h.weaponPoses == null || h.weaponPoses.Length != f.weaponSprites.Length) h.weaponPoses = Resize(h.weaponPoses, f.weaponSprites.Length);
            if (h.helmetPoses == null || h.helmetPoses.Length != f.armorSprites.Length) h.helmetPoses = Resize(h.helmetPoses, f.armorSprites.Length);
            for (int w = 0; w < f.weaponSprites.Length; w++)
            {
                if (h.weaponPoses[w] != null && !reset) continue;
                if (h.weaponPoses[w] != null) Undo.DestroyObjectImmediate(h.weaponPoses[w].gameObject);
                h.weaponPoses[w] = MakeWeaponPose(f, h, w);
            }
            for (int a = 0; a < f.armorSprites.Length; a++)
            {
                if (h.helmetPoses[a] != null && !reset) continue;
                if (h.helmetPoses[a] != null) Undo.DestroyObjectImmediate(h.helmetPoses[a].gameObject);
                h.helmetPoses[a] = MakeHelmetPose(f, h, a, hi);
            }
            // weapon/helmet goc (tu dong) tat di, khong dung nua khi da co pose
            if (h.weapon != null && System.Array.IndexOf(h.weaponPoses, h.weapon) < 0) h.weapon.gameObject.SetActive(false);
            if (h.helmet != null && System.Array.IndexOf(h.helmetPoses, h.helmet) < 0) h.helmet.gameObject.SetActive(false);
        }
        EditorUtility.SetDirty(f);
        EditorSceneManager.MarkSceneDirty(f.gameObject.scene);
        EditorSceneManager.SaveScene(f.gameObject.scene);
        Debug.Log("[Meme Poses] Done (reset=" + reset + ")");
    }

    static SpriteRenderer[] Resize(SpriteRenderer[] a, int n)
    {
        var r = new SpriteRenderer[n];
        if (a != null) for (int i = 0; i < n && i < a.Length; i++) r[i] = a[i];
        return r;
    }

    static SpriteRenderer NewSR(string name, Transform parent, Sprite sp, int order)
    {
        var go = new GameObject(name);
        Undo.RegisterCreatedObjectUndo(go, "pose");
        go.transform.SetParent(parent, false);
        var sr = go.AddComponent<SpriteRenderer>();
        sr.sprite = sp; sr.sortingOrder = order;
        return sr;
    }

    // ---------- Vu khi: dat theo khong gian ban tay (holder +x = huong canh tay) ----------
    static SpriteRenderer MakeWeaponPose(MemeFlow f, HeroRig h, int w)
    {
        Sprite sp = f.weaponSprites[w];
        var sr = NewSR("WeaponPose_" + w + "_" + sp.name, h.holder, sp, 11);
        Bounds b = sp.bounds;
        float len = Mathf.Max(b.size.x, b.size.y);
        float lossy = Mathf.Abs(h.root.localScale.x);
        float s = f.weaponWorldSize[w] / len / lossy;
        float rot = f.weaponRotation[w];
        Vector3 grip;   // diem cam trong khong gian sprite
        if (w == 2)
        {
            // Gay bong chay: nam o chuoi (dau duoi sprite), cheo theo huong tay ~25 do
            rot = -90f + 25f;
            grip = new Vector3(b.center.x, b.min.y + b.size.y * 0.1f, 0f);
        }
        else if (w == 1) grip = b.center;     // RPG vac ngang vai, cam o giua
        else grip = Vector3.zero;             // sung gang dam: pivot = bang cam
        Quaternion q = Quaternion.Euler(0f, 0f, rot);
        sr.transform.localRotation = q;
        sr.transform.localScale = new Vector3(s, s, 1f);
        sr.transform.localPosition = -(q * (grip * s));
        // Muzzle o dau nong (+x cua sprite) cho dan bay ra
        var mz = new GameObject("Muzzle").transform;
        mz.SetParent(sr.transform, false);
        mz.localPosition = new Vector3(b.max.x, b.center.y, 0f);
        return sr;
    }

    // ---------- Mu: dat theo bounds dau that (world) ----------
    static SpriteRenderer MakeHelmetPose(MemeFlow f, HeroRig h, int a, int heroIndex)
    {
        Sprite sp = f.armorSprites[a];
        var sr = NewSR("HelmetPose_" + a + "_" + sp.name, h.helmetAnchor, sp, 17);
        bool banana = h.body.Find("Head") == null;
        Bounds head = HeadBounds(h, banana);
        Bounds b = sp.bounds;
        Vector3 pivotWorld;
        float worldScale;
        if (a == f.fullHelmetIndex)
        {
            // Mu linh: trum ca dau. Meo chuoi: ha thap them de 2 mat nhin qua khe kinh
            worldScale = head.size.x * f.fullHelmetWidthMul / b.size.x;
            float lift = banana ? -0.18f : f.fullHelmetLift;
            pivotWorld = head.center - b.center * worldScale + new Vector3(0f, head.size.y * lift, 0f);
        }
        else
        {
            // Mu dau bep / phu thuy: can giua theo tam dau that, day mu sup xuong 30% dau
            worldScale = head.size.x * 1.05f / b.size.x;
            Vector3 bottomCenter = new Vector3(head.center.x, head.max.y - head.size.y * 0.3f, 0f);
            pivotWorld = bottomCenter - new Vector3(b.center.x, b.min.y, 0f) * worldScale;
        }
        float ls = worldScale / Mathf.Abs(h.helmetAnchor.lossyScale.x);
        sr.transform.localScale = new Vector3(ls, ls, 1f);
        Vector3 local = h.helmetAnchor.InverseTransformPoint(pivotWorld);
        local.z = 0f;
        sr.transform.localPosition = local;
        return sr;
    }

    static Bounds HeadBounds(HeroRig h, bool banana)
    {
        if (!banana)
        {
            var hs = h.body.Find("Head").GetComponent<SpriteRenderer>();
            return hs.bounds;
        }
        var t = h.body.Find("Torso").GetComponent<SpriteRenderer>().bounds;
        float hh = t.size.y * 0.3f;
        return new Bounds(new Vector3(t.center.x, t.max.y - t.size.y * 0.4f, 0f), new Vector3(t.size.x, hh, 0.1f));
    }
}

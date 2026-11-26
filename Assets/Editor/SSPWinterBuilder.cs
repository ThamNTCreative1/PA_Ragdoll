using System.Collections.Generic;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

// Tools/SSP/Add Winter Theme: adds the winter look to the OPEN Game scene (no rebuild, UI untouched; safe to re-run).
// Every tile whose sprite has a winter twin is moved into a "Normal" child and cloned into a "Winter" child of the same
// parent (colliders stay on the parent). Pumpkins get a "Winter" ice child. MapTheme (LunaController "Custom Winter")
// switches the groups.
public static class SSPWinterBuilder
{
    const string Props = "Assets/01 RESOURCES/SSP/Props/";

    // normal sprite name -> winter sprite name
    static readonly Dictionary<string, string> Map = new Dictionary<string, string>
    {
        { "grass", "snow" },
        { "brick", "stonebrick" },
        { "bg_brick", "bg_stone" },
        { "window", "glass" },
        { "planks", "birch" },
        { "pumpkin", "ice" },
    };

    static Sprite Spr(string path) { return AssetDatabase.LoadAssetAtPath<Sprite>(path); }

    [MenuItem("Tools/SSP/Add Winter Theme")]
    public static void Apply()
    {
        List<GameObject> normal = new List<GameObject>();
        List<GameObject> winter = new List<GameObject>();
        List<SpriteRenderer> normalRenderers = new List<SpriteRenderer>();

        GameObject roomGo = GameObject.Find("GAME/Room");
        if (!roomGo) { Debug.LogError("[SSPWinterBuilder] GAME/Room not found"); return; }
        Transform room = roomGo.transform;
        string[] groups = { "BackWall", "Floor", "Walls/WallLeft", "Walls/WallRight", "Walls/Ceiling", "Shelf" };
        foreach (string g in groups)
        {
            Transform parent = room.Find(g);
            if (!parent) continue;
            Split(parent, normal, winter);
        }

        // Old world backdrops (replaced by the SRP screen background).
        foreach (string old in new string[] { "BG", "BG_Winter" })
        {
            Transform o = room.Find(old);
            if (o) Object.DestroyImmediate(o.gameObject);
        }

        // Pumpkins (physics props): ice block child.
        Transform props = GameObject.Find("GAME/Props").transform;
        foreach (Transform p in props)
        {
            if (p.name != "Pumpkin") continue;
            Transform old = p.Find("Winter");
            if (old) Object.DestroyImmediate(old.gameObject);
            SpriteRenderer sr = p.GetComponent<SpriteRenderer>();
            GameObject w = new GameObject("Winter");
            w.transform.SetParent(p, false);
            SpriteRenderer wsr = w.AddComponent<SpriteRenderer>();
            wsr.sprite = Spr(Props + "ice.png");
            wsr.sortingOrder = sr.sortingOrder;
            w.SetActive(false);
            normalRenderers.Add(sr);
            winter.Add(w);
        }

        // Snowfall (winter only).
        Transform oldSnow = room.Find("Snowfall");
        if (oldSnow) Object.DestroyImmediate(oldSnow.gameObject);
        GameObject snow = new GameObject("Snowfall");
        snow.transform.SetParent(room, false);
        Snowfall sf = snow.AddComponent<Snowfall>();
        Sprite white = Spr("Assets/01 RESOURCES/SSP/Env/white.png");
        System.Random rnd = new System.Random(3);
        List<Object> flakes = new List<Object>();
        for (int i = 0; i < 90; i++)
        {
            GameObject f = new GameObject("Flake" + i);
            f.transform.SetParent(snow.transform, false);
            f.transform.localPosition = new Vector3(-12f + 24f * (float)rnd.NextDouble(), -0.5f + 13f * (float)rnd.NextDouble(), 0);
            float s = 0.05f + 0.08f * (float)rnd.NextDouble();
            f.transform.localScale = new Vector3(s, s, 1);
            SpriteRenderer fs = f.AddComponent<SpriteRenderer>();
            fs.sprite = white; fs.color = new Color(1, 1, 1, 0.9f); fs.sortingOrder = 450;
            flakes.Add(f.transform);
        }
        SetArray(sf, "flakes", flakes.ToArray());
        snow.SetActive(false);
        winter.Add(snow);

        // MapTheme + LunaController wiring.
        GameObject mt = GameObject.Find("MapTheme");
        if (!mt) mt = new GameObject("MapTheme");
        MapTheme theme = mt.GetComponent<MapTheme>();
        if (!theme) theme = mt.AddComponent<MapTheme>();
        SetArray(theme, "normalObjects", normal.ToArray());
        SetArray(theme, "winterObjects", winter.ToArray());
        SetArray(theme, "normalRenderers", normalRenderers.ToArray());
        SerializedObject so = new SerializedObject(theme);
        so.FindProperty("cam").objectReferenceValue = Camera.main;
        so.ApplyModifiedPropertiesWithoutUndo();
        LunaController luna = Object.FindObjectOfType<LunaController>();
        if (luna)
        {
            so = new SerializedObject(luna);
            so.FindProperty("mapTheme").objectReferenceValue = theme;
            so.ApplyModifiedPropertiesWithoutUndo();
        }

        EditorSceneManager.MarkSceneDirty(EditorSceneManager.GetActiveScene());
        EditorSceneManager.SaveScene(EditorSceneManager.GetActiveScene());
        Debug.Log("[SSPWinterBuilder] winter theme: " + normal.Count + " normal / " + winter.Count + " winter objects");
    }

    // Moves the parent's tiles that have a winter twin into "Normal" and clones them (winter sprite) into "Winter".
    static void Split(Transform parent, List<GameObject> normal, List<GameObject> winter)
    {
        Transform n = parent.Find("Normal"), w = parent.Find("Winter");
        if (n)
        {
            List<Transform> back = new List<Transform>();
            foreach (Transform c in n) back.Add(c);
            foreach (Transform c in back) c.SetParent(parent, false);
            Object.DestroyImmediate(n.gameObject);
        }
        if (w) Object.DestroyImmediate(w.gameObject);

        List<SpriteRenderer> tiles = new List<SpriteRenderer>();
        foreach (Transform c in parent)
        {
            SpriteRenderer sr = c.GetComponent<SpriteRenderer>();
            if (sr && sr.sprite && Map.ContainsKey(sr.sprite.name)) tiles.Add(sr);
        }
        if (tiles.Count == 0) return;
        GameObject ng = new GameObject("Normal"); ng.transform.SetParent(parent, false);
        GameObject wg = new GameObject("Winter"); wg.transform.SetParent(parent, false);
        foreach (SpriteRenderer sr in tiles)
        {
            sr.transform.SetParent(ng.transform, false);
            GameObject c = new GameObject(Map[sr.sprite.name]);
            c.transform.SetParent(wg.transform, false);
            c.transform.localPosition = sr.transform.localPosition;
            c.transform.localRotation = sr.transform.localRotation;
            c.transform.localScale = sr.transform.localScale;
            SpriteRenderer csr = c.AddComponent<SpriteRenderer>();
            csr.sprite = Spr(Props + Map[sr.sprite.name] + ".png");
            csr.sortingOrder = sr.sortingOrder;
        }
        wg.SetActive(false);
        normal.Add(ng);
        winter.Add(wg);
    }

    static void SetArray(Object target, string field, Object[] values)
    {
        SerializedObject so = new SerializedObject(target);
        SerializedProperty p = so.FindProperty(field);
        p.arraySize = values.Length;
        for (int i = 0; i < values.Length; i++) p.GetArrayElementAtIndex(i).objectReferenceValue = values[i];
        so.ApplyModifiedPropertiesWithoutUndo();
    }
}

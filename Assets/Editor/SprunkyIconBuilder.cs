using System.IO;
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;

// Makes the side-select / counter icons (same framed style as the old buttonm05 / buttonmz01 icons)
// from the Sprunky rigs: one per Player skin and one per Zombie version (both of its Sprunkis).
public static class SprunkyIconBuilder
{
    private const string OutFolder = "Assets/01 RESOURCES/SRP/Icons";
    private const int Size = 94;               // same as the old icons
    private const int Border = 3;
    private const float SourcePixel = 0.023f;  // one sheet pixel in world units (ppu 100 x rig scale 2.3)
    private const int Zoom = 2;                // icon pixels per sheet pixel (integer keeps it crisp)
    private static readonly Color32 FrameColor = new Color32(0x37, 0x38, 0x3C, 0xFF);
    private static readonly Color32 ShadowColor = new Color32(0x28, 0x29, 0x2C, 0xB9);
    private static readonly Color32 InnerColor = new Color32(0x1E, 0x21, 0x26, 0xFF);

    [MenuItem("Tools/Project/Build Sprunky Icons")]
    public static void BuildAll()
    {
        if (!AssetDatabase.IsValidFolder(OutFolder)) AssetDatabase.CreateFolder("Assets/01 RESOURCES/SRP", "Icons");
        GameObject human = AssetDatabase.LoadAssetAtPath<GameObject>("Assets/03 PREFABS/Characters/H_Player.prefab");
        GameObject zombie = AssetDatabase.LoadAssetAtPath<GameObject>("Assets/03 PREFABS/Characters/Z_01.prefab");

        foreach (SprunkySkinId id in System.Enum.GetValues(typeof(SprunkySkinId)))
        {
            GameObject a = Spawn(human, Vector3.zero, 0);
            a.GetComponent<SprunkySkin>().Apply(id);
            Render(new[] { a }, "Player_" + id);
        }
        foreach (ZombieSkinId id in System.Enum.GetValues(typeof(ZombieSkinId)))
        {
            // Sheet B behind on the right, sheet A in front on the left (like the reference).
            GameObject b = Spawn(zombie, new Vector3(0.28f, 0f, 0f), 0);
            SetSlot(b, 1, id);
            GameObject a = Spawn(zombie, new Vector3(-0.14f, -0.05f, 0f), 10);
            SetSlot(a, 0, id);
            Render(new[] { a, b }, "Zombie_" + id);
        }
        AssetDatabase.Refresh();
        foreach (string f in Directory.GetFiles(OutFolder, "*.png")) ImportAsIcon(f.Replace('\\', '/'));
        Debug.Log("Sprunky icons built in " + OutFolder);
    }

    private static GameObject Spawn(GameObject prefab, Vector3 offset, int order)
    {
        GameObject go = (GameObject)Object.Instantiate(prefab);
        go.hideFlags = HideFlags.HideAndDontSave;
        go.transform.position = new Vector3(5000f, 0f, 0f) + offset;
        go.GetComponent<SortingGroup>().sortingOrder = order;
        // Plain body: no clothes or gun on the icon.
        foreach (string p in new[] { "head_mid/Hat", "chest_mid/Shirt", "abdomen_mid/Pants", "hand_front/Gun" })
        {
            Transform t = go.transform.Find(p);
            if (t) t.gameObject.SetActive(false);
        }
        return go;
    }

    private static void SetSlot(GameObject go, int slot, ZombieSkinId id)
    {
        MonsterSkin skin = go.GetComponent<MonsterSkin>();
        SerializedObject so = new SerializedObject(skin);
        so.FindProperty("slot").intValue = slot;
        so.ApplyModifiedPropertiesWithoutUndo();
        skin.Apply(id);
    }

    private static void Render(GameObject[] characters, string name)
    {
        // Frame on the first character's head: head top a few pixels under the frame.
        Bounds head = characters[0].transform.Find("head_mid/Skin").GetComponent<SpriteRenderer>().bounds;
        float px = SourcePixel / Zoom;
        float centerX = head.center.x;
        if (characters.Length > 1)
        {
            Bounds other = characters[1].transform.Find("head_mid/Skin").GetComponent<SpriteRenderer>().bounds;
            centerX = (head.min.x + other.max.x) * 0.5f;
        }
        float top = head.max.y;
        float centerY = top - px * (Size - Border - 6 - Size * 0.5f);

        GameObject camGo = new GameObject("IconCam");
        camGo.hideFlags = HideFlags.HideAndDontSave;
        Camera cam = camGo.AddComponent<Camera>();
        cam.orthographic = true;
        cam.orthographicSize = Size * px * 0.5f;
        cam.transform.position = new Vector3(Snap(centerX, px), Snap(centerY, px), -10f);
        cam.clearFlags = CameraClearFlags.SolidColor;
        cam.backgroundColor = new Color(0, 0, 0, 0);
        RenderTexture rt = new RenderTexture(Size, Size, 24, RenderTextureFormat.ARGB32);
        rt.filterMode = FilterMode.Point;
        rt.antiAliasing = 1;
        cam.targetTexture = rt;
        cam.aspect = 1f;
        cam.Render();

        RenderTexture.active = rt;
        Texture2D shot = new Texture2D(Size, Size, TextureFormat.RGBA32, false);
        shot.ReadPixels(new Rect(0, 0, Size, Size), 0, 0);
        shot.Apply();
        RenderTexture.active = null;
        cam.targetTexture = null;
        Object.DestroyImmediate(rt);
        Object.DestroyImmediate(camGo);
        foreach (GameObject c in characters) Object.DestroyImmediate(c);

        Texture2D icon = new Texture2D(Size, Size, TextureFormat.RGBA32, false);
        for (int y = 0; y < Size; y++)
            for (int x = 0; x < Size; x++)
            {
                Color32 c;
                if (y == 0) c = ShadowColor;
                else if (x < Border || x >= Size - Border || y < Border || y >= Size - Border) c = FrameColor;
                else
                {
                    Color s = shot.GetPixel(x, y);
                    c = Color.Lerp((Color)InnerColor, new Color(s.r, s.g, s.b, 1f), s.a);
                }
                icon.SetPixel(x, y, c);
            }
        icon.Apply();
        File.WriteAllBytes(OutFolder + "/" + name + ".png", icon.EncodeToPNG());
        Object.DestroyImmediate(shot);
        Object.DestroyImmediate(icon);
    }

    private static float Snap(float v, float step)
    {
        return Mathf.Round(v / step) * step;
    }

    private static void ImportAsIcon(string path)
    {
        TextureImporter ti = (TextureImporter)AssetImporter.GetAtPath(path);
        if (ti == null) return;
        ti.textureType = TextureImporterType.Sprite;
        ti.spriteImportMode = SpriteImportMode.Single;
        ti.spritePixelsPerUnit = 100;
        ti.filterMode = FilterMode.Point;
        ti.mipmapEnabled = false;
        ti.alphaIsTransparency = true;
        ti.textureCompression = TextureImporterCompression.Uncompressed;
        ti.SaveAndReimport();
    }
}

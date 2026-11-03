using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;

// Generates the breaking-tsunami mesh, its material, a soft spray texture and the spray/foam particle systems.
// The wave faces -Z (toward the player); pivot is on the floor at the wave's centre line.
public static class TsunamiBuilder
{
    public const string Root = "Assets/01 RESOURCES/Wave";
    public const float Height = 15f;
    public const float FootZ = -2.6f, BackZ = 8f;
    // How far in front of the pivot the wave can reach: the lip tip (-5.5) plus the shader's lip wobble (0.6).
    public const float FrontReach = 6.1f;

    // Cross-section (z, y): front foot -> concave face -> lip curling forward and down -> crest -> back slope -> back foot.
    static readonly Vector2[] Profile =
    {
        new Vector2(-2.6f, 0f), new Vector2(-1.5f, 2.6f), new Vector2(-0.9f, 6.2f), new Vector2(-1.3f, 9.6f),
        new Vector2(-2.6f, 12.0f), new Vector2(-4.4f, 12.9f), new Vector2(-5.5f, 12.1f), new Vector2(-5.1f, 13.7f),
        new Vector2(-3.2f, 14.9f), new Vector2(-0.6f, 15.0f), new Vector2(2.2f, 13.2f), new Vector2(4.6f, 8.5f),
        new Vector2(6.6f, 3.5f), new Vector2(8.0f, 0f)
    };
    const int SubSteps = 4, WidthSegments = 48;

    static Vector2 CatmullRom(Vector2 p0, Vector2 p1, Vector2 p2, Vector2 p3, float t)
    {
        float t2 = t * t, t3 = t2 * t;
        return 0.5f * ((2f * p1) + (-p0 + p2) * t + (2f * p0 - 5f * p1 + 4f * p2 - p3) * t2 + (-p0 + 3f * p1 - 3f * p2 + p3) * t3);
    }

    static List<Vector2> SampleProfile()
    {
        List<Vector2> pts = new List<Vector2>();
        for (int s = 0; s < Profile.Length - 1; s++)
        {
            Vector2 p0 = Profile[Mathf.Max(s - 1, 0)], p1 = Profile[s], p2 = Profile[s + 1], p3 = Profile[Mathf.Min(s + 2, Profile.Length - 1)];
            for (int k = 0; k < SubSteps; k++) pts.Add(CatmullRom(p0, p1, p2, p3, k / (float)SubSteps));
        }
        pts.Add(Profile[Profile.Length - 1]);
        return pts;
    }

    // How much a profile point belongs to the overhanging lip (drives forward surge and whitewater).
    static float LipWeight(Vector2 p)
    {
        return Mathf.Clamp01((-p.x - 2.2f) / 3.0f) * Mathf.Clamp01((p.y - 10.5f) / 2.0f);
    }

    static Mesh BuildMesh(float width)
    {
        List<Vector2> prof = SampleProfile();
        float[] arc = new float[prof.Count];
        for (int j = 1; j < prof.Count; j++) arc[j] = arc[j - 1] + Vector2.Distance(prof[j - 1], prof[j]);
        float total = arc[prof.Count - 1];

        int cols = prof.Count, rows = WidthSegments + 1;
        Vector3[] v = new Vector3[rows * cols];
        Vector2[] uv = new Vector2[v.Length], uv2 = new Vector2[v.Length];
        for (int i = 0; i < rows; i++)
        {
            float x = -width * 0.5f + width * i / WidthSegments;
            for (int j = 0; j < cols; j++)
            {
                int k = i * cols + j;
                v[k] = new Vector3(x, prof[j].y, prof[j].x);
                uv[k] = new Vector2(x, arc[j] / total);
                uv2[k] = new Vector2(LipWeight(prof[j]), prof[j].y / Height);
            }
        }
        List<int> tris = new List<int>();
        for (int i = 0; i < rows - 1; i++)
            for (int j = 0; j < cols - 1; j++)
            {
                int a = i * cols + j, b = a + 1, c = a + cols, d = c + 1;
                tris.Add(a); tris.Add(b); tris.Add(c);
                tris.Add(b); tris.Add(d); tris.Add(c);
            }
        Mesh m = new Mesh { name = "TsunamiWave" };
        m.vertices = v; m.uv = uv; m.uv2 = uv2; m.SetTriangles(tris, 0);
        m.RecalculateNormals();
        // Make the front face's normals point toward the player (-Z).
        Vector3[] n = m.normals;
        if (n[cols * (rows / 2) + 2].z > 0f) { for (int k = 0; k < n.Length; k++) n[k] = -n[k]; m.normals = n; }
        m.RecalculateBounds();
        return m;
    }

    static T SaveAsset<T>(T asset, string path) where T : Object
    {
        T old = AssetDatabase.LoadAssetAtPath<T>(path);
        if (old == null) { AssetDatabase.CreateAsset(asset, path); return asset; }
        EditorUtility.CopySerialized(asset, old);
        Object.DestroyImmediate(asset);
        EditorUtility.SetDirty(old);
        return old;
    }

    // Soft, slightly lumpy puff used by every spray/foam particle.
    static Texture2D SprayTexture()
    {
        string path = Root + "/Tsunami_Spray.png";
        const int S = 64;
        Texture2D t = new Texture2D(S, S, TextureFormat.RGBA32, false);
        for (int y = 0; y < S; y++) for (int x = 0; x < S; x++)
        {
            float dx = (x + 0.5f) / S * 2f - 1f, dy = (y + 0.5f) / S * 2f - 1f;
            float r = Mathf.Sqrt(dx * dx + dy * dy);
            float ang = Mathf.Atan2(dy, dx);
            float lump = 0.82f + 0.18f * Mathf.Sin(ang * 5f + 1.3f) * Mathf.Sin(ang * 3f);
            float a = Mathf.Clamp01(1f - r / lump);
            a = a * a * (3f - 2f * a);
            t.SetPixel(x, y, new Color(1f, 1f, 1f, a));
        }
        t.Apply();
        File.WriteAllBytes(path, t.EncodeToPNG());
        Object.DestroyImmediate(t);
        AssetDatabase.ImportAsset(path);
        TextureImporter ti = (TextureImporter)AssetImporter.GetAtPath(path);
        ti.alphaIsTransparency = true; ti.wrapMode = TextureWrapMode.Clamp; ti.mipmapEnabled = true; ti.maxTextureSize = 64;
        ti.SaveAndReimport();
        return AssetDatabase.LoadAssetAtPath<Texture2D>(path);
    }

    static Material WaveMaterial()
    {
        string path = Root + "/Tsunami.mat";
        Shader shader = Shader.Find("OBP/TsunamiWave");
        Material m = AssetDatabase.LoadAssetAtPath<Material>(path);
        if (m == null) { m = new Material(shader); AssetDatabase.CreateAsset(m, path); }
        m.shader = shader;
        m.SetTexture("_Foam", AssetDatabase.LoadAssetAtPath<Texture2D>(Root + "/Wave_Voronoi.png"));
        m.SetFloat("_Height", Height);
        EditorUtility.SetDirty(m);
        return m;
    }

    static Material SprayMaterial(Texture2D tex)
    {
        string path = Root + "/Tsunami_Spray.mat";
        Shader shader = Shader.Find("Legacy Shaders/Particles/Alpha Blended");
        Material m = AssetDatabase.LoadAssetAtPath<Material>(path);
        if (m == null) { m = new Material(shader); AssetDatabase.CreateAsset(m, path); }
        m.shader = shader; m.mainTexture = tex;
        // Legacy particle shaders double the tint; 0.735 (sRGB) is 0.5 in linear, so particles keep their own colour.
        m.SetColor("_TintColor", new Color(0.735f, 0.735f, 0.735f, 0.5f));
        EditorUtility.SetDirty(m);
        return m;
    }

    static ParticleSystem Particles(string name, Transform parent, Vector3 pos, Vector3 boxSize, Material mat,
        float rate, Vector2 life, Vector2 speed, Vector2 size, float gravity, Vector3 velocity, Color color, int maxParticles)
    {
        GameObject go = new GameObject(name, typeof(ParticleSystem));
        go.transform.SetParent(parent, false);
        go.transform.localPosition = pos;
        ParticleSystem ps = go.GetComponent<ParticleSystem>();
        ps.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);

        var main = ps.main;
        main.playOnAwake = false; main.loop = true; main.duration = 1f;
        main.startLifetime = new ParticleSystem.MinMaxCurve(life.x, life.y);
        main.startSpeed = new ParticleSystem.MinMaxCurve(speed.x, speed.y);
        main.startSize = new ParticleSystem.MinMaxCurve(size.x, size.y);
        main.startRotation = new ParticleSystem.MinMaxCurve(0f, Mathf.PI * 2f);
        main.startColor = color;
        main.gravityModifier = gravity;
        main.simulationSpace = ParticleSystemSimulationSpace.World;
        main.maxParticles = maxParticles;

        var emission = ps.emission; emission.rateOverTime = rate;
        var shape = ps.shape; shape.enabled = true; shape.shapeType = ParticleSystemShapeType.Box; shape.scale = boxSize;
        shape.rotation = new Vector3(-90f, 0f, 0f); // emit upward (+Y)

        var vel = ps.velocityOverLifetime; vel.enabled = true; vel.space = ParticleSystemSimulationSpace.Local;
        vel.x = new ParticleSystem.MinMaxCurve(velocity.x); vel.y = new ParticleSystem.MinMaxCurve(velocity.z); vel.z = new ParticleSystem.MinMaxCurve(-velocity.y);

        var sol = ps.sizeOverLifetime; sol.enabled = true;
        sol.size = new ParticleSystem.MinMaxCurve(1f, new AnimationCurve(new Keyframe(0f, 0.5f), new Keyframe(0.4f, 1f), new Keyframe(1f, 1.4f)));

        var col = ps.colorOverLifetime; col.enabled = true;
        Gradient g = new Gradient();
        g.SetKeys(new[] { new GradientColorKey(Color.white, 0f), new GradientColorKey(Color.white, 1f) },
                  new[] { new GradientAlphaKey(0f, 0f), new GradientAlphaKey(1f, 0.15f), new GradientAlphaKey(0.7f, 0.6f), new GradientAlphaKey(0f, 1f) });
        col.color = g;

        var rot = ps.rotationOverLifetime; rot.enabled = true; rot.z = new ParticleSystem.MinMaxCurve(-1f, 1f);

        ParticleSystemRenderer r = go.GetComponent<ParticleSystemRenderer>();
        r.sharedMaterial = mat; r.renderMode = ParticleSystemRenderMode.Billboard;
        r.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off; r.receiveShadows = false;
        r.sortingFudge = 0f;
        return ps;
    }

    public sealed class Result
    {
        public Renderer renderer;
        public ParticleSystem[] effects;
    }

    // Builds the visual under `waveRoot` (which WaveHazard moves).
    public static Result Build(Transform waveRoot, float width)
    {
        Directory.CreateDirectory(Root);
        Mesh mesh = SaveAsset(BuildMesh(width), Root + "/TsunamiWave.asset");

        GameObject body = new GameObject("TsunamiBody", typeof(MeshFilter), typeof(MeshRenderer));
        body.transform.SetParent(waveRoot, false);
        body.GetComponent<MeshFilter>().sharedMesh = mesh;
        MeshRenderer mr = body.GetComponent<MeshRenderer>();
        mr.sharedMaterial = WaveMaterial();
        mr.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off; mr.receiveShadows = false;

        Material spray = SprayMaterial(SprayTexture());
        float w = width * 0.95f;
        // velocity arg is (x, forward(-Z), up) in the wave's frame; shape is rotated so local Z = up.
        ParticleSystem crest = Particles("CrestSpray", waveRoot, new Vector3(0f, 13.2f, -4.6f), new Vector3(w, 1.2f, 0.6f), spray,
            70f, new Vector2(1.2f, 2.2f), new Vector2(2f, 5f), new Vector2(2.5f, 5f), 0.35f, new Vector3(0f, 3f, 0f), new Color(1f, 1f, 1f, 0.75f), 220);
        ParticleSystem mist = Particles("Mist", waveRoot, new Vector3(0f, 10f, -3.5f), new Vector3(w, 3f, 4f), spray,
            18f, new Vector2(2f, 3.2f), new Vector2(0.5f, 1.5f), new Vector2(6f, 10f), -0.05f, new Vector3(0f, 1.5f, 0f), new Color(0.85f, 0.95f, 1f, 0.35f), 80);
        ParticleSystem foot = Particles("FootFoam", waveRoot, new Vector3(0f, 0.3f, -3.2f), new Vector3(w, 1.5f, 0.3f), spray,
            90f, new Vector2(0.7f, 1.3f), new Vector2(1.5f, 3.5f), new Vector2(1.8f, 3.6f), 0.8f, new Vector3(0f, 4f, 0f), new Color(1f, 1f, 1f, 0.85f), 160);

        AssetDatabase.SaveAssets();
        return new Result { renderer = mr, effects = new[] { crest, mist, foot } };
    }
}

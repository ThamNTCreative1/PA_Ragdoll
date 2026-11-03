using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using OBP.FreezeBrainrot;

// Builds the "Freeze the Brainrot" level into the active scene under a single "Level" root.
// Layout along +Z: safe zone -> hole 1 -> ledge -> hole 2 -> monster field. Waves run back toward hole 1.
public static class FreezeLevelBuilder
{
    const string Root = "Assets/01 RESOURCES/Level";
    const string MonsterRoot = "Assets/01 RESOURCES/";
    const string FreezeRoot = "Assets/01 RESOURCES/Freeze";
    const string SharedMaterial = "Assets/01 RESOURCES/BrainrotVoxel/Materials/VoxelShared.mat";

    // Zones are twice the original footprint; hole widths stay 2.6m so they remain jumpable.
    public const float HalfWidth = 18f, WallHeight = 16f, GroundDepth = 7f;
    public const float SafeStart = -4f, Hole1Start = 20f, Hole1End = 22.6f, Hole2Start = 31.4f, Hole2End = 34f, FieldEnd = 95f;
    public const float WaveStartZ = 92f, SpawnZ = 6f;
    // The wave stops when its frontmost point (lip tip) reaches the field-side edge of hole 1.
    public const float WaveEndZ = Hole1End + TsunamiBuilder.FrontReach;

    static readonly string[] Monsters = { "TralaleroTralala", "BombardiroCrocodilo", "TungTungSahur", "BallerinaCappuccina", "LiriliLarila" };
    static readonly string[] MonsterPrefabs = { "Tralalero/Tralalero_Original_Idle", "BombardiroCrocodilo/Bombardiro_Idle", "TungTungSahur/TungSahur_Minecraft_Idle", "BallerinaCappuccina/Ballerina_Voxel_Idle", "Lirili/Lirili_Idle" };
    // Extra yaw so each model faces the player (models were authored with different forward axes).
    static readonly float[] MonsterYaw = { 0, 0, 0, 0, 0 };
    // Reward shown when frozen, in $K (matches the name/price labels).
    static readonly int[] MonsterPriceK = { 420, 650, 550, 480, 620 };
    static readonly Vector3[] MonsterPos = { new Vector3(-10f,0,44.8f), new Vector3(10f,0,48.8f), new Vector3(0,0,62.8f), new Vector3(-11f,0,76.8f), new Vector3(11f,0,79.8f) };

    sealed class Geo
    {
        public readonly List<Vector3> v = new List<Vector3>();
        public readonly List<Vector3> n = new List<Vector3>();
        public readonly List<Color> c = new List<Color>();
        public readonly List<Vector2> uv = new List<Vector2>();
        public readonly List<List<int>> subs = new List<List<int>> { new List<int>() };
        // Submesh that new faces go into (0 = textured, 1 = flat vertex colour where a mesh uses two materials).
        public int sub;
        public void Face(Vector3 a, Vector3 b, Vector3 d, Vector3 e, Color color)
        {
            Face(a,b,d,e,color,Vector2.zero,Vector2.zero,Vector2.zero,Vector2.zero);
        }
        public void Face(Vector3 a, Vector3 b, Vector3 d, Vector3 e, Color color, Vector2 ua, Vector2 ub, Vector2 ud, Vector2 ue)
        {
            while (subs.Count <= sub) subs.Add(new List<int>());
            List<int> t = subs[sub];
            int k = v.Count;
            Vector3 normal = Vector3.Cross(b-a,d-a).normalized;
            v.Add(a); v.Add(b); v.Add(d); v.Add(e);
            uv.Add(ua); uv.Add(ub); uv.Add(ud); uv.Add(ue);
            for (int i=0;i<4;i++) { n.Add(normal); c.Add(color); }
            t.Add(k); t.Add(k+1); t.Add(k+2); t.Add(k); t.Add(k+2); t.Add(k+3);
        }
        // Axis-aligned box from min/max corners; each face can take its own colour.
        public void Box(Vector3 min, Vector3 max, Color top, Color side, Color bottom)
        {
            Vector3[] a = new Vector3[8];
            for(int i=0;i<8;i++) a[i]=new Vector3((i&1)==0?min.x:max.x,(i&2)==0?min.y:max.y,(i&4)==0?min.z:max.z);
            Face(a[4],a[5],a[7],a[6],side); Face(a[1],a[0],a[2],a[3],side);
            Face(a[0],a[4],a[6],a[2],side); Face(a[5],a[1],a[3],a[7],side);
            Face(a[6],a[7],a[3],a[2],top); Face(a[0],a[1],a[5],a[4],bottom);
        }
        public void Box(Vector3 min, Vector3 max, Color color) { Box(min,max,color,color,color); }
        public Mesh Mesh(string name)
        {
            Mesh m = new Mesh { name=name };
            if (v.Count > 65000) m.indexFormat = UnityEngine.Rendering.IndexFormat.UInt32;
            m.SetVertices(v); m.SetNormals(n); m.SetColors(c); m.SetUVs(0,uv);
            m.subMeshCount = subs.Count;
            for (int i=0;i<subs.Count;i++) m.SetTriangles(subs[i],i);
            m.RecalculateBounds(); return m;
        }
    }
    static Color C(string hex) { Color result; ColorUtility.TryParseHtmlString("#"+hex,out result); return result; }

    static Mesh Save(Geo g,string name)
    {
        string path = Root+"/"+name+".asset";
        Mesh mesh = g.Mesh(name);
        Mesh old = AssetDatabase.LoadAssetAtPath<Mesh>(path);
        if (old == null) { AssetDatabase.CreateAsset(mesh,path); return mesh; }
        old.Clear(); old.indexFormat = mesh.indexFormat; old.vertices=mesh.vertices; old.normals=mesh.normals; old.colors=mesh.colors; old.uv=mesh.uv;
        old.subMeshCount = mesh.subMeshCount;
        for (int i=0;i<mesh.subMeshCount;i++) old.SetTriangles(mesh.GetTriangles(i),i);
        old.RecalculateBounds(); old.UploadMeshData(false); EditorUtility.SetDirty(old);
        Object.DestroyImmediate(mesh); return old;
    }

    static GameObject MeshObject(string name,Mesh mesh,Material mat,Transform parent)
    {
        return MeshObject(name,mesh,new[]{mat},parent);
    }
    static GameObject MeshObject(string name,Mesh mesh,Material[] mats,Transform parent)
    {
        GameObject go = new GameObject(name,typeof(MeshFilter),typeof(MeshRenderer));
        go.transform.SetParent(parent,false);
        go.GetComponent<MeshFilter>().sharedMesh = mesh;
        MeshRenderer r = go.GetComponent<MeshRenderer>();
        r.sharedMaterials = mats; r.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off; r.receiveShadows = false;
        return go;
    }

    static GameObject Child(string name,Transform parent,Vector3 pos)
    {
        GameObject go = new GameObject(name); go.transform.SetParent(parent,false); go.transform.localPosition = pos; return go;
    }

    static void BoxCollider(string name,Transform parent,Vector3 min,Vector3 max,bool trigger=false)
    {
        GameObject go = Child(name,parent,(min+max)*0.5f);
        BoxCollider b = go.AddComponent<BoxCollider>(); b.size = max-min; b.isTrigger = trigger;
    }

    // ---------- Procedural texture: one plate pattern shared by floor and walls ----------
    // 64x64 texture = 2x2 raised squares; it repeats every PlateTile metres so each square is 0.5m.
    const int PlateTex = 64;
    public const float PlateTile = 1f;

    // Grey plate (tinted per surface by vertex colour): flat background with recessed squares —
    // shaded top/left inner wall, lit bottom/right inner wall, slightly darker floor, rounded corners.
    static Texture2D PlateTexture()
    {
        Texture2D t = new Texture2D(PlateTex,PlateTex,TextureFormat.RGB24,false);
        const int cell=PlateTex/2, margin=6, rim=2; // margin 6 -> 20px squares with a 12px gap
        const float background=0.80f, face=0.76f, lit=0.88f, shade=0.67f, rimLight=0.84f;
        for (int y=0;y<PlateTex;y++) for (int x=0;x<PlateTex;x++)
        {
            int lx=x%cell, ly=y%cell;
            int x0=margin, x1=cell-1-margin, y0=margin, y1=cell-1-margin;
            float v=background;
            bool inside=lx>=x0 && lx<=x1 && ly>=y0 && ly<=y1;
            bool corner=(lx==x0||lx==x1)&&(ly==y0||ly==y1);
            if (inside && !corner)
            {
                int dl=lx-x0, dr=x1-lx, db=ly-y0, dt=y1-ly;
                int edge=Mathf.Min(Mathf.Min(dl,dr),Mathf.Min(db,dt));
                // Recessed: the top/left inner wall is in shadow, the bottom/right inner wall catches the light.
                if (edge<rim) v=(dt==edge || dl==edge) && !(db==edge || dr==edge) ? shade : lit;
                else v=face;
            }
            else if (lx==x1+1 && ly>=y0 && ly<y1 || ly==y0-1 && lx>x0 && lx<=x1+1) v=rimLight; // lit lip just outside the bottom/right edge
            t.SetPixel(x,y,new Color(v,v,v));
        }
        t.Apply(); return t;
    }

    static Texture2D SaveTexture(Texture2D tex,string name)
    {
        string path=Root+"/"+name+".png";
        File.WriteAllBytes(path,tex.EncodeToPNG());
        Object.DestroyImmediate(tex);
        AssetDatabase.ImportAsset(path);
        TextureImporter ti=(TextureImporter)AssetImporter.GetAtPath(path);
        ti.textureType=TextureImporterType.Default; ti.wrapMode=TextureWrapMode.Repeat; ti.filterMode=FilterMode.Bilinear;
        ti.mipmapEnabled=true; ti.anisoLevel=4; ti.maxTextureSize=64; ti.sRGBTexture=true;
        ti.SaveAndReimport();
        return AssetDatabase.LoadAssetAtPath<Texture2D>(path);
    }

    static Material TexturedMaterial(string name,Texture2D tex,float boost)
    {
        string path=Root+"/"+name+".mat";
        Shader shader=Shader.Find("OBP/TexturedVertexColor");
        Material m=AssetDatabase.LoadAssetAtPath<Material>(path);
        if (m==null) { m=new Material(shader); AssetDatabase.CreateAsset(m,path); }
        m.shader=shader; m.mainTexture=tex; m.SetFloat("_Boost",boost); EditorUtility.SetDirty(m);
        return m;
    }

    // Plate faces are ~0.79 grey and the material boosts x1.27, so these tints are the final face colours.
    static readonly Color FieldGreen=C("5ccf3c"), SafeIce=C("bde9ff"), WallOrange=C("d8742f");

    // ---------- Geometry ----------
    // Textured quad on a plane; UVs follow world metres so the plate pattern stays the same size everywhere.
    static void PlateQuad(Geo g,Vector3 a,Vector3 b,Vector3 d,Vector3 e,Color tint,Vector2 ua,Vector2 ub,Vector2 ud,Vector2 ue)
    {
        g.sub=0;
        g.Face(a,b,d,e,tint,ua/PlateTile,ub/PlateTile,ud/PlateTile,ue/PlateTile);
    }

    // One textured top quad per slab; dirt sides so the holes read as deep pits.
    static void GroundSlab(Geo g,float z0,float z1,Color tint)
    {
        Color dirt=C("8a5a35"), dirtDark=C("6b4329");
        PlateQuad(g,new Vector3(-HalfWidth,0,z0),new Vector3(-HalfWidth,0,z1),new Vector3(HalfWidth,0,z1),new Vector3(HalfWidth,0,z0),tint,
            new Vector2(-HalfWidth,z0),new Vector2(-HalfWidth,z1),new Vector2(HalfWidth,z1),new Vector2(HalfWidth,z0));
        g.sub=1;
        g.Box(new Vector3(-HalfWidth,-GroundDepth,z0),new Vector3(HalfWidth,-0.02f,z1),dirt,dirt,dirtDark);
        // Dirt strata on the pit faces.
        for (int i=1;i<4;i++)
        {
            float y=-i*1.6f;
            g.Face(new Vector3(-HalfWidth,y-0.25f,z0-0.01f),new Vector3(HalfWidth,y-0.25f,z0-0.01f),new Vector3(HalfWidth,y,z0-0.01f),new Vector3(-HalfWidth,y,z0-0.01f),dirtDark);
            g.Face(new Vector3(HalfWidth,y-0.25f,z1+0.01f),new Vector3(-HalfWidth,y-0.25f,z1+0.01f),new Vector3(-HalfWidth,y,z1+0.01f),new Vector3(HalfWidth,y,z1+0.01f),dirtDark);
        }
        // Grass lip along pit edges.
        g.Box(new Vector3(-HalfWidth,-0.35f,z0-0.02f),new Vector3(HalfWidth,-0.02f,z0+0.001f),C("4fae3e"));
        g.Box(new Vector3(-HalfWidth,-0.35f,z1-0.001f),new Vector3(HalfWidth,-0.02f,z1+0.02f),C("4fae3e"));
    }

    static Geo Ground()
    {
        Geo g=new Geo();
        GroundSlab(g,SafeStart,Hole1Start,SafeIce);
        GroundSlab(g,Hole1End,Hole2Start,FieldGreen);
        GroundSlab(g,Hole2End,FieldEnd,FieldGreen);
        g.sub=1;
        // Safe zone border stripe.
        g.Box(new Vector3(-HalfWidth,0,Hole1Start-0.6f),new Vector3(HalfWidth,0.03f,Hole1Start-0.2f),C("ffffff"));
        // Pit floors.
        foreach (Vector2 hole in new[]{new Vector2(Hole1Start,Hole1End),new Vector2(Hole2Start,Hole2End)})
            g.Box(new Vector3(-HalfWidth,-GroundDepth-0.3f,hole.x),new Vector3(HalfWidth,-GroundDepth,hole.y),C("2c1c12"));
        return g;
    }

    const float WallThickness = 1f;

    static void PlateWall(Geo g,Vector3 origin,Vector3 along,float length,Vector3 outward)
    {
        Vector3 up=Vector3.up, inward=-outward;
        float bottom=-GroundDepth;
        // Body slab reaches the pit floor so the holes never show a gap under the wall.
        g.sub=1;
        Vector3 p0=origin+outward*WallThickness+up*bottom, p1=origin+along*length+up*(WallHeight-0.01f);
        g.Box(Vector3.Min(p0,p1),Vector3.Max(p0,p1),WallOrange*0.8f);
        // Inner face: orange plates.
        Vector3 q0=origin+up*bottom+inward*0.01f, q1=origin+along*length+up*bottom+inward*0.01f;
        Vector3 q2=origin+along*length+up*WallHeight+inward*0.01f, q3=origin+up*WallHeight+inward*0.01f;
        Vector2 u0=new Vector2(0,bottom), u1=new Vector2(length,bottom), u2=new Vector2(length,WallHeight), u3=new Vector2(0,WallHeight);
        if (Vector3.Dot(Vector3.Cross(q1-q0,q3-q0),inward)>0) PlateQuad(g,q0,q1,q2,q3,WallOrange,u0,u1,u2,u3);
        else PlateQuad(g,q1,q0,q3,q2,WallOrange,u1,u0,u3,u2);
        // Top: a green plate surface like the floor, no trim.
        Vector3 t0=origin+up*WallHeight+inward*0.01f, t1=origin+along*length+up*WallHeight+inward*0.01f;
        Vector3 t2=t1+outward*(WallThickness+0.01f), t3=t0+outward*(WallThickness+0.01f);
        Vector2 w0=new Vector2(Vector3.Dot(t0,along),Vector3.Dot(t0,outward)), w1=new Vector2(Vector3.Dot(t1,along),Vector3.Dot(t1,outward));
        Vector2 w2=new Vector2(Vector3.Dot(t2,along),Vector3.Dot(t2,outward)), w3=new Vector2(Vector3.Dot(t3,along),Vector3.Dot(t3,outward));
        if (Vector3.Cross(t1-t0,t3-t0).y>0) PlateQuad(g,t0,t1,t2,t3,FieldGreen,w0,w1,w2,w3);
        else PlateQuad(g,t1,t0,t3,t2,FieldGreen,w1,w0,w3,w2);
    }

    static Geo Walls()
    {
        Geo g=new Geo();
        float len=FieldEnd-SafeStart;
        PlateWall(g,new Vector3(-HalfWidth,0,SafeStart),Vector3.forward,len,Vector3.left);
        PlateWall(g,new Vector3(HalfWidth,0,SafeStart),Vector3.forward,len,Vector3.right);
        PlateWall(g,new Vector3(-HalfWidth,0,FieldEnd),Vector3.right,HalfWidth*2,Vector3.forward);
        PlateWall(g,new Vector3(-HalfWidth,0,SafeStart),Vector3.right,HalfWidth*2,Vector3.back);
        return g;
    }

    // ---------- Realistic ice block ----------
    // Irregular faceted chunk around a monster with jagged top and crystal shards, flat-shaded.
    // Vertex colour R = per-facet brightness, uv = crack-noise coords, uv2.y = height 0..1 (drives bottom-up fill).
    sealed class IceMesh
    {
        public readonly List<Vector3> v = new List<Vector3>();
        public readonly List<Vector3> n = new List<Vector3>();
        public readonly List<Color> c = new List<Color>();
        public readonly List<Vector2> uv = new List<Vector2>(), uv2 = new List<Vector2>();
        public readonly List<int> t = new List<int>();
        public float height = 1f;
        public System.Random rng;
        float R() { return (float)rng.NextDouble(); }
        public void Tri(Vector3 a, Vector3 b, Vector3 d)
        {
            Vector3 normal = Vector3.Cross(b - a, d - a).normalized;
            float shade = 0.55f + 0.45f * R();
            foreach (Vector3 p in new[] { a, b, d })
            {
                t.Add(v.Count); v.Add(p); n.Add(normal); c.Add(new Color(shade, shade, shade, 1f));
                uv.Add(new Vector2((p.x + p.z) * 0.9f, p.y * 0.9f));
                uv2.Add(new Vector2(0f, Mathf.Clamp01(p.y / height)));
            }
        }
        public void Quad(Vector3 a, Vector3 b, Vector3 d, Vector3 e) { Tri(a, b, d); Tri(a, d, e); }
        // Pointed hexagonal crystal from `root` along `dir`.
        public void Shard(Vector3 root, Vector3 dir, float length, float radius)
        {
            dir.Normalize();
            Vector3 side = Vector3.Cross(dir, Mathf.Abs(dir.y) > 0.9f ? Vector3.right : Vector3.up).normalized;
            Vector3 up = Vector3.Cross(side, dir);
            Vector3[] b = new Vector3[6], m = new Vector3[6];
            for (int k = 0; k < 6; k++)
            {
                float a = k * Mathf.PI / 3f;
                Vector3 o = (side * Mathf.Cos(a) + up * Mathf.Sin(a)) * radius;
                b[k] = root + o; m[k] = root + dir * (length * 0.72f) + o * 0.85f;
            }
            Vector3 tip = root + dir * length;
            for (int k = 0; k < 6; k++)
            {
                int k2 = (k + 1) % 6;
                Quad(b[k], b[k2], m[k2], m[k]);
                Tri(m[k], m[k2], tip);
            }
        }
        public Mesh Build(string name)
        {
            Mesh mesh = new Mesh { name = name };
            mesh.SetVertices(v); mesh.SetNormals(n); mesh.SetColors(c); mesh.SetUVs(0, uv); mesh.SetUVs(1, uv2); mesh.SetTriangles(t, 0);
            mesh.RecalculateBounds(); return mesh;
        }
    }

    static Mesh IceChunk(Vector3 size, int seed, string name)
    {
        IceMesh g = new IceMesh { rng = new System.Random(seed) };
        System.Func<float> R = () => (float)g.rng.NextDouble();
        float rx = size.x * 0.5f * 1.12f, rz = size.z * 0.5f * 1.12f, h = size.y;
        g.height = h * 1.12f;
        const int sides = 11;
        float[] ringY = { 0f, h * 0.3f, h * 0.62f, h * 0.88f };
        float[] ringScale = { 1.06f, 1.0f, 0.97f, 0.86f };
        float[] wobble = new float[sides];
        for (int i = 0; i < sides; i++) wobble[i] = 0.88f + 0.24f * R();
        Vector3[,] ring = new Vector3[ringY.Length, sides];
        for (int r = 0; r < ringY.Length; r++)
            for (int i = 0; i < sides; i++)
            {
                float a = (i + (r % 2) * 0.35f) / sides * Mathf.PI * 2f;
                float s = ringScale[r] * wobble[i] * (0.94f + 0.12f * R());
                float y = r == 0 ? 0f : ringY[r] + (R() - 0.5f) * h * 0.08f;
                ring[r, i] = new Vector3(Mathf.Cos(a) * rx * s, y, Mathf.Sin(a) * rz * s);
            }
        // Facetted walls.
        for (int r = 0; r < ringY.Length - 1; r++)
            for (int i = 0; i < sides; i++)
            {
                int j = (i + 1) % sides;
                g.Quad(ring[r, i], ring[r + 1, i], ring[r + 1, j], ring[r, j]);
            }
        // Jagged top: each top edge rises to a peak; a raised centre ties them together.
        Vector3 centre = new Vector3((R() - 0.5f) * rx * 0.3f, h * 1.05f, (R() - 0.5f) * rz * 0.3f);
        int last = ringY.Length - 1;
        for (int i = 0; i < sides; i++)
        {
            int j = (i + 1) % sides;
            Vector3 mid = (ring[last, i] + ring[last, j]) * 0.5f;
            Vector3 peak = Vector3.Lerp(mid, centre, 0.35f) + Vector3.up * h * (0.04f + 0.1f * R());
            g.Tri(ring[last, i], peak, ring[last, j]);
            g.Tri(ring[last, i], centre, peak);
            g.Tri(peak, centre, ring[last, j]);
        }
        // Bottom cap so the block is closed.
        for (int i = 0; i < sides; i++) g.Tri(Vector3.zero, ring[0, i], ring[0, (i + 1) % sides]);
        // Crystal shards around the base (pointing out and up) and a few on top.
        for (int k = 0; k < 8; k++)
        {
            float a = (k + R() * 0.6f) / 8f * Mathf.PI * 2f;
            Vector3 outDir = new Vector3(Mathf.Cos(a), 0f, Mathf.Sin(a));
            Vector3 root = new Vector3(outDir.x * rx * 0.95f, h * 0.05f * R(), outDir.z * rz * 0.95f);
            g.Shard(root, outDir * (0.5f + 0.4f * R()) + Vector3.up * (0.7f + 0.5f * R()), 0.35f + 0.55f * R() * Mathf.Min(1f, h / 2f), 0.09f + 0.08f * R());
        }
        for (int k = 0; k < 3; k++)
        {
            Vector3 root = centre + new Vector3((R() - 0.5f) * rx * 0.8f, -h * 0.08f, (R() - 0.5f) * rz * 0.8f);
            g.Shard(root, new Vector3((R() - 0.5f) * 0.8f, 1f, (R() - 0.5f) * 0.8f), 0.4f + 0.5f * R(), 0.1f + 0.07f * R());
        }
        return g.Build(name);
    }

    static Mesh SaveIce(Mesh mesh, string name)
    {
        string path = Root + "/" + name + ".asset";
        Mesh old = AssetDatabase.LoadAssetAtPath<Mesh>(path);
        if (old == null) { AssetDatabase.CreateAsset(mesh, path); return mesh; }
        // Assign through the Mesh API (not CopySerialized) so renderers already using the asset refresh their GPU data.
        old.Clear(); old.vertices = mesh.vertices; old.normals = mesh.normals; old.colors = mesh.colors;
        old.uv = mesh.uv; old.uv2 = mesh.uv2; old.triangles = mesh.triangles;
        old.RecalculateBounds(); old.UploadMeshData(false);
        Object.DestroyImmediate(mesh); EditorUtility.SetDirty(old); return old;
    }

    static Material IceBlockMaterial()
    {
        Material m = FreezeMaterial("IceBlock", Shader.Find("OBP/IceBlock"));
        m.SetTexture("_Crack", AssetDatabase.LoadAssetAtPath<Texture2D>("Assets/01 RESOURCES/Wave/Wave_Voronoi.png"));
        m.SetFloat("_Fill", 1.05f);
        EditorUtility.SetDirty(m);
        return m;
    }

    static Material FreezeMaterial(string name,Shader shader)
    {
        string path=FreezeRoot+"/"+name+".mat";
        Material m=AssetDatabase.LoadAssetAtPath<Material>(path);
        if (m==null) { m=new Material(shader); AssetDatabase.CreateAsset(m,path); }
        m.shader=shader; return m;
    }

    // Vertex-colour voxel models share one icy material; textured ones get a tinted copy.
    static Material FrozenFor(Material source)
    {
        if (source.shader.name=="OBP/VoxelPalette" || source.shader.name=="OBP/LiriliVertexColor")
        {
            Material ice=FreezeMaterial("Frozen_VertexColor",Shader.Find("OBP/VoxelPalette"));
            ice.SetFloat("_Freeze",0.85f); ice.SetColor("_Tint",Color.white); EditorUtility.SetDirty(ice); return ice;
        }
        Material tinted=FreezeMaterial("Frozen_"+source.name,source.shader);
        tinted.CopyPropertiesFromMaterial(source);
        tinted.color=C("8fd8ff");
        EditorUtility.SetDirty(tinted); return tinted;
    }


    [MenuItem("Tools/Freeze Brainrot/Build Level")]
    public static string Build()
    {
        Directory.CreateDirectory(Root);
        AssetDatabase.Refresh();
        Material mat=AssetDatabase.LoadAssetAtPath<Material>(SharedMaterial);

        GameObject old=GameObject.Find("Level");
        if (old!=null) Object.DestroyImmediate(old);
        Transform level=new GameObject("Level").transform;

        Material plateMat=TexturedMaterial("Level_Plate",SaveTexture(PlateTexture(),"Tex_Plate"),1.27f);
        Transform ground=MeshObject("Ground",Save(Ground(),"Ground"),new[]{plateMat,mat},level).transform;
        BoxCollider("Col_Safe",ground,new Vector3(-HalfWidth,-GroundDepth,SafeStart),new Vector3(HalfWidth,0,Hole1Start));
        BoxCollider("Col_Ledge",ground,new Vector3(-HalfWidth,-GroundDepth,Hole1End),new Vector3(HalfWidth,0,Hole2Start));
        BoxCollider("Col_Field",ground,new Vector3(-HalfWidth,-GroundDepth,Hole2End),new Vector3(HalfWidth,0,FieldEnd));

        Transform walls=MeshObject("Walls",Save(Walls(),"Walls"),new[]{plateMat,mat},level).transform;
        BoxCollider("Col_Left",walls,new Vector3(-HalfWidth-WallThickness,-GroundDepth,SafeStart),new Vector3(-HalfWidth,WallHeight+3f,FieldEnd));
        BoxCollider("Col_Right",walls,new Vector3(HalfWidth,-GroundDepth,SafeStart),new Vector3(HalfWidth+WallThickness,WallHeight+3f,FieldEnd));
        BoxCollider("Col_Back",walls,new Vector3(-HalfWidth,-GroundDepth,FieldEnd),new Vector3(HalfWidth,WallHeight+3f,FieldEnd+WallThickness));
        BoxCollider("Col_Front",walls,new Vector3(-HalfWidth,-GroundDepth,SafeStart-WallThickness),new Vector3(HalfWidth,WallHeight+3f,SafeStart));

        // Kill volumes inside each pit: falling below the rim resets the run.
        Transform pits=Child("Pits",level,Vector3.zero).transform;
        BoxCollider("KillZone_Hole1",pits,new Vector3(-HalfWidth,-GroundDepth,Hole1Start),new Vector3(HalfWidth,-1.6f,Hole1End),true);
        BoxCollider("KillZone_Hole2",pits,new Vector3(-HalfWidth,-GroundDepth,Hole2Start),new Vector3(HalfWidth,-1.6f,Hole2End),true);
        // Solid pit floors (matching the visible dirt floor) so a fallen player lands instead of dropping out of the map.
        BoxCollider("Col_PitFloor1",pits,new Vector3(-HalfWidth,-GroundDepth-1f,Hole1Start),new Vector3(HalfWidth,-GroundDepth,Hole1End));
        BoxCollider("Col_PitFloor2",pits,new Vector3(-HalfWidth,-GroundDepth-1f,Hole2Start),new Vector3(HalfWidth,-GroundDepth,Hole2End));

        Directory.CreateDirectory(FreezeRoot);
        Material iceMat=IceBlockMaterial();
        Transform monsters=Child("Monsters",level,Vector3.zero).transform;
        for (int i=0;i<Monsters.Length;i++)
        {
            Transform slot=Child("Slot_"+Monsters[i],monsters,MonsterPos[i]).transform;
            GameObject prefab=AssetDatabase.LoadAssetAtPath<GameObject>(MonsterRoot+MonsterPrefabs[i]+".prefab");
            GameObject m=(GameObject)PrefabUtility.InstantiatePrefab(prefab,slot);
            m.transform.localRotation=Quaternion.Euler(0,MonsterYaw[i],0);
            m.transform.localPosition=Vector3.zero;
            // Measure in slot space (slot is still unrotated here).
            Renderer[] rs=m.GetComponentsInChildren<Renderer>();
            Bounds b=rs[0].bounds; foreach (Renderer r in rs) b.Encapsulate(r.bounds);
            b.center-=slot.position;
            // Monsters stand directly on the floor, centred on the slot.
            m.transform.localPosition=new Vector3(-b.center.x,-b.min.y,-b.center.z);
            // Solid body so the player bumps into the monster instead of walking through it.
            BoxCollider("Col_Body",slot,new Vector3(-b.extents.x,0,-b.extents.z),new Vector3(b.extents.x,b.size.y,b.extents.z));

            Vector3 iceSize=b.size+new Vector3(0.3f,0.25f,0.3f);
            GameObject ice=MeshObject("IceBlock",SaveIce(IceChunk(iceSize,1234+i*97,"Ice_"+Monsters[i]),"Ice_"+Monsters[i]),iceMat,slot);
            ice.transform.localPosition=Vector3.zero;
            ice.SetActive(false);
            Transform aim=Child("AimPoint",slot,new Vector3(0,b.size.y*0.5f,0)).transform;
            Child("LabelAnchor",slot,new Vector3(0,b.size.y+0.6f,0));

            FreezableMonster fm=slot.gameObject.AddComponent<FreezableMonster>();
            fm.animator=m.GetComponentInChildren<Animator>();
            fm.renderers=rs;
            fm.normalMaterials=new Material[rs.Length]; fm.frozenMaterials=new Material[rs.Length];
            for (int r=0;r<rs.Length;r++) { fm.normalMaterials[r]=rs[r].sharedMaterial; fm.frozenMaterials[r]=FrozenFor(rs[r].sharedMaterial); }
            fm.iceRenderer=ice.GetComponent<MeshRenderer>(); fm.aimPoint=aim; fm.priceK=MonsterPriceK[i];
            slot.localRotation=Quaternion.Euler(0,180,0);
        }

        // Wave root moves; TsunamiBuilder hangs the breaking-wave mesh and spray particles under it.
        Transform wave=Child("Wave",level,new Vector3(0,0,WaveStartZ)).transform;
        TsunamiBuilder.Result tsunami=TsunamiBuilder.Build(wave,HalfWidth*2f-0.2f);
        WaveHazard hazard=wave.gameObject.AddComponent<WaveHazard>();
        hazard.startPoint=Child("WaveStart",level,new Vector3(0,0,WaveStartZ)).transform;
        hazard.endPoint=Child("WaveEnd",level,new Vector3(0,0,WaveEndZ)).transform;
        // Hit anywhere the wave covers, from the curling lip to the back slope: only across hole 1 is safe.
        hazard.hitMinZ=-TsunamiBuilder.FrontReach; hazard.hitMaxZ=TsunamiBuilder.BackZ; hazard.hitHeight=TsunamiBuilder.Height;
        hazard.hiddenDepth=TsunamiBuilder.Height+3f;
        hazard.effects=tsunami.effects;
        Child("SpawnPoint",level,new Vector3(0,0,SpawnZ));

        EditorSceneManager.MarkSceneDirty(level.gameObject.scene);
        AssetDatabase.SaveAssets();
        FreezeGameplaySetup.Wire();
        Mesh gm=ground.GetComponent<MeshFilter>().sharedMesh, wm=walls.GetComponent<MeshFilter>().sharedMesh;
        return "Level built. ground verts="+gm.vertexCount+" walls verts="+wm.vertexCount;
    }
}

using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;

// Hand-authored voxel freeze blaster. Grip at origin, barrel points +Z.
public static class FreezeGunBuilder
{
    public const string Root = "Assets/01 RESOURCES/FreezeGun";
    const string SharedMaterial = "Assets/01 RESOURCES/BrainrotVoxel/Materials/VoxelShared.mat";
    public const float MuzzleZ = 0.66f, BarrelY = 0.06f;

    sealed class Geo
    {
        public readonly List<Vector3> v = new List<Vector3>();
        public readonly List<Vector3> n = new List<Vector3>();
        public readonly List<Color> c = new List<Color>();
        public readonly List<int> t = new List<int>();
        void Face(Vector3 a, Vector3 b, Vector3 d, Vector3 e, Color color)
        {
            int k = v.Count;
            Vector3 normal = Vector3.Cross(b-a,d-a).normalized;
            v.Add(a); v.Add(b); v.Add(d); v.Add(e);
            for (int i=0;i<4;i++) { n.Add(normal); c.Add(color); }
            t.Add(k); t.Add(k+1); t.Add(k+2); t.Add(k); t.Add(k+2); t.Add(k+3);
        }
        public void Box(float x,float y,float z,float w,float h,float depth,Color color,float rx=0,float rz=0)
        {
            Vector3 p = new Vector3(x,y,z), s = new Vector3(w,h,depth)*0.5f;
            Quaternion q = Quaternion.Euler(rx,0,rz);
            Vector3[] a = new Vector3[8];
            for(int i=0;i<8;i++) a[i]=p+q*new Vector3((i&1)==0?-s.x:s.x,(i&2)==0?-s.y:s.y,(i&4)==0?-s.z:s.z);
            Face(a[4],a[5],a[7],a[6],color); Face(a[1],a[0],a[2],a[3],color);
            Face(a[0],a[4],a[6],a[2],color); Face(a[5],a[1],a[3],a[7],color);
            Face(a[6],a[7],a[3],a[2],color); Face(a[0],a[1],a[5],a[4],color);
        }
        public Mesh Mesh(string name)
        {
            Mesh m = new Mesh { name=name }; m.SetVertices(v); m.SetNormals(n); m.SetColors(c); m.SetTriangles(t,0); m.RecalculateBounds(); return m;
        }
    }
    static Color C(string hex) { Color result; ColorUtility.TryParseHtmlString("#"+hex,out result); return result; }

    // Six-armed snowflake decal on a side face (plane x = sx).
    static void Snowflake(Geo g,float sx,float y,float z,float size,Color color)
    {
        float th = size*0.16f;
        for (int i=0;i<3;i++) g.Box(sx,y,z,0.012f,size,th,color,i*60f);
        for (int i=0;i<6;i++)
        {
            Quaternion q = Quaternion.Euler(i*60f,0,0);
            Vector3 tip = new Vector3(sx,y,z) + q*new Vector3(0,size*0.32f,0);
            g.Box(tip.x,tip.y,tip.z,0.014f,size*0.22f,th*0.8f,color,i*60f+45f);
            g.Box(tip.x,tip.y,tip.z,0.014f,size*0.22f,th*0.8f,color,i*60f-45f);
        }
    }

    static Geo Gun()
    {
        Geo g = new Geo();
        Color white=C("eef8ff"), frost=C("bfe6fb"), blue=C("2f8fe0"), deep=C("1b4f9c"), cyan=C("6ff1ff"), glow=C("d8ffff"), grip=C("26375a");
        // Grip and trigger guard.
        g.Box(0,-0.07f,-0.01f,0.07f,0.17f,0.09f,grip,-12f);
        g.Box(0,-0.03f,0.07f,0.05f,0.025f,0.12f,deep);
        g.Box(0,-0.06f,0.12f,0.05f,0.06f,0.025f,deep);
        // Main body.
        g.Box(0,BarrelY,0.10f,0.17f,0.15f,0.46f,white);
        g.Box(0,BarrelY+0.085f,0.08f,0.12f,0.03f,0.36f,frost);
        g.Box(0,BarrelY-0.08f,0.18f,0.12f,0.02f,0.26f,frost);
        // Rear stock.
        g.Box(0,BarrelY+0.01f,-0.19f,0.13f,0.13f,0.14f,frost);
        g.Box(0,BarrelY+0.01f,-0.27f,0.15f,0.15f,0.03f,blue);
        // Side coolant drums with snowflake decals.
        foreach (int s in new[]{-1,1})
        {
            g.Box(s*0.10f,BarrelY,0.06f,0.05f,0.19f,0.19f,blue);
            g.Box(s*0.10f,BarrelY,0.06f,0.055f,0.14f,0.14f,cyan);
            Snowflake(g,s*0.129f,BarrelY,0.06f,0.12f,white);
            // Glowing side stripes.
            g.Box(s*0.087f,BarrelY+0.035f,0.27f,0.01f,0.025f,0.20f,cyan);
            g.Box(s*0.087f,BarrelY-0.035f,0.27f,0.01f,0.025f,0.20f,cyan);
        }
        // Ice tank on top.
        g.Box(0,BarrelY+0.15f,0.05f,0.09f,0.09f,0.20f,cyan);
        g.Box(0,BarrelY+0.15f,0.05f,0.10f,0.10f,0.03f,white);
        g.Box(0,BarrelY+0.15f,-0.04f,0.10f,0.10f,0.02f,blue);
        g.Box(0,BarrelY+0.15f,0.14f,0.10f,0.10f,0.02f,blue);
        // Ice crystals.
        g.Box(-0.02f,BarrelY+0.22f,0.02f,0.03f,0.07f,0.03f,glow,0,18f);
        g.Box(0.02f,BarrelY+0.21f,0.08f,0.025f,0.05f,0.025f,frost,0,-22f);
        // Barrel.
        g.Box(0,BarrelY,0.42f,0.12f,0.12f,0.18f,blue);
        for (int i=0;i<3;i++) g.Box(0,BarrelY,0.36f+i*0.06f,0.135f,0.135f,0.02f,deep);
        g.Box(0,BarrelY,0.54f,0.10f,0.10f,0.06f,frost);
        // Wide muzzle ring with glowing core.
        g.Box(0,BarrelY,0.60f,0.19f,0.19f,0.06f,white);
        g.Box(0,BarrelY,0.62f,0.21f,0.03f,0.03f,blue);
        g.Box(0,BarrelY,0.62f,0.03f,0.21f,0.03f,blue);
        g.Box(0,BarrelY,MuzzleZ-0.025f,0.12f,0.12f,0.02f,cyan);
        g.Box(0,BarrelY,MuzzleZ-0.014f,0.07f,0.07f,0.01f,glow);
        return g;
    }

    // Unit-length ice beam along +Z (0..1), 1 unit wide; FreezeGun scales it to the target distance.
    // Vertex alpha drives the translucent IceShell material.
    static Geo Beam()
    {
        Geo g = new Geo();
        Color glow=C("3fd8ff"); glow.a=0.45f;
        Color mid=C("8ff0ff"); mid.a=0.7f;
        Color core=C("ffffff"); core.a=0.95f;
        g.Box(0,0,0.5f,1f,1f,1f,glow);
        g.Box(0,0,0.5f,0.55f,0.55f,1f,mid);
        g.Box(0,0,0.5f,0.25f,0.25f,1f,core);
        // Small frost sparkles along the beam.
        for (int i=0;i<8;i++) g.Box(((i%2)*2-1)*0.45f,((i/2)%2*2-1)*0.4f,0.06f+i*0.12f,0.18f,0.18f,0.02f,mid,0,45f);
        return g;
    }

    public static Mesh BuildBeamMesh()
    {
        Directory.CreateDirectory(Root);
        string path = Root+"/FreezeBeam.asset";
        Mesh mesh = Beam().Mesh("FreezeBeam");
        Mesh old = AssetDatabase.LoadAssetAtPath<Mesh>(path);
        if (old == null) { AssetDatabase.CreateAsset(mesh, path); return mesh; }
        old.Clear(); old.vertices=mesh.vertices; old.normals=mesh.normals; old.colors=mesh.colors; old.triangles=mesh.triangles;
        old.RecalculateBounds(); EditorUtility.SetDirty(old); Object.DestroyImmediate(mesh); return old;
    }

    [MenuItem("Tools/Brainrot Voxel/Build Freeze Gun")]
    public static string Build()
    {
        Directory.CreateDirectory(Root);
        AssetDatabase.Refresh();
        Material mat = AssetDatabase.LoadAssetAtPath<Material>(SharedMaterial);
        string meshPath = Root+"/FreezeGun.asset";
        Mesh mesh = Gun().Mesh("FreezeGun");
        Mesh old = AssetDatabase.LoadAssetAtPath<Mesh>(meshPath);
        if (old != null)
        {
            old.Clear(); old.vertices=mesh.vertices; old.normals=mesh.normals; old.colors=mesh.colors; old.triangles=mesh.triangles;
            old.RecalculateBounds(); old.UploadMeshData(false); EditorUtility.SetDirty(old);
            Object.DestroyImmediate(mesh); mesh = old;
        }
        else AssetDatabase.CreateAsset(mesh, meshPath);

        GameObject root = new GameObject("FreezeGun", typeof(MeshFilter), typeof(MeshRenderer));
        try
        {
            root.GetComponent<MeshFilter>().sharedMesh = mesh;
            MeshRenderer r = root.GetComponent<MeshRenderer>();
            r.sharedMaterial = mat; r.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off; r.receiveShadows = false;
            Transform muzzle = new GameObject("Muzzle").transform;
            muzzle.SetParent(root.transform, false);
            muzzle.localPosition = new Vector3(0, BarrelY, MuzzleZ);
            PrefabUtility.SaveAsPrefabAsset(root, Root+"/FreezeGun.prefab");
        }
        finally { Object.DestroyImmediate(root); }
        AssetDatabase.SaveAssets();
        return "FreezeGun: "+mesh.vertexCount+" verts, "+mesh.triangles.Length/3+" tris";
    }
}

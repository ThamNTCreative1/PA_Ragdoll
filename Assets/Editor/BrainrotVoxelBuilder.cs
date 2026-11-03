using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Text;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;
using OBP.BrainrotVoxel;

// Hand-authored cuboid geometry. Source ZIP meshes/textures are not embedded.
public static class BrainrotVoxelBuilder
{
    public const string Root = "Assets/01 RESOURCES/BrainrotVoxel";
    const string Output = "ArtOutput/BrainrotVoxel";
    static readonly Color Ink = C("172332"), White = C("fff4dc"), Black = C("101b28");
    static readonly string[] Names = { "TralaleroTralala", "BallerinaCappuccina", "BombardiroCrocodilo", "LiriliLarila", "TungTungSahur" };
    static readonly string[] Labels = { "TRALALERO TRALALA", "BALLERINA CAPPUCCINA", "BOMBARDIRO CROCODILO", "LIRILI LARILA", "TUNG TUNG SAHUR" };
    static readonly string[] Accents = { "4cc7ed", "ee8cbe", "a4c775", "84ce9e", "e4ad6b" };

    sealed class Geo
    {
        public readonly List<Vector3> v = new List<Vector3>();
        public readonly List<Vector3> n = new List<Vector3>();
        public readonly List<Color> c = new List<Color>();
        public readonly List<int> t = new List<int>();
        public void Face(Vector3 a, Vector3 b, Vector3 d, Vector3 e, Color color)
        {
            int k = v.Count;
            Vector3 normal = Vector3.Cross(b-a,d-a).normalized;
            v.Add(a); v.Add(b); v.Add(d); v.Add(e);
            for (int i=0;i<4;i++) { n.Add(normal); c.Add(color); }
            t.Add(k); t.Add(k+1); t.Add(k+2); t.Add(k); t.Add(k+2); t.Add(k+3);
        }
        public void Box(float x,float y,float z,float w,float h,float depth,Color color,float rz=0,float ry=0)
        {
            Vector3 p = new Vector3(x,y,z), s = new Vector3(w,h,depth)*0.5f;
            Quaternion q = Quaternion.Euler(0,ry,rz);
            Vector3[] a = new Vector3[8];
            for(int i=0;i<8;i++) a[i]=p+q*new Vector3((i&1)==0?-s.x:s.x,(i&2)==0?-s.y:s.y,(i&4)==0?-s.z:s.z);
            Face(a[4],a[5],a[7],a[6],color); Face(a[1],a[0],a[2],a[3],color);
            Face(a[0],a[4],a[6],a[2],color); Face(a[5],a[1],a[3],a[7],color);
            Face(a[6],a[7],a[3],a[2],color); Face(a[0],a[1],a[5],a[4],color);
        }
        public void Pixel(float x,float y,float z,float w,float h,Color color)
        {
            Face(new Vector3(x-w/2,y-h/2,z),new Vector3(x+w/2,y-h/2,z),new Vector3(x+w/2,y+h/2,z),new Vector3(x-w/2,y+h/2,z),color);
        }
        public void ScaleToHeight(float height)
        {
            Bounds bounds = Bounds(); float scale = height/bounds.size.y;
            for(int i=0;i<v.Count;i++) v[i]=new Vector3(v[i].x-bounds.center.x,v[i].y-bounds.min.y,v[i].z-bounds.center.z)*scale;
        }
        public Bounds Bounds()
        {
            Bounds b = new Bounds(v[0],Vector3.zero); foreach(Vector3 p in v)b.Encapsulate(p); return b;
        }
        public Mesh Mesh(string name)
        {
            Mesh m = new Mesh { name=name }; m.SetVertices(v); m.SetNormals(n); m.SetColors(c); m.SetTriangles(t,0); m.RecalculateBounds(); return m;
        }
    }
    static Color C(string hex) { Color result; ColorUtility.TryParseHtmlString("#"+hex,out result); return result; }
    static void Eyes(Geo g,float x,float y,float z,float size,bool lashes=false)
    {
        foreach(int sign in new[]{-1,1})
        {
            g.Box(sign*x,y,z,size,size*1.15f,0.08f,White);
            g.Pixel(sign*x-sign*size*0.10f,y-size*0.05f,z+0.041f,size*0.46f,size*0.67f,Ink);
            g.Pixel(sign*x-sign*size*0.16f,y+size*0.16f,z+0.042f,size*0.15f,size*0.18f,Color.white);
            g.Box(sign*x,y+size*0.66f,z+0.015f,size*1.15f,0.055f,0.09f,Ink,sign*-8);
            if(lashes) for(int i=0;i<3;i++) g.Box(sign*(x+size*0.3f+i*0.055f),y+size*0.58f+i*0.02f,z+0.02f,0.04f,0.13f,0.05f,Ink,-sign*28);
        }
    }
    static void Sneaker(Geo g,float x,float y,float z,float scale,Color color)
    {
        g.Box(x,y+0.09f*scale,z+0.06f*scale,0.49f*scale,0.18f*scale,0.85f*scale,White);
        g.Box(x,y+0.245f*scale,z,0.46f*scale,0.19f*scale,0.76f*scale,color);
        g.Box(x,y+0.37f*scale,z-0.17f*scale,0.39f*scale,0.17f*scale,0.33f*scale,color);
        g.Box(x,y+0.22f*scale,z+0.40f*scale,0.43f*scale,0.11f*scale,0.06f*scale,C("cae8ef"));
        for(int i=0;i<3;i++)g.Box(x,y+(0.35f+i*0.035f)*scale,z+(0.18f-i*0.075f)*scale,0.26f*scale,0.035f*scale,0.045f*scale,Color.white);
        g.Pixel(x,y+0.1f*scale,z+0.486f*scale,0.29f*scale,0.035f*scale,C("769fb9"));
    }
    static Geo Shark()
    {
        Geo g = new Geo(); Color blue=C("539cba"), dark=C("357895"), belly=C("dce9df"), shoes=C("2475e4");
        g.Box(0,1.24f,-0.13f,1.05f,0.94f,1.64f,blue);
        g.Box(0,1.22f,0.73f,0.96f,0.71f,0.62f,blue);
        g.Box(0,1.13f,1.11f,0.78f,0.40f,0.26f,blue);
        g.Box(0,0.88f,0.4f,0.88f,0.25f,1.51f,belly);
        g.Box(0,0.98f,1.20f,0.70f,0.11f,0.13f,Ink);
        for(int i=0;i<5;i++)g.Box(-0.28f+i*0.14f,1.015f,1.275f,0.07f,0.09f,0.025f,White);
        g.Box(0,1.83f,-0.30f,0.17f,0.40f,0.57f,dark);
        g.Box(0,2.08f,-0.43f,0.13f,0.15f,0.28f,blue);
        g.Box(0,1.26f,-1.13f,0.54f,0.56f,0.49f,dark);
        g.Box(0,1.50f,-1.49f,0.18f,0.85f,0.25f,blue);
        g.Box(0,1.89f,-1.60f,0.14f,0.26f,0.35f,dark);
        g.Box(0,0.99f,-1.60f,0.16f,0.29f,0.33f,dark);
        foreach(int s in new[]{-1,1})
        {
            g.Box(s*0.67f,1.04f,-0.05f,0.48f,0.14f,0.70f,dark,0,s*20);
            g.Box(s*0.48f,0.59f,0.35f,0.23f,0.44f,0.27f,blue);
            Sneaker(g,s*0.48f,0,0.49f,1,shoes);
            // Gills on both sides; raised blocks stay readable in silhouette.
            for(int i=0;i<3;i++)g.Box(s*0.531f,1.22f,0.05f-i*0.17f,0.02f,0.30f,0.045f,dark);
        }
        g.Box(0,0.49f,-0.90f,0.21f,0.26f,0.23f,blue);
        Sneaker(g,0,0,-0.84f,0.91f,shoes);
        Eyes(g,0.37f,1.49f,1.03f,0.23f);
        g.Pixel(-0.22f,1.28f,1.246f,0.10f,0.04f,dark);g.Pixel(0.22f,1.28f,1.246f,0.10f,0.04f,dark);
        g.ScaleToHeight(2.25f); return g;
    }
    static Geo Ballerina()
    {
        Geo g=new Geo(); Color cream=C("f4dfb7"), rim=C("fff0d3"), pink=C("f29abc"), deep=C("c54b85"), coffee=C("744531");
        g.Box(0,2.11f,0,0.99f,0.84f,0.83f,cream);
        g.Box(0,1.68f,0,0.79f,0.13f,0.67f,cream);
        g.Box(0,2.55f,0,1.10f,0.12f,0.94f,rim);
        g.Box(0,2.617f,0,0.89f,0.025f,0.72f,coffee);
        g.Box(-0.12f,2.635f,0.03f,0.39f,0.015f,0.29f,C("d3a06c"));
        g.Box(0.12f,2.639f,0.10f,0.25f,0.015f,0.15f,rim);
        g.Box(0.14f,2.639f,-0.09f,0.11f,0.015f,0.24f,rim);
        // Square cup handle, open in the middle.
        g.Box(0.72f,2.35f,0,0.46f,0.14f,0.24f,rim);
        g.Box(0.72f,1.91f,0,0.46f,0.14f,0.24f,rim);
        g.Box(0.91f,2.13f,0,0.14f,0.44f,0.24f,rim);
        g.Box(0,1.36f,0,0.50f,0.48f,0.39f,pink);
        g.Box(0,1.1f,0,0.55f,0.12f,0.43f,deep);
        g.Box(0,0.98f,0,0.80f,0.16f,0.58f,pink);
        g.Box(0,0.83f,0,1.15f,0.16f,0.79f,C("f9b8d0"));
        g.Box(0,0.69f,0,1.43f,0.13f,0.95f,pink);
        for(int i=0;i<7;i++)g.Pixel(-0.60f+i*0.20f,0.69f,0.477f,0.045f,0.13f,C("ffe3ed"));
        foreach(int s in new[]{-1,1})
        {
            g.Box(s*0.64f,1.36f,0,0.60f,0.13f,0.15f,cream,s*24);
            g.Box(s*0.94f,1.53f,0.02f,0.19f,0.16f,0.17f,rim);
            g.Box(s*0.22f,0.40f,0,0.15f,0.51f,0.18f,cream,s*9);
            g.Box(s*0.27f,0.10f,0.09f,0.23f,0.20f,0.40f,deep,0,-s*13);
            g.Box(s*0.25f,0.29f,0.098f,0.17f,0.07f,0.025f,pink);
        }
        Eyes(g,0.26f,2.22f,0.438f,0.21f,true);
        g.Pixel(-0.34f,1.99f,0.419f,0.18f,0.09f,pink); g.Pixel(0.34f,1.99f,0.419f,0.18f,0.09f,pink);
        g.Pixel(0,1.98f,0.42f,0.13f,0.055f,deep); g.Pixel(0.03f,2.025f,0.42f,0.07f,0.04f,deep);
        g.Pixel(0,1.41f,0.199f,0.16f,0.10f,White);
        g.ScaleToHeight(2.5f); return g;
    }
    static Geo Crocodile()
    {
        Geo g=new Geo(); Color green=C("6b8f43"), dark=C("435d34"), light=C("99b75b"), metal=C("bac8b7");
        g.Box(0,0.97f,-0.20f,0.90f,0.66f,1.85f,green);
        g.Box(0,0.98f,0.82f,0.98f,0.63f,0.65f,green);
        g.Box(0,0.88f,1.40f,0.88f,0.36f,0.73f,light);
        g.Box(0,0.65f,1.38f,0.86f,0.13f,0.80f,C("d7d49a"));
        g.Box(0,0.737f,1.41f,0.89f,0.055f,0.78f,Ink);
        for(int i=0;i<6;i++)g.Box(-0.36f+i*0.145f,0.75f,1.805f,0.07f,0.10f,0.02f,White);
        foreach(int s in new[]{-1,1})
        {
            for(int i=0;i<4;i++)g.Box(s*0.454f,0.75f,1.08f+i*0.18f,0.02f,0.10f,0.07f,White);
            g.Box(s*0.28f,1.34f,0.81f,0.30f,0.21f,0.29f,dark);
            g.Box(s*1.10f,0.98f,-0.26f,1.42f,0.13f,0.69f,green,0,-s*8);
            g.Box(s*1.78f,1.07f,-0.43f,0.18f,0.25f,0.64f,dark);
            g.Box(s*1.12f,0.88f,0.15f,0.34f,0.34f,0.67f,dark);
            g.Box(s*1.12f,0.88f,0.51f,0.21f,0.21f,0.10f,metal);
            g.Box(s*1.12f,0.88f,0.58f,0.09f,0.79f,0.06f,Ink,24);
            g.Box(s*1.12f,0.88f,0.58f,0.79f,0.09f,0.06f,Ink,24);
            g.Box(s*1.12f,0.88f,0.63f,0.14f,0.14f,0.10f,C("d2bd77"));
            for(int j=0;j<2;j++)
            {
                g.Box(s*0.43f,0.40f,-0.55f+j*1.15f,0.24f,0.39f,0.30f,green,s*13);
                g.Box(s*0.52f,0.16f,-0.43f+j*1.15f,0.36f,0.25f,0.47f,dark);
                for(int k=0;k<3;k++) g.Box(s*0.52f-0.11f+k*0.11f,0.12f,-0.18f+j*1.15f,0.06f,0.09f,0.09f,White);
            }
            g.Box(s*0.64f,1.0f,-1.45f,0.85f,0.10f,0.43f,green,0,s*12);
        }
        g.Box(0,0.99f,-1.37f,0.51f,0.39f,0.62f,dark);
        g.Box(0,1.35f,-1.57f,0.13f,0.59f,0.43f,green);
        for(int i=0;i<4;i++)g.Box(0,1.35f,-0.75f+i*0.33f,0.20f,0.15f,0.18f,light);
        Eyes(g,0.29f,1.33f,1.0f,0.20f);
        g.Pixel(-0.25f,0.98f,1.771f,0.10f,0.06f,dark);g.Pixel(0.25f,0.98f,1.771f,0.10f,0.06f,dark);
        g.ScaleToHeight(1.75f);return g;
    }
    static Geo Lirili()
    {
        Geo g=new Geo(); Color cactus=C("69a875"), stripe=C("428659"), elephant=C("c0bb94"), shade=C("9e9e7d"), sandal=C("b78045");
        // Armless cactus-elephant: a single foreleg and a single hindleg on Z.
        g.Box(0,1.29f,-0.12f,0.79f,1.26f,1.18f,cactus);
        g.Box(0,1.88f,-0.12f,0.73f,0.18f,1.07f,cactus);
        for(int i=0;i<5;i++)g.Pixel(-0.32f+i*0.16f,1.20f,0.471f,0.045f,1.03f,stripe);
        foreach(float z in new[]{0.43f,-0.65f})
        {
            g.Box(0,0.64f,z,0.49f,0.82f,0.47f,cactus);
            for(int i=0;i<3;i++)g.Pixel(-0.16f+i*0.16f,0.62f,z+0.236f,0.035f,0.66f,stripe);
            g.Box(0,0.10f,z+0.12f,0.66f,0.20f,0.88f,sandal);
            g.Box(0,0.26f,z+0.12f,0.56f,0.17f,0.69f,elephant);
            g.Box(0,0.36f,z+0.28f,0.59f,0.09f,0.15f,C("e1b471"));
            g.Box(0,0.34f,z+0.01f,0.59f,0.11f,0.14f,C("e1b471"));
        }
        foreach(int s in new[]{-1,1})
        {
            g.Box(s*0.62f,2.13f,0.01f,0.44f,0.70f,0.25f,shade,0,s*10);
            g.Box(s*0.62f,2.13f,0.16f,0.30f,0.49f,0.04f,C("dbbd9c"),0,s*10);
            // Cactus needles as small ivory voxel flecks.
            for(int i=0;i<4;i++)g.Pixel(s*0.29f,0.85f+i*0.25f,0.473f,0.025f,0.06f,C("c7d6a1"));
        }
        g.Box(0,2.13f,0.10f,0.84f,0.72f,0.68f,elephant);
        g.Box(0,2.52f,0.05f,0.65f,0.10f,0.54f,shade);
        Eyes(g,0.25f,2.28f,0.46f,0.19f);
        g.Box(0,1.94f,0.54f,0.27f,0.54f,0.33f,shade);
        g.Box(0,1.61f,0.65f,0.23f,0.24f,0.34f,elephant);
        g.Box(0,1.46f,0.83f,0.23f,0.13f,0.24f,elephant);
        g.Box(0,1.55f,0.94f,0.23f,0.22f,0.14f,shade);
        for(int i=0;i<4;i++)g.Pixel(0,1.77f+i*0.11f,0.708f,0.23f,0.022f,C("848a70"));
        foreach(int s in new[]{-1,1}) {g.Box(s*0.25f,1.91f,0.52f,0.10f,0.27f,0.15f,White);g.Box(s*0.25f,1.81f,0.65f,0.10f,0.09f,0.26f,White);}
        g.ScaleToHeight(2.65f);return g;
    }
    static Geo Tung()
    {
        Geo g=new Geo(); Color wood=C("b7783e"), light=C("cc9453"), grain=C("8c542f"), dark=C("663d27");
        g.Box(0,1.65f,0,0.83f,1.57f,0.68f,wood);
        g.Box(0,2.46f,0,0.73f,0.09f,0.60f,light);
        g.Box(0,2.51f,0,0.50f,0.025f,0.39f,dark);
        g.Box(0,2.526f,0,0.33f,0.015f,0.22f,light);
        g.Box(0,2.537f,0,0.13f,0.01f,0.09f,grain);
        for(int i=0;i<7;i++)
        {
            float x=-0.36f+i*0.12f;
            g.Pixel(x,1.54f,0.341f,0.028f,1.27f,i%2==0?grain:light);
            g.Box(0.418f,1.55f,-0.27f+i*0.085f,0.006f,1.36f,0.023f,i%2==0?grain:light);
        }
        g.Pixel(-0.24f,1.31f,0.345f,0.13f,0.17f,dark);g.Pixel(-0.24f,1.31f,0.347f,0.06f,0.09f,wood);
        g.Pixel(0.23f,1.03f,0.345f,0.10f,0.12f,grain);
        foreach(int s in new[]{-1,1})
        {
            g.Box(s*0.23f,0.59f,0,0.16f,0.59f,0.19f,wood,s*5);
            g.Box(s*0.26f,0.14f,0.15f,0.30f,0.27f,0.53f,light);
            for(int i=0;i<3;i++)g.Pixel(s*0.26f-0.09f+i*0.09f,0.12f,0.417f,0.025f,0.15f,grain);
        }
        g.Box(-0.56f,1.39f,0,0.20f,0.65f,0.23f,wood,-14);
        g.Box(-0.66f,1.06f,0.08f,0.23f,0.24f,0.25f,light);
        g.Box(0.57f,1.39f,0.05f,0.19f,0.62f,0.22f,wood,25);
        g.Box(0.78f,1.14f,0.10f,0.34f,0.17f,0.20f,light);
        // Bat has a narrow grip and broad squared barrel.
        g.Box(0.97f,0.86f,0.12f,0.13f,0.74f,0.14f,dark,-7);
        g.Box(1.03f,1.62f,0.12f,0.27f,0.93f,0.26f,light,-7);
        g.Box(1.08f,2.13f,0.12f,0.23f,0.12f,0.23f,wood,-7);
        for(int i=0;i<3;i++)g.Box(0.97f,0.99f+i*0.09f,0.12f,0.16f,0.035f,0.17f,C("dfba7b"),-7);
        Eyes(g,0.25f,2.02f,0.39f,0.26f);
        g.Box(0,1.79f,0.44f,0.16f,0.19f,0.22f,light);
        g.Pixel(0,1.57f,0.346f,0.43f,0.14f,dark);
        g.Pixel(0,1.62f,0.349f,0.35f,0.055f,White);
        g.Pixel(0.03f,1.53f,0.349f,0.18f,0.035f,C("ce8064"));
        g.ScaleToHeight(2.55f);return g;
    }

    static T SaveAsset<T>(T asset,string path) where T:UnityEngine.Object
    {
        T old=AssetDatabase.LoadAssetAtPath<T>(path);
        if(old!=null)
        {
            Mesh sourceMesh=asset as Mesh,targetMesh=old as Mesh;
            if(sourceMesh!=null && targetMesh!=null)
            {
                // Assign buffers through Mesh APIs so existing renderers refresh GPU data too.
                targetMesh.Clear();targetMesh.vertices=sourceMesh.vertices;targetMesh.normals=sourceMesh.normals;
                targetMesh.colors=sourceMesh.colors;targetMesh.triangles=sourceMesh.triangles;
                targetMesh.RecalculateBounds();targetMesh.UploadMeshData(false);
            }
            else EditorUtility.CopySerialized(asset,old);
            UnityEngine.Object.DestroyImmediate(asset);EditorUtility.SetDirty(old);return old;
        }
        AssetDatabase.CreateAsset(asset,path);return asset;
    }
    static Material Material(string name,float freeze)
    {
        Shader shader=Shader.Find("OBP/VoxelPalette"); if(shader==null)throw new Exception("Voxel shader not compiled.");
        Material m=new Material(shader){name=name};m.SetFloat("_Freeze",freeze);
        return SaveAsset(m,Root+"/Materials/"+name+".mat");
    }
    static GameObject MeshObject(string name,Mesh mesh,Material mat,Transform parent)
    {
        GameObject go=new GameObject(name,typeof(MeshFilter),typeof(MeshRenderer));
        if(parent!=null)go.transform.SetParent(parent,false);
        go.GetComponent<MeshFilter>().sharedMesh=mesh;go.GetComponent<MeshRenderer>().sharedMaterial=mat;
        go.GetComponent<MeshRenderer>().shadowCastingMode=UnityEngine.Rendering.ShadowCastingMode.Off;
        go.GetComponent<MeshRenderer>().receiveShadows=false;return go;
    }
    static Geo Ice(Bounds b)
    {
        Geo g=new Geo();Color ice=C("8ce4fa"),white=C("e1fbff");
        Vector3 size=b.size+new Vector3(0.19f,0.16f,0.19f),p=b.center;
        foreach(int x in new[]{-1,1})foreach(int z in new[]{-1,1})g.Box(p.x+x*size.x/2,p.y,p.z+z*size.z/2,0.035f,size.y,0.035f,ice);
        foreach(int y in new[]{-1,1})
        {
            foreach(int z in new[]{-1,1})g.Box(p.x,p.y+y*size.y/2,p.z+z*size.z/2,size.x,0.035f,0.035f,white);
            foreach(int x in new[]{-1,1})g.Box(p.x+x*size.x/2,p.y+y*size.y/2,p.z,0.035f,0.035f,size.z,white);
        }
        // Frost crystals; opaque geometry avoids transparent overdraw in an ad.
        for(int i=0;i<5;i++)g.Box(p.x-size.x*0.36f+i*size.x*0.18f,0.10f+(i%2)*0.09f,p.z+size.z*0.36f,0.14f,0.25f+(i%2)*0.18f,0.16f,i%2==0?ice:white,20-i*10);
        float front=p.z+size.z/2+0.01f;
        g.Box(p.x,p.y,front,0.035f,0.42f,0.025f,white);
        g.Box(p.x,p.y,front,0.38f,0.035f,0.025f,white);
        g.Box(p.x,p.y,front,0.035f,0.36f,0.025f,white,45);
        g.Box(p.x,p.y,front,0.035f,0.36f,0.025f,white,-45);
        return g;
    }

    [MenuItem("Tools/Brainrot Voxel/Build Five Models")]
    public static string Build()
    {
        return BuildModels(null);
    }

    [MenuItem("Tools/Brainrot Voxel/Rebuild Lirili Only")]
    public static string RebuildLirili()
    {
        return BuildModels("LiriliLarila");
    }

    static string BuildModels(string only)
    {
        foreach(string sub in new[]{"Models","Prefabs","Materials","Scenes"})Directory.CreateDirectory(Root+"/"+sub);
        Directory.CreateDirectory(Output+"/GLB");Directory.CreateDirectory(Output+"/Previews");
        AssetDatabase.Refresh();
        Material normal=Material("VoxelShared",0),frozen=Material("VoxelFrozen",1);
        Geo[] all={Shark(),Ballerina(),Crocodile(),Lirili(),Tung()};
        StringBuilder report=new StringBuilder("Model,Triangles,Vertices,GLB_bytes,Height_m,Renderers_normal,Renderers_frozen\n");
        for(int i=0;i<all.Length;i++)
        {
            if(only!=null && Names[i]!=only)
            {
                Mesh existing=AssetDatabase.LoadAssetAtPath<Mesh>(Root+"/Models/"+Names[i]+".asset");
                string existingGlb=Output+"/GLB/"+Names[i]+".glb";
                report.AppendLine(string.Join(",",Names[i],existing.triangles.Length/3,existing.vertexCount,new FileInfo(existingGlb).Length,existing.bounds.size.y.ToString("F2",CultureInfo.InvariantCulture),1,2));
                continue;
            }
            Geo g=all[i]; Mesh mesh=SaveAsset(g.Mesh(Names[i]),Root+"/Models/"+Names[i]+".asset");
            Mesh frostMesh=SaveAsset(Ice(mesh.bounds).Mesh(Names[i]+"_Frost"),Root+"/Models/"+Names[i]+"_Frost.asset");
            GameObject root=new GameObject(Names[i]);
            try
            {
                GameObject visual=MeshObject("Visual",mesh,normal,root.transform);
                GameObject frost=MeshObject("Frost",frostMesh,normal,root.transform);frost.SetActive(false);
                BoxCollider hit=root.AddComponent<BoxCollider>();hit.center=mesh.bounds.center;hit.size=mesh.bounds.size;
                BrainrotVoxelActor actor=root.AddComponent<BrainrotVoxelActor>();actor.visual=visual.transform;actor.bodyRenderer=visual.GetComponent<MeshRenderer>();
                actor.frost=frost;actor.normalMaterial=normal;actor.frozenMaterial=frozen;actor.idleSpeed=1.4f+i*0.17f;
                if(i==2)actor.swayDegrees=0.7f;
                PrefabUtility.SaveAsPrefabAsset(root,Root+"/Prefabs/"+Names[i]+".prefab");
            }
            finally {UnityEngine.Object.DestroyImmediate(root);}
            string glb=Output+"/GLB/"+Names[i]+".glb";ExportGlb(mesh,glb);
            report.AppendLine(string.Join(",",Names[i],mesh.triangles.Length/3,mesh.vertexCount,new FileInfo(glb).Length,mesh.bounds.size.y.ToString("F2",CultureInfo.InvariantCulture),1,2));
        }
        File.WriteAllText(Output+"/ModelStats.csv",report.ToString());
        AssetDatabase.SaveAssets();AssetDatabase.Refresh();if(only==null)BuildShowroom();
        Debug.Log("Brainrot Voxel: five models built. "+Output);return report.ToString();
    }

    // Portable glTF 2.0: a single primitive, indexed positions/normals/vertex colours.
    // Reflect Z and reverse winding to convert Unity coordinates to glTF coordinates.
    static void ExportGlb(Mesh mesh,string path)
    {
        Vector3[] vertices=mesh.vertices,normals=mesh.normals;Color[] colors=mesh.colors;int[] tris=mesh.triangles;
        byte[] bin;
        using(MemoryStream ms=new MemoryStream())using(BinaryWriter bw=new BinaryWriter(ms))
        {
            foreach(Vector3 v in vertices){bw.Write(v.x);bw.Write(v.y);bw.Write(-v.z);}
            foreach(Vector3 n in normals){bw.Write(n.x);bw.Write(n.y);bw.Write(-n.z);}
            foreach(Color c in colors){Color linear=c.linear;bw.Write(linear.r);bw.Write(linear.g);bw.Write(linear.b);bw.Write(1f);}
            for(int i=0;i<tris.Length;i+=3){bw.Write((ushort)tris[i]);bw.Write((ushort)tris[i+2]);bw.Write((ushort)tris[i+1]);}
            while(ms.Length%4!=0)bw.Write((byte)0);bin=ms.ToArray();
        }
        int count=vertices.Length,pos=count*12,nrm=count*12,col=count*16,idx=tris.Length*2;
        Bounds b=mesh.bounds;
        Func<float,string> f=x=>x.ToString("R",CultureInfo.InvariantCulture);
        string min="["+f(b.min.x)+","+f(b.min.y)+","+f(-b.max.z)+"]",max="["+f(b.max.x)+","+f(b.max.y)+","+f(-b.min.z)+"]";
        string json="{\"asset\":{\"version\":\"2.0\",\"generator\":\"OBP hand-authored voxel builder\"},\"scene\":0,\"scenes\":[{\"nodes\":[0]}],\"nodes\":[{\"name\":\""+mesh.name+"\",\"mesh\":0}],\"meshes\":[{\"primitives\":[{\"attributes\":{\"POSITION\":0,\"NORMAL\":1,\"COLOR_0\":2},\"indices\":3,\"material\":0}]}],\"materials\":[{\"name\":\"VoxelPalette\",\"pbrMetallicRoughness\":{\"baseColorFactor\":[1,1,1,1],\"metallicFactor\":0,\"roughnessFactor\":1}}],\"buffers\":[{\"byteLength\":"+bin.Length+"}],\"bufferViews\":[{\"buffer\":0,\"byteOffset\":0,\"byteLength\":"+pos+",\"target\":34962},{\"buffer\":0,\"byteOffset\":"+pos+",\"byteLength\":"+nrm+",\"target\":34962},{\"buffer\":0,\"byteOffset\":"+(pos+nrm)+",\"byteLength\":"+col+",\"target\":34962},{\"buffer\":0,\"byteOffset\":"+(pos+nrm+col)+",\"byteLength\":"+idx+",\"target\":34963}],\"accessors\":[{\"bufferView\":0,\"componentType\":5126,\"count\":"+count+",\"type\":\"VEC3\",\"min\":"+min+",\"max\":"+max+"},{\"bufferView\":1,\"componentType\":5126,\"count\":"+count+",\"type\":\"VEC3\"},{\"bufferView\":2,\"componentType\":5126,\"count\":"+count+",\"type\":\"VEC4\"},{\"bufferView\":3,\"componentType\":5123,\"count\":"+tris.Length+",\"type\":\"SCALAR\"}]}";
        while(Encoding.UTF8.GetByteCount(json)%4!=0)json+=" ";byte[] js=Encoding.UTF8.GetBytes(json);
        using(BinaryWriter w=new BinaryWriter(File.Open(path,FileMode.Create)))
        {w.Write(0x46546c67);w.Write(2);w.Write(12+8+js.Length+8+bin.Length);w.Write(js.Length);w.Write(0x4e4f534a);w.Write(js);w.Write(bin.Length);w.Write(0x004e4942);w.Write(bin);}
    }

    static void Text(string text,Vector3 pos,float size,Color color,Transform parent=null)
    {
        GameObject go=new GameObject(text);if(parent!=null)go.transform.SetParent(parent,false);go.transform.localPosition=pos;
        go.transform.rotation=Quaternion.Euler(0,180,0);
        TextMesh tm=go.AddComponent<TextMesh>();tm.text=text;tm.font=Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");tm.fontSize=80;tm.characterSize=size*0.22f;tm.anchor=TextAnchor.MiddleCenter;tm.alignment=TextAlignment.Center;tm.color=color;
        go.GetComponent<MeshRenderer>().sharedMaterial=tm.font.material;
    }
    static GameObject Block(string name,Vector3 p,Vector3 s,Color color,Material mat)
    {
        Geo g=new Geo();g.Box(0,0,0,s.x,s.y,s.z,color);GameObject go=MeshObject(name,g.Mesh(name),mat,null);go.transform.position=p;return go;
    }
    static Mesh SaveDisplayMesh(Geo geo,string name) {return SaveAsset(geo.Mesh(name),Root+"/Models/"+name+".asset");}

    public static void BuildShowroom()
    {
        Scene previous=SceneManager.GetActiveScene();
        Scene scene=EditorSceneManager.NewScene(NewSceneSetup.EmptyScene,NewSceneMode.Additive);SceneManager.SetActiveScene(scene);
        try
        {
            Material mat=AssetDatabase.LoadAssetAtPath<Material>(Root+"/Materials/VoxelShared.mat");
            Geo baseGeo=new Geo();baseGeo.Box(0,-0.14f,0,4.8f,0.25f,4.2f,C("233a4a"));
            Mesh stand=SaveDisplayMesh(baseGeo,"DisplayStand");
            for(int i=0;i<5;i++)
            {
                GameObject model=(GameObject)PrefabUtility.InstantiatePrefab(AssetDatabase.LoadAssetAtPath<GameObject>(Root+"/Prefabs/"+Names[i]+".prefab"),scene);
                model.transform.position=new Vector3((i-2)*5.2f,0,0);model.transform.rotation=Quaternion.Euler(0,-18,0);
                MeshObject("Stand_"+i,stand,mat,null).transform.position=model.transform.position;
                Text(Labels[i],new Vector3((i-2)*5.2f,-0.45f,2.3f),0.13f,C(Accents[i]));
            }
            GameObject camera=new GameObject("Main Camera",typeof(Camera));camera.tag="MainCamera";
            camera.transform.position=new Vector3(0,9,22);camera.transform.LookAt(new Vector3(0,0.8f,0));
            Camera cam=camera.GetComponent<Camera>();cam.orthographic=true;cam.orthographicSize=8;cam.clearFlags=CameraClearFlags.SolidColor;cam.backgroundColor=C("111f2c");
            GameObject light=new GameObject("Directional Light",typeof(Light));light.GetComponent<Light>().type=LightType.Directional;light.transform.rotation=Quaternion.Euler(45,-30,0);
            Text("FREEZE THE BRAINROT",new Vector3(0,4.5f,0),0.40f,White);
            EditorSceneManager.SaveScene(scene,Root+"/Scenes/BrainrotVoxel_Showroom.unity");
        }
        finally {SceneManager.SetActiveScene(previous);EditorSceneManager.CloseScene(scene,true);}
    }

    [MenuItem("Tools/Brainrot Voxel/Render Preview Sheets")]
    public static string RenderPreviews()
    {
        Directory.CreateDirectory(Output+"/Previews");
        const int tileW=600,tileH=650;Texture2D sheet=new Texture2D(tileW*3,tileH*2,TextureFormat.RGB24,false);
        Color[] background=new Color[sheet.width*sheet.height];for(int i=0;i<background.Length;i++)background[i]=C("111f2c");sheet.SetPixels(background);
        for(int i=0;i<5;i++)
        {
            Texture2D tile=RenderOne(i,false,tileW,tileH,i==3?-48:-24);
            sheet.SetPixels((i%3)*tileW,(1-i/3)*tileH,tileW,tileH,tile.GetPixels());
            File.WriteAllBytes(Output+"/Previews/"+Names[i]+".png",tile.EncodeToPNG());UnityEngine.Object.DestroyImmediate(tile);
        }
        Texture2D frozen=RenderOne(0,true,tileW,tileH);sheet.SetPixels(tileW*2,0,tileW,tileH,frozen.GetPixels());UnityEngine.Object.DestroyImmediate(frozen);
        sheet.Apply();File.WriteAllBytes(Output+"/Previews/Lineup.png",sheet.EncodeToPNG());UnityEngine.Object.DestroyImmediate(sheet);
        return Path.GetFullPath(Output+"/Previews/Lineup.png");
    }
    public static string RenderLiriliViews()
    {
        const int width=600,height=650;
        Texture2D sheet=new Texture2D(width*2,height,TextureFormat.RGB24,false);
        for(int i=0;i<2;i++)
        {
            Texture2D tile=RenderOne(3,false,width,height,i==0?-48:-90);
            sheet.SetPixels(i*width,0,width,height,tile.GetPixels());UnityEngine.Object.DestroyImmediate(tile);
        }
        sheet.Apply();string path=Output+"/Previews/LiriliLarila_Updated.png";
        File.WriteAllBytes(path,sheet.EncodeToPNG());UnityEngine.Object.DestroyImmediate(sheet);return Path.GetFullPath(path);
    }
    static Texture2D RenderOne(int index,bool frozen,int width,int height,float angle=-24)
    {
        Scene scene=EditorSceneManager.NewPreviewScene();
        RenderTexture rt=null;RenderTexture old=RenderTexture.active;Camera renderCamera=null;
        try
        {
            GameObject root=(GameObject)PrefabUtility.InstantiatePrefab(AssetDatabase.LoadAssetAtPath<GameObject>(Root+"/Prefabs/"+Names[index]+".prefab"),scene);
            root.GetComponent<BrainrotVoxelActor>().SetFrozen(frozen);
            root.transform.rotation=Quaternion.Euler(0,angle,0);
            Material mat=AssetDatabase.LoadAssetAtPath<Material>(Root+"/Materials/VoxelShared.mat");
            GameObject platform=Block("Podium",new Vector3(0,-0.12f,0),new Vector3(4.7f,0.20f,4.0f),C("243b4b"),mat);SceneManager.MoveGameObjectToScene(platform,scene);
            GameObject accent=Block("Accent",new Vector3(0,-0.20f,0),new Vector3(4.75f,0.045f,4.05f),C(Accents[index]),mat);SceneManager.MoveGameObjectToScene(accent,scene);
            GameObject camera=new GameObject("Preview Camera",typeof(Camera));SceneManager.MoveGameObjectToScene(camera,scene);
            Camera cam=camera.GetComponent<Camera>();renderCamera=cam;cam.scene=scene;cam.orthographic=true;cam.orthographicSize=index==2?2.95f:2.55f;
            camera.transform.position=new Vector3(0,4.6f,9);camera.transform.LookAt(new Vector3(0,1.15f,0));
            cam.clearFlags=CameraClearFlags.SolidColor;cam.backgroundColor=C("111f2c");cam.allowHDR=false;cam.allowMSAA=true;
            // Labels are placed in camera space to remain perfectly readable.
            Text(frozen?"FROZEN STATE":Labels[index],new Vector3(0,-cam.orthographicSize*0.90f,8),0.13f,C(Accents[index]),camera.transform);
            Transform label=camera.transform.GetChild(0);label.localRotation=Quaternion.identity;
            Text(frozen?"ICE FRAME / OPAQUE SHADING":"VOXEL SERIES  /  0"+(index+1),new Vector3(0,cam.orthographicSize*0.86f,8),0.085f,C("91a8b7"),camera.transform);
            camera.transform.GetChild(1).localRotation=Quaternion.identity;
            rt=new RenderTexture(width,height,24){antiAliasing=4};rt.Create();cam.targetTexture=rt;cam.Render();RenderTexture.active=rt;
            Texture2D result=new Texture2D(width,height,TextureFormat.RGB24,false);result.ReadPixels(new Rect(0,0,width,height),0,0);result.Apply();
            // These meshes are preview-only and are not stored in the project.
            UnityEngine.Object.DestroyImmediate(platform.GetComponent<MeshFilter>().sharedMesh);UnityEngine.Object.DestroyImmediate(accent.GetComponent<MeshFilter>().sharedMesh);
            return result;
        }
        finally {RenderTexture.active=old;if(renderCamera!=null)renderCamera.targetTexture=null;if(rt!=null){rt.Release();UnityEngine.Object.DestroyImmediate(rt);}EditorSceneManager.ClosePreviewScene(scene);}
    }
}

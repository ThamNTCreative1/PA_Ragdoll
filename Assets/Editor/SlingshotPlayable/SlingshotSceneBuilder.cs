#if UNITY_EDITOR
using UnityEngine;
using UnityEngine.UI;
using UnityEditor;
using UnityEditor.SceneManagement;
using System.Collections.Generic;

public static class SlingshotSceneBuilder
{
    const string Root = "Assets/SlingshotPlayable/";
    static Sprite square;
    static Font font;
    static Transform world;
    static PlayableFlowController flow;
    static Material lineMaterial;
    static Color pink = new Color(.93f,.08f,.36f);
    static Sprite Load(string name) { return AssetDatabase.LoadAssetAtPath<Sprite>(Root + "Art/" + name + ".png"); }
    [MenuItem("Tools/Playable/Build Slingshot Scene")]
    public static void Build()
    {
        if (EditorApplication.isPlaying) throw new System.InvalidOperationException("Stop Play mode before building.");
        var scene = UnityEngine.SceneManagement.SceneManager.GetActiveScene();
        if (scene.path != "Assets/Scenes/SampleScene.unity")
            scene = EditorSceneManager.OpenScene("Assets/Scenes/SampleScene.unity");
        if (GameObject.Find("SlingshotPlayable") != null) throw new System.InvalidOperationException("Scene already built; preserve existing setup.");
        AssetDatabase.Refresh();
        foreach (string path in AssetDatabase.FindAssets("t:Texture2D", new[]{Root+"Art"}))
        {
            var importer = AssetImporter.GetAtPath(AssetDatabase.GUIDToAssetPath(path)) as TextureImporter;
            if (importer == null) continue;
            importer.textureType = TextureImporterType.Sprite; importer.spritePixelsPerUnit = 64;
            importer.filterMode = FilterMode.Point; importer.mipmapEnabled = false;
            importer.textureCompression = TextureImporterCompression.Uncompressed; importer.maxTextureSize = 1024;
            importer.SaveAndReimport();
        }
        var tex = new Texture2D(2,2); tex.SetPixels(new[]{Color.white,Color.white,Color.white,Color.white}); tex.Apply();
        System.IO.File.WriteAllBytes(Root+"Art/Pixel.png",tex.EncodeToPNG());
        AssetDatabase.ImportAsset(Root+"Art/Pixel.png");
        var pixelImporter=(TextureImporter)AssetImporter.GetAtPath(Root+"Art/Pixel.png");
        pixelImporter.textureType=TextureImporterType.Sprite;pixelImporter.spritePixelsPerUnit=2;pixelImporter.filterMode=FilterMode.Point;pixelImporter.mipmapEnabled=false;pixelImporter.SaveAndReimport();
        square=Load("Pixel"); font=AssetDatabase.LoadAssetAtPath<Font>(Root+"Art/GameFont.ttf");
        lineMaterial=new Material(Shader.Find("Sprites/Default"));AssetDatabase.CreateAsset(lineMaterial,Root+"Band.mat");
        world=new GameObject("SlingshotPlayable").transform;
        flow=world.gameObject.AddComponent<PlayableFlowController>();
        flow.audioSource=world.gameObject.AddComponent<AudioSource>();flow.audioSource.playOnAwake=false;
        flow.launchSound=AssetDatabase.LoadAssetAtPath<AudioClip>(Root+"Audio/Launch.wav");
        flow.impactSound=AssetDatabase.LoadAssetAtPath<AudioClip>(Root+"Audio/Impact.wav");
        Camera cam=Camera.main;
        if(cam==null){var c=new GameObject("Main Camera");c.tag="MainCamera";cam=c.AddComponent<Camera>();c.AddComponent<AudioListener>();}
        cam.orthographic=true;cam.orthographicSize=5.5f;cam.clearFlags=CameraClearFlags.SolidColor;cam.backgroundColor=new Color(.12f,.14f,.15f);
        cam.transform.position=new Vector3(-7,3.4f,-10);
        var rig=cam.gameObject.AddComponent<PlayableCameraController>();rig.view=cam;flow.cameraRig=rig;
        var light=new GameObject("Main Light").AddComponent<Light>();light.type=LightType.Directional;light.intensity=.4f;light.transform.SetParent(world);
        BuildMap();BuildSling();BuildUI();
        flow.actors=new RagdollActor[3];
        flow.actors[0]=Actor("Noob",0,0,false,new Vector2(-7,2.6f));
        flow.actors[1]=Actor("Rumi",3,3,false,new Vector2(-7,2.6f));
        flow.actors[2]=Actor("TOP",1,1,false,new Vector2(-7,2.6f));
        for(int i=0;i<3;i++)
        {
            PrefabUtility.SaveAsPrefabAsset(flow.actors[i].gameObject,Root+"Prefabs/"+flow.actors[i].name+".prefab");
            flow.actors[i].gameObject.SetActive(i==0);
        }
        flow.playableVersion=1;flow.handAlpha.alpha=0;flow.actorLabel.enabled=false;flow.prompt.text="REACH THE GUARDS!";
        flow.leftBand.SetPosition(0,new Vector3(-7.48f,2.8f,0));flow.leftBand.SetPosition(1,flow.anchor);
        flow.rightBand.SetPosition(0,new Vector3(-6.52f,2.8f,0));flow.rightBand.SetPosition(1,flow.anchor);
        EditorUtility.SetDirty(flow);EditorSceneManager.MarkSceneDirty(scene);EditorSceneManager.SaveScene(scene);
        Selection.activeGameObject=flow.gameObject;
        Debug.Log("[Playable] Slingshot scene built. Select SlingshotPlayable to choose playableVersion 1 or 2.");
    }
    static GameObject SpriteObject(string name,Sprite sprite,Vector2 pos,Vector2 size,int order,Color color,Transform parent=null)
    {
        var go=new GameObject(name);go.transform.SetParent(parent==null?world:parent);go.transform.position=pos;
        var sr=go.AddComponent<SpriteRenderer>();sr.sprite=sprite;sr.color=color;sr.sortingOrder=order;
        go.transform.localScale=new Vector3(size.x/sprite.bounds.size.x,size.y/sprite.bounds.size.y,1);return go;
    }
    static GameObject Rect(string name,Vector2 pos,Vector2 size,Color color,int order,bool collider=false)
    {
        var go=SpriteObject(name,square,pos,size,order,color);
        if(collider)go.AddComponent<BoxCollider2D>();return go;
    }
    static void BrickRow(float x,float y,int count)
    {
        for(int i=0;i<count;i++)SpriteObject("White brick",Load("Brick"),new Vector2(x+i*.8f,y),new Vector2(.8f,.45f),20,Color.white);
        var floor=new GameObject("Platform collider");floor.transform.SetParent(world);floor.transform.position=new Vector3(x+(count-1)*.4f,y,0);
        floor.AddComponent<BoxCollider2D>().size=new Vector2(count*.8f,.45f);
    }
    static void BuildMap()
    {
        Rect("Room shadow",new Vector2(12,4),new Vector2(15,9),new Color(.09f,.1f,.11f),0);
        for(int x=-20;x<30;x++)for(int y=0;y<9;y++)
            SpriteObject("Wall tile",Load("Wall"),new Vector2(x+.5f,y+.5f),Vector2.one,1,new Color(.6f,.63f,.61f));
        for(int x=-20;x<30;x++)for(int y=-2;y<0;y++)
            SpriteObject("Ground tile",Load("Brick"),new Vector2(x+.5f,y+.5f),Vector2.one,20,new Color(.6f,.63f,.64f));
        Rect("Ground collision",new Vector2(5,-.55f),new Vector2(50,1.1f),Color.clear,19,true);
        Rect("Room panel",new Vector2(12,4.4f),new Vector2(14.6f,8.8f),new Color(.19f,.22f,.22f),2);
        for(int x=5;x<20;x++)Rect("Panel seam",new Vector2(x,4.4f),new Vector2(.035f,8.8f),new Color(.14f,.17f,.17f),3);
        BrickRow(5.2f,0,19);BrickRow(5.2f,3.35f,6);BrickRow(12.4f,3.35f,10);
        BrickRow(6.8f,6.7f,6);BrickRow(14,6.7f,8);
        for(int y=0;y<11;y++)SpriteObject("Right wall",Load("Brick"),new Vector2(20.1f,.4f+y*.8f),new Vector2(.7f,.8f),20,Color.white);
        Rect("Right wall collider",new Vector2(20.1f,4.4f),new Vector2(.7f,8.8f),Color.clear,19,true);
        Rect("High pedestal",new Vector2(18.2f,1.55f),new Vector2(1.1f,3.1f),new Color(.57f,.63f,.64f),20,true);
        SpriteObject("Bunk bed",Load("Box_0_3"),new Vector2(14.7f,1.5f),new Vector2(3,2.7f),24,Color.white);
        Rect("Bed top",new Vector2(14.7f,2.6f),new Vector2(1.8f,.12f),new Color(.16f,.23f,.27f),25,true);
        Prop("Gift",Load("Gift"),new Vector2(8.1f,.8f),new Vector2(.65f,1.6f));
        Prop("Golden pig",Load("Box_0_0"),new Vector2(11.7f,.6f),new Vector2(1.1f,1.2f));
        Prop("Golden pig upstairs",Load("Box_0_0"),new Vector2(17.8f,7.5f),new Vector2(1.1f,1.2f));
        Prop("Gift upstairs",Load("Gift"),new Vector2(8.5f,7.6f),new Vector2(.6f,1.4f));
        Actor("Guard circle",0,0,true,new Vector2(7,4.75f));
        Actor("Guard triangle",2,0,true,new Vector2(16.3f,1.4f));
        Actor("Guard square",1,0,true,new Vector2(15.4f,8.1f));
        Actor("Person on high pedestal",2,2,false,new Vector2(18.2f,4.3f));
        for(int i=0;i<4;i++)
        {
            var spike=Rect("Floor trap",new Vector2(10+i*.3f,.18f),new Vector2(.22f,.35f),new Color(.65f,.7f,.72f),22,true);
            spike.transform.rotation=Quaternion.Euler(0,0,45);
        }
    }
    static void Prop(string name,Sprite sprite,Vector2 pos,Vector2 size)
    {
        var go=SpriteObject(name,sprite,pos,size,26,Color.white);go.AddComponent<BoxCollider2D>();
        var rb=go.AddComponent<Rigidbody2D>();rb.mass=.6f;rb.collisionDetectionMode=CollisionDetectionMode2D.Continuous;
    }
    static RagdollActor Actor(string name,int headFrame,int bodyFrame,bool guard,Vector2 pos)
    {
        var root=new GameObject(name);root.transform.SetParent(world);root.transform.position=pos;
        var actor=root.AddComponent<RagdollActor>();var parts=new List<Rigidbody2D>();var sprites=new List<SpriteRenderer>();
        string prefix=guard?"Z":"";
        Rigidbody2D body=Part(root.transform,prefix+"Body_0_"+bodyFrame,Vector2.zero,new Vector2(.43f,.86f),30,parts,sprites);
        actor.torso=body;
        var head=Part(root.transform,prefix+"Head_0_"+headFrame,new Vector2(0,.77f),new Vector2(.7f,guard?.7f:headFrame==3?1.25f:.75f),34,parts,sprites);
        Joint(head,body,new Vector2(0,.46f),-45,45);
        for(int side=0;side<2;side++)
        {
            string lr=side==0?"Left":"Right";float sign=side==0?-1:1;
            var arm=Part(root.transform,prefix+"Hand_"+lr+"_0_"+bodyFrame,new Vector2(sign*.32f,-.05f),new Vector2(.23f,.72f),side==0?29:33,parts,sprites);
            Joint(arm,body,new Vector2(sign*.24f,.3f),-100,100);
            var leg=Part(root.transform,prefix+"Foot_"+lr+"_0_"+bodyFrame,new Vector2(sign*.14f,-.78f),new Vector2(.24f,.78f),31+side,parts,sprites);
            Joint(leg,body,new Vector2(sign*.14f,-.4f),-65,65);
        }
        actor.reactiveTarget=guard;
        actor.bodies=parts.ToArray();actor.renderers=sprites.ToArray();
        var cols=root.GetComponentsInChildren<Collider2D>();
        for(int i=0;i<cols.Length;i++)for(int j=i+1;j<cols.Length;j++)Physics2D.IgnoreCollision(cols[i],cols[j]);
        foreach(var rb in actor.bodies)
        {
            var impact=rb.gameObject.AddComponent<RagdollImpact>();impact.actor=actor;impact.flow=flow;
            if(guard || name=="Person on high pedestal")rb.bodyType=RigidbodyType2D.Static;
            else rb.simulated=false;
        }
        if(guard)SpriteObject("AK47",Load("Ak47_0_0"),pos+new Vector2(-.5f,.15f),new Vector2(1,.35f),38,Color.white,body.transform);
        return actor;
    }
    static Rigidbody2D Part(Transform parent,string spriteName,Vector2 local,Vector2 size,int order,List<Rigidbody2D> bodies,List<SpriteRenderer> sprites)
    {
        var sprite=Load(spriteName);if(sprite==null)throw new System.Exception("Missing sprite "+spriteName);
        var go=SpriteObject(spriteName,sprite,(Vector2)parent.position+local,size,order,Color.white,parent);
        // Bake renderer sizing into a visual child so physics uses world-space dimensions.
        var scale=go.transform.localScale;go.transform.localScale=Vector3.one;
        var visual=new GameObject("Visual");visual.transform.SetParent(go.transform,false);visual.transform.localScale=scale;
        var sr=visual.AddComponent<SpriteRenderer>();sr.sprite=sprite;sr.sortingOrder=order;
        Object.DestroyImmediate(go.GetComponent<SpriteRenderer>());
        var col=go.AddComponent<BoxCollider2D>();col.size=new Vector2(size.x*.8f,Mathf.Min(size.y,.78f)*.9f);
        var rb=go.AddComponent<Rigidbody2D>();rb.mass=spriteName.Contains("Body")?1:.25f;rb.linearDamping=.07f;rb.angularDamping=.3f;
        rb.collisionDetectionMode=CollisionDetectionMode2D.Continuous;rb.interpolation=RigidbodyInterpolation2D.Interpolate;
        bodies.Add(rb);sprites.Add(sr);return rb;
    }
    static void Joint(Rigidbody2D limb,Rigidbody2D body,Vector2 point,float min,float max)
    {
        var j=limb.gameObject.AddComponent<HingeJoint2D>();j.connectedBody=body;j.autoConfigureConnectedAnchor=false;
        Vector2 worldPoint=body.position+point;j.anchor=worldPoint-limb.position;j.connectedAnchor=point;
        j.useLimits=true;j.limits=new JointAngleLimits2D{min=min,max=max};j.enableCollision=false;
    }
    static void BuildSling()
    {
        Color edge=new Color(.27f,.14f,.09f),wood=new Color(.65f,.4f,.24f);
        Rect("Sling trunk outline",new Vector2(-7,1.2f),new Vector2(.55f,2.4f),edge,25);
        Rect("Sling trunk",new Vector2(-7,1.2f),new Vector2(.39f,2.4f),wood,26);
        for(int side=0;side<2;side++)
        {
            float sign=side==0?-1:1;
            var branch=Rect("Sling fork outline",new Vector2(-7+sign*.35f,2.25f),new Vector2(.36f,1.3f),edge,25);branch.transform.rotation=Quaternion.Euler(0,0,-sign*23);
            branch=Rect("Sling fork wood",new Vector2(-7+sign*.35f,2.25f),new Vector2(.23f,1.2f),wood,26);branch.transform.rotation=Quaternion.Euler(0,0,-sign*23);
        }
        for(int i=0;i<12;i++)Rect("Wood grain",new Vector2(-7+(i%3-1)*.09f,.2f+i*.16f),new Vector2(.025f,.12f),new Color(.4f,.24f,.14f),27);
        flow.leftBand=Band("Back elastic",39);flow.rightBand=Band("Front elastic",45);
        flow.trajectoryDots=new Transform[24];
        for(int i=0;i<24;i++)
        {
            var dot=Rect("Trajectory dot",Vector2.zero,Vector2.one*(.1f-i*.002f),new Color(1,.85f,.32f),60);
            flow.trajectoryDots[i]=dot.transform;dot.SetActive(false);
        }
    }
    static LineRenderer Band(string name,int order)
    {
        var go=new GameObject(name);go.transform.SetParent(world);var line=go.AddComponent<LineRenderer>();line.sharedMaterial=lineMaterial;
        line.positionCount=2;line.startWidth=.13f;line.endWidth=.13f;line.startColor=line.endColor=new Color(.26f,.06f,.12f);line.sortingOrder=order;return line;
    }
    static Text Label(Transform parent,string name,string value,int size,Vector2 anchor,Vector2 pos,Vector2 dims)
    {
        var go=new GameObject(name,typeof(RectTransform));go.layer=5;go.transform.SetParent(parent,false);
        var rt=go.GetComponent<RectTransform>();rt.anchorMin=rt.anchorMax=anchor;rt.anchoredPosition=pos;rt.sizeDelta=dims;
        var t=go.AddComponent<Text>();t.font=font;t.text=value;t.fontSize=size;t.alignment=TextAnchor.MiddleCenter;t.color=Color.white;t.raycastTarget=false;
        var shadow=go.AddComponent<Shadow>();shadow.effectColor=new Color(0,0,0,.9f);shadow.effectDistance=new Vector2(3,-3);return t;
    }
    static Image UIBox(Transform parent,string name,Vector2 pos,Vector2 size,Color color)
    {
        var go=new GameObject(name,typeof(RectTransform));go.layer=5;go.transform.SetParent(parent,false);var rt=go.GetComponent<RectTransform>();rt.sizeDelta=size;rt.anchoredPosition=pos;
        var image=go.AddComponent<Image>();image.color=color;image.raycastTarget=false;return image;
    }
    static void BuildUI()
    {
        var uiCameraGo=new GameObject("UI Camera");uiCameraGo.transform.SetParent(world);uiCameraGo.transform.position=new Vector3(0,0,-30);
        var uiCamera=uiCameraGo.AddComponent<Camera>();uiCamera.orthographic=true;uiCamera.clearFlags=CameraClearFlags.Depth;uiCamera.cullingMask=1<<5;uiCamera.depth=10;
        flow.cameraRig.view.cullingMask &= ~(1<<5);
        var canvasGo=new GameObject("Playable UI");canvasGo.layer=5;canvasGo.transform.SetParent(world);var canvas=canvasGo.AddComponent<Canvas>();canvas.renderMode=RenderMode.ScreenSpaceCamera;canvas.worldCamera=uiCamera;canvas.planeDistance=1;canvas.sortingOrder=200;
        var scaler=canvasGo.AddComponent<CanvasScaler>();scaler.uiScaleMode=CanvasScaler.ScaleMode.ScaleWithScreenSize;scaler.referenceResolution=new Vector2(1080,1920);scaler.matchWidthOrHeight=.5f;
        var top=UIBox(canvasGo.transform,"Title strip",Vector2.zero,new Vector2(4000,135),new Color(.06f,.08f,.09f,.86f));
        top.rectTransform.anchorMin=top.rectTransform.anchorMax=new Vector2(.5f,1);top.rectTransform.anchoredPosition=new Vector2(0,-65);
        Label(canvasGo.transform,"Game title","RAGDOLL SLINGSHOT",42,new Vector2(.5f,1),new Vector2(0,-55),new Vector2(1000,75));
        flow.versionLabel=Label(canvasGo.transform,"Version","VER 1",19,new Vector2(1,1),new Vector2(-75,-110),new Vector2(130,40));
        flow.prompt=Label(canvasGo.transform,"Prompt","DRAG BACK & RELEASE",44,new Vector2(.5f,0),new Vector2(0,120),new Vector2(1040,90));
        flow.actorLabel=Label(canvasGo.transform,"Hero name","NOOB",26,new Vector2(.5f,0),new Vector2(0,205),new Vector2(600,60));
        flow.actorLabel.color=new Color(1,.85f,.3f);
        var hand=new GameObject("Tutorial Hand",typeof(RectTransform));hand.layer=5;hand.transform.SetParent(canvasGo.transform,false);
        flow.handGuide=hand.GetComponent<RectTransform>();flow.handGuide.sizeDelta=new Vector2(90,120);flow.handGuide.localScale=Vector3.one*.65f;flow.handAlpha=hand.AddComponent<CanvasGroup>();flow.handAlpha.blocksRaycasts=false;
        UIBox(hand.transform,"Hand outline",new Vector2(13,-40),new Vector2(65,66),new Color(.17f,.1f,.1f));
        UIBox(hand.transform,"Index outline",new Vector2(0,0),new Vector2(26,75),new Color(.17f,.1f,.1f));
        Color skin=new Color(1,.83f,.66f);
        UIBox(hand.transform,"Palm",new Vector2(13,-40),new Vector2(54,54),skin);
        UIBox(hand.transform,"Index",Vector2.zero,new Vector2(17,67),skin);
        for(int i=0;i<3;i++)UIBox(hand.transform,"Finger",new Vector2(16+i*13,-18-i*4),new Vector2(11,32),skin);
    }
    [MenuItem("Tools/Playable/Version 1")]
    public static void VersionOne(){SetVersion(1);}
    [MenuItem("Tools/Playable/Version 2")]
    public static void VersionTwo(){SetVersion(2);}
    static void SetVersion(int version)
    {
        var f=Object.FindFirstObjectByType<PlayableFlowController>();if(f==null)return;
        Undo.RecordObject(f,"Set playable version");f.playableVersion=version;EditorUtility.SetDirty(f);
        if(!EditorApplication.isPlaying)EditorSceneManager.SaveScene(f.gameObject.scene);
    }
}
#endif





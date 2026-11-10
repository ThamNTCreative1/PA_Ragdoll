using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

namespace MelonAd.EditorTools
{
    /// <summary>
    /// Builds the 6 SSPGame characters (sprites in Art/SSPCharacters) from the ragdoll template (Characters/0.prefab).
    /// All parts share one pixel density per character (torso height = 1.68u). Bone lengths, colliders and
    /// joint anchors are re-laid to the art; feet stay at the template height. Arms overlap the torso edges and
    /// are drawn in front of it, legs sit side by side under the hips (like the SSPGame reference).
    /// </summary>
    public static class SSPCharacterBuilder
    {
        const string ArtDir = "Assets/_Game/Art/SSPCharacters";
        const string OutDir = "Assets/_Game/CharactersSSP";
        const string TemplatePrefab = "Assets/_Game/Characters/0.prefab";
        const string SrcScene = "Assets/_Game/Scenes/Main.unity";
        const string DstScene = "Assets/_Game/Scenes/Main_SSP.unity";

        public static readonly string[] Chars = { "C0_Curly", "C1_Beanie", "C2_Helmet", "C3_PinkFox", "C4_Deer", "C5_Skull" };

        const float TorsoLen = 1.68f;
        // how far the arm centre sits inside the torso edge, in arm half-widths (0 = centred on the edge)
        const float ArmInset = 0.5f;
        const int FrontArmOrderShift = 42; // left arm moved in front of the torso

        static int H(string ch, string part)
        {
            var t = AssetDatabase.LoadAssetAtPath<Texture2D>(ArtDir + "/" + ch + "/" + part + ".png");
            return t.height;
        }

        [MenuItem("Game/SSP/1. Import SSP Sprites")]
        public static void ImportSprites()
        {
            foreach (var ch in Chars)
            {
                float ppu = (H(ch, "body") + H(ch, "body_mid") + H(ch, "body_down")) / TorsoLen;
                foreach (var f in Directory.GetFiles(ArtDir + "/" + ch, "*.png"))
                {
                    string path = f.Replace('\\', '/');
                    var ti = (TextureImporter)AssetImporter.GetAtPath(path);
                    ti.textureType = TextureImporterType.Sprite;
                    ti.spriteImportMode = SpriteImportMode.Single;
                    ti.spritePixelsPerUnit = ppu;
                    ti.filterMode = FilterMode.Point;
                    ti.mipmapEnabled = false;
                    ti.alphaIsTransparency = true;
                    ti.textureCompression = TextureImporterCompression.Uncompressed;
                    var s = new TextureImporterSettings();
                    ti.ReadTextureSettings(s);
                    s.spriteMeshType = SpriteMeshType.FullRect;
                    s.spriteAlignment = (int)SpriteAlignment.Center;
                    ti.SetTextureSettings(s);
                    ti.SaveAndReimport();
                }
            }
            Debug.Log("[SSP] Sprites imported");
        }

        static Sprite Spr(string ch, string part)
        {
            return AssetDatabase.LoadAssetAtPath<Sprite>(ArtDir + "/" + ch + "/" + part + ".png");
        }

        static Vector2 Size(SpriteRenderer sr)
        {
            return sr != null && sr.sprite != null ? (Vector2)sr.sprite.bounds.size : Vector2.one;
        }

        static void SetPart(Transform bone, Sprite spr, float localY, bool flip, Vector2? skelSizeOverride = null)
        {
            var skin = bone.Find("skin") ? bone.Find("skin").GetComponent<SpriteRenderer>() : null;
            var burnt = bone.Find("burnt") ? bone.Find("burnt").GetComponent<SpriteRenderer>() : null;
            var skel = bone.Find("skeleton");
            Vector2 oldSize = Size(skin);
            foreach (var sr in new[] { skin, burnt })
            {
                if (sr == null) continue;
                sr.sprite = spr;
                sr.flipX = flip;
                sr.transform.localPosition = new Vector3(0f, localY, 0f);
            }
            if (skel != null && spr != null)
            {
                Vector2 ns = skelSizeOverride ?? (Vector2)spr.bounds.size;
                Vector3 sc = skel.localScale;
                skel.localScale = new Vector3(sc.x * ns.x / oldSize.x, sc.y * ns.y / oldSize.y, sc.z);
                if (skelSizeOverride == null) skel.localPosition = new Vector3(0f, localY, 0f);
                // hidden until acid / spikes melt the skin (Ragdoll.Melt enables it); otherwise it shows through the transparent edges of the pixel art
                var skelSr = skel.GetComponent<SpriteRenderer>();
                if (skelSr != null) skelSr.enabled = false;
            }
        }

        static void SetHand(Transform downArm, Sprite spr, float localY, bool flip)
        {
            foreach (var n in new[] { "hand", "hand_burnt" })
            {
                var t = downArm.Find(n);
                if (t == null) continue;
                var sr = t.GetComponent<SpriteRenderer>();
                sr.sprite = spr;
                sr.flipX = flip;
                t.localPosition = new Vector3(0f, localY, 0f);
            }
        }

        static void Pos(Transform t, float x, float y)
        {
            t.localPosition = new Vector3(x, y, t.localPosition.z);
        }

        static void ColH(Transform t, float h)
        {
            var bc = t.GetComponent<BoxCollider2D>();
            bc.size = new Vector2(bc.size.x, h);
            bc.offset = Vector2.zero;
        }

        static void Joint(Transform t, Vector2 anchor, Vector2 connectedAnchor)
        {
            var hj = t.GetComponent<HingeJoint2D>();
            if (hj == null) return;
            hj.autoConfigureConnectedAnchor = false;
            hj.anchor = anchor;
            hj.connectedAnchor = connectedAnchor;
        }

        [MenuItem("Game/SSP/2. Build SSP Character Prefabs")]
        public static void BuildPrefabs()
        {
            var template = AssetDatabase.LoadAssetAtPath<GameObject>(TemplatePrefab);
            if (template == null) { Debug.LogError("[SSP] template missing " + TemplatePrefab); return; }
            if (!AssetDatabase.IsValidFolder(OutDir)) AssetDatabase.CreateFolder("Assets/_Game", "CharactersSSP");

            for (int i = 0; i < Chars.Length; i++)
            {
                string ch = Chars[i];
                GameObject go = Object.Instantiate(template);
                go.name = i.ToString();
                Transform r = go.transform;
                Transform body = r.Find("body"), mid = r.Find("body_mid"), down = r.Find("body_down"), head = r.Find("head");
                Transform lFoot = r.Find("l_foot");
                float cx = body.localPosition.x;
                float footBottom = lFoot.localPosition.y - lFoot.GetComponent<BoxCollider2D>().size.y * 0.5f;

                Sprite sB = Spr(ch, "body"), sM = Spr(ch, "body_mid"), sD = Spr(ch, "body_down"), sH = Spr(ch, "head");
                Sprite sUA = Spr(ch, "up_arm"), sDA = Spr(ch, "down_arm"), sHA = Spr(ch, "hand");
                Sprite sUL = Spr(ch, "up_leg"), sDL = Spr(ch, "down_leg"), sF = Spr(ch, "foot");
                float hB = sB.bounds.size.y, hM = sM.bounds.size.y, hD = sD.bounds.size.y;
                float hUA = sUA.bounds.size.y, hDA = sDA.bounds.size.y, hHA = sHA.bounds.size.y;
                float hUL = sUL.bounds.size.y, hDL = sDL.bounds.size.y, hF = sF.bounds.size.y;
                float torsoLen = hB + hM + hD, legLen = hUL + hDL + hF;
                float T = footBottom + legLen + torsoLen; // top of the torso
                float torsoHalfW = sB.bounds.size.x * 0.5f;

                // ---- torso ----
                Pos(body, cx, T - hB * 0.5f); ColH(body, hB); SetPart(body, sB, 0f, false);
                Pos(mid, cx, T - hB - hM * 0.5f); ColH(mid, hM); SetPart(mid, sM, 0f, false);
                Pos(down, cx, T - hB - hM - hD * 0.5f); ColH(down, hD); SetPart(down, sD, 0f, false);

                // ---- head (collider kept, bottom on the neck) ----
                float headColH = head.GetComponent<BoxCollider2D>().size.y;
                Pos(head, cx, T + headColH * 0.5f);
                float hH = sH.bounds.size.y;
                SetPart(head, sH, (T - 0.03f + hH * 0.5f) - head.localPosition.y, false,
                    new Vector2(Mathf.Min(sH.bounds.size.x, 1.8f), Mathf.Min(hH, 2.0f)));
                Joint(body, new Vector2(0f, hB * 0.5f), new Vector2(0f, -headColH * 0.5f));
                Joint(mid, new Vector2(0f, hM * 0.5f), new Vector2(0f, -hB * 0.5f));
                Joint(down, new Vector2(0f, hD * 0.5f), new Vector2(0f, -hM * 0.5f));

                // ---- arms ----
                float armHalfW = sUA.bounds.size.x * 0.5f;
                float armX = torsoHalfW - armHalfW * ArmInset;
                float shoulderY = T - 0.094f;
                float upAnchor = hUA * 0.5f - 0.031f;
                float lowLen = hDA + hHA;
                foreach (int side in new[] { -1, 1 })
                {
                    string p = side < 0 ? "l_" : "r_";
                    bool flip = side > 0;
                    Transform ua = r.Find(p + "up_arm"), da = r.Find(p + "down_arm");
                    float x = cx + side * armX;
                    Pos(ua, x, shoulderY - upAnchor); ColH(ua, hUA);
                    Joint(ua, new Vector2(0f, upAnchor), new Vector2(side * armX, shoulderY - body.localPosition.y));
                    SetPart(ua, sUA, 0f, flip);

                    Pos(da, x, ua.localPosition.y - hUA * 0.5f - lowLen * 0.5f); ColH(da, lowLen);
                    Joint(da, new Vector2(0f, lowLen * 0.5f), new Vector2(0f, -hUA * 0.5f));
                    SetPart(da, sDA, lowLen * 0.5f - hDA * 0.5f, flip);
                    SetHand(da, sHA, lowLen * 0.5f - hDA - hHA * 0.5f, flip);

                    if (side < 0)
                        foreach (var sr in new[] { ua, da })
                            foreach (var rend in sr.GetComponentsInChildren<SpriteRenderer>(true))
                                rend.sortingOrder += FrontArmOrderShift;
                }

                // ---- legs ----
                float legX = Mathf.Min(sUL.bounds.size.x * 0.5f, torsoHalfW * 0.6f);
                float hipY = T - torsoLen;
                foreach (int side in new[] { -1, 1 })
                {
                    string p = side < 0 ? "l_" : "r_";
                    bool flip = side > 0;
                    Transform ul = r.Find(p + "up_leg"), dl = r.Find(p + "down_leg"), ft = r.Find(p + "foot");
                    float x = cx + side * legX;
                    Pos(ul, x, hipY - hUL * 0.5f); ColH(ul, hUL);
                    Joint(ul, new Vector2(0f, hUL * 0.5f), new Vector2(side * legX, -hD * 0.5f));
                    SetPart(ul, sUL, 0f, flip);

                    Pos(dl, x, ul.localPosition.y - hUL * 0.5f - hDL * 0.5f); ColH(dl, hDL);
                    Joint(dl, new Vector2(0f, hDL * 0.5f), new Vector2(0f, -hUL * 0.5f));
                    SetPart(dl, sDL, 0f, flip);

                    Pos(ft, x, dl.localPosition.y - hDL * 0.5f - hF * 0.5f); ColH(ft, hF);
                    Joint(ft, new Vector2(0f, hF * 0.5f), new Vector2(0f, -hDL * 0.5f));
                    SetPart(ft, sF, 0f, flip);
                }

                string path = OutDir + "/" + i + ".prefab";
                PrefabUtility.SaveAsPrefabAsset(go, path);
                Object.DestroyImmediate(go);
                Debug.Log("[SSP] Built " + path + " (" + ch + ")");
            }
            AssetDatabase.SaveAssets();
        }

        [MenuItem("Game/SSP/3. Create Main_SSP Scene (overwrites)")]
        public static void CreateScene()
        {
            if (EditorSceneManager.GetActiveScene().path == DstScene)
                EditorSceneManager.OpenScene(SrcScene, OpenSceneMode.Single);
            if (AssetDatabase.LoadAssetAtPath<SceneAsset>(DstScene) != null) AssetDatabase.DeleteAsset(DstScene);
            AssetDatabase.CopyAsset(SrcScene, DstScene);
            var scene = EditorSceneManager.OpenScene(DstScene, OpenSceneMode.Single);

            var refs = Object.FindObjectOfType<LevelRefs>(true);
            if (PrefabUtility.IsPartOfPrefabInstance(refs.gameObject))
                PrefabUtility.UnpackPrefabInstance(PrefabUtility.GetOutermostPrefabInstanceRoot(refs.gameObject), PrefabUnpackMode.OutermostRoot, InteractionMode.AutomatedAction);

            var selector = refs.GetComponentInChildren<CharacterSelector>(true);
            Transform manRoot = selector.transform;
            var olds = new List<GameObject>();
            if (selector.characters != null)
                foreach (var o in selector.characters) if (o != null) olds.Add(o.gameObject);
            Transform reference = olds.Count > 0 ? olds[0].transform : null;

            var newChars = new Ragdoll[Chars.Length];
            for (int i = 0; i < Chars.Length; i++)
            {
                var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(OutDir + "/" + i + ".prefab");
                var inst = (GameObject)PrefabUtility.InstantiatePrefab(prefab, manRoot);
                if (reference != null)
                {
                    inst.transform.localPosition = reference.localPosition;
                    inst.transform.localRotation = reference.localRotation;
                    inst.transform.localScale = reference.localScale;
                }
                inst.name = i.ToString();
                inst.SetActive(i == 0);
                newChars[i] = inst.GetComponent<Ragdoll>();
            }
            foreach (var g in olds) Object.DestroyImmediate(g);

            selector.characters = newChars;
            selector.index = 0;
            refs.man = newChars[0];
            var luna = Object.FindObjectOfType<LunaController>(true);
            if (luna != null) luna.Character = 0;

            foreach (var t in Object.FindObjectsOfType<Transform>(true))
                if (t != null && t.name == "Logo" && t.GetComponent<UnityEngine.UI.Image>() != null) Object.DestroyImmediate(t.gameObject);

            EditorUtility.SetDirty(selector);
            EditorUtility.SetDirty(refs);
            EditorSceneManager.MarkSceneDirty(scene);
            EditorSceneManager.SaveScene(scene);
            Debug.Log("[SSP] Scene created: " + DstScene);
        }
    }
}

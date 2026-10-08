using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

namespace MelonAd.EditorTools
{
    /// <summary>
    /// Rebuilds the Sprunki character prefabs (Assets/_Game/Characters/0..5) from their sprite sheets:
    /// front-facing skeleton laid out from the actual sprite sizes, same masses / joint limits / upright
    /// forces as the original Man, skeleton + burnt looks fitted to each body part.
    /// Then installs all 6 into Level_0/ManRoot with a CharacterSelector (index 0-5).
    ///
    /// Sheet slicing expected (suffix _N): 0 head, 1 up_arm, 2 down_arm, 3 body(chest), 4 hand,
    /// 5 body_mid, 6 up_leg, 7 body_down(pelvis), 8 down_leg, 9 foot.
    /// </summary>
    public static class CharacterBuilder
    {
        const string CharDir = "Assets/_Game/Characters/";
        const string SpriteDir = "Assets/_Game/Art/Sprites/";
        const string LevelPath = "Assets/_Game/Prefabs/Level_0.prefab";
        const float PPU = 16f;                  // 1 art pixel = 0.0625 m -> total height ~ original Man
        const int MAN = 6;
        // Feet bottom-centre, level units: exactly where the original Man stands.
        static readonly Vector2 Origin = new Vector2(4.54f, 1.64f);

        static readonly string[] PartOrder =
        {
            "l_up_arm", "l_down_arm", "l_up_leg", "l_down_leg", "l_foot",
            "body", "body_down", "body_mid", "head",
            "r_up_leg", "r_down_leg", "r_foot", "r_up_arm", "r_down_arm"
        };

        // Masses of the original Man parts (density 4 x original boxes) -> same physical behaviour.
        static float MassOf(string suffix)
        {
            switch (suffix)
            {
                case "head": return 3.24f;
                case "body": return 2.592f;
                case "body_mid": return 2.592f;
                case "body_down": return 2.3328f;
                case "up_arm": return 1.6848f;
                case "down_arm": return 2.106f;
                case "up_leg": return 1.6848f;
                case "down_leg": return 1.6848f;
                case "foot": return 0.6804f;
            }
            return 1f;
        }

        static readonly Color BurntTint = new Color(0.22f, 0.16f, 0.14f, 1f);

        struct PartDef
        {
            public Vector2 center; // px, feet-bottom origin
            public Vector2 size;   // px (collider)
        }

        [MenuItem("Game/Characters/Rebuild Characters 0-5")]
        public static void RebuildAll()
        {
            int done = 0;
            for (int i = 0; i <= 5; i++)
            {
                string path = CharDir + i + ".prefab";
                if (AssetDatabase.LoadAssetAtPath<GameObject>(path) == null) { Debug.LogWarning("[CharacterBuilder] Missing " + path); continue; }
                Rebuild(path);
                done++;
            }
            AssetDatabase.SaveAssets();
            Debug.Log("[CharacterBuilder] Rebuilt " + done + " characters.");
        }

        [MenuItem("Game/Characters/Install Into Level_0")]
        public static void InstallIntoLevel()
        {
            GameObject root = PrefabUtility.LoadPrefabContents(LevelPath);
            Transform manRoot = root.transform.Find("ManRoot");
            CharacterSelector sel = manRoot.GetComponent<CharacterSelector>();
            if (sel == null) sel = manRoot.gameObject.AddComponent<CharacterSelector>();

            // remove previously installed characters (keep the original Man, just disable it)
            for (int i = manRoot.childCount - 1; i >= 0; i--)
            {
                Transform c = manRoot.GetChild(i);
                if (c.name == "Man") { c.gameObject.SetActive(false); continue; }
                if (PrefabUtility.IsAnyPrefabInstanceRoot(c.gameObject)) Object.DestroyImmediate(c.gameObject);
            }

            Ragdoll[] list = new Ragdoll[6];
            for (int i = 0; i <= 5; i++)
            {
                GameObject asset = AssetDatabase.LoadAssetAtPath<GameObject>(CharDir + i + ".prefab");
                if (asset == null) continue;
                GameObject inst = (GameObject)PrefabUtility.InstantiatePrefab(asset, manRoot);
                inst.transform.localPosition = Vector3.zero;
                inst.transform.localRotation = Quaternion.identity;
                inst.transform.localScale = Vector3.one;
                list[i] = inst.GetComponent<Ragdoll>();
            }
            sel.characters = list;
            sel.index = Mathf.Clamp(sel.index, 0, 5);
            Ragdoll cur = sel.Apply();
            LevelRefs refs = root.GetComponent<LevelRefs>();
            refs.man = cur;

            PrefabUtility.SaveAsPrefabAsset(root, LevelPath);
            PrefabUtility.UnloadPrefabContents(root);
            Debug.Log("[CharacterBuilder] Installed 6 characters into Level_0/ManRoot (index " + sel.index + ").");
        }

        // ------------------------------------------------------------------

        const string Sprite16Dir = "Assets/_Game/Art/Characters/Sprites16/";

        /// <summary>
        /// Collects the sheet's sprites (any Sprite asset under Art/Characters using this texture, e.g. пинки_0..9)
        /// and returns PPU-16 copies stored in Art/Characters/Sprites16 (originals untouched, e.g. for UI).
        /// </summary>
        static Dictionary<int, Sprite> LoadSheet(Texture2D tex)
        {
            if (!AssetDatabase.IsValidFolder(Sprite16Dir.TrimEnd('/')))
                AssetDatabase.CreateFolder("Assets/_Game/Art/Characters", "Sprites16");

            Dictionary<int, Sprite> map = new Dictionary<int, Sprite>();
            foreach (string guid in AssetDatabase.FindAssets("t:Sprite", new[] { "Assets/_Game/Art/Characters" }))
            {
                string p = AssetDatabase.GUIDToAssetPath(guid);
                if (p.StartsWith(Sprite16Dir)) continue;
                foreach (Object o in AssetDatabase.LoadAllAssetsAtPath(p))
                {
                    Sprite src = o as Sprite;
                    if (src == null || src.texture != tex) continue;
                    int us = src.name.LastIndexOf('_');
                    int idx;
                    if (us < 0 || !int.TryParse(src.name.Substring(us + 1), out idx)) continue;
                    map[idx] = MakePpu16(src);
                }
            }
            return map;
        }

        static Sprite MakePpu16(Sprite src)
        {
            string path = Sprite16Dir + src.name + ".asset";
            Sprite fresh = Sprite.Create(src.texture, src.rect, new Vector2(0.5f, 0.5f), PPU, 0, SpriteMeshType.FullRect);
            fresh.name = src.name;
            Sprite existing = AssetDatabase.LoadAssetAtPath<Sprite>(path);
            if (existing == null)
            {
                AssetDatabase.CreateAsset(fresh, path);
                return AssetDatabase.LoadAssetAtPath<Sprite>(path);
            }
            EditorUtility.CopySerialized(fresh, existing);
            EditorUtility.SetDirty(existing);
            Object.DestroyImmediate(fresh);
            return existing;
        }

        static Sprite FindHeadSprite(GameObject root)
        {
            Transform head = root.transform.Find("head/skin");
            if (head != null)
            {
                SpriteRenderer sr = head.GetComponent<SpriteRenderer>();
                if (sr != null && sr.sprite != null) return sr.sprite;
            }
            return null;
        }

        static void Rebuild(string path)
        {
            GameObject root = PrefabUtility.LoadPrefabContents(path);
            Sprite headSprite = FindHeadSprite(root);
            if (headSprite == null)
            {
                Debug.LogError("[CharacterBuilder] " + path + ": cannot find head/skin sprite to locate the sheet.");
                PrefabUtility.UnloadPrefabContents(root);
                return;
            }
            string texPath = AssetDatabase.GetAssetPath(headSprite.texture);
            Dictionary<int, Sprite> sp = LoadSheet(headSprite.texture);
            for (int k = 0; k <= 9; k++)
            {
                if (!sp.ContainsKey(k))
                {
                    Debug.LogError("[CharacterBuilder] " + texPath + " is missing sprite _" + k);
                    PrefabUtility.UnloadPrefabContents(root);
                    return;
                }
            }

            for (int i = root.transform.childCount - 1; i >= 0; i--) Object.DestroyImmediate(root.transform.GetChild(i).gameObject);
            root.transform.localPosition = Vector3.zero;
            root.layer = 0;
            Ragdoll rd = root.GetComponent<Ragdoll>();
            if (rd == null) rd = root.AddComponent<Ragdoll>();

            // ---- layout in art pixels (origin = feet bottom-centre, y up) ----
            Vector2 head = Sz(sp[0]), upArm = Sz(sp[1]), downArm = Sz(sp[2]), chest = Sz(sp[3]), hand = Sz(sp[4]);
            Vector2 mid = Sz(sp[5]), upLeg = Sz(sp[6]), pelvis = Sz(sp[7]), downLeg = Sz(sp[8]), foot = Sz(sp[9]);

            float ankleY = foot.y;
            float kneeY = ankleY + downLeg.y;
            float hipY = kneeY + upLeg.y;
            float pelvisTop = hipY + pelvis.y;
            float midTop = pelvisTop + mid.y;
            float neckY = midTop + chest.y;
            float legX = upLeg.x * 0.5f + 0.5f;
            float armX = chest.x * 0.5f + upArm.x * 0.5f;
            float shoulderY = neckY - 1f;
            float elbowY = shoulderY - upArm.y;
            float handBottom = elbowY - downArm.y - hand.y;
            float footX = legX + (foot.x - downLeg.x) * 0.5f;

            Dictionary<string, PartDef> defs = new Dictionary<string, PartDef>();
            defs["head"] = Def(0f, neckY + head.y * 0.5f, head);
            defs["body"] = Def(0f, midTop + chest.y * 0.5f, chest);
            defs["body_mid"] = Def(0f, pelvisTop + mid.y * 0.5f, mid);
            defs["body_down"] = Def(0f, hipY + pelvis.y * 0.5f, pelvis);
            foreach (int s in new[] { -1, 1 })
            {
                string p = s < 0 ? "l_" : "r_";
                defs[p + "up_leg"] = Def(s * legX, kneeY + upLeg.y * 0.5f, upLeg);
                defs[p + "down_leg"] = Def(s * legX, ankleY + downLeg.y * 0.5f, downLeg);
                defs[p + "foot"] = Def(s * footX, foot.y * 0.5f, foot);
                defs[p + "up_arm"] = Def(s * armX, elbowY + upArm.y * 0.5f, upArm);
                defs[p + "down_arm"] = Def(s * armX, handBottom + (downArm.y + hand.y) * 0.5f,
                    new Vector2(Mathf.Max(downArm.x, hand.x), downArm.y + hand.y));
            }

            PhysicsMaterial2D friction = AssetDatabase.LoadAssetAtPath<PhysicsMaterial2D>("Assets/_Game/Materials/Friction1.physicsMaterial2D");
            Dictionary<string, RagdollPart> map = new Dictionary<string, RagdollPart>();
            RagdollPart[] parts = new RagdollPart[PartOrder.Length];

            for (int i = 0; i < PartOrder.Length; i++)
            {
                string key = PartOrder[i];
                string suf = key.StartsWith("l_") || key.StartsWith("r_") ? key.Substring(2) : key;
                PartDef d = defs[key];
                int baseOrder = 100 + i * 3;

                GameObject go = new GameObject(key);
                go.transform.SetParent(root.transform, false);
                go.transform.localPosition = U(d.center) + Origin;
                go.layer = MAN;

                Rigidbody2D rb = go.AddComponent<Rigidbody2D>();
                rb.useAutoMass = true;
                rb.linearDamping = 0f;
                rb.angularDamping = 0f;
                rb.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
                BoxCollider2D bc = go.AddComponent<BoxCollider2D>();
                Vector2 sizeU = d.size / PPU;
                bc.size = sizeU;
                bc.density = MassOf(suf) / (sizeU.x * sizeU.y);
                bc.sharedMaterial = friction;

                RagdollPart rp = go.AddComponent<RagdollPart>();
                rp.owner = rd;
                rp.rb = rb;

                Sprite skinSprite = SkinSprite(sp, suf);
                Vector2 skinOffset = Vector2.zero;
                if (suf == "down_arm") skinOffset = U(new Vector2(0f, (elbowY - downArm.y * 0.5f) - d.center.y));

                rp.burnt = MakeSprite(go.transform, "burnt", skinSprite, skinOffset, baseOrder, BurntTint);
                rp.burnt.enabled = false;
                rp.skeleton = MakeSkeleton(go.transform, suf, d, baseOrder + 1);
                rp.skin = MakeSprite(go.transform, "skin", skinSprite, skinOffset, baseOrder + 2, Color.white);
                rp.skin.maskInteraction = SpriteMaskInteraction.VisibleOutsideMask;

                if (suf == "down_arm")
                {
                    Vector2 handOffset = U(new Vector2(0f, (handBottom + hand.y * 0.5f) - d.center.y));
                    SpriteRenderer handSkin = MakeSprite(go.transform, "hand", sp[4], handOffset, baseOrder + 2, Color.white);
                    handSkin.maskInteraction = SpriteMaskInteraction.VisibleOutsideMask;
                    SpriteRenderer handBurnt = MakeSprite(go.transform, "hand_burnt", sp[4], handOffset, baseOrder, BurntTint);
                    handBurnt.enabled = false;
                    rp.skinExtras = new[] { handSkin };
                    rp.burntExtras = new[] { handBurnt };
                }

                Grabbable g = go.AddComponent<Grabbable>();
                g.rb = rb;
                g.owner = rd;

                parts[i] = rp;
                map[key] = rp;
            }

            // ---- joints: same pairs & limits as the original Man ----
            J(map, "head", "body", new Vector2(0f, neckY), true, -18f, 18f);
            J(map, "body", "body_mid", new Vector2(0f, midTop), true, -18f, 18f);
            J(map, "body_mid", "body_down", new Vector2(0f, pelvisTop), true, -18f, 18f);
            foreach (int s in new[] { -1, 1 })
            {
                string p = s < 0 ? "l_" : "r_";
                J(map, "body", p + "up_arm", new Vector2(s * armX, shoulderY - 0.5f), false, 0f, 0f);
                J(map, p + "up_arm", p + "down_arm", new Vector2(s * armX, elbowY), true, 0f, 144f);
                J(map, "body_down", p + "up_leg", new Vector2(s * legX, hipY), true, -18f, 162f);
                J(map, p + "up_leg", p + "down_leg", new Vector2(s * legX, kneeY), true, -162f, 0f);
                J(map, p + "down_leg", p + "foot", new Vector2(s * legX, ankleY), true, -18f, 18f);
            }

            rd.parts = parts;
            rd.head = map["head"];
            rd.leftFoot = map["l_foot"];
            rd.rightFoot = map["r_foot"];
            rd.headLift = 25f;
            rd.footPull = 18f;

            Sprite circle = AssetDatabase.LoadAssetAtPath<Sprite>("Assets/_Game/Art/Generated/circle.png");
            GameObject hole = new GameObject("HoleMask");
            hole.transform.SetParent(root.transform, false);
            SpriteMask sm = hole.AddComponent<SpriteMask>();
            sm.sprite = circle;
            sm.isCustomRangeActive = true;
            sm.backSortingOrder = 99;
            sm.frontSortingOrder = 199;
            hole.SetActive(false);
            rd.hole = sm;
            rd.holeDiameter = circle != null ? circle.bounds.size.x : 1.28f;

            PrefabUtility.SaveAsPrefabAsset(root, path);
            PrefabUtility.UnloadPrefabContents(root);
        }

        static Vector2 Sz(Sprite s) { return new Vector2(s.rect.width, s.rect.height); }
        static Vector2 U(Vector2 px) { return px / PPU; }

        static PartDef Def(float cx, float cy, Vector2 size)
        {
            PartDef d = new PartDef();
            d.center = new Vector2(cx, cy);
            d.size = size;
            return d;
        }

        static Sprite SkinSprite(Dictionary<int, Sprite> sp, string suf)
        {
            switch (suf)
            {
                case "head": return sp[0];
                case "up_arm": return sp[1];
                case "down_arm": return sp[2];
                case "body": return sp[3];
                case "body_mid": return sp[5];
                case "up_leg": return sp[6];
                case "body_down": return sp[7];
                case "down_leg": return sp[8];
                case "foot": return sp[9];
            }
            return null;
        }

        static SpriteRenderer MakeSprite(Transform parent, string name, Sprite sprite, Vector2 localPos, int order, Color color)
        {
            GameObject go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.localPosition = localPos;
            SpriteRenderer sr = go.AddComponent<SpriteRenderer>();
            sr.sprite = sprite;
            sr.sortingOrder = order;
            sr.color = color;
            return sr;
        }

        /// <summary>Original Melon bone sprite, stretched to sit inside the new body part.</summary>
        static SpriteRenderer MakeSkeleton(Transform parent, string suf, PartDef d, int order)
        {
            Sprite bone = AssetDatabase.LoadAssetAtPath<Sprite>(SpriteDir + "msk_" + suf + ".png");
            SpriteRenderer sr = MakeSprite(parent, "skeleton", bone, Vector2.zero, order, Color.white);
            if (bone == null) return sr;
            Vector2 b = bone.bounds.size;
            Vector2 part = d.size / PPU;
            if (suf == "head")
            {
                float side = Mathf.Min(part.x, part.y) * 0.75f;
                sr.transform.localScale = new Vector3(side / b.x, side / b.y, 1f);
                sr.transform.localPosition = new Vector3(0f, -part.y * 0.5f + side * 0.55f, 0f);
            }
            else
            {
                float wf = suf.StartsWith("body") ? 0.65f : 0.8f;
                sr.transform.localScale = new Vector3(part.x * wf / b.x, part.y * 0.95f / b.y, 1f);
            }
            return sr;
        }

        static void J(Dictionary<string, RagdollPart> map, string a, string b, Vector2 anchorPx, bool limit, float lo, float hi)
        {
            RagdollPart A = map[a], B = map[b];
            Vector2 anchor = U(anchorPx) + Origin;
            HingeJoint2D h = B.gameObject.AddComponent<HingeJoint2D>();
            h.connectedBody = A.rb;
            h.autoConfigureConnectedAnchor = false;
            h.anchor = anchor - (Vector2)B.transform.localPosition;
            h.connectedAnchor = anchor - (Vector2)A.transform.localPosition;
            h.enableCollision = false;
            h.useLimits = limit;
            if (limit) h.limits = new JointAngleLimits2D { min = lo, max = hi };
        }
    }
}

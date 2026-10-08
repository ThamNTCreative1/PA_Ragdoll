using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

namespace MelonAd.EditorTools
{
    public static class CharacterPrefabBuilder
    {
        const string CharacterDir = "Assets/_Game/Characters";
        const string SpriteDir = "Assets/_Game/Art/Characters/Sprites/";
        const string Level0Path = "Assets/_Game/Prefabs/Level_0.prefab";

        struct CharDef
        {
            public string Name;
            public string Alias;
            public string Prefix;

            public CharDef(string name, string alias, string prefix)
            {
                Name = name;
                Alias = alias;
                Prefix = prefix;
            }
        }

        static readonly CharDef[] Characters = new CharDef[]
        {
            new CharDef("Character_07_Brute", "Sprunky_7", "брут_"),
            new CharDef("Character_14_Pinki", "Sprunky_14", "пинки_"),
            new CharDef("Character_17_Black", "Sprunky_17", "черный_"),
            new CharDef("Character_19_Reddy", "Sprunky_19", "reddy 2_"),
            new CharDef("Character_20_Simon", "Sprunky_20", "simon 2_"),
            new CharDef("Character_22_FunBot", "Sprunky_22", "fun bot 2_")
        };

        [MenuItem("Game/Build Character Prefabs")]
        public static void BuildPrefabs()
        {
            var level0Prefab = AssetDatabase.LoadAssetAtPath<GameObject>(Level0Path);
            if (level0Prefab == null)
            {
                Debug.LogError("[CharacterPrefabBuilder] Level_0.prefab not found at " + Level0Path);
                return;
            }

            var manSource = level0Prefab.transform.Find("ManRoot/Man");
            if (manSource == null)
            {
                Debug.LogError("[CharacterPrefabBuilder] Man not found in Level_0.prefab under ManRoot/Man");
                return;
            }

            if (!AssetDatabase.IsValidFolder(CharacterDir))
            {
                AssetDatabase.CreateFolder("Assets/_Game", "Characters");
            }

            Dictionary<string, int> partMap = new Dictionary<string, int>()
            {
                { "head", 0 },
                { "l_up_arm", 1 },
                { "r_up_arm", 1 },
                { "l_down_arm", 2 },
                { "r_down_arm", 2 },
                { "body", 3 },
                { "body_mid", 5 },
                { "l_up_leg", 6 },
                { "r_up_leg", 6 },
                { "body_down", 7 },
                { "l_down_leg", 8 },
                { "r_down_leg", 8 },
                { "l_foot", 9 },
                { "r_foot", 9 }
            };

            foreach (var c in Characters)
            {
                GameObject inst = UnityEngine.Object.Instantiate(manSource.gameObject);
                inst.name = c.Name;

                var s2 = AssetDatabase.LoadAssetAtPath<Sprite>(SpriteDir + c.Prefix + "2.asset");
                var s4 = AssetDatabase.LoadAssetAtPath<Sprite>(SpriteDir + c.Prefix + "4.asset");
                float handOffsetY = (s2 != null && s4 != null) ? (s2.rect.center.y - s4.rect.center.y) / 100f : 0.1f;

                foreach (var kvp in partMap)
                {
                    var partTrans = inst.transform.Find(kvp.Key);
                    if (partTrans == null) continue;

                    var skinTrans = partTrans.Find("skin");
                    if (skinTrans != null)
                    {
                        var sr = skinTrans.GetComponent<SpriteRenderer>();
                        var spr = AssetDatabase.LoadAssetAtPath<Sprite>(SpriteDir + c.Prefix + kvp.Value + ".asset");
                        if (spr != null) sr.sprite = spr;

                        if (kvp.Key == "l_down_arm" || kvp.Key == "r_down_arm")
                        {
                            Transform handTrans = skinTrans.Find("hand");
                            if (handTrans == null)
                            {
                                GameObject handGo = new GameObject("hand");
                                handTrans = handGo.transform;
                                handTrans.SetParent(skinTrans, false);
                            }
                            handTrans.localPosition = new Vector3(0, -handOffsetY, 0);
                            var handSr = handTrans.GetComponent<SpriteRenderer>();
                            if (handSr == null) handSr = handTrans.gameObject.AddComponent<SpriteRenderer>();
                            handSr.sprite = s4;
                            handSr.sortingLayerID = sr.sortingLayerID;
                            handSr.sortingOrder = sr.sortingOrder;
                            handSr.maskInteraction = SpriteMaskInteraction.VisibleOutsideMask;
                        }
                    }
                }

                string pPath = CharacterDir + "/" + c.Name + ".prefab";
                PrefabUtility.SaveAsPrefabAsset(inst, pPath);

                string aPath = CharacterDir + "/" + c.Alias + ".prefab";
                PrefabUtility.SaveAsPrefabAsset(inst, aPath);

                UnityEngine.Object.DestroyImmediate(inst);
                Debug.Log("[CharacterPrefabBuilder] Created: " + c.Name + " and " + c.Alias);
            }

            AssetDatabase.SaveAssets();
            AssetDatabase.Refresh();
            Debug.Log("[CharacterPrefabBuilder] Completed building all character prefabs.");
        }
    }
}

using System;
using System.Collections.Generic;
using UnityEngine;

namespace MelonSandbox
{
    [Serializable] public class LayoutNode
    {
        public string name, type, pic;
        public float x, y, w, h;
        public LayoutChild[] groups;
    }
    [Serializable] public class LayoutChild { public string name, type, pic; public float x, y, w, h; }
    [Serializable] public class LayoutWindow { public string name; public LayoutNode[] groups; }
    [Serializable] public class LayoutDocument { public LayoutWindow[] windows; }

    [CreateAssetMenu(menuName = "Melon Sandbox/Asset catalog")]
    public sealed class MelonAssets : ScriptableObject
    {
        public Sprite[] sprites;
        public AudioClip[] sounds;
        public TextAsset originalLayout;
        public Material damageMaterial;
        public Font uiFont;
        public GameObject[] characterPrefabs;
        public GameObject[] toolPrefabs;
        Dictionary<string, Sprite> spriteMap;
        Dictionary<string, AudioClip> soundMap;
        Dictionary<string, LayoutNode> nodes;
        public void Prepare()
        {
            if (spriteMap != null) return;
            spriteMap = new Dictionary<string, Sprite>();
            soundMap = new Dictionary<string, AudioClip>();
            nodes = new Dictionary<string, LayoutNode>();
            foreach (var s in sprites) if (s) spriteMap[s.name] = s;
            foreach (var s in sounds) if (s) soundMap[s.name] = s;
            if (originalLayout)
                foreach (var w in ParseLayout(originalLayout.text).windows)
                    foreach (var n in w.groups) nodes[w.name + "/" + n.name] = n;
        }
        static LayoutDocument ParseLayout(string json)
        {
#if UNITY_LUNA
            return Newtonsoft.Json.JsonConvert.DeserializeObject<LayoutDocument>(json);
#else
            return JsonUtility.FromJson<LayoutDocument>(json);
#endif
        }
        public Sprite Sprite(string key) { Prepare(); return spriteMap.TryGetValue(key, out var s) ? s : null; }
        public AudioClip Sound(string key) { Prepare(); return soundMap.TryGetValue(key, out var s) ? s : null; }
        public GameObject CharacterPrefab(string key)
        {
            if (characterPrefabs == null) return null;
            foreach (var prefab in characterPrefabs)
            {
                if (!prefab) continue;
                var character = prefab.GetComponent<MelonRagdoll>();
                if (character && character.skinName == key) return prefab;
            }
            return null;
        }
        public GameObject ToolPrefab(MelonToolKind kind)
        {
            if (toolPrefabs == null) return null;
            foreach (var prefab in toolPrefabs)
                if (prefab && prefab.name == kind.ToString()) return prefab;
            return null;
        }
        public LayoutNode Node(string name, string window = "MSG")
        { Prepare(); return nodes.TryGetValue(window + "/" + name, out var n) ? n : null; }
        public SpriteRenderer Visual(string key, Transform parent, Vector2 position, Vector2 size, int order)
        {
            var go = new GameObject(key);
            go.transform.SetParent(parent, false);
            go.transform.position = position;
            var sr = go.AddComponent<SpriteRenderer>();
            sr.sprite = Sprite(key);
            sr.sortingOrder = order;
            if (sr.sprite && size.x > 0 && size.y > 0)
                go.transform.localScale = new Vector3(size.x / sr.sprite.bounds.size.x, size.y / sr.sprite.bounds.size.y, 1);
            return sr;
        }
    }
}

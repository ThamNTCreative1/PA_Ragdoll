using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay;

    [Header("Character")]
    [LunaPlaygroundField("Character 1 (1-12)")] public int Character1 = 1;
    [LunaPlaygroundField("Character 2 (1-12)")] public int Character2 = 2;
    [Tooltip("Prefab theo thu tu: phan tu 0 = Character_1, phan tu 1 = Character_2, ... (tu nap tu thu muc trong Editor)")]
    [SerializeField] private List<GameObject> CharacterPrefabs = new List<GameObject>();
    [SerializeField] private string characterFolder = "Assets/03 PREFABS/Character";
    [SerializeField] private global::CharacterController characterController;

    [SerializeField] private RawImage BGImage;
    [SerializeField] private List<Button> CTA;

    void Start()
    {
        ApplyCharacters();
        BGImage.texture = BGTexture;
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        StartCoroutine(EndGame());
    }

    public void ApplyCharacters()
    {
        if (characterController == null) characterController = FindObjectOfType<global::CharacterController>();
        if (characterController == null) return;
        characterController.ApplyCharacter1(GetCharacterPrefab(Character1));
        characterController.ApplyCharacter2(GetCharacterPrefab(Character2));
    }

    /// <summary>Lay prefab theo index 1-based (1 = Character_1).</summary>
    public GameObject GetCharacterPrefab(int index)
    {
        if (CharacterPrefabs == null || CharacterPrefabs.Count == 0) return null;
        index = Mathf.Clamp(index, 1, CharacterPrefabs.Count);
        return CharacterPrefabs[index - 1];
    }

    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (UseTime) ClickCTA();
    }
}
// #if UNITY_EDITOR
//     // Doi Character 1/2 trong Inspector la thay ngay trong Scene
//     private void OnValidate()
//     {
//         if (Application.isPlaying) return;
//         UnityEditor.EditorApplication.delayCall += () =>
//         {
//             if (this == null) return;
//             LoadPrefabsFromFolder();
//             ApplyCharacters();
//         };
//     }

//     [ContextMenu("Load Character Prefabs From Folder")]
//     private void LoadPrefabsFromFolder()
//     {
//         if (string.IsNullOrEmpty(characterFolder) || !UnityEditor.AssetDatabase.IsValidFolder(characterFolder)) return;
//         var found = new List<GameObject>();
//         foreach (var guid in UnityEditor.AssetDatabase.FindAssets("t:Prefab", new[] { characterFolder }))
//         {
//             var go = UnityEditor.AssetDatabase.LoadAssetAtPath<GameObject>(UnityEditor.AssetDatabase.GUIDToAssetPath(guid));
//             if (go != null && go.transform.Find("Parts") != null) found.Add(go);
//         }
//         // Sap xep theo so trong ten: Character_1, Character_2, ..., Character_10
//         found.Sort((a, b) =>
//         {
//             int na = ExtractNumber(a.name), nb = ExtractNumber(b.name);
//             return na != nb ? na.CompareTo(nb) : string.CompareOrdinal(a.name, b.name);
//         });
//         bool changed = found.Count != CharacterPrefabs.Count;
//         for (int i = 0; !changed && i < found.Count; i++) changed = found[i] != CharacterPrefabs[i];
//         if (!changed) return;
//         CharacterPrefabs = found;
//         UnityEditor.EditorUtility.SetDirty(this);
//     }

//     private static int ExtractNumber(string s)
//     {
//         int end = s.Length;
//         while (end > 0 && !char.IsDigit(s[end - 1])) end--;
//         int start = end;
//         while (start > 0 && char.IsDigit(s[start - 1])) start--;
//         int n;
//         return start < end && int.TryParse(s.Substring(start, end - start), out n) ? n : int.MaxValue;
//     }
// #endif
// }

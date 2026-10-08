using System.Collections;
using System.Collections.Generic;
using MelonAd;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Luna Playground entry point. ONE character field (0-5) drives Level_0/ManRoot/CharacterSelector.
/// Edit mode: changing Character swaps the character in the scene immediately.
/// Runtime: applied in Awake, before GameManager.Start initialises the level (no clones, no double spawn).
/// </summary>
public class LunaController : MonoBehaviour
{
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay = 30f;

    [Header("Character")]
    [LunaPlaygroundField("Character (0-5)")]
    [Range(0, 5)]
    public int Character = 0;

    [SerializeField] private CharacterSelector characterSelector;
    [SerializeField] private RawImage BGImage;
    [SerializeField] private List<Button> CTA = new List<Button>();

    void Awake()
    {
        ApplyCharacter();
    }

    void Start()
    {
        if (BGImage != null && BGTexture != null) BGImage.texture = BGTexture;
        for (int i = 0; i < CTA.Count; i++)
            if (CTA[i] != null) CTA[i].onClick.AddListener(ClickCTA);
        if (UseTime && TimePlay > 0f) StartCoroutine(EndGame());
    }

    public void ApplyCharacter()
    {
        if (characterSelector == null) return;
        characterSelector.index = Mathf.Clamp(Character, 0, 5);
    }

    private void ClickCTA()
    {
        LunaBridge.InstallFullGame();
    }

    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        LunaBridge.GameEnded();
        ClickCTA();
    }
}

// #if UNITY_EDITOR
//     void OnValidate()
//     {
//         if (Application.isPlaying || UnityEditor.EditorUtility.IsPersistent(this)) return;
//         UnityEditor.EditorApplication.delayCall += EditorSync;
//     }

//     void EditorSync()
//     {
//         if (this == null || Application.isPlaying || characterSelector == null) return;
//         characterSelector.EditorSetIndex(Mathf.Clamp(Character, 0, 5));
//     }
// #endif
// }

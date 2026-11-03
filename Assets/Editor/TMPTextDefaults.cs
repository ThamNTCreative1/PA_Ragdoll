using TMPro;
using UnityEditor;
using UnityEngine;

// Newly created TextMeshPro text (GameObject menu or Add Component) gets the project's text defaults:
// FFFF Forward padded font, auto size (max = current size, min = 40%), no wrapping, truncate instead of overflowing.
// Only fresh text (default content, auto size not set up yet) is touched, so duplicates of existing text keep their settings.
[InitializeOnLoad]
static class TMPTextDefaults
{
    const string FontPath = "Assets/01 RESOURCES/UI/FFFFORWA SDF Padded.asset";

    static TMPTextDefaults()
    {
        ObjectChangeEvents.changesPublished -= OnChanges;
        ObjectChangeEvents.changesPublished += OnChanges;
    }

    static void OnChanges(ref ObjectChangeEventStream stream)
    {
        for (int i = 0; i < stream.length; i++)
        {
            int id;
            switch (stream.GetEventType(i))
            {
                case ObjectChangeKind.CreateGameObjectHierarchy:
                    CreateGameObjectHierarchyEventArgs created;
                    stream.GetCreateGameObjectHierarchyEvent(i, out created);
                    id = created.instanceId;
                    break;
                case ObjectChangeKind.ChangeGameObjectStructure:
                    ChangeGameObjectStructureEventArgs changed;
                    stream.GetChangeGameObjectStructureEvent(i, out changed);
                    id = changed.instanceId;
                    break;
                default:
                    continue;
            }
            GameObject go = EditorUtility.InstanceIDToObject(id) as GameObject;
            if (go != null) Apply(go);
        }
    }

    static void Apply(GameObject go)
    {
        TMP_FontAsset font = AssetDatabase.LoadAssetAtPath<TMP_FontAsset>(FontPath);
        if (font == null) return;
        foreach (TMP_Text t in go.GetComponentsInChildren<TMP_Text>(true))
        {
            if (!IsFresh(t, font)) continue;
            Undo.RecordObject(t, "TMP text defaults");
            t.font = font;
            t.fontSharedMaterial = font.material;
            float size = t.fontSize;
            t.enableAutoSizing = true;
            t.fontSizeMax = size;
            t.fontSizeMin = Mathf.Max(8f, Mathf.Round(size * 0.4f));
            t.textWrappingMode = TextWrappingModes.NoWrap;
            t.overflowMode = TextOverflowModes.Truncate;   // the FFFF font has no "…" glyph, so Ellipsis would fall back anyway
            EditorUtility.SetDirty(t);
        }
    }

    // A text object straight out of the TMP menu / Add Component: default content, auto size never set up,
    // and either the stock font or the project default font. Duplicated, already-configured text is skipped.
    static bool IsFresh(TMP_Text t, TMP_FontAsset projectFont)
    {
        if (t.enableAutoSizing) return false;
        bool stockFont = t.font == null || t.font == projectFont || t.font.name.StartsWith("LiberationSans");
        bool defaultText = string.IsNullOrEmpty(t.text) || t.text == "New Text";
        return stockFont && defaultText;
    }
}

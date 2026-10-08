using UnityEngine;

namespace MelonAd
{
    /// <summary>
    /// Lives on Level_0/ManRoot. Holds the 6 character ragdolls (prefabs 0-5) and keeps exactly one active.
    /// Change Index in the Inspector (edit mode swaps immediately) or from Luna Playground (applied at load).
    /// </summary>
    public class CharacterSelector : MonoBehaviour
    {
        [Tooltip("Driven by LunaController.Character when a LunaController is in the scene.")]
        [Range(0, 5)]
        public int index;

        public Ragdoll[] characters;

        public Ragdoll Current
        {
            get
            {
                if (characters == null || characters.Length == 0) return null;
                return characters[Mathf.Clamp(index, 0, characters.Length - 1)];
            }
        }

        /// <summary>Activates the selected character, deactivates the others, returns it.</summary>
        public Ragdoll Apply()
        {
            if (characters == null || characters.Length == 0) return null;
            int sel = Mathf.Clamp(index, 0, characters.Length - 1);
            for (int i = 0; i < characters.Length; i++)
            {
                if (characters[i] == null) continue;
                bool isActive = i == sel;
                if (characters[i].gameObject.activeSelf != isActive) characters[i].gameObject.SetActive(isActive);
            }
            return characters[sel];
        }

#if UNITY_EDITOR
        void OnValidate()
        {
            if (Application.isPlaying || UnityEditor.EditorUtility.IsPersistent(this)) return;
            UnityEditor.EditorApplication.delayCall += EditorApply;
        }

        public void EditorSetIndex(int i)
        {
            UnityEditor.Undo.RecordObject(this, "Select character");
            index = i;
            UnityEditor.PrefabUtility.RecordPrefabInstancePropertyModifications(this);
            EditorApply();
        }

        void EditorApply()
        {
            if (this == null || Application.isPlaying) return;
            if (characters != null)
            {
                for (int i = 0; i < characters.Length; i++)
                {
                    if (characters[i] == null) continue;
                    UnityEditor.Undo.RecordObject(characters[i].gameObject, "Select character");
                }
            }
            Ragdoll cur = Apply();
            LevelRefs refs = GetComponentInParent<LevelRefs>(true);
            if (refs != null && cur != null && refs.man != cur)
            {
                UnityEditor.Undo.RecordObject(refs, "Select character");
                refs.man = cur;
                UnityEditor.PrefabUtility.RecordPrefabInstancePropertyModifications(refs);
            }
            if (characters != null)
                for (int i = 0; i < characters.Length; i++)
                    if (characters[i] != null) UnityEditor.PrefabUtility.RecordPrefabInstancePropertyModifications(characters[i].gameObject);
        }
#endif
    }
}

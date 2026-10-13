using UnityEngine;

namespace MelonSandbox
{
    public class ResetSprite : MonoBehaviour
    {
        [SerializeField] private Material _matReset;

#if UNITY_EDITOR
        [ContextMenu("Reset Child Sprite Materials")]
        private void ResetChildSpriteMaterials()
        {
            if (_matReset == null)
            {
                Debug.LogWarning("Assign a reset material before resetting child sprites.", this);
                return;
            }

            foreach (var spriteRenderer in GetComponentsInChildren<SpriteRenderer>(true))
            {
                if (spriteRenderer.gameObject == gameObject || spriteRenderer.sharedMaterial == _matReset)
                    continue;

                UnityEditor.Undo.RecordObject(spriteRenderer, "Reset Child Sprite Materials");
                spriteRenderer.sharedMaterial = _matReset;
                spriteRenderer.sortingLayerID = 0;
                UnityEditor.PrefabUtility.RecordPrefabInstancePropertyModifications(spriteRenderer);
            }
        }
#endif
    }
}
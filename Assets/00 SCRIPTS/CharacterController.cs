using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Ap skin nhan vat len cac doi tuong trong scene.
/// Index va danh sach prefab duoc quan ly o LunaController.
/// Tat ca nhan vat dung chung khung xuong Parts/head_mid, chest_mid, ... nen chi can copy sprite.
/// </summary>
public class CharacterController : MonoBehaviour
{
    [Tooltip("Cac nhan vat doi theo Character 1")]
    [SerializeField] private List<Transform> character1Targets = new List<Transform>();

    [Tooltip("Cac nhan vat doi theo Character 2")]
    [SerializeField] private List<Transform> character2Targets = new List<Transform>();

    public void ApplyCharacter1(GameObject prefab)
    {
        ApplyGroup(character1Targets, prefab);
    }

    public void ApplyCharacter2(GameObject prefab)
    {
        ApplyGroup(character2Targets, prefab);
    }

    private void ApplyGroup(List<Transform> targets, GameObject prefab)
    {
        if (prefab == null || targets == null) return;
        for (int i = 0; i < targets.Count; i++)
        {
            if (targets[i] == null) continue;
            ApplySkin(targets[i], prefab);
#if UNITY_EDITOR
            if (!Application.isPlaying) MarkDirty(targets[i]);
#endif
        }
    }

    private static void ApplySkin(Transform target, GameObject prefab)
    {
        Transform src = prefab.transform.Find("Parts");
        Transform dst = target.Find("Parts");
        if (src == null || dst == null) return;

        for (int i = 0; i < src.childCount; i++)
        {
            Transform srcPart = src.GetChild(i);
            Transform dstPart = dst.Find(srcPart.name);
            if (dstPart == null) continue;

            SpriteRenderer srcSr = srcPart.GetComponentInChildren<SpriteRenderer>(true);
            SpriteRenderer dstSr = dstPart.GetComponentInChildren<SpriteRenderer>(true);
            if (srcSr == null || dstSr == null) continue;

            dstSr.sprite = srcSr.sprite;
            dstSr.color = srcSr.color;
            dstSr.flipX = srcSr.flipX;
            dstSr.flipY = srcSr.flipY;
            dstSr.sortingOrder = srcSr.sortingOrder;

            if (srcSr.transform != srcPart && dstSr.transform != dstPart)
            {
                dstSr.transform.localPosition = srcSr.transform.localPosition;
                dstSr.transform.localRotation = srcSr.transform.localRotation;
                dstSr.transform.localScale = srcSr.transform.localScale;
            }
        }
    }

#if UNITY_EDITOR
    private static void MarkDirty(Transform t)
    {
        foreach (var sr in t.GetComponentsInChildren<SpriteRenderer>(true))
        {
            UnityEditor.EditorUtility.SetDirty(sr);
            UnityEditor.EditorUtility.SetDirty(sr.transform);
            UnityEditor.PrefabUtility.RecordPrefabInstancePropertyModifications(sr);
            UnityEditor.PrefabUtility.RecordPrefabInstancePropertyModifications(sr.transform);
        }
    }
#endif
}

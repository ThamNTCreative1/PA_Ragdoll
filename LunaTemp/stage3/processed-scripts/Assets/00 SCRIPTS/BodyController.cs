using System.Collections.Generic;
using UnityEngine;

public class BodyController : MonoBehaviour
{
    [SerializeField] private List<BodyPiece> bodyPieces;
    [SerializeField] private List<Dragable> dragPieces;
    [SerializeField] private Animator anim;

    private void Awake()
    {
        foreach (var d in dragPieces)
        {
            d.OnDrag += Drag;
            d.OnEndDrag += EndDrag;
        }
    }
    private void Drag()
    {
        anim.enabled = false;
        foreach (var p in bodyPieces)
        {
            p.notUseAnim = true;
        }
    }
    private void EndDrag()
    {
        foreach (var p in bodyPieces)
        {
            
        }
        //anim.enabled = true;
    }
}
using System;
using UnityEngine;

public class Dragable : MonoBehaviour
{
    public Action OnDrag;
    public Action OnEndDrag;

    public void StartMove()
    {
        OnDrag?.Invoke();
    }
    public void EndMove()
    {
        OnEndDrag?.Invoke();
    }
    
}
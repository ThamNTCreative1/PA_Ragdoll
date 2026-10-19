using UnityEngine;
using UnityEngine.Events;

public class Box : MonoBehaviour
{
    public UnityEvent OnTap;
    public UnityEvent OnUnBox;

    public void TapBox()
    {
        OnTap?.Invoke();
    }
    public void UnBox()
    {
        OnUnBox?.Invoke();
    }
}
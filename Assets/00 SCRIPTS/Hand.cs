using UnityEngine;
using UnityEngine.Events;

public class Hand : MonoBehaviour
{
    public UnityEvent OnTap;

    public void MoveHand()
    {
        OnTap?.Invoke();
    }
}
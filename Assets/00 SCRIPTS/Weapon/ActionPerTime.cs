using UnityEngine;
using UnityEngine.Events;

public class ActionPerTime : MonoBehaviour
{
    [SerializeField] private UnityEvent action;
    [SerializeField] private bool isPause;

    public void Pause()
    {
        isPause = true;
    }
    public void Play()
    {
        isPause = false;
    }
    private void Update()
    {
        if (isPause) return;
        action?.Invoke();
    }
}
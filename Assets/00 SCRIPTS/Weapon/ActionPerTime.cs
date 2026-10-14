using UnityEngine;
using UnityEngine.Events;

public class ActionPerTime : MonoBehaviour
{
    [SerializeField] private PlayerController player;
    [SerializeField] private UnityEvent action;
    [SerializeField] private bool isPause;

    private void Awake()
    {
        player.OnAttack += () => isPause = false;
        player.OnStopAttack += () => isPause = true;
    }

    private void Update()
    {
        if (isPause) return;
        action?.Invoke();
    }
}
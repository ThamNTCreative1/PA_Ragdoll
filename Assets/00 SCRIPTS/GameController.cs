using UnityEngine;
using UnityEngine.Events;

public class GameController : MonoBehaviour
{
    [SerializeField] private int tapCount;
    public static GameController Ins { get; private set; }
    public UnityEvent OnTap;
    public UnityEvent TapDone;
    private void Awake()
    {
        if (Ins != null && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }

    public void Tap()
    {
        if (tapCount <= 0) return;
        OnTap?.Invoke();
        tapCount = Mathf.Max(0, tapCount - 1);
        if (tapCount <= 0) TapDone?.Invoke();
    }
}

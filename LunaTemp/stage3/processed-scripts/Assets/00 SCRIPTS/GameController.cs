using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] GameObject endUI;
    public static GameController Ins { get; private set; }
    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }
    private void Awake()
    {
        CreateIns();
    }

    public void End()
    {
        endUI.SetActive(true);
    }
}

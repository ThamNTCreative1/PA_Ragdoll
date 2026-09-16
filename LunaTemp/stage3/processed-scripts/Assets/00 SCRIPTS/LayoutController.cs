using UnityEngine;

public class LayoutController : MonoBehaviour
{
    [SerializeField] private Transform game;
    [SerializeField] private Transform button;

    private float oldRatio;
    private void Start()
    {
        Fit();
    }

    private void Update()
    {
        Fit();
    }
    private void Fit()
    {
        float ratio = (float)Screen.width / Screen.height;
        if (ratio == oldRatio) return;
        oldRatio = ratio;
        if (ratio < 0.8f)
        {
            game.localScale = Vector3.one * 0.4f;
            button.localScale = Vector3.one;
        }
        else if (ratio < 1.3f)
        {
            game.localScale = Vector3.one * 0.5f;
            button.localScale = Vector3.one;
        }
        else
        {
            game.localScale = Vector3.one * 0.7f;
            button.localScale = Vector3.one * 1.3f;
        }
    }
}

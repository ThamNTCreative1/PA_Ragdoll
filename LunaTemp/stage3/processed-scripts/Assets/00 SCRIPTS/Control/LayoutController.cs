using UnityEngine;

public class LayoutController : MonoBehaviour
{
    [SerializeField] private Transform main;
    private float oldRatio;
    void Start()
    {
        Fit();
    }

    void Update()
    {
        Fit();
    }
    private void Fit()
    {
        float ratio = (float)Screen.width / Screen.height;
        if (ratio == oldRatio) return;
        oldRatio = ratio;
        if (ratio > 1f)
        {
            main.transform.localScale = Vector3.one;
        }
        else
        {
            main.transform.localScale = Vector3.one * 0.75f;
        }
    }

}

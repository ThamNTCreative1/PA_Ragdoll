using UnityEngine;

public class LayoutController : MonoBehaviour
{
    [SerializeField] private Transform main;
    [SerializeField] private RectTransform fight;
    [SerializeField] private RectTransform defense;
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
            main.transform.localScale = Vector3.one * 2;
            fight.transform.localScale = Vector3.one * 1.5f;
            defense.transform.localScale = Vector3.one * 1.5f;
        }
        else
        {
            main.transform.localScale = Vector3.one;
            fight.transform.localScale = Vector3.one;
            defense.transform.localScale = Vector3.one;
        }
    }

}

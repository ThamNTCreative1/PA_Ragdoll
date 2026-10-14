using System.Collections.Generic;
using UnityEngine;

public class LayoutController : MonoBehaviour
{
    [SerializeField] private Camera cam;
    [SerializeField] private List<Transform> tut;
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
        if (ratio > 1.3f)
        {
            cam.orthographicSize = 8f;
            tut.ForEach(t => t.localScale = Vector2.one * 1.5f);
        }
        else
        {
            cam.orthographicSize = 10f;
            tut.ForEach(t => t.localScale = Vector2.one);
        }
    }

}

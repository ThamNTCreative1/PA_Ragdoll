using System.Collections.Generic;
using UnityEngine;

public class LayoutController : MonoBehaviour
{
    [SerializeField] private Camera cam;
    [SerializeField] private List<RectTransform> UI;

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
        Vector3 camPos = cam.transform.position;
        if (ratio > 1f)
        {
            camPos.y = -2;
            cam.transform.position = camPos;
            cam.orthographicSize = 3f;
            UI.ForEach(rect => rect.transform.localScale = Vector3.one * 1.5f);
        }
        else
        {
            camPos.y = -1;
            cam.transform.position = camPos;
            cam.orthographicSize = 4;
            UI.ForEach(rect => rect.transform.localScale = Vector3.one);
        }
    }

}

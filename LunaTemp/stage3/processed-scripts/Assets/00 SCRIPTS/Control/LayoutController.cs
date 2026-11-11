using UnityEngine;

public class LayoutController : MonoBehaviour
{
    [SerializeField] private Camera cam;
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
        Vector3 camPos = cam.transform.position;

        if (ratio > 1f)
        {
            cam.orthographicSize = 3;
            camPos.y = -2;
            cam.transform.position = camPos;

            fight.transform.localScale = Vector3.one * 1.5f;
            defense.transform.localScale = Vector3.one * 1.5f;
        }
        else
        {
            cam.orthographicSize = 5;
            camPos.y = 0;
            cam.transform.position = camPos;

            fight.transform.localScale = Vector3.one;
            defense.transform.localScale = Vector3.one;
        }
    }

}

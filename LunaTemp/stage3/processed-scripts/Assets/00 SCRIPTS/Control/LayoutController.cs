using UnityEngine;

public class LayoutController : MonoBehaviour
{
    [SerializeField] private Camera cam;
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
            cam.orthographicSize = 3.5f;
            camPos.y = -1.5f;
            cam.transform.position = camPos;
        }
        else
        {
            cam.orthographicSize = 5f;
            camPos.y = 0f;
            cam.transform.position = camPos;
        }
    }

}

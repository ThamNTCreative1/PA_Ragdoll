using UnityEngine;

public class LayoutController : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;
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
        if (ratio < 1f)
        {
            mainCamera.orthographicSize = 9;
            Vector3 camPos = mainCamera.transform.position;
            camPos.y = 2;
            mainCamera.transform.position = camPos;
        }
        else
        {
            mainCamera.orthographicSize = 5;
            Vector3 camPos = mainCamera.transform.position;
            camPos.y = 0;
            mainCamera.transform.position = camPos;
        }
    }
}

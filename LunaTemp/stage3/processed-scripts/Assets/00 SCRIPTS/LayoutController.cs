using UnityEngine;

public class LayoutController : MonoBehaviour
{
    [SerializeField] private Camera mainCamera;
    [SerializeField] private Transform optionButton;
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

            optionButton.localScale = Vector3.one * 0.8f;
        }
        else
        {
            mainCamera.orthographicSize = 5;
            Vector3 camPos = mainCamera.transform.position;
            camPos.y = 0;
            mainCamera.transform.position = camPos;

            optionButton.localScale = Vector3.one;
        }
    }
}

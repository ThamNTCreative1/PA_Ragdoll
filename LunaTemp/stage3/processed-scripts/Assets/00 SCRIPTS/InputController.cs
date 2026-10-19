using UnityEngine;
using UnityEngine.Events;

public class InputController : MonoBehaviour
{
    [SerializeField] private float timeCD;
    [SerializeField] private float time;
    private void Update()
    {
        CheckTap();
    }
    private void CheckTap()
    {
        time = Mathf.Max(0, time - Time.deltaTime);
        if (time > 0) return;
        if (Input.GetMouseButtonDown(0))
        {
            GameController.Ins.Tap();
            time = timeCD;
        }
    }
}
using UnityEngine;
using UnityEngine.EventSystems;

public class DropController : FightController
{
    private void Update()
    {
        CheckInput();
    }
    private void CheckInput()
    {
        if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId)) return;
            Vector3 worldPos = Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position);
            Action(worldPos, Quaternion.identity);
            return;
        }
        if (Input.GetMouseButtonDown(0))
        {
            if (EventSystem.current.IsPointerOverGameObject()) return;
            Vector3 worldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            Action(worldPos, Quaternion.identity);
        }
    }
}
using System.Collections.Generic;
using UnityEngine;

public class TargetController : MonoBehaviour
{
    [SerializeField] private List<TargetJoint2D> listTarget;
    [SerializeField] private TargetJoint2D currentTarget;
    [SerializeField] private int index;
    [SerializeField] private GameObject tut;
    void Start()
    {
        currentTarget = listTarget[0];
    }

    void Update()
    {
        CheckInput();
    }
    private void CheckInput()
    {
        if (Input.GetMouseButton(0))
        {
            if (tut) Destroy(tut);
            Vector2 point = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            SetTargetPoint(point);
        }
        if (Input.GetMouseButtonUp(0))
        {
            RemoveTargetPoint();
        }
    }
    private void SetTargetPoint([Bridge.Ref] Vector2 point)
    {
        if (!currentTarget) return;
        currentTarget.target = point;
        currentTarget.enabled = true;
    }
    private void RemoveTargetPoint()
    {
        if (!currentTarget) return;
        currentTarget.enabled = false;
    }
    public void RemoveTarget()
    {
        if (currentTarget) RemoveTargetPoint();
        currentTarget = null;
    }
    public void NextTarget()
    {
        if (index >= listTarget.Count) return;
        currentTarget.gameObject.SetActive(false);
        index++;
        currentTarget = index < listTarget.Count ? listTarget[index] : null;
    }
    public bool IsEmpty()
    {
        return !currentTarget.enabled;
    }
}

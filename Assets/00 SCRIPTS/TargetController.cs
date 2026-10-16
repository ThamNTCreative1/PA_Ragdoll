using System;
using System.Collections.Generic;
using UnityEngine;

public class TargetController : MonoBehaviour
{
    [SerializeField] private List<Rigidbody2D> listTarget;
    [SerializeField] private Rigidbody2D currentTarget;
    [SerializeField] private int index;
    [SerializeField] private GameObject tut;
    [SerializeField] private GameObject hintPotion;
    private bool startDrag;
    private void Start()
    {
        currentTarget = listTarget[0];
    }
    public void NextTarget()
    {
        startDrag = false;
        index++;
        currentTarget = listTarget[index];
        hintPotion.SetActive(false);
    }

    private void Update()
    {
        CheckInput();
    }
    private void CheckInput()
    {
        if (Input.GetMouseButtonDown(0))
        {
            startDrag = true;
            OnClick?.Invoke();
        }
        if (!startDrag) return;

        if (Input.GetMouseButton(0))
        {
            if (tut) Destroy(tut);

            Vector2 point = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            SetTargetPoint(point);
        }
        if (Input.GetMouseButtonUp(0))
        {
            startDrag = false;
            RemoveTargetPoint();
        }
    }
    private void SetTargetPoint(Vector2 point)
    {
        if (!currentTarget) return;
        currentTarget.MovePosition(point);
        if (index == 0) hintPotion.SetActive(true);
    }
    private void RemoveTargetPoint()
    {
        if (!currentTarget) return;
        if (index == 0) hintPotion.SetActive(false);
    }
    public void RemoveTarget()
    {
        currentTarget = null;
    }

    public bool IsEmpty()
    {
        return !currentTarget;
    }
    public Action OnClick;
}

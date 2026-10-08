using System.Collections.Generic;
using UnityEngine;

public class TargetController : MonoBehaviour
{
    [SerializeField] private List<TargetJoint2D> listTarget = new List<TargetJoint2D>();
    [SerializeField] private TargetJoint2D currentTarget;
    [SerializeField] private int index;
    [SerializeField] private GameObject tut;

    void Start()
    {
        UpdateCurrentTarget();
    }

    void Update()
    {
        CheckInput();
    }

    public void UpdateCurrentTarget()
    {
        if (listTarget != null && index >= 0 && index < listTarget.Count && listTarget[index] != null)
        {
            currentTarget = listTarget[index];
        }
        else
        {
            currentTarget = FindCurrentPlayerHandJoint();
        }

        if (currentTarget != null)
        {
            currentTarget.autoConfigureTarget = false;
            currentTarget.enabled = false;
        }
    }

    private TargetJoint2D FindCurrentPlayerHandJoint()
    {
        TargetJoint2D[] allJoints = FindObjectsOfType<TargetJoint2D>(); // Luna khong ho tro overload (bool includeInactive)
        TargetJoint2D bestMatch = null;
        float minCamDist = float.MaxValue;
        Vector3 camPos = Camera.main != null ? Camera.main.transform.position : Vector3.zero;

        foreach (var joint in allJoints)
        {
            if (joint == null || !joint.gameObject.activeInHierarchy) continue;
            string gName = joint.gameObject.name.ToLower();
            bool isHand = gName.Contains("hand");
            bool hasBonk = joint.GetComponent<BonkController>() != null;

            // Only consider player hand joints or joints with BonkController
            if (isHand || hasBonk)
            {
                float dist = Mathf.Abs(joint.transform.position.x - camPos.x);
                if (dist < minCamDist)
                {
                    minCamDist = dist;
                    bestMatch = joint;
                }
            }
        }
        return bestMatch;
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

    private void SetTargetPoint(Vector2 point)
    {
        if (!currentTarget)
        {
            UpdateCurrentTarget();
            if (!currentTarget) return;
        }
        currentTarget.autoConfigureTarget = false;
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
        if (currentTarget != null)
        {
            currentTarget.enabled = false;
        }
        index++;
        UpdateCurrentTarget();
    }

    public bool IsEmpty()
    {
        if (!currentTarget) return true;
        return !currentTarget.enabled;
    }
}


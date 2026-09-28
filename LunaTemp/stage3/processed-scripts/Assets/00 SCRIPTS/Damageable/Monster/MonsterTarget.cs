using System.Collections.Generic;
using UnityEngine;

public class MonsterTarget : MonoBehaviour
{
    [SerializeField] private bool targetLeft;
    private List<Transform> targets;
    private Transform currentTarget;
    public bool Left => targetLeft;
    private void Awake()
    {
        targets = new List<Transform>();
    }
    private void Update()
    {
        CheckTarget();
    }
    private void CheckTarget()
    {
        if (!currentTarget) return;
        Vector2 direction = currentTarget.position - transform.position;
        float cross = Vector3.Cross(transform.forward, direction).y;
        targetLeft = cross < 0;
    }
    private void UpdateTarget()
    {
        currentTarget = targets.Count > 0 ? targets[0] : null;
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        Transform t = collision.transform;
        if (!targets.Contains(t)) targets.Add(t);
        UpdateTarget();
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        targets.IndexOf(collision.transform);
        UpdateTarget();
    }
}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Player bị hất tung (vd. lốc xoáy): tắt TargetJoint giữ người + giữ thăng bằng, bay theo vận tốc,
// chạm đất thì đứng dậy và được kéo về đúng chỗ đứng cũ.
[RequireComponent(typeof(PlayerController))]
public class PlayerLaunch : MonoBehaviour
{
    [SerializeField] private LayerMask groundMask = 1; // Default (Ground)
    [SerializeField] private float minAirTime = 0.3f;  // bỏ qua lúc vừa bị hất khi chân còn chạm đất
    [SerializeField] private float maxLaunchX = 0.4f;  // hất gần như thẳng đứng để rơi lại gần chỗ cũ
    [SerializeField] private float recoverForceMul = 3f; // tăng lực TargetJoint khi kéo player về chỗ cũ

    private TargetJoint2D head;
    private PlayerHealth health;
    private Vector2 homeTarget;
    private bool isLaunched;
    public bool IsLaunched => isLaunched;

    private bool Dead => health && health.IsDead;

    private void Awake()
    {
        head = GetComponent<PlayerController>().Head;
        health = GetComponent<PlayerHealth>();
    }

    public void Launch(Vector2 velocity, float spin)
    {
        if (Dead) return;
        velocity.x = Mathf.Clamp(velocity.x, -maxLaunchX, maxLaunchX);
        // Ghi lại chỗ đứng lúc bị hất (sau khi LayoutController đã scale). Tắt auto-config
        // để khi bật lại joint không tự đặt target vào chỗ player vừa rơi xuống.
        if (!isLaunched) homeTarget = head.target;
        head.autoConfigureTarget = false;
        head.enabled = false;
        foreach (BalanceController b in GetComponentsInChildren<BalanceController>()) b.enabled = false;
        foreach (Rigidbody2D rb in GetComponentsInChildren<Rigidbody2D>())
        {
            rb.linearVelocity = velocity;
            rb.angularVelocity = Random.Range(-spin, spin);
        }
        if (isLaunched) return;
        isLaunched = true;
        StartCoroutine(Recover());
    }

    private IEnumerator Recover()
    {
        yield return new WaitForSeconds(minAirTime);
        List<Collider2D> parts = new List<Collider2D>();
        foreach (Collider2D c in GetComponentsInChildren<Collider2D>()) if (!c.isTrigger) parts.Add(c);
        yield return new WaitUntil(() => Dead || TouchingGround(parts));
        isLaunched = false;
        if (Dead) yield break;
        foreach (BalanceController b in GetComponentsInChildren<BalanceController>()) b.enabled = true;

        // Kéo về chỗ cũ bằng TargetJoint (tạm tăng lực + giảm chấn để không bật quá đà), về tới thì trả như cũ.
        float baseForce = head.maxForce;
        float baseDamping = head.dampingRatio;
        head.maxForce = baseForce * recoverForceMul;
        head.dampingRatio = 1f;
        head.target = homeTarget;
        head.enabled = true;
        float timeout = Time.time + 3f;
        yield return new WaitUntil(() => Dead || isLaunched || Time.time > timeout ||
                                         Vector2.Distance(head.transform.position, head.target) < 0.2f);
        head.maxForce = baseForce;
        head.dampingRatio = baseDamping;
    }

    private bool TouchingGround(List<Collider2D> parts)
    {
        return GroundCheck.IsTouching(parts, groundMask, transform);
    }
}

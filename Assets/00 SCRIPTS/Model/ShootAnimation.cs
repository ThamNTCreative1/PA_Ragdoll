using System.Collections;
using UnityEngine;

public class ShootAnimation : MonoBehaviour
{
    [Header("Hand")]
    [SerializeField] private HingeJoint2D left;
    [SerializeField] private HingeJoint2D right;

    [Header("Limit")]
    [SerializeField] private float shootAngleLimitMax;
    [SerializeField] private float shootAngleLimitMin;

    [SerializeField] private float normalAngleLimitMax;
    [SerializeField] private float normalAngleLimitMin;

    [Header("Padding Time")]
    [SerializeField] private float timeMotor;
    private Coroutine animCoroutine;

    public void StartAnimation()
    {
        animCoroutine ??= StartCoroutine(Animation());
        SetLimit(shootAngleLimitMax, shootAngleLimitMin);
    }
    public void StopAnimation()
    {
        if (animCoroutine == null) return;
        StopCoroutine(animCoroutine);
        animCoroutine = null;
        SetLimit(normalAngleLimitMax, normalAngleLimitMin);
    }
    private void SetLimit(float angleMax, float angleMin)
    {
        JointAngleLimits2D limit = left.limits;
        limit.max = angleMax;
        limit.min = angleMin;
        left.limits = limit;
    }
    private IEnumerator Animation()
    {
        while (true)
        {
            left.useMotor = true;
            right.useMotor = true;
            yield return new WaitForSeconds(timeMotor);
            left.useMotor = false;
            right.useMotor = false;
            yield return new WaitForSeconds(timeMotor);
        }
    }
}
using System.Collections;
using UnityEngine;

public class ShootAnimation : MonoBehaviour
{
    [Header("Player")]
    [SerializeField] private PlayerController player;

    [Header("Hand")]
    [SerializeField] private HingeJoint2D left;
    [SerializeField] private HingeJoint2D right;

    [Header("Limit")]
    [SerializeField] private float shootAngleLimitMax;
    [SerializeField] private float shootAngleLimitMin;

    [SerializeField] private float normalAngleLimitMax;
    [SerializeField] private float normalAngleLimitMin;

    [Header("Padding Time")]
    [SerializeField] private float timePadding;
    [SerializeField] private float timeDelay;
    private bool isDisable;
    private Coroutine animCoroutine;

    private void Awake()
    {
        player.OnAttack += StartAnimation;
        player.OnStopAttack += StopAnimation;
    }
    private void StartAnimation()
    {
        if (isDisable) return;
        animCoroutine = animCoroutine ?? StartCoroutine(Animation());
        SetLimit(shootAngleLimitMax, shootAngleLimitMin);
    }
    private void StopAnimation()
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
            yield return new WaitForSeconds(timePadding);
            left.useMotor = false;
            right.useMotor = false;
            yield return new WaitForSeconds(timeDelay);
        }
    }
    private void OnDisable()
    {
        isDisable = true;
        StopAllCoroutines();
    }
}
using System.Collections;
using UnityEngine;

public class MonsterAnimation : MonoBehaviour
{
    [SerializeField] private HingeJoint2D leftHand;
    [SerializeField] private HingeJoint2D rightHand;
    [SerializeField] private HingeJoint2D leftLeg;
    [SerializeField] private HingeJoint2D rightLeg;
    private Coroutine anim;
    public void StartAnimation()
    {
        StartCoroutine(HandAnimation());
        anim = StartCoroutine(LegAnimation());
    }
    public void StopAnimation()
    {
        StopAllCoroutines();
    }
    public void StartLegAnimation()
    {
        StopCoroutine(anim);
    }
    public void StopLegAnimation()
    {
        StopCoroutine(anim);
    }
    private IEnumerator HandAnimation()
    {
        while (true)
        {
            yield return new WaitForSeconds(0.5f);
            leftHand.useMotor = true;
            rightHand.useMotor = false;
            yield return new WaitForSeconds(0.5f);
            leftHand.useMotor = false;
            rightHand.useMotor = true;
        }
    }
    private IEnumerator LegAnimation()
    {
        while (true)
        {
            yield return new WaitForSeconds(0.5f);
            leftLeg.useMotor = true;
            rightLeg.useMotor = false;
            yield return new WaitForSeconds(0.5f);
            leftLeg.useMotor = false;
            rightLeg.useMotor = true;
        }
    }
}
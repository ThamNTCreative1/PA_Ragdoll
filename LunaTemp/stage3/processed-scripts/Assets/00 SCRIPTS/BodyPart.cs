using UnityEngine;

public class BodyPart : MonoBehaviour
{
    [SerializeField] private MonsterController controller;
    [SerializeField] private HingeJoint2D joint;
    [SerializeField] private BalanceController balance;
    [SerializeField] private ParticleSystem effect;

    private void Awake()
    {
        joint = GetComponent<HingeJoint2D>();
        balance = GetComponent<BalanceController>();
        controller.AddPart(this);
    }
    private void Update()
    {
        if (!joint.enabled)
        {
            //effect.Play();
            StopBalance();
        }
    }
    public void StopBalance()
    {
        balance.enabled = false;
        joint.enabled = false;
        controller.BreakPart(this);
        enabled = false;
    }
}

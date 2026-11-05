using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class ShootController : FightController
{
    [SerializeField] private HingeJoint2D left;
    [SerializeField] private HingeJoint2D right;

    [SerializeField] private float timeMotor;
    [SerializeField] private bool onCD;
    [SerializeField] private float CD;
    [SerializeField] private Transform startPos;
    public MonsterController currentMonster;

    private void OnEnable()
    {
        JointAngleLimits2D limit = left.limits;
        limit.max = -80;
        left.limits = limit;
    }
    private void OnDisable()
    {
        JointAngleLimits2D limit = left.limits;
        limit.max = 20;
        left.limits = limit;
    }

    private IEnumerator WaitForCD()
    {
        onCD = true;
        yield return new WaitForSeconds(CD);
        onCD = false;
    }
    public override void Action(Vector2 position, Quaternion rotation)
    {
        if (onCD) return;
        base.Action(position, rotation);
        StartCoroutine(Animation());
    }
    protected override void Spawn(Vector2 position, Quaternion rotation)
    {
        base.Spawn(position, rotation);
        StartCoroutine(WaitForCD());
    }
    private IEnumerator Animation()
    {
        left.useMotor = true;
        right.useMotor = true;
        yield return new WaitForSeconds(timeMotor);
        left.useMotor = false;
        right.useMotor = false;
    }
    private void Update()
    {
        CheckInput();
    }
    private void CheckInput()
    {
        if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId)) return;
            Action(startPos.position, startPos.rotation);
            return;
        }
        if (Input.GetMouseButtonDown(0))
        {
            if (EventSystem.current.IsPointerOverGameObject()) return;
            Action(startPos.position, startPos.rotation);
        }
    }
}
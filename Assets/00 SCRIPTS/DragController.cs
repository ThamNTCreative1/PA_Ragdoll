using System.Data.Common;
using UnityEngine;

public class DragController : MonoBehaviour
{
    [SerializeField] private Dragable currentTarget;
    [SerializeField] private float positionSpring;
    [SerializeField] private float positionDamper;
    [SerializeField] private GameObject tut1;
    [SerializeField] private GameObject tut2;
    private Rigidbody dragRb;
    private ConfigurableJoint joint;

    private void Update()
    {
        CheckInput();
    }
    private void FixedUpdate()
    {
        MoveInput();

    }
    private void CheckInput()
    {
        if (Input.GetMouseButtonDown(0))
        {
            StartDrag(Input.mousePosition);
        }
        if (Input.GetMouseButtonUp(0))
        {
            EndDrag();
        }
    }
    private void StartDrag(Vector3 pos)
    {
        Ray ray = Camera.main.ScreenPointToRay(pos);
        RaycastHit[] hits = Physics.RaycastAll(ray);
        for (int i = 0; i < hits.Length; i++)
        {
            if (hits[i].collider.CompareTag("Dragable"))
            {
                if (tut1) Destroy(tut1);
                if (tut2 && tut2.activeInHierarchy) Destroy(tut2);
                
                dragRb = hits[i].rigidbody;
                joint = gameObject.AddComponent<ConfigurableJoint>();
                joint.connectedBody = dragRb;

                Vector3 localAnchor = dragRb.transform.InverseTransformPoint(hits[i].point);
                joint.anchor = Vector3.zero;
                joint.autoConfigureConnectedAnchor = false;
                joint.connectedAnchor = localAnchor;

                // joint.xMotion = ConfigurableJointMotion.Locked;
                // joint.yMotion = ConfigurableJointMotion.Locked;
                // joint.zMotion = ConfigurableJointMotion.Locked;

                JointDrive drive = new JointDrive
                {
                    positionSpring = positionSpring,
                    positionDamper = positionDamper,
                    maximumForce = Mathf.Infinity
                };
                joint.xDrive = drive;
                joint.yDrive = drive;
                joint.zDrive = drive;

                currentTarget = hits[i].collider.GetComponent<Dragable>();
                break;
            }
        }
    }
    private void EndDrag()
    {
        if (currentTarget) currentTarget.EndMove();
        currentTarget = null;
        if (joint)
        {
            Destroy(joint);
            joint = null;
            dragRb = null;
        }
        transform.position = Vector3.zero;
    }
    private void MoveInput()
    {
        if (!currentTarget) return;
        currentTarget.StartMove();
        Vector3 pos = Input.mousePosition;
        pos.z = 30;
        pos = Camera.main.ScreenToWorldPoint(pos);
        pos.z = 3;
        transform.position = pos;
    }
}
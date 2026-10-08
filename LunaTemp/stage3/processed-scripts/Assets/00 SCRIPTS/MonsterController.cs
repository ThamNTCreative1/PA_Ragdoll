using UnityEngine;

public class MonsterController : MonoBehaviour
{
    [SerializeField] private TargetJoint2D joint;
    [SerializeField] private Rigidbody2D rb;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 force = new Vector2(1000, 1000);

    private void Awake()
    {
        if (!joint) joint = GetComponentInChildren<TargetJoint2D>();
        if (!rb)
        {
            var rbs = GetComponentsInChildren<Rigidbody2D>();
            foreach (var r in rbs)
            {
                if (r.gameObject != gameObject)
                {
                    rb = r;
                    break;
                }
            }
            if (!rb && rbs.Length > 0) rb = rbs[0];
        }
    }

    public void Dead()
    {
        if (deadSFX && AudioController.Ins) AudioController.Ins.PlaySFX(deadSFX);
        if (joint) joint.enabled = false;
        if (rb) rb.AddForce(force);
    }
}
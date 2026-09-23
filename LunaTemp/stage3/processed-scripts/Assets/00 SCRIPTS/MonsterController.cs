using UnityEngine;

public class MonsterController : MonoBehaviour
{
    [SerializeField] private TargetJoint2D joint;
    [SerializeField] private Rigidbody2D rb;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 force = new Vector2(1000, 1000);
    public void Dead()
    {
        AudioController.Ins.PlaySFX(deadSFX);
        joint.enabled = false;
        rb.AddForce(force);
    }
}
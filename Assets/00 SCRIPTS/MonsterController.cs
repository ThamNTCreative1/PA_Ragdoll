using UnityEngine;

public class MonsterController : MonoBehaviour
{
    [SerializeField] private HingeJoint2D leg;
    [SerializeField] private HingeJoint2D hip;
    [SerializeField] private HingeJoint2D body;
    [SerializeField] private HingeJoint2D head;
    [SerializeField] private HingeJoint2D arm;

    [SerializeField] private Rigidbody2D rb;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 force = new Vector2(1000, 1000);

    [SerializeField] private int HP;
    [SerializeField] private bool isDead;
    public void Dead()
    {
        AudioController.Ins.PlaySFX(deadSFX);
        GameController.Ins.End();
        rb.AddForce(force);
    }

    public void TakeDamage()
    {
        if (isDead) return;
        HP--;
        if (HP <= 0)
        {
            head.enabled = false;
            isDead = true;
            Dead();
        }
        else if (HP <= 4)
        {
            arm.enabled = false;
        }
        else if (HP <= 8)
        {
            body.enabled = false;
        }
        else if (HP <= 12)
        {
            hip.enabled = false;
        }
        else if (HP <= 16)
        {
            leg.enabled = false;
        }
    }
}

using UnityEngine;

public class MonsterMove : MonoBehaviour
{
    [SerializeField] private Rigidbody2D body;
    [SerializeField] private float speed;
    public void Move(bool left)
    {
        body.linearVelocity = new Vector2(left ? -speed : speed, body.linearVelocity.y);
    }
}
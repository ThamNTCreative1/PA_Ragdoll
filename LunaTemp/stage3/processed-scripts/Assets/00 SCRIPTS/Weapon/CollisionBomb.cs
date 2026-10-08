using UnityEngine;

public class CollisionBomb : BombBase
{
    private void OnCollisionEnter2D(Collision2D collision)
    {
        Boom();
    }
}
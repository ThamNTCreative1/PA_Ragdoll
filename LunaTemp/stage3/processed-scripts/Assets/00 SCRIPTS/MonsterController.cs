using System.Collections.Generic;
using UnityEngine;

public class MonsterController : MonoBehaviour
{
    [SerializeField] private List<BodySprite> body;
    [SerializeField] private TargetJoint2D joint;
    [SerializeField] private Rigidbody2D rb;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 force = new Vector2(1000, 1000);
    public void Dead()
    {
        AudioController.Ins.PlaySFX(deadSFX);
        body.ForEach(b => b.Renderer.sprite = b.ZombieSprite);
        if (joint) joint.enabled = false;
        rb.AddForce(force);
    }
}
[System.Serializable]
public struct BodySprite
{
    public SpriteRenderer Renderer;
    public Sprite ZombieSprite;
}
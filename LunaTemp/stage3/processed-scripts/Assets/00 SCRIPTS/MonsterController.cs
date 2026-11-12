using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonsterController : MonoBehaviour
{
    [SerializeField] private int maxHP;
    [SerializeField] private int currentHP;
    [SerializeField] private List<Piece> pieces;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 maxForce = new Vector2(1000, 1000);
    [SerializeField] private Vector2 minForce = new Vector2(200, 200);
    [SerializeField] private RagdollBalance balance;
    [SerializeField] private bool isDead;
    public bool IsDead => isDead;
    public Vector2 BodyPosition => body.position;
    [SerializeField] private MonsterTrigger trigger;
    [SerializeField] private GroundCheck groundCheck;

    [Tooltip("Off for humans turned into zombies: their death is not one of the player's monsters.")]
    [SerializeField] private bool reportDeath = true;

    [Header("Move")]
    [SerializeField] private float speed;
    [SerializeField] private Rigidbody2D body;

    private float timer;
    private void Start()
    {
        currentHP = maxHP;
        balance.walkSpeed = speed;
    }
    private void FixedUpdate()
    {
        Move();
    }
    private void Move()
    {
        timer -= Time.fixedDeltaTime;
        if (!groundCheck.OnGround || isDead || !trigger.Player)
        {
            balance.MoveInput = 0;
            balance.ClearAim();
            return;
        }
        Vector2 target = trigger.Player.Body.position;
        balance.AimAt(target);
        Vector2 direction = target - body.position;
        if (Mathf.Abs(direction.x) < 1f)
        {
            balance.MoveInput = 0;
            return;
        }
        int x = direction.x < 0 ? -1 : 1;
        if (timer <= 0)
        {
            timer = 1;
            balance.SetFacing(x);
        }
        balance.MoveInput = x;
    }
    public void TakeDamage(int amount)
    {
        currentHP -= amount;
        if (currentHP <= 0) Dead();
    }
    private void Dead()
    {
        if (isDead) return;
        isDead = true;
        balance.enabled = false;
        AudioController.Ins.PlaySFX(deadSFX);
        foreach (Piece p in pieces)
        {
            Vector2 force = new Vector2(Random.Range(minForce.x, maxForce.x), Random.Range(minForce.y, maxForce.y));
            if (p.Joint) p.Joint.enabled = false;
            p.Rb.AddForce(force);
        }
        if (reportDeath) GameController.Ins.RemoveCharacter(isMonster: true);
        StartCoroutine(Destroy());
    }
    private IEnumerator Destroy()
    {
        yield return new WaitForSeconds(5);
        Destroy(gameObject);
    }
}
[System.Serializable]
public struct Piece
{
    public Joint2D Joint;
    public Rigidbody2D Rb;
}

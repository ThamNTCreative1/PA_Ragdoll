using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonsterController : MonoBehaviour, IDamageable
{
    [SerializeField] private int maxHP;
    [SerializeField] private int currentHP;
    [SerializeField] private List<Piece> pieces;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 maxForce = new Vector2(1000, 1000);
    [SerializeField] private Vector2 minForce = new Vector2(200, 200);
    [SerializeField] private BalanceController balance;
    [SerializeField] private bool isDead;
    public bool IsDead => isDead;

    [Header("Move")]
    [SerializeField] private float speed;
    [SerializeField] private Rigidbody2D body;
    [SerializeField] private HingeJoint2D leftHand;
    [SerializeField] private HingeJoint2D rightHand;
    [SerializeField] private HingeJoint2D leftLeg;
    [SerializeField] private HingeJoint2D rightLeg;
    [SerializeField] private GameObject jump;
    [SerializeField] private CheckGround checkGround;

    [Header("Point")]
    [SerializeField] private GameObject pointPrefab;
    private void Start()
    {
        currentHP = maxHP;
        StartCoroutine(Animation());
    }

    private void FixedUpdate()
    {
        Move();
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
        VFXController.Ins.SpawnVFX(body.transform.position, pointPrefab);
        jump.SetActive(false);
        balance.enabled = false;
        AudioController.Ins.PlaySFX(deadSFX);
        foreach (Piece p in pieces)
        {
            Vector2 force = new Vector2(Random.Range(minForce.x, maxForce.x), Random.Range(minForce.y, maxForce.y));
            if (p.Joint) p.Joint.enabled = false;
            p.Rb.AddForce(force);
        }
        GameController.Ins.KillMonster();
        StartCoroutine(Destroy());
    }
    private IEnumerator Destroy()
    {
        yield return new WaitForSeconds(5);
        Destroy(gameObject);
    }
    private void Move()
    {
        if (isDead) return;
        body.linearVelocity = new Vector2(-speed, checkGround.OnGround ? speed / 2 : body.linearVelocity.y);
    }
    private IEnumerator Animation()
    {
        while (!isDead)
        {
            yield return new WaitForSeconds(0.5f);
            leftHand.useMotor = true;
            leftLeg.useMotor = true;
            rightHand.useMotor = false;
            rightLeg.useMotor = false;
            yield return new WaitForSeconds(0.5f);
            leftHand.useMotor = false;
            leftLeg.useMotor = false;
            rightHand.useMotor = true;
            rightLeg.useMotor = true;
        }
    }
}
[System.Serializable]
public struct Piece
{
    public Joint2D Joint;
    public Rigidbody2D Rb;
}
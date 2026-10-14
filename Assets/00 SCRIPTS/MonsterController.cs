using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonsterController : MonoBehaviour
{
    [SerializeField] private int maxHP;
    [SerializeField] private int currentHP;
    [SerializeField] private List<Piece> pieces;
    [SerializeField] private List<BodyPart> parts;
    [SerializeField] private GameObject bloodPrefab;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 maxForce = new Vector2(1000, 1000);
    [SerializeField] private Vector2 minForce = new Vector2(200, 200);
    [SerializeField] private BalanceController balance;
    [SerializeField] private bool isDead;
    public bool IsDead => isDead;

    [Header("Move")]
    [SerializeField] private float speedX;
    [SerializeField] private float speedY;

    [SerializeField] private Rigidbody2D body;
    [SerializeField] private HingeJoint2D leftHand;
    [SerializeField] private HingeJoint2D rightHand;
    [SerializeField] private HingeJoint2D leftLeg;
    [SerializeField] private HingeJoint2D rightLeg;
    [SerializeField] private GameObject jump;
    [SerializeField] private CheckGround checkGround;
    private bool lockMove;
    private Coroutine moveCoroutine;

    private void ResetGravity()
    {
        pieces.ForEach(p => p.Rb.gravityScale = 1);
    }
    private void Start()
    {
        currentHP = maxHP;
        foreach (BodyPart p in parts)
        {
            p.OnTakeDamage += TakeDamage;
        }
        moveCoroutine = StartCoroutine(Animation());
        GameController.Ins.AddMonster();
        GameController.Ins.OnPause += Pause;
        GameController.Ins.OnPlay += Play;
        Invoke(nameof(ResetGravity), 0.1f);
    }

    private void Pause()
    {
        lockMove = true;
        if (moveCoroutine != null)
        {
            StopCoroutine(moveCoroutine);
            moveCoroutine = null;
            leftHand.useMotor = false;
            leftLeg.useMotor = false;
            rightHand.useMotor = false;
            rightLeg.useMotor = false;
        }
    }
    private void Play()
    {
        lockMove = false;
        moveCoroutine ??= StartCoroutine(Animation());
    }

    private void FixedUpdate()
    {
        Move();
    }
    public void TakeDamage(Vector3 position, int amount)
    {
        if (isDead) return;
        currentHP -= amount;
        if (bloodPrefab) PoolController.Ins.SpawnObject(bloodPrefab, position, Quaternion.identity);
        if (currentHP <= 0) Dead();
    }
    private void Dead()
    {
        if (isDead) return;
        isDead = true;
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
        yield return new WaitForSeconds(3);
        Destroy(gameObject);
    }
    private void Move()
    {
        if (isDead || lockMove) return;
        body.linearVelocity = new Vector2(-speedX, checkGround.OnGround ? speedY : body.linearVelocity.y);
    }
    private IEnumerator Animation()
    {
        while (!isDead)
        {
            yield return new WaitForSeconds(0.3f);
            leftHand.useMotor = true;
            leftLeg.useMotor = true;
            rightHand.useMotor = false;
            rightLeg.useMotor = false;
            yield return new WaitForSeconds(0.3f);
            leftHand.useMotor = false;
            leftLeg.useMotor = false;
            rightHand.useMotor = true;
            rightLeg.useMotor = true;
        }
    }
    private void OnDisable()
    {
        GameController.Ins.OnPause -= Pause;
        GameController.Ins.OnPlay -= Play;
    }
}
[System.Serializable]
public struct Piece
{
    public Joint2D Joint;
    public Rigidbody2D Rb;
}
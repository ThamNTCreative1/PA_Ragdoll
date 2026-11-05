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

    private bool isGameStart;
    private void Start()
    {
        currentHP = maxHP;
        GameController.Ins.OnStart += StartGame;
        StartCoroutine(Animation());
    }
    private void StartGame()
    {
        isGameStart = true;
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
        balance.enabled = false;
        AudioController.Ins.PlaySFX(deadSFX);
        foreach (Piece p in pieces)
        {
            Vector2 force = new Vector2(Random.Range(minForce.x, maxForce.x), Random.Range(minForce.y, maxForce.y));
            if (p.Joint) p.Joint.enabled = false;
            p.Rb.AddForce(force);
        }
        GameController.Ins.RemoveMonster();
        StartCoroutine(Destroy());
    }
    private IEnumerator Destroy()
    {
        yield return new WaitForSeconds(5);
        Destroy(gameObject);
    }
    // Bị hất tung (vd. lốc xoáy): bay theo vận tốc, ngưng đi bộ và giữ thăng bằng; chạm đất mới đứng dậy đi tiếp.
    [Header("Launch")]
    [SerializeField] private LayerMask groundMask = 1; // Default (Ground)
    [SerializeField] private float minAirTime = 0.3f;  // bỏ qua lúc vừa bị hất khi chân còn chạm đất
    private bool isLaunched;
    public bool IsLaunched => isLaunched;
    public void Launch([Bridge.Ref] Vector2 velocity, float spin)
    {
        if (isDead) return;
        foreach (BalanceController b in GetComponentsInChildren<BalanceController>()) b.enabled = false;
        foreach (Rigidbody2D rb in GetComponentsInChildren<Rigidbody2D>())
        {
            rb.linearVelocity = velocity;
            rb.angularVelocity = Random.Range(-spin, spin);
        }
        if (isLaunched) return;
        isLaunched = true;
        StartCoroutine(RecoverFromLaunch());
    }
    private IEnumerator RecoverFromLaunch()
    {
        yield return new WaitForSeconds(minAirTime);
        Collider2D[] parts = GetComponentsInChildren<Collider2D>();
        yield return new WaitUntil(() => isDead || TouchingGround(parts));
        isLaunched = false;
        if (isDead) yield break;
        foreach (BalanceController b in GetComponentsInChildren<BalanceController>()) b.enabled = true;
    }
    private bool TouchingGround(Collider2D[] parts)
    {
        return GroundCheck.IsTouching(parts, groundMask, transform);
    }
    private void Move()
    {
        if (!isGameStart || isDead || IsLaunched) return;
        body.linearVelocity = new Vector2(-speed / 2, speed);
    }
    private IEnumerator Animation()
    {
        yield return new WaitUntil(() => isGameStart);
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
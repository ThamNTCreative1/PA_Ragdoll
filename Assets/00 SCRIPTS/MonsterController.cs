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
    [SerializeField] private BalanceController balance;
    [SerializeField] private bool isDead;

    private void Start()
    {
        currentHP = maxHP;
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
}
[System.Serializable]
public struct Piece
{
    public Joint2D Joint;
    public Rigidbody2D Rb;
}
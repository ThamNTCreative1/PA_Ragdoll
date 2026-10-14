using System;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] private List<Piece> pieces;
    [SerializeField] private List<PlayerTrigger> triggers;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 maxForce = new Vector2(100, 500);
    [SerializeField] private Vector2 minForce = new Vector2(-50, 50);

    [SerializeField] private bool onAttack;
    [SerializeField] private bool isDead;
    private void ResetGravity()
    {
        pieces.ForEach(p => p.Rb.gravityScale = 1);
    }
    private void Start()
    {
        GameController.Ins.OnNotClear += Attack;
        GameController.Ins.OnClear += StopAttack;
        GameController.Ins.AddPlayer();
        triggers.ForEach(t => t.OnContactZombie += Dead);
        Invoke(nameof(ResetGravity), 0.1f);
    }
    private void Attack()
    {
        if (isDead || onAttack) return;
        onAttack = true;
        OnAttack?.Invoke();
    }
    private void StopAttack()
    {
        onAttack = false;
        OnStopAttack?.Invoke();
    }
    private void Dead()
    {
        if (isDead) return;
        isDead = true;

        StopAttack();
        AudioController.Ins.PlaySFX(deadSFX);

        foreach (Piece p in pieces)
        {
            Vector2 force = new Vector2(
                UnityEngine.Random.Range(minForce.x, maxForce.x),
                UnityEngine.Random.Range(minForce.y, maxForce.y)
            );
            if (p.Joint) p.Joint.enabled = false;
            p.Rb.AddForce(force);
        }
        GameController.Ins.LevelFail();
        Invoke(nameof(DestroyPlayer), 3f);
    }
    private void DestroyPlayer()
    {
        Destroy(gameObject);
    }
    public Action OnAttack;
    public Action OnStopAttack;
}

using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerController : MonoBehaviour, IDamageable
{
    [SerializeField] private List<Piece> pieces;
    [SerializeField] private TargetJoint2D head;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 maxForce = new Vector2(100, 500);
    [SerializeField] private Vector2 minForce = new Vector2(-50, 50);
    [Header("Tut")]
    [SerializeField] private GameObject optionTut;
    [SerializeField] protected GameObject attackTut;
    [SerializeField] private FightController fight;
    [SerializeField] private AudioClip clickSound;
    public FightController Fight => fight;
    private bool isDead;
    public void TakeDamage(int amount)
    {
        Dead();
        GameController.Ins.GameOver();
    }
    private void Dead()
    {
        if (isDead) return;
        isDead = true;
        fight.enabled = false;
        AudioController.Ins.PlaySFX(deadSFX);
        foreach (Piece p in pieces)
        {
            Vector2 force = new Vector2(Random.Range(minForce.x, maxForce.x), Random.Range(minForce.y, maxForce.y));
            if (p.Joint) p.Joint.enabled = false;
            p.Rb.AddForce(force);
        }
        head.enabled = false;
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (!collision.gameObject.CompareTag("Monster")) return;
        collision.transform.parent.TryGetComponent<MonsterController>(out MonsterController monster);
        if (!monster || monster.IsDead) return;
        Dead();
        GameController.Ins.GameOver();
    }
}

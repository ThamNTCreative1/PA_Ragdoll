using System;
using UnityEngine;

public class PlayerTrigger : MonoBehaviour
{
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (!collision.gameObject.CompareTag("Monster")) return;
        collision.transform.parent.TryGetComponent<MonsterController>(out MonsterController monster);
        if (!monster || monster.IsDead) return;
        OnContactZombie?.Invoke();
        enabled = false;
    }
    public Action OnContactZombie;
}
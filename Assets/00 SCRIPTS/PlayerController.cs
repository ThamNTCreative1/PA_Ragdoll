using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] private List<BodyRenderer> bodyRenderers;
    [SerializeField] private AudioClip biteSound;
    [SerializeField] private AudioClip zombieSound;
    [SerializeField] private Transform body;

    [Header("Infection (RSNM-style: the bitten human becomes a real zombie)")]
    [Tooltip("Dormant zombie brain, switched on when the human turns.")]
    [SerializeField] private MonsterController zombieBrain;
    [SerializeField] private GameObject zombieTrigger;
    [SerializeField] private GameObject zombieGround;
    [SerializeField] private PlayerAttack attack;
    [SerializeField] private GameObject humanTrigger;
    [SerializeField] private float turnDelay = 1f;
    [SerializeField] private float turnHop = 4f;
    [SerializeField] private float turnArmFlail = 0.5f;

    public Transform Body => body;
    public bool IsZombie;
    public void SetZombieSprite(int index, Sprite sprite)
    {
        BodyRenderer r = bodyRenderers[index];
        r.ZSprite = sprite;
        bodyRenderers[index] = r;
    }
    public void Zombie()
    {
        if (IsZombie) return;
        IsZombie = true;
        AudioController.Ins.PlaySFX(biteSound);
        StartCoroutine(Turn());
    }
    private IEnumerator Turn()
    {
        yield return new WaitForSeconds(turnDelay);
        OnDead?.Invoke();
        if (attack) attack.enabled = false;
        if (humanTrigger) humanTrigger.SetActive(false);

        // Horror look, and every body part joins the monsters' side (layer + tag), so the other
        // humans shoot it and its touch infects them like any monster's.
        int monsterLayer = LayerMask.NameToLayer("Monster");
        foreach (BodyRenderer r in bodyRenderers)
        {
            r.Renderer.sprite = r.ZSprite;
            r.Renderer.gameObject.layer = monsterLayer;
            Collider2D part = r.Renderer.GetComponentInParent<Collider2D>();
            if (part)
            {
                part.gameObject.layer = monsterLayer;
                part.gameObject.tag = "Monster";
            }
        }

        // Wake the zombie brain: it hunts the remaining humans from here on.
        if (zombieGround) zombieGround.SetActive(true);
        if (zombieTrigger) zombieTrigger.SetActive(true);
        if (zombieBrain) zombieBrain.enabled = true;

        // Transformation reaction (RSNM Infect): a hop and the arms thrown apart.
        Rigidbody2D torso = body ? body.GetComponent<Rigidbody2D>() : null;
        if (torso) torso.AddForce(Vector2.up * (turnHop * torso.mass), ForceMode2D.Impulse);
        int side = 1;
        foreach (BodyRenderer r in bodyRenderers)
        {
            Rigidbody2D rb = r.Renderer.GetComponentInParent<Rigidbody2D>();
            if (!rb || !rb.name.StartsWith("upperarm")) continue;
            rb.AddTorque(side * turnArmFlail, ForceMode2D.Impulse);
            side = -side;
        }

        AudioController.Ins.PlaySFX(zombieSound);
        GameController.Ins.RemoveCharacter(isMonster: false);
    }
    public Action OnDead;
}
[System.Serializable]
public struct BodyRenderer
{
    public SpriteRenderer Renderer;
    public Sprite ZSprite;
}

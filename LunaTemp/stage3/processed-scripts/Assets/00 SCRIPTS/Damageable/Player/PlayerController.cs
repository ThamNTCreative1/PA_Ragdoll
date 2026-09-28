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
    [SerializeField] private List<FightOption> fightOptions;
    [SerializeField] private FightOption fight;
    [SerializeField] private AudioClip clickSound;
    [SerializeField] private GameObject deadVFX;

    [Header("Zombie")]
    [SerializeField] private List<SpriteRenderer> renderers;
    [SerializeField] private List<Sprite> sprites;
    [SerializeField] private bool isZombie;
    public FightOption Fight => fight;
    private bool isDead;
    private void Awake()
    {
        fightOptions.ForEach(op => op.Button.onClick.AddListener(() => ChangeFightOption(op)));
    }
    private void Zombie()
    {
        isZombie = true;
        AudioController.Ins.PlaySFX(deadSFX);

        for (int i = 0; i < renderers.Count; i++)
        {
            renderers[i].sprite = sprites[i];
        }
        if (fight.Controller) fight.Controller.gameObject.SetActive(false);
    }
    private void ChangeFightOption([Bridge.Ref] FightOption option)
    {
        if (fight.Controller)
        {
            fight.Controller.gameObject.SetActive(false);
        }
        AudioController.Ins.PlaySFX(clickSound);
        fight = option;
        fight.Controller.gameObject.SetActive(true);
    }
    public void TakeDamage(int amount)
    {
        Dead();
        GameController.Ins.GameOver();
    }
    private void Dead()
    {
        if (isDead) return;
        isDead = true;
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
        if (isZombie || !collision.gameObject.CompareTag("Monster")) return;
        collision.transform.parent.TryGetComponent<MonsterController>(out MonsterController monster);
        if (!monster || monster.IsDead) return;
        Zombie();
        GameController.Ins.GameOver();
    }
}
[System.Serializable]
public struct FightOption
{
    public Button Button;
    public FightController Controller;
}

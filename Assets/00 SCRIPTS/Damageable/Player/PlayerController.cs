using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// Máu/nhận damage: PlayerHealth. Quái cắn: PlayerBite. Hoá zombie: PlayerZombie. Bị hất tung: PlayerLaunch.
public class PlayerController : MonoBehaviour
{
    [SerializeField] private List<Piece> pieces;
    [SerializeField] private TargetJoint2D head;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 maxForce = new Vector2(100, 500);
    [SerializeField] private Vector2 minForce = new Vector2(-50, 50);
    [SerializeField] private List<FightOption> fightOptions;
    [Header("Tut")]
    [SerializeField] private GameObject optionTut;
    [SerializeField] protected GameObject attackTut;
    [SerializeField] private FightOption fight;
    [SerializeField] private AudioClip clickSound;
    public FightOption Fight => fight;
    public TargetJoint2D Head => head;
    private void Awake()
    {
        fightOptions.ForEach(op => op.Button.onClick.AddListener(() => ChangeFightOption(op)));
    }
    private void ChangeFightOption(FightOption option)
    {
        if (optionTut)
        {
            Destroy(optionTut);
            attackTut.SetActive(true);
        }
        if (fight.Controller)
        {
            fight.Controller.gameObject.SetActive(false);
            fight.Selected.enabled = false;
        }
        AudioController.Ins.PlaySFX(clickSound);
        fight = option;
        fight.Selected.enabled = true;
        fight.Controller.gameObject.SetActive(true);
    }
    // Chết kiểu ragdoll (bị sét, cháy hết máu...).
    public void Dead()
    {
        AudioController.Ins.PlaySFX(deadSFX);
        foreach (Piece p in pieces)
        {
            Vector2 force = new Vector2(Random.Range(minForce.x, maxForce.x), Random.Range(minForce.y, maxForce.y));
            if (p.Joint) p.Joint.enabled = false;
            p.Rb.AddForce(force);
        }
        head.enabled = false;
    }
}
[System.Serializable]
public struct FightOption
{
    public Button Button;
    public Image Selected;
    public FightController Controller;
}

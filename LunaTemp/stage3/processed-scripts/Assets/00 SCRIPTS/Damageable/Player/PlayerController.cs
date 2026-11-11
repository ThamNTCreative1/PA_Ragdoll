using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerController : MonoBehaviour, IDamageable
{
    [SerializeField] private List<Piece> pieces;
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
    private bool isDead;
    [Header("Standing")]
    [SerializeField] private float idleSwayAngle = 2f;
    [SerializeField] private float idleSwaySpeed = 1.8f;
    private readonly Dictionary<Rigidbody2D, float> standingAngles = new Dictionary<Rigidbody2D, float>();
    private readonly Dictionary<Rigidbody2D, RigidbodyConstraints2D> standingConstraints = new Dictionary<Rigidbody2D, RigidbodyConstraints2D>();
    private void Awake()
    {
        // Keep physical support while gently varying the resting pose.
        foreach (string name in new[] { "hip_mid", "abdomen_mid", "chest_mid", "thigh_front", "thigh_back", "shin_front", "shin_back", "foot_front", "foot_back" })
        {
            Transform part = transform.Find("Parts/" + name);
            Rigidbody2D rb = part ? part.GetComponent<Rigidbody2D>() : null;
            if (!rb) continue;
            standingConstraints.Add(rb, rb.constraints);
            standingAngles.Add(rb, rb.rotation);
            rb.constraints |= name == "hip_mid" ? RigidbodyConstraints2D.FreezeAll : RigidbodyConstraints2D.FreezeRotation;
            if (name.StartsWith("thigh_") || name.StartsWith("shin_") || name.StartsWith("foot_"))
            {
                // Preserve the authored leg length instead of snapping mismatched anchors together.
                HingeJoint2D joint = part.GetComponent<HingeJoint2D>();
                if (joint && joint.connectedBody)
                {
                    joint.autoConfigureConnectedAnchor = false;
                    joint.connectedAnchor = joint.connectedBody.transform.InverseTransformPoint(part.TransformPoint(joint.anchor));
                    JointAngleLimits2D limits = joint.limits;
                    limits.min = Mathf.Min(limits.min, joint.jointAngle);
                    limits.max = Mathf.Max(limits.max, joint.jointAngle);
                    joint.limits = limits;
                }
            }
        }
        StartCoroutine(BalanceStanding());
        fightOptions.ForEach(op => op.Button.onClick.AddListener(() => ChangeFightOption(op)));
    }
    private IEnumerator BalanceStanding()
    {
        // Defense mode disables this controller; the standing support must continue.
        var wait = new WaitForFixedUpdate();
        float phase = 0f;
        while (!isDead)
        {
            yield return wait;
            if (isDead) yield break;
            phase += Time.fixedDeltaTime * idleSwaySpeed;
            // Do not pass the idle sway through the shoulder to a held weapon.
            bool holdingWeapon = fight.Controller is ShootController && fight.Controller.gameObject.activeInHierarchy;
            float sway = holdingWeapon ? 0f : Mathf.Sin(phase) * idleSwayAngle;
            foreach (var entry in standingAngles)
            {
                Rigidbody2D rb = entry.Key;
                if (!rb) continue;
                float weight = rb.name == "chest_mid" ? 1f : rb.name == "abdomen_mid" ? 0.6f : 0f;
                float target = entry.Value + sway * weight;
                rb.MoveRotation(Mathf.LerpAngle(rb.rotation, target, 1f - Mathf.Exp(-5f * Time.fixedDeltaTime)));
            }
        }
    }
    private void ChangeFightOption([Bridge.Ref] FightOption option)
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
    public void TakeDamage(int amount)
    {
        if (isDead) return;
        Dead();
        if (GameController.Ins) GameController.Ins.GameOver();
    }
    private void Dead()
    {
        isDead = true;
        if (fight.Controller) fight.Controller.gameObject.SetActive(false);
        foreach (var entry in standingConstraints)
            if (entry.Key) entry.Key.constraints = entry.Value;
        if (AudioController.Ins) AudioController.Ins.PlaySFX(deadSFX);
        foreach (Piece p in pieces)
        {
            Vector2 force = new Vector2(Random.Range(minForce.x, maxForce.x), Random.Range(minForce.y, maxForce.y));
            if (p.Joint) p.Joint.enabled = false;
            if (p.Rb) p.Rb.AddForce(force);
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (!collision.gameObject.CompareTag("Monster")) return;
        MonsterController monster = collision.GetComponentInParent<MonsterController>();
        if (!monster || monster.IsDead) return;
        TakeDamage(1);
    }
}
[System.Serializable]
public struct FightOption
{
    public Button Button;
    public Image Selected;
    public FightController Controller;
}

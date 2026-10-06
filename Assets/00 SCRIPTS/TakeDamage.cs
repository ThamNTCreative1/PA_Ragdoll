using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TakeDamage : MonoBehaviour
{
    [SerializeField] private Transform phase;
    [SerializeField] private List<BodyPiece> bodyPieces;
    [SerializeField] private Rigidbody root;
    [SerializeField] private float HP;
    [SerializeField] private bool onCD;
    [SerializeField] private float currentHP;
    [SerializeField] private bool isDead;
    [SerializeField] private Animator anim;
    [SerializeField] private AudioClip hitSound;
    [SerializeField] private AudioClip hitSound2;

    [SerializeField] private AudioClip deadSound;
    [SerializeField] private GameObject bloodPrefab;
    [SerializeField] private bool notUseAnim;

    void Start()
    {
        currentHP = HP;
        foreach (var p in bodyPieces)
        {
            p.notUseAnim = notUseAnim;
        }
    }

    private void TakeDmg()
    {
        if (onCD) return;
        StartCoroutine(CD());
        
        AudioController.Ins.PlaySFX(hitSound);
        
        root.AddForce(Vector2.one * 100, ForceMode.Acceleration);
        currentHP--;
        SpawnBlood(root.transform.position);
        if (currentHP <= 0) Dead();
        else AudioController.Ins.PlaySFX(hitSound2);
    }
    private void SpawnBlood(Vector3 pos)
    {
        pos.y = 0;
        GameObject blood = Instantiate(bloodPrefab, pos, Quaternion.identity);
        blood.transform.SetParent(phase);
    }
    private void Dead()
    {
        if (isDead) return;
        isDead = true;
        anim.enabled = false;
        AudioController.Ins.PlaySFX(deadSound);

        foreach (var p in bodyPieces)
        {
            p.notUseAnim = true;
        }
        GameController.Ins.EndPhase();
    }
    private IEnumerator CD()
    {
        onCD = true;
        yield return new WaitForSeconds(0.5f);
        onCD = false;
    }

    private void OnTriggerEnter(Collider collision)
    {
        if (!collision.gameObject.CompareTag("Dragable")) return;
        TakeDmg();
    }

}

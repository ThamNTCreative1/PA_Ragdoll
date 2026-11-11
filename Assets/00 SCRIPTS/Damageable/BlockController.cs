using System.Collections;
using UnityEngine;

public class BlockController : MonoBehaviour, IDamageable
{
    [SerializeField] private int maxHP;
    [SerializeField] private int currentHP;
    [SerializeField] private bool isBreak;
    [SerializeField] private int numMonster;
    [SerializeField] private AudioClip hitSFX;
    [SerializeField] private GameObject breakVFX;
    [SerializeField] private AudioClip breakSFX;
    private void Start()
    {
        currentHP = maxHP;
        StartCoroutine(TakeDMGPerSec());
    }

    public void TakeDamage(int amount)
    {
        if (amount <= 0) return;
        currentHP -= amount;
        if (hitSFX) AudioController.Ins.PlaySFX(hitSFX);
        if (currentHP <= 0) Break();
    }

    private IEnumerator TakeDMGPerSec()
    {
        while (!isBreak)
        {
            TakeDamage(numMonster);
            yield return new WaitForSeconds(0.5f);
        }
    }
    private void Break()
    {
        isBreak = true;
        if (breakVFX) VFXController.Ins.SpawnVFX(transform.position, breakVFX);
        if (breakSFX) AudioController.Ins.PlaySFX(breakSFX);
        Destroy(gameObject);
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (!collision.gameObject.CompareTag("Monster")) return;
        numMonster++;
    }
    private void OnCollisionExit2D(Collision2D collision)
    {
        if (!collision.gameObject.CompareTag("Monster")) return;
        numMonster--;
    }
}

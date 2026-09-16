using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RagdollController : MonoBehaviour
{
    [SerializeField] private List<BalanceController> balances;
    [SerializeField] private GameObject ghost;
    [SerializeField] private GameObject head;
    private Coroutine stopCoroutine;
    public int Piece;
    public bool isDead;
    public void StopBalance()
    {
        if (stopCoroutine != null) return;
        stopCoroutine = StartCoroutine(Fall());
    }
    private IEnumerator Fall()
    {
        yield return new WaitForSeconds(1f);
        balances.ForEach(balance => balance.useBalance = false);
    }
    public void StartBalance()
    {
        if (stopCoroutine == null) return;
        StopCoroutine(stopCoroutine);
        stopCoroutine = null;
        balances.ForEach(balance => balance.useBalance = true);
    }
    public void DestroyPiece()
    {
        if (isDead) return;
        Piece--;
        if (Piece <= 0) Dead();
    }
    private void Dead()
    {
        isDead = true;
        GameObject g = Instantiate(ghost, transform.parent);
        g.transform.position = head.transform.position;
        g.SetActive(true);
        GameController.Ins.DestroyMonster();
    }
}

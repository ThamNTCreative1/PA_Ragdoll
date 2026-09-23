using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RagdollController : MonoBehaviour
{
    [SerializeField] private List<BalanceController> balances;
    [SerializeField] private TargetJoint2D head;
    private Coroutine stopCoroutine;
    public int Piece;
    public bool isDead;
    private void Start()
    {
        TargetController.Ins.SetTarget(head);
    }
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
        GameController.Ins.End();
    }
}

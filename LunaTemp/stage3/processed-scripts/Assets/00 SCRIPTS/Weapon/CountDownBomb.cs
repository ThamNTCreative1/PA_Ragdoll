using System.Collections;
using UnityEngine;

public class CountDownBomb : BombBase
{
    [SerializeField] private float delay;

    protected override void BombStart()
    {
        base.BombStart();
        StartCoroutine(CountDown());
    }

    private IEnumerator CountDown()
    {
        yield return new WaitForSeconds(delay);
        Boom();
    }
}
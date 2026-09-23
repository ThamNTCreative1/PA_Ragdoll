using System.Collections;
using UnityEngine;

public class DropArea : MonoBehaviour
{
    [SerializeField] private int piece;
    private Coroutine endCoroutine;
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (!TargetController.Ins.IsEmpty() || !collision.gameObject.CompareTag("Character")) return;
        piece++;
        endCoroutine ??= StartCoroutine(End());
    }
    private void OnCollisionExit2D(Collision2D collision)
    {
        if (!collision.gameObject.CompareTag("Character")) return;
        piece = Mathf.Max(0, piece--);
        if (piece <= 0)
        {
            if (endCoroutine != null)
            {
                StopCoroutine(endCoroutine);
                endCoroutine = null;
            }
        }
    }
    private IEnumerator End()
    {
        yield return new WaitForSeconds(1);
        GameController.Ins.End();
    }
}

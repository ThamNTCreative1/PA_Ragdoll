using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class TutController : MonoBehaviour
{
    [SerializeField] private List<Vector2> movePos;
    [SerializeField] private float moveTime;
    [SerializeField] private float fromScale;
    [SerializeField] private float toScale;
    [SerializeField] private float scaleTime;
    Sequence sequence;
    void Start()
    {
        sequence = DOTween.Sequence();
        for (int i = 1; i < movePos.Count; i++)
        {
            sequence.Append(transform.DOScale(toScale, scaleTime))
                    .Append(transform.DOScale(fromScale, scaleTime))
                    .AppendInterval(0.5f)
                    .Append(transform.DOLocalMove(movePos[i], moveTime));
        }
        sequence.Append(transform.DOScale(toScale, scaleTime))
                .Append(transform.DOScale(fromScale, scaleTime))
                .AppendInterval(0.5f)
                .Append(transform.DOLocalMove(movePos[0], moveTime));
        sequence.SetLoops(-1, LoopType.Restart);
    }

    private void OnDestroy()
    {
        sequence?.Kill();
    }
}

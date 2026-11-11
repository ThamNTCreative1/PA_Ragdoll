using DG.Tweening;
using UnityEngine;

public class ResetPointEffect : MonoBehaviour
{
    [SerializeField] private SpriteRenderer render;
    [SerializeField] private Transform trans;
    [SerializeField] DOTweenAnimation color;
    [SerializeField] DOTweenAnimation move;

    private void OnEnable()
    {
        trans.localPosition = new Vector2(0, 1);
        Color c = render.color;
        c.a = 1;
        render.color = c;
        color.DORestart();
        move.DORestart();
    }
}

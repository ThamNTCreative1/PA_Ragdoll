using UnityEngine;
using UnityEngine.EventSystems;

// Full-screen transparent UI zone: the finger drags the potion, then the zombie's head (SRP_V07 TargetController).
public class DragZone : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler
{
    [SerializeField] private GameController game;

    public void OnPointerDown(PointerEventData e) { if (game) game.PointerDown(e.position); }
    public void OnDrag(PointerEventData e) { if (game) game.PointerMove(e.position); }
    public void OnPointerUp(PointerEventData e) { if (game) game.PointerUp(); }
}

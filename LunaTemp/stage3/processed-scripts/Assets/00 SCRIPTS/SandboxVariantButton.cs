using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class SandboxVariantButton : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler, IInitializePotentialDragHandler
{
    private MelonSandboxGameplay gameplay;
    private int variant;
    public void Initialize(MelonSandboxGameplay owner, int index) { gameplay = owner; variant = index; }
    public void OnPointerDown(PointerEventData eventData)
    {
        Button button = GetComponent<Button>();
        if (eventData.button == PointerEventData.InputButton.Left && button && button.interactable)
        {
            gameplay.PlayButtonClick();
            gameplay.BeginVariant(variant, eventData.pointerId, eventData.position);
        }
    }
    public void OnInitializePotentialDrag(PointerEventData eventData) => eventData.useDragThreshold = false;
    public void OnDrag(PointerEventData eventData) => gameplay.MovePointer(eventData.pointerId, eventData.position);
    public void OnPointerUp(PointerEventData eventData) => gameplay.EndPointer(eventData.pointerId);
}

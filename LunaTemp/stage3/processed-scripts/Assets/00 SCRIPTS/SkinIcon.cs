using UnityEngine;
using UnityEngine.UI;

// Shows the icon of the character picked in Luna on an existing UI Image
// (side-select buttons and the in-game counters). Icons are indexed by the enum value.
[RequireComponent(typeof(Image))]
public class SkinIcon : MonoBehaviour
{
    public enum Side
    {
        Player,
        Zombie
    }

    [SerializeField] private Side side;
    [Tooltip("Player: one per SprunkySkinId. Zombie: one per ZombieSkinId.")]
    [SerializeField] private Sprite[] icons;

    // Start, not Awake: LunaController.Awake sets the picked skins first.
    private void Start()
    {
        int index = side == Side.Player ? (int)SprunkySkin.Selected : (int)MonsterSkin.Selected;
        if (icons != null && index >= 0 && index < icons.Length && icons[index])
            GetComponent<Image>().sprite = icons[index];
    }
}

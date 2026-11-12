using UnityEngine;

// Player (human) look, picked in the Luna playground through LunaController.
public enum SprunkySkinId
{
    Reddy,
    Sky,
    Vineria,
    Brud,
    Jevin,
    Owakcx,
    Pinki,
    Derpl
}

// Re-skins one Sprunky human rig. Every Sprunky sheet is cut the same way (slice 0 head, 1 upper
// arm, 2 forearm, 3 chest, 4 hand, 5 abdomen, 6 thigh, 7 hip, 8 shin, 9 foot), so a skin is just the
// sheet's 10 sprites plus the 10 of its horror version used when the human is bitten.
public class SprunkySkin : MonoBehaviour
{
    public static SprunkySkinId Selected = SprunkySkinId.Reddy;

    [SerializeField] private SprunkySkinLibrary library;
    [SerializeField] private PlayerController player;
    [Tooltip("Body part renderers, same order as PlayerController.bodyRenderers.")]
    [SerializeField] private SpriteRenderer[] renderers;
    [Tooltip("Sheet slice shown by each renderer.")]
    [SerializeField] private int[] slices;

    private void Awake()
    {
        Apply(Selected);
    }

    public void Apply(SprunkySkinId id)
    {
        SprunkySkinLibrary.Skin skin = library.Get(id);
        if (skin == null) return;
        for (int i = 0; i < renderers.Length; i++)
        {
            renderers[i].sprite = skin.Body[slices[i]];
            player.SetZombieSprite(i, skin.Zombie[slices[i]]);
        }
    }
}

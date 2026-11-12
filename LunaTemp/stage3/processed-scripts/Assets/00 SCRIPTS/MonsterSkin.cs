using UnityEngine;

// Zombie (monster) look, picked in the Luna playground through LunaController.
public enum ZombieSkinId
{
    YellowOrange,
    RedGray
}

// Re-skins one Sprunky monster rig. Each zombie version has two Sprunky sheets (A / B) so a crowd
// mixes both colours; a monster uses the sheet of its slot (-1 = random: every zombie the player
// drops is one of the two of the chosen version).
public class MonsterSkin : MonoBehaviour
{
    public static ZombieSkinId Selected = ZombieSkinId.YellowOrange;

    [SerializeField] private ZombieSkinLibrary library;
    [SerializeField] private SpriteRenderer[] renderers;
    [Tooltip("Sheet slice shown by each renderer.")]
    [SerializeField] private int[] slices;
    [Tooltip("0 = sheet A, 1 = sheet B, -1 = random.")]
    [SerializeField] private int slot = -1;

    private void Awake()
    {
        Apply(Selected);
    }

    public void Apply(ZombieSkinId id)
    {
        ZombieSkinLibrary.Skin skin = library.Get(id);
        if (skin == null) return;
        int s = slot >= 0 ? slot : Random.Range(0, 2);
        Sprite[] sheet = s == 0 ? skin.A : skin.B;
        for (int i = 0; i < renderers.Length; i++)
            renderers[i].sprite = sheet[slices[i]];
    }
}

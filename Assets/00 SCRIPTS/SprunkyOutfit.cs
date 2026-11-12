using UnityEngine;

// Dresses a normal (human) Sprunky in a random outfit from the original game: the clothes are
// always worn, the hat only sometimes. The pieces ride on the head / chest / abdomen bodies.
public class SprunkyOutfit : MonoBehaviour
{
    [SerializeField] private OutfitLibrary library;
    [SerializeField] private SpriteRenderer hat;
    [SerializeField] private SpriteRenderer chest;
    [SerializeField] private SpriteRenderer lower;
    [SerializeField, Range(0f, 1f)] private float hatChance = 0.5f;

    private void Awake()
    {
        if (!library || library.Outfits == null || library.Outfits.Length == 0) return;
        OutfitLibrary.Outfit o = library.Outfits[Random.Range(0, library.Outfits.Length)];
        chest.sprite = o.Chest;
        lower.sprite = o.Lower;

        bool wearHat = o.Hat && Random.value < hatChance;
        hat.gameObject.SetActive(wearHat);
        if (wearHat)
        {
            hat.sprite = o.Hat;
            hat.transform.localPosition = new Vector3(o.HatOffset.x, o.HatOffset.y, 0f);
        }
    }
}

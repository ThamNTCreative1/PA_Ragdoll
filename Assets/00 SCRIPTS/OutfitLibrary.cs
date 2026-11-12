using UnityEngine;

// The original game's outfits (одежда sheet): hat, chest piece and lower piece (abdomen / hip).
[CreateAssetMenu(menuName = "SRP/Outfit Library", fileName = "OutfitLibrary")]
public class OutfitLibrary : ScriptableObject
{
    [System.Serializable]
    public class Outfit
    {
        public string Name;
        public Sprite Hat;
        [Tooltip("Hat position on the head piece, in the head's local units.")]
        public Vector2 HatOffset;
        public Sprite Chest;
        public Sprite Lower;
    }

    public Outfit[] Outfits;
}

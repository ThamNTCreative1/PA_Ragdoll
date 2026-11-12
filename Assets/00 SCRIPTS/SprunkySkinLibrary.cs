using UnityEngine;

// The player skins: per skin the 10 sheet slices of the normal Sprunky and of its horror version.
[CreateAssetMenu(menuName = "SRP/Sprunky Skin Library", fileName = "SprunkySkinLibrary")]
public class SprunkySkinLibrary : ScriptableObject
{
    [System.Serializable]
    public class Skin
    {
        public SprunkySkinId Id;
        public Sprite[] Body;
        public Sprite[] Zombie;
    }

    public Skin[] Skins;

    public Skin Get(SprunkySkinId id)
    {
        if (Skins == null) return null;
        for (int i = 0; i < Skins.Length; i++)
            if (Skins[i] != null && Skins[i].Id == id) return Skins[i];
        return Skins.Length > 0 ? Skins[0] : null;
    }
}

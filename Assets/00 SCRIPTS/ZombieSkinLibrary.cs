using UnityEngine;

// The zombie versions: per version two Sprunky horror sheets (10 slices each).
[CreateAssetMenu(menuName = "SRP/Zombie Skin Library", fileName = "ZombieSkinLibrary")]
public class ZombieSkinLibrary : ScriptableObject
{
    [System.Serializable]
    public class Skin
    {
        public ZombieSkinId Id;
        public Sprite[] A;
        public Sprite[] B;
    }

    public Skin[] Skins;

    public Skin Get(ZombieSkinId id)
    {
        if (Skins == null) return null;
        for (int i = 0; i < Skins.Length; i++)
            if (Skins[i] != null && Skins[i].Id == id) return Skins[i];
        return Skins.Length > 0 ? Skins[0] : null;
    }
}

using UnityEngine;

namespace Game.Gameplay
{
    // Forces every spawned effect to draw in front of the whole scene, since an unfixed prefab's default sorting puts it behind creature sprites.
    public static class EffectSorting
    {
        // "Head" is the last sorting layer in the project; TopOrder clears a rig's max order (~20,500) with margin under Unity's 32,767 ceiling.
        public const string TopLayer = "Head";
        public const int TopOrder = 30000;

        // Applied to every renderer the effect owns — a prefab can carry several, and one missed still draws underneath.
        public static void LiftAboveSprites(GameObject fx)
        {
            if (fx == null) return;
            var renderers = fx.GetComponentsInChildren<Renderer>(true);
            for (int i = 0; i < renderers.Length; i++)
            {
                renderers[i].sortingLayerName = TopLayer;
                renderers[i].sortingOrder = TopOrder;
            }
        }
    }
}

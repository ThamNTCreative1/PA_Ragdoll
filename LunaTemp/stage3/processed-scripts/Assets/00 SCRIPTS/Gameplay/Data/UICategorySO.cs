using System.Collections.Generic;
using UnityEngine;

namespace Game.Data
{
    // A palette category tab and its ordered item list — list order IS the palette order.
    [CreateAssetMenu(menuName = "Data/UI/Category", fileName = "UICategory")]
    public class UICategorySO : ScriptableObject
    {
        public string categoryId;
        public string displayName;
        public Sprite icon;
        [Tooltip("Tab order in the top bar.")]
        public int sortOrder;

        [Tooltip("Thumbnails fill the whole palette card instead of sitting inset with padding.")]
        public bool fullBleedIcons;

        [Tooltip("This category's spawnable items; drag to reorder the palette.")]
        public List<ItemSO> items = new List<ItemSO>();
    }
}

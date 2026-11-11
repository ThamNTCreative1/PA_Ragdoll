using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // Generic placeholder screen used by IUIService; art varies by prefab.
    public class PlaceholderScreen : UIScreen
    {
        [SerializeField] private Button closeButton;

        protected override void OnInit() => closeButton.onClick.AddListener(Hide);
    }
}

using UnityEngine;
using UnityEngine.UI;

namespace MelonAd
{
    /// <summary>
    /// Invisible full-screen button shown on time-out / fail / win.
    /// Nothing is redirected automatically: the first tap calls GameEnded + InstallFullGame.
    /// </summary>
    [RequireComponent(typeof(Image))]
    public class CtaOverlay : MonoBehaviour
    {
        Button button;

        void Awake()
        {
            Image img = GetComponent<Image>();
            img.color = new Color(0f, 0f, 0f, 0f);
            img.raycastTarget = true;
            button = GetComponent<Button>();
            if (button == null) button = gameObject.AddComponent<Button>();
            button.transition = Selectable.Transition.None;
            button.onClick.AddListener(OnClick);
        }

        public void Show()
        {
            transform.SetAsLastSibling();
            gameObject.SetActive(true);
        }

        public void Hide()
        {
            gameObject.SetActive(false);
        }

        void OnClick()
        {
            LunaBridge.GameEnded();
            LunaBridge.InstallFullGame();
        }
    }
}

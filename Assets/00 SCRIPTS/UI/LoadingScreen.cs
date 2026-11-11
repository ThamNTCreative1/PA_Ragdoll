using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // Authored prefab, instantiated directly by GameBootstrapper before Addressables exists —
    // never loaded through IAssetService/IUIService, so it can show before any other asset is ready.
    public class LoadingScreen : MonoBehaviour
    {
        [SerializeField] private CanvasGroup group;
        [SerializeField] private TextMeshProUGUI message;
        [SerializeField] private Image barFill;

        private string _baseMessage = "Loading";
        private float _dotTimer;
        private int _dots;
        private bool _hiding;

        public static LoadingScreen Show(LoadingScreen prefab, string message = "Loading")
        {
            var screen = Instantiate(prefab);
            DontDestroyOnLoad(screen.gameObject);
            screen._baseMessage = message;
            screen.group.blocksRaycasts = true; // swallow input until the world is ready
            screen.message.text = message;
            // A Filled-type Image with no sprite renders as a plain full rect, ignoring fillAmount.
            screen.barFill.sprite = WhiteSprite();
            screen.barFill.fillAmount = 0f;
            return screen;
        }

        private static Sprite _whiteSprite;

        private static Sprite WhiteSprite()
        {
            if (_whiteSprite != null) return _whiteSprite;
            var tex = Texture2D.whiteTexture;
            _whiteSprite = Sprite.Create(tex, new Rect(0, 0, tex.width, tex.height), new Vector2(0.5f, 0.5f));
            return _whiteSprite;
        }

        // Applied at once rather than on the next dot tick, which is up to a third of a second away.
        public void SetMessage(string text)
        {
            _baseMessage = text;
            if (message != null) message.text = _baseMessage + Ellipsis[_dots];
        }

        public void SetProgress(float t01)
        {
            if (barFill != null) barFill.fillAmount = Mathf.Clamp01(t01);
        }

        // Fades the overlay out and destroys it. Safe to call once; ignores repeats.
        public void HideAndDestroy(float fadeDuration = 0.3f)
        {
            if (_hiding) return;
            _hiding = true;
            StartCoroutine(FadeOut(Mathf.Max(0.01f, fadeDuration)));
        }

        // Animated ellipsis, written only when the text changes: assigning it rebuilds the whole text mesh,
        // and doing that every frame for the same three dots showed up as real garbage.
        private void Update()
        {
            if (_hiding || message == null) return;
            _dotTimer += Time.unscaledDeltaTime;
            if (_dotTimer < 0.35f) return;

            _dotTimer = 0f;
            _dots = (_dots + 1) % 4;
            message.text = _baseMessage + Ellipsis[_dots];
        }

        // Pre-built, so the animation never allocates a string.
        private static readonly string[] Ellipsis = { "", ".", "..", "..." };

        private IEnumerator FadeOut(float duration)
        {
            SetProgress(1f);
            float t = 0f;
            while (t < duration)
            {
                t += Time.unscaledDeltaTime;
                if (group != null) group.alpha = Mathf.Lerp(1f, 0f, t / duration);
                yield return null;
            }
            Destroy(gameObject);
        }
    }
}

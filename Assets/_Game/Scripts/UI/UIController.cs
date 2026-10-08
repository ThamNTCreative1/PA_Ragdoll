using UnityEngine;
using UnityEngine.UI;

namespace MelonAd
{
    /// <summary>
    /// Drives the hint (SAVE THE MELON + bobbing head) and the FAIL popup.
    /// All layout lives on the Canvas in the scene and is freely editable:
    /// animations are applied RELATIVE to the position / scale / rotation you set in the editor.
    /// FailRoot can be left active while editing; it is hidden automatically at start.
    /// </summary>
    public class UIController : MonoBehaviour
    {
        [Header("Hint")]
        public GameObject hint;
        public RectTransform head;

        [Header("Fail popup")]
        public GameObject failRoot;
        public RectTransform panel;
        public CanvasGroup panelGroup;
        public RectTransform button;
        public RectTransform finger;
        public Button retryButton;

        [Header("Animation")]
        public float slideDistance = 1000f;
        public float slideDuration = 0.25f;
        public float pulseDuration = 3f;
        public float wiggleDuration = 1.2f;

        Vector2 panelPos0;
        Vector3 headScale0, buttonScale0, fingerScale0;
        Quaternion headRot0, buttonRot0;

        float headT;
        int headPhase;
        float failT = -1f;
        float btnT;
        int btnPhase;

        void Awake()
        {
            panelPos0 = panel.anchoredPosition;
            headScale0 = head.localScale;
            headRot0 = head.localRotation;
            buttonScale0 = button.localScale;
            buttonRot0 = button.localRotation;
            fingerScale0 = finger.localScale;
            retryButton.onClick.AddListener(OnRetryClicked);
            failRoot.SetActive(false);
        }

        void OnRetryClicked()
        {
            if (failT < 1f) return;
            if (GameManager.I != null) GameManager.I.OnFailButton();
        }

        public void ShowHint(bool visible)
        {
            if (hint.activeSelf == visible) return;
            hint.SetActive(visible);
            headT = 0f;
            headPhase = 0;
            head.localScale = headScale0;
            head.localRotation = headRot0;
        }

        public void ShowFail()
        {
            failRoot.SetActive(true);
            failT = 0f;
            btnT = 0f;
            btnPhase = 0;
            finger.gameObject.SetActive(false);
            button.localScale = buttonScale0;
            button.localRotation = buttonRot0;
            ApplyFail(0f);
        }

        public void HideFail()
        {
            failRoot.SetActive(false);
            failT = -1f;
            panel.anchoredPosition = panelPos0;
        }

        void Update()
        {
            float dt = Mathf.Min(Time.deltaTime, 0.05f);
            if (hint.activeSelf) AnimateHead(dt);
            if (failT >= 0f)
            {
                if (failT < 1f)
                {
                    failT += dt / slideDuration;
                    if (failT > 1f) failT = 1f;
                    ApplyFail(failT);
                }
                else
                {
                    AnimateButton(dt);
                }
            }
        }

        void ApplyFail(float t)
        {
            float k = t + 0.4f * Mathf.Sin(Mathf.PI * t);
            panel.anchoredPosition = panelPos0 + new Vector2(0f, slideDistance * (1f - k));
            panelGroup.alpha = Mathf.Min(1f, 10f * t);
        }

        static float Wiggle(float t)
        {
            return -Mathf.Sin(6f * t * Mathf.PI) * Mathf.Sin(t * Mathf.PI) / 7f * Mathf.Rad2Deg;
        }

        void AnimateHead(float dt)
        {
            float dur = headPhase == 0 ? pulseDuration : wiggleDuration;
            headT += dt / dur;
            if (headT >= 1f)
            {
                headT = 0f;
                headPhase = 1 - headPhase;
                head.localScale = headScale0;
                head.localRotation = headRot0;
            }
            if (headPhase == 0)
                head.localScale = headScale0 * (1f + Mathf.Sin(3f * Mathf.PI * headT) / 20f);
            else
                head.localRotation = headRot0 * Quaternion.Euler(0f, 0f, Wiggle(headT));
        }

        void AnimateButton(float dt)
        {
            float dur = btnPhase == 0 ? pulseDuration : wiggleDuration;
            btnT += dt / dur;
            if (btnT >= 1f)
            {
                btnT = 0f;
                btnPhase = 1 - btnPhase;
                button.localScale = buttonScale0;
                button.localRotation = buttonRot0;
                finger.gameObject.SetActive(btnPhase == 1);
            }
            if (btnPhase == 0)
            {
                button.localScale = buttonScale0 * (1f + Mathf.Sin(3f * Mathf.PI * btnT) / 20f);
            }
            else
            {
                finger.localScale = fingerScale0 * (1f - Mathf.Sin(Mathf.PI * btnT) / 8f);
                button.localRotation = buttonRot0 * Quaternion.Euler(0f, 0f, Wiggle(btnT));
            }
        }
    }
}

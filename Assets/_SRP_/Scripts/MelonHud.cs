using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
#if ENABLE_INPUT_SYSTEM
using UnityEngine.InputSystem.UI;
#endif

namespace MelonSandbox
{
    public sealed class MelonHud : MonoBehaviour
    {
        MelonGame game;
        Button[] cards = new Button[3];
        Image[] icons = new Image[3];
        Text[] cardText = new Text[3];
        RectTransform finger;
        RectTransform cardRow;
        CanvasScaler scaler;
        int layoutWidth, layoutHeight;
        Canvas canvas;
        Font font;
        bool showHint;
        MelonTool selectedTool;
        public void Build(MelonGame owner)
        {
            game = owner;
            font = game.assets.uiFont;
            canvas = gameObject.AddComponent<Canvas>(); canvas.renderMode = RenderMode.ScreenSpaceOverlay; canvas.sortingOrder = 100;
            scaler = gameObject.AddComponent<CanvasScaler>(); scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.matchWidthOrHeight = 0;
            gameObject.AddComponent<GraphicRaycaster>();
            if (!EventSystem.current)
            {
                var events = new GameObject("EventSystem"); events.transform.SetParent(transform, false); events.AddComponent<EventSystem>();
#if ENABLE_INPUT_SYSTEM
                events.AddComponent<InputSystemUIInputModule>();
#else
                events.AddComponent<StandaloneInputModule>();
#endif
            }
            string[] captions = { "ACID", "FIRE", "CUT" };
            cardRow = new GameObject("Syringe cards", typeof(RectTransform)).GetComponent<RectTransform>();
            cardRow.SetParent(transform, false);
            cardRow.anchorMin = cardRow.anchorMax = new Vector2(.5f, 0);
            cardRow.pivot = new Vector2(.5f, 0);
            cardRow.sizeDelta = new Vector2(567, 210);
            for (int i = 0; i < 3; i++)
            {
                int index = i;
                var b = new GameObject("Syringe " + i, typeof(RectTransform), typeof(Image), typeof(Button)); b.transform.SetParent(cardRow, false);
                var rect = b.GetComponent<RectTransform>(); rect.anchorMin = rect.anchorMax = new Vector2(.5f, 0); rect.pivot = new Vector2(.5f, .5f); rect.anchoredPosition = new Vector2((i - 1) * 198, 105); rect.sizeDelta = new Vector2(171, 210);
                b.GetComponent<Image>().sprite = game.assets.Sprite("main_btn_" + i);
                cards[i] = b.GetComponent<Button>(); cards[i].onClick.AddListener(() =>
                {
                    if (game.Stage == 3)
                    {
                        if (Playable.GameManager.Instance) Playable.GameManager.Instance.EndGame();
                    }
                    else game.UseSyringe(index);
                });
                var icon = new GameObject("Original icon", typeof(RectTransform), typeof(Image)); icon.transform.SetParent(b.transform, false);
                icons[i] = icon.GetComponent<Image>(); icons[i].raycastTarget = false; icons[i].preserveAspect = true;
                var iconRect = icon.GetComponent<RectTransform>();
                // Luna's runtime RectTransform defaults differ from Unity's; set anchors explicitly.
                iconRect.anchorMin = iconRect.anchorMax = new Vector2(.5f, .5f);
                iconRect.pivot = new Vector2(.5f, .5f);
                iconRect.sizeDelta = new Vector2(111, 154.5f); iconRect.anchoredPosition = new Vector2(0, 9);
                cardText[i] = Label("Caption", b.transform, new Vector2(0, -85.5f), new Vector2(159, 34.5f), 21); cardText[i].color = new Color(.1f, .15f, .18f); cardText[i].text = captions[i];
            }
            var hint = new GameObject("Tutorial finger", typeof(RectTransform), typeof(Image)); hint.transform.SetParent(transform, false);
            finger = hint.GetComponent<RectTransform>();
            finger.anchorMin = finger.anchorMax = new Vector2(.5f, .5f);
            finger.pivot = new Vector2(.5f, .5f);
            finger.sizeDelta = new Vector2(66, 81);
            finger.gameObject.SetActive(false);
            var hintImage = hint.GetComponent<Image>(); hintImage.sprite = game.assets.Sprite("main_finger"); hintImage.raycastTarget = false; hintImage.preserveAspect = true;
            UpdateLayout();
        }
        void LateUpdate()
        {
            if (scaler && (layoutWidth != Screen.width || layoutHeight != Screen.height)) UpdateLayout();
            UpdateHint();
        }
        void UpdateLayout()
        {
            layoutWidth = Mathf.Max(1, Screen.width); layoutHeight = Mathf.Max(1, Screen.height);
            bool portrait = layoutHeight > layoutWidth;
            float designWidth = portrait ? 1080 : 1920;
            scaler.referenceResolution = portrait ? new Vector2(1080, 1920) : new Vector2(1920, 1080);
            float canvasHeight = designWidth * layoutHeight / layoutWidth;
            // Keep the row within the viewport, including short landscape windows.
            float rowScale = Mathf.Min(1, Mathf.Min((designWidth - 48) / 567, canvasHeight * .25f / 210));
            cardRow.localScale = Vector3.one * rowScale;
            cardRow.anchoredPosition = new Vector2(0, Mathf.Min(portrait ? 96 : 48, canvasHeight * .06f));
        }
        Text Label(string name, Transform parent, Vector2 pos, Vector2 size, int fontSize)
        {
            var go = new GameObject(name, typeof(RectTransform), typeof(Text)); go.transform.SetParent(parent, false);
            var r = go.GetComponent<RectTransform>();
            r.anchorMin = r.anchorMax = new Vector2(.5f, .5f);
            r.pivot = new Vector2(.5f, .5f);
            r.anchoredPosition = pos; r.sizeDelta = size;
            var text = go.GetComponent<Text>(); text.font = font; text.fontSize = fontSize; text.alignment = TextAnchor.MiddleCenter; text.color = Color.white; text.raycastTarget = false; return text;
        }
        public void Refresh()
        {
            for (int i = 0; i < cards.Length; i++)
            {
                cards[i].gameObject.SetActive(game.Stage == 0 || game.Stage == 3);
                cards[i].interactable = !game.Paused && (game.Stage == 3 || game.CanSyringe(i));
                icons[i].sprite = game.assets.Sprite((game.Stage == 3 ? "main_sec_" : "main_spr_") + i);
                cardText[i].text = game.Stage == 3 ? "SELECT" : new[] { "ACID", "FIRE", "CUT" }[i];
            }
        }
        public void SetHint(bool show, MelonTool selected)
        {
            showHint = show;
            selectedTool = selected;
        }
        void HideHint()
        {
            if (finger && finger.gameObject.activeSelf) finger.gameObject.SetActive(false);
        }
        void UpdateHint()
        {
            if (!finger || !game) return;
            if (!showHint || selectedTool || game.Paused) { HideHint(); return; }
            var canvasRect = (RectTransform)transform;
            Vector2 position;
            if (game.Stage == 0 || game.Stage == 3)
            {
                int index = 0;
                while (index < cards.Length && !cards[index].interactable) index++;
                if (index == cards.Length) { HideHint(); return; }
                // UI-to-UI conversion needs no screen ray or camera.
                position = (Vector2)canvasRect.InverseTransformPoint(icons[index].transform.position) - canvasRect.rect.center;
            }
            else
            {
                MelonTool tool = game.GetTool(game.Stage == 1 ? MelonToolKind.Saw : MelonToolKind.Rifle);
                if (!tool || !tool.gameObject.activeInHierarchy || !game.gameCamera) { HideHint(); return; }
                var point = game.gameCamera.WorldToScreenPoint(tool.transform.position);
                if (point.z <= 0) { HideHint(); return; }
                // ScreenSpaceOverlay: map screen pixels directly into the canvas rectangle.
                position = new Vector2((point.x / Mathf.Max(1, Screen.width) - .5f) * canvasRect.rect.width,
                    (point.y / Mathf.Max(1, Screen.height) - .5f) * canvasRect.rect.height);
            }
            position += new Vector2(30, -37.5f);
            // Keep the whole pulsing hand visible near screen edges.
            float halfWidth = Mathf.Max(0, (canvasRect.rect.width - finger.sizeDelta.x * 1.03f) * .5f);
            float halfHeight = Mathf.Max(0, (canvasRect.rect.height - finger.sizeDelta.y * 1.03f) * .5f);
            finger.anchoredPosition = new Vector2(Mathf.Clamp(position.x, -halfWidth, halfWidth), Mathf.Clamp(position.y, -halfHeight, halfHeight));
            finger.localScale = Vector3.one * (.95f + .08f * Mathf.Sin(Time.unscaledTime * 5));
            finger.SetAsLastSibling();
            if (!finger.gameObject.activeSelf) finger.gameObject.SetActive(true);
        }
    }
}

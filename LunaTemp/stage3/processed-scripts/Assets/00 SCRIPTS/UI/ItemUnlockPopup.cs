using System;
using System.Collections.Generic;
using DG.Tweening;
using Game.Core;
using Game.Data;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // "Unlock this item?" confirm dialog. Rewarded video must be opt-in, so tapping a locked card
    // asks here first and never starts an ad on its own.
    //
    // Authored prefab (Tools > Setup > Create Item Unlock Popup Prefab builds a starting one),
    // instantiated by UnlockFlow. Every reference below is optional except `group` and `panel`,
    // so the art can be rearranged freely as long as those two survive.
    public class ItemUnlockPopup : MonoBehaviour
    {
        [SerializeField] private CanvasGroup group;
        [Tooltip("The dialog body — scaled up on open.")]
        [SerializeField] private RectTransform panel;

        [Header("Content")]
        [SerializeField] private Image icon;
        [SerializeField] private TextMeshProUGUI title;
        [Tooltip("Filled from the item's ItemUnlock.requirementText.")]
        [SerializeField] private TextMeshProUGUI body;
        [Header("Clue art")]
        [Tooltip("Play-time tasks, which name no item to illustrate.")]
        [SerializeField] private Sprite timeTaskIcon;
        [Tooltip("Kill tasks.")]
        [SerializeField] private Sprite killTaskIcon;
        [Tooltip("Stands in for 'a normal creature' when a task names the type rather than an item.")]
        [SerializeField] private Sprite normalCreatureIcon;
        [Tooltip("Stands in for 'a zombie' when a task names the type rather than an item.")]
        [SerializeField] private Sprite zombieCreatureIcon;

        [Header("Buttons")]
        [Tooltip("Hidden for items unlocked by a task rather than by watching video.")]
        [SerializeField] private Button watchButton;
        [SerializeField] private Button closeButton;
        [Tooltip("Optional: relabelled per mode. Leave unset to keep whatever the prefab says.")]
        [SerializeField] private TextMeshProUGUI closeLabel;
        [SerializeField] private string closeLabelWithWatch = "Later";
        [SerializeField] private string closeLabelTaskOnly = "OK";
        [Tooltip("Optional full-screen dim behind the panel; tapping it closes the dialog.")]
        [SerializeField] private Button dimButton;

        [Header("Animation")]
        [SerializeField] private float fadeDuration = 0.2f;
        [SerializeField] private float openFromScale = 0.9f;

        private Action _onWatch;
        private Action _onClose;
        private bool _dismissed;

        // onWatch is only ever passed for RewardedAd items; a task-locked item just shows what to do.
        // overrideBody replaces the item's own requirement line — used when the item is gated behind
        // another, where showing its real task would be telling the player to do the wrong thing.
        public static ItemUnlockPopup Show(ItemUnlockPopup prefab, ItemSO item, Action onWatch,
            Action onClose = null, string overrideBody = null, Sprite clueOverride = null)
        {
            if (prefab == null)
            {
                Debug.LogError("[UI] No ItemUnlockPopup prefab assigned on GameBootstrapper — " +
                               "run Tools > Setup > Create Item Unlock Popup Prefab, then drag it in.");
                return null;
            }

            var popup = Instantiate(prefab);
            DontDestroyOnLoad(popup.gameObject);
            popup._onWatch = onWatch;
            popup._onClose = onClose;
            popup.Bind(item, onWatch != null, overrideBody, clueOverride);
            popup.PlayOpen();
            return popup;
        }

        private void Bind(ItemSO item, bool canWatch, string overrideBody = null, Sprite clueOverride = null)
        {
            if (icon != null)
            {
                icon.sprite = item.icon;
                // Disabled rather than left showing the prefab's placeholder art.
                icon.enabled = item.icon != null;
                // The item's authored thumbnail angle, as the palette card draws it.
                icon.rectTransform.localRotation = Quaternion.Euler(0f, 0f, item.iconRotation);
            }

            if (title != null)
                title.text = string.IsNullOrEmpty(item.displayName) ? item.itemId : item.displayName;
            if (body != null)
                body.text = string.IsNullOrEmpty(overrideBody) ? item.unlock.Prompt : overrideBody;

            BuildRequirementIcons(item, overrideBody, clueOverride);

            if (watchButton != null)
            {
                watchButton.gameObject.SetActive(canWatch);
                watchButton.onClick.RemoveAllListeners();
                watchButton.onClick.AddListener(OnWatchClicked);
            }

            if (closeButton != null)
            {
                closeButton.onClick.RemoveAllListeners();
                closeButton.onClick.AddListener(Dismiss);
            }

            // A task-locked dialog has nothing to confirm, so "Later" would read as the wrong verb.
            if (closeLabel != null)
                closeLabel.text = canWatch ? closeLabelWithWatch : closeLabelTaskOnly;

            if (dimButton != null)
            {
                dimButton.onClick.RemoveAllListeners();
                dimButton.onClick.AddListener(Dismiss);
            }
        }

        // Unscaled throughout: the sandbox may be paused behind this.
        private void PlayOpen()
        {
            if (group != null)
            {
                group.alpha = 0f;
                group.DOFade(1f, fadeDuration).SetUpdate(true);
            }
            if (panel == null) return;
            panel.localScale = Vector3.one * openFromScale;
            panel.DOScale(1f, fadeDuration).SetEase(Ease.OutBack).SetUpdate(true);
        }

        private void OnWatchClicked()
        {
            if (_dismissed) return;
            _dismissed = true;
            // Cleared first: choosing to watch must not also report a plain close on the way out.
            _onClose = null;
            var watch = _onWatch;
            _onWatch = null;
            Close();
            watch?.Invoke();
        }

        private void Dismiss()
        {
            if (_dismissed) return;
            _dismissed = true;
            var close = _onClose;
            _onClose = null;
            _onWatch = null;
            Close();
            close?.Invoke();
        }

        private void Close()
        {
            if (group == null)
            {
                Destroy(gameObject);
                return;
            }
            group.DOKill();
            if (panel != null) panel.DOKill();
            group.DOFade(0f, fadeDuration).SetUpdate(true).OnComplete(() => Destroy(gameObject));
        }

        private const float ClueIconSize = 140f;
        private const float CluePadding = 20f;
        private const float ClueGap = 16f;
        private const float ClueCountFontSize = 44f;
        private static readonly Color CluePanelColor = new Color(0f, 0f, 0f, 0.55f);

        private RectTransform _cluePanel;

        // A visual restatement of the task, pinned beside the dialog: what to act on, and how many.
        // Players who cannot read the sentence still get the noun and the number from the art.
        //
        // Built at runtime rather than authored, because how many nouns a task has — one, two, or
        // none with art at all — is not known until the item is bound.
        private void BuildRequirementIcons(ItemSO item, string overrideBody, Sprite clueOverride)
        {
            if (_cluePanel != null)
            {
                Destroy(_cluePanel.gameObject);
                _cluePanel = null;
            }

            if (panel == null) return;

            // Gated behind another item: the clue is that item, not this one's own task, which the
            // player cannot act on yet anyway.
            if (clueOverride != null)
            {
                BuildCluePanel(new List<Sprite> { clueOverride });
                return;
            }

            // Any other authored override is free text; its sentence may describe something else.
            if (!string.IsNullOrEmpty(overrideBody)) return;
            if (item.unlock.mode != ItemUnlockMode.Task || item.unlock.task == null) return;

            var task = item.unlock.task;
            bool isPlayTime = task.verb == TaskVerb.PlayTime;

            var sprites = new List<Sprite>();
            // Play-time and kill name no item to point at, so one icon stands for the whole
            // condition rather than for a noun inside it.
            if (isPlayTime)
            {
                if (timeTaskIcon == null) return;
                sprites.Add(timeTaskIcon);
            }
            else if (task.verb == TaskVerb.Kill && killTaskIcon != null)
            {
                sprites.Add(killTaskIcon);
            }
            else
            {
                var subject = ResolveNounIcon(task.subject);
                if (subject != null) sprites.Add(subject);
                if (task.UsesTarget)
                {
                    var target = ResolveNounIcon(task.target);
                    if (target != null) sprites.Add(target);
                }
            }
            if (sprites.Count == 0) return;

            BuildCluePanel(sprites);
            BuildClueCount(task.requiredCount, isPlayTime);
        }

        private void BuildCluePanel(List<Sprite> sprites)
        {
            float height = sprites.Count * ClueIconSize + (sprites.Count - 1) * ClueGap + CluePadding * 2f;

            var panelGo = new GameObject("RequirementClue", typeof(RectTransform), typeof(Image));
            _cluePanel = (RectTransform)panelGo.transform;
            _cluePanel.SetParent(panel, false);
            // Pinned to the dialog's right edge, pivoting on its own left so it grows outwards
            // instead of overlapping the text.
            _cluePanel.anchorMin = _cluePanel.anchorMax = new Vector2(1f, 0.5f);
            _cluePanel.pivot = new Vector2(0f, 0.5f);
            _cluePanel.anchoredPosition = new Vector2(ClueGap, 0f);
            _cluePanel.sizeDelta = new Vector2(ClueIconSize + CluePadding * 2f, height);

            var background = panelGo.GetComponent<Image>();
            background.color = CluePanelColor;
            background.raycastTarget = false;

            float step = ClueIconSize + ClueGap;
            float startY = (sprites.Count - 1) * step * 0.5f;

            for (int i = 0; i < sprites.Count; i++)
            {
                var iconGo = new GameObject("Icon", typeof(RectTransform), typeof(Image));
                var iconRect = (RectTransform)iconGo.transform;
                iconRect.SetParent(_cluePanel, false);
                iconRect.anchorMin = iconRect.anchorMax = iconRect.pivot = new Vector2(0.5f, 0.5f);
                iconRect.sizeDelta = Vector2.one * ClueIconSize;
                iconRect.anchoredPosition = new Vector2(0f, startY - i * step);

                var image = iconGo.GetComponent<Image>();
                image.sprite = sprites[i];
                image.preserveAspect = true;
                image.raycastTarget = false;
            }
        }

        // "Spawn 5 Zombies" names a kind, not an asset, so a stand-in creature carries the idea.
        // Everything else falls back to the filter's own art, which is null for the widest modes.
        private Sprite ResolveNounIcon(ItemFilter filter)
        {
            if (filter.mode != ItemFilterMode.ByCreatureType) return filter.Icon;
            return filter.creatureType == CreatureType.Zombie ? zombieCreatureIcon : normalCreatureIcon;
        }

        // Only the subject carries a count — "put 3 hats on creatures" is three hats, not three
        // creatures — so the badge sits on the first icon. Play-time counts minutes, not repeats,
        // so "x5" would read as five separate somethings.
        private void BuildClueCount(int count, bool isPlayTime)
        {
            if (count <= 1 && !isPlayTime) return;

            var countGo = new GameObject("Count", typeof(RectTransform), typeof(TextMeshProUGUI));
            var countRect = (RectTransform)countGo.transform;
            countRect.SetParent(_cluePanel, false);
            countRect.anchorMin = countRect.anchorMax = countRect.pivot = new Vector2(1f, 1f);
            countRect.sizeDelta = new Vector2(ClueIconSize, ClueCountFontSize + 12f);
            countRect.anchoredPosition = new Vector2(-CluePadding * 0.5f, -CluePadding * 0.5f);

            var label = countGo.GetComponent<TextMeshProUGUI>();
            label.text = isPlayTime ? $"{count}m" : $"x{count}";
            label.alignment = TextAlignmentOptions.Right;
            label.fontSize = ClueCountFontSize;
            label.color = Color.white;
            label.raycastTarget = false;
        }

        // Paired with OnDestroy rather than the close animation so a popup torn down any other way
        // still puts the banner back.
        private void Awake() => BannerSuppression.Acquire();

        private void OnDestroy()
        {
            BannerSuppression.Release();
            if (group != null) group.DOKill();
            if (panel != null) panel.DOKill();
        }
    }
}

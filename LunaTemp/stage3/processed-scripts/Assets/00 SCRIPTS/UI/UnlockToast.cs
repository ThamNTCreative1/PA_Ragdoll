using System.Collections.Generic;
using DG.Tweening;
using Game.Core;
using Game.Data;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // "New item unlocked" banner. Deliberately non-blocking: it slides in over whatever the player
    // is doing, says its piece and leaves. A task unlock fires while they are mid-spawn, so a modal
    // would interrupt the very thing that earned it.
    //
    // Authored prefab, instantiated by UnlockFlow. Only `panel` is required; everything else is
    // optional and null-checked, so the art can be rebuilt freely.
    public class UnlockToast : MonoBehaviour
    {
        [SerializeField] private CanvasGroup group;
        [Tooltip("The banner body — slid in from off-screen and back out.")]
        [SerializeField] private RectTransform panel;

        [Header("Content")]
        [SerializeField] private Image icon;
        [Tooltip("Fixed line, e.g. \"New item unlocked!\".")]
        [SerializeField] private TextMeshProUGUI title;
        [Tooltip("Filled with the unlocked item's display name.")]
        [SerializeField] private TextMeshProUGUI itemName;

        [Header("Timing")]
        [SerializeField] private float slideDuration = 0.35f;
        [SerializeField] private float holdDuration = 2.5f;
        [Tooltip("How far above its resting place the banner starts.")]
        [SerializeField] private float slideDistance = 220f;

        // Queued rather than stacked: one action can complete several tasks at once, and three
        // banners drawn on top of each other reads as a bug.
        private static readonly Queue<ItemSO> Pending = new Queue<ItemSO>();
        private static UnlockToast _current;
        private static UnlockToast _prefab;

        private Sequence _sequence;
        private Vector2 _restPosition;

        public static void Show(UnlockToast prefab, ItemSO item)
        {
            if (prefab == null || item == null) return;
            _prefab = prefab;

            // Unity's null check covers a destroyed instance, so a stale static cannot block it.
            if (_current != null)
            {
                Pending.Enqueue(item);
                return;
            }
            Spawn(item);
        }

        private static void Spawn(ItemSO item)
        {
            var toast = Instantiate(_prefab);
            DontDestroyOnLoad(toast.gameObject);
            _current = toast;
            toast.Bind(item);
            toast.Play();
        }

        private void Bind(ItemSO item)
        {
            if (icon != null)
            {
                icon.sprite = item.icon;
                icon.enabled = item.icon != null;
                // Matches the palette and the unlock tree — one item, one orientation everywhere.
                icon.rectTransform.localRotation = Quaternion.Euler(0f, 0f, item.iconRotation);
            }
            if (itemName != null)
                itemName.text = string.IsNullOrEmpty(item.displayName) ? item.itemId : item.displayName;
            // `title` is left as authored — it is the same line every time.
        }

        // anchoredPosition is in canvas units; the banner is measured in screen pixels.
        private float BannerOffset()
        {
            float pixels = BannerSpace.HeightPixels;
            if (pixels <= 0f) return 0f;
            var canvas = panel.GetComponentInParent<Canvas>();
            float scale = canvas != null ? canvas.scaleFactor : 1f;
            return scale > 0f ? pixels / scale : pixels;
        }

        private void Play()
        {
            if (panel == null)
            {
                Destroy(gameObject);
                Next();
                return;
            }

            // Per banner, not per batch: reading three unlocks should sound like three arrivals.
            if (ServiceLocator.TryGet<SfxLibrarySO>(out var sfx)) Sfx.PlayUI(sfx.unlockReveal);

            // The toast lives on its own canvas, not under the HUD's SafeAreaFitter, so it has to
            // clear the banner itself or it slides in underneath one.
            _restPosition = panel.anchoredPosition - new Vector2(0f, BannerOffset());
            panel.anchoredPosition = _restPosition + new Vector2(0f, slideDistance);
            if (group != null) group.alpha = 0f;

            // Unscaled: the sandbox may be paused behind this.
            _sequence = DOTween.Sequence().SetUpdate(true);
            _sequence.Append(panel.DOAnchorPos(_restPosition, slideDuration).SetEase(Ease.OutBack));
            if (group != null) _sequence.Join(group.DOFade(1f, slideDuration));
            _sequence.AppendInterval(holdDuration);
            _sequence.Append(panel.DOAnchorPos(_restPosition + new Vector2(0f, slideDistance), slideDuration)
                .SetEase(Ease.InBack));
            if (group != null) _sequence.Join(group.DOFade(0f, slideDuration));
            _sequence.OnComplete(() =>
            {
                Destroy(gameObject);
                Next();
            });
        }

        // Cleared before spawning the next one, or Show would queue it behind itself forever.
        private static void Next()
        {
            _current = null;
            if (Pending.Count > 0) Spawn(Pending.Dequeue());
        }

        private void OnDestroy()
        {
            _sequence?.Kill();
            if (_current == this) _current = null;
        }
    }
}

using Game.Data;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    public enum UnlockCardState
    {
        // Owned.
        Unlocked,
        // Prerequisite satisfied, condition not met yet — the only state worth grinding.
        Available,
        // Still gated behind another item; its requirement is deliberately not shown.
        Gated,
    }

    // One node in the unlock tree. Every reference is optional and null-checked so the art can be
    // rebuilt freely; only the component itself has to survive.
    public class UnlockCollectionCard : MonoBehaviour
    {
        [Tooltip("Card background, tinted per state so the actionable card reads at a glance.")]
        [SerializeField] private Image background;
        [SerializeField] private Image icon;
        [SerializeField] private TextMeshProUGUI itemName;
        [Tooltip("What to do, or what gates it.")]
        [SerializeField] private TextMeshProUGUI requirement;
        [Tooltip("\"7 / 20\". Hidden when the item is owned or still gated.")]
        [SerializeField] private TextMeshProUGUI progressLabel;
        [Tooltip("Filled Image driven by progress; its own fillAmount is written directly.")]
        [SerializeField] private Image progressFill;
        [Tooltip("Shown only once the item is owned.")]
        [SerializeField] private GameObject ownedMark;

        [Header("Icon tint by state")]
        [SerializeField] private Color unlockedTint = Color.white;
        [SerializeField] private Color availableTint = Color.white;
        [SerializeField] private Color gatedTint = new Color(0.30f, 0.30f, 0.34f, 1f);

        [Header("Background by state — the actionable card is the bright one")]
        [SerializeField] private Color unlockedBg = new Color(0.14f, 0.24f, 0.17f, 1f);
        [SerializeField] private Color availableBg = new Color(0.22f, 0.24f, 0.30f, 1f);
        [SerializeField] private Color gatedBg = new Color(0.13f, 0.13f, 0.16f, 1f);

        public void Bind(ItemSO item, UnlockCardState state, int progress, int required, string gateText)
        {
            if (background != null)
                background.color = (state == UnlockCardState.Unlocked ? unlockedBg
                    : state == UnlockCardState.Available ? availableBg
                    : gatedBg);

            if (icon != null)
            {
                icon.sprite = item.icon;
                icon.enabled = item.icon != null;
                // Same angle the palette card uses, so an item looks identical in both places.
                icon.rectTransform.localRotation = Quaternion.Euler(0f, 0f, item.iconRotation);
                icon.color = (state == UnlockCardState.Unlocked ? unlockedTint
                    : state == UnlockCardState.Available ? availableTint
                    : gatedTint);
            }

            if (itemName != null)
                itemName.text = string.IsNullOrEmpty(item.displayName) ? item.itemId : item.displayName;

            // A gated card shows what unblocks it, not its own task — telling the player to go kill
            // 30 zombies for something they cannot earn yet is worse than saying nothing.
            if (requirement != null)
                requirement.text = (state == UnlockCardState.Unlocked ? string.Empty
                    : state == UnlockCardState.Gated ? gateText
                    : item.unlock.Prompt);

            bool showProgress = state == UnlockCardState.Available && required > 0;
            if (progressLabel != null)
            {
                progressLabel.gameObject.SetActive(showProgress);
                if (showProgress) progressLabel.text = $"{Mathf.Min(progress, required)} / {required}";
            }
            if (progressFill != null)
            {
                progressFill.gameObject.SetActive(showProgress);
                if (showProgress) progressFill.fillAmount = Mathf.Clamp01((float)progress / required);
            }

            if (ownedMark != null) ownedMark.SetActive(state == UnlockCardState.Unlocked);
        }
    }
}

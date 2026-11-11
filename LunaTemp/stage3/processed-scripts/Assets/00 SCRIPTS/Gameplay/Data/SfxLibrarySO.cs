using UnityEngine;

namespace Game.Data
{
    // Shared fallback sounds; per-item clips on the item's own stats block win over these.
    [CreateAssetMenu(menuName = "Data/Sfx Library", fileName = "SfxLibrary")]
    public class SfxLibrarySO : ScriptableObject
    {
        [Header("UI")]
        [Tooltip("Any uGUI button press (played by UIButtonBounce).")]
        public AudioClip uiClick;
        [Tooltip("A refused action — deleting bedrock, building over it.")]
        public AudioClip error;

        [Header("Unlocks")]
        [Tooltip("New mail arrived — something was just unlocked and is waiting to be opened.")]
        public AudioClip mailArrived;
        [Tooltip("An unlock banner sliding in as the player reads their mail.")]
        public AudioClip unlockReveal;

        [Header("Items")]
        [Tooltip("A non-tile item dropped in from the palette.")]
        public AudioClip itemSpawn;
        [Tooltip("The delete tool removing a loose item.")]
        public AudioClip itemDelete;
        [Tooltip("A weapon leaving a dead or turned holder's hand.")]
        public AudioClip itemDrop;

        [Header("Tiles")]
        [Tooltip("Default block placement; a tile's own placeClip wins over this.")]
        public AudioClip tilePlace;
        [Tooltip("Default block destruction; a tile's own breakClip wins over this.")]
        public AudioClip tileBreak;

        [Header("Props")]
        [Tooltip("Default prop shatter; a prop's own breakClip wins over this.")]
        public AudioClip propBreak;

        [Header("Pickups")]
        [Tooltip("A creature picking up a weapon; the weapon's own pickupClips win over these.")]
        public AudioClip[] weaponPickup;
        [Tooltip("A wearable snapping onto a head.")]
        public AudioClip[] wearablePickup;
    }
}

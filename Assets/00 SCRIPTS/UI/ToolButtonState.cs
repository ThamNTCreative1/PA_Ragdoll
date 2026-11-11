namespace Game.UI
{
    // The three backgrounds in btn-state-3, named as the art names them.
    public enum ToolButtonState
    {
        // Usable, nothing toggled on. The resting look for every button.
        Ready,
        // Toggled on — delete mode armed, link mode armed.
        Active,
        // Nothing for this button to act on; it is also made non-interactable.
        Unactive,
    }
}

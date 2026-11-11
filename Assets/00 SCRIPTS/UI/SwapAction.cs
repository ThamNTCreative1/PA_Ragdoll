namespace Game.UI
{
    // What the tool strip's swap button does for the category currently on screen.
    public enum SwapAction
    {
        // Nothing to swap — the button hides rather than sit there dead.
        None,
        // Tiles: switch the palette between the solid and background sheets.
        TileSheet,
        // Everything else: turn the items left/right, in the palette and on spawn.
        Facing,
    }
}

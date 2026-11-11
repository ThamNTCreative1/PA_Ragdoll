namespace Game.Data
{
    // Root component of an item prefab that can be spawned facing left or right; ItemCreator sets it right after data.
    public interface IItemFacingReceiver
    {
        // ItemFacing.Right (+1) or ItemFacing.Left (-1).
        void SetFacing(int facing);
    }
}

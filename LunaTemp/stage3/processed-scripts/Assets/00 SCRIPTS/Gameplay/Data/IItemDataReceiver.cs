namespace Game.Data
{
    // Root component of an item prefab that takes the item definition at spawn; called by ItemCreator.
    public interface IItemDataReceiver
    {
        void ReceiveData(ItemSO item);
    }
}

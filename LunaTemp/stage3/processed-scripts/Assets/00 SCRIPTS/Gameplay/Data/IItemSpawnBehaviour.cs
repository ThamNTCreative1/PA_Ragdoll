namespace Game.Data
{
    // Optional spawn-time hook on an item prefab; ItemCreator runs all present ones once after data is set.
    public interface IItemSpawnBehaviour
    {
        void OnSpawned(ItemSO item);
    }
}

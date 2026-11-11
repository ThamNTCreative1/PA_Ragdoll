namespace Game.Core
{
    public struct CategorySelectedEvent
    {
        public readonly string CategoryId;
        public CategorySelectedEvent(string categoryId) => CategoryId = categoryId;
    }
}

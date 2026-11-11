using System.Collections.Generic;

namespace Game.UI
{
    // Pure selection logic, no MonoBehaviour — testable without a scene.
    public class CategoryTabSelectionModel
    {
        private readonly List<string> _categoryIds;

        public string SelectedId { get; private set; }

        public CategoryTabSelectionModel(IReadOnlyList<string> categoryIds)
        {
            _categoryIds = new List<string>(categoryIds);
            SelectedId = _categoryIds.Count > 0 ? _categoryIds[0] : null;
        }

        public bool Select(string categoryId)
        {
            if (categoryId == SelectedId) return false;
            if (!_categoryIds.Contains(categoryId)) return false;
            SelectedId = categoryId;
            return true;
        }
    }
}

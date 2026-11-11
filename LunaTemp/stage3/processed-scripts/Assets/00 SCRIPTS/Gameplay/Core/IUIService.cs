using System.Threading.Tasks;

namespace Game.Core
{
    // Screens are addressed by their Addressables key, e.g. "ui/hud".
    public interface IUIService : IGameService
    {
        Task ShowScreenAsync(string key);
        void HideScreen(string key);
        bool IsScreenVisible(string key);
    }
}

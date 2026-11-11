using System.Threading.Tasks;
using Game.Core;

namespace Game.Gameplay
{
    // The source UIService built its own canvas and loaded screens from Addressables. The playable has
    // no such screens (map select, mail), so this answers the lookups and shows nothing.
    public class PlayableUIService : IUIService
    {
        public Task InitializeAsync() => Task.FromResult(true);
        public Task ShowScreenAsync(string key) => Task.FromResult(true);
        public void HideScreen(string key) { }
        public bool IsScreenVisible(string key) => false;
        public void Tick(float deltaTime) { }
        public void Shutdown() { }
    }
}

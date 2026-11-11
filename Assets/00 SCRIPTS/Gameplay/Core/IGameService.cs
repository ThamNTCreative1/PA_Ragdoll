using System.Threading.Tasks;

namespace Game.Core
{
    public interface IGameService
    {
        Task InitializeAsync();
        void Tick(float deltaTime);
        void Shutdown();
    }
}

using System.Threading.Tasks;
using UnityEngine;

namespace Game.Core
{
    
    public interface IAssetService : IGameService
    {
        
        Task<T> LoadAsync<T>(string key) where T : Object;
        void Release(string key);
        void ReleaseAll();
    }
}

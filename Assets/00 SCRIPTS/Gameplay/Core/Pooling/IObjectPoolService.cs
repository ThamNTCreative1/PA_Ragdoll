using UnityEngine;

namespace Game.Core
{
    public interface IObjectPoolService
    {
        void Prewarm(GameObject prefab, int count);
        GameObject Get(GameObject prefab, Vector3 position, Quaternion rotation);
        void Release(GameObject prefab, GameObject instance);
    }
}

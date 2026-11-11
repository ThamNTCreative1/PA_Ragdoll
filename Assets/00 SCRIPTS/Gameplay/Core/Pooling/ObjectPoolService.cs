using System.Collections.Generic;
using System.Threading.Tasks;
using UnityEngine;

namespace Game.Core
{
    public class ObjectPoolService : IObjectPoolService, IGameService
    {
        private readonly Dictionary<GameObject, Stack<GameObject>> _pools = new Dictionary<GameObject, Stack<GameObject>>();
        private Transform _root;

        public Task InitializeAsync()
        {
            _root = new GameObject("[Pools]").transform;
            Object.DontDestroyOnLoad(_root.gameObject);
            return Task.FromResult(true);
        }

        public void Prewarm(GameObject prefab, int count)
        {
            var pool = GetPool(prefab);
            for (int i = 0; i < count; i++)
            {
                var go = Object.Instantiate(prefab, _root);
                go.SetActive(false);
                pool.Push(go);
            }
        }

        public GameObject Get(GameObject prefab, Vector3 position, Quaternion rotation)
        {
            var pool = GetPool(prefab);
            GameObject go = null;
            while (pool.Count > 0 && go == null)
                go = pool.Pop(); // skip instances destroyed externally
            if (go == null)
                go = Object.Instantiate(prefab, _root);

            go.transform.SetPositionAndRotation(position, rotation);
            go.SetActive(true);
            return go;
        }

        public void Release(GameObject prefab, GameObject instance)
        {
            if (instance == null) return;
            instance.SetActive(false);
            instance.transform.SetParent(_root, false);
            GetPool(prefab).Push(instance);
        }

        private Stack<GameObject> GetPool(GameObject prefab)
        {
            if (!_pools.TryGetValue(prefab, out var pool))
                _pools[prefab] = pool = new Stack<GameObject>();
            return pool;
        }

        public void Tick(float deltaTime) { }

        public void Shutdown()
        {
            if (_root != null) Object.Destroy(_root.gameObject);
            _pools.Clear();
        }
    }
}

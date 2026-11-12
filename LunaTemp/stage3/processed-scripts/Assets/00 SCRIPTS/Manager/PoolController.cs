using System.Collections.Generic;
using UnityEngine;

public class PoolController : MonoBehaviour
{
    [SerializeField] private Transform poolParent;
    private Queue<GameObject> pool;
    public static PoolController Ins;
    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }
    private void Awake()
    {
        CreateIns();
        pool = new Queue<GameObject>();
    }

    private GameObject CreateNewObject(GameObject prefab)
    {
        GameObject obj = Instantiate(prefab, poolParent);
        return obj;
    }
    private GameObject GetFreeObject(GameObject prefab)
    {
        if (pool.Count > 0) return pool.Dequeue();
        return CreateNewObject(prefab);
    }
    public void SpawnObj(GameObject prefab, [Bridge.Ref] Vector2 position, [Bridge.Ref] Quaternion rotation)
    {
        GameObject obj = GetFreeObject(prefab);
        obj.transform.SetPositionAndRotation(position, rotation);
        obj.SetActive(true);
    }
    public void ReturnToPool(GameObject obj)
    {
        obj.SetActive(false);
        pool.Enqueue(obj);
    }
}
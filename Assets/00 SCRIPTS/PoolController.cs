using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PoolController : MonoBehaviour
{
    [SerializeField] private Transform world;
    private Dictionary<int, Queue<GameObject>> pool;

    public static PoolController Ins { get; private set; }
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
        pool = new Dictionary<int, Queue<GameObject>>();
    }
    private GameObject CreateNewObject(GameObject prefab)
    {
        GameObject obj = Instantiate(prefab);
        obj.transform.SetParent(world);
        return obj;
    }
    private GameObject GetFreeObject(GameObject prefab)
    {
        int key = prefab.GetInstanceID();
        if (!pool.ContainsKey(key)) pool.Add(key, new Queue<GameObject>());

        Queue<GameObject> q = pool[key];
        if (q.Count > 0) return q.Dequeue();

        return CreateNewObject(prefab);
    }
    public void SpawnObject(GameObject prefab, Vector2 position, Quaternion rotation)
    {
        GameObject obj = GetFreeObject(prefab);

        obj.transform.position = position;
        obj.transform.rotation = rotation;
        obj.transform.localScale = world.transform.lossyScale;
        obj.SetActive(true);

        StartCoroutine(ReturnToPool(prefab.GetInstanceID(), obj));
    }
    private IEnumerator ReturnToPool(int key, GameObject obj)
    {
        yield return new WaitUntil(() => !obj.activeSelf);
        if (pool.ContainsKey(key)) pool[key].Enqueue(obj);
    }
}
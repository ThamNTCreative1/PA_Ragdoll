using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VFXController : MonoBehaviour
{
    private Dictionary<GameObject, Queue<GameObject>> pool;
    [SerializeField] private Transform poolParent;
    public static VFXController Ins;
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
        pool = new Dictionary<GameObject, Queue<GameObject>>();
    }
    private GameObject CreateNewVFX(GameObject prefab)
    {
        GameObject vfx = Instantiate(prefab);
        vfx.transform.SetParent(poolParent);
        return vfx;
    }
    private GameObject GetFreeVFX(GameObject prefab)
    {
        if (!pool.ContainsKey(prefab)) pool.Add(prefab, new Queue<GameObject>());
        Queue<GameObject> q = pool[prefab];
        if (q.Count > 0) return q.Dequeue();
        return CreateNewVFX(prefab);
    }
    public void SpawnVFX([Bridge.Ref] Vector2 position, GameObject prefab)
    {
        GameObject vfx = GetFreeVFX(prefab);
        vfx.transform.position = position;
        vfx.transform.localScale = poolParent.transform.lossyScale;
        vfx.SetActive(true);
        StartCoroutine(ReturnToPool(prefab, vfx));
    }
    private IEnumerator ReturnToPool(GameObject prefab, GameObject vfx)
    {
        yield return new WaitForSeconds(4);
        vfx.SetActive(false);
        pool[prefab].Enqueue(vfx);
    }
}
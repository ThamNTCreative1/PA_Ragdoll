using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VFXController : MonoBehaviour
{
    [SerializeField] private GameObject bloodPrefab;
    private Queue<GameObject> bloodPool;
    [SerializeField] private Transform pool;
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
        BootstrapPool();
    }
    private void BootstrapPool()
    {
        bloodPool = new Queue<GameObject>();
        bloodPool.Enqueue(CreateNewVFX());
        bloodPool.Enqueue(CreateNewVFX());
        bloodPool.Enqueue(CreateNewVFX());
        bloodPool.Enqueue(CreateNewVFX());
        bloodPool.Enqueue(CreateNewVFX());
    }
    private GameObject CreateNewVFX()
    {
        GameObject vfx = Instantiate(bloodPrefab);
        vfx.transform.SetParent(pool);
        return vfx;
    }
    private GameObject GetFreeVFX()
    {
        if (bloodPool.Count > 0) return bloodPool.Dequeue();
        return CreateNewVFX();
    }
    public void SpawnVFX([Bridge.Ref] Vector2 position)
    {
        GameObject vfx = GetFreeVFX();
        vfx.transform.position = position;
        vfx.SetActive(true);
        StartCoroutine(ReturnToPool(vfx));
    }
    private IEnumerator ReturnToPool(GameObject blood)
    {
        yield return new WaitForSeconds(4);
        blood.SetActive(false);
        bloodPool.Enqueue(blood);
    }
}
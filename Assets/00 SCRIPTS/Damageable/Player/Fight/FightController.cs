using System.Collections.Generic;
using UnityEngine;

public class FightController : MonoBehaviour
{
    [Header("Spawn")]
    [SerializeField] protected AudioClip attackSound;
    [SerializeField] protected GameObject spawnPrefab;

    [Header("Pool")]
    [SerializeField] protected Transform poolParent;
    private Queue<GameObject> pool;
    public Queue<GameObject> Pool => pool;
    private void Awake()
    {
        pool = new Queue<GameObject>();
    }
    public virtual void Action(Vector2 position, Quaternion rotation)
    {
        Spawn(position, rotation);
    }

    protected virtual void Spawn(Vector2 position, Quaternion rotation)
    {
        GameObject b = GetFreeSpawn();
        b.transform.SetPositionAndRotation(position, rotation);
        b.SetActive(true);

        AudioController.Ins.PlaySFX(attackSound);
    }
    private GameObject GetFreeSpawn()
    {
        if (pool.Count > 0) return pool.Dequeue();
        return CreateNewSpawn();
    }
    private GameObject CreateNewSpawn()
    {
        return Instantiate(spawnPrefab, poolParent);
    }
}
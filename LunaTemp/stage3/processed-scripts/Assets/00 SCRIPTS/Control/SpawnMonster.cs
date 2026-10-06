using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnMonster : MonoBehaviour
{
    [SerializeField] private Transform world;
    [SerializeField] private Transform spawnPos;
    [SerializeField] private List<GameObject> monsterPrefabs;
    [SerializeField, Min(1f)] private float maxtimeSpawn;
    [SerializeField, Min(0.2f)] private float mintimeSpawn;

    private Coroutine spawnCoroutine;

    private void Start()
    {
        GameController.Ins.OnStart += () => ControlSpawn(true);
        GameController.Ins.OnGameOver += () => ControlSpawn(false);
    }
    public void SetMinMax(float min, float max)
    {
        mintimeSpawn = Mathf.Max(0.1f, min);
        maxtimeSpawn = Mathf.Max(min, max);
    }
    public void ControlSpawn(bool isStart)
    {
        if (isStart)
        {
            spawnCoroutine = spawnCoroutine ?? StartCoroutine(SpawnLoop());
        }
        else
        {
            if (spawnCoroutine == null) return;
            StopCoroutine(spawnCoroutine);
            spawnCoroutine = null;
        }
    }
    private IEnumerator SpawnLoop()
    {
        Spawn();
        while (true)
        {
            yield return new WaitForSeconds(Random.Range(mintimeSpawn, maxtimeSpawn));
            Spawn();
        }
    }

    private void Spawn()
    {
        int idx = Random.Range(0, monsterPrefabs.Count);
        GameObject monster = Instantiate(monsterPrefabs[idx], world);
        monster.transform.position = spawnPos.position;
    }
}

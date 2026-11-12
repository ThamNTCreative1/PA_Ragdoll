using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public abstract class OptionController : MonoBehaviour
{
    [Header("Spawn")]
    [SerializeField] private Transform world;
    [SerializeField] private Button area;
    [SerializeField] private GameObject areaTut;
    [SerializeField] protected GameObject spawnPrefab;
    [SerializeField] protected GameObject[] spawnPrefabs;
    [SerializeField] protected int numCharacter;
    [SerializeField] protected Text numText;
    private bool onCD;
    protected int maxSpawn;

    private void Start()
    {
        area.onClick.AddListener(ClickAdd);
    }
    public void InitMaxSpawn(int max)
    {
        maxSpawn = max;
        numText.text = maxSpawn.ToString();
    }
    private void ClickAdd()
    {
        if (areaTut) Destroy(areaTut);
        AddCharacter(Camera.main.ScreenToWorldPoint(Input.mousePosition), world);
    }
    public void AddCharacter([Bridge.Ref] Vector2 position, Transform world)
    {
        if (!spawnPrefab || maxSpawn <= 0 || onCD) return;
        StartCoroutine(CD());
        maxSpawn--;
        numCharacter++;
        numText.text = maxSpawn.ToString();
        OnSpawn?.Invoke();
        GameObject prefab = spawnPrefab;
        if (spawnPrefabs != null && spawnPrefabs.Length > 0) prefab = spawnPrefabs[UnityEngine.Random.Range(0, spawnPrefabs.Length)];
        GameObject m = Instantiate(prefab, world);
        m.transform.position = position;
        m.SetActive(true);
    }
    private IEnumerator CD()
    {
        onCD = true;
        yield return new WaitForSeconds(0.5f);
        onCD = false;
    }
    public Action OnSpawn;
    public Action OnEmpty;

    public Action OnEnd;
    public void RemoveCharacter()
    {
        numCharacter = Mathf.Max(0, numCharacter - 1);
        if (numCharacter <= 0)
        {
            OnEmpty?.Invoke();
            if (maxSpawn <= 0) OnEnd?.Invoke();
        }
    }
}
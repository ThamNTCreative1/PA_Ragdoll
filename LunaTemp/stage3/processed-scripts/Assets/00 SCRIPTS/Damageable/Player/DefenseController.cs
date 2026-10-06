using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class DefenseController : MonoBehaviour
{
    [Header("Block")]
    [SerializeField] private Transform world;
    [SerializeField] private Vector2 offset;
    [SerializeField] private float cellSize;
    [SerializeField] private AudioClip putSound;
    [SerializeField] private AudioClip clickSound;
    [SerializeField] private List<BlockType> blockTypes;
    [SerializeField] private GameObject optionTut;
    [SerializeField] private GameObject buildTut;
    private BlockType currentType;
    private void Awake()
    {
        blockTypes.ForEach(b => b.Button.onClick.AddListener(() => ChangeBlockType(b)));
    }
    private void ChangeBlockType([Bridge.Ref] BlockType type)
    {
        if (optionTut)
        {
            Destroy(optionTut);
            buildTut.SetActive(true);
        }
        if (currentType.Prefab) currentType.Selected.enabled = false;
        AudioController.Ins.PlaySFX(clickSound);
        currentType = type;
        currentType.Selected.enabled = true;
    }
    private void Update()
    {
        CheckInput();
    }
    private void CheckInput()
    {
        if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId)) return;
            Vector3 worldPos = Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position);
            Action(worldPos);
            return;
        }
        if (Input.GetMouseButtonDown(0))
        {
            if (EventSystem.current.IsPointerOverGameObject()) return;
            Vector3 worldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            Action(worldPos);
        }
    }
    public void Action([Bridge.Ref] Vector2 position)
    {
        if (!currentType.Prefab) return;
        Spawn(position);
    }
    protected void Spawn([Bridge.Ref] Vector2 position)
    {
        RaycastHit2D hit = Physics2D.Raycast(position, Vector2.zero);
        if (hit.collider) return;

        position = world.InverseTransformPoint(position);
        Vector2Int cell = WorldToCell(position);
        Vector2 pos = CellToWorld(cell);

        GameObject b = Instantiate(currentType.Prefab, world);
        b.transform.localPosition = pos;
        b.SetActive(true);

        AudioController.Ins.PlaySFX(putSound);
        GameController.Ins.Click();
    }

    private Vector2Int WorldToCell([Bridge.Ref] Vector2 world)
    {
        return new Vector2Int(
            Mathf.RoundToInt((world.x - offset.x) / cellSize),
            Mathf.RoundToInt((world.y - offset.y) / cellSize)
        );
    }
    private Vector3 CellToWorld([Bridge.Ref] Vector2Int cell)
    {
        return new Vector3(
            offset.x + cell.x * cellSize,
            offset.y + cell.y * cellSize,
            0
        );
    }
}
[System.Serializable]
public struct BlockType
{
    public Button Button;
    public Image Selected;
    public GameObject Prefab;
    public Vector2 blockSize;
}
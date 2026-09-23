using UnityEngine;

public class TargetController : MonoBehaviour
{
    [SerializeField] private TargetJoint2D currentTarget;
    [SerializeField] private GameObject tut;
    public static TargetController Ins { get; private set; }
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
    }
    public void SetTarget(TargetJoint2D target)
    {
        currentTarget = target;
    }

    private void Update()
    {
        CheckInput();
    }
    private void CheckInput()
    {
        if (Input.GetMouseButton(0))
        {
            if (tut) Destroy(tut);

            Vector2 point = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            SetTargetPoint(point);
        }
        if (Input.GetMouseButtonUp(0))
        {
            RemoveTargetPoint();
        }
    }
    private void SetTargetPoint([Bridge.Ref] Vector2 point)
    {
        if (!currentTarget) return;
        currentTarget.target = point;
        currentTarget.enabled = true;
    }
    private void RemoveTargetPoint()
    {
        if (!currentTarget) return;
        currentTarget.enabled = false;
    }

    public bool IsEmpty()
    {
        return !currentTarget || !currentTarget.enabled;
    }
}

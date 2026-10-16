using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private PlayerController player;
    [SerializeField] private TargetController target;
    [SerializeField] private CameraFollow follow;
    [SerializeField] GameObject endUI;
    [SerializeField] private List<GameObject> hints;
    [SerializeField] private GameObject tut2;
    [SerializeField] private Rigidbody2D table;
    public static GameController Ins;
    [SerializeField] private int currentMonster;
    [SerializeField] private float timeDelay;
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
    public void End()
    {
        target.RemoveTarget();
        tut2.SetActive(false);
        endUI.SetActive(true);
    }
    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.A)) Zombie();
    }

    public void Zombie()
    {
        table.bodyType = RigidbodyType2D.Dynamic;
        player.Zombie();
        follow.enabled = true;
        target.NextTarget();
        hints.ForEach(hint => hint.SetActive(true));
        tut2.SetActive(true);
    }
    public void RemoveMonster()
    {
        currentMonster--;
        if (currentMonster <= 0) Invoke(nameof(End), timeDelay);
    }
}

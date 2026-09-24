using UnityEngine;

public class GameController : MonoBehaviour
{
    [SerializeField] private MonsterController monster;
    [SerializeField] private TargetController target;
    [SerializeField] GameObject endUI;
    public static GameController Ins;
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
        endUI.SetActive(true);
    }

    public void DamageMonster()
    {
        monster.TakeDamage();
    }

}

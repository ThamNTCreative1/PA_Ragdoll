using UnityEngine;

public class TriggerMonster : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        GameController.Ins.PauseGame();
        Destroy(gameObject);
    }
}

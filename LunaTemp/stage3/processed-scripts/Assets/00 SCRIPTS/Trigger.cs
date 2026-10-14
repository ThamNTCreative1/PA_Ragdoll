using UnityEngine;

public class Trigger : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        GameController.Ins.OnPause?.Invoke();
        Destroy(gameObject);
    }
}

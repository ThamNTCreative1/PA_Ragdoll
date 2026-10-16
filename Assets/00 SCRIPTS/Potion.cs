using UnityEngine;

public class Potion : MonoBehaviour
{
    [SerializeField] private AudioClip sound;
    private bool used;
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Character"))
        {
            UsePotion();
        }
    }
    private void UsePotion()
    {
        if (used) return;
        used = true;
        AudioController.Ins.PlaySFX(sound);
        GameController.Ins.Zombie();
        Destroy(transform.parent.gameObject);
    }
}
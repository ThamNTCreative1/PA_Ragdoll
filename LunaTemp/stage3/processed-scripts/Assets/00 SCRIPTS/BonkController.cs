using UnityEngine;

public class BonkController : MonoBehaviour
{
    [SerializeField] private string target;
    [SerializeField] private AudioClip hitSound;
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (!collision.gameObject.CompareTag(target)) return;
        AudioController.Ins.PlaySFX(hitSound);
        
        VFXController.Ins.SpawnVFX(collision.transform.position);
    }
}

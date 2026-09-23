using UnityEngine;

public class BonkController : MonoBehaviour
{
    [SerializeField] private string target;
    [SerializeField] private int maxBonk;
    [SerializeField] private AudioClip hitSound;
    private int count;
    void OnCollisionEnter2D(Collision2D collision)
    {
        if (!collision.gameObject.CompareTag(target)) return;
        AudioController.Ins.PlaySFX(hitSound);
        count++;
        if (count == maxBonk)
        {
            GameController.Ins.KillMonster();
        }
        VFXController.Ins.SpawnVFX(collision.transform.position);
    }

}

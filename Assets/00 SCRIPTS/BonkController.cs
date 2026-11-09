using UnityEngine;

// Tay/vũ khí của nhân vật đập vào quái. Chỉ trừ máu (và tóe máu) khi quái đã hết giáp.
public class BonkController : MonoBehaviour
{
    [SerializeField] private string target;
    [SerializeField] private int damage = 1;
    [SerializeField] private AudioClip hitSound;
    void OnCollisionEnter2D(Collision2D collision)
    {
        if (!collision.gameObject.CompareTag(target)) return;
        MonsterController monster = collision.gameObject.GetComponentInParent<MonsterController>();
        if (!monster || monster.IsDead) return;
        AudioController.Ins.PlaySFX(hitSound);
        if (monster.Punch(damage, collision.GetContact(0).point)) return; // trúng thì quái tự tóe máu
        // Đấm vào quái còn giáp: nhắc lại hướng dẫn chọn power để phá giáp.
        if (!monster.ArmorBroken && PowerController.Ins) PowerController.Ins.ShowChoiceTut();
    }
}

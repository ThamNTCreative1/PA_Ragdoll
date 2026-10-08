using UnityEngine;

public class BonkController : MonoBehaviour
{
    [SerializeField] private string target;
    [SerializeField] private int maxBonk;
    [SerializeField] private AudioClip hitSound;
    private int count;

    // TargetJoint2D tren chinh no hoac tay cha – chi hit khi dang bi nguoi choi keo
    private TargetJoint2D joint;

    private void Awake()
    {
        // Tim joint tren chinh no hoac tay cha (vd: Bonk gan vao hand_front)
        joint = GetComponentInParent<TargetJoint2D>();
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        // Chi gay damage khi dang bi keo (joint enabled)
        if (joint != null && !joint.enabled) return;

        if (!collision.gameObject.CompareTag(target)) return;

        // Luon co mau + am thanh moi khi danh trung (ke ca xac vua chet)
        if (AudioController.Ins != null) AudioController.Ins.PlaySFX(hitSound);
        ContactPoint2D[] contacts = collision.contacts;
        Vector2 hitPoint = contacts != null && contacts.Length > 0 ? contacts[0].point : (Vector2)collision.transform.position;
        if (VFXController.Ins != null) VFXController.Ins.SpawnVFX(hitPoint);

        // Chi TINH DON khi trung monster con song cua level hien tai
        // (xac da chet / dang chuyen level -> khong tinh, tranh nhay coc level)
        if (GameController.Ins != null && !GameController.Ins.IsCurrentMonster(collision.transform)) return;

        count++;
        if (count >= maxBonk)
        {
            count = 0;
            GameController.Ins.KillMonster();
        }
    }

}

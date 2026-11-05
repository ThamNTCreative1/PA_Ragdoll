using System.Collections;
using UnityEngine;

// Máu của player. Mất máu thì nháy đỏ (không có thanh máu).
// Damage từ power/vũ khí (IDamageable) hết máu thì chết ragdoll; quái cắn thì đi qua PlayerBite -> PlayerZombie.
[RequireComponent(typeof(PlayerController))]
public class PlayerHealth : MonoBehaviour, IDamageable
{
    [SerializeField] private int maxHP = 50;
    [SerializeField] private int currentHP;
    [SerializeField] private Color hitColor = new Color(1f, 0.35f, 0.35f);
    [SerializeField] private float hitFlashTime = 0.12f;

    private PlayerController controller;
    private SpriteRenderer[] bodySprites;
    private Color[] bodyColors;
    private Coroutine flashRoutine;
    private bool isDead;

    public bool IsDead => isDead;
    public int CurrentHP => currentHP;

    private void Awake()
    {
        controller = GetComponent<PlayerController>();
        currentHP = maxHP;
        // Lưu màu gốc các sprite cơ thể (lửa "Burn" gắn vào sau nên không nằm trong danh sách này).
        bodySprites = GetComponentsInChildren<SpriteRenderer>(true);
        bodyColors = new Color[bodySprites.Length];
        for (int i = 0; i < bodySprites.Length; i++) bodyColors[i] = bodySprites[i].color;
    }

    // IDamageable: power/vũ khí. Hết máu thì chết ragdoll và thua.
    public void TakeDamage(int amount)
    {
        if (!Damage(amount)) return;
        controller.Dead();
        GameController.Ins.GameOver();
    }

    // Trừ máu, trả về true nếu lần này làm player chết. Người gọi tự xử lý kiểu chết.
    public bool Damage(int amount)
    {
        if (isDead || amount <= 0) return false;
        currentHP -= amount;
        if (currentHP > 0)
        {
            if (flashRoutine != null) StopCoroutine(flashRoutine);
            flashRoutine = StartCoroutine(HitFlash());
            return false;
        }
        currentHP = 0;
        isDead = true;
        StopFlash();
        OnDeath();
        return true;
    }

    // Chết (mọi kiểu: ragdoll hay hoá zombie): thả TargetJoint giữ đầu, tắt vũ khí và power.
    private void OnDeath()
    {
        if (controller.Head) controller.Head.enabled = false;
        foreach (FightController f in GetComponentsInChildren<FightController>(true)) f.enabled = false;
        foreach (PowerController p in FindObjectsOfType<PowerController>()) p.enabled = false;
    }

    public void StopFlash()
    {
        if (flashRoutine != null) StopCoroutine(flashRoutine);
        flashRoutine = null;
        for (int i = 0; i < bodySprites.Length; i++) if (bodySprites[i]) bodySprites[i].color = bodyColors[i];
    }

    private IEnumerator HitFlash()
    {
        for (int i = 0; i < bodySprites.Length; i++) if (bodySprites[i]) bodySprites[i].color = bodyColors[i] * hitColor;
        yield return new WaitForSeconds(hitFlashTime);
        for (int i = 0; i < bodySprites.Length; i++) if (bodySprites[i]) bodySprites[i].color = bodyColors[i];
        flashRoutine = null;
    }
}

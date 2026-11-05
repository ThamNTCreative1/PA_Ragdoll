using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Quái chạm vào vùng trigger của player thì cắn: trừ máu ngay, rồi cứ biteInterval trừ tiếp khi còn chạm.
// Hết máu thì player hoá zombie (PlayerZombie).
// Phải nằm cùng GameObject với collider trigger của player để nhận OnTrigger.
[RequireComponent(typeof(PlayerHealth))]
public class PlayerBite : MonoBehaviour
{
    [SerializeField] private int biteDamage = 10;
    [SerializeField] private float biteInterval = 0.2f;
    [SerializeField] private AudioClip biteSound;
    [SerializeField] private float biteSoundInterval = 0.4f; // khoảng cách tối thiểu giữa 2 lần phát (cắn liên tục mỗi 0.2s)
    private float nextBiteSound;

    private PlayerHealth health;
    private PlayerZombie zombie;
    private readonly Dictionary<MonsterController, int> touching = new Dictionary<MonsterController, int>();
    private readonly List<MonsterController> pruneBuffer = new List<MonsterController>();

    private void Awake()
    {
        health = GetComponent<PlayerHealth>();
        zombie = GetComponent<PlayerZombie>();
    }

    private void Start()
    {
        // Dùng coroutine thay vì Update: GameController tắt PlayerController/các script player ở một số mode,
        // coroutine vẫn chạy khi component bị tắt.
        StartCoroutine(BiteLoop());
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (!collision.gameObject.CompareTag("Monster")) return;
        MonsterController monster = collision.GetComponentInParent<MonsterController>();
        if (!monster || monster.IsDead) return;
        int count;
        touching.TryGetValue(monster, out count);
        touching[monster] = count + 1;
    }

    private void OnTriggerExit2D(Collider2D collision)
    {
        if (!collision.gameObject.CompareTag("Monster")) return;
        MonsterController monster = collision.GetComponentInParent<MonsterController>();
        int count;
        if (!monster || !touching.TryGetValue(monster, out count)) return;
        if (count <= 1) touching.Remove(monster);
        else touching[monster] = count - 1;
    }

    private bool HasLivingMonsterTouching()
    {
        pruneBuffer.Clear();
        foreach (KeyValuePair<MonsterController, int> kv in touching)
            if (!kv.Key || kv.Key.IsDead) pruneBuffer.Add(kv.Key);
        foreach (MonsterController m in pruneBuffer) touching.Remove(m);
        return touching.Count > 0;
    }

    private void PlayBiteSound()
    {
        if (!biteSound || Time.time < nextBiteSound) return;
        nextBiteSound = Time.time + biteSoundInterval;
        AudioController.Ins.PlaySFX(biteSound);
    }

    private IEnumerator BiteLoop()
    {
        while (!health.IsDead)
        {
            if (HasLivingMonsterTouching())
            {
                PlayBiteSound();
                if (health.Damage(biteDamage))
                {
                    if (zombie) zombie.TurnIntoZombie();
                    else GameController.Ins.GameOver();
                    yield break;
                }
                yield return new WaitForSeconds(biteInterval);
            }
            else yield return null;
        }
    }
}

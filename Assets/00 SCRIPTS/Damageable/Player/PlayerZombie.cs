using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Player hoá zombie: đổi sprite từng bộ phận sang bản zombie, phát âm thanh, chờ một chút rồi thua.
public class PlayerZombie : MonoBehaviour
{
    [SerializeField] private List<ZombiePart> parts;
    [SerializeField] private AudioClip zombieSFX;
    [SerializeField] private float loseDelay = 1f; // cho người chơi thấy player hoá zombie trước khi hiện màn thua

    private bool isZombie;
    public bool IsZombie => isZombie;

    public void TurnIntoZombie()
    {
        if (isZombie) return;
        isZombie = true;
        foreach (ZombiePart p in parts) if (p.Renderer && p.Sprite) p.Renderer.sprite = p.Sprite;
        if (zombieSFX) AudioController.Ins.PlaySFX(zombieSFX);
        StartCoroutine(LoseAfterDelay());
    }

    private IEnumerator LoseAfterDelay()
    {
        yield return new WaitForSeconds(loseDelay);
        GameController.Ins.GameOver();
    }
}

[System.Serializable]
public struct ZombiePart
{
    public SpriteRenderer Renderer;
    public Sprite Sprite;
}

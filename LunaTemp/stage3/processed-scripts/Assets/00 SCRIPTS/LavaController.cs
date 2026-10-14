using UnityEngine;

public class LavaController : MonoBehaviour
{
    [SerializeField] private AudioSource sound;
    [SerializeField] private int part;
    [SerializeField] private bool isDead;
    public void Burn()
    {
        if (isDead) return;
        if (!sound.isPlaying) sound.Play();
    }
    public void BurnDone()
    {
        if (isDead) return;
        part--;
        if (part <= 0) Dead();
    }

    public void Dead()
    {
        if (isDead) return;
        isDead = true;
        sound.Stop();
        GameController.Ins.EndPhase();
    }
}
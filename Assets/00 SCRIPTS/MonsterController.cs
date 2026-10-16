using System.Collections.Generic;
using UnityEngine;

public class MonsterController : MonoBehaviour
{
    [SerializeField] private List<BodyPart> parts;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private GameObject hint;
    private bool isDead;
    public void AddPart(BodyPart part)
    {
        parts.Add(part);
    }
    public void BreakPart(BodyPart part)
    {
        if (isDead) return;
        parts.Remove(part);
        if (parts.Count <= 14)
        {
            isDead = true;
            hint.SetActive(false);
            parts.ForEach(p => p.StopBalance());
            AudioController.Ins.PlaySFX(deadSFX);
            GameController.Ins.RemoveMonster();
        }
    }
}

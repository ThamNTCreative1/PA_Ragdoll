using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] private List<SpriteRenderer> render;
    [SerializeField] private List<Sprite> zombieSprite;
    [SerializeField] private GameObject effect;
    
    public void Zombie()
    {
        for (int i = 0; i < render.Count; i++)
        {
            render[i].sprite = zombieSprite[i];
        }
        effect.SetActive(true);
    }
}
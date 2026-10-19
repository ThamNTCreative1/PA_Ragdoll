using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ChangeImage : MonoBehaviour
{
    [SerializeField] private List<Sprite> sprites;
    [SerializeField] private Image image;
    [SerializeField] private int currentIndex;
    public void Change()
    {
        if (currentIndex >= sprites.Count - 1) return;
        currentIndex++;
        image.rectTransform.sizeDelta = sprites[currentIndex].bounds.size * 100;
        image.sprite = sprites[currentIndex];
    }
}

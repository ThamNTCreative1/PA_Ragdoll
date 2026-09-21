using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ActiveOnClick : MonoBehaviour
{
    [SerializeField] private Button button;
    [SerializeField] private AudioClip clickSound;
    [SerializeField] private List<GameObject> active;
    private void Start()
    {
        button.onClick.AddListener(() =>
        {
            AudioController.Ins.PlaySFX(clickSound);
            active.ForEach(o => o.SetActive(true));
            transform.parent.gameObject.SetActive(false);
        });
    }
}

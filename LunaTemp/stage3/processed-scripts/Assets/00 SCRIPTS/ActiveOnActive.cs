using System.Collections.Generic;
using UnityEngine;

public class ActiveOnActive : MonoBehaviour
{
    [SerializeField] private List<GameObject> active;
    private void Start()
    {
        active.ForEach(o => o.SetActive(true));
    }
}

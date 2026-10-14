using System;
using UnityEngine;

public class BodyPart : MonoBehaviour, IDamageable
{
    public void TakeDamage(Vector3 position, int amount)
    {
        OnTakeDamage?.Invoke(position, amount);
    }
    public Action<Vector3, int> OnTakeDamage;
}
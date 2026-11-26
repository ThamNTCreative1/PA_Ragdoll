using UnityEngine;

// Trigger child of the potion (layer ItemTrigger, touches only the Player layer): the player drinks it and turns zombie.
public class Potion : MonoBehaviour
{
    [SerializeField] private GameController game;

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (game) game.OnPotionTouched(other);
    }
}

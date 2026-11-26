using UnityEngine;

// Root component of the FX sprite prefabs (Blood, Splash, Smoke): Luna can only Instantiate script components.
public class FxSprite : MonoBehaviour
{
    [SerializeField] private SpriteRenderer sr;
    public SpriteRenderer Sr { get { return sr; } }
}

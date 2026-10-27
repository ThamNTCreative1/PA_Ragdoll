using UnityEngine;

public class MelonHitTarget : MonoBehaviour
{
    public void Initialize()
    {
        // Player/Player collisions are disabled in the Physics 2D layer matrix.
        int characterLayer = LayerMask.NameToLayer("Player");
        foreach (Transform part in GetComponentsInChildren<Transform>(true))
            part.gameObject.layer = characterLayer;
        if (!GetComponent<SandboxCharacterBalance>()) gameObject.AddComponent<SandboxCharacterBalance>();
    }
}

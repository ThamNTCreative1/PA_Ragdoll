using UnityEngine;

// Drives the SSP/AcidWave shader: copies the renderer's material once (so the asset is not changed at runtime) and
// feeds it the time every frame.
[RequireComponent(typeof(Renderer))]
public class AcidWave : MonoBehaviour
{
    [SerializeField] private Renderer rend;
    private Material mat;

    private void Awake()
    {
        if (rend && rend.sharedMaterial)
        {
            mat = new Material(rend.sharedMaterial);
            rend.sharedMaterial = mat;
        }
    }

    private void Update()
    {
        if (mat) mat.SetFloat("_T", Time.time);
    }
}

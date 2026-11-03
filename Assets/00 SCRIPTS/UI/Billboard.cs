using UnityEngine;

namespace OBP.FreezeBrainrot
{
    // Keeps a world-space label facing the main camera.
    public sealed class Billboard : MonoBehaviour
    {
        private Transform cam;

        private void LateUpdate()
        {
            if (cam == null)
            {
                Camera c = Camera.main;
                if (c == null) return;
                cam = c.transform;
            }
            transform.rotation = Quaternion.LookRotation(transform.position - cam.position, cam.up);
        }
    }
}

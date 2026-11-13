using UnityEngine;

// The camera has exactly two set-ups: "land" when the screen is wide (width > landAspect * height), "por" otherwise.
// Each one is a fixed position and orthographic size, set in the Inspector. Re-applied when the screen size changes.
public class CameraFit : MonoBehaviour
{
    [System.Serializable]
    public class View
    {
        public Vector3 position;
        public float size;
    }

    [SerializeField] private Camera cam;
    [Tooltip("Portrait (and any screen not wider than landAspect).")]
    public View por = new View { position = new Vector3(0f, 6.1f, -10f), size = 7.1f };
    [Tooltip("Landscape: screen width > landAspect * height.")]
    public View land = new View { position = new Vector3(0f, 4.5f, -10f), size = 5.5f };
    public float landAspect = 1.5f;

    private int lastW, lastH;

    private void Awake()
    {
        Apply();
    }

    private void LateUpdate()
    {
        if (Screen.width != lastW || Screen.height != lastH) Apply();
    }

    private void Apply()
    {
        if (!cam) return;
        lastW = Screen.width; lastH = Screen.height;
        View v = lastW > landAspect * lastH ? land : por;
        cam.orthographicSize = v.size;
        transform.position = v.position;
    }
}

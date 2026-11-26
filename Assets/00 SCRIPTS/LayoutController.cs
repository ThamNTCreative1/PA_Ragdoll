using UnityEngine;

// Camera like SRP_V07 (its LayoutController is NOT in the scene; only CameraFollow), scaled to this map (x0.675, floor y 0):
// - orthographic size 9 in every orientation (-> 6.08), start at (0, 2) (-> (0, 4.05));
// - once the player is a zombie it follows the zombie's head freely on x and y
//   (SRP CameraFollow on head_mid: offset (0, 2) -> (0, 1.35), Lerp speed 5).
public class LayoutController : MonoBehaviour
{
    [SerializeField] private Camera cam;
    [SerializeField] private GameController game;

    [SerializeField] private float size = 6.08f;
    [SerializeField] private Vector2 startPosition = new Vector2(0f, 4.05f);
    [SerializeField] private Vector2 followOffset = new Vector2(0f, 1.35f);
    [SerializeField] private float followSpeed = 5f;

    private void Start()
    {
        if (!cam) return;
        cam.orthographicSize = size;
        cam.transform.position = new Vector3(startPosition.x, startPosition.y, cam.transform.position.z);
    }

    private void LateUpdate()
    {
        if (!cam || !game) return;
        Transform t = game.CameraTarget;
        if (!t) return;
        Vector3 p = cam.transform.position;
        Vector3 target = new Vector3(t.position.x + followOffset.x, t.position.y + followOffset.y, p.z);
        cam.transform.position = Vector3.Lerp(p, target, followSpeed * Time.deltaTime);
    }
}

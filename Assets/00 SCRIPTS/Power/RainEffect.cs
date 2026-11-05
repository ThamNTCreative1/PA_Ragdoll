using UnityEngine;

// Mưa bằng pool sprite (không dùng ParticleSystem để nhẹ và chắc chắn chạy trên Luna).
public class RainEffect : MonoBehaviour
{
    [SerializeField] private Sprite dropSprite;
    [SerializeField] private int maxDrops = 80;
    [SerializeField] private Vector2 velocity = new Vector2(-3f, -16f);
    [SerializeField] private Vector2 dropSize = new Vector2(0.025f, 0.45f);
    [SerializeField] private Color color = new Color(0.75f, 0.85f, 1f, 0.55f);
    [SerializeField] private float groundY = -4.5f;
    [SerializeField] private float fadeIn = 0.8f;
    [SerializeField] private float fadeOut = 1.2f;
    [SerializeField] private int sortingOrder = 50;

    private SpriteRenderer[] drops;
    private float intensity;
    private float target;

    public void Begin() { Init(); target = 1; enabled = true; }
    public void Stop() { target = 0; }

    private void Init()
    {
        if (drops != null) return;
        drops = new SpriteRenderer[maxDrops];
        Vector2 size = dropSprite.bounds.size;
        float angle = Mathf.Atan2(velocity.y, velocity.x) * Mathf.Rad2Deg + 90f;
        for (int i = 0; i < maxDrops; i++)
        {
            SpriteRenderer sr = PowerBase.CreateSprite("Drop", dropSprite, transform, sortingOrder);
            sr.color = color;
            sr.transform.localScale = new Vector3(dropSize.x / size.x, dropSize.y / size.y, 1);
            sr.transform.rotation = Quaternion.Euler(0, 0, angle);
            sr.gameObject.SetActive(false);
            drops[i] = sr;
        }
    }

    private void Update()
    {
        if (drops == null) return;
        float speed = target > intensity ? 1f / fadeIn : 1f / fadeOut;
        intensity = Mathf.MoveTowards(intensity, target, speed * Time.deltaTime);
        int wanted = Mathf.RoundToInt(maxDrops * intensity);

        Rect cam = PowerBase.CameraRect();
        float bottom = Mathf.Max(groundY, cam.yMin);
        bool any = false;
        for (int i = 0; i < drops.Length; i++)
        {
            Transform t = drops[i].transform;
            bool alive = drops[i].gameObject.activeSelf;
            if (!alive)
            {
                if (i >= wanted) continue;
                Respawn(t, cam, true);
                drops[i].gameObject.SetActive(true);
            }
            any = true;
            t.position += (Vector3)(velocity * Time.deltaTime);
            if (t.position.y < bottom)
            {
                if (i < wanted) Respawn(t, cam, false);
                else drops[i].gameObject.SetActive(false);
            }
        }
        if (!any && target == 0) enabled = false;
    }

    private void Respawn(Transform t, Rect cam, bool spread)
    {
        // Lệch sang phải để bù gió thổi sang trái.
        float drift = -velocity.x / -velocity.y * cam.height;
        float x = Random.Range(cam.xMin, cam.xMax + drift);
        float y = spread ? Random.Range(cam.yMax, cam.yMax + cam.height * 0.5f) : cam.yMax + Random.Range(0f, 1f);
        t.position = new Vector3(x, y, 0);
    }
}

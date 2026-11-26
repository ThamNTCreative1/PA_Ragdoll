using UnityEngine;

// Winter map: snow flakes (scene sprites made by SSPRoomBuilder) falling with a little sway, wrapping inside `area`.
public class Snowfall : MonoBehaviour
{
    [SerializeField] private Transform[] flakes;
    [SerializeField] private Rect area = new Rect(-12f, -0.5f, 24f, 13f);
    [SerializeField] private Vector2 fallSpeed = new Vector2(0.6f, 1.6f);
    [SerializeField] private float sway = 0.5f;

    private float[] speed, phase, freq;

    private void Start()
    {
        int n = flakes.Length;
        speed = new float[n]; phase = new float[n]; freq = new float[n];
        for (int i = 0; i < n; i++)
        {
            speed[i] = Random.Range(fallSpeed.x, fallSpeed.y);
            phase[i] = Random.Range(0f, 6.283f);
            freq[i] = Random.Range(0.8f, 2f);
        }
    }

    private void Update()
    {
        float dt = Time.deltaTime, t = Time.time;
        for (int i = 0; i < flakes.Length; i++)
        {
            Transform f = flakes[i];
            if (!f) continue;
            Vector3 p = f.localPosition;
            p.y -= speed[i] * dt;
            p.x += Mathf.Sin(t * freq[i] + phase[i]) * sway * dt;
            if (p.y < area.yMin) { p.y = area.yMax; p.x = Random.Range(area.xMin, area.xMax); }
            if (p.x < area.xMin) p.x += area.width;
            else if (p.x > area.xMax) p.x -= area.width;
            f.localPosition = p;
        }
    }
}

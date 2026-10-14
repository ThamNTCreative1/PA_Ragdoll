using System.Collections;
using UnityEngine;

public class TraiController : MonoBehaviour
{
    [SerializeField] private TrailRenderer trail;
    [SerializeField] private float baseWidth = 1f;

    private void OnEnable()
    {
        StartCoroutine(WaitForStart());
    }
    private IEnumerator WaitForStart()
    {
        trail.emitting = false;
        trail.Clear();

        float scale = transform.lossyScale.x;
        trail.widthMultiplier = baseWidth * scale;

        yield return new WaitForSeconds(0.01f);

        trail.emitting = true;
    }
}

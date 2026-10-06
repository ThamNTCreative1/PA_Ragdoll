using System.Collections;
using UnityEngine;

public class LavaPartDisappear : MonoBehaviour
{
    [Tooltip("Bone dieu khien bo phan se bien mat.")]
    [SerializeField] private Transform boneToHide;
    [SerializeField] private GameObject vfx;
    [SerializeField, Min(0f)] private float disappearDelay;
    [SerializeField, Min(0f)] private float shrinkDuration = 0.15f;
    [SerializeField] private Collider partCollider;
    [SerializeField] private bool disableCollider = true;
    [SerializeField] private LavaController controller;

    private bool disappearStarted;
    private bool disappearFinished;

    public bool DisappearStarted => disappearStarted;
    public bool DisappearFinished => disappearFinished;

    private void Reset()
    {
        if (!partCollider) partCollider = GetComponent<Collider>();
    }

    private void OnTriggerEnter(Collider other)
    {
        TryDisappear(other.gameObject);
    }

    private void OnCollisionEnter(Collision collision)
    {
        TryDisappear(collision.gameObject);
    }

    private void TryDisappear(GameObject other)
    {
        if (disappearStarted || !other.CompareTag("Lava") || boneToHide == null)
            return;
        vfx.SetActive(true);
        controller.Burn();
        disappearStarted = true;
        StartCoroutine(DisappearRoutine());
    }

    private IEnumerator DisappearRoutine()
    {
        if (disappearDelay > 0f)
            yield return new WaitForSeconds(disappearDelay);

        // Cho cac callback va cham trong cung frame khoi dong child truoc.
        yield return null;

        LavaPartDisappear[] childParts = GetComponentsInChildren<LavaPartDisappear>(true);
        bool waitingForChild;

        do
        {
            waitingForChild = false;

            foreach (LavaPartDisappear child in childParts)
            {
                if (child != this && child.DisappearStarted && !child.DisappearFinished)
                {
                    waitingForChild = true;
                    break;
                }
            }

            if (waitingForChild)
                yield return null;
        }
        while (waitingForChild);

        Vector3 startScale = boneToHide.localScale;
        float elapsed = 0f;

        while (elapsed < shrinkDuration)
        {
            elapsed += Time.deltaTime;
            float progress = shrinkDuration <= 0f ? 1f : elapsed / shrinkDuration;
            boneToHide.localScale = Vector3.Lerp(startScale, Vector3.zero, progress);
            yield return null;
        }

        boneToHide.localScale = Vector3.zero;
        disappearFinished = true;

        if (disableCollider && partCollider != null)
            partCollider.enabled = false;
        vfx.SetActive(false);
        controller.BurnDone();
    }
}

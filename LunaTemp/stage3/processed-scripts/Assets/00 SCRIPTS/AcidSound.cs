using UnityEngine;

public class AcidSound : MonoBehaviour
{
    [Header("Audio")]
    [SerializeField]
    private AudioSource audioSource;

    [SerializeField]
    private AudioClip sizzleClip;

    [SerializeField]
    [Range(0f, 1f)]
    private float volume = 0.7f;

    private int dissolvingParts = 0;


    private void Awake()
    {
        if (audioSource == null)
        {
            audioSource =
                GetComponent<AudioSource>();

            if (audioSource == null)
            {
                audioSource =
                    gameObject.AddComponent<AudioSource>();
            }
        }

        audioSource.clip =
            sizzleClip;

        audioSource.loop =
            true;

        audioSource.playOnAwake =
            false;

        audioSource.volume =
            volume;
    }


    public void StartDissolving()
    {
        dissolvingParts++;

        if (
            dissolvingParts == 1 &&
            sizzleClip != null &&
            !audioSource.isPlaying
        )
        {
            audioSource.Play();
        }
    }


    public void StopDissolving()
    {
        dissolvingParts =
            Mathf.Max(
                0,
                dissolvingParts - 1
            );

        if (
            dissolvingParts == 0 &&
            audioSource.isPlaying
        )
        {
            audioSource.Stop();
        }
    }
}

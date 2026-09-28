using System.Collections;
using UnityEngine;

public class SmokeController : MonoBehaviour
{
    [SerializeField] private float delay;
    [SerializeField] private AudioClip startSound;
    [SerializeField] private AudioClip actionSound;
    [SerializeField] private AudioClip boomSound;
    private void OnEnable()
    {
        AudioController.Ins.PlaySFX(startSound);
        StartCoroutine(CountDown());
    }
    private IEnumerator CountDown()
    {
        yield return new WaitForSeconds(delay);
        AudioController.Ins.PlaySFX(actionSound);
        AudioController.Ins.PlaySFX(boomSound);
    }


}

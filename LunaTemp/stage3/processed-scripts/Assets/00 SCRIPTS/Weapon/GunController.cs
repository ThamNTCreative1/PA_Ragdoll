using System.Collections;
using UnityEngine;

public class GunController : MonoBehaviour
{
    [Header("Gun")]
    [SerializeField] private Transform aim;
    [SerializeField] private GameObject bulletPrefab;

    [Header("Effect")]
    [SerializeField] private ParticleSystem VFX;
    [SerializeField] private AudioSource SFX;

    [Header("Cooldown")]
    [SerializeField] private float timeCD;
    [SerializeField] private bool onCD;

    public void Action()
    {
        if (onCD) return;
        Spawn();
    }
    private void Spawn()
    {
        VFX.Play();
        SFX.Play();
        PoolController.Ins.SpawnObject(bulletPrefab, aim.transform.position, aim.rotation);
        StartCoroutine(WaitForCD());
    }

    private IEnumerator WaitForCD()
    {
        onCD = true;
        yield return new WaitForSeconds(timeCD);
        onCD = false;
    }
    private void OnDisable()
    {
        StopAllCoroutines();
    }
}
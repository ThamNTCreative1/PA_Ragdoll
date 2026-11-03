using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundAsset("BGM")] public AudioClip BGM;
    [LunaPlaygroundField("Camera Offset (Landscape)")] public Vector3 CameraOffsetLandscape = new Vector3(1f, 1.1f, -8f);
    [LunaPlaygroundField("Camera Offset (Portrait)")] public Vector3 CameraOffsetPortrait = new Vector3(0.8f, 1.8f, -11f);
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private List<Button> CTA;
    [SerializeField] private OBP.FreezeBrainrot.CameraController cameraController;
    private void Awake()
    {
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        if (cameraController != null)
        {
            cameraController.landscapeOffset = CameraOffsetLandscape;
            cameraController.portraitOffset = CameraOffsetPortrait;
        }
    }
    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    private void Start()
    {
        musicSource.clip = BGM;
        musicSource.Play();
        StartCoroutine(EndGame());
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
    }

}

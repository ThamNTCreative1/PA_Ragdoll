using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [Header("Start")]
    [SerializeField] private Button startScece;
    [SerializeField] private GameObject button;
    [SerializeField] private AudioClip clickSound;

    [Header("Gameplay")]
    [SerializeField] private Button dragButton;
    [SerializeField] private GameObject dragButtonRound;
    [SerializeField] private GameObject drag;

    [SerializeField] private Button dropButton;
    [SerializeField] private GameObject dropButtonRound;
    [SerializeField] private GameObject drop;

    [Header("Phase")]
    [SerializeField] private GameObject tut2;
    [SerializeField] private GameObject tut3;
    [SerializeField] private bool changePhase;

    [Header("Progress")]
    [SerializeField] private int numMonster;
    [SerializeField] private GameObject failScene;
    [SerializeField] private GameObject winScene;
    [SerializeField] private bool end;

    private Button currentButton;


    public static GameController Ins;
    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }
    private void Awake()
    {
        CreateIns();

        startScece.onClick.AddListener(() =>
        {
            AudioController.Ins.PlaySFX(clickSound);
            button.SetActive(true);
            startScece.gameObject.SetActive(false);
        });

        dragButton.onClick.AddListener(() =>
        {
            if (currentButton == dragButton) return;
            currentButton = dragButton;

            AudioController.Ins.PlaySFX(clickSound);

            dropButtonRound.SetActive(false);
            drop.SetActive(false);

            dragButtonRound.SetActive(true);
            drag.SetActive(true);
        });

        dropButton.onClick.AddListener(() =>
        {
            if (currentButton == dropButton) return;
            currentButton = dropButton;

            AudioController.Ins.PlaySFX(clickSound);

            dragButtonRound.SetActive(false);
            drag.SetActive(false);

            dropButtonRound.SetActive(true);
            drop.SetActive(true);
        });
    }
    private void NextPhase()
    {
        if (changePhase ||tut2) return;
        changePhase = true;
        dropButton.gameObject.SetActive(true);
        tut3.SetActive(true);
    }
    public void DestroyMonster()
    {
        NextPhase();
        numMonster--;
        if (numMonster <= 0) End();
    }
    public void End()
    {
        if (end) return;
        end = true;
        StartCoroutine(EndGame());
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(1.5f);
        startScece.gameObject.SetActive(false);
        if (numMonster > 0) Fail();
        else Win();
    }
    private void Fail()
    {
        failScene.SetActive(true);
    }
    private void Win()
    {
        winScene.SetActive(true);
    }
}

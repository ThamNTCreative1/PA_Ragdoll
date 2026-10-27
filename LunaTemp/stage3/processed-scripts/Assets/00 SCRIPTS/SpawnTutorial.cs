using UnityEngine;
using UnityEngine.UI;

// References are authored in the scene; no UI is created at runtime.
public class SpawnTutorial : MonoBehaviour
{
    [SerializeField] private GameObject content;
    [SerializeField] private RectTransform pointer;
    [SerializeField] private Text instruction;
    [SerializeField] private Button[] targets;
    [SerializeField] private Button[] weaponTargets;
    [SerializeField] private string[] characterNames;
    private readonly System.Collections.Generic.HashSet<int> spawned = new System.Collections.Generic.HashSet<int>();
    private readonly System.Collections.Generic.HashSet<int> weaponsClicked = new System.Collections.Generic.HashSet<int>();
    private int current = -1;
    private bool available;
    private bool weaponsAvailable;
    private GameObject fightButton;
    private RectTransform currentTarget;

    public void NotifyWeaponClicked(int index)
    {
        weaponsClicked.Add(index);
        Refresh();
    }

    public void NotifySpawned(int index)
    {
        spawned.Add(index);
        Refresh();
    }

    public void SetState(bool spawnAvailable, bool weaponAvailable, GameObject fight)
    {
        available = spawnAvailable;
        weaponsAvailable = weaponAvailable;
        fightButton = fight;
        Refresh();
    }

    private void Refresh()
    {
        current = -1;
        currentTarget = null;
        var completed = weaponsAvailable ? weaponsClicked : spawned;
        Button[] activeTargets = weaponsAvailable ? weaponTargets : targets;
        if (available || (weaponsAvailable && weaponsClicked.Count == 0))
            for (int i = 0; i < activeTargets.Length; i++)
                if (!completed.Contains(i) && activeTargets[i] && activeTargets[i].interactable && activeTargets[i].gameObject.activeInHierarchy)
                {
                    current = i;
                    break;
                }
        if (current >= 0)
        {
            currentTarget = (RectTransform)activeTargets[current].transform;
            string character = current < characterNames.Length ? characterNames[current] : "a character";
            instruction.text = weaponsAvailable
                ? "Tap to equip weapon " + (current + 1) + "!"
                : "Tap to spawn " + character + "!\nHold and drag to place.";
        }
        else if (weaponsAvailable && weaponsClicked.Count >= 1 && fightButton  && fightButton.activeInHierarchy)
        {
            currentTarget = (RectTransform)fightButton.transform;
            instruction.text = "Tap FIGHT to play!";
        }
        content.SetActive(currentTarget != null);
        pointer.gameObject.SetActive(current >= 0);
        if (currentTarget && current >= 0) PositionPointer();
    }

    private void LateUpdate()
    {
        if (currentTarget && current >= 0) PositionPointer();
    }

    private void PositionPointer()
    {
        RectTransform target = currentTarget;
        float bob = Mathf.Sin(Time.unscaledTime * 5f) * 8f;
        pointer.position = target.TransformPoint(new Vector3(target.rect.center.x, target.rect.yMin - 40f + bob, 0f));
    }
}

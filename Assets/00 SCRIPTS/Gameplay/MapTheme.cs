using UnityEngine;

// Normal / winter map (LunaController "Custom Winter"). Both looks are real scene objects made by SSPRoomBuilder
// (Tools/SSP/Add Winter Theme); this only switches which one is shown. Colliders are shared and never change.
public class MapTheme : MonoBehaviour
{
    [SerializeField] private GameObject[] normalObjects;
    [SerializeField] private GameObject[] winterObjects;
    [Tooltip("Renderers on physics props (pumpkins) that are hidden in winter; their winter look is a child in winterObjects.")]
    [SerializeField] private SpriteRenderer[] normalRenderers;
    [SerializeField] private Camera cam;
    [SerializeField] private Color normalBackground = new Color32(0x3a, 0x12, 0x4a, 255);
    [SerializeField] private Color winterBackground = new Color32(0x9c, 0xc4, 0xe4, 255);

    public void SetWinter(bool winter)
    {
        for (int i = 0; i < normalObjects.Length; i++) if (normalObjects[i]) normalObjects[i].SetActive(!winter);
        for (int i = 0; i < winterObjects.Length; i++) if (winterObjects[i]) winterObjects[i].SetActive(winter);
        for (int i = 0; i < normalRenderers.Length; i++) if (normalRenderers[i]) normalRenderers[i].enabled = !winter;
        if (cam) cam.backgroundColor = winter ? winterBackground : normalBackground;
    }
}

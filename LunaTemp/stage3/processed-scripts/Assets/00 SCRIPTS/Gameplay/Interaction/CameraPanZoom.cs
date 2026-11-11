using UnityEngine;

namespace Game.Gameplay
{
    // Camera pan (screen-space drag delta) and zoom (scroll toward cursor). Pure input layer: all movement goes
    // through CameraController, which owns bounds and zoom clamping.
    public class CameraPanZoom : MonoBehaviour
    {
        [SerializeField] private CameraController controller;
        [Tooltip("Delete mode disables grabbing, which frees a drag over a body to pan")]
        [SerializeField] private ItemSpawnTool spawnTool;
        [Tooltip("A drag that starts on a grabbable body belongs to this tool, not the pan")]
        [SerializeField] private DragTool dragTool;

        private bool _panning;
        private bool _panWithMiddle;
        private Vector2 _lastScreen;
        private bool _hasLast;


        private void Update()
        {
            // Mouse API only (a finger arrives as the simulated mouse). Playable: zoom is locked, so a
            // drag only pans; scroll zoom is a desktop extra for an unlocked camera.
            if (controller == null || !controller.IsReady || !PlayInput.HasPointer) return;
            if (!controller.ZoomLocked) HandleZoom();
            HandlePan();
        }

        // Scroll-wheel zoom, desktop only.
        private void HandleZoom()
        {
            float scroll = PlayInput.MouseScroll;
            if (Mathf.Approximately(scroll, 0f) || PointerProbe.IsOverUI()) return;

            // Hand the controller the world point under the cursor and let it keep that point
            // pinned — it anchors analytically, which survives the zoom easing over several frames.
            controller.ZoomBySteps(scroll > 0f ? 1 : -1, PointerProbe.CursorWorld(controller.Camera));
        }

        private void HandlePan()
        {

            if (!_panning)
            {
                bool middleStart = PlayInput.MiddlePressedThisFrame && !PointerProbe.IsOverUI();
                bool leftStart = PlayInput.PressedThisFrame && CanLeftPanStart();
                if (!middleStart && !leftStart) return;

                _panning = true;
                _panWithMiddle = middleStart;
                _hasLast = false; // the first frame only records where the finger is
                controller.BeginPan();
                return;
            }

            bool stillHeld = _panWithMiddle ? PlayInput.MiddleHeld : PlayInput.IsPressed;
            if (!stillHeld)
            {
                _panning = false;
                controller.EndPan();
                return;
            }

            // The finger's SCREEN movement, turned into world units at the current zoom. Measuring in
            // screen space keeps the camera's own motion (edge rubber-band, shake) out of the input, which
            // re-pinning a grabbed world point fed back in as jitter.
            Vector2 now = PlayInput.Position;
            if (_hasLast)
            {
                Vector2 delta = now - _lastScreen;
                float unitsPerPixel = 2f * controller.Camera.orthographicSize / Mathf.Max(1, Screen.height);
                if (delta.sqrMagnitude > 0f) controller.PanBy(-delta * unitsPerPixel);
            }
            _lastScreen = now;
            _hasLast = true;
        }

        // Left-drag pan is the lowest-priority claim on a click: UI and a grabbable body win over
        // it. An armed spawner does NOT — it acts on release, so the drag is free to be a pan.
        private bool CanLeftPanStart()
        {
            if (PointerProbe.IsOverUI()) return false;
            if (LinkTool.IsLinkModeArmed) return false; // link mode picks ends on press
            // Delete mode makes nothing grabbable, so a drag over a body is a pan too.
            if (spawnTool != null && spawnTool.IsDeleteMode) return true;
            // Dragging switched off (DragTool disabled): nothing is grabbable, so every drag pans.
            if (dragTool == null || !dragTool.isActiveAndEnabled) return true;
            return PointerProbe.FindDraggableAt(PointerProbe.CursorWorld(controller.Camera)) == null;
        }
    }
}

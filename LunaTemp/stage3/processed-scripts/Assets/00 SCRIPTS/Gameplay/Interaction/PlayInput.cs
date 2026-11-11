using UnityEngine;

namespace Game.Gameplay
{
    // Legacy-Input replacement for the Input System calls of the source game, which Luna can't run.
    // Mouse API only — a finger on the screen arrives as the simulated mouse; no touch API is used.
    public static class PlayInput
    {
        public static bool HasPointer => true;

        public static bool PressedThisFrame => Input.GetMouseButtonDown(0);
        public static bool IsPressed => Input.GetMouseButton(0);

        public static Vector2 Position => Input.mousePosition;

        public static float MouseScroll => Input.mouseScrollDelta.y;
        public static bool MiddlePressedThisFrame => Input.GetMouseButtonDown(2);
        public static bool MiddleHeld => Input.GetMouseButton(2);
        public static bool RightHeld => Input.GetMouseButton(1);
    }
}

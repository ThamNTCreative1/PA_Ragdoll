using UnityEngine;
using UnityEngine.EventSystems;

namespace Game.Gameplay
{
    // Shared cursor queries keeping the click-priority rule (UI > grab > spawn > pan) consistent.
    public static class PointerProbe
    {
        // Screen pixels past which a press reads as a drag; shared so tap and pull stay exclusive.
        public const float DragThresholdPixels = 12f;

        // Pointer, not Mouse: Mouse.current is null on touch-only devices, so use the device-agnostic base.
        public static bool MovedPastDragThreshold(Vector2 pressScreenPos)
            => PlayInput.HasPointer
               && (PlayInput.Position - pressScreenPos).sqrMagnitude
               > DragThresholdPixels * DragThresholdPixels;

        public static bool IsOverUI()
            => EventSystem.current != null && EventSystem.current.IsPointerOverGameObject();

        public static Vector2 CursorWorld(Camera camera)
            => ScreenToWorld(camera, PlayInput.HasPointer ? PlayInput.Position : Vector2.zero);

        // For a screen point that isn't the primary pointer — e.g. a pinch gesture's second touch.
        public static Vector2 ScreenToWorld(Camera camera, [Bridge.Ref] Vector2 screenPos)
        {
            float distance = -camera.transform.position.z;
            return camera.ScreenToWorldPoint(new Vector3(screenPos.x, screenPos.y, distance));
        }

        // Topmost grabbable body under a world point: any simulated non-static Rigidbody2D.
        public static Rigidbody2D FindDraggableAt([Bridge.Ref] Vector2 world)
        {
            var hits = Physics2D.OverlapPointAll(world);
            for (int i = 0; i < hits.Length; i++)
            {
                var body = hits[i].attachedRigidbody;
                if (body != null && body.simulated && body.bodyType != RigidbodyType2D.Static)
                    return body;
            }
            return null;
        }
    }
}

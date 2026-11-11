using UnityEngine;

namespace Game.Data
{
    // Designer tunables for cursor drag and camera zoom, shared by the interaction components.
    [CreateAssetMenu(menuName = "Data/Interaction Config", fileName = "InteractionConfig")]
    public class InteractionConfigSO : ScriptableObject
    {
        [Header("Drag")]
        [Tooltip("Grab strength cap per unit of mass, so light and heavy body parts aren't pulled unevenly hard.")]
        public float dragMaxForce = 300f;

        [Header("Zoom")]
        [Tooltip("Closest zoom (smallest orthographic size).")]
        public float zoomMin = 2f;
        [Tooltip("Farthest zoom (largest orthographic size).")]
        public float zoomMax = 12f;
        [Tooltip("Orthographic size divides by this per scroll notch when zooming in.")]
        public float zoomStepFactor = 1.1f;
        [Tooltip("Seconds for zoom to ease to its target. 0 = instant, snappy; higher = softer.")]
        public float zoomSmoothTime = 0.12f;

        [Header("Camera Edge Feel")]
        [Tooltip("How far past the map edge the view can be dragged, as a fraction of the visible area.")]
        [Range(0f, 1.5f)]
        public float panSlack = 0.75f;
        [Tooltip("Seconds to spring back inside the map after an over-drag is released.")]
        public float settleTime = 0.18f;
        [Tooltip("Zoom on map arrival, as a fraction from fully-out (0) toward closest-in (1).")]
        [Range(0f, 1f)]
        public float focusZoomIn = 0.55f;
    }
}

using UnityEngine;
using UnityEngine.UI;

namespace Game.UI
{
    // A raycast target that draws nothing. An alpha-0 Image still builds and submits a quad, and its
    // texture ends the canvas batch either side of it — an invisible hit area cost real draw calls.
    public class NonDrawingGraphic : Graphic
    {
        public override void SetMaterialDirty() { }
        public override void SetVerticesDirty() { }

        protected override void OnPopulateMesh(VertexHelper vh) => vh.Clear();
    }
}

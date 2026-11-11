using UnityEngine;

namespace Game.Gameplay
{
    // Renders a plain generated square so the rig is visible with no art assigned yet.
    [ExecuteAlways]
    [RequireComponent(typeof(SpriteRenderer))]
    public class PlaceholderSprite : MonoBehaviour
    {
        private static Sprite _shared;

        private void Awake()
        {
            var renderer = GetComponent<SpriteRenderer>();
            if (renderer.sprite == null) renderer.sprite = GetSprite();
        }

        public static Sprite GetSprite()
        {
            if (_shared == null)
            {
                var texture = new Texture2D(4, 4, TextureFormat.RGBA32, false) { filterMode = FilterMode.Point };
                var pixels = new Color32[16];
                for (int i = 0; i < pixels.Length; i++) pixels[i] = Color.white;
                texture.SetPixels32(pixels);
                texture.Apply();

                _shared = Sprite.Create(texture, new Rect(0, 0, 4, 4), new Vector2(0.5f, 0.5f), 4f);
            }
            return _shared;
        }
    }
}

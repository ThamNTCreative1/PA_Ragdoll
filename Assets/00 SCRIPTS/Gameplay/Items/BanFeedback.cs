using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Shows a single temporary ban icon overlay.
    public static class BanFeedback
    {
        // Well above tiles (block order -1) so it is never hidden behind what it is complaining about.
        private const int SortingOrder = 3000;

        private static GameObject _current;

        public static void ShowAt(Vector2 world)
        {
            if (!ServiceLocator.TryGet<GameConfigSO>(out var config) || config.banIcon == null) return;

            // Use UI sound so repeated taps still respond.
            if (config.sfx != null) Sfx.PlayUI(config.sfx.error);

            if (_current != null) Object.Destroy(_current);

            var go = new GameObject("BanFeedback");
            go.transform.position = world;

            var renderer = go.AddComponent<SpriteRenderer>();
            renderer.sprite = config.banIcon;
            renderer.sortingOrder = SortingOrder;

            // Fit the icon to one cell, whatever resolution the art happens to be.
            var native = config.banIcon.bounds.size;
            if (native.x > 0.0001f && native.y > 0.0001f)
                go.transform.localScale = new Vector3(
                    TileGrid.CellSize / native.x, TileGrid.CellSize / native.y, 1f);

            FadeOutAndDespawn.Begin(go, config.banHoldSeconds, config.banFadeSeconds);
            _current = go;
        }
    }
}

using UnityEngine;

namespace MelonSandbox
{
    public sealed class MelonLimb : MonoBehaviour
    {
        public MelonRagdoll owner;
        public string partName;
        public Rigidbody2D body;
        public SpriteRenderer skin, inner;
        public Vector2 dimensions;
        Color originalSkinColor;
        Material originalMaterial, effectMaterial;
        static readonly string[] HoleNames = { "_Hole0", "_Hole1", "_Hole2", "_Hole3", "_Hole4", "_Hole5", "_Hole6", "_Hole7" };
        int nextHole;
        bool appearanceCaptured;
        bool damageUnavailable;
        void CaptureAppearance()
        {
            if (appearanceCaptured || !skin) return;
            originalSkinColor = skin.color;
            originalMaterial = skin.sharedMaterial;
            appearanceCaptured = true;
        }
        bool BeginDamage()
        {
            if (!skin || !skin.sprite || damageUnavailable) return false;
            CaptureAppearance();
            if (!effectMaterial)
            {
                var template = owner && owner.game && owner.game.assets ? owner.game.assets.damageMaterial : null;
                // Luna's Shader.name wrapper can be null even when the shader is loaded.
                // Validate the material's required properties instead of its display name.
                if (!template || !template.HasProperty("_DamageRowX") || !template.HasProperty("_Hole0")
                    || !template.HasProperty("_Dissolve"))
                {
                    damageUnavailable = true;
                    return false;
                }
                effectMaterial = new Material(template);
            }
            // Custom sprite shaders need an explicit texture binding in the Luna renderer.
            effectMaterial.mainTexture = skin.sprite.texture;
            skin.sharedMaterial = effectMaterial;
            UpdateDamageCoordinates();
            return true;
        }
        void LateUpdate()
        {
            if (effectMaterial && skin && skin.sharedMaterial == effectMaterial) UpdateDamageCoordinates();
        }
        void UpdateDamageCoordinates()
        {
            // Damage uses sprite-local coordinates, independently of atlas texture UVs.
            var bounds = skin.sprite.bounds;
            var matrix = skin.transform.worldToLocalMatrix;
            float width = Mathf.Max(.00001f, bounds.size.x), height = Mathf.Max(.00001f, bounds.size.y);
            var x = matrix.GetRow(0) / width; x.w -= bounds.min.x / width;
            var y = matrix.GetRow(1) / height; y.w -= bounds.min.y / height;
            if (skin.flipX) x = new Vector4(-x.x, -x.y, -x.z, 1 - x.w);
            if (skin.flipY) y = new Vector4(-y.x, -y.y, -y.z, 1 - y.w);
            effectMaterial.SetVector("_DamageRowX", x);
            effectMaterial.SetVector("_DamageRowY", y);
        }
        public void Cut(Vector2 worldPoint, float size)
        {
            if (!skin) return;
            var bounds = skin.bounds;
            var nearest = new Vector2(Mathf.Clamp(worldPoint.x, bounds.min.x, bounds.max.x),
                Mathf.Clamp(worldPoint.y, bounds.min.y, bounds.max.y));
            if (size <= 0 || (nearest - worldPoint).sqrMagnitude > size * size * .25f || !BeginDamage()) return;
            var local = skin.transform.InverseTransformPoint(worldPoint);
            var spriteBounds = skin.sprite.bounds;
            float width = Mathf.Max(.00001f, spriteBounds.size.x), height = Mathf.Max(.00001f, spriteBounds.size.y);
            float x = (local.x - spriteBounds.min.x) / width, y = (local.y - spriteBounds.min.y) / height;
            if (skin.flipX) x = 1 - x;
            if (skin.flipY) y = 1 - y;
            var matrix = skin.transform.worldToLocalMatrix;
            float rx = size * .5f * new Vector2(matrix.m00, matrix.m01).magnitude / width;
            float ry = size * .5f * new Vector2(matrix.m10, matrix.m11).magnitude / height;
            effectMaterial.SetVector(HoleNames[nextHole], new Vector4(x, y, rx, ry));
            nextHole = (nextHole + 1) % HoleNames.Length;
        }
        public void Dissolve(Vector2 point, float radius, bool fire)
        {
            if (!BeginDamage()) return;
            effectMaterial.SetVector("_Dissolve", new Vector4(point.x, point.y, Mathf.Max(0, radius), fire ? 1 : 0));
        }
        public void CompleteDissolve()
        {
            if (!skin) return;
            CaptureAppearance();
            var color = skin.color; color.a = 0; skin.color = color;
        }
        public void BurnSkin(float progress)
        {
            if (!skin) return;
            CaptureAppearance();
            skin.color = Color.Lerp(originalSkinColor, new Color(.08f, .08f, .08f, originalSkinColor.a),
                Mathf.Clamp01(progress));
        }
        public void ShockAppearance(float progress, bool flash)
        {
            if (!skin) return;
            CaptureAppearance();
            var color = Color.Lerp(originalSkinColor, new Color(.12f, .12f, .12f, originalSkinColor.a), Mathf.Clamp01(progress));
            color.a = flash ? 0 : originalSkinColor.a;
            skin.color = color;
        }
        public void Detach()
        {
            foreach (var joint in owner.GetComponentsInChildren<HingeJoint2D>())
                if (joint.gameObject == gameObject || joint.connectedBody == body) joint.enabled = false;
        }
        public void ResetDamage()
        {
            CaptureAppearance();
            if (skin) { skin.color = originalSkinColor; skin.sharedMaterial = originalMaterial; }
            nextHole = 0;
            damageUnavailable = false;
            ReleaseDamageMaterial();
        }
        void OnDestroy() { ReleaseDamageMaterial(); }
        void ReleaseDamageMaterial()
        {
            if (!effectMaterial) return;
            if (Application.isPlaying) Destroy(effectMaterial); else DestroyImmediate(effectMaterial);
            effectMaterial = null;
        }
    }
}

using System.Collections.Generic;
using UnityEngine;

// Kiểm tra một nhóm collider (các bộ phận ragdoll) có đang chạm đất không.
// Không dùng Collider2D.IsTouchingLayers vì Luna không hỗ trợ; thay bằng OverlapBoxAll quanh khung bao từng bộ phận.
public static class GroundCheck
{
    private const float Skin = 0.06f; // nới khung bao một chút để bắt được mặt đất ngay dưới chân

    public static bool IsTouching(IList<Collider2D> parts, [Bridge.Ref] LayerMask groundMask, Transform self)
    {
        for (int i = 0; i < parts.Count; i++)
        {
            Collider2D c = parts[i];
            if (!c) continue;
            Bounds b = c.bounds;
            Collider2D[] hits = Physics2D.OverlapBoxAll(b.center, new Vector2(b.size.x + Skin, b.size.y + Skin), 0);
            for (int h = 0; h < hits.Length; h++)
            {
                Collider2D other = hits[h];
                if (!other || other.isTrigger) continue;
                if ((groundMask.value & (1 << other.gameObject.layer)) == 0) continue;
                if (other.transform.IsChildOf(self)) continue; // bỏ qua chính các bộ phận của mình
                return true;
            }
        }
        return false;
    }
}

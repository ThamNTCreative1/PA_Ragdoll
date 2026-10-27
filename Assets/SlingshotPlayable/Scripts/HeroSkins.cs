using UnityEngine;

// Bộ skin nhân vật bắn. Mỗi lượt, PlayableFlowController lấy 1 ragdoll trống và "mặc" skin vào.
// Pivot lấy theo source-index (gốc trên-trái, chuẩn hoá 0..1): đầu = điểm cổ, tay/chân = vai/hông.
[System.Serializable]
public class HeroSkin
{
    public string label;
    public Sprite head, body, handLeft, handRight, footLeft, footRight, portrait;
    public Vector2 headPivot = new Vector2(.5f, .986f);
    public Vector2 handLeftPivot = new Vector2(.5f, .094f);
    public Vector2 handRightPivot = new Vector2(.5f, .094f);
    public Vector2 footLeftPivot = new Vector2(.5f, .094f);
    public Vector2 footRightPivot = new Vector2(.5f, .094f);
}

public class HeroSkins : MonoBehaviour
{
    public HeroSkin[] skins;
    public float headPixel = .0105f;                       // world-local units / pixel cho đầu
    public Vector2 limbPixel = new Vector2(.0144f, .01125f); // tay chân
    public Vector2 bodySize = new Vector2(.43f, .86f);
    public Vector2 neckLocal = new Vector2(0, -.375f);       // điểm cổ, tính trong part đầu

    // Thứ tự renderer theo SlingshotSceneBuilder: 0 body, 1 head, 2 hand L, 3 foot L, 4 hand R, 5 foot R
    public void Apply(RagdollActor actor, int id)
    {
        if (skins == null || id < 0 || id >= skins.Length || actor.renderers == null || actor.renderers.Length < 6) return;
        HeroSkin s = skins[id];
        SetBody(actor.renderers[0], s.body);
        SetHead(actor.renderers[1], s.head, s.headPivot);
        SetLimb(actor.renderers[2], s.handLeft, s.handLeftPivot);
        SetLimb(actor.renderers[3], s.footLeft, s.footLeftPivot);
        SetLimb(actor.renderers[4], s.handRight, s.handRightPivot);
        SetLimb(actor.renderers[5], s.footRight, s.footRightPivot);
    }

    void SetBody(SpriteRenderer r, Sprite sp)
    {
        if (sp == null) return;
        r.sprite = sp;
        Vector2 b = SpriteSize(sp);
        r.transform.localScale = new Vector3(bodySize.x / b.x, bodySize.y / b.y, 1);
        r.transform.localPosition = Vector3.zero;
    }

    void SetHead(SpriteRenderer r, Sprite sp, Vector2 pivot)
    {
        if (sp == null) return;
        r.sprite = sp;
        float w = sp.rect.width, h = sp.rect.height, ppu = sp.pixelsPerUnit;
        r.transform.localScale = new Vector3(headPixel * ppu, headPixel * ppu, 1);
        float dx = (pivot.x * w - w * .5f) * headPixel;
        float dy = (h * .5f - pivot.y * h) * headPixel;
        r.transform.localPosition = new Vector3(neckLocal.x - dx, neckLocal.y - dy, 0);
    }

    void SetLimb(SpriteRenderer r, Sprite sp, Vector2 pivot)
    {
        if (sp == null) return;
        r.sprite = sp;
        float w = sp.rect.width, h = sp.rect.height, ppu = sp.pixelsPerUnit;
        r.transform.localScale = new Vector3(limbPixel.x * ppu, limbPixel.y * ppu, 1);
        float attachY = (32 - .094f * 64) * limbPixel.y;   // vị trí vai/hông của tay chân chuẩn 16x64
        float dx = (pivot.x * w - w * .5f) * limbPixel.x;
        float dy = (h * .5f - pivot.y * h) * limbPixel.y;
        r.transform.localPosition = new Vector3(-dx, attachY - dy, 0);
    }

    static Vector2 SpriteSize(Sprite sp) { return new Vector2(sp.rect.width / sp.pixelsPerUnit, sp.rect.height / sp.pixelsPerUnit); }
}

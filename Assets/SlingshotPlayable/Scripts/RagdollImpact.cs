using UnityEngine;
public class RagdollImpact : MonoBehaviour
{
    public RagdollActor actor;
    public PlayableFlowController flow;
    float lastSound;
    const float launchGrace = .4f;
    // Nếu còn đang tì vào sàn sau thời gian ân hạn (bắn yếu rơi ngay cạnh ná) thì vẫn tính là đã va chạm.
    void OnCollisionStay2D(Collision2D hit)
    {
        if (actor == null || actor.hasCollided || actor.reactiveTarget) return;
        if (hit.collider != null && hit.collider.transform.IsChildOf(actor.transform)) return;
        if (Time.time - actor.launchTime >= launchGrace) actor.hasCollided = true;
    }
    void OnCollisionEnter2D(Collision2D hit)
    {
        // Bỏ qua va chạm giữa các bộ phận của CHÍNH nhân vật này (trên Luna IgnoreCollision
        // có thể không giữ được) -> tránh tính "đã va chạm" ngay lúc vừa bắn.
        if (actor != null && hit.collider != null && hit.collider.transform.IsChildOf(actor.transform)) return;
        // Kéo ná xuống thấp thì chân nhân vật chạm sàn ngay lúc thả -> không tính là "đã va chạm"
        // trong khoảng ngắn đầu tiên sau khi bắn (nếu không sẽ đếm giờ và quay về ná khi còn đang bay).
        if (actor != null && !actor.reactiveTarget && Time.time - actor.launchTime < launchGrace) return;
        if (actor != null)
        {
            bool wasDown = actor.knockedDown;
            actor.hasCollided = true; actor.ReactToHit(hit.relativeVelocity);
            if (!wasDown && actor.knockedDown && flow != null) flow.PlayKnock();
        }
        if (flow != null && Time.time > lastSound + .18f && hit.relativeVelocity.sqrMagnitude > 8)
        {
            lastSound = Time.time;
            flow.PlayImpact();
        }
    }
}

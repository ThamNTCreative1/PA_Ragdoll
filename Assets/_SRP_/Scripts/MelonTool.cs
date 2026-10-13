using UnityEngine;

namespace MelonSandbox
{
    public enum MelonToolKind { SyringeAcid, SyringeFire, SyringeCut, Saw, Shock, Flame, Rifle }
    public sealed class MelonTool : MonoBehaviour
    {
        public MelonGame game;
        public MelonToolKind kind;
        public Rigidbody2D body;
        public MelonRagdoll intendedTarget;
        void Awake() { if (!game) game = MelonGame.Instance; }
        public bool held, used;
        public SpriteRenderer blade;
        TargetJoint2D drag;
        float lastHit = -100, nextShot, nextAmbient;
        public bool Syringe => kind <= MelonToolKind.SyringeCut;
        public void ResetForStage(MelonGame controller)
        {
            game = controller;
            if (drag) { drag.enabled = false; Destroy(drag); }
            drag = null; held = false; used = false; intendedTarget = null;
            lastHit = -100; nextShot = nextAmbient = 0;
        }
        public void ConfigurePlacement()
        {
            if (kind != MelonToolKind.Saw) return;
            body.rotation = 0;
            transform.rotation = Quaternion.identity;
            body.constraints |= RigidbodyConstraints2D.FreezeRotation;
            float bottom = float.PositiveInfinity;
            foreach (var visual in GetComponentsInChildren<SpriteRenderer>())
            {
                bottom = Mathf.Min(bottom, visual.bounds.min.y);
                if (visual == blade) continue;
                // The blade collider alone lets the gripCollider sink through the floor.
                var gripCollider = visual.GetComponent<BoxCollider2D>();
                if (!gripCollider) gripCollider = visual.gameObject.AddComponent<BoxCollider2D>();
                gripCollider.offset = visual.sprite.bounds.center;
                gripCollider.size = visual.sprite.bounds.size;
            }
            if (!float.IsInfinity(bottom))
            {
                transform.position += Vector3.up * (.02f - bottom);
                body.position = transform.position;
            }
        }
        public void Grab(Vector2 position)
        {
            held = true; body.WakeUp();
            drag = gameObject.AddComponent<TargetJoint2D>(); drag.autoConfigureTarget = false;
            drag.maxForce = 3000; drag.frequency = 7; drag.dampingRatio = .9f;
            drag.target = position;
            game.Loop(kind == MelonToolKind.Saw ? "pila" : kind == MelonToolKind.Shock ? "shok" : kind == MelonToolKind.Flame ? "flame" : null);
        }
        public void Drag(Vector2 point) { if (drag) drag.target = point; }
        public void Drop() { held = false; if (drag) Destroy(drag); game.Loop(null); }
        void FixedUpdate()
        {
            if (!held || !game || game.Paused) return;
            if (kind == MelonToolKind.Rifle || kind == MelonToolKind.Flame)
            {
                var target = game.NextTarget(kind == MelonToolKind.Rifle ? 1 : 0);
                if (!target) target = game.NextTarget(-1);
                if (target)
                {
                    var direction = target.Torso.body.position - body.position;
                    float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
                    body.angularVelocity = Mathf.DeltaAngle(body.rotation, angle) * 12;
                    if (Time.time >= nextShot)
                    {
                        nextShot = Time.time + (kind == MelonToolKind.Rifle ? .11f : .055f);
                        game.Fire(this, target);
                    }
                }
            }
            else body.angularVelocity = Mathf.DeltaAngle(body.rotation, 0) * 8;
        }
        void Update()
        {
            if (blade && game) blade.sprite = game.assets.Sprite("msg_les_" + (Mathf.FloorToInt(Time.time * 10) % 2));
            if (!game || Time.time < nextAmbient) return;
            nextAmbient = Time.time + .22f;
            if (kind == MelonToolKind.Saw) game.Particles("msg_dym", body.position, 1, new Color(1, 1, 1, .15f));
            if (kind == MelonToolKind.Shock) game.Particles("msg_el_" + Random.Range(0, 8), body.position + (Vector2)transform.right, 1, Color.white);
        }
        void OnCollisionEnter2D(Collision2D collision) { Contact(collision); }
        void OnCollisionStay2D(Collision2D collision) { Contact(collision); }
        void Contact(Collision2D collision)
        {
            if (used || (!held && !Syringe) || Time.time - lastHit < .14f) return;
            var limb = collision.collider.GetComponent<MelonLimb>();
            if (!limb || limb.owner.dead || (intendedTarget && limb.owner != intendedTarget)) return;
            if (kind == MelonToolKind.Flame || kind == MelonToolKind.Rifle) return;
            lastHit = Time.time;
            var point = collision.contactCount > 0 ? collision.GetContact(0).point : limb.body.position;
            limb.owner.Apply(kind, limb, point);
            if (Syringe)
            {
                used = true; body.gravityScale = 1;
                var visual = GetComponentInChildren<SpriteRenderer>();
                var bounds = visual.sprite.bounds;
                Vector2 tip = visual.transform.TransformPoint(new Vector3(bounds.min.x, bounds.center.y, 0));
                Vector2 direction = -(Vector2)transform.right;
                // Insert the full needle shaft, so the barrel meets the visible body.
                Vector2 neck = visual.transform.TransformPoint(new Vector3(bounds.min.x + bounds.size.x * .29f, bounds.center.y, 0));
                Vector2 surface = point;
                float distance;
                if (limb.skin.bounds.IntersectRay(new Ray(body.position, direction), out distance))
                    surface = body.position + direction * distance;
                Vector2 embeddedTip = surface + direction * (Vector2.Distance(tip, neck) + .05f);
                Vector2 localTip = transform.InverseTransformPoint(tip);
                body.position += embeddedTip - tip;
                body.linearVelocity = limb.body.linearVelocity;
                body.angularVelocity = limb.body.angularVelocity;
                foreach (var own in GetComponentsInChildren<Collider2D>())
                    foreach (var target in limb.owner.GetComponentsInChildren<Collider2D>())
                        MelonGame.IgnoreActiveCollision(own, target);
                var joint = gameObject.AddComponent<FixedJoint2D>(); joint.connectedBody = limb.body;
                joint.autoConfigureConnectedAnchor = false;
                joint.anchor = localTip;
                joint.connectedAnchor = limb.transform.InverseTransformPoint(embeddedTip);
                joint.enableCollision = false;
            }
        }
    }
}

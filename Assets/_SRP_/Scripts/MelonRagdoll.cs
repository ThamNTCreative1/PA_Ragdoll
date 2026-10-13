using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace MelonSandbox
{
    public sealed class MelonRagdoll : MonoBehaviour
    {
        public string skinName;
        public int life = 100, hits;
        public bool dead;
        public int targetGroup;
        public bool parade;
        float paradeStart, paradeDistance;
        public MelonGame game;
        void Awake() { if (!game) game = MelonGame.Instance; }
        public List<MelonLimb> limbs = new List<MelonLimb>();
        public List<TargetJoint2D> supports = new List<TargetJoint2D>();
        public MelonLimb Head => GetLimb("head");
        public MelonLimb Torso => GetLimb("body");
        public MelonLimb GetLimb(string part)
        {
            for (int i = 0; i < limbs.Count; i++)
                if (limbs[i] && limbs[i].gameObject.name == part) return limbs[i];
            return null;
        }
        static Transform Child(Transform parent, string childName)
        {
            if (!parent) return null;
            for (int i = 0; i < parent.childCount; i++)
            {
                var child = parent.GetChild(i);
                if (child.name == childName) return child;
            }
            return null;
        }
        public static readonly string[] Skins = { "main_", "tom_", "kak_", "doc_", "corn_", "red_", "blue_" };
        public void BuildSprunky(MelonGame controller, Vector2 offset, bool suspended)
        {
            game = controller; skinName = name;
            transform.localScale = Vector3.one * 10;
            transform.position = new Vector3((offset.x - 220) / 100f, -offset.y / 100f, 0);
            foreach (var animator in GetComponentsInChildren<Animator>(true)) animator.enabled = false;
            var rootBody = GetComponent<Rigidbody2D>();
            if (rootBody) rootBody.simulated = false;
            // The source prefab contains an animation control rig beside the physical parts.
            foreach (Transform child in transform) if (child.name != "Parts") child.gameObject.SetActive(false);
            var parts = Child(transform, "Parts");
            string[] source = { "head_mid", "chest_mid", "abdomen_mid", "hip_mid", "upperarm_front", "forearm_front", "hand_front", "upperarm_back", "forearm_back", "hand_back", "thigh_front", "shin_front", "foot_front", "thigh_back", "shin_back", "foot_back" };
            string[] target = { "head", "body", "body_mid", "body_down", "r_up_arm", "r_down_arm", "r_hand", "l_up_arm", "l_down_arm", "l_hand", "r_up_leg", "r_down_leg", "r_foot", "l_up_leg", "l_down_leg", "l_foot" };
            for (int i = 0; i < source.Length; i++)
            {
                var part = Child(parts, source[i]);
                if (!part) throw new System.InvalidOperationException(name + " is missing " + source[i]);
                part.name = target[i]; part.gameObject.layer = 0;
                var limb = part.gameObject.AddComponent<MelonLimb>();
                limb.owner = this; limb.partName = target[i]; limb.body = part.GetComponent<Rigidbody2D>();
                limb.body.bodyType = RigidbodyType2D.Dynamic; limb.body.simulated = true;
                limb.body.gravityScale = 1; limb.body.constraints = RigidbodyConstraints2D.None;
                limb.body.linearDamping = .25f; limb.body.angularDamping = 1.8f;
 #if !UNITY_LUNA
                limb.body.interpolation = RigidbodyInterpolation2D.Interpolate;
#endif
                limb.body.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
                limb.skin = Child(part, "Skin").GetComponent<SpriteRenderer>();
                limb.inner = Child(part, "Skeleton").GetComponent<SpriteRenderer>();
                foreach (var renderer in part.GetComponentsInChildren<SpriteRenderer>(true))
                {
                    renderer.sortingLayerID = 0;
                    // Preserve the material authored on the Sprunky prefab.
                }
                limb.skin.enabled = true; limb.inner.enabled = true;
                var meat = Child(part, "Meat"); if (meat) meat.gameObject.SetActive(false);
                limb.dimensions = limb.skin.bounds.size;
                limb.body.mass = Mathf.Max(.15f, limb.dimensions.x * limb.dimensions.y * 4);
                var colliders = part.GetComponents<Collider2D>();
                for (int j = 0; j < colliders.Length; j++) { colliders[j].enabled = j == 0; colliders[j].isTrigger = false; }
                foreach (var collider in part.GetComponentsInChildren<Collider2D>(true))
                    if (collider.transform != part) collider.enabled = false;
                foreach (var joint in part.GetComponents<HingeJoint2D>())
                {
                    joint.enabled = joint.connectedBody && joint.connectedBody != limb.body;
                    joint.enableCollision = false;
                    // Dismemberment is controlled by MelonLimb.Detach, not spawn forces.
                    joint.breakForce = float.PositiveInfinity;
                    joint.breakTorque = float.PositiveInfinity;
                }
                limbs.Add(limb);
            }
            ApplySpriteSorting();
            ConfigureLeg("l_");
            ConfigureLeg("r_");
            var allColliders = GetComponentsInChildren<Collider2D>();
            for (int i = 0; i < allColliders.Length; i++)
                for (int j = i + 1; j < allColliders.Length; j++) MelonGame.IgnoreActiveCollision(allColliders[i], allColliders[j]);
            if (suspended)
            {
                float feetY = Mathf.Min(GetLimb("r_foot").skin.bounds.min.y, GetLimb("l_foot").skin.bounds.min.y);
                transform.position += Vector3.up * (.02f - feetY);
                Vector2 rightTarget = MelonGame.FromPixels(offset.x, 360);
                Vector2 leftTarget = MelonGame.FromPixels(offset.x + 200, 360);
                PoseSuspendedArm("r_", rightTarget);
                PoseSuspendedArm("l_", leftTarget);
                Support(GetLimb("r_hand"), rightTarget);
                Support(GetLimb("l_hand"), leftTarget);
                GroundFoot(GetLimb("r_foot"));
                GroundFoot(GetLimb("l_foot"));
            }
            else Support(Head, Head.transform.position);
        }
        public void ApplySpriteSorting()
        {
            // All skin layers cover all inner layers, including at overlapping joints.
            // Left arm behind the body, right arm in front; tools remain above at 59+.
            string[] backToFront = { "l_up_arm", "l_down_arm", "l_hand",
                "l_up_leg", "l_down_leg", "l_foot", "r_up_leg", "r_down_leg", "r_foot",
                "body_down", "body_mid", "body", "head", "r_up_arm", "r_down_arm", "r_hand" };
            for (int i = 0; i < backToFront.Length; i++)
            {
                var limb = GetLimb(backToFront[i]);
                if (!limb) continue;
                foreach (var renderer in limb.GetComponentsInChildren<SpriteRenderer>(true))
                {
                    renderer.sortingLayerID = 0;
                    renderer.sortingOrder = renderer == limb.skin ? 40 + i : renderer == limb.inner ? 8 + i : 24 + i;
                }
            }
        }
        void GroundFoot(MelonLimb foot)
        {
            // Pin the sole at ground height, instead of letting the arm supports lift it.
            Vector2 target = foot.transform.position;
            target.y -= foot.skin.bounds.min.y;
            foot.body.constraints |= RigidbodyConstraints2D.FreezeRotation;
            Support(foot, target);
        }
        void ConfigureLeg(string side)
        {
            var thigh = GetLimb(side + "up_leg");
            var shin = GetLimb(side + "down_leg");
            var foot = GetLimb(side + "foot");
            var hipJoint = thigh.GetComponent<HingeJoint2D>();
            var kneeJoint = shin.GetComponent<HingeJoint2D>();
            var ankleJoint = foot.GetComponent<HingeJoint2D>();
            // Put the hip pivot inside the visible pelvis, rather than below its sprite.
            Vector2 hip = GetLimb("body_down").skin.bounds.center;
            Vector2 knee = shin.transform.TransformPoint(kneeJoint.anchor);
            Vector2 ankle = foot.transform.TransformPoint(ankleJoint.anchor);
            FitLegArtwork(thigh, hip, knee);
            FitLegArtwork(shin, knee, ankle);
            // Extend the ankle end only, retaining the sole's original ground height.
            Vector2 sole = new Vector2(ankle.x, foot.skin.bounds.min.y);
            FitLegArtwork(foot, ankle, sole, false);
            var footCollider = foot.GetComponent<BoxCollider2D>();
            var spriteBounds = foot.skin.sprite.bounds;
            Vector2 lower = foot.transform.InverseTransformPoint(foot.skin.transform.TransformPoint(spriteBounds.min));
            Vector2 upper = foot.transform.InverseTransformPoint(foot.skin.transform.TransformPoint(spriteBounds.max));
            // Account for the physics contact margin so the drawn sole meets y = 0.
            lower.y += .015f / Mathf.Abs(foot.transform.lossyScale.y);
            footCollider.offset = (lower + upper) * .5f;
            footCollider.size = upper - lower;
            SetLegJoint(hipJoint, hip, -35, 35);
            SetLegJoint(kneeJoint, knee, 0, 100);
            SetLegJoint(ankleJoint, ankle, -15, 15);
        }
        static void SetLegJoint(HingeJoint2D joint, Vector2 point, float min, float max)
        {
            joint.autoConfigureConnectedAnchor = false;
            joint.anchor = joint.transform.InverseTransformPoint(point);
            joint.connectedAnchor = joint.connectedBody.transform.InverseTransformPoint(point);
            joint.useMotor = false;
            joint.useLimits = true;
            joint.limits = new JointAngleLimits2D { min = min, max = max };
        }
        static void FitLegArtwork(MelonLimb limb, Vector2 start, Vector2 end, bool overlapEnd = true)
        {
            Vector2 direction = (end - start).normalized;
            float overlap = limb.skin.sprite.bounds.size.x * Mathf.Abs(limb.skin.transform.lossyScale.x) * .4f;
            start -= direction * overlap;
            if (overlapEnd) end += direction * overlap;
            foreach (var renderer in limb.GetComponentsInChildren<SpriteRenderer>(true))
            {
                if (!renderer.sprite) continue;
                var bounds = renderer.sprite.bounds;
                var scale = renderer.transform.localScale;
                scale.y *= Vector2.Distance(start, end) / (bounds.size.y * Mathf.Abs(renderer.transform.lossyScale.y));
                renderer.transform.localScale = scale;
                renderer.transform.rotation = Quaternion.Euler(0, 0, Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg + 90);
                Vector3 top = renderer.transform.TransformPoint(new Vector3(bounds.center.x, bounds.max.y, 0));
                renderer.transform.position += (Vector3)start - top;
            }
            limb.dimensions = limb.skin.bounds.size;
        }
        void PoseSuspendedArm(string side, Vector2 target)
        {
            var upper = GetLimb(side + "up_arm");
            var lower = GetLimb(side + "down_arm");
            var hand = GetLimb(side + "hand");
            var shoulder = upper.GetComponent<HingeJoint2D>();
            Vector2 pivot = shoulder.connectedBody.transform.TransformPoint(shoulder.connectedAnchor);
            Vector2 elbow = Vector2.Lerp(pivot, target, .5f);
            elbow.x += side == "r_" ? -.15f : .15f;
            StretchArmSegment(upper, pivot, elbow);
            StretchArmSegment(lower, elbow, target);
            hand.transform.position = target;
            hand.transform.rotation = lower.transform.rotation;
            ConnectArmJoint(upper, shoulder.connectedBody, pivot);
            ConnectArmJoint(lower, upper.body, elbow);
            ConnectArmJoint(hand, lower.body, target);
        }
        static void StretchArmSegment(MelonLimb limb, Vector2 start, Vector2 end)
        {
            var bounds = limb.skin.sprite.bounds;
            // Inset the physical anchors into the artwork so bent ends still overlap.
            Vector2 direction = (end - start).normalized;
            float overlap = bounds.size.x * Mathf.Abs(limb.skin.transform.lossyScale.x) * .6f;
            start -= direction * overlap;
            end += direction * overlap;
            var scale = limb.transform.localScale;
            scale.y *= Vector2.Distance(start, end) / (bounds.size.y * Mathf.Abs(limb.skin.transform.lossyScale.y));
            limb.transform.localScale = scale;
            limb.transform.rotation = Quaternion.Euler(0, 0, Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg + 90);
            Vector3 top = limb.skin.transform.TransformPoint(new Vector3(bounds.center.x, bounds.max.y, 0));
            limb.transform.position += (Vector3)start - top;
            limb.dimensions = limb.skin.bounds.size;
        }
        static void ConnectArmJoint(MelonLimb limb, Rigidbody2D connected, Vector2 point)
        {
            var joint = limb.GetComponent<HingeJoint2D>();
            joint.autoConfigureConnectedAnchor = false;
            joint.connectedBody = connected;
            joint.anchor = limb.transform.InverseTransformPoint(point);
            joint.connectedAnchor = connected.transform.InverseTransformPoint(point);
            joint.useLimits = true;
            joint.limits = new JointAngleLimits2D { min = -10, max = 10 };
        }
        public void ConfigureInstance(MelonGame controller, Vector2 offset, bool suspended, string innerSkin)
        {
            game = controller; Release(); ChangeInner(innerSkin);
            var colliders = GetComponentsInChildren<Collider2D>();
            for (int i = 0; i < colliders.Length; i++)
                for (int j = i + 1; j < colliders.Length; j++) MelonGame.IgnoreActiveCollision(colliders[i], colliders[j]);
            if (suspended)
            {
                Support(GetLimb("r_down_arm"), MelonGame.FromPixels(offset.x, 360));
                Support(GetLimb("l_down_arm"), MelonGame.FromPixels(offset.x + 200, 360));
            }
            else Support(Head, Head.body.position);
        }
        public void Build(MelonGame controller, string prefix, Vector2 offset, bool suspended, string innerSkin)
        {
            game = controller; skinName = prefix;
            string[] parts = { "l_up_arm", "l_down_arm", "l_up_leg", "l_down_leg", "l_foot", "body", "body_down", "body_mid", "head", "r_up_leg", "r_down_leg", "r_foot", "r_up_arm", "r_down_arm" };
            for (int i = 0; i < parts.Length; i++)
            {
                string shortName = parts[i].StartsWith("l_") || parts[i].StartsWith("r_") ? parts[i].Substring(2) : parts[i];
                var node = game.assets.Node(prefix + shortName);
                if (node == null) throw new System.InvalidOperationException("Missing body layout: " + prefix + shortName);
                var go = new GameObject(parts[i]); go.transform.SetParent(transform, false);
                go.transform.position = MelonGame.FromPixels(node.x + node.w / 2 + offset.x, node.y + node.h / 2 + offset.y);
                var limb = go.AddComponent<MelonLimb>(); limb.owner = this; limb.partName = shortName;
                limb.dimensions = new Vector2(node.w, node.h) / 100f;
                limb.body = go.AddComponent<Rigidbody2D>();
                limb.body.mass = Mathf.Max(.15f, limb.dimensions.x * limb.dimensions.y * 4);
                limb.body.linearDamping = .25f; limb.body.angularDamping = 1.8f;
                limb.body.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
 #if !UNITY_LUNA
                limb.body.interpolation = RigidbodyInterpolation2D.Interpolate;
#endif
                var col = go.AddComponent<BoxCollider2D>(); col.size = limb.dimensions * .94f;
                var innerNode = game.assets.Node(innerSkin + shortName);
                Vector2 innerPosition = (Vector2)go.transform.position + new Vector2(innerNode.x + innerNode.w / 2 - node.x - node.w / 2, -(innerNode.y + innerNode.h / 2 - node.y - node.h / 2)) / 100f;
                limb.inner = game.assets.Visual("msg_" + innerSkin + shortName, go.transform, innerPosition, new Vector2(innerNode.w, innerNode.h) / 100, 10 + i * 2);
                limb.skin = game.assets.Visual(node.pic, go.transform, go.transform.position, limb.dimensions, 11 + i * 2);
                if (prefix == "tom_" && shortName == "head") limb.inner.enabled = false;
                limbs.Add(limb);
            }
            Joint("head", "body", .48f, -18, 18);
            Joint("body", "body_mid", .48f, -18, 18);
            Joint("body_mid", "body_down", .48f, -18, 18);
            foreach (string side in new[] { "l_", "r_" })
            {
                Joint("body", side + "up_arm", -.48f, -180, 180, false);
                Joint(side + "up_arm", side + "down_arm", .48f, 0, 144);
                Joint("body_down", side + "up_leg", .42f, -18, 162);
                Joint(side + "up_leg", side + "down_leg", .48f, -162, 0);
                Joint(side + "down_leg", side + "foot", .48f, -18, 18);
            }
            var colliders = GetComponentsInChildren<Collider2D>();
            for (int i = 0; i < colliders.Length; i++)
                for (int j = i + 1; j < colliders.Length; j++) MelonGame.IgnoreActiveCollision(colliders[i], colliders[j]);
            if (suspended)
            {
                Support(GetLimb("r_down_arm"), MelonGame.FromPixels(offset.x, 360));
                Support(GetLimb("l_down_arm"), MelonGame.FromPixels(offset.x + 200, 360));
            }
            else Support(Head, Head.body.position);
        }
        void Joint(string first, string second, float anchorY, float min, float max, bool limits = true)
        {
            var a = GetLimb(first); var b = GetLimb(second);
            var j = a.gameObject.AddComponent<HingeJoint2D>();
            j.connectedBody = b.body; j.autoConfigureConnectedAnchor = false;
            var world = a.body.position + Vector2.down * a.dimensions.y * anchorY;
            j.anchor = a.transform.InverseTransformPoint(world);
            j.connectedAnchor = b.transform.InverseTransformPoint(world);
            j.useLimits = limits; j.limits = new JointAngleLimits2D { min = min, max = max };
            j.enableCollision = false;
        }
        public void Support(MelonLimb limb, Vector2 point)
        {
            var j = limb.gameObject.AddComponent<TargetJoint2D>();
            j.autoConfigureTarget = false; j.target = point;
            j.maxForce = 3000; j.frequency = 5; j.dampingRatio = .85f;
            if (limb.partName == "r_hand" || limb.partName == "l_hand")
            {
                j.maxForce = 10000; j.frequency = 20; j.dampingRatio = 1;
            }
            supports.Add(j);
        }
        public void Release()
        {
            foreach (var support in supports)
                if (support) support.GetComponent<Rigidbody2D>().constraints &= ~RigidbodyConstraints2D.FreezeRotation;
            foreach (var s in supports) if (s) s.enabled = false;
        }
        public void ChangeInner(string prefix)
        {
            if (skinName.StartsWith("Sprunky_"))
            {
                foreach (var limb in limbs)
                    limb.inner.color = prefix == "fr_" ? new Color(.2f, .12f, .08f) : prefix == "lsk_" ? new Color(.5f, 1, .25f) : Color.white;
                return;
            }
            foreach (var l in limbs)
            {
                l.inner.sprite = game.assets.Sprite("msg_" + prefix + l.partName);
                var outer = game.assets.Node(skinName + l.partName); var inner = game.assets.Node(prefix + l.partName);
                l.inner.transform.localPosition = new Vector3(inner.x + inner.w / 2 - outer.x - outer.w / 2, -(inner.y + inner.h / 2 - outer.y - outer.h / 2), 0) / 100;
                l.inner.transform.localScale = new Vector3(inner.w / 100 / l.inner.sprite.bounds.size.x, inner.h / 100 / l.inner.sprite.bounds.size.y, 1);
            }
        }
        public void BeginParade() { parade = true; paradeDistance = 0; paradeStart = Head.transform.position.x; }
        void FixedUpdate()
        {
            if (!parade || supports.Count == 0 || !supports[0]) return;
            paradeDistance += Time.fixedDeltaTime * 4;
            var target = supports[0].target;
            target.x = paradeStart + paradeDistance;
            target.y = 6.5f + Mathf.Sin(paradeDistance * Mathf.PI / 2) * .65f;
            if (target.x > 14)
            {
                float length = game.characters.Count * 5f;
                paradeStart -= length; target.x -= length;
                foreach (var l in limbs) l.body.position += Vector2.left * length;
            }
            supports[0].target = target;
        }
        public void Apply(MelonToolKind kind, MelonLimb contact, Vector2 point)
        {
            if (dead) return;
            if (kind == MelonToolKind.Saw || kind == MelonToolKind.Rifle)
            {
                hits = Mathf.Min(hits + 1, 6); life = Mathf.Max(0, 100 - hits * 17);
                foreach (var l in limbs) l.Cut(point, 1f + .1f * (hits - 1));
                game.Particles("msg_blood", point, 14, Color.white);
                game.Sound(kind == MelonToolKind.Saw ? "pila_run" : "hand");
                contact.body.AddForce(new Vector2(2, 1), ForceMode2D.Impulse);
                if (hits < 6) return;
                contact.Detach(); Kill(true, 1.5f); return;
            }
            life = 0;
            if (kind == MelonToolKind.SyringeAcid)
            { ChangeInner("lsk_"); game.Sound("doc"); StartCoroutine(Reveal(point, false)); Kill(false, 2.5f); }
            else if (kind == MelonToolKind.SyringeFire || kind == MelonToolKind.Flame)
            {
                bool skinOnly = kind == MelonToolKind.SyringeFire && game.Stage == 0
                    && game.characters.Count > 1 && game.characters[1] == this;
                if (!skinOnly) ChangeInner("fr_");
                game.Sound("ohog"); game.Sound(kind == MelonToolKind.Flame ? "jar" : "trsk");
                StartCoroutine(Reveal(point, true, skinOnly));
                Kill(kind == MelonToolKind.Flame, kind == MelonToolKind.Flame ? 2 : 3);
            }
            else if (kind == MelonToolKind.SyringeCut)
            {
                foreach (var limb in limbs) { limb.Cut(point + Random.insideUnitCircle, 1); limb.Cut(limb.skin.bounds.center, .45f); }
                contact.Detach(); Head.Detach(); GetLimb("r_down_arm").Detach();
                game.Particles("msg_blood", point, 36, Color.white); game.Sound("smert_1"); Kill(false, 3.5f);
            }
            else if (kind == MelonToolKind.Shock)
            { StartCoroutine(Electrocute()); game.Sound("shok_run"); Kill(true, 1.5f); }
        }
        IEnumerator Reveal(Vector2 point, bool fire, bool skinOnly = false)
        {
            float elapsed = 0;
            while (elapsed < 1.5f)
            {
                elapsed += Time.deltaTime;
                foreach (var l in limbs)
                    if (skinOnly) l.BurnSkin(elapsed / 1.5f);
                    else l.Dissolve(point, Mathf.Clamp01(elapsed / 1.5f) * 12, fire);
                if (fire && Random.value < .6f) game.Particles("msg_flame", limbs[Random.Range(0, limbs.Count)].body.position, 1, Color.white);
                if (fire && Random.value < .15f) game.Particles("msg_dym", limbs[Random.Range(0, limbs.Count)].body.position, 1, new Color(1, 1, 1, .15f));
                yield return null;
            }
            if (!skinOnly) foreach (var limb in limbs) limb.CompleteDissolve();
        }
        IEnumerator Electrocute()
        {
            float t = 0;
            bool flash = false;
            while (t < 1.4f)
            {
                t += .06f;
                flash = !flash;
                foreach (var limb in limbs) limb.ShockAppearance(t / 1.4f, flash);
                var l = limbs[Random.Range(0, limbs.Count)];
                game.Particles("msg_el_" + Random.Range(0, 8), l.body.position, 3, Color.white);
                l.body.AddTorque(Random.Range(-4f, 4f), ForceMode2D.Impulse);
                yield return new WaitForSeconds(.06f);
            }
            foreach (var limb in limbs) limb.ShockAppearance(1, false);
        }
        void Kill(bool release, float wait)
        {
            if (dead) return;
            dead = true; life = 0;
            if (release) Release();
            game.Sound("smert_2");
            game.TargetDefeated(this, wait);
        }
    }
}

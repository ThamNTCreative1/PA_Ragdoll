using System.Collections.Generic;
using Game.Core;
using Game.Data;
using UnityEngine;

namespace Game.Gameplay
{
    // Cosmetic wearable: snaps onto the head of any living creature that touches it and rides along.
    public class WearableEntity : MonoBehaviour, IItemDataReceiver, IItemFacingReceiver
    {
        private const float ScanInterval = 0.25f;
        private const int CreatureMask = (1 << 8) | (1 << 10); // CreatureNormal + CreatureZombie torsos/heads
        // Drawn just in front of the wearer's own parts, inside its depth band — a fixed order
        // above every band would break batching for whatever band it landed in.
        private const int WornSortingOffset = 6;

        // Shared across every loose wearable; OverlapCircleAll returned a fresh array each scan.
        private static readonly List<Collider2D> ScanResults = new List<Collider2D>();

        [SerializeField] private SpriteRenderer spriteRenderer;
        [SerializeField] private BoxCollider2D box;
        [SerializeField] private Rigidbody2D body;

        private WearableStats _data;
        private bool _worn;
        private float _nextScanTime;
        private CreatureAgent _wearer;
        private int _appliedSlab = int.MinValue;
        // Kept whole, not just its stats: task reporting needs the definition to name the noun.
        private ItemSO _item;

        public void ReceiveData(ItemSO item)
        {
            if (item.type != ItemType.Wearable)
            {
                Debug.LogError($"[Wearable] {name} received '{item.itemId}' of type {item.type} — expected Wearable.", this);
                return;
            }

            _item = item;
            _data = item.wearable;
            spriteRenderer.sprite = item.icon;
            box.size = item.icon.bounds.size;
        }

        // Art mirror only; the box hugs the sprite either way. Survives being worn, so a hat
        // dropped facing left still faces left on the head that picks it up.
        public void SetFacing(int facing) => spriteRenderer.flipX = facing < 0;

        private void FixedUpdate()
        {
            if (_worn)
            {
                // The slab is fixed at spawn now, but a re-parented hat still needs it re-applied.
                if (_wearer != null && _wearer.SortingSlab != _appliedSlab)
                {
                    _appliedSlab = _wearer.SortingSlab;
                    spriteRenderer.sortingOrder = _appliedSlab + WornSortingOffset;
                }
                return;
            }
            if (_data == null || Time.time < _nextScanTime) return;
            _nextScanTime = Time.time + ScanInterval;

            var filter = new ContactFilter2D();
            filter.NoFilter();
            filter.useTriggers = true; // Physics2D.queriesHitTriggers default (not in Luna)
            filter.SetLayerMask(CreatureMask);
            Physics2D.OverlapCircle(transform.position, _data.wearRadius, filter, ScanResults);

            for (int i = 0; i < ScanResults.Count; i++)
            {
                var agent = CreatureAgent.OwnerOf(ScanResults[i]);
                if (agent == null || agent.IsDead) continue;
                if (!agent.TryWear(this)) continue;

                Wear(agent);
                return;
            }
        }

        private void Wear(CreatureAgent agent)
        {
            if (ServiceLocator.TryGet<SfxLibrarySO>(out var sfx)) Sfx.Play(sfx.wearablePickup, transform.position);
            _worn = true;
            _wearer = agent;
            body.simulated = false;
            box.enabled = false;
            transform.SetParent(agent.HeadTransform, worldPositionStays: false);
            ApplyPose();
            _appliedSlab = agent.SortingSlab;
            spriteRenderer.sortingOrder = _appliedSlab + WornSortingOffset; // the wearer's slab

            agent.AddWornEffects(_data.effects);

            // Noun + verb + noun: this wearable, worn, on that creature.
            TaskReporter.Report(TaskVerb.Wear, _item, agent.Current);
        }

        // The wearable is parented to the head, so anything that destroys the creature destroys this
        // too — but a rig rebuild or an explosion can take the hat alone. Handing the effects back
        // here covers every one of those without each needing its own teardown path.
        private void OnDestroy()
        {
            if (_wearer != null && _data != null) _wearer.RemoveWornEffects(_data.effects);
        }

        // Re-run by the wearer whenever its own identity changes (infection swaps to a differently
        // shaped head) so a hat authored for the normal form doesn't sit wrong on the zombie one.
        public void ApplyPose()
        {
            if (_wearer == null) return;
            var (offset, scale, rotation) = _data.PoseFor(_wearer.Current);
            transform.localPosition = offset;
            transform.localRotation = Quaternion.Euler(0f, 0f, rotation);
            transform.localScale = Vector3.one * scale;
        }
    }
}

using System.Collections.Generic;
using UnityEngine;

namespace MelonSandbox
{
    // Each stage and its characters are saved in the scene, not instantiated at runtime.
    public sealed class MelonStage : MonoBehaviour
    {
        public MelonRagdoll[] characters;
        public MelonTool[] tools;
        public SpriteRenderer background;
        Transform[] nodes;
        Vector3[] positions, scales;
        Quaternion[] rotations;
        bool[] active;
        Rigidbody2D[] bodies;
        RigidbodyConstraints2D[] constraints;
        HingeJoint2D[] hinges;
        bool[] hingeEnabled;
        TargetJoint2D[] supports;
        Vector2[] targets;
        SpriteRenderer[] renderers;
        Color[] colors;
        bool[] rendererEnabled;
        readonly List<Transform> originalChildren = new List<Transform>();

        public void Capture()
        {
            if (nodes != null) return;
            foreach (Transform child in transform) originalChildren.Add(child);
            nodes = GetComponentsInChildren<Transform>(true);
            positions = new Vector3[nodes.Length]; scales = new Vector3[nodes.Length];
            rotations = new Quaternion[nodes.Length]; active = new bool[nodes.Length];
            for (int i = 0; i < nodes.Length; i++)
            {
                positions[i] = nodes[i].localPosition; rotations[i] = nodes[i].localRotation;
                scales[i] = nodes[i].localScale; active[i] = nodes[i].gameObject.activeSelf;
            }
            bodies = GetComponentsInChildren<Rigidbody2D>(true);
            constraints = new RigidbodyConstraints2D[bodies.Length];
            for (int i = 0; i < bodies.Length; i++) constraints[i] = bodies[i].constraints;
            hinges = GetComponentsInChildren<HingeJoint2D>(true);
            hingeEnabled = new bool[hinges.Length];
            for (int i = 0; i < hinges.Length; i++) hingeEnabled[i] = hinges[i].enabled;
            supports = GetComponentsInChildren<TargetJoint2D>(true);
            targets = new Vector2[supports.Length];
            for (int i = 0; i < supports.Length; i++) targets[i] = supports[i].target;
            renderers = GetComponentsInChildren<SpriteRenderer>(true);
            colors = new Color[renderers.Length];
            rendererEnabled = new bool[renderers.Length];
            for (int i = 0; i < renderers.Length; i++)
            {
                colors[i] = renderers[i].color;
                rendererEnabled[i] = renderers[i].enabled;
            }
        }

        public void Restore(MelonGame game)
        {
            Capture();
            for (int i = transform.childCount - 1; i >= 0; i--)
            {
                var child = transform.GetChild(i);
                if (!originalChildren.Contains(child)) MelonGame.Dispose(child.gameObject);
            }
            foreach (var tool in tools) tool.ResetForStage(game);
            for (int i = 0; i < nodes.Length; i++)
            {
                nodes[i].localPosition = positions[i]; nodes[i].localRotation = rotations[i]; nodes[i].localScale = scales[i];
                if (nodes[i] != transform) nodes[i].gameObject.SetActive(active[i]);
            }
            for (int i = 0; i < bodies.Length; i++)
            {
                bodies[i].position = bodies[i].transform.position;
                bodies[i].rotation = bodies[i].transform.eulerAngles.z;
                bodies[i].linearVelocity = Vector2.zero; bodies[i].angularVelocity = 0;
                bodies[i].constraints = constraints[i];
            }
            for (int i = 0; i < hinges.Length; i++) hinges[i].enabled = hingeEnabled[i];
            for (int i = 0; i < supports.Length; i++) { supports[i].target = targets[i]; supports[i].enabled = true; }
            foreach (var character in characters)
            {
                character.StopAllCoroutines(); character.game = game;
                character.dead = false; character.life = 100; character.hits = 0; character.parade = false;
                foreach (var limb in character.limbs) limb.ResetDamage();
            }
            for (int i = 0; i < renderers.Length; i++)
            {
                renderers[i].color = colors[i];
                renderers[i].enabled = rendererEnabled[i];
            }
        }
    }
}

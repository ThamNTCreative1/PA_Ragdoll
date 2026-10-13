#if UNITY_EDITOR && !UNITY_LUNA
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

namespace MelonSandbox
{
    public sealed class MelonSmokeTests : MonoBehaviour
    {
        [Serializable] class Result { public bool success; public string[] checks; public string error; }
        readonly List<string> checks = new List<string>();
        MelonGame game;
        bool failed;
        void Check(bool condition, string name)
        {
            checks.Add((condition ? "PASS " : "FAIL ") + name);
            if (!condition) failed = true;
        }
        IEnumerator Start()
        {
            game = GetComponent<MelonGame>(); game.Restart();
            yield return new WaitForSeconds(.4f);
            Check(game.assets.CharacterPrefab("main_") != null, "Editable character prefab resolves from catalog");
            Check(game.assets.ToolPrefab(MelonToolKind.Saw) != null, "Editable weapon prefab resolves from catalog");
            Check(game.characters.Count == 3, "Stage 1 has three ragdolls");
            Check(game.characters.TrueForAll(c => c.limbs.Count == 16), "Each Sprunky has 16 physics limbs");
            Check(game.characters.TrueForAll(c => c.GetComponentsInChildren<HingeJoint2D>().Length >= 15), "Each Sprunky has its physical joints");
            for (int i = 0; i < 3; i++)
            {
                Check(game.UseSyringe(i), "Syringe " + i + " launches");
                float end = Time.time + 4.5f;
                while (Time.time < end && game.Stage == 0 && game.characters[i].life > 0) yield return null;
                Check(game.Stage != 0 || game.characters[i].dead, "Syringe " + i + " collision applies effect");
                yield return new WaitForSeconds(3.6f);
            }
            Check(game.Stage == 1, "All syringe targets advance to tools stage");
            if (game.Stage != 1) game.LoadStage(1);
            yield return new WaitForSeconds(.2f);
            Check(game.characters.Count == 4 && game.tools.Count == 2, "Tools stage loads four targets and two weapons");
            var victim = game.characters[0];
            var saw = game.GetTool(MelonToolKind.Saw);
            saw.body.position = victim.Torso.body.position - new Vector2(1.85f, .25f); saw.body.rotation = 0; saw.Grab(saw.body.position);
            yield return new WaitForSeconds(3);
            saw.Drop();
            Check(victim.hits > 0, "Dragging saw creates real physics damage contacts");
            for (int h = victim.hits; h < 6; h++) victim.Apply(MelonToolKind.Saw, victim.Torso, victim.Torso.body.position);
            Check(victim.dead && victim.hits == 6, "Six saw hits defeat one target");
            victim.Apply(MelonToolKind.Saw, victim.Torso, victim.Torso.body.position);
            Check(game.Defeated == 1, "Repeated damage cannot double-count a defeat");
            var shock = game.GetTool(MelonToolKind.Shock);
            shock.body.position = game.characters[1].Torso.body.position; shock.Grab(shock.body.position);
            yield return new WaitForSeconds(.8f); shock.Drop();
            Check(game.characters[1].dead, "Electric tool contact defeats a target");
            for (int i = 1; i < 4; i++) if (!game.characters[i].dead) game.characters[i].Apply(MelonToolKind.Shock, game.characters[i].Torso, game.characters[i].Torso.body.position);
            yield return new WaitForSeconds(1.8f);
            Check(game.Stage == 2, "Tools stage advances exactly once");
            if (game.Stage != 2) game.LoadStage(2);
            yield return new WaitForSeconds(.2f);
            Check(game.characters.Count == 7, "Weapon stage loads seven targets");
            var gun = game.GetTool(MelonToolKind.Rifle);
            Check(gun && game.NextTarget(1), "Rifle and upper-floor targets exist");
            var flame = game.GetTool(MelonToolKind.Flame);
            Check(flame && game.NextTarget(0), "Flamethrower and lower-floor targets exist");
            var upper = game.NextTarget(1);
            if (gun && upper)
            {
                gun.body.position = upper.Torso.body.position + Vector2.right * 5;
                gun.Grab(gun.body.position);
                yield return new WaitForSeconds(4);
                gun.Drop();
                Check(upper.hits > 0, "Rifle automatically aims and projectile segment hits a limb");
            }
            var lower = game.NextTarget(0);
            if (flame && lower)
            {
                flame.body.position = lower.Torso.body.position + Vector2.left * 4;
                flame.Grab(flame.body.position);
                yield return new WaitForSeconds(2);
                flame.Drop();
                Check(lower.dead, "Flame projectile burns a target");
            }
            foreach (var c in game.characters.ToArray()) if (!c.dead) c.Apply(MelonToolKind.Flame, c.Torso, c.Torso.body.position);
            yield return new WaitForSeconds(2.4f);
            Check(game.Stage == 3, "Final target opens completion screen");
            Check(game.characters.Count == 7, "Completion parade has seven Sprunkies");
            UnityEngine.UI.Button replay = null;
            foreach (var button in game.hud.GetComponentsInChildren<UnityEngine.UI.Button>())
                if (button.name == "Syringe 0") { replay = button; break; }
            Check(replay && replay.interactable, "Completion selection button is available");
            game.Restart();
            yield return null;
            Check(game.Stage == 0 && game.Defeated == 0 && game.characters.Count == 3, "Replay resets state");
            game.TogglePause(); Check(Time.timeScale == 0, "Pause stops simulation"); game.TogglePause();
            Check(Time.timeScale == 1, "Resume restores simulation");
            var report = new Result { success = !failed, checks = checks.ToArray() };
            File.WriteAllText(Path.Combine(Application.dataPath, "../MelonSmokeTests.result.json"), JsonUtility.ToJson(report, true));
            Debug.Log((failed ? "MELON_TESTS_FAILED" : "MELON_TESTS_PASSED") + "\n" + string.Join("\n", checks));
            Destroy(this);
        }
    }
}

#endif

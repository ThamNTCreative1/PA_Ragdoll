using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

public static class SprunkySceneReplacer
{
    [MenuItem("Tools/Project/Replace Characters With Sprunky Prefabs")]
    public static void ReplaceCharacters()
    {
        Transform main = GameObject.Find("GAME/Main")?.transform;
        if (!main) throw new System.InvalidOperationException("GAME/Main was not found.");

        ReplacePlayer(main);
        ReplaceMonsters(main);

        EditorSceneManager.MarkSceneDirty(main.gameObject.scene);
        EditorSceneManager.SaveScene(main.gameObject.scene);
        AssetDatabase.SaveAssets();
        Debug.Log("Characters replaced: Player = Sprunky_9, zombies = Sprunky_8 and Sprunky_10.");
    }

    private static void ReplacePlayer(Transform main)
    {
        Transform oldTransform = main.Find("M05");
        if (!oldTransform) return;

        GameObject oldPlayer = oldTransform.gameObject;
        GameObject player = InstantiatePrefab("Assets/03 PREFABS/Sprunky_9.prefab", main);
        player.name = "Sprunky_9";
        CopyTransform(oldPlayer.transform, player.transform);
        SetHierarchy(player, oldPlayer.layer, "Untagged");

        PlayerController controller = player.AddComponent<PlayerController>();
        EditorUtility.CopySerialized(oldPlayer.GetComponent<PlayerController>(), controller);
        CopyComponent<BoxCollider2D>(oldPlayer, player);

        Transform oldHand = oldPlayer.transform.Find("LeftHand");
        Transform newHand = player.transform.Find("Parts/hand_front");
        if (!oldHand || !newHand) throw new System.InvalidOperationException("Player hand mapping failed.");

        var weapons = oldHand.Cast<Transform>().ToList();
        foreach (Transform weapon in weapons)
            Undo.SetTransformParent(weapon, newHand, "Move weapon to Sprunky_9");

        ConfigureWeapon(newHand, "Gun", 0.35f);
        ConfigureWeapon(newHand, "Kunai", 0.35f);
        ConfigureWeapon(newHand, "Bomb", 0.35f);

        SetPieces(controller, player);
        SetReference(controller, "head", null);

        HingeJoint2D leftArm = FindComponent<HingeJoint2D>(player, "Parts/upperarm_front");
        HingeJoint2D rightArm = FindComponent<HingeJoint2D>(player, "Parts/upperarm_back");
        foreach (ShootController shoot in player.GetComponentsInChildren<ShootController>(true))
        {
            SetReference(shoot, "left", leftArm);
            SetReference(shoot, "right", rightArm);
        }

        GameController game = Object.FindFirstObjectByType<GameController>();
        SetReference(game, "player", controller);
        Undo.DestroyObjectImmediate(oldPlayer);
    }

    private static void ReplaceMonsters(Transform main)
    {
        MonsterController[] oldMonsters = main.GetComponentsInChildren<MonsterController>(true);
        int count8 = 0;
        int count10 = 0;

        foreach (MonsterController oldController in oldMonsters)
        {
            GameObject oldMonster = oldController.gameObject;
            bool useEight = oldMonster.name.StartsWith("MZ01");
            string assetPath = useEight
                ? "Assets/03 PREFABS/Sprunky_8.prefab"
                : "Assets/03 PREFABS/Sprunky_10.prefab";

            GameObject zombie = InstantiatePrefab(assetPath, main);
            int index = useEight ? count8++ : count10++;
            zombie.name = (useEight ? "Sprunky_8" : "Sprunky_10") + (index == 0 ? "" : " (" + index + ")");
            CopyTransform(oldMonster.transform, zombie.transform);
            SetHierarchy(zombie, oldMonster.layer, "Monster");

            MonsterController controller = zombie.AddComponent<MonsterController>();
            EditorUtility.CopySerialized(oldController, controller);
            SetPieces(controller, zombie);

            Transform chest = zombie.transform.Find("Parts/chest_mid");
            Rigidbody2D body = chest ? chest.GetComponent<Rigidbody2D>() : zombie.GetComponent<Rigidbody2D>();
            BalanceController balance = chest ? chest.GetComponent<BalanceController>() : null;
            if (chest && !balance) balance = chest.gameObject.AddComponent<BalanceController>();
            BalanceController oldBalance = oldMonster.GetComponentInChildren<BalanceController>();
            if (balance && oldBalance) EditorUtility.CopySerialized(oldBalance, balance);

            SetReference(controller, "body", body);
            SetReference(controller, "balance", balance);
            SetReference(controller, "leftHand", FindComponent<HingeJoint2D>(zombie, "Parts/upperarm_front"));
            SetReference(controller, "rightHand", FindComponent<HingeJoint2D>(zombie, "Parts/upperarm_back"));
            SetReference(controller, "leftLeg", FindComponent<HingeJoint2D>(zombie, "Parts/thigh_front"));
            SetReference(controller, "rightLeg", FindComponent<HingeJoint2D>(zombie, "Parts/thigh_back"));

            Undo.DestroyObjectImmediate(oldMonster);
        }
    }

    private static GameObject InstantiatePrefab(string path, Transform parent)
    {
        GameObject prefab = AssetDatabase.LoadAssetAtPath<GameObject>(path);
        if (!prefab) throw new System.InvalidOperationException("Prefab not found: " + path);
        GameObject instance = (GameObject)PrefabUtility.InstantiatePrefab(prefab, parent);
        Undo.RegisterCreatedObjectUndo(instance, "Instantiate " + prefab.name);
        return instance;
    }

    private static void CopyTransform(Transform source, Transform destination)
    {
        destination.SetPositionAndRotation(source.position, source.rotation);
        destination.localScale = source.localScale;
    }

    private static void ConfigureWeapon(Transform hand, string name, float scale)
    {
        Transform weapon = hand.Find(name);
        if (!weapon) return;
        weapon.localScale = Vector3.one * scale;
    }

    private static void SetHierarchy(GameObject root, int layer, string tag)
    {
        foreach (Transform child in root.GetComponentsInChildren<Transform>(true))
        {
            child.gameObject.layer = layer;
            child.gameObject.tag = tag;
        }
    }

    private static T FindComponent<T>(GameObject root, string path) where T : Component
    {
        Transform target = root.transform.Find(path);
        return target ? target.GetComponent<T>() : null;
    }

    private static void CopyComponent<T>(GameObject source, GameObject destination) where T : Component
    {
        T component = source.GetComponent<T>();
        if (!component) return;
        UnityEditorInternal.ComponentUtility.CopyComponent(component);
        UnityEditorInternal.ComponentUtility.PasteComponentAsNew(destination);
    }

    private static void SetReference(Object target, string field, Object value)
    {
        SerializedObject serialized = new SerializedObject(target);
        SerializedProperty property = serialized.FindProperty(field);
        if (property == null) throw new System.InvalidOperationException("Missing field: " + field);
        property.objectReferenceValue = value;
        serialized.ApplyModifiedPropertiesWithoutUndo();
    }

    private static void SetPieces(Object target, GameObject root)
    {
        Rigidbody2D[] bodies = root.GetComponentsInChildren<Rigidbody2D>(true)
            .Where(body => body.transform != root.transform)
            .ToArray();
        SerializedObject serialized = new SerializedObject(target);
        SerializedProperty pieces = serialized.FindProperty("pieces");
        pieces.arraySize = bodies.Length;
        for (int i = 0; i < bodies.Length; i++)
        {
            SerializedProperty piece = pieces.GetArrayElementAtIndex(i);
            piece.FindPropertyRelative("Joint").objectReferenceValue = bodies[i].GetComponent<Joint2D>();
            piece.FindPropertyRelative("Rb").objectReferenceValue = bodies[i];
        }
        serialized.ApplyModifiedPropertiesWithoutUndo();
    }
}

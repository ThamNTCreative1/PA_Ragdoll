using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using OBP.FreezeBrainrot;

// Adds the gameplay components to the Player prefab and places/wires Player, GameManager and camera in the open scene.
// Safe to run repeatedly; FreezeLevelBuilder calls Wire() after rebuilding the level.
public static class FreezeGameplaySetup
{
    const string PlayerPrefab = "Assets/01 RESOURCES/Player/Player.prefab";
    const string IceMaterial = "Assets/01 RESOURCES/Freeze/IceShell.mat";

    [MenuItem("Tools/Freeze Brainrot/Setup Gameplay")]
    public static string Setup()
    {
        SetupPlayerPrefab();
        return Wire();
    }

    static void SetupPlayerPrefab()
    {
        Mesh beamMesh = FreezeGunBuilder.BuildBeamMesh();
        GameObject root = PrefabUtility.LoadPrefabContents(PlayerPrefab);
        try
        {
            Animator animator = root.GetComponentInChildren<Animator>();

            // Camera follow point at chest height; CameraManager tracks it.
            Transform follow = root.transform.Find("CameraFollow");
            if (follow == null) { follow = new GameObject("CameraFollow").transform; follow.SetParent(root.transform, false); }
            follow.localPosition = new Vector3(0f, 1.2f, 0f);
            follow.localRotation = Quaternion.identity;
            PlayerController pc = root.GetComponent<PlayerController>();
            if (pc == null) pc = root.AddComponent<PlayerController>();
            pc.animator = animator;

            Transform beam = root.transform.Find("FreezeBeam");
            if (beam == null)
            {
                GameObject b = new GameObject("FreezeBeam", typeof(MeshFilter), typeof(MeshRenderer));
                b.transform.SetParent(root.transform, false);
                beam = b.transform;
            }
            beam.GetComponent<MeshFilter>().sharedMesh = beamMesh;
            MeshRenderer br = beam.GetComponent<MeshRenderer>();
            br.sharedMaterial = AssetDatabase.LoadAssetAtPath<Material>(IceMaterial);
            br.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off; br.receiveShadows = false;
            beam.gameObject.SetActive(false);

            Transform muzzle = null;
            foreach (Transform t in root.GetComponentsInChildren<Transform>(true)) if (t.name == "Muzzle" && t.parent != null && t.parent.name == "FreezeGun") muzzle = t;

            FreezeGun gun = root.GetComponent<FreezeGun>();
            if (gun == null) gun = root.AddComponent<FreezeGun>();
            gun.player = pc; gun.animator = animator; gun.muzzle = muzzle; gun.beam = beam; gun.beamWidth = 0.3f;
            gun.gunModel = muzzle != null ? muzzle.parent : null;
            foreach (Transform t in root.GetComponentsInChildren<Transform>(true)) if (t.name == "body2") gun.spine = t;

            PrefabUtility.SaveAsPrefabAsset(root, PlayerPrefab);
        }
        finally { PrefabUtility.UnloadPrefabContents(root); }
    }

    public static string Wire()
    {
        GameObject level = GameObject.Find("Level");
        if (level == null) return "No Level in scene; run Tools/Freeze Brainrot/Build Level first.";
        Transform spawn = level.transform.Find("SpawnPoint");

        PlayerController player = Object.FindFirstObjectByType<PlayerController>();
        if (player == null)
        {
            GameObject prefab = AssetDatabase.LoadAssetAtPath<GameObject>(PlayerPrefab);
            if (prefab == null || prefab.GetComponent<PlayerController>() == null) return "Player prefab not set up; run Tools/Freeze Brainrot/Setup Gameplay.";
            GameObject p = (GameObject)PrefabUtility.InstantiatePrefab(prefab);
            p.name = "Player";
            player = p.GetComponent<PlayerController>();
        }
        player.transform.SetPositionAndRotation(spawn.position, spawn.rotation);
        FreezeGun gun = player.GetComponent<FreezeGun>();

        GameObject gameplay = GameObject.Find("Gameplay");
        if (gameplay == null) gameplay = new GameObject("Gameplay");
        GameManager gm = gameplay.GetComponent<GameManager>();
        if (gm == null) gm = gameplay.AddComponent<GameManager>();
        gm.player = player; gm.gun = gun; gm.spawnPoint = spawn;
        gm.wave = level.GetComponentInChildren<WaveHazard>();
        gm.monstersRoot = level.transform.Find("Monsters");
        if (gun != null) gun.game = gm;

        KeyboardInput keys = gameplay.GetComponent<KeyboardInput>();
        if (keys == null) keys = gameplay.AddComponent<KeyboardInput>();
        keys.player = player; keys.gun = gun;

        Camera cam = Camera.main;
        if (cam != null)
        {
            // Rig: CameraManager (CameraController) -> Yaw -> Pitch -> Main Camera, following Player/CameraFollow.
            GameObject manager = GameObject.Find("CameraManager");
            if (manager == null) manager = new GameObject("CameraManager");
            Transform yaw = manager.transform.Find("Yaw");
            if (yaw == null) { yaw = new GameObject("Yaw").transform; yaw.SetParent(manager.transform, false); }
            Transform pitch = yaw.Find("Pitch");
            if (pitch == null) { pitch = new GameObject("Pitch").transform; pitch.SetParent(yaw, false); }
            cam.transform.SetParent(pitch, false);

            CameraController controller = manager.GetComponent<CameraController>();
            if (controller == null) controller = manager.AddComponent<CameraController>();
            controller.followTarget = player.transform.Find("CameraFollow");
            controller.yawPivot = yaw; controller.pitchPivot = pitch; controller.cam = cam;

            // Place the rig at its default pose so the scene view matches what the game shows on start.
            manager.transform.position = controller.followTarget.position;
            yaw.localRotation = Quaternion.Euler(0f, controller.defaultYaw, 0f);
            pitch.localRotation = Quaternion.Euler(controller.defaultPitch, 0f, 0f);
            cam.transform.localPosition = controller.landscapeOffset;
            cam.transform.localRotation = Quaternion.identity;

            player.cameraTransform = yaw;
            gm.cameraController = controller;
            CameraDragArea drag = Object.FindFirstObjectByType<CameraDragArea>(FindObjectsInactive.Include);
            if (drag != null) { drag.cameraController = controller; EditorUtility.SetDirty(drag); }
            if (gun != null) gun.aimCamera = cam;
            Crosshair crosshair = Object.FindFirstObjectByType<Crosshair>(FindObjectsInactive.Include);
            if (crosshair != null) { crosshair.gun = gun; EditorUtility.SetDirty(crosshair); }

            cam.clearFlags = CameraClearFlags.SolidColor;
            cam.backgroundColor = new Color(0.55f, 0.82f, 0.98f);
            cam.nearClipPlane = 0.3f; cam.farClipPlane = 200f;
        }

        // Player and gun live on a prefab instance: record the scene references as overrides so they are saved.
        PrefabUtility.RecordPrefabInstancePropertyModifications(player);
        if (gun != null) PrefabUtility.RecordPrefabInstancePropertyModifications(gun);
        EditorSceneManager.MarkSceneDirty(gameplay.scene);
        return "Gameplay wired: player=" + player.name + " wave=" + (gm.wave != null) + " monsters=" + (gm.monstersRoot != null ? gm.monstersRoot.childCount : 0) + " muzzle=" + (gun != null && gun.muzzle != null);
    }
}

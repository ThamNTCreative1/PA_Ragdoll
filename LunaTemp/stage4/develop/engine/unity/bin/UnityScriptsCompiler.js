if ( TRACE ) { TRACE( JSON.parse( '["MelonSandbox.MelonAssets#ParseLayout","MelonSandbox.MelonAssets#Prepare","MelonSandbox.MelonAssets#Sprite","MelonSandbox.MelonAssets#Sound","MelonSandbox.MelonAssets#CharacterPrefab","MelonSandbox.MelonAssets#ToolPrefab","MelonSandbox.MelonAssets#Node","MelonSandbox.MelonAssets#Visual","MelonSandbox.MelonGame#FromPixels","MelonSandbox.MelonGame#IgnoreActiveCollision","MelonSandbox.MelonGame#Dispose","MelonSandbox.MelonGame#init","MelonSandbox.MelonGame#Awake","MelonSandbox.MelonGame#OnDestroy","MelonSandbox.MelonGame#Start","MelonSandbox.MelonGame#Initialize","MelonSandbox.MelonGame#LoadStage","MelonSandbox.MelonGame#BuildStagePreview","MelonSandbox.MelonGame#Spawn","MelonSandbox.MelonGame#Prop","MelonSandbox.MelonGame#CreateTool","MelonSandbox.MelonGame#CanSyringe","MelonSandbox.MelonGame#UseSyringe","MelonSandbox.MelonGame#SyringeRecovery","MelonSandbox.MelonGame#TargetDefeated","MelonSandbox.MelonGame#AdvanceAfter","MelonSandbox.MelonGame#NextTarget","MelonSandbox.MelonGame#GetTool","MelonSandbox.MelonGame#Fire","MelonSandbox.MelonGame#Particles","MelonSandbox.MelonGame#Sound","MelonSandbox.MelonGame#Loop","MelonSandbox.MelonGame#TogglePause","MelonSandbox.MelonGame#ToggleAudio","MelonSandbox.MelonGame#Restart","MelonSandbox.MelonGame#UserInput","MelonSandbox.MelonGame#Update","MelonSandbox.MelonGame#OverUI","MelonSandbox.MelonGame#ReleasePointer","MelonSandbox.MelonGame#FitCamera","MelonSandbox.MelonGame#OnDisable","MelonSandbox.MelonHud#init","MelonSandbox.MelonHud#Build","MelonSandbox.MelonHud#LateUpdate","MelonSandbox.MelonHud#UpdateLayout","MelonSandbox.MelonHud#Label","MelonSandbox.MelonHud#Refresh","MelonSandbox.MelonHud#SetHint","MelonSandbox.MelonHud#HideHint","MelonSandbox.MelonHud#UpdateHint","MelonSandbox.MelonLimb#init","MelonSandbox.MelonLimb#init","MelonSandbox.MelonLimb#CaptureAppearance","MelonSandbox.MelonLimb#BeginDamage","MelonSandbox.MelonLimb#LateUpdate","MelonSandbox.MelonLimb#UpdateDamageCoordinates","MelonSandbox.MelonLimb#Cut","MelonSandbox.MelonLimb#Dissolve","MelonSandbox.MelonLimb#CompleteDissolve","MelonSandbox.MelonLimb#BurnSkin","MelonSandbox.MelonLimb#ShockAppearance","MelonSandbox.MelonLimb#Detach","MelonSandbox.MelonLimb#ResetDamage","MelonSandbox.MelonLimb#OnDestroy","MelonSandbox.MelonLimb#ReleaseDamageMaterial","MelonSandbox.MelonParticle#init","MelonSandbox.MelonParticle#Start","MelonSandbox.MelonParticle#Update","MelonSandbox.MelonProjectile#Trace","MelonSandbox.MelonProjectile#ClipAxis","MelonSandbox.MelonProjectile#init","MelonSandbox.MelonProjectile#Start","MelonSandbox.MelonProjectile#Update","MelonSandbox.MelonRagdoll#init","MelonSandbox.MelonRagdoll#Child","MelonSandbox.MelonRagdoll#SetLegJoint","MelonSandbox.MelonRagdoll#FitLegArtwork","MelonSandbox.MelonRagdoll#StretchArmSegment","MelonSandbox.MelonRagdoll#ConnectArmJoint","MelonSandbox.MelonRagdoll#Head#get","MelonSandbox.MelonRagdoll#Torso#get","MelonSandbox.MelonRagdoll#init","MelonSandbox.MelonRagdoll#Awake","MelonSandbox.MelonRagdoll#GetLimb","MelonSandbox.MelonRagdoll#BuildSprunky","MelonSandbox.MelonRagdoll#ApplySpriteSorting","MelonSandbox.MelonRagdoll#GroundFoot","MelonSandbox.MelonRagdoll#ConfigureLeg","MelonSandbox.MelonRagdoll#PoseSuspendedArm","MelonSandbox.MelonRagdoll#ConfigureInstance","MelonSandbox.MelonRagdoll#Build","MelonSandbox.MelonRagdoll#Joint","MelonSandbox.MelonRagdoll#Support","MelonSandbox.MelonRagdoll#Release","MelonSandbox.MelonRagdoll#ChangeInner","MelonSandbox.MelonRagdoll#BeginParade","MelonSandbox.MelonRagdoll#FixedUpdate","MelonSandbox.MelonRagdoll#Apply","MelonSandbox.MelonRagdoll#Reveal","MelonSandbox.MelonRagdoll#Electrocute","MelonSandbox.MelonRagdoll#Kill","MelonSandbox.MelonStage#init","MelonSandbox.MelonStage#Capture","MelonSandbox.MelonStage#Restore","MelonSandbox.MelonTool#Syringe#get","MelonSandbox.MelonTool#init","MelonSandbox.MelonTool#Awake","MelonSandbox.MelonTool#ResetForStage","MelonSandbox.MelonTool#ConfigurePlacement","MelonSandbox.MelonTool#Grab","MelonSandbox.MelonTool#Drag","MelonSandbox.MelonTool#Drop","MelonSandbox.MelonTool#FixedUpdate","MelonSandbox.MelonTool#Update","MelonSandbox.MelonTool#OnCollisionEnter2D","MelonSandbox.MelonTool#OnCollisionStay2D","MelonSandbox.MelonTool#Contact","Playable.GameManager#init","Playable.GameManager#ReparentEndGameButton","Playable.GameManager#Awake","Playable.GameManager#Start","Playable.GameManager#EndGame","Playable.GameManager#ShowCTA","Playable.GameManager#CountEvent","Playable.GameManager#CountdownEndGame","Playable.GameManager#IECountdownEndGame","Playable.GameManager#CreateSprite"]' ) ); }
/**
 * @version 1.0.9782.20951
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*MelonSandbox.LayoutChild start.*/
    Bridge.define("MelonSandbox.LayoutChild", {
        fields: {
            name: null,
            type: null,
            pic: null,
            x: 0,
            y: 0,
            w: 0,
            h: 0
        }
    });
    /*MelonSandbox.LayoutChild end.*/

    /*MelonSandbox.LayoutDocument start.*/
    Bridge.define("MelonSandbox.LayoutDocument", {
        fields: {
            windows: null
        }
    });
    /*MelonSandbox.LayoutDocument end.*/

    /*MelonSandbox.LayoutNode start.*/
    Bridge.define("MelonSandbox.LayoutNode", {
        fields: {
            name: null,
            type: null,
            pic: null,
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            groups: null
        }
    });
    /*MelonSandbox.LayoutNode end.*/

    /*MelonSandbox.LayoutWindow start.*/
    Bridge.define("MelonSandbox.LayoutWindow", {
        fields: {
            name: null,
            groups: null
        }
    });
    /*MelonSandbox.LayoutWindow end.*/

    /*MelonSandbox.MelonAssets start.*/
    Bridge.define("MelonSandbox.MelonAssets", {
        inherits: [UnityEngine.ScriptableObject],
        statics: {
            methods: {
                /*MelonSandbox.MelonAssets.ParseLayout:static start.*/
                ParseLayout: function (json) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonAssets#ParseLayout", this ); }

                    return Newtonsoft.Json.JsonConvert.DeserializeObject(json, MelonSandbox.LayoutDocument);
                },
                /*MelonSandbox.MelonAssets.ParseLayout:static end.*/


            }
        },
        fields: {
            sprites: null,
            sounds: null,
            originalLayout: null,
            damageMaterial: null,
            uiFont: null,
            characterPrefabs: null,
            toolPrefabs: null,
            spriteMap: null,
            soundMap: null,
            nodes: null
        },
        methods: {
            /*MelonSandbox.MelonAssets.Prepare start.*/
            Prepare: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonAssets#Prepare", this ); }

                var $t, $t1, $t2, $t3;
                if (this.spriteMap != null) {
                    return;
                }
                this.spriteMap = new (System.Collections.Generic.Dictionary$2(System.String,UnityEngine.Sprite)).ctor();
                this.soundMap = new (System.Collections.Generic.Dictionary$2(System.String,UnityEngine.AudioClip)).ctor();
                this.nodes = new (System.Collections.Generic.Dictionary$2(System.String,MelonSandbox.LayoutNode)).ctor();
                $t = Bridge.getEnumerator(this.sprites);
                try {
                    while ($t.moveNext()) {
                        var s = $t.Current;
                        if (UnityEngine.Object.op_Implicit(s)) {
                            this.spriteMap.setItem(s.name, s);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(this.sounds);
                try {
                    while ($t1.moveNext()) {
                        var s1 = $t1.Current;
                        if (UnityEngine.Object.op_Implicit(s1)) {
                            this.soundMap.setItem(s1.name, s1);
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                if (UnityEngine.Object.op_Implicit(this.originalLayout)) {
                    $t2 = Bridge.getEnumerator(MelonSandbox.MelonAssets.ParseLayout(this.originalLayout.text).windows);
                    try {
                        while ($t2.moveNext()) {
                            var w = $t2.Current;
                            $t3 = Bridge.getEnumerator(w.groups);
                            try {
                                while ($t3.moveNext()) {
                                    var n = $t3.Current;
                                    this.nodes.setItem((w.name || "") + "/" + (n.name || ""), n);
                                }
                            } finally {
                                if (Bridge.is($t3, System.IDisposable)) {
                                    $t3.System$IDisposable$Dispose();
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t2, System.IDisposable)) {
                            $t2.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*MelonSandbox.MelonAssets.Prepare end.*/

            /*MelonSandbox.MelonAssets.Sprite start.*/
            Sprite: function (key) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonAssets#Sprite", this ); }

                this.Prepare();
                var s = { };
                return this.spriteMap.tryGetValue(key, s) ? s.v : null;
            },
            /*MelonSandbox.MelonAssets.Sprite end.*/

            /*MelonSandbox.MelonAssets.Sound start.*/
            Sound: function (key) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonAssets#Sound", this ); }

                this.Prepare();
                var s = { };
                return this.soundMap.tryGetValue(key, s) ? s.v : null;
            },
            /*MelonSandbox.MelonAssets.Sound end.*/

            /*MelonSandbox.MelonAssets.CharacterPrefab start.*/
            CharacterPrefab: function (key) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonAssets#CharacterPrefab", this ); }

                var $t;
                if (this.characterPrefabs == null) {
                    return null;
                }
                $t = Bridge.getEnumerator(this.characterPrefabs);
                try {
                    while ($t.moveNext()) {
                        var prefab = $t.Current;
                        if (!UnityEngine.Object.op_Implicit(prefab)) {
                            continue;
                        }
                        var character = prefab.GetComponent(MelonSandbox.MelonRagdoll);
                        if (UnityEngine.Object.op_Implicit(character) && Bridge.referenceEquals(character.skinName, key)) {
                            return prefab;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return null;
            },
            /*MelonSandbox.MelonAssets.CharacterPrefab end.*/

            /*MelonSandbox.MelonAssets.ToolPrefab start.*/
            ToolPrefab: function (kind) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonAssets#ToolPrefab", this ); }

                var $t;
                if (this.toolPrefabs == null) {
                    return null;
                }
                $t = Bridge.getEnumerator(this.toolPrefabs);
                try {
                    while ($t.moveNext()) {
                        var prefab = $t.Current;
                        if (UnityEngine.Object.op_Implicit(prefab) && Bridge.referenceEquals(prefab.name, System.Enum.toString(MelonSandbox.MelonToolKind, kind))) {
                            return prefab;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return null;
            },
            /*MelonSandbox.MelonAssets.ToolPrefab end.*/

            /*MelonSandbox.MelonAssets.Node start.*/
            Node: function (name, $window) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonAssets#Node", this ); }

                if ($window === void 0) { $window = "MSG"; }
                this.Prepare();
                var n = { };
                return this.nodes.tryGetValue(($window || "") + "/" + (name || ""), n) ? n.v : null;
            },
            /*MelonSandbox.MelonAssets.Node end.*/

            /*MelonSandbox.MelonAssets.Visual start.*/
            Visual: function (key, parent, position, size, order) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonAssets#Visual", this ); }

                var go = new UnityEngine.GameObject.$ctor2(key);
                go.transform.SetParent(parent, false);
                go.transform.position = UnityEngine.Vector3.FromVector2(position.$clone());
                var sr = go.AddComponent(UnityEngine.SpriteRenderer);
                sr.sprite = this.Sprite(key);
                sr.sortingOrder = order;
                if (UnityEngine.Object.op_Implicit(sr.sprite) && size.x > 0 && size.y > 0) {
                    go.transform.localScale = new pc.Vec3( size.x / sr.sprite.bounds.halfExtents.$clone().scale( 2 ).x, size.y / sr.sprite.bounds.halfExtents.$clone().scale( 2 ).y, 1 );
                }
                return sr;
            },
            /*MelonSandbox.MelonAssets.Visual end.*/


        }
    });
    /*MelonSandbox.MelonAssets end.*/

    /*MelonSandbox.MelonGame start.*/
    Bridge.define("MelonSandbox.MelonGame", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            },
            methods: {
                /*MelonSandbox.MelonGame.FromPixels:static start.*/
                FromPixels: function (x, y) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#FromPixels", this ); }

                    return new pc.Vec2( (x - 320) / 100.0, (1112 - y) / 100.0 );
                },
                /*MelonSandbox.MelonGame.FromPixels:static end.*/

                /*MelonSandbox.MelonGame.IgnoreActiveCollision:static start.*/
                IgnoreActiveCollision: function (a, b) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#IgnoreActiveCollision", this ); }

                    if (!UnityEngine.Object.op_Implicit(a) || !UnityEngine.Object.op_Implicit(b) || UnityEngine.Component.op_Equality(a, b) || !a.enabled || !b.enabled || !a.gameObject.activeInHierarchy || !b.gameObject.activeInHierarchy) {
                        return;
                    }
                    var bodyA = a.attachedRigidbody;
                    var bodyB = b.attachedRigidbody;
                    if (!UnityEngine.Object.op_Implicit(bodyA) || !UnityEngine.Object.op_Implicit(bodyB) || !bodyA.simulated || !bodyB.simulated) {
                        return;
                    }
                    UnityEngine.Physics2D.IgnoreCollision(a, b);
                },
                /*MelonSandbox.MelonGame.IgnoreActiveCollision:static end.*/

                /*MelonSandbox.MelonGame.Dispose:static start.*/
                Dispose: function (go) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Dispose", this ); }

                    go.SetActive(false);
                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.MonoBehaviour.Destroy(go);
                    } else {
                        UnityEngine.Object.DestroyImmediate(go);
                    }
                },
                /*MelonSandbox.MelonGame.Dispose:static end.*/


            }
        },
        fields: {
            assets: null,
            startingStage: 0,
            gameCamera: null,
            Stage: 0,
            Defeated: 0,
            Paused: false,
            characters: null,
            tools: null,
            world: null,
            hud: null,
            background: null,
            sceneStages: null,
            music: null,
            effects: null,
            loop: null,
            selected: null,
            usedSyringes: null,
            syringeBusy: false,
            lastInput: 0,
            stageGeneration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#init", this ); }

                this.characters = new (System.Collections.Generic.List$1(MelonSandbox.MelonRagdoll)).ctor();
                this.tools = new (System.Collections.Generic.List$1(MelonSandbox.MelonTool)).ctor();
                this.sceneStages = System.Array.init(4, null, MelonSandbox.MelonStage);
                this.usedSyringes = System.Array.init(3, false, System.Boolean);
            }
        },
        methods: {
            /*MelonSandbox.MelonGame.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Awake", this ); }

                MelonSandbox.MelonGame.Instance = this;
            },
            /*MelonSandbox.MelonGame.Awake end.*/

            /*MelonSandbox.MelonGame.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(MelonSandbox.MelonGame.Instance, this)) {
                    MelonSandbox.MelonGame.Instance = null;
                }
            },
            /*MelonSandbox.MelonGame.OnDestroy end.*/

            /*MelonSandbox.MelonGame.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Start", this ); }

                this.Initialize(true);
            },
            /*MelonSandbox.MelonGame.Start end.*/

            /*MelonSandbox.MelonGame.Initialize start.*/
            Initialize: function (runtime) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Initialize", this ); }

                if (!UnityEngine.Object.op_Implicit(this.assets)) {
                    this.assets = UnityEngine.Resources.Load(MelonSandbox.MelonAssets, "MelonAssets");
                }
                if (!UnityEngine.Object.op_Implicit(this.assets)) {
                    return;
                }
                this.assets.Prepare();
                if (!UnityEngine.Object.op_Implicit(this.gameCamera)) {
                    return;
                }
                if (runtime) {
                    UnityEngine.Application.runInBackground = true;
                    UnityEngine.Time.timeScale = 1;
                    UnityEngine.Physics2D.gravity = new pc.Vec2( 0, -20 );
                    this.music = this.gameObject.AddComponent(UnityEngine.AudioSource);
                    this.music.loop = true;
                    this.music.clip = this.assets.Sound("music");
                    this.music.volume = 0.25;
                    this.effects = this.gameObject.AddComponent(UnityEngine.AudioSource);
                    this.effects.volume = 0.7;
                    this.loop = this.gameObject.AddComponent(UnityEngine.AudioSource);
                    this.loop.loop = true;
                    this.loop.volume = 0.4;
                }
                var endGameManager = this.GetComponent(Playable.GameManager);
                if (UnityEngine.Object.op_Implicit(endGameManager)) {
                    endGameManager.ReparentEndGameButton(this.transform);
                }
                if (UnityEngine.Object.op_Implicit(this.hud)) {
                    MelonSandbox.MelonGame.Dispose(this.hud.gameObject);
                }
                this.hud = new UnityEngine.GameObject.$ctor2("Melon HUD").AddComponent(MelonSandbox.MelonHud);
                this.hud.transform.SetParent(this.transform, false);
                this.hud.Build(this);
                if (UnityEngine.Object.op_Implicit(endGameManager)) {
                    endGameManager.ReparentEndGameButton(this.hud.transform);
                }
                this.LoadStage(this.startingStage);
            },
            /*MelonSandbox.MelonGame.Initialize end.*/

            /*MelonSandbox.MelonGame.LoadStage start.*/
            LoadStage: function (stage) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#LoadStage", this ); }

                var $t, $t1, $t2, $t3;
                if (this.sceneStages == null || this.sceneStages.length !== 4 || !UnityEngine.Object.op_Implicit(this.sceneStages[0])) {
                    if (UnityEngine.Application.isPlaying) {
                        throw new System.InvalidOperationException.$ctor1("Prepare all four scene stages in the Editor before playing.");
                    }
                    this.BuildStagePreview(stage);
                    return;
                }
                this.StopAllCoroutines();
                this.stageGeneration = (this.stageGeneration + 1) | 0;
                this.ReleasePointer();
                this.Loop(null);
                this.Paused = false;
                UnityEngine.Time.timeScale = 1;
                this.Stage = Math.max(0, Math.min(stage, 3));
                this.Defeated = 0;
                this.syringeBusy = false;
                for (var i = 0; i < 3; i = (i + 1) | 0) {
                    this.usedSyringes[i] = false;
                }
                $t = Bridge.getEnumerator(this.sceneStages);
                try {
                    while ($t.moveNext()) {
                        var entry = $t.Current;
                        entry.Capture();
                        entry.gameObject.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                var current = this.sceneStages[this.Stage];
                this.world = current.transform;
                this.background = current.background;
                this.characters.clear();
                this.characters.AddRange(current.characters);
                this.tools.clear();
                this.tools.AddRange(current.tools);
                current.Restore(this);
                current.gameObject.SetActive(true);
                // Luna can create the serialized hinges before body rotations are restored.
                // Rebind after activation to establish the reference angle from the final pose.
                $t1 = Bridge.getEnumerator(current.GetComponentsInChildren(UnityEngine.HingeJoint2D));
                try {
                    while ($t1.moveNext()) {
                        var hinge = $t1.Current;
                        if (!hinge.enabled || !UnityEngine.Object.op_Implicit(hinge.connectedBody)) {
                            continue;
                        }
                        var connected = hinge.connectedBody;
                        hinge.connectedBody = null;
                        hinge.connectedBody = connected;
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                // IgnoreCollision must be applied after the preplaced colliders are active.
                for (var i1 = 0; i1 < this.characters.Count; i1 = (i1 + 1) | 0) {
                    var own = this.characters.getItem(i1).GetComponentsInChildren(UnityEngine.Collider2D);
                    for (var a = 0; a < own.length; a = (a + 1) | 0) {
                        for (var b = (a + 1) | 0; b < own.length; b = (b + 1) | 0) {
                            MelonSandbox.MelonGame.IgnoreActiveCollision(own[a], own[b]);
                        }
                    }
                    for (var j = 0; j < i1; j = (j + 1) | 0) {
                        $t2 = Bridge.getEnumerator(own);
                        try {
                            while ($t2.moveNext()) {
                                var a1 = $t2.Current;
                                $t3 = Bridge.getEnumerator(this.characters.getItem(j).GetComponentsInChildren(UnityEngine.Collider2D));
                                try {
                                    while ($t3.moveNext()) {
                                        var b1 = $t3.Current;
                                        MelonSandbox.MelonGame.IgnoreActiveCollision(a1, b1);
                                    }
                                } finally {
                                    if (Bridge.is($t3, System.IDisposable)) {
                                        $t3.System$IDisposable$Dispose();
                                    }
                                }
                            }
                        } finally {
                            if (Bridge.is($t2, System.IDisposable)) {
                                $t2.System$IDisposable$Dispose();
                            }
                        }
                    }
                    if (this.Stage === 3) {
                        this.characters.getItem(i1).BeginParade();
                    }
                }
                // Show the syringe/saw/rifle tutorial immediately when entering these stages.
                this.lastInput = UnityEngine.Time.unscaledTime - (this.Stage < 3 ? 5.0 : 0.0);
                if (UnityEngine.Object.op_Implicit(this.hud)) {
                    this.hud.Refresh();
                }
                this.FitCamera();
            },
            /*MelonSandbox.MelonGame.LoadStage end.*/

            /*MelonSandbox.MelonGame.BuildStagePreview start.*/
            BuildStagePreview: function (stage) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#BuildStagePreview", this ); }

                var $t;
                if (UnityEngine.Application.isPlaying) {
                    this.Paused = false;
                    UnityEngine.Time.timeScale = 1;
                }
                this.StopAllCoroutines();
                this.stageGeneration = (this.stageGeneration + 1) | 0;
                this.ReleasePointer();
                this.Stage = Math.max(0, Math.min(stage, 3));
                this.Defeated = 0;
                this.syringeBusy = false;
                for (var i = 0; i < 3; i = (i + 1) | 0) {
                    this.usedSyringes[i] = false;
                }
                this.characters.clear();
                this.tools.clear();
                if (UnityEngine.Object.op_Implicit(this.world)) {
                    MelonSandbox.MelonGame.Dispose(this.world.gameObject);
                }
                this.world = new UnityEngine.GameObject.$ctor2("Stage " + (((this.Stage + 1) | 0))).transform;
                this.world.SetParent(this.transform, false);
                this.background = this.assets.Visual("main_back", this.world, new pc.Vec2( 1, 7 ), new pc.Vec2( 60, 40 ), -100);
                this.background.name = "Original background";
                for (var i1 = -3; i1 <= 3; i1 = (i1 + 1) | 0) {
                    this.assets.Visual("msg_flr", this.world, new pc.Vec2( i1 * 10.14, -5.07 ), new pc.Vec2( 10.14, 10.14 ), -90);
                }
                var ground = new UnityEngine.GameObject.$ctor2("Ground");
                ground.transform.SetParent(this.world);
                ground.transform.position = new pc.Vec3( 0, -0.24, 0 );
                ground.AddComponent(UnityEngine.BoxCollider2D).size = new pc.Vec2( 200, 0.48 );
                if (this.Stage === 0) {
                    for (var i2 = 0; i2 < 4; i2 = (i2 + 1) | 0) {
                        this.assets.Visual("msg_stolb", this.world, MelonSandbox.MelonGame.FromPixels(((-50 + Bridge.Int.mul(250, i2)) | 0), 679.5), new pc.Vec2( 1.12, 8.17 ), -20);
                    }
                    this.Spawn("Sprunky_21", new pc.Vec2( -50, 0 ), true);
                    this.Spawn("Sprunky_20", new pc.Vec2( 200, 0 ), true);
                    this.Spawn("Sprunky_33", new pc.Vec2( 450, 0 ), true);
                } else if (this.Stage === 1) {
                    var skins = System.Array.init([
                        "Sprunky_22", 
                        "Sprunky_11", 
                        "Sprunky_32", 
                        "Sprunky_12"
                    ], System.String);
                    for (var i3 = 0; i3 < skins.length; i3 = (i3 + 1) | 0) {
                        this.Spawn(skins[i3], new pc.Vec2( ((-200 + Bridge.Int.mul(i3, 200)) | 0), 0 ), false);
                    }
                    this.CreateTool(MelonSandbox.MelonToolKind.Saw, MelonSandbox.MelonGame.FromPixels(-400, 600));
                    this.CreateTool(MelonSandbox.MelonToolKind.Shock, MelonSandbox.MelonGame.FromPixels(900, 800));
                } else if (this.Stage === 2) {
                    var skins1 = System.Array.init([
                        "Sprunky_22", 
                        "Sprunky_9", 
                        "Sprunky_31", 
                        "Sprunky_13", 
                        "Sprunky_19", 
                        "Sprunky_3", 
                        "Sprunky_21"
                    ], System.String);
                    for (var i4 = 0; i4 < skins1.length; i4 = (i4 + 1) | 0) {
                        var c = this.Spawn(skins1[i4], new pc.Vec2( ((-200 + Bridge.Int.mul((i4 % 4), 150)) | 0), i4 >= 4 ? -1045 : 0 ), false);
                        c.targetGroup = i4 >= 4 ? 1 : 0;
                    }
                    var names = function (_o1) {
                            _o1.add("cd", "cnd");
                            _o1.add("n1", "no1");
                            _o1.add("n2", "no2");
                            _o1.add("s", "stol");
                            _o1.add("v", "vert");
                            _o1.add("h", "hor");
                            _o1.add("b", "big");
                            _o1.add("m", "melon");
                            _o1.add("cn", "can");
                            _o1.add("c", "chair");
                            _o1.add("a", "arm");
                            return _o1;
                        }(new (System.Collections.Generic.Dictionary$2(System.String,System.String)).ctor());
                    $t = Bridge.getEnumerator(this.assets.Node("level_0").groups);
                    try {
                        while ($t.moveNext()) {
                            var n = $t.Current;
                            var key = { };
                            if (names.tryGetValue(n.name, key)) {
                                this.Prop(key.v, MelonSandbox.MelonGame.FromPixels(n.x + n.w / 2 - 20, n.y + n.h / 2), Bridge.referenceEquals(n.name, "v") || Bridge.referenceEquals(n.name, "h") || Bridge.referenceEquals(n.name, "b"));
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    this.CreateTool(MelonSandbox.MelonToolKind.Flame, MelonSandbox.MelonGame.FromPixels(-300, 800));
                    this.CreateTool(MelonSandbox.MelonToolKind.Rifle, MelonSandbox.MelonGame.FromPixels(730, -100));
                } else {
                    var parade = System.Array.init([
                        "Sprunky_5", 
                        "Sprunky_9", 
                        "Sprunky_21", 
                        "Sprunky_22", 
                        "Sprunky_19", 
                        "Sprunky_3", 
                        "Sprunky_4"
                    ], System.String);
                    for (var i5 = 0; i5 < parade.length; i5 = (i5 + 1) | 0) {
                        this.Spawn(parade[i5], new pc.Vec2( Bridge.Int.mul(-500, (((((parade.length - 1) | 0) - i5) | 0))), 0 ), false).BeginParade();
                    }
                }
                this.lastInput = UnityEngine.Time.unscaledTime;
                if (UnityEngine.Object.op_Implicit(this.hud)) {
                    this.hud.Refresh();
                }
                this.FitCamera();
            },
            /*MelonSandbox.MelonGame.BuildStagePreview end.*/

            /*MelonSandbox.MelonGame.Spawn start.*/
            Spawn: function (skin, offset, suspended) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Spawn", this ); }

                var $t, $t1, $t2;
                var c;
                var sprunky = System.String.startsWith(skin, "Sprunky_");
                var prefab = sprunky ? UnityEngine.Resources.Load(UnityEngine.GameObject, "ragdollprefabs/" + (skin || "")) : UnityEngine.Application.isPlaying ? this.assets.CharacterPrefab(skin) : null;
                if (sprunky) {
                    if (!UnityEngine.Object.op_Implicit(prefab)) {
                        throw new System.InvalidOperationException.$ctor1("Missing ragdoll prefab: " + (skin || ""));
                    }
                    var staging = new UnityEngine.GameObject.$ctor2("Ragdoll setup");
                    staging.SetActive(false);
                    staging.transform.SetParent(this.world, false);
                    var go = UnityEngine.Object.Instantiate(UnityEngine.GameObject, prefab, staging.transform);
                    go.name = skin;
                    c = go.AddComponent(MelonSandbox.MelonRagdoll);
                    c.BuildSprunky(this, offset, suspended);
                    go.transform.SetParent(this.world, true);
                    MelonSandbox.MelonGame.Dispose(staging);
                } else if (UnityEngine.Object.op_Implicit(prefab)) {
                    var go1 = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, prefab, new pc.Vec3( offset.x / 100, -offset.y / 100, 0 ), pc.Quat.IDENTITY.clone(), this.world);
                    go1.name = (System.String.trimEnd(skin, [95]) || "") + " ragdoll";
                    c = go1.GetComponent(MelonSandbox.MelonRagdoll);
                    c.ConfigureInstance(this, offset, suspended, this.Stage === 0 ? "sk_" : "bsk_");
                } else {
                    var go2 = new UnityEngine.GameObject.$ctor2((System.String.trimEnd(skin, [95]) || "") + " ragdoll");
                    go2.transform.SetParent(this.world, false);
                    c = go2.AddComponent(MelonSandbox.MelonRagdoll);
                    c.Build(this, skin, offset, suspended, this.Stage === 0 ? "sk_" : "bsk_");
                }
                // Original characters do not collide with one another, only the tools and scenery.
                $t = Bridge.getEnumerator(this.characters);
                try {
                    while ($t.moveNext()) {
                        var old = $t.Current;
                        $t1 = Bridge.getEnumerator(old.GetComponentsInChildren(UnityEngine.Collider2D));
                        try {
                            while ($t1.moveNext()) {
                                var a = $t1.Current;
                                $t2 = Bridge.getEnumerator(c.GetComponentsInChildren(UnityEngine.Collider2D));
                                try {
                                    while ($t2.moveNext()) {
                                        var b = $t2.Current;
                                        MelonSandbox.MelonGame.IgnoreActiveCollision(a, b);
                                    }
                                } finally {
                                    if (Bridge.is($t2, System.IDisposable)) {
                                        $t2.System$IDisposable$Dispose();
                                    }
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.characters.add(c);
                return c;
            },
            /*MelonSandbox.MelonGame.Spawn end.*/

            /*MelonSandbox.MelonGame.Prop start.*/
            Prop: function (key, position, isStatic) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Prop", this ); }

                var n = this.assets.Node(key);
                var sr = this.assets.Visual(n.pic, this.world, position, new pc.Vec2( n.w, n.h ).scale( 1.0 / ( 100 ) ), -5);
                var c = sr.gameObject.AddComponent(UnityEngine.BoxCollider2D);
                c.size = UnityEngine.Vector2.FromVector3(sr.sprite.bounds.halfExtents.$clone().scale( 2 ).$clone());
                if (!isStatic) {
                    var rb = sr.gameObject.AddComponent(UnityEngine.Rigidbody2D);
                    rb.mass = 0.5;
                }
            },
            /*MelonSandbox.MelonGame.Prop end.*/

            /*MelonSandbox.MelonGame.CreateTool start.*/
            CreateTool: function (kind, point) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#CreateTool", this ); }

                // Avoid the recursive lazy prefab proxy in the exported asset catalog.
                var prefab = null;
                if (UnityEngine.Object.op_Implicit(prefab)) {
                    var instance = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, prefab, UnityEngine.Vector3.FromVector2(point), pc.Quat.IDENTITY.clone(), this.world);
                    var configured = instance.GetComponent(MelonSandbox.MelonTool);
                    configured.game = this;
                    configured.ConfigurePlacement();
                    this.tools.add(configured);
                    return configured;
                }
                var go = new UnityEngine.GameObject.$ctor2(System.Enum.toString(MelonSandbox.MelonToolKind, kind));
                go.transform.SetParent(this.world, false);
                go.transform.position = UnityEngine.Vector3.FromVector2(point.$clone());
                var tool = go.AddComponent(MelonSandbox.MelonTool);
                tool.game = this;
                tool.kind = kind;
                tool.body = go.AddComponent(UnityEngine.Rigidbody2D);
                tool.body.mass = 1;
                tool.body.linearDamping = 0.7;
                tool.body.angularDamping = 2;
                tool.body.collisionDetectionMode = UnityEngine.CollisionDetectionMode2D.Continuous;
                if (kind === MelonSandbox.MelonToolKind.Saw) {
                    this.assets.Visual("msg_ruk", go.transform, point, new pc.Vec2( 2.15, 1.47 ), 60);
                    tool.blade = this.assets.Visual("msg_les_0", go.transform, point.$clone().add( new pc.Vec2( 1.85, 0.25 ) ), new pc.Vec2( 2.27, 0.81 ), 59);
                    var box = go.AddComponent(UnityEngine.BoxCollider2D);
                    box.offset = new pc.Vec2( 1.85, 0.25 );
                    box.size = new pc.Vec2( 2.17, 0.4 );
                } else {
                    var key = kind <= MelonSandbox.MelonToolKind.SyringeCut ? "spring_" + kind : kind === MelonSandbox.MelonToolKind.Shock ? "shok" : kind === MelonSandbox.MelonToolKind.Flame ? "fire" : "rifle";
                    var n = this.assets.Node(key);
                    this.assets.Visual(n.pic, go.transform, point, new pc.Vec2( n.w, n.h ).scale( 1.0 / ( 100 ) ), 60);
                    go.AddComponent(UnityEngine.BoxCollider2D).size = new pc.Vec2( n.w, n.h ).scale( 1.0 / ( 100 ) ).scale( 0.85 );
                }
                if (tool.Syringe) {
                    tool.body.gravityScale = 0;
                }
                tool.ConfigurePlacement();
                this.tools.add(tool);
                return tool;
            },
            /*MelonSandbox.MelonGame.CreateTool end.*/

            /*MelonSandbox.MelonGame.CanSyringe start.*/
            CanSyringe: function (i) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#CanSyringe", this ); }

                return this.Stage === 0 && !this.syringeBusy && !this.usedSyringes[i];
            },
            /*MelonSandbox.MelonGame.CanSyringe end.*/

            /*MelonSandbox.MelonGame.UseSyringe start.*/
            UseSyringe: function (i) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#UseSyringe", this ); }

                var $t, $t1;
                if (i < 0 || i > 2 || !this.CanSyringe(i)) {
                    return false;
                }
                this.UserInput();
                this.syringeBusy = true;
                this.usedSyringes[i] = true;
                var target = this.characters.getItem(i);
                var aim = target.Torso.body.position.$clone();
                var origin = aim.$clone().add( (i === 0 ? new pc.Vec2( -6, 1 ) : i === 1 ? new pc.Vec2( 0, 5 ) : new pc.Vec2( 6, 2 )) );
                var tool = this.CreateTool(i, origin);
                tool.intendedTarget = target;
                var direction = (aim.$clone().sub( origin )).clone().normalize().$clone();
                // Syringe artwork points along local -X (needle on the left).
                tool.body.rotation = Math.atan2(direction.y, direction.x) * UnityEngine.Mathf.Rad2Deg + 180.0;
                tool.body.linearVelocity = direction.$clone().scale( 15 );
                $t = Bridge.getEnumerator(this.characters);
                try {
                    while ($t.moveNext()) {
                        var c = $t.Current;
                        $t1 = Bridge.getEnumerator(c.GetComponentsInChildren(UnityEngine.Collider2D));
                        try {
                            while ($t1.moveNext()) {
                                var collider = $t1.Current;
                                if (UnityEngine.MonoBehaviour.op_Inequality(c, target) || UnityEngine.GameObject.op_Inequality(collider.gameObject, target.Torso.gameObject)) {
                                    MelonSandbox.MelonGame.IgnoreActiveCollision(collider, tool.GetComponent(UnityEngine.Collider2D));
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.Sound("bita");
                this.hud.Refresh();
                this.StartCoroutine$1(this.SyringeRecovery(tool, i, this.stageGeneration));
                return true;
            },
            /*MelonSandbox.MelonGame.UseSyringe end.*/

            /*MelonSandbox.MelonGame.SyringeRecovery start.*/
            SyringeRecovery: function (tool, index, generation) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#SyringeRecovery", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(4);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // A miss must leave a retryable interaction, rather than trapping progression.
                                        if (generation === this.stageGeneration && UnityEngine.Object.op_Implicit(tool) && !tool.used && !this.characters.getItem(index).dead) {
                                            this.tools.remove(tool);
                                            UnityEngine.MonoBehaviour.Destroy(tool.gameObject);
                                            this.usedSyringes[index] = false;
                                            this.syringeBusy = false;
                                            this.hud.Refresh();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*MelonSandbox.MelonGame.SyringeRecovery end.*/

            /*MelonSandbox.MelonGame.TargetDefeated start.*/
            TargetDefeated: function (target, delay) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#TargetDefeated", this ); }

                this.Defeated = (this.Defeated + 1) | 0;
                if (UnityEngine.Object.op_Implicit(this.hud)) {
                    this.hud.Refresh();
                }
                this.StartCoroutine$1(this.AdvanceAfter(delay, this.stageGeneration));
            },
            /*MelonSandbox.MelonGame.TargetDefeated end.*/

            /*MelonSandbox.MelonGame.AdvanceAfter start.*/
            AdvanceAfter: function (delay, generation) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#AdvanceAfter", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (generation !== this.stageGeneration) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 2: {
                                    return false;
                                }
                                case 3: {
                                    this.syringeBusy = false;
                                        if (this.Defeated >= this.characters.Count && this.Stage < 3) {
                                            this.LoadStage(((this.Stage + 1) | 0));
                                        } else {
                                            this.hud.Refresh();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*MelonSandbox.MelonGame.AdvanceAfter end.*/

            /*MelonSandbox.MelonGame.NextTarget start.*/
            NextTarget: function (group) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#NextTarget", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.characters);
                try {
                    while ($t.moveNext()) {
                        var character = $t.Current;
                        if (UnityEngine.Object.op_Implicit(character) && !character.dead && (group < 0 || character.targetGroup === group)) {
                            return character;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return null;
            },
            /*MelonSandbox.MelonGame.NextTarget end.*/

            /*MelonSandbox.MelonGame.GetTool start.*/
            GetTool: function (kind) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#GetTool", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.tools);
                try {
                    while ($t.moveNext()) {
                        var tool = $t.Current;
                        if (UnityEngine.Object.op_Implicit(tool) && tool.kind === kind) {
                            return tool;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return null;
            },
            /*MelonSandbox.MelonGame.GetTool end.*/

            /*MelonSandbox.MelonGame.Fire start.*/
            Fire: function (source, target) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Fire", this ); }

                var direction = new pc.Vec2( Math.cos(source.body.rotation * UnityEngine.Mathf.Deg2Rad), Math.sin(source.body.rotation * UnityEngine.Mathf.Deg2Rad) );
                var start = source.body.position.$clone().add( direction.$clone().scale( (source.kind === MelonSandbox.MelonToolKind.Rifle ? 2.55 : 2.3) ) );
                var sr = this.assets.Visual(source.kind === MelonSandbox.MelonToolKind.Rifle ? "msg_bullet" : "msg_flame", this.world, start, source.kind === MelonSandbox.MelonToolKind.Rifle ? new pc.Vec2( 0.22, 0.22 ) : new pc.Vec2( 0.3, 0.3 ), 70);
                var p = sr.gameObject.AddComponent(MelonSandbox.MelonProjectile);
                p.game = this;
                p.kind = source.kind;
                p.velocity = direction.$clone().scale( (source.kind === MelonSandbox.MelonToolKind.Rifle ? 40 : 12) );
                if (source.kind === MelonSandbox.MelonToolKind.Rifle) {
                    this.Sound("fire", 0.32);
                    this.Particles("msg_flame", start, 1, new pc.Color( 1, 1, 1, 1 ));
                }
            },
            /*MelonSandbox.MelonGame.Fire end.*/

            /*MelonSandbox.MelonGame.Particles start.*/
            Particles: function (sprite, position, count, color) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Particles", this ); }

                if (!UnityEngine.Object.op_Implicit(this.world) || this.world.GetComponentsInChildren(MelonSandbox.MelonParticle).length > 180) {
                    return;
                }
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var blood = Bridge.referenceEquals(sprite, "msg_blood"), electric = System.String.startsWith(sprite, "msg_el_");
                    var size = blood ? UnityEngine.Random.Range$1(0.06, 0.15) : electric ? UnityEngine.Random.Range$1(0.2, 0.6) : UnityEngine.Random.Range$1(0.3, 0.7);
                    var sr = this.assets.Visual(sprite, this.world, position.$clone().add( UnityEngine.Random.insideUnitCircle.$clone().scale( 0.25 ) ), pc.Vec2.ONE.clone().scale( size ), 80);
                    sr.color = color.$clone();
                    sr.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, UnityEngine.Random.Range(0, 360) );
                    var p = sr.gameObject.AddComponent(MelonSandbox.MelonParticle);
                    p.velocity = UnityEngine.Random.insideUnitCircle.$clone().scale( (blood ? 4 : 1) );
                    p.gravity = blood ? 8 : -2;
                    p.lifetime = electric ? 0.2 : UnityEngine.Random.Range$1(0.5, 1.1);
                    p.grow = !blood;
                }
            },
            /*MelonSandbox.MelonGame.Particles end.*/

            /*MelonSandbox.MelonGame.Sound start.*/
            Sound: function (name, volume) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Sound", this ); }

                if (volume === void 0) { volume = 1.0; }
                if (UnityEngine.Object.op_Implicit(this.effects) && UnityEngine.Object.op_Implicit(this.assets.Sound(name))) {
                    this.effects.PlayOneShot$1(this.assets.Sound(name), volume);
                }
            },
            /*MelonSandbox.MelonGame.Sound end.*/

            /*MelonSandbox.MelonGame.Loop start.*/
            Loop: function (name) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Loop", this ); }

                if (!UnityEngine.Object.op_Implicit(this.loop)) {
                    return;
                }
                this.loop.Stop();
                this.loop.clip = System.String.isNullOrEmpty(name) ? null : this.assets.Sound(name);
                if (UnityEngine.Object.op_Implicit(this.loop.clip)) {
                    this.loop.Play();
                }
            },
            /*MelonSandbox.MelonGame.Loop end.*/

            /*MelonSandbox.MelonGame.TogglePause start.*/
            TogglePause: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#TogglePause", this ); }

                this.Paused = !this.Paused;
                UnityEngine.Time.timeScale = this.Paused ? 0 : 1;
                if (UnityEngine.Object.op_Implicit(this.hud)) {
                    this.hud.Refresh();
                }
            },
            /*MelonSandbox.MelonGame.TogglePause end.*/

            /*MelonSandbox.MelonGame.ToggleAudio start.*/
            ToggleAudio: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#ToggleAudio", this ); }

                UnityEngine.AudioListener.volume = UnityEngine.AudioListener.volume > 0 ? 0 : 1;
                if (UnityEngine.Object.op_Implicit(this.hud)) {
                    this.hud.Refresh();
                }
            },
            /*MelonSandbox.MelonGame.ToggleAudio end.*/

            /*MelonSandbox.MelonGame.Restart start.*/
            Restart: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Restart", this ); }

                this.Paused = false;
                UnityEngine.Time.timeScale = 1;
                this.LoadStage(0);
            },
            /*MelonSandbox.MelonGame.Restart end.*/

            /*MelonSandbox.MelonGame.UserInput start.*/
            UserInput: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#UserInput", this ); }

                this.lastInput = UnityEngine.Time.unscaledTime;
                if (UnityEngine.Object.op_Implicit(this.music) && !this.music.isPlaying) {
                    this.music.Play();
                }
            },
            /*MelonSandbox.MelonGame.UserInput end.*/

            /*MelonSandbox.MelonGame.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#Update", this ); }

                var $t;
                if (!UnityEngine.Object.op_Implicit(this.assets) || !UnityEngine.Object.op_Implicit(this.world)) {
                    return;
                }
                this.FitCamera();
                var screen = pc.Vec2.ZERO.clone();
                var down = false, held = false, up = false;
                screen = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                down = UnityEngine.Input.GetMouseButtonDown(0);
                held = UnityEngine.Input.GetMouseButton(0);
                up = UnityEngine.Input.GetMouseButtonUp(0);
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.R)) {
                    this.Restart();
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Escape)) {
                    this.TogglePause();
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Alpha1)) {
                    this.UseSyringe(0);
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Alpha2)) {
                    this.UseSyringe(1);
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Alpha3)) {
                    this.UseSyringe(2);
                }
                if (up) {
                    this.ReleasePointer();
                }
                if (!this.Paused) {
                    var point = UnityEngine.Vector2.FromVector3(this.gameCamera.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(screen)));
                    if (down && !this.OverUI(screen)) {
                        this.UserInput();
                        var nearest = 3.40282347E+38;
                        $t = Bridge.getEnumerator(this.tools);
                        try {
                            while ($t.moveNext()) {
                                var t = $t.Current;
                                if (UnityEngine.Object.op_Implicit(t) && !t.Syringe && t.body.position.$clone().sub( point ).length() < nearest) {
                                    nearest = t.body.position.$clone().sub( point ).length();
                                    this.selected = t;
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                        if (UnityEngine.Object.op_Implicit(this.selected)) {
                            this.selected.Grab(point);
                        }
                    }
                    if (held && UnityEngine.Object.op_Implicit(this.selected)) {
                        this.selected.Drag(point);
                        this.lastInput = UnityEngine.Time.unscaledTime;
                    }
                }
                if (UnityEngine.Object.op_Implicit(this.hud)) {
                    this.hud.SetHint(UnityEngine.Time.unscaledTime - this.lastInput > 4, this.selected);
                }
            },
            /*MelonSandbox.MelonGame.Update end.*/

            /*MelonSandbox.MelonGame.OverUI start.*/
            OverUI: function (screen) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#OverUI", this ); }

                var $t;
                if (!UnityEngine.Object.op_Implicit(UnityEngine.EventSystems.EventSystem.current)) {
                    return false;
                }
                var hits = new (System.Collections.Generic.List$1(UnityEngine.EventSystems.RaycastResult)).ctor();
                UnityEngine.EventSystems.EventSystem.current.RaycastAll(($t = new UnityEngine.EventSystems.PointerEventData(UnityEngine.EventSystems.EventSystem.current), $t.position = screen.$clone(), $t), hits);
                return hits.Count > 0;
            },
            /*MelonSandbox.MelonGame.OverUI end.*/

            /*MelonSandbox.MelonGame.ReleasePointer start.*/
            ReleasePointer: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#ReleasePointer", this ); }

                if (UnityEngine.Object.op_Implicit(this.selected)) {
                    this.selected.Drop();
                }
                this.selected = null;
            },
            /*MelonSandbox.MelonGame.ReleasePointer end.*/

            /*MelonSandbox.MelonGame.FitCamera start.*/
            FitCamera: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#FitCamera", this ); }

                if (!UnityEngine.Object.op_Implicit(this.gameCamera)) {
                    return;
                }
                this.gameCamera.orthographic = true;
                var height = this.Stage === 2 ? 12.4 : 6.7;
                var width = this.Stage === 2 ? 15.3 : this.Stage === 3 ? 10 : 9;
                this.gameCamera.orthographicSize = UnityEngine.Mathf.Max(height, width / UnityEngine.Mathf.Max(0.3, this.gameCamera.aspect));
                this.gameCamera.transform.position = new pc.Vec3( this.Stage === 2 ? 2.7 : 0, this.Stage === 2 ? 9.5 : 4.8, -10 );
                this.gameCamera.backgroundColor = new pc.Color( 0.15, 0.22, 0.28, 1 );
                if (UnityEngine.Object.op_Implicit(this.background) && UnityEngine.Object.op_Implicit(this.background.sprite)) {
                    var size = this.background.sprite.bounds.halfExtents.$clone().scale( 2 ).$clone();
                    var scale = UnityEngine.Mathf.Max(this.gameCamera.orthographicSize * 2 / size.y, this.gameCamera.orthographicSize * 2 * this.gameCamera.aspect / size.x);
                    this.background.transform.localScale = new pc.Vec3( scale, scale, 1 );
                    this.background.transform.position = new pc.Vec3( this.gameCamera.transform.position.x, this.gameCamera.transform.position.y, 0 );
                }
            },
            /*MelonSandbox.MelonGame.FitCamera end.*/

            /*MelonSandbox.MelonGame.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonGame#OnDisable", this ); }

                UnityEngine.Time.timeScale = 1;
            },
            /*MelonSandbox.MelonGame.OnDisable end.*/


        }
    });
    /*MelonSandbox.MelonGame end.*/

    /*MelonSandbox.MelonHud start.*/
    Bridge.define("MelonSandbox.MelonHud", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            game: null,
            cards: null,
            icons: null,
            cardText: null,
            finger: null,
            cardRow: null,
            scaler: null,
            layoutWidth: 0,
            layoutHeight: 0,
            canvas: null,
            font: null,
            showHint: false,
            selectedTool: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonHud#init", this ); }

                this.cards = System.Array.init(3, null, UnityEngine.UI.Button);
                this.icons = System.Array.init(3, null, UnityEngine.UI.Image);
                this.cardText = System.Array.init(3, null, UnityEngine.UI.Text);
            }
        },
        methods: {
            /*MelonSandbox.MelonHud.Build start.*/
            Build: function (owner) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonHud#Build", this ); }

                var $t, $t1, $t2, $t3;
                this.game = owner;
                this.font = this.game.assets.uiFont;
                this.canvas = this.gameObject.AddComponent(UnityEngine.Canvas);
                this.canvas.renderMode = UnityEngine.RenderMode.ScreenSpaceOverlay;
                this.canvas.sortingOrder = 100;
                this.scaler = this.gameObject.AddComponent(UnityEngine.UI.CanvasScaler);
                this.scaler.uiScaleMode = UnityEngine.UI.CanvasScaler.ScaleMode.ScaleWithScreenSize;
                this.scaler.matchWidthOrHeight = 0;
                this.gameObject.AddComponent(UnityEngine.UI.GraphicRaycaster);
                if (!UnityEngine.Object.op_Implicit(UnityEngine.EventSystems.EventSystem.current)) {
                    var events = new UnityEngine.GameObject.$ctor2("EventSystem");
                    events.transform.SetParent(this.transform, false);
                    events.AddComponent(UnityEngine.EventSystems.EventSystem);
                    events.AddComponent(UnityEngine.EventSystems.StandaloneInputModule);
                }
                var captions = System.Array.init([
                    "ACID", 
                    "FIRE", 
                    "CUT"
                ], System.String);
                this.cardRow = new UnityEngine.GameObject.$ctor3("Syringe cards", UnityEngine.RectTransform).GetComponent(UnityEngine.RectTransform);
                this.cardRow.SetParent(this.transform, false);
                this.cardRow.anchorMin = ($t = new pc.Vec2( 0.5, 0 ), this.cardRow.anchorMax = $t.$clone(), $t);
                this.cardRow.pivot = new pc.Vec2( 0.5, 0 );
                this.cardRow.sizeDelta = new pc.Vec2( 567, 210 );
                for (var i = 0; i < 3; i = (i + 1) | 0) {
                    var index = { v : i };
                    var b = new UnityEngine.GameObject.$ctor4("Syringe " + i, [UnityEngine.RectTransform, UnityEngine.UI.Image, UnityEngine.UI.Button]);
                    b.transform.SetParent(this.cardRow, false);
                    var rect = b.GetComponent(UnityEngine.RectTransform);
                    rect.anchorMin = ($t1 = new pc.Vec2( 0.5, 0 ), rect.anchorMax = $t1.$clone(), $t1);
                    rect.pivot = new pc.Vec2( 0.5, 0.5 );
                    rect.anchoredPosition = new pc.Vec2( Bridge.Int.mul((((i - 1) | 0)), 198), 105 );
                    rect.sizeDelta = new pc.Vec2( 171, 210 );
                    b.GetComponent(UnityEngine.UI.Image).sprite = this.game.assets.Sprite("main_btn_" + i);
                    this.cards[i] = b.GetComponent(UnityEngine.UI.Button);
                    this.cards[i].onClick.AddListener((function ($me, index) {
                        return Bridge.fn.bind($me, function () {
                            if (this.game.Stage === 3) {
                                if (UnityEngine.Object.op_Implicit(Playable.GameManager.Instance)) {
                                    Playable.GameManager.Instance.EndGame();
                                }
                            } else {
                                this.game.UseSyringe(index.v);
                            }
                        });
                    })(this, index));
                    var icon = new UnityEngine.GameObject.$ctor4("Original icon", [UnityEngine.RectTransform, UnityEngine.UI.Image]);
                    icon.transform.SetParent(b.transform, false);
                    this.icons[i] = icon.GetComponent(UnityEngine.UI.Image);
                    this.icons[i].raycastTarget = false;
                    this.icons[i].preserveAspect = true;
                    var iconRect = icon.GetComponent(UnityEngine.RectTransform);
                    // Luna's runtime RectTransform defaults differ from Unity's; set anchors explicitly.
                    iconRect.anchorMin = ($t2 = new pc.Vec2( 0.5, 0.5 ), iconRect.anchorMax = $t2.$clone(), $t2);
                    iconRect.pivot = new pc.Vec2( 0.5, 0.5 );
                    iconRect.sizeDelta = new pc.Vec2( 111, 154.5 );
                    iconRect.anchoredPosition = new pc.Vec2( 0, 9 );
                    this.cardText[i] = this.Label("Caption", b.transform, new pc.Vec2( 0, -85.5 ), new pc.Vec2( 159, 34.5 ), 21);
                    this.cardText[i].color = new pc.Color( 0.1, 0.15, 0.18, 1 );
                    this.cardText[i].text = captions[i];
                }
                var hint = new UnityEngine.GameObject.$ctor4("Tutorial finger", [UnityEngine.RectTransform, UnityEngine.UI.Image]);
                hint.transform.SetParent(this.transform, false);
                this.finger = hint.GetComponent(UnityEngine.RectTransform);
                this.finger.anchorMin = ($t3 = new pc.Vec2( 0.5, 0.5 ), this.finger.anchorMax = $t3.$clone(), $t3);
                this.finger.pivot = new pc.Vec2( 0.5, 0.5 );
                this.finger.sizeDelta = new pc.Vec2( 66, 81 );
                this.finger.gameObject.SetActive(false);
                var hintImage = hint.GetComponent(UnityEngine.UI.Image);
                hintImage.sprite = this.game.assets.Sprite("main_finger");
                hintImage.raycastTarget = false;
                hintImage.preserveAspect = true;
                this.UpdateLayout();
            },
            /*MelonSandbox.MelonHud.Build end.*/

            /*MelonSandbox.MelonHud.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonHud#LateUpdate", this ); }

                if (UnityEngine.Object.op_Implicit(this.scaler) && (this.layoutWidth !== UnityEngine.Screen.width || this.layoutHeight !== UnityEngine.Screen.height)) {
                    this.UpdateLayout();
                }
                this.UpdateHint();
            },
            /*MelonSandbox.MelonHud.LateUpdate end.*/

            /*MelonSandbox.MelonHud.UpdateLayout start.*/
            UpdateLayout: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonHud#UpdateLayout", this ); }

                this.layoutWidth = UnityEngine.Mathf.Max(1, UnityEngine.Screen.width);
                this.layoutHeight = UnityEngine.Mathf.Max(1, UnityEngine.Screen.height);
                var portrait = this.layoutHeight > this.layoutWidth;
                var designWidth = portrait ? 1080 : 1920;
                this.scaler.referenceResolution = portrait ? new pc.Vec2( 1080, 1920 ) : new pc.Vec2( 1920, 1080 );
                var canvasHeight = designWidth * this.layoutHeight / this.layoutWidth;
                // Keep the row within the viewport, including short landscape windows.
                var rowScale = UnityEngine.Mathf.Min(1, UnityEngine.Mathf.Min((designWidth - 48) / 567, canvasHeight * 0.25 / 210));
                this.cardRow.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( rowScale );
                this.cardRow.anchoredPosition = new pc.Vec2( 0, UnityEngine.Mathf.Min(portrait ? 96 : 48, canvasHeight * 0.06) );
            },
            /*MelonSandbox.MelonHud.UpdateLayout end.*/

            /*MelonSandbox.MelonHud.Label start.*/
            Label: function (name, parent, pos, size, fontSize) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonHud#Label", this ); }

                var $t;
                var go = new UnityEngine.GameObject.$ctor4(name, [UnityEngine.RectTransform, UnityEngine.UI.Text]);
                go.transform.SetParent(parent, false);
                var r = go.GetComponent(UnityEngine.RectTransform);
                r.anchorMin = ($t = new pc.Vec2( 0.5, 0.5 ), r.anchorMax = $t.$clone(), $t);
                r.pivot = new pc.Vec2( 0.5, 0.5 );
                r.anchoredPosition = pos.$clone();
                r.sizeDelta = size.$clone();
                var text = go.GetComponent(UnityEngine.UI.Text);
                text.font = this.font;
                text.fontSize = fontSize;
                text.alignment = UnityEngine.TextAnchor.MiddleCenter;
                text.color = new pc.Color( 1, 1, 1, 1 );
                text.raycastTarget = false;
                return text;
            },
            /*MelonSandbox.MelonHud.Label end.*/

            /*MelonSandbox.MelonHud.Refresh start.*/
            Refresh: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonHud#Refresh", this ); }

                var $t;
                for (var i = 0; i < this.cards.length; i = (i + 1) | 0) {
                    this.cards[i].gameObject.SetActive(this.game.Stage === 0 || this.game.Stage === 3);
                    this.cards[i].interactable = !this.game.Paused && (this.game.Stage === 3 || this.game.CanSyringe(i));
                    this.icons[i].sprite = this.game.assets.Sprite(((this.game.Stage === 3 ? "main_sec_" : "main_spr_") || "") + i);
                    this.cardText[i].text = this.game.Stage === 3 ? "SELECT" : ($t = System.Array.init(["ACID", "FIRE", "CUT"], System.String))[i];
                }
            },
            /*MelonSandbox.MelonHud.Refresh end.*/

            /*MelonSandbox.MelonHud.SetHint start.*/
            SetHint: function (show, selected) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonHud#SetHint", this ); }

                this.showHint = show;
                this.selectedTool = selected;
            },
            /*MelonSandbox.MelonHud.SetHint end.*/

            /*MelonSandbox.MelonHud.HideHint start.*/
            HideHint: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonHud#HideHint", this ); }

                if (UnityEngine.Object.op_Implicit(this.finger) && this.finger.gameObject.activeSelf) {
                    this.finger.gameObject.SetActive(false);
                }
            },
            /*MelonSandbox.MelonHud.HideHint end.*/

            /*MelonSandbox.MelonHud.UpdateHint start.*/
            UpdateHint: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonHud#UpdateHint", this ); }

                if (!UnityEngine.Object.op_Implicit(this.finger) || !UnityEngine.Object.op_Implicit(this.game)) {
                    return;
                }
                if (!this.showHint || UnityEngine.Object.op_Implicit(this.selectedTool) || this.game.Paused) {
                    this.HideHint();
                    return;
                }
                var canvasRect = Bridge.cast(this.transform, UnityEngine.RectTransform);
                var position = new UnityEngine.Vector2();
                if (this.game.Stage === 0 || this.game.Stage === 3) {
                    var index = 0;
                    while (index < this.cards.length && !this.cards[index].interactable) {
                        index = (index + 1) | 0;
                    }
                    if (index === this.cards.length) {
                        this.HideHint();
                        return;
                    }
                    // UI-to-UI conversion needs no screen ray or camera.
                    position = UnityEngine.Vector2.FromVector3(canvasRect.InverseTransformPoint(this.icons[index].transform.position)).sub( canvasRect.rect.center );
                } else {
                    var tool = this.game.GetTool(this.game.Stage === 1 ? MelonSandbox.MelonToolKind.Saw : MelonSandbox.MelonToolKind.Rifle);
                    if (!UnityEngine.Object.op_Implicit(tool) || !tool.gameObject.activeInHierarchy || !UnityEngine.Object.op_Implicit(this.game.gameCamera)) {
                        this.HideHint();
                        return;
                    }
                    var point = this.game.gameCamera.WorldToScreenPoint(tool.transform.position);
                    if (point.z <= 0) {
                        this.HideHint();
                        return;
                    }
                    // ScreenSpaceOverlay: map screen pixels directly into the canvas rectangle.
                    position = new pc.Vec2( (point.x / UnityEngine.Mathf.Max(1, UnityEngine.Screen.width) - 0.5) * canvasRect.rect.width, (point.y / UnityEngine.Mathf.Max(1, UnityEngine.Screen.height) - 0.5) * canvasRect.rect.height );
                }
                position = position.$clone().add( new pc.Vec2( 30, -37.5 ) );
                // Keep the whole pulsing hand visible near screen edges.
                var halfWidth = UnityEngine.Mathf.Max(0, (canvasRect.rect.width - this.finger.sizeDelta.x * 1.03) * 0.5);
                var halfHeight = UnityEngine.Mathf.Max(0, (canvasRect.rect.height - this.finger.sizeDelta.y * 1.03) * 0.5);
                this.finger.anchoredPosition = new pc.Vec2( Math.max(-halfWidth, Math.min(position.x, halfWidth)), Math.max(-halfHeight, Math.min(position.y, halfHeight)) );
                this.finger.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( (0.95 + 0.08 * Math.sin(UnityEngine.Time.unscaledTime * 5)) );
                this.finger.SetAsLastSibling();
                if (!this.finger.gameObject.activeSelf) {
                    this.finger.gameObject.SetActive(true);
                }
            },
            /*MelonSandbox.MelonHud.UpdateHint end.*/


        }
    });
    /*MelonSandbox.MelonHud end.*/

    /*MelonSandbox.MelonLimb start.*/
    Bridge.define("MelonSandbox.MelonLimb", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                HoleNames: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#init", this ); }

                    this.HoleNames = System.Array.init([
                        "_Hole0", 
                        "_Hole1", 
                        "_Hole2", 
                        "_Hole3", 
                        "_Hole4", 
                        "_Hole5", 
                        "_Hole6", 
                        "_Hole7"
                    ], System.String);
                }
            }
        },
        fields: {
            owner: null,
            partName: null,
            body: null,
            skin: null,
            inner: null,
            dimensions: null,
            originalSkinColor: null,
            originalMaterial: null,
            effectMaterial: null,
            nextHole: 0,
            appearanceCaptured: false,
            damageUnavailable: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#init", this ); }

                this.dimensions = new UnityEngine.Vector2();
                this.originalSkinColor = new UnityEngine.Color();
            }
        },
        methods: {
            /*MelonSandbox.MelonLimb.CaptureAppearance start.*/
            CaptureAppearance: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#CaptureAppearance", this ); }

                if (this.appearanceCaptured || !UnityEngine.Object.op_Implicit(this.skin)) {
                    return;
                }
                this.originalSkinColor = this.skin.color.$clone();
                this.originalMaterial = this.skin.sharedMaterial;
                this.appearanceCaptured = true;
            },
            /*MelonSandbox.MelonLimb.CaptureAppearance end.*/

            /*MelonSandbox.MelonLimb.BeginDamage start.*/
            BeginDamage: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#BeginDamage", this ); }

                if (!UnityEngine.Object.op_Implicit(this.skin) || !UnityEngine.Object.op_Implicit(this.skin.sprite) || this.damageUnavailable) {
                    return false;
                }
                this.CaptureAppearance();
                if (!UnityEngine.Object.op_Implicit(this.effectMaterial)) {
                    var template = UnityEngine.Object.op_Implicit(this.owner) && UnityEngine.Object.op_Implicit(this.owner.game) && UnityEngine.Object.op_Implicit(this.owner.game.assets) ? this.owner.game.assets.damageMaterial : null;
                    // Luna's Shader.name wrapper can be null even when the shader is loaded.
                    // Validate the material's required properties instead of its display name.
                    if (!UnityEngine.Object.op_Implicit(template) || !template.HasProperty$1("_DamageRowX") || !template.HasProperty$1("_Hole0") || !template.HasProperty$1("_Dissolve")) {
                        this.damageUnavailable = true;
                        return false;
                    }
                    this.effectMaterial = new UnityEngine.Material.$ctor1(template);
                }
                // Custom sprite shaders need an explicit texture binding in the Luna renderer.
                this.effectMaterial.mainTexture = this.skin.sprite.texture;
                this.skin.sharedMaterial = this.effectMaterial;
                this.UpdateDamageCoordinates();
                return true;
            },
            /*MelonSandbox.MelonLimb.BeginDamage end.*/

            /*MelonSandbox.MelonLimb.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#LateUpdate", this ); }

                if (UnityEngine.Object.op_Implicit(this.effectMaterial) && UnityEngine.Object.op_Implicit(this.skin) && Bridge.referenceEquals(this.skin.sharedMaterial, this.effectMaterial)) {
                    this.UpdateDamageCoordinates();
                }
            },
            /*MelonSandbox.MelonLimb.LateUpdate end.*/

            /*MelonSandbox.MelonLimb.UpdateDamageCoordinates start.*/
            UpdateDamageCoordinates: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#UpdateDamageCoordinates", this ); }

                // Damage uses sprite-local coordinates, independently of atlas texture UVs.
                var bounds = this.skin.sprite.bounds;
                var matrix = this.skin.transform.worldToLocalMatrix.$clone();
                var width = UnityEngine.Mathf.Max(1E-05, bounds.halfExtents.$clone().scale( 2 ).x), height = UnityEngine.Mathf.Max(1E-05, bounds.halfExtents.$clone().scale( 2 ).y);
                var x = matrix.getRow( 0 ).scale( 1.0 / ( width ) );
                x.w -= bounds.min.x / width;
                var y = matrix.getRow( 1 ).scale( 1.0 / ( height ) );
                y.w -= bounds.min.y / height;
                if (this.skin.flipX) {
                    x = new pc.Vec4( -x.x, -x.y, -x.z, 1 - x.w );
                }
                if (this.skin.flipY) {
                    y = new pc.Vec4( -y.x, -y.y, -y.z, 1 - y.w );
                }
                this.effectMaterial.SetVector$1("_DamageRowX", x);
                this.effectMaterial.SetVector$1("_DamageRowY", y);
            },
            /*MelonSandbox.MelonLimb.UpdateDamageCoordinates end.*/

            /*MelonSandbox.MelonLimb.Cut start.*/
            Cut: function (worldPoint, size) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#Cut", this ); }

                if (!UnityEngine.Object.op_Implicit(this.skin)) {
                    return;
                }
                var bounds = this.skin.bounds;
                var nearest = new pc.Vec2( Math.max(bounds.min.x, Math.min(worldPoint.x, bounds.max.x)), Math.max(bounds.min.y, Math.min(worldPoint.y, bounds.max.y)) );
                if (size <= 0 || (nearest.$clone().sub( worldPoint )).lengthSq() > size * size * 0.25 || !this.BeginDamage()) {
                    return;
                }
                var local = this.skin.transform.InverseTransformPoint(UnityEngine.Vector3.FromVector2(worldPoint));
                var spriteBounds = this.skin.sprite.bounds;
                var width = UnityEngine.Mathf.Max(1E-05, spriteBounds.halfExtents.$clone().scale( 2 ).x), height = UnityEngine.Mathf.Max(1E-05, spriteBounds.halfExtents.$clone().scale( 2 ).y);
                var x = (local.x - spriteBounds.min.x) / width, y = (local.y - spriteBounds.min.y) / height;
                if (this.skin.flipX) {
                    x = 1 - x;
                }
                if (this.skin.flipY) {
                    y = 1 - y;
                }
                var matrix = this.skin.transform.worldToLocalMatrix.$clone();
                var rx = size * 0.5 * new pc.Vec2( matrix.e00, matrix.e01 ).length() / width;
                var ry = size * 0.5 * new pc.Vec2( matrix.e10, matrix.e11 ).length() / height;
                this.effectMaterial.SetVector$1(MelonSandbox.MelonLimb.HoleNames[this.nextHole], new pc.Vec4( x, y, rx, ry ));
                this.nextHole = (((this.nextHole + 1) | 0)) % MelonSandbox.MelonLimb.HoleNames.length;
            },
            /*MelonSandbox.MelonLimb.Cut end.*/

            /*MelonSandbox.MelonLimb.Dissolve start.*/
            Dissolve: function (point, radius, fire) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#Dissolve", this ); }

                if (!this.BeginDamage()) {
                    return;
                }
                this.effectMaterial.SetVector$1("_Dissolve", new pc.Vec4( point.x, point.y, UnityEngine.Mathf.Max(0, radius), fire ? 1 : 0 ));
            },
            /*MelonSandbox.MelonLimb.Dissolve end.*/

            /*MelonSandbox.MelonLimb.CompleteDissolve start.*/
            CompleteDissolve: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#CompleteDissolve", this ); }

                if (!UnityEngine.Object.op_Implicit(this.skin)) {
                    return;
                }
                this.CaptureAppearance();
                var color = this.skin.color.$clone();
                color.a = 0;
                this.skin.color = color.$clone();
            },
            /*MelonSandbox.MelonLimb.CompleteDissolve end.*/

            /*MelonSandbox.MelonLimb.BurnSkin start.*/
            BurnSkin: function (progress) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#BurnSkin", this ); }

                if (!UnityEngine.Object.op_Implicit(this.skin)) {
                    return;
                }
                this.CaptureAppearance();
                this.skin.color = pc.Color.lerp( this.originalSkinColor, new pc.Color( 0.08, 0.08, 0.08, this.originalSkinColor.a ), Math.max(0, Math.min(1, progress)) );
            },
            /*MelonSandbox.MelonLimb.BurnSkin end.*/

            /*MelonSandbox.MelonLimb.ShockAppearance start.*/
            ShockAppearance: function (progress, flash) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#ShockAppearance", this ); }

                if (!UnityEngine.Object.op_Implicit(this.skin)) {
                    return;
                }
                this.CaptureAppearance();
                var color = pc.Color.lerp( this.originalSkinColor, new pc.Color( 0.12, 0.12, 0.12, this.originalSkinColor.a ), Math.max(0, Math.min(1, progress)) );
                color.a = flash ? 0 : this.originalSkinColor.a;
                this.skin.color = color.$clone();
            },
            /*MelonSandbox.MelonLimb.ShockAppearance end.*/

            /*MelonSandbox.MelonLimb.Detach start.*/
            Detach: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#Detach", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.owner.GetComponentsInChildren(UnityEngine.HingeJoint2D));
                try {
                    while ($t.moveNext()) {
                        var joint = $t.Current;
                        if (UnityEngine.GameObject.op_Equality(joint.gameObject, this.gameObject) || UnityEngine.Component.op_Equality(joint.connectedBody, this.body)) {
                            joint.enabled = false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*MelonSandbox.MelonLimb.Detach end.*/

            /*MelonSandbox.MelonLimb.ResetDamage start.*/
            ResetDamage: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#ResetDamage", this ); }

                this.CaptureAppearance();
                if (UnityEngine.Object.op_Implicit(this.skin)) {
                    this.skin.color = this.originalSkinColor.$clone();
                    this.skin.sharedMaterial = this.originalMaterial;
                }
                this.nextHole = 0;
                this.damageUnavailable = false;
                this.ReleaseDamageMaterial();
            },
            /*MelonSandbox.MelonLimb.ResetDamage end.*/

            /*MelonSandbox.MelonLimb.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#OnDestroy", this ); }

                this.ReleaseDamageMaterial();
            },
            /*MelonSandbox.MelonLimb.OnDestroy end.*/

            /*MelonSandbox.MelonLimb.ReleaseDamageMaterial start.*/
            ReleaseDamageMaterial: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonLimb#ReleaseDamageMaterial", this ); }

                if (!UnityEngine.Object.op_Implicit(this.effectMaterial)) {
                    return;
                }
                if (UnityEngine.Application.isPlaying) {
                    UnityEngine.Object.Destroy(this.effectMaterial);
                } else {
                    UnityEngine.Object.DestroyImmediate(this.effectMaterial);
                }
                this.effectMaterial = null;
            },
            /*MelonSandbox.MelonLimb.ReleaseDamageMaterial end.*/


        }
    });
    /*MelonSandbox.MelonLimb end.*/

    /*MelonSandbox.MelonParticle start.*/
    Bridge.define("MelonSandbox.MelonParticle", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            velocity: null,
            lifetime: 0,
            gravity: 0,
            grow: false,
            elapsed: 0,
            sr: null,
            startScale: null,
            initialAlpha: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonParticle#init", this ); }

                this.velocity = new UnityEngine.Vector2();
                this.startScale = new UnityEngine.Vector3();
                this.lifetime = 0.65;
            }
        },
        methods: {
            /*MelonSandbox.MelonParticle.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonParticle#Start", this ); }

                this.sr = this.GetComponent(UnityEngine.SpriteRenderer);
                this.startScale = this.transform.localScale.$clone();
                this.initialAlpha = this.sr.color.a;
            },
            /*MelonSandbox.MelonParticle.Start end.*/

            /*MelonSandbox.MelonParticle.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonParticle#Update", this ); }

                this.elapsed += UnityEngine.Time.deltaTime;
                this.velocity.y -= this.gravity * UnityEngine.Time.deltaTime;
                this.transform.position = this.transform.position.$clone().add( UnityEngine.Vector3.FromVector2((this.velocity.$clone().scale( UnityEngine.Time.deltaTime ))) );
                if (UnityEngine.Object.op_Implicit(this.sr)) {
                    this.sr.color = new pc.Color( this.sr.color.r, this.sr.color.g, this.sr.color.b, this.initialAlpha * (1 - this.elapsed / this.lifetime) );
                }
                if (this.grow) {
                    this.transform.localScale = this.startScale.$clone().clone().scale( (1 + this.elapsed * 2) );
                }
                if (this.elapsed >= this.lifetime) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*MelonSandbox.MelonParticle.Update end.*/


        }
    });
    /*MelonSandbox.MelonParticle end.*/

    /*MelonSandbox.MelonProjectile start.*/
    Bridge.define("MelonSandbox.MelonProjectile", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*MelonSandbox.MelonProjectile.Trace:static start.*/
                Trace: function (game, start, end, hit, point) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonProjectile#Trace", this ); }

                    var $t, $t1;
                    hit.v = null;
                    point.v = end.$clone();
                    if (!UnityEngine.Object.op_Implicit(game)) {
                        return false;
                    }
                    var step = end.$clone().sub( start );
                    var nearest = Number.POSITIVE_INFINITY;
                    $t = Bridge.getEnumerator(game.characters);
                    try {
                        while ($t.moveNext()) {
                            var character = $t.Current;
                            if (!UnityEngine.Object.op_Implicit(character) || character.dead || !character.gameObject.activeInHierarchy) {
                                continue;
                            }
                            $t1 = Bridge.getEnumerator(character.limbs);
                            try {
                                while ($t1.moveNext()) {
                                    var limb = $t1.Current;
                                    if (!UnityEngine.Object.op_Implicit(limb) || !UnityEngine.Object.op_Implicit(limb.skin) || !limb.gameObject.activeInHierarchy) {
                                        continue;
                                    }
                                    var bounds = limb.skin.bounds;
                                    var entry = { v : 0 }, exit = { v : 1 };
                                    if (!MelonSandbox.MelonProjectile.ClipAxis(start.x, step.x, bounds.min.x, bounds.max.x, entry, exit) || !MelonSandbox.MelonProjectile.ClipAxis(start.y, step.y, bounds.min.y, bounds.max.y, entry, exit) || entry.v >= nearest) {
                                        continue;
                                    }
                                    nearest = entry.v;
                                    hit.v = limb;
                                }
                            } finally {
                                if (Bridge.is($t1, System.IDisposable)) {
                                    $t1.System$IDisposable$Dispose();
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    if (!UnityEngine.Object.op_Implicit(hit.v)) {
                        return false;
                    }
                    point.v = start.$clone().add( step.$clone().scale( nearest ) );
                    return true;
                },
                /*MelonSandbox.MelonProjectile.Trace:static end.*/

                /*MelonSandbox.MelonProjectile.ClipAxis:static start.*/
                ClipAxis: function (start, step, min, max, entry, exit) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonProjectile#ClipAxis", this ); }

                    if (Math.abs(step) < 1E-06) {
                        return start >= min && start <= max;
                    }
                    var first = (min - start) / step, last = (max - start) / step;
                    if (first > last) {
                        var swap = first;
                        first = last;
                        last = swap;
                    }
                    entry.v = UnityEngine.Mathf.Max(entry.v, first);
                    exit.v = UnityEngine.Mathf.Min(exit.v, last);
                    return entry.v <= exit.v;
                },
                /*MelonSandbox.MelonProjectile.ClipAxis:static end.*/


            }
        },
        fields: {
            game: null,
            kind: 0,
            velocity: null,
            duration: 0,
            age: 0,
            visual: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonProjectile#init", this ); }

                this.velocity = new UnityEngine.Vector2();
                this.duration = 0.75;
            }
        },
        methods: {
            /*MelonSandbox.MelonProjectile.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonProjectile#Start", this ); }

                this.visual = this.GetComponent(UnityEngine.SpriteRenderer);
            },
            /*MelonSandbox.MelonProjectile.Start end.*/

            /*MelonSandbox.MelonProjectile.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonProjectile#Update", this ); }

                var current = UnityEngine.Vector2.FromVector3(this.transform.position);
                var step = this.velocity.$clone().scale( UnityEngine.Time.deltaTime );
                var hit = { };
                var hitPoint = { v : new UnityEngine.Vector2() };
                if (MelonSandbox.MelonProjectile.Trace(this.game, current, current.$clone().add( step ).add( step.clone().normalize().$clone().scale( 0.12 ) ), hit, hitPoint)) {
                    hit.v.owner.Apply(this.kind, hit.v, hitPoint.v);
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                this.transform.position = this.transform.position.$clone().add( UnityEngine.Vector3.FromVector2(step) );
                this.age += UnityEngine.Time.deltaTime;
                if (this.kind === MelonSandbox.MelonToolKind.Flame) {
                    this.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( (0.12 + this.age * 0.8) );
                    if (UnityEngine.Object.op_Implicit(this.visual)) {
                        this.visual.color = new pc.Color( 1, 1, 1, 1 - this.age / this.duration );
                    }
                }
                if (this.age >= this.duration) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*MelonSandbox.MelonProjectile.Update end.*/


        }
    });
    /*MelonSandbox.MelonProjectile end.*/

    /*MelonSandbox.MelonRagdoll start.*/
    Bridge.define("MelonSandbox.MelonRagdoll", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Skins: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#init", this ); }

                    this.Skins = System.Array.init([
                        "main_", 
                        "tom_", 
                        "kak_", 
                        "doc_", 
                        "corn_", 
                        "red_", 
                        "blue_"
                    ], System.String);
                }
            },
            methods: {
                /*MelonSandbox.MelonRagdoll.Child:static start.*/
                Child: function (parent, childName) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Child", this ); }

                    if (!UnityEngine.Object.op_Implicit(parent)) {
                        return null;
                    }
                    for (var i = 0; i < parent.childCount; i = (i + 1) | 0) {
                        var child = parent.GetChild(i);
                        if (Bridge.referenceEquals(child.name, childName)) {
                            return child;
                        }
                    }
                    return null;
                },
                /*MelonSandbox.MelonRagdoll.Child:static end.*/

                /*MelonSandbox.MelonRagdoll.SetLegJoint:static start.*/
                SetLegJoint: function (joint, point, min, max) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#SetLegJoint", this ); }

                    var $t;
                    joint.autoConfigureConnectedAnchor = false;
                    joint.anchor = UnityEngine.Vector2.FromVector3(joint.transform.InverseTransformPoint(UnityEngine.Vector3.FromVector2(point)));
                    joint.connectedAnchor = UnityEngine.Vector2.FromVector3(joint.connectedBody.transform.InverseTransformPoint(UnityEngine.Vector3.FromVector2(point)));
                    joint.useMotor = false;
                    joint.useLimits = true;
                    joint.limits = ($t = new UnityEngine.JointAngleLimits2D(), $t.min = min, $t.max = max, $t);
                },
                /*MelonSandbox.MelonRagdoll.SetLegJoint:static end.*/

                /*MelonSandbox.MelonRagdoll.FitLegArtwork:static start.*/
                FitLegArtwork: function (limb, start, end, overlapEnd) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#FitLegArtwork", this ); }

                    var $t;
                    if (overlapEnd === void 0) { overlapEnd = true; }
                    var direction = (end.$clone().sub( start )).clone().normalize().$clone();
                    var overlap = limb.skin.sprite.bounds.halfExtents.$clone().scale( 2 ).x * Math.abs(limb.skin.transform.lossyScale.x) * 0.4;
                    start = start.$clone().sub( direction.$clone().scale( overlap ) );
                    if (overlapEnd) {
                        end = end.$clone().add( direction.$clone().scale( overlap ) );
                    }
                    $t = Bridge.getEnumerator(limb.GetComponentsInChildren$1(UnityEngine.SpriteRenderer, true));
                    try {
                        while ($t.moveNext()) {
                            var renderer = $t.Current;
                            if (!UnityEngine.Object.op_Implicit(renderer.sprite)) {
                                continue;
                            }
                            var bounds = renderer.sprite.bounds;
                            var scale = renderer.transform.localScale.$clone();
                            scale.y *= start.$clone().sub( end ).length() / (bounds.halfExtents.$clone().scale( 2 ).y * Math.abs(renderer.transform.lossyScale.y));
                            renderer.transform.localScale = scale.$clone();
                            renderer.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, Math.atan2(direction.y, direction.x) * UnityEngine.Mathf.Rad2Deg + 90 );
                            var top = renderer.transform.TransformPoint$1(new pc.Vec3( bounds.center.x, bounds.max.y, 0 ));
                            renderer.transform.position = renderer.transform.position.$clone().add( UnityEngine.Vector3.FromVector2(start).sub( top ) );
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    limb.dimensions = UnityEngine.Vector2.FromVector3(limb.skin.bounds.halfExtents.$clone().scale( 2 ).$clone());
                },
                /*MelonSandbox.MelonRagdoll.FitLegArtwork:static end.*/

                /*MelonSandbox.MelonRagdoll.StretchArmSegment:static start.*/
                StretchArmSegment: function (limb, start, end) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#StretchArmSegment", this ); }

                    var bounds = limb.skin.sprite.bounds;
                    // Inset the physical anchors into the artwork so bent ends still overlap.
                    var direction = (end.$clone().sub( start )).clone().normalize().$clone();
                    var overlap = bounds.halfExtents.$clone().scale( 2 ).x * Math.abs(limb.skin.transform.lossyScale.x) * 0.6;
                    start = start.$clone().sub( direction.$clone().scale( overlap ) );
                    end = end.$clone().add( direction.$clone().scale( overlap ) );
                    var scale = limb.transform.localScale.$clone();
                    scale.y *= start.$clone().sub( end ).length() / (bounds.halfExtents.$clone().scale( 2 ).y * Math.abs(limb.skin.transform.lossyScale.y));
                    limb.transform.localScale = scale.$clone();
                    limb.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, Math.atan2(direction.y, direction.x) * UnityEngine.Mathf.Rad2Deg + 90 );
                    var top = limb.skin.transform.TransformPoint$1(new pc.Vec3( bounds.center.x, bounds.max.y, 0 ));
                    limb.transform.position = limb.transform.position.$clone().add( UnityEngine.Vector3.FromVector2(start).sub( top ) );
                    limb.dimensions = UnityEngine.Vector2.FromVector3(limb.skin.bounds.halfExtents.$clone().scale( 2 ).$clone());
                },
                /*MelonSandbox.MelonRagdoll.StretchArmSegment:static end.*/

                /*MelonSandbox.MelonRagdoll.ConnectArmJoint:static start.*/
                ConnectArmJoint: function (limb, connected, point) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#ConnectArmJoint", this ); }

                    var $t;
                    var joint = limb.GetComponent(UnityEngine.HingeJoint2D);
                    joint.autoConfigureConnectedAnchor = false;
                    joint.connectedBody = connected;
                    joint.anchor = UnityEngine.Vector2.FromVector3(limb.transform.InverseTransformPoint(UnityEngine.Vector3.FromVector2(point)));
                    joint.connectedAnchor = UnityEngine.Vector2.FromVector3(connected.transform.InverseTransformPoint(UnityEngine.Vector3.FromVector2(point)));
                    joint.useLimits = true;
                    joint.limits = ($t = new UnityEngine.JointAngleLimits2D(), $t.min = -10, $t.max = 10, $t);
                },
                /*MelonSandbox.MelonRagdoll.ConnectArmJoint:static end.*/


            }
        },
        fields: {
            skinName: null,
            life: 0,
            hits: 0,
            dead: false,
            targetGroup: 0,
            parade: false,
            paradeStart: 0,
            paradeDistance: 0,
            game: null,
            limbs: null,
            supports: null
        },
        props: {
            Head: {
                get: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Head#get", this ); }

                    return this.GetLimb("head");
                }
            },
            Torso: {
                get: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Torso#get", this ); }

                    return this.GetLimb("body");
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#init", this ); }

                this.life = 100;
                this.limbs = new (System.Collections.Generic.List$1(MelonSandbox.MelonLimb)).ctor();
                this.supports = new (System.Collections.Generic.List$1(UnityEngine.TargetJoint2D)).ctor();
            }
        },
        methods: {
            /*MelonSandbox.MelonRagdoll.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Awake", this ); }

                if (!UnityEngine.Object.op_Implicit(this.game)) {
                    this.game = MelonSandbox.MelonGame.Instance;
                }
            },
            /*MelonSandbox.MelonRagdoll.Awake end.*/

            /*MelonSandbox.MelonRagdoll.GetLimb start.*/
            GetLimb: function (part) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#GetLimb", this ); }

                for (var i = 0; i < this.limbs.Count; i = (i + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.limbs.getItem(i)) && Bridge.referenceEquals(this.limbs.getItem(i).gameObject.name, part)) {
                        return this.limbs.getItem(i);
                    }
                }
                return null;
            },
            /*MelonSandbox.MelonRagdoll.GetLimb end.*/

            /*MelonSandbox.MelonRagdoll.BuildSprunky start.*/
            BuildSprunky: function (controller, offset, suspended) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#BuildSprunky", this ); }

                var $t, $t1, $t2, $t3, $t4;
                this.game = controller;
                this.skinName = this.name;
                this.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 10 );
                this.transform.position = new pc.Vec3( (offset.x - 220) / 100.0, -offset.y / 100.0, 0 );
                $t = Bridge.getEnumerator(this.GetComponentsInChildren$1(UnityEngine.Animator, true));
                try {
                    while ($t.moveNext()) {
                        var animator = $t.Current;
                        animator.enabled = false;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                var rootBody = this.GetComponent(UnityEngine.Rigidbody2D);
                if (UnityEngine.Object.op_Implicit(rootBody)) {
                    rootBody.simulated = false;
                }
                // The source prefab contains an animation control rig beside the physical parts.
                $t1 = Bridge.getEnumerator(this.transform);
                try {
                    while ($t1.moveNext()) {
                        var child = Bridge.cast($t1.Current, UnityEngine.Transform);
                        if (!Bridge.referenceEquals(child.name, "Parts")) {
                            child.gameObject.SetActive(false);
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                var parts = MelonSandbox.MelonRagdoll.Child(this.transform, "Parts");
                var source = System.Array.init([
                    "head_mid", 
                    "chest_mid", 
                    "abdomen_mid", 
                    "hip_mid", 
                    "upperarm_front", 
                    "forearm_front", 
                    "hand_front", 
                    "upperarm_back", 
                    "forearm_back", 
                    "hand_back", 
                    "thigh_front", 
                    "shin_front", 
                    "foot_front", 
                    "thigh_back", 
                    "shin_back", 
                    "foot_back"
                ], System.String);
                var target = System.Array.init([
                    "head", 
                    "body", 
                    "body_mid", 
                    "body_down", 
                    "r_up_arm", 
                    "r_down_arm", 
                    "r_hand", 
                    "l_up_arm", 
                    "l_down_arm", 
                    "l_hand", 
                    "r_up_leg", 
                    "r_down_leg", 
                    "r_foot", 
                    "l_up_leg", 
                    "l_down_leg", 
                    "l_foot"
                ], System.String);
                for (var i = 0; i < source.length; i = (i + 1) | 0) {
                    var part = MelonSandbox.MelonRagdoll.Child(parts, source[i]);
                    if (!UnityEngine.Object.op_Implicit(part)) {
                        throw new System.InvalidOperationException.$ctor1((this.name || "") + " is missing " + (source[i] || ""));
                    }
                    part.name = target[i];
                    part.gameObject.layer = 0;
                    var limb = part.gameObject.AddComponent(MelonSandbox.MelonLimb);
                    limb.owner = this;
                    limb.partName = target[i];
                    limb.body = part.GetComponent(UnityEngine.Rigidbody2D);
                    limb.body.bodyType = UnityEngine.RigidbodyType2D.Dynamic;
                    limb.body.simulated = true;
                    limb.body.gravityScale = 1;
                    limb.body.constraints = UnityEngine.RigidbodyConstraints2D.None;
                    limb.body.linearDamping = 0.25;
                    limb.body.angularDamping = 1.8;
                    limb.body.collisionDetectionMode = UnityEngine.CollisionDetectionMode2D.Continuous;
                    limb.skin = MelonSandbox.MelonRagdoll.Child(part, "Skin").GetComponent(UnityEngine.SpriteRenderer);
                    limb.inner = MelonSandbox.MelonRagdoll.Child(part, "Skeleton").GetComponent(UnityEngine.SpriteRenderer);
                    $t2 = Bridge.getEnumerator(part.GetComponentsInChildren$1(UnityEngine.SpriteRenderer, true));
                    try {
                        while ($t2.moveNext()) {
                            var renderer = $t2.Current;
                            renderer.sortingLayerID = 0;
                            // Preserve the material authored on the Sprunky prefab.
                        }
                    } finally {
                        if (Bridge.is($t2, System.IDisposable)) {
                            $t2.System$IDisposable$Dispose();
                        }
                    }
                    limb.skin.enabled = true;
                    limb.inner.enabled = true;
                    var meat = MelonSandbox.MelonRagdoll.Child(part, "Meat");
                    if (UnityEngine.Object.op_Implicit(meat)) {
                        meat.gameObject.SetActive(false);
                    }
                    limb.dimensions = UnityEngine.Vector2.FromVector3(limb.skin.bounds.halfExtents.$clone().scale( 2 ).$clone());
                    limb.body.mass = UnityEngine.Mathf.Max(0.15, limb.dimensions.x * limb.dimensions.y * 4);
                    var colliders = part.GetComponents(UnityEngine.Collider2D);
                    for (var j = 0; j < colliders.length; j = (j + 1) | 0) {
                        colliders[j].enabled = j === 0;
                        colliders[j].isTrigger = false;
                    }
                    $t3 = Bridge.getEnumerator(part.GetComponentsInChildren$1(UnityEngine.Collider2D, true));
                    try {
                        while ($t3.moveNext()) {
                            var collider = $t3.Current;
                            if (UnityEngine.Component.op_Inequality(collider.transform, part)) {
                                collider.enabled = false;
                            }
                        }
                    } finally {
                        if (Bridge.is($t3, System.IDisposable)) {
                            $t3.System$IDisposable$Dispose();
                        }
                    }
                    $t4 = Bridge.getEnumerator(part.GetComponents(UnityEngine.HingeJoint2D));
                    try {
                        while ($t4.moveNext()) {
                            var joint = $t4.Current;
                            joint.enabled = UnityEngine.Object.op_Implicit(joint.connectedBody) && UnityEngine.Component.op_Inequality(joint.connectedBody, limb.body);
                            joint.enableCollision = false;
                            // Dismemberment is controlled by MelonLimb.Detach, not spawn forces.
                            joint.breakForce = Number.POSITIVE_INFINITY;
                            joint.breakTorque = Number.POSITIVE_INFINITY;
                        }
                    } finally {
                        if (Bridge.is($t4, System.IDisposable)) {
                            $t4.System$IDisposable$Dispose();
                        }
                    }
                    this.limbs.add(limb);
                }
                this.ApplySpriteSorting();
                this.ConfigureLeg("l_");
                this.ConfigureLeg("r_");
                var allColliders = this.GetComponentsInChildren(UnityEngine.Collider2D);
                for (var i1 = 0; i1 < allColliders.length; i1 = (i1 + 1) | 0) {
                    for (var j1 = (i1 + 1) | 0; j1 < allColliders.length; j1 = (j1 + 1) | 0) {
                        MelonSandbox.MelonGame.IgnoreActiveCollision(allColliders[i1], allColliders[j1]);
                    }
                }
                if (suspended) {
                    var feetY = UnityEngine.Mathf.Min(this.GetLimb("r_foot").skin.bounds.min.y, this.GetLimb("l_foot").skin.bounds.min.y);
                    this.transform.position = this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( (0.02 - feetY) ) );
                    var rightTarget = MelonSandbox.MelonGame.FromPixels(offset.x, 360);
                    var leftTarget = MelonSandbox.MelonGame.FromPixels(offset.x + 200, 360);
                    this.PoseSuspendedArm("r_", rightTarget.$clone());
                    this.PoseSuspendedArm("l_", leftTarget.$clone());
                    this.Support(this.GetLimb("r_hand"), rightTarget);
                    this.Support(this.GetLimb("l_hand"), leftTarget);
                    this.GroundFoot(this.GetLimb("r_foot"));
                    this.GroundFoot(this.GetLimb("l_foot"));
                } else {
                    this.Support(this.Head, UnityEngine.Vector2.FromVector3(this.Head.transform.position));
                }
            },
            /*MelonSandbox.MelonRagdoll.BuildSprunky end.*/

            /*MelonSandbox.MelonRagdoll.ApplySpriteSorting start.*/
            ApplySpriteSorting: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#ApplySpriteSorting", this ); }

                var $t;
                // All skin layers cover all inner layers, including at overlapping joints.
                // Left arm behind the body, right arm in front; tools remain above at 59+.
                var backToFront = System.Array.init([
                    "l_up_arm", 
                    "l_down_arm", 
                    "l_hand", 
                    "l_up_leg", 
                    "l_down_leg", 
                    "l_foot", 
                    "r_up_leg", 
                    "r_down_leg", 
                    "r_foot", 
                    "body_down", 
                    "body_mid", 
                    "body", 
                    "head", 
                    "r_up_arm", 
                    "r_down_arm", 
                    "r_hand"
                ], System.String);
                for (var i = 0; i < backToFront.length; i = (i + 1) | 0) {
                    var limb = this.GetLimb(backToFront[i]);
                    if (!UnityEngine.Object.op_Implicit(limb)) {
                        continue;
                    }
                    $t = Bridge.getEnumerator(limb.GetComponentsInChildren$1(UnityEngine.SpriteRenderer, true));
                    try {
                        while ($t.moveNext()) {
                            var renderer = $t.Current;
                            renderer.sortingLayerID = 0;
                            renderer.sortingOrder = UnityEngine.Component.op_Equality(renderer, limb.skin) ? ((40 + i) | 0) : UnityEngine.Component.op_Equality(renderer, limb.inner) ? ((8 + i) | 0) : ((24 + i) | 0);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
            },
            /*MelonSandbox.MelonRagdoll.ApplySpriteSorting end.*/

            /*MelonSandbox.MelonRagdoll.GroundFoot start.*/
            GroundFoot: function (foot) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#GroundFoot", this ); }

                // Pin the sole at ground height, instead of letting the arm supports lift it.
                var target = UnityEngine.Vector2.FromVector3(foot.transform.position.$clone());
                target.y -= foot.skin.bounds.min.y;
                foot.body.constraints |= UnityEngine.RigidbodyConstraints2D.FreezeRotation;
                this.Support(foot, target);
            },
            /*MelonSandbox.MelonRagdoll.GroundFoot end.*/

            /*MelonSandbox.MelonRagdoll.ConfigureLeg start.*/
            ConfigureLeg: function (side) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#ConfigureLeg", this ); }

                var thigh = this.GetLimb((side || "") + "up_leg");
                var shin = this.GetLimb((side || "") + "down_leg");
                var foot = this.GetLimb((side || "") + "foot");
                var hipJoint = thigh.GetComponent(UnityEngine.HingeJoint2D);
                var kneeJoint = shin.GetComponent(UnityEngine.HingeJoint2D);
                var ankleJoint = foot.GetComponent(UnityEngine.HingeJoint2D);
                // Put the hip pivot inside the visible pelvis, rather than below its sprite.
                var hip = UnityEngine.Vector2.FromVector3(this.GetLimb("body_down").skin.bounds.center.$clone());
                var knee = UnityEngine.Vector2.FromVector3(shin.transform.TransformPoint$1(UnityEngine.Vector3.FromVector2(kneeJoint.anchor)));
                var ankle = UnityEngine.Vector2.FromVector3(foot.transform.TransformPoint$1(UnityEngine.Vector3.FromVector2(ankleJoint.anchor)));
                MelonSandbox.MelonRagdoll.FitLegArtwork(thigh, hip, knee);
                MelonSandbox.MelonRagdoll.FitLegArtwork(shin, knee, ankle);
                // Extend the ankle end only, retaining the sole's original ground height.
                var sole = new pc.Vec2( ankle.x, foot.skin.bounds.min.y );
                MelonSandbox.MelonRagdoll.FitLegArtwork(foot, ankle, sole, false);
                var footCollider = foot.GetComponent(UnityEngine.BoxCollider2D);
                var spriteBounds = foot.skin.sprite.bounds;
                var lower = UnityEngine.Vector2.FromVector3(foot.transform.InverseTransformPoint(foot.skin.transform.TransformPoint$1(spriteBounds.min)));
                var upper = UnityEngine.Vector2.FromVector3(foot.transform.InverseTransformPoint(foot.skin.transform.TransformPoint$1(spriteBounds.max)));
                // Account for the physics contact margin so the drawn sole meets y = 0.
                lower.y += 0.015 / Math.abs(foot.transform.lossyScale.y);
                footCollider.offset = (lower.$clone().add( upper )).scale( 0.5 );
                footCollider.size = upper.$clone().sub( lower );
                MelonSandbox.MelonRagdoll.SetLegJoint(hipJoint, hip, -35, 35);
                MelonSandbox.MelonRagdoll.SetLegJoint(kneeJoint, knee, 0, 100);
                MelonSandbox.MelonRagdoll.SetLegJoint(ankleJoint, ankle, -15, 15);
            },
            /*MelonSandbox.MelonRagdoll.ConfigureLeg end.*/

            /*MelonSandbox.MelonRagdoll.PoseSuspendedArm start.*/
            PoseSuspendedArm: function (side, target) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#PoseSuspendedArm", this ); }

                var upper = this.GetLimb((side || "") + "up_arm");
                var lower = this.GetLimb((side || "") + "down_arm");
                var hand = this.GetLimb((side || "") + "hand");
                var shoulder = upper.GetComponent(UnityEngine.HingeJoint2D);
                var pivot = UnityEngine.Vector2.FromVector3(shoulder.connectedBody.transform.TransformPoint$1(UnityEngine.Vector3.FromVector2(shoulder.connectedAnchor)));
                var elbow = new pc.Vec2().lerp( pivot, target, 0.5 );
                elbow.x += Bridge.referenceEquals(side, "r_") ? -0.15 : 0.15;
                MelonSandbox.MelonRagdoll.StretchArmSegment(upper, pivot, elbow);
                MelonSandbox.MelonRagdoll.StretchArmSegment(lower, elbow, target);
                hand.transform.position = UnityEngine.Vector3.FromVector2(target.$clone());
                hand.transform.rotation = lower.transform.rotation.$clone();
                MelonSandbox.MelonRagdoll.ConnectArmJoint(upper, shoulder.connectedBody, pivot);
                MelonSandbox.MelonRagdoll.ConnectArmJoint(lower, upper.body, elbow);
                MelonSandbox.MelonRagdoll.ConnectArmJoint(hand, lower.body, target);
            },
            /*MelonSandbox.MelonRagdoll.PoseSuspendedArm end.*/

            /*MelonSandbox.MelonRagdoll.ConfigureInstance start.*/
            ConfigureInstance: function (controller, offset, suspended, innerSkin) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#ConfigureInstance", this ); }

                this.game = controller;
                this.Release();
                this.ChangeInner(innerSkin);
                var colliders = this.GetComponentsInChildren(UnityEngine.Collider2D);
                for (var i = 0; i < colliders.length; i = (i + 1) | 0) {
                    for (var j = (i + 1) | 0; j < colliders.length; j = (j + 1) | 0) {
                        MelonSandbox.MelonGame.IgnoreActiveCollision(colliders[i], colliders[j]);
                    }
                }
                if (suspended) {
                    this.Support(this.GetLimb("r_down_arm"), MelonSandbox.MelonGame.FromPixels(offset.x, 360));
                    this.Support(this.GetLimb("l_down_arm"), MelonSandbox.MelonGame.FromPixels(offset.x + 200, 360));
                } else {
                    this.Support(this.Head, this.Head.body.position);
                }
            },
            /*MelonSandbox.MelonRagdoll.ConfigureInstance end.*/

            /*MelonSandbox.MelonRagdoll.Build start.*/
            Build: function (controller, prefix, offset, suspended, innerSkin) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Build", this ); }

                var $t;
                this.game = controller;
                this.skinName = prefix;
                var parts = System.Array.init([
                    "l_up_arm", 
                    "l_down_arm", 
                    "l_up_leg", 
                    "l_down_leg", 
                    "l_foot", 
                    "body", 
                    "body_down", 
                    "body_mid", 
                    "head", 
                    "r_up_leg", 
                    "r_down_leg", 
                    "r_foot", 
                    "r_up_arm", 
                    "r_down_arm"
                ], System.String);
                for (var i = 0; i < parts.length; i = (i + 1) | 0) {
                    var shortName = System.String.startsWith(parts[i], "l_") || System.String.startsWith(parts[i], "r_") ? parts[i].substr(2) : parts[i];
                    var node = this.game.assets.Node((prefix || "") + (shortName || ""));
                    if (node == null) {
                        throw new System.InvalidOperationException.$ctor1("Missing body layout: " + (prefix || "") + (shortName || ""));
                    }
                    var go = new UnityEngine.GameObject.$ctor2(parts[i]);
                    go.transform.SetParent(this.transform, false);
                    go.transform.position = UnityEngine.Vector3.FromVector2(MelonSandbox.MelonGame.FromPixels(node.x + node.w / 2 + offset.x, node.y + node.h / 2 + offset.y));
                    var limb = go.AddComponent(MelonSandbox.MelonLimb);
                    limb.owner = this;
                    limb.partName = shortName;
                    limb.dimensions = new pc.Vec2( node.w, node.h ).scale( 1.0 / ( 100.0 ) );
                    limb.body = go.AddComponent(UnityEngine.Rigidbody2D);
                    limb.body.mass = UnityEngine.Mathf.Max(0.15, limb.dimensions.x * limb.dimensions.y * 4);
                    limb.body.linearDamping = 0.25;
                    limb.body.angularDamping = 1.8;
                    limb.body.collisionDetectionMode = UnityEngine.CollisionDetectionMode2D.Continuous;
                    var col = go.AddComponent(UnityEngine.BoxCollider2D);
                    col.size = limb.dimensions.$clone().scale( 0.94 );
                    var innerNode = this.game.assets.Node((innerSkin || "") + (shortName || ""));
                    var innerPosition = UnityEngine.Vector2.FromVector3(go.transform.position).add( new pc.Vec2( innerNode.x + innerNode.w / 2 - node.x - node.w / 2, -(innerNode.y + innerNode.h / 2 - node.y - node.h / 2) ).scale( 1.0 / ( 100.0 ) ) );
                    limb.inner = this.game.assets.Visual("msg_" + (innerSkin || "") + (shortName || ""), go.transform, innerPosition, new pc.Vec2( innerNode.w, innerNode.h ).scale( 1.0 / ( 100 ) ), ((10 + Bridge.Int.mul(i, 2)) | 0));
                    limb.skin = this.game.assets.Visual(node.pic, go.transform, UnityEngine.Vector2.FromVector3(go.transform.position), limb.dimensions, ((11 + Bridge.Int.mul(i, 2)) | 0));
                    if (Bridge.referenceEquals(prefix, "tom_") && Bridge.referenceEquals(shortName, "head")) {
                        limb.inner.enabled = false;
                    }
                    this.limbs.add(limb);
                }
                this.Joint("head", "body", 0.48, -18, 18);
                this.Joint("body", "body_mid", 0.48, -18, 18);
                this.Joint("body_mid", "body_down", 0.48, -18, 18);
                $t = Bridge.getEnumerator(System.Array.init(["l_", "r_"], System.String));
                try {
                    while ($t.moveNext()) {
                        var side = $t.Current;
                        this.Joint("body", (side || "") + "up_arm", -0.48, -180, 180, false);
                        this.Joint((side || "") + "up_arm", (side || "") + "down_arm", 0.48, 0, 144);
                        this.Joint("body_down", (side || "") + "up_leg", 0.42, -18, 162);
                        this.Joint((side || "") + "up_leg", (side || "") + "down_leg", 0.48, -162, 0);
                        this.Joint((side || "") + "down_leg", (side || "") + "foot", 0.48, -18, 18);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                var colliders = this.GetComponentsInChildren(UnityEngine.Collider2D);
                for (var i1 = 0; i1 < colliders.length; i1 = (i1 + 1) | 0) {
                    for (var j = (i1 + 1) | 0; j < colliders.length; j = (j + 1) | 0) {
                        MelonSandbox.MelonGame.IgnoreActiveCollision(colliders[i1], colliders[j]);
                    }
                }
                if (suspended) {
                    this.Support(this.GetLimb("r_down_arm"), MelonSandbox.MelonGame.FromPixels(offset.x, 360));
                    this.Support(this.GetLimb("l_down_arm"), MelonSandbox.MelonGame.FromPixels(offset.x + 200, 360));
                } else {
                    this.Support(this.Head, this.Head.body.position);
                }
            },
            /*MelonSandbox.MelonRagdoll.Build end.*/

            /*MelonSandbox.MelonRagdoll.Joint start.*/
            Joint: function (first, second, anchorY, min, max, limits) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Joint", this ); }

                var $t;
                if (limits === void 0) { limits = true; }
                var a = this.GetLimb(first);
                var b = this.GetLimb(second);
                var j = a.gameObject.AddComponent(UnityEngine.HingeJoint2D);
                j.connectedBody = b.body;
                j.autoConfigureConnectedAnchor = false;
                var world = a.body.position.$clone().add( new pc.Vec2( pc.Vec2.UP.x, -pc.Vec2.UP.y ).scale( a.dimensions.y ).scale( anchorY ) );
                j.anchor = UnityEngine.Vector2.FromVector3(a.transform.InverseTransformPoint(UnityEngine.Vector3.FromVector2(world)));
                j.connectedAnchor = UnityEngine.Vector2.FromVector3(b.transform.InverseTransformPoint(UnityEngine.Vector3.FromVector2(world)));
                j.useLimits = limits;
                j.limits = ($t = new UnityEngine.JointAngleLimits2D(), $t.min = min, $t.max = max, $t);
                j.enableCollision = false;
            },
            /*MelonSandbox.MelonRagdoll.Joint end.*/

            /*MelonSandbox.MelonRagdoll.Support start.*/
            Support: function (limb, point) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Support", this ); }

                var j = limb.gameObject.AddComponent(UnityEngine.TargetJoint2D);
                j.autoConfigureTarget = false;
                j.target = point.$clone();
                j.maxForce = 3000;
                j.frequency = 5;
                j.dampingRatio = 0.85;
                if (Bridge.referenceEquals(limb.partName, "r_hand") || Bridge.referenceEquals(limb.partName, "l_hand")) {
                    j.maxForce = 10000;
                    j.frequency = 20;
                    j.dampingRatio = 1;
                }
                this.supports.add(j);
            },
            /*MelonSandbox.MelonRagdoll.Support end.*/

            /*MelonSandbox.MelonRagdoll.Release start.*/
            Release: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Release", this ); }

                var $t, $t1, $t2;
                $t = Bridge.getEnumerator(this.supports);
                try {
                    while ($t.moveNext()) {
                        var support = $t.Current;
                        if (UnityEngine.Object.op_Implicit(support)) {
                            $t1 = support.GetComponent(UnityEngine.Rigidbody2D);
                            $t1.constraints &= -5;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t2 = Bridge.getEnumerator(this.supports);
                try {
                    while ($t2.moveNext()) {
                        var s = $t2.Current;
                        if (UnityEngine.Object.op_Implicit(s)) {
                            s.enabled = false;
                        }
                    }
                } finally {
                    if (Bridge.is($t2, System.IDisposable)) {
                        $t2.System$IDisposable$Dispose();
                    }
                }
            },
            /*MelonSandbox.MelonRagdoll.Release end.*/

            /*MelonSandbox.MelonRagdoll.ChangeInner start.*/
            ChangeInner: function (prefix) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#ChangeInner", this ); }

                var $t, $t1;
                if (System.String.startsWith(this.skinName, "Sprunky_")) {
                    $t = Bridge.getEnumerator(this.limbs);
                    try {
                        while ($t.moveNext()) {
                            var limb = $t.Current;
                            limb.inner.color = Bridge.referenceEquals(prefix, "fr_") ? new pc.Color( 0.2, 0.12, 0.08, 1 ) : Bridge.referenceEquals(prefix, "lsk_") ? new pc.Color( 0.5, 1, 0.25, 1 ) : new pc.Color( 1, 1, 1, 1 );
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return;
                }
                $t1 = Bridge.getEnumerator(this.limbs);
                try {
                    while ($t1.moveNext()) {
                        var l = $t1.Current;
                        l.inner.sprite = this.game.assets.Sprite("msg_" + (prefix || "") + (l.partName || ""));
                        var outer = this.game.assets.Node((this.skinName || "") + (l.partName || ""));
                        var inner = this.game.assets.Node((prefix || "") + (l.partName || ""));
                        l.inner.transform.localPosition = new pc.Vec3( inner.x + inner.w / 2 - outer.x - outer.w / 2, -(inner.y + inner.h / 2 - outer.y - outer.h / 2), 0 ).scale( 1.0 / ( 100 ) );
                        l.inner.transform.localScale = new pc.Vec3( inner.w / 100 / l.inner.sprite.bounds.halfExtents.$clone().scale( 2 ).x, inner.h / 100 / l.inner.sprite.bounds.halfExtents.$clone().scale( 2 ).y, 1 );
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            },
            /*MelonSandbox.MelonRagdoll.ChangeInner end.*/

            /*MelonSandbox.MelonRagdoll.BeginParade start.*/
            BeginParade: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#BeginParade", this ); }

                this.parade = true;
                this.paradeDistance = 0;
                this.paradeStart = this.Head.transform.position.x;
            },
            /*MelonSandbox.MelonRagdoll.BeginParade end.*/

            /*MelonSandbox.MelonRagdoll.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#FixedUpdate", this ); }

                var $t;
                if (!this.parade || this.supports.Count === 0 || !UnityEngine.Object.op_Implicit(this.supports.getItem(0))) {
                    return;
                }
                this.paradeDistance += UnityEngine.Time.fixedDeltaTime * 4;
                var target = this.supports.getItem(0).target.$clone();
                target.x = this.paradeStart + this.paradeDistance;
                target.y = 6.5 + Math.sin(this.paradeDistance * UnityEngine.Mathf.PI / 2) * 0.65;
                if (target.x > 14) {
                    var length = this.game.characters.Count * 5.0;
                    this.paradeStart -= length;
                    target.x -= length;
                    $t = Bridge.getEnumerator(this.limbs);
                    try {
                        while ($t.moveNext()) {
                            var l = $t.Current;
                            l.body.position = l.body.position.$clone().add( new pc.Vec2( -pc.Vec2.RIGHT.x, pc.Vec2.RIGHT.y ).scale( length ) );
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
                this.supports.getItem(0).target = target.$clone();
            },
            /*MelonSandbox.MelonRagdoll.FixedUpdate end.*/

            /*MelonSandbox.MelonRagdoll.Apply start.*/
            Apply: function (kind, contact, point) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Apply", this ); }

                var $t, $t1;
                if (this.dead) {
                    return;
                }
                if (kind === MelonSandbox.MelonToolKind.Saw || kind === MelonSandbox.MelonToolKind.Rifle) {
                    this.hits = UnityEngine.Mathf.Min(((this.hits + 1) | 0), 6);
                    this.life = UnityEngine.Mathf.Max(0, ((100 - Bridge.Int.mul(this.hits, 17)) | 0));
                    $t = Bridge.getEnumerator(this.limbs);
                    try {
                        while ($t.moveNext()) {
                            var l = $t.Current;
                            l.Cut(point, 1.0 + 0.1 * (((this.hits - 1) | 0)));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    this.game.Particles("msg_blood", point, 14, new pc.Color( 1, 1, 1, 1 ));
                    this.game.Sound(kind === MelonSandbox.MelonToolKind.Saw ? "pila_run" : "hand");
                    contact.body.AddForce(new pc.Vec2( 2, 1 ), UnityEngine.ForceMode2D.Impulse);
                    if (this.hits < 6) {
                        return;
                    }
                    contact.Detach();
                    this.Kill(true, 1.5);
                    return;
                }
                this.life = 0;
                if (kind === MelonSandbox.MelonToolKind.SyringeAcid) {
                    this.ChangeInner("lsk_");
                    this.game.Sound("doc");
                    this.StartCoroutine$1(this.Reveal(point, false));
                    this.Kill(false, 2.5);
                } else if (kind === MelonSandbox.MelonToolKind.SyringeFire || kind === MelonSandbox.MelonToolKind.Flame) {
                    var skinOnly = kind === MelonSandbox.MelonToolKind.SyringeFire && this.game.Stage === 0 && this.game.characters.Count > 1 && UnityEngine.MonoBehaviour.op_Equality(this.game.characters.getItem(1), this);
                    if (!skinOnly) {
                        this.ChangeInner("fr_");
                    }
                    this.game.Sound("ohog");
                    this.game.Sound(kind === MelonSandbox.MelonToolKind.Flame ? "jar" : "trsk");
                    this.StartCoroutine$1(this.Reveal(point, true, skinOnly));
                    this.Kill(kind === MelonSandbox.MelonToolKind.Flame, kind === MelonSandbox.MelonToolKind.Flame ? 2 : 3);
                } else if (kind === MelonSandbox.MelonToolKind.SyringeCut) {
                    $t1 = Bridge.getEnumerator(this.limbs);
                    try {
                        while ($t1.moveNext()) {
                            var limb = $t1.Current;
                            limb.Cut(point.$clone().add( UnityEngine.Random.insideUnitCircle ), 1);
                            limb.Cut(UnityEngine.Vector2.FromVector3(limb.skin.bounds.center), 0.45);
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }
                    contact.Detach();
                    this.Head.Detach();
                    this.GetLimb("r_down_arm").Detach();
                    this.game.Particles("msg_blood", point, 36, new pc.Color( 1, 1, 1, 1 ));
                    this.game.Sound("smert_1");
                    this.Kill(false, 3.5);
                } else if (kind === MelonSandbox.MelonToolKind.Shock) {
                    this.StartCoroutine$1(this.Electrocute());
                    this.game.Sound("shok_run");
                    this.Kill(true, 1.5);
                }
            },
            /*MelonSandbox.MelonRagdoll.Apply end.*/

            /*MelonSandbox.MelonRagdoll.Reveal start.*/
            Reveal: function (point, fire, skinOnly) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Reveal", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    elapsed,
                    $t,
                    l,
                    $t1,
                    limb,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (skinOnly === void 0) { skinOnly = false; }
                                        elapsed = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < 1.5 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        $t = Bridge.getEnumerator(this.limbs);
                                        try {
                                            while ($t.moveNext()) {
                                                l = $t.Current;
                                                if (skinOnly) {
                                                    l.BurnSkin(elapsed / 1.5);
                                                } else {
                                                    l.Dissolve(point, Math.max(0, Math.min(1, elapsed / 1.5)) * 12, fire);
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }
                                        if (fire && UnityEngine.Random.value < 0.6) {
                                            this.game.Particles("msg_flame", this.limbs.getItem(UnityEngine.Random.Range(0, this.limbs.Count)).body.position, 1, new pc.Color( 1, 1, 1, 1 ));
                                        }
                                        if (fire && UnityEngine.Random.value < 0.15) {
                                            this.game.Particles("msg_dym", this.limbs.getItem(UnityEngine.Random.Range(0, this.limbs.Count)).body.position, 1, new pc.Color( 1, 1, 1, 0.15 ));
                                        }
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (!skinOnly) {
                                            $t1 = Bridge.getEnumerator(this.limbs);
                                            try {
                                                while ($t1.moveNext()) {
                                                    limb = $t1.Current;
                                                    limb.CompleteDissolve();
                                                }
                                            } finally {
                                                if (Bridge.is($t1, System.IDisposable)) {
                                                    $t1.System$IDisposable$Dispose();
                                                }
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*MelonSandbox.MelonRagdoll.Reveal end.*/

            /*MelonSandbox.MelonRagdoll.Electrocute start.*/
            Electrocute: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Electrocute", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    flash,
                    $t,
                    limb,
                    l,
                    $t1,
                    limb1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    t = 0;
                                        flash = false;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 1.4 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += 0.06;
                                        flash = !flash;
                                        $t = Bridge.getEnumerator(this.limbs);
                                        try {
                                            while ($t.moveNext()) {
                                                limb = $t.Current;
                                                limb.ShockAppearance(t / 1.4, flash);
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }
                                        l = this.limbs.getItem(UnityEngine.Random.Range(0, this.limbs.Count));
                                        this.game.Particles("msg_el_" + UnityEngine.Random.Range(0, 8), l.body.position, 3, new pc.Color( 1, 1, 1, 1 ));
                                        l.body.AddTorque(UnityEngine.Random.Range$1(-4.0, 4.0), UnityEngine.ForceMode2D.Impulse);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.06);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    $t1 = Bridge.getEnumerator(this.limbs);
                                        try {
                                            while ($t1.moveNext()) {
                                                limb1 = $t1.Current;
                                                limb1.ShockAppearance(1, false);
                                            }
                                        } finally {
                                            if (Bridge.is($t1, System.IDisposable)) {
                                                $t1.System$IDisposable$Dispose();
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*MelonSandbox.MelonRagdoll.Electrocute end.*/

            /*MelonSandbox.MelonRagdoll.Kill start.*/
            Kill: function (release, wait) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonRagdoll#Kill", this ); }

                if (this.dead) {
                    return;
                }
                this.dead = true;
                this.life = 0;
                if (release) {
                    this.Release();
                }
                this.game.Sound("smert_2");
                this.game.TargetDefeated(this, wait);
            },
            /*MelonSandbox.MelonRagdoll.Kill end.*/


        }
    });
    /*MelonSandbox.MelonRagdoll end.*/

    /*MelonSandbox.MelonStage start.*/
    Bridge.define("MelonSandbox.MelonStage", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            characters: null,
            tools: null,
            background: null,
            nodes: null,
            positions: null,
            scales: null,
            rotations: null,
            active: null,
            bodies: null,
            constraints: null,
            hinges: null,
            hingeEnabled: null,
            supports: null,
            targets: null,
            renderers: null,
            colors: null,
            rendererEnabled: null,
            originalChildren: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonStage#init", this ); }

                this.originalChildren = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
            }
        },
        methods: {
            /*MelonSandbox.MelonStage.Capture start.*/
            Capture: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonStage#Capture", this ); }

                var $t;
                if (this.nodes != null) {
                    return;
                }
                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        this.originalChildren.add(child);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.nodes = this.GetComponentsInChildren$1(UnityEngine.Transform, true);
                this.positions = System.Array.init(this.nodes.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.scales = System.Array.init(this.nodes.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.rotations = System.Array.init(this.nodes.length, function (){
                    return new UnityEngine.Quaternion();
                }, UnityEngine.Quaternion);
                this.active = System.Array.init(this.nodes.length, false, System.Boolean);
                for (var i = 0; i < this.nodes.length; i = (i + 1) | 0) {
                    this.positions[i] = this.nodes[i].localPosition.$clone();
                    this.rotations[i] = this.nodes[i].localRotation.$clone();
                    this.scales[i] = this.nodes[i].localScale.$clone();
                    this.active[i] = this.nodes[i].gameObject.activeSelf;
                }
                this.bodies = this.GetComponentsInChildren$1(UnityEngine.Rigidbody2D, true);
                this.constraints = System.Array.init(this.bodies.length, 0, UnityEngine.RigidbodyConstraints2D);
                for (var i1 = 0; i1 < this.bodies.length; i1 = (i1 + 1) | 0) {
                    this.constraints[i1] = this.bodies[i1].constraints;
                }
                this.hinges = this.GetComponentsInChildren$1(UnityEngine.HingeJoint2D, true);
                this.hingeEnabled = System.Array.init(this.hinges.length, false, System.Boolean);
                for (var i2 = 0; i2 < this.hinges.length; i2 = (i2 + 1) | 0) {
                    this.hingeEnabled[i2] = this.hinges[i2].enabled;
                }
                this.supports = this.GetComponentsInChildren$1(UnityEngine.TargetJoint2D, true);
                this.targets = System.Array.init(this.supports.length, function (){
                    return new UnityEngine.Vector2();
                }, UnityEngine.Vector2);
                for (var i3 = 0; i3 < this.supports.length; i3 = (i3 + 1) | 0) {
                    this.targets[i3] = this.supports[i3].target.$clone();
                }
                this.renderers = this.GetComponentsInChildren$1(UnityEngine.SpriteRenderer, true);
                this.colors = System.Array.init(this.renderers.length, function (){
                    return new UnityEngine.Color();
                }, UnityEngine.Color);
                this.rendererEnabled = System.Array.init(this.renderers.length, false, System.Boolean);
                for (var i4 = 0; i4 < this.renderers.length; i4 = (i4 + 1) | 0) {
                    this.colors[i4] = this.renderers[i4].color.$clone();
                    this.rendererEnabled[i4] = this.renderers[i4].enabled;
                }
            },
            /*MelonSandbox.MelonStage.Capture end.*/

            /*MelonSandbox.MelonStage.Restore start.*/
            Restore: function (game) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonStage#Restore", this ); }

                var $t, $t1, $t2;
                this.Capture();
                for (var i = (this.transform.childCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var child = this.transform.GetChild(i);
                    if (!this.originalChildren.contains(child)) {
                        MelonSandbox.MelonGame.Dispose(child.gameObject);
                    }
                }
                $t = Bridge.getEnumerator(this.tools);
                try {
                    while ($t.moveNext()) {
                        var tool = $t.Current;
                        tool.ResetForStage(game);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                for (var i1 = 0; i1 < this.nodes.length; i1 = (i1 + 1) | 0) {
                    this.nodes[i1].localPosition = this.positions[i1].$clone();
                    this.nodes[i1].localRotation = this.rotations[i1].$clone();
                    this.nodes[i1].localScale = this.scales[i1].$clone();
                    if (UnityEngine.Component.op_Inequality(this.nodes[i1], this.transform)) {
                        this.nodes[i1].gameObject.SetActive(this.active[i1]);
                    }
                }
                for (var i2 = 0; i2 < this.bodies.length; i2 = (i2 + 1) | 0) {
                    this.bodies[i2].position = UnityEngine.Vector2.FromVector3(this.bodies[i2].transform.position.$clone());
                    this.bodies[i2].rotation = this.bodies[i2].transform.eulerAngles.z;
                    this.bodies[i2].linearVelocity = pc.Vec2.ZERO.clone();
                    this.bodies[i2].angularVelocity = 0;
                    this.bodies[i2].constraints = this.constraints[i2];
                }
                for (var i3 = 0; i3 < this.hinges.length; i3 = (i3 + 1) | 0) {
                    this.hinges[i3].enabled = this.hingeEnabled[i3];
                }
                for (var i4 = 0; i4 < this.supports.length; i4 = (i4 + 1) | 0) {
                    this.supports[i4].target = this.targets[i4].$clone();
                    this.supports[i4].enabled = true;
                }
                $t1 = Bridge.getEnumerator(this.characters);
                try {
                    while ($t1.moveNext()) {
                        var character = $t1.Current;
                        character.StopAllCoroutines();
                        character.game = game;
                        character.dead = false;
                        character.life = 100;
                        character.hits = 0;
                        character.parade = false;
                        $t2 = Bridge.getEnumerator(character.limbs);
                        try {
                            while ($t2.moveNext()) {
                                var limb = $t2.Current;
                                limb.ResetDamage();
                            }
                        } finally {
                            if (Bridge.is($t2, System.IDisposable)) {
                                $t2.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                for (var i5 = 0; i5 < this.renderers.length; i5 = (i5 + 1) | 0) {
                    this.renderers[i5].color = this.colors[i5].$clone();
                    this.renderers[i5].enabled = this.rendererEnabled[i5];
                }
            },
            /*MelonSandbox.MelonStage.Restore end.*/


        }
    });
    /*MelonSandbox.MelonStage end.*/

    /*MelonSandbox.MelonTool start.*/
    Bridge.define("MelonSandbox.MelonTool", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            game: null,
            kind: 0,
            body: null,
            intendedTarget: null,
            held: false,
            used: false,
            blade: null,
            drag: null,
            lastHit: 0,
            nextShot: 0,
            nextAmbient: 0
        },
        props: {
            Syringe: {
                get: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#Syringe#get", this ); }

                    return this.kind <= MelonSandbox.MelonToolKind.SyringeCut;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#init", this ); }

                this.lastHit = -100;
            }
        },
        methods: {
            /*MelonSandbox.MelonTool.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#Awake", this ); }

                if (!UnityEngine.Object.op_Implicit(this.game)) {
                    this.game = MelonSandbox.MelonGame.Instance;
                }
            },
            /*MelonSandbox.MelonTool.Awake end.*/

            /*MelonSandbox.MelonTool.ResetForStage start.*/
            ResetForStage: function (controller) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#ResetForStage", this ); }

                this.game = controller;
                if (UnityEngine.Object.op_Implicit(this.drag)) {
                    this.drag.enabled = false;
                    UnityEngine.Object.Destroy(this.drag);
                }
                this.drag = null;
                this.held = false;
                this.used = false;
                this.intendedTarget = null;
                this.lastHit = -100;
                this.nextShot = (this.nextAmbient = 0);
            },
            /*MelonSandbox.MelonTool.ResetForStage end.*/

            /*MelonSandbox.MelonTool.ConfigurePlacement start.*/
            ConfigurePlacement: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#ConfigurePlacement", this ); }

                var $t;
                if (this.kind !== MelonSandbox.MelonToolKind.Saw) {
                    return;
                }
                this.body.rotation = 0;
                this.transform.rotation = pc.Quat.IDENTITY.clone();
                this.body.constraints |= UnityEngine.RigidbodyConstraints2D.FreezeRotation;
                var bottom = Number.POSITIVE_INFINITY;
                $t = Bridge.getEnumerator(this.GetComponentsInChildren(UnityEngine.SpriteRenderer));
                try {
                    while ($t.moveNext()) {
                        var visual = $t.Current;
                        bottom = UnityEngine.Mathf.Min(bottom, visual.bounds.min.y);
                        if (UnityEngine.Component.op_Equality(visual, this.blade)) {
                            continue;
                        }
                        // The blade collider alone lets the gripCollider sink through the floor.
                        var gripCollider = visual.GetComponent(UnityEngine.BoxCollider2D);
                        if (!UnityEngine.Object.op_Implicit(gripCollider)) {
                            gripCollider = visual.gameObject.AddComponent(UnityEngine.BoxCollider2D);
                        }
                        gripCollider.offset = UnityEngine.Vector2.FromVector3(visual.sprite.bounds.center.$clone());
                        gripCollider.size = UnityEngine.Vector2.FromVector3(visual.sprite.bounds.halfExtents.$clone().scale( 2 ).$clone());
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (!(Math.abs(bottom) === Number.POSITIVE_INFINITY)) {
                    this.transform.position = this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( (0.02 - bottom) ) );
                    this.body.position = UnityEngine.Vector2.FromVector3(this.transform.position.$clone());
                }
            },
            /*MelonSandbox.MelonTool.ConfigurePlacement end.*/

            /*MelonSandbox.MelonTool.Grab start.*/
            Grab: function (position) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#Grab", this ); }

                this.held = true;
                this.body.WakeUp();
                this.drag = this.gameObject.AddComponent(UnityEngine.TargetJoint2D);
                this.drag.autoConfigureTarget = false;
                this.drag.maxForce = 3000;
                this.drag.frequency = 7;
                this.drag.dampingRatio = 0.9;
                this.drag.target = position.$clone();
                this.game.Loop(this.kind === MelonSandbox.MelonToolKind.Saw ? "pila" : this.kind === MelonSandbox.MelonToolKind.Shock ? "shok" : this.kind === MelonSandbox.MelonToolKind.Flame ? "flame" : null);
            },
            /*MelonSandbox.MelonTool.Grab end.*/

            /*MelonSandbox.MelonTool.Drag start.*/
            Drag: function (point) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#Drag", this ); }

                if (UnityEngine.Object.op_Implicit(this.drag)) {
                    this.drag.target = point.$clone();
                }
            },
            /*MelonSandbox.MelonTool.Drag end.*/

            /*MelonSandbox.MelonTool.Drop start.*/
            Drop: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#Drop", this ); }

                this.held = false;
                if (UnityEngine.Object.op_Implicit(this.drag)) {
                    UnityEngine.Object.Destroy(this.drag);
                }
                this.game.Loop(null);
            },
            /*MelonSandbox.MelonTool.Drop end.*/

            /*MelonSandbox.MelonTool.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#FixedUpdate", this ); }

                if (!this.held || !UnityEngine.Object.op_Implicit(this.game) || this.game.Paused) {
                    return;
                }
                if (this.kind === MelonSandbox.MelonToolKind.Rifle || this.kind === MelonSandbox.MelonToolKind.Flame) {
                    var target = this.game.NextTarget(this.kind === MelonSandbox.MelonToolKind.Rifle ? 1 : 0);
                    if (!UnityEngine.Object.op_Implicit(target)) {
                        target = this.game.NextTarget(-1);
                    }
                    if (UnityEngine.Object.op_Implicit(target)) {
                        var direction = target.Torso.body.position.$clone().sub( this.body.position );
                        var angle = Math.atan2(direction.y, direction.x) * UnityEngine.Mathf.Rad2Deg;
                        this.body.angularVelocity = UnityEngine.Mathf.DeltaAngle(this.body.rotation, angle) * 12;
                        if (UnityEngine.Time.time >= this.nextShot) {
                            this.nextShot = UnityEngine.Time.time + (this.kind === MelonSandbox.MelonToolKind.Rifle ? 0.11 : 0.055);
                            this.game.Fire(this, target);
                        }
                    }
                } else {
                    this.body.angularVelocity = UnityEngine.Mathf.DeltaAngle(this.body.rotation, 0) * 8;
                }
            },
            /*MelonSandbox.MelonTool.FixedUpdate end.*/

            /*MelonSandbox.MelonTool.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#Update", this ); }

                if (UnityEngine.Object.op_Implicit(this.blade) && UnityEngine.Object.op_Implicit(this.game)) {
                    this.blade.sprite = this.game.assets.Sprite("msg_les_" + (Math.floor(UnityEngine.Time.time * 10) % 2));
                }
                if (!UnityEngine.Object.op_Implicit(this.game) || UnityEngine.Time.time < this.nextAmbient) {
                    return;
                }
                this.nextAmbient = UnityEngine.Time.time + 0.22;
                if (this.kind === MelonSandbox.MelonToolKind.Saw) {
                    this.game.Particles("msg_dym", this.body.position, 1, new pc.Color( 1, 1, 1, 0.15 ));
                }
                if (this.kind === MelonSandbox.MelonToolKind.Shock) {
                    this.game.Particles("msg_el_" + UnityEngine.Random.Range(0, 8), this.body.position.$clone().add( UnityEngine.Vector2.FromVector3(this.transform.right) ), 1, new pc.Color( 1, 1, 1, 1 ));
                }
            },
            /*MelonSandbox.MelonTool.Update end.*/

            /*MelonSandbox.MelonTool.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#OnCollisionEnter2D", this ); }

                this.Contact(collision);
            },
            /*MelonSandbox.MelonTool.OnCollisionEnter2D end.*/

            /*MelonSandbox.MelonTool.OnCollisionStay2D start.*/
            OnCollisionStay2D: function (collision) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#OnCollisionStay2D", this ); }

                this.Contact(collision);
            },
            /*MelonSandbox.MelonTool.OnCollisionStay2D end.*/

            /*MelonSandbox.MelonTool.Contact start.*/
            Contact: function (collision) {
if ( TRACE ) { TRACE( "MelonSandbox.MelonTool#Contact", this ); }

                var $t, $t1;
                if (this.used || (!this.held && !this.Syringe) || UnityEngine.Time.time - this.lastHit < 0.14) {
                    return;
                }
                var limb = collision.collider.GetComponent(MelonSandbox.MelonLimb);
                if (!UnityEngine.Object.op_Implicit(limb) || limb.owner.dead || (UnityEngine.Object.op_Implicit(this.intendedTarget) && UnityEngine.MonoBehaviour.op_Inequality(limb.owner, this.intendedTarget))) {
                    return;
                }
                if (this.kind === MelonSandbox.MelonToolKind.Flame || this.kind === MelonSandbox.MelonToolKind.Rifle) {
                    return;
                }
                this.lastHit = UnityEngine.Time.time;
                var point = collision.contactCount > 0 ? collision.GetContact(0).point.$clone() : limb.body.position.$clone();
                limb.owner.Apply(this.kind, limb, point);
                if (this.Syringe) {
                    this.used = true;
                    this.body.gravityScale = 1;
                    var visual = this.GetComponentInChildren(UnityEngine.SpriteRenderer);
                    var bounds = visual.sprite.bounds;
                    var tip = UnityEngine.Vector2.FromVector3(visual.transform.TransformPoint$1(new pc.Vec3( bounds.min.x, bounds.center.y, 0 )));
                    var direction = UnityEngine.Vector2.FromVector3(this.transform.right).scale( -1 );
                    // Insert the full needle shaft, so the barrel meets the visible body.
                    var neck = UnityEngine.Vector2.FromVector3(visual.transform.TransformPoint$1(new pc.Vec3( bounds.min.x + bounds.halfExtents.$clone().scale( 2 ).x * 0.29, bounds.center.y, 0 )));
                    var surface = point.$clone();
                    var distance = { };
                    if (limb.skin.bounds.intersectRayDistance( new UnityEngine.Ray.$ctor1(UnityEngine.Vector3.FromVector2(this.body.position), UnityEngine.Vector3.FromVector2(direction)), distance )) {
                        surface = this.body.position.$clone().add( direction.$clone().scale( distance.v ) );
                    }
                    var embeddedTip = surface.$clone().add( direction.$clone().scale( (tip.$clone().sub( neck ).length() + 0.05) ) );
                    var localTip = UnityEngine.Vector2.FromVector3(this.transform.InverseTransformPoint(UnityEngine.Vector3.FromVector2(tip)));
                    this.body.position = this.body.position.$clone().add( embeddedTip.$clone().sub( tip ) );
                    this.body.linearVelocity = limb.body.linearVelocity.$clone();
                    this.body.angularVelocity = limb.body.angularVelocity;
                    $t = Bridge.getEnumerator(this.GetComponentsInChildren(UnityEngine.Collider2D));
                    try {
                        while ($t.moveNext()) {
                            var own = $t.Current;
                            $t1 = Bridge.getEnumerator(limb.owner.GetComponentsInChildren(UnityEngine.Collider2D));
                            try {
                                while ($t1.moveNext()) {
                                    var target = $t1.Current;
                                    MelonSandbox.MelonGame.IgnoreActiveCollision(own, target);
                                }
                            } finally {
                                if (Bridge.is($t1, System.IDisposable)) {
                                    $t1.System$IDisposable$Dispose();
                                }
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    var joint = this.gameObject.AddComponent(UnityEngine.FixedJoint2D);
                    joint.connectedBody = limb.body;
                    joint.autoConfigureConnectedAnchor = false;
                    joint.anchor = localTip.$clone();
                    joint.connectedAnchor = UnityEngine.Vector2.FromVector3(limb.transform.InverseTransformPoint(UnityEngine.Vector3.FromVector2(embeddedTip)));
                    joint.enableCollision = false;
                }
            },
            /*MelonSandbox.MelonTool.Contact end.*/


        }
    });
    /*MelonSandbox.MelonTool end.*/

    /*MelonSandbox.MelonToolKind start.*/
    Bridge.define("MelonSandbox.MelonToolKind", {
        $kind: 6,
        statics: {
            fields: {
                SyringeAcid: 0,
                SyringeFire: 1,
                SyringeCut: 2,
                Saw: 3,
                Shock: 4,
                Flame: 5,
                Rifle: 6
            }
        }
    });
    /*MelonSandbox.MelonToolKind end.*/

    /*Playable.GameManager start.*/
    Bridge.define("Playable.GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            _totalEvent: 0,
            _endTime: 0,
            _backgroundMusic: null,
            _backgroundTexture: null,
            _btnBlock: null,
            _background: null,
            _quantityEvent: 0,
            _hasEnded: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Playable.GameManager#init", this ); }

                this._endTime = 30;
                this._quantityEvent = 0;
            }
        },
        methods: {
            /*Playable.GameManager.ReparentEndGameButton start.*/
            ReparentEndGameButton: function (parent) {
if ( TRACE ) { TRACE( "Playable.GameManager#ReparentEndGameButton", this ); }

                var $t;
                if (!UnityEngine.Object.op_Implicit(this._btnBlock)) {
                    return;
                }
                this._btnBlock.transform.SetParent(parent, false);
                var rect = Bridge.cast(this._btnBlock.transform, UnityEngine.RectTransform);
                rect.anchorMin = pc.Vec2.ZERO.clone();
                rect.anchorMax = pc.Vec2.ONE.clone();
                rect.offsetMin = ($t = pc.Vec2.ZERO.clone(), rect.offsetMax = $t.$clone(), $t);
                rect.SetAsLastSibling();
            },
            /*Playable.GameManager.ReparentEndGameButton end.*/

            /*Playable.GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Playable.GameManager#Awake", this ); }

                Playable.GameManager.Instance = this;
            },
            /*Playable.GameManager.Awake end.*/

            /*Playable.GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Playable.GameManager#Start", this ); }

                this._btnBlock.onClick.AddListener(Bridge.fn.cacheBind(this, this.ShowCTA));
                this._btnBlock.gameObject.SetActive(false);

                this.CountdownEndGame();
            },
            /*Playable.GameManager.Start end.*/

            /*Playable.GameManager.EndGame start.*/
            EndGame: function () {
if ( TRACE ) { TRACE( "Playable.GameManager#EndGame", this ); }

                if (this._hasEnded) {
                    return;
                }
                this._hasEnded = true;
                this._btnBlock.gameObject.SetActive(true);
                Luna.Unity.LifeCycle.GameEnded();
            },
            /*Playable.GameManager.EndGame end.*/

            /*Playable.GameManager.ShowCTA start.*/
            ShowCTA: function () {
if ( TRACE ) { TRACE( "Playable.GameManager#ShowCTA", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*Playable.GameManager.ShowCTA end.*/

            /*Playable.GameManager.CountEvent start.*/
            CountEvent: function () {
if ( TRACE ) { TRACE( "Playable.GameManager#CountEvent", this ); }

                this._quantityEvent = (this._quantityEvent + 1) | 0;
                if (this._quantityEvent >= this._totalEvent) {
                    this.EndGame();
                }
            },
            /*Playable.GameManager.CountEvent end.*/

            /*Playable.GameManager.CountdownEndGame start.*/
            CountdownEndGame: function () {
if ( TRACE ) { TRACE( "Playable.GameManager#CountdownEndGame", this ); }

                this.StartCoroutine$1(this.IECountdownEndGame());
            },
            /*Playable.GameManager.CountdownEndGame end.*/

            /*Playable.GameManager.IECountdownEndGame start.*/
            IECountdownEndGame: function () {
if ( TRACE ) { TRACE( "Playable.GameManager#IECountdownEndGame", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this._endTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.EndGame();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.ShowCTA();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Playable.GameManager.IECountdownEndGame end.*/

            /*Playable.GameManager.CreateSprite start.*/
            CreateSprite: function (texture) {
if ( TRACE ) { TRACE( "Playable.GameManager#CreateSprite", this ); }

                return UnityEngine.Sprite.Create(texture, new UnityEngine.Rect.$ctor1(0.0, 0.0, texture.width, texture.height), new pc.Vec2( 0.5, 0.5 ));
            },
            /*Playable.GameManager.CreateSprite end.*/


        }
    });
    /*Playable.GameManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","MelonSandbox","System.Collections.Generic","System.Collections","UnityEngine.UI","Playable"];

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*MelonSandbox.LayoutNode start.*/
    $m("MelonSandbox.LayoutNode", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"groups","t":4,"rt":System.Array.type(MelonSandbox.LayoutChild),"sn":"groups"},{"a":2,"n":"h","t":4,"rt":$n[0].Single,"sn":"h","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"name","t":4,"rt":$n[0].String,"sn":"name"},{"a":2,"n":"pic","t":4,"rt":$n[0].String,"sn":"pic"},{"a":2,"n":"type","t":4,"rt":$n[0].String,"sn":"type"},{"a":2,"n":"w","t":4,"rt":$n[0].Single,"sn":"w","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"x","t":4,"rt":$n[0].Single,"sn":"x","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"y","t":4,"rt":$n[0].Single,"sn":"y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MelonSandbox.LayoutNode end.*/

    /*MelonSandbox.LayoutChild start.*/
    $m("MelonSandbox.LayoutChild", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"h","t":4,"rt":$n[0].Single,"sn":"h","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"name","t":4,"rt":$n[0].String,"sn":"name"},{"a":2,"n":"pic","t":4,"rt":$n[0].String,"sn":"pic"},{"a":2,"n":"type","t":4,"rt":$n[0].String,"sn":"type"},{"a":2,"n":"w","t":4,"rt":$n[0].Single,"sn":"w","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"x","t":4,"rt":$n[0].Single,"sn":"x","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"y","t":4,"rt":$n[0].Single,"sn":"y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MelonSandbox.LayoutChild end.*/

    /*MelonSandbox.LayoutWindow start.*/
    $m("MelonSandbox.LayoutWindow", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"groups","t":4,"rt":System.Array.type(MelonSandbox.LayoutNode),"sn":"groups"},{"a":2,"n":"name","t":4,"rt":$n[0].String,"sn":"name"}]}; }, $n);
    /*MelonSandbox.LayoutWindow end.*/

    /*MelonSandbox.LayoutDocument start.*/
    $m("MelonSandbox.LayoutDocument", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"windows","t":4,"rt":System.Array.type(MelonSandbox.LayoutWindow),"sn":"windows"}]}; }, $n);
    /*MelonSandbox.LayoutDocument end.*/

    /*MelonSandbox.MelonAssets start.*/
    $m("MelonSandbox.MelonAssets", function () { return {"att":1048833,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        menuName: "Melon Sandbox/Asset catalog"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CharacterPrefab","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0}],"sn":"CharacterPrefab","rt":$n[1].GameObject,"p":[$n[0].String]},{"a":2,"n":"Node","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0},{"n":"window","dv":"MSG","o":true,"pt":$n[0].String,"ps":1}],"sn":"Node","rt":$n[2].LayoutNode,"p":[$n[0].String,$n[0].String]},{"a":1,"n":"ParseLayout","is":true,"t":8,"pi":[{"n":"json","pt":$n[0].String,"ps":0}],"sn":"ParseLayout","rt":$n[2].LayoutDocument,"p":[$n[0].String]},{"a":2,"n":"Prepare","t":8,"sn":"Prepare","rt":$n[0].Void},{"a":2,"n":"Sound","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0}],"sn":"Sound","rt":$n[1].AudioClip,"p":[$n[0].String]},{"a":2,"n":"Sprite","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0}],"sn":"Sprite","rt":$n[1].Sprite,"p":[$n[0].String]},{"a":2,"n":"ToolPrefab","t":8,"pi":[{"n":"kind","pt":$n[2].MelonToolKind,"ps":0}],"sn":"ToolPrefab","rt":$n[1].GameObject,"p":[$n[2].MelonToolKind]},{"a":2,"n":"Visual","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0},{"n":"parent","pt":$n[1].Transform,"ps":1},{"n":"position","pt":$n[1].Vector2,"ps":2},{"n":"size","pt":$n[1].Vector2,"ps":3},{"n":"order","pt":$n[0].Int32,"ps":4}],"sn":"Visual","rt":$n[1].SpriteRenderer,"p":[$n[0].String,$n[1].Transform,$n[1].Vector2,$n[1].Vector2,$n[0].Int32]},{"a":2,"n":"characterPrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"characterPrefabs"},{"a":2,"n":"damageMaterial","t":4,"rt":$n[1].Material,"sn":"damageMaterial"},{"a":1,"n":"nodes","t":4,"rt":$n[3].Dictionary$2(System.String,MelonSandbox.LayoutNode),"sn":"nodes"},{"a":2,"n":"originalLayout","t":4,"rt":$n[1].TextAsset,"sn":"originalLayout"},{"a":1,"n":"soundMap","t":4,"rt":$n[3].Dictionary$2(System.String,UnityEngine.AudioClip),"sn":"soundMap"},{"a":2,"n":"sounds","t":4,"rt":System.Array.type(UnityEngine.AudioClip),"sn":"sounds"},{"a":1,"n":"spriteMap","t":4,"rt":$n[3].Dictionary$2(System.String,UnityEngine.Sprite),"sn":"spriteMap"},{"a":2,"n":"sprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"sprites"},{"a":2,"n":"toolPrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"toolPrefabs"},{"a":2,"n":"uiFont","t":4,"rt":$n[1].Font,"sn":"uiFont"}]}; }, $n);
    /*MelonSandbox.MelonAssets end.*/

    /*MelonSandbox.MelonGame start.*/
    $m("MelonSandbox.MelonGame", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AdvanceAfter","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0},{"n":"generation","pt":$n[0].Int32,"ps":1}],"sn":"AdvanceAfter","rt":$n[4].IEnumerator,"p":[$n[0].Single,$n[0].Int32]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"BuildStagePreview","t":8,"pi":[{"n":"stage","pt":$n[0].Int32,"ps":0}],"sn":"BuildStagePreview","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"CanSyringe","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"CanSyringe","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CreateTool","t":8,"pi":[{"n":"kind","pt":$n[2].MelonToolKind,"ps":0},{"n":"point","pt":$n[1].Vector2,"ps":1}],"sn":"CreateTool","rt":$n[2].MelonTool,"p":[$n[2].MelonToolKind,$n[1].Vector2]},{"a":2,"n":"Dispose","is":true,"t":8,"pi":[{"n":"go","pt":$n[1].GameObject,"ps":0}],"sn":"Dispose","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"Fire","t":8,"pi":[{"n":"source","pt":$n[2].MelonTool,"ps":0},{"n":"target","pt":$n[2].MelonRagdoll,"ps":1}],"sn":"Fire","rt":$n[0].Void,"p":[$n[2].MelonTool,$n[2].MelonRagdoll]},{"a":1,"n":"FitCamera","t":8,"sn":"FitCamera","rt":$n[0].Void},{"a":2,"n":"FromPixels","is":true,"t":8,"pi":[{"n":"x","pt":$n[0].Single,"ps":0},{"n":"y","pt":$n[0].Single,"ps":1}],"sn":"FromPixels","rt":$n[1].Vector2,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"GetTool","t":8,"pi":[{"n":"kind","pt":$n[2].MelonToolKind,"ps":0}],"sn":"GetTool","rt":$n[2].MelonTool,"p":[$n[2].MelonToolKind]},{"a":2,"n":"IgnoreActiveCollision","is":true,"t":8,"pi":[{"n":"a","pt":$n[1].Collider2D,"ps":0},{"n":"b","pt":$n[1].Collider2D,"ps":1}],"sn":"IgnoreActiveCollision","rt":$n[0].Void,"p":[$n[1].Collider2D,$n[1].Collider2D]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"runtime","pt":$n[0].Boolean,"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"LoadStage","t":8,"pi":[{"n":"stage","pt":$n[0].Int32,"ps":0}],"sn":"LoadStage","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Loop","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"Loop","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"NextTarget","t":8,"pi":[{"n":"group","pt":$n[0].Int32,"ps":0}],"sn":"NextTarget","rt":$n[2].MelonRagdoll,"p":[$n[0].Int32]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OverUI","t":8,"pi":[{"n":"screen","pt":$n[1].Vector2,"ps":0}],"sn":"OverUI","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Particles","t":8,"pi":[{"n":"sprite","pt":$n[0].String,"ps":0},{"n":"position","pt":$n[1].Vector2,"ps":1},{"n":"count","pt":$n[0].Int32,"ps":2},{"n":"color","pt":$n[1].Color,"ps":3}],"sn":"Particles","rt":$n[0].Void,"p":[$n[0].String,$n[1].Vector2,$n[0].Int32,$n[1].Color]},{"a":1,"n":"Prop","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0},{"n":"position","pt":$n[1].Vector2,"ps":1},{"n":"isStatic","pt":$n[0].Boolean,"ps":2}],"sn":"Prop","rt":$n[0].Void,"p":[$n[0].String,$n[1].Vector2,$n[0].Boolean]},{"a":1,"n":"ReleasePointer","t":8,"sn":"ReleasePointer","rt":$n[0].Void},{"a":2,"n":"Restart","t":8,"sn":"Restart","rt":$n[0].Void},{"a":2,"n":"Sound","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0},{"n":"volume","dv":1.0,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"Sound","rt":$n[0].Void,"p":[$n[0].String,$n[0].Single]},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"skin","pt":$n[0].String,"ps":0},{"n":"offset","pt":$n[1].Vector2,"ps":1},{"n":"suspended","pt":$n[0].Boolean,"ps":2}],"sn":"Spawn","rt":$n[2].MelonRagdoll,"p":[$n[0].String,$n[1].Vector2,$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"SyringeRecovery","t":8,"pi":[{"n":"tool","pt":$n[2].MelonTool,"ps":0},{"n":"index","pt":$n[0].Int32,"ps":1},{"n":"generation","pt":$n[0].Int32,"ps":2}],"sn":"SyringeRecovery","rt":$n[4].IEnumerator,"p":[$n[2].MelonTool,$n[0].Int32,$n[0].Int32]},{"a":2,"n":"TargetDefeated","t":8,"pi":[{"n":"target","pt":$n[2].MelonRagdoll,"ps":0},{"n":"delay","pt":$n[0].Single,"ps":1}],"sn":"TargetDefeated","rt":$n[0].Void,"p":[$n[2].MelonRagdoll,$n[0].Single]},{"a":2,"n":"ToggleAudio","t":8,"sn":"ToggleAudio","rt":$n[0].Void},{"a":2,"n":"TogglePause","t":8,"sn":"TogglePause","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"UseSyringe","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"UseSyringe","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"UserInput","t":8,"sn":"UserInput","rt":$n[0].Void},{"a":2,"n":"Defeated","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Defeated","t":8,"rt":$n[0].Int32,"fg":"Defeated","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_Defeated","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Defeated"},"fn":"Defeated"},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[2].MelonGame,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[2].MelonGame,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[$n[2].MelonGame],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"Paused","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Paused","t":8,"rt":$n[0].Boolean,"fg":"Paused","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Paused","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"Paused"},"fn":"Paused"},{"a":2,"n":"Stage","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Stage","t":8,"rt":$n[0].Int32,"fg":"Stage","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_Stage","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Stage"},"fn":"Stage"},{"a":2,"n":"assets","t":4,"rt":$n[2].MelonAssets,"sn":"assets"},{"a":2,"n":"background","t":4,"rt":$n[1].SpriteRenderer,"sn":"background"},{"a":2,"n":"characters","t":4,"rt":$n[3].List$1(MelonSandbox.MelonRagdoll),"sn":"characters","ro":true},{"a":1,"n":"effects","t":4,"rt":$n[1].AudioSource,"sn":"effects"},{"a":2,"n":"gameCamera","t":4,"rt":$n[1].Camera,"sn":"gameCamera"},{"a":2,"n":"hud","t":4,"rt":$n[2].MelonHud,"sn":"hud"},{"a":1,"n":"lastInput","t":4,"rt":$n[0].Single,"sn":"lastInput","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"loop","t":4,"rt":$n[1].AudioSource,"sn":"loop"},{"a":1,"n":"music","t":4,"rt":$n[1].AudioSource,"sn":"music"},{"a":2,"n":"sceneStages","t":4,"rt":System.Array.type(MelonSandbox.MelonStage),"sn":"sceneStages"},{"a":1,"n":"selected","t":4,"rt":$n[2].MelonTool,"sn":"selected"},{"a":1,"n":"stageGeneration","t":4,"rt":$n[0].Int32,"sn":"stageGeneration","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.RangeAttribute(0.0, 3.0)],"a":2,"n":"startingStage","t":4,"rt":$n[0].Int32,"sn":"startingStage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"syringeBusy","t":4,"rt":$n[0].Boolean,"sn":"syringeBusy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"tools","t":4,"rt":$n[3].List$1(MelonSandbox.MelonTool),"sn":"tools","ro":true},{"a":1,"n":"usedSyringes","t":4,"rt":$n[0].Array.type(System.Boolean),"sn":"usedSyringes","ro":true},{"a":2,"n":"world","t":4,"rt":$n[1].Transform,"sn":"world"},{"a":1,"backing":true,"n":"<Defeated>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Defeated","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":$n[2].MelonGame,"sn":"Instance"},{"a":1,"backing":true,"n":"<Paused>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"Paused","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<Stage>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Stage","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*MelonSandbox.MelonGame end.*/

    /*MelonSandbox.MelonHud start.*/
    $m("MelonSandbox.MelonHud", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Build","t":8,"pi":[{"n":"owner","pt":$n[2].MelonGame,"ps":0}],"sn":"Build","rt":$n[0].Void,"p":[$n[2].MelonGame]},{"a":1,"n":"HideHint","t":8,"sn":"HideHint","rt":$n[0].Void},{"a":1,"n":"Label","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0},{"n":"parent","pt":$n[1].Transform,"ps":1},{"n":"pos","pt":$n[1].Vector2,"ps":2},{"n":"size","pt":$n[1].Vector2,"ps":3},{"n":"fontSize","pt":$n[0].Int32,"ps":4}],"sn":"Label","rt":$n[5].Text,"p":[$n[0].String,$n[1].Transform,$n[1].Vector2,$n[1].Vector2,$n[0].Int32]},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Refresh","t":8,"sn":"Refresh","rt":$n[0].Void},{"a":2,"n":"SetHint","t":8,"pi":[{"n":"show","pt":$n[0].Boolean,"ps":0},{"n":"selected","pt":$n[2].MelonTool,"ps":1}],"sn":"SetHint","rt":$n[0].Void,"p":[$n[0].Boolean,$n[2].MelonTool]},{"a":1,"n":"UpdateHint","t":8,"sn":"UpdateHint","rt":$n[0].Void},{"a":1,"n":"UpdateLayout","t":8,"sn":"UpdateLayout","rt":$n[0].Void},{"a":1,"n":"canvas","t":4,"rt":$n[1].Canvas,"sn":"canvas"},{"a":1,"n":"cardRow","t":4,"rt":$n[1].RectTransform,"sn":"cardRow"},{"a":1,"n":"cardText","t":4,"rt":System.Array.type(UnityEngine.UI.Text),"sn":"cardText"},{"a":1,"n":"cards","t":4,"rt":System.Array.type(UnityEngine.UI.Button),"sn":"cards"},{"a":1,"n":"finger","t":4,"rt":$n[1].RectTransform,"sn":"finger"},{"a":1,"n":"font","t":4,"rt":$n[1].Font,"sn":"font"},{"a":1,"n":"game","t":4,"rt":$n[2].MelonGame,"sn":"game"},{"a":1,"n":"icons","t":4,"rt":System.Array.type(UnityEngine.UI.Image),"sn":"icons"},{"a":1,"n":"layoutHeight","t":4,"rt":$n[0].Int32,"sn":"layoutHeight","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"layoutWidth","t":4,"rt":$n[0].Int32,"sn":"layoutWidth","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"scaler","t":4,"rt":$n[5].CanvasScaler,"sn":"scaler"},{"a":1,"n":"selectedTool","t":4,"rt":$n[2].MelonTool,"sn":"selectedTool"},{"a":1,"n":"showHint","t":4,"rt":$n[0].Boolean,"sn":"showHint","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*MelonSandbox.MelonHud end.*/

    /*MelonSandbox.MelonLimb start.*/
    $m("MelonSandbox.MelonLimb", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BeginDamage","t":8,"sn":"BeginDamage","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"BurnSkin","t":8,"pi":[{"n":"progress","pt":$n[0].Single,"ps":0}],"sn":"BurnSkin","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"CaptureAppearance","t":8,"sn":"CaptureAppearance","rt":$n[0].Void},{"a":2,"n":"CompleteDissolve","t":8,"sn":"CompleteDissolve","rt":$n[0].Void},{"a":2,"n":"Cut","t":8,"pi":[{"n":"worldPoint","pt":$n[1].Vector2,"ps":0},{"n":"size","pt":$n[0].Single,"ps":1}],"sn":"Cut","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single]},{"a":2,"n":"Detach","t":8,"sn":"Detach","rt":$n[0].Void},{"a":2,"n":"Dissolve","t":8,"pi":[{"n":"point","pt":$n[1].Vector2,"ps":0},{"n":"radius","pt":$n[0].Single,"ps":1},{"n":"fire","pt":$n[0].Boolean,"ps":2}],"sn":"Dissolve","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ReleaseDamageMaterial","t":8,"sn":"ReleaseDamageMaterial","rt":$n[0].Void},{"a":2,"n":"ResetDamage","t":8,"sn":"ResetDamage","rt":$n[0].Void},{"a":2,"n":"ShockAppearance","t":8,"pi":[{"n":"progress","pt":$n[0].Single,"ps":0},{"n":"flash","pt":$n[0].Boolean,"ps":1}],"sn":"ShockAppearance","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Boolean]},{"a":1,"n":"UpdateDamageCoordinates","t":8,"sn":"UpdateDamageCoordinates","rt":$n[0].Void},{"a":1,"n":"HoleNames","is":true,"t":4,"rt":$n[0].Array.type(System.String),"sn":"HoleNames","ro":true},{"a":1,"n":"appearanceCaptured","t":4,"rt":$n[0].Boolean,"sn":"appearanceCaptured","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"body","t":4,"rt":$n[1].Rigidbody2D,"sn":"body"},{"a":1,"n":"damageUnavailable","t":4,"rt":$n[0].Boolean,"sn":"damageUnavailable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"dimensions","t":4,"rt":$n[1].Vector2,"sn":"dimensions"},{"a":1,"n":"effectMaterial","t":4,"rt":$n[1].Material,"sn":"effectMaterial"},{"a":2,"n":"inner","t":4,"rt":$n[1].SpriteRenderer,"sn":"inner"},{"a":1,"n":"nextHole","t":4,"rt":$n[0].Int32,"sn":"nextHole","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"originalMaterial","t":4,"rt":$n[1].Material,"sn":"originalMaterial"},{"a":1,"n":"originalSkinColor","t":4,"rt":$n[1].Color,"sn":"originalSkinColor"},{"a":2,"n":"owner","t":4,"rt":$n[2].MelonRagdoll,"sn":"owner"},{"a":2,"n":"partName","t":4,"rt":$n[0].String,"sn":"partName"},{"a":2,"n":"skin","t":4,"rt":$n[1].SpriteRenderer,"sn":"skin"}]}; }, $n);
    /*MelonSandbox.MelonLimb end.*/

    /*MelonSandbox.MelonParticle start.*/
    $m("MelonSandbox.MelonParticle", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"elapsed","t":4,"rt":$n[0].Single,"sn":"elapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"gravity","t":4,"rt":$n[0].Single,"sn":"gravity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"grow","t":4,"rt":$n[0].Boolean,"sn":"grow","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"initialAlpha","t":4,"rt":$n[0].Single,"sn":"initialAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"lifetime","t":4,"rt":$n[0].Single,"sn":"lifetime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"sr","t":4,"rt":$n[1].SpriteRenderer,"sn":"sr"},{"a":1,"n":"startScale","t":4,"rt":$n[1].Vector3,"sn":"startScale"},{"a":2,"n":"velocity","t":4,"rt":$n[1].Vector2,"sn":"velocity"}]}; }, $n);
    /*MelonSandbox.MelonParticle end.*/

    /*MelonSandbox.MelonProjectile start.*/
    $m("MelonSandbox.MelonProjectile", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ClipAxis","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"step","pt":$n[0].Single,"ps":1},{"n":"min","pt":$n[0].Single,"ps":2},{"n":"max","pt":$n[0].Single,"ps":3},{"n":"entry","ref":true,"pt":$n[0].Single,"ps":4},{"n":"exit","ref":true,"pt":$n[0].Single,"ps":5}],"sn":"ClipAxis","rt":$n[0].Boolean,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Trace","is":true,"t":8,"pi":[{"n":"game","pt":$n[2].MelonGame,"ps":0},{"n":"start","pt":$n[1].Vector2,"ps":1},{"n":"end","pt":$n[1].Vector2,"ps":2},{"n":"hit","out":true,"pt":$n[2].MelonLimb,"ps":3},{"n":"point","out":true,"pt":$n[1].Vector2,"ps":4}],"sn":"Trace","rt":$n[0].Boolean,"p":[$n[2].MelonGame,$n[1].Vector2,$n[1].Vector2,$n[2].MelonLimb,$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"age","t":4,"rt":$n[0].Single,"sn":"age","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"game","t":4,"rt":$n[2].MelonGame,"sn":"game"},{"a":2,"n":"kind","t":4,"rt":$n[2].MelonToolKind,"sn":"kind","box":function ($v) { return Bridge.box($v, MelonSandbox.MelonToolKind, System.Enum.toStringFn(MelonSandbox.MelonToolKind));}},{"a":2,"n":"velocity","t":4,"rt":$n[1].Vector2,"sn":"velocity"},{"a":1,"n":"visual","t":4,"rt":$n[1].SpriteRenderer,"sn":"visual"}]}; }, $n);
    /*MelonSandbox.MelonProjectile end.*/

    /*MelonSandbox.MelonRagdoll start.*/
    $m("MelonSandbox.MelonRagdoll", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Apply","t":8,"pi":[{"n":"kind","pt":$n[2].MelonToolKind,"ps":0},{"n":"contact","pt":$n[2].MelonLimb,"ps":1},{"n":"point","pt":$n[1].Vector2,"ps":2}],"sn":"Apply","rt":$n[0].Void,"p":[$n[2].MelonToolKind,$n[2].MelonLimb,$n[1].Vector2]},{"a":2,"n":"ApplySpriteSorting","t":8,"sn":"ApplySpriteSorting","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"BeginParade","t":8,"sn":"BeginParade","rt":$n[0].Void},{"a":2,"n":"Build","t":8,"pi":[{"n":"controller","pt":$n[2].MelonGame,"ps":0},{"n":"prefix","pt":$n[0].String,"ps":1},{"n":"offset","pt":$n[1].Vector2,"ps":2},{"n":"suspended","pt":$n[0].Boolean,"ps":3},{"n":"innerSkin","pt":$n[0].String,"ps":4}],"sn":"Build","rt":$n[0].Void,"p":[$n[2].MelonGame,$n[0].String,$n[1].Vector2,$n[0].Boolean,$n[0].String]},{"a":2,"n":"BuildSprunky","t":8,"pi":[{"n":"controller","pt":$n[2].MelonGame,"ps":0},{"n":"offset","pt":$n[1].Vector2,"ps":1},{"n":"suspended","pt":$n[0].Boolean,"ps":2}],"sn":"BuildSprunky","rt":$n[0].Void,"p":[$n[2].MelonGame,$n[1].Vector2,$n[0].Boolean]},{"a":2,"n":"ChangeInner","t":8,"pi":[{"n":"prefix","pt":$n[0].String,"ps":0}],"sn":"ChangeInner","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"Child","is":true,"t":8,"pi":[{"n":"parent","pt":$n[1].Transform,"ps":0},{"n":"childName","pt":$n[0].String,"ps":1}],"sn":"Child","rt":$n[1].Transform,"p":[$n[1].Transform,$n[0].String]},{"a":2,"n":"ConfigureInstance","t":8,"pi":[{"n":"controller","pt":$n[2].MelonGame,"ps":0},{"n":"offset","pt":$n[1].Vector2,"ps":1},{"n":"suspended","pt":$n[0].Boolean,"ps":2},{"n":"innerSkin","pt":$n[0].String,"ps":3}],"sn":"ConfigureInstance","rt":$n[0].Void,"p":[$n[2].MelonGame,$n[1].Vector2,$n[0].Boolean,$n[0].String]},{"a":1,"n":"ConfigureLeg","t":8,"pi":[{"n":"side","pt":$n[0].String,"ps":0}],"sn":"ConfigureLeg","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"ConnectArmJoint","is":true,"t":8,"pi":[{"n":"limb","pt":$n[2].MelonLimb,"ps":0},{"n":"connected","pt":$n[1].Rigidbody2D,"ps":1},{"n":"point","pt":$n[1].Vector2,"ps":2}],"sn":"ConnectArmJoint","rt":$n[0].Void,"p":[$n[2].MelonLimb,$n[1].Rigidbody2D,$n[1].Vector2]},{"a":1,"n":"Electrocute","t":8,"sn":"Electrocute","rt":$n[4].IEnumerator},{"a":1,"n":"FitLegArtwork","is":true,"t":8,"pi":[{"n":"limb","pt":$n[2].MelonLimb,"ps":0},{"n":"start","pt":$n[1].Vector2,"ps":1},{"n":"end","pt":$n[1].Vector2,"ps":2},{"n":"overlapEnd","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"FitLegArtwork","rt":$n[0].Void,"p":[$n[2].MelonLimb,$n[1].Vector2,$n[1].Vector2,$n[0].Boolean]},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"GetLimb","t":8,"pi":[{"n":"part","pt":$n[0].String,"ps":0}],"sn":"GetLimb","rt":$n[2].MelonLimb,"p":[$n[0].String]},{"a":1,"n":"GroundFoot","t":8,"pi":[{"n":"foot","pt":$n[2].MelonLimb,"ps":0}],"sn":"GroundFoot","rt":$n[0].Void,"p":[$n[2].MelonLimb]},{"a":1,"n":"Joint","t":8,"pi":[{"n":"first","pt":$n[0].String,"ps":0},{"n":"second","pt":$n[0].String,"ps":1},{"n":"anchorY","pt":$n[0].Single,"ps":2},{"n":"min","pt":$n[0].Single,"ps":3},{"n":"max","pt":$n[0].Single,"ps":4},{"n":"limits","dv":true,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"Joint","rt":$n[0].Void,"p":[$n[0].String,$n[0].String,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":1,"n":"Kill","t":8,"pi":[{"n":"release","pt":$n[0].Boolean,"ps":0},{"n":"wait","pt":$n[0].Single,"ps":1}],"sn":"Kill","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Single]},{"a":1,"n":"PoseSuspendedArm","t":8,"pi":[{"n":"side","pt":$n[0].String,"ps":0},{"n":"target","pt":$n[1].Vector2,"ps":1}],"sn":"PoseSuspendedArm","rt":$n[0].Void,"p":[$n[0].String,$n[1].Vector2]},{"a":2,"n":"Release","t":8,"sn":"Release","rt":$n[0].Void},{"a":1,"n":"Reveal","t":8,"pi":[{"n":"point","pt":$n[1].Vector2,"ps":0},{"n":"fire","pt":$n[0].Boolean,"ps":1},{"n":"skinOnly","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"Reveal","rt":$n[4].IEnumerator,"p":[$n[1].Vector2,$n[0].Boolean,$n[0].Boolean]},{"a":1,"n":"SetLegJoint","is":true,"t":8,"pi":[{"n":"joint","pt":$n[1].HingeJoint2D,"ps":0},{"n":"point","pt":$n[1].Vector2,"ps":1},{"n":"min","pt":$n[0].Single,"ps":2},{"n":"max","pt":$n[0].Single,"ps":3}],"sn":"SetLegJoint","rt":$n[0].Void,"p":[$n[1].HingeJoint2D,$n[1].Vector2,$n[0].Single,$n[0].Single]},{"a":1,"n":"StretchArmSegment","is":true,"t":8,"pi":[{"n":"limb","pt":$n[2].MelonLimb,"ps":0},{"n":"start","pt":$n[1].Vector2,"ps":1},{"n":"end","pt":$n[1].Vector2,"ps":2}],"sn":"StretchArmSegment","rt":$n[0].Void,"p":[$n[2].MelonLimb,$n[1].Vector2,$n[1].Vector2]},{"a":2,"n":"Support","t":8,"pi":[{"n":"limb","pt":$n[2].MelonLimb,"ps":0},{"n":"point","pt":$n[1].Vector2,"ps":1}],"sn":"Support","rt":$n[0].Void,"p":[$n[2].MelonLimb,$n[1].Vector2]},{"a":2,"n":"Head","t":16,"rt":$n[2].MelonLimb,"g":{"a":2,"n":"get_Head","t":8,"rt":$n[2].MelonLimb,"fg":"Head"},"fn":"Head"},{"a":2,"n":"Torso","t":16,"rt":$n[2].MelonLimb,"g":{"a":2,"n":"get_Torso","t":8,"rt":$n[2].MelonLimb,"fg":"Torso"},"fn":"Torso"},{"a":2,"n":"Skins","is":true,"t":4,"rt":$n[0].Array.type(System.String),"sn":"Skins","ro":true},{"a":2,"n":"dead","t":4,"rt":$n[0].Boolean,"sn":"dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"game","t":4,"rt":$n[2].MelonGame,"sn":"game"},{"a":2,"n":"hits","t":4,"rt":$n[0].Int32,"sn":"hits","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"life","t":4,"rt":$n[0].Int32,"sn":"life","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"limbs","t":4,"rt":$n[3].List$1(MelonSandbox.MelonLimb),"sn":"limbs"},{"a":2,"n":"parade","t":4,"rt":$n[0].Boolean,"sn":"parade","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"paradeDistance","t":4,"rt":$n[0].Single,"sn":"paradeDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"paradeStart","t":4,"rt":$n[0].Single,"sn":"paradeStart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"skinName","t":4,"rt":$n[0].String,"sn":"skinName"},{"a":2,"n":"supports","t":4,"rt":$n[3].List$1(UnityEngine.TargetJoint2D),"sn":"supports"},{"a":2,"n":"targetGroup","t":4,"rt":$n[0].Int32,"sn":"targetGroup","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*MelonSandbox.MelonRagdoll end.*/

    /*MelonSandbox.MelonStage start.*/
    $m("MelonSandbox.MelonStage", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Capture","t":8,"sn":"Capture","rt":$n[0].Void},{"a":2,"n":"Restore","t":8,"pi":[{"n":"game","pt":$n[2].MelonGame,"ps":0}],"sn":"Restore","rt":$n[0].Void,"p":[$n[2].MelonGame]},{"a":1,"n":"active","t":4,"rt":$n[0].Array.type(System.Boolean),"sn":"active"},{"a":2,"n":"background","t":4,"rt":$n[1].SpriteRenderer,"sn":"background"},{"a":1,"n":"bodies","t":4,"rt":System.Array.type(UnityEngine.Rigidbody2D),"sn":"bodies"},{"a":2,"n":"characters","t":4,"rt":System.Array.type(MelonSandbox.MelonRagdoll),"sn":"characters"},{"a":1,"n":"colors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"colors"},{"a":1,"n":"constraints","t":4,"rt":System.Array.type(UnityEngine.RigidbodyConstraints2D),"sn":"constraints"},{"a":1,"n":"hingeEnabled","t":4,"rt":$n[0].Array.type(System.Boolean),"sn":"hingeEnabled"},{"a":1,"n":"hinges","t":4,"rt":System.Array.type(UnityEngine.HingeJoint2D),"sn":"hinges"},{"a":1,"n":"nodes","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"nodes"},{"a":1,"n":"originalChildren","t":4,"rt":$n[3].List$1(UnityEngine.Transform),"sn":"originalChildren","ro":true},{"a":1,"n":"positions","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"positions"},{"a":1,"n":"rendererEnabled","t":4,"rt":$n[0].Array.type(System.Boolean),"sn":"rendererEnabled"},{"a":1,"n":"renderers","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"renderers"},{"a":1,"n":"rotations","t":4,"rt":System.Array.type(UnityEngine.Quaternion),"sn":"rotations"},{"a":1,"n":"scales","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"scales"},{"a":1,"n":"supports","t":4,"rt":System.Array.type(UnityEngine.TargetJoint2D),"sn":"supports"},{"a":1,"n":"targets","t":4,"rt":System.Array.type(UnityEngine.Vector2),"sn":"targets"},{"a":2,"n":"tools","t":4,"rt":System.Array.type(MelonSandbox.MelonTool),"sn":"tools"}]}; }, $n);
    /*MelonSandbox.MelonStage end.*/

    /*MelonSandbox.MelonToolKind start.*/
    $m("MelonSandbox.MelonToolKind", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Flame","is":true,"t":4,"rt":$n[2].MelonToolKind,"sn":"Flame","box":function ($v) { return Bridge.box($v, MelonSandbox.MelonToolKind, System.Enum.toStringFn(MelonSandbox.MelonToolKind));}},{"a":2,"n":"Rifle","is":true,"t":4,"rt":$n[2].MelonToolKind,"sn":"Rifle","box":function ($v) { return Bridge.box($v, MelonSandbox.MelonToolKind, System.Enum.toStringFn(MelonSandbox.MelonToolKind));}},{"a":2,"n":"Saw","is":true,"t":4,"rt":$n[2].MelonToolKind,"sn":"Saw","box":function ($v) { return Bridge.box($v, MelonSandbox.MelonToolKind, System.Enum.toStringFn(MelonSandbox.MelonToolKind));}},{"a":2,"n":"Shock","is":true,"t":4,"rt":$n[2].MelonToolKind,"sn":"Shock","box":function ($v) { return Bridge.box($v, MelonSandbox.MelonToolKind, System.Enum.toStringFn(MelonSandbox.MelonToolKind));}},{"a":2,"n":"SyringeAcid","is":true,"t":4,"rt":$n[2].MelonToolKind,"sn":"SyringeAcid","box":function ($v) { return Bridge.box($v, MelonSandbox.MelonToolKind, System.Enum.toStringFn(MelonSandbox.MelonToolKind));}},{"a":2,"n":"SyringeCut","is":true,"t":4,"rt":$n[2].MelonToolKind,"sn":"SyringeCut","box":function ($v) { return Bridge.box($v, MelonSandbox.MelonToolKind, System.Enum.toStringFn(MelonSandbox.MelonToolKind));}},{"a":2,"n":"SyringeFire","is":true,"t":4,"rt":$n[2].MelonToolKind,"sn":"SyringeFire","box":function ($v) { return Bridge.box($v, MelonSandbox.MelonToolKind, System.Enum.toStringFn(MelonSandbox.MelonToolKind));}}]}; }, $n);
    /*MelonSandbox.MelonToolKind end.*/

    /*MelonSandbox.MelonTool start.*/
    $m("MelonSandbox.MelonTool", function () { return {"att":1048833,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ConfigurePlacement","t":8,"sn":"ConfigurePlacement","rt":$n[0].Void},{"a":1,"n":"Contact","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"Contact","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":2,"n":"Drag","t":8,"pi":[{"n":"point","pt":$n[1].Vector2,"ps":0}],"sn":"Drag","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":2,"n":"Drop","t":8,"sn":"Drop","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"Grab","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"Grab","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"OnCollisionStay2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionStay2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":2,"n":"ResetForStage","t":8,"pi":[{"n":"controller","pt":$n[2].MelonGame,"ps":0}],"sn":"ResetForStage","rt":$n[0].Void,"p":[$n[2].MelonGame]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Syringe","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Syringe","t":8,"rt":$n[0].Boolean,"fg":"Syringe","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Syringe"},{"a":2,"n":"blade","t":4,"rt":$n[1].SpriteRenderer,"sn":"blade"},{"a":2,"n":"body","t":4,"rt":$n[1].Rigidbody2D,"sn":"body"},{"a":1,"n":"drag","t":4,"rt":$n[1].TargetJoint2D,"sn":"drag"},{"a":2,"n":"game","t":4,"rt":$n[2].MelonGame,"sn":"game"},{"a":2,"n":"held","t":4,"rt":$n[0].Boolean,"sn":"held","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"intendedTarget","t":4,"rt":$n[2].MelonRagdoll,"sn":"intendedTarget"},{"a":2,"n":"kind","t":4,"rt":$n[2].MelonToolKind,"sn":"kind","box":function ($v) { return Bridge.box($v, MelonSandbox.MelonToolKind, System.Enum.toStringFn(MelonSandbox.MelonToolKind));}},{"a":1,"n":"lastHit","t":4,"rt":$n[0].Single,"sn":"lastHit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextAmbient","t":4,"rt":$n[0].Single,"sn":"nextAmbient","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextShot","t":4,"rt":$n[0].Single,"sn":"nextShot","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"used","t":4,"rt":$n[0].Boolean,"sn":"used","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*MelonSandbox.MelonTool end.*/

    /*Playable.GameManager start.*/
    $m("Playable.GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CountEvent","t":8,"sn":"CountEvent","rt":$n[0].Void},{"a":2,"n":"CountdownEndGame","t":8,"sn":"CountdownEndGame","rt":$n[0].Void},{"a":1,"n":"CreateSprite","t":8,"pi":[{"n":"texture","pt":$n[1].Texture2D,"ps":0}],"sn":"CreateSprite","rt":$n[1].Sprite,"p":[$n[1].Texture2D]},{"a":2,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[0].Void},{"a":1,"n":"IECountdownEndGame","t":8,"sn":"IECountdownEndGame","rt":$n[4].IEnumerator},{"a":2,"n":"ReparentEndGameButton","t":8,"pi":[{"n":"parent","pt":$n[1].Transform,"ps":0}],"sn":"ReparentEndGameButton","rt":$n[0].Void,"p":[$n[1].Transform]},{"a":2,"n":"ShowCTA","t":8,"sn":"ShowCTA","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":$n[6].GameManager,"sn":"Instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_background","t":4,"rt":$n[5].Image,"sn":"_background"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Background Music", 0, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_backgroundMusic","t":4,"rt":$n[1].AudioClip,"sn":"_backgroundMusic"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Background Texture", 0, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_backgroundTexture","t":4,"rt":$n[1].Texture2D,"sn":"_backgroundTexture"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_btnBlock","t":4,"rt":$n[5].Button,"sn":"_btnBlock"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("End Time", -1, null, false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_endTime","t":4,"rt":$n[0].Int32,"sn":"_endTime","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_hasEnded","t":4,"rt":$n[0].Boolean,"sn":"_hasEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_quantityEvent","t":4,"rt":$n[0].Int32,"sn":"_quantityEvent","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Luna Field"),new UnityEngine.LunaPlaygroundFieldAttribute("Total Event For CTA", -1, null, false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_totalEvent","t":4,"rt":$n[0].Int32,"sn":"_totalEvent","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Playable.GameManager end.*/

    }});

if ( TRACE ) { TRACE( JSON.parse( '["HeroSkin#init","HeroSkins#SpriteSize","HeroSkins#init","HeroSkins#Apply","HeroSkins#SetBody","HeroSkins#SetHead","HeroSkins#SetLimb","LunaController#init","LunaController#Awake","LunaControllerFNAF#init","LunaControllerFNAF#Awake","PlayableCameraController#IsPanning#get","PlayableCameraController#IsAiming#get","PlayableCameraController#init","PlayableCameraController#SetAim","PlayableCameraController#AimMin","PlayableCameraController#AimMax","PlayableCameraController#AimCenter","PlayableCameraController#AimFrame","PlayableCameraController#FitView","PlayableCameraController#OnPreCull","PlayableCameraController#PanTo","PlayableCameraController#LateUpdate","PlayableFlowController#ShotCount#get","PlayableFlowController#CanGrab#get","PlayableFlowController#init","PlayableFlowController#Start","PlayableFlowController#StartMusic","PlayableFlowController#BeginInput","PlayableFlowController#HeroId","PlayableFlowController#HeroName","PlayableFlowController#LoadActor","PlayableFlowController#SpawnTap","PlayableFlowController#NextShot","PlayableFlowController#BeginDrag","PlayableFlowController#StartDragging","PlayableFlowController#BeginDragScreen","PlayableFlowController#DragScreen","PlayableFlowController#Drag","PlayableFlowController#UpdateTrajectory","PlayableFlowController#ReleaseShot","PlayableFlowController#Update","PlayableFlowController#ReadInput","PlayableFlowController#World","PlayableFlowController#PointerDown","PlayableFlowController#CancelDrag","PlayableFlowController#OnApplicationFocus","PlayableFlowController#UpdateBands","PlayableFlowController#SetDots","PlayableFlowController#ShowHeroSelect","PlayableFlowController#WasShot","PlayableFlowController#InSelect","PlayableFlowController#TrySelect","PlayableFlowController#ShowEndCard","PlayableFlowController#PlaceHandAtScreen","PlayableFlowController#UpdateHandReady","PlayableFlowController#UpdateUI","PlayableFlowController#PlayImpact","PlayableFlowController#PlayKnock","PlayableFlowController#PlaySfx","PlayableFlowController#OpenStore","RagdollActor#init","RagdollActor#BeginFlightVisuals","RagdollActor#LateUpdate","RagdollActor#AdvanceFlightVisuals","RagdollActor#Awake","RagdollActor#IgnoreSelfCollision","RagdollActor#Initialize","RagdollActor#LoadAt","RagdollActor#SyncBodies","RagdollActor#SetCollidersEnabled","RagdollActor#SetDragging","RagdollActor#Launch","RagdollActor#IsSettled","RagdollActor#FreezeWhenSettled","RagdollActor#FixedUpdate","RagdollActor#Freeze","RagdollActor#ReactToHit","RagdollImpact#init","RagdollImpact#OnCollisionStay2D","RagdollImpact#OnCollisionEnter2D","TextOutline#init","TextOutline#Awake","TextOutline#LateUpdate","TextOutline#Sync"]' ) ); }
/**
 * @version 1.0.9796.25302
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*HeroSkin start.*/
    Bridge.define("HeroSkin", {
        fields: {
            label: null,
            head: null,
            body: null,
            handLeft: null,
            handRight: null,
            footLeft: null,
            footRight: null,
            portrait: null,
            headPivot: null,
            handLeftPivot: null,
            handRightPivot: null,
            footLeftPivot: null,
            footRightPivot: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HeroSkin#init", this ); }

                this.headPivot = new UnityEngine.Vector2();
                this.handLeftPivot = new UnityEngine.Vector2();
                this.handRightPivot = new UnityEngine.Vector2();
                this.footLeftPivot = new UnityEngine.Vector2();
                this.footRightPivot = new UnityEngine.Vector2();
                this.headPivot = new pc.Vec2( 0.5, 0.986 );
                this.handLeftPivot = new pc.Vec2( 0.5, 0.094 );
                this.handRightPivot = new pc.Vec2( 0.5, 0.094 );
                this.footLeftPivot = new pc.Vec2( 0.5, 0.094 );
                this.footRightPivot = new pc.Vec2( 0.5, 0.094 );
            }
        }
    });
    /*HeroSkin end.*/

    /*HeroSkins start.*/
    Bridge.define("HeroSkins", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*HeroSkins.SpriteSize:static start.*/
                SpriteSize: function (sp) {
if ( TRACE ) { TRACE( "HeroSkins#SpriteSize", this ); }

                    return new pc.Vec2( sp.rect.width / sp.pixelsPerUnit, sp.rect.height / sp.pixelsPerUnit );
                },
                /*HeroSkins.SpriteSize:static end.*/


            }
        },
        fields: {
            skins: null,
            headPixel: 0,
            limbPixel: null,
            bodySize: null,
            neckLocal: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HeroSkins#init", this ); }

                this.limbPixel = new UnityEngine.Vector2();
                this.bodySize = new UnityEngine.Vector2();
                this.neckLocal = new UnityEngine.Vector2();
                this.headPixel = 0.0105;
                this.limbPixel = new pc.Vec2( 0.0144, 0.01125 );
                this.bodySize = new pc.Vec2( 0.43, 0.86 );
                this.neckLocal = new pc.Vec2( 0, -0.375 );
            }
        },
        methods: {
            /*HeroSkins.Apply start.*/
            Apply: function (actor, id) {
if ( TRACE ) { TRACE( "HeroSkins#Apply", this ); }

                if (this.skins == null || id < 0 || id >= this.skins.length || actor.renderers == null || actor.renderers.length < 6) {
                    return;
                }
                var s = this.skins[id];
                this.SetBody(actor.renderers[0], s.body);
                this.SetHead(actor.renderers[1], s.head, s.headPivot);
                this.SetLimb(actor.renderers[2], s.handLeft, s.handLeftPivot);
                this.SetLimb(actor.renderers[3], s.footLeft, s.footLeftPivot);
                this.SetLimb(actor.renderers[4], s.handRight, s.handRightPivot);
                this.SetLimb(actor.renderers[5], s.footRight, s.footRightPivot);
            },
            /*HeroSkins.Apply end.*/

            /*HeroSkins.SetBody start.*/
            SetBody: function (r, sp) {
if ( TRACE ) { TRACE( "HeroSkins#SetBody", this ); }

                if (sp == null) {
                    return;
                }
                r.sprite = sp;
                var b = HeroSkins.SpriteSize(sp);
                r.transform.localScale = new pc.Vec3( this.bodySize.x / b.x, this.bodySize.y / b.y, 1 );
                r.transform.localPosition = pc.Vec3.ZERO.clone();
            },
            /*HeroSkins.SetBody end.*/

            /*HeroSkins.SetHead start.*/
            SetHead: function (r, sp, pivot) {
if ( TRACE ) { TRACE( "HeroSkins#SetHead", this ); }

                if (sp == null) {
                    return;
                }
                r.sprite = sp;
                var w = sp.rect.width, h = sp.rect.height, ppu = sp.pixelsPerUnit;
                r.transform.localScale = new pc.Vec3( this.headPixel * ppu, this.headPixel * ppu, 1 );
                var dx = (pivot.x * w - w * 0.5) * this.headPixel;
                var dy = (h * 0.5 - pivot.y * h) * this.headPixel;
                r.transform.localPosition = new pc.Vec3( this.neckLocal.x - dx, this.neckLocal.y - dy, 0 );
            },
            /*HeroSkins.SetHead end.*/

            /*HeroSkins.SetLimb start.*/
            SetLimb: function (r, sp, pivot) {
if ( TRACE ) { TRACE( "HeroSkins#SetLimb", this ); }

                if (sp == null) {
                    return;
                }
                r.sprite = sp;
                var w = sp.rect.width, h = sp.rect.height, ppu = sp.pixelsPerUnit;
                r.transform.localScale = new pc.Vec3( this.limbPixel.x * ppu, this.limbPixel.y * ppu, 1 );
                var attachY = (25.9840012) * this.limbPixel.y; // vị trí vai/hông của tay chân chuẩn 16x64
                var dx = (pivot.x * w - w * 0.5) * this.limbPixel.x;
                var dy = (h * 0.5 - pivot.y * h) * this.limbPixel.y;
                r.transform.localPosition = new pc.Vec3( -dx, attachY - dy, 0 );
            },
            /*HeroSkins.SetLimb end.*/


        }
    });
    /*HeroSkins end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LunaController start.*/
    Bridge.define("LunaController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            version: 0,
            backgroundMusic: null,
            musicEnabled: false,
            musicVolume: 0,
            heroShot1: 0,
            heroShot2: 0,
            heroShot3: 0,
            heroShot4: 0,
            flow: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LunaController#init", this ); }

                this.version = LunaController.PlayableVersion.Ver1_3Taps;
                this.musicEnabled = true;
                this.musicVolume = 0.45;
                this.heroShot1 = LunaController.Hero.Player416;
                this.heroShot2 = LunaController.Hero.Rumi;
                this.heroShot3 = LunaController.Hero.RedHair;
                this.heroShot4 = LunaController.Hero.BlueHair;
            }
        },
        methods: {
            /*LunaController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LunaController#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.flow, null)) {
                    this.flow = UnityEngine.Object.FindObjectOfType(PlayableFlowController);
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.flow, null)) {
                    return;
                }
                this.flow.playableVersion = this.version;
                if (this.backgroundMusic != null) {
                    this.flow.bgm = this.backgroundMusic;
                }
                if (!this.musicEnabled) {
                    this.flow.bgm = null;
                }
                this.flow.musicVolume = this.musicVolume;
                this.flow.heroOrder = System.Array.init([this.heroShot1, this.heroShot2, this.heroShot3, this.heroShot4], System.Int32);
            },
            /*LunaController.Awake end.*/


        }
    });
    /*LunaController end.*/

    /*LunaController+Hero start.*/
    Bridge.define("LunaController.Hero", {
        $kind: 1006,
        statics: {
            fields: {
                Player416: 0,
                Rumi: 1,
                RedHair: 2,
                BlueHair: 3,
                BlackHair: 4,
                TOP: 5
            }
        }
    });
    /*LunaController+Hero end.*/

    /*LunaController+PlayableVersion start.*/
    Bridge.define("LunaController.PlayableVersion", {
        $kind: 1006,
        statics: {
            fields: {
                Ver1_3Taps: 1,
                Ver2_StoreAtTap2: 2
            }
        }
    });
    /*LunaController+PlayableVersion end.*/

    /*LunaControllerFNAF start.*/
    Bridge.define("LunaControllerFNAF", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            version: 0,
            backgroundMusic: null,
            musicEnabled: false,
            musicVolume: 0,
            heroShot1: 0,
            heroShot2: 0,
            heroShot3: 0,
            heroShot4: 0,
            flow: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LunaControllerFNAF#init", this ); }

                this.version = LunaControllerFNAF.PlayableVersion.Ver1_3Taps;
                this.musicEnabled = true;
                this.musicVolume = 0.45;
                this.heroShot1 = LunaControllerFNAF.Hero.Freddy;
                this.heroShot2 = LunaControllerFNAF.Hero.Bonnie;
                this.heroShot3 = LunaControllerFNAF.Hero.Foxy;
                this.heroShot4 = LunaControllerFNAF.Hero.Chica;
            }
        },
        methods: {
            /*LunaControllerFNAF.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LunaControllerFNAF#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.flow, null)) {
                    this.flow = UnityEngine.Object.FindObjectOfType(PlayableFlowController);
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.flow, null)) {
                    return;
                }
                this.flow.playableVersion = this.version;
                if (this.backgroundMusic != null) {
                    this.flow.bgm = this.backgroundMusic;
                }
                if (!this.musicEnabled) {
                    this.flow.bgm = null;
                }
                this.flow.musicVolume = this.musicVolume;
                this.flow.heroOrder = System.Array.init([this.heroShot1, this.heroShot2, this.heroShot3, this.heroShot4], System.Int32);
            },
            /*LunaControllerFNAF.Awake end.*/


        }
    });
    /*LunaControllerFNAF end.*/

    /*LunaControllerFNAF+Hero start.*/
    Bridge.define("LunaControllerFNAF.Hero", {
        $kind: 1006,
        statics: {
            fields: {
                Freddy: 0,
                Bonnie: 1,
                Foxy: 2,
                Mangle: 3,
                Chica: 4
            }
        }
    });
    /*LunaControllerFNAF+Hero end.*/

    /*LunaControllerFNAF+PlayableVersion start.*/
    Bridge.define("LunaControllerFNAF.PlayableVersion", {
        $kind: 1006,
        statics: {
            fields: {
                Ver1_3Taps: 1,
                Ver2_StoreAtTap2: 2
            }
        }
    });
    /*LunaControllerFNAF+PlayableVersion end.*/

    /*PlayableCameraController start.*/
    Bridge.define("PlayableCameraController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            view: null,
            followTarget: null,
            slingPosition: null,
            mapPosition: null,
            slingFrame: null,
            mapFrame: null,
            uiVerticalReserve: 0,
            panDuration: 0,
            aimRoomMin: null,
            aimRoomMax: null,
            aimFocusMargin: null,
            aimFocus: null,
            aimPosition: null,
            aimFrame: null,
            aimZoomOutTime: 0,
            aimZoomInTime: 0,
            aiming: false,
            aimBlend: 0,
            start: null,
            destination: null,
            elapsed: 0,
            panning: false,
            onAfterMove: null
        },
        props: {
            IsPanning: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableCameraController#IsPanning#get", this ); }

                    return this.panning;
                }
            },
            IsAiming: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableCameraController#IsAiming#get", this ); }

                    return this.aiming;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableCameraController#init", this ); }

                this.slingPosition = new UnityEngine.Vector3();
                this.mapPosition = new UnityEngine.Vector3();
                this.slingFrame = new UnityEngine.Vector2();
                this.mapFrame = new UnityEngine.Vector2();
                this.aimRoomMin = new UnityEngine.Vector2();
                this.aimRoomMax = new UnityEngine.Vector2();
                this.aimFocusMargin = new UnityEngine.Vector2();
                this.aimFocus = new UnityEngine.Vector2();
                this.aimPosition = new UnityEngine.Vector3();
                this.aimFrame = new UnityEngine.Vector2();
                this.start = new UnityEngine.Vector3();
                this.destination = new UnityEngine.Vector3();
                this.slingPosition = new pc.Vec3( -4.2, 3.6, -10 );
                this.mapPosition = new pc.Vec3( 12.6, 4.9, -10 );
                this.slingFrame = new pc.Vec2( 11.5, 8.2 );
                this.mapFrame = new pc.Vec2( 17.2, 11.2 );
                this.uiVerticalReserve = 0.28;
                this.panDuration = 1.2;
                this.aimRoomMin = new pc.Vec2( 4.4, -0.6 );
                this.aimRoomMax = new pc.Vec2( 20.9, 10.6 );
                this.aimFocusMargin = new pc.Vec2( 1.3, 1.9 );
                this.aimFocus = new pc.Vec2( -7, 3.1 );
                this.aimPosition = new pc.Vec3( 6.3, 5.0, -10 );
                this.aimFrame = new pc.Vec2( 30.0, 12.0 );
                this.aimZoomOutTime = 0.45;
                this.aimZoomInTime = 0.6;
            }
        },
        methods: {
            /*PlayableCameraController.SetAim start.*/
            SetAim: function (on) {
if ( TRACE ) { TRACE( "PlayableCameraController#SetAim", this ); }

                this.aiming = on;
                if (on) {
                    this.panning = false;
                }
            },
            /*PlayableCameraController.SetAim end.*/

            /*PlayableCameraController.AimMin start.*/
            AimMin: function () {
if ( TRACE ) { TRACE( "PlayableCameraController#AimMin", this ); }

                var $t;
                return ($t = this.aimFocus.$clone().sub( this.aimFocusMargin ), new pc.Vec2( Math.min( this.aimRoomMin.x, $t.x ), Math.min( this.aimRoomMin.y, $t.y ) ));
            },
            /*PlayableCameraController.AimMin end.*/

            /*PlayableCameraController.AimMax start.*/
            AimMax: function () {
if ( TRACE ) { TRACE( "PlayableCameraController#AimMax", this ); }

                var $t;
                return ($t = this.aimFocus.$clone().add( this.aimFocusMargin ), new pc.Vec2( Math.max( this.aimRoomMax.x, $t.x ), Math.max( this.aimRoomMax.y, $t.y ) ));
            },
            /*PlayableCameraController.AimMax end.*/

            /*PlayableCameraController.AimCenter start.*/
            AimCenter: function () {
if ( TRACE ) { TRACE( "PlayableCameraController#AimCenter", this ); }

                return (this.AimMin().add( this.AimMax() )).scale( 0.5 );
            },
            /*PlayableCameraController.AimCenter end.*/

            /*PlayableCameraController.AimFrame start.*/
            AimFrame: function () {
if ( TRACE ) { TRACE( "PlayableCameraController#AimFrame", this ); }

                return this.AimMax().sub( this.AimMin() );
            },
            /*PlayableCameraController.AimFrame end.*/

            /*PlayableCameraController.FitView start.*/
            FitView: function () {
if ( TRACE ) { TRACE( "PlayableCameraController#FitView", this ); }

                if (UnityEngine.Component.op_Equality(this.view, null)) {
                    return;
                }
                var aspect = this.view.targetTexture != null ? this.view.targetTexture.width / this.view.targetTexture.height : this.view.aspect;
                aspect = UnityEngine.Mathf.Max(0.3, aspect);
                var t = Math.max(0, Math.min(1, pc.math.inverseLerp(this.slingPosition.x, this.mapPosition.x, this.transform.position.x)));
                var frame = new pc.Vec2().lerp( this.slingFrame, this.mapFrame, t );
                var a = this.aimBlend * this.aimBlend * (3 - 2 * this.aimBlend);
                frame = new pc.Vec2().lerp( frame, this.AimFrame(), a );
                var byHeight = frame.y * 0.5 / (1 - this.uiVerticalReserve);
                var byWidth = frame.x * 0.5 / aspect;
                this.view.orthographicSize = UnityEngine.Mathf.Max(byHeight, byWidth);
            },
            /*PlayableCameraController.FitView end.*/

            /*PlayableCameraController.OnPreCull start.*/
            OnPreCull: function () {
if ( TRACE ) { TRACE( "PlayableCameraController#OnPreCull", this ); }

                this.FitView();
            },
            /*PlayableCameraController.OnPreCull end.*/

            /*PlayableCameraController.PanTo start.*/
            PanTo: function (target) {
if ( TRACE ) { TRACE( "PlayableCameraController#PanTo", this ); }

                this.followTarget = null;
                this.start = this.transform.position.$clone();
                this.destination = target.$clone();
                this.elapsed = 0;
                this.panning = true;
            },
            /*PlayableCameraController.PanTo end.*/

            /*PlayableCameraController.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "PlayableCameraController#LateUpdate", this ); }

                if (!UnityEngine.Application.isPlaying) {
                    this.FitView();
                    return;
                }
                var dt = UnityEngine.Time.deltaTime;
                this.aimBlend = UnityEngine.Mathf.MoveTowards(this.aimBlend, this.aiming ? 1 : 0, dt / UnityEngine.Mathf.Max(0.01, this.aiming ? this.aimZoomOutTime : this.aimZoomInTime));
                if (this.aiming) {
                    var c = this.AimCenter();
                    this.transform.position = new pc.Vec3().lerp( this.transform.position, new pc.Vec3( c.x, c.y, -10 ), 1 - UnityEngine.Mathf.Exp(-7 * dt) );
                } else if (this.panning) {
                    this.elapsed += dt;
                    var t = Math.max(0, Math.min(1, this.elapsed / this.panDuration));
                    this.transform.position = new pc.Vec3().lerp( this.start, this.destination, t * t * (3 - 2 * t) );
                    if (t >= 1) {
                        this.panning = false;
                    }
                } else if (UnityEngine.Component.op_Inequality(this.followTarget, null)) {
                    var p = this.followTarget.position.$clone();
                    p.x = Math.max(this.slingPosition.x, Math.min(p.x + 2, this.mapPosition.x + 3));
                    p.y = Math.max(this.slingPosition.y, Math.min(p.y + 1.2, this.mapPosition.y + 2));
                    p.z = -10;
                    this.transform.position = new pc.Vec3().lerp( this.transform.position, p, 1 - UnityEngine.Mathf.Exp(-6 * dt) );
                }
                this.FitView();
                if (!Bridge.staticEquals(this.onAfterMove, null)) {
                    this.onAfterMove();
                }
            },
            /*PlayableCameraController.LateUpdate end.*/


        }
    });
    /*PlayableCameraController end.*/

    /*PlayableFlowController start.*/
    Bridge.define("PlayableFlowController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            playableVersion: 0,
            tapCount: 0,
            phase: 0,
            actors: null,
            cameraRig: null,
            leftBand: null,
            rightBand: null,
            trajectoryDots: null,
            handGuide: null,
            handAlpha: null,
            prompt: null,
            actorLabel: null,
            versionLabel: null,
            audioSource: null,
            launchSound: null,
            impactSound: null,
            musicSource: null,
            bgm: null,
            grabSound: null,
            spawnSound: null,
            knockSound: null,
            ctaSound: null,
            impactSounds: null,
            flySound: null,
            flyVolume: 0,
            spawnVolume: 0,
            musicVolume: 0,
            lastImpactSound: 0,
            anchor: null,
            leftBandTip: null,
            rightBandTip: null,
            grabRadius: 0,
            maxPull: 0,
            launchScale: 0,
            introHold: 0,
            resultHold: 0,
            maxFlightTime: 0,
            storeOpened: false,
            installCallCount: 0,
            heroSkins: null,
            heroOrder: null,
            shotIndex: 0,
            introText: null,
            selectRoot: null,
            selectButtons: null,
            selectFrames: null,
            selectPortraits: null,
            selectNames: null,
            frameNormal: null,
            frameHighlight: null,
            handTargetButton: 0,
            endCardRoot: null,
            endCardPortrait: null,
            endCardTitle: null,
            ctaButton: null,
            current: null,
            view: null,
            uiCamera: null,
            timer: 0,
            flightTime: 0,
            settledTime: 0,
            handTimer: 0,
            hitTime: 0,
            hitReturnTime: 0,
            minHitTime: 0,
            started: false,
            gameEnded: false,
            pointerId: 0,
            pull: null,
            selectIds: null,
            dotBaseScale: null,
            grabScreen: null,
            grabOffset: null,
            grabUnitsPerPixel: 0,
            dotSizeStart: 0,
            dotSizeEnd: 0,
            trajectoryTime: 0,
            ignoreNearPull: 0
        },
        props: {
            ShotCount: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#ShotCount#get", this ); }

                    return this.playableVersion === 2 ? 2 : 4;
                }
            },
            CanGrab: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#CanGrab#get", this ); }

                    return this.phase === PlayableFlowController.Phase.Ready || this.phase === PlayableFlowController.Phase.PanToSling || this.phase === PlayableFlowController.Phase.IntroMap;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#init", this ); }

                this.anchor = new UnityEngine.Vector2();
                this.leftBandTip = new UnityEngine.Vector3();
                this.rightBandTip = new UnityEngine.Vector3();
                this.pull = new UnityEngine.Vector2();
                this.grabScreen = new UnityEngine.Vector2();
                this.grabOffset = new UnityEngine.Vector2();
                this.playableVersion = 1;
                this.flyVolume = 0.8;
                this.spawnVolume = 1.0;
                this.musicVolume = 0.45;
                this.anchor = new pc.Vec2( -7, 2.6 );
                this.leftBandTip = new pc.Vec3( -7.8, 3.44, 0 );
                this.rightBandTip = new pc.Vec3( -6.21, 3.44, 0 );
                this.grabRadius = 1.8;
                this.maxPull = 2.2;
                this.launchScale = 8.2;
                this.introHold = 1.25;
                this.resultHold = 1.25;
                this.maxFlightTime = 15;
                this.heroOrder = System.Array.init([
                    0, 
                    1, 
                    2, 
                    3
                ], System.Int32);
                this.introText = "REACH THE GUARDS!";
                this.handTargetButton = 1;
                this.hitReturnTime = 2.5;
                this.minHitTime = 2.0;
                this.pointerId = -1;
                this.selectIds = System.Array.init(3, 0, System.Int32);
                this.dotSizeStart = 0.13;
                this.dotSizeEnd = 0.05;
                this.trajectoryTime = 3.2;
                this.ignoreNearPull = 2.5;
            }
        },
        methods: {
            /*PlayableFlowController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#Start", this ); }

                UnityEngine.Application.runInBackground = true;
                this.view = this.cameraRig.view;
                this.uiCamera = this.handGuide.GetComponentInParent(UnityEngine.Canvas).worldCamera;
                this.dotBaseScale = System.Array.init(this.trajectoryDots.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                for (var i = 0; i < this.trajectoryDots.length; i = (i + 1) | 0) {
                    this.dotBaseScale[i] = this.trajectoryDots[i].localScale.$clone();
                }
                this.cameraRig.onAfterMove = Bridge.fn.cacheBind(this, this.UpdateHandReady);
                this.playableVersion = Math.max(1, Math.min(this.playableVersion, 2));
                this.tapCount = 0;
                this.shotIndex = 0;
                this.storeOpened = false;
                this.installCallCount = 0;
                for (var i1 = 0; i1 < this.actors.length; i1 = (i1 + 1) | 0) {
                    this.actors[i1].gameObject.SetActive(false);
                    this.actors[i1].Initialize();
                }
                if (UnityEngine.GameObject.op_Inequality(this.selectRoot, null)) {
                    this.selectRoot.SetActive(false);
                }
                if (UnityEngine.GameObject.op_Inequality(this.endCardRoot, null)) {
                    this.endCardRoot.SetActive(false);
                }
                this.LoadActor(0);
                this.cameraRig.transform.position = this.cameraRig.mapPosition.$clone();
                this.phase = PlayableFlowController.Phase.IntroMap;
                this.timer = 0;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.versionLabel, null)) {
                    this.versionLabel.text = this.playableVersion === 1 ? "VER 1" : "VER 2";
                }
                this.prompt.text = this.introText;
                this.SetDots(false);
                this.StartMusic(); // BGM chạy ngay khi vào playable
            },
            /*PlayableFlowController.Start end.*/

            /*PlayableFlowController.StartMusic start.*/
            StartMusic: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#StartMusic", this ); }

                if (UnityEngine.Component.op_Equality(this.musicSource, null) || this.bgm == null || this.musicSource.isPlaying) {
                    return;
                }
                this.musicSource.clip = this.bgm;
                this.musicSource.loop = true;
                this.musicSource.volume = this.musicVolume;
                this.musicSource.Play();
            },
            /*PlayableFlowController.StartMusic end.*/

            /*PlayableFlowController.BeginInput start.*/
            BeginInput: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#BeginInput", this ); }

                if (this.started) {
                    return;
                }
                this.started = true;
                this.StartMusic();
                Luna.Unity.LifeCycle.GameStarted();
            },
            /*PlayableFlowController.BeginInput end.*/

            /*PlayableFlowController.HeroId start.*/
            HeroId: function (shot) {
if ( TRACE ) { TRACE( "PlayableFlowController#HeroId", this ); }

                return this.heroOrder != null && shot < this.heroOrder.length ? this.heroOrder[shot] : shot;
            },
            /*PlayableFlowController.HeroId end.*/

            /*PlayableFlowController.HeroName start.*/
            HeroName: function (id) {
if ( TRACE ) { TRACE( "PlayableFlowController#HeroName", this ); }

                var $t;
                return UnityEngine.MonoBehaviour.op_Inequality(this.heroSkins, null) && id >= 0 && id < this.heroSkins.skins.length ? ($t = this.heroSkins.skins)[id].label : "";
            },
            /*PlayableFlowController.HeroName end.*/

            /*PlayableFlowController.LoadActor start.*/
            LoadActor: function (index) {
if ( TRACE ) { TRACE( "PlayableFlowController#LoadActor", this ); }

                this.current = this.actors[UnityEngine.Mathf.Min(index, ((this.actors.length - 1) | 0))];
                var id = this.HeroId(index);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.heroSkins, null)) {
                    this.heroSkins.Apply(this.current, id);
                }
                this.current.LoadAt(this.anchor);
                this.pull = this.anchor.$clone();
                this.actorLabel.text = this.HeroName(id);
                this.UpdateBands(this.anchor);
                this.handTimer = 0;
            },
            /*PlayableFlowController.LoadActor end.*/

            /*PlayableFlowController.SpawnTap start.*/
            SpawnTap: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#SpawnTap", this ); }

                this.NextShot();
            },
            /*PlayableFlowController.SpawnTap end.*/

            /*PlayableFlowController.NextShot start.*/
            NextShot: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#NextShot", this ); }

                this.shotIndex = (this.shotIndex + 1) | 0;
                this.tapCount = this.shotIndex;
                if (this.shotIndex >= this.ShotCount) {
                    this.ShowHeroSelect();
                    return;
                }
                this.LoadActor(this.shotIndex);
                this.phase = PlayableFlowController.Phase.Ready;
                this.timer = 0;
                this.PlaySfx(this.spawnSound, this.spawnVolume);
            },
            /*PlayableFlowController.NextShot end.*/

            /*PlayableFlowController.BeginDrag start.*/
            BeginDrag: function (world) {
if ( TRACE ) { TRACE( "PlayableFlowController#BeginDrag", this ); }

                if (!this.CanGrab || (world.$clone().sub( this.anchor )).lengthSq() > this.grabRadius * this.grabRadius) {
                    return false;
                }
                return this.StartDragging(world);
            },
            /*PlayableFlowController.BeginDrag end.*/

            /*PlayableFlowController.StartDragging start.*/
            StartDragging: function (world) {
if ( TRACE ) { TRACE( "PlayableFlowController#StartDragging", this ); }

                this.BeginInput();
                this.phase = PlayableFlowController.Phase.Dragging;
                this.current.SetDragging(true);
                this.current.SetCollidersEnabled(false); // để tia dò điểm rơi không đụng chính nhân vật
                this.grabOffset = world.$clone().sub( this.anchor );
                this.grabScreen = pc.Vec2.ZERO.clone();
                this.grabUnitsPerPixel = 0;
                this.Drag(world.$clone());
                this.PlaySfx(this.grabSound, 0.6);
                this.cameraRig.SetAim(true); // zoom ra để thấy phòng địch + điểm rơi
                return true;
            },
            /*PlayableFlowController.StartDragging end.*/

            /*PlayableFlowController.BeginDragScreen start.*/
            BeginDragScreen: function (screen) {
if ( TRACE ) { TRACE( "PlayableFlowController#BeginDragScreen", this ); }

                if (!this.CanGrab) {
                    return;
                }
                var world = this.World(screen);
                // Vùng chạm: trong bán kính world HOẶC trong ~16% cạnh ngắn màn hình quanh nhân vật
                // (khi camera zoom xa nhân vật rất nhỏ, chạm theo world dễ trượt).
                var heroScreen = this.view.WorldToScreenPoint(new pc.Vec3( this.anchor.x, this.anchor.y, 0 ));
                var screenRadius = UnityEngine.Mathf.Min(this.view.pixelWidth, this.view.pixelHeight) * 0.16;
                var near = (world.$clone().sub( this.anchor )).lengthSq() <= this.grabRadius * this.grabRadius || (screen.$clone().sub( new pc.Vec2( heroScreen.x, heroScreen.y ) )).lengthSq() <= screenRadius * screenRadius;
                if (!near || !this.StartDragging(world)) {
                    return;
                }
                this.grabScreen = screen.$clone();
                this.grabUnitsPerPixel = this.view.orthographicSize * 2.0 / UnityEngine.Mathf.Max(1, this.view.pixelHeight);
            },
            /*PlayableFlowController.BeginDragScreen end.*/

            /*PlayableFlowController.DragScreen start.*/
            DragScreen: function (screen) {
if ( TRACE ) { TRACE( "PlayableFlowController#DragScreen", this ); }

                if (this.phase !== PlayableFlowController.Phase.Dragging) {
                    return;
                }
                if (this.grabUnitsPerPixel <= 0) {
                    this.Drag(this.World(screen));
                    return;
                }
                this.Drag(this.anchor.$clone().add( this.grabOffset ).add( (screen.$clone().sub( this.grabScreen )).scale( this.grabUnitsPerPixel ) ));
            },
            /*PlayableFlowController.DragScreen end.*/

            /*PlayableFlowController.Drag start.*/
            Drag: function (world) {
if ( TRACE ) { TRACE( "PlayableFlowController#Drag", this ); }

                if (this.phase !== PlayableFlowController.Phase.Dragging) {
                    return;
                }
                var delta = pc.Vec2.lengthClamp( world.$clone().sub( this.anchor ), this.maxPull );
                delta.x = UnityEngine.Mathf.Min(0.1, delta.x);
                this.pull = this.anchor.$clone().add( delta );
                this.current.transform.position = UnityEngine.Vector3.FromVector2(this.pull.$clone());
                this.UpdateBands(this.pull);
                this.cameraRig.aimFocus = this.pull.$clone();
                this.UpdateTrajectory((this.anchor.$clone().sub( this.pull )).scale( this.launchScale ));
            },
            /*PlayableFlowController.Drag end.*/

            /*PlayableFlowController.UpdateTrajectory start.*/
            UpdateTrajectory: function (velocity) {
if ( TRACE ) { TRACE( "PlayableFlowController#UpdateTrajectory", this ); }

                var origin = UnityEngine.Vector2.FromVector3(this.current.torso.transform.position.$clone()); // Belly is the aiming and flight center.
                var g = UnityEngine.Physics2D.gravity.$clone().scale( this.current.torso.gravityScale );
                var step = UnityEngine.Time.fixedDeltaTime;
                var a = 0.5 * g.y, b = velocity.y + 0.5 * g.y * step, c = origin.y;
                var disc = b * b - 4 * a * c;
                var total = a < 0 && disc > 0 ? (-b - Math.sqrt(disc)) / (2 * a) : 3.0;
                total = Math.max(0.4, Math.min(total, this.trajectoryTime));
                var dotScale = Math.max(1.0, Math.min(this.view.orthographicSize / 9.0, 2.0)); // chấm to hơn chút khi camera zoom ra (có giới hạn)
                var n = this.trajectoryDots.length;
                var prev = origin.$clone();
                var landed = false;
                var shown = 0;
                for (var i = 0; i < n; i = (i + 1) | 0) {
                    var dot = this.trajectoryDots[i];
                    if (landed) {
                        dot.gameObject.SetActive(false);
                        continue;
                    }
                    shown = (shown + 1) | 0;
                    var t = total * (((i + 1) | 0)) / n;
                    // Box2D integrates velocity before position on each fixed step.
                    var ticks = Math.floor(t / step);
                    var remainder = t - ticks * step;
                    var elapsed = ticks * step;
                    var p = origin.$clone().add( velocity.$clone().scale( t ) ).add( g.$clone().scale( (0.5 * elapsed * (elapsed + step) + (elapsed + step) * remainder) ) );
                    // 3 tia song song (giữa / trên / dưới) ~ bề dày thân nhân vật, để không lọt qua khe giữa các khớp.
                    // Không dùng hit.fraction (Luna có thể không hỗ trợ) -> tự tính từ hit.point.
                    // Bỏ qua va chạm sát ná (nhân vật đang kéo / chính cái ná) để đường chấm không bị cắt cụt.
                    var best = 2.0;
                    var segLen = prev.$clone().sub( p ).length();
                    if (segLen > 0.0001 && (p.$clone().sub( this.pull )).lengthSq() > this.ignoreNearPull * this.ignoreNearPull) {
                        for (var k = -1; k <= 1; k = (k + 1) | 0) {
                            var off = new pc.Vec2( 0, k * 0.3 );
                            var hit = UnityEngine.Physics2D.Linecast(prev.$clone().add( off ), p.$clone().add( off ));
                            if (UnityEngine.Component.op_Equality(hit.collider, null) || hit.collider.transform.IsChildOf(this.current.transform)) {
                                continue;
                            }
                            var frac = prev.$clone().add( off ).sub( hit.point ).length() / segLen;
                            if (frac < best) {
                                best = frac;
                            }
                        }
                    }
                    if (best <= 1.0) {
                        p = new pc.Vec2().lerp( prev, p, best );
                        landed = true;
                    }
                    dot.gameObject.SetActive(true);
                    dot.position = UnityEngine.Vector3.FromVector2(p.$clone());
                    prev = p.$clone();
                }
                // Chấm to ở gần ná, nhỏ dần đều tới chấm cuối (điểm rơi).
                for (var i1 = 0; i1 < shown; i1 = (i1 + 1) | 0) {
                    var k1 = shown > 1 ? i1 / (((shown - 1) | 0)) : 0;
                    var size = pc.math.lerp(this.dotSizeStart, this.dotSizeEnd, k1) * dotScale;
                    // dotBaseScale[0] là scale ứng với chấm .13 đơn vị world (đặt trong editor)
                    this.trajectoryDots[i1].localScale = this.dotBaseScale[0].$clone().clone().scale( (size / 0.13) );
                }
            },
            /*PlayableFlowController.UpdateTrajectory end.*/

            /*PlayableFlowController.ReleaseShot start.*/
            ReleaseShot: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#ReleaseShot", this ); }

                if (this.phase !== PlayableFlowController.Phase.Dragging) {
                    return;
                }
                this.SetDots(false);
                this.cameraRig.SetAim(false);
                if ((this.pull.$clone().sub( this.anchor )).lengthSq() < 0.035) {
                    this.current.transform.position = UnityEngine.Vector3.FromVector2(this.anchor.$clone());
                    this.current.SetDragging(false);
                    this.UpdateBands(this.anchor);
                    this.phase = PlayableFlowController.Phase.Ready;
                    this.cameraRig.PanTo(this.cameraRig.slingPosition);
                    return;
                }
                this.current.Launch((this.anchor.$clone().sub( this.pull )).scale( this.launchScale ));
                this.cameraRig.followTarget = this.current.torso.transform;
                this.UpdateBands(this.anchor);
                this.phase = PlayableFlowController.Phase.Flying;
                this.flightTime = 0;
                this.settledTime = 0;
                this.hitTime = 0;
                if (this.launchSound != null) {
                    this.audioSource.PlayOneShot$1(this.launchSound, 0.55);
                }
                this.PlaySfx(this.flySound, this.flyVolume);
            },
            /*PlayableFlowController.ReleaseShot end.*/

            /*PlayableFlowController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#Update", this ); }

                this.timer += UnityEngine.Time.deltaTime;
                this.handTimer += UnityEngine.Time.deltaTime;
                if (this.phase === PlayableFlowController.Phase.IntroMap && this.timer >= this.introHold) {
                    this.cameraRig.PanTo(this.cameraRig.slingPosition);
                    this.phase = PlayableFlowController.Phase.PanToSling;
                } else if (this.phase === PlayableFlowController.Phase.PanToSling && !this.cameraRig.IsPanning) {
                    this.phase = PlayableFlowController.Phase.Ready;
                    this.timer = 0;
                    this.handTimer = 0;
                } else if (this.phase === PlayableFlowController.Phase.Flying) {
                    this.flightTime += UnityEngine.Time.deltaTime;
                    this.settledTime = this.current.hasCollided && this.current.IsSettled() ? this.settledTime + UnityEngine.Time.deltaTime : 0;
                    if (this.current.hasCollided) {
                        this.hitTime += UnityEngine.Time.deltaTime;
                    }
                    var p = this.current.torso.position.$clone();
                    // Chạm vào thứ gì đó ~1.3s (hoặc nằm yên sớm hơn) là quay về ná.
                    // Chỉ quay về ná SAU khi đã va chạm: đủ hitReturnTime (2.5s), hoặc đã nằm yên và va chạm >= 2s.
                    // Không giới hạn thời gian bay. Chỉ về ná khi đã va chạm, hoặc nhân vật bay ra khỏi bản đồ.
                    var afterHit = this.current.hasCollided && (this.hitTime >= this.hitReturnTime || (this.settledTime > 0.3 && this.hitTime >= this.minHitTime));
                    if (afterHit || p.y < -6 || p.x > 40 || p.x < -30) {
                        this.phase = PlayableFlowController.Phase.ResultDelay;
                        this.timer = 0;
                    }
                } else if (this.phase === PlayableFlowController.Phase.ResultDelay && this.timer >= this.resultHold) {
                    // Không đóng băng ngay (nhân vật có thể còn đang bay/nảy -> bị treo lơ lửng).
                    // Để vật lý chạy tiếp, nhân vật tự đóng băng khi đã nằm yên trên sàn.
                    this.current.FreezeWhenSettled();
                    this.cameraRig.PanTo(this.cameraRig.slingPosition);
                    this.phase = PlayableFlowController.Phase.ReturnToSling;
                } else if (this.phase === PlayableFlowController.Phase.ReturnToSling && !this.cameraRig.IsPanning) {
                    this.timer = 0;
                    this.NextShot();
                }
                this.UpdateUI();
                this.ReadInput();
            },
            /*PlayableFlowController.Update end.*/

            /*PlayableFlowController.ReadInput start.*/
            ReadInput: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#ReadInput", this ); }

                if (UnityEngine.Input.touchCount > 0) {
                    var t = UnityEngine.Input.GetTouch(0);
                    if (t.phase === UnityEngine.TouchPhase.Began) {
                        this.pointerId = t.fingerId;
                        this.PointerDown(t.position);
                    } else if (t.fingerId === this.pointerId) {
                        if (t.phase === UnityEngine.TouchPhase.Ended) {
                            this.ReleaseShot();
                            this.pointerId = -1;
                        } else if (t.phase === UnityEngine.TouchPhase.Canceled) {
                            this.CancelDrag();
                            this.pointerId = -1;
                        } else {
                            this.DragScreen(t.position);
                        }
                    }
                    return;
                }
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.PointerDown(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
                } else {
                    if (UnityEngine.Input.GetMouseButtonUp(0)) {
                        this.ReleaseShot();
                    } else {
                        if (UnityEngine.Input.GetMouseButton(0)) {
                            this.DragScreen(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
                        }
                    }
                }
            },
            /*PlayableFlowController.ReadInput end.*/

            /*PlayableFlowController.World start.*/
            World: function (p) {
if ( TRACE ) { TRACE( "PlayableFlowController#World", this ); }

                return UnityEngine.Vector2.FromVector3(this.view.ScreenToWorldPoint(new pc.Vec3( p.x, p.y, 10 )));
            },
            /*PlayableFlowController.World end.*/

            /*PlayableFlowController.PointerDown start.*/
            PointerDown: function (p) {
if ( TRACE ) { TRACE( "PlayableFlowController#PointerDown", this ); }

                // Màn chọn nhân vật: chạm bất kỳ đâu -> end game + CTA luôn (không qua end card).
                if (this.phase === PlayableFlowController.Phase.SelectHero) {
                    this.BeginInput();
                    this.PlaySfx(this.ctaSound, 0.8);
                    this.OpenStore();
                    return;
                }
                if (this.phase === PlayableFlowController.Phase.EndCard || this.phase === PlayableFlowController.Phase.Store) {
                    this.OpenStore();
                    return;
                }
                this.BeginDragScreen(p);
            },
            /*PlayableFlowController.PointerDown end.*/

            /*PlayableFlowController.CancelDrag start.*/
            CancelDrag: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#CancelDrag", this ); }

                if (this.phase !== PlayableFlowController.Phase.Dragging) {
                    return;
                }
                this.current.transform.position = UnityEngine.Vector3.FromVector2(this.anchor.$clone());
                this.current.SetDragging(false);
                this.UpdateBands(this.anchor);
                this.SetDots(false);
                this.phase = PlayableFlowController.Phase.Ready;
                this.cameraRig.SetAim(false);
                this.cameraRig.PanTo(this.cameraRig.slingPosition);
            },
            /*PlayableFlowController.CancelDrag end.*/

            /*PlayableFlowController.OnApplicationFocus start.*/
            OnApplicationFocus: function (focus) {
if ( TRACE ) { TRACE( "PlayableFlowController#OnApplicationFocus", this ); }

                if (!focus) {
                    this.CancelDrag();
                }
            },
            /*PlayableFlowController.OnApplicationFocus end.*/

            /*PlayableFlowController.UpdateBands start.*/
            UpdateBands: function (point) {
if ( TRACE ) { TRACE( "PlayableFlowController#UpdateBands", this ); }

                this.leftBand.SetPosition(0, this.leftBandTip);
                this.leftBand.SetPosition(1, UnityEngine.Vector3.FromVector2(point));
                this.rightBand.SetPosition(0, this.rightBandTip);
                this.rightBand.SetPosition(1, UnityEngine.Vector3.FromVector2(point));
            },
            /*PlayableFlowController.UpdateBands end.*/

            /*PlayableFlowController.SetDots start.*/
            SetDots: function (on) {
if ( TRACE ) { TRACE( "PlayableFlowController#SetDots", this ); }

                for (var i = 0; i < this.trajectoryDots.length; i = (i + 1) | 0) {
                    this.trajectoryDots[i].gameObject.SetActive(on);
                }
            },
            /*PlayableFlowController.SetDots end.*/

            /*PlayableFlowController.ShowHeroSelect start.*/
            ShowHeroSelect: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#ShowHeroSelect", this ); }

                var $t;
                this.phase = PlayableFlowController.Phase.SelectHero;
                this.handTimer = 0;
                var n = UnityEngine.MonoBehaviour.op_Inequality(this.heroSkins, null) ? this.heroSkins.skins.length : 0, count = 0;
                // Ưu tiên nhân vật chưa bắn, thiếu thì lấy nhân vật đã bắn (từ lượt đầu).
                for (var id = 0; id < n && count < 3; id = (id + 1) | 0) {
                    if (!this.WasShot(id)) {
                        this.selectIds[Bridge.identity(count, ((count = (count + 1) | 0)))] = id;
                    }
                }
                for (var s = 0; s < this.ShotCount && count < 3; s = (s + 1) | 0) {
                    if (!this.InSelect(this.HeroId(s), count)) {
                        this.selectIds[Bridge.identity(count, ((count = (count + 1) | 0)))] = this.HeroId(s);
                    }
                }
                for (var i = 0; i < this.selectButtons.length; i = (i + 1) | 0) {
                    var on = i < count;
                    this.selectButtons[i].gameObject.SetActive(on);
                    if (!on) {
                        continue;
                    }
                    var skin = ($t = this.heroSkins.skins)[this.selectIds[i]];
                    this.selectPortraits[i].sprite = skin.portrait;
                    this.selectNames[i].text = skin.label;
                    this.selectFrames[i].sprite = i === this.handTargetButton ? this.frameHighlight : this.frameNormal;
                }
                if (UnityEngine.GameObject.op_Inequality(this.selectRoot, null)) {
                    this.selectRoot.SetActive(true);
                }
                this.PlaySfx(this.spawnSound, this.spawnVolume);
            },
            /*PlayableFlowController.ShowHeroSelect end.*/

            /*PlayableFlowController.WasShot start.*/
            WasShot: function (id) {
if ( TRACE ) { TRACE( "PlayableFlowController#WasShot", this ); }

                for (var s = 0; s < this.ShotCount; s = (s + 1) | 0) {
                    if (this.HeroId(s) === id) {
                        return true;
                    }
                }
                return false;
            },
            /*PlayableFlowController.WasShot end.*/

            /*PlayableFlowController.InSelect start.*/
            InSelect: function (id, count) {
if ( TRACE ) { TRACE( "PlayableFlowController#InSelect", this ); }

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    if (this.selectIds[i] === id) {
                        return true;
                    }
                }
                return false;
            },
            /*PlayableFlowController.InSelect end.*/

            /*PlayableFlowController.TrySelect start.*/
            TrySelect: function (screen) {
if ( TRACE ) { TRACE( "PlayableFlowController#TrySelect", this ); }

                for (var i = 0; i < this.selectButtons.length; i = (i + 1) | 0) {
                    if (this.selectButtons[i].gameObject.activeSelf && UnityEngine.RectTransformUtility.RectangleContainsScreenPoint$1(this.selectButtons[i], screen, this.uiCamera)) {
                        this.BeginInput();
                        this.ShowEndCard(this.selectIds[i]);
                        return;
                    }
                }
            },
            /*PlayableFlowController.TrySelect end.*/

            /*PlayableFlowController.ShowEndCard start.*/
            ShowEndCard: function (id) {
if ( TRACE ) { TRACE( "PlayableFlowController#ShowEndCard", this ); }

                var $t;
                if (UnityEngine.GameObject.op_Inequality(this.selectRoot, null)) {
                    this.selectRoot.SetActive(false);
                }
                this.phase = PlayableFlowController.Phase.EndCard;
                this.handTimer = 0;
                var skin = ($t = this.heroSkins.skins)[id];
                if (UnityEngine.MonoBehaviour.op_Inequality(this.endCardPortrait, null)) {
                    this.endCardPortrait.sprite = skin.portrait;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.endCardTitle, null)) {
                    this.endCardTitle.text = "PLAY AS " + (skin.label || "") + "!";
                }
                if (UnityEngine.GameObject.op_Inequality(this.endCardRoot, null)) {
                    this.endCardRoot.SetActive(true);
                }
                this.PlaySfx(this.ctaSound, 0.8);
                if (!this.gameEnded) {
                    this.gameEnded = true;
                    Luna.Unity.LifeCycle.GameEnded();
                }
            },
            /*PlayableFlowController.ShowEndCard end.*/

            /*PlayableFlowController.PlaceHandAtScreen start.*/
            PlaceHandAtScreen: function (screen) {
if ( TRACE ) { TRACE( "PlayableFlowController#PlaceHandAtScreen", this ); }

                var local = { v : new UnityEngine.Vector2() };
                UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(Bridge.cast(this.handGuide.parent, UnityEngine.RectTransform), screen, this.uiCamera, local);
                this.handGuide.anchoredPosition = local.v.$clone();
            },
            /*PlayableFlowController.PlaceHandAtScreen end.*/

            /*PlayableFlowController.UpdateHandReady start.*/
            UpdateHandReady: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#UpdateHandReady", this ); }

                if (this.phase !== PlayableFlowController.Phase.Ready) {
                    return;
                }
                var cycle = 2.0;
                var t = (this.handTimer % cycle) / cycle;
                var move = Math.max(0, Math.min(1, (t - 0.15) / 0.5));
                move = move * move * (3 - 2 * move);
                var alpha = t < 0.12 ? t / 0.12 : (t > 0.82 ? Math.max(0, Math.min(1, (1 - t) / 0.18)) : 1.0);
                var press = t < 0.15 ? pc.math.lerp(1.12, 1.0, Math.max(0, Math.min(1, (t - 0.05) / 0.1))) : 1.0;
                var p = this.anchor.$clone().add( new pc.Vec2( -1.5, -1.6 ).scale( move ) );
                var sp = this.view.WorldToScreenPoint(new pc.Vec3( p.x, p.y, 0 ));
                this.PlaceHandAtScreen(new pc.Vec2( sp.x + 6, sp.y - 6 ));
                this.handGuide.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( press );
                this.handAlpha.alpha = alpha;
            },
            /*PlayableFlowController.UpdateHandReady end.*/

            /*PlayableFlowController.UpdateUI start.*/
            UpdateUI: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#UpdateUI", this ); }

                var ready = this.phase === PlayableFlowController.Phase.Ready;
                var select = this.phase === PlayableFlowController.Phase.SelectHero;
                var endCard = this.phase === PlayableFlowController.Phase.EndCard && UnityEngine.Component.op_Inequality(this.ctaButton, null);
                if (!ready) {
                    this.handAlpha.alpha = select || endCard ? 1 : 0;
                }
                // (tay hướng dẫn lúc Ready được đặt trong UpdateHandReady, chạy SAU khi camera di chuyển)
                if ((select && this.handTargetButton < this.selectButtons.length) || endCard) {
                    // Tính thẳng trong toạ độ canvas để không phụ thuộc độ phân giải màn hình.
                    var b = select ? this.selectButtons[this.handTargetButton] : this.ctaButton;
                    var parent = Bridge.cast(this.handGuide.parent, UnityEngine.RectTransform);
                    var local = parent.InverseTransformPoint(b.position);
                    var bob = Math.abs(Math.sin(this.handTimer * 4.0));
                    var ox = select ? 10 : 90;
                    this.handGuide.anchoredPosition = new pc.Vec2( local.x + ox + bob * 22, local.y - 20 - bob * 30 );
                    this.handGuide.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( (1 - (1 - bob) * 0.12) );
                    if (select) {
                        for (var i = 0; i < this.selectButtons.length; i = (i + 1) | 0) {
                            this.selectButtons[i].localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( (i === this.handTargetButton ? 1.06 + 0.04 * Math.sin(this.handTimer * 6.0) : 1.0) );
                        }
                    }
                }
                if (this.phase === PlayableFlowController.Phase.EndCard && UnityEngine.Component.op_Inequality(this.ctaButton, null)) {
                    this.ctaButton.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( (1 + 0.07 * Math.sin(this.handTimer * 6.0)) );
                }

                this.prompt.color = new pc.Color( 1, 1, 1, 1 );
                if (ready || this.phase === PlayableFlowController.Phase.Dragging) {
                    this.prompt.text = "DRAG BACK & RELEASE";
                } else {
                    if (this.phase === PlayableFlowController.Phase.Flying) {
                        this.prompt.text = "";
                    } else {
                        if (this.phase === PlayableFlowController.Phase.ResultDelay || this.phase === PlayableFlowController.Phase.ReturnToSling) {
                            this.prompt.text = "TRY ANOTHER HERO!";
                        } else {
                            if (select) {
                                this.prompt.text = "CHOOSE YOUR HERO!";
                            } else {
                                if (this.phase === PlayableFlowController.Phase.EndCard || this.phase === PlayableFlowController.Phase.Store) {
                                    this.prompt.text = "";
                                }
                            }
                        }
                    }
                }
                this.actorLabel.enabled = ready || this.phase === PlayableFlowController.Phase.Dragging;
            },
            /*PlayableFlowController.UpdateUI end.*/

            /*PlayableFlowController.PlayImpact start.*/
            PlayImpact: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#PlayImpact", this ); }

                if (!this.started || UnityEngine.Time.time < this.lastImpactSound + 0.07) {
                    return;
                }
                this.lastImpactSound = UnityEngine.Time.time;
                var clip = this.impactSounds != null && this.impactSounds.length > 0 ? this.impactSounds[UnityEngine.Random.Range(0, this.impactSounds.length)] : this.impactSound;
                this.PlaySfx(clip, 0.5);
            },
            /*PlayableFlowController.PlayImpact end.*/

            /*PlayableFlowController.PlayKnock start.*/
            PlayKnock: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#PlayKnock", this ); }

                if (this.started) {
                    this.PlaySfx(this.knockSound, 0.8);
                }
            },
            /*PlayableFlowController.PlayKnock end.*/

            /*PlayableFlowController.PlaySfx start.*/
            PlaySfx: function (clip, volume) {
if ( TRACE ) { TRACE( "PlayableFlowController#PlaySfx", this ); }

                if (clip != null && UnityEngine.Component.op_Inequality(this.audioSource, null)) {
                    this.audioSource.PlayOneShot$1(clip, volume);
                }
            },
            /*PlayableFlowController.PlaySfx end.*/

            /*PlayableFlowController.OpenStore start.*/
            OpenStore: function () {
if ( TRACE ) { TRACE( "PlayableFlowController#OpenStore", this ); }

                this.storeOpened = true;
                this.installCallCount = (this.installCallCount + 1) | 0;
                if (this.phase !== PlayableFlowController.Phase.EndCard && this.phase !== PlayableFlowController.Phase.SelectHero) {
                    this.phase = PlayableFlowController.Phase.Store;
                }
                if (!this.gameEnded) {
                    this.gameEnded = true;
                    Luna.Unity.LifeCycle.GameEnded();
                }
                Luna.Unity.Playable.InstallFullGame();
            },
            /*PlayableFlowController.OpenStore end.*/


        }
    });
    /*PlayableFlowController end.*/

    /*PlayableFlowController+Phase start.*/
    Bridge.define("PlayableFlowController.Phase", {
        $kind: 1006,
        statics: {
            fields: {
                IntroMap: 0,
                PanToSling: 1,
                Ready: 2,
                Dragging: 3,
                Flying: 4,
                ResultDelay: 5,
                ReturnToSling: 6,
                AwaitSpawnTap: 7,
                Store: 8,
                SelectHero: 9,
                EndCard: 10
            }
        }
    });
    /*PlayableFlowController+Phase end.*/

    /*RagdollActor start.*/
    Bridge.define("RagdollActor", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            torso: null,
            bodies: null,
            renderers: null,
            hasCollided: false,
            reactiveTarget: false,
            knockedDown: false,
            localPositions: null,
            localRotations: null,
            orders: null,
            initialized: false,
            flightVisualPositions: null,
            flightVisualRotations: null,
            flightPivots: null,
            flightAngles: null,
            flightAngularSpeeds: null,
            flightVisuals: false,
            flightVisualTime: 0,
            ownColliders: null,
            launchTime: 0,
            pendingFreeze: false,
            restTime: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RagdollActor#init", this ); }

                this.launchTime = -100;
            }
        },
        methods: {
            /*RagdollActor.BeginFlightVisuals start.*/
            BeginFlightVisuals: function () {
if ( TRACE ) { TRACE( "RagdollActor#BeginFlightVisuals", this ); }

                var count = this.renderers.length;
                if (this.flightAngles == null || this.flightAngles.length !== count) {
                    this.flightVisualPositions = System.Array.init(count, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    this.flightVisualRotations = System.Array.init(count, function (){
                        return new UnityEngine.Quaternion();
                    }, UnityEngine.Quaternion);
                    this.flightPivots = System.Array.init(count, function (){
                        return new UnityEngine.Vector2();
                    }, UnityEngine.Vector2);
                    this.flightAngles = System.Array.init(count, 0, System.Single);
                    this.flightAngularSpeeds = System.Array.init(count, 0, System.Single);
                }
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var visual = this.renderers[i].transform;
                    this.flightVisualPositions[i] = visual.localPosition.$clone();
                    this.flightVisualRotations[i] = visual.localRotation.$clone();
                    var joint = visual.parent.GetComponent(UnityEngine.HingeJoint2D);
                    this.flightPivots[i] = UnityEngine.Component.op_Inequality(joint, null) ? joint.anchor.$clone() : pc.Vec2.ZERO.clone();
                    this.flightAngles[i] = 0;
                    this.flightAngularSpeeds[i] = 0;
                }
                this.flightVisualTime = 0;
                this.flightVisuals = true;
            },
            /*RagdollActor.BeginFlightVisuals end.*/

            /*RagdollActor.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "RagdollActor#LateUpdate", this ); }

                this.AdvanceFlightVisuals(UnityEngine.Time.deltaTime);
            },
            /*RagdollActor.LateUpdate end.*/

            /*RagdollActor.AdvanceFlightVisuals start.*/
            AdvanceFlightVisuals: function (dt) {
if ( TRACE ) { TRACE( "RagdollActor#AdvanceFlightVisuals", this ); }

                if (!this.flightVisuals || UnityEngine.Component.op_Equality(this.torso, null)) {
                    return;
                }
                dt = UnityEngine.Mathf.Min(dt, 0.033);
                this.flightVisualTime += dt;
                var velocity = this.torso.linearVelocity.$clone();
                var strength = Math.max(0, Math.min(1, velocity.length() / 16.0));
                var direction = Math.max(-1.0, Math.min(velocity.x / 8.0, 1.0));
                var airborne = !this.hasCollided && this.torso.bodyType === UnityEngine.RigidbodyType2D.Dynamic;
                for (var i = 1; i < this.renderers.length; i = (i + 1) | 0) {
                    var head = i === 1;
                    var arm = i === 2 || i === 4;
                    var phase = i * 1.7;
                    var drag = direction * strength * (head ? 18.0 : arm ? -42.0 : -30.0);
                    var flutter = Math.sin(this.flightVisualTime * (head ? 8.0 : 11.0) + phase) * strength * (head ? 5.0 : arm ? 12.0 : 9.0);
                    var kick = Math.sin(this.flightVisualTime * 17.0 + phase) * UnityEngine.Mathf.Exp(-this.flightVisualTime * 4.0) * (head ? 8.0 : 18.0);
                    var target = airborne ? drag + flutter + kick : 0;
                    var spring = head ? 105.0 : 75.0;
                    this.flightAngularSpeeds[i] += ((target - this.flightAngles[i]) * spring - this.flightAngularSpeeds[i] * 13.0) * dt;
                    this.flightAngles[i] = Math.max(head ? -26.0 : -62.0, Math.min(this.flightAngles[i] + this.flightAngularSpeeds[i] * dt, head ? 26.0 : 62.0));
                    var rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, this.flightAngles[i] );
                    var pivot = UnityEngine.Vector3.FromVector2(this.flightPivots[i].$clone());
                    var visual = this.renderers[i].transform;
                    visual.localPosition = pivot.$clone().add( rotation.transformVector( (this.flightVisualPositions[i].$clone().sub( pivot )) ) );
                    visual.localRotation = rotation.clone().mul( this.flightVisualRotations[i] );
                }
            },
            /*RagdollActor.AdvanceFlightVisuals end.*/

            /*RagdollActor.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "RagdollActor#Awake", this ); }

                this.IgnoreSelfCollision();
            },
            /*RagdollActor.Awake end.*/

            /*RagdollActor.IgnoreSelfCollision start.*/
            IgnoreSelfCollision: function () {
if ( TRACE ) { TRACE( "RagdollActor#IgnoreSelfCollision", this ); }

                var colliders = this.GetComponentsInChildren$1(UnityEngine.Collider2D, true);
                for (var i = 0; i < colliders.length; i = (i + 1) | 0) {
                    for (var j = (i + 1) | 0; j < colliders.length; j = (j + 1) | 0) {
                        UnityEngine.Physics2D.IgnoreCollision(colliders[i], colliders[j]);
                    }
                }
            },
            /*RagdollActor.IgnoreSelfCollision end.*/

            /*RagdollActor.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "RagdollActor#Initialize", this ); }

                if (this.initialized) {
                    return;
                }
                this.initialized = true;
                this.IgnoreSelfCollision();
                this.localPositions = System.Array.init(this.bodies.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.localRotations = System.Array.init(this.bodies.length, function (){
                    return new UnityEngine.Quaternion();
                }, UnityEngine.Quaternion);
                this.orders = System.Array.init(this.renderers.length, 0, System.Int32);
                for (var i = 0; i < this.bodies.length; i = (i + 1) | 0) {
                    this.localPositions[i] = this.bodies[i].transform.localPosition.$clone();
                    this.localRotations[i] = this.bodies[i].transform.localRotation.$clone();
                }
                for (var i1 = 0; i1 < this.renderers.length; i1 = (i1 + 1) | 0) {
                    this.orders[i1] = this.renderers[i1].sortingOrder;
                }
            },
            /*RagdollActor.Initialize end.*/

            /*RagdollActor.LoadAt start.*/
            LoadAt: function (position) {
if ( TRACE ) { TRACE( "RagdollActor#LoadAt", this ); }

                this.Initialize();
                // Đặt vị trí + tư thế TRƯỚC khi bật object để body vật lý được tạo đúng chỗ.
                this.flightVisuals = false;
                for (var i = 0; i < this.renderers.length; i = (i + 1) | 0) {
                    this.renderers[i].transform.localRotation = pc.Quat.IDENTITY.clone();
                }
                this.transform.position = UnityEngine.Vector3.FromVector2(position.$clone());
                this.hasCollided = false;
                this.pendingFreeze = false;
                for (var i1 = 0; i1 < this.bodies.length; i1 = (i1 + 1) | 0) {
                    this.bodies[i1].simulated = false;
                    this.bodies[i1].bodyType = UnityEngine.RigidbodyType2D.Dynamic;
                    this.bodies[i1].transform.localPosition = this.localPositions[i1].$clone();
                    this.bodies[i1].transform.localRotation = this.localRotations[i1].$clone();
                }
                this.gameObject.SetActive(true);
                this.SyncBodies();
            },
            /*RagdollActor.LoadAt end.*/

            /*RagdollActor.SyncBodies start.*/
            SyncBodies: function () {
if ( TRACE ) { TRACE( "RagdollActor#SyncBodies", this ); }

                for (var i = 0; i < this.bodies.length; i = (i + 1) | 0) {
                    var t = this.bodies[i].transform;
                    this.bodies[i].position = UnityEngine.Vector2.FromVector3(t.position.$clone());
                    this.bodies[i].rotation = t.eulerAngles.z;
                    this.bodies[i].linearVelocity = pc.Vec2.ZERO.clone();
                    this.bodies[i].angularVelocity = 0;
                }
            },
            /*RagdollActor.SyncBodies end.*/

            /*RagdollActor.SetCollidersEnabled start.*/
            SetCollidersEnabled: function (on) {
if ( TRACE ) { TRACE( "RagdollActor#SetCollidersEnabled", this ); }

                if (this.ownColliders == null) {
                    this.ownColliders = this.GetComponentsInChildren$1(UnityEngine.Collider2D, true);
                }
                for (var i = 0; i < this.ownColliders.length; i = (i + 1) | 0) {
                    this.ownColliders[i].enabled = on;
                }
                // Tắt/bật collider làm mất IgnoreCollision -> đặt lại để tay chân không va vào nhau rồi văng.
                if (on) {
                    this.IgnoreSelfCollision();
                }
            },
            /*RagdollActor.SetCollidersEnabled end.*/

            /*RagdollActor.SetDragging start.*/
            SetDragging: function (dragging) {
if ( TRACE ) { TRACE( "RagdollActor#SetDragging", this ); }

                if (!dragging) {
                    this.SetCollidersEnabled(true);
                }
                if (this.orders == null) {
                    return;
                }
                for (var i = 0; i < this.renderers.length; i = (i + 1) | 0) {
                    this.renderers[i].sortingOrder = dragging ? ((100 + i) | 0) : this.orders[i];
                }
            },
            /*RagdollActor.SetDragging end.*/

            /*RagdollActor.Launch start.*/
            Launch: function (velocity) {
if ( TRACE ) { TRACE( "RagdollActor#Launch", this ); }

                this.launchTime = UnityEngine.Time.time;
                this.BeginFlightVisuals();
                this.SetDragging(false);
                this.SyncBodies();
                for (var i = 0; i < this.bodies.length; i = (i + 1) | 0) {
                    this.bodies[i].simulated = true;
                }
                // Re-enabling simulation recreates contacts; restore self-collision filtering afterwards.
                this.IgnoreSelfCollision();
                for (var i1 = 0; i1 < this.bodies.length; i1 = (i1 + 1) | 0) {
                    this.bodies[i1].linearVelocity = velocity.$clone();
                    // Match the belly trajectory until the first collision; impacts create the tumble.
                    this.bodies[i1].linearDamping = 0;
                    this.bodies[i1].gravityScale = this.torso.gravityScale;
                    this.bodies[i1].angularVelocity = 0;
                }
            },
            /*RagdollActor.Launch end.*/

            /*RagdollActor.IsSettled start.*/
            IsSettled: function () {
if ( TRACE ) { TRACE( "RagdollActor#IsSettled", this ); }

                for (var i = 0; i < this.bodies.length; i = (i + 1) | 0) {
                    if (this.bodies[i].linearVelocity.lengthSq() > 0.16 || Math.abs(this.bodies[i].angularVelocity) > 35) {
                        return false;
                    }
                }
                return true;
            },
            /*RagdollActor.IsSettled end.*/

            /*RagdollActor.FreezeWhenSettled start.*/
            FreezeWhenSettled: function () {
if ( TRACE ) { TRACE( "RagdollActor#FreezeWhenSettled", this ); }

                this.pendingFreeze = true;
                this.restTime = 0;
            },
            /*RagdollActor.FreezeWhenSettled end.*/

            /*RagdollActor.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "RagdollActor#FixedUpdate", this ); }

                if (!this.pendingFreeze) {
                    return;
                }
                this.restTime = this.IsSettled() ? this.restTime + UnityEngine.Time.fixedDeltaTime : 0;
                if (this.restTime > 0.5 || (UnityEngine.Component.op_Inequality(this.torso, null) && this.torso.position.y < -6)) {
                    this.Freeze();
                }
            },
            /*RagdollActor.FixedUpdate end.*/

            /*RagdollActor.Freeze start.*/
            Freeze: function () {
if ( TRACE ) { TRACE( "RagdollActor#Freeze", this ); }

                this.pendingFreeze = false;
                for (var i = 0; i < this.bodies.length; i = (i + 1) | 0) {
                    this.bodies[i].bodyType = UnityEngine.RigidbodyType2D.Static;
                }
            },
            /*RagdollActor.Freeze end.*/

            /*RagdollActor.ReactToHit start.*/
            ReactToHit: function (velocity) {
if ( TRACE ) { TRACE( "RagdollActor#ReactToHit", this ); }

                if (!this.reactiveTarget || this.knockedDown || velocity.lengthSq() < 4) {
                    return;
                }
                this.knockedDown = true;
                for (var i = 0; i < this.bodies.length; i = (i + 1) | 0) {
                    this.bodies[i].bodyType = UnityEngine.RigidbodyType2D.Dynamic;
                    this.bodies[i].linearVelocity = velocity.$clone().scale( 0.35 );
                    this.bodies[i].angularVelocity = Bridge.Int.mul((i % 2 === 0 ? 1 : -1), 100);
                }
            },
            /*RagdollActor.ReactToHit end.*/


        }
    });
    /*RagdollActor end.*/

    /*RagdollImpact start.*/
    Bridge.define("RagdollImpact", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                launchGrace: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "RagdollImpact#init", this ); }

                    this.launchGrace = 0.4;
                }
            }
        },
        fields: {
            actor: null,
            flow: null,
            lastSound: 0
        },
        methods: {
            /*RagdollImpact.OnCollisionStay2D start.*/
            OnCollisionStay2D: function (hit) {
if ( TRACE ) { TRACE( "RagdollImpact#OnCollisionStay2D", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.actor, null) || this.actor.hasCollided || this.actor.reactiveTarget) {
                    return;
                }
                if (UnityEngine.Component.op_Inequality(hit.collider, null) && hit.collider.transform.IsChildOf(this.actor.transform)) {
                    return;
                }
                if (UnityEngine.Time.time - this.actor.launchTime >= RagdollImpact.launchGrace) {
                    this.actor.hasCollided = true;
                }
            },
            /*RagdollImpact.OnCollisionStay2D end.*/

            /*RagdollImpact.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (hit) {
if ( TRACE ) { TRACE( "RagdollImpact#OnCollisionEnter2D", this ); }

                // Bỏ qua va chạm giữa các bộ phận của CHÍNH nhân vật này (trên Luna IgnoreCollision
                // có thể không giữ được) -> tránh tính "đã va chạm" ngay lúc vừa bắn.
                if (UnityEngine.MonoBehaviour.op_Inequality(this.actor, null) && UnityEngine.Component.op_Inequality(hit.collider, null) && hit.collider.transform.IsChildOf(this.actor.transform)) {
                    return;
                }
                // Kéo ná xuống thấp thì chân nhân vật chạm sàn ngay lúc thả -> không tính là "đã va chạm"
                // trong khoảng ngắn đầu tiên sau khi bắn (nếu không sẽ đếm giờ và quay về ná khi còn đang bay).
                if (UnityEngine.MonoBehaviour.op_Inequality(this.actor, null) && !this.actor.reactiveTarget && UnityEngine.Time.time - this.actor.launchTime < RagdollImpact.launchGrace) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.actor, null)) {
                    var wasDown = this.actor.knockedDown;
                    this.actor.hasCollided = true;
                    this.actor.ReactToHit(hit.relativeVelocity);
                    if (!wasDown && this.actor.knockedDown && UnityEngine.MonoBehaviour.op_Inequality(this.flow, null)) {
                        this.flow.PlayKnock();
                    }
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.flow, null) && UnityEngine.Time.time > this.lastSound + 0.18 && hit.relativeVelocity.lengthSq() > 8) {
                    this.lastSound = UnityEngine.Time.time;
                    this.flow.PlayImpact();
                }
            },
            /*RagdollImpact.OnCollisionEnter2D end.*/


        }
    });
    /*RagdollImpact end.*/

    /*TextOutline start.*/
    Bridge.define("TextOutline", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            outlineColor: null,
            thickness: 0,
            shadowColor: null,
            shadowOffset: null,
            copies: null,
            baseAlpha: null,
            source: null,
            lastText: null,
            lastEnabled: false,
            lastAlpha: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TextOutline#init", this ); }

                this.outlineColor = new UnityEngine.Color();
                this.shadowColor = new UnityEngine.Color();
                this.shadowOffset = new UnityEngine.Vector2();
                this.outlineColor = new pc.Color( 0.08, 0.04, 0.06, 1 );
                this.thickness = 4;
                this.shadowColor = new pc.Color( 0, 0, 0, 0.85 );
                this.shadowOffset = new pc.Vec2( 6, -7 );
                this.lastAlpha = -1;
            }
        },
        methods: {
            /*TextOutline.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TextOutline#Awake", this ); }

                this.source = this.GetComponent(UnityEngine.UI.Text);
                this.Sync(true);
            },
            /*TextOutline.Awake end.*/

            /*TextOutline.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "TextOutline#LateUpdate", this ); }

                this.Sync(false);
            },
            /*TextOutline.LateUpdate end.*/

            /*TextOutline.Sync start.*/
            Sync: function (force) {
if ( TRACE ) { TRACE( "TextOutline#Sync", this ); }

                if (this.copies == null || UnityEngine.MonoBehaviour.op_Equality(this.source, null)) {
                    return;
                }
                var en = this.source.enabled && this.source.gameObject.activeInHierarchy;
                var a = this.source.color.a;
                if (!force && Bridge.referenceEquals(this.source.text, this.lastText) && en === this.lastEnabled && Math.abs(a - this.lastAlpha) < 0.01) {
                    return;
                }
                this.lastText = this.source.text;
                this.lastEnabled = en;
                this.lastAlpha = a;
                for (var i = 0; i < this.copies.length; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.copies[i], null)) {
                        continue;
                    }
                    this.copies[i].text = this.lastText;
                    this.copies[i].enabled = en;
                    var c = this.copies[i].color.$clone();
                    c.a = this.baseAlpha[i] * a;
                    this.copies[i].color = c.$clone();
                }
            },
            /*TextOutline.Sync end.*/


        }
    });
    /*TextOutline end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.UI"];

    /*LunaControllerFNAF start.*/
    $m("LunaControllerFNAF", function () { return {"nested":[LunaControllerFNAF.PlayableVersion,LunaControllerFNAF.Hero],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Background Music", 1, null)],"a":2,"n":"backgroundMusic","t":4,"rt":$n[1].AudioClip,"sn":"backgroundMusic"},{"a":2,"n":"flow","t":4,"rt":PlayableFlowController,"sn":"flow"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Hero Shot 1", 4, null, false, null)],"a":2,"n":"heroShot1","t":4,"rt":LunaControllerFNAF.Hero,"sn":"heroShot1","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.Hero, System.Enum.toStringFn(LunaControllerFNAF.Hero));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Hero Shot 2", 5, null, false, null)],"a":2,"n":"heroShot2","t":4,"rt":LunaControllerFNAF.Hero,"sn":"heroShot2","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.Hero, System.Enum.toStringFn(LunaControllerFNAF.Hero));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Hero Shot 3", 6, null, false, null)],"a":2,"n":"heroShot3","t":4,"rt":LunaControllerFNAF.Hero,"sn":"heroShot3","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.Hero, System.Enum.toStringFn(LunaControllerFNAF.Hero));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Hero Shot 4", 7, null, false, null)],"a":2,"n":"heroShot4","t":4,"rt":LunaControllerFNAF.Hero,"sn":"heroShot4","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.Hero, System.Enum.toStringFn(LunaControllerFNAF.Hero));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Music Enabled", 2, null, false, null)],"a":2,"n":"musicEnabled","t":4,"rt":$n[0].Boolean,"sn":"musicEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Music Volume", 3, null, false, null),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"musicVolume","t":4,"rt":$n[0].Single,"sn":"musicVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Playable Version", 0, null, false, null)],"a":2,"n":"version","t":4,"rt":LunaControllerFNAF.PlayableVersion,"sn":"version","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.PlayableVersion, System.Enum.toStringFn(LunaControllerFNAF.PlayableVersion));}}]}; }, $n);
    /*LunaControllerFNAF end.*/

    /*LunaControllerFNAF+PlayableVersion start.*/
    $m("LunaControllerFNAF.PlayableVersion", function () { return {"td":LunaControllerFNAF,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Ver1_3Taps","is":true,"t":4,"rt":LunaControllerFNAF.PlayableVersion,"sn":"Ver1_3Taps","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.PlayableVersion, System.Enum.toStringFn(LunaControllerFNAF.PlayableVersion));}},{"a":2,"n":"Ver2_StoreAtTap2","is":true,"t":4,"rt":LunaControllerFNAF.PlayableVersion,"sn":"Ver2_StoreAtTap2","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.PlayableVersion, System.Enum.toStringFn(LunaControllerFNAF.PlayableVersion));}}]}; }, $n);
    /*LunaControllerFNAF+PlayableVersion end.*/

    /*LunaControllerFNAF+Hero start.*/
    $m("LunaControllerFNAF.Hero", function () { return {"td":LunaControllerFNAF,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Bonnie","is":true,"t":4,"rt":LunaControllerFNAF.Hero,"sn":"Bonnie","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.Hero, System.Enum.toStringFn(LunaControllerFNAF.Hero));}},{"a":2,"n":"Chica","is":true,"t":4,"rt":LunaControllerFNAF.Hero,"sn":"Chica","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.Hero, System.Enum.toStringFn(LunaControllerFNAF.Hero));}},{"a":2,"n":"Foxy","is":true,"t":4,"rt":LunaControllerFNAF.Hero,"sn":"Foxy","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.Hero, System.Enum.toStringFn(LunaControllerFNAF.Hero));}},{"a":2,"n":"Freddy","is":true,"t":4,"rt":LunaControllerFNAF.Hero,"sn":"Freddy","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.Hero, System.Enum.toStringFn(LunaControllerFNAF.Hero));}},{"a":2,"n":"Mangle","is":true,"t":4,"rt":LunaControllerFNAF.Hero,"sn":"Mangle","box":function ($v) { return Bridge.box($v, LunaControllerFNAF.Hero, System.Enum.toStringFn(LunaControllerFNAF.Hero));}}]}; }, $n);
    /*LunaControllerFNAF+Hero end.*/

    /*HeroSkin start.*/
    $m("HeroSkin", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"body","t":4,"rt":$n[1].Sprite,"sn":"body"},{"a":2,"n":"footLeft","t":4,"rt":$n[1].Sprite,"sn":"footLeft"},{"a":2,"n":"footLeftPivot","t":4,"rt":$n[1].Vector2,"sn":"footLeftPivot"},{"a":2,"n":"footRight","t":4,"rt":$n[1].Sprite,"sn":"footRight"},{"a":2,"n":"footRightPivot","t":4,"rt":$n[1].Vector2,"sn":"footRightPivot"},{"a":2,"n":"handLeft","t":4,"rt":$n[1].Sprite,"sn":"handLeft"},{"a":2,"n":"handLeftPivot","t":4,"rt":$n[1].Vector2,"sn":"handLeftPivot"},{"a":2,"n":"handRight","t":4,"rt":$n[1].Sprite,"sn":"handRight"},{"a":2,"n":"handRightPivot","t":4,"rt":$n[1].Vector2,"sn":"handRightPivot"},{"a":2,"n":"head","t":4,"rt":$n[1].Sprite,"sn":"head"},{"a":2,"n":"headPivot","t":4,"rt":$n[1].Vector2,"sn":"headPivot"},{"a":2,"n":"label","t":4,"rt":$n[0].String,"sn":"label"},{"a":2,"n":"portrait","t":4,"rt":$n[1].Sprite,"sn":"portrait"}]}; }, $n);
    /*HeroSkin end.*/

    /*HeroSkins start.*/
    $m("HeroSkins", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Apply","t":8,"pi":[{"n":"actor","pt":RagdollActor,"ps":0},{"n":"id","pt":$n[0].Int32,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[RagdollActor,$n[0].Int32]},{"a":1,"n":"SetBody","t":8,"pi":[{"n":"r","pt":$n[1].SpriteRenderer,"ps":0},{"n":"sp","pt":$n[1].Sprite,"ps":1}],"sn":"SetBody","rt":$n[0].Void,"p":[$n[1].SpriteRenderer,$n[1].Sprite]},{"a":1,"n":"SetHead","t":8,"pi":[{"n":"r","pt":$n[1].SpriteRenderer,"ps":0},{"n":"sp","pt":$n[1].Sprite,"ps":1},{"n":"pivot","pt":$n[1].Vector2,"ps":2}],"sn":"SetHead","rt":$n[0].Void,"p":[$n[1].SpriteRenderer,$n[1].Sprite,$n[1].Vector2]},{"a":1,"n":"SetLimb","t":8,"pi":[{"n":"r","pt":$n[1].SpriteRenderer,"ps":0},{"n":"sp","pt":$n[1].Sprite,"ps":1},{"n":"pivot","pt":$n[1].Vector2,"ps":2}],"sn":"SetLimb","rt":$n[0].Void,"p":[$n[1].SpriteRenderer,$n[1].Sprite,$n[1].Vector2]},{"a":1,"n":"SpriteSize","is":true,"t":8,"pi":[{"n":"sp","pt":$n[1].Sprite,"ps":0}],"sn":"SpriteSize","rt":$n[1].Vector2,"p":[$n[1].Sprite]},{"a":2,"n":"bodySize","t":4,"rt":$n[1].Vector2,"sn":"bodySize"},{"a":2,"n":"headPixel","t":4,"rt":$n[0].Single,"sn":"headPixel","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"limbPixel","t":4,"rt":$n[1].Vector2,"sn":"limbPixel"},{"a":2,"n":"neckLocal","t":4,"rt":$n[1].Vector2,"sn":"neckLocal"},{"a":2,"n":"skins","t":4,"rt":System.Array.type(HeroSkin),"sn":"skins"}]}; }, $n);
    /*HeroSkins end.*/

    /*LunaController start.*/
    $m("LunaController", function () { return {"nested":[LunaController.PlayableVersion,LunaController.Hero],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Background Music", 1, null)],"a":2,"n":"backgroundMusic","t":4,"rt":$n[1].AudioClip,"sn":"backgroundMusic"},{"a":2,"n":"flow","t":4,"rt":PlayableFlowController,"sn":"flow"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Hero Shot 1", 4, null, false, null)],"a":2,"n":"heroShot1","t":4,"rt":LunaController.Hero,"sn":"heroShot1","box":function ($v) { return Bridge.box($v, LunaController.Hero, System.Enum.toStringFn(LunaController.Hero));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Hero Shot 2", 5, null, false, null)],"a":2,"n":"heroShot2","t":4,"rt":LunaController.Hero,"sn":"heroShot2","box":function ($v) { return Bridge.box($v, LunaController.Hero, System.Enum.toStringFn(LunaController.Hero));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Hero Shot 3", 6, null, false, null)],"a":2,"n":"heroShot3","t":4,"rt":LunaController.Hero,"sn":"heroShot3","box":function ($v) { return Bridge.box($v, LunaController.Hero, System.Enum.toStringFn(LunaController.Hero));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Hero Shot 4", 7, null, false, null)],"a":2,"n":"heroShot4","t":4,"rt":LunaController.Hero,"sn":"heroShot4","box":function ($v) { return Bridge.box($v, LunaController.Hero, System.Enum.toStringFn(LunaController.Hero));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Music Enabled", 2, null, false, null)],"a":2,"n":"musicEnabled","t":4,"rt":$n[0].Boolean,"sn":"musicEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Music Volume", 3, null, false, null),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"musicVolume","t":4,"rt":$n[0].Single,"sn":"musicVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Playable Version", 0, null, false, null)],"a":2,"n":"version","t":4,"rt":LunaController.PlayableVersion,"sn":"version","box":function ($v) { return Bridge.box($v, LunaController.PlayableVersion, System.Enum.toStringFn(LunaController.PlayableVersion));}}]}; }, $n);
    /*LunaController end.*/

    /*LunaController+PlayableVersion start.*/
    $m("LunaController.PlayableVersion", function () { return {"td":LunaController,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Ver1_3Taps","is":true,"t":4,"rt":LunaController.PlayableVersion,"sn":"Ver1_3Taps","box":function ($v) { return Bridge.box($v, LunaController.PlayableVersion, System.Enum.toStringFn(LunaController.PlayableVersion));}},{"a":2,"n":"Ver2_StoreAtTap2","is":true,"t":4,"rt":LunaController.PlayableVersion,"sn":"Ver2_StoreAtTap2","box":function ($v) { return Bridge.box($v, LunaController.PlayableVersion, System.Enum.toStringFn(LunaController.PlayableVersion));}}]}; }, $n);
    /*LunaController+PlayableVersion end.*/

    /*LunaController+Hero start.*/
    $m("LunaController.Hero", function () { return {"td":LunaController,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BlackHair","is":true,"t":4,"rt":LunaController.Hero,"sn":"BlackHair","box":function ($v) { return Bridge.box($v, LunaController.Hero, System.Enum.toStringFn(LunaController.Hero));}},{"a":2,"n":"BlueHair","is":true,"t":4,"rt":LunaController.Hero,"sn":"BlueHair","box":function ($v) { return Bridge.box($v, LunaController.Hero, System.Enum.toStringFn(LunaController.Hero));}},{"a":2,"n":"Player416","is":true,"t":4,"rt":LunaController.Hero,"sn":"Player416","box":function ($v) { return Bridge.box($v, LunaController.Hero, System.Enum.toStringFn(LunaController.Hero));}},{"a":2,"n":"RedHair","is":true,"t":4,"rt":LunaController.Hero,"sn":"RedHair","box":function ($v) { return Bridge.box($v, LunaController.Hero, System.Enum.toStringFn(LunaController.Hero));}},{"a":2,"n":"Rumi","is":true,"t":4,"rt":LunaController.Hero,"sn":"Rumi","box":function ($v) { return Bridge.box($v, LunaController.Hero, System.Enum.toStringFn(LunaController.Hero));}},{"a":2,"n":"TOP","is":true,"t":4,"rt":LunaController.Hero,"sn":"TOP","box":function ($v) { return Bridge.box($v, LunaController.Hero, System.Enum.toStringFn(LunaController.Hero));}}]}; }, $n);
    /*LunaController+Hero end.*/

    /*PlayableCameraController start.*/
    $m("PlayableCameraController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AimCenter","t":8,"sn":"AimCenter","rt":$n[1].Vector2},{"a":1,"n":"AimFrame","t":8,"sn":"AimFrame","rt":$n[1].Vector2},{"a":1,"n":"AimMax","t":8,"sn":"AimMax","rt":$n[1].Vector2},{"a":1,"n":"AimMin","t":8,"sn":"AimMin","rt":$n[1].Vector2},{"a":1,"n":"FitView","t":8,"sn":"FitView","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"OnPreCull","t":8,"sn":"OnPreCull","rt":$n[0].Void},{"a":2,"n":"PanTo","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0}],"sn":"PanTo","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":2,"n":"SetAim","t":8,"pi":[{"n":"on","pt":$n[0].Boolean,"ps":0}],"sn":"SetAim","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"IsAiming","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsAiming","t":8,"rt":$n[0].Boolean,"fg":"IsAiming","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsAiming"},{"a":2,"n":"IsPanning","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsPanning","t":8,"rt":$n[0].Boolean,"fg":"IsPanning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsPanning"},{"a":1,"n":"aimBlend","t":4,"rt":$n[0].Single,"sn":"aimBlend","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"aimFocus","t":4,"rt":$n[1].Vector2,"sn":"aimFocus"},{"a":2,"n":"aimFocusMargin","t":4,"rt":$n[1].Vector2,"sn":"aimFocusMargin"},{"a":2,"n":"aimFrame","t":4,"rt":$n[1].Vector2,"sn":"aimFrame"},{"a":2,"n":"aimPosition","t":4,"rt":$n[1].Vector3,"sn":"aimPosition"},{"a":2,"n":"aimRoomMax","t":4,"rt":$n[1].Vector2,"sn":"aimRoomMax"},{"at":[new UnityEngine.HeaderAttribute("Aim (khi k\u00e9o d\u00e2y n\u00e1)")],"a":2,"n":"aimRoomMin","t":4,"rt":$n[1].Vector2,"sn":"aimRoomMin"},{"a":2,"n":"aimZoomInTime","t":4,"rt":$n[0].Single,"sn":"aimZoomInTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"aimZoomOutTime","t":4,"rt":$n[0].Single,"sn":"aimZoomOutTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"aiming","t":4,"rt":$n[0].Boolean,"sn":"aiming","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"destination","t":4,"rt":$n[1].Vector3,"sn":"destination"},{"a":1,"n":"elapsed","t":4,"rt":$n[0].Single,"sn":"elapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"followTarget","t":4,"rt":$n[1].Transform,"sn":"followTarget"},{"a":2,"n":"mapFrame","t":4,"rt":$n[1].Vector2,"sn":"mapFrame"},{"a":2,"n":"mapPosition","t":4,"rt":$n[1].Vector3,"sn":"mapPosition"},{"a":2,"n":"onAfterMove","t":4,"rt":Function,"sn":"onAfterMove"},{"a":2,"n":"panDuration","t":4,"rt":$n[0].Single,"sn":"panDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"panning","t":4,"rt":$n[0].Boolean,"sn":"panning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"slingFrame","t":4,"rt":$n[1].Vector2,"sn":"slingFrame"},{"a":2,"n":"slingPosition","t":4,"rt":$n[1].Vector3,"sn":"slingPosition"},{"a":1,"n":"start","t":4,"rt":$n[1].Vector3,"sn":"start"},{"at":[new UnityEngine.RangeAttribute(0.0, 0.5)],"a":2,"n":"uiVerticalReserve","t":4,"rt":$n[0].Single,"sn":"uiVerticalReserve","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"view","t":4,"rt":$n[1].Camera,"sn":"view"}]}; }, $n);
    /*PlayableCameraController end.*/

    /*PlayableFlowController start.*/
    $m("PlayableFlowController", function () { return {"nested":[PlayableFlowController.Phase],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BeginDrag","t":8,"pi":[{"n":"world","pt":$n[1].Vector2,"ps":0}],"sn":"BeginDrag","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"BeginDragScreen","t":8,"pi":[{"n":"screen","pt":$n[1].Vector2,"ps":0}],"sn":"BeginDragScreen","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"BeginInput","t":8,"sn":"BeginInput","rt":$n[0].Void},{"a":1,"n":"CancelDrag","t":8,"sn":"CancelDrag","rt":$n[0].Void},{"a":2,"n":"Drag","t":8,"pi":[{"n":"world","pt":$n[1].Vector2,"ps":0}],"sn":"Drag","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"DragScreen","t":8,"pi":[{"n":"screen","pt":$n[1].Vector2,"ps":0}],"sn":"DragScreen","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"HeroId","t":8,"pi":[{"n":"shot","pt":$n[0].Int32,"ps":0}],"sn":"HeroId","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"HeroName","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"HeroName","rt":$n[0].String,"p":[$n[0].Int32]},{"a":1,"n":"InSelect","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"InSelect","rt":$n[0].Boolean,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LoadActor","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"LoadActor","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"NextShot","t":8,"sn":"NextShot","rt":$n[0].Void},{"a":1,"n":"OnApplicationFocus","t":8,"pi":[{"n":"focus","pt":$n[0].Boolean,"ps":0}],"sn":"OnApplicationFocus","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"OpenStore","t":8,"sn":"OpenStore","rt":$n[0].Void},{"a":1,"n":"PlaceHandAtScreen","t":8,"pi":[{"n":"screen","pt":$n[1].Vector2,"ps":0}],"sn":"PlaceHandAtScreen","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":2,"n":"PlayImpact","t":8,"sn":"PlayImpact","rt":$n[0].Void},{"a":2,"n":"PlayKnock","t":8,"sn":"PlayKnock","rt":$n[0].Void},{"a":1,"n":"PlaySfx","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0},{"n":"volume","pt":$n[0].Single,"ps":1}],"sn":"PlaySfx","rt":$n[0].Void,"p":[$n[1].AudioClip,$n[0].Single]},{"a":1,"n":"PointerDown","t":8,"pi":[{"n":"p","pt":$n[1].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"ReadInput","t":8,"sn":"ReadInput","rt":$n[0].Void},{"a":2,"n":"ReleaseShot","t":8,"sn":"ReleaseShot","rt":$n[0].Void},{"a":1,"n":"SetDots","t":8,"pi":[{"n":"on","pt":$n[0].Boolean,"ps":0}],"sn":"SetDots","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"ShowEndCard","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"ShowEndCard","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"ShowHeroSelect","t":8,"sn":"ShowHeroSelect","rt":$n[0].Void},{"a":2,"n":"SpawnTap","t":8,"sn":"SpawnTap","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartDragging","t":8,"pi":[{"n":"world","pt":$n[1].Vector2,"ps":0}],"sn":"StartDragging","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"StartMusic","t":8,"sn":"StartMusic","rt":$n[0].Void},{"a":1,"n":"TrySelect","t":8,"pi":[{"n":"screen","pt":$n[1].Vector2,"ps":0}],"sn":"TrySelect","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateBands","t":8,"pi":[{"n":"point","pt":$n[1].Vector2,"ps":0}],"sn":"UpdateBands","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"UpdateHandReady","t":8,"sn":"UpdateHandReady","rt":$n[0].Void},{"a":1,"n":"UpdateTrajectory","t":8,"pi":[{"n":"velocity","pt":$n[1].Vector2,"ps":0}],"sn":"UpdateTrajectory","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"UpdateUI","t":8,"sn":"UpdateUI","rt":$n[0].Void},{"a":1,"n":"WasShot","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"WasShot","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"World","t":8,"pi":[{"n":"p","pt":$n[1].Vector2,"ps":0}],"sn":"World","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"CanGrab","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_CanGrab","t":8,"rt":$n[0].Boolean,"fg":"CanGrab","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"CanGrab"},{"a":1,"n":"ShotCount","t":16,"rt":$n[0].Int32,"g":{"a":1,"n":"get_ShotCount","t":8,"rt":$n[0].Int32,"fg":"ShotCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"ShotCount"},{"a":2,"n":"actorLabel","t":4,"rt":$n[2].Text,"sn":"actorLabel"},{"a":2,"n":"actors","t":4,"rt":System.Array.type(RagdollActor),"sn":"actors"},{"a":2,"n":"anchor","t":4,"rt":$n[1].Vector2,"sn":"anchor"},{"a":2,"n":"audioSource","t":4,"rt":$n[1].AudioSource,"sn":"audioSource"},{"a":2,"n":"bgm","t":4,"rt":$n[1].AudioClip,"sn":"bgm"},{"a":2,"n":"cameraRig","t":4,"rt":PlayableCameraController,"sn":"cameraRig"},{"a":2,"n":"ctaButton","t":4,"rt":$n[1].RectTransform,"sn":"ctaButton"},{"a":2,"n":"ctaSound","t":4,"rt":$n[1].AudioClip,"sn":"ctaSound"},{"a":1,"n":"current","t":4,"rt":RagdollActor,"sn":"current"},{"a":1,"n":"dotBaseScale","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"dotBaseScale"},{"a":2,"n":"dotSizeEnd","t":4,"rt":$n[0].Single,"sn":"dotSizeEnd","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dotSizeStart","t":4,"rt":$n[0].Single,"sn":"dotSizeStart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"endCardPortrait","t":4,"rt":$n[2].Image,"sn":"endCardPortrait"},{"a":2,"n":"endCardRoot","t":4,"rt":$n[1].GameObject,"sn":"endCardRoot"},{"a":2,"n":"endCardTitle","t":4,"rt":$n[2].Text,"sn":"endCardTitle"},{"a":1,"n":"flightTime","t":4,"rt":$n[0].Single,"sn":"flightTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"flySound","t":4,"rt":$n[1].AudioClip,"sn":"flySound"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"flyVolume","t":4,"rt":$n[0].Single,"sn":"flyVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"frameHighlight","t":4,"rt":$n[1].Sprite,"sn":"frameHighlight"},{"a":2,"n":"frameNormal","t":4,"rt":$n[1].Sprite,"sn":"frameNormal"},{"a":1,"n":"gameEnded","t":4,"rt":$n[0].Boolean,"sn":"gameEnded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"grabOffset","t":4,"rt":$n[1].Vector2,"sn":"grabOffset"},{"a":2,"n":"grabRadius","t":4,"rt":$n[0].Single,"sn":"grabRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"grabScreen","t":4,"rt":$n[1].Vector2,"sn":"grabScreen"},{"a":2,"n":"grabSound","t":4,"rt":$n[1].AudioClip,"sn":"grabSound"},{"a":1,"n":"grabUnitsPerPixel","t":4,"rt":$n[0].Single,"sn":"grabUnitsPerPixel","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"handAlpha","t":4,"rt":$n[1].CanvasGroup,"sn":"handAlpha"},{"a":2,"n":"handGuide","t":4,"rt":$n[1].RectTransform,"sn":"handGuide"},{"a":2,"n":"handTargetButton","t":4,"rt":$n[0].Int32,"sn":"handTargetButton","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"handTimer","t":4,"rt":$n[0].Single,"sn":"handTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"heroOrder","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"heroOrder"},{"at":[new UnityEngine.HeaderAttribute("Heroes")],"a":2,"n":"heroSkins","t":4,"rt":HeroSkins,"sn":"heroSkins"},{"a":2,"n":"hitReturnTime","t":4,"rt":$n[0].Single,"sn":"hitReturnTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"hitTime","t":4,"rt":$n[0].Single,"sn":"hitTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ignoreNearPull","t":4,"rt":$n[0].Single,"sn":"ignoreNearPull","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"impactSound","t":4,"rt":$n[1].AudioClip,"sn":"impactSound"},{"a":2,"n":"impactSounds","t":4,"rt":System.Array.type(UnityEngine.AudioClip),"sn":"impactSounds"},{"a":2,"n":"installCallCount","t":4,"rt":$n[0].Int32,"sn":"installCallCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"introHold","t":4,"rt":$n[0].Single,"sn":"introHold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"introText","t":4,"rt":$n[0].String,"sn":"introText"},{"a":2,"n":"knockSound","t":4,"rt":$n[1].AudioClip,"sn":"knockSound"},{"a":1,"n":"lastImpactSound","t":4,"rt":$n[0].Single,"sn":"lastImpactSound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"launchScale","t":4,"rt":$n[0].Single,"sn":"launchScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"launchSound","t":4,"rt":$n[1].AudioClip,"sn":"launchSound"},{"a":2,"n":"leftBand","t":4,"rt":$n[1].LineRenderer,"sn":"leftBand"},{"a":2,"n":"leftBandTip","t":4,"rt":$n[1].Vector3,"sn":"leftBandTip"},{"a":2,"n":"maxFlightTime","t":4,"rt":$n[0].Single,"sn":"maxFlightTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxPull","t":4,"rt":$n[0].Single,"sn":"maxPull","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"minHitTime","t":4,"rt":$n[0].Single,"sn":"minHitTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"musicSource","t":4,"rt":$n[1].AudioSource,"sn":"musicSource"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"musicVolume","t":4,"rt":$n[0].Single,"sn":"musicVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"phase","t":4,"rt":PlayableFlowController.Phase,"sn":"phase","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}},{"at":[new UnityEngine.RangeAttribute(1.0, 2.0)],"a":2,"n":"playableVersion","t":4,"rt":$n[0].Int32,"sn":"playableVersion","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"pointerId","t":4,"rt":$n[0].Int32,"sn":"pointerId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"prompt","t":4,"rt":$n[2].Text,"sn":"prompt"},{"a":1,"n":"pull","t":4,"rt":$n[1].Vector2,"sn":"pull"},{"a":2,"n":"resultHold","t":4,"rt":$n[0].Single,"sn":"resultHold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rightBand","t":4,"rt":$n[1].LineRenderer,"sn":"rightBand"},{"a":2,"n":"rightBandTip","t":4,"rt":$n[1].Vector3,"sn":"rightBandTip"},{"a":2,"n":"selectButtons","t":4,"rt":System.Array.type(UnityEngine.RectTransform),"sn":"selectButtons"},{"a":2,"n":"selectFrames","t":4,"rt":System.Array.type(UnityEngine.UI.Image),"sn":"selectFrames"},{"a":1,"n":"selectIds","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"selectIds"},{"a":2,"n":"selectNames","t":4,"rt":System.Array.type(UnityEngine.UI.Text),"sn":"selectNames"},{"a":2,"n":"selectPortraits","t":4,"rt":System.Array.type(UnityEngine.UI.Image),"sn":"selectPortraits"},{"at":[new UnityEngine.HeaderAttribute("Hero select + End card")],"a":2,"n":"selectRoot","t":4,"rt":$n[1].GameObject,"sn":"selectRoot"},{"a":1,"n":"settledTime","t":4,"rt":$n[0].Single,"sn":"settledTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"shotIndex","t":4,"rt":$n[0].Int32,"sn":"shotIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"spawnSound","t":4,"rt":$n[1].AudioClip,"sn":"spawnSound"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"spawnVolume","t":4,"rt":$n[0].Single,"sn":"spawnVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"started","t":4,"rt":$n[0].Boolean,"sn":"started","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"storeOpened","t":4,"rt":$n[0].Boolean,"sn":"storeOpened","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"tapCount","t":4,"rt":$n[0].Int32,"sn":"tapCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"timer","t":4,"rt":$n[0].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"trajectoryDots","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"trajectoryDots"},{"a":2,"n":"trajectoryTime","t":4,"rt":$n[0].Single,"sn":"trajectoryTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"uiCamera","t":4,"rt":$n[1].Camera,"sn":"uiCamera"},{"a":2,"n":"versionLabel","t":4,"rt":$n[2].Text,"sn":"versionLabel"},{"a":1,"n":"view","t":4,"rt":$n[1].Camera,"sn":"view"}]}; }, $n);
    /*PlayableFlowController end.*/

    /*PlayableFlowController+Phase start.*/
    $m("PlayableFlowController.Phase", function () { return {"td":PlayableFlowController,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AwaitSpawnTap","is":true,"t":4,"rt":PlayableFlowController.Phase,"sn":"AwaitSpawnTap","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}},{"a":2,"n":"Dragging","is":true,"t":4,"rt":PlayableFlowController.Phase,"sn":"Dragging","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}},{"a":2,"n":"EndCard","is":true,"t":4,"rt":PlayableFlowController.Phase,"sn":"EndCard","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}},{"a":2,"n":"Flying","is":true,"t":4,"rt":PlayableFlowController.Phase,"sn":"Flying","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}},{"a":2,"n":"IntroMap","is":true,"t":4,"rt":PlayableFlowController.Phase,"sn":"IntroMap","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}},{"a":2,"n":"PanToSling","is":true,"t":4,"rt":PlayableFlowController.Phase,"sn":"PanToSling","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}},{"a":2,"n":"Ready","is":true,"t":4,"rt":PlayableFlowController.Phase,"sn":"Ready","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}},{"a":2,"n":"ResultDelay","is":true,"t":4,"rt":PlayableFlowController.Phase,"sn":"ResultDelay","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}},{"a":2,"n":"ReturnToSling","is":true,"t":4,"rt":PlayableFlowController.Phase,"sn":"ReturnToSling","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}},{"a":2,"n":"SelectHero","is":true,"t":4,"rt":PlayableFlowController.Phase,"sn":"SelectHero","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}},{"a":2,"n":"Store","is":true,"t":4,"rt":PlayableFlowController.Phase,"sn":"Store","box":function ($v) { return Bridge.box($v, PlayableFlowController.Phase, System.Enum.toStringFn(PlayableFlowController.Phase));}}]}; }, $n);
    /*PlayableFlowController+Phase end.*/

    /*RagdollActor start.*/
    $m("RagdollActor", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AdvanceFlightVisuals","t":8,"pi":[{"n":"dt","pt":$n[0].Single,"ps":0}],"sn":"AdvanceFlightVisuals","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BeginFlightVisuals","t":8,"sn":"BeginFlightVisuals","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"Freeze","t":8,"sn":"Freeze","rt":$n[0].Void},{"a":2,"n":"FreezeWhenSettled","t":8,"sn":"FreezeWhenSettled","rt":$n[0].Void},{"a":1,"n":"IgnoreSelfCollision","t":8,"sn":"IgnoreSelfCollision","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"a":2,"n":"IsSettled","t":8,"sn":"IsSettled","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Launch","t":8,"pi":[{"n":"velocity","pt":$n[1].Vector2,"ps":0}],"sn":"Launch","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":2,"n":"LoadAt","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"LoadAt","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":2,"n":"ReactToHit","t":8,"pi":[{"n":"velocity","pt":$n[1].Vector2,"ps":0}],"sn":"ReactToHit","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":2,"n":"SetCollidersEnabled","t":8,"pi":[{"n":"on","pt":$n[0].Boolean,"ps":0}],"sn":"SetCollidersEnabled","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetDragging","t":8,"pi":[{"n":"dragging","pt":$n[0].Boolean,"ps":0}],"sn":"SetDragging","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"SyncBodies","t":8,"sn":"SyncBodies","rt":$n[0].Void},{"a":2,"n":"bodies","t":4,"rt":System.Array.type(UnityEngine.Rigidbody2D),"sn":"bodies"},{"a":1,"n":"flightAngles","t":4,"rt":$n[0].Array.type(System.Single),"sn":"flightAngles"},{"a":1,"n":"flightAngularSpeeds","t":4,"rt":$n[0].Array.type(System.Single),"sn":"flightAngularSpeeds"},{"a":1,"n":"flightPivots","t":4,"rt":System.Array.type(UnityEngine.Vector2),"sn":"flightPivots"},{"a":1,"n":"flightVisualPositions","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"flightVisualPositions"},{"a":1,"n":"flightVisualRotations","t":4,"rt":System.Array.type(UnityEngine.Quaternion),"sn":"flightVisualRotations"},{"a":1,"n":"flightVisualTime","t":4,"rt":$n[0].Single,"sn":"flightVisualTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"flightVisuals","t":4,"rt":$n[0].Boolean,"sn":"flightVisuals","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"hasCollided","t":4,"rt":$n[0].Boolean,"sn":"hasCollided","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"initialized","t":4,"rt":$n[0].Boolean,"sn":"initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"knockedDown","t":4,"rt":$n[0].Boolean,"sn":"knockedDown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"launchTime","t":4,"rt":$n[0].Single,"sn":"launchTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"localPositions","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"localPositions"},{"a":1,"n":"localRotations","t":4,"rt":System.Array.type(UnityEngine.Quaternion),"sn":"localRotations"},{"a":1,"n":"orders","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"orders"},{"a":1,"n":"ownColliders","t":4,"rt":System.Array.type(UnityEngine.Collider2D),"sn":"ownColliders"},{"a":1,"n":"pendingFreeze","t":4,"rt":$n[0].Boolean,"sn":"pendingFreeze","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"reactiveTarget","t":4,"rt":$n[0].Boolean,"sn":"reactiveTarget","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"renderers","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"renderers"},{"a":1,"n":"restTime","t":4,"rt":$n[0].Single,"sn":"restTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"torso","t":4,"rt":$n[1].Rigidbody2D,"sn":"torso"}]}; }, $n);
    /*RagdollActor end.*/

    /*RagdollImpact start.*/
    $m("RagdollImpact", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"hit","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"OnCollisionStay2D","t":8,"pi":[{"n":"hit","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionStay2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":2,"n":"actor","t":4,"rt":RagdollActor,"sn":"actor"},{"a":2,"n":"flow","t":4,"rt":PlayableFlowController,"sn":"flow"},{"a":1,"n":"lastSound","t":4,"rt":$n[0].Single,"sn":"lastSound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"launchGrace","is":true,"t":4,"rt":$n[0].Single,"sn":"launchGrace","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RagdollImpact end.*/

    /*TextOutline start.*/
    $m("TextOutline", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.UI.Text)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"Sync","t":8,"pi":[{"n":"force","pt":$n[0].Boolean,"ps":0}],"sn":"Sync","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"baseAlpha","t":4,"rt":$n[0].Array.type(System.Single),"sn":"baseAlpha"},{"a":2,"n":"copies","t":4,"rt":System.Array.type(UnityEngine.UI.Text),"sn":"copies"},{"a":1,"n":"lastAlpha","t":4,"rt":$n[0].Single,"sn":"lastAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lastEnabled","t":4,"rt":$n[0].Boolean,"sn":"lastEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastText","t":4,"rt":$n[0].String,"sn":"lastText"},{"a":2,"n":"outlineColor","t":4,"rt":$n[1].Color,"sn":"outlineColor"},{"a":2,"n":"shadowColor","t":4,"rt":$n[1].Color,"sn":"shadowColor"},{"a":2,"n":"shadowOffset","t":4,"rt":$n[1].Vector2,"sn":"shadowOffset"},{"a":1,"n":"source","t":4,"rt":$n[2].Text,"sn":"source"},{"a":2,"n":"thickness","t":4,"rt":$n[0].Single,"sn":"thickness","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TextOutline end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});

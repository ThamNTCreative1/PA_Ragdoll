if ( TRACE ) { TRACE( JSON.parse( '["LunaController#init","LunaController#Awake","LunaController#Start","LunaController#ApplyCharacter","LunaController#ClickCTA","LunaController#EndGame","MelonAd.Acid#init","MelonAd.Acid#OnTriggerEnter2D","MelonAd.Acid#OnTriggerExit2D","MelonAd.Acid#Update","MelonAd.Acid#ResetState","MelonAd.AudioManager#init","MelonAd.AudioManager#Awake","MelonAd.AudioManager#Play","MelonAd.AudioManager#PlayOverlap","MelonAd.AudioManager#PlayIfIdle","MelonAd.AudioManager#IsPlaying","MelonAd.AudioManager#Stop","MelonAd.Bullet#init","MelonAd.Bullet#Launch","MelonAd.Bullet#Update","MelonAd.Bullet#OnCollisionEnter2D","MelonAd.CameraFit#init","MelonAd.CameraFit#OnEnable","MelonAd.CameraFit#LateUpdate","MelonAd.CameraFit#Apply","MelonAd.CharacterSelector#Current#get","MelonAd.CharacterSelector#Apply","MelonAd.CtaOverlay#Awake","MelonAd.CtaOverlay#Show","MelonAd.CtaOverlay#Hide","MelonAd.CtaOverlay#OnClick","MelonAd.FlameParticle#init","MelonAd.FlameParticle#Launch","MelonAd.FlameParticle#Update","MelonAd.FlameParticle#Apply","MelonAd.FlameThrower#init","MelonAd.FlameThrower#Start","MelonAd.FlameThrower#Update","MelonAd.FlameThrower#Emit","MelonAd.FlameThrower#ResetState","MelonAd.FxManager#SetAlpha","MelonAd.FxManager#RandOffset","MelonAd.FxManager#init","MelonAd.FxManager#Awake","MelonAd.FxManager#Create","MelonAd.FxManager#Take","MelonAd.FxManager#BurnPuff","MelonAd.FxManager#Debris","MelonAd.FxManager#Blood","MelonAd.FxManager#Bubble","MelonAd.FxManager#ClearAll","MelonAd.FxManager#Update","MelonAd.GameConfig#init","MelonAd.GameConfig#Awake","MelonAd.GameManager#IsDragging#get","MelonAd.GameManager#init","MelonAd.GameManager#Awake","MelonAd.GameManager#Start","MelonAd.GameManager#TutorialOn","MelonAd.GameManager#BeginRound","MelonAd.GameManager#WorldScale","MelonAd.GameManager#Update","MelonAd.GameManager#FixedUpdate","MelonAd.GameManager#ScreenToWorld","MelonAd.GameManager#OnPointerDown","MelonAd.GameManager#StartDrag","MelonAd.GameManager#RemovePin","MelonAd.GameManager#UpdateTutorial","MelonAd.GameManager#SetDragFingerAlpha","MelonAd.GameManager#HideFingers","MelonAd.GameManager#OnManDied","MelonAd.GameManager#ShowFailLater","MelonAd.GameManager#OnFailButton","MelonAd.GameManager#OnExitReached","MelonAd.GameManager#ConfirmWin","MelonAd.GameManager#DoWin","MelonAd.GameManager#ShowWinLater","MelonAd.GameManager#OnTimeUp","MelonAd.GameManager#ZoomToExit","MelonAd.Grabbable#CanGrab","MelonAd.LevelRefs#init","MelonAd.LevelRefs#Init","MelonAd.LevelRefs#Capture","MelonAd.LevelRefs#ResetLevel","MelonAd.LevelRefs.TState#init","MelonAd.LunaBridge#GameEnded","MelonAd.LunaBridge#InstallFullGame","MelonAd.LunaBridge#Event","MelonAd.MonsterPit#WaveArms","MelonAd.MonsterPit#Grab","MelonAd.MonsterPit#Hide","MelonAd.MonsterPit#init","MelonAd.MonsterPit#Awake","MelonAd.MonsterPit#Update","MelonAd.MonsterPit#Eat","MelonAd.MonsterPit#Closest","MelonAd.MonsterPit#Mouth","MelonAd.MonsterPit#EatRoutine","MelonAd.MonsterPit#Pull","MelonAd.MonsterPit#ResetState","MelonAd.MonsterPit.Mon#init","MelonAd.Pin#init","MelonAd.Pin#Remove","MelonAd.Pin#Fly","MelonAd.Pin#ResetState","MelonAd.Ragdoll#IsGround","MelonAd.Ragdoll#init","MelonAd.Ragdoll#FixedUpdate","MelonAd.Ragdoll#IsFoot","MelonAd.Ragdoll#OnPartCollisionExit","MelonAd.Ragdoll#Grounded","MelonAd.Ragdoll#InExit","MelonAd.Ragdoll#OnPartTriggerExit","MelonAd.Ragdoll#Update","MelonAd.Ragdoll#OnPartCollision","MelonAd.Ragdoll#Blocked","MelonAd.Ragdoll#OnPartTrigger","MelonAd.Ragdoll#Burn","MelonAd.Ragdoll#Melt","MelonAd.Ragdoll#Eaten","MelonAd.Ragdoll#Shot","MelonAd.Ragdoll#StartHole","MelonAd.Ragdoll#Die","MelonAd.Ragdoll#ResetState","MelonAd.RagdollPart#ShowBurnt","MelonAd.RagdollPart#ShowSkeleton","MelonAd.RagdollPart#OnCollisionEnter2D","MelonAd.RagdollPart#OnCollisionExit2D","MelonAd.RagdollPart#OnTriggerEnter2D","MelonAd.RagdollPart#OnTriggerExit2D","MelonAd.Rifle#init","MelonAd.Rifle#Start","MelonAd.Rifle#OnPinRemoved","MelonAd.Rifle#Update","MelonAd.Rifle#Shoot","MelonAd.Rifle#UpdateFlash","MelonAd.Rifle#Fall","MelonAd.Rifle#ResetState","MelonAd.Spike#Break","MelonAd.Spike#OnCollisionEnter2D","MelonAd.Spike#ResetState","MelonAd.StormFx#init","MelonAd.StormFx#Respawn","MelonAd.StormFx#Scale#get","MelonAd.StormFx#init","MelonAd.StormFx#Awake","MelonAd.StormFx#Start","MelonAd.StormFx#CamRect","MelonAd.StormFx#Begin","MelonAd.StormFx#Stop","MelonAd.StormFx#Update","MelonAd.StormFx#LateFlash","MelonAd.StormFx#InitRain","MelonAd.StormFx#UpdateRain","MelonAd.StormFx#Strike","MelonAd.StormFx#CreateBolt","MelonAd.StormFx#Build","MelonAd.StormFx#SetSegment","MelonAd.StormFx#Place","MelonAd.StormFx#Play","MelonAd.StormFx#Flash","MelonAd.StormFx#FlashRoutine","MelonAd.StormFx#SetFlash","MelonAd.StormFx#CreateSprite","MelonAd.StormFx.Bolt#init","MelonAd.UIController#Wiggle","MelonAd.UIController#IntroActive#get","MelonAd.UIController#init","MelonAd.UIController#Awake","MelonAd.UIController#DismissIntro","MelonAd.UIController#TickIntro","MelonAd.UIController#ApplyIntro","MelonAd.UIController#OnRetryClicked","MelonAd.UIController#OnNextClicked","MelonAd.UIController#ShowHint","MelonAd.UIController#ShowFail","MelonAd.UIController#HideFail","MelonAd.UIController#ShowWin","MelonAd.UIController#HideWin","MelonAd.UIController#Update","MelonAd.UIController#AnimateHead","MelonAd.UIController.Popup#Valid#get","MelonAd.UIController.Popup#init","MelonAd.UIController.Popup#Init","MelonAd.UIController.Popup#Show","MelonAd.UIController.Popup#Hide","MelonAd.UIController.Popup#Tick","MelonAd.UIController.Popup#Apply","MelonAd.UIController.Popup#AnimateButton","MelonAd.UICover#Aspect","MelonAd.UICover#LateUpdate"]' ) ); }
/**
 * @version 1.0.9811.16527
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

    /*LunaController start.*/
    /**
     * Luna Playground entry point. ONE character field (0-5) drives Level_0/ManRoot/CharacterSelector.
     Edit mode: changing Character swaps the character in the scene immediately.
     Runtime: applied in Awake, before GameManager.Start initialises the level (no clones, no double spawn).
     *
     * @public
     * @class LunaController
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("LunaController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            BGTexture: null,
            UseTime: false,
            TimePlay: 0,
            Character: 0,
            characterSelector: null,
            BGImage: null,
            CTA: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LunaController#init", this ); }

                this.TimePlay = 30.0;
                this.Character = 0;
                this.CTA = new (System.Collections.Generic.List$1(UnityEngine.UI.Button)).ctor();
            }
        },
        methods: {
            /*LunaController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LunaController#Awake", this ); }

                this.ApplyCharacter();
            },
            /*LunaController.Awake end.*/

            /*LunaController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LunaController#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.BGImage, null) && this.BGTexture != null) {
                    this.BGImage.texture = this.BGTexture;
                }
                for (var i = 0; i < this.CTA.Count; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.CTA.getItem(i), null)) {
                        this.CTA.getItem(i).onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickCTA));
                    }
                }
                if (this.UseTime && this.TimePlay > 0.0) {
                    this.StartCoroutine$1(this.EndGame());
                }
            },
            /*LunaController.Start end.*/

            /*LunaController.ApplyCharacter start.*/
            ApplyCharacter: function () {
if ( TRACE ) { TRACE( "LunaController#ApplyCharacter", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.characterSelector, null)) {
                    return;
                }
                this.characterSelector.index = Math.max(0, Math.min(this.Character, 5));
            },
            /*LunaController.ApplyCharacter end.*/

            /*LunaController.ClickCTA start.*/
            ClickCTA: function () {
if ( TRACE ) { TRACE( "LunaController#ClickCTA", this ); }

                MelonAd.LunaBridge.InstallFullGame();
            },
            /*LunaController.ClickCTA end.*/

            /*LunaController.EndGame start.*/
            EndGame: function () {
if ( TRACE ) { TRACE( "LunaController#EndGame", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.TimePlay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // no auto redirect: show the invisible CTA, the tap ends the game + opens the store
                                        if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameManager.I, null)) {
                                            MelonAd.GameManager.I.OnTimeUp();
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
            /*LunaController.EndGame end.*/


        }
    });
    /*LunaController end.*/

    /*MelonAd.Acid start.*/
    /** @namespace MelonAd */

    /**
     * Acid pool sensor: hiss sound on enter, bubbles for bodies inside.
     *
     * @public
     * @class MelonAd.Acid
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.Acid", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            inside: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.Acid#init", this ); }

                this.inside = new (System.Collections.Generic.List$1(UnityEngine.Rigidbody2D)).ctor();
            }
        },
        methods: {
            /*MelonAd.Acid.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (c) {
if ( TRACE ) { TRACE( "MelonAd.Acid#OnTriggerEnter2D", this ); }

                var rb = c.attachedRigidbody;
                if (UnityEngine.Component.op_Equality(rb, null)) {
                    return;
                }
                var bullet = UnityEngine.MonoBehaviour.op_Inequality(c.GetComponent(MelonAd.Bullet), null);
                var spike = UnityEngine.MonoBehaviour.op_Inequality(c.GetComponent(MelonAd.Spike), null);
                var flame = UnityEngine.MonoBehaviour.op_Inequality(c.GetComponent(MelonAd.FlameParticle), null);
                if (!bullet && !spike && UnityEngine.MonoBehaviour.op_Inequality(MelonAd.AudioManager.I, null)) {
                    MelonAd.AudioManager.I.PlayIfIdle(MelonAd.Sfx.Kis);
                }
                if (!bullet && !flame && !this.inside.contains(rb)) {
                    this.inside.add(rb);
                }
            },
            /*MelonAd.Acid.OnTriggerEnter2D end.*/

            /*MelonAd.Acid.OnTriggerExit2D start.*/
            OnTriggerExit2D: function (c) {
if ( TRACE ) { TRACE( "MelonAd.Acid#OnTriggerExit2D", this ); }

                var rb = c.attachedRigidbody;
                if (UnityEngine.Component.op_Inequality(rb, null)) {
                    this.inside.remove(rb);
                }
            },
            /*MelonAd.Acid.OnTriggerExit2D end.*/

            /*MelonAd.Acid.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.Acid#Update", this ); }

                for (var i = (this.inside.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var rb = this.inside.getItem(i);
                    if (UnityEngine.Component.op_Equality(rb, null) || !rb.gameObject.activeInHierarchy) {
                        this.inside.removeAt(i);
                        continue;
                    }
                    if (UnityEngine.Random.value < 0.1 && UnityEngine.MonoBehaviour.op_Inequality(MelonAd.FxManager.I, null)) {
                        MelonAd.FxManager.I.Bubble(rb.position);
                    }
                }
            },
            /*MelonAd.Acid.Update end.*/

            /*MelonAd.Acid.ResetState start.*/
            ResetState: function () {
if ( TRACE ) { TRACE( "MelonAd.Acid#ResetState", this ); }

                this.inside.clear();
            },
            /*MelonAd.Acid.ResetState end.*/


        }
    });
    /*MelonAd.Acid end.*/

    /*MelonAd.AudioManager start.*/
    /**
     * One AudioSource per clip, mirrors Howler usage in the original (playing() checks, loops).
     *
     * @public
     * @class MelonAd.AudioManager
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.AudioManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                I: null
            }
        },
        fields: {
            music: null,
            doc: null,
            door: null,
            fire: null,
            flame: null,
            hurt: null,
            jar: null,
            kis: null,
            ohog: null,
            complete: null,
            fail: null,
            thunder: null,
            rain: null,
            rainVolume: 0,
            sources: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.AudioManager#init", this ); }

                this.rainVolume = 0.5;
            }
        },
        methods: {
            /*MelonAd.AudioManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonAd.AudioManager#Awake", this ); }

                MelonAd.AudioManager.I = this;
                var clips = System.Array.init([
                    this.music, 
                    this.doc, 
                    this.door, 
                    this.fire, 
                    this.flame, 
                    this.hurt, 
                    this.jar, 
                    this.kis, 
                    this.ohog, 
                    this.complete, 
                    this.fail, 
                    this.thunder, 
                    this.rain
                ], UnityEngine.AudioClip);
                this.sources = System.Array.init(clips.length, null, UnityEngine.AudioSource);
                for (var i = 0; i < clips.length; i = (i + 1) | 0) {
                    var s = this.gameObject.AddComponent(UnityEngine.AudioSource);
                    s.clip = clips[i];
                    s.playOnAwake = false;
                    s.loop = i === MelonAd.Sfx.Music || i === MelonAd.Sfx.Fire || i === MelonAd.Sfx.Flame || i === MelonAd.Sfx.Rain;
                    if (i === MelonAd.Sfx.Rain) {
                        s.volume = this.rainVolume;
                    }
                    this.sources[i] = s;
                }
            },
            /*MelonAd.AudioManager.Awake end.*/

            /*MelonAd.AudioManager.Play start.*/
            Play: function (s) {
if ( TRACE ) { TRACE( "MelonAd.AudioManager#Play", this ); }

                var a = this.sources[s];
                if (a.clip != null) {
                    a.Play();
                }
            },
            /*MelonAd.AudioManager.Play end.*/

            /*MelonAd.AudioManager.PlayOverlap start.*/
            /**
             * Overlapping instance (Howler play() on an already playing sound).
             *
             * @instance
             * @public
             * @this MelonAd.AudioManager
             * @memberof MelonAd.AudioManager
             * @param   {MelonAd.Sfx}    s
             * @return  {void}
             */
            PlayOverlap: function (s) {
if ( TRACE ) { TRACE( "MelonAd.AudioManager#PlayOverlap", this ); }

                var a = this.sources[s];
                if (a.clip != null) {
                    a.PlayOneShot(a.clip);
                }
            },
            /*MelonAd.AudioManager.PlayOverlap end.*/

            /*MelonAd.AudioManager.PlayIfIdle start.*/
            PlayIfIdle: function (s) {
if ( TRACE ) { TRACE( "MelonAd.AudioManager#PlayIfIdle", this ); }

                if (!this.sources[s].isPlaying) {
                    this.Play(s);
                }
            },
            /*MelonAd.AudioManager.PlayIfIdle end.*/

            /*MelonAd.AudioManager.IsPlaying start.*/
            IsPlaying: function (s) {
if ( TRACE ) { TRACE( "MelonAd.AudioManager#IsPlaying", this ); }

                return this.sources[s].isPlaying;
            },
            /*MelonAd.AudioManager.IsPlaying end.*/

            /*MelonAd.AudioManager.Stop start.*/
            Stop: function (s) {
if ( TRACE ) { TRACE( "MelonAd.AudioManager#Stop", this ); }

                this.sources[s].Stop();
            },
            /*MelonAd.AudioManager.Stop end.*/


        }
    });
    /*MelonAd.AudioManager end.*/

    /*MelonAd.Bullet start.*/
    /**
     * Pooled rifle bullet. Lives 0.75s, dies on first hit (deferred so the other side still gets its callback).
     *
     * @public
     * @class MelonAd.Bullet
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.Bullet", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rb: null,
            life: 0,
            timer: 0,
            hit: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.Bullet#init", this ); }

                this.life = 0.75;
            }
        },
        methods: {
            /*MelonAd.Bullet.Launch start.*/
            Launch: function (pos, vel) {
if ( TRACE ) { TRACE( "MelonAd.Bullet#Launch", this ); }

                this.transform.position = UnityEngine.Vector3.FromVector2(pos.$clone());
                this.transform.rotation = pc.Quat.IDENTITY.clone();
                this.gameObject.SetActive(true);
                this.rb.position = pos.$clone();
                this.rb.rotation = 0.0;
                this.rb.linearVelocity = vel.$clone();
                this.rb.angularVelocity = 0.0;
                this.timer = this.life;
                this.hit = false;
            },
            /*MelonAd.Bullet.Launch end.*/

            /*MelonAd.Bullet.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.Bullet#Update", this ); }

                this.timer -= UnityEngine.Time.deltaTime;
                if (this.hit || this.timer <= 0.0) {
                    this.gameObject.SetActive(false);
                }
            },
            /*MelonAd.Bullet.Update end.*/

            /*MelonAd.Bullet.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (c) {
if ( TRACE ) { TRACE( "MelonAd.Bullet#OnCollisionEnter2D", this ); }

                if (this.hit) {
                    return;
                }
                this.hit = true;
                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.FxManager.I, null)) {
                    MelonAd.FxManager.I.Debris(MelonAd.FxManager.I.bulletShard, UnityEngine.Vector2.FromVector3(this.transform.position), 2);
                }
                var s = c.collider.GetComponent(MelonAd.Spike);
                if (UnityEngine.MonoBehaviour.op_Inequality(s, null)) {
                    s.Break(3);
                }
            },
            /*MelonAd.Bullet.OnCollisionEnter2D end.*/


        }
    });
    /*MelonAd.Bullet end.*/

    /*MelonAd.CameraFit start.*/
    /**
     * Sizes the orthographic camera with the same rule as CanvasScaler "Expand" (reference 1080x1920):
     the whole reference area is always visible. Result: a Screen Space - Camera canvas keeps a CONSTANT
     world scale on every device, so the level (physics) under Canvas/World behaves identically everywhere.
     *
     * @public
     * @class MelonAd.CameraFit
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.CameraFit", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            designHeight: 0,
            referenceResolution: null,
            cam: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.CameraFit#init", this ); }

                this.referenceResolution = new UnityEngine.Vector2();
                this.designHeight = 29.895;
                this.referenceResolution = new pc.Vec2( 1080.0, 1920.0 );
            }
        },
        methods: {
            /*MelonAd.CameraFit.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "MelonAd.CameraFit#OnEnable", this ); }

                this.Apply();
            },
            /*MelonAd.CameraFit.OnEnable end.*/

            /*MelonAd.CameraFit.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "MelonAd.CameraFit#LateUpdate", this ); }

                this.Apply();
            },
            /*MelonAd.CameraFit.LateUpdate end.*/

            /*MelonAd.CameraFit.Apply start.*/
            Apply: function () {
if ( TRACE ) { TRACE( "MelonAd.CameraFit#Apply", this ); }

                if (UnityEngine.Component.op_Equality(this.cam, null)) {
                    this.cam = this.GetComponent(UnityEngine.Camera);
                }
                if (UnityEngine.Component.op_Equality(this.cam, null)) {
                    return;
                }
                var designWidth = this.designHeight * this.referenceResolution.x / this.referenceResolution.y;
                var size = this.designHeight * 0.5;
                var byWidth = designWidth * 0.5 / UnityEngine.Mathf.Max(0.01, this.cam.aspect);
                if (byWidth > size) {
                    size = byWidth;
                }
                if (!UnityEngine.Mathf.Approximately(this.cam.orthographicSize, size)) {
                    this.cam.orthographicSize = size;
                }
            },
            /*MelonAd.CameraFit.Apply end.*/


        }
    });
    /*MelonAd.CameraFit end.*/

    /*MelonAd.CharacterSelector start.*/
    /**
     * Lives on Level_0/ManRoot. Holds the 6 character ragdolls (prefabs 0-5) and keeps exactly one active.
     Change Index in the Inspector (edit mode swaps immediately) or from Luna Playground (applied at load).
     *
     * @public
     * @class MelonAd.CharacterSelector
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.CharacterSelector", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            index: 0,
            characters: null
        },
        props: {
            Current: {
                get: function () {
if ( TRACE ) { TRACE( "MelonAd.CharacterSelector#Current#get", this ); }

                    if (this.characters == null || this.characters.length === 0) {
                        return null;
                    }
                    return this.characters[Math.max(0, Math.min(this.index, ((this.characters.length - 1) | 0)))];
                }
            }
        },
        methods: {
            /*MelonAd.CharacterSelector.Apply start.*/
            /**
             * Activates the selected character, deactivates the others, returns it.
             *
             * @instance
             * @public
             * @this MelonAd.CharacterSelector
             * @memberof MelonAd.CharacterSelector
             * @return  {MelonAd.Ragdoll}
             */
            Apply: function () {
if ( TRACE ) { TRACE( "MelonAd.CharacterSelector#Apply", this ); }

                if (this.characters == null || this.characters.length === 0) {
                    return null;
                }
                var sel = Math.max(0, Math.min(this.index, ((this.characters.length - 1) | 0)));
                for (var i = 0; i < this.characters.length; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.characters[i], null)) {
                        continue;
                    }
                    var isActive = i === sel;
                    if (this.characters[i].gameObject.activeSelf !== isActive) {
                        this.characters[i].gameObject.SetActive(isActive);
                    }
                }
                return this.characters[sel];
            },
            /*MelonAd.CharacterSelector.Apply end.*/


        }
    });
    /*MelonAd.CharacterSelector end.*/

    /*MelonAd.CtaOverlay start.*/
    /**
     * Invisible full-screen button shown on time-out / fail / win.
     Nothing is redirected automatically: the first tap calls GameEnded + InstallFullGame.
     *
     * @public
     * @class MelonAd.CtaOverlay
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.CtaOverlay", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            button: null
        },
        methods: {
            /*MelonAd.CtaOverlay.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonAd.CtaOverlay#Awake", this ); }

                var img = this.GetComponent(UnityEngine.UI.Image);
                img.color = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                img.raycastTarget = true;
                this.button = this.GetComponent(UnityEngine.UI.Button);
                if (UnityEngine.MonoBehaviour.op_Equality(this.button, null)) {
                    this.button = this.gameObject.AddComponent(UnityEngine.UI.Button);
                }
                this.button.transition = UnityEngine.UI.Selectable.Transition.None;
                this.button.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClick));
            },
            /*MelonAd.CtaOverlay.Awake end.*/

            /*MelonAd.CtaOverlay.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "MelonAd.CtaOverlay#Show", this ); }

                this.transform.SetAsLastSibling();
                this.gameObject.SetActive(true);
            },
            /*MelonAd.CtaOverlay.Show end.*/

            /*MelonAd.CtaOverlay.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "MelonAd.CtaOverlay#Hide", this ); }

                this.gameObject.SetActive(false);
            },
            /*MelonAd.CtaOverlay.Hide end.*/

            /*MelonAd.CtaOverlay.OnClick start.*/
            OnClick: function () {
if ( TRACE ) { TRACE( "MelonAd.CtaOverlay#OnClick", this ); }

                MelonAd.LunaBridge.GameEnded();
                MelonAd.LunaBridge.InstallFullGame();
            },
            /*MelonAd.CtaOverlay.OnClick end.*/


        }
    });
    /*MelonAd.CtaOverlay end.*/

    /*MelonAd.ExitZone start.*/
    /**
     * Win trigger ("NEXT LEVEL" sign). Detected by RagdollPart.
     *
     * @public
     * @class MelonAd.ExitZone
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.ExitZone", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*MelonAd.ExitZone end.*/

    /*MelonAd.FlameParticle start.*/
    /**
     * Pooled flame blob: real physics circle (blocked by pins/walls), visual scales and fades over 0.75s.
     *
     * @public
     * @class MelonAd.FlameParticle
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.FlameParticle", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rb: null,
            visual: null,
            sr: null,
            life: 0,
            t: 0,
            s: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.FlameParticle#init", this ); }

                this.life = 0.75;
            }
        },
        methods: {
            /*MelonAd.FlameParticle.Launch start.*/
            Launch: function (pos, vel, angVelDeg) {
if ( TRACE ) { TRACE( "MelonAd.FlameParticle#Launch", this ); }

                this.transform.position = UnityEngine.Vector3.FromVector2(pos.$clone());
                this.transform.rotation = pc.Quat.IDENTITY.clone();
                this.gameObject.SetActive(true);
                this.rb.position = pos.$clone();
                this.rb.rotation = 0.0;
                this.rb.linearVelocity = vel.$clone();
                this.rb.angularVelocity = angVelDeg;
                this.t = 0.0;
                this.s = UnityEngine.Random.value + 0.5;
                this.Apply();
            },
            /*MelonAd.FlameParticle.Launch end.*/

            /*MelonAd.FlameParticle.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.FlameParticle#Update", this ); }

                this.t += UnityEngine.Mathf.Min(UnityEngine.Time.deltaTime, 0.05) / this.life;
                if (this.t >= 1.0) {
                    this.gameObject.SetActive(false);
                    return;
                }
                this.Apply();
            },
            /*MelonAd.FlameParticle.Update end.*/

            /*MelonAd.FlameParticle.Apply start.*/
            Apply: function () {
if ( TRACE ) { TRACE( "MelonAd.FlameParticle#Apply", this ); }

                var sc = Math.sin(UnityEngine.Mathf.PI * this.t) * this.s * 0.5 + 0.1 + this.t * 0.5;
                this.visual.localScale = new pc.Vec3( sc, sc, 1.0 );
                var c = this.sr.color.$clone();
                c.a = 1.0 - this.t;
                this.sr.color = c.$clone();
            },
            /*MelonAd.FlameParticle.Apply end.*/


        }
    });
    /*MelonAd.FlameParticle end.*/

    /*MelonAd.FlameThrower start.*/
    /**
     * Flamethrower (top left). Oscillates and emits flame blobs continuously; blocked by the left diagonal pin.
     *
     * @public
     * @class MelonAd.FlameThrower
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.FlameThrower", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            prefab: null,
            particleRoot: null,
            poolSize: 0,
            width: 0,
            speed: 0,
            pool: null,
            tk: 0,
            acc: 0,
            next: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.FlameThrower#init", this ); }

                this.poolSize = 60;
                this.width = 2.59;
                this.speed = 10.0;
            }
        },
        methods: {
            /*MelonAd.FlameThrower.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MelonAd.FlameThrower#Start", this ); }

                this.pool = System.Array.init(this.poolSize, null, MelonAd.FlameParticle);
                for (var i = 0; i < this.poolSize; i = (i + 1) | 0) {
                    this.pool[i] = UnityEngine.Object.Instantiate(MelonAd.FlameParticle, this.prefab, this.particleRoot);
                    this.pool[i].gameObject.SetActive(false);
                }
            },
            /*MelonAd.FlameThrower.Start end.*/

            /*MelonAd.FlameThrower.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.FlameThrower#Update", this ); }

                var dt = UnityEngine.Mathf.Min(UnityEngine.Time.deltaTime, 0.05);
                this.tk += dt;
                var a = -(1.0 + Math.sin(this.tk) * 0.5);
                this.transform.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, a * UnityEngine.Mathf.Rad2Deg );

                var rate = UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameConfig.I, null) ? MelonAd.GameConfig.I.flameRate : 60.0;
                this.acc += dt * rate;
                if (this.acc > 5.0) {
                    this.acc = 5.0;
                }
                while (this.acc >= 1.0) {
                    this.acc -= 1.0;
                    this.Emit(a);
                }
            },
            /*MelonAd.FlameThrower.Update end.*/

            /*MelonAd.FlameThrower.Emit start.*/
            Emit: function (a) {
if ( TRACE ) { TRACE( "MelonAd.FlameThrower#Emit", this ); }

                var dir = new pc.Vec2( Math.cos(a), Math.sin(a) );
                var pos = UnityEngine.Vector2.FromVector3(this.transform.position).add( dir.$clone().scale( (this.width * 0.5) ) );
                for (var k = 0; k < this.pool.length; k = (k + 1) | 0) {
                    var i = (((this.next + k) | 0)) % this.pool.length;
                    if (this.pool[i].gameObject.activeSelf) {
                        continue;
                    }
                    this.next = (i + 1) | 0;
                    this.pool[i].Launch(pos, dir.$clone().scale( this.speed ), (UnityEngine.Random.value - 0.5) * 4.0 * UnityEngine.Mathf.Rad2Deg);
                    return;
                }
            },
            /*MelonAd.FlameThrower.Emit end.*/

            /*MelonAd.FlameThrower.ResetState start.*/
            ResetState: function () {
if ( TRACE ) { TRACE( "MelonAd.FlameThrower#ResetState", this ); }

                this.tk = 0.0;
                this.acc = 0.0;
                if (this.pool != null) {
                    for (var i = 0; i < this.pool.length; i = (i + 1) | 0) {
                        this.pool[i].gameObject.SetActive(false);
                    }
                }
            },
            /*MelonAd.FlameThrower.ResetState end.*/


        }
    });
    /*MelonAd.FlameThrower end.*/

    /*MelonAd.FxKind start.*/
    Bridge.define("MelonAd.FxKind", {
        $kind: 6,
        statics: {
            fields: {
                Smoke: 0,
                FlamePuff: 1,
                Debris: 2,
                Bubble: 3
            }
        }
    });
    /*MelonAd.FxKind end.*/

    /*MelonAd.FxManager start.*/
    /**
     * Pooled sprite effects (smoke, flame puffs, debris, blood, acid bubbles).
     One Update loop for everything, no Instantiate at runtime after prewarm.
     Motion formulas ported 1:1 from the original (converted px/ms -&gt; units/s, y flipped).
     *
     * @public
     * @class MelonAd.FxManager
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.FxManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                I: null
            },
            methods: {
                /*MelonAd.FxManager.SetAlpha:static start.*/
                SetAlpha: function (f, a) {
if ( TRACE ) { TRACE( "MelonAd.FxManager#SetAlpha", this ); }

                    var c = f.sr.color.$clone();
                    c.a = a;
                    f.sr.color = c.$clone();
                },
                /*MelonAd.FxManager.SetAlpha:static end.*/

                /*MelonAd.FxManager.RandOffset:static start.*/
                RandOffset: function (radius) {
if ( TRACE ) { TRACE( "MelonAd.FxManager#RandOffset", this ); }

                    var a = UnityEngine.Random.value * UnityEngine.Mathf.PI * 2.0;
                    var n = radius * UnityEngine.Random.value;
                    return new pc.Vec2( Math.cos(a) * n, Math.sin(a) * n );
                },
                /*MelonAd.FxManager.RandOffset:static end.*/


            }
        },
        fields: {
            smoke: null,
            flame: null,
            blood: null,
            spikeShard: null,
            bulletShard: null,
            bubble: null,
            prewarm: 0,
            sortingOrder: 0,
            pool: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.FxManager#init", this ); }

                this.prewarm = 160;
                this.sortingOrder = 250;
                this.pool = new (System.Collections.Generic.List$1(MelonAd.FxManager.Fx)).ctor();
            }
        },
        methods: {
            /*MelonAd.FxManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonAd.FxManager#Awake", this ); }

                MelonAd.FxManager.I = this;
                for (var i = 0; i < this.prewarm; i = (i + 1) | 0) {
                    this.Create();
                }
            },
            /*MelonAd.FxManager.Awake end.*/

            /*MelonAd.FxManager.Create start.*/
            Create: function () {
if ( TRACE ) { TRACE( "MelonAd.FxManager#Create", this ); }

                var f = new MelonAd.FxManager.Fx();
                f.go = new UnityEngine.GameObject.$ctor2("fx");
                f.t = f.go.transform;
                f.t.SetParent(this.transform, false);
                f.sr = f.go.AddComponent(UnityEngine.SpriteRenderer);
                f.sr.sortingOrder = this.sortingOrder;
                f.go.SetActive(false);
                this.pool.add(f);
                return f;
            },
            /*MelonAd.FxManager.Create end.*/

            /*MelonAd.FxManager.Take start.*/
            Take: function (kind, sp, dur, delay) {
if ( TRACE ) { TRACE( "MelonAd.FxManager#Take", this ); }

                var f = null;
                for (var i = 0; i < this.pool.Count; i = (i + 1) | 0) {
                    if (!this.pool.getItem(i).active) {
                        f = this.pool.getItem(i);
                        break;
                    }
                }
                if (f == null) {
                    f = this.Create();
                }
                f.kind = kind;
                f.sr.sprite = sp;
                f.dur = dur;
                f.delay = delay;
                f.time = 0.0;
                f.active = true;
                f.t.localScale = new pc.Vec3( 1, 1, 1 );
                f.t.localRotation = pc.Quat.IDENTITY.clone();
                MelonAd.FxManager.SetAlpha(f, 0.0);
                f.go.SetActive(true);
                return f;
            },
            /*MelonAd.FxManager.Take end.*/

            /*MelonAd.FxManager.BurnPuff start.*/
            /**
             * Smoke + delayed flame puff (function X in the original).
             *
             * @instance
             * @public
             * @this MelonAd.FxManager
             * @memberof MelonAd.FxManager
             * @param   {UnityEngine.Vector2}    p
             * @return  {void}
             */
            BurnPuff: function (p) {
if ( TRACE ) { TRACE( "MelonAd.FxManager#BurnPuff", this ); }

                var f = this.Take(MelonAd.FxKind.Smoke, this.smoke, 2.0, 0.0);
                var o = MelonAd.FxManager.RandOffset(0.4);
                f.sx = p.x + o.x;
                f.y = p.y + o.y;
                f.vv = UnityEngine.Random.value + 1.0;
                f.w = UnityEngine.Random.value * UnityEngine.Mathf.PI;
                f.l = 0.7 * (UnityEngine.Random.value + 1.0);
                f.s = 1.0 + 2.0 * UnityEngine.Random.value;
                f.t.position = new pc.Vec3( f.sx, f.y, 0.0 );
                f.t.localScale = pc.Vec3.ZERO.clone();

                var g = this.Take(MelonAd.FxKind.FlamePuff, this.flame, 2.0, 0.35);
                o = MelonAd.FxManager.RandOffset(0.4);
                g.sx = p.x + o.x;
                g.y = p.y + o.y;
                g.vv = 0.1 * (UnityEngine.Random.value + 1.0);
                g.w = UnityEngine.Random.value * UnityEngine.Mathf.PI;
                g.l = 0.7 * (UnityEngine.Random.value + 1.0);
                g.s = (1.0 + 2.0 * UnityEngine.Random.value) / 3.0;
                g.t.position = new pc.Vec3( g.sx, g.y, 0.0 );
                g.t.localScale = pc.Vec3.ZERO.clone();
            },
            /*MelonAd.FxManager.BurnPuff end.*/

            /*MelonAd.FxManager.Debris start.*/
            Debris: function (sp, p, count) {
if ( TRACE ) { TRACE( "MelonAd.FxManager#Debris", this ); }

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var f = this.Take(MelonAd.FxKind.Debris, sp, 2.0, 0.0);
                    var o = MelonAd.FxManager.RandOffset(0.4);
                    f.t.position = new pc.Vec3( p.x + o.x, p.y + o.y, 0.0 );
                    f.dx = o.x;
                    f.vv = -200.0 * (UnityEngine.Random.value + 1.0);
                    MelonAd.FxManager.SetAlpha(f, 1.0);
                }
            },
            /*MelonAd.FxManager.Debris end.*/

            /*MelonAd.FxManager.Blood start.*/
            Blood: function (p, count) {
if ( TRACE ) { TRACE( "MelonAd.FxManager#Blood", this ); }

                this.Debris(this.blood, p, count);
            },
            /*MelonAd.FxManager.Blood end.*/

            /*MelonAd.FxManager.Bubble start.*/
            Bubble: function (p) {
if ( TRACE ) { TRACE( "MelonAd.FxManager#Bubble", this ); }

                var f = this.Take(MelonAd.FxKind.Bubble, this.bubble, 0.3 + 0.5 * UnityEngine.Random.value, 0.0);
                f.t.position = new pc.Vec3( p.x + (UnityEngine.Random.value - 0.5), p.y + (UnityEngine.Random.value - 0.5), 0.0 );
                MelonAd.FxManager.SetAlpha(f, 1.0);
            },
            /*MelonAd.FxManager.Bubble end.*/

            /*MelonAd.FxManager.ClearAll start.*/
            ClearAll: function () {
if ( TRACE ) { TRACE( "MelonAd.FxManager#ClearAll", this ); }

                for (var i = 0; i < this.pool.Count; i = (i + 1) | 0) {
                    if (!this.pool.getItem(i).active) {
                        continue;
                    }
                    this.pool.getItem(i).active = false;
                    this.pool.getItem(i).go.SetActive(false);
                }
            },
            /*MelonAd.FxManager.ClearAll end.*/

            /*MelonAd.FxManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.FxManager#Update", this ); }

                var dt = UnityEngine.Mathf.Min(UnityEngine.Time.deltaTime, 0.05);
                for (var i = 0; i < this.pool.Count; i = (i + 1) | 0) {
                    var f = this.pool.getItem(i);
                    if (!f.active) {
                        continue;
                    }
                    if (f.delay > 0.0) {
                        f.delay -= dt;
                        continue;
                    }

                    f.time += dt;
                    var t = f.time / f.dur;
                    if (t >= 1.0) {
                        f.active = false;
                        f.go.SetActive(false);
                        continue;
                    }

                    if (f.kind === MelonAd.FxKind.Smoke || f.kind === MelonAd.FxKind.FlamePuff) {
                        f.y += f.vv * dt;
                        f.vv += dt;
                        var x = f.sx + f.l * Math.sin(f.w * t);
                        f.t.position = new pc.Vec3( x, f.y, 0.0 );
                        var sc = f.kind === MelonAd.FxKind.Smoke ? f.s * t : f.s * Math.sin(UnityEngine.Mathf.PI * t);
                        f.t.localScale = new pc.Vec3( sc, sc, 1.0 );
                        MelonAd.FxManager.SetAlpha(f, Math.sin(UnityEngine.Mathf.PI * t) / 20.0);
                    } else if (f.kind === MelonAd.FxKind.Debris) {
                        var pos = f.t.position.$clone();
                        pos.x += f.dx * 10.0 * dt;
                        pos.y -= f.vv * dt * 0.05;
                        f.vv += dt * 1000.0;
                        f.t.position = pos.$clone();
                        MelonAd.FxManager.SetAlpha(f, 1.0 - t);
                    } else {
                        var pos1 = f.t.position.$clone();
                        pos1.y += 2.0 * dt;
                        f.t.position = pos1.$clone();
                        MelonAd.FxManager.SetAlpha(f, 1.0 - t);
                    }
                }
            },
            /*MelonAd.FxManager.Update end.*/


        }
    });
    /*MelonAd.FxManager end.*/

    /*MelonAd.FxManager+Fx start.*/
    Bridge.define("MelonAd.FxManager.Fx", {
        $kind: 1002,
        fields: {
            go: null,
            t: null,
            sr: null,
            kind: 0,
            active: false,
            time: 0,
            dur: 0,
            delay: 0,
            sx: 0,
            y: 0,
            vv: 0,
            w: 0,
            l: 0,
            s: 0,
            dx: 0
        }
    });
    /*MelonAd.FxManager+Fx end.*/

    /*MelonAd.GameConfig start.*/
    /**
     * Gameplay tunables (Inspector only). Only the Tutorial toggle is exposed to Luna Playground.
     Defaults mirror the original HTML playable.
     *
     * @public
     * @class MelonAd.GameConfig
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.GameConfig", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                I: null
            }
        },
        fields: {
            retries: 0,
            failPopupDelay: 0,
            rifleInterval: 0,
            rifleBurstAfterPin: 0,
            flameRate: 0,
            pinTapRadius: 0,
            showTutorial: false,
            iosLink: null,
            androidLink: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.GameConfig#init", this ); }

                this.retries = 1;
                this.failPopupDelay = 1.5;
                this.rifleInterval = 0.05;
                this.rifleBurstAfterPin = 1.6;
                this.flameRate = 60.0;
                this.pinTapRadius = 0.35;
                this.showTutorial = true;
                this.iosLink = "";
                this.androidLink = "";
            }
        },
        methods: {
            /*MelonAd.GameConfig.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonAd.GameConfig#Awake", this ); }

                MelonAd.GameConfig.I = this;
            },
            /*MelonAd.GameConfig.Awake end.*/


        }
    });
    /*MelonAd.GameConfig end.*/

    /*MelonAd.GameManager start.*/
    /**
     * Flow + input. The level is the Level_0 prefab INSTANCE placed in the scene under Canvas/World
     (no runtime Instantiate); retry restores it with LevelRefs.ResetLevel().
     Win zoom scales/moves Canvas/World (the camera is bound to the Screen Space - Camera canvas).
     *
     * @public
     * @class MelonAd.GameManager
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                I: null
            }
        },
        fields: {
            level: null,
            zoomRoot: null,
            cam: null,
            ui: null,
            cta: null,
            tapFinger: null,
            dragFinger: null,
            dragFingerSprite: null,
            pickMask: null,
            winZoom: 0,
            winFocus: null,
            winZoomDuration: 0,
            winPopupDelay: 0,
            dragFrequency: 0,
            dragDamping: 0,
            dragMaxForce: 0,
            tapFingerOffset: null,
            State: 0,
            retriesUsed: 0,
            musicStarted: false,
            firstRound: false,
            dragGrab: null,
            dragTarget: null,
            tapT: 0,
            dragT: 0,
            dragStart: null,
            dragHintActive: false,
            zoomPos0: null,
            zoomScale0: null,
            zoomRoutine: null,
            winPending: false
        },
        props: {
            /**
             * True while the player is holding a body part.
             *
             * @instance
             * @public
             * @readonly
             * @memberof MelonAd.GameManager
             * @function IsDragging
             * @type boolean
             */
            IsDragging: {
                get: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#IsDragging#get", this ); }

                    return UnityEngine.MonoBehaviour.op_Inequality(this.dragGrab, null);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#init", this ); }

                this.pickMask = new UnityEngine.LayerMask();
                this.winFocus = new UnityEngine.Vector2();
                this.tapFingerOffset = new UnityEngine.Vector2();
                this.dragTarget = new UnityEngine.Vector2();
                this.dragStart = new UnityEngine.Vector3();
                this.zoomPos0 = new UnityEngine.Vector2();
                this.zoomScale0 = new UnityEngine.Vector3();
                this.winZoom = 1.526;
                this.winFocus = new pc.Vec2( 8.717, -1.805 );
                this.winZoomDuration = 1.0;
                this.winPopupDelay = 1.0;
                this.dragFrequency = 5.0;
                this.dragDamping = 0.7;
                this.dragMaxForce = 3000.0;
                this.tapFingerOffset = new pc.Vec2( 0.0, -5.2 );
                this.firstRound = true;
            }
        },
        methods: {
            /*MelonAd.GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#Awake", this ); }

                MelonAd.GameManager.I = this;
                if (UnityEngine.Component.op_Inequality(this.zoomRoot, null)) {
                    this.zoomPos0 = this.zoomRoot.anchoredPosition.$clone();
                    this.zoomScale0 = this.zoomRoot.localScale.$clone();
                }
            },
            /*MelonAd.GameManager.Awake end.*/

            /*MelonAd.GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.level, null)) {
                    this.level.Init();
                }
                this.BeginRound();
            },
            /*MelonAd.GameManager.Start end.*/

            /*MelonAd.GameManager.TutorialOn start.*/
            TutorialOn: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#TutorialOn", this ); }

                return UnityEngine.MonoBehaviour.op_Equality(MelonAd.GameConfig.I, null) || MelonAd.GameConfig.I.showTutorial;
            },
            /*MelonAd.GameManager.TutorialOn end.*/

            /*MelonAd.GameManager.BeginRound start.*/
            BeginRound: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#BeginRound", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.level, null)) {
                    UnityEngine.Debug.LogError$2("[GameManager] Assign the Level_0 instance (LevelRefs) placed under Canvas/World.");
                    return;
                }
                this.winPending = false;
                if (!this.firstRound) {
                    this.level.ResetLevel();
                }
                this.firstRound = false;
                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.FxManager.I, null)) {
                    MelonAd.FxManager.I.ClearAll();
                }

                this.State = MelonAd.GameState.Run;
                this.dragGrab = null;

                if (this.zoomRoutine != null) {
                    this.StopCoroutine$2(this.zoomRoutine);
                    this.zoomRoutine = null;
                }
                if (UnityEngine.Component.op_Inequality(this.zoomRoot, null)) {
                    this.zoomRoot.anchoredPosition = this.zoomPos0.$clone();
                    this.zoomRoot.localScale = this.zoomScale0.$clone();
                }

                this.ui.HideFail();
                this.ui.HideWin();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.cta, null)) {
                    this.cta.Hide();
                }
                this.ui.ShowHint(true);

                var tut = this.TutorialOn() && UnityEngine.MonoBehaviour.op_Inequality(this.level.tutorPin, null);
                this.tapFinger.gameObject.SetActive(tut);
                if (tut) {
                    this.tapFinger.position = this.level.tutorPin.transform.position.$clone().add( UnityEngine.Vector3.FromVector2((this.tapFingerOffset.$clone().scale( this.WorldScale() ))) );
                }
                this.tapT = 0.0;

                this.dragFinger.gameObject.SetActive(false);
                this.dragHintActive = false;
                this.SetDragFingerAlpha(1.0);
            },
            /*MelonAd.GameManager.BeginRound end.*/

            /*MelonAd.GameManager.WorldScale start.*/
            /**
             * World scale of the level container (1 at rest, grows during win zoom).
             *
             * @instance
             * @private
             * @this MelonAd.GameManager
             * @memberof MelonAd.GameManager
             * @return  {number}
             */
            WorldScale: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#WorldScale", this ); }

                return UnityEngine.MonoBehaviour.op_Inequality(this.level, null) ? this.level.transform.lossyScale.x : 1.0;
            },
            /*MelonAd.GameManager.WorldScale end.*/

            /*MelonAd.GameManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#Update", this ); }

                var dt = UnityEngine.Mathf.Min(UnityEngine.Time.deltaTime, 0.05);

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.OnPointerDown(this.ScreenToWorld(UnityEngine.Input.mousePosition));
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.dragGrab, null)) {
                    if (UnityEngine.Input.GetMouseButton(0) && this.dragGrab.CanGrab()) {
                        this.dragTarget = this.ScreenToWorld(UnityEngine.Input.mousePosition);
                    } else {
                        this.dragGrab = null;
                    }
                }

                this.UpdateTutorial(dt);
            },
            /*MelonAd.GameManager.Update end.*/

            /*MelonAd.GameManager.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#FixedUpdate", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.dragGrab, null)) {
                    return;
                }
                var rb = this.dragGrab.rb;
                var m = rb.mass;
                var w = 6.28318548 * this.dragFrequency;
                var k = m * w * w;
                var c = 2.0 * m * this.dragDamping * w;
                var f = (this.dragTarget.$clone().sub( rb.position )).scale( k ).sub( rb.linearVelocity.$clone().scale( c ) );
                if (f.lengthSq() > this.dragMaxForce * this.dragMaxForce) {
                    f = f.clone().normalize().$clone().scale( this.dragMaxForce );
                }
                rb.AddForce(f);
            },
            /*MelonAd.GameManager.FixedUpdate end.*/

            /*MelonAd.GameManager.ScreenToWorld start.*/
            ScreenToWorld: function (sp) {
if ( TRACE ) { TRACE( "MelonAd.GameManager#ScreenToWorld", this ); }

                var w = this.cam.ScreenToWorldPoint(sp);
                return new pc.Vec2( w.x, w.y );
            },
            /*MelonAd.GameManager.ScreenToWorld end.*/

            /*MelonAd.GameManager.OnPointerDown start.*/
            OnPointerDown: function (p) {
if ( TRACE ) { TRACE( "MelonAd.GameManager#OnPointerDown", this ); }

                if (!this.musicStarted) {
                    this.musicStarted = true;
                    MelonAd.AudioManager.I.Play(MelonAd.Sfx.Music);
                }
                if (this.ui.IntroActive) {
                    this.ui.DismissIntro();
                    return;
                }
                this.ui.ShowHint(false);
                if (this.State !== MelonAd.GameState.Run) {
                    return;
                }

                var hits = UnityEngine.Physics2D.OverlapPointAll(p, UnityEngine.LayerMask.op_Implicit(this.pickMask.$clone()));
                for (var i = 0; i < hits.length; i = (i + 1) | 0) {
                    var pin = hits[i].GetComponent(MelonAd.Pin);
                    if (UnityEngine.MonoBehaviour.op_Inequality(pin, null) && !pin.Removed) {
                        this.RemovePin(pin);
                        return;
                    }
                }
                for (var i1 = 0; i1 < hits.length; i1 = (i1 + 1) | 0) {
                    var g = hits[i1].GetComponent(MelonAd.Grabbable);
                    if (UnityEngine.MonoBehaviour.op_Inequality(g, null) && g.CanGrab()) {
                        this.StartDrag(g, p);
                        return;
                    }
                }

                var r = UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameConfig.I, null) ? MelonAd.GameConfig.I.pinTapRadius : 0.35;
                hits = UnityEngine.Physics2D.OverlapCircleAll(p, r * this.WorldScale(), UnityEngine.LayerMask.op_Implicit(this.pickMask.$clone()));
                for (var i2 = 0; i2 < hits.length; i2 = (i2 + 1) | 0) {
                    var pin1 = hits[i2].GetComponent(MelonAd.Pin);
                    if (UnityEngine.MonoBehaviour.op_Inequality(pin1, null) && !pin1.Removed) {
                        this.RemovePin(pin1);
                        return;
                    }
                }
            },
            /*MelonAd.GameManager.OnPointerDown end.*/

            /*MelonAd.GameManager.StartDrag start.*/
            StartDrag: function (g, p) {
if ( TRACE ) { TRACE( "MelonAd.GameManager#StartDrag", this ); }

                this.dragGrab = g;
                this.dragTarget = p.$clone();
                if (UnityEngine.MonoBehaviour.op_Inequality(g.owner, null)) {
                    this.SetDragFingerAlpha(0.0);
                }
            },
            /*MelonAd.GameManager.StartDrag end.*/

            /*MelonAd.GameManager.RemovePin start.*/
            RemovePin: function (pin) {
if ( TRACE ) { TRACE( "MelonAd.GameManager#RemovePin", this ); }

                pin.Remove();
                MelonAd.AudioManager.I.PlayOverlap(MelonAd.Sfx.Door);
                if (pin.evt === MelonAd.PinEvent.Tutor) {
                    this.tapFinger.gameObject.SetActive(false);
                    if (this.TutorialOn() && UnityEngine.MonoBehaviour.op_Inequality(this.level.man, null)) {
                        this.dragFinger.gameObject.SetActive(true);
                        this.dragHintActive = true;
                        this.dragT = 0.0;
                        this.dragStart = this.level.man.head.transform.position.$clone();
                    }
                } else if (pin.evt === MelonAd.PinEvent.Flame) {
                    MelonAd.AudioManager.I.Play(MelonAd.Sfx.Flame);
                } else if (pin.evt === MelonAd.PinEvent.Fire) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.level.rifle, null)) {
                        this.level.rifle.OnPinRemoved();
                    }
                }
            },
            /*MelonAd.GameManager.RemovePin end.*/

            /*MelonAd.GameManager.UpdateTutorial start.*/
            UpdateTutorial: function (dt) {
if ( TRACE ) { TRACE( "MelonAd.GameManager#UpdateTutorial", this ); }

                if (this.tapFinger.gameObject.activeSelf) {
                    this.tapT += dt / 0.75;
                    if (this.tapT >= 1.0) {
                        this.tapT -= 1.0;
                    }
                    var s = 1.0 - Math.sin(UnityEngine.Mathf.PI * this.tapT) / 8.0;
                    this.tapFinger.localScale = new pc.Vec3( s, s, 1.0 );
                }

                if (this.dragHintActive) {
                    this.dragT += dt / 1.75;
                    if (this.dragT >= 1.0) {
                        this.dragT -= 1.0;
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.level.man, null)) {
                            this.dragStart = this.level.man.head.transform.position.$clone();
                        }
                    }
                    var ws = this.WorldScale();
                    if (this.dragT < 0.25) {
                        var s1 = 1.0 - Math.sin(UnityEngine.Mathf.PI * this.dragT * 2.0) / 6.0;
                        this.dragFinger.localScale = new pc.Vec3( s1, s1, 1.0 );
                        this.dragFinger.position = this.dragStart.$clone();
                    } else {
                        var u = this.dragT - 0.25;
                        var s2 = 0.8333333;
                        this.dragFinger.localScale = new pc.Vec3( s2, s2, 1.0 );
                        this.dragFinger.position = this.dragStart.$clone().add( new pc.Vec3( -u * u * 4.0, 2.0 * u, 0.0 ).clone().scale( ws ) );
                    }
                }
            },
            /*MelonAd.GameManager.UpdateTutorial end.*/

            /*MelonAd.GameManager.SetDragFingerAlpha start.*/
            SetDragFingerAlpha: function (a) {
if ( TRACE ) { TRACE( "MelonAd.GameManager#SetDragFingerAlpha", this ); }

                if (UnityEngine.Component.op_Equality(this.dragFingerSprite, null)) {
                    return;
                }
                var c = this.dragFingerSprite.color.$clone();
                c.a = a;
                this.dragFingerSprite.color = c.$clone();
            },
            /*MelonAd.GameManager.SetDragFingerAlpha end.*/

            /*MelonAd.GameManager.HideFingers start.*/
            HideFingers: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#HideFingers", this ); }

                this.tapFinger.gameObject.SetActive(false);
                this.dragFinger.gameObject.SetActive(false);
                this.dragHintActive = false;
            },
            /*MelonAd.GameManager.HideFingers end.*/

            /*MelonAd.GameManager.OnManDied start.*/
            OnManDied: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#OnManDied", this ); }

                this.dragGrab = null;
                if (this.State !== MelonAd.GameState.Run) {
                    return;
                }
                this.State = MelonAd.GameState.Fail;
                MelonAd.AudioManager.I.Stop(MelonAd.Sfx.Flame);
                MelonAd.AudioManager.I.Stop(MelonAd.Sfx.Fire);
                this.HideFingers();
                this.StartCoroutine$1(this.ShowFailLater());
            },
            /*MelonAd.GameManager.OnManDied end.*/

            /*MelonAd.GameManager.ShowFailLater start.*/
            ShowFailLater: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#ShowFailLater", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    delay,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    delay = UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameConfig.I, null) ? MelonAd.GameConfig.I.failPopupDelay : 1.5;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.State === MelonAd.GameState.Fail) {
                                            MelonAd.AudioManager.I.Play(MelonAd.Sfx.Fail);
                                            this.ui.ShowFail();
                                            if (UnityEngine.MonoBehaviour.op_Inequality(this.cta, null)) {
                                                this.cta.Show();
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
            /*MelonAd.GameManager.ShowFailLater end.*/

            /*MelonAd.GameManager.OnFailButton start.*/
            OnFailButton: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#OnFailButton", this ); }

                if (this.State !== MelonAd.GameState.Fail) {
                    return;
                }
                var allowed = UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameConfig.I, null) ? MelonAd.GameConfig.I.retries : 1;
                if (this.retriesUsed >= allowed) {
                    MelonAd.LunaBridge.GameEnded();
                    MelonAd.LunaBridge.InstallFullGame();
                    return;
                }
                this.retriesUsed = (this.retriesUsed + 1) | 0;
                this.BeginRound();
            },
            /*MelonAd.GameManager.OnFailButton end.*/

            /*MelonAd.GameManager.OnExitReached start.*/
            /**
             * Called by the exit trigger. The win is confirmed only if the man is still alive a moment later
             (a body falling onto the spikes next to the sign must not count as a win).
             *
             * @instance
             * @public
             * @this MelonAd.GameManager
             * @memberof MelonAd.GameManager
             * @return  {void}
             */
            OnExitReached: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#OnExitReached", this ); }

                if (this.State !== MelonAd.GameState.Run || this.winPending) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.level, null) && UnityEngine.MonoBehaviour.op_Inequality(this.level.man, null) && this.level.man.Dead) {
                    return;
                }
                this.StartCoroutine$1(this.ConfirmWin());
            },
            /*MelonAd.GameManager.OnExitReached end.*/

            /*MelonAd.GameManager.ConfirmWin start.*/
            ConfirmWin: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#ConfirmWin", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.winPending = true;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.3);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.winPending = false;
                                        if (this.State !== MelonAd.GameState.Run) {
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
                                    if (UnityEngine.MonoBehaviour.op_Inequality(this.level, null) && UnityEngine.MonoBehaviour.op_Inequality(this.level.man, null) && this.level.man.Dead) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 4: {
                                    return false;
                                }
                                case 5: {
                                    if (this.IsDragging) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 6: {
                                    return false;
                                }
                                case 7: {
                                    // picked up again: wait until it rests in the zone again
                                        this.DoWin();

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
            /*MelonAd.GameManager.ConfirmWin end.*/

            /*MelonAd.GameManager.DoWin start.*/
            DoWin: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#DoWin", this ); }

                this.State = MelonAd.GameState.Win;
                this.dragGrab = null;
                this.HideFingers();
                MelonAd.AudioManager.I.Play(MelonAd.Sfx.Complete);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.cta, null)) {
                    this.cta.Show();
                }
                this.StartCoroutine$1(this.ShowWinLater());
                if (UnityEngine.Component.op_Inequality(this.zoomRoot, null)) {
                    this.zoomRoutine = this.StartCoroutine$1(this.ZoomToExit());
                }
            },
            /*MelonAd.GameManager.DoWin end.*/

            /*MelonAd.GameManager.ShowWinLater start.*/
            ShowWinLater: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#ShowWinLater", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.winPopupDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.State === MelonAd.GameState.Win) {
                                            this.ui.ShowWin();
                                            if (UnityEngine.MonoBehaviour.op_Inequality(this.cta, null)) {
                                                this.cta.Show();
                                            } // keep the invisible CTA above the popup
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
            /*MelonAd.GameManager.ShowWinLater end.*/

            /*MelonAd.GameManager.OnTimeUp start.*/
            /**
             * Luna play-time limit reached: stop the round and wait for a tap on the invisible CTA.
             *
             * @instance
             * @public
             * @this MelonAd.GameManager
             * @memberof MelonAd.GameManager
             * @return  {void}
             */
            OnTimeUp: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#OnTimeUp", this ); }

                if (this.State === MelonAd.GameState.Run) {
                    this.State = MelonAd.GameState.Fail;
                    this.dragGrab = null;
                    MelonAd.AudioManager.I.Stop(MelonAd.Sfx.Flame);
                    MelonAd.AudioManager.I.Stop(MelonAd.Sfx.Fire);
                    this.HideFingers();
                    this.ui.ShowHint(false);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.cta, null)) {
                    this.cta.Show();
                }
            },
            /*MelonAd.GameManager.OnTimeUp end.*/

            /*MelonAd.GameManager.ZoomToExit start.*/
            ZoomToExit: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#ZoomToExit", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    p0,
                    s0,
                    s1,
                    focus,
                    p1,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    p0 = this.zoomRoot.anchoredPosition.$clone();
                                        s0 = this.zoomRoot.localScale.$clone();
                                        s1 = this.zoomScale0.$clone().clone().scale( this.winZoom );
                                        focus = UnityEngine.Vector2.FromVector3(this.level.transform.localPosition).add( this.winFocus );
                                        p1 = focus.$clone().scale( -1 ).scale( s1.x );
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime / UnityEngine.Mathf.Max(0.01, this.winZoomDuration);
                                        if (t > 1.0) {
                                            t = 1.0;
                                        }
                                        this.zoomRoot.anchoredPosition = new pc.Vec2().lerp( p0, p1, t );
                                        this.zoomRoot.localScale = new pc.Vec3().lerp( s0, s1, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.zoomRoutine = null;

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
            /*MelonAd.GameManager.ZoomToExit end.*/


        }
    });
    /*MelonAd.GameManager end.*/

    /*MelonAd.GameState start.*/
    Bridge.define("MelonAd.GameState", {
        $kind: 6,
        statics: {
            fields: {
                Run: 0,
                Fail: 1,
                Win: 2
            }
        }
    });
    /*MelonAd.GameState end.*/

    /*MelonAd.Grabbable start.*/
    /**
     * Marks a dynamic body the player can drag (ragdoll parts, chair).
     *
     * @public
     * @class MelonAd.Grabbable
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.Grabbable", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rb: null,
            owner: null
        },
        methods: {
            /*MelonAd.Grabbable.CanGrab start.*/
            CanGrab: function () {
if ( TRACE ) { TRACE( "MelonAd.Grabbable#CanGrab", this ); }

                return UnityEngine.MonoBehaviour.op_Equality(this.owner, null) || !this.owner.Dead;
            },
            /*MelonAd.Grabbable.CanGrab end.*/


        }
    });
    /*MelonAd.Grabbable end.*/

    /*MelonAd.LevelRefs start.*/
    /**
     * Root of the Level_0 prefab instance placed in the scene (Canvas/World).
     Captures the initial state in Awake and restores it on retry, so the level is never cloned at runtime.
     *
     * @public
     * @class MelonAd.LevelRefs
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.LevelRefs", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            man: null,
            rifle: null,
            flameThrower: null,
            tutorPin: null,
            dynamicRoot: null,
            transforms: null,
            renderers: null,
            rendererEnabled: null,
            rendererColor: null,
            colliders: null,
            colliderEnabled: null,
            bodies: null,
            initialized: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.LevelRefs#init", this ); }

                this.transforms = new (System.Collections.Generic.List$1(MelonAd.LevelRefs.TState)).ctor();
                this.renderers = new (System.Collections.Generic.List$1(UnityEngine.SpriteRenderer)).ctor();
                this.rendererEnabled = new (System.Collections.Generic.List$1(System.Boolean)).ctor();
                this.rendererColor = new (System.Collections.Generic.List$1(UnityEngine.Color)).ctor();
                this.colliders = new (System.Collections.Generic.List$1(UnityEngine.Collider2D)).ctor();
                this.colliderEnabled = new (System.Collections.Generic.List$1(System.Boolean)).ctor();
            }
        },
        methods: {
            /*MelonAd.LevelRefs.Init start.*/
            /**
             * Called by GameManager.Start: applies the selected character, then snapshots the level.
             *
             * @instance
             * @public
             * @this MelonAd.LevelRefs
             * @memberof MelonAd.LevelRefs
             * @return  {void}
             */
            Init: function () {
if ( TRACE ) { TRACE( "MelonAd.LevelRefs#Init", this ); }

                if (this.initialized) {
                    return;
                }
                this.initialized = true;
                var selector = this.GetComponentInChildren(MelonAd.CharacterSelector, true);
                if (UnityEngine.MonoBehaviour.op_Inequality(selector, null)) {
                    var chosen = selector.Apply();
                    if (UnityEngine.MonoBehaviour.op_Inequality(chosen, null)) {
                        this.man = chosen;
                    }
                }
                this.Capture();
            },
            /*MelonAd.LevelRefs.Init end.*/

            /*MelonAd.LevelRefs.Capture start.*/
            Capture: function () {
if ( TRACE ) { TRACE( "MelonAd.LevelRefs#Capture", this ); }

                var all = this.GetComponentsInChildren$1(UnityEngine.Transform, true);
                for (var i = 0; i < all.length; i = (i + 1) | 0) {
                    if (UnityEngine.Component.op_Equality(all[i], this.transform)) {
                        continue;
                    }
                    var s = new MelonAd.LevelRefs.TState();
                    s.t = all[i];
                    s.parent = all[i].parent;
                    s.pos = all[i].localPosition.$clone();
                    s.rot = all[i].localRotation.$clone();
                    s.scale = all[i].localScale.$clone();
                    s.active = all[i].gameObject.activeSelf;
                    this.transforms.add(s);
                }
                var srs = this.GetComponentsInChildren$1(UnityEngine.SpriteRenderer, true);
                for (var i1 = 0; i1 < srs.length; i1 = (i1 + 1) | 0) {
                    this.renderers.add(srs[i1]);
                    this.rendererEnabled.add(srs[i1].enabled);
                    this.rendererColor.add(srs[i1].color.$clone());
                }
                var cols = this.GetComponentsInChildren$1(UnityEngine.Collider2D, true);
                for (var i2 = 0; i2 < cols.length; i2 = (i2 + 1) | 0) {
                    this.colliders.add(cols[i2]);
                    this.colliderEnabled.add(cols[i2].enabled);
                }
                this.bodies = this.GetComponentsInChildren$1(UnityEngine.Rigidbody2D, true);
            },
            /*MelonAd.LevelRefs.Capture end.*/

            /*MelonAd.LevelRefs.ResetLevel start.*/
            /**
             * Back to the exact edit-time state (pins, spikes, ragdoll, guns, pools).
             *
             * @instance
             * @public
             * @this MelonAd.LevelRefs
             * @memberof MelonAd.LevelRefs
             * @return  {void}
             */
            ResetLevel: function () {
if ( TRACE ) { TRACE( "MelonAd.LevelRefs#ResetLevel", this ); }

                if (!this.initialized) {
                    this.Init();
                    return;
                }
                var pins = this.GetComponentsInChildren$1(MelonAd.Pin, true);
                for (var i = 0; i < pins.length; i = (i + 1) | 0) {
                    pins[i].ResetState();
                }
                var spikes = this.GetComponentsInChildren$1(MelonAd.Spike, true);
                for (var i1 = 0; i1 < spikes.length; i1 = (i1 + 1) | 0) {
                    spikes[i1].ResetState();
                }
                var acids = this.GetComponentsInChildren$1(MelonAd.Acid, true);
                for (var i2 = 0; i2 < acids.length; i2 = (i2 + 1) | 0) {
                    acids[i2].ResetState();
                }
                var pits = this.GetComponentsInChildren$1(MelonAd.MonsterPit, true);
                for (var i3 = 0; i3 < pits.length; i3 = (i3 + 1) | 0) {
                    pits[i3].ResetState();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.rifle, null)) {
                    this.rifle.ResetState();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.flameThrower, null)) {
                    this.flameThrower.ResetState();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.man, null)) {
                    this.man.ResetState();
                }

                for (var i4 = 0; i4 < this.transforms.Count; i4 = (i4 + 1) | 0) {
                    var s = this.transforms.getItem(i4);
                    if (UnityEngine.Component.op_Equality(s.t, null)) {
                        continue;
                    }
                    if (UnityEngine.Component.op_Inequality(s.t.parent, s.parent)) {
                        s.t.SetParent(s.parent, false);
                    }
                    s.t.localPosition = s.pos.$clone();
                    s.t.localRotation = s.rot.$clone();
                    s.t.localScale = s.scale.$clone();
                }
                for (var i5 = 0; i5 < this.transforms.Count; i5 = (i5 + 1) | 0) {
                    var s1 = this.transforms.getItem(i5);
                    if (UnityEngine.Component.op_Inequality(s1.t, null) && s1.t.gameObject.activeSelf !== s1.active) {
                        s1.t.gameObject.SetActive(s1.active);
                    }
                }
                for (var i6 = 0; i6 < this.renderers.Count; i6 = (i6 + 1) | 0) {
                    if (UnityEngine.Component.op_Equality(this.renderers.getItem(i6), null)) {
                        continue;
                    }
                    this.renderers.getItem(i6).enabled = this.rendererEnabled.getItem(i6);
                    this.renderers.getItem(i6).color = this.rendererColor.getItem(i6).$clone();
                }
                for (var i7 = 0; i7 < this.colliders.Count; i7 = (i7 + 1) | 0) {
                    if (UnityEngine.Component.op_Inequality(this.colliders.getItem(i7), null)) {
                        this.colliders.getItem(i7).enabled = this.colliderEnabled.getItem(i7);
                    }
                }
                for (var i8 = 0; i8 < this.bodies.length; i8 = (i8 + 1) | 0) {
                    var rb = this.bodies[i8];
                    if (UnityEngine.Component.op_Equality(rb, null)) {
                        continue;
                    }
                    rb.position = UnityEngine.Vector2.FromVector3(rb.transform.position.$clone());
                    rb.rotation = rb.transform.eulerAngles.z;
                    rb.linearVelocity = pc.Vec2.ZERO.clone();
                    rb.angularVelocity = 0.0;
                    rb.WakeUp();
                }
            },
            /*MelonAd.LevelRefs.ResetLevel end.*/


        }
    });
    /*MelonAd.LevelRefs end.*/

    /*MelonAd.LevelRefs+TState start.*/
    Bridge.define("MelonAd.LevelRefs.TState", {
        $kind: 1002,
        fields: {
            t: null,
            parent: null,
            pos: null,
            scale: null,
            rot: null,
            active: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.LevelRefs.TState#init", this ); }

                this.pos = new UnityEngine.Vector3();
                this.scale = new UnityEngine.Vector3();
                this.rot = new UnityEngine.Quaternion();
            }
        }
    });
    /*MelonAd.LevelRefs+TState end.*/

    /*MelonAd.LunaBridge start.*/
    /**
     * Single entry point for all Luna Playworks SDK calls.
     *
     * @static
     * @abstract
     * @public
     * @class MelonAd.LunaBridge
     */
    Bridge.define("MelonAd.LunaBridge", {
        statics: {
            fields: {
                ended: false
            },
            methods: {
                /*MelonAd.LunaBridge.GameEnded:static start.*/
                /**
                 * Equivalent of api.playableFinished() in the original. Called once.
                 *
                 * @static
                 * @public
                 * @this MelonAd.LunaBridge
                 * @memberof MelonAd.LunaBridge
                 * @return  {void}
                 */
                GameEnded: function () {
if ( TRACE ) { TRACE( "MelonAd.LunaBridge#GameEnded", this ); }

                    if (MelonAd.LunaBridge.ended) {
                        return;
                    }
                    MelonAd.LunaBridge.ended = true;
                    UnityEngine.Debug.Log$1("[Luna] GameEnded");
                    Luna.Unity.LifeCycle.GameEnded();
                },
                /*MelonAd.LunaBridge.GameEnded:static end.*/

                /*MelonAd.LunaBridge.InstallFullGame:static start.*/
                /**
                 * CTA / store redirect.
                 *
                 * @static
                 * @public
                 * @this MelonAd.LunaBridge
                 * @memberof MelonAd.LunaBridge
                 * @return  {void}
                 */
                InstallFullGame: function () {
if ( TRACE ) { TRACE( "MelonAd.LunaBridge#InstallFullGame", this ); }

                    UnityEngine.Debug.Log$1("[Luna] InstallFullGame");
                    var c = MelonAd.GameConfig.I;
                    if (UnityEngine.MonoBehaviour.op_Inequality(c, null) && (!System.String.isNullOrEmpty(c.iosLink) || !System.String.isNullOrEmpty(c.androidLink))) {
                        Luna.Unity.Playable.InstallFullGame(c.iosLink, c.androidLink);
                    } else {
                        Luna.Unity.Playable.InstallFullGame();
                    }
                },
                /*MelonAd.LunaBridge.InstallFullGame:static end.*/

                /*MelonAd.LunaBridge.Event:static start.*/
                Event: function (name, value) {
if ( TRACE ) { TRACE( "MelonAd.LunaBridge#Event", this ); }

                    Luna.Unity.Analytics.LogEvent$1(name, value);
                },
                /*MelonAd.LunaBridge.Event:static end.*/


            }
        }
    });
    /*MelonAd.LunaBridge end.*/

    /*MelonAd.MonsterPit start.*/
    /**
     * Monster pit (replaces the acid pool in Main_SSP): a horde of zombies stands on the pit floor with
     their arms raised, reaching for the man. When he falls in, the closest one stretches up, grabs him
     and chews the body part by part. The trigger collider on this object is the "fall in" zone.
     Each monster root sits at its feet and has children: "Base" (legs+body+head), "ArmL", "ArmR".
     *
     * @public
     * @class MelonAd.MonsterPit
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.MonsterPit", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*MelonAd.MonsterPit.WaveArms:static start.*/
                WaveArms: function (m, w, amp) {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#WaveArms", this ); }

                    if (UnityEngine.Component.op_Inequality(m.armL, null)) {
                        m.armL.localRotation = m.armL0.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, amp * Math.sin(w * 1.6) ) );
                    }
                    if (UnityEngine.Component.op_Inequality(m.armR, null)) {
                        m.armR.localRotation = m.armR0.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, -amp * Math.sin(w * 1.6 + 1.3) ) );
                    }
                },
                /*MelonAd.MonsterPit.WaveArms:static end.*/

                /*MelonAd.MonsterPit.Grab:static start.*/
                /**
                 * k = 0: arms in the raised idle pose, k = 1: arms closed in over the head (grabbing).
                 *
                 * @static
                 * @private
                 * @this MelonAd.MonsterPit
                 * @memberof MelonAd.MonsterPit
                 * @param   {MelonAd.MonsterPit.Mon}    m    
                 * @param   {number}                    k
                 * @return  {void}
                 */
                Grab: function (m, k) {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#Grab", this ); }

                    if (UnityEngine.Component.op_Inequality(m.armL, null)) {
                        m.armL.localRotation = m.armL0.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, -40.0 * k ) );
                    }
                    if (UnityEngine.Component.op_Inequality(m.armR, null)) {
                        m.armR.localRotation = m.armR0.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, 40.0 * k ) );
                    }
                },
                /*MelonAd.MonsterPit.Grab:static end.*/

                /*MelonAd.MonsterPit.Hide:static start.*/
                Hide: function (p) {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#Hide", this ); }

                    var srs = p.GetComponentsInChildren(UnityEngine.SpriteRenderer);
                    for (var i = 0; i < srs.length; i = (i + 1) | 0) {
                        srs[i].enabled = false;
                    }
                    if (p.skinExtras != null) {
                        for (var i1 = 0; i1 < p.skinExtras.length; i1 = (i1 + 1) | 0) {
                            if (UnityEngine.Component.op_Inequality(p.skinExtras[i1], null)) {
                                p.skinExtras[i1].enabled = false;
                            }
                        }
                    }
                    if (p.burntExtras != null) {
                        for (var i2 = 0; i2 < p.burntExtras.length; i2 = (i2 + 1) | 0) {
                            if (UnityEngine.Component.op_Inequality(p.burntExtras[i2], null)) {
                                p.burntExtras[i2].enabled = false;
                            }
                        }
                    }
                },
                /*MelonAd.MonsterPit.Hide:static end.*/


            }
        },
        fields: {
            monsters: null,
            eaters: 0,
            idleSpeed: 0,
            idleSway: 0,
            armWave: 0,
            breathe: 0,
            reachTime: 0,
            reachStretch: 0,
            chewTime: 0,
            settleTime: 0,
            pullSpeed: 0,
            mons: null,
            time: 0,
            eater: 0,
            eating: false,
            routine: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#init", this ); }

                this.eaters = 4;
                this.idleSpeed = 2.2;
                this.idleSway = 3.0;
                this.armWave = 14.0;
                this.breathe = 0.025;
                this.reachTime = 0.22;
                this.reachStretch = 1.18;
                this.chewTime = 1.3;
                this.settleTime = 0.5;
                this.pullSpeed = 9.0;
                this.eater = -1;
            }
        },
        methods: {
            /*MelonAd.MonsterPit.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#Awake", this ); }

                var n = this.monsters != null ? this.monsters.length : 0;
                this.mons = System.Array.init(n, null, MelonAd.MonsterPit.Mon);
                for (var i = 0; i < n; i = (i + 1) | 0) {
                    var t = this.monsters[i];
                    if (UnityEngine.Component.op_Equality(t, null)) {
                        continue;
                    }
                    var m = new MelonAd.MonsterPit.Mon();
                    m.root = t;
                    m.armL = t.Find("ArmL");
                    m.armR = t.Find("ArmR");
                    var b = t.Find("Base");
                    m.body = UnityEngine.Component.op_Inequality(b, null) ? b.GetComponent(UnityEngine.SpriteRenderer) : t.GetComponentInChildren(UnityEngine.SpriteRenderer);
                    m.scale0 = t.localScale.$clone();
                    m.rot0 = t.localRotation.$clone();
                    if (UnityEngine.Component.op_Inequality(m.armL, null)) {
                        m.armL0 = m.armL.localRotation.$clone();
                    }
                    if (UnityEngine.Component.op_Inequality(m.armR, null)) {
                        m.armR0 = m.armR.localRotation.$clone();
                    }
                    m.phase = i * 1.37;
                    this.mons[i] = m;
                }
            },
            /*MelonAd.MonsterPit.Awake end.*/

            /*MelonAd.MonsterPit.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#Update", this ); }

                var dt = UnityEngine.Mathf.Min(UnityEngine.Time.deltaTime, 0.05);
                this.time += dt;
                var excite = this.eating ? 2.2 : 1.0; // the horde gets excited while one is eating
                for (var i = 0; i < this.mons.length; i = (i + 1) | 0) {
                    var m = this.mons[i];
                    if (m == null || i === this.eater) {
                        continue;
                    }
                    var w = this.time * this.idleSpeed * excite + m.phase;
                    m.root.localRotation = m.rot0.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, this.idleSway * Math.sin(w * 0.7) ) );
                    m.root.localScale = new pc.Vec3( m.scale0.x, m.scale0.y * (1.0 + this.breathe * Math.sin(w)), m.scale0.z );
                    MelonAd.MonsterPit.WaveArms(m, w, this.armWave * (this.eating ? 1.6 : 1.0));
                }
            },
            /*MelonAd.MonsterPit.Update end.*/

            /*MelonAd.MonsterPit.Eat start.*/
            /**
             * Called by the Ragdoll when one of its parts enters the pit.
             *
             * @instance
             * @public
             * @this MelonAd.MonsterPit
             * @memberof MelonAd.MonsterPit
             * @param   {MelonAd.Ragdoll}        victim    
             * @param   {MelonAd.RagdollPart}    part
             * @return  {void}
             */
            Eat: function (victim, part) {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#Eat", this ); }

                if (this.eating || UnityEngine.MonoBehaviour.op_Equality(victim, null) || this.mons.length === 0) {
                    return;
                }
                this.eating = true;
                this.eater = this.Closest(part.transform.position.x);
                this.routine = this.StartCoroutine$1(this.EatRoutine(victim, part));
            },
            /*MelonAd.MonsterPit.Eat end.*/

            /*MelonAd.MonsterPit.Closest start.*/
            Closest: function (x) {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#Closest", this ); }

                var best = 0;
                var bestD = 3.40282347E+38;
                var n = UnityEngine.Mathf.Min(UnityEngine.Mathf.Max(1, this.eaters), this.mons.length);
                for (var i = 0; i < n; i = (i + 1) | 0) {
                    if (this.mons[i] == null) {
                        continue;
                    }
                    var d = Math.abs(this.mons[i].root.position.x - x);
                    if (d < bestD) {
                        bestD = d;
                        best = i;
                    }
                }
                return best;
            },
            /*MelonAd.MonsterPit.Closest end.*/

            /*MelonAd.MonsterPit.Mouth start.*/
            /**
             * Approximate mouth position of the eating monster (lower half of the head).
             *
             * @instance
             * @private
             * @this MelonAd.MonsterPit
             * @memberof MelonAd.MonsterPit
             * @return  {UnityEngine.Vector2}
             */
            Mouth: function () {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#Mouth", this ); }

                var m = this.mons[this.eater];
                if (UnityEngine.Component.op_Inequality(m.body, null)) {
                    var b = m.body.bounds;
                    return new pc.Vec2( b.center.x, b.max.y - b.halfExtents.$clone().scale( 2 ).y * 0.3 );
                }
                return UnityEngine.Vector2.FromVector3(m.root.position.$clone());
            },
            /*MelonAd.MonsterPit.Mouth end.*/

            /*MelonAd.MonsterPit.EatRoutine start.*/
            EatRoutine: function (victim, first) {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#EatRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    m,
                    tr,
                    s0,
                    lean,
                    r1,
                    t,
                    k,
                    parts,
                    eaten,
                    nextBite,
                    chomp,
                    p,
                    rest,
                    sUp,
                    rUp,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    m = this.mons[this.eater];
                                        tr = m.root;
                                        s0 = m.scale0.$clone();
                                        lean = Math.max(-12.0, Math.min((first.transform.position.x - tr.position.x) * -6.0, 12.0));
                                        r1 = m.rot0.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, lean ) );
                                        if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.AudioManager.I, null)) {
                                            MelonAd.AudioManager.I.PlayOverlap(MelonAd.Sfx.Hurt);
                                        }

                                        // 1. stretch up (feet planted), arms reach in
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime / UnityEngine.Mathf.Max(0.01, this.reachTime);
                                        if (t > 1.0) {
                                            t = 1.0;
                                        }
                                        k = 1.0 - (1.0 - t) * (1.0 - t);
                                        tr.localScale = new pc.Vec3( s0.x, s0.y * pc.math.lerp(1.0, this.reachStretch, k), s0.z );
                                        tr.localRotation = new pc.Quat().slerpUnclamped( m.rot0, r1, pc.math.clamp( k, 0, 1 ) );
                                        MelonAd.MonsterPit.Grab(m, k);
                                        this.Pull(victim, 0.6);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.FxManager.I, null)) {
                                            MelonAd.FxManager.I.Blood(UnityEngine.Vector2.FromVector3(first.transform.position), 20);
                                        }

                                        // 2. chew: parts disappear one by one with blood
                                        parts = victim.parts;
                                        eaten = 0;
                                        t = 0.0;
                                        nextBite = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( t < 1.0 ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    t += UnityEngine.Time.deltaTime / UnityEngine.Mathf.Max(0.01, this.chewTime);
                                        if (t > 1.0) {
                                            t = 1.0;
                                        }
                                        chomp = Math.abs(Math.sin(t * UnityEngine.Mathf.PI * 7.0));
                                        tr.localScale = new pc.Vec3( s0.x * (1.0 + 0.08 * chomp), s0.y * (this.reachStretch - 0.1 * chomp), s0.z );
                                        tr.localRotation = r1.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, 4.0 * Math.sin(t * UnityEngine.Mathf.PI * 9.0) ) );
                                        MelonAd.MonsterPit.Grab(m, 1.0 - 0.3 * chomp);
                                        this.Pull(victim, 1.0);
                                        if (t >= nextBite && parts != null && eaten < parts.length) {
                                            nextBite += 1.0 / (((parts.length + 1) | 0));
                                            p = parts[Bridge.identity(eaten, ((eaten = (eaten + 1) | 0)))];
                                            if (UnityEngine.MonoBehaviour.op_Inequality(p, null)) {
                                                MelonAd.MonsterPit.Hide(p);
                                                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.FxManager.I, null)) {
                                                    MelonAd.FxManager.I.Blood(UnityEngine.Vector2.FromVector3(p.transform.position), 6);
                                                }
                                                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.AudioManager.I, null) && eaten % 3 === 1) {
                                                    MelonAd.AudioManager.I.PlayOverlap(MelonAd.Sfx.Doc);
                                                }
                                            }
                                        }
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    if (parts != null) {
                                            for (var i = eaten; i < parts.length; i = (i + 1) | 0) {
                                                if (UnityEngine.MonoBehaviour.op_Inequality(parts[i], null)) {
                                                    MelonAd.MonsterPit.Hide(parts[i]);
                                                }
                                            }
                                        }
                                        rest = victim.GetComponentsInChildren(UnityEngine.SpriteRenderer);
                                        for (var i1 = 0; i1 < rest.length; i1 = (i1 + 1) | 0) {
                                            rest[i1].enabled = false;
                                        }

                                        // 3. settle back to the idle pose
                                        sUp = tr.localScale.$clone();
                                        rUp = tr.localRotation.$clone();
                                        t = 0.0;
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    if ( t < 1.0 ) {
                                            $step = 10;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 10: {
                                    t += UnityEngine.Time.deltaTime / UnityEngine.Mathf.Max(0.01, this.settleTime);
                                        if (t > 1.0) {
                                            t = 1.0;
                                        }
                                        tr.localScale = new pc.Vec3().lerp( sUp, s0, t );
                                        tr.localRotation = new pc.Quat().slerpUnclamped( rUp, m.rot0, pc.math.clamp( t, 0, 1 ) );
                                        MelonAd.MonsterPit.Grab(m, 1.0 - t);
                                        $enumerator.current = null;
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    
                                        $step = 9;
                                        continue;
                                }
                                case 12: {
                                    this.eater = -1;
                                        this.eating = false;
                                        this.routine = null;

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
            /*MelonAd.MonsterPit.EatRoutine end.*/

            /*MelonAd.MonsterPit.Pull start.*/
            Pull: function (victim, strength) {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#Pull", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(victim, null) || victim.parts == null) {
                    return;
                }
                var mouth = this.Mouth();
                for (var i = 0; i < victim.parts.length; i = (i + 1) | 0) {
                    var p = victim.parts[i];
                    if (UnityEngine.MonoBehaviour.op_Equality(p, null) || UnityEngine.Component.op_Equality(p.rb, null)) {
                        continue;
                    }
                    var d = mouth.$clone().sub( p.rb.position );
                    p.rb.linearVelocity = new pc.Vec2().lerp( p.rb.linearVelocity, d.$clone().scale( this.pullSpeed ).scale( 0.3 ), 0.25 * strength );
                }
            },
            /*MelonAd.MonsterPit.Pull end.*/

            /*MelonAd.MonsterPit.ResetState start.*/
            ResetState: function () {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit#ResetState", this ); }

                if (this.routine != null) {
                    this.StopCoroutine$2(this.routine);
                    this.routine = null;
                }
                this.eating = false;
                this.eater = -1;
                if (this.mons == null) {
                    return;
                }
                for (var i = 0; i < this.mons.length; i = (i + 1) | 0) {
                    var m = this.mons[i];
                    if (m == null) {
                        continue;
                    }
                    m.root.localScale = m.scale0.$clone();
                    m.root.localRotation = m.rot0.$clone();
                    if (UnityEngine.Component.op_Inequality(m.armL, null)) {
                        m.armL.localRotation = m.armL0.$clone();
                    }
                    if (UnityEngine.Component.op_Inequality(m.armR, null)) {
                        m.armR.localRotation = m.armR0.$clone();
                    }
                }
            },
            /*MelonAd.MonsterPit.ResetState end.*/


        }
    });
    /*MelonAd.MonsterPit end.*/

    /*MelonAd.MonsterPit+Mon start.*/
    Bridge.define("MelonAd.MonsterPit.Mon", {
        $kind: 1002,
        fields: {
            root: null,
            armL: null,
            armR: null,
            body: null,
            scale0: null,
            rot0: null,
            armL0: null,
            armR0: null,
            phase: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.MonsterPit.Mon#init", this ); }

                this.scale0 = new UnityEngine.Vector3();
                this.rot0 = new UnityEngine.Quaternion();
                this.armL0 = new UnityEngine.Quaternion();
                this.armR0 = new UnityEngine.Quaternion();
            }
        }
    });
    /*MelonAd.MonsterPit+Mon end.*/

    /*MelonAd.Pin start.*/
    /**
     * Tap-to-remove pin. Flies out along flyOffset with t^2 easing in 0.35s (original tween).
     *
     * @public
     * @class MelonAd.Pin
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.Pin", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            evt: 0,
            flyOffset: null,
            Removed: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.Pin#init", this ); }

                this.flyOffset = new UnityEngine.Vector2();
            }
        },
        methods: {
            /*MelonAd.Pin.Remove start.*/
            Remove: function () {
if ( TRACE ) { TRACE( "MelonAd.Pin#Remove", this ); }

                if (this.Removed) {
                    return;
                }
                this.Removed = true;
                var c = this.GetComponent(UnityEngine.Collider2D);
                if (UnityEngine.Component.op_Inequality(c, null)) {
                    c.enabled = false;
                }
                this.StartCoroutine$1(this.Fly());
            },
            /*MelonAd.Pin.Remove end.*/

            /*MelonAd.Pin.Fly start.*/
            Fly: function () {
if ( TRACE ) { TRACE( "MelonAd.Pin#Fly", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    p0,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    p0 = this.transform.position.$clone();
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime / 0.35;
                                        if (t > 1.0) {
                                            t = 1.0;
                                        }
                                        this.transform.position = p0.$clone().add( new pc.Vec3( this.flyOffset.x * t * t, this.flyOffset.y * t * t, 0.0 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.gameObject.SetActive(false);

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
            /*MelonAd.Pin.Fly end.*/

            /*MelonAd.Pin.ResetState start.*/
            ResetState: function () {
if ( TRACE ) { TRACE( "MelonAd.Pin#ResetState", this ); }

                this.StopAllCoroutines();
                this.Removed = false;
            },
            /*MelonAd.Pin.ResetState end.*/


        }
    });
    /*MelonAd.Pin end.*/

    /*MelonAd.PinEvent start.*/
    Bridge.define("MelonAd.PinEvent", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                Tutor: 1,
                Flame: 2,
                Fire: 3
            }
        }
    });
    /*MelonAd.PinEvent end.*/

    /*MelonAd.Ragdoll start.*/
    /**
     * 14-part ragdoll (PROJECT.PRT.MAN in the original).
     Alive: per-step impulses keep it upright (head up 25, feet down 18).
     Deaths: acid/spike = skin dissolves to skeleton, fire = skin burns to charred, bullet = blood.
     The dissolve is ONE SpriteMask circle growing from the hit part (skin sprites are VisibleOutsideMask).
     *
     * @public
     * @class MelonAd.Ragdoll
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.Ragdoll", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*MelonAd.Ragdoll.IsGround:static start.*/
                IsGround: function (o) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#IsGround", this ); }

                    if (UnityEngine.Component.op_Equality(o, null) || o.isTrigger) {
                        return false;
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(o.GetComponent(MelonAd.Spike), null) || UnityEngine.MonoBehaviour.op_Inequality(o.GetComponent(MelonAd.Acid), null) || UnityEngine.MonoBehaviour.op_Inequality(o.GetComponent(MelonAd.MonsterPit), null)) {
                        return false;
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(o.GetComponent(MelonAd.RagdollPart), null)) {
                        return false;
                    }
                    var orb = o.attachedRigidbody;
                    if (UnityEngine.Component.op_Inequality(orb, null) && orb.bodyType === UnityEngine.RigidbodyType2D.Dynamic) {
                        return false;
                    } // chair, loose props
                    return true;
                },
                /*MelonAd.Ragdoll.IsGround:static end.*/


            }
        },
        fields: {
            parts: null,
            head: null,
            leftFoot: null,
            rightFoot: null,
            hole: null,
            holeDiameter: 0,
            headLift: 0,
            footPull: 0,
            Dead: false,
            kisDead: false,
            exitStayTime: 0,
            exitTimer: 0,
            smokeTimer: 0,
            holeT: 0,
            exitContacts: 0,
            groundContacts: 0,
            blockMask: null,
            eaten: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#init", this ); }

                this.blockMask = new UnityEngine.LayerMask();
                this.holeDiameter = 1.28;
                this.headLift = 25.0;
                this.footPull = 18.0;
                this.exitStayTime = 0.5;
                this.holeT = -1.0;
                this.blockMask = UnityEngine.LayerMask.op_Implicit$1(128);
            }
        },
        methods: {
            /*MelonAd.Ragdoll.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#FixedUpdate", this ); }

                if (this.Dead) {
                    return;
                }
                this.head.rb.AddForce(new pc.Vec2( 0.0, this.headLift ), UnityEngine.ForceMode2D.Impulse);
                this.leftFoot.rb.AddForce(new pc.Vec2( 0.0, -this.footPull ), UnityEngine.ForceMode2D.Impulse);
                this.rightFoot.rb.AddForce(new pc.Vec2( 0.0, -this.footPull ), UnityEngine.ForceMode2D.Impulse);
            },
            /*MelonAd.Ragdoll.FixedUpdate end.*/

            /*MelonAd.Ragdoll.IsFoot start.*/
            IsFoot: function (p) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#IsFoot", this ); }

                return UnityEngine.MonoBehaviour.op_Equality(p, this.leftFoot) || UnityEngine.MonoBehaviour.op_Equality(p, this.rightFoot);
            },
            /*MelonAd.Ragdoll.IsFoot end.*/

            /*MelonAd.Ragdoll.OnPartCollisionExit start.*/
            OnPartCollisionExit: function (p, c) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#OnPartCollisionExit", this ); }

                if (this.IsFoot(p) && MelonAd.Ragdoll.IsGround(c.collider) && this.groundContacts > 0) {
                    this.groundContacts = (this.groundContacts - 1) | 0;
                }
            },
            /*MelonAd.Ragdoll.OnPartCollisionExit end.*/

            /*MelonAd.Ragdoll.Grounded start.*/
            Grounded: function () {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#Grounded", this ); }

                return this.groundContacts > 0;
            },
            /*MelonAd.Ragdoll.Grounded end.*/

            /*MelonAd.Ragdoll.InExit start.*/
            InExit: function () {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#InExit", this ); }

                return this.exitContacts > 0;
            },
            /*MelonAd.Ragdoll.InExit end.*/

            /*MelonAd.Ragdoll.OnPartTriggerExit start.*/
            OnPartTriggerExit: function (p, other) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#OnPartTriggerExit", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(other.GetComponent(MelonAd.ExitZone), null) && this.exitContacts > 0) {
                    this.exitContacts = (this.exitContacts - 1) | 0;
                }
            },
            /*MelonAd.Ragdoll.OnPartTriggerExit end.*/

            /*MelonAd.Ragdoll.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#Update", this ); }

                var dt = UnityEngine.Mathf.Min(UnityEngine.Time.deltaTime, 0.05);
                // win only when alive, not dragged, standing on the ground and inside the exit zone
                var held = UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameManager.I, null) && MelonAd.GameManager.I.IsDragging;
                if (!this.Dead && !held && this.Grounded() && this.InExit()) {
                    this.exitTimer += dt;
                    if (this.exitTimer >= this.exitStayTime && UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameManager.I, null)) {
                        MelonAd.GameManager.I.OnExitReached();
                    }
                } else {
                    this.exitTimer = 0.0;
                }
                this.smokeTimer -= dt;
                if (this.holeT >= 0.0 && this.holeT < 1.0) {
                    this.holeT += dt / 1.5;
                    if (this.holeT > 1.0) {
                        this.holeT = 1.0;
                    }
                    var s = 13.8 * this.holeT / this.holeDiameter; // radius 690px at t=1
                    this.hole.transform.localScale = new pc.Vec3( s, s, 1.0 );
                }
            },
            /*MelonAd.Ragdoll.Update end.*/

            /*MelonAd.Ragdoll.OnPartCollision start.*/
            OnPartCollision: function (p, c) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#OnPartCollision", this ); }

                var other = c.collider;
                if (UnityEngine.MonoBehaviour.op_Inequality(other.GetComponent(MelonAd.FlameParticle), null)) {
                    if (!this.Blocked(other, c, p)) {
                        this.Burn(p);
                    }
                } else if (UnityEngine.MonoBehaviour.op_Inequality(other.GetComponent(MelonAd.Spike), null)) {
                    this.Melt(p);
                } else if (this.IsFoot(p) && MelonAd.Ragdoll.IsGround(other)) {
                    this.groundContacts = (this.groundContacts + 1) | 0;
                } else if (UnityEngine.MonoBehaviour.op_Inequality(other.GetComponent(MelonAd.Bullet), null)) {
                    if (!this.Blocked(other, c, p)) {
                        this.Shot(p);
                    }
                }
            },
            /*MelonAd.Ragdoll.OnPartCollision end.*/

            /*MelonAd.Ragdoll.Blocked start.*/
            /**
             * True if a static pin / wall lies between the hazard centre and the contact point.
             That only happens when a dragged body part was pushed into (or through) a pin, so the hit is ignored.
             *
             * @instance
             * @private
             * @this MelonAd.Ragdoll
             * @memberof MelonAd.Ragdoll
             * @param   {UnityEngine.Collider2D}     hazard    
             * @param   {UnityEngine.Collision2D}    c         
             * @param   {MelonAd.RagdollPart}        p
             * @return  {boolean}
             */
            Blocked: function (hazard, c, p) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#Blocked", this ); }

                var from = UnityEngine.Component.op_Inequality(hazard.attachedRigidbody, null) ? hazard.attachedRigidbody.position.$clone() : UnityEngine.Vector2.FromVector3(hazard.transform.position);
                var to = c.contactCount > 0 ? c.GetContact(0).point.$clone() : p.rb.position.$clone();
                var hits = UnityEngine.Physics2D.LinecastAll(from, to, UnityEngine.LayerMask.op_Implicit(this.blockMask.$clone()));
                for (var i = 0; i < hits.length; i = (i + 1) | 0) {
                    var h = hits[i].collider;
                    if (UnityEngine.Component.op_Equality(h, null) || UnityEngine.Component.op_Equality(h, hazard) || h.isTrigger) {
                        continue;
                    }
                    var rb = h.attachedRigidbody;
                    if (UnityEngine.Component.op_Inequality(rb, null) && rb.bodyType === UnityEngine.RigidbodyType2D.Dynamic) {
                        continue;
                    } // chair / spikes do not shield
                    return true;
                }
                return false;
            },
            /*MelonAd.Ragdoll.Blocked end.*/

            /*MelonAd.Ragdoll.OnPartTrigger start.*/
            OnPartTrigger: function (p, other) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#OnPartTrigger", this ); }

                var pit = other.GetComponent(MelonAd.MonsterPit);
                if (UnityEngine.MonoBehaviour.op_Inequality(pit, null)) {
                    this.Eaten(p, pit);
                } else {
                    if (UnityEngine.MonoBehaviour.op_Inequality(other.GetComponent(MelonAd.Acid), null)) {
                        this.Melt(p);
                    } else {
                        if (UnityEngine.MonoBehaviour.op_Inequality(other.GetComponent(MelonAd.ExitZone), null)) {
                            this.exitContacts = (this.exitContacts + 1) | 0;
                        }
                    }
                }
            },
            /*MelonAd.Ragdoll.OnPartTrigger end.*/

            /*MelonAd.Ragdoll.Burn start.*/
            Burn: function (p) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#Burn", this ); }

                MelonAd.AudioManager.I.PlayIfIdle(MelonAd.Sfx.Jar);
                if (this.smokeTimer < 0.0) {
                    this.smokeTimer = 0.5;
                    MelonAd.FxManager.I.BurnPuff(UnityEngine.Vector2.FromVector3(p.transform.position));
                    for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                        MelonAd.FxManager.I.BurnPuff(UnityEngine.Vector2.FromVector3(this.parts[i].transform.position));
                    }
                }
                if (this.kisDead) {
                    return;
                }
                this.kisDead = true;
                if (!MelonAd.AudioManager.I.IsPlaying(MelonAd.Sfx.Ohog) && !this.Dead) {
                    MelonAd.AudioManager.I.Play(MelonAd.Sfx.Ohog);
                }
                this.Die();
                for (var i1 = 0; i1 < this.parts.length; i1 = (i1 + 1) | 0) {
                    this.parts[i1].ShowBurnt(true);
                    this.parts[i1].ShowSkeleton(false);
                }
                this.StartHole(p);
            },
            /*MelonAd.Ragdoll.Burn end.*/

            /*MelonAd.Ragdoll.Melt start.*/
            Melt: function (p) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#Melt", this ); }

                if (this.kisDead) {
                    return;
                }
                this.kisDead = true;
                MelonAd.AudioManager.I.PlayIfIdle(MelonAd.Sfx.Doc);
                this.Die();
                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    this.parts[i].ShowBurnt(false);
                    this.parts[i].ShowSkeleton(true);
                }
                this.StartHole(p);
            },
            /*MelonAd.Ragdoll.Melt end.*/

            /*MelonAd.Ragdoll.Eaten start.*/
            /**
             * Fell into the monster pit: the monsters eat the body (alive or already dead).
             *
             * @instance
             * @private
             * @this MelonAd.Ragdoll
             * @memberof MelonAd.Ragdoll
             * @param   {MelonAd.RagdollPart}    p      
             * @param   {MelonAd.MonsterPit}     pit
             * @return  {void}
             */
            Eaten: function (p, pit) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#Eaten", this ); }

                if (this.eaten) {
                    return;
                }
                this.eaten = true;
                this.kisDead = true;
                MelonAd.AudioManager.I.PlayIfIdle(MelonAd.Sfx.Ohog);
                this.Die();
                pit.Eat(this, p);
            },
            /*MelonAd.Ragdoll.Eaten end.*/

            /*MelonAd.Ragdoll.Shot start.*/
            Shot: function (p) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#Shot", this ); }

                if (!this.kisDead) {
                    MelonAd.FxManager.I.Blood(UnityEngine.Vector2.FromVector3(p.transform.position), 15);
                }
                if (!this.Dead) {
                    MelonAd.AudioManager.I.PlayIfIdle(MelonAd.Sfx.Hurt);
                    this.Die();
                }
            },
            /*MelonAd.Ragdoll.Shot end.*/

            /*MelonAd.Ragdoll.StartHole start.*/
            StartHole: function (p) {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#StartHole", this ); }

                this.hole.transform.SetParent(p.transform, false);
                this.hole.transform.localPosition = pc.Vec3.ZERO.clone();
                this.hole.transform.localScale = pc.Vec3.ZERO.clone();
                this.hole.gameObject.SetActive(true);
                this.holeT = 0.0;
            },
            /*MelonAd.Ragdoll.StartHole end.*/

            /*MelonAd.Ragdoll.Die start.*/
            Die: function () {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#Die", this ); }

                if (this.Dead) {
                    return;
                }
                this.Dead = true;
                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameManager.I, null)) {
                    MelonAd.GameManager.I.OnManDied();
                }
            },
            /*MelonAd.Ragdoll.Die end.*/

            /*MelonAd.Ragdoll.ResetState start.*/
            ResetState: function () {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#ResetState", this ); }

                this.Dead = false;
                this.kisDead = false;
                this.eaten = false;
                this.exitContacts = 0;
                this.groundContacts = 0;
                this.exitTimer = 0.0;
                this.smokeTimer = 0.0;
                this.holeT = -1.0;
            },
            /*MelonAd.Ragdoll.ResetState end.*/


        }
    });
    /*MelonAd.Ragdoll end.*/

    /*MelonAd.RagdollPart start.*/
    /**
     * One body segment. Forwards contacts to the owning Ragdoll.
     *
     * @public
     * @class MelonAd.RagdollPart
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.RagdollPart", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            owner: null,
            rb: null,
            skin: null,
            skeleton: null,
            burnt: null,
            skinExtras: null,
            burntExtras: null
        },
        methods: {
            /*MelonAd.RagdollPart.ShowBurnt start.*/
            ShowBurnt: function (on) {
if ( TRACE ) { TRACE( "MelonAd.RagdollPart#ShowBurnt", this ); }

                if (UnityEngine.Component.op_Inequality(this.burnt, null)) {
                    this.burnt.enabled = on;
                }
                if (this.burntExtras != null) {
                    for (var i = 0; i < this.burntExtras.length; i = (i + 1) | 0) {
                        if (UnityEngine.Component.op_Inequality(this.burntExtras[i], null)) {
                            this.burntExtras[i].enabled = on;
                        }
                    }
                }
            },
            /*MelonAd.RagdollPart.ShowBurnt end.*/

            /*MelonAd.RagdollPart.ShowSkeleton start.*/
            ShowSkeleton: function (on) {
if ( TRACE ) { TRACE( "MelonAd.RagdollPart#ShowSkeleton", this ); }

                if (UnityEngine.Component.op_Inequality(this.skeleton, null)) {
                    this.skeleton.enabled = on;
                }
            },
            /*MelonAd.RagdollPart.ShowSkeleton end.*/

            /*MelonAd.RagdollPart.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (c) {
if ( TRACE ) { TRACE( "MelonAd.RagdollPart#OnCollisionEnter2D", this ); }

                this.owner.OnPartCollision(this, c);
            },
            /*MelonAd.RagdollPart.OnCollisionEnter2D end.*/

            /*MelonAd.RagdollPart.OnCollisionExit2D start.*/
            OnCollisionExit2D: function (c) {
if ( TRACE ) { TRACE( "MelonAd.RagdollPart#OnCollisionExit2D", this ); }

                this.owner.OnPartCollisionExit(this, c);
            },
            /*MelonAd.RagdollPart.OnCollisionExit2D end.*/

            /*MelonAd.RagdollPart.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (c) {
if ( TRACE ) { TRACE( "MelonAd.RagdollPart#OnTriggerEnter2D", this ); }

                this.owner.OnPartTrigger(this, c);
            },
            /*MelonAd.RagdollPart.OnTriggerEnter2D end.*/

            /*MelonAd.RagdollPart.OnTriggerExit2D start.*/
            OnTriggerExit2D: function (c) {
if ( TRACE ) { TRACE( "MelonAd.RagdollPart#OnTriggerExit2D", this ); }

                this.owner.OnPartTriggerExit(this, c);
            },
            /*MelonAd.RagdollPart.OnTriggerExit2D end.*/


        }
    });
    /*MelonAd.RagdollPart end.*/

    /*MelonAd.Rifle start.*/
    /**
     * Minigun (top right). Sweeps and fires every 50ms while the game runs; bullets are blocked by the right
     diagonal pin. When that pin is removed it keeps firing for 1.6s, then falls away.
     *
     * @public
     * @class MelonAd.Rifle
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.Rifle", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            bulletPrefab: null,
            bulletRoot: null,
            muzzle: null,
            poolSize: 0,
            width: 0,
            bulletSpeed: 0,
            pool: null,
            fireTimer: 0,
            burst: 0,
            tk: 0,
            flashT: 0,
            flashR: 0,
            canFire: false,
            falling: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.Rifle#init", this ); }

                this.poolSize = 24;
                this.width = 2.35;
                this.bulletSpeed = 40.0;
                this.fireTimer = 0.08;
                this.burst = -1.0;
                this.flashT = -1.0;
                this.canFire = true;
            }
        },
        methods: {
            /*MelonAd.Rifle.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MelonAd.Rifle#Start", this ); }

                this.pool = System.Array.init(this.poolSize, null, MelonAd.Bullet);
                for (var i = 0; i < this.poolSize; i = (i + 1) | 0) {
                    this.pool[i] = UnityEngine.Object.Instantiate(MelonAd.Bullet, this.bulletPrefab, this.bulletRoot);
                    this.pool[i].gameObject.SetActive(false);
                }
                if (UnityEngine.Component.op_Inequality(this.muzzle, null)) {
                    this.muzzle.enabled = false;
                }
            },
            /*MelonAd.Rifle.Start end.*/

            /*MelonAd.Rifle.OnPinRemoved start.*/
            OnPinRemoved: function () {
if ( TRACE ) { TRACE( "MelonAd.Rifle#OnPinRemoved", this ); }

                if (!this.canFire) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.AudioManager.I, null)) {
                    MelonAd.AudioManager.I.Play(MelonAd.Sfx.Fire);
                }
                this.burst = UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameConfig.I, null) ? MelonAd.GameConfig.I.rifleBurstAfterPin : 1.6;
                this.tk = 0.0;
            },
            /*MelonAd.Rifle.OnPinRemoved end.*/

            /*MelonAd.Rifle.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.Rifle#Update", this ); }

                var dt = UnityEngine.Mathf.Min(UnityEngine.Time.deltaTime, 0.05);
                this.tk += dt;
                this.UpdateFlash(dt);
                if (!this.canFire || this.falling) {
                    return;
                }

                this.transform.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, (1.1 + Math.abs(0.7 * Math.sin(this.tk))) * UnityEngine.Mathf.Rad2Deg );

                if (this.burst > 0.0) {
                    this.burst -= dt;
                    if (this.burst <= 0.0) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.AudioManager.I, null)) {
                            MelonAd.AudioManager.I.Stop(MelonAd.Sfx.Fire);
                        }
                        this.canFire = false;
                        this.StartCoroutine$1(this.Fall());
                        return;
                    }
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameManager.I, null) && MelonAd.GameManager.I.State === MelonAd.GameState.Run) {
                    this.fireTimer -= dt;
                }
                if (this.fireTimer <= 0.0) {
                    this.fireTimer = UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameConfig.I, null) ? MelonAd.GameConfig.I.rifleInterval : 0.05;
                    this.Shoot();
                }
            },
            /*MelonAd.Rifle.Update end.*/

            /*MelonAd.Rifle.Shoot start.*/
            Shoot: function () {
if ( TRACE ) { TRACE( "MelonAd.Rifle#Shoot", this ); }

                var a = this.transform.eulerAngles.z * UnityEngine.Mathf.Deg2Rad;
                var dir = new pc.Vec2( Math.cos(a), Math.sin(a) );
                var pos = UnityEngine.Vector2.FromVector3(this.transform.position).sub( dir.$clone().scale( (0.6 * this.width) ) );
                for (var i = 0; i < this.pool.length; i = (i + 1) | 0) {
                    if (this.pool[i].gameObject.activeSelf) {
                        continue;
                    }
                    this.pool[i].Launch(pos, dir.$clone().scale( -1 ).scale( this.bulletSpeed ));
                    break;
                }
                this.flashT = 0.0;
                this.flashR = 0.5 * UnityEngine.Random.value;
                if (UnityEngine.Component.op_Inequality(this.muzzle, null)) {
                    this.muzzle.enabled = true;
                }
            },
            /*MelonAd.Rifle.Shoot end.*/

            /*MelonAd.Rifle.UpdateFlash start.*/
            UpdateFlash: function (dt) {
if ( TRACE ) { TRACE( "MelonAd.Rifle#UpdateFlash", this ); }

                if (this.flashT < 0.0 || UnityEngine.Component.op_Equality(this.muzzle, null)) {
                    return;
                }
                this.flashT += dt / 0.1;
                if (this.flashT >= 1.0) {
                    this.flashT = -1.0;
                    this.muzzle.enabled = false;
                    return;
                }
                var s = 0.3 + Math.sin(UnityEngine.Mathf.PI * this.flashT) * this.flashR;
                this.muzzle.transform.localScale = new pc.Vec3( s, s, 1.0 );
                var c = this.muzzle.color.$clone();
                c.a = 1.0 - this.flashT;
                this.muzzle.color = c.$clone();
            },
            /*MelonAd.Rifle.UpdateFlash end.*/

            /*MelonAd.Rifle.Fall start.*/
            Fall: function () {
if ( TRACE ) { TRACE( "MelonAd.Rifle#Fall", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    p0,
                    rot0,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.falling = true;
                                        p0 = this.transform.position.$clone();
                                        rot0 = this.transform.eulerAngles.z;
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 1.75 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Mathf.Min(UnityEngine.Time.deltaTime, 0.05);
                                        this.transform.position = p0.$clone().add( new pc.Vec3( t, -12.5 * t * t, 0.0 ) );
                                        this.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, rot0 + 114.59156 * t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.gameObject.SetActive(false);

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
            /*MelonAd.Rifle.Fall end.*/

            /*MelonAd.Rifle.ResetState start.*/
            ResetState: function () {
if ( TRACE ) { TRACE( "MelonAd.Rifle#ResetState", this ); }

                this.StopAllCoroutines();
                this.fireTimer = 0.08;
                this.burst = -1.0;
                this.tk = 0.0;
                this.flashT = -1.0;
                this.canFire = true;
                this.falling = false;
                if (UnityEngine.Component.op_Inequality(this.muzzle, null)) {
                    this.muzzle.enabled = false;
                }
                if (this.pool != null) {
                    for (var i = 0; i < this.pool.length; i = (i + 1) | 0) {
                        this.pool[i].gameObject.SetActive(false);
                    }
                }
            },
            /*MelonAd.Rifle.ResetState end.*/


        }
    });
    /*MelonAd.Rifle end.*/

    /*MelonAd.Sfx start.*/
    Bridge.define("MelonAd.Sfx", {
        $kind: 6,
        statics: {
            fields: {
                Music: 0,
                Doc: 1,
                Door: 2,
                Fire: 3,
                Flame: 4,
                Hurt: 5,
                Jar: 6,
                Kis: 7,
                Ohog: 8,
                Complete: 9,
                Fail: 10,
                Thunder: 11,
                Rain: 12
            }
        }
    });
    /*MelonAd.Sfx end.*/

    /*MelonAd.Spike start.*/
    /**
     * Syringe spike. Kills the ragdoll on touch; shattered by bullets or by hitting another spike.
     *
     * @public
     * @class MelonAd.Spike
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.Spike", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            IsBroken: false
        },
        methods: {
            /*MelonAd.Spike.Break start.*/
            Break: function (shards) {
if ( TRACE ) { TRACE( "MelonAd.Spike#Break", this ); }

                if (this.IsBroken) {
                    return;
                }
                this.IsBroken = true;
                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.FxManager.I, null)) {
                    MelonAd.FxManager.I.Debris(MelonAd.FxManager.I.spikeShard, UnityEngine.Vector2.FromVector3(this.transform.position), shards);
                }
                this.gameObject.SetActive(false);
            },
            /*MelonAd.Spike.Break end.*/

            /*MelonAd.Spike.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (c) {
if ( TRACE ) { TRACE( "MelonAd.Spike#OnCollisionEnter2D", this ); }

                if (this.IsBroken) {
                    return;
                }
                var other = c.collider.GetComponent(MelonAd.Spike);
                if (UnityEngine.MonoBehaviour.op_Inequality(other, null) && !other.IsBroken) {
                    this.Break(5);
                    other.Break(5);
                }
            },
            /*MelonAd.Spike.OnCollisionEnter2D end.*/

            /*MelonAd.Spike.ResetState start.*/
            ResetState: function () {
if ( TRACE ) { TRACE( "MelonAd.Spike#ResetState", this ); }

                this.IsBroken = false;
            },
            /*MelonAd.Spike.ResetState end.*/


        }
    });
    /*MelonAd.Spike end.*/

    /*MelonAd.StormFx start.*/
    /**
     * Ambient storm (ported from the storm VFX package: RainEffect + LightningStrike + ScreenFx + StormPower).
     Rain = pooled sprites, lightning = sprite segments (no ParticleSystem / LineRenderer, Luna-safe),
     flash = full-screen UI Image. Purely visual: lightning strikes the far background and never hurts the man.
     All sizes are authored for an orthographic size of 5 and scaled to the current camera.
     *
     * @public
     * @class MelonAd.StormFx
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.StormFx", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                AuthoredOrtho: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#init", this ); }

                    this.AuthoredOrtho = 5.0;
                }
            },
            methods: {
                /*MelonAd.StormFx.Respawn:static start.*/
                Respawn: function (t, r, vel, spread) {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Respawn", this ); }

                    // shifted right to compensate the wind blowing left
                    var drift = -vel.x / -vel.y * r.height;
                    var x = UnityEngine.Random.Range$1(r.xMin, r.xMax + drift);
                    var y = spread ? UnityEngine.Random.Range$1(r.yMin, r.yMax + r.height * 0.2) : r.yMax + UnityEngine.Random.Range$1(0.0, r.height * 0.1);
                    t.position = new pc.Vec3( x, y, 0.0 );
                },
                /*MelonAd.StormFx.Respawn:static end.*/


            }
        },
        fields: {
            cam: null,
            whiteSprite: null,
            flash: null,
            playOnStart: false,
            maxDrops: 0,
            rainVelocity: null,
            dropSize: null,
            rainColor: null,
            rainFadeIn: 0,
            rainSortingOrder: 0,
            strikeInterval: null,
            extraFlashChance: 0,
            coreColor: null,
            glowColor: null,
            coreWidth: 0,
            glowWidth: 0,
            mainSegments: 0,
            branchSegments: 0,
            branches: 0,
            jitter: 0,
            boltSortingOrder: 0,
            flashStrength: 0,
            groundRange: null,
            drops: null,
            intensity: 0,
            target: 0,
            pool: null,
            nextStrike: 0,
            running: false,
            audioCheck: 0,
            flashRoutine: null
        },
        props: {
            Scale: {
                get: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Scale#get", this ); }

                    return UnityEngine.Component.op_Inequality(this.cam, null) ? this.cam.orthographicSize / MelonAd.StormFx.AuthoredOrtho : 1.0;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#init", this ); }

                this.rainVelocity = new UnityEngine.Vector2();
                this.dropSize = new UnityEngine.Vector2();
                this.rainColor = new UnityEngine.Color();
                this.strikeInterval = new UnityEngine.Vector2();
                this.coreColor = new UnityEngine.Color();
                this.glowColor = new UnityEngine.Color();
                this.groundRange = new UnityEngine.Vector2();
                this.playOnStart = true;
                this.maxDrops = 90;
                this.rainVelocity = new pc.Vec2( -3.0, -16.0 );
                this.dropSize = new pc.Vec2( 0.025, 0.45 );
                this.rainColor = new pc.Color( 0.75, 0.85, 1.0, 0.45 );
                this.rainFadeIn = 0.8;
                this.rainSortingOrder = 450;
                this.strikeInterval = new pc.Vec2( 2.5, 5.5 );
                this.extraFlashChance = 0.35;
                this.coreColor = new pc.Color( 1, 1, 1, 1 );
                this.glowColor = new pc.Color( 0.6, 0.8, 1.0, 0.35 );
                this.coreWidth = 0.035;
                this.glowWidth = 0.1;
                this.mainSegments = 18;
                this.branchSegments = 5;
                this.branches = 2;
                this.jitter = 0.22;
                this.boltSortingOrder = -50;
                this.flashStrength = 0.35;
                this.groundRange = new pc.Vec2( 0.08, 0.3 );
                this.pool = new (System.Collections.Generic.Queue$1(MelonAd.StormFx.Bolt)).ctor();
            }
        },
        methods: {
            /*MelonAd.StormFx.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.cam, null)) {
                    this.cam = UnityEngine.Camera.main;
                }
                this.SetFlash(0.0);
            },
            /*MelonAd.StormFx.Awake end.*/

            /*MelonAd.StormFx.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Start", this ); }

                if (this.playOnStart) {
                    this.Begin();
                }
            },
            /*MelonAd.StormFx.Start end.*/

            /*MelonAd.StormFx.CamRect start.*/
            CamRect: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#CamRect", this ); }

                var h = this.cam.orthographicSize * 2.0;
                var w = h * this.cam.aspect;
                var p = this.cam.transform.position.$clone();
                return new UnityEngine.Rect.$ctor1(p.x - w * 0.5, p.y - h * 0.5, w, h);
            },
            /*MelonAd.StormFx.CamRect end.*/

            /*MelonAd.StormFx.Begin start.*/
            Begin: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Begin", this ); }

                this.InitRain();
                this.target = 1.0;
                this.running = true;
                this.nextStrike = UnityEngine.Time.time + UnityEngine.Random.Range$1(0.8, 1.6);
                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.AudioManager.I, null)) {
                    MelonAd.AudioManager.I.PlayIfIdle(MelonAd.Sfx.Rain);
                }
            },
            /*MelonAd.StormFx.Begin end.*/

            /*MelonAd.StormFx.Stop start.*/
            Stop: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Stop", this ); }

                this.target = 0.0;
                this.running = false;
                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.AudioManager.I, null)) {
                    MelonAd.AudioManager.I.Stop(MelonAd.Sfx.Rain);
                }
            },
            /*MelonAd.StormFx.Stop end.*/

            /*MelonAd.StormFx.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Update", this ); }

                if (UnityEngine.Component.op_Equality(this.cam, null)) {
                    return;
                }
                this.UpdateRain();
                // keep the rain loop going (on web the first Play can be swallowed until the user taps)
                this.audioCheck -= UnityEngine.Time.deltaTime;
                if (this.running && this.audioCheck <= 0.0 && UnityEngine.MonoBehaviour.op_Inequality(MelonAd.AudioManager.I, null)) {
                    this.audioCheck = 0.5;
                    MelonAd.AudioManager.I.PlayIfIdle(MelonAd.Sfx.Rain);
                }
                if (this.running && UnityEngine.Time.time >= this.nextStrike) {
                    this.nextStrike = UnityEngine.Time.time + UnityEngine.Random.Range$1(this.strikeInterval.x, this.strikeInterval.y);
                    this.Strike();
                    if (UnityEngine.Random.value < this.extraFlashChance) {
                        this.StartCoroutine$1(this.LateFlash(UnityEngine.Random.Range$1(0.35, 0.7)));
                    }
                }
            },
            /*MelonAd.StormFx.Update end.*/

            /*MelonAd.StormFx.LateFlash start.*/
            LateFlash: function (delay) {
if ( TRACE ) { TRACE( "MelonAd.StormFx#LateFlash", this ); }

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
                                    this.Flash(0.2);

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
            /*MelonAd.StormFx.LateFlash end.*/

            /*MelonAd.StormFx.InitRain start.*/
            InitRain: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#InitRain", this ); }

                if (this.drops != null || this.whiteSprite == null) {
                    return;
                }
                this.drops = System.Array.init(this.maxDrops, null, UnityEngine.SpriteRenderer);
                for (var i = 0; i < this.maxDrops; i = (i + 1) | 0) {
                    var sr = this.CreateSprite("Drop", this.transform, this.rainSortingOrder);
                    sr.color = this.rainColor.$clone();
                    sr.gameObject.SetActive(false);
                    this.drops[i] = sr;
                }
            },
            /*MelonAd.StormFx.InitRain end.*/

            /*MelonAd.StormFx.UpdateRain start.*/
            UpdateRain: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#UpdateRain", this ); }

                if (this.drops == null) {
                    return;
                }
                var dt = UnityEngine.Time.deltaTime;
                var speed = 1.0 / UnityEngine.Mathf.Max(0.01, this.rainFadeIn);
                this.intensity = UnityEngine.Mathf.MoveTowards(this.intensity, this.target, speed * dt);
                var wanted = Math.round(this.maxDrops * this.intensity);

                var k = this.Scale;
                var vel = this.rainVelocity.$clone().scale( k );
                var size = UnityEngine.Vector2.FromVector3(this.whiteSprite.bounds.halfExtents.$clone().scale( 2 ).$clone());
                var dropScale = new pc.Vec3( this.dropSize.x * k / size.x, this.dropSize.y * k / size.y, 1.0 );
                var rot = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, Math.atan2(vel.y, vel.x) * UnityEngine.Mathf.Rad2Deg + 90.0 );
                var r = this.CamRect();

                for (var i = 0; i < this.drops.length; i = (i + 1) | 0) {
                    var t = this.drops[i].transform;
                    if (!this.drops[i].gameObject.activeSelf) {
                        if (i >= wanted) {
                            continue;
                        }
                        MelonAd.StormFx.Respawn(t, r, vel, true);
                        this.drops[i].gameObject.SetActive(true);
                    }
                    t.localScale = dropScale.$clone();
                    t.rotation = rot.$clone();
                    t.position = t.position.$clone().add( UnityEngine.Vector3.FromVector2((vel.$clone().scale( dt ))) );
                    if (t.position.y < r.yMin) {
                        if (i < wanted) {
                            MelonAd.StormFx.Respawn(t, r, vel, false);
                        } else {
                            this.drops[i].gameObject.SetActive(false);
                        }
                    }
                }
            },
            /*MelonAd.StormFx.UpdateRain end.*/

            /*MelonAd.StormFx.Strike start.*/
            Strike: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Strike", this ); }

                if (this.whiteSprite == null) {
                    return;
                }
                var r = this.CamRect();
                var ground = new pc.Vec2( UnityEngine.Random.Range$1(r.xMin + r.width * 0.1, r.xMax - r.width * 0.1), r.yMin + r.height * UnityEngine.Random.Range$1(this.groundRange.x, this.groundRange.y) );
                var bolt = this.pool.Count > 0 ? this.pool.Dequeue() : this.CreateBolt();
                this.Build(bolt, ground.$clone());
                this.Flash(this.flashStrength);
                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.AudioManager.I, null)) {
                    MelonAd.AudioManager.I.PlayOverlap(MelonAd.Sfx.Thunder);
                }
                this.StartCoroutine$1(this.Play(bolt, ground));
            },
            /*MelonAd.StormFx.Strike end.*/

            /*MelonAd.StormFx.CreateBolt start.*/
            CreateBolt: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx#CreateBolt", this ); }

                var b = new MelonAd.StormFx.Bolt();
                b.root = new UnityEngine.GameObject.$ctor2("Bolt");
                b.root.transform.SetParent(this.transform, false);
                var total = (this.mainSegments + Bridge.Int.mul(this.branchSegments, this.branches)) | 0;
                for (var i = 0; i < total; i = (i + 1) | 0) {
                    b.glows.add(this.CreateSprite("Glow", b.root.transform, this.boltSortingOrder));
                    b.cores.add(this.CreateSprite("Core", b.root.transform, ((this.boltSortingOrder + 1) | 0)));
                }
                return b;
            },
            /*MelonAd.StormFx.CreateBolt end.*/

            /*MelonAd.StormFx.Build start.*/
            Build: function (bolt, ground) {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Build", this ); }

                var k = this.Scale;
                var r = this.CamRect();
                var start = new pc.Vec2( ground.x + UnityEngine.Random.Range$1(-0.4, 0.4) * k, r.yMax + 0.5 * k );
                var points = new (System.Collections.Generic.List$1(UnityEngine.Vector2)).ctor();
                for (var i = 0; i <= this.mainSegments; i = (i + 1) | 0) {
                    var t = i / this.mainSegments;
                    var p = new pc.Vec2().lerp( start, ground, t );
                    if (i > 0 && i < this.mainSegments) {
                        p.x += UnityEngine.Random.Range$1(-this.jitter, this.jitter) * k;
                    }
                    points.add(p.$clone());
                }

                bolt.used = 0;
                for (var i1 = 0; i1 < this.mainSegments; i1 = (i1 + 1) | 0) {
                    this.SetSegment(bolt, points.getItem(i1), points.getItem(((i1 + 1) | 0)), k, 1.0);
                }

                var len = (start.y - ground.y) / this.mainSegments;
                for (var b = 0; b < this.branches; b = (b + 1) | 0) {
                    var from = UnityEngine.Random.Range(2, ((this.mainSegments - 2) | 0));
                    var p1 = points.getItem(from).$clone();
                    var dir = UnityEngine.Random.value < 0.5 ? -1.0 : 1.0;
                    for (var i2 = 0; i2 < this.branchSegments; i2 = (i2 + 1) | 0) {
                        var next = p1.$clone().add( new pc.Vec2( dir * UnityEngine.Random.Range$1(0.2, 0.5) * k, -len * UnityEngine.Random.Range$1(0.6, 1.0) ) );
                        next.y = UnityEngine.Mathf.Max(next.y, ground.y);
                        this.SetSegment(bolt, p1, next, k, 0.5);
                        p1 = next.$clone();
                    }
                }

                for (var i3 = bolt.used; i3 < bolt.cores.Count; i3 = (i3 + 1) | 0) {
                    bolt.cores.getItem(i3).enabled = false;
                    bolt.glows.getItem(i3).enabled = false;
                }
                bolt.root.SetActive(true);
            },
            /*MelonAd.StormFx.Build end.*/

            /*MelonAd.StormFx.SetSegment start.*/
            SetSegment: function (bolt, a, b, k, widthMul) {
if ( TRACE ) { TRACE( "MelonAd.StormFx#SetSegment", this ); }

                var i = Bridge.identity(bolt.used, ((bolt.used = (bolt.used + 1) | 0)));
                this.Place(bolt.glows.getItem(i), a, b, this.glowWidth * k * widthMul, this.glowColor);
                this.Place(bolt.cores.getItem(i), a, b, this.coreWidth * k * widthMul, this.coreColor);
            },
            /*MelonAd.StormFx.SetSegment end.*/

            /*MelonAd.StormFx.Place start.*/
            Place: function (sr, a, b, width, color) {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Place", this ); }

                var d = b.$clone().sub( a );
                var size = UnityEngine.Vector2.FromVector3(this.whiteSprite.bounds.halfExtents.$clone().scale( 2 ).$clone());
                sr.enabled = true;
                sr.color = color.$clone();
                sr.transform.position = UnityEngine.Vector3.FromVector2((a.$clone().add( b )).scale( 0.5 ));
                sr.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, Math.atan2(d.y, d.x) * UnityEngine.Mathf.Rad2Deg );
                sr.transform.localScale = new pc.Vec3( (d.length() + width * 0.5) / size.x, width / size.y, 1.0 );
            },
            /*MelonAd.StormFx.Place end.*/

            /*MelonAd.StormFx.Play start.*/
            Play: function (bolt, ground) {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Play", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    fade,
                    a,
                    c,
                    g,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // flicker: on, off, re-strike with a new shape, then fade
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.06);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    bolt.root.SetActive(false);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.05);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.Build(bolt, ground.$clone());
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.08);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    t = 0.0;
                                        fade = 0.2;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    if ( t < fade ) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    t += UnityEngine.Time.deltaTime;
                                        a = 1.0 - t / fade;
                                        for (var i = 0; i < bolt.used; i = (i + 1) | 0) {
                                            c = this.coreColor.$clone();
                                            c.a *= a;
                                            bolt.cores.getItem(i).color = c.$clone();
                                            g = this.glowColor.$clone();
                                            g.a *= a;
                                            bolt.glows.getItem(i).color = g.$clone();
                                        }
                                        $enumerator.current = null;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    
                                        $step = 4;
                                        continue;
                                }
                                case 7: {
                                    bolt.root.SetActive(false);
                                        this.pool.Enqueue(bolt);

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
            /*MelonAd.StormFx.Play end.*/

            /*MelonAd.StormFx.Flash start.*/
            Flash: function (strength) {
if ( TRACE ) { TRACE( "MelonAd.StormFx#Flash", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.flash, null)) {
                    return;
                }
                if (this.flashRoutine != null) {
                    this.StopCoroutine$2(this.flashRoutine);
                }
                this.flashRoutine = this.StartCoroutine$1(this.FlashRoutine(strength));
            },
            /*MelonAd.StormFx.Flash end.*/

            /*MelonAd.StormFx.FlashRoutine start.*/
            FlashRoutine: function (strength) {
if ( TRACE ) { TRACE( "MelonAd.StormFx#FlashRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    from,
                    t,
                    dur,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.SetFlash(strength);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.05);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.SetFlash(0.0);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.05);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.SetFlash(strength * 0.7);
                                        from = strength * 0.7;
                                        t = 0.0;
                                        dur = 0.25;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( t < dur ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime;
                                        this.SetFlash(pc.math.lerp(from, 0.0, t / dur));
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    this.SetFlash(0.0);
                                        this.flashRoutine = null;

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
            /*MelonAd.StormFx.FlashRoutine end.*/

            /*MelonAd.StormFx.SetFlash start.*/
            SetFlash: function (a) {
if ( TRACE ) { TRACE( "MelonAd.StormFx#SetFlash", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.flash, null)) {
                    return;
                }
                var c = this.flash.color.$clone();
                c.a = a;
                this.flash.color = c.$clone();
                this.flash.enabled = a > 0.001;
            },
            /*MelonAd.StormFx.SetFlash end.*/

            /*MelonAd.StormFx.CreateSprite start.*/
            CreateSprite: function (name, parent, order) {
if ( TRACE ) { TRACE( "MelonAd.StormFx#CreateSprite", this ); }

                var go = new UnityEngine.GameObject.$ctor2(name);
                go.transform.SetParent(parent, false);
                var sr = go.AddComponent(UnityEngine.SpriteRenderer);
                sr.sprite = this.whiteSprite;
                sr.sortingOrder = order;
                return sr;
            },
            /*MelonAd.StormFx.CreateSprite end.*/


        }
    });
    /*MelonAd.StormFx end.*/

    /*MelonAd.StormFx+Bolt start.*/
    Bridge.define("MelonAd.StormFx.Bolt", {
        $kind: 1002,
        fields: {
            root: null,
            cores: null,
            glows: null,
            used: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.StormFx.Bolt#init", this ); }

                this.cores = new (System.Collections.Generic.List$1(UnityEngine.SpriteRenderer)).ctor();
                this.glows = new (System.Collections.Generic.List$1(UnityEngine.SpriteRenderer)).ctor();
            }
        }
    });
    /*MelonAd.StormFx+Bolt end.*/

    /*MelonAd.UIController start.*/
    /**
     * Drives the hint (bobbing head), the FAIL popup and the WIN popup.
     All layout lives on the Canvas in the scene and is freely editable:
     animations are applied RELATIVE to the position / scale / rotation you set in the editor.
     FailRoot / WinRoot can be left active while editing; they are hidden automatically at start.
     *
     * @public
     * @class MelonAd.UIController
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.UIController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*MelonAd.UIController.Wiggle:static start.*/
                Wiggle: function (t) {
if ( TRACE ) { TRACE( "MelonAd.UIController#Wiggle", this ); }

                    return -Math.sin(6.0 * t * UnityEngine.Mathf.PI) * Math.sin(t * UnityEngine.Mathf.PI) / 7.0 * UnityEngine.Mathf.Rad2Deg;
                },
                /*MelonAd.UIController.Wiggle:static end.*/


            }
        },
        fields: {
            hint: null,
            head: null,
            failRoot: null,
            panel: null,
            panelGroup: null,
            button: null,
            finger: null,
            retryButton: null,
            winRoot: null,
            winPanel: null,
            winPanelGroup: null,
            winButton: null,
            winFinger: null,
            nextButton: null,
            introRoot: null,
            introCard: null,
            introGroup: null,
            introDuration: 0,
            introFade: 0,
            slideDistance: 0,
            slideDuration: 0,
            pulseDuration: 0,
            wiggleDuration: 0,
            fail: null,
            win: null,
            introScale0: null,
            introT: 0,
            introOutT: 0,
            headScale0: null,
            headRot0: null,
            headT: 0,
            headPhase: 0
        },
        props: {
            /**
             * True while the intro panel is on screen (gameplay input is ignored).
             *
             * @instance
             * @public
             * @readonly
             * @memberof MelonAd.UIController
             * @function IntroActive
             * @type boolean
             */
            IntroActive: {
                get: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#IntroActive#get", this ); }

                    return UnityEngine.GameObject.op_Inequality(this.introRoot, null) && this.introRoot.activeSelf && this.introOutT < 0.0;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#init", this ); }

                this.introScale0 = new UnityEngine.Vector3();
                this.headScale0 = new UnityEngine.Vector3();
                this.headRot0 = new UnityEngine.Quaternion();
                this.introDuration = 2.5;
                this.introFade = 0.3;
                this.slideDistance = 1000.0;
                this.slideDuration = 0.25;
                this.pulseDuration = 3.0;
                this.wiggleDuration = 1.2;
                this.introT = -1.0;
                this.introOutT = -1.0;
            }
        },
        methods: {
            /*MelonAd.UIController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#Awake", this ); }

                var $t;
                if (UnityEngine.Component.op_Inequality(this.head, null)) {
                    this.headScale0 = this.head.localScale.$clone();
                    this.headRot0 = this.head.localRotation.$clone();
                }
                this.fail = ($t = new MelonAd.UIController.Popup(), $t.root = this.failRoot, $t.panel = this.panel, $t.group = this.panelGroup, $t.button = this.button, $t.finger = this.finger, $t);
                this.win = ($t = new MelonAd.UIController.Popup(), $t.root = this.winRoot, $t.panel = this.winPanel, $t.group = this.winPanelGroup, $t.button = this.winButton, $t.finger = this.winFinger, $t);
                this.fail.Init();
                this.win.Init();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.retryButton, null)) {
                    this.retryButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnRetryClicked));
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.nextButton, null)) {
                    this.nextButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnNextClicked));
                }
                if (UnityEngine.GameObject.op_Inequality(this.introRoot, null)) {
                    if (UnityEngine.Component.op_Inequality(this.introCard, null)) {
                        this.introScale0 = this.introCard.localScale.$clone();
                    }
                    this.introRoot.SetActive(true);
                    this.introT = 0.0;
                    this.introOutT = -1.0;
                    this.ApplyIntro();
                }
            },
            /*MelonAd.UIController.Awake end.*/

            /*MelonAd.UIController.DismissIntro start.*/
            /**
             * Starts the intro fade-out (called on the first tap).
             *
             * @instance
             * @public
             * @this MelonAd.UIController
             * @memberof MelonAd.UIController
             * @return  {void}
             */
            DismissIntro: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#DismissIntro", this ); }

                if (UnityEngine.GameObject.op_Equality(this.introRoot, null) || !this.introRoot.activeSelf || this.introOutT >= 0.0) {
                    return;
                }
                this.introOutT = 0.0;
            },
            /*MelonAd.UIController.DismissIntro end.*/

            /*MelonAd.UIController.TickIntro start.*/
            TickIntro: function (dt) {
if ( TRACE ) { TRACE( "MelonAd.UIController#TickIntro", this ); }

                if (UnityEngine.GameObject.op_Equality(this.introRoot, null) || !this.introRoot.activeSelf) {
                    return;
                }
                this.introT += dt;
                if (this.introOutT < 0.0 && this.introT >= this.introDuration) {
                    this.introOutT = 0.0;
                }
                if (this.introOutT >= 0.0) {
                    this.introOutT += dt / UnityEngine.Mathf.Max(0.01, this.introFade);
                    if (this.introOutT >= 1.0) {
                        this.introRoot.SetActive(false);
                        return;
                    }
                }
                this.ApplyIntro();
            },
            /*MelonAd.UIController.TickIntro end.*/

            /*MelonAd.UIController.ApplyIntro start.*/
            ApplyIntro: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#ApplyIntro", this ); }

                // pop in (overshoot) + gentle breathing, then fade/shrink out
                var k = Math.max(0, Math.min(1, this.introT / 0.35));
                var pop = k < 1.0 ? k + 0.5 * Math.sin(UnityEngine.Mathf.PI * k) : 1.0 + 0.03 * Math.sin((this.introT - 0.35) * 4.0);
                var a = 1.0;
                if (this.introOutT >= 0.0) {
                    a = 1.0 - this.introOutT;
                    pop *= 1.0 - 0.2 * this.introOutT;
                }
                if (UnityEngine.Component.op_Inequality(this.introCard, null)) {
                    this.introCard.localScale = this.introScale0.$clone().clone().scale( pop );
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.introGroup, null)) {
                    this.introGroup.alpha = a;
                }
            },
            /*MelonAd.UIController.ApplyIntro end.*/

            /*MelonAd.UIController.OnRetryClicked start.*/
            OnRetryClicked: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#OnRetryClicked", this ); }

                if (this.fail.t < 1.0) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameManager.I, null)) {
                    MelonAd.GameManager.I.OnFailButton();
                }
            },
            /*MelonAd.UIController.OnRetryClicked end.*/

            /*MelonAd.UIController.OnNextClicked start.*/
            OnNextClicked: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#OnNextClicked", this ); }

                MelonAd.LunaBridge.GameEnded();
                MelonAd.LunaBridge.InstallFullGame();
            },
            /*MelonAd.UIController.OnNextClicked end.*/

            /*MelonAd.UIController.ShowHint start.*/
            ShowHint: function (visible) {
if ( TRACE ) { TRACE( "MelonAd.UIController#ShowHint", this ); }

                if (UnityEngine.GameObject.op_Equality(this.hint, null) || this.hint.activeSelf === visible) {
                    return;
                }
                this.hint.SetActive(visible);
                this.headT = 0.0;
                this.headPhase = 0;
                if (UnityEngine.Component.op_Equality(this.head, null)) {
                    return;
                }
                this.head.localScale = this.headScale0.$clone();
                this.head.localRotation = this.headRot0.$clone();
            },
            /*MelonAd.UIController.ShowHint end.*/

            /*MelonAd.UIController.ShowFail start.*/
            ShowFail: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#ShowFail", this ); }

                this.fail.Show(this);
            },
            /*MelonAd.UIController.ShowFail end.*/

            /*MelonAd.UIController.HideFail start.*/
            HideFail: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#HideFail", this ); }

                this.fail.Hide();
            },
            /*MelonAd.UIController.HideFail end.*/

            /*MelonAd.UIController.ShowWin start.*/
            ShowWin: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#ShowWin", this ); }

                this.win.Show(this);
            },
            /*MelonAd.UIController.ShowWin end.*/

            /*MelonAd.UIController.HideWin start.*/
            HideWin: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#HideWin", this ); }

                this.win.Hide();
            },
            /*MelonAd.UIController.HideWin end.*/

            /*MelonAd.UIController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#Update", this ); }

                var dt = UnityEngine.Mathf.Min(UnityEngine.Time.deltaTime, 0.05);
                this.TickIntro(dt);
                if (UnityEngine.GameObject.op_Inequality(this.hint, null) && this.hint.activeSelf && UnityEngine.Component.op_Inequality(this.head, null)) {
                    this.AnimateHead(dt);
                }
                this.fail.Tick(this, dt);
                this.win.Tick(this, dt);
            },
            /*MelonAd.UIController.Update end.*/

            /*MelonAd.UIController.AnimateHead start.*/
            AnimateHead: function (dt) {
if ( TRACE ) { TRACE( "MelonAd.UIController#AnimateHead", this ); }

                var dur = this.headPhase === 0 ? this.pulseDuration : this.wiggleDuration;
                this.headT += dt / dur;
                if (this.headT >= 1.0) {
                    this.headT = 0.0;
                    this.headPhase = (1 - this.headPhase) | 0;
                    this.head.localScale = this.headScale0.$clone();
                    this.head.localRotation = this.headRot0.$clone();
                }
                if (this.headPhase === 0) {
                    this.head.localScale = this.headScale0.$clone().clone().scale( (1.0 + Math.sin(9.424778 * this.headT) / 20.0) );
                } else {
                    this.head.localRotation = this.headRot0.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, MelonAd.UIController.Wiggle(this.headT) ) );
                }
            },
            /*MelonAd.UIController.AnimateHead end.*/


        }
    });
    /*MelonAd.UIController end.*/

    /*MelonAd.UIController+Popup start.*/
    /**
     * Slide-in panel + pulsing / wiggling button with a tapping finger.
     *
     * @private
     * @class MelonAd.UIController.Popup
     */
    Bridge.define("MelonAd.UIController.Popup", {
        $kind: 1002,
        fields: {
            root: null,
            panel: null,
            button: null,
            finger: null,
            group: null,
            panelPos0: null,
            buttonScale0: null,
            fingerScale0: null,
            buttonRot0: null,
            t: 0,
            btnT: 0,
            btnPhase: 0
        },
        props: {
            Valid: {
                get: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController.Popup#Valid#get", this ); }

                    return UnityEngine.GameObject.op_Inequality(this.root, null) && UnityEngine.Component.op_Inequality(this.panel, null);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController.Popup#init", this ); }

                this.panelPos0 = new UnityEngine.Vector2();
                this.buttonScale0 = new UnityEngine.Vector3();
                this.fingerScale0 = new UnityEngine.Vector3();
                this.buttonRot0 = new UnityEngine.Quaternion();
                this.t = -1.0;
            }
        },
        methods: {
            /*MelonAd.UIController+Popup.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController.Popup#Init", this ); }

                if (!this.Valid) {
                    return;
                }
                this.panelPos0 = this.panel.anchoredPosition.$clone();
                if (UnityEngine.Component.op_Inequality(this.button, null)) {
                    this.buttonScale0 = this.button.localScale.$clone();
                    this.buttonRot0 = this.button.localRotation.$clone();
                }
                if (UnityEngine.Component.op_Inequality(this.finger, null)) {
                    this.fingerScale0 = this.finger.localScale.$clone();
                }
                this.root.SetActive(false);
            },
            /*MelonAd.UIController+Popup.Init end.*/

            /*MelonAd.UIController+Popup.Show start.*/
            Show: function (ui) {
if ( TRACE ) { TRACE( "MelonAd.UIController.Popup#Show", this ); }

                if (!this.Valid) {
                    return;
                }
                this.root.SetActive(true);
                this.t = 0.0;
                this.btnT = 0.0;
                this.btnPhase = 0;
                if (UnityEngine.Component.op_Inequality(this.finger, null)) {
                    this.finger.gameObject.SetActive(false);
                }
                if (UnityEngine.Component.op_Inequality(this.button, null)) {
                    this.button.localScale = this.buttonScale0.$clone();
                    this.button.localRotation = this.buttonRot0.$clone();
                }
                this.Apply(ui, 0.0);
            },
            /*MelonAd.UIController+Popup.Show end.*/

            /*MelonAd.UIController+Popup.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController.Popup#Hide", this ); }

                if (!this.Valid) {
                    return;
                }
                this.root.SetActive(false);
                this.t = -1.0;
                this.panel.anchoredPosition = this.panelPos0.$clone();
            },
            /*MelonAd.UIController+Popup.Hide end.*/

            /*MelonAd.UIController+Popup.Tick start.*/
            Tick: function (ui, dt) {
if ( TRACE ) { TRACE( "MelonAd.UIController.Popup#Tick", this ); }

                if (this.t < 0.0) {
                    return;
                }
                if (this.t < 1.0) {
                    this.t += dt / ui.slideDuration;
                    if (this.t > 1.0) {
                        this.t = 1.0;
                    }
                    this.Apply(ui, this.t);
                } else {
                    this.AnimateButton(ui, dt);
                }
            },
            /*MelonAd.UIController+Popup.Tick end.*/

            /*MelonAd.UIController+Popup.Apply start.*/
            Apply: function (ui, k0) {
if ( TRACE ) { TRACE( "MelonAd.UIController.Popup#Apply", this ); }

                var k = k0 + 0.4 * Math.sin(UnityEngine.Mathf.PI * k0);
                this.panel.anchoredPosition = this.panelPos0.$clone().add( new pc.Vec2( 0.0, ui.slideDistance * (1.0 - k) ) );
                if (UnityEngine.MonoBehaviour.op_Inequality(this.group, null)) {
                    this.group.alpha = UnityEngine.Mathf.Min(1.0, 10.0 * k0);
                }
            },
            /*MelonAd.UIController+Popup.Apply end.*/

            /*MelonAd.UIController+Popup.AnimateButton start.*/
            AnimateButton: function (ui, dt) {
if ( TRACE ) { TRACE( "MelonAd.UIController.Popup#AnimateButton", this ); }

                if (UnityEngine.Component.op_Equality(this.button, null)) {
                    return;
                }
                var dur = this.btnPhase === 0 ? ui.pulseDuration : ui.wiggleDuration;
                this.btnT += dt / dur;
                if (this.btnT >= 1.0) {
                    this.btnT = 0.0;
                    this.btnPhase = (1 - this.btnPhase) | 0;
                    this.button.localScale = this.buttonScale0.$clone();
                    this.button.localRotation = this.buttonRot0.$clone();
                    if (UnityEngine.Component.op_Inequality(this.finger, null)) {
                        this.finger.gameObject.SetActive(this.btnPhase === 1);
                    }
                }
                if (this.btnPhase === 0) {
                    this.button.localScale = this.buttonScale0.$clone().clone().scale( (1.0 + Math.sin(9.424778 * this.btnT) / 20.0) );
                } else {
                    if (UnityEngine.Component.op_Inequality(this.finger, null)) {
                        this.finger.localScale = this.fingerScale0.$clone().clone().scale( (1.0 - Math.sin(UnityEngine.Mathf.PI * this.btnT) / 8.0) );
                    }
                    this.button.localRotation = this.buttonRot0.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, MelonAd.UIController.Wiggle(this.btnT) ) );
                }
            },
            /*MelonAd.UIController+Popup.AnimateButton end.*/


        }
    });
    /*MelonAd.UIController+Popup end.*/

    /*MelonAd.UICover start.*/
    /**
     * Makes an Image / RawImage cover its parent rect while keeping the picture aspect.
     *
     * @public
     * @class MelonAd.UICover
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("MelonAd.UICover", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null
        },
        methods: {
            /*MelonAd.UICover.Aspect start.*/
            Aspect: function () {
if ( TRACE ) { TRACE( "MelonAd.UICover#Aspect", this ); }

                var img = Bridge.as(this.target, UnityEngine.UI.Image);
                if (UnityEngine.MonoBehaviour.op_Inequality(img, null) && img.sprite != null) {
                    return img.sprite.rect.width / img.sprite.rect.height;
                }
                var raw = Bridge.as(this.target, UnityEngine.UI.RawImage);
                if (UnityEngine.MonoBehaviour.op_Inequality(raw, null) && raw.texture != null) {
                    return raw.texture.width / raw.texture.height;
                }
                return 0.0;
            },
            /*MelonAd.UICover.Aspect end.*/

            /*MelonAd.UICover.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "MelonAd.UICover#LateUpdate", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.target, null)) {
                    return;
                }
                var aspect = this.Aspect();
                if (aspect <= 0.0) {
                    return;
                }
                var rt = Bridge.cast(this.transform, UnityEngine.RectTransform);
                var parent = Bridge.as(rt.parent, UnityEngine.RectTransform);
                if (UnityEngine.Component.op_Equality(parent, null)) {
                    return;
                }
                var pr = parent.rect.$clone();
                var w = pr.width;
                var h = pr.height;
                if (w / UnityEngine.Mathf.Max(1.0, h) > aspect) {
                    h = w / aspect;
                } else {
                    w = h * aspect;
                }
                var size = new pc.Vec2( w, h );
                if (!pc.Vec2.equals( rt.sizeDelta, size )) {
                    rt.sizeDelta = size.$clone();
                }
            },
            /*MelonAd.UICover.LateUpdate end.*/


        }
    });
    /*MelonAd.UICover end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections","UnityEngine.UI","UnityEngine","System.Collections.Generic","MelonAd"];

    /*LunaController start.*/
    $m("LunaController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ApplyCharacter","t":8,"sn":"ApplyCharacter","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ClickCTA","t":8,"sn":"ClickCTA","rt":$n[0].Void},{"a":1,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[1].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"BGImage","t":4,"rt":$n[2].RawImage,"sn":"BGImage"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("BG Image", 0, null)],"a":2,"n":"BGTexture","t":4,"rt":$n[3].Texture2D,"sn":"BGTexture"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"CTA","t":4,"rt":$n[4].List$1(UnityEngine.UI.Button),"sn":"CTA"},{"at":[new UnityEngine.HeaderAttribute("Character"),new UnityEngine.LunaPlaygroundFieldAttribute("Character (0-5)", -1, null, false, null),new UnityEngine.RangeAttribute(0.0, 5.0)],"a":2,"n":"Character","t":4,"rt":$n[0].Int32,"sn":"Character","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Time Play", -1, null, false, null)],"a":2,"n":"TimePlay","t":4,"rt":$n[0].Single,"sn":"TimePlay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Limit Time Play?", -1, null, false, null)],"a":2,"n":"UseTime","t":4,"rt":$n[0].Boolean,"sn":"UseTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"characterSelector","t":4,"rt":$n[5].CharacterSelector,"sn":"characterSelector"}]}; }, $n);
    /*LunaController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*MelonAd.Sfx start.*/
    $m("MelonAd.Sfx", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Complete","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Complete","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Doc","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Doc","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Door","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Door","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Fail","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Fail","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Fire","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Fire","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Flame","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Flame","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Hurt","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Hurt","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Jar","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Jar","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Kis","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Kis","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Music","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Music","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Ohog","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Ohog","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Rain","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Rain","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Thunder","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Thunder","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}}]}; }, $n);
    /*MelonAd.Sfx end.*/

    /*MelonAd.AudioManager start.*/
    $m("MelonAd.AudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"IsPlaying","t":8,"pi":[{"n":"s","pt":$n[5].Sfx,"ps":0}],"sn":"IsPlaying","rt":$n[0].Boolean,"p":[$n[5].Sfx],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Play","t":8,"pi":[{"n":"s","pt":$n[5].Sfx,"ps":0}],"sn":"Play","rt":$n[0].Void,"p":[$n[5].Sfx]},{"a":2,"n":"PlayIfIdle","t":8,"pi":[{"n":"s","pt":$n[5].Sfx,"ps":0}],"sn":"PlayIfIdle","rt":$n[0].Void,"p":[$n[5].Sfx]},{"a":2,"n":"PlayOverlap","t":8,"pi":[{"n":"s","pt":$n[5].Sfx,"ps":0}],"sn":"PlayOverlap","rt":$n[0].Void,"p":[$n[5].Sfx]},{"a":2,"n":"Stop","t":8,"pi":[{"n":"s","pt":$n[5].Sfx,"ps":0}],"sn":"Stop","rt":$n[0].Void,"p":[$n[5].Sfx]},{"a":2,"n":"I","is":true,"t":4,"rt":$n[5].AudioManager,"sn":"I"},{"at":[new UnityEngine.HeaderAttribute("Result")],"a":2,"n":"complete","t":4,"rt":$n[3].AudioClip,"sn":"complete"},{"a":2,"n":"doc","t":4,"rt":$n[3].AudioClip,"sn":"doc"},{"a":2,"n":"door","t":4,"rt":$n[3].AudioClip,"sn":"door"},{"a":2,"n":"fail","t":4,"rt":$n[3].AudioClip,"sn":"fail"},{"a":2,"n":"fire","t":4,"rt":$n[3].AudioClip,"sn":"fire"},{"a":2,"n":"flame","t":4,"rt":$n[3].AudioClip,"sn":"flame"},{"a":2,"n":"hurt","t":4,"rt":$n[3].AudioClip,"sn":"hurt"},{"a":2,"n":"jar","t":4,"rt":$n[3].AudioClip,"sn":"jar"},{"a":2,"n":"kis","t":4,"rt":$n[3].AudioClip,"sn":"kis"},{"a":2,"n":"music","t":4,"rt":$n[3].AudioClip,"sn":"music"},{"a":2,"n":"ohog","t":4,"rt":$n[3].AudioClip,"sn":"ohog"},{"a":2,"n":"rain","t":4,"rt":$n[3].AudioClip,"sn":"rain"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"rainVolume","t":4,"rt":$n[0].Single,"sn":"rainVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"sources","t":4,"rt":System.Array.type(UnityEngine.AudioSource),"sn":"sources"},{"at":[new UnityEngine.HeaderAttribute("Storm")],"a":2,"n":"thunder","t":4,"rt":$n[3].AudioClip,"sn":"thunder"}]}; }, $n);
    /*MelonAd.AudioManager end.*/

    /*MelonAd.CameraFit start.*/
    $m("MelonAd.CameraFit", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Camera)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Apply","t":8,"sn":"Apply","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"cam","t":4,"rt":$n[3].Camera,"sn":"cam"},{"at":[new UnityEngine.TooltipAttribute("World units shown for the reference height (1920px).")],"a":2,"n":"designHeight","t":4,"rt":$n[0].Single,"sn":"designHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"referenceResolution","t":4,"rt":$n[3].Vector2,"sn":"referenceResolution"}]}; }, $n);
    /*MelonAd.CameraFit end.*/

    /*MelonAd.GameConfig start.*/
    $m("MelonAd.GameConfig", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"I","is":true,"t":4,"rt":$n[5].GameConfig,"sn":"I"},{"a":2,"n":"androidLink","t":4,"rt":$n[0].String,"sn":"androidLink"},{"a":2,"n":"failPopupDelay","t":4,"rt":$n[0].Single,"sn":"failPopupDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"flameRate","t":4,"rt":$n[0].Single,"sn":"flameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"iosLink","t":4,"rt":$n[0].String,"sn":"iosLink"},{"a":2,"n":"pinTapRadius","t":4,"rt":$n[0].Single,"sn":"pinTapRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"retries","t":4,"rt":$n[0].Int32,"sn":"retries","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"rifleBurstAfterPin","t":4,"rt":$n[0].Single,"sn":"rifleBurstAfterPin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rifleInterval","t":4,"rt":$n[0].Single,"sn":"rifleInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Show tutorial fingers", 6, "Tutorial", false, null)],"a":2,"n":"showTutorial","t":4,"rt":$n[0].Boolean,"sn":"showTutorial","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*MelonAd.GameConfig end.*/

    /*MelonAd.GameState start.*/
    $m("MelonAd.GameState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Fail","is":true,"t":4,"rt":$n[5].GameState,"sn":"Fail","box":function ($v) { return Bridge.box($v, MelonAd.GameState, System.Enum.toStringFn(MelonAd.GameState));}},{"a":2,"n":"Run","is":true,"t":4,"rt":$n[5].GameState,"sn":"Run","box":function ($v) { return Bridge.box($v, MelonAd.GameState, System.Enum.toStringFn(MelonAd.GameState));}},{"a":2,"n":"Win","is":true,"t":4,"rt":$n[5].GameState,"sn":"Win","box":function ($v) { return Bridge.box($v, MelonAd.GameState, System.Enum.toStringFn(MelonAd.GameState));}}]}; }, $n);
    /*MelonAd.GameState end.*/

    /*MelonAd.GameManager start.*/
    $m("MelonAd.GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BeginRound","t":8,"sn":"BeginRound","rt":$n[0].Void},{"a":1,"n":"ConfirmWin","t":8,"sn":"ConfirmWin","rt":$n[1].IEnumerator},{"a":1,"n":"DoWin","t":8,"sn":"DoWin","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"HideFingers","t":8,"sn":"HideFingers","rt":$n[0].Void},{"a":2,"n":"OnExitReached","t":8,"sn":"OnExitReached","rt":$n[0].Void},{"a":2,"n":"OnFailButton","t":8,"sn":"OnFailButton","rt":$n[0].Void},{"a":2,"n":"OnManDied","t":8,"sn":"OnManDied","rt":$n[0].Void},{"a":1,"n":"OnPointerDown","t":8,"pi":[{"n":"p","pt":$n[3].Vector2,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].Vector2]},{"a":2,"n":"OnTimeUp","t":8,"sn":"OnTimeUp","rt":$n[0].Void},{"a":1,"n":"RemovePin","t":8,"pi":[{"n":"pin","pt":$n[5].Pin,"ps":0}],"sn":"RemovePin","rt":$n[0].Void,"p":[$n[5].Pin]},{"a":1,"n":"ScreenToWorld","t":8,"pi":[{"n":"sp","pt":$n[3].Vector3,"ps":0}],"sn":"ScreenToWorld","rt":$n[3].Vector2,"p":[$n[3].Vector3]},{"a":1,"n":"SetDragFingerAlpha","t":8,"pi":[{"n":"a","pt":$n[0].Single,"ps":0}],"sn":"SetDragFingerAlpha","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"ShowFailLater","t":8,"sn":"ShowFailLater","rt":$n[1].IEnumerator},{"a":1,"n":"ShowWinLater","t":8,"sn":"ShowWinLater","rt":$n[1].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartDrag","t":8,"pi":[{"n":"g","pt":$n[5].Grabbable,"ps":0},{"n":"p","pt":$n[3].Vector2,"ps":1}],"sn":"StartDrag","rt":$n[0].Void,"p":[$n[5].Grabbable,$n[3].Vector2]},{"a":1,"n":"TutorialOn","t":8,"sn":"TutorialOn","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateTutorial","t":8,"pi":[{"n":"dt","pt":$n[0].Single,"ps":0}],"sn":"UpdateTutorial","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"WorldScale","t":8,"sn":"WorldScale","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ZoomToExit","t":8,"sn":"ZoomToExit","rt":$n[1].IEnumerator},{"a":2,"n":"IsDragging","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsDragging","t":8,"rt":$n[0].Boolean,"fg":"IsDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsDragging"},{"a":2,"n":"State","t":16,"rt":$n[5].GameState,"g":{"a":2,"n":"get_State","t":8,"rt":$n[5].GameState,"fg":"State","box":function ($v) { return Bridge.box($v, MelonAd.GameState, System.Enum.toStringFn(MelonAd.GameState));}},"s":{"a":1,"n":"set_State","t":8,"p":[$n[5].GameState],"rt":$n[0].Void,"fs":"State"},"fn":"State"},{"a":2,"n":"I","is":true,"t":4,"rt":$n[5].GameManager,"sn":"I"},{"a":2,"n":"cam","t":4,"rt":$n[3].Camera,"sn":"cam"},{"at":[new UnityEngine.TooltipAttribute("Invisible full-screen CTA shown on time-out / fail / win (no auto redirect).")],"a":2,"n":"cta","t":4,"rt":$n[5].CtaOverlay,"sn":"cta"},{"a":2,"n":"dragDamping","t":4,"rt":$n[0].Single,"sn":"dragDamping","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dragFinger","t":4,"rt":$n[3].Transform,"sn":"dragFinger"},{"a":2,"n":"dragFingerSprite","t":4,"rt":$n[3].SpriteRenderer,"sn":"dragFingerSprite"},{"at":[new UnityEngine.HeaderAttribute("Drag spring (Box2D mouse joint defaults)")],"a":2,"n":"dragFrequency","t":4,"rt":$n[0].Single,"sn":"dragFrequency","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragGrab","t":4,"rt":$n[5].Grabbable,"sn":"dragGrab"},{"a":1,"n":"dragHintActive","t":4,"rt":$n[0].Boolean,"sn":"dragHintActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"dragMaxForce","t":4,"rt":$n[0].Single,"sn":"dragMaxForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragStart","t":4,"rt":$n[3].Vector3,"sn":"dragStart"},{"a":1,"n":"dragT","t":4,"rt":$n[0].Single,"sn":"dragT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragTarget","t":4,"rt":$n[3].Vector2,"sn":"dragTarget"},{"a":1,"n":"firstRound","t":4,"rt":$n[0].Boolean,"sn":"firstRound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Scene refs")],"a":2,"n":"level","t":4,"rt":$n[5].LevelRefs,"sn":"level"},{"a":1,"n":"musicStarted","t":4,"rt":$n[0].Boolean,"sn":"musicStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pickMask","t":4,"rt":$n[3].LayerMask,"sn":"pickMask"},{"a":1,"n":"retriesUsed","t":4,"rt":$n[0].Int32,"sn":"retriesUsed","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tapFinger","t":4,"rt":$n[3].Transform,"sn":"tapFinger"},{"at":[new UnityEngine.HeaderAttribute("Tutorial")],"a":2,"n":"tapFingerOffset","t":4,"rt":$n[3].Vector2,"sn":"tapFingerOffset"},{"a":1,"n":"tapT","t":4,"rt":$n[0].Single,"sn":"tapT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ui","t":4,"rt":$n[5].UIController,"sn":"ui"},{"a":2,"n":"winFocus","t":4,"rt":$n[3].Vector2,"sn":"winFocus"},{"a":1,"n":"winPending","t":4,"rt":$n[0].Boolean,"sn":"winPending","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Seconds after reaching the exit before the WIN popup slides in.")],"a":2,"n":"winPopupDelay","t":4,"rt":$n[0].Single,"sn":"winPopupDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Win zoom (original: scale 0.38 -> 0.58 centred on the exit)")],"a":2,"n":"winZoom","t":4,"rt":$n[0].Single,"sn":"winZoom","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"winZoomDuration","t":4,"rt":$n[0].Single,"sn":"winZoomDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"zoomPos0","t":4,"rt":$n[3].Vector2,"sn":"zoomPos0"},{"a":2,"n":"zoomRoot","t":4,"rt":$n[3].RectTransform,"sn":"zoomRoot"},{"a":1,"n":"zoomRoutine","t":4,"rt":$n[3].Coroutine,"sn":"zoomRoutine"},{"a":1,"n":"zoomScale0","t":4,"rt":$n[3].Vector3,"sn":"zoomScale0"},{"a":1,"backing":true,"n":"<State>k__BackingField","t":4,"rt":$n[5].GameState,"sn":"State","box":function ($v) { return Bridge.box($v, MelonAd.GameState, System.Enum.toStringFn(MelonAd.GameState));}}]}; }, $n);
    /*MelonAd.GameManager end.*/

    /*MelonAd.FxKind start.*/
    $m("MelonAd.FxKind", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Bubble","is":true,"t":4,"rt":$n[5].FxKind,"sn":"Bubble","box":function ($v) { return Bridge.box($v, MelonAd.FxKind, System.Enum.toStringFn(MelonAd.FxKind));}},{"a":2,"n":"Debris","is":true,"t":4,"rt":$n[5].FxKind,"sn":"Debris","box":function ($v) { return Bridge.box($v, MelonAd.FxKind, System.Enum.toStringFn(MelonAd.FxKind));}},{"a":2,"n":"FlamePuff","is":true,"t":4,"rt":$n[5].FxKind,"sn":"FlamePuff","box":function ($v) { return Bridge.box($v, MelonAd.FxKind, System.Enum.toStringFn(MelonAd.FxKind));}},{"a":2,"n":"Smoke","is":true,"t":4,"rt":$n[5].FxKind,"sn":"Smoke","box":function ($v) { return Bridge.box($v, MelonAd.FxKind, System.Enum.toStringFn(MelonAd.FxKind));}}]}; }, $n);
    /*MelonAd.FxKind end.*/

    /*MelonAd.FxManager start.*/
    $m("MelonAd.FxManager", function () { return {"nested":[$n[5].FxManager.Fx],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Blood","t":8,"pi":[{"n":"p","pt":$n[3].Vector2,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"Blood","rt":$n[0].Void,"p":[$n[3].Vector2,$n[0].Int32]},{"a":2,"n":"Bubble","t":8,"pi":[{"n":"p","pt":$n[3].Vector2,"ps":0}],"sn":"Bubble","rt":$n[0].Void,"p":[$n[3].Vector2]},{"a":2,"n":"BurnPuff","t":8,"pi":[{"n":"p","pt":$n[3].Vector2,"ps":0}],"sn":"BurnPuff","rt":$n[0].Void,"p":[$n[3].Vector2]},{"a":2,"n":"ClearAll","t":8,"sn":"ClearAll","rt":$n[0].Void},{"a":1,"n":"Create","t":8,"sn":"Create","rt":$n[5].FxManager.Fx},{"a":2,"n":"Debris","t":8,"pi":[{"n":"sp","pt":$n[3].Sprite,"ps":0},{"n":"p","pt":$n[3].Vector2,"ps":1},{"n":"count","pt":$n[0].Int32,"ps":2}],"sn":"Debris","rt":$n[0].Void,"p":[$n[3].Sprite,$n[3].Vector2,$n[0].Int32]},{"a":1,"n":"RandOffset","is":true,"t":8,"pi":[{"n":"radius","pt":$n[0].Single,"ps":0}],"sn":"RandOffset","rt":$n[3].Vector2,"p":[$n[0].Single]},{"a":1,"n":"SetAlpha","is":true,"t":8,"pi":[{"n":"f","pt":$n[5].FxManager.Fx,"ps":0},{"n":"a","pt":$n[0].Single,"ps":1}],"sn":"SetAlpha","rt":$n[0].Void,"p":[$n[5].FxManager.Fx,$n[0].Single]},{"a":1,"n":"Take","t":8,"pi":[{"n":"kind","pt":$n[5].FxKind,"ps":0},{"n":"sp","pt":$n[3].Sprite,"ps":1},{"n":"dur","pt":$n[0].Single,"ps":2},{"n":"delay","pt":$n[0].Single,"ps":3}],"sn":"Take","rt":$n[5].FxManager.Fx,"p":[$n[5].FxKind,$n[3].Sprite,$n[0].Single,$n[0].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"I","is":true,"t":4,"rt":$n[5].FxManager,"sn":"I"},{"a":2,"n":"blood","t":4,"rt":$n[3].Sprite,"sn":"blood"},{"a":2,"n":"bubble","t":4,"rt":$n[3].Sprite,"sn":"bubble"},{"a":2,"n":"bulletShard","t":4,"rt":$n[3].Sprite,"sn":"bulletShard"},{"a":2,"n":"flame","t":4,"rt":$n[3].Sprite,"sn":"flame"},{"a":1,"n":"pool","t":4,"rt":$n[4].List$1(MelonAd.FxManager.Fx),"sn":"pool","ro":true},{"a":2,"n":"prewarm","t":4,"rt":$n[0].Int32,"sn":"prewarm","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"smoke","t":4,"rt":$n[3].Sprite,"sn":"smoke"},{"a":2,"n":"sortingOrder","t":4,"rt":$n[0].Int32,"sn":"sortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"spikeShard","t":4,"rt":$n[3].Sprite,"sn":"spikeShard"}]}; }, $n);
    /*MelonAd.FxManager end.*/

    /*MelonAd.FxManager+Fx start.*/
    $m("MelonAd.FxManager.Fx", function () { return {"td":$n[5].FxManager,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"active","t":4,"rt":$n[0].Boolean,"sn":"active","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dur","t":4,"rt":$n[0].Single,"sn":"dur","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dx","t":4,"rt":$n[0].Single,"sn":"dx","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"go","t":4,"rt":$n[3].GameObject,"sn":"go"},{"a":2,"n":"kind","t":4,"rt":$n[5].FxKind,"sn":"kind","box":function ($v) { return Bridge.box($v, MelonAd.FxKind, System.Enum.toStringFn(MelonAd.FxKind));}},{"a":2,"n":"l","t":4,"rt":$n[0].Single,"sn":"l","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"s","t":4,"rt":$n[0].Single,"sn":"s","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"sr","t":4,"rt":$n[3].SpriteRenderer,"sn":"sr"},{"a":2,"n":"sx","t":4,"rt":$n[0].Single,"sn":"sx","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"t","t":4,"rt":$n[3].Transform,"sn":"t"},{"a":2,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"vv","t":4,"rt":$n[0].Single,"sn":"vv","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"w","t":4,"rt":$n[0].Single,"sn":"w","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"y","t":4,"rt":$n[0].Single,"sn":"y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MelonAd.FxManager+Fx end.*/

    /*MelonAd.StormFx start.*/
    $m("MelonAd.StormFx", function () { return {"nested":[$n[5].StormFx.Bolt],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Begin","t":8,"sn":"Begin","rt":$n[0].Void},{"a":1,"n":"Build","t":8,"pi":[{"n":"bolt","pt":$n[5].StormFx.Bolt,"ps":0},{"n":"ground","pt":$n[3].Vector2,"ps":1}],"sn":"Build","rt":$n[0].Void,"p":[$n[5].StormFx.Bolt,$n[3].Vector2]},{"a":1,"n":"CamRect","t":8,"sn":"CamRect","rt":$n[3].Rect},{"a":1,"n":"CreateBolt","t":8,"sn":"CreateBolt","rt":$n[5].StormFx.Bolt},{"a":1,"n":"CreateSprite","t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0},{"n":"parent","pt":$n[3].Transform,"ps":1},{"n":"order","pt":$n[0].Int32,"ps":2}],"sn":"CreateSprite","rt":$n[3].SpriteRenderer,"p":[$n[0].String,$n[3].Transform,$n[0].Int32]},{"a":2,"n":"Flash","t":8,"pi":[{"n":"strength","pt":$n[0].Single,"ps":0}],"sn":"Flash","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"FlashRoutine","t":8,"pi":[{"n":"strength","pt":$n[0].Single,"ps":0}],"sn":"FlashRoutine","rt":$n[1].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"InitRain","t":8,"sn":"InitRain","rt":$n[0].Void},{"a":1,"n":"LateFlash","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"LateFlash","rt":$n[1].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"Place","t":8,"pi":[{"n":"sr","pt":$n[3].SpriteRenderer,"ps":0},{"n":"a","pt":$n[3].Vector2,"ps":1},{"n":"b","pt":$n[3].Vector2,"ps":2},{"n":"width","pt":$n[0].Single,"ps":3},{"n":"color","pt":$n[3].Color,"ps":4}],"sn":"Place","rt":$n[0].Void,"p":[$n[3].SpriteRenderer,$n[3].Vector2,$n[3].Vector2,$n[0].Single,$n[3].Color]},{"a":1,"n":"Play","t":8,"pi":[{"n":"bolt","pt":$n[5].StormFx.Bolt,"ps":0},{"n":"ground","pt":$n[3].Vector2,"ps":1}],"sn":"Play","rt":$n[1].IEnumerator,"p":[$n[5].StormFx.Bolt,$n[3].Vector2]},{"a":1,"n":"Respawn","is":true,"t":8,"pi":[{"n":"t","pt":$n[3].Transform,"ps":0},{"n":"r","pt":$n[3].Rect,"ps":1},{"n":"vel","pt":$n[3].Vector2,"ps":2},{"n":"spread","pt":$n[0].Boolean,"ps":3}],"sn":"Respawn","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Rect,$n[3].Vector2,$n[0].Boolean]},{"a":1,"n":"SetFlash","t":8,"pi":[{"n":"a","pt":$n[0].Single,"ps":0}],"sn":"SetFlash","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"SetSegment","t":8,"pi":[{"n":"bolt","pt":$n[5].StormFx.Bolt,"ps":0},{"n":"a","pt":$n[3].Vector2,"ps":1},{"n":"b","pt":$n[3].Vector2,"ps":2},{"n":"k","pt":$n[0].Single,"ps":3},{"n":"widthMul","pt":$n[0].Single,"ps":4}],"sn":"SetSegment","rt":$n[0].Void,"p":[$n[5].StormFx.Bolt,$n[3].Vector2,$n[3].Vector2,$n[0].Single,$n[0].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":2,"n":"Strike","t":8,"sn":"Strike","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateRain","t":8,"sn":"UpdateRain","rt":$n[0].Void},{"a":1,"n":"Scale","t":16,"rt":$n[0].Single,"g":{"a":1,"n":"get_Scale","t":8,"rt":$n[0].Single,"fg":"Scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Scale"},{"a":1,"n":"AuthoredOrtho","is":true,"t":4,"rt":$n[0].Single,"sn":"AuthoredOrtho","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"audioCheck","t":4,"rt":$n[0].Single,"sn":"audioCheck","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Behind the level walls (10) but above the sky canvas (-2000).")],"a":2,"n":"boltSortingOrder","t":4,"rt":$n[0].Int32,"sn":"boltSortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"branchSegments","t":4,"rt":$n[0].Int32,"sn":"branchSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"branches","t":4,"rt":$n[0].Int32,"sn":"branches","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"cam","t":4,"rt":$n[3].Camera,"sn":"cam"},{"a":2,"n":"coreColor","t":4,"rt":$n[3].Color,"sn":"coreColor"},{"a":2,"n":"coreWidth","t":4,"rt":$n[0].Single,"sn":"coreWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dropSize","t":4,"rt":$n[3].Vector2,"sn":"dropSize"},{"a":1,"n":"drops","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"drops"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"extraFlashChance","t":4,"rt":$n[0].Single,"sn":"extraFlashChance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Full-screen white Image used for the lightning flash.")],"a":2,"n":"flash","t":4,"rt":$n[2].Image,"sn":"flash"},{"a":1,"n":"flashRoutine","t":4,"rt":$n[3].Coroutine,"sn":"flashRoutine"},{"a":2,"n":"flashStrength","t":4,"rt":$n[0].Single,"sn":"flashStrength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"glowColor","t":4,"rt":$n[3].Color,"sn":"glowColor"},{"a":2,"n":"glowWidth","t":4,"rt":$n[0].Single,"sn":"glowWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Where bolts hit, as a fraction of the screen height from the bottom (min, max).")],"a":2,"n":"groundRange","t":4,"rt":$n[3].Vector2,"sn":"groundRange"},{"a":1,"n":"intensity","t":4,"rt":$n[0].Single,"sn":"intensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"jitter","t":4,"rt":$n[0].Single,"sn":"jitter","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"mainSegments","t":4,"rt":$n[0].Int32,"sn":"mainSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Rain")],"a":2,"n":"maxDrops","t":4,"rt":$n[0].Int32,"sn":"maxDrops","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"nextStrike","t":4,"rt":$n[0].Single,"sn":"nextStrike","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"playOnStart","t":4,"rt":$n[0].Boolean,"sn":"playOnStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"pool","t":4,"rt":$n[4].Queue$1(MelonAd.StormFx.Bolt),"sn":"pool","ro":true},{"a":2,"n":"rainColor","t":4,"rt":$n[3].Color,"sn":"rainColor"},{"a":2,"n":"rainFadeIn","t":4,"rt":$n[0].Single,"sn":"rainFadeIn","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rainSortingOrder","t":4,"rt":$n[0].Int32,"sn":"rainSortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"rainVelocity","t":4,"rt":$n[3].Vector2,"sn":"rainVelocity"},{"a":1,"n":"running","t":4,"rt":$n[0].Boolean,"sn":"running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Lightning")],"a":2,"n":"strikeInterval","t":4,"rt":$n[3].Vector2,"sn":"strikeInterval"},{"a":1,"n":"target","t":4,"rt":$n[0].Single,"sn":"target","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("4x4 white sprite used for rain drops and bolt segments.")],"a":2,"n":"whiteSprite","t":4,"rt":$n[3].Sprite,"sn":"whiteSprite"}]}; }, $n);
    /*MelonAd.StormFx end.*/

    /*MelonAd.StormFx+Bolt start.*/
    $m("MelonAd.StormFx.Bolt", function () { return {"td":$n[5].StormFx,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"cores","t":4,"rt":$n[4].List$1(UnityEngine.SpriteRenderer),"sn":"cores","ro":true},{"a":2,"n":"glows","t":4,"rt":$n[4].List$1(UnityEngine.SpriteRenderer),"sn":"glows","ro":true},{"a":2,"n":"root","t":4,"rt":$n[3].GameObject,"sn":"root"},{"a":2,"n":"used","t":4,"rt":$n[0].Int32,"sn":"used","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*MelonAd.StormFx+Bolt end.*/

    /*MelonAd.ExitZone start.*/
    $m("MelonAd.ExitZone", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*MelonAd.ExitZone end.*/

    /*MelonAd.Grabbable start.*/
    $m("MelonAd.Grabbable", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CanGrab","t":8,"sn":"CanGrab","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"owner","t":4,"rt":$n[5].Ragdoll,"sn":"owner"},{"a":2,"n":"rb","t":4,"rt":$n[3].Rigidbody2D,"sn":"rb"}]}; }, $n);
    /*MelonAd.Grabbable end.*/

    /*MelonAd.LevelRefs start.*/
    $m("MelonAd.LevelRefs", function () { return {"nested":[$n[5].LevelRefs.TState],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Capture","t":8,"sn":"Capture","rt":$n[0].Void},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":2,"n":"ResetLevel","t":8,"sn":"ResetLevel","rt":$n[0].Void},{"a":1,"n":"bodies","t":4,"rt":System.Array.type(UnityEngine.Rigidbody2D),"sn":"bodies"},{"a":1,"n":"colliderEnabled","t":4,"rt":$n[4].List$1(System.Boolean),"sn":"colliderEnabled","ro":true},{"a":1,"n":"colliders","t":4,"rt":$n[4].List$1(UnityEngine.Collider2D),"sn":"colliders","ro":true},{"a":2,"n":"dynamicRoot","t":4,"rt":$n[3].Transform,"sn":"dynamicRoot"},{"a":2,"n":"flameThrower","t":4,"rt":$n[5].FlameThrower,"sn":"flameThrower"},{"a":1,"n":"initialized","t":4,"rt":$n[0].Boolean,"sn":"initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"man","t":4,"rt":$n[5].Ragdoll,"sn":"man"},{"a":1,"n":"rendererColor","t":4,"rt":$n[4].List$1(UnityEngine.Color),"sn":"rendererColor","ro":true},{"a":1,"n":"rendererEnabled","t":4,"rt":$n[4].List$1(System.Boolean),"sn":"rendererEnabled","ro":true},{"a":1,"n":"renderers","t":4,"rt":$n[4].List$1(UnityEngine.SpriteRenderer),"sn":"renderers","ro":true},{"a":2,"n":"rifle","t":4,"rt":$n[5].Rifle,"sn":"rifle"},{"a":1,"n":"transforms","t":4,"rt":$n[4].List$1(MelonAd.LevelRefs.TState),"sn":"transforms","ro":true},{"a":2,"n":"tutorPin","t":4,"rt":$n[5].Pin,"sn":"tutorPin"}]}; }, $n);
    /*MelonAd.LevelRefs end.*/

    /*MelonAd.LevelRefs+TState start.*/
    $m("MelonAd.LevelRefs.TState", function () { return {"td":$n[5].LevelRefs,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"active","t":4,"rt":$n[0].Boolean,"sn":"active","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"parent","t":4,"rt":$n[3].Transform,"sn":"parent"},{"a":2,"n":"pos","t":4,"rt":$n[3].Vector3,"sn":"pos"},{"a":2,"n":"rot","t":4,"rt":$n[3].Quaternion,"sn":"rot"},{"a":2,"n":"scale","t":4,"rt":$n[3].Vector3,"sn":"scale"},{"a":2,"n":"t","t":4,"rt":$n[3].Transform,"sn":"t"}]}; }, $n);
    /*MelonAd.LevelRefs+TState end.*/

    /*MelonAd.PinEvent start.*/
    $m("MelonAd.PinEvent", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Fire","is":true,"t":4,"rt":$n[5].PinEvent,"sn":"Fire","box":function ($v) { return Bridge.box($v, MelonAd.PinEvent, System.Enum.toStringFn(MelonAd.PinEvent));}},{"a":2,"n":"Flame","is":true,"t":4,"rt":$n[5].PinEvent,"sn":"Flame","box":function ($v) { return Bridge.box($v, MelonAd.PinEvent, System.Enum.toStringFn(MelonAd.PinEvent));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[5].PinEvent,"sn":"None","box":function ($v) { return Bridge.box($v, MelonAd.PinEvent, System.Enum.toStringFn(MelonAd.PinEvent));}},{"a":2,"n":"Tutor","is":true,"t":4,"rt":$n[5].PinEvent,"sn":"Tutor","box":function ($v) { return Bridge.box($v, MelonAd.PinEvent, System.Enum.toStringFn(MelonAd.PinEvent));}}]}; }, $n);
    /*MelonAd.PinEvent end.*/

    /*MelonAd.Pin start.*/
    $m("MelonAd.Pin", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Fly","t":8,"sn":"Fly","rt":$n[1].IEnumerator},{"a":2,"n":"Remove","t":8,"sn":"Remove","rt":$n[0].Void},{"a":2,"n":"ResetState","t":8,"sn":"ResetState","rt":$n[0].Void},{"a":2,"n":"Removed","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Removed","t":8,"rt":$n[0].Boolean,"fg":"Removed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Removed","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"Removed"},"fn":"Removed"},{"a":2,"n":"evt","t":4,"rt":$n[5].PinEvent,"sn":"evt","box":function ($v) { return Bridge.box($v, MelonAd.PinEvent, System.Enum.toStringFn(MelonAd.PinEvent));}},{"a":2,"n":"flyOffset","t":4,"rt":$n[3].Vector2,"sn":"flyOffset"},{"a":1,"backing":true,"n":"<Removed>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"Removed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*MelonAd.Pin end.*/

    /*MelonAd.Acid start.*/
    $m("MelonAd.Acid", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"c","pt":$n[3].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[3].Collider2D]},{"a":1,"n":"OnTriggerExit2D","t":8,"pi":[{"n":"c","pt":$n[3].Collider2D,"ps":0}],"sn":"OnTriggerExit2D","rt":$n[0].Void,"p":[$n[3].Collider2D]},{"a":2,"n":"ResetState","t":8,"sn":"ResetState","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"inside","t":4,"rt":$n[4].List$1(UnityEngine.Rigidbody2D),"sn":"inside","ro":true}]}; }, $n);
    /*MelonAd.Acid end.*/

    /*MelonAd.Bullet start.*/
    $m("MelonAd.Bullet", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Launch","t":8,"pi":[{"n":"pos","pt":$n[3].Vector2,"ps":0},{"n":"vel","pt":$n[3].Vector2,"ps":1}],"sn":"Launch","rt":$n[0].Void,"p":[$n[3].Vector2,$n[3].Vector2]},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"c","pt":$n[3].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[3].Collision2D]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"hit","t":4,"rt":$n[0].Boolean,"sn":"hit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"life","t":4,"rt":$n[0].Single,"sn":"life","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rb","t":4,"rt":$n[3].Rigidbody2D,"sn":"rb"},{"a":1,"n":"timer","t":4,"rt":$n[0].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MelonAd.Bullet end.*/

    /*MelonAd.FlameParticle start.*/
    $m("MelonAd.FlameParticle", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Apply","t":8,"sn":"Apply","rt":$n[0].Void},{"a":2,"n":"Launch","t":8,"pi":[{"n":"pos","pt":$n[3].Vector2,"ps":0},{"n":"vel","pt":$n[3].Vector2,"ps":1},{"n":"angVelDeg","pt":$n[0].Single,"ps":2}],"sn":"Launch","rt":$n[0].Void,"p":[$n[3].Vector2,$n[3].Vector2,$n[0].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"life","t":4,"rt":$n[0].Single,"sn":"life","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rb","t":4,"rt":$n[3].Rigidbody2D,"sn":"rb"},{"a":1,"n":"s","t":4,"rt":$n[0].Single,"sn":"s","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"sr","t":4,"rt":$n[3].SpriteRenderer,"sn":"sr"},{"a":1,"n":"t","t":4,"rt":$n[0].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"visual","t":4,"rt":$n[3].Transform,"sn":"visual"}]}; }, $n);
    /*MelonAd.FlameParticle end.*/

    /*MelonAd.FlameThrower start.*/
    $m("MelonAd.FlameThrower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Emit","t":8,"pi":[{"n":"a","pt":$n[0].Single,"ps":0}],"sn":"Emit","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"ResetState","t":8,"sn":"ResetState","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"acc","t":4,"rt":$n[0].Single,"sn":"acc","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"next","t":4,"rt":$n[0].Int32,"sn":"next","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"particleRoot","t":4,"rt":$n[3].Transform,"sn":"particleRoot"},{"a":1,"n":"pool","t":4,"rt":System.Array.type(MelonAd.FlameParticle),"sn":"pool"},{"a":2,"n":"poolSize","t":4,"rt":$n[0].Int32,"sn":"poolSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"prefab","t":4,"rt":$n[5].FlameParticle,"sn":"prefab"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"tk","t":4,"rt":$n[0].Single,"sn":"tk","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"width","t":4,"rt":$n[0].Single,"sn":"width","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MelonAd.FlameThrower end.*/

    /*MelonAd.MonsterPit start.*/
    $m("MelonAd.MonsterPit", function () { return {"nested":[$n[5].MonsterPit.Mon],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Closest","t":8,"pi":[{"n":"x","pt":$n[0].Single,"ps":0}],"sn":"Closest","rt":$n[0].Int32,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Eat","t":8,"pi":[{"n":"victim","pt":$n[5].Ragdoll,"ps":0},{"n":"part","pt":$n[5].RagdollPart,"ps":1}],"sn":"Eat","rt":$n[0].Void,"p":[$n[5].Ragdoll,$n[5].RagdollPart]},{"a":1,"n":"EatRoutine","t":8,"pi":[{"n":"victim","pt":$n[5].Ragdoll,"ps":0},{"n":"first","pt":$n[5].RagdollPart,"ps":1}],"sn":"EatRoutine","rt":$n[1].IEnumerator,"p":[$n[5].Ragdoll,$n[5].RagdollPart]},{"a":1,"n":"Grab","is":true,"t":8,"pi":[{"n":"m","pt":$n[5].MonsterPit.Mon,"ps":0},{"n":"k","pt":$n[0].Single,"ps":1}],"sn":"Grab","rt":$n[0].Void,"p":[$n[5].MonsterPit.Mon,$n[0].Single]},{"a":1,"n":"Hide","is":true,"t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0}],"sn":"Hide","rt":$n[0].Void,"p":[$n[5].RagdollPart]},{"a":1,"n":"Mouth","t":8,"sn":"Mouth","rt":$n[3].Vector2},{"a":1,"n":"Pull","t":8,"pi":[{"n":"victim","pt":$n[5].Ragdoll,"ps":0},{"n":"strength","pt":$n[0].Single,"ps":1}],"sn":"Pull","rt":$n[0].Void,"p":[$n[5].Ragdoll,$n[0].Single]},{"a":2,"n":"ResetState","t":8,"sn":"ResetState","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WaveArms","is":true,"t":8,"pi":[{"n":"m","pt":$n[5].MonsterPit.Mon,"ps":0},{"n":"w","pt":$n[0].Single,"ps":1},{"n":"amp","pt":$n[0].Single,"ps":2}],"sn":"WaveArms","rt":$n[0].Void,"p":[$n[5].MonsterPit.Mon,$n[0].Single,$n[0].Single]},{"a":2,"n":"armWave","t":4,"rt":$n[0].Single,"sn":"armWave","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"breathe","t":4,"rt":$n[0].Single,"sn":"breathe","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"chewTime","t":4,"rt":$n[0].Single,"sn":"chewTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"eater","t":4,"rt":$n[0].Int32,"sn":"eater","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("How many entries of 'monsters' are front-row eaters.")],"a":2,"n":"eaters","t":4,"rt":$n[0].Int32,"sn":"eaters","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"eating","t":4,"rt":$n[0].Boolean,"sn":"eating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Idle (feet stay planted)")],"a":2,"n":"idleSpeed","t":4,"rt":$n[0].Single,"sn":"idleSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"idleSway","t":4,"rt":$n[0].Single,"sn":"idleSway","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"mons","t":4,"rt":System.Array.type(MelonAd.MonsterPit.Mon),"sn":"mons"},{"at":[new UnityEngine.TooltipAttribute("Monster roots (pivot at the feet). The first 'eaters' entries are the front row.")],"a":2,"n":"monsters","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"monsters"},{"at":[new UnityEngine.TooltipAttribute("Pull speed of the victim's parts towards the monster mouth.")],"a":2,"n":"pullSpeed","t":4,"rt":$n[0].Single,"sn":"pullSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Vertical stretch while grabbing (1 = none).")],"a":2,"n":"reachStretch","t":4,"rt":$n[0].Single,"sn":"reachStretch","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Eat")],"a":2,"n":"reachTime","t":4,"rt":$n[0].Single,"sn":"reachTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"routine","t":4,"rt":$n[3].Coroutine,"sn":"routine"},{"a":2,"n":"settleTime","t":4,"rt":$n[0].Single,"sn":"settleTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MelonAd.MonsterPit end.*/

    /*MelonAd.MonsterPit+Mon start.*/
    $m("MelonAd.MonsterPit.Mon", function () { return {"td":$n[5].MonsterPit,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"armL","t":4,"rt":$n[3].Transform,"sn":"armL"},{"a":2,"n":"armL0","t":4,"rt":$n[3].Quaternion,"sn":"armL0"},{"a":2,"n":"armR","t":4,"rt":$n[3].Transform,"sn":"armR"},{"a":2,"n":"armR0","t":4,"rt":$n[3].Quaternion,"sn":"armR0"},{"a":2,"n":"body","t":4,"rt":$n[3].SpriteRenderer,"sn":"body"},{"a":2,"n":"phase","t":4,"rt":$n[0].Single,"sn":"phase","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"root","t":4,"rt":$n[3].Transform,"sn":"root"},{"a":2,"n":"rot0","t":4,"rt":$n[3].Quaternion,"sn":"rot0"},{"a":2,"n":"scale0","t":4,"rt":$n[3].Vector3,"sn":"scale0"}]}; }, $n);
    /*MelonAd.MonsterPit+Mon end.*/

    /*MelonAd.Rifle start.*/
    $m("MelonAd.Rifle", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Fall","t":8,"sn":"Fall","rt":$n[1].IEnumerator},{"a":2,"n":"OnPinRemoved","t":8,"sn":"OnPinRemoved","rt":$n[0].Void},{"a":2,"n":"ResetState","t":8,"sn":"ResetState","rt":$n[0].Void},{"a":1,"n":"Shoot","t":8,"sn":"Shoot","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateFlash","t":8,"pi":[{"n":"dt","pt":$n[0].Single,"ps":0}],"sn":"UpdateFlash","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"bulletPrefab","t":4,"rt":$n[5].Bullet,"sn":"bulletPrefab"},{"a":2,"n":"bulletRoot","t":4,"rt":$n[3].Transform,"sn":"bulletRoot"},{"a":2,"n":"bulletSpeed","t":4,"rt":$n[0].Single,"sn":"bulletSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"burst","t":4,"rt":$n[0].Single,"sn":"burst","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"canFire","t":4,"rt":$n[0].Boolean,"sn":"canFire","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"falling","t":4,"rt":$n[0].Boolean,"sn":"falling","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"fireTimer","t":4,"rt":$n[0].Single,"sn":"fireTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"flashR","t":4,"rt":$n[0].Single,"sn":"flashR","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"flashT","t":4,"rt":$n[0].Single,"sn":"flashT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"muzzle","t":4,"rt":$n[3].SpriteRenderer,"sn":"muzzle"},{"a":1,"n":"pool","t":4,"rt":System.Array.type(MelonAd.Bullet),"sn":"pool"},{"a":2,"n":"poolSize","t":4,"rt":$n[0].Int32,"sn":"poolSize","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"tk","t":4,"rt":$n[0].Single,"sn":"tk","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"width","t":4,"rt":$n[0].Single,"sn":"width","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MelonAd.Rifle end.*/

    /*MelonAd.Spike start.*/
    $m("MelonAd.Spike", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Break","t":8,"pi":[{"n":"shards","pt":$n[0].Int32,"ps":0}],"sn":"Break","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"c","pt":$n[3].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[3].Collision2D]},{"a":2,"n":"ResetState","t":8,"sn":"ResetState","rt":$n[0].Void},{"a":2,"n":"IsBroken","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsBroken","t":8,"rt":$n[0].Boolean,"fg":"IsBroken","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsBroken","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsBroken"},"fn":"IsBroken"},{"a":1,"backing":true,"n":"<IsBroken>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsBroken","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*MelonAd.Spike end.*/

    /*MelonAd.LunaBridge start.*/
    $m("MelonAd.LunaBridge", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Event","is":true,"t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0},{"n":"value","pt":$n[0].Int32,"ps":1}],"sn":"Event","rt":$n[0].Void,"p":[$n[0].String,$n[0].Int32]},{"a":2,"n":"GameEnded","is":true,"t":8,"sn":"GameEnded","rt":$n[0].Void},{"a":2,"n":"InstallFullGame","is":true,"t":8,"sn":"InstallFullGame","rt":$n[0].Void},{"a":1,"n":"ended","is":true,"t":4,"rt":$n[0].Boolean,"sn":"ended","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*MelonAd.LunaBridge end.*/

    /*MelonAd.CharacterSelector start.*/
    $m("MelonAd.CharacterSelector", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Apply","t":8,"sn":"Apply","rt":$n[5].Ragdoll},{"a":2,"n":"Current","t":16,"rt":$n[5].Ragdoll,"g":{"a":2,"n":"get_Current","t":8,"rt":$n[5].Ragdoll,"fg":"Current"},"fn":"Current"},{"a":2,"n":"characters","t":4,"rt":System.Array.type(MelonAd.Ragdoll),"sn":"characters"},{"at":[new UnityEngine.TooltipAttribute("Driven by LunaController.Character when a LunaController is in the scene."),new UnityEngine.RangeAttribute(0.0, 5.0)],"a":2,"n":"index","t":4,"rt":$n[0].Int32,"sn":"index","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*MelonAd.CharacterSelector end.*/

    /*MelonAd.Ragdoll start.*/
    $m("MelonAd.Ragdoll", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Blocked","t":8,"pi":[{"n":"hazard","pt":$n[3].Collider2D,"ps":0},{"n":"c","pt":$n[3].Collision2D,"ps":1},{"n":"p","pt":$n[5].RagdollPart,"ps":2}],"sn":"Blocked","rt":$n[0].Boolean,"p":[$n[3].Collider2D,$n[3].Collision2D,$n[5].RagdollPart],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Burn","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0}],"sn":"Burn","rt":$n[0].Void,"p":[$n[5].RagdollPart]},{"a":1,"n":"Die","t":8,"sn":"Die","rt":$n[0].Void},{"a":1,"n":"Eaten","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0},{"n":"pit","pt":$n[5].MonsterPit,"ps":1}],"sn":"Eaten","rt":$n[0].Void,"p":[$n[5].RagdollPart,$n[5].MonsterPit]},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Grounded","t":8,"sn":"Grounded","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"InExit","t":8,"sn":"InExit","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsFoot","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0}],"sn":"IsFoot","rt":$n[0].Boolean,"p":[$n[5].RagdollPart],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsGround","is":true,"t":8,"pi":[{"n":"o","pt":$n[3].Collider2D,"ps":0}],"sn":"IsGround","rt":$n[0].Boolean,"p":[$n[3].Collider2D],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Melt","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0}],"sn":"Melt","rt":$n[0].Void,"p":[$n[5].RagdollPart]},{"a":2,"n":"OnPartCollision","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0},{"n":"c","pt":$n[3].Collision2D,"ps":1}],"sn":"OnPartCollision","rt":$n[0].Void,"p":[$n[5].RagdollPart,$n[3].Collision2D]},{"a":2,"n":"OnPartCollisionExit","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0},{"n":"c","pt":$n[3].Collision2D,"ps":1}],"sn":"OnPartCollisionExit","rt":$n[0].Void,"p":[$n[5].RagdollPart,$n[3].Collision2D]},{"a":2,"n":"OnPartTrigger","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0},{"n":"other","pt":$n[3].Collider2D,"ps":1}],"sn":"OnPartTrigger","rt":$n[0].Void,"p":[$n[5].RagdollPart,$n[3].Collider2D]},{"a":2,"n":"OnPartTriggerExit","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0},{"n":"other","pt":$n[3].Collider2D,"ps":1}],"sn":"OnPartTriggerExit","rt":$n[0].Void,"p":[$n[5].RagdollPart,$n[3].Collider2D]},{"a":2,"n":"ResetState","t":8,"sn":"ResetState","rt":$n[0].Void},{"a":1,"n":"Shot","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0}],"sn":"Shot","rt":$n[0].Void,"p":[$n[5].RagdollPart]},{"a":1,"n":"StartHole","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0}],"sn":"StartHole","rt":$n[0].Void,"p":[$n[5].RagdollPart]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Dead","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Dead","t":8,"rt":$n[0].Boolean,"fg":"Dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Dead","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"Dead"},"fn":"Dead"},{"at":[new UnityEngine.TooltipAttribute("Static colliders on these layers (pins, walls) block flame / bullet hits.")],"a":2,"n":"blockMask","t":4,"rt":$n[3].LayerMask,"sn":"blockMask"},{"a":1,"n":"eaten","t":4,"rt":$n[0].Boolean,"sn":"eaten","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"exitContacts","t":4,"rt":$n[0].Int32,"sn":"exitContacts","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Seconds the (alive) man must stay inside the exit zone before it counts as a win.")],"a":2,"n":"exitStayTime","t":4,"rt":$n[0].Single,"sn":"exitStayTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"exitTimer","t":4,"rt":$n[0].Single,"sn":"exitTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"footPull","t":4,"rt":$n[0].Single,"sn":"footPull","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"groundContacts","t":4,"rt":$n[0].Int32,"sn":"groundContacts","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"head","t":4,"rt":$n[5].RagdollPart,"sn":"head"},{"a":2,"n":"headLift","t":4,"rt":$n[0].Single,"sn":"headLift","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"hole","t":4,"rt":$n[3].SpriteMask,"sn":"hole"},{"a":2,"n":"holeDiameter","t":4,"rt":$n[0].Single,"sn":"holeDiameter","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"holeT","t":4,"rt":$n[0].Single,"sn":"holeT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"kisDead","t":4,"rt":$n[0].Boolean,"sn":"kisDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"leftFoot","t":4,"rt":$n[5].RagdollPart,"sn":"leftFoot"},{"a":2,"n":"parts","t":4,"rt":System.Array.type(MelonAd.RagdollPart),"sn":"parts"},{"a":2,"n":"rightFoot","t":4,"rt":$n[5].RagdollPart,"sn":"rightFoot"},{"a":1,"n":"smokeTimer","t":4,"rt":$n[0].Single,"sn":"smokeTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Dead>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"Dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*MelonAd.Ragdoll end.*/

    /*MelonAd.RagdollPart start.*/
    $m("MelonAd.RagdollPart", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"c","pt":$n[3].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[3].Collision2D]},{"a":1,"n":"OnCollisionExit2D","t":8,"pi":[{"n":"c","pt":$n[3].Collision2D,"ps":0}],"sn":"OnCollisionExit2D","rt":$n[0].Void,"p":[$n[3].Collision2D]},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"c","pt":$n[3].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[3].Collider2D]},{"a":1,"n":"OnTriggerExit2D","t":8,"pi":[{"n":"c","pt":$n[3].Collider2D,"ps":0}],"sn":"OnTriggerExit2D","rt":$n[0].Void,"p":[$n[3].Collider2D]},{"a":2,"n":"ShowBurnt","t":8,"pi":[{"n":"on","pt":$n[0].Boolean,"ps":0}],"sn":"ShowBurnt","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"ShowSkeleton","t":8,"pi":[{"n":"on","pt":$n[0].Boolean,"ps":0}],"sn":"ShowSkeleton","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"burnt","t":4,"rt":$n[3].SpriteRenderer,"sn":"burnt"},{"a":2,"n":"burntExtras","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"burntExtras"},{"a":2,"n":"owner","t":4,"rt":$n[5].Ragdoll,"sn":"owner"},{"a":2,"n":"rb","t":4,"rt":$n[3].Rigidbody2D,"sn":"rb"},{"a":2,"n":"skeleton","t":4,"rt":$n[3].SpriteRenderer,"sn":"skeleton"},{"a":2,"n":"skin","t":4,"rt":$n[3].SpriteRenderer,"sn":"skin"},{"a":2,"n":"skinExtras","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"skinExtras"}]}; }, $n);
    /*MelonAd.RagdollPart end.*/

    /*MelonAd.CtaOverlay start.*/
    $m("MelonAd.CtaOverlay", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.UI.Image)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":1,"n":"OnClick","t":8,"sn":"OnClick","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":1,"n":"button","t":4,"rt":$n[2].Button,"sn":"button"}]}; }, $n);
    /*MelonAd.CtaOverlay end.*/

    /*MelonAd.UIController start.*/
    $m("MelonAd.UIController", function () { return {"nested":[$n[5].UIController.Popup],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateHead","t":8,"pi":[{"n":"dt","pt":$n[0].Single,"ps":0}],"sn":"AnimateHead","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"ApplyIntro","t":8,"sn":"ApplyIntro","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"DismissIntro","t":8,"sn":"DismissIntro","rt":$n[0].Void},{"a":2,"n":"HideFail","t":8,"sn":"HideFail","rt":$n[0].Void},{"a":2,"n":"HideWin","t":8,"sn":"HideWin","rt":$n[0].Void},{"a":1,"n":"OnNextClicked","t":8,"sn":"OnNextClicked","rt":$n[0].Void},{"a":1,"n":"OnRetryClicked","t":8,"sn":"OnRetryClicked","rt":$n[0].Void},{"a":2,"n":"ShowFail","t":8,"sn":"ShowFail","rt":$n[0].Void},{"a":2,"n":"ShowHint","t":8,"pi":[{"n":"visible","pt":$n[0].Boolean,"ps":0}],"sn":"ShowHint","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"ShowWin","t":8,"sn":"ShowWin","rt":$n[0].Void},{"a":1,"n":"TickIntro","t":8,"pi":[{"n":"dt","pt":$n[0].Single,"ps":0}],"sn":"TickIntro","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"Wiggle","is":true,"t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"Wiggle","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"IntroActive","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IntroActive","t":8,"rt":$n[0].Boolean,"fg":"IntroActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IntroActive"},{"a":2,"n":"button","t":4,"rt":$n[3].RectTransform,"sn":"button"},{"a":1,"n":"fail","t":4,"rt":$n[5].UIController.Popup,"sn":"fail"},{"at":[new UnityEngine.HeaderAttribute("Fail popup")],"a":2,"n":"failRoot","t":4,"rt":$n[3].GameObject,"sn":"failRoot"},{"a":2,"n":"finger","t":4,"rt":$n[3].RectTransform,"sn":"finger"},{"a":2,"n":"head","t":4,"rt":$n[3].RectTransform,"sn":"head"},{"a":1,"n":"headPhase","t":4,"rt":$n[0].Int32,"sn":"headPhase","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"headRot0","t":4,"rt":$n[3].Quaternion,"sn":"headRot0"},{"a":1,"n":"headScale0","t":4,"rt":$n[3].Vector3,"sn":"headScale0"},{"a":1,"n":"headT","t":4,"rt":$n[0].Single,"sn":"headT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Hint")],"a":2,"n":"hint","t":4,"rt":$n[3].GameObject,"sn":"hint"},{"a":2,"n":"introCard","t":4,"rt":$n[3].RectTransform,"sn":"introCard"},{"at":[new UnityEngine.TooltipAttribute("Seconds before the intro hides itself (a tap hides it earlier).")],"a":2,"n":"introDuration","t":4,"rt":$n[0].Single,"sn":"introDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"introFade","t":4,"rt":$n[0].Single,"sn":"introFade","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"introGroup","t":4,"rt":$n[3].CanvasGroup,"sn":"introGroup"},{"a":1,"n":"introOutT","t":4,"rt":$n[0].Single,"sn":"introOutT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Intro (\"Survive 99 nights\")")],"a":2,"n":"introRoot","t":4,"rt":$n[3].GameObject,"sn":"introRoot"},{"a":1,"n":"introScale0","t":4,"rt":$n[3].Vector3,"sn":"introScale0"},{"a":1,"n":"introT","t":4,"rt":$n[0].Single,"sn":"introT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"nextButton","t":4,"rt":$n[2].Button,"sn":"nextButton"},{"a":2,"n":"panel","t":4,"rt":$n[3].RectTransform,"sn":"panel"},{"a":2,"n":"panelGroup","t":4,"rt":$n[3].CanvasGroup,"sn":"panelGroup"},{"a":2,"n":"pulseDuration","t":4,"rt":$n[0].Single,"sn":"pulseDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"retryButton","t":4,"rt":$n[2].Button,"sn":"retryButton"},{"at":[new UnityEngine.HeaderAttribute("Animation")],"a":2,"n":"slideDistance","t":4,"rt":$n[0].Single,"sn":"slideDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"slideDuration","t":4,"rt":$n[0].Single,"sn":"slideDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"wiggleDuration","t":4,"rt":$n[0].Single,"sn":"wiggleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"win","t":4,"rt":$n[5].UIController.Popup,"sn":"win"},{"a":2,"n":"winButton","t":4,"rt":$n[3].RectTransform,"sn":"winButton"},{"a":2,"n":"winFinger","t":4,"rt":$n[3].RectTransform,"sn":"winFinger"},{"a":2,"n":"winPanel","t":4,"rt":$n[3].RectTransform,"sn":"winPanel"},{"a":2,"n":"winPanelGroup","t":4,"rt":$n[3].CanvasGroup,"sn":"winPanelGroup"},{"at":[new UnityEngine.HeaderAttribute("Win popup")],"a":2,"n":"winRoot","t":4,"rt":$n[3].GameObject,"sn":"winRoot"}]}; }, $n);
    /*MelonAd.UIController end.*/

    /*MelonAd.UIController+Popup start.*/
    $m("MelonAd.UIController.Popup", function () { return {"td":$n[5].UIController,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateButton","t":8,"pi":[{"n":"ui","pt":$n[5].UIController,"ps":0},{"n":"dt","pt":$n[0].Single,"ps":1}],"sn":"AnimateButton","rt":$n[0].Void,"p":[$n[5].UIController,$n[0].Single]},{"a":1,"n":"Apply","t":8,"pi":[{"n":"ui","pt":$n[5].UIController,"ps":0},{"n":"k0","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[$n[5].UIController,$n[0].Single]},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"pi":[{"n":"ui","pt":$n[5].UIController,"ps":0}],"sn":"Show","rt":$n[0].Void,"p":[$n[5].UIController]},{"a":2,"n":"Tick","t":8,"pi":[{"n":"ui","pt":$n[5].UIController,"ps":0},{"n":"dt","pt":$n[0].Single,"ps":1}],"sn":"Tick","rt":$n[0].Void,"p":[$n[5].UIController,$n[0].Single]},{"a":2,"n":"Valid","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Valid","t":8,"rt":$n[0].Boolean,"fg":"Valid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Valid"},{"a":1,"n":"btnPhase","t":4,"rt":$n[0].Int32,"sn":"btnPhase","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"btnT","t":4,"rt":$n[0].Single,"sn":"btnT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"button","t":4,"rt":$n[3].RectTransform,"sn":"button"},{"a":1,"n":"buttonRot0","t":4,"rt":$n[3].Quaternion,"sn":"buttonRot0"},{"a":1,"n":"buttonScale0","t":4,"rt":$n[3].Vector3,"sn":"buttonScale0"},{"a":2,"n":"finger","t":4,"rt":$n[3].RectTransform,"sn":"finger"},{"a":1,"n":"fingerScale0","t":4,"rt":$n[3].Vector3,"sn":"fingerScale0"},{"a":2,"n":"group","t":4,"rt":$n[3].CanvasGroup,"sn":"group"},{"a":2,"n":"panel","t":4,"rt":$n[3].RectTransform,"sn":"panel"},{"a":1,"n":"panelPos0","t":4,"rt":$n[3].Vector2,"sn":"panelPos0"},{"a":2,"n":"root","t":4,"rt":$n[3].GameObject,"sn":"root"},{"a":2,"n":"t","t":4,"rt":$n[0].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MelonAd.UIController+Popup end.*/

    /*MelonAd.UICover start.*/
    $m("MelonAd.UICover", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Aspect","t":8,"sn":"Aspect","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"target","t":4,"rt":$n[2].Graphic,"sn":"target"}]}; }, $n);
    /*MelonAd.UICover end.*/

    }});

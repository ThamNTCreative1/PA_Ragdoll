if ( TRACE ) { TRACE( JSON.parse( '["LunaController#init","LunaController#Awake","LunaController#Start","LunaController#ApplyCharacter","LunaController#ClickCTA","LunaController#EndGame","MelonAd.Acid#init","MelonAd.Acid#OnTriggerEnter2D","MelonAd.Acid#OnTriggerExit2D","MelonAd.Acid#Update","MelonAd.Acid#ResetState","MelonAd.AudioManager#Awake","MelonAd.AudioManager#Play","MelonAd.AudioManager#PlayOverlap","MelonAd.AudioManager#PlayIfIdle","MelonAd.AudioManager#IsPlaying","MelonAd.AudioManager#Stop","MelonAd.Bullet#init","MelonAd.Bullet#Launch","MelonAd.Bullet#Update","MelonAd.Bullet#OnCollisionEnter2D","MelonAd.CameraFit#init","MelonAd.CameraFit#OnEnable","MelonAd.CameraFit#LateUpdate","MelonAd.CameraFit#Apply","MelonAd.CharacterSelector#Current#get","MelonAd.CharacterSelector#Apply","MelonAd.FlameParticle#init","MelonAd.FlameParticle#Launch","MelonAd.FlameParticle#Update","MelonAd.FlameParticle#Apply","MelonAd.FlameThrower#init","MelonAd.FlameThrower#Start","MelonAd.FlameThrower#Update","MelonAd.FlameThrower#Emit","MelonAd.FlameThrower#ResetState","MelonAd.FxManager#SetAlpha","MelonAd.FxManager#RandOffset","MelonAd.FxManager#init","MelonAd.FxManager#Awake","MelonAd.FxManager#Create","MelonAd.FxManager#Take","MelonAd.FxManager#BurnPuff","MelonAd.FxManager#Debris","MelonAd.FxManager#Blood","MelonAd.FxManager#Bubble","MelonAd.FxManager#ClearAll","MelonAd.FxManager#Update","MelonAd.GameConfig#init","MelonAd.GameConfig#Awake","MelonAd.GameManager#init","MelonAd.GameManager#Awake","MelonAd.GameManager#Start","MelonAd.GameManager#TutorialOn","MelonAd.GameManager#BeginRound","MelonAd.GameManager#WorldScale","MelonAd.GameManager#Update","MelonAd.GameManager#FixedUpdate","MelonAd.GameManager#ScreenToWorld","MelonAd.GameManager#OnPointerDown","MelonAd.GameManager#StartDrag","MelonAd.GameManager#RemovePin","MelonAd.GameManager#UpdateTutorial","MelonAd.GameManager#SetDragFingerAlpha","MelonAd.GameManager#HideFingers","MelonAd.GameManager#OnManDied","MelonAd.GameManager#ShowFailLater","MelonAd.GameManager#OnFailButton","MelonAd.GameManager#OnExitReached","MelonAd.GameManager#ZoomToExit","MelonAd.Grabbable#CanGrab","MelonAd.LevelRefs#init","MelonAd.LevelRefs#Init","MelonAd.LevelRefs#Capture","MelonAd.LevelRefs#ResetLevel","MelonAd.LevelRefs.TState#init","MelonAd.LunaBridge#GameEnded","MelonAd.LunaBridge#InstallFullGame","MelonAd.LunaBridge#Event","MelonAd.Pin#init","MelonAd.Pin#Remove","MelonAd.Pin#Fly","MelonAd.Pin#ResetState","MelonAd.Ragdoll#init","MelonAd.Ragdoll#FixedUpdate","MelonAd.Ragdoll#Update","MelonAd.Ragdoll#OnPartCollision","MelonAd.Ragdoll#Blocked","MelonAd.Ragdoll#OnPartTrigger","MelonAd.Ragdoll#Burn","MelonAd.Ragdoll#Melt","MelonAd.Ragdoll#Shot","MelonAd.Ragdoll#StartHole","MelonAd.Ragdoll#Die","MelonAd.Ragdoll#ResetState","MelonAd.RagdollPart#ShowBurnt","MelonAd.RagdollPart#ShowSkeleton","MelonAd.RagdollPart#OnCollisionEnter2D","MelonAd.RagdollPart#OnTriggerEnter2D","MelonAd.Rifle#init","MelonAd.Rifle#Start","MelonAd.Rifle#OnPinRemoved","MelonAd.Rifle#Update","MelonAd.Rifle#Shoot","MelonAd.Rifle#UpdateFlash","MelonAd.Rifle#Fall","MelonAd.Rifle#ResetState","MelonAd.Spike#Break","MelonAd.Spike#OnCollisionEnter2D","MelonAd.Spike#ResetState","MelonAd.UIController#Wiggle","MelonAd.UIController#init","MelonAd.UIController#Awake","MelonAd.UIController#OnRetryClicked","MelonAd.UIController#ShowHint","MelonAd.UIController#ShowFail","MelonAd.UIController#HideFail","MelonAd.UIController#Update","MelonAd.UIController#ApplyFail","MelonAd.UIController#AnimateHead","MelonAd.UIController#AnimateButton","MelonAd.UICover#Aspect","MelonAd.UICover#LateUpdate"]' ) ); }
/**
 * @version 1.0.9769.27121
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
                                    MelonAd.LunaBridge.GameEnded();
                                        this.ClickCTA();

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
            sources: null
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
                    this.fail
                ], UnityEngine.AudioClip);
                this.sources = System.Array.init(clips.length, null, UnityEngine.AudioSource);
                for (var i = 0; i < clips.length; i = (i + 1) | 0) {
                    var s = this.gameObject.AddComponent(UnityEngine.AudioSource);
                    s.clip = clips[i];
                    s.playOnAwake = false;
                    s.loop = i === MelonAd.Sfx.Music || i === MelonAd.Sfx.Fire || i === MelonAd.Sfx.Flame;
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
            tapFinger: null,
            dragFinger: null,
            dragFingerSprite: null,
            pickMask: null,
            winZoom: 0,
            winFocus: null,
            winZoomDuration: 0,
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
            zoomRoutine: null
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

                if (this.State === MelonAd.GameState.Win) {
                    MelonAd.LunaBridge.InstallFullGame();
                    return;
                }

                this.ui.ShowHint(false);
                if (!this.musicStarted) {
                    this.musicStarted = true;
                    MelonAd.AudioManager.I.Play(MelonAd.Sfx.Music);
                }
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
                MelonAd.LunaBridge.Event("pin_removed", pin.evt);
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
                MelonAd.LunaBridge.Event("fail", this.retriesUsed);
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
                MelonAd.LunaBridge.Event("retry", this.retriesUsed);
                this.BeginRound();
            },
            /*MelonAd.GameManager.OnFailButton end.*/

            /*MelonAd.GameManager.OnExitReached start.*/
            OnExitReached: function () {
if ( TRACE ) { TRACE( "MelonAd.GameManager#OnExitReached", this ); }

                if (this.State !== MelonAd.GameState.Run) {
                    return;
                }
                this.State = MelonAd.GameState.Win;
                this.dragGrab = null;
                this.HideFingers();
                MelonAd.AudioManager.I.Play(MelonAd.Sfx.Complete);
                MelonAd.LunaBridge.Event("win", this.retriesUsed);
                MelonAd.LunaBridge.GameEnded();
                MelonAd.LunaBridge.InstallFullGame();
                if (UnityEngine.Component.op_Inequality(this.zoomRoot, null)) {
                    this.zoomRoutine = this.StartCoroutine$1(this.ZoomToExit());
                }
            },
            /*MelonAd.GameManager.OnExitReached end.*/

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
                if (UnityEngine.MonoBehaviour.op_Inequality(this.rifle, null)) {
                    this.rifle.ResetState();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.flameThrower, null)) {
                    this.flameThrower.ResetState();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.man, null)) {
                    this.man.ResetState();
                }

                for (var i3 = 0; i3 < this.transforms.Count; i3 = (i3 + 1) | 0) {
                    var s = this.transforms.getItem(i3);
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
                for (var i4 = 0; i4 < this.transforms.Count; i4 = (i4 + 1) | 0) {
                    var s1 = this.transforms.getItem(i4);
                    if (UnityEngine.Component.op_Inequality(s1.t, null) && s1.t.gameObject.activeSelf !== s1.active) {
                        s1.t.gameObject.SetActive(s1.active);
                    }
                }
                for (var i5 = 0; i5 < this.renderers.Count; i5 = (i5 + 1) | 0) {
                    if (UnityEngine.Component.op_Equality(this.renderers.getItem(i5), null)) {
                        continue;
                    }
                    this.renderers.getItem(i5).enabled = this.rendererEnabled.getItem(i5);
                    this.renderers.getItem(i5).color = this.rendererColor.getItem(i5).$clone();
                }
                for (var i6 = 0; i6 < this.colliders.Count; i6 = (i6 + 1) | 0) {
                    if (UnityEngine.Component.op_Inequality(this.colliders.getItem(i6), null)) {
                        this.colliders.getItem(i6).enabled = this.colliderEnabled.getItem(i6);
                    }
                }
                for (var i7 = 0; i7 < this.bodies.length; i7 = (i7 + 1) | 0) {
                    var rb = this.bodies[i7];
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
            smokeTimer: 0,
            holeT: 0,
            blockMask: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#init", this ); }

                this.blockMask = new UnityEngine.LayerMask();
                this.holeDiameter = 1.28;
                this.headLift = 25.0;
                this.footPull = 18.0;
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

            /*MelonAd.Ragdoll.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.Ragdoll#Update", this ); }

                var dt = UnityEngine.Mathf.Min(UnityEngine.Time.deltaTime, 0.05);
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

                if (UnityEngine.MonoBehaviour.op_Inequality(other.GetComponent(MelonAd.Acid), null)) {
                    this.Melt(p);
                } else {
                    if (UnityEngine.MonoBehaviour.op_Inequality(other.GetComponent(MelonAd.ExitZone), null) && UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameManager.I, null)) {
                        MelonAd.GameManager.I.OnExitReached();
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

            /*MelonAd.RagdollPart.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (c) {
if ( TRACE ) { TRACE( "MelonAd.RagdollPart#OnTriggerEnter2D", this ); }

                this.owner.OnPartTrigger(this, c);
            },
            /*MelonAd.RagdollPart.OnTriggerEnter2D end.*/


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
                Fail: 10
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

    /*MelonAd.UIController start.*/
    /**
     * Drives the hint (SAVE THE MELON + bobbing head) and the FAIL popup.
     All layout lives on the Canvas in the scene and is freely editable:
     animations are applied RELATIVE to the position / scale / rotation you set in the editor.
     FailRoot can be left active while editing; it is hidden automatically at start.
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
            slideDistance: 0,
            slideDuration: 0,
            pulseDuration: 0,
            wiggleDuration: 0,
            panelPos0: null,
            headScale0: null,
            buttonScale0: null,
            fingerScale0: null,
            headRot0: null,
            buttonRot0: null,
            headT: 0,
            headPhase: 0,
            failT: 0,
            btnT: 0,
            btnPhase: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#init", this ); }

                this.panelPos0 = new UnityEngine.Vector2();
                this.headScale0 = new UnityEngine.Vector3();
                this.buttonScale0 = new UnityEngine.Vector3();
                this.fingerScale0 = new UnityEngine.Vector3();
                this.headRot0 = new UnityEngine.Quaternion();
                this.buttonRot0 = new UnityEngine.Quaternion();
                this.slideDistance = 1000.0;
                this.slideDuration = 0.25;
                this.pulseDuration = 3.0;
                this.wiggleDuration = 1.2;
                this.failT = -1.0;
            }
        },
        methods: {
            /*MelonAd.UIController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#Awake", this ); }

                this.panelPos0 = this.panel.anchoredPosition.$clone();
                this.headScale0 = this.head.localScale.$clone();
                this.headRot0 = this.head.localRotation.$clone();
                this.buttonScale0 = this.button.localScale.$clone();
                this.buttonRot0 = this.button.localRotation.$clone();
                this.fingerScale0 = this.finger.localScale.$clone();
                this.retryButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnRetryClicked));
                this.failRoot.SetActive(false);
            },
            /*MelonAd.UIController.Awake end.*/

            /*MelonAd.UIController.OnRetryClicked start.*/
            OnRetryClicked: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#OnRetryClicked", this ); }

                if (this.failT < 1.0) {
                    return;
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(MelonAd.GameManager.I, null)) {
                    MelonAd.GameManager.I.OnFailButton();
                }
            },
            /*MelonAd.UIController.OnRetryClicked end.*/

            /*MelonAd.UIController.ShowHint start.*/
            ShowHint: function (visible) {
if ( TRACE ) { TRACE( "MelonAd.UIController#ShowHint", this ); }

                if (this.hint.activeSelf === visible) {
                    return;
                }
                this.hint.SetActive(visible);
                this.headT = 0.0;
                this.headPhase = 0;
                this.head.localScale = this.headScale0.$clone();
                this.head.localRotation = this.headRot0.$clone();
            },
            /*MelonAd.UIController.ShowHint end.*/

            /*MelonAd.UIController.ShowFail start.*/
            ShowFail: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#ShowFail", this ); }

                this.failRoot.SetActive(true);
                this.failT = 0.0;
                this.btnT = 0.0;
                this.btnPhase = 0;
                this.finger.gameObject.SetActive(false);
                this.button.localScale = this.buttonScale0.$clone();
                this.button.localRotation = this.buttonRot0.$clone();
                this.ApplyFail(0.0);
            },
            /*MelonAd.UIController.ShowFail end.*/

            /*MelonAd.UIController.HideFail start.*/
            HideFail: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#HideFail", this ); }

                this.failRoot.SetActive(false);
                this.failT = -1.0;
                this.panel.anchoredPosition = this.panelPos0.$clone();
            },
            /*MelonAd.UIController.HideFail end.*/

            /*MelonAd.UIController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MelonAd.UIController#Update", this ); }

                var dt = UnityEngine.Mathf.Min(UnityEngine.Time.deltaTime, 0.05);
                if (this.hint.activeSelf) {
                    this.AnimateHead(dt);
                }
                if (this.failT >= 0.0) {
                    if (this.failT < 1.0) {
                        this.failT += dt / this.slideDuration;
                        if (this.failT > 1.0) {
                            this.failT = 1.0;
                        }
                        this.ApplyFail(this.failT);
                    } else {
                        this.AnimateButton(dt);
                    }
                }
            },
            /*MelonAd.UIController.Update end.*/

            /*MelonAd.UIController.ApplyFail start.*/
            ApplyFail: function (t) {
if ( TRACE ) { TRACE( "MelonAd.UIController#ApplyFail", this ); }

                var k = t + 0.4 * Math.sin(UnityEngine.Mathf.PI * t);
                this.panel.anchoredPosition = this.panelPos0.$clone().add( new pc.Vec2( 0.0, this.slideDistance * (1.0 - k) ) );
                this.panelGroup.alpha = UnityEngine.Mathf.Min(1.0, 10.0 * t);
            },
            /*MelonAd.UIController.ApplyFail end.*/

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

            /*MelonAd.UIController.AnimateButton start.*/
            AnimateButton: function (dt) {
if ( TRACE ) { TRACE( "MelonAd.UIController#AnimateButton", this ); }

                var dur = this.btnPhase === 0 ? this.pulseDuration : this.wiggleDuration;
                this.btnT += dt / dur;
                if (this.btnT >= 1.0) {
                    this.btnT = 0.0;
                    this.btnPhase = (1 - this.btnPhase) | 0;
                    this.button.localScale = this.buttonScale0.$clone();
                    this.button.localRotation = this.buttonRot0.$clone();
                    this.finger.gameObject.SetActive(this.btnPhase === 1);
                }
                if (this.btnPhase === 0) {
                    this.button.localScale = this.buttonScale0.$clone().clone().scale( (1.0 + Math.sin(9.424778 * this.btnT) / 20.0) );
                } else {
                    this.finger.localScale = this.fingerScale0.$clone().clone().scale( (1.0 - Math.sin(UnityEngine.Mathf.PI * this.btnT) / 8.0) );
                    this.button.localRotation = this.buttonRot0.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, MelonAd.UIController.Wiggle(this.btnT) ) );
                }
            },
            /*MelonAd.UIController.AnimateButton end.*/


        }
    });
    /*MelonAd.UIController end.*/

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
    $m("MelonAd.Sfx", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Complete","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Complete","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Doc","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Doc","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Door","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Door","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Fail","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Fail","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Fire","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Fire","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Flame","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Flame","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Hurt","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Hurt","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Jar","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Jar","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Kis","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Kis","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Music","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Music","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}},{"a":2,"n":"Ohog","is":true,"t":4,"rt":$n[5].Sfx,"sn":"Ohog","box":function ($v) { return Bridge.box($v, MelonAd.Sfx, System.Enum.toStringFn(MelonAd.Sfx));}}]}; }, $n);
    /*MelonAd.Sfx end.*/

    /*MelonAd.AudioManager start.*/
    $m("MelonAd.AudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"IsPlaying","t":8,"pi":[{"n":"s","pt":$n[5].Sfx,"ps":0}],"sn":"IsPlaying","rt":$n[0].Boolean,"p":[$n[5].Sfx],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Play","t":8,"pi":[{"n":"s","pt":$n[5].Sfx,"ps":0}],"sn":"Play","rt":$n[0].Void,"p":[$n[5].Sfx]},{"a":2,"n":"PlayIfIdle","t":8,"pi":[{"n":"s","pt":$n[5].Sfx,"ps":0}],"sn":"PlayIfIdle","rt":$n[0].Void,"p":[$n[5].Sfx]},{"a":2,"n":"PlayOverlap","t":8,"pi":[{"n":"s","pt":$n[5].Sfx,"ps":0}],"sn":"PlayOverlap","rt":$n[0].Void,"p":[$n[5].Sfx]},{"a":2,"n":"Stop","t":8,"pi":[{"n":"s","pt":$n[5].Sfx,"ps":0}],"sn":"Stop","rt":$n[0].Void,"p":[$n[5].Sfx]},{"a":2,"n":"I","is":true,"t":4,"rt":$n[5].AudioManager,"sn":"I"},{"at":[new UnityEngine.HeaderAttribute("Result")],"a":2,"n":"complete","t":4,"rt":$n[3].AudioClip,"sn":"complete"},{"a":2,"n":"doc","t":4,"rt":$n[3].AudioClip,"sn":"doc"},{"a":2,"n":"door","t":4,"rt":$n[3].AudioClip,"sn":"door"},{"a":2,"n":"fail","t":4,"rt":$n[3].AudioClip,"sn":"fail"},{"a":2,"n":"fire","t":4,"rt":$n[3].AudioClip,"sn":"fire"},{"a":2,"n":"flame","t":4,"rt":$n[3].AudioClip,"sn":"flame"},{"a":2,"n":"hurt","t":4,"rt":$n[3].AudioClip,"sn":"hurt"},{"a":2,"n":"jar","t":4,"rt":$n[3].AudioClip,"sn":"jar"},{"a":2,"n":"kis","t":4,"rt":$n[3].AudioClip,"sn":"kis"},{"a":2,"n":"music","t":4,"rt":$n[3].AudioClip,"sn":"music"},{"a":2,"n":"ohog","t":4,"rt":$n[3].AudioClip,"sn":"ohog"},{"a":1,"n":"sources","t":4,"rt":System.Array.type(UnityEngine.AudioSource),"sn":"sources"}]}; }, $n);
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
    $m("MelonAd.GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BeginRound","t":8,"sn":"BeginRound","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"HideFingers","t":8,"sn":"HideFingers","rt":$n[0].Void},{"a":2,"n":"OnExitReached","t":8,"sn":"OnExitReached","rt":$n[0].Void},{"a":2,"n":"OnFailButton","t":8,"sn":"OnFailButton","rt":$n[0].Void},{"a":2,"n":"OnManDied","t":8,"sn":"OnManDied","rt":$n[0].Void},{"a":1,"n":"OnPointerDown","t":8,"pi":[{"n":"p","pt":$n[3].Vector2,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[3].Vector2]},{"a":1,"n":"RemovePin","t":8,"pi":[{"n":"pin","pt":$n[5].Pin,"ps":0}],"sn":"RemovePin","rt":$n[0].Void,"p":[$n[5].Pin]},{"a":1,"n":"ScreenToWorld","t":8,"pi":[{"n":"sp","pt":$n[3].Vector3,"ps":0}],"sn":"ScreenToWorld","rt":$n[3].Vector2,"p":[$n[3].Vector3]},{"a":1,"n":"SetDragFingerAlpha","t":8,"pi":[{"n":"a","pt":$n[0].Single,"ps":0}],"sn":"SetDragFingerAlpha","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"ShowFailLater","t":8,"sn":"ShowFailLater","rt":$n[1].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartDrag","t":8,"pi":[{"n":"g","pt":$n[5].Grabbable,"ps":0},{"n":"p","pt":$n[3].Vector2,"ps":1}],"sn":"StartDrag","rt":$n[0].Void,"p":[$n[5].Grabbable,$n[3].Vector2]},{"a":1,"n":"TutorialOn","t":8,"sn":"TutorialOn","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateTutorial","t":8,"pi":[{"n":"dt","pt":$n[0].Single,"ps":0}],"sn":"UpdateTutorial","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"WorldScale","t":8,"sn":"WorldScale","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ZoomToExit","t":8,"sn":"ZoomToExit","rt":$n[1].IEnumerator},{"a":2,"n":"State","t":16,"rt":$n[5].GameState,"g":{"a":2,"n":"get_State","t":8,"rt":$n[5].GameState,"fg":"State","box":function ($v) { return Bridge.box($v, MelonAd.GameState, System.Enum.toStringFn(MelonAd.GameState));}},"s":{"a":1,"n":"set_State","t":8,"p":[$n[5].GameState],"rt":$n[0].Void,"fs":"State"},"fn":"State"},{"a":2,"n":"I","is":true,"t":4,"rt":$n[5].GameManager,"sn":"I"},{"a":2,"n":"cam","t":4,"rt":$n[3].Camera,"sn":"cam"},{"a":2,"n":"dragDamping","t":4,"rt":$n[0].Single,"sn":"dragDamping","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dragFinger","t":4,"rt":$n[3].Transform,"sn":"dragFinger"},{"a":2,"n":"dragFingerSprite","t":4,"rt":$n[3].SpriteRenderer,"sn":"dragFingerSprite"},{"at":[new UnityEngine.HeaderAttribute("Drag spring (Box2D mouse joint defaults)")],"a":2,"n":"dragFrequency","t":4,"rt":$n[0].Single,"sn":"dragFrequency","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragGrab","t":4,"rt":$n[5].Grabbable,"sn":"dragGrab"},{"a":1,"n":"dragHintActive","t":4,"rt":$n[0].Boolean,"sn":"dragHintActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"dragMaxForce","t":4,"rt":$n[0].Single,"sn":"dragMaxForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragStart","t":4,"rt":$n[3].Vector3,"sn":"dragStart"},{"a":1,"n":"dragT","t":4,"rt":$n[0].Single,"sn":"dragT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dragTarget","t":4,"rt":$n[3].Vector2,"sn":"dragTarget"},{"a":1,"n":"firstRound","t":4,"rt":$n[0].Boolean,"sn":"firstRound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Scene refs")],"a":2,"n":"level","t":4,"rt":$n[5].LevelRefs,"sn":"level"},{"a":1,"n":"musicStarted","t":4,"rt":$n[0].Boolean,"sn":"musicStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pickMask","t":4,"rt":$n[3].LayerMask,"sn":"pickMask"},{"a":1,"n":"retriesUsed","t":4,"rt":$n[0].Int32,"sn":"retriesUsed","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tapFinger","t":4,"rt":$n[3].Transform,"sn":"tapFinger"},{"at":[new UnityEngine.HeaderAttribute("Tutorial")],"a":2,"n":"tapFingerOffset","t":4,"rt":$n[3].Vector2,"sn":"tapFingerOffset"},{"a":1,"n":"tapT","t":4,"rt":$n[0].Single,"sn":"tapT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ui","t":4,"rt":$n[5].UIController,"sn":"ui"},{"a":2,"n":"winFocus","t":4,"rt":$n[3].Vector2,"sn":"winFocus"},{"at":[new UnityEngine.HeaderAttribute("Win zoom (original: scale 0.38 -> 0.58 centred on the exit)")],"a":2,"n":"winZoom","t":4,"rt":$n[0].Single,"sn":"winZoom","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"winZoomDuration","t":4,"rt":$n[0].Single,"sn":"winZoomDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"zoomPos0","t":4,"rt":$n[3].Vector2,"sn":"zoomPos0"},{"a":2,"n":"zoomRoot","t":4,"rt":$n[3].RectTransform,"sn":"zoomRoot"},{"a":1,"n":"zoomRoutine","t":4,"rt":$n[3].Coroutine,"sn":"zoomRoutine"},{"a":1,"n":"zoomScale0","t":4,"rt":$n[3].Vector3,"sn":"zoomScale0"},{"a":1,"backing":true,"n":"<State>k__BackingField","t":4,"rt":$n[5].GameState,"sn":"State","box":function ($v) { return Bridge.box($v, MelonAd.GameState, System.Enum.toStringFn(MelonAd.GameState));}}]}; }, $n);
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
    $m("MelonAd.Ragdoll", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Blocked","t":8,"pi":[{"n":"hazard","pt":$n[3].Collider2D,"ps":0},{"n":"c","pt":$n[3].Collision2D,"ps":1},{"n":"p","pt":$n[5].RagdollPart,"ps":2}],"sn":"Blocked","rt":$n[0].Boolean,"p":[$n[3].Collider2D,$n[3].Collision2D,$n[5].RagdollPart],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Burn","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0}],"sn":"Burn","rt":$n[0].Void,"p":[$n[5].RagdollPart]},{"a":1,"n":"Die","t":8,"sn":"Die","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Melt","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0}],"sn":"Melt","rt":$n[0].Void,"p":[$n[5].RagdollPart]},{"a":2,"n":"OnPartCollision","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0},{"n":"c","pt":$n[3].Collision2D,"ps":1}],"sn":"OnPartCollision","rt":$n[0].Void,"p":[$n[5].RagdollPart,$n[3].Collision2D]},{"a":2,"n":"OnPartTrigger","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0},{"n":"other","pt":$n[3].Collider2D,"ps":1}],"sn":"OnPartTrigger","rt":$n[0].Void,"p":[$n[5].RagdollPart,$n[3].Collider2D]},{"a":2,"n":"ResetState","t":8,"sn":"ResetState","rt":$n[0].Void},{"a":1,"n":"Shot","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0}],"sn":"Shot","rt":$n[0].Void,"p":[$n[5].RagdollPart]},{"a":1,"n":"StartHole","t":8,"pi":[{"n":"p","pt":$n[5].RagdollPart,"ps":0}],"sn":"StartHole","rt":$n[0].Void,"p":[$n[5].RagdollPart]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Dead","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Dead","t":8,"rt":$n[0].Boolean,"fg":"Dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_Dead","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"Dead"},"fn":"Dead"},{"at":[new UnityEngine.TooltipAttribute("Static colliders on these layers (pins, walls) block flame / bullet hits.")],"a":2,"n":"blockMask","t":4,"rt":$n[3].LayerMask,"sn":"blockMask"},{"a":2,"n":"footPull","t":4,"rt":$n[0].Single,"sn":"footPull","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"head","t":4,"rt":$n[5].RagdollPart,"sn":"head"},{"a":2,"n":"headLift","t":4,"rt":$n[0].Single,"sn":"headLift","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"hole","t":4,"rt":$n[3].SpriteMask,"sn":"hole"},{"a":2,"n":"holeDiameter","t":4,"rt":$n[0].Single,"sn":"holeDiameter","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"holeT","t":4,"rt":$n[0].Single,"sn":"holeT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"kisDead","t":4,"rt":$n[0].Boolean,"sn":"kisDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"leftFoot","t":4,"rt":$n[5].RagdollPart,"sn":"leftFoot"},{"a":2,"n":"parts","t":4,"rt":System.Array.type(MelonAd.RagdollPart),"sn":"parts"},{"a":2,"n":"rightFoot","t":4,"rt":$n[5].RagdollPart,"sn":"rightFoot"},{"a":1,"n":"smokeTimer","t":4,"rt":$n[0].Single,"sn":"smokeTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Dead>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"Dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*MelonAd.Ragdoll end.*/

    /*MelonAd.RagdollPart start.*/
    $m("MelonAd.RagdollPart", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"c","pt":$n[3].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[3].Collision2D]},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"c","pt":$n[3].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[3].Collider2D]},{"a":2,"n":"ShowBurnt","t":8,"pi":[{"n":"on","pt":$n[0].Boolean,"ps":0}],"sn":"ShowBurnt","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"ShowSkeleton","t":8,"pi":[{"n":"on","pt":$n[0].Boolean,"ps":0}],"sn":"ShowSkeleton","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"burnt","t":4,"rt":$n[3].SpriteRenderer,"sn":"burnt"},{"a":2,"n":"burntExtras","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"burntExtras"},{"a":2,"n":"owner","t":4,"rt":$n[5].Ragdoll,"sn":"owner"},{"a":2,"n":"rb","t":4,"rt":$n[3].Rigidbody2D,"sn":"rb"},{"a":2,"n":"skeleton","t":4,"rt":$n[3].SpriteRenderer,"sn":"skeleton"},{"a":2,"n":"skin","t":4,"rt":$n[3].SpriteRenderer,"sn":"skin"},{"a":2,"n":"skinExtras","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"skinExtras"}]}; }, $n);
    /*MelonAd.RagdollPart end.*/

    /*MelonAd.UIController start.*/
    $m("MelonAd.UIController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateButton","t":8,"pi":[{"n":"dt","pt":$n[0].Single,"ps":0}],"sn":"AnimateButton","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"AnimateHead","t":8,"pi":[{"n":"dt","pt":$n[0].Single,"ps":0}],"sn":"AnimateHead","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"ApplyFail","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"ApplyFail","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"HideFail","t":8,"sn":"HideFail","rt":$n[0].Void},{"a":1,"n":"OnRetryClicked","t":8,"sn":"OnRetryClicked","rt":$n[0].Void},{"a":2,"n":"ShowFail","t":8,"sn":"ShowFail","rt":$n[0].Void},{"a":2,"n":"ShowHint","t":8,"pi":[{"n":"visible","pt":$n[0].Boolean,"ps":0}],"sn":"ShowHint","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"Wiggle","is":true,"t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"Wiggle","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"btnPhase","t":4,"rt":$n[0].Int32,"sn":"btnPhase","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"btnT","t":4,"rt":$n[0].Single,"sn":"btnT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"button","t":4,"rt":$n[3].RectTransform,"sn":"button"},{"a":1,"n":"buttonRot0","t":4,"rt":$n[3].Quaternion,"sn":"buttonRot0"},{"a":1,"n":"buttonScale0","t":4,"rt":$n[3].Vector3,"sn":"buttonScale0"},{"at":[new UnityEngine.HeaderAttribute("Fail popup")],"a":2,"n":"failRoot","t":4,"rt":$n[3].GameObject,"sn":"failRoot"},{"a":1,"n":"failT","t":4,"rt":$n[0].Single,"sn":"failT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"finger","t":4,"rt":$n[3].RectTransform,"sn":"finger"},{"a":1,"n":"fingerScale0","t":4,"rt":$n[3].Vector3,"sn":"fingerScale0"},{"a":2,"n":"head","t":4,"rt":$n[3].RectTransform,"sn":"head"},{"a":1,"n":"headPhase","t":4,"rt":$n[0].Int32,"sn":"headPhase","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"headRot0","t":4,"rt":$n[3].Quaternion,"sn":"headRot0"},{"a":1,"n":"headScale0","t":4,"rt":$n[3].Vector3,"sn":"headScale0"},{"a":1,"n":"headT","t":4,"rt":$n[0].Single,"sn":"headT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Hint")],"a":2,"n":"hint","t":4,"rt":$n[3].GameObject,"sn":"hint"},{"a":2,"n":"panel","t":4,"rt":$n[3].RectTransform,"sn":"panel"},{"a":2,"n":"panelGroup","t":4,"rt":$n[3].CanvasGroup,"sn":"panelGroup"},{"a":1,"n":"panelPos0","t":4,"rt":$n[3].Vector2,"sn":"panelPos0"},{"a":2,"n":"pulseDuration","t":4,"rt":$n[0].Single,"sn":"pulseDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"retryButton","t":4,"rt":$n[2].Button,"sn":"retryButton"},{"at":[new UnityEngine.HeaderAttribute("Animation")],"a":2,"n":"slideDistance","t":4,"rt":$n[0].Single,"sn":"slideDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"slideDuration","t":4,"rt":$n[0].Single,"sn":"slideDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"wiggleDuration","t":4,"rt":$n[0].Single,"sn":"wiggleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MelonAd.UIController end.*/

    /*MelonAd.UICover start.*/
    $m("MelonAd.UICover", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Aspect","t":8,"sn":"Aspect","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"target","t":4,"rt":$n[2].Graphic,"sn":"target"}]}; }, $n);
    /*MelonAd.UICover end.*/

    }});

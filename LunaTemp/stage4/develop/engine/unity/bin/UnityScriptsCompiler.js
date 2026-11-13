if ( TRACE ) { TRACE( JSON.parse( '["AcidAudio#init","AcidAudio#Play","AcidAudio#PlayHit","AcidAudio#PlayPop","AcidAudio#PlayClick","AcidAudio#PlayGhost","AcidAudio#Delayed","AcidAudio#SetAcid","AcidAudio#Start","AcidAudio#Update","AcidCustomBG#Show","AcidCustomBG#LateUpdate","AcidCustomBG#Fit","AcidFailPanel#init","AcidFailPanel#OnEnable","AcidFailPanel#Update","AcidFailPanel#Apply","AcidFx#init","AcidFx#Blood","AcidFx#Fling","AcidFx#PlusOne","AcidFx#Ghost","AcidFx#Hit","AcidFx#Update","AcidFx.Piece#init","AcidGame#Running#get","AcidGame#Started#get","AcidGame#CurrentState#get","AcidGame#Fx#get","AcidGame#Kills#get","AcidGame#Sfx#get","AcidGame#PlankTop#get","AcidGame#PlankAtBottom#get","AcidGame#init","AcidGame#Awake","AcidGame#RegisterPart","AcidGame#UnregisterPart","AcidGame#ManOf","AcidGame#Start","AcidGame#StartGame","AcidGame#InAcid","AcidGame#OnFirstTouch","AcidGame#OnStickHit","AcidGame#OnManDied","AcidGame#OnManLanded","AcidGame#OnManRemoved","AcidGame#Update","AcidGame#FixedUpdate","AcidGame#TimeUp","AcidGame#UpdateTimeUp","AcidGame#NextWave","AcidGame#SpawnLimp","AcidGame#Spawn","AcidGame#FirstManX","AcidGame#Finish","AcidGame#ShowResult","AcidGame#UpdateHand","AcidGhost#init","AcidGhost#Play","AcidGhost#Update","AcidGhost#Apply","AcidHit#init","AcidHit#Start","AcidHit#Update","AcidHit#Apply","AcidIntro#init","AcidIntro#Awake","AcidIntro#Update","AcidIntro#OnStart","AcidKillCounter#init","AcidKillCounter#Start","AcidKillCounter#SetCount","AcidKillCounter#Update","AcidMan#init","AcidMan#PullFoot","AcidMan#Dead#get","AcidMan#Landed#get","AcidMan#KilledByAcid#get","AcidMan#Center#get","AcidMan#HeadPosition#get","AcidMan#init","AcidMan#GoLimp","AcidMan#Init","AcidMan#FixedUpdate","AcidMan#Update","AcidMan#CheckLanded","AcidMan#OnTileEaten","AcidMan#Kill","AcidMan#Shatter","AcidMan#Remove","AcidMan.Part#init","AcidStick#Held#get","AcidStick#init","AcidStick#Init","AcidStick#Update","AcidStick#Reachable","AcidStick#FixedUpdate","AcidStick#OnCollisionEnter2D","AcidTank#SetAlpha","AcidTank#Settled#get","AcidTank#InAcid#get","AcidTank#Depth#get","AcidTank#init","AcidTank#Init","AcidTank#Update","AcidTank#Show","AcidWave#Awake","AcidWave#Update","LunaController#init","LunaController#Awake","LunaController#Start","LunaController#BeginTimer","LunaController#ShowEndUI","LunaController#ClickCTA","LunaController#EndAfterTime"]' ) ); }
/**
 * @version 1.0.9813.17088
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AcidAudio start.*/
    Bridge.define("AcidAudio", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            sfx: null,
            acidLoop: null,
            hit: null,
            ghost: null,
            pop: null,
            click: null,
            ghostDelay: 0,
            acidFade: 0,
            voices: null,
            acidTarget: 0,
            nextVoice: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidAudio#init", this ); }

                this.ghostDelay = 0.5;
                this.acidFade = 2.0;
            }
        },
        methods: {
            /*AcidAudio.Play start.*/
            Play: function (clip) {
if ( TRACE ) { TRACE( "AcidAudio#Play", this ); }

                if (!UnityEngine.Object.op_Implicit(clip) || this.voices == null || this.voices.length === 0) {
                    return;
                }
                var v = null;
                for (var i = 0; i < this.voices.length; i = (i + 1) | 0) {
                    var c = this.voices[(((this.nextVoice + i) | 0)) % this.voices.length];
                    if (!c.isPlaying) {
                        v = c;
                        break;
                    }
                }
                if (UnityEngine.Component.op_Equality(v, null)) {
                    v = this.voices[this.nextVoice];
                }
                this.nextVoice = (((this.nextVoice + 1) | 0)) % this.voices.length;
                v.clip = clip;
                v.volume = 1.0;
                v.Play(); // restarts the voice if it was stolen mid-clip
            },
            /*AcidAudio.Play end.*/

            /*AcidAudio.PlayHit start.*/
            PlayHit: function () {
if ( TRACE ) { TRACE( "AcidAudio#PlayHit", this ); }

                this.Play(this.hit);
            },
            /*AcidAudio.PlayHit end.*/

            /*AcidAudio.PlayPop start.*/
            PlayPop: function () {
if ( TRACE ) { TRACE( "AcidAudio#PlayPop", this ); }

                this.Play(this.pop);
            },
            /*AcidAudio.PlayPop end.*/

            /*AcidAudio.PlayClick start.*/
            PlayClick: function () {
if ( TRACE ) { TRACE( "AcidAudio#PlayClick", this ); }

                if (UnityEngine.Object.op_Implicit(this.click) && UnityEngine.Object.op_Implicit(this.sfx)) {
                    this.sfx.PlayOneShot(this.click);
                }
            },
            /*AcidAudio.PlayClick end.*/

            /*AcidAudio.PlayGhost start.*/
            PlayGhost: function () {
if ( TRACE ) { TRACE( "AcidAudio#PlayGhost", this ); }

                if (UnityEngine.Object.op_Implicit(this.ghost)) {
                    this.StartCoroutine$1(this.Delayed(this.ghost, this.ghostDelay));
                }
            },
            /*AcidAudio.PlayGhost end.*/

            /*AcidAudio.Delayed start.*/
            Delayed: function (clip, delay) {
if ( TRACE ) { TRACE( "AcidAudio#Delayed", this ); }

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
                                    this.Play(clip);

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
            /*AcidAudio.Delayed end.*/

            /*AcidAudio.SetAcid start.*/
            SetAcid: function (on) {
if ( TRACE ) { TRACE( "AcidAudio#SetAcid", this ); }

                this.acidTarget = on ? 1.0 : 0.0;
            },
            /*AcidAudio.SetAcid end.*/

            /*AcidAudio.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AcidAudio#Start", this ); }

                if (UnityEngine.Object.op_Implicit(this.acidLoop)) {
                    this.acidLoop.volume = 0;
                    this.acidLoop.loop = true;
                    this.acidLoop.Play();
                }
            },
            /*AcidAudio.Start end.*/

            /*AcidAudio.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidAudio#Update", this ); }

                if (UnityEngine.Object.op_Implicit(this.acidLoop)) {
                    this.acidLoop.volume = UnityEngine.Mathf.MoveTowards(this.acidLoop.volume, this.acidTarget, UnityEngine.Time.deltaTime * this.acidFade);
                }
            },
            /*AcidAudio.Update end.*/


        }
    });
    /*AcidAudio end.*/

    /*AcidCustomBG start.*/
    Bridge.define("AcidCustomBG", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cam: null,
            image: null,
            rect: null,
            lastW: 0,
            lastH: 0,
            lastSize: 0
        },
        methods: {
            /*AcidCustomBG.Show start.*/
            Show: function (tex) {
if ( TRACE ) { TRACE( "AcidCustomBG#Show", this ); }

                if (!UnityEngine.Object.op_Implicit(this.image)) {
                    return;
                }
                this.image.texture = tex;
                this.image.enabled = tex != null;
                this.lastW = -1;
                this.Fit();
            },
            /*AcidCustomBG.Show end.*/

            /*AcidCustomBG.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "AcidCustomBG#LateUpdate", this ); }

                if (!UnityEngine.Object.op_Implicit(this.cam) || !UnityEngine.Object.op_Implicit(this.image) || !this.image.enabled) {
                    return;
                }
                if (UnityEngine.Screen.width !== this.lastW || UnityEngine.Screen.height !== this.lastH || this.cam.orthographicSize !== this.lastSize) {
                    this.Fit();
                }
            },
            /*AcidCustomBG.LateUpdate end.*/

            /*AcidCustomBG.Fit start.*/
            Fit: function () {
if ( TRACE ) { TRACE( "AcidCustomBG#Fit", this ); }

                if (!UnityEngine.Object.op_Implicit(this.cam) || !UnityEngine.Object.op_Implicit(this.image) || !UnityEngine.Object.op_Implicit(this.rect) || this.image.texture == null) {
                    return;
                }
                this.lastW = UnityEngine.Screen.width;
                this.lastH = UnityEngine.Screen.height;
                this.lastSize = this.cam.orthographicSize;
                var aspect = this.lastH > 0 ? this.lastW / this.lastH : 1.0;
                var viewH = this.cam.orthographicSize * 2.0, viewW = viewH * aspect;
                var c = this.cam.transform.position.$clone();
                this.rect.position = new pc.Vec3( c.x, c.y, this.rect.position.z );
                this.rect.sizeDelta = new pc.Vec2( viewW, viewH );
                // Cover: show the centre of the image with the view's aspect.
                var texAspect = this.image.texture.height > 0 ? this.image.texture.width / this.image.texture.height : 1.0;
                var uv = new UnityEngine.Rect.$ctor1(0.0, 0.0, 1.0, 1.0);
                if (texAspect > aspect) {
                    uv.width = aspect / texAspect;
                    uv.x = (1.0 - uv.width) * 0.5;
                } else {
                    uv.height = texAspect / aspect;
                    uv.y = (1.0 - uv.height) * 0.5;
                }
                this.image.uvRect = uv.$clone();
            },
            /*AcidCustomBG.Fit end.*/


        }
    });
    /*AcidCustomBG end.*/

    /*AcidFailPanel start.*/
    Bridge.define("AcidFailPanel", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            shadow: null,
            finger: null,
            content: null,
            panelRect: null,
            designHeight: 0,
            shadowAlpha: 0,
            fadeTime: 0,
            pulsePeriod: 0,
            pulseScale: 0,
            t: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidFailPanel#init", this ); }

                this.designHeight = 1920.0;
                this.shadowAlpha = 0.5;
                this.fadeTime = 0.2;
                this.pulsePeriod = 1.5;
                this.pulseScale = 0.1;
            }
        },
        methods: {
            /*AcidFailPanel.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "AcidFailPanel#OnEnable", this ); }

                this.t = 0;
                this.Apply();
            },
            /*AcidFailPanel.OnEnable end.*/

            /*AcidFailPanel.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidFailPanel#Update", this ); }

                this.t += UnityEngine.Time.unscaledDeltaTime;
                this.Apply();
            },
            /*AcidFailPanel.Update end.*/

            /*AcidFailPanel.Apply start.*/
            Apply: function () {
if ( TRACE ) { TRACE( "AcidFailPanel#Apply", this ); }

                if (UnityEngine.Object.op_Implicit(this.content) && UnityEngine.Object.op_Implicit(this.panelRect) && this.designHeight > 0) {
                    var k = this.panelRect.rect.height / this.designHeight;
                    this.content.localScale = new pc.Vec3( k, k, 1.0 );
                }
                if (UnityEngine.Object.op_Implicit(this.shadow)) {
                    var c = this.shadow.color.$clone();
                    c.a = this.shadowAlpha * (this.fadeTime > 0 ? Math.max(0, Math.min(1, this.t / this.fadeTime)) : 1.0);
                    this.shadow.color = c.$clone();
                }
                if (UnityEngine.Object.op_Implicit(this.finger)) {
                    var s = 1.0 + this.pulseScale * Math.sin(6.28318548 * this.t / this.pulsePeriod);
                    this.finger.localScale = new pc.Vec3( s, s, 1.0 );
                }
            },
            /*AcidFailPanel.Apply end.*/


        }
    });
    /*AcidFailPanel end.*/

    /*AcidFx start.*/
    Bridge.define("AcidFx", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ghostPrefab: null,
            hitPrefab: null,
            root: null,
            flingTime: 0,
            bloodPrefab: null,
            bloodCount: 0,
            bloodTime: 0,
            bloodSize: null,
            bloodSpeed: null,
            bloodInherit: 0,
            bloodDark: null,
            bloodLight: null,
            bloodOrder: 0,
            plusOnePrefab: null,
            plusOneTime: 0,
            plusOneRise: 0,
            pieces: null,
            drops: null,
            pops: null,
            game: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidFx#init", this ); }

                this.bloodSize = new UnityEngine.Vector2();
                this.bloodSpeed = new UnityEngine.Vector2();
                this.bloodDark = new UnityEngine.Color();
                this.bloodLight = new UnityEngine.Color();
                this.flingTime = 0.7;
                this.bloodCount = 60;
                this.bloodTime = 1.2;
                this.bloodSize = new pc.Vec2( 0.05, 0.14 );
                this.bloodSpeed = new pc.Vec2( 3.0, 9.0 );
                this.bloodInherit = 0.35;
                this.bloodDark = new pc.Color( 0.45, 0.02, 0.02, 1.0 );
                this.bloodLight = new pc.Color( 0.9, 0.08, 0.06, 1.0 );
                this.bloodOrder = 470;
                this.plusOneTime = 0.9;
                this.plusOneRise = 1.2;
                this.pieces = new (System.Collections.Generic.List$1(AcidFx.Piece)).ctor();
                this.drops = new (System.Collections.Generic.List$1(AcidFx.Piece)).ctor();
                this.pops = new (System.Collections.Generic.List$1(AcidFx.Piece)).ctor();
            }
        },
        methods: {
            /*AcidFx.Blood start.*/
            Blood: function (pos, push) {
if ( TRACE ) { TRACE( "AcidFx#Blood", this ); }

                if (!UnityEngine.Object.op_Implicit(this.bloodPrefab)) {
                    return;
                }
                var parent = UnityEngine.Object.op_Implicit(this.root) ? this.root : this.transform;
                var inherit = push.$clone().scale( this.bloodInherit );
                if (inherit.length() > 5.0) {
                    inherit = inherit.clone().normalize().$clone().scale( 5.0 );
                }
                for (var i = 0; i < this.bloodCount; i = (i + 1) | 0) {
                    var sr = UnityEngine.Object.Instantiate$3(UnityEngine.SpriteRenderer, this.bloodPrefab, pos, pc.Quat.IDENTITY.clone(), parent);
                    var size = UnityEngine.Random.Range$1(this.bloodSize.x, this.bloodSize.y);
                    var spriteSize = UnityEngine.Object.op_Implicit(sr.sprite) ? UnityEngine.Vector2.FromVector3(sr.sprite.bounds.halfExtents.$clone().scale( 2 )) : pc.Vec2.ONE.clone();
                    sr.transform.localScale = new pc.Vec3( size / UnityEngine.Mathf.Max(0.001, spriteSize.x), size / UnityEngine.Mathf.Max(0.001, spriteSize.y), 1.0 );
                    sr.color = pc.Color.lerp( this.bloodDark, this.bloodLight, UnityEngine.Random.value );
                    sr.sortingOrder = this.bloodOrder;
                    var a = UnityEngine.Random.Range$1(0.0, 6.28318548);
                    var dir = new pc.Vec2( Math.cos(a), Math.sin(a) * 0.7 + 0.5 ).clone().normalize().$clone();
                    var p = new AcidFx.Piece();
                    p.tr = sr.transform;
                    p.sr = sr;
                    p.vel = dir.$clone().scale( UnityEngine.Random.Range$1(this.bloodSpeed.x, this.bloodSpeed.y) ).add( inherit );
                    p.t = UnityEngine.Random.Range$1(0.0, 0.3);
                    this.drops.add(p);
                }
            },
            /*AcidFx.Blood end.*/

            /*AcidFx.Fling start.*/
            Fling: function (sr) {
if ( TRACE ) { TRACE( "AcidFx#Fling", this ); }

                var p = new AcidFx.Piece();
                p.tr = sr.transform;
                p.sr = sr;
                p.tr.SetParent(UnityEngine.Object.op_Implicit(this.root) ? this.root : this.transform, true);
                p.vel = new pc.Vec2( UnityEngine.Random.Range$1(-3.0, 3.0), UnityEngine.Random.Range$1(3.0, 6.0) );
                p.spin = UnityEngine.Random.Range$1(-720.0, 720.0);
                this.pieces.add(p);
            },
            /*AcidFx.Fling end.*/

            /*AcidFx.PlusOne start.*/
            PlusOne: function (pos) {
if ( TRACE ) { TRACE( "AcidFx#PlusOne", this ); }

                if (!UnityEngine.Object.op_Implicit(this.plusOnePrefab)) {
                    return;
                }
                var sr = UnityEngine.Object.Instantiate$3(UnityEngine.SpriteRenderer, this.plusOnePrefab, pos, pc.Quat.IDENTITY.clone(), UnityEngine.Object.op_Implicit(this.root) ? this.root : this.transform);
                var p = new AcidFx.Piece();
                p.tr = sr.transform;
                p.sr = sr;
                p.start = pos.$clone();
                p.scale = sr.transform.localScale.x;
                sr.transform.localScale = pc.Vec3.ZERO.clone();
                this.pops.add(p);
            },
            /*AcidFx.PlusOne end.*/

            /*AcidFx.Ghost start.*/
            Ghost: function (sprite, pos) {
if ( TRACE ) { TRACE( "AcidFx#Ghost", this ); }

                if (!UnityEngine.Object.op_Implicit(this.ghostPrefab) || !UnityEngine.Object.op_Implicit(sprite)) {
                    return;
                }
                var g = UnityEngine.Object.Instantiate$3(AcidGhost, this.ghostPrefab, pos, pc.Quat.IDENTITY.clone(), UnityEngine.Object.op_Implicit(this.root) ? this.root : this.transform);
                g.Play(sprite);
            },
            /*AcidFx.Ghost end.*/

            /*AcidFx.Hit start.*/
            Hit: function (pos) {
if ( TRACE ) { TRACE( "AcidFx#Hit", this ); }

                if (!UnityEngine.Object.op_Implicit(this.hitPrefab)) {
                    return;
                }
                UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.hitPrefab.gameObject, pos, pc.Quat.IDENTITY.clone(), UnityEngine.Object.op_Implicit(this.root) ? this.root : this.transform);
            },
            /*AcidFx.Hit end.*/

            /*AcidFx.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidFx#Update", this ); }

                var dt = UnityEngine.Time.deltaTime;
                for (var i = (this.pieces.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var p = this.pieces.getItem(i);
                    if (!UnityEngine.Object.op_Implicit(p.tr)) {
                        this.pieces.removeAt(i);
                        continue;
                    }
                    p.t += dt / this.flingTime;
                    p.vel.y -= 14.0 * dt;
                    p.tr.position = p.tr.position.$clone().add( UnityEngine.Vector3.FromVector2((p.vel.$clone().scale( dt ))) );
                    p.tr.Rotate(0, 0, p.spin * dt);
                    var c = p.sr.color.$clone();
                    c.a = 1 - p.t;
                    p.sr.color = c.$clone();
                    if (p.t >= 1) {
                        UnityEngine.MonoBehaviour.Destroy(p.tr.gameObject);
                        this.pieces.removeAt(i);
                    }
                }
                for (var i1 = (this.pops.Count - 1) | 0; i1 >= 0; i1 = (i1 - 1) | 0) {
                    var p1 = this.pops.getItem(i1);
                    if (!UnityEngine.Object.op_Implicit(p1.tr)) {
                        this.pops.removeAt(i1);
                        continue;
                    }
                    p1.t += dt / this.plusOneTime;
                    var t = p1.t;
                    // pop: 0 -> 1.4 in the first 15%, back to 1 by 30%
                    var pop = t < 0.15 ? pc.math.lerp(0.0, 1.4, t / 0.15) : t < 0.3 ? pc.math.lerp(1.4, 1.0, (t - 0.15) / 0.15) : 1.0;
                    p1.tr.localScale = new pc.Vec3( p1.scale * pop, p1.scale * pop, 1.0 );
                    var rise = this.plusOneRise * (1.0 - (1.0 - t) * (1.0 - t));
                    p1.tr.position = new pc.Vec3( p1.start.x, p1.start.y + rise, p1.start.z );
                    var c1 = p1.sr.color.$clone();
                    c1.a = t < 0.6 ? 1.0 : Math.max(0, Math.min(1, (1.0 - t) / 0.4));
                    p1.sr.color = c1.$clone();
                    if (p1.t >= 1) {
                        UnityEngine.MonoBehaviour.Destroy(p1.tr.gameObject);
                        this.pops.removeAt(i1);
                    }
                }
                for (var i2 = (this.drops.Count - 1) | 0; i2 >= 0; i2 = (i2 - 1) | 0) {
                    var p2 = this.drops.getItem(i2);
                    if (!UnityEngine.Object.op_Implicit(p2.tr)) {
                        this.drops.removeAt(i2);
                        continue;
                    }
                    p2.t += dt / this.bloodTime;
                    p2.vel.y -= 14.0 * dt;
                    p2.vel.x *= 1.0 - 1.5 * dt;
                    p2.tr.position = p2.tr.position.$clone().add( UnityEngine.Vector3.FromVector2((p2.vel.$clone().scale( dt ))) );
                    var c2 = p2.sr.color.$clone();
                    c2.a = Math.max(0, Math.min(1, (1 - p2.t) * 2.0));
                    p2.sr.color = c2.$clone();
                    var inAcid = UnityEngine.MonoBehaviour.op_Inequality(this.game, null) && this.game.InAcid(p2.tr.position);
                    if (p2.t >= 1 || inAcid) {
                        UnityEngine.MonoBehaviour.Destroy(p2.tr.gameObject);
                        this.drops.removeAt(i2);
                    }
                }
            },
            /*AcidFx.Update end.*/


        }
    });
    /*AcidFx end.*/

    /*AcidFx+Piece start.*/
    Bridge.define("AcidFx.Piece", {
        $kind: 1002,
        fields: {
            tr: null,
            sr: null,
            vel: null,
            spin: 0,
            t: 0,
            start: null,
            scale: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidFx.Piece#init", this ); }

                this.vel = new UnityEngine.Vector2();
                this.start = new UnityEngine.Vector3();
            }
        }
    });
    /*AcidFx+Piece end.*/

    /*AcidGame start.*/
    Bridge.define("AcidGame", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            manPrefabs: null,
            menRoot: null,
            stick: null,
            fx: null,
            plank: null,
            sfx: null,
            killCounter: null,
            acidTop: 0,
            acidBottom: 0,
            poolHalfWidth: 0,
            poolCenterX: 0,
            plankStartY: 0,
            plankStep: 0,
            plankMinY: 0,
            plankSpeed: 0,
            plankSpeedFinished: 0,
            waveCount: null,
            wavePause: null,
            spawnY: 0,
            spawnHalfWidth: 0,
            maxAcidDeaths: 0,
            failWhenPlankSunk: false,
            hand: null,
            handRenderer: null,
            winPanel: null,
            failPanel: null,
            resultDelay: 0,
            tankPrefab: null,
            tankDropDelay: 0,
            plankFinishY: 0,
            tankEndDelay: 0,
            tankTimeout: 0,
            finaleManInterval: 0,
            finaleManMax: 0,
            state: 0,
            men: null,
            onPlank: 0,
            acidDeaths: 0,
            waveId: 0,
            wavePauseLeft: 0,
            tutorialDone: false,
            hint: null,
            spawnSerial: 0,
            levelFinished: false,
            handT: 0,
            resultTimer: 0,
            sinking: false,
            timeUp: false,
            tank: null,
            timeUpT: 0,
            tankDropped: false,
            finaleManT: 0,
            finaleMen: 0,
            onTimeUpDone: null,
            kills: 0,
            started: false,
            manOf: null,
            plankHalfHeight: 0,
            finishY: 0,
            firstManSwordGap: 0
        },
        events: {
            OnStarted: null
        },
        props: {
            Running: {
                get: function () {
if ( TRACE ) { TRACE( "AcidGame#Running#get", this ); }

                    return this.started && this.state === AcidGame.State.Run;
                }
            },
            Started: {
                get: function () {
if ( TRACE ) { TRACE( "AcidGame#Started#get", this ); }

                    return this.started;
                }
            },
            CurrentState: {
                get: function () {
if ( TRACE ) { TRACE( "AcidGame#CurrentState#get", this ); }

                    return this.state;
                }
            },
            Fx: {
                get: function () {
if ( TRACE ) { TRACE( "AcidGame#Fx#get", this ); }

                    return this.fx;
                }
            },
            Kills: {
                get: function () {
if ( TRACE ) { TRACE( "AcidGame#Kills#get", this ); }

                    return this.kills;
                }
            },
            Sfx: {
                get: function () {
if ( TRACE ) { TRACE( "AcidGame#Sfx#get", this ); }

                    return this.sfx;
                }
            },
            PlankTop: {
                get: function () {
if ( TRACE ) { TRACE( "AcidGame#PlankTop#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.plank) ? this.plank.position.y + this.plankHalfHeight : this.acidTop;
                }
            },
            PlankAtBottom: {
                get: function () {
if ( TRACE ) { TRACE( "AcidGame#PlankAtBottom#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.plank) && Math.abs(this.plank.position.y - this.finishY) < 0.01;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidGame#init", this ); }

                this.acidTop = 3.4;
                this.acidBottom = 0.0;
                this.poolHalfWidth = 2.6;
                this.poolCenterX = 0.0;
                this.plankStartY = 3.8;
                this.plankStep = 0.12;
                this.plankMinY = 1.8;
                this.plankSpeed = 0.15;
                this.plankSpeedFinished = 0.3;
                this.waveCount = System.Array.init([1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], System.Int32);
                this.wavePause = System.Array.init([3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], System.Single);
                this.spawnY = 9.0;
                this.spawnHalfWidth = 2.1;
                this.maxAcidDeaths = 5;
                this.failWhenPlankSunk = true;
                this.resultDelay = 1.0;
                this.tankDropDelay = 0.0;
                this.plankFinishY = 2.2;
                this.tankEndDelay = 3.0;
                this.tankTimeout = 15.0;
                this.finaleManInterval = 5.0;
                this.finaleManMax = 10;
                this.state = AcidGame.State.Run;
                this.men = new (System.Collections.Generic.List$1(AcidMan)).ctor();
                this.resultTimer = -1;
                this.timeUpT = -1;
                this.manOf = new (System.Collections.Generic.Dictionary$2(UnityEngine.Collider2D,AcidMan)).ctor();
                this.plankHalfHeight = 0.078195;
                this.firstManSwordGap = 1.2;
            }
        },
        methods: {
            /*AcidGame.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AcidGame#Awake", this ); }

                if (UnityEngine.Object.op_Implicit(this.winPanel)) {
                    this.winPanel.SetActive(false);
                }
                if (UnityEngine.Object.op_Implicit(this.failPanel)) {
                    this.failPanel.SetActive(false);
                }
            },
            /*AcidGame.Awake end.*/

            /*AcidGame.RegisterPart start.*/
            RegisterPart: function (col, man) {
if ( TRACE ) { TRACE( "AcidGame#RegisterPart", this ); }

                if (UnityEngine.Object.op_Implicit(col)) {
                    this.manOf.setItem(col, man);
                }
            },
            /*AcidGame.RegisterPart end.*/

            /*AcidGame.UnregisterPart start.*/
            UnregisterPart: function (col) {
if ( TRACE ) { TRACE( "AcidGame#UnregisterPart", this ); }

                if (UnityEngine.Object.op_Implicit(col)) {
                    this.manOf.remove(col);
                }
            },
            /*AcidGame.UnregisterPart end.*/

            /*AcidGame.ManOf start.*/
            ManOf: function (col) {
if ( TRACE ) { TRACE( "AcidGame#ManOf", this ); }

                var man = { };
                return UnityEngine.Component.op_Inequality(col, null) && this.manOf.tryGetValue(col, man) ? man.v : null;
            },
            /*AcidGame.ManOf end.*/

            /*AcidGame.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AcidGame#Start", this ); }

                if (UnityEngine.Object.op_Implicit(this.stick)) {
                    this.stick.Init(this);
                }
                if (UnityEngine.Object.op_Implicit(this.plank)) {
                    this.plank.position = new pc.Vec2( this.plank.position.x, this.plankStartY );
                }
            },
            /*AcidGame.Start end.*/

            /*AcidGame.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "AcidGame#StartGame", this ); }

                if (this.started) {
                    return;
                }
                this.started = true;
                this.NextWave();
                if (!Bridge.staticEquals(this.OnStarted, null)) {
                    this.OnStarted();
                }
            },
            /*AcidGame.StartGame end.*/

            /*AcidGame.InAcid start.*/
            InAcid: function (p) {
if ( TRACE ) { TRACE( "AcidGame#InAcid", this ); }

                return p.y < this.acidTop && p.y > this.acidBottom - 1.0 && Math.abs(p.x - this.poolCenterX) < this.poolHalfWidth + 0.1;
            },
            /*AcidGame.InAcid end.*/

            /*AcidGame.OnFirstTouch start.*/
            OnFirstTouch: function () {
if ( TRACE ) { TRACE( "AcidGame#OnFirstTouch", this ); }
 },
            /*AcidGame.OnFirstTouch end.*/

            /*AcidGame.OnStickHit start.*/
            OnStickHit: function (man, at) {
if ( TRACE ) { TRACE( "AcidGame#OnStickHit", this ); }

                if (!this.Running || man.Dead) {
                    return;
                }
                var head = man.HeadPosition.$clone();
                if (man.Kill()) {
                    if (man.Landed) {
                        this.onPlank = (this.onPlank - 1) | 0;
                    }
                    this.kills = (this.kills + 1) | 0;
                    if (UnityEngine.Object.op_Implicit(this.killCounter)) {
                        this.killCounter.SetCount(this.kills, true);
                    }
                    this.tutorialDone = true;
                    this.hint = null;
                    if (UnityEngine.Object.op_Implicit(this.fx)) {
                        this.fx.Hit(at);
                        this.fx.Blood(at, UnityEngine.Object.op_Implicit(this.stick) && UnityEngine.Object.op_Implicit(this.stick.body) ? this.stick.body.linearVelocity.$clone() : pc.Vec2.ZERO.clone());
                        this.fx.Ghost(man.ghostSprite, head);
                        this.fx.PlusOne(head.$clone().add( new pc.Vec3( 0.0, 0.4, 0.0 ) ));
                    }
                    if (UnityEngine.Object.op_Implicit(this.sfx)) {
                        this.sfx.PlayHit();
                        this.sfx.PlayGhost();
                    }
                }
            },
            /*AcidGame.OnStickHit end.*/

            /*AcidGame.OnManDied start.*/
            OnManDied: function (man, byAcid) {
if ( TRACE ) { TRACE( "AcidGame#OnManDied", this ); }

                if (!byAcid) {
                    return;
                }
                this.acidDeaths = (this.acidDeaths + 1) | 0;
                if (UnityEngine.Object.op_Implicit(this.fx)) {
                    this.fx.Ghost(man.ghostSprite, man.HeadPosition);
                }
                if (UnityEngine.Object.op_Implicit(this.sfx) && this.Running) {
                    this.sfx.PlayGhost();
                }
            },
            /*AcidGame.OnManDied end.*/

            /*AcidGame.OnManLanded start.*/
            OnManLanded: function (man) {
if ( TRACE ) { TRACE( "AcidGame#OnManLanded", this ); }

                if (this.state === AcidGame.State.Run) {
                    this.onPlank = (this.onPlank + 1) | 0;
                }
            },
            /*AcidGame.OnManLanded end.*/

            /*AcidGame.OnManRemoved start.*/
            OnManRemoved: function (man) {
if ( TRACE ) { TRACE( "AcidGame#OnManRemoved", this ); }

                this.men.remove(man);
                if (UnityEngine.MonoBehaviour.op_Equality(this.hint, man)) {
                    this.hint = null;
                }
            },
            /*AcidGame.OnManRemoved end.*/

            /*AcidGame.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidGame#Update", this ); }

                if (this.resultTimer >= 0) {
                    this.resultTimer -= UnityEngine.Time.deltaTime;
                    if (this.resultTimer < 0) {
                        this.ShowResult();
                    }
                }
                if (this.started && this.state === AcidGame.State.Run) {
                    if (this.failWhenPlankSunk && UnityEngine.Object.op_Implicit(this.plank) && this.PlankTop < this.acidTop) {
                        this.Finish(AcidGame.State.Fail);
                    } else {
                        if (this.tutorialDone) {
                            this.wavePauseLeft -= UnityEngine.Time.deltaTime;
                        }
                        if (this.wavePauseLeft <= 0) {
                            this.NextWave();
                        }
                    }
                }
                this.UpdateTimeUp();
                this.UpdateHand();
                if (UnityEngine.Object.op_Implicit(this.sfx)) {
                    this.sfx.SetAcid((this.state === AcidGame.State.Run && this.onPlank >= 5) || (UnityEngine.MonoBehaviour.op_Inequality(this.tank, null) && this.tank.InAcid));
                }
            },
            /*AcidGame.Update end.*/

            /*AcidGame.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "AcidGame#FixedUpdate", this ); }

                if (!UnityEngine.Object.op_Implicit(this.plank)) {
                    return;
                }
                var target = this.levelFinished ? this.plankStartY : UnityEngine.Mathf.Max(this.plankMinY, this.plankStartY - this.onPlank * this.plankStep);
                var speed = this.levelFinished ? this.plankSpeedFinished : this.plankSpeed;
                if (this.sinking) {
                    target = this.finishY;
                    speed = this.plankSpeedFinished;
                }
                var p = this.plank.position.$clone();
                p.y = UnityEngine.Mathf.MoveTowards(p.y, target, speed * UnityEngine.Time.fixedDeltaTime);
                this.plank.MovePosition(p);
            },
            /*AcidGame.FixedUpdate end.*/

            /*AcidGame.TimeUp start.*/
            TimeUp: function (onDone) {
if ( TRACE ) { TRACE( "AcidGame#TimeUp", this ); }

                if (this.timeUp) {
                    return;
                }
                if (!UnityEngine.Object.op_Implicit(this.tankPrefab)) {
                    if (!Bridge.staticEquals(onDone, null)) {
                        onDone();
                    }
                    return;
                }
                this.timeUp = true;
                if (this.state === AcidGame.State.Run) {
                    this.state = AcidGame.State.TimeUp;
                }
                this.sinking = true;
                this.finishY = UnityEngine.Object.op_Implicit(this.plank) ? UnityEngine.Mathf.Min(this.plank.position.y, this.plankFinishY) : this.plankFinishY;
                this.onTimeUpDone = onDone;
                this.timeUpT = 0;
                this.tankDropped = false;
            },
            /*AcidGame.TimeUp end.*/

            /*AcidGame.UpdateTimeUp start.*/
            UpdateTimeUp: function () {
if ( TRACE ) { TRACE( "AcidGame#UpdateTimeUp", this ); }

                if (!this.timeUp) {
                    return;
                }
                if (this.timeUpT >= 0) {
                    this.timeUpT += UnityEngine.Time.deltaTime;
                }
                if (!this.tankDropped && this.timeUpT >= this.tankDropDelay) {
                    this.tankDropped = true;
                    var pos = new pc.Vec3( this.poolCenterX, this.spawnY + 2.0, 0 );
                    this.tank = UnityEngine.Object.Instantiate$3(AcidTank, this.tankPrefab, pos, pc.Quat.IDENTITY.clone(), this.menRoot);
                    this.tank.Init(this);
                    this.finaleManT = this.finaleManInterval;
                }
                if (this.tankDropped && this.finaleMen < this.finaleManMax) {
                    this.finaleManT -= UnityEngine.Time.deltaTime;
                    if (this.finaleManT <= 0) {
                        this.finaleManT = this.finaleManInterval;
                        this.finaleMen = (this.finaleMen + 1) | 0;
                        this.SpawnLimp();
                    }
                }
                if (this.timeUpT < 0) {
                    return;
                }
                var done = UnityEngine.MonoBehaviour.op_Inequality(this.tank, null) && this.tank.Settled;
                if (done && this.timeUpT < this.tankTimeout - this.tankEndDelay) {
                    this.timeUpT = this.tankTimeout - this.tankEndDelay;
                }
                if (this.timeUpT >= this.tankTimeout) {
                    this.timeUpT = -1;
                    var cb = this.onTimeUpDone;
                    this.onTimeUpDone = null;
                    if (!Bridge.staticEquals(cb, null)) {
                        cb();
                    }
                }
            },
            /*AcidGame.UpdateTimeUp end.*/

            /*AcidGame.NextWave start.*/
            NextWave: function () {
if ( TRACE ) { TRACE( "AcidGame#NextWave", this ); }

                if (this.state !== AcidGame.State.Run) {
                    return;
                }
                var alive = 0;
                for (var i = 0; i < this.men.Count; i = (i + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.men.getItem(i)) && !this.men.getItem(i).Dead) {
                        alive = (alive + 1) | 0;
                    }
                }
                if (this.acidDeaths > this.maxAcidDeaths) {
                    this.Finish(AcidGame.State.Fail);
                    return;
                }
                if (this.waveId >= this.waveCount.length) {
                    if (alive === 0) {
                        this.Finish(AcidGame.State.Win);
                    }
                    return;
                }
                this.wavePauseLeft = this.waveId < this.wavePause.length ? this.wavePause[this.waveId] : 1.0;
                var n = this.waveCount[this.waveId];
                for (var i1 = 0; i1 < n; i1 = (i1 + 1) | 0) {
                    this.Spawn();
                }
                this.waveId = (this.waveId + 1) | 0;
            },
            /*AcidGame.NextWave end.*/

            /*AcidGame.SpawnLimp start.*/
            SpawnLimp: function () {
if ( TRACE ) { TRACE( "AcidGame#SpawnLimp", this ); }

                if (this.manPrefabs == null || this.manPrefabs.length === 0) {
                    return;
                }
                var prefab = this.manPrefabs[UnityEngine.Random.Range(0, this.manPrefabs.length)];
                if (!UnityEngine.Object.op_Implicit(prefab)) {
                    return;
                }
                var pos = new pc.Vec3( this.poolCenterX + UnityEngine.Random.Range$1(-this.spawnHalfWidth, this.spawnHalfWidth), this.spawnY + UnityEngine.Random.Range$1(0.0, 1.5), 0 );
                var man = UnityEngine.Object.Instantiate$3(AcidMan, prefab, pos, pc.Quat.IDENTITY.clone(), this.menRoot);
                man.Init(this, ((10 + Bridge.Int.mul((this.spawnSerial % 40), 10)) | 0));
                man.GoLimp();
                this.spawnSerial = (this.spawnSerial + 1) | 0;
                this.men.add(man);
            },
            /*AcidGame.SpawnLimp end.*/

            /*AcidGame.Spawn start.*/
            Spawn: function () {
if ( TRACE ) { TRACE( "AcidGame#Spawn", this ); }

                if (this.manPrefabs == null || this.manPrefabs.length === 0) {
                    return;
                }
                var prefab = this.manPrefabs[UnityEngine.Random.Range(0, this.manPrefabs.length)];
                if (!UnityEngine.Object.op_Implicit(prefab)) {
                    return;
                }
                var x = this.poolCenterX + UnityEngine.Random.Range$1(-this.spawnHalfWidth, this.spawnHalfWidth);
                if (this.spawnSerial === 0) {
                    x = this.FirstManX(x);
                }
                var pos = new pc.Vec3( x, this.spawnY + UnityEngine.Random.Range$1(0.0, 1.5), 0 );
                var man = UnityEngine.Object.Instantiate$3(AcidMan, prefab, pos, pc.Quat.IDENTITY.clone(), this.menRoot);
                man.Init(this, ((10 + Bridge.Int.mul((this.spawnSerial % 40), 10)) | 0));
                this.spawnSerial = (this.spawnSerial + 1) | 0;
                this.men.add(man);
                if (!this.tutorialDone && UnityEngine.MonoBehaviour.op_Equality(this.hint, null)) {
                    this.hint = man;
                }
            },
            /*AcidGame.Spawn end.*/

            /*AcidGame.FirstManX start.*/
            FirstManX: function (x) {
if ( TRACE ) { TRACE( "AcidGame#FirstManX", this ); }

                if (!UnityEngine.Object.op_Implicit(this.stick)) {
                    return x;
                }
                var sx = this.stick.transform.position.x;
                for (var i = 0; i < 20 && Math.abs(x - sx) < this.firstManSwordGap; i = (i + 1) | 0) {
                    x = this.poolCenterX + UnityEngine.Random.Range$1(-this.spawnHalfWidth, this.spawnHalfWidth);
                }
                if (Math.abs(x - sx) < this.firstManSwordGap) {
                    x = sx > this.poolCenterX ? UnityEngine.Mathf.Max(this.poolCenterX - this.spawnHalfWidth, sx - this.firstManSwordGap) : UnityEngine.Mathf.Min(this.poolCenterX + this.spawnHalfWidth, sx + this.firstManSwordGap);
                }
                return x;
            },
            /*AcidGame.FirstManX end.*/

            /*AcidGame.Finish start.*/
            Finish: function (result) {
if ( TRACE ) { TRACE( "AcidGame#Finish", this ); }

                if (this.state !== AcidGame.State.Run) {
                    return;
                }
                this.state = result;
                this.levelFinished = result === AcidGame.State.Win;
                if (result === AcidGame.State.Fail && UnityEngine.Object.op_Implicit(this.stick)) {
                    this.stick.gameObject.SetActive(false);
                }
                this.resultTimer = this.resultDelay;
            },
            /*AcidGame.Finish end.*/

            /*AcidGame.ShowResult start.*/
            ShowResult: function () {
if ( TRACE ) { TRACE( "AcidGame#ShowResult", this ); }

                if (this.state === AcidGame.State.Win && UnityEngine.Object.op_Implicit(this.winPanel)) {
                    this.winPanel.SetActive(true);
                }
                if (this.state === AcidGame.State.Fail && UnityEngine.Object.op_Implicit(this.failPanel)) {
                    this.failPanel.SetActive(true);
                }
            },
            /*AcidGame.ShowResult end.*/

            /*AcidGame.UpdateHand start.*/
            UpdateHand: function () {
if ( TRACE ) { TRACE( "AcidGame#UpdateHand", this ); }

                if (!UnityEngine.Object.op_Implicit(this.hand)) {
                    return;
                }
                var show = this.state === AcidGame.State.Run && !this.tutorialDone && UnityEngine.MonoBehaviour.op_Inequality(this.hint, null) && UnityEngine.MonoBehaviour.op_Inequality(this.stick, null) && !this.stick.Held;
                if (UnityEngine.Object.op_Implicit(this.handRenderer)) {
                    this.handRenderer.enabled = show;
                }
                if (!show) {
                    this.handT = 0;
                    return;
                }
                this.handT += UnityEngine.Time.deltaTime;
                var cycle = this.handT % 1.6;
                var from = this.stick.transform.position.$clone();
                var to = UnityEngine.Vector3.FromVector2(this.hint.Center.$clone());
                if (cycle < 0.5) {
                    this.hand.position = from.$clone();
                    this.hand.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( pc.math.lerp(1.5, 1.0, cycle / 0.5) );
                } else if (cycle < 1.2) {
                    var k = (cycle - 0.5) / 0.7;
                    k = k * k * (3 - 2 * k);
                    this.hand.position = new pc.Vec3().lerp( from, to, k );
                    this.hand.localScale = new pc.Vec3( 1, 1, 1 );
                } else {
                    this.hand.position = to.$clone();
                    if (UnityEngine.Object.op_Implicit(this.handRenderer)) {
                        this.handRenderer.enabled = false;
                    }
                }
            },
            /*AcidGame.UpdateHand end.*/


        }
    });
    /*AcidGame end.*/

    /*AcidGame+State start.*/
    Bridge.define("AcidGame.State", {
        $kind: 1006,
        statics: {
            fields: {
                Run: 0,
                Win: 1,
                Fail: 2,
                TimeUp: 3
            }
        }
    });
    /*AcidGame+State end.*/

    /*AcidGhost start.*/
    Bridge.define("AcidGhost", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            sr: null,
            life: 0,
            maxAlpha: 0,
            t: 0,
            dx: 0,
            dy: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidGhost#init", this ); }

                this.life = 3.0;
                this.maxAlpha = 0.6;
            }
        },
        methods: {
            /*AcidGhost.Play start.*/
            Play: function (sprite) {
if ( TRACE ) { TRACE( "AcidGhost#Play", this ); }

                if (UnityEngine.Object.op_Implicit(this.sr)) {
                    this.sr.sprite = sprite;
                }
                this.dx = UnityEngine.Random.Range$1(-0.5, 0.5);
                this.dy = 0.3;
                this.Apply();
            },
            /*AcidGhost.Play end.*/

            /*AcidGhost.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidGhost#Update", this ); }

                this.t += UnityEngine.Time.deltaTime / this.life;
                this.dy += UnityEngine.Time.deltaTime * 1.5;
                this.transform.position = this.transform.position.$clone().add( new pc.Vec3( this.dx, this.dy, 0 ).clone().scale( UnityEngine.Time.deltaTime ) );
                this.Apply();
                if (this.t >= 1) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*AcidGhost.Update end.*/

            /*AcidGhost.Apply start.*/
            Apply: function () {
if ( TRACE ) { TRACE( "AcidGhost#Apply", this ); }

                if (!UnityEngine.Object.op_Implicit(this.sr)) {
                    return;
                }
                var c = this.sr.color.$clone();
                c.a = Math.sin(UnityEngine.Mathf.PI * Math.max(0, Math.min(1, this.t))) * this.maxAlpha;
                this.sr.color = c.$clone();
            },
            /*AcidGhost.Apply end.*/


        }
    });
    /*AcidGhost end.*/

    /*AcidHit start.*/
    Bridge.define("AcidHit", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            dark: null,
            glow: null,
            life: 0,
            t: 0,
            s: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidHit#init", this ); }

                this.life = 0.55;
            }
        },
        methods: {
            /*AcidHit.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AcidHit#Start", this ); }

                this.s = UnityEngine.Random.Range$1(4.0, 8.0) * 0.25;
                this.Apply();
            },
            /*AcidHit.Start end.*/

            /*AcidHit.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidHit#Update", this ); }

                this.t += UnityEngine.Time.deltaTime / this.life;
                this.Apply();
                if (this.t >= 1) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*AcidHit.Update end.*/

            /*AcidHit.Apply start.*/
            Apply: function () {
if ( TRACE ) { TRACE( "AcidHit#Apply", this ); }

                var k = Math.max(0, Math.min(1, this.t)), sin = Math.sin(UnityEngine.Mathf.PI * k);
                if (UnityEngine.Object.op_Implicit(this.dark)) {
                    this.dark.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( (this.s * k) );
                    var c = this.dark.color.$clone();
                    c.a = sin * 0.5;
                    this.dark.color = c.$clone();
                }
                if (UnityEngine.Object.op_Implicit(this.glow)) {
                    this.glow.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( ((this.s - 0.25) * sin) );
                    var c1 = this.glow.color.$clone();
                    c1.a = k;
                    this.glow.color = c1.$clone();
                }
            },
            /*AcidHit.Apply end.*/


        }
    });
    /*AcidHit end.*/

    /*AcidIntro start.*/
    Bridge.define("AcidIntro", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            game: null,
            sfx: null,
            startButton: null,
            title: null,
            button: null,
            showOnStart: null,
            shakeX: 0,
            shakeY: 0,
            shakeAngle: 0,
            shakeRate: 0,
            pulseScale: 0,
            pulsePeriod: 0,
            titlePos: null,
            t: 0,
            nextShake: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidIntro#init", this ); }

                this.titlePos = new UnityEngine.Vector2();
                this.shakeX = 2.0;
                this.shakeY = 1.0;
                this.shakeAngle = 0.0;
                this.shakeRate = 20.0;
                this.pulseScale = 0.08;
                this.pulsePeriod = 0.9;
            }
        },
        methods: {
            /*AcidIntro.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AcidIntro#Awake", this ); }

                if (UnityEngine.Object.op_Implicit(this.title)) {
                    this.titlePos = this.title.anchoredPosition.$clone();
                }
                for (var i = 0; i < this.showOnStart.length; i = (i + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.showOnStart[i])) {
                        this.showOnStart[i].SetActive(false);
                    }
                }
                if (UnityEngine.Object.op_Implicit(this.startButton)) {
                    this.startButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnStart));
                }
            },
            /*AcidIntro.Awake end.*/

            /*AcidIntro.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidIntro#Update", this ); }

                this.t += UnityEngine.Time.unscaledDeltaTime;
                if (UnityEngine.Object.op_Implicit(this.title) && this.t >= this.nextShake) {
                    this.nextShake = this.t + 1.0 / this.shakeRate;
                    this.title.anchoredPosition = this.titlePos.$clone().add( new pc.Vec2( UnityEngine.Random.Range$1(-this.shakeX, this.shakeX), UnityEngine.Random.Range$1(-this.shakeY, this.shakeY) ) );
                    this.title.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, UnityEngine.Random.Range$1(-this.shakeAngle, this.shakeAngle) );
                }
                if (UnityEngine.Object.op_Implicit(this.button)) {
                    var s = 1.0 + this.pulseScale * Math.sin(6.28318548 * this.t / this.pulsePeriod);
                    this.button.localScale = new pc.Vec3( s, s, 1.0 );
                }
            },
            /*AcidIntro.Update end.*/

            /*AcidIntro.OnStart start.*/
            OnStart: function () {
if ( TRACE ) { TRACE( "AcidIntro#OnStart", this ); }

                if (UnityEngine.Object.op_Implicit(this.sfx)) {
                    this.sfx.PlayClick();
                }
                for (var i = 0; i < this.showOnStart.length; i = (i + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.showOnStart[i])) {
                        this.showOnStart[i].SetActive(true);
                    }
                }
                this.gameObject.SetActive(false);
                if (UnityEngine.Object.op_Implicit(this.game)) {
                    this.game.StartGame();
                }
            },
            /*AcidIntro.OnStart end.*/


        }
    });
    /*AcidIntro end.*/

    /*AcidKillCounter start.*/
    Bridge.define("AcidKillCounter", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            root: null,
            label: null,
            digits: null,
            digitSprites: null,
            labelGap: 0,
            digitSpacing: 0,
            punchScale: 0,
            punchTime: 0,
            punchT: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidKillCounter#init", this ); }

                this.labelGap = 14.0;
                this.digitSpacing = 2.0;
                this.punchScale = 0.3;
                this.punchTime = 0.3;
                this.punchT = -1.0;
            }
        },
        methods: {
            /*AcidKillCounter.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AcidKillCounter#Start", this ); }

                this.SetCount(0, false);
            },
            /*AcidKillCounter.Start end.*/

            /*AcidKillCounter.SetCount start.*/
            SetCount: function (n, punch) {
if ( TRACE ) { TRACE( "AcidKillCounter#SetCount", this ); }

                if (n < 0) {
                    n = 0;
                }
                var s = Bridge.toString(n);
                var len = UnityEngine.Mathf.Min(s.length, this.digits.length);
                var labelW = UnityEngine.Object.op_Implicit(this.label) ? this.label.rect.width : 0.0;
                var total = labelW + this.labelGap;
                for (var i = 0; i < len; i = (i + 1) | 0) {
                    var sp = this.digitSprites[((s.charCodeAt(((((s.length - len) | 0) + i) | 0)) - 48) | 0)];
                    this.digits[i].sprite = sp;
                    this.digits[i].rectTransform.sizeDelta = sp.rect.size.$clone();
                    total += sp.rect.width + (i > 0 ? this.digitSpacing : 0.0);
                }
                var x = -total / 2.0;
                if (UnityEngine.Object.op_Implicit(this.label)) {
                    this.label.anchoredPosition = new pc.Vec2( x + labelW / 2.0, this.label.anchoredPosition.y );
                    x += labelW + this.labelGap;
                }
                for (var i1 = 0; i1 < this.digits.length; i1 = (i1 + 1) | 0) {
                    var on = i1 < len;
                    this.digits[i1].enabled = on;
                    if (!on) {
                        continue;
                    }
                    var w = this.digits[i1].rectTransform.sizeDelta.x;
                    var rt = this.digits[i1].rectTransform;
                    rt.anchoredPosition = new pc.Vec2( x + w / 2.0, rt.anchoredPosition.y );
                    x += w + this.digitSpacing;
                }
                if (punch) {
                    this.punchT = 0.0;
                }
            },
            /*AcidKillCounter.SetCount end.*/

            /*AcidKillCounter.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidKillCounter#Update", this ); }

                if (this.punchT < 0 || !UnityEngine.Object.op_Implicit(this.root)) {
                    return;
                }
                this.punchT += UnityEngine.Time.deltaTime;
                var g = Math.max(0, Math.min(1, this.punchT / this.punchTime));
                var s = 1.0 + this.punchScale * Math.sin(g * UnityEngine.Mathf.PI);
                this.root.localScale = new pc.Vec3( s, s, 1.0 );
                if (g >= 1.0) {
                    this.punchT = -1.0;
                    this.root.localScale = new pc.Vec3( 1, 1, 1 );
                }
            },
            /*AcidKillCounter.Update end.*/


        }
    });
    /*AcidKillCounter end.*/

    /*AcidMan start.*/
    Bridge.define("AcidMan", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                TORSO: 0,
                HEAD: 0,
                ARM_L: 0,
                ARM_R: 0,
                LEG_L: 0,
                LEG_R: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "AcidMan#init", this ); }

                    this.TORSO = 0;
                    this.HEAD = 1;
                    this.ARM_L = 2;
                    this.ARM_R = 3;
                    this.LEG_L = 4;
                    this.LEG_R = 5;
                }
            },
            methods: {
                /*AcidMan.PullFoot:static start.*/
                PullFoot: function (leg, f) {
if ( TRACE ) { TRACE( "AcidMan#PullFoot", this ); }

                    if (UnityEngine.Object.op_Implicit(leg.body)) {
                        leg.body.AddForceAtPosition(new pc.Vec2( 0, -f ), UnityEngine.Vector2.FromVector3(leg.body.transform.TransformPoint$1(UnityEngine.Vector3.FromVector2(leg.forcePoint))));
                    }
                },
                /*AcidMan.PullFoot:static end.*/


            }
        },
        fields: {
            parts: null,
            ghostSprite: null,
            standForce: 0,
            fallAfterTiles: 0,
            game: null,
            dead: false,
            killedByAcid: false,
            fallen: false,
            removed: false,
            landed: false,
            totalTiles: 0,
            tilesLeft: 0,
            mass: 0,
            eating: null,
            eatTime: null,
            gone: null
        },
        props: {
            Dead: {
                get: function () {
if ( TRACE ) { TRACE( "AcidMan#Dead#get", this ); }

                    return this.dead;
                }
            },
            Landed: {
                get: function () {
if ( TRACE ) { TRACE( "AcidMan#Landed#get", this ); }

                    return this.landed;
                }
            },
            KilledByAcid: {
                get: function () {
if ( TRACE ) { TRACE( "AcidMan#KilledByAcid#get", this ); }

                    return this.killedByAcid;
                }
            },
            Center: {
                get: function () {
if ( TRACE ) { TRACE( "AcidMan#Center#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.parts[AcidMan.TORSO].body) ? this.parts[AcidMan.TORSO].body.position.$clone() : UnityEngine.Vector2.FromVector3(this.transform.position);
                }
            },
            HeadPosition: {
                get: function () {
if ( TRACE ) { TRACE( "AcidMan#HeadPosition#get", this ); }

                    var h = this.parts[AcidMan.HEAD];
                    return UnityEngine.Object.op_Implicit(h.body) ? UnityEngine.Vector3.FromVector2(h.body.position) : this.transform.position.$clone();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidMan#init", this ); }

                this.parts = System.Array.init(6, null, AcidMan.Part);
                this.standForce = 1.0;
                this.fallAfterTiles = 20;
                this.eating = new (System.Collections.Generic.List$1(UnityEngine.SpriteRenderer)).ctor();
                this.eatTime = new (System.Collections.Generic.List$1(System.Single)).ctor();
                this.gone = new (System.Collections.Generic.HashSet$1(UnityEngine.SpriteRenderer)).ctor();
            }
        },
        methods: {
            /*AcidMan.GoLimp start.*/
            GoLimp: function () {
if ( TRACE ) { TRACE( "AcidMan#GoLimp", this ); }

                this.fallen = true;
            },
            /*AcidMan.GoLimp end.*/

            /*AcidMan.Init start.*/
            Init: function (owner, sortBase) {
if ( TRACE ) { TRACE( "AcidMan#Init", this ); }

                this.game = owner;
                this.totalTiles = 0;
                this.mass = 0;
                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    var p = this.parts[i];
                    if (UnityEngine.Object.op_Implicit(p.body)) {
                        this.mass += p.body.mass;
                    }
                    p.left = 0;
                    for (var t = 0; t < p.tiles.length; t = (t + 1) | 0) {
                        if (!UnityEngine.Object.op_Implicit(p.tiles[t])) {
                            continue;
                        }
                        p.tiles[t].sortingOrder = (sortBase + p.sortOffset) | 0;
                        this.totalTiles = (this.totalTiles + 1) | 0;
                        p.left = (p.left + 1) | 0;
                    }
                    if (UnityEngine.Object.op_Implicit(p.body)) {
                        p.body.angularVelocity = UnityEngine.Random.Range$1(-150.0, 150.0);
                    }
                    this.game.RegisterPart(p.col, this);
                }
                this.tilesLeft = this.totalTiles;
            },
            /*AcidMan.Init end.*/

            /*AcidMan.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "AcidMan#FixedUpdate", this ); }

                if (this.dead || this.fallen || this.removed || UnityEngine.MonoBehaviour.op_Equality(this.game, null)) {
                    return;
                }
                var w = this.mass * Math.abs(UnityEngine.Physics2D.gravity.y) * this.standForce;
                var head = this.parts[AcidMan.HEAD];
                if (UnityEngine.Object.op_Implicit(head.body)) {
                    head.body.AddForceAtPosition(new pc.Vec2( 0, w ), UnityEngine.Vector2.FromVector3(head.body.transform.TransformPoint$1(UnityEngine.Vector3.FromVector2(head.forcePoint))));
                }
                AcidMan.PullFoot(this.parts[AcidMan.LEG_L], w * 0.5);
                AcidMan.PullFoot(this.parts[AcidMan.LEG_R], w * 0.5);
                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    var rb = this.parts[i].body;
                    if (!UnityEngine.Object.op_Implicit(rb)) {
                        continue;
                    }
                    var v = rb.linearVelocity.$clone();
                    v.x *= 0.99;
                    rb.linearVelocity = v.$clone();
                }
            },
            /*AcidMan.FixedUpdate end.*/

            /*AcidMan.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidMan#Update", this ); }

                if (this.removed || UnityEngine.MonoBehaviour.op_Equality(this.game, null)) {
                    return;
                }
                if (!this.landed && !this.dead) {
                    this.CheckLanded();
                }
                // Acid: tiles below the surface fade out. A man killed by the stick shatters instead (handled in Kill).
                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    var tiles = this.parts[i].tiles;
                    for (var t = 0; t < tiles.length; t = (t + 1) | 0) {
                        var sr = tiles[t];
                        if (!UnityEngine.Object.op_Implicit(sr) || this.gone.contains(sr)) {
                            continue;
                        }
                        if (!this.game.InAcid(sr.transform.position)) {
                            continue;
                        }
                        this.gone.add(sr);
                        this.eating.add(sr);
                        this.eatTime.add(0);
                        this.OnTileEaten(this.parts[i]);
                        if (this.removed) {
                            return;
                        }
                    }
                }
                for (var k = (this.eating.Count - 1) | 0; k >= 0; k = (k - 1) | 0) {
                    var sr1 = this.eating.getItem(k);
                    var tt = this.eatTime.getItem(k) + UnityEngine.Time.deltaTime / 0.25;
                    this.eatTime.setItem(k, tt);
                    if (!UnityEngine.Object.op_Implicit(sr1)) {
                        this.eating.removeAt(k);
                        this.eatTime.removeAt(k);
                        continue;
                    }
                    var c = sr1.color.$clone();
                    c.a = 1 - tt;
                    sr1.color = c.$clone();
                    if (tt >= 1) {
                        sr1.enabled = false;
                        this.eating.removeAt(k);
                        this.eatTime.removeAt(k);
                    }
                }
                if (this.tilesLeft <= 0 && this.eating.Count === 0) {
                    this.Remove();
                }
            },
            /*AcidMan.Update end.*/

            /*AcidMan.CheckLanded start.*/
            CheckLanded: function () {
if ( TRACE ) { TRACE( "AcidMan#CheckLanded", this ); }

                var leg = this.parts[AcidMan.LEG_R];
                if (!UnityEngine.Object.op_Implicit(leg.body)) {
                    return;
                }
                var foot = leg.body.transform.TransformPoint$1(UnityEngine.Vector3.FromVector2(leg.forcePoint));
                if (foot.y > this.game.PlankTop + 0.06) {
                    return;
                }
                this.landed = true;
                this.game.OnManLanded(this);
                if (UnityEngine.Object.op_Implicit(this.game.Sfx)) {
                    this.game.Sfx.PlayPop();
                }
            },
            /*AcidMan.CheckLanded end.*/

            /*AcidMan.OnTileEaten start.*/
            OnTileEaten: function (part) {
if ( TRACE ) { TRACE( "AcidMan#OnTileEaten", this ); }

                this.tilesLeft = (this.tilesLeft - 1) | 0;
                // A part eaten away no longer holds the man up, so he sinks deeper into the acid.
                part.left = (part.left - 1) | 0;
                if (part.left <= 0 && UnityEngine.Object.op_Implicit(part.body)) {
                    if (UnityEngine.Object.op_Implicit(part.col)) {
                        part.col.enabled = false;
                    }
                }
                if (((this.totalTiles - this.tilesLeft) | 0) > this.fallAfterTiles) {
                    this.fallen = true;
                }
                if (!this.dead && this.tilesLeft < ((Bridge.Int.div(this.totalTiles, 2)) | 0)) {
                    this.killedByAcid = true;
                    this.dead = true;
                    this.game.OnManDied(this, true);
                }
            },
            /*AcidMan.OnTileEaten end.*/

            /*AcidMan.Kill start.*/
            Kill: function () {
if ( TRACE ) { TRACE( "AcidMan#Kill", this ); }

                if (this.dead) {
                    return false;
                }
                this.dead = true;
                this.game.OnManDied(this, false);
                this.Shatter();
                return true;
            },
            /*AcidMan.Kill end.*/

            /*AcidMan.Shatter start.*/
            Shatter: function () {
if ( TRACE ) { TRACE( "AcidMan#Shatter", this ); }

                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    var p = this.parts[i];
                    for (var t = 0; t < p.tiles.length; t = (t + 1) | 0) {
                        var sr = p.tiles[t];
                        if (!UnityEngine.Object.op_Implicit(sr) || this.gone.contains(sr)) {
                            continue;
                        }
                        this.game.Fx.Fling(sr);
                    }
                    p.tiles = System.Array.init(0, null, UnityEngine.SpriteRenderer);
                    if (UnityEngine.Object.op_Implicit(p.body)) {
                        p.body.simulated = false;
                    }
                }
                this.Remove();
            },
            /*AcidMan.Shatter end.*/

            /*AcidMan.Remove start.*/
            Remove: function () {
if ( TRACE ) { TRACE( "AcidMan#Remove", this ); }

                if (this.removed) {
                    return;
                }
                this.removed = true;
                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    this.game.UnregisterPart(this.parts[i].col);
                }
                this.game.OnManRemoved(this);
                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*AcidMan.Remove end.*/


        }
    });
    /*AcidMan end.*/

    /*AcidMan+Part start.*/
    Bridge.define("AcidMan.Part", {
        $kind: 1002,
        fields: {
            body: null,
            joint: null,
            col: null,
            tiles: null,
            forcePoint: null,
            sortOffset: 0,
            left: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidMan.Part#init", this ); }

                this.forcePoint = new UnityEngine.Vector2();
            }
        }
    });
    /*AcidMan+Part end.*/

    /*AcidStick start.*/
    Bridge.define("AcidStick", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            body: null,
            cam: null,
            col: null,
            keepOut: 0,
            fingerOffset: null,
            follow: false,
            followMaxSpeed: 0,
            followSpinKeep: 0,
            frequency: 0,
            dampingRatio: 0,
            maxAccel: 0,
            startSpin: 0,
            game: null,
            held: false,
            target: null
        },
        props: {
            Held: {
                get: function () {
if ( TRACE ) { TRACE( "AcidStick#Held#get", this ); }

                    return this.held;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidStick#init", this ); }

                this.fingerOffset = new UnityEngine.Vector2();
                this.target = new UnityEngine.Vector2();
                this.keepOut = 0.02;
                this.fingerOffset = pc.Vec2.ZERO.clone();
                this.follow = true;
                this.followMaxSpeed = 60.0;
                this.followSpinKeep = 0.9;
                this.frequency = 5.0;
                this.dampingRatio = 0.7;
                this.maxAccel = 150.0;
                this.startSpin = 11.5;
            }
        },
        methods: {
            /*AcidStick.Init start.*/
            Init: function (owner) {
if ( TRACE ) { TRACE( "AcidStick#Init", this ); }

                this.game = owner;
                if (UnityEngine.Object.op_Implicit(this.body)) {
                    this.body.angularVelocity = this.startSpin;
                }
            },
            /*AcidStick.Init end.*/

            /*AcidStick.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidStick#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.game, null) || !this.game.Running) {
                    this.held = false;
                    return;
                }
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.held = true;
                    this.game.OnFirstTouch();
                }
                if (!UnityEngine.Input.GetMouseButton(0)) {
                    this.held = false;
                }
                if (this.held && UnityEngine.Object.op_Implicit(this.cam)) {
                    var w = this.cam.ScreenToWorldPoint(UnityEngine.Input.mousePosition);
                    this.target = new pc.Vec2( w.x, w.y ).add( this.fingerOffset );
                }
            },
            /*AcidStick.Update end.*/

            /*AcidStick.Reachable start.*/
            Reachable: function (p) {
if ( TRACE ) { TRACE( "AcidStick#Reachable", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.game, null) || !UnityEngine.Object.op_Implicit(this.col)) {
                    return p.$clone();
                }
                var ls = this.transform.lossyScale.$clone();
                var hx = Math.abs(this.col.size.x * ls.x) * 0.5, hy = Math.abs(this.col.size.y * ls.y) * 0.5;
                var a = this.body.rotation * UnityEngine.Mathf.Deg2Rad;
                var c = Math.abs(Math.cos(a)), s = Math.abs(Math.sin(a));
                var extentY = c * hy + s * hx; // half height of the rotated box
                var extentX = s * hy + c * hx; // half width
                var minY = this.game.PlankTop + extentY + this.keepOut;
                if (p.y < minY) {
                    p.y = minY;
                }
                var halfX = this.game.poolHalfWidth - extentX - this.keepOut;
                if (halfX > 0) {
                    p.x = Math.max(this.game.poolCenterX - halfX, Math.min(p.x, this.game.poolCenterX + halfX));
                }
                return p.$clone();
            },
            /*AcidStick.Reachable end.*/

            /*AcidStick.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "AcidStick#FixedUpdate", this ); }

                if (!this.held || !UnityEngine.Object.op_Implicit(this.body)) {
                    return;
                }
                var target = this.Reachable(this.target.$clone());
                if (this.follow) {
                    // Sticks to the finger: velocity that reaches the target this step (capped), so it still hits men.
                    var vel = (target.$clone().sub( this.body.position )).scale( 1.0 / ( UnityEngine.Time.fixedDeltaTime ) );
                    if (vel.length() > this.followMaxSpeed) {
                        vel = vel.clone().normalize().$clone().scale( this.followMaxSpeed );
                    }
                    this.body.linearVelocity = vel.$clone();
                    this.body.angularVelocity *= this.followSpinKeep;
                    return;
                }
                var omega = 6.28318548 * this.frequency;
                var v = this.body.linearVelocity.$clone();
                var a = (target.$clone().sub( this.body.position )).scale( (omega * omega) ).sub( v.$clone().scale( (2.0 * this.dampingRatio * omega) ) );
                if (a.length() > this.maxAccel) {
                    a = a.clone().normalize().$clone().scale( this.maxAccel );
                }
                this.body.linearVelocity = v.$clone().add( a.$clone().scale( UnityEngine.Time.fixedDeltaTime ) );
            },
            /*AcidStick.FixedUpdate end.*/

            /*AcidStick.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (c) {
if ( TRACE ) { TRACE( "AcidStick#OnCollisionEnter2D", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.game, null) || !this.game.Running) {
                    return;
                }
                var man = this.game.ManOf(c.collider);
                if (UnityEngine.MonoBehaviour.op_Equality(man, null) || man.Dead) {
                    return;
                }
                this.game.OnStickHit(man, c.collider.transform.position);
            },
            /*AcidStick.OnCollisionEnter2D end.*/


        }
    });
    /*AcidStick end.*/

    /*AcidTank start.*/
    Bridge.define("AcidTank", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*AcidTank.SetAlpha:static start.*/
                SetAlpha: function (r, a) {
if ( TRACE ) { TRACE( "AcidTank#SetAlpha", this ); }

                    var c = r.color.$clone();
                    c.a = a;
                    r.color = c.$clone();
                },
                /*AcidTank.SetAlpha:static end.*/


            }
        },
        fields: {
            body: null,
            rust: null,
            spriteBottom: 0,
            rustScale: 0,
            rustGrow: 0,
            rustFall: 0,
            rustFallSpeed: 0,
            rustPerSecond: 0,
            rustMaxVisible: 0,
            game: null,
            phase: null,
            timer: null,
            hold: null,
            size: null,
            dx: null,
            settled: 0,
            pending: null,
            budget: 0,
            visible: 0
        },
        props: {
            Settled: {
                get: function () {
if ( TRACE ) { TRACE( "AcidTank#Settled#get", this ); }

                    return this.settled > 0.5;
                }
            },
            InAcid: {
                get: function () {
if ( TRACE ) { TRACE( "AcidTank#InAcid#get", this ); }

                    return UnityEngine.MonoBehaviour.op_Inequality(this.game, null) && this.Depth > 0.02;
                }
            },
            Depth: {
                get: function () {
if ( TRACE ) { TRACE( "AcidTank#Depth#get", this ); }

                    return this.game.acidTop - this.transform.TransformPoint$1(new pc.Vec3( 0, this.spriteBottom, 0 )).y;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AcidTank#init", this ); }

                this.spriteBottom = -0.975;
                this.rustScale = 0.217;
                this.rustGrow = 1.0;
                this.rustFall = 4.0;
                this.rustFallSpeed = 0.43;
                this.rustPerSecond = 12.0;
                this.rustMaxVisible = 40;
                this.pending = new (System.Collections.Generic.List$1(System.Int32)).ctor();
            }
        },
        methods: {
            /*AcidTank.Init start.*/
            Init: function (owner) {
if ( TRACE ) { TRACE( "AcidTank#Init", this ); }

                this.game = owner;
                var n = this.rust != null ? this.rust.length : 0;
                this.phase = System.Array.init(n, 0, System.Int32);
                this.timer = System.Array.init(n, 0, System.Single);
                this.hold = System.Array.init(n, 0, System.Single);
                this.size = System.Array.init(n, 0, System.Single);
                this.dx = System.Array.init(n, 0, System.Single);
                for (var i = 0; i < n; i = (i + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.rust[i])) {
                        this.rust[i].enabled = false;
                    }
                }
            },
            /*AcidTank.Init end.*/

            /*AcidTank.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidTank#Update", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.game, null)) {
                    return;
                }
                var dt = UnityEngine.Time.deltaTime;

                if (UnityEngine.Object.op_Implicit(this.body) && this.body.linearVelocity.length() < 0.05 && this.game.PlankAtBottom) {
                    this.settled += dt;
                } else {
                    this.settled = 0;
                }

                var depth = this.Depth;
                for (var i = 0; i < this.rust.length; i = (i + 1) | 0) {
                    var r = this.rust[i];
                    if (!UnityEngine.Object.op_Implicit(r)) {
                        continue;
                    }
                    var t = r.transform;
                    if (this.phase[i] === 0) {
                        // Reached by the acid (height above the hull bottom in world units, like the reference's dist_y <= R):
                        // queue it (phase 4); it pops up later at random.
                        if ((t.localPosition.y - this.spriteBottom) * this.transform.lossyScale.y > depth + 0.02) {
                            continue;
                        }
                        this.phase[i] = 4;
                        this.pending.add(i);
                    } else if (this.phase[i] === 1) {
                        this.timer[i] += dt;
                        var g = Math.max(0, Math.min(1, this.timer[i] / this.rustGrow));
                        t.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( (g * this.size[i]) );
                        AcidTank.SetAlpha(r, g);
                        this.hold[i] -= dt;
                        if (this.hold[i] <= 0) {
                            this.phase[i] = 2;
                            this.timer[i] = 0;
                            this.dx[i] = UnityEngine.Random.Range$1(-0.11, 0.11);
                        }
                    } else if (this.phase[i] === 2) {
                        this.timer[i] += dt / this.rustFall;
                        var g1 = Math.max(0, Math.min(1, this.timer[i]));
                        t.localPosition = t.localPosition.$clone().add( new pc.Vec3( this.dx[i], -this.rustFallSpeed * g1, 0 ).clone().scale( dt ) );
                        AcidTank.SetAlpha(r, 1 - g1);
                        if (g1 >= 1) {
                            this.phase[i] = 3;
                            r.enabled = false;
                            this.visible = (this.visible - 1) | 0;
                        }
                    }
                }

                this.budget = UnityEngine.Mathf.Min(this.budget + dt * this.rustPerSecond, 3.0);
                while (this.budget >= 1.0 && this.visible < this.rustMaxVisible && this.pending.Count > 0) {
                    this.budget -= 1.0;
                    var k = UnityEngine.Random.Range(0, this.pending.Count);
                    var i1 = this.pending.getItem(k);
                    this.pending.setItem(k, this.pending.getItem(((this.pending.Count - 1) | 0)));
                    this.pending.removeAt(((this.pending.Count - 1) | 0));
                    this.Show(i1);
                }
            },
            /*AcidTank.Update end.*/

            /*AcidTank.Show start.*/
            Show: function (i) {
if ( TRACE ) { TRACE( "AcidTank#Show", this ); }

                var r = this.rust[i];
                if (!UnityEngine.Object.op_Implicit(r)) {
                    return;
                }
                this.phase[i] = 1;
                this.timer[i] = 0;
                this.hold[i] = UnityEngine.Random.Range$1(2.0, 4.0);
                this.size[i] = this.rustScale * UnityEngine.Random.Range$1(1.0, 1.5);
                r.enabled = true;
                AcidTank.SetAlpha(r, 0);
                r.transform.localScale = pc.Vec3.ZERO.clone();
                this.visible = (this.visible + 1) | 0;
            },
            /*AcidTank.Show end.*/


        }
    });
    /*AcidTank end.*/

    /*AcidWave start.*/
    Bridge.define("AcidWave", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rend: null,
            mat: null
        },
        methods: {
            /*AcidWave.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AcidWave#Awake", this ); }

                if (UnityEngine.Object.op_Implicit(this.rend) && UnityEngine.Object.op_Implicit(this.rend.sharedMaterial)) {
                    this.mat = new UnityEngine.Material.$ctor1(this.rend.sharedMaterial);
                    this.rend.sharedMaterial = this.mat;
                }
            },
            /*AcidWave.Awake end.*/

            /*AcidWave.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AcidWave#Update", this ); }

                if (UnityEngine.Object.op_Implicit(this.mat)) {
                    this.mat.SetFloat$1("_T", UnityEngine.Time.time);
                }
            },
            /*AcidWave.Update end.*/


        }
    });
    /*AcidWave end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LunaController start.*/
    Bridge.define("LunaController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            TimePlay: 0,
            MaxAcidDeaths: 0,
            BGM: null,
            UseCustomBG: false,
            BGTexture: null,
            game: null,
            musicSource: null,
            sfx: null,
            customBG: null,
            musicVolume: 0,
            CTA: null,
            endUI: null,
            gameEndedSent: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LunaController#init", this ); }

                this.TimePlay = 60;
                this.MaxAcidDeaths = 5;
                this.musicVolume = 0.6;
                this.CTA = new (System.Collections.Generic.List$1(UnityEngine.UI.Button)).ctor();
            }
        },
        methods: {
            /*LunaController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LunaController#Awake", this ); }

                if (UnityEngine.Object.op_Implicit(this.game)) {
                    this.game.maxAcidDeaths = this.MaxAcidDeaths;
                }
                if (UnityEngine.Object.op_Implicit(this.customBG)) {
                    this.customBG.Show(this.UseCustomBG ? this.BGTexture : null);
                }
            },
            /*LunaController.Awake end.*/

            /*LunaController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LunaController#Start", this ); }

                var $t;
                if (UnityEngine.Object.op_Implicit(this.BGM) && UnityEngine.Object.op_Implicit(this.musicSource)) {
                    this.musicSource.clip = this.BGM;
                    this.musicSource.loop = true;
                    this.musicSource.volume = this.musicVolume;
                    this.musicSource.Play();
                }
                $t = Bridge.getEnumerator(this.CTA);
                try {
                    while ($t.moveNext()) {
                        var b = $t.Current;
                        if (UnityEngine.Object.op_Implicit(b)) {
                            b.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickCTA));
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (UnityEngine.Object.op_Implicit(this.endUI)) {
                    this.endUI.SetActive(false);
                }
                // Time Play counts from the intro's START button (the game has an intro screen first).
                if (UnityEngine.Object.op_Implicit(this.game)) {
                    this.game.addOnStarted(Bridge.fn.cacheBind(this, this.BeginTimer));
                } else {
                    this.BeginTimer();
                }
            },
            /*LunaController.Start end.*/

            /*LunaController.BeginTimer start.*/
            BeginTimer: function () {
if ( TRACE ) { TRACE( "LunaController#BeginTimer", this ); }

                this.StartCoroutine$1(this.EndAfterTime());
            },
            /*LunaController.BeginTimer end.*/

            /*LunaController.ShowEndUI start.*/
            ShowEndUI: function () {
if ( TRACE ) { TRACE( "LunaController#ShowEndUI", this ); }

                if (UnityEngine.Object.op_Implicit(this.endUI)) {
                    this.endUI.SetActive(true);
                }
            },
            /*LunaController.ShowEndUI end.*/

            /*LunaController.ClickCTA start.*/
            ClickCTA: function () {
if ( TRACE ) { TRACE( "LunaController#ClickCTA", this ); }

                if (UnityEngine.Object.op_Implicit(this.sfx)) {
                    this.sfx.PlayClick();
                }
                Luna.Unity.Playable.InstallFullGame();
            },
            /*LunaController.ClickCTA end.*/

            /*LunaController.EndAfterTime start.*/
            EndAfterTime: function () {
if ( TRACE ) { TRACE( "LunaController#EndAfterTime", this ); }

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
                                    if (!this.gameEndedSent) {
                                            this.gameEndedSent = true;
                                            Luna.Unity.LifeCycle.GameEnded();
                                        }
                                        // Time is up (this project: always): the transparent end card shows at once (tap anywhere = store) while the
                                        // gameplay plays its finale (tank melting in the acid) behind it.
                                        this.ShowEndUI();
                                        if (UnityEngine.Object.op_Implicit(this.game)) {
                                            this.game.TimeUp(null);
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
            /*LunaController.EndAfterTime end.*/


        }
    });
    /*LunaController end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","System.Collections","UnityEngine.UI","System.Collections.Generic"];

    /*AcidAudio start.*/
    $m("AcidAudio", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Delayed","t":8,"pi":[{"n":"clip","pt":$n[0].AudioClip,"ps":0},{"n":"delay","pt":$n[1].Single,"ps":1}],"sn":"Delayed","rt":$n[2].IEnumerator,"p":[$n[0].AudioClip,$n[1].Single]},{"a":2,"n":"Play","t":8,"pi":[{"n":"clip","pt":$n[0].AudioClip,"ps":0}],"sn":"Play","rt":$n[1].Void,"p":[$n[0].AudioClip]},{"a":2,"n":"PlayClick","t":8,"sn":"PlayClick","rt":$n[1].Void},{"a":2,"n":"PlayGhost","t":8,"sn":"PlayGhost","rt":$n[1].Void},{"a":2,"n":"PlayHit","t":8,"sn":"PlayHit","rt":$n[1].Void},{"a":2,"n":"PlayPop","t":8,"sn":"PlayPop","rt":$n[1].Void},{"a":2,"n":"SetAcid","t":8,"pi":[{"n":"on","pt":$n[1].Boolean,"ps":0}],"sn":"SetAcid","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"acidFade","t":4,"rt":$n[1].Single,"sn":"acidFade","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"acidLoop","t":4,"rt":$n[0].AudioSource,"sn":"acidLoop"},{"a":1,"n":"acidTarget","t":4,"rt":$n[1].Single,"sn":"acidTarget","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"click","t":4,"rt":$n[0].AudioClip,"sn":"click"},{"a":2,"n":"ghost","t":4,"rt":$n[0].AudioClip,"sn":"ghost"},{"a":2,"n":"ghostDelay","t":4,"rt":$n[1].Single,"sn":"ghostDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"hit","t":4,"rt":$n[0].AudioClip,"sn":"hit"},{"a":1,"n":"nextVoice","t":4,"rt":$n[1].Int32,"sn":"nextVoice","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"pop","t":4,"rt":$n[0].AudioClip,"sn":"pop"},{"a":2,"n":"sfx","t":4,"rt":$n[0].AudioSource,"sn":"sfx"},{"at":[new UnityEngine.TooltipAttribute("Gameplay SFX play on this small pool of voices (clip + Play), like RSNM's AudioService that works in Luna. AudioSources set up in the scene (no play on awake, no loop)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"voices","t":4,"rt":System.Array.type(UnityEngine.AudioSource),"sn":"voices"}]}; }, $n);
    /*AcidAudio end.*/

    /*AcidCustomBG start.*/
    $m("AcidCustomBG", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Fit","t":8,"sn":"Fit","rt":$n[1].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":2,"n":"Show","t":8,"pi":[{"n":"tex","pt":$n[0].Texture2D,"ps":0}],"sn":"Show","rt":$n[1].Void,"p":[$n[0].Texture2D]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cam","t":4,"rt":$n[0].Camera,"sn":"cam"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"image","t":4,"rt":$n[3].RawImage,"sn":"image"},{"a":1,"n":"lastH","t":4,"rt":$n[1].Int32,"sn":"lastH","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"lastSize","t":4,"rt":$n[1].Single,"sn":"lastSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lastW","t":4,"rt":$n[1].Int32,"sn":"lastW","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rect","t":4,"rt":$n[0].RectTransform,"sn":"rect"}]}; }, $n);
    /*AcidCustomBG end.*/

    /*AcidFailPanel start.*/
    $m("AcidFailPanel", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Apply","t":8,"sn":"Apply","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.TooltipAttribute("Holds the title, box and finger laid out on a designHeight-tall frame; scaled to the panel height like the reference (scale = screen height / design height), so it fits portrait and landscape."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"content","t":4,"rt":$n[0].RectTransform,"sn":"content"},{"a":2,"n":"designHeight","t":4,"rt":$n[1].Single,"sn":"designHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fadeTime","t":4,"rt":$n[1].Single,"sn":"fadeTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"finger","t":4,"rt":$n[0].RectTransform,"sn":"finger"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelRect","t":4,"rt":$n[0].RectTransform,"sn":"panelRect"},{"a":2,"n":"pulsePeriod","t":4,"rt":$n[1].Single,"sn":"pulsePeriod","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pulseScale","t":4,"rt":$n[1].Single,"sn":"pulseScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shadow","t":4,"rt":$n[3].Image,"sn":"shadow"},{"a":2,"n":"shadowAlpha","t":4,"rt":$n[1].Single,"sn":"shadowAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[1].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*AcidFailPanel end.*/

    /*AcidFx start.*/
    $m("AcidFx", function () { return {"nested":[AcidFx.Piece],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Blood","t":8,"pi":[{"n":"pos","pt":$n[0].Vector3,"ps":0},{"n":"push","pt":$n[0].Vector2,"ps":1}],"sn":"Blood","rt":$n[1].Void,"p":[$n[0].Vector3,$n[0].Vector2]},{"a":2,"n":"Fling","t":8,"pi":[{"n":"sr","pt":$n[0].SpriteRenderer,"ps":0}],"sn":"Fling","rt":$n[1].Void,"p":[$n[0].SpriteRenderer]},{"a":2,"n":"Ghost","t":8,"pi":[{"n":"sprite","pt":$n[0].Sprite,"ps":0},{"n":"pos","pt":$n[0].Vector3,"ps":1}],"sn":"Ghost","rt":$n[1].Void,"p":[$n[0].Sprite,$n[0].Vector3]},{"a":2,"n":"Hit","t":8,"pi":[{"n":"pos","pt":$n[0].Vector3,"ps":0}],"sn":"Hit","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":2,"n":"PlusOne","t":8,"pi":[{"n":"pos","pt":$n[0].Vector3,"ps":0}],"sn":"PlusOne","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"bloodCount","t":4,"rt":$n[1].Int32,"sn":"bloodCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"bloodDark","t":4,"rt":$n[0].Color,"sn":"bloodDark"},{"at":[new UnityEngine.TooltipAttribute("How much of the sword's velocity the blood takes.")],"a":2,"n":"bloodInherit","t":4,"rt":$n[1].Single,"sn":"bloodInherit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"bloodLight","t":4,"rt":$n[0].Color,"sn":"bloodLight"},{"a":2,"n":"bloodOrder","t":4,"rt":$n[1].Int32,"sn":"bloodOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Blood (sword kill)"),new UnityEngine.TooltipAttribute("One blood drop: a SpriteRenderer prefab with a white square sprite (tinted at runtime).")],"a":2,"n":"bloodPrefab","t":4,"rt":$n[0].SpriteRenderer,"sn":"bloodPrefab"},{"at":[new UnityEngine.TooltipAttribute("Drop size range (world units, square).")],"a":2,"n":"bloodSize","t":4,"rt":$n[0].Vector2,"sn":"bloodSize"},{"at":[new UnityEngine.TooltipAttribute("Burst speed range (world units/s).")],"a":2,"n":"bloodSpeed","t":4,"rt":$n[0].Vector2,"sn":"bloodSpeed"},{"at":[new UnityEngine.TooltipAttribute("Lifetime of a drop (s).")],"a":2,"n":"bloodTime","t":4,"rt":$n[1].Single,"sn":"bloodTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"drops","t":4,"rt":$n[4].List$1(AcidFx.Piece),"sn":"drops","ro":true},{"a":2,"n":"flingTime","t":4,"rt":$n[1].Single,"sn":"flingTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"game","t":4,"rt":AcidGame,"sn":"game"},{"a":2,"n":"ghostPrefab","t":4,"rt":AcidGhost,"sn":"ghostPrefab"},{"a":2,"n":"hitPrefab","t":4,"rt":AcidHit,"sn":"hitPrefab"},{"a":1,"n":"pieces","t":4,"rt":$n[4].List$1(AcidFx.Piece),"sn":"pieces","ro":true},{"at":[new UnityEngine.HeaderAttribute("+1 (sword kill)"),new UnityEngine.TooltipAttribute("The \"+1\" popup: a SpriteRenderer prefab (its scale is the final size).")],"a":2,"n":"plusOnePrefab","t":4,"rt":$n[0].SpriteRenderer,"sn":"plusOnePrefab"},{"at":[new UnityEngine.TooltipAttribute("How far it rises (world units).")],"a":2,"n":"plusOneRise","t":4,"rt":$n[1].Single,"sn":"plusOneRise","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"plusOneTime","t":4,"rt":$n[1].Single,"sn":"plusOneTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pops","t":4,"rt":$n[4].List$1(AcidFx.Piece),"sn":"pops","ro":true},{"a":2,"n":"root","t":4,"rt":$n[0].Transform,"sn":"root"}]}; }, $n);
    /*AcidFx end.*/

    /*AcidFx+Piece start.*/
    $m("AcidFx.Piece", function () { return {"td":AcidFx,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"scale","t":4,"rt":$n[1].Single,"sn":"scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spin","t":4,"rt":$n[1].Single,"sn":"spin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"sr","t":4,"rt":$n[0].SpriteRenderer,"sn":"sr"},{"a":2,"n":"start","t":4,"rt":$n[0].Vector3,"sn":"start"},{"a":2,"n":"t","t":4,"rt":$n[1].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tr","t":4,"rt":$n[0].Transform,"sn":"tr"},{"a":2,"n":"vel","t":4,"rt":$n[0].Vector2,"sn":"vel"}]}; }, $n);
    /*AcidFx+Piece end.*/

    /*AcidGame start.*/
    $m("AcidGame", function () { return {"nested":[AcidGame.State],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"Finish","t":8,"pi":[{"n":"result","pt":AcidGame.State,"ps":0}],"sn":"Finish","rt":$n[1].Void,"p":[AcidGame.State]},{"a":1,"n":"FirstManX","t":8,"pi":[{"n":"x","pt":$n[1].Single,"ps":0}],"sn":"FirstManX","rt":$n[1].Single,"p":[$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[1].Void},{"a":2,"n":"InAcid","t":8,"pi":[{"n":"p","pt":$n[0].Vector3,"ps":0}],"sn":"InAcid","rt":$n[1].Boolean,"p":[$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ManOf","t":8,"pi":[{"n":"col","pt":$n[0].Collider2D,"ps":0}],"sn":"ManOf","rt":AcidMan,"p":[$n[0].Collider2D]},{"a":1,"n":"NextWave","t":8,"sn":"NextWave","rt":$n[1].Void},{"a":2,"n":"OnFirstTouch","t":8,"sn":"OnFirstTouch","rt":$n[1].Void},{"a":2,"n":"OnManDied","t":8,"pi":[{"n":"man","pt":AcidMan,"ps":0},{"n":"byAcid","pt":$n[1].Boolean,"ps":1}],"sn":"OnManDied","rt":$n[1].Void,"p":[AcidMan,$n[1].Boolean]},{"a":2,"n":"OnManLanded","t":8,"pi":[{"n":"man","pt":AcidMan,"ps":0}],"sn":"OnManLanded","rt":$n[1].Void,"p":[AcidMan]},{"a":2,"n":"OnManRemoved","t":8,"pi":[{"n":"man","pt":AcidMan,"ps":0}],"sn":"OnManRemoved","rt":$n[1].Void,"p":[AcidMan]},{"a":2,"n":"OnStickHit","t":8,"pi":[{"n":"man","pt":AcidMan,"ps":0},{"n":"at","pt":$n[0].Vector3,"ps":1}],"sn":"OnStickHit","rt":$n[1].Void,"p":[AcidMan,$n[0].Vector3]},{"a":2,"n":"RegisterPart","t":8,"pi":[{"n":"col","pt":$n[0].Collider2D,"ps":0},{"n":"man","pt":AcidMan,"ps":1}],"sn":"RegisterPart","rt":$n[1].Void,"p":[$n[0].Collider2D,AcidMan]},{"a":1,"n":"ShowResult","t":8,"sn":"ShowResult","rt":$n[1].Void},{"a":1,"n":"Spawn","t":8,"sn":"Spawn","rt":$n[1].Void},{"a":1,"n":"SpawnLimp","t":8,"sn":"SpawnLimp","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[1].Void},{"a":2,"n":"TimeUp","t":8,"pi":[{"n":"onDone","pt":Function,"ps":0}],"sn":"TimeUp","rt":$n[1].Void,"p":[Function]},{"a":2,"n":"UnregisterPart","t":8,"pi":[{"n":"col","pt":$n[0].Collider2D,"ps":0}],"sn":"UnregisterPart","rt":$n[1].Void,"p":[$n[0].Collider2D]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"UpdateHand","t":8,"sn":"UpdateHand","rt":$n[1].Void},{"a":1,"n":"UpdateTimeUp","t":8,"sn":"UpdateTimeUp","rt":$n[1].Void},{"a":2,"n":"CurrentState","t":16,"rt":AcidGame.State,"g":{"a":2,"n":"get_CurrentState","t":8,"rt":AcidGame.State,"fg":"CurrentState","box":function ($v) { return Bridge.box($v, AcidGame.State, System.Enum.toStringFn(AcidGame.State));}},"fn":"CurrentState"},{"a":2,"n":"Fx","t":16,"rt":AcidFx,"g":{"a":2,"n":"get_Fx","t":8,"rt":AcidFx,"fg":"Fx"},"fn":"Fx"},{"a":2,"n":"Kills","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Kills","t":8,"rt":$n[1].Int32,"fg":"Kills","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Kills"},{"a":2,"n":"PlankAtBottom","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_PlankAtBottom","t":8,"rt":$n[1].Boolean,"fg":"PlankAtBottom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"PlankAtBottom"},{"a":2,"n":"PlankTop","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_PlankTop","t":8,"rt":$n[1].Single,"fg":"PlankTop","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"PlankTop"},{"a":2,"n":"Running","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Running","t":8,"rt":$n[1].Boolean,"fg":"Running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Running"},{"a":2,"n":"Sfx","t":16,"rt":AcidAudio,"g":{"a":2,"n":"get_Sfx","t":8,"rt":AcidAudio,"fg":"Sfx"},"fn":"Sfx"},{"a":2,"n":"Started","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Started","t":8,"rt":$n[1].Boolean,"fg":"Started","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Started"},{"a":2,"n":"acidBottom","t":4,"rt":$n[1].Single,"sn":"acidBottom","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"acidDeaths","t":4,"rt":$n[1].Int32,"sn":"acidDeaths","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Gameplay acid line (world Y): parts below it are eaten. Below the drawn top (3.6) because the wavy surface dips under it (user 2026-11-12: drawn top - 0.2).")],"a":2,"n":"acidTop","t":4,"rt":$n[1].Single,"sn":"acidTop","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"failPanel","t":4,"rt":$n[0].GameObject,"sn":"failPanel"},{"at":[new UnityEngine.TooltipAttribute("Fail as soon as the plank is fully under the acid (its top below acidTop).")],"a":2,"n":"failWhenPlankSunk","t":4,"rt":$n[1].Boolean,"sn":"failWhenPlankSunk","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Reference: a limp man drops every 5 s after the tank, 10 at most.")],"a":2,"n":"finaleManInterval","t":4,"rt":$n[1].Single,"sn":"finaleManInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"finaleManMax","t":4,"rt":$n[1].Int32,"sn":"finaleManMax","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"finaleManT","t":4,"rt":$n[1].Single,"sn":"finaleManT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"finaleMen","t":4,"rt":$n[1].Int32,"sn":"finaleMen","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"finishY","t":4,"rt":$n[1].Single,"sn":"finishY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("The first man lands at least this far (world X) from the sword, so he is not killed by it on landing.")],"a":2,"n":"firstManSwordGap","t":4,"rt":$n[1].Single,"sn":"firstManSwordGap","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fx","t":4,"rt":AcidFx,"sn":"fx"},{"at":[new UnityEngine.HeaderAttribute("Tutorial hand (world sprite)")],"a":2,"n":"hand","t":4,"rt":$n[0].Transform,"sn":"hand"},{"a":2,"n":"handRenderer","t":4,"rt":$n[0].SpriteRenderer,"sn":"handRenderer"},{"a":1,"n":"handT","t":4,"rt":$n[1].Single,"sn":"handT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"hint","t":4,"rt":AcidMan,"sn":"hint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"killCounter","t":4,"rt":AcidKillCounter,"sn":"killCounter"},{"a":1,"n":"kills","t":4,"rt":$n[1].Int32,"sn":"kills","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"levelFinished","t":4,"rt":$n[1].Boolean,"sn":"levelFinished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"manOf","t":4,"rt":$n[4].Dictionary$2(UnityEngine.Collider2D,AcidMan),"sn":"manOf","ro":true},{"at":[new UnityEngine.HeaderAttribute("Scene")],"a":2,"n":"manPrefabs","t":4,"rt":System.Array.type(AcidMan),"sn":"manPrefabs"},{"at":[new UnityEngine.HeaderAttribute("Rules")],"a":2,"n":"maxAcidDeaths","t":4,"rt":$n[1].Int32,"sn":"maxAcidDeaths","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"men","t":4,"rt":$n[4].List$1(AcidMan),"sn":"men","ro":true},{"a":2,"n":"menRoot","t":4,"rt":$n[0].Transform,"sn":"menRoot"},{"a":1,"n":"onPlank","t":4,"rt":$n[1].Int32,"sn":"onPlank","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"onTimeUpDone","t":4,"rt":Function,"sn":"onTimeUpDone"},{"a":2,"n":"plank","t":4,"rt":$n[0].Rigidbody2D,"sn":"plank"},{"at":[new UnityEngine.TooltipAttribute("Plank centre Y at the end (reference: plank resting on the pool floor).")],"a":2,"n":"plankFinishY","t":4,"rt":$n[1].Single,"sn":"plankFinishY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"plankHalfHeight","t":4,"rt":$n[1].Single,"sn":"plankHalfHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"plankMinY","t":4,"rt":$n[1].Single,"sn":"plankMinY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"plankSpeed","t":4,"rt":$n[1].Single,"sn":"plankSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"plankSpeedFinished","t":4,"rt":$n[1].Single,"sn":"plankSpeedFinished","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Plank"),new UnityEngine.TooltipAttribute("Plank centre Y with nobody on it.")],"a":2,"n":"plankStartY","t":4,"rt":$n[1].Single,"sn":"plankStartY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("How far the plank sinks per man (source: plank height / 5).")],"a":2,"n":"plankStep","t":4,"rt":$n[1].Single,"sn":"plankStep","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"poolCenterX","t":4,"rt":$n[1].Single,"sn":"poolCenterX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Half width of the pool (inside the walls), centred on x = poolCenterX.")],"a":2,"n":"poolHalfWidth","t":4,"rt":$n[1].Single,"sn":"poolHalfWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"resultDelay","t":4,"rt":$n[1].Single,"sn":"resultDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"resultTimer","t":4,"rt":$n[1].Single,"sn":"resultTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sfx","t":4,"rt":AcidAudio,"sn":"sfx"},{"a":1,"n":"sinking","t":4,"rt":$n[1].Boolean,"sn":"sinking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"spawnHalfWidth","t":4,"rt":$n[1].Single,"sn":"spawnHalfWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"spawnSerial","t":4,"rt":$n[1].Int32,"sn":"spawnSerial","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"spawnY","t":4,"rt":$n[1].Single,"sn":"spawnY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"started","t":4,"rt":$n[1].Boolean,"sn":"started","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"state","t":4,"rt":AcidGame.State,"sn":"state","box":function ($v) { return Bridge.box($v, AcidGame.State, System.Enum.toStringFn(AcidGame.State));}},{"a":2,"n":"stick","t":4,"rt":AcidStick,"sn":"stick"},{"a":1,"n":"tank","t":4,"rt":AcidTank,"sn":"tank"},{"a":2,"n":"tankDropDelay","t":4,"rt":$n[1].Single,"sn":"tankDropDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"tankDropped","t":4,"rt":$n[1].Boolean,"sn":"tankDropped","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Seconds after the tank has settled before the end UI.")],"a":2,"n":"tankEndDelay","t":4,"rt":$n[1].Single,"sn":"tankEndDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Time up (reference \"btr\" finale)")],"a":2,"n":"tankPrefab","t":4,"rt":AcidTank,"sn":"tankPrefab"},{"at":[new UnityEngine.TooltipAttribute("Safety: end UI at the latest this long after time up.")],"a":2,"n":"tankTimeout","t":4,"rt":$n[1].Single,"sn":"tankTimeout","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeUp","t":4,"rt":$n[1].Boolean,"sn":"timeUp","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"timeUpT","t":4,"rt":$n[1].Single,"sn":"timeUpT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"tutorialDone","t":4,"rt":$n[1].Boolean,"sn":"tutorialDone","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Waves (source: 7x1, 10x2, 10x3)")],"a":2,"n":"waveCount","t":4,"rt":$n[1].Array.type(System.Int32),"sn":"waveCount"},{"a":1,"n":"waveId","t":4,"rt":$n[1].Int32,"sn":"waveId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"wavePause","t":4,"rt":$n[1].Array.type(System.Single),"sn":"wavePause"},{"a":1,"n":"wavePauseLeft","t":4,"rt":$n[1].Single,"sn":"wavePauseLeft","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Result panels (full-screen UI)")],"a":2,"n":"winPanel","t":4,"rt":$n[0].GameObject,"sn":"winPanel"},{"a":2,"n":"OnStarted","t":2,"ad":{"a":2,"n":"add_OnStarted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnStarted","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnStarted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnStarted","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*AcidGame end.*/

    /*AcidGame+State start.*/
    $m("AcidGame.State", function () { return {"td":AcidGame,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Fail","is":true,"t":4,"rt":AcidGame.State,"sn":"Fail","box":function ($v) { return Bridge.box($v, AcidGame.State, System.Enum.toStringFn(AcidGame.State));}},{"a":2,"n":"Run","is":true,"t":4,"rt":AcidGame.State,"sn":"Run","box":function ($v) { return Bridge.box($v, AcidGame.State, System.Enum.toStringFn(AcidGame.State));}},{"a":2,"n":"TimeUp","is":true,"t":4,"rt":AcidGame.State,"sn":"TimeUp","box":function ($v) { return Bridge.box($v, AcidGame.State, System.Enum.toStringFn(AcidGame.State));}},{"a":2,"n":"Win","is":true,"t":4,"rt":AcidGame.State,"sn":"Win","box":function ($v) { return Bridge.box($v, AcidGame.State, System.Enum.toStringFn(AcidGame.State));}}]}; }, $n);
    /*AcidGame+State end.*/

    /*AcidGhost start.*/
    $m("AcidGhost", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Apply","t":8,"sn":"Apply","rt":$n[1].Void},{"a":2,"n":"Play","t":8,"pi":[{"n":"sprite","pt":$n[0].Sprite,"ps":0}],"sn":"Play","rt":$n[1].Void,"p":[$n[0].Sprite]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"dx","t":4,"rt":$n[1].Single,"sn":"dx","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dy","t":4,"rt":$n[1].Single,"sn":"dy","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"life","t":4,"rt":$n[1].Single,"sn":"life","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxAlpha","t":4,"rt":$n[1].Single,"sn":"maxAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"sr","t":4,"rt":$n[0].SpriteRenderer,"sn":"sr"},{"a":1,"n":"t","t":4,"rt":$n[1].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*AcidGhost end.*/

    /*AcidHit start.*/
    $m("AcidHit", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Apply","t":8,"sn":"Apply","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"dark","t":4,"rt":$n[0].SpriteRenderer,"sn":"dark"},{"a":2,"n":"glow","t":4,"rt":$n[0].SpriteRenderer,"sn":"glow"},{"a":2,"n":"life","t":4,"rt":$n[1].Single,"sn":"life","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"s","t":4,"rt":$n[1].Single,"sn":"s","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[1].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*AcidHit end.*/

    /*AcidIntro start.*/
    $m("AcidIntro", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"OnStart","t":8,"sn":"OnStart","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"button","t":4,"rt":$n[0].RectTransform,"sn":"button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"game","t":4,"rt":AcidGame,"sn":"game"},{"a":1,"n":"nextShake","t":4,"rt":$n[1].Single,"sn":"nextShake","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"pulsePeriod","t":4,"rt":$n[1].Single,"sn":"pulsePeriod","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Button pulse")],"a":2,"n":"pulseScale","t":4,"rt":$n[1].Single,"sn":"pulseScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sfx","t":4,"rt":AcidAudio,"sn":"sfx"},{"at":[new UnityEngine.TooltipAttribute("Shake: max tilt (degrees); 0 = no tilt.")],"a":2,"n":"shakeAngle","t":4,"rt":$n[1].Single,"sn":"shakeAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("New shake position this many times per second.")],"a":2,"n":"shakeRate","t":4,"rt":$n[1].Single,"sn":"shakeRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Title shake"),new UnityEngine.TooltipAttribute("Shake: max sideways offset (px).")],"a":2,"n":"shakeX","t":4,"rt":$n[1].Single,"sn":"shakeX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Shake: max up/down offset (px).")],"a":2,"n":"shakeY","t":4,"rt":$n[1].Single,"sn":"shakeY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Shown once the game starts (kill counter); hidden during the intro."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"showOnStart","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"showOnStart"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startButton","t":4,"rt":$n[3].Button,"sn":"startButton"},{"a":1,"n":"t","t":4,"rt":$n[1].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"title","t":4,"rt":$n[0].RectTransform,"sn":"title"},{"a":1,"n":"titlePos","t":4,"rt":$n[0].Vector2,"sn":"titlePos"}]}; }, $n);
    /*AcidIntro end.*/

    /*AcidKillCounter start.*/
    $m("AcidKillCounter", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetCount","t":8,"pi":[{"n":"n","pt":$n[1].Int32,"ps":0},{"n":"punch","pt":$n[1].Boolean,"ps":1}],"sn":"SetCount","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"digitSpacing","t":4,"rt":$n[1].Single,"sn":"digitSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Sprites for 0..9."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"digitSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"digitSprites"},{"at":[new UnityEngine.TooltipAttribute("Digit slots, left to right (enough for the largest count)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"digits","t":4,"rt":System.Array.type(UnityEngine.UI.Image),"sn":"digits"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"label","t":4,"rt":$n[0].RectTransform,"sn":"label"},{"a":2,"n":"labelGap","t":4,"rt":$n[1].Single,"sn":"labelGap","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"punchScale","t":4,"rt":$n[1].Single,"sn":"punchScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"punchT","t":4,"rt":$n[1].Single,"sn":"punchT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"punchTime","t":4,"rt":$n[1].Single,"sn":"punchTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"root","t":4,"rt":$n[0].RectTransform,"sn":"root"}]}; }, $n);
    /*AcidKillCounter end.*/

    /*AcidMan start.*/
    $m("AcidMan", function () { return {"nested":[AcidMan.Part],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckLanded","t":8,"sn":"CheckLanded","rt":$n[1].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[1].Void},{"a":2,"n":"GoLimp","t":8,"sn":"GoLimp","rt":$n[1].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"owner","pt":AcidGame,"ps":0},{"n":"sortBase","pt":$n[1].Int32,"ps":1}],"sn":"Init","rt":$n[1].Void,"p":[AcidGame,$n[1].Int32]},{"a":2,"n":"Kill","t":8,"sn":"Kill","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnTileEaten","t":8,"pi":[{"n":"part","pt":AcidMan.Part,"ps":0}],"sn":"OnTileEaten","rt":$n[1].Void,"p":[AcidMan.Part]},{"a":1,"n":"PullFoot","is":true,"t":8,"pi":[{"n":"leg","pt":AcidMan.Part,"ps":0},{"n":"f","pt":$n[1].Single,"ps":1}],"sn":"PullFoot","rt":$n[1].Void,"p":[AcidMan.Part,$n[1].Single]},{"a":1,"n":"Remove","t":8,"sn":"Remove","rt":$n[1].Void},{"a":1,"n":"Shatter","t":8,"sn":"Shatter","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"Center","t":16,"rt":$n[0].Vector2,"g":{"a":2,"n":"get_Center","t":8,"rt":$n[0].Vector2,"fg":"Center"},"fn":"Center"},{"a":2,"n":"Dead","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Dead","t":8,"rt":$n[1].Boolean,"fg":"Dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Dead"},{"a":2,"n":"HeadPosition","t":16,"rt":$n[0].Vector3,"g":{"a":2,"n":"get_HeadPosition","t":8,"rt":$n[0].Vector3,"fg":"HeadPosition"},"fn":"HeadPosition"},{"a":2,"n":"KilledByAcid","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_KilledByAcid","t":8,"rt":$n[1].Boolean,"fg":"KilledByAcid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"KilledByAcid"},{"a":2,"n":"Landed","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Landed","t":8,"rt":$n[1].Boolean,"fg":"Landed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Landed"},{"a":2,"n":"ARM_L","is":true,"t":4,"rt":$n[1].Int32,"sn":"ARM_L","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ARM_R","is":true,"t":4,"rt":$n[1].Int32,"sn":"ARM_R","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"HEAD","is":true,"t":4,"rt":$n[1].Int32,"sn":"HEAD","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"LEG_L","is":true,"t":4,"rt":$n[1].Int32,"sn":"LEG_L","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"LEG_R","is":true,"t":4,"rt":$n[1].Int32,"sn":"LEG_R","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"TORSO","is":true,"t":4,"rt":$n[1].Int32,"sn":"TORSO","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"dead","t":4,"rt":$n[1].Boolean,"sn":"dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"eatTime","t":4,"rt":$n[4].List$1(System.Single),"sn":"eatTime","ro":true},{"a":1,"n":"eating","t":4,"rt":$n[4].List$1(UnityEngine.SpriteRenderer),"sn":"eating","ro":true},{"at":[new UnityEngine.TooltipAttribute("Tiles eaten by the acid before the man stops standing.")],"a":2,"n":"fallAfterTiles","t":4,"rt":$n[1].Int32,"sn":"fallAfterTiles","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"fallen","t":4,"rt":$n[1].Boolean,"sn":"fallen","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"game","t":4,"rt":AcidGame,"sn":"game"},{"a":2,"n":"ghostSprite","t":4,"rt":$n[0].Sprite,"sn":"ghostSprite"},{"a":1,"n":"gone","t":4,"rt":$n[4].HashSet$1(UnityEngine.SpriteRenderer),"sn":"gone","ro":true},{"a":1,"n":"killedByAcid","t":4,"rt":$n[1].Boolean,"sn":"killedByAcid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"landed","t":4,"rt":$n[1].Boolean,"sn":"landed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"mass","t":4,"rt":$n[1].Single,"sn":"mass","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"parts","t":4,"rt":System.Array.type(AcidMan.Part),"sn":"parts"},{"a":1,"n":"removed","t":4,"rt":$n[1].Boolean,"sn":"removed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Head pull = weight * this; each foot = weight * this / 2.")],"a":2,"n":"standForce","t":4,"rt":$n[1].Single,"sn":"standForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"tilesLeft","t":4,"rt":$n[1].Int32,"sn":"tilesLeft","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"totalTiles","t":4,"rt":$n[1].Int32,"sn":"totalTiles","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*AcidMan end.*/

    /*AcidMan+Part start.*/
    $m("AcidMan.Part", function () { return {"td":AcidMan,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"body","t":4,"rt":$n[0].Rigidbody2D,"sn":"body"},{"a":2,"n":"col","t":4,"rt":$n[0].Collider2D,"sn":"col"},{"at":[new UnityEngine.TooltipAttribute("Local point (part space) where the standing force is applied (feet / top of the head).")],"a":2,"n":"forcePoint","t":4,"rt":$n[0].Vector2,"sn":"forcePoint"},{"a":2,"n":"joint","t":4,"rt":$n[0].HingeJoint2D,"sn":"joint"},{"a":2,"n":"left","t":4,"rt":$n[1].Int32,"sn":"left","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"sortOffset","t":4,"rt":$n[1].Int32,"sn":"sortOffset","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tiles","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"tiles"}]}; }, $n);
    /*AcidMan+Part end.*/

    /*AcidStick start.*/
    $m("AcidStick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[1].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"owner","pt":AcidGame,"ps":0}],"sn":"Init","rt":$n[1].Void,"p":[AcidGame]},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"c","pt":$n[0].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[1].Void,"p":[$n[0].Collision2D]},{"a":1,"n":"Reachable","t":8,"pi":[{"n":"p","pt":$n[0].Vector2,"ps":0}],"sn":"Reachable","rt":$n[0].Vector2,"p":[$n[0].Vector2]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"Held","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Held","t":8,"rt":$n[1].Boolean,"fg":"Held","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Held"},{"a":2,"n":"body","t":4,"rt":$n[0].Rigidbody2D,"sn":"body"},{"a":2,"n":"cam","t":4,"rt":$n[0].Camera,"sn":"cam"},{"at":[new UnityEngine.TooltipAttribute("The sword's collider: its rotated extent keeps the chased point above the plank and inside the walls."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"col","t":4,"rt":$n[0].BoxCollider2D,"sn":"col"},{"at":[new UnityEngine.TooltipAttribute("Mouse joint damping ratio.")],"a":2,"n":"dampingRatio","t":4,"rt":$n[1].Single,"sn":"dampingRatio","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Offset from the finger to the sword centre (0 = centred on the finger).")],"a":2,"n":"fingerOffset","t":4,"rt":$n[0].Vector2,"sn":"fingerOffset"},{"at":[new UnityEngine.TooltipAttribute("On: the sword sticks to the finger. Off: soft mouse joint like the reference (lags and swings).")],"a":2,"n":"follow","t":4,"rt":$n[1].Boolean,"sn":"follow","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Follow mode: top speed (world units/s).")],"a":2,"n":"followMaxSpeed","t":4,"rt":$n[1].Single,"sn":"followMaxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Follow mode: spin kept per physics step (1 = free spin, 0 = no spin)."),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"followSpinKeep","t":4,"rt":$n[1].Single,"sn":"followSpinKeep","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Mouse joint frequency (Hz).")],"a":2,"n":"frequency","t":4,"rt":$n[1].Single,"sn":"frequency","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"game","t":4,"rt":AcidGame,"sn":"game"},{"a":1,"n":"held","t":4,"rt":$n[1].Boolean,"sn":"held","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Gap kept between the sword and the plank / walls (world units).")],"a":2,"n":"keepOut","t":4,"rt":$n[1].Single,"sn":"keepOut","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Mouse joint max force as an acceleration limit (world units/s^2).")],"a":2,"n":"maxAccel","t":4,"rt":$n[1].Single,"sn":"maxAccel","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Initial spin (deg/s); reference 0.2 rad/s.")],"a":2,"n":"startSpin","t":4,"rt":$n[1].Single,"sn":"startSpin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"target","t":4,"rt":$n[0].Vector2,"sn":"target"}]}; }, $n);
    /*AcidStick end.*/

    /*AcidTank start.*/
    $m("AcidTank", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","t":8,"pi":[{"n":"owner","pt":AcidGame,"ps":0}],"sn":"Init","rt":$n[1].Void,"p":[AcidGame]},{"a":1,"n":"SetAlpha","is":true,"t":8,"pi":[{"n":"r","pt":$n[0].SpriteRenderer,"ps":0},{"n":"a","pt":$n[1].Single,"ps":1}],"sn":"SetAlpha","rt":$n[1].Void,"p":[$n[0].SpriteRenderer,$n[1].Single]},{"a":1,"n":"Show","t":8,"pi":[{"n":"i","pt":$n[1].Int32,"ps":0}],"sn":"Show","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"Depth","t":16,"rt":$n[1].Single,"g":{"a":1,"n":"get_Depth","t":8,"rt":$n[1].Single,"fg":"Depth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Depth"},{"a":2,"n":"InAcid","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_InAcid","t":8,"rt":$n[1].Boolean,"fg":"InAcid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"InAcid"},{"a":2,"n":"Settled","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Settled","t":8,"rt":$n[1].Boolean,"fg":"Settled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Settled"},{"a":2,"n":"body","t":4,"rt":$n[0].Rigidbody2D,"sn":"body"},{"a":1,"n":"budget","t":4,"rt":$n[1].Single,"sn":"budget","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"dx","t":4,"rt":$n[1].Array.type(System.Single),"sn":"dx"},{"a":1,"n":"game","t":4,"rt":AcidGame,"sn":"game"},{"a":1,"n":"hold","t":4,"rt":$n[1].Array.type(System.Single),"sn":"hold"},{"a":1,"n":"pending","t":4,"rt":$n[4].List$1(System.Int32),"sn":"pending","ro":true},{"a":1,"n":"phase","t":4,"rt":$n[1].Array.type(System.Int32),"sn":"phase"},{"at":[new UnityEngine.TooltipAttribute("Rust spots (children, disabled until the acid reaches them).")],"a":2,"n":"rust","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"rust"},{"a":2,"n":"rustFall","t":4,"rt":$n[1].Single,"sn":"rustFall","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Rust drift speed at the end of the fall (local units/s).")],"a":2,"n":"rustFallSpeed","t":4,"rt":$n[1].Single,"sn":"rustFallSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rustGrow","t":4,"rt":$n[1].Single,"sn":"rustGrow","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Most rust spots visible at the same time.")],"a":2,"n":"rustMaxVisible","t":4,"rt":$n[1].Int32,"sn":"rustMaxVisible","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Spots reached by the acid wait in a queue and pop up at random, this many per second.")],"a":2,"n":"rustPerSecond","t":4,"rt":$n[1].Single,"sn":"rustPerSecond","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Base local scale of a rust spot (x 1..1.5 at random).")],"a":2,"n":"rustScale","t":4,"rt":$n[1].Single,"sn":"rustScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"settled","t":4,"rt":$n[1].Single,"sn":"settled","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"size","t":4,"rt":$n[1].Array.type(System.Single),"sn":"size"},{"at":[new UnityEngine.TooltipAttribute("Local Y of the bottom of the tank sprite.")],"a":2,"n":"spriteBottom","t":4,"rt":$n[1].Single,"sn":"spriteBottom","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timer","t":4,"rt":$n[1].Array.type(System.Single),"sn":"timer"},{"a":1,"n":"visible","t":4,"rt":$n[1].Int32,"sn":"visible","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*AcidTank end.*/

    /*AcidWave start.*/
    $m("AcidWave", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Renderer)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"mat","t":4,"rt":$n[0].Material,"sn":"mat"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rend","t":4,"rt":$n[0].Renderer,"sn":"rend"}]}; }, $n);
    /*AcidWave end.*/

    /*LunaController start.*/
    $m("LunaController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"BeginTimer","t":8,"sn":"BeginTimer","rt":$n[1].Void},{"a":2,"n":"ClickCTA","t":8,"sn":"ClickCTA","rt":$n[1].Void},{"a":1,"n":"EndAfterTime","t":8,"sn":"EndAfterTime","rt":$n[2].IEnumerator},{"a":2,"n":"ShowEndUI","t":8,"sn":"ShowEndUI","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("BGM", 0, null)],"a":2,"n":"BGM","t":4,"rt":$n[0].AudioClip,"sn":"BGM"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("BG Image", 0, null)],"a":2,"n":"BGTexture","t":4,"rt":$n[0].Texture2D,"sn":"BGTexture"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"CTA","t":4,"rt":$n[4].List$1(UnityEngine.UI.Button),"sn":"CTA"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Max Acid Deaths", -1, null, false, null)],"a":2,"n":"MaxAcidDeaths","t":4,"rt":$n[1].Int32,"sn":"MaxAcidDeaths","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Time Play", -1, null, false, null)],"a":2,"n":"TimePlay","t":4,"rt":$n[1].Single,"sn":"TimePlay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Use Custom BG", -1, null, false, null)],"a":2,"n":"UseCustomBG","t":4,"rt":$n[1].Boolean,"sn":"UseCustomBG","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"customBG","t":4,"rt":AcidCustomBG,"sn":"customBG"},{"at":[new UnityEngine.TooltipAttribute("End card (transparent, full-screen CTA), shown as soon as Time Play runs out."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endUI","t":4,"rt":$n[0].GameObject,"sn":"endUI"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"game","t":4,"rt":AcidGame,"sn":"game"},{"a":1,"n":"gameEndedSent","t":4,"rt":$n[1].Boolean,"sn":"gameEndedSent","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicSource","t":4,"rt":$n[0].AudioSource,"sn":"musicSource"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"musicVolume","t":4,"rt":$n[1].Single,"sn":"musicVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sfx","t":4,"rt":AcidAudio,"sn":"sfx"}]}; }, $n);
    /*LunaController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});

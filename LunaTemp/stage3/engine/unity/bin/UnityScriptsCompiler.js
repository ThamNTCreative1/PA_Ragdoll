if ( TRACE ) { TRACE( JSON.parse( '["DragZone#OnPointerDown","DragZone#OnDrag","DragZone#OnPointerUp","FollowHint#init","FollowHint#SetTarget","FollowHint#LateUpdate","Fx#init","Fx#init","Fx#Prefab","Fx#Get","Fx#Spawn","Fx#Blood","Fx#ZombiePuff","Fx#Update","Fx#Release","Fx.P#init","FxSprite#Sr#get","GameAudio#init","GameAudio#Play","GameAudio#PlayHit","GameAudio#PlayBreak","GameAudio#PlayDeath","GameAudio#PlayPotion","GameAudio#PlayClick","GameController#CurrentPhase#get","GameController#CameraTarget#get","GameController#init","GameController#SetPlayerSkin","GameController#SetMonsterSkins","GameController#Spawn","GameController#Start","GameController#PointerDown","GameController#PointerMove","GameController#PointerUp","GameController#FixedUpdate","GameController#OnPotionTouched","GameController#OnManHit","GameController#OnJointBroken","GameController#OnManDied","GameController#End","LayoutController#init","LayoutController#Start","LayoutController#LateUpdate","LunaController#init","LunaController#Awake","LunaController#Start","LunaController#CountClick","LunaController#ShowEndCard","LunaController#ClickCTA","LunaController#EndAfterTime","MapTheme#init","MapTheme#SetWinter","Potion#OnTriggerEnter2D","Snowfall#init","Snowfall#Start","Snowfall#Update","SspMan#init","SspMan#PullFoot","SspMan#Dead#get","SspMan#HeadBody#get","SspMan#Center#get","SspMan#init","SspMan#Init","SspMan#SetLayer","SspMan#Owns","SspMan#Zombify","SspMan#SetHeld","SspMan#OnPartContact","SspMan#FixedUpdate","SspMan#OnPartHit","SspMan#Break","SspMan#Die","SspMan.Part#init","SspPartHit#OnCollisionEnter2D","SspPartHit#OnCollisionExit2D","UiTween#init","UiTween#Awake","UiTween#OnEnable","UiTween#Update"]' ) ); }
/**
 * @version 1.0.9826.29722
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CharacterSkin start.*/
    Bridge.define("CharacterSkin", {
        $kind: 6,
        statics: {
            fields: {
                Hat: 0,
                Beanie: 1,
                Bush: 2,
                Helmet: 3,
                SkullRed: 4,
                SkullBlack: 5,
                Alien: 6,
                Deer: 7,
                Goat: 8,
                Snow: 9,
                Pink: 10
            }
        }
    });
    /*CharacterSkin end.*/

    /*DragZone start.*/
    Bridge.define("DragZone", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            game: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*DragZone.OnPointerDown start.*/
            OnPointerDown: function (e) {
if ( TRACE ) { TRACE( "DragZone#OnPointerDown", this ); }

                if (UnityEngine.Object.op_Implicit(this.game)) {
                    this.game.PointerDown(e.position);
                }
            },
            /*DragZone.OnPointerDown end.*/

            /*DragZone.OnDrag start.*/
            OnDrag: function (e) {
if ( TRACE ) { TRACE( "DragZone#OnDrag", this ); }

                if (UnityEngine.Object.op_Implicit(this.game)) {
                    this.game.PointerMove(e.position);
                }
            },
            /*DragZone.OnDrag end.*/

            /*DragZone.OnPointerUp start.*/
            OnPointerUp: function (e) {
if ( TRACE ) { TRACE( "DragZone#OnPointerUp", this ); }

                if (UnityEngine.Object.op_Implicit(this.game)) {
                    this.game.PointerUp();
                }
            },
            /*DragZone.OnPointerUp end.*/


        }
    });
    /*DragZone end.*/

    /*FollowHint start.*/
    Bridge.define("FollowHint", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            offset: null,
            amplitude: 0,
            duration: 0,
            t: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FollowHint#init", this ); }

                this.offset = new UnityEngine.Vector3();
                this.offset = new pc.Vec3( 0, 1.35, 0 );
                this.amplitude = 0.17;
                this.duration = 0.5;
            }
        },
        methods: {
            /*FollowHint.SetTarget start.*/
            SetTarget: function (tr) {
if ( TRACE ) { TRACE( "FollowHint#SetTarget", this ); }

                this.target = tr;
            },
            /*FollowHint.SetTarget end.*/

            /*FollowHint.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "FollowHint#LateUpdate", this ); }

                if (!UnityEngine.Object.op_Implicit(this.target)) {
                    return;
                }
                this.t += UnityEngine.Time.deltaTime;
                var p = UnityEngine.Mathf.PingPong(this.t / this.duration, 1.0);
                var eased = 0.5 - 0.5 * Math.cos(UnityEngine.Mathf.PI * p); // InOutSine
                var pos = this.target.position.$clone().add( this.offset );
                pos.y -= this.amplitude * eased;
                pos.z = this.transform.position.z;
                this.transform.position = pos.$clone();
                this.transform.rotation = pc.Quat.IDENTITY.clone();
            },
            /*FollowHint.LateUpdate end.*/


        }
    });
    /*FollowHint end.*/

    /*Fx start.*/
    Bridge.define("Fx", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                BLOOD: 0,
                SPLASH: 0,
                SMOKE: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Fx#init", this ); }

                    this.BLOOD = 0;
                    this.SPLASH = 1;
                    this.SMOKE = 2;
                }
            }
        },
        fields: {
            bloodPrefab: null,
            splashPrefab: null,
            smokePrefab: null,
            pool: null,
            bloodBreak: 0,
            bloodHit: 0,
            bloodSize: null,
            bloodSpeed: null,
            bloodInherit: 0,
            bloodLife: 0,
            gravity: 0,
            bloodDark: null,
            bloodLight: null,
            splashCount: 0,
            smokeCount: 0,
            live: null,
            free: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Fx#init", this ); }

                this.bloodSize = new UnityEngine.Vector2();
                this.bloodSpeed = new UnityEngine.Vector2();
                this.bloodDark = new UnityEngine.Color();
                this.bloodLight = new UnityEngine.Color();
                this.bloodBreak = 40;
                this.bloodHit = 8;
                this.bloodSize = new pc.Vec2( 0.06, 0.16 );
                this.bloodSpeed = new pc.Vec2( 2.0, 8.0 );
                this.bloodInherit = 0.25;
                this.bloodLife = 1.1;
                this.gravity = 14.0;
                this.bloodDark = new pc.Color( 0.45, 0.02, 0.02, 1.0 );
                this.bloodLight = new pc.Color( 0.85, 0.08, 0.05, 1.0 );
                this.splashCount = 14;
                this.smokeCount = 8;
                this.live = new (System.Collections.Generic.List$1(Fx.P)).ctor();
                this.free = System.Array.init([
                    new (System.Collections.Generic.List$1(FxSprite)).ctor(), 
                    new (System.Collections.Generic.List$1(FxSprite)).ctor(), 
                    new (System.Collections.Generic.List$1(FxSprite)).ctor()
                ], System.Collections.Generic.List$1(FxSprite));
            }
        },
        methods: {
            /*Fx.Prefab start.*/
            Prefab: function (kind) {
if ( TRACE ) { TRACE( "Fx#Prefab", this ); }

                return kind === Fx.BLOOD ? this.bloodPrefab : kind === Fx.SPLASH ? this.splashPrefab : this.smokePrefab;
            },
            /*Fx.Prefab end.*/

            /*Fx.Get start.*/
            Get: function (kind) {
if ( TRACE ) { TRACE( "Fx#Get", this ); }

                var list = this.free[kind];
                var f;
                if (list.Count > 0) {
                    f = list.getItem(((list.Count - 1) | 0));
                    list.removeAt(((list.Count - 1) | 0));
                    f.gameObject.SetActive(true);
                } else {
                    f = UnityEngine.Object.Instantiate(FxSprite, this.Prefab(kind), this.pool);
                }
                return f;
            },
            /*Fx.Get end.*/

            /*Fx.Spawn start.*/
            Spawn: function (kind, at, vel, size, c, life, grav, grow, fade) {
if ( TRACE ) { TRACE( "Fx#Spawn", this ); }

                if (!UnityEngine.Object.op_Implicit(this.Prefab(kind))) {
                    return;
                }
                var f = this.Get(kind);
                f.transform.position = new pc.Vec3( at.x, at.y, 0 );
                f.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, UnityEngine.Random.Range$1(0.0, 360.0) );
                f.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( size );
                f.Sr.color = c.$clone();
                var p = new Fx.P();
                p.fx = f;
                p.vel = vel.$clone();
                p.life = 0;
                p.max = life;
                p.spin = UnityEngine.Random.Range$1(-360.0, 360.0);
                p.grav = grav;
                p.grow = grow;
                p.size = size;
                p.color = c.$clone();
                p.fade = fade;
                p.kind = kind;
                this.live.add(p);
            },
            /*Fx.Spawn end.*/

            /*Fx.Blood start.*/
            Blood: function (at, hitVel, big) {
if ( TRACE ) { TRACE( "Fx#Blood", this ); }

                var n = big ? this.bloodBreak : this.bloodHit;
                var inherit = pc.Vec2.lengthClamp( hitVel.$clone().scale( this.bloodInherit ), 5.0 );
                for (var i = 0; i < n; i = (i + 1) | 0) {
                    var a = UnityEngine.Random.Range$1(0.0, 6.28318548);
                    var dir = new pc.Vec2( Math.cos(a), Math.sin(a) * 0.7 + 0.5 );
                    var v = dir.clone().normalize().$clone().scale( UnityEngine.Random.Range$1(this.bloodSpeed.x, this.bloodSpeed.y) ).add( inherit );
                    var c = pc.Color.lerp( this.bloodDark, this.bloodLight, UnityEngine.Random.value );
                    this.Spawn(Fx.BLOOD, at, v, UnityEngine.Random.Range$1(this.bloodSize.x, this.bloodSize.y), c, this.bloodLife * UnityEngine.Random.Range$1(0.7, 1.1), this.gravity, 0, false);
                }
            },
            /*Fx.Blood end.*/

            /*Fx.ZombiePuff start.*/
            ZombiePuff: function (at) {
if ( TRACE ) { TRACE( "Fx#ZombiePuff", this ); }

                for (var i = 0; i < this.splashCount; i = (i + 1) | 0) {
                    var a = UnityEngine.Random.Range$1(0.0, 6.28318548);
                    var v = new pc.Vec2( Math.cos(a), Math.sin(a) ).scale( UnityEngine.Random.Range$1(1.5, 5.0) ).add( pc.Vec2.UP.clone().scale( 1.5 ) );
                    this.Spawn(Fx.SPLASH, at.$clone().add( UnityEngine.Random.insideUnitCircle.$clone().scale( 0.3 ) ), v, UnityEngine.Random.Range$1(0.6, 1.1), new pc.Color( 1, 1, 1, 1 ), UnityEngine.Random.Range$1(0.6, 1.0), this.gravity * 0.6, 0, true);
                }
                for (var i1 = 0; i1 < this.smokeCount; i1 = (i1 + 1) | 0) {
                    var v1 = UnityEngine.Random.insideUnitCircle.$clone().scale( 1.2 ).add( pc.Vec2.UP.clone().scale( 0.8 ) );
                    this.Spawn(Fx.SMOKE, at.$clone().add( UnityEngine.Random.insideUnitCircle.$clone().scale( 0.6 ) ), v1, UnityEngine.Random.Range$1(0.8, 1.3), new pc.Color( 0.6, 1.0, 0.55, 0.8 ), UnityEngine.Random.Range$1(0.8, 1.2), 0, 1.2, true);
                }
            },
            /*Fx.ZombiePuff end.*/

            /*Fx.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Fx#Update", this ); }

                var dt = UnityEngine.Time.deltaTime;
                for (var i = (this.live.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var p = this.live.getItem(i);
                    p.life += dt;
                    if (p.life >= p.max || !UnityEngine.Object.op_Implicit(p.fx)) {
                        if (UnityEngine.Object.op_Implicit(p.fx)) {
                            this.Release(p.fx, p.kind);
                        }
                        this.live.removeAt(i);
                        continue;
                    }
                    p.vel.y -= p.grav * dt;
                    var t = p.fx.transform;
                    t.position = t.position.$clone().add( new pc.Vec3( p.vel.x, p.vel.y, 0 ).clone().scale( dt ) );
                    t.Rotate(0, 0, p.spin * dt);
                    var k = p.life / p.max;
                    if (p.grow > 0) {
                        t.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( p.size ).clone().scale( (1.0 + p.grow * k) );
                    }
                    var c = p.color.$clone();
                    c.a = p.fade ? p.color.a * (1.0 - k) : (k > 0.7 ? p.color.a * (1.0 - (k - 0.7) / 0.3) : p.color.a);
                    p.fx.Sr.color = c.$clone();
                }
            },
            /*Fx.Update end.*/

            /*Fx.Release start.*/
            Release: function (f, kind) {
if ( TRACE ) { TRACE( "Fx#Release", this ); }

                f.gameObject.SetActive(false);
                this.free[kind].add(f);
            },
            /*Fx.Release end.*/


        }
    });
    /*Fx end.*/

    /*Fx+P start.*/
    Bridge.define("Fx.P", {
        $kind: 1002,
        fields: {
            fx: null,
            vel: null,
            life: 0,
            max: 0,
            spin: 0,
            grav: 0,
            grow: 0,
            size: 0,
            color: null,
            fade: false,
            kind: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Fx.P#init", this ); }

                this.vel = new UnityEngine.Vector2();
                this.color = new UnityEngine.Color();
            }
        }
    });
    /*Fx+P end.*/

    /*FxSprite start.*/
    Bridge.define("FxSprite", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            sr: null
        },
        props: {
            Sr: {
                get: function () {
if ( TRACE ) { TRACE( "FxSprite#Sr#get", this ); }

                    return this.sr;
                }
            }
        }
    });
    /*FxSprite end.*/

    /*GameAudio start.*/
    Bridge.define("GameAudio", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            voices: null,
            ui: null,
            hit: null,
            breakBone: null,
            death: null,
            potion: null,
            click: null,
            hitCooldown: 0,
            nextVoice: 0,
            lastHit: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameAudio#init", this ); }

                this.hitCooldown = 0.08;
                this.lastHit = -1.0;
            }
        },
        methods: {
            /*GameAudio.Play start.*/
            Play: function (clip) {
if ( TRACE ) { TRACE( "GameAudio#Play", this ); }

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
                v.Play();
            },
            /*GameAudio.Play end.*/

            /*GameAudio.PlayHit start.*/
            PlayHit: function () {
if ( TRACE ) { TRACE( "GameAudio#PlayHit", this ); }

                if (UnityEngine.Time.time - this.lastHit < this.hitCooldown) {
                    return;
                }
                this.lastHit = UnityEngine.Time.time;
                this.Play(this.hit);
            },
            /*GameAudio.PlayHit end.*/

            /*GameAudio.PlayBreak start.*/
            PlayBreak: function () {
if ( TRACE ) { TRACE( "GameAudio#PlayBreak", this ); }

                this.Play(this.breakBone);
            },
            /*GameAudio.PlayBreak end.*/

            /*GameAudio.PlayDeath start.*/
            PlayDeath: function () {
if ( TRACE ) { TRACE( "GameAudio#PlayDeath", this ); }

                this.Play(this.death);
            },
            /*GameAudio.PlayDeath end.*/

            /*GameAudio.PlayPotion start.*/
            PlayPotion: function () {
if ( TRACE ) { TRACE( "GameAudio#PlayPotion", this ); }

                this.Play(this.potion);
            },
            /*GameAudio.PlayPotion end.*/

            /*GameAudio.PlayClick start.*/
            PlayClick: function () {
if ( TRACE ) { TRACE( "GameAudio#PlayClick", this ); }

                if (UnityEngine.Object.op_Implicit(this.click) && UnityEngine.Object.op_Implicit(this.ui)) {
                    this.ui.PlayOneShot(this.click);
                }
            },
            /*GameAudio.PlayClick end.*/


        }
    });
    /*GameAudio end.*/

    /*GameController start.*/
    Bridge.define("GameController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cam: null,
            world: null,
            playerSpawn: null,
            monsterSpawns: null,
            skinPrefabs: null,
            monsterSkins: null,
            potionBody: null,
            looseOnZombie: null,
            fx: null,
            sfx: null,
            tut: null,
            potionHint: null,
            monsterHints: null,
            tut2: null,
            endUI: null,
            playerLayer: 0,
            followMaxSpeed: 0,
            dragBounds: null,
            endDelay: 0,
            OnTap: null,
            phase: 0,
            player: null,
            monsters: null,
            skin: 0,
            monstersLeft: 0,
            dragging: false,
            pointer: null
        },
        props: {
            CurrentPhase: {
                get: function () {
if ( TRACE ) { TRACE( "GameController#CurrentPhase#get", this ); }

                    return this.phase;
                }
            },
            CameraTarget: {
                get: function () {
if ( TRACE ) { TRACE( "GameController#CameraTarget#get", this ); }

                    return this.phase !== GameController.Phase.Potion && UnityEngine.Object.op_Implicit(this.player) ? this.player.HeadBody.transform : null;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameController#init", this ); }

                this.dragBounds = new UnityEngine.Rect();
                this.pointer = new UnityEngine.Vector2();
                this.monsterSkins = System.Array.init([
                    7, 
                    8, 
                    10
                ], System.Int32);
                this.playerLayer = 9;
                this.followMaxSpeed = 80.0;
                this.dragBounds = new UnityEngine.Rect.$ctor1(-10.6, 0.2, 21.2, 10.4);
                this.endDelay = 2.0;
                this.phase = GameController.Phase.Potion;
                this.monsters = System.Array.init(0, null, SspMan);
            }
        },
        methods: {
            /*GameController.SetPlayerSkin start.*/
            SetPlayerSkin: function (index) {
if ( TRACE ) { TRACE( "GameController#SetPlayerSkin", this ); }

                this.skin = index;
            },
            /*GameController.SetPlayerSkin end.*/

            /*GameController.SetMonsterSkins start.*/
            SetMonsterSkins: function (skins) {
if ( TRACE ) { TRACE( "GameController#SetMonsterSkins", this ); }

                this.monsterSkins = skins;
            },
            /*GameController.SetMonsterSkins end.*/

            /*GameController.Spawn start.*/
            Spawn: function (skinIndex, at) {
if ( TRACE ) { TRACE( "GameController#Spawn", this ); }

                var prefab = this.skinPrefabs[Math.max(0, Math.min(skinIndex, ((this.skinPrefabs.length - 1) | 0)))];
                var p = at.position.$clone();
                p.y += prefab.footDepth + 0.02;
                return UnityEngine.Object.Instantiate$3(SspMan, prefab, p, pc.Quat.IDENTITY.clone(), this.world);
            },
            /*GameController.Spawn end.*/

            /*GameController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameController#Start", this ); }

                this.player = this.Spawn(this.skin, this.playerSpawn);
                this.player.name = "Player";
                this.player.SetLayer(this.playerLayer);
                this.player.Init(this, 300, false);
                if (UnityEngine.Object.op_Implicit(this.potionHint)) {
                    this.potionHint.SetTarget(this.player.HeadBody.transform);
                    this.potionHint.gameObject.SetActive(false);
                }
                this.monstersLeft = 0;
                this.monsters = System.Array.init(this.monsterSpawns.length, null, SspMan);
                for (var m = 0; m < this.monsterSpawns.length; m = (m + 1) | 0) {
                    if (!UnityEngine.Object.op_Implicit(this.monsterSpawns[m])) {
                        continue;
                    }
                    var s = m < this.monsterSkins.length ? this.monsterSkins[m] : 0;
                    this.monsters[m] = this.Spawn(s, this.monsterSpawns[m]);
                    this.monsters[m].name = "Monster_" + (((m + 1) | 0));
                    this.monsters[m].Init(this, ((100 + Bridge.Int.mul(m, 20)) | 0), true);
                    this.monstersLeft = (this.monstersLeft + 1) | 0;
                    if (m < this.monsterHints.length && UnityEngine.Object.op_Implicit(this.monsterHints[m])) {
                        this.monsterHints[m].SetTarget(this.monsters[m].HeadBody.transform);
                    }
                }
                for (var h = 0; h < this.monsterHints.length; h = (h + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.monsterHints[h])) {
                        this.monsterHints[h].gameObject.SetActive(false);
                    }
                }
                if (UnityEngine.Object.op_Implicit(this.tut)) {
                    this.tut.SetActive(true);
                }
                if (UnityEngine.Object.op_Implicit(this.tut2)) {
                    this.tut2.SetActive(false);
                }
                if (UnityEngine.Object.op_Implicit(this.endUI)) {
                    this.endUI.SetActive(false);
                }
            },
            /*GameController.Start end.*/

            /*GameController.PointerDown start.*/
            PointerDown: function (screen) {
if ( TRACE ) { TRACE( "GameController#PointerDown", this ); }

                if (!Bridge.staticEquals(this.OnTap, null)) {
                    this.OnTap();
                }
                if (this.phase === GameController.Phase.End) {
                    return;
                }
                this.pointer = screen.$clone();
                this.dragging = true;
                if (UnityEngine.Object.op_Implicit(this.tut)) {
                    this.tut.SetActive(false);
                } // SRP: the tutorial (dark overlay, hand, text) goes on the first touch
                if (this.phase === GameController.Phase.Potion && UnityEngine.Object.op_Implicit(this.potionHint)) {
                    this.potionHint.gameObject.SetActive(true);
                }
            },
            /*GameController.PointerDown end.*/

            /*GameController.PointerMove start.*/
            PointerMove: function (screen) {
if ( TRACE ) { TRACE( "GameController#PointerMove", this ); }

                this.pointer = screen.$clone();
            },
            /*GameController.PointerMove end.*/

            /*GameController.PointerUp start.*/
            PointerUp: function () {
if ( TRACE ) { TRACE( "GameController#PointerUp", this ); }

                this.dragging = false;
                if (UnityEngine.Object.op_Implicit(this.player)) {
                    this.player.SetHeld(false);
                }
                if (this.phase === GameController.Phase.Potion && UnityEngine.Object.op_Implicit(this.potionHint)) {
                    this.potionHint.gameObject.SetActive(false);
                }
            },
            /*GameController.PointerUp end.*/

            /*GameController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "GameController#FixedUpdate", this ); }

                if (!this.dragging || this.phase === GameController.Phase.End) {
                    return;
                }
                var rb = this.phase === GameController.Phase.Potion ? this.potionBody : (UnityEngine.Object.op_Implicit(this.player) ? this.player.HeadBody : null);
                if (!UnityEngine.Object.op_Implicit(rb)) {
                    return;
                }
                var w = this.cam.ScreenToWorldPoint(new pc.Vec3( this.pointer.x, this.pointer.y, 0 ));
                var target = new pc.Vec2( Math.max(this.dragBounds.xMin, Math.min(w.x, this.dragBounds.xMax)), Math.max(this.dragBounds.yMin, Math.min(w.y, this.dragBounds.yMax)) );
                // Like SRP TargetController.MovePosition, but as a velocity: the body reaches the finger in one step and the physics
                // still resolves every collision (Luna's MovePosition let the zombie pass through walls). While the zombie is held
                // its standing forces are off (SspMan.SetHeld; SRP has none), so the body just hangs from the head.
                if (this.phase === GameController.Phase.Zombie && UnityEngine.Object.op_Implicit(this.player)) {
                    this.player.SetHeld(true);
                }
                rb.linearVelocity = pc.Vec2.lengthClamp( (target.$clone().sub( rb.position )).scale( 1.0 / ( UnityEngine.Time.fixedDeltaTime ) ), this.followMaxSpeed );
                if (this.phase === GameController.Phase.Potion) {
                    rb.angularVelocity = 0;
                    rb.MoveRotation(UnityEngine.Mathf.LerpAngle(rb.rotation, 0, 0.3));
                }
            },
            /*GameController.FixedUpdate end.*/

            /*GameController.OnPotionTouched start.*/
            OnPotionTouched: function (other) {
if ( TRACE ) { TRACE( "GameController#OnPotionTouched", this ); }

                if (this.phase !== GameController.Phase.Potion || !UnityEngine.Object.op_Implicit(this.player) || !this.player.Owns(other)) {
                    return;
                }
                this.phase = GameController.Phase.Zombie;
                this.dragging = false;
                if (UnityEngine.Object.op_Implicit(this.sfx)) {
                    this.sfx.PlayPotion();
                }
                if (UnityEngine.Object.op_Implicit(this.fx)) {
                    this.fx.ZombiePuff(this.player.Center);
                }
                this.player.Zombify();
                for (var i = 0; i < this.looseOnZombie.length; i = (i + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.looseOnZombie[i])) {
                        this.looseOnZombie[i].bodyType = UnityEngine.RigidbodyType2D.Dynamic;
                    }
                }
                if (UnityEngine.Object.op_Implicit(this.potionHint)) {
                    this.potionHint.gameObject.SetActive(false);
                }
                if (UnityEngine.Object.op_Implicit(this.tut)) {
                    this.tut.SetActive(false);
                }
                if (UnityEngine.Object.op_Implicit(this.tut2)) {
                    this.tut2.SetActive(true);
                }
                for (var h = 0; h < this.monsterHints.length; h = (h + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.monsterHints[h])) {
                        this.monsterHints[h].gameObject.SetActive(true);
                    }
                }
                if (UnityEngine.Object.op_Implicit(this.potionBody)) {
                    UnityEngine.MonoBehaviour.Destroy(this.potionBody.gameObject);
                }
            },
            /*GameController.OnPotionTouched end.*/

            /*GameController.OnManHit start.*/
            OnManHit: function (man, at, speed, vel) {
if ( TRACE ) { TRACE( "GameController#OnManHit", this ); }

                if (UnityEngine.Object.op_Implicit(this.sfx)) {
                    this.sfx.PlayHit();
                }
                if (UnityEngine.Object.op_Implicit(this.fx) && UnityEngine.MonoBehaviour.op_Inequality(man, this.player) && this.phase === GameController.Phase.Zombie) {
                    this.fx.Blood(at, vel, false);
                }
            },
            /*GameController.OnManHit end.*/

            /*GameController.OnJointBroken start.*/
            OnJointBroken: function (man, at, vel) {
if ( TRACE ) { TRACE( "GameController#OnJointBroken", this ); }

                if (UnityEngine.Object.op_Implicit(this.sfx)) {
                    this.sfx.PlayBreak();
                }
                if (UnityEngine.Object.op_Implicit(this.fx)) {
                    this.fx.Blood(at, vel, true);
                }
            },
            /*GameController.OnJointBroken end.*/

            /*GameController.OnManDied start.*/
            OnManDied: function (man) {
if ( TRACE ) { TRACE( "GameController#OnManDied", this ); }

                if (UnityEngine.Object.op_Implicit(this.sfx)) {
                    this.sfx.PlayDeath();
                }
                for (var m = 0; m < this.monsters.length; m = (m + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.monsters[m], man) && m < this.monsterHints.length && UnityEngine.Object.op_Implicit(this.monsterHints[m])) {
                        this.monsterHints[m].gameObject.SetActive(false);
                    }
                }
                this.monstersLeft = (this.monstersLeft - 1) | 0;
                if (this.monstersLeft <= 0 && this.phase === GameController.Phase.Zombie) {
                    this.Invoke("End", this.endDelay);
                }
            },
            /*GameController.OnManDied end.*/

            /*GameController.End start.*/
            End: function () {
if ( TRACE ) { TRACE( "GameController#End", this ); }

                this.phase = GameController.Phase.End;
                this.dragging = false;
                if (UnityEngine.Object.op_Implicit(this.player)) {
                    this.player.SetHeld(false);
                }
                if (UnityEngine.Object.op_Implicit(this.tut2)) {
                    this.tut2.SetActive(false);
                }
                if (UnityEngine.Object.op_Implicit(this.endUI)) {
                    this.endUI.SetActive(true);
                }
            },
            /*GameController.End end.*/


        }
    });
    /*GameController end.*/

    /*GameController+Phase start.*/
    Bridge.define("GameController.Phase", {
        $kind: 1006,
        statics: {
            fields: {
                Potion: 0,
                Zombie: 1,
                End: 2
            }
        }
    });
    /*GameController+Phase end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LayoutController start.*/
    Bridge.define("LayoutController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cam: null,
            game: null,
            size: 0,
            startPosition: null,
            followOffset: null,
            followSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LayoutController#init", this ); }

                this.startPosition = new UnityEngine.Vector2();
                this.followOffset = new UnityEngine.Vector2();
                this.size = 6.08;
                this.startPosition = new pc.Vec2( 0.0, 4.05 );
                this.followOffset = new pc.Vec2( 0.0, 1.35 );
                this.followSpeed = 5.0;
            }
        },
        methods: {
            /*LayoutController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LayoutController#Start", this ); }

                if (!UnityEngine.Object.op_Implicit(this.cam)) {
                    return;
                }
                this.cam.orthographicSize = this.size;
                this.cam.transform.position = new pc.Vec3( this.startPosition.x, this.startPosition.y, this.cam.transform.position.z );
            },
            /*LayoutController.Start end.*/

            /*LayoutController.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "LayoutController#LateUpdate", this ); }

                if (!UnityEngine.Object.op_Implicit(this.cam) || !UnityEngine.Object.op_Implicit(this.game)) {
                    return;
                }
                var t = this.game.CameraTarget;
                if (!UnityEngine.Object.op_Implicit(t)) {
                    return;
                }
                var p = this.cam.transform.position.$clone();
                var target = new pc.Vec3( t.position.x + this.followOffset.x, t.position.y + this.followOffset.y, p.z );
                this.cam.transform.position = new pc.Vec3().lerp( p, target, this.followSpeed * UnityEngine.Time.deltaTime );
            },
            /*LayoutController.LateUpdate end.*/


        }
    });
    /*LayoutController end.*/

    /*LunaController start.*/
    Bridge.define("LunaController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Player: 0,
            Monster1: 0,
            Monster2: 0,
            Monster3: 0,
            LimitTimePlay: false,
            TimePlay: 0,
            LimitClick: false,
            MaxClick: 0,
            BGM: null,
            BGTexture: null,
            CustomWinter: false,
            LogoTexture: null,
            AppName: null,
            game: null,
            sfx: null,
            musicSource: null,
            musicVolume: 0,
            BGImage: null,
            mapTheme: null,
            logo: null,
            nameText: null,
            CTA: null,
            endCard: null,
            clicks: 0,
            gameEndedSent: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LunaController#init", this ); }

                this.Player = CharacterSkin.Hat;
                this.Monster1 = CharacterSkin.Deer;
                this.Monster2 = CharacterSkin.Goat;
                this.Monster3 = CharacterSkin.Pink;
                this.TimePlay = 30;
                this.MaxClick = 1;
                this.AppName = "Survival Sandbox: Playground";
                this.musicVolume = 0.6;
                this.CTA = new (System.Collections.Generic.List$1(UnityEngine.UI.Button)).ctor();
            }
        },
        methods: {
            /*LunaController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LunaController#Awake", this ); }

                if (UnityEngine.Object.op_Implicit(this.game)) {
                    this.game.SetPlayerSkin(this.Player);
                    this.game.SetMonsterSkins(System.Array.init([this.Monster1, this.Monster2, this.Monster3], System.Int32));
                }
                if (UnityEngine.Object.op_Implicit(this.BGImage) && UnityEngine.Object.op_Implicit(this.BGTexture)) {
                    this.BGImage.texture = this.BGTexture;
                }
                if (UnityEngine.Object.op_Implicit(this.mapTheme)) {
                    this.mapTheme.SetWinter(this.CustomWinter);
                }
                if (UnityEngine.Object.op_Implicit(this.logo) && UnityEngine.Object.op_Implicit(this.LogoTexture)) {
                    this.logo.texture = this.LogoTexture;
                }
                if (UnityEngine.Object.op_Implicit(this.nameText) && !System.String.isNullOrEmpty(this.AppName)) {
                    this.nameText.text = this.AppName;
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
                if (UnityEngine.Object.op_Implicit(this.endCard)) {
                    this.endCard.SetActive(false);
                }
                if (UnityEngine.Object.op_Implicit(this.game) && this.LimitClick) {
                    this.game.OnTap = Bridge.fn.combine(this.game.OnTap, Bridge.fn.cacheBind(this, this.CountClick));
                }
                this.StartCoroutine$1(this.EndAfterTime());
            },
            /*LunaController.Start end.*/

            /*LunaController.CountClick start.*/
            CountClick: function () {
if ( TRACE ) { TRACE( "LunaController#CountClick", this ); }

                this.clicks = (this.clicks + 1) | 0;
                if (this.clicks >= this.MaxClick) {
                    this.ShowEndCard();
                }
            },
            /*LunaController.CountClick end.*/

            /*LunaController.ShowEndCard start.*/
            ShowEndCard: function () {
if ( TRACE ) { TRACE( "LunaController#ShowEndCard", this ); }

                if (UnityEngine.Object.op_Implicit(this.endCard)) {
                    this.endCard.SetActive(true);
                }
            },
            /*LunaController.ShowEndCard end.*/

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
                                        if (this.LimitTimePlay) {
                                            this.ShowEndCard();
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

    /*MapTheme start.*/
    Bridge.define("MapTheme", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            normalObjects: null,
            winterObjects: null,
            normalRenderers: null,
            cam: null,
            normalBackground: null,
            winterBackground: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MapTheme#init", this ); }

                this.normalBackground = new UnityEngine.Color();
                this.winterBackground = new UnityEngine.Color();
                this.normalBackground = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(58, 18, 74, 255));
                this.winterBackground = UnityEngine.Color32.op_Implicit(new UnityEngine.Color32.$ctor1(156, 196, 228, 255));
            }
        },
        methods: {
            /*MapTheme.SetWinter start.*/
            SetWinter: function (winter) {
if ( TRACE ) { TRACE( "MapTheme#SetWinter", this ); }

                for (var i = 0; i < this.normalObjects.length; i = (i + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.normalObjects[i])) {
                        this.normalObjects[i].SetActive(!winter);
                    }
                }
                for (var i1 = 0; i1 < this.winterObjects.length; i1 = (i1 + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.winterObjects[i1])) {
                        this.winterObjects[i1].SetActive(winter);
                    }
                }
                for (var i2 = 0; i2 < this.normalRenderers.length; i2 = (i2 + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.normalRenderers[i2])) {
                        this.normalRenderers[i2].enabled = !winter;
                    }
                }
                if (UnityEngine.Object.op_Implicit(this.cam)) {
                    this.cam.backgroundColor = winter ? this.winterBackground.$clone() : this.normalBackground.$clone();
                }
            },
            /*MapTheme.SetWinter end.*/


        }
    });
    /*MapTheme end.*/

    /*Potion start.*/
    Bridge.define("Potion", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            game: null
        },
        methods: {
            /*Potion.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (other) {
if ( TRACE ) { TRACE( "Potion#OnTriggerEnter2D", this ); }

                if (UnityEngine.Object.op_Implicit(this.game)) {
                    this.game.OnPotionTouched(other);
                }
            },
            /*Potion.OnTriggerEnter2D end.*/


        }
    });
    /*Potion end.*/

    /*Snowfall start.*/
    Bridge.define("Snowfall", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            flakes: null,
            area: null,
            fallSpeed: null,
            sway: 0,
            speed: null,
            phase: null,
            freq: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Snowfall#init", this ); }

                this.area = new UnityEngine.Rect();
                this.fallSpeed = new UnityEngine.Vector2();
                this.area = new UnityEngine.Rect.$ctor1(-12.0, -0.5, 24.0, 13.0);
                this.fallSpeed = new pc.Vec2( 0.6, 1.6 );
                this.sway = 0.5;
            }
        },
        methods: {
            /*Snowfall.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Snowfall#Start", this ); }

                var n = this.flakes.length;
                this.speed = System.Array.init(n, 0, System.Single);
                this.phase = System.Array.init(n, 0, System.Single);
                this.freq = System.Array.init(n, 0, System.Single);
                for (var i = 0; i < n; i = (i + 1) | 0) {
                    this.speed[i] = UnityEngine.Random.Range$1(this.fallSpeed.x, this.fallSpeed.y);
                    this.phase[i] = UnityEngine.Random.Range$1(0.0, 6.283);
                    this.freq[i] = UnityEngine.Random.Range$1(0.8, 2.0);
                }
            },
            /*Snowfall.Start end.*/

            /*Snowfall.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Snowfall#Update", this ); }

                var dt = UnityEngine.Time.deltaTime, t = UnityEngine.Time.time;
                for (var i = 0; i < this.flakes.length; i = (i + 1) | 0) {
                    var f = this.flakes[i];
                    if (!UnityEngine.Object.op_Implicit(f)) {
                        continue;
                    }
                    var p = f.localPosition.$clone();
                    p.y -= this.speed[i] * dt;
                    p.x += Math.sin(t * this.freq[i] + this.phase[i]) * this.sway * dt;
                    if (p.y < this.area.yMin) {
                        p.y = this.area.yMax;
                        p.x = UnityEngine.Random.Range$1(this.area.xMin, this.area.xMax);
                    }
                    if (p.x < this.area.xMin) {
                        p.x += this.area.width;
                    } else {
                        if (p.x > this.area.xMax) {
                            p.x -= this.area.width;
                        }
                    }
                    f.localPosition = p.$clone();
                }
            },
            /*Snowfall.Update end.*/


        }
    });
    /*Snowfall end.*/

    /*SspMan start.*/
    Bridge.define("SspMan", {
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
if ( TRACE ) { TRACE( "SspMan#init", this ); }

                    this.TORSO = 0;
                    this.HEAD = 1;
                    this.ARM_L = 2;
                    this.ARM_R = 3;
                    this.LEG_L = 4;
                    this.LEG_R = 5;
                }
            },
            methods: {
                /*SspMan.PullFoot:static start.*/
                PullFoot: function (leg, f) {
if ( TRACE ) { TRACE( "SspMan#PullFoot", this ); }

                    if (UnityEngine.Object.op_Implicit(leg.body) && !leg.broken) {
                        leg.body.AddForceAtPosition(new pc.Vec2( 0, -f ), UnityEngine.Vector2.FromVector3(leg.body.transform.TransformPoint$1(UnityEngine.Vector3.FromVector2(leg.forcePoint))));
                    }
                },
                /*SspMan.PullFoot:static end.*/


            }
        },
        fields: {
            parts: null,
            footDepth: 0,
            standForce: 0,
            xDamping: 0,
            breakable: false,
            breakSpeed: 0,
            hitSpeed: 0,
            jointsToDie: 0,
            sortBase: 0,
            game: null,
            dead: false,
            standing: false,
            brokenCount: 0,
            held: false,
            legContacts: 0,
            mass: 0
        },
        props: {
            Dead: {
                get: function () {
if ( TRACE ) { TRACE( "SspMan#Dead#get", this ); }

                    return this.dead;
                }
            },
            HeadBody: {
                get: function () {
if ( TRACE ) { TRACE( "SspMan#HeadBody#get", this ); }

                    return this.parts[SspMan.HEAD].body;
                }
            },
            Center: {
                get: function () {
if ( TRACE ) { TRACE( "SspMan#Center#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.parts[SspMan.TORSO].body) ? this.parts[SspMan.TORSO].body.position.$clone() : UnityEngine.Vector2.FromVector3(this.transform.position);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SspMan#init", this ); }

                this.parts = System.Array.init(6, null, SspMan.Part);
                this.standForce = 1.0;
                this.xDamping = 0.99;
                this.breakable = true;
                this.breakSpeed = 9.0;
                this.hitSpeed = 4.0;
                this.jointsToDie = 2;
                this.sortBase = 100;
                this.standing = true;
            }
        },
        methods: {
            /*SspMan.Init start.*/
            Init: function (owner, sort, canBreak) {
if ( TRACE ) { TRACE( "SspMan#Init", this ); }

                this.game = owner;
                this.sortBase = sort;
                this.breakable = canBreak;
                this.mass = 0;
                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    var p = this.parts[i];
                    if (UnityEngine.Object.op_Implicit(p.body)) {
                        this.mass += p.body.mass;
                    }
                    if (UnityEngine.Object.op_Implicit(p.sr)) {
                        p.sr.sortingOrder = (this.sortBase + p.sortOffset) | 0;
                    }
                }
            },
            /*SspMan.Init end.*/

            /*SspMan.SetLayer start.*/
            SetLayer: function (layer) {
if ( TRACE ) { TRACE( "SspMan#SetLayer", this ); }

                this.gameObject.layer = layer;
                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.parts[i].body)) {
                        this.parts[i].body.gameObject.layer = layer;
                    }
                }
            },
            /*SspMan.SetLayer end.*/

            /*SspMan.Owns start.*/
            Owns: function (c) {
if ( TRACE ) { TRACE( "SspMan#Owns", this ); }

                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    if (UnityEngine.Component.op_Equality(this.parts[i].col, c)) {
                        return true;
                    }
                }
                return false;
            },
            /*SspMan.Owns end.*/

            /*SspMan.Zombify start.*/
            Zombify: function () {
if ( TRACE ) { TRACE( "SspMan#Zombify", this ); }

                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    var p = this.parts[i];
                    if (UnityEngine.Object.op_Implicit(p.sr) && UnityEngine.Object.op_Implicit(p.zombie)) {
                        p.sr.sprite = p.zombie;
                    }
                }
            },
            /*SspMan.Zombify end.*/

            /*SspMan.SetHeld start.*/
            SetHeld: function (on) {
if ( TRACE ) { TRACE( "SspMan#SetHeld", this ); }

                this.held = on;
            },
            /*SspMan.SetHeld end.*/

            /*SspMan.OnPartContact start.*/
            OnPartContact: function (index, delta) {
if ( TRACE ) { TRACE( "SspMan#OnPartContact", this ); }

                if (index !== SspMan.LEG_L && index !== SspMan.LEG_R) {
                    return;
                }
                this.legContacts = UnityEngine.Mathf.Max(0, ((this.legContacts + delta) | 0));
            },
            /*SspMan.OnPartContact end.*/

            /*SspMan.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "SspMan#FixedUpdate", this ); }

                // Head up + feet down add up to zero, so in the air they would make the man hover: only when the feet touch something.
                if (!this.standing || this.dead || this.held || this.legContacts === 0) {
                    return;
                }
                var w = this.mass * Math.abs(UnityEngine.Physics2D.gravity.y) * this.standForce;
                var head = this.parts[SspMan.HEAD];
                if (UnityEngine.Object.op_Implicit(head.body) && !head.broken) {
                    head.body.AddForceAtPosition(new pc.Vec2( 0, w ), UnityEngine.Vector2.FromVector3(head.body.transform.TransformPoint$1(UnityEngine.Vector3.FromVector2(head.forcePoint))));
                }
                SspMan.PullFoot(this.parts[SspMan.LEG_L], w * 0.5);
                SspMan.PullFoot(this.parts[SspMan.LEG_R], w * 0.5);
                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    var rb = this.parts[i].body;
                    if (!UnityEngine.Object.op_Implicit(rb) || this.parts[i].broken) {
                        continue;
                    }
                    var v = rb.linearVelocity.$clone();
                    v.x *= this.xDamping;
                    rb.linearVelocity = v.$clone();
                }
            },
            /*SspMan.FixedUpdate end.*/

            /*SspMan.OnPartHit start.*/
            OnPartHit: function (index, collision) {
if ( TRACE ) { TRACE( "SspMan#OnPartHit", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.game, null)) {
                    return;
                }
                var speed = collision.relativeVelocity.length();
                if (speed < this.hitSpeed) {
                    return;
                }
                var p = this.parts[index];
                var at = UnityEngine.Object.op_Implicit(p.body) ? p.body.position.$clone() : UnityEngine.Vector2.FromVector3(this.transform.position);
                this.game.OnManHit(this, at, speed, collision.relativeVelocity);
                if (!this.breakable || this.dead || speed < this.breakSpeed) {
                    return;
                }
                if (index === SspMan.TORSO) {
                    // The torso has no joint: a hard hit on it tears off a random limb that is still on.
                    var start = UnityEngine.Random.Range(1, this.parts.length);
                    for (var k = 0; k < ((this.parts.length - 1) | 0); k = (k + 1) | 0) {
                        var i = (1 + (((((start - 1) | 0) + k) | 0)) % (((this.parts.length - 1) | 0))) | 0;
                        if (!this.parts[i].broken && UnityEngine.Object.op_Implicit(this.parts[i].joint)) {
                            this.Break(i, collision.relativeVelocity);
                            return;
                        }
                    }
                    return;
                }
                if (!p.broken && UnityEngine.Object.op_Implicit(p.joint)) {
                    this.Break(index, collision.relativeVelocity);
                }
            },
            /*SspMan.OnPartHit end.*/

            /*SspMan.Break start.*/
            Break: function (index, hitVel) {
if ( TRACE ) { TRACE( "SspMan#Break", this ); }

                var p = this.parts[index];
                p.broken = true;
                p.joint.enabled = false;
                this.brokenCount = (this.brokenCount + 1) | 0;
                var at = UnityEngine.Vector2.FromVector3(p.body.transform.TransformPoint$1(UnityEngine.Vector3.FromVector2(p.joint.anchor)));
                this.game.OnJointBroken(this, at, hitVel);
                if (index === SspMan.HEAD || this.brokenCount >= this.jointsToDie) {
                    this.Die();
                }
            },
            /*SspMan.Break end.*/

            /*SspMan.Die start.*/
            Die: function () {
if ( TRACE ) { TRACE( "SspMan#Die", this ); }

                if (this.dead) {
                    return;
                }
                this.dead = true;
                this.standing = false;
                this.game.OnManDied(this);
            },
            /*SspMan.Die end.*/


        }
    });
    /*SspMan end.*/

    /*SspMan+Part start.*/
    Bridge.define("SspMan.Part", {
        $kind: 1002,
        fields: {
            body: null,
            joint: null,
            col: null,
            sr: null,
            normal: null,
            zombie: null,
            forcePoint: null,
            sortOffset: 0,
            broken: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SspMan.Part#init", this ); }

                this.forcePoint = new UnityEngine.Vector2();
            }
        }
    });
    /*SspMan+Part end.*/

    /*SspPartHit start.*/
    Bridge.define("SspPartHit", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            man: null,
            index: 0
        },
        methods: {
            /*SspPartHit.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "SspPartHit#OnCollisionEnter2D", this ); }

                if (!UnityEngine.Object.op_Implicit(this.man)) {
                    return;
                }
                this.man.OnPartContact(this.index, 1);
                this.man.OnPartHit(this.index, collision);
            },
            /*SspPartHit.OnCollisionEnter2D end.*/

            /*SspPartHit.OnCollisionExit2D start.*/
            OnCollisionExit2D: function (collision) {
if ( TRACE ) { TRACE( "SspPartHit#OnCollisionExit2D", this ); }

                if (UnityEngine.Object.op_Implicit(this.man)) {
                    this.man.OnPartContact(this.index, -1);
                }
            },
            /*SspPartHit.OnCollisionExit2D end.*/


        }
    });
    /*SspPartHit end.*/

    /*UiTween start.*/
    Bridge.define("UiTween", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mode: 0,
            duration: 0,
            endScale: 0,
            endPosition: null,
            endColor: null,
            rect: null,
            graphic: null,
            startScale: null,
            startPosition: null,
            startColor: null,
            t: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UiTween#init", this ); }

                this.endPosition = new UnityEngine.Vector2();
                this.endColor = new UnityEngine.Color();
                this.startScale = new UnityEngine.Vector3();
                this.startPosition = new UnityEngine.Vector2();
                this.startColor = new UnityEngine.Color();
                this.mode = UiTween.Mode.Scale;
                this.duration = 0.5;
                this.endScale = 1.05;
                this.endColor = new pc.Color( 1, 1, 1, 1 );
            }
        },
        methods: {
            /*UiTween.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UiTween#Awake", this ); }

                if (UnityEngine.Object.op_Implicit(this.rect)) {
                    this.startScale = this.rect.localScale.$clone();
                    this.startPosition = this.rect.anchoredPosition.$clone();
                }
                if (UnityEngine.Object.op_Implicit(this.graphic)) {
                    this.startColor = this.graphic.color.$clone();
                }
            },
            /*UiTween.Awake end.*/

            /*UiTween.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "UiTween#OnEnable", this ); }

                this.t = 0;
            },
            /*UiTween.OnEnable end.*/

            /*UiTween.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UiTween#Update", this ); }

                var $t;
                this.t += UnityEngine.Time.unscaledDeltaTime;
                var p = this.mode === UiTween.Mode.LocalMove ? ($t = this.t / this.duration, $t - Math.floor($t / 1.0) * 1.0) : UnityEngine.Mathf.PingPong(this.t / this.duration, 1.0);
                var e = 0.5 - 0.5 * Math.cos(UnityEngine.Mathf.PI * p); // InOutSine
                switch (this.mode) {
                    case UiTween.Mode.Scale: 
                        if (UnityEngine.Object.op_Implicit(this.rect)) {
                            this.rect.localScale = new pc.Vec3().lerpUnclamped( this.startScale, new pc.Vec3( 1, 1, 1 ).clone().scale( this.endScale ), e );
                        }
                        break;
                    case UiTween.Mode.LocalMove: 
                        if (UnityEngine.Object.op_Implicit(this.rect)) {
                            this.rect.anchoredPosition = new pc.Vec2().lerpUnclamped( this.startPosition, this.endPosition, e );
                        }
                        break;
                    case UiTween.Mode.Color: 
                        if (UnityEngine.Object.op_Implicit(this.graphic)) {
                            this.graphic.color = pc.Color.lerpUnclamped( this.startColor.$clone(), this.endColor.$clone(), e );
                        }
                        break;
                }
            },
            /*UiTween.Update end.*/


        }
    });
    /*UiTween end.*/

    /*UiTween+Mode start.*/
    Bridge.define("UiTween.Mode", {
        $kind: 1006,
        statics: {
            fields: {
                Scale: 0,
                LocalMove: 1,
                Color: 2
            }
        }
    });
    /*UiTween+Mode end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine.EventSystems","System","UnityEngine","System.Collections.Generic","UnityEngine.UI","System.Collections"];

    /*DragZone start.*/
    $m("DragZone", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"e","pt":$n[0].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[1].Void,"p":[$n[0].PointerEventData]},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"e","pt":$n[0].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[1].Void,"p":[$n[0].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"e","pt":$n[0].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[1].Void,"p":[$n[0].PointerEventData]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"game","t":4,"rt":GameController,"sn":"game"}]}; }, $n);
    /*DragZone end.*/

    /*FollowHint start.*/
    $m("FollowHint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":2,"n":"SetTarget","t":8,"pi":[{"n":"tr","pt":$n[2].Transform,"ps":0}],"sn":"SetTarget","rt":$n[1].Void,"p":[$n[2].Transform]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"amplitude","t":4,"rt":$n[1].Single,"sn":"amplitude","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"offset","t":4,"rt":$n[2].Vector3,"sn":"offset"},{"a":1,"n":"t","t":4,"rt":$n[1].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":$n[2].Transform,"sn":"target"}]}; }, $n);
    /*FollowHint end.*/

    /*Fx start.*/
    $m("Fx", function () { return {"nested":[Fx.P],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Blood","t":8,"pi":[{"n":"at","pt":$n[2].Vector2,"ps":0},{"n":"hitVel","pt":$n[2].Vector2,"ps":1},{"n":"big","pt":$n[1].Boolean,"ps":2}],"sn":"Blood","rt":$n[1].Void,"p":[$n[2].Vector2,$n[2].Vector2,$n[1].Boolean]},{"a":1,"n":"Get","t":8,"pi":[{"n":"kind","pt":$n[1].Int32,"ps":0}],"sn":"Get","rt":FxSprite,"p":[$n[1].Int32]},{"a":1,"n":"Prefab","t":8,"pi":[{"n":"kind","pt":$n[1].Int32,"ps":0}],"sn":"Prefab","rt":FxSprite,"p":[$n[1].Int32]},{"a":1,"n":"Release","t":8,"pi":[{"n":"f","pt":FxSprite,"ps":0},{"n":"kind","pt":$n[1].Int32,"ps":1}],"sn":"Release","rt":$n[1].Void,"p":[FxSprite,$n[1].Int32]},{"a":1,"n":"Spawn","t":8,"pi":[{"n":"kind","pt":$n[1].Int32,"ps":0},{"n":"at","pt":$n[2].Vector2,"ps":1},{"n":"vel","pt":$n[2].Vector2,"ps":2},{"n":"size","pt":$n[1].Single,"ps":3},{"n":"c","pt":$n[2].Color,"ps":4},{"n":"life","pt":$n[1].Single,"ps":5},{"n":"grav","pt":$n[1].Single,"ps":6},{"n":"grow","pt":$n[1].Single,"ps":7},{"n":"fade","pt":$n[1].Boolean,"ps":8}],"sn":"Spawn","rt":$n[1].Void,"p":[$n[1].Int32,$n[2].Vector2,$n[2].Vector2,$n[1].Single,$n[2].Color,$n[1].Single,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"ZombiePuff","t":8,"pi":[{"n":"at","pt":$n[2].Vector2,"ps":0}],"sn":"ZombiePuff","rt":$n[1].Void,"p":[$n[2].Vector2]},{"a":1,"n":"BLOOD","is":true,"t":4,"rt":$n[1].Int32,"sn":"BLOOD","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"SMOKE","is":true,"t":4,"rt":$n[1].Int32,"sn":"SMOKE","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"SPLASH","is":true,"t":4,"rt":$n[1].Int32,"sn":"SPLASH","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Blood"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bloodBreak","t":4,"rt":$n[1].Int32,"sn":"bloodBreak","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bloodDark","t":4,"rt":$n[2].Color,"sn":"bloodDark"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bloodHit","t":4,"rt":$n[1].Int32,"sn":"bloodHit","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bloodInherit","t":4,"rt":$n[1].Single,"sn":"bloodInherit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bloodLife","t":4,"rt":$n[1].Single,"sn":"bloodLife","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bloodLight","t":4,"rt":$n[2].Color,"sn":"bloodLight"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bloodPrefab","t":4,"rt":FxSprite,"sn":"bloodPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bloodSize","t":4,"rt":$n[2].Vector2,"sn":"bloodSize"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bloodSpeed","t":4,"rt":$n[2].Vector2,"sn":"bloodSpeed"},{"a":1,"n":"free","t":4,"rt":System.Array.type(System.Collections.Generic.List$1(FxSprite)),"sn":"free","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gravity","t":4,"rt":$n[1].Single,"sn":"gravity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"live","t":4,"rt":$n[3].List$1(Fx.P),"sn":"live","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pool","t":4,"rt":$n[2].Transform,"sn":"pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smokeCount","t":4,"rt":$n[1].Int32,"sn":"smokeCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smokePrefab","t":4,"rt":FxSprite,"sn":"smokePrefab"},{"at":[new UnityEngine.HeaderAttribute("Zombie puff"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"splashCount","t":4,"rt":$n[1].Int32,"sn":"splashCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"splashPrefab","t":4,"rt":FxSprite,"sn":"splashPrefab"}]}; }, $n);
    /*Fx end.*/

    /*Fx+P start.*/
    $m("Fx.P", function () { return {"td":Fx,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","t":4,"rt":$n[2].Color,"sn":"color"},{"a":2,"n":"fade","t":4,"rt":$n[1].Boolean,"sn":"fade","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"fx","t":4,"rt":FxSprite,"sn":"fx"},{"a":2,"n":"grav","t":4,"rt":$n[1].Single,"sn":"grav","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"grow","t":4,"rt":$n[1].Single,"sn":"grow","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"kind","t":4,"rt":$n[1].Int32,"sn":"kind","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"life","t":4,"rt":$n[1].Single,"sn":"life","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"max","t":4,"rt":$n[1].Single,"sn":"max","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"size","t":4,"rt":$n[1].Single,"sn":"size","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spin","t":4,"rt":$n[1].Single,"sn":"spin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"vel","t":4,"rt":$n[2].Vector2,"sn":"vel"}]}; }, $n);
    /*Fx+P end.*/

    /*FxSprite start.*/
    $m("FxSprite", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Sr","t":16,"rt":$n[2].SpriteRenderer,"g":{"a":2,"n":"get_Sr","t":8,"rt":$n[2].SpriteRenderer,"fg":"Sr"},"fn":"Sr"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sr","t":4,"rt":$n[2].SpriteRenderer,"sn":"sr"}]}; }, $n);
    /*FxSprite end.*/

    /*GameAudio start.*/
    $m("GameAudio", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Play","t":8,"pi":[{"n":"clip","pt":$n[2].AudioClip,"ps":0}],"sn":"Play","rt":$n[1].Void,"p":[$n[2].AudioClip]},{"a":2,"n":"PlayBreak","t":8,"sn":"PlayBreak","rt":$n[1].Void},{"a":2,"n":"PlayClick","t":8,"sn":"PlayClick","rt":$n[1].Void},{"a":2,"n":"PlayDeath","t":8,"sn":"PlayDeath","rt":$n[1].Void},{"a":2,"n":"PlayHit","t":8,"sn":"PlayHit","rt":$n[1].Void},{"a":2,"n":"PlayPotion","t":8,"sn":"PlayPotion","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"breakBone","t":4,"rt":$n[2].AudioClip,"sn":"breakBone"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"click","t":4,"rt":$n[2].AudioClip,"sn":"click"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"death","t":4,"rt":$n[2].AudioClip,"sn":"death"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hit","t":4,"rt":$n[2].AudioClip,"sn":"hit"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitCooldown","t":4,"rt":$n[1].Single,"sn":"hitCooldown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lastHit","t":4,"rt":$n[1].Single,"sn":"lastHit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextVoice","t":4,"rt":$n[1].Int32,"sn":"nextVoice","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"potion","t":4,"rt":$n[2].AudioClip,"sn":"potion"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ui","t":4,"rt":$n[2].AudioSource,"sn":"ui"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"voices","t":4,"rt":System.Array.type(UnityEngine.AudioSource),"sn":"voices"}]}; }, $n);
    /*GameAudio end.*/

    /*GameController start.*/
    $m("GameController", function () { return {"nested":[GameController.Phase],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"End","t":8,"sn":"End","rt":$n[1].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[1].Void},{"a":2,"n":"OnJointBroken","t":8,"pi":[{"n":"man","pt":SspMan,"ps":0},{"n":"at","pt":$n[2].Vector2,"ps":1},{"n":"vel","pt":$n[2].Vector2,"ps":2}],"sn":"OnJointBroken","rt":$n[1].Void,"p":[SspMan,$n[2].Vector2,$n[2].Vector2]},{"a":2,"n":"OnManDied","t":8,"pi":[{"n":"man","pt":SspMan,"ps":0}],"sn":"OnManDied","rt":$n[1].Void,"p":[SspMan]},{"a":2,"n":"OnManHit","t":8,"pi":[{"n":"man","pt":SspMan,"ps":0},{"n":"at","pt":$n[2].Vector2,"ps":1},{"n":"speed","pt":$n[1].Single,"ps":2},{"n":"vel","pt":$n[2].Vector2,"ps":3}],"sn":"OnManHit","rt":$n[1].Void,"p":[SspMan,$n[2].Vector2,$n[1].Single,$n[2].Vector2]},{"a":2,"n":"OnPotionTouched","t":8,"pi":[{"n":"other","pt":$n[2].Collider2D,"ps":0}],"sn":"OnPotionTouched","rt":$n[1].Void,"p":[$n[2].Collider2D]},{"a":2,"n":"PointerDown","t":8,"pi":[{"n":"screen","pt":$n[2].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[1].Void,"p":[$n[2].Vector2]},{"a":2,"n":"PointerMove","t":8,"pi":[{"n":"screen","pt":$n[2].Vector2,"ps":0}],"sn":"PointerMove","rt":$n[1].Void,"p":[$n[2].Vector2]},{"a":2,"n":"PointerUp","t":8,"sn":"PointerUp","rt":$n[1].Void},{"a":2,"n":"SetMonsterSkins","t":8,"pi":[{"n":"skins","pt":$n[1].Array.type(System.Int32),"ps":0}],"sn":"SetMonsterSkins","rt":$n[1].Void,"p":[$n[1].Array.type(System.Int32)]},{"a":2,"n":"SetPlayerSkin","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"SetPlayerSkin","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"Spawn","t":8,"pi":[{"n":"skinIndex","pt":$n[1].Int32,"ps":0},{"n":"at","pt":$n[2].Transform,"ps":1}],"sn":"Spawn","rt":SspMan,"p":[$n[1].Int32,$n[2].Transform]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"CameraTarget","t":16,"rt":$n[2].Transform,"g":{"a":2,"n":"get_CameraTarget","t":8,"rt":$n[2].Transform,"fg":"CameraTarget"},"fn":"CameraTarget"},{"a":2,"n":"CurrentPhase","t":16,"rt":GameController.Phase,"g":{"a":2,"n":"get_CurrentPhase","t":8,"rt":GameController.Phase,"fg":"CurrentPhase","box":function ($v) { return Bridge.box($v, GameController.Phase, System.Enum.toStringFn(GameController.Phase));}},"fn":"CurrentPhase"},{"a":2,"n":"OnTap","t":4,"rt":Function,"sn":"OnTap"},{"at":[new UnityEngine.HeaderAttribute("Scene"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cam","t":4,"rt":$n[2].Camera,"sn":"cam"},{"at":[new UnityEngine.TooltipAttribute("The dragged point stays inside this world rect (the room)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragBounds","t":4,"rt":$n[2].Rect,"sn":"dragBounds"},{"a":1,"n":"dragging","t":4,"rt":$n[1].Boolean,"sn":"dragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endDelay","t":4,"rt":$n[1].Single,"sn":"endDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endUI","t":4,"rt":$n[2].GameObject,"sn":"endUI"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"followMaxSpeed","t":4,"rt":$n[1].Single,"sn":"followMaxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fx","t":4,"rt":Fx,"sn":"fx"},{"at":[new UnityEngine.TooltipAttribute("Static bodies that come loose when the player turns zombie (SRP table)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"looseOnZombie","t":4,"rt":System.Array.type(UnityEngine.Rigidbody2D),"sn":"looseOnZombie"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsterHints","t":4,"rt":System.Array.type(FollowHint),"sn":"monsterHints"},{"at":[new UnityEngine.TooltipAttribute("Default monster skins (CharacterSkin index) when LunaController does not set them."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsterSkins","t":4,"rt":$n[1].Array.type(System.Int32),"sn":"monsterSkins"},{"at":[new UnityEngine.TooltipAttribute("Where the monsters stand (y = the surface under the feet), one per LunaController Monster 1/2/3."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsterSpawns","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"monsterSpawns"},{"a":1,"n":"monsters","t":4,"rt":System.Array.type(SspMan),"sn":"monsters"},{"a":1,"n":"monstersLeft","t":4,"rt":$n[1].Int32,"sn":"monstersLeft","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"phase","t":4,"rt":GameController.Phase,"sn":"phase","box":function ($v) { return Bridge.box($v, GameController.Phase, System.Enum.toStringFn(GameController.Phase));}},{"a":1,"n":"player","t":4,"rt":SspMan,"sn":"player"},{"at":[new UnityEngine.HeaderAttribute("Tuning"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerLayer","t":4,"rt":$n[1].Int32,"sn":"playerLayer","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Player stands here (spawn y = the surface under the feet)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerSpawn","t":4,"rt":$n[2].Transform,"sn":"playerSpawn"},{"a":1,"n":"pointer","t":4,"rt":$n[2].Vector2,"sn":"pointer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"potionBody","t":4,"rt":$n[2].Rigidbody2D,"sn":"potionBody"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"potionHint","t":4,"rt":FollowHint,"sn":"potionHint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sfx","t":4,"rt":GameAudio,"sn":"sfx"},{"a":1,"n":"skin","t":4,"rt":$n[1].Int32,"sn":"skin","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("One prefab per CharacterSkin (LunaController enum order)."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"skinPrefabs","t":4,"rt":System.Array.type(SspMan),"sn":"skinPrefabs"},{"at":[new UnityEngine.HeaderAttribute("Hints / UI"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tut","t":4,"rt":$n[2].GameObject,"sn":"tut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tut2","t":4,"rt":$n[2].GameObject,"sn":"tut2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"world","t":4,"rt":$n[2].Transform,"sn":"world"}]}; }, $n);
    /*GameController end.*/

    /*GameController+Phase start.*/
    $m("GameController.Phase", function () { return {"td":GameController,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"End","is":true,"t":4,"rt":GameController.Phase,"sn":"End","box":function ($v) { return Bridge.box($v, GameController.Phase, System.Enum.toStringFn(GameController.Phase));}},{"a":2,"n":"Potion","is":true,"t":4,"rt":GameController.Phase,"sn":"Potion","box":function ($v) { return Bridge.box($v, GameController.Phase, System.Enum.toStringFn(GameController.Phase));}},{"a":2,"n":"Zombie","is":true,"t":4,"rt":GameController.Phase,"sn":"Zombie","box":function ($v) { return Bridge.box($v, GameController.Phase, System.Enum.toStringFn(GameController.Phase));}}]}; }, $n);
    /*GameController+Phase end.*/

    /*MapTheme start.*/
    $m("MapTheme", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetWinter","t":8,"pi":[{"n":"winter","pt":$n[1].Boolean,"ps":0}],"sn":"SetWinter","rt":$n[1].Void,"p":[$n[1].Boolean]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cam","t":4,"rt":$n[2].Camera,"sn":"cam"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"normalBackground","t":4,"rt":$n[2].Color,"sn":"normalBackground"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"normalObjects","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"normalObjects"},{"at":[new UnityEngine.TooltipAttribute("Renderers on physics props (pumpkins) that are hidden in winter; their winter look is a child in winterObjects."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"normalRenderers","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"normalRenderers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winterBackground","t":4,"rt":$n[2].Color,"sn":"winterBackground"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winterObjects","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"winterObjects"}]}; }, $n);
    /*MapTheme end.*/

    /*Potion start.*/
    $m("Potion", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"other","pt":$n[2].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[1].Void,"p":[$n[2].Collider2D]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"game","t":4,"rt":GameController,"sn":"game"}]}; }, $n);
    /*Potion end.*/

    /*Snowfall start.*/
    $m("Snowfall", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"area","t":4,"rt":$n[2].Rect,"sn":"area"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fallSpeed","t":4,"rt":$n[2].Vector2,"sn":"fallSpeed"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flakes","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"flakes"},{"a":1,"n":"freq","t":4,"rt":$n[1].Array.type(System.Single),"sn":"freq"},{"a":1,"n":"phase","t":4,"rt":$n[1].Array.type(System.Single),"sn":"phase"},{"a":1,"n":"speed","t":4,"rt":$n[1].Array.type(System.Single),"sn":"speed"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sway","t":4,"rt":$n[1].Single,"sn":"sway","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Snowfall end.*/

    /*SspMan start.*/
    $m("SspMan", function () { return {"nested":[SspMan.Part],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Break","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0},{"n":"hitVel","pt":$n[2].Vector2,"ps":1}],"sn":"Break","rt":$n[1].Void,"p":[$n[1].Int32,$n[2].Vector2]},{"a":1,"n":"Die","t":8,"sn":"Die","rt":$n[1].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[1].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"owner","pt":GameController,"ps":0},{"n":"sort","pt":$n[1].Int32,"ps":1},{"n":"canBreak","pt":$n[1].Boolean,"ps":2}],"sn":"Init","rt":$n[1].Void,"p":[GameController,$n[1].Int32,$n[1].Boolean]},{"a":2,"n":"OnPartContact","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0},{"n":"delta","pt":$n[1].Int32,"ps":1}],"sn":"OnPartContact","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Int32]},{"a":2,"n":"OnPartHit","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0},{"n":"collision","pt":$n[2].Collision2D,"ps":1}],"sn":"OnPartHit","rt":$n[1].Void,"p":[$n[1].Int32,$n[2].Collision2D]},{"a":2,"n":"Owns","t":8,"pi":[{"n":"c","pt":$n[2].Collider2D,"ps":0}],"sn":"Owns","rt":$n[1].Boolean,"p":[$n[2].Collider2D],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"PullFoot","is":true,"t":8,"pi":[{"n":"leg","pt":SspMan.Part,"ps":0},{"n":"f","pt":$n[1].Single,"ps":1}],"sn":"PullFoot","rt":$n[1].Void,"p":[SspMan.Part,$n[1].Single]},{"a":2,"n":"SetHeld","t":8,"pi":[{"n":"on","pt":$n[1].Boolean,"ps":0}],"sn":"SetHeld","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"SetLayer","t":8,"pi":[{"n":"layer","pt":$n[1].Int32,"ps":0}],"sn":"SetLayer","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"Zombify","t":8,"sn":"Zombify","rt":$n[1].Void},{"a":2,"n":"Center","t":16,"rt":$n[2].Vector2,"g":{"a":2,"n":"get_Center","t":8,"rt":$n[2].Vector2,"fg":"Center"},"fn":"Center"},{"a":2,"n":"Dead","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_Dead","t":8,"rt":$n[1].Boolean,"fg":"Dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Dead"},{"a":2,"n":"HeadBody","t":16,"rt":$n[2].Rigidbody2D,"g":{"a":2,"n":"get_HeadBody","t":8,"rt":$n[2].Rigidbody2D,"fg":"HeadBody"},"fn":"HeadBody"},{"a":2,"n":"ARM_L","is":true,"t":4,"rt":$n[1].Int32,"sn":"ARM_L","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ARM_R","is":true,"t":4,"rt":$n[1].Int32,"sn":"ARM_R","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"HEAD","is":true,"t":4,"rt":$n[1].Int32,"sn":"HEAD","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"LEG_L","is":true,"t":4,"rt":$n[1].Int32,"sn":"LEG_L","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"LEG_R","is":true,"t":4,"rt":$n[1].Int32,"sn":"LEG_R","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"TORSO","is":true,"t":4,"rt":$n[1].Int32,"sn":"TORSO","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Impact speed (relative) that breaks the joint of the part that was hit."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"breakSpeed","t":4,"rt":$n[1].Single,"sn":"breakSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Breaking (monsters)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"breakable","t":4,"rt":$n[1].Boolean,"sn":"breakable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"brokenCount","t":4,"rt":$n[1].Int32,"sn":"brokenCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"dead","t":4,"rt":$n[1].Boolean,"sn":"dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Distance from the root down to the soles (set by SSPRoomBuilder): root y = surface y + footDepth.")],"a":2,"n":"footDepth","t":4,"rt":$n[1].Single,"sn":"footDepth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"game","t":4,"rt":GameController,"sn":"game"},{"a":1,"n":"held","t":4,"rt":$n[1].Boolean,"sn":"held","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Impact speed that splashes a little blood and plays the hit sound."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitSpeed","t":4,"rt":$n[1].Single,"sn":"hitSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jointsToDie","t":4,"rt":$n[1].Int32,"sn":"jointsToDie","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"legContacts","t":4,"rt":$n[1].Int32,"sn":"legContacts","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"mass","t":4,"rt":$n[1].Single,"sn":"mass","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"parts","t":4,"rt":System.Array.type(SspMan.Part),"sn":"parts"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortBase","t":4,"rt":$n[1].Int32,"sn":"sortBase","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Standing"),new UnityEngine.TooltipAttribute("Head pull = weight * this; each foot = weight * this / 2."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"standForce","t":4,"rt":$n[1].Single,"sn":"standForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"standing","t":4,"rt":$n[1].Boolean,"sn":"standing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"xDamping","t":4,"rt":$n[1].Single,"sn":"xDamping","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SspMan end.*/

    /*SspMan+Part start.*/
    $m("SspMan.Part", function () { return {"td":SspMan,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"body","t":4,"rt":$n[2].Rigidbody2D,"sn":"body"},{"a":2,"n":"broken","t":4,"rt":$n[1].Boolean,"sn":"broken","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"col","t":4,"rt":$n[2].Collider2D,"sn":"col"},{"at":[new UnityEngine.TooltipAttribute("Local point (part space) where the standing force is applied (feet / top of the head).")],"a":2,"n":"forcePoint","t":4,"rt":$n[2].Vector2,"sn":"forcePoint"},{"a":2,"n":"joint","t":4,"rt":$n[2].HingeJoint2D,"sn":"joint"},{"a":2,"n":"normal","t":4,"rt":$n[2].Sprite,"sn":"normal"},{"a":2,"n":"sortOffset","t":4,"rt":$n[1].Int32,"sn":"sortOffset","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"sr","t":4,"rt":$n[2].SpriteRenderer,"sn":"sr"},{"a":2,"n":"zombie","t":4,"rt":$n[2].Sprite,"sn":"zombie"}]}; }, $n);
    /*SspMan+Part end.*/

    /*SspPartHit start.*/
    $m("SspPartHit", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[2].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[1].Void,"p":[$n[2].Collision2D]},{"a":1,"n":"OnCollisionExit2D","t":8,"pi":[{"n":"collision","pt":$n[2].Collision2D,"ps":0}],"sn":"OnCollisionExit2D","rt":$n[1].Void,"p":[$n[2].Collision2D]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"index","t":4,"rt":$n[1].Int32,"sn":"index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"man","t":4,"rt":SspMan,"sn":"man"}]}; }, $n);
    /*SspPartHit end.*/

    /*UiTween start.*/
    $m("UiTween", function () { return {"nested":[UiTween.Mode],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endColor","t":4,"rt":$n[2].Color,"sn":"endColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endPosition","t":4,"rt":$n[2].Vector2,"sn":"endPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endScale","t":4,"rt":$n[1].Single,"sn":"endScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"graphic","t":4,"rt":$n[4].Graphic,"sn":"graphic"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mode","t":4,"rt":UiTween.Mode,"sn":"mode","box":function ($v) { return Bridge.box($v, UiTween.Mode, System.Enum.toStringFn(UiTween.Mode));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rect","t":4,"rt":$n[2].RectTransform,"sn":"rect"},{"a":1,"n":"startColor","t":4,"rt":$n[2].Color,"sn":"startColor"},{"a":1,"n":"startPosition","t":4,"rt":$n[2].Vector2,"sn":"startPosition"},{"a":1,"n":"startScale","t":4,"rt":$n[2].Vector3,"sn":"startScale"},{"a":1,"n":"t","t":4,"rt":$n[1].Single,"sn":"t","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UiTween end.*/

    /*UiTween+Mode start.*/
    $m("UiTween.Mode", function () { return {"td":UiTween,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Color","is":true,"t":4,"rt":UiTween.Mode,"sn":"Color","box":function ($v) { return Bridge.box($v, UiTween.Mode, System.Enum.toStringFn(UiTween.Mode));}},{"a":2,"n":"LocalMove","is":true,"t":4,"rt":UiTween.Mode,"sn":"LocalMove","box":function ($v) { return Bridge.box($v, UiTween.Mode, System.Enum.toStringFn(UiTween.Mode));}},{"a":2,"n":"Scale","is":true,"t":4,"rt":UiTween.Mode,"sn":"Scale","box":function ($v) { return Bridge.box($v, UiTween.Mode, System.Enum.toStringFn(UiTween.Mode));}}]}; }, $n);
    /*UiTween+Mode end.*/

    /*LayoutController start.*/
    $m("LayoutController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cam","t":4,"rt":$n[2].Camera,"sn":"cam"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"followOffset","t":4,"rt":$n[2].Vector2,"sn":"followOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"followSpeed","t":4,"rt":$n[1].Single,"sn":"followSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"game","t":4,"rt":GameController,"sn":"game"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"size","t":4,"rt":$n[1].Single,"sn":"size","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startPosition","t":4,"rt":$n[2].Vector2,"sn":"startPosition"}]}; }, $n);
    /*LayoutController end.*/

    /*CharacterSkin start.*/
    $m("CharacterSkin", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Alien","is":true,"t":4,"rt":CharacterSkin,"sn":"Alien","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"a":2,"n":"Beanie","is":true,"t":4,"rt":CharacterSkin,"sn":"Beanie","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"a":2,"n":"Bush","is":true,"t":4,"rt":CharacterSkin,"sn":"Bush","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"a":2,"n":"Deer","is":true,"t":4,"rt":CharacterSkin,"sn":"Deer","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"a":2,"n":"Goat","is":true,"t":4,"rt":CharacterSkin,"sn":"Goat","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"a":2,"n":"Hat","is":true,"t":4,"rt":CharacterSkin,"sn":"Hat","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"a":2,"n":"Helmet","is":true,"t":4,"rt":CharacterSkin,"sn":"Helmet","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"a":2,"n":"Pink","is":true,"t":4,"rt":CharacterSkin,"sn":"Pink","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"a":2,"n":"SkullBlack","is":true,"t":4,"rt":CharacterSkin,"sn":"SkullBlack","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"a":2,"n":"SkullRed","is":true,"t":4,"rt":CharacterSkin,"sn":"SkullRed","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"a":2,"n":"Snow","is":true,"t":4,"rt":CharacterSkin,"sn":"Snow","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}}]}; }, $n);
    /*CharacterSkin end.*/

    /*LunaController start.*/
    $m("LunaController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"ClickCTA","t":8,"sn":"ClickCTA","rt":$n[1].Void},{"a":1,"n":"CountClick","t":8,"sn":"CountClick","rt":$n[1].Void},{"a":1,"n":"EndAfterTime","t":8,"sn":"EndAfterTime","rt":$n[5].IEnumerator},{"a":2,"n":"ShowEndCard","t":8,"sn":"ShowEndCard","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("App Name", -1, null, false, null)],"a":2,"n":"AppName","t":4,"rt":$n[1].String,"sn":"AppName"},{"at":[new UnityEngine.TooltipAttribute("Screen background (SRP_V07 BG: RawImage on a camera canvas behind the world); always shows BG Image."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"BGImage","t":4,"rt":$n[4].RawImage,"sn":"BGImage"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("BGM", 0, null)],"a":2,"n":"BGM","t":4,"rt":$n[2].AudioClip,"sn":"BGM"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("BG Image", 0, null)],"a":2,"n":"BGTexture","t":4,"rt":$n[2].Texture2D,"sn":"BGTexture"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"CTA","t":4,"rt":$n[3].List$1(UnityEngine.UI.Button),"sn":"CTA"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Winter Map", -1, null, false, null)],"a":2,"n":"CustomWinter","t":4,"rt":$n[1].Boolean,"sn":"CustomWinter","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Limit Click", -1, null, false, null)],"a":2,"n":"LimitClick","t":4,"rt":$n[1].Boolean,"sn":"LimitClick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Limit Time Play?", -1, null, false, null)],"a":2,"n":"LimitTimePlay","t":4,"rt":$n[1].Boolean,"sn":"LimitTimePlay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("App Logo", 0, null)],"a":2,"n":"LogoTexture","t":4,"rt":$n[2].Texture2D,"sn":"LogoTexture"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Max Click", -1, null, false, null)],"a":2,"n":"MaxClick","t":4,"rt":$n[1].Int32,"sn":"MaxClick","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Monster 1", -1, null, false, null)],"a":2,"n":"Monster1","t":4,"rt":CharacterSkin,"sn":"Monster1","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Monster 2", -1, null, false, null)],"a":2,"n":"Monster2","t":4,"rt":CharacterSkin,"sn":"Monster2","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Monster 3", -1, null, false, null)],"a":2,"n":"Monster3","t":4,"rt":CharacterSkin,"sn":"Monster3","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Player", -1, null, false, null)],"a":2,"n":"Player","t":4,"rt":CharacterSkin,"sn":"Player","box":function ($v) { return Bridge.box($v, CharacterSkin, System.Enum.toStringFn(CharacterSkin));}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Time Play", -1, null, false, null)],"a":2,"n":"TimePlay","t":4,"rt":$n[1].Single,"sn":"TimePlay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"clicks","t":4,"rt":$n[1].Int32,"sn":"clicks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Full-screen end card (CTA), shown by Limit Time Play / Limit Click."),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endCard","t":4,"rt":$n[2].GameObject,"sn":"endCard"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"game","t":4,"rt":GameController,"sn":"game"},{"a":1,"n":"gameEndedSent","t":4,"rt":$n[1].Boolean,"sn":"gameEndedSent","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"logo","t":4,"rt":$n[4].RawImage,"sn":"logo"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mapTheme","t":4,"rt":MapTheme,"sn":"mapTheme"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicSource","t":4,"rt":$n[2].AudioSource,"sn":"musicSource"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"musicVolume","t":4,"rt":$n[1].Single,"sn":"musicVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"nameText","t":4,"rt":$n[4].Text,"sn":"nameText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sfx","t":4,"rt":GameAudio,"sn":"sfx"}]}; }, $n);
    /*LunaController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});

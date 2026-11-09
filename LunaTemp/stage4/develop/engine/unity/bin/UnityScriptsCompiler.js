if ( TRACE ) { TRACE( JSON.parse( '["AudioController#CreateIns","AudioController#Awake","AudioController#BootstrapPool","AudioController#Start","AudioController#PlaySFX","AudioController#GetFreeSource","AudioController#CreateNewSource","BonkController#init","BonkController#OnCollisionEnter2D","Burning#init","Burning#Ignite","Burning#ClampToBounds","Burning#Stop","Burning#init","Burning#OnEnable","Burning#OnDisable","Burning#Setup","Burning#IgnitePart","Burning#AddFlame","Burning#SetFlameScale","Burning#Update","Burning#EmitFx","Burning#Spread","Burning#Extinguish","CameraShake#init","CameraShake#Awake","CameraShake#Shake","CameraShake#LateUpdate","CycleHand#init","CycleHand#Awake","CycleHand#OnEnable","CycleHand#Update","CycleHand#SetTargets","CycleHand#Pos","DG.Tweening.DOTweenAnimation#Dispatch_OnReset","DG.Tweening.DOTweenAnimation#TypeToDOTargetType","DG.Tweening.DOTweenAnimation#init","DG.Tweening.DOTweenAnimation#Awake","DG.Tweening.DOTweenAnimation#Start","DG.Tweening.DOTweenAnimation#Reset","DG.Tweening.DOTweenAnimation#OnDestroy","DG.Tweening.DOTweenAnimation#RewindThenRecreateTween","DG.Tweening.DOTweenAnimation#RewindThenRecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#RecreateTween","DG.Tweening.DOTweenAnimation#RecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#CreateTween","DG.Tweening.DOTweenAnimation#GetTweens","DG.Tweening.DOTweenAnimation#SetAnimationTarget","DG.Tweening.DOTweenAnimation#DOPlay","DG.Tweening.DOTweenAnimation#DOPlayBackwards","DG.Tweening.DOTweenAnimation#DOPlayForward","DG.Tweening.DOTweenAnimation#DOPause","DG.Tweening.DOTweenAnimation#DOTogglePause","DG.Tweening.DOTweenAnimation#DORewind","DG.Tweening.DOTweenAnimation#DORestart","DG.Tweening.DOTweenAnimation#DORestart$1","DG.Tweening.DOTweenAnimation#DOComplete","DG.Tweening.DOTweenAnimation#DOKill","DG.Tweening.DOTweenAnimation#DOPlayById","DG.Tweening.DOTweenAnimation#DOPlayAllById","DG.Tweening.DOTweenAnimation#DOPauseAllById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsAllById","DG.Tweening.DOTweenAnimation#DOPlayForwardById","DG.Tweening.DOTweenAnimation#DOPlayForwardAllById","DG.Tweening.DOTweenAnimation#DOPlayNext","DG.Tweening.DOTweenAnimation#DORewindAndPlayNext","DG.Tweening.DOTweenAnimation#DORewindAllById","DG.Tweening.DOTweenAnimation#DORestartById","DG.Tweening.DOTweenAnimation#DORestartAllById","DG.Tweening.DOTweenAnimation#DOKillById","DG.Tweening.DOTweenAnimation#DOKillAllById","DG.Tweening.DOTweenAnimation#CreateEditorPreview","DG.Tweening.DOTweenAnimation#GetTweenGO","DG.Tweening.DOTweenAnimation#GetTweenTarget","DG.Tweening.DOTweenAnimation#ReEvaluateRelativeTween","DG.Tweening.DOTweenAnimationExtensions#IsSameOrSubclassOf","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","DG.Tweening.DOTweenProShortcuts#ctor","DG.Tweening.DOTweenProShortcuts#DOSpiral","ElectricFx#init","ElectricFx#Attach","ElectricFx#init","ElectricFx#Start","ElectricFx#Update","ElectricFx#Place","ElectricFx#Hide","ElectricFx#OnDestroy","FireFx#Ins#get","FireFx#Apply","FireFx#init","FireFx#Spawn","FireFx#Update","FireFx.Particle#init","PowerBase#UseId#get","PowerBase#init","PowerBase#MonsterAt","PowerBase#GetTarget","PowerBase#DamageCircle","PowerBase#CameraRect","PowerBase#CreateSprite","PowerBase#Scale#get","PowerBase#Busy#get","PowerBase#init","PowerBase#PointerDown","PowerBase#PointerHold","PowerBase#PointerUp","PowerBase#Cancel","PowerBase#SetDamage","PowerBase#TryUse","PowerBase#ConsumeUsed","GameController#init","GameController#CreateIns","GameController#Awake","GameController#Start","GameController#StartStageTut","GameController#Update","GameController#ApplyArmor","GameController#ApplyStagePowers","GameController#SetMonsterHP","GameController#SetPowerUses","GameController#SetPowerCount","GameController#CurrentMonster","GameController#StageMonsters","GameController#ArmorBroken","GameController#ShowPunchTut","GameController#MonsterDied","GameController#DelayChangeLevel","GameController#ChangeLevel","GameController.Stage#init","LightningStrike#init","LightningStrike#Playing#get","LightningStrike#init","LightningStrike#Strike","LightningStrike#DamageColumn","LightningStrike#CreateBolt","LightningStrike#Build","LightningStrike#SetSegment","LightningStrike#Place","LightningStrike#Play","LightningStrike.Bolt#init","LunaController#init","LunaController#Start","LunaController#ShowEndCard","LunaController#ClickCTA","LunaController#EndGame","PowerController#ShowUseTut","PowerController#OnPlayerHand","PowerController#ToWorld","PowerController#Exhausted#get","PowerController#TypesLeft#get","PowerController#HasPower#get","PowerController#init","PowerController#IsUsed","PowerController#CanPick","PowerController#IndexOf","PowerController#AnyBusy","PowerController#Awake","PowerController#SetVisible","PowerController#SetLimit","PowerController#SetDamage","PowerController#SetActivePowers","PowerController#StartTutorial","PowerController#ShowOffTut","PowerController#ShowChoiceTut","PowerController#RefreshTut","PowerController#RefreshLimit","PowerController#CountUse","PowerController#CheckExhausted","PowerController#OnDisable","PowerController#Select","PowerController#IsOverButton","PowerController#Deselect","PowerController#Update","PowerOption#getDefaultValue","PowerOption#ctor","PowerOption#getHashCode","PowerOption#equals","PowerOption#$clone","PowerTutorial#init","PowerTutorial#Awake","PowerTutorial#Update","RainEffect#init","RainEffect#Begin","RainEffect#Stop","RainEffect#Init","RainEffect#Update","RainEffect#Respawn","ScreenFx#SetAlpha","ScreenFx#Awake","ScreenFx#SetDark","ScreenFx#Flash","ScreenFx#FlashRoutine","ScreenFx#Fade","SwipeHandTut#init","SwipeHandTut#Awake","SwipeHandTut#OnEnable","SwipeHandTut#Update","TargetController#PointerOverUI","TargetController#CurrentHand#get","TargetController#init","TargetController#Awake","TargetController#Start","TargetController#Update","TargetController#CheckInput","TargetController#IsGrabPoint","TargetController#TouchingHand","TargetController#SetTargetPoint","TargetController#RemoveTargetPoint","TargetController#RemoveTarget","TargetController#NextTarget","TargetController#IsEmpty","VFXController#CreateIns","VFXController#Awake","VFXController#BootstrapPool","VFXController#CreateNewVFX","VFXController#GetFreeVFX","VFXController#SpawnVFX","VFXController#ReturnToPool","FirePower#Frames#get","FirePower#FrameRate#get","FirePower#WorldScale#get","FirePower#EmberSprite#get","FirePower#SmokeSprite#get","FirePower#Busy#get","FirePower#init","FirePower#SetDamage","FirePower#PointerDown","FirePower#Ignite","LightningPower#Busy#get","LightningPower#init","LightningPower#SetDamage","LightningPower#PointerDown","MonsterController#init","MonsterController#IsDead#get","MonsterController#HP#get","MonsterController#Armor#get","MonsterController#MaxArmor#get","MonsterController#ArmorBroken#get","MonsterController#ArmorDamaged#get","MonsterController#init","MonsterController#Start","MonsterController#SetMaxHP","MonsterController#SetArmorUses","MonsterController#DrainArmor","MonsterController#TakeLightning","MonsterController#TakeDamage","MonsterController#SubArmor","MonsterController#Punch","MonsterController#Hurt","MonsterController#BodyPosition","MonsterController#Dismember","MonsterController#BreakArmor","MonsterController#Dead","MonsterController#Update","MonsterController#LateUpdate","MonsterController#UpdateBars","StormPower#Busy#get","StormPower#init","StormPower#SetDamage","StormPower#PointerDown","StormPower#Run","StormPower#MissPoint","StormPower#ColumnClear","StormPower#PickTarget","TornadoPower#init","TornadoPower#SetAlpha","TornadoPower#Busy#get","TornadoPower#init","TornadoPower#SetDamage","TornadoPower#PointerDown","TornadoPower#Create","TornadoPower#Update","TornadoPower#Next","TornadoPower#Landed","TornadoPower#Restore","TornadoPower#Animate","TornadoPower#FixedUpdate","TornadoPower#OnDisable"]' ) ); }
/**
 * @version 1.0.9806.21178
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AudioController start.*/
    Bridge.define("AudioController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null
            }
        },
        fields: {
            BGM: null,
            musicSource: null,
            pool: null,
            SFXPool: null
        },
        methods: {
            /*AudioController.CreateIns start.*/
            CreateIns: function () {
if ( TRACE ) { TRACE( "AudioController#CreateIns", this ); }

                if (UnityEngine.Object.op_Implicit(AudioController.Ins) && UnityEngine.MonoBehaviour.op_Inequality(AudioController.Ins, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                AudioController.Ins = this;
                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
            },
            /*AudioController.CreateIns end.*/

            /*AudioController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AudioController#Awake", this ); }

                this.CreateIns();
                this.BootstrapPool();
            },
            /*AudioController.Awake end.*/

            /*AudioController.BootstrapPool start.*/
            BootstrapPool: function () {
if ( TRACE ) { TRACE( "AudioController#BootstrapPool", this ); }

                this.SFXPool = new (System.Collections.Generic.Queue$1(UnityEngine.AudioSource)).ctor();
                this.SFXPool.Enqueue(this.CreateNewSource());
                this.SFXPool.Enqueue(this.CreateNewSource());
                this.SFXPool.Enqueue(this.CreateNewSource());
                this.SFXPool.Enqueue(this.CreateNewSource());
                this.SFXPool.Enqueue(this.CreateNewSource());
            },
            /*AudioController.BootstrapPool end.*/

            /*AudioController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "AudioController#Start", this ); }

                this.musicSource.clip = this.BGM;
                this.musicSource.Play();
            },
            /*AudioController.Start end.*/

            /*AudioController.PlaySFX start.*/
            PlaySFX: function (clip) {
if ( TRACE ) { TRACE( "AudioController#PlaySFX", this ); }

                if (!UnityEngine.Object.op_Implicit(clip)) {
                    return;
                }
                this.GetFreeSource().PlayOneShot(clip);
            },
            /*AudioController.PlaySFX end.*/

            /*AudioController.GetFreeSource start.*/
            GetFreeSource: function () {
if ( TRACE ) { TRACE( "AudioController#GetFreeSource", this ); }

                if (this.SFXPool.Count > 0) {
                    return this.SFXPool.Dequeue();
                }
                return this.CreateNewSource();
            },
            /*AudioController.GetFreeSource end.*/

            /*AudioController.CreateNewSource start.*/
            CreateNewSource: function () {
if ( TRACE ) { TRACE( "AudioController#CreateNewSource", this ); }

                var s = new UnityEngine.GameObject.ctor().AddComponent(UnityEngine.AudioSource);
                s.transform.SetParent(this.pool);
                return s;
            },
            /*AudioController.CreateNewSource end.*/


        }
    });
    /*AudioController end.*/

    /*BonkController start.*/
    Bridge.define("BonkController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            damage: 0,
            hitSound: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BonkController#init", this ); }

                this.damage = 1;
            }
        },
        methods: {
            /*BonkController.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "BonkController#OnCollisionEnter2D", this ); }

                if (!collision.gameObject.CompareTag(this.target)) {
                    return;
                }
                var monster = collision.gameObject.GetComponentInParent(MonsterController);
                if (!UnityEngine.Object.op_Implicit(monster) || monster.IsDead) {
                    return;
                }
                AudioController.Ins.PlaySFX(this.hitSound);
                if (monster.Punch(this.damage, collision.GetContact(0).point)) {
                    return;
                } // trúng thì quái tự tóe máu
                // Đấm vào quái còn giáp: nhắc lại hướng dẫn chọn power để phá giáp.
                if (!monster.ArmorBroken && UnityEngine.Object.op_Implicit(PowerController.Ins)) {
                    PowerController.Ins.ShowChoiceTut();
                }
            },
            /*BonkController.OnCollisionEnter2D end.*/


        }
    });
    /*BonkController end.*/

    /*Burning start.*/
    Bridge.define("Burning", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                SpreadInterval: 0,
                CoverStagger: 0,
                GrowTime: 0,
                StartSize: 0,
                EmberInterval: 0,
                SmokeInterval: 0,
                ActiveCount: 0,
                EmberColor: null,
                SmokeColor: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Burning#init", this ); }

                    this.EmberColor = new UnityEngine.Color();
                    this.SmokeColor = new UnityEngine.Color();
                    this.SpreadInterval = 0.12;
                    this.CoverStagger = 0.07;
                    this.GrowTime = 0.3;
                    this.StartSize = 0.4;
                    this.EmberInterval = 0.07;
                    this.SmokeInterval = 0.18;
                    this.EmberColor = new pc.Color( 1.0, 0.85, 0.5, 1.0 );
                    this.SmokeColor = new pc.Color( 0.18, 0.18, 0.18, 0.9 );
                }
            },
            methods: {
                /*Burning.Ignite:static start.*/
                Ignite: function (target, source, hit, point, damage, interval, duration, useId) {
if ( TRACE ) { TRACE( "Burning#Ignite", this ); }

                    var mb = Bridge.as(target, UnityEngine.MonoBehaviour);
                    if (!UnityEngine.Object.op_Implicit(mb)) {
                        return;
                    }
                    var b = mb.GetComponent(Burning);
                    if (!UnityEngine.Object.op_Implicit(b)) {
                        b = mb.gameObject.AddComponent(Burning);
                        b.Setup(target, source);
                        b.nextTick = UnityEngine.Time.time + interval;
                        b.nextSpread = UnityEngine.Time.time + Burning.SpreadInterval;
                    }
                    b.damagePerTick = damage / UnityEngine.Mathf.Max(1.0, Math.floor(duration / interval + 0.001));
                    b.damageAcc = 0;
                    b.useId = useId;
                    if (UnityEngine.Object.op_Implicit(b.monster)) {
                        b.monster.DrainArmor(useId, duration, interval, MonsterController.ArmorBreakFx.Smoke);
                    } // giáp tụt theo nhịp cháy, vỡ thì bốc khói
                    b.interval = interval;
                    b.endTime = UnityEngine.Time.time + duration;
                    // Chạm trúng bộ phận chưa cháy thì bốc cháy ngay tại chỗ chạm.
                    if (UnityEngine.Object.op_Implicit(hit)) {
                        b.IgnitePart(hit.transform, point.$clone(), true);
                    }
                },
                /*Burning.Ignite:static end.*/

                /*Burning.ClampToBounds:static start.*/
                ClampToBounds: function (b, p) {
if ( TRACE ) { TRACE( "Burning#ClampToBounds", this ); }

                    return new pc.Vec2( Math.max(b.min.x, Math.min(p.x, b.max.x)), Math.max(b.min.y, Math.min(p.y, b.max.y)) );
                },
                /*Burning.ClampToBounds:static end.*/

                /*Burning.Stop:static start.*/
                Stop: function (go) {
if ( TRACE ) { TRACE( "Burning#Stop", this ); }

                    var b = go.GetComponent(Burning);
                    if (UnityEngine.Object.op_Implicit(b)) {
                        b.Extinguish();
                    }
                },
                /*Burning.Stop:static end.*/


            }
        },
        fields: {
            nextEmber: 0,
            nextSmoke: 0,
            target: null,
            monster: null,
            source: null,
            damagePerTick: 0,
            damageAcc: 0,
            useId: 0,
            interval: 0,
            endTime: 0,
            nextTick: 0,
            nextSpread: 0,
            animTime: 0,
            flames: null,
            parts: null,
            burningParts: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Burning#init", this ); }

                this.flames = new (System.Collections.Generic.List$1(Burning.Flame)).ctor();
                this.parts = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this.burningParts = new (System.Collections.Generic.HashSet$1(UnityEngine.Transform)).ctor();
            }
        },
        methods: {
            /*Burning.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Burning#OnEnable", this ); }

                Burning.ActiveCount = (Burning.ActiveCount + 1) | 0;
            },
            /*Burning.OnEnable end.*/

            /*Burning.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "Burning#OnDisable", this ); }

                Burning.ActiveCount = (Burning.ActiveCount - 1) | 0;
            },
            /*Burning.OnDisable end.*/

            /*Burning.Setup start.*/
            Setup: function (t, s) {
if ( TRACE ) { TRACE( "Burning#Setup", this ); }

                var $t;
                this.target = t;
                this.source = s;
                this.monster = this.GetComponent(MonsterController);
                $t = Bridge.getEnumerator(this.GetComponentsInChildren(UnityEngine.Collider2D));
                try {
                    while ($t.moveNext()) {
                        var c = $t.Current;
                        if (!c.isTrigger && !this.parts.contains(c.transform)) {
                            this.parts.add(c.transform);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Burning.Setup end.*/

            /*Burning.IgnitePart start.*/
            IgnitePart: function (part, point, atContact) {
if ( TRACE ) { TRACE( "Burning#IgnitePart", this ); }

                if (!UnityEngine.Object.op_Implicit(part) || this.burningParts.contains(part)) {
                    return;
                }
                this.burningParts.add(part);

                var col = part.GetComponent(UnityEngine.Collider2D);
                var ws = this.source.IFireSource$WorldScale;

                // Khung bộ phận trong không gian local (để các ngọn lửa bám theo khi ragdoll xoay).
                var center = pc.Vec2.ZERO.clone(), size = pc.Vec2.ONE.clone().scale( 0.5 );
                var box = Bridge.as(col, UnityEngine.BoxCollider2D);
                if (UnityEngine.Object.op_Implicit(box)) {
                    center = box.offset.$clone();
                    size = box.size.$clone();
                } else if (UnityEngine.Object.op_Implicit(col)) {
                    center = UnityEngine.Vector2.FromVector3(part.InverseTransformPoint(col.bounds.center));
                    size = UnityEngine.Vector2.FromVector3(col.bounds.halfExtents.$clone().scale( 2 ).$clone());
                }
                var ls = part.lossyScale.$clone();
                var worldSize = new pc.Vec2( Math.abs(size.x * ls.x), Math.abs(size.y * ls.y) );
                var shortSide = UnityEngine.Mathf.Min(worldSize.x, worldSize.y), longSide = UnityEngine.Mathf.Max(worldSize.x, worldSize.y);

                // Lửa phủ kín bộ phận: ngọn cao hơn bề ngang bộ phận, rải đều dọc theo cạnh dài.
                var flameSize = Math.max(0.4 * ws, Math.min(shortSide * 1.6, 0.9 * ws));
                var count = Math.max(1, Math.min(Math.ceil(longSide / (flameSize * 0.5)), 5));
                var alongX = worldSize.x >= worldSize.y;
                var t0 = UnityEngine.Time.time;

                // Ngọn đầu tiên ở đúng chỗ chạm.
                if (atContact && UnityEngine.Object.op_Implicit(col)) {
                    var first = this.AddFlame(part, flameSize, t0, Burning.StartSize);
                    first.Sr.transform.position = UnityEngine.Vector3.FromVector2(Burning.ClampToBounds(col.bounds, point));
                    t0 += Burning.CoverStagger;
                }
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var k = count === 1 ? 0.5 : i / (((count - 1) | 0));
                    var local = center.$clone();
                    if (alongX) {
                        local.x += (k - 0.5) * size.x * 0.85;
                    } else {
                        local.y += (k - 0.5) * size.y * 0.85;
                    }
                    var f = this.AddFlame(part, flameSize, t0 + i * Burning.CoverStagger, 0.0);
                    f.Sr.transform.localPosition = UnityEngine.Vector3.FromVector2(local.$clone());
                }
            },
            /*Burning.IgnitePart end.*/

            /*Burning.AddFlame start.*/
            AddFlame: function (part, size, born, startK) {
if ( TRACE ) { TRACE( "Burning#AddFlame", this ); }

                var $t;
                var f = ($t = new Burning.Flame(), $t.Part = part, $t.Size = size, $t.Born = born, $t.StartK = startK, $t);
                f.Sr = PowerBase.CreateSprite("Burn", ($t = this.source.IFireSource$Frames)[0], part, 100);
                this.flames.add(f);
                this.SetFlameScale(f, startK);
                return f;
            },
            /*Burning.AddFlame end.*/

            /*Burning.SetFlameScale start.*/
            SetFlameScale: function (f, k) {
if ( TRACE ) { TRACE( "Burning#SetFlameScale", this ); }

                var $t;
                // Quy đổi chiều cao world sang local của bộ phận (bộ phận có thể bị scale).
                var s = f.Size * k / ($t = this.source.IFireSource$Frames)[0].bounds.halfExtents.$clone().scale( 2 ).y;
                var ls = f.Part.lossyScale.$clone();
                f.Sr.transform.localScale = new pc.Vec3( s / UnityEngine.Mathf.Max(0.0001, Math.abs(ls.x)), s / UnityEngine.Mathf.Max(0.0001, Math.abs(ls.y)), 1 );
            },
            /*Burning.SetFlameScale end.*/

            /*Burning.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Burning#Update", this ); }

                var $t;
                this.animTime += UnityEngine.Time.deltaTime;
                var frame = Bridge.Int.clip32(this.animTime * this.source.IFireSource$FrameRate);
                for (var i = 0; i < this.flames.Count; i = (i + 1) | 0) {
                    var f = this.flames.getItem(i);
                    if (!UnityEngine.Object.op_Implicit(f.Sr)) {
                        continue;
                    }
                    f.Sr.sprite = ($t = this.source.IFireSource$Frames)[(((frame + i) | 0)) % this.source.IFireSource$Frames.length];
                    f.Sr.transform.rotation = pc.Quat.IDENTITY.clone(); // lửa luôn hướng lên dù ragdoll lộn nhào
                    var k = pc.math.lerp(f.StartK, 1.0, (UnityEngine.Time.time - f.Born) / Burning.GrowTime);
                    this.SetFlameScale(f, k);
                }

                if (UnityEngine.Time.time >= this.nextSpread && this.burningParts.Count < this.parts.Count) {
                    this.nextSpread = UnityEngine.Time.time + Burning.SpreadInterval;
                    this.Spread();
                }
                this.EmitFx();

                var dead = UnityEngine.Object.op_Implicit(this.monster) && this.monster.IsDead;
                if (!dead && UnityEngine.Time.time >= this.nextTick) {
                    this.nextTick = UnityEngine.Time.time + this.interval;
                    this.damageAcc += this.damagePerTick;
                    var d = Math.floor(this.damageAcc + 0.001);
                    this.damageAcc -= d;
                    if (d > 0) {
                        this.target.IDamageable$TakeDamage(d, this.useId);
                    }
                }
                if (UnityEngine.Time.time >= this.endTime) {
                    this.Extinguish();
                }
            },
            /*Burning.Update end.*/

            /*Burning.EmitFx start.*/
            EmitFx: function () {
if ( TRACE ) { TRACE( "Burning#EmitFx", this ); }

                if (this.flames.Count === 0) {
                    return;
                }
                var ws = this.source.IFireSource$WorldScale;
                if (UnityEngine.Object.op_Implicit(this.source.IFireSource$EmberSprite) && UnityEngine.Time.time >= this.nextEmber) {
                    this.nextEmber = UnityEngine.Time.time + Burning.EmberInterval;
                    var f = this.flames.getItem(UnityEngine.Random.Range(0, this.flames.Count));
                    if (UnityEngine.Object.op_Implicit(f.Sr)) {
                        var p = UnityEngine.Vector2.FromVector3(f.Sr.transform.position).add( new pc.Vec2( UnityEngine.Random.Range$1(-0.15, 0.15), UnityEngine.Random.Range$1(0.0, 0.25) ).scale( ws ) );
                        var v = new pc.Vec2( UnityEngine.Random.Range$1(-0.3, 0.6), UnityEngine.Random.Range$1(0.6, 1.4) ).scale( ws );
                        var size = UnityEngine.Random.Range$1(0.07, 0.12) * ws;
                        FireFx.Ins.Spawn(this.source.IFireSource$EmberSprite, null, 0, p, v, 0, UnityEngine.Random.Range$1(0.5, 0.9), size, size * 0.5, Burning.EmberColor, 102);
                    }
                }
                if (UnityEngine.Object.op_Implicit(this.source.IFireSource$SmokeSprite) && UnityEngine.Time.time >= this.nextSmoke) {
                    this.nextSmoke = UnityEngine.Time.time + Burning.SmokeInterval;
                    var f1 = this.flames.getItem(UnityEngine.Random.Range(0, this.flames.Count));
                    if (UnityEngine.Object.op_Implicit(f1.Sr)) {
                        var p1 = UnityEngine.Vector2.FromVector3(f1.Sr.transform.position).add( new pc.Vec2( 0, f1.Size * 0.4 ) );
                        var v1 = new pc.Vec2( UnityEngine.Random.Range$1(0.1, 0.4), UnityEngine.Random.Range$1(0.4, 0.7) ).scale( ws );
                        FireFx.Ins.Spawn(this.source.IFireSource$SmokeSprite, null, 0, p1, v1, 0, UnityEngine.Random.Range$1(1.2, 1.6), 0.35 * ws, 1.0 * ws, Burning.SmokeColor, 99);
                    }
                }
            },
            /*Burning.EmitFx end.*/

            /*Burning.Spread start.*/
            Spread: function () {
if ( TRACE ) { TRACE( "Burning#Spread", this ); }

                var $t, $t1;
                var best = null;
                var bestDist = 3.40282347E+38;
                $t = Bridge.getEnumerator(this.parts);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current;
                        if (!UnityEngine.Object.op_Implicit(p) || this.burningParts.contains(p)) {
                            continue;
                        }
                        $t1 = Bridge.getEnumerator(this.burningParts);
                        try {
                            while ($t1.moveNext()) {
                                var b = $t1.Current;
                                if (!UnityEngine.Object.op_Implicit(b)) {
                                    continue;
                                }
                                var d = (p.position.$clone().sub( b.position )).lengthSq();
                                if (d < bestDist) {
                                    bestDist = d;
                                    best = p;
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
                if (UnityEngine.Object.op_Implicit(best)) {
                    this.IgnitePart(best, UnityEngine.Vector2.FromVector3(best.position.$clone()), false);
                }
            },
            /*Burning.Spread end.*/

            /*Burning.Extinguish start.*/
            Extinguish: function () {
if ( TRACE ) { TRACE( "Burning#Extinguish", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.flames);
                try {
                    while ($t.moveNext()) {
                        var f = $t.Current;
                        if (UnityEngine.Object.op_Implicit(f.Sr)) {
                            UnityEngine.MonoBehaviour.Destroy(f.Sr.gameObject);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.flames.clear();
                UnityEngine.Object.Destroy(this);
            },
            /*Burning.Extinguish end.*/


        }
    });
    /*Burning end.*/

    /*Burning+Flame start.*/
    Bridge.define("Burning.Flame", {
        $kind: 1002,
        fields: {
            Sr: null,
            Part: null,
            Size: 0,
            Born: 0,
            StartK: 0
        }
    });
    /*Burning+Flame end.*/

    /*CameraShake start.*/
    Bridge.define("CameraShake", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null
            }
        },
        fields: {
            offset: null,
            duration: 0,
            timeLeft: 0,
            strength: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraShake#init", this ); }

                this.offset = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*CameraShake.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CameraShake#Awake", this ); }

                CameraShake.Ins = this;
            },
            /*CameraShake.Awake end.*/

            /*CameraShake.Shake start.*/
            Shake: function (time, magnitude) {
if ( TRACE ) { TRACE( "CameraShake#Shake", this ); }

                // Lần rung mới mạnh hơn phần còn lại của lần cũ thì thay thế.
                var remaining = this.duration > 0 ? this.strength * (this.timeLeft / this.duration) : 0.0;
                if (magnitude < remaining) {
                    return;
                }
                this.duration = time;
                this.timeLeft = time;
                this.strength = magnitude;
            },
            /*CameraShake.Shake end.*/

            /*CameraShake.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "CameraShake#LateUpdate", this ); }

                this.transform.position = this.transform.position.$clone().sub( this.offset.$clone() );
                this.offset = pc.Vec3.ZERO.clone();
                if (this.timeLeft <= 0) {
                    return;
                }
                this.timeLeft -= UnityEngine.Time.deltaTime;
                if (this.timeLeft <= 0) {
                    return;
                }
                var k = this.strength * (this.timeLeft / this.duration);
                var o = UnityEngine.Random.insideUnitCircle.$clone().scale( k );
                this.offset = new pc.Vec3( o.x, o.y, 0 );
                this.transform.position = this.transform.position.$clone().add( this.offset.$clone() );
            },
            /*CameraShake.LateUpdate end.*/


        }
    });
    /*CameraShake end.*/

    /*CycleHand start.*/
    Bridge.define("CycleHand", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            targets: null,
            fingerOffset: null,
            moveTime: 0,
            stayTime: 0,
            tapSpeed: 0,
            pulse: 0,
            rect: null,
            baseScale: null,
            index: 0,
            time: 0,
            active: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CycleHand#init", this ); }

                this.fingerOffset = new UnityEngine.Vector2();
                this.baseScale = new UnityEngine.Vector3();
                this.fingerOffset = new pc.Vec2( 70.0, -70.0 );
                this.moveTime = 0.35;
                this.stayTime = 0.9;
                this.tapSpeed = 9.0;
                this.pulse = 0.15;
                this.active = new (System.Collections.Generic.List$1(UnityEngine.RectTransform)).ctor();
            }
        },
        methods: {
            /*CycleHand.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CycleHand#Awake", this ); }

                this.rect = Bridge.cast(this.transform, UnityEngine.RectTransform);
                this.baseScale = this.rect.localScale.$clone();
            },
            /*CycleHand.Awake end.*/

            /*CycleHand.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "CycleHand#OnEnable", this ); }

                this.index = 0;
                this.time = 0;
            },
            /*CycleHand.OnEnable end.*/

            /*CycleHand.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CycleHand#Update", this ); }

                var $t;
                // Chỉ đi qua các nút đang bật (stage có thể bật bớt power).
                this.active.clear();
                if (this.targets != null) {
                    $t = Bridge.getEnumerator(this.targets);
                    try {
                        while ($t.moveNext()) {
                            var t = $t.Current;
                            if (UnityEngine.Object.op_Implicit(t) && t.gameObject.activeInHierarchy) {
                                this.active.add(t);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                }
                if (this.active.Count === 0) {
                    return;
                }
                this.time += UnityEngine.Time.unscaledDeltaTime;
                if (this.time >= this.moveTime + this.stayTime) {
                    this.time -= this.moveTime + this.stayTime;
                    this.index = (this.index + 1) | 0;
                }
                this.index = this.index % this.active.Count;
                var from = this.Pos((((((this.index - 1) | 0) + this.active.Count) | 0)) % this.active.Count);
                var to = this.Pos(this.index);
                if (this.time < this.moveTime) {
                    this.rect.anchoredPosition = new pc.Vec2().lerp( from, to, pc.math.smoothstep(0, 1, this.time / this.moveTime) );
                    this.rect.localScale = this.baseScale.$clone();
                } else {
                    this.rect.anchoredPosition = to.$clone();
                    var k = 0.5 * (1.0 + Math.sin((this.time - this.moveTime) * this.tapSpeed));
                    this.rect.localScale = this.baseScale.$clone().clone().scale( (1.0 - this.pulse * k) );
                }
            },
            /*CycleHand.Update end.*/

            /*CycleHand.SetTargets start.*/
            SetTargets: function (list) {
if ( TRACE ) { TRACE( "CycleHand#SetTargets", this ); }

                if (list === void 0) { list = []; }
                this.targets = new (System.Collections.Generic.List$1(UnityEngine.RectTransform)).$ctor1(list);
                this.index = 0;
                this.time = 0;
            },
            /*CycleHand.SetTargets end.*/

            /*CycleHand.Pos start.*/
            Pos: function (i) {
if ( TRACE ) { TRACE( "CycleHand#Pos", this ); }

                return this.active.getItem(i).anchoredPosition.$clone().add( this.fingerOffset );
            },
            /*CycleHand.Pos end.*/


        }
    });
    /*CycleHand end.*/
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @param   {DG.Tweening.DOTweenAnimation}    arg
     * @return  {void}
     */


    /*DG.Tweening.DOTweenAnimation start.*/
    /** @namespace DG.Tweening */

    /**
     * Attach this to a GameObject to create a tween
     *
     * @public
     * @class DG.Tweening.DOTweenAnimation
     * @augments DG.Tweening.Core.ABSAnimationComponent
     */
    Bridge.define("DG.Tweening.DOTweenAnimation", {
        inherits: [DG.Tweening.Core.ABSAnimationComponent],
        statics: {
            events: {
                /**
                 * Used internally by the editor
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenAnimation
                 * @memberof DG.Tweening.DOTweenAnimation
                 * @function addOnReset
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                /**
                 * Used internally by the editor
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenAnimation
                 * @memberof DG.Tweening.DOTweenAnimation
                 * @function removeOnReset
                 * @param   {System.Action}    value
                 * @return  {void}
                 */
                OnReset: null
            },
            methods: {
                /*DG.Tweening.DOTweenAnimation.Dispatch_OnReset:static start.*/
                Dispatch_OnReset: function (anim) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Dispatch_OnReset", this ); }

                    if (!Bridge.staticEquals(DG.Tweening.DOTweenAnimation.OnReset, null)) {
                        DG.Tweening.DOTweenAnimation.OnReset(anim);
                    }
                },
                /*DG.Tweening.DOTweenAnimation.Dispatch_OnReset:static end.*/

                /*DG.Tweening.DOTweenAnimation.TypeToDOTargetType:static start.*/
                TypeToDOTargetType: function (t) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#TypeToDOTargetType", this ); }

                    var str = Bridge.getTypeName(t);
                    var dotIndex = str.lastIndexOf(".");
                    if (dotIndex !== -1) {
                        str = str.substr(((dotIndex + 1) | 0));
                    }
                    if (System.String.indexOf(str, "Renderer") !== -1 && (!Bridge.referenceEquals(str, "SpriteRenderer"))) {
                        str = "Renderer";
                    }
                    //#if true // PHYSICS_MARKER
                    //            if (str == "Rigidbody") str = "Transform";
                    //#endif
                    //#if true // PHYSICS2D_MARKER
                    //            if (str == "Rigidbody2D") str = "Transform";
                    //#endif
                    //            if (str == "RectTransform") str = "Transform";
                    if (Bridge.referenceEquals(str, "RawImage") || Bridge.referenceEquals(str, "Graphic")) {
                        str = "Image";
                    } // RawImages/Graphics are managed like Images for DOTweenAnimation (color and fade use Graphic target anyway)
                    return System.Nullable.getValue(Bridge.cast(Bridge.unbox(System.Enum.parse(DG.Tweening.DOTweenAnimation.TargetType, str), DG.Tweening.DOTweenAnimation.TargetType), System.Int32));
                },
                /*DG.Tweening.DOTweenAnimation.TypeToDOTargetType:static end.*/


            }
        },
        fields: {
            targetIsSelf: false,
            targetGO: null,
            tweenTargetIsTargetGO: false,
            delay: 0,
            duration: 0,
            easeType: 0,
            easeCurve: null,
            loopType: 0,
            loops: 0,
            id: null,
            isRelative: false,
            isFrom: false,
            isIndependentUpdate: false,
            autoKill: false,
            autoGenerate: false,
            isActive: false,
            isValid: false,
            target: null,
            animationType: 0,
            targetType: 0,
            forcedTargetType: 0,
            autoPlay: false,
            useTargetAsV3: false,
            endValueFloat: 0,
            endValueV3: null,
            endValueV2: null,
            endValueColor: null,
            endValueString: null,
            endValueRect: null,
            endValueTransform: null,
            optionalBool0: false,
            optionalBool1: false,
            optionalFloat0: 0,
            optionalInt0: 0,
            optionalRotationMode: 0,
            optionalScrambleMode: 0,
            optionalShakeRandomnessMode: 0,
            optionalString: null,
            _tweenAutoGenerationCalled: false,
            _playCount: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#init", this ); }

                this.endValueV3 = new UnityEngine.Vector3();
                this.endValueV2 = new UnityEngine.Vector2();
                this.endValueColor = new UnityEngine.Color();
                this.endValueRect = new UnityEngine.Rect();
                this.targetIsSelf = true;
                this.tweenTargetIsTargetGO = true;
                this.duration = 1;
                this.easeType = DG.Tweening.Ease.OutQuad;
                this.easeCurve = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0, 0, 0, 0), new pc.Keyframe(1, 1, 0, 0) ]});
                this.loopType = DG.Tweening.LoopType.Restart;
                this.loops = 1;
                this.id = "";
                this.isIndependentUpdate = false;
                this.autoKill = true;
                this.autoGenerate = true;
                this.isActive = true;
                this.autoPlay = true;
                this.endValueColor = new pc.Color( 1, 1, 1, 1 );
                this.endValueString = "";
                this.endValueRect = new UnityEngine.Rect.$ctor1(0, 0, 0, 0);
                this.optionalRotationMode = DG.Tweening.RotateMode.Fast;
                this.optionalScrambleMode = DG.Tweening.ScrambleMode.None;
                this.optionalShakeRandomnessMode = DG.Tweening.ShakeRandomnessMode.Full;
                this._playCount = -1;
            }
        },
        methods: {
            /*DG.Tweening.DOTweenAnimation.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Awake", this ); }

                if (!this.isActive || !this.autoGenerate) {
                    return;
                }

                if (this.animationType !== DG.Tweening.DOTweenAnimation.AnimationType.Move || !this.useTargetAsV3) {
                    // Don't create tweens if we're using a RectTransform as a Move target,
                    // because that will work only inside Start
                    this.CreateTween(false, this.autoPlay);
                    this._tweenAutoGenerationCalled = true;
                }
            },
            /*DG.Tweening.DOTweenAnimation.Awake end.*/

            /*DG.Tweening.DOTweenAnimation.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Start", this ); }

                if (this._tweenAutoGenerationCalled || !this.isActive || !this.autoGenerate) {
                    return;
                }

                this.CreateTween(false, this.autoPlay);
                this._tweenAutoGenerationCalled = true;
            },
            /*DG.Tweening.DOTweenAnimation.Start end.*/

            /*DG.Tweening.DOTweenAnimation.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#Reset", this ); }

                DG.Tweening.DOTweenAnimation.Dispatch_OnReset(this);
            },
            /*DG.Tweening.DOTweenAnimation.Reset end.*/

            /*DG.Tweening.DOTweenAnimation.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#OnDestroy", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Kill(this.tween);
                }
                this.tween = null;
            },
            /*DG.Tweening.DOTweenAnimation.OnDestroy end.*/

            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTween start.*/
            /**
             * Creates/recreates the tween without playing it, but first rewinding and killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RewindThenRecreateTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RewindThenRecreateTween", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Rewind(this.tween);
                }
                this.CreateTween(true, false);
            },
            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTweenAndPlay start.*/
            /**
             * Creates/recreates the tween and plays it, first rewinding and killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RewindThenRecreateTweenAndPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RewindThenRecreateTweenAndPlay", this ); }

                if (this.tween != null && this.tween.active) {
                    DG.Tweening.TweenExtensions.Rewind(this.tween);
                }
                this.CreateTween(true, true);
            },
            /*DG.Tweening.DOTweenAnimation.RewindThenRecreateTweenAndPlay end.*/

            /*DG.Tweening.DOTweenAnimation.RecreateTween start.*/
            /**
             * Creates/recreates the tween from its target's current value without playing it, but first killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RecreateTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RecreateTween", this ); }

                this.CreateTween(true, false);
            },
            /*DG.Tweening.DOTweenAnimation.RecreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.RecreateTweenAndPlay start.*/
            /**
             * Creates/recreates the tween from its target's current value and plays it, first killing the existing one if present.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            RecreateTweenAndPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#RecreateTweenAndPlay", this ); }

                this.CreateTween(true, true);
            },
            /*DG.Tweening.DOTweenAnimation.RecreateTweenAndPlay end.*/

            /*DG.Tweening.DOTweenAnimation.CreateTween start.*/
            /**
             * Creates the tween manually (called automatically if AutoGenerate is set in the Inspector)
             from its target's current value.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {boolean}    regenerateIfExists    If TRUE and an existing tween was already created (and not killed), kills it and recreates it with the current
             parameters. Otherwise, if a tween already exists, does nothing.
             * @param   {boolean}    andPlay               If TRUE also plays the tween, otherwise only creates it
             * @return  {void}
             */
            CreateTween: function (regenerateIfExists, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#CreateTween", this ); }

                if (regenerateIfExists === void 0) { regenerateIfExists = false; }
                if (andPlay === void 0) { andPlay = true; }
                if (!this.isValid) {
                    if (regenerateIfExists) { // Called manually: warn users
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation isn't valid and its tween won't be created", [this.gameObject.name]), this.gameObject);
                    }
                    return;
                }
                if (this.tween != null) {
                    if (this.tween.active) {
                        if (regenerateIfExists) {
                            DG.Tweening.TweenExtensions.Kill(this.tween);
                        } else {
                            return;
                        }
                    }
                    this.tween = null;
                }

                //            if (target == null) {
                //                Debug.LogWarning(string.Format("{0} :: This DOTweenAnimation's target is NULL, because the animation was created with a DOTween Pro version older than 0.9.255. To fix this, exit Play mode then simply select this object, and it will update automatically", this.gameObject.name), this.gameObject);
                //                return;
                //            }

                var tweenGO = this.GetTweenGO();
                if (UnityEngine.Component.op_Equality(this.target, null) || UnityEngine.GameObject.op_Equality(tweenGO, null)) {
                    if (this.targetIsSelf && UnityEngine.Component.op_Equality(this.target, null)) {
                        // Old error caused during upgrade from DOTween Pro 0.9.255
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target is NULL, because the animation was created with a DOTween Pro version older than 0.9.255. To fix this, exit Play mode then simply select this object, and it will update automatically", [this.gameObject.name]), this.gameObject);
                    } else {
                        // Missing non-self target
                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target/GameObject is unset: the tween will not be created.", [this.gameObject.name]), this.gameObject);
                    }
                    return;
                }

                if (this.forcedTargetType !== DG.Tweening.DOTweenAnimation.TargetType.Unset) {
                    this.targetType = this.forcedTargetType;
                }
                if (this.targetType === DG.Tweening.DOTweenAnimation.TargetType.Unset) {
                    // Legacy DOTweenAnimation (made with a version older than 0.9.450) without stored targetType > assign it now
                    this.targetType = DG.Tweening.DOTweenAnimation.TypeToDOTargetType(Bridge.getType(this.target));
                }

                switch (this.animationType) {
                    case DG.Tweening.DOTweenAnimation.AnimationType.None: 
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Move: 
                        if (this.useTargetAsV3) {
                            this.isRelative = false;
                            if (UnityEngine.Component.op_Equality(this.endValueTransform, null)) {
                                UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's TO target is NULL, a Vector3 of (0,0,0) will be used instead", [this.gameObject.name]), this.gameObject);
                                this.endValueV3 = pc.Vec3.ZERO.clone();
                            } else {
                                if (this.targetType === DG.Tweening.DOTweenAnimation.TargetType.RectTransform) {
                                    var endValueT = Bridge.as(this.endValueTransform, UnityEngine.RectTransform);
                                    if (UnityEngine.Component.op_Equality(endValueT, null)) {
                                        UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's TO target should be a RectTransform, a Vector3 of (0,0,0) will be used instead", [this.gameObject.name]), this.gameObject);
                                        this.endValueV3 = pc.Vec3.ZERO.clone();
                                    } else {
                                        var rTarget = Bridge.as(this.target, UnityEngine.RectTransform);
                                        if (UnityEngine.Component.op_Equality(rTarget, null)) {
                                            UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This tween's target and TO target are not of the same type. Please reassign the values", [this.gameObject.name]), this.gameObject);
                                        } else {
                                            // Problem: doesn't work inside Awake (ararargh!)
                                            this.endValueV3 = UnityEngine.Vector3.FromVector2(DG.Tweening.DOTweenModuleUI.Utils.SwitchToRectTransform(endValueT, rTarget));
                                        }
                                    }
                                } else {
                                    this.endValueV3 = this.endValueTransform.position.$clone();
                                }
                            }
                        }
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOMove(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOAnchorPos3D(Bridge.cast(this.target, UnityEngine.RectTransform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOMove(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody2D: 
                                this.tween = DG.Tweening.DOTweenModulePhysics2D.DOMove(Bridge.cast(this.target, UnityEngine.Rigidbody2D), UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.duration, this.optionalBool0);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.LocalMove: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOLocalMove(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalBool0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Rotate: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DORotate(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody: 
                                this.tween = DG.Tweening.ShortcutExtensions.DORotate(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Rigidbody2D: 
                                this.tween = DG.Tweening.DOTweenModulePhysics2D.DORotate(Bridge.cast(this.target, UnityEngine.Rigidbody2D), this.endValueFloat, this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.LocalRotate: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOLocalRotate(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Scale: 
                        switch (this.targetType) {
                            default: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOScale$1(tweenGO.transform, this.optionalBool0 ? new pc.Vec3( this.endValueFloat, this.endValueFloat, this.endValueFloat ) : this.endValueV3.$clone(), this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.UIWidthHeight: 
                        this.tween = DG.Tweening.DOTweenModuleUI.DOSizeDelta(Bridge.cast(this.target, UnityEngine.RectTransform), this.optionalBool0 ? new pc.Vec2( this.endValueFloat, this.endValueFloat ) : this.endValueV2.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Color: 
                        this.isRelative = false;
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Renderer: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOColor$3(Bridge.cast(this.target, UnityEngine.Renderer).material, this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Light: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOColor$1(Bridge.cast(this.target, UnityEngine.Light), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.SpriteRenderer: 
                                this.tween = DG.Tweening.DOTweenModuleSprite.DOColor(Bridge.cast(this.target, UnityEngine.SpriteRenderer), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Image: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOColor(Bridge.cast(this.target, UnityEngine.UI.Graphic), this.endValueColor.$clone(), this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOColor$3(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueColor.$clone(), this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Fade: 
                        this.isRelative = false;
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Renderer: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOFade$1(Bridge.cast(this.target, UnityEngine.Renderer).material, this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Light: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOIntensity(Bridge.cast(this.target, UnityEngine.Light), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.SpriteRenderer: 
                                this.tween = DG.Tweening.DOTweenModuleSprite.DOFade(Bridge.cast(this.target, UnityEngine.SpriteRenderer), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Image: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade$1(Bridge.cast(this.target, UnityEngine.UI.Graphic), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade$4(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueFloat, this.duration);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.CanvasGroup: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOFade(Bridge.cast(this.target, UnityEngine.CanvasGroup), this.endValueFloat, this.duration);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.Text: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Text: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOText(Bridge.cast(this.target, UnityEngine.UI.Text), this.endValueString, this.duration, this.optionalBool0, this.optionalScrambleMode, this.optionalString);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchPosition: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOPunchPosition(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos(Bridge.cast(this.target, UnityEngine.RectTransform), UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.duration, this.optionalInt0, this.optionalFloat0, this.optionalBool0);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchScale: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPunchScale(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.PunchRotation: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPunchRotation(tweenGO.transform, this.endValueV3.$clone(), this.duration, this.optionalInt0, this.optionalFloat0);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakePosition: 
                        switch (this.targetType) {
                            case DG.Tweening.DOTweenAnimation.TargetType.Transform: 
                                this.tween = DG.Tweening.ShortcutExtensions.DOShakePosition$3(Bridge.cast(this.target, UnityEngine.Transform), this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool0, this.optionalBool1, this.optionalShakeRandomnessMode);
                                break;
                            case DG.Tweening.DOTweenAnimation.TargetType.RectTransform: 
                                this.tween = DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1(Bridge.cast(this.target, UnityEngine.RectTransform), this.duration, UnityEngine.Vector2.FromVector3(this.endValueV3.$clone()), this.optionalInt0, this.optionalFloat0, this.optionalBool0, this.optionalBool1, this.optionalShakeRandomnessMode);
                                break;
                        }
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakeScale: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOShakeScale$1(tweenGO.transform, this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool1, this.optionalShakeRandomnessMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.ShakeRotation: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOShakeRotation$3(tweenGO.transform, this.duration, this.endValueV3.$clone(), this.optionalInt0, this.optionalFloat0, this.optionalBool1, this.optionalShakeRandomnessMode);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraAspect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOAspect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraBackgroundColor: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOColor(Bridge.cast(this.target, UnityEngine.Camera), this.endValueColor.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraFieldOfView: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOFieldOfView(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraOrthoSize: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOOrthoSize(Bridge.cast(this.target, UnityEngine.Camera), this.endValueFloat, this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraPixelRect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DOPixelRect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueRect.$clone(), this.duration);
                        break;
                    case DG.Tweening.DOTweenAnimation.AnimationType.CameraRect: 
                        this.tween = DG.Tweening.ShortcutExtensions.DORect(Bridge.cast(this.target, UnityEngine.Camera), this.endValueRect.$clone(), this.duration);
                        break;
                }

                if (this.tween == null) {
                    return;
                }

                // Created

                if (this.isFrom) {
                    DG.Tweening.TweenSettingsExtensions.From$1(DG.Tweening.Tweener, Bridge.cast(this.tween, DG.Tweening.Tweener), this.isRelative);
                } else {
                    DG.Tweening.TweenSettingsExtensions.SetRelative$1(DG.Tweening.Tween, this.tween, this.isRelative);
                }
                var setTarget = this.GetTweenTarget();
                DG.Tweening.TweenSettingsExtensions.OnKill(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetAutoKill$1(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Tween, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tween, this.tween, setTarget), this.delay), this.loops, this.loopType), this.autoKill), Bridge.fn.bind(this, function () {
                    this.tween = null;
                }));
                if (this.isSpeedBased) {
                    DG.Tweening.TweenSettingsExtensions.SetSpeedBased(DG.Tweening.Tween, this.tween);
                }
                if (this.easeType === DG.Tweening.Ease.INTERNAL_Custom) {
                    DG.Tweening.TweenSettingsExtensions.SetEase(DG.Tweening.Tween, this.tween, this.easeCurve);
                } else {
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tween, this.tween, this.easeType);
                }
                if (!System.String.isNullOrEmpty(this.id)) {
                    DG.Tweening.TweenSettingsExtensions.SetId$2(DG.Tweening.Tween, this.tween, this.id);
                }
                DG.Tweening.TweenSettingsExtensions.SetUpdate(DG.Tweening.Tween, this.tween, this.isIndependentUpdate);

                if (this.hasOnStart) {
                    if (this.onStart != null) {
                        DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onStart, this.onStart.Invoke));
                    }
                } else {
                    this.onStart = null;
                }
                if (this.hasOnPlay) {
                    if (this.onPlay != null) {
                        DG.Tweening.TweenSettingsExtensions.OnPlay(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onPlay, this.onPlay.Invoke));
                    }
                } else {
                    this.onPlay = null;
                }
                if (this.hasOnUpdate) {
                    if (this.onUpdate != null) {
                        DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onUpdate, this.onUpdate.Invoke));
                    }
                } else {
                    this.onUpdate = null;
                }
                if (this.hasOnStepComplete) {
                    if (this.onStepComplete != null) {
                        DG.Tweening.TweenSettingsExtensions.OnStepComplete(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onStepComplete, this.onStepComplete.Invoke));
                    }
                } else {
                    this.onStepComplete = null;
                }
                if (this.hasOnComplete) {
                    if (this.onComplete != null) {
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onComplete, this.onComplete.Invoke));
                    }
                } else {
                    this.onComplete = null;
                }
                if (this.hasOnRewind) {
                    if (this.onRewind != null) {
                        DG.Tweening.TweenSettingsExtensions.OnRewind(DG.Tweening.Tween, this.tween, Bridge.fn.cacheBind(this.onRewind, this.onRewind.Invoke));
                    }
                } else {
                    this.onRewind = null;
                }

                if (andPlay) {
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, this.tween);
                } else {
                    DG.Tweening.TweenExtensions.Pause(DG.Tweening.Tween, this.tween);
                }

                if (this.hasOnTweenCreated && this.onTweenCreated != null) {
                    this.onTweenCreated.Invoke();
                }
            },
            /*DG.Tweening.DOTweenAnimation.CreateTween end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweens start.*/
            /**
             * Returns the tweens (if generated and not killed) created by all DOTweenAnimations on this gameObject,
             in the same order as they appear in the Inspector (top to bottom).<p />
             Note that a tween is generated inside the Awake call (except RectTransform tweens which are generated inside Start),
             so this method won't return them before that
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {System.Collections.Generic.List$1}
             */
            GetTweens: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweens", this ); }

                var $t;
                var result = new (System.Collections.Generic.List$1(DG.Tweening.Tween)).ctor();
                var anims = this.GetComponents(DG.Tweening.DOTweenAnimation);
                $t = Bridge.getEnumerator(anims);
                try {
                    while ($t.moveNext()) {
                        var anim = $t.Current;
                        if (anim.tween != null && anim.tween.active) {
                            result.add(anim.tween);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return result;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweens end.*/

            /*DG.Tweening.DOTweenAnimation.SetAnimationTarget start.*/
            /**
             * Sets the animation target (which must be of the same type of the one set in the Inspector).
             This is useful if you want to change it BEFORE this {@link }
             creates a tween, while after that it won't have any effect.<p />
             Consider that a {@link } creates its tween inside its Awake (except for special tweens),
             so you will need to sure your code runs before this object's Awake (via ScriptExecutionOrder or enabling/disabling methods)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {UnityEngine.Component}    tweenTarget                                   New target for the animation (must be of the same type of the previous one)
             * @param   {boolean}                  useTweenTargetGameObjectForGroupOperations    If TRUE also uses tweenTarget's gameObject when settings the target-ID of the tween
             (which is used with DOPlay/DORestart/etc to apply the same operation on all tweens that have the same target-id).<p />
             You should usually leave this to TRUE if you change the target.
             * @return  {void}
             */
            SetAnimationTarget: function (tweenTarget, useTweenTargetGameObjectForGroupOperations) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#SetAnimationTarget", this ); }

                if (useTweenTargetGameObjectForGroupOperations === void 0) { useTweenTargetGameObjectForGroupOperations = true; }
                var newTargetType = DG.Tweening.DOTweenAnimation.TypeToDOTargetType(Bridge.getType(this.target));
                if (newTargetType !== this.targetType) {
                    UnityEngine.Debug.LogError$2("DOTweenAnimation \u25ba SetAnimationTarget: the new target is of a different type from the one set in the Inspector");
                    return;
                }
                this.target = tweenTarget;
                this.targetGO = this.target.gameObject;
                this.tweenTargetIsTargetGO = useTweenTargetGameObjectForGroupOperations;
            },
            /*DG.Tweening.DOTweenAnimation.SetAnimationTarget end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlay start.*/
            /**
             * Plays all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlay: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlay", this ); }

                DG.Tweening.DOTween.Play(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlay end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwards start.*/
            /**
             * Plays backwards all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayBackwards: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwards", this ); }

                DG.Tweening.DOTween.PlayBackwards(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwards end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForward start.*/
            /**
             * Plays foward all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayForward: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForward", this ); }

                DG.Tweening.DOTween.PlayForward(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForward end.*/

            /*DG.Tweening.DOTweenAnimation.DOPause start.*/
            /**
             * Pauses all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPause: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPause", this ); }

                DG.Tweening.DOTween.Pause(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOPause end.*/

            /*DG.Tweening.DOTweenAnimation.DOTogglePause start.*/
            /**
             * Pauses/unpauses (depending on the current state) all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOTogglePause: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOTogglePause", this ); }

                DG.Tweening.DOTween.TogglePause(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOTogglePause end.*/

            /*DG.Tweening.DOTweenAnimation.DORewind start.*/
            /**
             * Rewinds all tweens created by this animation in the correct order
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORewind: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewind", this ); }

                this._playCount = -1;
                // Rewind using Components order (in case there are multiple animations on the same property)
                var anims = this.gameObject.GetComponents(DG.Tweening.DOTweenAnimation);
                for (var i = (anims.length - 1) | 0; i > -1; i = (i - 1) | 0) {
                    var t = anims[i].tween;
                    if (t != null && DG.Tweening.TweenExtensions.IsInitialized(t)) {
                        DG.Tweening.TweenExtensions.Rewind(anims[i].tween);
                    }
                }
                // DOTween.Rewind(GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DORewind end.*/

            /*DG.Tweening.DOTweenAnimation.DORestart start.*/
            /**
             * Restarts all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORestart: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestart", this ); }

                this.DORestart$1(false);
            },
            /*DG.Tweening.DOTweenAnimation.DORestart end.*/

            /*DG.Tweening.DOTweenAnimation.DORestart$1 start.*/
            /**
             * Restarts all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {boolean}    fromHere    If TRUE, re-evaluates the tween's start and end values from its current position.
             Set it to TRUE when spawning the same DOTweenAnimation in different positions (like when using a pooling system)
             * @return  {void}
             */
            DORestart$1: function (fromHere) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestart$1", this ); }

                this._playCount = -1;
                if (this.tween == null) {
                    if (DG.Tweening.Core.Debugger.logPriority > 1) {
                        DG.Tweening.Core.Debugger.LogNullTween(this.tween);
                    }
                    return;
                }
                if (fromHere && this.isRelative) {
                    this.ReEvaluateRelativeTween();
                }
                DG.Tweening.DOTween.Restart(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DORestart$1 end.*/

            /*DG.Tweening.DOTweenAnimation.DOComplete start.*/
            /**
             * Completes all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOComplete: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOComplete", this ); }

                DG.Tweening.DOTween.Complete(this.GetTweenTarget());
            },
            /*DG.Tweening.DOTweenAnimation.DOComplete end.*/

            /*DG.Tweening.DOTweenAnimation.DOKill start.*/
            /**
             * Kills all tweens whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @override
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOKill: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKill", this ); }

                DG.Tweening.DOTween.Kill(this.GetTweenTarget());
                this.tween = null;
            },
            /*DG.Tweening.DOTweenAnimation.DOKill end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayById start.*/
            /**
             * Plays all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayById", this ); }

                DG.Tweening.DOTween.Play$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayAllById start.*/
            /**
             * Plays all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayAllById", this ); }

                DG.Tweening.DOTween.Play(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPauseAllById start.*/
            /**
             * Pauses all tweens that with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPauseAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPauseAllById", this ); }

                DG.Tweening.DOTween.Pause(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPauseAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsById start.*/
            /**
             * Plays backwards all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayBackwardsById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwardsById", this ); }

                DG.Tweening.DOTween.PlayBackwards$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsAllById start.*/
            /**
             * Plays backwards all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayBackwardsAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayBackwardsAllById", this ); }

                DG.Tweening.DOTween.PlayBackwards(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayBackwardsAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForwardById start.*/
            /**
             * Plays forward all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayForwardById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForwardById", this ); }

                DG.Tweening.DOTween.PlayForward$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForwardById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayForwardAllById start.*/
            /**
             * Plays forward all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOPlayForwardAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayForwardAllById", this ); }

                DG.Tweening.DOTween.PlayForward(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayForwardAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOPlayNext start.*/
            /**
             * Plays the next animation on this animation's gameObject (if any)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DOPlayNext: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOPlayNext", this ); }

                var anims = this.GetComponents(DG.Tweening.DOTweenAnimation);
                while (this._playCount < ((anims.length - 1) | 0)) {
                    this._playCount = (this._playCount + 1) | 0;
                    var anim = anims[this._playCount];
                    if (UnityEngine.MonoBehaviour.op_Inequality(anim, null) && anim.tween != null && anim.tween.active && !DG.Tweening.TweenExtensions.IsPlaying(anim.tween) && !DG.Tweening.TweenExtensions.IsComplete(anim.tween)) {
                        DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, anim.tween);
                        break;
                    }
                }
            },
            /*DG.Tweening.DOTweenAnimation.DOPlayNext end.*/

            /*DG.Tweening.DOTweenAnimation.DORewindAndPlayNext start.*/
            /**
             * Rewinds all tweens with the given ID and whose target-id is the same as the one set by this animation,
             then plays the next animation on this animation's gameObject (if any)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {void}
             */
            DORewindAndPlayNext: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewindAndPlayNext", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Rewind(this.GetTweenTarget());
                this.DOPlayNext();
            },
            /*DG.Tweening.DOTweenAnimation.DORewindAndPlayNext end.*/

            /*DG.Tweening.DOTweenAnimation.DORewindAllById start.*/
            /**
             * Rewinds all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORewindAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORewindAllById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Rewind(id);
            },
            /*DG.Tweening.DOTweenAnimation.DORewindAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DORestartById start.*/
            /**
             * Restarts all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORestartById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestartById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Restart$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DORestartById end.*/

            /*DG.Tweening.DOTweenAnimation.DORestartAllById start.*/
            /**
             * Restarts all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DORestartAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DORestartAllById", this ); }

                this._playCount = -1;
                DG.Tweening.DOTween.Restart(id);
            },
            /*DG.Tweening.DOTweenAnimation.DORestartAllById end.*/

            /*DG.Tweening.DOTweenAnimation.DOKillById start.*/
            /**
             * Kills all tweens with the given ID and whose target-id is the same as the one set by this animation
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOKillById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKillById", this ); }

                DG.Tweening.DOTween.Kill$1(this.GetTweenTarget(), id);
            },
            /*DG.Tweening.DOTweenAnimation.DOKillById end.*/

            /*DG.Tweening.DOTweenAnimation.DOKillAllById start.*/
            /**
             * Kills all tweens with the given ID (regardless of their target gameObject)
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @param   {string}    id
             * @return  {void}
             */
            DOKillAllById: function (id) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#DOKillAllById", this ); }

                DG.Tweening.DOTween.Kill(id);
            },
            /*DG.Tweening.DOTweenAnimation.DOKillAllById end.*/

            /*DG.Tweening.DOTweenAnimation.CreateEditorPreview start.*/
            /**
             * Previews the tween in the editor. Only for DOTween internal usage: don't use otherwise.
             *
             * @instance
             * @public
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {DG.Tweening.Tween}
             */
            CreateEditorPreview: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#CreateEditorPreview", this ); }

                if (UnityEngine.Application.isPlaying) {
                    return null;
                }

                // CHANGE: first param switched to TRUE otherwise changing an animation and replaying in editor would still play old one
                this.CreateTween(true, this.autoPlay);
                return this.tween;
            },
            /*DG.Tweening.DOTweenAnimation.CreateEditorPreview end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweenGO start.*/
            /**
             * Returns the gameObject whose target component should be animated
             *
             * @instance
             * @private
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {UnityEngine.GameObject}
             */
            GetTweenGO: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweenGO", this ); }

                return this.targetIsSelf ? this.gameObject : this.targetGO;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweenGO end.*/

            /*DG.Tweening.DOTweenAnimation.GetTweenTarget start.*/
            /**
             * Returns the GameObject which should be used/retrieved for SetTarget
             *
             * @instance
             * @private
             * @this DG.Tweening.DOTweenAnimation
             * @memberof DG.Tweening.DOTweenAnimation
             * @return  {UnityEngine.GameObject}
             */
            GetTweenTarget: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#GetTweenTarget", this ); }

                return this.targetIsSelf || !this.tweenTargetIsTargetGO ? this.gameObject : this.targetGO;
            },
            /*DG.Tweening.DOTweenAnimation.GetTweenTarget end.*/

            /*DG.Tweening.DOTweenAnimation.ReEvaluateRelativeTween start.*/
            ReEvaluateRelativeTween: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimation#ReEvaluateRelativeTween", this ); }

                var tweenGO = this.GetTweenGO();
                if (UnityEngine.GameObject.op_Equality(tweenGO, null)) {
                    UnityEngine.Debug.LogWarning$1(System.String.format("{0} :: This DOTweenAnimation's target/GameObject is unset: the tween will not be created.", [this.gameObject.name]), this.gameObject);
                    return;
                }
                if (this.animationType === DG.Tweening.DOTweenAnimation.AnimationType.Move) {
                    Bridge.cast(this.tween, DG.Tweening.Tweener).ChangeEndValue(tweenGO.transform.position.$clone().add( this.endValueV3 ).$clone(), true);
                } else if (this.animationType === DG.Tweening.DOTweenAnimation.AnimationType.LocalMove) {
                    Bridge.cast(this.tween, DG.Tweening.Tweener).ChangeEndValue(tweenGO.transform.localPosition.$clone().add( this.endValueV3 ).$clone(), true);
                }
            },
            /*DG.Tweening.DOTweenAnimation.ReEvaluateRelativeTween end.*/


        },
        overloads: {
            "DORestart(bool)": "DORestart$1"
        }
    });
    /*DG.Tweening.DOTweenAnimation end.*/

    /*DG.Tweening.DOTweenAnimation+AnimationType start.*/
    Bridge.define("DG.Tweening.DOTweenAnimation.AnimationType", {
        $kind: 1006,
        statics: {
            fields: {
                None: 0,
                Move: 1,
                LocalMove: 2,
                Rotate: 3,
                LocalRotate: 4,
                Scale: 5,
                Color: 6,
                Fade: 7,
                Text: 8,
                PunchPosition: 9,
                PunchRotation: 10,
                PunchScale: 11,
                ShakePosition: 12,
                ShakeRotation: 13,
                ShakeScale: 14,
                CameraAspect: 15,
                CameraBackgroundColor: 16,
                CameraFieldOfView: 17,
                CameraOrthoSize: 18,
                CameraPixelRect: 19,
                CameraRect: 20,
                UIWidthHeight: 21
            }
        }
    });
    /*DG.Tweening.DOTweenAnimation+AnimationType end.*/

    /*DG.Tweening.DOTweenAnimation+TargetType start.*/
    Bridge.define("DG.Tweening.DOTweenAnimation.TargetType", {
        $kind: 1006,
        statics: {
            fields: {
                Unset: 0,
                Camera: 1,
                CanvasGroup: 2,
                Image: 3,
                Light: 4,
                RectTransform: 5,
                Renderer: 6,
                SpriteRenderer: 7,
                Rigidbody: 8,
                Rigidbody2D: 9,
                Text: 10,
                Transform: 11,
                tk2dBaseSprite: 12,
                tk2dTextMesh: 13,
                TextMeshPro: 14,
                TextMeshProUGUI: 15
            }
        }
    });
    /*DG.Tweening.DOTweenAnimation+TargetType end.*/

    /*DG.Tweening.DOTweenAnimationExtensions start.*/
    Bridge.define("DG.Tweening.DOTweenAnimationExtensions", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenAnimationExtensions.IsSameOrSubclassOf:static start.*/
                IsSameOrSubclassOf: function (T, t) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenAnimationExtensions#IsSameOrSubclassOf", this ); }

                    return Bridge.is(t, T);
                },
                /*DG.Tweening.DOTweenAnimationExtensions.IsSameOrSubclassOf:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenAnimationExtensions end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    trans.rotation = newRot.$clone();
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return false;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DG.Tweening.DOTweenProShortcuts start.*/
    Bridge.define("DG.Tweening.DOTweenProShortcuts", {
        statics: {
            ctors: {
                ctor: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenProShortcuts#ctor", this ); }

                    // Create stub instances of custom plugins, in order to allow IL2CPP to understand they must be included in the build
                    var stub = new DG.Tweening.Plugins.SpiralPlugin();
                }
            },
            methods: {
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral:static start.*/
                /**
                 * Tweens a Transform's localPosition in a spiral shape.
                 Also stores the transform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenProShortcuts
                 * @memberof DG.Tweening.DOTweenProShortcuts
                 * @param   {UnityEngine.Transform}     target       
                 * @param   {number}                    duration     The duration of the tween
                 * @param   {?UnityEngine.Vector3}      axis         The axis around which the spiral will rotate
                 * @param   {DG.Tweening.SpiralMode}    mode         The type of spiral movement
                 * @param   {number}                    speed        Speed of the rotations
                 * @param   {number}                    frequency    Frequency of the rotation. Lower values lead to wider spirals
                 * @param   {number}                    depth        Indicates how much the tween should move along the spiral's axis
                 * @param   {boolean}                   snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOSpiral: function (target, duration, axis, mode, speed, frequency, depth, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenProShortcuts#DOSpiral", this ); }

                    if (axis === void 0) { axis = null; }
                    if (mode === void 0) { mode = 0; }
                    if (speed === void 0) { speed = 1.0; }
                    if (frequency === void 0) { frequency = 10.0; }
                    if (depth === void 0) { depth = 0.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (UnityEngine.Mathf.Approximately(speed, 0)) {
                        speed = 1;
                    }
                    if (pc.Vec3.equals( axis, null ) || pc.Vec3.equals( axis, pc.Vec3.ZERO.clone() )) {
                        axis = new pc.Vec3( 0, 0, 1 );
                    }

                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.SpiralOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, UnityEngine.Vector3, DG.Tweening.Plugins.SpiralOptions, DG.Tweening.Plugins.SpiralPlugin.Get(), function () {
                        return target.localPosition;
                    }, function (x) {
                        target.localPosition = x.$clone();
                    }, System.Nullable.getValue(axis), duration), target);

                    t.plugOptions.mode = mode;
                    t.plugOptions.speed = speed;
                    t.plugOptions.frequency = frequency;
                    t.plugOptions.depth = depth;
                    t.plugOptions.snapping = snapping;
                    return t;
                },
                /*DG.Tweening.DOTweenProShortcuts.DOSpiral:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenProShortcuts end.*/

    /*ElectricFx start.*/
    Bridge.define("ElectricFx", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Segments: 0,
                Arcs: 0,
                Interval: 0,
                Life: 0,
                CoreColor: null,
                GlowColor: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "ElectricFx#init", this ); }

                    this.CoreColor = new UnityEngine.Color();
                    this.GlowColor = new UnityEngine.Color();
                    this.Segments = 4;
                    this.Arcs = 2;
                    this.Interval = 0.09;
                    this.Life = 0.06;
                    this.CoreColor = new pc.Color( 0.9, 0.97, 1.0, 1.0 );
                    this.GlowColor = new pc.Color( 0.45, 0.75, 1.0, 0.45 );
                }
            },
            methods: {
                /*ElectricFx.Attach:static start.*/
                Attach: function (target, sprite, scale, order) {
if ( TRACE ) { TRACE( "ElectricFx#Attach", this ); }

                    var fx = target.GetComponent(ElectricFx);
                    if (!UnityEngine.Object.op_Implicit(fx)) {
                        fx = target.AddComponent(ElectricFx);
                    }
                    fx.sprite = sprite;
                    fx.scale = scale;
                    fx.order = order;
                    return fx;
                },
                /*ElectricFx.Attach:static end.*/


            }
        },
        fields: {
            sprite: null,
            scale: 0,
            order: 0,
            root: null,
            parts: null,
            cores: null,
            glows: null,
            nextArc: 0,
            hideTime: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ElectricFx#init", this ); }

                this.parts = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this.cores = new (System.Collections.Generic.List$1(UnityEngine.SpriteRenderer)).ctor();
                this.glows = new (System.Collections.Generic.List$1(UnityEngine.SpriteRenderer)).ctor();
            }
        },
        methods: {
            /*ElectricFx.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ElectricFx#Start", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.GetComponentsInChildren(UnityEngine.Collider2D));
                try {
                    while ($t.moveNext()) {
                        var c = $t.Current;
                        if (!c.isTrigger && !this.parts.contains(c.transform)) {
                            this.parts.add(c.transform);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                // Root riêng ngoài quái để không bị SortingGroup của quái che.
                this.root = new UnityEngine.GameObject.$ctor2("ElectricFx").transform;
                for (var i = 0; i < 8; i = (i + 1) | 0) {
                    this.glows.add(PowerBase.CreateSprite("Glow", this.sprite, this.root, this.order));
                    this.cores.add(PowerBase.CreateSprite("Core", this.sprite, this.root, ((this.order + 1) | 0)));
                }
                this.Hide();
            },
            /*ElectricFx.Start end.*/

            /*ElectricFx.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ElectricFx#Update", this ); }

                if (!UnityEngine.Object.op_Implicit(this.sprite) || this.parts.Count === 0) {
                    return;
                }
                if (UnityEngine.Time.time >= this.hideTime) {
                    this.Hide();
                }
                if (UnityEngine.Time.time < this.nextArc) {
                    return;
                }
                this.nextArc = UnityEngine.Time.time + ElectricFx.Interval * UnityEngine.Random.Range$1(0.7, 1.4);
                this.hideTime = UnityEngine.Time.time + ElectricFx.Life;
                var used = 0;
                for (var a = 0; a < ElectricFx.Arcs; a = (a + 1) | 0) {
                    var part = this.parts.getItem(UnityEngine.Random.Range(0, this.parts.Count));
                    if (!UnityEngine.Object.op_Implicit(part)) {
                        continue;
                    }
                    var col = part.GetComponent(UnityEngine.Collider2D);
                    var c = UnityEngine.Object.op_Implicit(col) ? UnityEngine.Vector2.FromVector3(col.bounds.center) : UnityEngine.Vector2.FromVector3(part.position);
                    var ext = UnityEngine.Object.op_Implicit(col) ? UnityEngine.Vector2.FromVector3(col.bounds.halfExtents) : pc.Vec2.ONE.clone().scale( 0.3 );
                    var p = c.$clone().add( new pc.Vec2( UnityEngine.Random.Range$1(-ext.x, ext.x), UnityEngine.Random.Range$1(-ext.y, ext.y) ) );
                    var dir = UnityEngine.Random.insideUnitCircle.clone().normalize().$clone();
                    var len = UnityEngine.Random.Range$1(0.12, 0.22) * this.scale;
                    for (var s = 0; s < ElectricFx.Segments; s = (s + 1) | 0) {
                        var n = new pc.Vec2( -dir.y, dir.x );
                        var next = p.$clone().add( dir.$clone().scale( len ) ).add( n.$clone().scale( UnityEngine.Random.Range$1(-0.6, 0.6) ).scale( len ) );
                        this.Place(this.glows.getItem(used), p, next, 0.07 * this.scale, ElectricFx.GlowColor);
                        this.Place(this.cores.getItem(used), p, next, 0.025 * this.scale, ElectricFx.CoreColor);
                        used = (used + 1) | 0;
                        p = next.$clone();
                    }
                }
            },
            /*ElectricFx.Update end.*/

            /*ElectricFx.Place start.*/
            Place: function (sr, a, b, width, color) {
if ( TRACE ) { TRACE( "ElectricFx#Place", this ); }

                var d = b.$clone().sub( a );
                var size = UnityEngine.Vector2.FromVector3(this.sprite.bounds.halfExtents.$clone().scale( 2 ).$clone());
                sr.enabled = true;
                sr.color = color.$clone();
                sr.transform.position = UnityEngine.Vector3.FromVector2((a.$clone().add( b )).scale( 0.5 ));
                sr.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, Math.atan2(d.y, d.x) * UnityEngine.Mathf.Rad2Deg );
                sr.transform.localScale = new pc.Vec3( (d.length() + width * 0.5) / size.x, width / size.y, 1 );
            },
            /*ElectricFx.Place end.*/

            /*ElectricFx.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "ElectricFx#Hide", this ); }

                for (var i = 0; i < this.cores.Count; i = (i + 1) | 0) {
                    this.cores.getItem(i).enabled = false;
                    this.glows.getItem(i).enabled = false;
                }
            },
            /*ElectricFx.Hide end.*/

            /*ElectricFx.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "ElectricFx#OnDestroy", this ); }

                if (UnityEngine.Object.op_Implicit(this.root)) {
                    UnityEngine.MonoBehaviour.Destroy(this.root.gameObject);
                }
            },
            /*ElectricFx.OnDestroy end.*/


        }
    });
    /*ElectricFx end.*/

    /*FireFx start.*/
    Bridge.define("FireFx", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                ins: null
            },
            props: {
                Ins: {
                    get: function () {
if ( TRACE ) { TRACE( "FireFx#Ins#get", this ); }

                        if (!UnityEngine.Object.op_Implicit(FireFx.ins)) {
                            FireFx.ins = new UnityEngine.GameObject.$ctor2("FireFx").AddComponent(FireFx);
                        }
                        return FireFx.ins;
                    }
                }
            },
            methods: {
                /*FireFx.Apply:static start.*/
                Apply: function (p, k) {
if ( TRACE ) { TRACE( "FireFx#Apply", this ); }

                    if (p.Frames != null && p.Frames.length > 0) {
                        p.Sr.sprite = p.Frames[(((p.FrameOffset + Bridge.Int.clip32((p.Age * p.FrameRate))) | 0)) % p.Frames.length];
                    }
                    var h = pc.math.lerp(p.Size0, p.Size1, k);
                    p.Sr.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( h ).scale( 1.0 / ( p.Sr.sprite.bounds.halfExtents.$clone().scale( 2 ).y ) );
                    var c = p.Sr.color.$clone();
                    c.a = p.Alpha0 * (1.0 - k * k); // mờ dần, nhanh hơn về cuối
                    p.Sr.color = c.$clone();
                },
                /*FireFx.Apply:static end.*/


            }
        },
        fields: {
            active: null,
            pool: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FireFx#init", this ); }

                this.active = new (System.Collections.Generic.List$1(FireFx.Particle)).ctor();
                this.pool = new (System.Collections.Generic.Queue$1(FireFx.Particle)).ctor();
            }
        },
        methods: {
            /*FireFx.Spawn start.*/
            Spawn: function (sprite, frames, frameRate, position, velocity, gravity, life, size0, size1, color, sortingOrder) {
if ( TRACE ) { TRACE( "FireFx#Spawn", this ); }

                var $t;
                var first = frames != null && frames.length > 0 ? frames[0] : sprite;
                if (!UnityEngine.Object.op_Implicit(first)) {
                    return;
                }
                var p = this.pool.Count > 0 ? this.pool.Dequeue() : ($t = new FireFx.Particle(), $t.Sr = PowerBase.CreateSprite("Fx", first, this.transform, sortingOrder), $t);
                p.Sr.sprite = first;
                p.Sr.sortingOrder = sortingOrder;
                p.Sr.color = color.$clone();
                p.Sr.transform.position = UnityEngine.Vector3.FromVector2(position.$clone());
                p.Velocity = velocity.$clone();
                p.Gravity = gravity;
                p.Age = 0;
                p.Life = UnityEngine.Mathf.Max(0.01, life);
                p.Size0 = size0;
                p.Size1 = size1;
                p.Alpha0 = color.a;
                p.Frames = frames;
                p.FrameRate = frameRate;
                p.FrameOffset = frames != null ? UnityEngine.Random.Range(0, frames.length) : 0;
                FireFx.Apply(p, 0);
                p.Sr.gameObject.SetActive(true);
                this.active.add(p);
            },
            /*FireFx.Spawn end.*/

            /*FireFx.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FireFx#Update", this ); }

                var dt = UnityEngine.Time.deltaTime;
                for (var i = (this.active.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var p = this.active.getItem(i);
                    p.Age += dt;
                    var k = p.Age / p.Life;
                    if (k >= 1) {
                        p.Sr.gameObject.SetActive(false);
                        this.active.removeAt(i);
                        this.pool.Enqueue(p);
                        continue;
                    }
                    p.Velocity.y += p.Gravity * dt;
                    p.Sr.transform.position = p.Sr.transform.position.$clone().add( UnityEngine.Vector3.FromVector2((p.Velocity.$clone().scale( dt ))) );
                    FireFx.Apply(p, k);
                }
            },
            /*FireFx.Update end.*/


        }
    });
    /*FireFx end.*/

    /*FireFx+Particle start.*/
    Bridge.define("FireFx.Particle", {
        $kind: 1002,
        fields: {
            Sr: null,
            Velocity: null,
            Gravity: 0,
            Age: 0,
            Life: 0,
            Size0: 0,
            Size1: 0,
            Alpha0: 0,
            Frames: null,
            FrameRate: 0,
            FrameOffset: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FireFx.Particle#init", this ); }

                this.Velocity = new UnityEngine.Vector2();
            }
        }
    });
    /*FireFx+Particle end.*/

    /*IFireSource start.*/
    Bridge.define("IFireSource", {
        $kind: 3
    });
    /*IFireSource end.*/

    /*PowerBase start.*/
    Bridge.define("PowerBase", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                hitBuffer: null
            },
            props: {
                UseId: {
                    get: function () {
if ( TRACE ) { TRACE( "PowerBase#UseId#get", this ); }

                        return PowerController.UseId;
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "PowerBase#init", this ); }

                    this.hitBuffer = new (System.Collections.Generic.HashSet$1(IDamageable)).ctor();
                }
            },
            methods: {
                /*PowerBase.MonsterAt:static start.*/
                MonsterAt: function (position, r) {
if ( TRACE ) { TRACE( "PowerBase#MonsterAt", this ); }

                    var $t;
                    $t = Bridge.getEnumerator(UnityEngine.Physics2D.OverlapCircleAll(position, r));
                    try {
                        while ($t.moveNext()) {
                            var col = $t.Current;
                            var t = PowerBase.GetTarget(col);
                            if (t != null) {
                                return Bridge.cast(t, MonsterController);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return null;
                },
                /*PowerBase.MonsterAt:static end.*/

                /*PowerBase.GetTarget:static start.*/
                GetTarget: function (col) {
if ( TRACE ) { TRACE( "PowerBase#GetTarget", this ); }

                    if (!UnityEngine.Object.op_Implicit(col) || col.isTrigger) {
                        return null;
                    }
                    var monster = col.GetComponentInParent(MonsterController);
                    if (UnityEngine.Object.op_Implicit(monster) && !monster.IsDead) {
                        return monster;
                    }
                    return null;
                },
                /*PowerBase.GetTarget:static end.*/

                /*PowerBase.DamageCircle:static start.*/
                DamageCircle: function (center, radius, damage, useId) {
if ( TRACE ) { TRACE( "PowerBase#DamageCircle", this ); }

                    var $t;
                    PowerBase.hitBuffer.clear();
                    var cols = UnityEngine.Physics2D.OverlapCircleAll(center, radius);
                    $t = Bridge.getEnumerator(cols);
                    try {
                        while ($t.moveNext()) {
                            var col = $t.Current;
                            var target = PowerBase.GetTarget(col);
                            if (target == null || PowerBase.hitBuffer.contains(target)) {
                                continue;
                            }
                            PowerBase.hitBuffer.add(target);
                            target.IDamageable$TakeDamage(damage, useId);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*PowerBase.DamageCircle:static end.*/

                /*PowerBase.CameraRect:static start.*/
                CameraRect: function () {
if ( TRACE ) { TRACE( "PowerBase#CameraRect", this ); }

                    var cam = UnityEngine.Camera.main;
                    var h = cam.orthographicSize;
                    var w = h * cam.aspect;
                    var p = cam.transform.position.$clone();
                    return new UnityEngine.Rect.$ctor1(p.x - w, p.y - h, w * 2, h * 2);
                },
                /*PowerBase.CameraRect:static end.*/

                /*PowerBase.CreateSprite:static start.*/
                CreateSprite: function (name, sprite, parent, order) {
if ( TRACE ) { TRACE( "PowerBase#CreateSprite", this ); }

                    var go = new UnityEngine.GameObject.$ctor2(name);
                    go.transform.SetParent(parent, false);
                    var sr = go.AddComponent(UnityEngine.SpriteRenderer);
                    sr.sprite = sprite;
                    sr.sortingOrder = order;
                    return sr;
                },
                /*PowerBase.CreateSprite:static end.*/


            }
        },
        fields: {
            useSound: null,
            cooldown: 0,
            container: null,
            baseScale: 0,
            nextUseTime: 0,
            usedThisPress: false
        },
        props: {
            Scale: {
                get: function () {
if ( TRACE ) { TRACE( "PowerBase#Scale#get", this ); }

                    return (UnityEngine.Object.op_Implicit(this.container) ? this.container.lossyScale.x : 1.0) * this.baseScale;
                }
            },
            Busy: {
                get: function () {
if ( TRACE ) { TRACE( "PowerBase#Busy#get", this ); }

                    return false;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PowerBase#init", this ); }

                this.baseScale = 1.0;
            }
        },
        methods: {
            /*PowerBase.PointerDown start.*/
            PointerDown: function (position) {
if ( TRACE ) { TRACE( "PowerBase#PointerDown", this ); }
 },
            /*PowerBase.PointerDown end.*/

            /*PowerBase.PointerHold start.*/
            PointerHold: function (position) {
if ( TRACE ) { TRACE( "PowerBase#PointerHold", this ); }
 },
            /*PowerBase.PointerHold end.*/

            /*PowerBase.PointerUp start.*/
            PointerUp: function (position) {
if ( TRACE ) { TRACE( "PowerBase#PointerUp", this ); }
 },
            /*PowerBase.PointerUp end.*/

            /*PowerBase.Cancel start.*/
            Cancel: function () {
if ( TRACE ) { TRACE( "PowerBase#Cancel", this ); }
 },
            /*PowerBase.Cancel end.*/

            /*PowerBase.SetDamage start.*/
            SetDamage: function (value) {
if ( TRACE ) { TRACE( "PowerBase#SetDamage", this ); }
 },
            /*PowerBase.SetDamage end.*/

            /*PowerBase.TryUse start.*/
            TryUse: function () {
if ( TRACE ) { TRACE( "PowerBase#TryUse", this ); }

                if (UnityEngine.Time.time < this.nextUseTime) {
                    return false;
                }
                this.nextUseTime = UnityEngine.Time.time + this.cooldown;
                if (UnityEngine.Object.op_Implicit(this.useSound)) {
                    AudioController.Ins.PlaySFX(this.useSound);
                }
                this.usedThisPress = true;
                return true;
            },
            /*PowerBase.TryUse end.*/

            /*PowerBase.ConsumeUsed start.*/
            ConsumeUsed: function () {
if ( TRACE ) { TRACE( "PowerBase#ConsumeUsed", this ); }

                var used = this.usedThisPress;
                this.usedThisPress = false;
                return used;
            },
            /*PowerBase.ConsumeUsed end.*/


        }
    });
    /*PowerBase end.*/

    /*GameController start.*/
    Bridge.define("GameController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null
            }
        },
        fields: {
            stages: null,
            speedMove: 0,
            target: null,
            index: 0,
            end: false,
            mainCamera: null,
            armorUses: 0,
            deadDelay: 0,
            keepText: null,
            OnComplete: null,
            changing: false,
            punchTutPending: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameController#init", this ); }

                this.armorUses = 1;
                this.deadDelay = 1.5;
            }
        },
        methods: {
            /*GameController.CreateIns start.*/
            CreateIns: function () {
if ( TRACE ) { TRACE( "GameController#CreateIns", this ); }

                if (UnityEngine.Object.op_Implicit(GameController.Ins) && UnityEngine.MonoBehaviour.op_Inequality(GameController.Ins, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                GameController.Ins = this;
                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
            },
            /*GameController.CreateIns end.*/

            /*GameController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameController#Awake", this ); }

                this.CreateIns();
            },
            /*GameController.Awake end.*/

            /*GameController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameController#Start", this ); }

                for (var i = 0; i < this.stages.Count; i = (i + 1) | 0) {
                    this.ApplyArmor(i);
                    if (UnityEngine.Object.op_Implicit(this.stages.getItem(i).ui)) {
                        this.stages.getItem(i).ui.SetActive(i === this.index);
                    }
                    if (UnityEngine.Object.op_Implicit(this.stages.getItem(i).armorBrokenTut)) {
                        this.stages.getItem(i).armorBrokenTut.SetActive(false);
                    }
                }
                this.ApplyStagePowers();
                this.StartStageTut();
            },
            /*GameController.Start end.*/

            /*GameController.StartStageTut start.*/
            StartStageTut: function () {
if ( TRACE ) { TRACE( "GameController#StartStageTut", this ); }

                var tut = this.stages.getItem(this.index).tutorial;
                if (UnityEngine.Object.op_Implicit(PowerController.Ins)) {
                    PowerController.Ins.StartTutorial(tut);
                }
                if (UnityEngine.Object.op_Implicit(this.keepText)) {
                    this.keepText.SetActive(!tut);
                }
            },
            /*GameController.StartStageTut end.*/

            /*GameController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameController#Update", this ); }

                if (UnityEngine.Object.op_Implicit(this.keepText) && this.keepText.activeSelf && UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.keepText.SetActive(false);
                }
                // Đã tắt power theo hướng dẫn -> hiện tut đấm.
                if (this.punchTutPending && !(UnityEngine.Object.op_Implicit(PowerController.Ins) && PowerController.Ins.HasPower)) {
                    this.punchTutPending = false;
                    this.ShowPunchTut();
                }
            },
            /*GameController.Update end.*/

            /*GameController.ApplyArmor start.*/
            ApplyArmor: function (stage) {
if ( TRACE ) { TRACE( "GameController#ApplyArmor", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.stages.getItem(stage).monsters);
                try {
                    while ($t.moveNext()) {
                        var m = $t.Current;
                        if (UnityEngine.Object.op_Implicit(m)) {
                            m.SetArmorUses(this.armorUses);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameController.ApplyArmor end.*/

            /*GameController.ApplyStagePowers start.*/
            ApplyStagePowers: function () {
if ( TRACE ) { TRACE( "GameController#ApplyStagePowers", this ); }

                if (!UnityEngine.Object.op_Implicit(PowerController.Ins)) {
                    return;
                }
                PowerController.Ins.SetLimit(this.stages.getItem(this.index).powerUses);
                PowerController.Ins.SetActivePowers(this.stages.getItem(this.index).powerCount);
            },
            /*GameController.ApplyStagePowers end.*/

            /*GameController.SetMonsterHP start.*/
            SetMonsterHP: function (stage, hp) {
if ( TRACE ) { TRACE( "GameController#SetMonsterHP", this ); }

                var $t;
                if (stage < 0 || stage >= this.stages.Count) {
                    return;
                }
                $t = Bridge.getEnumerator(this.stages.getItem(stage).monsters);
                try {
                    while ($t.moveNext()) {
                        var m = $t.Current;
                        if (UnityEngine.Object.op_Implicit(m)) {
                            m.SetMaxHP(hp);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*GameController.SetMonsterHP end.*/

            /*GameController.SetPowerUses start.*/
            SetPowerUses: function (stage, uses) {
if ( TRACE ) { TRACE( "GameController#SetPowerUses", this ); }

                if (stage < 0 || stage >= this.stages.Count) {
                    return;
                }
                this.stages.getItem(stage).powerUses = uses;
                if (stage === this.index && !this.changing && UnityEngine.Object.op_Implicit(PowerController.Ins)) {
                    PowerController.Ins.SetLimit(uses);
                }
            },
            /*GameController.SetPowerUses end.*/

            /*GameController.SetPowerCount start.*/
            SetPowerCount: function (stage, count) {
if ( TRACE ) { TRACE( "GameController#SetPowerCount", this ); }

                if (stage < 0 || stage >= this.stages.Count) {
                    return;
                }
                this.stages.getItem(stage).powerCount = count;
                if (stage === this.index && !this.changing && UnityEngine.Object.op_Implicit(PowerController.Ins)) {
                    PowerController.Ins.SetActivePowers(count);
                }
            },
            /*GameController.SetPowerCount end.*/

            /*GameController.CurrentMonster start.*/
            CurrentMonster: function () {
if ( TRACE ) { TRACE( "GameController#CurrentMonster", this ); }

                var $t;
                if (this.end || this.changing) {
                    return null;
                }
                $t = Bridge.getEnumerator(this.stages.getItem(this.index).monsters);
                try {
                    while ($t.moveNext()) {
                        var m = $t.Current;
                        if (UnityEngine.Object.op_Implicit(m) && !m.IsDead) {
                            return m;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return null;
            },
            /*GameController.CurrentMonster end.*/

            /*GameController.StageMonsters start.*/
            StageMonsters: function () {
if ( TRACE ) { TRACE( "GameController#StageMonsters", this ); }

                if (this.end || this.changing) {
                    return new (System.Collections.Generic.List$1(MonsterController)).ctor();
                }
                return new (System.Collections.Generic.List$1(MonsterController)).$ctor1(this.stages.getItem(this.index).monsters);
            },
            /*GameController.StageMonsters end.*/

            /*GameController.ArmorBroken start.*/
            ArmorBroken: function (monster) {
if ( TRACE ) { TRACE( "GameController#ArmorBroken", this ); }

                if (this.end || this.changing || !this.stages.getItem(this.index).monsters.contains(monster)) {
                    return;
                }
                if (!this.stages.getItem(this.index).monsters.TrueForAll(function (m) {
                    return m.ArmorBroken || m.IsDead;
                })) {
                    return;
                }
                this.ShowPunchTut();
            },
            /*GameController.ArmorBroken end.*/

            /*GameController.ShowPunchTut start.*/
            ShowPunchTut: function () {
if ( TRACE ) { TRACE( "GameController#ShowPunchTut", this ); }

                if (this.end || this.changing || !this.stages.getItem(this.index).tutorial) {
                    return;
                }
                // Đang chọn power: hướng dẫn tắt power trước, tắt xong mới hiện tut đấm.
                if (UnityEngine.Object.op_Implicit(PowerController.Ins) && PowerController.Ins.HasPower) {
                    this.punchTutPending = true;
                    PowerController.Ins.ShowOffTut(true);
                    return;
                }
                if (UnityEngine.Object.op_Implicit(this.stages.getItem(this.index).armorBrokenTut)) {
                    this.stages.getItem(this.index).armorBrokenTut.SetActive(true);
                }
            },
            /*GameController.ShowPunchTut end.*/

            /*GameController.MonsterDied start.*/
            MonsterDied: function (monster) {
if ( TRACE ) { TRACE( "GameController#MonsterDied", this ); }

                if (this.end || this.changing) {
                    return;
                }
                if (!this.stages.getItem(this.index).monsters.TrueForAll(function (m) {
                    return m.IsDead;
                })) {
                    return;
                }
                this.StartCoroutine$1(this.DelayChangeLevel());
            },
            /*GameController.MonsterDied end.*/

            /*GameController.DelayChangeLevel start.*/
            DelayChangeLevel: function () {
if ( TRACE ) { TRACE( "GameController#DelayChangeLevel", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.changing = true;
                                        this.punchTutPending = false;
                                        if (UnityEngine.Object.op_Implicit(PowerController.Ins)) {
                                            PowerController.Ins.SetVisible(false);
                                        } // không dùng power lúc đang đợi
                                        if (UnityEngine.Object.op_Implicit(this.stages.getItem(this.index).armorBrokenTut)) {
                                            this.stages.getItem(this.index).armorBrokenTut.SetActive(false);
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.keepText)) {
                                            this.keepText.SetActive(false);
                                        }
                                        t = 0;
                                        $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // bỏ qua cú chạm của chính frame làm quái chết
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( t < this.deadDelay && !UnityEngine.Input.GetMouseButtonDown(0) ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    t += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {
                                    $enumerator.current = this.ChangeLevel();
                                        $step = 6;
                                        return true;
                                }
                                case 6: {

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
            /*GameController.DelayChangeLevel end.*/

            /*GameController.ChangeLevel start.*/
            ChangeLevel: function () {
if ( TRACE ) { TRACE( "GameController#ChangeLevel", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.changing = true;
                                        if (UnityEngine.Object.op_Implicit(PowerController.Ins)) {
                                            PowerController.Ins.SetVisible(false);
                                        } // tắt nút power + chữ khi chuyển stage
                                        if (UnityEngine.Object.op_Implicit(this.stages.getItem(this.index).ui)) {
                                            this.stages.getItem(this.index).ui.SetActive(false);
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.stages.getItem(this.index).armorBrokenTut)) {
                                            this.stages.getItem(this.index).armorBrokenTut.SetActive(false);
                                        }
                                        if (UnityEngine.Object.op_Implicit(this.keepText)) {
                                            this.keepText.SetActive(false);
                                        }
                                        if (((this.index + 1) | 0) >= this.stages.Count) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    this.end = true;
                                        !Bridge.staticEquals(this.OnComplete, null) ? this.OnComplete() : null;
                                        return false;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return this.target.IsEmpty();
                                        }));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.index = (this.index + 1) | 0;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    if ( !pc.Vec3.equals( this.mainCamera.position, this.stages.getItem(this.index).cameraPos ) ) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 5: {
                                    this.mainCamera.position = pc.Vec3.moveTowards( this.mainCamera.position, this.stages.getItem(this.index).cameraPos, this.speedMove * UnityEngine.Time.deltaTime );
                                        $enumerator.current = null;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    
                                        $step = 4;
                                        continue;
                                }
                                case 7: {
                                    this.target.NextTarget();
                                        if (UnityEngine.Object.op_Implicit(this.stages.getItem(this.index).ui)) {
                                            this.stages.getItem(this.index).ui.SetActive(true);
                                        }
                                        this.ApplyStagePowers();
                                        if (UnityEngine.Object.op_Implicit(PowerController.Ins)) {
                                            PowerController.Ins.SetVisible(true);
                                        } // tới stage mới thì bật lại
                                        this.StartStageTut();
                                        this.changing = false;
                                        // Stage không có quái = stage giả cuối game (chỉ hiện nút ra store).
                                        if (this.stages.getItem(this.index).monsters.Count === 0) {
                                            this.end = true;
                                            !Bridge.staticEquals(this.OnComplete, null) ? this.OnComplete() : null;
                                        } else if (this.stages.getItem(this.index).monsters.TrueForAll(function (m) {
                                            return m.IsDead;
                                        })) {
                                            this.StartCoroutine$1(this.ChangeLevel());
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
            /*GameController.ChangeLevel end.*/


        }
    });
    /*GameController end.*/

    /*GameController+Stage start.*/
    Bridge.define("GameController.Stage", {
        $kind: 1002,
        fields: {
            cameraPos: null,
            monsters: null,
            ui: null,
            armorBrokenTut: null,
            powerCount: 0,
            powerUses: 0,
            tutorial: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameController.Stage#init", this ); }

                this.cameraPos = new UnityEngine.Vector3();
                this.powerCount = 4;
                this.powerUses = 4;
            }
        }
    });
    /*GameController+Stage end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*IDamageable start.*/
    Bridge.define("IDamageable", {
        $kind: 3
    });
    /*IDamageable end.*/

    /*LightningStrike start.*/
    Bridge.define("LightningStrike", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                hitBuffer: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "LightningStrike#init", this ); }

                    this.hitBuffer = new (System.Collections.Generic.HashSet$1(IDamageable)).ctor();
                }
            }
        },
        fields: {
            segmentSprite: null,
            coreColor: null,
            glowColor: null,
            coreWidth: 0,
            glowWidth: 0,
            mainSegments: 0,
            branchSegments: 0,
            branches: 0,
            jitter: 0,
            sortingOrder: 0,
            flashStrength: 0,
            groundY: 0,
            strikeSound: null,
            shakeDuration: 0,
            shakeStrength: 0,
            pool: null,
            playing: 0
        },
        props: {
            Playing: {
                get: function () {
if ( TRACE ) { TRACE( "LightningStrike#Playing#get", this ); }

                    return this.playing > 0;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LightningStrike#init", this ); }

                this.coreColor = new UnityEngine.Color();
                this.glowColor = new UnityEngine.Color();
                this.coreColor = new pc.Color( 1, 1, 1, 1 );
                this.glowColor = new pc.Color( 0.6, 0.8, 1.0, 0.35 );
                this.coreWidth = 0.035;
                this.glowWidth = 0.1;
                this.mainSegments = 18;
                this.branchSegments = 5;
                this.branches = 2;
                this.jitter = 0.22;
                this.sortingOrder = 60;
                this.flashStrength = 0.35;
                this.groundY = -4.0;
                this.shakeDuration = 0.2;
                this.shakeStrength = 0.08;
                this.pool = new (System.Collections.Generic.Queue$1(LightningStrike.Bolt)).ctor();
            }
        },
        methods: {
            /*LightningStrike.Strike start.*/
            Strike: function (target, radius, damage, scale, useId) {
if ( TRACE ) { TRACE( "LightningStrike#Strike", this ); }

                var ground = new pc.Vec2( target.x, this.groundY );
                var bolt = this.pool.Count > 0 ? this.pool.Dequeue() : this.CreateBolt();
                this.Build(bolt, ground.$clone(), scale);
                if (damage > 0) {
                    this.DamageColumn(target.x, radius * scale, damage, useId);
                }
                if (UnityEngine.Object.op_Implicit(ScreenFx.Ins)) {
                    ScreenFx.Ins.Flash(this.flashStrength);
                }
                if (UnityEngine.Object.op_Implicit(CameraShake.Ins)) {
                    CameraShake.Ins.Shake(this.shakeDuration, this.shakeStrength);
                }
                if (UnityEngine.Object.op_Implicit(this.strikeSound)) {
                    AudioController.Ins.PlaySFX(this.strikeSound);
                }
                this.playing = (this.playing + 1) | 0;
                this.StartCoroutine$1(this.Play(bolt, ground, scale));
            },
            /*LightningStrike.Strike end.*/

            /*LightningStrike.DamageColumn start.*/
            DamageColumn: function (x, halfWidth, damage, useId) {
if ( TRACE ) { TRACE( "LightningStrike#DamageColumn", this ); }

                var $t;
                var cam = PowerBase.CameraRect();
                var top = cam.yMax + 0.5;
                var center = new pc.Vec2( x, (top + this.groundY) * 0.5 );
                var size = new pc.Vec2( halfWidth * 2.0, top - this.groundY );
                LightningStrike.hitBuffer.clear();
                $t = Bridge.getEnumerator(UnityEngine.Physics2D.OverlapBoxAll(center, size, 0));
                try {
                    while ($t.moveNext()) {
                        var col = $t.Current;
                        var t = PowerBase.GetTarget(col);
                        if (t == null || LightningStrike.hitBuffer.contains(t)) {
                            continue;
                        }
                        LightningStrike.hitBuffer.add(t);
                        var m = Bridge.as(t, MonsterController);
                        if (UnityEngine.Object.op_Implicit(m)) {
                            m.TakeLightning(damage, useId);
                        } else {
                            t.IDamageable$TakeDamage(damage, useId);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*LightningStrike.DamageColumn end.*/

            /*LightningStrike.CreateBolt start.*/
            CreateBolt: function () {
if ( TRACE ) { TRACE( "LightningStrike#CreateBolt", this ); }

                var b = new LightningStrike.Bolt();
                b.Root = new UnityEngine.GameObject.$ctor2("Bolt");
                b.Root.transform.SetParent(this.transform, false);
                var total = (this.mainSegments + Bridge.Int.mul(this.branchSegments, this.branches)) | 0;
                for (var i = 0; i < total; i = (i + 1) | 0) {
                    var g = PowerBase.CreateSprite("Glow", this.segmentSprite, b.Root.transform, this.sortingOrder);
                    var c = PowerBase.CreateSprite("Core", this.segmentSprite, b.Root.transform, ((this.sortingOrder + 1) | 0));
                    b.Glows.add(g);
                    b.Cores.add(c);
                }
                return b;
            },
            /*LightningStrike.CreateBolt end.*/

            /*LightningStrike.Build start.*/
            Build: function (bolt, target, scale) {
if ( TRACE ) { TRACE( "LightningStrike#Build", this ); }

                var cam = PowerBase.CameraRect();
                var start = new pc.Vec2( target.x + UnityEngine.Random.Range$1(-0.4, 0.4), cam.yMax + 0.5 );
                var points = new (System.Collections.Generic.List$1(UnityEngine.Vector2)).ctor();
                for (var i = 0; i <= this.mainSegments; i = (i + 1) | 0) {
                    var t = i / this.mainSegments;
                    var p = new pc.Vec2().lerp( start, target, t );
                    if (i > 0 && i < this.mainSegments) {
                        p.x += UnityEngine.Random.Range$1(-this.jitter, this.jitter) * scale;
                    }
                    points.add(p.$clone());
                }

                bolt.Used = 0;
                for (var i1 = 0; i1 < this.mainSegments; i1 = (i1 + 1) | 0) {
                    this.SetSegment(bolt, points.getItem(i1), points.getItem(((i1 + 1) | 0)), scale, 1.0);
                }

                for (var b = 0; b < this.branches; b = (b + 1) | 0) {
                    var from = UnityEngine.Random.Range(2, ((this.mainSegments - 2) | 0));
                    var p1 = points.getItem(from).$clone();
                    var dir = UnityEngine.Random.value < 0.5 ? -1.0 : 1.0;
                    var len = (start.y - target.y) / this.mainSegments;
                    for (var i2 = 0; i2 < this.branchSegments; i2 = (i2 + 1) | 0) {
                        var next = p1.$clone().add( new pc.Vec2( dir * UnityEngine.Random.Range$1(0.2, 0.5) * scale, -len * UnityEngine.Random.Range$1(0.6, 1.0) ) );
                        next.y = UnityEngine.Mathf.Max(next.y, this.groundY);
                        this.SetSegment(bolt, p1, next, scale, 0.5);
                        p1 = next.$clone();
                    }
                }

                for (var i3 = bolt.Used; i3 < bolt.Cores.Count; i3 = (i3 + 1) | 0) {
                    bolt.Cores.getItem(i3).enabled = false;
                    bolt.Glows.getItem(i3).enabled = false;
                }
                bolt.Root.SetActive(true);
            },
            /*LightningStrike.Build end.*/

            /*LightningStrike.SetSegment start.*/
            SetSegment: function (bolt, a, b, scale, widthMul) {
if ( TRACE ) { TRACE( "LightningStrike#SetSegment", this ); }

                var i = Bridge.identity(bolt.Used, ((bolt.Used = (bolt.Used + 1) | 0)));
                this.Place(bolt.Glows.getItem(i), a, b, this.glowWidth * scale * widthMul, this.glowColor);
                this.Place(bolt.Cores.getItem(i), a, b, this.coreWidth * scale * widthMul, this.coreColor);
            },
            /*LightningStrike.SetSegment end.*/

            /*LightningStrike.Place start.*/
            Place: function (sr, a, b, width, color) {
if ( TRACE ) { TRACE( "LightningStrike#Place", this ); }

                var d = b.$clone().sub( a );
                var size = UnityEngine.Vector2.FromVector3(this.segmentSprite.bounds.halfExtents.$clone().scale( 2 ).$clone());
                sr.enabled = true;
                sr.color = color.$clone();
                sr.transform.position = UnityEngine.Vector3.FromVector2((a.$clone().add( b )).scale( 0.5 ));
                sr.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, Math.atan2(d.y, d.x) * UnityEngine.Mathf.Rad2Deg );
                sr.transform.localScale = new pc.Vec3( (d.length() + width * 0.5) / size.x, width / size.y, 1 );
            },
            /*LightningStrike.Place end.*/

            /*LightningStrike.Play start.*/
            Play: function (bolt, target, scale) {
if ( TRACE ) { TRACE( "LightningStrike#Play", this ); }

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
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.06);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    bolt.Root.SetActive(false);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.05);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.Build(bolt, target.$clone(), scale);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.08);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    t = 0;
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
                                        a = 1 - t / fade;
                                        for (var i = 0; i < bolt.Used; i = (i + 1) | 0) {
                                            c = this.coreColor.$clone();
                                            c.a *= a;
                                            bolt.Cores.getItem(i).color = c.$clone();
                                            g = this.glowColor.$clone();
                                            g.a *= a;
                                            bolt.Glows.getItem(i).color = g.$clone();
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
                                    bolt.Root.SetActive(false);
                                        this.pool.Enqueue(bolt);
                                        this.playing = (this.playing - 1) | 0;

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
            /*LightningStrike.Play end.*/


        }
    });
    /*LightningStrike end.*/

    /*LightningStrike+Bolt start.*/
    Bridge.define("LightningStrike.Bolt", {
        $kind: 1002,
        fields: {
            Root: null,
            Cores: null,
            Glows: null,
            Used: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LightningStrike.Bolt#init", this ); }

                this.Cores = new (System.Collections.Generic.List$1(UnityEngine.SpriteRenderer)).ctor();
                this.Glows = new (System.Collections.Generic.List$1(UnityEngine.SpriteRenderer)).ctor();
            }
        }
    });
    /*LightningStrike+Bolt end.*/

    /*LunaController start.*/
    Bridge.define("LunaController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            BGTexture: null,
            UseTime: false,
            TimePlay: 0,
            PowerStage1: 0,
            PowerStage2: 0,
            PowerUsesStage1: 0,
            PowerUsesStage2: 0,
            PowerDamage: 0,
            MonsterHPStage1: 0,
            MonsterHPStage2: 0,
            BGImage: null,
            CTA: null,
            endCard: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LunaController#init", this ); }

                this.PowerStage1 = 4;
                this.PowerStage2 = 4;
                this.PowerUsesStage1 = 4;
                this.PowerUsesStage2 = 4;
                this.PowerDamage = 2;
                this.MonsterHPStage1 = 5;
                this.MonsterHPStage2 = 7;
            }
        },
        methods: {
            /*LunaController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LunaController#Start", this ); }

                this.BGImage.texture = this.BGTexture;
                this.CTA.ForEach(Bridge.fn.bind(this, function (b) {
                    b.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickCTA));
                }));
                this.StartCoroutine$1(this.EndGame());
                GameController.Ins.OnComplete = Bridge.fn.combine(GameController.Ins.OnComplete, Bridge.fn.cacheBind(this, this.ShowEndCard));
                GameController.Ins.SetPowerCount(0, this.PowerStage1);
                GameController.Ins.SetPowerCount(1, this.PowerStage2);
                GameController.Ins.SetPowerUses(0, this.PowerUsesStage1);
                GameController.Ins.SetPowerUses(1, this.PowerUsesStage2);
                GameController.Ins.SetMonsterHP(0, this.MonsterHPStage1);
                GameController.Ins.SetMonsterHP(1, this.MonsterHPStage2);
                if (UnityEngine.Object.op_Implicit(PowerController.Ins)) {
                    PowerController.Ins.SetDamage(this.PowerDamage);
                }
            },
            /*LunaController.Start end.*/

            /*LunaController.ShowEndCard start.*/
            ShowEndCard: function () {
if ( TRACE ) { TRACE( "LunaController#ShowEndCard", this ); }

                this.endCard.SetActive(true);
            },
            /*LunaController.ShowEndCard end.*/

            /*LunaController.ClickCTA start.*/
            ClickCTA: function () {
if ( TRACE ) { TRACE( "LunaController#ClickCTA", this ); }

                Luna.Unity.Playable.InstallFullGame();
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
                                    Luna.Unity.LifeCycle.GameEnded();
                                        if (this.UseTime) {
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
            /*LunaController.EndGame end.*/


        }
    });
    /*LunaController end.*/

    /*MonsterController+ArmorBreakFx start.*/
    Bridge.define("MonsterController.ArmorBreakFx", {
        $kind: 1006,
        statics: {
            fields: {
                None: 0,
                Smoke: 1,
                Electric: 2
            }
        }
    });
    /*MonsterController+ArmorBreakFx end.*/

    /*MonsterController+Drain start.*/
    Bridge.define("MonsterController.Drain", {
        $kind: 1002,
        fields: {
            Left: 0,
            Step: 0,
            Tick: 0,
            Next: 0,
            Fx: 0,
            Sound: null
        }
    });
    /*MonsterController+Drain end.*/

    /*PowerController start.*/
    Bridge.define("PowerController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null,
                UseId: 0
            },
            methods: {
                /*PowerController.ShowUseTut:static start.*/
                ShowUseTut: function (p, on, handOnly) {
if ( TRACE ) { TRACE( "PowerController#ShowUseTut", this ); }

                    var $t;
                    if (!UnityEngine.Object.op_Implicit(p.Tutorial)) {
                        return;
                    }
                    p.Tutorial.SetActive(on);
                    if (!on) {
                        return;
                    }
                    $t = Bridge.getEnumerator(System.Array.init(["Text", "TextBG"], System.String));
                    try {
                        while ($t.moveNext()) {
                            var n = $t.Current;
                            var t = p.Tutorial.transform.Find(n);
                            if (UnityEngine.Object.op_Implicit(t)) {
                                t.gameObject.SetActive(!handOnly);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*PowerController.ShowUseTut:static end.*/

                /*PowerController.OnPlayerHand:static start.*/
                OnPlayerHand: function (screen) {
if ( TRACE ) { TRACE( "PowerController#OnPlayerHand", this ); }

                    return UnityEngine.Object.op_Implicit(TargetController.Ins) && TargetController.Ins.IsGrabPoint(screen);
                },
                /*PowerController.OnPlayerHand:static end.*/

                /*PowerController.ToWorld:static start.*/
                ToWorld: function (screen) {
if ( TRACE ) { TRACE( "PowerController#ToWorld", this ); }

                    return UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(screen)));
                },
                /*PowerController.ToWorld:static end.*/


            }
        },
        fields: {
            powers: null,
            clickSound: null,
            choiceTut: null,
            offTut: null,
            offHand: null,
            bar: null,
            powerCountText: null,
            counterText: null,
            limit: 0,
            used: 0,
            typeLimit: 0,
            busy: false,
            tutActive: false,
            useTut: false,
            reminder: false,
            powerUsed: null,
            current: null,
            hasCurrent: false,
            pressing: false
        },
        props: {
            Exhausted: {
                get: function () {
if ( TRACE ) { TRACE( "PowerController#Exhausted#get", this ); }

                    return this.limit > 0 && this.used >= this.limit;
                }
            },
            TypesLeft: {
                get: function () {
if ( TRACE ) { TRACE( "PowerController#TypesLeft#get", this ); }

                    var $t;
                    var n = this.typeLimit;
                    if (this.powerUsed != null) {
                        $t = Bridge.getEnumerator(this.powerUsed);
                        try {
                            while ($t.moveNext()) {
                                var u = $t.Current;
                                if (u) {
                                    n = (n - 1) | 0;
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                    return UnityEngine.Mathf.Max(0, n);
                }
            },
            HasPower: {
                get: function () {
if ( TRACE ) { TRACE( "PowerController#HasPower#get", this ); }

                    return this.hasCurrent;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PowerController#init", this ); }

                this.current = new PowerOption();
            }
        },
        methods: {
            /*PowerController.IsUsed start.*/
            IsUsed: function (i) {
if ( TRACE ) { TRACE( "PowerController#IsUsed", this ); }

                return this.powerUsed != null && i >= 0 && i < this.powerUsed.length && this.powerUsed[i];
            },
            /*PowerController.IsUsed end.*/

            /*PowerController.CanPick start.*/
            CanPick: function (i) {
if ( TRACE ) { TRACE( "PowerController#CanPick", this ); }

                return this.IsUsed(i) || this.TypesLeft > 0;
            },
            /*PowerController.CanPick end.*/

            /*PowerController.IndexOf start.*/
            IndexOf: function (power) {
if ( TRACE ) { TRACE( "PowerController#IndexOf", this ); }

                for (var i = 0; i < this.powers.Count; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.powers.getItem(i).$clone().Power, power)) {
                        return i;
                    }
                }
                return -1;
            },
            /*PowerController.IndexOf end.*/

            /*PowerController.AnyBusy start.*/
            AnyBusy: function () {
if ( TRACE ) { TRACE( "PowerController#AnyBusy", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.powers);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current.$clone();
                        if (UnityEngine.Object.op_Implicit(p.Power) && p.Power.Busy) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*PowerController.AnyBusy end.*/

            /*PowerController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PowerController#Awake", this ); }

                PowerController.Ins = this;
                this.powers.ForEach(Bridge.fn.bind(this, function (p) {
                    p.Button.onClick.AddListener(Bridge.fn.bind(this, function () {
                        this.Select(p);
                    }));
                }));
                this.powers.ForEach(function (p) {
                    if (UnityEngine.Object.op_Implicit(p.Selected)) {
                        p.Selected.enabled = false;
                    }
                    if (UnityEngine.Object.op_Implicit(p.Tutorial)) {
                        p.Tutorial.SetActive(false);
                    }
                });
                if (UnityEngine.Object.op_Implicit(this.choiceTut)) {
                    this.choiceTut.SetActive(false);
                }
                if (UnityEngine.Object.op_Implicit(this.offTut)) {
                    this.offTut.SetActive(false);
                }
                this.RefreshLimit();
            },
            /*PowerController.Awake end.*/

            /*PowerController.SetVisible start.*/
            SetVisible: function (visible) {
if ( TRACE ) { TRACE( "PowerController#SetVisible", this ); }

                if (!visible) {
                    this.Deselect();
                }
                if (UnityEngine.Object.op_Implicit(this.bar)) {
                    this.bar.SetActive(visible);
                }
            },
            /*PowerController.SetVisible end.*/

            /*PowerController.SetLimit start.*/
            SetLimit: function (value) {
if ( TRACE ) { TRACE( "PowerController#SetLimit", this ); }

                this.limit = UnityEngine.Mathf.Max(0, value);
                this.used = 0;
                this.RefreshLimit();
            },
            /*PowerController.SetLimit end.*/

            /*PowerController.SetDamage start.*/
            SetDamage: function (value) {
if ( TRACE ) { TRACE( "PowerController#SetDamage", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.powers);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current.$clone();
                        if (UnityEngine.Object.op_Implicit(p.Power)) {
                            p.Power.SetDamage(UnityEngine.Mathf.Max(0, value));
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*PowerController.SetDamage end.*/

            /*PowerController.SetActivePowers start.*/
            SetActivePowers: function (count) {
if ( TRACE ) { TRACE( "PowerController#SetActivePowers", this ); }

                if (count <= 0 || count > this.powers.Count) {
                    count = this.powers.Count;
                }
                this.typeLimit = count;
                this.RefreshLimit();
            },
            /*PowerController.SetActivePowers end.*/

            /*PowerController.StartTutorial start.*/
            StartTutorial: function (on) {
if ( TRACE ) { TRACE( "PowerController#StartTutorial", this ); }

                this.tutActive = on && this.powers.Count > 0;
                this.useTut = on;
                this.reminder = false;
                this.powerUsed = System.Array.init(this.powers.Count, false, System.Boolean);
                this.RefreshLimit();
                this.RefreshTut();
            },
            /*PowerController.StartTutorial end.*/

            /*PowerController.ShowOffTut start.*/
            ShowOffTut: function (on) {
if ( TRACE ) { TRACE( "PowerController#ShowOffTut", this ); }

                on = on && this.hasCurrent;
                if (on && UnityEngine.Object.op_Implicit(this.offHand) && UnityEngine.Object.op_Implicit(this.current.Button)) {
                    this.offHand.SetTargets([Bridge.cast(this.current.Button.transform, UnityEngine.RectTransform)]);
                }
                if (UnityEngine.Object.op_Implicit(this.offTut)) {
                    this.offTut.SetActive(on);
                }
            },
            /*PowerController.ShowOffTut end.*/

            /*PowerController.ShowChoiceTut start.*/
            ShowChoiceTut: function () {
if ( TRACE ) { TRACE( "PowerController#ShowChoiceTut", this ); }

                if (this.hasCurrent || this.Exhausted || (UnityEngine.Object.op_Implicit(this.bar) && !this.bar.activeInHierarchy)) {
                    return;
                }
                this.tutActive = true;
                if (!this.useTut) {
                    this.reminder = true;
                }
                this.RefreshTut();
            },
            /*PowerController.ShowChoiceTut end.*/

            /*PowerController.RefreshTut start.*/
            RefreshTut: function () {
if ( TRACE ) { TRACE( "PowerController#RefreshTut", this ); }

                if (UnityEngine.Object.op_Implicit(this.choiceTut)) {
                    this.choiceTut.SetActive(this.tutActive && !this.hasCurrent && !this.Exhausted);
                }
            },
            /*PowerController.RefreshTut end.*/

            /*PowerController.RefreshLimit start.*/
            RefreshLimit: function () {
if ( TRACE ) { TRACE( "PowerController#RefreshLimit", this ); }

                if (UnityEngine.Object.op_Implicit(this.counterText)) {
                    this.counterText.gameObject.SetActive(this.limit > 0);
                    this.counterText.text = "Used: " + this.used + "/" + this.limit;
                }
                if (UnityEngine.Object.op_Implicit(this.powerCountText)) {
                    this.powerCountText.text = "Type Power: " + this.TypesLeft;
                }
                var canUse = !this.Exhausted && !this.busy;
                for (var i = 0; i < this.powers.Count; i = (i + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.powers.getItem(i).$clone().Button)) {
                        this.powers.getItem(i).$clone().Button.interactable = canUse && this.CanPick(i);
                    }
                }
            },
            /*PowerController.RefreshLimit end.*/

            /*PowerController.CountUse start.*/
            CountUse: function () {
if ( TRACE ) { TRACE( "PowerController#CountUse", this ); }

                if (!this.current.Power.ConsumeUsed()) {
                    return;
                }
                this.used = (this.used + 1) | 0;
                var idx = this.IndexOf(this.current.Power);
                if (this.powerUsed != null && idx >= 0) {
                    this.powerUsed[idx] = true;
                }
                if (UnityEngine.Object.op_Implicit(this.current.Tutorial)) {
                    this.current.Tutorial.SetActive(false);
                } // đã dùng -> tắt hướng dẫn dùng power
                this.reminder = false;
                this.RefreshLimit();
            },
            /*PowerController.CountUse end.*/

            /*PowerController.CheckExhausted start.*/
            CheckExhausted: function () {
if ( TRACE ) { TRACE( "PowerController#CheckExhausted", this ); }

                if (!this.Exhausted || this.pressing || !this.hasCurrent) {
                    return;
                }
                this.Deselect();
            },
            /*PowerController.CheckExhausted end.*/

            /*PowerController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "PowerController#OnDisable", this ); }

                if (this.hasCurrent && this.pressing) {
                    this.current.Power.Cancel();
                }
                this.pressing = false;
            },
            /*PowerController.OnDisable end.*/

            /*PowerController.Select start.*/
            Select: function (option) {
if ( TRACE ) { TRACE( "PowerController#Select", this ); }

                if (this.Exhausted || this.busy) {
                    return;
                }
                var same = this.hasCurrent && UnityEngine.MonoBehaviour.op_Equality(this.current.Power, option.Power);
                if (!same && !this.CanPick(this.IndexOf(option.Power))) {
                    return;
                } // hết Type Power: không đổi sang loại chưa dùng
                AudioController.Ins.PlaySFX(this.clickSound);

                this.Deselect();
                if (same) {
                    this.RefreshTut();
                    return;
                }

                this.current = option.$clone();
                this.hasCurrent = true;
                this.tutActive = false; // đã chọn power -> xong hướng dẫn chọn power của stage này
                if (UnityEngine.Object.op_Implicit(this.current.Selected)) {
                    this.current.Selected.enabled = true;
                }
                // Hướng dẫn dùng power (tay trên quái + chữ) với power chưa dùng ở stage này.
                var idx = this.IndexOf(this.current.Power);
                var firstUse = this.useTut && this.powerUsed != null && idx >= 0 && !this.powerUsed[idx];
                PowerController.ShowUseTut(this.current, firstUse || this.reminder, !firstUse); // stage không tutorial (nhắc lại): chỉ bàn tay
                this.RefreshTut();
            },
            /*PowerController.Select end.*/

            /*PowerController.IsOverButton start.*/
            IsOverButton: function (screen) {
if ( TRACE ) { TRACE( "PowerController#IsOverButton", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.powers);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current.$clone();
                        if (!UnityEngine.Object.op_Implicit(p.Button) || !p.Button.gameObject.activeInHierarchy) {
                            continue;
                        }
                        if (UnityEngine.RectTransformUtility.RectangleContainsScreenPoint$1(Bridge.cast(p.Button.transform, UnityEngine.RectTransform), screen, null)) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*PowerController.IsOverButton end.*/

            /*PowerController.Deselect start.*/
            Deselect: function () {
if ( TRACE ) { TRACE( "PowerController#Deselect", this ); }

                if (!this.hasCurrent) {
                    return;
                }
                if (UnityEngine.Object.op_Implicit(this.current.Selected)) {
                    this.current.Selected.enabled = false;
                }
                this.current.Power.Cancel();
                if (UnityEngine.Object.op_Implicit(this.current.Tutorial)) {
                    this.current.Tutorial.SetActive(false);
                }
                if (UnityEngine.Object.op_Implicit(this.offTut)) {
                    this.offTut.SetActive(false);
                }
                this.hasCurrent = false;
                this.pressing = false;
                this.RefreshTut();
            },
            /*PowerController.Deselect end.*/

            /*PowerController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PowerController#Update", this ); }

                // Power trước chưa xong thì khoá nút + bỏ qua lần chạm mới (đang kéo lửa dở thì vẫn kéo tiếp được).
                var b = this.AnyBusy();
                if (b !== this.busy) {
                    this.busy = b;
                    this.RefreshLimit();
                }
                if (!this.hasCurrent) {
                    return;
                }

                if (UnityEngine.Input.touchCount > 0) {
                    var t = UnityEngine.Input.GetTouch(0);
                    if (t.phase === UnityEngine.TouchPhase.Began) {
                        if (this.busy || this.IsOverButton(t.position) || PowerController.OnPlayerHand(t.position)) {
                            return;
                        }
                        this.pressing = true;
                        PowerController.UseId = (PowerController.UseId + 1) | 0;
                        this.current.Power.PointerDown(PowerController.ToWorld(t.position));
                        this.CountUse();
                    } else if (this.pressing && (t.phase === UnityEngine.TouchPhase.Moved || t.phase === UnityEngine.TouchPhase.Stationary)) {
                        this.current.Power.PointerHold(PowerController.ToWorld(t.position));
                    } else if (this.pressing && (t.phase === UnityEngine.TouchPhase.Ended || t.phase === UnityEngine.TouchPhase.Canceled)) {
                        this.pressing = false;
                        this.current.Power.PointerUp(PowerController.ToWorld(t.position));
                    }
                    this.CheckExhausted();
                    return;
                }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (this.busy || this.IsOverButton(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition)) || PowerController.OnPlayerHand(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition))) {
                        return;
                    }
                    this.pressing = true;
                    PowerController.UseId = (PowerController.UseId + 1) | 0;
                    this.current.Power.PointerDown(PowerController.ToWorld(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition)));
                    this.CountUse();
                } else if (this.pressing && UnityEngine.Input.GetMouseButton(0)) {
                    this.current.Power.PointerHold(PowerController.ToWorld(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition)));
                } else if (this.pressing && UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.pressing = false;
                    this.current.Power.PointerUp(PowerController.ToWorld(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition)));
                }
                this.CheckExhausted();
            },
            /*PowerController.Update end.*/


        }
    });
    /*PowerController end.*/

    /*PowerOption start.*/
    Bridge.define("PowerOption", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "PowerOption#getDefaultValue", this ); }
 return new PowerOption(); }
            }
        },
        fields: {
            Button: null,
            Selected: null,
            Power: null,
            Tutorial: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "PowerOption#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "PowerOption#getHashCode", this ); }

                var h = Bridge.addHash([3663081003, this.Button, this.Selected, this.Power, this.Tutorial]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "PowerOption#equals", this ); }

                if (!Bridge.is(o, PowerOption)) {
                    return false;
                }
                return Bridge.equals(this.Button, o.Button) && Bridge.equals(this.Selected, o.Selected) && Bridge.equals(this.Power, o.Power) && Bridge.equals(this.Tutorial, o.Tutorial);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "PowerOption#$clone", this ); }

                var s = to || new PowerOption();
                s.Button = this.Button;
                s.Selected = this.Selected;
                s.Power = this.Power;
                s.Tutorial = this.Tutorial;
                return s;
            }
        }
    });
    /*PowerOption end.*/

    /*PowerTutorial start.*/
    Bridge.define("PowerTutorial", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hand: null,
            swipe: false,
            fingerOffset: null,
            swipeDistance: 0,
            speed: 0,
            pulse: 0,
            rect: null,
            handBaseScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PowerTutorial#init", this ); }

                this.fingerOffset = new UnityEngine.Vector2();
                this.handBaseScale = new UnityEngine.Vector3();
                this.swipe = true;
                this.fingerOffset = new pc.Vec2( 30.0, -45.0 );
                this.swipeDistance = 160.0;
                this.speed = 4.0;
                this.pulse = 0.15;
            }
        },
        methods: {
            /*PowerTutorial.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PowerTutorial#Awake", this ); }

                this.rect = Bridge.cast(this.transform, UnityEngine.RectTransform);
                if (UnityEngine.Object.op_Implicit(this.hand)) {
                    this.handBaseScale = this.hand.localScale.$clone();
                }
            },
            /*PowerTutorial.Awake end.*/

            /*PowerTutorial.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PowerTutorial#Update", this ); }

                var monster = UnityEngine.Object.op_Implicit(GameController.Ins) ? GameController.Ins.CurrentMonster() : null;
                if (!UnityEngine.Object.op_Implicit(this.hand)) {
                    return;
                }
                this.hand.gameObject.SetActive(UnityEngine.Object.op_Implicit(monster));
                if (!UnityEngine.Object.op_Implicit(monster)) {
                    return;
                }

                var body = monster.transform.Find("Body");
                if (!UnityEngine.Object.op_Implicit(body)) {
                    body = monster.transform;
                }
                var screen = UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.WorldToScreenPoint(body.position));
                var local = { v : new UnityEngine.Vector2() };
                if (!UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.rect, screen, null, local)) {
                    return;
                }
                var t = UnityEngine.Time.unscaledTime * this.speed;
                var move = this.swipe ? new pc.Vec2( Math.sin(t) * this.swipeDistance * 0.5, 0 ) : pc.Vec2.ZERO.clone();
                this.hand.anchoredPosition = local.v.$clone().add( this.fingerOffset ).add( move );
                this.hand.localScale = this.handBaseScale.$clone().clone().scale( (1.0 - this.pulse * 0.5 * (1.0 + Math.cos(t * 2.0))) );
            },
            /*PowerTutorial.Update end.*/


        }
    });
    /*PowerTutorial end.*/

    /*RainEffect start.*/
    Bridge.define("RainEffect", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            dropSprite: null,
            maxDrops: 0,
            velocity: null,
            dropSize: null,
            color: null,
            groundY: 0,
            fadeIn: 0,
            fadeOut: 0,
            sortingOrder: 0,
            drops: null,
            intensity: 0,
            target: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RainEffect#init", this ); }

                this.velocity = new UnityEngine.Vector2();
                this.dropSize = new UnityEngine.Vector2();
                this.color = new UnityEngine.Color();
                this.maxDrops = 80;
                this.velocity = new pc.Vec2( -3.0, -16.0 );
                this.dropSize = new pc.Vec2( 0.025, 0.45 );
                this.color = new pc.Color( 0.75, 0.85, 1.0, 0.55 );
                this.groundY = -4.5;
                this.fadeIn = 0.8;
                this.fadeOut = 1.2;
                this.sortingOrder = 50;
            }
        },
        methods: {
            /*RainEffect.Begin start.*/
            Begin: function () {
if ( TRACE ) { TRACE( "RainEffect#Begin", this ); }

                this.Init();
                this.target = 1;
                this.enabled = true;
            },
            /*RainEffect.Begin end.*/

            /*RainEffect.Stop start.*/
            Stop: function () {
if ( TRACE ) { TRACE( "RainEffect#Stop", this ); }

                this.target = 0;
            },
            /*RainEffect.Stop end.*/

            /*RainEffect.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "RainEffect#Init", this ); }

                if (this.drops != null) {
                    return;
                }
                this.drops = System.Array.init(this.maxDrops, null, UnityEngine.SpriteRenderer);
                var size = UnityEngine.Vector2.FromVector3(this.dropSprite.bounds.halfExtents.$clone().scale( 2 ).$clone());
                var angle = Math.atan2(this.velocity.y, this.velocity.x) * UnityEngine.Mathf.Rad2Deg + 90.0;
                for (var i = 0; i < this.maxDrops; i = (i + 1) | 0) {
                    var sr = PowerBase.CreateSprite("Drop", this.dropSprite, this.transform, this.sortingOrder);
                    sr.color = this.color.$clone();
                    sr.transform.localScale = new pc.Vec3( this.dropSize.x / size.x, this.dropSize.y / size.y, 1 );
                    sr.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, angle );
                    sr.gameObject.SetActive(false);
                    this.drops[i] = sr;
                }
            },
            /*RainEffect.Init end.*/

            /*RainEffect.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RainEffect#Update", this ); }

                if (this.drops == null) {
                    return;
                }
                var speed = this.target > this.intensity ? 1.0 / this.fadeIn : 1.0 / this.fadeOut;
                this.intensity = UnityEngine.Mathf.MoveTowards(this.intensity, this.target, speed * UnityEngine.Time.deltaTime);
                var wanted = Math.round(this.maxDrops * this.intensity);

                var cam = PowerBase.CameraRect();
                var bottom = UnityEngine.Mathf.Max(this.groundY, cam.yMin);
                var any = false;
                for (var i = 0; i < this.drops.length; i = (i + 1) | 0) {
                    var t = this.drops[i].transform;
                    var alive = this.drops[i].gameObject.activeSelf;
                    if (!alive) {
                        if (i >= wanted) {
                            continue;
                        }
                        this.Respawn(t, cam, true);
                        this.drops[i].gameObject.SetActive(true);
                    }
                    any = true;
                    t.position = t.position.$clone().add( UnityEngine.Vector3.FromVector2((this.velocity.$clone().scale( UnityEngine.Time.deltaTime ))) );
                    if (t.position.y < bottom) {
                        if (i < wanted) {
                            this.Respawn(t, cam, false);
                        } else {
                            this.drops[i].gameObject.SetActive(false);
                        }
                    }
                }
                if (!any && this.target === 0) {
                    this.enabled = false;
                }
            },
            /*RainEffect.Update end.*/

            /*RainEffect.Respawn start.*/
            Respawn: function (t, cam, spread) {
if ( TRACE ) { TRACE( "RainEffect#Respawn", this ); }

                // Lệch sang phải để bù gió thổi sang trái.
                var drift = -this.velocity.x / -this.velocity.y * cam.height;
                var x = UnityEngine.Random.Range$1(cam.xMin, cam.xMax + drift);
                var y = spread ? UnityEngine.Random.Range$1(cam.yMax, cam.yMax + cam.height * 0.5) : cam.yMax + UnityEngine.Random.Range$1(0.0, 1.0);
                t.position = new pc.Vec3( x, y, 0 );
            },
            /*RainEffect.Respawn end.*/


        }
    });
    /*RainEffect end.*/

    /*ScreenFx start.*/
    Bridge.define("ScreenFx", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null
            },
            methods: {
                /*ScreenFx.SetAlpha:static start.*/
                SetAlpha: function (img, a) {
if ( TRACE ) { TRACE( "ScreenFx#SetAlpha", this ); }

                    if (!UnityEngine.Object.op_Implicit(img)) {
                        return;
                    }
                    var c = img.color.$clone();
                    c.a = a;
                    img.color = c.$clone();
                    img.enabled = a > 0.001;
                },
                /*ScreenFx.SetAlpha:static end.*/


            }
        },
        fields: {
            dark: null,
            flash: null,
            darkRoutine: null,
            flashRoutine: null
        },
        methods: {
            /*ScreenFx.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ScreenFx#Awake", this ); }

                ScreenFx.Ins = this;
                ScreenFx.SetAlpha(this.dark, 0);
                ScreenFx.SetAlpha(this.flash, 0);
            },
            /*ScreenFx.Awake end.*/

            /*ScreenFx.SetDark start.*/
            SetDark: function (alpha, duration) {
if ( TRACE ) { TRACE( "ScreenFx#SetDark", this ); }

                if (this.darkRoutine != null) {
                    this.StopCoroutine$2(this.darkRoutine);
                }
                this.darkRoutine = this.StartCoroutine$1(this.Fade(this.dark, alpha, duration));
            },
            /*ScreenFx.SetDark end.*/

            /*ScreenFx.Flash start.*/
            Flash: function (strength) {
if ( TRACE ) { TRACE( "ScreenFx#Flash", this ); }

                if (this.flashRoutine != null) {
                    this.StopCoroutine$2(this.flashRoutine);
                }
                this.flashRoutine = this.StartCoroutine$1(this.FlashRoutine(strength));
            },
            /*ScreenFx.Flash end.*/

            /*ScreenFx.FlashRoutine start.*/
            FlashRoutine: function (strength) {
if ( TRACE ) { TRACE( "ScreenFx#FlashRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    ScreenFx.SetAlpha(this.flash, strength);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.05);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    ScreenFx.SetAlpha(this.flash, 0);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.05);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    ScreenFx.SetAlpha(this.flash, strength * 0.7);
                                        $enumerator.current = this.Fade(this.flash, 0, 0.25);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {

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
            /*ScreenFx.FlashRoutine end.*/

            /*ScreenFx.Fade start.*/
            Fade: function (img, to, duration) {
if ( TRACE ) { TRACE( "ScreenFx#Fade", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    from,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (!UnityEngine.Object.op_Implicit(img)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    from = img.color.a;
                                        t = 0;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( t < duration ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime;
                                        ScreenFx.SetAlpha(img, pc.math.lerp(from, to, t / duration));
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    ScreenFx.SetAlpha(img, to);

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
            /*ScreenFx.Fade end.*/


        }
    });
    /*ScreenFx end.*/

    /*SwipeHandTut start.*/
    Bridge.define("SwipeHandTut", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hand: null,
            target: null,
            fingerOffset: null,
            pressTime: 0,
            moveTime: 0,
            stayTime: 0,
            pressScale: 0,
            fallbackDistance: 0,
            rect: null,
            baseScale: null,
            time: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SwipeHandTut#init", this ); }

                this.fingerOffset = new UnityEngine.Vector2();
                this.baseScale = new UnityEngine.Vector3();
                this.fingerOffset = new pc.Vec2( 20.0, -110.0 );
                this.pressTime = 0.35;
                this.moveTime = 0.8;
                this.stayTime = 0.35;
                this.pressScale = 0.85;
                this.fallbackDistance = 2.0;
            }
        },
        methods: {
            /*SwipeHandTut.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SwipeHandTut#Awake", this ); }

                this.rect = Bridge.cast(this.transform, UnityEngine.RectTransform);
                if (UnityEngine.Object.op_Implicit(this.hand)) {
                    this.baseScale = this.hand.localScale.$clone();
                }
            },
            /*SwipeHandTut.Awake end.*/

            /*SwipeHandTut.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SwipeHandTut#OnEnable", this ); }

                this.time = 0;
            },
            /*SwipeHandTut.OnEnable end.*/

            /*SwipeHandTut.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SwipeHandTut#Update", this ); }

                if (!UnityEngine.Object.op_Implicit(this.hand) || !UnityEngine.Object.op_Implicit(this.target)) {
                    return;
                }
                var from = this.target.CurrentHand;
                this.hand.gameObject.SetActive(UnityEngine.Object.op_Implicit(from));
                if (!UnityEngine.Object.op_Implicit(from)) {
                    return;
                }

                var start = UnityEngine.Vector2.FromVector3(from.position.$clone());
                var monster = UnityEngine.Object.op_Implicit(GameController.Ins) ? GameController.Ins.CurrentMonster() : null;
                var end = start.$clone().add( pc.Vec2.RIGHT.clone().scale( this.fallbackDistance ) );
                if (UnityEngine.Object.op_Implicit(monster)) {
                    var body = monster.transform.Find("Body");
                    end = UnityEngine.Vector2.FromVector3((UnityEngine.Object.op_Implicit(body) ? body : monster.transform).position.$clone());
                }

                this.time = (this.time + UnityEngine.Time.unscaledDeltaTime) % (this.pressTime + this.moveTime + this.stayTime);
                var world = new UnityEngine.Vector2();
                var press;
                if (this.time < this.pressTime) {
                    world = start.$clone();
                    press = this.time / this.pressTime;
                } else if (this.time < this.pressTime + this.moveTime) {
                    world = new pc.Vec2().lerp( start, end, pc.math.smoothstep(0, 1, (this.time - this.pressTime) / this.moveTime) );
                    press = 1;
                } else {
                    world = end.$clone();
                    press = 1 - (this.time - this.pressTime - this.moveTime) / this.stayTime;
                }

                var local = { v : new UnityEngine.Vector2() };
                var screen = UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.WorldToScreenPoint(UnityEngine.Vector3.FromVector2(world)));
                if (!UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.rect, screen, null, local)) {
                    return;
                }
                this.hand.anchoredPosition = local.v.$clone().add( this.fingerOffset );
                this.hand.localScale = this.baseScale.$clone().clone().scale( pc.math.lerp(1.0, this.pressScale, press) );
            },
            /*SwipeHandTut.Update end.*/


        }
    });
    /*SwipeHandTut end.*/

    /*TargetController start.*/
    Bridge.define("TargetController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null
            },
            methods: {
                /*TargetController.PointerOverUI:static start.*/
                PointerOverUI: function () {
if ( TRACE ) { TRACE( "TargetController#PointerOverUI", this ); }

                    return UnityEngine.Object.op_Implicit(PowerController.Ins) && PowerController.Ins.IsOverButton(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
                },
                /*TargetController.PointerOverUI:static end.*/


            }
        },
        fields: {
            listTarget: null,
            currentTarget: null,
            index: 0,
            tut: null,
            grabRadius: 0,
            pressing: false,
            tutSeen: false
        },
        props: {
            CurrentHand: {
                get: function () {
if ( TRACE ) { TRACE( "TargetController#CurrentHand#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.currentTarget) ? this.currentTarget.transform : null;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TargetController#init", this ); }

                this.grabRadius = 0.2;
            }
        },
        methods: {
            /*TargetController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "TargetController#Awake", this ); }

                TargetController.Ins = this;
            },
            /*TargetController.Awake end.*/

            /*TargetController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TargetController#Start", this ); }

                this.currentTarget = this.listTarget.getItem(0);
            },
            /*TargetController.Start end.*/

            /*TargetController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "TargetController#Update", this ); }

                this.CheckInput();
            },
            /*TargetController.Update end.*/

            /*TargetController.CheckInput start.*/
            CheckInput: function () {
if ( TRACE ) { TRACE( "TargetController#CheckInput", this ); }

                // Tut đấm đang hiện (che màn hình) thì chạm bất kỳ đâu cũng tắt tut.
                var tutShown = UnityEngine.Object.op_Implicit(this.tut) && this.tut.activeInHierarchy && this.tutSeen;
                if (tutShown && UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.tut.SetActive(false);
                } // ẩn (không xoá) để stage sau hiện lại
                this.tutSeen = UnityEngine.Object.op_Implicit(this.tut) && this.tut.activeInHierarchy;

                // Chỉ kéo khi chạm vào tay player (kể cả khi đang chọn power); chạm vào nút power thì không kéo.
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.pressing = !TargetController.PointerOverUI() && this.TouchingHand(UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Input.mousePosition)));
                }
                if (this.pressing && UnityEngine.Input.GetMouseButton(0)) {
                    var point = UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Input.mousePosition));
                    this.SetTargetPoint(point);
                }
                if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.pressing = false;
                    this.RemoveTargetPoint();
                }
            },
            /*TargetController.CheckInput end.*/

            /*TargetController.IsGrabPoint start.*/
            IsGrabPoint: function (screen) {
if ( TRACE ) { TRACE( "TargetController#IsGrabPoint", this ); }

                return this.TouchingHand(UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(screen))));
            },
            /*TargetController.IsGrabPoint end.*/

            /*TargetController.TouchingHand start.*/
            TouchingHand: function (point) {
if ( TRACE ) { TRACE( "TargetController#TouchingHand", this ); }

                var $t;
                if (!UnityEngine.Object.op_Implicit(this.currentTarget)) {
                    return false;
                }
                var hand = this.currentTarget.transform;
                $t = Bridge.getEnumerator(UnityEngine.Physics2D.OverlapCircleAll(point, this.grabRadius));
                try {
                    while ($t.moveNext()) {
                        var c = $t.Current;
                        if (c.transform.IsChildOf(hand) || UnityEngine.Component.op_Equality(c.attachedRigidbody, this.currentTarget.attachedRigidbody)) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*TargetController.TouchingHand end.*/

            /*TargetController.SetTargetPoint start.*/
            SetTargetPoint: function (point) {
if ( TRACE ) { TRACE( "TargetController#SetTargetPoint", this ); }

                if (!UnityEngine.Object.op_Implicit(this.currentTarget)) {
                    return;
                }
                this.currentTarget.target = point.$clone();
                this.currentTarget.enabled = true;
            },
            /*TargetController.SetTargetPoint end.*/

            /*TargetController.RemoveTargetPoint start.*/
            RemoveTargetPoint: function () {
if ( TRACE ) { TRACE( "TargetController#RemoveTargetPoint", this ); }

                if (!UnityEngine.Object.op_Implicit(this.currentTarget)) {
                    return;
                }
                this.currentTarget.enabled = false;
            },
            /*TargetController.RemoveTargetPoint end.*/

            /*TargetController.RemoveTarget start.*/
            RemoveTarget: function () {
if ( TRACE ) { TRACE( "TargetController#RemoveTarget", this ); }

                if (UnityEngine.Object.op_Implicit(this.currentTarget)) {
                    this.RemoveTargetPoint();
                }
                this.currentTarget = null;
            },
            /*TargetController.RemoveTarget end.*/

            /*TargetController.NextTarget start.*/
            NextTarget: function () {
if ( TRACE ) { TRACE( "TargetController#NextTarget", this ); }

                if (this.index >= this.listTarget.Count) {
                    return;
                }
                if (UnityEngine.Object.op_Implicit(this.currentTarget)) {
                    this.currentTarget.gameObject.SetActive(false);
                }
                this.index = (this.index + 1) | 0;
                this.currentTarget = this.index < this.listTarget.Count ? this.listTarget.getItem(this.index) : null;
            },
            /*TargetController.NextTarget end.*/

            /*TargetController.IsEmpty start.*/
            IsEmpty: function () {
if ( TRACE ) { TRACE( "TargetController#IsEmpty", this ); }

                return !UnityEngine.Object.op_Implicit(this.currentTarget) || !this.currentTarget.enabled;
            },
            /*TargetController.IsEmpty end.*/


        }
    });
    /*TargetController end.*/

    /*TornadoPower+Phase start.*/
    Bridge.define("TornadoPower.Phase", {
        $kind: 1006,
        statics: {
            fields: {
                Lift: 0,
                Fall: 1,
                Fade: 2
            }
        }
    });
    /*TornadoPower+Phase end.*/

    /*TornadoPower+Tornado start.*/
    Bridge.define("TornadoPower.Tornado", {
        $kind: 1002,
        fields: {
            Root: null,
            Layers: null,
            Time: 0,
            Scale: 0,
            CenterX: 0,
            UseId: 0,
            Target: null,
            Body: null,
            BaseY: 0,
            Phase: 0,
            PhaseTime: 0,
            Bodies: null,
            Gravity: null
        }
    });
    /*TornadoPower+Tornado end.*/

    /*VFXController start.*/
    Bridge.define("VFXController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null
            }
        },
        fields: {
            bloodPrefab: null,
            bloodPool: null,
            pool: null
        },
        methods: {
            /*VFXController.CreateIns start.*/
            CreateIns: function () {
if ( TRACE ) { TRACE( "VFXController#CreateIns", this ); }

                if (UnityEngine.Object.op_Implicit(VFXController.Ins) && UnityEngine.MonoBehaviour.op_Inequality(VFXController.Ins, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                VFXController.Ins = this;
                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
            },
            /*VFXController.CreateIns end.*/

            /*VFXController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "VFXController#Awake", this ); }

                this.CreateIns();
                this.BootstrapPool();
            },
            /*VFXController.Awake end.*/

            /*VFXController.BootstrapPool start.*/
            BootstrapPool: function () {
if ( TRACE ) { TRACE( "VFXController#BootstrapPool", this ); }

                this.bloodPool = new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).ctor();
                this.bloodPool.Enqueue(this.CreateNewVFX());
                this.bloodPool.Enqueue(this.CreateNewVFX());
                this.bloodPool.Enqueue(this.CreateNewVFX());
                this.bloodPool.Enqueue(this.CreateNewVFX());
                this.bloodPool.Enqueue(this.CreateNewVFX());
            },
            /*VFXController.BootstrapPool end.*/

            /*VFXController.CreateNewVFX start.*/
            CreateNewVFX: function () {
if ( TRACE ) { TRACE( "VFXController#CreateNewVFX", this ); }

                var vfx = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.bloodPrefab);
                vfx.transform.SetParent(this.pool);
                return vfx;
            },
            /*VFXController.CreateNewVFX end.*/

            /*VFXController.GetFreeVFX start.*/
            GetFreeVFX: function () {
if ( TRACE ) { TRACE( "VFXController#GetFreeVFX", this ); }

                if (this.bloodPool.Count > 0) {
                    return this.bloodPool.Dequeue();
                }
                return this.CreateNewVFX();
            },
            /*VFXController.GetFreeVFX end.*/

            /*VFXController.SpawnVFX start.*/
            SpawnVFX: function (position) {
if ( TRACE ) { TRACE( "VFXController#SpawnVFX", this ); }

                var vfx = this.GetFreeVFX();
                vfx.transform.position = UnityEngine.Vector3.FromVector2(position.$clone());
                vfx.SetActive(true);
                this.StartCoroutine$1(this.ReturnToPool(vfx));
            },
            /*VFXController.SpawnVFX end.*/

            /*VFXController.ReturnToPool start.*/
            ReturnToPool: function (blood) {
if ( TRACE ) { TRACE( "VFXController#ReturnToPool", this ); }

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
                                    blood.SetActive(false);
                                        this.bloodPool.Enqueue(blood);

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
            /*VFXController.ReturnToPool end.*/


        }
    });
    /*VFXController end.*/

    /*FirePower start.*/
    Bridge.define("FirePower", {
        inherits: [PowerBase,IFireSource],
        fields: {
            frames: null,
            frameRate: 0,
            igniteRadius: 0,
            burnDamage: 0,
            burnInterval: 0,
            burnDuration: 0,
            emberSprite: null,
            smokeSprite: null
        },
        props: {
            Frames: {
                get: function () {
if ( TRACE ) { TRACE( "FirePower#Frames#get", this ); }

                    return this.frames;
                }
            },
            FrameRate: {
                get: function () {
if ( TRACE ) { TRACE( "FirePower#FrameRate#get", this ); }

                    return this.frameRate;
                }
            },
            WorldScale: {
                get: function () {
if ( TRACE ) { TRACE( "FirePower#WorldScale#get", this ); }

                    return this.Scale;
                }
            },
            EmberSprite: {
                get: function () {
if ( TRACE ) { TRACE( "FirePower#EmberSprite#get", this ); }

                    return this.emberSprite;
                }
            },
            SmokeSprite: {
                get: function () {
if ( TRACE ) { TRACE( "FirePower#SmokeSprite#get", this ); }

                    return this.smokeSprite;
                }
            },
            Busy: {
                get: function () {
if ( TRACE ) { TRACE( "FirePower#Busy#get", this ); }

                    return Burning.ActiveCount > 0;
                }
            }
        },
        alias: [
            "Frames", "IFireSource$Frames",
            "FrameRate", "IFireSource$FrameRate",
            "WorldScale", "IFireSource$WorldScale",
            "EmberSprite", "IFireSource$EmberSprite",
            "SmokeSprite", "IFireSource$SmokeSprite"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FirePower#init", this ); }

                this.frameRate = 12.0;
                this.igniteRadius = 0.35;
                this.burnDamage = 2;
                this.burnInterval = 0.4;
                this.burnDuration = 3.0;
            }
        },
        methods: {
            /*FirePower.SetDamage start.*/
            SetDamage: function (value) {
if ( TRACE ) { TRACE( "FirePower#SetDamage", this ); }

                this.burnDamage = value;
            },
            /*FirePower.SetDamage end.*/

            /*FirePower.PointerDown start.*/
            PointerDown: function (position) {
if ( TRACE ) { TRACE( "FirePower#PointerDown", this ); }

                if (!UnityEngine.Object.op_Implicit(PowerBase.MonsterAt(position, this.igniteRadius * this.Scale))) {
                    return;
                } // phải chạm vào quái
                if (!this.TryUse()) {
                    return;
                }
                this.Ignite(position);
            },
            /*FirePower.PointerDown end.*/

            /*FirePower.Ignite start.*/
            Ignite: function (position) {
if ( TRACE ) { TRACE( "FirePower#Ignite", this ); }

                var $t;
                var cols = UnityEngine.Physics2D.OverlapCircleAll(position, this.igniteRadius * this.Scale);
                $t = Bridge.getEnumerator(cols);
                try {
                    while ($t.moveNext()) {
                        var col = $t.Current;
                        var target = PowerBase.GetTarget(col);
                        if (target == null) {
                            continue;
                        }
                        Burning.Ignite(target, this, col, position, this.burnDamage, this.burnInterval, this.burnDuration, PowerBase.UseId);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*FirePower.Ignite end.*/


        }
    });
    /*FirePower end.*/

    /*LightningPower start.*/
    Bridge.define("LightningPower", {
        inherits: [PowerBase],
        fields: {
            strike: null,
            radius: 0,
            damage: 0,
            touchRadius: 0
        },
        props: {
            Busy: {
                get: function () {
if ( TRACE ) { TRACE( "LightningPower#Busy#get", this ); }

                    return this.strike.Playing;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LightningPower#init", this ); }

                this.radius = 0.8;
                this.damage = 5;
                this.touchRadius = 0.3;
            }
        },
        methods: {
            /*LightningPower.SetDamage start.*/
            SetDamage: function (value) {
if ( TRACE ) { TRACE( "LightningPower#SetDamage", this ); }

                this.damage = value;
            },
            /*LightningPower.SetDamage end.*/

            /*LightningPower.PointerDown start.*/
            PointerDown: function (position) {
if ( TRACE ) { TRACE( "LightningPower#PointerDown", this ); }

                if (!UnityEngine.Object.op_Implicit(PowerBase.MonsterAt(position, this.touchRadius * this.Scale))) {
                    return;
                }
                if (!this.TryUse()) {
                    return;
                }
                this.strike.Strike(position, this.radius, this.damage, this.Scale, PowerBase.UseId);
            },
            /*LightningPower.PointerDown end.*/


        }
    });
    /*LightningPower end.*/

    /*MonsterController start.*/
    Bridge.define("MonsterController", {
        inherits: [UnityEngine.MonoBehaviour,IDamageable],
        statics: {
            fields: {
                SmokeColor: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "MonsterController#init", this ); }

                    this.SmokeColor = new UnityEngine.Color();
                    this.SmokeColor = new pc.Color( 0.18, 0.18, 0.18, 0.85 );
                }
            }
        },
        fields: {
            joint: null,
            anchorAtStart: false,
            rb: null,
            deadSFX: null,
            force: null,
            maxHP: 0,
            maxArmor: 0,
            hp: 0,
            armor: 0,
            bars: null,
            head: null,
            barOffset: null,
            hpFill: null,
            dismemberSpeed: null,
            dismemberSpin: 0,
            hpSmoothTime: 0,
            armorSmoothTime: 0,
            armorFill: null,
            armorBar: null,
            armorIcon: null,
            fxSprite: null,
            electricSprite: null,
            fxScale: 0,
            armorBreakSFX: null,
            lightningDrainTime: 0,
            lightningDrainTick: 0,
            smokeInterval: 0,
            isDead: false,
            electricHit: false,
            activeFx: 0,
            armorBroken: false,
            nextSmoke: 0,
            shownHP: 0,
            hpSpeed: 0,
            shownArmor: 0,
            armorSpeed: 0,
            parts: null,
            armorPerUse: false,
            armorHits: null,
            armorF: 0,
            drains: null
        },
        props: {
            IsDead: {
                get: function () {
if ( TRACE ) { TRACE( "MonsterController#IsDead#get", this ); }

                    return this.isDead;
                }
            },
            HP: {
                get: function () {
if ( TRACE ) { TRACE( "MonsterController#HP#get", this ); }

                    return this.hp;
                }
            },
            Armor: {
                get: function () {
if ( TRACE ) { TRACE( "MonsterController#Armor#get", this ); }

                    return this.armor;
                }
            },
            MaxArmor: {
                get: function () {
if ( TRACE ) { TRACE( "MonsterController#MaxArmor#get", this ); }

                    return this.maxArmor;
                }
            },
            ArmorBroken: {
                get: function () {
if ( TRACE ) { TRACE( "MonsterController#ArmorBroken#get", this ); }

                    return this.armorBroken;
                }
            },
            ArmorDamaged: {
                get: function () {
if ( TRACE ) { TRACE( "MonsterController#ArmorDamaged#get", this ); }

                    return this.armorHits.Count > 0 || this.armorF < this.maxArmor;
                }
            }
        },
        alias: ["TakeDamage", "IDamageable$TakeDamage"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MonsterController#init", this ); }

                this.force = new UnityEngine.Vector2();
                this.barOffset = new UnityEngine.Vector3();
                this.dismemberSpeed = new UnityEngine.Vector2();
                this.force = new pc.Vec2( 1000, 1000 );
                this.maxHP = 5;
                this.maxArmor = 10;
                this.barOffset = new pc.Vec3( 0, 1.4, 0 );
                this.dismemberSpeed = new pc.Vec2( 1.5, 3.0 );
                this.dismemberSpin = 240.0;
                this.hpSmoothTime = 0.35;
                this.armorSmoothTime = 0.2;
                this.fxScale = 2.0;
                this.lightningDrainTime = 0.5;
                this.lightningDrainTick = 0.1;
                this.smokeInterval = 0.12;
                this.armorHits = new (System.Collections.Generic.HashSet$1(System.Int32)).ctor();
                this.drains = new (System.Collections.Generic.List$1(MonsterController.Drain)).ctor();
            }
        },
        methods: {
            /*MonsterController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MonsterController#Start", this ); }

                this.hp = this.maxHP;
                this.shownHP = this.maxHP;
                this.armor = this.maxArmor;
                this.armorF = this.maxArmor;
                this.shownArmor = this.maxArmor;
                this.armorBroken = this.maxArmor <= 0;
                this.parts = this.GetComponentsInChildren(UnityEngine.Collider2D);
                if (UnityEngine.Object.op_Implicit(this.armorBar)) {
                    this.armorBar.SetActive(this.maxArmor > 0);
                }
                if (UnityEngine.Object.op_Implicit(this.armorIcon)) {
                    this.armorIcon.SetActive(this.maxArmor > 0);
                }
                if (UnityEngine.Object.op_Implicit(this.joint) && this.anchorAtStart) {
                    this.joint.target = UnityEngine.Vector2.FromVector3(this.joint.transform.TransformPoint$1(UnityEngine.Vector3.FromVector2(this.joint.anchor)));
                    this.joint.enabled = true;
                }
                this.UpdateBars();
            },
            /*MonsterController.Start end.*/

            /*MonsterController.SetMaxHP start.*/
            SetMaxHP: function (value) {
if ( TRACE ) { TRACE( "MonsterController#SetMaxHP", this ); }

                if (value <= 0 || this.isDead) {
                    return;
                }
                this.maxHP = value;
                this.hp = value;
                this.shownHP = value;
                this.UpdateBars();
            },
            /*MonsterController.SetMaxHP end.*/

            /*MonsterController.SetArmorUses start.*/
            SetArmorUses: function (uses) {
if ( TRACE ) { TRACE( "MonsterController#SetArmorUses", this ); }

                if (uses <= 0) {
                    return;
                }
                this.armorPerUse = true;
                this.maxArmor = uses;
                this.armor = uses;
                this.armorF = uses;
                this.shownArmor = uses; // đổi giáp tối đa: hiện ngay, không tụt
                this.armorBroken = false;
                this.armorHits.clear();
                this.drains.clear();
                if (UnityEngine.Object.op_Implicit(this.armorBar)) {
                    this.armorBar.SetActive(true);
                }
                if (UnityEngine.Object.op_Implicit(this.armorIcon)) {
                    this.armorIcon.SetActive(true);
                }
                this.UpdateBars();
            },
            /*MonsterController.SetArmorUses end.*/

            /*MonsterController.DrainArmor start.*/
            DrainArmor: function (useId, time, tick, fx, sound) {
if ( TRACE ) { TRACE( "MonsterController#DrainArmor", this ); }

                var $t;
                if (tick === void 0) { tick = 0.25; }
                if (fx === void 0) { fx = 0; }
                if (sound === void 0) { sound = null; }
                if (this.isDead || !this.armorPerUse || this.armorF <= 0 || this.armorHits.contains(useId)) {
                    return;
                }
                this.armorHits.add(useId);
                if (time <= 0 || tick <= 0) {
                    if (UnityEngine.Object.op_Implicit(sound)) {
                        AudioController.Ins.PlaySFX(sound);
                    }
                    this.SubArmor(1.0, fx);
                    return;
                }
                var steps = UnityEngine.Mathf.Max(1, Math.floor(time / tick + 0.001));
                this.drains.add(($t = new MonsterController.Drain(), $t.Left = 1.0, $t.Step = 1.0 / steps, $t.Tick = tick, $t.Next = UnityEngine.Time.time + tick, $t.Fx = fx, $t.Sound = sound, $t));
            },
            /*MonsterController.DrainArmor end.*/

            /*MonsterController.TakeLightning start.*/
            TakeLightning: function (amount, useId) {
if ( TRACE ) { TRACE( "MonsterController#TakeLightning", this ); }

                this.electricHit = true;
                this.TakeDamage(amount, useId);
                this.electricHit = false;
            },
            /*MonsterController.TakeLightning end.*/

            /*MonsterController.TakeDamage start.*/
            TakeDamage: function (amount, useId) {
if ( TRACE ) { TRACE( "MonsterController#TakeDamage", this ); }

                if (this.isDead || amount <= 0) {
                    return;
                }
                if (this.armorF > 0) {
                    var fx = this.electricHit ? MonsterController.ArmorBreakFx.Electric : MonsterController.ArmorBreakFx.None;
                    if (this.armorPerUse) {
                        if (this.electricHit) {
                            this.DrainArmor(useId, this.lightningDrainTime, this.lightningDrainTick, fx);
                        } else {
                            this.DrainArmor(useId, 0, 0, fx);
                        }
                    } else {
                        this.armorHits.add(useId);
                        this.SubArmor(amount, fx);
                    }
                    return;
                }
                if (this.armorHits.contains(useId)) {
                    return;
                } // lượt này đã đánh vào giáp -> không trừ máu
                this.Hurt(amount);
            },
            /*MonsterController.TakeDamage end.*/

            /*MonsterController.SubArmor start.*/
            SubArmor: function (value, fx) {
if ( TRACE ) { TRACE( "MonsterController#SubArmor", this ); }

                this.armorF = UnityEngine.Mathf.Max(0, this.armorF - value);
                if (this.armorF < 0.001) {
                    this.armorF = 0;
                }
                this.armor = Math.ceil(this.armorF - 0.001);
                if (this.armorF === 0) {
                    this.armor = 0;
                    this.drains.clear();
                    this.BreakArmor(fx);
                }
                this.UpdateBars();
            },
            /*MonsterController.SubArmor end.*/

            /*MonsterController.Punch start.*/
            Punch: function (amount, at) {
if ( TRACE ) { TRACE( "MonsterController#Punch", this ); }

                if (this.isDead || this.armorF > 0) {
                    return false;
                }
                this.Hurt(amount, at.$clone());
                return true;
            },
            /*MonsterController.Punch end.*/

            /*MonsterController.Hurt start.*/
            Hurt: function (amount, at) {
if ( TRACE ) { TRACE( "MonsterController#Hurt", this ); }

                var $t;
                if (at === void 0) { at = null; }
                if (amount <= 0) {
                    return;
                }
                this.hp = UnityEngine.Mathf.Max(0, ((this.hp - amount) | 0));
                if (UnityEngine.Object.op_Implicit(VFXController.Ins)) {
                    VFXController.Ins.SpawnVFX(($t = at, $t != null ? $t : this.BodyPosition()));
                }
                this.UpdateBars();
                if (this.hp === 0) {
                    this.Dead();
                }
            },
            /*MonsterController.Hurt end.*/

            /*MonsterController.BodyPosition start.*/
            BodyPosition: function () {
if ( TRACE ) { TRACE( "MonsterController#BodyPosition", this ); }

                var body = this.transform.Find("Body");
                return UnityEngine.Vector2.FromVector3(UnityEngine.Object.op_Implicit(body) ? body.position.$clone() : this.transform.position.$clone());
            },
            /*MonsterController.BodyPosition end.*/

            /*MonsterController.Dismember start.*/
            Dismember: function () {
if ( TRACE ) { TRACE( "MonsterController#Dismember", this ); }

                var $t, $t1, $t2;
                $t = Bridge.getEnumerator(this.GetComponentsInChildren(UnityEngine.HingeJoint2D));
                try {
                    while ($t.moveNext()) {
                        var h = $t.Current;
                        h.enabled = false;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(this.GetComponentsInChildren(UnityEngine.TargetJoint2D));
                try {
                    while ($t1.moveNext()) {
                        var t = $t1.Current;
                        t.enabled = false;
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                var center = this.BodyPosition();
                $t2 = Bridge.getEnumerator(this.GetComponentsInChildren(UnityEngine.Rigidbody2D));
                try {
                    while ($t2.moveNext()) {
                        var part = $t2.Current;
                        if (UnityEngine.Component.op_Equality(part, this.rb)) {
                            continue;
                        }
                        if (part.bodyType !== UnityEngine.RigidbodyType2D.Dynamic) {
                            part.bodyType = UnityEngine.RigidbodyType2D.Dynamic;
                        }
                        part.gravityScale = UnityEngine.Mathf.Max(1.0, part.gravityScale);
                        var dir = part.position.$clone().sub( center );
                        if (dir.lengthSq() < 0.01) {
                            dir = pc.Vec2.UP.clone();
                        }
                        dir = (dir.clone().normalize().$clone().add( pc.Vec2.UP.clone().scale( 0.8 ) ).add( UnityEngine.Random.insideUnitCircle.$clone().scale( 0.4 ) )).clone().normalize().$clone();
                        part.linearVelocity = dir.$clone().scale( UnityEngine.Random.Range$1(this.dismemberSpeed.x, this.dismemberSpeed.y) );
                        part.angularVelocity = UnityEngine.Random.Range$1(-this.dismemberSpin, this.dismemberSpin);
                        if (UnityEngine.Object.op_Implicit(VFXController.Ins)) {
                            VFXController.Ins.SpawnVFX(part.position);
                        }
                    }
                } finally {
                    if (Bridge.is($t2, System.IDisposable)) {
                        $t2.System$IDisposable$Dispose();
                    }
                }
            },
            /*MonsterController.Dismember end.*/

            /*MonsterController.BreakArmor start.*/
            BreakArmor: function (fx) {
if ( TRACE ) { TRACE( "MonsterController#BreakArmor", this ); }

                if (this.armorBroken) {
                    return;
                }
                this.armorBroken = true;
                if (UnityEngine.Object.op_Implicit(this.armorIcon)) {
                    this.armorIcon.SetActive(false);
                }
                Burning.Stop(this.gameObject); // tắt lửa -> quái chuyển sang bốc khói
                if (UnityEngine.Object.op_Implicit(this.armorBreakSFX)) {
                    AudioController.Ins.PlaySFX(this.armorBreakSFX);
                }
                // Hiệu ứng theo power làm vỡ giáp (mọi stage): sét = tia điện, lửa = khói, lốc = không có.
                this.activeFx = fx;
                if (this.activeFx === MonsterController.ArmorBreakFx.Electric && UnityEngine.Object.op_Implicit(this.electricSprite)) {
                    ElectricFx.Attach(this.gameObject, this.electricSprite, this.fxScale, 150);
                }
                GameController.Ins.ArmorBroken(this);
            },
            /*MonsterController.BreakArmor end.*/

            /*MonsterController.Dead start.*/
            Dead: function () {
if ( TRACE ) { TRACE( "MonsterController#Dead", this ); }

                if (this.isDead) {
                    return;
                }
                this.isDead = true;
                AudioController.Ins.PlaySFX(this.deadSFX);
                if (UnityEngine.Object.op_Implicit(this.joint)) {
                    this.joint.enabled = false;
                }
                if (UnityEngine.Object.op_Implicit(this.rb)) {
                    this.rb.AddForce(this.force);
                }
                this.Dismember();
                // Thanh máu tắt sau khi đã tụt mượt về 0 (xem LateUpdate).
                var fx = this.GetComponent(ElectricFx);
                if (UnityEngine.Object.op_Implicit(fx)) {
                    UnityEngine.Object.Destroy(fx);
                }
                GameController.Ins.MonsterDied(this);
            },
            /*MonsterController.Dead end.*/

            /*MonsterController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MonsterController#Update", this ); }

                // Giáp tụt theo nhịp đều của các lượt lửa/lốc đang có hiệu lực.
                for (var i = (this.drains.Count - 1) | 0; i >= 0 && !this.isDead && i < this.drains.Count; i = (i - 1) | 0) {
                    var d = this.drains.getItem(i);
                    if (UnityEngine.Time.time < d.Next) {
                        continue;
                    }
                    d.Next += d.Tick;
                    var step = d.Left - d.Step < 0.001 ? d.Left : d.Step; // nhịp cuối trừ nốt phần còn lại
                    d.Left -= step;
                    if (d.Left <= 0.0001) {
                        this.drains.removeAt(i);
                    }
                    if (UnityEngine.Object.op_Implicit(d.Sound)) {
                        AudioController.Ins.PlaySFX(d.Sound);
                    }
                    this.SubArmor(step, d.Fx);
                }

                if (this.isDead || !this.armorBroken || this.activeFx !== MonsterController.ArmorBreakFx.Smoke || !UnityEngine.Object.op_Implicit(this.fxSprite) || UnityEngine.Time.time < this.nextSmoke) {
                    return;
                }
                this.nextSmoke = UnityEngine.Time.time + this.smokeInterval;
                var c = this.parts[UnityEngine.Random.Range(0, this.parts.length)];
                if (!UnityEngine.Object.op_Implicit(c)) {
                    return;
                }
                var b = c.bounds;
                var p = new pc.Vec2( UnityEngine.Random.Range$1(b.min.x, b.max.x), UnityEngine.Random.Range$1(b.center.y, b.max.y) );
                var v = new pc.Vec2( UnityEngine.Random.Range$1(-0.1, 0.3), UnityEngine.Random.Range$1(0.5, 0.9) ).scale( this.fxScale );
                FireFx.Ins.Spawn(this.fxSprite, null, 0, p, v, 0, UnityEngine.Random.Range$1(1.0, 1.5), 0.25 * this.fxScale, 0.8 * this.fxScale, MonsterController.SmokeColor, 99);
            },
            /*MonsterController.Update end.*/

            /*MonsterController.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "MonsterController#LateUpdate", this ); }

                // Thanh máu tụt mượt về hp (mỗi lần trừ máu tụt hết trong hpSmoothTime giây).
                if (this.shownHP > this.hp) {
                    this.shownHP = UnityEngine.Mathf.Max(this.hp, this.shownHP - this.hpSpeed * UnityEngine.Time.deltaTime);
                    if (UnityEngine.Object.op_Implicit(this.hpFill)) {
                        this.hpFill.localScale = new pc.Vec3( this.maxHP > 0 ? this.shownHP / this.maxHP : 0, 1, 1 );
                    }
                }
                if (this.shownArmor > this.armorF) {
                    this.shownArmor = UnityEngine.Mathf.Max(this.armorF, this.shownArmor - this.armorSpeed * UnityEngine.Time.deltaTime);
                    if (UnityEngine.Object.op_Implicit(this.armorFill)) {
                        this.armorFill.localScale = new pc.Vec3( this.maxArmor > 0 ? this.shownArmor / this.maxArmor : 0, 1, 1 );
                    }
                }
                if (this.isDead && UnityEngine.Object.op_Implicit(this.bars) && this.bars.gameObject.activeSelf && this.shownHP <= this.hp) {
                    this.bars.gameObject.SetActive(false);
                }
                if (!UnityEngine.Object.op_Implicit(this.bars) || !UnityEngine.Object.op_Implicit(this.head)) {
                    return;
                }
                this.bars.position = this.head.position.$clone().add( this.barOffset );
                this.bars.rotation = pc.Quat.IDENTITY.clone();
            },
            /*MonsterController.LateUpdate end.*/

            /*MonsterController.UpdateBars start.*/
            UpdateBars: function () {
if ( TRACE ) { TRACE( "MonsterController#UpdateBars", this ); }

                if (this.shownHP < this.hp) {
                    this.shownHP = this.hp;
                } // hồi máu / khởi tạo: hiện ngay
                this.hpSpeed = this.hpSmoothTime > 0 ? (this.shownHP - this.hp) / this.hpSmoothTime : 3.40282347E+38;
                if (UnityEngine.Object.op_Implicit(this.hpFill)) {
                    this.hpFill.localScale = new pc.Vec3( this.maxHP > 0 ? this.shownHP / this.maxHP : 0, 1, 1 );
                }
                if (this.shownArmor < this.armorF) {
                    this.shownArmor = this.armorF;
                } // đặt giáp mới: hiện ngay
                this.armorSpeed = this.armorSmoothTime > 0 ? (this.shownArmor - this.armorF) / this.armorSmoothTime : 3.40282347E+38;
                if (UnityEngine.Object.op_Implicit(this.armorFill)) {
                    this.armorFill.localScale = new pc.Vec3( this.maxArmor > 0 ? this.shownArmor / this.maxArmor : 0, 1, 1 );
                }
            },
            /*MonsterController.UpdateBars end.*/


        }
    });
    /*MonsterController end.*/

    /*StormPower start.*/
    Bridge.define("StormPower", {
        inherits: [PowerBase],
        fields: {
            strike: null,
            rain: null,
            strikes: 0,
            missMargin: 0,
            groundY: 0,
            strikeInterval: null,
            radius: 0,
            damage: 0,
            darkAlpha: 0,
            running: false,
            targets: null,
            stageMonsters: null
        },
        props: {
            Busy: {
                get: function () {
if ( TRACE ) { TRACE( "StormPower#Busy#get", this ); }

                    return this.running;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "StormPower#init", this ); }

                this.strikeInterval = new UnityEngine.Vector2();
                this.strikes = 8;
                this.missMargin = 0.6;
                this.groundY = -4.0;
                this.strikeInterval = new pc.Vec2( 0.5, 1.2 );
                this.radius = 0.8;
                this.damage = 5;
                this.darkAlpha = 0.55;
                this.targets = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this.stageMonsters = new (System.Collections.Generic.List$1(MonsterController)).ctor();
            }
        },
        methods: {
            /*StormPower.SetDamage start.*/
            SetDamage: function (value) {
if ( TRACE ) { TRACE( "StormPower#SetDamage", this ); }

                this.damage = value;
            },
            /*StormPower.SetDamage end.*/

            /*StormPower.PointerDown start.*/
            PointerDown: function (position) {
if ( TRACE ) { TRACE( "StormPower#PointerDown", this ); }

                if (this.running || !this.TryUse()) {
                    return;
                }
                this.StartCoroutine$1(this.Run());
            },
            /*StormPower.PointerDown end.*/

            /*StormPower.Run start.*/
            Run: function () {
if ( TRACE ) { TRACE( "StormPower#Run", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    useId,
                    i,
                    target,
                    last,
                    pos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.running = true;
                                        useId = PowerBase.UseId; // cả cơn bão tính là 1 lượt
                                        this.stageMonsters = GameController.Ins.StageMonsters(); // chốt quái của stage lúc gọi bão
                                        if (UnityEngine.Object.op_Implicit(ScreenFx.Ins)) {
                                            ScreenFx.Ins.SetDark(this.darkAlpha, 0.6);
                                        }
                                        this.rain.Begin();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.8);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    i = 0;
                                        $step = 2;
                                        continue;
                                }
                                case 2: {
                                    if ( i < this.strikes ) {
                                            $step = 3;
                                            continue;
                                        }
                                    $step = 6;
                                    continue;
                                }
                                case 3: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(UnityEngine.Random.Range$1(this.strikeInterval.x, this.strikeInterval.y));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    target = this.PickTarget();
                                        if (!UnityEngine.Object.op_Implicit(target)) {
                                            $step = 6;
                                            continue;
                                        } // quái stage này đã chết hết -> tạnh sớm
                                        last = i === ((this.strikes - 1) | 0);
                                        // Tia cuối đánh trúng quái; các tia trước đánh xuống chỗ trống (không gây damage).
                                        pos = last ? UnityEngine.Vector2.FromVector3(target.position) : this.MissPoint(UnityEngine.Vector2.FromVector3(target.position));
                                        this.strike.Strike(pos, this.radius, last ? this.damage : 0, this.Scale, useId);
                                        // Thỉnh thoảng chớp thêm cho không khí bão.
                                        if (UnityEngine.Random.value < 0.35 && UnityEngine.Object.op_Implicit(ScreenFx.Ins)) {
                                            ScreenFx.Ins.Flash(0.2);
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    i = (i + 1) | 0;
                                    $step = 2;
                                    continue;
                                }
                                case 6: {
                                    this.rain.Stop();
                                        if (UnityEngine.Object.op_Implicit(ScreenFx.Ins)) {
                                            ScreenFx.Ins.SetDark(0, 1.2);
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.2);
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this.running = false;

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
            /*StormPower.Run end.*/

            /*StormPower.MissPoint start.*/
            MissPoint: function (fallback) {
if ( TRACE ) { TRACE( "StormPower#MissPoint", this ); }

                var $t;
                var cam = PowerBase.CameraRect();
                var margins = System.Array.init([
                    this.missMargin, 
                    this.missMargin * 0.5, 
                    0.15
                ], System.Single);
                $t = Bridge.getEnumerator(margins);
                try {
                    while ($t.moveNext()) {
                        var half = $t.Current;
                        for (var tries = 0; tries < 20; tries = (tries + 1) | 0) {
                            var x = UnityEngine.Random.Range$1(cam.xMin + 0.2, cam.xMax - 0.2);
                            if (this.ColumnClear(x, half, cam)) {
                                return new pc.Vec2( x, this.groundY );
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                var edge = UnityEngine.Random.value < 0.5 ? cam.xMin + UnityEngine.Random.Range$1(0.1, 0.4) : cam.xMax - UnityEngine.Random.Range$1(0.1, 0.4);
                return new pc.Vec2( edge, this.groundY );
            },
            /*StormPower.MissPoint end.*/

            /*StormPower.ColumnClear start.*/
            ColumnClear: function (x, half, cam) {
if ( TRACE ) { TRACE( "StormPower#ColumnClear", this ); }

                var $t;
                var top = cam.yMax + 0.5;
                var center = new pc.Vec2( x, (top + this.groundY) * 0.5 );
                var size = new pc.Vec2( half * 2.0, top - this.groundY );
                $t = Bridge.getEnumerator(UnityEngine.Physics2D.OverlapBoxAll(center, size, 0));
                try {
                    while ($t.moveNext()) {
                        var col = $t.Current;
                        var rb = col.attachedRigidbody;
                        if (UnityEngine.Object.op_Implicit(rb) && rb.bodyType === UnityEngine.RigidbodyType2D.Dynamic) {
                            return false;
                        } // nhân vật, quái, đồ vật rơi được
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return true;
            },
            /*StormPower.ColumnClear end.*/

            /*StormPower.PickTarget start.*/
            PickTarget: function () {
if ( TRACE ) { TRACE( "StormPower#PickTarget", this ); }

                var $t;
                this.targets.clear();
                $t = Bridge.getEnumerator(this.stageMonsters);
                try {
                    while ($t.moveNext()) {
                        var m = $t.Current;
                        if (!UnityEngine.Object.op_Implicit(m) || m.IsDead) {
                            continue;
                        }
                        var body = m.transform.Find("Body");
                        this.targets.add(UnityEngine.Object.op_Implicit(body) ? body : m.transform);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return this.targets.Count > 0 ? this.targets.getItem(UnityEngine.Random.Range(0, this.targets.Count)) : null;
            },
            /*StormPower.PickTarget end.*/


        }
    });
    /*StormPower end.*/

    /*TornadoPower start.*/
    Bridge.define("TornadoPower", {
        inherits: [PowerBase],
        statics: {
            fields: {
                LayerAlpha: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "TornadoPower#init", this ); }

                    this.LayerAlpha = System.Array.init([
                        1.0, 
                        0.6, 
                        0.35
                    ], System.Single);
                }
            },
            methods: {
                /*TornadoPower.SetAlpha:static start.*/
                SetAlpha: function (t, k) {
if ( TRACE ) { TRACE( "TornadoPower#SetAlpha", this ); }

                    for (var i = 0; i < t.Layers.length; i = (i + 1) | 0) {
                        t.Layers[i].color = new pc.Color( 1, 1, 1, TornadoPower.LayerAlpha[i] * k );
                    }
                },
                /*TornadoPower.SetAlpha:static end.*/


            }
        },
        fields: {
            funnelSprite: null,
            groundY: 0,
            height: 0,
            widthRatio: 0,
            patrolDistance: 0,
            patrolSpeed: 0,
            liftTime: 0,
            liftSpeed: 0,
            liftAccel: 0,
            swirl: 0,
            spin: 0,
            landHeight: 0,
            maxTossTime: 0,
            fadeTime: 0,
            armorFallTime: 0,
            armorTick: 0,
            damage: 0,
            liftSound: null,
            hitSound: null,
            sortingOrder: 0,
            touchRadius: 0,
            active: null,
            pool: null
        },
        props: {
            Busy: {
                get: function () {
if ( TRACE ) { TRACE( "TornadoPower#Busy#get", this ); }

                    return this.active.Count > 0;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TornadoPower#init", this ); }

                this.groundY = -4.0;
                this.height = 2.4;
                this.widthRatio = 0.6;
                this.patrolDistance = 0.25;
                this.patrolSpeed = 3.0;
                this.liftTime = 0.8;
                this.liftSpeed = 3.0;
                this.liftAccel = 40.0;
                this.swirl = 1.5;
                this.spin = 900.0;
                this.landHeight = 0.3;
                this.maxTossTime = 3.0;
                this.fadeTime = 0.3;
                this.armorFallTime = 0.7;
                this.armorTick = 0.25;
                this.damage = 1;
                this.sortingOrder = 40;
                this.touchRadius = 0.3;
                this.active = new (System.Collections.Generic.List$1(TornadoPower.Tornado)).ctor();
                this.pool = new (System.Collections.Generic.Queue$1(TornadoPower.Tornado)).ctor();
            }
        },
        methods: {
            /*TornadoPower.SetDamage start.*/
            SetDamage: function (value) {
if ( TRACE ) { TRACE( "TornadoPower#SetDamage", this ); }

                this.damage = value;
            },
            /*TornadoPower.SetDamage end.*/

            /*TornadoPower.PointerDown start.*/
            PointerDown: function (position) {
if ( TRACE ) { TRACE( "TornadoPower#PointerDown", this ); }

                var target = PowerBase.MonsterAt(position, this.touchRadius * this.Scale);
                if (!UnityEngine.Object.op_Implicit(target) || !this.TryUse()) {
                    return;
                }
                var t = this.pool.Count > 0 ? this.pool.Dequeue() : this.Create();
                t.Scale = this.Scale;
                t.Time = 0;
                t.UseId = PowerBase.UseId;
                t.Phase = TornadoPower.Phase.Lift;
                t.PhaseTime = 0;
                t.Target = target;
                t.Body = null;
                t.Bodies = null;
                if (UnityEngine.Object.op_Implicit(t.Target)) {
                    t.Body = t.Target.transform.Find("Body");
                    if (!UnityEngine.Object.op_Implicit(t.Body)) {
                        t.Body = t.Target.transform;
                    }
                    t.BaseY = t.Body.position.y;
                    t.CenterX = t.Body.position.x;
                    t.Bodies = t.Target.GetComponentsInChildren(UnityEngine.Rigidbody2D);
                    t.Gravity = System.Array.init(t.Bodies.length, 0, System.Single);
                    for (var i = 0; i < t.Bodies.length; i = (i + 1) | 0) {
                        var rb = t.Bodies[i];
                        t.Gravity[i] = rb.gravityScale;
                        rb.gravityScale = UnityEngine.Mathf.Max(rb.gravityScale, 1.0); // để thả ra thì rơi xuống
                        rb.angularVelocity = UnityEngine.Random.Range$1(-this.spin, this.spin);
                    }
                    if (UnityEngine.Object.op_Implicit(this.liftSound)) {
                        AudioController.Ins.PlaySFX(this.liftSound);
                    }
                    t.Target.DrainArmor(t.UseId, this.liftTime + this.armorFallTime, this.armorTick, MonsterController.ArmorBreakFx.None, this.hitSound); // lốc làm vỡ giáp: không có hiệu ứng; mỗi nhịp phát sound
                } else {
                    t.CenterX = position.x;
                }
                var h = this.height * t.Scale;
                t.Root.transform.position = new pc.Vec3( t.CenterX, this.groundY + h * 0.5, 0 );
                TornadoPower.SetAlpha(t, 1.0);
                t.Root.SetActive(true);
                this.active.add(t);
            },
            /*TornadoPower.PointerDown end.*/

            /*TornadoPower.Create start.*/
            Create: function () {
if ( TRACE ) { TRACE( "TornadoPower#Create", this ); }

                var t = new TornadoPower.Tornado();
                t.Root = new UnityEngine.GameObject.$ctor2("Tornado");
                t.Root.transform.SetParent(UnityEngine.Object.op_Implicit(this.container) ? this.container : this.transform, false);
                t.Layers = System.Array.init(TornadoPower.LayerAlpha.length, null, UnityEngine.SpriteRenderer);
                for (var i = 0; i < t.Layers.length; i = (i + 1) | 0) {
                    t.Layers[i] = PowerBase.CreateSprite("Layer" + i, this.funnelSprite, t.Root.transform, ((this.sortingOrder - i) | 0));
                }
                return t;
            },
            /*TornadoPower.Create end.*/

            /*TornadoPower.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "TornadoPower#Update", this ); }

                for (var i = (this.active.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var t = this.active.getItem(i);
                    t.Time += UnityEngine.Time.deltaTime;
                    t.PhaseTime += UnityEngine.Time.deltaTime;
                    var tr = t.Root.transform;

                    // Đi qua lại quanh con quái.
                    var x = t.CenterX + Math.sin(t.Time * this.patrolSpeed) * this.patrolDistance * t.Scale;
                    tr.position = new pc.Vec3( x, tr.position.y, 0 );
                    tr.rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, Math.sin(t.Time * 3.0) * 5.0 );
                    this.Animate(t, tr);

                    if (t.Phase === TornadoPower.Phase.Lift && t.PhaseTime >= this.liftTime) {
                        this.Next(t, TornadoPower.Phase.Fall);
                    } else {
                        if (t.Phase === TornadoPower.Phase.Fall && this.Landed(t)) {
                            this.Restore(t);
                            if (UnityEngine.Object.op_Implicit(t.Target) && !t.Target.IsDead) {
                                var hp = t.Target.HP;
                                t.Target.TakeDamage(this.damage, t.UseId);
                                if (t.Target.HP < hp && UnityEngine.Object.op_Implicit(this.hitSound)) {
                                    AudioController.Ins.PlaySFX(this.hitSound);
                                } // trừ máu -> phát sound
                            }
                            this.Next(t, TornadoPower.Phase.Fade);
                        } else if (t.Phase === TornadoPower.Phase.Fade) {
                            TornadoPower.SetAlpha(t, 1.0 - t.PhaseTime / this.fadeTime);
                            if (t.PhaseTime >= this.fadeTime) {
                                t.Root.SetActive(false);
                                this.active.removeAt(i);
                                this.pool.Enqueue(t);
                            }
                        }
                    }
                }
            },
            /*TornadoPower.Update end.*/

            /*TornadoPower.Next start.*/
            Next: function (t, p) {
if ( TRACE ) { TRACE( "TornadoPower#Next", this ); }

                t.Phase = p;
                t.PhaseTime = 0;
            },
            /*TornadoPower.Next end.*/

            /*TornadoPower.Landed start.*/
            Landed: function (t) {
if ( TRACE ) { TRACE( "TornadoPower#Landed", this ); }

                if (!UnityEngine.Object.op_Implicit(t.Target) || t.Target.IsDead || !UnityEngine.Object.op_Implicit(t.Body)) {
                    return true;
                }
                if (t.PhaseTime >= this.maxTossTime) {
                    return true;
                }
                return t.PhaseTime > 0.2 && t.Body.position.y <= t.BaseY + this.landHeight * t.Scale;
            },
            /*TornadoPower.Landed end.*/

            /*TornadoPower.Restore start.*/
            Restore: function (t) {
if ( TRACE ) { TRACE( "TornadoPower#Restore", this ); }

                if (t.Bodies == null) {
                    return;
                }
                for (var i = 0; i < t.Bodies.length; i = (i + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(t.Bodies[i])) {
                        t.Bodies[i].gravityScale = t.Gravity[i];
                    }
                }
                t.Bodies = null;
            },
            /*TornadoPower.Restore end.*/

            /*TornadoPower.Animate start.*/
            Animate: function (t, tr) {
if ( TRACE ) { TRACE( "TornadoPower#Animate", this ); }

                var ps = UnityEngine.Object.op_Implicit(tr.parent) ? tr.parent.lossyScale.$clone() : new pc.Vec3( 1, 1, 1 );
                var baseScale = this.height * t.Scale / this.funnelSprite.bounds.halfExtents.$clone().scale( 2 ).y / UnityEngine.Mathf.Max(0.0001, Math.abs(ps.y));
                for (var l = 0; l < t.Layers.length; l = (l + 1) | 0) {
                    var phase = l * 2.1;
                    var sx = baseScale * (0.8 + 0.2 * Math.sin(t.Time * 14.0 + phase));
                    t.Layers[l].transform.localScale = new pc.Vec3( sx * this.widthRatio * (1.0 + l * 0.12), baseScale, 1 );
                    t.Layers[l].transform.localPosition = new pc.Vec3( Math.sin(t.Time * 6.0 + phase) * 0.12 * t.Scale, 0, 0 );
                }
            },
            /*TornadoPower.Animate end.*/

            /*TornadoPower.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "TornadoPower#FixedUpdate", this ); }

                var $t, $t1;
                $t = Bridge.getEnumerator(this.active);
                try {
                    while ($t.moveNext()) {
                        var t = $t.Current;
                        if (t.Phase !== TornadoPower.Phase.Lift || t.Bodies == null || !UnityEngine.Object.op_Implicit(t.Target) || t.Target.IsDead) {
                            continue;
                        }
                        var wobble = Math.sin(t.Time * 8.0) * this.swirl;
                        var v = new pc.Vec2( wobble, this.liftSpeed ).scale( t.Scale );
                        $t1 = Bridge.getEnumerator(t.Bodies);
                        try {
                            while ($t1.moveNext()) {
                                var rb = $t1.Current;
                                if (UnityEngine.Object.op_Implicit(rb)) {
                                    rb.linearVelocity = pc.Vec2.moveTowards( rb.linearVelocity, v, this.liftAccel * t.Scale * UnityEngine.Time.fixedDeltaTime );
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
            },
            /*TornadoPower.FixedUpdate end.*/

            /*TornadoPower.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "TornadoPower#OnDisable", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.active);
                try {
                    while ($t.moveNext()) {
                        var t = $t.Current;
                        this.Restore(t);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*TornadoPower.OnDisable end.*/


        }
    });
    /*TornadoPower end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic","System.Collections","UnityEngine.UI","TMPro","DG.Tweening","DG.Tweening.Plugins.Core.PathCore","DG.Tweening.Core","System.Globalization","DG.Tweening.Plugins.Options"];

    /*AudioController start.*/
    $m("AudioController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BootstrapPool","t":8,"sn":"BootstrapPool","rt":$n[0].Void},{"a":1,"n":"CreateIns","t":8,"sn":"CreateIns","rt":$n[0].Void},{"a":1,"n":"CreateNewSource","t":8,"sn":"CreateNewSource","rt":$n[1].AudioSource},{"a":1,"n":"GetFreeSource","t":8,"sn":"GetFreeSource","rt":$n[1].AudioSource},{"a":2,"n":"PlaySFX","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0}],"sn":"PlaySFX","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("BGM", 0, null)],"a":2,"n":"BGM","t":4,"rt":$n[1].AudioClip,"sn":"BGM"},{"a":2,"n":"Ins","is":true,"t":4,"rt":AudioController,"sn":"Ins"},{"a":1,"n":"SFXPool","t":4,"rt":$n[2].Queue$1(UnityEngine.AudioSource),"sn":"SFXPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicSource","t":4,"rt":$n[1].AudioSource,"sn":"musicSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pool","t":4,"rt":$n[1].Transform,"sn":"pool"}]}; }, $n);
    /*AudioController end.*/

    /*BonkController start.*/
    $m("BonkController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitSound","t":4,"rt":$n[1].AudioClip,"sn":"hitSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":$n[0].String,"sn":"target"}]}; }, $n);
    /*BonkController end.*/

    /*GameController start.*/
    $m("GameController", function () { return {"nested":[GameController.Stage],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyArmor","t":8,"pi":[{"n":"stage","pt":$n[0].Int32,"ps":0}],"sn":"ApplyArmor","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"ApplyStagePowers","t":8,"sn":"ApplyStagePowers","rt":$n[0].Void},{"a":2,"n":"ArmorBroken","t":8,"pi":[{"n":"monster","pt":MonsterController,"ps":0}],"sn":"ArmorBroken","rt":$n[0].Void,"p":[MonsterController]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ChangeLevel","t":8,"sn":"ChangeLevel","rt":$n[3].IEnumerator},{"a":1,"n":"CreateIns","t":8,"sn":"CreateIns","rt":$n[0].Void},{"a":2,"n":"CurrentMonster","t":8,"sn":"CurrentMonster","rt":MonsterController},{"a":1,"n":"DelayChangeLevel","t":8,"sn":"DelayChangeLevel","rt":$n[3].IEnumerator},{"a":2,"n":"MonsterDied","t":8,"pi":[{"n":"monster","pt":MonsterController,"ps":0}],"sn":"MonsterDied","rt":$n[0].Void,"p":[MonsterController]},{"a":2,"n":"SetMonsterHP","t":8,"pi":[{"n":"stage","pt":$n[0].Int32,"ps":0},{"n":"hp","pt":$n[0].Int32,"ps":1}],"sn":"SetMonsterHP","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"SetPowerCount","t":8,"pi":[{"n":"stage","pt":$n[0].Int32,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"SetPowerCount","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"SetPowerUses","t":8,"pi":[{"n":"stage","pt":$n[0].Int32,"ps":0},{"n":"uses","pt":$n[0].Int32,"ps":1}],"sn":"SetPowerUses","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"ShowPunchTut","t":8,"sn":"ShowPunchTut","rt":$n[0].Void},{"a":2,"n":"StageMonsters","t":8,"sn":"StageMonsters","rt":$n[2].List$1(MonsterController)},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartStageTut","t":8,"sn":"StartStageTut","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Ins","is":true,"t":4,"rt":GameController,"sn":"Ins"},{"a":2,"n":"OnComplete","t":4,"rt":Function,"sn":"OnComplete"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"armorUses","t":4,"rt":$n[0].Int32,"sn":"armorUses","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"changing","t":4,"rt":$n[0].Boolean,"sn":"changing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadDelay","t":4,"rt":$n[0].Single,"sn":"deadDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"end","t":4,"rt":$n[0].Boolean,"sn":"end","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"index","t":4,"rt":$n[0].Int32,"sn":"index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"keepText","t":4,"rt":$n[1].GameObject,"sn":"keepText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainCamera","t":4,"rt":$n[1].Transform,"sn":"mainCamera"},{"a":1,"n":"punchTutPending","t":4,"rt":$n[0].Boolean,"sn":"punchTutPending","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speedMove","t":4,"rt":$n[0].Single,"sn":"speedMove","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stages","t":4,"rt":$n[2].List$1(GameController.Stage),"sn":"stages"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":TargetController,"sn":"target"}]}; }, $n);
    /*GameController end.*/

    /*GameController+Stage start.*/
    $m("GameController.Stage", function () { return {"td":GameController,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"armorBrokenTut","t":4,"rt":$n[1].GameObject,"sn":"armorBrokenTut"},{"a":2,"n":"cameraPos","t":4,"rt":$n[1].Vector3,"sn":"cameraPos"},{"a":2,"n":"monsters","t":4,"rt":$n[2].List$1(MonsterController),"sn":"monsters"},{"a":2,"n":"powerCount","t":4,"rt":$n[0].Int32,"sn":"powerCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"powerUses","t":4,"rt":$n[0].Int32,"sn":"powerUses","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tutorial","t":4,"rt":$n[0].Boolean,"sn":"tutorial","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ui","t":4,"rt":$n[1].GameObject,"sn":"ui"}]}; }, $n);
    /*GameController+Stage end.*/

    /*LunaController start.*/
    $m("LunaController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ClickCTA","t":8,"sn":"ClickCTA","rt":$n[0].Void},{"a":1,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[3].IEnumerator},{"a":1,"n":"ShowEndCard","t":8,"sn":"ShowEndCard","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"BGImage","t":4,"rt":$n[4].RawImage,"sn":"BGImage"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("BG Image", 0, null)],"a":2,"n":"BGTexture","t":4,"rt":$n[1].Texture2D,"sn":"BGTexture"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"CTA","t":4,"rt":$n[2].List$1(UnityEngine.UI.Button),"sn":"CTA"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Monster HP Stage 1", -1, null, false, null)],"a":2,"n":"MonsterHPStage1","t":4,"rt":$n[0].Int32,"sn":"MonsterHPStage1","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Monster HP Stage 2", -1, null, false, null)],"a":2,"n":"MonsterHPStage2","t":4,"rt":$n[0].Int32,"sn":"MonsterHPStage2","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Power Damage", -1, null, false, null)],"a":2,"n":"PowerDamage","t":4,"rt":$n[0].Int32,"sn":"PowerDamage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Type Power Stage 1", -1, null, false, null)],"a":2,"n":"PowerStage1","t":4,"rt":$n[0].Int32,"sn":"PowerStage1","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Type Power Stage 2", -1, null, false, null)],"a":2,"n":"PowerStage2","t":4,"rt":$n[0].Int32,"sn":"PowerStage2","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Power Uses Stage 1", -1, null, false, null)],"a":2,"n":"PowerUsesStage1","t":4,"rt":$n[0].Int32,"sn":"PowerUsesStage1","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Power Uses Stage 2", -1, null, false, null)],"a":2,"n":"PowerUsesStage2","t":4,"rt":$n[0].Int32,"sn":"PowerUsesStage2","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Time Play", -1, null, false, null)],"a":2,"n":"TimePlay","t":4,"rt":$n[0].Single,"sn":"TimePlay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Limit Time Play?", -1, null, false, null)],"a":2,"n":"UseTime","t":4,"rt":$n[0].Boolean,"sn":"UseTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endCard","t":4,"rt":$n[1].GameObject,"sn":"endCard"}]}; }, $n);
    /*LunaController end.*/

    /*MonsterController start.*/
    $m("MonsterController", function () { return {"nested":[MonsterController.ArmorBreakFx,MonsterController.Drain],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BodyPosition","t":8,"sn":"BodyPosition","rt":$n[1].Vector2},{"a":1,"n":"BreakArmor","t":8,"pi":[{"n":"fx","pt":MonsterController.ArmorBreakFx,"ps":0}],"sn":"BreakArmor","rt":$n[0].Void,"p":[MonsterController.ArmorBreakFx]},{"a":1,"n":"Dead","t":8,"sn":"Dead","rt":$n[0].Void},{"a":1,"n":"Dismember","t":8,"sn":"Dismember","rt":$n[0].Void},{"a":2,"n":"DrainArmor","t":8,"pi":[{"n":"useId","pt":$n[0].Int32,"ps":0},{"n":"time","pt":$n[0].Single,"ps":1},{"n":"tick","dv":0.25,"o":true,"pt":$n[0].Single,"ps":2},{"n":"fx","dv":0,"o":true,"pt":MonsterController.ArmorBreakFx,"ps":3},{"n":"sound","dv":null,"o":true,"pt":$n[1].AudioClip,"ps":4}],"sn":"DrainArmor","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Single,$n[0].Single,MonsterController.ArmorBreakFx,$n[1].AudioClip]},{"a":1,"n":"Hurt","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0},{"n":"at","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector2),"ps":1}],"sn":"Hurt","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Nullable$1(UnityEngine.Vector2)]},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Punch","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0},{"n":"at","pt":$n[1].Vector2,"ps":1}],"sn":"Punch","rt":$n[0].Boolean,"p":[$n[0].Int32,$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetArmorUses","t":8,"pi":[{"n":"uses","pt":$n[0].Int32,"ps":0}],"sn":"SetArmorUses","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SetMaxHP","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"SetMaxHP","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"SubArmor","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"fx","pt":MonsterController.ArmorBreakFx,"ps":1}],"sn":"SubArmor","rt":$n[0].Void,"p":[$n[0].Single,MonsterController.ArmorBreakFx]},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0},{"n":"useId","pt":$n[0].Int32,"ps":1}],"sn":"TakeDamage","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"TakeLightning","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0},{"n":"useId","pt":$n[0].Int32,"ps":1}],"sn":"TakeLightning","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateBars","t":8,"sn":"UpdateBars","rt":$n[0].Void},{"a":2,"n":"Armor","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Armor","t":8,"rt":$n[0].Int32,"fg":"Armor","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Armor"},{"a":2,"n":"ArmorBroken","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_ArmorBroken","t":8,"rt":$n[0].Boolean,"fg":"ArmorBroken","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"ArmorBroken"},{"a":2,"n":"ArmorDamaged","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_ArmorDamaged","t":8,"rt":$n[0].Boolean,"fg":"ArmorDamaged","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"ArmorDamaged"},{"a":2,"n":"HP","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_HP","t":8,"rt":$n[0].Int32,"fg":"HP","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"HP"},{"a":2,"n":"IsDead","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsDead","t":8,"rt":$n[0].Boolean,"fg":"IsDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsDead"},{"a":2,"n":"MaxArmor","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_MaxArmor","t":8,"rt":$n[0].Int32,"fg":"MaxArmor","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"MaxArmor"},{"a":1,"n":"SmokeColor","is":true,"t":4,"rt":$n[1].Color,"sn":"SmokeColor","ro":true},{"a":1,"n":"activeFx","t":4,"rt":MonsterController.ArmorBreakFx,"sn":"activeFx","box":function ($v) { return Bridge.box($v, MonsterController.ArmorBreakFx, System.Enum.toStringFn(MonsterController.ArmorBreakFx));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"anchorAtStart","t":4,"rt":$n[0].Boolean,"sn":"anchorAtStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"armor","t":4,"rt":$n[0].Int32,"sn":"armor","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"armorBar","t":4,"rt":$n[1].GameObject,"sn":"armorBar"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"armorBreakSFX","t":4,"rt":$n[1].AudioClip,"sn":"armorBreakSFX"},{"a":1,"n":"armorBroken","t":4,"rt":$n[0].Boolean,"sn":"armorBroken","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"armorF","t":4,"rt":$n[0].Single,"sn":"armorF","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"armorFill","t":4,"rt":$n[1].Transform,"sn":"armorFill"},{"a":1,"n":"armorHits","t":4,"rt":$n[2].HashSet$1(System.Int32),"sn":"armorHits","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"armorIcon","t":4,"rt":$n[1].GameObject,"sn":"armorIcon"},{"a":1,"n":"armorPerUse","t":4,"rt":$n[0].Boolean,"sn":"armorPerUse","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"armorSmoothTime","t":4,"rt":$n[0].Single,"sn":"armorSmoothTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"armorSpeed","t":4,"rt":$n[0].Single,"sn":"armorSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"barOffset","t":4,"rt":$n[1].Vector3,"sn":"barOffset"},{"at":[new UnityEngine.HeaderAttribute("Bars"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bars","t":4,"rt":$n[1].Transform,"sn":"bars"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadSFX","t":4,"rt":$n[1].AudioClip,"sn":"deadSFX"},{"at":[new UnityEngine.HeaderAttribute("Dead"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dismemberSpeed","t":4,"rt":$n[1].Vector2,"sn":"dismemberSpeed"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dismemberSpin","t":4,"rt":$n[0].Single,"sn":"dismemberSpin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"drains","t":4,"rt":$n[2].List$1(MonsterController.Drain),"sn":"drains","ro":true},{"a":1,"n":"electricHit","t":4,"rt":$n[0].Boolean,"sn":"electricHit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"electricSprite","t":4,"rt":$n[1].Sprite,"sn":"electricSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"force","t":4,"rt":$n[1].Vector2,"sn":"force"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fxScale","t":4,"rt":$n[0].Single,"sn":"fxScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Armor Break"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fxSprite","t":4,"rt":$n[1].Sprite,"sn":"fxSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"head","t":4,"rt":$n[1].Transform,"sn":"head"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hp","t":4,"rt":$n[0].Int32,"sn":"hp","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hpFill","t":4,"rt":$n[1].Transform,"sn":"hpFill"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hpSmoothTime","t":4,"rt":$n[0].Single,"sn":"hpSmoothTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"hpSpeed","t":4,"rt":$n[0].Single,"sn":"hpSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isDead","t":4,"rt":$n[0].Boolean,"sn":"isDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joint","t":4,"rt":$n[1].TargetJoint2D,"sn":"joint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lightningDrainTick","t":4,"rt":$n[0].Single,"sn":"lightningDrainTick","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lightningDrainTime","t":4,"rt":$n[0].Single,"sn":"lightningDrainTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxArmor","t":4,"rt":$n[0].Int32,"sn":"maxArmor","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Health"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxHP","t":4,"rt":$n[0].Int32,"sn":"maxHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"nextSmoke","t":4,"rt":$n[0].Single,"sn":"nextSmoke","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"parts","t":4,"rt":System.Array.type(UnityEngine.Collider2D),"sn":"parts"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"rb"},{"a":1,"n":"shownArmor","t":4,"rt":$n[0].Single,"sn":"shownArmor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"shownHP","t":4,"rt":$n[0].Single,"sn":"shownHP","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smokeInterval","t":4,"rt":$n[0].Single,"sn":"smokeInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MonsterController end.*/

    /*MonsterController+ArmorBreakFx start.*/
    $m("MonsterController.ArmorBreakFx", function () { return {"td":MonsterController,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Electric","is":true,"t":4,"rt":MonsterController.ArmorBreakFx,"sn":"Electric","box":function ($v) { return Bridge.box($v, MonsterController.ArmorBreakFx, System.Enum.toStringFn(MonsterController.ArmorBreakFx));}},{"a":2,"n":"None","is":true,"t":4,"rt":MonsterController.ArmorBreakFx,"sn":"None","box":function ($v) { return Bridge.box($v, MonsterController.ArmorBreakFx, System.Enum.toStringFn(MonsterController.ArmorBreakFx));}},{"a":2,"n":"Smoke","is":true,"t":4,"rt":MonsterController.ArmorBreakFx,"sn":"Smoke","box":function ($v) { return Bridge.box($v, MonsterController.ArmorBreakFx, System.Enum.toStringFn(MonsterController.ArmorBreakFx));}}]}; }, $n);
    /*MonsterController+ArmorBreakFx end.*/

    /*MonsterController+Drain start.*/
    $m("MonsterController.Drain", function () { return {"td":MonsterController,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Fx","t":4,"rt":MonsterController.ArmorBreakFx,"sn":"Fx","box":function ($v) { return Bridge.box($v, MonsterController.ArmorBreakFx, System.Enum.toStringFn(MonsterController.ArmorBreakFx));}},{"a":2,"n":"Left","t":4,"rt":$n[0].Single,"sn":"Left","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Next","t":4,"rt":$n[0].Single,"sn":"Next","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Sound","t":4,"rt":$n[1].AudioClip,"sn":"Sound"},{"a":2,"n":"Step","t":4,"rt":$n[0].Single,"sn":"Step","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Tick","t":4,"rt":$n[0].Single,"sn":"Tick","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MonsterController+Drain end.*/

    /*Burning start.*/
    $m("Burning", function () { return {"nested":[Burning.Flame],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddFlame","t":8,"pi":[{"n":"part","pt":$n[1].Transform,"ps":0},{"n":"size","pt":$n[0].Single,"ps":1},{"n":"born","pt":$n[0].Single,"ps":2},{"n":"startK","pt":$n[0].Single,"ps":3}],"sn":"AddFlame","rt":Burning.Flame,"p":[$n[1].Transform,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":1,"n":"ClampToBounds","is":true,"t":8,"pi":[{"n":"b","pt":$n[1].Bounds,"ps":0},{"n":"p","pt":$n[1].Vector2,"ps":1}],"sn":"ClampToBounds","rt":$n[1].Vector2,"p":[$n[1].Bounds,$n[1].Vector2]},{"a":1,"n":"EmitFx","t":8,"sn":"EmitFx","rt":$n[0].Void},{"a":1,"n":"Extinguish","t":8,"sn":"Extinguish","rt":$n[0].Void},{"a":2,"n":"Ignite","is":true,"t":8,"pi":[{"n":"target","pt":IDamageable,"ps":0},{"n":"source","pt":IFireSource,"ps":1},{"n":"hit","pt":$n[1].Collider2D,"ps":2},{"n":"point","pt":$n[1].Vector2,"ps":3},{"n":"damage","pt":$n[0].Int32,"ps":4},{"n":"interval","pt":$n[0].Single,"ps":5},{"n":"duration","pt":$n[0].Single,"ps":6},{"n":"useId","pt":$n[0].Int32,"ps":7}],"sn":"Ignite","rt":$n[0].Void,"p":[IDamageable,IFireSource,$n[1].Collider2D,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Single,$n[0].Int32]},{"a":1,"n":"IgnitePart","t":8,"pi":[{"n":"part","pt":$n[1].Transform,"ps":0},{"n":"point","pt":$n[1].Vector2,"ps":1},{"n":"atContact","pt":$n[0].Boolean,"ps":2}],"sn":"IgnitePart","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Vector2,$n[0].Boolean]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"SetFlameScale","t":8,"pi":[{"n":"f","pt":Burning.Flame,"ps":0},{"n":"k","pt":$n[0].Single,"ps":1}],"sn":"SetFlameScale","rt":$n[0].Void,"p":[Burning.Flame,$n[0].Single]},{"a":1,"n":"Setup","t":8,"pi":[{"n":"t","pt":IDamageable,"ps":0},{"n":"s","pt":IFireSource,"ps":1}],"sn":"Setup","rt":$n[0].Void,"p":[IDamageable,IFireSource]},{"a":1,"n":"Spread","t":8,"sn":"Spread","rt":$n[0].Void},{"a":2,"n":"Stop","is":true,"t":8,"pi":[{"n":"go","pt":$n[1].GameObject,"ps":0}],"sn":"Stop","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"ActiveCount","is":true,"t":4,"rt":$n[0].Int32,"sn":"ActiveCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"CoverStagger","is":true,"t":4,"rt":$n[0].Single,"sn":"CoverStagger","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"EmberColor","is":true,"t":4,"rt":$n[1].Color,"sn":"EmberColor","ro":true},{"a":1,"n":"EmberInterval","is":true,"t":4,"rt":$n[0].Single,"sn":"EmberInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GrowTime","is":true,"t":4,"rt":$n[0].Single,"sn":"GrowTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"SmokeColor","is":true,"t":4,"rt":$n[1].Color,"sn":"SmokeColor","ro":true},{"a":1,"n":"SmokeInterval","is":true,"t":4,"rt":$n[0].Single,"sn":"SmokeInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"SpreadInterval","is":true,"t":4,"rt":$n[0].Single,"sn":"SpreadInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"StartSize","is":true,"t":4,"rt":$n[0].Single,"sn":"StartSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"animTime","t":4,"rt":$n[0].Single,"sn":"animTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"burningParts","t":4,"rt":$n[2].HashSet$1(UnityEngine.Transform),"sn":"burningParts","ro":true},{"a":1,"n":"damageAcc","t":4,"rt":$n[0].Single,"sn":"damageAcc","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"damagePerTick","t":4,"rt":$n[0].Single,"sn":"damagePerTick","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"endTime","t":4,"rt":$n[0].Single,"sn":"endTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"flames","t":4,"rt":$n[2].List$1(Burning.Flame),"sn":"flames","ro":true},{"a":1,"n":"interval","t":4,"rt":$n[0].Single,"sn":"interval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"monster","t":4,"rt":MonsterController,"sn":"monster"},{"a":1,"n":"nextEmber","t":4,"rt":$n[0].Single,"sn":"nextEmber","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextSmoke","t":4,"rt":$n[0].Single,"sn":"nextSmoke","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextSpread","t":4,"rt":$n[0].Single,"sn":"nextSpread","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextTick","t":4,"rt":$n[0].Single,"sn":"nextTick","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"parts","t":4,"rt":$n[2].List$1(UnityEngine.Transform),"sn":"parts","ro":true},{"a":1,"n":"source","t":4,"rt":IFireSource,"sn":"source"},{"a":1,"n":"target","t":4,"rt":IDamageable,"sn":"target"},{"a":1,"n":"useId","t":4,"rt":$n[0].Int32,"sn":"useId","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Burning end.*/

    /*Burning+Flame start.*/
    $m("Burning.Flame", function () { return {"td":Burning,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Born","t":4,"rt":$n[0].Single,"sn":"Born","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Part","t":4,"rt":$n[1].Transform,"sn":"Part"},{"a":2,"n":"Size","t":4,"rt":$n[0].Single,"sn":"Size","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Sr","t":4,"rt":$n[1].SpriteRenderer,"sn":"Sr"},{"a":2,"n":"StartK","t":4,"rt":$n[0].Single,"sn":"StartK","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Burning+Flame end.*/

    /*CameraShake start.*/
    $m("CameraShake", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Shake","t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0},{"n":"magnitude","pt":$n[0].Single,"ps":1}],"sn":"Shake","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"Ins","is":true,"t":4,"rt":CameraShake,"sn":"Ins"},{"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"offset","t":4,"rt":$n[1].Vector3,"sn":"offset"},{"a":1,"n":"strength","t":4,"rt":$n[0].Single,"sn":"strength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeLeft","t":4,"rt":$n[0].Single,"sn":"timeLeft","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CameraShake end.*/

    /*CycleHand start.*/
    $m("CycleHand", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"Pos","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"Pos","rt":$n[1].Vector2,"p":[$n[0].Int32]},{"a":2,"n":"SetTargets","t":8,"pi":[{"n":"list","ip":true,"pt":System.Array.type(UnityEngine.RectTransform),"ps":0}],"sn":"SetTargets","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.RectTransform)]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"active","t":4,"rt":$n[2].List$1(UnityEngine.RectTransform),"sn":"active","ro":true},{"a":1,"n":"baseScale","t":4,"rt":$n[1].Vector3,"sn":"baseScale"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fingerOffset","t":4,"rt":$n[1].Vector2,"sn":"fingerOffset"},{"a":1,"n":"index","t":4,"rt":$n[0].Int32,"sn":"index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveTime","t":4,"rt":$n[0].Single,"sn":"moveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulse","t":4,"rt":$n[0].Single,"sn":"pulse","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rect","t":4,"rt":$n[1].RectTransform,"sn":"rect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stayTime","t":4,"rt":$n[0].Single,"sn":"stayTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tapSpeed","t":4,"rt":$n[0].Single,"sn":"tapSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targets","t":4,"rt":$n[2].List$1(UnityEngine.RectTransform),"sn":"targets"},{"a":1,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CycleHand end.*/

    /*ElectricFx start.*/
    $m("ElectricFx", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Attach","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].GameObject,"ps":0},{"n":"sprite","pt":$n[1].Sprite,"ps":1},{"n":"scale","pt":$n[0].Single,"ps":2},{"n":"order","pt":$n[0].Int32,"ps":3}],"sn":"Attach","rt":ElectricFx,"p":[$n[1].GameObject,$n[1].Sprite,$n[0].Single,$n[0].Int32]},{"a":1,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"Place","t":8,"pi":[{"n":"sr","pt":$n[1].SpriteRenderer,"ps":0},{"n":"a","pt":$n[1].Vector2,"ps":1},{"n":"b","pt":$n[1].Vector2,"ps":2},{"n":"width","pt":$n[0].Single,"ps":3},{"n":"color","pt":$n[1].Color,"ps":4}],"sn":"Place","rt":$n[0].Void,"p":[$n[1].SpriteRenderer,$n[1].Vector2,$n[1].Vector2,$n[0].Single,$n[1].Color]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"Arcs","is":true,"t":4,"rt":$n[0].Int32,"sn":"Arcs","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"CoreColor","is":true,"t":4,"rt":$n[1].Color,"sn":"CoreColor","ro":true},{"a":1,"n":"GlowColor","is":true,"t":4,"rt":$n[1].Color,"sn":"GlowColor","ro":true},{"a":1,"n":"Interval","is":true,"t":4,"rt":$n[0].Single,"sn":"Interval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"Life","is":true,"t":4,"rt":$n[0].Single,"sn":"Life","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"Segments","is":true,"t":4,"rt":$n[0].Int32,"sn":"Segments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"cores","t":4,"rt":$n[2].List$1(UnityEngine.SpriteRenderer),"sn":"cores","ro":true},{"a":1,"n":"glows","t":4,"rt":$n[2].List$1(UnityEngine.SpriteRenderer),"sn":"glows","ro":true},{"a":1,"n":"hideTime","t":4,"rt":$n[0].Single,"sn":"hideTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextArc","t":4,"rt":$n[0].Single,"sn":"nextArc","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"order","t":4,"rt":$n[0].Int32,"sn":"order","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"parts","t":4,"rt":$n[2].List$1(UnityEngine.Transform),"sn":"parts","ro":true},{"a":1,"n":"root","t":4,"rt":$n[1].Transform,"sn":"root"},{"a":1,"n":"scale","t":4,"rt":$n[0].Single,"sn":"scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"sprite","t":4,"rt":$n[1].Sprite,"sn":"sprite"}]}; }, $n);
    /*ElectricFx end.*/

    /*FireFx start.*/
    $m("FireFx", function () { return {"nested":[FireFx.Particle],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Apply","is":true,"t":8,"pi":[{"n":"p","pt":FireFx.Particle,"ps":0},{"n":"k","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[FireFx.Particle,$n[0].Single]},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"sprite","pt":$n[1].Sprite,"ps":0},{"n":"frames","pt":System.Array.type(UnityEngine.Sprite),"ps":1},{"n":"frameRate","pt":$n[0].Single,"ps":2},{"n":"position","pt":$n[1].Vector2,"ps":3},{"n":"velocity","pt":$n[1].Vector2,"ps":4},{"n":"gravity","pt":$n[0].Single,"ps":5},{"n":"life","pt":$n[0].Single,"ps":6},{"n":"size0","pt":$n[0].Single,"ps":7},{"n":"size1","pt":$n[0].Single,"ps":8},{"n":"color","pt":$n[1].Color,"ps":9},{"n":"sortingOrder","pt":$n[0].Int32,"ps":10}],"sn":"Spawn","rt":$n[0].Void,"p":[$n[1].Sprite,System.Array.type(UnityEngine.Sprite),$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[1].Color,$n[0].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Ins","is":true,"t":16,"rt":FireFx,"g":{"a":2,"n":"get_Ins","t":8,"rt":FireFx,"fg":"Ins","is":true},"fn":"Ins"},{"a":1,"n":"active","t":4,"rt":$n[2].List$1(FireFx.Particle),"sn":"active","ro":true},{"a":1,"n":"ins","is":true,"t":4,"rt":FireFx,"sn":"ins"},{"a":1,"n":"pool","t":4,"rt":$n[2].Queue$1(FireFx.Particle),"sn":"pool","ro":true}]}; }, $n);
    /*FireFx end.*/

    /*FireFx+Particle start.*/
    $m("FireFx.Particle", function () { return {"td":FireFx,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Age","t":4,"rt":$n[0].Single,"sn":"Age","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Alpha0","t":4,"rt":$n[0].Single,"sn":"Alpha0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"FrameOffset","t":4,"rt":$n[0].Int32,"sn":"FrameOffset","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"FrameRate","t":4,"rt":$n[0].Single,"sn":"FrameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Frames","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"Frames"},{"a":2,"n":"Gravity","t":4,"rt":$n[0].Single,"sn":"Gravity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Life","t":4,"rt":$n[0].Single,"sn":"Life","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Size0","t":4,"rt":$n[0].Single,"sn":"Size0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Size1","t":4,"rt":$n[0].Single,"sn":"Size1","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Sr","t":4,"rt":$n[1].SpriteRenderer,"sn":"Sr"},{"a":2,"n":"Velocity","t":4,"rt":$n[1].Vector2,"sn":"Velocity"}]}; }, $n);
    /*FireFx+Particle end.*/

    /*FirePower start.*/
    $m("FirePower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Ignite","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"Ignite","rt":$n[0].Void,"p":[$n[1].Vector2]},{"ov":true,"a":2,"n":"PointerDown","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"ov":true,"a":2,"n":"SetDamage","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"SetDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"ov":true,"a":2,"n":"Busy","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_Busy","t":8,"rt":$n[0].Boolean,"fg":"Busy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Busy"},{"a":2,"n":"EmberSprite","t":16,"rt":$n[1].Sprite,"g":{"a":2,"n":"get_EmberSprite","t":8,"rt":$n[1].Sprite,"fg":"EmberSprite"},"fn":"EmberSprite"},{"a":2,"n":"FrameRate","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_FrameRate","t":8,"rt":$n[0].Single,"fg":"FrameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"FrameRate"},{"a":2,"n":"Frames","t":16,"rt":System.Array.type(UnityEngine.Sprite),"g":{"a":2,"n":"get_Frames","t":8,"rt":System.Array.type(UnityEngine.Sprite),"fg":"Frames"},"fn":"Frames"},{"a":2,"n":"SmokeSprite","t":16,"rt":$n[1].Sprite,"g":{"a":2,"n":"get_SmokeSprite","t":8,"rt":$n[1].Sprite,"fg":"SmokeSprite"},"fn":"SmokeSprite"},{"a":2,"n":"WorldScale","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_WorldScale","t":8,"rt":$n[0].Single,"fg":"WorldScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"WorldScale"},{"at":[new UnityEngine.HeaderAttribute("Burn"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"burnDamage","t":4,"rt":$n[0].Int32,"sn":"burnDamage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"burnDuration","t":4,"rt":$n[0].Single,"sn":"burnDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"burnInterval","t":4,"rt":$n[0].Single,"sn":"burnInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"emberSprite","t":4,"rt":$n[1].Sprite,"sn":"emberSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"frameRate","t":4,"rt":$n[0].Single,"sn":"frameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"frames","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"frames"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"igniteRadius","t":4,"rt":$n[0].Single,"sn":"igniteRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smokeSprite","t":4,"rt":$n[1].Sprite,"sn":"smokeSprite"}]}; }, $n);
    /*FirePower end.*/

    /*IDamageable start.*/
    $m("IDamageable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0},{"n":"useId","pt":$n[0].Int32,"ps":1}],"sn":"IDamageable$TakeDamage","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]}]}; }, $n);
    /*IDamageable end.*/

    /*IFireSource start.*/
    $m("IFireSource", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"EmberSprite","t":16,"rt":$n[1].Sprite,"g":{"ab":true,"a":2,"n":"get_EmberSprite","t":8,"rt":$n[1].Sprite,"fg":"IFireSource$EmberSprite"},"fn":"IFireSource$EmberSprite"},{"ab":true,"a":2,"n":"FrameRate","t":16,"rt":$n[0].Single,"g":{"ab":true,"a":2,"n":"get_FrameRate","t":8,"rt":$n[0].Single,"fg":"IFireSource$FrameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"IFireSource$FrameRate"},{"ab":true,"a":2,"n":"Frames","t":16,"rt":System.Array.type(UnityEngine.Sprite),"g":{"ab":true,"a":2,"n":"get_Frames","t":8,"rt":System.Array.type(UnityEngine.Sprite),"fg":"IFireSource$Frames"},"fn":"IFireSource$Frames"},{"ab":true,"a":2,"n":"SmokeSprite","t":16,"rt":$n[1].Sprite,"g":{"ab":true,"a":2,"n":"get_SmokeSprite","t":8,"rt":$n[1].Sprite,"fg":"IFireSource$SmokeSprite"},"fn":"IFireSource$SmokeSprite"},{"ab":true,"a":2,"n":"WorldScale","t":16,"rt":$n[0].Single,"g":{"ab":true,"a":2,"n":"get_WorldScale","t":8,"rt":$n[0].Single,"fg":"IFireSource$WorldScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"IFireSource$WorldScale"},{"a":1,"backing":true,"n":"<EmberSprite>k__BackingField","t":4,"rt":$n[1].Sprite,"sn":"IFireSource$EmberSprite"},{"a":1,"backing":true,"n":"<FrameRate>k__BackingField","t":4,"rt":$n[0].Single,"sn":"IFireSource$FrameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Frames>k__BackingField","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"IFireSource$Frames"},{"a":1,"backing":true,"n":"<SmokeSprite>k__BackingField","t":4,"rt":$n[1].Sprite,"sn":"IFireSource$SmokeSprite"},{"a":1,"backing":true,"n":"<WorldScale>k__BackingField","t":4,"rt":$n[0].Single,"sn":"IFireSource$WorldScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*IFireSource end.*/

    /*LightningPower start.*/
    $m("LightningPower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"PointerDown","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"ov":true,"a":2,"n":"SetDamage","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"SetDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"ov":true,"a":2,"n":"Busy","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_Busy","t":8,"rt":$n[0].Boolean,"fg":"Busy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Busy"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"strike","t":4,"rt":LightningStrike,"sn":"strike"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"touchRadius","t":4,"rt":$n[0].Single,"sn":"touchRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LightningPower end.*/

    /*LightningStrike start.*/
    $m("LightningStrike", function () { return {"nested":[LightningStrike.Bolt],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Build","t":8,"pi":[{"n":"bolt","pt":LightningStrike.Bolt,"ps":0},{"n":"target","pt":$n[1].Vector2,"ps":1},{"n":"scale","pt":$n[0].Single,"ps":2}],"sn":"Build","rt":$n[0].Void,"p":[LightningStrike.Bolt,$n[1].Vector2,$n[0].Single]},{"a":1,"n":"CreateBolt","t":8,"sn":"CreateBolt","rt":LightningStrike.Bolt},{"a":1,"n":"DamageColumn","t":8,"pi":[{"n":"x","pt":$n[0].Single,"ps":0},{"n":"halfWidth","pt":$n[0].Single,"ps":1},{"n":"damage","pt":$n[0].Int32,"ps":2},{"n":"useId","pt":$n[0].Int32,"ps":3}],"sn":"DamageColumn","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Int32]},{"a":1,"n":"Place","t":8,"pi":[{"n":"sr","pt":$n[1].SpriteRenderer,"ps":0},{"n":"a","pt":$n[1].Vector2,"ps":1},{"n":"b","pt":$n[1].Vector2,"ps":2},{"n":"width","pt":$n[0].Single,"ps":3},{"n":"color","pt":$n[1].Color,"ps":4}],"sn":"Place","rt":$n[0].Void,"p":[$n[1].SpriteRenderer,$n[1].Vector2,$n[1].Vector2,$n[0].Single,$n[1].Color]},{"a":1,"n":"Play","t":8,"pi":[{"n":"bolt","pt":LightningStrike.Bolt,"ps":0},{"n":"target","pt":$n[1].Vector2,"ps":1},{"n":"scale","pt":$n[0].Single,"ps":2}],"sn":"Play","rt":$n[3].IEnumerator,"p":[LightningStrike.Bolt,$n[1].Vector2,$n[0].Single]},{"a":1,"n":"SetSegment","t":8,"pi":[{"n":"bolt","pt":LightningStrike.Bolt,"ps":0},{"n":"a","pt":$n[1].Vector2,"ps":1},{"n":"b","pt":$n[1].Vector2,"ps":2},{"n":"scale","pt":$n[0].Single,"ps":3},{"n":"widthMul","pt":$n[0].Single,"ps":4}],"sn":"SetSegment","rt":$n[0].Void,"p":[LightningStrike.Bolt,$n[1].Vector2,$n[1].Vector2,$n[0].Single,$n[0].Single]},{"a":2,"n":"Strike","t":8,"pi":[{"n":"target","pt":$n[1].Vector2,"ps":0},{"n":"radius","pt":$n[0].Single,"ps":1},{"n":"damage","pt":$n[0].Int32,"ps":2},{"n":"scale","pt":$n[0].Single,"ps":3},{"n":"useId","pt":$n[0].Int32,"ps":4}],"sn":"Strike","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Int32]},{"a":2,"n":"Playing","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Playing","t":8,"rt":$n[0].Boolean,"fg":"Playing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Playing"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"branchSegments","t":4,"rt":$n[0].Int32,"sn":"branchSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"branches","t":4,"rt":$n[0].Int32,"sn":"branches","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"coreColor","t":4,"rt":$n[1].Color,"sn":"coreColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"coreWidth","t":4,"rt":$n[0].Single,"sn":"coreWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flashStrength","t":4,"rt":$n[0].Single,"sn":"flashStrength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"glowColor","t":4,"rt":$n[1].Color,"sn":"glowColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"glowWidth","t":4,"rt":$n[0].Single,"sn":"glowWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundY","t":4,"rt":$n[0].Single,"sn":"groundY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"hitBuffer","is":true,"t":4,"rt":$n[2].HashSet$1(IDamageable),"sn":"hitBuffer","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jitter","t":4,"rt":$n[0].Single,"sn":"jitter","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainSegments","t":4,"rt":$n[0].Int32,"sn":"mainSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"playing","t":4,"rt":$n[0].Int32,"sn":"playing","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"pool","t":4,"rt":$n[2].Queue$1(LightningStrike.Bolt),"sn":"pool","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"segmentSprite","t":4,"rt":$n[1].Sprite,"sn":"segmentSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeDuration","t":4,"rt":$n[0].Single,"sn":"shakeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeStrength","t":4,"rt":$n[0].Single,"sn":"shakeStrength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortingOrder","t":4,"rt":$n[0].Int32,"sn":"sortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"strikeSound","t":4,"rt":$n[1].AudioClip,"sn":"strikeSound"}]}; }, $n);
    /*LightningStrike end.*/

    /*LightningStrike+Bolt start.*/
    $m("LightningStrike.Bolt", function () { return {"td":LightningStrike,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Cores","t":4,"rt":$n[2].List$1(UnityEngine.SpriteRenderer),"sn":"Cores"},{"a":2,"n":"Glows","t":4,"rt":$n[2].List$1(UnityEngine.SpriteRenderer),"sn":"Glows"},{"a":2,"n":"Root","t":4,"rt":$n[1].GameObject,"sn":"Root"},{"a":2,"n":"Used","t":4,"rt":$n[0].Int32,"sn":"Used","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*LightningStrike+Bolt end.*/

    /*PowerBase start.*/
    $m("PowerBase", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CameraRect","is":true,"t":8,"sn":"CameraRect","rt":$n[1].Rect},{"v":true,"a":2,"n":"Cancel","t":8,"sn":"Cancel","rt":$n[0].Void},{"a":2,"n":"ConsumeUsed","t":8,"sn":"ConsumeUsed","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CreateSprite","is":true,"t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0},{"n":"sprite","pt":$n[1].Sprite,"ps":1},{"n":"parent","pt":$n[1].Transform,"ps":2},{"n":"order","pt":$n[0].Int32,"ps":3}],"sn":"CreateSprite","rt":$n[1].SpriteRenderer,"p":[$n[0].String,$n[1].Sprite,$n[1].Transform,$n[0].Int32]},{"a":2,"n":"DamageCircle","is":true,"t":8,"pi":[{"n":"center","pt":$n[1].Vector2,"ps":0},{"n":"radius","pt":$n[0].Single,"ps":1},{"n":"damage","pt":$n[0].Int32,"ps":2},{"n":"useId","pt":$n[0].Int32,"ps":3}],"sn":"DamageCircle","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Int32]},{"a":2,"n":"GetTarget","is":true,"t":8,"pi":[{"n":"col","pt":$n[1].Collider2D,"ps":0}],"sn":"GetTarget","rt":IDamageable,"p":[$n[1].Collider2D]},{"a":2,"n":"MonsterAt","is":true,"t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"r","pt":$n[0].Single,"ps":1}],"sn":"MonsterAt","rt":MonsterController,"p":[$n[1].Vector2,$n[0].Single]},{"v":true,"a":2,"n":"PointerDown","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"v":true,"a":2,"n":"PointerHold","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerHold","rt":$n[0].Void,"p":[$n[1].Vector2]},{"v":true,"a":2,"n":"PointerUp","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerUp","rt":$n[0].Void,"p":[$n[1].Vector2]},{"v":true,"a":2,"n":"SetDamage","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"SetDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":3,"n":"TryUse","t":8,"sn":"TryUse","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"v":true,"a":2,"n":"Busy","t":16,"rt":$n[0].Boolean,"g":{"v":true,"a":2,"n":"get_Busy","t":8,"rt":$n[0].Boolean,"fg":"Busy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Busy"},{"a":3,"n":"Scale","t":16,"rt":$n[0].Single,"g":{"a":3,"n":"get_Scale","t":8,"rt":$n[0].Single,"fg":"Scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Scale"},{"a":3,"n":"UseId","is":true,"t":16,"rt":$n[0].Int32,"g":{"a":3,"n":"get_UseId","t":8,"rt":$n[0].Int32,"fg":"UseId","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"UseId"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"baseScale","t":4,"rt":$n[0].Single,"sn":"baseScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"container","t":4,"rt":$n[1].Transform,"sn":"container"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"cooldown","t":4,"rt":$n[0].Single,"sn":"cooldown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"hitBuffer","is":true,"t":4,"rt":$n[2].HashSet$1(IDamageable),"sn":"hitBuffer","ro":true},{"a":1,"n":"nextUseTime","t":4,"rt":$n[0].Single,"sn":"nextUseTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"useSound","t":4,"rt":$n[1].AudioClip,"sn":"useSound"},{"a":1,"n":"usedThisPress","t":4,"rt":$n[0].Boolean,"sn":"usedThisPress","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*PowerBase end.*/

    /*PowerController start.*/
    $m("PowerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnyBusy","t":8,"sn":"AnyBusy","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CanPick","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"CanPick","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"CheckExhausted","t":8,"sn":"CheckExhausted","rt":$n[0].Void},{"a":1,"n":"CountUse","t":8,"sn":"CountUse","rt":$n[0].Void},{"a":2,"n":"Deselect","t":8,"sn":"Deselect","rt":$n[0].Void},{"a":1,"n":"IndexOf","t":8,"pi":[{"n":"power","pt":PowerBase,"ps":0}],"sn":"IndexOf","rt":$n[0].Int32,"p":[PowerBase],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"IsOverButton","t":8,"pi":[{"n":"screen","pt":$n[1].Vector2,"ps":0}],"sn":"IsOverButton","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsUsed","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"IsUsed","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnPlayerHand","is":true,"t":8,"pi":[{"n":"screen","pt":$n[1].Vector2,"ps":0}],"sn":"OnPlayerHand","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"RefreshLimit","t":8,"sn":"RefreshLimit","rt":$n[0].Void},{"a":1,"n":"RefreshTut","t":8,"sn":"RefreshTut","rt":$n[0].Void},{"a":1,"n":"Select","t":8,"pi":[{"n":"option","pt":PowerOption,"ps":0}],"sn":"Select","rt":$n[0].Void,"p":[PowerOption]},{"a":2,"n":"SetActivePowers","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"SetActivePowers","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SetDamage","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"SetDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SetLimit","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"SetLimit","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SetVisible","t":8,"pi":[{"n":"visible","pt":$n[0].Boolean,"ps":0}],"sn":"SetVisible","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"ShowChoiceTut","t":8,"sn":"ShowChoiceTut","rt":$n[0].Void},{"a":2,"n":"ShowOffTut","t":8,"pi":[{"n":"on","pt":$n[0].Boolean,"ps":0}],"sn":"ShowOffTut","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"ShowUseTut","is":true,"t":8,"pi":[{"n":"p","pt":PowerOption,"ps":0},{"n":"on","pt":$n[0].Boolean,"ps":1},{"n":"handOnly","pt":$n[0].Boolean,"ps":2}],"sn":"ShowUseTut","rt":$n[0].Void,"p":[PowerOption,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"StartTutorial","t":8,"pi":[{"n":"on","pt":$n[0].Boolean,"ps":0}],"sn":"StartTutorial","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"ToWorld","is":true,"t":8,"pi":[{"n":"screen","pt":$n[1].Vector2,"ps":0}],"sn":"ToWorld","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"Exhausted","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_Exhausted","t":8,"rt":$n[0].Boolean,"fg":"Exhausted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Exhausted"},{"a":2,"n":"HasPower","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_HasPower","t":8,"rt":$n[0].Boolean,"fg":"HasPower","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HasPower"},{"a":1,"n":"TypesLeft","t":16,"rt":$n[0].Int32,"g":{"a":1,"n":"get_TypesLeft","t":8,"rt":$n[0].Int32,"fg":"TypesLeft","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"TypesLeft"},{"a":2,"n":"Ins","is":true,"t":4,"rt":PowerController,"sn":"Ins"},{"a":2,"n":"UseId","is":true,"t":4,"rt":$n[0].Int32,"sn":"UseId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bar","t":4,"rt":$n[1].GameObject,"sn":"bar"},{"a":1,"n":"busy","t":4,"rt":$n[0].Boolean,"sn":"busy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Tut"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"choiceTut","t":4,"rt":$n[1].GameObject,"sn":"choiceTut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clickSound","t":4,"rt":$n[1].AudioClip,"sn":"clickSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"counterText","t":4,"rt":$n[5].TMP_Text,"sn":"counterText"},{"a":1,"n":"current","t":4,"rt":PowerOption,"sn":"current"},{"a":1,"n":"hasCurrent","t":4,"rt":$n[0].Boolean,"sn":"hasCurrent","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"limit","t":4,"rt":$n[0].Int32,"sn":"limit","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"offHand","t":4,"rt":CycleHand,"sn":"offHand"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"offTut","t":4,"rt":$n[1].GameObject,"sn":"offTut"},{"at":[new UnityEngine.HeaderAttribute("Limit"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"powerCountText","t":4,"rt":$n[5].TMP_Text,"sn":"powerCountText"},{"a":1,"n":"powerUsed","t":4,"rt":$n[0].Array.type(System.Boolean),"sn":"powerUsed"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"powers","t":4,"rt":$n[2].List$1(PowerOption),"sn":"powers"},{"a":1,"n":"pressing","t":4,"rt":$n[0].Boolean,"sn":"pressing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"reminder","t":4,"rt":$n[0].Boolean,"sn":"reminder","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"tutActive","t":4,"rt":$n[0].Boolean,"sn":"tutActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"typeLimit","t":4,"rt":$n[0].Int32,"sn":"typeLimit","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"useTut","t":4,"rt":$n[0].Boolean,"sn":"useTut","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"used","t":4,"rt":$n[0].Int32,"sn":"used","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*PowerController end.*/

    /*PowerOption start.*/
    $m("PowerOption", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Button","t":4,"rt":$n[4].Button,"sn":"Button"},{"a":2,"n":"Power","t":4,"rt":PowerBase,"sn":"Power"},{"a":2,"n":"Selected","t":4,"rt":$n[4].Image,"sn":"Selected"},{"a":2,"n":"Tutorial","t":4,"rt":$n[1].GameObject,"sn":"Tutorial"}]}; }, $n);
    /*PowerOption end.*/

    /*PowerTutorial start.*/
    $m("PowerTutorial", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fingerOffset","t":4,"rt":$n[1].Vector2,"sn":"fingerOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hand","t":4,"rt":$n[1].RectTransform,"sn":"hand"},{"a":1,"n":"handBaseScale","t":4,"rt":$n[1].Vector3,"sn":"handBaseScale"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulse","t":4,"rt":$n[0].Single,"sn":"pulse","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rect","t":4,"rt":$n[1].RectTransform,"sn":"rect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"swipe","t":4,"rt":$n[0].Boolean,"sn":"swipe","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"swipeDistance","t":4,"rt":$n[0].Single,"sn":"swipeDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PowerTutorial end.*/

    /*RainEffect start.*/
    $m("RainEffect", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Begin","t":8,"sn":"Begin","rt":$n[0].Void},{"a":1,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"Respawn","t":8,"pi":[{"n":"t","pt":$n[1].Transform,"ps":0},{"n":"cam","pt":$n[1].Rect,"ps":1},{"n":"spread","pt":$n[0].Boolean,"ps":2}],"sn":"Respawn","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Rect,$n[0].Boolean]},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"color","t":4,"rt":$n[1].Color,"sn":"color"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dropSize","t":4,"rt":$n[1].Vector2,"sn":"dropSize"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dropSprite","t":4,"rt":$n[1].Sprite,"sn":"dropSprite"},{"a":1,"n":"drops","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"drops"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeIn","t":4,"rt":$n[0].Single,"sn":"fadeIn","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeOut","t":4,"rt":$n[0].Single,"sn":"fadeOut","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundY","t":4,"rt":$n[0].Single,"sn":"groundY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"intensity","t":4,"rt":$n[0].Single,"sn":"intensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxDrops","t":4,"rt":$n[0].Int32,"sn":"maxDrops","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortingOrder","t":4,"rt":$n[0].Int32,"sn":"sortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"target","t":4,"rt":$n[0].Single,"sn":"target","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"velocity","t":4,"rt":$n[1].Vector2,"sn":"velocity"}]}; }, $n);
    /*RainEffect end.*/

    /*ScreenFx start.*/
    $m("ScreenFx", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Fade","t":8,"pi":[{"n":"img","pt":$n[4].Image,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"Fade","rt":$n[3].IEnumerator,"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"Flash","t":8,"pi":[{"n":"strength","pt":$n[0].Single,"ps":0}],"sn":"Flash","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"FlashRoutine","t":8,"pi":[{"n":"strength","pt":$n[0].Single,"ps":0}],"sn":"FlashRoutine","rt":$n[3].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"SetAlpha","is":true,"t":8,"pi":[{"n":"img","pt":$n[4].Image,"ps":0},{"n":"a","pt":$n[0].Single,"ps":1}],"sn":"SetAlpha","rt":$n[0].Void,"p":[$n[4].Image,$n[0].Single]},{"a":2,"n":"SetDark","t":8,"pi":[{"n":"alpha","pt":$n[0].Single,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1}],"sn":"SetDark","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"Ins","is":true,"t":4,"rt":ScreenFx,"sn":"Ins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dark","t":4,"rt":$n[4].Image,"sn":"dark"},{"a":1,"n":"darkRoutine","t":4,"rt":$n[1].Coroutine,"sn":"darkRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flash","t":4,"rt":$n[4].Image,"sn":"flash"},{"a":1,"n":"flashRoutine","t":4,"rt":$n[1].Coroutine,"sn":"flashRoutine"}]}; }, $n);
    /*ScreenFx end.*/

    /*StormPower start.*/
    $m("StormPower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ColumnClear","t":8,"pi":[{"n":"x","pt":$n[0].Single,"ps":0},{"n":"half","pt":$n[0].Single,"ps":1},{"n":"cam","pt":$n[1].Rect,"ps":2}],"sn":"ColumnClear","rt":$n[0].Boolean,"p":[$n[0].Single,$n[0].Single,$n[1].Rect],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"MissPoint","t":8,"pi":[{"n":"fallback","pt":$n[1].Vector2,"ps":0}],"sn":"MissPoint","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"PickTarget","t":8,"sn":"PickTarget","rt":$n[1].Transform},{"ov":true,"a":2,"n":"PointerDown","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"Run","t":8,"sn":"Run","rt":$n[3].IEnumerator},{"ov":true,"a":2,"n":"SetDamage","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"SetDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"ov":true,"a":2,"n":"Busy","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_Busy","t":8,"rt":$n[0].Boolean,"fg":"Busy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Busy"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"darkAlpha","t":4,"rt":$n[0].Single,"sn":"darkAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundY","t":4,"rt":$n[0].Single,"sn":"groundY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"missMargin","t":4,"rt":$n[0].Single,"sn":"missMargin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rain","t":4,"rt":RainEffect,"sn":"rain"},{"a":1,"n":"running","t":4,"rt":$n[0].Boolean,"sn":"running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"stageMonsters","t":4,"rt":$n[2].List$1(MonsterController),"sn":"stageMonsters"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"strike","t":4,"rt":LightningStrike,"sn":"strike"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"strikeInterval","t":4,"rt":$n[1].Vector2,"sn":"strikeInterval"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"strikes","t":4,"rt":$n[0].Int32,"sn":"strikes","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"targets","t":4,"rt":$n[2].List$1(UnityEngine.Transform),"sn":"targets","ro":true}]}; }, $n);
    /*StormPower end.*/

    /*SwipeHandTut start.*/
    $m("SwipeHandTut", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"baseScale","t":4,"rt":$n[1].Vector3,"sn":"baseScale"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fallbackDistance","t":4,"rt":$n[0].Single,"sn":"fallbackDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fingerOffset","t":4,"rt":$n[1].Vector2,"sn":"fingerOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hand","t":4,"rt":$n[1].RectTransform,"sn":"hand"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveTime","t":4,"rt":$n[0].Single,"sn":"moveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pressScale","t":4,"rt":$n[0].Single,"sn":"pressScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pressTime","t":4,"rt":$n[0].Single,"sn":"pressTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rect","t":4,"rt":$n[1].RectTransform,"sn":"rect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stayTime","t":4,"rt":$n[0].Single,"sn":"stayTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"target","t":4,"rt":TargetController,"sn":"target"},{"a":1,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SwipeHandTut end.*/

    /*TornadoPower start.*/
    $m("TornadoPower", function () { return {"nested":[TornadoPower.Phase,TornadoPower.Tornado],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Animate","t":8,"pi":[{"n":"t","pt":TornadoPower.Tornado,"ps":0},{"n":"tr","pt":$n[1].Transform,"ps":1}],"sn":"Animate","rt":$n[0].Void,"p":[TornadoPower.Tornado,$n[1].Transform]},{"a":1,"n":"Create","t":8,"sn":"Create","rt":TornadoPower.Tornado},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Landed","t":8,"pi":[{"n":"t","pt":TornadoPower.Tornado,"ps":0}],"sn":"Landed","rt":$n[0].Boolean,"p":[TornadoPower.Tornado],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Next","t":8,"pi":[{"n":"t","pt":TornadoPower.Tornado,"ps":0},{"n":"p","pt":TornadoPower.Phase,"ps":1}],"sn":"Next","rt":$n[0].Void,"p":[TornadoPower.Tornado,TornadoPower.Phase]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"ov":true,"a":2,"n":"PointerDown","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"Restore","t":8,"pi":[{"n":"t","pt":TornadoPower.Tornado,"ps":0}],"sn":"Restore","rt":$n[0].Void,"p":[TornadoPower.Tornado]},{"a":1,"n":"SetAlpha","is":true,"t":8,"pi":[{"n":"t","pt":TornadoPower.Tornado,"ps":0},{"n":"k","pt":$n[0].Single,"ps":1}],"sn":"SetAlpha","rt":$n[0].Void,"p":[TornadoPower.Tornado,$n[0].Single]},{"ov":true,"a":2,"n":"SetDamage","t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0}],"sn":"SetDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"ov":true,"a":2,"n":"Busy","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_Busy","t":8,"rt":$n[0].Boolean,"fg":"Busy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Busy"},{"a":1,"n":"LayerAlpha","is":true,"t":4,"rt":$n[0].Array.type(System.Single),"sn":"LayerAlpha","ro":true},{"a":1,"n":"active","t":4,"rt":$n[2].List$1(TornadoPower.Tornado),"sn":"active","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"armorFallTime","t":4,"rt":$n[0].Single,"sn":"armorFallTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"armorTick","t":4,"rt":$n[0].Single,"sn":"armorTick","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Damage"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeTime","t":4,"rt":$n[0].Single,"sn":"fadeTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"funnelSprite","t":4,"rt":$n[1].Sprite,"sn":"funnelSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundY","t":4,"rt":$n[0].Single,"sn":"groundY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"height","t":4,"rt":$n[0].Single,"sn":"height","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitSound","t":4,"rt":$n[1].AudioClip,"sn":"hitSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"landHeight","t":4,"rt":$n[0].Single,"sn":"landHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftAccel","t":4,"rt":$n[0].Single,"sn":"liftAccel","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftSound","t":4,"rt":$n[1].AudioClip,"sn":"liftSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftSpeed","t":4,"rt":$n[0].Single,"sn":"liftSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Toss"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftTime","t":4,"rt":$n[0].Single,"sn":"liftTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxTossTime","t":4,"rt":$n[0].Single,"sn":"maxTossTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"patrolDistance","t":4,"rt":$n[0].Single,"sn":"patrolDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"patrolSpeed","t":4,"rt":$n[0].Single,"sn":"patrolSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pool","t":4,"rt":$n[2].Queue$1(TornadoPower.Tornado),"sn":"pool","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortingOrder","t":4,"rt":$n[0].Int32,"sn":"sortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spin","t":4,"rt":$n[0].Single,"sn":"spin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"swirl","t":4,"rt":$n[0].Single,"sn":"swirl","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"touchRadius","t":4,"rt":$n[0].Single,"sn":"touchRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"widthRatio","t":4,"rt":$n[0].Single,"sn":"widthRatio","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TornadoPower end.*/

    /*TornadoPower+Phase start.*/
    $m("TornadoPower.Phase", function () { return {"td":TornadoPower,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Fade","is":true,"t":4,"rt":TornadoPower.Phase,"sn":"Fade","box":function ($v) { return Bridge.box($v, TornadoPower.Phase, System.Enum.toStringFn(TornadoPower.Phase));}},{"a":2,"n":"Fall","is":true,"t":4,"rt":TornadoPower.Phase,"sn":"Fall","box":function ($v) { return Bridge.box($v, TornadoPower.Phase, System.Enum.toStringFn(TornadoPower.Phase));}},{"a":2,"n":"Lift","is":true,"t":4,"rt":TornadoPower.Phase,"sn":"Lift","box":function ($v) { return Bridge.box($v, TornadoPower.Phase, System.Enum.toStringFn(TornadoPower.Phase));}}]}; }, $n);
    /*TornadoPower+Phase end.*/

    /*TornadoPower+Tornado start.*/
    $m("TornadoPower.Tornado", function () { return {"td":TornadoPower,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BaseY","t":4,"rt":$n[0].Single,"sn":"BaseY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Bodies","t":4,"rt":System.Array.type(UnityEngine.Rigidbody2D),"sn":"Bodies"},{"a":2,"n":"Body","t":4,"rt":$n[1].Transform,"sn":"Body"},{"a":2,"n":"CenterX","t":4,"rt":$n[0].Single,"sn":"CenterX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Gravity","t":4,"rt":$n[0].Array.type(System.Single),"sn":"Gravity"},{"a":2,"n":"Layers","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"Layers"},{"a":2,"n":"Phase","t":4,"rt":TornadoPower.Phase,"sn":"Phase","box":function ($v) { return Bridge.box($v, TornadoPower.Phase, System.Enum.toStringFn(TornadoPower.Phase));}},{"a":2,"n":"PhaseTime","t":4,"rt":$n[0].Single,"sn":"PhaseTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Root","t":4,"rt":$n[1].GameObject,"sn":"Root"},{"a":2,"n":"Scale","t":4,"rt":$n[0].Single,"sn":"Scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Target","t":4,"rt":MonsterController,"sn":"Target"},{"a":2,"n":"Time","t":4,"rt":$n[0].Single,"sn":"Time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"UseId","t":4,"rt":$n[0].Int32,"sn":"UseId","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*TornadoPower+Tornado end.*/

    /*TargetController start.*/
    $m("TargetController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CheckInput","t":8,"sn":"CheckInput","rt":$n[0].Void},{"a":2,"n":"IsEmpty","t":8,"sn":"IsEmpty","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsGrabPoint","t":8,"pi":[{"n":"screen","pt":$n[1].Vector2,"ps":0}],"sn":"IsGrabPoint","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"NextTarget","t":8,"sn":"NextTarget","rt":$n[0].Void},{"a":1,"n":"PointerOverUI","is":true,"t":8,"sn":"PointerOverUI","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"RemoveTarget","t":8,"sn":"RemoveTarget","rt":$n[0].Void},{"a":1,"n":"RemoveTargetPoint","t":8,"sn":"RemoveTargetPoint","rt":$n[0].Void},{"a":1,"n":"SetTargetPoint","t":8,"pi":[{"n":"point","pt":$n[1].Vector2,"ps":0}],"sn":"SetTargetPoint","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TouchingHand","t":8,"pi":[{"n":"point","pt":$n[1].Vector2,"ps":0}],"sn":"TouchingHand","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"CurrentHand","t":16,"rt":$n[1].Transform,"g":{"a":2,"n":"get_CurrentHand","t":8,"rt":$n[1].Transform,"fg":"CurrentHand"},"fn":"CurrentHand"},{"a":2,"n":"Ins","is":true,"t":4,"rt":TargetController,"sn":"Ins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentTarget","t":4,"rt":$n[1].TargetJoint2D,"sn":"currentTarget"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"grabRadius","t":4,"rt":$n[0].Single,"sn":"grabRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"index","t":4,"rt":$n[0].Int32,"sn":"index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"listTarget","t":4,"rt":$n[2].List$1(UnityEngine.TargetJoint2D),"sn":"listTarget"},{"a":1,"n":"pressing","t":4,"rt":$n[0].Boolean,"sn":"pressing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tut","t":4,"rt":$n[1].GameObject,"sn":"tut"},{"a":1,"n":"tutSeen","t":4,"rt":$n[0].Boolean,"sn":"tutSeen","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*TargetController end.*/

    /*VFXController start.*/
    $m("VFXController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BootstrapPool","t":8,"sn":"BootstrapPool","rt":$n[0].Void},{"a":1,"n":"CreateIns","t":8,"sn":"CreateIns","rt":$n[0].Void},{"a":1,"n":"CreateNewVFX","t":8,"sn":"CreateNewVFX","rt":$n[1].GameObject},{"a":1,"n":"GetFreeVFX","t":8,"sn":"GetFreeVFX","rt":$n[1].GameObject},{"a":1,"n":"ReturnToPool","t":8,"pi":[{"n":"blood","pt":$n[1].GameObject,"ps":0}],"sn":"ReturnToPool","rt":$n[3].IEnumerator,"p":[$n[1].GameObject]},{"a":2,"n":"SpawnVFX","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"SpawnVFX","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":2,"n":"Ins","is":true,"t":4,"rt":VFXController,"sn":"Ins"},{"a":1,"n":"bloodPool","t":4,"rt":$n[2].Queue$1(UnityEngine.GameObject),"sn":"bloodPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bloodPrefab","t":4,"rt":$n[1].GameObject,"sn":"bloodPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pool","t":4,"rt":$n[1].Transform,"sn":"pool"}]}; }, $n);
    /*VFXController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[6].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[7].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[7].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[7].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[7].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[6].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[4].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[6].Tweener,"p":[$n[4].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[6].Tweener,"p":[$n[4].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[9].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[8].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[4].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[9].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[4].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[6].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[6].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[6].Tweener,"p":[$n[4].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[6].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[8].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[4].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[6].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[6].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[6].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[6].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[6].DOTweenCYInstruction.WaitForCompletion,$n[6].DOTweenCYInstruction.WaitForRewind,$n[6].DOTweenCYInstruction.WaitForKill,$n[6].DOTweenCYInstruction.WaitForElapsedLoops,$n[6].DOTweenCYInstruction.WaitForPosition,$n[6].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[6].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[6].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[7].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[6].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[7].Path,$n[0].Single,$n[6].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[10].PathOptions,"ps":0},{"n":"t","pt":$n[6].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[10].PathOptions,$n[6].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DG.Tweening.DOTweenAnimation start.*/
    $m("DG.Tweening.DOTweenAnimation", function () { return {"nested":[$n[6].DOTweenAnimation.AnimationType,$n[6].DOTweenAnimation.TargetType],"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("DOTween/DOTween Animation")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CreateEditorPreview","t":8,"sn":"CreateEditorPreview","rt":$n[6].Tween},{"a":2,"n":"CreateTween","t":8,"pi":[{"n":"regenerateIfExists","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"andPlay","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"CreateTween","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Boolean]},{"ov":true,"a":2,"n":"DOComplete","t":8,"sn":"DOComplete","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOKill","t":8,"sn":"DOKill","rt":$n[0].Void},{"a":2,"n":"DOKillAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOKillAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOKillById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOKillById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPause","t":8,"sn":"DOPause","rt":$n[0].Void},{"a":2,"n":"DOPauseAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPauseAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlay","t":8,"sn":"DOPlay","rt":$n[0].Void},{"a":2,"n":"DOPlayAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayBackwards","t":8,"sn":"DOPlayBackwards","rt":$n[0].Void},{"a":2,"n":"DOPlayBackwardsAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayBackwardsById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayForward","t":8,"sn":"DOPlayForward","rt":$n[0].Void},{"a":2,"n":"DOPlayForwardAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayForwardById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayNext","t":8,"sn":"DOPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"sn":"DORestart","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"pi":[{"n":"fromHere","pt":$n[0].Boolean,"ps":0}],"sn":"DORestart$1","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"DORestartAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORestartById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DORewind","t":8,"sn":"DORewind","rt":$n[0].Void},{"a":2,"n":"DORewindAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORewindAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORewindAndPlayNext","t":8,"sn":"DORewindAndPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOTogglePause","t":8,"sn":"DOTogglePause","rt":$n[0].Void},{"a":1,"n":"Dispatch_OnReset","is":true,"t":8,"pi":[{"n":"anim","pt":$n[6].DOTweenAnimation,"ps":0}],"sn":"Dispatch_OnReset","rt":$n[0].Void,"p":[$n[6].DOTweenAnimation]},{"a":1,"n":"GetTweenGO","t":8,"sn":"GetTweenGO","rt":$n[1].GameObject},{"a":1,"n":"GetTweenTarget","t":8,"sn":"GetTweenTarget","rt":$n[1].GameObject},{"a":2,"n":"GetTweens","t":8,"sn":"GetTweens","rt":$n[2].List$1(DG.Tweening.Tween)},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ReEvaluateRelativeTween","t":8,"sn":"ReEvaluateRelativeTween","rt":$n[0].Void},{"a":2,"n":"RecreateTween","t":8,"sn":"RecreateTween","rt":$n[0].Void},{"a":2,"n":"RecreateTweenAndPlay","t":8,"sn":"RecreateTweenAndPlay","rt":$n[0].Void},{"a":1,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"RewindThenRecreateTween","t":8,"sn":"RewindThenRecreateTween","rt":$n[0].Void},{"a":2,"n":"RewindThenRecreateTweenAndPlay","t":8,"sn":"RewindThenRecreateTweenAndPlay","rt":$n[0].Void},{"a":2,"n":"SetAnimationTarget","t":8,"pi":[{"n":"tweenTarget","pt":$n[1].Component,"ps":0},{"n":"useTweenTargetGameObjectForGroupOperations","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"SetAnimationTarget","rt":$n[0].Void,"p":[$n[1].Component,$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TypeToDOTargetType","is":true,"t":8,"pi":[{"n":"t","pt":$n[0].Type,"ps":0}],"sn":"TypeToDOTargetType","rt":$n[6].DOTweenAnimation.TargetType,"p":[$n[0].Type],"box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":1,"n":"_playCount","t":4,"rt":$n[0].Int32,"sn":"_playCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_tweenAutoGenerationCalled","t":4,"rt":$n[0].Boolean,"sn":"_tweenAutoGenerationCalled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"animationType","t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"animationType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"autoGenerate","t":4,"rt":$n[0].Boolean,"sn":"autoGenerate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"autoKill","t":4,"rt":$n[0].Boolean,"sn":"autoKill","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"autoPlay","t":4,"rt":$n[0].Boolean,"sn":"autoPlay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeCurve","t":4,"rt":pc.AnimationCurve,"sn":"easeCurve"},{"a":2,"n":"easeType","t":4,"rt":$n[6].Ease,"sn":"easeType","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":2,"n":"endValueColor","t":4,"rt":$n[1].Color,"sn":"endValueColor"},{"a":2,"n":"endValueFloat","t":4,"rt":$n[0].Single,"sn":"endValueFloat","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"endValueRect","t":4,"rt":$n[1].Rect,"sn":"endValueRect"},{"a":2,"n":"endValueString","t":4,"rt":$n[0].String,"sn":"endValueString"},{"a":2,"n":"endValueTransform","t":4,"rt":$n[1].Transform,"sn":"endValueTransform"},{"a":2,"n":"endValueV2","t":4,"rt":$n[1].Vector2,"sn":"endValueV2"},{"a":2,"n":"endValueV3","t":4,"rt":$n[1].Vector3,"sn":"endValueV3"},{"a":2,"n":"forcedTargetType","t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"forcedTargetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"isActive","t":4,"rt":$n[0].Boolean,"sn":"isActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isFrom","t":4,"rt":$n[0].Boolean,"sn":"isFrom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isIndependentUpdate","t":4,"rt":$n[0].Boolean,"sn":"isIndependentUpdate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isRelative","t":4,"rt":$n[0].Boolean,"sn":"isRelative","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isValid","t":4,"rt":$n[0].Boolean,"sn":"isValid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"loopType","t":4,"rt":$n[6].LoopType,"sn":"loopType","box":function ($v) { return Bridge.box($v, DG.Tweening.LoopType, System.Enum.toStringFn(DG.Tweening.LoopType));}},{"a":2,"n":"loops","t":4,"rt":$n[0].Int32,"sn":"loops","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalBool0","t":4,"rt":$n[0].Boolean,"sn":"optionalBool0","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"optionalBool1","t":4,"rt":$n[0].Boolean,"sn":"optionalBool1","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"optionalFloat0","t":4,"rt":$n[0].Single,"sn":"optionalFloat0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"optionalInt0","t":4,"rt":$n[0].Int32,"sn":"optionalInt0","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalRotationMode","t":4,"rt":$n[6].RotateMode,"sn":"optionalRotationMode","box":function ($v) { return Bridge.box($v, DG.Tweening.RotateMode, System.Enum.toStringFn(DG.Tweening.RotateMode));}},{"a":2,"n":"optionalScrambleMode","t":4,"rt":$n[6].ScrambleMode,"sn":"optionalScrambleMode","box":function ($v) { return Bridge.box($v, DG.Tweening.ScrambleMode, System.Enum.toStringFn(DG.Tweening.ScrambleMode));}},{"a":2,"n":"optionalShakeRandomnessMode","t":4,"rt":$n[6].ShakeRandomnessMode,"sn":"optionalShakeRandomnessMode","box":function ($v) { return Bridge.box($v, DG.Tweening.ShakeRandomnessMode, System.Enum.toStringFn(DG.Tweening.ShakeRandomnessMode));}},{"a":2,"n":"optionalString","t":4,"rt":$n[0].String,"sn":"optionalString"},{"a":2,"n":"target","t":4,"rt":$n[1].Component,"sn":"target"},{"a":2,"n":"targetGO","t":4,"rt":$n[1].GameObject,"sn":"targetGO"},{"a":2,"n":"targetIsSelf","t":4,"rt":$n[0].Boolean,"sn":"targetIsSelf","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"targetType","t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"targetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tweenTargetIsTargetGO","t":4,"rt":$n[0].Boolean,"sn":"tweenTargetIsTargetGO","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useTargetAsV3","t":4,"rt":$n[0].Boolean,"sn":"useTargetAsV3","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnReset","is":true,"t":2,"ad":{"a":2,"n":"add_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnReset","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnReset","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation end.*/

    /*DG.Tweening.DOTweenAnimation+AnimationType start.*/
    $m("DG.Tweening.DOTweenAnimation.AnimationType", function () { return {"td":$n[6].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CameraAspect","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraAspect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraBackgroundColor","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraBackgroundColor","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraFieldOfView","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraFieldOfView","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraOrthoSize","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraOrthoSize","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraPixelRect","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraPixelRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraRect","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"CameraRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Color","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Color","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Fade","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Fade","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalMove","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"LocalMove","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalRotate","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"LocalRotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Move","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Move","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"None","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchPosition","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"PunchPosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchRotation","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"PunchRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchScale","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"PunchScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Rotate","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Rotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Scale","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Scale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakePosition","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"ShakePosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeRotation","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"ShakeRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeScale","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"ShakeScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"UIWidthHeight","is":true,"t":4,"rt":$n[6].DOTweenAnimation.AnimationType,"sn":"UIWidthHeight","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+AnimationType end.*/

    /*DG.Tweening.DOTweenAnimation+TargetType start.*/
    $m("DG.Tweening.DOTweenAnimation.TargetType", function () { return {"td":$n[6].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Camera","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Camera","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"CanvasGroup","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"CanvasGroup","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Image","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Image","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Light","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Light","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"RectTransform","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"RectTransform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Renderer","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Renderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Rigidbody","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody2D","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Rigidbody2D","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"SpriteRenderer","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"SpriteRenderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshPro","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"TextMeshPro","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshProUGUI","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"TextMeshProUGUI","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Transform","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Transform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Unset","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"Unset","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dBaseSprite","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"tk2dBaseSprite","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dTextMesh","is":true,"t":4,"rt":$n[6].DOTweenAnimation.TargetType,"sn":"tk2dTextMesh","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+TargetType end.*/

    /*DG.Tweening.DOTweenAnimationExtensions start.*/
    $m("DG.Tweening.DOTweenAnimationExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"IsSameOrSubclassOf","is":true,"t":8,"pi":[{"n":"t","pt":$n[1].Component,"ps":0}],"tpc":1,"tprm":["T"],"sn":"IsSameOrSubclassOf","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimationExtensions end.*/

    /*DG.Tweening.DOTweenProShortcuts start.*/
    $m("DG.Tweening.DOTweenProShortcuts", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"DOSpiral","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"axis","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[6].SpiralMode,"ps":3},{"n":"speed","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"frequency","dv":10.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"depth","dv":0.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":7}],"sn":"DOSpiral","rt":$n[6].Tweener,"p":[$n[1].Transform,$n[0].Single,$n[0].Nullable$1(UnityEngine.Vector3),$n[6].SpiralMode,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenProShortcuts end.*/

    }});

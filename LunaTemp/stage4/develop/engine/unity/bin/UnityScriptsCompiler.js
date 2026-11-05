if ( TRACE ) { TRACE( JSON.parse( '["AudioController#CreateIns","AudioController#Awake","AudioController#BootstrapPool","AudioController#Start","AudioController#PlaySFX","AudioController#GetFreeSource","AudioController#CreateNewSource","AudioController#ReturnToPool","BalanceController#Start","BalanceController#Update","FightController#Pool#get","FightController#Awake","FightController#Action","FightController#Spawn","FightController#GetFreeSpawn","FightController#CreateNewSpawn","BlockType#getDefaultValue","BlockType#init","BlockType#ctor","BlockType#getHashCode","BlockType#equals","BlockType#$clone","BombController#init","BombController#init","BombController#Start","BombController#OnEnable","BombController#CountDown","BombController#Boom","BombController#ReturnToPool","BombController#Damage","BulletController#Start","BulletController#OnEnable","BulletController#Update","BulletController#Move","BulletController#OnCollisionEnter2D","BulletController#LifeTime","BulletController#ReturnToPool","Burning#init","Burning#Ignite","Burning#ClampToBounds","Burning#init","Burning#Setup","Burning#IgnitePart","Burning#SetFlameScale","Burning#Update","Burning#EmitFx","Burning#Spread","Burning#Extinguish","CameraShake#init","CameraShake#Awake","CameraShake#Shake","CameraShake#LateUpdate","DefenseController#init","DefenseController#Awake","DefenseController#ChangeBlockType","DefenseController#Update","DefenseController#CheckInput","DefenseController#Action","DefenseController#Spawn","DefenseController#WorldToCell","DefenseController#CellToWorld","DG.Tweening.DOTweenAnimation#Dispatch_OnReset","DG.Tweening.DOTweenAnimation#TypeToDOTargetType","DG.Tweening.DOTweenAnimation#init","DG.Tweening.DOTweenAnimation#Awake","DG.Tweening.DOTweenAnimation#Start","DG.Tweening.DOTweenAnimation#Reset","DG.Tweening.DOTweenAnimation#OnDestroy","DG.Tweening.DOTweenAnimation#RewindThenRecreateTween","DG.Tweening.DOTweenAnimation#RewindThenRecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#RecreateTween","DG.Tweening.DOTweenAnimation#RecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#CreateTween","DG.Tweening.DOTweenAnimation#GetTweens","DG.Tweening.DOTweenAnimation#SetAnimationTarget","DG.Tweening.DOTweenAnimation#DOPlay","DG.Tweening.DOTweenAnimation#DOPlayBackwards","DG.Tweening.DOTweenAnimation#DOPlayForward","DG.Tweening.DOTweenAnimation#DOPause","DG.Tweening.DOTweenAnimation#DOTogglePause","DG.Tweening.DOTweenAnimation#DORewind","DG.Tweening.DOTweenAnimation#DORestart","DG.Tweening.DOTweenAnimation#DORestart$1","DG.Tweening.DOTweenAnimation#DOComplete","DG.Tweening.DOTweenAnimation#DOKill","DG.Tweening.DOTweenAnimation#DOPlayById","DG.Tweening.DOTweenAnimation#DOPlayAllById","DG.Tweening.DOTweenAnimation#DOPauseAllById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsAllById","DG.Tweening.DOTweenAnimation#DOPlayForwardById","DG.Tweening.DOTweenAnimation#DOPlayForwardAllById","DG.Tweening.DOTweenAnimation#DOPlayNext","DG.Tweening.DOTweenAnimation#DORewindAndPlayNext","DG.Tweening.DOTweenAnimation#DORewindAllById","DG.Tweening.DOTweenAnimation#DORestartById","DG.Tweening.DOTweenAnimation#DORestartAllById","DG.Tweening.DOTweenAnimation#DOKillById","DG.Tweening.DOTweenAnimation#DOKillAllById","DG.Tweening.DOTweenAnimation#CreateEditorPreview","DG.Tweening.DOTweenAnimation#GetTweenGO","DG.Tweening.DOTweenAnimation#GetTweenTarget","DG.Tweening.DOTweenAnimation#ReEvaluateRelativeTween","DG.Tweening.DOTweenAnimationExtensions#IsSameOrSubclassOf","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","DG.Tweening.DOTweenProShortcuts#ctor","DG.Tweening.DOTweenProShortcuts#DOSpiral","FightOption#getDefaultValue","FightOption#ctor","FightOption#getHashCode","FightOption#equals","FightOption#$clone","FireFx#Ins#get","FireFx#Apply","FireFx#init","FireFx#Spawn","FireFx#Update","FireFx.Particle#init","PowerBase#init","PowerBase#GetTarget","PowerBase#DamageCircle","PowerBase#CameraRect","PowerBase#CreateSprite","PowerBase#Scale#get","PowerBase#PointerDown","PowerBase#PointerHold","PowerBase#PointerUp","PowerBase#Cancel","PowerBase#TryUse","PowerBase#ConsumeUsed","FireTutorial#init","FireTutorial#Awake","FireTutorial#Update","FireTutorial#AnyBurning","FireTutorial#NearestMonster","FlamethrowerWeapon.Fireball#init","GameController#P#get","GameController#CreateIns","GameController#Awake","GameController#StartGame","GameController#GameOver","GameController#Complete","GameController#Click","GameController#RemoveMonster","GroundCheck#init","GroundCheck#IsTouching","KunaiController#Update","KunaiController#Rotate","KunaiController#Move","KunaiController#Start","KunaiController#OnEnable","KunaiController#OnCollisionEnter2D","KunaiController#LifeTime","KunaiController#ReturnToPool","LayoutController#Start","LayoutController#Update","LayoutController#Fit","LightningStrike#init","LightningStrike#init","LightningStrike#Strike","LightningStrike#DamageColumn","LightningStrike#CreateBolt","LightningStrike#Build","LightningStrike#SetSegment","LightningStrike#Place","LightningStrike#Play","LightningStrike.Bolt#init","LunaController#Start","LunaController#UpdateCount","LunaController#ShowEndCard","LunaController#ClickCTA","LunaController#EndGame","Piece#getDefaultValue","Piece#ctor","Piece#getHashCode","Piece#equals","Piece#$clone","PlayerBite#init","PlayerBite#Awake","PlayerBite#Start","PlayerBite#OnTriggerEnter2D","PlayerBite#OnTriggerExit2D","PlayerBite#HasLivingMonsterTouching","PlayerBite#PlayBiteSound","PlayerBite#BiteLoop","PlayerController#Fight#get","PlayerController#Head#get","PlayerController#init","PlayerController#Awake","PlayerController#ChangeFightOption","PlayerController#Dead","PlayerLaunch#IsLaunched#get","PlayerLaunch#Dead#get","PlayerLaunch#init","PlayerLaunch#Awake","PlayerLaunch#Launch","PlayerLaunch#Recover","PlayerLaunch#TouchingGround","PlayerZombie#IsZombie#get","PlayerZombie#init","PlayerZombie#TurnIntoZombie","PlayerZombie#LoseAfterDelay","PowerController#ToWorld","PowerController#init","PowerController#Awake","PowerController#OnDisable","PowerController#Select","PowerController#Update","PowerOption#getDefaultValue","PowerOption#ctor","PowerOption#getHashCode","PowerOption#equals","PowerOption#$clone","RainEffect#init","RainEffect#Begin","RainEffect#Stop","RainEffect#Init","RainEffect#Update","RainEffect#Respawn","ScreenFx#SetAlpha","ScreenFx#Awake","ScreenFx#SetDark","ScreenFx#Flash","ScreenFx#FlashRoutine","ScreenFx#Fade","TutController#Start","TutController#OnDestroy","VFXController#CreateIns","VFXController#Awake","VFXController#CreateNewVFX","VFXController#GetFreeVFX","VFXController#SpawnVFX","VFXController#ReturnToPool","ZombiePart#getDefaultValue","ZombiePart#ctor","ZombiePart#getHashCode","ZombiePart#equals","ZombiePart#$clone","HandWeapon#MonsterPoint","HandWeapon#Scale#get","HandWeapon#CanAttack#get","HandWeapon#ArmAngle#get","HandWeapon#init","HandWeapon#OnEnable","HandWeapon#OnDisable","HandWeapon#LimitAngle","HandWeapon#SetArm","HandWeapon#FixedUpdate","HandWeapon#Update","HandWeapon#ReadInput","HandWeapon#Press","HandWeapon#Release","HandWeapon#OnHold","HandWeapon#OnRelease","HandWeapon#Tick","HandWeapon#Action","HandWeapon#MonstersTouchingWeapon","HandWeapon#Blood","BlockController#Start","BlockController#TakeDamage","BlockController#TakeDMGPerSec","BlockController#Break","BlockController#OnCollisionEnter2D","BlockController#OnCollisionExit2D","DropController#Update","DropController#CheckInput","FirePower#Frames#get","FirePower#FrameRate#get","FirePower#WorldScale#get","FirePower#EmberSprite#get","FirePower#SmokeSprite#get","FirePower#init","FirePower#PointerDown","FirePower#PointerHold","FirePower#PointerUp","FirePower#Cancel","FirePower#Ignite","LightningPower#init","LightningPower#PointerDown","MonsterController#IsDead#get","MonsterController#IsLaunched#get","MonsterController#init","MonsterController#Start","MonsterController#StartGame","MonsterController#FixedUpdate","MonsterController#TakeDamage","MonsterController#Dead","MonsterController#Destroy$1","MonsterController#Launch","MonsterController#RecoverFromLaunch","MonsterController#TouchingGround","MonsterController#Move","MonsterController#Animation","PlayerHealth#IsDead#get","PlayerHealth#CurrentHP#get","PlayerHealth#init","PlayerHealth#Awake","PlayerHealth#TakeDamage","PlayerHealth#Damage","PlayerHealth#OnDeath","PlayerHealth#StopFlash","PlayerHealth#HitFlash","ShootController#OnEnable","ShootController#OnDisable","ShootController#WaitForCD","ShootController#Action","ShootController#Spawn","ShootController#Animation","ShootController#Update","ShootController#CheckInput","StormPower#init","StormPower#PointerDown","StormPower#Run","StormPower#PickTarget","TornadoPower#init","TornadoPower#PointerDown","TornadoPower#Create","TornadoPower#Update","TornadoPower#PlayLiftSound","TornadoPower#FixedUpdate","TornadoPower#LiftVelocity","TornadoPower#Bodies","ChopWeapon#init","ChopWeapon#OnEnable","ChopWeapon#OnPress","ChopWeapon#Swing","ChopWeapon#LerpArm","ChopWeapon#HitTouching","FlamethrowerWeapon#Frames#get","FlamethrowerWeapon#FrameRate#get","FlamethrowerWeapon#WorldScale#get","FlamethrowerWeapon#EmberSprite#get","FlamethrowerWeapon#SmokeSprite#get","FlamethrowerWeapon#init","FlamethrowerWeapon#OnEnable","FlamethrowerWeapon#OnPress","FlamethrowerWeapon#Tick","FlamethrowerWeapon#Shoot","FlamethrowerWeapon#UpdateFireballs","FlamethrowerWeapon#HitMonster","BatWeapon#OnEnable","SawWeapon#init","SawWeapon#OnEnable","SawWeapon#OnDisable","SawWeapon#Tick"]' ) ); }
/**
 * @version 1.0.9805.18233
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
                var s = this.GetFreeSource();
                s.PlayOneShot(clip);
                this.StartCoroutine$1(this.ReturnToPool(s));
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

                var s = new UnityEngine.GameObject.$ctor2("SFX").AddComponent(UnityEngine.AudioSource);
                s.transform.SetParent(this.pool);
                return s;
            },
            /*AudioController.CreateNewSource end.*/

            /*AudioController.ReturnToPool start.*/
            ReturnToPool: function (s) {
if ( TRACE ) { TRACE( "AudioController#ReturnToPool", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitUntil(function () {
                                            return !s.isPlaying;
                                        });
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.SFXPool.Enqueue(s);

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
            /*AudioController.ReturnToPool end.*/


        }
    });
    /*AudioController end.*/

    /*BalanceController start.*/
    Bridge.define("BalanceController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            targetRotation: 0,
            rb: null,
            force: 0
        },
        methods: {
            /*BalanceController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BalanceController#Start", this ); }

                this.rb = this.gameObject.GetComponent(UnityEngine.Rigidbody2D);
            },
            /*BalanceController.Start end.*/

            /*BalanceController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BalanceController#Update", this ); }

                this.rb.MoveRotation(UnityEngine.Mathf.LerpAngle(this.rb.rotation, this.targetRotation, this.force * UnityEngine.Time.deltaTime));
            },
            /*BalanceController.Update end.*/


        }
    });
    /*BalanceController end.*/

    /*FightController start.*/
    Bridge.define("FightController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            attackSound: null,
            spawnPrefab: null,
            poolParent: null,
            pool: null
        },
        props: {
            Pool: {
                get: function () {
if ( TRACE ) { TRACE( "FightController#Pool#get", this ); }

                    return this.pool;
                }
            }
        },
        methods: {
            /*FightController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FightController#Awake", this ); }

                this.pool = new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).ctor();
            },
            /*FightController.Awake end.*/

            /*FightController.Action start.*/
            Action: function (position, rotation) {
if ( TRACE ) { TRACE( "FightController#Action", this ); }

                GameController.Ins.Click();
                this.Spawn(position, rotation);
            },
            /*FightController.Action end.*/

            /*FightController.Spawn start.*/
            Spawn: function (position, rotation) {
if ( TRACE ) { TRACE( "FightController#Spawn", this ); }

                var b = this.GetFreeSpawn();
                b.transform.SetPositionAndRotation(UnityEngine.Vector3.FromVector2(position), rotation);
                b.SetActive(true);

                AudioController.Ins.PlaySFX(this.attackSound);
            },
            /*FightController.Spawn end.*/

            /*FightController.GetFreeSpawn start.*/
            GetFreeSpawn: function () {
if ( TRACE ) { TRACE( "FightController#GetFreeSpawn", this ); }

                if (this.pool.Count > 0) {
                    return this.pool.Dequeue();
                }
                return this.CreateNewSpawn();
            },
            /*FightController.GetFreeSpawn end.*/

            /*FightController.CreateNewSpawn start.*/
            CreateNewSpawn: function () {
if ( TRACE ) { TRACE( "FightController#CreateNewSpawn", this ); }

                return UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.spawnPrefab, this.poolParent);
            },
            /*FightController.CreateNewSpawn end.*/


        }
    });
    /*FightController end.*/

    /*IDamageable start.*/
    Bridge.define("IDamageable", {
        $kind: 3
    });
    /*IDamageable end.*/

    /*BlockType start.*/
    Bridge.define("BlockType", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "BlockType#getDefaultValue", this ); }
 return new BlockType(); }
            }
        },
        fields: {
            Button: null,
            Selected: null,
            Prefab: null,
            blockSize: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BlockType#init", this ); }

                this.blockSize = new UnityEngine.Vector2();
            },
            ctor: function () {
if ( TRACE ) { TRACE( "BlockType#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "BlockType#getHashCode", this ); }

                var h = Bridge.addHash([3555246354, this.Button, this.Selected, this.Prefab, this.blockSize]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "BlockType#equals", this ); }

                if (!Bridge.is(o, BlockType)) {
                    return false;
                }
                return Bridge.equals(this.Button, o.Button) && Bridge.equals(this.Selected, o.Selected) && Bridge.equals(this.Prefab, o.Prefab) && Bridge.equals(this.blockSize, o.blockSize);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "BlockType#$clone", this ); }

                var s = to || new BlockType();
                s.Button = this.Button;
                s.Selected = this.Selected;
                s.Prefab = this.Prefab;
                s.blockSize = this.blockSize.$clone();
                return s;
            }
        }
    });
    /*BlockType end.*/

    /*BombController start.*/
    Bridge.define("BombController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                STARTHash: 0,
                BOOMHash: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "BombController#init", this ); }

                    this.STARTHash = UnityEngine.Animator.StringToHash("START");
                    this.BOOMHash = UnityEngine.Animator.StringToHash("BOOM");
                }
            }
        },
        fields: {
            damage: 0,
            layer: null,
            startSound: null,
            actionSound: null,
            delay: 0,
            anim: null,
            vfx1: null,
            vfx2: null,
            scale: 0,
            radius: 0,
            pool: null,
            controller: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BombController#init", this ); }

                this.layer = new UnityEngine.LayerMask();
            }
        },
        methods: {
            /*BombController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BombController#Start", this ); }

                this.controller = Bridge.as(GameController.Ins.P.Fight.Controller, DropController);
                this.pool = this.controller.Pool;
            },
            /*BombController.Start end.*/

            /*BombController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "BombController#OnEnable", this ); }

                this.scale = this.transform.lossyScale.x / this.transform.localScale.x;
                this.vfx1.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( this.scale );
                this.vfx2.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( this.scale );
                AudioController.Ins.PlaySFX(this.startSound);
                this.anim.SetTrigger(BombController.STARTHash);
                this.StartCoroutine$1(this.CountDown());
            },
            /*BombController.OnEnable end.*/

            /*BombController.CountDown start.*/
            CountDown: function () {
if ( TRACE ) { TRACE( "BombController#CountDown", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Boom();

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
            /*BombController.CountDown end.*/

            /*BombController.Boom start.*/
            Boom: function () {
if ( TRACE ) { TRACE( "BombController#Boom", this ); }

                this.anim.SetTrigger(BombController.BOOMHash);
                AudioController.Ins.PlaySFX(this.actionSound);
                this.Damage();
                this.StartCoroutine$1(this.ReturnToPool());
            },
            /*BombController.Boom end.*/

            /*BombController.ReturnToPool start.*/
            ReturnToPool: function () {
if ( TRACE ) { TRACE( "BombController#ReturnToPool", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.gameObject.SetActive(false);
                                        this.pool.Enqueue(this.gameObject);

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
            /*BombController.ReturnToPool end.*/

            /*BombController.Damage start.*/
            Damage: function () {
if ( TRACE ) { TRACE( "BombController#Damage", this ); }

                var $t;
                var cols = UnityEngine.Physics2D.OverlapCircleAll(UnityEngine.Vector2.FromVector3(this.transform.position), this.radius * this.scale, UnityEngine.LayerMask.op_Implicit(this.layer.$clone()));
                $t = Bridge.getEnumerator(cols);
                try {
                    while ($t.moveNext()) {
                        var col = $t.Current;
                        var target = { };
                        col.gameObject.TryGetComponent$1(IDamageable, target);
                        if (target.v == null) {
                            col.gameObject.transform.parent.TryGetComponent$1(IDamageable, target);
                        }
                        target.v != null ? target.v.IDamageable$TakeDamage(this.damage) : null;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BombController.Damage end.*/


        }
    });
    /*BombController end.*/

    /*BulletController start.*/
    Bridge.define("BulletController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            damage: 0,
            hitMonsterSound: null,
            hitSound: null,
            lifeTime: 0,
            hit: false,
            pool: null,
            controller: null
        },
        methods: {
            /*BulletController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BulletController#Start", this ); }

                this.controller = Bridge.as(GameController.Ins.P.Fight.Controller, ShootController);
                this.pool = this.controller.Pool;
            },
            /*BulletController.Start end.*/

            /*BulletController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "BulletController#OnEnable", this ); }

                this.StartCoroutine$1(this.LifeTime());
            },
            /*BulletController.OnEnable end.*/

            /*BulletController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BulletController#Update", this ); }

                if (this.hit) {
                    return;
                }
                this.Move();
            },
            /*BulletController.Update end.*/

            /*BulletController.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "BulletController#Move", this ); }

                this.transform.position = this.transform.position.$clone().add( this.transform.right.clone().scale( this.speed * UnityEngine.Time.deltaTime ) );
            },
            /*BulletController.Move end.*/

            /*BulletController.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "BulletController#OnCollisionEnter2D", this ); }

                this.hit = true;

                if (collision.gameObject.CompareTag("Monster")) {
                    AudioController.Ins.PlaySFX(this.hitMonsterSound);
                    if (!UnityEngine.Object.op_Implicit(this.controller.currentMonster) || UnityEngine.GameObject.op_Inequality(collision.transform.parent.gameObject, this.controller.currentMonster.gameObject)) {
                        this.controller.currentMonster = collision.transform.parent.gameObject.GetComponent(MonsterController);
                    }
                    this.controller.currentMonster.TakeDamage(this.damage);
                } else {
                    AudioController.Ins.PlaySFX(this.hitSound);
                }
                this.ReturnToPool();
            },
            /*BulletController.OnCollisionEnter2D end.*/

            /*BulletController.LifeTime start.*/
            LifeTime: function () {
if ( TRACE ) { TRACE( "BulletController#LifeTime", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.lifeTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.ReturnToPool();

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
            /*BulletController.LifeTime end.*/

            /*BulletController.ReturnToPool start.*/
            ReturnToPool: function () {
if ( TRACE ) { TRACE( "BulletController#ReturnToPool", this ); }

                this.pool.Enqueue(this.gameObject);
                this.gameObject.SetActive(false);
                this.hit = false;
            },
            /*BulletController.ReturnToPool end.*/


        }
    });
    /*BulletController end.*/

    /*Burning start.*/
    Bridge.define("Burning", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                SpreadInterval: 0,
                GrowTime: 0,
                StartSize: 0,
                EmberInterval: 0,
                SmokeInterval: 0,
                EmberColor: null,
                SmokeColor: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Burning#init", this ); }

                    this.EmberColor = new UnityEngine.Color();
                    this.SmokeColor = new UnityEngine.Color();
                    this.SpreadInterval = 0.25;
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
                Ignite: function (target, source, hit, point, damage, interval, duration) {
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
                    b.damage = damage;
                    b.interval = interval;
                    b.endTime = UnityEngine.Time.time + duration;
                    // Chạm trúng bộ phận chưa cháy thì bốc cháy ngay tại chỗ chạm.
                    if (UnityEngine.Object.op_Implicit(hit)) {
                        b.IgnitePart(hit.transform, point, true);
                    }
                },
                /*Burning.Ignite:static end.*/

                /*Burning.ClampToBounds:static start.*/
                ClampToBounds: function (b, p) {
if ( TRACE ) { TRACE( "Burning#ClampToBounds", this ); }

                    return new pc.Vec2( Math.max(b.min.x, Math.min(p.x, b.max.x)), Math.max(b.min.y, Math.min(p.y, b.max.y)) );
                },
                /*Burning.ClampToBounds:static end.*/


            }
        },
        fields: {
            nextEmber: 0,
            nextSmoke: 0,
            target: null,
            monster: null,
            player: null,
            source: null,
            damage: 0,
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
            /*Burning.Setup start.*/
            Setup: function (t, s) {
if ( TRACE ) { TRACE( "Burning#Setup", this ); }

                var $t;
                this.target = t;
                this.source = s;
                this.monster = this.GetComponent(MonsterController);
                this.player = this.GetComponent(PlayerHealth);
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

                var $t;
                if (!UnityEngine.Object.op_Implicit(part) || this.burningParts.contains(part)) {
                    return;
                }
                this.burningParts.add(part);

                var col = part.GetComponent(UnityEngine.Collider2D);
                var partSize = UnityEngine.Object.op_Implicit(col) ? UnityEngine.Mathf.Max(col.bounds.halfExtents.$clone().scale( 2 ).x, col.bounds.halfExtents.$clone().scale( 2 ).y) : 0.5;
                var ws = this.source.IFireSource$WorldScale;
                var f = ($t = new Burning.Flame(), $t.Part = part, $t.Size = Math.max(0.3 * ws, Math.min(partSize * 1.1, 0.7 * ws)), $t.Born = UnityEngine.Time.time, $t.StartK = atContact ? Burning.StartSize : 0.0, $t);
                f.Sr = PowerBase.CreateSprite("Burn", ($t = this.source.IFireSource$Frames)[0], part, 100);
                // Ngọn đầu tiên đặt đúng chỗ chạm, các ngọn lan sau đặt giữa bộ phận.
                f.Sr.transform.position = atContact && UnityEngine.Object.op_Implicit(col) ? UnityEngine.Vector3.FromVector2(Burning.ClampToBounds(col.bounds, point)) : part.position.$clone();
                this.flames.add(f);
                this.SetFlameScale(f, f.StartK);
            },
            /*Burning.IgnitePart end.*/

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

                var dead = (UnityEngine.Object.op_Implicit(this.monster) && this.monster.IsDead) || (UnityEngine.Object.op_Implicit(this.player) && this.player.IsDead);
                if (!dead && UnityEngine.Time.time >= this.nextTick) {
                    this.nextTick = UnityEngine.Time.time + this.interval;
                    this.target.IDamageable$TakeDamage(this.damage);
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
                    this.IgnitePart(best, UnityEngine.Vector2.FromVector3(best.position), false);
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
            basePos: null,
            duration: 0,
            timeLeft: 0,
            strength: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraShake#init", this ); }

                this.basePos = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*CameraShake.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CameraShake#Awake", this ); }

                CameraShake.Ins = this;
                this.basePos = this.transform.localPosition.$clone();
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

                if (this.timeLeft <= 0) {
                    return;
                }
                this.timeLeft -= UnityEngine.Time.deltaTime;
                if (this.timeLeft <= 0) {
                    this.transform.localPosition = this.basePos.$clone();
                    return;
                }
                var k = this.strength * (this.timeLeft / this.duration);
                var offset = UnityEngine.Random.insideUnitCircle.$clone().scale( k );
                this.transform.localPosition = this.basePos.$clone().add( new pc.Vec3( offset.x, offset.y, 0 ) );
            },
            /*CameraShake.LateUpdate end.*/


        }
    });
    /*CameraShake end.*/

    /*DefenseController start.*/
    Bridge.define("DefenseController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            world: null,
            offset: null,
            cellSize: 0,
            putSound: null,
            clickSound: null,
            blockTypes: null,
            optionTut: null,
            buildTut: null,
            currentType: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DefenseController#init", this ); }

                this.offset = new UnityEngine.Vector2();
                this.currentType = new BlockType();
            }
        },
        methods: {
            /*DefenseController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DefenseController#Awake", this ); }

                this.blockTypes.ForEach(Bridge.fn.bind(this, function (b) {
                    b.Button.onClick.AddListener(Bridge.fn.bind(this, function () {
                        this.ChangeBlockType(b);
                    }));
                }));
            },
            /*DefenseController.Awake end.*/

            /*DefenseController.ChangeBlockType start.*/
            ChangeBlockType: function (type) {
if ( TRACE ) { TRACE( "DefenseController#ChangeBlockType", this ); }

                if (UnityEngine.Object.op_Implicit(this.optionTut)) {
                    UnityEngine.MonoBehaviour.Destroy(this.optionTut);
                    this.buildTut.SetActive(true);
                }
                if (UnityEngine.Object.op_Implicit(this.currentType.Prefab)) {
                    this.currentType.Selected.enabled = false;
                }
                AudioController.Ins.PlaySFX(this.clickSound);
                this.currentType = type.$clone();
                this.currentType.Selected.enabled = true;
            },
            /*DefenseController.ChangeBlockType end.*/

            /*DefenseController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DefenseController#Update", this ); }

                this.CheckInput();
            },
            /*DefenseController.Update end.*/

            /*DefenseController.CheckInput start.*/
            CheckInput: function () {
if ( TRACE ) { TRACE( "DefenseController#CheckInput", this ); }

                if (UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Began) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject$1(UnityEngine.Input.GetTouch(0).fingerId)) {
                        return;
                    }
                    var worldPos = UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(UnityEngine.Input.GetTouch(0).position));
                    this.Action(UnityEngine.Vector2.FromVector3(worldPos));
                    return;
                }
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                        return;
                    }
                    var worldPos1 = UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Input.mousePosition);
                    this.Action(UnityEngine.Vector2.FromVector3(worldPos1));
                }
            },
            /*DefenseController.CheckInput end.*/

            /*DefenseController.Action start.*/
            Action: function (position) {
if ( TRACE ) { TRACE( "DefenseController#Action", this ); }

                if (!UnityEngine.Object.op_Implicit(this.currentType.Prefab)) {
                    return;
                }
                this.Spawn(position);
            },
            /*DefenseController.Action end.*/

            /*DefenseController.Spawn start.*/
            Spawn: function (position) {
if ( TRACE ) { TRACE( "DefenseController#Spawn", this ); }

                var hit = UnityEngine.Physics2D.Raycast$2(position, pc.Vec2.ZERO.clone());
                if (UnityEngine.Object.op_Implicit(hit.collider)) {
                    return;
                }

                position = UnityEngine.Vector2.FromVector3(this.world.InverseTransformPoint(UnityEngine.Vector3.FromVector2(position)));
                var cell = this.WorldToCell(position);
                var pos = UnityEngine.Vector2.FromVector3(this.CellToWorld(cell));

                var b = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.currentType.Prefab, this.world);
                b.transform.localPosition = UnityEngine.Vector3.FromVector2(pos.$clone());
                b.SetActive(true);

                AudioController.Ins.PlaySFX(this.putSound);
                GameController.Ins.Click();
            },
            /*DefenseController.Spawn end.*/

            /*DefenseController.WorldToCell start.*/
            WorldToCell: function (world) {
if ( TRACE ) { TRACE( "DefenseController#WorldToCell", this ); }

                return new UnityEngine.Vector2Int.$ctor1(Math.round((world.x - this.offset.x) / this.cellSize), Math.round((world.y - this.offset.y) / this.cellSize));
            },
            /*DefenseController.WorldToCell end.*/

            /*DefenseController.CellToWorld start.*/
            CellToWorld: function (cell) {
if ( TRACE ) { TRACE( "DefenseController#CellToWorld", this ); }

                return new pc.Vec3( this.offset.x + cell.x * this.cellSize, this.offset.y + cell.y * this.cellSize, 0 );
            },
            /*DefenseController.CellToWorld end.*/


        }
    });
    /*DefenseController end.*/
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
                                this.tween = DG.Tweening.ShortcutExtensions.DOMove(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalBool0);
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
                                this.tween = DG.Tweening.ShortcutExtensions.DORotate(Bridge.cast(this.target, UnityEngine.Transform), this.endValueV3.$clone(), this.duration, this.optionalRotationMode);
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

                    return false;
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

    /*FightOption start.*/
    Bridge.define("FightOption", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "FightOption#getDefaultValue", this ); }
 return new FightOption(); }
            }
        },
        fields: {
            Button: null,
            Selected: null,
            Controller: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "FightOption#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "FightOption#getHashCode", this ); }

                var h = Bridge.addHash([3712362531, this.Button, this.Selected, this.Controller]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "FightOption#equals", this ); }

                if (!Bridge.is(o, FightOption)) {
                    return false;
                }
                return Bridge.equals(this.Button, o.Button) && Bridge.equals(this.Selected, o.Selected) && Bridge.equals(this.Controller, o.Controller);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "FightOption#$clone", this ); }

                var s = to || new FightOption();
                s.Button = this.Button;
                s.Selected = this.Selected;
                s.Controller = this.Controller;
                return s;
            }
        }
    });
    /*FightOption end.*/

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
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "PowerBase#init", this ); }

                    this.hitBuffer = new (System.Collections.Generic.HashSet$1(IDamageable)).ctor();
                }
            },
            methods: {
                /*PowerBase.GetTarget:static start.*/
                GetTarget: function (col) {
if ( TRACE ) { TRACE( "PowerBase#GetTarget", this ); }

                    if (!UnityEngine.Object.op_Implicit(col) || col.isTrigger) {
                        return null;
                    }
                    var monster = col.GetComponentInParent(MonsterController);
                    if (UnityEngine.Object.op_Implicit(monster)) {
                        return monster.IsDead ? null : monster;
                    }
                    var player = col.GetComponentInParent(PlayerHealth);
                    if (UnityEngine.Object.op_Implicit(player)) {
                        return player.IsDead ? null : player;
                    }
                    var block = col.GetComponentInParent(BlockController);
                    if (UnityEngine.Object.op_Implicit(block)) {
                        return block;
                    }
                    return null;
                },
                /*PowerBase.GetTarget:static end.*/

                /*PowerBase.DamageCircle:static start.*/
                DamageCircle: function (center, radius, damage) {
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
                            target.IDamageable$TakeDamage(damage);
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
            nextUseTime: 0,
            usedThisPress: false
        },
        props: {
            Scale: {
                get: function () {
if ( TRACE ) { TRACE( "PowerBase#Scale#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.container) ? this.container.lossyScale.x : 1.0;
                }
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

    /*FireTutorial start.*/
    Bridge.define("FireTutorial", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hand: null,
            monsterRoot: null,
            player: null,
            fingerOffset: null,
            swipeDistance: 0,
            swipeSpeed: 0,
            pulse: 0,
            rect: null,
            handBaseScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FireTutorial#init", this ); }

                this.fingerOffset = new UnityEngine.Vector2();
                this.handBaseScale = new UnityEngine.Vector3();
                this.fingerOffset = new pc.Vec2( 64.0, -50.0 );
                this.swipeDistance = 60.0;
                this.swipeSpeed = 4.0;
                this.pulse = 0.12;
            }
        },
        methods: {
            /*FireTutorial.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "FireTutorial#Awake", this ); }

                this.rect = Bridge.cast(this.transform, UnityEngine.RectTransform);
                if (UnityEngine.Object.op_Implicit(this.hand)) {
                    this.handBaseScale = this.hand.localScale.$clone();
                }
            },
            /*FireTutorial.Awake end.*/

            /*FireTutorial.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FireTutorial#Update", this ); }

                if (this.AnyBurning()) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject); // đã biết cách dùng -> xong tutorial
                    return;
                }
                var target = this.NearestMonster();
                if (!UnityEngine.Object.op_Implicit(this.hand)) {
                    return;
                }
                this.hand.gameObject.SetActive(UnityEngine.Object.op_Implicit(target));
                if (!UnityEngine.Object.op_Implicit(target)) {
                    return;
                }

                var screen = UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.WorldToScreenPoint(target.position));
                var local = { v : new UnityEngine.Vector2() };
                if (!UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.rect, screen, null, local)) {
                    return;
                }
                var s = Math.sin(UnityEngine.Time.unscaledTime * this.swipeSpeed);
                this.hand.anchoredPosition = local.v.$clone().add( this.fingerOffset ).add( new pc.Vec2( s * this.swipeDistance * 0.5, 0 ) );
                this.hand.localScale = this.handBaseScale.$clone().clone().scale( (1.0 - this.pulse * 0.5 * (1.0 + Math.cos(UnityEngine.Time.unscaledTime * this.swipeSpeed * 2.0))) );
            },
            /*FireTutorial.Update end.*/

            /*FireTutorial.AnyBurning start.*/
            AnyBurning: function () {
if ( TRACE ) { TRACE( "FireTutorial#AnyBurning", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.monsterRoot);
                try {
                    while ($t.moveNext()) {
                        var t = Bridge.cast($t.Current, UnityEngine.Transform);
                        if (UnityEngine.Object.op_Implicit(t.GetComponent(Burning))) {
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
            /*FireTutorial.AnyBurning end.*/

            /*FireTutorial.NearestMonster start.*/
            NearestMonster: function () {
if ( TRACE ) { TRACE( "FireTutorial#NearestMonster", this ); }

                var $t;
                var cam = PowerBase.CameraRect();
                var from = UnityEngine.Object.op_Implicit(this.player) ? UnityEngine.Vector2.FromVector3(this.player.position) : cam.center.$clone();
                var best = null;
                var bestDist = 3.40282347E+38;
                $t = Bridge.getEnumerator(this.monsterRoot);
                try {
                    while ($t.moveNext()) {
                        var t = Bridge.cast($t.Current, UnityEngine.Transform);
                        var m = t.GetComponent(MonsterController);
                        if (!UnityEngine.Object.op_Implicit(m) || m.IsDead) {
                            continue;
                        }
                        var body = t.Find("Body");
                        var p = UnityEngine.Object.op_Implicit(body) ? body : t;
                        if (!cam.Contains$1(p.position)) {
                            continue;
                        }
                        var d = (UnityEngine.Vector2.FromVector3(p.position).sub( from )).lengthSq();
                        if (d < bestDist) {
                            bestDist = d;
                            best = p;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return best;
            },
            /*FireTutorial.NearestMonster end.*/


        }
    });
    /*FireTutorial end.*/

    /*FlamethrowerWeapon+Fireball start.*/
    Bridge.define("FlamethrowerWeapon.Fireball", {
        $kind: 1002,
        fields: {
            Sr: null,
            Velocity: null,
            Age: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FlamethrowerWeapon.Fireball#init", this ); }

                this.Velocity = new UnityEngine.Vector2();
            }
        }
    });
    /*FlamethrowerWeapon+Fireball end.*/

    /*GameController start.*/
    Bridge.define("GameController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null
            }
        },
        fields: {
            startScene: null,
            buttonFight: null,
            buttonDefense: null,
            clickSound: null,
            fightOptions: null,
            tut: null,
            defenseOptions: null,
            defense: null,
            endScene: null,
            completeScene: null,
            gameOverScene: null,
            isEnd: false,
            player: null,
            numMonster: 0,
            world: null,
            OnStart: null,
            OnClick: null,
            OnGameOver: null,
            OnGameComplete: null
        },
        props: {
            P: {
                get: function () {
if ( TRACE ) { TRACE( "GameController#P#get", this ); }

                    return this.player;
                }
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
                this.buttonDefense.onClick.AddListener(Bridge.fn.bind(this, function () {
                    this.StartGame();
                    AudioController.Ins.PlaySFX(this.clickSound);
                    this.startScene.SetActive(false);
                    this.defenseOptions.SetActive(true);
                    this.defense.SetActive(true);
                    this.player.enabled = false;
                }));
                this.buttonFight.onClick.AddListener(Bridge.fn.bind(this, function () {
                    this.StartGame();
                    AudioController.Ins.PlaySFX(this.clickSound);
                    this.startScene.SetActive(false);
                    this.fightOptions.SetActive(true);
                }));
            },
            /*GameController.Awake end.*/

            /*GameController.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "GameController#StartGame", this ); }

                !Bridge.staticEquals(this.OnStart, null) ? this.OnStart() : null;
            },
            /*GameController.StartGame end.*/

            /*GameController.GameOver start.*/
            GameOver: function () {
if ( TRACE ) { TRACE( "GameController#GameOver", this ); }

                if (this.isEnd) {
                    return;
                }
                this.isEnd = true;
                this.endScene.SetActive(true);
                UnityEngine.MonoBehaviour.Destroy(this.completeScene);
                if (UnityEngine.Object.op_Implicit(this.gameOverScene)) {
                    this.gameOverScene.SetActive(true);
                }
                !Bridge.staticEquals(this.OnGameOver, null) ? this.OnGameOver() : null;
            },
            /*GameController.GameOver end.*/

            /*GameController.Complete start.*/
            Complete: function () {
if ( TRACE ) { TRACE( "GameController#Complete", this ); }

                if (this.isEnd) {
                    return;
                }
                this.isEnd = true;
                this.endScene.SetActive(true);
                if (UnityEngine.Object.op_Implicit(this.completeScene)) {
                    this.completeScene.SetActive(true);
                }
                !Bridge.staticEquals(this.OnGameComplete, null) ? this.OnGameComplete() : null;
            },
            /*GameController.Complete end.*/

            /*GameController.Click start.*/
            Click: function () {
if ( TRACE ) { TRACE( "GameController#Click", this ); }

                if (UnityEngine.Object.op_Implicit(this.tut)) {
                    UnityEngine.MonoBehaviour.Destroy(this.tut);
                }
                !Bridge.staticEquals(this.OnClick, null) ? this.OnClick() : null;
            },
            /*GameController.Click end.*/

            /*GameController.RemoveMonster start.*/
            RemoveMonster: function () {
if ( TRACE ) { TRACE( "GameController#RemoveMonster", this ); }

                this.numMonster = UnityEngine.Mathf.Max(0, ((this.numMonster - 1) | 0));
                if (this.numMonster > 0) {
                    return;
                }
                this.Complete();
            },
            /*GameController.RemoveMonster end.*/


        }
    });
    /*GameController end.*/

    /*GroundCheck start.*/
    Bridge.define("GroundCheck", {
        statics: {
            fields: {
                Skin: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "GroundCheck#init", this ); }

                    this.Skin = 0.06;
                }
            },
            methods: {
                /*GroundCheck.IsTouching:static start.*/
                IsTouching: function (parts, groundMask, self) {
if ( TRACE ) { TRACE( "GroundCheck#IsTouching", this ); }

                    for (var i = 0; i < System.Array.getCount(parts, UnityEngine.Collider2D); i = (i + 1) | 0) {
                        var c = System.Array.getItem(parts, i, UnityEngine.Collider2D);
                        if (!UnityEngine.Object.op_Implicit(c)) {
                            continue;
                        }
                        var b = c.bounds;
                        var hits = UnityEngine.Physics2D.OverlapBoxAll(UnityEngine.Vector2.FromVector3(b.center), new pc.Vec2( b.halfExtents.$clone().scale( 2 ).x + GroundCheck.Skin, b.halfExtents.$clone().scale( 2 ).y + GroundCheck.Skin ), 0);
                        for (var h = 0; h < hits.length; h = (h + 1) | 0) {
                            var other = hits[h];
                            if (!UnityEngine.Object.op_Implicit(other) || other.isTrigger) {
                                continue;
                            }
                            if ((groundMask.value & (1 << other.gameObject.layer)) === 0) {
                                continue;
                            }
                            if (other.transform.IsChildOf(self)) {
                                continue;
                            } // bỏ qua chính các bộ phận của mình
                            return true;
                        }
                    }
                    return false;
                },
                /*GroundCheck.IsTouching:static end.*/


            }
        }
    });
    /*GroundCheck end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*KunaiController start.*/
    Bridge.define("KunaiController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            damage: 0,
            hitMonsterSound: null,
            hitSound: null,
            lifeTime: 0,
            rotateSpeed: 0,
            moveSpeed: 0,
            hit: false,
            controller: null,
            pool: null
        },
        methods: {
            /*KunaiController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "KunaiController#Update", this ); }

                if (this.hit) {
                    return;
                }
                this.Rotate();
                this.Move();
            },
            /*KunaiController.Update end.*/

            /*KunaiController.Rotate start.*/
            Rotate: function () {
if ( TRACE ) { TRACE( "KunaiController#Rotate", this ); }

                var q = this.transform.rotation.$clone();
                q.setFromEulerAngles_Unity( q.getPositiveEulerAngles().$clone().add( new pc.Vec3( 0, 0, -this.rotateSpeed * UnityEngine.Time.deltaTime ) ).x, q.getPositiveEulerAngles().$clone().add( new pc.Vec3( 0, 0, -this.rotateSpeed * UnityEngine.Time.deltaTime ) ).y, q.getPositiveEulerAngles().$clone().add( new pc.Vec3( 0, 0, -this.rotateSpeed * UnityEngine.Time.deltaTime ) ).z );
                this.transform.rotation = q.$clone();
            },
            /*KunaiController.Rotate end.*/

            /*KunaiController.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "KunaiController#Move", this ); }

                this.transform.position = this.transform.position.$clone().add( pc.Vec3.RIGHT.clone().clone().scale( this.moveSpeed * UnityEngine.Time.deltaTime ) );
            },
            /*KunaiController.Move end.*/

            /*KunaiController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "KunaiController#Start", this ); }

                this.controller = Bridge.as(GameController.Ins.P.Fight.Controller, ShootController);
                this.pool = this.controller.Pool;
            },
            /*KunaiController.Start end.*/

            /*KunaiController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "KunaiController#OnEnable", this ); }

                this.StartCoroutine$1(this.LifeTime());
            },
            /*KunaiController.OnEnable end.*/

            /*KunaiController.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "KunaiController#OnCollisionEnter2D", this ); }

                this.hit = true;

                if (collision.gameObject.CompareTag("Monster")) {
                    AudioController.Ins.PlaySFX(this.hitMonsterSound);
                    if (!UnityEngine.Object.op_Implicit(this.controller.currentMonster) || UnityEngine.GameObject.op_Inequality(collision.transform.parent.gameObject, this.controller.currentMonster.gameObject)) {
                        this.controller.currentMonster = collision.transform.parent.gameObject.GetComponent(MonsterController);
                    }
                    this.controller.currentMonster.TakeDamage(this.damage);
                } else {
                    AudioController.Ins.PlaySFX(this.hitSound);
                }
                this.ReturnToPool();
            },
            /*KunaiController.OnCollisionEnter2D end.*/

            /*KunaiController.LifeTime start.*/
            LifeTime: function () {
if ( TRACE ) { TRACE( "KunaiController#LifeTime", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.lifeTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.ReturnToPool();

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
            /*KunaiController.LifeTime end.*/

            /*KunaiController.ReturnToPool start.*/
            ReturnToPool: function () {
if ( TRACE ) { TRACE( "KunaiController#ReturnToPool", this ); }

                this.pool.Enqueue(this.gameObject);
                this.gameObject.SetActive(false);
                this.hit = false;
            },
            /*KunaiController.ReturnToPool end.*/


        }
    });
    /*KunaiController end.*/

    /*LayoutController start.*/
    Bridge.define("LayoutController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            main: null,
            fight: null,
            defense: null,
            oldRatio: 0
        },
        methods: {
            /*LayoutController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LayoutController#Start", this ); }

                this.Fit();
            },
            /*LayoutController.Start end.*/

            /*LayoutController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LayoutController#Update", this ); }

                this.Fit();
            },
            /*LayoutController.Update end.*/

            /*LayoutController.Fit start.*/
            Fit: function () {
if ( TRACE ) { TRACE( "LayoutController#Fit", this ); }

                var ratio = UnityEngine.Screen.width / UnityEngine.Screen.height;
                if (ratio === this.oldRatio) {
                    return;
                }
                this.oldRatio = ratio;
                if (ratio > 1.0) {
                    this.main.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 2 );
                    this.fight.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 1.5 );
                    this.defense.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 1.5 );
                } else {
                    this.main.transform.localScale = new pc.Vec3( 1, 1, 1 );
                    this.fight.transform.localScale = new pc.Vec3( 1, 1, 1 );
                    this.defense.transform.localScale = new pc.Vec3( 1, 1, 1 );
                }
            },
            /*LayoutController.Fit end.*/


        }
    });
    /*LayoutController end.*/

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
            pool: null
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
            Strike: function (target, radius, damage, scale) {
if ( TRACE ) { TRACE( "LightningStrike#Strike", this ); }

                var ground = new pc.Vec2( target.x, this.groundY );
                var bolt = this.pool.Count > 0 ? this.pool.Dequeue() : this.CreateBolt();
                this.Build(bolt, ground.$clone(), scale);
                this.DamageColumn(target.x, radius * scale, damage);
                if (UnityEngine.Object.op_Implicit(ScreenFx.Ins)) {
                    ScreenFx.Ins.Flash(this.flashStrength);
                }
                if (UnityEngine.Object.op_Implicit(CameraShake.Ins)) {
                    CameraShake.Ins.Shake(this.shakeDuration, this.shakeStrength);
                }
                if (UnityEngine.Object.op_Implicit(this.strikeSound)) {
                    AudioController.Ins.PlaySFX(this.strikeSound);
                }
                this.StartCoroutine$1(this.Play(bolt, ground, scale));
            },
            /*LightningStrike.Strike end.*/

            /*LightningStrike.DamageColumn start.*/
            DamageColumn: function (x, halfWidth, damage) {
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
                        t.IDamageable$TakeDamage(damage);
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
            UseCountPlay: false,
            MaxCountPlay: 0,
            BGImage: null,
            CTA: null,
            count: 0,
            endCard: null
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
                if (this.UseCountPlay) {
                    GameController.Ins.OnClick = Bridge.fn.combine(GameController.Ins.OnClick, Bridge.fn.cacheBind(this, this.UpdateCount));
                }
            },
            /*LunaController.Start end.*/

            /*LunaController.UpdateCount start.*/
            UpdateCount: function () {
if ( TRACE ) { TRACE( "LunaController#UpdateCount", this ); }

                if (!this.UseCountPlay) {
                    return;
                }
                this.count = (this.count + 1) | 0;
                if (this.count >= this.MaxCountPlay) {
                    this.ShowEndCard();
                }
            },
            /*LunaController.UpdateCount end.*/

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

    /*Piece start.*/
    Bridge.define("Piece", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "Piece#getDefaultValue", this ); }
 return new Piece(); }
            }
        },
        fields: {
            Joint: null,
            Rb: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "Piece#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "Piece#getHashCode", this ); }

                var h = Bridge.addHash([1667590581, this.Joint, this.Rb]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "Piece#equals", this ); }

                if (!Bridge.is(o, Piece)) {
                    return false;
                }
                return Bridge.equals(this.Joint, o.Joint) && Bridge.equals(this.Rb, o.Rb);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "Piece#$clone", this ); }

                var s = to || new Piece();
                s.Joint = this.Joint;
                s.Rb = this.Rb;
                return s;
            }
        }
    });
    /*Piece end.*/

    /*PlayerBite start.*/
    Bridge.define("PlayerBite", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            biteDamage: 0,
            biteInterval: 0,
            biteSound: null,
            biteSoundInterval: 0,
            nextBiteSound: 0,
            health: null,
            zombie: null,
            touching: null,
            pruneBuffer: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerBite#init", this ); }

                this.biteDamage = 10;
                this.biteInterval = 0.2;
                this.biteSoundInterval = 0.4;
                this.touching = new (System.Collections.Generic.Dictionary$2(MonsterController,System.Int32)).ctor();
                this.pruneBuffer = new (System.Collections.Generic.List$1(MonsterController)).ctor();
            }
        },
        methods: {
            /*PlayerBite.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayerBite#Awake", this ); }

                this.health = this.GetComponent(PlayerHealth);
                this.zombie = this.GetComponent(PlayerZombie);
            },
            /*PlayerBite.Awake end.*/

            /*PlayerBite.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerBite#Start", this ); }

                // Dùng coroutine thay vì Update: GameController tắt PlayerController/các script player ở một số mode,
                // coroutine vẫn chạy khi component bị tắt.
                this.StartCoroutine$1(this.BiteLoop());
            },
            /*PlayerBite.Start end.*/

            /*PlayerBite.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (collision) {
if ( TRACE ) { TRACE( "PlayerBite#OnTriggerEnter2D", this ); }

                if (!collision.gameObject.CompareTag("Monster")) {
                    return;
                }
                var monster = collision.GetComponentInParent(MonsterController);
                if (!UnityEngine.Object.op_Implicit(monster) || monster.IsDead) {
                    return;
                }
                var count = { };
                this.touching.tryGetValue(monster, count);
                this.touching.setItem(monster, (count.v + 1) | 0);
            },
            /*PlayerBite.OnTriggerEnter2D end.*/

            /*PlayerBite.OnTriggerExit2D start.*/
            OnTriggerExit2D: function (collision) {
if ( TRACE ) { TRACE( "PlayerBite#OnTriggerExit2D", this ); }

                if (!collision.gameObject.CompareTag("Monster")) {
                    return;
                }
                var monster = collision.GetComponentInParent(MonsterController);
                var count = { };
                if (!UnityEngine.Object.op_Implicit(monster) || !this.touching.tryGetValue(monster, count)) {
                    return;
                }
                if (count.v <= 1) {
                    this.touching.remove(monster);
                } else {
                    this.touching.setItem(monster, (count.v - 1) | 0);
                }
            },
            /*PlayerBite.OnTriggerExit2D end.*/

            /*PlayerBite.HasLivingMonsterTouching start.*/
            HasLivingMonsterTouching: function () {
if ( TRACE ) { TRACE( "PlayerBite#HasLivingMonsterTouching", this ); }

                var $t, $t1;
                this.pruneBuffer.clear();
                $t = Bridge.getEnumerator(this.touching);
                try {
                    while ($t.moveNext()) {
                        var kv = $t.Current;
                        if (!UnityEngine.Object.op_Implicit(kv.key) || kv.key.IsDead) {
                            this.pruneBuffer.add(kv.key);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(this.pruneBuffer);
                try {
                    while ($t1.moveNext()) {
                        var m = $t1.Current;
                        this.touching.remove(m);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                return this.touching.Count > 0;
            },
            /*PlayerBite.HasLivingMonsterTouching end.*/

            /*PlayerBite.PlayBiteSound start.*/
            PlayBiteSound: function () {
if ( TRACE ) { TRACE( "PlayerBite#PlayBiteSound", this ); }

                if (!UnityEngine.Object.op_Implicit(this.biteSound) || UnityEngine.Time.time < this.nextBiteSound) {
                    return;
                }
                this.nextBiteSound = UnityEngine.Time.time + this.biteSoundInterval;
                AudioController.Ins.PlaySFX(this.biteSound);
            },
            /*PlayerBite.PlayBiteSound end.*/

            /*PlayerBite.BiteLoop start.*/
            BiteLoop: function () {
if ( TRACE ) { TRACE( "PlayerBite#BiteLoop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( !this.health.IsDead ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 1: {
                                    if (this.HasLivingMonsterTouching()) {
                                            $step = 2;
                                            continue;
                                        } else  {
                                            $step = 6;
                                            continue;
                                        }
                                }
                                case 2: {
                                    this.PlayBiteSound();
                                        if (this.health.Damage(this.biteDamage)) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    if (UnityEngine.Object.op_Implicit(this.zombie)) {
                                            this.zombie.TurnIntoZombie();
                                        } else {
                                            GameController.Ins.GameOver();
                                        }
                                        return false;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.biteInterval);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 8;
                                    continue;
                                }
                                case 6: {
                                    $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 9: {

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
            /*PlayerBite.BiteLoop end.*/


        }
    });
    /*PlayerBite end.*/

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            pieces: null,
            head: null,
            deadSFX: null,
            maxForce: null,
            minForce: null,
            fightOptions: null,
            optionTut: null,
            attackTut: null,
            fight: null,
            clickSound: null
        },
        props: {
            Fight: {
                get: function () {
if ( TRACE ) { TRACE( "PlayerController#Fight#get", this ); }

                    return this.fight.$clone();
                }
            },
            Head: {
                get: function () {
if ( TRACE ) { TRACE( "PlayerController#Head#get", this ); }

                    return this.head;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerController#init", this ); }

                this.maxForce = new UnityEngine.Vector2();
                this.minForce = new UnityEngine.Vector2();
                this.fight = new FightOption();
                this.maxForce = new pc.Vec2( 100, 500 );
                this.minForce = new pc.Vec2( -50, 50 );
            }
        },
        methods: {
            /*PlayerController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayerController#Awake", this ); }

                this.fightOptions.ForEach(Bridge.fn.bind(this, function (op) {
                    op.Button.onClick.AddListener(Bridge.fn.bind(this, function () {
                        this.ChangeFightOption(op);
                    }));
                }));
            },
            /*PlayerController.Awake end.*/

            /*PlayerController.ChangeFightOption start.*/
            ChangeFightOption: function (option) {
if ( TRACE ) { TRACE( "PlayerController#ChangeFightOption", this ); }

                if (UnityEngine.Object.op_Implicit(this.optionTut)) {
                    UnityEngine.MonoBehaviour.Destroy(this.optionTut);
                    this.attackTut.SetActive(true);
                }
                if (UnityEngine.Object.op_Implicit(this.fight.Controller)) {
                    this.fight.Controller.gameObject.SetActive(false);
                    this.fight.Selected.enabled = false;
                }
                AudioController.Ins.PlaySFX(this.clickSound);
                this.fight = option.$clone();
                this.fight.Selected.enabled = true;
                this.fight.Controller.gameObject.SetActive(true);
            },
            /*PlayerController.ChangeFightOption end.*/

            /*PlayerController.Dead start.*/
            Dead: function () {
if ( TRACE ) { TRACE( "PlayerController#Dead", this ); }

                var $t;
                AudioController.Ins.PlaySFX(this.deadSFX);
                $t = Bridge.getEnumerator(this.pieces);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current.$clone();
                        var force = new pc.Vec2( UnityEngine.Random.Range$1(this.minForce.x, this.maxForce.x), UnityEngine.Random.Range$1(this.minForce.y, this.maxForce.y) );
                        if (UnityEngine.Object.op_Implicit(p.Joint)) {
                            p.Joint.enabled = false;
                        }
                        p.Rb.AddForce(force);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.head.enabled = false;
            },
            /*PlayerController.Dead end.*/


        }
    });
    /*PlayerController end.*/

    /*PlayerLaunch start.*/
    Bridge.define("PlayerLaunch", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            groundMask: null,
            minAirTime: 0,
            maxLaunchX: 0,
            recoverForceMul: 0,
            head: null,
            health: null,
            homeTarget: null,
            isLaunched: false
        },
        props: {
            IsLaunched: {
                get: function () {
if ( TRACE ) { TRACE( "PlayerLaunch#IsLaunched#get", this ); }

                    return this.isLaunched;
                }
            },
            Dead: {
                get: function () {
if ( TRACE ) { TRACE( "PlayerLaunch#Dead#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.health) && this.health.IsDead;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerLaunch#init", this ); }

                this.groundMask = new UnityEngine.LayerMask();
                this.homeTarget = new UnityEngine.Vector2();
                this.groundMask = UnityEngine.LayerMask.op_Implicit$1(1);
                this.minAirTime = 0.3;
                this.maxLaunchX = 0.4;
                this.recoverForceMul = 3.0;
            }
        },
        methods: {
            /*PlayerLaunch.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayerLaunch#Awake", this ); }

                this.head = this.GetComponent(PlayerController).Head;
                this.health = this.GetComponent(PlayerHealth);
            },
            /*PlayerLaunch.Awake end.*/

            /*PlayerLaunch.Launch start.*/
            Launch: function (velocity, spin) {
if ( TRACE ) { TRACE( "PlayerLaunch#Launch", this ); }

                var $t, $t1;
                if (this.Dead) {
                    return;
                }
                velocity.x = Math.max(-this.maxLaunchX, Math.min(velocity.x, this.maxLaunchX));
                // Ghi lại chỗ đứng lúc bị hất (sau khi LayoutController đã scale). Tắt auto-config
                // để khi bật lại joint không tự đặt target vào chỗ player vừa rơi xuống.
                if (!this.isLaunched) {
                    this.homeTarget = this.head.target.$clone();
                }
                this.head.autoConfigureTarget = false;
                this.head.enabled = false;
                $t = Bridge.getEnumerator(this.GetComponentsInChildren(BalanceController));
                try {
                    while ($t.moveNext()) {
                        var b = $t.Current;
                        b.enabled = false;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(this.GetComponentsInChildren(UnityEngine.Rigidbody2D));
                try {
                    while ($t1.moveNext()) {
                        var rb = $t1.Current;
                        rb.linearVelocity = velocity.$clone();
                        rb.angularVelocity = UnityEngine.Random.Range$1(-spin, spin);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                if (this.isLaunched) {
                    return;
                }
                this.isLaunched = true;
                this.StartCoroutine$1(this.Recover());
            },
            /*PlayerLaunch.Launch end.*/

            /*PlayerLaunch.Recover start.*/
            Recover: function () {
if ( TRACE ) { TRACE( "PlayerLaunch#Recover", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    parts,
                    $t,
                    c,
                    $t1,
                    b,
                    baseForce,
                    baseDamping,
                    timeout,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.minAirTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    parts = new (System.Collections.Generic.List$1(UnityEngine.Collider2D)).ctor();
                                        $t = Bridge.getEnumerator(this.GetComponentsInChildren(UnityEngine.Collider2D));
                                        try {
                                            while ($t.moveNext()) {
                                                c = $t.Current;
                                                if (!c.isTrigger) {
                                                    parts.add(c);
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }
                                        $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return this.Dead || this.TouchingGround(parts);
                                        }));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.isLaunched = false;
                                        if (this.Dead) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    return false;
                                }
                                case 4: {
                                    $t1 = Bridge.getEnumerator(this.GetComponentsInChildren(BalanceController));
                                        try {
                                            while ($t1.moveNext()) {
                                                b = $t1.Current;
                                                b.enabled = true;
                                            }
                                        } finally {
                                            if (Bridge.is($t1, System.IDisposable)) {
                                                $t1.System$IDisposable$Dispose();
                                            }
                                        }

                                        // Kéo về chỗ cũ bằng TargetJoint (tạm tăng lực + giảm chấn để không bật quá đà), về tới thì trả như cũ.
                                        baseForce = this.head.maxForce;
                                        baseDamping = this.head.dampingRatio;
                                        this.head.maxForce = baseForce * this.recoverForceMul;
                                        this.head.dampingRatio = 1.0;
                                        this.head.target = this.homeTarget.$clone();
                                        this.head.enabled = true;
                                        timeout = UnityEngine.Time.time + 3.0;
                                        $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return this.Dead || this.isLaunched || UnityEngine.Time.time > timeout || UnityEngine.Vector2.FromVector3(this.head.transform.position.$clone()).sub( this.head.target ).length() < 0.2;
                                        }));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this.head.maxForce = baseForce;
                                        this.head.dampingRatio = baseDamping;

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
            /*PlayerLaunch.Recover end.*/

            /*PlayerLaunch.TouchingGround start.*/
            TouchingGround: function (parts) {
if ( TRACE ) { TRACE( "PlayerLaunch#TouchingGround", this ); }

                return GroundCheck.IsTouching(parts, this.groundMask, this.transform);
            },
            /*PlayerLaunch.TouchingGround end.*/


        }
    });
    /*PlayerLaunch end.*/

    /*PlayerZombie start.*/
    Bridge.define("PlayerZombie", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            parts: null,
            zombieSFX: null,
            loseDelay: 0,
            isZombie: false
        },
        props: {
            IsZombie: {
                get: function () {
if ( TRACE ) { TRACE( "PlayerZombie#IsZombie#get", this ); }

                    return this.isZombie;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerZombie#init", this ); }

                this.loseDelay = 1.0;
            }
        },
        methods: {
            /*PlayerZombie.TurnIntoZombie start.*/
            TurnIntoZombie: function () {
if ( TRACE ) { TRACE( "PlayerZombie#TurnIntoZombie", this ); }

                var $t;
                if (this.isZombie) {
                    return;
                }
                this.isZombie = true;
                $t = Bridge.getEnumerator(this.parts);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current.$clone();
                        if (UnityEngine.Object.op_Implicit(p.Renderer) && UnityEngine.Object.op_Implicit(p.Sprite)) {
                            p.Renderer.sprite = p.Sprite;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (UnityEngine.Object.op_Implicit(this.zombieSFX)) {
                    AudioController.Ins.PlaySFX(this.zombieSFX);
                }
                this.StartCoroutine$1(this.LoseAfterDelay());
            },
            /*PlayerZombie.TurnIntoZombie end.*/

            /*PlayerZombie.LoseAfterDelay start.*/
            LoseAfterDelay: function () {
if ( TRACE ) { TRACE( "PlayerZombie#LoseAfterDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.loseDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    GameController.Ins.GameOver();

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
            /*PlayerZombie.LoseAfterDelay end.*/


        }
    });
    /*PlayerZombie end.*/

    /*PowerController start.*/
    Bridge.define("PowerController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
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
            optionTut: null,
            actionTut: null,
            current: null,
            hasCurrent: false,
            pressing: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PowerController#init", this ); }

                this.current = new PowerOption();
            }
        },
        methods: {
            /*PowerController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PowerController#Awake", this ); }

                this.powers.ForEach(Bridge.fn.bind(this, function (p) {
                    p.Button.onClick.AddListener(Bridge.fn.bind(this, function () {
                        this.Select(p);
                    }));
                }));
                this.powers.ForEach(function (p) {
                    if (UnityEngine.Object.op_Implicit(p.Selected)) {
                        p.Selected.enabled = false;
                    }
                });
            },
            /*PowerController.Awake end.*/

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

                if (UnityEngine.Object.op_Implicit(this.optionTut)) {
                    UnityEngine.MonoBehaviour.Destroy(this.optionTut);
                }
                if (this.hasCurrent) {
                    this.current.Selected.enabled = false;
                    this.current.Power.Cancel();
                    if (UnityEngine.Object.op_Implicit(this.current.Tutorial)) {
                        this.current.Tutorial.SetActive(false);
                    }
                }
                AudioController.Ins.PlaySFX(this.clickSound);
                this.current = option.$clone();
                this.hasCurrent = true;
                this.current.Selected.enabled = true;

                // Power có tutorial riêng (vd. Lửa) thì hiện tutorial đó thay cho tutorial chung "Tap To Use Power!".
                // Tutorial riêng tự huỷ khi người chơi đã làm đúng; tutorial chung bị huỷ ở lần click đầu (GameController.Click).
                var ownTut = UnityEngine.Object.op_Implicit(this.current.Tutorial);
                if (ownTut) {
                    this.current.Tutorial.SetActive(true);
                }
                if (UnityEngine.Object.op_Implicit(this.actionTut)) {
                    this.actionTut.SetActive(!ownTut);
                }
            },
            /*PowerController.Select end.*/

            /*PowerController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PowerController#Update", this ); }

                if (!this.hasCurrent) {
                    return;
                }

                if (UnityEngine.Input.touchCount > 0) {
                    var t = UnityEngine.Input.GetTouch(0);
                    if (t.phase === UnityEngine.TouchPhase.Began) {
                        if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject$1(t.fingerId)) {
                            return;
                        }
                        this.pressing = true;
                        this.current.Power.PointerDown(PowerController.ToWorld(t.position));
                        if (this.current.Power.ConsumeUsed()) {
                            GameController.Ins.Click();
                        } // chỉ tính khi power kích hoạt thành công
                    } else if (this.pressing && (t.phase === UnityEngine.TouchPhase.Moved || t.phase === UnityEngine.TouchPhase.Stationary)) {
                        this.current.Power.PointerHold(PowerController.ToWorld(t.position));
                    } else if (this.pressing && (t.phase === UnityEngine.TouchPhase.Ended || t.phase === UnityEngine.TouchPhase.Canceled)) {
                        this.pressing = false;
                        this.current.Power.PointerUp(PowerController.ToWorld(t.position));
                    }
                    return;
                }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                        return;
                    }
                    this.pressing = true;
                    this.current.Power.PointerDown(PowerController.ToWorld(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition)));
                    if (this.current.Power.ConsumeUsed()) {
                        GameController.Ins.Click();
                    } // chỉ tính khi power kích hoạt thành công
                } else if (this.pressing && UnityEngine.Input.GetMouseButton(0)) {
                    this.current.Power.PointerHold(PowerController.ToWorld(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition)));
                } else if (this.pressing && UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.pressing = false;
                    this.current.Power.PointerUp(PowerController.ToWorld(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition)));
                }
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

    /*TornadoPower+Tornado start.*/
    Bridge.define("TornadoPower.Tornado", {
        $kind: 1002,
        fields: {
            Root: null,
            Layers: null,
            Time: 0,
            Scale: 0,
            Dir: 0
        }
    });
    /*TornadoPower+Tornado end.*/

    /*TutController start.*/
    Bridge.define("TutController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            movePos: null,
            moveTime: 0,
            fromScale: 0,
            toScale: 0,
            scaleTime: 0,
            sequence: null
        },
        methods: {
            /*TutController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TutController#Start", this ); }

                this.sequence = DG.Tweening.DOTween.Sequence();
                for (var i = 1; i < this.movePos.Count; i = (i + 1) | 0) {
                    DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.AppendInterval(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(this.sequence, DG.Tweening.ShortcutExtensions.DOScale(this.transform, this.toScale, this.scaleTime)), DG.Tweening.ShortcutExtensions.DOScale(this.transform, this.fromScale, this.scaleTime)), 0.5), DG.Tweening.ShortcutExtensions.DOLocalMove(this.transform, UnityEngine.Vector3.FromVector2(this.movePos.getItem(i).$clone()), this.moveTime));
                }
                DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.AppendInterval(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(this.sequence, DG.Tweening.ShortcutExtensions.DOScale(this.transform, this.toScale, this.scaleTime)), DG.Tweening.ShortcutExtensions.DOScale(this.transform, this.fromScale, this.scaleTime)), 0.5), DG.Tweening.ShortcutExtensions.DOLocalMove(this.transform, UnityEngine.Vector3.FromVector2(this.movePos.getItem(0).$clone()), this.moveTime));
                DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Sequence, this.sequence, -1, DG.Tweening.LoopType.Restart);
            },
            /*TutController.Start end.*/

            /*TutController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "TutController#OnDestroy", this ); }

                this.sequence != null ? DG.Tweening.TweenExtensions.Kill(this.sequence) : null;
            },
            /*TutController.OnDestroy end.*/


        }
    });
    /*TutController end.*/

    /*VFXController start.*/
    Bridge.define("VFXController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null
            }
        },
        fields: {
            pool: null,
            poolParent: null
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
                this.pool = new (System.Collections.Generic.Dictionary$2(UnityEngine.GameObject,System.Collections.Generic.Queue$1(UnityEngine.GameObject))).ctor();
            },
            /*VFXController.Awake end.*/

            /*VFXController.CreateNewVFX start.*/
            CreateNewVFX: function (prefab) {
if ( TRACE ) { TRACE( "VFXController#CreateNewVFX", this ); }

                var vfx = UnityEngine.Object.Instantiate(UnityEngine.GameObject, prefab);
                vfx.transform.SetParent(this.poolParent);
                return vfx;
            },
            /*VFXController.CreateNewVFX end.*/

            /*VFXController.GetFreeVFX start.*/
            GetFreeVFX: function (prefab) {
if ( TRACE ) { TRACE( "VFXController#GetFreeVFX", this ); }

                if (!this.pool.containsKey(prefab)) {
                    this.pool.add(prefab, new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).ctor());
                }
                var q = this.pool.getItem(prefab);
                if (q.Count > 0) {
                    return q.Dequeue();
                }
                return this.CreateNewVFX(prefab);
            },
            /*VFXController.GetFreeVFX end.*/

            /*VFXController.SpawnVFX start.*/
            SpawnVFX: function (position, prefab) {
if ( TRACE ) { TRACE( "VFXController#SpawnVFX", this ); }

                var vfx = this.GetFreeVFX(prefab);
                vfx.transform.position = UnityEngine.Vector3.FromVector2(position.$clone());
                vfx.transform.localScale = this.poolParent.transform.lossyScale.$clone();
                vfx.SetActive(true);
                this.StartCoroutine$1(this.ReturnToPool(prefab, vfx));
            },
            /*VFXController.SpawnVFX end.*/

            /*VFXController.ReturnToPool start.*/
            ReturnToPool: function (prefab, vfx) {
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
                                    vfx.SetActive(false);
                                        this.pool.getItem(prefab).Enqueue(vfx);

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

    /*ZombiePart start.*/
    Bridge.define("ZombiePart", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "ZombiePart#getDefaultValue", this ); }
 return new ZombiePart(); }
            }
        },
        fields: {
            Renderer: null,
            Sprite: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "ZombiePart#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "ZombiePart#getHashCode", this ); }

                var h = Bridge.addHash([3284027701, this.Renderer, this.Sprite]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "ZombiePart#equals", this ); }

                if (!Bridge.is(o, ZombiePart)) {
                    return false;
                }
                return Bridge.equals(this.Renderer, o.Renderer) && Bridge.equals(this.Sprite, o.Sprite);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "ZombiePart#$clone", this ); }

                var s = to || new ZombiePart();
                s.Renderer = this.Renderer;
                s.Sprite = this.Sprite;
                return s;
            }
        }
    });
    /*ZombiePart end.*/

    /*HandWeapon start.*/
    Bridge.define("HandWeapon", {
        inherits: [FightController],
        statics: {
            methods: {
                /*HandWeapon.MonsterPoint:static start.*/
                MonsterPoint: function (m) {
if ( TRACE ) { TRACE( "HandWeapon#MonsterPoint", this ); }

                    var b = m.transform.Find("Body");
                    return UnityEngine.Object.op_Implicit(b) ? UnityEngine.Vector2.FromVector3(b.position) : UnityEngine.Vector2.FromVector3(m.transform.position);
                },
                /*HandWeapon.MonsterPoint:static end.*/


            }
        },
        fields: {
            restAngle: 0,
            armGain: 0,
            armMaxSpeed: 0,
            armTorque: 0,
            hitPadding: 0,
            bloodVFX: null,
            weaponSprite: null,
            arm: null,
            player: null,
            health: null,
            body: null,
            savedLimits: null,
            savedUseLimits: false,
            savedMotor: null,
            savedUseMotor: false,
            targetAngle: 0,
            hasSaved: false,
            pressing: false,
            jointReferenceAngle: 0,
            found: null
        },
        props: {
            Scale: {
                get: function () {
if ( TRACE ) { TRACE( "HandWeapon#Scale#get", this ); }

                    return UnityEngine.Object.op_Implicit(this.player) ? this.player.transform.lossyScale.x : 1.0;
                }
            },
            CanAttack: {
                get: function () {
if ( TRACE ) { TRACE( "HandWeapon#CanAttack#get", this ); }

                    return !(UnityEngine.Object.op_Implicit(this.health) && this.health.IsDead);
                }
            },
            ArmAngle: {
                get: function () {
if ( TRACE ) { TRACE( "HandWeapon#ArmAngle#get", this ); }

                    var b = UnityEngine.Object.op_Implicit(this.arm.connectedBody) ? this.arm.connectedBody.transform : this.body;
                    return UnityEngine.Mathf.DeltaAngle(0.0, b.eulerAngles.z - this.arm.transform.eulerAngles.z - this.jointReferenceAngle);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HandWeapon#init", this ); }

                this.savedLimits = new UnityEngine.JointAngleLimits2D();
                this.savedMotor = new UnityEngine.JointMotor2D();
                this.restAngle = 30.0;
                this.armGain = 30.0;
                this.armMaxSpeed = 2000.0;
                this.armTorque = 10000.0;
                this.hitPadding = 0.05;
                this.found = new (System.Collections.Generic.List$1(MonsterController)).ctor();
            }
        },
        methods: {
            /*HandWeapon.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "HandWeapon#OnEnable", this ); }

                if (!UnityEngine.Object.op_Implicit(this.player)) {
                    this.arm = this.GetComponentInParent(UnityEngine.HingeJoint2D);
                    this.player = this.GetComponentInParent(PlayerController);
                    this.health = UnityEngine.Object.op_Implicit(this.player) ? this.player.GetComponent(PlayerHealth) : null;
                    this.body = UnityEngine.Object.op_Implicit(this.player) ? this.player.transform.Find("Body") : null;
                    this.weaponSprite = this.GetComponent(UnityEngine.SpriteRenderer);
                }
                this.savedLimits = this.arm.limits.$clone();
                this.savedUseLimits = this.arm.useLimits;
                this.savedMotor = this.arm.motor.$clone();
                this.savedUseMotor = this.arm.useMotor;
                this.hasSaved = true;
                this.SetArm(this.restAngle);
            },
            /*HandWeapon.OnEnable end.*/

            /*HandWeapon.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "HandWeapon#OnDisable", this ); }

                this.pressing = false;
                this.StopAllCoroutines(); // dừng nhát vung dở (coroutine không tự dừng khi chỉ tắt component)
                if (!this.hasSaved || !UnityEngine.Object.op_Implicit(this.arm)) {
                    return;
                }
                this.arm.limits = this.savedLimits.$clone();
                this.arm.useLimits = this.savedUseLimits;
                this.arm.motor = this.savedMotor.$clone();
                this.arm.useMotor = this.savedUseMotor;
            },
            /*HandWeapon.OnDisable end.*/

            /*HandWeapon.LimitAngle start.*/
            LimitAngle: function (angle) {
if ( TRACE ) { TRACE( "HandWeapon#LimitAngle", this ); }

                return angle + this.jointReferenceAngle;
            },
            /*HandWeapon.LimitAngle end.*/

            /*HandWeapon.SetArm start.*/
            SetArm: function (angle) {
if ( TRACE ) { TRACE( "HandWeapon#SetArm", this ); }

                this.targetAngle = angle;
                var a = this.LimitAngle(angle);
                var l = this.arm.limits.$clone();
                l.min = a - 1.0;
                l.max = a + 1.0;
                this.arm.limits = l.$clone();
                this.arm.useLimits = true;
            },
            /*HandWeapon.SetArm end.*/

            /*HandWeapon.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "HandWeapon#FixedUpdate", this ); }

                if (!UnityEngine.Object.op_Implicit(this.arm)) {
                    return;
                }
                var m = this.arm.motor.$clone();
                m.motorSpeed = Math.max(-this.armMaxSpeed, Math.min(UnityEngine.Mathf.DeltaAngle(this.ArmAngle, this.targetAngle) * this.armGain, this.armMaxSpeed));
                m.maxMotorTorque = this.armTorque;
                this.arm.motor = m.$clone();
                this.arm.useMotor = true;
            },
            /*HandWeapon.FixedUpdate end.*/

            /*HandWeapon.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "HandWeapon#Update", this ); }

                this.ReadInput();
                this.Tick();
            },
            /*HandWeapon.Update end.*/

            /*HandWeapon.ReadInput start.*/
            ReadInput: function () {
if ( TRACE ) { TRACE( "HandWeapon#ReadInput", this ); }

                if (UnityEngine.Input.touchCount > 0) {
                    var t = UnityEngine.Input.GetTouch(0);
                    if (t.phase === UnityEngine.TouchPhase.Began) {
                        if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject$1(t.fingerId)) {
                            return;
                        }
                        this.Press();
                    } else if (this.pressing && (t.phase === UnityEngine.TouchPhase.Ended || t.phase === UnityEngine.TouchPhase.Canceled)) {
                        this.Release();
                    } else {
                        if (this.pressing) {
                            this.OnHold();
                        }
                    }
                    return;
                }
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                        return;
                    }
                    this.Press();
                } else if (this.pressing && UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.Release();
                } else {
                    if (this.pressing && UnityEngine.Input.GetMouseButton(0)) {
                        this.OnHold();
                    }
                }
            },
            /*HandWeapon.ReadInput end.*/

            /*HandWeapon.Press start.*/
            Press: function () {
if ( TRACE ) { TRACE( "HandWeapon#Press", this ); }

                if (!this.CanAttack) {
                    return;
                }
                this.pressing = true;
                if (this.OnPress()) {
                    GameController.Ins.Click();
                } // chỉ tính click khi thực sự tấn công
            },
            /*HandWeapon.Press end.*/

            /*HandWeapon.Release start.*/
            Release: function () {
if ( TRACE ) { TRACE( "HandWeapon#Release", this ); }

                this.pressing = false;
                this.OnRelease();
            },
            /*HandWeapon.Release end.*/

            /*HandWeapon.OnHold start.*/
            OnHold: function () {
if ( TRACE ) { TRACE( "HandWeapon#OnHold", this ); }
 },
            /*HandWeapon.OnHold end.*/

            /*HandWeapon.OnRelease start.*/
            OnRelease: function () {
if ( TRACE ) { TRACE( "HandWeapon#OnRelease", this ); }
 },
            /*HandWeapon.OnRelease end.*/

            /*HandWeapon.Tick start.*/
            Tick: function () {
if ( TRACE ) { TRACE( "HandWeapon#Tick", this ); }
 },
            /*HandWeapon.Tick end.*/

            /*HandWeapon.Action start.*/
            Action: function (position, rotation) {
if ( TRACE ) { TRACE( "HandWeapon#Action", this ); }
 },
            /*HandWeapon.Action end.*/

            /*HandWeapon.MonstersTouchingWeapon start.*/
            MonstersTouchingWeapon: function () {
if ( TRACE ) { TRACE( "HandWeapon#MonstersTouchingWeapon", this ); }

                var $t;
                this.found.clear();
                var sr = this.weaponSprite;
                if (!UnityEngine.Object.op_Implicit(sr) || !UnityEngine.Object.op_Implicit(sr.sprite)) {
                    return this.found;
                }
                var b = sr.sprite.bounds;
                var ls = this.transform.lossyScale.$clone();
                var size = new pc.Vec2( Math.abs(b.halfExtents.$clone().scale( 2 ).x * ls.x), Math.abs(b.halfExtents.$clone().scale( 2 ).y * ls.y) ).add( pc.Vec2.ONE.clone().scale( this.hitPadding ).scale( this.Scale ) );
                var center = UnityEngine.Vector2.FromVector3(this.transform.TransformPoint$1(b.center));
                $t = Bridge.getEnumerator(UnityEngine.Physics2D.OverlapBoxAll(center, size, this.transform.eulerAngles.z));
                try {
                    while ($t.moveNext()) {
                        var col = $t.Current;
                        if (col.isTrigger) {
                            continue;
                        }
                        var m = col.GetComponentInParent(MonsterController);
                        if (UnityEngine.Object.op_Implicit(m) && !m.IsDead && !this.found.contains(m)) {
                            this.found.add(m);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return this.found;
            },
            /*HandWeapon.MonstersTouchingWeapon end.*/

            /*HandWeapon.Blood start.*/
            Blood: function (position) {
if ( TRACE ) { TRACE( "HandWeapon#Blood", this ); }

                if (UnityEngine.Object.op_Implicit(this.bloodVFX)) {
                    VFXController.Ins.SpawnVFX(position, this.bloodVFX);
                }
            },
            /*HandWeapon.Blood end.*/


        }
    });
    /*HandWeapon end.*/

    /*BlockController start.*/
    Bridge.define("BlockController", {
        inherits: [UnityEngine.MonoBehaviour,IDamageable],
        fields: {
            maxHP: 0,
            currentHP: 0,
            isBreak: false,
            numMonster: 0,
            hitSFX: null,
            breakVFX: null,
            breakSFX: null
        },
        alias: ["TakeDamage", "IDamageable$TakeDamage"],
        methods: {
            /*BlockController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BlockController#Start", this ); }

                this.currentHP = this.maxHP;
                this.StartCoroutine$1(this.TakeDMGPerSec());
            },
            /*BlockController.Start end.*/

            /*BlockController.TakeDamage start.*/
            TakeDamage: function (amount) {
if ( TRACE ) { TRACE( "BlockController#TakeDamage", this ); }

                if (amount <= 0) {
                    return;
                }
                this.currentHP = (this.currentHP - amount) | 0;
                if (UnityEngine.Object.op_Implicit(this.hitSFX)) {
                    AudioController.Ins.PlaySFX(this.hitSFX);
                }
                if (this.currentHP <= 0) {
                    this.Break();
                }
            },
            /*BlockController.TakeDamage end.*/

            /*BlockController.TakeDMGPerSec start.*/
            TakeDMGPerSec: function () {
if ( TRACE ) { TRACE( "BlockController#TakeDMGPerSec", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( !this.isBreak ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    this.TakeDamage(this.numMonster);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
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
            /*BlockController.TakeDMGPerSec end.*/

            /*BlockController.Break start.*/
            Break: function () {
if ( TRACE ) { TRACE( "BlockController#Break", this ); }

                this.isBreak = true;
                if (UnityEngine.Object.op_Implicit(this.breakVFX)) {
                    VFXController.Ins.SpawnVFX(UnityEngine.Vector2.FromVector3(this.transform.position), this.breakVFX);
                }
                if (UnityEngine.Object.op_Implicit(this.breakSFX)) {
                    AudioController.Ins.PlaySFX(this.breakSFX);
                }
                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*BlockController.Break end.*/

            /*BlockController.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "BlockController#OnCollisionEnter2D", this ); }

                if (!collision.gameObject.CompareTag("Monster")) {
                    return;
                }
                this.numMonster = (this.numMonster + 1) | 0;
            },
            /*BlockController.OnCollisionEnter2D end.*/

            /*BlockController.OnCollisionExit2D start.*/
            OnCollisionExit2D: function (collision) {
if ( TRACE ) { TRACE( "BlockController#OnCollisionExit2D", this ); }

                if (!collision.gameObject.CompareTag("Monster")) {
                    return;
                }
                this.numMonster = (this.numMonster - 1) | 0;
            },
            /*BlockController.OnCollisionExit2D end.*/


        }
    });
    /*BlockController end.*/

    /*DropController start.*/
    Bridge.define("DropController", {
        inherits: [FightController],
        methods: {
            /*DropController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DropController#Update", this ); }

                this.CheckInput();
            },
            /*DropController.Update end.*/

            /*DropController.CheckInput start.*/
            CheckInput: function () {
if ( TRACE ) { TRACE( "DropController#CheckInput", this ); }

                if (UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Began) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject$1(UnityEngine.Input.GetTouch(0).fingerId)) {
                        return;
                    }
                    var worldPos = UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(UnityEngine.Input.GetTouch(0).position));
                    this.Action(UnityEngine.Vector2.FromVector3(worldPos), pc.Quat.IDENTITY.clone());
                    return;
                }
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                        return;
                    }
                    var worldPos1 = UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Input.mousePosition);
                    this.Action(UnityEngine.Vector2.FromVector3(worldPos1), pc.Quat.IDENTITY.clone());
                }
            },
            /*DropController.CheckInput end.*/


        }
    });
    /*DropController end.*/

    /*FirePower start.*/
    Bridge.define("FirePower", {
        inherits: [PowerBase,IFireSource],
        fields: {
            frames: null,
            frameRate: 0,
            spacing: 0,
            igniteRadius: 0,
            burnDamage: 0,
            burnInterval: 0,
            burnDuration: 0,
            lastPos: null,
            drawing: false,
            emberSprite: null,
            smokeSprite: null,
            secondsPerClick: 0,
            holdTime: 0
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

                this.lastPos = new UnityEngine.Vector2();
                this.frameRate = 12.0;
                this.spacing = 0.2;
                this.igniteRadius = 0.35;
                this.burnDamage = 2;
                this.burnInterval = 0.4;
                this.burnDuration = 3.0;
                this.secondsPerClick = 1.0;
            }
        },
        methods: {
            /*FirePower.PointerDown start.*/
            PointerDown: function (position) {
if ( TRACE ) { TRACE( "FirePower#PointerDown", this ); }

                this.holdTime = 0;
                if (!this.TryUse()) {
                    return;
                }
                this.drawing = true;
                this.lastPos = position.$clone();
                this.Ignite(position);
            },
            /*FirePower.PointerDown end.*/

            /*FirePower.PointerHold start.*/
            PointerHold: function (position) {
if ( TRACE ) { TRACE( "FirePower#PointerHold", this ); }

                if (!this.drawing) {
                    return;
                }
                this.holdTime += UnityEngine.Time.deltaTime;
                // Dò dọc đường kéo để không bỏ sót khi kéo nhanh.
                var step = this.spacing * this.Scale;
                var d = position.$clone().sub( this.lastPos );
                var count = UnityEngine.Mathf.Max(1, Math.ceil(d.length() / step));
                for (var i = 1; i <= count; i = (i + 1) | 0) {
                    this.Ignite(this.lastPos.$clone().add( d.$clone().scale( i ).scale( 1.0 / ( count ) ) ));
                }
                this.lastPos = position.$clone();
                // Mỗi giây giữ tay tính thêm 1 click (sau khi đã đốt).
                while (this.holdTime >= this.secondsPerClick) {
                    this.holdTime -= this.secondsPerClick;
                    GameController.Ins.Click();
                }
            },
            /*FirePower.PointerHold end.*/

            /*FirePower.PointerUp start.*/
            PointerUp: function (position) {
if ( TRACE ) { TRACE( "FirePower#PointerUp", this ); }

                this.drawing = false;
                this.holdTime = 0;
            },
            /*FirePower.PointerUp end.*/

            /*FirePower.Cancel start.*/
            Cancel: function () {
if ( TRACE ) { TRACE( "FirePower#Cancel", this ); }

                this.drawing = false;
                this.holdTime = 0;
            },
            /*FirePower.Cancel end.*/

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
                        Burning.Ignite(target, this, col, position, this.burnDamage, this.burnInterval, this.burnDuration);
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
            damage: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LightningPower#init", this ); }

                this.radius = 0.8;
                this.damage = 5;
            }
        },
        methods: {
            /*LightningPower.PointerDown start.*/
            PointerDown: function (position) {
if ( TRACE ) { TRACE( "LightningPower#PointerDown", this ); }

                if (!this.TryUse()) {
                    return;
                }
                this.strike.Strike(position, this.radius, this.damage, this.Scale);
            },
            /*LightningPower.PointerDown end.*/


        }
    });
    /*LightningPower end.*/

    /*MonsterController start.*/
    Bridge.define("MonsterController", {
        inherits: [UnityEngine.MonoBehaviour,IDamageable],
        fields: {
            maxHP: 0,
            currentHP: 0,
            pieces: null,
            deadSFX: null,
            maxForce: null,
            minForce: null,
            balance: null,
            isDead: false,
            speed: 0,
            body: null,
            leftHand: null,
            rightHand: null,
            leftLeg: null,
            rightLeg: null,
            isGameStart: false,
            groundMask: null,
            minAirTime: 0,
            isLaunched: false
        },
        props: {
            IsDead: {
                get: function () {
if ( TRACE ) { TRACE( "MonsterController#IsDead#get", this ); }

                    return this.isDead;
                }
            },
            IsLaunched: {
                get: function () {
if ( TRACE ) { TRACE( "MonsterController#IsLaunched#get", this ); }

                    return this.isLaunched;
                }
            }
        },
        alias: ["TakeDamage", "IDamageable$TakeDamage"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MonsterController#init", this ); }

                this.maxForce = new UnityEngine.Vector2();
                this.minForce = new UnityEngine.Vector2();
                this.groundMask = new UnityEngine.LayerMask();
                this.maxForce = new pc.Vec2( 1000, 1000 );
                this.minForce = new pc.Vec2( 200, 200 );
                this.groundMask = UnityEngine.LayerMask.op_Implicit$1(1);
                this.minAirTime = 0.3;
            }
        },
        methods: {
            /*MonsterController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MonsterController#Start", this ); }

                this.currentHP = this.maxHP;
                GameController.Ins.OnStart = Bridge.fn.combine(GameController.Ins.OnStart, Bridge.fn.cacheBind(this, this.StartGame));
                this.StartCoroutine$1(this.Animation());
            },
            /*MonsterController.Start end.*/

            /*MonsterController.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "MonsterController#StartGame", this ); }

                this.isGameStart = true;
            },
            /*MonsterController.StartGame end.*/

            /*MonsterController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "MonsterController#FixedUpdate", this ); }

                this.Move();
            },
            /*MonsterController.FixedUpdate end.*/

            /*MonsterController.TakeDamage start.*/
            TakeDamage: function (amount) {
if ( TRACE ) { TRACE( "MonsterController#TakeDamage", this ); }

                this.currentHP = (this.currentHP - amount) | 0;
                if (this.currentHP <= 0) {
                    this.Dead();
                }
            },
            /*MonsterController.TakeDamage end.*/

            /*MonsterController.Dead start.*/
            Dead: function () {
if ( TRACE ) { TRACE( "MonsterController#Dead", this ); }

                var $t;
                if (this.isDead) {
                    return;
                }
                this.isDead = true;
                this.balance.enabled = false;
                AudioController.Ins.PlaySFX(this.deadSFX);
                $t = Bridge.getEnumerator(this.pieces);
                try {
                    while ($t.moveNext()) {
                        var p = $t.Current.$clone();
                        var force = new pc.Vec2( UnityEngine.Random.Range$1(this.minForce.x, this.maxForce.x), UnityEngine.Random.Range$1(this.minForce.y, this.maxForce.y) );
                        if (UnityEngine.Object.op_Implicit(p.Joint)) {
                            p.Joint.enabled = false;
                        }
                        p.Rb.AddForce(force);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                GameController.Ins.RemoveMonster();
                this.StartCoroutine$1(this.Destroy$1());
            },
            /*MonsterController.Dead end.*/

            /*MonsterController.Destroy$1 start.*/
            Destroy$1: function () {
if ( TRACE ) { TRACE( "MonsterController#Destroy$1", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);

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
            /*MonsterController.Destroy$1 end.*/

            /*MonsterController.Launch start.*/
            Launch: function (velocity, spin) {
if ( TRACE ) { TRACE( "MonsterController#Launch", this ); }

                var $t, $t1;
                if (this.isDead) {
                    return;
                }
                $t = Bridge.getEnumerator(this.GetComponentsInChildren(BalanceController));
                try {
                    while ($t.moveNext()) {
                        var b = $t.Current;
                        b.enabled = false;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(this.GetComponentsInChildren(UnityEngine.Rigidbody2D));
                try {
                    while ($t1.moveNext()) {
                        var rb = $t1.Current;
                        rb.linearVelocity = velocity.$clone();
                        rb.angularVelocity = UnityEngine.Random.Range$1(-spin, spin);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                if (this.isLaunched) {
                    return;
                }
                this.isLaunched = true;
                this.StartCoroutine$1(this.RecoverFromLaunch());
            },
            /*MonsterController.Launch end.*/

            /*MonsterController.RecoverFromLaunch start.*/
            RecoverFromLaunch: function () {
if ( TRACE ) { TRACE( "MonsterController#RecoverFromLaunch", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    parts,
                    $t,
                    b,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.minAirTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    parts = this.GetComponentsInChildren(UnityEngine.Collider2D);
                                        $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return this.isDead || this.TouchingGround(parts);
                                        }));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.isLaunched = false;
                                        if (this.isDead) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 3: {
                                    return false;
                                }
                                case 4: {
                                    $t = Bridge.getEnumerator(this.GetComponentsInChildren(BalanceController));
                                        try {
                                            while ($t.moveNext()) {
                                                b = $t.Current;
                                                b.enabled = true;
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
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
            /*MonsterController.RecoverFromLaunch end.*/

            /*MonsterController.TouchingGround start.*/
            TouchingGround: function (parts) {
if ( TRACE ) { TRACE( "MonsterController#TouchingGround", this ); }

                return GroundCheck.IsTouching(parts, this.groundMask, this.transform);
            },
            /*MonsterController.TouchingGround end.*/

            /*MonsterController.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "MonsterController#Move", this ); }

                if (!this.isGameStart || this.isDead || this.IsLaunched) {
                    return;
                }
                this.body.linearVelocity = new pc.Vec2( -this.speed / 2, this.speed );
            },
            /*MonsterController.Move end.*/

            /*MonsterController.Animation start.*/
            Animation: function () {
if ( TRACE ) { TRACE( "MonsterController#Animation", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return this.isGameStart;
                                        }));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if ( !this.isDead ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.leftHand.useMotor = true;
                                        this.leftLeg.useMotor = true;
                                        this.rightHand.useMotor = false;
                                        this.rightLeg.useMotor = false;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this.leftHand.useMotor = false;
                                        this.leftLeg.useMotor = false;
                                        this.rightHand.useMotor = true;
                                        this.rightLeg.useMotor = true;

                                        $step = 1;
                                        continue;
                                }
                                case 5: {

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
            /*MonsterController.Animation end.*/


        },
        overloads: {
            "Destroy()": "Destroy$1"
        }
    });
    /*MonsterController end.*/

    /*PlayerHealth start.*/
    Bridge.define("PlayerHealth", {
        inherits: [UnityEngine.MonoBehaviour,IDamageable],
        fields: {
            maxHP: 0,
            currentHP: 0,
            hitColor: null,
            hitFlashTime: 0,
            controller: null,
            bodySprites: null,
            bodyColors: null,
            flashRoutine: null,
            isDead: false
        },
        props: {
            IsDead: {
                get: function () {
if ( TRACE ) { TRACE( "PlayerHealth#IsDead#get", this ); }

                    return this.isDead;
                }
            },
            CurrentHP: {
                get: function () {
if ( TRACE ) { TRACE( "PlayerHealth#CurrentHP#get", this ); }

                    return this.currentHP;
                }
            }
        },
        alias: ["TakeDamage", "IDamageable$TakeDamage"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerHealth#init", this ); }

                this.hitColor = new UnityEngine.Color();
                this.maxHP = 50;
                this.hitColor = new pc.Color( 1.0, 0.35, 0.35, 1 );
                this.hitFlashTime = 0.12;
            }
        },
        methods: {
            /*PlayerHealth.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayerHealth#Awake", this ); }

                this.controller = this.GetComponent(PlayerController);
                this.currentHP = this.maxHP;
                // Lưu màu gốc các sprite cơ thể (lửa "Burn" gắn vào sau nên không nằm trong danh sách này).
                this.bodySprites = this.GetComponentsInChildren$1(UnityEngine.SpriteRenderer, true);
                this.bodyColors = System.Array.init(this.bodySprites.length, function (){
                    return new UnityEngine.Color();
                }, UnityEngine.Color);
                for (var i = 0; i < this.bodySprites.length; i = (i + 1) | 0) {
                    this.bodyColors[i] = this.bodySprites[i].color.$clone();
                }
            },
            /*PlayerHealth.Awake end.*/

            /*PlayerHealth.TakeDamage start.*/
            TakeDamage: function (amount) {
if ( TRACE ) { TRACE( "PlayerHealth#TakeDamage", this ); }

                if (!this.Damage(amount)) {
                    return;
                }
                this.controller.Dead();
                GameController.Ins.GameOver();
            },
            /*PlayerHealth.TakeDamage end.*/

            /*PlayerHealth.Damage start.*/
            Damage: function (amount) {
if ( TRACE ) { TRACE( "PlayerHealth#Damage", this ); }

                if (this.isDead || amount <= 0) {
                    return false;
                }
                this.currentHP = (this.currentHP - amount) | 0;
                if (this.currentHP > 0) {
                    if (this.flashRoutine != null) {
                        this.StopCoroutine$2(this.flashRoutine);
                    }
                    this.flashRoutine = this.StartCoroutine$1(this.HitFlash());
                    return false;
                }
                this.currentHP = 0;
                this.isDead = true;
                this.StopFlash();
                this.OnDeath();
                return true;
            },
            /*PlayerHealth.Damage end.*/

            /*PlayerHealth.OnDeath start.*/
            OnDeath: function () {
if ( TRACE ) { TRACE( "PlayerHealth#OnDeath", this ); }

                var $t, $t1;
                if (UnityEngine.Object.op_Implicit(this.controller.Head)) {
                    this.controller.Head.enabled = false;
                }
                $t = Bridge.getEnumerator(this.GetComponentsInChildren$1(FightController, true));
                try {
                    while ($t.moveNext()) {
                        var f = $t.Current;
                        f.enabled = false;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(UnityEngine.Object.FindObjectsOfType(PowerController));
                try {
                    while ($t1.moveNext()) {
                        var p = $t1.Current;
                        p.enabled = false;
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            },
            /*PlayerHealth.OnDeath end.*/

            /*PlayerHealth.StopFlash start.*/
            StopFlash: function () {
if ( TRACE ) { TRACE( "PlayerHealth#StopFlash", this ); }

                if (this.flashRoutine != null) {
                    this.StopCoroutine$2(this.flashRoutine);
                }
                this.flashRoutine = null;
                for (var i = 0; i < this.bodySprites.length; i = (i + 1) | 0) {
                    if (UnityEngine.Object.op_Implicit(this.bodySprites[i])) {
                        this.bodySprites[i].color = this.bodyColors[i].$clone();
                    }
                }
            },
            /*PlayerHealth.StopFlash end.*/

            /*PlayerHealth.HitFlash start.*/
            HitFlash: function () {
if ( TRACE ) { TRACE( "PlayerHealth#HitFlash", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    for (var i = 0; i < this.bodySprites.length; i = (i + 1) | 0) {
                                            if (UnityEngine.Object.op_Implicit(this.bodySprites[i])) {
                                                this.bodySprites[i].color = ($t = this.bodyColors[i], new pc.Color( $t.r * this.hitColor.r, $t.g * this.hitColor.g, $t.b * this.hitColor.b, $t.a * this.hitColor.a ));
                                            }
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.hitFlashTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    for (var i1 = 0; i1 < this.bodySprites.length; i1 = (i1 + 1) | 0) {
                                            if (UnityEngine.Object.op_Implicit(this.bodySprites[i1])) {
                                                this.bodySprites[i1].color = this.bodyColors[i1].$clone();
                                            }
                                        }
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
            /*PlayerHealth.HitFlash end.*/


        }
    });
    /*PlayerHealth end.*/

    /*ShootController start.*/
    Bridge.define("ShootController", {
        inherits: [FightController],
        fields: {
            left: null,
            right: null,
            timeMotor: 0,
            onCD: false,
            CD: 0,
            startPos: null,
            currentMonster: null
        },
        methods: {
            /*ShootController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "ShootController#OnEnable", this ); }

                var limit = this.left.limits.$clone();
                limit.max = -80;
                this.left.limits = limit.$clone();
            },
            /*ShootController.OnEnable end.*/

            /*ShootController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "ShootController#OnDisable", this ); }

                var limit = this.left.limits.$clone();
                limit.max = 20;
                this.left.limits = limit.$clone();
            },
            /*ShootController.OnDisable end.*/

            /*ShootController.WaitForCD start.*/
            WaitForCD: function () {
if ( TRACE ) { TRACE( "ShootController#WaitForCD", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.onCD = true;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.CD);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.onCD = false;

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
            /*ShootController.WaitForCD end.*/

            /*ShootController.Action start.*/
            Action: function (position, rotation) {
if ( TRACE ) { TRACE( "ShootController#Action", this ); }

                if (this.onCD) {
                    return;
                }
                FightController.prototype.Action.call(this, position, rotation);
                this.StartCoroutine$1(this.Animation());
            },
            /*ShootController.Action end.*/

            /*ShootController.Spawn start.*/
            Spawn: function (position, rotation) {
if ( TRACE ) { TRACE( "ShootController#Spawn", this ); }

                FightController.prototype.Spawn.call(this, position, rotation);
                this.StartCoroutine$1(this.WaitForCD());
            },
            /*ShootController.Spawn end.*/

            /*ShootController.Animation start.*/
            Animation: function () {
if ( TRACE ) { TRACE( "ShootController#Animation", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.left.useMotor = true;
                                        this.right.useMotor = true;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.timeMotor);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.left.useMotor = false;
                                        this.right.useMotor = false;

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
            /*ShootController.Animation end.*/

            /*ShootController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ShootController#Update", this ); }

                this.CheckInput();
            },
            /*ShootController.Update end.*/

            /*ShootController.CheckInput start.*/
            CheckInput: function () {
if ( TRACE ) { TRACE( "ShootController#CheckInput", this ); }

                if (UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Began) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject$1(UnityEngine.Input.GetTouch(0).fingerId)) {
                        return;
                    }
                    this.Action(UnityEngine.Vector2.FromVector3(this.startPos.position), this.startPos.rotation);
                    return;
                }
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                        return;
                    }
                    this.Action(UnityEngine.Vector2.FromVector3(this.startPos.position), this.startPos.rotation);
                }
            },
            /*ShootController.CheckInput end.*/


        }
    });
    /*ShootController end.*/

    /*StormPower start.*/
    Bridge.define("StormPower", {
        inherits: [PowerBase],
        fields: {
            strike: null,
            rain: null,
            monsterRoot: null,
            duration: 0,
            strikeInterval: null,
            radius: 0,
            damage: 0,
            darkAlpha: 0,
            groundY: 0,
            targetMonsterChance: 0,
            running: false,
            targets: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "StormPower#init", this ); }

                this.strikeInterval = new UnityEngine.Vector2();
                this.duration = 8.0;
                this.strikeInterval = new pc.Vec2( 0.5, 1.2 );
                this.radius = 0.8;
                this.damage = 5;
                this.darkAlpha = 0.55;
                this.groundY = -4.0;
                this.targetMonsterChance = 0.7;
                this.targets = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
            }
        },
        methods: {
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
                    end,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.running = true;
                                        if (UnityEngine.Object.op_Implicit(ScreenFx.Ins)) {
                                            ScreenFx.Ins.SetDark(this.darkAlpha, 0.6);
                                        }
                                        this.rain.Begin();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.8);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    end = UnityEngine.Time.time + this.duration;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( UnityEngine.Time.time < end ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(UnityEngine.Random.Range$1(this.strikeInterval.x, this.strikeInterval.y));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this.strike.Strike(this.PickTarget(), this.radius, this.damage, this.Scale);
                                        // Thỉnh thoảng chớp không kèm sét cho không khí bão.
                                        if (UnityEngine.Random.value < 0.35 && UnityEngine.Object.op_Implicit(ScreenFx.Ins)) {
                                            ScreenFx.Ins.Flash(0.2);
                                        }

                                        $step = 2;
                                        continue;
                                }
                                case 5: {
                                    this.rain.Stop();
                                        if (UnityEngine.Object.op_Implicit(ScreenFx.Ins)) {
                                            ScreenFx.Ins.SetDark(0, 1.2);
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.2);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
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

            /*StormPower.PickTarget start.*/
            PickTarget: function () {
if ( TRACE ) { TRACE( "StormPower#PickTarget", this ); }

                var $t;
                var cam = PowerBase.CameraRect();
                if (UnityEngine.Random.value < this.targetMonsterChance) {
                    this.targets.clear();
                    $t = Bridge.getEnumerator(this.monsterRoot.GetComponentsInChildren(MonsterController));
                    try {
                        while ($t.moveNext()) {
                            var m = $t.Current;
                            if (m.IsDead) {
                                continue;
                            }
                            var body = m.transform.Find("Body");
                            var t = UnityEngine.Object.op_Implicit(body) ? body : m.transform;
                            if (cam.Contains$1(t.position)) {
                                this.targets.add(t);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    if (this.targets.Count > 0) {
                        return UnityEngine.Vector2.FromVector3(this.targets.getItem(UnityEngine.Random.Range(0, this.targets.Count)).position.$clone());
                    }
                }
                return new pc.Vec2( UnityEngine.Random.Range$1(cam.xMin + 0.5, cam.xMax - 0.5), this.groundY + 0.3 );
            },
            /*StormPower.PickTarget end.*/


        }
    });
    /*StormPower end.*/

    /*TornadoPower start.*/
    Bridge.define("TornadoPower", {
        inherits: [PowerBase],
        fields: {
            funnelSprite: null,
            groundY: 0,
            height: 0,
            widthRatio: 0,
            speed: 0,
            liftSpeed: 0,
            liftAccel: 0,
            carryRatio: 0,
            swirl: 0,
            spin: 0,
            liftSound: null,
            liftSoundInterval: 0,
            nextLiftSound: 0,
            sortingOrder: 0,
            active: null,
            pool: null,
            liftedThisStep: null,
            bodies: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TornadoPower#init", this ); }

                this.groundY = -4.0;
                this.height = 2.4;
                this.widthRatio = 0.6;
                this.speed = 1.2;
                this.liftSpeed = 7.0;
                this.liftAccel = 40.0;
                this.carryRatio = 0.5;
                this.swirl = 1.5;
                this.spin = 900.0;
                this.liftSoundInterval = 0.08;
                this.sortingOrder = 40;
                this.active = new (System.Collections.Generic.List$1(TornadoPower.Tornado)).ctor();
                this.pool = new (System.Collections.Generic.Queue$1(TornadoPower.Tornado)).ctor();
                this.liftedThisStep = new (System.Collections.Generic.HashSet$1(UnityEngine.Component)).ctor();
                this.bodies = new (System.Collections.Generic.Dictionary$2(UnityEngine.Component,System.Array.type(UnityEngine.Rigidbody2D))).ctor();
            }
        },
        methods: {
            /*TornadoPower.PointerDown start.*/
            PointerDown: function (position) {
if ( TRACE ) { TRACE( "TornadoPower#PointerDown", this ); }

                if (!this.TryUse()) {
                    return;
                }
                var t = this.pool.Count > 0 ? this.pool.Dequeue() : this.Create();
                t.Scale = this.Scale;
                t.Time = 0;
                t.Dir = UnityEngine.Random.value < 0.5 ? -1.0 : 1.0;
                var h = this.height * t.Scale;
                t.Root.transform.position = new pc.Vec3( position.x, this.groundY + h * 0.5, 0 );
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
                t.Layers = System.Array.init(3, null, UnityEngine.SpriteRenderer);
                var alpha = System.Array.init([
                    1.0, 
                    0.6, 
                    0.35
                ], System.Single);
                for (var i = 0; i < t.Layers.length; i = (i + 1) | 0) {
                    t.Layers[i] = PowerBase.CreateSprite("Layer" + i, this.funnelSprite, t.Root.transform, ((this.sortingOrder - i) | 0));
                    t.Layers[i].color = new pc.Color( 1, 1, 1, alpha[i] );
                }
                return t;
            },
            /*TornadoPower.Create end.*/

            /*TornadoPower.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "TornadoPower#Update", this ); }

                var cam = PowerBase.CameraRect();
                var baseScale = this.height / this.funnelSprite.bounds.halfExtents.$clone().scale( 2 ).y;
                for (var i = (this.active.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var t = this.active.getItem(i);
                    t.Time += UnityEngine.Time.deltaTime;
                    var tr = t.Root.transform;
                    tr.position = tr.position.$clone().add( pc.Vec3.RIGHT.clone().clone().scale( t.Dir ).clone().scale( this.speed ).clone().scale( t.Scale ).clone().scale( UnityEngine.Time.deltaTime ) );
                    tr.rotation = new pc.Quat().setFromEulerAngles_Unity( 0, 0, Math.sin(t.Time * 3.0) * 5.0 );

                    // Hiệu ứng xoay: co giãn bề ngang + lệch lớp theo sin.
                    // Root nằm dưới container nên scale local đã tự nhân theo scale của Main.
                    for (var l = 0; l < t.Layers.length; l = (l + 1) | 0) {
                        var phase = l * 2.1;
                        var sx = baseScale * (0.8 + 0.2 * Math.sin(t.Time * 14.0 + phase));
                        t.Layers[l].transform.localScale = new pc.Vec3( sx * this.widthRatio * (1.0 + l * 0.12), baseScale, 1 );
                        t.Layers[l].transform.localPosition = new pc.Vec3( Math.sin(t.Time * 6.0 + phase) * 0.12, 0, 0 );
                    }

                    // Ra khỏi mép màn hình theo hướng đi thì biến mất.
                    var halfW = this.height * this.widthRatio * 0.5 * t.Scale;
                    if ((t.Dir > 0 && tr.position.x - halfW > cam.xMax) || (t.Dir < 0 && tr.position.x + halfW < cam.xMin)) {
                        t.Root.SetActive(false);
                        this.active.removeAt(i);
                        this.pool.Enqueue(t);
                    }
                }
            },
            /*TornadoPower.Update end.*/

            /*TornadoPower.PlayLiftSound start.*/
            PlayLiftSound: function () {
if ( TRACE ) { TRACE( "TornadoPower#PlayLiftSound", this ); }

                if (!UnityEngine.Object.op_Implicit(this.liftSound) || UnityEngine.Time.time < this.nextLiftSound) {
                    return;
                }
                this.nextLiftSound = UnityEngine.Time.time + this.liftSoundInterval;
                AudioController.Ins.PlaySFX(this.liftSound);
            },
            /*TornadoPower.PlayLiftSound end.*/

            /*TornadoPower.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "TornadoPower#FixedUpdate", this ); }

                var $t, $t1, $t2;
                var cam = PowerBase.CameraRect();
                this.liftedThisStep.clear();
                $t = Bridge.getEnumerator(this.active);
                try {
                    while ($t.moveNext()) {
                        var t = $t.Current;
                        var h = this.height * t.Scale;
                        var center = UnityEngine.Vector2.FromVector3(t.Root.transform.position.$clone());
                        var size = new pc.Vec2( h * this.widthRatio * 0.6, h );
                        var cols = UnityEngine.Physics2D.OverlapBoxAll(center, size, 0);
                        $t1 = Bridge.getEnumerator(cols);
                        try {
                            while ($t1.moveNext()) {
                                var col = $t1.Current;
                                // Chỉ tác động lên vật trong khung hình; chỉ cuốn (quái và cả player), không gây damage.
                                var cx = col.transform.position.x;
                                if (col.isTrigger || cx > cam.xMax || cx < cam.xMin) {
                                    continue;
                                }
                                var target = null;
                                var monster = col.GetComponentInParent(MonsterController);
                                if (UnityEngine.Object.op_Implicit(monster)) {
                                    if (!monster.IsDead) {
                                        target = monster;
                                    }
                                } else {
                                    target = col.GetComponentInParent(PlayerLaunch);
                                }
                                if (!UnityEngine.Object.op_Implicit(target) || this.liftedThisStep.contains(target)) {
                                    continue;
                                }
                                this.liftedThisStep.add(target);

                                var v = this.LiftVelocity(t, target);
                                // Chưa ở trạng thái bay (mới chạm lốc / đã đáp đất mà bị cuốn lại): chuyển sang bay (tắt đi bộ/thăng bằng) + xoay + sound.
                                var launched = UnityEngine.Object.op_Implicit(monster) ? monster.IsLaunched : Bridge.cast(target, PlayerLaunch).IsLaunched;
                                if (!launched) {
                                    if (UnityEngine.Object.op_Implicit(monster)) {
                                        monster.Launch(v, this.spin);
                                    } else {
                                        Bridge.cast(target, PlayerLaunch).Launch(v.$clone(), this.spin);
                                    }
                                    this.PlayLiftSound();
                                }
                                // Còn trong lốc thì tiếp tục cuốn lên.
                                $t2 = Bridge.getEnumerator(this.Bodies(target));
                                try {
                                    while ($t2.moveNext()) {
                                        var rb = $t2.Current;
                                        if (UnityEngine.Object.op_Implicit(rb)) {
                                            rb.linearVelocity = pc.Vec2.moveTowards( rb.linearVelocity, v, this.liftAccel * t.Scale * UnityEngine.Time.fixedDeltaTime );
                                        }
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
            },
            /*TornadoPower.FixedUpdate end.*/

            /*TornadoPower.LiftVelocity start.*/
            LiftVelocity: function (t, target) {
if ( TRACE ) { TRACE( "TornadoPower#LiftVelocity", this ); }

                var wobble = Math.sin(t.Time * 8.0 + target.GetInstanceID()) * this.swirl;
                return new pc.Vec2( t.Dir * this.speed * this.carryRatio + wobble, this.liftSpeed ).scale( t.Scale );
            },
            /*TornadoPower.LiftVelocity end.*/

            /*TornadoPower.Bodies start.*/
            Bodies: function (target) {
if ( TRACE ) { TRACE( "TornadoPower#Bodies", this ); }

                var rbs = { };
                if (!this.bodies.tryGetValue(target, rbs)) {
                    rbs.v = target.GetComponentsInChildren(UnityEngine.Rigidbody2D);
                    this.bodies.setItem(target, rbs.v);
                }
                return rbs.v;
            },
            /*TornadoPower.Bodies end.*/


        }
    });
    /*TornadoPower end.*/

    /*ChopWeapon start.*/
    Bridge.define("ChopWeapon", {
        inherits: [HandWeapon],
        fields: {
            raiseAngle: 0,
            hitAngle: 0,
            raiseTime: 0,
            swingTime: 0,
            followThroughTime: 0,
            recoverTime: 0,
            damage: 0,
            knockback: false,
            knockX: null,
            knockY: null,
            knockSpin: 0,
            hitSound: null,
            maxBlood: 0,
            swinging: false,
            hitThisSwing: null,
            bloodThisSwing: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ChopWeapon#init", this ); }

                this.knockX = new UnityEngine.Vector2();
                this.knockY = new UnityEngine.Vector2();
                this.raiseAngle = -120.0;
                this.hitAngle = 35.0;
                this.raiseTime = 0.0;
                this.swingTime = 0.1;
                this.followThroughTime = 0.12;
                this.recoverTime = 0.25;
                this.damage = 6;
                this.knockback = true;
                this.knockX = new pc.Vec2( 4.0, 6.0 );
                this.knockY = new pc.Vec2( 3.0, 5.0 );
                this.knockSpin = 400.0;
                this.maxBlood = 3;
                this.hitThisSwing = new (System.Collections.Generic.HashSet$1(MonsterController)).ctor();
            }
        },
        methods: {
            /*ChopWeapon.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "ChopWeapon#OnEnable", this ); }

                HandWeapon.prototype.OnEnable.call(this);
                this.swinging = false;
            },
            /*ChopWeapon.OnEnable end.*/

            /*ChopWeapon.OnPress start.*/
            OnPress: function () {
if ( TRACE ) { TRACE( "ChopWeapon#OnPress", this ); }

                if (this.swinging) {
                    return false;
                } // đang vung dở -> không tính
                this.StartCoroutine$1(this.Swing());
                return true;
            },
            /*ChopWeapon.OnPress end.*/

            /*ChopWeapon.Swing start.*/
            Swing: function () {
if ( TRACE ) { TRACE( "ChopWeapon#Swing", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    follow,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.swinging = true;
                                        this.hitThisSwing.clear();
                                        this.bloodThisSwing = 0;
                                        if (this.raiseTime > 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = this.LerpArm(this.restAngle, this.raiseAngle, this.raiseTime, false);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if (UnityEngine.Object.op_Implicit(this.attackSound)) {
                                            AudioController.Ins.PlaySFX(this.attackSound);
                                        }
                                        $enumerator.current = this.LerpArm(this.raiseAngle, this.hitAngle, this.swingTime, true);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    follow = UnityEngine.Time.time + this.followThroughTime;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( UnityEngine.Time.time < follow ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    this.HitTouching();
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    $enumerator.current = this.LerpArm(this.hitAngle, this.restAngle, this.recoverTime, false);
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    this.swinging = false;

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
            /*ChopWeapon.Swing end.*/

            /*ChopWeapon.LerpArm start.*/
            LerpArm: function (from, to, time, hitting) {
if ( TRACE ) { TRACE( "ChopWeapon#LerpArm", this ); }

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
                                    t = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < time ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        this.SetArm(pc.math.lerp(from, to, t / time));
                                        if (hitting) {
                                            this.HitTouching();
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
                                    this.SetArm(to);

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
            /*ChopWeapon.LerpArm end.*/

            /*ChopWeapon.HitTouching start.*/
            HitTouching: function () {
if ( TRACE ) { TRACE( "ChopWeapon#HitTouching", this ); }

                var $t;
                var any = false;
                $t = Bridge.getEnumerator(this.MonstersTouchingWeapon());
                try {
                    while ($t.moveNext()) {
                        var m = $t.Current;
                        if (this.hitThisSwing.contains(m)) {
                            continue;
                        }
                        this.hitThisSwing.add(m);
                        any = true;
                        if (Bridge.identity(this.bloodThisSwing, ((this.bloodThisSwing = (this.bloodThisSwing + 1) | 0))) < this.maxBlood) {
                            this.Blood(HandWeapon.MonsterPoint(m));
                        } // giới hạn số cụm máu khi trúng cả đám
                        m.TakeDamage(this.damage);
                        if (this.knockback && !m.IsDead) {
                            var v = new pc.Vec2( UnityEngine.Random.Range$1(this.knockX.x, this.knockX.y), UnityEngine.Random.Range$1(this.knockY.x, this.knockY.y) ).scale( this.Scale );
                            m.Launch(v, this.knockSpin);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (any && UnityEngine.Object.op_Implicit(this.hitSound)) {
                    AudioController.Ins.PlaySFX(this.hitSound);
                }
            },
            /*ChopWeapon.HitTouching end.*/


        }
    });
    /*ChopWeapon end.*/

    /*FlamethrowerWeapon start.*/
    Bridge.define("FlamethrowerWeapon", {
        inherits: [HandWeapon,IFireSource],
        fields: {
            holdAngle: 0,
            nozzle: null,
            frames: null,
            frameRate: 0,
            emberSprite: null,
            smokeSprite: null,
            minFireTime: 0,
            aimTolerance: 0,
            fireInterval: 0,
            fireballsPerShot: 0,
            soundInterval: 0,
            fireballSpeed: 0,
            fireballGravity: 0,
            spread: 0,
            fireballSize: 0,
            fireballLife: 0,
            hitRadius: 0,
            groundY: 0,
            groundFlameSize: 0,
            groundFlameLife: 0,
            sortingOrder: 0,
            burnDamage: 0,
            burnInterval: 0,
            burnDuration: 0,
            active: null,
            pool$1: null,
            fireUntil: 0,
            nextFire: 0,
            nextSound: 0
        },
        props: {
            Frames: {
                get: function () {
if ( TRACE ) { TRACE( "FlamethrowerWeapon#Frames#get", this ); }

                    return this.frames;
                }
            },
            FrameRate: {
                get: function () {
if ( TRACE ) { TRACE( "FlamethrowerWeapon#FrameRate#get", this ); }

                    return this.frameRate;
                }
            },
            WorldScale: {
                get: function () {
if ( TRACE ) { TRACE( "FlamethrowerWeapon#WorldScale#get", this ); }

                    return this.Scale;
                }
            },
            EmberSprite: {
                get: function () {
if ( TRACE ) { TRACE( "FlamethrowerWeapon#EmberSprite#get", this ); }

                    return this.emberSprite;
                }
            },
            SmokeSprite: {
                get: function () {
if ( TRACE ) { TRACE( "FlamethrowerWeapon#SmokeSprite#get", this ); }

                    return this.smokeSprite;
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
if ( TRACE ) { TRACE( "FlamethrowerWeapon#init", this ); }

                this.holdAngle = 0.0;
                this.frameRate = 14.0;
                this.minFireTime = 0.35;
                this.aimTolerance = 12.0;
                this.fireInterval = 0.05;
                this.fireballsPerShot = 2;
                this.soundInterval = 0.25;
                this.fireballSpeed = 7.0;
                this.fireballGravity = -5.0;
                this.spread = 4.0;
                this.fireballSize = 0.14;
                this.fireballLife = 1.2;
                this.hitRadius = 0.15;
                this.groundY = -4.0;
                this.groundFlameSize = 0.4;
                this.groundFlameLife = 0.6;
                this.sortingOrder = 6;
                this.burnDamage = 2;
                this.burnInterval = 0.4;
                this.burnDuration = 3.0;
                this.active = new (System.Collections.Generic.List$1(FlamethrowerWeapon.Fireball)).ctor();
                this.pool$1 = new (System.Collections.Generic.Queue$1(FlamethrowerWeapon.Fireball)).ctor();
            }
        },
        methods: {
            /*FlamethrowerWeapon.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "FlamethrowerWeapon#OnEnable", this ); }

                HandWeapon.prototype.OnEnable.call(this);
                this.fireUntil = 0;
            },
            /*FlamethrowerWeapon.OnEnable end.*/

            /*FlamethrowerWeapon.OnPress start.*/
            OnPress: function () {
if ( TRACE ) { TRACE( "FlamethrowerWeapon#OnPress", this ); }

                this.fireUntil = UnityEngine.Time.time + this.minFireTime;
                return true;
            },
            /*FlamethrowerWeapon.OnPress end.*/

            /*FlamethrowerWeapon.Tick start.*/
            Tick: function () {
if ( TRACE ) { TRACE( "FlamethrowerWeapon#Tick", this ); }

                var firing = this.CanAttack && UnityEngine.Time.time < this.fireUntil;
                this.SetArm(firing ? this.holdAngle : this.restAngle);
                // Chỉ bắn khi tay đã đưa thẳng ra trước.
                var aimed = Math.abs(UnityEngine.Mathf.DeltaAngle(this.ArmAngle, this.holdAngle)) < this.aimTolerance;
                if (firing && aimed && UnityEngine.Time.time >= this.nextFire) {
                    this.nextFire = UnityEngine.Time.time + this.fireInterval;
                    for (var i = 0; i < this.fireballsPerShot; i = (i + 1) | 0) {
                        this.Shoot();
                    }
                    // Bắn rất dày nên giới hạn tần suất phát tiếng để không chồng tiếng.
                    if (UnityEngine.Object.op_Implicit(this.attackSound) && UnityEngine.Time.time >= this.nextSound) {
                        this.nextSound = UnityEngine.Time.time + this.soundInterval;
                        AudioController.Ins.PlaySFX(this.attackSound);
                    }
                }
                this.UpdateFireballs();
            },
            /*FlamethrowerWeapon.Tick end.*/

            /*FlamethrowerWeapon.Shoot start.*/
            Shoot: function () {
if ( TRACE ) { TRACE( "FlamethrowerWeapon#Shoot", this ); }

                var $t;
                var f = this.pool$1.Count > 0 ? this.pool$1.Dequeue() : ($t = new FlamethrowerWeapon.Fireball(), $t.Sr = PowerBase.CreateSprite("Fireball", this.emberSprite, this.poolParent, this.sortingOrder), $t);
                var dir = UnityEngine.Vector2.FromVector3(new pc.Quat().setFromEulerAngles_Unity( 0, 0, UnityEngine.Random.Range$1(-this.spread, this.spread) ).transformVector( UnityEngine.Vector3.FromVector2(UnityEngine.Vector2.FromVector3(this.transform.right)) ));
                f.Sr.transform.position = UnityEngine.Object.op_Implicit(this.nozzle) ? this.nozzle.position.$clone() : this.transform.position.$clone();
                var parentScale = UnityEngine.Object.op_Implicit(this.poolParent) ? this.poolParent.lossyScale.x : 1.0;
                f.Sr.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( this.fireballSize ).clone().scale( this.Scale ).scale( 1.0 / ( this.emberSprite.bounds.halfExtents.$clone().scale( 2 ).y ) ).scale( 1.0 / ( parentScale ) );
                f.Velocity = dir.$clone().scale( this.fireballSpeed ).scale( this.Scale );
                f.Age = 0;
                f.Sr.gameObject.SetActive(true);
                this.active.add(f);
            },
            /*FlamethrowerWeapon.Shoot end.*/

            /*FlamethrowerWeapon.UpdateFireballs start.*/
            UpdateFireballs: function () {
if ( TRACE ) { TRACE( "FlamethrowerWeapon#UpdateFireballs", this ); }

                var dt = UnityEngine.Time.deltaTime;
                for (var i = (this.active.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var f = this.active.getItem(i);
                    f.Age += dt;
                    f.Velocity.y += this.fireballGravity * this.Scale * dt;
                    var t = f.Sr.transform;
                    t.position = t.position.$clone().add( UnityEngine.Vector3.FromVector2((f.Velocity.$clone().scale( dt ))) );
                    var p = UnityEngine.Vector2.FromVector3(t.position.$clone());

                    var done = f.Age >= this.fireballLife;
                    if (!done && this.HitMonster(p)) {
                        done = true;
                    }
                    if (!done && p.y <= this.groundY) {
                        // Rơi xuống đất: một ngọn lửa nhỏ cháy thoáng qua, vẫn bén lửa quái đứng đó.
                        var gp = new pc.Vec2( p.x, this.groundY + this.groundFlameSize * this.Scale * 0.4 );
                        FireFx.Ins.Spawn(null, this.frames, this.frameRate, gp, pc.Vec2.ZERO.clone(), 0, this.groundFlameLife, this.groundFlameSize * this.Scale, this.groundFlameSize * this.Scale * 0.6, new pc.Color( 1, 1, 1, 1 ), this.sortingOrder);
                        this.HitMonster(gp);
                        done = true;
                    }
                    if (done) {
                        f.Sr.gameObject.SetActive(false);
                        this.active.removeAt(i);
                        this.pool$1.Enqueue(f);
                    }
                }
            },
            /*FlamethrowerWeapon.UpdateFireballs end.*/

            /*FlamethrowerWeapon.HitMonster start.*/
            HitMonster: function (p) {
if ( TRACE ) { TRACE( "FlamethrowerWeapon#HitMonster", this ); }

                var $t;
                var hit = false;
                $t = Bridge.getEnumerator(UnityEngine.Physics2D.OverlapCircleAll(p, this.hitRadius * this.Scale));
                try {
                    while ($t.moveNext()) {
                        var col = $t.Current;
                        if (col.isTrigger) {
                            continue;
                        }
                        var m = col.GetComponentInParent(MonsterController);
                        if (!UnityEngine.Object.op_Implicit(m) || m.IsDead) {
                            continue;
                        }
                        Burning.Ignite(m, this, col, p, this.burnDamage, this.burnInterval, this.burnDuration);
                        hit = true;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return hit;
            },
            /*FlamethrowerWeapon.HitMonster end.*/


        }
    });
    /*FlamethrowerWeapon end.*/

    /*BatWeapon start.*/
    Bridge.define("BatWeapon", {
        inherits: [ChopWeapon],
        methods: {
            /*BatWeapon.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "BatWeapon#OnEnable", this ); }

                this.restAngle = this.raiseAngle; // nghỉ ở tư thế vác vai
                ChopWeapon.prototype.OnEnable.call(this);
            },
            /*BatWeapon.OnEnable end.*/


        }
    });
    /*BatWeapon end.*/

    /*SawWeapon start.*/
    Bridge.define("SawWeapon", {
        inherits: [ChopWeapon],
        fields: {
            shake: 0,
            spriteBasePos: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SawWeapon#init", this ); }

                this.spriteBasePos = new UnityEngine.Vector3();
                this.shake = 0.03;
            }
        },
        methods: {
            /*SawWeapon.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SawWeapon#OnEnable", this ); }

                ChopWeapon.prototype.OnEnable.call(this);
                this.spriteBasePos = this.transform.localPosition.$clone();
            },
            /*SawWeapon.OnEnable end.*/

            /*SawWeapon.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "SawWeapon#OnDisable", this ); }

                this.transform.localPosition = this.spriteBasePos.$clone();
                ChopWeapon.prototype.OnDisable.call(this);
            },
            /*SawWeapon.OnDisable end.*/

            /*SawWeapon.Tick start.*/
            Tick: function () {
if ( TRACE ) { TRACE( "SawWeapon#Tick", this ); }

                this.transform.localPosition = this.swinging ? this.spriteBasePos.$clone().add( UnityEngine.Vector3.FromVector2((UnityEngine.Random.insideUnitCircle.$clone().scale( this.shake ))) ) : this.spriteBasePos.$clone();
            },
            /*SawWeapon.Tick end.*/


        }
    });
    /*SawWeapon end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","System.Collections.Generic","UnityEngine.UI","DG.Tweening","DG.Tweening.Core","System.Globalization","DG.Tweening.Plugins.Core.PathCore","DG.Tweening.Plugins.Options"];

    /*AudioController start.*/
    $m("AudioController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BootstrapPool","t":8,"sn":"BootstrapPool","rt":$n[0].Void},{"a":1,"n":"CreateIns","t":8,"sn":"CreateIns","rt":$n[0].Void},{"a":1,"n":"CreateNewSource","t":8,"sn":"CreateNewSource","rt":$n[1].AudioSource},{"a":1,"n":"GetFreeSource","t":8,"sn":"GetFreeSource","rt":$n[1].AudioSource},{"a":2,"n":"PlaySFX","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0}],"sn":"PlaySFX","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":1,"n":"ReturnToPool","t":8,"pi":[{"n":"s","pt":$n[1].AudioSource,"ps":0}],"sn":"ReturnToPool","rt":$n[2].IEnumerator,"p":[$n[1].AudioSource]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("BGM", 0, null)],"a":2,"n":"BGM","t":4,"rt":$n[1].AudioClip,"sn":"BGM"},{"a":2,"n":"Ins","is":true,"t":4,"rt":AudioController,"sn":"Ins"},{"a":1,"n":"SFXPool","t":4,"rt":$n[3].Queue$1(UnityEngine.AudioSource),"sn":"SFXPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicSource","t":4,"rt":$n[1].AudioSource,"sn":"musicSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pool","t":4,"rt":$n[1].Transform,"sn":"pool"}]}; }, $n);
    /*AudioController end.*/

    /*CameraShake start.*/
    $m("CameraShake", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Shake","t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0},{"n":"magnitude","pt":$n[0].Single,"ps":1}],"sn":"Shake","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"Ins","is":true,"t":4,"rt":CameraShake,"sn":"Ins"},{"a":1,"n":"basePos","t":4,"rt":$n[1].Vector3,"sn":"basePos"},{"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"strength","t":4,"rt":$n[0].Single,"sn":"strength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeLeft","t":4,"rt":$n[0].Single,"sn":"timeLeft","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CameraShake end.*/

    /*GameController start.*/
    $m("GameController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Click","t":8,"sn":"Click","rt":$n[0].Void},{"a":2,"n":"Complete","t":8,"sn":"Complete","rt":$n[0].Void},{"a":1,"n":"CreateIns","t":8,"sn":"CreateIns","rt":$n[0].Void},{"a":2,"n":"GameOver","t":8,"sn":"GameOver","rt":$n[0].Void},{"a":2,"n":"RemoveMonster","t":8,"sn":"RemoveMonster","rt":$n[0].Void},{"a":1,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":2,"n":"P","t":16,"rt":PlayerController,"g":{"a":2,"n":"get_P","t":8,"rt":PlayerController,"fg":"P"},"fn":"P"},{"a":2,"n":"Ins","is":true,"t":4,"rt":GameController,"sn":"Ins"},{"a":2,"n":"OnClick","t":4,"rt":Function,"sn":"OnClick"},{"a":2,"n":"OnGameComplete","t":4,"rt":Function,"sn":"OnGameComplete"},{"a":2,"n":"OnGameOver","t":4,"rt":Function,"sn":"OnGameOver"},{"a":2,"n":"OnStart","t":4,"rt":Function,"sn":"OnStart"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buttonDefense","t":4,"rt":$n[4].Button,"sn":"buttonDefense"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buttonFight","t":4,"rt":$n[4].Button,"sn":"buttonFight"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clickSound","t":4,"rt":$n[1].AudioClip,"sn":"clickSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"completeScene","t":4,"rt":$n[1].GameObject,"sn":"completeScene"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defense","t":4,"rt":$n[1].GameObject,"sn":"defense"},{"at":[new UnityEngine.HeaderAttribute("Defense"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defenseOptions","t":4,"rt":$n[1].GameObject,"sn":"defenseOptions"},{"at":[new UnityEngine.HeaderAttribute("End Scene"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endScene","t":4,"rt":$n[1].GameObject,"sn":"endScene"},{"at":[new UnityEngine.HeaderAttribute("Fight"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fightOptions","t":4,"rt":$n[1].GameObject,"sn":"fightOptions"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameOverScene","t":4,"rt":$n[1].GameObject,"sn":"gameOverScene"},{"a":1,"n":"isEnd","t":4,"rt":$n[0].Boolean,"sn":"isEnd","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"numMonster","t":4,"rt":$n[0].Int32,"sn":"numMonster","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"player","t":4,"rt":PlayerController,"sn":"player"},{"at":[new UnityEngine.HeaderAttribute("Start Scene"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startScene","t":4,"rt":$n[1].GameObject,"sn":"startScene"},{"at":[new UnityEngine.HeaderAttribute("Tut"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"tut","t":4,"rt":$n[1].GameObject,"sn":"tut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"world","t":4,"rt":$n[1].Transform,"sn":"world"}]}; }, $n);
    /*GameController end.*/

    /*LayoutController start.*/
    $m("LayoutController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Fit","t":8,"sn":"Fit","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"defense","t":4,"rt":$n[1].RectTransform,"sn":"defense"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fight","t":4,"rt":$n[1].RectTransform,"sn":"fight"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"main","t":4,"rt":$n[1].Transform,"sn":"main"},{"a":1,"n":"oldRatio","t":4,"rt":$n[0].Single,"sn":"oldRatio","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LayoutController end.*/

    /*LunaController start.*/
    $m("LunaController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ClickCTA","t":8,"sn":"ClickCTA","rt":$n[0].Void},{"a":1,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[2].IEnumerator},{"a":1,"n":"ShowEndCard","t":8,"sn":"ShowEndCard","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"UpdateCount","t":8,"sn":"UpdateCount","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"BGImage","t":4,"rt":$n[4].RawImage,"sn":"BGImage"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("BG Image", 0, null)],"a":2,"n":"BGTexture","t":4,"rt":$n[1].Texture2D,"sn":"BGTexture"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"CTA","t":4,"rt":$n[3].List$1(UnityEngine.UI.Button),"sn":"CTA"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Count Play", -1, null, false, null)],"a":2,"n":"MaxCountPlay","t":4,"rt":$n[0].Int32,"sn":"MaxCountPlay","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Time Play", -1, null, false, null)],"a":2,"n":"TimePlay","t":4,"rt":$n[0].Single,"sn":"TimePlay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Limit Count Play?", -1, null, false, null)],"a":2,"n":"UseCountPlay","t":4,"rt":$n[0].Boolean,"sn":"UseCountPlay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Limit Time Play?", -1, null, false, null)],"a":2,"n":"UseTime","t":4,"rt":$n[0].Boolean,"sn":"UseTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"count","t":4,"rt":$n[0].Int32,"sn":"count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endCard","t":4,"rt":$n[1].GameObject,"sn":"endCard"}]}; }, $n);
    /*LunaController end.*/

    /*TutController start.*/
    $m("TutController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fromScale","t":4,"rt":$n[0].Single,"sn":"fromScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"movePos","t":4,"rt":$n[3].List$1(UnityEngine.Vector2),"sn":"movePos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveTime","t":4,"rt":$n[0].Single,"sn":"moveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleTime","t":4,"rt":$n[0].Single,"sn":"scaleTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"sequence","t":4,"rt":$n[5].Sequence,"sn":"sequence"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"toScale","t":4,"rt":$n[0].Single,"sn":"toScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TutController end.*/

    /*VFXController start.*/
    $m("VFXController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CreateIns","t":8,"sn":"CreateIns","rt":$n[0].Void},{"a":1,"n":"CreateNewVFX","t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0}],"sn":"CreateNewVFX","rt":$n[1].GameObject,"p":[$n[1].GameObject]},{"a":1,"n":"GetFreeVFX","t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0}],"sn":"GetFreeVFX","rt":$n[1].GameObject,"p":[$n[1].GameObject]},{"a":1,"n":"ReturnToPool","t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"vfx","pt":$n[1].GameObject,"ps":1}],"sn":"ReturnToPool","rt":$n[2].IEnumerator,"p":[$n[1].GameObject,$n[1].GameObject]},{"a":2,"n":"SpawnVFX","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"prefab","pt":$n[1].GameObject,"ps":1}],"sn":"SpawnVFX","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].GameObject]},{"a":2,"n":"Ins","is":true,"t":4,"rt":VFXController,"sn":"Ins"},{"a":1,"n":"pool","t":4,"rt":$n[3].Dictionary$2(UnityEngine.GameObject,System.Collections.Generic.Queue$1(UnityEngine.GameObject)),"sn":"pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"poolParent","t":4,"rt":$n[1].Transform,"sn":"poolParent"}]}; }, $n);
    /*VFXController end.*/

    /*BlockController start.*/
    $m("BlockController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Break","t":8,"sn":"Break","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"OnCollisionExit2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionExit2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TakeDMGPerSec","t":8,"sn":"TakeDMGPerSec","rt":$n[2].IEnumerator},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"TakeDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"breakSFX","t":4,"rt":$n[1].AudioClip,"sn":"breakSFX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"breakVFX","t":4,"rt":$n[1].GameObject,"sn":"breakVFX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentHP","t":4,"rt":$n[0].Int32,"sn":"currentHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitSFX","t":4,"rt":$n[1].AudioClip,"sn":"hitSFX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isBreak","t":4,"rt":$n[0].Boolean,"sn":"isBreak","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxHP","t":4,"rt":$n[0].Int32,"sn":"maxHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"numMonster","t":4,"rt":$n[0].Int32,"sn":"numMonster","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*BlockController end.*/

    /*GroundCheck start.*/
    $m("GroundCheck", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"IsTouching","is":true,"t":8,"pi":[{"n":"parts","pt":$n[3].IList$1(UnityEngine.Collider2D),"ps":0},{"n":"groundMask","pt":$n[1].LayerMask,"ps":1},{"n":"self","pt":$n[1].Transform,"ps":2}],"sn":"IsTouching","rt":$n[0].Boolean,"p":[$n[3].IList$1(UnityEngine.Collider2D),$n[1].LayerMask,$n[1].Transform],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Skin","is":true,"t":4,"rt":$n[0].Single,"sn":"Skin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*GroundCheck end.*/

    /*IDamageable start.*/
    $m("IDamageable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"IDamageable$TakeDamage","rt":$n[0].Void,"p":[$n[0].Int32]}]}; }, $n);
    /*IDamageable end.*/

    /*BalanceController start.*/
    $m("BalanceController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"force","t":4,"rt":$n[0].Single,"sn":"force","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"rb"},{"a":2,"n":"targetRotation","t":4,"rt":$n[0].Single,"sn":"targetRotation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BalanceController end.*/

    /*MonsterController start.*/
    $m("MonsterController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Animation","t":8,"sn":"Animation","rt":$n[2].IEnumerator},{"a":1,"n":"Dead","t":8,"sn":"Dead","rt":$n[0].Void},{"a":1,"n":"Destroy","t":8,"sn":"Destroy$1","rt":$n[2].IEnumerator},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"Launch","t":8,"pi":[{"n":"velocity","pt":$n[1].Vector2,"ps":0},{"n":"spin","pt":$n[0].Single,"ps":1}],"sn":"Launch","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single]},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"RecoverFromLaunch","t":8,"sn":"RecoverFromLaunch","rt":$n[2].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"TakeDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"TouchingGround","t":8,"pi":[{"n":"parts","pt":System.Array.type(UnityEngine.Collider2D),"ps":0}],"sn":"TouchingGround","rt":$n[0].Boolean,"p":[System.Array.type(UnityEngine.Collider2D)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsDead","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsDead","t":8,"rt":$n[0].Boolean,"fg":"IsDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsDead"},{"a":2,"n":"IsLaunched","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsLaunched","t":8,"rt":$n[0].Boolean,"fg":"IsLaunched","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsLaunched"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"balance","t":4,"rt":BalanceController,"sn":"balance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"body","t":4,"rt":$n[1].Rigidbody2D,"sn":"body"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentHP","t":4,"rt":$n[0].Int32,"sn":"currentHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadSFX","t":4,"rt":$n[1].AudioClip,"sn":"deadSFX"},{"at":[new UnityEngine.HeaderAttribute("Launch"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundMask","t":4,"rt":$n[1].LayerMask,"sn":"groundMask"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isDead","t":4,"rt":$n[0].Boolean,"sn":"isDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isGameStart","t":4,"rt":$n[0].Boolean,"sn":"isGameStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isLaunched","t":4,"rt":$n[0].Boolean,"sn":"isLaunched","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leftHand","t":4,"rt":$n[1].HingeJoint2D,"sn":"leftHand"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leftLeg","t":4,"rt":$n[1].HingeJoint2D,"sn":"leftLeg"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxForce","t":4,"rt":$n[1].Vector2,"sn":"maxForce"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxHP","t":4,"rt":$n[0].Int32,"sn":"maxHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minAirTime","t":4,"rt":$n[0].Single,"sn":"minAirTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minForce","t":4,"rt":$n[1].Vector2,"sn":"minForce"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pieces","t":4,"rt":$n[3].List$1(Piece),"sn":"pieces"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rightHand","t":4,"rt":$n[1].HingeJoint2D,"sn":"rightHand"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rightLeg","t":4,"rt":$n[1].HingeJoint2D,"sn":"rightLeg"},{"at":[new UnityEngine.HeaderAttribute("Move"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MonsterController end.*/

    /*Piece start.*/
    $m("Piece", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Joint","t":4,"rt":$n[1].Joint2D,"sn":"Joint"},{"a":2,"n":"Rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"Rb"}]}; }, $n);
    /*Piece end.*/

    /*DefenseController start.*/
    $m("DefenseController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Action","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"Action","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CellToWorld","t":8,"pi":[{"n":"cell","pt":$n[1].Vector2Int,"ps":0}],"sn":"CellToWorld","rt":$n[1].Vector3,"p":[$n[1].Vector2Int]},{"a":1,"n":"ChangeBlockType","t":8,"pi":[{"n":"type","pt":BlockType,"ps":0}],"sn":"ChangeBlockType","rt":$n[0].Void,"p":[BlockType]},{"a":1,"n":"CheckInput","t":8,"sn":"CheckInput","rt":$n[0].Void},{"a":3,"n":"Spawn","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"Spawn","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WorldToCell","t":8,"pi":[{"n":"world","pt":$n[1].Vector2,"ps":0}],"sn":"WorldToCell","rt":$n[1].Vector2Int,"p":[$n[1].Vector2]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"blockTypes","t":4,"rt":$n[3].List$1(BlockType),"sn":"blockTypes"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buildTut","t":4,"rt":$n[1].GameObject,"sn":"buildTut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cellSize","t":4,"rt":$n[0].Single,"sn":"cellSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clickSound","t":4,"rt":$n[1].AudioClip,"sn":"clickSound"},{"a":1,"n":"currentType","t":4,"rt":BlockType,"sn":"currentType"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"offset","t":4,"rt":$n[1].Vector2,"sn":"offset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"optionTut","t":4,"rt":$n[1].GameObject,"sn":"optionTut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"putSound","t":4,"rt":$n[1].AudioClip,"sn":"putSound"},{"at":[new UnityEngine.HeaderAttribute("Block"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"world","t":4,"rt":$n[1].Transform,"sn":"world"}]}; }, $n);
    /*DefenseController end.*/

    /*BlockType start.*/
    $m("BlockType", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Button","t":4,"rt":$n[4].Button,"sn":"Button"},{"a":2,"n":"Prefab","t":4,"rt":$n[1].GameObject,"sn":"Prefab"},{"a":2,"n":"Selected","t":4,"rt":$n[4].Image,"sn":"Selected"},{"a":2,"n":"blockSize","t":4,"rt":$n[1].Vector2,"sn":"blockSize"}]}; }, $n);
    /*BlockType end.*/

    /*DropController start.*/
    $m("DropController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckInput","t":8,"sn":"CheckInput","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*DropController end.*/

    /*FightController start.*/
    $m("FightController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"Action","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"rotation","pt":$n[1].Quaternion,"ps":1}],"sn":"Action","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Quaternion]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CreateNewSpawn","t":8,"sn":"CreateNewSpawn","rt":$n[1].GameObject},{"a":1,"n":"GetFreeSpawn","t":8,"sn":"GetFreeSpawn","rt":$n[1].GameObject},{"v":true,"a":3,"n":"Spawn","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"rotation","pt":$n[1].Quaternion,"ps":1}],"sn":"Spawn","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Quaternion]},{"a":2,"n":"Pool","t":16,"rt":$n[3].Queue$1(UnityEngine.GameObject),"g":{"a":2,"n":"get_Pool","t":8,"rt":$n[3].Queue$1(UnityEngine.GameObject),"fg":"Pool"},"fn":"Pool"},{"at":[new UnityEngine.HeaderAttribute("Spawn"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"attackSound","t":4,"rt":$n[1].AudioClip,"sn":"attackSound"},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(UnityEngine.GameObject),"sn":"pool"},{"at":[new UnityEngine.HeaderAttribute("Pool"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"poolParent","t":4,"rt":$n[1].Transform,"sn":"poolParent"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"spawnPrefab","t":4,"rt":$n[1].GameObject,"sn":"spawnPrefab"}]}; }, $n);
    /*FightController end.*/

    /*ShootController start.*/
    $m("ShootController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Action","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"rotation","pt":$n[1].Quaternion,"ps":1}],"sn":"Action","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Quaternion]},{"a":1,"n":"Animation","t":8,"sn":"Animation","rt":$n[2].IEnumerator},{"a":1,"n":"CheckInput","t":8,"sn":"CheckInput","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"ov":true,"a":3,"n":"Spawn","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"rotation","pt":$n[1].Quaternion,"ps":1}],"sn":"Spawn","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Quaternion]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WaitForCD","t":8,"sn":"WaitForCD","rt":$n[2].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"CD","t":4,"rt":$n[0].Single,"sn":"CD","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"currentMonster","t":4,"rt":MonsterController,"sn":"currentMonster"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"left","t":4,"rt":$n[1].HingeJoint2D,"sn":"left"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"onCD","t":4,"rt":$n[0].Boolean,"sn":"onCD","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"right","t":4,"rt":$n[1].HingeJoint2D,"sn":"right"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startPos","t":4,"rt":$n[1].Transform,"sn":"startPos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeMotor","t":4,"rt":$n[0].Single,"sn":"timeMotor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ShootController end.*/

    /*PlayerBite start.*/
    $m("PlayerBite", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(PlayerHealth)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BiteLoop","t":8,"sn":"BiteLoop","rt":$n[2].IEnumerator},{"a":1,"n":"HasLivingMonsterTouching","t":8,"sn":"HasLivingMonsterTouching","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"OnTriggerExit2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerExit2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"PlayBiteSound","t":8,"sn":"PlayBiteSound","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"biteDamage","t":4,"rt":$n[0].Int32,"sn":"biteDamage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"biteInterval","t":4,"rt":$n[0].Single,"sn":"biteInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"biteSound","t":4,"rt":$n[1].AudioClip,"sn":"biteSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"biteSoundInterval","t":4,"rt":$n[0].Single,"sn":"biteSoundInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"health","t":4,"rt":PlayerHealth,"sn":"health"},{"a":1,"n":"nextBiteSound","t":4,"rt":$n[0].Single,"sn":"nextBiteSound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pruneBuffer","t":4,"rt":$n[3].List$1(MonsterController),"sn":"pruneBuffer","ro":true},{"a":1,"n":"touching","t":4,"rt":$n[3].Dictionary$2(MonsterController,System.Int32),"sn":"touching","ro":true},{"a":1,"n":"zombie","t":4,"rt":PlayerZombie,"sn":"zombie"}]}; }, $n);
    /*PlayerBite end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ChangeFightOption","t":8,"pi":[{"n":"option","pt":FightOption,"ps":0}],"sn":"ChangeFightOption","rt":$n[0].Void,"p":[FightOption]},{"a":2,"n":"Dead","t":8,"sn":"Dead","rt":$n[0].Void},{"a":2,"n":"Fight","t":16,"rt":FightOption,"g":{"a":2,"n":"get_Fight","t":8,"rt":FightOption,"fg":"Fight"},"fn":"Fight"},{"a":2,"n":"Head","t":16,"rt":$n[1].TargetJoint2D,"g":{"a":2,"n":"get_Head","t":8,"rt":$n[1].TargetJoint2D,"fg":"Head"},"fn":"Head"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"attackTut","t":4,"rt":$n[1].GameObject,"sn":"attackTut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clickSound","t":4,"rt":$n[1].AudioClip,"sn":"clickSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadSFX","t":4,"rt":$n[1].AudioClip,"sn":"deadSFX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fight","t":4,"rt":FightOption,"sn":"fight"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fightOptions","t":4,"rt":$n[3].List$1(FightOption),"sn":"fightOptions"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"head","t":4,"rt":$n[1].TargetJoint2D,"sn":"head"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxForce","t":4,"rt":$n[1].Vector2,"sn":"maxForce"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minForce","t":4,"rt":$n[1].Vector2,"sn":"minForce"},{"at":[new UnityEngine.HeaderAttribute("Tut"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"optionTut","t":4,"rt":$n[1].GameObject,"sn":"optionTut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pieces","t":4,"rt":$n[3].List$1(Piece),"sn":"pieces"}]}; }, $n);
    /*PlayerController end.*/

    /*FightOption start.*/
    $m("FightOption", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Button","t":4,"rt":$n[4].Button,"sn":"Button"},{"a":2,"n":"Controller","t":4,"rt":FightController,"sn":"Controller"},{"a":2,"n":"Selected","t":4,"rt":$n[4].Image,"sn":"Selected"}]}; }, $n);
    /*FightOption end.*/

    /*PlayerHealth start.*/
    $m("PlayerHealth", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(PlayerController)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Damage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"Damage","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"HitFlash","t":8,"sn":"HitFlash","rt":$n[2].IEnumerator},{"a":1,"n":"OnDeath","t":8,"sn":"OnDeath","rt":$n[0].Void},{"a":2,"n":"StopFlash","t":8,"sn":"StopFlash","rt":$n[0].Void},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"TakeDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"CurrentHP","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CurrentHP","t":8,"rt":$n[0].Int32,"fg":"CurrentHP","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CurrentHP"},{"a":2,"n":"IsDead","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsDead","t":8,"rt":$n[0].Boolean,"fg":"IsDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsDead"},{"a":1,"n":"bodyColors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"bodyColors"},{"a":1,"n":"bodySprites","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"bodySprites"},{"a":1,"n":"controller","t":4,"rt":PlayerController,"sn":"controller"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentHP","t":4,"rt":$n[0].Int32,"sn":"currentHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"flashRoutine","t":4,"rt":$n[1].Coroutine,"sn":"flashRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitColor","t":4,"rt":$n[1].Color,"sn":"hitColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitFlashTime","t":4,"rt":$n[0].Single,"sn":"hitFlashTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isDead","t":4,"rt":$n[0].Boolean,"sn":"isDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxHP","t":4,"rt":$n[0].Int32,"sn":"maxHP","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*PlayerHealth end.*/

    /*PlayerLaunch start.*/
    $m("PlayerLaunch", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(PlayerController)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Launch","t":8,"pi":[{"n":"velocity","pt":$n[1].Vector2,"ps":0},{"n":"spin","pt":$n[0].Single,"ps":1}],"sn":"Launch","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single]},{"a":1,"n":"Recover","t":8,"sn":"Recover","rt":$n[2].IEnumerator},{"a":1,"n":"TouchingGround","t":8,"pi":[{"n":"parts","pt":$n[3].List$1(UnityEngine.Collider2D),"ps":0}],"sn":"TouchingGround","rt":$n[0].Boolean,"p":[$n[3].List$1(UnityEngine.Collider2D)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Dead","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_Dead","t":8,"rt":$n[0].Boolean,"fg":"Dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Dead"},{"a":2,"n":"IsLaunched","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsLaunched","t":8,"rt":$n[0].Boolean,"fg":"IsLaunched","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsLaunched"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundMask","t":4,"rt":$n[1].LayerMask,"sn":"groundMask"},{"a":1,"n":"head","t":4,"rt":$n[1].TargetJoint2D,"sn":"head"},{"a":1,"n":"health","t":4,"rt":PlayerHealth,"sn":"health"},{"a":1,"n":"homeTarget","t":4,"rt":$n[1].Vector2,"sn":"homeTarget"},{"a":1,"n":"isLaunched","t":4,"rt":$n[0].Boolean,"sn":"isLaunched","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxLaunchX","t":4,"rt":$n[0].Single,"sn":"maxLaunchX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minAirTime","t":4,"rt":$n[0].Single,"sn":"minAirTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"recoverForceMul","t":4,"rt":$n[0].Single,"sn":"recoverForceMul","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PlayerLaunch end.*/

    /*PlayerZombie start.*/
    $m("PlayerZombie", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LoseAfterDelay","t":8,"sn":"LoseAfterDelay","rt":$n[2].IEnumerator},{"a":2,"n":"TurnIntoZombie","t":8,"sn":"TurnIntoZombie","rt":$n[0].Void},{"a":2,"n":"IsZombie","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsZombie","t":8,"rt":$n[0].Boolean,"fg":"IsZombie","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsZombie"},{"a":1,"n":"isZombie","t":4,"rt":$n[0].Boolean,"sn":"isZombie","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"loseDelay","t":4,"rt":$n[0].Single,"sn":"loseDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"parts","t":4,"rt":$n[3].List$1(ZombiePart),"sn":"parts"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"zombieSFX","t":4,"rt":$n[1].AudioClip,"sn":"zombieSFX"}]}; }, $n);
    /*PlayerZombie end.*/

    /*ZombiePart start.*/
    $m("ZombiePart", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Renderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"Renderer"},{"a":2,"n":"Sprite","t":4,"rt":$n[1].Sprite,"sn":"Sprite"}]}; }, $n);
    /*ZombiePart end.*/

    /*Burning start.*/
    $m("Burning", function () { return {"nested":[Burning.Flame],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ClampToBounds","is":true,"t":8,"pi":[{"n":"b","pt":$n[1].Bounds,"ps":0},{"n":"p","pt":$n[1].Vector2,"ps":1}],"sn":"ClampToBounds","rt":$n[1].Vector2,"p":[$n[1].Bounds,$n[1].Vector2]},{"a":1,"n":"EmitFx","t":8,"sn":"EmitFx","rt":$n[0].Void},{"a":1,"n":"Extinguish","t":8,"sn":"Extinguish","rt":$n[0].Void},{"a":2,"n":"Ignite","is":true,"t":8,"pi":[{"n":"target","pt":IDamageable,"ps":0},{"n":"source","pt":IFireSource,"ps":1},{"n":"hit","pt":$n[1].Collider2D,"ps":2},{"n":"point","pt":$n[1].Vector2,"ps":3},{"n":"damage","pt":$n[0].Int32,"ps":4},{"n":"interval","pt":$n[0].Single,"ps":5},{"n":"duration","pt":$n[0].Single,"ps":6}],"sn":"Ignite","rt":$n[0].Void,"p":[IDamageable,IFireSource,$n[1].Collider2D,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Single]},{"a":1,"n":"IgnitePart","t":8,"pi":[{"n":"part","pt":$n[1].Transform,"ps":0},{"n":"point","pt":$n[1].Vector2,"ps":1},{"n":"atContact","pt":$n[0].Boolean,"ps":2}],"sn":"IgnitePart","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Vector2,$n[0].Boolean]},{"a":1,"n":"SetFlameScale","t":8,"pi":[{"n":"f","pt":Burning.Flame,"ps":0},{"n":"k","pt":$n[0].Single,"ps":1}],"sn":"SetFlameScale","rt":$n[0].Void,"p":[Burning.Flame,$n[0].Single]},{"a":1,"n":"Setup","t":8,"pi":[{"n":"t","pt":IDamageable,"ps":0},{"n":"s","pt":IFireSource,"ps":1}],"sn":"Setup","rt":$n[0].Void,"p":[IDamageable,IFireSource]},{"a":1,"n":"Spread","t":8,"sn":"Spread","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"EmberColor","is":true,"t":4,"rt":$n[1].Color,"sn":"EmberColor","ro":true},{"a":1,"n":"EmberInterval","is":true,"t":4,"rt":$n[0].Single,"sn":"EmberInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GrowTime","is":true,"t":4,"rt":$n[0].Single,"sn":"GrowTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"SmokeColor","is":true,"t":4,"rt":$n[1].Color,"sn":"SmokeColor","ro":true},{"a":1,"n":"SmokeInterval","is":true,"t":4,"rt":$n[0].Single,"sn":"SmokeInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"SpreadInterval","is":true,"t":4,"rt":$n[0].Single,"sn":"SpreadInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"StartSize","is":true,"t":4,"rt":$n[0].Single,"sn":"StartSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"animTime","t":4,"rt":$n[0].Single,"sn":"animTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"burningParts","t":4,"rt":$n[3].HashSet$1(UnityEngine.Transform),"sn":"burningParts","ro":true},{"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"endTime","t":4,"rt":$n[0].Single,"sn":"endTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"flames","t":4,"rt":$n[3].List$1(Burning.Flame),"sn":"flames","ro":true},{"a":1,"n":"interval","t":4,"rt":$n[0].Single,"sn":"interval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"monster","t":4,"rt":MonsterController,"sn":"monster"},{"a":1,"n":"nextEmber","t":4,"rt":$n[0].Single,"sn":"nextEmber","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextSmoke","t":4,"rt":$n[0].Single,"sn":"nextSmoke","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextSpread","t":4,"rt":$n[0].Single,"sn":"nextSpread","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextTick","t":4,"rt":$n[0].Single,"sn":"nextTick","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"parts","t":4,"rt":$n[3].List$1(UnityEngine.Transform),"sn":"parts","ro":true},{"a":1,"n":"player","t":4,"rt":PlayerHealth,"sn":"player"},{"a":1,"n":"source","t":4,"rt":IFireSource,"sn":"source"},{"a":1,"n":"target","t":4,"rt":IDamageable,"sn":"target"}]}; }, $n);
    /*Burning end.*/

    /*Burning+Flame start.*/
    $m("Burning.Flame", function () { return {"td":Burning,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Born","t":4,"rt":$n[0].Single,"sn":"Born","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Part","t":4,"rt":$n[1].Transform,"sn":"Part"},{"a":2,"n":"Size","t":4,"rt":$n[0].Single,"sn":"Size","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Sr","t":4,"rt":$n[1].SpriteRenderer,"sn":"Sr"},{"a":2,"n":"StartK","t":4,"rt":$n[0].Single,"sn":"StartK","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Burning+Flame end.*/

    /*FireFx start.*/
    $m("FireFx", function () { return {"nested":[FireFx.Particle],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Apply","is":true,"t":8,"pi":[{"n":"p","pt":FireFx.Particle,"ps":0},{"n":"k","pt":$n[0].Single,"ps":1}],"sn":"Apply","rt":$n[0].Void,"p":[FireFx.Particle,$n[0].Single]},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"sprite","pt":$n[1].Sprite,"ps":0},{"n":"frames","pt":System.Array.type(UnityEngine.Sprite),"ps":1},{"n":"frameRate","pt":$n[0].Single,"ps":2},{"n":"position","pt":$n[1].Vector2,"ps":3},{"n":"velocity","pt":$n[1].Vector2,"ps":4},{"n":"gravity","pt":$n[0].Single,"ps":5},{"n":"life","pt":$n[0].Single,"ps":6},{"n":"size0","pt":$n[0].Single,"ps":7},{"n":"size1","pt":$n[0].Single,"ps":8},{"n":"color","pt":$n[1].Color,"ps":9},{"n":"sortingOrder","pt":$n[0].Int32,"ps":10}],"sn":"Spawn","rt":$n[0].Void,"p":[$n[1].Sprite,System.Array.type(UnityEngine.Sprite),$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[1].Color,$n[0].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Ins","is":true,"t":16,"rt":FireFx,"g":{"a":2,"n":"get_Ins","t":8,"rt":FireFx,"fg":"Ins","is":true},"fn":"Ins"},{"a":1,"n":"active","t":4,"rt":$n[3].List$1(FireFx.Particle),"sn":"active","ro":true},{"a":1,"n":"ins","is":true,"t":4,"rt":FireFx,"sn":"ins"},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(FireFx.Particle),"sn":"pool","ro":true}]}; }, $n);
    /*FireFx end.*/

    /*FireFx+Particle start.*/
    $m("FireFx.Particle", function () { return {"td":FireFx,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Age","t":4,"rt":$n[0].Single,"sn":"Age","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Alpha0","t":4,"rt":$n[0].Single,"sn":"Alpha0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"FrameOffset","t":4,"rt":$n[0].Int32,"sn":"FrameOffset","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"FrameRate","t":4,"rt":$n[0].Single,"sn":"FrameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Frames","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"Frames"},{"a":2,"n":"Gravity","t":4,"rt":$n[0].Single,"sn":"Gravity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Life","t":4,"rt":$n[0].Single,"sn":"Life","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Size0","t":4,"rt":$n[0].Single,"sn":"Size0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Size1","t":4,"rt":$n[0].Single,"sn":"Size1","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Sr","t":4,"rt":$n[1].SpriteRenderer,"sn":"Sr"},{"a":2,"n":"Velocity","t":4,"rt":$n[1].Vector2,"sn":"Velocity"}]}; }, $n);
    /*FireFx+Particle end.*/

    /*FirePower start.*/
    $m("FirePower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Cancel","t":8,"sn":"Cancel","rt":$n[0].Void},{"a":1,"n":"Ignite","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"Ignite","rt":$n[0].Void,"p":[$n[1].Vector2]},{"ov":true,"a":2,"n":"PointerDown","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"ov":true,"a":2,"n":"PointerHold","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerHold","rt":$n[0].Void,"p":[$n[1].Vector2]},{"ov":true,"a":2,"n":"PointerUp","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerUp","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":2,"n":"EmberSprite","t":16,"rt":$n[1].Sprite,"g":{"a":2,"n":"get_EmberSprite","t":8,"rt":$n[1].Sprite,"fg":"EmberSprite"},"fn":"EmberSprite"},{"a":2,"n":"FrameRate","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_FrameRate","t":8,"rt":$n[0].Single,"fg":"FrameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"FrameRate"},{"a":2,"n":"Frames","t":16,"rt":System.Array.type(UnityEngine.Sprite),"g":{"a":2,"n":"get_Frames","t":8,"rt":System.Array.type(UnityEngine.Sprite),"fg":"Frames"},"fn":"Frames"},{"a":2,"n":"SmokeSprite","t":16,"rt":$n[1].Sprite,"g":{"a":2,"n":"get_SmokeSprite","t":8,"rt":$n[1].Sprite,"fg":"SmokeSprite"},"fn":"SmokeSprite"},{"a":2,"n":"WorldScale","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_WorldScale","t":8,"rt":$n[0].Single,"fg":"WorldScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"WorldScale"},{"at":[new UnityEngine.HeaderAttribute("Burn"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"burnDamage","t":4,"rt":$n[0].Int32,"sn":"burnDamage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"burnDuration","t":4,"rt":$n[0].Single,"sn":"burnDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"burnInterval","t":4,"rt":$n[0].Single,"sn":"burnInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"drawing","t":4,"rt":$n[0].Boolean,"sn":"drawing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"emberSprite","t":4,"rt":$n[1].Sprite,"sn":"emberSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"frameRate","t":4,"rt":$n[0].Single,"sn":"frameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"frames","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"frames"},{"a":1,"n":"holdTime","t":4,"rt":$n[0].Single,"sn":"holdTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"igniteRadius","t":4,"rt":$n[0].Single,"sn":"igniteRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lastPos","t":4,"rt":$n[1].Vector2,"sn":"lastPos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"secondsPerClick","t":4,"rt":$n[0].Single,"sn":"secondsPerClick","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smokeSprite","t":4,"rt":$n[1].Sprite,"sn":"smokeSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spacing","t":4,"rt":$n[0].Single,"sn":"spacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*FirePower end.*/

    /*FireTutorial start.*/
    $m("FireTutorial", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnyBurning","t":8,"sn":"AnyBurning","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"NearestMonster","t":8,"sn":"NearestMonster","rt":$n[1].Transform},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fingerOffset","t":4,"rt":$n[1].Vector2,"sn":"fingerOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hand","t":4,"rt":$n[1].RectTransform,"sn":"hand"},{"a":1,"n":"handBaseScale","t":4,"rt":$n[1].Vector3,"sn":"handBaseScale"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsterRoot","t":4,"rt":$n[1].Transform,"sn":"monsterRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"player","t":4,"rt":$n[1].Transform,"sn":"player"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pulse","t":4,"rt":$n[0].Single,"sn":"pulse","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rect","t":4,"rt":$n[1].RectTransform,"sn":"rect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"swipeDistance","t":4,"rt":$n[0].Single,"sn":"swipeDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"swipeSpeed","t":4,"rt":$n[0].Single,"sn":"swipeSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*FireTutorial end.*/

    /*IFireSource start.*/
    $m("IFireSource", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"EmberSprite","t":16,"rt":$n[1].Sprite,"g":{"ab":true,"a":2,"n":"get_EmberSprite","t":8,"rt":$n[1].Sprite,"fg":"IFireSource$EmberSprite"},"fn":"IFireSource$EmberSprite"},{"ab":true,"a":2,"n":"FrameRate","t":16,"rt":$n[0].Single,"g":{"ab":true,"a":2,"n":"get_FrameRate","t":8,"rt":$n[0].Single,"fg":"IFireSource$FrameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"IFireSource$FrameRate"},{"ab":true,"a":2,"n":"Frames","t":16,"rt":System.Array.type(UnityEngine.Sprite),"g":{"ab":true,"a":2,"n":"get_Frames","t":8,"rt":System.Array.type(UnityEngine.Sprite),"fg":"IFireSource$Frames"},"fn":"IFireSource$Frames"},{"ab":true,"a":2,"n":"SmokeSprite","t":16,"rt":$n[1].Sprite,"g":{"ab":true,"a":2,"n":"get_SmokeSprite","t":8,"rt":$n[1].Sprite,"fg":"IFireSource$SmokeSprite"},"fn":"IFireSource$SmokeSprite"},{"ab":true,"a":2,"n":"WorldScale","t":16,"rt":$n[0].Single,"g":{"ab":true,"a":2,"n":"get_WorldScale","t":8,"rt":$n[0].Single,"fg":"IFireSource$WorldScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"IFireSource$WorldScale"},{"a":1,"backing":true,"n":"<EmberSprite>k__BackingField","t":4,"rt":$n[1].Sprite,"sn":"IFireSource$EmberSprite"},{"a":1,"backing":true,"n":"<FrameRate>k__BackingField","t":4,"rt":$n[0].Single,"sn":"IFireSource$FrameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Frames>k__BackingField","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"IFireSource$Frames"},{"a":1,"backing":true,"n":"<SmokeSprite>k__BackingField","t":4,"rt":$n[1].Sprite,"sn":"IFireSource$SmokeSprite"},{"a":1,"backing":true,"n":"<WorldScale>k__BackingField","t":4,"rt":$n[0].Single,"sn":"IFireSource$WorldScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*IFireSource end.*/

    /*LightningPower start.*/
    $m("LightningPower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"PointerDown","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"strike","t":4,"rt":LightningStrike,"sn":"strike"}]}; }, $n);
    /*LightningPower end.*/

    /*LightningStrike start.*/
    $m("LightningStrike", function () { return {"nested":[LightningStrike.Bolt],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Build","t":8,"pi":[{"n":"bolt","pt":LightningStrike.Bolt,"ps":0},{"n":"target","pt":$n[1].Vector2,"ps":1},{"n":"scale","pt":$n[0].Single,"ps":2}],"sn":"Build","rt":$n[0].Void,"p":[LightningStrike.Bolt,$n[1].Vector2,$n[0].Single]},{"a":1,"n":"CreateBolt","t":8,"sn":"CreateBolt","rt":LightningStrike.Bolt},{"a":1,"n":"DamageColumn","t":8,"pi":[{"n":"x","pt":$n[0].Single,"ps":0},{"n":"halfWidth","pt":$n[0].Single,"ps":1},{"n":"damage","pt":$n[0].Int32,"ps":2}],"sn":"DamageColumn","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single,$n[0].Int32]},{"a":1,"n":"Place","t":8,"pi":[{"n":"sr","pt":$n[1].SpriteRenderer,"ps":0},{"n":"a","pt":$n[1].Vector2,"ps":1},{"n":"b","pt":$n[1].Vector2,"ps":2},{"n":"width","pt":$n[0].Single,"ps":3},{"n":"color","pt":$n[1].Color,"ps":4}],"sn":"Place","rt":$n[0].Void,"p":[$n[1].SpriteRenderer,$n[1].Vector2,$n[1].Vector2,$n[0].Single,$n[1].Color]},{"a":1,"n":"Play","t":8,"pi":[{"n":"bolt","pt":LightningStrike.Bolt,"ps":0},{"n":"target","pt":$n[1].Vector2,"ps":1},{"n":"scale","pt":$n[0].Single,"ps":2}],"sn":"Play","rt":$n[2].IEnumerator,"p":[LightningStrike.Bolt,$n[1].Vector2,$n[0].Single]},{"a":1,"n":"SetSegment","t":8,"pi":[{"n":"bolt","pt":LightningStrike.Bolt,"ps":0},{"n":"a","pt":$n[1].Vector2,"ps":1},{"n":"b","pt":$n[1].Vector2,"ps":2},{"n":"scale","pt":$n[0].Single,"ps":3},{"n":"widthMul","pt":$n[0].Single,"ps":4}],"sn":"SetSegment","rt":$n[0].Void,"p":[LightningStrike.Bolt,$n[1].Vector2,$n[1].Vector2,$n[0].Single,$n[0].Single]},{"a":2,"n":"Strike","t":8,"pi":[{"n":"target","pt":$n[1].Vector2,"ps":0},{"n":"radius","pt":$n[0].Single,"ps":1},{"n":"damage","pt":$n[0].Int32,"ps":2},{"n":"scale","pt":$n[0].Single,"ps":3}],"sn":"Strike","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"branchSegments","t":4,"rt":$n[0].Int32,"sn":"branchSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"branches","t":4,"rt":$n[0].Int32,"sn":"branches","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"coreColor","t":4,"rt":$n[1].Color,"sn":"coreColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"coreWidth","t":4,"rt":$n[0].Single,"sn":"coreWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flashStrength","t":4,"rt":$n[0].Single,"sn":"flashStrength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"glowColor","t":4,"rt":$n[1].Color,"sn":"glowColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"glowWidth","t":4,"rt":$n[0].Single,"sn":"glowWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundY","t":4,"rt":$n[0].Single,"sn":"groundY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"hitBuffer","is":true,"t":4,"rt":$n[3].HashSet$1(IDamageable),"sn":"hitBuffer","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jitter","t":4,"rt":$n[0].Single,"sn":"jitter","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"mainSegments","t":4,"rt":$n[0].Int32,"sn":"mainSegments","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(LightningStrike.Bolt),"sn":"pool","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"segmentSprite","t":4,"rt":$n[1].Sprite,"sn":"segmentSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeDuration","t":4,"rt":$n[0].Single,"sn":"shakeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shakeStrength","t":4,"rt":$n[0].Single,"sn":"shakeStrength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortingOrder","t":4,"rt":$n[0].Int32,"sn":"sortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"strikeSound","t":4,"rt":$n[1].AudioClip,"sn":"strikeSound"}]}; }, $n);
    /*LightningStrike end.*/

    /*LightningStrike+Bolt start.*/
    $m("LightningStrike.Bolt", function () { return {"td":LightningStrike,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Cores","t":4,"rt":$n[3].List$1(UnityEngine.SpriteRenderer),"sn":"Cores"},{"a":2,"n":"Glows","t":4,"rt":$n[3].List$1(UnityEngine.SpriteRenderer),"sn":"Glows"},{"a":2,"n":"Root","t":4,"rt":$n[1].GameObject,"sn":"Root"},{"a":2,"n":"Used","t":4,"rt":$n[0].Int32,"sn":"Used","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*LightningStrike+Bolt end.*/

    /*PowerBase start.*/
    $m("PowerBase", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CameraRect","is":true,"t":8,"sn":"CameraRect","rt":$n[1].Rect},{"v":true,"a":2,"n":"Cancel","t":8,"sn":"Cancel","rt":$n[0].Void},{"a":2,"n":"ConsumeUsed","t":8,"sn":"ConsumeUsed","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CreateSprite","is":true,"t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0},{"n":"sprite","pt":$n[1].Sprite,"ps":1},{"n":"parent","pt":$n[1].Transform,"ps":2},{"n":"order","pt":$n[0].Int32,"ps":3}],"sn":"CreateSprite","rt":$n[1].SpriteRenderer,"p":[$n[0].String,$n[1].Sprite,$n[1].Transform,$n[0].Int32]},{"a":2,"n":"DamageCircle","is":true,"t":8,"pi":[{"n":"center","pt":$n[1].Vector2,"ps":0},{"n":"radius","pt":$n[0].Single,"ps":1},{"n":"damage","pt":$n[0].Int32,"ps":2}],"sn":"DamageCircle","rt":$n[0].Void,"p":[$n[1].Vector2,$n[0].Single,$n[0].Int32]},{"a":2,"n":"GetTarget","is":true,"t":8,"pi":[{"n":"col","pt":$n[1].Collider2D,"ps":0}],"sn":"GetTarget","rt":IDamageable,"p":[$n[1].Collider2D]},{"v":true,"a":2,"n":"PointerDown","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"v":true,"a":2,"n":"PointerHold","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerHold","rt":$n[0].Void,"p":[$n[1].Vector2]},{"v":true,"a":2,"n":"PointerUp","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerUp","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":3,"n":"TryUse","t":8,"sn":"TryUse","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":3,"n":"Scale","t":16,"rt":$n[0].Single,"g":{"a":3,"n":"get_Scale","t":8,"rt":$n[0].Single,"fg":"Scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Scale"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"container","t":4,"rt":$n[1].Transform,"sn":"container"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"cooldown","t":4,"rt":$n[0].Single,"sn":"cooldown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"hitBuffer","is":true,"t":4,"rt":$n[3].HashSet$1(IDamageable),"sn":"hitBuffer","ro":true},{"a":1,"n":"nextUseTime","t":4,"rt":$n[0].Single,"sn":"nextUseTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"useSound","t":4,"rt":$n[1].AudioClip,"sn":"useSound"},{"a":1,"n":"usedThisPress","t":4,"rt":$n[0].Boolean,"sn":"usedThisPress","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*PowerBase end.*/

    /*PowerController start.*/
    $m("PowerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"Select","t":8,"pi":[{"n":"option","pt":PowerOption,"ps":0}],"sn":"Select","rt":$n[0].Void,"p":[PowerOption]},{"a":1,"n":"ToWorld","is":true,"t":8,"pi":[{"n":"screen","pt":$n[1].Vector2,"ps":0}],"sn":"ToWorld","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"actionTut","t":4,"rt":$n[1].GameObject,"sn":"actionTut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clickSound","t":4,"rt":$n[1].AudioClip,"sn":"clickSound"},{"a":1,"n":"current","t":4,"rt":PowerOption,"sn":"current"},{"a":1,"n":"hasCurrent","t":4,"rt":$n[0].Boolean,"sn":"hasCurrent","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Tut"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"optionTut","t":4,"rt":$n[1].GameObject,"sn":"optionTut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"powers","t":4,"rt":$n[3].List$1(PowerOption),"sn":"powers"},{"a":1,"n":"pressing","t":4,"rt":$n[0].Boolean,"sn":"pressing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*PowerController end.*/

    /*PowerOption start.*/
    $m("PowerOption", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Button","t":4,"rt":$n[4].Button,"sn":"Button"},{"a":2,"n":"Power","t":4,"rt":PowerBase,"sn":"Power"},{"a":2,"n":"Selected","t":4,"rt":$n[4].Image,"sn":"Selected"},{"a":2,"n":"Tutorial","t":4,"rt":$n[1].GameObject,"sn":"Tutorial"}]}; }, $n);
    /*PowerOption end.*/

    /*RainEffect start.*/
    $m("RainEffect", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Begin","t":8,"sn":"Begin","rt":$n[0].Void},{"a":1,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"Respawn","t":8,"pi":[{"n":"t","pt":$n[1].Transform,"ps":0},{"n":"cam","pt":$n[1].Rect,"ps":1},{"n":"spread","pt":$n[0].Boolean,"ps":2}],"sn":"Respawn","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Rect,$n[0].Boolean]},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"color","t":4,"rt":$n[1].Color,"sn":"color"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dropSize","t":4,"rt":$n[1].Vector2,"sn":"dropSize"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dropSprite","t":4,"rt":$n[1].Sprite,"sn":"dropSprite"},{"a":1,"n":"drops","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"drops"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeIn","t":4,"rt":$n[0].Single,"sn":"fadeIn","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeOut","t":4,"rt":$n[0].Single,"sn":"fadeOut","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundY","t":4,"rt":$n[0].Single,"sn":"groundY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"intensity","t":4,"rt":$n[0].Single,"sn":"intensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxDrops","t":4,"rt":$n[0].Int32,"sn":"maxDrops","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortingOrder","t":4,"rt":$n[0].Int32,"sn":"sortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"target","t":4,"rt":$n[0].Single,"sn":"target","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"velocity","t":4,"rt":$n[1].Vector2,"sn":"velocity"}]}; }, $n);
    /*RainEffect end.*/

    /*ScreenFx start.*/
    $m("ScreenFx", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Fade","t":8,"pi":[{"n":"img","pt":$n[4].Image,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"Fade","rt":$n[2].IEnumerator,"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"Flash","t":8,"pi":[{"n":"strength","pt":$n[0].Single,"ps":0}],"sn":"Flash","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"FlashRoutine","t":8,"pi":[{"n":"strength","pt":$n[0].Single,"ps":0}],"sn":"FlashRoutine","rt":$n[2].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"SetAlpha","is":true,"t":8,"pi":[{"n":"img","pt":$n[4].Image,"ps":0},{"n":"a","pt":$n[0].Single,"ps":1}],"sn":"SetAlpha","rt":$n[0].Void,"p":[$n[4].Image,$n[0].Single]},{"a":2,"n":"SetDark","t":8,"pi":[{"n":"alpha","pt":$n[0].Single,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1}],"sn":"SetDark","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"Ins","is":true,"t":4,"rt":ScreenFx,"sn":"Ins"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dark","t":4,"rt":$n[4].Image,"sn":"dark"},{"a":1,"n":"darkRoutine","t":4,"rt":$n[1].Coroutine,"sn":"darkRoutine"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flash","t":4,"rt":$n[4].Image,"sn":"flash"},{"a":1,"n":"flashRoutine","t":4,"rt":$n[1].Coroutine,"sn":"flashRoutine"}]}; }, $n);
    /*ScreenFx end.*/

    /*StormPower start.*/
    $m("StormPower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"PickTarget","t":8,"sn":"PickTarget","rt":$n[1].Vector2},{"ov":true,"a":2,"n":"PointerDown","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"Run","t":8,"sn":"Run","rt":$n[2].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"darkAlpha","t":4,"rt":$n[0].Single,"sn":"darkAlpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundY","t":4,"rt":$n[0].Single,"sn":"groundY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsterRoot","t":4,"rt":$n[1].Transform,"sn":"monsterRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rain","t":4,"rt":RainEffect,"sn":"rain"},{"a":1,"n":"running","t":4,"rt":$n[0].Boolean,"sn":"running","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"strike","t":4,"rt":LightningStrike,"sn":"strike"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"strikeInterval","t":4,"rt":$n[1].Vector2,"sn":"strikeInterval"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetMonsterChance","t":4,"rt":$n[0].Single,"sn":"targetMonsterChance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"targets","t":4,"rt":$n[3].List$1(UnityEngine.Transform),"sn":"targets","ro":true}]}; }, $n);
    /*StormPower end.*/

    /*TornadoPower start.*/
    $m("TornadoPower", function () { return {"nested":[TornadoPower.Tornado],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Bodies","t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"Bodies","rt":System.Array.type(UnityEngine.Rigidbody2D),"p":[$n[1].Component]},{"a":1,"n":"Create","t":8,"sn":"Create","rt":TornadoPower.Tornado},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"LiftVelocity","t":8,"pi":[{"n":"t","pt":TornadoPower.Tornado,"ps":0},{"n":"target","pt":$n[1].Component,"ps":1}],"sn":"LiftVelocity","rt":$n[1].Vector2,"p":[TornadoPower.Tornado,$n[1].Component]},{"a":1,"n":"PlayLiftSound","t":8,"sn":"PlayLiftSound","rt":$n[0].Void},{"ov":true,"a":2,"n":"PointerDown","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"PointerDown","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"active","t":4,"rt":$n[3].List$1(TornadoPower.Tornado),"sn":"active","ro":true},{"a":1,"n":"bodies","t":4,"rt":$n[3].Dictionary$2(UnityEngine.Component,System.Array.type(UnityEngine.Rigidbody2D)),"sn":"bodies","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"carryRatio","t":4,"rt":$n[0].Single,"sn":"carryRatio","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"funnelSprite","t":4,"rt":$n[1].Sprite,"sn":"funnelSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundY","t":4,"rt":$n[0].Single,"sn":"groundY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"height","t":4,"rt":$n[0].Single,"sn":"height","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftAccel","t":4,"rt":$n[0].Single,"sn":"liftAccel","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftSound","t":4,"rt":$n[1].AudioClip,"sn":"liftSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftSoundInterval","t":4,"rt":$n[0].Single,"sn":"liftSoundInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"liftSpeed","t":4,"rt":$n[0].Single,"sn":"liftSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"liftedThisStep","t":4,"rt":$n[3].HashSet$1(UnityEngine.Component),"sn":"liftedThisStep","ro":true},{"a":1,"n":"nextLiftSound","t":4,"rt":$n[0].Single,"sn":"nextLiftSound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(TornadoPower.Tornado),"sn":"pool","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortingOrder","t":4,"rt":$n[0].Int32,"sn":"sortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spin","t":4,"rt":$n[0].Single,"sn":"spin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"swirl","t":4,"rt":$n[0].Single,"sn":"swirl","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"widthRatio","t":4,"rt":$n[0].Single,"sn":"widthRatio","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TornadoPower end.*/

    /*TornadoPower+Tornado start.*/
    $m("TornadoPower.Tornado", function () { return {"td":TornadoPower,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dir","t":4,"rt":$n[0].Single,"sn":"Dir","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Layers","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"Layers"},{"a":2,"n":"Root","t":4,"rt":$n[1].GameObject,"sn":"Root"},{"a":2,"n":"Scale","t":4,"rt":$n[0].Single,"sn":"Scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Time","t":4,"rt":$n[0].Single,"sn":"Time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TornadoPower+Tornado end.*/

    /*BatWeapon start.*/
    $m("BatWeapon", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void}]}; }, $n);
    /*BatWeapon end.*/

    /*BombController start.*/
    $m("BombController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Boom","t":8,"sn":"Boom","rt":$n[0].Void},{"a":1,"n":"CountDown","t":8,"sn":"CountDown","rt":$n[2].IEnumerator},{"a":1,"n":"Damage","t":8,"sn":"Damage","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ReturnToPool","t":8,"sn":"ReturnToPool","rt":$n[2].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"BOOMHash","is":true,"t":4,"rt":$n[0].Int32,"sn":"BOOMHash","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"STARTHash","is":true,"t":4,"rt":$n[0].Int32,"sn":"STARTHash","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"actionSound","t":4,"rt":$n[1].AudioClip,"sn":"actionSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"anim","t":4,"rt":$n[1].Animator,"sn":"anim"},{"a":1,"n":"controller","t":4,"rt":DropController,"sn":"controller"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"layer","t":4,"rt":$n[1].LayerMask,"sn":"layer"},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(UnityEngine.GameObject),"sn":"pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scale","t":4,"rt":$n[0].Single,"sn":"scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startSound","t":4,"rt":$n[1].AudioClip,"sn":"startSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"vfx1","t":4,"rt":$n[1].Transform,"sn":"vfx1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"vfx2","t":4,"rt":$n[1].Transform,"sn":"vfx2"}]}; }, $n);
    /*BombController end.*/

    /*BulletController start.*/
    $m("BulletController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LifeTime","t":8,"sn":"LifeTime","rt":$n[2].IEnumerator},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ReturnToPool","t":8,"sn":"ReturnToPool","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"controller","t":4,"rt":ShootController,"sn":"controller"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hit","t":4,"rt":$n[0].Boolean,"sn":"hit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitMonsterSound","t":4,"rt":$n[1].AudioClip,"sn":"hitMonsterSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitSound","t":4,"rt":$n[1].AudioClip,"sn":"hitSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lifeTime","t":4,"rt":$n[0].Single,"sn":"lifeTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(UnityEngine.GameObject),"sn":"pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BulletController end.*/

    /*ChopWeapon start.*/
    $m("ChopWeapon", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HitTouching","t":8,"sn":"HitTouching","rt":$n[0].Void},{"a":1,"n":"LerpArm","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2},{"n":"hitting","pt":$n[0].Boolean,"ps":3}],"sn":"LerpArm","rt":$n[2].IEnumerator,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"ov":true,"a":3,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnPress","t":8,"sn":"OnPress","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Swing","t":8,"sn":"Swing","rt":$n[2].IEnumerator},{"a":1,"n":"bloodThisSwing","t":4,"rt":$n[0].Int32,"sn":"bloodThisSwing","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"followThroughTime","t":4,"rt":$n[0].Single,"sn":"followThroughTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"hitAngle","t":4,"rt":$n[0].Single,"sn":"hitAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("FX"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"hitSound","t":4,"rt":$n[1].AudioClip,"sn":"hitSound"},{"a":1,"n":"hitThisSwing","t":4,"rt":$n[3].HashSet$1(MonsterController),"sn":"hitThisSwing","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"knockSpin","t":4,"rt":$n[0].Single,"sn":"knockSpin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"knockX","t":4,"rt":$n[1].Vector2,"sn":"knockX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"knockY","t":4,"rt":$n[1].Vector2,"sn":"knockY"},{"at":[new UnityEngine.HeaderAttribute("Knockback"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"knockback","t":4,"rt":$n[0].Boolean,"sn":"knockback","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"maxBlood","t":4,"rt":$n[0].Int32,"sn":"maxBlood","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Chop"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"raiseAngle","t":4,"rt":$n[0].Single,"sn":"raiseAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"raiseTime","t":4,"rt":$n[0].Single,"sn":"raiseTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"recoverTime","t":4,"rt":$n[0].Single,"sn":"recoverTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"swingTime","t":4,"rt":$n[0].Single,"sn":"swingTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":3,"n":"swinging","t":4,"rt":$n[0].Boolean,"sn":"swinging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*ChopWeapon end.*/

    /*FlamethrowerWeapon start.*/
    $m("FlamethrowerWeapon", function () { return {"nested":[FlamethrowerWeapon.Fireball],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HitMonster","t":8,"pi":[{"n":"p","pt":$n[1].Vector2,"ps":0}],"sn":"HitMonster","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"ov":true,"a":3,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnPress","t":8,"sn":"OnPress","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Shoot","t":8,"sn":"Shoot","rt":$n[0].Void},{"ov":true,"a":3,"n":"Tick","t":8,"sn":"Tick","rt":$n[0].Void},{"a":1,"n":"UpdateFireballs","t":8,"sn":"UpdateFireballs","rt":$n[0].Void},{"a":2,"n":"EmberSprite","t":16,"rt":$n[1].Sprite,"g":{"a":2,"n":"get_EmberSprite","t":8,"rt":$n[1].Sprite,"fg":"EmberSprite"},"fn":"EmberSprite"},{"a":2,"n":"FrameRate","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_FrameRate","t":8,"rt":$n[0].Single,"fg":"FrameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"FrameRate"},{"a":2,"n":"Frames","t":16,"rt":System.Array.type(UnityEngine.Sprite),"g":{"a":2,"n":"get_Frames","t":8,"rt":System.Array.type(UnityEngine.Sprite),"fg":"Frames"},"fn":"Frames"},{"a":2,"n":"SmokeSprite","t":16,"rt":$n[1].Sprite,"g":{"a":2,"n":"get_SmokeSprite","t":8,"rt":$n[1].Sprite,"fg":"SmokeSprite"},"fn":"SmokeSprite"},{"a":2,"n":"WorldScale","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_WorldScale","t":8,"rt":$n[0].Single,"fg":"WorldScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"WorldScale"},{"a":1,"n":"active","t":4,"rt":$n[3].List$1(FlamethrowerWeapon.Fireball),"sn":"active","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"aimTolerance","t":4,"rt":$n[0].Single,"sn":"aimTolerance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Burn"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"burnDamage","t":4,"rt":$n[0].Int32,"sn":"burnDamage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"burnDuration","t":4,"rt":$n[0].Single,"sn":"burnDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"burnInterval","t":4,"rt":$n[0].Single,"sn":"burnInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"emberSprite","t":4,"rt":$n[1].Sprite,"sn":"emberSprite"},{"at":[new UnityEngine.HeaderAttribute("Fireball"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireInterval","t":4,"rt":$n[0].Single,"sn":"fireInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"fireUntil","t":4,"rt":$n[0].Single,"sn":"fireUntil","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireballGravity","t":4,"rt":$n[0].Single,"sn":"fireballGravity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireballLife","t":4,"rt":$n[0].Single,"sn":"fireballLife","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireballSize","t":4,"rt":$n[0].Single,"sn":"fireballSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireballSpeed","t":4,"rt":$n[0].Single,"sn":"fireballSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireballsPerShot","t":4,"rt":$n[0].Int32,"sn":"fireballsPerShot","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"frameRate","t":4,"rt":$n[0].Single,"sn":"frameRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"frames","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"frames"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundFlameLife","t":4,"rt":$n[0].Single,"sn":"groundFlameLife","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundFlameSize","t":4,"rt":$n[0].Single,"sn":"groundFlameSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groundY","t":4,"rt":$n[0].Single,"sn":"groundY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitRadius","t":4,"rt":$n[0].Single,"sn":"hitRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Flamethrower"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"holdAngle","t":4,"rt":$n[0].Single,"sn":"holdAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minFireTime","t":4,"rt":$n[0].Single,"sn":"minFireTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextFire","t":4,"rt":$n[0].Single,"sn":"nextFire","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextSound","t":4,"rt":$n[0].Single,"sn":"nextSound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"nozzle","t":4,"rt":$n[1].Transform,"sn":"nozzle"},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(FlamethrowerWeapon.Fireball),"sn":"pool$1","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smokeSprite","t":4,"rt":$n[1].Sprite,"sn":"smokeSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortingOrder","t":4,"rt":$n[0].Int32,"sn":"sortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"soundInterval","t":4,"rt":$n[0].Single,"sn":"soundInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spread","t":4,"rt":$n[0].Single,"sn":"spread","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*FlamethrowerWeapon end.*/

    /*FlamethrowerWeapon+Fireball start.*/
    $m("FlamethrowerWeapon.Fireball", function () { return {"td":FlamethrowerWeapon,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Age","t":4,"rt":$n[0].Single,"sn":"Age","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Sr","t":4,"rt":$n[1].SpriteRenderer,"sn":"Sr"},{"a":2,"n":"Velocity","t":4,"rt":$n[1].Vector2,"sn":"Velocity"}]}; }, $n);
    /*FlamethrowerWeapon+Fireball end.*/

    /*HandWeapon start.*/
    $m("HandWeapon", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Action","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"rotation","pt":$n[1].Quaternion,"ps":1}],"sn":"Action","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Quaternion]},{"a":3,"n":"Blood","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"Blood","rt":$n[0].Void,"p":[$n[1].Vector2]},{"v":true,"a":3,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"LimitAngle","t":8,"pi":[{"n":"angle","pt":$n[0].Single,"ps":0}],"sn":"LimitAngle","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":3,"n":"MonsterPoint","is":true,"t":8,"pi":[{"n":"m","pt":MonsterController,"ps":0}],"sn":"MonsterPoint","rt":$n[1].Vector2,"p":[MonsterController]},{"a":3,"n":"MonstersTouchingWeapon","t":8,"sn":"MonstersTouchingWeapon","rt":$n[3].List$1(MonsterController)},{"v":true,"a":3,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"v":true,"a":3,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"v":true,"a":3,"n":"OnHold","t":8,"sn":"OnHold","rt":$n[0].Void},{"ab":true,"a":3,"n":"OnPress","t":8,"sn":"OnPress","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"v":true,"a":3,"n":"OnRelease","t":8,"sn":"OnRelease","rt":$n[0].Void},{"a":1,"n":"Press","t":8,"sn":"Press","rt":$n[0].Void},{"a":1,"n":"ReadInput","t":8,"sn":"ReadInput","rt":$n[0].Void},{"a":1,"n":"Release","t":8,"sn":"Release","rt":$n[0].Void},{"a":3,"n":"SetArm","t":8,"pi":[{"n":"angle","pt":$n[0].Single,"ps":0}],"sn":"SetArm","rt":$n[0].Void,"p":[$n[0].Single]},{"v":true,"a":3,"n":"Tick","t":8,"sn":"Tick","rt":$n[0].Void},{"v":true,"a":3,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":3,"n":"ArmAngle","t":16,"rt":$n[0].Single,"g":{"a":3,"n":"get_ArmAngle","t":8,"rt":$n[0].Single,"fg":"ArmAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"ArmAngle"},{"a":3,"n":"CanAttack","t":16,"rt":$n[0].Boolean,"g":{"a":3,"n":"get_CanAttack","t":8,"rt":$n[0].Boolean,"fg":"CanAttack","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"CanAttack"},{"a":3,"n":"Scale","t":16,"rt":$n[0].Single,"g":{"a":3,"n":"get_Scale","t":8,"rt":$n[0].Single,"fg":"Scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Scale"},{"a":3,"n":"arm","t":4,"rt":$n[1].HingeJoint2D,"sn":"arm"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"armGain","t":4,"rt":$n[0].Single,"sn":"armGain","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"armMaxSpeed","t":4,"rt":$n[0].Single,"sn":"armMaxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"armTorque","t":4,"rt":$n[0].Single,"sn":"armTorque","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"bloodVFX","t":4,"rt":$n[1].GameObject,"sn":"bloodVFX"},{"a":3,"n":"body","t":4,"rt":$n[1].Transform,"sn":"body"},{"a":1,"n":"found","t":4,"rt":$n[3].List$1(MonsterController),"sn":"found","ro":true},{"a":1,"n":"hasSaved","t":4,"rt":$n[0].Boolean,"sn":"hasSaved","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":3,"n":"health","t":4,"rt":PlayerHealth,"sn":"health"},{"at":[new UnityEngine.HeaderAttribute("Hit"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"hitPadding","t":4,"rt":$n[0].Single,"sn":"hitPadding","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"jointReferenceAngle","t":4,"rt":$n[0].Single,"sn":"jointReferenceAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":3,"n":"player","t":4,"rt":PlayerController,"sn":"player"},{"a":1,"n":"pressing","t":4,"rt":$n[0].Boolean,"sn":"pressing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Arm"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"restAngle","t":4,"rt":$n[0].Single,"sn":"restAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"savedLimits","t":4,"rt":$n[1].JointAngleLimits2D,"sn":"savedLimits"},{"a":1,"n":"savedMotor","t":4,"rt":$n[1].JointMotor2D,"sn":"savedMotor"},{"a":1,"n":"savedUseLimits","t":4,"rt":$n[0].Boolean,"sn":"savedUseLimits","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"savedUseMotor","t":4,"rt":$n[0].Boolean,"sn":"savedUseMotor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"targetAngle","t":4,"rt":$n[0].Single,"sn":"targetAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":3,"n":"weaponSprite","t":4,"rt":$n[1].SpriteRenderer,"sn":"weaponSprite"}]}; }, $n);
    /*HandWeapon end.*/

    /*KunaiController start.*/
    $m("KunaiController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LifeTime","t":8,"sn":"LifeTime","rt":$n[2].IEnumerator},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ReturnToPool","t":8,"sn":"ReturnToPool","rt":$n[0].Void},{"a":1,"n":"Rotate","t":8,"sn":"Rotate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"controller","t":4,"rt":ShootController,"sn":"controller"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hit","t":4,"rt":$n[0].Boolean,"sn":"hit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitMonsterSound","t":4,"rt":$n[1].AudioClip,"sn":"hitMonsterSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitSound","t":4,"rt":$n[1].AudioClip,"sn":"hitSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lifeTime","t":4,"rt":$n[0].Single,"sn":"lifeTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(UnityEngine.GameObject),"sn":"pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotateSpeed","t":4,"rt":$n[0].Single,"sn":"rotateSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*KunaiController end.*/

    /*SawWeapon start.*/
    $m("SawWeapon", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"ov":true,"a":3,"n":"Tick","t":8,"sn":"Tick","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Saw"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"shake","t":4,"rt":$n[0].Single,"sn":"shake","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"spriteBasePos","t":4,"rt":$n[1].Vector3,"sn":"spriteBasePos"}]}; }, $n);
    /*SawWeapon end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[5].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[5].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[5].Tweener,"p":[$n[4].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[5].Tweener,"p":[$n[4].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[5].Tweener,"p":[$n[4].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[7].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[6].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[4].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[7].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[6].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[6].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[4].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[5].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[5].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[5].Tweener,"p":[$n[4].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[5].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[5].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[5].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[5].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[5].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[5].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[5].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[5].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[6].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[4].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[5].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[6].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[5].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[5].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[5].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[5].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[5].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[5].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[5].DOTweenCYInstruction.WaitForCompletion,$n[5].DOTweenCYInstruction.WaitForRewind,$n[5].DOTweenCYInstruction.WaitForKill,$n[5].DOTweenCYInstruction.WaitForElapsedLoops,$n[5].DOTweenCYInstruction.WaitForPosition,$n[5].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[5].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].Tween],"pi":[{"n":"tween","pt":$n[5].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[5].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[5].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[5].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[8].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[5].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[8].Path,$n[0].Single,$n[5].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[9].PathOptions,"ps":0},{"n":"t","pt":$n[5].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[9].PathOptions,$n[5].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DG.Tweening.DOTweenAnimation start.*/
    $m("DG.Tweening.DOTweenAnimation", function () { return {"nested":[$n[5].DOTweenAnimation.AnimationType,$n[5].DOTweenAnimation.TargetType],"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("DOTween/DOTween Animation")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CreateEditorPreview","t":8,"sn":"CreateEditorPreview","rt":$n[5].Tween},{"a":2,"n":"CreateTween","t":8,"pi":[{"n":"regenerateIfExists","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0},{"n":"andPlay","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"CreateTween","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Boolean]},{"ov":true,"a":2,"n":"DOComplete","t":8,"sn":"DOComplete","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOKill","t":8,"sn":"DOKill","rt":$n[0].Void},{"a":2,"n":"DOKillAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOKillAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOKillById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOKillById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPause","t":8,"sn":"DOPause","rt":$n[0].Void},{"a":2,"n":"DOPauseAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPauseAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlay","t":8,"sn":"DOPlay","rt":$n[0].Void},{"a":2,"n":"DOPlayAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayAllById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayBackwards","t":8,"sn":"DOPlayBackwards","rt":$n[0].Void},{"a":2,"n":"DOPlayBackwardsAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayBackwardsById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayBackwardsById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DOPlayForward","t":8,"sn":"DOPlayForward","rt":$n[0].Void},{"a":2,"n":"DOPlayForwardAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayForwardById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DOPlayForwardById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DOPlayNext","t":8,"sn":"DOPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"sn":"DORestart","rt":$n[0].Void},{"ov":true,"a":2,"n":"DORestart","t":8,"pi":[{"n":"fromHere","pt":$n[0].Boolean,"ps":0}],"sn":"DORestart$1","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"DORestartAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORestartById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORestartById","rt":$n[0].Void,"p":[$n[0].String]},{"ov":true,"a":2,"n":"DORewind","t":8,"sn":"DORewind","rt":$n[0].Void},{"a":2,"n":"DORewindAllById","t":8,"pi":[{"n":"id","pt":$n[0].String,"ps":0}],"sn":"DORewindAllById","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"DORewindAndPlayNext","t":8,"sn":"DORewindAndPlayNext","rt":$n[0].Void},{"ov":true,"a":2,"n":"DOTogglePause","t":8,"sn":"DOTogglePause","rt":$n[0].Void},{"a":1,"n":"Dispatch_OnReset","is":true,"t":8,"pi":[{"n":"anim","pt":$n[5].DOTweenAnimation,"ps":0}],"sn":"Dispatch_OnReset","rt":$n[0].Void,"p":[$n[5].DOTweenAnimation]},{"a":1,"n":"GetTweenGO","t":8,"sn":"GetTweenGO","rt":$n[1].GameObject},{"a":1,"n":"GetTweenTarget","t":8,"sn":"GetTweenTarget","rt":$n[1].GameObject},{"a":2,"n":"GetTweens","t":8,"sn":"GetTweens","rt":$n[3].List$1(DG.Tweening.Tween)},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ReEvaluateRelativeTween","t":8,"sn":"ReEvaluateRelativeTween","rt":$n[0].Void},{"a":2,"n":"RecreateTween","t":8,"sn":"RecreateTween","rt":$n[0].Void},{"a":2,"n":"RecreateTweenAndPlay","t":8,"sn":"RecreateTweenAndPlay","rt":$n[0].Void},{"a":1,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"RewindThenRecreateTween","t":8,"sn":"RewindThenRecreateTween","rt":$n[0].Void},{"a":2,"n":"RewindThenRecreateTweenAndPlay","t":8,"sn":"RewindThenRecreateTweenAndPlay","rt":$n[0].Void},{"a":2,"n":"SetAnimationTarget","t":8,"pi":[{"n":"tweenTarget","pt":$n[1].Component,"ps":0},{"n":"useTweenTargetGameObjectForGroupOperations","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"SetAnimationTarget","rt":$n[0].Void,"p":[$n[1].Component,$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TypeToDOTargetType","is":true,"t":8,"pi":[{"n":"t","pt":$n[0].Type,"ps":0}],"sn":"TypeToDOTargetType","rt":$n[5].DOTweenAnimation.TargetType,"p":[$n[0].Type],"box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":1,"n":"_playCount","t":4,"rt":$n[0].Int32,"sn":"_playCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_tweenAutoGenerationCalled","t":4,"rt":$n[0].Boolean,"sn":"_tweenAutoGenerationCalled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"animationType","t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"animationType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"autoGenerate","t":4,"rt":$n[0].Boolean,"sn":"autoGenerate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"autoKill","t":4,"rt":$n[0].Boolean,"sn":"autoKill","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"autoPlay","t":4,"rt":$n[0].Boolean,"sn":"autoPlay","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeCurve","t":4,"rt":pc.AnimationCurve,"sn":"easeCurve"},{"a":2,"n":"easeType","t":4,"rt":$n[5].Ease,"sn":"easeType","box":function ($v) { return Bridge.box($v, DG.Tweening.Ease, System.Enum.toStringFn(DG.Tweening.Ease));}},{"a":2,"n":"endValueColor","t":4,"rt":$n[1].Color,"sn":"endValueColor"},{"a":2,"n":"endValueFloat","t":4,"rt":$n[0].Single,"sn":"endValueFloat","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"endValueRect","t":4,"rt":$n[1].Rect,"sn":"endValueRect"},{"a":2,"n":"endValueString","t":4,"rt":$n[0].String,"sn":"endValueString"},{"a":2,"n":"endValueTransform","t":4,"rt":$n[1].Transform,"sn":"endValueTransform"},{"a":2,"n":"endValueV2","t":4,"rt":$n[1].Vector2,"sn":"endValueV2"},{"a":2,"n":"endValueV3","t":4,"rt":$n[1].Vector3,"sn":"endValueV3"},{"a":2,"n":"forcedTargetType","t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"forcedTargetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"id","t":4,"rt":$n[0].String,"sn":"id"},{"a":2,"n":"isActive","t":4,"rt":$n[0].Boolean,"sn":"isActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isFrom","t":4,"rt":$n[0].Boolean,"sn":"isFrom","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isIndependentUpdate","t":4,"rt":$n[0].Boolean,"sn":"isIndependentUpdate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isRelative","t":4,"rt":$n[0].Boolean,"sn":"isRelative","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isValid","t":4,"rt":$n[0].Boolean,"sn":"isValid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"loopType","t":4,"rt":$n[5].LoopType,"sn":"loopType","box":function ($v) { return Bridge.box($v, DG.Tweening.LoopType, System.Enum.toStringFn(DG.Tweening.LoopType));}},{"a":2,"n":"loops","t":4,"rt":$n[0].Int32,"sn":"loops","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalBool0","t":4,"rt":$n[0].Boolean,"sn":"optionalBool0","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"optionalBool1","t":4,"rt":$n[0].Boolean,"sn":"optionalBool1","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"optionalFloat0","t":4,"rt":$n[0].Single,"sn":"optionalFloat0","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"optionalInt0","t":4,"rt":$n[0].Int32,"sn":"optionalInt0","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"optionalRotationMode","t":4,"rt":$n[5].RotateMode,"sn":"optionalRotationMode","box":function ($v) { return Bridge.box($v, DG.Tweening.RotateMode, System.Enum.toStringFn(DG.Tweening.RotateMode));}},{"a":2,"n":"optionalScrambleMode","t":4,"rt":$n[5].ScrambleMode,"sn":"optionalScrambleMode","box":function ($v) { return Bridge.box($v, DG.Tweening.ScrambleMode, System.Enum.toStringFn(DG.Tweening.ScrambleMode));}},{"a":2,"n":"optionalShakeRandomnessMode","t":4,"rt":$n[5].ShakeRandomnessMode,"sn":"optionalShakeRandomnessMode","box":function ($v) { return Bridge.box($v, DG.Tweening.ShakeRandomnessMode, System.Enum.toStringFn(DG.Tweening.ShakeRandomnessMode));}},{"a":2,"n":"optionalString","t":4,"rt":$n[0].String,"sn":"optionalString"},{"a":2,"n":"target","t":4,"rt":$n[1].Component,"sn":"target"},{"a":2,"n":"targetGO","t":4,"rt":$n[1].GameObject,"sn":"targetGO"},{"a":2,"n":"targetIsSelf","t":4,"rt":$n[0].Boolean,"sn":"targetIsSelf","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"targetType","t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"targetType","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tweenTargetIsTargetGO","t":4,"rt":$n[0].Boolean,"sn":"tweenTargetIsTargetGO","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useTargetAsV3","t":4,"rt":$n[0].Boolean,"sn":"useTargetAsV3","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnReset","is":true,"t":2,"ad":{"a":2,"n":"add_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnReset","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnReset","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnReset","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation end.*/

    /*DG.Tweening.DOTweenAnimation+AnimationType start.*/
    $m("DG.Tweening.DOTweenAnimation.AnimationType", function () { return {"td":$n[5].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CameraAspect","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"CameraAspect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraBackgroundColor","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"CameraBackgroundColor","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraFieldOfView","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"CameraFieldOfView","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraOrthoSize","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"CameraOrthoSize","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraPixelRect","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"CameraPixelRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"CameraRect","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"CameraRect","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Color","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"Color","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Fade","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"Fade","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalMove","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"LocalMove","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"LocalRotate","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"LocalRotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Move","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"Move","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"None","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchPosition","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"PunchPosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchRotation","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"PunchRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"PunchScale","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"PunchScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Rotate","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"Rotate","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Scale","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"Scale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakePosition","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"ShakePosition","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeRotation","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"ShakeRotation","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"ShakeScale","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"ShakeScale","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}},{"a":2,"n":"UIWidthHeight","is":true,"t":4,"rt":$n[5].DOTweenAnimation.AnimationType,"sn":"UIWidthHeight","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.AnimationType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.AnimationType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+AnimationType end.*/

    /*DG.Tweening.DOTweenAnimation+TargetType start.*/
    $m("DG.Tweening.DOTweenAnimation.TargetType", function () { return {"td":$n[5].DOTweenAnimation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Camera","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"Camera","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"CanvasGroup","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"CanvasGroup","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Image","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"Image","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Light","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"Light","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"RectTransform","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"RectTransform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Renderer","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"Renderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"Rigidbody","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Rigidbody2D","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"Rigidbody2D","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"SpriteRenderer","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"SpriteRenderer","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"Text","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshPro","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"TextMeshPro","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"TextMeshProUGUI","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"TextMeshProUGUI","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Transform","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"Transform","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"Unset","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"Unset","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dBaseSprite","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"tk2dBaseSprite","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}},{"a":2,"n":"tk2dTextMesh","is":true,"t":4,"rt":$n[5].DOTweenAnimation.TargetType,"sn":"tk2dTextMesh","box":function ($v) { return Bridge.box($v, DG.Tweening.DOTweenAnimation.TargetType, System.Enum.toStringFn(DG.Tweening.DOTweenAnimation.TargetType));}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimation+TargetType end.*/

    /*DG.Tweening.DOTweenAnimationExtensions start.*/
    $m("DG.Tweening.DOTweenAnimationExtensions", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"IsSameOrSubclassOf","is":true,"t":8,"pi":[{"n":"t","pt":$n[1].Component,"ps":0}],"tpc":1,"tprm":["T"],"sn":"IsSameOrSubclassOf","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenAnimationExtensions end.*/

    /*DG.Tweening.DOTweenProShortcuts start.*/
    $m("DG.Tweening.DOTweenProShortcuts", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"DOSpiral","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Transform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"axis","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[5].SpiralMode,"ps":3},{"n":"speed","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"frequency","dv":10.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"depth","dv":0.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":7}],"sn":"DOSpiral","rt":$n[5].Tweener,"p":[$n[1].Transform,$n[0].Single,$n[0].Nullable$1(UnityEngine.Vector3),$n[5].SpiralMode,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenProShortcuts end.*/

    }});

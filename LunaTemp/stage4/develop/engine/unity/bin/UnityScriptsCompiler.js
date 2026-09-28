if ( TRACE ) { TRACE( JSON.parse( '["AudioController#CreateIns","AudioController#Awake","AudioController#BootstrapPool","AudioController#Start","AudioController#PlaySFX","AudioController#GetFreeSource","AudioController#CreateNewSource","AudioController#ReturnToPool","BalanceController#Start","BalanceController#Update","BombController#init","BombController#OnEnable","BombController#CountDown","BombController#Boom","BombController#DestroyBomb","BombController#Damage","BulletController#Start","BulletController#OnEnable","BulletController#Update","BulletController#Move","BulletController#OnCollisionEnter2D","BulletController#LifeTime","BulletController#ReturnToPool","DG.Tweening.DOTweenAnimation#Dispatch_OnReset","DG.Tweening.DOTweenAnimation#TypeToDOTargetType","DG.Tweening.DOTweenAnimation#init","DG.Tweening.DOTweenAnimation#Awake","DG.Tweening.DOTweenAnimation#Start","DG.Tweening.DOTweenAnimation#Reset","DG.Tweening.DOTweenAnimation#OnDestroy","DG.Tweening.DOTweenAnimation#RewindThenRecreateTween","DG.Tweening.DOTweenAnimation#RewindThenRecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#RecreateTween","DG.Tweening.DOTweenAnimation#RecreateTweenAndPlay","DG.Tweening.DOTweenAnimation#CreateTween","DG.Tweening.DOTweenAnimation#GetTweens","DG.Tweening.DOTweenAnimation#SetAnimationTarget","DG.Tweening.DOTweenAnimation#DOPlay","DG.Tweening.DOTweenAnimation#DOPlayBackwards","DG.Tweening.DOTweenAnimation#DOPlayForward","DG.Tweening.DOTweenAnimation#DOPause","DG.Tweening.DOTweenAnimation#DOTogglePause","DG.Tweening.DOTweenAnimation#DORewind","DG.Tweening.DOTweenAnimation#DORestart","DG.Tweening.DOTweenAnimation#DORestart$1","DG.Tweening.DOTweenAnimation#DOComplete","DG.Tweening.DOTweenAnimation#DOKill","DG.Tweening.DOTweenAnimation#DOPlayById","DG.Tweening.DOTweenAnimation#DOPlayAllById","DG.Tweening.DOTweenAnimation#DOPauseAllById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsById","DG.Tweening.DOTweenAnimation#DOPlayBackwardsAllById","DG.Tweening.DOTweenAnimation#DOPlayForwardById","DG.Tweening.DOTweenAnimation#DOPlayForwardAllById","DG.Tweening.DOTweenAnimation#DOPlayNext","DG.Tweening.DOTweenAnimation#DORewindAndPlayNext","DG.Tweening.DOTweenAnimation#DORewindAllById","DG.Tweening.DOTweenAnimation#DORestartById","DG.Tweening.DOTweenAnimation#DORestartAllById","DG.Tweening.DOTweenAnimation#DOKillById","DG.Tweening.DOTweenAnimation#DOKillAllById","DG.Tweening.DOTweenAnimation#CreateEditorPreview","DG.Tweening.DOTweenAnimation#GetTweenGO","DG.Tweening.DOTweenAnimation#GetTweenTarget","DG.Tweening.DOTweenAnimation#ReEvaluateRelativeTween","DG.Tweening.DOTweenAnimationExtensions#IsSameOrSubclassOf","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","DG.Tweening.DOTweenProShortcuts#ctor","DG.Tweening.DOTweenProShortcuts#DOSpiral","FightController#Pool#get","FightController#Awake","FightController#Action","FightController#Spawn","FightController#GetFreeSpawn","FightController#CreateNewSpawn","FightOption#getDefaultValue","FightOption#ctor","FightOption#getHashCode","FightOption#equals","FightOption#$clone","GameController#P#get","GameController#CreateIns","GameController#Awake","GameController#PauseGame","GameController#GameOver","GameController#Complete","GameController#WaitForGameOver","GameController#SpawnLandmine","GameController#SpawnSmoke","GameController#ClickOption","GameController#RemoveMonster","KunaiController#Update","KunaiController#Rotate","KunaiController#Move","KunaiController#Start","KunaiController#OnEnable","KunaiController#OnCollisionEnter2D","KunaiController#LifeTime","KunaiController#ReturnToPool","LandmineController#init","LandmineController#OnCollisionEnter2D","LandmineController#Boom","LandmineController#DestroyBomb","LandmineController#Damage","LayoutController#Start","LayoutController#Update","LayoutController#Fit","LunaController#init","LunaController#Awake","LunaController#InitText","LunaController#Start","LunaController#ClickCTA","LunaController#EndGame","MonsterAnimation#StartAnimation","MonsterAnimation#StopAnimation","MonsterAnimation#StartLegAnimation","MonsterAnimation#StopLegAnimation","MonsterAnimation#HandAnimation","MonsterAnimation#LegAnimation","MonsterMove#Move","MonsterTarget#Left#get","MonsterTarget#Awake","MonsterTarget#Update","MonsterTarget#CheckTarget","MonsterTarget#UpdateTarget","MonsterTarget#OnTriggerEnter2D","MonsterTarget#OnTriggerExit2D","Piece#getDefaultValue","Piece#ctor","Piece#getHashCode","Piece#equals","Piece#$clone","SmokeController#OnEnable","SmokeController#CountDown","TriggerMonster#OnTriggerEnter2D","TutController#Start","TutController#OnDestroy","VFXController#CreateIns","VFXController#Awake","VFXController#CreateNewVFX","VFXController#GetFreeVFX","VFXController#SpawnVFX","VFXController#ReturnToPool","BlockController#Start","BlockController#TakeDamage","BlockController#TakeDMGPerSec","BlockController#Break","BlockController#OnCollisionEnter2D","BlockController#OnCollisionExit2D","DropController#Update","DropController#CheckInput","MonsterController#IsDead#get","MonsterController#init","MonsterController#Start","MonsterController#Move","MonsterController#FixedUpdate","MonsterController#TakeDamage","MonsterController#Dead","MonsterController#Destroy$1","MonsterController#Animation","PlayerController#Fight#get","PlayerController#init","PlayerController#Awake","PlayerController#Zombie","PlayerController#ChangeFightOption","PlayerController#TakeDamage","PlayerController#Dead","PlayerController#OnTriggerEnter2D","ShootController#OnEnable","ShootController#OnDisable","ShootController#WaitForCD","ShootController#Action","ShootController#Spawn","ShootController#Animation","ShootController#Update","ShootController#CheckInput","ShootController#AutoShoot"]' ) ); }
/**
 * @version 1.0.9767.27280
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

    /*IDamageable start.*/
    Bridge.define("IDamageable", {
        $kind: 3
    });
    /*IDamageable end.*/

    /*BombController start.*/
    Bridge.define("BombController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            damage: 0,
            layer: null,
            startSound: null,
            actionSound: null,
            delay: 0,
            radius: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BombController#init", this ); }

                this.layer = new UnityEngine.LayerMask();
            }
        },
        methods: {
            /*BombController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "BombController#OnEnable", this ); }

                AudioController.Ins.PlaySFX(this.startSound);
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

                AudioController.Ins.PlaySFX(this.actionSound);
                this.Damage();
                this.StartCoroutine$1(this.DestroyBomb());
            },
            /*BombController.Boom end.*/

            /*BombController.DestroyBomb start.*/
            DestroyBomb: function () {
if ( TRACE ) { TRACE( "BombController#DestroyBomb", this ); }

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
            /*BombController.DestroyBomb end.*/

            /*BombController.Damage start.*/
            Damage: function () {
if ( TRACE ) { TRACE( "BombController#Damage", this ); }

                var $t;
                var cols = UnityEngine.Physics2D.OverlapCircleAll(UnityEngine.Vector2.FromVector3(this.transform.position), this.radius * this.transform.localScale.x, UnityEngine.LayerMask.op_Implicit(this.layer.$clone()));
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

                this.Spawn(position.$clone(), rotation.$clone());
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

                var h = Bridge.addHash([3712362531, this.Button, this.Controller]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "FightOption#equals", this ); }

                if (!Bridge.is(o, FightOption)) {
                    return false;
                }
                return Bridge.equals(this.Button, o.Button) && Bridge.equals(this.Controller, o.Controller);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "FightOption#$clone", this ); }

                var s = to || new FightOption();
                s.Button = this.Button;
                s.Controller = this.Controller;
                return s;
            }
        }
    });
    /*FightOption end.*/

    /*GameController start.*/
    Bridge.define("GameController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Ins: null
            }
        },
        fields: {
            Delay: 0,
            startScene: null,
            header: null,
            clickSound: null,
            options: null,
            smokeButton: null,
            smoke: null,
            landmindButton: null,
            landmind: null,
            gunButton: null,
            tut: null,
            endScene: null,
            completeScene: null,
            gameOverScene: null,
            isEnd: false,
            player: null,
            numMonster: 0,
            world: null,
            OnPause: null,
            OnResume: null,
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
                this.smokeButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickOption));
                this.smokeButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.SpawnSmoke));
                this.landmindButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickOption));
                this.landmindButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.SpawnLandmine));
                this.gunButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickOption));
            },
            /*GameController.Awake end.*/

            /*GameController.PauseGame start.*/
            PauseGame: function () {
if ( TRACE ) { TRACE( "GameController#PauseGame", this ); }

                !Bridge.staticEquals(this.OnPause, null) ? this.OnPause() : null;
                this.header.SetActive(false);
                this.options.SetActive(true);
            },
            /*GameController.PauseGame end.*/

            /*GameController.GameOver start.*/
            GameOver: function () {
if ( TRACE ) { TRACE( "GameController#GameOver", this ); }

                if (this.isEnd) {
                    return;
                }
                this.isEnd = true;
                this.StartCoroutine$1(this.WaitForGameOver());
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

            /*GameController.WaitForGameOver start.*/
            WaitForGameOver: function () {
if ( TRACE ) { TRACE( "GameController#WaitForGameOver", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.Delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.endScene.SetActive(true);
                                        UnityEngine.MonoBehaviour.Destroy(this.completeScene);
                                        if (UnityEngine.Object.op_Implicit(this.gameOverScene)) {
                                            this.gameOverScene.SetActive(true);
                                        }
                                        !Bridge.staticEquals(this.OnGameOver, null) ? this.OnGameOver() : null;

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
            /*GameController.WaitForGameOver end.*/

            /*GameController.SpawnLandmine start.*/
            SpawnLandmine: function () {
if ( TRACE ) { TRACE( "GameController#SpawnLandmine", this ); }

                this.landmind.SetActive(true);
            },
            /*GameController.SpawnLandmine end.*/

            /*GameController.SpawnSmoke start.*/
            SpawnSmoke: function () {
if ( TRACE ) { TRACE( "GameController#SpawnSmoke", this ); }

                this.smoke.SetActive(true);
            },
            /*GameController.SpawnSmoke end.*/

            /*GameController.ClickOption start.*/
            ClickOption: function () {
if ( TRACE ) { TRACE( "GameController#ClickOption", this ); }

                this.startScene.SetActive(false);
                !Bridge.staticEquals(this.OnResume, null) ? this.OnResume() : null;
            },
            /*GameController.ClickOption end.*/

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

    /*LandmineController start.*/
    Bridge.define("LandmineController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            damage: 0,
            layer: null,
            actionSound: null,
            boomVFX: null,
            radius: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LandmineController#init", this ); }

                this.layer = new UnityEngine.LayerMask();
            }
        },
        methods: {
            /*LandmineController.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (collision) {
if ( TRACE ) { TRACE( "LandmineController#OnCollisionEnter2D", this ); }

                var g = collision.gameObject;
                if (g.CompareTag("Player") || g.CompareTag("Monster")) {
                    this.Boom();
                }
            },
            /*LandmineController.OnCollisionEnter2D end.*/

            /*LandmineController.Boom start.*/
            Boom: function () {
if ( TRACE ) { TRACE( "LandmineController#Boom", this ); }

                this.boomVFX.SetActive(true);
                AudioController.Ins.PlaySFX(this.actionSound);
                this.Damage();
                this.StartCoroutine$1(this.DestroyBomb());
            },
            /*LandmineController.Boom end.*/

            /*LandmineController.DestroyBomb start.*/
            DestroyBomb: function () {
if ( TRACE ) { TRACE( "LandmineController#DestroyBomb", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
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
            /*LandmineController.DestroyBomb end.*/

            /*LandmineController.Damage start.*/
            Damage: function () {
if ( TRACE ) { TRACE( "LandmineController#Damage", this ); }

                var $t;
                var cols = UnityEngine.Physics2D.OverlapCircleAll(UnityEngine.Vector2.FromVector3(this.transform.position), this.radius * this.transform.localScale.x, UnityEngine.LayerMask.op_Implicit(this.layer.$clone()));
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
            /*LandmineController.Damage end.*/


        }
    });
    /*LandmineController end.*/

    /*LayoutController start.*/
    Bridge.define("LayoutController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            main: null,
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
                    this.main.transform.localScale = new pc.Vec3( 1, 1, 1 );
                } else {
                    this.main.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( 0.75 );
                }
            },
            /*LayoutController.Fit end.*/


        }
    });
    /*LayoutController end.*/

    /*LunaController start.*/
    Bridge.define("LunaController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            oneClick: false,
            UseTime: false,
            TimePlay: 0,
            BGTexture: null,
            HeaderText1: null,
            ColorHeaderText1: null,
            HeaderText2: null,
            ColorHeaderText2: null,
            GameOverText: null,
            ColorGameOverText: null,
            header1: null,
            header2: null,
            lossText: null,
            BGImage: null,
            CTA: null,
            oneClickCTA: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LunaController#init", this ); }

                this.ColorHeaderText1 = new UnityEngine.Color();
                this.ColorHeaderText2 = new UnityEngine.Color();
                this.ColorGameOverText = new UnityEngine.Color();
            }
        },
        methods: {
            /*LunaController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LunaController#Awake", this ); }

                this.InitText();
                this.BGImage.texture = this.BGTexture;
                this.CTA.ForEach(Bridge.fn.bind(this, function (b) {
                    b.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickCTA));
                }));
                if (this.oneClick) {
                    this.oneClickCTA.ForEach(Bridge.fn.bind(this, function (b) {
                        b.onClick.AddListener(Bridge.fn.cacheBind(this, this.ClickCTA));
                    }));
                }
            },
            /*LunaController.Awake end.*/

            /*LunaController.InitText start.*/
            InitText: function () {
if ( TRACE ) { TRACE( "LunaController#InitText", this ); }

                this.header1.text = this.HeaderText1;
                this.header1.color = this.ColorHeaderText1.$clone();

                this.header2.text = this.HeaderText2;
                this.header2.color = this.ColorHeaderText2.$clone();

                this.lossText.text = this.GameOverText;
                this.lossText.color = this.ColorGameOverText.$clone();
            },
            /*LunaController.InitText end.*/

            /*LunaController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LunaController#Start", this ); }

                this.StartCoroutine$1(this.EndGame());
            },
            /*LunaController.Start end.*/

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
                                            this.ClickCTA();
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

    /*MonsterAnimation start.*/
    Bridge.define("MonsterAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            leftHand: null,
            rightHand: null,
            leftLeg: null,
            rightLeg: null,
            anim: null
        },
        methods: {
            /*MonsterAnimation.StartAnimation start.*/
            StartAnimation: function () {
if ( TRACE ) { TRACE( "MonsterAnimation#StartAnimation", this ); }

                this.StartCoroutine$1(this.HandAnimation());
                this.anim = this.StartCoroutine$1(this.LegAnimation());
            },
            /*MonsterAnimation.StartAnimation end.*/

            /*MonsterAnimation.StopAnimation start.*/
            StopAnimation: function () {
if ( TRACE ) { TRACE( "MonsterAnimation#StopAnimation", this ); }

                this.StopAllCoroutines();
            },
            /*MonsterAnimation.StopAnimation end.*/

            /*MonsterAnimation.StartLegAnimation start.*/
            StartLegAnimation: function () {
if ( TRACE ) { TRACE( "MonsterAnimation#StartLegAnimation", this ); }

                this.StopCoroutine$2(this.anim);
            },
            /*MonsterAnimation.StartLegAnimation end.*/

            /*MonsterAnimation.StopLegAnimation start.*/
            StopLegAnimation: function () {
if ( TRACE ) { TRACE( "MonsterAnimation#StopLegAnimation", this ); }

                this.StopCoroutine$2(this.anim);
            },
            /*MonsterAnimation.StopLegAnimation end.*/

            /*MonsterAnimation.HandAnimation start.*/
            HandAnimation: function () {
if ( TRACE ) { TRACE( "MonsterAnimation#HandAnimation", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.leftHand.useMotor = true;
                                        this.rightHand.useMotor = false;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.leftHand.useMotor = false;
                                        this.rightHand.useMotor = true;

                                        $step = 0;
                                        continue;
                                }
                                case 4: {

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
            /*MonsterAnimation.HandAnimation end.*/

            /*MonsterAnimation.LegAnimation start.*/
            LegAnimation: function () {
if ( TRACE ) { TRACE( "MonsterAnimation#LegAnimation", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.leftLeg.useMotor = true;
                                        this.rightLeg.useMotor = false;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.leftLeg.useMotor = false;
                                        this.rightLeg.useMotor = true;

                                        $step = 0;
                                        continue;
                                }
                                case 4: {

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
            /*MonsterAnimation.LegAnimation end.*/


        }
    });
    /*MonsterAnimation end.*/

    /*MonsterMove start.*/
    Bridge.define("MonsterMove", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            body: null,
            speed: 0
        },
        methods: {
            /*MonsterMove.Move start.*/
            Move: function (left) {
if ( TRACE ) { TRACE( "MonsterMove#Move", this ); }

                this.body.linearVelocity = new pc.Vec2( left ? -this.speed : this.speed, this.body.linearVelocity.y );
            },
            /*MonsterMove.Move end.*/


        }
    });
    /*MonsterMove end.*/

    /*MonsterTarget start.*/
    Bridge.define("MonsterTarget", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            targetLeft: false,
            targets: null,
            currentTarget: null
        },
        props: {
            Left: {
                get: function () {
if ( TRACE ) { TRACE( "MonsterTarget#Left#get", this ); }

                    return this.targetLeft;
                }
            }
        },
        methods: {
            /*MonsterTarget.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "MonsterTarget#Awake", this ); }

                this.targets = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
            },
            /*MonsterTarget.Awake end.*/

            /*MonsterTarget.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MonsterTarget#Update", this ); }

                this.CheckTarget();
            },
            /*MonsterTarget.Update end.*/

            /*MonsterTarget.CheckTarget start.*/
            CheckTarget: function () {
if ( TRACE ) { TRACE( "MonsterTarget#CheckTarget", this ); }

                if (!UnityEngine.Object.op_Implicit(this.currentTarget)) {
                    return;
                }
                var direction = UnityEngine.Vector2.FromVector3(this.currentTarget.position.$clone().sub( this.transform.position ));
                var cross = new pc.Vec3().cross( this.transform.forward, UnityEngine.Vector3.FromVector2(direction) ).y;
                this.targetLeft = cross < 0;
            },
            /*MonsterTarget.CheckTarget end.*/

            /*MonsterTarget.UpdateTarget start.*/
            UpdateTarget: function () {
if ( TRACE ) { TRACE( "MonsterTarget#UpdateTarget", this ); }

                this.currentTarget = this.targets.Count > 0 ? this.targets.getItem(0) : null;
            },
            /*MonsterTarget.UpdateTarget end.*/

            /*MonsterTarget.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (collision) {
if ( TRACE ) { TRACE( "MonsterTarget#OnTriggerEnter2D", this ); }

                var t = collision.transform;
                if (!this.targets.contains(t)) {
                    this.targets.add(t);
                }
                this.UpdateTarget();
            },
            /*MonsterTarget.OnTriggerEnter2D end.*/

            /*MonsterTarget.OnTriggerExit2D start.*/
            OnTriggerExit2D: function (collision) {
if ( TRACE ) { TRACE( "MonsterTarget#OnTriggerExit2D", this ); }

                this.targets.indexOf(collision.transform);
                this.UpdateTarget();
            },
            /*MonsterTarget.OnTriggerExit2D end.*/


        }
    });
    /*MonsterTarget end.*/

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

    /*SmokeController start.*/
    Bridge.define("SmokeController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            delay: 0,
            startSound: null,
            actionSound: null,
            boomSound: null
        },
        methods: {
            /*SmokeController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "SmokeController#OnEnable", this ); }

                AudioController.Ins.PlaySFX(this.startSound);
                this.StartCoroutine$1(this.CountDown());
            },
            /*SmokeController.OnEnable end.*/

            /*SmokeController.CountDown start.*/
            CountDown: function () {
if ( TRACE ) { TRACE( "SmokeController#CountDown", this ); }

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
                                    AudioController.Ins.PlaySFX(this.actionSound);
                                        AudioController.Ins.PlaySFX(this.boomSound);

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
            /*SmokeController.CountDown end.*/


        }
    });
    /*SmokeController end.*/

    /*TriggerMonster start.*/
    Bridge.define("TriggerMonster", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*TriggerMonster.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (collision) {
if ( TRACE ) { TRACE( "TriggerMonster#OnTriggerEnter2D", this ); }

                GameController.Ins.PauseGame();
                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*TriggerMonster.OnTriggerEnter2D end.*/


        }
    });
    /*TriggerMonster end.*/

    /*TutController start.*/
    Bridge.define("TutController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            movePos: null,
            moveTime: 0,
            fromScale: 0,
            toScale: 0,
            scaleTime: 0,
            delayTime: 0,
            sequence: null
        },
        methods: {
            /*TutController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TutController#Start", this ); }

                this.sequence = DG.Tweening.DOTween.Sequence();
                for (var i = 1; i < this.movePos.Count; i = (i + 1) | 0) {
                    DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.AppendInterval(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(this.sequence, DG.Tweening.ShortcutExtensions.DOScale(this.transform, this.toScale, this.scaleTime)), DG.Tweening.ShortcutExtensions.DOScale(this.transform, this.fromScale, this.scaleTime)), this.delayTime), DG.Tweening.ShortcutExtensions.DOLocalMove(this.transform, UnityEngine.Vector3.FromVector2(this.movePos.getItem(i).$clone()), this.moveTime));
                }
                DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.AppendInterval(DG.Tweening.TweenSettingsExtensions.Append(DG.Tweening.TweenSettingsExtensions.Append(this.sequence, DG.Tweening.ShortcutExtensions.DOScale(this.transform, this.toScale, this.scaleTime)), DG.Tweening.ShortcutExtensions.DOScale(this.transform, this.fromScale, this.scaleTime)), this.delayTime), DG.Tweening.ShortcutExtensions.DOLocalMove(this.transform, UnityEngine.Vector3.FromVector2(this.movePos.getItem(0).$clone()), this.moveTime));
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
                    VFXController.Ins.SpawnVFX(UnityEngine.Vector2.FromVector3(this.transform.position.$clone()), this.breakVFX);
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
                    this.Action(UnityEngine.Vector2.FromVector3(worldPos.$clone()), pc.Quat.IDENTITY.clone());
                    return;
                }
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                        return;
                    }
                    var worldPos1 = UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Input.mousePosition);
                    this.Action(UnityEngine.Vector2.FromVector3(worldPos1.$clone()), pc.Quat.IDENTITY.clone());
                }
            },
            /*DropController.CheckInput end.*/


        }
    });
    /*DropController end.*/

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
            monsterMove: null,
            monsterTarget: null,
            monsterAnimation: null,
            voice: null,
            isGamePause: false
        },
        props: {
            IsDead: {
                get: function () {
if ( TRACE ) { TRACE( "MonsterController#IsDead#get", this ); }

                    return this.isDead;
                }
            }
        },
        alias: ["TakeDamage", "IDamageable$TakeDamage"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MonsterController#init", this ); }

                this.maxForce = new UnityEngine.Vector2();
                this.minForce = new UnityEngine.Vector2();
                this.maxForce = new pc.Vec2( 1000, 1000 );
                this.minForce = new pc.Vec2( 200, 200 );
            }
        },
        methods: {
            /*MonsterController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MonsterController#Start", this ); }

                this.currentHP = this.maxHP;
                GameController.Ins.OnPause = Bridge.fn.combine(GameController.Ins.OnPause, Bridge.fn.bind(this, function () {
                    this.isGamePause = true;
                }));
                GameController.Ins.OnResume = Bridge.fn.combine(GameController.Ins.OnResume, Bridge.fn.bind(this, function () {
                    this.isGamePause = false;
                }));
                this.StartCoroutine$1(this.Animation());
            },
            /*MonsterController.Start end.*/

            /*MonsterController.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "MonsterController#Move", this ); }

                if (this.isGamePause || this.isDead) {
                    return;
                }
                this.monsterMove.Move(this.monsterTarget.Left);
            },
            /*MonsterController.Move end.*/

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
                this.voice.SetActive(false);
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
                                    this.monsterAnimation.StartAnimation();
                                        $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return this.isGamePause;
                                        }));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.monsterAnimation.StopLegAnimation();
                                        $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return !this.isGamePause;
                                        }));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.monsterAnimation.StartLegAnimation();
                                        $enumerator.current = new UnityEngine.WaitUntil(Bridge.fn.bind(this, function () {
                                            return this.isDead;
                                        }));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.monsterAnimation.StopAnimation();

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

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour,IDamageable],
        fields: {
            pieces: null,
            head: null,
            deadSFX: null,
            maxForce: null,
            minForce: null,
            fightOptions: null,
            fight: null,
            clickSound: null,
            deadVFX: null,
            renderers: null,
            sprites: null,
            isZombie: false,
            isDead: false
        },
        props: {
            Fight: {
                get: function () {
if ( TRACE ) { TRACE( "PlayerController#Fight#get", this ); }

                    return this.fight.$clone();
                }
            }
        },
        alias: ["TakeDamage", "IDamageable$TakeDamage"],
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
                        this.ChangeFightOption(op.$clone());
                    }));
                }));
            },
            /*PlayerController.Awake end.*/

            /*PlayerController.Zombie start.*/
            Zombie: function () {
if ( TRACE ) { TRACE( "PlayerController#Zombie", this ); }

                this.isZombie = true;
                AudioController.Ins.PlaySFX(this.deadSFX);

                for (var i = 0; i < this.renderers.Count; i = (i + 1) | 0) {
                    this.renderers.getItem(i).sprite = this.sprites.getItem(i);
                }
                if (UnityEngine.Object.op_Implicit(this.fight.Controller)) {
                    this.fight.Controller.gameObject.SetActive(false);
                }
            },
            /*PlayerController.Zombie end.*/

            /*PlayerController.ChangeFightOption start.*/
            ChangeFightOption: function (option) {
if ( TRACE ) { TRACE( "PlayerController#ChangeFightOption", this ); }

                if (UnityEngine.Object.op_Implicit(this.fight.Controller)) {
                    this.fight.Controller.gameObject.SetActive(false);
                }
                AudioController.Ins.PlaySFX(this.clickSound);
                this.fight = option.$clone();
                this.fight.Controller.gameObject.SetActive(true);
            },
            /*PlayerController.ChangeFightOption end.*/

            /*PlayerController.TakeDamage start.*/
            TakeDamage: function (amount) {
if ( TRACE ) { TRACE( "PlayerController#TakeDamage", this ); }

                this.Dead();
                GameController.Ins.GameOver();
            },
            /*PlayerController.TakeDamage end.*/

            /*PlayerController.Dead start.*/
            Dead: function () {
if ( TRACE ) { TRACE( "PlayerController#Dead", this ); }

                var $t;
                if (this.isDead) {
                    return;
                }
                this.isDead = true;
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

            /*PlayerController.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (collision) {
if ( TRACE ) { TRACE( "PlayerController#OnTriggerEnter2D", this ); }

                if (this.isZombie || !collision.gameObject.CompareTag("Monster")) {
                    return;
                }
                var monster = { };
                collision.transform.parent.TryGetComponent$1(MonsterController, monster);
                if (!UnityEngine.Object.op_Implicit(monster.v) || monster.v.IsDead) {
                    return;
                }
                this.Zombie();
                GameController.Ins.GameOver();
            },
            /*PlayerController.OnTriggerEnter2D end.*/


        }
    });
    /*PlayerController end.*/

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
                limit.max = -120;
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
                FightController.prototype.Action.call(this, position.$clone(), rotation.$clone());
                this.StartCoroutine$1(this.Animation());
            },
            /*ShootController.Action end.*/

            /*ShootController.Spawn start.*/
            Spawn: function (position, rotation) {
if ( TRACE ) { TRACE( "ShootController#Spawn", this ); }

                FightController.prototype.Spawn.call(this, position.$clone(), rotation.$clone());
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

                this.AutoShoot();
            },
            /*ShootController.Update end.*/

            /*ShootController.CheckInput start.*/
            CheckInput: function () {
if ( TRACE ) { TRACE( "ShootController#CheckInput", this ); }

                if (UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Began) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject$1(UnityEngine.Input.GetTouch(0).fingerId)) {
                        return;
                    }
                    this.Action(UnityEngine.Vector2.FromVector3(this.startPos.position.$clone()), this.startPos.rotation.$clone());
                    return;
                }
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject()) {
                        return;
                    }
                    this.Action(UnityEngine.Vector2.FromVector3(this.startPos.position.$clone()), this.startPos.rotation.$clone());
                }
            },
            /*ShootController.CheckInput end.*/

            /*ShootController.AutoShoot start.*/
            AutoShoot: function () {
if ( TRACE ) { TRACE( "ShootController#AutoShoot", this ); }

                this.Action(UnityEngine.Vector2.FromVector3(this.startPos.position.$clone()), this.startPos.rotation.$clone());
            },
            /*ShootController.AutoShoot end.*/


        }
    });
    /*ShootController end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","System.Collections.Generic","UnityEngine.UI","DG.Tweening","DG.Tweening.Core","System.Globalization","DG.Tweening.Plugins.Core.PathCore","DG.Tweening.Plugins.Options"];

    /*AudioController start.*/
    $m("AudioController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BootstrapPool","t":8,"sn":"BootstrapPool","rt":$n[0].Void},{"a":1,"n":"CreateIns","t":8,"sn":"CreateIns","rt":$n[0].Void},{"a":1,"n":"CreateNewSource","t":8,"sn":"CreateNewSource","rt":$n[1].AudioSource},{"a":1,"n":"GetFreeSource","t":8,"sn":"GetFreeSource","rt":$n[1].AudioSource},{"a":2,"n":"PlaySFX","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0}],"sn":"PlaySFX","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":1,"n":"ReturnToPool","t":8,"pi":[{"n":"s","pt":$n[1].AudioSource,"ps":0}],"sn":"ReturnToPool","rt":$n[2].IEnumerator,"p":[$n[1].AudioSource]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("BGM", 0, null)],"a":2,"n":"BGM","t":4,"rt":$n[1].AudioClip,"sn":"BGM"},{"a":2,"n":"Ins","is":true,"t":4,"rt":AudioController,"sn":"Ins"},{"a":1,"n":"SFXPool","t":4,"rt":$n[3].Queue$1(UnityEngine.AudioSource),"sn":"SFXPool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicSource","t":4,"rt":$n[1].AudioSource,"sn":"musicSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pool","t":4,"rt":$n[1].Transform,"sn":"pool"}]}; }, $n);
    /*AudioController end.*/

    /*GameController start.*/
    $m("GameController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ClickOption","t":8,"sn":"ClickOption","rt":$n[0].Void},{"a":2,"n":"Complete","t":8,"sn":"Complete","rt":$n[0].Void},{"a":1,"n":"CreateIns","t":8,"sn":"CreateIns","rt":$n[0].Void},{"a":2,"n":"GameOver","t":8,"sn":"GameOver","rt":$n[0].Void},{"a":2,"n":"PauseGame","t":8,"sn":"PauseGame","rt":$n[0].Void},{"a":2,"n":"RemoveMonster","t":8,"sn":"RemoveMonster","rt":$n[0].Void},{"a":2,"n":"SpawnLandmine","t":8,"sn":"SpawnLandmine","rt":$n[0].Void},{"a":2,"n":"SpawnSmoke","t":8,"sn":"SpawnSmoke","rt":$n[0].Void},{"a":1,"n":"WaitForGameOver","t":8,"sn":"WaitForGameOver","rt":$n[2].IEnumerator},{"a":2,"n":"P","t":16,"rt":PlayerController,"g":{"a":2,"n":"get_P","t":8,"rt":PlayerController,"fg":"P"},"fn":"P"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Delay Show Game Over", -1, null, false, null)],"a":2,"n":"Delay","t":4,"rt":$n[0].Single,"sn":"Delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Ins","is":true,"t":4,"rt":GameController,"sn":"Ins"},{"a":2,"n":"OnGameComplete","t":4,"rt":Function,"sn":"OnGameComplete"},{"a":2,"n":"OnGameOver","t":4,"rt":Function,"sn":"OnGameOver"},{"a":2,"n":"OnPause","t":4,"rt":Function,"sn":"OnPause"},{"a":2,"n":"OnResume","t":4,"rt":Function,"sn":"OnResume"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clickSound","t":4,"rt":$n[1].AudioClip,"sn":"clickSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"completeScene","t":4,"rt":$n[1].GameObject,"sn":"completeScene"},{"at":[new UnityEngine.HeaderAttribute("End Scene"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endScene","t":4,"rt":$n[1].GameObject,"sn":"endScene"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameOverScene","t":4,"rt":$n[1].GameObject,"sn":"gameOverScene"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gunButton","t":4,"rt":$n[4].Button,"sn":"gunButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"header","t":4,"rt":$n[1].GameObject,"sn":"header"},{"a":1,"n":"isEnd","t":4,"rt":$n[0].Boolean,"sn":"isEnd","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"landmind","t":4,"rt":$n[1].GameObject,"sn":"landmind"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"landmindButton","t":4,"rt":$n[4].Button,"sn":"landmindButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"numMonster","t":4,"rt":$n[0].Int32,"sn":"numMonster","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Option"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"options","t":4,"rt":$n[1].GameObject,"sn":"options"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"player","t":4,"rt":PlayerController,"sn":"player"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoke","t":4,"rt":$n[1].GameObject,"sn":"smoke"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smokeButton","t":4,"rt":$n[4].Button,"sn":"smokeButton"},{"at":[new UnityEngine.HeaderAttribute("Start Scene"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startScene","t":4,"rt":$n[1].GameObject,"sn":"startScene"},{"at":[new UnityEngine.HeaderAttribute("Tut"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"tut","t":4,"rt":$n[1].GameObject,"sn":"tut"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"world","t":4,"rt":$n[1].Transform,"sn":"world"}]}; }, $n);
    /*GameController end.*/

    /*LayoutController start.*/
    $m("LayoutController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Fit","t":8,"sn":"Fit","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"main","t":4,"rt":$n[1].Transform,"sn":"main"},{"a":1,"n":"oldRatio","t":4,"rt":$n[0].Single,"sn":"oldRatio","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LayoutController end.*/

    /*LunaController start.*/
    $m("LunaController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ClickCTA","t":8,"sn":"ClickCTA","rt":$n[0].Void},{"a":1,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[2].IEnumerator},{"a":1,"n":"InitText","t":8,"sn":"InitText","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"BGImage","t":4,"rt":$n[4].RawImage,"sn":"BGImage"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("BG Image", 0, null)],"a":2,"n":"BGTexture","t":4,"rt":$n[1].Texture2D,"sn":"BGTexture"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"CTA","t":4,"rt":$n[3].List$1(UnityEngine.UI.Button),"sn":"CTA"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Color Game Over Text", -1, null, false, null)],"a":2,"n":"ColorGameOverText","t":4,"rt":$n[1].Color,"sn":"ColorGameOverText"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Color Header Text 1", -1, null, false, null)],"a":2,"n":"ColorHeaderText1","t":4,"rt":$n[1].Color,"sn":"ColorHeaderText1"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Color Header Text 2", -1, null, false, null)],"a":2,"n":"ColorHeaderText2","t":4,"rt":$n[1].Color,"sn":"ColorHeaderText2"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Game Over Text", -1, null, false, null)],"a":2,"n":"GameOverText","t":4,"rt":$n[0].String,"sn":"GameOverText"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Header Text 1", -1, null, false, null)],"a":2,"n":"HeaderText1","t":4,"rt":$n[0].String,"sn":"HeaderText1"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Header Text 2", -1, null, false, null)],"a":2,"n":"HeaderText2","t":4,"rt":$n[0].String,"sn":"HeaderText2"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Time Play", -1, null, false, null)],"a":2,"n":"TimePlay","t":4,"rt":$n[0].Single,"sn":"TimePlay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Limit Time Play?", -1, null, false, null)],"a":2,"n":"UseTime","t":4,"rt":$n[0].Boolean,"sn":"UseTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"header1","t":4,"rt":$n[4].Text,"sn":"header1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"header2","t":4,"rt":$n[4].Text,"sn":"header2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lossText","t":4,"rt":$n[4].Text,"sn":"lossText"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("1 Click?", -1, null, false, null)],"a":2,"n":"oneClick","t":4,"rt":$n[0].Boolean,"sn":"oneClick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"oneClickCTA","t":4,"rt":$n[3].List$1(UnityEngine.UI.Button),"sn":"oneClickCTA"}]}; }, $n);
    /*LunaController end.*/

    /*TriggerMonster start.*/
    $m("TriggerMonster", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]}]}; }, $n);
    /*TriggerMonster end.*/

    /*TutController start.*/
    $m("TutController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delayTime","t":4,"rt":$n[0].Single,"sn":"delayTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fromScale","t":4,"rt":$n[0].Single,"sn":"fromScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"movePos","t":4,"rt":$n[3].List$1(UnityEngine.Vector2),"sn":"movePos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveTime","t":4,"rt":$n[0].Single,"sn":"moveTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scaleTime","t":4,"rt":$n[0].Single,"sn":"scaleTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"sequence","t":4,"rt":$n[5].Sequence,"sn":"sequence"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"toScale","t":4,"rt":$n[0].Single,"sn":"toScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TutController end.*/

    /*VFXController start.*/
    $m("VFXController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CreateIns","t":8,"sn":"CreateIns","rt":$n[0].Void},{"a":1,"n":"CreateNewVFX","t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0}],"sn":"CreateNewVFX","rt":$n[1].GameObject,"p":[$n[1].GameObject]},{"a":1,"n":"GetFreeVFX","t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0}],"sn":"GetFreeVFX","rt":$n[1].GameObject,"p":[$n[1].GameObject]},{"a":1,"n":"ReturnToPool","t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"vfx","pt":$n[1].GameObject,"ps":1}],"sn":"ReturnToPool","rt":$n[2].IEnumerator,"p":[$n[1].GameObject,$n[1].GameObject]},{"a":2,"n":"SpawnVFX","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"prefab","pt":$n[1].GameObject,"ps":1}],"sn":"SpawnVFX","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].GameObject]},{"a":2,"n":"Ins","is":true,"t":4,"rt":VFXController,"sn":"Ins"},{"a":1,"n":"pool","t":4,"rt":$n[3].Dictionary$2(UnityEngine.GameObject,System.Collections.Generic.Queue$1(UnityEngine.GameObject)),"sn":"pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"poolParent","t":4,"rt":$n[1].Transform,"sn":"poolParent"}]}; }, $n);
    /*VFXController end.*/

    /*BlockController start.*/
    $m("BlockController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Break","t":8,"sn":"Break","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"OnCollisionExit2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionExit2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TakeDMGPerSec","t":8,"sn":"TakeDMGPerSec","rt":$n[2].IEnumerator},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"TakeDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"breakSFX","t":4,"rt":$n[1].AudioClip,"sn":"breakSFX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"breakVFX","t":4,"rt":$n[1].GameObject,"sn":"breakVFX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentHP","t":4,"rt":$n[0].Int32,"sn":"currentHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitSFX","t":4,"rt":$n[1].AudioClip,"sn":"hitSFX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isBreak","t":4,"rt":$n[0].Boolean,"sn":"isBreak","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxHP","t":4,"rt":$n[0].Int32,"sn":"maxHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"numMonster","t":4,"rt":$n[0].Int32,"sn":"numMonster","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*BlockController end.*/

    /*IDamageable start.*/
    $m("IDamageable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"IDamageable$TakeDamage","rt":$n[0].Void,"p":[$n[0].Int32]}]}; }, $n);
    /*IDamageable end.*/

    /*BalanceController start.*/
    $m("BalanceController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"force","t":4,"rt":$n[0].Single,"sn":"force","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"rb"},{"a":2,"n":"targetRotation","t":4,"rt":$n[0].Single,"sn":"targetRotation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BalanceController end.*/

    /*MonsterAnimation start.*/
    $m("MonsterAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandAnimation","t":8,"sn":"HandAnimation","rt":$n[2].IEnumerator},{"a":1,"n":"LegAnimation","t":8,"sn":"LegAnimation","rt":$n[2].IEnumerator},{"a":2,"n":"StartAnimation","t":8,"sn":"StartAnimation","rt":$n[0].Void},{"a":2,"n":"StartLegAnimation","t":8,"sn":"StartLegAnimation","rt":$n[0].Void},{"a":2,"n":"StopAnimation","t":8,"sn":"StopAnimation","rt":$n[0].Void},{"a":2,"n":"StopLegAnimation","t":8,"sn":"StopLegAnimation","rt":$n[0].Void},{"a":1,"n":"anim","t":4,"rt":$n[1].Coroutine,"sn":"anim"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leftHand","t":4,"rt":$n[1].HingeJoint2D,"sn":"leftHand"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leftLeg","t":4,"rt":$n[1].HingeJoint2D,"sn":"leftLeg"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rightHand","t":4,"rt":$n[1].HingeJoint2D,"sn":"rightHand"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rightLeg","t":4,"rt":$n[1].HingeJoint2D,"sn":"rightLeg"}]}; }, $n);
    /*MonsterAnimation end.*/

    /*MonsterController start.*/
    $m("MonsterController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Animation","t":8,"sn":"Animation","rt":$n[2].IEnumerator},{"a":1,"n":"Dead","t":8,"sn":"Dead","rt":$n[0].Void},{"a":1,"n":"Destroy","t":8,"sn":"Destroy$1","rt":$n[2].IEnumerator},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"TakeDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"IsDead","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsDead","t":8,"rt":$n[0].Boolean,"fg":"IsDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsDead"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"balance","t":4,"rt":BalanceController,"sn":"balance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentHP","t":4,"rt":$n[0].Int32,"sn":"currentHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadSFX","t":4,"rt":$n[1].AudioClip,"sn":"deadSFX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isDead","t":4,"rt":$n[0].Boolean,"sn":"isDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isGamePause","t":4,"rt":$n[0].Boolean,"sn":"isGamePause","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxForce","t":4,"rt":$n[1].Vector2,"sn":"maxForce"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxHP","t":4,"rt":$n[0].Int32,"sn":"maxHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minForce","t":4,"rt":$n[1].Vector2,"sn":"minForce"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsterAnimation","t":4,"rt":MonsterAnimation,"sn":"monsterAnimation"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsterMove","t":4,"rt":MonsterMove,"sn":"monsterMove"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"monsterTarget","t":4,"rt":MonsterTarget,"sn":"monsterTarget"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pieces","t":4,"rt":$n[3].List$1(Piece),"sn":"pieces"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"voice","t":4,"rt":$n[1].GameObject,"sn":"voice"}]}; }, $n);
    /*MonsterController end.*/

    /*Piece start.*/
    $m("Piece", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Joint","t":4,"rt":$n[1].Joint2D,"sn":"Joint"},{"a":2,"n":"Rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"Rb"}]}; }, $n);
    /*Piece end.*/

    /*MonsterMove start.*/
    $m("MonsterMove", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Move","t":8,"pi":[{"n":"left","pt":$n[0].Boolean,"ps":0}],"sn":"Move","rt":$n[0].Void,"p":[$n[0].Boolean]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"body","t":4,"rt":$n[1].Rigidbody2D,"sn":"body"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MonsterMove end.*/

    /*MonsterTarget start.*/
    $m("MonsterTarget", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CheckTarget","t":8,"sn":"CheckTarget","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"OnTriggerExit2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerExit2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateTarget","t":8,"sn":"UpdateTarget","rt":$n[0].Void},{"a":2,"n":"Left","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_Left","t":8,"rt":$n[0].Boolean,"fg":"Left","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"Left"},{"a":1,"n":"currentTarget","t":4,"rt":$n[1].Transform,"sn":"currentTarget"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetLeft","t":4,"rt":$n[0].Boolean,"sn":"targetLeft","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"targets","t":4,"rt":$n[3].List$1(UnityEngine.Transform),"sn":"targets"}]}; }, $n);
    /*MonsterTarget end.*/

    /*DropController start.*/
    $m("DropController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckInput","t":8,"sn":"CheckInput","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*DropController end.*/

    /*FightController start.*/
    $m("FightController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"Action","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"rotation","pt":$n[1].Quaternion,"ps":1}],"sn":"Action","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Quaternion]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CreateNewSpawn","t":8,"sn":"CreateNewSpawn","rt":$n[1].GameObject},{"a":1,"n":"GetFreeSpawn","t":8,"sn":"GetFreeSpawn","rt":$n[1].GameObject},{"v":true,"a":3,"n":"Spawn","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"rotation","pt":$n[1].Quaternion,"ps":1}],"sn":"Spawn","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Quaternion]},{"a":2,"n":"Pool","t":16,"rt":$n[3].Queue$1(UnityEngine.GameObject),"g":{"a":2,"n":"get_Pool","t":8,"rt":$n[3].Queue$1(UnityEngine.GameObject),"fg":"Pool"},"fn":"Pool"},{"at":[new UnityEngine.HeaderAttribute("Spawn"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"attackSound","t":4,"rt":$n[1].AudioClip,"sn":"attackSound"},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(UnityEngine.GameObject),"sn":"pool"},{"at":[new UnityEngine.HeaderAttribute("Pool"),new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"poolParent","t":4,"rt":$n[1].Transform,"sn":"poolParent"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"spawnPrefab","t":4,"rt":$n[1].GameObject,"sn":"spawnPrefab"}]}; }, $n);
    /*FightController end.*/

    /*ShootController start.*/
    $m("ShootController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"Action","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"rotation","pt":$n[1].Quaternion,"ps":1}],"sn":"Action","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Quaternion]},{"a":1,"n":"Animation","t":8,"sn":"Animation","rt":$n[2].IEnumerator},{"a":1,"n":"AutoShoot","t":8,"sn":"AutoShoot","rt":$n[0].Void},{"a":1,"n":"CheckInput","t":8,"sn":"CheckInput","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"ov":true,"a":3,"n":"Spawn","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0},{"n":"rotation","pt":$n[1].Quaternion,"ps":1}],"sn":"Spawn","rt":$n[0].Void,"p":[$n[1].Vector2,$n[1].Quaternion]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WaitForCD","t":8,"sn":"WaitForCD","rt":$n[2].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"CD","t":4,"rt":$n[0].Single,"sn":"CD","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"currentMonster","t":4,"rt":MonsterController,"sn":"currentMonster"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"left","t":4,"rt":$n[1].HingeJoint2D,"sn":"left"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"onCD","t":4,"rt":$n[0].Boolean,"sn":"onCD","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"right","t":4,"rt":$n[1].HingeJoint2D,"sn":"right"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startPos","t":4,"rt":$n[1].Transform,"sn":"startPos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeMotor","t":4,"rt":$n[0].Single,"sn":"timeMotor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ShootController end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"ChangeFightOption","t":8,"pi":[{"n":"option","pt":FightOption,"ps":0}],"sn":"ChangeFightOption","rt":$n[0].Void,"p":[FightOption]},{"a":1,"n":"Dead","t":8,"sn":"Dead","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"TakeDamage","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Zombie","t":8,"sn":"Zombie","rt":$n[0].Void},{"a":2,"n":"Fight","t":16,"rt":FightOption,"g":{"a":2,"n":"get_Fight","t":8,"rt":FightOption,"fg":"Fight"},"fn":"Fight"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clickSound","t":4,"rt":$n[1].AudioClip,"sn":"clickSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadSFX","t":4,"rt":$n[1].AudioClip,"sn":"deadSFX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadVFX","t":4,"rt":$n[1].GameObject,"sn":"deadVFX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fight","t":4,"rt":FightOption,"sn":"fight"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fightOptions","t":4,"rt":$n[3].List$1(FightOption),"sn":"fightOptions"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"head","t":4,"rt":$n[1].TargetJoint2D,"sn":"head"},{"a":1,"n":"isDead","t":4,"rt":$n[0].Boolean,"sn":"isDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isZombie","t":4,"rt":$n[0].Boolean,"sn":"isZombie","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxForce","t":4,"rt":$n[1].Vector2,"sn":"maxForce"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minForce","t":4,"rt":$n[1].Vector2,"sn":"minForce"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pieces","t":4,"rt":$n[3].List$1(Piece),"sn":"pieces"},{"at":[new UnityEngine.HeaderAttribute("Zombie"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"renderers","t":4,"rt":$n[3].List$1(UnityEngine.SpriteRenderer),"sn":"renderers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sprites","t":4,"rt":$n[3].List$1(UnityEngine.Sprite),"sn":"sprites"}]}; }, $n);
    /*PlayerController end.*/

    /*FightOption start.*/
    $m("FightOption", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Button","t":4,"rt":$n[4].Button,"sn":"Button"},{"a":2,"n":"Controller","t":4,"rt":FightController,"sn":"Controller"}]}; }, $n);
    /*FightOption end.*/

    /*BombController start.*/
    $m("BombController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Boom","t":8,"sn":"Boom","rt":$n[0].Void},{"a":1,"n":"CountDown","t":8,"sn":"CountDown","rt":$n[2].IEnumerator},{"a":1,"n":"Damage","t":8,"sn":"Damage","rt":$n[0].Void},{"a":1,"n":"DestroyBomb","t":8,"sn":"DestroyBomb","rt":$n[2].IEnumerator},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"actionSound","t":4,"rt":$n[1].AudioClip,"sn":"actionSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"layer","t":4,"rt":$n[1].LayerMask,"sn":"layer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startSound","t":4,"rt":$n[1].AudioClip,"sn":"startSound"}]}; }, $n);
    /*BombController end.*/

    /*BulletController start.*/
    $m("BulletController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LifeTime","t":8,"sn":"LifeTime","rt":$n[2].IEnumerator},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ReturnToPool","t":8,"sn":"ReturnToPool","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"controller","t":4,"rt":ShootController,"sn":"controller"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hit","t":4,"rt":$n[0].Boolean,"sn":"hit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitMonsterSound","t":4,"rt":$n[1].AudioClip,"sn":"hitMonsterSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitSound","t":4,"rt":$n[1].AudioClip,"sn":"hitSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lifeTime","t":4,"rt":$n[0].Single,"sn":"lifeTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(UnityEngine.GameObject),"sn":"pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BulletController end.*/

    /*KunaiController start.*/
    $m("KunaiController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LifeTime","t":8,"sn":"LifeTime","rt":$n[2].IEnumerator},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ReturnToPool","t":8,"sn":"ReturnToPool","rt":$n[0].Void},{"a":1,"n":"Rotate","t":8,"sn":"Rotate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"controller","t":4,"rt":ShootController,"sn":"controller"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hit","t":4,"rt":$n[0].Boolean,"sn":"hit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitMonsterSound","t":4,"rt":$n[1].AudioClip,"sn":"hitMonsterSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitSound","t":4,"rt":$n[1].AudioClip,"sn":"hitSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lifeTime","t":4,"rt":$n[0].Single,"sn":"lifeTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pool","t":4,"rt":$n[3].Queue$1(UnityEngine.GameObject),"sn":"pool"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotateSpeed","t":4,"rt":$n[0].Single,"sn":"rotateSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*KunaiController end.*/

    /*LandmineController start.*/
    $m("LandmineController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Boom","t":8,"sn":"Boom","rt":$n[0].Void},{"a":1,"n":"Damage","t":8,"sn":"Damage","rt":$n[0].Void},{"a":1,"n":"DestroyBomb","t":8,"sn":"DestroyBomb","rt":$n[2].IEnumerator},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"collision","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"actionSound","t":4,"rt":$n[1].AudioClip,"sn":"actionSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boomVFX","t":4,"rt":$n[1].GameObject,"sn":"boomVFX"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[0].Int32,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"layer","t":4,"rt":$n[1].LayerMask,"sn":"layer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LandmineController end.*/

    /*SmokeController start.*/
    $m("SmokeController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CountDown","t":8,"sn":"CountDown","rt":$n[2].IEnumerator},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"actionSound","t":4,"rt":$n[1].AudioClip,"sn":"actionSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boomSound","t":4,"rt":$n[1].AudioClip,"sn":"boomSound"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startSound","t":4,"rt":$n[1].AudioClip,"sn":"startSound"}]}; }, $n);
    /*SmokeController end.*/

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

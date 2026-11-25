/**
 * @version 1.0.9825.24608
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CameraFit start.*/
    Bridge.define("CameraFit", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cam: null,
            background: null,
            floorY: 0,
            bgFloorOffset: 0,
            bgHalfHeight: 0,
            bgHalfWidth: 0,
            halfWidthNeeded: 0,
            minOrtho: 0,
            floorFracPortrait: 0,
            floorFracLandscape: 0,
            lastW: 0,
            lastH: 0
        },
        ctors: {
            init: function () {
                this.floorY = -2.6;
                this.bgFloorOffset = 2.6;
                this.bgHalfHeight = 5.76;
                this.bgHalfWidth = 10.24;
                this.halfWidthNeeded = 4.9;
                this.minOrtho = 4.6;
                this.floorFracPortrait = 0.4;
                this.floorFracLandscape = 0.47;
            }
        },
        methods: {
            /*CameraFit.OnEnable start.*/
            OnEnable: function () {
                this.lastW = 0.0;
                this.Apply();
            },
            /*CameraFit.OnEnable end.*/

            /*CameraFit.Update start.*/
            Update: function () {
                if (UnityEngine.Component.op_Inequality(this.cam, null) && (this.cam.pixelWidth !== this.lastW || this.cam.pixelHeight !== this.lastH)) {
                    this.Apply();
                }
            },
            /*CameraFit.Update end.*/

            /*CameraFit.OnPreCull start.*/
            OnPreCull: function () {
                if (UnityEngine.Component.op_Inequality(this.cam, null) && (this.cam.pixelWidth !== this.lastW || this.cam.pixelHeight !== this.lastH)) {
                    this.Apply();
                }
            },
            /*CameraFit.OnPreCull end.*/

            /*CameraFit.Apply start.*/
            Apply: function () {
                if (UnityEngine.Component.op_Equality(this.cam, null)) {
                    return;
                }
                var w = this.cam.pixelWidth;
                var h = this.cam.pixelHeight;
                if (w <= 0.0 || h <= 0.0) {
                    return;
                }
                this.lastW = w;
                this.lastH = h;
                var aspect = w / h;
                if (isNaN(aspect) || (Math.abs(aspect) === Number.POSITIVE_INFINITY) || aspect <= 0.0) {
                    return;
                }

                var o = UnityEngine.Mathf.Max(this.minOrtho, this.halfWidthNeeded / aspect);
                var frac = aspect < 1.0 ? this.floorFracPortrait : this.floorFracLandscape;
                var cy = this.floorY + o * (1.0 - 2.0 * frac);
                this.cam.orthographic = true;
                this.cam.orthographicSize = o;
                this.cam.transform.position = new pc.Vec3( 0.0, cy, -10.0 );

                if (UnityEngine.Component.op_Inequality(this.background, null)) {
                    var top = cy + o;
                    var halfW = o * aspect;
                    var s = UnityEngine.Mathf.Max(1.0, (top - this.floorY) / (this.bgHalfHeight + this.bgFloorOffset));
                    s = UnityEngine.Mathf.Max(s, halfW / this.bgHalfWidth);
                    if (isNaN(s) || (Math.abs(s) === Number.POSITIVE_INFINITY)) {
                        return;
                    }
                    this.background.transform.localScale = new pc.Vec3( s, s, 1.0 );
                    this.background.transform.position = new pc.Vec3( 0.0, this.floorY + this.bgFloorOffset * s, 0.0 );
                }
            },
            /*CameraFit.Apply end.*/


        }
    });
    /*CameraFit end.*/

    /*GameFlow start.*/
    Bridge.define("GameFlow", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                VOLLEYS: 0,
                HAND_MOVE: 0,
                HAND_PRESS: 0,
                HAND_WAIT: 0
            },
            ctors: {
                init: function () {
                    this.VOLLEYS = 3;
                    this.HAND_MOVE = 0.35;
                    this.HAND_PRESS = 0.3;
                    this.HAND_WAIT = 0.35;
                }
            }
        },
        fields: {
            monsterHP: 0,
            monsterWalkTime: 0,
            dmgFreddyCherry: 0,
            dmgFreddyAK: 0,
            dmgFreddyStick: 0,
            dmgSonicCherry: 0,
            dmgSonicAK: 0,
            dmgSonicStick: 0,
            dmgDeerCherry: 0,
            dmgDeerAK: 0,
            dmgDeerStick: 0,
            backgroundSprite: null,
            luna: null,
            cam: null,
            world: null,
            background: null,
            rumiBody: null,
            rumiArm: null,
            weaponInHand: null,
            muzzle: null,
            weaponSprites: null,
            monsters: null,
            monsterStopDistance: 0,
            cherryProjectile: null,
            bullets: null,
            stars: null,
            explosion: null,
            muzzleFlash: null,
            fireworks: null,
            choicePanel: null,
            titleText: null,
            titleBar: null,
            slotIcons: null,
            slotButtons: null,
            monsterIcons: null,
            hand: null,
            bigText: null,
            effectText: null,
            damageTexts: null,
            popup: null,
            popupTitle: null,
            popupButton: null,
            popupButtonLabel: null,
            endCatcher: null,
            sfx: null,
            clickClip: null,
            equipClip: null,
            akClip: null,
            boomClip: null,
            hitClip: null,
            starClip: null,
            winClip: null,
            failClip: null,
            state: 0,
            monsterIdx: 0,
            started: false,
            ended: false,
            isWin: false,
            killStarted: false,
            dmgTextIdx: 0,
            handT: 0,
            worldBase: null,
            rumiBase: null,
            rumiParts: null,
            rumiColors: null,
            shotIndex: 0,
            shotTotal: 0,
            dmgTotal: 0,
            w005: null,
            w011: null,
            w015: null,
            w02: null,
            w03: null,
            w04: null,
            w08: null
        },
        ctors: {
            init: function () {
                this.worldBase = new UnityEngine.Vector3();
                this.rumiBase = new UnityEngine.Vector3();
                this.monsterHP = 100;
                this.monsterWalkTime = 3.2;
                this.dmgFreddyCherry = 100;
                this.dmgFreddyAK = 30;
                this.dmgFreddyStick = 45;
                this.dmgSonicCherry = 40;
                this.dmgSonicAK = 100;
                this.dmgSonicStick = 25;
                this.dmgDeerCherry = 35;
                this.dmgDeerAK = 45;
                this.dmgDeerStick = 100;
                this.monsterStopDistance = 1.7;
                this.monsterIdx = -1;
            }
        },
        methods: {
            /*GameFlow.Awake start.*/
            Awake: function () {
                this.w005 = new UnityEngine.WaitForSeconds(0.05);
                this.w011 = new UnityEngine.WaitForSeconds(0.11);
                this.w015 = new UnityEngine.WaitForSeconds(0.15);
                this.w02 = new UnityEngine.WaitForSeconds(0.2);
                this.w03 = new UnityEngine.WaitForSeconds(0.3);
                this.w04 = new UnityEngine.WaitForSeconds(0.4);
                this.w08 = new UnityEngine.WaitForSeconds(0.8);
                this.worldBase = this.world.localPosition.$clone();
                this.rumiBase = this.rumiBody.localPosition.$clone();
                this.rumiParts = this.rumiBody.GetComponentsInChildren$1(UnityEngine.SpriteRenderer, true);
                this.rumiColors = System.Array.init(this.rumiParts.length, function (){
                    return new UnityEngine.Color();
                }, UnityEngine.Color);
                for (var i = 0; i < this.rumiParts.length; i = (i + 1) | 0) {
                    this.rumiColors[i] = this.rumiParts[i].color.$clone();
                }

                this.ApplyBackground();

                for (var i1 = 0; i1 < this.slotButtons.length; i1 = (i1 + 1) | 0) {
                    var idx = { v : i1 };
                    this.slotButtons[i1].onClick.AddListener((function ($me, idx) {
                        return Bridge.fn.bind($me, function () {
                            this.OnSlot(idx.v);
                        });
                    })(this, idx));
                }
                this.popupButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnPopupButton));
                this.endCatcher.onClick.AddListener(Bridge.fn.cacheBind(this, this.Cta));
            },
            /*GameFlow.Awake end.*/

            /*GameFlow.ApplyBackground start.*/
            ApplyBackground: function () {
                var tex = UnityEngine.MonoBehaviour.op_Inequality(this.luna, null) ? this.luna.backgroundTexture : null;
                if (tex == null) {
                    if (this.backgroundSprite != null) {
                        this.background.sprite = this.backgroundSprite;
                    }
                    return;
                }
                if (this.background.sprite != null && Bridge.referenceEquals(this.background.sprite.texture, tex)) {
                    return;
                } // dung BG mac dinh
                var h = tex.height;
                var w = tex.width;
                if (h <= 0.0 || w <= 0.0) {
                    return;
                }
                var ppu = h / 11.52;
                this.background.sprite = UnityEngine.Sprite.Create$1(tex, new UnityEngine.Rect.$ctor1(0.0, 0.0, w, h), new pc.Vec2( 0.5, 0.5 ), ppu);
                var fit = UnityEngine.Component.op_Inequality(this.cam, null) ? this.cam.GetComponent(CameraFit) : null;
                if (UnityEngine.MonoBehaviour.op_Inequality(fit, null)) {
                    fit.bgHalfWidth = w / ppu * 0.5;
                    fit.Apply();
                }
            },
            /*GameFlow.ApplyBackground end.*/

            /*GameFlow.Start start.*/
            Start: function () {
                for (var i = 0; i < this.monsters.length; i = (i + 1) | 0) {
                    this.monsters[i].gameObject.SetActive(false);
                }
                this.weaponInHand.gameObject.SetActive(false);
                this.cherryProjectile.gameObject.SetActive(false);
                for (var i1 = 0; i1 < this.bullets.length; i1 = (i1 + 1) | 0) {
                    this.bullets[i1].gameObject.SetActive(false);
                }
                for (var i2 = 0; i2 < this.stars.length; i2 = (i2 + 1) | 0) {
                    this.stars[i2].gameObject.SetActive(false);
                }
                this.explosion.gameObject.SetActive(false);
                this.muzzleFlash.gameObject.SetActive(false);
                this.bigText.gameObject.SetActive(false);
                this.effectText.gameObject.SetActive(false);
                for (var i3 = 0; i3 < this.damageTexts.length; i3 = (i3 + 1) | 0) {
                    this.damageTexts[i3].gameObject.SetActive(false);
                }
                this.popup.SetActive(false);
                this.endCatcher.gameObject.SetActive(false);
                this.ShowChoices(GameFlow.State.PickMonster);
            },
            /*GameFlow.Start end.*/

            /*GameFlow.Update start.*/
            Update: function () {
                var t = UnityEngine.Time.time;
                this.rumiBody.localPosition = this.rumiBase.$clone().add( new pc.Vec3( 0.0, Math.abs(Math.sin(t * 2.2)) * 0.04, 0.0 ) );
                if (this.hand.gameObject.activeSelf) {
                    this.handT += UnityEngine.Time.deltaTime;
                    this.AnimateHand();
                }
            },
            /*GameFlow.Update end.*/

            /*GameFlow.SlotPoint start.*/
            SlotPoint: function (i) {
                var p = Bridge.cast(this.slotButtons[i].transform, UnityEngine.RectTransform).anchoredPosition.$clone();
                return p.$clone().add( new pc.Vec2( 10.0, -25.0 ) ); // dau ngon tay vao giua icon
            },
            /*GameFlow.SlotPoint end.*/

            /*GameFlow.AnimateHand start.*/
            AnimateHand: function () {
                var cycle = 1.0;
                var n = this.slotButtons.length;
                var step = Bridge.Int.clip32(this.handT / cycle);
                var cur = step % n;
                var prev = (((((cur + n) | 0) - 1) | 0)) % n;
                var local = this.handT - step * cycle;

                for (var i = 0; i < n; i = (i + 1) | 0) {
                    this.slotButtons[i].transform.localScale = new pc.Vec3( 1, 1, 1 );
                }

                var handScale = 1.0;
                var pos = new UnityEngine.Vector2();
                if (step === 0 && local < GameFlow.HAND_MOVE) {
                    // lan dau: tay bay vao tu goc duoi phai
                    var k = local / GameFlow.HAND_MOVE;
                    k = k * k * (3.0 - 2.0 * k);
                    pos = new pc.Vec2().lerp( this.SlotPoint(cur).add( new pc.Vec2( 260.0, -220.0 ) ), this.SlotPoint(cur), k );
                } else if (local < GameFlow.HAND_MOVE) {
                    var k1 = local / GameFlow.HAND_MOVE;
                    k1 = k1 * k1 * (3.0 - 2.0 * k1);
                    pos = new pc.Vec2().lerp( this.SlotPoint(prev), this.SlotPoint(cur), k1 );
                } else if (local < 0.65) {
                    var press = Math.sin((local - GameFlow.HAND_MOVE) / GameFlow.HAND_PRESS * UnityEngine.Mathf.PI);
                    pos = this.SlotPoint(cur).add( new pc.Vec2( 0.0, -12.0 * press ) );
                    handScale = 1.0 - 0.15 * press;
                    var s = 1.0 - 0.08 * press;
                    this.slotButtons[cur].transform.localScale = new pc.Vec3( s, s, 1.0 );
                } else {
                    pos = this.SlotPoint(cur);
                }
                this.hand.anchoredPosition = pos.$clone();
                this.hand.localScale = new pc.Vec3( handScale, handScale, 1.0 );
            },
            /*GameFlow.AnimateHand end.*/

            /*GameFlow.HideHand start.*/
            HideHand: function () {
                this.hand.gameObject.SetActive(false);
                for (var i = 0; i < this.slotButtons.length; i = (i + 1) | 0) {
                    this.slotButtons[i].transform.localScale = new pc.Vec3( 1, 1, 1 );
                }
            },
            /*GameFlow.HideHand end.*/

            /*GameFlow.ShowChoices start.*/
            ShowChoices: function (s) {
                this.state = s;
                var monstersMode = s === GameFlow.State.PickMonster;
                this.titleText.text = monstersMode ? "CHOOSE A MONSTER!" : (s === GameFlow.State.PickAfterReplay ? "TRY ANOTHER WEAPON!" : "CHOOSE A WEAPON!");
                for (var i = 0; i < this.slotIcons.length; i = (i + 1) | 0) {
                    this.slotIcons[i].sprite = monstersMode ? this.monsterIcons[i] : this.weaponSprites[i];
                    this.slotButtons[i].interactable = true;
                }
                this.SetTitleVisible(true);
                this.choicePanel.SetActive(true);
                this.StartCoroutine$1(this.PopIn(this.choicePanel.transform));
                this.hand.gameObject.SetActive(true);
                this.hand.SetAsLastSibling();
                this.handT = 0.0;
                this.AnimateHand();
            },
            /*GameFlow.ShowChoices end.*/

            /*GameFlow.OnSlot start.*/
            OnSlot: function (i) {
                if (this.ended) {
                    this.Cta();
                    return;
                }
                this.FirstInput();
                this.Play(this.clickClip);
                if (this.state === GameFlow.State.PickMonster) {
                    this.monsterIdx = i;
                    this.HideChoices();
                    this.StartCoroutine$1(this.SpawnMonster());
                } else if (this.state === GameFlow.State.PickWeapon) {
                    // giu tab chon sung, chi an chi dan; state Attacking chan bam lai
                    this.HideHand();
                    this.SetTitleVisible(false); // tat tam text "CHOOSE A WEAPON!"
                    this.state = GameFlow.State.Attacking;
                    this.StartCoroutine$1(this.Attack(i));
                } else if (this.state === GameFlow.State.PickAfterReplay) {
                    this.EndGame();
                    this.Cta();
                }
            },
            /*GameFlow.OnSlot end.*/

            /*GameFlow.HideChoices start.*/
            HideChoices: function () {
                this.choicePanel.SetActive(false);
                this.HideHand();
                this.state = GameFlow.State.Attacking;
            },
            /*GameFlow.HideChoices end.*/

            /*GameFlow.OnPopupButton start.*/
            OnPopupButton: function () {
                this.Play(this.clickClip);
                if (this.isWin) {
                    this.Cta();
                } else if (UnityEngine.MonoBehaviour.op_Inequality(this.luna, null) && this.luna.ctaOnRetry) {
                    this.Cta();
                } else {
                    this.popup.SetActive(false);
                    this.bigText.gameObject.SetActive(false);
                    this.ShowChoices(GameFlow.State.PickAfterReplay);
                }
            },
            /*GameFlow.OnPopupButton end.*/

            /*GameFlow.SetTitleVisible start.*/
            SetTitleVisible: function (v) {
                this.titleText.gameObject.SetActive(v);
                if (UnityEngine.GameObject.op_Inequality(this.titleBar, null)) {
                    this.titleBar.SetActive(v);
                }
            },
            /*GameFlow.SetTitleVisible end.*/

            /*GameFlow.FirstInput start.*/
            FirstInput: function () {
                if (this.started) {
                    return;
                }
                this.started = true;
                Luna.Unity.LifeCycle.GameStarted();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.luna, null)) {
                    this.luna.OnFirstInput();
                }
            },
            /*GameFlow.FirstInput end.*/

            /*GameFlow.EndGame start.*/
            EndGame: function () {
                if (this.ended) {
                    return;
                }
                this.ended = true;
                this.state = GameFlow.State.Ended;
                Luna.Unity.LifeCycle.GameEnded();
                UnityEngine.Debug.Log$1("[KSBP] GameEnded");
            },
            /*GameFlow.EndGame end.*/

            /*GameFlow.Cta start.*/
            Cta: function () {
                this.EndGame();
                UnityEngine.Debug.Log$1("[KSBP] InstallFullGame");
                Luna.Unity.Playable.InstallFullGame();
            },
            /*GameFlow.Cta end.*/

            /*GameFlow.Play start.*/
            Play: function (c) {
                if (c != null && UnityEngine.Component.op_Inequality(this.sfx, null)) {
                    this.sfx.PlayOneShot(c);
                }
            },
            /*GameFlow.Play end.*/

            /*GameFlow.SpawnMonster start.*/
            SpawnMonster: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    m,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    m = this.monsters[this.monsterIdx];
                                        m.Init(this.monsterHP);
                                        $enumerator.current = this.StartCoroutine$1(m.Spawn());
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Play(this.hitClip);
                                        this.StartCoroutine$1(this.Shake(0.2, 0.15));
                                        $enumerator.current = this.w04;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.ShowChoices(GameFlow.State.PickWeapon);

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
            /*GameFlow.SpawnMonster end.*/

            /*GameFlow.GetDamage start.*/
            GetDamage: function (m, w) {
                if (m === 0) {
                    return w === 0 ? this.dmgFreddyCherry : (w === 1 ? this.dmgFreddyAK : this.dmgFreddyStick);
                }
                if (m === 1) {
                    return w === 0 ? this.dmgSonicCherry : (w === 1 ? this.dmgSonicAK : this.dmgSonicStick);
                }
                return w === 0 ? this.dmgDeerCherry : (w === 1 ? this.dmgDeerAK : this.dmgDeerStick);
            },
            /*GameFlow.GetDamage end.*/

            /*GameFlow.NextShotDamage start.*/
            NextShotDamage: function () {
                // Luna: chi dung so hoc int (tranh Mathf.RoundToInt tra ve float khi qua Bridge)
                var a = (Bridge.Int.div((((Bridge.Int.mul(Bridge.Int.mul(this.dmgTotal, this.shotIndex), 2) + this.shotTotal) | 0)), (Bridge.Int.mul(this.shotTotal, 2)))) | 0;
                this.shotIndex = (this.shotIndex + 1) | 0;
                var b = (Bridge.Int.div((((Bridge.Int.mul(Bridge.Int.mul(this.dmgTotal, this.shotIndex), 2) + this.shotTotal) | 0)), (Bridge.Int.mul(this.shotTotal, 2)))) | 0;
                return ((b - a) | 0);
            },
            /*GameFlow.NextShotDamage end.*/

            /*GameFlow.Attack start.*/
            Attack: function (w) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    m,
                    stopX,
                    v,
                    i,
                    i1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    m = this.monsters[this.monsterIdx];
                                        this.dmgTotal = this.GetDamage(this.monsterIdx, w);
                                        this.shotTotal = Bridge.Int.mul(GameFlow.VOLLEYS, (w === 0 ? 1 : (w === 1 ? this.bullets.length : this.stars.length)));
                                        this.shotIndex = 0;
                                        this.killStarted = false;

                                        this.weaponInHand.sprite = this.weaponSprites[w];
                                        $enumerator.current = this.StartCoroutine$1(this.DropWeapon());
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.RaiseArm(w === 0 ? 150.0 : 90.0));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    // monster bat dau tien lai phia Rumi
                                        stopX = this.rumiBody.parent.position.x + this.monsterStopDistance;
                                        this.StartCoroutine$1(m.WalkTo(stopX, this.monsterWalkTime));

                                        v = 0;
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ( v < GameFlow.VOLLEYS && m.Hp > 0 ) {
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 27;
                                    continue;
                                }
                                case 4: {
                                    if (w === 0) {
                                            $step = 5;
                                            continue;
                                        } else  {
                                            $step = 9;
                                            continue;
                                        }
                                }
                                case 5: {
                                    this.weaponInHand.gameObject.SetActive(true);
                                        $enumerator.current = this.w015;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $enumerator.current = this.StartCoroutine$1(this.ThrowCherry(m, this.NextShotDamage()));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $enumerator.current = this.w015;
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    $step = 25;
                                    continue;
                                }
                                case 9: {
                                    if (w === 1) {
                                            $step = 10;
                                            continue;
                                        } else  {
                                            $step = 17;
                                            continue;
                                        }
                                }
                                case 10: {
                                    i = 0;
                                        $step = 11;
                                        continue;
                                }
                                case 11: {
                                    if ( i < this.bullets.length && m.Hp > 0 ) {
                                            $step = 12;
                                            continue;
                                        }
                                    $step = 15;
                                    continue;
                                }
                                case 12: {
                                    this.StartCoroutine$1(this.Fly(this.bullets[i], new pc.Vec3( 0.0, UnityEngine.Random.Range$1(-0.5, 0.3), 0.0 ), 0.12, 0.0, m, this.NextShotDamage()));
                                        this.Play(this.akClip);
                                        this.StartCoroutine$1(this.Flash());
                                        this.StartCoroutine$1(this.Recoil(90.0));
                                        $enumerator.current = this.w011;
                                        $step = 13;
                                        return true;
                                }
                                case 13: {
                                    $step = 14;
                                    continue;
                                }
                                case 14: {
                                    i = (i + 1) | 0;
                                    $step = 11;
                                    continue;
                                }
                                case 15: {
                                    $enumerator.current = this.w03;
                                        $step = 16;
                                        return true;
                                }
                                case 16: {
                                    $step = 24;
                                    continue;
                                }
                                case 17: {
                                    i1 = 0;
                                        $step = 18;
                                        continue;
                                }
                                case 18: {
                                    if ( i1 < this.stars.length && m.Hp > 0 ) {
                                            $step = 19;
                                            continue;
                                        }
                                    $step = 22;
                                    continue;
                                }
                                case 19: {
                                    this.StartCoroutine$1(this.Fly(this.stars[i1], new pc.Vec3( 0.0, (((i1 - 1) | 0)) * 0.35 - 0.2, 0.0 ), 0.25, 900.0, m, this.NextShotDamage()));
                                        this.Play(this.starClip);
                                        this.StartCoroutine$1(this.Recoil(90.0));
                                        $enumerator.current = this.w02;
                                        $step = 20;
                                        return true;
                                }
                                case 20: {
                                    $step = 21;
                                    continue;
                                }
                                case 21: {
                                    i1 = (i1 + 1) | 0;
                                    $step = 18;
                                    continue;
                                }
                                case 22: {
                                    $enumerator.current = this.w02;
                                        $step = 23;
                                        return true;
                                }
                                case 23: {
                                    $step = 24;
                                    continue;
                                }
                                case 24: {
                                    $step = 25;
                                    continue;
                                }
                                case 25: {
                                    $step = 26;
                                    continue;
                                }
                                case 26: {
                                    v = (v + 1) | 0;
                                    $step = 3;
                                    continue;
                                }
                                case 27: {
                                    $enumerator.current = this.w03;
                                        $step = 28;
                                        return true;
                                }
                                case 28: {
                                    // cho dan cuoi cham

                                        if (m.Hp <= 0) {
                                            $step = 29;
                                            continue;
                                        } else  {
                                            $step = 36;
                                            continue;
                                        }
                                }
                                case 29: {
                                    this.ShowEffect("SUPER EFFECTIVE!", new pc.Color( 0.35, 1.0, 0.35, 1 )); // xanh green
                                        $enumerator.current = this.StartCoroutine$1(this.RaiseArm(0.0));
                                        $step = 30;
                                        return true;
                                }
                                case 30: {
                                    this.weaponInHand.gameObject.SetActive(false);
                                    $step = 31;
                                    continue;
                                }
                                case 31: {
                                    if ( m.gameObject.activeSelf ) {
                                            $step = 32;
                                            continue;
                                        } 
                                        $step = 34;
                                        continue;
                                }
                                case 32: {
                                    $enumerator.current = null;
                                        $step = 33;
                                        return true;
                                }
                                case 33: {
                                    
                                        $step = 31;
                                        continue;
                                }
                                case 34: {
                                    this.isWin = true;
                                        $enumerator.current = this.StartCoroutine$1(this.ShowResult(true));
                                        $step = 35;
                                        return true;
                                }
                                case 35: {
                                    $step = 45;
                                    continue;
                                }
                                case 36: {
                                    this.ShowEffect("RESIST!", new pc.Color( 0.6, 0.8, 1.0, 1 ));
                                    $step = 37;
                                    continue;
                                }
                                case 37: {
                                    if ( m.IsWalking ) {
                                            $step = 38;
                                            continue;
                                        } 
                                        $step = 40;
                                        continue;
                                }
                                case 38: {
                                    $enumerator.current = null;
                                        $step = 39;
                                        return true;
                                }
                                case 39: {
                                    
                                        $step = 37;
                                        continue;
                                }
                                case 40: {
                                    this.StartCoroutine$1(m.AttackLunge());
                                        $enumerator.current = this.w03;
                                        $step = 41;
                                        return true;
                                }
                                case 41: {
                                    // dung luc cu dam cham Rumi
                                        $enumerator.current = this.StartCoroutine$1(this.RumiHurt());
                                        $step = 42;
                                        return true;
                                }
                                case 42: {
                                    $enumerator.current = this.StartCoroutine$1(this.RaiseArm(0.0));
                                        $step = 43;
                                        return true;
                                }
                                case 43: {
                                    this.weaponInHand.gameObject.SetActive(false);
                                        this.isWin = false;
                                        $enumerator.current = this.StartCoroutine$1(this.ShowResult(false));
                                        $step = 44;
                                        return true;
                                }
                                case 44: {
                                    $step = 45;
                                    continue;
                                }
                                case 45: {

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
            /*GameFlow.Attack end.*/

            /*GameFlow.Hit start.*/
            Hit: function (m, dmg, pos, big) {
                if (m.Hp <= 0) {
                    return;
                }
                var dead = m.TakeDamage(dmg);
                this.Play(this.hitClip);
                this.ShowDamage(dmg, pos);
                this.StartCoroutine$1(this.Shake(big ? 0.3 : 0.1, big ? 0.25 : 0.08));
                if (dead && !this.killStarted) {
                    this.killStarted = true;
                    this.Play(this.boomClip);
                    this.StartCoroutine$1(this.Shake(0.4, 0.35));
                    this.StartCoroutine$1(m.Die());
                }
            },
            /*GameFlow.Hit end.*/

            /*GameFlow.TargetOf start.*/
            TargetOf: function (m, offset) {
                return m.headAnchor.position.$clone().add( new pc.Vec3( 0.0, -0.9, 0.0 ) ).add( offset );
            },
            /*GameFlow.TargetOf end.*/

            /*GameFlow.DropWeapon start.*/
            DropWeapon: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    wt,
                    localBase,
                    t,
                    dur,
                    k,
                    end,
                    root,
                    s0,
                    q,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    wt = this.weaponInHand.transform;
                                        localBase = wt.localPosition.$clone();
                                        this.weaponInHand.gameObject.SetActive(true);
                                        t = 0.0;
                                        dur = 0.45;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < dur ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / dur));
                                        wt.localPosition = localBase.$clone();
                                        end = wt.position.$clone();
                                        wt.position = end.$clone().add( new pc.Vec3( 0.0, (1.0 - k * k) * 7.0, 0.0 ) ); // roi nhanh dan
                                        wt.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, (1.0 - k) * 360.0 );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    wt.localPosition = localBase.$clone();
                                        wt.localRotation = pc.Quat.IDENTITY.clone();
                                        this.Play(this.equipClip);
                                        // Rumi nhun nhe khi bat vu khi
                                        root = this.rumiBody.parent;
                                        s0 = root.localScale.$clone();
                                        t = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( t < 0.2 ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    t += UnityEngine.Time.deltaTime;
                                        q = Math.sin(Math.max(0, Math.min(1, t / 0.2)) * UnityEngine.Mathf.PI) * 0.08;
                                        root.localScale = new pc.Vec3( s0.x * (1.0 + q), s0.y * (1.0 - q), s0.z );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    root.localScale = s0.$clone();

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
            /*GameFlow.DropWeapon end.*/

            /*GameFlow.RaiseArm start.*/
            RaiseArm: function (angle) {
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
                                    from = this.rumiArm.localEulerAngles.z;
                                        if (from > 180.0) {
                                            from -= 360.0;
                                        }
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.15 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        this.rumiArm.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, pc.math.lerp(from, angle, Math.max(0, Math.min(1, t / 0.15))) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.rumiArm.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, angle );

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
            /*GameFlow.RaiseArm end.*/

            /*GameFlow.ThrowCherry start.*/
            ThrowCherry: function (m, dmg) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    start,
                    p,
                    t,
                    dur,
                    target,
                    k,
                    pos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // vung tay nem
                                        this.rumiArm.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, 170.0 );
                                        $enumerator.current = this.w005;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.rumiArm.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, 70.0 );
                                        start = this.muzzle.position.$clone();
                                        this.weaponInHand.gameObject.SetActive(false);
                                        p = this.cherryProjectile;
                                        p.gameObject.SetActive(true);
                                        t = 0.0;
                                        dur = 0.5;
                                        target = this.TargetOf(m, pc.Vec3.ZERO.clone());
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( t < dur ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / dur));
                                        if (m.Hp > 0) {
                                            target = this.TargetOf(m, pc.Vec3.ZERO.clone());
                                        }
                                        pos = new pc.Vec3().lerp( start, target, k );
                                        pos.y += Math.sin(k * UnityEngine.Mathf.PI) * 2.2;
                                        p.transform.position = pos.$clone();
                                        p.transform.Rotate(0.0, 0.0, -720.0 * UnityEngine.Time.deltaTime);
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {
                                    p.gameObject.SetActive(false);
                                        this.Play(this.boomClip);
                                        this.StartCoroutine$1(this.Explode(target));
                                        this.Hit(m, dmg, target, true);
                                        this.rumiArm.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, 150.0 );

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
            /*GameFlow.ThrowCherry end.*/

            /*GameFlow.Explode start.*/
            Explode: function (pos) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    e,
                    t,
                    k,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    e = this.explosion;
                                        e.transform.position = pos.$clone();
                                        e.gameObject.SetActive(true);
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.35 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.35));
                                        e.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( pc.math.lerp(0.5, 3.5, k) );
                                        e.color = new pc.Color( 1.0, pc.math.lerp(0.9, 0.4, k), 0.1, 1.0 - k );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    e.gameObject.SetActive(false);

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
            /*GameFlow.Explode end.*/

            /*GameFlow.Fly start.*/
            Fly: function (p, offset, dur, spinSpeed, m, dmg) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    from,
                    to,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    from = this.muzzle.position.$clone();
                                        p.gameObject.SetActive(true);
                                        p.transform.position = from.$clone();
                                        p.transform.rotation = pc.Quat.IDENTITY.clone();
                                        to = this.TargetOf(m, offset);
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < dur ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        if (m.Hp > 0) {
                                            to = this.TargetOf(m, offset);
                                        }
                                        p.transform.position = new pc.Vec3().lerp( from, to, Math.max(0, Math.min(1, t / dur)) );
                                        if (spinSpeed !== 0.0) {
                                            p.transform.Rotate(0.0, 0.0, spinSpeed * UnityEngine.Time.deltaTime);
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
                                    p.gameObject.SetActive(false);
                                        this.Hit(m, dmg, to, false);

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
            /*GameFlow.Fly end.*/

            /*GameFlow.Flash start.*/
            Flash: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.muzzleFlash.gameObject.SetActive(true);
                                        this.muzzleFlash.transform.position = this.muzzle.position.$clone();
                                        $enumerator.current = this.w005;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.muzzleFlash.gameObject.SetActive(false);

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
            /*GameFlow.Flash end.*/

            /*GameFlow.Recoil start.*/
            Recoil: function (baseAngle) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.rumiArm.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, baseAngle + 8.0 );
                                        $enumerator.current = this.w005;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.rumiArm.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, baseAngle );

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
            /*GameFlow.Recoil end.*/

            /*GameFlow.RumiHurt start.*/
            RumiHurt: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    root,
                    basePos,
                    t,
                    k,
                    s,
                    c,
                    $t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.Play(this.hitClip);
                                        this.StartCoroutine$1(this.Shake(0.35, 0.3));
                                        root = this.rumiBody.parent;
                                        basePos = root.localPosition.$clone();
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.5 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.5));
                                        s = Math.sin(k * UnityEngine.Mathf.PI);
                                        c = pc.Color.lerp( new pc.Color( 1.0, 0.3, 0.3, 1.0 ), new pc.Color( 1, 1, 1, 1 ), k );
                                        for (var i = 0; i < this.rumiParts.length; i = (i + 1) | 0) {
                                            this.rumiParts[i].color = ($t = this.rumiColors[i], new pc.Color( c.r * $t.r, c.g * $t.g, c.b * $t.b, c.a * $t.a ));
                                        }
                                        root.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, s * 14.0 ); // nga ve sau
                                        root.localPosition = basePos.$clone().add( new pc.Vec3( -s * 0.5, 0.0, 0.0 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    for (var i1 = 0; i1 < this.rumiParts.length; i1 = (i1 + 1) | 0) {
                                            this.rumiParts[i1].color = this.rumiColors[i1].$clone();
                                        }
                                        root.localRotation = pc.Quat.IDENTITY.clone();
                                        root.localPosition = basePos.$clone();

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
            /*GameFlow.RumiHurt end.*/

            /*GameFlow.Shake start.*/
            Shake: function (dur, amp) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    a,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < dur ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        a = amp * (1.0 - t / dur);
                                        this.world.localPosition = this.worldBase.$clone().add( new pc.Vec3( UnityEngine.Random.Range$1(-a, a), UnityEngine.Random.Range$1(-a, a), 0.0 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.world.localPosition = this.worldBase.$clone();

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
            /*GameFlow.Shake end.*/

            /*GameFlow.ShowDamage start.*/
            ShowDamage: function (dmg, worldPos) {
                var tx = this.damageTexts[this.dmgTextIdx];
                this.dmgTextIdx = (((this.dmgTextIdx + 1) | 0)) % this.damageTexts.length;
                tx.text = "-" + dmg;
                this.StartCoroutine$1(this.FloatText(tx, this.cam.WorldToScreenPoint(worldPos.$clone().add( new pc.Vec3( UnityEngine.Random.Range$1(-0.3, 0.3), 0.5, 0.0 ) ))));
            },
            /*GameFlow.ShowDamage end.*/

            /*GameFlow.FloatText start.*/
            FloatText: function (tx, screenPos) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rt,
                    t,
                    k,
                    c,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    tx.gameObject.SetActive(true);
                                        rt = tx.rectTransform;
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.7 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.7));
                                        rt.position = screenPos.$clone().add( new pc.Vec3( 0.0, k * UnityEngine.Screen.height * 0.08, 0.0 ) );
                                        rt.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( (k < 0.15 ? pc.math.lerp(0.5, 1.3, k / 0.15) : 1.0) );
                                        c = tx.color.$clone();
                                        c.a = 1.0 - Math.max(0, Math.min(1, (k - 0.6) / 0.4));
                                        tx.color = c.$clone();
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    tx.gameObject.SetActive(false);

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
            /*GameFlow.FloatText end.*/

            /*GameFlow.ShowEffect start.*/
            ShowEffect: function (s, c) {
                this.effectText.text = s;
                this.effectText.color = c.$clone();
                this.effectText.gameObject.SetActive(true);
                this.StartCoroutine$1(this.EffectRoutine());
            },
            /*GameFlow.ShowEffect end.*/

            /*GameFlow.EffectRoutine start.*/
            EffectRoutine: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.StartCoroutine$1(this.PopIn(this.effectText.transform));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.w08;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.effectText.gameObject.SetActive(false);

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
            /*GameFlow.EffectRoutine end.*/

            /*GameFlow.ShowResult start.*/
            ShowResult: function (win) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.bigText.text = win ? "YOU WIN!" : "FAIL!";
                                        this.bigText.color = win ? new pc.Color( 0.35, 1.0, 0.35, 1 ) : new pc.Color( 1.0, 0.3, 0.3, 1 ); // win: xanh green
                                        this.bigText.gameObject.SetActive(true);
                                        this.Play(win ? this.winClip : this.failClip);
                                        if (win) {
                                            this.StartCoroutine$1(this.FireworksRoutine());
                                        }
                                        $enumerator.current = this.StartCoroutine$1(this.PopIn(this.bigText.transform));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.w04;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if (win) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 3: {
                                    $enumerator.current = this.w08;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $enumerator.current = this.w04;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    // de phao hoa no truoc khi popup phu mo
                                        this.popupTitle.text = win ? "MONSTER DEFEATED!" : "THE MONSTER SURVIVED!";
                                        this.popupButtonLabel.text = win ? "NEXT BATTLE" : "REPLAY";
                                        this.popupButton.image.color = win ? new pc.Color( 0.3, 0.8, 0.3, 1 ) : new pc.Color( 1.0, 0.6, 0.15, 1 );
                                        this.popup.SetActive(true);
                                        if (win) {
                                            this.EndGame();
                                            this.endCatcher.gameObject.SetActive(true);
                                        }
                                        this.state = GameFlow.State.Result;
                                        $enumerator.current = this.StartCoroutine$1(this.PopIn(this.popup.transform));
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this.StartCoroutine$1(this.Pulse(this.popupButton.transform));

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
            /*GameFlow.ShowResult end.*/

            /*GameFlow.FireworksRoutine start.*/
            FireworksRoutine: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    round,
                    i,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.fireworks == null || this.fireworks.length === 0) {
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
                                    round = 0;
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ( round < 3 ) {
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 12;
                                    continue;
                                }
                                case 4: {
                                    i = 0;
                                        $step = 5;
                                        continue;
                                }
                                case 5: {
                                    if ( i < this.fireworks.length ) {
                                            $step = 6;
                                            continue;
                                        }
                                    $step = 9;
                                    continue;
                                }
                                case 6: {
                                    if (UnityEngine.Component.op_Equality(this.fireworks[i], null)) {
                                            $step = 8;
                                            continue;
                                        }
                                        this.fireworks[i].Play();
                                        $enumerator.current = this.w02;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    i = (i + 1) | 0;
                                    $step = 5;
                                    continue;
                                }
                                case 9: {
                                    $enumerator.current = this.w04;
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    round = (round + 1) | 0;
                                    $step = 3;
                                    continue;
                                }
                                case 12: {

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
            /*GameFlow.FireworksRoutine end.*/

            /*GameFlow.PopIn start.*/
            PopIn: function (tr) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    k,
                    s,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.25 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.25));
                                        s = k < 0.7 ? pc.math.lerp(0.3, 1.15, k / 0.7) : pc.math.lerp(1.15, 1.0, (k - 0.7) / 0.3);
                                        tr.localScale = new pc.Vec3( s, s, 1.0 );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    tr.localScale = new pc.Vec3( 1, 1, 1 );

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
            /*GameFlow.PopIn end.*/

            /*GameFlow.Pulse start.*/
            Pulse: function (tr) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    s,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( tr.gameObject.activeInHierarchy ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    s = 1.0 + Math.sin(UnityEngine.Time.time * 6.0) * 0.06;
                                        tr.localScale = new pc.Vec3( s, s, 1.0 );
                                        $enumerator.current = null;
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
            /*GameFlow.Pulse end.*/


        }
    });
    /*GameFlow end.*/

    /*GameFlow+State start.*/
    Bridge.define("GameFlow.State", {
        $kind: 1006,
        statics: {
            fields: {
                PickMonster: 0,
                PickWeapon: 1,
                Attacking: 2,
                Result: 3,
                PickAfterReplay: 4,
                Ended: 5
            }
        }
    });
    /*GameFlow+State end.*/

    /*HeroRig start.*/
    Bridge.define("HeroRig", {
        fields: {
            root: null,
            body: null,
            armPivot: null,
            holder: null,
            weapon: null,
            muzzle: null,
            helmetAnchor: null,
            helmet: null,
            headWidth: 0,
            weaponPoses: null,
            helmetPoses: null,
            chestPoses: null,
            parts: null
        },
        ctors: {
            init: function () {
                this.headWidth = 1.0;
            }
        }
    });
    /*HeroRig end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LunaController start.*/
    Bridge.define("LunaController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            backgroundTexture: null,
            bgmClip: null,
            bgmVolume: 0,
            timeToCta: 0,
            clicksToCta: 0,
            ctaOnRetry: false,
            failSfxGuguGaga: null,
            failSfxBlackCat: null,
            failSfxBananaCat: null,
            winSfxGuguGaga: null,
            winSfxBlackCat: null,
            winSfxBananaCat: null,
            flow: null,
            memeFlow: null,
            bgmSource: null,
            started: false,
            fired: false,
            elapsed: 0,
            clicks: 0
        },
        props: {
            Clicks: {
                get: function () {
                    return this.clicks;
                }
            }
        },
        ctors: {
            init: function () {
                this.bgmVolume = 0.6;
                this.timeToCta = 0.0;
                this.clicksToCta = 0;
                this.ctaOnRetry = false;
            }
        },
        methods: {
            /*LunaController.GetWinSfx start.*/
            GetWinSfx: function (heroIndex) {
                if (heroIndex === 0) {
                    return this.winSfxGuguGaga;
                }
                if (heroIndex === 1) {
                    return this.winSfxBlackCat;
                }
                if (heroIndex === 2) {
                    return this.winSfxBananaCat;
                }
                return null;
            },
            /*LunaController.GetWinSfx end.*/

            /*LunaController.GetFailSfx start.*/
            GetFailSfx: function (heroIndex) {
                if (heroIndex === 0) {
                    return this.failSfxGuguGaga;
                }
                if (heroIndex === 1) {
                    return this.failSfxBlackCat;
                }
                if (heroIndex === 2) {
                    return this.failSfxBananaCat;
                }
                return null;
            },
            /*LunaController.GetFailSfx end.*/

            /*LunaController.Awake start.*/
            Awake: function () {
                if (UnityEngine.Component.op_Inequality(this.bgmSource, null)) {
                    this.bgmSource.playOnAwake = false;
                    this.bgmSource.loop = true;
                    this.bgmSource.clip = this.bgmClip;
                    this.bgmSource.volume = Math.max(0, Math.min(1, this.bgmVolume));
                }
            },
            /*LunaController.Awake end.*/

            /*LunaController.OnFirstInput start.*/
            OnFirstInput: function () {
                if (this.started) {
                    return;
                }
                this.started = true;
                if (UnityEngine.Component.op_Inequality(this.bgmSource, null) && this.bgmSource.clip != null) {
                    this.bgmSource.Play();
                }
            },
            /*LunaController.OnFirstInput end.*/

            /*LunaController.Update start.*/
            Update: function () {
                if (!this.started || this.fired) {
                    return;
                }
                this.elapsed += UnityEngine.Time.deltaTime;
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.clicks = (this.clicks + 1) | 0;
                }

                if ((this.timeToCta > 0.0 && this.elapsed >= this.timeToCta) || (this.clicksToCta > 0 && this.clicks >= this.clicksToCta)) {
                    this.fired = true;
                    UnityEngine.Debug.Log$1("[KSBP] Auto CTA (time=" + System.Single.format(this.elapsed) + ", clicks=" + this.clicks + ")");
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.flow, null)) {
                        this.flow.Cta();
                    } else {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.memeFlow, null)) {
                            this.memeFlow.Cta();
                        }
                    }
                }
            },
            /*LunaController.Update end.*/


        }
    });
    /*LunaController end.*/

    /*MemeFlow start.*/
    Bridge.define("MemeFlow", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                HAND_MOVE: 0,
                HAND_PRESS: 0,
                HAND_WAIT: 0
            },
            ctors: {
                init: function () {
                    this.HAND_MOVE = 0.35;
                    this.HAND_PRESS = 0.3;
                    this.HAND_WAIT = 0.35;
                }
            },
            methods: {
                /*MemeFlow.HidePoses:static start.*/
                HidePoses: function (poses) {
                    if (poses == null) {
                        return;
                    }
                    for (var i = 0; i < poses.length; i = (i + 1) | 0) {
                        if (UnityEngine.Component.op_Inequality(poses[i], null)) {
                            poses[i].gameObject.SetActive(false);
                        }
                    }
                },
                /*MemeFlow.HidePoses:static end.*/


            }
        },
        fields: {
            monsterHP: 0,
            monsterWalkTime: 0,
            counterWeaponDamage: 0,
            normalWeaponDamage: 0,
            counterArmorBonus: 0,
            normalArmorBonus: 0,
            counterWeapon: null,
            counterArmor: null,
            weaponWorldSize: null,
            weaponGrip: null,
            heroMeleeAdvance: 0,
            rangedAimAngle: 0,
            recoilAngle: 0,
            helmetWidthMul: 0,
            fullHelmetIndex: 0,
            fullHelmetWidthMul: 0,
            fullHelmetLift: 0,
            fixedMonsterIdx: 0,
            chestStage: false,
            chestSprites: null,
            stageTitles: null,
            winWeaponIdx: 0,
            rocketWeaponIndex: 0,
            meleeWeaponIndex: 0,
            projectileSprites: null,
            projectileWorldSize: null,
            weaponShots: null,
            weaponShotGap: null,
            projectileFlightTime: null,
            luna: null,
            backgroundSprite: null,
            cam: null,
            world: null,
            background: null,
            heroes: null,
            monsters: null,
            monsterStopDistance: 0,
            weaponSprites: null,
            weaponRotation: null,
            armorSprites: null,
            rocket: null,
            rocketExplodes: false,
            rocketSpin: 0,
            flameWeaponIndex: 0,
            flameFx: null,
            flameTime: 0,
            extraMeleeWeaponIndex: 0,
            burnFlames: null,
            burnFrames: null,
            burnPartNames: null,
            burnWorldHeight: 0,
            burnTime: 0,
            burnFps: 0,
            fistProjectile: null,
            explosion: null,
            muzzleFlash: null,
            fireworks: null,
            choicePanel: null,
            titleText: null,
            titleBar: null,
            slotIcons: null,
            slotButtons: null,
            modIcons: null,
            monsterIcons: null,
            hand: null,
            bigText: null,
            effectText: null,
            damageTexts: null,
            popup: null,
            popupTitle: null,
            popupButton: null,
            popupButtonLabel: null,
            endCatcher: null,
            sfx: null,
            clickClip: null,
            equipClip: null,
            rpgClip: null,
            boomClip: null,
            hitClip: null,
            swingClip: null,
            winClip: null,
            failClip: null,
            stage: 0,
            heroIdx: 0,
            monsterIdx: 0,
            weaponIdx: 0,
            armorIdx: 0,
            chestIdx: 0,
            started: false,
            ended: false,
            killStarted: false,
            dmgTextIdx: 0,
            shotIndex: 0,
            shotTotal: 0,
            dmgTotal: 0,
            handT: 0,
            armRestAngle: 0,
            lastWin: false,
            retried: false,
            heroStartPos: null,
            monsterStartPos: null,
            worldBase: null,
            hero: null,
            heroColors: null,
            w005: null,
            w015: null,
            w02: null,
            w03: null,
            w04: null,
            w08: null,
            burnUntil: 0,
            burning: false
        },
        ctors: {
            init: function () {
                this.heroStartPos = new UnityEngine.Vector3();
                this.monsterStartPos = new UnityEngine.Vector3();
                this.worldBase = new UnityEngine.Vector3();
                this.monsterHP = 100;
                this.monsterWalkTime = 3.2;
                this.counterWeaponDamage = 90;
                this.normalWeaponDamage = 40;
                this.counterArmorBonus = 15;
                this.normalArmorBonus = 10;
                this.counterWeapon = System.Array.init([
                    2, 
                    1, 
                    0
                ], System.Int32);
                this.counterArmor = System.Array.init([
                    2, 
                    0, 
                    1
                ], System.Int32);
                this.weaponWorldSize = System.Array.init([
                    1.4, 
                    2.4, 
                    1.9
                ], System.Single);
                this.weaponGrip = System.Array.init([
                    0.0, 
                    0.05, 
                    0.38
                ], System.Single);
                this.heroMeleeAdvance = 1.6;
                this.rangedAimAngle = 90.0;
                this.recoilAngle = 12.0;
                this.helmetWidthMul = 1.15;
                this.fullHelmetIndex = 2;
                this.fullHelmetWidthMul = 1.2;
                this.fullHelmetLift = 0.05;
                this.fixedMonsterIdx = -1;
                this.winWeaponIdx = -1;
                this.rocketWeaponIndex = 1;
                this.meleeWeaponIndex = 2;
                this.monsterStopDistance = 2.0;
                this.weaponRotation = System.Array.init([
                    0.0, 
                    0.0, 
                    -90.0
                ], System.Single);
                this.rocketExplodes = true;
                this.rocketSpin = 0.0;
                this.flameWeaponIndex = -1;
                this.flameTime = 0.5;
                this.extraMeleeWeaponIndex = -1;
                this.burnPartNames = System.Array.init([
                    "Torso", 
                    "Head", 
                    "LegL", 
                    "LegR"
                ], System.String);
                this.burnWorldHeight = 0.9;
                this.burnTime = 1.5;
                this.burnFps = 12.0;
                this.heroIdx = -1;
                this.monsterIdx = -1;
                this.weaponIdx = -1;
                this.armorIdx = -1;
                this.chestIdx = -1;
            }
        },
        methods: {
            /*MemeFlow.Awake start.*/
            Awake: function () {
                this.w005 = new UnityEngine.WaitForSeconds(0.05);
                this.w015 = new UnityEngine.WaitForSeconds(0.15);
                this.w02 = new UnityEngine.WaitForSeconds(0.2);
                this.w03 = new UnityEngine.WaitForSeconds(0.3);
                this.w04 = new UnityEngine.WaitForSeconds(0.4);
                this.w08 = new UnityEngine.WaitForSeconds(0.8);
                this.worldBase = this.world.localPosition.$clone();
                this.ApplyBackground();
                for (var i = 0; i < this.slotButtons.length; i = (i + 1) | 0) {
                    var idx = { v : i };
                    this.slotButtons[i].onClick.AddListener((function ($me, idx) {
                        return Bridge.fn.bind($me, function () {
                            this.OnSlot(idx.v);
                        });
                    })(this, idx));
                }
                this.popupButton.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnPopupButton));
                this.endCatcher.onClick.AddListener(Bridge.fn.cacheBind(this, this.Cta));
            },
            /*MemeFlow.Awake end.*/

            /*MemeFlow.ApplyBackground start.*/
            ApplyBackground: function () {
                var tex = UnityEngine.MonoBehaviour.op_Inequality(this.luna, null) ? this.luna.backgroundTexture : null;
                if (tex == null) {
                    if (this.backgroundSprite != null) {
                        this.background.sprite = this.backgroundSprite;
                    }
                    return;
                }
                if (this.background.sprite != null && Bridge.referenceEquals(this.background.sprite.texture, tex)) {
                    return;
                }
                var w = tex.width, h = tex.height;
                if (w <= 0.0 || h <= 0.0) {
                    return;
                }
                var ppu = h / 11.52;
                this.background.sprite = UnityEngine.Sprite.Create$1(tex, new UnityEngine.Rect.$ctor1(0.0, 0.0, w, h), new pc.Vec2( 0.5, 0.5 ), ppu);
                var fit = UnityEngine.Component.op_Inequality(this.cam, null) ? this.cam.GetComponent(CameraFit) : null;
                if (UnityEngine.MonoBehaviour.op_Inequality(fit, null)) {
                    fit.bgHalfWidth = w / ppu * 0.5;
                    fit.Apply();
                }
            },
            /*MemeFlow.ApplyBackground end.*/

            /*MemeFlow.Start start.*/
            Start: function () {
                for (var i = 0; i < this.heroes.length; i = (i + 1) | 0) {
                    // pose vu khi / mu dang bat san trong Editor de chinh tay -> an khi chay
                    MemeFlow.HidePoses(this.heroes[i].weaponPoses);
                    MemeFlow.HidePoses(this.heroes[i].helmetPoses);
                    MemeFlow.HidePoses(this.heroes[i].chestPoses);
                    this.heroes[i].root.gameObject.SetActive(false);
                }
                for (var i1 = 0; i1 < this.monsters.length; i1 = (i1 + 1) | 0) {
                    this.monsters[i1].gameObject.SetActive(i1 === this.fixedMonsterIdx);
                }
                if (this.fixedMonsterIdx >= 0) {
                    // Buddy: quai dung san trong map tu dau
                    this.monsterIdx = this.fixedMonsterIdx;
                    var fm = this.monsters[this.monsterIdx];
                    fm.Init(this.monsterHP);
                    this.monsterStartPos = fm.transform.position.$clone();
                }
                this.rocket.gameObject.SetActive(false);
                this.fistProjectile.gameObject.SetActive(false);
                this.explosion.gameObject.SetActive(false);
                this.muzzleFlash.gameObject.SetActive(false);
                this.bigText.gameObject.SetActive(false);
                this.effectText.gameObject.SetActive(false);
                for (var i2 = 0; i2 < this.damageTexts.length; i2 = (i2 + 1) | 0) {
                    this.damageTexts[i2].gameObject.SetActive(false);
                }
                this.popup.SetActive(false);
                this.endCatcher.gameObject.SetActive(false);
                this.ShowChoices(MemeFlow.Stage.Mod);
            },
            /*MemeFlow.Start end.*/

            /*MemeFlow.Update start.*/
            Update: function () {
                if (this.hand.gameObject.activeSelf) {
                    this.handT += UnityEngine.Time.deltaTime;
                    this.AnimateHand();
                }
            },
            /*MemeFlow.Update end.*/

            /*MemeFlow.ShowChoices start.*/
            ShowChoices: function (s) {
                this.stage = s;
                var icons = s === MemeFlow.Stage.Mod ? this.modIcons : (s === MemeFlow.Stage.Monster ? this.monsterIcons : (s === MemeFlow.Stage.Weapon ? this.weaponSprites : (s === MemeFlow.Stage.Chest ? this.chestSprites : this.armorSprites)));
                var ti = s === MemeFlow.Stage.Mod ? 0 : (s === MemeFlow.Stage.Monster ? 1 : (s === MemeFlow.Stage.Weapon ? 2 : (s === MemeFlow.Stage.Chest ? 4 : 3)));
                if (this.stageTitles != null && ti < this.stageTitles.length && !System.String.isNullOrEmpty(this.stageTitles[ti])) {
                    this.titleText.text = this.stageTitles[ti];
                } else {
                    this.titleText.text = s === MemeFlow.Stage.Mod ? "CHOOSE ONE MOD TO BATTLE" : (s === MemeFlow.Stage.Monster ? "CHOOSE ONE MONSTER" : (s === MemeFlow.Stage.Weapon ? "CHOOSE ONE WEAPON" : (s === MemeFlow.Stage.Chest ? "CHOOSE ONE CHESTPLATE" : "CHOOSE ONE ARMOR")));
                }
                for (var i = 0; i < this.slotIcons.length; i = (i + 1) | 0) {
                    this.slotIcons[i].sprite = icons[i];
                }
                this.titleText.gameObject.SetActive(true);
                if (UnityEngine.GameObject.op_Inequality(this.titleBar, null)) {
                    this.titleBar.SetActive(true);
                }
                this.choicePanel.SetActive(true);
                this.StartCoroutine$1(this.PopIn(this.choicePanel.transform));
                this.hand.gameObject.SetActive(true);
                this.hand.SetAsLastSibling();
                this.handT = 0.0;
                this.AnimateHand();
            },
            /*MemeFlow.ShowChoices end.*/

            /*MemeFlow.BusyChoices start.*/
            BusyChoices: function () {
                this.stage = MemeFlow.Stage.Busy;
                this.HideHand();
                this.titleText.gameObject.SetActive(false);
                if (UnityEngine.GameObject.op_Inequality(this.titleBar, null)) {
                    this.titleBar.SetActive(false);
                }
            },
            /*MemeFlow.BusyChoices end.*/

            /*MemeFlow.SlotPoint start.*/
            SlotPoint: function (i) {
                return Bridge.cast(this.slotButtons[i].transform, UnityEngine.RectTransform).anchoredPosition.$clone().add( new pc.Vec2( 10.0, -25.0 ) );
            },
            /*MemeFlow.SlotPoint end.*/

            /*MemeFlow.AnimateHand start.*/
            AnimateHand: function () {
                var cycle = 1.0;
                var n = this.slotButtons.length;
                var step = Bridge.Int.clip32(this.handT / cycle);
                var cur = step % n;
                var prev = (((((cur + n) | 0) - 1) | 0)) % n;
                var local = this.handT - step * cycle;
                for (var i = 0; i < n; i = (i + 1) | 0) {
                    this.slotButtons[i].transform.localScale = new pc.Vec3( 1, 1, 1 );
                }
                var hs = 1.0;
                var pos = new UnityEngine.Vector2();
                if (local < MemeFlow.HAND_MOVE) {
                    var k = local / MemeFlow.HAND_MOVE;
                    k = k * k * (3.0 - 2.0 * k);
                    var from = step === 0 ? this.SlotPoint(cur).add( new pc.Vec2( 260.0, -220.0 ) ) : this.SlotPoint(prev);
                    pos = new pc.Vec2().lerp( from, this.SlotPoint(cur), k );
                } else if (local < 0.65) {
                    var press = Math.sin((local - MemeFlow.HAND_MOVE) / MemeFlow.HAND_PRESS * UnityEngine.Mathf.PI);
                    pos = this.SlotPoint(cur).add( new pc.Vec2( 0.0, -12.0 * press ) );
                    hs = 1.0 - 0.15 * press;
                    var s = 1.0 - 0.08 * press;
                    this.slotButtons[cur].transform.localScale = new pc.Vec3( s, s, 1.0 );
                } else {
                    pos = this.SlotPoint(cur);
                }
                this.hand.anchoredPosition = pos.$clone();
                this.hand.localScale = new pc.Vec3( hs, hs, 1.0 );
            },
            /*MemeFlow.AnimateHand end.*/

            /*MemeFlow.HideHand start.*/
            HideHand: function () {
                this.hand.gameObject.SetActive(false);
                for (var i = 0; i < this.slotButtons.length; i = (i + 1) | 0) {
                    this.slotButtons[i].transform.localScale = new pc.Vec3( 1, 1, 1 );
                }
            },
            /*MemeFlow.HideHand end.*/

            /*MemeFlow.OnSlot start.*/
            OnSlot: function (i) {
                if (this.ended) {
                    this.Cta();
                    return;
                }
                if (this.stage === MemeFlow.Stage.Busy || this.stage === MemeFlow.Stage.Result) {
                    return;
                }
                this.FirstInput();
                this.Play(this.clickClip);
                var s = this.stage;
                this.BusyChoices();
                if (s === MemeFlow.Stage.Mod) {
                    this.heroIdx = i;
                    this.StartCoroutine$1(this.SpawnHero());
                } else if (s === MemeFlow.Stage.Monster) {
                    this.monsterIdx = i;
                    this.StartCoroutine$1(this.SpawnMonster());
                } else if (s === MemeFlow.Stage.Weapon) {
                    this.weaponIdx = i;
                    this.StartCoroutine$1(this.EquipWeapon());
                } else if (s === MemeFlow.Stage.Armor) {
                    this.armorIdx = i;
                    // Sau REPLAY: chon xong mon cuoi (mu) -> CTA + end luon, khong danh lai
                    if (this.retried && !this.chestStage) {
                        this.Cta();
                        return;
                    }
                    this.StartCoroutine$1(this.EquipArmorThenBattle());
                } else if (s === MemeFlow.Stage.Chest) {
                    this.chestIdx = i;
                    if (this.retried) {
                        this.Cta();
                        return;
                    }
                    this.StartCoroutine$1(this.EquipChestThenBattle());
                }
            },
            /*MemeFlow.OnSlot end.*/

            /*MemeFlow.OnPopupButton start.*/
            OnPopupButton: function () {
                this.Play(this.clickClip);
                if (this.lastWin || this.ended || (UnityEngine.MonoBehaviour.op_Inequality(this.luna, null) && this.luna.ctaOnRetry)) {
                    this.Cta();
                    return;
                }
                this.StartCoroutine$1(this.RetryRound());
            },
            /*MemeFlow.OnPopupButton end.*/

            /*MemeFlow.RetryRound start.*/
            RetryRound: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    m,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.retried = true;
                                        this.stage = MemeFlow.Stage.Busy;
                                        this.popup.SetActive(false);
                                        this.bigText.gameObject.SetActive(false);
                                        this.effectText.gameObject.SetActive(false);
                                        // mod ve cho cu
                                        this.hero.root.position = this.heroStartPos.$clone();
                                        this.hero.armPivot.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, this.armRestAngle );
                                        if (UnityEngine.Component.op_Inequality(this.hero.weapon, null)) {
                                            this.hero.weapon.gameObject.SetActive(false);
                                        }
                                        if (UnityEngine.Component.op_Inequality(this.hero.helmet, null)) {
                                            this.hero.helmet.gameObject.SetActive(false);
                                        }
                                        MemeFlow.HidePoses(this.hero.chestPoses);
                                        // monster hoi day mau, roi lai o vi tri xuat phat
                                        m = this.monsters[this.monsterIdx];
                                        m.transform.position = this.monsterStartPos.$clone();
                                        m.Init(this.monsterHP);
                                        $enumerator.current = this.StartCoroutine$1(m.Spawn());
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.w02;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.ShowChoices(MemeFlow.Stage.Weapon);

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
            /*MemeFlow.RetryRound end.*/

            /*MemeFlow.FirstInput start.*/
            FirstInput: function () {
                if (this.started) {
                    return;
                }
                this.started = true;
                Luna.Unity.LifeCycle.GameStarted();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.luna, null)) {
                    this.luna.OnFirstInput();
                }
            },
            /*MemeFlow.FirstInput end.*/

            /*MemeFlow.EndGame start.*/
            EndGame: function () {
                if (this.ended) {
                    return;
                }
                this.ended = true;
                this.stage = MemeFlow.Stage.Ended;
                Luna.Unity.LifeCycle.GameEnded();
                UnityEngine.Debug.Log$1("[KSBP Meme] GameEnded");
            },
            /*MemeFlow.EndGame end.*/

            /*MemeFlow.Cta start.*/
            Cta: function () {
                this.EndGame();
                UnityEngine.Debug.Log$1("[KSBP Meme] InstallFullGame");
                Luna.Unity.Playable.InstallFullGame();
            },
            /*MemeFlow.Cta end.*/

            /*MemeFlow.Play start.*/
            Play: function (c) {
                if (c != null && UnityEngine.Component.op_Inequality(this.sfx, null)) {
                    this.sfx.PlayOneShot(c);
                }
            },
            /*MemeFlow.Play end.*/

            /*MemeFlow.DropIn start.*/
            DropIn: function (t, endLocal, height, dur) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    tt,
                    k,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    tt = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( tt < dur ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    tt += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, tt / dur));
                                        t.localPosition = endLocal.$clone().add( new pc.Vec3( 0.0, (1.0 - k * k) * height, 0.0 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    t.localPosition = endLocal.$clone();

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
            /*MemeFlow.DropIn end.*/

            /*MemeFlow.Squash start.*/
            Squash: function (t) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    s0,
                    tt,
                    q,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    s0 = t.localScale.$clone();
                                        tt = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( tt < 0.2 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    tt += UnityEngine.Time.deltaTime;
                                        q = Math.sin(Math.max(0, Math.min(1, tt / 0.2)) * UnityEngine.Mathf.PI) * 0.12;
                                        t.localScale = new pc.Vec3( s0.x * (1.0 + q), s0.y * (1.0 - q), s0.z );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    t.localScale = s0.$clone();

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
            /*MemeFlow.Squash end.*/

            /*MemeFlow.SpawnHero start.*/
            SpawnHero: function () {
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
                                    this.hero = this.heroes[this.heroIdx];
                                        this.heroStartPos = this.hero.root.position.$clone();
                                        this.heroColors = System.Array.init(this.hero.parts.length, function (){
                                            return new UnityEngine.Color();
                                        }, UnityEngine.Color);
                                        for (var i = 0; i < this.hero.parts.length; i = (i + 1) | 0) {
                                            this.heroColors[i] = ($t = this.hero.parts)[i].color.$clone();
                                        }
                                        this.hero.weapon.gameObject.SetActive(false);
                                        this.hero.helmet.gameObject.SetActive(false);
                                        this.hero.root.gameObject.SetActive(true);
                                        $enumerator.current = this.StartCoroutine$1(this.DropIn(this.hero.body, this.hero.body.localPosition, 8.0 / Math.abs(this.hero.root.localScale.y), 0.35));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Play(this.hitClip);
                                        this.StartCoroutine$1(this.Shake(0.15, 0.12));
                                        $enumerator.current = this.StartCoroutine$1(this.Squash(this.hero.body));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.w02;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    this.ShowChoices(this.fixedMonsterIdx >= 0 ? MemeFlow.Stage.Weapon : MemeFlow.Stage.Monster);

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
            /*MemeFlow.SpawnHero end.*/

            /*MemeFlow.SpawnMonster start.*/
            SpawnMonster: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    m,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    m = this.monsters[this.monsterIdx];
                                        m.Init(this.monsterHP);
                                        this.monsterStartPos = m.transform.position.$clone();
                                        $enumerator.current = this.StartCoroutine$1(m.Spawn());
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Play(this.hitClip);
                                        this.StartCoroutine$1(this.Shake(0.2, 0.15));
                                        $enumerator.current = this.w04;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.ShowChoices(MemeFlow.Stage.Weapon);

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
            /*MemeFlow.SpawnMonster end.*/

            /*MemeFlow.SetupWeaponSprite start.*/
            SetupWeaponSprite: function (w) {
                var sr = this.hero.weapon;
                sr.sprite = this.weaponSprites[w];
                var size = sr.sprite.bounds.halfExtents.$clone().scale( 2 ).$clone();
                var len = UnityEngine.Mathf.Max(size.x, size.y);
                var lossy = Math.abs(this.hero.root.localScale.x);
                var s = this.weaponWorldSize[w] / len / lossy;
                sr.transform.localScale = new pc.Vec3( s, s, 1.0 );
                sr.transform.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, this.weaponRotation[w] );
                // dat bang cam / chuoi vu khi vao ban tay
                sr.transform.localPosition = new pc.Vec3( this.weaponWorldSize[w] / lossy * this.weaponGrip[w], 0.0, 0.0 );
                this.hero.muzzle.localPosition = new pc.Vec3( this.weaponWorldSize[w] / lossy * 0.8, 0.0, 0.0 );
            },
            /*MemeFlow.SetupWeaponSprite end.*/

            /*MemeFlow.EquipWeapon start.*/
            EquipWeapon: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    $t1,
                    mz,
                    wt,
                    basePos,
                    baseRot,
                    t,
                    k,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // Uu tien pose da setup tay trong Editor (WeaponPose_i duoi ban tay)
                                        if (this.hero.weaponPoses != null && this.weaponIdx < this.hero.weaponPoses.length && UnityEngine.Component.op_Inequality(($t = this.hero.weaponPoses)[this.weaponIdx], null)) {
                                            this.hero.weapon.gameObject.SetActive(false);
                                            this.hero.weapon = ($t1 = this.hero.weaponPoses)[this.weaponIdx];
                                            mz = this.hero.weapon.transform.Find("Muzzle");
                                            this.hero.muzzle = UnityEngine.Component.op_Inequality(mz, null) ? mz : this.hero.weapon.transform;
                                        } else {
                                            this.SetupWeaponSprite(this.weaponIdx);
                                        }
                                        wt = this.hero.weapon.transform;
                                        basePos = wt.localPosition.$clone();
                                        baseRot = wt.localRotation.$clone();
                                        this.hero.weapon.gameObject.SetActive(true);
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.45 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.45));
                                        wt.localPosition = basePos.$clone();
                                        wt.position = wt.position.$clone().add( new pc.Vec3( 0.0, (1.0 - k * k) * 7.0, 0.0 ) );
                                        wt.localRotation = baseRot.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, (1.0 - k) * 360.0 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    wt.localPosition = basePos.$clone();
                                        wt.localRotation = baseRot.$clone();
                                        this.Play(this.equipClip);
                                        $enumerator.current = this.StartCoroutine$1(this.Squash(this.hero.body));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $enumerator.current = this.w02;
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this.ShowChoices(MemeFlow.Stage.Armor);

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
            /*MemeFlow.EquipWeapon end.*/

            /*MemeFlow.EquipArmorThenBattle start.*/
            EquipArmorThenBattle: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    hm,
                    end,
                    usePose,
                    $t,
                    $t1,
                    w,
                    head,
                    worldScale,
                    ls,
                    pivotWorld,
                    s,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    hm = this.hero.helmet;
                                        end = new UnityEngine.Vector3();
                                        usePose = this.hero.helmetPoses != null && this.armorIdx < this.hero.helmetPoses.length && UnityEngine.Component.op_Inequality(($t = this.hero.helmetPoses)[this.armorIdx], null);
                                        if (usePose) {
                                            // Pose da setup tay trong Editor (HelmetPose_i): roi xuong dung vi tri/scale/xoay do
                                            hm.gameObject.SetActive(false);
                                            hm = ($t1 = this.hero.helmetPoses)[this.armorIdx];
                                            this.hero.helmet = hm;
                                            end = hm.transform.localPosition.$clone();
                                        } else {
                                            hm.sprite = this.armorSprites[this.armorIdx];
                                            w = hm.sprite.bounds.halfExtents.$clone().scale( 2 ).x;
                                            if (this.armorIdx === this.fullHelmetIndex) {
                                                // Mu linh co kinh che mat: trum kin ca dau (tam mu = tam dau)
                                                head = this.HeadWorldBounds();
                                                worldScale = head.halfExtents.$clone().scale( 2 ).x * this.fullHelmetWidthMul / w;
                                                ls = worldScale / Math.abs(this.hero.helmetAnchor.lossyScale.x);
                                                hm.transform.localScale = new pc.Vec3( ls, ls, 1.0 );
                                                pivotWorld = head.center.$clone().sub( hm.sprite.bounds.center.$clone().clone().scale( worldScale ) ).add( new pc.Vec3( 0.0, head.halfExtents.$clone().scale( 2 ).y * this.fullHelmetLift, 0.0 ) );
                                                end = this.hero.helmetAnchor.InverseTransformPoint(pivotWorld);
                                                end.z = 0.0;
                                            } else {
                                                s = this.hero.headWidth * this.helmetWidthMul / w;
                                                hm.transform.localScale = new pc.Vec3( s, s, 1.0 );
                                                // day mu (bounds.min.y) dat tai helmetAnchor
                                                end = new pc.Vec3( -hm.sprite.bounds.center.x * s, -hm.sprite.bounds.min.y * s, 0.0 );
                                            }
                                        }
                                        hm.gameObject.SetActive(true);
                                        $enumerator.current = this.StartCoroutine$1(this.DropIn(hm.transform, end, 7.0 / Math.abs(this.hero.root.localScale.y), 0.45));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.Play(this.equipClip);
                                        $enumerator.current = this.StartCoroutine$1(this.Squash(this.hero.body));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.w03;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    if (this.chestStage) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 4: {
                                    this.ShowChoices(MemeFlow.Stage.Chest);
                                        return false;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    // giu tab cuoi (armor) tren man hinh nhu scene cu; title + tay da an, bam bi chan (stage Busy)
                                        $enumerator.current = this.StartCoroutine$1(this.Battle());
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
            /*MemeFlow.EquipArmorThenBattle end.*/

            /*MemeFlow.EquipChestThenBattle start.*/
            EquipChestThenBattle: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    cp,
                    $t1,
                    end,
                    lossy,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.hero.chestPoses != null && this.chestIdx < this.hero.chestPoses.length && UnityEngine.Component.op_Inequality(($t = this.hero.chestPoses)[this.chestIdx], null)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 1: {
                                    cp = ($t1 = this.hero.chestPoses)[this.chestIdx];
                                        end = cp.transform.localPosition.$clone();
                                        cp.gameObject.SetActive(true);
                                        lossy = Math.abs(cp.transform.parent.lossyScale.y);
                                        $enumerator.current = this.StartCoroutine$1(this.DropIn(cp.transform, end, 7.0 / (lossy > 0.0001 ? lossy : 1.0), 0.45));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.Play(this.equipClip);
                                        $enumerator.current = this.StartCoroutine$1(this.Squash(this.hero.body));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    $enumerator.current = this.w03;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $enumerator.current = this.StartCoroutine$1(this.Battle());
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
            /*MemeFlow.EquipChestThenBattle end.*/

            /*MemeFlow.HeadWorldBounds start.*/
            HeadWorldBounds: function () {
                var head = this.hero.body.Find("Head");
                if (UnityEngine.Component.op_Inequality(head, null)) {
                    var sr = head.GetComponent(UnityEngine.SpriteRenderer);
                    if (UnityEngine.Component.op_Inequality(sr, null) && sr.sprite != null) {
                        return sr.bounds;
                    }
                }
                var torso = this.hero.body.Find("Torso");
                var tsr = UnityEngine.Component.op_Inequality(torso, null) ? torso.GetComponent(UnityEngine.SpriteRenderer) : null;
                if (UnityEngine.Component.op_Equality(tsr, null)) {
                    return new pc.BoundingBox( this.hero.helmetAnchor.position.$clone(), new pc.Vec3( 1, 1, 1 ).scale( 0.5 ) );
                }
                // Banana_Cat: mat meo nam o khoang 40% tu tren xuong, cao ~30% than
                var b = tsr.bounds;
                var h = b.halfExtents.$clone().scale( 2 ).y * 0.3;
                return new pc.BoundingBox( new pc.Vec3( b.center.x, b.max.y - b.halfExtents.$clone().scale( 2 ).y * 0.4, b.center.z ), new pc.Vec3( b.halfExtents.$clone().scale( 2 ).x, h, 0.1 ).scale( 0.5 ) );
            },
            /*MemeFlow.HeadWorldBounds end.*/

            /*MemeFlow.NextShotDamage start.*/
            NextShotDamage: function () {
                var a = (Bridge.Int.div((((Bridge.Int.mul(Bridge.Int.mul(this.dmgTotal, this.shotIndex), 2) + this.shotTotal) | 0)), (Bridge.Int.mul(this.shotTotal, 2)))) | 0;
                this.shotIndex = (this.shotIndex + 1) | 0;
                var b = (Bridge.Int.div((((Bridge.Int.mul(Bridge.Int.mul(this.dmgTotal, this.shotIndex), 2) + this.shotTotal) | 0)), (Bridge.Int.mul(this.shotTotal, 2)))) | 0;
                return ((b - a) | 0);
            },
            /*MemeFlow.NextShotDamage end.*/

            /*MemeFlow.PerWeapon start.*/
            PerWeapon: function (arr, def) {
                return arr != null && this.weaponIdx >= 0 && this.weaponIdx < arr.length && arr[this.weaponIdx] > 0.0 ? arr[this.weaponIdx] : def;
            },
            /*MemeFlow.PerWeapon end.*/

            /*MemeFlow.PerWeaponInt start.*/
            PerWeaponInt: function (arr, def) {
                return arr != null && this.weaponIdx >= 0 && this.weaponIdx < arr.length && arr[this.weaponIdx] > 0 ? arr[this.weaponIdx] : def;
            },
            /*MemeFlow.PerWeaponInt end.*/

            /*MemeFlow.TargetOf start.*/
            TargetOf: function (m, offset) {
                return m.headAnchor.position.$clone().add( new pc.Vec3( 0.0, -0.9, 0.0 ) ).add( offset );
            },
            /*MemeFlow.TargetOf end.*/

            /*MemeFlow.Battle start.*/
            Battle: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    m,
                    counterW,
                    counterA,
                    meetHeroX,
                    i,
                    gap,
                    i1,
                    g,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    m = this.monsters[this.monsterIdx];
                                        counterW = this.winWeaponIdx >= 0 ? this.weaponIdx === this.winWeaponIdx : this.weaponIdx === this.counterWeapon[this.monsterIdx];
                                        counterA = this.armorIdx === this.counterArmor[this.monsterIdx];
                                        this.dmgTotal = ((counterW ? this.counterWeaponDamage : this.normalWeaponDamage) + (counterA ? this.counterArmorBonus : this.normalArmorBonus)) | 0;
                                        this.shotTotal = 3;
                                        this.shotIndex = 0;
                                        this.killStarted = false;
                                        // goc nghi cua tay (user setup trong Editor) de tra ve sau tran
                                        this.armRestAngle = this.hero.armPivot.localEulerAngles.z;
                                        if (this.armRestAngle > 180.0) {
                                            this.armRestAngle -= 360.0;
                                        }

                                        if (this.weaponIdx === this.meleeWeaponIndex || this.weaponIdx === this.extraMeleeWeaponIndex) {
                                            $step = 1;
                                            continue;
                                        } else  {
                                            $step = 12;
                                            continue;
                                        }
                                }
                                case 1: {
                                    // Gay bong chay (can chien): nhan vat cung tien ve phia quai, gap nhau o giua roi vut 3 cai
                                        meetHeroX = this.hero.root.position.x + this.heroMeleeAdvance;
                                        this.StartCoroutine$1(m.WalkTo(meetHeroX + this.monsterStopDistance, this.monsterWalkTime * 0.7));
                                        $enumerator.current = this.StartCoroutine$1(this.RaiseArm(150.0));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.HeroWalkTo(meetHeroX, this.monsterWalkTime * 0.6));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    if ( m.IsWalking && m.Hp > 0 ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    i = 0;
                                        $step = 7;
                                        continue;
                                }
                                case 7: {
                                    if ( i < 3 && m.Hp > 0 ) {
                                            $step = 8;
                                            continue;
                                        }
                                    $step = 11;
                                    continue;
                                }
                                case 8: {
                                    $enumerator.current = this.StartCoroutine$1(this.Swing(m));
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    $step = 10;
                                    continue;
                                }
                                case 10: {
                                    i = (i + 1) | 0;
                                    $step = 7;
                                    continue;
                                }
                                case 11: {
                                    $step = 35;
                                    continue;
                                }
                                case 12: {
                                    this.StartCoroutine$1(m.WalkTo(this.hero.root.position.x + this.monsterStopDistance, this.monsterWalkTime));
                                        // sung: nang tay 90 do quanh tam xoay vai (goc tren-trai sprite tay) de nong chia ngang ve quai
                                        $enumerator.current = this.StartCoroutine$1(this.RaiseArm(this.rangedAimAngle));
                                        $step = 13;
                                        return true;
                                }
                                case 13: {
                                    this.shotTotal = this.PerWeaponInt(this.weaponShots, 3);
                                        gap = this.PerWeapon(this.weaponShotGap, 0.2);
                                        i1 = 0;
                                        $step = 14;
                                        continue;
                                }
                                case 14: {
                                    if ( i1 < this.shotTotal && m.Hp > 0 ) {
                                            $step = 15;
                                            continue;
                                        }
                                    $step = 34;
                                    continue;
                                }
                                case 15: {
                                    if (this.weaponIdx === this.flameWeaponIndex && UnityEngine.Component.op_Inequality(this.flameFx, null)) {
                                            $step = 16;
                                            continue;
                                        } else  {
                                            $step = 18;
                                            continue;
                                        }
                                }
                                case 16: {
                                    $enumerator.current = this.StartCoroutine$1(this.FireFlame(m));
                                        $step = 17;
                                        return true;
                                }
                                case 17: {
                                    $step = 24;
                                    continue;
                                }
                                case 18: {
                                    if (this.weaponIdx === this.rocketWeaponIndex) {
                                            $step = 19;
                                            continue;
                                        } else  {
                                            $step = 21;
                                            continue;
                                        }
                                }
                                case 19: {
                                    $enumerator.current = this.StartCoroutine$1(this.FireRocket(m));
                                        $step = 20;
                                        return true;
                                }
                                case 20: {
                                    $step = 23;
                                    continue;
                                }
                                case 21: {
                                    $enumerator.current = this.StartCoroutine$1(this.FireGlove(m));
                                        $step = 22;
                                        return true;
                                }
                                case 22: {
                                    $step = 23;
                                    continue;
                                }
                                case 23: {
                                    $step = 24;
                                    continue;
                                }
                                case 24: {
                                    if (gap === 0.2) {
                                            $step = 25;
                                            continue;
                                        } else  {
                                            $step = 27;
                                            continue;
                                        }
                                }
                                case 25: {
                                    $enumerator.current = this.w02;
                                        $step = 26;
                                        return true;
                                }
                                case 26: {
                                    $step = 32;
                                    continue;
                                }
                                case 27: {
                                    g = 0.0;
                                    $step = 28;
                                    continue;
                                }
                                case 28: {
                                    if ( g < gap ) {
                                            $step = 29;
                                            continue;
                                        } 
                                        $step = 31;
                                        continue;
                                }
                                case 29: {
                                    g += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 30;
                                        return true;
                                }
                                case 30: {
                                    
                                        $step = 28;
                                        continue;
                                }
                                case 31: {
                                    $step = 32;
                                    continue;
                                }
                                case 32: {
                                    $step = 33;
                                    continue;
                                }
                                case 33: {
                                    i1 = (i1 + 1) | 0;
                                    $step = 14;
                                    continue;
                                }
                                case 34: {
                                    $step = 35;
                                    continue;
                                }
                                case 35: {
                                    $enumerator.current = this.w03;
                                        $step = 36;
                                        return true;
                                }
                                case 36: {
                                    if (m.Hp <= 0) {
                                            $step = 37;
                                            continue;
                                        } else  {
                                            $step = 43;
                                            continue;
                                        }
                                }
                                case 37: {
                                    this.ShowEffect("SUPER EFFECTIVE!", new pc.Color( 0.35, 1.0, 0.35, 1 ));
                                        $enumerator.current = this.StartCoroutine$1(this.RaiseArm(this.armRestAngle));
                                        $step = 38;
                                        return true;
                                }
                                case 38: {
                                    if ( m.gameObject.activeSelf ) {
                                            $step = 39;
                                            continue;
                                        } 
                                        $step = 41;
                                        continue;
                                }
                                case 39: {
                                    $enumerator.current = null;
                                        $step = 40;
                                        return true;
                                }
                                case 40: {
                                    
                                        $step = 38;
                                        continue;
                                }
                                case 41: {
                                    $enumerator.current = this.StartCoroutine$1(this.ShowResult(true));
                                        $step = 42;
                                        return true;
                                }
                                case 42: {
                                    $step = 52;
                                    continue;
                                }
                                case 43: {
                                    this.ShowEffect("RESIST!", new pc.Color( 0.6, 0.8, 1.0, 1 ));
                                    $step = 44;
                                    continue;
                                }
                                case 44: {
                                    if ( m.IsWalking ) {
                                            $step = 45;
                                            continue;
                                        } 
                                        $step = 47;
                                        continue;
                                }
                                case 45: {
                                    $enumerator.current = null;
                                        $step = 46;
                                        return true;
                                }
                                case 46: {
                                    
                                        $step = 44;
                                        continue;
                                }
                                case 47: {
                                    this.StartCoroutine$1(m.AttackLunge());
                                        $enumerator.current = this.w03;
                                        $step = 48;
                                        return true;
                                }
                                case 48: {
                                    $enumerator.current = this.StartCoroutine$1(this.HeroHurt());
                                        $step = 49;
                                        return true;
                                }
                                case 49: {
                                    $enumerator.current = this.StartCoroutine$1(this.RaiseArm(this.armRestAngle));
                                        $step = 50;
                                        return true;
                                }
                                case 50: {
                                    $enumerator.current = this.StartCoroutine$1(this.ShowResult(false));
                                        $step = 51;
                                        return true;
                                }
                                case 51: {
                                    $step = 52;
                                    continue;
                                }
                                case 52: {

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
            /*MemeFlow.Battle end.*/

            /*MemeFlow.RaiseArm start.*/
            RaiseArm: function (angle) {
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
                                    from = this.hero.armPivot.localEulerAngles.z;
                                        if (from > 180.0) {
                                            from -= 360.0;
                                        }
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.15 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        this.hero.armPivot.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, pc.math.lerp(from, angle, Math.max(0, Math.min(1, t / 0.15))) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.hero.armPivot.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, angle );

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
            /*MemeFlow.RaiseArm end.*/

            /*MemeFlow.Swing start.*/
            Swing: function (m) {
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
                                    this.Play(this.swingClip);
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.12 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        this.hero.armPivot.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, pc.math.lerp(150.0, 30.0, Math.max(0, Math.min(1, t / 0.12))) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.Hit(m, this.NextShotDamage(), this.TargetOf(m, pc.Vec3.ZERO.clone()), true);
                                        $enumerator.current = this.w015;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $enumerator.current = this.StartCoroutine$1(this.RaiseArm(150.0));
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $enumerator.current = this.w015;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {

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
            /*MemeFlow.Swing end.*/

            /*MemeFlow.FireRocket start.*/
            FireRocket: function (m) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    p,
                    from,
                    to,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.Play(this.rpgClip);
                                        this.StartCoroutine$1(this.Flash());
                                        this.StartCoroutine$1(this.Recoil());
                                        p = this.rocket;
                                        from = this.hero.muzzle.position.$clone();
                                        p.gameObject.SetActive(true);
                                        p.transform.position = from.$clone();
                                        to = this.TargetOf(m, pc.Vec3.ZERO.clone());
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.3 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        if (m.Hp > 0) {
                                            to = this.TargetOf(m, pc.Vec3.ZERO.clone());
                                        }
                                        p.transform.position = new pc.Vec3().lerp( from, to, Math.max(0, Math.min(1, t / 0.3)) );
                                        if (this.rocketSpin !== 0.0) {
                                            p.transform.Rotate(0.0, 0.0, -this.rocketSpin * UnityEngine.Time.deltaTime);
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
                                    p.gameObject.SetActive(false);
                                        if (this.rocketExplodes) {
                                            this.Play(this.boomClip);
                                            this.StartCoroutine$1(this.Explode(to));
                                        }
                                        this.Hit(m, this.NextShotDamage(), to, true);

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
            /*MemeFlow.FireRocket end.*/

            /*MemeFlow.FireFlame start.*/
            FireFlame: function (m) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    ft,
                    t,
                    from,
                    dir,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.Play(this.rpgClip);
                                        ft = this.flameFx.transform;
                                        this.flameFx.Play();
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < this.flameTime ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        from = this.hero.muzzle.position.$clone();
                                        dir = this.TargetOf(m, pc.Vec3.ZERO.clone()).sub( from );
                                        dir.z = 0.0;
                                        ft.position = from.$clone();
                                        if (dir.lengthSq() > 0.0001) {
                                            ft.rotation = new pc.Quat().lookRotation( dir.clone().normalize(), new pc.Vec3( 0, 0, -1 ) );
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
                                    this.flameFx.Stop();
                                        this.StartBurn(m);
                                        this.Hit(m, this.NextShotDamage(), this.TargetOf(m, pc.Vec3.ZERO.clone()), true);

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
            /*MemeFlow.FireFlame end.*/

            /*MemeFlow.StartBurn start.*/
            StartBurn: function (m) {
                if (this.burnFlames == null || this.burnFlames.length === 0 || this.burnFrames == null || this.burnFrames.length === 0) {
                    return;
                }
                this.burnUntil = UnityEngine.Time.time + this.burnTime;
                if (this.burning) {
                    return;
                }
                this.burning = true;
                for (var i = 0; i < this.burnFlames.length; i = (i + 1) | 0) {
                    var f = this.burnFlames[i];
                    var part = m.body.Find(this.burnPartNames[i % this.burnPartNames.length]);
                    if (UnityEngine.Component.op_Equality(part, null)) {
                        part = m.body;
                    }
                    f.transform.SetParent(part, false);
                    f.transform.localPosition = pc.Vec3.ZERO.clone();
                    f.transform.localRotation = pc.Quat.IDENTITY.clone();
                    var lossy = Math.abs(part.lossyScale.y);
                    var s = this.burnWorldHeight / this.burnFrames[0].bounds.halfExtents.$clone().scale( 2 ).y / (lossy > 0.0001 ? lossy : 1.0);
                    f.transform.localScale = new pc.Vec3( s, s, 1.0 );
                    f.sprite = this.burnFrames[i % this.burnFrames.length];
                    f.color = new pc.Color( 1.0, 1.0, 1.0, 0.0 );
                    f.gameObject.SetActive(true);
                }
                this.StartCoroutine$1(this.BurnLoop());
            },
            /*MemeFlow.StartBurn end.*/

            /*MemeFlow.BurnLoop start.*/
            BurnLoop: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    frame,
                    a,
                    f,
                    c,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( UnityEngine.Time.time < this.burnUntil ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        frame = Bridge.Int.clip32(t * this.burnFps);
                                        a = Math.max(0, Math.min(1, t / 0.15)) * Math.max(0, Math.min(1, (this.burnUntil - UnityEngine.Time.time) / 0.4));
                                        for (var i = 0; i < this.burnFlames.length; i = (i + 1) | 0) {
                                            f = this.burnFlames[i];
                                            f.sprite = this.burnFrames[(((frame + i) | 0)) % this.burnFrames.length];
                                            c = f.color.$clone();
                                            c.a = a;
                                            f.color = c.$clone();
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
                                    for (var i1 = 0; i1 < this.burnFlames.length; i1 = (i1 + 1) | 0) {
                                            this.burnFlames[i1].gameObject.SetActive(false);
                                        }
                                        this.burning = false;

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
            /*MemeFlow.BurnLoop end.*/

            /*MemeFlow.FireGlove start.*/
            FireGlove: function (m) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    p,
                    ps,
                    size,
                    len,
                    par,
                    pl,
                    sc,
                    from,
                    to,
                    flight,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.Play(this.rpgClip);
                                        this.StartCoroutine$1(this.Recoil());
                                        p = this.fistProjectile;
                                        ps = this.projectileSprites != null && this.weaponIdx < this.projectileSprites.length ? this.projectileSprites[this.weaponIdx] : null;
                                        if (ps != null) {
                                            // Buddy: dan rieng tung vu khi, scale theo chieu dai mong muon
                                            p.sprite = ps;
                                            size = this.PerWeapon(this.projectileWorldSize, 0.5);
                                            len = ps.bounds.halfExtents.$clone().scale( 2 ).x > 0.0001 ? ps.bounds.halfExtents.$clone().scale( 2 ).x : 1.0;
                                            par = p.transform.parent;
                                            pl = UnityEngine.Component.op_Inequality(par, null) ? Math.abs(par.lossyScale.x) : 1.0;
                                            sc = size / len / (pl > 0.0001 ? pl : 1.0);
                                            p.transform.localScale = new pc.Vec3( sc, sc, 1.0 );
                                        }
                                        from = this.hero.muzzle.position.$clone();
                                        p.gameObject.SetActive(true);
                                        p.transform.position = from.$clone();
                                        p.transform.rotation = pc.Quat.IDENTITY.clone();
                                        to = this.TargetOf(m, pc.Vec3.ZERO.clone());
                                        flight = this.PerWeapon(this.projectileFlightTime, 0.25);
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < flight ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        if (m.Hp > 0) {
                                            to = this.TargetOf(m, pc.Vec3.ZERO.clone());
                                        }
                                        p.transform.position = new pc.Vec3().lerp( from, to, Math.max(0, Math.min(1, t / flight)) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    p.gameObject.SetActive(false);
                                        this.Hit(m, this.NextShotDamage(), to, true);

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
            /*MemeFlow.FireGlove end.*/

            /*MemeFlow.HeroWalkTo start.*/
            HeroWalkTo: function (worldX, dur) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    start,
                    p,
                    t,
                    k,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    start = this.hero.root.position.$clone();
                                        p = start.$clone();
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < dur ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / dur));
                                        p.x = pc.math.lerp(start.x, worldX, k * k * (3.0 - 2.0 * k));
                                        p.y = start.y + Math.abs(Math.sin(t * 12.0)) * 0.08;
                                        this.hero.root.position = p.$clone();
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    p.x = worldX;
                                        p.y = start.y;
                                        this.hero.root.position = p.$clone();

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
            /*MemeFlow.HeroWalkTo end.*/

            /*MemeFlow.Hit start.*/
            Hit: function (m, dmg, pos, big) {
                if (m.Hp <= 0) {
                    return;
                }
                var dead = m.TakeDamage(dmg);
                this.Play(this.hitClip);
                this.ShowDamage(dmg, pos);
                this.StartCoroutine$1(this.Shake(big ? 0.25 : 0.1, big ? 0.2 : 0.08));
                if (dead && !this.killStarted) {
                    this.killStarted = true;
                    this.Play(this.boomClip);
                    this.StartCoroutine$1(this.Shake(0.4, 0.35));
                    this.StartCoroutine$1(m.Die());
                }
            },
            /*MemeFlow.Hit end.*/

            /*MemeFlow.Explode start.*/
            Explode: function (pos) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    e,
                    t,
                    k,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    e = this.explosion;
                                        e.transform.position = pos.$clone();
                                        e.gameObject.SetActive(true);
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.35 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.35));
                                        e.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( pc.math.lerp(0.5, 3.5, k) );
                                        e.color = new pc.Color( 1.0, pc.math.lerp(0.9, 0.4, k), 0.1, 1.0 - k );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    e.gameObject.SetActive(false);

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
            /*MemeFlow.Explode end.*/

            /*MemeFlow.Flash start.*/
            Flash: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.muzzleFlash.gameObject.SetActive(true);
                                        this.muzzleFlash.transform.position = this.hero.muzzle.position.$clone();
                                        $enumerator.current = this.w005;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.muzzleFlash.gameObject.SetActive(false);

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
            /*MemeFlow.Flash end.*/

            /*MemeFlow.Recoil start.*/
            Recoil: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    wt,
                    r0,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    wt = this.hero.weapon.transform;
                                        r0 = wt.localRotation.$clone();
                                        wt.localRotation = r0.clone().mul( new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, this.recoilAngle ) );
                                        $enumerator.current = this.w005;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.w005;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    wt.localRotation = r0.$clone();

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
            /*MemeFlow.Recoil end.*/

            /*MemeFlow.HeroHurt start.*/
            HeroHurt: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    b,
                    basePos,
                    t,
                    k,
                    s,
                    c,
                    $t,
                    $t1,
                    $t2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.Play(this.hitClip);
                                        this.StartCoroutine$1(this.Shake(0.35, 0.3));
                                        b = this.hero.body;
                                        basePos = b.localPosition.$clone();
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.5 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.5));
                                        s = Math.sin(k * UnityEngine.Mathf.PI);
                                        c = pc.Color.lerp( new pc.Color( 1.0, 0.3, 0.3, 1.0 ), new pc.Color( 1, 1, 1, 1 ), k );
                                        for (var i = 0; i < this.hero.parts.length; i = (i + 1) | 0) {
                                            ($t = this.hero.parts)[i].color = ($t1 = this.heroColors[i], new pc.Color( c.r * $t1.r, c.g * $t1.g, c.b * $t1.b, c.a * $t1.a ));
                                        }
                                        b.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, s * 14.0 );
                                        b.localPosition = basePos.$clone().add( new pc.Vec3( -s * 0.5 / Math.abs(this.hero.root.localScale.x), 0.0, 0.0 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    for (var i1 = 0; i1 < this.hero.parts.length; i1 = (i1 + 1) | 0) {
                                            ($t2 = this.hero.parts)[i1].color = this.heroColors[i1].$clone();
                                        }
                                        b.localRotation = pc.Quat.IDENTITY.clone();
                                        b.localPosition = basePos.$clone();

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
            /*MemeFlow.HeroHurt end.*/

            /*MemeFlow.Shake start.*/
            Shake: function (dur, amp) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    a,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < dur ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        a = amp * (1.0 - t / dur);
                                        this.world.localPosition = this.worldBase.$clone().add( new pc.Vec3( UnityEngine.Random.Range$1(-a, a), UnityEngine.Random.Range$1(-a, a), 0.0 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.world.localPosition = this.worldBase.$clone();

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
            /*MemeFlow.Shake end.*/

            /*MemeFlow.ShowDamage start.*/
            ShowDamage: function (dmg, worldPos) {
                var tx = this.damageTexts[this.dmgTextIdx];
                this.dmgTextIdx = (((this.dmgTextIdx + 1) | 0)) % this.damageTexts.length;
                tx.text = "-" + dmg;
                this.StartCoroutine$1(this.FloatText(tx, this.cam.WorldToScreenPoint(worldPos.$clone().add( new pc.Vec3( UnityEngine.Random.Range$1(-0.3, 0.3), 0.5, 0.0 ) ))));
            },
            /*MemeFlow.ShowDamage end.*/

            /*MemeFlow.FloatText start.*/
            FloatText: function (tx, screenPos) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    rt,
                    t,
                    k,
                    c,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    tx.gameObject.SetActive(true);
                                        rt = tx.rectTransform;
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.7 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.7));
                                        rt.position = screenPos.$clone().add( new pc.Vec3( 0.0, k * UnityEngine.Screen.height * 0.08, 0.0 ) );
                                        rt.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( (k < 0.15 ? pc.math.lerp(0.5, 1.3, k / 0.15) : 1.0) );
                                        c = tx.color.$clone();
                                        c.a = 1.0 - Math.max(0, Math.min(1, (k - 0.6) / 0.4));
                                        tx.color = c.$clone();
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    tx.gameObject.SetActive(false);

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
            /*MemeFlow.FloatText end.*/

            /*MemeFlow.ShowEffect start.*/
            ShowEffect: function (s, c) {
                this.effectText.text = s;
                this.effectText.color = c.$clone();
                this.effectText.gameObject.SetActive(true);
                this.StartCoroutine$1(this.EffectRoutine());
            },
            /*MemeFlow.ShowEffect end.*/

            /*MemeFlow.EffectRoutine start.*/
            EffectRoutine: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.StartCoroutine$1(this.PopIn(this.effectText.transform));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $enumerator.current = this.w08;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    this.effectText.gameObject.SetActive(false);

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
            /*MemeFlow.EffectRoutine end.*/

            /*MemeFlow.ShowResult start.*/
            ShowResult: function (win) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    heroClip,
                    resultDelay,
                    elapsed,
                    ctaRetry,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.stage = MemeFlow.Stage.Busy;
                                        heroClip = null;
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.luna, null)) {
                                            heroClip = win ? this.luna.GetWinSfx(this.heroIdx) : this.luna.GetFailSfx(this.heroIdx);
                                        }
                                        this.Play(heroClip);

                                        // Fixed 1s pause after the hit; don't wait for the character SFX to finish.
                                        resultDelay = 1.0;
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < resultDelay ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.stage = MemeFlow.Stage.Result;
                                        this.bigText.text = win ? "YOU WIN!" : "FAIL!";
                                        this.bigText.color = win ? new pc.Color( 0.35, 1.0, 0.35, 1 ) : new pc.Color( 1.0, 0.3, 0.3, 1 );
                                        this.bigText.gameObject.SetActive(true);
                                        if (win) {
                                            this.StartCoroutine$1(this.FireworksRoutine());
                                        }
                                        this.StartCoroutine$1(this.PopIn(this.bigText.transform));
                                        this.popupTitle.text = win ? "MONSTER DEFEATED!" : "THE MONSTER SURVIVED!";
                                        this.popupButtonLabel.text = win ? "NEXT BATTLE" : "REPLAY";
                                        this.popupButton.image.color = win ? new pc.Color( 0.3, 0.8, 0.3, 1 ) : new pc.Color( 1.0, 0.6, 0.15, 1 );
                                        this.popup.SetActive(true);
                                        this.Play(win ? this.winClip : this.failClip);
                                        this.lastWin = win;
                                        ctaRetry = UnityEngine.MonoBehaviour.op_Inequality(this.luna, null) && this.luna.ctaOnRetry;
                                        if (win || ctaRetry) {
                                            // ket thuc that: bam nut / cham man hinh -> store
                                            this.EndGame();
                                            this.endCatcher.gameObject.SetActive(true);
                                        }
                                        $enumerator.current = this.StartCoroutine$1(this.PopIn(this.popup.transform));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this.StartCoroutine$1(this.Pulse(this.popupButton.transform));

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
            /*MemeFlow.ShowResult end.*/

            /*MemeFlow.FireworksRoutine start.*/
            FireworksRoutine: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    round,
                    i,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.fireworks == null) {
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
                                    round = 0;
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ( round < 3 ) {
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 12;
                                    continue;
                                }
                                case 4: {
                                    i = 0;
                                        $step = 5;
                                        continue;
                                }
                                case 5: {
                                    if ( i < this.fireworks.length ) {
                                            $step = 6;
                                            continue;
                                        }
                                    $step = 9;
                                    continue;
                                }
                                case 6: {
                                    if (UnityEngine.Component.op_Equality(this.fireworks[i], null)) {
                                            $step = 8;
                                            continue;
                                        }
                                        this.fireworks[i].Play();
                                        $enumerator.current = this.w02;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    i = (i + 1) | 0;
                                    $step = 5;
                                    continue;
                                }
                                case 9: {
                                    $enumerator.current = this.w04;
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    round = (round + 1) | 0;
                                    $step = 3;
                                    continue;
                                }
                                case 12: {

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
            /*MemeFlow.FireworksRoutine end.*/

            /*MemeFlow.PopIn start.*/
            PopIn: function (tr) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    k,
                    s,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.25 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.25));
                                        s = k < 0.7 ? pc.math.lerp(0.3, 1.15, k / 0.7) : pc.math.lerp(1.15, 1.0, (k - 0.7) / 0.3);
                                        tr.localScale = new pc.Vec3( s, s, 1.0 );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    tr.localScale = new pc.Vec3( 1, 1, 1 );

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
            /*MemeFlow.PopIn end.*/

            /*MemeFlow.Pulse start.*/
            Pulse: function (tr) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    s,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( tr.gameObject.activeInHierarchy ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    s = 1.0 + Math.sin(UnityEngine.Time.time * 6.0) * 0.06;
                                        tr.localScale = new pc.Vec3( s, s, 1.0 );
                                        $enumerator.current = null;
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
            /*MemeFlow.Pulse end.*/


        }
    });
    /*MemeFlow end.*/

    /*MemeFlow+Stage start.*/
    Bridge.define("MemeFlow.Stage", {
        $kind: 1006,
        statics: {
            fields: {
                Mod: 0,
                Monster: 1,
                Weapon: 2,
                Armor: 3,
                Busy: 4,
                Result: 5,
                Ended: 6,
                Chest: 7
            }
        }
    });
    /*MemeFlow+Stage end.*/

    /*MonsterView start.*/
    Bridge.define("MonsterView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            body: null,
            parts: null,
            hpRoot: null,
            hpFill: null,
            headAnchor: null,
            maxHp: 0,
            hp: 0,
            dead: false,
            busy: false,
            idleT: 0,
            bodyBase: null,
            vel: null,
            spin: null,
            baseColors: null,
            arms: null,
            legBase: null,
            armBase: null,
            legTop: null,
            armTop: null,
            legs: null,
            walking: false
        },
        props: {
            Hp: {
                get: function () {
                    return this.hp;
                }
            },
            IsDead: {
                get: function () {
                    return this.dead;
                }
            },
            IsWalking: {
                get: function () {
                    return this.walking;
                }
            }
        },
        ctors: {
            init: function () {
                this.bodyBase = new UnityEngine.Vector3();
                this.maxHp = 100;
                this.hp = 100;
            }
        },
        methods: {
            /*MonsterView.Awake start.*/
            Awake: function () {
                this.bodyBase = this.body.localPosition.$clone();
                this.vel = System.Array.init(this.parts.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                this.spin = System.Array.init(this.parts.length, 0, System.Single);
                this.baseColors = System.Array.init(this.parts.length, function (){
                    return new UnityEngine.Color();
                }, UnityEngine.Color);
                for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                    this.baseColors[i] = this.parts[i].color.$clone();
                }
                this.CacheLimbs(this.legs, Bridge.ref(this, "legBase"), Bridge.ref(this, "legTop"));
                this.CacheLimbs(this.arms, Bridge.ref(this, "armBase"), Bridge.ref(this, "armTop"));
            },
            /*MonsterView.Awake end.*/

            /*MonsterView.CacheLimbs start.*/
            CacheLimbs: function (limbs, basePos, top) {
                var n = limbs != null ? limbs.length : 0;
                basePos.v = System.Array.init(n, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                top.v = System.Array.init(n, 0, System.Single);
                for (var i = 0; i < n; i = (i + 1) | 0) {
                    basePos.v[i] = limbs[i].localPosition.$clone();
                    var sr = limbs[i].GetComponent(UnityEngine.SpriteRenderer);
                    top.v[i] = UnityEngine.Component.op_Inequality(sr, null) && sr.sprite != null ? sr.sprite.bounds.max.y - 0.1 : 0.0;
                }
            },
            /*MonsterView.CacheLimbs end.*/

            /*MonsterView.PoseLimb start.*/
            PoseLimb: function (t, basePos, top, angle) {
                var pivot = basePos.$clone().add( new pc.Vec3( 0.0, top, 0.0 ) );
                var q = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, angle );
                t.localPosition = pivot.$clone().add( q.transformVector( (basePos.$clone().sub( pivot )) ) );
                t.localRotation = q.$clone();
            },
            /*MonsterView.PoseLimb end.*/

            /*MonsterView.ResetLimbs start.*/
            ResetLimbs: function () {
                for (var i = 0; i < this.legBase.length; i = (i + 1) | 0) {
                    this.PoseLimb(this.legs[i], this.legBase[i], this.legTop[i], 0.0);
                }
                for (var i1 = 0; i1 < this.armBase.length; i1 = (i1 + 1) | 0) {
                    this.PoseLimb(this.arms[i1], this.armBase[i1], this.armTop[i1], 0.0);
                }
            },
            /*MonsterView.ResetLimbs end.*/

            /*MonsterView.Init start.*/
            Init: function (maxHealth) {
                this.maxHp = maxHealth < 1 ? 1 : maxHealth; // Luna: tranh Mathf.Max(int) (bi doi sang float)
                this.hp = this.maxHp;
                this.dead = false;
                this.SetHpVisual();
            },
            /*MonsterView.Init end.*/

            /*MonsterView.Update start.*/
            Update: function () {
                if (this.dead || this.busy) {
                    return;
                }
                this.idleT += UnityEngine.Time.deltaTime;
                this.body.localScale = new pc.Vec3( 1.0, 1.0 + Math.sin(this.idleT * 3.0) * 0.015, 1.0 );
            },
            /*MonsterView.Update end.*/

            /*MonsterView.SetHpVisual start.*/
            SetHpVisual: function () {
                var f = Math.max(0, Math.min(1, this.hp / this.maxHp));
                this.hpFill.localScale = new pc.Vec3( f, 1.0, 1.0 );
            },
            /*MonsterView.SetHpVisual end.*/

            /*MonsterView.Spawn start.*/
            Spawn: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    top,
                    k,
                    k1,
                    sq,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.gameObject.SetActive(true);
                                        this.hpRoot.SetActive(false);
                                        this.busy = true;
                                        t = 0.0;
                                        top = this.bodyBase.$clone().add( new pc.Vec3( 0.0, 8.0, 0.0 ) );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.35 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.35));
                                        this.body.localPosition = new pc.Vec3().lerp( top, this.bodyBase, k * k );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.body.localPosition = this.bodyBase.$clone();
                                        t = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( t < 0.25 ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    t += UnityEngine.Time.deltaTime;
                                        k1 = Math.max(0, Math.min(1, t / 0.25));
                                        sq = Math.sin(k1 * UnityEngine.Mathf.PI) * 0.18;
                                        this.body.localScale = new pc.Vec3( 1.0 + sq, 1.0 - sq, 1.0 );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    this.body.localScale = new pc.Vec3( 1, 1, 1 );
                                        this.hpRoot.SetActive(true);
                                        this.busy = false;

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
            /*MonsterView.Spawn end.*/

            /*MonsterView.TakeDamage start.*/
            TakeDamage: function (dmg) {
                if (this.dead) {
                    return true;
                }
                this.hp = (this.hp - dmg) | 0;
                if (this.hp < 0) {
                    this.hp = 0;
                }
                this.SetHpVisual();
                this.StartCoroutine$1(this.HitFx());
                return this.hp <= 0;
            },
            /*MonsterView.TakeDamage end.*/

            /*MonsterView.HitFx start.*/
            HitFx: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    k,
                    c,
                    $t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.busy = true;
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.18 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.18));
                                        c = pc.Color.lerp( new pc.Color( 1.0, 0.35, 0.35, 1.0 ), new pc.Color( 1, 1, 1, 1 ), k );
                                        for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                                            this.parts[i].color = ($t = this.baseColors[i], new pc.Color( c.r * $t.r, c.g * $t.g, c.b * $t.b, c.a * $t.a ));
                                        }
                                        // monster bi flip x = -1, nen +x local = lui ve ben phai
                                        this.body.localPosition = this.bodyBase.$clone().add( new pc.Vec3( -Math.sin(k * UnityEngine.Mathf.PI) * 0.35, 0.0, 0.0 ) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    for (var i1 = 0; i1 < this.parts.length; i1 = (i1 + 1) | 0) {
                                            this.parts[i1].color = this.baseColors[i1].$clone();
                                        }
                                        this.body.localPosition = this.bodyBase.$clone();
                                        this.busy = false;

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
            /*MonsterView.HitFx end.*/

            /*MonsterView.WalkTo start.*/
            WalkTo: function (worldX, dur) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    start,
                    p,
                    t,
                    STEP_SPEED,
                    LEG_LIFT,
                    LEG_TILT,
                    ARM_SWING,
                    SWAY,
                    k,
                    ramp,
                    phase,
                    s,
                    side,
                    lift,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.walking = true;
                                        start = this.transform.position.$clone();
                                        p = start.$clone();
                                        t = 0.0;
                                        // Monster ve nhin thang (front view) -> di kieu dam chan luan phien + lac lu,
                                        // khong vung chan toi/lui (se bat cheo thanh hinh chu X)
                                        STEP_SPEED = 7.0; // nhip buoc (rad/s) ~ 2.2 buoc/giay
                                        LEG_LIFT = 0.22; // do nhac chan (local)
                                        LEG_TILT = 5.0; // chan nghieng nhe khi nhac
                                        ARM_SWING = 8.0; // do vung tay quanh vai
                                        SWAY = 3.0; // lac lu than
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < dur && this.hp > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / dur));
                                        ramp = Math.max(0, Math.min(1, t / 0.25)); // vao nhip tu tu, khong giat
                                        phase = t * STEP_SPEED;
                                        s = Math.sin(phase);

                                        p.x = pc.math.lerp(start.x, worldX, k);
                                        // nhun: ha xuong luc chan cham dat (s = 0), nho len khi 1 chan dang nhac
                                        p.y = start.y + Math.abs(s) * 0.04 * ramp;
                                        this.transform.position = p.$clone();

                                        for (var i = 0; i < this.legBase.length; i = (i + 1) | 0) {
                                            side = i % 2 === 0 ? 1.0 : -1.0;
                                            lift = UnityEngine.Mathf.Max(0.0, s * side) * ramp; // chan nay nhac khi chan kia chong
                                            this.PoseLimb(this.legs[i], this.legBase[i].$clone().add( new pc.Vec3( 0.0, lift * LEG_LIFT, 0.0 ) ), this.legTop[i], side * lift * LEG_TILT);
                                        }
                                        for (var i1 = 0; i1 < this.armBase.length; i1 = (i1 + 1) | 0) {
                                            this.PoseLimb(this.arms[i1], this.armBase[i1], this.armTop[i1], (i1 % 2 === 0 ? -s : s) * ARM_SWING * ramp);
                                        }
                                        if (!this.busy) {
                                            this.body.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, (-3.0 + s * SWAY) * ramp );
                                        } // nghieng toi + lac lu
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (this.hp > 0) {
                                            p.y = start.y;
                                            this.transform.position = p.$clone();
                                            this.ResetLimbs();
                                            if (!this.busy) {
                                                this.body.localRotation = pc.Quat.IDENTITY.clone();
                                            }
                                        }
                                        this.walking = false;

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
            /*MonsterView.WalkTo end.*/

            /*MonsterView.AttackLunge start.*/
            AttackLunge: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    k,
                    k1,
                    k2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.busy = true;
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.18 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        k = Math.max(0, Math.min(1, t / 0.18));
                                        this.body.localPosition = this.bodyBase.$clone().add( new pc.Vec3( -0.4 * k, 0.0, 0.0 ) );
                                        this.body.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, 10.0 * k );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    t = 0.0;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( t < 0.12 ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    t += UnityEngine.Time.deltaTime;
                                        k1 = Math.max(0, Math.min(1, t / 0.12));
                                        this.body.localPosition = this.bodyBase.$clone().add( new pc.Vec3( pc.math.lerp(-0.4, 1.2, k1), 0.0, 0.0 ) );
                                        this.body.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, pc.math.lerp(10.0, -15.0, k1) );
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    t = 0.0;
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    if ( t < 0.25 ) {
                                            $step = 10;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 10: {
                                    t += UnityEngine.Time.deltaTime;
                                        k2 = Math.max(0, Math.min(1, t / 0.25));
                                        this.body.localPosition = this.bodyBase.$clone().add( new pc.Vec3( pc.math.lerp(1.2, 0.0, k2), 0.0, 0.0 ) );
                                        this.body.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, pc.math.lerp(-15.0, 0.0, k2) );
                                        $enumerator.current = null;
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    
                                        $step = 9;
                                        continue;
                                }
                                case 12: {
                                    this.body.localPosition = this.bodyBase.$clone();
                                        this.body.localRotation = pc.Quat.IDENTITY.clone();
                                        this.busy = false;

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
            /*MonsterView.AttackLunge end.*/

            /*MonsterView.Resist start.*/
            Resist: function () {
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
                                    this.busy = true;
                                        t = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 0.6 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    t += UnityEngine.Time.deltaTime;
                                        this.body.localRotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, Math.sin(t * 30.0) * 4.0 * (1.0 - t / 0.6) );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this.body.localRotation = pc.Quat.IDENTITY.clone();
                                        this.busy = false;

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
            /*MonsterView.Resist end.*/

            /*MonsterView.Die start.*/
            Die: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    dt,
                    a,
                    p,
                    c,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.dead = true;
                                        this.hpRoot.SetActive(false);
                                        for (var i = 0; i < this.parts.length; i = (i + 1) | 0) {
                                            // +x local = ve phia phai man hinh (root flip)
                                            this.vel[i] = new pc.Vec3( -UnityEngine.Random.Range$1(2.0, 6.0), UnityEngine.Random.Range$1(5.0, 10.0), 0.0 );
                                            this.spin[i] = UnityEngine.Random.Range$1(-720.0, 720.0);
                                        }
                                        t = 0.0;
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
                                    dt = UnityEngine.Time.deltaTime;
                                        t += dt;
                                        a = 1.0 - Math.max(0, Math.min(1, (t - 0.9) / 0.5));
                                        for (var i1 = 0; i1 < this.parts.length; i1 = (i1 + 1) | 0) {
                                            this.vel[i1].y -= 20.0 * dt;
                                            p = this.parts[i1].transform;
                                            p.localPosition = p.localPosition.$clone().add( this.vel[i1].$clone().clone().scale( dt ) );
                                            p.Rotate(0.0, 0.0, this.spin[i1] * dt);
                                            c = this.baseColors[i1].$clone();
                                            c.a = a;
                                            this.parts[i1].color = c.$clone();
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
            /*MonsterView.Die end.*/


        }
    });
    /*MonsterView end.*/

    /*TextShadowCopy start.*/
    Bridge.define("TextShadowCopy", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            face: null,
            shadowColor: null,
            src: null
        },
        ctors: {
            init: function () {
                this.shadowColor = new UnityEngine.Color();
                this.shadowColor = new pc.Color( 0.08, 0.06, 0.1, 1.0 );
            }
        },
        methods: {
            /*TextShadowCopy.Awake start.*/
            Awake: function () {
                this.src = this.GetComponent(UnityEngine.UI.Text);
            },
            /*TextShadowCopy.Awake end.*/

            /*TextShadowCopy.LateUpdate start.*/
            LateUpdate: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(this.src, null) || UnityEngine.MonoBehaviour.op_Equality(this.face, null)) {
                    return;
                }
                if (!Bridge.referenceEquals(this.face.text, this.src.text)) {
                    this.face.text = this.src.text;
                }
                var c = this.src.color.$clone();
                if (c.r !== this.shadowColor.r || c.g !== this.shadowColor.g || c.b !== this.shadowColor.b) {
                    this.face.color = c.$clone();
                } else {
                    var f = this.face.color.$clone();
                    f.a = c.a;
                    this.face.color = f.$clone();
                }
                var s = this.shadowColor.$clone();
                s.a = c.a;
                this.src.color = s.$clone();
            },
            /*TextShadowCopy.LateUpdate end.*/


        }
    });
    /*TextShadowCopy end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","UnityEngine.UI"];

    /*CameraFit start.*/
    $m("CameraFit", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteAlwaysAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Apply","t":8,"sn":"Apply","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnPreCull","t":8,"sn":"OnPreCull","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"background","t":4,"rt":$n[1].SpriteRenderer,"sn":"background"},{"a":2,"n":"bgFloorOffset","t":4,"rt":$n[0].Single,"sn":"bgFloorOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"bgHalfHeight","t":4,"rt":$n[0].Single,"sn":"bgHalfHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"bgHalfWidth","t":4,"rt":$n[0].Single,"sn":"bgHalfWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":2,"n":"floorFracLandscape","t":4,"rt":$n[0].Single,"sn":"floorFracLandscape","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"floorFracPortrait","t":4,"rt":$n[0].Single,"sn":"floorFracPortrait","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"floorY","t":4,"rt":$n[0].Single,"sn":"floorY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"halfWidthNeeded","t":4,"rt":$n[0].Single,"sn":"halfWidthNeeded","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lastH","t":4,"rt":$n[0].Single,"sn":"lastH","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lastW","t":4,"rt":$n[0].Single,"sn":"lastW","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"minOrtho","t":4,"rt":$n[0].Single,"sn":"minOrtho","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CameraFit end.*/

    /*GameFlow start.*/
    $m("GameFlow", function () { return {"nested":[GameFlow.State],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateHand","t":8,"sn":"AnimateHand","rt":$n[0].Void},{"a":1,"n":"ApplyBackground","t":8,"sn":"ApplyBackground","rt":$n[0].Void},{"a":1,"n":"Attack","t":8,"pi":[{"n":"w","pt":$n[0].Int32,"ps":0}],"sn":"Attack","rt":$n[2].IEnumerator,"p":[$n[0].Int32]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Cta","t":8,"sn":"Cta","rt":$n[0].Void},{"a":1,"n":"DropWeapon","t":8,"sn":"DropWeapon","rt":$n[2].IEnumerator},{"a":1,"n":"EffectRoutine","t":8,"sn":"EffectRoutine","rt":$n[2].IEnumerator},{"a":1,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[0].Void},{"a":1,"n":"Explode","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0}],"sn":"Explode","rt":$n[2].IEnumerator,"p":[$n[1].Vector3]},{"a":1,"n":"FireworksRoutine","t":8,"sn":"FireworksRoutine","rt":$n[2].IEnumerator},{"a":1,"n":"FirstInput","t":8,"sn":"FirstInput","rt":$n[0].Void},{"a":1,"n":"Flash","t":8,"sn":"Flash","rt":$n[2].IEnumerator},{"a":1,"n":"FloatText","t":8,"pi":[{"n":"tx","pt":$n[3].Text,"ps":0},{"n":"screenPos","pt":$n[1].Vector3,"ps":1}],"sn":"FloatText","rt":$n[2].IEnumerator,"p":[$n[3].Text,$n[1].Vector3]},{"a":1,"n":"Fly","t":8,"pi":[{"n":"p","pt":$n[1].SpriteRenderer,"ps":0},{"n":"offset","pt":$n[1].Vector3,"ps":1},{"n":"dur","pt":$n[0].Single,"ps":2},{"n":"spinSpeed","pt":$n[0].Single,"ps":3},{"n":"m","pt":MonsterView,"ps":4},{"n":"dmg","pt":$n[0].Int32,"ps":5}],"sn":"Fly","rt":$n[2].IEnumerator,"p":[$n[1].SpriteRenderer,$n[1].Vector3,$n[0].Single,$n[0].Single,MonsterView,$n[0].Int32]},{"a":1,"n":"GetDamage","t":8,"pi":[{"n":"m","pt":$n[0].Int32,"ps":0},{"n":"w","pt":$n[0].Int32,"ps":1}],"sn":"GetDamage","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"HideChoices","t":8,"sn":"HideChoices","rt":$n[0].Void},{"a":1,"n":"HideHand","t":8,"sn":"HideHand","rt":$n[0].Void},{"a":1,"n":"Hit","t":8,"pi":[{"n":"m","pt":MonsterView,"ps":0},{"n":"dmg","pt":$n[0].Int32,"ps":1},{"n":"pos","pt":$n[1].Vector3,"ps":2},{"n":"big","pt":$n[0].Boolean,"ps":3}],"sn":"Hit","rt":$n[0].Void,"p":[MonsterView,$n[0].Int32,$n[1].Vector3,$n[0].Boolean]},{"a":1,"n":"NextShotDamage","t":8,"sn":"NextShotDamage","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnPopupButton","t":8,"sn":"OnPopupButton","rt":$n[0].Void},{"a":1,"n":"OnSlot","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"OnSlot","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Play","t":8,"pi":[{"n":"c","pt":$n[1].AudioClip,"ps":0}],"sn":"Play","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":1,"n":"PopIn","t":8,"pi":[{"n":"tr","pt":$n[1].Transform,"ps":0}],"sn":"PopIn","rt":$n[2].IEnumerator,"p":[$n[1].Transform]},{"a":1,"n":"Pulse","t":8,"pi":[{"n":"tr","pt":$n[1].Transform,"ps":0}],"sn":"Pulse","rt":$n[2].IEnumerator,"p":[$n[1].Transform]},{"a":1,"n":"RaiseArm","t":8,"pi":[{"n":"angle","pt":$n[0].Single,"ps":0}],"sn":"RaiseArm","rt":$n[2].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"Recoil","t":8,"pi":[{"n":"baseAngle","pt":$n[0].Single,"ps":0}],"sn":"Recoil","rt":$n[2].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"RumiHurt","t":8,"sn":"RumiHurt","rt":$n[2].IEnumerator},{"a":1,"n":"SetTitleVisible","t":8,"pi":[{"n":"v","pt":$n[0].Boolean,"ps":0}],"sn":"SetTitleVisible","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Shake","t":8,"pi":[{"n":"dur","pt":$n[0].Single,"ps":0},{"n":"amp","pt":$n[0].Single,"ps":1}],"sn":"Shake","rt":$n[2].IEnumerator,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"ShowChoices","t":8,"pi":[{"n":"s","pt":GameFlow.State,"ps":0}],"sn":"ShowChoices","rt":$n[0].Void,"p":[GameFlow.State]},{"a":1,"n":"ShowDamage","t":8,"pi":[{"n":"dmg","pt":$n[0].Int32,"ps":0},{"n":"worldPos","pt":$n[1].Vector3,"ps":1}],"sn":"ShowDamage","rt":$n[0].Void,"p":[$n[0].Int32,$n[1].Vector3]},{"a":1,"n":"ShowEffect","t":8,"pi":[{"n":"s","pt":$n[0].String,"ps":0},{"n":"c","pt":$n[1].Color,"ps":1}],"sn":"ShowEffect","rt":$n[0].Void,"p":[$n[0].String,$n[1].Color]},{"a":1,"n":"ShowResult","t":8,"pi":[{"n":"win","pt":$n[0].Boolean,"ps":0}],"sn":"ShowResult","rt":$n[2].IEnumerator,"p":[$n[0].Boolean]},{"a":1,"n":"SlotPoint","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"SlotPoint","rt":$n[1].Vector2,"p":[$n[0].Int32]},{"a":1,"n":"SpawnMonster","t":8,"sn":"SpawnMonster","rt":$n[2].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TargetOf","t":8,"pi":[{"n":"m","pt":MonsterView,"ps":0},{"n":"offset","pt":$n[1].Vector3,"ps":1}],"sn":"TargetOf","rt":$n[1].Vector3,"p":[MonsterView,$n[1].Vector3]},{"a":1,"n":"ThrowCherry","t":8,"pi":[{"n":"m","pt":MonsterView,"ps":0},{"n":"dmg","pt":$n[0].Int32,"ps":1}],"sn":"ThrowCherry","rt":$n[2].IEnumerator,"p":[MonsterView,$n[0].Int32]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"HAND_MOVE","is":true,"t":4,"rt":$n[0].Single,"sn":"HAND_MOVE","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"HAND_PRESS","is":true,"t":4,"rt":$n[0].Single,"sn":"HAND_PRESS","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"HAND_WAIT","is":true,"t":4,"rt":$n[0].Single,"sn":"HAND_WAIT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"VOLLEYS","is":true,"t":4,"rt":$n[0].Int32,"sn":"VOLLEYS","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"akClip","t":4,"rt":$n[1].AudioClip,"sn":"akClip"},{"a":2,"n":"background","t":4,"rt":$n[1].SpriteRenderer,"sn":"background"},{"a":2,"n":"backgroundSprite","t":4,"rt":$n[1].Sprite,"sn":"backgroundSprite"},{"a":2,"n":"bigText","t":4,"rt":$n[3].Text,"sn":"bigText"},{"a":2,"n":"boomClip","t":4,"rt":$n[1].AudioClip,"sn":"boomClip"},{"a":2,"n":"bullets","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"bullets"},{"at":[new UnityEngine.HeaderAttribute("World")],"a":2,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":2,"n":"cherryProjectile","t":4,"rt":$n[1].SpriteRenderer,"sn":"cherryProjectile"},{"at":[new UnityEngine.HeaderAttribute("UI")],"a":2,"n":"choicePanel","t":4,"rt":$n[1].GameObject,"sn":"choicePanel"},{"a":2,"n":"clickClip","t":4,"rt":$n[1].AudioClip,"sn":"clickClip"},{"a":2,"n":"damageTexts","t":4,"rt":System.Array.type(UnityEngine.UI.Text),"sn":"damageTexts"},{"a":2,"n":"dmgDeerAK","t":4,"rt":$n[0].Int32,"sn":"dmgDeerAK","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dmgDeerCherry","t":4,"rt":$n[0].Int32,"sn":"dmgDeerCherry","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dmgDeerStick","t":4,"rt":$n[0].Int32,"sn":"dmgDeerStick","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dmgFreddyAK","t":4,"rt":$n[0].Int32,"sn":"dmgFreddyAK","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dmgFreddyCherry","t":4,"rt":$n[0].Int32,"sn":"dmgFreddyCherry","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dmgFreddyStick","t":4,"rt":$n[0].Int32,"sn":"dmgFreddyStick","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dmgSonicAK","t":4,"rt":$n[0].Int32,"sn":"dmgSonicAK","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dmgSonicCherry","t":4,"rt":$n[0].Int32,"sn":"dmgSonicCherry","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dmgSonicStick","t":4,"rt":$n[0].Int32,"sn":"dmgSonicStick","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"dmgTextIdx","t":4,"rt":$n[0].Int32,"sn":"dmgTextIdx","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"dmgTotal","t":4,"rt":$n[0].Int32,"sn":"dmgTotal","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"effectText","t":4,"rt":$n[3].Text,"sn":"effectText"},{"a":2,"n":"endCatcher","t":4,"rt":$n[3].Button,"sn":"endCatcher"},{"a":1,"n":"ended","t":4,"rt":$n[0].Boolean,"sn":"ended","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"equipClip","t":4,"rt":$n[1].AudioClip,"sn":"equipClip"},{"a":2,"n":"explosion","t":4,"rt":$n[1].SpriteRenderer,"sn":"explosion"},{"a":2,"n":"failClip","t":4,"rt":$n[1].AudioClip,"sn":"failClip"},{"a":2,"n":"fireworks","t":4,"rt":System.Array.type(UnityEngine.ParticleSystem),"sn":"fireworks"},{"a":2,"n":"hand","t":4,"rt":$n[1].RectTransform,"sn":"hand"},{"a":1,"n":"handT","t":4,"rt":$n[0].Single,"sn":"handT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"hitClip","t":4,"rt":$n[1].AudioClip,"sn":"hitClip"},{"a":1,"n":"isWin","t":4,"rt":$n[0].Boolean,"sn":"isWin","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"killStarted","t":4,"rt":$n[0].Boolean,"sn":"killStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"luna","t":4,"rt":LunaController,"sn":"luna"},{"a":2,"n":"monsterHP","t":4,"rt":$n[0].Int32,"sn":"monsterHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"monsterIcons","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"monsterIcons"},{"a":1,"n":"monsterIdx","t":4,"rt":$n[0].Int32,"sn":"monsterIdx","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"monsterStopDistance","t":4,"rt":$n[0].Single,"sn":"monsterStopDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"monsterWalkTime","t":4,"rt":$n[0].Single,"sn":"monsterWalkTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"monsters","t":4,"rt":System.Array.type(MonsterView),"sn":"monsters"},{"a":2,"n":"muzzle","t":4,"rt":$n[1].Transform,"sn":"muzzle"},{"a":2,"n":"muzzleFlash","t":4,"rt":$n[1].SpriteRenderer,"sn":"muzzleFlash"},{"a":2,"n":"popup","t":4,"rt":$n[1].GameObject,"sn":"popup"},{"a":2,"n":"popupButton","t":4,"rt":$n[3].Button,"sn":"popupButton"},{"a":2,"n":"popupButtonLabel","t":4,"rt":$n[3].Text,"sn":"popupButtonLabel"},{"a":2,"n":"popupTitle","t":4,"rt":$n[3].Text,"sn":"popupTitle"},{"a":2,"n":"rumiArm","t":4,"rt":$n[1].Transform,"sn":"rumiArm"},{"a":1,"n":"rumiBase","t":4,"rt":$n[1].Vector3,"sn":"rumiBase"},{"a":2,"n":"rumiBody","t":4,"rt":$n[1].Transform,"sn":"rumiBody"},{"a":1,"n":"rumiColors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"rumiColors"},{"a":1,"n":"rumiParts","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"rumiParts"},{"at":[new UnityEngine.HeaderAttribute("Audio")],"a":2,"n":"sfx","t":4,"rt":$n[1].AudioSource,"sn":"sfx"},{"a":1,"n":"shotIndex","t":4,"rt":$n[0].Int32,"sn":"shotIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"shotTotal","t":4,"rt":$n[0].Int32,"sn":"shotTotal","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"slotButtons","t":4,"rt":System.Array.type(UnityEngine.UI.Button),"sn":"slotButtons"},{"a":2,"n":"slotIcons","t":4,"rt":System.Array.type(UnityEngine.UI.Image),"sn":"slotIcons"},{"a":2,"n":"starClip","t":4,"rt":$n[1].AudioClip,"sn":"starClip"},{"a":2,"n":"stars","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"stars"},{"a":1,"n":"started","t":4,"rt":$n[0].Boolean,"sn":"started","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"state","t":4,"rt":GameFlow.State,"sn":"state","box":function ($v) { return Bridge.box($v, GameFlow.State, System.Enum.toStringFn(GameFlow.State));}},{"a":2,"n":"titleBar","t":4,"rt":$n[1].GameObject,"sn":"titleBar"},{"a":2,"n":"titleText","t":4,"rt":$n[3].Text,"sn":"titleText"},{"a":1,"n":"w005","t":4,"rt":$n[1].WaitForSeconds,"sn":"w005"},{"a":1,"n":"w011","t":4,"rt":$n[1].WaitForSeconds,"sn":"w011"},{"a":1,"n":"w015","t":4,"rt":$n[1].WaitForSeconds,"sn":"w015"},{"a":1,"n":"w02","t":4,"rt":$n[1].WaitForSeconds,"sn":"w02"},{"a":1,"n":"w03","t":4,"rt":$n[1].WaitForSeconds,"sn":"w03"},{"a":1,"n":"w04","t":4,"rt":$n[1].WaitForSeconds,"sn":"w04"},{"a":1,"n":"w08","t":4,"rt":$n[1].WaitForSeconds,"sn":"w08"},{"a":2,"n":"weaponInHand","t":4,"rt":$n[1].SpriteRenderer,"sn":"weaponInHand"},{"a":2,"n":"weaponSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"weaponSprites"},{"a":2,"n":"winClip","t":4,"rt":$n[1].AudioClip,"sn":"winClip"},{"a":2,"n":"world","t":4,"rt":$n[1].Transform,"sn":"world"},{"a":1,"n":"worldBase","t":4,"rt":$n[1].Vector3,"sn":"worldBase"}]}; }, $n);
    /*GameFlow end.*/

    /*GameFlow+State start.*/
    $m("GameFlow.State", function () { return {"td":GameFlow,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Attacking","is":true,"t":4,"rt":GameFlow.State,"sn":"Attacking","box":function ($v) { return Bridge.box($v, GameFlow.State, System.Enum.toStringFn(GameFlow.State));}},{"a":2,"n":"Ended","is":true,"t":4,"rt":GameFlow.State,"sn":"Ended","box":function ($v) { return Bridge.box($v, GameFlow.State, System.Enum.toStringFn(GameFlow.State));}},{"a":2,"n":"PickAfterReplay","is":true,"t":4,"rt":GameFlow.State,"sn":"PickAfterReplay","box":function ($v) { return Bridge.box($v, GameFlow.State, System.Enum.toStringFn(GameFlow.State));}},{"a":2,"n":"PickMonster","is":true,"t":4,"rt":GameFlow.State,"sn":"PickMonster","box":function ($v) { return Bridge.box($v, GameFlow.State, System.Enum.toStringFn(GameFlow.State));}},{"a":2,"n":"PickWeapon","is":true,"t":4,"rt":GameFlow.State,"sn":"PickWeapon","box":function ($v) { return Bridge.box($v, GameFlow.State, System.Enum.toStringFn(GameFlow.State));}},{"a":2,"n":"Result","is":true,"t":4,"rt":GameFlow.State,"sn":"Result","box":function ($v) { return Bridge.box($v, GameFlow.State, System.Enum.toStringFn(GameFlow.State));}}]}; }, $n);
    /*GameFlow+State end.*/

    /*LunaController start.*/
    $m("LunaController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetFailSfx","t":8,"pi":[{"n":"heroIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetFailSfx","rt":$n[1].AudioClip,"p":[$n[0].Int32]},{"a":2,"n":"GetWinSfx","t":8,"pi":[{"n":"heroIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetWinSfx","rt":$n[1].AudioClip,"p":[$n[0].Int32]},{"a":2,"n":"OnFirstInput","t":8,"sn":"OnFirstInput","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Clicks","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Clicks","t":8,"rt":$n[0].Int32,"fg":"Clicks","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Clicks"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Background image", 0, null)],"a":2,"n":"backgroundTexture","t":4,"rt":$n[1].Texture2D,"sn":"backgroundTexture"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Background Music", 1, null)],"a":2,"n":"bgmClip","t":4,"rt":$n[1].AudioClip,"sn":"bgmClip"},{"a":2,"n":"bgmSource","t":4,"rt":$n[1].AudioSource,"sn":"bgmSource"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("BGM volume (0-1)", 2, null, false, null)],"a":2,"n":"bgmVolume","t":4,"rt":$n[0].Single,"sn":"bgmVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"clicks","t":4,"rt":$n[0].Int32,"sn":"clicks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Auto CTA after clicks (0 = off)", 4, null, false, null)],"a":2,"n":"clicksToCta","t":4,"rt":$n[0].Int32,"sn":"clicksToCta","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("CTA when press Retry", 5, null, false, null)],"a":2,"n":"ctaOnRetry","t":4,"rt":$n[0].Boolean,"sn":"ctaOnRetry","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"elapsed","t":4,"rt":$n[0].Single,"sn":"elapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Fail SFX - Banana Cat", 2, "SFX")],"a":2,"n":"failSfxBananaCat","t":4,"rt":$n[1].AudioClip,"sn":"failSfxBananaCat"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Fail SFX - Black Cat", 1, "SFX")],"a":2,"n":"failSfxBlackCat","t":4,"rt":$n[1].AudioClip,"sn":"failSfxBlackCat"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Fail SFX - Gugu Gaga", 0, "SFX")],"a":2,"n":"failSfxGuguGaga","t":4,"rt":$n[1].AudioClip,"sn":"failSfxGuguGaga"},{"a":1,"n":"fired","t":4,"rt":$n[0].Boolean,"sn":"fired","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"flow","t":4,"rt":GameFlow,"sn":"flow"},{"a":2,"n":"memeFlow","t":4,"rt":MemeFlow,"sn":"memeFlow"},{"a":1,"n":"started","t":4,"rt":$n[0].Boolean,"sn":"started","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Auto CTA after seconds (0 = off)", 3, null, false, null)],"a":2,"n":"timeToCta","t":4,"rt":$n[0].Single,"sn":"timeToCta","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Win SFX - Banana Cat", 5, "SFX")],"a":2,"n":"winSfxBananaCat","t":4,"rt":$n[1].AudioClip,"sn":"winSfxBananaCat"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Win SFX - Black Cat", 4, "SFX")],"a":2,"n":"winSfxBlackCat","t":4,"rt":$n[1].AudioClip,"sn":"winSfxBlackCat"},{"at":[new UnityEngine.LunaPlaygroundAssetAttribute("Win SFX - Gugu Gaga", 3, "SFX")],"a":2,"n":"winSfxGuguGaga","t":4,"rt":$n[1].AudioClip,"sn":"winSfxGuguGaga"}]}; }, $n);
    /*LunaController end.*/

    /*HeroRig start.*/
    $m("HeroRig", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"armPivot","t":4,"rt":$n[1].Transform,"sn":"armPivot"},{"a":2,"n":"body","t":4,"rt":$n[1].Transform,"sn":"body"},{"a":2,"n":"chestPoses","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"chestPoses"},{"a":2,"n":"headWidth","t":4,"rt":$n[0].Single,"sn":"headWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"helmet","t":4,"rt":$n[1].SpriteRenderer,"sn":"helmet"},{"a":2,"n":"helmetAnchor","t":4,"rt":$n[1].Transform,"sn":"helmetAnchor"},{"a":2,"n":"helmetPoses","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"helmetPoses"},{"a":2,"n":"holder","t":4,"rt":$n[1].Transform,"sn":"holder"},{"a":2,"n":"muzzle","t":4,"rt":$n[1].Transform,"sn":"muzzle"},{"a":2,"n":"parts","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"parts"},{"a":2,"n":"root","t":4,"rt":$n[1].Transform,"sn":"root"},{"a":2,"n":"weapon","t":4,"rt":$n[1].SpriteRenderer,"sn":"weapon"},{"a":2,"n":"weaponPoses","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"weaponPoses"}]}; }, $n);
    /*HeroRig end.*/

    /*MemeFlow start.*/
    $m("MemeFlow", function () { return {"nested":[MemeFlow.Stage],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateHand","t":8,"sn":"AnimateHand","rt":$n[0].Void},{"a":1,"n":"ApplyBackground","t":8,"sn":"ApplyBackground","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Battle","t":8,"sn":"Battle","rt":$n[2].IEnumerator},{"a":1,"n":"BurnLoop","t":8,"sn":"BurnLoop","rt":$n[2].IEnumerator},{"a":1,"n":"BusyChoices","t":8,"sn":"BusyChoices","rt":$n[0].Void},{"a":2,"n":"Cta","t":8,"sn":"Cta","rt":$n[0].Void},{"a":1,"n":"DropIn","t":8,"pi":[{"n":"t","pt":$n[1].Transform,"ps":0},{"n":"endLocal","pt":$n[1].Vector3,"ps":1},{"n":"height","pt":$n[0].Single,"ps":2},{"n":"dur","pt":$n[0].Single,"ps":3}],"sn":"DropIn","rt":$n[2].IEnumerator,"p":[$n[1].Transform,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":1,"n":"EffectRoutine","t":8,"sn":"EffectRoutine","rt":$n[2].IEnumerator},{"a":1,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[0].Void},{"a":1,"n":"EquipArmorThenBattle","t":8,"sn":"EquipArmorThenBattle","rt":$n[2].IEnumerator},{"a":1,"n":"EquipChestThenBattle","t":8,"sn":"EquipChestThenBattle","rt":$n[2].IEnumerator},{"a":1,"n":"EquipWeapon","t":8,"sn":"EquipWeapon","rt":$n[2].IEnumerator},{"a":1,"n":"Explode","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0}],"sn":"Explode","rt":$n[2].IEnumerator,"p":[$n[1].Vector3]},{"a":1,"n":"FireFlame","t":8,"pi":[{"n":"m","pt":MonsterView,"ps":0}],"sn":"FireFlame","rt":$n[2].IEnumerator,"p":[MonsterView]},{"a":1,"n":"FireGlove","t":8,"pi":[{"n":"m","pt":MonsterView,"ps":0}],"sn":"FireGlove","rt":$n[2].IEnumerator,"p":[MonsterView]},{"a":1,"n":"FireRocket","t":8,"pi":[{"n":"m","pt":MonsterView,"ps":0}],"sn":"FireRocket","rt":$n[2].IEnumerator,"p":[MonsterView]},{"a":1,"n":"FireworksRoutine","t":8,"sn":"FireworksRoutine","rt":$n[2].IEnumerator},{"a":1,"n":"FirstInput","t":8,"sn":"FirstInput","rt":$n[0].Void},{"a":1,"n":"Flash","t":8,"sn":"Flash","rt":$n[2].IEnumerator},{"a":1,"n":"FloatText","t":8,"pi":[{"n":"tx","pt":$n[3].Text,"ps":0},{"n":"screenPos","pt":$n[1].Vector3,"ps":1}],"sn":"FloatText","rt":$n[2].IEnumerator,"p":[$n[3].Text,$n[1].Vector3]},{"a":1,"n":"HeadWorldBounds","t":8,"sn":"HeadWorldBounds","rt":$n[1].Bounds},{"a":1,"n":"HeroHurt","t":8,"sn":"HeroHurt","rt":$n[2].IEnumerator},{"a":1,"n":"HeroWalkTo","t":8,"pi":[{"n":"worldX","pt":$n[0].Single,"ps":0},{"n":"dur","pt":$n[0].Single,"ps":1}],"sn":"HeroWalkTo","rt":$n[2].IEnumerator,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"HideHand","t":8,"sn":"HideHand","rt":$n[0].Void},{"a":1,"n":"HidePoses","is":true,"t":8,"pi":[{"n":"poses","pt":System.Array.type(UnityEngine.SpriteRenderer),"ps":0}],"sn":"HidePoses","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.SpriteRenderer)]},{"a":1,"n":"Hit","t":8,"pi":[{"n":"m","pt":MonsterView,"ps":0},{"n":"dmg","pt":$n[0].Int32,"ps":1},{"n":"pos","pt":$n[1].Vector3,"ps":2},{"n":"big","pt":$n[0].Boolean,"ps":3}],"sn":"Hit","rt":$n[0].Void,"p":[MonsterView,$n[0].Int32,$n[1].Vector3,$n[0].Boolean]},{"a":1,"n":"NextShotDamage","t":8,"sn":"NextShotDamage","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnPopupButton","t":8,"sn":"OnPopupButton","rt":$n[0].Void},{"a":1,"n":"OnSlot","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"OnSlot","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"PerWeapon","t":8,"pi":[{"n":"arr","pt":$n[0].Array.type(System.Single),"ps":0},{"n":"def","pt":$n[0].Single,"ps":1}],"sn":"PerWeapon","rt":$n[0].Single,"p":[$n[0].Array.type(System.Single),$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"PerWeaponInt","t":8,"pi":[{"n":"arr","pt":$n[0].Array.type(System.Int32),"ps":0},{"n":"def","pt":$n[0].Int32,"ps":1}],"sn":"PerWeaponInt","rt":$n[0].Int32,"p":[$n[0].Array.type(System.Int32),$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"Play","t":8,"pi":[{"n":"c","pt":$n[1].AudioClip,"ps":0}],"sn":"Play","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":1,"n":"PopIn","t":8,"pi":[{"n":"tr","pt":$n[1].Transform,"ps":0}],"sn":"PopIn","rt":$n[2].IEnumerator,"p":[$n[1].Transform]},{"a":1,"n":"Pulse","t":8,"pi":[{"n":"tr","pt":$n[1].Transform,"ps":0}],"sn":"Pulse","rt":$n[2].IEnumerator,"p":[$n[1].Transform]},{"a":1,"n":"RaiseArm","t":8,"pi":[{"n":"angle","pt":$n[0].Single,"ps":0}],"sn":"RaiseArm","rt":$n[2].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"Recoil","t":8,"sn":"Recoil","rt":$n[2].IEnumerator},{"a":1,"n":"RetryRound","t":8,"sn":"RetryRound","rt":$n[2].IEnumerator},{"a":1,"n":"SetupWeaponSprite","t":8,"pi":[{"n":"w","pt":$n[0].Int32,"ps":0}],"sn":"SetupWeaponSprite","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Shake","t":8,"pi":[{"n":"dur","pt":$n[0].Single,"ps":0},{"n":"amp","pt":$n[0].Single,"ps":1}],"sn":"Shake","rt":$n[2].IEnumerator,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"ShowChoices","t":8,"pi":[{"n":"s","pt":MemeFlow.Stage,"ps":0}],"sn":"ShowChoices","rt":$n[0].Void,"p":[MemeFlow.Stage]},{"a":1,"n":"ShowDamage","t":8,"pi":[{"n":"dmg","pt":$n[0].Int32,"ps":0},{"n":"worldPos","pt":$n[1].Vector3,"ps":1}],"sn":"ShowDamage","rt":$n[0].Void,"p":[$n[0].Int32,$n[1].Vector3]},{"a":1,"n":"ShowEffect","t":8,"pi":[{"n":"s","pt":$n[0].String,"ps":0},{"n":"c","pt":$n[1].Color,"ps":1}],"sn":"ShowEffect","rt":$n[0].Void,"p":[$n[0].String,$n[1].Color]},{"a":1,"n":"ShowResult","t":8,"pi":[{"n":"win","pt":$n[0].Boolean,"ps":0}],"sn":"ShowResult","rt":$n[2].IEnumerator,"p":[$n[0].Boolean]},{"a":1,"n":"SlotPoint","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"SlotPoint","rt":$n[1].Vector2,"p":[$n[0].Int32]},{"a":1,"n":"SpawnHero","t":8,"sn":"SpawnHero","rt":$n[2].IEnumerator},{"a":1,"n":"SpawnMonster","t":8,"sn":"SpawnMonster","rt":$n[2].IEnumerator},{"a":1,"n":"Squash","t":8,"pi":[{"n":"t","pt":$n[1].Transform,"ps":0}],"sn":"Squash","rt":$n[2].IEnumerator,"p":[$n[1].Transform]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartBurn","t":8,"pi":[{"n":"m","pt":MonsterView,"ps":0}],"sn":"StartBurn","rt":$n[0].Void,"p":[MonsterView]},{"a":1,"n":"Swing","t":8,"pi":[{"n":"m","pt":MonsterView,"ps":0}],"sn":"Swing","rt":$n[2].IEnumerator,"p":[MonsterView]},{"a":1,"n":"TargetOf","t":8,"pi":[{"n":"m","pt":MonsterView,"ps":0},{"n":"offset","pt":$n[1].Vector3,"ps":1}],"sn":"TargetOf","rt":$n[1].Vector3,"p":[MonsterView,$n[1].Vector3]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"HAND_MOVE","is":true,"t":4,"rt":$n[0].Single,"sn":"HAND_MOVE","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"HAND_PRESS","is":true,"t":4,"rt":$n[0].Single,"sn":"HAND_PRESS","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"HAND_WAIT","is":true,"t":4,"rt":$n[0].Single,"sn":"HAND_WAIT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"armRestAngle","t":4,"rt":$n[0].Single,"sn":"armRestAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"armorIdx","t":4,"rt":$n[0].Int32,"sn":"armorIdx","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"armorSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"armorSprites"},{"a":2,"n":"background","t":4,"rt":$n[1].SpriteRenderer,"sn":"background"},{"a":2,"n":"backgroundSprite","t":4,"rt":$n[1].Sprite,"sn":"backgroundSprite"},{"a":2,"n":"bigText","t":4,"rt":$n[3].Text,"sn":"bigText"},{"a":2,"n":"boomClip","t":4,"rt":$n[1].AudioClip,"sn":"boomClip"},{"a":2,"n":"burnFlames","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"burnFlames"},{"a":2,"n":"burnFps","t":4,"rt":$n[0].Single,"sn":"burnFps","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"burnFrames","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"burnFrames"},{"a":2,"n":"burnPartNames","t":4,"rt":$n[0].Array.type(System.String),"sn":"burnPartNames"},{"a":2,"n":"burnTime","t":4,"rt":$n[0].Single,"sn":"burnTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"burnUntil","t":4,"rt":$n[0].Single,"sn":"burnUntil","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"burnWorldHeight","t":4,"rt":$n[0].Single,"sn":"burnWorldHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"burning","t":4,"rt":$n[0].Boolean,"sn":"burning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("World")],"a":2,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"chestIdx","t":4,"rt":$n[0].Int32,"sn":"chestIdx","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"chestSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"chestSprites"},{"a":2,"n":"chestStage","t":4,"rt":$n[0].Boolean,"sn":"chestStage","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("UI")],"a":2,"n":"choicePanel","t":4,"rt":$n[1].GameObject,"sn":"choicePanel"},{"a":2,"n":"clickClip","t":4,"rt":$n[1].AudioClip,"sn":"clickClip"},{"a":2,"n":"counterArmor","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"counterArmor"},{"a":2,"n":"counterArmorBonus","t":4,"rt":$n[0].Int32,"sn":"counterArmorBonus","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"counterWeapon","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"counterWeapon"},{"a":2,"n":"counterWeaponDamage","t":4,"rt":$n[0].Int32,"sn":"counterWeaponDamage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"damageTexts","t":4,"rt":System.Array.type(UnityEngine.UI.Text),"sn":"damageTexts"},{"a":1,"n":"dmgTextIdx","t":4,"rt":$n[0].Int32,"sn":"dmgTextIdx","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"dmgTotal","t":4,"rt":$n[0].Int32,"sn":"dmgTotal","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"effectText","t":4,"rt":$n[3].Text,"sn":"effectText"},{"a":2,"n":"endCatcher","t":4,"rt":$n[3].Button,"sn":"endCatcher"},{"a":1,"n":"ended","t":4,"rt":$n[0].Boolean,"sn":"ended","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"equipClip","t":4,"rt":$n[1].AudioClip,"sn":"equipClip"},{"a":2,"n":"explosion","t":4,"rt":$n[1].SpriteRenderer,"sn":"explosion"},{"a":2,"n":"extraMeleeWeaponIndex","t":4,"rt":$n[0].Int32,"sn":"extraMeleeWeaponIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"failClip","t":4,"rt":$n[1].AudioClip,"sn":"failClip"},{"a":2,"n":"fireworks","t":4,"rt":System.Array.type(UnityEngine.ParticleSystem),"sn":"fireworks"},{"a":2,"n":"fistProjectile","t":4,"rt":$n[1].SpriteRenderer,"sn":"fistProjectile"},{"at":[new UnityEngine.HeaderAttribute("Buddy KB (tuy chon, mac dinh = hanh vi Meme)")],"a":2,"n":"fixedMonsterIdx","t":4,"rt":$n[0].Int32,"sn":"fixedMonsterIdx","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"flameFx","t":4,"rt":$n[1].ParticleSystem,"sn":"flameFx"},{"a":2,"n":"flameTime","t":4,"rt":$n[0].Single,"sn":"flameTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"flameWeaponIndex","t":4,"rt":$n[0].Int32,"sn":"flameWeaponIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"fullHelmetIndex","t":4,"rt":$n[0].Int32,"sn":"fullHelmetIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"fullHelmetLift","t":4,"rt":$n[0].Single,"sn":"fullHelmetLift","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fullHelmetWidthMul","t":4,"rt":$n[0].Single,"sn":"fullHelmetWidthMul","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"hand","t":4,"rt":$n[1].RectTransform,"sn":"hand"},{"a":1,"n":"handT","t":4,"rt":$n[0].Single,"sn":"handT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"helmetWidthMul","t":4,"rt":$n[0].Single,"sn":"helmetWidthMul","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"hero","t":4,"rt":HeroRig,"sn":"hero"},{"a":1,"n":"heroColors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"heroColors"},{"a":1,"n":"heroIdx","t":4,"rt":$n[0].Int32,"sn":"heroIdx","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"heroMeleeAdvance","t":4,"rt":$n[0].Single,"sn":"heroMeleeAdvance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"heroStartPos","t":4,"rt":$n[1].Vector3,"sn":"heroStartPos"},{"a":2,"n":"heroes","t":4,"rt":System.Array.type(HeroRig),"sn":"heroes"},{"a":2,"n":"hitClip","t":4,"rt":$n[1].AudioClip,"sn":"hitClip"},{"a":1,"n":"killStarted","t":4,"rt":$n[0].Boolean,"sn":"killStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastWin","t":4,"rt":$n[0].Boolean,"sn":"lastWin","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"luna","t":4,"rt":LunaController,"sn":"luna"},{"a":2,"n":"meleeWeaponIndex","t":4,"rt":$n[0].Int32,"sn":"meleeWeaponIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"modIcons","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"modIcons"},{"a":2,"n":"monsterHP","t":4,"rt":$n[0].Int32,"sn":"monsterHP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"monsterIcons","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"monsterIcons"},{"a":1,"n":"monsterIdx","t":4,"rt":$n[0].Int32,"sn":"monsterIdx","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"monsterStartPos","t":4,"rt":$n[1].Vector3,"sn":"monsterStartPos"},{"a":2,"n":"monsterStopDistance","t":4,"rt":$n[0].Single,"sn":"monsterStopDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"monsterWalkTime","t":4,"rt":$n[0].Single,"sn":"monsterWalkTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"monsters","t":4,"rt":System.Array.type(MonsterView),"sn":"monsters"},{"a":2,"n":"muzzleFlash","t":4,"rt":$n[1].SpriteRenderer,"sn":"muzzleFlash"},{"a":2,"n":"normalArmorBonus","t":4,"rt":$n[0].Int32,"sn":"normalArmorBonus","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"normalWeaponDamage","t":4,"rt":$n[0].Int32,"sn":"normalWeaponDamage","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"popup","t":4,"rt":$n[1].GameObject,"sn":"popup"},{"a":2,"n":"popupButton","t":4,"rt":$n[3].Button,"sn":"popupButton"},{"a":2,"n":"popupButtonLabel","t":4,"rt":$n[3].Text,"sn":"popupButtonLabel"},{"a":2,"n":"popupTitle","t":4,"rt":$n[3].Text,"sn":"popupTitle"},{"a":2,"n":"projectileFlightTime","t":4,"rt":$n[0].Array.type(System.Single),"sn":"projectileFlightTime"},{"a":2,"n":"projectileSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"projectileSprites"},{"a":2,"n":"projectileWorldSize","t":4,"rt":$n[0].Array.type(System.Single),"sn":"projectileWorldSize"},{"a":2,"n":"rangedAimAngle","t":4,"rt":$n[0].Single,"sn":"rangedAimAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"recoilAngle","t":4,"rt":$n[0].Single,"sn":"recoilAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"retried","t":4,"rt":$n[0].Boolean,"sn":"retried","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"rocket","t":4,"rt":$n[1].SpriteRenderer,"sn":"rocket"},{"a":2,"n":"rocketExplodes","t":4,"rt":$n[0].Boolean,"sn":"rocketExplodes","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"rocketSpin","t":4,"rt":$n[0].Single,"sn":"rocketSpin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rocketWeaponIndex","t":4,"rt":$n[0].Int32,"sn":"rocketWeaponIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"rpgClip","t":4,"rt":$n[1].AudioClip,"sn":"rpgClip"},{"at":[new UnityEngine.HeaderAttribute("Audio")],"a":2,"n":"sfx","t":4,"rt":$n[1].AudioSource,"sn":"sfx"},{"a":1,"n":"shotIndex","t":4,"rt":$n[0].Int32,"sn":"shotIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"shotTotal","t":4,"rt":$n[0].Int32,"sn":"shotTotal","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"slotButtons","t":4,"rt":System.Array.type(UnityEngine.UI.Button),"sn":"slotButtons"},{"a":2,"n":"slotIcons","t":4,"rt":System.Array.type(UnityEngine.UI.Image),"sn":"slotIcons"},{"a":1,"n":"stage","t":4,"rt":MemeFlow.Stage,"sn":"stage","box":function ($v) { return Bridge.box($v, MemeFlow.Stage, System.Enum.toStringFn(MemeFlow.Stage));}},{"a":2,"n":"stageTitles","t":4,"rt":$n[0].Array.type(System.String),"sn":"stageTitles"},{"a":1,"n":"started","t":4,"rt":$n[0].Boolean,"sn":"started","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"swingClip","t":4,"rt":$n[1].AudioClip,"sn":"swingClip"},{"a":2,"n":"titleBar","t":4,"rt":$n[1].GameObject,"sn":"titleBar"},{"a":2,"n":"titleText","t":4,"rt":$n[3].Text,"sn":"titleText"},{"a":1,"n":"w005","t":4,"rt":$n[1].WaitForSeconds,"sn":"w005"},{"a":1,"n":"w015","t":4,"rt":$n[1].WaitForSeconds,"sn":"w015"},{"a":1,"n":"w02","t":4,"rt":$n[1].WaitForSeconds,"sn":"w02"},{"a":1,"n":"w03","t":4,"rt":$n[1].WaitForSeconds,"sn":"w03"},{"a":1,"n":"w04","t":4,"rt":$n[1].WaitForSeconds,"sn":"w04"},{"a":1,"n":"w08","t":4,"rt":$n[1].WaitForSeconds,"sn":"w08"},{"a":2,"n":"weaponGrip","t":4,"rt":$n[0].Array.type(System.Single),"sn":"weaponGrip"},{"a":1,"n":"weaponIdx","t":4,"rt":$n[0].Int32,"sn":"weaponIdx","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"weaponRotation","t":4,"rt":$n[0].Array.type(System.Single),"sn":"weaponRotation"},{"a":2,"n":"weaponShotGap","t":4,"rt":$n[0].Array.type(System.Single),"sn":"weaponShotGap"},{"a":2,"n":"weaponShots","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"weaponShots"},{"a":2,"n":"weaponSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"weaponSprites"},{"a":2,"n":"weaponWorldSize","t":4,"rt":$n[0].Array.type(System.Single),"sn":"weaponWorldSize"},{"a":2,"n":"winClip","t":4,"rt":$n[1].AudioClip,"sn":"winClip"},{"a":2,"n":"winWeaponIdx","t":4,"rt":$n[0].Int32,"sn":"winWeaponIdx","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"world","t":4,"rt":$n[1].Transform,"sn":"world"},{"a":1,"n":"worldBase","t":4,"rt":$n[1].Vector3,"sn":"worldBase"}]}; }, $n);
    /*MemeFlow end.*/

    /*MemeFlow+Stage start.*/
    $m("MemeFlow.Stage", function () { return {"td":MemeFlow,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Armor","is":true,"t":4,"rt":MemeFlow.Stage,"sn":"Armor","box":function ($v) { return Bridge.box($v, MemeFlow.Stage, System.Enum.toStringFn(MemeFlow.Stage));}},{"a":2,"n":"Busy","is":true,"t":4,"rt":MemeFlow.Stage,"sn":"Busy","box":function ($v) { return Bridge.box($v, MemeFlow.Stage, System.Enum.toStringFn(MemeFlow.Stage));}},{"a":2,"n":"Chest","is":true,"t":4,"rt":MemeFlow.Stage,"sn":"Chest","box":function ($v) { return Bridge.box($v, MemeFlow.Stage, System.Enum.toStringFn(MemeFlow.Stage));}},{"a":2,"n":"Ended","is":true,"t":4,"rt":MemeFlow.Stage,"sn":"Ended","box":function ($v) { return Bridge.box($v, MemeFlow.Stage, System.Enum.toStringFn(MemeFlow.Stage));}},{"a":2,"n":"Mod","is":true,"t":4,"rt":MemeFlow.Stage,"sn":"Mod","box":function ($v) { return Bridge.box($v, MemeFlow.Stage, System.Enum.toStringFn(MemeFlow.Stage));}},{"a":2,"n":"Monster","is":true,"t":4,"rt":MemeFlow.Stage,"sn":"Monster","box":function ($v) { return Bridge.box($v, MemeFlow.Stage, System.Enum.toStringFn(MemeFlow.Stage));}},{"a":2,"n":"Result","is":true,"t":4,"rt":MemeFlow.Stage,"sn":"Result","box":function ($v) { return Bridge.box($v, MemeFlow.Stage, System.Enum.toStringFn(MemeFlow.Stage));}},{"a":2,"n":"Weapon","is":true,"t":4,"rt":MemeFlow.Stage,"sn":"Weapon","box":function ($v) { return Bridge.box($v, MemeFlow.Stage, System.Enum.toStringFn(MemeFlow.Stage));}}]}; }, $n);
    /*MemeFlow+Stage end.*/

    /*MonsterView start.*/
    $m("MonsterView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AttackLunge","t":8,"sn":"AttackLunge","rt":$n[2].IEnumerator},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CacheLimbs","t":8,"pi":[{"n":"limbs","pt":System.Array.type(UnityEngine.Transform),"ps":0},{"n":"basePos","out":true,"pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"top","out":true,"pt":$n[0].Array.type(System.Single),"ps":2}],"sn":"CacheLimbs","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Transform),System.Array.type(UnityEngine.Vector3),$n[0].Array.type(System.Single)]},{"a":2,"n":"Die","t":8,"sn":"Die","rt":$n[2].IEnumerator},{"a":1,"n":"HitFx","t":8,"sn":"HitFx","rt":$n[2].IEnumerator},{"a":2,"n":"Init","t":8,"pi":[{"n":"maxHealth","pt":$n[0].Int32,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"PoseLimb","t":8,"pi":[{"n":"t","pt":$n[1].Transform,"ps":0},{"n":"basePos","pt":$n[1].Vector3,"ps":1},{"n":"top","pt":$n[0].Single,"ps":2},{"n":"angle","pt":$n[0].Single,"ps":3}],"sn":"PoseLimb","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].Vector3,$n[0].Single,$n[0].Single]},{"a":1,"n":"ResetLimbs","t":8,"sn":"ResetLimbs","rt":$n[0].Void},{"a":2,"n":"Resist","t":8,"sn":"Resist","rt":$n[2].IEnumerator},{"a":1,"n":"SetHpVisual","t":8,"sn":"SetHpVisual","rt":$n[0].Void},{"a":2,"n":"Spawn","t":8,"sn":"Spawn","rt":$n[2].IEnumerator},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"dmg","pt":$n[0].Int32,"ps":0}],"sn":"TakeDamage","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"WalkTo","t":8,"pi":[{"n":"worldX","pt":$n[0].Single,"ps":0},{"n":"dur","pt":$n[0].Single,"ps":1}],"sn":"WalkTo","rt":$n[2].IEnumerator,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"Hp","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Hp","t":8,"rt":$n[0].Int32,"fg":"Hp","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Hp"},{"a":2,"n":"IsDead","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsDead","t":8,"rt":$n[0].Boolean,"fg":"IsDead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsDead"},{"a":2,"n":"IsWalking","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsWalking","t":8,"rt":$n[0].Boolean,"fg":"IsWalking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsWalking"},{"a":1,"n":"armBase","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"armBase"},{"a":1,"n":"armTop","t":4,"rt":$n[0].Array.type(System.Single),"sn":"armTop"},{"a":2,"n":"arms","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"arms"},{"a":1,"n":"baseColors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"baseColors"},{"a":2,"n":"body","t":4,"rt":$n[1].Transform,"sn":"body"},{"a":1,"n":"bodyBase","t":4,"rt":$n[1].Vector3,"sn":"bodyBase"},{"a":1,"n":"busy","t":4,"rt":$n[0].Boolean,"sn":"busy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"dead","t":4,"rt":$n[0].Boolean,"sn":"dead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"headAnchor","t":4,"rt":$n[1].Transform,"sn":"headAnchor"},{"a":1,"n":"hp","t":4,"rt":$n[0].Int32,"sn":"hp","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"hpFill","t":4,"rt":$n[1].Transform,"sn":"hpFill"},{"a":2,"n":"hpRoot","t":4,"rt":$n[1].GameObject,"sn":"hpRoot"},{"a":1,"n":"idleT","t":4,"rt":$n[0].Single,"sn":"idleT","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"legBase","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"legBase"},{"a":1,"n":"legTop","t":4,"rt":$n[0].Array.type(System.Single),"sn":"legTop"},{"a":2,"n":"legs","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"legs"},{"a":1,"n":"maxHp","t":4,"rt":$n[0].Int32,"sn":"maxHp","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"parts","t":4,"rt":System.Array.type(UnityEngine.SpriteRenderer),"sn":"parts"},{"a":1,"n":"spin","t":4,"rt":$n[0].Array.type(System.Single),"sn":"spin"},{"a":1,"n":"vel","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"vel"},{"a":1,"n":"walking","t":4,"rt":$n[0].Boolean,"sn":"walking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*MonsterView end.*/

    /*TextShadowCopy start.*/
    $m("TextShadowCopy", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"face","t":4,"rt":$n[3].Text,"sn":"face"},{"a":2,"n":"shadowColor","t":4,"rt":$n[1].Color,"sn":"shadowColor"},{"a":1,"n":"src","t":4,"rt":$n[3].Text,"sn":"src"}]}; }, $n);
    /*TextShadowCopy end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});

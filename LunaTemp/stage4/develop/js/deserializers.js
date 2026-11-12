var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointSpring' )
  var i463 = data
  i462.spring = i463[0]
  i462.damper = i463[1]
  i462.targetPosition = i463[2]
  return i462
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointMotor' )
  var i465 = data
  i464.m_TargetVelocity = i465[0]
  i464.m_Force = i465[1]
  i464.m_FreeSpin = i465[2]
  return i464
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointLimits' )
  var i467 = data
  i466.m_Min = i467[0]
  i466.m_Max = i467[1]
  i466.m_Bounciness = i467[2]
  i466.m_BounceMinVelocity = i467[3]
  i466.m_ContactDistance = i467[4]
  i466.minBounce = i467[5]
  i466.maxBounce = i467[6]
  return i466
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointDrive' )
  var i469 = data
  i468.m_PositionSpring = i469[0]
  i468.m_PositionDamper = i469[1]
  i468.m_MaximumForce = i469[2]
  i468.m_UseAcceleration = i469[3]
  return i468
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i471 = data
  i470.m_Spring = i471[0]
  i470.m_Damper = i471[1]
  return i470
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i473 = data
  i472.m_Limit = i473[0]
  i472.m_Bounciness = i473[1]
  i472.m_ContactDistance = i473[2]
  return i472
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i475 = data
  i474.m_ExtremumSlip = i475[0]
  i474.m_ExtremumValue = i475[1]
  i474.m_AsymptoteSlip = i475[2]
  i474.m_AsymptoteValue = i475[3]
  i474.m_Stiffness = i475[4]
  return i474
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i477 = data
  i476.m_LowerAngle = i477[0]
  i476.m_UpperAngle = i477[1]
  return i476
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i479 = data
  i478.m_MotorSpeed = i479[0]
  i478.m_MaximumMotorTorque = i479[1]
  return i478
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i481 = data
  i480.m_DampingRatio = i481[0]
  i480.m_Frequency = i481[1]
  i480.m_Angle = i481[2]
  return i480
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i483 = data
  i482.m_LowerTranslation = i483[0]
  i482.m_UpperTranslation = i483[1]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i485 = data
  i484.name = i485[0]
  i484.width = i485[1]
  i484.height = i485[2]
  i484.mipmapCount = i485[3]
  i484.anisoLevel = i485[4]
  i484.filterMode = i485[5]
  i484.hdr = !!i485[6]
  i484.format = i485[7]
  i484.wrapMode = i485[8]
  i484.alphaIsTransparency = !!i485[9]
  i484.alphaSource = i485[10]
  i484.graphicsFormat = i485[11]
  i484.sRGBTexture = !!i485[12]
  i484.desiredColorSpace = i485[13]
  i484.wrapU = i485[14]
  i484.wrapV = i485[15]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i486 = root || new pc.UnityMaterial()
  var i487 = data
  i486.name = i487[0]
  request.r(i487[1], i487[2], 0, i486, 'shader')
  i486.renderQueue = i487[3]
  i486.enableInstancing = !!i487[4]
  var i489 = i487[5]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i489[i + 0]) );
  }
  i486.floatParameters = i488
  var i491 = i487[6]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i491[i + 0]) );
  }
  i486.colorParameters = i490
  var i493 = i487[7]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i493[i + 0]) );
  }
  i486.vectorParameters = i492
  var i495 = i487[8]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i495[i + 0]) );
  }
  i486.textureParameters = i494
  var i497 = i487[9]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i497[i + 0]) );
  }
  i486.materialFlags = i496
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i501 = data
  i500.name = i501[0]
  i500.value = i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i505 = data
  i504.name = i505[0]
  i504.value = new pc.Color(i505[1], i505[2], i505[3], i505[4])
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = new pc.Vec4( i509[1], i509[2], i509[3], i509[4] )
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i513 = data
  i512.name = i513[0]
  request.r(i513[1], i513[2], 0, i512, 'value')
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i517 = data
  i516.name = i517[0]
  i516.enabled = !!i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i519 = data
  i518.position = new pc.Vec3( i519[0], i519[1], i519[2] )
  i518.scale = new pc.Vec3( i519[3], i519[4], i519[5] )
  i518.rotation = new pc.Quat(i519[6], i519[7], i519[8], i519[9])
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i521 = data
  i520.radius = i521[0]
  i520.enabled = !!i521[1]
  i520.isTrigger = !!i521[2]
  i520.usedByEffector = !!i521[3]
  i520.density = i521[4]
  i520.offset = new pc.Vec2( i521[5], i521[6] )
  request.r(i521[7], i521[8], 0, i520, 'material')
  return i520
}

Deserializers["BulletController"] = function (request, data, root) {
  var i522 = root || request.c( 'BulletController' )
  var i523 = data
  i522.speed = i523[0]
  i522.damage = i523[1]
  request.r(i523[2], i523[3], 0, i522, 'hitMonsterSound')
  request.r(i523[4], i523[5], 0, i522, 'hitSound')
  i522.lifeTime = i523[6]
  i522.hit = !!i523[7]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i525 = data
  i524.color = new pc.Color(i525[0], i525[1], i525[2], i525[3])
  request.r(i525[4], i525[5], 0, i524, 'sprite')
  i524.flipX = !!i525[6]
  i524.flipY = !!i525[7]
  i524.drawMode = i525[8]
  i524.size = new pc.Vec2( i525[9], i525[10] )
  i524.tileMode = i525[11]
  i524.adaptiveModeThreshold = i525[12]
  i524.maskInteraction = i525[13]
  i524.spriteSortPoint = i525[14]
  i524.enabled = !!i525[15]
  request.r(i525[16], i525[17], 0, i524, 'sharedMaterial')
  var i527 = i525[18]
  var i526 = []
  for(var i = 0; i < i527.length; i += 2) {
  request.r(i527[i + 0], i527[i + 1], 2, i526, '')
  }
  i524.sharedMaterials = i526
  i524.receiveShadows = !!i525[19]
  i524.shadowCastingMode = i525[20]
  i524.sortingLayerID = i525[21]
  i524.sortingOrder = i525[22]
  i524.lightmapIndex = i525[23]
  i524.lightmapSceneIndex = i525[24]
  i524.lightmapScaleOffset = new pc.Vec4( i525[25], i525[26], i525[27], i525[28] )
  i524.lightProbeUsage = i525[29]
  i524.reflectionProbeUsage = i525[30]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i531 = data
  i530.name = i531[0]
  i530.tagId = i531[1]
  i530.enabled = !!i531[2]
  i530.isStatic = !!i531[3]
  i530.layer = i531[4]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i533 = data
  i532.sortingLayerIndex = i533[0]
  i532.sortingOrder = i533[1]
  i532.sortingLayerName = i533[2]
  i532.enabled = !!i533[3]
  return i532
}

Deserializers["RagdollBalance"] = function (request, data, root) {
  var i534 = root || request.c( 'RagdollBalance' )
  var i535 = data
  i534.walkSpeed = i535[0]
  request.r(i535[1], i535[2], 0, i534, 'torso')
  request.r(i535[3], i535[4], 0, i534, 'head')
  request.r(i535[5], i535[6], 0, i534, 'neck')
  var i537 = i535[7]
  var i536 = []
  for(var i = 0; i < i537.length; i += 2) {
  request.r(i537[i + 0], i537[i + 1], 2, i536, '')
  }
  i534.spine = i536
  i534.legFront = request.d('RagdollBalance+Limb', i535[8], i534.legFront)
  i534.legBack = request.d('RagdollBalance+Limb', i535[9], i534.legBack)
  i534.armFront = request.d('RagdollBalance+Limb', i535[10], i534.armFront)
  i534.armBack = request.d('RagdollBalance+Limb', i535[11], i534.armBack)
  request.r(i535[12], i535[13], 0, i534, 'footFront')
  request.r(i535[14], i535[15], 0, i534, 'footBack')
  request.r(i535[16], i535[17], 0, i534, 'aimPoint')
  request.r(i535[18], i535[19], 0, i534, 'gunSprite')
  i534.standHeight = i535[20]
  i534.headRestHeight = i535[21]
  i534.uprightGain = i535[22]
  i534.uprightDamp = i535[23]
  i534.footGain = i535[24]
  i534.walkLean = i535[25]
  i534.headSpring = i535[26]
  i534.headDamp = i535[27]
  i534.neckStrength = i535[28]
  i534.spineStrength = i535[29]
  i534.hipStrength = i535[30]
  i534.kneeStrength = i535[31]
  i534.ankleStrength = i535[32]
  i534.muscleGain = i535[33]
  i534.muscleMaxSpeed = i535[34]
  i534.cadence = i535[35]
  i534.hipSwing = i535[36]
  i534.hipForwardSign = i535[37]
  i534.stepLift = i535[38]
  i534.kneeBend = i535[39]
  i534.assistGain = i535[40]
  i534.pushOffset = i535[41]
  i534.stanceFriction = i535[42]
  i534.swingFriction = i535[43]
  i534.armIdleStrength = i535[44]
  i534.armReachStrength = i535[45]
  i534.armGain = i535[46]
  i534.armMaxSpeed = i535[47]
  i534.elbowStrength = i535[48]
  i534.aimReadyAngle = i535[49]
  i534.raiseTime = i535[50]
  i534.gunAlongArm = i535[51]
  i534.idleGunTilt = i535[52]
  i534.gunTurnSpeed = i535[53]
  i534.gunGrip = i535[54]
  return i534
}

Deserializers["RagdollBalance+Limb"] = function (request, data, root) {
  var i540 = root || request.c( 'RagdollBalance+Limb' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'Upper')
  request.r(i541[2], i541[3], 0, i540, 'Middle')
  request.r(i541[4], i541[5], 0, i540, 'Lower')
  return i540
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i542 = root || request.c( 'MonsterController' )
  var i543 = data
  i542.maxHP = i543[0]
  i542.currentHP = i543[1]
  var i545 = i543[2]
  var i544 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i545.length; i += 1) {
    i544.add(request.d('Piece', i545[i + 0]));
  }
  i542.pieces = i544
  request.r(i543[3], i543[4], 0, i542, 'deadSFX')
  i542.maxForce = new pc.Vec2( i543[5], i543[6] )
  i542.minForce = new pc.Vec2( i543[7], i543[8] )
  request.r(i543[9], i543[10], 0, i542, 'balance')
  i542.isDead = !!i543[11]
  request.r(i543[12], i543[13], 0, i542, 'trigger')
  request.r(i543[14], i543[15], 0, i542, 'groundCheck')
  i542.reportDeath = !!i543[16]
  i542.speed = i543[17]
  request.r(i543[18], i543[19], 0, i542, 'body')
  return i542
}

Deserializers["Piece"] = function (request, data, root) {
  var i548 = root || request.c( 'Piece' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'Joint')
  request.r(i549[2], i549[3], 0, i548, 'Rb')
  return i548
}

Deserializers["MonsterSkin"] = function (request, data, root) {
  var i550 = root || request.c( 'MonsterSkin' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'library')
  var i553 = i551[2]
  var i552 = []
  for(var i = 0; i < i553.length; i += 2) {
  request.r(i553[i + 0], i553[i + 1], 2, i552, '')
  }
  i550.renderers = i552
  i550.slices = i551[3]
  i550.slot = i551[4]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i557 = data
  i556.usedByComposite = !!i557[0]
  i556.autoTiling = !!i557[1]
  i556.size = new pc.Vec2( i557[2], i557[3] )
  i556.edgeRadius = i557[4]
  i556.enabled = !!i557[5]
  i556.isTrigger = !!i557[6]
  i556.usedByEffector = !!i557[7]
  i556.density = i557[8]
  i556.offset = new pc.Vec2( i557[9], i557[10] )
  request.r(i557[11], i557[12], 0, i556, 'material')
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i559 = data
  i558.bodyType = i559[0]
  request.r(i559[1], i559[2], 0, i558, 'material')
  i558.simulated = !!i559[3]
  i558.useAutoMass = !!i559[4]
  i558.mass = i559[5]
  i558.drag = i559[6]
  i558.angularDrag = i559[7]
  i558.gravityScale = i559[8]
  i558.collisionDetectionMode = i559[9]
  i558.sleepMode = i559[10]
  i558.constraints = i559[11]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i561 = data
  i560.useLimits = !!i561[0]
  i560.limits = request.d('UnityEngine.JointAngleLimits2D', i561[1], i560.limits)
  i560.useMotor = !!i561[2]
  i560.motor = request.d('UnityEngine.JointMotor2D', i561[3], i560.motor)
  i560.anchor = new pc.Vec2( i561[4], i561[5] )
  i560.connectedAnchor = new pc.Vec2( i561[6], i561[7] )
  i560.autoConfigureConnectedAnchor = !!i561[8]
  request.r(i561[9], i561[10], 0, i560, 'connectedBody')
  i560.breakForce = i561[11]
  i560.breakTorque = i561[12]
  i560.enableCollision = !!i561[13]
  i560.enabled = !!i561[14]
  return i560
}

Deserializers["MonsterTrigger"] = function (request, data, root) {
  var i562 = root || request.c( 'MonsterTrigger' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'player')
  return i562
}

Deserializers["GroundCheck"] = function (request, data, root) {
  var i564 = root || request.c( 'GroundCheck' )
  var i565 = data
  i564.OnGround = !!i565[0]
  return i564
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i566 = root || request.c( 'PlayerController' )
  var i567 = data
  i566.IsZombie = !!i567[0]
  i566.OnDead = request.d('System.Action', i567[1], i566.OnDead)
  var i569 = i567[2]
  var i568 = new (System.Collections.Generic.List$1(Bridge.ns('BodyRenderer')))
  for(var i = 0; i < i569.length; i += 1) {
    i568.add(request.d('BodyRenderer', i569[i + 0]));
  }
  i566.bodyRenderers = i568
  request.r(i567[3], i567[4], 0, i566, 'biteSound')
  request.r(i567[5], i567[6], 0, i566, 'zombieSound')
  request.r(i567[7], i567[8], 0, i566, 'body')
  request.r(i567[9], i567[10], 0, i566, 'zombieBrain')
  request.r(i567[11], i567[12], 0, i566, 'zombieTrigger')
  request.r(i567[13], i567[14], 0, i566, 'zombieGround')
  request.r(i567[15], i567[16], 0, i566, 'attack')
  request.r(i567[17], i567[18], 0, i566, 'humanTrigger')
  i566.turnDelay = i567[19]
  i566.turnHop = i567[20]
  i566.turnArmFlail = i567[21]
  return i566
}

Deserializers["System.Action"] = function (request, data, root) {
  var i570 = root || request.c( 'System.Action' )
  var i571 = data
  return i570
}

Deserializers["BodyRenderer"] = function (request, data, root) {
  var i574 = root || request.c( 'BodyRenderer' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'Renderer')
  request.r(i575[2], i575[3], 0, i574, 'ZSprite')
  return i574
}

Deserializers["SprunkySkin"] = function (request, data, root) {
  var i576 = root || request.c( 'SprunkySkin' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'library')
  request.r(i577[2], i577[3], 0, i576, 'player')
  var i579 = i577[4]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576.renderers = i578
  i576.slices = i577[5]
  return i576
}

Deserializers["PlayerAttack"] = function (request, data, root) {
  var i580 = root || request.c( 'PlayerAttack' )
  var i581 = data
  i580.ShootCD = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'balance')
  request.r(i581[3], i581[4], 0, i580, 'gun')
  request.r(i581[5], i581[6], 0, i580, 'bulletPrefab')
  i580.onCD = !!i581[7]
  request.r(i581[8], i581[9], 0, i580, 'shootSound')
  i580.recoil = i581[10]
  request.r(i581[11], i581[12], 0, i580, 'muzzleFlash')
  request.r(i581[13], i581[14], 0, i580, 'playerTrigger')
  i580.droppedGunLifetime = i581[15]
  request.r(i581[16], i581[17], 0, i580, 'player')
  return i580
}

Deserializers["SprunkyOutfit"] = function (request, data, root) {
  var i582 = root || request.c( 'SprunkyOutfit' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'library')
  request.r(i583[2], i583[3], 0, i582, 'hat')
  request.r(i583[4], i583[5], 0, i582, 'chest')
  request.r(i583[6], i583[7], 0, i582, 'lower')
  i582.hatChance = i583[8]
  return i582
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i584 = root || request.c( 'BodyPiece' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'player')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i587 = data
  i586.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i587[0], i586.main)
  i586.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i587[1], i586.colorBySpeed)
  i586.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i587[2], i586.colorOverLifetime)
  i586.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i587[3], i586.emission)
  i586.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i587[4], i586.rotationBySpeed)
  i586.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i587[5], i586.rotationOverLifetime)
  i586.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i587[6], i586.shape)
  i586.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i587[7], i586.sizeBySpeed)
  i586.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i587[8], i586.sizeOverLifetime)
  i586.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i587[9], i586.textureSheetAnimation)
  i586.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i587[10], i586.velocityOverLifetime)
  i586.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i587[11], i586.noise)
  i586.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i587[12], i586.inheritVelocity)
  i586.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i587[13], i586.forceOverLifetime)
  i586.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i587[14], i586.limitVelocityOverLifetime)
  i586.useAutoRandomSeed = !!i587[15]
  i586.randomSeed = i587[16]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemMain()
  var i589 = data
  i588.duration = i589[0]
  i588.loop = !!i589[1]
  i588.prewarm = !!i589[2]
  i588.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.startDelay)
  i588.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[4], i588.startLifetime)
  i588.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[5], i588.startSpeed)
  i588.startSize3D = !!i589[6]
  i588.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[7], i588.startSizeX)
  i588.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[8], i588.startSizeY)
  i588.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[9], i588.startSizeZ)
  i588.startRotation3D = !!i589[10]
  i588.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[11], i588.startRotationX)
  i588.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[12], i588.startRotationY)
  i588.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[13], i588.startRotationZ)
  i588.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i589[14], i588.startColor)
  i588.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[15], i588.gravityModifier)
  i588.simulationSpace = i589[16]
  request.r(i589[17], i589[18], 0, i588, 'customSimulationSpace')
  i588.simulationSpeed = i589[19]
  i588.useUnscaledTime = !!i589[20]
  i588.scalingMode = i589[21]
  i588.playOnAwake = !!i589[22]
  i588.maxParticles = i589[23]
  i588.emitterVelocityMode = i589[24]
  i588.stopAction = i589[25]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i590 = root || new pc.MinMaxCurve()
  var i591 = data
  i590.mode = i591[0]
  i590.curveMin = new pc.AnimationCurve( { keys_flow: i591[1] } )
  i590.curveMax = new pc.AnimationCurve( { keys_flow: i591[2] } )
  i590.curveMultiplier = i591[3]
  i590.constantMin = i591[4]
  i590.constantMax = i591[5]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i592 = root || new pc.MinMaxGradient()
  var i593 = data
  i592.mode = i593[0]
  i592.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i593[1], i592.gradientMin)
  i592.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i593[2], i592.gradientMax)
  i592.colorMin = new pc.Color(i593[3], i593[4], i593[5], i593[6])
  i592.colorMax = new pc.Color(i593[7], i593[8], i593[9], i593[10])
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i595 = data
  i594.mode = i595[0]
  var i597 = i595[1]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i597[i + 0]) );
  }
  i594.colorKeys = i596
  var i599 = i595[2]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i599[i + 0]) );
  }
  i594.alphaKeys = i598
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemColorBySpeed()
  var i601 = data
  i600.enabled = !!i601[0]
  i600.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i601[1], i600.color)
  i600.range = new pc.Vec2( i601[2], i601[3] )
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i605 = data
  i604.color = new pc.Color(i605[0], i605[1], i605[2], i605[3])
  i604.time = i605[4]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i609 = data
  i608.alpha = i609[0]
  i608.time = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i610 = root || new pc.ParticleSystemColorOverLifetime()
  var i611 = data
  i610.enabled = !!i611[0]
  i610.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i611[1], i610.color)
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i612 = root || new pc.ParticleSystemEmitter()
  var i613 = data
  i612.enabled = !!i613[0]
  i612.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[1], i612.rateOverTime)
  i612.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[2], i612.rateOverDistance)
  var i615 = i613[3]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i615[i + 0]) );
  }
  i612.bursts = i614
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemBurst()
  var i619 = data
  i618.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[0], i618.count)
  i618.cycleCount = i619[1]
  i618.minCount = i619[2]
  i618.maxCount = i619[3]
  i618.repeatInterval = i619[4]
  i618.time = i619[5]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i620 = root || new pc.ParticleSystemRotationBySpeed()
  var i621 = data
  i620.enabled = !!i621[0]
  i620.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[1], i620.x)
  i620.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[2], i620.y)
  i620.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[3], i620.z)
  i620.separateAxes = !!i621[4]
  i620.range = new pc.Vec2( i621[5], i621[6] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemRotationOverLifetime()
  var i623 = data
  i622.enabled = !!i623[0]
  i622.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[1], i622.x)
  i622.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[2], i622.y)
  i622.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[3], i622.z)
  i622.separateAxes = !!i623[4]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemShape()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.shapeType = i625[1]
  i624.randomDirectionAmount = i625[2]
  i624.sphericalDirectionAmount = i625[3]
  i624.randomPositionAmount = i625[4]
  i624.alignToDirection = !!i625[5]
  i624.radius = i625[6]
  i624.radiusMode = i625[7]
  i624.radiusSpread = i625[8]
  i624.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[9], i624.radiusSpeed)
  i624.radiusThickness = i625[10]
  i624.angle = i625[11]
  i624.length = i625[12]
  i624.boxThickness = new pc.Vec3( i625[13], i625[14], i625[15] )
  i624.meshShapeType = i625[16]
  request.r(i625[17], i625[18], 0, i624, 'mesh')
  request.r(i625[19], i625[20], 0, i624, 'meshRenderer')
  request.r(i625[21], i625[22], 0, i624, 'skinnedMeshRenderer')
  i624.useMeshMaterialIndex = !!i625[23]
  i624.meshMaterialIndex = i625[24]
  i624.useMeshColors = !!i625[25]
  i624.normalOffset = i625[26]
  i624.arc = i625[27]
  i624.arcMode = i625[28]
  i624.arcSpread = i625[29]
  i624.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[30], i624.arcSpeed)
  i624.donutRadius = i625[31]
  i624.position = new pc.Vec3( i625[32], i625[33], i625[34] )
  i624.rotation = new pc.Vec3( i625[35], i625[36], i625[37] )
  i624.scale = new pc.Vec3( i625[38], i625[39], i625[40] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemSizeBySpeed()
  var i627 = data
  i626.enabled = !!i627[0]
  i626.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[1], i626.x)
  i626.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[2], i626.y)
  i626.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[3], i626.z)
  i626.separateAxes = !!i627[4]
  i626.range = new pc.Vec2( i627[5], i627[6] )
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemSizeOverLifetime()
  var i629 = data
  i628.enabled = !!i629[0]
  i628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[1], i628.x)
  i628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[2], i628.y)
  i628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[3], i628.z)
  i628.separateAxes = !!i629[4]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.mode = i631[1]
  i630.animation = i631[2]
  i630.numTilesX = i631[3]
  i630.numTilesY = i631[4]
  i630.useRandomRow = !!i631[5]
  i630.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[6], i630.frameOverTime)
  i630.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[7], i630.startFrame)
  i630.cycleCount = i631[8]
  i630.rowIndex = i631[9]
  i630.flipU = i631[10]
  i630.flipV = i631[11]
  i630.spriteCount = i631[12]
  var i633 = i631[13]
  var i632 = []
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 2, i632, '')
  }
  i630.sprites = i632
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[1], i636.x)
  i636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[2], i636.y)
  i636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.z)
  i636.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[4], i636.radial)
  i636.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[5], i636.speedModifier)
  i636.space = i637[6]
  i636.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[7], i636.orbitalX)
  i636.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[8], i636.orbitalY)
  i636.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[9], i636.orbitalZ)
  i636.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[10], i636.orbitalOffsetX)
  i636.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[11], i636.orbitalOffsetY)
  i636.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[12], i636.orbitalOffsetZ)
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemNoise()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.separateAxes = !!i639[1]
  i638.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[2], i638.strengthX)
  i638.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.strengthY)
  i638.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[4], i638.strengthZ)
  i638.frequency = i639[5]
  i638.damping = !!i639[6]
  i638.octaveCount = i639[7]
  i638.octaveMultiplier = i639[8]
  i638.octaveScale = i639[9]
  i638.quality = i639[10]
  i638.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[11], i638.scrollSpeed)
  i638.scrollSpeedMultiplier = i639[12]
  i638.remapEnabled = !!i639[13]
  i638.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[14], i638.remapX)
  i638.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[15], i638.remapY)
  i638.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[16], i638.remapZ)
  i638.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[17], i638.positionAmount)
  i638.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[18], i638.rotationAmount)
  i638.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[19], i638.sizeAmount)
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemInheritVelocity()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.mode = i641[1]
  i640.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.curve)
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemForceOverLifetime()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[1], i642.x)
  i642.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.y)
  i642.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[3], i642.z)
  i642.space = i643[4]
  i642.randomized = !!i643[5]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[1], i644.limit)
  i644.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.limitX)
  i644.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[3], i644.limitY)
  i644.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[4], i644.limitZ)
  i644.dampen = i645[5]
  i644.separateAxes = !!i645[6]
  i644.space = i645[7]
  i644.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[8], i644.drag)
  i644.multiplyDragByParticleSize = !!i645[9]
  i644.multiplyDragByParticleVelocity = !!i645[10]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'mesh')
  i646.meshCount = i647[2]
  i646.activeVertexStreamsCount = i647[3]
  i646.alignment = i647[4]
  i646.renderMode = i647[5]
  i646.sortMode = i647[6]
  i646.lengthScale = i647[7]
  i646.velocityScale = i647[8]
  i646.cameraVelocityScale = i647[9]
  i646.normalDirection = i647[10]
  i646.sortingFudge = i647[11]
  i646.minParticleSize = i647[12]
  i646.maxParticleSize = i647[13]
  i646.pivot = new pc.Vec3( i647[14], i647[15], i647[16] )
  request.r(i647[17], i647[18], 0, i646, 'trailMaterial')
  i646.applyActiveColorSpace = !!i647[19]
  i646.enabled = !!i647[20]
  request.r(i647[21], i647[22], 0, i646, 'sharedMaterial')
  var i649 = i647[23]
  var i648 = []
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 2, i648, '')
  }
  i646.sharedMaterials = i648
  i646.receiveShadows = !!i647[24]
  i646.shadowCastingMode = i647[25]
  i646.sortingLayerID = i647[26]
  i646.sortingOrder = i647[27]
  i646.lightmapIndex = i647[28]
  i646.lightmapSceneIndex = i647[29]
  i646.lightmapScaleOffset = new pc.Vec4( i647[30], i647[31], i647[32], i647[33] )
  i646.lightProbeUsage = i647[34]
  i646.reflectionProbeUsage = i647[35]
  return i646
}

Deserializers["PlayerTrigger"] = function (request, data, root) {
  var i650 = root || request.c( 'PlayerTrigger' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'monster')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i653 = data
  i652.name = i653[0]
  i652.index = i653[1]
  i652.startup = !!i653[2]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i655 = data
  i654.aspect = i655[0]
  i654.orthographic = !!i655[1]
  i654.orthographicSize = i655[2]
  i654.backgroundColor = new pc.Color(i655[3], i655[4], i655[5], i655[6])
  i654.nearClipPlane = i655[7]
  i654.farClipPlane = i655[8]
  i654.fieldOfView = i655[9]
  i654.depth = i655[10]
  i654.clearFlags = i655[11]
  i654.cullingMask = i655[12]
  i654.rect = i655[13]
  request.r(i655[14], i655[15], 0, i654, 'targetTexture')
  i654.usePhysicalProperties = !!i655[16]
  i654.focalLength = i655[17]
  i654.sensorSize = new pc.Vec2( i655[18], i655[19] )
  i654.lensShift = new pc.Vec2( i655[20], i655[21] )
  i654.gateFit = i655[22]
  i654.commandBufferCount = i655[23]
  i654.cameraType = i655[24]
  i654.enabled = !!i655[25]
  return i654
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_FirstSelected')
  i656.m_sendNavigationEvents = !!i657[2]
  i656.m_DragThreshold = i657[3]
  return i656
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i659 = data
  i658.m_HorizontalAxis = i659[0]
  i658.m_VerticalAxis = i659[1]
  i658.m_SubmitButton = i659[2]
  i658.m_CancelButton = i659[3]
  i658.m_InputActionsPerSecond = i659[4]
  i658.m_RepeatDelay = i659[5]
  i658.m_ForceModuleActive = !!i659[6]
  i658.m_SendPointerHoverToParent = !!i659[7]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i661 = data
  i660.pivot = new pc.Vec2( i661[0], i661[1] )
  i660.anchorMin = new pc.Vec2( i661[2], i661[3] )
  i660.anchorMax = new pc.Vec2( i661[4], i661[5] )
  i660.sizeDelta = new pc.Vec2( i661[6], i661[7] )
  i660.anchoredPosition3D = new pc.Vec3( i661[8], i661[9], i661[10] )
  i660.rotation = new pc.Quat(i661[11], i661[12], i661[13], i661[14])
  i660.scale = new pc.Vec3( i661[15], i661[16], i661[17] )
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i663 = data
  i662.planeDistance = i663[0]
  i662.referencePixelsPerUnit = i663[1]
  i662.isFallbackOverlay = !!i663[2]
  i662.renderMode = i663[3]
  i662.renderOrder = i663[4]
  i662.sortingLayerName = i663[5]
  i662.sortingOrder = i663[6]
  i662.scaleFactor = i663[7]
  request.r(i663[8], i663[9], 0, i662, 'worldCamera')
  i662.overrideSorting = !!i663[10]
  i662.pixelPerfect = !!i663[11]
  i662.targetDisplay = i663[12]
  i662.overridePixelPerfect = !!i663[13]
  i662.enabled = !!i663[14]
  return i662
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i665 = data
  i664.m_UiScaleMode = i665[0]
  i664.m_ReferencePixelsPerUnit = i665[1]
  i664.m_ScaleFactor = i665[2]
  i664.m_ReferenceResolution = new pc.Vec2( i665[3], i665[4] )
  i664.m_ScreenMatchMode = i665[5]
  i664.m_MatchWidthOrHeight = i665[6]
  i664.m_PhysicalUnit = i665[7]
  i664.m_FallbackScreenDPI = i665[8]
  i664.m_DefaultSpriteDPI = i665[9]
  i664.m_DynamicPixelsPerUnit = i665[10]
  i664.m_PresetInfoIsWorld = !!i665[11]
  return i664
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i667 = data
  i666.m_IgnoreReversedGraphics = !!i667[0]
  i666.m_BlockingObjects = i667[1]
  i666.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i667[2] )
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i669 = data
  i668.cullTransparentMesh = !!i669[0]
  return i668
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.Image' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'm_Sprite')
  i670.m_Type = i671[2]
  i670.m_PreserveAspect = !!i671[3]
  i670.m_FillCenter = !!i671[4]
  i670.m_FillMethod = i671[5]
  i670.m_FillAmount = i671[6]
  i670.m_FillClockwise = !!i671[7]
  i670.m_FillOrigin = i671[8]
  i670.m_UseSpriteMesh = !!i671[9]
  i670.m_PixelsPerUnitMultiplier = i671[10]
  request.r(i671[11], i671[12], 0, i670, 'm_Material')
  i670.m_Maskable = !!i671[13]
  i670.m_Color = new pc.Color(i671[14], i671[15], i671[16], i671[17])
  i670.m_RaycastTarget = !!i671[18]
  i670.m_RaycastPadding = new pc.Vec4( i671[19], i671[20], i671[21], i671[22] )
  return i670
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.Text' )
  var i673 = data
  i672.m_FontData = request.d('UnityEngine.UI.FontData', i673[0], i672.m_FontData)
  i672.m_Text = i673[1]
  request.r(i673[2], i673[3], 0, i672, 'm_Material')
  i672.m_Maskable = !!i673[4]
  i672.m_Color = new pc.Color(i673[5], i673[6], i673[7], i673[8])
  i672.m_RaycastTarget = !!i673[9]
  i672.m_RaycastPadding = new pc.Vec4( i673[10], i673[11], i673[12], i673[13] )
  return i672
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.FontData' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_Font')
  i674.m_FontSize = i675[2]
  i674.m_FontStyle = i675[3]
  i674.m_BestFit = !!i675[4]
  i674.m_MinSize = i675[5]
  i674.m_MaxSize = i675[6]
  i674.m_Alignment = i675[7]
  i674.m_AlignByGeometry = !!i675[8]
  i674.m_RichText = !!i675[9]
  i674.m_HorizontalOverflow = i675[10]
  i674.m_VerticalOverflow = i675[11]
  i674.m_LineSpacing = i675[12]
  return i674
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i676 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i677 = data
  i676.targetIsSelf = !!i677[0]
  request.r(i677[1], i677[2], 0, i676, 'targetGO')
  i676.tweenTargetIsTargetGO = !!i677[3]
  i676.delay = i677[4]
  i676.duration = i677[5]
  i676.easeType = i677[6]
  i676.easeCurve = new pc.AnimationCurve( { keys_flow: i677[7] } )
  i676.loopType = i677[8]
  i676.loops = i677[9]
  i676.id = i677[10]
  i676.isRelative = !!i677[11]
  i676.isFrom = !!i677[12]
  i676.isIndependentUpdate = !!i677[13]
  i676.autoKill = !!i677[14]
  i676.autoGenerate = !!i677[15]
  i676.isActive = !!i677[16]
  i676.isValid = !!i677[17]
  request.r(i677[18], i677[19], 0, i676, 'target')
  i676.animationType = i677[20]
  i676.targetType = i677[21]
  i676.forcedTargetType = i677[22]
  i676.autoPlay = !!i677[23]
  i676.useTargetAsV3 = !!i677[24]
  i676.endValueFloat = i677[25]
  i676.endValueV3 = new pc.Vec3( i677[26], i677[27], i677[28] )
  i676.endValueV2 = new pc.Vec2( i677[29], i677[30] )
  i676.endValueColor = new pc.Color(i677[31], i677[32], i677[33], i677[34])
  i676.endValueString = i677[35]
  i676.endValueRect = UnityEngine.Rect.MinMaxRect(i677[36], i677[37], i677[38], i677[39])
  request.r(i677[40], i677[41], 0, i676, 'endValueTransform')
  i676.optionalBool0 = !!i677[42]
  i676.optionalBool1 = !!i677[43]
  i676.optionalFloat0 = i677[44]
  i676.optionalInt0 = i677[45]
  i676.optionalRotationMode = i677[46]
  i676.optionalScrambleMode = i677[47]
  i676.optionalShakeRandomnessMode = i677[48]
  i676.optionalString = i677[49]
  i676.updateType = i677[50]
  i676.isSpeedBased = !!i677[51]
  i676.hasOnStart = !!i677[52]
  i676.hasOnPlay = !!i677[53]
  i676.hasOnUpdate = !!i677[54]
  i676.hasOnStepComplete = !!i677[55]
  i676.hasOnComplete = !!i677[56]
  i676.hasOnTweenCreated = !!i677[57]
  i676.hasOnRewind = !!i677[58]
  i676.onStart = request.d('UnityEngine.Events.UnityEvent', i677[59], i676.onStart)
  i676.onPlay = request.d('UnityEngine.Events.UnityEvent', i677[60], i676.onPlay)
  i676.onUpdate = request.d('UnityEngine.Events.UnityEvent', i677[61], i676.onUpdate)
  i676.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i677[62], i676.onStepComplete)
  i676.onComplete = request.d('UnityEngine.Events.UnityEvent', i677[63], i676.onComplete)
  i676.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i677[64], i676.onTweenCreated)
  i676.onRewind = request.d('UnityEngine.Events.UnityEvent', i677[65], i676.onRewind)
  return i676
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i679 = data
  i678.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i679[0], i678.m_PersistentCalls)
  return i678
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i681 = data
  var i683 = i681[0]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d('UnityEngine.Events.PersistentCall', i683[i + 0]));
  }
  i680.m_Calls = i682
  return i680
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'm_Target')
  i686.m_TargetAssemblyTypeName = i687[2]
  i686.m_MethodName = i687[3]
  i686.m_Mode = i687[4]
  i686.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i687[5], i686.m_Arguments)
  i686.m_CallState = i687[6]
  return i686
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.Button' )
  var i689 = data
  i688.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i689[0], i688.m_OnClick)
  i688.m_Navigation = request.d('UnityEngine.UI.Navigation', i689[1], i688.m_Navigation)
  i688.m_Transition = i689[2]
  i688.m_Colors = request.d('UnityEngine.UI.ColorBlock', i689[3], i688.m_Colors)
  i688.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i689[4], i688.m_SpriteState)
  i688.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i689[5], i688.m_AnimationTriggers)
  i688.m_Interactable = !!i689[6]
  request.r(i689[7], i689[8], 0, i688, 'm_TargetGraphic')
  return i688
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i691 = data
  i690.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i691[0], i690.m_PersistentCalls)
  return i690
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i693 = data
  i692.m_Mode = i693[0]
  i692.m_WrapAround = !!i693[1]
  request.r(i693[2], i693[3], 0, i692, 'm_SelectOnUp')
  request.r(i693[4], i693[5], 0, i692, 'm_SelectOnDown')
  request.r(i693[6], i693[7], 0, i692, 'm_SelectOnLeft')
  request.r(i693[8], i693[9], 0, i692, 'm_SelectOnRight')
  return i692
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i695 = data
  i694.m_NormalColor = new pc.Color(i695[0], i695[1], i695[2], i695[3])
  i694.m_HighlightedColor = new pc.Color(i695[4], i695[5], i695[6], i695[7])
  i694.m_PressedColor = new pc.Color(i695[8], i695[9], i695[10], i695[11])
  i694.m_SelectedColor = new pc.Color(i695[12], i695[13], i695[14], i695[15])
  i694.m_DisabledColor = new pc.Color(i695[16], i695[17], i695[18], i695[19])
  i694.m_ColorMultiplier = i695[20]
  i694.m_FadeDuration = i695[21]
  return i694
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'm_HighlightedSprite')
  request.r(i697[2], i697[3], 0, i696, 'm_PressedSprite')
  request.r(i697[4], i697[5], 0, i696, 'm_SelectedSprite')
  request.r(i697[6], i697[7], 0, i696, 'm_DisabledSprite')
  return i696
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i699 = data
  i698.m_NormalTrigger = i699[0]
  i698.m_HighlightedTrigger = i699[1]
  i698.m_PressedTrigger = i699[2]
  i698.m_SelectedTrigger = i699[3]
  i698.m_DisabledTrigger = i699[4]
  return i698
}

Deserializers["SkinIcon"] = function (request, data, root) {
  var i700 = root || request.c( 'SkinIcon' )
  var i701 = data
  i700.side = i701[0]
  var i703 = i701[1]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i700.icons = i702
  return i700
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_Texture')
  i704.m_UVRect = UnityEngine.Rect.MinMaxRect(i705[2], i705[3], i705[4], i705[5])
  request.r(i705[6], i705[7], 0, i704, 'm_Material')
  i704.m_Maskable = !!i705[8]
  i704.m_Color = new pc.Color(i705[9], i705[10], i705[11], i705[12])
  i704.m_RaycastTarget = !!i705[13]
  i704.m_RaycastPadding = new pc.Vec4( i705[14], i705[15], i705[16], i705[17] )
  return i704
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i707 = data
  i706.m_AspectMode = i707[0]
  i706.m_AspectRatio = i707[1]
  return i706
}

Deserializers["MonsterOptionController"] = function (request, data, root) {
  var i708 = root || request.c( 'MonsterOptionController' )
  var i709 = data
  i708.OnSpawn = request.d('System.Action', i709[0], i708.OnSpawn)
  i708.OnEmpty = request.d('System.Action', i709[1], i708.OnEmpty)
  i708.OnEnd = request.d('System.Action', i709[2], i708.OnEnd)
  request.r(i709[3], i709[4], 0, i708, 'spawnPrefab')
  var i711 = i709[5]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i708.spawnPrefabs = i710
  i708.numCharacter = i709[6]
  request.r(i709[7], i709[8], 0, i708, 'numText')
  request.r(i709[9], i709[10], 0, i708, 'world')
  request.r(i709[11], i709[12], 0, i708, 'area')
  request.r(i709[13], i709[14], 0, i708, 'areaTut')
  return i708
}

Deserializers["HumanOptionController"] = function (request, data, root) {
  var i714 = root || request.c( 'HumanOptionController' )
  var i715 = data
  i714.OnSpawn = request.d('System.Action', i715[0], i714.OnSpawn)
  i714.OnEmpty = request.d('System.Action', i715[1], i714.OnEmpty)
  i714.OnEnd = request.d('System.Action', i715[2], i714.OnEnd)
  request.r(i715[3], i715[4], 0, i714, 'spawnPrefab')
  var i717 = i715[5]
  var i716 = []
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 2, i716, '')
  }
  i714.spawnPrefabs = i716
  i714.numCharacter = i715[6]
  request.r(i715[7], i715[8], 0, i714, 'numText')
  request.r(i715[9], i715[10], 0, i714, 'world')
  request.r(i715[11], i715[12], 0, i714, 'area')
  request.r(i715[13], i715[14], 0, i714, 'areaTut')
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'clip')
  request.r(i719[2], i719[3], 0, i718, 'outputAudioMixerGroup')
  i718.playOnAwake = !!i719[4]
  i718.loop = !!i719[5]
  i718.time = i719[6]
  i718.volume = i719[7]
  i718.pitch = i719[8]
  i718.enabled = !!i719[9]
  return i718
}

Deserializers["GameController"] = function (request, data, root) {
  var i720 = root || request.c( 'GameController' )
  var i721 = data
  i720.maxSpawn = i721[0]
  i720.OnSpawn = request.d('System.Action', i721[1], i720.OnSpawn)
  i720.OnEmpty = request.d('System.Action', i721[2], i720.OnEmpty)
  request.r(i721[3], i721[4], 0, i720, 'startScene')
  request.r(i721[5], i721[6], 0, i720, 'endScene')
  i720.human = request.d('Option', i721[7], i720.human)
  i720.monster = request.d('Option', i721[8], i720.monster)
  request.r(i721[9], i721[10], 0, i720, 'clickSound')
  request.r(i721[11], i721[12], 0, i720, 'optionController')
  return i720
}

Deserializers["Option"] = function (request, data, root) {
  var i722 = root || request.c( 'Option' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'Button')
  request.r(i723[2], i723[3], 0, i722, 'Controller')
  return i722
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i724 = root || request.c( 'LayoutController' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'cam')
  request.r(i725[2], i725[3], 0, i724, 'UI')
  return i724
}

Deserializers["LunaController"] = function (request, data, root) {
  var i726 = root || request.c( 'LunaController' )
  var i727 = data
  i726.OneClick = !!i727[0]
  request.r(i727[1], i727[2], 0, i726, 'BGTexture')
  i726.Header = i727[3]
  i726.HeaderColor = new pc.Color(i727[4], i727[5], i727[6], i727[7])
  i726.UseTime = !!i727[8]
  i726.TimePlay = i727[9]
  i726.MaxCountPlay = i727[10]
  i726.Player = i727[11]
  i726.Zombie = i727[12]
  request.r(i727[13], i727[14], 0, i726, 'BGImage')
  request.r(i727[15], i727[16], 0, i726, 'headerText')
  var i729 = i727[17]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 1, i728, '')
  }
  i726.CTA = i728
  request.r(i727[18], i727[19], 0, i726, 'endCard')
  return i726
}

Deserializers["AudioController"] = function (request, data, root) {
  var i732 = root || request.c( 'AudioController' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'BGM')
  request.r(i733[2], i733[3], 0, i732, 'musicSource')
  request.r(i733[4], i733[5], 0, i732, 'pool')
  return i732
}

Deserializers["PoolController"] = function (request, data, root) {
  var i734 = root || request.c( 'PoolController' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'poolParent')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i737 = data
  i736.ambientIntensity = i737[0]
  i736.reflectionIntensity = i737[1]
  i736.ambientMode = i737[2]
  i736.ambientLight = new pc.Color(i737[3], i737[4], i737[5], i737[6])
  i736.ambientSkyColor = new pc.Color(i737[7], i737[8], i737[9], i737[10])
  i736.ambientGroundColor = new pc.Color(i737[11], i737[12], i737[13], i737[14])
  i736.ambientEquatorColor = new pc.Color(i737[15], i737[16], i737[17], i737[18])
  i736.fogColor = new pc.Color(i737[19], i737[20], i737[21], i737[22])
  i736.fogEndDistance = i737[23]
  i736.fogStartDistance = i737[24]
  i736.fogDensity = i737[25]
  i736.fog = !!i737[26]
  request.r(i737[27], i737[28], 0, i736, 'skybox')
  i736.fogMode = i737[29]
  var i739 = i737[30]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i739[i + 0]) );
  }
  i736.lightmaps = i738
  i736.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i737[31], i736.lightProbes)
  i736.lightmapsMode = i737[32]
  i736.mixedBakeMode = i737[33]
  i736.environmentLightingMode = i737[34]
  i736.ambientProbe = new pc.SphericalHarmonicsL2(i737[35])
  request.r(i737[36], i737[37], 0, i736, 'customReflection')
  request.r(i737[38], i737[39], 0, i736, 'defaultReflection')
  i736.defaultReflectionMode = i737[40]
  i736.defaultReflectionResolution = i737[41]
  i736.sunLightObjectId = i737[42]
  i736.pixelLightCount = i737[43]
  i736.defaultReflectionHDR = !!i737[44]
  i736.hasLightDataAsset = !!i737[45]
  i736.hasManualGenerate = !!i737[46]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'lightmapColor')
  request.r(i743[2], i743[3], 0, i742, 'lightmapDirection')
  request.r(i743[4], i743[5], 0, i742, 'shadowMask')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i744 = root || new UnityEngine.LightProbes()
  var i745 = data
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i753 = data
  i752.name = i753[0]
  i752.bounciness = i753[1]
  i752.friction = i753[2]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i757[i + 0]));
  }
  i754.ShaderCompilationErrors = i756
  i754.name = i755[1]
  i754.guid = i755[2]
  var i759 = i755[3]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i754.shaderDefinedKeywords = i758
  var i761 = i755[4]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i761[i + 0]) );
  }
  i754.passes = i760
  var i763 = i755[5]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i763[i + 0]) );
  }
  i754.usePasses = i762
  var i765 = i755[6]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i765[i + 0]) );
  }
  i754.defaultParameterValues = i764
  request.r(i755[7], i755[8], 0, i754, 'unityFallbackShader')
  i754.readDepth = !!i755[9]
  i754.hasDepthOnlyPass = !!i755[10]
  i754.isCreatedByShaderGraph = !!i755[11]
  i754.disableBatching = !!i755[12]
  i754.compiled = !!i755[13]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i769 = data
  i768.shaderName = i769[0]
  i768.errorMessage = i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i774 = root || new pc.UnityShaderPass()
  var i775 = data
  i774.id = i775[0]
  i774.subShaderIndex = i775[1]
  i774.name = i775[2]
  i774.passType = i775[3]
  i774.grabPassTextureName = i775[4]
  i774.usePass = !!i775[5]
  i774.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[6], i774.zTest)
  i774.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[7], i774.zWrite)
  i774.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[8], i774.culling)
  i774.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i775[9], i774.blending)
  i774.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i775[10], i774.alphaBlending)
  i774.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[11], i774.colorWriteMask)
  i774.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[12], i774.offsetUnits)
  i774.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[13], i774.offsetFactor)
  i774.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[14], i774.stencilRef)
  i774.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[15], i774.stencilReadMask)
  i774.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i775[16], i774.stencilWriteMask)
  i774.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i775[17], i774.stencilOp)
  i774.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i775[18], i774.stencilOpFront)
  i774.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i775[19], i774.stencilOpBack)
  var i777 = i775[20]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i777[i + 0]) );
  }
  i774.tags = i776
  var i779 = i775[21]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i774.passDefinedKeywords = i778
  var i781 = i775[22]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i781[i + 0]) );
  }
  i774.passDefinedKeywordGroups = i780
  var i783 = i775[23]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i783[i + 0]) );
  }
  i774.variants = i782
  var i785 = i775[24]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i785[i + 0]) );
  }
  i774.excludedVariants = i784
  i774.hasDepthReader = !!i775[25]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i787 = data
  i786.val = i787[0]
  i786.name = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i789 = data
  i788.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[0], i788.src)
  i788.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[1], i788.dst)
  i788.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[2], i788.op)
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i791 = data
  i790.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[0], i790.pass)
  i790.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[1], i790.fail)
  i790.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[2], i790.zFail)
  i790.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[3], i790.comp)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i795 = data
  i794.name = i795[0]
  i794.value = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i799 = data
  var i801 = i799[0]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( i801[i + 0] );
  }
  i798.keywords = i800
  i798.hasDiscard = !!i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i805 = data
  i804.passId = i805[0]
  i804.subShaderIndex = i805[1]
  var i807 = i805[2]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( i807[i + 0] );
  }
  i804.keywords = i806
  i804.vertexProgram = i805[3]
  i804.fragmentProgram = i805[4]
  i804.exportedForWebGl2 = !!i805[5]
  i804.readDepth = !!i805[6]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'shader')
  i810.pass = i811[2]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i815 = data
  i814.name = i815[0]
  i814.type = i815[1]
  i814.value = new pc.Vec4( i815[2], i815[3], i815[4], i815[5] )
  i814.textureValue = i815[6]
  i814.shaderPropertyFlag = i815[7]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i817 = data
  i816.name = i817[0]
  request.r(i817[1], i817[2], 0, i816, 'texture')
  i816.aabb = i817[3]
  i816.vertices = i817[4]
  i816.triangles = i817[5]
  i816.textureRect = UnityEngine.Rect.MinMaxRect(i817[6], i817[7], i817[8], i817[9])
  i816.packedRect = UnityEngine.Rect.MinMaxRect(i817[10], i817[11], i817[12], i817[13])
  i816.border = new pc.Vec4( i817[14], i817[15], i817[16], i817[17] )
  i816.transparency = i817[18]
  i816.bounds = i817[19]
  i816.pixelsPerUnit = i817[20]
  i816.textureWidth = i817[21]
  i816.textureHeight = i817[22]
  i816.nativeSize = new pc.Vec2( i817[23], i817[24] )
  i816.pivot = new pc.Vec2( i817[25], i817[26] )
  i816.textureRectOffset = new pc.Vec2( i817[27], i817[28] )
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i819 = data
  i818.name = i819[0]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i821 = data
  i820.name = i821[0]
  i820.ascent = i821[1]
  i820.originalLineHeight = i821[2]
  i820.fontSize = i821[3]
  var i823 = i821[4]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i823[i + 0]) );
  }
  i820.characterInfo = i822
  request.r(i821[5], i821[6], 0, i820, 'texture')
  i820.originalFontSize = i821[7]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i827 = data
  i826.index = i827[0]
  i826.advance = i827[1]
  i826.bearing = i827[2]
  i826.glyphWidth = i827[3]
  i826.glyphHeight = i827[4]
  i826.minX = i827[5]
  i826.maxX = i827[6]
  i826.minY = i827[7]
  i826.maxY = i827[8]
  i826.uvBottomLeftX = i827[9]
  i826.uvBottomLeftY = i827[10]
  i826.uvBottomRightX = i827[11]
  i826.uvBottomRightY = i827[12]
  i826.uvTopLeftX = i827[13]
  i826.uvTopLeftY = i827[14]
  i826.uvTopRightX = i827[15]
  i826.uvTopRightY = i827[16]
  return i826
}

Deserializers["SprunkySkinLibrary"] = function (request, data, root) {
  var i828 = root || request.c( 'SprunkySkinLibrary' )
  var i829 = data
  var i831 = i829[0]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('SprunkySkinLibrary+Skin', i831[i + 0]) );
  }
  i828.Skins = i830
  return i828
}

Deserializers["SprunkySkinLibrary+Skin"] = function (request, data, root) {
  var i834 = root || request.c( 'SprunkySkinLibrary+Skin' )
  var i835 = data
  i834.Id = i835[0]
  var i837 = i835[1]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.Body = i836
  var i839 = i835[2]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i834.Zombie = i838
  return i834
}

Deserializers["OutfitLibrary"] = function (request, data, root) {
  var i840 = root || request.c( 'OutfitLibrary' )
  var i841 = data
  var i843 = i841[0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('OutfitLibrary+Outfit', i843[i + 0]) );
  }
  i840.Outfits = i842
  return i840
}

Deserializers["OutfitLibrary+Outfit"] = function (request, data, root) {
  var i846 = root || request.c( 'OutfitLibrary+Outfit' )
  var i847 = data
  i846.Name = i847[0]
  request.r(i847[1], i847[2], 0, i846, 'Hat')
  i846.HatOffset = new pc.Vec2( i847[3], i847[4] )
  request.r(i847[5], i847[6], 0, i846, 'Chest')
  request.r(i847[7], i847[8], 0, i846, 'Lower')
  return i846
}

Deserializers["ZombieSkinLibrary"] = function (request, data, root) {
  var i848 = root || request.c( 'ZombieSkinLibrary' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('ZombieSkinLibrary+Skin', i851[i + 0]) );
  }
  i848.Skins = i850
  return i848
}

Deserializers["ZombieSkinLibrary+Skin"] = function (request, data, root) {
  var i854 = root || request.c( 'ZombieSkinLibrary+Skin' )
  var i855 = data
  i854.Id = i855[0]
  var i857 = i855[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.A = i856
  var i859 = i855[2]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i854.B = i858
  return i854
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i860 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i861 = data
  i860.useSafeMode = !!i861[0]
  i860.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i861[1], i860.safeModeOptions)
  i860.timeScale = i861[2]
  i860.unscaledTimeScale = i861[3]
  i860.useSmoothDeltaTime = !!i861[4]
  i860.maxSmoothUnscaledTime = i861[5]
  i860.rewindCallbackMode = i861[6]
  i860.showUnityEditorReport = !!i861[7]
  i860.logBehaviour = i861[8]
  i860.drawGizmos = !!i861[9]
  i860.defaultRecyclable = !!i861[10]
  i860.defaultAutoPlay = i861[11]
  i860.defaultUpdateType = i861[12]
  i860.defaultTimeScaleIndependent = !!i861[13]
  i860.defaultEaseType = i861[14]
  i860.defaultEaseOvershootOrAmplitude = i861[15]
  i860.defaultEasePeriod = i861[16]
  i860.defaultAutoKill = !!i861[17]
  i860.defaultLoopType = i861[18]
  i860.debugMode = !!i861[19]
  i860.debugStoreTargetId = !!i861[20]
  i860.showPreviewPanel = !!i861[21]
  i860.storeSettingsLocation = i861[22]
  i860.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i861[23], i860.modules)
  i860.createASMDEF = !!i861[24]
  i860.showPlayingTweens = !!i861[25]
  i860.showPausedTweens = !!i861[26]
  return i860
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i862 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i863 = data
  i862.logBehaviour = i863[0]
  i862.nestedTweenFailureBehaviour = i863[1]
  return i862
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i864 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i865 = data
  i864.showPanel = !!i865[0]
  i864.audioEnabled = !!i865[1]
  i864.physicsEnabled = !!i865[2]
  i864.physics2DEnabled = !!i865[3]
  i864.spriteEnabled = !!i865[4]
  i864.uiEnabled = !!i865[5]
  i864.textMeshProEnabled = !!i865[6]
  i864.tk2DEnabled = !!i865[7]
  i864.deAudioEnabled = !!i865[8]
  i864.deUnityExtendedEnabled = !!i865[9]
  i864.epoOutlineEnabled = !!i865[10]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i867 = data
  var i869 = i867[0]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i869[i + 0]) );
  }
  i866.files = i868
  i866.componentToPrefabIds = i867[1]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i873 = data
  i872.path = i873[0]
  request.r(i873[1], i873[2], 0, i872, 'unityObject')
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i875 = data
  var i877 = i875[0]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i877[i + 0]) );
  }
  i874.scriptsExecutionOrder = i876
  var i879 = i875[1]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i879[i + 0]) );
  }
  i874.sortingLayers = i878
  var i881 = i875[2]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i881[i + 0]) );
  }
  i874.cullingLayers = i880
  i874.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i875[3], i874.timeSettings)
  i874.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i875[4], i874.physicsSettings)
  i874.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i875[5], i874.physics2DSettings)
  i874.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i875[6], i874.qualitySettings)
  i874.enableRealtimeShadows = !!i875[7]
  i874.enableAutoInstancing = !!i875[8]
  i874.enableStaticBatching = !!i875[9]
  i874.enableDynamicBatching = !!i875[10]
  i874.usePreservativeDynamicBatching = !!i875[11]
  i874.lightmapEncodingQuality = i875[12]
  i874.desiredColorSpace = i875[13]
  var i883 = i875[14]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( i883[i + 0] );
  }
  i874.allTags = i882
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i887 = data
  i886.name = i887[0]
  i886.value = i887[1]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i891 = data
  i890.id = i891[0]
  i890.name = i891[1]
  i890.value = i891[2]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i895 = data
  i894.id = i895[0]
  i894.name = i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i897 = data
  i896.fixedDeltaTime = i897[0]
  i896.maximumDeltaTime = i897[1]
  i896.timeScale = i897[2]
  i896.maximumParticleTimestep = i897[3]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i899 = data
  i898.gravity = new pc.Vec3( i899[0], i899[1], i899[2] )
  i898.defaultSolverIterations = i899[3]
  i898.bounceThreshold = i899[4]
  i898.autoSyncTransforms = !!i899[5]
  i898.autoSimulation = !!i899[6]
  var i901 = i899[7]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i901[i + 0]) );
  }
  i898.collisionMatrix = i900
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i905 = data
  i904.enabled = !!i905[0]
  i904.layerId = i905[1]
  i904.otherLayerId = i905[2]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'material')
  i906.gravity = new pc.Vec2( i907[2], i907[3] )
  i906.positionIterations = i907[4]
  i906.velocityIterations = i907[5]
  i906.velocityThreshold = i907[6]
  i906.maxLinearCorrection = i907[7]
  i906.maxAngularCorrection = i907[8]
  i906.maxTranslationSpeed = i907[9]
  i906.maxRotationSpeed = i907[10]
  i906.baumgarteScale = i907[11]
  i906.baumgarteTOIScale = i907[12]
  i906.timeToSleep = i907[13]
  i906.linearSleepTolerance = i907[14]
  i906.angularSleepTolerance = i907[15]
  i906.defaultContactOffset = i907[16]
  i906.autoSimulation = !!i907[17]
  i906.queriesHitTriggers = !!i907[18]
  i906.queriesStartInColliders = !!i907[19]
  i906.callbacksOnDisable = !!i907[20]
  i906.reuseCollisionCallbacks = !!i907[21]
  i906.autoSyncTransforms = !!i907[22]
  var i909 = i907[23]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i909[i + 0]) );
  }
  i906.collisionMatrix = i908
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i913 = data
  i912.enabled = !!i913[0]
  i912.layerId = i913[1]
  i912.otherLayerId = i913[2]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i915 = data
  var i917 = i915[0]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i917[i + 0]) );
  }
  i914.qualityLevels = i916
  var i919 = i915[1]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( i919[i + 0] );
  }
  i914.names = i918
  i914.shadows = i915[2]
  i914.anisotropicFiltering = i915[3]
  i914.antiAliasing = i915[4]
  i914.lodBias = i915[5]
  i914.shadowCascades = i915[6]
  i914.shadowDistance = i915[7]
  i914.shadowmaskMode = i915[8]
  i914.shadowProjection = i915[9]
  i914.shadowResolution = i915[10]
  i914.softParticles = !!i915[11]
  i914.softVegetation = !!i915[12]
  i914.activeColorSpace = i915[13]
  i914.desiredColorSpace = i915[14]
  i914.masterTextureLimit = i915[15]
  i914.maxQueuedFrames = i915[16]
  i914.particleRaycastBudget = i915[17]
  i914.pixelLightCount = i915[18]
  i914.realtimeReflectionProbes = !!i915[19]
  i914.shadowCascade2Split = i915[20]
  i914.shadowCascade4Split = new pc.Vec3( i915[21], i915[22], i915[23] )
  i914.streamingMipmapsActive = !!i915[24]
  i914.vSyncCount = i915[25]
  i914.asyncUploadBufferSize = i915[26]
  i914.asyncUploadTimeSlice = i915[27]
  i914.billboardsFaceCameraPosition = !!i915[28]
  i914.shadowNearPlaneOffset = i915[29]
  i914.streamingMipmapsMemoryBudget = i915[30]
  i914.maximumLODLevel = i915[31]
  i914.streamingMipmapsAddAllCameras = !!i915[32]
  i914.streamingMipmapsMaxLevelReduction = i915[33]
  i914.streamingMipmapsRenderersPerFrame = i915[34]
  i914.resolutionScalingFixedDPIFactor = i915[35]
  i914.streamingMipmapsMaxFileIORequests = i915[36]
  i914.currentQualityLevel = i915[37]
  return i914
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'm_ObjectArgument')
  i922.m_ObjectArgumentAssemblyTypeName = i923[2]
  i922.m_IntArgument = i923[3]
  i922.m_FloatArgument = i923[4]
  i922.m_StringArgument = i923[5]
  i922.m_BoolArgument = !!i923[6]
  return i922
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[32],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[12],"77":[12],"78":[12],"79":[12],"80":[12],"81":[12],"13":[12],"82":[12],"83":[12],"84":[12],"85":[12],"86":[12],"87":[12],"88":[32],"89":[90],"91":[92],"93":[92],"38":[37],"47":[42],"94":[7],"95":[32],"96":[97],"98":[37],"99":[41,37],"100":[90],"101":[41,37],"102":[37],"103":[37],"104":[90,37],"105":[37,41],"106":[107],"108":[107],"109":[107],"110":[37],"111":[37],"40":[38],"42":[41,37],"49":[37],"39":[38],"112":[37],"113":[37],"114":[37],"115":[37],"116":[37],"117":[37],"118":[37],"119":[37],"120":[37],"48":[41,37],"121":[37],"122":[37],"123":[37],"124":[37],"43":[41,37],"125":[37],"126":[35],"127":[35],"36":[35],"128":[35],"129":[32],"130":[32]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Rendering.SortingGroup","RagdollBalance","UnityEngine.Rigidbody2D","UnityEngine.HingeJoint2D","UnityEngine.BoxCollider2D","MonsterController","MonsterTrigger","GroundCheck","MonsterSkin","ZombieSkinLibrary","UnityEngine.PhysicsMaterial2D","PlayerController","UnityEngine.GameObject","PlayerAttack","SprunkySkin","SprunkySkinLibrary","UnityEngine.ParticleSystem","PlayerTrigger","SprunkyOutfit","OutfitLibrary","BodyPiece","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","SkinIcon","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","MonsterOptionController","HumanOptionController","UnityEngine.AudioSource","GameController","LayoutController","LunaController","AudioController","PoolController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "11/11/2026 09:05:38";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V06_YenTTH_TamNTM";

Deserializers.lunaAppID = "39964";

Deserializers.projectId = "ff24b2211bd970c4d920bad068d2912a";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1785";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4594";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V03";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "b6f3607a-bbd9-46c3-bb7c-06c9b32a7fae";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointSpring' )
  var i467 = data
  i466.spring = i467[0]
  i466.damper = i467[1]
  i466.targetPosition = i467[2]
  return i466
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointMotor' )
  var i469 = data
  i468.m_TargetVelocity = i469[0]
  i468.m_Force = i469[1]
  i468.m_FreeSpin = i469[2]
  return i468
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointLimits' )
  var i471 = data
  i470.m_Min = i471[0]
  i470.m_Max = i471[1]
  i470.m_Bounciness = i471[2]
  i470.m_BounceMinVelocity = i471[3]
  i470.m_ContactDistance = i471[4]
  i470.minBounce = i471[5]
  i470.maxBounce = i471[6]
  return i470
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointDrive' )
  var i473 = data
  i472.m_PositionSpring = i473[0]
  i472.m_PositionDamper = i473[1]
  i472.m_MaximumForce = i473[2]
  i472.m_UseAcceleration = i473[3]
  return i472
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i475 = data
  i474.m_Spring = i475[0]
  i474.m_Damper = i475[1]
  return i474
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i477 = data
  i476.m_Limit = i477[0]
  i476.m_Bounciness = i477[1]
  i476.m_ContactDistance = i477[2]
  return i476
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i479 = data
  i478.m_ExtremumSlip = i479[0]
  i478.m_ExtremumValue = i479[1]
  i478.m_AsymptoteSlip = i479[2]
  i478.m_AsymptoteValue = i479[3]
  i478.m_Stiffness = i479[4]
  return i478
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i481 = data
  i480.m_LowerAngle = i481[0]
  i480.m_UpperAngle = i481[1]
  return i480
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i483 = data
  i482.m_MotorSpeed = i483[0]
  i482.m_MaximumMotorTorque = i483[1]
  return i482
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i485 = data
  i484.m_DampingRatio = i485[0]
  i484.m_Frequency = i485[1]
  i484.m_Angle = i485[2]
  return i484
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i487 = data
  i486.m_LowerTranslation = i487[0]
  i486.m_UpperTranslation = i487[1]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i489 = data
  i488.name = i489[0]
  i488.width = i489[1]
  i488.height = i489[2]
  i488.mipmapCount = i489[3]
  i488.anisoLevel = i489[4]
  i488.filterMode = i489[5]
  i488.hdr = !!i489[6]
  i488.format = i489[7]
  i488.wrapMode = i489[8]
  i488.alphaIsTransparency = !!i489[9]
  i488.alphaSource = i489[10]
  i488.graphicsFormat = i489[11]
  i488.sRGBTexture = !!i489[12]
  i488.desiredColorSpace = i489[13]
  i488.wrapU = i489[14]
  i488.wrapV = i489[15]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i490 = root || new pc.UnityMaterial()
  var i491 = data
  i490.name = i491[0]
  request.r(i491[1], i491[2], 0, i490, 'shader')
  i490.renderQueue = i491[3]
  i490.enableInstancing = !!i491[4]
  var i493 = i491[5]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i493[i + 0]) );
  }
  i490.floatParameters = i492
  var i495 = i491[6]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i495[i + 0]) );
  }
  i490.colorParameters = i494
  var i497 = i491[7]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i497[i + 0]) );
  }
  i490.vectorParameters = i496
  var i499 = i491[8]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i499[i + 0]) );
  }
  i490.textureParameters = i498
  var i501 = i491[9]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i501[i + 0]) );
  }
  i490.materialFlags = i500
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i505 = data
  i504.name = i505[0]
  i504.value = i505[1]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = new pc.Color(i509[1], i509[2], i509[3], i509[4])
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i513 = data
  i512.name = i513[0]
  i512.value = new pc.Vec4( i513[1], i513[2], i513[3], i513[4] )
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i517 = data
  i516.name = i517[0]
  request.r(i517[1], i517[2], 0, i516, 'value')
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i521 = data
  i520.name = i521[0]
  i520.enabled = !!i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i523 = data
  i522.position = new pc.Vec3( i523[0], i523[1], i523[2] )
  i522.scale = new pc.Vec3( i523[3], i523[4], i523[5] )
  i522.rotation = new pc.Quat(i523[6], i523[7], i523[8], i523[9])
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i525 = data
  i524.radius = i525[0]
  i524.enabled = !!i525[1]
  i524.isTrigger = !!i525[2]
  i524.usedByEffector = !!i525[3]
  i524.density = i525[4]
  i524.offset = new pc.Vec2( i525[5], i525[6] )
  request.r(i525[7], i525[8], 0, i524, 'material')
  return i524
}

Deserializers["BulletController"] = function (request, data, root) {
  var i526 = root || request.c( 'BulletController' )
  var i527 = data
  i526.speed = i527[0]
  i526.damage = i527[1]
  request.r(i527[2], i527[3], 0, i526, 'hitMonsterSound')
  request.r(i527[4], i527[5], 0, i526, 'hitSound')
  i526.lifeTime = i527[6]
  i526.hit = !!i527[7]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i529 = data
  i528.color = new pc.Color(i529[0], i529[1], i529[2], i529[3])
  request.r(i529[4], i529[5], 0, i528, 'sprite')
  i528.flipX = !!i529[6]
  i528.flipY = !!i529[7]
  i528.drawMode = i529[8]
  i528.size = new pc.Vec2( i529[9], i529[10] )
  i528.tileMode = i529[11]
  i528.adaptiveModeThreshold = i529[12]
  i528.maskInteraction = i529[13]
  i528.spriteSortPoint = i529[14]
  i528.enabled = !!i529[15]
  request.r(i529[16], i529[17], 0, i528, 'sharedMaterial')
  var i531 = i529[18]
  var i530 = []
  for(var i = 0; i < i531.length; i += 2) {
  request.r(i531[i + 0], i531[i + 1], 2, i530, '')
  }
  i528.sharedMaterials = i530
  i528.receiveShadows = !!i529[19]
  i528.shadowCastingMode = i529[20]
  i528.sortingLayerID = i529[21]
  i528.sortingOrder = i529[22]
  i528.lightmapIndex = i529[23]
  i528.lightmapSceneIndex = i529[24]
  i528.lightmapScaleOffset = new pc.Vec4( i529[25], i529[26], i529[27], i529[28] )
  i528.lightProbeUsage = i529[29]
  i528.reflectionProbeUsage = i529[30]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i535 = data
  i534.name = i535[0]
  i534.tagId = i535[1]
  i534.enabled = !!i535[2]
  i534.isStatic = !!i535[3]
  i534.layer = i535[4]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i537 = data
  i536.sortingLayerIndex = i537[0]
  i536.sortingOrder = i537[1]
  i536.sortingLayerName = i537[2]
  i536.enabled = !!i537[3]
  return i536
}

Deserializers["RagdollBalance"] = function (request, data, root) {
  var i538 = root || request.c( 'RagdollBalance' )
  var i539 = data
  i538.walkSpeed = i539[0]
  request.r(i539[1], i539[2], 0, i538, 'torso')
  request.r(i539[3], i539[4], 0, i538, 'head')
  request.r(i539[5], i539[6], 0, i538, 'neck')
  var i541 = i539[7]
  var i540 = []
  for(var i = 0; i < i541.length; i += 2) {
  request.r(i541[i + 0], i541[i + 1], 2, i540, '')
  }
  i538.spine = i540
  i538.legFront = request.d('RagdollBalance+Limb', i539[8], i538.legFront)
  i538.legBack = request.d('RagdollBalance+Limb', i539[9], i538.legBack)
  i538.armFront = request.d('RagdollBalance+Limb', i539[10], i538.armFront)
  i538.armBack = request.d('RagdollBalance+Limb', i539[11], i538.armBack)
  request.r(i539[12], i539[13], 0, i538, 'footFront')
  request.r(i539[14], i539[15], 0, i538, 'footBack')
  request.r(i539[16], i539[17], 0, i538, 'aimPoint')
  request.r(i539[18], i539[19], 0, i538, 'gunSprite')
  i538.standHeight = i539[20]
  i538.headRestHeight = i539[21]
  i538.uprightGain = i539[22]
  i538.uprightDamp = i539[23]
  i538.footGain = i539[24]
  i538.walkLean = i539[25]
  i538.headSpring = i539[26]
  i538.headDamp = i539[27]
  i538.neckStrength = i539[28]
  i538.spineStrength = i539[29]
  i538.hipStrength = i539[30]
  i538.kneeStrength = i539[31]
  i538.ankleStrength = i539[32]
  i538.muscleGain = i539[33]
  i538.muscleMaxSpeed = i539[34]
  i538.cadence = i539[35]
  i538.hipSwing = i539[36]
  i538.hipForwardSign = i539[37]
  i538.stepLift = i539[38]
  i538.kneeBend = i539[39]
  i538.assistGain = i539[40]
  i538.pushOffset = i539[41]
  i538.stanceFriction = i539[42]
  i538.swingFriction = i539[43]
  i538.armIdleStrength = i539[44]
  i538.armReachStrength = i539[45]
  i538.armGain = i539[46]
  i538.armMaxSpeed = i539[47]
  i538.elbowStrength = i539[48]
  i538.aimReadyAngle = i539[49]
  i538.raiseTime = i539[50]
  i538.gunAlongArm = i539[51]
  i538.idleGunTilt = i539[52]
  i538.gunTurnSpeed = i539[53]
  i538.gunGrip = i539[54]
  return i538
}

Deserializers["RagdollBalance+Limb"] = function (request, data, root) {
  var i544 = root || request.c( 'RagdollBalance+Limb' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'Upper')
  request.r(i545[2], i545[3], 0, i544, 'Middle')
  request.r(i545[4], i545[5], 0, i544, 'Lower')
  return i544
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i546 = root || request.c( 'MonsterController' )
  var i547 = data
  i546.maxHP = i547[0]
  i546.currentHP = i547[1]
  var i549 = i547[2]
  var i548 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i549.length; i += 1) {
    i548.add(request.d('Piece', i549[i + 0]));
  }
  i546.pieces = i548
  request.r(i547[3], i547[4], 0, i546, 'deadSFX')
  i546.maxForce = new pc.Vec2( i547[5], i547[6] )
  i546.minForce = new pc.Vec2( i547[7], i547[8] )
  request.r(i547[9], i547[10], 0, i546, 'balance')
  i546.isDead = !!i547[11]
  request.r(i547[12], i547[13], 0, i546, 'trigger')
  request.r(i547[14], i547[15], 0, i546, 'groundCheck')
  i546.reportDeath = !!i547[16]
  i546.speed = i547[17]
  request.r(i547[18], i547[19], 0, i546, 'body')
  return i546
}

Deserializers["Piece"] = function (request, data, root) {
  var i552 = root || request.c( 'Piece' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'Joint')
  request.r(i553[2], i553[3], 0, i552, 'Rb')
  return i552
}

Deserializers["MonsterSkin"] = function (request, data, root) {
  var i554 = root || request.c( 'MonsterSkin' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'library')
  var i557 = i555[2]
  var i556 = []
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 2, i556, '')
  }
  i554.renderers = i556
  i554.slices = i555[3]
  i554.slot = i555[4]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i561 = data
  i560.usedByComposite = !!i561[0]
  i560.autoTiling = !!i561[1]
  i560.size = new pc.Vec2( i561[2], i561[3] )
  i560.edgeRadius = i561[4]
  i560.enabled = !!i561[5]
  i560.isTrigger = !!i561[6]
  i560.usedByEffector = !!i561[7]
  i560.density = i561[8]
  i560.offset = new pc.Vec2( i561[9], i561[10] )
  request.r(i561[11], i561[12], 0, i560, 'material')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i563 = data
  i562.bodyType = i563[0]
  request.r(i563[1], i563[2], 0, i562, 'material')
  i562.simulated = !!i563[3]
  i562.useAutoMass = !!i563[4]
  i562.mass = i563[5]
  i562.drag = i563[6]
  i562.angularDrag = i563[7]
  i562.gravityScale = i563[8]
  i562.collisionDetectionMode = i563[9]
  i562.sleepMode = i563[10]
  i562.constraints = i563[11]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i565 = data
  i564.useLimits = !!i565[0]
  i564.limits = request.d('UnityEngine.JointAngleLimits2D', i565[1], i564.limits)
  i564.useMotor = !!i565[2]
  i564.motor = request.d('UnityEngine.JointMotor2D', i565[3], i564.motor)
  i564.anchor = new pc.Vec2( i565[4], i565[5] )
  i564.connectedAnchor = new pc.Vec2( i565[6], i565[7] )
  i564.autoConfigureConnectedAnchor = !!i565[8]
  request.r(i565[9], i565[10], 0, i564, 'connectedBody')
  i564.breakForce = i565[11]
  i564.breakTorque = i565[12]
  i564.enableCollision = !!i565[13]
  i564.enabled = !!i565[14]
  return i564
}

Deserializers["MonsterTrigger"] = function (request, data, root) {
  var i566 = root || request.c( 'MonsterTrigger' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'player')
  return i566
}

Deserializers["GroundCheck"] = function (request, data, root) {
  var i568 = root || request.c( 'GroundCheck' )
  var i569 = data
  i568.OnGround = !!i569[0]
  return i568
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i570 = root || request.c( 'PlayerController' )
  var i571 = data
  i570.IsZombie = !!i571[0]
  i570.OnDead = request.d('System.Action', i571[1], i570.OnDead)
  var i573 = i571[2]
  var i572 = new (System.Collections.Generic.List$1(Bridge.ns('BodyRenderer')))
  for(var i = 0; i < i573.length; i += 1) {
    i572.add(request.d('BodyRenderer', i573[i + 0]));
  }
  i570.bodyRenderers = i572
  request.r(i571[3], i571[4], 0, i570, 'biteSound')
  request.r(i571[5], i571[6], 0, i570, 'zombieSound')
  request.r(i571[7], i571[8], 0, i570, 'body')
  request.r(i571[9], i571[10], 0, i570, 'zombieBrain')
  request.r(i571[11], i571[12], 0, i570, 'zombieTrigger')
  request.r(i571[13], i571[14], 0, i570, 'zombieGround')
  request.r(i571[15], i571[16], 0, i570, 'attack')
  request.r(i571[17], i571[18], 0, i570, 'humanTrigger')
  i570.turnDelay = i571[19]
  i570.turnHop = i571[20]
  i570.turnArmFlail = i571[21]
  return i570
}

Deserializers["System.Action"] = function (request, data, root) {
  var i574 = root || request.c( 'System.Action' )
  var i575 = data
  return i574
}

Deserializers["BodyRenderer"] = function (request, data, root) {
  var i578 = root || request.c( 'BodyRenderer' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'Renderer')
  request.r(i579[2], i579[3], 0, i578, 'ZSprite')
  return i578
}

Deserializers["SprunkySkin"] = function (request, data, root) {
  var i580 = root || request.c( 'SprunkySkin' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'library')
  request.r(i581[2], i581[3], 0, i580, 'player')
  var i583 = i581[4]
  var i582 = []
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 2, i582, '')
  }
  i580.renderers = i582
  i580.slices = i581[5]
  return i580
}

Deserializers["PlayerAttack"] = function (request, data, root) {
  var i584 = root || request.c( 'PlayerAttack' )
  var i585 = data
  i584.ShootCD = i585[0]
  request.r(i585[1], i585[2], 0, i584, 'balance')
  request.r(i585[3], i585[4], 0, i584, 'gun')
  request.r(i585[5], i585[6], 0, i584, 'bulletPrefab')
  i584.onCD = !!i585[7]
  request.r(i585[8], i585[9], 0, i584, 'shootSound')
  i584.recoil = i585[10]
  request.r(i585[11], i585[12], 0, i584, 'muzzleFlash')
  request.r(i585[13], i585[14], 0, i584, 'playerTrigger')
  i584.droppedGunLifetime = i585[15]
  request.r(i585[16], i585[17], 0, i584, 'player')
  return i584
}

Deserializers["SprunkyOutfit"] = function (request, data, root) {
  var i586 = root || request.c( 'SprunkyOutfit' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'library')
  request.r(i587[2], i587[3], 0, i586, 'hat')
  request.r(i587[4], i587[5], 0, i586, 'chest')
  request.r(i587[6], i587[7], 0, i586, 'lower')
  i586.hatChance = i587[8]
  return i586
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i588 = root || request.c( 'BodyPiece' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'player')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i591 = data
  i590.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i591[0], i590.main)
  i590.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i591[1], i590.colorBySpeed)
  i590.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i591[2], i590.colorOverLifetime)
  i590.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i591[3], i590.emission)
  i590.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i591[4], i590.rotationBySpeed)
  i590.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i591[5], i590.rotationOverLifetime)
  i590.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i591[6], i590.shape)
  i590.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i591[7], i590.sizeBySpeed)
  i590.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i591[8], i590.sizeOverLifetime)
  i590.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i591[9], i590.textureSheetAnimation)
  i590.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i591[10], i590.velocityOverLifetime)
  i590.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i591[11], i590.noise)
  i590.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i591[12], i590.inheritVelocity)
  i590.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i591[13], i590.forceOverLifetime)
  i590.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i591[14], i590.limitVelocityOverLifetime)
  i590.useAutoRandomSeed = !!i591[15]
  i590.randomSeed = i591[16]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemMain()
  var i593 = data
  i592.duration = i593[0]
  i592.loop = !!i593[1]
  i592.prewarm = !!i593[2]
  i592.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[3], i592.startDelay)
  i592.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[4], i592.startLifetime)
  i592.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[5], i592.startSpeed)
  i592.startSize3D = !!i593[6]
  i592.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[7], i592.startSizeX)
  i592.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[8], i592.startSizeY)
  i592.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[9], i592.startSizeZ)
  i592.startRotation3D = !!i593[10]
  i592.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[11], i592.startRotationX)
  i592.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[12], i592.startRotationY)
  i592.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[13], i592.startRotationZ)
  i592.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i593[14], i592.startColor)
  i592.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[15], i592.gravityModifier)
  i592.simulationSpace = i593[16]
  request.r(i593[17], i593[18], 0, i592, 'customSimulationSpace')
  i592.simulationSpeed = i593[19]
  i592.useUnscaledTime = !!i593[20]
  i592.scalingMode = i593[21]
  i592.playOnAwake = !!i593[22]
  i592.maxParticles = i593[23]
  i592.emitterVelocityMode = i593[24]
  i592.stopAction = i593[25]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i594 = root || new pc.MinMaxCurve()
  var i595 = data
  i594.mode = i595[0]
  i594.curveMin = new pc.AnimationCurve( { keys_flow: i595[1] } )
  i594.curveMax = new pc.AnimationCurve( { keys_flow: i595[2] } )
  i594.curveMultiplier = i595[3]
  i594.constantMin = i595[4]
  i594.constantMax = i595[5]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i596 = root || new pc.MinMaxGradient()
  var i597 = data
  i596.mode = i597[0]
  i596.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i597[1], i596.gradientMin)
  i596.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i597[2], i596.gradientMax)
  i596.colorMin = new pc.Color(i597[3], i597[4], i597[5], i597[6])
  i596.colorMax = new pc.Color(i597[7], i597[8], i597[9], i597[10])
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i599 = data
  i598.mode = i599[0]
  var i601 = i599[1]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i601[i + 0]) );
  }
  i598.colorKeys = i600
  var i603 = i599[2]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i603[i + 0]) );
  }
  i598.alphaKeys = i602
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemColorBySpeed()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i605[1], i604.color)
  i604.range = new pc.Vec2( i605[2], i605[3] )
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i609 = data
  i608.color = new pc.Color(i609[0], i609[1], i609[2], i609[3])
  i608.time = i609[4]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i613 = data
  i612.alpha = i613[0]
  i612.time = i613[1]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i614 = root || new pc.ParticleSystemColorOverLifetime()
  var i615 = data
  i614.enabled = !!i615[0]
  i614.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i615[1], i614.color)
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i616 = root || new pc.ParticleSystemEmitter()
  var i617 = data
  i616.enabled = !!i617[0]
  i616.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[1], i616.rateOverTime)
  i616.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[2], i616.rateOverDistance)
  var i619 = i617[3]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i619[i + 0]) );
  }
  i616.bursts = i618
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemBurst()
  var i623 = data
  i622.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[0], i622.count)
  i622.cycleCount = i623[1]
  i622.minCount = i623[2]
  i622.maxCount = i623[3]
  i622.repeatInterval = i623[4]
  i622.time = i623[5]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemRotationBySpeed()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[1], i624.x)
  i624.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[2], i624.y)
  i624.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[3], i624.z)
  i624.separateAxes = !!i625[4]
  i624.range = new pc.Vec2( i625[5], i625[6] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemRotationOverLifetime()
  var i627 = data
  i626.enabled = !!i627[0]
  i626.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[1], i626.x)
  i626.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[2], i626.y)
  i626.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[3], i626.z)
  i626.separateAxes = !!i627[4]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemShape()
  var i629 = data
  i628.enabled = !!i629[0]
  i628.shapeType = i629[1]
  i628.randomDirectionAmount = i629[2]
  i628.sphericalDirectionAmount = i629[3]
  i628.randomPositionAmount = i629[4]
  i628.alignToDirection = !!i629[5]
  i628.radius = i629[6]
  i628.radiusMode = i629[7]
  i628.radiusSpread = i629[8]
  i628.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[9], i628.radiusSpeed)
  i628.radiusThickness = i629[10]
  i628.angle = i629[11]
  i628.length = i629[12]
  i628.boxThickness = new pc.Vec3( i629[13], i629[14], i629[15] )
  i628.meshShapeType = i629[16]
  request.r(i629[17], i629[18], 0, i628, 'mesh')
  request.r(i629[19], i629[20], 0, i628, 'meshRenderer')
  request.r(i629[21], i629[22], 0, i628, 'skinnedMeshRenderer')
  i628.useMeshMaterialIndex = !!i629[23]
  i628.meshMaterialIndex = i629[24]
  i628.useMeshColors = !!i629[25]
  i628.normalOffset = i629[26]
  i628.arc = i629[27]
  i628.arcMode = i629[28]
  i628.arcSpread = i629[29]
  i628.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[30], i628.arcSpeed)
  i628.donutRadius = i629[31]
  i628.position = new pc.Vec3( i629[32], i629[33], i629[34] )
  i628.rotation = new pc.Vec3( i629[35], i629[36], i629[37] )
  i628.scale = new pc.Vec3( i629[38], i629[39], i629[40] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemSizeBySpeed()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[1], i630.x)
  i630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[2], i630.y)
  i630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[3], i630.z)
  i630.separateAxes = !!i631[4]
  i630.range = new pc.Vec2( i631[5], i631[6] )
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemSizeOverLifetime()
  var i633 = data
  i632.enabled = !!i633[0]
  i632.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[1], i632.x)
  i632.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[2], i632.y)
  i632.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[3], i632.z)
  i632.separateAxes = !!i633[4]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i635 = data
  i634.enabled = !!i635[0]
  i634.mode = i635[1]
  i634.animation = i635[2]
  i634.numTilesX = i635[3]
  i634.numTilesY = i635[4]
  i634.useRandomRow = !!i635[5]
  i634.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[6], i634.frameOverTime)
  i634.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[7], i634.startFrame)
  i634.cycleCount = i635[8]
  i634.rowIndex = i635[9]
  i634.flipU = i635[10]
  i634.flipV = i635[11]
  i634.spriteCount = i635[12]
  var i637 = i635[13]
  var i636 = []
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 2, i636, '')
  }
  i634.sprites = i636
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[1], i640.x)
  i640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.y)
  i640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[3], i640.z)
  i640.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[4], i640.radial)
  i640.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[5], i640.speedModifier)
  i640.space = i641[6]
  i640.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[7], i640.orbitalX)
  i640.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[8], i640.orbitalY)
  i640.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[9], i640.orbitalZ)
  i640.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[10], i640.orbitalOffsetX)
  i640.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[11], i640.orbitalOffsetY)
  i640.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[12], i640.orbitalOffsetZ)
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemNoise()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.separateAxes = !!i643[1]
  i642.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.strengthX)
  i642.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[3], i642.strengthY)
  i642.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[4], i642.strengthZ)
  i642.frequency = i643[5]
  i642.damping = !!i643[6]
  i642.octaveCount = i643[7]
  i642.octaveMultiplier = i643[8]
  i642.octaveScale = i643[9]
  i642.quality = i643[10]
  i642.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[11], i642.scrollSpeed)
  i642.scrollSpeedMultiplier = i643[12]
  i642.remapEnabled = !!i643[13]
  i642.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[14], i642.remapX)
  i642.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[15], i642.remapY)
  i642.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[16], i642.remapZ)
  i642.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[17], i642.positionAmount)
  i642.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[18], i642.rotationAmount)
  i642.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[19], i642.sizeAmount)
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemInheritVelocity()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.mode = i645[1]
  i644.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.curve)
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemForceOverLifetime()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[1], i646.x)
  i646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[2], i646.y)
  i646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[3], i646.z)
  i646.space = i647[4]
  i646.randomized = !!i647[5]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[1], i648.limit)
  i648.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[2], i648.limitX)
  i648.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[3], i648.limitY)
  i648.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[4], i648.limitZ)
  i648.dampen = i649[5]
  i648.separateAxes = !!i649[6]
  i648.space = i649[7]
  i648.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[8], i648.drag)
  i648.multiplyDragByParticleSize = !!i649[9]
  i648.multiplyDragByParticleVelocity = !!i649[10]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'mesh')
  i650.meshCount = i651[2]
  i650.activeVertexStreamsCount = i651[3]
  i650.alignment = i651[4]
  i650.renderMode = i651[5]
  i650.sortMode = i651[6]
  i650.lengthScale = i651[7]
  i650.velocityScale = i651[8]
  i650.cameraVelocityScale = i651[9]
  i650.normalDirection = i651[10]
  i650.sortingFudge = i651[11]
  i650.minParticleSize = i651[12]
  i650.maxParticleSize = i651[13]
  i650.pivot = new pc.Vec3( i651[14], i651[15], i651[16] )
  request.r(i651[17], i651[18], 0, i650, 'trailMaterial')
  i650.applyActiveColorSpace = !!i651[19]
  i650.enabled = !!i651[20]
  request.r(i651[21], i651[22], 0, i650, 'sharedMaterial')
  var i653 = i651[23]
  var i652 = []
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 2, i652, '')
  }
  i650.sharedMaterials = i652
  i650.receiveShadows = !!i651[24]
  i650.shadowCastingMode = i651[25]
  i650.sortingLayerID = i651[26]
  i650.sortingOrder = i651[27]
  i650.lightmapIndex = i651[28]
  i650.lightmapSceneIndex = i651[29]
  i650.lightmapScaleOffset = new pc.Vec4( i651[30], i651[31], i651[32], i651[33] )
  i650.lightProbeUsage = i651[34]
  i650.reflectionProbeUsage = i651[35]
  return i650
}

Deserializers["PlayerTrigger"] = function (request, data, root) {
  var i654 = root || request.c( 'PlayerTrigger' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'monster')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i657 = data
  i656.name = i657[0]
  i656.index = i657[1]
  i656.startup = !!i657[2]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i659 = data
  i658.aspect = i659[0]
  i658.orthographic = !!i659[1]
  i658.orthographicSize = i659[2]
  i658.backgroundColor = new pc.Color(i659[3], i659[4], i659[5], i659[6])
  i658.nearClipPlane = i659[7]
  i658.farClipPlane = i659[8]
  i658.fieldOfView = i659[9]
  i658.depth = i659[10]
  i658.clearFlags = i659[11]
  i658.cullingMask = i659[12]
  i658.rect = i659[13]
  request.r(i659[14], i659[15], 0, i658, 'targetTexture')
  i658.usePhysicalProperties = !!i659[16]
  i658.focalLength = i659[17]
  i658.sensorSize = new pc.Vec2( i659[18], i659[19] )
  i658.lensShift = new pc.Vec2( i659[20], i659[21] )
  i658.gateFit = i659[22]
  i658.commandBufferCount = i659[23]
  i658.cameraType = i659[24]
  i658.enabled = !!i659[25]
  return i658
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'm_FirstSelected')
  i660.m_sendNavigationEvents = !!i661[2]
  i660.m_DragThreshold = i661[3]
  return i660
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i663 = data
  i662.m_HorizontalAxis = i663[0]
  i662.m_VerticalAxis = i663[1]
  i662.m_SubmitButton = i663[2]
  i662.m_CancelButton = i663[3]
  i662.m_InputActionsPerSecond = i663[4]
  i662.m_RepeatDelay = i663[5]
  i662.m_ForceModuleActive = !!i663[6]
  i662.m_SendPointerHoverToParent = !!i663[7]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i665 = data
  i664.pivot = new pc.Vec2( i665[0], i665[1] )
  i664.anchorMin = new pc.Vec2( i665[2], i665[3] )
  i664.anchorMax = new pc.Vec2( i665[4], i665[5] )
  i664.sizeDelta = new pc.Vec2( i665[6], i665[7] )
  i664.anchoredPosition3D = new pc.Vec3( i665[8], i665[9], i665[10] )
  i664.rotation = new pc.Quat(i665[11], i665[12], i665[13], i665[14])
  i664.scale = new pc.Vec3( i665[15], i665[16], i665[17] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i667 = data
  i666.planeDistance = i667[0]
  i666.referencePixelsPerUnit = i667[1]
  i666.isFallbackOverlay = !!i667[2]
  i666.renderMode = i667[3]
  i666.renderOrder = i667[4]
  i666.sortingLayerName = i667[5]
  i666.sortingOrder = i667[6]
  i666.scaleFactor = i667[7]
  request.r(i667[8], i667[9], 0, i666, 'worldCamera')
  i666.overrideSorting = !!i667[10]
  i666.pixelPerfect = !!i667[11]
  i666.targetDisplay = i667[12]
  i666.overridePixelPerfect = !!i667[13]
  i666.enabled = !!i667[14]
  return i666
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i669 = data
  i668.m_UiScaleMode = i669[0]
  i668.m_ReferencePixelsPerUnit = i669[1]
  i668.m_ScaleFactor = i669[2]
  i668.m_ReferenceResolution = new pc.Vec2( i669[3], i669[4] )
  i668.m_ScreenMatchMode = i669[5]
  i668.m_MatchWidthOrHeight = i669[6]
  i668.m_PhysicalUnit = i669[7]
  i668.m_FallbackScreenDPI = i669[8]
  i668.m_DefaultSpriteDPI = i669[9]
  i668.m_DynamicPixelsPerUnit = i669[10]
  i668.m_PresetInfoIsWorld = !!i669[11]
  return i668
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i671 = data
  i670.m_IgnoreReversedGraphics = !!i671[0]
  i670.m_BlockingObjects = i671[1]
  i670.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i671[2] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i673 = data
  i672.cullTransparentMesh = !!i673[0]
  return i672
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.Image' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_Sprite')
  i674.m_Type = i675[2]
  i674.m_PreserveAspect = !!i675[3]
  i674.m_FillCenter = !!i675[4]
  i674.m_FillMethod = i675[5]
  i674.m_FillAmount = i675[6]
  i674.m_FillClockwise = !!i675[7]
  i674.m_FillOrigin = i675[8]
  i674.m_UseSpriteMesh = !!i675[9]
  i674.m_PixelsPerUnitMultiplier = i675[10]
  request.r(i675[11], i675[12], 0, i674, 'm_Material')
  i674.m_Maskable = !!i675[13]
  i674.m_Color = new pc.Color(i675[14], i675[15], i675[16], i675[17])
  i674.m_RaycastTarget = !!i675[18]
  i674.m_RaycastPadding = new pc.Vec4( i675[19], i675[20], i675[21], i675[22] )
  return i674
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.Text' )
  var i677 = data
  i676.m_FontData = request.d('UnityEngine.UI.FontData', i677[0], i676.m_FontData)
  i676.m_Text = i677[1]
  request.r(i677[2], i677[3], 0, i676, 'm_Material')
  i676.m_Maskable = !!i677[4]
  i676.m_Color = new pc.Color(i677[5], i677[6], i677[7], i677[8])
  i676.m_RaycastTarget = !!i677[9]
  i676.m_RaycastPadding = new pc.Vec4( i677[10], i677[11], i677[12], i677[13] )
  return i676
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.FontData' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'm_Font')
  i678.m_FontSize = i679[2]
  i678.m_FontStyle = i679[3]
  i678.m_BestFit = !!i679[4]
  i678.m_MinSize = i679[5]
  i678.m_MaxSize = i679[6]
  i678.m_Alignment = i679[7]
  i678.m_AlignByGeometry = !!i679[8]
  i678.m_RichText = !!i679[9]
  i678.m_HorizontalOverflow = i679[10]
  i678.m_VerticalOverflow = i679[11]
  i678.m_LineSpacing = i679[12]
  return i678
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i680 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i681 = data
  i680.targetIsSelf = !!i681[0]
  request.r(i681[1], i681[2], 0, i680, 'targetGO')
  i680.tweenTargetIsTargetGO = !!i681[3]
  i680.delay = i681[4]
  i680.duration = i681[5]
  i680.easeType = i681[6]
  i680.easeCurve = new pc.AnimationCurve( { keys_flow: i681[7] } )
  i680.loopType = i681[8]
  i680.loops = i681[9]
  i680.id = i681[10]
  i680.isRelative = !!i681[11]
  i680.isFrom = !!i681[12]
  i680.isIndependentUpdate = !!i681[13]
  i680.autoKill = !!i681[14]
  i680.autoGenerate = !!i681[15]
  i680.isActive = !!i681[16]
  i680.isValid = !!i681[17]
  request.r(i681[18], i681[19], 0, i680, 'target')
  i680.animationType = i681[20]
  i680.targetType = i681[21]
  i680.forcedTargetType = i681[22]
  i680.autoPlay = !!i681[23]
  i680.useTargetAsV3 = !!i681[24]
  i680.endValueFloat = i681[25]
  i680.endValueV3 = new pc.Vec3( i681[26], i681[27], i681[28] )
  i680.endValueV2 = new pc.Vec2( i681[29], i681[30] )
  i680.endValueColor = new pc.Color(i681[31], i681[32], i681[33], i681[34])
  i680.endValueString = i681[35]
  i680.endValueRect = UnityEngine.Rect.MinMaxRect(i681[36], i681[37], i681[38], i681[39])
  request.r(i681[40], i681[41], 0, i680, 'endValueTransform')
  i680.optionalBool0 = !!i681[42]
  i680.optionalBool1 = !!i681[43]
  i680.optionalFloat0 = i681[44]
  i680.optionalInt0 = i681[45]
  i680.optionalRotationMode = i681[46]
  i680.optionalScrambleMode = i681[47]
  i680.optionalShakeRandomnessMode = i681[48]
  i680.optionalString = i681[49]
  i680.updateType = i681[50]
  i680.isSpeedBased = !!i681[51]
  i680.hasOnStart = !!i681[52]
  i680.hasOnPlay = !!i681[53]
  i680.hasOnUpdate = !!i681[54]
  i680.hasOnStepComplete = !!i681[55]
  i680.hasOnComplete = !!i681[56]
  i680.hasOnTweenCreated = !!i681[57]
  i680.hasOnRewind = !!i681[58]
  i680.onStart = request.d('UnityEngine.Events.UnityEvent', i681[59], i680.onStart)
  i680.onPlay = request.d('UnityEngine.Events.UnityEvent', i681[60], i680.onPlay)
  i680.onUpdate = request.d('UnityEngine.Events.UnityEvent', i681[61], i680.onUpdate)
  i680.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i681[62], i680.onStepComplete)
  i680.onComplete = request.d('UnityEngine.Events.UnityEvent', i681[63], i680.onComplete)
  i680.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i681[64], i680.onTweenCreated)
  i680.onRewind = request.d('UnityEngine.Events.UnityEvent', i681[65], i680.onRewind)
  return i680
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i683 = data
  i682.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i683[0], i682.m_PersistentCalls)
  return i682
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i685 = data
  var i687 = i685[0]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i687.length; i += 1) {
    i686.add(request.d('UnityEngine.Events.PersistentCall', i687[i + 0]));
  }
  i684.m_Calls = i686
  return i684
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'm_Target')
  i690.m_TargetAssemblyTypeName = i691[2]
  i690.m_MethodName = i691[3]
  i690.m_Mode = i691[4]
  i690.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i691[5], i690.m_Arguments)
  i690.m_CallState = i691[6]
  return i690
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.Button' )
  var i693 = data
  i692.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i693[0], i692.m_OnClick)
  i692.m_Navigation = request.d('UnityEngine.UI.Navigation', i693[1], i692.m_Navigation)
  i692.m_Transition = i693[2]
  i692.m_Colors = request.d('UnityEngine.UI.ColorBlock', i693[3], i692.m_Colors)
  i692.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i693[4], i692.m_SpriteState)
  i692.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i693[5], i692.m_AnimationTriggers)
  i692.m_Interactable = !!i693[6]
  request.r(i693[7], i693[8], 0, i692, 'm_TargetGraphic')
  return i692
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i695 = data
  i694.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i695[0], i694.m_PersistentCalls)
  return i694
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i697 = data
  i696.m_Mode = i697[0]
  i696.m_WrapAround = !!i697[1]
  request.r(i697[2], i697[3], 0, i696, 'm_SelectOnUp')
  request.r(i697[4], i697[5], 0, i696, 'm_SelectOnDown')
  request.r(i697[6], i697[7], 0, i696, 'm_SelectOnLeft')
  request.r(i697[8], i697[9], 0, i696, 'm_SelectOnRight')
  return i696
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i699 = data
  i698.m_NormalColor = new pc.Color(i699[0], i699[1], i699[2], i699[3])
  i698.m_HighlightedColor = new pc.Color(i699[4], i699[5], i699[6], i699[7])
  i698.m_PressedColor = new pc.Color(i699[8], i699[9], i699[10], i699[11])
  i698.m_SelectedColor = new pc.Color(i699[12], i699[13], i699[14], i699[15])
  i698.m_DisabledColor = new pc.Color(i699[16], i699[17], i699[18], i699[19])
  i698.m_ColorMultiplier = i699[20]
  i698.m_FadeDuration = i699[21]
  return i698
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_HighlightedSprite')
  request.r(i701[2], i701[3], 0, i700, 'm_PressedSprite')
  request.r(i701[4], i701[5], 0, i700, 'm_SelectedSprite')
  request.r(i701[6], i701[7], 0, i700, 'm_DisabledSprite')
  return i700
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i703 = data
  i702.m_NormalTrigger = i703[0]
  i702.m_HighlightedTrigger = i703[1]
  i702.m_PressedTrigger = i703[2]
  i702.m_SelectedTrigger = i703[3]
  i702.m_DisabledTrigger = i703[4]
  return i702
}

Deserializers["SkinIcon"] = function (request, data, root) {
  var i704 = root || request.c( 'SkinIcon' )
  var i705 = data
  i704.side = i705[0]
  var i707 = i705[1]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i704.icons = i706
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'clip')
  request.r(i709[2], i709[3], 0, i708, 'outputAudioMixerGroup')
  i708.playOnAwake = !!i709[4]
  i708.loop = !!i709[5]
  i708.time = i709[6]
  i708.volume = i709[7]
  i708.pitch = i709[8]
  i708.enabled = !!i709[9]
  return i708
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_Texture')
  i710.m_UVRect = UnityEngine.Rect.MinMaxRect(i711[2], i711[3], i711[4], i711[5])
  request.r(i711[6], i711[7], 0, i710, 'm_Material')
  i710.m_Maskable = !!i711[8]
  i710.m_Color = new pc.Color(i711[9], i711[10], i711[11], i711[12])
  i710.m_RaycastTarget = !!i711[13]
  i710.m_RaycastPadding = new pc.Vec4( i711[14], i711[15], i711[16], i711[17] )
  return i710
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i713 = data
  i712.m_AspectMode = i713[0]
  i712.m_AspectRatio = i713[1]
  return i712
}

Deserializers["MonsterOptionController"] = function (request, data, root) {
  var i714 = root || request.c( 'MonsterOptionController' )
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

Deserializers["HumanOptionController"] = function (request, data, root) {
  var i720 = root || request.c( 'HumanOptionController' )
  var i721 = data
  i720.OnSpawn = request.d('System.Action', i721[0], i720.OnSpawn)
  i720.OnEmpty = request.d('System.Action', i721[1], i720.OnEmpty)
  i720.OnEnd = request.d('System.Action', i721[2], i720.OnEnd)
  request.r(i721[3], i721[4], 0, i720, 'spawnPrefab')
  var i723 = i721[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.spawnPrefabs = i722
  i720.numCharacter = i721[6]
  request.r(i721[7], i721[8], 0, i720, 'numText')
  request.r(i721[9], i721[10], 0, i720, 'world')
  request.r(i721[11], i721[12], 0, i720, 'area')
  request.r(i721[13], i721[14], 0, i720, 'areaTut')
  return i720
}

Deserializers["GameController"] = function (request, data, root) {
  var i724 = root || request.c( 'GameController' )
  var i725 = data
  i724.maxSpawn = i725[0]
  i724.OnSpawn = request.d('System.Action', i725[1], i724.OnSpawn)
  i724.OnEmpty = request.d('System.Action', i725[2], i724.OnEmpty)
  request.r(i725[3], i725[4], 0, i724, 'startScene')
  request.r(i725[5], i725[6], 0, i724, 'endScene')
  i724.human = request.d('Option', i725[7], i724.human)
  i724.monster = request.d('Option', i725[8], i724.monster)
  request.r(i725[9], i725[10], 0, i724, 'clickSound')
  request.r(i725[11], i725[12], 0, i724, 'optionController')
  return i724
}

Deserializers["Option"] = function (request, data, root) {
  var i726 = root || request.c( 'Option' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'Button')
  request.r(i727[2], i727[3], 0, i726, 'Controller')
  return i726
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i728 = root || request.c( 'LayoutController' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, 'cam')
  var i731 = i729[2]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 1, i730, '')
  }
  i728.UI = i730
  return i728
}

Deserializers["LunaController"] = function (request, data, root) {
  var i734 = root || request.c( 'LunaController' )
  var i735 = data
  i734.OneClick = !!i735[0]
  request.r(i735[1], i735[2], 0, i734, 'BGTexture')
  i734.Header = i735[3]
  i734.HeaderColor = new pc.Color(i735[4], i735[5], i735[6], i735[7])
  i734.UseTime = !!i735[8]
  i734.TimePlay = i735[9]
  i734.MaxCountPlay = i735[10]
  i734.Player = i735[11]
  i734.Zombie = i735[12]
  request.r(i735[13], i735[14], 0, i734, 'BGImage')
  request.r(i735[15], i735[16], 0, i734, 'headerText')
  var i737 = i735[17]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 1, i736, '')
  }
  i734.CTA = i736
  request.r(i735[18], i735[19], 0, i734, 'endCard')
  return i734
}

Deserializers["AudioController"] = function (request, data, root) {
  var i740 = root || request.c( 'AudioController' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'BGM')
  request.r(i741[2], i741[3], 0, i740, 'musicSource')
  request.r(i741[4], i741[5], 0, i740, 'pool')
  return i740
}

Deserializers["PoolController"] = function (request, data, root) {
  var i742 = root || request.c( 'PoolController' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'poolParent')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i745 = data
  i744.ambientIntensity = i745[0]
  i744.reflectionIntensity = i745[1]
  i744.ambientMode = i745[2]
  i744.ambientLight = new pc.Color(i745[3], i745[4], i745[5], i745[6])
  i744.ambientSkyColor = new pc.Color(i745[7], i745[8], i745[9], i745[10])
  i744.ambientGroundColor = new pc.Color(i745[11], i745[12], i745[13], i745[14])
  i744.ambientEquatorColor = new pc.Color(i745[15], i745[16], i745[17], i745[18])
  i744.fogColor = new pc.Color(i745[19], i745[20], i745[21], i745[22])
  i744.fogEndDistance = i745[23]
  i744.fogStartDistance = i745[24]
  i744.fogDensity = i745[25]
  i744.fog = !!i745[26]
  request.r(i745[27], i745[28], 0, i744, 'skybox')
  i744.fogMode = i745[29]
  var i747 = i745[30]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i747[i + 0]) );
  }
  i744.lightmaps = i746
  i744.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i745[31], i744.lightProbes)
  i744.lightmapsMode = i745[32]
  i744.mixedBakeMode = i745[33]
  i744.environmentLightingMode = i745[34]
  i744.ambientProbe = new pc.SphericalHarmonicsL2(i745[35])
  request.r(i745[36], i745[37], 0, i744, 'customReflection')
  request.r(i745[38], i745[39], 0, i744, 'defaultReflection')
  i744.defaultReflectionMode = i745[40]
  i744.defaultReflectionResolution = i745[41]
  i744.sunLightObjectId = i745[42]
  i744.pixelLightCount = i745[43]
  i744.defaultReflectionHDR = !!i745[44]
  i744.hasLightDataAsset = !!i745[45]
  i744.hasManualGenerate = !!i745[46]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'lightmapColor')
  request.r(i751[2], i751[3], 0, i750, 'lightmapDirection')
  request.r(i751[4], i751[5], 0, i750, 'shadowMask')
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i752 = root || new UnityEngine.LightProbes()
  var i753 = data
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i761 = data
  i760.name = i761[0]
  i760.bounciness = i761[1]
  i760.friction = i761[2]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i763 = data
  var i765 = i763[0]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i765[i + 0]));
  }
  i762.ShaderCompilationErrors = i764
  i762.name = i763[1]
  i762.guid = i763[2]
  var i767 = i763[3]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i762.shaderDefinedKeywords = i766
  var i769 = i763[4]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i769[i + 0]) );
  }
  i762.passes = i768
  var i771 = i763[5]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i771[i + 0]) );
  }
  i762.usePasses = i770
  var i773 = i763[6]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i773[i + 0]) );
  }
  i762.defaultParameterValues = i772
  request.r(i763[7], i763[8], 0, i762, 'unityFallbackShader')
  i762.readDepth = !!i763[9]
  i762.hasDepthOnlyPass = !!i763[10]
  i762.isCreatedByShaderGraph = !!i763[11]
  i762.disableBatching = !!i763[12]
  i762.compiled = !!i763[13]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i777 = data
  i776.shaderName = i777[0]
  i776.errorMessage = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i782 = root || new pc.UnityShaderPass()
  var i783 = data
  i782.id = i783[0]
  i782.subShaderIndex = i783[1]
  i782.name = i783[2]
  i782.passType = i783[3]
  i782.grabPassTextureName = i783[4]
  i782.usePass = !!i783[5]
  i782.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[6], i782.zTest)
  i782.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[7], i782.zWrite)
  i782.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[8], i782.culling)
  i782.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i783[9], i782.blending)
  i782.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i783[10], i782.alphaBlending)
  i782.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[11], i782.colorWriteMask)
  i782.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[12], i782.offsetUnits)
  i782.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[13], i782.offsetFactor)
  i782.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[14], i782.stencilRef)
  i782.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[15], i782.stencilReadMask)
  i782.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i783[16], i782.stencilWriteMask)
  i782.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i783[17], i782.stencilOp)
  i782.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i783[18], i782.stencilOpFront)
  i782.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i783[19], i782.stencilOpBack)
  var i785 = i783[20]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i785[i + 0]) );
  }
  i782.tags = i784
  var i787 = i783[21]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( i787[i + 0] );
  }
  i782.passDefinedKeywords = i786
  var i789 = i783[22]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i789[i + 0]) );
  }
  i782.passDefinedKeywordGroups = i788
  var i791 = i783[23]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i791[i + 0]) );
  }
  i782.variants = i790
  var i793 = i783[24]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i793[i + 0]) );
  }
  i782.excludedVariants = i792
  i782.hasDepthReader = !!i783[25]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i795 = data
  i794.val = i795[0]
  i794.name = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i797 = data
  i796.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[0], i796.src)
  i796.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[1], i796.dst)
  i796.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[2], i796.op)
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i799 = data
  i798.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[0], i798.pass)
  i798.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[1], i798.fail)
  i798.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[2], i798.zFail)
  i798.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i799[3], i798.comp)
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i803 = data
  i802.name = i803[0]
  i802.value = i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i807 = data
  var i809 = i807[0]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i806.keywords = i808
  i806.hasDiscard = !!i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i813 = data
  i812.passId = i813[0]
  i812.subShaderIndex = i813[1]
  var i815 = i813[2]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( i815[i + 0] );
  }
  i812.keywords = i814
  i812.vertexProgram = i813[3]
  i812.fragmentProgram = i813[4]
  i812.exportedForWebGl2 = !!i813[5]
  i812.readDepth = !!i813[6]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'shader')
  i818.pass = i819[2]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i823 = data
  i822.name = i823[0]
  i822.type = i823[1]
  i822.value = new pc.Vec4( i823[2], i823[3], i823[4], i823[5] )
  i822.textureValue = i823[6]
  i822.shaderPropertyFlag = i823[7]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i825 = data
  i824.name = i825[0]
  request.r(i825[1], i825[2], 0, i824, 'texture')
  i824.aabb = i825[3]
  i824.vertices = i825[4]
  i824.triangles = i825[5]
  i824.textureRect = UnityEngine.Rect.MinMaxRect(i825[6], i825[7], i825[8], i825[9])
  i824.packedRect = UnityEngine.Rect.MinMaxRect(i825[10], i825[11], i825[12], i825[13])
  i824.border = new pc.Vec4( i825[14], i825[15], i825[16], i825[17] )
  i824.transparency = i825[18]
  i824.bounds = i825[19]
  i824.pixelsPerUnit = i825[20]
  i824.textureWidth = i825[21]
  i824.textureHeight = i825[22]
  i824.nativeSize = new pc.Vec2( i825[23], i825[24] )
  i824.pivot = new pc.Vec2( i825[25], i825[26] )
  i824.textureRectOffset = new pc.Vec2( i825[27], i825[28] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i827 = data
  i826.name = i827[0]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i829 = data
  i828.name = i829[0]
  i828.ascent = i829[1]
  i828.originalLineHeight = i829[2]
  i828.fontSize = i829[3]
  var i831 = i829[4]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i831[i + 0]) );
  }
  i828.characterInfo = i830
  request.r(i829[5], i829[6], 0, i828, 'texture')
  i828.originalFontSize = i829[7]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i835 = data
  i834.index = i835[0]
  i834.advance = i835[1]
  i834.bearing = i835[2]
  i834.glyphWidth = i835[3]
  i834.glyphHeight = i835[4]
  i834.minX = i835[5]
  i834.maxX = i835[6]
  i834.minY = i835[7]
  i834.maxY = i835[8]
  i834.uvBottomLeftX = i835[9]
  i834.uvBottomLeftY = i835[10]
  i834.uvBottomRightX = i835[11]
  i834.uvBottomRightY = i835[12]
  i834.uvTopLeftX = i835[13]
  i834.uvTopLeftY = i835[14]
  i834.uvTopRightX = i835[15]
  i834.uvTopRightY = i835[16]
  return i834
}

Deserializers["SprunkySkinLibrary"] = function (request, data, root) {
  var i836 = root || request.c( 'SprunkySkinLibrary' )
  var i837 = data
  var i839 = i837[0]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('SprunkySkinLibrary+Skin', i839[i + 0]) );
  }
  i836.Skins = i838
  return i836
}

Deserializers["SprunkySkinLibrary+Skin"] = function (request, data, root) {
  var i842 = root || request.c( 'SprunkySkinLibrary+Skin' )
  var i843 = data
  i842.Id = i843[0]
  var i845 = i843[1]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.Body = i844
  var i847 = i843[2]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i842.Zombie = i846
  return i842
}

Deserializers["OutfitLibrary"] = function (request, data, root) {
  var i848 = root || request.c( 'OutfitLibrary' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('OutfitLibrary+Outfit', i851[i + 0]) );
  }
  i848.Outfits = i850
  return i848
}

Deserializers["OutfitLibrary+Outfit"] = function (request, data, root) {
  var i854 = root || request.c( 'OutfitLibrary+Outfit' )
  var i855 = data
  i854.Name = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'Hat')
  i854.HatOffset = new pc.Vec2( i855[3], i855[4] )
  request.r(i855[5], i855[6], 0, i854, 'Chest')
  request.r(i855[7], i855[8], 0, i854, 'Lower')
  return i854
}

Deserializers["ZombieSkinLibrary"] = function (request, data, root) {
  var i856 = root || request.c( 'ZombieSkinLibrary' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('ZombieSkinLibrary+Skin', i859[i + 0]) );
  }
  i856.Skins = i858
  return i856
}

Deserializers["ZombieSkinLibrary+Skin"] = function (request, data, root) {
  var i862 = root || request.c( 'ZombieSkinLibrary+Skin' )
  var i863 = data
  i862.Id = i863[0]
  var i865 = i863[1]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.A = i864
  var i867 = i863[2]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i862.B = i866
  return i862
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i868 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i869 = data
  i868.useSafeMode = !!i869[0]
  i868.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i869[1], i868.safeModeOptions)
  i868.timeScale = i869[2]
  i868.unscaledTimeScale = i869[3]
  i868.useSmoothDeltaTime = !!i869[4]
  i868.maxSmoothUnscaledTime = i869[5]
  i868.rewindCallbackMode = i869[6]
  i868.showUnityEditorReport = !!i869[7]
  i868.logBehaviour = i869[8]
  i868.drawGizmos = !!i869[9]
  i868.defaultRecyclable = !!i869[10]
  i868.defaultAutoPlay = i869[11]
  i868.defaultUpdateType = i869[12]
  i868.defaultTimeScaleIndependent = !!i869[13]
  i868.defaultEaseType = i869[14]
  i868.defaultEaseOvershootOrAmplitude = i869[15]
  i868.defaultEasePeriod = i869[16]
  i868.defaultAutoKill = !!i869[17]
  i868.defaultLoopType = i869[18]
  i868.debugMode = !!i869[19]
  i868.debugStoreTargetId = !!i869[20]
  i868.showPreviewPanel = !!i869[21]
  i868.storeSettingsLocation = i869[22]
  i868.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i869[23], i868.modules)
  i868.createASMDEF = !!i869[24]
  i868.showPlayingTweens = !!i869[25]
  i868.showPausedTweens = !!i869[26]
  return i868
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i870 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i871 = data
  i870.logBehaviour = i871[0]
  i870.nestedTweenFailureBehaviour = i871[1]
  return i870
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i872 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i873 = data
  i872.showPanel = !!i873[0]
  i872.audioEnabled = !!i873[1]
  i872.physicsEnabled = !!i873[2]
  i872.physics2DEnabled = !!i873[3]
  i872.spriteEnabled = !!i873[4]
  i872.uiEnabled = !!i873[5]
  i872.textMeshProEnabled = !!i873[6]
  i872.tk2DEnabled = !!i873[7]
  i872.deAudioEnabled = !!i873[8]
  i872.deUnityExtendedEnabled = !!i873[9]
  i872.epoOutlineEnabled = !!i873[10]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i875 = data
  var i877 = i875[0]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i877[i + 0]) );
  }
  i874.files = i876
  i874.componentToPrefabIds = i875[1]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i881 = data
  i880.path = i881[0]
  request.r(i881[1], i881[2], 0, i880, 'unityObject')
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i883 = data
  var i885 = i883[0]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i885[i + 0]) );
  }
  i882.scriptsExecutionOrder = i884
  var i887 = i883[1]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i887[i + 0]) );
  }
  i882.sortingLayers = i886
  var i889 = i883[2]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i889[i + 0]) );
  }
  i882.cullingLayers = i888
  i882.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i883[3], i882.timeSettings)
  i882.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i883[4], i882.physicsSettings)
  i882.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i883[5], i882.physics2DSettings)
  i882.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i883[6], i882.qualitySettings)
  i882.enableRealtimeShadows = !!i883[7]
  i882.enableAutoInstancing = !!i883[8]
  i882.enableStaticBatching = !!i883[9]
  i882.enableDynamicBatching = !!i883[10]
  i882.usePreservativeDynamicBatching = !!i883[11]
  i882.lightmapEncodingQuality = i883[12]
  i882.desiredColorSpace = i883[13]
  var i891 = i883[14]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( i891[i + 0] );
  }
  i882.allTags = i890
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i895 = data
  i894.name = i895[0]
  i894.value = i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i899 = data
  i898.id = i899[0]
  i898.name = i899[1]
  i898.value = i899[2]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i903 = data
  i902.id = i903[0]
  i902.name = i903[1]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i905 = data
  i904.fixedDeltaTime = i905[0]
  i904.maximumDeltaTime = i905[1]
  i904.timeScale = i905[2]
  i904.maximumParticleTimestep = i905[3]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i907 = data
  i906.gravity = new pc.Vec3( i907[0], i907[1], i907[2] )
  i906.defaultSolverIterations = i907[3]
  i906.bounceThreshold = i907[4]
  i906.autoSyncTransforms = !!i907[5]
  i906.autoSimulation = !!i907[6]
  var i909 = i907[7]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i909[i + 0]) );
  }
  i906.collisionMatrix = i908
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i913 = data
  i912.enabled = !!i913[0]
  i912.layerId = i913[1]
  i912.otherLayerId = i913[2]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'material')
  i914.gravity = new pc.Vec2( i915[2], i915[3] )
  i914.positionIterations = i915[4]
  i914.velocityIterations = i915[5]
  i914.velocityThreshold = i915[6]
  i914.maxLinearCorrection = i915[7]
  i914.maxAngularCorrection = i915[8]
  i914.maxTranslationSpeed = i915[9]
  i914.maxRotationSpeed = i915[10]
  i914.baumgarteScale = i915[11]
  i914.baumgarteTOIScale = i915[12]
  i914.timeToSleep = i915[13]
  i914.linearSleepTolerance = i915[14]
  i914.angularSleepTolerance = i915[15]
  i914.defaultContactOffset = i915[16]
  i914.autoSimulation = !!i915[17]
  i914.queriesHitTriggers = !!i915[18]
  i914.queriesStartInColliders = !!i915[19]
  i914.callbacksOnDisable = !!i915[20]
  i914.reuseCollisionCallbacks = !!i915[21]
  i914.autoSyncTransforms = !!i915[22]
  var i917 = i915[23]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i917[i + 0]) );
  }
  i914.collisionMatrix = i916
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i921 = data
  i920.enabled = !!i921[0]
  i920.layerId = i921[1]
  i920.otherLayerId = i921[2]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i923 = data
  var i925 = i923[0]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i925[i + 0]) );
  }
  i922.qualityLevels = i924
  var i927 = i923[1]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i922.names = i926
  i922.shadows = i923[2]
  i922.anisotropicFiltering = i923[3]
  i922.antiAliasing = i923[4]
  i922.lodBias = i923[5]
  i922.shadowCascades = i923[6]
  i922.shadowDistance = i923[7]
  i922.shadowmaskMode = i923[8]
  i922.shadowProjection = i923[9]
  i922.shadowResolution = i923[10]
  i922.softParticles = !!i923[11]
  i922.softVegetation = !!i923[12]
  i922.activeColorSpace = i923[13]
  i922.desiredColorSpace = i923[14]
  i922.masterTextureLimit = i923[15]
  i922.maxQueuedFrames = i923[16]
  i922.particleRaycastBudget = i923[17]
  i922.pixelLightCount = i923[18]
  i922.realtimeReflectionProbes = !!i923[19]
  i922.shadowCascade2Split = i923[20]
  i922.shadowCascade4Split = new pc.Vec3( i923[21], i923[22], i923[23] )
  i922.streamingMipmapsActive = !!i923[24]
  i922.vSyncCount = i923[25]
  i922.asyncUploadBufferSize = i923[26]
  i922.asyncUploadTimeSlice = i923[27]
  i922.billboardsFaceCameraPosition = !!i923[28]
  i922.shadowNearPlaneOffset = i923[29]
  i922.streamingMipmapsMemoryBudget = i923[30]
  i922.maximumLODLevel = i923[31]
  i922.streamingMipmapsAddAllCameras = !!i923[32]
  i922.streamingMipmapsMaxLevelReduction = i923[33]
  i922.streamingMipmapsRenderersPerFrame = i923[34]
  i922.resolutionScalingFixedDPIFactor = i923[35]
  i922.streamingMipmapsMaxFileIORequests = i923[36]
  i922.currentQualityLevel = i923[37]
  return i922
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'm_ObjectArgument')
  i930.m_ObjectArgumentAssemblyTypeName = i931[2]
  i930.m_IntArgument = i931[3]
  i930.m_FloatArgument = i931[4]
  i930.m_StringArgument = i931[5]
  i930.m_BoolArgument = !!i931[6]
  return i930
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[32],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[12],"77":[12],"78":[12],"79":[12],"80":[12],"81":[12],"13":[12],"82":[12],"83":[12],"84":[12],"85":[12],"86":[12],"87":[12],"88":[32],"89":[90],"91":[92],"93":[92],"38":[37],"47":[42],"94":[7],"95":[32],"96":[97],"98":[37],"99":[41,37],"100":[90],"101":[41,37],"102":[37],"103":[37],"104":[90,37],"105":[37,41],"106":[107],"108":[107],"109":[107],"110":[37],"111":[37],"40":[38],"42":[41,37],"50":[37],"39":[38],"112":[37],"113":[37],"114":[37],"115":[37],"116":[37],"117":[37],"118":[37],"119":[37],"120":[37],"49":[41,37],"121":[37],"122":[37],"123":[37],"124":[37],"43":[41,37],"125":[37],"126":[35],"127":[35],"36":[35],"128":[35],"129":[32],"130":[32]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.Rendering.SortingGroup","RagdollBalance","UnityEngine.Rigidbody2D","UnityEngine.HingeJoint2D","UnityEngine.BoxCollider2D","MonsterController","MonsterTrigger","GroundCheck","MonsterSkin","ZombieSkinLibrary","UnityEngine.PhysicsMaterial2D","PlayerController","UnityEngine.GameObject","PlayerAttack","SprunkySkin","SprunkySkinLibrary","UnityEngine.ParticleSystem","PlayerTrigger","SprunkyOutfit","OutfitLibrary","BodyPiece","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","SkinIcon","UnityEngine.AudioSource","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","MonsterOptionController","HumanOptionController","GameController","LayoutController","LunaController","AudioController","PoolController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "11/11/2026 09:05:38";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_SRP_V10_HoaiTT";

Deserializers.lunaAppID = "42814";

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

Deserializers.buildID = "017a1e71-3e08-46a6-80b5-3fc90fc8efbf";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


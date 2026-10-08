var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointSpring' )
  var i415 = data
  i414.spring = i415[0]
  i414.damper = i415[1]
  i414.targetPosition = i415[2]
  return i414
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.JointMotor' )
  var i417 = data
  i416.m_TargetVelocity = i417[0]
  i416.m_Force = i417[1]
  i416.m_FreeSpin = i417[2]
  return i416
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.JointLimits' )
  var i419 = data
  i418.m_Min = i419[0]
  i418.m_Max = i419[1]
  i418.m_Bounciness = i419[2]
  i418.m_BounceMinVelocity = i419[3]
  i418.m_ContactDistance = i419[4]
  i418.minBounce = i419[5]
  i418.maxBounce = i419[6]
  return i418
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.JointDrive' )
  var i421 = data
  i420.m_PositionSpring = i421[0]
  i420.m_PositionDamper = i421[1]
  i420.m_MaximumForce = i421[2]
  i420.m_UseAcceleration = i421[3]
  return i420
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i423 = data
  i422.m_Spring = i423[0]
  i422.m_Damper = i423[1]
  return i422
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i425 = data
  i424.m_Limit = i425[0]
  i424.m_Bounciness = i425[1]
  i424.m_ContactDistance = i425[2]
  return i424
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i427 = data
  i426.m_ExtremumSlip = i427[0]
  i426.m_ExtremumValue = i427[1]
  i426.m_AsymptoteSlip = i427[2]
  i426.m_AsymptoteValue = i427[3]
  i426.m_Stiffness = i427[4]
  return i426
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i429 = data
  i428.m_LowerAngle = i429[0]
  i428.m_UpperAngle = i429[1]
  return i428
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i431 = data
  i430.m_MotorSpeed = i431[0]
  i430.m_MaximumMotorTorque = i431[1]
  return i430
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i433 = data
  i432.m_DampingRatio = i433[0]
  i432.m_Frequency = i433[1]
  i432.m_Angle = i433[2]
  return i432
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i435 = data
  i434.m_LowerTranslation = i435[0]
  i434.m_UpperTranslation = i435[1]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i437 = data
  i436.name = i437[0]
  i436.width = i437[1]
  i436.height = i437[2]
  i436.mipmapCount = i437[3]
  i436.anisoLevel = i437[4]
  i436.filterMode = i437[5]
  i436.hdr = !!i437[6]
  i436.format = i437[7]
  i436.wrapMode = i437[8]
  i436.alphaIsTransparency = !!i437[9]
  i436.alphaSource = i437[10]
  i436.graphicsFormat = i437[11]
  i436.sRGBTexture = !!i437[12]
  i436.desiredColorSpace = i437[13]
  i436.wrapU = i437[14]
  i436.wrapV = i437[15]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i438 = root || new pc.UnityMaterial()
  var i439 = data
  i438.name = i439[0]
  request.r(i439[1], i439[2], 0, i438, 'shader')
  i438.renderQueue = i439[3]
  i438.enableInstancing = !!i439[4]
  var i441 = i439[5]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i441[i + 0]) );
  }
  i438.floatParameters = i440
  var i443 = i439[6]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i443[i + 0]) );
  }
  i438.colorParameters = i442
  var i445 = i439[7]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i445[i + 0]) );
  }
  i438.vectorParameters = i444
  var i447 = i439[8]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i447[i + 0]) );
  }
  i438.textureParameters = i446
  var i449 = i439[9]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i449[i + 0]) );
  }
  i438.materialFlags = i448
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i453 = data
  i452.name = i453[0]
  i452.value = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i457 = data
  i456.name = i457[0]
  i456.value = new pc.Color(i457[1], i457[2], i457[3], i457[4])
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i461 = data
  i460.name = i461[0]
  i460.value = new pc.Vec4( i461[1], i461[2], i461[3], i461[4] )
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i465 = data
  i464.name = i465[0]
  request.r(i465[1], i465[2], 0, i464, 'value')
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i469 = data
  i468.name = i469[0]
  i468.enabled = !!i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i471 = data
  i470.position = new pc.Vec3( i471[0], i471[1], i471[2] )
  i470.scale = new pc.Vec3( i471[3], i471[4], i471[5] )
  i470.rotation = new pc.Quat(i471[6], i471[7], i471[8], i471[9])
  return i470
}

Deserializers["BulletController"] = function (request, data, root) {
  var i472 = root || request.c( 'BulletController' )
  var i473 = data
  i472.speed = i473[0]
  i472.damage = i473[1]
  i472.lifeTime = i473[2]
  request.r(i473[3], i473[4], 0, i472, 'hitMonsterSound')
  request.r(i473[5], i473[6], 0, i472, 'hitSound')
  i472.isHit = !!i473[7]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i475 = data
  i474.usedByComposite = !!i475[0]
  i474.autoTiling = !!i475[1]
  i474.size = new pc.Vec2( i475[2], i475[3] )
  i474.edgeRadius = i475[4]
  i474.enabled = !!i475[5]
  i474.isTrigger = !!i475[6]
  i474.usedByEffector = !!i475[7]
  i474.density = i475[8]
  i474.offset = new pc.Vec2( i475[9], i475[10] )
  request.r(i475[11], i475[12], 0, i474, 'material')
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i477 = data
  i476.color = new pc.Color(i477[0], i477[1], i477[2], i477[3])
  request.r(i477[4], i477[5], 0, i476, 'sprite')
  i476.flipX = !!i477[6]
  i476.flipY = !!i477[7]
  i476.drawMode = i477[8]
  i476.size = new pc.Vec2( i477[9], i477[10] )
  i476.tileMode = i477[11]
  i476.adaptiveModeThreshold = i477[12]
  i476.maskInteraction = i477[13]
  i476.spriteSortPoint = i477[14]
  i476.enabled = !!i477[15]
  request.r(i477[16], i477[17], 0, i476, 'sharedMaterial')
  var i479 = i477[18]
  var i478 = []
  for(var i = 0; i < i479.length; i += 2) {
  request.r(i479[i + 0], i479[i + 1], 2, i478, '')
  }
  i476.sharedMaterials = i478
  i476.receiveShadows = !!i477[19]
  i476.shadowCastingMode = i477[20]
  i476.sortingLayerID = i477[21]
  i476.sortingOrder = i477[22]
  i476.lightmapIndex = i477[23]
  i476.lightmapSceneIndex = i477[24]
  i476.lightmapScaleOffset = new pc.Vec4( i477[25], i477[26], i477[27], i477[28] )
  i476.lightProbeUsage = i477[29]
  i476.reflectionProbeUsage = i477[30]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i483 = data
  i482.name = i483[0]
  i482.tagId = i483[1]
  i482.enabled = !!i483[2]
  i482.isStatic = !!i483[3]
  i482.layer = i483[4]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i485 = data
  var i487 = i485[0]
  var i486 = []
  for(var i = 0; i < i487.length; i += 3) {
    i486.push( new pc.Vec3( i487[i + 0], i487[i + 1], i487[i + 2] ) );
  }
  i484.positions = i486
  i484.positionCount = i485[1]
  i484.time = i485[2]
  i484.startWidth = i485[3]
  i484.endWidth = i485[4]
  i484.widthMultiplier = i485[5]
  i484.autodestruct = !!i485[6]
  i484.emitting = !!i485[7]
  i484.numCornerVertices = i485[8]
  i484.numCapVertices = i485[9]
  i484.minVertexDistance = i485[10]
  i484.colorGradient = i485[11] ? new pc.ColorGradient(i485[11][0], i485[11][1], i485[11][2]) : null
  i484.startColor = new pc.Color(i485[12], i485[13], i485[14], i485[15])
  i484.endColor = new pc.Color(i485[16], i485[17], i485[18], i485[19])
  i484.generateLightingData = !!i485[20]
  i484.textureMode = i485[21]
  i484.alignment = i485[22]
  i484.widthCurve = new pc.AnimationCurve( { keys_flow: i485[23] } )
  i484.enabled = !!i485[24]
  request.r(i485[25], i485[26], 0, i484, 'sharedMaterial')
  var i489 = i485[27]
  var i488 = []
  for(var i = 0; i < i489.length; i += 2) {
  request.r(i489[i + 0], i489[i + 1], 2, i488, '')
  }
  i484.sharedMaterials = i488
  i484.receiveShadows = !!i485[28]
  i484.shadowCastingMode = i485[29]
  i484.sortingLayerID = i485[30]
  i484.sortingOrder = i485[31]
  i484.lightmapIndex = i485[32]
  i484.lightmapSceneIndex = i485[33]
  i484.lightmapScaleOffset = new pc.Vec4( i485[34], i485[35], i485[36], i485[37] )
  i484.lightProbeUsage = i485[38]
  i484.reflectionProbeUsage = i485[39]
  return i484
}

Deserializers["TraiController"] = function (request, data, root) {
  var i492 = root || request.c( 'TraiController' )
  var i493 = data
  request.r(i493[0], i493[1], 0, i492, 'trail')
  i492.baseWidth = i493[2]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i495 = data
  i494.sortingLayerIndex = i495[0]
  i494.sortingOrder = i495[1]
  i494.sortingLayerName = i495[2]
  i494.enabled = !!i495[3]
  return i494
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i496 = root || request.c( 'PlayerController' )
  var i497 = data
  var i499 = i497[0]
  var i498 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i499.length; i += 1) {
    i498.add(request.d('Piece', i499[i + 0]));
  }
  i496.pieces = i498
  var i501 = i497[1]
  var i500 = new (System.Collections.Generic.List$1(Bridge.ns('PlayerTrigger')))
  for(var i = 0; i < i501.length; i += 2) {
  request.r(i501[i + 0], i501[i + 1], 1, i500, '')
  }
  i496.triggers = i500
  request.r(i497[2], i497[3], 0, i496, 'deadSFX')
  i496.maxForce = new pc.Vec2( i497[4], i497[5] )
  i496.minForce = new pc.Vec2( i497[6], i497[7] )
  request.r(i497[8], i497[9], 0, i496, 'anim')
  request.r(i497[10], i497[11], 0, i496, 'action')
  i496.onAttack = !!i497[12]
  i496.isDead = !!i497[13]
  return i496
}

Deserializers["Piece"] = function (request, data, root) {
  var i504 = root || request.c( 'Piece' )
  var i505 = data
  request.r(i505[0], i505[1], 0, i504, 'Joint')
  request.r(i505[2], i505[3], 0, i504, 'Rb')
  return i504
}

Deserializers["ShootAnimation"] = function (request, data, root) {
  var i508 = root || request.c( 'ShootAnimation' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'left')
  request.r(i509[2], i509[3], 0, i508, 'right')
  i508.shootAngleLimitMax = i509[4]
  i508.shootAngleLimitMin = i509[5]
  i508.normalAngleLimitMax = i509[6]
  i508.normalAngleLimitMin = i509[7]
  i508.timeMotor = i509[8]
  return i508
}

Deserializers["ActionPerTime"] = function (request, data, root) {
  var i510 = root || request.c( 'ActionPerTime' )
  var i511 = data
  i510.action = request.d('UnityEngine.Events.UnityEvent', i511[0], i510.action)
  i510.isPause = !!i511[1]
  return i510
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i513 = data
  i512.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i513[0], i512.m_PersistentCalls)
  return i512
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i515 = data
  var i517 = i515[0]
  var i516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i517.length; i += 1) {
    i516.add(request.d('UnityEngine.Events.PersistentCall', i517[i + 0]));
  }
  i514.m_Calls = i516
  return i514
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'm_Target')
  i520.m_TargetAssemblyTypeName = i521[2]
  i520.m_MethodName = i521[3]
  i520.m_Mode = i521[4]
  i520.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i521[5], i520.m_Arguments)
  i520.m_CallState = i521[6]
  return i520
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i523 = data
  request.r(i523[0], i523[1], 0, i522, 'm_ObjectArgument')
  i522.m_ObjectArgumentAssemblyTypeName = i523[2]
  i522.m_IntArgument = i523[3]
  i522.m_FloatArgument = i523[4]
  i522.m_StringArgument = i523[5]
  i522.m_BoolArgument = !!i523[6]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i525 = data
  i524.bodyType = i525[0]
  request.r(i525[1], i525[2], 0, i524, 'material')
  i524.simulated = !!i525[3]
  i524.useAutoMass = !!i525[4]
  i524.mass = i525[5]
  i524.drag = i525[6]
  i524.angularDrag = i525[7]
  i524.gravityScale = i525[8]
  i524.collisionDetectionMode = i525[9]
  i524.sleepMode = i525[10]
  i524.constraints = i525[11]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i527 = data
  i526.useLimits = !!i527[0]
  i526.limits = request.d('UnityEngine.JointAngleLimits2D', i527[1], i526.limits)
  i526.useMotor = !!i527[2]
  i526.motor = request.d('UnityEngine.JointMotor2D', i527[3], i526.motor)
  i526.anchor = new pc.Vec2( i527[4], i527[5] )
  i526.connectedAnchor = new pc.Vec2( i527[6], i527[7] )
  i526.autoConfigureConnectedAnchor = !!i527[8]
  request.r(i527[9], i527[10], 0, i526, 'connectedBody')
  i526.breakForce = i527[11]
  i526.breakTorque = i527[12]
  i526.enableCollision = !!i527[13]
  i526.enabled = !!i527[14]
  return i526
}

Deserializers["PlayerTrigger"] = function (request, data, root) {
  var i528 = root || request.c( 'PlayerTrigger' )
  var i529 = data
  i528.OnContactZombie = request.d('System.Action', i529[0], i528.OnContactZombie)
  return i528
}

Deserializers["System.Action"] = function (request, data, root) {
  var i530 = root || request.c( 'System.Action' )
  var i531 = data
  return i530
}

Deserializers["GunController"] = function (request, data, root) {
  var i532 = root || request.c( 'GunController' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'aim')
  request.r(i533[2], i533[3], 0, i532, 'bulletPrefab')
  request.r(i533[4], i533[5], 0, i532, 'VFX')
  request.r(i533[6], i533[7], 0, i532, 'SFX')
  i532.timeCD = i533[8]
  i532.onCD = !!i533[9]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i535 = data
  i534.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i535[0], i534.main)
  i534.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i535[1], i534.colorBySpeed)
  i534.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i535[2], i534.colorOverLifetime)
  i534.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i535[3], i534.emission)
  i534.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i535[4], i534.rotationBySpeed)
  i534.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i535[5], i534.rotationOverLifetime)
  i534.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i535[6], i534.shape)
  i534.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i535[7], i534.sizeBySpeed)
  i534.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i535[8], i534.sizeOverLifetime)
  i534.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i535[9], i534.textureSheetAnimation)
  i534.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i535[10], i534.velocityOverLifetime)
  i534.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i535[11], i534.noise)
  i534.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i535[12], i534.inheritVelocity)
  i534.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i535[13], i534.forceOverLifetime)
  i534.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i535[14], i534.limitVelocityOverLifetime)
  i534.useAutoRandomSeed = !!i535[15]
  i534.randomSeed = i535[16]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemMain()
  var i537 = data
  i536.duration = i537[0]
  i536.loop = !!i537[1]
  i536.prewarm = !!i537[2]
  i536.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[3], i536.startDelay)
  i536.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[4], i536.startLifetime)
  i536.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[5], i536.startSpeed)
  i536.startSize3D = !!i537[6]
  i536.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[7], i536.startSizeX)
  i536.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[8], i536.startSizeY)
  i536.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[9], i536.startSizeZ)
  i536.startRotation3D = !!i537[10]
  i536.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[11], i536.startRotationX)
  i536.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[12], i536.startRotationY)
  i536.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[13], i536.startRotationZ)
  i536.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i537[14], i536.startColor)
  i536.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[15], i536.gravityModifier)
  i536.simulationSpace = i537[16]
  request.r(i537[17], i537[18], 0, i536, 'customSimulationSpace')
  i536.simulationSpeed = i537[19]
  i536.useUnscaledTime = !!i537[20]
  i536.scalingMode = i537[21]
  i536.playOnAwake = !!i537[22]
  i536.maxParticles = i537[23]
  i536.emitterVelocityMode = i537[24]
  i536.stopAction = i537[25]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i538 = root || new pc.MinMaxCurve()
  var i539 = data
  i538.mode = i539[0]
  i538.curveMin = new pc.AnimationCurve( { keys_flow: i539[1] } )
  i538.curveMax = new pc.AnimationCurve( { keys_flow: i539[2] } )
  i538.curveMultiplier = i539[3]
  i538.constantMin = i539[4]
  i538.constantMax = i539[5]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i540 = root || new pc.MinMaxGradient()
  var i541 = data
  i540.mode = i541[0]
  i540.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i541[1], i540.gradientMin)
  i540.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i541[2], i540.gradientMax)
  i540.colorMin = new pc.Color(i541[3], i541[4], i541[5], i541[6])
  i540.colorMax = new pc.Color(i541[7], i541[8], i541[9], i541[10])
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i543 = data
  i542.mode = i543[0]
  var i545 = i543[1]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i545[i + 0]) );
  }
  i542.colorKeys = i544
  var i547 = i543[2]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i547[i + 0]) );
  }
  i542.alphaKeys = i546
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i548 = root || new pc.ParticleSystemColorBySpeed()
  var i549 = data
  i548.enabled = !!i549[0]
  i548.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i549[1], i548.color)
  i548.range = new pc.Vec2( i549[2], i549[3] )
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i553 = data
  i552.color = new pc.Color(i553[0], i553[1], i553[2], i553[3])
  i552.time = i553[4]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i557 = data
  i556.alpha = i557[0]
  i556.time = i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemColorOverLifetime()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i559[1], i558.color)
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemEmitter()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[1], i560.rateOverTime)
  i560.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[2], i560.rateOverDistance)
  var i563 = i561[3]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i563[i + 0]) );
  }
  i560.bursts = i562
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemBurst()
  var i567 = data
  i566.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[0], i566.count)
  i566.cycleCount = i567[1]
  i566.minCount = i567[2]
  i566.maxCount = i567[3]
  i566.repeatInterval = i567[4]
  i566.time = i567[5]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemRotationBySpeed()
  var i569 = data
  i568.enabled = !!i569[0]
  i568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[1], i568.x)
  i568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[2], i568.y)
  i568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[3], i568.z)
  i568.separateAxes = !!i569[4]
  i568.range = new pc.Vec2( i569[5], i569[6] )
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemRotationOverLifetime()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[1], i570.x)
  i570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[2], i570.y)
  i570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[3], i570.z)
  i570.separateAxes = !!i571[4]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemShape()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.shapeType = i573[1]
  i572.randomDirectionAmount = i573[2]
  i572.sphericalDirectionAmount = i573[3]
  i572.randomPositionAmount = i573[4]
  i572.alignToDirection = !!i573[5]
  i572.radius = i573[6]
  i572.radiusMode = i573[7]
  i572.radiusSpread = i573[8]
  i572.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[9], i572.radiusSpeed)
  i572.radiusThickness = i573[10]
  i572.angle = i573[11]
  i572.length = i573[12]
  i572.boxThickness = new pc.Vec3( i573[13], i573[14], i573[15] )
  i572.meshShapeType = i573[16]
  request.r(i573[17], i573[18], 0, i572, 'mesh')
  request.r(i573[19], i573[20], 0, i572, 'meshRenderer')
  request.r(i573[21], i573[22], 0, i572, 'skinnedMeshRenderer')
  i572.useMeshMaterialIndex = !!i573[23]
  i572.meshMaterialIndex = i573[24]
  i572.useMeshColors = !!i573[25]
  i572.normalOffset = i573[26]
  i572.arc = i573[27]
  i572.arcMode = i573[28]
  i572.arcSpread = i573[29]
  i572.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[30], i572.arcSpeed)
  i572.donutRadius = i573[31]
  i572.position = new pc.Vec3( i573[32], i573[33], i573[34] )
  i572.rotation = new pc.Vec3( i573[35], i573[36], i573[37] )
  i572.scale = new pc.Vec3( i573[38], i573[39], i573[40] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemSizeBySpeed()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.x)
  i574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.y)
  i574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.z)
  i574.separateAxes = !!i575[4]
  i574.range = new pc.Vec2( i575[5], i575[6] )
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemSizeOverLifetime()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[1], i576.x)
  i576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.y)
  i576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[3], i576.z)
  i576.separateAxes = !!i577[4]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.mode = i579[1]
  i578.animation = i579[2]
  i578.numTilesX = i579[3]
  i578.numTilesY = i579[4]
  i578.useRandomRow = !!i579[5]
  i578.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[6], i578.frameOverTime)
  i578.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[7], i578.startFrame)
  i578.cycleCount = i579[8]
  i578.rowIndex = i579[9]
  i578.flipU = i579[10]
  i578.flipV = i579[11]
  i578.spriteCount = i579[12]
  var i581 = i579[13]
  var i580 = []
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 2, i580, '')
  }
  i578.sprites = i580
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i585 = data
  i584.enabled = !!i585[0]
  i584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[1], i584.x)
  i584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[2], i584.y)
  i584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[3], i584.z)
  i584.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[4], i584.radial)
  i584.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[5], i584.speedModifier)
  i584.space = i585[6]
  i584.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[7], i584.orbitalX)
  i584.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[8], i584.orbitalY)
  i584.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[9], i584.orbitalZ)
  i584.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[10], i584.orbitalOffsetX)
  i584.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[11], i584.orbitalOffsetY)
  i584.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[12], i584.orbitalOffsetZ)
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemNoise()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.separateAxes = !!i587[1]
  i586.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[2], i586.strengthX)
  i586.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[3], i586.strengthY)
  i586.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[4], i586.strengthZ)
  i586.frequency = i587[5]
  i586.damping = !!i587[6]
  i586.octaveCount = i587[7]
  i586.octaveMultiplier = i587[8]
  i586.octaveScale = i587[9]
  i586.quality = i587[10]
  i586.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[11], i586.scrollSpeed)
  i586.scrollSpeedMultiplier = i587[12]
  i586.remapEnabled = !!i587[13]
  i586.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[14], i586.remapX)
  i586.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[15], i586.remapY)
  i586.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[16], i586.remapZ)
  i586.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[17], i586.positionAmount)
  i586.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[18], i586.rotationAmount)
  i586.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[19], i586.sizeAmount)
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemInheritVelocity()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.mode = i589[1]
  i588.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.curve)
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemForceOverLifetime()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[1], i590.x)
  i590.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.y)
  i590.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.z)
  i590.space = i591[4]
  i590.randomized = !!i591[5]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[1], i592.limit)
  i592.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.limitX)
  i592.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[3], i592.limitY)
  i592.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[4], i592.limitZ)
  i592.dampen = i593[5]
  i592.separateAxes = !!i593[6]
  i592.space = i593[7]
  i592.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[8], i592.drag)
  i592.multiplyDragByParticleSize = !!i593[9]
  i592.multiplyDragByParticleVelocity = !!i593[10]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'mesh')
  i594.meshCount = i595[2]
  i594.activeVertexStreamsCount = i595[3]
  i594.alignment = i595[4]
  i594.renderMode = i595[5]
  i594.sortMode = i595[6]
  i594.lengthScale = i595[7]
  i594.velocityScale = i595[8]
  i594.cameraVelocityScale = i595[9]
  i594.normalDirection = i595[10]
  i594.sortingFudge = i595[11]
  i594.minParticleSize = i595[12]
  i594.maxParticleSize = i595[13]
  i594.pivot = new pc.Vec3( i595[14], i595[15], i595[16] )
  request.r(i595[17], i595[18], 0, i594, 'trailMaterial')
  i594.applyActiveColorSpace = !!i595[19]
  i594.enabled = !!i595[20]
  request.r(i595[21], i595[22], 0, i594, 'sharedMaterial')
  var i597 = i595[23]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i594.sharedMaterials = i596
  i594.receiveShadows = !!i595[24]
  i594.shadowCastingMode = i595[25]
  i594.sortingLayerID = i595[26]
  i594.sortingOrder = i595[27]
  i594.lightmapIndex = i595[28]
  i594.lightmapSceneIndex = i595[29]
  i594.lightmapScaleOffset = new pc.Vec4( i595[30], i595[31], i595[32], i595[33] )
  i594.lightProbeUsage = i595[34]
  i594.reflectionProbeUsage = i595[35]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'clip')
  request.r(i599[2], i599[3], 0, i598, 'outputAudioMixerGroup')
  i598.playOnAwake = !!i599[4]
  i598.loop = !!i599[5]
  i598.time = i599[6]
  i598.volume = i599[7]
  i598.pitch = i599[8]
  i598.enabled = !!i599[9]
  return i598
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i600 = root || request.c( 'BalanceController' )
  var i601 = data
  i600.targetRotation = i601[0]
  i600.force = i601[1]
  return i600
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i602 = root || request.c( 'MonsterController' )
  var i603 = data
  i602.maxHP = i603[0]
  i602.currentHP = i603[1]
  var i605 = i603[2]
  var i604 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i605.length; i += 1) {
    i604.add(request.d('Piece', i605[i + 0]));
  }
  i602.pieces = i604
  var i607 = i603[3]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPart')))
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 1, i606, '')
  }
  i602.parts = i606
  request.r(i603[4], i603[5], 0, i602, 'bloodPrefab')
  request.r(i603[6], i603[7], 0, i602, 'deadSFX')
  i602.maxForce = new pc.Vec2( i603[8], i603[9] )
  i602.minForce = new pc.Vec2( i603[10], i603[11] )
  request.r(i603[12], i603[13], 0, i602, 'balance')
  i602.isDead = !!i603[14]
  i602.speed = i603[15]
  request.r(i603[16], i603[17], 0, i602, 'body')
  request.r(i603[18], i603[19], 0, i602, 'leftHand')
  request.r(i603[20], i603[21], 0, i602, 'rightHand')
  request.r(i603[22], i603[23], 0, i602, 'leftLeg')
  request.r(i603[24], i603[25], 0, i602, 'rightLeg')
  request.r(i603[26], i603[27], 0, i602, 'jump')
  request.r(i603[28], i603[29], 0, i602, 'checkGround')
  return i602
}

Deserializers["BodyPart"] = function (request, data, root) {
  var i610 = root || request.c( 'BodyPart' )
  var i611 = data
  return i610
}

Deserializers["CheckGround"] = function (request, data, root) {
  var i612 = root || request.c( 'CheckGround' )
  var i613 = data
  i612.onGround = !!i613[0]
  i612.layerMask = UnityEngine.LayerMask.FromIntegerValue( i613[1] )
  i612.distance = i613[2]
  return i612
}

Deserializers["JumpController"] = function (request, data, root) {
  var i614 = root || request.c( 'JumpController' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'body')
  i614.jumpForce = new pc.Vec2( i615[2], i615[3] )
  i614.timeCD = i615[4]
  i614.onCD = !!i615[5]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i617 = data
  i616.name = i617[0]
  i616.index = i617[1]
  i616.startup = !!i617[2]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i619 = data
  i618.aspect = i619[0]
  i618.orthographic = !!i619[1]
  i618.orthographicSize = i619[2]
  i618.backgroundColor = new pc.Color(i619[3], i619[4], i619[5], i619[6])
  i618.nearClipPlane = i619[7]
  i618.farClipPlane = i619[8]
  i618.fieldOfView = i619[9]
  i618.depth = i619[10]
  i618.clearFlags = i619[11]
  i618.cullingMask = i619[12]
  i618.rect = i619[13]
  request.r(i619[14], i619[15], 0, i618, 'targetTexture')
  i618.usePhysicalProperties = !!i619[16]
  i618.focalLength = i619[17]
  i618.sensorSize = new pc.Vec2( i619[18], i619[19] )
  i618.lensShift = new pc.Vec2( i619[20], i619[21] )
  i618.gateFit = i619[22]
  i618.commandBufferCount = i619[23]
  i618.cameraType = i619[24]
  i618.enabled = !!i619[25]
  return i618
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_FirstSelected')
  i620.m_sendNavigationEvents = !!i621[2]
  i620.m_DragThreshold = i621[3]
  return i620
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i623 = data
  i622.m_HorizontalAxis = i623[0]
  i622.m_VerticalAxis = i623[1]
  i622.m_SubmitButton = i623[2]
  i622.m_CancelButton = i623[3]
  i622.m_InputActionsPerSecond = i623[4]
  i622.m_RepeatDelay = i623[5]
  i622.m_ForceModuleActive = !!i623[6]
  i622.m_SendPointerHoverToParent = !!i623[7]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i625 = data
  i624.pivot = new pc.Vec2( i625[0], i625[1] )
  i624.anchorMin = new pc.Vec2( i625[2], i625[3] )
  i624.anchorMax = new pc.Vec2( i625[4], i625[5] )
  i624.sizeDelta = new pc.Vec2( i625[6], i625[7] )
  i624.anchoredPosition3D = new pc.Vec3( i625[8], i625[9], i625[10] )
  i624.rotation = new pc.Quat(i625[11], i625[12], i625[13], i625[14])
  i624.scale = new pc.Vec3( i625[15], i625[16], i625[17] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i627 = data
  i626.planeDistance = i627[0]
  i626.referencePixelsPerUnit = i627[1]
  i626.isFallbackOverlay = !!i627[2]
  i626.renderMode = i627[3]
  i626.renderOrder = i627[4]
  i626.sortingLayerName = i627[5]
  i626.sortingOrder = i627[6]
  i626.scaleFactor = i627[7]
  request.r(i627[8], i627[9], 0, i626, 'worldCamera')
  i626.overrideSorting = !!i627[10]
  i626.pixelPerfect = !!i627[11]
  i626.targetDisplay = i627[12]
  i626.overridePixelPerfect = !!i627[13]
  i626.enabled = !!i627[14]
  return i626
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i629 = data
  i628.m_UiScaleMode = i629[0]
  i628.m_ReferencePixelsPerUnit = i629[1]
  i628.m_ScaleFactor = i629[2]
  i628.m_ReferenceResolution = new pc.Vec2( i629[3], i629[4] )
  i628.m_ScreenMatchMode = i629[5]
  i628.m_MatchWidthOrHeight = i629[6]
  i628.m_PhysicalUnit = i629[7]
  i628.m_FallbackScreenDPI = i629[8]
  i628.m_DefaultSpriteDPI = i629[9]
  i628.m_DynamicPixelsPerUnit = i629[10]
  i628.m_PresetInfoIsWorld = !!i629[11]
  return i628
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i631 = data
  i630.m_IgnoreReversedGraphics = !!i631[0]
  i630.m_BlockingObjects = i631[1]
  i630.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i631[2] )
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i633 = data
  i632.cullTransparentMesh = !!i633[0]
  return i632
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Texture')
  i634.m_UVRect = UnityEngine.Rect.MinMaxRect(i635[2], i635[3], i635[4], i635[5])
  request.r(i635[6], i635[7], 0, i634, 'm_Material')
  i634.m_Maskable = !!i635[8]
  i634.m_Color = new pc.Color(i635[9], i635[10], i635[11], i635[12])
  i634.m_RaycastTarget = !!i635[13]
  i634.m_RaycastPadding = new pc.Vec4( i635[14], i635[15], i635[16], i635[17] )
  return i634
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i637 = data
  i636.m_AspectMode = i637[0]
  i636.m_AspectRatio = i637[1]
  return i636
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.Button' )
  var i639 = data
  i638.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i639[0], i638.m_OnClick)
  i638.m_Navigation = request.d('UnityEngine.UI.Navigation', i639[1], i638.m_Navigation)
  i638.m_Transition = i639[2]
  i638.m_Colors = request.d('UnityEngine.UI.ColorBlock', i639[3], i638.m_Colors)
  i638.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i639[4], i638.m_SpriteState)
  i638.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i639[5], i638.m_AnimationTriggers)
  i638.m_Interactable = !!i639[6]
  request.r(i639[7], i639[8], 0, i638, 'm_TargetGraphic')
  return i638
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i641 = data
  i640.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i641[0], i640.m_PersistentCalls)
  return i640
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i643 = data
  i642.m_Mode = i643[0]
  i642.m_WrapAround = !!i643[1]
  request.r(i643[2], i643[3], 0, i642, 'm_SelectOnUp')
  request.r(i643[4], i643[5], 0, i642, 'm_SelectOnDown')
  request.r(i643[6], i643[7], 0, i642, 'm_SelectOnLeft')
  request.r(i643[8], i643[9], 0, i642, 'm_SelectOnRight')
  return i642
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i645 = data
  i644.m_NormalColor = new pc.Color(i645[0], i645[1], i645[2], i645[3])
  i644.m_HighlightedColor = new pc.Color(i645[4], i645[5], i645[6], i645[7])
  i644.m_PressedColor = new pc.Color(i645[8], i645[9], i645[10], i645[11])
  i644.m_SelectedColor = new pc.Color(i645[12], i645[13], i645[14], i645[15])
  i644.m_DisabledColor = new pc.Color(i645[16], i645[17], i645[18], i645[19])
  i644.m_ColorMultiplier = i645[20]
  i644.m_FadeDuration = i645[21]
  return i644
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'm_HighlightedSprite')
  request.r(i647[2], i647[3], 0, i646, 'm_PressedSprite')
  request.r(i647[4], i647[5], 0, i646, 'm_SelectedSprite')
  request.r(i647[6], i647[7], 0, i646, 'm_DisabledSprite')
  return i646
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i649 = data
  i648.m_NormalTrigger = i649[0]
  i648.m_HighlightedTrigger = i649[1]
  i648.m_PressedTrigger = i649[2]
  i648.m_SelectedTrigger = i649[3]
  i648.m_DisabledTrigger = i649[4]
  return i648
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Image' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_Sprite')
  i650.m_Type = i651[2]
  i650.m_PreserveAspect = !!i651[3]
  i650.m_FillCenter = !!i651[4]
  i650.m_FillMethod = i651[5]
  i650.m_FillAmount = i651[6]
  i650.m_FillClockwise = !!i651[7]
  i650.m_FillOrigin = i651[8]
  i650.m_UseSpriteMesh = !!i651[9]
  i650.m_PixelsPerUnitMultiplier = i651[10]
  request.r(i651[11], i651[12], 0, i650, 'm_Material')
  i650.m_Maskable = !!i651[13]
  i650.m_Color = new pc.Color(i651[14], i651[15], i651[16], i651[17])
  i650.m_RaycastTarget = !!i651[18]
  i650.m_RaycastPadding = new pc.Vec4( i651[19], i651[20], i651[21], i651[22] )
  return i650
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.Text' )
  var i653 = data
  i652.m_FontData = request.d('UnityEngine.UI.FontData', i653[0], i652.m_FontData)
  i652.m_Text = i653[1]
  request.r(i653[2], i653[3], 0, i652, 'm_Material')
  i652.m_Maskable = !!i653[4]
  i652.m_Color = new pc.Color(i653[5], i653[6], i653[7], i653[8])
  i652.m_RaycastTarget = !!i653[9]
  i652.m_RaycastPadding = new pc.Vec4( i653[10], i653[11], i653[12], i653[13] )
  return i652
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.FontData' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_Font')
  i654.m_FontSize = i655[2]
  i654.m_FontStyle = i655[3]
  i654.m_BestFit = !!i655[4]
  i654.m_MinSize = i655[5]
  i654.m_MaxSize = i655[6]
  i654.m_Alignment = i655[7]
  i654.m_AlignByGeometry = !!i655[8]
  i654.m_RichText = !!i655[9]
  i654.m_HorizontalOverflow = i655[10]
  i654.m_VerticalOverflow = i655[11]
  i654.m_LineSpacing = i655[12]
  return i654
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i656 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i657 = data
  i656.targetIsSelf = !!i657[0]
  request.r(i657[1], i657[2], 0, i656, 'targetGO')
  i656.tweenTargetIsTargetGO = !!i657[3]
  i656.delay = i657[4]
  i656.duration = i657[5]
  i656.easeType = i657[6]
  i656.easeCurve = new pc.AnimationCurve( { keys_flow: i657[7] } )
  i656.loopType = i657[8]
  i656.loops = i657[9]
  i656.id = i657[10]
  i656.isRelative = !!i657[11]
  i656.isFrom = !!i657[12]
  i656.isIndependentUpdate = !!i657[13]
  i656.autoKill = !!i657[14]
  i656.autoGenerate = !!i657[15]
  i656.isActive = !!i657[16]
  i656.isValid = !!i657[17]
  request.r(i657[18], i657[19], 0, i656, 'target')
  i656.animationType = i657[20]
  i656.targetType = i657[21]
  i656.forcedTargetType = i657[22]
  i656.autoPlay = !!i657[23]
  i656.useTargetAsV3 = !!i657[24]
  i656.endValueFloat = i657[25]
  i656.endValueV3 = new pc.Vec3( i657[26], i657[27], i657[28] )
  i656.endValueV2 = new pc.Vec2( i657[29], i657[30] )
  i656.endValueColor = new pc.Color(i657[31], i657[32], i657[33], i657[34])
  i656.endValueString = i657[35]
  i656.endValueRect = UnityEngine.Rect.MinMaxRect(i657[36], i657[37], i657[38], i657[39])
  request.r(i657[40], i657[41], 0, i656, 'endValueTransform')
  i656.optionalBool0 = !!i657[42]
  i656.optionalBool1 = !!i657[43]
  i656.optionalFloat0 = i657[44]
  i656.optionalInt0 = i657[45]
  i656.optionalRotationMode = i657[46]
  i656.optionalScrambleMode = i657[47]
  i656.optionalShakeRandomnessMode = i657[48]
  i656.optionalString = i657[49]
  i656.updateType = i657[50]
  i656.isSpeedBased = !!i657[51]
  i656.hasOnStart = !!i657[52]
  i656.hasOnPlay = !!i657[53]
  i656.hasOnUpdate = !!i657[54]
  i656.hasOnStepComplete = !!i657[55]
  i656.hasOnComplete = !!i657[56]
  i656.hasOnTweenCreated = !!i657[57]
  i656.hasOnRewind = !!i657[58]
  i656.onStart = request.d('UnityEngine.Events.UnityEvent', i657[59], i656.onStart)
  i656.onPlay = request.d('UnityEngine.Events.UnityEvent', i657[60], i656.onPlay)
  i656.onUpdate = request.d('UnityEngine.Events.UnityEvent', i657[61], i656.onUpdate)
  i656.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i657[62], i656.onStepComplete)
  i656.onComplete = request.d('UnityEngine.Events.UnityEvent', i657[63], i656.onComplete)
  i656.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i657[64], i656.onTweenCreated)
  i656.onRewind = request.d('UnityEngine.Events.UnityEvent', i657[65], i656.onRewind)
  return i656
}

Deserializers["GameController"] = function (request, data, root) {
  var i658 = root || request.c( 'GameController' )
  var i659 = data
  i658.OnSpawn = request.d('System.Action', i659[0], i658.OnSpawn)
  i658.OnNotClear = request.d('System.Action', i659[1], i658.OnNotClear)
  i658.OnClear = request.d('System.Action', i659[2], i658.OnClear)
  request.r(i659[3], i659[4], 0, i658, 'area')
  request.r(i659[5], i659[6], 0, i658, 'areaTut')
  request.r(i659[7], i659[8], 0, i658, 'startTut')
  request.r(i659[9], i659[10], 0, i658, 'optionTut')
  i658.numMonster = i659[11]
  var i661 = i659[12]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('Spawn')))
  for(var i = 0; i < i661.length; i += 1) {
    i660.add(request.d('Spawn', i661[i + 0]));
  }
  i658.spawns = i660
  i658.currentSpawn = request.d('Spawn', i659[13], i658.currentSpawn)
  request.r(i659[14], i659[15], 0, i658, 'world')
  request.r(i659[16], i659[17], 0, i658, 'clickSound')
  request.r(i659[18], i659[19], 0, i658, 'dropSound')
  return i658
}

Deserializers["Spawn"] = function (request, data, root) {
  var i664 = root || request.c( 'Spawn' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'Button')
  request.r(i665[2], i665[3], 0, i664, 'Selected')
  request.r(i665[4], i665[5], 0, i664, 'Prefab')
  return i664
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i666 = root || request.c( 'LayoutController' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'main')
  request.r(i667[2], i667[3], 0, i666, 'button')
  request.r(i667[4], i667[5], 0, i666, 'buttonz')
  return i666
}

Deserializers["LunaController"] = function (request, data, root) {
  var i668 = root || request.c( 'LunaController' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'BGTexture')
  i668.LimitTimePlay = !!i669[2]
  i668.TimePlay = i669[3]
  i668.LimitCountPlay = !!i669[4]
  i668.MaxCountPlay = i669[5]
  i668.NamePlantColor = new pc.Color(i669[6], i669[7], i669[8], i669[9])
  i668.NameZombieColor = new pc.Color(i669[10], i669[11], i669[12], i669[13])
  request.r(i669[14], i669[15], 0, i668, 'BGImage')
  var i671 = i669[16]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 1, i670, '')
  }
  i668.CTA = i670
  i668.count = i669[17]
  request.r(i669[18], i669[19], 0, i668, 'plant1Name')
  request.r(i669[20], i669[21], 0, i668, 'plant2Name')
  request.r(i669[22], i669[23], 0, i668, 'zombie1Name')
  request.r(i669[24], i669[25], 0, i668, 'zombie2Name')
  return i668
}

Deserializers["AudioController"] = function (request, data, root) {
  var i674 = root || request.c( 'AudioController' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'BGM')
  request.r(i675[2], i675[3], 0, i674, 'musicSource')
  request.r(i675[4], i675[5], 0, i674, 'pool')
  return i674
}

Deserializers["PoolController"] = function (request, data, root) {
  var i676 = root || request.c( 'PoolController' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'world')
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i679 = data
  i678.ambientIntensity = i679[0]
  i678.reflectionIntensity = i679[1]
  i678.ambientMode = i679[2]
  i678.ambientLight = new pc.Color(i679[3], i679[4], i679[5], i679[6])
  i678.ambientSkyColor = new pc.Color(i679[7], i679[8], i679[9], i679[10])
  i678.ambientGroundColor = new pc.Color(i679[11], i679[12], i679[13], i679[14])
  i678.ambientEquatorColor = new pc.Color(i679[15], i679[16], i679[17], i679[18])
  i678.fogColor = new pc.Color(i679[19], i679[20], i679[21], i679[22])
  i678.fogEndDistance = i679[23]
  i678.fogStartDistance = i679[24]
  i678.fogDensity = i679[25]
  i678.fog = !!i679[26]
  request.r(i679[27], i679[28], 0, i678, 'skybox')
  i678.fogMode = i679[29]
  var i681 = i679[30]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i681[i + 0]) );
  }
  i678.lightmaps = i680
  i678.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i679[31], i678.lightProbes)
  i678.lightmapsMode = i679[32]
  i678.mixedBakeMode = i679[33]
  i678.environmentLightingMode = i679[34]
  i678.ambientProbe = new pc.SphericalHarmonicsL2(i679[35])
  request.r(i679[36], i679[37], 0, i678, 'customReflection')
  request.r(i679[38], i679[39], 0, i678, 'defaultReflection')
  i678.defaultReflectionMode = i679[40]
  i678.defaultReflectionResolution = i679[41]
  i678.sunLightObjectId = i679[42]
  i678.pixelLightCount = i679[43]
  i678.defaultReflectionHDR = !!i679[44]
  i678.hasLightDataAsset = !!i679[45]
  i678.hasManualGenerate = !!i679[46]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'lightmapColor')
  request.r(i685[2], i685[3], 0, i684, 'lightmapDirection')
  request.r(i685[4], i685[5], 0, i684, 'shadowMask')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i686 = root || new UnityEngine.LightProbes()
  var i687 = data
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i693 = data
  var i695 = i693[0]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i695.length; i += 1) {
    i694.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i695[i + 0]));
  }
  i692.ShaderCompilationErrors = i694
  i692.name = i693[1]
  i692.guid = i693[2]
  var i697 = i693[3]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( i697[i + 0] );
  }
  i692.shaderDefinedKeywords = i696
  var i699 = i693[4]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i699[i + 0]) );
  }
  i692.passes = i698
  var i701 = i693[5]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i701[i + 0]) );
  }
  i692.usePasses = i700
  var i703 = i693[6]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i703[i + 0]) );
  }
  i692.defaultParameterValues = i702
  request.r(i693[7], i693[8], 0, i692, 'unityFallbackShader')
  i692.readDepth = !!i693[9]
  i692.hasDepthOnlyPass = !!i693[10]
  i692.isCreatedByShaderGraph = !!i693[11]
  i692.disableBatching = !!i693[12]
  i692.compiled = !!i693[13]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i707 = data
  i706.shaderName = i707[0]
  i706.errorMessage = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i712 = root || new pc.UnityShaderPass()
  var i713 = data
  i712.id = i713[0]
  i712.subShaderIndex = i713[1]
  i712.name = i713[2]
  i712.passType = i713[3]
  i712.grabPassTextureName = i713[4]
  i712.usePass = !!i713[5]
  i712.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[6], i712.zTest)
  i712.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[7], i712.zWrite)
  i712.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[8], i712.culling)
  i712.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i713[9], i712.blending)
  i712.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i713[10], i712.alphaBlending)
  i712.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[11], i712.colorWriteMask)
  i712.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[12], i712.offsetUnits)
  i712.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[13], i712.offsetFactor)
  i712.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[14], i712.stencilRef)
  i712.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[15], i712.stencilReadMask)
  i712.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[16], i712.stencilWriteMask)
  i712.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[17], i712.stencilOp)
  i712.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[18], i712.stencilOpFront)
  i712.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i713[19], i712.stencilOpBack)
  var i715 = i713[20]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i715[i + 0]) );
  }
  i712.tags = i714
  var i717 = i713[21]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i712.passDefinedKeywords = i716
  var i719 = i713[22]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i719[i + 0]) );
  }
  i712.passDefinedKeywordGroups = i718
  var i721 = i713[23]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i721[i + 0]) );
  }
  i712.variants = i720
  var i723 = i713[24]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i723[i + 0]) );
  }
  i712.excludedVariants = i722
  i712.hasDepthReader = !!i713[25]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i725 = data
  i724.val = i725[0]
  i724.name = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i727 = data
  i726.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[0], i726.src)
  i726.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[1], i726.dst)
  i726.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i727[2], i726.op)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i729 = data
  i728.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[0], i728.pass)
  i728.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[1], i728.fail)
  i728.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[2], i728.zFail)
  i728.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[3], i728.comp)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i733 = data
  i732.name = i733[0]
  i732.value = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i737 = data
  var i739 = i737[0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i736.keywords = i738
  i736.hasDiscard = !!i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i743 = data
  i742.passId = i743[0]
  i742.subShaderIndex = i743[1]
  var i745 = i743[2]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i742.keywords = i744
  i742.vertexProgram = i743[3]
  i742.fragmentProgram = i743[4]
  i742.exportedForWebGl2 = !!i743[5]
  i742.readDepth = !!i743[6]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'shader')
  i748.pass = i749[2]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i753 = data
  i752.name = i753[0]
  i752.type = i753[1]
  i752.value = new pc.Vec4( i753[2], i753[3], i753[4], i753[5] )
  i752.textureValue = i753[6]
  i752.shaderPropertyFlag = i753[7]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i755 = data
  i754.name = i755[0]
  request.r(i755[1], i755[2], 0, i754, 'texture')
  i754.aabb = i755[3]
  i754.vertices = i755[4]
  i754.triangles = i755[5]
  i754.textureRect = UnityEngine.Rect.MinMaxRect(i755[6], i755[7], i755[8], i755[9])
  i754.packedRect = UnityEngine.Rect.MinMaxRect(i755[10], i755[11], i755[12], i755[13])
  i754.border = new pc.Vec4( i755[14], i755[15], i755[16], i755[17] )
  i754.transparency = i755[18]
  i754.bounds = i755[19]
  i754.pixelsPerUnit = i755[20]
  i754.textureWidth = i755[21]
  i754.textureHeight = i755[22]
  i754.nativeSize = new pc.Vec2( i755[23], i755[24] )
  i754.pivot = new pc.Vec2( i755[25], i755[26] )
  i754.textureRectOffset = new pc.Vec2( i755[27], i755[28] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i757 = data
  i756.name = i757[0]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i759 = data
  i758.name = i759[0]
  i758.ascent = i759[1]
  i758.originalLineHeight = i759[2]
  i758.fontSize = i759[3]
  var i761 = i759[4]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i761[i + 0]) );
  }
  i758.characterInfo = i760
  request.r(i759[5], i759[6], 0, i758, 'texture')
  i758.originalFontSize = i759[7]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i765 = data
  i764.index = i765[0]
  i764.advance = i765[1]
  i764.bearing = i765[2]
  i764.glyphWidth = i765[3]
  i764.glyphHeight = i765[4]
  i764.minX = i765[5]
  i764.maxX = i765[6]
  i764.minY = i765[7]
  i764.maxY = i765[8]
  i764.uvBottomLeftX = i765[9]
  i764.uvBottomLeftY = i765[10]
  i764.uvBottomRightX = i765[11]
  i764.uvBottomRightY = i765[12]
  i764.uvTopLeftX = i765[13]
  i764.uvTopLeftY = i765[14]
  i764.uvTopRightX = i765[15]
  i764.uvTopRightY = i765[16]
  return i764
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i766 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i767 = data
  i766.useSafeMode = !!i767[0]
  i766.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i767[1], i766.safeModeOptions)
  i766.timeScale = i767[2]
  i766.unscaledTimeScale = i767[3]
  i766.useSmoothDeltaTime = !!i767[4]
  i766.maxSmoothUnscaledTime = i767[5]
  i766.rewindCallbackMode = i767[6]
  i766.showUnityEditorReport = !!i767[7]
  i766.logBehaviour = i767[8]
  i766.drawGizmos = !!i767[9]
  i766.defaultRecyclable = !!i767[10]
  i766.defaultAutoPlay = i767[11]
  i766.defaultUpdateType = i767[12]
  i766.defaultTimeScaleIndependent = !!i767[13]
  i766.defaultEaseType = i767[14]
  i766.defaultEaseOvershootOrAmplitude = i767[15]
  i766.defaultEasePeriod = i767[16]
  i766.defaultAutoKill = !!i767[17]
  i766.defaultLoopType = i767[18]
  i766.debugMode = !!i767[19]
  i766.debugStoreTargetId = !!i767[20]
  i766.showPreviewPanel = !!i767[21]
  i766.storeSettingsLocation = i767[22]
  i766.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i767[23], i766.modules)
  i766.createASMDEF = !!i767[24]
  i766.showPlayingTweens = !!i767[25]
  i766.showPausedTweens = !!i767[26]
  return i766
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i768 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i769 = data
  i768.logBehaviour = i769[0]
  i768.nestedTweenFailureBehaviour = i769[1]
  return i768
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i770 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i771 = data
  i770.showPanel = !!i771[0]
  i770.audioEnabled = !!i771[1]
  i770.physicsEnabled = !!i771[2]
  i770.physics2DEnabled = !!i771[3]
  i770.spriteEnabled = !!i771[4]
  i770.uiEnabled = !!i771[5]
  i770.textMeshProEnabled = !!i771[6]
  i770.tk2DEnabled = !!i771[7]
  i770.deAudioEnabled = !!i771[8]
  i770.deUnityExtendedEnabled = !!i771[9]
  i770.epoOutlineEnabled = !!i771[10]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i773 = data
  var i775 = i773[0]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i775[i + 0]) );
  }
  i772.files = i774
  i772.componentToPrefabIds = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i779 = data
  i778.path = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'unityObject')
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i781 = data
  var i783 = i781[0]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i783[i + 0]) );
  }
  i780.scriptsExecutionOrder = i782
  var i785 = i781[1]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i785[i + 0]) );
  }
  i780.sortingLayers = i784
  var i787 = i781[2]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i787[i + 0]) );
  }
  i780.cullingLayers = i786
  i780.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i781[3], i780.timeSettings)
  i780.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i781[4], i780.physicsSettings)
  i780.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i781[5], i780.physics2DSettings)
  i780.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i781[6], i780.qualitySettings)
  i780.enableRealtimeShadows = !!i781[7]
  i780.enableAutoInstancing = !!i781[8]
  i780.enableStaticBatching = !!i781[9]
  i780.enableDynamicBatching = !!i781[10]
  i780.usePreservativeDynamicBatching = !!i781[11]
  i780.lightmapEncodingQuality = i781[12]
  i780.desiredColorSpace = i781[13]
  var i789 = i781[14]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i780.allTags = i788
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i793 = data
  i792.name = i793[0]
  i792.value = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i797 = data
  i796.id = i797[0]
  i796.name = i797[1]
  i796.value = i797[2]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i801 = data
  i800.id = i801[0]
  i800.name = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i803 = data
  i802.fixedDeltaTime = i803[0]
  i802.maximumDeltaTime = i803[1]
  i802.timeScale = i803[2]
  i802.maximumParticleTimestep = i803[3]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i805 = data
  i804.gravity = new pc.Vec3( i805[0], i805[1], i805[2] )
  i804.defaultSolverIterations = i805[3]
  i804.bounceThreshold = i805[4]
  i804.autoSyncTransforms = !!i805[5]
  i804.autoSimulation = !!i805[6]
  var i807 = i805[7]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i807[i + 0]) );
  }
  i804.collisionMatrix = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i811 = data
  i810.enabled = !!i811[0]
  i810.layerId = i811[1]
  i810.otherLayerId = i811[2]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'material')
  i812.gravity = new pc.Vec2( i813[2], i813[3] )
  i812.positionIterations = i813[4]
  i812.velocityIterations = i813[5]
  i812.velocityThreshold = i813[6]
  i812.maxLinearCorrection = i813[7]
  i812.maxAngularCorrection = i813[8]
  i812.maxTranslationSpeed = i813[9]
  i812.maxRotationSpeed = i813[10]
  i812.baumgarteScale = i813[11]
  i812.baumgarteTOIScale = i813[12]
  i812.timeToSleep = i813[13]
  i812.linearSleepTolerance = i813[14]
  i812.angularSleepTolerance = i813[15]
  i812.defaultContactOffset = i813[16]
  i812.autoSimulation = !!i813[17]
  i812.queriesHitTriggers = !!i813[18]
  i812.queriesStartInColliders = !!i813[19]
  i812.callbacksOnDisable = !!i813[20]
  i812.reuseCollisionCallbacks = !!i813[21]
  i812.autoSyncTransforms = !!i813[22]
  var i815 = i813[23]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i815[i + 0]) );
  }
  i812.collisionMatrix = i814
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i819 = data
  i818.enabled = !!i819[0]
  i818.layerId = i819[1]
  i818.otherLayerId = i819[2]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i821 = data
  var i823 = i821[0]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i823[i + 0]) );
  }
  i820.qualityLevels = i822
  var i825 = i821[1]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i820.names = i824
  i820.shadows = i821[2]
  i820.anisotropicFiltering = i821[3]
  i820.antiAliasing = i821[4]
  i820.lodBias = i821[5]
  i820.shadowCascades = i821[6]
  i820.shadowDistance = i821[7]
  i820.shadowmaskMode = i821[8]
  i820.shadowProjection = i821[9]
  i820.shadowResolution = i821[10]
  i820.softParticles = !!i821[11]
  i820.softVegetation = !!i821[12]
  i820.activeColorSpace = i821[13]
  i820.desiredColorSpace = i821[14]
  i820.masterTextureLimit = i821[15]
  i820.maxQueuedFrames = i821[16]
  i820.particleRaycastBudget = i821[17]
  i820.pixelLightCount = i821[18]
  i820.realtimeReflectionProbes = !!i821[19]
  i820.shadowCascade2Split = i821[20]
  i820.shadowCascade4Split = new pc.Vec3( i821[21], i821[22], i821[23] )
  i820.streamingMipmapsActive = !!i821[24]
  i820.vSyncCount = i821[25]
  i820.asyncUploadBufferSize = i821[26]
  i820.asyncUploadTimeSlice = i821[27]
  i820.billboardsFaceCameraPosition = !!i821[28]
  i820.shadowNearPlaneOffset = i821[29]
  i820.streamingMipmapsMemoryBudget = i821[30]
  i820.maximumLODLevel = i821[31]
  i820.streamingMipmapsAddAllCameras = !!i821[32]
  i820.streamingMipmapsMaxLevelReduction = i821[33]
  i820.streamingMipmapsRenderersPerFrame = i821[34]
  i820.resolutionScalingFixedDPIFactor = i821[35]
  i820.streamingMipmapsMaxFileIORequests = i821[36]
  i820.currentQualityLevel = i821[37]
  return i820
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[60],"61":[29],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[15],"70":[15],"71":[15],"72":[15],"73":[15],"74":[15],"14":[15],"75":[15],"76":[15],"77":[15],"78":[15],"79":[15],"80":[15],"81":[29],"82":[83],"84":[85],"86":[85],"35":[34],"87":[6],"88":[29],"89":[90],"91":[34],"92":[38,34],"93":[83],"94":[38,34],"95":[34],"96":[34],"97":[83,34],"98":[34,38],"99":[100],"101":[100],"102":[100],"103":[34],"104":[34],"37":[35],"42":[38,34],"40":[34],"36":[35],"105":[34],"106":[34],"107":[34],"108":[34],"109":[34],"110":[34],"111":[34],"112":[34],"113":[34],"39":[38,34],"114":[34],"115":[34],"116":[34],"117":[34],"43":[38,34],"118":[34],"119":[32],"120":[32],"33":[32],"121":[32],"122":[29],"123":[29]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.TrailRenderer","TraiController","UnityEngine.Texture2D","UnityEngine.Rendering.SortingGroup","PlayerController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","PlayerTrigger","ShootAnimation","ActionPerTime","GunController","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.AudioSource","UnityEngine.ParticleSystemRenderer","BalanceController","MonsterController","BodyPart","CheckGround","JumpController","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","GameController","LayoutController","LunaController","AudioController","PoolController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "10/08/2026 08:27:10";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_PMP_V06_TrangHTT";

Deserializers.lunaAppID = "42757";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1781";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4333";

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

Deserializers.buildID = "7c565a9a-9940-4219-9ca4-ca91551390c8";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.JointSpring' )
  var i391 = data
  i390.spring = i391[0]
  i390.damper = i391[1]
  i390.targetPosition = i391[2]
  return i390
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.JointMotor' )
  var i393 = data
  i392.m_TargetVelocity = i393[0]
  i392.m_Force = i393[1]
  i392.m_FreeSpin = i393[2]
  return i392
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointLimits' )
  var i395 = data
  i394.m_Min = i395[0]
  i394.m_Max = i395[1]
  i394.m_Bounciness = i395[2]
  i394.m_BounceMinVelocity = i395[3]
  i394.m_ContactDistance = i395[4]
  i394.minBounce = i395[5]
  i394.maxBounce = i395[6]
  return i394
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.JointDrive' )
  var i397 = data
  i396.m_PositionSpring = i397[0]
  i396.m_PositionDamper = i397[1]
  i396.m_MaximumForce = i397[2]
  i396.m_UseAcceleration = i397[3]
  return i396
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i399 = data
  i398.m_Spring = i399[0]
  i398.m_Damper = i399[1]
  return i398
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i401 = data
  i400.m_Limit = i401[0]
  i400.m_Bounciness = i401[1]
  i400.m_ContactDistance = i401[2]
  return i400
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i403 = data
  i402.m_ExtremumSlip = i403[0]
  i402.m_ExtremumValue = i403[1]
  i402.m_AsymptoteSlip = i403[2]
  i402.m_AsymptoteValue = i403[3]
  i402.m_Stiffness = i403[4]
  return i402
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i405 = data
  i404.m_LowerAngle = i405[0]
  i404.m_UpperAngle = i405[1]
  return i404
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i407 = data
  i406.m_MotorSpeed = i407[0]
  i406.m_MaximumMotorTorque = i407[1]
  return i406
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i409 = data
  i408.m_DampingRatio = i409[0]
  i408.m_Frequency = i409[1]
  i408.m_Angle = i409[2]
  return i408
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i411 = data
  i410.m_LowerTranslation = i411[0]
  i410.m_UpperTranslation = i411[1]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i413 = data
  i412.name = i413[0]
  i412.width = i413[1]
  i412.height = i413[2]
  i412.mipmapCount = i413[3]
  i412.anisoLevel = i413[4]
  i412.filterMode = i413[5]
  i412.hdr = !!i413[6]
  i412.format = i413[7]
  i412.wrapMode = i413[8]
  i412.alphaIsTransparency = !!i413[9]
  i412.alphaSource = i413[10]
  i412.graphicsFormat = i413[11]
  i412.sRGBTexture = !!i413[12]
  i412.desiredColorSpace = i413[13]
  i412.wrapU = i413[14]
  i412.wrapV = i413[15]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i414 = root || new pc.UnityMaterial()
  var i415 = data
  i414.name = i415[0]
  request.r(i415[1], i415[2], 0, i414, 'shader')
  i414.renderQueue = i415[3]
  i414.enableInstancing = !!i415[4]
  var i417 = i415[5]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i417[i + 0]) );
  }
  i414.floatParameters = i416
  var i419 = i415[6]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i419[i + 0]) );
  }
  i414.colorParameters = i418
  var i421 = i415[7]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i421[i + 0]) );
  }
  i414.vectorParameters = i420
  var i423 = i415[8]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i423[i + 0]) );
  }
  i414.textureParameters = i422
  var i425 = i415[9]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i425[i + 0]) );
  }
  i414.materialFlags = i424
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i429 = data
  i428.name = i429[0]
  i428.value = i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i433 = data
  i432.name = i433[0]
  i432.value = new pc.Color(i433[1], i433[2], i433[3], i433[4])
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i437 = data
  i436.name = i437[0]
  i436.value = new pc.Vec4( i437[1], i437[2], i437[3], i437[4] )
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i441 = data
  i440.name = i441[0]
  request.r(i441[1], i441[2], 0, i440, 'value')
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i445 = data
  i444.name = i445[0]
  i444.enabled = !!i445[1]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i447 = data
  i446.position = new pc.Vec3( i447[0], i447[1], i447[2] )
  i446.scale = new pc.Vec3( i447[3], i447[4], i447[5] )
  i446.rotation = new pc.Quat(i447[6], i447[7], i447[8], i447[9])
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i449 = data
  i448.color = new pc.Color(i449[0], i449[1], i449[2], i449[3])
  request.r(i449[4], i449[5], 0, i448, 'sprite')
  i448.flipX = !!i449[6]
  i448.flipY = !!i449[7]
  i448.drawMode = i449[8]
  i448.size = new pc.Vec2( i449[9], i449[10] )
  i448.tileMode = i449[11]
  i448.adaptiveModeThreshold = i449[12]
  i448.maskInteraction = i449[13]
  i448.spriteSortPoint = i449[14]
  i448.enabled = !!i449[15]
  request.r(i449[16], i449[17], 0, i448, 'sharedMaterial')
  var i451 = i449[18]
  var i450 = []
  for(var i = 0; i < i451.length; i += 2) {
  request.r(i451[i + 0], i451[i + 1], 2, i450, '')
  }
  i448.sharedMaterials = i450
  i448.receiveShadows = !!i449[19]
  i448.shadowCastingMode = i449[20]
  i448.sortingLayerID = i449[21]
  i448.sortingOrder = i449[22]
  i448.lightmapIndex = i449[23]
  i448.lightmapSceneIndex = i449[24]
  i448.lightmapScaleOffset = new pc.Vec4( i449[25], i449[26], i449[27], i449[28] )
  i448.lightProbeUsage = i449[29]
  i448.reflectionProbeUsage = i449[30]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i455 = data
  i454.radius = i455[0]
  i454.enabled = !!i455[1]
  i454.isTrigger = !!i455[2]
  i454.usedByEffector = !!i455[3]
  i454.density = i455[4]
  i454.offset = new pc.Vec2( i455[5], i455[6] )
  request.r(i455[7], i455[8], 0, i454, 'material')
  return i454
}

Deserializers["BulletController"] = function (request, data, root) {
  var i456 = root || request.c( 'BulletController' )
  var i457 = data
  i456.speed = i457[0]
  i456.damage = i457[1]
  request.r(i457[2], i457[3], 0, i456, 'hitMonsterSound')
  request.r(i457[4], i457[5], 0, i456, 'hitSound')
  i456.lifeTime = i457[6]
  i456.hit = !!i457[7]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i459 = data
  i458.name = i459[0]
  i458.tagId = i459[1]
  i458.enabled = !!i459[2]
  i458.isStatic = !!i459[3]
  i458.layer = i459[4]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i461 = data
  request.r(i461[0], i461[1], 0, i460, 'animatorController')
  request.r(i461[2], i461[3], 0, i460, 'avatar')
  i460.updateMode = i461[4]
  i460.hasTransformHierarchy = !!i461[5]
  i460.applyRootMotion = !!i461[6]
  var i463 = i461[7]
  var i462 = []
  for(var i = 0; i < i463.length; i += 2) {
  request.r(i463[i + 0], i463[i + 1], 2, i462, '')
  }
  i460.humanBones = i462
  i460.enabled = !!i461[8]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i467 = data
  i466.bodyType = i467[0]
  request.r(i467[1], i467[2], 0, i466, 'material')
  i466.simulated = !!i467[3]
  i466.useAutoMass = !!i467[4]
  i466.mass = i467[5]
  i466.drag = i467[6]
  i466.angularDrag = i467[7]
  i466.gravityScale = i467[8]
  i466.collisionDetectionMode = i467[9]
  i466.sleepMode = i467[10]
  i466.constraints = i467[11]
  return i466
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i468 = root || request.c( 'MonsterController' )
  var i469 = data
  i468.maxHP = i469[0]
  i468.currentHP = i469[1]
  var i471 = i469[2]
  var i470 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i471.length; i += 1) {
    i470.add(request.d('Piece', i471[i + 0]));
  }
  i468.pieces = i470
  request.r(i469[3], i469[4], 0, i468, 'deadSFX')
  i468.maxForce = new pc.Vec2( i469[5], i469[6] )
  i468.minForce = new pc.Vec2( i469[7], i469[8] )
  request.r(i469[9], i469[10], 0, i468, 'balance')
  i468.isDead = !!i469[11]
  i468.moveSpeed = i469[12]
  i468.stepRate = i469[13]
  i468.strideAngle = i469[14]
  i468.stopDistance = i469[15]
  return i468
}

Deserializers["Piece"] = function (request, data, root) {
  var i474 = root || request.c( 'Piece' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'Joint')
  request.r(i475[2], i475[3], 0, i474, 'Rb')
  return i474
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i476 = root || request.c( 'BalanceController' )
  var i477 = data
  i476.targetRotation = i477[0]
  i476.force = i477[1]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i479 = data
  request.r(i479[0], i479[1], 0, i478, 'clip')
  request.r(i479[2], i479[3], 0, i478, 'outputAudioMixerGroup')
  i478.playOnAwake = !!i479[4]
  i478.loop = !!i479[5]
  i478.time = i479[6]
  i478.volume = i479[7]
  i478.pitch = i479[8]
  i478.enabled = !!i479[9]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i481 = data
  i480.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i481[0], i480.main)
  i480.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i481[1], i480.colorBySpeed)
  i480.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i481[2], i480.colorOverLifetime)
  i480.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i481[3], i480.emission)
  i480.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i481[4], i480.rotationBySpeed)
  i480.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i481[5], i480.rotationOverLifetime)
  i480.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i481[6], i480.shape)
  i480.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i481[7], i480.sizeBySpeed)
  i480.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i481[8], i480.sizeOverLifetime)
  i480.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i481[9], i480.textureSheetAnimation)
  i480.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i481[10], i480.velocityOverLifetime)
  i480.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i481[11], i480.noise)
  i480.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i481[12], i480.inheritVelocity)
  i480.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i481[13], i480.forceOverLifetime)
  i480.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i481[14], i480.limitVelocityOverLifetime)
  i480.useAutoRandomSeed = !!i481[15]
  i480.randomSeed = i481[16]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i482 = root || new pc.ParticleSystemMain()
  var i483 = data
  i482.duration = i483[0]
  i482.loop = !!i483[1]
  i482.prewarm = !!i483[2]
  i482.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[3], i482.startDelay)
  i482.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[4], i482.startLifetime)
  i482.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[5], i482.startSpeed)
  i482.startSize3D = !!i483[6]
  i482.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[7], i482.startSizeX)
  i482.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[8], i482.startSizeY)
  i482.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[9], i482.startSizeZ)
  i482.startRotation3D = !!i483[10]
  i482.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[11], i482.startRotationX)
  i482.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[12], i482.startRotationY)
  i482.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[13], i482.startRotationZ)
  i482.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i483[14], i482.startColor)
  i482.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[15], i482.gravityModifier)
  i482.simulationSpace = i483[16]
  request.r(i483[17], i483[18], 0, i482, 'customSimulationSpace')
  i482.simulationSpeed = i483[19]
  i482.useUnscaledTime = !!i483[20]
  i482.scalingMode = i483[21]
  i482.playOnAwake = !!i483[22]
  i482.maxParticles = i483[23]
  i482.emitterVelocityMode = i483[24]
  i482.stopAction = i483[25]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i484 = root || new pc.MinMaxCurve()
  var i485 = data
  i484.mode = i485[0]
  i484.curveMin = new pc.AnimationCurve( { keys_flow: i485[1] } )
  i484.curveMax = new pc.AnimationCurve( { keys_flow: i485[2] } )
  i484.curveMultiplier = i485[3]
  i484.constantMin = i485[4]
  i484.constantMax = i485[5]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i486 = root || new pc.MinMaxGradient()
  var i487 = data
  i486.mode = i487[0]
  i486.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i487[1], i486.gradientMin)
  i486.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i487[2], i486.gradientMax)
  i486.colorMin = new pc.Color(i487[3], i487[4], i487[5], i487[6])
  i486.colorMax = new pc.Color(i487[7], i487[8], i487[9], i487[10])
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i489 = data
  i488.mode = i489[0]
  var i491 = i489[1]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i491[i + 0]) );
  }
  i488.colorKeys = i490
  var i493 = i489[2]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i493[i + 0]) );
  }
  i488.alphaKeys = i492
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i494 = root || new pc.ParticleSystemColorBySpeed()
  var i495 = data
  i494.enabled = !!i495[0]
  i494.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i495[1], i494.color)
  i494.range = new pc.Vec2( i495[2], i495[3] )
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i499 = data
  i498.color = new pc.Color(i499[0], i499[1], i499[2], i499[3])
  i498.time = i499[4]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i503 = data
  i502.alpha = i503[0]
  i502.time = i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i504 = root || new pc.ParticleSystemColorOverLifetime()
  var i505 = data
  i504.enabled = !!i505[0]
  i504.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i505[1], i504.color)
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i506 = root || new pc.ParticleSystemEmitter()
  var i507 = data
  i506.enabled = !!i507[0]
  i506.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[1], i506.rateOverTime)
  i506.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[2], i506.rateOverDistance)
  var i509 = i507[3]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i509[i + 0]) );
  }
  i506.bursts = i508
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i512 = root || new pc.ParticleSystemBurst()
  var i513 = data
  i512.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[0], i512.count)
  i512.cycleCount = i513[1]
  i512.minCount = i513[2]
  i512.maxCount = i513[3]
  i512.repeatInterval = i513[4]
  i512.time = i513[5]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i514 = root || new pc.ParticleSystemRotationBySpeed()
  var i515 = data
  i514.enabled = !!i515[0]
  i514.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[1], i514.x)
  i514.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[2], i514.y)
  i514.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[3], i514.z)
  i514.separateAxes = !!i515[4]
  i514.range = new pc.Vec2( i515[5], i515[6] )
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i516 = root || new pc.ParticleSystemRotationOverLifetime()
  var i517 = data
  i516.enabled = !!i517[0]
  i516.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[1], i516.x)
  i516.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[2], i516.y)
  i516.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[3], i516.z)
  i516.separateAxes = !!i517[4]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i518 = root || new pc.ParticleSystemShape()
  var i519 = data
  i518.enabled = !!i519[0]
  i518.shapeType = i519[1]
  i518.randomDirectionAmount = i519[2]
  i518.sphericalDirectionAmount = i519[3]
  i518.randomPositionAmount = i519[4]
  i518.alignToDirection = !!i519[5]
  i518.radius = i519[6]
  i518.radiusMode = i519[7]
  i518.radiusSpread = i519[8]
  i518.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[9], i518.radiusSpeed)
  i518.radiusThickness = i519[10]
  i518.angle = i519[11]
  i518.length = i519[12]
  i518.boxThickness = new pc.Vec3( i519[13], i519[14], i519[15] )
  i518.meshShapeType = i519[16]
  request.r(i519[17], i519[18], 0, i518, 'mesh')
  request.r(i519[19], i519[20], 0, i518, 'meshRenderer')
  request.r(i519[21], i519[22], 0, i518, 'skinnedMeshRenderer')
  i518.useMeshMaterialIndex = !!i519[23]
  i518.meshMaterialIndex = i519[24]
  i518.useMeshColors = !!i519[25]
  i518.normalOffset = i519[26]
  i518.arc = i519[27]
  i518.arcMode = i519[28]
  i518.arcSpread = i519[29]
  i518.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[30], i518.arcSpeed)
  i518.donutRadius = i519[31]
  i518.position = new pc.Vec3( i519[32], i519[33], i519[34] )
  i518.rotation = new pc.Vec3( i519[35], i519[36], i519[37] )
  i518.scale = new pc.Vec3( i519[38], i519[39], i519[40] )
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemSizeBySpeed()
  var i521 = data
  i520.enabled = !!i521[0]
  i520.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[1], i520.x)
  i520.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[2], i520.y)
  i520.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[3], i520.z)
  i520.separateAxes = !!i521[4]
  i520.range = new pc.Vec2( i521[5], i521[6] )
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemSizeOverLifetime()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[1], i522.x)
  i522.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[2], i522.y)
  i522.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[3], i522.z)
  i522.separateAxes = !!i523[4]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i525 = data
  i524.enabled = !!i525[0]
  i524.mode = i525[1]
  i524.animation = i525[2]
  i524.numTilesX = i525[3]
  i524.numTilesY = i525[4]
  i524.useRandomRow = !!i525[5]
  i524.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[6], i524.frameOverTime)
  i524.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[7], i524.startFrame)
  i524.cycleCount = i525[8]
  i524.rowIndex = i525[9]
  i524.flipU = i525[10]
  i524.flipV = i525[11]
  i524.spriteCount = i525[12]
  var i527 = i525[13]
  var i526 = []
  for(var i = 0; i < i527.length; i += 2) {
  request.r(i527[i + 0], i527[i + 1], 2, i526, '')
  }
  i524.sprites = i526
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i530 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i531 = data
  i530.enabled = !!i531[0]
  i530.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[1], i530.x)
  i530.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[2], i530.y)
  i530.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[3], i530.z)
  i530.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[4], i530.radial)
  i530.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[5], i530.speedModifier)
  i530.space = i531[6]
  i530.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[7], i530.orbitalX)
  i530.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[8], i530.orbitalY)
  i530.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[9], i530.orbitalZ)
  i530.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[10], i530.orbitalOffsetX)
  i530.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[11], i530.orbitalOffsetY)
  i530.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[12], i530.orbitalOffsetZ)
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i532 = root || new pc.ParticleSystemNoise()
  var i533 = data
  i532.enabled = !!i533[0]
  i532.separateAxes = !!i533[1]
  i532.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[2], i532.strengthX)
  i532.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[3], i532.strengthY)
  i532.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[4], i532.strengthZ)
  i532.frequency = i533[5]
  i532.damping = !!i533[6]
  i532.octaveCount = i533[7]
  i532.octaveMultiplier = i533[8]
  i532.octaveScale = i533[9]
  i532.quality = i533[10]
  i532.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[11], i532.scrollSpeed)
  i532.scrollSpeedMultiplier = i533[12]
  i532.remapEnabled = !!i533[13]
  i532.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[14], i532.remapX)
  i532.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[15], i532.remapY)
  i532.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[16], i532.remapZ)
  i532.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[17], i532.positionAmount)
  i532.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[18], i532.rotationAmount)
  i532.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[19], i532.sizeAmount)
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i534 = root || new pc.ParticleSystemInheritVelocity()
  var i535 = data
  i534.enabled = !!i535[0]
  i534.mode = i535[1]
  i534.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[2], i534.curve)
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemForceOverLifetime()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[1], i536.x)
  i536.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[2], i536.y)
  i536.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[3], i536.z)
  i536.space = i537[4]
  i536.randomized = !!i537[5]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i539 = data
  i538.enabled = !!i539[0]
  i538.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[1], i538.limit)
  i538.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[2], i538.limitX)
  i538.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[3], i538.limitY)
  i538.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[4], i538.limitZ)
  i538.dampen = i539[5]
  i538.separateAxes = !!i539[6]
  i538.space = i539[7]
  i538.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[8], i538.drag)
  i538.multiplyDragByParticleSize = !!i539[9]
  i538.multiplyDragByParticleVelocity = !!i539[10]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'mesh')
  i540.meshCount = i541[2]
  i540.activeVertexStreamsCount = i541[3]
  i540.alignment = i541[4]
  i540.renderMode = i541[5]
  i540.sortMode = i541[6]
  i540.lengthScale = i541[7]
  i540.velocityScale = i541[8]
  i540.cameraVelocityScale = i541[9]
  i540.normalDirection = i541[10]
  i540.sortingFudge = i541[11]
  i540.minParticleSize = i541[12]
  i540.maxParticleSize = i541[13]
  i540.pivot = new pc.Vec3( i541[14], i541[15], i541[16] )
  request.r(i541[17], i541[18], 0, i540, 'trailMaterial')
  i540.applyActiveColorSpace = !!i541[19]
  i540.enabled = !!i541[20]
  request.r(i541[21], i541[22], 0, i540, 'sharedMaterial')
  var i543 = i541[23]
  var i542 = []
  for(var i = 0; i < i543.length; i += 2) {
  request.r(i543[i + 0], i543[i + 1], 2, i542, '')
  }
  i540.sharedMaterials = i542
  i540.receiveShadows = !!i541[24]
  i540.shadowCastingMode = i541[25]
  i540.sortingLayerID = i541[26]
  i540.sortingOrder = i541[27]
  i540.lightmapIndex = i541[28]
  i540.lightmapSceneIndex = i541[29]
  i540.lightmapScaleOffset = new pc.Vec4( i541[30], i541[31], i541[32], i541[33] )
  i540.lightProbeUsage = i541[34]
  i540.reflectionProbeUsage = i541[35]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i545 = data
  i544.usedByComposite = !!i545[0]
  i544.autoTiling = !!i545[1]
  i544.size = new pc.Vec2( i545[2], i545[3] )
  i544.edgeRadius = i545[4]
  i544.enabled = !!i545[5]
  i544.isTrigger = !!i545[6]
  i544.usedByEffector = !!i545[7]
  i544.density = i545[8]
  i544.offset = new pc.Vec2( i545[9], i545[10] )
  request.r(i545[11], i545[12], 0, i544, 'material')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i547 = data
  i546.useLimits = !!i547[0]
  i546.limits = request.d('UnityEngine.JointAngleLimits2D', i547[1], i546.limits)
  i546.useMotor = !!i547[2]
  i546.motor = request.d('UnityEngine.JointMotor2D', i547[3], i546.motor)
  i546.anchor = new pc.Vec2( i547[4], i547[5] )
  i546.connectedAnchor = new pc.Vec2( i547[6], i547[7] )
  i546.autoConfigureConnectedAnchor = !!i547[8]
  request.r(i547[9], i547[10], 0, i546, 'connectedBody')
  i546.breakForce = i547[11]
  i546.breakTorque = i547[12]
  i546.enableCollision = !!i547[13]
  i546.enabled = !!i547[14]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i549 = data
  i548.name = i549[0]
  i548.index = i549[1]
  i548.startup = !!i549[2]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i551 = data
  i550.aspect = i551[0]
  i550.orthographic = !!i551[1]
  i550.orthographicSize = i551[2]
  i550.backgroundColor = new pc.Color(i551[3], i551[4], i551[5], i551[6])
  i550.nearClipPlane = i551[7]
  i550.farClipPlane = i551[8]
  i550.fieldOfView = i551[9]
  i550.depth = i551[10]
  i550.clearFlags = i551[11]
  i550.cullingMask = i551[12]
  i550.rect = i551[13]
  request.r(i551[14], i551[15], 0, i550, 'targetTexture')
  i550.usePhysicalProperties = !!i551[16]
  i550.focalLength = i551[17]
  i550.sensorSize = new pc.Vec2( i551[18], i551[19] )
  i550.lensShift = new pc.Vec2( i551[20], i551[21] )
  i550.gateFit = i551[22]
  i550.commandBufferCount = i551[23]
  i550.cameraType = i551[24]
  i550.enabled = !!i551[25]
  return i550
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'm_FirstSelected')
  i552.m_sendNavigationEvents = !!i553[2]
  i552.m_DragThreshold = i553[3]
  return i552
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i555 = data
  i554.m_HorizontalAxis = i555[0]
  i554.m_VerticalAxis = i555[1]
  i554.m_SubmitButton = i555[2]
  i554.m_CancelButton = i555[3]
  i554.m_InputActionsPerSecond = i555[4]
  i554.m_RepeatDelay = i555[5]
  i554.m_ForceModuleActive = !!i555[6]
  i554.m_SendPointerHoverToParent = !!i555[7]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i557 = data
  i556.pivot = new pc.Vec2( i557[0], i557[1] )
  i556.anchorMin = new pc.Vec2( i557[2], i557[3] )
  i556.anchorMax = new pc.Vec2( i557[4], i557[5] )
  i556.sizeDelta = new pc.Vec2( i557[6], i557[7] )
  i556.anchoredPosition3D = new pc.Vec3( i557[8], i557[9], i557[10] )
  i556.rotation = new pc.Quat(i557[11], i557[12], i557[13], i557[14])
  i556.scale = new pc.Vec3( i557[15], i557[16], i557[17] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i559 = data
  i558.planeDistance = i559[0]
  i558.referencePixelsPerUnit = i559[1]
  i558.isFallbackOverlay = !!i559[2]
  i558.renderMode = i559[3]
  i558.renderOrder = i559[4]
  i558.sortingLayerName = i559[5]
  i558.sortingOrder = i559[6]
  i558.scaleFactor = i559[7]
  request.r(i559[8], i559[9], 0, i558, 'worldCamera')
  i558.overrideSorting = !!i559[10]
  i558.pixelPerfect = !!i559[11]
  i558.targetDisplay = i559[12]
  i558.overridePixelPerfect = !!i559[13]
  i558.enabled = !!i559[14]
  return i558
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i561 = data
  i560.m_UiScaleMode = i561[0]
  i560.m_ReferencePixelsPerUnit = i561[1]
  i560.m_ScaleFactor = i561[2]
  i560.m_ReferenceResolution = new pc.Vec2( i561[3], i561[4] )
  i560.m_ScreenMatchMode = i561[5]
  i560.m_MatchWidthOrHeight = i561[6]
  i560.m_PhysicalUnit = i561[7]
  i560.m_FallbackScreenDPI = i561[8]
  i560.m_DefaultSpriteDPI = i561[9]
  i560.m_DynamicPixelsPerUnit = i561[10]
  i560.m_PresetInfoIsWorld = !!i561[11]
  return i560
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i563 = data
  i562.m_IgnoreReversedGraphics = !!i563[0]
  i562.m_BlockingObjects = i563[1]
  i562.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i563[2] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i565 = data
  i564.cullTransparentMesh = !!i565[0]
  return i564
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'm_Texture')
  i566.m_UVRect = UnityEngine.Rect.MinMaxRect(i567[2], i567[3], i567[4], i567[5])
  request.r(i567[6], i567[7], 0, i566, 'm_Material')
  i566.m_Maskable = !!i567[8]
  i566.m_Color = new pc.Color(i567[9], i567[10], i567[11], i567[12])
  i566.m_RaycastTarget = !!i567[13]
  i566.m_RaycastPadding = new pc.Vec4( i567[14], i567[15], i567[16], i567[17] )
  return i566
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i569 = data
  i568.m_AspectMode = i569[0]
  i568.m_AspectRatio = i569[1]
  return i568
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.Button' )
  var i571 = data
  i570.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i571[0], i570.m_OnClick)
  i570.m_Navigation = request.d('UnityEngine.UI.Navigation', i571[1], i570.m_Navigation)
  i570.m_Transition = i571[2]
  i570.m_Colors = request.d('UnityEngine.UI.ColorBlock', i571[3], i570.m_Colors)
  i570.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i571[4], i570.m_SpriteState)
  i570.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i571[5], i570.m_AnimationTriggers)
  i570.m_Interactable = !!i571[6]
  request.r(i571[7], i571[8], 0, i570, 'm_TargetGraphic')
  return i570
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i573 = data
  i572.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i573[0], i572.m_PersistentCalls)
  return i572
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i575 = data
  var i577 = i575[0]
  var i576 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i577.length; i += 1) {
    i576.add(request.d('UnityEngine.Events.PersistentCall', i577[i + 0]));
  }
  i574.m_Calls = i576
  return i574
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'm_Target')
  i580.m_TargetAssemblyTypeName = i581[2]
  i580.m_MethodName = i581[3]
  i580.m_Mode = i581[4]
  i580.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i581[5], i580.m_Arguments)
  i580.m_CallState = i581[6]
  return i580
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i583 = data
  i582.m_Mode = i583[0]
  i582.m_WrapAround = !!i583[1]
  request.r(i583[2], i583[3], 0, i582, 'm_SelectOnUp')
  request.r(i583[4], i583[5], 0, i582, 'm_SelectOnDown')
  request.r(i583[6], i583[7], 0, i582, 'm_SelectOnLeft')
  request.r(i583[8], i583[9], 0, i582, 'm_SelectOnRight')
  return i582
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i585 = data
  i584.m_NormalColor = new pc.Color(i585[0], i585[1], i585[2], i585[3])
  i584.m_HighlightedColor = new pc.Color(i585[4], i585[5], i585[6], i585[7])
  i584.m_PressedColor = new pc.Color(i585[8], i585[9], i585[10], i585[11])
  i584.m_SelectedColor = new pc.Color(i585[12], i585[13], i585[14], i585[15])
  i584.m_DisabledColor = new pc.Color(i585[16], i585[17], i585[18], i585[19])
  i584.m_ColorMultiplier = i585[20]
  i584.m_FadeDuration = i585[21]
  return i584
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'm_HighlightedSprite')
  request.r(i587[2], i587[3], 0, i586, 'm_PressedSprite')
  request.r(i587[4], i587[5], 0, i586, 'm_SelectedSprite')
  request.r(i587[6], i587[7], 0, i586, 'm_DisabledSprite')
  return i586
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i589 = data
  i588.m_NormalTrigger = i589[0]
  i588.m_HighlightedTrigger = i589[1]
  i588.m_PressedTrigger = i589[2]
  i588.m_SelectedTrigger = i589[3]
  i588.m_DisabledTrigger = i589[4]
  return i588
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.Image' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'm_Sprite')
  i590.m_Type = i591[2]
  i590.m_PreserveAspect = !!i591[3]
  i590.m_FillCenter = !!i591[4]
  i590.m_FillMethod = i591[5]
  i590.m_FillAmount = i591[6]
  i590.m_FillClockwise = !!i591[7]
  i590.m_FillOrigin = i591[8]
  i590.m_UseSpriteMesh = !!i591[9]
  i590.m_PixelsPerUnitMultiplier = i591[10]
  request.r(i591[11], i591[12], 0, i590, 'm_Material')
  i590.m_Maskable = !!i591[13]
  i590.m_Color = new pc.Color(i591[14], i591[15], i591[16], i591[17])
  i590.m_RaycastTarget = !!i591[18]
  i590.m_RaycastPadding = new pc.Vec4( i591[19], i591[20], i591[21], i591[22] )
  return i590
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Text' )
  var i593 = data
  i592.m_FontData = request.d('UnityEngine.UI.FontData', i593[0], i592.m_FontData)
  i592.m_Text = i593[1]
  request.r(i593[2], i593[3], 0, i592, 'm_Material')
  i592.m_Maskable = !!i593[4]
  i592.m_Color = new pc.Color(i593[5], i593[6], i593[7], i593[8])
  i592.m_RaycastTarget = !!i593[9]
  i592.m_RaycastPadding = new pc.Vec4( i593[10], i593[11], i593[12], i593[13] )
  return i592
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.FontData' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'm_Font')
  i594.m_FontSize = i595[2]
  i594.m_FontStyle = i595[3]
  i594.m_BestFit = !!i595[4]
  i594.m_MinSize = i595[5]
  i594.m_MaxSize = i595[6]
  i594.m_Alignment = i595[7]
  i594.m_AlignByGeometry = !!i595[8]
  i594.m_RichText = !!i595[9]
  i594.m_HorizontalOverflow = i595[10]
  i594.m_VerticalOverflow = i595[11]
  i594.m_LineSpacing = i595[12]
  return i594
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i596 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i597 = data
  i596.targetIsSelf = !!i597[0]
  request.r(i597[1], i597[2], 0, i596, 'targetGO')
  i596.tweenTargetIsTargetGO = !!i597[3]
  i596.delay = i597[4]
  i596.duration = i597[5]
  i596.easeType = i597[6]
  i596.easeCurve = new pc.AnimationCurve( { keys_flow: i597[7] } )
  i596.loopType = i597[8]
  i596.loops = i597[9]
  i596.id = i597[10]
  i596.isRelative = !!i597[11]
  i596.isFrom = !!i597[12]
  i596.isIndependentUpdate = !!i597[13]
  i596.autoKill = !!i597[14]
  i596.autoGenerate = !!i597[15]
  i596.isActive = !!i597[16]
  i596.isValid = !!i597[17]
  request.r(i597[18], i597[19], 0, i596, 'target')
  i596.animationType = i597[20]
  i596.targetType = i597[21]
  i596.forcedTargetType = i597[22]
  i596.autoPlay = !!i597[23]
  i596.useTargetAsV3 = !!i597[24]
  i596.endValueFloat = i597[25]
  i596.endValueV3 = new pc.Vec3( i597[26], i597[27], i597[28] )
  i596.endValueV2 = new pc.Vec2( i597[29], i597[30] )
  i596.endValueColor = new pc.Color(i597[31], i597[32], i597[33], i597[34])
  i596.endValueString = i597[35]
  i596.endValueRect = UnityEngine.Rect.MinMaxRect(i597[36], i597[37], i597[38], i597[39])
  request.r(i597[40], i597[41], 0, i596, 'endValueTransform')
  i596.optionalBool0 = !!i597[42]
  i596.optionalBool1 = !!i597[43]
  i596.optionalFloat0 = i597[44]
  i596.optionalInt0 = i597[45]
  i596.optionalRotationMode = i597[46]
  i596.optionalScrambleMode = i597[47]
  i596.optionalShakeRandomnessMode = i597[48]
  i596.optionalString = i597[49]
  i596.updateType = i597[50]
  i596.isSpeedBased = !!i597[51]
  i596.hasOnStart = !!i597[52]
  i596.hasOnPlay = !!i597[53]
  i596.hasOnUpdate = !!i597[54]
  i596.hasOnStepComplete = !!i597[55]
  i596.hasOnComplete = !!i597[56]
  i596.hasOnTweenCreated = !!i597[57]
  i596.hasOnRewind = !!i597[58]
  i596.onStart = request.d('UnityEngine.Events.UnityEvent', i597[59], i596.onStart)
  i596.onPlay = request.d('UnityEngine.Events.UnityEvent', i597[60], i596.onPlay)
  i596.onUpdate = request.d('UnityEngine.Events.UnityEvent', i597[61], i596.onUpdate)
  i596.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i597[62], i596.onStepComplete)
  i596.onComplete = request.d('UnityEngine.Events.UnityEvent', i597[63], i596.onComplete)
  i596.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i597[64], i596.onTweenCreated)
  i596.onRewind = request.d('UnityEngine.Events.UnityEvent', i597[65], i596.onRewind)
  return i596
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i599 = data
  i598.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i599[0], i598.m_PersistentCalls)
  return i598
}

Deserializers["PlayerRagdollBalance"] = function (request, data, root) {
  var i600 = root || request.c( 'PlayerRagdollBalance' )
  var i601 = data
  i600.idleSwayAngle = i601[0]
  i600.idleSwaySpeed = i601[1]
  i600.correctionSpeed = i601[2]
  return i600
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i602 = root || request.c( 'PlayerController' )
  var i603 = data
  i602.ShootCD = i603[0]
  request.r(i603[1], i603[2], 0, i602, 'currentMonster')
  request.r(i603[3], i603[4], 0, i602, 'left')
  request.r(i603[5], i603[6], 0, i602, 'gun')
  request.r(i603[7], i603[8], 0, i602, 'bulletPrefab')
  i602.canShoot = !!i603[9]
  i602.onCD = !!i603[10]
  request.r(i603[11], i603[12], 0, i602, 'poolParent')
  request.r(i603[13], i603[14], 0, i602, 'shootSound')
  i602.holdAngle = i603[15]
  i602.equipRaiseDuration = i603[16]
  i602.recoilAngle = i603[17]
  i602.recoilDuration = i603[18]
  i602.recoilReturnDuration = i603[19]
  return i602
}

Deserializers["GameController"] = function (request, data, root) {
  var i604 = root || request.c( 'GameController' )
  var i605 = data
  i604.OnAddMonster = request.d('System.Action', i605[0], i604.OnAddMonster)
  request.r(i605[1], i605[2], 0, i604, 'area')
  request.r(i605[3], i605[4], 0, i604, 'player')
  request.r(i605[5], i605[6], 0, i604, 'areaTut')
  request.r(i605[7], i605[8], 0, i604, 'tut')
  i604.numMonster = i605[9]
  var i607 = i605[10]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('Monster')))
  for(var i = 0; i < i607.length; i += 1) {
    i606.add(request.d('Monster', i607[i + 0]));
  }
  i604.monsters = i606
  i604.currentMonster = request.d('Monster', i605[11], i604.currentMonster)
  request.r(i605[12], i605[13], 0, i604, 'world')
  request.r(i605[14], i605[15], 0, i604, 'clickSound')
  return i604
}

Deserializers["System.Action"] = function (request, data, root) {
  var i608 = root || request.c( 'System.Action' )
  var i609 = data
  return i608
}

Deserializers["Monster"] = function (request, data, root) {
  var i612 = root || request.c( 'Monster' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'Button')
  request.r(i613[2], i613[3], 0, i612, 'Selected')
  request.r(i613[4], i613[5], 0, i612, 'Prefab')
  return i612
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i614 = root || request.c( 'LayoutController' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'cam')
  request.r(i615[2], i615[3], 0, i614, 'button')
  return i614
}

Deserializers["LunaController"] = function (request, data, root) {
  var i616 = root || request.c( 'LunaController' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'BGTexture')
  i616.UseTime = !!i617[2]
  i616.TimePlay = i617[3]
  i616.UseCountPlay = !!i617[4]
  i616.MaxCountPlay = i617[5]
  request.r(i617[6], i617[7], 0, i616, 'BGImage')
  var i619 = i617[8]
  var i618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 1, i618, '')
  }
  i616.CTA = i618
  request.r(i617[9], i617[10], 0, i616, 'endCard')
  i616.count = i617[11]
  return i616
}

Deserializers["AudioController"] = function (request, data, root) {
  var i622 = root || request.c( 'AudioController' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'BGM')
  request.r(i623[2], i623[3], 0, i622, 'musicSource')
  request.r(i623[4], i623[5], 0, i622, 'pool')
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i625 = data
  i624.ambientIntensity = i625[0]
  i624.reflectionIntensity = i625[1]
  i624.ambientMode = i625[2]
  i624.ambientLight = new pc.Color(i625[3], i625[4], i625[5], i625[6])
  i624.ambientSkyColor = new pc.Color(i625[7], i625[8], i625[9], i625[10])
  i624.ambientGroundColor = new pc.Color(i625[11], i625[12], i625[13], i625[14])
  i624.ambientEquatorColor = new pc.Color(i625[15], i625[16], i625[17], i625[18])
  i624.fogColor = new pc.Color(i625[19], i625[20], i625[21], i625[22])
  i624.fogEndDistance = i625[23]
  i624.fogStartDistance = i625[24]
  i624.fogDensity = i625[25]
  i624.fog = !!i625[26]
  request.r(i625[27], i625[28], 0, i624, 'skybox')
  i624.fogMode = i625[29]
  var i627 = i625[30]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i627[i + 0]) );
  }
  i624.lightmaps = i626
  i624.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i625[31], i624.lightProbes)
  i624.lightmapsMode = i625[32]
  i624.mixedBakeMode = i625[33]
  i624.environmentLightingMode = i625[34]
  i624.ambientProbe = new pc.SphericalHarmonicsL2(i625[35])
  request.r(i625[36], i625[37], 0, i624, 'customReflection')
  request.r(i625[38], i625[39], 0, i624, 'defaultReflection')
  i624.defaultReflectionMode = i625[40]
  i624.defaultReflectionResolution = i625[41]
  i624.sunLightObjectId = i625[42]
  i624.pixelLightCount = i625[43]
  i624.defaultReflectionHDR = !!i625[44]
  i624.hasLightDataAsset = !!i625[45]
  i624.hasManualGenerate = !!i625[46]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'lightmapColor')
  request.r(i631[2], i631[3], 0, i630, 'lightmapDirection')
  request.r(i631[4], i631[5], 0, i630, 'shadowMask')
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i632 = root || new UnityEngine.LightProbes()
  var i633 = data
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i641 = data
  i640.name = i641[0]
  i640.bounciness = i641[1]
  i640.friction = i641[2]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i643 = data
  var i645 = i643[0]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i645.length; i += 1) {
    i644.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i645[i + 0]));
  }
  i642.ShaderCompilationErrors = i644
  i642.name = i643[1]
  i642.guid = i643[2]
  var i647 = i643[3]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( i647[i + 0] );
  }
  i642.shaderDefinedKeywords = i646
  var i649 = i643[4]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i649[i + 0]) );
  }
  i642.passes = i648
  var i651 = i643[5]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i651[i + 0]) );
  }
  i642.usePasses = i650
  var i653 = i643[6]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i653[i + 0]) );
  }
  i642.defaultParameterValues = i652
  request.r(i643[7], i643[8], 0, i642, 'unityFallbackShader')
  i642.readDepth = !!i643[9]
  i642.hasDepthOnlyPass = !!i643[10]
  i642.isCreatedByShaderGraph = !!i643[11]
  i642.disableBatching = !!i643[12]
  i642.compiled = !!i643[13]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i657 = data
  i656.shaderName = i657[0]
  i656.errorMessage = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i662 = root || new pc.UnityShaderPass()
  var i663 = data
  i662.id = i663[0]
  i662.subShaderIndex = i663[1]
  i662.name = i663[2]
  i662.passType = i663[3]
  i662.grabPassTextureName = i663[4]
  i662.usePass = !!i663[5]
  i662.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[6], i662.zTest)
  i662.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[7], i662.zWrite)
  i662.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[8], i662.culling)
  i662.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i663[9], i662.blending)
  i662.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i663[10], i662.alphaBlending)
  i662.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[11], i662.colorWriteMask)
  i662.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[12], i662.offsetUnits)
  i662.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[13], i662.offsetFactor)
  i662.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[14], i662.stencilRef)
  i662.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[15], i662.stencilReadMask)
  i662.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i663[16], i662.stencilWriteMask)
  i662.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i663[17], i662.stencilOp)
  i662.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i663[18], i662.stencilOpFront)
  i662.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i663[19], i662.stencilOpBack)
  var i665 = i663[20]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i665[i + 0]) );
  }
  i662.tags = i664
  var i667 = i663[21]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( i667[i + 0] );
  }
  i662.passDefinedKeywords = i666
  var i669 = i663[22]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i669[i + 0]) );
  }
  i662.passDefinedKeywordGroups = i668
  var i671 = i663[23]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i671[i + 0]) );
  }
  i662.variants = i670
  var i673 = i663[24]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i673[i + 0]) );
  }
  i662.excludedVariants = i672
  i662.hasDepthReader = !!i663[25]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i675 = data
  i674.val = i675[0]
  i674.name = i675[1]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i677 = data
  i676.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[0], i676.src)
  i676.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[1], i676.dst)
  i676.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i677[2], i676.op)
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i679 = data
  i678.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[0], i678.pass)
  i678.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[1], i678.fail)
  i678.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[2], i678.zFail)
  i678.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i679[3], i678.comp)
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i683 = data
  i682.name = i683[0]
  i682.value = i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i687 = data
  var i689 = i687[0]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( i689[i + 0] );
  }
  i686.keywords = i688
  i686.hasDiscard = !!i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i693 = data
  i692.passId = i693[0]
  i692.subShaderIndex = i693[1]
  var i695 = i693[2]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( i695[i + 0] );
  }
  i692.keywords = i694
  i692.vertexProgram = i693[3]
  i692.fragmentProgram = i693[4]
  i692.exportedForWebGl2 = !!i693[5]
  i692.readDepth = !!i693[6]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'shader')
  i698.pass = i699[2]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i703 = data
  i702.name = i703[0]
  i702.type = i703[1]
  i702.value = new pc.Vec4( i703[2], i703[3], i703[4], i703[5] )
  i702.textureValue = i703[6]
  i702.shaderPropertyFlag = i703[7]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i705 = data
  i704.name = i705[0]
  request.r(i705[1], i705[2], 0, i704, 'texture')
  i704.aabb = i705[3]
  i704.vertices = i705[4]
  i704.triangles = i705[5]
  i704.textureRect = UnityEngine.Rect.MinMaxRect(i705[6], i705[7], i705[8], i705[9])
  i704.packedRect = UnityEngine.Rect.MinMaxRect(i705[10], i705[11], i705[12], i705[13])
  i704.border = new pc.Vec4( i705[14], i705[15], i705[16], i705[17] )
  i704.transparency = i705[18]
  i704.bounds = i705[19]
  i704.pixelsPerUnit = i705[20]
  i704.textureWidth = i705[21]
  i704.textureHeight = i705[22]
  i704.nativeSize = new pc.Vec2( i705[23], i705[24] )
  i704.pivot = new pc.Vec2( i705[25], i705[26] )
  i704.textureRectOffset = new pc.Vec2( i705[27], i705[28] )
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i707 = data
  i706.name = i707[0]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i709 = data
  i708.name = i709[0]
  i708.ascent = i709[1]
  i708.originalLineHeight = i709[2]
  i708.fontSize = i709[3]
  var i711 = i709[4]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i711[i + 0]) );
  }
  i708.characterInfo = i710
  request.r(i709[5], i709[6], 0, i708, 'texture')
  i708.originalFontSize = i709[7]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i715 = data
  i714.index = i715[0]
  i714.advance = i715[1]
  i714.bearing = i715[2]
  i714.glyphWidth = i715[3]
  i714.glyphHeight = i715[4]
  i714.minX = i715[5]
  i714.maxX = i715[6]
  i714.minY = i715[7]
  i714.maxY = i715[8]
  i714.uvBottomLeftX = i715[9]
  i714.uvBottomLeftY = i715[10]
  i714.uvBottomRightX = i715[11]
  i714.uvBottomRightY = i715[12]
  i714.uvTopLeftX = i715[13]
  i714.uvTopLeftY = i715[14]
  i714.uvTopRightX = i715[15]
  i714.uvTopRightY = i715[16]
  return i714
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i716 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i717 = data
  i716.useSafeMode = !!i717[0]
  i716.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i717[1], i716.safeModeOptions)
  i716.timeScale = i717[2]
  i716.unscaledTimeScale = i717[3]
  i716.useSmoothDeltaTime = !!i717[4]
  i716.maxSmoothUnscaledTime = i717[5]
  i716.rewindCallbackMode = i717[6]
  i716.showUnityEditorReport = !!i717[7]
  i716.logBehaviour = i717[8]
  i716.drawGizmos = !!i717[9]
  i716.defaultRecyclable = !!i717[10]
  i716.defaultAutoPlay = i717[11]
  i716.defaultUpdateType = i717[12]
  i716.defaultTimeScaleIndependent = !!i717[13]
  i716.defaultEaseType = i717[14]
  i716.defaultEaseOvershootOrAmplitude = i717[15]
  i716.defaultEasePeriod = i717[16]
  i716.defaultAutoKill = !!i717[17]
  i716.defaultLoopType = i717[18]
  i716.debugMode = !!i717[19]
  i716.debugStoreTargetId = !!i717[20]
  i716.showPreviewPanel = !!i717[21]
  i716.storeSettingsLocation = i717[22]
  i716.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i717[23], i716.modules)
  i716.createASMDEF = !!i717[24]
  i716.showPlayingTweens = !!i717[25]
  i716.showPausedTweens = !!i717[26]
  return i716
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i718 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i719 = data
  i718.logBehaviour = i719[0]
  i718.nestedTweenFailureBehaviour = i719[1]
  return i718
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i720 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i721 = data
  i720.showPanel = !!i721[0]
  i720.audioEnabled = !!i721[1]
  i720.physicsEnabled = !!i721[2]
  i720.physics2DEnabled = !!i721[3]
  i720.spriteEnabled = !!i721[4]
  i720.uiEnabled = !!i721[5]
  i720.textMeshProEnabled = !!i721[6]
  i720.tk2DEnabled = !!i721[7]
  i720.deAudioEnabled = !!i721[8]
  i720.deUnityExtendedEnabled = !!i721[9]
  i720.epoOutlineEnabled = !!i721[10]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i723 = data
  var i725 = i723[0]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i725[i + 0]) );
  }
  i722.files = i724
  i722.componentToPrefabIds = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i729 = data
  i728.path = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'unityObject')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i731 = data
  var i733 = i731[0]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i733[i + 0]) );
  }
  i730.scriptsExecutionOrder = i732
  var i735 = i731[1]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i735[i + 0]) );
  }
  i730.sortingLayers = i734
  var i737 = i731[2]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i737[i + 0]) );
  }
  i730.cullingLayers = i736
  i730.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i731[3], i730.timeSettings)
  i730.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i731[4], i730.physicsSettings)
  i730.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i731[5], i730.physics2DSettings)
  i730.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i731[6], i730.qualitySettings)
  i730.enableRealtimeShadows = !!i731[7]
  i730.enableAutoInstancing = !!i731[8]
  i730.enableStaticBatching = !!i731[9]
  i730.enableDynamicBatching = !!i731[10]
  i730.usePreservativeDynamicBatching = !!i731[11]
  i730.lightmapEncodingQuality = i731[12]
  i730.desiredColorSpace = i731[13]
  var i739 = i731[14]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i730.allTags = i738
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i743 = data
  i742.name = i743[0]
  i742.value = i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i747 = data
  i746.id = i747[0]
  i746.name = i747[1]
  i746.value = i747[2]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i751 = data
  i750.id = i751[0]
  i750.name = i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i753 = data
  i752.fixedDeltaTime = i753[0]
  i752.maximumDeltaTime = i753[1]
  i752.timeScale = i753[2]
  i752.maximumParticleTimestep = i753[3]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i755 = data
  i754.gravity = new pc.Vec3( i755[0], i755[1], i755[2] )
  i754.defaultSolverIterations = i755[3]
  i754.bounceThreshold = i755[4]
  i754.autoSyncTransforms = !!i755[5]
  i754.autoSimulation = !!i755[6]
  var i757 = i755[7]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i757[i + 0]) );
  }
  i754.collisionMatrix = i756
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i761 = data
  i760.enabled = !!i761[0]
  i760.layerId = i761[1]
  i760.otherLayerId = i761[2]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'material')
  i762.gravity = new pc.Vec2( i763[2], i763[3] )
  i762.positionIterations = i763[4]
  i762.velocityIterations = i763[5]
  i762.velocityThreshold = i763[6]
  i762.maxLinearCorrection = i763[7]
  i762.maxAngularCorrection = i763[8]
  i762.maxTranslationSpeed = i763[9]
  i762.maxRotationSpeed = i763[10]
  i762.baumgarteScale = i763[11]
  i762.baumgarteTOIScale = i763[12]
  i762.timeToSleep = i763[13]
  i762.linearSleepTolerance = i763[14]
  i762.angularSleepTolerance = i763[15]
  i762.defaultContactOffset = i763[16]
  i762.autoSimulation = !!i763[17]
  i762.queriesHitTriggers = !!i763[18]
  i762.queriesStartInColliders = !!i763[19]
  i762.callbacksOnDisable = !!i763[20]
  i762.reuseCollisionCallbacks = !!i763[21]
  i762.autoSyncTransforms = !!i763[22]
  var i765 = i763[23]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i765[i + 0]) );
  }
  i762.collisionMatrix = i764
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i769 = data
  i768.enabled = !!i769[0]
  i768.layerId = i769[1]
  i768.otherLayerId = i769[2]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i771 = data
  var i773 = i771[0]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i773[i + 0]) );
  }
  i770.qualityLevels = i772
  var i775 = i771[1]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( i775[i + 0] );
  }
  i770.names = i774
  i770.shadows = i771[2]
  i770.anisotropicFiltering = i771[3]
  i770.antiAliasing = i771[4]
  i770.lodBias = i771[5]
  i770.shadowCascades = i771[6]
  i770.shadowDistance = i771[7]
  i770.shadowmaskMode = i771[8]
  i770.shadowProjection = i771[9]
  i770.shadowResolution = i771[10]
  i770.softParticles = !!i771[11]
  i770.softVegetation = !!i771[12]
  i770.activeColorSpace = i771[13]
  i770.desiredColorSpace = i771[14]
  i770.masterTextureLimit = i771[15]
  i770.maxQueuedFrames = i771[16]
  i770.particleRaycastBudget = i771[17]
  i770.pixelLightCount = i771[18]
  i770.realtimeReflectionProbes = !!i771[19]
  i770.shadowCascade2Split = i771[20]
  i770.shadowCascade4Split = new pc.Vec3( i771[21], i771[22], i771[23] )
  i770.streamingMipmapsActive = !!i771[24]
  i770.vSyncCount = i771[25]
  i770.asyncUploadBufferSize = i771[26]
  i770.asyncUploadTimeSlice = i771[27]
  i770.billboardsFaceCameraPosition = !!i771[28]
  i770.shadowNearPlaneOffset = i771[29]
  i770.streamingMipmapsMemoryBudget = i771[30]
  i770.maximumLODLevel = i771[31]
  i770.streamingMipmapsAddAllCameras = !!i771[32]
  i770.streamingMipmapsMaxLevelReduction = i771[33]
  i770.streamingMipmapsRenderersPerFrame = i771[34]
  i770.resolutionScalingFixedDPIFactor = i771[35]
  i770.streamingMipmapsMaxFileIORequests = i771[36]
  i770.currentQualityLevel = i771[37]
  return i770
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'm_ObjectArgument')
  i778.m_ObjectArgumentAssemblyTypeName = i779[2]
  i778.m_IntArgument = i779[3]
  i778.m_FloatArgument = i779[4]
  i778.m_StringArgument = i779[5]
  i778.m_BoolArgument = !!i779[6]
  return i778
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[20],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[11],"63":[11],"64":[11],"65":[11],"66":[11],"67":[11],"19":[11],"68":[11],"69":[11],"70":[11],"71":[11],"72":[11],"73":[11],"74":[20],"75":[76],"77":[78],"79":[78],"26":[25],"80":[3],"81":[20],"82":[83],"84":[25],"85":[29,25],"86":[76],"87":[29,25],"88":[25],"89":[25],"90":[76,25],"91":[25,29],"92":[93],"94":[93],"95":[93],"96":[25],"97":[25],"28":[26],"33":[29,25],"31":[25],"27":[26],"98":[25],"99":[25],"100":[25],"101":[25],"102":[25],"103":[25],"104":[25],"105":[25],"106":[25],"30":[29,25],"107":[25],"108":[25],"109":[25],"110":[25],"34":[29,25],"111":[25],"112":[23],"113":[23],"24":[23],"114":[23],"115":[20],"116":[20]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.Animator","UnityEngine.Rigidbody2D","MonsterController","BalanceController","UnityEngine.AudioSource","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.BoxCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.HingeJoint2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","PlayerRagdollBalance","PlayerController","UnityEngine.GameObject","GameController","LayoutController","LunaController","AudioController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "07/30/2026 10:48:51";

Deserializers.lunaDaysRunning = "89.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SRP_V08_HoaiTT";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V03";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "c267c9ad-03df-4449-9823-2b19c19b7adc";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


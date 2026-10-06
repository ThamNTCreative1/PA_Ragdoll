var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.JointSpring' )
  var i397 = data
  i396.spring = i397[0]
  i396.damper = i397[1]
  i396.targetPosition = i397[2]
  return i396
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.JointMotor' )
  var i399 = data
  i398.m_TargetVelocity = i399[0]
  i398.m_Force = i399[1]
  i398.m_FreeSpin = i399[2]
  return i398
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.JointLimits' )
  var i401 = data
  i400.m_Min = i401[0]
  i400.m_Max = i401[1]
  i400.m_Bounciness = i401[2]
  i400.m_BounceMinVelocity = i401[3]
  i400.m_ContactDistance = i401[4]
  i400.minBounce = i401[5]
  i400.maxBounce = i401[6]
  return i400
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.JointDrive' )
  var i403 = data
  i402.m_PositionSpring = i403[0]
  i402.m_PositionDamper = i403[1]
  i402.m_MaximumForce = i403[2]
  i402.m_UseAcceleration = i403[3]
  return i402
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i405 = data
  i404.m_Spring = i405[0]
  i404.m_Damper = i405[1]
  return i404
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i407 = data
  i406.m_Limit = i407[0]
  i406.m_Bounciness = i407[1]
  i406.m_ContactDistance = i407[2]
  return i406
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i409 = data
  i408.m_ExtremumSlip = i409[0]
  i408.m_ExtremumValue = i409[1]
  i408.m_AsymptoteSlip = i409[2]
  i408.m_AsymptoteValue = i409[3]
  i408.m_Stiffness = i409[4]
  return i408
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i411 = data
  i410.m_LowerAngle = i411[0]
  i410.m_UpperAngle = i411[1]
  return i410
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i413 = data
  i412.m_MotorSpeed = i413[0]
  i412.m_MaximumMotorTorque = i413[1]
  return i412
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i415 = data
  i414.m_DampingRatio = i415[0]
  i414.m_Frequency = i415[1]
  i414.m_Angle = i415[2]
  return i414
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i417 = data
  i416.m_LowerTranslation = i417[0]
  i416.m_UpperTranslation = i417[1]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i419 = data
  i418.name = i419[0]
  i418.width = i419[1]
  i418.height = i419[2]
  i418.mipmapCount = i419[3]
  i418.anisoLevel = i419[4]
  i418.filterMode = i419[5]
  i418.hdr = !!i419[6]
  i418.format = i419[7]
  i418.wrapMode = i419[8]
  i418.alphaIsTransparency = !!i419[9]
  i418.alphaSource = i419[10]
  i418.graphicsFormat = i419[11]
  i418.sRGBTexture = !!i419[12]
  i418.desiredColorSpace = i419[13]
  i418.wrapU = i419[14]
  i418.wrapV = i419[15]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i420 = root || new pc.UnityMaterial()
  var i421 = data
  i420.name = i421[0]
  request.r(i421[1], i421[2], 0, i420, 'shader')
  i420.renderQueue = i421[3]
  i420.enableInstancing = !!i421[4]
  var i423 = i421[5]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i423[i + 0]) );
  }
  i420.floatParameters = i422
  var i425 = i421[6]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i425[i + 0]) );
  }
  i420.colorParameters = i424
  var i427 = i421[7]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i427[i + 0]) );
  }
  i420.vectorParameters = i426
  var i429 = i421[8]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i429[i + 0]) );
  }
  i420.textureParameters = i428
  var i431 = i421[9]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i431[i + 0]) );
  }
  i420.materialFlags = i430
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i435 = data
  i434.name = i435[0]
  i434.value = i435[1]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i439 = data
  i438.name = i439[0]
  i438.value = new pc.Color(i439[1], i439[2], i439[3], i439[4])
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i443 = data
  i442.name = i443[0]
  i442.value = new pc.Vec4( i443[1], i443[2], i443[3], i443[4] )
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i447 = data
  i446.name = i447[0]
  request.r(i447[1], i447[2], 0, i446, 'value')
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i451 = data
  i450.name = i451[0]
  i450.enabled = !!i451[1]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i453 = data
  i452.position = new pc.Vec3( i453[0], i453[1], i453[2] )
  i452.scale = new pc.Vec3( i453[3], i453[4], i453[5] )
  i452.rotation = new pc.Quat(i453[6], i453[7], i453[8], i453[9])
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i455 = data
  i454.color = new pc.Color(i455[0], i455[1], i455[2], i455[3])
  request.r(i455[4], i455[5], 0, i454, 'sprite')
  i454.flipX = !!i455[6]
  i454.flipY = !!i455[7]
  i454.drawMode = i455[8]
  i454.size = new pc.Vec2( i455[9], i455[10] )
  i454.tileMode = i455[11]
  i454.adaptiveModeThreshold = i455[12]
  i454.maskInteraction = i455[13]
  i454.spriteSortPoint = i455[14]
  i454.enabled = !!i455[15]
  request.r(i455[16], i455[17], 0, i454, 'sharedMaterial')
  var i457 = i455[18]
  var i456 = []
  for(var i = 0; i < i457.length; i += 2) {
  request.r(i457[i + 0], i457[i + 1], 2, i456, '')
  }
  i454.sharedMaterials = i456
  i454.receiveShadows = !!i455[19]
  i454.shadowCastingMode = i455[20]
  i454.sortingLayerID = i455[21]
  i454.sortingOrder = i455[22]
  i454.lightmapIndex = i455[23]
  i454.lightmapSceneIndex = i455[24]
  i454.lightmapScaleOffset = new pc.Vec4( i455[25], i455[26], i455[27], i455[28] )
  i454.lightProbeUsage = i455[29]
  i454.reflectionProbeUsage = i455[30]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i461 = data
  i460.radius = i461[0]
  i460.enabled = !!i461[1]
  i460.isTrigger = !!i461[2]
  i460.usedByEffector = !!i461[3]
  i460.density = i461[4]
  i460.offset = new pc.Vec2( i461[5], i461[6] )
  request.r(i461[7], i461[8], 0, i460, 'material')
  return i460
}

Deserializers["BulletController"] = function (request, data, root) {
  var i462 = root || request.c( 'BulletController' )
  var i463 = data
  i462.speed = i463[0]
  i462.damage = i463[1]
  request.r(i463[2], i463[3], 0, i462, 'hitMonsterSound')
  request.r(i463[4], i463[5], 0, i462, 'hitSound')
  i462.lifeTime = i463[6]
  i462.hit = !!i463[7]
  request.r(i463[8], i463[9], 0, i462, 'bloodPrefab')
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i465 = data
  i464.name = i465[0]
  i464.tagId = i465[1]
  i464.enabled = !!i465[2]
  i464.isStatic = !!i465[3]
  i464.layer = i465[4]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i467 = data
  i466.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i467[0], i466.main)
  i466.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i467[1], i466.colorBySpeed)
  i466.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i467[2], i466.colorOverLifetime)
  i466.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i467[3], i466.emission)
  i466.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i467[4], i466.rotationBySpeed)
  i466.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i467[5], i466.rotationOverLifetime)
  i466.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i467[6], i466.shape)
  i466.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i467[7], i466.sizeBySpeed)
  i466.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i467[8], i466.sizeOverLifetime)
  i466.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i467[9], i466.textureSheetAnimation)
  i466.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i467[10], i466.velocityOverLifetime)
  i466.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i467[11], i466.noise)
  i466.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i467[12], i466.inheritVelocity)
  i466.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i467[13], i466.forceOverLifetime)
  i466.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i467[14], i466.limitVelocityOverLifetime)
  i466.useAutoRandomSeed = !!i467[15]
  i466.randomSeed = i467[16]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i468 = root || new pc.ParticleSystemMain()
  var i469 = data
  i468.duration = i469[0]
  i468.loop = !!i469[1]
  i468.prewarm = !!i469[2]
  i468.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[3], i468.startDelay)
  i468.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[4], i468.startLifetime)
  i468.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[5], i468.startSpeed)
  i468.startSize3D = !!i469[6]
  i468.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[7], i468.startSizeX)
  i468.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[8], i468.startSizeY)
  i468.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[9], i468.startSizeZ)
  i468.startRotation3D = !!i469[10]
  i468.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[11], i468.startRotationX)
  i468.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[12], i468.startRotationY)
  i468.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[13], i468.startRotationZ)
  i468.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i469[14], i468.startColor)
  i468.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[15], i468.gravityModifier)
  i468.simulationSpace = i469[16]
  request.r(i469[17], i469[18], 0, i468, 'customSimulationSpace')
  i468.simulationSpeed = i469[19]
  i468.useUnscaledTime = !!i469[20]
  i468.scalingMode = i469[21]
  i468.playOnAwake = !!i469[22]
  i468.maxParticles = i469[23]
  i468.emitterVelocityMode = i469[24]
  i468.stopAction = i469[25]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i470 = root || new pc.MinMaxCurve()
  var i471 = data
  i470.mode = i471[0]
  i470.curveMin = new pc.AnimationCurve( { keys_flow: i471[1] } )
  i470.curveMax = new pc.AnimationCurve( { keys_flow: i471[2] } )
  i470.curveMultiplier = i471[3]
  i470.constantMin = i471[4]
  i470.constantMax = i471[5]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i472 = root || new pc.MinMaxGradient()
  var i473 = data
  i472.mode = i473[0]
  i472.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i473[1], i472.gradientMin)
  i472.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i473[2], i472.gradientMax)
  i472.colorMin = new pc.Color(i473[3], i473[4], i473[5], i473[6])
  i472.colorMax = new pc.Color(i473[7], i473[8], i473[9], i473[10])
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i475 = data
  i474.mode = i475[0]
  var i477 = i475[1]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i477[i + 0]) );
  }
  i474.colorKeys = i476
  var i479 = i475[2]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i479[i + 0]) );
  }
  i474.alphaKeys = i478
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i480 = root || new pc.ParticleSystemColorBySpeed()
  var i481 = data
  i480.enabled = !!i481[0]
  i480.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i481[1], i480.color)
  i480.range = new pc.Vec2( i481[2], i481[3] )
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i485 = data
  i484.color = new pc.Color(i485[0], i485[1], i485[2], i485[3])
  i484.time = i485[4]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i489 = data
  i488.alpha = i489[0]
  i488.time = i489[1]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i490 = root || new pc.ParticleSystemColorOverLifetime()
  var i491 = data
  i490.enabled = !!i491[0]
  i490.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i491[1], i490.color)
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i492 = root || new pc.ParticleSystemEmitter()
  var i493 = data
  i492.enabled = !!i493[0]
  i492.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[1], i492.rateOverTime)
  i492.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[2], i492.rateOverDistance)
  var i495 = i493[3]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i495[i + 0]) );
  }
  i492.bursts = i494
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i498 = root || new pc.ParticleSystemBurst()
  var i499 = data
  i498.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[0], i498.count)
  i498.cycleCount = i499[1]
  i498.minCount = i499[2]
  i498.maxCount = i499[3]
  i498.repeatInterval = i499[4]
  i498.time = i499[5]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i500 = root || new pc.ParticleSystemRotationBySpeed()
  var i501 = data
  i500.enabled = !!i501[0]
  i500.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[1], i500.x)
  i500.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[2], i500.y)
  i500.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[3], i500.z)
  i500.separateAxes = !!i501[4]
  i500.range = new pc.Vec2( i501[5], i501[6] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i502 = root || new pc.ParticleSystemRotationOverLifetime()
  var i503 = data
  i502.enabled = !!i503[0]
  i502.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[1], i502.x)
  i502.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[2], i502.y)
  i502.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[3], i502.z)
  i502.separateAxes = !!i503[4]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i504 = root || new pc.ParticleSystemShape()
  var i505 = data
  i504.enabled = !!i505[0]
  i504.shapeType = i505[1]
  i504.randomDirectionAmount = i505[2]
  i504.sphericalDirectionAmount = i505[3]
  i504.randomPositionAmount = i505[4]
  i504.alignToDirection = !!i505[5]
  i504.radius = i505[6]
  i504.radiusMode = i505[7]
  i504.radiusSpread = i505[8]
  i504.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[9], i504.radiusSpeed)
  i504.radiusThickness = i505[10]
  i504.angle = i505[11]
  i504.length = i505[12]
  i504.boxThickness = new pc.Vec3( i505[13], i505[14], i505[15] )
  i504.meshShapeType = i505[16]
  request.r(i505[17], i505[18], 0, i504, 'mesh')
  request.r(i505[19], i505[20], 0, i504, 'meshRenderer')
  request.r(i505[21], i505[22], 0, i504, 'skinnedMeshRenderer')
  i504.useMeshMaterialIndex = !!i505[23]
  i504.meshMaterialIndex = i505[24]
  i504.useMeshColors = !!i505[25]
  i504.normalOffset = i505[26]
  i504.arc = i505[27]
  i504.arcMode = i505[28]
  i504.arcSpread = i505[29]
  i504.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[30], i504.arcSpeed)
  i504.donutRadius = i505[31]
  i504.position = new pc.Vec3( i505[32], i505[33], i505[34] )
  i504.rotation = new pc.Vec3( i505[35], i505[36], i505[37] )
  i504.scale = new pc.Vec3( i505[38], i505[39], i505[40] )
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i506 = root || new pc.ParticleSystemSizeBySpeed()
  var i507 = data
  i506.enabled = !!i507[0]
  i506.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[1], i506.x)
  i506.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[2], i506.y)
  i506.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[3], i506.z)
  i506.separateAxes = !!i507[4]
  i506.range = new pc.Vec2( i507[5], i507[6] )
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i508 = root || new pc.ParticleSystemSizeOverLifetime()
  var i509 = data
  i508.enabled = !!i509[0]
  i508.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[1], i508.x)
  i508.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[2], i508.y)
  i508.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[3], i508.z)
  i508.separateAxes = !!i509[4]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i510 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i511 = data
  i510.enabled = !!i511[0]
  i510.mode = i511[1]
  i510.animation = i511[2]
  i510.numTilesX = i511[3]
  i510.numTilesY = i511[4]
  i510.useRandomRow = !!i511[5]
  i510.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[6], i510.frameOverTime)
  i510.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i511[7], i510.startFrame)
  i510.cycleCount = i511[8]
  i510.rowIndex = i511[9]
  i510.flipU = i511[10]
  i510.flipV = i511[11]
  i510.spriteCount = i511[12]
  var i513 = i511[13]
  var i512 = []
  for(var i = 0; i < i513.length; i += 2) {
  request.r(i513[i + 0], i513[i + 1], 2, i512, '')
  }
  i510.sprites = i512
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i516 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i517 = data
  i516.enabled = !!i517[0]
  i516.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[1], i516.x)
  i516.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[2], i516.y)
  i516.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[3], i516.z)
  i516.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[4], i516.radial)
  i516.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[5], i516.speedModifier)
  i516.space = i517[6]
  i516.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[7], i516.orbitalX)
  i516.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[8], i516.orbitalY)
  i516.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[9], i516.orbitalZ)
  i516.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[10], i516.orbitalOffsetX)
  i516.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[11], i516.orbitalOffsetY)
  i516.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[12], i516.orbitalOffsetZ)
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i518 = root || new pc.ParticleSystemNoise()
  var i519 = data
  i518.enabled = !!i519[0]
  i518.separateAxes = !!i519[1]
  i518.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[2], i518.strengthX)
  i518.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[3], i518.strengthY)
  i518.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[4], i518.strengthZ)
  i518.frequency = i519[5]
  i518.damping = !!i519[6]
  i518.octaveCount = i519[7]
  i518.octaveMultiplier = i519[8]
  i518.octaveScale = i519[9]
  i518.quality = i519[10]
  i518.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[11], i518.scrollSpeed)
  i518.scrollSpeedMultiplier = i519[12]
  i518.remapEnabled = !!i519[13]
  i518.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[14], i518.remapX)
  i518.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[15], i518.remapY)
  i518.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[16], i518.remapZ)
  i518.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[17], i518.positionAmount)
  i518.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[18], i518.rotationAmount)
  i518.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[19], i518.sizeAmount)
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemInheritVelocity()
  var i521 = data
  i520.enabled = !!i521[0]
  i520.mode = i521[1]
  i520.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[2], i520.curve)
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemForceOverLifetime()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[1], i522.x)
  i522.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[2], i522.y)
  i522.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[3], i522.z)
  i522.space = i523[4]
  i522.randomized = !!i523[5]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i525 = data
  i524.enabled = !!i525[0]
  i524.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[1], i524.limit)
  i524.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[2], i524.limitX)
  i524.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[3], i524.limitY)
  i524.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[4], i524.limitZ)
  i524.dampen = i525[5]
  i524.separateAxes = !!i525[6]
  i524.space = i525[7]
  i524.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[8], i524.drag)
  i524.multiplyDragByParticleSize = !!i525[9]
  i524.multiplyDragByParticleVelocity = !!i525[10]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'mesh')
  i526.meshCount = i527[2]
  i526.activeVertexStreamsCount = i527[3]
  i526.alignment = i527[4]
  i526.renderMode = i527[5]
  i526.sortMode = i527[6]
  i526.lengthScale = i527[7]
  i526.velocityScale = i527[8]
  i526.cameraVelocityScale = i527[9]
  i526.normalDirection = i527[10]
  i526.sortingFudge = i527[11]
  i526.minParticleSize = i527[12]
  i526.maxParticleSize = i527[13]
  i526.pivot = new pc.Vec3( i527[14], i527[15], i527[16] )
  request.r(i527[17], i527[18], 0, i526, 'trailMaterial')
  i526.applyActiveColorSpace = !!i527[19]
  i526.enabled = !!i527[20]
  request.r(i527[21], i527[22], 0, i526, 'sharedMaterial')
  var i529 = i527[23]
  var i528 = []
  for(var i = 0; i < i529.length; i += 2) {
  request.r(i529[i + 0], i529[i + 1], 2, i528, '')
  }
  i526.sharedMaterials = i528
  i526.receiveShadows = !!i527[24]
  i526.shadowCastingMode = i527[25]
  i526.sortingLayerID = i527[26]
  i526.sortingOrder = i527[27]
  i526.lightmapIndex = i527[28]
  i526.lightmapSceneIndex = i527[29]
  i526.lightmapScaleOffset = new pc.Vec4( i527[30], i527[31], i527[32], i527[33] )
  i526.lightProbeUsage = i527[34]
  i526.reflectionProbeUsage = i527[35]
  return i526
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i530 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i531 = data
  i530.targetIsSelf = !!i531[0]
  request.r(i531[1], i531[2], 0, i530, 'targetGO')
  i530.tweenTargetIsTargetGO = !!i531[3]
  i530.delay = i531[4]
  i530.duration = i531[5]
  i530.easeType = i531[6]
  i530.easeCurve = new pc.AnimationCurve( { keys_flow: i531[7] } )
  i530.loopType = i531[8]
  i530.loops = i531[9]
  i530.id = i531[10]
  i530.isRelative = !!i531[11]
  i530.isFrom = !!i531[12]
  i530.isIndependentUpdate = !!i531[13]
  i530.autoKill = !!i531[14]
  i530.autoGenerate = !!i531[15]
  i530.isActive = !!i531[16]
  i530.isValid = !!i531[17]
  request.r(i531[18], i531[19], 0, i530, 'target')
  i530.animationType = i531[20]
  i530.targetType = i531[21]
  i530.forcedTargetType = i531[22]
  i530.autoPlay = !!i531[23]
  i530.useTargetAsV3 = !!i531[24]
  i530.endValueFloat = i531[25]
  i530.endValueV3 = new pc.Vec3( i531[26], i531[27], i531[28] )
  i530.endValueV2 = new pc.Vec2( i531[29], i531[30] )
  i530.endValueColor = new pc.Color(i531[31], i531[32], i531[33], i531[34])
  i530.endValueString = i531[35]
  i530.endValueRect = UnityEngine.Rect.MinMaxRect(i531[36], i531[37], i531[38], i531[39])
  request.r(i531[40], i531[41], 0, i530, 'endValueTransform')
  i530.optionalBool0 = !!i531[42]
  i530.optionalBool1 = !!i531[43]
  i530.optionalFloat0 = i531[44]
  i530.optionalInt0 = i531[45]
  i530.optionalRotationMode = i531[46]
  i530.optionalScrambleMode = i531[47]
  i530.optionalShakeRandomnessMode = i531[48]
  i530.optionalString = i531[49]
  i530.updateType = i531[50]
  i530.isSpeedBased = !!i531[51]
  i530.hasOnStart = !!i531[52]
  i530.hasOnPlay = !!i531[53]
  i530.hasOnUpdate = !!i531[54]
  i530.hasOnStepComplete = !!i531[55]
  i530.hasOnComplete = !!i531[56]
  i530.hasOnTweenCreated = !!i531[57]
  i530.hasOnRewind = !!i531[58]
  i530.onStart = request.d('UnityEngine.Events.UnityEvent', i531[59], i530.onStart)
  i530.onPlay = request.d('UnityEngine.Events.UnityEvent', i531[60], i530.onPlay)
  i530.onUpdate = request.d('UnityEngine.Events.UnityEvent', i531[61], i530.onUpdate)
  i530.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i531[62], i530.onStepComplete)
  i530.onComplete = request.d('UnityEngine.Events.UnityEvent', i531[63], i530.onComplete)
  i530.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i531[64], i530.onTweenCreated)
  i530.onRewind = request.d('UnityEngine.Events.UnityEvent', i531[65], i530.onRewind)
  return i530
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i533 = data
  i532.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i533[0], i532.m_PersistentCalls)
  return i532
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i535 = data
  var i537 = i535[0]
  var i536 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i537.length; i += 1) {
    i536.add(request.d('UnityEngine.Events.PersistentCall', i537[i + 0]));
  }
  i534.m_Calls = i536
  return i534
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'm_Target')
  i540.m_TargetAssemblyTypeName = i541[2]
  i540.m_MethodName = i541[3]
  i540.m_Mode = i541[4]
  i540.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i541[5], i540.m_Arguments)
  i540.m_CallState = i541[6]
  return i540
}

Deserializers["ResetPointEffect"] = function (request, data, root) {
  var i542 = root || request.c( 'ResetPointEffect' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'render')
  request.r(i543[2], i543[3], 0, i542, 'trans')
  request.r(i543[4], i543[5], 0, i542, 'color')
  request.r(i543[6], i543[7], 0, i542, 'move')
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i545 = data
  i544.sortingLayerIndex = i545[0]
  i544.sortingOrder = i545[1]
  i544.sortingLayerName = i545[2]
  i544.enabled = !!i545[3]
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
  i546.speed = i547[12]
  request.r(i547[13], i547[14], 0, i546, 'body')
  request.r(i547[15], i547[16], 0, i546, 'leftHand')
  request.r(i547[17], i547[18], 0, i546, 'rightHand')
  request.r(i547[19], i547[20], 0, i546, 'leftLeg')
  request.r(i547[21], i547[22], 0, i546, 'rightLeg')
  request.r(i547[23], i547[24], 0, i546, 'jump')
  request.r(i547[25], i547[26], 0, i546, 'checkGround')
  request.r(i547[27], i547[28], 0, i546, 'pointPrefab')
  return i546
}

Deserializers["Piece"] = function (request, data, root) {
  var i552 = root || request.c( 'Piece' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'Joint')
  request.r(i553[2], i553[3], 0, i552, 'Rb')
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i555 = data
  i554.bodyType = i555[0]
  request.r(i555[1], i555[2], 0, i554, 'material')
  i554.simulated = !!i555[3]
  i554.useAutoMass = !!i555[4]
  i554.mass = i555[5]
  i554.drag = i555[6]
  i554.angularDrag = i555[7]
  i554.gravityScale = i555[8]
  i554.collisionDetectionMode = i555[9]
  i554.sleepMode = i555[10]
  i554.constraints = i555[11]
  return i554
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i559 = data
  i558.useLimits = !!i559[0]
  i558.limits = request.d('UnityEngine.JointAngleLimits2D', i559[1], i558.limits)
  i558.useMotor = !!i559[2]
  i558.motor = request.d('UnityEngine.JointMotor2D', i559[3], i558.motor)
  i558.anchor = new pc.Vec2( i559[4], i559[5] )
  i558.connectedAnchor = new pc.Vec2( i559[6], i559[7] )
  i558.autoConfigureConnectedAnchor = !!i559[8]
  request.r(i559[9], i559[10], 0, i558, 'connectedBody')
  i558.breakForce = i559[11]
  i558.breakTorque = i559[12]
  i558.enableCollision = !!i559[13]
  i558.enabled = !!i559[14]
  return i558
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i560 = root || request.c( 'BalanceController' )
  var i561 = data
  i560.targetRotation = i561[0]
  i560.force = i561[1]
  return i560
}

Deserializers["CheckGround"] = function (request, data, root) {
  var i562 = root || request.c( 'CheckGround' )
  var i563 = data
  i562.onGround = !!i563[0]
  i562.layerMask = UnityEngine.LayerMask.FromIntegerValue( i563[1] )
  i562.distance = i563[2]
  return i562
}

Deserializers["JumpController"] = function (request, data, root) {
  var i564 = root || request.c( 'JumpController' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'body')
  i564.jumpForce = new pc.Vec2( i565[2], i565[3] )
  i564.timeCD = i565[4]
  i564.onCD = !!i565[5]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i567 = data
  i566.name = i567[0]
  i566.index = i567[1]
  i566.startup = !!i567[2]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i569 = data
  i568.aspect = i569[0]
  i568.orthographic = !!i569[1]
  i568.orthographicSize = i569[2]
  i568.backgroundColor = new pc.Color(i569[3], i569[4], i569[5], i569[6])
  i568.nearClipPlane = i569[7]
  i568.farClipPlane = i569[8]
  i568.fieldOfView = i569[9]
  i568.depth = i569[10]
  i568.clearFlags = i569[11]
  i568.cullingMask = i569[12]
  i568.rect = i569[13]
  request.r(i569[14], i569[15], 0, i568, 'targetTexture')
  i568.usePhysicalProperties = !!i569[16]
  i568.focalLength = i569[17]
  i568.sensorSize = new pc.Vec2( i569[18], i569[19] )
  i568.lensShift = new pc.Vec2( i569[20], i569[21] )
  i568.gateFit = i569[22]
  i568.commandBufferCount = i569[23]
  i568.cameraType = i569[24]
  i568.enabled = !!i569[25]
  return i568
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'm_FirstSelected')
  i570.m_sendNavigationEvents = !!i571[2]
  i570.m_DragThreshold = i571[3]
  return i570
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i573 = data
  i572.m_HorizontalAxis = i573[0]
  i572.m_VerticalAxis = i573[1]
  i572.m_SubmitButton = i573[2]
  i572.m_CancelButton = i573[3]
  i572.m_InputActionsPerSecond = i573[4]
  i572.m_RepeatDelay = i573[5]
  i572.m_ForceModuleActive = !!i573[6]
  i572.m_SendPointerHoverToParent = !!i573[7]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i575 = data
  i574.pivot = new pc.Vec2( i575[0], i575[1] )
  i574.anchorMin = new pc.Vec2( i575[2], i575[3] )
  i574.anchorMax = new pc.Vec2( i575[4], i575[5] )
  i574.sizeDelta = new pc.Vec2( i575[6], i575[7] )
  i574.anchoredPosition3D = new pc.Vec3( i575[8], i575[9], i575[10] )
  i574.rotation = new pc.Quat(i575[11], i575[12], i575[13], i575[14])
  i574.scale = new pc.Vec3( i575[15], i575[16], i575[17] )
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i577 = data
  i576.planeDistance = i577[0]
  i576.referencePixelsPerUnit = i577[1]
  i576.isFallbackOverlay = !!i577[2]
  i576.renderMode = i577[3]
  i576.renderOrder = i577[4]
  i576.sortingLayerName = i577[5]
  i576.sortingOrder = i577[6]
  i576.scaleFactor = i577[7]
  request.r(i577[8], i577[9], 0, i576, 'worldCamera')
  i576.overrideSorting = !!i577[10]
  i576.pixelPerfect = !!i577[11]
  i576.targetDisplay = i577[12]
  i576.overridePixelPerfect = !!i577[13]
  i576.enabled = !!i577[14]
  return i576
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i579 = data
  i578.m_UiScaleMode = i579[0]
  i578.m_ReferencePixelsPerUnit = i579[1]
  i578.m_ScaleFactor = i579[2]
  i578.m_ReferenceResolution = new pc.Vec2( i579[3], i579[4] )
  i578.m_ScreenMatchMode = i579[5]
  i578.m_MatchWidthOrHeight = i579[6]
  i578.m_PhysicalUnit = i579[7]
  i578.m_FallbackScreenDPI = i579[8]
  i578.m_DefaultSpriteDPI = i579[9]
  i578.m_DynamicPixelsPerUnit = i579[10]
  i578.m_PresetInfoIsWorld = !!i579[11]
  return i578
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i581 = data
  i580.m_IgnoreReversedGraphics = !!i581[0]
  i580.m_BlockingObjects = i581[1]
  i580.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i581[2] )
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i583 = data
  i582.cullTransparentMesh = !!i583[0]
  return i582
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'm_Texture')
  i584.m_UVRect = UnityEngine.Rect.MinMaxRect(i585[2], i585[3], i585[4], i585[5])
  request.r(i585[6], i585[7], 0, i584, 'm_Material')
  i584.m_Maskable = !!i585[8]
  i584.m_Color = new pc.Color(i585[9], i585[10], i585[11], i585[12])
  i584.m_RaycastTarget = !!i585[13]
  i584.m_RaycastPadding = new pc.Vec4( i585[14], i585[15], i585[16], i585[17] )
  return i584
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i587 = data
  i586.m_AspectMode = i587[0]
  i586.m_AspectRatio = i587[1]
  return i586
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.Text' )
  var i589 = data
  i588.m_FontData = request.d('UnityEngine.UI.FontData', i589[0], i588.m_FontData)
  i588.m_Text = i589[1]
  request.r(i589[2], i589[3], 0, i588, 'm_Material')
  i588.m_Maskable = !!i589[4]
  i588.m_Color = new pc.Color(i589[5], i589[6], i589[7], i589[8])
  i588.m_RaycastTarget = !!i589[9]
  i588.m_RaycastPadding = new pc.Vec4( i589[10], i589[11], i589[12], i589[13] )
  return i588
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.FontData' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'm_Font')
  i590.m_FontSize = i591[2]
  i590.m_FontStyle = i591[3]
  i590.m_BestFit = !!i591[4]
  i590.m_MinSize = i591[5]
  i590.m_MaxSize = i591[6]
  i590.m_Alignment = i591[7]
  i590.m_AlignByGeometry = !!i591[8]
  i590.m_RichText = !!i591[9]
  i590.m_HorizontalOverflow = i591[10]
  i590.m_VerticalOverflow = i591[11]
  i590.m_LineSpacing = i591[12]
  return i590
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Image' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'm_Sprite')
  i592.m_Type = i593[2]
  i592.m_PreserveAspect = !!i593[3]
  i592.m_FillCenter = !!i593[4]
  i592.m_FillMethod = i593[5]
  i592.m_FillAmount = i593[6]
  i592.m_FillClockwise = !!i593[7]
  i592.m_FillOrigin = i593[8]
  i592.m_UseSpriteMesh = !!i593[9]
  i592.m_PixelsPerUnitMultiplier = i593[10]
  request.r(i593[11], i593[12], 0, i592, 'm_Material')
  i592.m_Maskable = !!i593[13]
  i592.m_Color = new pc.Color(i593[14], i593[15], i593[16], i593[17])
  i592.m_RaycastTarget = !!i593[18]
  i592.m_RaycastPadding = new pc.Vec4( i593[19], i593[20], i593[21], i593[22] )
  return i592
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Button' )
  var i595 = data
  i594.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i595[0], i594.m_OnClick)
  i594.m_Navigation = request.d('UnityEngine.UI.Navigation', i595[1], i594.m_Navigation)
  i594.m_Transition = i595[2]
  i594.m_Colors = request.d('UnityEngine.UI.ColorBlock', i595[3], i594.m_Colors)
  i594.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i595[4], i594.m_SpriteState)
  i594.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i595[5], i594.m_AnimationTriggers)
  i594.m_Interactable = !!i595[6]
  request.r(i595[7], i595[8], 0, i594, 'm_TargetGraphic')
  return i594
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i597 = data
  i596.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i597[0], i596.m_PersistentCalls)
  return i596
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i599 = data
  i598.m_Mode = i599[0]
  i598.m_WrapAround = !!i599[1]
  request.r(i599[2], i599[3], 0, i598, 'm_SelectOnUp')
  request.r(i599[4], i599[5], 0, i598, 'm_SelectOnDown')
  request.r(i599[6], i599[7], 0, i598, 'm_SelectOnLeft')
  request.r(i599[8], i599[9], 0, i598, 'm_SelectOnRight')
  return i598
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i601 = data
  i600.m_NormalColor = new pc.Color(i601[0], i601[1], i601[2], i601[3])
  i600.m_HighlightedColor = new pc.Color(i601[4], i601[5], i601[6], i601[7])
  i600.m_PressedColor = new pc.Color(i601[8], i601[9], i601[10], i601[11])
  i600.m_SelectedColor = new pc.Color(i601[12], i601[13], i601[14], i601[15])
  i600.m_DisabledColor = new pc.Color(i601[16], i601[17], i601[18], i601[19])
  i600.m_ColorMultiplier = i601[20]
  i600.m_FadeDuration = i601[21]
  return i600
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'm_HighlightedSprite')
  request.r(i603[2], i603[3], 0, i602, 'm_PressedSprite')
  request.r(i603[4], i603[5], 0, i602, 'm_SelectedSprite')
  request.r(i603[6], i603[7], 0, i602, 'm_DisabledSprite')
  return i602
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i605 = data
  i604.m_NormalTrigger = i605[0]
  i604.m_HighlightedTrigger = i605[1]
  i604.m_PressedTrigger = i605[2]
  i604.m_SelectedTrigger = i605[3]
  i604.m_DisabledTrigger = i605[4]
  return i604
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i606 = root || request.c( 'PlayerController' )
  var i607 = data
  var i609 = i607[0]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i609.length; i += 1) {
    i608.add(request.d('Piece', i609[i + 0]));
  }
  i606.pieces = i608
  request.r(i607[1], i607[2], 0, i606, 'head')
  request.r(i607[3], i607[4], 0, i606, 'deadSFX')
  i606.maxForce = new pc.Vec2( i607[5], i607[6] )
  i606.minForce = new pc.Vec2( i607[7], i607[8] )
  request.r(i607[9], i607[10], 0, i606, 'optionTut')
  request.r(i607[11], i607[12], 0, i606, 'attackTut')
  request.r(i607[13], i607[14], 0, i606, 'fight')
  request.r(i607[15], i607[16], 0, i606, 'clickSound')
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i611 = data
  i610.autoConfigureTarget = !!i611[0]
  i610.target = new pc.Vec2( i611[1], i611[2] )
  i610.anchor = new pc.Vec2( i611[3], i611[4] )
  i610.maxForce = i611[5]
  i610.dampingRatio = i611[6]
  i610.frequency = i611[7]
  request.r(i611[8], i611[9], 0, i610, 'connectedBody')
  i610.breakForce = i611[10]
  i610.breakTorque = i611[11]
  i610.enableCollision = !!i611[12]
  i610.enabled = !!i611[13]
  return i610
}

Deserializers["ShootController"] = function (request, data, root) {
  var i612 = root || request.c( 'ShootController' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'currentMonster')
  request.r(i613[2], i613[3], 0, i612, 'left')
  request.r(i613[4], i613[5], 0, i612, 'right')
  i612.timeMotor = i613[6]
  i612.onCD = !!i613[7]
  i612.CD = i613[8]
  request.r(i613[9], i613[10], 0, i612, 'startPos')
  request.r(i613[11], i613[12], 0, i612, 'effect')
  request.r(i613[13], i613[14], 0, i612, 'attackSound')
  request.r(i613[15], i613[16], 0, i612, 'spawnPrefab')
  request.r(i613[17], i613[18], 0, i612, 'poolParent')
  return i612
}

Deserializers["GameController"] = function (request, data, root) {
  var i614 = root || request.c( 'GameController' )
  var i615 = data
  i614.OnStart = request.d('System.Action', i615[0], i614.OnStart)
  i614.OnClick = request.d('System.Action', i615[1], i614.OnClick)
  i614.OnGameOver = request.d('System.Action', i615[2], i614.OnGameOver)
  request.r(i615[3], i615[4], 0, i614, 'startScene')
  request.r(i615[5], i615[6], 0, i614, 'clickSound')
  request.r(i615[7], i615[8], 0, i614, 'startButton')
  request.r(i615[9], i615[10], 0, i614, 'tut')
  request.r(i615[11], i615[12], 0, i614, 'endScene')
  request.r(i615[13], i615[14], 0, i614, 'player')
  request.r(i615[15], i615[16], 0, i614, 'scoreText')
  i614.score = i615[17]
  return i614
}

Deserializers["System.Action"] = function (request, data, root) {
  var i616 = root || request.c( 'System.Action' )
  var i617 = data
  return i616
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i618 = root || request.c( 'LayoutController' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'main')
  return i618
}

Deserializers["SpawnMonster"] = function (request, data, root) {
  var i620 = root || request.c( 'SpawnMonster' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'world')
  request.r(i621[2], i621[3], 0, i620, 'spawnPos')
  var i623 = i621[4]
  var i622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 1, i622, '')
  }
  i620.monsterPrefabs = i622
  i620.maxtimeSpawn = i621[5]
  i620.mintimeSpawn = i621[6]
  return i620
}

Deserializers["LunaController"] = function (request, data, root) {
  var i626 = root || request.c( 'LunaController' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'BGTexture')
  i626.UseTime = !!i627[2]
  i626.TimePlay = i627[3]
  i626.UseCountPlay = !!i627[4]
  i626.MaxCountPlay = i627[5]
  i626.ScoreTextColor = new pc.Color(i627[6], i627[7], i627[8], i627[9])
  i626.MinTimeSpawn = i627[10]
  i626.MaxTimeSpawn = i627[11]
  request.r(i627[12], i627[13], 0, i626, 'BGImage')
  request.r(i627[14], i627[15], 0, i626, 'scoreText')
  var i629 = i627[16]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 1, i628, '')
  }
  i626.CTA = i628
  i626.count = i627[17]
  request.r(i627[18], i627[19], 0, i626, 'spawn')
  return i626
}

Deserializers["AudioController"] = function (request, data, root) {
  var i632 = root || request.c( 'AudioController' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'BGM')
  request.r(i633[2], i633[3], 0, i632, 'musicSource')
  request.r(i633[4], i633[5], 0, i632, 'pool')
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'clip')
  request.r(i635[2], i635[3], 0, i634, 'outputAudioMixerGroup')
  i634.playOnAwake = !!i635[4]
  i634.loop = !!i635[5]
  i634.time = i635[6]
  i634.volume = i635[7]
  i634.pitch = i635[8]
  i634.enabled = !!i635[9]
  return i634
}

Deserializers["VFXController"] = function (request, data, root) {
  var i636 = root || request.c( 'VFXController' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'poolParent')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i639 = data
  i638.ambientIntensity = i639[0]
  i638.reflectionIntensity = i639[1]
  i638.ambientMode = i639[2]
  i638.ambientLight = new pc.Color(i639[3], i639[4], i639[5], i639[6])
  i638.ambientSkyColor = new pc.Color(i639[7], i639[8], i639[9], i639[10])
  i638.ambientGroundColor = new pc.Color(i639[11], i639[12], i639[13], i639[14])
  i638.ambientEquatorColor = new pc.Color(i639[15], i639[16], i639[17], i639[18])
  i638.fogColor = new pc.Color(i639[19], i639[20], i639[21], i639[22])
  i638.fogEndDistance = i639[23]
  i638.fogStartDistance = i639[24]
  i638.fogDensity = i639[25]
  i638.fog = !!i639[26]
  request.r(i639[27], i639[28], 0, i638, 'skybox')
  i638.fogMode = i639[29]
  var i641 = i639[30]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i641[i + 0]) );
  }
  i638.lightmaps = i640
  i638.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i639[31], i638.lightProbes)
  i638.lightmapsMode = i639[32]
  i638.mixedBakeMode = i639[33]
  i638.environmentLightingMode = i639[34]
  i638.ambientProbe = new pc.SphericalHarmonicsL2(i639[35])
  request.r(i639[36], i639[37], 0, i638, 'customReflection')
  request.r(i639[38], i639[39], 0, i638, 'defaultReflection')
  i638.defaultReflectionMode = i639[40]
  i638.defaultReflectionResolution = i639[41]
  i638.sunLightObjectId = i639[42]
  i638.pixelLightCount = i639[43]
  i638.defaultReflectionHDR = !!i639[44]
  i638.hasLightDataAsset = !!i639[45]
  i638.hasManualGenerate = !!i639[46]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'lightmapColor')
  request.r(i645[2], i645[3], 0, i644, 'lightmapDirection')
  request.r(i645[4], i645[5], 0, i644, 'shadowMask')
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i646 = root || new UnityEngine.LightProbes()
  var i647 = data
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i655 = data
  var i657 = i655[0]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i657.length; i += 1) {
    i656.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i657[i + 0]));
  }
  i654.ShaderCompilationErrors = i656
  i654.name = i655[1]
  i654.guid = i655[2]
  var i659 = i655[3]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( i659[i + 0] );
  }
  i654.shaderDefinedKeywords = i658
  var i661 = i655[4]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i661[i + 0]) );
  }
  i654.passes = i660
  var i663 = i655[5]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i663[i + 0]) );
  }
  i654.usePasses = i662
  var i665 = i655[6]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i665[i + 0]) );
  }
  i654.defaultParameterValues = i664
  request.r(i655[7], i655[8], 0, i654, 'unityFallbackShader')
  i654.readDepth = !!i655[9]
  i654.hasDepthOnlyPass = !!i655[10]
  i654.isCreatedByShaderGraph = !!i655[11]
  i654.disableBatching = !!i655[12]
  i654.compiled = !!i655[13]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i669 = data
  i668.shaderName = i669[0]
  i668.errorMessage = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i674 = root || new pc.UnityShaderPass()
  var i675 = data
  i674.id = i675[0]
  i674.subShaderIndex = i675[1]
  i674.name = i675[2]
  i674.passType = i675[3]
  i674.grabPassTextureName = i675[4]
  i674.usePass = !!i675[5]
  i674.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[6], i674.zTest)
  i674.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[7], i674.zWrite)
  i674.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[8], i674.culling)
  i674.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i675[9], i674.blending)
  i674.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i675[10], i674.alphaBlending)
  i674.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[11], i674.colorWriteMask)
  i674.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[12], i674.offsetUnits)
  i674.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[13], i674.offsetFactor)
  i674.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[14], i674.stencilRef)
  i674.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[15], i674.stencilReadMask)
  i674.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i675[16], i674.stencilWriteMask)
  i674.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i675[17], i674.stencilOp)
  i674.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i675[18], i674.stencilOpFront)
  i674.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i675[19], i674.stencilOpBack)
  var i677 = i675[20]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i677[i + 0]) );
  }
  i674.tags = i676
  var i679 = i675[21]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( i679[i + 0] );
  }
  i674.passDefinedKeywords = i678
  var i681 = i675[22]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i681[i + 0]) );
  }
  i674.passDefinedKeywordGroups = i680
  var i683 = i675[23]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i683[i + 0]) );
  }
  i674.variants = i682
  var i685 = i675[24]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i685[i + 0]) );
  }
  i674.excludedVariants = i684
  i674.hasDepthReader = !!i675[25]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i687 = data
  i686.val = i687[0]
  i686.name = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i689 = data
  i688.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[0], i688.src)
  i688.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[1], i688.dst)
  i688.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[2], i688.op)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i691 = data
  i690.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[0], i690.pass)
  i690.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[1], i690.fail)
  i690.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[2], i690.zFail)
  i690.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[3], i690.comp)
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i695 = data
  i694.name = i695[0]
  i694.value = i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i699 = data
  var i701 = i699[0]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( i701[i + 0] );
  }
  i698.keywords = i700
  i698.hasDiscard = !!i699[1]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i705 = data
  i704.passId = i705[0]
  i704.subShaderIndex = i705[1]
  var i707 = i705[2]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( i707[i + 0] );
  }
  i704.keywords = i706
  i704.vertexProgram = i705[3]
  i704.fragmentProgram = i705[4]
  i704.exportedForWebGl2 = !!i705[5]
  i704.readDepth = !!i705[6]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'shader')
  i710.pass = i711[2]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i715 = data
  i714.name = i715[0]
  i714.type = i715[1]
  i714.value = new pc.Vec4( i715[2], i715[3], i715[4], i715[5] )
  i714.textureValue = i715[6]
  i714.shaderPropertyFlag = i715[7]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i717 = data
  i716.name = i717[0]
  request.r(i717[1], i717[2], 0, i716, 'texture')
  i716.aabb = i717[3]
  i716.vertices = i717[4]
  i716.triangles = i717[5]
  i716.textureRect = UnityEngine.Rect.MinMaxRect(i717[6], i717[7], i717[8], i717[9])
  i716.packedRect = UnityEngine.Rect.MinMaxRect(i717[10], i717[11], i717[12], i717[13])
  i716.border = new pc.Vec4( i717[14], i717[15], i717[16], i717[17] )
  i716.transparency = i717[18]
  i716.bounds = i717[19]
  i716.pixelsPerUnit = i717[20]
  i716.textureWidth = i717[21]
  i716.textureHeight = i717[22]
  i716.nativeSize = new pc.Vec2( i717[23], i717[24] )
  i716.pivot = new pc.Vec2( i717[25], i717[26] )
  i716.textureRectOffset = new pc.Vec2( i717[27], i717[28] )
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i719 = data
  i718.name = i719[0]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i721 = data
  i720.name = i721[0]
  i720.ascent = i721[1]
  i720.originalLineHeight = i721[2]
  i720.fontSize = i721[3]
  var i723 = i721[4]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i723[i + 0]) );
  }
  i720.characterInfo = i722
  request.r(i721[5], i721[6], 0, i720, 'texture')
  i720.originalFontSize = i721[7]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i727 = data
  i726.index = i727[0]
  i726.advance = i727[1]
  i726.bearing = i727[2]
  i726.glyphWidth = i727[3]
  i726.glyphHeight = i727[4]
  i726.minX = i727[5]
  i726.maxX = i727[6]
  i726.minY = i727[7]
  i726.maxY = i727[8]
  i726.uvBottomLeftX = i727[9]
  i726.uvBottomLeftY = i727[10]
  i726.uvBottomRightX = i727[11]
  i726.uvBottomRightY = i727[12]
  i726.uvTopLeftX = i727[13]
  i726.uvTopLeftY = i727[14]
  i726.uvTopRightX = i727[15]
  i726.uvTopRightY = i727[16]
  return i726
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i728 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i729 = data
  i728.useSafeMode = !!i729[0]
  i728.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i729[1], i728.safeModeOptions)
  i728.timeScale = i729[2]
  i728.unscaledTimeScale = i729[3]
  i728.useSmoothDeltaTime = !!i729[4]
  i728.maxSmoothUnscaledTime = i729[5]
  i728.rewindCallbackMode = i729[6]
  i728.showUnityEditorReport = !!i729[7]
  i728.logBehaviour = i729[8]
  i728.drawGizmos = !!i729[9]
  i728.defaultRecyclable = !!i729[10]
  i728.defaultAutoPlay = i729[11]
  i728.defaultUpdateType = i729[12]
  i728.defaultTimeScaleIndependent = !!i729[13]
  i728.defaultEaseType = i729[14]
  i728.defaultEaseOvershootOrAmplitude = i729[15]
  i728.defaultEasePeriod = i729[16]
  i728.defaultAutoKill = !!i729[17]
  i728.defaultLoopType = i729[18]
  i728.debugMode = !!i729[19]
  i728.debugStoreTargetId = !!i729[20]
  i728.showPreviewPanel = !!i729[21]
  i728.storeSettingsLocation = i729[22]
  i728.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i729[23], i728.modules)
  i728.createASMDEF = !!i729[24]
  i728.showPlayingTweens = !!i729[25]
  i728.showPausedTweens = !!i729[26]
  return i728
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i730 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i731 = data
  i730.logBehaviour = i731[0]
  i730.nestedTweenFailureBehaviour = i731[1]
  return i730
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i732 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i733 = data
  i732.showPanel = !!i733[0]
  i732.audioEnabled = !!i733[1]
  i732.physicsEnabled = !!i733[2]
  i732.physics2DEnabled = !!i733[3]
  i732.spriteEnabled = !!i733[4]
  i732.uiEnabled = !!i733[5]
  i732.textMeshProEnabled = !!i733[6]
  i732.tk2DEnabled = !!i733[7]
  i732.deAudioEnabled = !!i733[8]
  i732.deUnityExtendedEnabled = !!i733[9]
  i732.epoOutlineEnabled = !!i733[10]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i735 = data
  var i737 = i735[0]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i737[i + 0]) );
  }
  i734.files = i736
  i734.componentToPrefabIds = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i741 = data
  i740.path = i741[0]
  request.r(i741[1], i741[2], 0, i740, 'unityObject')
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i743 = data
  var i745 = i743[0]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i745[i + 0]) );
  }
  i742.scriptsExecutionOrder = i744
  var i747 = i743[1]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i747[i + 0]) );
  }
  i742.sortingLayers = i746
  var i749 = i743[2]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i749[i + 0]) );
  }
  i742.cullingLayers = i748
  i742.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i743[3], i742.timeSettings)
  i742.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i743[4], i742.physicsSettings)
  i742.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i743[5], i742.physics2DSettings)
  i742.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i743[6], i742.qualitySettings)
  i742.enableRealtimeShadows = !!i743[7]
  i742.enableAutoInstancing = !!i743[8]
  i742.enableStaticBatching = !!i743[9]
  i742.enableDynamicBatching = !!i743[10]
  i742.usePreservativeDynamicBatching = !!i743[11]
  i742.lightmapEncodingQuality = i743[12]
  i742.desiredColorSpace = i743[13]
  var i751 = i743[14]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i742.allTags = i750
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i755 = data
  i754.name = i755[0]
  i754.value = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i759 = data
  i758.id = i759[0]
  i758.name = i759[1]
  i758.value = i759[2]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i763 = data
  i762.id = i763[0]
  i762.name = i763[1]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i765 = data
  i764.fixedDeltaTime = i765[0]
  i764.maximumDeltaTime = i765[1]
  i764.timeScale = i765[2]
  i764.maximumParticleTimestep = i765[3]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i767 = data
  i766.gravity = new pc.Vec3( i767[0], i767[1], i767[2] )
  i766.defaultSolverIterations = i767[3]
  i766.bounceThreshold = i767[4]
  i766.autoSyncTransforms = !!i767[5]
  i766.autoSimulation = !!i767[6]
  var i769 = i767[7]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i769[i + 0]) );
  }
  i766.collisionMatrix = i768
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i773 = data
  i772.enabled = !!i773[0]
  i772.layerId = i773[1]
  i772.otherLayerId = i773[2]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'material')
  i774.gravity = new pc.Vec2( i775[2], i775[3] )
  i774.positionIterations = i775[4]
  i774.velocityIterations = i775[5]
  i774.velocityThreshold = i775[6]
  i774.maxLinearCorrection = i775[7]
  i774.maxAngularCorrection = i775[8]
  i774.maxTranslationSpeed = i775[9]
  i774.maxRotationSpeed = i775[10]
  i774.baumgarteScale = i775[11]
  i774.baumgarteTOIScale = i775[12]
  i774.timeToSleep = i775[13]
  i774.linearSleepTolerance = i775[14]
  i774.angularSleepTolerance = i775[15]
  i774.defaultContactOffset = i775[16]
  i774.autoSimulation = !!i775[17]
  i774.queriesHitTriggers = !!i775[18]
  i774.queriesStartInColliders = !!i775[19]
  i774.callbacksOnDisable = !!i775[20]
  i774.reuseCollisionCallbacks = !!i775[21]
  i774.autoSyncTransforms = !!i775[22]
  var i777 = i775[23]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i777[i + 0]) );
  }
  i774.collisionMatrix = i776
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i781 = data
  i780.enabled = !!i781[0]
  i780.layerId = i781[1]
  i780.otherLayerId = i781[2]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i783 = data
  var i785 = i783[0]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i785[i + 0]) );
  }
  i782.qualityLevels = i784
  var i787 = i783[1]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( i787[i + 0] );
  }
  i782.names = i786
  i782.shadows = i783[2]
  i782.anisotropicFiltering = i783[3]
  i782.antiAliasing = i783[4]
  i782.lodBias = i783[5]
  i782.shadowCascades = i783[6]
  i782.shadowDistance = i783[7]
  i782.shadowmaskMode = i783[8]
  i782.shadowProjection = i783[9]
  i782.shadowResolution = i783[10]
  i782.softParticles = !!i783[11]
  i782.softVegetation = !!i783[12]
  i782.activeColorSpace = i783[13]
  i782.desiredColorSpace = i783[14]
  i782.masterTextureLimit = i783[15]
  i782.maxQueuedFrames = i783[16]
  i782.particleRaycastBudget = i783[17]
  i782.pixelLightCount = i783[18]
  i782.realtimeReflectionProbes = !!i783[19]
  i782.shadowCascade2Split = i783[20]
  i782.shadowCascade4Split = new pc.Vec3( i783[21], i783[22], i783[23] )
  i782.streamingMipmapsActive = !!i783[24]
  i782.vSyncCount = i783[25]
  i782.asyncUploadBufferSize = i783[26]
  i782.asyncUploadTimeSlice = i783[27]
  i782.billboardsFaceCameraPosition = !!i783[28]
  i782.shadowNearPlaneOffset = i783[29]
  i782.streamingMipmapsMemoryBudget = i783[30]
  i782.maximumLODLevel = i783[31]
  i782.streamingMipmapsAddAllCameras = !!i783[32]
  i782.streamingMipmapsMaxLevelReduction = i783[33]
  i782.streamingMipmapsRenderersPerFrame = i783[34]
  i782.resolutionScalingFixedDPIFactor = i783[35]
  i782.streamingMipmapsMaxFileIORequests = i783[36]
  i782.currentQualityLevel = i783[37]
  return i782
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_ObjectArgument')
  i790.m_ObjectArgumentAssemblyTypeName = i791[2]
  i790.m_IntArgument = i791[3]
  i790.m_FloatArgument = i791[4]
  i790.m_StringArgument = i791[5]
  i790.m_BoolArgument = !!i791[6]
  return i790
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[22],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[17],"68":[17],"69":[17],"70":[17],"71":[17],"72":[17],"16":[17],"73":[17],"74":[17],"40":[17],"75":[17],"76":[17],"77":[17],"78":[22],"79":[80],"81":[82],"83":[82],"28":[27],"84":[2],"85":[22],"86":[87],"88":[27],"89":[31,27],"90":[80],"91":[31,27],"92":[27],"93":[27],"94":[80,27],"95":[27,31],"96":[97],"98":[97],"99":[97],"100":[27],"101":[27],"30":[28],"37":[31,27],"34":[27],"29":[28],"102":[27],"103":[27],"104":[27],"105":[27],"106":[27],"107":[27],"108":[27],"109":[27],"110":[27],"32":[31,27],"111":[27],"112":[27],"113":[27],"114":[27],"35":[31,27],"115":[27],"116":[25],"117":[25],"26":[25],"118":[25],"119":[22],"120":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","DG.Tweening.DOTweenAnimation","ResetPointEffect","UnityEngine.Rendering.SortingGroup","MonsterController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","BalanceController","CheckGround","UnityEngine.BoxCollider2D","JumpController","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Image","UnityEngine.UI.Button","PlayerController","UnityEngine.TargetJoint2D","ShootController","GameController","LayoutController","SpawnMonster","LunaController","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "10/06/2026 06:08:45";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "PMP_V05_TrangHTT_TamNTM";

Deserializers.lunaAppID = "42757";

Deserializers.projectId = "ff24b2211bd970c4d920bad068d2912a";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1749";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4509";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V03";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "88f7dffb-fb5b-47d3-853d-6a8c2cfd13cc";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


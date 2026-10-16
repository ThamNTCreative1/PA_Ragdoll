var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointSpring' )
  var i409 = data
  i408.spring = i409[0]
  i408.damper = i409[1]
  i408.targetPosition = i409[2]
  return i408
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointMotor' )
  var i411 = data
  i410.m_TargetVelocity = i411[0]
  i410.m_Force = i411[1]
  i410.m_FreeSpin = i411[2]
  return i410
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointLimits' )
  var i413 = data
  i412.m_Min = i413[0]
  i412.m_Max = i413[1]
  i412.m_Bounciness = i413[2]
  i412.m_BounceMinVelocity = i413[3]
  i412.m_ContactDistance = i413[4]
  i412.minBounce = i413[5]
  i412.maxBounce = i413[6]
  return i412
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointDrive' )
  var i415 = data
  i414.m_PositionSpring = i415[0]
  i414.m_PositionDamper = i415[1]
  i414.m_MaximumForce = i415[2]
  i414.m_UseAcceleration = i415[3]
  return i414
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i417 = data
  i416.m_Spring = i417[0]
  i416.m_Damper = i417[1]
  return i416
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i419 = data
  i418.m_Limit = i419[0]
  i418.m_Bounciness = i419[1]
  i418.m_ContactDistance = i419[2]
  return i418
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i421 = data
  i420.m_ExtremumSlip = i421[0]
  i420.m_ExtremumValue = i421[1]
  i420.m_AsymptoteSlip = i421[2]
  i420.m_AsymptoteValue = i421[3]
  i420.m_Stiffness = i421[4]
  return i420
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i423 = data
  i422.m_LowerAngle = i423[0]
  i422.m_UpperAngle = i423[1]
  return i422
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i425 = data
  i424.m_MotorSpeed = i425[0]
  i424.m_MaximumMotorTorque = i425[1]
  return i424
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i427 = data
  i426.m_DampingRatio = i427[0]
  i426.m_Frequency = i427[1]
  i426.m_Angle = i427[2]
  return i426
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i429 = data
  i428.m_LowerTranslation = i429[0]
  i428.m_UpperTranslation = i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i430 = root || new pc.UnityMaterial()
  var i431 = data
  i430.name = i431[0]
  request.r(i431[1], i431[2], 0, i430, 'shader')
  i430.renderQueue = i431[3]
  i430.enableInstancing = !!i431[4]
  var i433 = i431[5]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i433[i + 0]) );
  }
  i430.floatParameters = i432
  var i435 = i431[6]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i435[i + 0]) );
  }
  i430.colorParameters = i434
  var i437 = i431[7]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i437[i + 0]) );
  }
  i430.vectorParameters = i436
  var i439 = i431[8]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i439[i + 0]) );
  }
  i430.textureParameters = i438
  var i441 = i431[9]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i441[i + 0]) );
  }
  i430.materialFlags = i440
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i445 = data
  i444.name = i445[0]
  i444.value = i445[1]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i449 = data
  i448.name = i449[0]
  i448.value = new pc.Color(i449[1], i449[2], i449[3], i449[4])
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i453 = data
  i452.name = i453[0]
  i452.value = new pc.Vec4( i453[1], i453[2], i453[3], i453[4] )
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i457 = data
  i456.name = i457[0]
  request.r(i457[1], i457[2], 0, i456, 'value')
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i461 = data
  i460.name = i461[0]
  i460.enabled = !!i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i463 = data
  i462.name = i463[0]
  i462.width = i463[1]
  i462.height = i463[2]
  i462.mipmapCount = i463[3]
  i462.anisoLevel = i463[4]
  i462.filterMode = i463[5]
  i462.hdr = !!i463[6]
  i462.format = i463[7]
  i462.wrapMode = i463[8]
  i462.alphaIsTransparency = !!i463[9]
  i462.alphaSource = i463[10]
  i462.graphicsFormat = i463[11]
  i462.sRGBTexture = !!i463[12]
  i462.desiredColorSpace = i463[13]
  i462.wrapU = i463[14]
  i462.wrapV = i463[15]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i465 = data
  i464.position = new pc.Vec3( i465[0], i465[1], i465[2] )
  i464.scale = new pc.Vec3( i465[3], i465[4], i465[5] )
  i464.rotation = new pc.Quat(i465[6], i465[7], i465[8], i465[9])
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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i533 = data
  i532.name = i533[0]
  i532.tagId = i533[1]
  i532.enabled = !!i533[2]
  i532.isStatic = !!i533[3]
  i532.layer = i533[4]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i535 = data
  i534.name = i535[0]
  i534.index = i535[1]
  i534.startup = !!i535[2]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i537 = data
  i536.aspect = i537[0]
  i536.orthographic = !!i537[1]
  i536.orthographicSize = i537[2]
  i536.backgroundColor = new pc.Color(i537[3], i537[4], i537[5], i537[6])
  i536.nearClipPlane = i537[7]
  i536.farClipPlane = i537[8]
  i536.fieldOfView = i537[9]
  i536.depth = i537[10]
  i536.clearFlags = i537[11]
  i536.cullingMask = i537[12]
  i536.rect = i537[13]
  request.r(i537[14], i537[15], 0, i536, 'targetTexture')
  i536.usePhysicalProperties = !!i537[16]
  i536.focalLength = i537[17]
  i536.sensorSize = new pc.Vec2( i537[18], i537[19] )
  i536.lensShift = new pc.Vec2( i537[20], i537[21] )
  i536.gateFit = i537[22]
  i536.commandBufferCount = i537[23]
  i536.cameraType = i537[24]
  i536.enabled = !!i537[25]
  return i536
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'm_FirstSelected')
  i538.m_sendNavigationEvents = !!i539[2]
  i538.m_DragThreshold = i539[3]
  return i538
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i541 = data
  i540.m_HorizontalAxis = i541[0]
  i540.m_VerticalAxis = i541[1]
  i540.m_SubmitButton = i541[2]
  i540.m_CancelButton = i541[3]
  i540.m_InputActionsPerSecond = i541[4]
  i540.m_RepeatDelay = i541[5]
  i540.m_ForceModuleActive = !!i541[6]
  i540.m_SendPointerHoverToParent = !!i541[7]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i543 = data
  i542.pivot = new pc.Vec2( i543[0], i543[1] )
  i542.anchorMin = new pc.Vec2( i543[2], i543[3] )
  i542.anchorMax = new pc.Vec2( i543[4], i543[5] )
  i542.sizeDelta = new pc.Vec2( i543[6], i543[7] )
  i542.anchoredPosition3D = new pc.Vec3( i543[8], i543[9], i543[10] )
  i542.rotation = new pc.Quat(i543[11], i543[12], i543[13], i543[14])
  i542.scale = new pc.Vec3( i543[15], i543[16], i543[17] )
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i545 = data
  i544.planeDistance = i545[0]
  i544.referencePixelsPerUnit = i545[1]
  i544.isFallbackOverlay = !!i545[2]
  i544.renderMode = i545[3]
  i544.renderOrder = i545[4]
  i544.sortingLayerName = i545[5]
  i544.sortingOrder = i545[6]
  i544.scaleFactor = i545[7]
  request.r(i545[8], i545[9], 0, i544, 'worldCamera')
  i544.overrideSorting = !!i545[10]
  i544.pixelPerfect = !!i545[11]
  i544.targetDisplay = i545[12]
  i544.overridePixelPerfect = !!i545[13]
  i544.enabled = !!i545[14]
  return i544
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i547 = data
  i546.m_UiScaleMode = i547[0]
  i546.m_ReferencePixelsPerUnit = i547[1]
  i546.m_ScaleFactor = i547[2]
  i546.m_ReferenceResolution = new pc.Vec2( i547[3], i547[4] )
  i546.m_ScreenMatchMode = i547[5]
  i546.m_MatchWidthOrHeight = i547[6]
  i546.m_PhysicalUnit = i547[7]
  i546.m_FallbackScreenDPI = i547[8]
  i546.m_DefaultSpriteDPI = i547[9]
  i546.m_DynamicPixelsPerUnit = i547[10]
  i546.m_PresetInfoIsWorld = !!i547[11]
  return i546
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i549 = data
  i548.m_IgnoreReversedGraphics = !!i549[0]
  i548.m_BlockingObjects = i549[1]
  i548.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i549[2] )
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i551 = data
  i550.cullTransparentMesh = !!i551[0]
  return i550
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i553 = data
  i552.m_AspectMode = i553[0]
  i552.m_AspectRatio = i553[1]
  return i552
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'm_Texture')
  i554.m_UVRect = UnityEngine.Rect.MinMaxRect(i555[2], i555[3], i555[4], i555[5])
  request.r(i555[6], i555[7], 0, i554, 'm_Material')
  i554.m_Maskable = !!i555[8]
  i554.m_Color = new pc.Color(i555[9], i555[10], i555[11], i555[12])
  i554.m_RaycastTarget = !!i555[13]
  i554.m_RaycastPadding = new pc.Vec4( i555[14], i555[15], i555[16], i555[17] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i557 = data
  i556.color = new pc.Color(i557[0], i557[1], i557[2], i557[3])
  request.r(i557[4], i557[5], 0, i556, 'sprite')
  i556.flipX = !!i557[6]
  i556.flipY = !!i557[7]
  i556.drawMode = i557[8]
  i556.size = new pc.Vec2( i557[9], i557[10] )
  i556.tileMode = i557[11]
  i556.adaptiveModeThreshold = i557[12]
  i556.maskInteraction = i557[13]
  i556.spriteSortPoint = i557[14]
  i556.enabled = !!i557[15]
  request.r(i557[16], i557[17], 0, i556, 'sharedMaterial')
  var i559 = i557[18]
  var i558 = []
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 2, i558, '')
  }
  i556.sharedMaterials = i558
  i556.receiveShadows = !!i557[19]
  i556.shadowCastingMode = i557[20]
  i556.sortingLayerID = i557[21]
  i556.sortingOrder = i557[22]
  i556.lightmapIndex = i557[23]
  i556.lightmapSceneIndex = i557[24]
  i556.lightmapScaleOffset = new pc.Vec4( i557[25], i557[26], i557[27], i557[28] )
  i556.lightProbeUsage = i557[29]
  i556.reflectionProbeUsage = i557[30]
  return i556
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i563 = data
  i562.sortingLayerIndex = i563[0]
  i562.sortingOrder = i563[1]
  i562.sortingLayerName = i563[2]
  i562.enabled = !!i563[3]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i565 = data
  i564.bodyType = i565[0]
  request.r(i565[1], i565[2], 0, i564, 'material')
  i564.simulated = !!i565[3]
  i564.useAutoMass = !!i565[4]
  i564.mass = i565[5]
  i564.drag = i565[6]
  i564.angularDrag = i565[7]
  i564.gravityScale = i565[8]
  i564.collisionDetectionMode = i565[9]
  i564.sleepMode = i565[10]
  i564.constraints = i565[11]
  return i564
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i566 = root || request.c( 'MonsterController' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'joint')
  request.r(i567[2], i567[3], 0, i566, 'rb')
  request.r(i567[4], i567[5], 0, i566, 'deadSFX')
  i566.force = new pc.Vec2( i567[6], i567[7] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i569 = data
  i568.useLimits = !!i569[0]
  i568.limits = request.d('UnityEngine.JointAngleLimits2D', i569[1], i568.limits)
  i568.useMotor = !!i569[2]
  i568.motor = request.d('UnityEngine.JointMotor2D', i569[3], i568.motor)
  i568.anchor = new pc.Vec2( i569[4], i569[5] )
  i568.connectedAnchor = new pc.Vec2( i569[6], i569[7] )
  i568.autoConfigureConnectedAnchor = !!i569[8]
  request.r(i569[9], i569[10], 0, i568, 'connectedBody')
  i568.breakForce = i569[11]
  i568.breakTorque = i569[12]
  i568.enableCollision = !!i569[13]
  i568.enabled = !!i569[14]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i571 = data
  i570.autoConfigureTarget = !!i571[0]
  i570.target = new pc.Vec2( i571[1], i571[2] )
  i570.anchor = new pc.Vec2( i571[3], i571[4] )
  i570.maxForce = i571[5]
  i570.dampingRatio = i571[6]
  i570.frequency = i571[7]
  request.r(i571[8], i571[9], 0, i570, 'connectedBody')
  i570.breakForce = i571[10]
  i570.breakTorque = i571[11]
  i570.enableCollision = !!i571[12]
  i570.enabled = !!i571[13]
  return i570
}

Deserializers["BonkController"] = function (request, data, root) {
  var i572 = root || request.c( 'BonkController' )
  var i573 = data
  i572.target = i573[0]
  i572.maxBonk = i573[1]
  request.r(i573[2], i573[3], 0, i572, 'hitSound')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i575 = data
  i574.edgeRadius = i575[0]
  var i577 = i575[1]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
    i576.push( new pc.Vec2( i577[i + 0], i577[i + 1] ) );
  }
  i574.points = i576
  i574.useAdjacentStartPoint = !!i575[2]
  i574.adjacentStartPoint = new pc.Vec2( i575[3], i575[4] )
  i574.useAdjacentEndPoint = !!i575[5]
  i574.adjacentEndPoint = new pc.Vec2( i575[6], i575[7] )
  i574.enabled = !!i575[8]
  i574.isTrigger = !!i575[9]
  i574.usedByEffector = !!i575[10]
  i574.density = i575[11]
  i574.offset = new pc.Vec2( i575[12], i575[13] )
  request.r(i575[14], i575[15], 0, i574, 'material')
  return i574
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.Text' )
  var i581 = data
  i580.m_FontData = request.d('UnityEngine.UI.FontData', i581[0], i580.m_FontData)
  i580.m_Text = i581[1]
  request.r(i581[2], i581[3], 0, i580, 'm_Material')
  i580.m_Maskable = !!i581[4]
  i580.m_Color = new pc.Color(i581[5], i581[6], i581[7], i581[8])
  i580.m_RaycastTarget = !!i581[9]
  i580.m_RaycastPadding = new pc.Vec4( i581[10], i581[11], i581[12], i581[13] )
  return i580
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.FontData' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'm_Font')
  i582.m_FontSize = i583[2]
  i582.m_FontStyle = i583[3]
  i582.m_BestFit = !!i583[4]
  i582.m_MinSize = i583[5]
  i582.m_MaxSize = i583[6]
  i582.m_Alignment = i583[7]
  i582.m_AlignByGeometry = !!i583[8]
  i582.m_RichText = !!i583[9]
  i582.m_HorizontalOverflow = i583[10]
  i582.m_VerticalOverflow = i583[11]
  i582.m_LineSpacing = i583[12]
  return i582
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.Image' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'm_Sprite')
  i584.m_Type = i585[2]
  i584.m_PreserveAspect = !!i585[3]
  i584.m_FillCenter = !!i585[4]
  i584.m_FillMethod = i585[5]
  i584.m_FillAmount = i585[6]
  i584.m_FillClockwise = !!i585[7]
  i584.m_FillOrigin = i585[8]
  i584.m_UseSpriteMesh = !!i585[9]
  i584.m_PixelsPerUnitMultiplier = i585[10]
  request.r(i585[11], i585[12], 0, i584, 'm_Material')
  i584.m_Maskable = !!i585[13]
  i584.m_Color = new pc.Color(i585[14], i585[15], i585[16], i585[17])
  i584.m_RaycastTarget = !!i585[18]
  i584.m_RaycastPadding = new pc.Vec4( i585[19], i585[20], i585[21], i585[22] )
  return i584
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.Button' )
  var i587 = data
  i586.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i587[0], i586.m_OnClick)
  i586.m_Navigation = request.d('UnityEngine.UI.Navigation', i587[1], i586.m_Navigation)
  i586.m_Transition = i587[2]
  i586.m_Colors = request.d('UnityEngine.UI.ColorBlock', i587[3], i586.m_Colors)
  i586.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i587[4], i586.m_SpriteState)
  i586.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i587[5], i586.m_AnimationTriggers)
  i586.m_Interactable = !!i587[6]
  request.r(i587[7], i587[8], 0, i586, 'm_TargetGraphic')
  return i586
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i589 = data
  i588.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i589[0], i588.m_PersistentCalls)
  return i588
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i591 = data
  var i593 = i591[0]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i593.length; i += 1) {
    i592.add(request.d('UnityEngine.Events.PersistentCall', i593[i + 0]));
  }
  i590.m_Calls = i592
  return i590
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'm_Target')
  i596.m_TargetAssemblyTypeName = i597[2]
  i596.m_MethodName = i597[3]
  i596.m_Mode = i597[4]
  i596.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i597[5], i596.m_Arguments)
  i596.m_CallState = i597[6]
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

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i606 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i607 = data
  i606.targetIsSelf = !!i607[0]
  request.r(i607[1], i607[2], 0, i606, 'targetGO')
  i606.tweenTargetIsTargetGO = !!i607[3]
  i606.delay = i607[4]
  i606.duration = i607[5]
  i606.easeType = i607[6]
  i606.easeCurve = new pc.AnimationCurve( { keys_flow: i607[7] } )
  i606.loopType = i607[8]
  i606.loops = i607[9]
  i606.id = i607[10]
  i606.isRelative = !!i607[11]
  i606.isFrom = !!i607[12]
  i606.isIndependentUpdate = !!i607[13]
  i606.autoKill = !!i607[14]
  i606.autoGenerate = !!i607[15]
  i606.isActive = !!i607[16]
  i606.isValid = !!i607[17]
  request.r(i607[18], i607[19], 0, i606, 'target')
  i606.animationType = i607[20]
  i606.targetType = i607[21]
  i606.forcedTargetType = i607[22]
  i606.autoPlay = !!i607[23]
  i606.useTargetAsV3 = !!i607[24]
  i606.endValueFloat = i607[25]
  i606.endValueV3 = new pc.Vec3( i607[26], i607[27], i607[28] )
  i606.endValueV2 = new pc.Vec2( i607[29], i607[30] )
  i606.endValueColor = new pc.Color(i607[31], i607[32], i607[33], i607[34])
  i606.endValueString = i607[35]
  i606.endValueRect = UnityEngine.Rect.MinMaxRect(i607[36], i607[37], i607[38], i607[39])
  request.r(i607[40], i607[41], 0, i606, 'endValueTransform')
  i606.optionalBool0 = !!i607[42]
  i606.optionalBool1 = !!i607[43]
  i606.optionalFloat0 = i607[44]
  i606.optionalInt0 = i607[45]
  i606.optionalRotationMode = i607[46]
  i606.optionalScrambleMode = i607[47]
  i606.optionalShakeRandomnessMode = i607[48]
  i606.optionalString = i607[49]
  i606.updateType = i607[50]
  i606.isSpeedBased = !!i607[51]
  i606.hasOnStart = !!i607[52]
  i606.hasOnPlay = !!i607[53]
  i606.hasOnUpdate = !!i607[54]
  i606.hasOnStepComplete = !!i607[55]
  i606.hasOnComplete = !!i607[56]
  i606.hasOnTweenCreated = !!i607[57]
  i606.hasOnRewind = !!i607[58]
  i606.onStart = request.d('UnityEngine.Events.UnityEvent', i607[59], i606.onStart)
  i606.onPlay = request.d('UnityEngine.Events.UnityEvent', i607[60], i606.onPlay)
  i606.onUpdate = request.d('UnityEngine.Events.UnityEvent', i607[61], i606.onUpdate)
  i606.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i607[62], i606.onStepComplete)
  i606.onComplete = request.d('UnityEngine.Events.UnityEvent', i607[63], i606.onComplete)
  i606.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i607[64], i606.onTweenCreated)
  i606.onRewind = request.d('UnityEngine.Events.UnityEvent', i607[65], i606.onRewind)
  return i606
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i609 = data
  i608.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i609[0], i608.m_PersistentCalls)
  return i608
}

Deserializers["GameController"] = function (request, data, root) {
  var i610 = root || request.c( 'GameController' )
  var i611 = data
  var i613 = i611[0]
  var i612 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 1, i612, '')
  }
  i610.stage1LeftCharacter = i612
  var i615 = i611[1]
  var i614 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 1, i614, '')
  }
  i610.stage1RightCharacter = i614
  var i617 = i611[2]
  var i616 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 1, i616, '')
  }
  i610.stage2LeftCharacter = i616
  var i619 = i611[3]
  var i618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 1, i618, '')
  }
  i610.stage2RightCharacter = i618
  var i621 = i611[4]
  var i620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 1, i620, '')
  }
  i610.stage3LeftCharacter = i620
  var i623 = i611[5]
  var i622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 1, i622, '')
  }
  i610.stage3MidCharacter = i622
  var i625 = i611[6]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 1, i624, '')
  }
  i610.stage3RightCharacter = i624
  var i627 = i611[7]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 1, i626, '')
  }
  i610.players1 = i626
  var i629 = i611[8]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 1, i628, '')
  }
  i610.players2 = i628
  var i631 = i611[9]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 1, i630, '')
  }
  i610.monsters = i630
  var i633 = i611[10]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 1, i632, '')
  }
  i610.monsters1 = i632
  var i635 = i611[11]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 1, i634, '')
  }
  i610.monsters2 = i634
  request.r(i611[12], i611[13], 0, i610, 'mainCamera')
  var i637 = i611[14]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i637.length; i += 3) {
    i636.add(new pc.Vec3( i637[i + 0], i637[i + 1], i637[i + 2] ));
  }
  i610.cameraPos = i636
  i610.speedMove = i611[15]
  request.r(i611[16], i611[17], 0, i610, 'target')
  i610.index = i611[18]
  i610.end = !!i611[19]
  request.r(i611[20], i611[21], 0, i610, 'endUI')
  return i610
}

Deserializers["TargetController"] = function (request, data, root) {
  var i646 = root || request.c( 'TargetController' )
  var i647 = data
  var i649 = i647[0]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 1, i648, '')
  }
  i646.listTarget = i648
  request.r(i647[1], i647[2], 0, i646, 'currentTarget')
  i646.index = i647[3]
  request.r(i647[4], i647[5], 0, i646, 'tut')
  return i646
}

Deserializers["LunaController"] = function (request, data, root) {
  var i650 = root || request.c( 'LunaController' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'BGTexture')
  i650.UseTime = !!i651[2]
  i650.TimePlay = i651[3]
  i650.Stage1Left = i651[4]
  i650.Stage1Right = i651[5]
  i650.Stage2Left = i651[6]
  i650.Stage2Right = i651[7]
  i650.Stage3Left = i651[8]
  i650.Stage3Mid = i651[9]
  i650.Stage3Right = i651[10]
  i650.UseMap2 = !!i651[11]
  i650.UseMap3 = !!i651[12]
  request.r(i651[13], i651[14], 0, i650, 'BGImage')
  var i653 = i651[15]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 1, i652, '')
  }
  i650.CTA = i652
  request.r(i651[16], i651[17], 0, i650, 'endCard')
  request.r(i651[18], i651[19], 0, i650, 'map2')
  request.r(i651[20], i651[21], 0, i650, 'map3')
  return i650
}

Deserializers["AudioController"] = function (request, data, root) {
  var i656 = root || request.c( 'AudioController' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'BGM')
  request.r(i657[2], i657[3], 0, i656, 'musicSource')
  request.r(i657[4], i657[5], 0, i656, 'pool')
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'clip')
  request.r(i659[2], i659[3], 0, i658, 'outputAudioMixerGroup')
  i658.playOnAwake = !!i659[4]
  i658.loop = !!i659[5]
  i658.time = i659[6]
  i658.volume = i659[7]
  i658.pitch = i659[8]
  i658.enabled = !!i659[9]
  return i658
}

Deserializers["VFXController"] = function (request, data, root) {
  var i660 = root || request.c( 'VFXController' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'bloodPrefab')
  request.r(i661[2], i661[3], 0, i660, 'pool')
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i663 = data
  i662.ambientIntensity = i663[0]
  i662.reflectionIntensity = i663[1]
  i662.ambientMode = i663[2]
  i662.ambientLight = new pc.Color(i663[3], i663[4], i663[5], i663[6])
  i662.ambientSkyColor = new pc.Color(i663[7], i663[8], i663[9], i663[10])
  i662.ambientGroundColor = new pc.Color(i663[11], i663[12], i663[13], i663[14])
  i662.ambientEquatorColor = new pc.Color(i663[15], i663[16], i663[17], i663[18])
  i662.fogColor = new pc.Color(i663[19], i663[20], i663[21], i663[22])
  i662.fogEndDistance = i663[23]
  i662.fogStartDistance = i663[24]
  i662.fogDensity = i663[25]
  i662.fog = !!i663[26]
  request.r(i663[27], i663[28], 0, i662, 'skybox')
  i662.fogMode = i663[29]
  var i665 = i663[30]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i665[i + 0]) );
  }
  i662.lightmaps = i664
  i662.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i663[31], i662.lightProbes)
  i662.lightmapsMode = i663[32]
  i662.mixedBakeMode = i663[33]
  i662.environmentLightingMode = i663[34]
  i662.ambientProbe = new pc.SphericalHarmonicsL2(i663[35])
  request.r(i663[36], i663[37], 0, i662, 'customReflection')
  request.r(i663[38], i663[39], 0, i662, 'defaultReflection')
  i662.defaultReflectionMode = i663[40]
  i662.defaultReflectionResolution = i663[41]
  i662.sunLightObjectId = i663[42]
  i662.pixelLightCount = i663[43]
  i662.defaultReflectionHDR = !!i663[44]
  i662.hasLightDataAsset = !!i663[45]
  i662.hasManualGenerate = !!i663[46]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'lightmapColor')
  request.r(i669[2], i669[3], 0, i668, 'lightmapDirection')
  request.r(i669[4], i669[5], 0, i668, 'shadowMask')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i670 = root || new UnityEngine.LightProbes()
  var i671 = data
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i679 = data
  var i681 = i679[0]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i681.length; i += 1) {
    i680.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i681[i + 0]));
  }
  i678.ShaderCompilationErrors = i680
  i678.name = i679[1]
  i678.guid = i679[2]
  var i683 = i679[3]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( i683[i + 0] );
  }
  i678.shaderDefinedKeywords = i682
  var i685 = i679[4]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i685[i + 0]) );
  }
  i678.passes = i684
  var i687 = i679[5]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i687[i + 0]) );
  }
  i678.usePasses = i686
  var i689 = i679[6]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i689[i + 0]) );
  }
  i678.defaultParameterValues = i688
  request.r(i679[7], i679[8], 0, i678, 'unityFallbackShader')
  i678.readDepth = !!i679[9]
  i678.hasDepthOnlyPass = !!i679[10]
  i678.isCreatedByShaderGraph = !!i679[11]
  i678.disableBatching = !!i679[12]
  i678.compiled = !!i679[13]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i693 = data
  i692.shaderName = i693[0]
  i692.errorMessage = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i698 = root || new pc.UnityShaderPass()
  var i699 = data
  i698.id = i699[0]
  i698.subShaderIndex = i699[1]
  i698.name = i699[2]
  i698.passType = i699[3]
  i698.grabPassTextureName = i699[4]
  i698.usePass = !!i699[5]
  i698.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[6], i698.zTest)
  i698.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[7], i698.zWrite)
  i698.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[8], i698.culling)
  i698.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i699[9], i698.blending)
  i698.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i699[10], i698.alphaBlending)
  i698.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[11], i698.colorWriteMask)
  i698.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[12], i698.offsetUnits)
  i698.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[13], i698.offsetFactor)
  i698.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[14], i698.stencilRef)
  i698.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[15], i698.stencilReadMask)
  i698.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[16], i698.stencilWriteMask)
  i698.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i699[17], i698.stencilOp)
  i698.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i699[18], i698.stencilOpFront)
  i698.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i699[19], i698.stencilOpBack)
  var i701 = i699[20]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i701[i + 0]) );
  }
  i698.tags = i700
  var i703 = i699[21]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i698.passDefinedKeywords = i702
  var i705 = i699[22]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i705[i + 0]) );
  }
  i698.passDefinedKeywordGroups = i704
  var i707 = i699[23]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i707[i + 0]) );
  }
  i698.variants = i706
  var i709 = i699[24]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i709[i + 0]) );
  }
  i698.excludedVariants = i708
  i698.hasDepthReader = !!i699[25]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i711 = data
  i710.val = i711[0]
  i710.name = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i713 = data
  i712.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[0], i712.src)
  i712.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[1], i712.dst)
  i712.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i713[2], i712.op)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i715 = data
  i714.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[0], i714.pass)
  i714.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[1], i714.fail)
  i714.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[2], i714.zFail)
  i714.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[3], i714.comp)
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i719 = data
  i718.name = i719[0]
  i718.value = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i723 = data
  var i725 = i723[0]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i722.keywords = i724
  i722.hasDiscard = !!i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i729 = data
  i728.passId = i729[0]
  i728.subShaderIndex = i729[1]
  var i731 = i729[2]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i728.keywords = i730
  i728.vertexProgram = i729[3]
  i728.fragmentProgram = i729[4]
  i728.exportedForWebGl2 = !!i729[5]
  i728.readDepth = !!i729[6]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'shader')
  i734.pass = i735[2]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i739 = data
  i738.name = i739[0]
  i738.type = i739[1]
  i738.value = new pc.Vec4( i739[2], i739[3], i739[4], i739[5] )
  i738.textureValue = i739[6]
  i738.shaderPropertyFlag = i739[7]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i741 = data
  i740.name = i741[0]
  request.r(i741[1], i741[2], 0, i740, 'texture')
  i740.aabb = i741[3]
  i740.vertices = i741[4]
  i740.triangles = i741[5]
  i740.textureRect = UnityEngine.Rect.MinMaxRect(i741[6], i741[7], i741[8], i741[9])
  i740.packedRect = UnityEngine.Rect.MinMaxRect(i741[10], i741[11], i741[12], i741[13])
  i740.border = new pc.Vec4( i741[14], i741[15], i741[16], i741[17] )
  i740.transparency = i741[18]
  i740.bounds = i741[19]
  i740.pixelsPerUnit = i741[20]
  i740.textureWidth = i741[21]
  i740.textureHeight = i741[22]
  i740.nativeSize = new pc.Vec2( i741[23], i741[24] )
  i740.pivot = new pc.Vec2( i741[25], i741[26] )
  i740.textureRectOffset = new pc.Vec2( i741[27], i741[28] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i743 = data
  i742.name = i743[0]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i745 = data
  i744.name = i745[0]
  i744.ascent = i745[1]
  i744.originalLineHeight = i745[2]
  i744.fontSize = i745[3]
  var i747 = i745[4]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i747[i + 0]) );
  }
  i744.characterInfo = i746
  request.r(i745[5], i745[6], 0, i744, 'texture')
  i744.originalFontSize = i745[7]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i751 = data
  i750.index = i751[0]
  i750.advance = i751[1]
  i750.bearing = i751[2]
  i750.glyphWidth = i751[3]
  i750.glyphHeight = i751[4]
  i750.minX = i751[5]
  i750.maxX = i751[6]
  i750.minY = i751[7]
  i750.maxY = i751[8]
  i750.uvBottomLeftX = i751[9]
  i750.uvBottomLeftY = i751[10]
  i750.uvBottomRightX = i751[11]
  i750.uvBottomRightY = i751[12]
  i750.uvTopLeftX = i751[13]
  i750.uvTopLeftY = i751[14]
  i750.uvTopRightX = i751[15]
  i750.uvTopRightY = i751[16]
  return i750
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i752 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i753 = data
  i752.useSafeMode = !!i753[0]
  i752.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i753[1], i752.safeModeOptions)
  i752.timeScale = i753[2]
  i752.unscaledTimeScale = i753[3]
  i752.useSmoothDeltaTime = !!i753[4]
  i752.maxSmoothUnscaledTime = i753[5]
  i752.rewindCallbackMode = i753[6]
  i752.showUnityEditorReport = !!i753[7]
  i752.logBehaviour = i753[8]
  i752.drawGizmos = !!i753[9]
  i752.defaultRecyclable = !!i753[10]
  i752.defaultAutoPlay = i753[11]
  i752.defaultUpdateType = i753[12]
  i752.defaultTimeScaleIndependent = !!i753[13]
  i752.defaultEaseType = i753[14]
  i752.defaultEaseOvershootOrAmplitude = i753[15]
  i752.defaultEasePeriod = i753[16]
  i752.defaultAutoKill = !!i753[17]
  i752.defaultLoopType = i753[18]
  i752.debugMode = !!i753[19]
  i752.debugStoreTargetId = !!i753[20]
  i752.showPreviewPanel = !!i753[21]
  i752.storeSettingsLocation = i753[22]
  i752.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i753[23], i752.modules)
  i752.createASMDEF = !!i753[24]
  i752.showPlayingTweens = !!i753[25]
  i752.showPausedTweens = !!i753[26]
  return i752
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i754 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i755 = data
  i754.logBehaviour = i755[0]
  i754.nestedTweenFailureBehaviour = i755[1]
  return i754
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i756 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i757 = data
  i756.showPanel = !!i757[0]
  i756.audioEnabled = !!i757[1]
  i756.physicsEnabled = !!i757[2]
  i756.physics2DEnabled = !!i757[3]
  i756.spriteEnabled = !!i757[4]
  i756.uiEnabled = !!i757[5]
  i756.textMeshProEnabled = !!i757[6]
  i756.tk2DEnabled = !!i757[7]
  i756.deAudioEnabled = !!i757[8]
  i756.deUnityExtendedEnabled = !!i757[9]
  i756.epoOutlineEnabled = !!i757[10]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i759 = data
  var i761 = i759[0]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i761[i + 0]) );
  }
  i758.files = i760
  i758.componentToPrefabIds = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i765 = data
  i764.path = i765[0]
  request.r(i765[1], i765[2], 0, i764, 'unityObject')
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i767 = data
  var i769 = i767[0]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i769[i + 0]) );
  }
  i766.scriptsExecutionOrder = i768
  var i771 = i767[1]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i771[i + 0]) );
  }
  i766.sortingLayers = i770
  var i773 = i767[2]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i773[i + 0]) );
  }
  i766.cullingLayers = i772
  i766.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i767[3], i766.timeSettings)
  i766.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i767[4], i766.physicsSettings)
  i766.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i767[5], i766.physics2DSettings)
  i766.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i767[6], i766.qualitySettings)
  i766.enableRealtimeShadows = !!i767[7]
  i766.enableAutoInstancing = !!i767[8]
  i766.enableStaticBatching = !!i767[9]
  i766.enableDynamicBatching = !!i767[10]
  i766.usePreservativeDynamicBatching = !!i767[11]
  i766.lightmapEncodingQuality = i767[12]
  i766.desiredColorSpace = i767[13]
  var i775 = i767[14]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( i775[i + 0] );
  }
  i766.allTags = i774
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i779 = data
  i778.name = i779[0]
  i778.value = i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i783 = data
  i782.id = i783[0]
  i782.name = i783[1]
  i782.value = i783[2]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i787 = data
  i786.id = i787[0]
  i786.name = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i789 = data
  i788.fixedDeltaTime = i789[0]
  i788.maximumDeltaTime = i789[1]
  i788.timeScale = i789[2]
  i788.maximumParticleTimestep = i789[3]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i791 = data
  i790.gravity = new pc.Vec3( i791[0], i791[1], i791[2] )
  i790.defaultSolverIterations = i791[3]
  i790.bounceThreshold = i791[4]
  i790.autoSyncTransforms = !!i791[5]
  i790.autoSimulation = !!i791[6]
  var i793 = i791[7]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i793[i + 0]) );
  }
  i790.collisionMatrix = i792
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i797 = data
  i796.enabled = !!i797[0]
  i796.layerId = i797[1]
  i796.otherLayerId = i797[2]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'material')
  i798.gravity = new pc.Vec2( i799[2], i799[3] )
  i798.positionIterations = i799[4]
  i798.velocityIterations = i799[5]
  i798.velocityThreshold = i799[6]
  i798.maxLinearCorrection = i799[7]
  i798.maxAngularCorrection = i799[8]
  i798.maxTranslationSpeed = i799[9]
  i798.maxRotationSpeed = i799[10]
  i798.baumgarteScale = i799[11]
  i798.baumgarteTOIScale = i799[12]
  i798.timeToSleep = i799[13]
  i798.linearSleepTolerance = i799[14]
  i798.angularSleepTolerance = i799[15]
  i798.defaultContactOffset = i799[16]
  i798.autoSimulation = !!i799[17]
  i798.queriesHitTriggers = !!i799[18]
  i798.queriesStartInColliders = !!i799[19]
  i798.callbacksOnDisable = !!i799[20]
  i798.reuseCollisionCallbacks = !!i799[21]
  i798.autoSyncTransforms = !!i799[22]
  var i801 = i799[23]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i801[i + 0]) );
  }
  i798.collisionMatrix = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i805 = data
  i804.enabled = !!i805[0]
  i804.layerId = i805[1]
  i804.otherLayerId = i805[2]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i807 = data
  var i809 = i807[0]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i809[i + 0]) );
  }
  i806.qualityLevels = i808
  var i811 = i807[1]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i806.names = i810
  i806.shadows = i807[2]
  i806.anisotropicFiltering = i807[3]
  i806.antiAliasing = i807[4]
  i806.lodBias = i807[5]
  i806.shadowCascades = i807[6]
  i806.shadowDistance = i807[7]
  i806.shadowmaskMode = i807[8]
  i806.shadowProjection = i807[9]
  i806.shadowResolution = i807[10]
  i806.softParticles = !!i807[11]
  i806.softVegetation = !!i807[12]
  i806.activeColorSpace = i807[13]
  i806.desiredColorSpace = i807[14]
  i806.masterTextureLimit = i807[15]
  i806.maxQueuedFrames = i807[16]
  i806.particleRaycastBudget = i807[17]
  i806.pixelLightCount = i807[18]
  i806.realtimeReflectionProbes = !!i807[19]
  i806.shadowCascade2Split = i807[20]
  i806.shadowCascade4Split = new pc.Vec3( i807[21], i807[22], i807[23] )
  i806.streamingMipmapsActive = !!i807[24]
  i806.vSyncCount = i807[25]
  i806.asyncUploadBufferSize = i807[26]
  i806.asyncUploadTimeSlice = i807[27]
  i806.billboardsFaceCameraPosition = !!i807[28]
  i806.shadowNearPlaneOffset = i807[29]
  i806.streamingMipmapsMemoryBudget = i807[30]
  i806.maximumLODLevel = i807[31]
  i806.streamingMipmapsAddAllCameras = !!i807[32]
  i806.streamingMipmapsMaxLevelReduction = i807[33]
  i806.streamingMipmapsRenderersPerFrame = i807[34]
  i806.resolutionScalingFixedDPIFactor = i807[35]
  i806.streamingMipmapsMaxFileIORequests = i807[36]
  i806.currentQualityLevel = i807[37]
  return i806
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'm_ObjectArgument')
  i814.m_ObjectArgumentAssemblyTypeName = i815[2]
  i814.m_IntArgument = i815[3]
  i814.m_FloatArgument = i815[4]
  i814.m_StringArgument = i815[5]
  i814.m_BoolArgument = !!i815[6]
  return i814
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"edgeRadius":0,"points":1,"useAdjacentStartPoint":2,"adjacentStartPoint":3,"useAdjacentEndPoint":5,"adjacentEndPoint":6,"enabled":8,"isTrigger":9,"usedByEffector":10,"density":11,"offset":12,"material":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[5],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[21],"61":[21],"62":[21],"63":[21],"64":[21],"65":[21],"26":[21],"66":[21],"67":[21],"24":[21],"68":[21],"69":[21],"70":[21],"71":[5],"72":[73],"74":[75],"76":[75],"11":[10],"77":[17],"78":[5],"79":[80],"81":[10],"82":[14,10],"83":[73],"84":[14,10],"85":[10],"86":[10],"87":[73,10],"88":[10,14],"89":[90],"91":[90],"92":[90],"93":[10],"94":[10],"13":[11],"31":[14,10],"15":[10],"12":[11],"95":[10],"96":[10],"97":[10],"98":[10],"99":[10],"100":[10],"101":[10],"102":[10],"103":[10],"16":[14,10],"104":[10],"105":[10],"106":[10],"107":[10],"29":[14,10],"108":[10],"109":[8],"110":[8],"9":[8],"111":[8],"112":[5],"113":[5]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.HingeJoint2D","BonkController","UnityEngine.EdgeCollider2D","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Image","UnityEngine.UI.Button","DG.Tweening.DOTweenAnimation","GameController","UnityEngine.GameObject","TargetController","LunaController","UnityEngine.Texture2D","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "10/15/2026 03:37:54";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V02_YenTTH_TamNTM_";

Deserializers.lunaAppID = "40364";

Deserializers.projectId = "01d8b819bddb11e4ea7a644267642880";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1795";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4182";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "64eb3681-22fd-48d5-97ee-73584c975175";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


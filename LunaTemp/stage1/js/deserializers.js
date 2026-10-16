var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.JointSpring' )
  var i405 = data
  i404.spring = i405[0]
  i404.damper = i405[1]
  i404.targetPosition = i405[2]
  return i404
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.JointMotor' )
  var i407 = data
  i406.m_TargetVelocity = i407[0]
  i406.m_Force = i407[1]
  i406.m_FreeSpin = i407[2]
  return i406
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointLimits' )
  var i409 = data
  i408.m_Min = i409[0]
  i408.m_Max = i409[1]
  i408.m_Bounciness = i409[2]
  i408.m_BounceMinVelocity = i409[3]
  i408.m_ContactDistance = i409[4]
  i408.minBounce = i409[5]
  i408.maxBounce = i409[6]
  return i408
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointDrive' )
  var i411 = data
  i410.m_PositionSpring = i411[0]
  i410.m_PositionDamper = i411[1]
  i410.m_MaximumForce = i411[2]
  i410.m_UseAcceleration = i411[3]
  return i410
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i413 = data
  i412.m_Spring = i413[0]
  i412.m_Damper = i413[1]
  return i412
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i415 = data
  i414.m_Limit = i415[0]
  i414.m_Bounciness = i415[1]
  i414.m_ContactDistance = i415[2]
  return i414
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i417 = data
  i416.m_ExtremumSlip = i417[0]
  i416.m_ExtremumValue = i417[1]
  i416.m_AsymptoteSlip = i417[2]
  i416.m_AsymptoteValue = i417[3]
  i416.m_Stiffness = i417[4]
  return i416
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i419 = data
  i418.m_LowerAngle = i419[0]
  i418.m_UpperAngle = i419[1]
  return i418
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i421 = data
  i420.m_MotorSpeed = i421[0]
  i420.m_MaximumMotorTorque = i421[1]
  return i420
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i423 = data
  i422.m_DampingRatio = i423[0]
  i422.m_Frequency = i423[1]
  i422.m_Angle = i423[2]
  return i422
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i425 = data
  i424.m_LowerTranslation = i425[0]
  i424.m_UpperTranslation = i425[1]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i426 = root || new pc.UnityMaterial()
  var i427 = data
  i426.name = i427[0]
  request.r(i427[1], i427[2], 0, i426, 'shader')
  i426.renderQueue = i427[3]
  i426.enableInstancing = !!i427[4]
  var i429 = i427[5]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i429[i + 0]) );
  }
  i426.floatParameters = i428
  var i431 = i427[6]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i431[i + 0]) );
  }
  i426.colorParameters = i430
  var i433 = i427[7]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i433[i + 0]) );
  }
  i426.vectorParameters = i432
  var i435 = i427[8]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i435[i + 0]) );
  }
  i426.textureParameters = i434
  var i437 = i427[9]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i437[i + 0]) );
  }
  i426.materialFlags = i436
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i441 = data
  i440.name = i441[0]
  i440.value = i441[1]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i445 = data
  i444.name = i445[0]
  i444.value = new pc.Color(i445[1], i445[2], i445[3], i445[4])
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i449 = data
  i448.name = i449[0]
  i448.value = new pc.Vec4( i449[1], i449[2], i449[3], i449[4] )
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i453 = data
  i452.name = i453[0]
  request.r(i453[1], i453[2], 0, i452, 'value')
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i457 = data
  i456.name = i457[0]
  i456.enabled = !!i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i459 = data
  i458.name = i459[0]
  i458.width = i459[1]
  i458.height = i459[2]
  i458.mipmapCount = i459[3]
  i458.anisoLevel = i459[4]
  i458.filterMode = i459[5]
  i458.hdr = !!i459[6]
  i458.format = i459[7]
  i458.wrapMode = i459[8]
  i458.alphaIsTransparency = !!i459[9]
  i458.alphaSource = i459[10]
  i458.graphicsFormat = i459[11]
  i458.sRGBTexture = !!i459[12]
  i458.desiredColorSpace = i459[13]
  i458.wrapU = i459[14]
  i458.wrapV = i459[15]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i461 = data
  i460.position = new pc.Vec3( i461[0], i461[1], i461[2] )
  i460.scale = new pc.Vec3( i461[3], i461[4], i461[5] )
  i460.rotation = new pc.Quat(i461[6], i461[7], i461[8], i461[9])
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i463 = data
  i462.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i463[0], i462.main)
  i462.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i463[1], i462.colorBySpeed)
  i462.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i463[2], i462.colorOverLifetime)
  i462.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i463[3], i462.emission)
  i462.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i463[4], i462.rotationBySpeed)
  i462.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i463[5], i462.rotationOverLifetime)
  i462.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i463[6], i462.shape)
  i462.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i463[7], i462.sizeBySpeed)
  i462.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i463[8], i462.sizeOverLifetime)
  i462.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i463[9], i462.textureSheetAnimation)
  i462.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i463[10], i462.velocityOverLifetime)
  i462.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i463[11], i462.noise)
  i462.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i463[12], i462.inheritVelocity)
  i462.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i463[13], i462.forceOverLifetime)
  i462.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i463[14], i462.limitVelocityOverLifetime)
  i462.useAutoRandomSeed = !!i463[15]
  i462.randomSeed = i463[16]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i464 = root || new pc.ParticleSystemMain()
  var i465 = data
  i464.duration = i465[0]
  i464.loop = !!i465[1]
  i464.prewarm = !!i465[2]
  i464.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[3], i464.startDelay)
  i464.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[4], i464.startLifetime)
  i464.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[5], i464.startSpeed)
  i464.startSize3D = !!i465[6]
  i464.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[7], i464.startSizeX)
  i464.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[8], i464.startSizeY)
  i464.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[9], i464.startSizeZ)
  i464.startRotation3D = !!i465[10]
  i464.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[11], i464.startRotationX)
  i464.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[12], i464.startRotationY)
  i464.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[13], i464.startRotationZ)
  i464.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i465[14], i464.startColor)
  i464.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[15], i464.gravityModifier)
  i464.simulationSpace = i465[16]
  request.r(i465[17], i465[18], 0, i464, 'customSimulationSpace')
  i464.simulationSpeed = i465[19]
  i464.useUnscaledTime = !!i465[20]
  i464.scalingMode = i465[21]
  i464.playOnAwake = !!i465[22]
  i464.maxParticles = i465[23]
  i464.emitterVelocityMode = i465[24]
  i464.stopAction = i465[25]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i466 = root || new pc.MinMaxCurve()
  var i467 = data
  i466.mode = i467[0]
  i466.curveMin = new pc.AnimationCurve( { keys_flow: i467[1] } )
  i466.curveMax = new pc.AnimationCurve( { keys_flow: i467[2] } )
  i466.curveMultiplier = i467[3]
  i466.constantMin = i467[4]
  i466.constantMax = i467[5]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i468 = root || new pc.MinMaxGradient()
  var i469 = data
  i468.mode = i469[0]
  i468.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i469[1], i468.gradientMin)
  i468.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i469[2], i468.gradientMax)
  i468.colorMin = new pc.Color(i469[3], i469[4], i469[5], i469[6])
  i468.colorMax = new pc.Color(i469[7], i469[8], i469[9], i469[10])
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i471 = data
  i470.mode = i471[0]
  var i473 = i471[1]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i473[i + 0]) );
  }
  i470.colorKeys = i472
  var i475 = i471[2]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i475[i + 0]) );
  }
  i470.alphaKeys = i474
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i476 = root || new pc.ParticleSystemColorBySpeed()
  var i477 = data
  i476.enabled = !!i477[0]
  i476.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i477[1], i476.color)
  i476.range = new pc.Vec2( i477[2], i477[3] )
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i481 = data
  i480.color = new pc.Color(i481[0], i481[1], i481[2], i481[3])
  i480.time = i481[4]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i485 = data
  i484.alpha = i485[0]
  i484.time = i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i486 = root || new pc.ParticleSystemColorOverLifetime()
  var i487 = data
  i486.enabled = !!i487[0]
  i486.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i487[1], i486.color)
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i488 = root || new pc.ParticleSystemEmitter()
  var i489 = data
  i488.enabled = !!i489[0]
  i488.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[1], i488.rateOverTime)
  i488.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[2], i488.rateOverDistance)
  var i491 = i489[3]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i491[i + 0]) );
  }
  i488.bursts = i490
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i494 = root || new pc.ParticleSystemBurst()
  var i495 = data
  i494.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[0], i494.count)
  i494.cycleCount = i495[1]
  i494.minCount = i495[2]
  i494.maxCount = i495[3]
  i494.repeatInterval = i495[4]
  i494.time = i495[5]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i496 = root || new pc.ParticleSystemRotationBySpeed()
  var i497 = data
  i496.enabled = !!i497[0]
  i496.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[1], i496.x)
  i496.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[2], i496.y)
  i496.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[3], i496.z)
  i496.separateAxes = !!i497[4]
  i496.range = new pc.Vec2( i497[5], i497[6] )
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i498 = root || new pc.ParticleSystemRotationOverLifetime()
  var i499 = data
  i498.enabled = !!i499[0]
  i498.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[1], i498.x)
  i498.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[2], i498.y)
  i498.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i499[3], i498.z)
  i498.separateAxes = !!i499[4]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i500 = root || new pc.ParticleSystemShape()
  var i501 = data
  i500.enabled = !!i501[0]
  i500.shapeType = i501[1]
  i500.randomDirectionAmount = i501[2]
  i500.sphericalDirectionAmount = i501[3]
  i500.randomPositionAmount = i501[4]
  i500.alignToDirection = !!i501[5]
  i500.radius = i501[6]
  i500.radiusMode = i501[7]
  i500.radiusSpread = i501[8]
  i500.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[9], i500.radiusSpeed)
  i500.radiusThickness = i501[10]
  i500.angle = i501[11]
  i500.length = i501[12]
  i500.boxThickness = new pc.Vec3( i501[13], i501[14], i501[15] )
  i500.meshShapeType = i501[16]
  request.r(i501[17], i501[18], 0, i500, 'mesh')
  request.r(i501[19], i501[20], 0, i500, 'meshRenderer')
  request.r(i501[21], i501[22], 0, i500, 'skinnedMeshRenderer')
  i500.useMeshMaterialIndex = !!i501[23]
  i500.meshMaterialIndex = i501[24]
  i500.useMeshColors = !!i501[25]
  i500.normalOffset = i501[26]
  i500.arc = i501[27]
  i500.arcMode = i501[28]
  i500.arcSpread = i501[29]
  i500.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[30], i500.arcSpeed)
  i500.donutRadius = i501[31]
  i500.position = new pc.Vec3( i501[32], i501[33], i501[34] )
  i500.rotation = new pc.Vec3( i501[35], i501[36], i501[37] )
  i500.scale = new pc.Vec3( i501[38], i501[39], i501[40] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i502 = root || new pc.ParticleSystemSizeBySpeed()
  var i503 = data
  i502.enabled = !!i503[0]
  i502.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[1], i502.x)
  i502.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[2], i502.y)
  i502.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i503[3], i502.z)
  i502.separateAxes = !!i503[4]
  i502.range = new pc.Vec2( i503[5], i503[6] )
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i504 = root || new pc.ParticleSystemSizeOverLifetime()
  var i505 = data
  i504.enabled = !!i505[0]
  i504.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[1], i504.x)
  i504.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[2], i504.y)
  i504.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[3], i504.z)
  i504.separateAxes = !!i505[4]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i506 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i507 = data
  i506.enabled = !!i507[0]
  i506.mode = i507[1]
  i506.animation = i507[2]
  i506.numTilesX = i507[3]
  i506.numTilesY = i507[4]
  i506.useRandomRow = !!i507[5]
  i506.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[6], i506.frameOverTime)
  i506.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i507[7], i506.startFrame)
  i506.cycleCount = i507[8]
  i506.rowIndex = i507[9]
  i506.flipU = i507[10]
  i506.flipV = i507[11]
  i506.spriteCount = i507[12]
  var i509 = i507[13]
  var i508 = []
  for(var i = 0; i < i509.length; i += 2) {
  request.r(i509[i + 0], i509[i + 1], 2, i508, '')
  }
  i506.sprites = i508
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i512 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i513 = data
  i512.enabled = !!i513[0]
  i512.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[1], i512.x)
  i512.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[2], i512.y)
  i512.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[3], i512.z)
  i512.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[4], i512.radial)
  i512.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[5], i512.speedModifier)
  i512.space = i513[6]
  i512.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[7], i512.orbitalX)
  i512.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[8], i512.orbitalY)
  i512.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[9], i512.orbitalZ)
  i512.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[10], i512.orbitalOffsetX)
  i512.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[11], i512.orbitalOffsetY)
  i512.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[12], i512.orbitalOffsetZ)
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i514 = root || new pc.ParticleSystemNoise()
  var i515 = data
  i514.enabled = !!i515[0]
  i514.separateAxes = !!i515[1]
  i514.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[2], i514.strengthX)
  i514.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[3], i514.strengthY)
  i514.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[4], i514.strengthZ)
  i514.frequency = i515[5]
  i514.damping = !!i515[6]
  i514.octaveCount = i515[7]
  i514.octaveMultiplier = i515[8]
  i514.octaveScale = i515[9]
  i514.quality = i515[10]
  i514.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[11], i514.scrollSpeed)
  i514.scrollSpeedMultiplier = i515[12]
  i514.remapEnabled = !!i515[13]
  i514.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[14], i514.remapX)
  i514.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[15], i514.remapY)
  i514.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[16], i514.remapZ)
  i514.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[17], i514.positionAmount)
  i514.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[18], i514.rotationAmount)
  i514.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i515[19], i514.sizeAmount)
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i516 = root || new pc.ParticleSystemInheritVelocity()
  var i517 = data
  i516.enabled = !!i517[0]
  i516.mode = i517[1]
  i516.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i517[2], i516.curve)
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i518 = root || new pc.ParticleSystemForceOverLifetime()
  var i519 = data
  i518.enabled = !!i519[0]
  i518.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[1], i518.x)
  i518.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[2], i518.y)
  i518.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[3], i518.z)
  i518.space = i519[4]
  i518.randomized = !!i519[5]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i521 = data
  i520.enabled = !!i521[0]
  i520.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[1], i520.limit)
  i520.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[2], i520.limitX)
  i520.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[3], i520.limitY)
  i520.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[4], i520.limitZ)
  i520.dampen = i521[5]
  i520.separateAxes = !!i521[6]
  i520.space = i521[7]
  i520.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[8], i520.drag)
  i520.multiplyDragByParticleSize = !!i521[9]
  i520.multiplyDragByParticleVelocity = !!i521[10]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i523 = data
  request.r(i523[0], i523[1], 0, i522, 'mesh')
  i522.meshCount = i523[2]
  i522.activeVertexStreamsCount = i523[3]
  i522.alignment = i523[4]
  i522.renderMode = i523[5]
  i522.sortMode = i523[6]
  i522.lengthScale = i523[7]
  i522.velocityScale = i523[8]
  i522.cameraVelocityScale = i523[9]
  i522.normalDirection = i523[10]
  i522.sortingFudge = i523[11]
  i522.minParticleSize = i523[12]
  i522.maxParticleSize = i523[13]
  i522.pivot = new pc.Vec3( i523[14], i523[15], i523[16] )
  request.r(i523[17], i523[18], 0, i522, 'trailMaterial')
  i522.applyActiveColorSpace = !!i523[19]
  i522.enabled = !!i523[20]
  request.r(i523[21], i523[22], 0, i522, 'sharedMaterial')
  var i525 = i523[23]
  var i524 = []
  for(var i = 0; i < i525.length; i += 2) {
  request.r(i525[i + 0], i525[i + 1], 2, i524, '')
  }
  i522.sharedMaterials = i524
  i522.receiveShadows = !!i523[24]
  i522.shadowCastingMode = i523[25]
  i522.sortingLayerID = i523[26]
  i522.sortingOrder = i523[27]
  i522.lightmapIndex = i523[28]
  i522.lightmapSceneIndex = i523[29]
  i522.lightmapScaleOffset = new pc.Vec4( i523[30], i523[31], i523[32], i523[33] )
  i522.lightProbeUsage = i523[34]
  i522.reflectionProbeUsage = i523[35]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i529 = data
  i528.name = i529[0]
  i528.tagId = i529[1]
  i528.enabled = !!i529[2]
  i528.isStatic = !!i529[3]
  i528.layer = i529[4]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i531 = data
  i530.name = i531[0]
  i530.index = i531[1]
  i530.startup = !!i531[2]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i533 = data
  i532.aspect = i533[0]
  i532.orthographic = !!i533[1]
  i532.orthographicSize = i533[2]
  i532.backgroundColor = new pc.Color(i533[3], i533[4], i533[5], i533[6])
  i532.nearClipPlane = i533[7]
  i532.farClipPlane = i533[8]
  i532.fieldOfView = i533[9]
  i532.depth = i533[10]
  i532.clearFlags = i533[11]
  i532.cullingMask = i533[12]
  i532.rect = i533[13]
  request.r(i533[14], i533[15], 0, i532, 'targetTexture')
  i532.usePhysicalProperties = !!i533[16]
  i532.focalLength = i533[17]
  i532.sensorSize = new pc.Vec2( i533[18], i533[19] )
  i532.lensShift = new pc.Vec2( i533[20], i533[21] )
  i532.gateFit = i533[22]
  i532.commandBufferCount = i533[23]
  i532.cameraType = i533[24]
  i532.enabled = !!i533[25]
  return i532
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i534 = root || request.c( 'CameraFollow' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'target')
  i534.offset = new pc.Vec3( i535[2], i535[3], i535[4] )
  i534.smoothSpeed = i535[5]
  return i534
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'm_FirstSelected')
  i536.m_sendNavigationEvents = !!i537[2]
  i536.m_DragThreshold = i537[3]
  return i536
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i539 = data
  i538.m_HorizontalAxis = i539[0]
  i538.m_VerticalAxis = i539[1]
  i538.m_SubmitButton = i539[2]
  i538.m_CancelButton = i539[3]
  i538.m_InputActionsPerSecond = i539[4]
  i538.m_RepeatDelay = i539[5]
  i538.m_ForceModuleActive = !!i539[6]
  i538.m_SendPointerHoverToParent = !!i539[7]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i541 = data
  i540.pivot = new pc.Vec2( i541[0], i541[1] )
  i540.anchorMin = new pc.Vec2( i541[2], i541[3] )
  i540.anchorMax = new pc.Vec2( i541[4], i541[5] )
  i540.sizeDelta = new pc.Vec2( i541[6], i541[7] )
  i540.anchoredPosition3D = new pc.Vec3( i541[8], i541[9], i541[10] )
  i540.rotation = new pc.Quat(i541[11], i541[12], i541[13], i541[14])
  i540.scale = new pc.Vec3( i541[15], i541[16], i541[17] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i543 = data
  i542.planeDistance = i543[0]
  i542.referencePixelsPerUnit = i543[1]
  i542.isFallbackOverlay = !!i543[2]
  i542.renderMode = i543[3]
  i542.renderOrder = i543[4]
  i542.sortingLayerName = i543[5]
  i542.sortingOrder = i543[6]
  i542.scaleFactor = i543[7]
  request.r(i543[8], i543[9], 0, i542, 'worldCamera')
  i542.overrideSorting = !!i543[10]
  i542.pixelPerfect = !!i543[11]
  i542.targetDisplay = i543[12]
  i542.overridePixelPerfect = !!i543[13]
  i542.enabled = !!i543[14]
  return i542
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i545 = data
  i544.m_UiScaleMode = i545[0]
  i544.m_ReferencePixelsPerUnit = i545[1]
  i544.m_ScaleFactor = i545[2]
  i544.m_ReferenceResolution = new pc.Vec2( i545[3], i545[4] )
  i544.m_ScreenMatchMode = i545[5]
  i544.m_MatchWidthOrHeight = i545[6]
  i544.m_PhysicalUnit = i545[7]
  i544.m_FallbackScreenDPI = i545[8]
  i544.m_DefaultSpriteDPI = i545[9]
  i544.m_DynamicPixelsPerUnit = i545[10]
  i544.m_PresetInfoIsWorld = !!i545[11]
  return i544
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i547 = data
  i546.m_IgnoreReversedGraphics = !!i547[0]
  i546.m_BlockingObjects = i547[1]
  i546.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i547[2] )
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i549 = data
  i548.cullTransparentMesh = !!i549[0]
  return i548
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i551 = data
  i550.m_AspectMode = i551[0]
  i550.m_AspectRatio = i551[1]
  return i550
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'm_Texture')
  i552.m_UVRect = UnityEngine.Rect.MinMaxRect(i553[2], i553[3], i553[4], i553[5])
  request.r(i553[6], i553[7], 0, i552, 'm_Material')
  i552.m_Maskable = !!i553[8]
  i552.m_Color = new pc.Color(i553[9], i553[10], i553[11], i553[12])
  i552.m_RaycastTarget = !!i553[13]
  i552.m_RaycastPadding = new pc.Vec4( i553[14], i553[15], i553[16], i553[17] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i555 = data
  i554.color = new pc.Color(i555[0], i555[1], i555[2], i555[3])
  request.r(i555[4], i555[5], 0, i554, 'sprite')
  i554.flipX = !!i555[6]
  i554.flipY = !!i555[7]
  i554.drawMode = i555[8]
  i554.size = new pc.Vec2( i555[9], i555[10] )
  i554.tileMode = i555[11]
  i554.adaptiveModeThreshold = i555[12]
  i554.maskInteraction = i555[13]
  i554.spriteSortPoint = i555[14]
  i554.enabled = !!i555[15]
  request.r(i555[16], i555[17], 0, i554, 'sharedMaterial')
  var i557 = i555[18]
  var i556 = []
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 2, i556, '')
  }
  i554.sharedMaterials = i556
  i554.receiveShadows = !!i555[19]
  i554.shadowCastingMode = i555[20]
  i554.sortingLayerID = i555[21]
  i554.sortingOrder = i555[22]
  i554.lightmapIndex = i555[23]
  i554.lightmapSceneIndex = i555[24]
  i554.lightmapScaleOffset = new pc.Vec4( i555[25], i555[26], i555[27], i555[28] )
  i554.lightProbeUsage = i555[29]
  i554.reflectionProbeUsage = i555[30]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i559 = data
  i558.usedByComposite = !!i559[0]
  i558.autoTiling = !!i559[1]
  i558.size = new pc.Vec2( i559[2], i559[3] )
  i558.edgeRadius = i559[4]
  i558.enabled = !!i559[5]
  i558.isTrigger = !!i559[6]
  i558.usedByEffector = !!i559[7]
  i558.density = i559[8]
  i558.offset = new pc.Vec2( i559[9], i559[10] )
  request.r(i559[11], i559[12], 0, i558, 'material')
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'animatorController')
  request.r(i561[2], i561[3], 0, i560, 'avatar')
  i560.updateMode = i561[4]
  i560.hasTransformHierarchy = !!i561[5]
  i560.applyRootMotion = !!i561[6]
  var i563 = i561[7]
  var i562 = []
  for(var i = 0; i < i563.length; i += 2) {
  request.r(i563[i + 0], i563[i + 1], 2, i562, '')
  }
  i560.humanBones = i562
  i560.enabled = !!i561[8]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i567 = data
  i566.bodyType = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'material')
  i566.simulated = !!i567[3]
  i566.useAutoMass = !!i567[4]
  i566.mass = i567[5]
  i566.drag = i567[6]
  i566.angularDrag = i567[7]
  i566.gravityScale = i567[8]
  i566.collisionDetectionMode = i567[9]
  i566.sleepMode = i567[10]
  i566.constraints = i567[11]
  return i566
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i568 = root || request.c( 'PlayerController' )
  var i569 = data
  var i571 = i569[0]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 1, i570, '')
  }
  i568.render = i570
  var i573 = i569[1]
  var i572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 1, i572, '')
  }
  i568.zombieSprite = i572
  request.r(i569[2], i569[3], 0, i568, 'effect')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'clip')
  request.r(i579[2], i579[3], 0, i578, 'outputAudioMixerGroup')
  i578.playOnAwake = !!i579[4]
  i578.loop = !!i579[5]
  i578.time = i579[6]
  i578.volume = i579[7]
  i578.pitch = i579[8]
  i578.enabled = !!i579[9]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i581 = data
  i580.useLimits = !!i581[0]
  i580.limits = request.d('UnityEngine.JointAngleLimits2D', i581[1], i580.limits)
  i580.useMotor = !!i581[2]
  i580.motor = request.d('UnityEngine.JointMotor2D', i581[3], i580.motor)
  i580.anchor = new pc.Vec2( i581[4], i581[5] )
  i580.connectedAnchor = new pc.Vec2( i581[6], i581[7] )
  i580.autoConfigureConnectedAnchor = !!i581[8]
  request.r(i581[9], i581[10], 0, i580, 'connectedBody')
  i580.breakForce = i581[11]
  i580.breakTorque = i581[12]
  i580.enableCollision = !!i581[13]
  i580.enabled = !!i581[14]
  return i580
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i582 = root || request.c( 'BalanceController' )
  var i583 = data
  i582.targetRotation = i583[0]
  i582.force = i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i585 = data
  i584.autoConfigureTarget = !!i585[0]
  i584.target = new pc.Vec2( i585[1], i585[2] )
  i584.anchor = new pc.Vec2( i585[3], i585[4] )
  i584.maxForce = i585[5]
  i584.dampingRatio = i585[6]
  i584.frequency = i585[7]
  request.r(i585[8], i585[9], 0, i584, 'connectedBody')
  i584.breakForce = i585[10]
  i584.breakTorque = i585[11]
  i584.enableCollision = !!i585[12]
  i584.enabled = !!i585[13]
  return i584
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i586 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i587 = data
  i586.targetIsSelf = !!i587[0]
  request.r(i587[1], i587[2], 0, i586, 'targetGO')
  i586.tweenTargetIsTargetGO = !!i587[3]
  i586.delay = i587[4]
  i586.duration = i587[5]
  i586.easeType = i587[6]
  i586.easeCurve = new pc.AnimationCurve( { keys_flow: i587[7] } )
  i586.loopType = i587[8]
  i586.loops = i587[9]
  i586.id = i587[10]
  i586.isRelative = !!i587[11]
  i586.isFrom = !!i587[12]
  i586.isIndependentUpdate = !!i587[13]
  i586.autoKill = !!i587[14]
  i586.autoGenerate = !!i587[15]
  i586.isActive = !!i587[16]
  i586.isValid = !!i587[17]
  request.r(i587[18], i587[19], 0, i586, 'target')
  i586.animationType = i587[20]
  i586.targetType = i587[21]
  i586.forcedTargetType = i587[22]
  i586.autoPlay = !!i587[23]
  i586.useTargetAsV3 = !!i587[24]
  i586.endValueFloat = i587[25]
  i586.endValueV3 = new pc.Vec3( i587[26], i587[27], i587[28] )
  i586.endValueV2 = new pc.Vec2( i587[29], i587[30] )
  i586.endValueColor = new pc.Color(i587[31], i587[32], i587[33], i587[34])
  i586.endValueString = i587[35]
  i586.endValueRect = UnityEngine.Rect.MinMaxRect(i587[36], i587[37], i587[38], i587[39])
  request.r(i587[40], i587[41], 0, i586, 'endValueTransform')
  i586.optionalBool0 = !!i587[42]
  i586.optionalBool1 = !!i587[43]
  i586.optionalFloat0 = i587[44]
  i586.optionalInt0 = i587[45]
  i586.optionalRotationMode = i587[46]
  i586.optionalScrambleMode = i587[47]
  i586.optionalShakeRandomnessMode = i587[48]
  i586.optionalString = i587[49]
  i586.updateType = i587[50]
  i586.isSpeedBased = !!i587[51]
  i586.hasOnStart = !!i587[52]
  i586.hasOnPlay = !!i587[53]
  i586.hasOnUpdate = !!i587[54]
  i586.hasOnStepComplete = !!i587[55]
  i586.hasOnComplete = !!i587[56]
  i586.hasOnTweenCreated = !!i587[57]
  i586.hasOnRewind = !!i587[58]
  i586.onStart = request.d('UnityEngine.Events.UnityEvent', i587[59], i586.onStart)
  i586.onPlay = request.d('UnityEngine.Events.UnityEvent', i587[60], i586.onPlay)
  i586.onUpdate = request.d('UnityEngine.Events.UnityEvent', i587[61], i586.onUpdate)
  i586.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i587[62], i586.onStepComplete)
  i586.onComplete = request.d('UnityEngine.Events.UnityEvent', i587[63], i586.onComplete)
  i586.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i587[64], i586.onTweenCreated)
  i586.onRewind = request.d('UnityEngine.Events.UnityEvent', i587[65], i586.onRewind)
  return i586
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.Events.UnityEvent' )
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

Deserializers["MonsterController"] = function (request, data, root) {
  var i598 = root || request.c( 'MonsterController' )
  var i599 = data
  var i601 = i599[0]
  var i600 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPart')))
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 1, i600, '')
  }
  i598.parts = i600
  request.r(i599[1], i599[2], 0, i598, 'deadSFX')
  request.r(i599[3], i599[4], 0, i598, 'hint')
  return i598
}

Deserializers["BodyPart"] = function (request, data, root) {
  var i604 = root || request.c( 'BodyPart' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'controller')
  request.r(i605[2], i605[3], 0, i604, 'joint')
  request.r(i605[4], i605[5], 0, i604, 'balance')
  request.r(i605[6], i605[7], 0, i604, 'effect')
  return i604
}

Deserializers["Potion"] = function (request, data, root) {
  var i606 = root || request.c( 'Potion' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'sound')
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i609 = data
  i608.radius = i609[0]
  i608.enabled = !!i609[1]
  i608.isTrigger = !!i609[2]
  i608.usedByEffector = !!i609[3]
  i608.density = i609[4]
  i608.offset = new pc.Vec2( i609[5], i609[6] )
  request.r(i609[7], i609[8], 0, i608, 'material')
  return i608
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.Image' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'm_Sprite')
  i610.m_Type = i611[2]
  i610.m_PreserveAspect = !!i611[3]
  i610.m_FillCenter = !!i611[4]
  i610.m_FillMethod = i611[5]
  i610.m_FillAmount = i611[6]
  i610.m_FillClockwise = !!i611[7]
  i610.m_FillOrigin = i611[8]
  i610.m_UseSpriteMesh = !!i611[9]
  i610.m_PixelsPerUnitMultiplier = i611[10]
  request.r(i611[11], i611[12], 0, i610, 'm_Material')
  i610.m_Maskable = !!i611[13]
  i610.m_Color = new pc.Color(i611[14], i611[15], i611[16], i611[17])
  i610.m_RaycastTarget = !!i611[18]
  i610.m_RaycastPadding = new pc.Vec4( i611[19], i611[20], i611[21], i611[22] )
  return i610
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.Text' )
  var i613 = data
  i612.m_FontData = request.d('UnityEngine.UI.FontData', i613[0], i612.m_FontData)
  i612.m_Text = i613[1]
  request.r(i613[2], i613[3], 0, i612, 'm_Material')
  i612.m_Maskable = !!i613[4]
  i612.m_Color = new pc.Color(i613[5], i613[6], i613[7], i613[8])
  i612.m_RaycastTarget = !!i613[9]
  i612.m_RaycastPadding = new pc.Vec4( i613[10], i613[11], i613[12], i613[13] )
  return i612
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.FontData' )
  var i615 = data
  request.r(i615[0], i615[1], 0, i614, 'm_Font')
  i614.m_FontSize = i615[2]
  i614.m_FontStyle = i615[3]
  i614.m_BestFit = !!i615[4]
  i614.m_MinSize = i615[5]
  i614.m_MaxSize = i615[6]
  i614.m_Alignment = i615[7]
  i614.m_AlignByGeometry = !!i615[8]
  i614.m_RichText = !!i615[9]
  i614.m_HorizontalOverflow = i615[10]
  i614.m_VerticalOverflow = i615[11]
  i614.m_LineSpacing = i615[12]
  return i614
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Button' )
  var i617 = data
  i616.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i617[0], i616.m_OnClick)
  i616.m_Navigation = request.d('UnityEngine.UI.Navigation', i617[1], i616.m_Navigation)
  i616.m_Transition = i617[2]
  i616.m_Colors = request.d('UnityEngine.UI.ColorBlock', i617[3], i616.m_Colors)
  i616.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i617[4], i616.m_SpriteState)
  i616.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i617[5], i616.m_AnimationTriggers)
  i616.m_Interactable = !!i617[6]
  request.r(i617[7], i617[8], 0, i616, 'm_TargetGraphic')
  return i616
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i619 = data
  i618.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i619[0], i618.m_PersistentCalls)
  return i618
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i621 = data
  i620.m_Mode = i621[0]
  i620.m_WrapAround = !!i621[1]
  request.r(i621[2], i621[3], 0, i620, 'm_SelectOnUp')
  request.r(i621[4], i621[5], 0, i620, 'm_SelectOnDown')
  request.r(i621[6], i621[7], 0, i620, 'm_SelectOnLeft')
  request.r(i621[8], i621[9], 0, i620, 'm_SelectOnRight')
  return i620
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i623 = data
  i622.m_NormalColor = new pc.Color(i623[0], i623[1], i623[2], i623[3])
  i622.m_HighlightedColor = new pc.Color(i623[4], i623[5], i623[6], i623[7])
  i622.m_PressedColor = new pc.Color(i623[8], i623[9], i623[10], i623[11])
  i622.m_SelectedColor = new pc.Color(i623[12], i623[13], i623[14], i623[15])
  i622.m_DisabledColor = new pc.Color(i623[16], i623[17], i623[18], i623[19])
  i622.m_ColorMultiplier = i623[20]
  i622.m_FadeDuration = i623[21]
  return i622
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'm_HighlightedSprite')
  request.r(i625[2], i625[3], 0, i624, 'm_PressedSprite')
  request.r(i625[4], i625[5], 0, i624, 'm_SelectedSprite')
  request.r(i625[6], i625[7], 0, i624, 'm_DisabledSprite')
  return i624
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i627 = data
  i626.m_NormalTrigger = i627[0]
  i626.m_HighlightedTrigger = i627[1]
  i626.m_PressedTrigger = i627[2]
  i626.m_SelectedTrigger = i627[3]
  i626.m_DisabledTrigger = i627[4]
  return i626
}

Deserializers["GameController"] = function (request, data, root) {
  var i628 = root || request.c( 'GameController' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'player')
  request.r(i629[2], i629[3], 0, i628, 'target')
  request.r(i629[4], i629[5], 0, i628, 'follow')
  request.r(i629[6], i629[7], 0, i628, 'endUI')
  var i631 = i629[8]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 1, i630, '')
  }
  i628.hints = i630
  request.r(i629[9], i629[10], 0, i628, 'tut2')
  request.r(i629[11], i629[12], 0, i628, 'table')
  i628.currentMonster = i629[13]
  i628.timeDelay = i629[14]
  return i628
}

Deserializers["TargetController"] = function (request, data, root) {
  var i634 = root || request.c( 'TargetController' )
  var i635 = data
  i634.OnClick = request.d('System.Action', i635[0], i634.OnClick)
  var i637 = i635[1]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rigidbody2D')))
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 1, i636, '')
  }
  i634.listTarget = i636
  request.r(i635[2], i635[3], 0, i634, 'currentTarget')
  i634.index = i635[4]
  request.r(i635[5], i635[6], 0, i634, 'tut')
  request.r(i635[7], i635[8], 0, i634, 'hintPotion')
  return i634
}

Deserializers["System.Action"] = function (request, data, root) {
  var i638 = root || request.c( 'System.Action' )
  var i639 = data
  return i638
}

Deserializers["LunaController"] = function (request, data, root) {
  var i642 = root || request.c( 'LunaController' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'BGTexture')
  i642.UseTime = !!i643[2]
  i642.TimePlay = i643[3]
  i642.LimitClick = !!i643[4]
  i642.MaxClick = i643[5]
  request.r(i643[6], i643[7], 0, i642, 'BGImage')
  var i645 = i643[8]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 1, i644, '')
  }
  i642.CTA = i644
  request.r(i643[9], i643[10], 0, i642, 'endCard')
  request.r(i643[11], i643[12], 0, i642, 'target')
  i642.currentClick = i643[13]
  return i642
}

Deserializers["AudioController"] = function (request, data, root) {
  var i648 = root || request.c( 'AudioController' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'BGM')
  request.r(i649[2], i649[3], 0, i648, 'musicSource')
  request.r(i649[4], i649[5], 0, i648, 'pool')
  return i648
}

Deserializers["VFXController"] = function (request, data, root) {
  var i650 = root || request.c( 'VFXController' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'bloodPrefab')
  request.r(i651[2], i651[3], 0, i650, 'pool')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i653 = data
  i652.ambientIntensity = i653[0]
  i652.reflectionIntensity = i653[1]
  i652.ambientMode = i653[2]
  i652.ambientLight = new pc.Color(i653[3], i653[4], i653[5], i653[6])
  i652.ambientSkyColor = new pc.Color(i653[7], i653[8], i653[9], i653[10])
  i652.ambientGroundColor = new pc.Color(i653[11], i653[12], i653[13], i653[14])
  i652.ambientEquatorColor = new pc.Color(i653[15], i653[16], i653[17], i653[18])
  i652.fogColor = new pc.Color(i653[19], i653[20], i653[21], i653[22])
  i652.fogEndDistance = i653[23]
  i652.fogStartDistance = i653[24]
  i652.fogDensity = i653[25]
  i652.fog = !!i653[26]
  request.r(i653[27], i653[28], 0, i652, 'skybox')
  i652.fogMode = i653[29]
  var i655 = i653[30]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i655[i + 0]) );
  }
  i652.lightmaps = i654
  i652.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i653[31], i652.lightProbes)
  i652.lightmapsMode = i653[32]
  i652.mixedBakeMode = i653[33]
  i652.environmentLightingMode = i653[34]
  i652.ambientProbe = new pc.SphericalHarmonicsL2(i653[35])
  request.r(i653[36], i653[37], 0, i652, 'customReflection')
  request.r(i653[38], i653[39], 0, i652, 'defaultReflection')
  i652.defaultReflectionMode = i653[40]
  i652.defaultReflectionResolution = i653[41]
  i652.sunLightObjectId = i653[42]
  i652.pixelLightCount = i653[43]
  i652.defaultReflectionHDR = !!i653[44]
  i652.hasLightDataAsset = !!i653[45]
  i652.hasManualGenerate = !!i653[46]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'lightmapColor')
  request.r(i659[2], i659[3], 0, i658, 'lightmapDirection')
  request.r(i659[4], i659[5], 0, i658, 'shadowMask')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i660 = root || new UnityEngine.LightProbes()
  var i661 = data
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i669 = data
  i668.name = i669[0]
  i668.bounciness = i669[1]
  i668.friction = i669[2]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i671 = data
  var i673 = i671[0]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i673.length; i += 1) {
    i672.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i673[i + 0]));
  }
  i670.ShaderCompilationErrors = i672
  i670.name = i671[1]
  i670.guid = i671[2]
  var i675 = i671[3]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( i675[i + 0] );
  }
  i670.shaderDefinedKeywords = i674
  var i677 = i671[4]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i677[i + 0]) );
  }
  i670.passes = i676
  var i679 = i671[5]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i679[i + 0]) );
  }
  i670.usePasses = i678
  var i681 = i671[6]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i681[i + 0]) );
  }
  i670.defaultParameterValues = i680
  request.r(i671[7], i671[8], 0, i670, 'unityFallbackShader')
  i670.readDepth = !!i671[9]
  i670.hasDepthOnlyPass = !!i671[10]
  i670.isCreatedByShaderGraph = !!i671[11]
  i670.disableBatching = !!i671[12]
  i670.compiled = !!i671[13]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i685 = data
  i684.shaderName = i685[0]
  i684.errorMessage = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i690 = root || new pc.UnityShaderPass()
  var i691 = data
  i690.id = i691[0]
  i690.subShaderIndex = i691[1]
  i690.name = i691[2]
  i690.passType = i691[3]
  i690.grabPassTextureName = i691[4]
  i690.usePass = !!i691[5]
  i690.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[6], i690.zTest)
  i690.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[7], i690.zWrite)
  i690.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[8], i690.culling)
  i690.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i691[9], i690.blending)
  i690.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i691[10], i690.alphaBlending)
  i690.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[11], i690.colorWriteMask)
  i690.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[12], i690.offsetUnits)
  i690.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[13], i690.offsetFactor)
  i690.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[14], i690.stencilRef)
  i690.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[15], i690.stencilReadMask)
  i690.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i691[16], i690.stencilWriteMask)
  i690.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i691[17], i690.stencilOp)
  i690.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i691[18], i690.stencilOpFront)
  i690.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i691[19], i690.stencilOpBack)
  var i693 = i691[20]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i693[i + 0]) );
  }
  i690.tags = i692
  var i695 = i691[21]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( i695[i + 0] );
  }
  i690.passDefinedKeywords = i694
  var i697 = i691[22]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i697[i + 0]) );
  }
  i690.passDefinedKeywordGroups = i696
  var i699 = i691[23]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i699[i + 0]) );
  }
  i690.variants = i698
  var i701 = i691[24]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i701[i + 0]) );
  }
  i690.excludedVariants = i700
  i690.hasDepthReader = !!i691[25]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i703 = data
  i702.val = i703[0]
  i702.name = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i705 = data
  i704.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[0], i704.src)
  i704.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[1], i704.dst)
  i704.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i705[2], i704.op)
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i707 = data
  i706.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[0], i706.pass)
  i706.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[1], i706.fail)
  i706.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[2], i706.zFail)
  i706.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i707[3], i706.comp)
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i711 = data
  i710.name = i711[0]
  i710.value = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i715 = data
  var i717 = i715[0]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i714.keywords = i716
  i714.hasDiscard = !!i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i721 = data
  i720.passId = i721[0]
  i720.subShaderIndex = i721[1]
  var i723 = i721[2]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( i723[i + 0] );
  }
  i720.keywords = i722
  i720.vertexProgram = i721[3]
  i720.fragmentProgram = i721[4]
  i720.exportedForWebGl2 = !!i721[5]
  i720.readDepth = !!i721[6]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'shader')
  i726.pass = i727[2]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i731 = data
  i730.name = i731[0]
  i730.type = i731[1]
  i730.value = new pc.Vec4( i731[2], i731[3], i731[4], i731[5] )
  i730.textureValue = i731[6]
  i730.shaderPropertyFlag = i731[7]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i733 = data
  i732.name = i733[0]
  request.r(i733[1], i733[2], 0, i732, 'texture')
  i732.aabb = i733[3]
  i732.vertices = i733[4]
  i732.triangles = i733[5]
  i732.textureRect = UnityEngine.Rect.MinMaxRect(i733[6], i733[7], i733[8], i733[9])
  i732.packedRect = UnityEngine.Rect.MinMaxRect(i733[10], i733[11], i733[12], i733[13])
  i732.border = new pc.Vec4( i733[14], i733[15], i733[16], i733[17] )
  i732.transparency = i733[18]
  i732.bounds = i733[19]
  i732.pixelsPerUnit = i733[20]
  i732.textureWidth = i733[21]
  i732.textureHeight = i733[22]
  i732.nativeSize = new pc.Vec2( i733[23], i733[24] )
  i732.pivot = new pc.Vec2( i733[25], i733[26] )
  i732.textureRectOffset = new pc.Vec2( i733[27], i733[28] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i735 = data
  i734.name = i735[0]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i737 = data
  i736.name = i737[0]
  i736.ascent = i737[1]
  i736.originalLineHeight = i737[2]
  i736.fontSize = i737[3]
  var i739 = i737[4]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i739[i + 0]) );
  }
  i736.characterInfo = i738
  request.r(i737[5], i737[6], 0, i736, 'texture')
  i736.originalFontSize = i737[7]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i743 = data
  i742.index = i743[0]
  i742.advance = i743[1]
  i742.bearing = i743[2]
  i742.glyphWidth = i743[3]
  i742.glyphHeight = i743[4]
  i742.minX = i743[5]
  i742.maxX = i743[6]
  i742.minY = i743[7]
  i742.maxY = i743[8]
  i742.uvBottomLeftX = i743[9]
  i742.uvBottomLeftY = i743[10]
  i742.uvBottomRightX = i743[11]
  i742.uvBottomRightY = i743[12]
  i742.uvTopLeftX = i743[13]
  i742.uvTopLeftY = i743[14]
  i742.uvTopRightX = i743[15]
  i742.uvTopRightY = i743[16]
  return i742
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i744 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i745 = data
  i744.useSafeMode = !!i745[0]
  i744.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i745[1], i744.safeModeOptions)
  i744.timeScale = i745[2]
  i744.unscaledTimeScale = i745[3]
  i744.useSmoothDeltaTime = !!i745[4]
  i744.maxSmoothUnscaledTime = i745[5]
  i744.rewindCallbackMode = i745[6]
  i744.showUnityEditorReport = !!i745[7]
  i744.logBehaviour = i745[8]
  i744.drawGizmos = !!i745[9]
  i744.defaultRecyclable = !!i745[10]
  i744.defaultAutoPlay = i745[11]
  i744.defaultUpdateType = i745[12]
  i744.defaultTimeScaleIndependent = !!i745[13]
  i744.defaultEaseType = i745[14]
  i744.defaultEaseOvershootOrAmplitude = i745[15]
  i744.defaultEasePeriod = i745[16]
  i744.defaultAutoKill = !!i745[17]
  i744.defaultLoopType = i745[18]
  i744.debugMode = !!i745[19]
  i744.debugStoreTargetId = !!i745[20]
  i744.showPreviewPanel = !!i745[21]
  i744.storeSettingsLocation = i745[22]
  i744.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i745[23], i744.modules)
  i744.createASMDEF = !!i745[24]
  i744.showPlayingTweens = !!i745[25]
  i744.showPausedTweens = !!i745[26]
  return i744
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i746 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i747 = data
  i746.logBehaviour = i747[0]
  i746.nestedTweenFailureBehaviour = i747[1]
  return i746
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i748 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i749 = data
  i748.showPanel = !!i749[0]
  i748.audioEnabled = !!i749[1]
  i748.physicsEnabled = !!i749[2]
  i748.physics2DEnabled = !!i749[3]
  i748.spriteEnabled = !!i749[4]
  i748.uiEnabled = !!i749[5]
  i748.textMeshProEnabled = !!i749[6]
  i748.tk2DEnabled = !!i749[7]
  i748.deAudioEnabled = !!i749[8]
  i748.deUnityExtendedEnabled = !!i749[9]
  i748.epoOutlineEnabled = !!i749[10]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i751 = data
  var i753 = i751[0]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i753[i + 0]) );
  }
  i750.files = i752
  i750.componentToPrefabIds = i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i757 = data
  i756.path = i757[0]
  request.r(i757[1], i757[2], 0, i756, 'unityObject')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i759 = data
  var i761 = i759[0]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i761[i + 0]) );
  }
  i758.scriptsExecutionOrder = i760
  var i763 = i759[1]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i763[i + 0]) );
  }
  i758.sortingLayers = i762
  var i765 = i759[2]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i765[i + 0]) );
  }
  i758.cullingLayers = i764
  i758.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i759[3], i758.timeSettings)
  i758.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i759[4], i758.physicsSettings)
  i758.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i759[5], i758.physics2DSettings)
  i758.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i759[6], i758.qualitySettings)
  i758.enableRealtimeShadows = !!i759[7]
  i758.enableAutoInstancing = !!i759[8]
  i758.enableStaticBatching = !!i759[9]
  i758.enableDynamicBatching = !!i759[10]
  i758.usePreservativeDynamicBatching = !!i759[11]
  i758.lightmapEncodingQuality = i759[12]
  i758.desiredColorSpace = i759[13]
  var i767 = i759[14]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i758.allTags = i766
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i771 = data
  i770.name = i771[0]
  i770.value = i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i775 = data
  i774.id = i775[0]
  i774.name = i775[1]
  i774.value = i775[2]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i779 = data
  i778.id = i779[0]
  i778.name = i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i781 = data
  i780.fixedDeltaTime = i781[0]
  i780.maximumDeltaTime = i781[1]
  i780.timeScale = i781[2]
  i780.maximumParticleTimestep = i781[3]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i783 = data
  i782.gravity = new pc.Vec3( i783[0], i783[1], i783[2] )
  i782.defaultSolverIterations = i783[3]
  i782.bounceThreshold = i783[4]
  i782.autoSyncTransforms = !!i783[5]
  i782.autoSimulation = !!i783[6]
  var i785 = i783[7]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i785[i + 0]) );
  }
  i782.collisionMatrix = i784
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i789 = data
  i788.enabled = !!i789[0]
  i788.layerId = i789[1]
  i788.otherLayerId = i789[2]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'material')
  i790.gravity = new pc.Vec2( i791[2], i791[3] )
  i790.positionIterations = i791[4]
  i790.velocityIterations = i791[5]
  i790.velocityThreshold = i791[6]
  i790.maxLinearCorrection = i791[7]
  i790.maxAngularCorrection = i791[8]
  i790.maxTranslationSpeed = i791[9]
  i790.maxRotationSpeed = i791[10]
  i790.baumgarteScale = i791[11]
  i790.baumgarteTOIScale = i791[12]
  i790.timeToSleep = i791[13]
  i790.linearSleepTolerance = i791[14]
  i790.angularSleepTolerance = i791[15]
  i790.defaultContactOffset = i791[16]
  i790.autoSimulation = !!i791[17]
  i790.queriesHitTriggers = !!i791[18]
  i790.queriesStartInColliders = !!i791[19]
  i790.callbacksOnDisable = !!i791[20]
  i790.reuseCollisionCallbacks = !!i791[21]
  i790.autoSyncTransforms = !!i791[22]
  var i793 = i791[23]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i793[i + 0]) );
  }
  i790.collisionMatrix = i792
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i797 = data
  i796.enabled = !!i797[0]
  i796.layerId = i797[1]
  i796.otherLayerId = i797[2]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i799 = data
  var i801 = i799[0]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i801[i + 0]) );
  }
  i798.qualityLevels = i800
  var i803 = i799[1]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i798.names = i802
  i798.shadows = i799[2]
  i798.anisotropicFiltering = i799[3]
  i798.antiAliasing = i799[4]
  i798.lodBias = i799[5]
  i798.shadowCascades = i799[6]
  i798.shadowDistance = i799[7]
  i798.shadowmaskMode = i799[8]
  i798.shadowProjection = i799[9]
  i798.shadowResolution = i799[10]
  i798.softParticles = !!i799[11]
  i798.softVegetation = !!i799[12]
  i798.activeColorSpace = i799[13]
  i798.desiredColorSpace = i799[14]
  i798.masterTextureLimit = i799[15]
  i798.maxQueuedFrames = i799[16]
  i798.particleRaycastBudget = i799[17]
  i798.pixelLightCount = i799[18]
  i798.realtimeReflectionProbes = !!i799[19]
  i798.shadowCascade2Split = i799[20]
  i798.shadowCascade4Split = new pc.Vec3( i799[21], i799[22], i799[23] )
  i798.streamingMipmapsActive = !!i799[24]
  i798.vSyncCount = i799[25]
  i798.asyncUploadBufferSize = i799[26]
  i798.asyncUploadTimeSlice = i799[27]
  i798.billboardsFaceCameraPosition = !!i799[28]
  i798.shadowNearPlaneOffset = i799[29]
  i798.streamingMipmapsMemoryBudget = i799[30]
  i798.maximumLODLevel = i799[31]
  i798.streamingMipmapsAddAllCameras = !!i799[32]
  i798.streamingMipmapsMaxLevelReduction = i799[33]
  i798.streamingMipmapsRenderersPerFrame = i799[34]
  i798.resolutionScalingFixedDPIFactor = i799[35]
  i798.streamingMipmapsMaxFileIORequests = i799[36]
  i798.currentQualityLevel = i799[37]
  return i798
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'm_ObjectArgument')
  i806.m_ObjectArgumentAssemblyTypeName = i807[2]
  i806.m_IntArgument = i807[3]
  i806.m_FloatArgument = i807[4]
  i806.m_StringArgument = i807[5]
  i806.m_BoolArgument = !!i807[6]
  return i806
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[56],"57":[6],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[24],"66":[24],"67":[24],"68":[24],"69":[24],"70":[24],"29":[24],"71":[24],"72":[24],"31":[24],"73":[24],"74":[24],"75":[24],"76":[6],"77":[78],"79":[80],"81":[80],"14":[13],"82":[20],"83":[6],"84":[85],"86":[13],"87":[17,13],"88":[78],"89":[17,13],"90":[13],"91":[13],"92":[78,13],"93":[13,17],"94":[95],"96":[95],"97":[95],"98":[13],"99":[13],"16":[14],"38":[17,13],"18":[13],"15":[14],"100":[13],"101":[13],"102":[13],"103":[13],"104":[13],"105":[13],"106":[13],"107":[13],"108":[13],"19":[17,13],"109":[13],"110":[13],"111":[13],"112":[13],"39":[17,13],"113":[13],"114":[11],"115":[11],"12":[11],"116":[11],"117":[6],"118":[6]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraFollow","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEngine.Rigidbody2D","PlayerController","UnityEngine.GameObject","UnityEngine.AudioSource","UnityEngine.PhysicsMaterial2D","UnityEngine.HingeJoint2D","BalanceController","UnityEngine.TargetJoint2D","DG.Tweening.DOTweenAnimation","MonsterController","UnityEngine.AudioClip","BodyPart","Potion","UnityEngine.CircleCollider2D","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","GameController","TargetController","LunaController","AudioController","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "10/15/2026 07:48:52";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2610_TamNTM_SRP_V07_HoaiTT";

Deserializers.lunaAppID = "42814";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1757";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4528";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "b5aa8ff1-d365-4f79-a04f-2e73ce9c3d2a";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


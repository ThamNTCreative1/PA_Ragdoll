var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointSpring' )
  var i441 = data
  i440.spring = i441[0]
  i440.damper = i441[1]
  i440.targetPosition = i441[2]
  return i440
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointMotor' )
  var i443 = data
  i442.m_TargetVelocity = i443[0]
  i442.m_Force = i443[1]
  i442.m_FreeSpin = i443[2]
  return i442
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointLimits' )
  var i445 = data
  i444.m_Min = i445[0]
  i444.m_Max = i445[1]
  i444.m_Bounciness = i445[2]
  i444.m_BounceMinVelocity = i445[3]
  i444.m_ContactDistance = i445[4]
  i444.minBounce = i445[5]
  i444.maxBounce = i445[6]
  return i444
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointDrive' )
  var i447 = data
  i446.m_PositionSpring = i447[0]
  i446.m_PositionDamper = i447[1]
  i446.m_MaximumForce = i447[2]
  i446.m_UseAcceleration = i447[3]
  return i446
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i449 = data
  i448.m_Spring = i449[0]
  i448.m_Damper = i449[1]
  return i448
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i451 = data
  i450.m_Limit = i451[0]
  i450.m_Bounciness = i451[1]
  i450.m_ContactDistance = i451[2]
  return i450
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i453 = data
  i452.m_ExtremumSlip = i453[0]
  i452.m_ExtremumValue = i453[1]
  i452.m_AsymptoteSlip = i453[2]
  i452.m_AsymptoteValue = i453[3]
  i452.m_Stiffness = i453[4]
  return i452
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i455 = data
  i454.m_LowerAngle = i455[0]
  i454.m_UpperAngle = i455[1]
  return i454
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i457 = data
  i456.m_MotorSpeed = i457[0]
  i456.m_MaximumMotorTorque = i457[1]
  return i456
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i459 = data
  i458.m_DampingRatio = i459[0]
  i458.m_Frequency = i459[1]
  i458.m_Angle = i459[2]
  return i458
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i461 = data
  i460.m_LowerTranslation = i461[0]
  i460.m_UpperTranslation = i461[1]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i464 = root || new pc.UnityMaterial()
  var i465 = data
  i464.name = i465[0]
  request.r(i465[1], i465[2], 0, i464, 'shader')
  i464.renderQueue = i465[3]
  i464.enableInstancing = !!i465[4]
  var i467 = i465[5]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i467[i + 0]) );
  }
  i464.floatParameters = i466
  var i469 = i465[6]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i469[i + 0]) );
  }
  i464.colorParameters = i468
  var i471 = i465[7]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i471[i + 0]) );
  }
  i464.vectorParameters = i470
  var i473 = i465[8]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i473[i + 0]) );
  }
  i464.textureParameters = i472
  var i475 = i465[9]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i475[i + 0]) );
  }
  i464.materialFlags = i474
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i479 = data
  i478.name = i479[0]
  i478.value = i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i483 = data
  i482.name = i483[0]
  i482.value = new pc.Color(i483[1], i483[2], i483[3], i483[4])
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i487 = data
  i486.name = i487[0]
  i486.value = new pc.Vec4( i487[1], i487[2], i487[3], i487[4] )
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i491 = data
  i490.name = i491[0]
  request.r(i491[1], i491[2], 0, i490, 'value')
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i495 = data
  i494.name = i495[0]
  i494.enabled = !!i495[1]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i497 = data
  i496.position = new pc.Vec3( i497[0], i497[1], i497[2] )
  i496.scale = new pc.Vec3( i497[3], i497[4], i497[5] )
  i496.rotation = new pc.Quat(i497[6], i497[7], i497[8], i497[9])
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i499 = data
  i498.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i499[0], i498.main)
  i498.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i499[1], i498.colorBySpeed)
  i498.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i499[2], i498.colorOverLifetime)
  i498.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i499[3], i498.emission)
  i498.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i499[4], i498.rotationBySpeed)
  i498.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i499[5], i498.rotationOverLifetime)
  i498.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i499[6], i498.shape)
  i498.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i499[7], i498.sizeBySpeed)
  i498.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i499[8], i498.sizeOverLifetime)
  i498.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i499[9], i498.textureSheetAnimation)
  i498.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i499[10], i498.velocityOverLifetime)
  i498.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i499[11], i498.noise)
  i498.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i499[12], i498.inheritVelocity)
  i498.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i499[13], i498.forceOverLifetime)
  i498.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i499[14], i498.limitVelocityOverLifetime)
  i498.useAutoRandomSeed = !!i499[15]
  i498.randomSeed = i499[16]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i500 = root || new pc.ParticleSystemMain()
  var i501 = data
  i500.duration = i501[0]
  i500.loop = !!i501[1]
  i500.prewarm = !!i501[2]
  i500.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[3], i500.startDelay)
  i500.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[4], i500.startLifetime)
  i500.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[5], i500.startSpeed)
  i500.startSize3D = !!i501[6]
  i500.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[7], i500.startSizeX)
  i500.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[8], i500.startSizeY)
  i500.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[9], i500.startSizeZ)
  i500.startRotation3D = !!i501[10]
  i500.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[11], i500.startRotationX)
  i500.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[12], i500.startRotationY)
  i500.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[13], i500.startRotationZ)
  i500.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i501[14], i500.startColor)
  i500.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i501[15], i500.gravityModifier)
  i500.simulationSpace = i501[16]
  request.r(i501[17], i501[18], 0, i500, 'customSimulationSpace')
  i500.simulationSpeed = i501[19]
  i500.useUnscaledTime = !!i501[20]
  i500.scalingMode = i501[21]
  i500.playOnAwake = !!i501[22]
  i500.maxParticles = i501[23]
  i500.emitterVelocityMode = i501[24]
  i500.stopAction = i501[25]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i502 = root || new pc.MinMaxCurve()
  var i503 = data
  i502.mode = i503[0]
  i502.curveMin = new pc.AnimationCurve( { keys_flow: i503[1] } )
  i502.curveMax = new pc.AnimationCurve( { keys_flow: i503[2] } )
  i502.curveMultiplier = i503[3]
  i502.constantMin = i503[4]
  i502.constantMax = i503[5]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i504 = root || new pc.MinMaxGradient()
  var i505 = data
  i504.mode = i505[0]
  i504.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i505[1], i504.gradientMin)
  i504.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i505[2], i504.gradientMax)
  i504.colorMin = new pc.Color(i505[3], i505[4], i505[5], i505[6])
  i504.colorMax = new pc.Color(i505[7], i505[8], i505[9], i505[10])
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i507 = data
  i506.mode = i507[0]
  var i509 = i507[1]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i509[i + 0]) );
  }
  i506.colorKeys = i508
  var i511 = i507[2]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i511[i + 0]) );
  }
  i506.alphaKeys = i510
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i512 = root || new pc.ParticleSystemColorBySpeed()
  var i513 = data
  i512.enabled = !!i513[0]
  i512.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i513[1], i512.color)
  i512.range = new pc.Vec2( i513[2], i513[3] )
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i517 = data
  i516.color = new pc.Color(i517[0], i517[1], i517[2], i517[3])
  i516.time = i517[4]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i521 = data
  i520.alpha = i521[0]
  i520.time = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemColorOverLifetime()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i523[1], i522.color)
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemEmitter()
  var i525 = data
  i524.enabled = !!i525[0]
  i524.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[1], i524.rateOverTime)
  i524.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[2], i524.rateOverDistance)
  var i527 = i525[3]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i527[i + 0]) );
  }
  i524.bursts = i526
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i530 = root || new pc.ParticleSystemBurst()
  var i531 = data
  i530.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[0], i530.count)
  i530.cycleCount = i531[1]
  i530.minCount = i531[2]
  i530.maxCount = i531[3]
  i530.repeatInterval = i531[4]
  i530.time = i531[5]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i532 = root || new pc.ParticleSystemRotationBySpeed()
  var i533 = data
  i532.enabled = !!i533[0]
  i532.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[1], i532.x)
  i532.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[2], i532.y)
  i532.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[3], i532.z)
  i532.separateAxes = !!i533[4]
  i532.range = new pc.Vec2( i533[5], i533[6] )
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i534 = root || new pc.ParticleSystemRotationOverLifetime()
  var i535 = data
  i534.enabled = !!i535[0]
  i534.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[1], i534.x)
  i534.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[2], i534.y)
  i534.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[3], i534.z)
  i534.separateAxes = !!i535[4]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemShape()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.shapeType = i537[1]
  i536.randomDirectionAmount = i537[2]
  i536.sphericalDirectionAmount = i537[3]
  i536.randomPositionAmount = i537[4]
  i536.alignToDirection = !!i537[5]
  i536.radius = i537[6]
  i536.radiusMode = i537[7]
  i536.radiusSpread = i537[8]
  i536.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[9], i536.radiusSpeed)
  i536.radiusThickness = i537[10]
  i536.angle = i537[11]
  i536.length = i537[12]
  i536.boxThickness = new pc.Vec3( i537[13], i537[14], i537[15] )
  i536.meshShapeType = i537[16]
  request.r(i537[17], i537[18], 0, i536, 'mesh')
  request.r(i537[19], i537[20], 0, i536, 'meshRenderer')
  request.r(i537[21], i537[22], 0, i536, 'skinnedMeshRenderer')
  i536.useMeshMaterialIndex = !!i537[23]
  i536.meshMaterialIndex = i537[24]
  i536.useMeshColors = !!i537[25]
  i536.normalOffset = i537[26]
  i536.arc = i537[27]
  i536.arcMode = i537[28]
  i536.arcSpread = i537[29]
  i536.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[30], i536.arcSpeed)
  i536.donutRadius = i537[31]
  i536.position = new pc.Vec3( i537[32], i537[33], i537[34] )
  i536.rotation = new pc.Vec3( i537[35], i537[36], i537[37] )
  i536.scale = new pc.Vec3( i537[38], i537[39], i537[40] )
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemSizeBySpeed()
  var i539 = data
  i538.enabled = !!i539[0]
  i538.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[1], i538.x)
  i538.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[2], i538.y)
  i538.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[3], i538.z)
  i538.separateAxes = !!i539[4]
  i538.range = new pc.Vec2( i539[5], i539[6] )
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemSizeOverLifetime()
  var i541 = data
  i540.enabled = !!i541[0]
  i540.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[1], i540.x)
  i540.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[2], i540.y)
  i540.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[3], i540.z)
  i540.separateAxes = !!i541[4]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i542 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i543 = data
  i542.enabled = !!i543[0]
  i542.mode = i543[1]
  i542.animation = i543[2]
  i542.numTilesX = i543[3]
  i542.numTilesY = i543[4]
  i542.useRandomRow = !!i543[5]
  i542.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[6], i542.frameOverTime)
  i542.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[7], i542.startFrame)
  i542.cycleCount = i543[8]
  i542.rowIndex = i543[9]
  i542.flipU = i543[10]
  i542.flipV = i543[11]
  i542.spriteCount = i543[12]
  var i545 = i543[13]
  var i544 = []
  for(var i = 0; i < i545.length; i += 2) {
  request.r(i545[i + 0], i545[i + 1], 2, i544, '')
  }
  i542.sprites = i544
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i548 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i549 = data
  i548.enabled = !!i549[0]
  i548.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[1], i548.x)
  i548.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[2], i548.y)
  i548.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[3], i548.z)
  i548.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[4], i548.radial)
  i548.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[5], i548.speedModifier)
  i548.space = i549[6]
  i548.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[7], i548.orbitalX)
  i548.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[8], i548.orbitalY)
  i548.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[9], i548.orbitalZ)
  i548.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[10], i548.orbitalOffsetX)
  i548.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[11], i548.orbitalOffsetY)
  i548.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[12], i548.orbitalOffsetZ)
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemNoise()
  var i551 = data
  i550.enabled = !!i551[0]
  i550.separateAxes = !!i551[1]
  i550.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[2], i550.strengthX)
  i550.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[3], i550.strengthY)
  i550.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[4], i550.strengthZ)
  i550.frequency = i551[5]
  i550.damping = !!i551[6]
  i550.octaveCount = i551[7]
  i550.octaveMultiplier = i551[8]
  i550.octaveScale = i551[9]
  i550.quality = i551[10]
  i550.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[11], i550.scrollSpeed)
  i550.scrollSpeedMultiplier = i551[12]
  i550.remapEnabled = !!i551[13]
  i550.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[14], i550.remapX)
  i550.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[15], i550.remapY)
  i550.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[16], i550.remapZ)
  i550.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[17], i550.positionAmount)
  i550.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[18], i550.rotationAmount)
  i550.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[19], i550.sizeAmount)
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemInheritVelocity()
  var i553 = data
  i552.enabled = !!i553[0]
  i552.mode = i553[1]
  i552.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[2], i552.curve)
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemForceOverLifetime()
  var i555 = data
  i554.enabled = !!i555[0]
  i554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[1], i554.x)
  i554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[2], i554.y)
  i554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.z)
  i554.space = i555[4]
  i554.randomized = !!i555[5]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[1], i556.limit)
  i556.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[2], i556.limitX)
  i556.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[3], i556.limitY)
  i556.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[4], i556.limitZ)
  i556.dampen = i557[5]
  i556.separateAxes = !!i557[6]
  i556.space = i557[7]
  i556.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[8], i556.drag)
  i556.multiplyDragByParticleSize = !!i557[9]
  i556.multiplyDragByParticleVelocity = !!i557[10]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'mesh')
  i558.meshCount = i559[2]
  i558.activeVertexStreamsCount = i559[3]
  i558.alignment = i559[4]
  i558.renderMode = i559[5]
  i558.sortMode = i559[6]
  i558.lengthScale = i559[7]
  i558.velocityScale = i559[8]
  i558.cameraVelocityScale = i559[9]
  i558.normalDirection = i559[10]
  i558.sortingFudge = i559[11]
  i558.minParticleSize = i559[12]
  i558.maxParticleSize = i559[13]
  i558.pivot = new pc.Vec3( i559[14], i559[15], i559[16] )
  request.r(i559[17], i559[18], 0, i558, 'trailMaterial')
  i558.applyActiveColorSpace = !!i559[19]
  i558.enabled = !!i559[20]
  request.r(i559[21], i559[22], 0, i558, 'sharedMaterial')
  var i561 = i559[23]
  var i560 = []
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 2, i560, '')
  }
  i558.sharedMaterials = i560
  i558.receiveShadows = !!i559[24]
  i558.shadowCastingMode = i559[25]
  i558.sortingLayerID = i559[26]
  i558.sortingOrder = i559[27]
  i558.lightmapIndex = i559[28]
  i558.lightmapSceneIndex = i559[29]
  i558.lightmapScaleOffset = new pc.Vec4( i559[30], i559[31], i559[32], i559[33] )
  i558.lightProbeUsage = i559[34]
  i558.reflectionProbeUsage = i559[35]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i565 = data
  i564.name = i565[0]
  i564.tagId = i565[1]
  i564.enabled = !!i565[2]
  i564.isStatic = !!i565[3]
  i564.layer = i565[4]
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

Deserializers["CameraShake"] = function (request, data, root) {
  var i570 = root || request.c( 'CameraShake' )
  var i571 = data
  return i570
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'm_FirstSelected')
  i572.m_sendNavigationEvents = !!i573[2]
  i572.m_DragThreshold = i573[3]
  return i572
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i575 = data
  i574.m_HorizontalAxis = i575[0]
  i574.m_VerticalAxis = i575[1]
  i574.m_SubmitButton = i575[2]
  i574.m_CancelButton = i575[3]
  i574.m_InputActionsPerSecond = i575[4]
  i574.m_RepeatDelay = i575[5]
  i574.m_ForceModuleActive = !!i575[6]
  i574.m_SendPointerHoverToParent = !!i575[7]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i577 = data
  i576.pivot = new pc.Vec2( i577[0], i577[1] )
  i576.anchorMin = new pc.Vec2( i577[2], i577[3] )
  i576.anchorMax = new pc.Vec2( i577[4], i577[5] )
  i576.sizeDelta = new pc.Vec2( i577[6], i577[7] )
  i576.anchoredPosition3D = new pc.Vec3( i577[8], i577[9], i577[10] )
  i576.rotation = new pc.Quat(i577[11], i577[12], i577[13], i577[14])
  i576.scale = new pc.Vec3( i577[15], i577[16], i577[17] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i579 = data
  i578.planeDistance = i579[0]
  i578.referencePixelsPerUnit = i579[1]
  i578.isFallbackOverlay = !!i579[2]
  i578.renderMode = i579[3]
  i578.renderOrder = i579[4]
  i578.sortingLayerName = i579[5]
  i578.sortingOrder = i579[6]
  i578.scaleFactor = i579[7]
  request.r(i579[8], i579[9], 0, i578, 'worldCamera')
  i578.overrideSorting = !!i579[10]
  i578.pixelPerfect = !!i579[11]
  i578.targetDisplay = i579[12]
  i578.overridePixelPerfect = !!i579[13]
  i578.enabled = !!i579[14]
  return i578
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i581 = data
  i580.m_UiScaleMode = i581[0]
  i580.m_ReferencePixelsPerUnit = i581[1]
  i580.m_ScaleFactor = i581[2]
  i580.m_ReferenceResolution = new pc.Vec2( i581[3], i581[4] )
  i580.m_ScreenMatchMode = i581[5]
  i580.m_MatchWidthOrHeight = i581[6]
  i580.m_PhysicalUnit = i581[7]
  i580.m_FallbackScreenDPI = i581[8]
  i580.m_DefaultSpriteDPI = i581[9]
  i580.m_DynamicPixelsPerUnit = i581[10]
  i580.m_PresetInfoIsWorld = !!i581[11]
  return i580
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i583 = data
  i582.m_IgnoreReversedGraphics = !!i583[0]
  i582.m_BlockingObjects = i583[1]
  i582.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i583[2] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i585 = data
  i584.cullTransparentMesh = !!i585[0]
  return i584
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'm_Texture')
  i586.m_UVRect = UnityEngine.Rect.MinMaxRect(i587[2], i587[3], i587[4], i587[5])
  request.r(i587[6], i587[7], 0, i586, 'm_Material')
  i586.m_Maskable = !!i587[8]
  i586.m_Color = new pc.Color(i587[9], i587[10], i587[11], i587[12])
  i586.m_RaycastTarget = !!i587[13]
  i586.m_RaycastPadding = new pc.Vec4( i587[14], i587[15], i587[16], i587[17] )
  return i586
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i589 = data
  i588.m_AspectMode = i589[0]
  i588.m_AspectRatio = i589[1]
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

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Button' )
  var i593 = data
  i592.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i593[0], i592.m_OnClick)
  i592.m_Navigation = request.d('UnityEngine.UI.Navigation', i593[1], i592.m_Navigation)
  i592.m_Transition = i593[2]
  i592.m_Colors = request.d('UnityEngine.UI.ColorBlock', i593[3], i592.m_Colors)
  i592.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i593[4], i592.m_SpriteState)
  i592.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i593[5], i592.m_AnimationTriggers)
  i592.m_Interactable = !!i593[6]
  request.r(i593[7], i593[8], 0, i592, 'm_TargetGraphic')
  return i592
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i595 = data
  i594.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i595[0], i594.m_PersistentCalls)
  return i594
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i597 = data
  var i599 = i597[0]
  var i598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i599.length; i += 1) {
    i598.add(request.d('UnityEngine.Events.PersistentCall', i599[i + 0]));
  }
  i596.m_Calls = i598
  return i596
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'm_Target')
  i602.m_TargetAssemblyTypeName = i603[2]
  i602.m_MethodName = i603[3]
  i602.m_Mode = i603[4]
  i602.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i603[5], i602.m_Arguments)
  i602.m_CallState = i603[6]
  return i602
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i605 = data
  i604.m_Mode = i605[0]
  i604.m_WrapAround = !!i605[1]
  request.r(i605[2], i605[3], 0, i604, 'm_SelectOnUp')
  request.r(i605[4], i605[5], 0, i604, 'm_SelectOnDown')
  request.r(i605[6], i605[7], 0, i604, 'm_SelectOnLeft')
  request.r(i605[8], i605[9], 0, i604, 'm_SelectOnRight')
  return i604
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i607 = data
  i606.m_NormalColor = new pc.Color(i607[0], i607[1], i607[2], i607[3])
  i606.m_HighlightedColor = new pc.Color(i607[4], i607[5], i607[6], i607[7])
  i606.m_PressedColor = new pc.Color(i607[8], i607[9], i607[10], i607[11])
  i606.m_SelectedColor = new pc.Color(i607[12], i607[13], i607[14], i607[15])
  i606.m_DisabledColor = new pc.Color(i607[16], i607[17], i607[18], i607[19])
  i606.m_ColorMultiplier = i607[20]
  i606.m_FadeDuration = i607[21]
  return i606
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'm_HighlightedSprite')
  request.r(i609[2], i609[3], 0, i608, 'm_PressedSprite')
  request.r(i609[4], i609[5], 0, i608, 'm_SelectedSprite')
  request.r(i609[6], i609[7], 0, i608, 'm_DisabledSprite')
  return i608
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i611 = data
  i610.m_NormalTrigger = i611[0]
  i610.m_HighlightedTrigger = i611[1]
  i610.m_PressedTrigger = i611[2]
  i610.m_SelectedTrigger = i611[3]
  i610.m_DisabledTrigger = i611[4]
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

Deserializers["TutController"] = function (request, data, root) {
  var i616 = root || request.c( 'TutController' )
  var i617 = data
  var i619 = i617[0]
  var i618 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i619.length; i += 2) {
    i618.add(new pc.Vec2( i619[i + 0], i619[i + 1] ));
  }
  i616.movePos = i618
  i616.moveTime = i617[1]
  i616.fromScale = i617[2]
  i616.toScale = i617[3]
  i616.scaleTime = i617[4]
  return i616
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i622 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i623 = data
  i622.targetIsSelf = !!i623[0]
  request.r(i623[1], i623[2], 0, i622, 'targetGO')
  i622.tweenTargetIsTargetGO = !!i623[3]
  i622.delay = i623[4]
  i622.duration = i623[5]
  i622.easeType = i623[6]
  i622.easeCurve = new pc.AnimationCurve( { keys_flow: i623[7] } )
  i622.loopType = i623[8]
  i622.loops = i623[9]
  i622.id = i623[10]
  i622.isRelative = !!i623[11]
  i622.isFrom = !!i623[12]
  i622.isIndependentUpdate = !!i623[13]
  i622.autoKill = !!i623[14]
  i622.autoGenerate = !!i623[15]
  i622.isActive = !!i623[16]
  i622.isValid = !!i623[17]
  request.r(i623[18], i623[19], 0, i622, 'target')
  i622.animationType = i623[20]
  i622.targetType = i623[21]
  i622.forcedTargetType = i623[22]
  i622.autoPlay = !!i623[23]
  i622.useTargetAsV3 = !!i623[24]
  i622.endValueFloat = i623[25]
  i622.endValueV3 = new pc.Vec3( i623[26], i623[27], i623[28] )
  i622.endValueV2 = new pc.Vec2( i623[29], i623[30] )
  i622.endValueColor = new pc.Color(i623[31], i623[32], i623[33], i623[34])
  i622.endValueString = i623[35]
  i622.endValueRect = UnityEngine.Rect.MinMaxRect(i623[36], i623[37], i623[38], i623[39])
  request.r(i623[40], i623[41], 0, i622, 'endValueTransform')
  i622.optionalBool0 = !!i623[42]
  i622.optionalBool1 = !!i623[43]
  i622.optionalFloat0 = i623[44]
  i622.optionalInt0 = i623[45]
  i622.optionalRotationMode = i623[46]
  i622.optionalScrambleMode = i623[47]
  i622.optionalShakeRandomnessMode = i623[48]
  i622.optionalString = i623[49]
  i622.updateType = i623[50]
  i622.isSpeedBased = !!i623[51]
  i622.hasOnStart = !!i623[52]
  i622.hasOnPlay = !!i623[53]
  i622.hasOnUpdate = !!i623[54]
  i622.hasOnStepComplete = !!i623[55]
  i622.hasOnComplete = !!i623[56]
  i622.hasOnTweenCreated = !!i623[57]
  i622.hasOnRewind = !!i623[58]
  i622.onStart = request.d('UnityEngine.Events.UnityEvent', i623[59], i622.onStart)
  i622.onPlay = request.d('UnityEngine.Events.UnityEvent', i623[60], i622.onPlay)
  i622.onUpdate = request.d('UnityEngine.Events.UnityEvent', i623[61], i622.onUpdate)
  i622.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i623[62], i622.onStepComplete)
  i622.onComplete = request.d('UnityEngine.Events.UnityEvent', i623[63], i622.onComplete)
  i622.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i623[64], i622.onTweenCreated)
  i622.onRewind = request.d('UnityEngine.Events.UnityEvent', i623[65], i622.onRewind)
  return i622
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i625 = data
  i624.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i625[0], i624.m_PersistentCalls)
  return i624
}

Deserializers["FireTutorial"] = function (request, data, root) {
  var i626 = root || request.c( 'FireTutorial' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'hand')
  request.r(i627[2], i627[3], 0, i626, 'monsterRoot')
  request.r(i627[4], i627[5], 0, i626, 'player')
  i626.fingerOffset = new pc.Vec2( i627[6], i627[7] )
  i626.swipeDistance = i627[8]
  i626.swipeSpeed = i627[9]
  i626.pulse = i627[10]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i629 = data
  i628.color = new pc.Color(i629[0], i629[1], i629[2], i629[3])
  request.r(i629[4], i629[5], 0, i628, 'sprite')
  i628.flipX = !!i629[6]
  i628.flipY = !!i629[7]
  i628.drawMode = i629[8]
  i628.size = new pc.Vec2( i629[9], i629[10] )
  i628.tileMode = i629[11]
  i628.adaptiveModeThreshold = i629[12]
  i628.maskInteraction = i629[13]
  i628.spriteSortPoint = i629[14]
  i628.enabled = !!i629[15]
  request.r(i629[16], i629[17], 0, i628, 'sharedMaterial')
  var i631 = i629[18]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.sharedMaterials = i630
  i628.receiveShadows = !!i629[19]
  i628.shadowCastingMode = i629[20]
  i628.sortingLayerID = i629[21]
  i628.sortingOrder = i629[22]
  i628.lightmapIndex = i629[23]
  i628.lightmapSceneIndex = i629[24]
  i628.lightmapScaleOffset = new pc.Vec4( i629[25], i629[26], i629[27], i629[28] )
  i628.lightProbeUsage = i629[29]
  i628.reflectionProbeUsage = i629[30]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i633 = data
  i632.usedByComposite = !!i633[0]
  i632.autoTiling = !!i633[1]
  i632.size = new pc.Vec2( i633[2], i633[3] )
  i632.edgeRadius = i633[4]
  i632.enabled = !!i633[5]
  i632.isTrigger = !!i633[6]
  i632.usedByEffector = !!i633[7]
  i632.density = i633[8]
  i632.offset = new pc.Vec2( i633[9], i633[10] )
  request.r(i633[11], i633[12], 0, i632, 'material')
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i635 = data
  i634.sortingLayerIndex = i635[0]
  i634.sortingOrder = i635[1]
  i634.sortingLayerName = i635[2]
  i634.enabled = !!i635[3]
  return i634
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i636 = root || request.c( 'PlayerController' )
  var i637 = data
  var i639 = i637[0]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i639.length; i += 1) {
    i638.add(request.d('Piece', i639[i + 0]));
  }
  i636.pieces = i638
  request.r(i637[1], i637[2], 0, i636, 'head')
  request.r(i637[3], i637[4], 0, i636, 'deadSFX')
  i636.maxForce = new pc.Vec2( i637[5], i637[6] )
  i636.minForce = new pc.Vec2( i637[7], i637[8] )
  var i641 = i637[9]
  var i640 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i641.length; i += 1) {
    i640.add(request.d('FightOption', i641[i + 0]));
  }
  i636.fightOptions = i640
  request.r(i637[10], i637[11], 0, i636, 'optionTut')
  request.r(i637[12], i637[13], 0, i636, 'attackTut')
  i636.fight = request.d('FightOption', i637[14], i636.fight)
  request.r(i637[15], i637[16], 0, i636, 'clickSound')
  return i636
}

Deserializers["Piece"] = function (request, data, root) {
  var i644 = root || request.c( 'Piece' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'Joint')
  request.r(i645[2], i645[3], 0, i644, 'Rb')
  return i644
}

Deserializers["FightOption"] = function (request, data, root) {
  var i648 = root || request.c( 'FightOption' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'Button')
  request.r(i649[2], i649[3], 0, i648, 'Selected')
  request.r(i649[4], i649[5], 0, i648, 'Controller')
  return i648
}

Deserializers["PlayerHealth"] = function (request, data, root) {
  var i650 = root || request.c( 'PlayerHealth' )
  var i651 = data
  i650.maxHP = i651[0]
  i650.currentHP = i651[1]
  i650.hitColor = new pc.Color(i651[2], i651[3], i651[4], i651[5])
  i650.hitFlashTime = i651[6]
  return i650
}

Deserializers["PlayerZombie"] = function (request, data, root) {
  var i652 = root || request.c( 'PlayerZombie' )
  var i653 = data
  var i655 = i653[0]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('ZombiePart')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('ZombiePart', i655[i + 0]));
  }
  i652.parts = i654
  request.r(i653[1], i653[2], 0, i652, 'zombieSFX')
  i652.loseDelay = i653[3]
  return i652
}

Deserializers["ZombiePart"] = function (request, data, root) {
  var i658 = root || request.c( 'ZombiePart' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'Renderer')
  request.r(i659[2], i659[3], 0, i658, 'Sprite')
  return i658
}

Deserializers["PlayerBite"] = function (request, data, root) {
  var i660 = root || request.c( 'PlayerBite' )
  var i661 = data
  i660.biteDamage = i661[0]
  i660.biteInterval = i661[1]
  request.r(i661[2], i661[3], 0, i660, 'biteSound')
  i660.biteSoundInterval = i661[4]
  return i660
}

Deserializers["PlayerLaunch"] = function (request, data, root) {
  var i662 = root || request.c( 'PlayerLaunch' )
  var i663 = data
  i662.groundMask = UnityEngine.LayerMask.FromIntegerValue( i663[0] )
  i662.minAirTime = i663[1]
  i662.maxLaunchX = i663[2]
  i662.recoverForceMul = i663[3]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i665 = data
  i664.bodyType = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'material')
  i664.simulated = !!i665[3]
  i664.useAutoMass = !!i665[4]
  i664.mass = i665[5]
  i664.drag = i665[6]
  i664.angularDrag = i665[7]
  i664.gravityScale = i665[8]
  i664.collisionDetectionMode = i665[9]
  i664.sleepMode = i665[10]
  i664.constraints = i665[11]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i667 = data
  i666.useLimits = !!i667[0]
  i666.limits = request.d('UnityEngine.JointAngleLimits2D', i667[1], i666.limits)
  i666.useMotor = !!i667[2]
  i666.motor = request.d('UnityEngine.JointMotor2D', i667[3], i666.motor)
  i666.anchor = new pc.Vec2( i667[4], i667[5] )
  i666.connectedAnchor = new pc.Vec2( i667[6], i667[7] )
  i666.autoConfigureConnectedAnchor = !!i667[8]
  request.r(i667[9], i667[10], 0, i666, 'connectedBody')
  i666.breakForce = i667[11]
  i666.breakTorque = i667[12]
  i666.enableCollision = !!i667[13]
  i666.enabled = !!i667[14]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i669 = data
  i668.autoConfigureTarget = !!i669[0]
  i668.target = new pc.Vec2( i669[1], i669[2] )
  i668.anchor = new pc.Vec2( i669[3], i669[4] )
  i668.maxForce = i669[5]
  i668.dampingRatio = i669[6]
  i668.frequency = i669[7]
  request.r(i669[8], i669[9], 0, i668, 'connectedBody')
  i668.breakForce = i669[10]
  i668.breakTorque = i669[11]
  i668.enableCollision = !!i669[12]
  i668.enabled = !!i669[13]
  return i668
}

Deserializers["SawWeapon"] = function (request, data, root) {
  var i670 = root || request.c( 'SawWeapon' )
  var i671 = data
  i670.shake = i671[0]
  i670.raiseAngle = i671[1]
  i670.hitAngle = i671[2]
  i670.raiseTime = i671[3]
  i670.swingTime = i671[4]
  i670.followThroughTime = i671[5]
  i670.recoverTime = i671[6]
  i670.damage = i671[7]
  i670.knockback = !!i671[8]
  i670.knockX = new pc.Vec2( i671[9], i671[10] )
  i670.knockY = new pc.Vec2( i671[11], i671[12] )
  i670.knockSpin = i671[13]
  request.r(i671[14], i671[15], 0, i670, 'hitSound')
  i670.maxBlood = i671[16]
  i670.restAngle = i671[17]
  i670.armGain = i671[18]
  i670.armMaxSpeed = i671[19]
  i670.armTorque = i671[20]
  i670.hitPadding = i671[21]
  request.r(i671[22], i671[23], 0, i670, 'bloodVFX')
  i670.jointReferenceAngle = i671[24]
  request.r(i671[25], i671[26], 0, i670, 'attackSound')
  request.r(i671[27], i671[28], 0, i670, 'spawnPrefab')
  request.r(i671[29], i671[30], 0, i670, 'poolParent')
  return i670
}

Deserializers["FlamethrowerWeapon"] = function (request, data, root) {
  var i672 = root || request.c( 'FlamethrowerWeapon' )
  var i673 = data
  i672.holdAngle = i673[0]
  request.r(i673[1], i673[2], 0, i672, 'nozzle')
  var i675 = i673[3]
  var i674 = []
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 2, i674, '')
  }
  i672.frames = i674
  i672.frameRate = i673[4]
  request.r(i673[5], i673[6], 0, i672, 'emberSprite')
  request.r(i673[7], i673[8], 0, i672, 'smokeSprite')
  i672.minFireTime = i673[9]
  i672.aimTolerance = i673[10]
  i672.fireInterval = i673[11]
  i672.fireballsPerShot = i673[12]
  i672.soundInterval = i673[13]
  i672.fireballSpeed = i673[14]
  i672.fireballGravity = i673[15]
  i672.spread = i673[16]
  i672.fireballSize = i673[17]
  i672.fireballLife = i673[18]
  i672.hitRadius = i673[19]
  i672.groundY = i673[20]
  i672.groundFlameSize = i673[21]
  i672.groundFlameLife = i673[22]
  i672.sortingOrder = i673[23]
  i672.burnDamage = i673[24]
  i672.burnInterval = i673[25]
  i672.burnDuration = i673[26]
  i672.restAngle = i673[27]
  i672.armGain = i673[28]
  i672.armMaxSpeed = i673[29]
  i672.armTorque = i673[30]
  i672.hitPadding = i673[31]
  request.r(i673[32], i673[33], 0, i672, 'bloodVFX')
  i672.jointReferenceAngle = i673[34]
  request.r(i673[35], i673[36], 0, i672, 'attackSound')
  request.r(i673[37], i673[38], 0, i672, 'spawnPrefab')
  request.r(i673[39], i673[40], 0, i672, 'poolParent')
  return i672
}

Deserializers["BatWeapon"] = function (request, data, root) {
  var i676 = root || request.c( 'BatWeapon' )
  var i677 = data
  i676.raiseAngle = i677[0]
  i676.hitAngle = i677[1]
  i676.raiseTime = i677[2]
  i676.swingTime = i677[3]
  i676.followThroughTime = i677[4]
  i676.recoverTime = i677[5]
  i676.damage = i677[6]
  i676.knockback = !!i677[7]
  i676.knockX = new pc.Vec2( i677[8], i677[9] )
  i676.knockY = new pc.Vec2( i677[10], i677[11] )
  i676.knockSpin = i677[12]
  request.r(i677[13], i677[14], 0, i676, 'hitSound')
  i676.maxBlood = i677[15]
  i676.restAngle = i677[16]
  i676.armGain = i677[17]
  i676.armMaxSpeed = i677[18]
  i676.armTorque = i677[19]
  i676.hitPadding = i677[20]
  request.r(i677[21], i677[22], 0, i676, 'bloodVFX')
  i676.jointReferenceAngle = i677[23]
  request.r(i677[24], i677[25], 0, i676, 'attackSound')
  request.r(i677[26], i677[27], 0, i676, 'spawnPrefab')
  request.r(i677[28], i677[29], 0, i676, 'poolParent')
  return i676
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i678 = root || request.c( 'BalanceController' )
  var i679 = data
  i678.targetRotation = i679[0]
  i678.force = i679[1]
  return i678
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i680 = root || request.c( 'MonsterController' )
  var i681 = data
  i680.maxHP = i681[0]
  i680.currentHP = i681[1]
  var i683 = i681[2]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d('Piece', i683[i + 0]));
  }
  i680.pieces = i682
  request.r(i681[3], i681[4], 0, i680, 'deadSFX')
  i680.maxForce = new pc.Vec2( i681[5], i681[6] )
  i680.minForce = new pc.Vec2( i681[7], i681[8] )
  request.r(i681[9], i681[10], 0, i680, 'balance')
  i680.isDead = !!i681[11]
  i680.speed = i681[12]
  request.r(i681[13], i681[14], 0, i680, 'body')
  request.r(i681[15], i681[16], 0, i680, 'leftHand')
  request.r(i681[17], i681[18], 0, i680, 'rightHand')
  request.r(i681[19], i681[20], 0, i680, 'leftLeg')
  request.r(i681[21], i681[22], 0, i680, 'rightLeg')
  i680.groundMask = UnityEngine.LayerMask.FromIntegerValue( i681[23] )
  i680.minAirTime = i681[24]
  return i680
}

Deserializers["PowerController"] = function (request, data, root) {
  var i684 = root || request.c( 'PowerController' )
  var i685 = data
  var i687 = i685[0]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('PowerOption')))
  for(var i = 0; i < i687.length; i += 1) {
    i686.add(request.d('PowerOption', i687[i + 0]));
  }
  i684.powers = i686
  request.r(i685[1], i685[2], 0, i684, 'clickSound')
  request.r(i685[3], i685[4], 0, i684, 'optionTut')
  request.r(i685[5], i685[6], 0, i684, 'actionTut')
  return i684
}

Deserializers["PowerOption"] = function (request, data, root) {
  var i690 = root || request.c( 'PowerOption' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'Button')
  request.r(i691[2], i691[3], 0, i690, 'Selected')
  request.r(i691[4], i691[5], 0, i690, 'Power')
  request.r(i691[6], i691[7], 0, i690, 'Tutorial')
  return i690
}

Deserializers["LightningPower"] = function (request, data, root) {
  var i692 = root || request.c( 'LightningPower' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'strike')
  i692.radius = i693[2]
  i692.damage = i693[3]
  request.r(i693[4], i693[5], 0, i692, 'useSound')
  i692.cooldown = i693[6]
  request.r(i693[7], i693[8], 0, i692, 'container')
  return i692
}

Deserializers["TornadoPower"] = function (request, data, root) {
  var i694 = root || request.c( 'TornadoPower' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'funnelSprite')
  i694.groundY = i695[2]
  i694.height = i695[3]
  i694.widthRatio = i695[4]
  i694.speed = i695[5]
  i694.liftSpeed = i695[6]
  i694.liftAccel = i695[7]
  i694.carryRatio = i695[8]
  i694.swirl = i695[9]
  i694.spin = i695[10]
  request.r(i695[11], i695[12], 0, i694, 'liftSound')
  i694.liftSoundInterval = i695[13]
  i694.sortingOrder = i695[14]
  request.r(i695[15], i695[16], 0, i694, 'useSound')
  i694.cooldown = i695[17]
  request.r(i695[18], i695[19], 0, i694, 'container')
  return i694
}

Deserializers["FirePower"] = function (request, data, root) {
  var i696 = root || request.c( 'FirePower' )
  var i697 = data
  var i699 = i697[0]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696.frames = i698
  i696.frameRate = i697[1]
  i696.spacing = i697[2]
  i696.igniteRadius = i697[3]
  i696.burnDamage = i697[4]
  i696.burnInterval = i697[5]
  i696.burnDuration = i697[6]
  request.r(i697[7], i697[8], 0, i696, 'emberSprite')
  request.r(i697[9], i697[10], 0, i696, 'smokeSprite')
  i696.secondsPerClick = i697[11]
  request.r(i697[12], i697[13], 0, i696, 'useSound')
  i696.cooldown = i697[14]
  request.r(i697[15], i697[16], 0, i696, 'container')
  return i696
}

Deserializers["StormPower"] = function (request, data, root) {
  var i700 = root || request.c( 'StormPower' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'strike')
  request.r(i701[2], i701[3], 0, i700, 'rain')
  request.r(i701[4], i701[5], 0, i700, 'monsterRoot')
  i700.duration = i701[6]
  i700.strikeInterval = new pc.Vec2( i701[7], i701[8] )
  i700.radius = i701[9]
  i700.damage = i701[10]
  i700.darkAlpha = i701[11]
  i700.groundY = i701[12]
  i700.targetMonsterChance = i701[13]
  request.r(i701[14], i701[15], 0, i700, 'useSound')
  i700.cooldown = i701[16]
  request.r(i701[17], i701[18], 0, i700, 'container')
  return i700
}

Deserializers["GameController"] = function (request, data, root) {
  var i702 = root || request.c( 'GameController' )
  var i703 = data
  i702.OnStart = request.d('System.Action', i703[0], i702.OnStart)
  i702.OnClick = request.d('System.Action', i703[1], i702.OnClick)
  i702.OnGameOver = request.d('System.Action', i703[2], i702.OnGameOver)
  i702.OnGameComplete = request.d('System.Action', i703[3], i702.OnGameComplete)
  request.r(i703[4], i703[5], 0, i702, 'startScene')
  request.r(i703[6], i703[7], 0, i702, 'buttonFight')
  request.r(i703[8], i703[9], 0, i702, 'buttonDefense')
  request.r(i703[10], i703[11], 0, i702, 'clickSound')
  request.r(i703[12], i703[13], 0, i702, 'fightOptions')
  request.r(i703[14], i703[15], 0, i702, 'tut')
  request.r(i703[16], i703[17], 0, i702, 'defenseOptions')
  request.r(i703[18], i703[19], 0, i702, 'defense')
  request.r(i703[20], i703[21], 0, i702, 'endScene')
  request.r(i703[22], i703[23], 0, i702, 'completeScene')
  request.r(i703[24], i703[25], 0, i702, 'gameOverScene')
  request.r(i703[26], i703[27], 0, i702, 'player')
  i702.numMonster = i703[28]
  request.r(i703[29], i703[30], 0, i702, 'world')
  return i702
}

Deserializers["System.Action"] = function (request, data, root) {
  var i704 = root || request.c( 'System.Action' )
  var i705 = data
  return i704
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i706 = root || request.c( 'LayoutController' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'main')
  request.r(i707[2], i707[3], 0, i706, 'fight')
  request.r(i707[4], i707[5], 0, i706, 'defense')
  return i706
}

Deserializers["LunaController"] = function (request, data, root) {
  var i708 = root || request.c( 'LunaController' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'BGTexture')
  i708.UseTime = !!i709[2]
  i708.TimePlay = i709[3]
  i708.UseCountPlay = !!i709[4]
  i708.MaxCountPlay = i709[5]
  request.r(i709[6], i709[7], 0, i708, 'BGImage')
  var i711 = i709[8]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 1, i710, '')
  }
  i708.CTA = i710
  i708.count = i709[9]
  request.r(i709[10], i709[11], 0, i708, 'endCard')
  return i708
}

Deserializers["AudioController"] = function (request, data, root) {
  var i714 = root || request.c( 'AudioController' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'BGM')
  request.r(i715[2], i715[3], 0, i714, 'musicSource')
  request.r(i715[4], i715[5], 0, i714, 'pool')
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'clip')
  request.r(i717[2], i717[3], 0, i716, 'outputAudioMixerGroup')
  i716.playOnAwake = !!i717[4]
  i716.loop = !!i717[5]
  i716.time = i717[6]
  i716.volume = i717[7]
  i716.pitch = i717[8]
  i716.enabled = !!i717[9]
  return i716
}

Deserializers["VFXController"] = function (request, data, root) {
  var i718 = root || request.c( 'VFXController' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'poolParent')
  return i718
}

Deserializers["ScreenFx"] = function (request, data, root) {
  var i720 = root || request.c( 'ScreenFx' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'dark')
  request.r(i721[2], i721[3], 0, i720, 'flash')
  return i720
}

Deserializers["LightningStrike"] = function (request, data, root) {
  var i722 = root || request.c( 'LightningStrike' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'segmentSprite')
  i722.coreColor = new pc.Color(i723[2], i723[3], i723[4], i723[5])
  i722.glowColor = new pc.Color(i723[6], i723[7], i723[8], i723[9])
  i722.coreWidth = i723[10]
  i722.glowWidth = i723[11]
  i722.mainSegments = i723[12]
  i722.branchSegments = i723[13]
  i722.branches = i723[14]
  i722.jitter = i723[15]
  i722.sortingOrder = i723[16]
  i722.flashStrength = i723[17]
  i722.groundY = i723[18]
  request.r(i723[19], i723[20], 0, i722, 'strikeSound')
  i722.shakeDuration = i723[21]
  i722.shakeStrength = i723[22]
  return i722
}

Deserializers["RainEffect"] = function (request, data, root) {
  var i724 = root || request.c( 'RainEffect' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'dropSprite')
  i724.maxDrops = i725[2]
  i724.velocity = new pc.Vec2( i725[3], i725[4] )
  i724.dropSize = new pc.Vec2( i725[5], i725[6] )
  i724.color = new pc.Color(i725[7], i725[8], i725[9], i725[10])
  i724.groundY = i725[11]
  i724.fadeIn = i725[12]
  i724.fadeOut = i725[13]
  i724.sortingOrder = i725[14]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i727 = data
  i726.ambientIntensity = i727[0]
  i726.reflectionIntensity = i727[1]
  i726.ambientMode = i727[2]
  i726.ambientLight = new pc.Color(i727[3], i727[4], i727[5], i727[6])
  i726.ambientSkyColor = new pc.Color(i727[7], i727[8], i727[9], i727[10])
  i726.ambientGroundColor = new pc.Color(i727[11], i727[12], i727[13], i727[14])
  i726.ambientEquatorColor = new pc.Color(i727[15], i727[16], i727[17], i727[18])
  i726.fogColor = new pc.Color(i727[19], i727[20], i727[21], i727[22])
  i726.fogEndDistance = i727[23]
  i726.fogStartDistance = i727[24]
  i726.fogDensity = i727[25]
  i726.fog = !!i727[26]
  request.r(i727[27], i727[28], 0, i726, 'skybox')
  i726.fogMode = i727[29]
  var i729 = i727[30]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i729[i + 0]) );
  }
  i726.lightmaps = i728
  i726.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i727[31], i726.lightProbes)
  i726.lightmapsMode = i727[32]
  i726.mixedBakeMode = i727[33]
  i726.environmentLightingMode = i727[34]
  i726.ambientProbe = new pc.SphericalHarmonicsL2(i727[35])
  request.r(i727[36], i727[37], 0, i726, 'customReflection')
  request.r(i727[38], i727[39], 0, i726, 'defaultReflection')
  i726.defaultReflectionMode = i727[40]
  i726.defaultReflectionResolution = i727[41]
  i726.sunLightObjectId = i727[42]
  i726.pixelLightCount = i727[43]
  i726.defaultReflectionHDR = !!i727[44]
  i726.hasLightDataAsset = !!i727[45]
  i726.hasManualGenerate = !!i727[46]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'lightmapColor')
  request.r(i733[2], i733[3], 0, i732, 'lightmapDirection')
  request.r(i733[4], i733[5], 0, i732, 'shadowMask')
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i734 = root || new UnityEngine.LightProbes()
  var i735 = data
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i743 = data
  var i745 = i743[0]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i745[i + 0]));
  }
  i742.ShaderCompilationErrors = i744
  i742.name = i743[1]
  i742.guid = i743[2]
  var i747 = i743[3]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( i747[i + 0] );
  }
  i742.shaderDefinedKeywords = i746
  var i749 = i743[4]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i749[i + 0]) );
  }
  i742.passes = i748
  var i751 = i743[5]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i751[i + 0]) );
  }
  i742.usePasses = i750
  var i753 = i743[6]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i753[i + 0]) );
  }
  i742.defaultParameterValues = i752
  request.r(i743[7], i743[8], 0, i742, 'unityFallbackShader')
  i742.readDepth = !!i743[9]
  i742.hasDepthOnlyPass = !!i743[10]
  i742.isCreatedByShaderGraph = !!i743[11]
  i742.disableBatching = !!i743[12]
  i742.compiled = !!i743[13]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i757 = data
  i756.shaderName = i757[0]
  i756.errorMessage = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i762 = root || new pc.UnityShaderPass()
  var i763 = data
  i762.id = i763[0]
  i762.subShaderIndex = i763[1]
  i762.name = i763[2]
  i762.passType = i763[3]
  i762.grabPassTextureName = i763[4]
  i762.usePass = !!i763[5]
  i762.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[6], i762.zTest)
  i762.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[7], i762.zWrite)
  i762.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[8], i762.culling)
  i762.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i763[9], i762.blending)
  i762.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i763[10], i762.alphaBlending)
  i762.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[11], i762.colorWriteMask)
  i762.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[12], i762.offsetUnits)
  i762.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[13], i762.offsetFactor)
  i762.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[14], i762.stencilRef)
  i762.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[15], i762.stencilReadMask)
  i762.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[16], i762.stencilWriteMask)
  i762.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i763[17], i762.stencilOp)
  i762.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i763[18], i762.stencilOpFront)
  i762.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i763[19], i762.stencilOpBack)
  var i765 = i763[20]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i765[i + 0]) );
  }
  i762.tags = i764
  var i767 = i763[21]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i762.passDefinedKeywords = i766
  var i769 = i763[22]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i769[i + 0]) );
  }
  i762.passDefinedKeywordGroups = i768
  var i771 = i763[23]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i771[i + 0]) );
  }
  i762.variants = i770
  var i773 = i763[24]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i773[i + 0]) );
  }
  i762.excludedVariants = i772
  i762.hasDepthReader = !!i763[25]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i775 = data
  i774.val = i775[0]
  i774.name = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i777 = data
  i776.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[0], i776.src)
  i776.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[1], i776.dst)
  i776.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i777[2], i776.op)
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i779 = data
  i778.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[0], i778.pass)
  i778.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[1], i778.fail)
  i778.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[2], i778.zFail)
  i778.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[3], i778.comp)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i783 = data
  i782.name = i783[0]
  i782.value = i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i787 = data
  var i789 = i787[0]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( i789[i + 0] );
  }
  i786.keywords = i788
  i786.hasDiscard = !!i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i793 = data
  i792.passId = i793[0]
  i792.subShaderIndex = i793[1]
  var i795 = i793[2]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( i795[i + 0] );
  }
  i792.keywords = i794
  i792.vertexProgram = i793[3]
  i792.fragmentProgram = i793[4]
  i792.exportedForWebGl2 = !!i793[5]
  i792.readDepth = !!i793[6]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'shader')
  i798.pass = i799[2]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i803 = data
  i802.name = i803[0]
  i802.type = i803[1]
  i802.value = new pc.Vec4( i803[2], i803[3], i803[4], i803[5] )
  i802.textureValue = i803[6]
  i802.shaderPropertyFlag = i803[7]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i805 = data
  i804.name = i805[0]
  request.r(i805[1], i805[2], 0, i804, 'texture')
  i804.aabb = i805[3]
  i804.vertices = i805[4]
  i804.triangles = i805[5]
  i804.textureRect = UnityEngine.Rect.MinMaxRect(i805[6], i805[7], i805[8], i805[9])
  i804.packedRect = UnityEngine.Rect.MinMaxRect(i805[10], i805[11], i805[12], i805[13])
  i804.border = new pc.Vec4( i805[14], i805[15], i805[16], i805[17] )
  i804.transparency = i805[18]
  i804.bounds = i805[19]
  i804.pixelsPerUnit = i805[20]
  i804.textureWidth = i805[21]
  i804.textureHeight = i805[22]
  i804.nativeSize = new pc.Vec2( i805[23], i805[24] )
  i804.pivot = new pc.Vec2( i805[25], i805[26] )
  i804.textureRectOffset = new pc.Vec2( i805[27], i805[28] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i807 = data
  i806.name = i807[0]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i809 = data
  i808.name = i809[0]
  i808.ascent = i809[1]
  i808.originalLineHeight = i809[2]
  i808.fontSize = i809[3]
  var i811 = i809[4]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i811[i + 0]) );
  }
  i808.characterInfo = i810
  request.r(i809[5], i809[6], 0, i808, 'texture')
  i808.originalFontSize = i809[7]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i815 = data
  i814.index = i815[0]
  i814.advance = i815[1]
  i814.bearing = i815[2]
  i814.glyphWidth = i815[3]
  i814.glyphHeight = i815[4]
  i814.minX = i815[5]
  i814.maxX = i815[6]
  i814.minY = i815[7]
  i814.maxY = i815[8]
  i814.uvBottomLeftX = i815[9]
  i814.uvBottomLeftY = i815[10]
  i814.uvBottomRightX = i815[11]
  i814.uvBottomRightY = i815[12]
  i814.uvTopLeftX = i815[13]
  i814.uvTopLeftY = i815[14]
  i814.uvTopRightX = i815[15]
  i814.uvTopRightY = i815[16]
  return i814
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i816 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i817 = data
  i816.useSafeMode = !!i817[0]
  i816.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i817[1], i816.safeModeOptions)
  i816.timeScale = i817[2]
  i816.unscaledTimeScale = i817[3]
  i816.useSmoothDeltaTime = !!i817[4]
  i816.maxSmoothUnscaledTime = i817[5]
  i816.rewindCallbackMode = i817[6]
  i816.showUnityEditorReport = !!i817[7]
  i816.logBehaviour = i817[8]
  i816.drawGizmos = !!i817[9]
  i816.defaultRecyclable = !!i817[10]
  i816.defaultAutoPlay = i817[11]
  i816.defaultUpdateType = i817[12]
  i816.defaultTimeScaleIndependent = !!i817[13]
  i816.defaultEaseType = i817[14]
  i816.defaultEaseOvershootOrAmplitude = i817[15]
  i816.defaultEasePeriod = i817[16]
  i816.defaultAutoKill = !!i817[17]
  i816.defaultLoopType = i817[18]
  i816.debugMode = !!i817[19]
  i816.debugStoreTargetId = !!i817[20]
  i816.showPreviewPanel = !!i817[21]
  i816.storeSettingsLocation = i817[22]
  i816.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i817[23], i816.modules)
  i816.createASMDEF = !!i817[24]
  i816.showPlayingTweens = !!i817[25]
  i816.showPausedTweens = !!i817[26]
  return i816
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i818 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i819 = data
  i818.logBehaviour = i819[0]
  i818.nestedTweenFailureBehaviour = i819[1]
  return i818
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i820 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i821 = data
  i820.showPanel = !!i821[0]
  i820.audioEnabled = !!i821[1]
  i820.physicsEnabled = !!i821[2]
  i820.physics2DEnabled = !!i821[3]
  i820.spriteEnabled = !!i821[4]
  i820.uiEnabled = !!i821[5]
  i820.textMeshProEnabled = !!i821[6]
  i820.tk2DEnabled = !!i821[7]
  i820.deAudioEnabled = !!i821[8]
  i820.deUnityExtendedEnabled = !!i821[9]
  i820.epoOutlineEnabled = !!i821[10]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i823 = data
  var i825 = i823[0]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i825[i + 0]) );
  }
  i822.files = i824
  i822.componentToPrefabIds = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i829 = data
  i828.path = i829[0]
  request.r(i829[1], i829[2], 0, i828, 'unityObject')
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i831 = data
  var i833 = i831[0]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i833[i + 0]) );
  }
  i830.scriptsExecutionOrder = i832
  var i835 = i831[1]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i835[i + 0]) );
  }
  i830.sortingLayers = i834
  var i837 = i831[2]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i837[i + 0]) );
  }
  i830.cullingLayers = i836
  i830.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i831[3], i830.timeSettings)
  i830.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i831[4], i830.physicsSettings)
  i830.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i831[5], i830.physics2DSettings)
  i830.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i831[6], i830.qualitySettings)
  i830.enableRealtimeShadows = !!i831[7]
  i830.enableAutoInstancing = !!i831[8]
  i830.enableStaticBatching = !!i831[9]
  i830.enableDynamicBatching = !!i831[10]
  i830.usePreservativeDynamicBatching = !!i831[11]
  i830.lightmapEncodingQuality = i831[12]
  i830.desiredColorSpace = i831[13]
  var i839 = i831[14]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i830.allTags = i838
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i843 = data
  i842.name = i843[0]
  i842.value = i843[1]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i847 = data
  i846.id = i847[0]
  i846.name = i847[1]
  i846.value = i847[2]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i851 = data
  i850.id = i851[0]
  i850.name = i851[1]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i853 = data
  i852.fixedDeltaTime = i853[0]
  i852.maximumDeltaTime = i853[1]
  i852.timeScale = i853[2]
  i852.maximumParticleTimestep = i853[3]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i855 = data
  i854.gravity = new pc.Vec3( i855[0], i855[1], i855[2] )
  i854.defaultSolverIterations = i855[3]
  i854.bounceThreshold = i855[4]
  i854.autoSyncTransforms = !!i855[5]
  i854.autoSimulation = !!i855[6]
  var i857 = i855[7]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i857[i + 0]) );
  }
  i854.collisionMatrix = i856
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i861 = data
  i860.enabled = !!i861[0]
  i860.layerId = i861[1]
  i860.otherLayerId = i861[2]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'material')
  i862.gravity = new pc.Vec2( i863[2], i863[3] )
  i862.positionIterations = i863[4]
  i862.velocityIterations = i863[5]
  i862.velocityThreshold = i863[6]
  i862.maxLinearCorrection = i863[7]
  i862.maxAngularCorrection = i863[8]
  i862.maxTranslationSpeed = i863[9]
  i862.maxRotationSpeed = i863[10]
  i862.baumgarteScale = i863[11]
  i862.baumgarteTOIScale = i863[12]
  i862.timeToSleep = i863[13]
  i862.linearSleepTolerance = i863[14]
  i862.angularSleepTolerance = i863[15]
  i862.defaultContactOffset = i863[16]
  i862.autoSimulation = !!i863[17]
  i862.queriesHitTriggers = !!i863[18]
  i862.queriesStartInColliders = !!i863[19]
  i862.callbacksOnDisable = !!i863[20]
  i862.reuseCollisionCallbacks = !!i863[21]
  i862.autoSyncTransforms = !!i863[22]
  var i865 = i863[23]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i865[i + 0]) );
  }
  i862.collisionMatrix = i864
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i869 = data
  i868.enabled = !!i869[0]
  i868.layerId = i869[1]
  i868.otherLayerId = i869[2]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i871 = data
  var i873 = i871[0]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i873[i + 0]) );
  }
  i870.qualityLevels = i872
  var i875 = i871[1]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i870.names = i874
  i870.shadows = i871[2]
  i870.anisotropicFiltering = i871[3]
  i870.antiAliasing = i871[4]
  i870.lodBias = i871[5]
  i870.shadowCascades = i871[6]
  i870.shadowDistance = i871[7]
  i870.shadowmaskMode = i871[8]
  i870.shadowProjection = i871[9]
  i870.shadowResolution = i871[10]
  i870.softParticles = !!i871[11]
  i870.softVegetation = !!i871[12]
  i870.activeColorSpace = i871[13]
  i870.desiredColorSpace = i871[14]
  i870.masterTextureLimit = i871[15]
  i870.maxQueuedFrames = i871[16]
  i870.particleRaycastBudget = i871[17]
  i870.pixelLightCount = i871[18]
  i870.realtimeReflectionProbes = !!i871[19]
  i870.shadowCascade2Split = i871[20]
  i870.shadowCascade4Split = new pc.Vec3( i871[21], i871[22], i871[23] )
  i870.streamingMipmapsActive = !!i871[24]
  i870.vSyncCount = i871[25]
  i870.asyncUploadBufferSize = i871[26]
  i870.asyncUploadTimeSlice = i871[27]
  i870.billboardsFaceCameraPosition = !!i871[28]
  i870.shadowNearPlaneOffset = i871[29]
  i870.streamingMipmapsMemoryBudget = i871[30]
  i870.maximumLODLevel = i871[31]
  i870.streamingMipmapsAddAllCameras = !!i871[32]
  i870.streamingMipmapsMaxLevelReduction = i871[33]
  i870.streamingMipmapsRenderersPerFrame = i871[34]
  i870.resolutionScalingFixedDPIFactor = i871[35]
  i870.streamingMipmapsMaxFileIORequests = i871[36]
  i870.currentQualityLevel = i871[37]
  return i870
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'm_ObjectArgument')
  i878.m_ObjectArgumentAssemblyTypeName = i879[2]
  i878.m_IntArgument = i879[3]
  i878.m_FloatArgument = i879[4]
  i878.m_StringArgument = i879[5]
  i878.m_BoolArgument = !!i879[6]
  return i878
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[69],"70":[5],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[33],"79":[33],"80":[33],"81":[33],"82":[33],"83":[33],"32":[33],"84":[33],"85":[33],"34":[33],"86":[33],"87":[33],"88":[33],"89":[5],"90":[91],"92":[93],"94":[93],"13":[12],"42":[40],"40":[31],"43":[31],"95":[28],"96":[5],"97":[98],"99":[12],"100":[16,12],"101":[91],"102":[16,12],"103":[12],"104":[12],"105":[91,12],"106":[12,16],"107":[108],"109":[108],"110":[108],"111":[12],"112":[12],"15":[13],"20":[16,12],"19":[12],"14":[13],"113":[12],"114":[12],"115":[12],"116":[12],"117":[12],"118":[12],"119":[12],"120":[12],"121":[12],"17":[16,12],"122":[12],"123":[12],"124":[12],"125":[12],"23":[16,12],"126":[12],"127":[10],"128":[10],"11":[10],"129":[10],"130":[5],"131":[5]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraShake","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","TutController","DG.Tweening.DOTweenAnimation","FireTutorial","UnityEngine.SpriteRenderer","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","PlayerController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","SawWeapon","FlamethrowerWeapon","BatWeapon","UnityEngine.GameObject","PlayerHealth","PlayerZombie","PlayerBite","PlayerLaunch","BalanceController","MonsterController","PowerController","LightningPower","TornadoPower","FirePower","StormPower","LightningStrike","RainEffect","GameController","LayoutController","LunaController","AudioController","UnityEngine.AudioSource","VFXController","ScreenFx","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "11/04/2026 07:07:47";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "C1_2611_TamNTM_PSF_V02_YenTTH";

Deserializers.lunaAppID = "39964";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1773";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4442";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "fc525d5d-1c71-4c2f-b562-f37e35635dd2";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()


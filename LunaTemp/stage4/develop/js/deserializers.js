var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointSpring' )
  var i449 = data
  i448.spring = i449[0]
  i448.damper = i449[1]
  i448.targetPosition = i449[2]
  return i448
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointMotor' )
  var i451 = data
  i450.m_TargetVelocity = i451[0]
  i450.m_Force = i451[1]
  i450.m_FreeSpin = i451[2]
  return i450
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointLimits' )
  var i453 = data
  i452.m_Min = i453[0]
  i452.m_Max = i453[1]
  i452.m_Bounciness = i453[2]
  i452.m_BounceMinVelocity = i453[3]
  i452.m_ContactDistance = i453[4]
  i452.minBounce = i453[5]
  i452.maxBounce = i453[6]
  return i452
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointDrive' )
  var i455 = data
  i454.m_PositionSpring = i455[0]
  i454.m_PositionDamper = i455[1]
  i454.m_MaximumForce = i455[2]
  i454.m_UseAcceleration = i455[3]
  return i454
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i457 = data
  i456.m_Spring = i457[0]
  i456.m_Damper = i457[1]
  return i456
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i459 = data
  i458.m_Limit = i459[0]
  i458.m_Bounciness = i459[1]
  i458.m_ContactDistance = i459[2]
  return i458
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i461 = data
  i460.m_ExtremumSlip = i461[0]
  i460.m_ExtremumValue = i461[1]
  i460.m_AsymptoteSlip = i461[2]
  i460.m_AsymptoteValue = i461[3]
  i460.m_Stiffness = i461[4]
  return i460
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i463 = data
  i462.m_LowerAngle = i463[0]
  i462.m_UpperAngle = i463[1]
  return i462
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i465 = data
  i464.m_MotorSpeed = i465[0]
  i464.m_MaximumMotorTorque = i465[1]
  return i464
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i467 = data
  i466.m_DampingRatio = i467[0]
  i466.m_Frequency = i467[1]
  i466.m_Angle = i467[2]
  return i466
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i469 = data
  i468.m_LowerTranslation = i469[0]
  i468.m_UpperTranslation = i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i471 = data
  i470.name = i471[0]
  i470.width = i471[1]
  i470.height = i471[2]
  i470.mipmapCount = i471[3]
  i470.anisoLevel = i471[4]
  i470.filterMode = i471[5]
  i470.hdr = !!i471[6]
  i470.format = i471[7]
  i470.wrapMode = i471[8]
  i470.alphaIsTransparency = !!i471[9]
  i470.alphaSource = i471[10]
  i470.graphicsFormat = i471[11]
  i470.sRGBTexture = !!i471[12]
  i470.desiredColorSpace = i471[13]
  i470.wrapU = i471[14]
  i470.wrapV = i471[15]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i472 = root || new pc.UnityMaterial()
  var i473 = data
  i472.name = i473[0]
  request.r(i473[1], i473[2], 0, i472, 'shader')
  i472.renderQueue = i473[3]
  i472.enableInstancing = !!i473[4]
  var i475 = i473[5]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i475[i + 0]) );
  }
  i472.floatParameters = i474
  var i477 = i473[6]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i477[i + 0]) );
  }
  i472.colorParameters = i476
  var i479 = i473[7]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i479[i + 0]) );
  }
  i472.vectorParameters = i478
  var i481 = i473[8]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i481[i + 0]) );
  }
  i472.textureParameters = i480
  var i483 = i473[9]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i483[i + 0]) );
  }
  i472.materialFlags = i482
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i487 = data
  i486.name = i487[0]
  i486.value = i487[1]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i491 = data
  i490.name = i491[0]
  i490.value = new pc.Color(i491[1], i491[2], i491[3], i491[4])
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i495 = data
  i494.name = i495[0]
  i494.value = new pc.Vec4( i495[1], i495[2], i495[3], i495[4] )
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i499 = data
  i498.name = i499[0]
  request.r(i499[1], i499[2], 0, i498, 'value')
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i503 = data
  i502.name = i503[0]
  i502.enabled = !!i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i505 = data
  i504.position = new pc.Vec3( i505[0], i505[1], i505[2] )
  i504.scale = new pc.Vec3( i505[3], i505[4], i505[5] )
  i504.rotation = new pc.Quat(i505[6], i505[7], i505[8], i505[9])
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i507 = data
  i506.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i507[0], i506.main)
  i506.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i507[1], i506.colorBySpeed)
  i506.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i507[2], i506.colorOverLifetime)
  i506.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i507[3], i506.emission)
  i506.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i507[4], i506.rotationBySpeed)
  i506.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i507[5], i506.rotationOverLifetime)
  i506.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i507[6], i506.shape)
  i506.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i507[7], i506.sizeBySpeed)
  i506.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i507[8], i506.sizeOverLifetime)
  i506.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i507[9], i506.textureSheetAnimation)
  i506.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i507[10], i506.velocityOverLifetime)
  i506.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i507[11], i506.noise)
  i506.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i507[12], i506.inheritVelocity)
  i506.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i507[13], i506.forceOverLifetime)
  i506.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i507[14], i506.limitVelocityOverLifetime)
  i506.useAutoRandomSeed = !!i507[15]
  i506.randomSeed = i507[16]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i508 = root || new pc.ParticleSystemMain()
  var i509 = data
  i508.duration = i509[0]
  i508.loop = !!i509[1]
  i508.prewarm = !!i509[2]
  i508.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[3], i508.startDelay)
  i508.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[4], i508.startLifetime)
  i508.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[5], i508.startSpeed)
  i508.startSize3D = !!i509[6]
  i508.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[7], i508.startSizeX)
  i508.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[8], i508.startSizeY)
  i508.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[9], i508.startSizeZ)
  i508.startRotation3D = !!i509[10]
  i508.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[11], i508.startRotationX)
  i508.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[12], i508.startRotationY)
  i508.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[13], i508.startRotationZ)
  i508.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i509[14], i508.startColor)
  i508.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i509[15], i508.gravityModifier)
  i508.simulationSpace = i509[16]
  request.r(i509[17], i509[18], 0, i508, 'customSimulationSpace')
  i508.simulationSpeed = i509[19]
  i508.useUnscaledTime = !!i509[20]
  i508.scalingMode = i509[21]
  i508.playOnAwake = !!i509[22]
  i508.maxParticles = i509[23]
  i508.emitterVelocityMode = i509[24]
  i508.stopAction = i509[25]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i510 = root || new pc.MinMaxCurve()
  var i511 = data
  i510.mode = i511[0]
  i510.curveMin = new pc.AnimationCurve( { keys_flow: i511[1] } )
  i510.curveMax = new pc.AnimationCurve( { keys_flow: i511[2] } )
  i510.curveMultiplier = i511[3]
  i510.constantMin = i511[4]
  i510.constantMax = i511[5]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i512 = root || new pc.MinMaxGradient()
  var i513 = data
  i512.mode = i513[0]
  i512.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i513[1], i512.gradientMin)
  i512.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i513[2], i512.gradientMax)
  i512.colorMin = new pc.Color(i513[3], i513[4], i513[5], i513[6])
  i512.colorMax = new pc.Color(i513[7], i513[8], i513[9], i513[10])
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i515 = data
  i514.mode = i515[0]
  var i517 = i515[1]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i517[i + 0]) );
  }
  i514.colorKeys = i516
  var i519 = i515[2]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i519[i + 0]) );
  }
  i514.alphaKeys = i518
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemColorBySpeed()
  var i521 = data
  i520.enabled = !!i521[0]
  i520.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i521[1], i520.color)
  i520.range = new pc.Vec2( i521[2], i521[3] )
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i525 = data
  i524.color = new pc.Color(i525[0], i525[1], i525[2], i525[3])
  i524.time = i525[4]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i529 = data
  i528.alpha = i529[0]
  i528.time = i529[1]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i530 = root || new pc.ParticleSystemColorOverLifetime()
  var i531 = data
  i530.enabled = !!i531[0]
  i530.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i531[1], i530.color)
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i532 = root || new pc.ParticleSystemEmitter()
  var i533 = data
  i532.enabled = !!i533[0]
  i532.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[1], i532.rateOverTime)
  i532.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[2], i532.rateOverDistance)
  var i535 = i533[3]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i535[i + 0]) );
  }
  i532.bursts = i534
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemBurst()
  var i539 = data
  i538.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[0], i538.count)
  i538.cycleCount = i539[1]
  i538.minCount = i539[2]
  i538.maxCount = i539[3]
  i538.repeatInterval = i539[4]
  i538.time = i539[5]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemRotationBySpeed()
  var i541 = data
  i540.enabled = !!i541[0]
  i540.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[1], i540.x)
  i540.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[2], i540.y)
  i540.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[3], i540.z)
  i540.separateAxes = !!i541[4]
  i540.range = new pc.Vec2( i541[5], i541[6] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i542 = root || new pc.ParticleSystemRotationOverLifetime()
  var i543 = data
  i542.enabled = !!i543[0]
  i542.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[1], i542.x)
  i542.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[2], i542.y)
  i542.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[3], i542.z)
  i542.separateAxes = !!i543[4]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i544 = root || new pc.ParticleSystemShape()
  var i545 = data
  i544.enabled = !!i545[0]
  i544.shapeType = i545[1]
  i544.randomDirectionAmount = i545[2]
  i544.sphericalDirectionAmount = i545[3]
  i544.randomPositionAmount = i545[4]
  i544.alignToDirection = !!i545[5]
  i544.radius = i545[6]
  i544.radiusMode = i545[7]
  i544.radiusSpread = i545[8]
  i544.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[9], i544.radiusSpeed)
  i544.radiusThickness = i545[10]
  i544.angle = i545[11]
  i544.length = i545[12]
  i544.boxThickness = new pc.Vec3( i545[13], i545[14], i545[15] )
  i544.meshShapeType = i545[16]
  request.r(i545[17], i545[18], 0, i544, 'mesh')
  request.r(i545[19], i545[20], 0, i544, 'meshRenderer')
  request.r(i545[21], i545[22], 0, i544, 'skinnedMeshRenderer')
  i544.useMeshMaterialIndex = !!i545[23]
  i544.meshMaterialIndex = i545[24]
  i544.useMeshColors = !!i545[25]
  i544.normalOffset = i545[26]
  i544.arc = i545[27]
  i544.arcMode = i545[28]
  i544.arcSpread = i545[29]
  i544.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[30], i544.arcSpeed)
  i544.donutRadius = i545[31]
  i544.position = new pc.Vec3( i545[32], i545[33], i545[34] )
  i544.rotation = new pc.Vec3( i545[35], i545[36], i545[37] )
  i544.scale = new pc.Vec3( i545[38], i545[39], i545[40] )
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i546 = root || new pc.ParticleSystemSizeBySpeed()
  var i547 = data
  i546.enabled = !!i547[0]
  i546.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[1], i546.x)
  i546.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[2], i546.y)
  i546.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[3], i546.z)
  i546.separateAxes = !!i547[4]
  i546.range = new pc.Vec2( i547[5], i547[6] )
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i548 = root || new pc.ParticleSystemSizeOverLifetime()
  var i549 = data
  i548.enabled = !!i549[0]
  i548.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[1], i548.x)
  i548.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[2], i548.y)
  i548.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[3], i548.z)
  i548.separateAxes = !!i549[4]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i551 = data
  i550.enabled = !!i551[0]
  i550.mode = i551[1]
  i550.animation = i551[2]
  i550.numTilesX = i551[3]
  i550.numTilesY = i551[4]
  i550.useRandomRow = !!i551[5]
  i550.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[6], i550.frameOverTime)
  i550.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i551[7], i550.startFrame)
  i550.cycleCount = i551[8]
  i550.rowIndex = i551[9]
  i550.flipU = i551[10]
  i550.flipV = i551[11]
  i550.spriteCount = i551[12]
  var i553 = i551[13]
  var i552 = []
  for(var i = 0; i < i553.length; i += 2) {
  request.r(i553[i + 0], i553[i + 1], 2, i552, '')
  }
  i550.sprites = i552
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[1], i556.x)
  i556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[2], i556.y)
  i556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[3], i556.z)
  i556.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[4], i556.radial)
  i556.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[5], i556.speedModifier)
  i556.space = i557[6]
  i556.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[7], i556.orbitalX)
  i556.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[8], i556.orbitalY)
  i556.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[9], i556.orbitalZ)
  i556.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[10], i556.orbitalOffsetX)
  i556.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[11], i556.orbitalOffsetY)
  i556.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[12], i556.orbitalOffsetZ)
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemNoise()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.separateAxes = !!i559[1]
  i558.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[2], i558.strengthX)
  i558.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[3], i558.strengthY)
  i558.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[4], i558.strengthZ)
  i558.frequency = i559[5]
  i558.damping = !!i559[6]
  i558.octaveCount = i559[7]
  i558.octaveMultiplier = i559[8]
  i558.octaveScale = i559[9]
  i558.quality = i559[10]
  i558.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[11], i558.scrollSpeed)
  i558.scrollSpeedMultiplier = i559[12]
  i558.remapEnabled = !!i559[13]
  i558.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[14], i558.remapX)
  i558.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[15], i558.remapY)
  i558.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[16], i558.remapZ)
  i558.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[17], i558.positionAmount)
  i558.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[18], i558.rotationAmount)
  i558.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[19], i558.sizeAmount)
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemInheritVelocity()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.mode = i561[1]
  i560.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[2], i560.curve)
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemForceOverLifetime()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[1], i562.x)
  i562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[2], i562.y)
  i562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[3], i562.z)
  i562.space = i563[4]
  i562.randomized = !!i563[5]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[1], i564.limit)
  i564.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.limitX)
  i564.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[3], i564.limitY)
  i564.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[4], i564.limitZ)
  i564.dampen = i565[5]
  i564.separateAxes = !!i565[6]
  i564.space = i565[7]
  i564.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[8], i564.drag)
  i564.multiplyDragByParticleSize = !!i565[9]
  i564.multiplyDragByParticleVelocity = !!i565[10]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'mesh')
  i566.meshCount = i567[2]
  i566.activeVertexStreamsCount = i567[3]
  i566.alignment = i567[4]
  i566.renderMode = i567[5]
  i566.sortMode = i567[6]
  i566.lengthScale = i567[7]
  i566.velocityScale = i567[8]
  i566.cameraVelocityScale = i567[9]
  i566.normalDirection = i567[10]
  i566.sortingFudge = i567[11]
  i566.minParticleSize = i567[12]
  i566.maxParticleSize = i567[13]
  i566.pivot = new pc.Vec3( i567[14], i567[15], i567[16] )
  request.r(i567[17], i567[18], 0, i566, 'trailMaterial')
  i566.applyActiveColorSpace = !!i567[19]
  i566.enabled = !!i567[20]
  request.r(i567[21], i567[22], 0, i566, 'sharedMaterial')
  var i569 = i567[23]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i566.sharedMaterials = i568
  i566.receiveShadows = !!i567[24]
  i566.shadowCastingMode = i567[25]
  i566.sortingLayerID = i567[26]
  i566.sortingOrder = i567[27]
  i566.lightmapIndex = i567[28]
  i566.lightmapSceneIndex = i567[29]
  i566.lightmapScaleOffset = new pc.Vec4( i567[30], i567[31], i567[32], i567[33] )
  i566.lightProbeUsage = i567[34]
  i566.reflectionProbeUsage = i567[35]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i573 = data
  i572.name = i573[0]
  i572.tagId = i573[1]
  i572.enabled = !!i573[2]
  i572.isStatic = !!i573[3]
  i572.layer = i573[4]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i575 = data
  i574.name = i575[0]
  i574.halfPrecision = !!i575[1]
  i574.useSimplification = !!i575[2]
  i574.useUInt32IndexFormat = !!i575[3]
  i574.vertexCount = i575[4]
  i574.aabb = i575[5]
  var i577 = i575[6]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( !!i577[i + 0] );
  }
  i574.streams = i576
  i574.vertices = i575[7]
  var i579 = i575[8]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i579[i + 0]) );
  }
  i574.subMeshes = i578
  var i581 = i575[9]
  var i580 = []
  for(var i = 0; i < i581.length; i += 16) {
    i580.push( new pc.Mat4().setData(i581[i + 0], i581[i + 1], i581[i + 2], i581[i + 3],  i581[i + 4], i581[i + 5], i581[i + 6], i581[i + 7],  i581[i + 8], i581[i + 9], i581[i + 10], i581[i + 11],  i581[i + 12], i581[i + 13], i581[i + 14], i581[i + 15]) );
  }
  i574.bindposes = i580
  var i583 = i575[10]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i583[i + 0]) );
  }
  i574.blendShapes = i582
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i589 = data
  i588.triangles = i589[0]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i595 = data
  i594.name = i595[0]
  var i597 = i595[1]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i597[i + 0]) );
  }
  i594.frames = i596
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i599 = data
  i598.color = new pc.Color(i599[0], i599[1], i599[2], i599[3])
  request.r(i599[4], i599[5], 0, i598, 'sprite')
  i598.flipX = !!i599[6]
  i598.flipY = !!i599[7]
  i598.drawMode = i599[8]
  i598.size = new pc.Vec2( i599[9], i599[10] )
  i598.tileMode = i599[11]
  i598.adaptiveModeThreshold = i599[12]
  i598.maskInteraction = i599[13]
  i598.spriteSortPoint = i599[14]
  i598.enabled = !!i599[15]
  request.r(i599[16], i599[17], 0, i598, 'sharedMaterial')
  var i601 = i599[18]
  var i600 = []
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 2, i600, '')
  }
  i598.sharedMaterials = i600
  i598.receiveShadows = !!i599[19]
  i598.shadowCastingMode = i599[20]
  i598.sortingLayerID = i599[21]
  i598.sortingOrder = i599[22]
  i598.lightmapIndex = i599[23]
  i598.lightmapSceneIndex = i599[24]
  i598.lightmapScaleOffset = new pc.Vec4( i599[25], i599[26], i599[27], i599[28] )
  i598.lightProbeUsage = i599[29]
  i598.reflectionProbeUsage = i599[30]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i603 = data
  i602.radius = i603[0]
  i602.enabled = !!i603[1]
  i602.isTrigger = !!i603[2]
  i602.usedByEffector = !!i603[3]
  i602.density = i603[4]
  i602.offset = new pc.Vec2( i603[5], i603[6] )
  request.r(i603[7], i603[8], 0, i602, 'material')
  return i602
}

Deserializers["BulletController"] = function (request, data, root) {
  var i604 = root || request.c( 'BulletController' )
  var i605 = data
  i604.speed = i605[0]
  i604.damage = i605[1]
  request.r(i605[2], i605[3], 0, i604, 'hitMonsterSound')
  request.r(i605[4], i605[5], 0, i604, 'hitSound')
  i604.lifeTime = i605[6]
  i604.hit = !!i605[7]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i607 = data
  i606.name = i607[0]
  i606.index = i607[1]
  i606.startup = !!i607[2]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i609 = data
  i608.aspect = i609[0]
  i608.orthographic = !!i609[1]
  i608.orthographicSize = i609[2]
  i608.backgroundColor = new pc.Color(i609[3], i609[4], i609[5], i609[6])
  i608.nearClipPlane = i609[7]
  i608.farClipPlane = i609[8]
  i608.fieldOfView = i609[9]
  i608.depth = i609[10]
  i608.clearFlags = i609[11]
  i608.cullingMask = i609[12]
  i608.rect = i609[13]
  request.r(i609[14], i609[15], 0, i608, 'targetTexture')
  i608.usePhysicalProperties = !!i609[16]
  i608.focalLength = i609[17]
  i608.sensorSize = new pc.Vec2( i609[18], i609[19] )
  i608.lensShift = new pc.Vec2( i609[20], i609[21] )
  i608.gateFit = i609[22]
  i608.commandBufferCount = i609[23]
  i608.cameraType = i609[24]
  i608.enabled = !!i609[25]
  return i608
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'm_FirstSelected')
  i610.m_sendNavigationEvents = !!i611[2]
  i610.m_DragThreshold = i611[3]
  return i610
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i613 = data
  i612.m_HorizontalAxis = i613[0]
  i612.m_VerticalAxis = i613[1]
  i612.m_SubmitButton = i613[2]
  i612.m_CancelButton = i613[3]
  i612.m_InputActionsPerSecond = i613[4]
  i612.m_RepeatDelay = i613[5]
  i612.m_ForceModuleActive = !!i613[6]
  i612.m_SendPointerHoverToParent = !!i613[7]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i615 = data
  i614.pivot = new pc.Vec2( i615[0], i615[1] )
  i614.anchorMin = new pc.Vec2( i615[2], i615[3] )
  i614.anchorMax = new pc.Vec2( i615[4], i615[5] )
  i614.sizeDelta = new pc.Vec2( i615[6], i615[7] )
  i614.anchoredPosition3D = new pc.Vec3( i615[8], i615[9], i615[10] )
  i614.rotation = new pc.Quat(i615[11], i615[12], i615[13], i615[14])
  i614.scale = new pc.Vec3( i615[15], i615[16], i615[17] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i617 = data
  i616.planeDistance = i617[0]
  i616.referencePixelsPerUnit = i617[1]
  i616.isFallbackOverlay = !!i617[2]
  i616.renderMode = i617[3]
  i616.renderOrder = i617[4]
  i616.sortingLayerName = i617[5]
  i616.sortingOrder = i617[6]
  i616.scaleFactor = i617[7]
  request.r(i617[8], i617[9], 0, i616, 'worldCamera')
  i616.overrideSorting = !!i617[10]
  i616.pixelPerfect = !!i617[11]
  i616.targetDisplay = i617[12]
  i616.overridePixelPerfect = !!i617[13]
  i616.enabled = !!i617[14]
  return i616
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i619 = data
  i618.m_UiScaleMode = i619[0]
  i618.m_ReferencePixelsPerUnit = i619[1]
  i618.m_ScaleFactor = i619[2]
  i618.m_ReferenceResolution = new pc.Vec2( i619[3], i619[4] )
  i618.m_ScreenMatchMode = i619[5]
  i618.m_MatchWidthOrHeight = i619[6]
  i618.m_PhysicalUnit = i619[7]
  i618.m_FallbackScreenDPI = i619[8]
  i618.m_DefaultSpriteDPI = i619[9]
  i618.m_DynamicPixelsPerUnit = i619[10]
  i618.m_PresetInfoIsWorld = !!i619[11]
  return i618
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i621 = data
  i620.m_IgnoreReversedGraphics = !!i621[0]
  i620.m_BlockingObjects = i621[1]
  i620.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i621[2] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i623 = data
  i622.cullTransparentMesh = !!i623[0]
  return i622
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'm_Texture')
  i624.m_UVRect = UnityEngine.Rect.MinMaxRect(i625[2], i625[3], i625[4], i625[5])
  request.r(i625[6], i625[7], 0, i624, 'm_Material')
  i624.m_Maskable = !!i625[8]
  i624.m_Color = new pc.Color(i625[9], i625[10], i625[11], i625[12])
  i624.m_RaycastTarget = !!i625[13]
  i624.m_RaycastPadding = new pc.Vec4( i625[14], i625[15], i625[16], i625[17] )
  return i624
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i627 = data
  i626.m_AspectMode = i627[0]
  i626.m_AspectRatio = i627[1]
  return i626
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.Text' )
  var i629 = data
  i628.m_FontData = request.d('UnityEngine.UI.FontData', i629[0], i628.m_FontData)
  i628.m_Text = i629[1]
  request.r(i629[2], i629[3], 0, i628, 'm_Material')
  i628.m_Maskable = !!i629[4]
  i628.m_Color = new pc.Color(i629[5], i629[6], i629[7], i629[8])
  i628.m_RaycastTarget = !!i629[9]
  i628.m_RaycastPadding = new pc.Vec4( i629[10], i629[11], i629[12], i629[13] )
  return i628
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.FontData' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'm_Font')
  i630.m_FontSize = i631[2]
  i630.m_FontStyle = i631[3]
  i630.m_BestFit = !!i631[4]
  i630.m_MinSize = i631[5]
  i630.m_MaxSize = i631[6]
  i630.m_Alignment = i631[7]
  i630.m_AlignByGeometry = !!i631[8]
  i630.m_RichText = !!i631[9]
  i630.m_HorizontalOverflow = i631[10]
  i630.m_VerticalOverflow = i631[11]
  i630.m_LineSpacing = i631[12]
  return i630
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i632 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i633 = data
  i632.targetIsSelf = !!i633[0]
  request.r(i633[1], i633[2], 0, i632, 'targetGO')
  i632.tweenTargetIsTargetGO = !!i633[3]
  i632.delay = i633[4]
  i632.duration = i633[5]
  i632.easeType = i633[6]
  i632.easeCurve = new pc.AnimationCurve( { keys_flow: i633[7] } )
  i632.loopType = i633[8]
  i632.loops = i633[9]
  i632.id = i633[10]
  i632.isRelative = !!i633[11]
  i632.isFrom = !!i633[12]
  i632.isIndependentUpdate = !!i633[13]
  i632.autoKill = !!i633[14]
  i632.autoGenerate = !!i633[15]
  i632.isActive = !!i633[16]
  i632.isValid = !!i633[17]
  request.r(i633[18], i633[19], 0, i632, 'target')
  i632.animationType = i633[20]
  i632.targetType = i633[21]
  i632.forcedTargetType = i633[22]
  i632.autoPlay = !!i633[23]
  i632.useTargetAsV3 = !!i633[24]
  i632.endValueFloat = i633[25]
  i632.endValueV3 = new pc.Vec3( i633[26], i633[27], i633[28] )
  i632.endValueV2 = new pc.Vec2( i633[29], i633[30] )
  i632.endValueColor = new pc.Color(i633[31], i633[32], i633[33], i633[34])
  i632.endValueString = i633[35]
  i632.endValueRect = UnityEngine.Rect.MinMaxRect(i633[36], i633[37], i633[38], i633[39])
  request.r(i633[40], i633[41], 0, i632, 'endValueTransform')
  i632.optionalBool0 = !!i633[42]
  i632.optionalBool1 = !!i633[43]
  i632.optionalFloat0 = i633[44]
  i632.optionalInt0 = i633[45]
  i632.optionalRotationMode = i633[46]
  i632.optionalScrambleMode = i633[47]
  i632.optionalShakeRandomnessMode = i633[48]
  i632.optionalString = i633[49]
  i632.updateType = i633[50]
  i632.isSpeedBased = !!i633[51]
  i632.hasOnStart = !!i633[52]
  i632.hasOnPlay = !!i633[53]
  i632.hasOnUpdate = !!i633[54]
  i632.hasOnStepComplete = !!i633[55]
  i632.hasOnComplete = !!i633[56]
  i632.hasOnTweenCreated = !!i633[57]
  i632.hasOnRewind = !!i633[58]
  i632.onStart = request.d('UnityEngine.Events.UnityEvent', i633[59], i632.onStart)
  i632.onPlay = request.d('UnityEngine.Events.UnityEvent', i633[60], i632.onPlay)
  i632.onUpdate = request.d('UnityEngine.Events.UnityEvent', i633[61], i632.onUpdate)
  i632.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i633[62], i632.onStepComplete)
  i632.onComplete = request.d('UnityEngine.Events.UnityEvent', i633[63], i632.onComplete)
  i632.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i633[64], i632.onTweenCreated)
  i632.onRewind = request.d('UnityEngine.Events.UnityEvent', i633[65], i632.onRewind)
  return i632
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i635 = data
  i634.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i635[0], i634.m_PersistentCalls)
  return i634
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i637 = data
  var i639 = i637[0]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i639.length; i += 1) {
    i638.add(request.d('UnityEngine.Events.PersistentCall', i639[i + 0]));
  }
  i636.m_Calls = i638
  return i636
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'm_Target')
  i642.m_TargetAssemblyTypeName = i643[2]
  i642.m_MethodName = i643[3]
  i642.m_Mode = i643[4]
  i642.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i643[5], i642.m_Arguments)
  i642.m_CallState = i643[6]
  return i642
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.Image' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'm_Sprite')
  i644.m_Type = i645[2]
  i644.m_PreserveAspect = !!i645[3]
  i644.m_FillCenter = !!i645[4]
  i644.m_FillMethod = i645[5]
  i644.m_FillAmount = i645[6]
  i644.m_FillClockwise = !!i645[7]
  i644.m_FillOrigin = i645[8]
  i644.m_UseSpriteMesh = !!i645[9]
  i644.m_PixelsPerUnitMultiplier = i645[10]
  request.r(i645[11], i645[12], 0, i644, 'm_Material')
  i644.m_Maskable = !!i645[13]
  i644.m_Color = new pc.Color(i645[14], i645[15], i645[16], i645[17])
  i644.m_RaycastTarget = !!i645[18]
  i644.m_RaycastPadding = new pc.Vec4( i645[19], i645[20], i645[21], i645[22] )
  return i644
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.Button' )
  var i647 = data
  i646.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i647[0], i646.m_OnClick)
  i646.m_Navigation = request.d('UnityEngine.UI.Navigation', i647[1], i646.m_Navigation)
  i646.m_Transition = i647[2]
  i646.m_Colors = request.d('UnityEngine.UI.ColorBlock', i647[3], i646.m_Colors)
  i646.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i647[4], i646.m_SpriteState)
  i646.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i647[5], i646.m_AnimationTriggers)
  i646.m_Interactable = !!i647[6]
  request.r(i647[7], i647[8], 0, i646, 'm_TargetGraphic')
  return i646
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i649 = data
  i648.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i649[0], i648.m_PersistentCalls)
  return i648
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i651 = data
  i650.m_Mode = i651[0]
  i650.m_WrapAround = !!i651[1]
  request.r(i651[2], i651[3], 0, i650, 'm_SelectOnUp')
  request.r(i651[4], i651[5], 0, i650, 'm_SelectOnDown')
  request.r(i651[6], i651[7], 0, i650, 'm_SelectOnLeft')
  request.r(i651[8], i651[9], 0, i650, 'm_SelectOnRight')
  return i650
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i653 = data
  i652.m_NormalColor = new pc.Color(i653[0], i653[1], i653[2], i653[3])
  i652.m_HighlightedColor = new pc.Color(i653[4], i653[5], i653[6], i653[7])
  i652.m_PressedColor = new pc.Color(i653[8], i653[9], i653[10], i653[11])
  i652.m_SelectedColor = new pc.Color(i653[12], i653[13], i653[14], i653[15])
  i652.m_DisabledColor = new pc.Color(i653[16], i653[17], i653[18], i653[19])
  i652.m_ColorMultiplier = i653[20]
  i652.m_FadeDuration = i653[21]
  return i652
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_HighlightedSprite')
  request.r(i655[2], i655[3], 0, i654, 'm_PressedSprite')
  request.r(i655[4], i655[5], 0, i654, 'm_SelectedSprite')
  request.r(i655[6], i655[7], 0, i654, 'm_DisabledSprite')
  return i654
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i657 = data
  i656.m_NormalTrigger = i657[0]
  i656.m_HighlightedTrigger = i657[1]
  i656.m_PressedTrigger = i657[2]
  i656.m_SelectedTrigger = i657[3]
  i656.m_DisabledTrigger = i657[4]
  return i656
}

Deserializers["TutController"] = function (request, data, root) {
  var i658 = root || request.c( 'TutController' )
  var i659 = data
  var i661 = i659[0]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i661.length; i += 2) {
    i660.add(new pc.Vec2( i661[i + 0], i661[i + 1] ));
  }
  i658.movePos = i660
  i658.moveTime = i659[1]
  i658.fromScale = i659[2]
  i658.toScale = i659[3]
  i658.scaleTime = i659[4]
  i658.delayTime = i659[5]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i665 = data
  i664.usedByComposite = !!i665[0]
  i664.autoTiling = !!i665[1]
  i664.size = new pc.Vec2( i665[2], i665[3] )
  i664.edgeRadius = i665[4]
  i664.enabled = !!i665[5]
  i664.isTrigger = !!i665[6]
  i664.usedByEffector = !!i665[7]
  i664.density = i665[8]
  i664.offset = new pc.Vec2( i665[9], i665[10] )
  request.r(i665[11], i665[12], 0, i664, 'material')
  return i664
}

Deserializers["BlockController"] = function (request, data, root) {
  var i666 = root || request.c( 'BlockController' )
  var i667 = data
  i666.maxHP = i667[0]
  i666.currentHP = i667[1]
  i666.isBreak = !!i667[2]
  i666.numMonster = i667[3]
  request.r(i667[4], i667[5], 0, i666, 'hitSFX')
  request.r(i667[6], i667[7], 0, i666, 'breakVFX')
  request.r(i667[8], i667[9], 0, i666, 'breakSFX')
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i669 = data
  i668.bodyType = i669[0]
  request.r(i669[1], i669[2], 0, i668, 'material')
  i668.simulated = !!i669[3]
  i668.useAutoMass = !!i669[4]
  i668.mass = i669[5]
  i668.drag = i669[6]
  i668.angularDrag = i669[7]
  i668.gravityScale = i669[8]
  i668.collisionDetectionMode = i669[9]
  i668.sleepMode = i669[10]
  i668.constraints = i669[11]
  return i668
}

Deserializers["LandmineController"] = function (request, data, root) {
  var i670 = root || request.c( 'LandmineController' )
  var i671 = data
  i670.damage = i671[0]
  i670.layer = UnityEngine.LayerMask.FromIntegerValue( i671[1] )
  request.r(i671[2], i671[3], 0, i670, 'actionSound')
  request.r(i671[4], i671[5], 0, i670, 'boomVFX')
  i670.radius = i671[6]
  return i670
}

Deserializers["SmokeController"] = function (request, data, root) {
  var i672 = root || request.c( 'SmokeController' )
  var i673 = data
  i672.delay = i673[0]
  request.r(i673[1], i673[2], 0, i672, 'startSound')
  request.r(i673[3], i673[4], 0, i672, 'actionSound')
  request.r(i673[5], i673[6], 0, i672, 'boomSound')
  return i672
}

Deserializers["TriggerMonster"] = function (request, data, root) {
  var i674 = root || request.c( 'TriggerMonster' )
  var i675 = data
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i677 = data
  i676.sortingLayerIndex = i677[0]
  i676.sortingOrder = i677[1]
  i676.sortingLayerName = i677[2]
  i676.enabled = !!i677[3]
  return i676
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i678 = root || request.c( 'PlayerController' )
  var i679 = data
  var i681 = i679[0]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i681.length; i += 1) {
    i680.add(request.d('Piece', i681[i + 0]));
  }
  i678.pieces = i680
  request.r(i679[1], i679[2], 0, i678, 'head')
  request.r(i679[3], i679[4], 0, i678, 'deadSFX')
  i678.maxForce = new pc.Vec2( i679[5], i679[6] )
  i678.minForce = new pc.Vec2( i679[7], i679[8] )
  var i683 = i679[9]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d('FightOption', i683[i + 0]));
  }
  i678.fightOptions = i682
  i678.fight = request.d('FightOption', i679[10], i678.fight)
  request.r(i679[11], i679[12], 0, i678, 'clickSound')
  request.r(i679[13], i679[14], 0, i678, 'deadVFX')
  var i685 = i679[15]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 1, i684, '')
  }
  i678.renderers = i684
  var i687 = i679[16]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 1, i686, '')
  }
  i678.sprites = i686
  i678.isZombie = !!i679[17]
  return i678
}

Deserializers["Piece"] = function (request, data, root) {
  var i690 = root || request.c( 'Piece' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'Joint')
  request.r(i691[2], i691[3], 0, i690, 'Rb')
  return i690
}

Deserializers["FightOption"] = function (request, data, root) {
  var i694 = root || request.c( 'FightOption' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'Button')
  request.r(i695[2], i695[3], 0, i694, 'Controller')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i701 = data
  i700.useLimits = !!i701[0]
  i700.limits = request.d('UnityEngine.JointAngleLimits2D', i701[1], i700.limits)
  i700.useMotor = !!i701[2]
  i700.motor = request.d('UnityEngine.JointMotor2D', i701[3], i700.motor)
  i700.anchor = new pc.Vec2( i701[4], i701[5] )
  i700.connectedAnchor = new pc.Vec2( i701[6], i701[7] )
  i700.autoConfigureConnectedAnchor = !!i701[8]
  request.r(i701[9], i701[10], 0, i700, 'connectedBody')
  i700.breakForce = i701[11]
  i700.breakTorque = i701[12]
  i700.enableCollision = !!i701[13]
  i700.enabled = !!i701[14]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i703 = data
  i702.autoConfigureTarget = !!i703[0]
  i702.target = new pc.Vec2( i703[1], i703[2] )
  i702.anchor = new pc.Vec2( i703[3], i703[4] )
  i702.maxForce = i703[5]
  i702.dampingRatio = i703[6]
  i702.frequency = i703[7]
  request.r(i703[8], i703[9], 0, i702, 'connectedBody')
  i702.breakForce = i703[10]
  i702.breakTorque = i703[11]
  i702.enableCollision = !!i703[12]
  i702.enabled = !!i703[13]
  return i702
}

Deserializers["ShootController"] = function (request, data, root) {
  var i704 = root || request.c( 'ShootController' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'currentMonster')
  request.r(i705[2], i705[3], 0, i704, 'left')
  request.r(i705[4], i705[5], 0, i704, 'right')
  i704.timeMotor = i705[6]
  i704.onCD = !!i705[7]
  i704.CD = i705[8]
  request.r(i705[9], i705[10], 0, i704, 'startPos')
  request.r(i705[11], i705[12], 0, i704, 'attackSound')
  request.r(i705[13], i705[14], 0, i704, 'spawnPrefab')
  request.r(i705[15], i705[16], 0, i704, 'poolParent')
  return i704
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i706 = root || request.c( 'BalanceController' )
  var i707 = data
  i706.targetRotation = i707[0]
  i706.force = i707[1]
  return i706
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i708 = root || request.c( 'MonsterController' )
  var i709 = data
  i708.maxHP = i709[0]
  i708.currentHP = i709[1]
  var i711 = i709[2]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i711.length; i += 1) {
    i710.add(request.d('Piece', i711[i + 0]));
  }
  i708.pieces = i710
  request.r(i709[3], i709[4], 0, i708, 'deadSFX')
  i708.maxForce = new pc.Vec2( i709[5], i709[6] )
  i708.minForce = new pc.Vec2( i709[7], i709[8] )
  request.r(i709[9], i709[10], 0, i708, 'balance')
  i708.isDead = !!i709[11]
  request.r(i709[12], i709[13], 0, i708, 'monsterMove')
  request.r(i709[14], i709[15], 0, i708, 'monsterTarget')
  request.r(i709[16], i709[17], 0, i708, 'monsterAnimation')
  request.r(i709[18], i709[19], 0, i708, 'voice')
  return i708
}

Deserializers["MonsterMove"] = function (request, data, root) {
  var i712 = root || request.c( 'MonsterMove' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'body')
  i712.speed = i713[2]
  return i712
}

Deserializers["MonsterAnimation"] = function (request, data, root) {
  var i714 = root || request.c( 'MonsterAnimation' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'leftHand')
  request.r(i715[2], i715[3], 0, i714, 'rightHand')
  request.r(i715[4], i715[5], 0, i714, 'leftLeg')
  request.r(i715[6], i715[7], 0, i714, 'rightLeg')
  return i714
}

Deserializers["MonsterTarget"] = function (request, data, root) {
  var i716 = root || request.c( 'MonsterTarget' )
  var i717 = data
  i716.targetLeft = !!i717[0]
  return i716
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
  i720.Delay = i721[0]
  i720.OnPause = request.d('System.Action', i721[1], i720.OnPause)
  i720.OnResume = request.d('System.Action', i721[2], i720.OnResume)
  i720.OnGameOver = request.d('System.Action', i721[3], i720.OnGameOver)
  i720.OnGameComplete = request.d('System.Action', i721[4], i720.OnGameComplete)
  request.r(i721[5], i721[6], 0, i720, 'startScene')
  request.r(i721[7], i721[8], 0, i720, 'header')
  request.r(i721[9], i721[10], 0, i720, 'clickSound')
  request.r(i721[11], i721[12], 0, i720, 'options')
  request.r(i721[13], i721[14], 0, i720, 'smokeButton')
  request.r(i721[15], i721[16], 0, i720, 'smoke')
  request.r(i721[17], i721[18], 0, i720, 'landmindButton')
  request.r(i721[19], i721[20], 0, i720, 'landmind')
  request.r(i721[21], i721[22], 0, i720, 'gunButton')
  request.r(i721[23], i721[24], 0, i720, 'tut')
  request.r(i721[25], i721[26], 0, i720, 'endScene')
  request.r(i721[27], i721[28], 0, i720, 'completeScene')
  request.r(i721[29], i721[30], 0, i720, 'gameOverScene')
  request.r(i721[31], i721[32], 0, i720, 'player')
  i720.numMonster = i721[33]
  request.r(i721[34], i721[35], 0, i720, 'world')
  return i720
}

Deserializers["System.Action"] = function (request, data, root) {
  var i722 = root || request.c( 'System.Action' )
  var i723 = data
  return i722
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i724 = root || request.c( 'LayoutController' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'main')
  return i724
}

Deserializers["LunaController"] = function (request, data, root) {
  var i726 = root || request.c( 'LunaController' )
  var i727 = data
  i726.oneClick = !!i727[0]
  i726.UseTime = !!i727[1]
  i726.TimePlay = i727[2]
  request.r(i727[3], i727[4], 0, i726, 'BGTexture')
  i726.HeaderText1 = i727[5]
  i726.ColorHeaderText1 = new pc.Color(i727[6], i727[7], i727[8], i727[9])
  i726.HeaderText2 = i727[10]
  i726.ColorHeaderText2 = new pc.Color(i727[11], i727[12], i727[13], i727[14])
  i726.GameOverText = i727[15]
  i726.ColorGameOverText = new pc.Color(i727[16], i727[17], i727[18], i727[19])
  request.r(i727[20], i727[21], 0, i726, 'header1')
  request.r(i727[22], i727[23], 0, i726, 'header2')
  request.r(i727[24], i727[25], 0, i726, 'lossText')
  request.r(i727[26], i727[27], 0, i726, 'BGImage')
  var i729 = i727[28]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 1, i728, '')
  }
  i726.CTA = i728
  var i731 = i727[29]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 1, i730, '')
  }
  i726.oneClickCTA = i730
  return i726
}

Deserializers["AudioController"] = function (request, data, root) {
  var i734 = root || request.c( 'AudioController' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'BGM')
  request.r(i735[2], i735[3], 0, i734, 'musicSource')
  request.r(i735[4], i735[5], 0, i734, 'pool')
  return i734
}

Deserializers["VFXController"] = function (request, data, root) {
  var i736 = root || request.c( 'VFXController' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'poolParent')
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i739 = data
  i738.ambientIntensity = i739[0]
  i738.reflectionIntensity = i739[1]
  i738.ambientMode = i739[2]
  i738.ambientLight = new pc.Color(i739[3], i739[4], i739[5], i739[6])
  i738.ambientSkyColor = new pc.Color(i739[7], i739[8], i739[9], i739[10])
  i738.ambientGroundColor = new pc.Color(i739[11], i739[12], i739[13], i739[14])
  i738.ambientEquatorColor = new pc.Color(i739[15], i739[16], i739[17], i739[18])
  i738.fogColor = new pc.Color(i739[19], i739[20], i739[21], i739[22])
  i738.fogEndDistance = i739[23]
  i738.fogStartDistance = i739[24]
  i738.fogDensity = i739[25]
  i738.fog = !!i739[26]
  request.r(i739[27], i739[28], 0, i738, 'skybox')
  i738.fogMode = i739[29]
  var i741 = i739[30]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i741[i + 0]) );
  }
  i738.lightmaps = i740
  i738.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i739[31], i738.lightProbes)
  i738.lightmapsMode = i739[32]
  i738.mixedBakeMode = i739[33]
  i738.environmentLightingMode = i739[34]
  i738.ambientProbe = new pc.SphericalHarmonicsL2(i739[35])
  request.r(i739[36], i739[37], 0, i738, 'customReflection')
  request.r(i739[38], i739[39], 0, i738, 'defaultReflection')
  i738.defaultReflectionMode = i739[40]
  i738.defaultReflectionResolution = i739[41]
  i738.sunLightObjectId = i739[42]
  i738.pixelLightCount = i739[43]
  i738.defaultReflectionHDR = !!i739[44]
  i738.hasLightDataAsset = !!i739[45]
  i738.hasManualGenerate = !!i739[46]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'lightmapColor')
  request.r(i745[2], i745[3], 0, i744, 'lightmapDirection')
  request.r(i745[4], i745[5], 0, i744, 'shadowMask')
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i746 = root || new UnityEngine.LightProbes()
  var i747 = data
  return i746
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

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i828 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i829 = data
  i828.useSafeMode = !!i829[0]
  i828.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i829[1], i828.safeModeOptions)
  i828.timeScale = i829[2]
  i828.unscaledTimeScale = i829[3]
  i828.useSmoothDeltaTime = !!i829[4]
  i828.maxSmoothUnscaledTime = i829[5]
  i828.rewindCallbackMode = i829[6]
  i828.showUnityEditorReport = !!i829[7]
  i828.logBehaviour = i829[8]
  i828.drawGizmos = !!i829[9]
  i828.defaultRecyclable = !!i829[10]
  i828.defaultAutoPlay = i829[11]
  i828.defaultUpdateType = i829[12]
  i828.defaultTimeScaleIndependent = !!i829[13]
  i828.defaultEaseType = i829[14]
  i828.defaultEaseOvershootOrAmplitude = i829[15]
  i828.defaultEasePeriod = i829[16]
  i828.defaultAutoKill = !!i829[17]
  i828.defaultLoopType = i829[18]
  i828.debugMode = !!i829[19]
  i828.debugStoreTargetId = !!i829[20]
  i828.showPreviewPanel = !!i829[21]
  i828.storeSettingsLocation = i829[22]
  i828.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i829[23], i828.modules)
  i828.createASMDEF = !!i829[24]
  i828.showPlayingTweens = !!i829[25]
  i828.showPausedTweens = !!i829[26]
  return i828
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i830 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i831 = data
  i830.logBehaviour = i831[0]
  i830.nestedTweenFailureBehaviour = i831[1]
  return i830
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i832 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i833 = data
  i832.showPanel = !!i833[0]
  i832.audioEnabled = !!i833[1]
  i832.physicsEnabled = !!i833[2]
  i832.physics2DEnabled = !!i833[3]
  i832.spriteEnabled = !!i833[4]
  i832.uiEnabled = !!i833[5]
  i832.textMeshProEnabled = !!i833[6]
  i832.tk2DEnabled = !!i833[7]
  i832.deAudioEnabled = !!i833[8]
  i832.deUnityExtendedEnabled = !!i833[9]
  i832.epoOutlineEnabled = !!i833[10]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i835 = data
  var i837 = i835[0]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i837[i + 0]) );
  }
  i834.files = i836
  i834.componentToPrefabIds = i835[1]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i841 = data
  i840.path = i841[0]
  request.r(i841[1], i841[2], 0, i840, 'unityObject')
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i843 = data
  var i845 = i843[0]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i845[i + 0]) );
  }
  i842.scriptsExecutionOrder = i844
  var i847 = i843[1]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i847[i + 0]) );
  }
  i842.sortingLayers = i846
  var i849 = i843[2]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i849[i + 0]) );
  }
  i842.cullingLayers = i848
  i842.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i843[3], i842.timeSettings)
  i842.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i843[4], i842.physicsSettings)
  i842.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i843[5], i842.physics2DSettings)
  i842.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i843[6], i842.qualitySettings)
  i842.enableRealtimeShadows = !!i843[7]
  i842.enableAutoInstancing = !!i843[8]
  i842.enableStaticBatching = !!i843[9]
  i842.enableDynamicBatching = !!i843[10]
  i842.usePreservativeDynamicBatching = !!i843[11]
  i842.lightmapEncodingQuality = i843[12]
  i842.desiredColorSpace = i843[13]
  var i851 = i843[14]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( i851[i + 0] );
  }
  i842.allTags = i850
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i855 = data
  i854.name = i855[0]
  i854.value = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i859 = data
  i858.id = i859[0]
  i858.name = i859[1]
  i858.value = i859[2]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i863 = data
  i862.id = i863[0]
  i862.name = i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i865 = data
  i864.fixedDeltaTime = i865[0]
  i864.maximumDeltaTime = i865[1]
  i864.timeScale = i865[2]
  i864.maximumParticleTimestep = i865[3]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i867 = data
  i866.gravity = new pc.Vec3( i867[0], i867[1], i867[2] )
  i866.defaultSolverIterations = i867[3]
  i866.bounceThreshold = i867[4]
  i866.autoSyncTransforms = !!i867[5]
  i866.autoSimulation = !!i867[6]
  var i869 = i867[7]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i869[i + 0]) );
  }
  i866.collisionMatrix = i868
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i873 = data
  i872.enabled = !!i873[0]
  i872.layerId = i873[1]
  i872.otherLayerId = i873[2]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'material')
  i874.gravity = new pc.Vec2( i875[2], i875[3] )
  i874.positionIterations = i875[4]
  i874.velocityIterations = i875[5]
  i874.velocityThreshold = i875[6]
  i874.maxLinearCorrection = i875[7]
  i874.maxAngularCorrection = i875[8]
  i874.maxTranslationSpeed = i875[9]
  i874.maxRotationSpeed = i875[10]
  i874.baumgarteScale = i875[11]
  i874.baumgarteTOIScale = i875[12]
  i874.timeToSleep = i875[13]
  i874.linearSleepTolerance = i875[14]
  i874.angularSleepTolerance = i875[15]
  i874.defaultContactOffset = i875[16]
  i874.autoSimulation = !!i875[17]
  i874.queriesHitTriggers = !!i875[18]
  i874.queriesStartInColliders = !!i875[19]
  i874.callbacksOnDisable = !!i875[20]
  i874.reuseCollisionCallbacks = !!i875[21]
  i874.autoSyncTransforms = !!i875[22]
  var i877 = i875[23]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i877[i + 0]) );
  }
  i874.collisionMatrix = i876
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i881 = data
  i880.enabled = !!i881[0]
  i880.layerId = i881[1]
  i880.otherLayerId = i881[2]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i883 = data
  var i885 = i883[0]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i885[i + 0]) );
  }
  i882.qualityLevels = i884
  var i887 = i883[1]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i882.names = i886
  i882.shadows = i883[2]
  i882.anisotropicFiltering = i883[3]
  i882.antiAliasing = i883[4]
  i882.lodBias = i883[5]
  i882.shadowCascades = i883[6]
  i882.shadowDistance = i883[7]
  i882.shadowmaskMode = i883[8]
  i882.shadowProjection = i883[9]
  i882.shadowResolution = i883[10]
  i882.softParticles = !!i883[11]
  i882.softVegetation = !!i883[12]
  i882.activeColorSpace = i883[13]
  i882.desiredColorSpace = i883[14]
  i882.masterTextureLimit = i883[15]
  i882.maxQueuedFrames = i883[16]
  i882.particleRaycastBudget = i883[17]
  i882.pixelLightCount = i883[18]
  i882.realtimeReflectionProbes = !!i883[19]
  i882.shadowCascade2Split = i883[20]
  i882.shadowCascade4Split = new pc.Vec3( i883[21], i883[22], i883[23] )
  i882.streamingMipmapsActive = !!i883[24]
  i882.vSyncCount = i883[25]
  i882.asyncUploadBufferSize = i883[26]
  i882.asyncUploadTimeSlice = i883[27]
  i882.billboardsFaceCameraPosition = !!i883[28]
  i882.shadowNearPlaneOffset = i883[29]
  i882.streamingMipmapsMemoryBudget = i883[30]
  i882.maximumLODLevel = i883[31]
  i882.streamingMipmapsAddAllCameras = !!i883[32]
  i882.streamingMipmapsMaxLevelReduction = i883[33]
  i882.streamingMipmapsRenderersPerFrame = i883[34]
  i882.resolutionScalingFixedDPIFactor = i883[35]
  i882.streamingMipmapsMaxFileIORequests = i883[36]
  i882.currentQualityLevel = i883[37]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i893 = data
  i892.weight = i893[0]
  i892.vertices = i893[1]
  i892.normals = i893[2]
  i892.tangents = i893[3]
  return i892
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_ObjectArgument')
  i894.m_ObjectArgumentAssemblyTypeName = i895[2]
  i894.m_IntArgument = i895[3]
  i894.m_FloatArgument = i895[4]
  i894.m_StringArgument = i895[5]
  i894.m_BoolArgument = !!i895[6]
  return i894
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[12],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[34],"73":[34],"74":[34],"75":[34],"76":[34],"77":[34],"40":[34],"78":[34],"79":[34],"41":[34],"80":[34],"81":[34],"82":[34],"83":[12],"84":[85],"86":[87],"88":[87],"18":[17],"89":[7],"90":[12],"91":[92],"93":[17],"94":[21,17],"95":[85],"96":[21,17],"97":[17],"98":[17],"99":[85,17],"100":[17,21],"101":[102],"103":[102],"104":[102],"105":[17],"106":[17],"20":[18],"28":[21,17],"24":[17],"19":[18],"107":[17],"108":[17],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"115":[17],"22":[21,17],"116":[17],"117":[17],"118":[17],"119":[17],"25":[21,17],"120":[17],"121":[15],"122":[15],"16":[15],"123":[15],"124":[12],"125":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Image","UnityEngine.UI.Button","TutController","UnityEngine.BoxCollider2D","BlockController","UnityEngine.GameObject","UnityEngine.Rigidbody2D","LandmineController","SmokeController","TriggerMonster","UnityEngine.Rendering.SortingGroup","PlayerController","UnityEngine.HingeJoint2D","UnityEngine.TargetJoint2D","ShootController","BalanceController","MonsterController","MonsterMove","MonsterTarget","MonsterAnimation","UnityEngine.AudioSource","GameController","LayoutController","LunaController","AudioController","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "09/28/2026 08:09:01";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V05_YenTTH_TamNTM";

Deserializers.lunaAppID = "40364";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1755";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4460";

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

Deserializers.buildID = "23a07bd4-3a83-4e46-ab17-b40ad3d19629";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

